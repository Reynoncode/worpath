// auth.js — Gmail girişi + local→cloud miqrasiya

import { auth, db, googleProvider } from "./firebase.js";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, getDoc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── Local data açarları ────────────────────────────────────────────────────
const LOCAL_STATS_KEY    = "wordpath_stats";
const LOCAL_PROGRESS_KEY = "wordpath_v1";

// ─── Firestore-a yaz ────────────────────────────────────────────────────────
async function saveUserData(uid, statsData, progressData) {
  const ref = doc(db, "users", uid);
  await setDoc(ref, {
    stats:     statsData,
    progress:  progressData,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

// ─── Firestore-dan oxu ──────────────────────────────────────────────────────
async function loadUserData(uid) {
  const ref  = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ─── Giriş edəndə cloud ↔ local sinxronizasiya ──────────────────────────────
// Hər girişdə:
//   - Cloud-da data varsa → cloud local-dan YENİDİRSƏ cloud üstünlük alır
//   - Cloud-da data yoxdursa → local datanı cloud-a köçür
async function syncOnLogin(uid) {
  const localStats    = localStorage.getItem(LOCAL_STATS_KEY);
  const localProgress = localStorage.getItem(LOCAL_PROGRESS_KEY);

  const cloudData = await loadUserData(uid);

  if (!cloudData || (!cloudData.stats && !cloudData.progress)) {
    // Cloud boşdur — local datanı köçür
    const statsObj    = localStats    ? JSON.parse(localStats)    : {};
    const progressObj = localProgress ? JSON.parse(localProgress) : {};
    await saveUserData(uid, statsObj, progressObj);
    console.log("✅ Local data cloud-a köçürüldü");
  } else {
    // Cloud-da data var — local cloud-dan YENİDİRSƏ local-ı cloud-a yaz
    await saveUserData(uid, 
      localStats    ? JSON.parse(localStats)    : {}, 
      localProgress ? JSON.parse(localProgress) : {}
    );
    console.log("✅ Local data cloud-a göndərildi");
  }
}

// ─── Stats/Progress dəyişdikdə cloud-a sinxronizasiya ───────────────────────
export async function syncStats() {
  const user = auth.currentUser;
  if (!user) return;

  const statsRaw    = localStorage.getItem(LOCAL_STATS_KEY);
  const progressRaw = localStorage.getItem(LOCAL_PROGRESS_KEY);
  const statsObj    = statsRaw    ? JSON.parse(statsRaw)    : {};
  const progressObj = progressRaw ? JSON.parse(progressRaw) : {};

  await saveUserData(user.uid, statsObj, progressObj);
  console.log("✅ Sync edildi");
}

// ─── Gmail ilə giriş ────────────────────────────────────────────────────────
async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (err) {
    console.error("Giriş xətası:", err);
    return null;
  }
}

// ─── Çıxış ──────────────────────────────────────────────────────────────────
async function signOutUser() {
  await syncStats(); // çıxışdan əvvəl son datanı yaz
  await signOut(auth);
}

// ─── Auth button render ──────────────────────────────────────────────────────
function renderAuthButton(user) {
  const container = document.getElementById("stats-auth-bar");
  if (!container) return;

  if (user) {
    const name = user.displayName ? user.displayName.split(" ")[0] : user.email;
    container.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;">
        <img src="${user.photoURL || ''}" 
             onerror="this.style.display='none'"
             style="width:28px;height:28px;border-radius:50%;object-fit:cover;" />
        <span style="font-size:12px;font-weight:600;color:#1A1A1A;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${name}</span>
        <button onclick="AuthManager.signOut()"
          style="font-size:11px;color:#9CA3AF;background:none;border:none;cursor:pointer;padding:0;">çıx</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button onclick="AuthManager.signIn()"
        style="display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #E8E2D9;border-radius:99px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:600;color:#1A1A1A;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12z" fill="#1A1A1A"/>
        </svg>
        Giriş
      </button>
    `;
  }
}

// ─── Auth vəziyyəti dəyişikliyi ─────────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  renderAuthButton(user);

  if (user) {
    // İstifadəçi profil məlumatlarını Firestore-da qeyd et
    const ref = doc(db, "users", user.uid);
    await setDoc(ref, {
      email:       user.email,
      displayName: user.displayName || "",
      photoURL:    user.photoURL    || "",
      lastLogin:   serverTimestamp()
    }, { merge: true });

    // Hər girişdə cloud ↔ local sinxronizasiya
    await syncOnLogin(user.uid);
  }

  // Sinif otağı düyməsinin görünürlüyü
  const classroomBtn = document.getElementById("classroom-btn");
  if (classroomBtn) classroomBtn.style.display = user ? "flex" : "none";

  const statsClassBtn = document.getElementById("stats-classroom-btn");
  if (statsClassBtn) statsClassBtn.style.display = user ? "flex" : "none";
});

// ─── Public API ─────────────────────────────────────────────────────────────
window.AuthManager = {
  signIn:         signInWithGoogle,
  signOut:        signOutUser,
  syncStats,
  getCurrentUser: () => auth.currentUser
};
