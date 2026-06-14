// ============================================================
//  WORDPATH — WRITING ENGINE
//  writing-engine.js
//  index.html-də app.js-dən SONRA yüklənməlidir.
//
//  Mövcud test tipləri:
//    1. writing_fill  — drag & drop boşluq doldurma
//
//  Gələcək test tipləri (hazır interfeys):
//    2. writing_order   — cümləni düzgün sırala
//    3. writing_choose  — çoxlu seçim (essay structure)
//    4. writing_free    — sərbəst yazı + avtomatik yoxlama
// ============================================================

const WritingEngine = (() => {

  // ══════════════════════════════════════════════════════════
  //  SHARED STATE
  // ══════════════════════════════════════════════════════════

  const state = {
    lvlId:    null,
    quizIdx:  null,
    item:     null,
    type:     null,   // 'writing_fill' | 'writing_order' | ...
  };

  // ══════════════════════════════════════════════════════════
  //  ENTRY POINT — startWritingQuiz
  //  general-english-engine.js-dən bu funksiyanı çağır:
  //
  //  } else if (item.type === 'writing_fill') {
  //    WritingEngine.start(lvlId, qi);
  //    return;
  //  }
  // ══════════════════════════════════════════════════════════

  function start(lvlId, quizIdx) {
    const lvl  = GENERAL_ENGLISH_LEVELS.find(l => l.id === lvlId);
    const item = lvl?.quizzes[quizIdx];
    if (!item) return;

    state.lvlId   = lvlId;
    state.quizIdx = quizIdx;
    state.item    = item;
    state.type    = item.type;

    quiz.mode   = item.type;
    quiz.locked = false;

    showQuizScreen();

    switch (item.type) {
      case 'writing_fill':  WritingFill.start(item);  break;
      // case 'writing_order':  WritingOrder.start(item);  break;
      // case 'writing_choose': WritingChoose.start(item); break;
      // case 'writing_free':   WritingFree.start(item);   break;
      default:
        showToast('Bu test tipi hələ hazır deyil ✏️');
    }
  }

  // ══════════════════════════════════════════════════════════
  //  SHARED: nəticə ekranı
  // ══════════════════════════════════════════════════════════

  function showResult({ title, correct, total, onRetry }) {
    elProgressFill.style.width = '100%';

    const wrong = total - correct;
    const pct   = Math.round((correct / total) * 100);

    let emoji, resultTitle;
    if (pct === 100)    { emoji = '🏆'; resultTitle = 'Əla nəticə!'; }
    else if (pct >= 80) { emoji = '🎉'; resultTitle = 'Çox yaxşı!'; }
    else if (pct >= 60) { emoji = '👍'; resultTitle = 'Pis deyil!'; }
    else                { emoji = '💪'; resultTitle = 'Davam et!'; }

    setTimeout(() => {
      elQuizScreen.classList.add('hidden');
      elResultScreen.classList.remove('hidden');
      elResultStats.classList.remove('hidden');
      elLevelResultCard.classList.add('hidden');

      elResultEmoji.textContent = emoji;
      elResultTitle.textContent = resultTitle;
      elResultDesc.textContent  = `${title} — ${total} boşluqdan ${correct} düzgün`;
      elStatCorrect.textContent = correct;
      elStatWrong.textContent   = wrong;
      elStatPct.textContent     = `${pct}%`;

      // Progress qeyd et
      const lvl = GENERAL_ENGLISH_LEVELS.find(l => l.id === state.lvlId);
      if (lvl) {
        const li = LEVELS.indexOf(lvl);
        if (li !== -1) markCompleted(li, state.quizIdx);
      }

      elResultMainBtn.textContent = 'Yenidən cəhd et';
      elResultMainBtn.onclick     = onRetry;

      elResultBackBtn.classList.remove('hidden');
      elResultBackBtn.textContent = 'Ana səhifəyə qayıt';
      elResultBackBtn.onclick     = () => { closeOverlays(); renderLevels(); };
    }, 300);
  }

  // ══════════════════════════════════════════════════════════
  //  1. WRITING FILL — Drag & Drop boşluq doldurma
  // ══════════════════════════════════════════════════════════

  const WritingFill = (() => {

    // ── State ──────────────────────────────────────────────
    const s = {
      item:     null,
      paraIdx:  0,
      filled:   {},   // { BLANK_0: 'reading', ... }
      mistakes: 0,
      checked:  false,
    };

    // ── Touch state ────────────────────────────────────────
    let touchData   = null;  // { word, fromBlankId|null }
    let ghostActive = false;

    // ── Başlat ─────────────────────────────────────────────
    function start(item) {
      s.item     = item;
      s.paraIdx  = 0;
      s.filled   = {};
      s.mistakes = 0;
      s.checked  = false;
      _ensureGhost();
      _render();
    }

    // ── Paragraph render ───────────────────────────────────
    function _render() {
      const para  = s.item.paragraphs[s.paraIdx];
      const total = s.item.paragraphs.length;

      elProgressFill.style.width = `${(s.paraIdx / total) * 100}%`;
      elQCounter.textContent     = `${s.paraIdx + 1}/${total}`;

      // Mətni parçala
      const parts = para.text.split(/(__BLANK_\d+__)/g);
      let textHTML = '';

      parts.forEach(part => {
        const m = part.match(/^__(\w+)__$/);
        if (m) {
          const id    = m[1];
          const val   = s.filled[id] || '';
          const blank = para.blanks.find(b => b.id === id);
          const minW  = Math.max(blank ? blank.answer.length : 6, 6) * 10 + 12;

          textHTML += `
            <span class="wf-blank ${val ? 'wf-blank-filled' : ''}"
                  data-blank-id="${id}"
                  style="min-width:${minW}px"
                  ondragover="event.preventDefault()"
                  ondrop="WritingEngine._fill.drop(event,'${id}')"
                  ontouchend="WritingEngine._fill.touchDrop(event,'${id}')">
              ${val
                ? `<span class="wf-blank-word"
                         draggable="true"
                         ondragstart="WritingEngine._fill.dragStart(event,'${id}',true)"
                         ontouchstart="WritingEngine._fill.touchStart(event,'${id}',true)"
                         ontouchmove="WritingEngine._fill.touchMove(event)">${val}</span>`
                : ''}
            </span>`;
        } else {
          textHTML += `<span>${part}</span>`;
        }
      });

      // Sözlər hovuzu
      const usedWords = Object.values(s.filled);
      const wordsHTML = para.words.map(w => {
        const usedCount  = usedWords.filter(u => u === w).length;
        const totalCount = para.blanks.filter(b => b.answer === w).length;
        const hidden     = para.blanks.some(b => b.answer === w) && usedCount >= totalCount;
        return `
          <span class="wf-word ${hidden ? 'wf-word-hidden' : ''}"
                draggable="true"
                data-word="${w}"
                ondragstart="WritingEngine._fill.dragStart(event,'${w}',false)"
                ontouchstart="WritingEngine._fill.touchStart(event,'${w}',false)"
                ontouchmove="WritingEngine._fill.touchMove(event)"
                ontouchend="WritingEngine._fill.touchEnd(event)">
            ${w}
          </span>`;
      }).join('');

      const isLast   = s.paraIdx === total - 1;
      const btnLabel = s.checked ? (isLast ? 'Bitir →' : 'Növbəti →') : 'Yoxla';

      const quizBody = document.querySelector('.quiz-body');
      quizBody.className = 'quiz-body wf-body';
      quizBody.innerHTML = `
        <div class="wf-text-card">
          <p class="wf-text" id="wf-text">${textHTML}</p>
        </div>
        <div class="wf-words-pool" id="wf-words-pool">${wordsHTML}</div>
        <button class="wf-check-btn" id="wf-check-btn"
                onclick="WritingEngine._fill.checkOrNext()">
          ${btnLabel}
        </button>
        <div class="wf-feedback" id="wf-feedback"></div>
      `;
    }

    // ── Desktop drag ───────────────────────────────────────
    let dragData = null;

    function dragStart(event, idOrWord, fromBlank) {
      dragData = fromBlank
        ? { word: s.filled[idOrWord], fromBlankId: idOrWord }
        : { word: idOrWord, fromBlankId: null };
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', dragData.word);
    }

    function drop(event, blankId) {
      event.preventDefault();
      if (!dragData || s.checked) return;
      _place(dragData.word, dragData.fromBlankId, blankId);
      dragData = null;
    }

    // ── Mobil touch ────────────────────────────────────────
    function touchStart(event, idOrWord, fromBlank) {
      const word = fromBlank ? s.filled[idOrWord] : idOrWord;
      touchData   = { word, fromBlankId: fromBlank ? idOrWord : null };
      ghostActive = true;
      const ghost = document.getElementById('wf-ghost');
      if (ghost) { ghost.textContent = word; ghost.style.display = 'block'; }
      _moveGhost(event.touches[0]);
    }

    function touchMove(event) {
      if (!ghostActive || !touchData) return;
      event.preventDefault();
      _moveGhost(event.touches[0]);
    }

    function touchEnd() {
      const ghost = document.getElementById('wf-ghost');
      if (ghost) ghost.style.display = 'none';
      ghostActive = false;
    }

    function touchDrop(event, blankId) {
      const ghost = document.getElementById('wf-ghost');
      if (ghost) ghost.style.display = 'none';
      ghostActive = false;
      if (!touchData || s.checked) return;
      _place(touchData.word, touchData.fromBlankId, blankId);
      touchData = null;
    }

    function _moveGhost(touch) {
      const ghost = document.getElementById('wf-ghost');
      if (!ghost) return;
      ghost.style.left = `${touch.clientX + 12}px`;
      ghost.style.top  = `${touch.clientY - 20}px`;
    }

    // ── Sözü yerləşdir ─────────────────────────────────────
    function _place(word, fromBlankId, toBlankId) {
      if (fromBlankId) delete s.filled[fromBlankId];
      if (s.filled[toBlankId]) delete s.filled[toBlankId];
      s.filled[toBlankId] = word;
      _render();
    }

    // ── Yoxla / Növbəti ────────────────────────────────────
    function checkOrNext() {
      if (s.checked) {
        s.paraIdx++;
        s.checked = false;
        s.filled  = {};
        if (s.paraIdx >= s.item.paragraphs.length) {
          _finish();
        } else {
          _render();
        }
        return;
      }

      const para   = s.item.paragraphs[s.paraIdx];
      const blanks = para.blanks;

      // Hamısı doldurulubmu?
      if (!blanks.every(b => s.filled[b.id])) {
        const fb = document.getElementById('wf-feedback');
        if (fb) { fb.textContent = 'Bütün boşluqları doldur!'; fb.className = 'wf-feedback wf-fb-warn'; }
        return;
      }

      // Yoxla
      let errors = 0;
      blanks.forEach(b => {
        const el   = document.querySelector(`[data-blank-id="${b.id}"]`);
        const isOk = s.filled[b.id] === b.answer;
        if (!isOk) errors++;
        if (el) el.classList.add(isOk ? 'wf-blank-correct' : 'wf-blank-wrong');
      });

      // Səhv olanları düzgün cavabla göstər
      blanks.forEach(b => {
        if (s.filled[b.id] !== b.answer) {
          const el = document.querySelector(`[data-blank-id="${b.id}"]`);
          if (el) el.innerHTML = `<span class="wf-blank-word wf-correct-show">${b.answer}</span>`;
        }
      });

      s.mistakes += errors;
      s.checked   = true;

      const fb  = document.getElementById('wf-feedback');
      const btn = document.getElementById('wf-check-btn');
      const isLast = s.paraIdx === s.item.paragraphs.length - 1;

      if (fb) {
        fb.textContent = errors === 0
          ? '✓ Əla! Hamısı düzgündür.'
          : `${errors} səhv var. Düzgün cavablar göstərildi.`;
        fb.className = `wf-feedback ${errors === 0 ? 'wf-fb-correct' : 'wf-fb-wrong'}`;
      }
      if (btn) btn.textContent = isLast ? 'Bitir →' : 'Növbəti →';

      // Söz hovuzunu deaktiv et
      document.querySelectorAll('.wf-word').forEach(w => {
        w.setAttribute('draggable', 'false');
        w.style.pointerEvents = 'none';
        w.style.opacity = '0.5';
      });
    }

    // ── Bitir ──────────────────────────────────────────────
    function _finish() {
      const total   = s.item.paragraphs.reduce((acc, p) => acc + p.blanks.length, 0);
      const correct = total - s.mistakes;
      showResult({
        title:   s.item.title,
        correct,
        total,
        onRetry: () => start(s.item),
      });
    }

    // ── Ghost element ──────────────────────────────────────
    function _ensureGhost() {
      if (document.getElementById('wf-ghost')) return;
      const ghost = document.createElement('span');
      ghost.id = 'wf-ghost';
      ghost.style.cssText = [
        'position:fixed', 'pointer-events:none', 'display:none', 'z-index:9999',
        'padding:4px 12px', 'border-radius:20px', 'font-size:15px',
        'font-weight:500', 'white-space:nowrap',
        'background:var(--color-surface, #fff)',
        'border:1.5px solid var(--color-border-secondary, #ddd)',
        'box-shadow:0 4px 12px rgba(0,0,0,0.15)',
      ].join(';');
      document.body.appendChild(ghost);
    }

    return { start, dragStart, drop, touchStart, touchMove, touchEnd, touchDrop, checkOrNext };
  })();


  // ══════════════════════════════════════════════════════════
  //  2. WRITING ORDER — (gələcək tip — interfeys hazırdır)
  // ══════════════════════════════════════════════════════════

  // const WritingOrder = (() => {
  //   function start(item) { /* ... */ }
  //   return { start };
  // })();


  // ══════════════════════════════════════════════════════════
  //  3. WRITING CHOOSE — (gələcək tip)
  // ══════════════════════════════════════════════════════════

  // const WritingChoose = (() => {
  //   function start(item) { /* ... */ }
  //   return { start };
  // })();


  // ══════════════════════════════════════════════════════════
  //  4. WRITING FREE — (gələcək tip)
  // ══════════════════════════════════════════════════════════

  // const WritingFree = (() => {
  //   function start(item) { /* ... */ }
  //   return { start };
  // })();


  // ── Public API ────────────────────────────────────────────
  return {
    start,
    showResult,
    _fill: WritingFill,   // inline handler-lar üçün (ondrop, ondragstart)
  };

})();
