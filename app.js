// ============================================================
//  WORDPATH — Application Logic
// ============================================================

// ── Storage key ───────────────────────────────────────────
const STORAGE_KEY = 'wordpath_v1';

// ── Quiz state ────────────────────────────────────────────
const quiz = {
  levelIdx:   null,
  quizIdx:    null,
  words:      [],       // shuffled copy for this session
  index:      0,        // current question (0–19)
  mistakes:   0,
  correctPos: 0,        // which button (0=left, 1=right) is correct
  locked:     false,    // prevent double-tap during feedback
};

// ── Progress ──────────────────────────────────────────────
// progress[levelId][quizIdx] = 'locked' | 'unlocked' | 'completed'
let progress = {};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) progress = JSON.parse(raw);
  } catch (_) {}

  // Ensure every level/quiz has a default status
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
  progress[lvl.id][quizIdx] = 'completed';
  // Unlock next quiz in this level
  if (quizIdx + 1 < lvl.quizzes.length) {
    if (progress[lvl.id][quizIdx + 1] === 'locked') {
      progress[lvl.id][quizIdx + 1] = 'unlocked';
    }
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

const elLevelList      = $('level-list');
const elCompletedCount = $('completed-count');
const elQuizScreen     = $('quiz-screen');
const elResultScreen   = $('result-screen');
const elProgressFill   = $('progress-fill');
const elQCounter       = $('q-counter');
const elQuestionWord   = $('question-word');
const elOpt0           = $('opt-0');
const elOpt1           = $('opt-1');
const elQuitBtn        = $('quit-btn');
const elResultEmoji    = $('result-emoji');
const elResultTitle    = $('result-title');
const elResultDesc     = $('result-desc');
const elResultMainBtn  = $('result-main-btn');
const elResultBackBtn  = $('result-back-btn');
const elToast          = $('toast');

// ── Render level list ────────────────────────────────────
function renderLevels() {
  elCompletedCount.textContent = completedCount();
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

    // Attach quiz-node click handlers after inserting into DOM
    card.querySelectorAll('.path-node').forEach((node) => {
      node.addEventListener('click', () => {
        const qi = parseInt(node.dataset.quizIdx, 10);
        const status = node.dataset.status;
        if (status === 'locked') {
          showToast('Əvvəlki testi tam bitir 🔒');
          return;
        }
        const words = lvl.quizzes[qi];
        if (!words || words.length < 20) {
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

  lvl.quizzes.forEach((words, qi) => {
    const status = getStatus(li, qi);
    const isFirst = qi === 0;
    const hasWords = words && words.length >= 20;

    if (!isFirst) {
      html += '<div class="path-line"></div>';
    }

    html += `<div class="path-node-wrap">`;

    if (status === 'completed') {
      html += `
        <div class="path-node completed"
             data-quiz-idx="${qi}"
             data-status="completed"
             style="border-color:${lvl.color}; background:${lvl.color}"
             title="Tamamlandı">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>`;
    } else if (status === 'unlocked') {
      const pulseClass = isFirst && !hasWords ? '' : (qi === progress[lvl.id].filter(s=>s==='completed').length ? 'pulse' : '');
      html += `
        <div class="path-node unlocked ${pulseClass}"
             data-quiz-idx="${qi}"
             data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}"
             title="Test ${qi + 1}">
          ${qi + 1}
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

    html += `<div class="node-label">Test ${qi + 1}</div>`;
    html += `</div>`;
  });

  html += '</div>';
  return html;
}

function toggleLevel(card) {
  const isOpen = card.classList.contains('open');

  // Close all open cards first
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

    // Animasiya bitəndə 'none' et ki, içəri dəyişsə problem olmasın
    body.addEventListener('transitionend', () => {
      if (card.classList.contains('open')) {
        body.style.maxHeight = 'none';
      }
    }, { once: true });
  }
}

// ── Start quiz ───────────────────────────────────────────
function startQuiz(levelIdx, quizIdx) {
  quiz.levelIdx = levelIdx;
  quiz.quizIdx  = quizIdx;
  quiz.mistakes = 0;
  quiz.index    = 0;
  quiz.locked   = false;

  // Shuffle the 20 words
  const words = LEVELS[levelIdx].quizzes[quizIdx];
  quiz.words = shuffle([...words]);

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

  // Update progress bar & counter
  const pct = (quiz.index / totalWords) * 100;
  elProgressFill.style.width = pct + '%';
  elQCounter.textContent = `${quiz.index + 1}/${totalWords}`;

  // Show the English word
  elQuestionWord.textContent = capitalize(word.en);

  // Randomize correct answer position (0 = left, 1 = right)
  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  const opts = quiz.correctPos === 0
    ? [word.tr, word.wrong]
    : [word.wrong, word.tr];

  elOpt0.textContent = capitalize(opts[0]);
  elOpt1.textContent = capitalize(opts[1]);

  // Reset button states
  elOpt0.className = 'option-btn';
  elOpt1.className = 'option-btn';
  elOpt0.disabled  = false;
  elOpt1.disabled  = false;
  quiz.locked      = false;
}

// ── Handle answer click ──────────────────────────────────
function handleAnswer(btnIdx) {
  if (quiz.locked) return;
  quiz.locked = true;

  const isCorrect = btnIdx === quiz.correctPos;

  elOpt0.disabled = true;
  elOpt1.disabled = true;

  // Visual feedback
  if (isCorrect) {
    (btnIdx === 0 ? elOpt0 : elOpt1).className = 'option-btn correct';
  } else {
    quiz.mistakes++;
    (btnIdx === 0 ? elOpt0 : elOpt1).className = 'option-btn wrong';
    // Highlight the correct button
    (quiz.correctPos === 0 ? elOpt0 : elOpt1).className = 'option-btn correct';
  }

  // Advance after short delay
  setTimeout(() => {
    quiz.index++;
    if (quiz.index >= quiz.words.length) {
      finishQuiz();
    } else {
      showQuestion();
    }
  }, isCorrect ? 500 : 800);
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
      const lvl  = LEVELS[quiz.levelIdx];
      const next = quiz.quizIdx + 1;
      const hasNext = next < lvl.quizzes.length;

      elResultEmoji.textContent = '🎉';
      elResultTitle.textContent = 'Mükəmməl!';
      elResultDesc.textContent  = `Bütün ${quiz.words.length} sözü düzgün cavablandırdın!`;

      elResultMainBtn.textContent = hasNext ? `Test ${next + 1}-i aç →` : 'Ana səhifəyə qayıt';
      elResultMainBtn.onclick     = () => {
        closeOverlays();
        renderLevels();
        if (hasNext) {
          // Auto-open the level accordion
          setTimeout(() => {
            const cards = document.querySelectorAll('.level-card');
            if (cards[quiz.levelIdx]) toggleLevel(cards[quiz.levelIdx]);
          }, 100);
        }
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
      elResultBackBtn.onclick     = () => {
        closeOverlays();
        renderLevels();
      };
    }
  }, 250);
}

// ── Close / quit ─────────────────────────────────────────
function closeOverlays() {
  elQuizScreen.classList.add('hidden');
  elResultScreen.classList.add('hidden');
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
    closeOverlays();
    renderLevels();
  }
});

// ── Init ──────────────────────────────────────────────────
loadProgress();
renderLevels();
