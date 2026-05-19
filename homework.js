// homework.js — Ev Tapşırığı Sistemi (Müəllim + Tələbə)

import { auth, db } from "./firebase.js";
import {
  collection, doc, addDoc, getDocs, getDoc,
  query, where, updateDoc, serverTimestamp, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ════════════════════════════════════════════════════════════
//  MÜƏLLIM TƏRƏFİ — Test yaratma UI
// ════════════════════════════════════════════════════════════

let _hwState = {
  classId:   null,
  className: null,
  questions: [],   // [{ text, options:["","","",""], correct:0 }]
  qCount:    5,
};

// ─── Ev tapşırığı yaratma panelini render et ─────────────────────────────────
function renderHomeworkPanel(classId, className, container) {
  _hwState.classId   = classId;
  _hwState.className = className;
  _hwState.questions = [];

  container.innerHTML = `
    <div style="padding:0 2px;">

      <!-- Başlıq -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <div style="width:34px;height:34px;background:#1A1A1A;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        </div>
        <div>
          <div style="font-size:14px;font-weight:700;color:#1A1A1A;">Yeni Ev Tapşırığı</div>
          <div style="font-size:11px;color:#9CA3AF;">${className}</div>
        </div>
      </div>

      <!-- Sual sayı seçimi -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:10px;">Sual sayı seçin</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;" id="hw-qcount-btns">
          ${[3,5,7,10,15,20].map(n => `
            <button onclick="HomeworkManager._setQCount(${n})" id="hw-qc-${n}"
              style="padding:7px 16px;border-radius:99px;border:1px solid ${n===5?'#1A1A1A':'#E8E2D9'};
                     background:${n===5?'#1A1A1A':'#fff'};color:${n===5?'#fff':'#6B7280'};
                     font-size:13px;font-weight:600;cursor:pointer;">
              ${n}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Test başlığı -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;margin-bottom:6px;">Test başlığı (ixtiyari)</div>
        <input id="hw-title-input" placeholder="məs: Unit 5 — Söz testi"
          style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;font-size:13px;background:#F9F7F3;outline:none;"/>
      </div>

      <!-- Suallar bölümü -->
      <div id="hw-questions-container" style="margin-bottom:12px;"></div>

      <!-- Sual əlavə et düyməsi -->
      <button onclick="HomeworkManager._addQuestion()"
        style="width:100%;padding:12px;border:2px dashed #E8E2D9;border-radius:12px;background:transparent;
               color:#6B7280;font-size:13px;font-weight:600;cursor:pointer;margin-bottom:14px;
               display:flex;align-items:center;justify-content:center;gap:6px;"
        id="hw-add-q-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Sual əlavə et
      </button>

      <!-- Göndər düyməsi -->
      <button onclick="HomeworkManager._submitHomework()"
        style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
        ✓ Testi Tələbələrə Göndər
      </button>

      <div id="hw-error-msg" style="margin-top:10px;font-size:12px;color:#DC2626;text-align:center;display:none;"></div>
    </div>
  `;
}

// ─── Sual sayı seç ───────────────────────────────────────────────────────────
function _setQCount(n) {
  _hwState.qCount = n;
  [3,5,7,10,15,20].forEach(v => {
    const btn = document.getElementById(`hw-qc-${v}`);
    if (!btn) return;
    btn.style.background = v === n ? "#1A1A1A" : "#fff";
    btn.style.color      = v === n ? "#fff"    : "#6B7280";
    btn.style.border     = `1px solid ${v === n ? "#1A1A1A" : "#E8E2D9"}`;
  });
}

// ─── Yeni sual əlavə et ──────────────────────────────────────────────────────
function _addQuestion() {
  const max = _hwState.qCount;
  if (_hwState.questions.length >= max) {
    _showHwError(`Maksimum ${max} sual əlavə edə bilərsiniz.`);
    return;
  }

  const idx = _hwState.questions.length;
  _hwState.questions.push({ text: "", options: ["", ""], correct: 0 });
  _renderQuestion(idx);
  _updateAddBtn();
}

// ─── Sualı render et ────────────────────────────────────────────────────────
function _renderQuestion(idx) {
  const container = document.getElementById("hw-questions-container");
  if (!container) return;

  // Köhnə element varsa yenilə
  const existingEl = document.getElementById(`hw-q-${idx}`);
  const q = _hwState.questions[idx];

  const optionsHTML = q.options.map((opt, oi) => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;" id="hw-q${idx}-opt-row-${oi}">
      <!-- Doğru cavab radio -->
      <button onclick="HomeworkManager._setCorrect(${idx},${oi})" id="hw-q${idx}-radio-${oi}"
        style="width:20px;height:20px;border-radius:50%;border:2px solid ${q.correct===oi?'#1A1A1A':'#E8E2D9'};
               background:${q.correct===oi?'#1A1A1A':'transparent'};cursor:pointer;flex-shrink:0;
               display:flex;align-items:center;justify-content:center;padding:0;transition:all 0.15s;">
        ${q.correct===oi?'<div style="width:8px;height:8px;border-radius:50%;background:#fff;"></div>':''}
      </button>
      <!-- Bənd mətni -->
      <input type="text" value="${_escHtml(opt)}"
        oninput="HomeworkManager._updateOption(${idx},${oi},this.value)"
        placeholder="${String.fromCharCode(65+oi)} bəndi"
        style="flex:1;padding:8px 10px;border:1px solid #E8E2D9;border-radius:8px;font-size:13px;background:#F9F7F3;outline:none;"/>
      <!-- Bənd sil (min 2 olduqda gizlət) -->
      ${q.options.length > 2 ? `
        <button onclick="HomeworkManager._removeOption(${idx},${oi})"
          style="background:none;border:none;color:#FCA5A5;font-size:18px;cursor:pointer;padding:0 2px;line-height:1;">×</button>
      ` : '<div style="width:20px;"></div>'}
    </div>
  `).join("");

  const canAddOpt = q.options.length < 4;

  const html = `
    <div id="hw-q-${idx}"
      style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:10px;">

      <!-- Sual başlığı sətri -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#1A1A1A;">Sual ${idx+1}</div>
        <button onclick="HomeworkManager._deleteQuestion(${idx})"
          style="background:none;border:none;color:#9CA3AF;font-size:20px;cursor:pointer;padding:0;line-height:1;">×</button>
      </div>

      <!-- Sual mətni -->
      <textarea oninput="HomeworkManager._updateQuestionText(${idx},this.value)"
        placeholder="Sual mətnini yazın..."
        rows="2"
        style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #E8E2D9;border-radius:10px;
               font-size:13px;background:#F9F7F3;outline:none;resize:none;margin-bottom:10px;
               font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;"
      >${_escHtml(q.text)}</textarea>

      <!-- Cavab bəndləri -->
      <div style="font-size:11px;font-weight:600;color:#6B7280;margin-bottom:6px;">
        Bəndlər <span style="font-weight:400;">(doğru cavabı ● ilə işarələyin)</span>
      </div>
      <div id="hw-q${idx}-opts">${optionsHTML}</div>

      ${canAddOpt ? `
        <button onclick="HomeworkManager._addOption(${idx})"
          style="font-size:12px;color:#6B7280;background:none;border:1px dashed #E8E2D9;border-radius:8px;
                 padding:6px 12px;cursor:pointer;margin-top:2px;">
          + Bənd əlavə et
        </button>
      ` : ''}
    </div>
  `;

  if (existingEl) {
    existingEl.outerHTML = html;
  } else {
    container.insertAdjacentHTML("beforeend", html);
  }
}

// ─── Sual mətnini yenilə ─────────────────────────────────────────────────────
function _updateQuestionText(idx, val) {
  if (_hwState.questions[idx]) _hwState.questions[idx].text = val;
}

// ─── Bənd mətnini yenilə ─────────────────────────────────────────────────────
function _updateOption(idx, oi, val) {
  if (_hwState.questions[idx]) _hwState.questions[idx].options[oi] = val;
}

// ─── Doğru cavabı seç ────────────────────────────────────────────────────────
function _setCorrect(idx, oi) {
  if (!_hwState.questions[idx]) return;
  _hwState.questions[idx].correct = oi;
  _renderQuestion(idx);
}

// ─── Bənd əlavə et ───────────────────────────────────────────────────────────
function _addOption(idx) {
  const q = _hwState.questions[idx];
  if (!q || q.options.length >= 4) return;
  q.options.push("");
  _renderQuestion(idx);
}

// ─── Bənd sil ────────────────────────────────────────────────────────────────
function _removeOption(idx, oi) {
  const q = _hwState.questions[idx];
  if (!q || q.options.length <= 2) return;
  q.options.splice(oi, 1);
  if (q.correct >= q.options.length) q.correct = q.options.length - 1;
  _renderQuestion(idx);
}

// ─── Sualı sil ───────────────────────────────────────────────────────────────
function _deleteQuestion(idx) {
  _hwState.questions.splice(idx, 1);
  // Bütün sualları yenidən render et
  const container = document.getElementById("hw-questions-container");
  if (container) container.innerHTML = "";
  _hwState.questions.forEach((_, i) => _renderQuestion(i));
  _updateAddBtn();
}

// ─── "Sual əlavə et" düyməsini yenilə ────────────────────────────────────────
function _updateAddBtn() {
  const btn = document.getElementById("hw-add-q-btn");
  if (!btn) return;
  const atMax = _hwState.questions.length >= _hwState.qCount;
  btn.style.opacity = atMax ? "0.4" : "1";
  btn.textContent   = atMax
    ? `Maksimum ${_hwState.qCount} sual əlavə edildi`
    : `+ Sual əlavə et (${_hwState.questions.length}/${_hwState.qCount})`;
}

// ─── Xəta mesajı ─────────────────────────────────────────────────────────────
function _showHwError(msg) {
  const el = document.getElementById("hw-error-msg");
  if (!el) return;
  el.textContent   = msg;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 3000);
}

// ─── Testi Firestore-a göndər ────────────────────────────────────────────────
async function _submitHomework() {
  const user = auth.currentUser;
  if (!user) return;

  const title     = document.getElementById("hw-title-input")?.value.trim() || "Ev tapşırığı";
  const questions = _hwState.questions;

  // Validation
  if (questions.length === 0) {
    _showHwError("Ən az 1 sual əlavə edin."); return;
  }
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!q.text.trim()) {
      _showHwError(`Sual ${i+1} mətnini yazın.`); return;
    }
    const filledOpts = q.options.filter(o => o.trim());
    if (filledOpts.length < 2) {
      _showHwError(`Sual ${i+1} üçün ən az 2 bənd doldurun.`); return;
    }
    if (!q.options[q.correct]?.trim()) {
      _showHwError(`Sual ${i+1} üçün doğru cavab boşdur.`); return;
    }
  }

  // Boş bəndləri sil
  const cleanQuestions = questions.map(q => ({
    text:    q.text.trim(),
    options: q.options.map(o => o.trim()).filter(o => o),
    correct: q.correct
  }));

  try {
    const btn = document.querySelector("[onclick=\"HomeworkManager._submitHomework()\"]");
    if (btn) { btn.disabled = true; btn.textContent = "Göndərilir..."; }

    await addDoc(collection(db, "homeworks"), {
      classId:    _hwState.classId,
      teacherUid: user.uid,
      title:      title,
      questions:  cleanQuestions,
      createdAt:  serverTimestamp(),
      status:     "active"
    });

    // Uğurlu mesaj + geri qayıt
    const container = document.getElementById("hw-questions-container");
    if (container) {
      const parent = container.closest("[id]") || container.parentElement;
      parent.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:40px;margin-bottom:12px;">✅</div>
          <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px;">Ev tapşırığı göndərildi!</div>
          <div style="font-size:13px;color:#6B7280;margin-bottom:20px;">Tələbələr statistika səhifəsində görəcək.</div>
          <button onclick="ClassroomManager._openClass('${_hwState.classId}')"
            style="background:#1A1A1A;color:#fff;border:none;border-radius:12px;padding:12px 24px;font-size:13px;font-weight:600;cursor:pointer;">
            ← Sinfə qayıt
          </button>
        </div>
      `;
    }
  } catch(err) {
    console.error("Homework yazma xətası:", err);
    _showHwError("Xəta baş verdi. Yenidən cəhd edin.");
    const btn = document.querySelector("[onclick=\"HomeworkManager._submitHomework()\"]");
    if (btn) { btn.disabled = false; btn.textContent = "✓ Testi Tələbələrə Göndər"; }
  }
}

// ════════════════════════════════════════════════════════════
//  TƏLƏBƏ TƏRƏFİ — Ev tapşırığı kartı + test interfeysi
// ════════════════════════════════════════════════════════════

// ─── Aktiv ev tapşırıqlarını yüklə ──────────────────────────────────────────
export async function loadStudentHomeworks() {
  const user = auth.currentUser;
  if (!user) return [];

  // İstifadəçinin daxil olduğu sinifləri tap
  const classSnap = await getDocs(
    query(collection(db, "classes"), where("students", "array-contains", user.email))
  );
  if (classSnap.empty) return [];

  const classIds = classSnap.docs.map(d => d.id);

  // Hər sinifdəki aktiv ev tapşırıqlarını yüklə
  const hwList = [];
  for (const cid of classIds) {
    const hwSnap = await getDocs(
      query(collection(db, "homeworks"),
        where("classId", "==", cid),
        where("status",  "==", "active")
      )
    );
    hwSnap.docs.forEach(d => hwList.push({ id: d.id, ...d.data() }));
  }

  // Tamamlanmış tapşırıqları filtrele
  const results = await _getCompletedHwIds(user.uid);
  return hwList.filter(hw => !results.includes(hw.id));
}

// ─── Tamamlanmış hw ID-lərini yüklə ─────────────────────────────────────────
async function _getCompletedHwIds(uid) {
  const snap = await getDocs(
    query(collection(db, "homeworkResults"), where("uid", "==", uid))
  );
  return snap.docs.map(d => d.data().homeworkId);
}

// ─── Statistika səhifəsindəki ev tapşırığı kartı ────────────────────────────
export async function renderHomeworkCard(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;">Ev tapşırığı</div>
      </div>
      <div style="font-size:12px;color:#9CA3AF;">Yüklənir...</div>
    </div>
  `;

  try {
    const homeworks = await loadStudentHomeworks();

    if (homeworks.length === 0) {
      el.innerHTML = `
        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;margin-bottom:12px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;">Ev tapşırığı</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;background:#F0FDF4;border-radius:8px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:14px;">✅</span>
            </div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#1A1A1A;">Aktiv tapşırıq yoxdur</div>
              <div style="font-size:11px;color:#9CA3AF;">Müəllimin yeni test göndərməsini gözlə</div>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const cards = homeworks.map(hw => {
      const qCount = hw.questions?.length || 0;
      const date   = hw.createdAt?.toDate
        ? _formatDate(hw.createdAt.toDate())
        : "";

      return `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #F0ECE4;"
             id="hw-card-${hw.id}">
          <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
            <div style="width:34px;height:34px;background:#FAEEDA;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#633806" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </div>
            <div style="min-width:0;">
              <div style="font-size:13px;font-weight:600;color:#1A1A1A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escHtml(hw.title)}</div>
              <div style="font-size:11px;color:#9CA3AF;">${qCount} sual · ${date}</div>
            </div>
          </div>
          <button onclick="HomeworkManager.startHomework('${hw.id}')"
            style="background:#1A1A1A;color:#fff;border:none;border-radius:99px;padding:8px 14px;
                   font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;flex-shrink:0;margin-left:10px;">
            Başla →
          </button>
        </div>
      `;
    }).join("");

    el.innerHTML = `
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;">Ev tapşırığı</div>
          <span style="margin-left:auto;background:#FAEEDA;color:#633806;font-size:10px;font-weight:700;
                       padding:2px 8px;border-radius:99px;border:1px solid #FAC775;">
            ${homeworks.length} yeni
          </span>
        </div>
        ${cards}
      </div>
    `;
  } catch(err) {
    console.error("Homework card xətası:", err);
    el.innerHTML = "";
  }
}

// ════════════════════════════════════════════════════════════
//  TEST İNTERFEYSİ — Tələbə testi həll edir
// ════════════════════════════════════════════════════════════

let _testState = {
  hw:        null,
  idx:       0,
  answers:   [],
  correct:   0,
  wrong:     0,
  locked:    false,
};

// ─── Testi başlat ────────────────────────────────────────────────────────────
async function startHomework(hwId) {
  const snap = await getDoc(doc(db, "homeworks", hwId));
  if (!snap.exists()) { alert("Tapşırıq tapılmadı."); return; }

  const hw = { id: snap.id, ...snap.data() };
  _testState = {
    hw,
    idx:     0,
    answers: new Array(hw.questions.length).fill(null),
    correct: 0,
    wrong:   0,
    locked:  false,
  };

  _renderTestScreen();
}

// ─── Test ekranını render et ─────────────────────────────────────────────────
function _renderTestScreen() {
  // Mövcud overlay-i sil
  const existing = document.getElementById("hw-test-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "hw-test-overlay";
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:2000;background:#F5F0E8;
    display:flex;flex-direction:column;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  `;

  overlay.innerHTML = `
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;padding:14px 18px;background:#F5F0E8;border-bottom:1px solid #E8E2D9;flex-shrink:0;">
      <button onclick="HomeworkManager._confirmQuitTest()"
        style="background:none;border:none;cursor:pointer;padding:4px;color:#9CA3AF;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div style="flex:1;background:#E8E2D9;border-radius:99px;height:6px;overflow:hidden;">
        <div id="hw-test-progress" style="height:100%;background:#1A1A1A;border-radius:99px;transition:width 0.3s ease;width:0%;"></div>
      </div>
      <span id="hw-test-counter" style="font-size:12px;font-weight:600;color:#6B7280;white-space:nowrap;">
        1/${_testState.hw.questions.length}
      </span>
    </div>

    <!-- Sual bölümü -->
    <div style="flex:1;overflow-y:auto;padding:20px 18px 100px;" id="hw-test-body">
    </div>

    <!-- Alt düymə -->
    <div style="padding:14px 18px;background:#F5F0E8;border-top:1px solid #E8E2D9;flex-shrink:0;" id="hw-test-footer">
      <button id="hw-next-btn" onclick="HomeworkManager._nextQuestion()"
        style="width:100%;background:#E8E2D9;color:#9CA3AF;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:not-allowed;">
        Növbəti →
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  _renderTestQuestion();
}

// ─── Sualı render et ────────────────────────────────────────────────────────
function _renderTestQuestion() {
  const { hw, idx } = _testState;
  const q     = hw.questions[idx];
  const total = hw.questions.length;
  const pct   = Math.round((idx / total) * 100);

  const progressEl = document.getElementById("hw-test-progress");
  const counterEl  = document.getElementById("hw-test-counter");
  if (progressEl) progressEl.style.width = `${pct}%`;
  if (counterEl)  counterEl.textContent  = `${idx+1}/${total}`;

  const body = document.getElementById("hw-test-body");
  if (!body) return;

  const optLetters = ["A", "B", "C", "D"];

  const optsHTML = q.options.map((opt, oi) => `
    <button id="hw-opt-${oi}" onclick="HomeworkManager._selectAnswer(${oi})"
      style="width:100%;text-align:left;padding:14px 16px;border-radius:12px;
             border:2px solid #E8E2D9;background:#fff;cursor:pointer;margin-bottom:10px;
             display:flex;align-items:center;gap:12px;transition:all 0.15s;font-size:14px;font-family:inherit;">
      <span style="width:26px;height:26px;border-radius:8px;background:#F0ECE4;display:flex;align-items:center;
                   justify-content:center;font-size:12px;font-weight:700;color:#6B7280;flex-shrink:0;">
        ${optLetters[oi]}
      </span>
      <span style="color:#1A1A1A;font-weight:500;">${_escHtml(opt)}</span>
    </button>
  `).join("");

  body.innerHTML = `
    <div style="margin-bottom:6px;">
      <span style="font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">
        Sual ${idx+1}
      </span>
    </div>
    <div style="font-size:17px;font-weight:700;color:#1A1A1A;line-height:1.5;margin-bottom:20px;">
      ${_escHtml(q.text)}
    </div>
    <div id="hw-opts-container">${optsHTML}</div>
  `;

  _testState.locked = false;
  _setNextBtnState(false);
}

// ─── Cavab seç ────────────────────────────────────────────────────────────────
function _selectAnswer(oi) {
  if (_testState.locked) return;
  _testState.locked = true;

  const { hw, idx } = _testState;
  const q = hw.questions[idx];
  const isCorrect = (oi === q.correct);

  _testState.answers[idx] = oi;
  if (isCorrect) _testState.correct++; else _testState.wrong++;

  // Düzgün/yanlış rəng
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById(`hw-opt-${i}`);
    if (!btn) continue;
    btn.style.cursor = "default";
    if (i === q.correct) {
      btn.style.borderColor = "#16A34A";
      btn.style.background  = "#F0FDF4";
      const letter = btn.querySelector("span");
      if (letter) { letter.style.background = "#16A34A"; letter.style.color = "#fff"; }
    } else if (i === oi && !isCorrect) {
      btn.style.borderColor = "#DC2626";
      btn.style.background  = "#FFF1F0";
      const letter = btn.querySelector("span");
      if (letter) { letter.style.background = "#DC2626"; letter.style.color = "#fff"; }
    }
  }

  _setNextBtnState(true);
}

// ─── "Növbəti" düyməsinin vəziyyəti ─────────────────────────────────────────
function _setNextBtnState(active) {
  const btn = document.getElementById("hw-next-btn");
  if (!btn) return;
  if (active) {
    btn.style.background = "#1A1A1A";
    btn.style.color      = "#fff";
    btn.style.cursor     = "pointer";
    const isLast = _testState.idx === _testState.hw.questions.length - 1;
    btn.textContent = isLast ? "Bitir ✓" : "Növbəti →";
  } else {
    btn.style.background = "#E8E2D9";
    btn.style.color      = "#9CA3AF";
    btn.style.cursor     = "not-allowed";
    btn.textContent      = "Növbəti →";
  }
}

// ─── Növbəti sual / bitir ────────────────────────────────────────────────────
function _nextQuestion() {
  if (!_testState.locked) return;

  const total = _testState.hw.questions.length;
  if (_testState.idx < total - 1) {
    _testState.idx++;
    _renderTestQuestion();
  } else {
    _finishTest();
  }
}

// ─── Testi bitir + Firestore-a yaz ───────────────────────────────────────────
async function _finishTest() {
  const user = auth.currentUser;
  const { hw, correct, wrong, answers } = _testState;
  const total = hw.questions.length;
  const pct   = Math.round((correct / total) * 100);

  // Nəticəni Firestore-a yaz
  try {
    await addDoc(collection(db, "homeworkResults"), {
      uid:        user.uid,
      homeworkId: hw.id,
      classId:    hw.classId,
      answers:    answers,
      correct:    correct,
      wrong:      wrong,
      total:      total,
      score:      pct,
      completedAt: serverTimestamp()
    });
  } catch(err) {
    console.error("Nəticə yazma xətası:", err);
  }

  // Nəticə ekranı
  const body   = document.getElementById("hw-test-body");
  const footer = document.getElementById("hw-test-footer");

  const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
  const msg   = pct >= 80 ? "Əla nəticə!" : pct >= 50 ? "Yaxşı nəticə!" : "Davam et, bacararsan!";

  const progressEl = document.getElementById("hw-test-progress");
  const counterEl  = document.getElementById("hw-test-counter");
  if (progressEl) progressEl.style.width = "100%";
  if (counterEl)  counterEl.textContent  = `${total}/${total}`;

  if (body) body.innerHTML = `
    <div style="text-align:center;padding:30px 10px;">
      <div style="font-size:52px;margin-bottom:12px;">${emoji}</div>
      <div style="font-size:20px;font-weight:800;color:#1A1A1A;margin-bottom:6px;">${msg}</div>
      <div style="font-size:14px;color:#6B7280;margin-bottom:24px;">${hw.title}</div>

      <!-- Nəticə kartı -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:16px;padding:20px;margin-bottom:16px;">
        <div style="font-size:48px;font-weight:800;color:#1A1A1A;margin-bottom:4px;">${pct}%</div>
        <div style="font-size:13px;color:#6B7280;margin-bottom:16px;">Düzgün cavab faizi</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="background:#F0FDF4;border-radius:10px;padding:12px;">
            <div style="font-size:22px;font-weight:700;color:#16A34A;">${correct}</div>
            <div style="font-size:11px;color:#6B7280;">Düzgün</div>
          </div>
          <div style="background:#FFF1F0;border-radius:10px;padding:12px;">
            <div style="font-size:22px;font-weight:700;color:#DC2626;">${wrong}</div>
            <div style="font-size:11px;color:#6B7280;">Səhv</div>
          </div>
        </div>
      </div>

      <!-- Sual-cavab icmalı -->
      <div style="text-align:left;">
        <div style="font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Cavablar icmalı</div>
        ${hw.questions.map((q, i) => {
          const chosen    = answers[i];
          const isCorrect = chosen === q.correct;
          return `
            <div style="background:#fff;border:1px solid ${isCorrect?'#86EFAC':'#FCA5A5'};border-radius:10px;
                        padding:10px 12px;margin-bottom:8px;">
              <div style="font-size:12px;font-weight:600;color:#1A1A1A;margin-bottom:4px;">
                ${isCorrect?'✅':'❌'} Sual ${i+1}: ${_escHtml(q.text)}
              </div>
              ${!isCorrect ? `
                <div style="font-size:11px;color:#DC2626;">Seçdiyiniz: ${_escHtml(q.options[chosen] || '—')}</div>
                <div style="font-size:11px;color:#16A34A;">Doğru cavab: ${_escHtml(q.options[q.correct])}</div>
              ` : `
                <div style="font-size:11px;color:#16A34A;">${_escHtml(q.options[q.correct])}</div>
              `}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;

  if (footer) footer.innerHTML = `
    <button onclick="HomeworkManager._closeTest()"
      style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;
             padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
      Statistikaya qayıt
    </button>
  `;
}

// ─── Çıxış təsdiqi ──────────────────────────────────────────────────────────
function _confirmQuitTest() {
  if (!confirm("Testdən çıxmaq istəyirsən? İrəliləyişin saxlanmayacaq.")) return;
  _closeTest();
}

// ─── Test ekranını bağla ─────────────────────────────────────────────────────
function _closeTest() {
  const overlay = document.getElementById("hw-test-overlay");
  if (overlay) overlay.remove();
}

// ════════════════════════════════════════════════════════════
//  YARDIMÇI FUNKSİYALAR
// ════════════════════════════════════════════════════════════

function _escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function _formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2,"0")}.${(d.getMonth()+1).toString().padStart(2,"0")}.${d.getFullYear()}`;
}

// ─── Public API ─────────────────────────────────────────────────────────────
window.HomeworkManager = {
  renderPanel:       renderHomeworkPanel,
  _setQCount,
  _addQuestion,
  _updateQuestionText,
  _updateOption,
  _setCorrect,
  _addOption,
  _removeOption,
  _deleteQuestion,
  _submitHomework,
  startHomework,
  _selectAnswer,
  _nextQuestion,
  _confirmQuitTest,
  _closeTest,
  renderCard: renderHomeworkCard,
};
