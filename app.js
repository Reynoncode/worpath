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
  }
};

// ── Storage keys ──────────────────────────────────────────
const STORAGE_KEY = 'wordpath_v1';
const STARS_KEY   = 'wordpath_stars';

// ── Exam ID-ləri (0-based index, level id ilə) ────────────
const EXAM_IDS = {
  'a1': new Set([4, 10, 14, 18, 23, 28, 32, 36, 40, 44, 48, 52]),
  'a2': new Set([4, 9, 14, 17, 22, 27, 30, 33, 36, 39])
};

// ── Səviyyə test məlumatları ──────────────────────────────
const LEVEL_INFO = {
  'a1': { label: 'A1 — Beginner',    ielts: '1.0 – 2.0', desc: 'Sadə ifadələri başa düşürsən.' },
  'a2': { label: 'A2 — Elementary',  ielts: '2.5 – 3.5', desc: 'Gündəlik ünsiyyəti qura bilirsən.' },
  'b1': { label: 'B1 — Intermediate',ielts: '4.0 – 5.0', desc: 'Tanış mövzularda öhdəsindən gəlirsən.' },
  'b2': { label: 'B2 — Upper-Inter', ielts: '5.5 – 6.5', desc: 'Mürəkkəb mətinləri anlayırsan.' },
  'c1': { label: 'C1 — Advanced',    ielts: '7.0 – 8.0', desc: 'Axıcı və effektiv ünsiyyət qurursan.' },
  'c2': { label: 'C2 — Mastery',     ielts: '8.5 – 9.0', desc: 'Demək olar ki, ana dili səviyyəsindəsən.' },
};

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
const levelTestState = {
  levelOrder:       [], // ['a1','a2','b1','b2','c1','c2']
  currentLevelIdx:  0,
  questionsInBlock: [],
  blockIndex:       0,
  blockCorrect:     0,
  verifying:        false,   // doğrulama mərhələsindəmi
  prevLevelWords:   [],      // doğrulama üçün öncəki səviyyə sözləri
  verifyIndex:      0,
  verifyCorrect:    0,
  finalLevelId:     null,
  totalQuestions:   30,
  askedSoFar:       0,
  blockSize:        5,
  verifySize:       2,
  passThreshold:    3,       // 5-dən neçəsi düz olmalı
  verifyThreshold:  2,       // 2-dən neçəsi düz olmalı
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
function addStar() { setStars(getStars() + 1); }
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

const elLevelList     = $('level-list');
const elQuizScreen    = $('quiz-screen');
const elResultScreen  = $('result-screen');
const elProgressFill  = $('progress-fill');
const elQCounter      = $('q-counter');
const elQuestionWord  = $('question-word');
const elQuestionHint  = $('question-hint');
const elOpt0          = $('opt-0');
const elOpt1          = $('opt-1');
const elQuitBtn       = $('quit-btn');
const elResultEmoji   = $('result-emoji');
const elResultTitle   = $('result-title');
const elResultDesc    = $('result-desc');
const elResultStats   = $('result-stats');
const elStatCorrect   = $('stat-correct');
const elStatWrong     = $('stat-wrong');
const elStatPct       = $('stat-pct');
const elLevelResultCard = $('level-result-card');
const elLevelResultBadge= $('level-result-badge');
const elLevelResultName = $('level-result-name');
const elLevelResultIelts= $('level-result-ielts');
const elLevelResultDesc = $('level-result-desc');
const elResultMainBtn = $('result-main-btn');
const elResultBackBtn = $('result-back-btn');
const elToast         = $('toast');
const elChanceModal   = $('chance-modal');
const elChanceAccept  = $('chance-accept');
const elChanceDecline = $('chance-decline');
const elChanceStars   = $('chance-stars');
const elReviewModal   = $('review-modal');
const elReviewLevelGrid = $('review-level-grid');
const elReviewClose   = $('review-close');
const elReviewBtn     = $('review-btn');
const elLevelTestBtn  = $('level-test-btn');

// ── Render level list ─────────────────────────────────────
function renderLevels() {
  renderStarCount();
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
//  SƏVİYYƏNİ TEST ET — Adaptive Level Test
// ══════════════════════════════════════════════

function startLevelTest() {
  const order = LEVELS.map(l => l.id);
  levelTestState.levelOrder       = order;
  levelTestState.currentLevelIdx  = 0;
  levelTestState.askedSoFar       = 0;
  levelTestState.finalLevelId     = order[0];
  levelTestState.verifying        = false;
  levelTestState.verifyIndex      = 0;
  levelTestState.verifyCorrect    = 0;

  quiz.mode         = 'leveltest';
  quiz.levelIdx     = null;
  quiz.quizIdx      = null;
  quiz.index        = 0;
  quiz.mistakes     = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;

  loadLevelTestBlock();
}

function loadLevelTestBlock() {
  const levelId = levelTestState.levelOrder[levelTestState.currentLevelIdx];
  const allWords = getAllWordsForLevel(levelId);

  if (allWords.length === 0) {
    // Bu səviyyədə söz yoxdur, növbətiyə keç
    advanceLevelTest(true);
    return;
  }

  const blockWords = shuffle([...allWords]).slice(0, levelTestState.blockSize);
  levelTestState.questionsInBlock = blockWords;
  levelTestState.blockIndex       = 0;
  levelTestState.blockCorrect     = 0;

  quiz.words  = blockWords;
  quiz.index  = 0;
  quiz.locked = false;

  elQuestionHint.textContent = `Səviyyə: ${levelId.toUpperCase()} — ${levelTestState.currentLevelIdx * 5 + 1}–${Math.min((levelTestState.currentLevelIdx + 1) * 5, levelTestState.totalQuestions)}/30`;

  showQuizScreen();
  showQuestionLevelTest();
}

function showQuestionLevelTest() {
  const word = levelTestState.questionsInBlock[levelTestState.blockIndex];
  const total = levelTestState.totalQuestions;
  const asked = levelTestState.askedSoFar;

  elProgressFill.style.width = `${(asked / total) * 100}%`;
  elQCounter.textContent = `${asked + 1}/${total}`;
  elQuestionWord.textContent = capitalize(word.en);

  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  const opts = quiz.correctPos === 0
    ? [word.tr, word.wrong]
    : [word.wrong, word.tr];

  elOpt0.textContent = capitalize(opts[0]);
  elOpt1.textContent = capitalize(opts[1]);
  elOpt0.className = 'option-btn';
  elOpt1.className = 'option-btn';
  elOpt0.disabled  = false;
  elOpt1.disabled  = false;
  quiz.locked      = false;
}

function handleAnswerLevelTest(isCorrect) {
  levelTestState.askedSoFar++;
  if (isCorrect) levelTestState.blockCorrect++;
  levelTestState.blockIndex++;

  setTimeout(() => {
    if (levelTestState.blockIndex >= levelTestState.blockSize) {
      // Blok bitdi — nəticəni qiymətləndir
      evaluateLevelTestBlock();
    } else {
      showQuestionLevelTest();
    }
  }, 500);
}

function evaluateLevelTestBlock() {
  const passed = levelTestState.blockCorrect >= levelTestState.passThreshold;
  const currentLevelId = levelTestState.levelOrder[levelTestState.currentLevelIdx];
  const isLastLevel = levelTestState.currentLevelIdx >= levelTestState.levelOrder.length - 1;

  if (passed) {
    levelTestState.finalLevelId = currentLevelId;
    if (isLastLevel) {
      finishLevelTest();
    } else {
      advanceLevelTest(true);
    }
  } else {
    // Keçmədi — doğrulama lazımdırmı?
    if (levelTestState.currentLevelIdx > 0) {
      startVerification();
    } else {
      // A1-dən keçmədi — A1 səviyyəsindədir
      levelTestState.finalLevelId = currentLevelId;
      finishLevelTest();
    }
  }
}

function startVerification() {
  const prevLevelId = levelTestState.levelOrder[levelTestState.currentLevelIdx - 1];
  const allWords = getAllWordsForLevel(prevLevelId);
  const verifyWords = shuffle([...allWords]).slice(0, levelTestState.verifySize);

  levelTestState.verifying      = true;
  levelTestState.prevLevelWords = verifyWords;
  levelTestState.verifyIndex    = 0;
  levelTestState.verifyCorrect  = 0;

  elQuestionHint.textContent = `Doğrulama: ${prevLevelId.toUpperCase()}`;
  showVerifyQuestion();
}

function showVerifyQuestion() {
  const word = levelTestState.prevLevelWords[levelTestState.verifyIndex];
  const total = levelTestState.totalQuestions;
  const asked = levelTestState.askedSoFar;

  elProgressFill.style.width = `${(asked / total) * 100}%`;
  elQCounter.textContent = `${asked + 1}/${total}`;
  elQuestionWord.textContent = capitalize(word.en);

  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  const opts = quiz.correctPos === 0
    ? [word.tr, word.wrong]
    : [word.wrong, word.tr];

  elOpt0.textContent = capitalize(opts[0]);
  elOpt1.textContent = capitalize(opts[1]);
  elOpt0.className = 'option-btn';
  elOpt1.className = 'option-btn';
  elOpt0.disabled  = false;
  elOpt1.disabled  = false;
  quiz.locked      = false;
}

function handleAnswerVerify(isCorrect) {
  levelTestState.askedSoFar++;
  if (isCorrect) levelTestState.verifyCorrect++;
  levelTestState.verifyIndex++;

  setTimeout(() => {
    if (levelTestState.verifyIndex >= levelTestState.verifySize) {
      // Doğrulama bitdi
      levelTestState.verifying = false;
      if (levelTestState.verifyCorrect >= levelTestState.verifyThreshold) {
        // Doğrulama keçdi → əvvəlki səviyyəyə qayıt
        levelTestState.currentLevelIdx--;
        levelTestState.finalLevelId = levelTestState.levelOrder[levelTestState.currentLevelIdx];
        const isLastLevel = levelTestState.currentLevelIdx >= levelTestState.levelOrder.length - 1;
        if (isLastLevel || levelTestState.askedSoFar >= levelTestState.totalQuestions) {
          finishLevelTest();
        } else {
          // Geri qayıdıb həmin səviyyəyə davam et (artıq keçilmiş sayılır)
          finishLevelTest();
        }
      } else {
        // Doğrulama keçmədi → cari səviyyədə qal, növbəti səviyyəyə keç
        const currentLevelId = levelTestState.levelOrder[levelTestState.currentLevelIdx];
        levelTestState.finalLevelId = currentLevelId;
        const isLastLevel = levelTestState.currentLevelIdx >= levelTestState.levelOrder.length - 1;
        if (isLastLevel || levelTestState.askedSoFar >= levelTestState.totalQuestions) {
          finishLevelTest();
        } else {
          advanceLevelTest(false);
        }
      }
    } else {
      showVerifyQuestion();
    }
  }, 500);
}

function advanceLevelTest(passed) {
  if (passed) {
    levelTestState.currentLevelIdx++;
  }
  if (levelTestState.currentLevelIdx >= levelTestState.levelOrder.length ||
      levelTestState.askedSoFar >= levelTestState.totalQuestions) {
    finishLevelTest();
    return;
  }
  loadLevelTestBlock();
}

function finishLevelTest() {
  elProgressFill.style.width = '100%';
  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');

    const lvlId   = levelTestState.finalLevelId;
    const info    = LEVEL_INFO[lvlId] || {};
    const lvlData = LEVELS.find(l => l.id === lvlId);

    elResultEmoji.textContent = '🎓';
    elResultTitle.textContent = 'Nəticən hazırdır!';
    elResultDesc.textContent  = 'Adaptive test tamamlandı. Sənin İngilis dili səviyyən:';

    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.remove('hidden');

    elLevelResultBadge.textContent = lvlData ? lvlData.icon : '📚';
    elLevelResultBadge.style.background = lvlData ? lvlData.color : '#999';
    elLevelResultName.textContent  = info.label  || lvlId.toUpperCase();
    elLevelResultIelts.textContent = `IELTS: ${info.ielts || '—'}`;
    elLevelResultDesc.textContent  = info.desc   || '';

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
  elOpt0.className = 'option-btn';
  elOpt1.className = 'option-btn';
  elOpt0.disabled  = false;
  elOpt1.disabled  = false;
  quiz.locked      = false;
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

  const isCorrect = btnIdx === quiz.correctPos;
  elOpt0.disabled = true;
  elOpt1.disabled = true;

  const correctBtn = quiz.correctPos === 0 ? elOpt0 : elOpt1;
  const chosenBtn  = btnIdx === 0 ? elOpt0 : elOpt1;

  if (isCorrect) {
    chosenBtn.className = 'option-btn correct';

    // Level test mode — öz handler-i
    if (quiz.mode === 'leveltest') {
      if (levelTestState.verifying) {
        handleAnswerVerify(true);
      } else {
        handleAnswerLevelTest(true);
      }
      return;
    }

    // Review & normal — shared
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
      if (levelTestState.verifying) {
        handleAnswerVerify(false);
      } else {
        handleAnswerLevelTest(false);
      }
      return;
    }

    // Normal & review: şans sistemi yalnız normal modda
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
      if (pct === 100)      { emoji = '🏆'; title = 'Əla nəticə!'; }
      else if (pct >= 80)   { emoji = '🎉'; title = 'Çox yaxşı!'; }
      else if (pct >= 60)   { emoji = '👍'; title = 'Pis deyil!'; }
      else if (pct >= 40)   { emoji = '📚'; title = 'Daha çox oxu!'; }
      else                  { emoji = '💪'; title = 'Davam et!'; }

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
      const lvl    = LEVELS[quiz.levelIdx];
      const isExam = isExamItem(lvl.quizzes[quiz.quizIdx], lvl.id, quiz.quizIdx);
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

elReviewBtn.addEventListener('click', showReviewModal);
elReviewClose.addEventListener('click', hideReviewModal);

elReviewModal.addEventListener('click', (e) => {
  if (e.target === elReviewModal) hideReviewModal();
});

elLevelTestBtn.addEventListener('click', () => {
  startLevelTest();
});

// ── Init ──────────────────────────────────────────────────
loadProgress();
renderLevels();
