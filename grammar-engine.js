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
      ${allDone ? buildNavButtons('Davam et') : ''}
    </div>
  `;

  if (!allDone) {
    container.querySelectorAll('.gmc-opt-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        handleGrammarMiniAnswer(btn, card, cardIdx);
      });
    });
  } else {
    attachNavListeners();
  }
}

function handleGrammarMiniAnswer(btn, card, cardIdx) {
  if (grammarState.locked) return;

  const qi      = parseInt(btn.dataset.qi);
  const chosen  = btn.dataset.opt;
  const q       = card.questions[qi];
  const correct = chosen === q.answer;

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

  if (!grammarState.miniAnswers[cardIdx]) grammarState.miniAnswers[cardIdx] = {};
  grammarState.miniAnswers[cardIdx][qi]             = correct;
  grammarState.miniAnswers[cardIdx][qi + '_chosen'] = parseInt(btn.dataset.oi);

  const totalQ   = card.questions.length;
  const answered = Object.keys(grammarState.miniAnswers[cardIdx])
    .filter(k => !k.includes('_chosen')).length;

  if (answered >= totalQ) {
    const wrap = document.querySelector('.grammar-minicheck-wrap');
    if (wrap && !document.getElementById('grammar-next-btn')) {
      const navDiv = document.createElement('div');
      navDiv.innerHTML = buildNavButtons('Davam et');
      wrap.appendChild(navDiv.firstElementChild);
      attachNavListeners();
    }
  }
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
        startQuiz(grammarState.levelIdx, nextPlayable);
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
      typeIcon  = isDone ? '' : (isLocked ? '' : '📖');
      typeClass = 'grammar-lesson-node';
    } else if (Array.isArray(item)) {
      typeIcon  = isDone ? '' : (isLocked ? '' : quizCounter);
      typeClass = 'grammar-quiz-node';
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
        <img src="kids/${w.pic}.png" alt="${correctWord}" class="kids-pic"
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

window.startKidsQuiz    = startKidsQuiz;
window.kidsHandleAnswer = kidsHandleAnswer;
window.kidsPlayAudio    = kidsPlayAudio;
window.kidsState        = kidsState;
