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
    0: 'Education & Learning',
    1: 'Personal Development & Skills',
    3: 'Business & Work 1',
    4: 'Business & Work 2',
    5: 'Money & Economy',
    7: 'Technology & Media',
    8: 'Communication & Social',
    9: 'Feelings & Emotions 1',
    10: 'Feelings & Emotions 2',
    12: 'Crime, Law & Government 1',
    13: 'Crime, Law & Government 2',
    14: 'War, Conflict & Danger',
    16: 'Travel & Transport',
    17: 'Nature & Environment',
    19: 'Science & Research',
    20: 'Health & Body',
    22: 'Food, House & Daily Life',
    23: 'Family & Society',
    24: 'Art, Culture & Entertainment',
    25: 'Sports & Fitness',
    27: 'Personality & Character',
    28: 'Abstract Concepts & Thinking',
    29: 'Actions & Processes 1',
    30: 'Actions & Processes 2',
    32: 'Change & Development',
    33: 'Problems & Solutions',
    35: 'Government & Politics',
    36: 'Law & Justice',
    38: 'Work & Employment',
    39: 'Success & Achievement',
    41: 'Negative Emotions & States',
    42: 'Positive Qualities',
    44: 'Media & Communication',
    45: 'Environment & Nature',
    46: 'Health & Medicine',
    48: 'Technology & Innovation',
    49: 'Travel & Holidays',
    50: 'Food & Shopping',
    52: 'House & Everyday Life',
    53: 'Remaining Mixed Words',
  },
  'c1': {
    0: 'Government & Politics 1',
    1: 'Government & Politics 2',
    3: 'Law & Justice',
    4: 'Crime & Conflict',
    6: 'Business & Economy 1',
    7: 'Business & Economy 2',
    8: ' Society & Social Issues',
    10: 'Psychology & Emotions',
    11: 'Abstract Concepts & Thinking',
    13: 'Actions & Processes 1',
    14: 'Actions & Processes 2',
    15: 'Change & Development',
    17: 'Media & Communication',
    18:  'Science & Research',
    19:  'Health & Medicine',
    21:  'Environment & Nature',
    22:  'Art, Culture & Entertainment',
    23:  'Personality & Character',
    25:  'War & Military',
    26:  'Remaining Advanced Words (Mixed)',
    27:  'Personality & Character Traits',
    29:  'Abstract & Philosophical Concepts',
    30:  'Actions & Processes',
    31:  'Change, Development & Movement',
    33:  'Problems, Difficulties & Risks',
    34:  'Success, Achievement & Recognition',
    35:  'Media, Journalism & Public Opinion',
    37:  'Science, Research & Technology',
    38:  'Health, Medicine & Psychology',
    39:  'Environment & Sustainability',
    41:  'Art, Culture & Heritage',
    42:  'Law, Order & Authority',
    43:  'War, Conflict & Security',
    45:  'Economy & Finance (Advanced)',
    46:  'Society & Social Issues (Advanced)',
    47:  'Communication & Interaction',
    49:  'Negative States & Emotions',
    50:  'Positive Qualities & Values',
    51:  'Miscellaneous Advanced Words (1)',
    52:  'Remaining Words (Tamamlayıcı)',
  },
  'c2': {
    0:  'Deception & Dishonesty 1',
    1:  'Deception & Dishonesty 2',
    3:  'Criticism & Condemnation 1',
    4:  'Criticism & Condemnation 2',
    6:  'Morality & Ethics 1',
    7:  'Morality & Ethics 2',
    8:  'Power & Authority 1',
    9:  'Power & Authority 2',
    11:  'Conflict & Hostility 1',
    12:  'Conflict & Hostility 2',
    13:  'Law & Governance 1',
    14:  'Law & Governance 2',
    16:  'Praise & Admiration',
    17:  'Negative Character Traits 1',
    18:  'Negative Character Traits 2',
    20:  'Positive Character Traits 1',
    21:  'Positive Character Traits 2',
    22:  'Emotion & Psychological States 1',
    23:  'Emotion & Psychological States 2',
    25:  'Weakness & Decline',
    26:  'Resistance & Stubbornness',
    27:  'Disorder & Chaos',
    29:  'Language, Rhetoric & Literature 1',
    30:  'Language, Rhetoric & Literature 2',
    31:  'Thought, Reasoning & Philosophy 1',
    32:  'Thought, Reasoning & Philosophy 2',
    34:  'Social Status & Class',
    35:  'Wealth, Greed & Poverty',
    36:  'Religion, Belief & Ritual 1',
    37:  'Religion, Belief & Ritual 2',
    39:  'Ambition, Success & Failure 1',
    40:  'Ambition, Success & Failure 2',
    41:  'Deference, Submission & Servility',
    43:  'Time, Change & Impermanence',
    44:  'Nature & Geography',
    46:  'War, Military & Strategy 1',
    47:  'War, Military & Strategy 2',
    49:  'Crime, Corruption & Wrongdoing 1',
    50:  'Crime, Corruption & Wrongdoing 2',
    52:  'Suffering & Hardship 1',
    53:  'Suffering & Hardship 2',
    54:  'Generosity, Charity & Compassion',
    56:  'Pride, Vanity & Arrogance',
    57:  'Secrecy & Concealment',
    59:  'Rebellion & Dissent',
    60:  'Diplomacy & Negotiation',
    61:  'Excess & Indulgence',
    63:  'Intellect & Knowledge 1',
    64:  'Intellect & Knowledge 2',
    66:  'Appearance & Perception',
    67:  'Indifference & Detachment',
    68:  'Brevity, Precision & Style',
    70:  'Fate, Prophecy & the Supernatural',
    71:  'Memory, Legacy & History',
    72:  'Abundance & Scarcity',
  },
};

// ── Storage keys ──────────────────────────────────────────
const STORAGE_KEY = 'wordpath_v1';
const STARS_KEY   = 'wordpath_stars';

// ── Exam ID-ləri (0-based index, level id ilə) ────────────
const EXAM_IDS = {
  'a1': new Set([4, 10, 14, 18, 23, 28, 32, 36, 40, 44, 48, 52]),
  'a2': new Set([4, 9, 14, 17, 22, 27, 30, 33, 36, 39]),
  'b1': new Set([4, 8, 11, 15, 19, 23, 26, 30]),
  'b2': new Set([2, 6, 11, 15, 18, 21, 26, 31, 34, 37, 40, 43, 47, 51, 54]),
  'c1': new Set([2, 5, 9, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 53]),
  'c2': new Set([2, 5, 10, 15, 19, 24, 28, 33, 38, 42, 45, 48, 51, 55, 58, 62, 65, 69, 73]),
  'kids':    new Set([]),
  'grammar': new Set([]),
  'verbs':   new Set([]),
  'passive': new Set([]),
  'indirect_speech': new Set([]),
  'adjectives': new Set([]),
  'sequence_tenses': new Set([]),
'pronoun': new Set([]),
'article': new Set([]),
'questions': new Set([]),
'modal_verbs': new Set([]),
'prepositions': new Set([]),
'adverb': new Set([]),
'complex_object': new Set([]),
'subject_verb_agreement': new Set([]),
'imperative': new Set([]),
'exclamatory': new Set([])

};

// ── Hər exam hansı quiz ID-lərini əhatə edir ─────────────
// Datada examların yanında bu məlumat olmur, burada saxlayırıq
const EXAM_QUIZ_IDS = {
  'a1': {
    4:  [0, 1, 2, 3],
    10: [5, 6, 7, 8, 9],
    14: [11, 12, 13],
    18: [15, 16, 17],
    23: [19, 20, 21, 22],
    28: [24, 25, 26, 27],
    32: [29, 30, 31],
    36: [33, 34, 35],
    40: [37, 38, 39],
    44: [41, 42, 43],
    48: [45, 46, 47],
    52: [49, 50, 51],
  },
  'a2': {
    4:  [0, 1, 2, 3],
    9:  [5, 6, 7, 8],
    14: [10, 11, 12, 13],
    17: [15, 16],
    22: [18, 19, 20, 21],
    27: [23, 24, 25, 26],
    30: [28, 29],
    33: [31, 32],
    36: [34, 35],
    39: [37, 38],
  },
  'b1': {
    4:  [0, 1, 2, 3],
    8:  [5, 6, 7],
    11: [9, 10],
    15: [12, 13, 14],
    19: [16, 17, 18],
    23: [20, 21, 22],
    26: [24, 25],
    30: [27, 28, 29],
  },
  'b2': {
    2: [0, 1],
    6: [3, 4, 5],
    11: [7, 8, 9, 10],
    15: [12, 13, 14],
    18: [16, 17],
    21: [19, 20],
    26: [22, 23, 24, 25],
    31: [27, 28, 29, 30],
    34: [32, 33],
    37: [35, 36],
    40: [38, 39],
    43: [41, 42],
    47: [44, 45, 46],
    51: [48, 49, 50],
    54: [52, 53],
  },
  'c1': {
    2: [0, 1],
    5: [3, 4],
    9: [6, 7, 8],
    12: [10, 11],
    16: [13, 14, 15],
    20: [17, 18, 19],
    24: [21, 22, 23],
    28: [25, 26, 27],
    32: [29, 30, 31],
    36: [33, 34, 35],
    40: [37, 38, 39],
    44: [41, 42, 43],
    48: [45, 46, 47],
    53: [49, 50, 51, 52],
  },
  'c2': {
    2: [0, 1],
    5: [3, 4],
    10: [6, 7, 8, 9],
    15: [11, 12, 13, 14],
    19: [16, 17, 18],
    24: [20, 21, 22, 23],
    28: [25, 26, 27],
    33: [29, 30, 31, 32],
    38: [34, 35, 36, 37],
    42: [39, 40, 41],
    45: [43, 44],
    48: [46, 47],
    51: [49, 50],
    55: [52, 53, 54],
    58: [56, 57],
    62: [59, 60, 61],
    65: [63, 64],
    69: [66, 67, 68],
    73: [70, 71, 72],
  }
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
  mode:         'normal',
};

// ── Review mode state ─────────────────────────────────────
const reviewState = {
  levelId: null,
  correct: 0,
  wrong:   0,
};

// ============================================================
//  EXAM SİSTEMİ STATE
// ============================================================

const examState = {
  levelIdx:       null,
  quizIdx:        null,
  questions:      [],   // {type: 'fill'|'wordmatch'|'definition', ...data}
  currentQ:       0,
  totalQ:         0,
  mistakes:       0,    // ümumi uğursuz suallar
  // Word match üçün
  wm_selected:    null, // {side: 'en'|'az', index: number}
  wm_matched:     [],   // match olunmuş cüt indexlər
  wm_wrongCount:  0,    // cari word match sualında səhv sayı
  wm_pairs:       [],   // [{en, az}]
};

// ── Reading Quiz State ────────────────────────────────────
const readingState = {
  levelIdx: null,
  quizIdx:  null,
  item:     null,
  queue:    [],     // hal-hazırkı sual növbəsi (indekslər)
  skipped:  [],     // keçilən suallar
  correct:  0,
  wrong:    0,
  textCardHeight: null,
};

// ============================================================
//  1. listeningState — readingState-in yanına əlavə et
// ============================================================

const listeningState = {
  levelIdx:   null,
  quizIdx:    null,
  item:       null,
  attempt:    1,       // 1 və ya 2
  audioEnded: false,   // audio bitibmi
  queue:      [],
  skipped:    [],
  correct:    0,
  wrong:      0,
  audioEl:    null,    // Audio() obyekti
};


// ============================================================
//  2. startListeningQuiz — startReadingQuiz-in yanına əlavə et
// ============================================================

function startListeningQuiz(levelIdx, quizIdx) {
  const lvl  = LEVELS[levelIdx];
  const item = lvl.quizzes[quizIdx];

  // attempt: ilk dəfə başladanda 1, completed-dirsə 2
  const status  = progress[lvl.id][quizIdx];
  const attempt = ['completed','phase2_completed','phase3_unlocked','level_done'].includes(status) ? 2 : 1;

  listeningState.levelIdx   = levelIdx;
  listeningState.quizIdx    = quizIdx;
  listeningState.item       = item;
  listeningState.attempt    = attempt;
  listeningState.audioEnded = false;
  listeningState.queue      = item.questions.map((_, i) => i);
  listeningState.skipped    = [];
  listeningState.correct    = 0;
  listeningState.wrong      = 0;

  // Əvvəlki audio varsa dayandır
  if (listeningState.audioEl) {
    listeningState.audioEl.pause();
    listeningState.audioEl = null;
  }

  quiz.mode   = 'listening';
  quiz.locked = false;

  showQuizScreen();
  renderListeningQuestion();
}


// ============================================================
//  3. renderListeningQuestion
// ============================================================

function renderListeningQuestion() {
  if (listeningState.queue.length === 0) {
    if (listeningState.skipped.length > 0) {
      listeningState.queue   = [...listeningState.skipped];
      listeningState.skipped = [];
    } else {
      finishListeningQuiz();
      return;
    }
  }

  const qIdx  = listeningState.queue[0];
  const q     = listeningState.item.questions[qIdx];
  const item  = listeningState.item;
  const total = item.questions.length;
  const done  = listeningState.correct + listeningState.wrong;

  elProgressFill.style.width = `${(done / total) * 100}%`;
  elQCounter.textContent     = `${done + 1}/${total}`;

  const quizBody = document.querySelector('.quiz-body');
  quizBody.classList.add('listening-mode');
  quiz.locked = false;

  const attempt    = listeningState.attempt;
  const audioEnded = listeningState.audioEnded;

  const badgeClass = attempt === 1 ? 'attempt-1' : 'attempt-2';
  const badgeText  = attempt === 1 ? '1-ci dinləmə' : '2-ci dinləmə';
  const badgeSvg   = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>`;

  const playerCard = `
    <div class="listening-player-card">
      <div class="listening-attempt-badge ${badgeClass}">${badgeSvg}${badgeText}</div>
      <div class="listening-passage-title">${item.title}</div>
      <div class="audio-player ${attempt === 1 ? 'attempt-1-player' : 'attempt-2-player'}" id="audio-player-wrap">
        <div class="audio-player-controls">
          <button class="audio-play-btn" id="audio-play-btn" ${audioEnded ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </button>
          <div class="audio-progress-wrap">
            <div class="audio-progress-bar">
              <div class="audio-progress-fill" id="audio-progress-fill"></div>
            </div>
            <div class="audio-timer">
              <span id="audio-current">0:00</span>
              <span id="audio-duration">0:00</span>
            </div>
          </div>
        </div>
        <div class="audio-ended-msg ${audioEnded ? 'visible' : ''}" id="audio-ended-msg">
          ${attempt === 1 ? 'Audio bitdi' : 'Audio bitdi'}
        </div>
      </div>
    </div>
  `;

  const optLabels = ['A', 'B', 'C', 'D', 'E'];

  // ── MCQ ──────────────────────────────────────────────
  if (q.type === 'mcq') {
    quizBody.innerHTML = `
      <div class="listening-layout">
        ${playerCard}
        <div class="listening-question-area" id="listening-q-area">
          <div class="listening-question-text">${q.q}</div>
          <div class="listening-options-grid">
            ${q.options.map((opt, i) => `
              <button class="listening-option-btn" data-opt="${i}">
                <span class="listening-opt-label">${optLabels[i]}</span>
                ${opt}
              </button>
            `).join('')}
          </div>
          <button class="reading-skip-btn" id="listening-skip">Keç →</button>
        </div>
      </div>
    `;

    quizBody.querySelectorAll('.listening-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleListeningAnswer(parseInt(btn.dataset.opt), q);
      });
    });

    document.getElementById('listening-skip').addEventListener('click', () => {
      if (quiz.locked) return;
      listeningState.skipped.push(listeningState.queue.shift());
      renderListeningQuestion();
    });

  // ── TRUE/FALSE ────────────────────────────────────────
  } else if (q.type === 'truefalse') {
    const userAnswers = new Array(q.statements.length).fill(null);

    const renderTFCards = () => {
      const grid = document.getElementById('listening-tf-grid');
      if (!grid) return;

      grid.innerHTML = q.statements.map((stmt, i) => {
        const ua = userAnswers[i];
        const isAnswered = ua !== null;

        let trueClass  = 'tf-btn tf-true';
        let falseClass = 'tf-btn tf-false';

        if (isAnswered) {
          if (stmt.answer === true)  trueClass  += ua === true  ? ' tf-correct' : ' tf-show-correct';
          else if (ua === true)      trueClass  += ' tf-wrong';
          if (stmt.answer === false) falseClass += ua === false ? ' tf-correct' : ' tf-show-correct';
          else if (ua === false)     falseClass += ' tf-wrong';
        }

        return `
          <div class="tf-card ${isAnswered ? 'tf-card-done' : ''}" data-idx="${i}">
            <div class="tf-statement">
              <span class="tf-num">${i + 1}.</span>
              ${stmt.text}
            </div>
            <div class="tf-btns">
              <button class="${trueClass}" data-idx="${i}" data-val="true"
                ${isAnswered ? 'disabled' : ''}>True</button>
              <button class="${falseClass}" data-idx="${i}" data-val="false"
                ${isAnswered ? 'disabled' : ''}>False</button>
            </div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('.tf-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (quiz.locked) return;
          const idx = parseInt(btn.dataset.idx);
          const val = btn.dataset.val === 'true';
          if (userAnswers[idx] !== null) return;

          userAnswers[idx] = val;
          const isCorrect = val === q.statements[idx].answer;
          if (!isCorrect) listeningState.wrong++;

          renderTFCards();

          const allDone = userAnswers.every(a => a !== null);
          if (allDone) {
            const correctCount = userAnswers.filter((a, i) => a === q.statements[i].answer).length;
            listeningState.correct += correctCount;
            listeningState.queue.shift();
            setTimeout(() => {
              quiz.locked = false;
              renderListeningQuestion();
            }, 1000);
          }
        });
      });
    };

    quizBody.innerHTML = `
      <div class="listening-layout">
        ${playerCard}
        <div class="listening-question-area" id="listening-q-area">
          <div class="listening-question-text">${q.q}</div>
          <div class="tf-cards-grid" id="listening-tf-grid"></div>
          <button class="reading-skip-btn" id="listening-skip">Keç →</button>
        </div>
      </div>
    `;

    renderTFCards();

    document.getElementById('listening-skip').addEventListener('click', () => {
      if (quiz.locked) return;
      listeningState.skipped.push(listeningState.queue.shift());
      renderListeningQuestion();
    });

  // ── TYPE IN ───────────────────────────────────────────
  } else if (q.type === 'typein') {
    quizBody.innerHTML = `
      <div class="listening-layout">
        ${playerCard}
        <div class="listening-question-area" id="listening-q-area">
          <div class="listening-question-text">${q.q}</div>
          <div class="reading-typein-wrap">
            <input class="reading-typein-input" id="listening-input"
              type="text" placeholder="Cavabınızı yazın..." autocomplete="off" />
            <button class="reading-typein-submit" id="listening-submit">Yoxla</button>
          </div>
          <div class="reading-typein-feedback hidden" id="listening-feedback"></div>
          <button class="reading-skip-btn" id="listening-skip">Keç →</button>
        </div>
      </div>
    `;

    const input = document.getElementById('listening-input');

    document.getElementById('listening-submit').addEventListener('click', () => {
      handleListeningAnswer(null, q, input.value);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleListeningAnswer(null, q, input.value);
    });
    document.getElementById('listening-skip').addEventListener('click', () => {
      if (quiz.locked) return;
      listeningState.skipped.push(listeningState.queue.shift());
      renderListeningQuestion();
    });
  }

  setupAudioPlayer();
}
// ============================================================
//  4. setupAudioPlayer — audio player məntiqi
// ============================================================
function setupAudioPlayer() {
  const item    = listeningState.item;
  const playBtn = document.getElementById('audio-play-btn');
  const fill    = document.getElementById('audio-progress-fill');
  const current = document.getElementById('audio-current');
  const durEl   = document.getElementById('audio-duration');
  const endMsg  = document.getElementById('audio-ended-msg');
  if (!playBtn) return;

  if (listeningState.audioEnded) {
    if (playBtn) playBtn.disabled = true;
    return;
  }

  let audio = listeningState.audioEl;

  if (!audio) {
    // ── Yeni audio yarat, bütün listenerları bir dəfə bağla ──
    audio = new Audio(item.audio);
    listeningState.audioEl = audio;

    audio.addEventListener('loadedmetadata', () => {
      const d = document.getElementById('audio-duration');
      if (d) d.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      const f = document.getElementById('audio-progress-fill');
      const c = document.getElementById('audio-current');
      if (f) f.style.width    = `${pct}%`;
      if (c) c.textContent    = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      listeningState.playCount = (listeningState.playCount || 0) + 1;

      const pb  = document.getElementById('audio-play-btn');
      const fl  = document.getElementById('audio-progress-fill');
      const cu  = document.getElementById('audio-current');
      const em  = document.getElementById('audio-ended-msg');

      if (listeningState.playCount >= 2) {
        // İkinci dinləmə bitdi — kilidlə
        listeningState.audioEnded = true;
        listeningState.audioEl    = null;
        if (fl) fl.style.width  = '100%';
        if (pb) pb.disabled     = true;
        if (em) em.classList.add('visible');
      } else {
        // Birinci dinləmə bitdi — reset et, yenidən oxumağa icazə ver
        audio.currentTime = 0;
        if (fl) fl.style.width  = '0%';
        if (cu) cu.textContent  = '0:00';
        if (pb) {
          pb.disabled = false;
          pb.classList.remove('playing-locked');
          pb.addEventListener('click', () => {
            if (pb.disabled) return;
            pb.disabled = true;
            pb.classList.add('playing-locked');
            audio.play().catch(() => {});
          }, { once: true });
        }
      }
    });
    // ── listener-lar bağlandı ──

  } else {
    // Audio artıq var — yalnız UI sinxronlaşdır, HEÇ BİR listener əlavə etmə
    if (audio.duration) {
      if (durEl) durEl.textContent = formatTime(audio.duration);
      const pct = (audio.currentTime / audio.duration) * 100;
      if (fill)    fill.style.width    = `${pct}%`;
      if (current) current.textContent = formatTime(audio.currentTime);
    }
    if (!audio.paused) {
      if (playBtn) playBtn.disabled = true;
    }
  }

  // timeupdate — DOM yeniləndiyindən hər dəfə bağlamaq lazımdır
  // amma yalnız yeni audio üçün deyil, mövcud audio üçün də UI güncəllənsin
  if (audio) {
    const onTimeUpdate = () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      const f = document.getElementById('audio-progress-fill');
      const c = document.getElementById('audio-current');
      if (f) f.style.width  = `${pct}%`;
      if (c) c.textContent  = formatTime(audio.currentTime);
    };
    // Köhnə timeupdate-ləri yığılmasın deyə named function saxla
    if (listeningState._onTimeUpdate) {
      audio.removeEventListener('timeupdate', listeningState._onTimeUpdate);
    }
    listeningState._onTimeUpdate = onTimeUpdate;
    audio.addEventListener('timeupdate', onTimeUpdate);
  }

  // Play düyməsi
  playBtn.addEventListener('click', () => {
    if (playBtn.disabled) return;
    playBtn.disabled = true;
    playBtn.classList.add('playing-locked');
    audio.play().catch(() => {});
  }, { once: true });
}

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ============================================================
//  5. handleListeningAnswer
// ============================================================

function handleListeningAnswer(optIdx, q, typeInValue) {
  if (quiz.locked) return;
  quiz.locked = true;

  if (q.type === 'mcq') {
    const isCorrect = q.options[optIdx] === q.answer;

    document.querySelectorAll('.listening-option-btn').forEach(btn => {
      btn.disabled = true;
      const i = parseInt(btn.dataset.opt);
      if (q.options[i] === q.answer)       btn.classList.add('listening-opt-correct');
      else if (i === optIdx && !isCorrect) btn.classList.add('listening-opt-wrong');
    });

    const skipBtn = document.getElementById('listening-skip');
    if (skipBtn) skipBtn.style.display = 'none';

    if (isCorrect) listeningState.correct++;
    else           listeningState.wrong++;

    listeningState.queue.shift();

    setTimeout(() => {
      quiz.locked = false;
      renderListeningQuestion();
    }, 800);

  } else if (q.type === 'typein') {
    const userVal   = (typeInValue || '').trim().toLowerCase();
    const correct   = (q.answer || '').trim().toLowerCase();
    const isCorrect = userVal === correct;

    const input     = document.getElementById('listening-input');
    const submitBtn = document.getElementById('listening-submit');
    const feedback  = document.getElementById('listening-feedback');

    if (submitBtn) submitBtn.disabled = true;

    if (isCorrect) {
      input.classList.add('reading-input-correct');
      if (feedback) {
        feedback.textContent = '✓ Düzgün!';
        feedback.className   = 'reading-typein-feedback reading-feedback-correct';
      }
      listeningState.correct++;
    } else {
      input.classList.add('reading-input-wrong');
      if (feedback) {
        feedback.textContent = `✗ Düzgün cavab: ${q.answer}`;
        feedback.className   = 'reading-typein-feedback reading-feedback-wrong';
      }
      listeningState.wrong++;
    }

    listeningState.queue.shift();

    setTimeout(() => {
      quiz.locked = false;
      renderListeningQuestion();
    }, isCorrect ? 800 : 1400);
  }
}

// ============================================================
//  6. finishListeningQuiz
// ============================================================

function finishListeningQuiz() {
  // Audio varsa dayandır
  if (listeningState.audioEl) {
    listeningState.audioEl.pause();
    listeningState.audioEl = null;
  }

  elProgressFill.style.width = '100%';

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.remove('hidden');
    elLevelResultCard.classList.add('hidden');

    const total   = listeningState.item.questions.length;
    const correct = listeningState.correct;
    const wrong   = listeningState.wrong;
    const pct     = Math.round((correct / total) * 100);

    let emoji, title;
    if (pct === 100)    { emoji = '🏆'; title = 'Əla nəticə!'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
    else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
    else if (pct >= 40) { emoji = '📚'; title = 'Daha çox dinlə!'; }
    else                { emoji = '💪'; title = 'Davam et!'; }

    elResultEmoji.textContent = emoji;
    elResultTitle.textContent = title;
    elResultDesc.textContent  = `${listeningState.item.title} — ${total} sualdan ${correct} düzgün`;
    elStatCorrect.textContent = correct;
    elStatWrong.textContent   = wrong;
    elStatPct.textContent     = `${pct}%`;

    markCompleted(listeningState.levelIdx, listeningState.quizIdx);

    elResultMainBtn.textContent = 'Yenidən cəhd et';
    elResultMainBtn.onclick = () => startListeningQuiz(listeningState.levelIdx, listeningState.quizIdx);

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      const li = listeningState.levelIdx;
      closeOverlays();
      renderLevels();
      scrollToCurrentNode(li);
    };
  }, 300);
}


// ============================================================
//  7. renderListeningPath
// ============================================================

function renderListeningPath(lvl, li) {
  let html = '<div class="listening-quiz-grid">';

  lvl.quizzes.forEach((item, qi) => {
    const status   = getStatus(li, qi);
    const isDone   = ['completed','phase2_completed','phase3_unlocked','level_done'].includes(status);
    const isLocked = status === 'locked';

    let nodeClass = 'listening-grid-node path-node';
    if (isDone)        nodeClass += ' listening-node-done';
    else if (isLocked) nodeClass += ' listening-node-locked';
    else               nodeClass += ' listening-node-unlocked';

    const title = (item && item.title) ? item.title : `Listening ${qi + 1}`;

    const circleInner = isDone
      ? `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : isLocked
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--locked)" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
      : `${qi + 1}`;

    html += `
      <div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}">
        <div class="listening-node-circle">${circleInner}</div>
        <div class="listening-node-title">${title}</div>
      </div>
    `;
  });

  html += '</div>';
  return html;
}



// ============================================================
//  EXAM — SUAL GENERASIYASI
// ============================================================

// Həmin leveldəki quiz ID-lərindən bütün sözləri topla
function getExamSourceWords(levelId, quizIdList) {
  const lvl = LEVELS.find(l => l.id === levelId);
  if (!lvl) return [];
  const words = [];
  quizIdList.forEach(qi => {
    const item = lvl.quizzes[qi];
    if (Array.isArray(item)) {
      item.forEach(w => {
        if (w && w.en && w.tr && w.wrong) words.push({ ...w });
      });
    }
  });
  return words;
}

// Exam suallarını qur
function buildExamQuestions(levelId, quizIdx) {
  const examData = LEVELS.find(l => l.id === levelId)?.quizzes[quizIdx];
  if (!examData || !examData.sentences) return [];

  const quizIdList = (EXAM_QUIZ_IDS[levelId] || {})[quizIdx] || [];
  const topicCount = quizIdList.length;

  // Cümlə boşluq sualları — datadan gəlir, hamısını götürürük (20 ədəd)
  const fillQuestions = (examData.sentences || []).map(s => ({
    type: 'fill',
    en:    s.en,
    tr:    s.tr,
    wrong: s.wrong,
  }));

  // Word match və definition üçün mənbə sözlər
  const sourceWords = getExamSourceWords(levelId, quizIdList);

  // Cümlələrdə istifadə olunan sözləri çıxart (eyni söz 2 dəfə düşməsin)
  const usedWords = new Set(fillQuestions.map(q => q.tr.toLowerCase()));

  const availableWords = shuffle(
    sourceWords.filter(w => !usedWords.has(w.tr.toLowerCase()))
  );

  // Mövzu sayına görə word match və definition sayı
  // 2 mövzu: 2 wordmatch (12 söz), 8 definition
  // 3 mövzu: 6 wordmatch (36 söz), 4 definition
  // 4 mövzu: 5 wordmatch (30 söz), 5 definition
  // 5+ mövzu: 5 wordmatch (30 söz), 5 definition
  let wmCount, defCount;
  if (topicCount <= 2) {
    wmCount  = 2;
    defCount = 8;
  } else if (topicCount === 3) {
    wmCount  = 6;
    defCount = 4;
  } else {
    wmCount  = 5;
    defCount = 5;
  }

  // Word match üçün sözlər seç (hər biri 6 cüt = 6 söz)
  const wmWordsNeeded = wmCount * 6;
  const wmPool = availableWords.slice(0, wmWordsNeeded);
  const wmUsed = new Set(wmPool.map(w => w.tr.toLowerCase()));

  // Definition üçün sözlər seç (word match-da istifadə olunmayanlardan)
  const defPool = availableWords
    .filter(w => !wmUsed.has(w.tr.toLowerCase()) && w.def && w.wen)
    .slice(0, defCount);

  // Word match suallarını qur
  const wmQuestions = [];
  for (let i = 0; i < wmCount; i++) {
    const batch = wmPool.slice(i * 6, i * 6 + 6);
    if (batch.length < 2) break; // kifayət qədər söz yoxdursa keç
    wmQuestions.push({
      type:  'wordmatch',
      pairs: shuffle(batch.map(w => ({ en: w.en, az: w.tr }))),
    });
  }

  // Definition suallarını qur
  const defQuestions = defPool.map(w => {
    // wrong variantı sourceWords-dən random seç
    const wrongWord = sourceWords.find(sw =>
      sw.en !== w.en && sw.wen && sw.wen !== w.wen
    );
    return {
      type:  'definition',
      def:   w.def,
      en:    w.en,
      wen:   wrongWord ? wrongWord.wen || wrongWord.en : w.wrong,
    };
  });

  return shuffle([...fillQuestions, ...wmQuestions, ...defQuestions]);
}
function unlockExamSkippedQuizzes(levelIdx, examQuizIdx) {
  const lvl     = LEVELS[levelIdx];
  const levelId = lvl.id;

  // 0-dan examın özünə kimi bütün quizləri aç (locked olanları)
  for (let i = 0; i < examQuizIdx; i++) {
    if (progress[levelId][i] === 'locked') {
      progress[levelId][i] = 'unlocked';
    }
  }

  saveProgress();
}
// ============================================================
//  EXAM — BAŞLAT
// ============================================================

function startExam(levelIdx, quizIdx) {
  const lvl     = LEVELS[levelIdx];
  const levelId = lvl.id;

  const questions = buildExamQuestions(levelId, quizIdx);
  if (!questions || questions.length === 0) {
    showToast('Exam datasında problem var ✏️');
    return;
  }

  examState.levelIdx      = levelIdx;
  examState.quizIdx       = quizIdx;
  examState.questions     = questions;
  examState.currentQ      = 0;
  examState.totalQ        = questions.length;
  examState.mistakes      = 0;
  examState.wm_selected   = null;
  examState.wm_matched    = [];
  examState.wm_wrongCount = 0;
  examState.wm_pairs      = [];

  quiz.mode = 'exam';

  showQuizScreen();
  renderExamQuestion();
}

// ============================================================
//  EXAM — SUAL RENDER
// ============================================================

function renderExamQuestion() {
  const q      = examState.questions[examState.currentQ];
  const total  = examState.totalQ;
  const cur    = examState.currentQ;

  elProgressFill.style.width = `${(cur / total) * 100}%`;
  elQCounter.textContent     = `${cur + 1}/${total}`;

  // Quiz body-ni tam yenidən render edirik exam üçün
  const quizBody = document.querySelector('.quiz-body');

  if (q.type === 'fill') {
    renderExamFill(q, quizBody);
  } else if (q.type === 'wordmatch') {
    renderExamWordMatch(q, quizBody);
  } else if (q.type === 'definition') {
    renderExamDefinition(q, quizBody);
  }
}

// ── Fill in the blank ─────────────────────────────────────
function renderExamFill(q, container) {
  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  container.className = 'quiz-body';
  container.innerHTML = `
    <div class="question-card">
      <div class="exam-type-badge">Boşluq doldur</div>
      <div class="question-hint">Boşluğa uyğun sözü tap</div>
      <div class="question-word" style="font-size:22px; line-height:1.4">${q.en}</div>
    </div>
    <div class="options-grid">
      <button class="option-btn" id="exam-opt-0"></button>
      <button class="option-btn" id="exam-opt-1"></button>
    </div>
  `;

  const opts = quiz.correctPos === 0
    ? [q.tr, q.wrong]
    : [q.wrong, q.tr];

  document.getElementById('exam-opt-0').textContent = capitalize(opts[0]);
  document.getElementById('exam-opt-1').textContent = capitalize(opts[1]);

  document.getElementById('exam-opt-0').addEventListener('click', () => handleExamFill(0, q));
  document.getElementById('exam-opt-1').addEventListener('click', () => handleExamFill(1, q));
}

function handleExamFill(btnIdx, q) {
  if (quiz.locked) return;
  quiz.locked = true;

  const isCorrect = btnIdx === quiz.correctPos;
  const btn0 = document.getElementById('exam-opt-0');
  const btn1 = document.getElementById('exam-opt-1');
  if (!btn0 || !btn1) return;

  btn0.disabled = true;
  btn1.disabled = true;

  const correctBtn = quiz.correctPos === 0 ? btn0 : btn1;
  const chosenBtn  = btnIdx === 0 ? btn0 : btn1;

  if (isCorrect) {
    chosenBtn.className = 'option-btn correct';
    setTimeout(() => examNextQuestion(), 600);
  } else {
    chosenBtn.className  = 'option-btn wrong';
    correctBtn.className = 'option-btn correct';
    examState.mistakes++;
    setTimeout(() => examNextQuestion(), 900);
  }
}

// ── Word Match ────────────────────────────────────────────
function renderExamWordMatch(q, container) {
  container.className = 'quiz-body';
  examState.wm_pairs      = q.pairs;
  examState.wm_matched    = [];
  examState.wm_selected   = null;
  examState.wm_wrongCount = 0;

  // Azərbaycan sütunu üçün sözləri qarışdır (müstəqil sıra)
  const azShuffled = shuffle([...q.pairs.map((p, i) => ({ az: p.az, origIdx: i }))]);

  container.innerHTML = `
    <div class="question-card" style="padding: 16px 14px;">
      <div class="exam-type-badge">Word Match</div>
      <div class="question-hint" style="margin-bottom:14px">Uyğun sözləri cütləşdir</div>
      <div class="word-match-container" id="wm-container">
        <div class="word-match-col" id="wm-col-en"></div>
        <div class="word-match-col" id="wm-col-az"></div>
      </div>
    </div>
  `;

  const colEn = document.getElementById('wm-col-en');
  const colAz = document.getElementById('wm-col-az');

  q.pairs.forEach((pair, i) => {
    const btn = document.createElement('div');
    btn.className        = 'word-match-item';
    btn.dataset.side     = 'en';
    btn.dataset.index    = i;
    btn.textContent      = pair.en;
    btn.addEventListener('click', () => handleWordMatchClick('en', i));
    colEn.appendChild(btn);
  });

  azShuffled.forEach((item) => {
    const btn = document.createElement('div');
    btn.className        = 'word-match-item';
    btn.dataset.side     = 'az';
    btn.dataset.index    = item.origIdx;
    btn.textContent      = item.az;
    btn.addEventListener('click', () => handleWordMatchClick('az', item.origIdx));
    colAz.appendChild(btn);
  });
}

function handleWordMatchClick(side, index) {
  // Artıq match olunubsa ignore et
  if (examState.wm_matched.includes(index)) return;

  const sel = examState.wm_selected;

  if (!sel) {
    // İlk seçim
    examState.wm_selected = { side, index };
    highlightWmItem(side, index, 'selected');
    return;
  }

  // Eyni tərəfdən seçim — dəyiş
  if (sel.side === side) {
    clearWmHighlight(sel.side, sel.index);
    examState.wm_selected = { side, index };
    highlightWmItem(side, index, 'selected');
    return;
  }

  // Fərqli tərəfdən seçim — yoxla
  const enIdx = side === 'en' ? index : sel.index;
  const azIdx = side === 'az' ? index : sel.index;

  if (enIdx === azIdx) {
    // Düzgün match
    examState.wm_matched.push(enIdx);
    clearWmHighlight(sel.side, sel.index);
    examState.wm_selected = null;

    // Hər iki elementi matched et
    setWmItemState('en', enIdx, 'matched');
    setWmItemState('az', azIdx, 'matched');

    // Hamısı matchlanıbsa növbəti suala keç
    if (examState.wm_matched.length === examState.wm_pairs.length) {
      setTimeout(() => examNextQuestion(), 700);
    }
  } else {
    // Səhv match
    examState.wm_wrongCount++;

    clearWmHighlight(sel.side, sel.index);
    examState.wm_selected = null;

    // Hər ikisini wrong-flash et
    setWmItemState(side, index, 'wrong-flash');
    setWmItemState(sel.side, sel.index, 'wrong-flash');

    setTimeout(() => {
      clearWmState(side, index);
      clearWmState(sel.side, sel.index);
    }, 400);

    // 3-cü səhvdə sual uğursuz sayılır
    if (examState.wm_wrongCount >= 3) {
      examState.mistakes++;
      setTimeout(() => examNextQuestion(), 800);
    }
  }
}

function getWmEl(side, index) {
  const col = document.getElementById(side === 'en' ? 'wm-col-en' : 'wm-col-az');
  if (!col) return null;
  return col.querySelector(`[data-index="${index}"]`);
}

function highlightWmItem(side, index, cls) {
  const el = getWmEl(side, index);
  if (el) el.classList.add(cls);
}

function clearWmHighlight(side, index) {
  const el = getWmEl(side, index);
  if (el) el.classList.remove('selected', 'wrong-flash');
}

function setWmItemState(side, index, cls) {
  const el = getWmEl(side, index);
  if (el) {
    el.className = 'word-match-item ' + cls;
  }
}

function clearWmState(side, index) {
  const el = getWmEl(side, index);
  if (el) {
    el.className = 'word-match-item';
  }
}

// ── Definition ────────────────────────────────────────────
function renderExamDefinition(q, container) {
  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;
  container.className = 'quiz-body';
  container.innerHTML = `
    <div class="question-card">
      <div class="exam-type-badge">Definition</div>
      <div class="question-hint">Tərifə uyğun sözü tap</div>
      <div class="question-word" style="font-size:20px; line-height:1.5; font-weight:700">${q.def}</div>
    </div>
    <div class="options-grid">
      <button class="option-btn" id="exam-opt-0"></button>
      <button class="option-btn" id="exam-opt-1"></button>
    </div>
  `;

  const opts = quiz.correctPos === 0
    ? [q.en, q.wen]
    : [q.wen, q.en];

  document.getElementById('exam-opt-0').textContent = capitalize(opts[0]);
  document.getElementById('exam-opt-1').textContent = capitalize(opts[1]);

  document.getElementById('exam-opt-0').addEventListener('click', () => handleExamDefinition(0, q));
  document.getElementById('exam-opt-1').addEventListener('click', () => handleExamDefinition(1, q));
}

function handleExamDefinition(btnIdx, q) {
  if (quiz.locked) return;
  quiz.locked = true;

  const isCorrect = btnIdx === quiz.correctPos;
  const btn0 = document.getElementById('exam-opt-0');
  const btn1 = document.getElementById('exam-opt-1');
  if (!btn0 || !btn1) return;

  btn0.disabled = true;
  btn1.disabled = true;

  const correctBtn = quiz.correctPos === 0 ? btn0 : btn1;
  const chosenBtn  = btnIdx === 0 ? btn0 : btn1;

  if (isCorrect) {
    chosenBtn.className = 'option-btn correct';
    setTimeout(() => examNextQuestion(), 600);
  } else {
    chosenBtn.className  = 'option-btn wrong';
    correctBtn.className = 'option-btn correct';
    examState.mistakes++;
    setTimeout(() => examNextQuestion(), 900);
  }
}

// ── Növbəti suala keç ─────────────────────────────────────
function examNextQuestion() {
  quiz.locked = false;
  examState.currentQ++;

  if (examState.currentQ >= examState.totalQ) {
    finishExam();
  } else {
    renderExamQuestion();
  }
}

// ── Exam bitdi ────────────────────────────────────────────
function finishExam() {
  elProgressFill.style.width = '100%';

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.add('hidden');

    const total   = examState.totalQ;
    const wrong   = examState.mistakes;
    const correct = total - wrong;
    const pct     = Math.round((correct / total) * 100);
    const won     = wrong === 0;

    if (won) {
      unlockExamSkippedQuizzes(examState.levelIdx, examState.quizIdx);
      markCompleted(examState.levelIdx, examState.quizIdx);
      elResultEmoji.textContent = '🏆';
      elResultTitle.textContent = 'Exam keçildi!';
      elResultDesc.textContent  = 'Examı uğurla tamamladın!';

      const nextPlayable = findNextPlayableQuiz(examState.levelIdx, examState.quizIdx);
      if (nextPlayable !== null) {
        elResultMainBtn.textContent = 'Növbəti →';
        elResultMainBtn.onclick = () => {
          startQuiz(examState.levelIdx, nextPlayable);
          elResultScreen.classList.add('hidden');
        };
      } else {
        elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
        elResultMainBtn.onclick = () => {
          const li = examState.levelIdx;
          closeOverlays();
          renderLevels();
          scrollToCurrentNode(li);
        };
      }
    } else {
      elResultEmoji.textContent = '😅';
      elResultTitle.textContent = 'Olmadı...';
      elResultDesc.textContent  = `${wrong} sualda uğursuz oldun. Sıfır səhv lazımdır!`;

      elResultMainBtn.textContent = 'Yenidən cəhd et';
      elResultMainBtn.onclick = () => startExam(examState.levelIdx, examState.quizIdx);
    }

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      const li = examState.levelIdx;
      closeOverlays();
      renderLevels();
      scrollToCurrentNode(li);
    };
  }, 300);
}

// ============================================================
//  WORDPATH — YENİ SƏVİYYƏ TESTİ SİSTEMİ
// ============================================================

const LT_TOTAL        = 40;
const LT_P1_PER_LEVEL = 2;
const LT_P1_PASS      = 1;
const LT_P2_TOTAL     = 20;
const LT_P2_PER_TYPE  = 5;
const LT_P2_STRONG    = 0.72;
const LT_P2_WEAK      = 0.45;
const LT_P3_TOTAL     = 10;
const LT_P3_UPGRADE   = 6;

const LT_LEVEL_WEIGHTS = { a1: 1, a2: 2, b1: 3, b2: 4, c1: 5, c2: 6 };
const LT_TYPE_WEIGHTS  = { normal: 1.0, phase2: 1.3, phase3: 1.6, exam: 1.4 };
const LT_HAS_DEF  = new Set(['a1', 'a2', 'b1']);
const LT_HAS_EXAM = new Set(['a1', 'a2', 'b1']);

const levelTestState = {
  phase:          1,
  totalAsked:     0,
  p1_lo:          0,
  p1_hi:          5,
  p1_mid:         -1,
  p1_words:       [],
  p1_wordIdx:     0,
  p1_correct:     0,
  p1_results:     {},
  p2_levelId:     null,
  p2_queue:       [],
  p2_idx:         0,
  p2_weightedScore:    0,
  p2_weightedMax:      0,
  p3_levelId:     null,
  p3_queue:       [],
  p3_idx:         0,
  p3_weightedScore:    0,
  p3_weightedMax:      0,
  finalLevelId:   null,
  usedWordKeys:   new Set(),
};

function getAllExamWordsForLevel(levelId) {
  const lvl = LEVELS.find(l => l.id === levelId);
  if (!lvl) return [];
  const words = [];
  lvl.quizzes.forEach((item, qi) => {
    if (isExamItem(item, levelId, qi) && item && item.sentences) {
      item.sentences.forEach(w => {
        if (w && w.en && w.en.includes('____') && w.tr && w.wrong) {
          words.push(w);
        }
      });
    }
  });
  return words;
}

function lt_pickFreshWords(levelId, count, type = 'normal') {
  let pool = [];

  if (type === 'exam') {
    pool = getAllExamWordsForLevel(levelId);
  } else {
    const all = getAllWordsForLevel(levelId);
    if (type === 'phase2') {
      pool = all.filter(w => w.wen);
    } else if (type === 'phase3') {
      pool = all.filter(w => w.def && w.wen);
    } else {
      pool = all.filter(w => w.tr && w.wrong);
    }
  }

  const fresh = pool.filter(w => {
    const key = `${levelId}|${type}|${w.en}`;
    return !levelTestState.usedWordKeys.has(key);
  });

  const picked = shuffle([...fresh]).slice(0, count);
  picked.forEach(w => {
    levelTestState.usedWordKeys.add(`${levelId}|${type}|${w.en}`);
  });
  return picked;
}

function lt_hasType(levelId, type) {
  if (type === 'exam')   return LT_HAS_EXAM.has(levelId);
  if (type === 'phase2') return true;
  if (type === 'phase3') return LT_HAS_DEF.has(levelId);
  return true;
}

function lt_buildQueue(levelId, totalCount) {
  const queue   = [];
  const types   = ['normal', 'phase2', 'phase3', 'exam'];
  const perType = Math.floor(totalCount / 4);
  const remainder = totalCount % 4;

  types.forEach((type, i) => {
    const count = perType + (i < remainder ? 1 : 0);
    if (lt_hasType(levelId, type)) {
      const words = lt_pickFreshWords(levelId, count, type);
      words.forEach(w => queue.push({ word: w, qType: type }));
      const missing = count - words.length;
      if (missing > 0) {
        const extra = lt_pickFreshWords(levelId, missing, 'normal');
        extra.forEach(w => queue.push({ word: w, qType: 'normal' }));
      }
    } else {
      const words = lt_pickFreshWords(levelId, count, 'normal');
      words.forEach(w => queue.push({ word: w, qType: 'normal' }));
    }
  });

  return shuffle(queue);
}

function lt_renderQuestion(entry, phaseLabel) {
  const { word, qType } = entry;
  const asked = levelTestState.totalAsked;

  elProgressFill.style.width = `${(asked / LT_TOTAL) * 100}%`;
  elQCounter.textContent     = `${asked + 1} / ${LT_TOTAL}`;

  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;

  // Normal quiz body strukturunu bərpa et (exam render onu dəyişmiş ola bilər)
  const quizBody = document.querySelector('.quiz-body');
  quizBody.className = 'quiz-body';
  quizBody.innerHTML = `
    <div class="question-card">
      <div class="question-hint" id="question-hint"></div>
      <div class="question-word" id="question-word"></div>
    </div>
    <div class="options-grid">
      <button class="option-btn" id="opt-0"></button>
      <button class="option-btn" id="opt-1"></button>
    </div>
  `;

  // DOM ref-ləri yenilə
  const hint = document.getElementById('question-hint');
  const word_el = document.getElementById('question-word');
  const opt0 = document.getElementById('opt-0');
  const opt1 = document.getElementById('opt-1');

  opt0.addEventListener('click', () => handleAnswer(0));
  opt1.addEventListener('click', () => handleAnswer(1));

  if (qType === 'exam') {
    const sentence = word.en.replace('____', '_____');
    word_el.textContent = sentence;
    word_el.style.fontSize = '20px';
    hint.textContent = `${phaseLabel} · Boşluğa uyğun sözü tap`;
    const opts = quiz.correctPos === 0 ? [word.tr, word.wrong] : [word.wrong, word.tr];
    opt0.textContent = capitalize(opts[0]);
    opt1.textContent = capitalize(opts[1]);
  } else if (qType === 'phase2') {
    word_el.textContent = capitalize(word.tr);
    hint.textContent = `${phaseLabel} · İngilis sözünü tap`;
    const opts = quiz.correctPos === 0 ? [word.en, word.wen] : [word.wen, word.en];
    opt0.textContent = capitalize(opts[0]);
    opt1.textContent = capitalize(opts[1]);
  } else if (qType === 'phase3') {
    word_el.textContent = word.def;
    word_el.style.fontSize = '20px';
    hint.textContent = `${phaseLabel} · Tərifə uyğun sözü tap`;
    const opts = quiz.correctPos === 0 ? [word.en, word.wen] : [word.wen, word.en];
    opt0.textContent = capitalize(opts[0]);
    opt1.textContent = capitalize(opts[1]);
  } else {
    word_el.textContent = capitalize(word.en);
    hint.textContent = `${phaseLabel} · Düzgün tərcüməni tap`;
    const opts = quiz.correctPos === 0 ? [word.tr, word.wrong] : [word.wrong, word.tr];
    opt0.textContent = capitalize(opts[0]);
    opt1.textContent = capitalize(opts[1]);
  }

  opt0.className = 'option-btn';
  opt1.className = 'option-btn';
  opt0.disabled  = false;
  opt1.disabled  = false;
  quiz.locked    = false;
}

// ══════════════════════════════════════════════════════════
//  PHASE 1
// ══════════════════════════════════════════════════════════

function startLevelTest() {
  Object.assign(levelTestState, {
    phase:               1,
    totalAsked:          0,
    p1_lo:               0,
    p1_hi:               LEVEL_ORDER.length - 1,
    p1_mid:              -1,
    p1_words:            [],
    p1_wordIdx:          0,
    p1_correct:          0,
    p1_results:          {},
    p2_levelId:          null,
    p2_queue:            [],
    p2_idx:              0,
    p2_weightedScore:    0,
    p2_weightedMax:      0,
    p3_levelId:          null,
    p3_queue:            [],
    p3_idx:              0,
    p3_weightedScore:    0,
    p3_weightedMax:      0,
    finalLevelId:        null,
    usedWordKeys:        new Set(),
  });

  quiz.mode         = 'leveltest';
  quiz.levelIdx     = null;
  quiz.quizIdx      = null;
  quiz.index        = 0;
  quiz.mistakes     = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;

  // Quiz body-ni normal struktura gətir
  restoreNormalQuizBody();

  showQuizScreen();
  lt_startPhase1();
}

function lt_startPhase1() {
  const mid     = Math.floor((levelTestState.p1_lo + levelTestState.p1_hi) / 2);
  const levelId = LEVEL_ORDER[mid];

  levelTestState.p1_mid     = mid;
  levelTestState.p1_wordIdx = 0;
  levelTestState.p1_correct = 0;

  const words = lt_pickFreshWords(levelId, LT_P1_PER_LEVEL, 'normal');
  if (words.length === 0) {
    lt_evalPhase1Block(false);
    return;
  }

  levelTestState.p1_words = words;
  lt_showPhase1Q();
}

function lt_showPhase1Q() {
  const word  = levelTestState.p1_words[levelTestState.p1_wordIdx];
  const entry = { word, qType: 'normal' };
  lt_renderQuestion(entry, `Skan: ${LEVEL_ORDER[levelTestState.p1_mid].toUpperCase()}`);
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

  if (passed) { levelTestState.p1_lo = mid + 1; }
  else        { levelTestState.p1_hi = mid - 1; }

  const maxReached = levelTestState.totalAsked >= 10;
  const rangeEmpty = levelTestState.p1_lo > levelTestState.p1_hi;

  if (rangeEmpty || maxReached) lt_finishPhase1();
  else lt_startPhase1();
}

function lt_finishPhase1() {
  let zoneIdx = 0;
  const results = levelTestState.p1_results;
  const keys    = Object.keys(results);

  if (keys.length > 0) {
    const allFailed = keys.every(k => results[k] === false);
    if (!allFailed) {
      for (let i = LEVEL_ORDER.length - 1; i >= 0; i--) {
        if (results[LEVEL_ORDER[i]] === true) { zoneIdx = i; break; }
      }
    }
  }

  levelTestState.p2_levelId = LEVEL_ORDER[zoneIdx];
  lt_startPhase2();
}

// ══════════════════════════════════════════════════════════
//  PHASE 2
// ══════════════════════════════════════════════════════════

function lt_startPhase2() {
  levelTestState.phase            = 2;
  levelTestState.p2_idx           = 0;
  levelTestState.p2_weightedScore = 0;
  levelTestState.p2_weightedMax   = 0;

  const queue = lt_buildQueue(levelTestState.p2_levelId, LT_P2_TOTAL);
  levelTestState.p2_queue = queue;

  if (queue.length === 0) { lt_finishPhase2(); return; }
  lt_showPhase2Q();
}

function lt_showPhase2Q() {
  const entry  = levelTestState.p2_queue[levelTestState.p2_idx];
  const lvlId  = levelTestState.p2_levelId;
  const localI = levelTestState.p2_idx + 1;
  const localT = levelTestState.p2_queue.length;
  lt_renderQuestion(entry, `${lvlId.toUpperCase()} (${localI}/${localT})`);
}

function lt_handlePhase2(isCorrect) {
  const entry  = levelTestState.p2_queue[levelTestState.p2_idx];
  const lvlId  = levelTestState.p2_levelId;
  const lw     = LT_LEVEL_WEIGHTS[lvlId] || 1;
  const tw     = LT_TYPE_WEIGHTS[entry.qType] || 1.0;
  const maxPts = lw * tw;

  levelTestState.totalAsked++;
  levelTestState.p2_weightedMax += maxPts;
  if (isCorrect) levelTestState.p2_weightedScore += maxPts;
  levelTestState.p2_idx++;

  setTimeout(() => {
    if (levelTestState.p2_idx < levelTestState.p2_queue.length) lt_showPhase2Q();
    else lt_finishPhase2();
  }, 500);
}

function lt_finishPhase2() {
  const max     = levelTestState.p2_weightedMax || 1;
  const pct     = levelTestState.p2_weightedScore / max;
  const zoneIdx = LEVEL_ORDER.indexOf(levelTestState.p2_levelId);

  if (pct < LT_P2_WEAK && zoneIdx > 0) {
    levelTestState.finalLevelId = LEVEL_ORDER[zoneIdx - 1];
  } else {
    levelTestState.finalLevelId = levelTestState.p2_levelId;
  }

  const canUpgrade = zoneIdx < LEVEL_ORDER.length - 1;
  if (pct >= LT_P2_STRONG && canUpgrade) {
    levelTestState.p3_levelId = LEVEL_ORDER[zoneIdx + 1];
    lt_startPhase3();
  } else {
    finishLevelTest();
  }
}

// ══════════════════════════════════════════════════════════
//  PHASE 3
// ══════════════════════════════════════════════════════════

function lt_startPhase3() {
  levelTestState.phase            = 3;
  levelTestState.p3_idx           = 0;
  levelTestState.p3_weightedScore = 0;
  levelTestState.p3_weightedMax   = 0;

  const queue = lt_buildQueue(levelTestState.p3_levelId, LT_P3_TOTAL);
  levelTestState.p3_queue = queue;

  if (queue.length === 0) { finishLevelTest(); return; }
  lt_showPhase3Q();
}

function lt_showPhase3Q() {
  const entry  = levelTestState.p3_queue[levelTestState.p3_idx];
  const lvlId  = levelTestState.p3_levelId;
  const localI = levelTestState.p3_idx + 1;
  const localT = levelTestState.p3_queue.length;
  lt_renderQuestion(entry, `${lvlId.toUpperCase()} — Yuxarı hədd (${localI}/${localT})`);
}

function lt_handlePhase3(isCorrect) {
  const entry  = levelTestState.p3_queue[levelTestState.p3_idx];
  const lvlId  = levelTestState.p3_levelId;
  const lw     = LT_LEVEL_WEIGHTS[lvlId] || 1;
  const tw     = LT_TYPE_WEIGHTS[entry.qType] || 1.0;
  const maxPts = lw * tw;

  levelTestState.totalAsked++;
  levelTestState.p3_weightedMax += maxPts;
  if (isCorrect) levelTestState.p3_weightedScore += maxPts;
  levelTestState.p3_idx++;

  setTimeout(() => {
    if (levelTestState.p3_idx < levelTestState.p3_queue.length) lt_showPhase3Q();
    else lt_finishPhase3();
  }, 500);
}

function lt_finishPhase3() {
  const max = levelTestState.p3_weightedMax || 1;
  const pct = levelTestState.p3_weightedScore / max;
  if (pct >= (LT_P3_UPGRADE / LT_P3_TOTAL)) {
    levelTestState.finalLevelId = levelTestState.p3_levelId;
  }
  finishLevelTest();
}

function lt_handleAnswer(isCorrect) {
  switch (levelTestState.phase) {
    case 1: lt_handlePhase1(isCorrect); break;
    case 2: lt_handlePhase2(isCorrect); break;
    case 3: lt_handlePhase3(isCorrect); break;
  }
}

// ══════════════════════════════════════════════════════════
//  NƏTİCƏ — finishLevelTest
// ══════════════════════════════════════════════════════════

function finishLevelTest() {
  elProgressFill.style.width = '100%';

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');

    const lvlId   = levelTestState.finalLevelId || 'a1';
    const info    = LEVEL_INFO[lvlId] || {};
    const lvlData = LEVELS.find(l => l.id === lvlId);

    const p2max = levelTestState.p2_weightedMax || 1;
    const p2pct = Math.round((levelTestState.p2_weightedScore / p2max) * 100);

    let strengthLabel, strengthEmoji;
    if (p2pct >= 85)      { strengthLabel = 'Möhkəm';    strengthEmoji = '💪'; }
    else if (p2pct >= 70) { strengthLabel = 'Yaxşı';     strengthEmoji = '👍'; }
    else if (p2pct >= 55) { strengthLabel = 'Orta';      strengthEmoji = '📖'; }
    else if (p2pct >= 40) { strengthLabel = 'Zəif';      strengthEmoji = '📚'; }
    else                  { strengthLabel = 'Başlanğıc'; strengthEmoji = '🌱'; }

    elResultEmoji.textContent = '🎓';
    elResultTitle.textContent = 'Nəticən hazırdır!';
    elResultDesc.textContent  =
      `${strengthEmoji} ${info.label || lvlId.toUpperCase()} · ${strengthLabel} (${p2pct}%)`;

    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.remove('hidden');

    elLevelResultBadge.textContent      = lvlData ? lvlData.icon : '📚';
    elLevelResultBadge.style.background = lvlData ? lvlData.color : '#999';
    elLevelResultName.textContent       = info.label  || lvlId.toUpperCase();
    elLevelResultIelts.textContent      = `IELTS: ${info.ielts || '—'}`;
    elLevelResultDesc.textContent       = info.desc   || '';

    elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
    elResultMainBtn.onclick = () => { closeOverlays(); renderLevels(); };
    elResultBackBtn.classList.add('hidden');
  }, 300);
}

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
// SONRA:
function findNextPlayableQuiz(levelIdx, afterQuizIdx) {
  const lvl = LEVELS[levelIdx];
  for (let i = afterQuizIdx + 1; i < lvl.quizzes.length; i++) {
    const item = lvl.quizzes[i];
    if (item && !Array.isArray(item) && item.type === 'section_divider') continue;
    if (item && !Array.isArray(item) && item.type === 'grammar_lesson') return i;
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

      // ── Section divider — progress-ə daxil edilmir ──
      const item = lvl.quizzes[i];
      if (item && !Array.isArray(item) && item.type === 'section_divider') {
        progress[lvl.id][i] = 'divider';
        continue;
      }
      
const isExam = EXAM_IDS[lvl.id] && EXAM_IDS[lvl.id].has(i);
if (!progress[lvl.id][i]) {
  const isOpenSection = lvl.id === 'reading' || lvl.id === 'listening'
    || lvl.id === 'kids' || lvl.id === 'grammar' || lvl.id === 'verbs'
    || lvl.id === 'passive' || lvl.id === 'indirect_speech'
    || lvl.id === 'sequence_tenses' || lvl.id === 'adjectives'
    || lvl.id === 'pronoun' || lvl.id === 'article' || lvl.id === 'questions'
    || lvl.id === 'modal_verbs' || lvl.id === 'prepositions'
    || lvl.id === 'adverb' || lvl.id === 'complex_object'
    || lvl.id === 'subject_verb_agreement' || lvl.id === 'imperative'
    || lvl.id === 'exclamatory';

  if (isOpenSection) {
    progress[lvl.id][i] = 'unlocked';
  } else if (i === 0) {
    progress[lvl.id][i] = 'unlocked';
  } else if (isExam) {
    progress[lvl.id][i] = 'unlocked'; // ← exam həmişə açıq
  } else {
    progress[lvl.id][i] = 'locked';
  }
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
  const cur = progress[lvl.id][quizIdx];
  if (isExamItem(lvl.quizzes[quizIdx], lvl.id, quizIdx)) {
    progress[lvl.id][quizIdx] = 'level_done';
    saveProgress();
    if (window.AuthManager) AuthManager.syncStats();
    return;
  }
  if (cur === 'phase2_completed') {
    progress[lvl.id][quizIdx] = 'phase3_unlocked';
    saveProgress();
    if (window.AuthManager) AuthManager.syncStats();
    return;
  }
  if (cur === 'phase3_unlocked') {
    progress[lvl.id][quizIdx] = 'level_done';
    saveProgress();
    if (window.AuthManager) AuthManager.syncStats();
    return;
  }
  
  if (isExamItem(lvl.quizzes[quizIdx], lvl.id, quizIdx)) {
  progress[lvl.id][quizIdx] = 'level_done';
  saveProgress();
  if (window.AuthManager) AuthManager.syncStats();
  return;
}
  const wasCompleted = ['completed','phase2_completed','phase3_unlocked','level_done'].includes(cur);
  progress[lvl.id][quizIdx] = 'completed';

  const next = quizIdx + 1;
  if (next < lvl.quizzes.length && progress[lvl.id][next] === 'locked') {
    progress[lvl.id][next] = 'unlocked';
  }

  if (!wasCompleted) {
    addStar();
    Stats.addStar(1);
  }

  const today = new Date().toISOString().slice(0, 10);
  const lastDate = localStorage.getItem('wordpath_last_date') || '';
  const streak   = parseInt(localStorage.getItem('wordpath_streak') || '0', 10);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (lastDate === today) {
  } else if (lastDate === yStr) {
    localStorage.setItem('wordpath_streak', String(streak + 1));
    localStorage.setItem('wordpath_last_date', today);
  } else {
    localStorage.setItem('wordpath_streak', '1');
    localStorage.setItem('wordpath_last_date', today);
  }

  saveProgress();
  if (window.AuthManager) AuthManager.syncStats();
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

const elLevelList        = $('level-list');
const elQuizScreen       = $('quiz-screen');
const elResultScreen     = $('result-screen');
const elProgressFill     = $('progress-fill');
const elQCounter         = $('q-counter');
const elQuestionWord     = $('question-word');
const elQuestionHint     = $('question-hint');
const elOpt0             = $('opt-0');
const elOpt1             = $('opt-1');
const elQuitBtn          = $('quit-btn');
const elResultEmoji      = $('result-emoji');
const elResultTitle      = $('result-title');
const elResultDesc       = $('result-desc');
const elResultStats      = $('result-stats');
const elStatCorrect      = $('stat-correct');
const elStatWrong        = $('stat-wrong');
const elStatPct          = $('stat-pct');
const elLevelResultCard  = $('level-result-card');
const elLevelResultBadge = $('level-result-badge');
const elLevelResultName  = $('level-result-name');
const elLevelResultIelts = $('level-result-ielts');
const elLevelResultDesc  = $('level-result-desc');
const elResultMainBtn    = $('result-main-btn');
const elResultBackBtn    = $('result-back-btn');
const elToast            = $('toast');
const elChanceModal      = $('chance-modal');
const elChanceAccept     = $('chance-accept');
const elChanceDecline    = $('chance-decline');
const elChanceStars      = $('chance-stars');
const elReviewModal      = $('review-modal');
const elReviewLevelGrid  = $('review-level-grid');
const elReviewClose      = $('review-close');

// ── Quiz body-ni normal struktura bərpa et ────────────────
// Exam word-match render quiz body-ni tamamilə dəyişir,
// normal quiz üçün əvvəlki strukturu bərpa etmək lazım olur
function restoreNormalQuizBody() {
  const quizBody = document.querySelector('.quiz-body');
  if (!quizBody) return;
  quizBody.className = 'quiz-body';
  quizBody.innerHTML = `
    <div class="question-card">
      <div class="question-hint" id="question-hint"></div>
      <div class="question-word" id="question-word"></div>
    </div>
    <div class="options-grid">
      <button class="option-btn" id="opt-0"></button>
      <button class="option-btn" id="opt-1"></button>
    </div>
  `;
  // Event listenerları yenidən qoş
  document.getElementById('opt-0').addEventListener('click', () => handleAnswer(0));
  document.getElementById('opt-1').addEventListener('click', () => handleAnswer(1));
}

const iconStyles = {
  'a1':              { background: '#f9e5e3', borderColor: '#e8b3ae', color: '#8B1A11' },
  'a2':              { background: '#fdf0e0', borderColor: '#f5c98a', color: '#9A4F08' },
  'b1':              { background: '#fdf8e1', borderColor: '#f0d060', color: '#7D6608' },
  'b2':              { background: '#e4f7ed', borderColor: '#82d9a8', color: '#145A32' },
  'c1':              { background: '#e3f0fa', borderColor: '#85bce0', color: '#1A4971' },
  'c2':              { background: '#d5dde3', borderColor: '#8fa5b3', color: '#0D1317' },
  'reading':         { background: '#e0f2fe', borderColor: '#7dd3fc', color: '#0369a1' },
  'listening':       { background: '#ede9fe', borderColor: '#c4b5fd', color: '#6d28d9' },
  'kids':            { background: '#fce4f0', borderColor: '#f48cbf', color: '#9C1260' },
  'grammar': { background: '#FDF8F0', borderColor: '#D4A96A', color: '#78350F' },
  'verbs':           { background: '#FEF3E2', borderColor: '#FBBD3E', color: '#92400E' },
  'passive':         { background: '#EFF6FF', borderColor: '#93C5FD', color: '#1E3A5F' },
  'indirect_speech': { background: '#ECFDF5', borderColor: '#6EE7B7', color: '#065F46' },
  'adjectives':      { background: '#FDF2F8', borderColor: '#F0ABFC', color: '#86198F' },
  'sequence_tenses': { background: '#ECFFFE', borderColor: '#5EEAD4', color: '#134E4A' },
  'pronoun':         { background: '#EEF2FF', borderColor: '#A5B4FC', color: '#3730A3' },
  'article':         { background: '#FFFBEB', borderColor: '#FCD34D', color: '#78350F' },
  'questions':       { background: '#E0F2FE', borderColor: '#7DD3FC', color: '#0C4A6E' },
  'modal_verbs':     { background: '#F0FDF4', borderColor: '#86EFAC', color: '#14532D' },
  'prepositions':    { background: '#FFF7ED', borderColor: '#FDBA74', color: '#7C2D12' },
  'adverb':          { background: '#FDF4FF', borderColor: '#E879F9', color: '#701A75' },
  'complex_object':  { background: '#EFF6FF', borderColor: '#60A5FA', color: '#1E3A5F' },
  'subject_verb_agreement': { background: '#ECFDF5', borderColor: '#34D399', color: '#064E3B' },
  'imperative':      { background: '#FFF1F2', borderColor: '#FDA4AF', color: '#881337' },
  'exclamatory':     { background: '#FFFBEB', borderColor: '#FDE68A', color: '#92400E' },
};


// ── Render level list ─────────────────────────────────────
function renderLevels() {
  renderStarCount();
  elLevelList.innerHTML = '';
  const kidsList = document.getElementById('kids-list');
  const grammarList = document.getElementById('grammar-list');
  const skillsPage = document.getElementById('skills-page-content');
  if (kidsList) kidsList.innerHTML = '';
  if (grammarList) grammarList.innerHTML = '';
  if (skillsPage) {
  const geList = skillsPage.querySelector('#ge-list');
  skillsPage.innerHTML = '';
  if (geList) skillsPage.appendChild(geList);
}
  
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
    card.dataset.level = lvl.id;
    card.dataset.levelIdx = li;

    const iStyle = iconStyles[lvl.id];
    const iconInlineStyle = iStyle
      ? `style="background:${iStyle.background}; border:1.5px solid ${iStyle.borderColor}; color:${iStyle.color}; width:42px; height:42px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:13px; font-weight:800;"`
      : '';

    card.innerHTML = `
      <div class="level-header" role="button" aria-expanded="false">
        <div class="level-bar" style="background:${lvl.color}"></div>
        <span class="level-icon" ${iconInlineStyle}>${lvl.icon}</span>
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
        if (!item) {
          showToast('Bu test hələ hazır deyil ✏️');
          return;
        }
        if (Array.isArray(item) && item.length < 2) {
          showToast('Bu test hələ hazır deyil ✏️');
          return;
        }

        startQuiz(li, qi);
      });
    });

    if (lvl.id === 'reading' || lvl.id === 'listening') {
      const skillsPage = document.getElementById('skills-page-content');
      if (skillsPage) skillsPage.appendChild(card);
    } else if (lvl.id === 'kids') {
      const kidsList = document.getElementById('kids-list');
      if (kidsList) kidsList.appendChild(card);
   } else if (lvl.id === 'grammar') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'verbs') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'passive') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'indirect_speech') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'sequence_tenses') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'adjectives') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'sequence_tenses') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'pronoun') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'article') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'questions') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'modal_verbs') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'prepositions') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'adverb') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'complex_object') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'subject_verb_agreement') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'imperative') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (lvl.id === 'exclamatory') {
  const grammarList = document.getElementById('grammar-list');
  if (grammarList) grammarList.appendChild(card);
} else if (GENERAL_ENGLISH_LEVELS.some(l => l.id === lvl.id)) {
  const geList = document.getElementById('ge-list');
  if (geList) geList.appendChild(card);
} else {
  elLevelList.appendChild(card);
}
  });
  window.dispatchEvent(new CustomEvent('renderLevelsDone'));
}

// ============================================================
//  READING QUIZ
// ============================================================

function startReadingQuiz(levelIdx, quizIdx) {
  const lvl  = LEVELS[levelIdx];
  const item = lvl.quizzes[quizIdx]; 

  readingState.levelIdx = levelIdx;
  readingState.quizIdx  = quizIdx;
  readingState.item     = item;
  readingState.queue    = item.questions.map((_, i) => i);
  readingState.skipped  = [];
  readingState.correct  = 0;
  readingState.wrong    = 0;

  quiz.mode   = 'reading';
  quiz.locked = false;

  showQuizScreen();
  renderReadingQuestion();
}

function renderReadingQuestion() {
  if (readingState.queue.length === 0) {
    if (readingState.skipped.length > 0) {
      readingState.queue   = [...readingState.skipped];
      readingState.skipped = [];
    } else {
      finishReadingQuiz();
      return;
    }
  }

  const qIdx  = readingState.queue[0];
  const q     = readingState.item.questions[qIdx];
  const item  = readingState.item;
  const total = item.questions.length;
  const done  = readingState.correct + readingState.wrong;

  elProgressFill.style.width = `${(done / total) * 100}%`;
  elQCounter.textContent     = `${done + 1}/${total}`;

  const quizBody = document.querySelector('.quiz-body');
  quizBody.classList.add('reading-mode');
  quiz.locked = false;

  const optLabels = ['A', 'B', 'C', 'D', 'E'];

  const textBlock = `
  <div class="reading-text-card" id="reading-text-card">
    <div class="reading-text-title">${item.title}</div>
    <div class="reading-text-content">${item.text}</div>
  </div>
  <div class="reading-resizer" id="reading-resizer"></div>
`;

  // ── MCQ (5 variant) ──────────────────────────────────
  if (q.type === 'mcq') {
    quizBody.innerHTML = `
      <div class="reading-layout">
        ${textBlock}
        <div class="reading-question-area">
          <div class="reading-question-text">${q.q}</div>
          <div class="reading-options-grid">
            ${q.options.map((opt, i) => `
              <button class="reading-option-btn" data-opt="${i}">
                <span class="reading-opt-label">${optLabels[i]}</span>
                ${opt}
              </button>
            `).join('')}
          </div>
          <button class="reading-skip-btn" id="reading-skip">Keç →</button>
        </div>
      </div>
    `;

    quizBody.querySelectorAll('.reading-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleReadingAnswer(parseInt(btn.dataset.opt), q);
      });
    });

    document.getElementById('reading-skip').addEventListener('click', () => {
      if (quiz.locked) return;
      readingState.skipped.push(readingState.queue.shift());
      renderReadingQuestion();
      
    });

  // ── TRUE/FALSE ────────────────────────────────────────
  } else if (q.type === 'truefalse') {
    // userAnswers: null = cavablanmayıb, true/false = seçilib
    const userAnswers = new Array(q.statements.length).fill(null);

    const renderTFCards = () => {
      const grid = document.getElementById('tf-cards-grid');
      if (!grid) return;

      grid.innerHTML = q.statements.map((stmt, i) => {
        const ua = userAnswers[i];
        const isAnswered = ua !== null;
        const isCorrect  = ua === stmt.answer;

        let trueClass  = 'tf-btn tf-true';
        let falseClass = 'tf-btn tf-false';

        if (isAnswered) {
          // True düyməsi
          if (stmt.answer === true) {
            trueClass += ua === true ? ' tf-correct' : ' tf-show-correct';
          } else {
            if (ua === true) trueClass += ' tf-wrong';
          }
          // False düyməsi
          if (stmt.answer === false) {
            falseClass += ua === false ? ' tf-correct' : ' tf-show-correct';
          } else {
            if (ua === false) falseClass += ' tf-wrong';
          }
        }

        return `
          <div class="tf-card ${isAnswered ? 'tf-card-done' : ''}" data-idx="${i}">
            <div class="tf-statement">
              <span class="tf-num">${i + 1}.</span>
              ${stmt.text}
            </div>
            <div class="tf-btns">
              <button class="${trueClass}"
                data-idx="${i}" data-val="true"
                ${isAnswered ? 'disabled' : ''}>True</button>
              <button class="${falseClass}"
                data-idx="${i}" data-val="false"
                ${isAnswered ? 'disabled' : ''}>False</button>
            </div>
          </div>
        `;
      }).join('');

      // Event listenerlar
      grid.querySelectorAll('.tf-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (quiz.locked) return;
          const idx = parseInt(btn.dataset.idx);
          const val = btn.dataset.val === 'true';
          if (userAnswers[idx] !== null) return;

          userAnswers[idx] = val;
          const isCorrect = val === q.statements[idx].answer;
          if (!isCorrect) readingState.wrong++;

          renderTFCards();

          // Hamısı cavablanıbsa
          const allDone = userAnswers.every(a => a !== null);
          if (allDone) {
            const wrongCount = userAnswers.filter((a, i) => a !== q.statements[i].answer).length;
            const correctCount = q.statements.length - wrongCount;
            readingState.correct += correctCount;

            // wrong artıq bənd-bənd sayıldı, correct isə yuxarıda
            // Amma biz bütün sualı 1 vahid sayırıq progress üçün
            readingState.queue.shift();

            setTimeout(() => {
              quiz.locked = false;
              renderReadingQuestion();
            }, 1000);
          }
        });
      });
    };

    quizBody.innerHTML = `
      <div class="reading-layout">
        ${textBlock}
        <div class="reading-question-area">
          <div class="reading-question-text">${q.q}</div>
          <div class="tf-cards-grid" id="tf-cards-grid"></div>
          <button class="reading-skip-btn" id="reading-skip">Keç →</button>
        </div>
      </div>
    `;

    renderTFCards();

    document.getElementById('reading-skip').addEventListener('click', () => {
      if (quiz.locked) return;
      readingState.skipped.push(readingState.queue.shift());
      renderReadingQuestion();
    });
  }
// ── Resizer ──────────────────────────────────────────────
  requestAnimationFrame(() => {
    const resizer  = document.getElementById('reading-resizer');
    const textCard = document.getElementById('reading-text-card');
    const layout   = resizer?.closest('.reading-layout');
    if (!resizer || !textCard || !layout) return;

    // Əvvəlki hündürlük varsa tətbiq et
    if (readingState.textCardHeight) {
      textCard.style.height = `${readingState.textCardHeight}px`;
    }

    let startY = 0, startHeight = 0;

    resizer.addEventListener('mousedown', onMouseDown);
    resizer.addEventListener('touchstart', onTouchStart, { passive: true });

    function onMouseDown(e) {
      startY = e.clientY; startHeight = textCard.offsetHeight;
      resizer.classList.add('dragging');
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
    function onTouchStart(e) {
      startY = e.touches[0].clientY; startHeight = textCard.offsetHeight;
      resizer.classList.add('dragging');
      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
    }
    function onMouseMove(e) {
      const newH = Math.min(Math.max(startHeight + (e.clientY - startY), 80), layout.offsetHeight - 80);
      textCard.style.height = `${newH}px`;
      readingState.textCardHeight = newH;
    }
    function onTouchMove(e) {
      e.preventDefault();
      const newH = Math.min(Math.max(startHeight + (e.touches[0].clientY - startY), 80), layout.offsetHeight - 80);
      textCard.style.height = `${newH}px`;
      readingState.textCardHeight = newH;
    }
    function onMouseUp() {
      resizer.classList.remove('dragging');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    function onTouchEnd() {
      resizer.classList.remove('dragging');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    }
  });
}

function handleReadingAnswer(optIdx, q) {
  if (quiz.locked) return;
  quiz.locked = true;
  const isCorrect = q.options[optIdx] === q.answer;
  document.querySelectorAll('.reading-option-btn').forEach(btn => {
    btn.disabled = true;
    const i = parseInt(btn.dataset.opt);
    if (q.options[i] === q.answer)      btn.classList.add('reading-opt-correct');
    else if (i === optIdx && !isCorrect) btn.classList.add('reading-opt-wrong');
  });
  const skipBtn = document.getElementById('reading-skip');
  if (skipBtn) skipBtn.style.display = 'none';
  if (isCorrect) readingState.correct++;
  else           readingState.wrong++;
  readingState.queue.shift();
  setTimeout(() => {
    quiz.locked = false;
    renderReadingQuestion();
  }, 800);
}

function finishReadingQuiz() {
  elProgressFill.style.width = '100%';

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.remove('hidden');
    elLevelResultCard.classList.add('hidden');

    const total   = readingState.item.questions.length;
    const correct = readingState.correct;
    const wrong   = readingState.wrong;
    const pct     = Math.round((correct / total) * 100);

    let emoji, title;
    if (pct === 100)    { emoji = '🏆'; title = 'Əla nəticə!'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
    else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
    else if (pct >= 40) { emoji = '📚'; title = 'Daha çox oxu!'; }
    else                { emoji = '💪'; title = 'Davam et!'; }

    elResultEmoji.textContent = emoji;
    elResultTitle.textContent = title;
    elResultDesc.textContent  = `${readingState.item.title} — ${total} sualdan ${correct} düzgün`;
    elStatCorrect.textContent = correct;
    elStatWrong.textContent   = wrong;
    elStatPct.textContent     = `${pct}%`;

    markCompleted(readingState.levelIdx, readingState.quizIdx);

    elResultMainBtn.textContent = 'Yenidən cəhd et';
    elResultMainBtn.onclick = () => startReadingQuiz(readingState.levelIdx, readingState.quizIdx);

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      const li = readingState.levelIdx;
      closeOverlays();
      renderLevels();
      scrollToCurrentNode(li);
    };
  }, 300);
}

function renderReadingPath(lvl, li) {
  let html = '<div class="reading-quiz-grid">';

  lvl.quizzes.forEach((item, qi) => {
    const status    = getStatus(li, qi);
    const isDone    = ['completed','phase2_completed','phase3_unlocked','level_done'].includes(status);
    const isLocked  = status === 'locked';

    let nodeClass = 'reading-grid-node path-node';
    if (isDone)       nodeClass += ' reading-node-done';
    else if (isLocked) nodeClass += ' reading-node-locked';
    else               nodeClass += ' reading-node-unlocked';

    const title = (item && item.title) ? item.title : `Reading ${qi + 1}`;

const circleInner = isDone
  ? `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  : isLocked
  ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${'var(--locked)'}" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  : `${qi + 1}`;

html += `
  <div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}">
    <div class="reading-node-circle">${circleInner}</div>
    <div class="reading-node-title">${title}</div>
  </div>
`;
  });

  html += '</div>';
  return html;
}

function renderQuizPath(lvl, li) {

  if (GENERAL_ENGLISH_LEVELS.some(l => l.id === lvl.id)) {
  return renderGeneralEnglishPath(lvl, lvl.id);
  }
  if (lvl.id === 'reading') {
    return renderReadingPath(lvl, li);
  }
  if (lvl.id === 'listening') {
  return renderListeningPath(lvl, li);
}
if (lvl.id === 'grammar' || lvl.id === 'verbs' || lvl.id === 'passive'
  || lvl.id === 'indirect_speech' || lvl.id === 'sequence_tenses'
  || lvl.id === 'adjectives' || lvl.id === 'pronoun' || lvl.id === 'article'
  || lvl.id === 'questions' || lvl.id === 'modal_verbs'
  || lvl.id === 'prepositions' || lvl.id === 'adverb'
  || lvl.id === 'complex_object' || lvl.id === 'subject_verb_agreement'
  || lvl.id === 'imperative' || lvl.id === 'exclamatory') {
  return renderGrammarPath(lvl, li);
}


  
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

 const inner = isExam
  ? '🏆'
  : `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
 if (status === 'level_done') {
  const nodeClass = isExam ? 'path-node level-done exam-node' : 'path-node level-done';
  const examInner = isExam ? '🏆' : inner;
  html += `<div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}" style="--lvl-color:${lvl.color}">${examInner}</div>`;
} else if (status === 'phase3_unlocked') {
      const nodeClass = isExam ? 'path-node phase3-open exam-node' : 'path-node phase3-open';
      html += `<div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}">${inner}</div>`;
    } else if (status === 'phase2_completed') {
      const nodeClass = isExam ? 'path-node phase2-done exam-node' : 'path-node phase2-done';
      html += `<div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}" style="--lvl-color:${lvl.color}">${inner}</div>`;
    } else if (status === 'completed') {
      const nodeClass = isExam ? 'path-node completed phase2-invite exam-node' : 'path-node completed phase2-invite';
      html += `<div class="${nodeClass}" data-quiz-idx="${qi}" data-status="${status}" style="--lvl-color:${lvl.color}">${inner}</div>`;
   } else if (status === 'unlocked') {
      const completedSoFar = progress[lvl.id].filter(s =>
        ['completed','phase2_completed','phase3_unlocked','level_done'].includes(s)
      ).length;
      const pulseClass = qi === completedSoFar ? 'pulse' : '';
      if (isExam) {
        html += `<div class="path-node unlocked exam-node ${pulseClass}"
             data-quiz-idx="${qi}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}; background:white;">🏆</div>`;
      } else {
        html += `<div class="path-node unlocked ${pulseClass}"
             data-quiz-idx="${qi}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}; background:white;">${quizCounter}</div>`;
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

// ── closeOverlayPanel — yenilənmiş ──────────────────────
function closeOverlayPanel(instant = false) {
  if (instant) {
    const overlay = document.getElementById('level-fullscreen-overlay');
    if (overlay) overlay.remove();
    const subtitleEl = document.getElementById('page-subtitle');
    if (subtitleEl) subtitleEl.style.display = '';
    const navDots = document.querySelector('.page-nav-dots');
    if (navDots) navDots.style.display = '';
    document.querySelectorAll('.level-card.open').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
    });
    return;
  }

  const overlay = document.getElementById('level-fullscreen-overlay');
  if (overlay) {
    const origCard = document.querySelector('.level-card.open');
    if (origCard) {
      const r = origCard.getBoundingClientRect();
      overlay.style.top       = `${r.top}px`;
      overlay.style.height    = `${r.height}px`;
      overlay.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
    }
    overlay.addEventListener('transitionend', () => {
      overlay.remove();
      document.querySelectorAll('.level-card.open').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
      });
    }, { once: true });
    setTimeout(() => {
      overlay.remove();
      document.querySelectorAll('.level-card.open').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
      });
    }, 420);
  }

  const subtitleEl = document.getElementById('page-subtitle');
  if (subtitleEl) subtitleEl.style.display = '';
  const navDots = document.querySelector('.page-nav-dots');
  if (navDots) navDots.style.display = '';
}

function toggleLevel(card) {
  if (card.dataset.ge && !document.getElementById('level-fullscreen-overlay')) {
    card.classList.remove('open');
  }
  const overlay = document.getElementById('level-fullscreen-overlay');
  const isOpen = card.classList.contains('open') || !!overlay;

// Bütün açıq kartları bağla (classList.remove-u animasiya bitənə saxla)
document.querySelectorAll('.level-card.open').forEach(c => {
  c.querySelector('.level-header').setAttribute('aria-expanded', 'false');
  const body = c.querySelector('.level-body');
  body.style.maxHeight = '0px';
  body.style.overflow = 'hidden';
});

// Subtitle-i göstər
const subtitleEl = document.getElementById('page-subtitle');
if (subtitleEl) subtitleEl.style.display = '';
const navDots = document.querySelector('.page-nav-dots');
if (navDots) navDots.style.display = '';

// Overlay-i animasiya ilə bağla
const existingOverlay = document.getElementById('level-fullscreen-overlay');
if (existingOverlay) {
  const openCard = document.querySelector('.level-card.open');
  if (openCard) {
    const r = openCard.getBoundingClientRect();
    existingOverlay.style.top       = `${r.top}px`;
    existingOverlay.style.height    = `${r.height}px`;
    existingOverlay.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
  }
  existingOverlay.addEventListener('transitionend', () => {
    existingOverlay.remove();
    document.querySelectorAll('.level-card.open').forEach(c => c.classList.remove('open'));
  }, { once: true });
  setTimeout(() => {
    existingOverlay.remove();
    document.querySelectorAll('.level-card.open').forEach(c => c.classList.remove('open'));
  }, 420);
}

  if (!isOpen) {
    card.classList.add('open');
    card.querySelector('.level-header').setAttribute('aria-expanded', 'true');
    if (subtitleEl) subtitleEl.style.display = 'none';
    const navDots = document.querySelector('.page-nav-dots');
    if (navDots) navDots.style.display = 'none';
    const appHeader = document.querySelector('.app-header');
    const headerH = appHeader ? appHeader.offsetHeight : 56;

    const rawIdx = card.dataset.levelIdx;
    const isGE   = typeof rawIdx === 'string' && rawIdx.startsWith('ge_');
    const li     = isGE ? null : parseInt(rawIdx, 10);
    const lvl    = isGE
      ? GENERAL_ENGLISH_LEVELS.find(l => l.id === rawIdx.replace('ge_', ''))
      : LEVELS[li];

if (!lvl) return;

    // Kartın pozisyasını tap
    const cardRect = card.getBoundingClientRect();
    const cardLeft = cardRect.left;
    const cardWidth = cardRect.width;
    const cardTop = cardRect.top; // ← bunu əlavə et
    
    // Kartın level bar rəngini tap
    const levelBar = card.querySelector('.level-bar');
    const barColor = levelBar ? levelBar.style.background : '#ccc';

    // Kartın header-ini tap
    const header = card.querySelector('.level-header');

    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'level-fullscreen-overlay';
    overlay.style.cssText = `
  position: fixed;
  top: ${cardTop}px;
  left: ${cardLeft}px;
  width: ${cardWidth}px;
  height: ${cardRect.height}px;
  background: ${document.documentElement.getAttribute('data-theme')==='dark' ? '#142233' : '#fff'};
  z-index: 200;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #E8E2D9;
  overflow: hidden;
  transition: top 0.35s cubic-bezier(0.4,0,0.2,1), 
              height 0.35s cubic-bezier(0.4,0,0.2,1),
              box-shadow 0.35s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
`;

    // Sticky başlıq — orijinal header stilini qoru
    const stickyHeader = document.createElement('div');
    stickyHeader.style.cssText = `
      flex-shrink: 0;
      background: ${document.documentElement.getAttribute('data-theme')==='dark' ? '#142233' : '#fff'};
      border-bottom: 1px solid ${document.documentElement.getAttribute('data-theme')==='dark' ? '#1d3348' : '#E8E2D9'};
      cursor: pointer;
      border-radius: 16px 16px 0 0;
      position: relative;
      overflow: hidden;
    `;

    // Rəngli bar
    const bar = document.createElement('div');
    bar.className = 'level-bar';
    bar.style.cssText = `background: ${barColor}; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;`;

    // Header içeriyi kopyala (bar olmadan)
    const headerInner = document.createElement('div');
    headerInner.style.cssText = `
      display: flex;
      align-items: center;
      padding: 14px 16px 14px 20px;
      gap: 12px;
    `;
    headerInner.innerHTML = header.innerHTML;

    // Mövcud level-bar-ı gizlət (ikinci bar olmasın)
    const innerBar = headerInner.querySelector('.level-bar');
    if (innerBar) innerBar.style.display = 'none';

 

const innerIcon = headerInner.querySelector('.level-icon');
if (innerIcon && iconStyles[lvl.id]) {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const s = iconStyles[lvl.id];
  
  // Dark mode üçün tünd rənglər — CSS-dəki !important blokları ilə eyni
  const darkIconStyles = {
    'a1':              { background: '#1a0e0d', borderColor: '#5a1a14', color: '#e8a09a' },
    'a2':              { background: '#1a1108', borderColor: '#5a3a10', color: '#e8b070' },
    'b1':              { background: '#161408', borderColor: '#504208', color: '#d4b840' },
    'b2':              { background: '#0a1810', borderColor: '#1a4828', color: '#4aaa70' },
    'c1':              { background: '#0a1220', borderColor: '#1a3258', color: '#4a8fe7' },
    'c2':              { background: '#0d1114', borderColor: '#2a3840', color: '#6d90a8' },
    'reading':         { background: '#091418', borderColor: '#0e3848', color: '#22b8d4' },
    'listening':       { background: '#100d1e', borderColor: '#2e1a5a', color: '#9d7aff' },
    'kids':            { background: '#1a0814', borderColor: '#5a1040', color: '#e870b0' },
    'grammar':         { background: '#100d1e', borderColor: '#2e1a5a', color: '#9d7aff' },
    'verbs':           { background: '#161408', borderColor: '#504208', color: '#d4b840' },
    'passive':         { background: '#0a1220', borderColor: '#1a3258', color: '#4a8fe7' },
    'indirect_speech': { background: '#0a1810', borderColor: '#1a4828', color: '#4aaa70' },
    'adjectives':      { background: '#1a0814', borderColor: '#5a1040', color: '#e870b0' },
    'sequence_tenses': { background: '#091418', borderColor: '#0e3848', color: '#22b8d4' },
    'pronoun':         { background: '#0e0e20', borderColor: '#2a2a5a', color: '#a5b4fc' },
    'article':         { background: '#161408', borderColor: '#504208', color: '#d4b840' },
    'questions':       { background: '#091418', borderColor: '#0e3848', color: '#7dd3fc' },
    'modal_verbs':     { background: '#0a1810', borderColor: '#1a4828', color: '#4aaa70' },
    'prepositions':    { background: '#161408', borderColor: '#504208', color: '#d4b840' },
    'adverb':          { background: '#1a0814', borderColor: '#5a1040', color: '#e870b0' },
    'complex_object':  { background: '#0a1220', borderColor: '#1a3258', color: '#4a8fe7' },
    'subject_verb_agreement': { background: '#0a1810', borderColor: '#1a4828', color: '#4aaa70' },
    'imperative':      { background: '#1a0814', borderColor: '#5a1040', color: '#e870b0' },
    'exclamatory':     { background: '#161408', borderColor: '#504208', color: '#d4b840' },
  };

  const activeStyle = isDark ? (darkIconStyles[lvl.id] || s) : s;

  innerIcon.style.background     = activeStyle.background;
  innerIcon.style.borderColor    = activeStyle.borderColor;
  innerIcon.style.color          = activeStyle.color;
  innerIcon.style.width          = '42px';
  innerIcon.style.height         = '42px';
  innerIcon.style.borderRadius   = '10px';
  innerIcon.style.display        = 'flex';
  innerIcon.style.alignItems     = 'center';
  innerIcon.style.justifyContent = 'center';
  innerIcon.style.flexShrink     = '0';
  innerIcon.style.fontSize       = '13px';
  innerIcon.style.fontWeight     = '800';
  innerIcon.style.border         = `1.5px solid ${activeStyle.borderColor}`;
}

stickyHeader.appendChild(bar);
stickyHeader.appendChild(headerInner);
stickyHeader.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleLevel(card);
});    // Scroll body
    const scrollBody = document.createElement('div');
    scrollBody.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 12px 16px 32px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      background: ${document.documentElement.getAttribute('data-theme')==='dark' ? '#142233' : '#fff'};
    `;

    // Scrollbar gizlət
    const style = document.createElement('style');
    style.textContent = `#level-fullscreen-overlay ::-webkit-scrollbar { display: none; }`;
    scrollBody.appendChild(style);

    // Quiz path render et
    const pathWrap = document.createElement('div');
    pathWrap.innerHTML = renderQuizPath(lvl, li);
    scrollBody.appendChild(pathWrap);

    // Path node click-ləri
    pathWrap.querySelectorAll('.path-node').forEach((node) => {
      node.addEventListener('click', () => {
        const qi     = parseInt(node.dataset.quizIdx, 10);
        const status = node.dataset.status;
        if (status === 'locked') { showToast('Əvvəlki testi tam bitir 🔒'); return; }
        const item = lvl.quizzes[qi];
        if (!item) { showToast('Bu test hələ hazır deyil ✏️'); return; }
        if (Array.isArray(item) && item.length < 2) { showToast('Bu test hələ hazır deyil ✏️'); return; }
        if (isGE) {
        startGeneralEnglishLesson(lvl.id, qi);
      } else {
        startQuiz(li, qi);
      }
      });
    });

    overlay.appendChild(stickyHeader);
    overlay.appendChild(scrollBody);
    document.body.appendChild(overlay);

    // Animasiya
   requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    overlay.style.top = `${headerH + 10}px`;
    overlay.style.height = `calc(100vh - ${headerH + 26}px)`;
    overlay.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
  });
});
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

  restoreNormalQuizBody();
  elQuestionHint.textContent = 'Düzgün tərcüməni tap';
  showQuizScreen();
  showQuestion();
}

// ── Retake mode ───────────────────────────────────────────
function startRetakeMode(levelIdx, quizIdx) {
  const lvl  = LEVELS[levelIdx];
  const item = lvl.quizzes[quizIdx];
  if (!item || !Array.isArray(item)) return;

  const p1words = shuffle(item.filter(w => w && w.en && w.tr && w.wrong)).slice(0, 5);
  const p2words = shuffle(item.filter(w => w && w.en && w.tr && w.wen)).slice(0, 7);
  const p3words = shuffle(item.filter(w => w && w.en && w.wen && w.def)).slice(0, 8);

  const tagged = [
    ...p1words.map(w => ({ ...w, _retakeMode: 'normal' })),
    ...p2words.map(w => ({ ...w, _retakeMode: 'phase2' })),
    ...p3words.map(w => ({ ...w, _retakeMode: 'phase3' })),
  ];

  quiz.mode         = 'retake';
  quiz.levelIdx     = levelIdx;
  quiz.quizIdx      = quizIdx;
  quiz.words        = shuffle(tagged);
  quiz.index        = 0;
  quiz.mistakes     = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;

  restoreNormalQuizBody();
  elQuestionHint.textContent = 'Qarışıq təkrar';
  showQuizScreen();
  showQuestion();
}

// ══════════════════════════════════════════════
//  NORMAL QUIZ
// ══════════════════════════════════════════════
function startQuiz(levelIdx, quizIdx) {
  closeOverlayPanel(true);
  const lvl  = LEVELS[levelIdx];
  const item = lvl.quizzes[quizIdx];

  // Section divider — tıklanmır
  if (item && !Array.isArray(item) && item.type === 'section_divider') return;

  // Grammar lesson
  if (item && !Array.isArray(item) && item.type === 'grammar_lesson') {
    startGrammarLesson(levelIdx, quizIdx);
    return;
  }
  // Kids quiz
if (lvl.id === 'kids') {
  startKidsQuiz(levelIdx, quizIdx);
  return;
}
  // Grammar bölmə quiz-ləri (array formatında)
if (lvl.id === 'grammar' && Array.isArray(item)) {
  quiz.mode     = 'normal';
  quiz.levelIdx = levelIdx;
  quiz.quizIdx  = quizIdx;
  quiz.mistakes = 0;
  quiz.index    = 0;
  quiz.locked   = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;
  quiz.words = shuffle(item.filter(w => w && w.en && w.tr && w.wrong));
  restoreNormalQuizBody();
  elQuestionHint.textContent = 'Düzgün cavabı tap';
  showQuizScreen();
  showQuestion();
  return;
}

  // Reading quiz yoxlaması
  if (item && !Array.isArray(item) && item.type === 'reading') {
    startReadingQuiz(levelIdx, quizIdx);
    return;
  }

  if (item && !Array.isArray(item) && item.type === 'listening') {
  startListeningQuiz(levelIdx, quizIdx);
  return;
}

  const status = progress[lvl.id][quizIdx];
  
  // level_done → retake
  if (status === 'level_done') {
    // Exam üçün retake yoxdur, yenidən exam başlat
    if (isExamItem(lvl.quizzes[quizIdx], lvl.id, quizIdx)) {
      startExam(levelIdx, quizIdx);
      return;
    }
    startRetakeMode(levelIdx, quizIdx);
    return;
  }

  // Exam ise exam sistemini başlat
  if (isExamItem(lvl.quizzes[quizIdx], lvl.id, quizIdx)) {
    startExam(levelIdx, quizIdx);
    return;
  }

  let mode = 'normal';
  if (status === 'completed')        mode = 'phase2';
  if (status === 'phase2_completed') mode = 'phase3';
  if (status === 'phase3_unlocked')  mode = 'phase3';

  quiz.mode         = mode;
  quiz.levelIdx     = levelIdx;
  quiz.quizIdx      = quizIdx;
  quiz.mistakes     = 0;
  quiz.index        = 0;
  quiz.locked       = false;
  quiz.chanceUsed   = false;
  quiz.chanceActive = false;


  let words;
  if (mode === 'phase2') {
    words = item.filter(w => w && w.en && w.tr && w.wen);
  } else if (mode === 'phase3') {
    words = item.filter(w => w && w.en && w.wen && w.def);
  } else {
    words = [...item];
  }

quiz.words = shuffle(words.length >= 2 ? words : (Array.isArray(item) ? [...item] : []));
  
  const hints = {
    normal: 'Düzgün tərcüməni tap',
    phase2: 'Düzgün ingilis sözünü tap',
    phase3: 'Tərifə uyğun sözü tap',
  };

  restoreNormalQuizBody();
  elQuestionHint.textContent = hints[mode];
  showQuizScreen();
  showQuestion();
}

function showQuizScreen() {
  elQuizScreen.classList.remove('hidden');
  elResultScreen.classList.add('hidden');
}

function showQuestion() {
  // elQuestionWord və elQuestionHint DOM-dan yenidən oxu (bərpa edilmiş ola bilər)
  const elQW = document.getElementById('question-word');
  const elQH = document.getElementById('question-hint');
  const elO0 = document.getElementById('opt-0');
  const elO1 = document.getElementById('opt-1');

  if (!elQW || !elO0) return;

  const word       = quiz.words[quiz.index];
  const totalWords = quiz.words.length;

  elProgressFill.style.width = `${(quiz.index / totalWords) * 100}%`;
  elQCounter.textContent = `${quiz.index + 1}/${totalWords}`;

  quiz.correctPos = Math.random() < 0.5 ? 0 : 1;

  const effectiveMode = quiz.mode === 'retake'
    ? (word._retakeMode || 'normal')
    : quiz.mode;

  if (effectiveMode === 'phase2') {
    elQW.textContent = capitalize(word.tr);
    elQW.style.fontSize = '';
    const opts = quiz.correctPos === 0 ? [word.en, word.wen] : [word.wen, word.en];
    elO0.textContent = capitalize(opts[0]);
    elO1.textContent = capitalize(opts[1]);

  } else if (effectiveMode === 'phase3') {
    elQW.textContent = word.def;
    elQW.style.fontSize = '20px';
    const opts = quiz.correctPos === 0 ? [word.en, word.wen] : [word.wen, word.en];
    elO0.textContent = capitalize(opts[0]);
    elO1.textContent = capitalize(opts[1]);

  } else {
    if (word.en && word.en.includes('____')) {
      elQW.textContent = word.en;
      elQW.style.fontSize = '20px';
      if (elQH) elQH.textContent = 'Boşluğa uyğun sözü tap';
    } else {
      elQW.textContent = capitalize(word.en);
      elQW.style.fontSize = '';
    }
    const opts = quiz.correctPos === 0 ? [word.tr, word.wrong] : [word.wrong, word.tr];
    elO0.textContent = capitalize(opts[0]);
    elO1.textContent = capitalize(opts[1]);
  }

  elO0.className = 'option-btn';
  elO1.className = 'option-btn';
  elO0.disabled  = false;
  elO1.disabled  = false;
  quiz.locked    = false;
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
  quiz.mistakes--;  // ← əlavə edildi
  Stats.useStarFix(quiz.words[quiz.index]?.en || '');
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

// ── Handle answer (normal/review/retake/leveltest) ────────
function handleAnswer(btnIdx) {
  if (quiz.locked || quiz.chanceActive) return;
  quiz.locked = true;

  const isCorrect = btnIdx === quiz.correctPos;

  const elO0 = document.getElementById('opt-0');
  const elO1 = document.getElementById('opt-1');
  if (!elO0 || !elO1) return;

  elO0.disabled = true;
  elO1.disabled = true;

  const correctBtn = quiz.correctPos === 0 ? elO0 : elO1;
  const chosenBtn  = btnIdx === 0 ? elO0 : elO1;

  if (isCorrect) {
    chosenBtn.className = 'option-btn correct';

    if (quiz.mode === 'normal' || quiz.mode === 'review') {
      const w = quiz.words[quiz.index];
      const lvlId = quiz.levelIdx !== null
        ? LEVELS[quiz.levelIdx]?.id?.toUpperCase()
        : (reviewState.levelId?.toUpperCase() || '');
      Stats.recordAnswer(w.en, lvlId, w.tr || '', true);
      if (window.AuthManager) AuthManager.syncStats()
      if (window.checkAndNotify) checkAndNotify();
    }

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

    if (quiz.mode === 'normal' || quiz.mode === 'review') {
      const w = quiz.words[quiz.index];
      const lvlId = quiz.levelIdx !== null
        ? LEVELS[quiz.levelIdx]?.id?.toUpperCase()
        : (reviewState.levelId?.toUpperCase() || '');
      Stats.recordAnswer(w.en, lvlId, w.tr || '', false);
      if (window.AuthManager) AuthManager.syncStats(); 
      if (window.checkAndNotify) checkAndNotify(); 
    }

    if (quiz.mode === 'review') reviewState.wrong++;

    if (quiz.mode === 'leveltest') {
      lt_handleAnswer(false);
      return;
    }

   if ((quiz.mode === 'normal' || quiz.mode === 'phase2' || quiz.mode === 'phase3') && !quiz.chanceUsed && quiz.mistakes === 1 && getStars() > 0) {
    setTimeout(() => { showChanceModal(); }, 800);
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

  // ── Review mode ───────────────────────────────────────
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
      elResultBackBtn.onclick = () => { closeOverlays(); closeOverlayPanel(); renderLevels(); };
    }, 250);
    return;
  }

  // ── Retake mode ───────────────────────────────────────
  if (quiz.mode === 'retake') {
    setTimeout(() => {
      elQuizScreen.classList.add('hidden');
      elResultScreen.classList.remove('hidden');

      const total   = quiz.words.length;
      const correct = total - quiz.mistakes;
      const pct     = Math.round((correct / total) * 100);

      let emoji, title;
      if (pct === 100)    { emoji = '🏆'; title = 'Əla nəticə!'; }
      else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
      else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
      else if (pct >= 40) { emoji = '📚'; title = 'Daha çox oxu!'; }
      else                { emoji = '💪'; title = 'Davam et!'; }

      elResultEmoji.textContent = emoji;
      elResultTitle.textContent = title;
      elResultDesc.textContent  = `${total} qarışıq sualdan ${correct} düzgün`;

      elResultStats.classList.remove('hidden');
      elLevelResultCard.classList.add('hidden');
      elStatCorrect.textContent = correct;
      elStatWrong.textContent   = quiz.mistakes;
      elStatPct.textContent     = `${pct}%`;

      elResultMainBtn.textContent = 'Yenidən cəhd et';
      elResultMainBtn.onclick = () => startRetakeMode(quiz.levelIdx, quiz.quizIdx);

      elResultBackBtn.classList.remove('hidden');
      elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
      elResultBackBtn.onclick = () => {
        const li = quiz.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToCurrentNode(li);
      };
    }, 250);
    return;
  }

  // ── Phase 2 / Phase 3 mode ────────────────────────────
  if (quiz.mode === 'phase2' || quiz.mode === 'phase3') {
    setTimeout(() => {
      elQuizScreen.classList.add('hidden');
      elResultScreen.classList.remove('hidden');
      elResultStats.classList.add('hidden');
      elLevelResultCard.classList.add('hidden');

      const won = quiz.mistakes === 0;

      if (won) {
        const lvl = LEVELS[quiz.levelIdx];
        if (quiz.mode === 'phase2') {
          progress[lvl.id][quiz.quizIdx] = 'phase2_completed';
          saveProgress();
          if (window.checkAndNotify) checkAndNotify();
        } else {
          progress[lvl.id][quiz.quizIdx] = 'level_done';
          saveProgress();
          if (window.checkAndNotify) checkAndNotify(); 
          
        }

        const isPhase3 = quiz.mode === 'phase3';
        elResultEmoji.textContent = isPhase3 ? '🏅' : '💜';
        elResultTitle.textContent = isPhase3 ? 'Level tamamlandı!' : 'Phase 2 tamamlandı!';
        elResultDesc.textContent  = isPhase3
          ? 'Bu leveli tam mənimsədin! 🌟'
          : `Bütün ${quiz.words.length} sözü tərsinə də bildirdin!`;

        elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
        elResultMainBtn.onclick = () => {
          const li = quiz.levelIdx;
          closeOverlays();
          renderLevels();
          scrollToCurrentNode(li);
        };
        elResultBackBtn.classList.add('hidden');

      } else {
        elResultEmoji.textContent = '😅';
        elResultTitle.textContent = 'Olmadı...';
        elResultDesc.textContent  = `${quiz.mistakes} səhv etdin. Sıfır səhv lazımdır!`;

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
    return;
  }

  // ── Normal mode ───────────────────────────────────────
  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.add('hidden');
    elLevelResultCard.classList.add('hidden');

    const won = quiz.mistakes === 0;

    if (won) {
      markCompleted(quiz.levelIdx, quiz.quizIdx);
      if (window.checkAndNotify) checkAndNotify();
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
  const lvl = LEVELS[levelIdx];
  if (!lvl) return;
  const targetCard = document.querySelector(`.level-card[data-level="${lvl.id}"]`);
  if (!targetCard) return;
  if (!targetCard.classList.contains('open')) toggleLevel(targetCard);
  const body = targetCard.querySelector('.level-body');
  const doScroll = () => {
    const node = targetCard.querySelector('.path-node.pulse')
              || targetCard.querySelector('.path-node.unlocked:last-of-type')
              || targetCard.querySelector('.path-node.unlocked');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
// opt-0 və opt-1 üçün event listenerlar showQuestion/restoreNormalQuizBody içindədir
// Burada yalnız sabit elementlər üçün
const elQuitModal   = $('quit-modal');
const elQuitConfirm = $('quit-confirm');
const elQuitCancel  = $('quit-cancel');
const elQuitRestart = $('quit-restart');
function showQuitModal() {
  elQuitModal.classList.remove('hidden');
  setTimeout(() => elQuitModal.classList.add('show'), 10);
}
function hideQuitModal() {
  elQuitModal.classList.remove('show');
  setTimeout(() => elQuitModal.classList.add('hidden'), 220);
}
function restartCurrentQuiz() {
  hideQuitModal();
  hideChanceModal();
  if (quiz.mode === 'exam')           startExam(examState.levelIdx, examState.quizIdx);
  else if (quiz.mode === 'listening') startListeningQuiz(listeningState.levelIdx, listeningState.quizIdx);
  else if (quiz.mode === 'reading')   startReadingQuiz(quiz.levelIdx, quiz.quizIdx);
  else if (quiz.mode === 'kids')      startKidsQuiz(quiz.levelIdx, quiz.quizIdx);
  else                                startQuiz(quiz.levelIdx, quiz.quizIdx);
}
elQuitBtn.addEventListener('click', showQuitModal);
elQuitConfirm.addEventListener('click', () => {
  const li = quiz.mode === 'exam' ? examState.levelIdx :
             quiz.mode === 'listening' ? listeningState.levelIdx : quiz.levelIdx;
  hideQuitModal();
  hideChanceModal();
  closeOverlays();
  restoreNormalQuizBody();
  renderLevels();
  if (li !== null) scrollToCurrentNode(li);
});
elQuitCancel.addEventListener('click', hideQuitModal);
elQuitRestart.addEventListener('click', restartCurrentQuiz);
elQuitModal.addEventListener('click', (e) => {
  if (e.target === elQuitModal) hideQuitModal();
});
elReviewClose.addEventListener('click', hideReviewModal);
elReviewModal.addEventListener('click', (e) => {
  if (e.target === elReviewModal) hideReviewModal();
});
window.restoreNormalQuizBody = restoreNormalQuizBody;
window.showQuizScreen        = showQuizScreen;
window.showQuestion          = showQuestion;
window.quiz                  = quiz;
window.elQuestionHint        = elQuestionHint;
// ══════════════════════════════════════════
//  5-PAGE SWIPE SYSTEM
// ══════════════════════════════════════════

const TOTAL_PAGES  = 5;
const DEFAULT_PAGE = 2; // 0-based, 3-cü səhifə

let currentPage = DEFAULT_PAGE;

const pageContainer = document.getElementById('page-container');
const navDots       = document.querySelectorAll('.nav-dot');

// app.js — window._updateHeaderProfileBtn funksiyasını tamamilə bu ilə əvəz et:

window._updateHeaderProfileBtn = function (pageIndex) {
  const btn    = document.getElementById('header-profile-btn');
  const avatar = document.getElementById('header-profile-avatar');
  if (!btn || !avatar) return;

  if (pageIndex === 4) {
    const role = window.__userRole || 'guest';
    if (role === 'teacher') {
      // Stats səhifəsində müəllim üçün ev ikonu göstər
      avatar.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`;
      // Dark/light mode-a uyğun rəng
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      avatar.style.background = isDark ? '#1d3348' : '#EDEAE2';
      avatar.style.color = isDark ? '#dce8f2' : '#4A4740';
      avatar.style.borderRadius = '10px';
      return;
    }
  }

  // Normal profil avatarı bərpa et
  if (window.AuthManager) {
    const user = AuthManager.getCurrentUser();
    if (user && user.photoURL) {
      // ← ƏSAS DÜZƏLIŞ: inline style yox, CSS class-a uyğun stil
      avatar.innerHTML = `<img src="${user.photoURL}"
        style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block;" />`;
      avatar.style.background = 'transparent';
    } else if (user) {
      const name = user.displayName ? user.displayName.split(' ')[0] : user.email;
      avatar.innerHTML = '';
      avatar.textContent = name.charAt(0).toUpperCase();
      avatar.style.background = '#EDEAE2';
      avatar.style.color = '#6B7280';
    } else {
      avatar.innerHTML = '';
      avatar.textContent = '?';
      avatar.style.background = '#EDEAE2';
      avatar.style.color = '#6B7280';
    }
  }
};
function goToPage(idx, animate = true) {
  if (idx < 0 || idx >= TOTAL_PAGES) return;
  currentPage = idx;
  if (!animate) pageContainer.style.transition = 'none';
  pageContainer.style.transform = `translateX(-${idx * 20}%)`;
  if (!animate) requestAnimationFrame(() => {
    pageContainer.style.transition = '';
  });

  // ← BU BLOKU SİL (goToPage-dən çıxart):
  // navDots.forEach((dot, i) => {
  //   dot.addEventListener('click', () => goToPage(i));
  // });

  navDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });

  if (idx === 4 && window.StatsPage) StatsPage.render('stats-root');
  if (window._updateHeaderProfileBtn) _updateHeaderProfileBtn(idx);
}


// ── Touch / swipe ──────────────────────────
let swipeStartX   = 0;
let swipeStartY   = 0;
let swipeStartT   = 0;
let swipingH      = false;
let swipeDeltaX   = 0;
const SWIPE_THRESHOLD = 50;
const SWIPE_MAX_ANGLE = 35; // derəcə

pageContainer.addEventListener('touchstart', (e) => {
  // Quiz ekranı açıqdursa swipe deaktiv
  if (!elQuizScreen.classList.contains('hidden')) return;
  if (!elResultScreen.classList.contains('hidden')) return;

  swipeStartX = e.touches[0].clientX;
  swipeStartY = e.touches[0].clientY;
  swipeStartT = Date.now();
  swipingH    = false;
  swipeDeltaX = 0;
}, { passive: true });

pageContainer.addEventListener('touchmove', (e) => {
  if (!elQuizScreen.classList.contains('hidden')) return;

  const dx = e.touches[0].clientX - swipeStartX;
  const dy = e.touches[0].clientY - swipeStartY;

  if (!swipingH && Math.abs(dx) + Math.abs(dy) > 8) {
    const angle = Math.abs(Math.atan2(dy, dx) * 180 / Math.PI);
    swipingH = angle < SWIPE_MAX_ANGLE || angle > (180 - SWIPE_MAX_ANGLE);
  }

  if (swipingH) {
    swipeDeltaX = dx;
    // Canlı sürüşmə effekti
    const base = currentPage * 20;
    const pct  = (dx / window.innerWidth) * 20;
    pageContainer.style.transition = 'none';
    pageContainer.style.transform  = `translateX(calc(-${base}% + ${dx}px))`;
  }
}, { passive: true });

pageContainer.addEventListener('touchend', () => {
  if (!swipingH) return;
  const elapsed = Date.now() - swipeStartT;
  const fast    = elapsed < 250 && Math.abs(swipeDeltaX) > 30;

  pageContainer.style.transition = '';

  if ((swipeDeltaX < -SWIPE_THRESHOLD || fast && swipeDeltaX < 0) && currentPage < TOTAL_PAGES - 1) {
    goToPage(currentPage + 1);
  } else if ((swipeDeltaX > SWIPE_THRESHOLD || fast && swipeDeltaX > 0) && currentPage > 0) {
    goToPage(currentPage - 1);
  } else {
    goToPage(currentPage); // snap geri
  }

  swipingH = false;
});
// ── Mouse drag (kompüter üçün) ──────────────────
let mouseStartX = 0;
let mouseDragging = false;
let mouseDeltaX = 0;

pageContainer.addEventListener('mousedown', (e) => {
  if (!elQuizScreen.classList.contains('hidden')) return;
  mouseStartX = e.clientX;
  mouseDragging = true;
  mouseDeltaX = 0;
  pageContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!mouseDragging) return;
  mouseDeltaX = e.clientX - mouseStartX;
  const base = currentPage * 20;
  pageContainer.style.transition = 'none';
  pageContainer.style.transform = `translateX(calc(-${base}% + ${mouseDeltaX}px))`;
});

document.addEventListener('mouseup', () => {
  if (!mouseDragging) return;
  mouseDragging = false;
  pageContainer.style.cursor = '';
  pageContainer.style.transition = '';

  if (mouseDeltaX < -50 && currentPage < TOTAL_PAGES - 1) {
    goToPage(currentPage + 1);
  } else if (mouseDeltaX > 50 && currentPage > 0) {
    goToPage(currentPage - 1);
  } else {
    goToPage(currentPage);
  }
});
// ── Init ──────────────────────────────────
goToPage(DEFAULT_PAGE, false);
StatsPage.render('stats-root');
loadProgress();
renderLevels();
