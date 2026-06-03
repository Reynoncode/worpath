// classroom.js — Sinif Otağı sistemi

import { auth, db } from "./firebase.js";
import {
  collection, doc, addDoc, getDocs, query,
  where, getDoc, setDoc, serverTimestamp, getDocsFromServer
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── Səviyyə konfiqurasiyası ─────────────────────────────────────────────────
const LEVELS = [
  { label: "A1", color: "#C0392B", total: 123 },
  { label: "A2", color: "#E67E22", total: 93  },
  { label: "B1", color: "#D4AC0D", total: 135 },
  { label: "B2", color: "#1E8449", total: 165 },
  { label: "C1", color: "#2471A3", total: 147 },
  { label: "C2", color: "#1B2A3B", total: 174 },
];

const STATUS_PHASE_MAP = {
  "completed": 1, "phase2_unlocked": 1,
  "phase2_completed": 2, "phase3_unlocked": 2, "level_done": 3,
};

// ─── 1. Tələbə datasından söz irəliləməsi hesabla ───────────────────────────
function calcProgress(userData) {
  const progress = userData.progress || {};
  const stats    = userData.stats    || {};

  const levelData = {};
  LEVELS.forEach(lv => {
    let done = 0;
    Object.entries(progress).forEach(([levelId, statuses]) => {
      if (levelId.toLowerCase().startsWith(lv.label.toLowerCase())) {
        if (Array.isArray(statuses)) {
          statuses.forEach(s => { done += (STATUS_PHASE_MAP[s] || 0); });
        }
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
      return {
        word,
        translation: w.translation || "",
        level: w.level || "",
        errors: w.errors,
        starFixed: w.starFixed || false,
        severity: w.errors >= 3 ? "critical" : w.errors === 2 ? "medium" : "light"
      };
    });

  return { levelData, totalLearned, correctRate, totalErrors, errorWords };
}

function calcGrammarProgressForStudent(userData) {
  const grammarStats = userData.grammarStats || { rules: {} };
  const allRules = Object.entries(grammarStats.rules || {});
 
  const ruleStats = allRules.map(([ruleId, rule]) => {
    const questions     = Object.entries(rule.questions || {});
    const totalErrors   = questions.reduce((s, [, q]) => s + q.errors, 0);
    const nodeTotal     = rule.total     || 0;
    const nodeCompleted = rule.completed || 0;
    const pct           = nodeTotal > 0
      ? Math.min(100, Math.round((nodeCompleted / nodeTotal) * 100))
      : 0;
 
    const errorQuestions = questions
      .filter(([, q]) => q.errors > 0)
      .sort(([, a], [, b]) => b.errors - a.errors)
      .map(([text, q]) => ({ text, ...q }));
 
    return {
      ruleId,
      name:      rule.name || ruleId,
      total:     nodeTotal,
      completed: nodeCompleted,
      totalErrors,
      pct,
      errorQuestions,
    };
  });
 
  const completedCount = ruleStats.filter(r => r.completed).length;
  const totalRules     = ruleStats.length;
  const errorRules     = ruleStats
    .filter(r => r.totalErrors > 0)
    .sort((a, b) => b.totalErrors - a.totalErrors);
 
  return { ruleStats, completedCount, totalRules, errorRules };
}
 

// ─── 2. Tələbə datasından grammar irəliləməsi hesabla ───────────────────────
function calcGrammarProgressForStudent(userData) {
  const grammarStats = userData.grammarStats || { rules: {} };
  const allRules = Object.entries(grammarStats.rules || {});

  const ruleStats = allRules.map(([ruleId, rule]) => {
    const questions   = Object.entries(rule.questions || {});
    const totalQ      = questions.length;
    const totalErrors = questions.reduce((s, [, q]) => s + q.errors, 0);
    // Ən azı 1 dəfə düzgün cavablandırılmış sualların sayı
    const correctQ    = questions.filter(([, q]) => q.correct > 0).length;
    const pct         = totalQ > 0 ? Math.min(100, Math.round((correctQ / totalQ) * 100)) : 0;

    const errorQuestions = questions
      .filter(([, q]) => q.errors > 0)
      .sort(([, a], [, b]) => b.errors - a.errors)
      .map(([text, q]) => ({ text, ...q }));

    return {
      ruleId,
      name: rule.name || ruleId,
      completed: rule.completed || false,
      totalQuestions: totalQ,
      correctQ,
      totalErrors,
      pct,
      errorQuestions,
    };
  });

  const completedCount = ruleStats.filter(r => r.completed).length;
  const totalRules     = ruleStats.length;
  const errorRules     = ruleStats
    .filter(r => r.totalErrors > 0)
    .sort((a, b) => b.totalErrors - a.totalErrors);

  return { ruleStats, completedCount, totalRules, errorRules };
}

// ─── 3. Tələbə dropdown HTML (grammar bölümü daxil) ─────────────────────────
function renderStudentDropdown(userData, displayName) {
  const p  = calcProgress(userData);
  const gp = calcGrammarProgressForStudent(userData);
 
  const GRAMMAR_ACCENT = '#085041';
 
  const SEV_CFG = {
    critical: { label: "Kritik zəiflik", icon: "⚠️", bg: "#FFF1F0", border: "#FCA5A5", textColor: "#991B1B" },
    medium:   { label: "Orta səviyyə",   icon: "⚡", bg: "#FFFBEB", border: "#FCD34D", textColor: "#92400E" },
    light:    { label: "Yüngül səhv",    icon: "ℹ️", bg: "#F0FDF4", border: "#86EFAC", textColor: "#14532D" },
  };
 

  // ── Söz: Səviyyə irəliləmə sətirləri ──────────────────────────────────
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
        <span style="font-size:12px;font-weight:600;width:32px;text-align:right;color:${d.pct > 0 ? lv.color : "#C4B8A8"};">${d.pct}%</span>
        <span style="font-size:11px;color:#9CA3AF;width:52px;text-align:right;">${d.done}/${d.total}</span>
      </div>
    `;
  }).join("");

  // ── Söz: Səhv qrupları ─────────────────────────────────────────────────
  const grouped = { critical: [], medium: [], light: [] };
  p.errorWords.forEach(w => grouped[w.severity].push(w));

  const errHTML = ["critical", "medium", "light"].filter(s => grouped[s].length > 0).map(sev => {
    const cfg  = SEV_CFG[sev];
    const rows = grouped[sev].map(w => `
      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid #F3F4F6;">
        <div style="flex:1;">
          <span style="font-size:13px;font-weight:600;color:#1a1a1a;">${w.word}</span>
          <span style="font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:#E1F5EE;color:#085041;margin-left:5px;">${w.level}</span>
          <div style="font-size:11px;color:#6B7280;">${w.translation}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:15px;font-weight:700;color:${cfg.textColor};">${w.errors}</div>
          <div style="font-size:10px;color:#9CA3AF;">səhv</div>
        </div>
      </div>
    `).join("");
    return `
      <div style="margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:6px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:8px;padding:7px 12px;font-size:12px;font-weight:600;color:${cfg.textColor};">
          ${cfg.icon} ${cfg.label}
          <span style="font-size:10px;padding:1px 6px;border-radius:99px;background:${cfg.border};color:${cfg.textColor};margin-left:2px;">${grouped[sev].length} söz</span>
        </div>
        <div style="background:#fff;border:1px solid ${cfg.border};border-top:none;border-radius:0 0 8px 8px;">${rows}</div>
      </div>
    `;
  }).join("") || `<div style="text-align:center;color:#14532D;font-size:13px;padding:16px;">🎉 Heç bir söz səhvi yoxdur!</div>`;

  // ── Grammar: Qayda irəliləmə sətirləri ────────────────────────────────
  let grammarProgressRows = '';
  if (gp.ruleStats.length > 0) {
    grammarProgressRows = gp.ruleStats.map(rule => {
      const color = rule.completed
        ? GRAMMAR_ACCENT
        : (rule.pct > 0 ? GRAMMAR_ACCENT : '#C4B8A8');
      const badge = rule.completed
        ? `<span style="font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:#E1F5EE;color:#085041;">✓</span>`
        : '';
      return `
        <div style="margin-bottom:11px;">
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:600;color:#1A1A1A;flex:1;min-width:0;line-height:1.3;">${rule.name}</span>
            ${badge}
          </div>
          <div style="display:flex;align-items:center;gap:7px;">
            <div style="flex:1;height:5px;background:#F0ECE4;border-radius:99px;overflow:hidden;">
              <div style="width:${rule.pct}%;height:100%;background:${GRAMMAR_ACCENT};border-radius:99px;"></div>
            </div>
            <span style="font-size:11px;font-weight:600;width:30px;text-align:right;color:${color};">${rule.pct}%</span>
            <span style="font-size:10px;color:#9CA3AF;width:44px;text-align:right;">${rule.correctQ}/${rule.totalQuestions}</span>
          </div>
        </div>
      `;
    }).join('');
  } else {
    grammarProgressRows = `<div style="text-align:center;color:#9CA3AF;font-size:12px;padding:10px 0;">Hələ başlanılmayıb</div>`;
  }

  // ── Grammar: Qayda səhv analizi dropdown-ları ─────────────────────────
  const studentKey = (displayName || 'st').replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();

  let grammarErrHTML = '';
  if (gp.errorRules.length > 0) {
    grammarErrHTML = gp.errorRules.map(rule => {
      const safeId = `${studentKey}_${rule.ruleId.replace(/[^a-zA-Z0-9_]/g, '_')}`;

      let bg, border, textColor;
      if (rule.totalErrors >= 3) {
        bg = '#FFF1F0'; border = '#FCA5A5'; textColor = '#991B1B';
      } else if (rule.totalErrors === 2) {
        bg = '#FFFBEB'; border = '#FCD34D'; textColor = '#92400E';
      } else {
        bg = '#F0FDF4'; border = '#86EFAC'; textColor = '#14532D';
      }

      const icon = rule.totalErrors >= 3 ? '⚠️' : rule.totalErrors === 2 ? '⚡' : 'ℹ️';

      const rows = rule.errorQuestions.map(q => `
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 12px;border-bottom:1px solid #F3F4F6;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:12px;font-weight:500;color:#1A1A1A;line-height:1.4;">${q.text}</div>
            <div style="font-size:10px;color:#9CA3AF;margin-top:1px;">${q.attempts} cəhd · ${q.correct} düzgün</div>
          </div>
          <div style="text-align:center;flex-shrink:0;">
            <div style="font-size:14px;font-weight:700;color:${textColor};">${q.errors}</div>
            <div style="font-size:9px;color:#9CA3AF;">səhv</div>
          </div>
        </div>
      `).join('');

      return `
        <div style="margin-bottom:6px;">
          <button
            onclick="ClassroomManager._toggleGrammarRule('${safeId}')"
            id="cr-ghead-${safeId}"
            aria-expanded="false"
            style="width:100%;display:flex;align-items:center;gap:6px;background:${bg};border:1px solid ${border};
                   border-radius:8px;padding:7px 12px;cursor:pointer;font-size:12px;font-weight:600;
                   color:#1A1A1A;text-align:left;transition:border-radius 0.15s;">
            <span style="font-size:11px;">${icon}</span>
            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rule.name}</span>
            <span style="font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:${border};color:${textColor};flex-shrink:0;">${rule.errorQuestions.length} sual</span>
            <span style="font-size:11px;color:#9CA3AF;flex-shrink:0;" id="cr-gchev-${safeId}">▼</span>
          </button>
          <div id="cr-gbody-${safeId}"
            style="background:#fff;border:1px solid ${border};border-top:none;border-radius:0 0 8px 8px;overflow:hidden;display:none;">
            ${rows}
          </div>
        </div>
      `;
    }).join('');
  } else {
    grammarErrHTML = `
      <div style="text-align:center;color:#14532D;font-size:12px;padding:12px;
                  background:#F0FDF4;border:1px solid #86EFAC;border-radius:10px;">
        🎉 Heç bir grammar səhvi yoxdur!
      </div>
    `;
  }

  // ── Tam dropdown HTML ─────────────────────────────────────────────────
  return `
    <div style="padding:14px;background:#F5F0E8;border-radius:0 0 12px 12px;">

      <!-- Söz statistikası kartları -->
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

      <!-- Söz: Səviyyə üzrə irəliləmə -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:12px 14px;margin-bottom:10px;">
        <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Səviyyə üzrə irəliləmə</div>
        ${levelRows}
      </div>

      <!-- Söz: Səhv analizi -->
      <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Söz səhv analizi</div>
      ${errHTML}

      <!-- Bölücü -->
      <div style="height:1px;background:#E8E2D9;margin:14px 0;"></div>

      <!-- Grammar başlığı -->
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <span style="font-size:13px;font-weight:700;color:#1A1A1A;">📖 Grammar</span>
        ${gp.totalRules > 0
          ? `<span style="font-size:11px;color:#9CA3AF;">${gp.completedCount}/${gp.totalRules} tamamlandı</span>`
          : ''}
      </div>

      <!-- Grammar: Qayda üzrə irəliləmə -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:12px 14px;margin-bottom:10px;">
        <div style="font-size:10px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Qayda üzrə irəliləmə</div>
        ${grammarProgressRows}
      </div>

      <!-- Grammar: Qayda üzrə səhv analizi -->
      <div style="font-size:10px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Qayda üzrə səhv analizi</div>
      ${grammarErrHTML}

    </div>
  `;
}

// ─── Grammar toggle (classroom dropdown) ────────────────────────────────────
const _openGrammarRulesClassroom = new Set();

function _toggleGrammarRule(safeId) {
  const body    = document.getElementById(`cr-gbody-${safeId}`);
  const chevron = document.getElementById(`cr-gchev-${safeId}`);
  const head    = document.getElementById(`cr-ghead-${safeId}`);
  if (!body) return;

  if (_openGrammarRulesClassroom.has(safeId)) {
    _openGrammarRulesClassroom.delete(safeId);
    body.style.display  = 'none';
    if (chevron) chevron.textContent = '▼';
    if (head) { head.style.borderRadius = '8px'; head.setAttribute('aria-expanded', 'false'); }
  } else {
    _openGrammarRulesClassroom.add(safeId);
    body.style.display  = '';
    if (chevron) chevron.textContent = '▲';
    if (head) { head.style.borderRadius = '8px 8px 0 0'; head.setAttribute('aria-expanded', 'true'); }
  }
}

// ─── Tələbə datasını email ilə tap ──────────────────────────────────────────
async function fetchStudentData(email) {
  const q    = query(collection(db, "users"), where("email", "==", email));
  const snap = await getDocsFromServer(q);
  if (snap.empty) return null;
  return snap.docs[0].data();
}

// ─── Tələbə rolunu ləğv et ───────────────────────────────────────────────────
async function revokeStudentRole(email, classId) {
  const lowerEmail = email.toLowerCase();
  const q    = query(collection(db, "users"), where("email", "==", lowerEmail));
  const snap = await getDocsFromServer(q);

  if (snap.empty) {
    const { deleteDoc } = await import(
      "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
    );
    const pendingRef = doc(db, "pendingStudents", lowerEmail.replace(/[@.]/g, "_"));
    await deleteDoc(pendingRef).catch(() => {});
    return;
  }

  const userDoc  = snap.docs[0];
  const userData = userDoc.data();
  const { updateDoc, arrayRemove } = await import(
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
  );

  const updatedClasses = (userData.enrolledClasses || []).filter(c => c !== classId);

  if (updatedClasses.length === 0) {
    await updateDoc(doc(db, "users", userDoc.id), {
      role:            "guest",
      enrolledClasses: [],
    });
  } else {
    await updateDoc(doc(db, "users", userDoc.id), {
      enrolledClasses: arrayRemove(classId),
    });
  }
}

// ─── Sinif siyahısını yüklə ─────────────────────────────────────────────────
async function loadClasses(teacherUid) {
  const q    = query(collection(db, "classes"), where("teacherUid", "==", teacherUid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ─── Yeni sinif yarat ────────────────────────────────────────────────────────
async function createClass(name, studentEmails, teacherUid, teacherEmail) {
  const ref = await addDoc(collection(db, "classes"), {
    name,
    teacherUid,
    teacherEmail,
    students:  studentEmails,
    createdAt: serverTimestamp()
  });

  await Promise.all(studentEmails.map(email => grantStudentRole(email, ref.id)));

  return ref.id;
}

// ─── Tələbə əlavə et (mövcud sinifə) ────────────────────────────────────────
async function _addStudentToClass(classId) {
  const input = document.getElementById("add-student-input");
  const email = input?.value.trim().toLowerCase();
  if (!email || !email.includes("@")) { alert("Düzgün email daxil edin."); return; }

  const ref  = doc(db, "classes", classId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const current = snap.data().students || [];
  if (current.includes(email)) { alert("Bu tələbə artıq siyahıdadır."); return; }

  const { updateDoc, arrayUnion } = await import(
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
  );
  await updateDoc(ref, { students: arrayUnion(email) });

  await grantStudentRole(email, classId);

  input.value = "";
  const updatedSnap = await getDoc(ref);
  await renderClassDetail({ id: classId, ...updatedSnap.data() }, "class-detail-container");
}

// ─── Tələbəni siyahıdan çıxar ────────────────────────────────────────────────
async function _removeStudentFromClass(classId, email) {
  if (!confirm(`"${email}" tələbəsini siyahıdan çıxarmaq istəyirsən?`)) return;

  const ref = doc(db, "classes", classId);
  const { updateDoc, arrayRemove } = await import(
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
  );
  await updateDoc(ref, { students: arrayRemove(email) });

  await revokeStudentRole(email, classId);

  const updatedSnap = await getDoc(ref);
  await renderClassDetail({ id: classId, ...updatedSnap.data() }, "class-detail-container");
}

// ─── Top list render ────────────────────────────────────────────────────────
async function renderClassDetail(classData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  const students = await Promise.all(
    classData.students.map(async (email) => {
      const data = await fetchStudentData(email);
      const p    = data ? calcProgress(data) : null;
      return { email, displayName: data?.displayName || email, data, progress: p };
    })
  );

  students.sort((a, b) => (b.progress?.totalLearned || 0) - (a.progress?.totalLearned || 0));

  const medals = ["🥇", "🥈", "🥉"];

  const rows = students.map((st, i) => {
    const learned     = st.progress?.totalLearned || 0;
    const correctRate = st.progress?.correctRate  || 0;
    const medal       = medals[i] || `${i + 1}.`;
    const safeEmail   = st.email.replace(/[@.]/g, "_");

    return `
      <div class="student-row" style="border-bottom:1px solid #F0ECE4;">
        <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;">
          <div onclick="ClassroomManager._toggleStudent('${safeEmail}')"
            style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer;">
            <span style="font-size:18px;width:26px;text-align:center;">${medal}</span>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;color:#1A1A1A;">${st.displayName}</div>
              <div style="font-size:11px;color:#9CA3AF;">${st.email}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:13px;font-weight:700;color:#1A1A1A;">${learned} söz</div>
              <div style="font-size:11px;color:#6B7280;">${correctRate}% düzgün</div>
            </div>
            <span style="font-size:12px;color:#C4B8A8;margin-left:4px;" id="chev-${safeEmail}">▼</span>
          </div>
          <button onclick="ClassroomManager._removeStudentFromClass('${classData.id}','${st.email}')"
            title="Tələbəni çıxar"
            style="background:none;border:none;color:#FCA5A5;font-size:18px;cursor:pointer;padding:0 2px;flex-shrink:0;line-height:1;">×</button>
        </div>
        <div id="drop-${safeEmail}" style="display:none;">
          ${st.data
            ? renderStudentDropdown(st.data, st.displayName)
            : `<div style="padding:16px;text-align:center;color:#9CA3AF;font-size:13px;">
                Bu tələbə hələ giriş etməyib
                <div style="font-size:11px;margin-top:4px;color:#C4B8A8;">Sinif otağına əlavə edilib, tezliklə aktivləşəcək</div>
               </div>`
          }
        </div>
      </div>
    `;
  }).join("");

  const safeClassId = classData.id;

  container.innerHTML = `
    <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;overflow:hidden;">

      <div style="padding:12px 14px;background:#F5F0E8;border-bottom:1px solid #E8E2D9;display:flex;align-items:center;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-size:14px;font-weight:700;color:#1A1A1A;">${classData.name}</div>
          <div style="font-size:12px;color:#9CA3AF;">${students.length} tələbə</div>
        </div>
        <button onclick="ClassroomManager._toggleAddStudent('${safeClassId}')"
          id="toggle-add-student-btn"
          style="display:flex;align-items:center;gap:5px;background:#1A1A1A;color:#fff;border:none;border-radius:99px;
                 padding:7px 13px;font-size:12px;font-weight:600;cursor:pointer;flex-shrink:0;white-space:nowrap;">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Tələbə
        </button>
        <button onclick="ClassroomManager._openHomeworkPanel('${safeClassId}', '${classData.name.replace(/'/g, "\\'")}')"
          style="display:flex;align-items:center;gap:5px;background:#FAEEDA;color:#633806;border:1px solid #FAC775;border-radius:99px;
                 padding:7px 13px;font-size:12px;font-weight:600;cursor:pointer;flex-shrink:0;white-space:nowrap;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
          Ev tapşırığı
        </button>
      </div>

      ${rows || `<div style="padding:20px;text-align:center;color:#9CA3AF;font-size:13px;">Tələbə yoxdur</div>`}
    </div>

    <div id="add-student-panel" style="display:none;margin-top:10px;background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;">
      <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:8px;">Yeni tələbə əlavə et</div>
      <div style="font-size:11px;color:#9CA3AF;margin-bottom:8px;">
        Tələbənin Gmail ünvanını daxil edin. Əlavə edilən tələbə saytda giriş etdikdə Grammar və Reading/Listening bölümləri avtomatik açılacaq.
      </div>
      <div style="display:flex;gap:8px;">
        <input id="add-student-input" type="email" placeholder="telebe@gmail.com"
          style="flex:1;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:13px;background:#F9F7F3;outline:none;" />
        <button onclick="ClassroomManager._addStudentToClass('${safeClassId}')"
          style="background:#1A1A1A;color:#fff;border:none;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;">+ Əlavə et</button>
      </div>
    </div>

    <div id="homework-panel" style="display:none;margin-top:10px;background:#F5F0E8;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;">
    </div>
  `;
}

// ─── Tələbə əlavəetmə panelini aç/bağla ─────────────────────────────────────
function _toggleAddStudent() {
  const panel   = document.getElementById("add-student-panel");
  const hwPanel = document.getElementById("homework-panel");
  if (!panel) return;

  const isOpen = panel.style.display !== "none";
  panel.style.display = isOpen ? "none" : "block";
  if (hwPanel && !isOpen) hwPanel.style.display = "none";

  if (!isOpen) {
    setTimeout(() => {
      const inp = document.getElementById("add-student-input");
      if (inp) inp.focus();
    }, 50);
  }
}

// ─── Ev tapşırığı panelini aç/bağla ─────────────────────────────────────────
function _openHomeworkPanel(classId, className) {
  const panel   = document.getElementById("homework-panel");
  const stPanel = document.getElementById("add-student-panel");
  if (!panel) return;

  const isOpen = panel.style.display !== "none";
  if (isOpen) { panel.style.display = "none"; return; }

  if (stPanel) stPanel.style.display = "none";
  panel.style.display = "block";
  panel.innerHTML = `<div style="text-align:center;padding:16px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  if (window.HomeworkManager?.renderPanel) {
    window.HomeworkManager.renderManager(classId, className, panel);
  } else {
    panel.innerHTML = `<div style="text-align:center;padding:16px;color:#DC2626;font-size:13px;">HomeworkManager tapılmadı.</div>`;
  }
}

// ─── Dropdown aç/bağla ───────────────────────────────────────────────────────
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

// ─── Sinif otağı modal ───────────────────────────────────────────────────────
async function openClassroomModal() {
  const user = auth.currentUser;
  if (!user) {
    alert("Zəhmət olmasa əvvəlcə giriş edin.");
    return;
  }

  const existing = document.getElementById("classroom-modal");
  if (existing) existing.remove();

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
    <div style="display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid #E8E2D9;flex-shrink:0;">
      <button onclick="document.getElementById('classroom-modal').remove()"
        style="background:none;border:none;cursor:pointer;padding:4px;color:#9CA3AF;display:flex;align-items:center;justify-content:center;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <span style="font-size:16px;font-weight:700;color:#1A1A1A;">Sinif Otağı</span>
    </div>

    <div style="flex:1;overflow-y:auto;padding:16px 18px 24px;" id="classroom-content">
      ${renderClassList(classes)}
    </div>
  `;

  document.body.appendChild(modal);
}

// ─── Sinif siyahısı HTML ────────────────────────────────────────────────────
function renderClassList(classes) {
  const cards = classes.map(cls => `
    <div onclick="ClassroomManager._openClass('${cls.id}')"
      style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <div style="font-size:14px;font-weight:700;color:#1A1A1A;">${cls.name}</div>
        <div style="font-size:12px;color:#9CA3AF;margin-top:2px;">${cls.students.length} tələbə</div>
      </div>
      <span style="font-size:16px;color:#C4B8A8;">›</span>
    </div>
  `).join("");

  return `
    ${cards}
    <button onclick="ClassroomManager._showCreateForm()"
      style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;padding:13px;font-size:14px;font-weight:600;cursor:pointer;margin-top:4px;">
      + Yeni Sinif Yarat
    </button>
  `;
}

// ─── Sinif yaratma formu ─────────────────────────────────────────────────────
function _showCreateForm() {
  const content = document.getElementById("classroom-content");
  if (!content) return;

  content.innerHTML = `
    <div>
      <button onclick="ClassroomManager._backToList()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;">← Geri</button>

      <div style="font-size:15px;font-weight:700;color:#1A1A1A;margin-bottom:14px;">Yeni Sinif Yarat</div>

      <div style="margin-bottom:12px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:5px;">Sinif adı</div>
        <input id="class-name-input" placeholder="məs: 7A, İngilis qrupu 1"
          style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:14px;background:#fff;outline:none;" />
      </div>

      <div style="margin-bottom:14px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:5px;">Tələbə Gmail-ləri</div>
        <div style="font-size:11px;color:#9CA3AF;margin-bottom:8px;">
          Əlavə etdiyiniz tələbələr saytda giriş etdikdə Grammar və Reading/Listening bölümləri avtomatik açılacaq.
        </div>
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
    </div>
  `;

  window._pendingEmails = [];
}

// ─── Email əlavə et ──────────────────────────────────────────────────────────
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
        style="background:none;border:none;color:#9CA3AF;cursor:pointer;font-size:16px;line-height:1;">×</button>
    </div>
  `).join("");
}

// ─── Sinif yarat (submit) ────────────────────────────────────────────────────
async function _submitCreate() {
  const user   = auth.currentUser;
  const name   = document.getElementById("class-name-input")?.value.trim();
  const emails = window._pendingEmails || [];

  if (!name) { alert("Sinif adı yazın."); return; }
  if (emails.length === 0) { alert("Ən az 1 tələbə əlavə edin."); return; }

  try {
    await createClass(name, emails, user.uid, user.email);
    await _backToList();
  } catch (err) {
    console.error(err);
    alert("Xəta baş verdi.");
  }
}

// ─── Siyahıya qayıt ─────────────────────────────────────────────────────────
async function _backToList() {
  const user    = auth.currentUser;
  const classes = await loadClasses(user.uid);
  const content = document.getElementById("classroom-content");
  if (content) content.innerHTML = renderClassList(classes);
}

// ─── Sinif detalını aç ──────────────────────────────────────────────────────
async function _openClass(classId) {
  const content = document.getElementById("classroom-content");
  if (!content) return;

  content.innerHTML = `
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button onclick="ClassroomManager._backToList()"
          style="display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #E8E2D9;
                 border-radius:99px;padding:9px 16px;font-size:13px;font-weight:600;color:#1A1A1A;cursor:pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Geri
        </button>
        <button onclick="ClassroomManager._openClass('${classId}')"
          style="display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #E8E2D9;
                 border-radius:99px;padding:9px 16px;font-size:13px;font-weight:600;color:#1A1A1A;cursor:pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="1 4 1 10 7 10"/>
            <path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
          </svg>
          Yenilə
        </button>
      </div>
      <div id="class-detail-container"></div>
    </div>
  `;

  const ref  = doc(db, "classes", classId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const classData = { id: snap.id, ...snap.data() };
  await renderClassDetail(classData, "class-detail-container");
}

const _openGrammarRulesClassroom = new Set();

function _toggleGrammarRule(safeId) {
  const body    = document.getElementById(`cr-gbody-${safeId}`);
  const chevron = document.getElementById(`cr-gchev-${safeId}`);
  const head    = document.getElementById(`cr-ghead-${safeId}`);
  if (!body) return;

  if (_openGrammarRulesClassroom.has(safeId)) {
    _openGrammarRulesClassroom.delete(safeId);
    body.style.display  = 'none';
    if (chevron) chevron.textContent = '▼';
    if (head) { head.style.borderRadius = '8px'; head.setAttribute('aria-expanded', 'false'); }
  } else {
    _openGrammarRulesClassroom.add(safeId);
    body.style.display  = '';
    if (chevron) chevron.textContent = '▲';
    if (head) { head.style.borderRadius = '8px 8px 0 0'; head.setAttribute('aria-expanded', 'true'); }
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────
window.ClassroomManager = {
  open: openClassroomModal,
  _toggleGrammarRule, 
  _toggleStudent,
  _toggleAddStudent,
  _openHomeworkPanel,
  _showCreateForm,
  _addEmail,
  _removeEmail,
  _submitCreate,
  _backToList,
  _openClass,
  _addStudentToClass,
  _removeStudentFromClass,
  _toggleGrammarRule,
};
