// ============================================================
//  WORDPATH — GRAMMAR ENGINE
//  app.js-ə toxunmadan işləyir, ona hook olur
// ============================================================

// ── State ─────────────────────────────────────────────────
const grammarState = {
  levelIdx:    null,
  quizIdx:     null,
  item:        null,
  cardIdx:     0,
  miniAnswers: {},
  sectionsDone: 0,
  totalCards:  0,
  locked:      false,
};

// ============================================================
//  START
// ============================================================

function startGrammarLesson(levelIdx, quizIdx) {
  const lvl  = LEVELS[levelIdx];
  const item = lvl.quizzes[quizIdx];

  if (!item || !item.cards || item.cards.length === 0) {
    console.warn('Grammar lesson: cards yoxdur və ya boşdur', quizIdx);
    return;
  }

  grammarState.levelIdx     = levelIdx;
  grammarState.quizIdx      = quizIdx;
  grammarState.item         = item;
  grammarState.cardIdx      = 0;
  grammarState.miniAnswers  = {};
  grammarState.sectionsDone = 0;
  grammarState.totalCards   = item.cards.length;
  grammarState.locked       = false;

  quiz.mode   = 'grammar';
  quiz.locked = false;

  showQuizScreen();
  renderGrammarCard();
}

// ============================================================
//  RENDER — cari kartı göstər
// ============================================================

function renderGrammarCard() {
  const item  = grammarState.item;
  const idx   = grammarState.cardIdx;
  const card  = item.cards[idx];
  const total = grammarState.totalCards;

  elProgressFill.style.width = `${(idx / total) * 100}%`;
  elQCounter.textContent     = `${idx + 1}/${total}`;

  const quizBody = document.querySelector('.quiz-body');
  quizBody.className = 'quiz-body grammar-mode';

  if (card.type === 'lesson') {
    renderGrammarLesson(card, quizBody);
  } else if (card.type === 'mini_check') {
    renderGrammarMiniCheck(card, quizBody, idx);
  } else if (card.type === 'badge') {
    renderGrammarBadge(card, quizBody);
  } else {
    renderGrammarQuizCard(card, quizBody, idx);
  }
}

// ============================================================
//  GERİ/İRƏLİ DÜYMƏLƏRI — köməkçi funksiyalar
// ============================================================

function buildNavButtons(nextLabel, isFinish) {
  isFinish = isFinish || false;
  const hasPrev    = grammarState.cardIdx > 0;
  const nextFlex   = hasPrev ? '2' : '1';
  const finishCls  = isFinish ? ' grammar-finish-btn' : '';

  const backHTML = hasPrev ? `
    <button class="grammar-next-btn grammar-back-btn" id="grammar-back-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Geri
    </button>
  ` : '';

  return `
    <div class="grammar-nav-row">
      ${backHTML}
      <button class="grammar-next-btn${finishCls}" id="grammar-next-btn"
              style="flex:${nextFlex};">
        ${nextLabel}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  `;
}

function attachNavListeners() {
  const nextBtn = document.getElementById('grammar-next-btn');
  if (nextBtn) nextBtn.addEventListener('click', grammarNextCard);

  const backBtn = document.getElementById('grammar-back-btn');
  if (backBtn) backBtn.addEventListener('click', grammarPrevCard);
}

// ============================================================
//  LESSON KARTI
// ============================================================

function renderGrammarLesson(card, container) {
  const hasExamples = card.examples && card.examples.length > 0;
  const hasTable    = card.table    && card.table.length > 0;
  const hasNote     = !!card.note;
  const hasTip      = !!card.tip;

  let examplesHTML = '';
  if (hasExamples) {
    examplesHTML = `
      <div class="gl-examples">
        ${card.examples.map(ex => {
          if (typeof ex === 'object') {
            return `<div class="gl-example-row">
              <span class="gl-ex-word">${ex.word}</span>
              ${ex.az ? `<span class="gl-ex-az">${ex.az}</span>` : ''}
              ${ex.note ? `<span class="gl-ex-note">${ex.note}</span>` : ''}
            </div>`;
          }
          return `<span class="gl-example-chip">${ex}</span>`;
        }).join('')}
      </div>
    `;
  }

  let tableHTML = '';
  if (hasTable) {
    tableHTML = `
      <div class="gl-table-wrap">
        <table class="gl-table">
          ${card.table.map((row, ri) => `
            <tr class="${ri === 0 ? 'gl-table-head' : ''}">
              ${row.map(cell => ri === 0
                ? `<th>${cell}</th>`
                : `<td>${cell}</td>`
              ).join('')}
            </tr>
          `).join('')}
        </table>
      </div>
    `;
  }

  let noteHTML = '';
  if (hasNote) {
    noteHTML = `<div class="gl-note"><span class="gl-note-icon">📌</span>${card.note}</div>`;
  }

  let tipHTML = '';
  if (hasTip) {
    tipHTML = `<div class="gl-tip"><span class="gl-tip-icon">💡</span>${card.tip}</div>`;
  }

  let contentHTML = '';
  if (card.content) {
    contentHTML = card.content
      .split('\n\n')
      .map(p => `<p class="gl-para">${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  container.innerHTML = `
    <div class="grammar-lesson-wrap">
      <div class="grammar-lesson-card">
        ${card.badge ? `<div class="gl-section-badge">${card.badge}</div>` : ''}
        <div class="gl-title">${card.title}</div>
        ${contentHTML}
        ${examplesHTML}
        ${tableHTML}
        ${noteHTML}
        ${tipHTML}
      </div>
      ${buildNavButtons('Davam et')}
    </div>
  `;

  attachNavListeners();
}

// ============================================================
//  MINI CHECK (inline test sualları)
// ============================================================

function renderGrammarMiniCheck(card, container, cardIdx) {
  const prevAnswers = grammarState.miniAnswers[cardIdx] || {};
  const allDone     = card.questions.every((_, qi) => prevAnswers[qi] !== undefined);

  let questionsHTML = card.questions.map((q, qi) => {
    const answered = prevAnswers[qi] !== undefined;
    const wasRight = prevAnswers[qi] === true;

    return `
      <div class="gmc-question ${answered ? (wasRight ? 'gmc-q-correct' : 'gmc-q-wrong') : ''}"
           data-qi="${qi}">
        <div class="gmc-q-text">${q.q}</div>
        <div class="gmc-options" id="gmc-opts-${qi}">
          ${q.options.map((opt, oi) => {
            let cls = 'gmc-opt-btn';
            if (answered) {
              if (opt === q.answer) cls += ' gmc-opt-correct';
              else if (oi === (prevAnswers[qi + '_chosen']) && opt !== q.answer) cls += ' gmc-opt-wrong';
              cls += ' disabled';
            }
            return `<button class="${cls}" data-qi="${qi}" data-oi="${oi}" data-opt="${opt}"
              ${answered ? 'disabled' : ''}>${opt}</button>`;
          }).join('')}
        </div>
        ${answered ? `<div class="gmc-feedback ${wasRight ? 'gmc-fb-correct' : 'gmc-fb-wrong'}">
          ${wasRight ? '✓ Düzgün!' : `✗ Düzgün cavab: <strong>${q.answer}</strong>`}
        </div>` : ''}
      </div>
    `;
  }).join('');

  // ── DEĞİŞİKLİK: Geri düyməsi həmişə, Davam et yalnız allDone-da ──
  const hasPrev   = grammarState.cardIdx > 0;
  const backHTML  = hasPrev ? `
    <button class="grammar-next-btn grammar-back-btn" id="grammar-back-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Geri
    </button>
  ` : '';

const nextHTML = `
  <button class="grammar-next-btn" id="grammar-next-btn" 
          style="flex:${hasPrev ? '2' : '1'};">
    Davam et
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
         stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  </button>
`;

const navHTML = `
  <div class="grammar-nav-row">
    ${backHTML}
    ${nextHTML}
  </div>
`;
  container.innerHTML = `
    <div class="grammar-minicheck-wrap">
      <div class="gmc-header">
        <div class="gmc-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
          Bilikləri yoxla
        </div>
        <div class="gmc-count">${card.questions.length} sual</div>
      </div>
      <div class="gmc-questions-list" id="gmc-list">
        ${questionsHTML}
      </div>
      ${navHTML}
    </div>
  `;

  if (!allDone) {
    container.querySelectorAll('.gmc-opt-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        handleGrammarMiniAnswer(btn, card, cardIdx);
      });
    });
  }

  attachNavListeners();
}

function handleGrammarMiniAnswer(btn, card, cardIdx) {
  if (grammarState.locked) return;

  const qi      = parseInt(btn.dataset.qi);
  const chosen  = btn.dataset.opt;
  const q       = card.questions[qi];
  const correct = chosen === q.answer;

  // State-ə yaz
  if (!grammarState.miniAnswers[cardIdx]) grammarState.miniAnswers[cardIdx] = {};
  grammarState.miniAnswers[cardIdx][qi]             = correct;
  grammarState.miniAnswers[cardIdx][qi + '_chosen'] = parseInt(btn.dataset.oi);

  const optsWrap = document.getElementById(`gmc-opts-${qi}`);
  if (!optsWrap) return;

  optsWrap.querySelectorAll('.gmc-opt-btn').forEach(b => {
    b.disabled = true;
    b.classList.add('disabled');
    if (b.dataset.opt === q.answer) b.classList.add('gmc-opt-correct');
    else if (b === btn && !correct) b.classList.add('gmc-opt-wrong');
  });

  const qEl = btn.closest('.gmc-question');
  if (qEl) {
    qEl.classList.add(correct ? 'gmc-q-correct' : 'gmc-q-wrong');
    const fb = document.createElement('div');
    fb.className = `gmc-feedback ${correct ? 'gmc-fb-correct' : 'gmc-fb-wrong'}`;
    fb.innerHTML = correct
      ? '✓ Düzgün!'
      : `✗ Düzgün cavab: <strong>${q.answer}</strong>`;
    qEl.appendChild(fb);
  }
  // Nav rebuild etmirik — düymə artıq hazırdır
}


// ============================================================
//  BADGE KARTI (bölüm sonu)
// ============================================================

function renderGrammarBadge(card, container) {
  elProgressFill.style.width = '100%';

  const isLast   = grammarState.cardIdx + 1 >= grammarState.totalCards;
  const btnLabel = isLast ? 'Tamamla 🎉' : 'Növbəti bölüm →';

  container.innerHTML = `
    <div class="grammar-badge-wrap">
      <div class="grammar-badge-card">
        <div class="gb-glow"></div>
        <div class="gb-icon">${card.icon || '🏅'}</div>
        <div class="gb-title">${card.title}</div>
        <div class="gb-desc">${card.desc || ''}</div>
        ${card.stats ? `
          <div class="gb-stats">
            ${card.stats.map(s => `
              <div class="gb-stat-item">
                <span class="gb-stat-num">${s.num}</span>
                <span class="gb-stat-label">${s.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
      ${buildNavButtons(btnLabel, isLast)}
    </div>
  `;

  setTimeout(() => {
    const badgeEl = container.querySelector('.grammar-badge-card');
    if (badgeEl) badgeEl.classList.add('gb-animate');
  }, 100);

  attachNavListeners();
}

function renderGrammarQuizCard(card, container, idx) {
  const correct = card.tr;
  const wrong   = card.wrong;
  const options = [correct, wrong].sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div class="grammar-lesson-wrap">
      <div class="grammar-lesson-card">
        <div class="gl-title">${card.en}</div>
        <div class="gmc-options" style="margin-top:24px">
          ${options.map(opt => `
            <button class="gmc-opt-btn" data-opt="${opt}">${opt}</button>
          `).join('')}
        </div>
        <div id="gqc-feedback" style="min-height:32px;margin-top:12px"></div>
      </div>
    </div>
  `;

  container.querySelectorAll('.gmc-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (grammarState.locked) return;
      grammarState.locked = true;

      const chosen  = btn.dataset.opt;
      const isRight = chosen === correct;

      container.querySelectorAll('.gmc-opt-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.opt === correct) b.classList.add('gmc-opt-correct');
        else if (b === btn && !isRight) b.classList.add('gmc-opt-wrong');
      });

      document.getElementById('gqc-feedback').innerHTML = isRight
        ? '<div class="gmc-feedback gmc-fb-correct">✓ Düzgün!</div>'
        : `<div class="gmc-feedback gmc-fb-wrong">✗ Düzgün cavab: <strong>${correct}</strong></div>`;

      setTimeout(() => {
        grammarState.locked = false;
        grammarNextCard();
      }, 900);
    });
  });
}

// ============================================================
//  NAVİGASİYA
// ============================================================

function grammarNextCard() {
  grammarState.cardIdx++;
  if (grammarState.cardIdx >= grammarState.totalCards) {
    finishGrammarLesson();
    return;
  }
  renderGrammarCard();
}

function grammarPrevCard() {
  if (grammarState.cardIdx <= 0) return;
  grammarState.cardIdx--;
  renderGrammarCard();
}

// ============================================================
//  BİTİŞ
// ============================================================

function finishGrammarLesson() {
  elProgressFill.style.width = '100%';

  let totalQ = 0, correctQ = 0;
  Object.values(grammarState.miniAnswers).forEach(obj => {
    Object.entries(obj).forEach(([k, v]) => {
      if (!k.includes('_chosen')) {
        totalQ++;
        if (v) correctQ++;
      }
    });
  });

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.remove('hidden');
    elLevelResultCard.classList.add('hidden');

    const pct = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 100;

    let emoji, title;
    if (pct === 100)    { emoji = '🏆'; title = 'Əla!'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
    else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
    else                { emoji = '📚'; title = 'Davam et!'; }

    elResultEmoji.textContent = emoji;
    elResultTitle.textContent = title;
    elResultDesc.textContent  = `${grammarState.item.title}`;

    elStatCorrect.textContent = correctQ;
    elStatWrong.textContent   = totalQ - correctQ;
    elStatPct.textContent     = `${pct}%`;

    markCompleted(grammarState.levelIdx, grammarState.quizIdx);

    const nextPlayable = findNextPlayableQuiz(grammarState.levelIdx, grammarState.quizIdx);

    if (nextPlayable !== null) {
      elResultMainBtn.textContent = 'Növbəti →';
      elResultMainBtn.onclick = () => {
        const nextItem = LEVELS[grammarState.levelIdx].quizzes[nextPlayable];
        if (nextItem && !Array.isArray(nextItem) && nextItem.type === 'grammar_lesson') {
          startGrammarLesson(grammarState.levelIdx, nextPlayable);
        } else {
          startQuiz(grammarState.levelIdx, nextPlayable);
        }
        elResultScreen.classList.add('hidden');
      };
    } else {
      elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
      elResultMainBtn.onclick = () => {
        const li = grammarState.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToCurrentNode(li);
      };
    }

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      const li = grammarState.levelIdx;
      closeOverlays();
      renderLevels();
      scrollToCurrentNode(li);
    };
  }, 300);
}

// ============================================================
//  GRAMMAR PATH
// ============================================================

function renderGrammarPath(lvl, li) {
  let html = '<div class="quiz-path grammar-path">';
  let quizCounter = 0;

  lvl.quizzes.forEach((item, qi) => {
    if (item && !Array.isArray(item) && item.type === 'section_divider') {
      html += `
        <div class="grammar-section-divider">
          <div class="grammar-section-line" style="background:${lvl.color}; opacity:0.4;"></div>
          <div class="grammar-section-title" style="color:${lvl.color}; border-color:${lvl.color}33; background:${lvl.color}11;">${item.title}</div>
          <div class="grammar-section-line" style="background:${lvl.color}; opacity:0.4;"></div>
        </div>
      `;
      return;
    }

    quizCounter++;

    const status   = getStatus(li, qi);
    const isDone   = ['completed','phase2_completed','phase3_unlocked','level_done'].includes(status);
    const isLocked = status === 'locked';

    let typeIcon  = '';
    let typeClass = '';

   if (item && !Array.isArray(item) && item.type === 'grammar_lesson') {
  typeIcon  = isDone ? '' : (isLocked ? '' : '<i class="ti ti-book-2"></i>');
  typeClass = 'grammar-lesson-node';
} else if (Array.isArray(item)) {
  const prevItm = lvl.quizzes[qi - 1];
  const afterFinalDivider = prevItm && !Array.isArray(prevItm) && 
    prevItm.type === 'section_divider' && 
    prevItm.title && prevItm.title.includes('ÜMUMİ');
  if (afterFinalDivider) {
    typeIcon  = isDone ? '' : (isLocked ? '' : '<i class="ti ti-library"></i>');
    typeClass = 'grammar-quiz-node';
  } else {
    typeIcon  = isDone ? '' : (isLocked ? '' : '<i class="ti ti-pencil"></i>');
    typeClass = 'grammar-quiz-node';
  }
}
    const prevItem      = lvl.quizzes[qi - 1];
    const prevIsDivider = prevItem && !Array.isArray(prevItem) && prevItem.type === 'section_divider';
    if (qi > 0 && !prevIsDivider) {
      html += '<div class="path-line"></div>';
    }

    html += `<div class="path-node-wrap">`;

    let nodeClass = `path-node ${typeClass}`;

    if (isDone) {
      html += `<div class="${nodeClass} level-done" data-quiz-idx="${qi}" data-status="${status}" style="--lvl-color:${lvl.color}">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>`;
    } else if (isLocked) {
      html += `<div class="${nodeClass} locked" data-quiz-idx="${qi}" data-status="locked">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </div>`;
    } else {
      const completedSoFar = progress[lvl.id].filter(s =>
        ['completed','phase2_completed','phase3_unlocked','level_done'].includes(s)
      ).length;
      const pulseClass = qi === completedSoFar ? 'pulse' : '';
      const isGrammar  = item && !Array.isArray(item) && item.type === 'grammar_lesson';
      const bgStyle    = isGrammar ? `background:${lvl.color}18;` : `background:white;`;

      html += `<div class="${nodeClass} unlocked ${pulseClass}"
        data-quiz-idx="${qi}" data-status="unlocked"
        style="color:${lvl.color}; border-color:${lvl.color}; ${bgStyle}">
        ${typeIcon}
      </div>`;
    }

    const label = (QUIZ_NAMES[lvl.id]?.[qi]) || item?.title || `Dərs ${quizCounter}`;
    html += `<div class="node-label">${label}</div></div>`;
  });

  html += '</div>';
  return html;
}

// ── Global export ─────────────────────────────────────────
window.startGrammarLesson = startGrammarLesson;
window.renderGrammarPath  = renderGrammarPath;
window.grammarState       = grammarState;

// ============================================================
//  WORDPATH — KIDS ENGINE
// ============================================================

const kidsState = {
  levelIdx:  null,
  quizIdx:   null,
  words:     [],
  index:     0,
  mistakes:  0,
  locked:    false,
};

function startKidsQuiz(levelIdx, quizIdx) {
  const lvl   = KIDS_GRAMMAR_LEVELS[0];
  const words = lvl.quizzes[quizIdx];

  if (!words || words.length === 0) {
    console.warn('Kids quiz: boşdur', quizIdx);
    return;
  }

  kidsState.levelIdx = levelIdx;
  kidsState.quizIdx  = quizIdx;
  kidsState.words    = [...words].sort(() => Math.random() - 0.5);
  kidsState.index    = 0;
  kidsState.mistakes = 0;
  kidsState.locked   = false;

  quiz.mode   = 'kids';
  quiz.locked = false;

  showQuizScreen();
  renderKidsQuestion();
}

function renderKidsQuestion() {
  const w      = kidsState.words[kidsState.index];
  const total  = kidsState.words.length;

  elProgressFill.style.width = `${(kidsState.index / total) * 100}%`;
  elQCounter.textContent     = `${kidsState.index + 1}/${total}`;

  const correctWord = KIDS_WORDS[w.correct];
  const wrongWord   = KIDS_WORDS[w.wrong];
  const options     = [correctWord, wrongWord].sort(() => Math.random() - 0.5);

  const quizBody = document.querySelector('.quiz-body');
  quizBody.className = 'quiz-body kids-mode';

  quizBody.innerHTML = `
    <div class="kids-question-wrap">
      <div class="kids-pic-wrap">
        <img src="kids/${w.pic}.jpg" alt="${correctWord}" class="kids-pic"
          onerror="this.style.opacity='0.3'" />
      </div>
      <button class="kids-audio-btn" onclick="kidsPlayAudio('${correctWord}')" title="Dinlə">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      </button>
      <div class="kids-options">
        ${options.map(opt => `
          <button class="kids-opt-btn" data-word="${opt}"
            onclick="kidsHandleAnswer(this, '${correctWord}')">${opt}</button>
        `).join('')}
      </div>
      <div class="kids-feedback" id="kids-feedback"></div>
    </div>
  `;

  setTimeout(() => kidsPlayAudio(correctWord), 400);
}

function kidsHandleAnswer(btn, correctWord) {
  if (kidsState.locked) return;
  kidsState.locked = true;

  const chosen    = btn.dataset.word;
  const isCorrect = chosen === correctWord;
  const feedback  = document.getElementById('kids-feedback');

  document.querySelectorAll('.kids-opt-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.word === correctWord) b.classList.add('kids-opt-correct');
    else if (b === btn && !isCorrect)   b.classList.add('kids-opt-wrong');
  });

  if (isCorrect) {
    feedback.textContent = '✓';
    feedback.className   = 'kids-feedback kids-fb-correct';
    kidsPlayAudio(correctWord);
  } else {
    kidsState.mistakes++;
    feedback.textContent = `✗  ${correctWord}`;
    feedback.className   = 'kids-feedback kids-fb-wrong';
    kidsPlayAudio(correctWord);
  }

  setTimeout(() => {
    kidsState.locked = false;
    kidsState.index++;
    if (kidsState.index >= kidsState.words.length) {
      finishKidsQuiz();
    } else {
      renderKidsQuestion();
    }
  }, 900);
}

function kidsPlayAudio(word) {
  try {
    const audio = new Audio(`kids/audio/${word.toLowerCase().replace(/ /g, '_')}.mp3`);
    audio.play().catch(() => kidsSpeech(word));
  } catch(_) { kidsSpeech(word); }
}

function kidsSpeech(word) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utt   = new SpeechSynthesisUtterance(word);
  utt.lang    = 'en-US';
  utt.rate    = 0.72;
  utt.pitch   = 1.6;
  utt.volume  = 1.0;
  const voices = speechSynthesis.getVoices();
  const female = voices.find(v =>
    v.lang.startsWith('en') && (
      v.name.toLowerCase().includes('female') ||
      v.name.toLowerCase().includes('woman')  ||
      v.name.toLowerCase().includes('samantha') ||
      v.name.toLowerCase().includes('karen')    ||
      v.name.toLowerCase().includes('victoria') ||
      v.name.toLowerCase().includes('zira')
    )
  );
  if (female) utt.voice = female;
  speechSynthesis.speak(utt);
}

function finishKidsQuiz() {
  elProgressFill.style.width = '100%';

  const total   = kidsState.words.length;
  const correct = total - kidsState.mistakes;
  const pct     = Math.round((correct / total) * 100);

  let emoji, title;
  if (pct === 100)    { emoji = '🏆'; title = 'Əla!'; }
  else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
  else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
  else if (pct >= 40) { emoji = '📚'; title = 'Daha çox məşq et!'; }
  else                { emoji = '💪'; title = 'Davam et!'; }

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.remove('hidden');
    elLevelResultCard.classList.add('hidden');

    elResultEmoji.textContent = emoji;
    elResultTitle.textContent = title;
    elResultDesc.textContent  = `${total} sualdan ${correct} düzgün`;

    elStatCorrect.textContent = correct;
    elStatWrong.textContent   = kidsState.mistakes;
    elStatPct.textContent     = `${pct}%`;

    if (pct === 100) {
      markCompleted(kidsState.levelIdx, kidsState.quizIdx);
      if (window.checkAndNotify) checkAndNotify();
    }

    const nextPlayable = findNextPlayableQuiz(kidsState.levelIdx, kidsState.quizIdx);

    if (nextPlayable !== null) {
      elResultMainBtn.textContent = 'Növbəti →';
      elResultMainBtn.onclick = () => {
        startKidsQuiz(kidsState.levelIdx, nextPlayable);
        elResultScreen.classList.add('hidden');
      };
    } else {
      elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
      elResultMainBtn.onclick = () => {
        const li = kidsState.levelIdx;
        closeOverlays();
        renderLevels();
        scrollToCurrentNode(li);
      };
    }

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      const li = kidsState.levelIdx;
      closeOverlays();
      renderLevels();
      scrollToCurrentNode(li);
    };
  }, 300);
}
// ============================================================
//  WORDPATH — GENERAL ENGLISH ENGINE
//  Bu hissəni engine.js-in sonuna əlavə et
// ============================================================

// ── State ─────────────────────────────────────────────────
const geState = {
  levelIdx:    null,
  quizIdx:     null,
  item:        null,
  cardIdx:     0,
  miniAnswers: {},
  totalCards:  0,
  locked:      false,
};

// ── Progress storage key ───────────────────────────────────
const GE_PROGRESS_KEY = 'wordpath_ge_progress';

function geLoadProgress() {
  try {
    return JSON.parse(localStorage.getItem(GE_PROGRESS_KEY) || '{}');
  } catch (_) { return {}; }
}

function geSaveProgress(data) {
  localStorage.setItem(GE_PROGRESS_KEY, JSON.stringify(data));
}

function geGetStatus(levelId, quizIdx) {
  const prog = geLoadProgress();
  return (prog[levelId] && prog[levelId][quizIdx]) || 'unlocked';
}

function geMarkCompleted(levelId, quizIdx) {
  const prog = geLoadProgress();
  if (!prog[levelId]) prog[levelId] = {};
  prog[levelId][quizIdx] = 'completed';
  geSaveProgress(prog);
}

function geFindNextPlayable(levelId, afterIdx) {
  const lvl = GENERAL_ENGLISH_LEVELS.find(l => l.id === levelId);
  if (!lvl) return null;
  for (let i = afterIdx + 1; i < lvl.quizzes.length; i++) {
    const item = lvl.quizzes[i];
    if (item && item.type === 'grammar_lesson') return i;
  }
  return null;
}

// ============================================================
//  START
// ============================================================

function startGeneralEnglishLesson(levelId, quizIdx) {
  const lvl  = GENERAL_ENGLISH_LEVELS.find(l => l.id === levelId);
  if (!lvl) return;
  const item = lvl.quizzes[quizIdx];

  if (!item || !item.cards || item.cards.length === 0) {
    console.warn('GE lesson: cards yoxdur', quizIdx);
    return;
  }

  geState.levelIdx    = levelId;
  geState.quizIdx     = quizIdx;
  geState.item        = item;
  geState.cardIdx     = 0;
  geState.miniAnswers = {};
  geState.totalCards  = item.cards.length;
  geState.locked      = false;

  quiz.mode   = 'grammar';
  quiz.locked = false;

  showQuizScreen();
  renderGeCard();
}

// ============================================================
//  RENDER
// ============================================================

function renderGeCard() {
  const item  = geState.item;
  const idx   = geState.cardIdx;
  const card  = item.cards[idx];
  const total = geState.totalCards;

  elProgressFill.style.width = `${(idx / total) * 100}%`;
  elQCounter.textContent     = `${idx + 1}/${total}`;

  const quizBody = document.querySelector('.quiz-body');
  quizBody.className = 'quiz-body grammar-mode';

  if (card.type === 'lesson') {
    renderGeLesson(card, quizBody);
  } else if (card.type === 'mini_check') {
    renderGeMiniCheck(card, quizBody, idx);
  } else if (card.type === 'badge') {
    renderGeBadge(card, quizBody);
  }
}

// ── Lesson kart ────────────────────────────────────────────
function renderGeLesson(card, container) {
  // Grammar engine-dəki eyni render funksiyasından istifadə edirik,
  // sadəcə state fərqlidir — grammarState.cardIdx əvəzinə geState.cardIdx
  const savedIdx = grammarState.cardIdx;
  grammarState.cardIdx = geState.cardIdx;

  renderGrammarLesson(card, container);

  // listener-ləri GE navigasiyasına yönləndir
  const nextBtn = document.getElementById('grammar-next-btn');
  const backBtn = document.getElementById('grammar-back-btn');
  if (nextBtn) { nextBtn.replaceWith(nextBtn.cloneNode(true)); }
  if (backBtn) { backBtn.replaceWith(backBtn.cloneNode(true)); }

  const nb = document.getElementById('grammar-next-btn');
  const bb = document.getElementById('grammar-back-btn');
  if (nb) nb.addEventListener('click', geNextCard);
  if (bb) bb.addEventListener('click', gePrevCard);

  grammarState.cardIdx = savedIdx;
}

// ── Mini check ─────────────────────────────────────────────
function renderGeMiniCheck(card, container, cardIdx) {
  const prevAnswers = geState.miniAnswers[cardIdx] || {};

  let questionsHTML = card.questions.map((q, qi) => {
    const answered = prevAnswers[qi] !== undefined;
    const wasRight = prevAnswers[qi] === true;
    return `
      <div class="gmc-question ${answered ? (wasRight ? 'gmc-q-correct' : 'gmc-q-wrong') : ''}"
           data-qi="${qi}">
        <div class="gmc-q-text">${q.q}</div>
        <div class="gmc-options" id="ge-opts-${qi}">
          ${q.options.map((opt, oi) => {
            let cls = 'gmc-opt-btn';
            if (answered) {
              if (opt === q.answer) cls += ' gmc-opt-correct';
              else if (oi === prevAnswers[qi + '_chosen'] && opt !== q.answer) cls += ' gmc-opt-wrong';
              cls += ' disabled';
            }
            return `<button class="${cls}" data-qi="${qi}" data-oi="${oi}" data-opt="${opt}"
              ${answered ? 'disabled' : ''}>${opt}</button>`;
          }).join('')}
        </div>
        ${answered ? `<div class="gmc-feedback ${wasRight ? 'gmc-fb-correct' : 'gmc-fb-wrong'}">
          ${wasRight ? '✓ Düzgün!' : `✗ Düzgün cavab: <strong>${q.answer}</strong>`}
        </div>` : ''}
      </div>
    `;
  }).join('');

  const hasPrev = geState.cardIdx > 0;
  const backHTML = hasPrev ? `
    <button class="grammar-next-btn grammar-back-btn" id="grammar-back-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Geri
    </button>` : '';

  container.innerHTML = `
    <div class="grammar-minicheck-wrap">
      <div class="gmc-header">
        <div class="gmc-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
          Bilikləri yoxla
        </div>
        <div class="gmc-count">${card.questions.length} sual</div>
      </div>
      <div class="gmc-questions-list">${questionsHTML}</div>
      <div class="grammar-nav-row">
        ${backHTML}
        <button class="grammar-next-btn" id="grammar-next-btn"
                style="flex:${hasPrev ? '2' : '1'};">
          Davam et
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  container.querySelectorAll('.gmc-opt-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => handleGeMiniAnswer(btn, card, cardIdx));
  });

  const nb = document.getElementById('grammar-next-btn');
  const bb = document.getElementById('grammar-back-btn');
  if (nb) nb.addEventListener('click', geNextCard);
  if (bb) bb.addEventListener('click', gePrevCard);
}

function handleGeMiniAnswer(btn, card, cardIdx) {
  if (geState.locked) return;

  const qi     = parseInt(btn.dataset.qi);
  const chosen = btn.dataset.opt;
  const q      = card.questions[qi];
  const correct = chosen === q.answer;

  if (!geState.miniAnswers[cardIdx]) geState.miniAnswers[cardIdx] = {};
  geState.miniAnswers[cardIdx][qi]             = correct;
  geState.miniAnswers[cardIdx][qi + '_chosen'] = parseInt(btn.dataset.oi);

  const optsWrap = document.getElementById(`ge-opts-${qi}`);
  if (!optsWrap) return;

  optsWrap.querySelectorAll('.gmc-opt-btn').forEach(b => {
    b.disabled = true;
    b.classList.add('disabled');
    if (b.dataset.opt === q.answer) b.classList.add('gmc-opt-correct');
    else if (b === btn && !correct) b.classList.add('gmc-opt-wrong');
  });

  const qEl = btn.closest('.gmc-question');
  if (qEl) {
    qEl.classList.add(correct ? 'gmc-q-correct' : 'gmc-q-wrong');
    const fb = document.createElement('div');
    fb.className = `gmc-feedback ${correct ? 'gmc-fb-correct' : 'gmc-fb-wrong'}`;
    fb.innerHTML = correct ? '✓ Düzgün!' : `✗ Düzgün cavab: <strong>${q.answer}</strong>`;
    qEl.appendChild(fb);
  }
}

// ── Badge kart ─────────────────────────────────────────────
function renderGeBadge(card, container) {
  elProgressFill.style.width = '100%';

  const isLast   = geState.cardIdx + 1 >= geState.totalCards;
  const btnLabel = isLast ? 'Tamamla 🎉' : 'Növbəti bölüm →';
  const hasPrev  = geState.cardIdx > 0;

  container.innerHTML = `
    <div class="grammar-badge-wrap">
      <div class="grammar-badge-card">
        <div class="gb-glow"></div>
        <div class="gb-icon">${card.icon || '🏅'}</div>
        <div class="gb-title">${card.title}</div>
        <div class="gb-desc">${card.desc || ''}</div>
        ${card.stats ? `
          <div class="gb-stats">
            ${card.stats.map(s => `
              <div class="gb-stat-item">
                <span class="gb-stat-num">${s.num}</span>
                <span class="gb-stat-label">${s.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
      <div class="grammar-nav-row">
        ${hasPrev ? `
          <button class="grammar-next-btn grammar-back-btn" id="grammar-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Geri
          </button>` : ''}
        <button class="grammar-next-btn${isLast ? ' grammar-finish-btn' : ''}"
                id="grammar-next-btn" style="flex:${hasPrev ? '2' : '1'};">
          ${btnLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  setTimeout(() => {
    const badgeEl = container.querySelector('.grammar-badge-card');
    if (badgeEl) badgeEl.classList.add('gb-animate');
  }, 100);

  const nb = document.getElementById('grammar-next-btn');
  const bb = document.getElementById('grammar-back-btn');
  if (nb) nb.addEventListener('click', geNextCard);
  if (bb) bb.addEventListener('click', gePrevCard);
}

// ============================================================
//  NAVİGASİYA
// ============================================================

function geNextCard() {
  geState.cardIdx++;
  if (geState.cardIdx >= geState.totalCards) {
    finishGeLesson();
    return;
  }
  renderGeCard();
}

function gePrevCard() {
  if (geState.cardIdx <= 0) return;
  geState.cardIdx--;
  renderGeCard();
}

// ============================================================
//  BİTİŞ
// ============================================================

function finishGeLesson() {
  elProgressFill.style.width = '100%';

  let totalQ = 0, correctQ = 0;
  Object.values(geState.miniAnswers).forEach(obj => {
    Object.entries(obj).forEach(([k, v]) => {
      if (!k.includes('_chosen')) { totalQ++; if (v) correctQ++; }
    });
  });

  setTimeout(() => {
    elQuizScreen.classList.add('hidden');
    elResultScreen.classList.remove('hidden');
    elResultStats.classList.remove('hidden');
    elLevelResultCard.classList.add('hidden');

    const pct = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 100;

    let emoji, title;
    if (pct === 100)    { emoji = '🏆'; title = 'Əla!'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Çox yaxşı!'; }
    else if (pct >= 60) { emoji = '👍'; title = 'Pis deyil!'; }
    else                { emoji = '📚'; title = 'Davam et!'; }

    elResultEmoji.textContent = emoji;
    elResultTitle.textContent = title;
    elResultDesc.textContent  = geState.item.title;
    elStatCorrect.textContent = correctQ;
    elStatWrong.textContent   = totalQ - correctQ;
    elStatPct.textContent     = `${pct}%`;

    geMarkCompleted(geState.levelIdx, geState.quizIdx);

    const nextIdx = geFindNextPlayable(geState.levelIdx, geState.quizIdx);

    if (nextIdx !== null) {
      elResultMainBtn.textContent = 'Növbəti →';
      elResultMainBtn.onclick = () => {
        startGeneralEnglishLesson(geState.levelIdx, nextIdx);
        elResultScreen.classList.add('hidden');
      };
    } else {
      elResultMainBtn.textContent = 'Ana səhifəyə qayıt';
      elResultMainBtn.onclick = () => {
        closeOverlays();
        renderLevels();
      };
    }

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => {
      closeOverlays();
      renderLevels();
    };
  }, 300);
}

// ============================================================
//  PATH RENDER
// ============================================================

function renderGeneralEnglishPath(lvl, levelId) {
  let html = '<div class="quiz-path grammar-path">';

  lvl.quizzes.forEach((item, qi) => {
    const status = geGetStatus(levelId, qi);
    const isDone = status === 'completed';

    if (qi > 0) html += '<div class="path-line"></div>';

    html += `<div class="path-node-wrap">`;

    const nodeClass = `path-node grammar-lesson-node`;

    if (isDone) {
      html += `
        <div class="${nodeClass} level-done"
             data-quiz-idx="${qi}" data-level-id="${levelId}" data-status="completed"
             style="--lvl-color:${lvl.color}">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
               stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>`;
    } else {
      html += `
        <div class="${nodeClass} unlocked pulse"
             data-quiz-idx="${qi}" data-level-id="${levelId}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}; background:${lvl.color}18;">
          <i class="ti ti-book-2"></i>
        </div>`;
    }

    html += `<div class="node-label">${item.title || `Dərs ${qi + 1}`}</div>`;
    html += `</div>`;
  });

  html += '</div>';
  return html;
}

// ============================================================
//  NODE CLICK INTERCEPT — renderLevels-ə hook
// ============================================================

// renderLevels çağırıldıqdan sonra GE kartlarına click listener əlavə edir
const _origRenderLevels = window.renderLevels || null;

function _attachGeNodeListeners() {
  document.querySelectorAll('.path-node[data-level-id]').forEach(node => {
    // artıq listener varsa keç
    if (node.dataset.geListened) return;
    node.dataset.geListened = '1';

    node.addEventListener('click', () => {
      const levelId = node.dataset.levelId;
      const qi      = parseInt(node.dataset.quizIdx, 10);
      const status  = node.dataset.status;

      if (status === 'locked') {
        showToast('Əvvəlki dərsi tamamla 🔒');
        return;
      }

      startGeneralEnglishLesson(levelId, qi);
    });
  });
}

// MutationObserver ilə skills-page-content-ə yeni kartlar əlavə olunanda listener qoşuq
(function () {
  const target = document.getElementById('skills-page-content');
  if (!target) {
    // DOM hələ hazır deyilsə, load-da cəhd et
    window.addEventListener('load', () => {
      const t = document.getElementById('skills-page-content');
      if (t) _observeSkillsPage(t);
    });
    return;
  }
  _observeSkillsPage(target);
})();

function _observeSkillsPage(target) {
  const observer = new MutationObserver(() => _attachGeNodeListeners());
  observer.observe(target, { childList: true, subtree: true });
  // İlk render üçün
  _attachGeNodeListeners();
}

// ============================================================
//  renderLevels-ə GE kartlarını əlavə et
// ============================================================

// app.js-dəki renderLevels funksiyası LEVELS array-ini gəzir.
// GE kartları GENERAL_ENGLISH_LEVELS-dədir, ona görə renderLevels-dən sonra
// ayrıca render edirik.

function renderGeneralEnglishCards() {
  const skillsPage = document.getElementById('skills-page-content');
  if (!skillsPage) return;

  // Köhnə GE kartlarını sil
  skillsPage.querySelectorAll('.level-card[data-ge]').forEach(c => c.remove());

  GENERAL_ENGLISH_LEVELS.forEach(lvl => {
    const prog   = geLoadProgress();
    const done   = prog[lvl.id] ? Object.values(prog[lvl.id]).filter(s => s === 'completed').length : 0;
    const total  = lvl.quizzes.length;

    const card = document.createElement('div');
    card.className = 'level-card';
    card.dataset.ge    = '1';
    card.dataset.level = lvl.id;

    card.innerHTML = `
      <div class="level-header" role="button" aria-expanded="false">
        <div class="level-bar" style="background:${lvl.color}"></div>
        <span class="level-icon" style="
          background:${lvl.color}18;
          border:1.5px solid ${lvl.color}44;
          color:${lvl.color};
          width:42px; height:42px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0; font-size:20px;">
          ${lvl.icon}
        </span>
        <div class="level-info">
          <div class="level-name">${lvl.name}</div>
          <div class="level-meta">${done} / ${total} tamamlandı</div>
        </div>
        <svg class="level-chevron" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="level-body">
        ${renderGeneralEnglishPath(lvl, lvl.id)}
      </div>
    `;

    card.querySelector('.level-header').addEventListener('click', () => toggleLevel(card));
    skillsPage.appendChild(card);
  });

  _attachGeNodeListeners();
}

// renderLevels-i override et — orijinalı çağırıb GE kartlarını da əlavə edirik
const __origRenderLevels = window.renderLevels;
window.renderLevels = function () {
  __origRenderLevels();
  renderGeneralEnglishCards();
};

// ── Global export ─────────────────────────────────────────
window.startGeneralEnglishLesson  = startGeneralEnglishLesson;
window.renderGeneralEnglishCards  = renderGeneralEnglishCards;
window.geState                    = geState;
window.startKidsQuiz    = startKidsQuiz;
window.kidsHandleAnswer = kidsHandleAnswer;
window.kidsPlayAudio    = kidsPlayAudio;
window.kidsState        = kidsState;
