// quiz_homework.js — Quiz Əsaslı Ev Tapşırığı Sistemi
// Müəllim mövcud quiz kartlarından seçir → tələbəyə göndərir
// Tələbə həll edir (yarımçıq saxlanır) → müəllim nəticə görür

import { auth, db } from "./firebase.js";
import {
  collection, doc, addDoc, getDocs, getDoc, setDoc,
  query, where, updateDoc, serverTimestamp, orderBy, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ════════════════════════════════════════════════════════════
//  DATA REFERANSLAR — app.js-dən götürülür (window scope)
// ════════════════════════════════════════════════════════════

function _getQuizNames()  { return window.QUIZ_NAMES  || {}; }
function _getExamIds()    { return window.EXAM_IDS    || {}; }
function _getLevelOrder() { return window.LEVEL_ORDER || ['a1','a2','b1','b2','c1','c2']; }

function _getLevelData(levelId) {
  // window.appData və ya window.levels-dən götür
  // data.js-in export strukturuna uyğun olaraq:
  if (window.appData) {
    return window.appData.find(l => l.id === levelId);
  }
  if (window.levels) {
    return window.levels.find(l => l.id === levelId);
  }
  // fallback — birbaşa global variable kimi
  if (window[levelId]) return window[levelId];
  return null;
}

function _getQuizWords(levelId, quizIdx) {
  const level = _getLevelData(levelId);
  if (!level || !level.quizzes) return [];
  return level.quizzes[quizIdx] || [];
}

function _getLevelLabel(levelId) {
  const labels = {
    a1: 'A1 — Beginner', a2: 'A2 — Elementary',
    b1: 'B1 — Intermediate', b2: 'B2 — Upper-Inter',
    c1: 'C1 — Advanced', c2: 'C2 — Mastery'
  };
  return labels[levelId] || levelId.toUpperCase();
}

// ════════════════════════════════════════════════════════════
//  MÜƏLLIM — Quiz seçici panel
// ════════════════════════════════════════════════════════════

let _qhState = {
  classId:       null,
  className:     null,
  selectedLevel: null,
  selectedQuiz:  null,   // { levelId, quizIdx, quizName }
  phases:        [1, 2, 3], // default: bütün phaseslər
  deadline:      null,
};

// ─── Ana panel: level seç ────────────────────────────────────────────────────
export function renderQuizHomeworkPanel(classId, className, container) {
  _qhState = {
    classId, className,
    selectedLevel: null, selectedQuiz: null,
    phases: [1, 2, 3], deadline: null
  };
  _renderLevelPicker(container);
}

function _renderLevelPicker(container) {
  _qhState.selectedLevel = null;
  _qhState.selectedQuiz  = null;

  const levelOrder = _getLevelOrder();
  const quizNames  = _getQuizNames();
  const examIds    = _getExamIds();

  const levelCards = levelOrder.map(lid => {
    const quizCount = Object.keys(quizNames[lid] || {}).length;
    const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
    const col = colors[lid] || '#1A1A1A';
    return `
      <button onclick="QuizHomeworkManager._pickLevel('${lid}')"
        style="width:100%;background:#fff;border:1.5px solid #E8E2D9;border-radius:12px;
               padding:14px 16px;margin-bottom:8px;cursor:pointer;text-align:left;
               display:flex;align-items:center;gap:12px;transition:all 0.15s;"
        onmouseover="this.style.borderColor='${col}'"
        onmouseout="this.style.borderColor='#E8E2D9'">
        <div style="width:36px;height:36px;border-radius:10px;background:${col};
                    display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:12px;font-weight:800;color:#fff;">${lid.toUpperCase()}</span>
        </div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A1A1A;">${_getLevelLabel(lid)}</div>
          <div style="font-size:11px;color:#9CA3AF;">${quizCount} quiz</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1C9BE" stroke-width="2.5" stroke-linecap="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    `;
  }).join("");

  container.innerHTML = `
    <div style="padding:0 2px;" id="qh-root">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <div style="width:34px;height:34px;background:#1A1A1A;border-radius:10px;
                    display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <div>
          <div style="font-size:14px;font-weight:700;color:#1A1A1A;">Quiz Tapşırığı</div>
          <div style="font-size:11px;color:#9CA3AF;">${className} · Səviyyə seç</div>
        </div>
      </div>
      <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;
                  letter-spacing:0.05em;margin-bottom:10px;">Səviyyə seç</div>
      ${levelCards}
    </div>`;
}

// ─── Level seçildi → quiz listəsi ────────────────────────────────────────────
function _pickLevel(levelId) {
  _qhState.selectedLevel = levelId;
  const container = document.getElementById("qh-root")?.parentElement
                 || document.getElementById("homework-panel");
  if (!container) return;
  _renderQuizPicker(levelId, container);
}

function _renderQuizPicker(levelId, container) {
  const quizNames = _getQuizNames();
  const examIds   = _getExamIds();
  const names     = quizNames[levelId] || {};
  const examSet   = examIds[levelId]   || new Set();
  const colors    = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
  const col       = colors[levelId] || '#1A1A1A';

  const quizItems = Object.entries(names).map(([idx, name]) => {
    const i = parseInt(idx);
    // Exam kartlarını atla
    if (examSet.has(i)) return '';
    const wordCount = _getQuizWords(levelId, i).length;
    return `
      <button onclick="QuizHomeworkManager._pickQuiz('${levelId}',${i},'${_escHtml(name)}')"
        style="width:100%;background:#fff;border:1.5px solid #E8E2D9;border-radius:10px;
               padding:12px 14px;margin-bottom:6px;cursor:pointer;text-align:left;
               display:flex;align-items:center;gap:10px;transition:all 0.15s;"
        onmouseover="this.style.borderColor='${col}';this.style.background='#FAFAFA'"
        onmouseout="this.style.borderColor='#E8E2D9';this.style.background='#fff'">
        <div style="width:28px;height:28px;border-radius:7px;background:#F5F0E8;
                    display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-size:10px;font-weight:700;color:#9CA3AF;">${i + 1}</span>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;color:#1A1A1A;white-space:nowrap;
                      overflow:hidden;text-overflow:ellipsis;">${_escHtml(name)}</div>
          <div style="font-size:11px;color:#9CA3AF;">${wordCount} söz</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1C9BE" stroke-width="2.5" stroke-linecap="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    `;
  }).join("");

  container.innerHTML = `
    <div style="padding:0 2px;" id="qh-root">
      <button onclick="QuizHomeworkManager._backToLevels()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;
               display:flex;align-items:center;gap:4px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Geri
      </button>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
        <div style="width:28px;height:28px;border-radius:8px;background:${col};
                    display:flex;align-items:center;justify-content:center;">
          <span style="font-size:11px;font-weight:800;color:#fff;">${levelId.toUpperCase()}</span>
        </div>
        <div style="font-size:13px;font-weight:700;color:#1A1A1A;">${_getLevelLabel(levelId)}</div>
      </div>
      <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;
                  letter-spacing:0.05em;margin-bottom:10px;">Quiz seç</div>
      <div style="max-height:400px;overflow-y:auto;padding-right:2px;">
        ${quizItems}
      </div>
    </div>`;
}

// ─── Quiz seçildi → Phase + deadline konfiqurasiyası ──────────────────────────
function _pickQuiz(levelId, quizIdx, quizName) {
  _qhState.selectedQuiz = { levelId, quizIdx: parseInt(quizIdx), quizName };
  const container = document.getElementById("qh-root")?.parentElement
                 || document.getElementById("homework-panel");
  if (!container) return;
  _renderQuizConfig(container);
}

function _renderQuizConfig(container) {
  const { selectedQuiz, phases, deadline } = _qhState;
  const { levelId, quizIdx, quizName } = selectedQuiz;
  const wordCount = _getQuizWords(levelId, quizIdx).length;
  const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
  const col    = colors[levelId] || '#1A1A1A';

  const phaseDescs = {
    1: { label: 'Phase 1', sub: 'İngilis → Azərbaycan', icon: '🇬🇧→🇦🇿' },
    2: { label: 'Phase 2', sub: 'Azərbaycan → İngilis', icon: '🇦🇿→🇬🇧' },
    3: { label: 'Phase 3', sub: 'Tərif → Söz seç',     icon: '📖→💬' },
  };

  const phaseCards = [1, 2, 3].map(p => {
    const sel = phases.includes(p);
    const pd  = phaseDescs[p];
    return `
      <button onclick="QuizHomeworkManager._togglePhase(${p})" id="qh-phase-${p}"
        style="flex:1;padding:10px 8px;border-radius:10px;border:1.5px solid ${sel?col:'#E8E2D9'};
               background:${sel?`${col}15`:'#fff'};cursor:pointer;text-align:center;transition:all 0.15s;">
        <div style="font-size:16px;margin-bottom:4px;">${pd.icon}</div>
        <div style="font-size:11px;font-weight:700;color:${sel?col:'#6B7280'};">${pd.label}</div>
        <div style="font-size:10px;color:#9CA3AF;margin-top:2px;">${pd.sub}</div>
      </button>
    `;
  }).join("");

  const dlOptions = [
    { label:'2 gün',   type:'days', value:2  },
    { label:'1 həftə', type:'days', value:7  },
    { label:'2 həftə', type:'days', value:14 },
  ];
  const dlBtns = dlOptions.map(opt => {
    const sel = deadline?.type===opt.type && deadline?.value===opt.value;
    return `
      <button onclick="QuizHomeworkManager._setQhDeadline('${opt.type}',${opt.value})"
        id="qh-dl-${opt.type}-${opt.value}"
        style="padding:7px 14px;border-radius:99px;border:1.5px solid ${sel?'#1A1A1A':'#D5CFC6'};
               background:${sel?'#1A1A1A':'#fff'};color:${sel?'#fff':'#6B7280'};
               font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;">
        ${opt.label}
      </button>
    `;
  }).join("");

  const totalQ = phases.length * wordCount;

  container.innerHTML = `
    <div style="padding:0 2px;" id="qh-root">
      <button onclick="QuizHomeworkManager._backToQuizzes()"
        style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;
               display:flex;align-items:center;gap:4px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Geri
      </button>

      <!-- Seçilmiş quiz info -->
      <div style="background:#fff;border:1.5px solid ${col}40;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;border-radius:10px;background:${col};
                      display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:12px;font-weight:800;color:#fff;">${levelId.toUpperCase()}</span>
          </div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#1A1A1A;">${_escHtml(quizName)}</div>
            <div style="font-size:11px;color:#9CA3AF;">${wordCount} söz · ${levelId.toUpperCase()} səviyyəsi</div>
          </div>
        </div>
      </div>

      <!-- Phase seçimi -->
      <div style="background:#EDEAE2;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
        <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;
                    letter-spacing:0.05em;margin-bottom:10px;">Mərhələlər (Phase)</div>
        <div style="display:flex;gap:8px;" id="qh-phases-row">
          ${phaseCards}
        </div>
        <div id="qh-phase-hint" style="font-size:11px;color:#6B7280;margin-top:8px;text-align:center;">
          ${phases.length} mərhələ · cəmi <span id="qh-total-q">${totalQ}</span> sual
        </div>
      </div>

      <!-- Deadline -->
      <div style="background:#EDEAE2;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
        <div style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;
                    letter-spacing:0.05em;margin-bottom:10px;">Son tarix (Deadline)</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
          ${dlBtns}
          <button onclick="QuizHomeworkManager._toggleQhCalendar()"
            id="qh-dl-calendar-btn"
            style="padding:7px 14px;border-radius:99px;
                   border:1.5px solid ${deadline?.type==='date'?'#1A1A1A':'#D5CFC6'};
                   background:${deadline?.type==='date'?'#1A1A1A':'#fff'};
                   color:${deadline?.type==='date'?'#fff':'#6B7280'};
                   font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Tarix seç
          </button>
        </div>
        <div id="qh-calendar-wrap" style="display:${deadline?.type==='date'?'block':'none'};">
          <input type="date" id="qh-date-input"
            value="${deadline?.type==='date' ? deadline.value : ''}"
            min="${new Date().toISOString().split('T')[0]}"
            onchange="QuizHomeworkManager._setQhDeadlineDate(this.value)"
            style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #E8E2D9;
                   border-radius:10px;font-size:13px;background:#fff;outline:none;color:#1A1A1A;"/>
        </div>
        <div id="qh-deadline-display" style="font-size:11px;color:#6B7280;margin-top:4px;">
          ${_qhDeadlineLabel()}
        </div>
      </div>

      <!-- Göndər -->
      <button onclick="QuizHomeworkManager._submitQuizHomework()"
        style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
        ✓ Quiz Tapşırığını Göndər
      </button>
      <div id="qh-error-msg" style="margin-top:10px;font-size:12px;color:#DC2626;text-align:center;display:none;"></div>
    </div>`;
}

// ─── Phase toggle ─────────────────────────────────────────────────────────────
function _togglePhase(p) {
  const idx = _qhState.phases.indexOf(p);
  if (idx >= 0) {
    if (_qhState.phases.length <= 1) return; // ən az 1 phase
    _qhState.phases.splice(idx, 1);
  } else {
    _qhState.phases.push(p);
    _qhState.phases.sort();
  }
  _updatePhaseUI();
}

function _updatePhaseUI() {
  const { phases, selectedQuiz } = _qhState;
  const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
  const col    = colors[selectedQuiz?.levelId] || '#1A1A1A';
  const wordCount = _getQuizWords(selectedQuiz?.levelId, selectedQuiz?.quizIdx).length;

  [1, 2, 3].forEach(p => {
    const btn = document.getElementById(`qh-phase-${p}`);
    if (!btn) return;
    const sel = phases.includes(p);
    btn.style.borderColor = sel ? col : '#E8E2D9';
    btn.style.background  = sel ? `${col}15` : '#fff';
    btn.querySelector('div:nth-child(2)').style.color = sel ? col : '#6B7280';
  });

  const hint = document.getElementById('qh-phase-hint');
  const totalQ = document.getElementById('qh-total-q');
  if (hint)   hint.textContent = `${phases.length} mərhələ · cəmi ${phases.length * wordCount} sual`;
  if (totalQ) totalQ.textContent = phases.length * wordCount;
}

// ─── Deadline ─────────────────────────────────────────────────────────────────
function _setQhDeadline(type, value) {
  _qhState.deadline = { type, value };
  const opts = [['days',2],['days',7],['days',14]];
  opts.forEach(([t,v]) => {
    const b = document.getElementById(`qh-dl-${t}-${v}`);
    if (!b) return;
    const sel = t===type && v===value;
    b.style.background  = sel ? '#1A1A1A' : '#fff';
    b.style.color       = sel ? '#fff'    : '#6B7280';
    b.style.borderColor = sel ? '#1A1A1A' : '#D5CFC6';
  });
  const cb = document.getElementById('qh-dl-calendar-btn');
  if (cb) { cb.style.background='#fff'; cb.style.color='#6B7280'; cb.style.borderColor='#D5CFC6'; }
  const cw = document.getElementById('qh-calendar-wrap');
  if (cw) cw.style.display = 'none';
  _updateQhDeadlineDisplay();
}

function _toggleQhCalendar() {
  const cw = document.getElementById('qh-calendar-wrap');
  if (!cw) return;
  const open = cw.style.display === 'none';
  cw.style.display = open ? 'block' : 'none';
  const cb = document.getElementById('qh-dl-calendar-btn');
  if (cb) {
    cb.style.background  = open ? '#1A1A1A' : '#fff';
    cb.style.color       = open ? '#fff'    : '#6B7280';
    cb.style.borderColor = open ? '#1A1A1A' : '#D5CFC6';
  }
  if (open) {
    [['days',2],['days',7],['days',14]].forEach(([t,v]) => {
      const b = document.getElementById(`qh-dl-${t}-${v}`);
      if (b) { b.style.background='#fff'; b.style.color='#6B7280'; b.style.borderColor='#D5CFC6'; }
    });
    if (_qhState.deadline?.type !== 'date') _qhState.deadline = null;
    _updateQhDeadlineDisplay();
  }
}

function _setQhDeadlineDate(val) {
  if (!val) return;
  _qhState.deadline = { type: 'date', value: val };
  const cb = document.getElementById('qh-dl-calendar-btn');
  if (cb) { cb.style.background='#1A1A1A'; cb.style.color='#fff'; cb.style.borderColor='#1A1A1A'; }
  _updateQhDeadlineDisplay();
}

function _updateQhDeadlineDisplay() {
  const el = document.getElementById('qh-deadline-display');
  if (el) el.textContent = _qhDeadlineLabel();
}

function _qhDeadlineLabel() {
  const dl = _qhState.deadline;
  if (!dl) return 'Deadline seçilməyib';
  if (dl.type === 'days') {
    const d = new Date(); d.setDate(d.getDate() + dl.value);
    return `Son tarix: ${_formatDate(d)}`;
  }
  if (dl.type === 'date') return `Son tarix: ${dl.value}`;
  return '';
}

// ─── Firestore-a göndər ───────────────────────────────────────────────────────
async function _submitQuizHomework() {
  const user = auth.currentUser;
  if (!user) return;

  const { classId, selectedQuiz, phases, deadline } = _qhState;
  if (!selectedQuiz) { _showQhError('Quiz seçilməyib.'); return; }
  if (phases.length === 0) { _showQhError('Ən az 1 mərhələ seçin.'); return; }

  const { levelId, quizIdx, quizName } = selectedQuiz;
  const words = _getQuizWords(levelId, quizIdx);
  if (words.length === 0) { _showQhError('Bu quizin sözləri tapılmadı.'); return; }

  let deadlineAt = null;
  if (deadline) {
    const d = new Date();
    if (deadline.type === 'days') d.setDate(d.getDate() + deadline.value);
    if (deadline.type === 'date') { deadlineAt = new Date(deadline.value); }
    if (!deadlineAt) deadlineAt = d;
  }

  try {
    const btn = document.querySelector('[onclick="QuizHomeworkManager._submitQuizHomework()"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Göndərilir...'; }

    await addDoc(collection(db, 'quizHomeworks'), {
      classId,
      teacherUid: user.uid,
      levelId,
      quizIdx,
      quizName,
      wordCount:  words.length,
      phases,
      createdAt:  serverTimestamp(),
      deadlineAt: deadlineAt || null,
      status:     'active',
    });

    const panel = document.getElementById('homework-panel');
    if (panel) {
      panel.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:40px;margin-bottom:12px;">✅</div>
          <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px;">Quiz tapşırığı göndərildi!</div>
          <div style="font-size:13px;color:#6B7280;margin-bottom:4px;">${_escHtml(quizName)} · ${levelId.toUpperCase()}</div>
          <div style="font-size:12px;color:#9CA3AF;margin-bottom:20px;">${phases.length} mərhələ · ${phases.length * words.length} sual</div>
          <button onclick="QuizHomeworkManager._backToQhManager()"
            style="background:#1A1A1A;color:#fff;border:none;border-radius:12px;
                   padding:12px 24px;font-size:13px;font-weight:600;cursor:pointer;">
            ← Sinfə qayıt
          </button>
        </div>`;
    }
  } catch(err) {
    console.error('QuizHomework yazma xətası:', err);
    _showQhError('Xəta baş verdi. Yenidən cəhd edin.');
    const btn = document.querySelector('[onclick="QuizHomeworkManager._submitQuizHomework()"]');
    if (btn) { btn.disabled = false; btn.textContent = '✓ Quiz Tapşırığını Göndər'; }
  }
}

function _showQhError(msg) {
  const el = document.getElementById('qh-error-msg');
  if (!el) return;
  el.textContent   = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// ─── Naviqasiya ───────────────────────────────────────────────────────────────
function _backToLevels() {
  const container = document.getElementById('qh-root')?.parentElement
                 || document.getElementById('homework-panel');
  if (container) _renderLevelPicker(container);
}

function _backToQuizzes() {
  const container = document.getElementById('qh-root')?.parentElement
                 || document.getElementById('homework-panel');
  if (container && _qhState.selectedLevel) _renderQuizPicker(_qhState.selectedLevel, container);
}

async function _backToQhManager() {
  const panel = document.getElementById('homework-panel');
  if (!panel) return;
  if (window._qhManagerState) {
    const { classId, className } = window._qhManagerState;
    await renderQuizHomeworkManager(classId, className, panel);
  }
}

// ════════════════════════════════════════════════════════════
//  MÜƏLLIM — Quiz tapşırıqları siyahısı + nəticələr
// ════════════════════════════════════════════════════════════

export async function renderQuizHomeworkManager(classId, className, container) {
  window._qhManagerState = { classId, className };
  container.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  const snap = await getDocs(
    query(collection(db, 'quizHomeworks'),
      where('classId', '==', classId),
      orderBy('createdAt', 'desc'))
  );
  const homeworks = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };

  const cards = homeworks.map(hw => {
    const date    = hw.createdAt?.toDate ? _formatDate(hw.createdAt.toDate()) : '';
    const col     = colors[hw.levelId] || '#1A1A1A';
    const isClosed = hw.status === 'closed';
    const statusBadge = isClosed
      ? `<span style="background:#F3F4F6;color:#6B7280;border:1px solid #E5E7EB;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Bağlı</span>`
      : `<span style="background:#F0FDF4;color:#16A34A;border:1px solid #86EFAC;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;">Aktiv</span>`;

    const phaseBadges = (hw.phases || []).map(p =>
      `<span style="background:${col}15;color:${col};font-size:10px;font-weight:700;
              padding:2px 7px;border-radius:99px;border:1px solid ${col}30;">P${p}</span>`
    ).join('');

    return `
      <div style="background:#fff;border:1px solid #E8E2D9;border-left:3px solid ${col};
                  border-radius:12px;padding:14px 16px;margin-bottom:10px;">
        <div style="margin-bottom:10px;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-size:11px;font-weight:800;color:${col};background:${col}15;
                         padding:2px 8px;border-radius:99px;">${hw.levelId?.toUpperCase()}</span>
            <span style="font-size:13px;font-weight:700;color:#1A1A1A;">${_escHtml(hw.quizName || '')}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            ${statusBadge}
            ${phaseBadges}
            <span style="font-size:11px;color:#9CA3AF;">${hw.wordCount || 0} söz · ${date}</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="QuizHomeworkManager._showQhResults('${hw.id}')"
            style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;
                   border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
            📊 Nəticələr
          </button>
          <button onclick="QuizHomeworkManager._toggleQhStatus('${hw.id}','${hw.status}')"
            style="flex:1;background:#F5F0E8;color:#1A1A1A;border:1px solid #E8E2D9;
                   border-radius:8px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;">
            ${isClosed ? '▶ Aktivləşdir' : '✕ Bağla'}
          </button>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div style="padding:0 2px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <div style="font-size:13px;font-weight:700;color:#1A1A1A;">Quiz Tapşırıqları</div>
        <button onclick="QuizHomeworkManager._showCreateQh()"
          style="background:#1A1A1A;color:#fff;border:none;border-radius:99px;
                 padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;">
          + Yeni
        </button>
      </div>
      ${homeworks.length === 0
        ? `<div style="text-align:center;padding:32px;color:#9CA3AF;font-size:13px;">
             Hələ quiz tapşırığı göndərilməyib
           </div>`
        : cards}
    </div>`;
}

function _showCreateQh() {
  const panel = document.getElementById('homework-panel');
  if (!panel) return;
  const { classId, className } = window._qhManagerState || {};
  if (classId) renderQuizHomeworkPanel(classId, className, panel);
}

async function _toggleQhStatus(hwId, currentStatus) {
  const newStatus = currentStatus === 'closed' ? 'active' : 'closed';
  try {
    await updateDoc(doc(db, 'quizHomeworks', hwId), { status: newStatus });
    await _backToQhManager();
  } catch(err) { console.error(err); }
}

// ─── Nəticələr ────────────────────────────────────────────────────────────────
async function _showQhResults(hwId) {
  const panel = document.getElementById('homework-panel');
  if (!panel) return;
  panel.innerHTML = `<div style="text-align:center;padding:20px;color:#9CA3AF;font-size:13px;">Yüklənir...</div>`;

  try {
    const hwSnap = await getDoc(doc(db, 'quizHomeworks', hwId));
    if (!hwSnap.exists()) return;
    const hw = { id: hwSnap.id, ...hwSnap.data() };

    const resSnap = await getDocs(
      query(collection(db, 'quizHomeworkResults'), where('homeworkId', '==', hwId))
    );
    const results = resSnap.docs.map(d => ({ id: d.id, ...d.data() }));

    // User adlarını yüklə
    const enriched = await Promise.all(results.map(async r => {
      try {
        const uSnap = await getDoc(doc(db, 'users', r.uid));
        const name = uSnap.exists()
          ? (uSnap.data().displayName || uSnap.data().email || r.uid)
          : r.uid;
        return { ...r, displayName: name };
      } catch { return { ...r, displayName: r.uid }; }
    }));
    enriched.sort((a, b) => (b.score || 0) - (a.score || 0));

    const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
    const col    = colors[hw.levelId] || '#1A1A1A';
    const medals = ['🥇','🥈','🥉'];
    const words  = _getQuizWords(hw.levelId, hw.quizIdx);

    const rows = enriched.length === 0
      ? `<div style="text-align:center;padding:24px;color:#9CA3AF;font-size:13px;">Hələ heç bir tələbə həll etməyib</div>`
      : enriched.map((r, i) => {
          const scoreColor = r.score >= 80 ? '#16A34A' : r.score >= 50 ? '#D97706' : '#DC2626';
          const date = r.completedAt?.toDate ? _formatDate(r.completedAt.toDate()) : '';
          const totalQ = (hw.phases?.length || 1) * words.length;
          const wrong  = totalQ - (r.correct || 0);

          // Səhv suallar detalı
          const errorDetails = (r.errors || []).slice(0, 5).map(e => `
            <div style="font-size:11px;color:#DC2626;padding:2px 0;">
              • ${_escHtml(e.word)} (P${e.phase}): ${_escHtml(e.given)} → doğru: ${_escHtml(e.correct)}
            </div>
          `).join('');
          const moreErrors = (r.errors || []).length > 5
            ? `<div style="font-size:11px;color:#9CA3AF;">+${(r.errors||[]).length - 5} digər səhv...</div>`
            : '';

          return `
            <div style="padding:12px 14px;border-bottom:1px solid #F0ECE4;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:${errorDetails ? 8 : 0}px;">
                <span style="font-size:16px;width:24px;text-align:center;">${medals[i] || `${i+1}.`}</span>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:13px;font-weight:600;color:#1A1A1A;">${_escHtml(r.displayName)}</div>
                  <div style="font-size:11px;color:#9CA3AF;">${r.correct||0}/${totalQ} düzgün · ${date}</div>
                </div>
                <div style="font-size:16px;font-weight:700;color:${scoreColor};">${r.score || 0}%</div>
              </div>
              ${errorDetails ? `
                <div style="background:#FFF5F5;border-radius:8px;padding:8px 10px;margin-top:4px;">
                  <div style="font-size:10px;font-weight:700;color:#9CA3AF;text-transform:uppercase;
                              letter-spacing:0.05em;margin-bottom:4px;">Səhv suallar:</div>
                  ${errorDetails}${moreErrors}
                </div>
              ` : ''}
            </div>`;
        }).join('');

    panel.innerHTML = `
      <div style="padding:0 2px;">
        <button onclick="QuizHomeworkManager._backToQhManager()"
          style="background:none;border:none;font-size:13px;color:#9CA3AF;cursor:pointer;padding:0;margin-bottom:14px;">← Geri</button>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span style="font-size:11px;font-weight:800;color:${col};background:${col}15;
                       padding:2px 8px;border-radius:99px;">${hw.levelId?.toUpperCase()}</span>
          <span style="font-size:13px;font-weight:700;color:#1A1A1A;">${_escHtml(hw.quizName || '')}</span>
        </div>
        <div style="font-size:11px;color:#9CA3AF;margin-bottom:14px;">
          ${results.length} tələbə · ${(hw.phases||[]).length} mərhələ · ${words.length} söz
        </div>
        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:12px;overflow:hidden;">
          ${rows}
        </div>
      </div>`;
  } catch(err) {
    console.error('QhResults xətası:', err);
    panel.innerHTML = `<div style="padding:20px;text-align:center;color:#DC2626;font-size:13px;">Xəta baş verdi</div>`;
  }
}

// ════════════════════════════════════════════════════════════
//  TƏLƏBƏ — Quiz tapşırıqlarını yüklə + kart
// ════════════════════════════════════════════════════════════

export async function loadStudentQuizHomeworks() {
  const user = auth.currentUser;
  if (!user) return [];

  const classSnap = await getDocs(
    query(collection(db, 'classes'), where('students', 'array-contains', user.email))
  );
  if (classSnap.empty) return [];
  const classIds = classSnap.docs.map(d => d.id);

  const hwList = [];
  for (const cid of classIds) {
    const snap = await getDocs(
      query(collection(db, 'quizHomeworks'),
        where('classId', '==', cid),
        where('status',  '==', 'active'))
    );
    snap.docs.forEach(d => hwList.push({ id: d.id, ...d.data() }));
  }

  // Tamamlanmışları filtrə et
  const doneSnap = await getDocs(
    query(collection(db, 'quizHomeworkResults'), where('uid', '==', user.uid))
  );
  const doneIds = new Set(doneSnap.docs.map(d => d.data().homeworkId));

  return hwList.filter(hw => !doneIds.has(hw.id));
}

export async function renderQuizHomeworkCard(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  try {
    const homeworks = await loadStudentQuizHomeworks();
    if (homeworks.length === 0) return;

    const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };

    el.innerHTML = `
      <div style="padding:14px 16px;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="font-size:11px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;">QUIZ TAPŞIRIĞI</div>
          <span style="background:#FAEEDA;color:#633806;font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;border:1px solid #FAC775;">
            ${homeworks.length} yeni
          </span>
        </div>
        ${homeworks.map(hw => {
          const col = colors[hw.levelId] || '#1A1A1A';
          const totalQ = (hw.phases?.length || 1) * (hw.wordCount || 0);

          // Yarımçıq progress yoxla
          const progressKey = `qhw_progress_${hw.id}_${auth.currentUser?.uid}`;
          const savedProgress = _loadQhProgress(hw.id);
          const hasSaved = !!savedProgress;
          const pct = hasSaved
            ? Math.round(((savedProgress.phaseIdx * hw.wordCount + savedProgress.wordIdx) / totalQ) * 100)
            : 0;

          return `
            <div style="margin-bottom:10px;background:#fff;border:1px solid ${col}30;
                        border-left:3px solid ${col};border-radius:10px;padding:10px 12px;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span style="font-size:10px;font-weight:800;color:${col};background:${col}15;
                             padding:1px 7px;border-radius:99px;">${hw.levelId?.toUpperCase()}</span>
                <span style="font-size:12px;font-weight:700;color:#1A1A1A;white-space:nowrap;
                             overflow:hidden;text-overflow:ellipsis;">${_escHtml(hw.quizName || '')}</span>
              </div>
              <div style="font-size:11px;color:#9CA3AF;margin-bottom:6px;">
                ${totalQ} sual · ${(hw.phases||[]).length} mərhələ
              </div>
              ${hasSaved ? `
                <div style="margin-bottom:6px;">
                  <div style="height:3px;background:#E8E2D9;border-radius:99px;overflow:hidden;">
                    <div style="height:100%;width:${pct}%;background:${col};border-radius:99px;transition:width 0.3s;"></div>
                  </div>
                  <div style="font-size:10px;color:#9CA3AF;margin-top:2px;">${pct}% tamamlandı — davam edə bilərsiniz</div>
                </div>
              ` : ''}
              <button onclick="QuizHomeworkManager.startQuizHomework('${hw.id}')"
                style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:8px;
                       padding:7px;font-size:12px;font-weight:600;cursor:pointer;">
                ${hasSaved ? 'Davam et →' : 'Başla →'}
              </button>
            </div>
          `;
        }).join('')}
      </div>`;
  } catch(err) {
    console.error('QuizHomeworkCard xətası:', err);
  }
}

// ════════════════════════════════════════════════════════════
//  TƏLƏBƏ — Quiz interfeysi (3 phase)
// ════════════════════════════════════════════════════════════

// Yarımçıq progress — Firestore-da saxlanır
const QH_PROGRESS_COLL = 'quizHomeworkProgress';

async function _saveQhProgress(hwId, progressData) {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const docId = `${user.uid}_${hwId}`;
    await setDoc(doc(db, QH_PROGRESS_COLL, docId), {
      uid: user.uid,
      homeworkId: hwId,
      ...progressData,
      savedAt: serverTimestamp(),
    });
  } catch(err) { console.error('Progress save xətası:', err); }
}

async function _loadQhProgressFromDb(hwId) {
  const user = auth.currentUser;
  if (!user) return null;
  try {
    const docId = `${user.uid}_${hwId}`;
    const snap = await getDoc(doc(db, QH_PROGRESS_COLL, docId));
    return snap.exists() ? snap.data() : null;
  } catch { return null; }
}

function _loadQhProgress(hwId) {
  // Yüklənmiş progress cache-dən — startQuizHomework zamanı yüklənir
  return window._qhProgressCache?.[hwId] || null;
}

async function _clearQhProgress(hwId) {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const docId = `${user.uid}_${hwId}`;
    await deleteDoc(doc(db, QH_PROGRESS_COLL, docId));
    if (window._qhProgressCache) delete window._qhProgressCache[hwId];
  } catch(err) { console.error('Progress clear xətası:', err); }
}

// ─── Test state ───────────────────────────────────────────────────────────────
let _qhTestState = {
  hw:        null,
  words:     [],
  phases:    [],
  phaseIdx:  0,   // cari phase index (phases array içindəki)
  wordIdx:   0,   // cari sual
  answers:   [],  // { word, phase, given, correct, isCorrect }
  locked:    false,
  // Hər phase üçün məlumat
  phaseAnswers: {}, // phaseNum → [{ wordIdx, given, correct, isCorrect }]
};

export async function startQuizHomework(hwId) {
  const snap = await getDoc(doc(db, 'quizHomeworks', hwId));
  if (!snap.exists()) { alert('Tapşırıq tapılmadı.'); return; }
  const hw = { id: snap.id, ...snap.data() };
  const words = _getQuizWords(hw.levelId, hw.quizIdx);
  if (!words.length) { alert('Quiz sözləri tapılmadı.'); return; }

  // Mövcud progressi yüklə
  const savedProgress = await _loadQhProgressFromDb(hwId);
  if (!window._qhProgressCache) window._qhProgressCache = {};
  if (savedProgress) window._qhProgressCache[hwId] = savedProgress;

  _qhTestState = {
    hw,
    words,
    phases:       hw.phases || [1, 2, 3],
    phaseIdx:     savedProgress?.phaseIdx  || 0,
    wordIdx:      savedProgress?.wordIdx   || 0,
    answers:      savedProgress?.answers   || [],
    locked:       false,
    phaseAnswers: savedProgress?.phaseAnswers || {},
  };

  _renderQhTestScreen();
}

function _renderQhTestScreen() {
  const existing = document.getElementById('qh-test-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'qh-test-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:2000;background:#F5F0E8;
    display:flex;flex-direction:column;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  `;

  const { hw, words, phases } = _qhTestState;
  const totalQ = phases.length * words.length;

  overlay.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;padding:14px 18px;
                background:#F5F0E8;border-bottom:1px solid #E8E2D9;flex-shrink:0;">
      <button onclick="QuizHomeworkManager._confirmQuitQhTest()"
        style="background:none;border:none;cursor:pointer;padding:4px;color:#9CA3AF;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div style="flex:1;background:#E8E2D9;border-radius:99px;height:6px;overflow:hidden;">
        <div id="qh-test-progress" style="height:100%;background:#1A1A1A;border-radius:99px;
                                          transition:width 0.3s ease;width:0%;"></div>
      </div>
      <span id="qh-test-counter" style="font-size:12px;font-weight:600;color:#6B7280;white-space:nowrap;">
        1/${totalQ}
      </span>
    </div>
    <div id="qh-phase-label-bar" style="padding:8px 18px;background:#fff;border-bottom:1px solid #F0ECE4;flex-shrink:0;"></div>
    <div style="flex:1;overflow-y:auto;padding:20px 18px 100px;" id="qh-test-body"></div>
    <div style="padding:14px 18px;background:#F5F0E8;border-top:1px solid #E8E2D9;flex-shrink:0;" id="qh-test-footer">
      <button id="qh-next-btn" onclick="QuizHomeworkManager._qhNextQuestion()"
        style="width:100%;background:#E8E2D9;color:#9CA3AF;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:not-allowed;">
        Növbəti →
      </button>
    </div>`;

  document.body.appendChild(overlay);
  _renderQhQuestion();
}

function _renderQhQuestion() {
  const { hw, words, phases, phaseIdx, wordIdx } = _qhTestState;
  const totalQ    = phases.length * words.length;
  const currentQ  = phaseIdx * words.length + wordIdx;
  const pct       = Math.round((currentQ / totalQ) * 100);
  const phaseNum  = phases[phaseIdx];
  const word      = words[wordIdx];

  const progressEl = document.getElementById('qh-test-progress');
  const counterEl  = document.getElementById('qh-test-counter');
  if (progressEl) progressEl.style.width = `${pct}%`;
  if (counterEl)  counterEl.textContent  = `${currentQ + 1}/${totalQ}`;

  // Phase label
  const phaseBar = document.getElementById('qh-phase-label-bar');
  const phaseLabels = { 1: '🇬🇧→🇦🇿  İngilis → Azərbaycan', 2: '🇦🇿→🇬🇧  Azərbaycan → İngilis', 3: '📖→💬  Tərif → Söz seç' };
  const colors = { a1:'#C0392B', a2:'#E67E22', b1:'#27AE60', b2:'#2980B9', c1:'#8E44AD', c2:'#2C3E50' };
  const col    = colors[hw.levelId] || '#1A1A1A';
  if (phaseBar) {
    phaseBar.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:12px;font-weight:600;color:#6B7280;">${phaseLabels[phaseNum] || `Phase ${phaseNum}`}</span>
        <span style="font-size:11px;color:#9CA3AF;">Mərhələ ${phaseIdx+1}/${phases.length}</span>
      </div>`;
  }

  const body = document.getElementById('qh-test-body');
  if (!body) return;

  if (phaseNum === 1) {
    _renderPhase1(body, word, wordIdx, col);
  } else if (phaseNum === 2) {
    _renderPhase2(body, word, wordIdx, words, col);
  } else if (phaseNum === 3) {
    _renderPhase3(body, word, wordIdx, words, col);
  }

  _qhTestState.locked = false;
  _setQhNextBtnState(false);
}

// ─── Phase 1: EN → AZ (4 variant: tr + 3 wrong) ──────────────────────────────
function _renderPhase1(body, word, wordIdx, col) {
  const options = _shuffle([
    { text: word.tr, correct: true },
    { text: word.wrong, correct: false },
    // 2 əlavə yalan: digər sözlərdən götür
    ..._getExtraWrong(_qhTestState.words, wordIdx, 'tr', 2).map(t => ({ text: t, correct: false }))
  ]).slice(0, 4);

  body.innerHTML = `
    <div style="margin-bottom:6px;">
      <span style="font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">
        Azərbaycan tərcüməsini seç
      </span>
    </div>
    <div style="font-size:28px;font-weight:800;color:#1A1A1A;margin-bottom:6px;">${_escHtml(word.en)}</div>
    <div style="font-size:13px;color:#9CA3AF;margin-bottom:24px;font-style:italic;">
      ${_escHtml(word.def || '')}
    </div>
    <div id="qh-opts-container">
      ${options.map((opt, i) => `
        <button id="qh-opt-${i}" onclick="QuizHomeworkManager._qhSelectAnswer(${i},${opt.correct},'${_escHtml(opt.text)}','${_escHtml(word.tr)}')"
          style="width:100%;text-align:left;padding:14px 16px;border-radius:12px;border:2px solid #E8E2D9;
                 background:#fff;cursor:pointer;margin-bottom:10px;display:flex;align-items:center;gap:12px;
                 transition:all 0.15s;font-size:14px;font-family:inherit;">
          <span style="width:26px;height:26px;border-radius:8px;background:#F0ECE4;display:flex;align-items:center;
                       justify-content:center;font-size:12px;font-weight:700;color:#6B7280;flex-shrink:0;">
            ${['A','B','C','D'][i]}
          </span>
          <span style="color:#1A1A1A;font-weight:500;">${_escHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>`;
}

// ─── Phase 2: AZ → EN (4 variant: en + 3 wrong) ──────────────────────────────
function _renderPhase2(body, word, wordIdx, words, col) {
  const options = _shuffle([
    { text: word.en, correct: true },
    { text: word.wen, correct: false },
    ..._getExtraWrong(words, wordIdx, 'en', 2).map(t => ({ text: t, correct: false }))
  ]).slice(0, 4);

  body.innerHTML = `
    <div style="margin-bottom:6px;">
      <span style="font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">
        İngilis tərcüməsini seç
      </span>
    </div>
    <div style="font-size:28px;font-weight:800;color:#1A1A1A;margin-bottom:24px;">${_escHtml(word.tr)}</div>
    <div id="qh-opts-container">
      ${options.map((opt, i) => `
        <button id="qh-opt-${i}" onclick="QuizHomeworkManager._qhSelectAnswer(${i},${opt.correct},'${_escHtml(opt.text)}','${_escHtml(word.en)}')"
          style="width:100%;text-align:left;padding:14px 16px;border-radius:12px;border:2px solid #E8E2D9;
                 background:#fff;cursor:pointer;margin-bottom:10px;display:flex;align-items:center;gap:12px;
                 transition:all 0.15s;font-size:14px;font-family:inherit;">
          <span style="width:26px;height:26px;border-radius:8px;background:#F0ECE4;display:flex;align-items:center;
                       justify-content:center;font-size:12px;font-weight:700;color:#6B7280;flex-shrink:0;">
            ${['A','B','C','D'][i]}
          </span>
          <span style="color:#1A1A1A;font-weight:500;">${_escHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>`;
}

// ─── Phase 3: Definition → söz seç ───────────────────────────────────────────
function _renderPhase3(body, word, wordIdx, words, col) {
  const options = _shuffle([
    { text: word.en, correct: true },
    ..._getExtraWrong(words, wordIdx, 'en', 3).map(t => ({ text: t, correct: false }))
  ]).slice(0, 4);

  body.innerHTML = `
    <div style="margin-bottom:6px;">
      <span style="font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;">
        Tərifi oxu, sözü seç
      </span>
    </div>
    <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:18px 16px;margin-bottom:24px;">
      <div style="font-size:16px;color:#1A1A1A;line-height:1.6;font-style:italic;">
        "${_escHtml(word.def || '')}"
      </div>
      <div style="font-size:12px;color:#9CA3AF;margin-top:8px;">Azərbaycanca: ${_escHtml(word.tr)}</div>
    </div>
    <div id="qh-opts-container">
      ${options.map((opt, i) => `
        <button id="qh-opt-${i}" onclick="QuizHomeworkManager._qhSelectAnswer(${i},${opt.correct},'${_escHtml(opt.text)}','${_escHtml(word.en)}')"
          style="width:100%;text-align:left;padding:14px 16px;border-radius:12px;border:2px solid #E8E2D9;
                 background:#fff;cursor:pointer;margin-bottom:10px;display:flex;align-items:center;gap:12px;
                 transition:all 0.15s;font-size:14px;font-family:inherit;">
          <span style="width:26px;height:26px;border-radius:8px;background:#F0ECE4;display:flex;align-items:center;
                       justify-content:center;font-size:12px;font-weight:700;color:#6B7280;flex-shrink:0;">
            ${['A','B','C','D'][i]}
          </span>
          <span style="color:#1A1A1A;font-weight:500;">${_escHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>`;
}

// ─── Cavab seç ────────────────────────────────────────────────────────────────
function _qhSelectAnswer(optIdx, isCorrect, givenText, correctText) {
  if (_qhTestState.locked) return;
  _qhTestState.locked = true;

  const { hw, words, phases, phaseIdx, wordIdx } = _qhTestState;
  const phaseNum = phases[phaseIdx];
  const word     = words[wordIdx];

  // Cavabı saxla
  if (!_qhTestState.phaseAnswers[phaseNum]) _qhTestState.phaseAnswers[phaseNum] = [];
  _qhTestState.phaseAnswers[phaseNum].push({
    wordIdx,
    word:      word.en,
    given:     givenText,
    correct:   correctText,
    isCorrect: !!isCorrect,
  });
  _qhTestState.answers.push({
    phase: phaseNum, wordIdx,
    word: word.en, given: givenText, correct: correctText, isCorrect: !!isCorrect,
  });

  // UI feedback
  const optCount = document.querySelectorAll('[id^="qh-opt-"]').length;
  for (let i = 0; i < optCount; i++) {
    const btn = document.getElementById(`qh-opt-${i}`);
    if (!btn) continue;
    btn.style.cursor = 'default';
    btn.onclick = null;
    const btnText = btn.querySelector('span:last-child')?.textContent?.trim();
    if (btnText === correctText) {
      btn.style.borderColor = '#16A34A'; btn.style.background = '#F0FDF4';
      const letter = btn.querySelector('span:first-child');
      if (letter) { letter.style.background = '#16A34A'; letter.style.color = '#fff'; }
    } else if (i === optIdx && !isCorrect) {
      btn.style.borderColor = '#DC2626'; btn.style.background = '#FFF1F0';
      const letter = btn.querySelector('span:first-child');
      if (letter) { letter.style.background = '#DC2626'; letter.style.color = '#fff'; }
    }
  }

  // Progressi saxla (hər 3 cavabdan bir və ya axırıncı sualda)
  const currentQ = phaseIdx * words.length + wordIdx;
  if (currentQ % 3 === 0 || currentQ === phases.length * words.length - 1) {
    _saveQhProgress(hw.id, {
      phaseIdx: _qhTestState.phaseIdx,
      wordIdx:  _qhTestState.wordIdx,
      answers:  _qhTestState.answers,
      phaseAnswers: _qhTestState.phaseAnswers,
    });
  }

  _setQhNextBtnState(true);
}

function _setQhNextBtnState(active) {
  const btn = document.getElementById('qh-next-btn');
  if (!btn) return;
  const { phases, phaseIdx, wordIdx, words } = _qhTestState;
  const isLastWord  = wordIdx  === words.length - 1;
  const isLastPhase = phaseIdx === phases.length - 1;
  const isLast      = isLastWord && isLastPhase;

  if (active) {
    btn.style.background = '#1A1A1A';
    btn.style.color      = '#fff';
    btn.style.cursor     = 'pointer';
    btn.textContent = isLast ? 'Bitir ✓'
      : isLastWord ? `Növbəti mərhələ (${phases[phaseIdx+1] !== undefined ? `P${phases[phaseIdx+1]}` : ''}) →`
      : 'Növbəti →';
  } else {
    btn.style.background = '#E8E2D9';
    btn.style.color      = '#9CA3AF';
    btn.style.cursor     = 'not-allowed';
    btn.textContent      = 'Növbəti →';
  }
}

function _qhNextQuestion() {
  if (!_qhTestState.locked) return;
  const { words, phases } = _qhTestState;

  if (_qhTestState.wordIdx < words.length - 1) {
    _qhTestState.wordIdx++;
    _renderQhQuestion();
  } else if (_qhTestState.phaseIdx < phases.length - 1) {
    // Phase keç
    _qhTestState.phaseIdx++;
    _qhTestState.wordIdx = 0;
    _renderQhPhaseTransition();
  } else {
    _finishQhTest();
  }
}

// ─── Phase keçid ekranı ───────────────────────────────────────────────────────
function _renderQhPhaseTransition() {
  const { phases, phaseIdx, words } = _qhTestState;
  const phaseNum = phases[phaseIdx];
  const phaseLabels = {
    1: { label: 'Phase 1', sub: 'İngilis → Azərbaycan', icon: '🇬🇧' },
    2: { label: 'Phase 2', sub: 'Azərbaycan → İngilis', icon: '🇦🇿' },
    3: { label: 'Phase 3', sub: 'Tərif → Söz seç',     icon: '📖' },
  };
  const pd = phaseLabels[phaseNum] || { label: `Phase ${phaseNum}`, sub: '', icon: '📝' };

  const body = document.getElementById('qh-test-body');
  if (!body) return;

  body.innerHTML = `
    <div style="text-align:center;padding:40px 20px;">
      <div style="font-size:48px;margin-bottom:12px;">${pd.icon}</div>
      <div style="font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">
        Növbəti mərhələ
      </div>
      <div style="font-size:22px;font-weight:800;color:#1A1A1A;margin-bottom:6px;">${pd.label}</div>
      <div style="font-size:14px;color:#6B7280;margin-bottom:24px;">${pd.sub}</div>
      <div style="font-size:13px;color:#9CA3AF;">${words.length} sual · Mərhələ ${phaseIdx+1}/${phases.length}</div>
    </div>`;

  const footer = document.getElementById('qh-test-footer');
  if (footer) {
    footer.innerHTML = `
      <button onclick="QuizHomeworkManager._startNextPhase()"
        style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
        Başla →
      </button>`;
  }
}

function _startNextPhase() {
  const footer = document.getElementById('qh-test-footer');
  if (footer) {
    footer.innerHTML = `
      <button id="qh-next-btn" onclick="QuizHomeworkManager._qhNextQuestion()"
        style="width:100%;background:#E8E2D9;color:#9CA3AF;border:none;border-radius:12px;
               padding:14px;font-size:14px;font-weight:700;cursor:not-allowed;">
        Növbəti →
      </button>`;
  }
  _renderQhQuestion();
}

// ─── Test bitişi ──────────────────────────────────────────────────────────────
async function _finishQhTest() {
  const user = auth.currentUser;
  const { hw, answers, words, phases } = _qhTestState;
  const totalQ   = phases.length * words.length;
  const correct  = answers.filter(a => a.isCorrect).length;
  const wrong    = totalQ - correct;
  const pct      = Math.round((correct / totalQ) * 100);

  // Səhvləri topla
  const errors = answers.filter(a => !a.isCorrect).map(a => ({
    word:    a.word,
    phase:   a.phase,
    given:   a.given,
    correct: a.correct,
  }));

  try {
    await addDoc(collection(db, 'quizHomeworkResults'), {
      uid:         user.uid,
      homeworkId:  hw.id,
      classId:     hw.classId,
      levelId:     hw.levelId,
      quizIdx:     hw.quizIdx,
      quizName:    hw.quizName,
      answers:     answers.map(a => ({ p: a.phase, w: a.word, ok: a.isCorrect })),
      errors,
      correct,
      wrong,
      total:       totalQ,
      score:       pct,
      completedAt: serverTimestamp(),
    });
    // Progressi sil
    await _clearQhProgress(hw.id);
  } catch(err) {
    console.error('QhResult yazma xətası:', err);
  }

  const progressEl = document.getElementById('qh-test-progress');
  if (progressEl) progressEl.style.width = '100%';

  const body   = document.getElementById('qh-test-body');
  const footer = document.getElementById('qh-test-footer');

  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const msg   = pct >= 80 ? 'Əla nəticə!' : pct >= 50 ? '  Yaxşı nəticə!' : 'Davam et!';

  if (body) body.innerHTML = `
    <div style="text-align:center;padding:30px 10px;">
      <div style="font-size:52px;margin-bottom:12px;">${emoji}</div>
      <div style="font-size:20px;font-weight:800;color:#1A1A1A;margin-bottom:6px;">${msg}</div>
      <div style="font-size:13px;color:#6B7280;margin-bottom:24px;">${_escHtml(hw.quizName || '')}</div>

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

      ${errors.length > 0 ? `
        <div style="text-align:left;">
          <div style="font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;
                      letter-spacing:0.06em;margin-bottom:10px;">Səhv suallar</div>
          ${errors.slice(0, 10).map(e => `
            <div style="background:#fff;border:1px solid #FCA5A5;border-radius:10px;
                        padding:10px 12px;margin-bottom:8px;">
              <div style="font-size:12px;font-weight:600;color:#1A1A1A;margin-bottom:4px;">
                ❌ ${_escHtml(e.word)} <span style="font-size:10px;color:#9CA3AF;">(P${e.phase})</span>
              </div>
              <div style="font-size:11px;color:#DC2626;">Seçdiyiniz: ${_escHtml(e.given)}</div>
              <div style="font-size:11px;color:#16A34A;">Doğru: ${_escHtml(e.correct)}</div>
            </div>
          `).join('')}
          ${errors.length > 10 ? `<div style="font-size:12px;color:#9CA3AF;text-align:center;">+${errors.length - 10} digər...</div>` : ''}
        </div>
      ` : `
        <div style="background:#F0FDF4;border:1px solid #86EFAC;border-radius:12px;padding:16px;text-align:center;">
          <div style="font-size:20px;margin-bottom:4px;">🏆</div>
          <div style="font-size:13px;font-weight:600;color:#16A34A;">Bütün sualları düzgün cavabladınız!</div>
        </div>
      `}
    </div>`;

  if (footer) footer.innerHTML = `
    <button onclick="QuizHomeworkManager._closeQhTest()"
      style="width:100%;background:#1A1A1A;color:#fff;border:none;border-radius:12px;
             padding:14px;font-size:14px;font-weight:700;cursor:pointer;">
      Statistikaya qayıt
    </button>`;
}

function _confirmQuitQhTest() {
  if (!confirm('Testdən çıxmaq istəyirsən?\n✓ İrəliləyişin saxlanacaq — sonra davam edə bilərsən.')) return;
  // Progress saxla
  const { hw, phaseIdx, wordIdx, answers, phaseAnswers } = _qhTestState;
  if (hw) {
    _saveQhProgress(hw.id, { phaseIdx, wordIdx, answers, phaseAnswers });
  }
  _closeQhTest();
}

function _closeQhTest() {
  const overlay = document.getElementById('qh-test-overlay');
  if (overlay) overlay.remove();
}

// ════════════════════════════════════════════════════════════
//  YARDIMÇI
// ════════════════════════════════════════════════════════════

function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _getExtraWrong(words, currentIdx, field, count) {
  const pool = words
    .map((w, i) => ({ val: w[field], i }))
    .filter(x => x.i !== currentIdx && x.val);
  const shuffled = _shuffle(pool);
  return shuffled.slice(0, count).map(x => x.val);
}

function _escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2,'0')}.${(d.getMonth()+1).toString().padStart(2,'0')}.${d.getFullYear()}`;
}

// ─── Public API ───────────────────────────────────────────────────────────────
window.QuizHomeworkManager = {
  renderPanel:          renderQuizHomeworkPanel,
  renderManager:        renderQuizHomeworkManager,
  _pickLevel,
  _pickQuiz,
  _backToLevels,
  _backToQuizzes,
  _togglePhase,
  _setQhDeadline,
  _toggleQhCalendar,
  _setQhDeadlineDate,
  _submitQuizHomework,
  _showQhResults,
  _toggleQhStatus,
  _showCreateQh,
  _backToQhManager,
  startQuizHomework,
  _qhSelectAnswer,
  _qhNextQuestion,
  _startNextPhase,
  _confirmQuitQhTest,
  _closeQhTest,
  renderCard:           renderQuizHomeworkCard,
};
