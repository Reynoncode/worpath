// classroom.js — Sinif Otağı sistemi

import { auth, db } from "./firebase.js";
import {
  collection, doc, addDoc, getDocs, query,
  where, getDoc, serverTimestamp, updateDoc, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const LEVELS = [
  { label: "A1", color: "#C0392B", total: 123 },
  { label: "A2", color: "#E67E22", total: 93  },
  { label: "B1", color: "#D4AC0D", total: 135 },
  { label: "B2", color: "#1E8449", total: 165 },
  { label: "C1", color: "#2471A3", total: 147 },
  { label: "C2", color: "#1B2A3B", total: 174 },
];

const STATUS_PHASE_MAP = {
  'completed': 1, 'phase2_unlocked': 1,
  'phase2_completed': 2, 'phase3_unlocked': 2, 'level_done': 3,
};

function calcProgress(userData) {
  const progress = userData.progress || {};
  const stats    = userData.stats    || {};
  const levelData = {};

  LEVELS.forEach(lv => {
    let done = 0;
    Object.entries(progress).forEach(([levelId, statuses]) => {
      if (levelId.toLowerCase().startsWith(lv.label.toLowerCase())) {
        if (Array.isArray(statuses)) statuses.forEach(s => { done += (STATUS_PHASE_MAP[s] || 0); });
      }
    });
    const pct = lv.total > 0 ? Math.min(100, Math.round((done / lv.total) * 100)) : 0;
    levelData[lv.label] = { done, total: lv.total, pct, color: lv.color };
  });

  const allWords      = Object.values(stats.words || {});
  const totalLearned  = allWords.filter(w => w.correct > 0).length;
  const totalAttempts = allWords.reduce((s, w) => s + w.attempts, 0);
  const totalCorrect  = allWords.reduce((s, w) => s + w.correct,  0);
  const correctRate   = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const totalErrors   = allWords.reduce((s, w) => s + w.errors, 0);

  const errorWords = allWords
    .filter(w => w.errors > 0)
    .sort((a, b) => b.errors - a.errors)
    .map(w => {
      const word = Object.keys(stats.words || {}).find(k => stats.words[k] === w) || "";
      return { word, translation: w.translation || "", level: w.level || "",
        errors: w.errors, starFixed: w.starFixed || false,
        severity: w.errors >= 3 ? "critical" : w.errors === 2 ? "medium" : "light" };
    });

  return { levelData, totalLearned, correctRate, totalErrors, errorWords };
}

function renderStudentDropdown(userData) {
  const p = calcProgress(userData);
  const SEV_CFG = {
    critical: { label: "Kritik zəiflik", icon: "⚠️", bg: "#FFF1F0", border: "#FCA5A5", textColor: "#991B1B" },
    medium:   { label: "Orta səviyyə",   icon: "⚡", bg: "#FFFBEB", border: "#FCD34D", textColor: "#92400E" },
    light:    { label: "Yüngül səhv",    icon: "ℹ️", bg: "#F0FDF4", border: "#86EFAC", textColor: "#14532D" },
  };

  const levelRows = LEVELS.map(lv => {
    const d = p.levelData[lv.label];
    return `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;">
        <div style="width:30px;height:30px;border-radius:5px;background:${lv.color};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:10px;font-weight:800;color:#fff;">${lv.label}</span>
        </div>
        <div style="flex:1;height:6px;background:#F0ECE4;border-radius:99px;overflow:hidden;">
          <div style="width:${d.pct}%;height:100%;background:${lv.color};border-radius:99px;"></div>
        </div>
        <span style="font-size:12px;font-weight:600;width:32px;text-align:right;color:${d.pct > 0 ? lv.color : '#C4B8A8'};">${d.pct}%</span>
        <span style="font-size:11px;color:#9CA3AF;width:52px;text-align:right;">${d.done}/${d.total}</span>
      </div>`;
  }).join("");

  const grouped = { critical: [], medium: [], light: [] };
  p.errorWords.forEach(w => grouped[w.severity].push(w));

  const errHTML = ["critical", "medium", "light"].filter(s => grouped[s].length > 0).map(sev => {
    const cfg = SEV_CFG[sev];
    const rows = grouped[sev].map(w => `
      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid #F3F4F6;">
        <div style="flex:1;">
          <span style="font-size:13px;font-weight:600;color:#1a1a1a;">${w.word}</span>
          <span style="font-size:10px;padding:1px 6px;border-radius:99px;background:#E1F5EE;color:#085041;margin-left:5px;">${w.level}</span>
          <div style="font-size:11px;color:#6B7280;">${w.translation}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:15px;font-weight:700;color:${cfg.textColor};">${w.errors}</div>
          <div style="font-size:10px;color:#9CA3AF;">səhv</div>
        </div>
      </div>`).join("");
    return `
      <div style="margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:6px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:8px 8px 0 0;padding:7px 12px;font-size:12px;font-weight:600;color:${cfg.textColor};">
          ${cfg.icon} ${cfg.label}
          <span style="font-size:10px;padding:1px 6px;border-radius:99px;background:${cfg.border};margin-left:2px;">${grouped[sev].length} söz</span>
        </div>
        <div style="background:#fff;border:1px solid ${cfg.border};border-top:none;border-radius:0 0 8px 8px;">${rows}</div>
      </div>`;
  }).join("") || `<div style="text-align:center;color:#14532D;font-size:13px;padding:16px;">🎉 Heç bir səhv yoxdur!</div>`;

  return `
    <div style="padding:14px;background:#F5F0E8;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
        <div style="background:#EDEAE2;border-radius:10px;padding:10px 12px;">
          <div style="font-size:20px;font-weight:700;color:#1A1A1A;">${p.totalLearned}</div>
          <div style="font-size:11px;color:#6B7280;">Öyrənilmiş söz</div>
        </div>
        <div style="background:#EDEAE2;border-radius:10px;padding:10px 12px;">
          <div style="font-size:20px;font-weight:700;color:#1A1A1A;">${p.correctRate}%</div>
          <div style="font-size:11px;color:#6B7280;">Düzgün cavab</div>
        </div>
        <div style="background:#EDEAE2;border-radius:10px;padding:10px 12px;">
          <div style="font-size:20px;font-weight:700;color:#1A1A1A;">${p.totalErrors}</div>
          <div style="font-size:11px;color:#6B7280;">Ümumi səhv</div>
        </div>
      </div>
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:12px 14px;margin-bottom:10px;">
        <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Səviyyə üzrə irəliləmə</div>
        ${levelRows}
      </div>
      <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Səhv analizi</div>
      ${errHTML}
    </div>`;
}

async function fetchStudentData(email) {
  const q    = query(collection(db, "users"), where("email", "==", email));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data();
}

async function loadClasses(teacherUid) {
  const q    = query(collection(db, "classes"), where("teacherUid", "==", teacherUid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function createClass(name, studentEmails, teacherUid, teacherEmail) {
  return await addDoc(collection(db, "classes"), {
    name, teacherUid, teacherEmail, students: studentEmails, createdAt: serverTimestamp()
  });
}

async function renderClassDetail(classData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  const students = await Promise.all(
    classData.students.map(async (email) => {
      const data = await fetchStudentData(email);
      return { email, displayName: data?.displayName || email, data, progress: data ? calcProgress(data) : null };
    })
  );
  students.sort((a, b) => (b.progress?.totalLearned || 0) - (a.progress?.totalLearned || 0));

  const medals = ["🥇", "🥈", "🥉"];
  const rows = students.map((st, i) => {
    const learned = st.progress?.totalLearned || 0;
    const rate    = st.progress?.correctRate  || 0;
    const key     = st.email.replace(/[@.]/g, "_");
    return `
      <div style="border-bottom:1px solid #F0ECE4;">
        <div onclick="ClassroomManager._toggleStudent('${key}')"
          style="display:flex;align-items:center;gap:10px;padding:12px 16px;cursor:pointer;">
          <span style="font-size:18px;width:26px;text-align:center;">${medals[i] || `${i+1}.`}</span>
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:600;color:#1A1A1A;">${st.displayName}</div>
            <div style="font-size:11px;color:#9CA3AF;">${st.email}</div>
          </div>
          <div style="text-align:right;margin-right:6px;">
            <div style="font-size:13px;font-weight:700;color:#1A1A1A;">${learned} söz</div>
            <div style="font-size:11px;color:#6B7280;">${rate}% düzgün</div>
          </div>
          <button onclick="event.stopPropagation();ClassroomManager._removeStudent('${classData.id}','${st.email}')"
            style="background:none;border:none;color:#FCA5A5;cursor:pointer;font-size:16px;padding:0 4px;" title="Sil">✕</button>
          <span style="font-size:12px;color:#C4B8A8;" id="chev-${key}">▼</span>
        </div>
        <div id="drop-${key}" style="display:none;">
          ${st.data ? renderStudentDropdown(st.data) : '<div style="padding:16px;text-align:center;color:#9CA3AF;font-size:13px;">Bu tələbə hələ giriş etməyib</div>'}
        </div>
      </div>`;
  }).join("");

  container.innerHTML = `
    <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;overflow:hidden;">
      ${rows || '<div style="padding:20px;text-align:center;color:#9CA3AF;font-size:13px;">Tələbə yoxdur</div>'}
    </div>`;
}

const openDropdowns = new Set();
function _toggleStudent(key) {
  const drop = document.getElementById(`drop-${key}`);
  const chev = document.getElementById(`chev-${key}`);
  if (!drop) return;
  if (openDropdowns.has(key)) {
    drop.style.display = "none";
    if (chev) chev.textContent = "▼";
    openDropdowns.delete(key);
  } else {
    openDropdowns.forEach(k => {
      const d = document.getElementById(`drop-${k}`);
      const c = document.getElementById(`chev-${k}`);
      if (d) d.style.display = "none";
      if (c) c.textContent = "▼";
    });
    openDropdowns.clear();
    drop.style.display = "block";
    if (chev) chev.textContent = "▲";
    openDropdowns.add(key);
  }
}

async function openClassroomModal() {
  const user = auth.currentUser;
  if (!user) { alert("Zəhmət olmasa əvvəlcə giriş edin."); return; }

  document.getElementById("classroom-modal")?.remove();
  const classes = await loadClasses(user.uid);

  const modal = document.createElement("div");
  modal.id = "classroom-modal";
  modal.style.cssText = `
    position:fixed;inset:0;z-index:1000;
    background:#F5F0E8;
    display:flex;flex-direction:column;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  `;
  modal.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid #E8E2D9;flex-shrink:0;">
      <span style="font-size:18px;font-weight:700;color:#1A1A1A;">Sinif Otağı</span>
      <button onclick="document.getElementById('classroom-modal').remove()"
        style="background:none;border:none;font-size:26px;color:#9CA3AF;cursor:pointer;line-height:1;padding:0;">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px 18px 32px;" id="classroom-content">
      ${renderClassList(classes)}
    </div>`;

  document.body.appendChild(modal);
}

function renderClassList(classes) {
  const cards = classes.map(cls => `
    <div onclick="ClassroomManager._openClass('${cls.id}')"
      style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <div style="font-size:14px;font-weight:700;color:#1A1A1A;">${cls.name}</div>
        <div style="font-size:12px;color:#9CA3AF;margin-top:2px;">${cls.students.length} tələbə</div>
      </div>
      <span style="font-size:20px;color:#C4B8A8;">›</span>
    </div>`).join("");
  return `
    ${cards}
    <button onclick="ClassroomManager._showCreateForm()"
      style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;padding:13px;font-size:14px;font-weight:600;cursor:pointer;margin-top:4px;">
      + Yeni Sinif Yarat
    </button>`;
}

async function _openClass(classId) {
  const content = document.getElementById("classroom-content");
  if (!content) return;
  const snap = await getDoc(doc(db, "classes", classId));
  if (!snap.exists()) return;
  const classData = { id: snap.id, ...snap.data() };

  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button onclick="ClassroomManager._backToList()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;">← Geri</button>
      <span style="font-size:16px;font-weight:700;color:#1A1A1A;flex:1;">${classData.name}</span>
      <button onclick="ClassroomManager._showAddStudent('${classId}')"
        style="background:#1A1A1A;color:#fff;border:none;border-radius:8px;padding:7px 12px;font-size:12px;font-weight:600;cursor:pointer;">+ Tələbə</button>
    </div>
    <div id="class-detail-container"></div>`;

  await renderClassDetail(classData, "class-detail-container");
}

function _showAddStudent(classId) {
  document.getElementById("add-student-panel")?.remove();
  const panel = document.createElement("div");
  panel.id = "add-student-panel";
  panel.style.cssText = `
    position:fixed;bottom:0;left:0;right:0;z-index:1100;
    background:#fff;border-top:1px solid #E8E2D9;
    padding:16px 18px 36px;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    box-shadow:0 -4px 20px rgba(0,0,0,0.08);
  `;
  panel.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <span style="font-size:14px;font-weight:700;color:#1A1A1A;">Tələbə əlavə et</span>
      <button onclick="document.getElementById('add-student-panel').remove()"
        style="background:none;border:none;font-size:22px;color:#9CA3AF;cursor:pointer;padding:0;">×</button>
    </div>
    <div style="display:flex;gap:8px;">
      <input id="new-student-email" type="email" placeholder="telebe@gmail.com"
        style="flex:1;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:13px;outline:none;" />
      <button onclick="ClassroomManager._addStudentToClass('${classId}')"
        style="background:#1A1A1A;color:#fff;border:none;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;">Əlavə et</button>
    </div>`;
  document.body.appendChild(panel);
}

async function _addStudentToClass(classId) {
  const input = document.getElementById("new-student-email");
  const email = input?.value.trim().toLowerCase();
  if (!email || !email.includes("@")) { alert("Düzgün email yazın."); return; }
  try {
    await updateDoc(doc(db, "classes", classId), { students: arrayUnion(email) });
    document.getElementById("add-student-panel")?.remove();
    await _openClass(classId);
  } catch (err) { console.error(err); alert("Xəta baş verdi."); }
}

async function _removeStudent(classId, email) {
  if (!confirm(`"${email}" silinsin?`)) return;
  try {
    await updateDoc(doc(db, "classes", classId), { students: arrayRemove(email) });
    await _openClass(classId);
  } catch (err) { console.error(err); alert("Xəta baş verdi."); }
}

function _showCreateForm() {
  const content = document.getElementById("classroom-content");
  if (!content) return;
  window._pendingEmails = [];
  content.innerHTML = `
    <div>
      <button onclick="ClassroomManager._backToList()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:16px;">← Geri</button>
      <div style="font-size:15px;font-weight:700;color:#1A1A1A;margin-bottom:14px;">Yeni Sinif Yarat</div>
      <div style="margin-bottom:12px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:5px;">Sinif adı</div>
        <input id="class-name-input" placeholder="məs: 7A, İngilis qrupu 1"
          style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:14px;background:#fff;outline:none;" />
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:5px;">Tələbə Gmail-ləri</div>
        <div id="email-list" style="margin-bottom:8px;"></div>
        <div style="display:flex;gap:8px;">
          <input id="email-input" type="email" placeholder="telebe@gmail.com"
            style="flex:1;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:13px;background:#fff;outline:none;" />
          <button onclick="ClassroomManager._addEmail()"
            style="background:#1A1A1A;color:#fff;border:none;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;">Əlavə et</button>
        </div>
      </div>
      <button onclick="ClassroomManager._submitCreate()"
        style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;padding:13px;font-size:14px;font-weight:600;cursor:pointer;">
        Sinifi Yarat
      </button>
    </div>`;
}

function _addEmail() {
  const input = document.getElementById("email-input");
  const email = input.value.trim().toLowerCase();
  if (!email || !email.includes("@")) return;
  if (window._pendingEmails.includes(email)) return;
  window._pendingEmails.push(email);
  input.value = "";
  _renderEmailList();
}

function _removeEmail(email) {
  window._pendingEmails = window._pendingEmails.filter(e => e !== email);
  _renderEmailList();
}

function _renderEmailList() {
  const list = document.getElementById("email-list");
  if (!list) return;
  list.innerHTML = window._pendingEmails.map(e => `
    <div style="display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid #E8E2D9;border-radius:8px;padding:8px 12px;margin-bottom:6px;">
      <span style="font-size:13px;color:#1A1A1A;">${e}</span>
      <button onclick="ClassroomManager._removeEmail('${e}')"
        style="background:none;border:none;color:#9CA3AF;cursor:pointer;font-size:18px;line-height:1;">×</button>
    </div>`).join("");
}

async function _submitCreate() {
  const user   = auth.currentUser;
  const name   = document.getElementById("class-name-input")?.value.trim();
  const emails = window._pendingEmails || [];
  if (!name)         { alert("Sinif adı yazın."); return; }
  if (!emails.length){ alert("Ən az 1 tələbə əlavə edin."); return; }
  try {
    await createClass(name, emails, user.uid, user.email);
    await _backToList();
  } catch (err) { console.error(err); alert("Xəta baş verdi."); }
}

async function _backToList() {
  const classes = await loadClasses(auth.currentUser.uid);
  const content = document.getElementById("classroom-content");
  if (content) content.innerHTML = renderClassList(classes);
}

window.ClassroomManager = {
  open: openClassroomModal,
  _toggleStudent, _showCreateForm, _addEmail, _removeEmail,
  _submitCreate, _backToList, _openClass,
  _showAddStudent, _addStudentToClass, _removeStudent
};
