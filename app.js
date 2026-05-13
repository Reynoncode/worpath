// ============================================================
//  WORDPATH — Application Logic
// ============================================================

// ── Storage keys ──────────────────────────────────────────
const STORAGE_KEY = 'wordpath_v1';
const STARS_KEY   = 'wordpath_stars';

// ── Exam ID-ləri (0-based index, level id ilə) ────────────
const EXAM_IDS = {
  'a1': new Set([4, 10, 14, 18, 23, 28, 32, 36, 40, 44, 48, 52])
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
function addStar() {
  setStars(getStars() + 1);
}
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

  if (!wasCompleted) {
    addStar();
  }

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
const elOpt0          = $('opt-0');
const elOpt1          = $('opt-1');
const elQuitBtn       = $('quit-btn');
const elResultEmoji   = $('result-emoji');
const elResultTitle   = $('result-title');
const elResultDesc    = $('result-desc');
const elResultMainBtn = $('result-main-btn');
const elResultBackBtn = $('result-back-btn');
const elToast         = $('toast');
const elChanceModal   = $('chance-modal');
const elChanceAccept  = $('chance-accept');
const elChanceDecline = $('chance-decline');
const elChanceStars   = $('chance-stars');

// ── Render level list ────────────────────────────────────
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

    if (isExam) {
      examCounter++;
    } else {
      quizCounter++;
    }

    if (status === 'completed') {
      if (isExam) {
        html += `
          <div class="path-node completed exam-node"
               data-quiz-idx="${qi}"
               data-status="completed"
               style="border-color:${lvl.color}; background:${lvl.color}"
               title="Exam ${examCounter}">
            🏆
          </div>`;
      } else {
        html += `
          <div class="path-node completed"
               data-quiz-idx="${qi}"
               data-status="completed"
               style="border-color:${lvl.color}; background:${lvl.color}"
               title="Test ${quizCounter}">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>`;
      }

    } else if (status === 'unlocked') {
      const completedSoFar = progress[lvl.id].filter(s => s === 'completed').length;
      const pulseClass = qi === completedSoFar ? 'pulse' : '';

      if (isExam) {
        html += `
          <div class="path-node unlocked exam-node ${pulseClass}"
               data-quiz-idx="${qi}"
               data-status="unlocked"
               style="color:${lvl.color}; border-color:${lvl.color}"
               title="Exam ${examCounter}">
            🏆
          </div>`;
      } else {
        html += `
          <div class="path-node unlocked ${pulseClass}"
               data-quiz-idx="${qi}"
               data-status="unlocked"
               style="color:${lvl.color}; border-color:${lvl.color}"
               title="Test ${quizCounter}">
            ${quizCounter}
          </div>`;
      }

    } else {
      if (isExam) {
        html += `
          <div class="path-node locked exam-node"
               data-quiz-idx="${qi}"
               data-status="locked"
               title="Exam ${examCounter}">
            🏆
          </div>`;
      } else {
        html += `
          <div class="path-node locked"
               data-quiz-idx="${qi}"
               data-status="locked"
               title="Kilidli">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>`;
      }
    }

    const label = isExam ? `Exam ${examCounter}` : `Test ${quizCounter}`;
    html += `<div class="node-label">${label}</div>`;
    html += `</div>`;
  });

  html += '</div>';
  return html;
}

function toggleLevel(card) {
  const isOpen = card.classList.contains('open');

  document.querySelectorAll('.level-card.open').forEach(c => {
    const b = c.querySelector('.level-body');
    b.style.maxHeight = '0px';
    c.classList.remove('open');
    c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    card.classList.add('open');
    card.querySelector('.level-header').setAttribute('aria-expanded', 'true');
    const body = card.querySelector('.level-body');
    body.style.maxHeight = body.scrollHeight + 'px';

    body.addEventListener('transitionend', () => {
      if (card.classList.contains('open')) {
        body.style.maxHeight = 'none';
      }
    }, { once: true });
  }
}

// ── Start quiz ───────────────────────────────────────────
function startQuiz(levelIdx, quizIdx) {
  quiz.levelIdx     = levelIdx;
  quiz.quizIdx      = quizIdx;
  quiz.mistakes     = 0;
  quiz.index        = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;

  const item = LEVELS[quiz.levelIdx].quizzes[quiz.quizIdx];
  quiz.words = shuffle([...item]);

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

  const pct = (quiz.index / totalWords) * 100;
  elProgressFill.style.width = pct + '%';
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

// ── Şans popup ───────────────────────────────────────────
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
    if (quiz.index >= quiz.words.length) {
      finishQuiz();
    } else {
      showQuestion();
    }
  }, 300);
}

// ── Handle answer ─────────────────────────────────────────
function handleAnswer(btnIdx) {
  if (quiz.locked || quiz.chanceActive) return;
  quiz.locked = true;

  const isCorrect = btnIdx === quiz.correctPos;

  elOpt0.disabled = true;
  elOpt1.disabled = true;

  if (isCorrect) {
    (btnIdx === 0 ? elOpt0 : elOpt1).className = 'option-btn correct';

    setTimeout(() => {
      quiz.index++;
      if (quiz.index >= quiz.words.length) {
        finishQuiz();
      } else {
        showQuestion();
      }
    }, 500);

  } else {
    quiz.mistakes++;
    (btnIdx === 0 ? elOpt0 : elOpt1).className = 'option-btn wrong';
    (quiz.correctPos === 0 ? elOpt0 : elOpt1).className = 'option-btn correct';

    if (!quiz.chanceUsed && getStars() > 0) {
      setTimeout(() => {
        quiz.mistakes--;
        showChanceModal();
      }, 800);
    } else {
      setTimeout(() => {
        quiz.index++;
        if (quiz.index >= quiz.words.length) {
          finishQuiz();
        } else {
          showQuestion();
        }
      }, 800);
    }
  }
}

// ── Finish quiz ──────────────────────────────────────────
function finishQuiz() {
  elProgressFill.style.width = '100%';

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');

    const won = quiz.mistakes === 0;

    if (won) {
      markCompleted(quiz.levelIdx, quiz.quizIdx);
      const lvl    = LEVELS[quiz.levelIdx];
      const isExam = isExamItem(lvl.quizzes[quiz.quizIdx], lvl.id, quiz.quizIdx);
      const next   = quiz.quizIdx + 1;
      const hasNext = next < lvl.quizzes.length;

      elResultEmoji.textContent = isExam ? '🏆' : '🎉';
      elResultTitle.textContent = isExam ? 'Exam keçildi!' : 'Mükəmməl!';
      elResultDesc.textContent  = isExam
        ? 'Examı uğurla tamamladın!'
        : `Bütün ${quiz.words.length} sözü düzgün cavablandırdın!`;

      elResultMainBtn.textContent = hasNext ? 'Növbəti →' : 'Ana səhifəyə qayıt';
      elResultMainBtn.onclick = () => {
        const li = quiz.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToNextUnlocked(li);
      };

      elResultBackBtn.classList.add('hidden');

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
        scrollToNextUnlocked(li);
      };
    }
  }, 250);
}

// ── Close / quit ─────────────────────────────────────────
function closeOverlays() {
  elQuizScreen.classList.add('hidden');
  elResultScreen.classList.add('hidden');
}

function scrollToNextUnlocked(levelIdx) {
  setTimeout(() => {
    const cards      = document.querySelectorAll('.level-card');
    const targetCard = cards[levelIdx];
    if (!targetCard) return;

    if (!targetCard.classList.contains('open')) {
      toggleLevel(targetCard);
    }

    setTimeout(() => {
      const node = targetCard.querySelector('.path-node.pulse')
                || targetCard.querySelector('.path-node.unlocked');
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }, 100);
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
    scrollToNextUnlocked(li);
  }
});

// ── Init ──────────────────────────────────────────────────
loadProgress();
renderLevels();
