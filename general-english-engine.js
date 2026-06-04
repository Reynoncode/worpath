// ============================================================
//  WORDPATH — GENERAL ENGLISH ENGINE
//  general-english-engine.js
//
//  Yüklənmə sırası:
//    general-english-data.js  →  app.js  →  grammar-engine.js
//    →  grammar-stats-hook.js  →  general-english-engine.js   ← bu fayl
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

// ── Progress storage ───────────────────────────────────────
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
  return (prog[levelId] && prog[levelId][quizIdx] !== undefined)
    ? prog[levelId][quizIdx]
    : 'unlocked';
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
    if (lvl.quizzes[i] && lvl.quizzes[i].type === 'grammar_lesson') return i;
  }
  return null;
}

// ============================================================
//  START
// ============================================================

function startGeneralEnglishLesson(levelId, quizIdx) {
  const lvl  = GENERAL_ENGLISH_LEVELS.find(l => l.id === levelId);
  if (!lvl) { console.warn('GE: level tapılmadı', levelId); return; }

  const item = lvl.quizzes[quizIdx];
  if (!item || !item.cards || item.cards.length === 0) {
    console.warn('GE: cards yoxdur', quizIdx);
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

  if      (card.type === 'lesson')     renderGeLesson(card, quizBody);
  else if (card.type === 'mini_check') renderGeMiniCheck(card, quizBody, idx);
  else if (card.type === 'badge')      renderGeBadge(card, quizBody);
}

// ── Nav düymələri ──────────────────────────────────────────
function _geNavHTML(isLast) {
  const hasPrev   = geState.cardIdx > 0;
  const nextLabel = isLast ? 'Tamamla 🎉' : 'Davam et';
  const finCls    = isLast ? ' grammar-finish-btn' : '';

  const backHTML = hasPrev ? `
    <button class="grammar-next-btn grammar-back-btn" id="grammar-back-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Geri
    </button>` : '';

  return `
    <div class="grammar-nav-row">
      ${backHTML}
      <button class="grammar-next-btn${finCls}" id="grammar-next-btn"
              style="flex:${hasPrev ? '2' : '1'};">
        ${nextLabel}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>`;
}

function _geAttachNav() {
  const nb = document.getElementById('grammar-next-btn');
  const bb = document.getElementById('grammar-back-btn');
  if (nb) nb.addEventListener('click', geNextCard);
  if (bb) bb.addEventListener('click', gePrevCard);
}

// ── Lesson kart ────────────────────────────────────────────
function renderGeLesson(card, container) {
  const hasExamples = card.examples && card.examples.length > 0;
  const hasTable    = card.table    && card.table.length > 0;

  let examplesHTML = '';
  if (hasExamples) {
    examplesHTML = `<div class="gl-examples">
      ${card.examples.map(ex =>
        typeof ex === 'object'
          ? `<div class="gl-example-row">
               <span class="gl-ex-word">${ex.word}</span>
               ${ex.az   ? `<span class="gl-ex-az">${ex.az}</span>`     : ''}
               ${ex.note ? `<span class="gl-ex-note">${ex.note}</span>` : ''}
             </div>`
          : `<span class="gl-example-chip">${ex}</span>`
      ).join('')}
    </div>`;
  }

  let tableHTML = '';
  if (hasTable) {
    tableHTML = `<div class="gl-table-wrap"><table class="gl-table">
      ${card.table.map((row, ri) => `
        <tr class="${ri === 0 ? 'gl-table-head' : ''}">
          ${row.map(cell => ri === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join('')}
        </tr>`).join('')}
    </table></div>`;
  }

  const noteHTML = card.note
    ? `<div class="gl-note"><span class="gl-note-icon">📌</span>${card.note}</div>` : '';
  const tipHTML  = card.tip
    ? `<div class="gl-tip"><span class="gl-tip-icon">💡</span>${card.tip}</div>`   : '';

  const contentHTML = card.content
    ? card.content.split('\n\n')
        .map(p => `<p class="gl-para">${p.replace(/\n/g, '<br>')}</p>`)
        .join('')
    : '';

  const isLast = geState.cardIdx + 1 >= geState.totalCards;

  container.innerHTML = `
    <div class="grammar-lesson-wrap">
      <div class="grammar-lesson-card">
        <div class="gl-title">${card.title}</div>
        ${contentHTML}
        ${examplesHTML}
        ${tableHTML}
        ${noteHTML}
        ${tipHTML}
      </div>
      ${_geNavHTML(isLast)}
    </div>`;

  _geAttachNav();
}

// ── Mini check ─────────────────────────────────────────────
function renderGeMiniCheck(card, container, cardIdx) {
  const prevAnswers = geState.miniAnswers[cardIdx] || {};

  const questionsHTML = card.questions.map((q, qi) => {
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
      </div>`;
  }).join('');

  const isLast = geState.cardIdx + 1 >= geState.totalCards;

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
      ${_geNavHTML(isLast)}
    </div>`;

  container.querySelectorAll('.gmc-opt-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => handleGeMiniAnswer(btn, card, cardIdx));
  });

  _geAttachNav();
}

function handleGeMiniAnswer(btn, card, cardIdx) {
  if (geState.locked) return;

  const qi      = parseInt(btn.dataset.qi);
  const chosen  = btn.dataset.opt;
  const q       = card.questions[qi];
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
  const isLast = geState.cardIdx + 1 >= geState.totalCards;

  container.innerHTML = `
    <div class="grammar-badge-wrap">
      <div class="grammar-badge-card">
        <div class="gb-glow"></div>
        <div class="gb-icon">${card.icon || '🏅'}</div>
        <div class="gb-title">${card.title}</div>
        <div class="gb-desc">${card.desc || ''}</div>
        ${card.stats ? `<div class="gb-stats">
          ${card.stats.map(s => `
            <div class="gb-stat-item">
              <span class="gb-stat-num">${s.num}</span>
              <span class="gb-stat-label">${s.label}</span>
            </div>`).join('')}
        </div>` : ''}
      </div>
      ${_geNavHTML(isLast)}
    </div>`;

  setTimeout(() => {
    const badgeEl = container.querySelector('.grammar-badge-card');
    if (badgeEl) badgeEl.classList.add('gb-animate');
  }, 100);

  _geAttachNav();
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
      elResultMainBtn.onclick = () => { closeOverlays(); renderLevels(); };
    }

    elResultBackBtn.classList.remove('hidden');
    elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
    elResultBackBtn.onclick = () => { closeOverlays(); renderLevels(); };
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

    html += '<div class="path-node-wrap">';

    if (isDone) {
      html += `
        <div class="path-node grammar-lesson-node level-done"
             data-quiz-idx="${qi}" data-level-id="${levelId}" data-status="completed"
             style="--lvl-color:${lvl.color}">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
               stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>`;
    } else {
      html += `
        <div class="path-node grammar-lesson-node unlocked pulse"
             data-quiz-idx="${qi}" data-level-id="${levelId}" data-status="unlocked"
             style="color:${lvl.color}; border-color:${lvl.color}; background:${lvl.color}18;">
          <i class="ti ti-book-2"></i>
        </div>`;
    }

    html += `<div class="node-label">${item.title || `Dərs ${qi + 1}`}</div>`;
    html += '</div>';
  });

  html += '</div>';
  return html;
}

// ============================================================
//  CARDS RENDER + renderLevels HOOK
// ============================================================

function renderGeneralEnglishCards() {
  const container = document.getElementById('ge-list');  // ← ge-list
  if (!container) {
    console.warn('GE: ge-list tapılmadı');
    return;
  }

  container.querySelectorAll('.level-card[data-ge]').forEach(c => c.remove());

  GENERAL_ENGLISH_LEVELS.forEach(lvl => {
    const prog  = geLoadProgress();
    const done  = prog[lvl.id]
      ? Object.values(prog[lvl.id]).filter(s => s === 'completed').length
      : 0;
    const total = lvl.quizzes.length;

    const card = document.createElement('div');
    card.className      = 'level-card';
    card.dataset.ge     = '1';
    card.dataset.level  = lvl.id;

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
      </div>`;

    card.querySelector('.level-header').addEventListener('click', () => toggleLevel(card));
    container.appendChild(card);
  });

  _attachGeNodeListeners();
}

// ── Node click listeners ────────────────────────────────────
function _attachGeNodeListeners() {
  document.querySelectorAll('.path-node[data-level-id]').forEach(node => {
    if (node.dataset.geListened) return;
    node.dataset.geListened = '1';

    node.addEventListener('click', () => {
      const levelId = node.dataset.levelId;
      const qi      = parseInt(node.dataset.quizIdx, 10);
      const status  = node.dataset.status;

      if (status === 'locked') {
        if (typeof showToast === 'function') showToast('Əvvəlki dərsi tamamla 🔒');
        return;
      }
      startGeneralEnglishLesson(levelId, qi);
    });
  });
}

// MutationObserver — dinamik render olunanda da listener qoşulsun
(function _initGeObserver() {
  function attach(target) {
    const observer = new MutationObserver(_attachGeNodeListeners);
    observer.observe(target, { childList: true, subtree: true });
    _attachGeNodeListeners();
  }

  const target = document.getElementById('skills-page-content');
  if (target) {
    attach(target);
  } else {
    window.addEventListener('load', () => {
      const t = document.getElementById('skills-page-content');
      if (t) attach(t);
    });
  }
})();

window.addEventListener('renderLevelsDone', function() {
  requestAnimationFrame(function() {
    renderGeneralEnglishCards();
  });
});
// ── Global exports ──────────────────────────────────────────
window.startGeneralEnglishLesson = startGeneralEnglishLesson;
window.renderGeneralEnglishCards = renderGeneralEnglishCards;
window.geState                   = geState;
