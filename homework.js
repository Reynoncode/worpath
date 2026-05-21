// homework.js — Ev Tapşırığı Sistemi (Müəllim + Tələbə)

import { auth, db } from "./firebase.js";
import {
  renderQuizHomeworkCard,
} from "./quiz_homework.js";
import {
  collection, doc, addDoc, getDocs, getDoc,
  query, where, updateDoc, serverTimestamp, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ════════════════════════════════════════════════════════════
//  DRAFT SİSTEMİ — LocalStorage
// ════════════════════════════════════════════════════════════

function _draftKey(classId) {
  return `hw_draft_${classId}`;
}

function _saveDraft(classId) {
  try {
    const titleEl = document.getElementById("hw-title-input");
    const draft = {
      title:     titleEl ? titleEl.value : "",
      questions: _hwState.questions,
      qCount:    _hwState.qCount,
      optCount:  _hwState.optCount,
      deadline:  _hwState.deadline,
      savedAt:   Date.now(),
    };
    localStorage.setItem(_draftKey(classId), JSON.stringify(draft));
  } catch(e) { console.warn("Draft saxlanmadı:", e); }
}

function _loadDraft(classId) {
  try {
    const raw = localStorage.getItem(_draftKey(classId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch(e) { return null; }
}

function _clearDraft(classId) {
  try { localStorage.removeItem(_draftKey(classId)); } catch(e) {}
}

function _hasDraft(classId) {
  const d = _loadDraft(classId);
  return !!d;
}

// Avtomatik draft saxlama — 2 saniyəlik debounce
let _draftTimer = null;
function _autosaveDraft() {
  if (!_hwState.classId) return;
  clearTimeout(_draftTimer);
  _draftTimer = setTimeout(() => {
    _saveDraft(_hwState.classId);
    _showDraftSavedIndicator();
  }, 2000);
}

function _showDraftSavedIndicator() {
  const el = document.getElementById("hw-draft-indicator");
  if (!el) return;
  el.style.opacity = "1";
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => { el.style.opacity = "0"; }, 2500);
}

// ════════════════════════════════════════════════════════════
//  MÜƏLLIM TƏRƏFİ — Test yaratma UI
// ════════════════════════════════════════════════════════════

let _hwState = {
  classId:    null,
  className:  null,
  questions:  [],
  qCount:     5,
  optCount:   4,   // default bənd sayı
  deadline:   null, // { type: "days", value: 2 } | { type: "date", value: "2026-06-01" }
  editId:     null,
  editStatus: null,
};

// ─── Ev tapşırığı yaratma panelini render et ─────────────────────────────────
function renderHomeworkPanel(classId, className, container, draftData) {
  _hwState.classId   = classId;
  _hwState.className = className;

  if (draftData) {
    _hwState.questions = draftData.questions || [];
    _hwState.qCount    = draftData.qCount    || 5;
    _hwState.optCount  = draftData.optCount  || 4;
    _hwState.deadline  = draftData.deadline  || null;
  } else {
    _hwState.questions = [];
    _hwState.qCount    = 5;
    _hwState.optCount  = 4;
    _hwState.deadline  = null;
    // Fresh start: initialize empty questions for default qCount
    _initEmptyQuestions(_hwState.qCount, _hwState.optCount);
  }

  container.innerHTML = `
    <div style="padding:0 2px;" id="hw-create-root">

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
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;color:#1A1A1A;">Yeni Ev Tapşırığı</div>
          <div style="font-size:11px;color:#9CA3AF;">${className}</div>
        </div>
        <!-- Draft indicator -->
        <div id="hw-draft-indicator" style="font-size:10px;color:#9CA3AF;opacity:0;transition:opacity 0.3s;white-space:nowrap;">
          ✓ Draft saxlandı
        </div>
      </div>

      ${draftData ? `
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:10px 14px;margin-bottom:12px;font-size:12px;color:#92400E;display:flex;align-items:center;gap:8px;">
          <span>📝</span>
          <span>Yadda saxlanmış draft bərpa edildi (${_formatDate(new Date(draftData.savedAt))})</span>
        </div>
      ` : ""}

      <!-- Sual sayı + Bənd sayı + Deadline kartı -->
      <div style="background:#EDEAE2;border-radius:12px;padding:14px 16px;margin-bottom:12px;">

        <!-- Sual sayı -->
        <div style="margin-bottom:14px;">
          <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Sual sayı</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;" id="hw-qcount-btns">
            ${[5,10,15,20].map(n => `
              <button onclick="HomeworkManager._setQCount(${n})" id="hw-qc-${n}"
                style="padding:7px 16px;border-radius:99px;border:1.5px solid ${n===_hwState.qCount?'#1A1A1A':'#D5CFC6'};
                       background:${n===_hwState.qCount?'#1A1A1A':'#fff'};color:${n===_hwState.qCount?'#fff':'#6B7280'};
                       font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;">
                ${n}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Divider -->
        <div style="height:1px;background:#D5CFC6;margin-bottom:14px;"></div>

        <!-- Bənd sayı -->
        <div style="margin-bottom:14px;">
          <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Bənd sayı</div>
          <div style="display:flex;gap:6px;" id="hw-optcount-btns">
            ${[2,3,4].map(n => `
              <button onclick="HomeworkManager._setOptCount(${n})" id="hw-oc-${n}"
                style="padding:7px 16px;border-radius:99px;border:1.5px solid ${n===_hwState.optCount?'#1A1A1A':'#D5CFC6'};
                       background:${n===_hwState.optCount?'#1A1A1A':'#fff'};color:${n===_hwState.optCount?'#fff':'#6B7280'};
                       font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;">
                ${n} bənd
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Divider -->
        <div style="height:1px;background:#D5CFC6;margin-bottom:14px;"></div>

        <!-- Deadline -->
        <div>
          <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Son tarix (Deadline)</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;" id="hw-deadline-quick-btns">
            ${[
              { label:"2 gün",    type:"days", value:2  },
              { label:"1 həftə",  type:"days", value:7  },
              { label:"2 həftə",  type:"days", value:14 },
            ].map(opt => {
              const sel = _hwState.deadline?.type===opt.type && _hwState.deadline?.value===opt.value;
              return `
                <button onclick="HomeworkManager._setDeadlineQuick('${opt.type}',${opt.value})"
                  id="hw-dl-${opt.type}-${opt.value}"
                  style="padding:7px 14px;border-radius:99px;border:1.5px solid ${sel?'#1A1A1A':'#D5CFC6'};
                         background:${sel?'#1A1A1A':'#fff'};color:${sel?'#fff':'#6B7280'};
                         font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;">
                  ${opt.label}
                </button>
              `;
            }).join("")}
            <button onclick="HomeworkManager._toggleCalendar()"
              id="hw-dl-calendar-btn"
              style="padding:7px 14px;border-radius:99px;border:1.5px solid ${_hwState.deadline?.type==='date'?'#1A1A1A':'#D5CFC6'};
                     background:${_hwState.deadline?.type==='date'?'#1A1A1A':'#fff'};color:${_hwState.deadline?.type==='date'?'#fff':'#6B7280'};
                     font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;display:flex;align-items:center;gap:5px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Tarix seç
            </button>
          </div>
          <!-- Calendar input (hidden by default) -->
          <div id="hw-calendar-wrap" style="display:${_hwState.deadline?.type==='date'?'block':'none'};">
            <input type="date" id="hw-date-input"
              value="${_hwState.deadline?.type==='date' ? _hwState.deadline.value : ''}"
              min="${new Date().toISOString().split('T')[0]}"
              onchange="HomeworkManager._setDeadlineDate(this.value)"
              style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #E8E2D9;border-radius:10px;font-size:13px;background:#fff;outline:none;color:#1A1A1A;"/>
          </div>
          <div id="hw-deadline-display" style="font-size:11px;color:#6B7280;margin-top:4px;">
            ${_deadlineLabel()}
          </div>
        </div>
      </div>

      <!-- Test başlığı -->
      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Test başlığı <span style="font-weight:400;text-transform:none;">(ixtiyari)</span></div>
        <input id="hw-title-input" placeholder="məs: Unit 5 — Söz testi"
          oninput="HomeworkManager._autosave()"
          style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #E8E2D9;border-radius:10px;font-size:13px;background:#F9F7F3;outline:none;"
          value="${draftData ? _escHtml(draftData.title||'') : ''}"/>
      </div>

      <!-- Suallar bölümü -->
      <div id="hw-questions-container" style="margin-bottom:12px;"></div>

      <!-- Sual əlavə et düyməsi -->
      <button onclick="HomeworkManager._addExtraQuestion()"
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

  // Soruları render et
  _hwState.questions.forEach((_, i) => _renderQuestion(i));
  _updateAddBtn();

  // Gizli autosave — hər input dəyişdikdə
  _startGlobalAutosave();
}

// ─── Boş sualları initialize et ──────────────────────────────────────────────
function _initEmptyQuestions(qCount, optCount) {
  _hwState.questions = [];
  for (let i = 0; i < qCount; i++) {
    const opts = [];
    for (let j = 0; j < optCount; j++) opts.push("");
    _hwState.questions.push({ text: "", options: opts, correct: 0 });
  }
}

// ─── Global autosave listener ─────────────────────────────────────────────────
function _startGlobalAutosave() {
  const root = document.getElementById("hw-create-root");
  if (!root) return;
  root.addEventListener("input",  _autosave, { passive: true });
  root.addEventListener("change", _autosave, { passive: true });
}

function _autosave() {
  _autosaveDraft();
}

// ─── Deadline label ───────────────────────────────────────────────────────────
function _deadlineLabel() {
  if (!_hwState.deadline) return "Deadline seçilməyib";
  if (_hwState.deadline.type === "days") {
    const d = new Date();
    d.setDate(d.getDate() + _hwState.deadline.value);
    return `Son tarix: ${_formatDate(d)}`;
  }
  if (_hwState.deadline.type === "date") {
    return `Son tarix: ${_hwState.deadline.value}`;
  }
  return "";
}

function _updateDeadlineDisplay() {
  const el = document.getElementById("hw-deadline-display");
  if (el) el.textContent = _deadlineLabel();
}

// ─── Quick deadline seç ────────────────────────────────────────────────────────
function _setDeadlineQuick(type, value) {
  _hwState.deadline = { type, value };

  // Bütün quick btnləri reset et
  [["days",2],["days",7],["days",14]].forEach(([t,v]) => {
    const b = document.getElementById(`hw-dl-${t}-${v}`);
    if (!b) return;
    const sel = (t===type && v===value);
    b.style.background  = sel ? "#1A1A1A" : "#fff";
    b.style.color       = sel ? "#fff"    : "#6B7280";
    b.style.borderColor = sel ? "#1A1A1A" : "#D5CFC6";
  });
  // Calendar btn deselect
  const cb = document.getElementById("hw-dl-calendar-btn");
  if (cb) { cb.style.background="#fff"; cb.style.color="#6B7280"; cb.style.borderColor="#D5CFC6"; }
  // Calendar hide
  const cw = document.getElementById("hw-calendar-wrap");
  if (cw) cw.style.display = "none";

  _updateDeadlineDisplay();
  _autosave();
}

// ─── Tarixqalandar ────────────────────────────────────────────────────────────
function _toggleCalendar() {
  const cw = document.getElementById("hw-calendar-wrap");
  if (!cw) return;
  const open = cw.style.display === "none";
  cw.style.display = open ? "block" : "none";
  // Calendar btn highlight
  const cb = document.getElementById("hw-dl-calendar-btn");
  if (cb) {
    cb.style.background  = open ? "#1A1A1A" : "#fff";
    cb.style.color       = open ? "#fff"    : "#6B7280";
    cb.style.borderColor = open ? "#1A1A1A" : "#D5CFC6";
  }
  // Quick btns deselect (only if opening)
  if (open) {
    [["days",2],["days",7],["days",14]].forEach(([t,v]) => {
      const b = document.getElementById(`hw-dl-${t}-${v}`);
      if (!b) return;
      b.style.background="#fff"; b.style.color="#6B7280"; b.style.borderColor="#D5CFC6";
    });
    if (_hwState.deadline?.type !== "date") _hwState.deadline = null;
    _updateDeadlineDisplay();
  }
}

function _setDeadlineDate(val) {
  if (!val) return;
  _hwState.deadline = { type: "date", value: val };
  const cb = document.getElementById("hw-dl-calendar-btn");
  if (cb) { cb.style.background="#1A1A1A"; cb.style.color="#fff"; cb.style.borderColor="#1A1A1A"; }
  _updateDeadlineDisplay();
  _autosave();
}

// ─── Sual sayı seç ───────────────────────────────────────────────────────────
function _setQCount(n) {
  const old = _hwState.qCount;
  _hwState.qCount = n;

  [5,10,15,20].forEach(v => {
    const btn = document.getElementById(`hw-qc-${v}`);
    if (!btn) return;
    btn.style.background  = v === n ? "#1A1A1A" : "#fff";
    btn.style.color       = v === n ? "#fff"    : "#6B7280";
    btn.style.borderColor = v === n ? "#1A1A1A" : "#D5CFC6";
  });

  // Sual sayını artırırıq: əskik sualları boş əlavə et
  while (_hwState.questions.length < n) {
    const opts = [];
    for (let j = 0; j < _hwState.optCount; j++) opts.push("");
    _hwState.questions.push({ text: "", options: opts, correct: 0 });
  }
  // Sual sayını azaldırıq: sondan sil (dolu olanları saxla — user confirm)
  while (_hwState.questions.length > n) {
    _hwState.questions.pop();
  }

  // Sualları yenidən render et
  _reRenderAllQuestions();
  _updateAddBtn();
  _autosave();
}

// ─── Bənd sayı seç ───────────────────────────────────────────────────────────
function _setOptCount(n) {
  _hwState.optCount = n;

  [2,3,4].forEach(v => {
    const btn = document.getElementById(`hw-oc-${v}`);
    if (!btn) return;
    btn.style.background  = v === n ? "#1A1A1A" : "#fff";
    btn.style.color       = v === n ? "#fff"    : "#6B7280";
    btn.style.borderColor = v === n ? "#1A1A1A" : "#D5CFC6";
  });

  // Hər soruya yeni bənd sayını tətbiq et
  _hwState.questions.forEach((q, idx) => {
    while (q.options.length < n) q.options.push("");
    while (q.options.length > n) q.options.pop();
    if (q.correct >= q.options.length) q.correct = q.options.length - 1;
  });

  _reRenderAllQuestions();
  _autosave();
}

// ─── Bütün sualları yenidən render et ────────────────────────────────────────
function _reRenderAllQuestions() {
  const container = document.getElementById("hw-questions-container");
  if (!container) return;
  container.innerHTML = "";
  _hwState.questions.forEach((_, i) => _renderQuestion(i));
}

// ─── Əlavə sual (limitdən artıq) ─────────────────────────────────────────────
function _addExtraQuestion() {
  const opts = [];
  for (let j = 0; j < _hwState.optCount; j++) opts.push("");
  _hwState.questions.push({ text: "", options: opts, correct: 0 });
  _renderQuestion(_hwState.questions.length - 1);
  _updateAddBtn();
  _autosave();
}

// ─── Sualı render et ────────────────────────────────────────────────────────
function _renderQuestion(idx) {
  const container = document.getElementById("hw-questions-container");
  if (!container) return;

  const existingEl = document.getElementById(`hw-q-${idx}`);
  const q = _hwState.questions[idx];

  const optLetters = ["A","B","C","D"];
  const optionsHTML = q.options.map((opt, oi) => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <button onclick="HomeworkManager._setCorrect(${idx},${oi})" id="hw-q${idx}-radio-${oi}"
        title="Doğru cavab kimi seç"
        style="width:22px;height:22px;border-radius:50%;border:2px solid ${q.correct===oi?'#1A1A1A':'#D5CFC6'};
               background:${q.correct===oi?'#1A1A1A':'transparent'};cursor:pointer;flex-shrink:0;
               display:flex;align-items:center;justify-content:center;padding:0;transition:all 0.15s;">
        ${q.correct===oi?'<div style="width:8px;height:8px;border-radius:50%;background:#fff;"></div>':''}
      </button>
      <span style="font-size:11px;font-weight:700;color:#9CA3AF;width:14px;flex-shrink:0;">${optLetters[oi]}</span>
      <input type="text" value="${_escHtml(opt)}"
        oninput="HomeworkManager._updateOption(${idx},${oi},this.value)"
        placeholder="${optLetters[oi]} bəndi"
        style="flex:1;padding:9px 11px;border:1.5px solid ${q.correct===oi?'#A7F3D0':'#E8E2D9'};border-radius:8px;font-size:13px;background:${q.correct===oi?'#F0FDF4':'#F9F7F3'};outline:none;min-width:0;transition:all 0.15s;"/>
    </div>
  `).join("");

  const html = `
    <div id="hw-q-${idx}"
      style="background:#fff;border:1.5px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:10px;">

      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <div style="width:22px;height:22px;background:#1A1A1A;border-radius:6px;display:flex;align-items:center;justify-content:center;">
            <span style="font-size:10px;font-weight:700;color:#fff;">${idx+1}</span>
          </div>
          <span style="font-size:12px;font-weight:600;color:#6B7280;">Sual</span>
        </div>
        <button onclick="HomeworkManager._deleteQuestion(${idx})"
          style="background:none;border:none;color:#D1C9BE;font-size:18px;cursor:pointer;padding:2px 6px;line-height:1;border-radius:6px;"
          title="Sualı sil">×</button>
      </div>

      <textarea oninput="HomeworkManager._updateQuestionText(${idx},this.value)"
        placeholder="Sual mətnini yazın..."
        rows="2"
        style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #E8E2D9;border-radius:10px;
               font-size:13px;background:#F9F7F3;outline:none;resize:none;margin-bottom:12px;
               font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.5;"
      >${_escHtml(q.text)}</textarea>

      <div style="font-size:10px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">
        Bəndlər <span style="font-weight:400;text-transform:none;">— ● ilə doğru cavabı işarələyin</span>
      </div>
      <div id="hw-q${idx}-opts">${optionsHTML}</div>
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
  if (_hwState.questions[idx]) {
    _hwState.questions[idx].text = val;
    _autosave();
  }
}

// ─── Bənd mətnini yenilə ─────────────────────────────────────────────────────
function _updateOption(idx, oi, val) {
  if (_hwState.questions[idx]) {
    _hwState.questions[idx].options[oi] = val;
    _autosave();
  }
}

// ─── Doğru cavabı seç ────────────────────────────────────────────────────────
function _setCorrect(idx, oi) {
  if (!_hwState.questions[idx]) return;
  _hwState.questions[idx].correct = oi;
  _renderQuestion(idx);
  _autosave();
}

// ─── Sualı sil ───────────────────────────────────────────────────────────────
function _deleteQuestion(idx) {
  if (_hwState.questions.length <= 1) {
    _showHwError("Ən az 1 sual olmalıdır.");
    return;
  }
  _hwState.questions.splice(idx, 1);
  _reRenderAllQuestions();
  _updateAddBtn();
  _autosave();
}

// ─── "Sual əlavə et" düyməsini yenilə ────────────────────────────────────────
function _updateAddBtn() {
  const btn = document.getElementById("hw-add-q-btn");
  if (!btn) return;
  const count = _hwState.questions.length;
  btn.innerHTML = `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
    Sual əlavə et <span style="font-size:11px;color:#9CA3AF;margin-left:2px;">(${count} sual)</span>
  `;
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

  const cleanQuestions = questions.map(q => ({
    text:    q.text.trim(),
    options: q.options.map(o => o.trim()).filter(o => o),
    correct: q.correct
  }));

  // Deadline hesabla
  let deadlineAt = null;
  if (_hwState.deadline) {
    const d = new Date();
    if (_hwState.deadline.type === "days")  d.setDate(d.getDate() + _hwState.deadline.value);
    if (_hwState.deadline.type === "date")  { const pd = new Date(_hwState.deadline.value); deadlineAt = pd; }
    if (!deadlineAt) deadlineAt = d;
  }

  try {
    const btn = document.querySelector("[onclick=\"HomeworkManager._submitHomework()\"]");
    if (btn) { btn.disabled = true; btn.textContent = "Göndərilir..."; }

    await addDoc(collection(db, "homeworks"), {
      classId:    _hwState.classId,
      teacherUid: user.uid,
      title:      title,
      questions:  cleanQuestions,
      createdAt:  serverTimestamp(),
      deadlineAt: deadlineAt || null,
      status:     "active"
    });

    // Draft-ı təmizlə
    _clearDraft(_hwState.classId);

    const panel = document.getElementById("homework-panel") ||
                  document.querySelector("[id]");
    if (panel) {
      panel.innerHTML = `
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
//  MÜƏLLIM — Tapşırıq idarəetməsi (siyahı + nəticələr + redaktə)
// ════════════════════════════════════════════════════════════

async function renderHomeworkManager(classId, className, container) {
  container.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  const snap = await getDocs(
    query(collection(db, "homeworks"), where("classId", "==", classId), orderBy("createdAt", "desc"))
  );
  const homeworks = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  window._hwManagerState = { classId, className };

  const hasDraftLocal = _hasDraft(classId);

  // Heç bir HW yoxdursa birbaşa yaratma paneli (draft yüklə)
  if (homeworks.length === 0 && !hasDraftLocal) {
    renderHomeworkPanel(classId, className, container);
    return;
  }


  // Quiz tapşırıqlarını yüklə
const quizSnap = await getDocs(
  query(collection(db, 'quizHomeworks'), where('classId', '==', classId), orderBy('createdAt', 'desc'))
);
const quizHomeworks = quizSnap.docs.map(d => ({ id: d.id, ...d.data() }));
const _qhColors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };

const quizCards = quizHomeworks.map(hw => {
  const date     = hw.createdAt?.toDate ? _formatDate(hw.createdAt.toDate()) : '';
  const col      = _qhColors[hw.levelId] || '#1A1A1A';
  const isClosed = hw.status === 'closed';
  const statusBadge = isClosed
    ? `<span style="background:#F3F4F6;color:#6B7280;border:1px solid #E5E7EB;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Bağlı</span>`
    : `<span style="background:#F0FDF4;color:#16A34A;border:1px solid #86EFAC;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Aktiv</span>`;
  const phaseBadges = (hw.phases || []).map(p =>
    `<span style="background:${col}15;color:${col};font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;border:1px solid ${col}30;">P${p}</span>`
  ).join('');
  return `
    <div style="background:#fff;border:1px solid #E8E2D9;border-left:3px solid ${col};border-radius:12px;padding:14px 16px;margin-bottom:10px;">
      <div style="margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="font-size:10px;font-weight:800;color:${col};background:${col}15;padding:2px 8px;border-radius:99px;">QUIZ · ${hw.levelId?.toUpperCase()}</span>
          <span style="font-size:13px;font-weight:700;color:#1A1A1A;">${_escHtml(hw.quizName || '')}</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          ${statusBadge}${phaseBadges}
          <span style="font-size:11px;color:#9CA3AF;">${hw.wordCount || 0} söz · ${date}</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="QuizHomeworkManager._showQhResults('${hw.id}')"
          style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
          📊 Nəticələr
        </button>
        <button onclick="QuizHomeworkManager._toggleQhStatus('${hw.id}','${hw.status}')"
          style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
          ${isClosed ? '▶ Aktiv et' : '✕ Bağla'}
        </button>
      </div>
    </div>`;
}).join('');
  
  const cards = homeworks.map(hw => {
    const date = hw.createdAt?.toDate ? _formatDate(hw.createdAt.toDate()) : "";
    const isDraft = hw.status === "draft";
    const isClosed = hw.status === "closed";

    let statusBadge;
    if (isDraft) {
      statusBadge = `<span style="background:#FEF9C3;color:#854D0E;border:1px solid #FDE68A;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Draft</span>`;
    } else if (isClosed) {
      statusBadge = `<span style="background:#F3F4F6;color:#6B7280;border:1px solid #E5E7EB;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Bağlı</span>`;
    } else {
      statusBadge = `<span style="background:#F0FDF4;color:#16A34A;border:1px solid #86EFAC;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Aktiv</span>`;
    }

    const editLabel = isDraft ? "✏️ Davam et" : "✏️ Redaktə";

    return `
      <div style="background:#fff;border:1px solid ${isDraft?'#FDE68A':'#E8E2D9'};border-radius:12px;padding:14px 16px;margin-bottom:10px;">
        <div style="margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;color:#1A1A1A;margin-bottom:4px;">${_escHtml(hw.title)}</div>
          <div style="display:flex;align-items:center;gap:6px;">${statusBadge}
            <span style="font-size:11px;color:#9CA3AF;">${hw.questions?.length||0} sual · ${date}</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="HomeworkManager._showHwResults('${hw.id}','${_escHtml(hw.title)}')"
            style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
            📊 Nəticələr
          </button>
          <button onclick="HomeworkManager._showHwEdit('${hw.id}')"
            style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
            ${editLabel}
          </button>
        </div>
      </div>`;
  }).join("");

  // Local draft kartı (Firestore-a göndərilməmiş)
  const localDraftCard = hasDraftLocal ? `
    <div style="background:#FFFBEB;border:1.5px dashed #FDE68A;border-radius:12px;padding:14px 16px;margin-bottom:10px;">
      <div style="margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;color:#92400E;margin-bottom:4px;">📝 Saxlanmış Draft</div>
        <div style="font-size:11px;color:#A16207;">Tamamlanmamış ev tapşırığı — davam etmək üçün basın</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="HomeworkManager._resumeLocalDraft()"
          style="flex:1;background:#1A1A1A;color:#fff;border:none;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
          ✏️ Davam et
        </button>
        <button onclick="HomeworkManager._discardLocalDraft()"
          style="flex:1;background:#FFF1F0;color:#DC2626;border:1px solid #FCA5A5;border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
          🗑 Sil
        </button>
      </div>
    </div>
  ` : "";

  container.innerHTML = `
    <div style="padding:0 2px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <div style="font-size:13px;font-weight:700;color:#1A1A1A;">Ev tapşırıqları</div>
        <div style="display:flex;gap:6px;">
  <button onclick="HomeworkManager._showCreateNew('${classId}','${_escHtml(className)}')"
    style="background:#1A1A1A;color:#fff;border:none;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;">
    + Test
  </button>
  <button onclick="HomeworkManager._showCreateQuiz('${classId}','${_escHtml(className)}')"
    style="background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;">
    + Quiz
  </button>
</div>
      </div>
      ${quizCards}
      ${localDraftCard}
      ${cards}
    </div>`;
}

// ─── Local draft bərpa et ─────────────────────────────────────────────────────
function _resumeLocalDraft() {
  const panel = document.getElementById("homework-panel");
  if (!panel) return;
  const { classId, className } = window._hwManagerState || {};
  if (!classId) return;
  const draft = _loadDraft(classId);
  renderHomeworkPanel(classId, className, panel, draft);
}

// ─── Local draft sil ──────────────────────────────────────────────────────────
function _discardLocalDraft() {
  const { classId, className } = window._hwManagerState || {};
  if (!classId) return;
  if (!confirm("Bu draftu silmək istəyirsiniz?")) return;
  _clearDraft(classId);
  const panel = document.getElementById("homework-panel");
  if (panel) renderHomeworkManager(classId, className, panel);
}

// ─── Nəticələr ────────────────────────────────────────────────────────────────
async function _showHwResults(hwId, hwTitle) {
  const panel = document.getElementById("homework-panel");
  if (!panel) return;
  panel.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  try {
    const hwSnap = await getDoc(doc(db, "homeworks", hwId));
    const hw = { id: hwSnap.id, ...hwSnap.data() };

    const resultsSnap = await getDocs(
      query(collection(db, "homeworkResults"), where("homeworkId", "==", hwId))
    );
    const results = resultsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

    const enriched = await Promise.all(results.map(async r => {
      try {
        const uSnap = await getDoc(doc(db, "users", r.uid));
        const name = uSnap.exists() ? (uSnap.data().displayName || uSnap.data().email || r.uid) : r.uid;
        return { ...r, displayName: name };
      } catch { return { ...r, displayName: r.uid }; }
    }));
    enriched.sort((a, b) => b.score - a.score);

    const medals = ["🥇","🥈","🥉"];
    const rows = enriched.length === 0
      ? `<div style="text-align:center;padding:24px;color:#9CA3AF;font-size:13px;">Hələ heç bir tələbə həll etməyib</div>`
      : enriched.map((r, i) => {
          const scoreColor = r.score >= 80 ? "#16A34A" : r.score >= 50 ? "#D97706" : "#DC2626";
          const date = r.completedAt?.toDate ? _formatDate(r.completedAt.toDate()) : "";
          return `
            <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #F0ECE4;">
              <span style="font-size:16px;width:24px;text-align:center;">${medals[i] || `${i+1}.`}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:600;color:#1A1A1A;">${_escHtml(r.displayName)}</div>
                <div style="font-size:11px;color:#9CA3AF;">${r.correct}/${r.total} düzgün · ${date}</div>
              </div>
              <div style="font-size:16px;font-weight:700;color:${scoreColor};">${r.score}%</div>
            </div>`;
        }).join("");

    panel.innerHTML = `
      <div style="padding:0 2px;">
        <button onclick="HomeworkManager._backToHwList()"
          style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;">← Geri</button>
        <div style="font-size:13px;font-weight:700;color:#1A1A1A;margin-bottom:4px;">${_escHtml(hwTitle)}</div>
        <div style="font-size:11px;color:#9CA3AF;margin-bottom:14px;">${results.length} tələbə · ${hw.questions?.length||0} sual</div>
        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;overflow:hidden;">${rows}</div>
      </div>`;
  } catch(err) {
    console.error("Nəticə xətası:", err);
    panel.innerHTML = `<div style="padding:20px;text-align:center;color:#DC2626;font-size:13px;">Xəta baş verdi</div>`;
  }
}

// ─── Redaktə ─────────────────────────────────────────────────────────────────
async function _showHwEdit(hwId) {
  const panel = document.getElementById("homework-panel");
  if (!panel) return;
  panel.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  const snap = await getDoc(doc(db, "homeworks", hwId));
  if (!snap.exists()) return;
  const hw = { id: snap.id, ...snap.data() };

  _hwState.questions  = hw.questions.map(q => ({ ...q, options: [...q.options] }));
  _hwState.qCount     = Math.max(hw.questions.length, 20);
  _hwState.optCount   = hw.questions[0]?.options?.length || 4;
  _hwState.editId     = hwId;
  _hwState.editStatus = hw.status;

  panel.innerHTML = `
    <div style="padding:0 2px;">
      <button onclick="HomeworkManager._backToHwList()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;">← Geri</button>

      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Test başlığı</div>
        <input id="hw-title-input" value="${_escHtml(hw.title)}"
          style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #E8E2D9;border-radius:10px;font-size:13px;background:#F9F7F3;outline:none;"/>
      </div>

      <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Status</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button id="hw-status-active" onclick="HomeworkManager._setEditStatus('active')"
            style="flex:1;padding:8px;border-radius:8px;border:1.5px solid ${hw.status==='active'?'#16A34A':'#E8E2D9'};
                   background:${hw.status==='active'?'#F0FDF4':'#fff'};color:${hw.status==='active'?'#16A34A':'#6B7280'};
                   font-size:12px;font-weight:600;cursor:pointer;min-width:70px;">✓ Aktiv</button>
          <button id="hw-status-draft" onclick="HomeworkManager._setEditStatus('draft')"
            style="flex:1;padding:8px;border-radius:8px;border:1.5px solid ${hw.status==='draft'?'#D97706':'#E8E2D9'};
                   background:${hw.status==='draft'?'#FFFBEB':'#fff'};color:${hw.status==='draft'?'#D97706':'#6B7280'};
                   font-size:12px;font-weight:600;cursor:pointer;min-width:70px;">📝 Draft</button>
          <button id="hw-status-closed" onclick="HomeworkManager._setEditStatus('closed')"
            style="flex:1;padding:8px;border-radius:8px;border:1.5px solid ${hw.status==='closed'?'#DC2626':'#E8E2D9'};
                   background:${hw.status==='closed'?'#FFF1F0':'#fff'};color:${hw.status==='closed'?'#DC2626':'#6B7280'};
                   font-size:12px;font-weight:600;cursor:pointer;min-width:70px;">✕ Bağlı</button>
        </div>
      </div>

      <div id="hw-questions-container" style="margin-bottom:12px;"></div>

      <button onclick="HomeworkManager._addExtraQuestion()"
        style="width:100%;padding:12px;border:2px dashed #E8E2D9;border-radius:12px;background:transparent;
               color:#6B7280;font-size:13px;font-weight:600;cursor:pointer;margin-bottom:14px;
               display:flex;align-items:center;justify-content:center;gap:6px;"
        id="hw-add-q-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Sual əlavə et
      </button>

      <button onclick="HomeworkManager._saveEdit()"
        style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
        ✓ Dəyişiklikləri Saxla
      </button>
      <div id="hw-error-msg" style="margin-top:10px;font-size:12px;color:#DC2626;text-align:center;display:none;"></div>
    </div>`;

  _hwState.questions.forEach((_, i) => _renderQuestion(i));
  _updateAddBtn();
}

function _setEditStatus(status) {
  _hwState.editStatus = status;
  const configs = {
    active: { color: "#16A34A", bg: "#F0FDF4" },
    draft:  { color: "#D97706", bg: "#FFFBEB" },
    closed: { color: "#DC2626", bg: "#FFF1F0" },
  };
  ["active","draft","closed"].forEach(s => {
    const b = document.getElementById(`hw-status-${s}`);
    if (!b) return;
    const sel = s === status;
    b.style.borderColor = sel ? configs[s].color : "#E8E2D9";
    b.style.background  = sel ? configs[s].bg    : "#fff";
    b.style.color       = sel ? configs[s].color : "#6B7280";
  });
}

async function _saveEdit() {
  const hwId = _hwState.editId;
  if (!hwId) return;
  const title     = document.getElementById("hw-title-input")?.value.trim() || "Ev tapşırığı";
  const questions = _hwState.questions;
  if (questions.length === 0) { _showHwError("Ən az 1 sual olmalıdır."); return; }
  for (let i = 0; i < questions.length; i++) {
    if (!questions[i].text.trim()) { _showHwError(`Sual ${i+1} mətnini yazın.`); return; }
    if (questions[i].options.filter(o => o.trim()).length < 2) { _showHwError(`Sual ${i+1} üçün ən az 2 bənd doldurun.`); return; }
  }
  const cleanQ = questions.map(q => ({
    text:    q.text.trim(),
    options: q.options.map(o => o.trim()).filter(o => o),
    correct: q.correct
  }));
  try {
    await updateDoc(doc(db, "homeworks", hwId), {
      title,
      questions: cleanQ,
      status:    _hwState.editStatus || "active"
    });
    _hwState.editId = null;
    await _backToHwList();
  } catch(err) {
    console.error(err);
    _showHwError("Xəta baş verdi.");
  }
}

function _showCreateNew(classId, className) {
  const panel = document.getElementById("homework-panel");
  if (!panel) return;
  _hwState.editId = null;

  // Mövcud local draft varsa sor
  if (_hasDraft(classId)) {
    const draft = _loadDraft(classId);
    const savedTime = draft?.savedAt ? _formatDate(new Date(draft.savedAt)) : "";
    const resume = confirm(`Yadda saxlanmış draft var (${savedTime}).\n"OK" — davam et\n"Ləğv et" — yeni başla`);
    if (resume) {
      renderHomeworkPanel(classId, className, panel, draft);
    } else {
      _clearDraft(classId);
      renderHomeworkPanel(classId, className, panel);
    }
  } else {
    renderHomeworkPanel(classId, className, panel);
  }
}

async function _backToHwList() {
  const panel = document.getElementById("homework-panel");
  if (!panel) return;
  const { classId, className } = window._hwManagerState || {};
  if (classId) await renderHomeworkManager(classId, className, panel);
}

// ════════════════════════════════════════════════════════════
//  TƏLƏBƏ TƏRƏFİ — Ev tapşırığı kartı + test interfeysi
// ════════════════════════════════════════════════════════════

export async function loadStudentHomeworks() {
  const user = auth.currentUser;
  if (!user) return [];

  const classSnap = await getDocs(
    query(collection(db, "classes"), where("students", "array-contains", user.email))
  );
  if (classSnap.empty) return [];

  const classIds = classSnap.docs.map(d => d.id);

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

  const results = await _getCompletedHwIds(user.uid);
  return hwList.filter(hw => !results.includes(hw.id));
}

async function _getCompletedHwIds(uid) {
  const snap = await getDocs(
    query(collection(db, "homeworkResults"), where("uid", "==", uid))
  );
  return snap.docs.map(d => d.data().homeworkId);
}

export async function renderHomeworkCard(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <div style="padding:14px 16px;height:100%;box-sizing:border-box;">
      <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">EV TAPŞIRIĞI</div>
      <div style="font-size:13px;font-weight:600;color:#1A1A1A;">Aktiv tapşırıq yoxdur</div>
    </div>`;

  try {
    const homeworks = await loadStudentHomeworks();
    if (homeworks.length === 0) return;

    el.innerHTML = `
      <div style="padding:14px 16px;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;">EV TAPŞIRIĞI</div>
          <span style="background:#FAEEDA;color:#633806;font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;border:1px solid #FAC775;">
            ${homeworks.length} yeni
          </span>
        </div>
        ${homeworks.map(hw => {
          const qCount = hw.questions?.length || 0;
          const date = hw.createdAt?.toDate ? _formatDate(hw.createdAt.toDate()) : "";
          return `
            <div style="margin-bottom:8px;">
              <div style="font-size:13px;font-weight:600;color:#1A1A1A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px;">${_escHtml(hw.title)}</div>
              <div style="font-size:11px;color:#9CA3AF;margin-bottom:6px;">${qCount} sual · ${date}</div>
              <button onclick="HomeworkManager.startHomework('${hw.id}')"
                style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:8px;padding:7px;font-size:12px;font-weight:600;cursor:pointer;">
                Başla →
              </button>
            </div>
          `;
        }).join("")}
      </div>`;
  } catch(err) {
    console.error("Homework card xətası:", err);
    el.innerHTML = "";
  }
}

// ════════════════════════════════════════════════════════════
//  TEST İNTERFEYSİ — Tələbə testi həll edir
// ════════════════════════════════════════════════════════════

let _testState = {
  hw:      null,
  idx:     0,
  answers: [],
  correct: 0,
  wrong:   0,
  locked:  false,
};

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

function _renderTestScreen() {
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

    <div style="flex:1;overflow-y:auto;padding:20px 18px 100px;" id="hw-test-body"></div>

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

function _selectAnswer(oi) {
  if (_testState.locked) return;
  _testState.locked = true;

  const { hw, idx } = _testState;
  const q = hw.questions[idx];
  const isCorrect = (oi === q.correct);

  _testState.answers[idx] = oi;
  if (isCorrect) _testState.correct++; else _testState.wrong++;

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

async function _finishTest() {
  const user = auth.currentUser;
  const { hw, correct, wrong, answers } = _testState;
  const total = hw.questions.length;
  const pct   = Math.round((correct / total) * 100);

  try {
    await addDoc(collection(db, "homeworkResults"), {
      uid:         user.uid,
      homeworkId:  hw.id,
      classId:     hw.classId,
      answers:     answers,
      correct:     correct,
      wrong:       wrong,
      total:       total,
      score:       pct,
      completedAt: serverTimestamp()
    });
  } catch(err) {
    console.error("Nəticə yazma xətası:", err);
  }

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

function _confirmQuitTest() {
  if (!confirm("Testdən çıxmaq istəyirsən? İrəliləyişin saxlanmayacaq.")) return;
  _closeTest();
}

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

function _showCreateQuiz(classId, className) {
  const panel = document.getElementById('homework-panel');
  if (!panel) return;
  window._qhManagerState = { classId, className };
  window.QuizHomeworkManager?.renderPanel(classId, className, panel);
}

// ─── Public API ─────────────────────────────────────────────────────────────
window.HomeworkManager = {
  renderPanel:        renderHomeworkPanel,
  renderManager:      renderHomeworkManager,
  _setQCount,
  _setOptCount,
  _showCreateQuiz,
  _setDeadlineQuick,
  _setDeadlineDate,
  _toggleCalendar,
  _autosave,
  _addExtraQuestion,
  _updateQuestionText,
  _updateOption,
  _setCorrect,
  _deleteQuestion,
  _submitHomework,
  _showHwResults,
  _showHwEdit,
  _setEditStatus,
  _saveEdit,
  _showCreateNew,
  _backToHwList,
  _resumeLocalDraft,
  _discardLocalDraft,
  startHomework,
  _selectAnswer,
  _nextQuestion,
  _confirmQuitTest,
  _closeTest,
  renderCard: renderHomeworkCard,
};
