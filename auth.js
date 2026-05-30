// auth.js — Gmail girişi + rol sistemi (guest / student / teacher)

import { auth, db, googleProvider } from "./firebase.js";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, getDoc, setDoc, serverTimestamp, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ─── Achievement yoxlama sistemi ─────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: 'first_test',      icon: 'ti-flag',           name: 'İlk Addım',         desc: 'İlk testini tamamladın' },
  { id: 'first_exam',      icon: 'ti-trophy',         name: 'İmtahan Fatehi',    desc: 'İlk imtahanı keçdin' },
  { id: 'first_phase2',    icon: 'ti-heart',          name: 'İkinci Mərhələ',    desc: 'İlk Phase 2-ni tamamladın' },
  { id: 'first_phase3',    icon: 'ti-diamond',        name: 'Üçüncü Mərhələ',    desc: 'İlk Phase 3-ü tamamladın' },

  { id: 'a1_done',         icon: 'ti-circle-letter-a', name: 'A1 Başlanğıc',     desc: 'A1 səviyyəsini bitirdin' },
  { id: 'a1_phase2',       icon: 'ti-star',            name: 'A1 Dərinlik',      desc: 'A1 Phase 2-ni tamamladın' },
  { id: 'a1_phase3',       icon: 'ti-diamond',         name: 'A1 Ustası',        desc: 'A1 Phase 3-ü tamamladın' },

  { id: 'a2_done',         icon: 'ti-circle-letter-a', name: 'A2 Başlanğıc',     desc: 'A2 səviyyəsini bitirdin' },
  { id: 'a2_phase2',       icon: 'ti-star',            name: 'A2 Dərinlik',      desc: 'A2 Phase 2-ni tamamladın' },
  { id: 'a2_phase3',       icon: 'ti-diamond',         name: 'A2 Ustası',        desc: 'A2 Phase 3-ü tamamladın' },

  { id: 'b1_done',         icon: 'ti-circle-letter-b', name: 'B1 Başlanğıc',     desc: 'B1 səviyyəsini bitirdin' },
  { id: 'b1_phase2',       icon: 'ti-star',            name: 'B1 Dərinlik',      desc: 'B1 Phase 2-ni tamamladın' },
  { id: 'b1_phase3',       icon: 'ti-diamond',         name: 'B1 Ustası',        desc: 'B1 Phase 3-ü tamamladın' },

  { id: 'b2_done',         icon: 'ti-circle-letter-b', name: 'B2 Başlanğıc',     desc: 'B2 səviyyəsini bitirdin' },
  { id: 'b2_phase2',       icon: 'ti-star',            name: 'B2 Dərinlik',      desc: 'B2 Phase 2-ni tamamladın' },
  { id: 'b2_phase3',       icon: 'ti-diamond',         name: 'B2 Ustası',        desc: 'B2 Phase 3-ü tamamladın' },

  { id: 'c1_done',         icon: 'ti-circle-letter-c', name: 'C1 Başlanğıc',     desc: 'C1 səviyyəsini bitirdin' },
  { id: 'c1_phase2',       icon: 'ti-star',            name: 'C1 Dərinlik',      desc: 'C1 Phase 2-ni tamamladın' },
  { id: 'c1_phase3',       icon: 'ti-diamond',         name: 'C1 Ustası',        desc: 'C1 Phase 3-ü tamamladın' },

  { id: 'c2_done',         icon: 'ti-circle-letter-c', name: 'C2 Başlanğıc',     desc: 'C2 səviyyəsini bitirdin' },
  { id: 'c2_phase2',       icon: 'ti-star',            name: 'C2 Dərinlik',      desc: 'C2 Phase 2-ni tamamladın' },
  { id: 'c2_phase3',       icon: 'ti-diamond',         name: 'C2 Ustası',        desc: 'C2 Phase 3-ü tamamladın' },

  { id: 'streak_3',        icon: 'ti-flame',           name: '3 Günlük Od',      desc: '3 gün ardıcıl çalışdın' },
  { id: 'streak_7',        icon: 'ti-flame',           name: 'Həftəlik Alov',    desc: '1 həftə streak saxladın' },
  { id: 'streak_30',       icon: 'ti-flame',           name: 'Aylıq Alov',       desc: '1 ay streak saxladın' },
  { id: 'streak_90',       icon: 'ti-volcano',         name: 'Yanmaz Əzm',       desc: '3 ay streak saxladın' },

  { id: 'perfect_10',      icon: 'ti-bolt',            name: 'Dəqiq 10',         desc: 'Ardıcıl 10 səhvsiz cavab' },
  { id: 'perfect_20',      icon: 'ti-bolt',            name: 'Dəqiq 20',         desc: 'Ardıcıl 20 səhvsiz cavab' },
  { id: 'perfect_50',      icon: 'ti-stars',           name: 'Dəqiq 50',         desc: 'Ardıcıl 50 səhvsiz cavab' },
  { id: 'perfect_100',     icon: 'ti-crown',           name: 'Mükəmməl 100',     desc: 'Ardıcıl 100 səhvsiz cavab' },

  { id: 'kids_1',          icon: 'ti-mood-kid',        name: 'Uşaq Dostu',       desc: 'Kids bölümündən 1 hissə bitirdin' },
  { id: 'kids_3',          icon: 'ti-mood-happy',      name: 'Uşaq Ustası',      desc: 'Kids bölümündən 3 hissə bitirdin' },
  { id: 'kids_9',          icon: 'ti-palette',         name: 'Kids Qahrəmanı',   desc: 'Kids bölümündən 9 hissə bitirdin' },
  { id: 'kids_18',         icon: 'ti-school',          name: 'Kids Fatehi',      desc: 'Kids bölümündən 18 hissə bitirdin' },

  { id: 'stars_10',        icon: 'ti-star',            name: 'Ulduz Yığan',      desc: '10 ulduz topladın' },
  { id: 'stars_20',        icon: 'ti-star-filled',     name: 'Ulduz Sevən',      desc: '20 ulduz topladın' },
  { id: 'stars_50',        icon: 'ti-sparkles',        name: 'Ulduz Fatehi',     desc: '50 ulduz topladın' },
];

function checkAchievements() {
  const unlocked = new Set();

  let progress = {};
  try { progress = JSON.parse(localStorage.getItem('wordpath_v1') || '{}'); } catch(_) {}

  let stats = {};
  try { stats = JSON.parse(localStorage.getItem('wordpath_stats') || '{}'); } catch(_) {}

  const streak = parseInt(localStorage.getItem('wordpath_streak') || '0', 10);
  const stars  = parseInt(localStorage.getItem('wordpath_stars')  || '0', 10);

  const CEFR = ['a1','a2','b1','b2','c1','c2'];

  CEFR.forEach(lvl => {
    const statuses = progress[lvl] || [];
    const hasDone   = statuses.some(s => ['completed','phase2_completed','phase3_unlocked','level_done'].includes(s));
    const hasPhase2 = statuses.some(s => ['phase2_completed','phase3_unlocked','level_done'].includes(s));
    const hasPhase3 = statuses.some(s => s === 'level_done');
    if (hasDone)   unlocked.add(`${lvl}_done`);
    if (hasPhase2) unlocked.add(`${lvl}_phase2`);
    if (hasPhase3) unlocked.add(`${lvl}_phase3`);
  });

  const anyDone = CEFR.some(lvl =>
    (progress[lvl] || []).some(s => ['completed','phase2_completed','phase3_unlocked','level_done'].includes(s))
  );
  if (anyDone) unlocked.add('first_test');

  const anyExamDone = CEFR.some(lvl => (progress[lvl] || []).some(s => s === 'level_done'));
  if (anyExamDone) unlocked.add('first_exam');

  const anyPhase2 = CEFR.some(lvl =>
    (progress[lvl] || []).some(s => ['phase2_completed','phase3_unlocked','level_done'].includes(s))
  );
  if (anyPhase2) unlocked.add('first_phase2');

  const anyPhase3 = CEFR.some(lvl => (progress[lvl] || []).some(s => s === 'level_done'));
  if (anyPhase3) unlocked.add('first_phase3');

  if (streak >= 3)  unlocked.add('streak_3');
  if (streak >= 7)  unlocked.add('streak_7');
  if (streak >= 30) unlocked.add('streak_30');
  if (streak >= 90) unlocked.add('streak_90');

  if (stars >= 10) unlocked.add('stars_10');
  if (stars >= 20) unlocked.add('stars_20');
  if (stars >= 50) unlocked.add('stars_50');

  const perfectStreak = stats.perfectStreak || 0;
  if (perfectStreak >= 10)  unlocked.add('perfect_10');
  if (perfectStreak >= 20)  unlocked.add('perfect_20');
  if (perfectStreak >= 50)  unlocked.add('perfect_50');
  if (perfectStreak >= 100) unlocked.add('perfect_100');

  const kidsDone = (progress['kids'] || []).filter(s =>
    ['completed','phase2_completed','phase3_unlocked','level_done'].includes(s)
  ).length;
  if (kidsDone >= 1)  unlocked.add('kids_1');
  if (kidsDone >= 3)  unlocked.add('kids_3');
  if (kidsDone >= 9)  unlocked.add('kids_9');
  if (kidsDone >= 18) unlocked.add('kids_18');

  return unlocked;
}

// ─── Toast bildiriş sistemi ───────────────────────────────────────────────────
const ACH_KEY = 'wordpath_achievements';

function _loadUnlocked() {
  try { return new Set(JSON.parse(localStorage.getItem(ACH_KEY) || '[]')); }
  catch(_) { return new Set(); }
}

function _saveUnlocked(set) {
  localStorage.setItem(ACH_KEY, JSON.stringify([...set]));
}

let _toastQueue   = [];
let _toastActive  = false;

function _showNextToast() {
  if (_toastActive || _toastQueue.length === 0) return;
  _toastActive = true;

  const ach    = _toastQueue.shift();
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;top:16px;left:16px;z-index:99999;
    display:flex;align-items:center;gap:10px;
    background:${isDark ? '#1a2d10' : '#fff'};
    border:1.5px solid ${isDark ? '#4ade80' : '#86EFAC'};
    border-radius:14px;
    padding:11px 16px 11px 12px;
    box-shadow:0 4px 20px rgba(0,0,0,0.15);
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    min-width:220px;max-width:300px;
    transform:translateX(-120%);
    transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    cursor:pointer;
  `;

  toast.innerHTML = `
    <div style="
      width:38px;height:38px;flex-shrink:0;
      border-radius:10px;
      background:${isDark ? '#0a2418' : '#F0FDF4'};
      display:flex;align-items:center;justify-content:center;
    ">
      <i class="ti ${ach.icon}" style="font-size:20px;color:${isDark ? '#4ade80' : '#16A34A'};"></i>
    </div>
    <div style="min-width:0;">
      <div style="font-size:10px;font-weight:600;color:${isDark ? '#4ade80' : '#16A34A'};text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px;">Yeni nailiyyət!</div>
      <div style="font-size:13px;font-weight:700;color:${isDark ? '#dce8f2' : '#1A1A1A'};line-height:1.3;">${ach.name}</div>
      <div style="font-size:11px;color:${isDark ? '#6d90a8' : '#6B7280'};margin-top:1px;">${ach.desc}</div>
    </div>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    toast.style.transform = 'translateX(0)';
  }));

  function dismiss() {
    clearTimeout(timer);
    toast.style.transition = 'transform 0.3s ease-in';
    toast.style.transform  = 'translateX(-120%)';
    setTimeout(() => {
      toast.remove();
      _toastActive = false;
      _showNextToast();
    }, 320);
  }

  const timer = setTimeout(dismiss, 5000);
  toast.addEventListener('click', dismiss);
}

// ─── Yeni nailiyyətləri yoxla və bildiriş göstər ─────────────────────────────
// Hər lazım olan yerdə çağır — Stats.recordAnswer()-dan sonra, exam bitəndə və s.
function checkAndNotify() {
  const current  = checkAchievements();
  const previous = _loadUnlocked();
  const newOnes  = [...current].filter(id => !previous.has(id));

  if (newOnes.length > 0) {
    _saveUnlocked(current);
    newOnes.forEach(id => {
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      if (ach) _toastQueue.push(ach);
    });
    _showNextToast();
  }
}

// checkAndNotify-ni global et — quiz.js və digər fayllardan çağırmaq üçün
window.checkAndNotify = checkAndNotify;

function renderAchievements() {
  const unlocked = checkAchievements();
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  return ACHIEVEMENTS.map(a => {
    const isUnlocked = unlocked.has(a.id);
    const cardBg     = isDark ? (isUnlocked ? '#1a2d10' : '#142233') : (isUnlocked ? '#F0FDF4' : '#F5F0E8');
    const cardBorder = isDark ? (isUnlocked ? '#3a5418' : '#1d3348') : (isUnlocked ? '#86EFAC' : '#E8E2D9');
    const iconColor  = isDark ? (isUnlocked ? '#4ade80' : '#3f5e72') : (isUnlocked ? '#16A34A' : '#9CA3AF');
    const nameColor  = isDark ? (isUnlocked ? '#dce8f2' : '#3f5e72') : (isUnlocked ? '#1A1A1A' : '#9CA3AF');
    const descColor  = isDark ? '#3f5e72' : '#9CA3AF';

    return `
      <div style="
        background:${cardBg};border:1px solid ${cardBorder};border-radius:12px;
        padding:12px 8px;text-align:center;
        opacity:${isUnlocked ? '1' : '0.55'};transition:opacity 0.2s;
      ">
        <i class="ti ${a.icon}" style="font-size:24px;color:${iconColor};display:block;margin-bottom:5px;"></i>
        <div style="font-size:11px;font-weight:700;color:${nameColor};line-height:1.3;margin-bottom:2px;">${a.name}</div>
        <div style="font-size:10px;color:${descColor};line-height:1.3;">${isUnlocked ? a.desc : '🔒'}</div>
      </div>
    `;
  }).join('');
}

// ─── Local data açarları ────────────────────────────────────────────────────
const LOCAL_STATS_KEY    = "wordpath_stats";
const LOCAL_PROGRESS_KEY = "wordpath_v1";

// ─── Firestore-a yaz ────────────────────────────────────────────────────────
async function saveUserData(uid, statsData, progressData) {
  const ref = doc(db, "users", uid);
 const existingDoc = await getDoc(ref);
const existingPhoto = existingDoc.exists() ? existingDoc.data().photoURL : null;

await setDoc(ref, {
  email:       user.email,
  displayName: user.displayName || "",
  photoURL:    existingPhoto || user.photoURL || "",
  lastLogin:   serverTimestamp()
}, { merge: true });
}

// ─── Firestore-dan oxu ──────────────────────────────────────────────────────
async function loadUserData(uid) {
  const ref  = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ─── Rol yoxla ───────────────────────────────────────────────────────────────
async function fetchUserRole(user) {
  if (!user) return "guest";

  const tQuery = query(
    collection(db, "approvedTeachers"),
    where("email", "==", user.email.toLowerCase())
  );
  const tSnap = await getDocs(tQuery);
  if (!tSnap.empty) return "teacher";

  const cQuery = query(
    collection(db, "classes"),
    where("students", "array-contains", user.email.toLowerCase())
  );
  const cSnap = await getDocs(cQuery);
  if (!cSnap.empty) return "student";

  try {
    const key         = user.email.toLowerCase().replace(/[@.]/g, "_");
    const pendingSnap = await getDoc(doc(db, "pendingStudents", key));
    if (pendingSnap.exists()) return "student";
  } catch (_) {}

  return "guest";
}

// ─── Rol tətbiq et ───────────────────────────────────────────────────────────
async function applyRole(user) {
  const role = await fetchUserRole(user);
  window.__userRole = role;

  updateRestrictedPages(role);

  const classroomBtn       = document.getElementById("stats-classroom-btn");
  const classroomBtnInline = document.getElementById("stats-classroom-btn-inline");
  if (classroomBtn)       classroomBtn.style.display       = role === "teacher" ? "flex" : "none";
  if (classroomBtnInline) classroomBtnInline.style.display = role === "teacher" ? "flex" : "none";

  return role;
}

// ─── Məhdud səhifələri idarə et ─────────────────────────────────────────────
function updateRestrictedPages(role) {
  const hasAccess = role === "student" || role === "teacher";

  const dot1 = document.querySelector('.nav-dot[data-page="1"]');
  const dot3 = document.querySelector('.nav-dot[data-page="3"]');
  if (dot1) dot1.style.display = hasAccess ? "" : "none";
  if (dot3) dot3.style.display = hasAccess ? "" : "none";

  if (!hasAccess && window.currentPage !== undefined) {
    if (window.currentPage === 1 || window.currentPage === 3) {
      if (typeof window.goToPage === "function") window.goToPage(2);
    }
  }

  showOrHideLockOverlays(role);
}

// ─── Kilit overlay ───────────────────────────────────────────────────────────
function showOrHideLockOverlays(role) {
  const hasAccess = role === "student" || role === "teacher";

  ["page-1", "page-3"].forEach(pageId => {
    const page = document.getElementById(pageId);
    if (!page) return;

    const existingLock = page.querySelector(".page-lock-overlay");

    if (!hasAccess) {
      if (existingLock) return;

      const overlay = document.createElement("div");
      overlay.className = "page-lock-overlay";
      overlay.style.cssText = `
        position:absolute;inset:0;z-index:10;
        background:rgba(245,240,232,0.92);
        backdrop-filter:blur(6px);
        display:flex;flex-direction:column;
        align-items:center;justify-content:center;
        gap:12px;pointer-events:all;
      `;

      const isGrammar = pageId === "page-1";
      overlay.innerHTML = `
        <div style="font-size:48px;">${isGrammar ? "📚" : "🎧"}</div>
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;text-align:center;padding:0 24px;">
          ${isGrammar ? "Grammar & Yazı" : "Reading & Listening"}
        </div>
        <div style="font-size:13px;color:#6B7280;text-align:center;padding:0 32px;line-height:1.5;">
          Bu bölüm yalnız müəllim tərəfindən sinif otağına əlavə edilmiş<br>tələbələrə açıqdır.
        </div>
        <button onclick="AuthManager.signIn()"
          style="margin-top:4px;background:#1A1A1A;color:#fff;border:none;border-radius:99px;
                 padding:10px 24px;font-size:13px;font-weight:600;cursor:pointer;">
          Giriş et
        </button>
      `;

      page.style.position = "relative";
      page.appendChild(overlay);
    } else {
      if (existingLock) existingLock.remove();
    }
  });
}

// ─── Giriş edəndə cloud ↔ local sinxronizasiya ──────────────────────────────
async function syncOnLogin(uid) {
  const localStats    = localStorage.getItem(LOCAL_STATS_KEY);
  const localProgress = localStorage.getItem(LOCAL_PROGRESS_KEY);

  const cloudData = await loadUserData(uid);

  if (!cloudData || (!cloudData.stats && !cloudData.progress)) {
    const statsObj    = localStats    ? JSON.parse(localStats)    : {};
    const progressObj = localProgress ? JSON.parse(localProgress) : {};
    await saveUserData(uid, statsObj, progressObj);
    console.log("✅ Local data cloud-a köçürüldü");
  } else {
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
  await syncStats();
  await signOut(auth);
}

// ─── Auth button render ──────────────────────────────────────────────────────
function renderAuthButton(user) {
  const container = document.getElementById("stats-auth-bar");
  if (!container) return;

  if (user) {
    const name  = user.displayName ? user.displayName.split(" ")[0] : user.email;
    const photo = user.photoURL || "";
    container.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;cursor:pointer;"
           onclick="AuthManager.openProfileModal()">
        ${photo
          ? `<img src="${photo}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #E8E2D9;" />`
          : `<div style="width:28px;height:28px;border-radius:50%;background:#EDEAE2;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#6B7280;">${name.charAt(0).toUpperCase()}</div>`
        }
        <span style="font-size:12px;font-weight:600;color:#1A1A1A;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${name}</span>
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
    const ref = doc(db, "users", user.uid);
    await setDoc(ref, {
      email:       user.email,
      displayName: user.displayName || "",
      photoURL:    user.photoURL    || "",
      lastLogin:   serverTimestamp()
    }, { merge: true });

    await syncOnLogin(user.uid);
    await applyRole(user);
    _updateHeaderAvatar(user);

  } else {
    window.__userRole = "guest";
    updateRestrictedPages("guest");

    const classroomBtn       = document.getElementById("stats-classroom-btn");
    const classroomBtnInline = document.getElementById("stats-classroom-btn-inline");
    if (classroomBtn)       classroomBtn.style.display       = "none";
    if (classroomBtnInline) classroomBtnInline.style.display = "none";

    _updateHeaderAvatar(null);
  }
});

function _updateHeaderAvatar(user) {
  const avatar = document.getElementById("header-profile-avatar");
  if (!avatar) return;

  if (user) {
    if (user.photoURL) {
      avatar.innerHTML = `<img src="${user.photoURL}" style="width:100%;height:100%;border-radius:10px;object-fit:cover;display:block;" />`;
    } else {
      const name = user.displayName ? user.displayName.split(" ")[0] : user.email;
      avatar.innerHTML  = "";
      avatar.textContent = name.charAt(0).toUpperCase();
      avatar.style.fontSize   = "13px";
      avatar.style.fontWeight = "700";
      avatar.style.color      = "#6B7280";
    }
  } else {
    avatar.innerHTML  = "";
    avatar.textContent = "?";
    avatar.style.fontSize   = "13px";
    avatar.style.fontWeight = "700";
    avatar.style.color      = "#6B7280";
  }
}

// ─── Şəkli resize et ────────────────────────────────────────────────────────
function resizeImage(file, maxSize = 400, quality = 0.8) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let w = img.width, h = img.height;
        if (w > h) { if (w > maxSize) { h = h * maxSize / w; w = maxSize; } }
        else       { if (h > maxSize) { w = w * maxSize / h; h = maxSize; } }
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ─── Profil modalını aç ──────────────────────────────────────────────────────
async function openProfileModal() {
  const user = auth.currentUser;
  if (!user) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const existingModal = document.getElementById("profile-modal");
  if (existingModal) existingModal.remove();

  const userData   = await loadUserData(user.uid);
  const savedName  = userData?.displayName || user.displayName || "";
  const savedPhoto = userData?.photoURL    || user.photoURL    || "";

  const role = window.__userRole || "guest";
  const roleBadges = {
    teacher: { label: "Müəllim", bg: "#DCFCE7", color: "#14532D", border: "#86EFAC", icon: "🎓" },
    student: { label: "Tələbə",  bg: "#EFF6FF", color: "#1E3A5F", border: "#93C5FD", icon: "📖" },
    guest:   { label: "Qonaq",   bg: "#F5F5F5", color: "#6B7280", border: "#D1D5DB", icon: "👤" },
  };
  const rb = roleBadges[role];
  const roleBadgeHTML = `
    <div style="display:inline-flex;align-items:center;gap:5px;background:${rb.bg};border:1px solid ${rb.border};border-radius:99px;padding:4px 12px;font-size:12px;font-weight:600;color:${rb.color};">
      ${rb.icon} ${rb.label}
    </div>
  `;

  const modal = document.createElement("div");
  modal.id = "profile-modal";
  modal.style.cssText = `
    position:fixed;inset:0;z-index:3000;
    background:rgba(0,0,0,0.4);
    display:flex;align-items:flex-end;justify-content:center;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  `;

  modal.innerHTML = `
    <div id="profile-sheet" style="
      background:#F5F0E8;
      width:100%;max-width:480px;
      border-radius:20px 20px 0 0;
      padding:0 0 32px;
      transform:translateY(100%);
      transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);
      max-height:90vh;overflow-y:auto;
      -ms-overflow-style:none;scrollbar-width:none;
    ">
      <div style="display:flex;justify-content:center;padding:12px 0 4px;">
        <div style="width:36px;height:4px;border-radius:99px;background:#D1C9BE;"></div>
      </div>

      <div style="padding:16px 20px 0;">

        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
          <div style="position:relative;flex-shrink:0;" onclick="document.getElementById('profile-photo-input').click()">
            <div id="profile-photo-wrap" style="
              width:64px;height:64px;border-radius:50%;
              background:#EDEAE2;overflow:hidden;
              border:2px solid #E8E2D9;
              display:flex;align-items:center;justify-content:center;cursor:pointer;
            ">
              ${savedPhoto
                ? `<img id="profile-photo-img" src="${savedPhoto}" style="width:100%;height:100%;object-fit:cover;" />`
                : `<span style="font-size:24px;font-weight:700;color:#6B7280;">${savedName.charAt(0).toUpperCase()}</span>`
              }
            </div>
            <div style="
              position:absolute;bottom:0;right:0;
              width:22px;height:22px;border-radius:50%;
              background:#1A1A1A;border:2px solid #F5F0E8;
              display:flex;align-items:center;justify-content:center;cursor:pointer;
            ">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <input type="file" id="profile-photo-input" accept="image/*" style="display:none;"
              onchange="AuthManager._handlePhotoChange(event)" />
          </div>

          <div style="flex:1;">
            <div style="font-size:11px;font-weight:600;color:#6B7280;margin-bottom:5px;text-transform:uppercase;letter-spacing:0.06em;">İstifadəçi adı</div>
            <div style="display:flex;gap:8px;align-items:center;">
              <input id="profile-name-input" value="${savedName}"
  style="width:60%;padding:9px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:14px;font-weight:600;background:#fff;outline:none;color:#1A1A1A;" />
<button onclick="AuthManager._saveName()"
  style="flex-shrink:0;background:#1A1A1A;color:#fff;border:none;border-radius:10px;padding:9px 12px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;">
  Saxla
</button>
            </div>
            <div id="profile-save-msg" style="font-size:11px;color:#16A34A;margin-top:4px;display:none;">✓ Saxlandı</div>
          </div>
        </div>

        <div style="margin-bottom:12px;">${roleBadgeHTML}</div>

        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:12px 14px;margin-bottom:12px;">
          <div style="font-size:11px;font-weight:600;color:#9CA3AF;margin-bottom:2px;">Email</div>
          <div style="font-size:13px;color:#1A1A1A;">${user.email}</div>
        </div>

        <button onclick="AuthManager._confirmSignOut()"
          style="width:100%;background:#FFF1F0;color:#DC2626;border:1px solid #FCA5A5;border-radius:12px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:16px;">
          🚪 Çıxış et
        </button>

        <div style="background:${isDark ? '#142233' : '#fff'};border:1px solid ${isDark ? '#1d3348' : '#E8E2D9'};border-radius:14px;padding:16px;">
          <div style="font-size:12px;font-weight:700;color:${isDark ? '#6d90a8' : '#6B7280'};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
            <i class="ti ti-medal" style="margin-right:4px;"></i> Nailiyyətlər
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${renderAchievements()}
          </div>
        </div>

      </div>
    </div>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProfileModal();
  });

  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById("profile-sheet").style.transform = "translateY(0)";
    });
  });
}

// ─── Profil modalını bağla ───────────────────────────────────────────────────
function closeProfileModal() {
  const sheet = document.getElementById("profile-sheet");
  if (sheet) {
    sheet.style.transform = "translateY(100%)";
    setTimeout(() => {
      const modal = document.getElementById("profile-modal");
      if (modal) modal.remove();
    }, 300);
  }
}

// ─── Profil şəklini dəyiş ───────────────────────────────────────────────────
async function _handlePhotoChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  const base64 = await resizeImage(file, 400, 0.8);

  const wrap = document.getElementById("profile-photo-wrap");
  if (wrap) wrap.innerHTML = `<img src="${base64}" style="width:100%;height:100%;object-fit:cover;" />`;

  const user = auth.currentUser;
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  await setDoc(ref, { photoURL: base64 }, { merge: true });

  renderAuthButton({ ...user, photoURL: base64 });
  _updateHeaderAvatar({ ...user, photoURL: base64 });
}

// ─── Adı saxla ───────────────────────────────────────────────────────────────
async function _saveName() {
  const input = document.getElementById("profile-name-input");
  const name  = input?.value.trim();
  if (!name) return;

  const user = auth.currentUser;
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  await setDoc(ref, { displayName: name }, { merge: true });

  const msg = document.getElementById("profile-save-msg");
  if (msg) { msg.style.display = "block"; setTimeout(() => msg.style.display = "none", 2000); }

  renderAuthButton({ ...user, displayName: name });
  _updateHeaderAvatar({ ...user, displayName: name });
}

// ─── Çıxış təsdiqi ──────────────────────────────────────────────────────────
function _confirmSignOut() {
  const confirmDiv = document.createElement("div");
  confirmDiv.id = "signout-confirm-overlay";
  confirmDiv.style.cssText = `
    position:fixed;inset:0;z-index:4000;
    background:rgba(0,0,0,0.5);
    display:flex;align-items:center;justify-content:center;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  `;
  confirmDiv.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:24px 20px;width:280px;text-align:center;">
      <div style="font-size:32px;margin-bottom:10px;">🚪</div>
      <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px;">Çıxış etmək istəyirsən?</div>
      <div style="font-size:13px;color:#6B7280;margin-bottom:20px;">İrəliləyişin saxlanacaq.</div>
      <div style="display:flex;gap:10px;">
        <button onclick="document.getElementById('signout-confirm-overlay').remove()"
          style="flex:1;padding:11px;border:1px solid #E8E2D9;border-radius:10px;background:#fff;font-size:13px;font-weight:600;color:#6B7280;cursor:pointer;">
          Ləğv et
        </button>
        <button onclick="AuthManager.signOut();document.getElementById('signout-confirm-overlay').remove();AuthManager._closeProfileModal();"
          style="flex:1;padding:11px;border:none;border-radius:10px;background:#DC2626;color:#fff;font-size:13px;font-weight:600;cursor:pointer;">
          Çıxış et
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmDiv);
}

// ─── Public API ─────────────────────────────────────────────────────────────
window.AuthManager = {
  signIn:             signInWithGoogle,
  signOut:            signOutUser,
  syncStats,
  getCurrentUser:     () => auth.currentUser,
  openProfileModal,
  _closeProfileModal: closeProfileModal,
  _handlePhotoChange,
  _saveName,
  _confirmSignOut,
  applyRole,
  updateRestrictedPages,
};

window.__userRole = "guest";
updateRestrictedPages("guest");
