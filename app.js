// ============================================================
//  WORDPATH — Application Logic
// ============================================================

const QUIZ_NAMES = {
  'a1': {
    0:  'Roles',
    1:  'General People',
    2:  'Family',
    3:  'Body',
    5:  'Feelings',
    6:  'Positive Adjectives',
    7:  'Size & Description',
    8:  'State Adjectives',
    9:  'State Adjectives 2',
    11: 'Vegetables & Fruit',
    12: 'Dairy & Protein',
    13: 'Drinks & Meals',
    15: 'Colours',
    16: 'Numbers 1–20',
    17: 'Numbers 30–Ordinals',
    19: 'Rooms & Furniture',
    20: 'Household Objects',
    21: 'City Buildings',
    22: 'Places & Areas',
    24: 'Nature & Geography',
    25: 'Animals',
    26: 'Transport',
    27: 'Clothes & Accessories',
    29: 'Days & Months',
    30: 'General Time',
    31: 'More Time Words',
    33: 'Money & Shopping',
    34: 'Technology',
    35: 'Media & Entertainment',
    37: 'School & Study',
    38: 'More School Words',
    39: 'Sport & Hobbies',
    41: 'Movement Verbs',
    42: 'Communication Verbs',
    43: 'Daily Life Verbs',
    45: 'Daily Life Verbs 2',
    46: 'Mental & Abstract Verbs',
    47: 'Mental Verbs 2',
    49: 'Work & Business',
    50: 'Misc Nouns',
    51: 'Misc Nouns 2',
  },
  'a2': {
    0:  'Jobs & Professions 1',
    1:  'Jobs & Professions 2',
    2:  'Human Body',
    3:  'Health & Illness',
    5:  'Food & Drink',
    6:  'Kitchen & Utensils',
    7:  'Animals',
    8:  'Nature & Geography',
    10: 'Technology & Internet',
    11: 'Media & Advertising',
    12: 'Education',
    13: 'Science & Discovery',
    15: 'Sports',
    16: 'Hobbies & Free Time',
    18: 'City Life',
    19: 'Transport',
    20: 'Home & Household',
    21: 'Clothes & Accessories',
    23: 'Feelings & Emotions',
    24: 'Character & Behaviour',
    25: 'Adjectives: Quality',
    26: 'Adjectives: State',
    28: 'Adverbs & Connectors',
    29: 'Time & Sequence',
    31: 'Communication & Language',
    32: 'Social Life & Relationships',
    34: 'Law, Crime & Military',
    35: 'Business, Money & Economy',
    37: 'Environment',
    38: 'Travel & Tourism',
  },
  'b1': {
    0: 'Education & Learning 1',
    1: 'Education & Learning 2',
    2: 'Business & Work 1',
    3: 'Business & Work 2',
    5: 'Money & Shopping',
    6: 'Technology & Media',
    7: 'Communication & Social Interaction',
    9: 'Feelings & Personality 1',
    10: 'Feelings & Personality 2',
    12: 'Crime, Law & Government 1',
    13: 'Crime, Law & Government 2',
    14: 'War, Conflict & Danger',
    16: 'Travel & Transport',
    17: 'Nature & Environment 1',
    18: 'Nature & Environment 2',
    20: 'Science & Materials',
    21: 'Health & Body',
    22: 'Food & Cooking',
    24: 'House & Daily Life',
    25: 'Family, Relationships & Society',
    27: 'Art, Culture & Entertainment',
    28: 'Sports & Fitness',
    29: 'Language & Writing'
  },
  'b2': {
  0:  'Education & Learning',
  1:  'Personal Development & Skills',
  2:  'Business & Work 1',
  3:  'Business & Work 2',
  4:  'Money & Economy',
  5:  'Technology & Media',
  6:  'Communication & Social',
  7:  'Feelings & Emotions 1',
  8:  'Feelings & Emotions 2',
  9:  'Crime, Law & Government 1',
  10: 'Crime, Law & Government 2',
  11: 'War, Conflict & Danger',
  12: 'Travel & Transport',
  13: 'Nature & Environment',
  14: 'Science & Research',
  15: 'Health & Body',
  16: 'Food, House & Daily Life',
  17: 'Family & Society',
  18: 'Art, Culture & Entertainment',
  19: 'Sports & Fitness',
  20: 'Personality & Character',
  21: 'Abstract Concepts & Thinking',
  22: 'Actions & Processes 1',
  23: 'Actions & Processes 2',
  24: 'Change & Development',
  25: 'Problems & Solutions',
  26: 'Government & Politics',
  27: 'Law & Justice',
  28: 'Work & Employment',
  29: 'Success & Achievement',
},
'c1': {
  0:  'Negative Emotions & States',
  1:  'Positive Qualities',
  2:  'Media & Communication',
  3:  'Environment & Nature',
  4:  'Health & Medicine',
  5:  'Technology & Innovation',
  6:  'Travel & Holidays',
  7:  'Food & Shopping',
  8:  'House & Everyday Life',
  9:  'Criticism & Condemnation 1',
  10: 'Criticism & Condemnation 2',
  11: 'Morality & Ethics 1',
  12: 'Morality & Ethics 2',
  13: 'Power & Authority 1',
  14: 'Power & Authority 2',
  15: 'Conflict & Hostility 1',
  16: 'Conflict & Hostility 2',
  17: 'Law & Governance 1',
  18: 'Law & Governance 2',
  19: 'Praise & Admiration',
  20: 'Negative Character Traits 1',
  21: 'Negative Character Traits 2',
  22: 'Positive Character Traits 1',
  23: 'Positive Character Traits 2',
  24: 'Emotion & Psychological States 1',
  25: 'Emotion & Psychological States 2',
},
'c2': {
  0:  'Weakness & Decline',
  1:  'Resistance & Stubbornness',
  2:  'Disorder & Chaos',
  3:  'Language, Rhetoric & Literature 1',
  4:  'Language, Rhetoric & Literature 2',
  5:  'Thought, Reasoning & Philosophy 1',
  6:  'Thought, Reasoning & Philosophy 2',
  7:  'Social Status & Class',
  8:  'Wealth, Greed & Poverty',
  9:  'Religion, Belief & Ritual 1',
  10: 'Religion, Belief & Ritual 2',
  11: 'Ambition, Success & Failure 1',
  12: 'Ambition, Success & Failure 2',
  13: 'Deference, Submission & Servility',
  14: 'Time, Change & Impermanence',
  15: 'Nature & Geography',
  16: 'War, Military & Strategy 1',
  17: 'War, Military & Strategy 2',
  18: 'Crime, Corruption & Wrongdoing 1',
  19: 'Crime, Corruption & Wrongdoing 2',
  20: 'Suffering & Hardship 1',
  21: 'Suffering & Hardship 2',
  22: 'Generosity, Charity & Compassion',
  23: 'Pride, Vanity & Arrogance',
  24: 'Secrecy & Concealment',
  25: 'Rebellion & Dissent',
  26: 'Diplomacy & Negotiation',
  27: 'Excess & Indulgence',
  28: 'Intellect & Knowledge 1',
  29: 'Intellect & Knowledge 2',
  30: 'Appearance & Perception',
  31: 'Indifference & Detachment',
  32: 'Brevity, Precision & Style',
  33: 'Fate, Prophecy & the Supernatural',
  34: 'Memory, Legacy & History',
  35: 'Abundance & Scarcity',
}
};

// ── Storage keys ──────────────────────────────────────────
const STORAGE_KEY = 'wordpath_v1';
const STARS_KEY   = 'wordpath_stars';

// ── Exam ID-ləri (0-based index, level id ilə) ────────────
const EXAM_IDS = {
  'a1': new Set([4, 10, 14, 18, 23, 28, 32, 36, 40, 44, 48, 52]),
  'a2': new Set([4, 9, 14, 17, 22, 27, 30, 33, 36, 39]),
  'b1': new Set([4, 8, 11, 15, 19, 23, 26, 30])
};

// ── Səviyyə test məlumatları ──────────────────────────────
const LEVEL_INFO = {
  'a1': { label: 'A1 — Beginner',     ielts: '1.0 – 2.0', desc: 'Sadə ifadələri başa düşürsən.' },
  'a2': { label: 'A2 — Elementary',   ielts: '2.5 – 3.5', desc: 'Gündəlik ünsiyyəti qura bilirsən.' },
  'b1': { label: 'B1 — Intermediate', ielts: '4.0 – 5.0', desc: 'Tanış mövzularda öhdəsindən gəlirsən.' },
  'b2': { label: 'B2 — Upper-Inter',  ielts: '5.5 – 6.5', desc: 'Mürəkkəb mətinləri anlayırsan.' },
  'c1': { label: 'C1 — Advanced',     ielts: '7.0 – 8.0', desc: 'Axıcı və effektiv ünsiyyət qurursan.' },
  'c2': { label: 'C2 — Mastery',      ielts: '8.5 – 9.0', desc: 'Demək olar ki, ana dili səviyyəsindəsən.' },
};
 
// ── Səviyyə sırası ────────────────────────────────────────
const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
 
// ── Quiz state ────────────────────────────────────────────
const quiz = {
  levelIdx:     null,
  quizIdx:      null,
  words:        [],
  index:        0,
  mistakes:     0,
  correctPos:   0,
  locked:       false,
  chanceUsed:   false,
  chanceActive: false,
  mode:         'normal', // 'normal' | 'review' | 'leveltest'
};
 
// ── Review mode state ─────────────────────────────────────
const reviewState = {
  levelId: null,
  correct: 0,
  wrong:   0,
};
 
// ── Level test state ──────────────────────────────────────
// Mərhələ 1 (≤12 sual): ikili axtarış ilə zona tap
// Mərhələ 2 (12 sual):  tapılan zonada dərin yoxlama
// Mərhələ 3 (6 sual):   üst səviyyə yoxlaması (75%+ keçdisə)
const LT_TOTAL        = 30;
const LT_P1_PER_LEVEL = 2;   // Mərhələ 1-də hər səviyyədən neçə sual
const LT_P1_PASS      = 1;   // 2-dən ≥1 düz → "bilir"
const LT_P2_COUNT     = 12;  // Mərhələ 2 sual sayı
const LT_P2_STRONG    = 0.75; // ≥75% → möhkəm, üst hədd yoxlanır
const LT_P2_WEAK      = 0.50; // <50% → bir aşağı en
const LT_P3_COUNT     = 6;   // Mərhələ 3 sual sayı
const LT_P3_UPGRADE   = 4;   // 6-dan ≥4 düz → bir üst səviyyəyə qalx
 
const levelTestState = {
  phase:        1,
  totalAsked:   0,
  // Mərhələ 1
  p1_lo:        0,
  p1_hi:        5,
  p1_mid:       -1,
  p1_words:     [],
  p1_wordIdx:   0,
  p1_correct:   0,
  p1_results:   {},
  // Mərhələ 2
  p2_levelId:   null,
  p2_words:     [],
  p2_wordIdx:   0,
  p2_correct:   0,
  // Mərhələ 3
  p3_levelId:   null,
  p3_words:     [],
  p3_wordIdx:   0,
  p3_correct:   0,
  // Final
  finalLevelId: null,
  usedWordKeys: new Set(),
};
 
// ── Progress ──────────────────────────────────────────────
let progress = {};
 
// ── Stars ─────────────────────────────────────────────────
function getStars() {
  return parseInt(localStorage.getItem(STARS_KEY) || '0', 10);
}
function setStars(n) {
  localStorage.setItem(STARS_KEY, String(Math.max(0, n)));
  renderStarCount();
}
function addStar()  { setStars(getStars() + 1); }
function spendStar() {
  const s = getStars();
  if (s <= 0) return false;
  setStars(s - 1);
  return true;
}
function renderStarCount() {
  const el = $('star-count');
  if (el) el.textContent = getStars();
}
 
// ── Exam yoxlaması ────────────────────────────────────────
function isExamItem(item, levelId, quizIdx) {
  if (levelId !== undefined && quizIdx !== undefined) {
    return !!(EXAM_IDS[levelId] && EXAM_IDS[levelId].has(quizIdx));
  }
  return item && !Array.isArray(item) && item.type === 'exam';
}
 
// ── Növbəti keçilə bilən quiz indeksini tap ───────────────
function findNextPlayableQuiz(levelIdx, afterQuizIdx) {
  const lvl = LEVELS[levelIdx];
  for (let i = afterQuizIdx + 1; i < lvl.quizzes.length; i++) {
    const item = lvl.quizzes[i];
    if (Array.isArray(item) && item.length >= 2) return i;
    if (isExamItem(item, lvl.id, i)) return i;
  }
  return null;
}
 
// ── Səviyyənin bütün sözlərini topla ─────────────────────
function getAllWordsForLevel(levelId) {
  const lvl = LEVELS.find(l => l.id === levelId);
  if (!lvl) return [];
  const words = [];
  lvl.quizzes.forEach((item, qi) => {
    if (Array.isArray(item) && !isExamItem(item, levelId, qi)) {
      item.forEach(w => {
        if (w && w.en && w.tr && w.wrong) words.push(w);
      });
    }
  });
  return words;
}
 
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) progress = JSON.parse(raw);
  } catch (_) {}
 
  LEVELS.forEach((lvl) => {
    if (!progress[lvl.id]) progress[lvl.id] = [];
    for (let i = 0; i < lvl.quizzes.length; i++) {
      if (!progress[lvl.id][i]) {
        progress[lvl.id][i] = i === 0 ? 'unlocked' : 'locked';
      }
    }
  });
 
  saveProgress();
}
 
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
 
function getStatus(levelIdx, quizIdx) {
  const lvl = LEVELS[levelIdx];
  return progress[lvl.id][quizIdx] || 'locked';
}
 
function markCompleted(levelIdx, quizIdx) {
  const lvl = LEVELS[levelIdx];
  const wasCompleted = progress[lvl.id][quizIdx] === 'completed';
  progress[lvl.id][quizIdx] = 'completed';
 
  const next = quizIdx + 1;
  if (next < lvl.quizzes.length) {
    if (progress[lvl.id][next] === 'locked') {
      progress[lvl.id][next] = 'unlocked';
    }
  }
 
  if (!wasCompleted) addStar();
  saveProgress();
}
 
function completedCount() {
  let n = 0;
  LEVELS.forEach((lvl) => {
    (progress[lvl.id] || []).forEach((s) => { if (s === 'completed') n++; });
  });
  return n;
}
 
// ── DOM refs ──────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
 
const elLevelList       = $('level-list');
const elQuizScreen      = $('quiz-screen');
const elResultScreen    = $('result-screen');
const elProgressFill    = $('progress-fill');
const elQCounter        = $('q-counter');
const elQuestionWord    = $('question-word');
const elQuestionHint    = $('question-hint');
const elOpt0            = $('opt-0');
const elOpt1            = $('opt-1');
const elQuitBtn         = $('quit-btn');
const elResultEmoji     = $('result-emoji');
const elResultTitle     = $('result-title');
const elResultDesc      = $('result-desc');
const elResultStats     = $('result-stats');
const elStatCorrect     = $('stat-correct');
const elStatWrong       = $('stat-wrong');
const elStatPct         = $('stat-pct');
const elLevelResultCard  = $('level-result-card');
const elLevelResultBadge = $('level-result-badge');
const elLevelResultName  = $('level-result-name');
const elLevelResultIelts = $('level-result-ielts');
const elLevelResultDesc  = $('level-result-desc');
const elResultMainBtn   = $('result-main-btn');
const elResultBackBtn   = $('result-back-btn');
const elToast           = $('toast');
const elChanceModal     = $('chance-modal');
const elChanceAccept    = $('chance-accept');
const elChanceDecline   = $('chance-decline');
const elChanceStars     = $('chance-stars');
const elReviewModal     = $('review-modal');
const elReviewLevelGrid = $('review-level-grid');
const elReviewClose     = $('review-close');
 
// ── Render level list ─────────────────────────────────────
function renderLevels() {
  renderStarCount();
 
  // Subtitle sahəsini düymələrlə render et
  const subtitle = document.getElementById('page-subtitle');
  if (subtitle) {
    subtitle.innerHTML = `
      <button class="action-pill-btn review-pill" id="review-btn-inline">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
        </svg>
        Təkrar et
      </button>
      <button class="action-pill-btn test-pill" id="level-test-btn-inline">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
        Səviyyəni test et
      </button>
    `;
    document.getElementById('review-btn-inline').addEventListener('click', showReviewModal);
    document.getElementById('level-test-btn-inline').addEventListener('click', startLevelTest);
  }
 
  elLevelList.innerHTML = '';
 
  LEVELS.forEach((lvl, li) => {
    const done  = progress[lvl.id].filter(s => s === 'completed').length;
    const total = lvl.quizzes.length;
 
    const card = document.createElement('div');
    card.className = 'level-card';
    card.dataset.level = li;
 
    card.innerHTML = `
      <div class="level-header" role="button" aria-expanded="false">
        <div class="level-bar" style="background:${lvl.color}"></div>
        <span class="level-icon">${lvl.icon}</span>
        <div class="level-info">
          <div class="level-name">${lvl.name}</div>
          <div class="level-meta">${done} / ${total} tamamlandı</div>
        </div>
        <svg class="level-chevron" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="level-body">
        ${renderQuizPath(lvl, li)}
      </div>
    `;
 
    card.querySelector('.level-header').addEventListener('click', () => toggleLevel(card));
 
    card.querySelectorAll('.path-node').forEach((node) => {
      node.addEventListener('click', () => {
        const qi     = parseInt(node.dataset.quizIdx, 10);
        const status = node.dataset.status;
 
        if (status === 'locked') {
          showToast('Əvvəlki testi tam bitir 🔒');
          return;
        }
 
        const item = lvl.quizzes[qi];
        if (!item || (Array.isArray(item) && item.length < 2)) {
          showToast('Bu test hələ hazır deyil ✏️');
          return;
        }
 
        startQuiz(li, qi);
      });
    });
 
    elLevelList.appendChild(card);
  });
}
 
function renderQuizPath(lvl, li) {
  let html = '<div class="quiz-path">';
  let quizCounter = 0;
  let examCounter = 0;
 
  lvl.quizzes.forEach((item, qi) => {
    const status  = getStatus(li, qi);
    const isFirst = qi === 0;
    const isExam  = isExamItem(item, lvl.id, qi);
 
    if (!isFirst) html += '<div class="path-line"></div>';
    html += `<div class="path-node-wrap">`;
 
    if (isExam) { examCounter++; } else { quizCounter++; }
 
    if (status === 'completed') {
      if (isExam) {
        html += `<div class="path-node completed exam-node"
             data-quiz-idx="${qi}" data-status="completed"
             style="border-color:${lvl.color}; background:${lvl.color}">🏆</div>`;
      } else {
        html += `<div class="path-node completed"
             data-quiz-idx="${qi}" data-status="completed"
             style="border-color:${lvl.color}; background:${lvl.color}">
           <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
         </div>`;
      }
    } else if (status === 'unlocked') {
      const completedSoFar = progress[lvl.id].filter(s => s === 'completed').length;
      const pulseClass = qi === completedSoFar ? 'pulse' : '';
 
      if (isExam) {
        html += `<div class="path-node unlocked exam-node ${pulseClass}"
             data-quiz-idx="${qi}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}">🏆</div>`;
      } else {
        html += `<div class="path-node unlocked ${pulseClass}"
             data-quiz-idx="${qi}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}">${quizCounter}</div>`;
      }
    } else {
      if (isExam) {
        html += `<div class="path-node locked exam-node"
             data-quiz-idx="${qi}" data-status="locked">🏆</div>`;
      } else {
        html += `<div class="path-node locked"
             data-quiz-idx="${qi}" data-status="locked">
           <svg viewBox="0 0 24 24">
             <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
             <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
           </svg>
         </div>`;
      }
    }
 
    const label = isExam
      ? `Exam ${examCounter}`
      : (QUIZ_NAMES[lvl.id]?.[qi] || `Test ${quizCounter}`);
    html += `<div class="node-label">${label}</div></div>`;
  });
 
  html += '</div>';
  return html;
}
 
function toggleLevel(card) {
  const isOpen = card.classList.contains('open');
 
  document.querySelectorAll('.level-card.open').forEach(c => {
    c.querySelector('.level-body').style.maxHeight = '0px';
    c.classList.remove('open');
    c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
  });
 
  if (!isOpen) {
    card.classList.add('open');
    card.querySelector('.level-header').setAttribute('aria-expanded', 'true');
    const body = card.querySelector('.level-body');
    body.style.maxHeight = body.scrollHeight + 'px';
    body.addEventListener('transitionend', () => {
      if (card.classList.contains('open')) body.style.maxHeight = 'none';
    }, { once: true });
  }
}
 
// ══════════════════════════════════════════════
//  ÜMUMI TƏKRAR — Review Mode
// ══════════════════════════════════════════════
 
function showReviewModal() {
  elReviewLevelGrid.innerHTML = '';
  LEVELS.forEach(lvl => {
    const allWords = getAllWordsForLevel(lvl.id);
    if (allWords.length === 0) return;
 
    const btn = document.createElement('button');
    btn.className = 'review-level-btn';
    btn.style.setProperty('--lvl-color', lvl.color);
    btn.innerHTML = `
      <span class="rlb-icon">${lvl.icon}</span>
      <span class="rlb-name">${lvl.id.toUpperCase()}</span>
      <span class="rlb-count">${allWords.length} söz</span>
    `;
    btn.addEventListener('click', () => {
      hideReviewModal();
      startReviewMode(lvl.id);
    });
    elReviewLevelGrid.appendChild(btn);
  });
 
  elReviewModal.classList.remove('hidden');
  setTimeout(() => elReviewModal.classList.add('show'), 10);
}
 
function hideReviewModal() {
  elReviewModal.classList.remove('show');
  setTimeout(() => elReviewModal.classList.add('hidden'), 260);
}
 
function startReviewMode(levelId) {
  const allWords = getAllWordsForLevel(levelId);
  const selected = shuffle([...allWords]).slice(0, 20);
 
  reviewState.levelId = levelId;
  reviewState.correct = 0;
  reviewState.wrong   = 0;
 
  quiz.mode         = 'review';
  quiz.levelIdx     = null;
  quiz.quizIdx      = null;
  quiz.words        = selected;
  quiz.index        = 0;
  quiz.mistakes     = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;
 
  elQuestionHint.textContent = 'Düzgün tərcüməni tap';
  showQuizScreen();
  showQuestion();
}
 
// ══════════════════════════════════════════════
//  SƏVİYYƏNİ TEST ET — 3 Mərhələli Adaptiv Sistem
// ══════════════════════════════════════════════
 
// ── İstifadə olunmamış sözlər seç ────────────────────────
function lt_pickFreshWords(levelId, count) {
  const all = getAllWordsForLevel(levelId).filter(w => {
    const key = levelId + '|' + w.en;
    return !levelTestState.usedWordKeys.has(key);
  });
  const picked = shuffle([...all]).slice(0, count);
  picked.forEach(w => levelTestState.usedWordKeys.add(levelId + '|' + w.en));
  return picked;
}
 
// ── Sual göstər (ümumi) ───────────────────────────────────
function lt_renderQuestion(word, hint) {
  const asked = levelTestState.totalAsked;
  elProgressFill.style.width = `${(asked / LT_TOTAL) * 100}%`;
  elQCounter.textContent     = `${asked + 1}/${LT_TOTAL}`;
  elQuestionHint.textContent = hint;
  elQuestionWord.textContent = capitalize(word.en);
 
  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  const opts = quiz.correctPos === 0
    ? [word.tr, word.wrong]
    : [word.wrong, word.tr];
 
  elOpt0.textContent = capitalize(opts[0]);
  elOpt1.textContent = capitalize(opts[1]);
  elOpt0.className   = 'option-btn';
  elOpt1.className   = 'option-btn';
  elOpt0.disabled    = false;
  elOpt1.disabled    = false;
  quiz.locked        = false;
}
 
// ── GİRİŞ NÖQTƏSI ────────────────────────────────────────
function startLevelTest() {
  Object.assign(levelTestState, {
    phase:        1,
    totalAsked:   0,
    p1_lo:        0,
    p1_hi:        LEVEL_ORDER.length - 1,
    p1_mid:       -1,
    p1_words:     [],
    p1_wordIdx:   0,
    p1_correct:   0,
    p1_results:   {},
    p2_levelId:   null,
    p2_words:     [],
    p2_wordIdx:   0,
    p2_correct:   0,
    p3_levelId:   null,
    p3_words:     [],
    p3_wordIdx:   0,
    p3_correct:   0,
    finalLevelId: null,
    usedWordKeys: new Set(),
  });
 
  quiz.mode         = 'leveltest';
  quiz.levelIdx     = null;
  quiz.quizIdx      = null;
  quiz.index        = 0;
  quiz.mistakes     = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;
 
  showQuizScreen();
  lt_startPhase1();
}
 
// ════════════════════════════════════════════
//  MƏRHƏLƏ 1 — İkili axtarış (≤12 sual)
// ════════════════════════════════════════════
function lt_startPhase1() {
  const mid     = Math.floor((levelTestState.p1_lo + levelTestState.p1_hi) / 2);
  const levelId = LEVEL_ORDER[mid];
 
  levelTestState.p1_mid     = mid;
  levelTestState.p1_wordIdx = 0;
  levelTestState.p1_correct = 0;
 
  const words = lt_pickFreshWords(levelId, LT_P1_PER_LEVEL);
  if (words.length === 0) {
    lt_evalPhase1Block(false);
    return;
  }
 
  levelTestState.p1_words = words;
  lt_showPhase1Q();
}
 
function lt_showPhase1Q() {
  const word    = levelTestState.p1_words[levelTestState.p1_wordIdx];
  const levelId = LEVEL_ORDER[levelTestState.p1_mid];
  lt_renderQuestion(word, `Skan: ${levelId.toUpperCase()}`);
}
 
function lt_handlePhase1(isCorrect) {
  levelTestState.totalAsked++;
  if (isCorrect) levelTestState.p1_correct++;
  levelTestState.p1_wordIdx++;
 
  setTimeout(() => {
    if (levelTestState.p1_wordIdx < levelTestState.p1_words.length) {
      lt_showPhase1Q();
      return;
    }
    lt_evalPhase1Block(levelTestState.p1_correct >= LT_P1_PASS);
  }, 500);
}
 
function lt_evalPhase1Block(passed) {
  const mid     = levelTestState.p1_mid;
  const levelId = LEVEL_ORDER[mid];
  levelTestState.p1_results[levelId] = passed;
 
  if (passed) {
    levelTestState.p1_lo = mid + 1;
  } else {
    levelTestState.p1_hi = mid - 1;
  }
 
  const maxReached  = levelTestState.totalAsked >= 12;
  const rangeEmpty  = levelTestState.p1_lo > levelTestState.p1_hi;
 
  if (rangeEmpty || maxReached) {
    lt_finishPhase1();
  } else {
    lt_startPhase1();
  }
}
 
function lt_finishPhase1() {
  // Bildiyimiz ən yüksək səviyyəni tap
  let zoneIdx = 0;
  const results = levelTestState.p1_results;
  const keys    = Object.keys(results);
 
  if (keys.length > 0) {
    const allFailed = keys.every(k => results[k] === false);
    if (!allFailed) {
      for (let i = LEVEL_ORDER.length - 1; i >= 0; i--) {
        if (results[LEVEL_ORDER[i]] === true) {
          zoneIdx = i;
          break;
        }
      }
    }
  }
 
  levelTestState.p2_levelId = LEVEL_ORDER[zoneIdx];
  lt_startPhase2();
}
 
// ════════════════════════════════════════════
//  MƏRHƏLƏ 2 — Əsas zona (12 sual)
// ════════════════════════════════════════════
function lt_startPhase2() {
  levelTestState.phase      = 2;
  levelTestState.p2_wordIdx = 0;
  levelTestState.p2_correct = 0;
 
  const words = lt_pickFreshWords(levelTestState.p2_levelId, LT_P2_COUNT);
  levelTestState.p2_words = words;
 
  if (words.length === 0) {
    lt_finishPhase2();
    return;
  }
 
  lt_showPhase2Q();
}
 
function lt_showPhase2Q() {
  const word   = levelTestState.p2_words[levelTestState.p2_wordIdx];
  const lvlId  = levelTestState.p2_levelId;
  const localI = levelTestState.p2_wordIdx + 1;
  const localT = levelTestState.p2_words.length;
  lt_renderQuestion(word, `${lvlId.toUpperCase()} — Əsas yoxlama (${localI}/${localT})`);
}
 
function lt_handlePhase2(isCorrect) {
  levelTestState.totalAsked++;
  if (isCorrect) levelTestState.p2_correct++;
  levelTestState.p2_wordIdx++;
 
  setTimeout(() => {
    if (levelTestState.p2_wordIdx < levelTestState.p2_words.length) {
      lt_showPhase2Q();
    } else {
      lt_finishPhase2();
    }
  }, 500);
}
 
function lt_finishPhase2() {
  const total   = levelTestState.p2_words.length || 1;
  const pct     = levelTestState.p2_correct / total;
  const zoneIdx = LEVEL_ORDER.indexOf(levelTestState.p2_levelId);
 
  if (pct < LT_P2_WEAK && zoneIdx > 0) {
    // 50%-dən az → bir aşağı en
    levelTestState.finalLevelId = LEVEL_ORDER[zoneIdx - 1];
  } else {
    levelTestState.finalLevelId = levelTestState.p2_levelId;
  }
 
  // 75%+ və üst səviyyə varsa → Mərhələ 3
  const canUpgrade = zoneIdx < LEVEL_ORDER.length - 1;
  if (pct >= LT_P2_STRONG && canUpgrade) {
    levelTestState.p3_levelId = LEVEL_ORDER[zoneIdx + 1];
    lt_startPhase3();
  } else {
    finishLevelTest();
  }
}
 
// ════════════════════════════════════════════
//  MƏRHƏLƏ 3 — Üst hədd yoxlaması (6 sual)
// ════════════════════════════════════════════
function lt_startPhase3() {
  levelTestState.phase      = 3;
  levelTestState.p3_wordIdx = 0;
  levelTestState.p3_correct = 0;
 
  const words = lt_pickFreshWords(levelTestState.p3_levelId, LT_P3_COUNT);
  levelTestState.p3_words = words;
 
  if (words.length === 0) {
    finishLevelTest();
    return;
  }
 
  lt_showPhase3Q();
}
 
function lt_showPhase3Q() {
  const word   = levelTestState.p3_words[levelTestState.p3_wordIdx];
  const lvlId  = levelTestState.p3_levelId;
  const localI = levelTestState.p3_wordIdx + 1;
  const localT = levelTestState.p3_words.length;
  lt_renderQuestion(word, `${lvlId.toUpperCase()} — Yuxarı hədd (${localI}/${localT})`);
}
 
function lt_handlePhase3(isCorrect) {
  levelTestState.totalAsked++;
  if (isCorrect) levelTestState.p3_correct++;
  levelTestState.p3_wordIdx++;
 
  setTimeout(() => {
    if (levelTestState.p3_wordIdx < levelTestState.p3_words.length) {
      lt_showPhase3Q();
    } else {
      lt_finishPhase3();
    }
  }, 500);
}
 
function lt_finishPhase3() {
  if (levelTestState.p3_correct >= LT_P3_UPGRADE) {
    levelTestState.finalLevelId = levelTestState.p3_levelId;
  }
  finishLevelTest();
}
 
// ── Mərhələ routeri ───────────────────────────────────────
function lt_handleAnswer(isCorrect) {
  switch (levelTestState.phase) {
    case 1: lt_handlePhase1(isCorrect); break;
    case 2: lt_handlePhase2(isCorrect); break;
    case 3: lt_handlePhase3(isCorrect); break;
  }
}
 
// ── Nəticə ekranı ─────────────────────────────────────────
function finishLevelTest() {
  elProgressFill.style.width = '100%';
 
  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
 
    const lvlId   = levelTestState.finalLevelId || 'a1';
    const info    = LEVEL_INFO[lvlId] || {};
    const lvlData = LEVELS.find(l => l.id === lvlId);
 
    const p2total = levelTestState.p2_words.length || 1;
    const p2pct   = Math.round((levelTestState.p2_correct / p2total) * 100);
    const p2label = p2pct >= 75 ? 'Möhkəm' : p2pct >= 50 ? 'Orta' : 'Zəif';
 
    elResultEmoji.textContent = '🎓';
    elResultTitle.textContent = 'Nəticən hazırdır!';
    elResultDesc.textContent  =
      `Söz tanıma səviyyən: ${info.label || lvlId.toUpperCase()} · ${p2label} (${p2pct}%)`;
 
    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.remove('hidden');
 
    elLevelResultBadge.textContent      = lvlData ? lvlData.icon : '📚';
    elLevelResultBadge.style.background = lvlData ? lvlData.color : '#999';
    elLevelResultName.textContent       = info.label  || lvlId.toUpperCase();
    elLevelResultIelts.textContent      = `IELTS: ${info.ielts || '—'}`;
    elLevelResultDesc.textContent       = info.desc   || '';
 
    elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
    elResultMainBtn.onclick = () => {
      closeOverlays();
      renderLevels();
    };
 
    elResultBackBtn.classList.add('hidden');
  }, 300);
}
 
// ══════════════════════════════════════════════
//  NORMAL QUIZ
// ══════════════════════════════════════════════
 
function startQuiz(levelIdx, quizIdx) {
  quiz.mode         = 'normal';
  quiz.levelIdx     = levelIdx;
  quiz.quizIdx      = quizIdx;
  quiz.mistakes     = 0;
  quiz.index        = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;
 
  const item = LEVELS[quiz.levelIdx].quizzes[quiz.quizIdx];
  quiz.words = shuffle([...item]);
 
  elQuestionHint.textContent = 'Düzgün tərcüməni tap';
  showQuizScreen();
  showQuestion();
}
 
function showQuizScreen() {
  elQuizScreen.classList.remove('hidden');
  elResultScreen.classList.add('hidden');
}
 
function showQuestion() {
  const word       = quiz.words[quiz.index];
  const totalWords = quiz.words.length;
 
  elProgressFill.style.width = `${(quiz.index / totalWords) * 100}%`;
  elQCounter.textContent = `${quiz.index + 1}/${totalWords}`;
  elQuestionWord.textContent = capitalize(word.en);
 
  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  const opts = quiz.correctPos === 0
    ? [word.tr, word.wrong]
    : [word.wrong, word.tr];
 
  elOpt0.textContent = capitalize(opts[0]);
  elOpt1.textContent = capitalize(opts[1]);
  elOpt0.className   = 'option-btn';
  elOpt1.className   = 'option-btn';
  elOpt0.disabled    = false;
  elOpt1.disabled    = false;
  quiz.locked        = false;
}
 
// ── Şans popup ────────────────────────────────────────────
function showChanceModal() {
  quiz.chanceActive = true;
  if (elChanceStars) elChanceStars.textContent = getStars();
  elChanceModal.classList.remove('hidden');
  setTimeout(() => elChanceModal.classList.add('show'), 10);
}
 
function hideChanceModal() {
  quiz.chanceActive = false;
  elChanceModal.classList.remove('show');
  setTimeout(() => elChanceModal.classList.add('hidden'), 250);
}
 
elChanceAccept.addEventListener('click', () => {
  if (!spendStar()) {
    showToast('Ulduzun yoxdur 😔');
    hideChanceModal();
    proceedAfterWrong();
    return;
  }
  quiz.chanceUsed = true;
  hideChanceModal();
  setTimeout(() => showQuestion(), 260);
});
 
elChanceDecline.addEventListener('click', () => {
  hideChanceModal();
  proceedAfterWrong();
});
 
function proceedAfterWrong() {
  setTimeout(() => {
    quiz.index++;
    if (quiz.index >= quiz.words.length) finishQuiz();
    else showQuestion();
  }, 300);
}
 
// ── Handle answer ─────────────────────────────────────────
function handleAnswer(btnIdx) {
  if (quiz.locked || quiz.chanceActive) return;
  quiz.locked = true;
 
  const isCorrect  = btnIdx === quiz.correctPos;
  elOpt0.disabled  = true;
  elOpt1.disabled  = true;
 
  const correctBtn = quiz.correctPos === 0 ? elOpt0 : elOpt1;
  const chosenBtn  = btnIdx === 0 ? elOpt0 : elOpt1;
 
  if (isCorrect) {
    chosenBtn.className = 'option-btn correct';
 
    if (quiz.mode === 'leveltest') {
      lt_handleAnswer(true);
      return;
    }
 
    if (quiz.mode === 'review') reviewState.correct++;
 
    setTimeout(() => {
      quiz.index++;
      if (quiz.index >= quiz.words.length) finishQuiz();
      else showQuestion();
    }, 500);
 
  } else {
    chosenBtn.className  = 'option-btn wrong';
    correctBtn.className = 'option-btn correct';
    quiz.mistakes++;
 
    if (quiz.mode === 'review') reviewState.wrong++;
 
    if (quiz.mode === 'leveltest') {
      lt_handleAnswer(false);
      return;
    }
 
    if (quiz.mode === 'normal' && !quiz.chanceUsed && getStars() > 0) {
      setTimeout(() => { quiz.mistakes--; showChanceModal(); }, 800);
    } else {
      setTimeout(() => {
        quiz.index++;
        if (quiz.index >= quiz.words.length) finishQuiz();
        else showQuestion();
      }, 800);
    }
  }
}
 
// ── Finish quiz ───────────────────────────────────────────
function finishQuiz() {
  elProgressFill.style.width = '100%';
 
  // Review mode nəticəsi
  if (quiz.mode === 'review') {
    setTimeout(() => {
      elQuizScreen.classList.add('hidden');
      elResultScreen.classList.remove('hidden');
 
      const total   = quiz.words.length;
      const correct = reviewState.correct;
      const wrong   = total - correct;
      const pct     = Math.round((correct / total) * 100);
 
      let emoji, title;
      if (pct === 100)    { emoji = '🏆'; title = 'Əla nəticə!'; }
      else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
      else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
      else if (pct >= 40) { emoji = '📚'; title = 'Daha çox oxu!'; }
      else                { emoji = '💪'; title = 'Davam et!'; }
 
      elResultEmoji.textContent = emoji;
      elResultTitle.textContent = title;
      elResultDesc.textContent  = `${reviewState.levelId.toUpperCase()} səviyyəsindən 20 sual`;
 
      elResultStats.classList.remove('hidden');
      elLevelResultCard.classList.add('hidden');
      elStatCorrect.textContent = correct;
      elStatWrong.textContent   = wrong;
      elStatPct.textContent     = `${pct}%`;
 
      elResultMainBtn.textContent = 'Yenidən cəhd et';
      elResultMainBtn.onclick = () => startReviewMode(reviewState.levelId);
 
      elResultBackBtn.classList.remove('hidden');
      elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
      elResultBackBtn.onclick = () => { closeOverlays(); renderLevels(); };
    }, 250);
    return;
  }
 
  // Normal mode nəticəsi
  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
 
    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.add('hidden');
 
    const won = quiz.mistakes === 0;
 
    if (won) {
      markCompleted(quiz.levelIdx, quiz.quizIdx);
      const lvl          = LEVELS[quiz.levelIdx];
      const isExam       = isExamItem(lvl.quizzes[quiz.quizIdx], lvl.id, quiz.quizIdx);
      const nextPlayable = findNextPlayableQuiz(quiz.levelIdx, quiz.quizIdx);
 
      elResultEmoji.textContent = isExam ? '🏆' : '🎉';
      elResultTitle.textContent = isExam ? 'Exam keçildi!' : 'Mükəmməl!';
      elResultDesc.textContent  = isExam
        ? 'Examı uğurla tamamladın!'
        : `Bütün ${quiz.words.length} sözü düzgün cavablandırdın!`;
 
      if (nextPlayable !== null) {
        elResultMainBtn.textContent = 'Növbəti →';
        elResultMainBtn.onclick = () => {
          startQuiz(quiz.levelIdx, nextPlayable);
          elResultScreen.classList.add('hidden');
        };
      } else {
        elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
        elResultMainBtn.onclick = () => {
          const li = quiz.levelIdx;
          closeOverlays();
          renderLevels();
          scrollToCurrentNode(li);
        };
      }
 
      elResultBackBtn.classList.remove('hidden');
      elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
      elResultBackBtn.onclick = () => {
        const li = quiz.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToCurrentNode(li);
      };
 
    } else {
      elResultEmoji.textContent = '😅';
      elResultTitle.textContent = 'Olmadı...';
      elResultDesc.textContent  = `${quiz.mistakes} səhv etdin. Növbəti test üçün sıfır səhv lazımdır!`;
 
      elResultMainBtn.textContent = 'Yenidən cəhd et';
      elResultMainBtn.onclick     = () => startQuiz(quiz.levelIdx, quiz.quizIdx);
 
      elResultBackBtn.classList.remove('hidden');
      elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
      elResultBackBtn.onclick = () => {
        const li = quiz.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToCurrentNode(li);
      };
    }
  }, 250);
}
 
// ── Close / quit ──────────────────────────────────────────
function closeOverlays() {
  elQuizScreen.classList.add('hidden');
  elResultScreen.classList.add('hidden');
}
 
// ── Scroll to current node ────────────────────────────────
function scrollToCurrentNode(levelIdx) {
  const cards      = document.querySelectorAll('.level-card');
  const targetCard = cards[levelIdx];
  if (!targetCard) return;
 
  if (!targetCard.classList.contains('open')) {
    toggleLevel(targetCard);
  }
 
  const body = targetCard.querySelector('.level-body');
 
  const doScroll = () => {
    const node = targetCard.querySelector('.path-node.pulse')
              || targetCard.querySelector('.path-node.unlocked:last-of-type')
              || targetCard.querySelector('.path-node.unlocked');
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
 
  if (targetCard.classList.contains('open') && body.style.maxHeight === 'none') {
    setTimeout(doScroll, 80);
  } else {
    body.addEventListener('transitionend', () => {
      setTimeout(doScroll, 80);
    }, { once: true });
  }
}
 
// ── Toast ─────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  elToast.textContent = msg;
  elToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elToast.classList.remove('show'), 2200);
}
 
// ── Utilities ─────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
 
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
// ── Event listeners ───────────────────────────────────────
elOpt0.addEventListener('click', () => handleAnswer(0));
elOpt1.addEventListener('click', () => handleAnswer(1));
 
elQuitBtn.addEventListener('click', () => {
  if (confirm('Testdən çıxmaq istəyirsən? İrəliləyişin saxlanmayacaq.')) {
    const li = quiz.levelIdx;
    hideChanceModal();
    closeOverlays();
    renderLevels();
    if (li !== null) scrollToCurrentNode(li);
  }
});
 
elReviewClose.addEventListener('click', hideReviewModal);
 
elReviewModal.addEventListener('click', (e) => {
  if (e.target === elReviewModal) hideReviewModal();
});
 
// ── Init ──────────────────────────────────────────────────
loadProgress();
renderLevels();
 
