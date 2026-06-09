// ============================================================
//  WORDPATH — GAME ENGINE  v2
//  game-engine.js
//
//  Yüklənmə sırası:
//    game-data.js  →  game-engine.js  →  app.js
// ============================================================

window.WordGame = (function () {

  // ══════════════════════════════════════════════════════════
  //  1. CROSSWORD GENERATOR
  // ══════════════════════════════════════════════════════════

  function generateCrossword(words) {
    const sorted = [...words]
      .map((w, i) => ({ ...w, word: w.word.toUpperCase(), idx: i }))
      .sort((a, b) => b.word.length - a.word.length);

    if (!sorted.length) return { grid: [], placedWords: [], rows: 0, cols: 0 };

    const maxLen   = sorted[0].word.length;
    const gridSize = Math.max(maxLen + 6, Math.min(sorted.length * 2 + 6, 26));

    let grid = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => null)
    );

    const placed = [];

    // İlk sözü mərkəzə yatay
    const first  = sorted[0];
    const startR = Math.floor(gridSize / 2);
    const startC = Math.floor((gridSize - first.word.length) / 2);
    _placeWord(grid, first, startR, startC, 'H');
    placed.push(_makeEntry(first, startR, startC, 'H'));

    for (let wi = 1; wi < sorted.length; wi++) {
      const w = sorted[wi];
      let best = null, bestScore = -1;

      for (const p of placed) {
        const pDir = p.dir;
        const newDir = pDir === 'H' ? 'V' : 'H';

        for (let pi = 0; pi < p.word.length; pi++) {
          const pLetter = p.word[pi];
          const pCellR = pDir === 'H' ? p.row : p.row + pi;
          const pCellC = pDir === 'H' ? p.col + pi : p.col;

          for (let wi2 = 0; wi2 < w.word.length; wi2++) {
            if (w.word[wi2] !== pLetter) continue;

            let r, c;
            if (newDir === 'H') {
              r = pCellR;
              c = pCellC - wi2;
            } else {
              r = pCellR - wi2;
              c = pCellC;
            }

            const score = _canPlace(grid, w.word, r, c, newDir, gridSize);
            if (score > bestScore) {
              bestScore = score;
              best = { r, c, dir: newDir };
            }
          }
        }
      }

      if (best && bestScore >= 0) {
        _placeWord(grid, w, best.r, best.c, best.dir);
        placed.push(_makeEntry(w, best.r, best.c, best.dir));
      } else {
        // Fallback: boş sətirdə yatay
        const fb = _findFreeRow(grid, w.word.length, gridSize, placed);
        if (fb) {
          _placeWord(grid, w, fb.r, fb.c, 'H');
          placed.push(_makeEntry(w, fb.r, fb.c, 'H'));
        }
        // yerləşdirə bilmədikdə skip (söz atılmır tamam, sadəcə ayrı)
      }
    }

    const trimmed = _trimGrid(grid, gridSize);
    return {
      grid: trimmed.grid,
      placedWords: placed.map(p => ({
        ...p,
        row:   p.row   - trimmed.minR,
        col:   p.col   - trimmed.minC,
        cells: p.cells.map(cell => ({
          r: cell.r - trimmed.minR,
          c: cell.c - trimmed.minC,
        })),
      })),
      rows: trimmed.rows,
      cols: trimmed.cols,
    };
  }

  function _canPlace(grid, word, r, c, dir, size) {
    // Sərhəd yoxlama
    const endR = dir === 'H' ? r             : r + word.length - 1;
    const endC = dir === 'H' ? c + word.length - 1 : c;
    if (r < 0 || c < 0 || endR >= size || endC >= size) return -1;

    // Başlanğıc/son boşluq
    const bR = dir === 'H' ? r     : r - 1;
    const bC = dir === 'H' ? c - 1 : c;
    const aR = dir === 'H' ? r     : r + word.length;
    const aC = dir === 'H' ? c + word.length : c;
    if (grid[bR]?.[bC]) return -1;
    if (grid[aR]?.[aC]) return -1;

    let intersections = 0;
    for (let i = 0; i < word.length; i++) {
      const cr = dir === 'H' ? r     : r + i;
      const cc = dir === 'H' ? c + i : c;
      const cell = grid[cr][cc];

      if (cell) {
        if (cell.letter !== word[i]) return -1;
        intersections++;
      } else {
        // Paralel hərf var mı?
        if (dir === 'H') {
          if (grid[cr - 1]?.[cc] || grid[cr + 1]?.[cc]) return -1;
        } else {
          if (grid[cr]?.[cc - 1] || grid[cr]?.[cc + 1]) return -1;
        }
      }
    }
    return intersections; // 0 = yerləşə bilər (qoşulmur), >0 = kəsişir
  }

  function _placeWord(grid, wordObj, r, c, dir) {
    for (let i = 0; i < wordObj.word.length; i++) {
      const cr = dir === 'H' ? r     : r + i;
      const cc = dir === 'H' ? c + i : c;
      grid[cr][cc] = { letter: wordObj.word[i], wordIdx: wordObj.idx };
    }
  }

  function _makeEntry(wordObj, r, c, dir) {
    const cells = [];
    for (let i = 0; i < wordObj.word.length; i++) {
      cells.push({
        r: dir === 'H' ? r     : r + i,
        c: dir === 'H' ? c + i : c,
      });
    }
    return { ...wordObj, row: r, col: c, dir, cells, found: false };
  }

  function _findFreeRow(grid, wordLen, size, placed) {
    const usedRows = new Set(placed.flatMap(p => p.cells.map(cell => cell.r)));
    for (let r = 2; r < size - 2; r++) {
      if (usedRows.has(r)) continue;
      const c = Math.floor((size - wordLen) / 2);
      if (c >= 0 && c + wordLen < size) {
        // O sütunlarda boşluq var mı?
        let ok = true;
        for (let ci = c - 1; ci <= c + wordLen; ci++) {
          if (grid[r]?.[ci]) { ok = false; break; }
          if (grid[r-1]?.[ci] || grid[r+1]?.[ci]) { ok = false; break; }
        }
        if (ok) return { r, c };
      }
    }
    return null;
  }

  function _trimGrid(grid, size) {
    let minR = size, maxR = 0, minC = size, maxC = 0;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          minR = Math.min(minR, r);
          maxR = Math.max(maxR, r);
          minC = Math.min(minC, c);
          maxC = Math.max(maxC, c);
        }
      }
    }
    if (minR > maxR) return { grid: [[]], minR: 0, minC: 0, rows: 1, cols: 1 };

    // 1 hüceyrə padding
    minR = Math.max(0, minR - 1);
    minC = Math.max(0, minC - 1);
    maxR = Math.min(size - 1, maxR + 1);
    maxC = Math.min(size - 1, maxC + 1);

    const rows = maxR - minR + 1;
    const cols = maxC - minC + 1;
    const newGrid = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => grid[minR + r]?.[minC + c] || null)
    );
    return { grid: newGrid, minR, minC, rows, cols };
  }

// ══════════════════════════════════════════════════════════
//  2. LETTER WHEEL
// ══════════════════════════════════════════════════════════

function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _getWheelLetters(placedWords) {
  const countMap = {};
  placedWords.forEach(pw => {
    const wordCount = {};
    pw.word.split('').forEach(l => {
      wordCount[l] = (wordCount[l] || 0) + 1;
    });
    Object.entries(wordCount).forEach(([l, cnt]) => {
      countMap[l] = Math.max(countMap[l] || 0, cnt);
    });
  });
  const letters = [];
  Object.entries(countMap).forEach(([l, cnt]) => {
    for (let i = 0; i < cnt; i++) letters.push(l);
  });
  return _shuffle(letters);
}

  // ══════════════════════════════════════════════════════════
  //  3. GAME STATE
  // ══════════════════════════════════════════════════════════

  let state = null;

  function _initState(levelId, gameKey, gameData, phaseIdx) {
    const phase   = gameData.phases[phaseIdx];
    const result  = generateCrossword(phase.words);
    const letters = _getWheelLetters(result.placedWords);

    state = {
      levelId,
      gameKey,
      gameData,
      phaseIdx,
      totalPhases:  gameData.phases.length,
      grid:         result.grid,
      placedWords:  result.placedWords,
      rows:         result.rows,
      cols:         result.cols,
      letters,
      selected:     [],      // seçilmiş btn indexləri
      selectedPos:  [],      // {x,y} koordinatları xətt üçün
      currentWord:  '',
      foundWords:   new Set(),
      // Touch sürüşdürmə
      isDragging:   false,
    };
  }


  // ══════════════════════════════════════════════════════════
  //  4. HELPERS
  // ══════════════════════════════════════════════════════════

  function _getLvlColor() {
    if (!state) return '#6C63FF';
    if (typeof LEVELS === 'undefined') return '#6C63FF';
    const lvl = LEVELS.find(l => l.id === state.levelId);
    return lvl?.color || '#6C63FF';
  }

  function _isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function _colors() {
    const dark = _isDark();
    const accent = _getLvlColor();
    return {
      accent,
      bg:        dark ? '#0f1923' : '#f0f2f8',
      card:      dark ? '#142233' : '#ffffff',
      cellBg:    dark ? '#1a2d42' : '#e8edf8',
      cellBd:    dark ? '#243d57' : '#cdd5e8',
      textMain:  dark ? '#e8edf3' : '#1a2233',
      textSub:   dark ? '#7a8fa8' : '#6b7a90',
      border:    dark ? '#1e3048' : '#e0e5f0',
      inputBg:   dark ? '#1e3048' : '#eef1f8',
    };
  }


  // ══════════════════════════════════════════════════════════
  //  5. OVERLAY & HTML
  // ══════════════════════════════════════════════════════════

  const OID = 'wg-overlay';

  function _openOverlay() {
    let ov = document.getElementById(OID);
    if (!ov) {
      ov = document.createElement('div');
      ov.id = OID;
      document.body.appendChild(ov);
    }
    ov.style.cssText = `
      position:fixed; inset:0; z-index:9999;
      display:flex; flex-direction:column;
      overflow:hidden; font-family:inherit;
    `;
  ov.innerHTML = _buildHTML();
  _attachEvents(ov);
  _renderWheel();
  setTimeout(() => _renderCells(), 0);
  }

  function _closeOverlay() {
    const ov = document.getElementById(OID);
    if (ov) { ov.style.display = 'none'; ov.innerHTML = ''; }
    state = null;
    // Path-ı yenilə ki node statusu dəyişsin
    if (typeof renderCefrPath === 'function') {
      try { renderCefrPath(); } catch(e) {}
    }
  }

  function _buildHTML() {
    const C = _colors();
    const phaseLabel = `${state.phaseIdx + 1} / ${state.totalPhases}`;
    const title      = state.gameData.title || 'Word Game';

    const cluesHTML = state.placedWords.map(pw => `
      <span class="wg-chip" data-word="${pw.word}">
        <span class="wg-chip-dot"></span>${pw.az}
      </span>`).join('');

    return `
    <style>
      #${OID} { background:${C.bg}; }
      #${OID} * { box-sizing:border-box; margin:0; padding:0; }

      /* Header */
      #wg-hdr {
        display:flex; align-items:center; gap:12px;
        padding:12px 16px;
        background:${C.card};
        border-bottom:1px solid ${C.border};
        flex-shrink:0;
      }
      #wg-back {
        width:38px; height:38px; border-radius:12px; border:none;
        background:${C.inputBg}; color:${C.textMain};
        font-size:18px; cursor:pointer; display:flex;
        align-items:center; justify-content:center;
        flex-shrink:0; transition:background .15s;
      }
      #wg-back:active { background:${C.cellBd}; }
      #wg-hdr-mid { flex:1; text-align:center; }
      #wg-hdr-title {
        font-size:15px; font-weight:700; color:${C.textMain};
        line-height:1.2;
      }
      #wg-hdr-phase {
        font-size:11px; font-weight:600;
        color:${C.accent}; letter-spacing:.4px; margin-top:2px;
      }
      /* Phase dots */
      #wg-phase-dots {
        display:flex; gap:5px; align-items:center; flex-shrink:0;
      }
      .wg-dot {
        width:8px; height:8px; border-radius:50%;
        background:${C.border}; transition:background .3s;
      }
      .wg-dot.active { background:${C.accent}; }
      .wg-dot.done   { background:${C.accent}88; }

      /* Hint button */
#wg-typed {
  background:${C.card};
  border-top:1px solid ${C.border};
  padding:6px 16px;
  display:flex; align-items:center;
  gap:8px; min-height:46px; flex-shrink:0;
  position:relative;
}

#wg-hint-btn {
  width:34px; height:34px;
  border-radius:50%; border:none;
  background:${C.inputBg};
  font-size:18px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition:background .15s;
}

#wg-hint-btn:active { background:${C.cellBd}; }
#wg-hint-popup {
  display:none;
  position:absolute;
  top:48px; left:14px;
  z-index:200;
  background:${C.card};
  border:1.5px solid ${C.border};
  border-radius:14px;
  padding:10px 12px;
  width:230px;
  box-shadow:0 8px 24px rgba(0,0,0,.22);
}
#wg-hint-popup.open { display:block; }
#wg-hint-list {
  display:flex; flex-wrap:wrap; gap:6px;
}
.wg-chip {
  display:inline-flex; align-items:center; gap:5px;
  padding:4px 10px 4px 8px; border-radius:20px;
  font-size:12px; font-weight:500;
  background:${C.inputBg}; color:${C.textSub};
  border:1.5px solid ${C.border};
  transition:all .3s; white-space:nowrap;
}
.wg-chip-dot {
  width:6px; height:6px; border-radius:50%;
  background:${C.textSub}; flex-shrink:0;
  transition:background .3s;
}
.wg-chip.found {
  background:${C.accent}18;
  color:${C.accent};
  border-color:${C.accent}66;
  text-decoration:line-through;
  opacity:.7;
}
.wg-chip.found .wg-chip-dot { background:${C.accent}; }

      /* Crossword */
      #wg-cw-wrap {
        flex:1; overflow:auto; min-height:0;
        display:flex; align-items:center; justify-content:center;
        padding:10px;
      }
      #wg-cw {
        display:grid;
        gap:2px;
      }
      .wg-cell {
        border-radius:7px;
        display:flex; align-items:center; justify-content:center;
        font-size:14px; font-weight:800; letter-spacing:0;
        color:${C.textMain};
        background:${C.cellBg};
        border:1.5px solid ${C.cellBd};
        transition:background .25s, color .2s, border-color .25s;
        user-select:none;
        position:relative;
      }
      .wg-cell.empty {
        background:transparent !important;
        border-color:transparent !important;
      }
      .wg-cell.found {
        background:${C.accent} !important;
        color:#fff !important;
        border-color:${C.accent} !important;
      }
      .wg-cell.pop {
        animation:wgPop .38s cubic-bezier(.34,1.56,.64,1) both;
      }
      @keyframes wgPop {
        0%   { transform:scale(.65); opacity:.4; }
        65%  { transform:scale(1.1); }
        100% { transform:scale(1);  opacity:1; }
      }

      /* Word display */
#wg-typed {
  background:${C.card};
  border-top:1px solid ${C.border};
  padding:6px 16px;
  display:flex; align-items:center; justify-content:center;
  gap:4px; min-height:46px; flex-shrink:0;
}
      .wg-tletter {
        width:36px; height:36px; border-radius:9px;
        display:flex; align-items:center; justify-content:center;
        font-size:17px; font-weight:800;
        background:${C.accent}20;
        color:${C.accent};
        border:2px solid ${C.accent};
        animation:wgLetterIn .12s ease both;
      }
      @keyframes wgLetterIn {
        from { transform:scale(.7) translateY(4px); opacity:0; }
        to   { transform:scale(1) translateY(0);   opacity:1; }
      }
      .wg-tplaceholder {
        font-size:14px; color:${C.textSub}; font-style:italic;
      }
      .wg-shake { animation:wgShake .35s ease both; }
      @keyframes wgShake {
        0%,100% { transform:translateX(0); }
        20%     { transform:translateX(-7px); }
        40%     { transform:translateX(7px); }
        60%     { transform:translateX(-4px); }
        80%     { transform:translateX(4px); }
      }
      .wg-correct-flash { animation:wgFlash .3s ease; }
      @keyframes wgFlash {
        0%   { background:${C.accent}40; }
        100% { background:${C.card}; }
      }

      /* Wheel wrap */
#wg-wheel-area {
  background:${C.card};
  border-top:1px solid ${C.border};
  padding:6px 16px 12px;
  display:flex; flex-direction:column;
  align-items:center; gap:6px;
  flex-shrink:0;
}

      /* Wheel container */
      #wg-wheel {
        position:relative;
        touch-action:none;
        user-select:none;
      }

      /* Letter buttons */
      .wg-lb {
        position:absolute;
        border-radius:50%; border:none;
        display:flex; align-items:center; justify-content:center;
        font-size:16px; font-weight:800;
        background:${C.accent};
        color:#fff;
        cursor:pointer;
        transform:translate(-50%, -50%);
        transition:transform .1s, background .1s, box-shadow .1s;
        box-shadow:0 3px 10px ${C.accent}55;
        -webkit-tap-highlight-color:transparent;
        touch-action:none;
      }
      .wg-lb.sel {
        background:#fff;
        color:${C.accent};
        transform:translate(-50%, -50%) scale(1.18);
        box-shadow:0 4px 14px rgba(0,0,0,.3);
      }
      .wg-lb:active { transform:translate(-50%,-50%) scale(.92); }

      /* Center clear btn */
      #wg-wcenter {
        position:absolute;
        border-radius:50%; border:none; cursor:pointer;
        background:${C.inputBg};
        display:flex; align-items:center; justify-content:center;
        font-size:16px; color:${C.textMain};
        transform:translate(-50%,-50%);
        transition:background .15s;
        top:50%; left:50%;
        -webkit-tap-highlight-color:transparent;
      }
      #wg-wcenter:active { background:${C.cellBd}; }

      /* SVG lines */
      #wg-wsvg {
        position:absolute; top:0; left:0;
        pointer-events:none;
        overflow:visible;
      }
      .wg-wline {
        stroke:${C.accent};
        stroke-width:3.5;
        stroke-linecap:round;
        opacity:.55;
      }



      /* Phase complete screen */
      #wg-pc {
        position:absolute; inset:0; z-index:10001;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        background:${_isDark() ? 'rgba(10,18,28,.93)' : 'rgba(240,242,248,.95)'};
        backdrop-filter:blur(8px);
        gap:16px; padding:24px;
      }
      #wg-pc .wg-pc-icon {
        font-size:64px;
        animation:wgBounceIn .5s cubic-bezier(.34,1.56,.64,1);
      }
      @keyframes wgBounceIn {
        from { transform:scale(0) rotate(-15deg); opacity:0; }
        to   { transform:scale(1) rotate(0);      opacity:1; }
      }
      #wg-pc h2 { font-size:24px; font-weight:800; color:${C.textMain}; text-align:center; }
      #wg-pc p  { font-size:14px; color:${C.textSub}; text-align:center; line-height:1.5; }
      .wg-pc-btn {
        width:100%; max-width:280px; padding:14px;
        border-radius:14px; font-size:15px; font-weight:700;
        cursor:pointer; border:none;
        transition:transform .1s;
      }
      .wg-pc-btn:active { transform:scale(.97); }
      .wg-pc-primary {
        background:${C.accent}; color:#fff;
        box-shadow:0 4px 16px ${C.accent}44;
      }
      .wg-pc-secondary {
        background:${C.inputBg}; color:${C.textMain};
      }
    </style>

    <div id="wg-hdr">
      <button id="wg-back">&#8592;</button>
      <div id="wg-hdr-mid">
        <div id="wg-hdr-title">${title}</div>
        <div id="wg-hdr-phase">Phase ${phaseLabel}</div>
      </div>
      <div id="wg-phase-dots">
        ${Array.from({ length: state.totalPhases }, (_, i) => `
          <div class="wg-dot ${i < state.phaseIdx ? 'done' : i === state.phaseIdx ? 'active' : ''}"></div>
        `).join('')}
      </div>
    </div>

  
    <div id="wg-cw-wrap">
  <div id="wg-cw"></div>
</div>
<div style="flex:1; min-height:8px;"></div>
<div id="wg-hint-row" style="display:flex;align-items:center;gap:8px;padding:4px 16px;min-height:46px;background:${C.card};border-top:1px solid ${C.border};flex-shrink:0;position:relative;">
  <button id="wg-hint-btn" style="width:34px;height:34px;border-radius:50%;border:none;background:${C.inputBg};font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">💡</button>
  <div id="wg-hint-popup" style="display:none;position:absolute;top:46px;left:14px;z-index:200;background:${C.card};border:1.5px solid ${C.border};border-radius:14px;padding:10px 12px;width:230px;box-shadow:0 8px 24px rgba(0,0,0,.22);">
    <div id="wg-hint-list">${cluesHTML}</div>
  </div>
  <div id="wg-typed-word" style="display:flex;align-items:center;gap:4px;flex:1;justify-content:center;">
    <span class="wg-tplaceholder">Hərfləri birləşdir...</span>
  </div>
</div>
<div id="wg-typed" style="display:none;"></div>

    <div id="wg-wheel-area">
      <div id="wg-wheel"></div>
    </div>`;
  }


  // ══════════════════════════════════════════════════════════
  //  6. CROSSWORD RENDER
  // ══════════════════════════════════════════════════════════

function _renderCells() {
  const wrap  = document.getElementById('wg-cw-wrap');
  const board = document.getElementById('wg-cw');
  if (!board || !wrap) return;

  const MAX_COLS = 15;
  const MAX_ROWS = 25;

  const ov = document.getElementById(OID);
  const totalH = ov ? ov.clientHeight : window.innerHeight;
  
  const hdr      = document.getElementById('wg-hdr');
  const typed    = document.getElementById('wg-typed');
  const wheelArea = document.getElementById('wg-wheel-area');
  
const usedH = (hdr?.offsetHeight        || 60)
            + (typed?.offsetHeight       || 46)
            + (wheelArea?.offsetHeight   || 160)
            + 16;
  
  const availW = wrap.clientWidth - 20;
  const availH = Math.max(totalH - usedH - 20, 180);
  
  const cols = Math.min(state.cols, MAX_COLS);
  const rows = Math.min(state.rows, MAX_ROWS);

  const byW = cols > 0 ? Math.floor(availW / cols) : 30;
  const byH = rows > 0 ? Math.floor(availH / rows) : 30;
  const cs  = Math.max(14, Math.min(byW, byH, 36));

  // Krossvordun faktiki ölçüsü
  const boardW = cols * cs + (cols - 1) * 2;
  const boardH = rows * cs + (rows - 1) * 2;

  board.style.cssText = `
    display:grid;
    grid-template-columns:repeat(${state.cols}, ${cs}px);
    grid-template-rows:repeat(${state.rows}, ${cs}px);
    gap:2px;
    margin:auto;
  `;

  // Scroll yox, mərkəzdə saxla
  wrap.style.overflow   = 'hidden';
  wrap.style.display    = 'flex';
  wrap.style.alignItems = 'center';
  wrap.style.justifyContent = 'center';

  board.innerHTML = '';
  for (let r = 0; r < state.rows; r++) {
    for (let c = 0; c < state.cols; c++) {
      const cell = state.grid[r]?.[c];
      const div  = document.createElement('div');
      div.className = cell ? 'wg-cell' : 'wg-cell empty';
      div.style.cssText = `width:${cs}px; height:${cs}px; font-size:${Math.max(8, cs - 16)}px;`;
      if (cell) {
        div.dataset.r      = r;
        div.dataset.c      = c;
        div.dataset.letter = cell.letter;
        div.textContent    = '';
      }
      board.appendChild(div);
    }
  }
  _refreshFound();
}

  function _refreshFound() {
    state.foundWords.forEach(word => {
      const pw = state.placedWords.find(p => p.word === word);
      if (!pw) return;
      pw.cells.forEach(({ r, c }) => {
        const el = document.querySelector(`#wg-cw [data-r="${r}"][data-c="${c}"]`);
        if (el) {
          el.textContent = state.grid[r]?.[c]?.letter || '';
          el.classList.add('found');
        }
      });
    });
  }

  function _animateWord(word) {
    const pw = state.placedWords.find(p => p.word === word);
    if (!pw) return;
    pw.cells.forEach(({ r, c }, i) => {
      setTimeout(() => {
        const el = document.querySelector(`#wg-cw [data-r="${r}"][data-c="${c}"]`);
        if (!el) return;
        el.textContent = state.grid[r]?.[c]?.letter || '';
        el.classList.add('found', 'pop');
        setTimeout(() => el.classList.remove('pop'), 400);
      }, i * 55);
    });
    // Chip işarələ
    const chip = document.querySelector(`.wg-chip[data-word="${word}"]`);
    if (chip) setTimeout(() => chip.classList.add('found'), pw.cells.length * 55 + 100);
  }


  // ══════════════════════════════════════════════════════════
  //  7. LETTER WHEEL RENDER + TOUCH
  // ══════════════════════════════════════════════════════════

  function _renderWheel() {
    const wrap = document.getElementById('wg-wheel');
    if (!wrap) return;

    const letters = state.letters;
    const count   = letters.length;
    const C       = _colors();

    // Ekrana görə radius
    const maxW   = Math.min(window.innerWidth - 48, 300);
    const radius = Math.max(55, Math.min((maxW / 2) - 28, 115));
    const size   = radius * 2 + 64;
    const cx     = size / 2;
    const cy     = size / 2;
    const btnSz  = Math.max(38, Math.min(50, radius * 0.45));
    const centerSz = Math.max(32, btnSz * 0.76);

    wrap.style.width  = `${size}px`;
    wrap.style.height = `${size}px`;

    let html = `<svg id="wg-wsvg" width="${size}" height="${size}"></svg>`;

    letters.forEach((letter, i) => {
      const angle = (2 * Math.PI * i / count) - Math.PI / 2;
      const x     = cx + radius * Math.cos(angle);
      const y     = cy + radius * Math.sin(angle);
      html += `<button class="wg-lb" data-idx="${i}" data-letter="${letter}"
        style="left:${x}px; top:${y}px; width:${btnSz}px; height:${btnSz}px; font-size:${Math.max(13, btnSz - 22)}px;">
        ${letter}</button>`;
    });

   

 html += `<button id="wg-wcenter"
  style="width:${centerSz}px; height:${centerSz}px; font-size:${Math.max(13, centerSz - 14)}px; background:${C.inputBg}; color:${C.textMain}; border:none; border-radius:50%; cursor:pointer; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
  🔀</button>`;

wrap.innerHTML = html;
// Shuffle button
const centerBtn = wrap.querySelector('#wg-wcenter');
if (centerBtn) {
  centerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    state.letters = _shuffle(state.letters);
    _clearSel();
    _renderWheel();
  });
}
    
_attachWheelEvents(wrap);
  }

  function _attachWheelEvents(wrap) {
    const btns = wrap.querySelectorAll('.wg-lb');

    let isMouseDown = false;

btns.forEach(btn => {
  btn.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    isMouseDown = true;
    if (!btn.classList.contains('sel'))
      _selectLetter(parseInt(btn.dataset.idx), btn.dataset.letter, btn);
  });

  btn.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    if (isMouseDown && !btn.classList.contains('sel'))
      _selectLetter(parseInt(btn.dataset.idx), btn.dataset.letter, btn);
  });
});

wrap.addEventListener('mouseup', (e) => {
  e.stopPropagation();
  if (!isMouseDown) return;
  isMouseDown = false;
  if (state.currentWord.length >= 2) {
    _submitWord();
  } else {
    _clearSel();
  }
});

document.addEventListener('mouseup', (e) => {
  if (!isMouseDown) return;
  isMouseDown = false;
  if (!wrap.contains(e.target)) {
    _clearSel();
  }
});
    // Touch sürüşdürmə (WoW stili)
    wrap.addEventListener('touchstart', _touchStart, { passive: false });
    wrap.addEventListener('touchmove',  _touchMove,  { passive: false });
    wrap.addEventListener('touchend',   _touchEnd,   { passive: false });

   
  }

  function _selectLetter(idx, letter, btnEl) {
    // Artıq seçilibsə skip
    if (state.selected.includes(idx)) return;
    btnEl.classList.add('sel');
    state.selected.push(idx);
    state.currentWord += letter;

    // Btn mərkəz koordinatı
    const x = parseFloat(btnEl.style.left);
    const y = parseFloat(btnEl.style.top);
    state.selectedPos.push({ x, y });

    _updateTyped();
    _drawLines();
  }

  function _touchStart(e) {
    e.preventDefault();
    state.isDragging = true;
    state.selected   = [];
    state.selectedPos = [];
    state.currentWord = '';
    document.querySelectorAll('.wg-lb').forEach(b => b.classList.remove('sel'));
    _updateTyped();
    _processTouch(e.touches[0]);
  }

  function _touchMove(e) {
    e.preventDefault();
    if (!state.isDragging) return;
    _processTouch(e.touches[0]);
  }

  function _touchEnd(e) {
  e.preventDefault();
  state.isDragging = false;
  if (state.currentWord.length >= 2) {
    _submitWord();
  } else {
    _clearSel();
  }
}

  function _processTouch(touch) {
    const wrap = document.getElementById('wg-wheel');
    if (!wrap) return;

    const btns = wrap.querySelectorAll('.wg-lb');
    btns.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dist = Math.hypot(touch.clientX - cx, touch.clientY - cy);

      if (dist < rect.width * 0.65) {
        const idx = parseInt(btn.dataset.idx);
        if (!state.selected.includes(idx)) {
          _selectLetter(idx, btn.dataset.letter, btn);
        }
      }
    });
  }

  function _clearSel() {
    state.selected    = [];
    state.selectedPos = [];
    state.currentWord = '';
    document.querySelectorAll('.wg-lb').forEach(b => b.classList.remove('sel'));
    _updateTyped();
    _drawLines();
  }

  function _drawLines() {
    const svg = document.getElementById('wg-wsvg');
    if (!svg) return;
    svg.innerHTML = '';
    const C = _colors();
    const pos = state.selectedPos;
    for (let i = 0; i < pos.length - 1; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', pos[i].x);
      line.setAttribute('y1', pos[i].y);
      line.setAttribute('x2', pos[i+1].x);
      line.setAttribute('y2', pos[i+1].y);
      line.setAttribute('class', 'wg-wline');
      svg.appendChild(line);
    }
  }
function _updateTyped() {
  const el = document.getElementById('wg-typed-word');
  if (!el) return;
  if (!state.currentWord) {
    el.innerHTML = `<span class="wg-tplaceholder">Hərfləri birləşdir...</span>`;
  } else {
    el.innerHTML = state.currentWord.split('').map(l =>
      `<div class="wg-tletter">${l}</div>`
    ).join('');
  }
}


  // ══════════════════════════════════════════════════════════
  //  8. OYUN MƏNTİQİ
  // ══════════════════════════════════════════════════════════

  function _submitWord() {
    const word = state.currentWord;
    if (!word || word.length < 2) { _clearSel(); return; }

    const pw = state.placedWords.find(p => p.word === word && !state.foundWords.has(word));
    if (pw) {
      state.foundWords.add(word);

      // Typed area flash
      const typed = document.getElementById('wg-hint-row');
      if (typed) {
        typed.classList.add('wg-correct-flash');
        setTimeout(() => typed.classList.remove('wg-correct-flash'), 320);
      }

      _animateWord(word);
      _clearSel();

      if (state.foundWords.size === state.placedWords.length) {
        setTimeout(_onPhaseComplete, 800);
      }
    } else {
      // Shake
      const typed = document.getElementById('wg-hint-row');
      if (typed) {
        typed.classList.remove('wg-shake');
        void typed.offsetWidth;
        typed.classList.add('wg-shake');
        setTimeout(() => { typed.classList.remove('wg-shake'); _clearSel(); }, 380);
      } else {
        _clearSel();
      }
    }
  }

  function _onPhaseComplete() {
    const nextPhase = state.phaseIdx + 1;
    const isLast    = nextPhase >= state.totalPhases;

    const progressKey = `${state.levelId}_game_${state.gameKey}`;
    localStorage.setItem(progressKey, String(nextPhase));

    _showPhaseComplete(isLast, nextPhase);
  }

  function _showPhaseComplete(isLast, nextPhase) {
    const ov = document.getElementById(OID);
    if (!ov) return;
    const C = _colors();

    const icon    = isLast ? '🏆' : '⭐';
    const heading = isLast ? 'Oyun tamamlandı!' : `Phase ${state.phaseIdx + 1} tamamlandı!`;
    const sub     = isLast
      ? 'Bütün mərhələləri uğurla bitirdiniz!'
      : `Növbəti mərhələ: ${nextPhase + 1} / ${state.totalPhases}`;

    const pc = document.createElement('div');
    pc.id = 'wg-pc';
    pc.innerHTML = `
      <div class="wg-pc-icon">${icon}</div>
      <h2>${heading}</h2>
      <p>${sub}</p>
      <button class="wg-pc-btn wg-pc-primary" id="wg-pc-next">
        ${isLast ? '🏠 Ana səhifəyə qayıt' : '▶ Növbəti phase'}
      </button>
      <button class="wg-pc-btn wg-pc-secondary" id="wg-pc-exit">Çıx</button>
    `;
    ov.appendChild(pc);

    pc.querySelector('#wg-pc-next').addEventListener('click', () => {
      if (isLast) {
        _closeOverlay();
      } else {
        pc.remove();
        const { levelId, gameKey, gameData } = state;
        _initState(levelId, gameKey, gameData, nextPhase);
        ov.innerHTML = _buildHTML();
        _attachEvents(ov);
        _renderWheel();
        setTimeout(() => _renderCells(), 0);
      }
    });

    pc.querySelector('#wg-pc-exit').addEventListener('click', _closeOverlay);
  }


  // ══════════════════════════════════════════════════════════
  //  9. EVENT LISTENERS
  // ══════════════════════════════════════════════════════════

  function _attachEvents(ov) {
    ov.querySelector('#wg-back')?.addEventListener('click', _closeOverlay);
    const hintBtn   = ov.querySelector('#wg-hint-btn');
const hintPopup = ov.querySelector('#wg-hint-popup');

hintBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (hintPopup) {
    hintPopup.style.display = hintPopup.style.display === 'none' ? 'block' : 'none';
  }
});
    
ov.addEventListener('click', (e) => {
  if (!e.target.closest('#wg-hint-btn') && !e.target.closest('#wg-hint-popup')) {
    if (hintPopup) hintPopup.style.display = 'none';
  }
});
    
   
    // Responsive — resize-da yenidən hesabla
    if (window._wgResizeObs) window._wgResizeObs.disconnect();
    window._wgResizeObs = new ResizeObserver(() => {
      _renderCells();
      _renderWheel();
    });
    window._wgResizeObs.observe(ov);
  }


  // ══════════════════════════════════════════════════════════
  //  10. PUBLIC API
  // ══════════════════════════════════════════════════════════

  /**
   * app.js-dən çağırılır:
   *   WordGame.start(levelId, gameKey, gameData, savedPhase)
   */
  function start(levelId, gameKey, gameData, savedPhase) {
    _initState(levelId, gameKey, gameData, savedPhase);
    _openOverlay();
  }

  return { start };

})();
