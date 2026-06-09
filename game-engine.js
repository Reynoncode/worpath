// ============================================================
//  WORDPATH — GAME ENGINE
//  game-engine.js
//
//  Yüklənmə sırası:
//    game-data.js  →  game-engine.js  →  app.js
//
//  Xarici asılılıqlar (app.js-dən):
//    - showToast(msg)
//    - LEVELS  (level array)
//    - localStorage (progress saxlamaq üçün)
// ============================================================

// ── Namespace ────────────────────────────────────────────────
window.WordGame = (function () {

  // ══════════════════════════════════════════════════════════
  //  1. CROSSWORD GENERATOR
  // ══════════════════════════════════════════════════════════

  /**
   * Sözlər siyahısını götürüb grid-ə yerləşdirir.
   * Qaytarır: { grid, placedWords, rows, cols }
   *   grid[r][c] = { letter, wordIds[] }
   *   placedWords = [{ word, clue, az, row, col, dir, cells[] }]
   */
  function generateCrossword(words) {
    // Sözləri uzunluğa görə sırala (uzun → qısa)
    const sorted = [...words]
      .map((w, i) => ({ ...w, word: w.word.toUpperCase(), idx: i }))
      .sort((a, b) => b.word.length - a.word.length);

    // Grid dinamik ölçü — ən uzun söz əsasında
    const maxLen   = sorted[0]?.word.length || 5;
    const gridSize = Math.max(maxLen + 4, Math.min(sorted.length * 2 + 4, 22));

    // Boş grid
    let grid = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => null)
    );

    const placed = [];

    // İlk sözü mərkəzə yatay yerləşdir
    const first = sorted[0];
    if (!first) return { grid, placedWords: [], rows: gridSize, cols: gridSize };

    const startR = Math.floor(gridSize / 2);
    const startC = Math.floor((gridSize - first.word.length) / 2);
    placeWord(grid, first, startR, startC, 'H');
    placed.push(makeEntry(first, startR, startC, 'H'));

    // Qalan sözləri yerləşdir
    for (let wi = 1; wi < sorted.length; wi++) {
      const w = sorted[wi];
      let bestPlacement = null;
      let bestScore     = -1;

      // Yerləşdirilmiş hər sözdəki hər hərfi yoxla
      for (const p of placed) {
        for (let pi = 0; pi < p.word.length; pi++) {
          const pLetter = p.word[pi];

          // Yeni sözdəki hər hərfi yoxla
          for (let wi2 = 0; wi2 < w.word.length; wi2++) {
            if (w.word[wi2] !== pLetter) continue;

            // Əks istiqamətdə yerləşdir
            const dir = p.dir === 'H' ? 'V' : 'H';
            let r, c;
            if (dir === 'H') {
              r = p.row + (p.dir === 'V' ? pi : 0);
              c = p.col + (p.dir === 'H' ? pi : 0) - wi2;
              if (p.dir === 'V') r = p.row + pi;
              else               r = p.row;
              c = p.col + (p.dir === 'H' ? pi : 0) - wi2;
            } else {
              c = p.col + (p.dir === 'H' ? pi : 0);
              r = p.row + (p.dir === 'V' ? pi : 0) - wi2;
              if (p.dir === 'H') c = p.col + pi;
              else               c = p.col;
              r = p.row + (p.dir === 'V' ? pi : 0) - wi2;
            }

            const score = canPlace(grid, w.word, r, c, dir, gridSize);
            if (score > bestScore) {
              bestScore     = score;
              bestPlacement = { r, c, dir };
            }
          }
        }
      }

      if (bestPlacement && bestScore > 0) {
        placeWord(grid, w, bestPlacement.r, bestPlacement.c, bestPlacement.dir);
        placed.push(makeEntry(w, bestPlacement.r, bestPlacement.c, bestPlacement.dir));
      } else {
        // Sığmayan sözü ayrıca yatay yerləşdir (boş sahədə)
        const fallback = findFreeRow(grid, w.word.length, gridSize, placed);
        if (fallback) {
          placeWord(grid, w, fallback.r, fallback.c, 'H');
          placed.push(makeEntry(w, fallback.r, fallback.c, 'H'));
        }
      }
    }

    // Grid-i kəs — boş sətir/sütunları sil + 1px padding
    const trimmed = trimGrid(grid, gridSize);
    return {
      grid:        trimmed.grid,
      placedWords: placed.map(p => ({
        ...p,
        row: p.row - trimmed.minR,
        col: p.col - trimmed.minC,
        cells: p.cells.map(cell => ({
          r: cell.r - trimmed.minR,
          c: cell.c - trimmed.minC,
        })),
      })),
      rows: trimmed.rows,
      cols: trimmed.cols,
    };
  }

  function canPlace(grid, word, r, c, dir, size) {
    let intersections = 0;
    for (let i = 0; i < word.length; i++) {
      const cr = dir === 'H' ? r      : r + i;
      const cc = dir === 'H' ? c + i  : c;
      if (cr < 0 || cr >= size || cc < 0 || cc >= size) return -1;
      const cell = grid[cr][cc];
      if (cell && cell.letter !== word[i]) return -1; // konflikt
      if (cell && cell.letter === word[i]) intersections++;
      // Yan yoxlama — paralel sözlər toxunmasın
      if (!cell) {
        if (dir === 'H') {
          if (grid[cr - 1]?.[cc] && !(r === cr)) return -1;
          if (grid[cr + 1]?.[cc] && !(r === cr)) return -1;
        } else {
          if (grid[cr]?.[cc - 1] && !(c === cc)) return -1;
          if (grid[cr]?.[cc + 1] && !(c === cc)) return -1;
        }
      }
    }
    // Başlanğıc/son yoxlama
    const beforeR = dir === 'H' ? r      : r - 1;
    const beforeC = dir === 'H' ? c - 1  : c;
    const afterR  = dir === 'H' ? r      : r + word.length;
    const afterC  = dir === 'H' ? c + word.length : c;
    if (grid[beforeR]?.[beforeC]) return -1;
    if (grid[afterR]?.[afterC])   return -1;

    return intersections > 0 ? intersections : 0; // 0 = yerləşə bilər amma qoşulmur
  }

  function placeWord(grid, wordObj, r, c, dir) {
    for (let i = 0; i < wordObj.word.length; i++) {
      const cr = dir === 'H' ? r     : r + i;
      const cc = dir === 'H' ? c + i : c;
      grid[cr][cc] = { letter: wordObj.word[i], wordIdx: wordObj.idx };
    }
  }

  function makeEntry(wordObj, r, c, dir) {
    const cells = [];
    for (let i = 0; i < wordObj.word.length; i++) {
      cells.push({
        r: dir === 'H' ? r     : r + i,
        c: dir === 'H' ? c + i : c,
      });
    }
    return { ...wordObj, row: r, col: c, dir, cells, found: false };
  }

  function findFreeRow(grid, wordLen, size, placed) {
    // Yerləşdirilmiş sözlərin əhatə etdiyi sətir aralığını tap
    let usedRows = new Set(placed.flatMap(p => p.cells.map(c => c.r)));
    for (let r = 1; r < size - 1; r++) {
      if (usedRows.has(r)) continue;
      const c = Math.floor((size - wordLen) / 2);
      if (c >= 0 && c + wordLen < size) return { r, c };
    }
    return null;
  }

  function trimGrid(grid, size) {
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
    // 1px padding
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

  /**
   * Krossvordda istifadə olunan bütün unikal hərfləri qaytarır.
   * Shuffle edilmiş formada.
   */
  function getWheelLetters(placedWords) {
    const letterSet = new Set();
    placedWords.forEach(pw => {
      pw.word.split('').forEach(l => letterSet.add(l));
    });
    return shuffleArr([...letterSet]);
  }

  function shuffleArr(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  // ══════════════════════════════════════════════════════════
  //  3. GAME STATE
  // ══════════════════════════════════════════════════════════

  let state = null;

  function initState(levelId, gameKey, gameData, phaseIdx) {
    const phase    = gameData.phases[phaseIdx];
    const result   = generateCrossword(phase.words);
    const letters  = getWheelLetters(result.placedWords);

    state = {
      levelId,
      gameKey,
      gameData,
      phaseIdx,
      totalPhases: gameData.phases.length,

      // Crossword
      grid:        result.grid,
      placedWords: result.placedWords,
      rows:        result.rows,
      cols:        result.cols,

      // Letter wheel
      letters,
      selected:    [],       // seçilmiş hərf indexləri
      currentWord: '',

      // Progress
      foundWords:  new Set(),
    };
  }


  // ══════════════════════════════════════════════════════════
  //  4. UI — ANA SCREEN
  // ══════════════════════════════════════════════════════════

  const OVERLAY_ID = 'wg-overlay';

  function getLvlColor() {
    if (!state) return '#e74c3c';
    const lvl = (typeof LEVELS !== 'undefined')
      ? LEVELS.find(l => l.id === state.levelId)
      : null;
    return lvl?.color || '#e74c3c';
  }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  // ── Overlay aç ───────────────────────────────────────────
  function openOverlay() {
    let overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;
      overlay.style.cssText = `
        position:fixed; inset:0; z-index:9999;
        display:flex; flex-direction:column;
        background:${isDark() ? '#0f1923' : '#f5f6fa'};
        font-family:inherit;
        overflow:hidden;
      `;
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = buildGameHTML();
    overlay.style.display = 'flex';
    attachGameEvents(overlay);
    renderCrosswordCells();
  }

  function closeOverlay() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
      overlay.style.display = 'none';
      overlay.innerHTML = '';
    }
    state = null;
  }

  // ── Ana HTML strukturu ────────────────────────────────────
  function buildGameHTML() {
    const color    = getLvlColor();
    const dark     = isDark();
    const bg       = dark ? '#0f1923'  : '#f5f6fa';
    const cardBg   = dark ? '#142233'  : '#ffffff';
    const textMain = dark ? '#e8edf3'  : '#1a2233';
    const textSub  = dark ? '#8a9bb0'  : '#6b7a90';
    const border   = dark ? '#1e3048'  : '#e4e9f0';

    const phaseLabel = `Phase ${state.phaseIdx + 1} / ${state.totalPhases}`;
    const title      = state.gameData.title || 'Word Game';

    // Clue list
    const clues = state.placedWords.map(pw =>
      `<span class="wg-clue-chip" data-word="${pw.word}"
        style="
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 10px; border-radius:20px; font-size:13px;
          background:${dark ? '#1e3048' : '#eef1f7'};
          color:${textSub};
          border:1.5px solid ${border};
          transition:all .25s;
          cursor:default;
        ">
        <span class="wg-clue-dot" style="
          width:7px; height:7px; border-radius:50%;
          background:${textSub}; flex-shrink:0;
          transition:background .25s;
        "></span>
        ${pw.az}
      </span>`
    ).join('');

    return `
    <style>
      #wg-overlay * { box-sizing:border-box; }

      /* ── Header ── */
      #wg-header {
        display:flex; align-items:center; justify-content:space-between;
        padding:14px 18px 10px;
        background:${cardBg};
        border-bottom:1.5px solid ${border};
        flex-shrink:0;
      }
      #wg-back-btn {
        width:36px; height:36px; border-radius:50%;
        border:none; background:${dark ? '#1e3048' : '#eef1f7'};
        color:${textMain}; cursor:pointer;
        display:flex; align-items:center; justify-content:center;
        font-size:18px; transition:background .2s;
      }
      #wg-back-btn:hover { background:${dark ? '#263d58' : '#dde3ee'}; }
      #wg-title-wrap { text-align:center; flex:1; }
      #wg-title { font-size:15px; font-weight:700; color:${textMain}; margin:0; }
      #wg-phase-label {
        font-size:11px; color:${color}; font-weight:600;
        letter-spacing:.5px; margin-top:1px;
      }

      /* ── Clues ── */
      #wg-clues-wrap {
        padding:10px 16px 8px;
        background:${cardBg};
        border-bottom:1.5px solid ${border};
        flex-shrink:0;
      }
      #wg-clues {
        display:flex; flex-wrap:wrap; gap:6px;
      }
      .wg-clue-chip.wg-clue-found {
        background:${color}22 !important;
        border-color:${color} !important;
        color:${color} !important;
        text-decoration:line-through;
      }
      .wg-clue-chip.wg-clue-found .wg-clue-dot {
        background:${color} !important;
      }

      /* ── Crossword ── */
      #wg-crossword-wrap {
        flex:1; overflow:auto;
        display:flex; align-items:center; justify-content:center;
        padding:12px;
      }
      #wg-crossword {
        display:grid;
        gap:3px;
      }
      .wg-cell {
        border-radius:6px;
        display:flex; align-items:center; justify-content:center;
        font-weight:700;
        font-size:15px;
        color:${textMain};
        background:${dark ? '#1e3048' : '#e8ecf4'};
        border:1.5px solid ${dark ? '#263d58' : '#d0d7e8'};
        transition:background .3s, color .3s, transform .2s;
        user-select:none;
      }
      .wg-cell.wg-empty {
        background:transparent !important;
        border-color:transparent !important;
      }
      .wg-cell.wg-found {
        background:${color} !important;
        color:#fff !important;
        border-color:${color} !important;
      }
      .wg-cell.wg-found-anim {
        animation: wgCellPop .35s cubic-bezier(.34,1.56,.64,1) both;
      }

      /* ── Bottom bar — word input display ── */
      #wg-word-display {
        background:${cardBg};
        border-top:1.5px solid ${border};
        padding:10px 16px 6px;
        display:flex; align-items:center; justify-content:center;
        min-height:52px; flex-shrink:0;
        gap:5px;
      }
      .wg-typed-letter {
        width:36px; height:36px; border-radius:8px;
        display:flex; align-items:center; justify-content:center;
        font-size:17px; font-weight:700;
        background:${color}22;
        color:${color};
        border:2px solid ${color};
        transition:all .15s;
      }
      .wg-typed-placeholder {
        color:${textSub}; font-size:14px; font-style:italic;
      }

      /* ── Letter wheel ── */
      #wg-wheel-wrap {
        background:${cardBg};
        border-top:1.5px solid ${border};
        padding:12px 16px 20px;
        display:flex; flex-direction:column; align-items:center;
        gap:14px; flex-shrink:0;
      }
      #wg-wheel {
        position:relative;
      }
      .wg-letter-btn {
        position:absolute;
        width:46px; height:46px; border-radius:50%;
        display:flex; align-items:center; justify-content:center;
        font-size:17px; font-weight:800;
        background:${color};
        color:#fff;
        border:none; cursor:pointer;
        transform:translate(-50%, -50%);
        transition:transform .12s, background .15s, box-shadow .15s;
        box-shadow:0 3px 10px ${color}55;
        user-select:none;
        -webkit-tap-highlight-color:transparent;
      }
      .wg-letter-btn.selected {
        background:${dark ? '#fff' : '#1a2233'};
        color:${color};
        transform:translate(-50%, -50%) scale(1.15);
        box-shadow:0 4px 14px rgba(0,0,0,.35);
      }
      .wg-letter-btn:disabled {
        opacity:.35; cursor:default;
      }
      #wg-wheel-center {
        position:absolute;
        width:38px; height:38px; border-radius:50%;
        top:50%; left:50%;
        transform:translate(-50%,-50%);
        background:${dark ? '#1e3048' : '#eef1f7'};
        border:2px solid ${border};
        display:flex; align-items:center; justify-content:center;
        font-size:18px; cursor:pointer;
      }

      /* ── SVG xətlər (wheel connections) ── */
      #wg-wheel-svg {
        position:absolute; top:0; left:0;
        pointer-events:none;
      }
      .wg-conn-line {
        stroke:${color};
        stroke-width:3;
        stroke-linecap:round;
        opacity:.6;
      }

      /* ── Action buttons ── */
      #wg-actions {
        display:flex; gap:10px;
      }
      .wg-action-btn {
        flex:1; padding:11px 0; border-radius:12px;
        font-size:14px; font-weight:700;
        cursor:pointer; border:none;
        transition:opacity .2s, transform .1s;
      }
      .wg-action-btn:active { transform:scale(.97); }
      #wg-submit-btn {
        background:${color};
        color:#fff;
        box-shadow:0 3px 12px ${color}44;
      }
      #wg-shuffle-btn {
        background:${dark ? '#1e3048' : '#eef1f7'};
        color:${textMain};
      }

      /* ── Animasiyalar ── */
      @keyframes wgCellPop {
        0%   { transform:scale(.7); opacity:.5; }
        60%  { transform:scale(1.12); }
        100% { transform:scale(1);  opacity:1; }
      }
      @keyframes wgShake {
        0%,100% { transform:translateX(0); }
        20%     { transform:translateX(-6px); }
        40%     { transform:translateX(6px); }
        60%     { transform:translateX(-4px); }
        80%     { transform:translateX(4px); }
      }
      .wg-shake { animation:wgShake .35s ease both; }

      /* ── Phase Complete Screen ── */
      #wg-phase-complete {
        position:fixed; inset:0; z-index:10000;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        background:${dark ? 'rgba(15,25,35,.92)' : 'rgba(245,246,250,.94)'};
        backdrop-filter:blur(6px);
        gap:18px; padding:24px;
      }
      #wg-phase-complete h2 {
        font-size:26px; font-weight:800;
        color:${textMain}; margin:0; text-align:center;
      }
      #wg-phase-complete p {
        font-size:15px; color:${textSub};
        margin:0; text-align:center;
      }
      .wg-pc-emoji {
        font-size:60px; animation:wgPopIn .4s cubic-bezier(.34,1.56,.64,1);
      }
      .wg-pc-btn {
        width:100%; max-width:300px;
        padding:14px; border-radius:14px;
        font-size:16px; font-weight:700;
        cursor:pointer; border:none;
        transition:opacity .2s, transform .1s;
      }
      .wg-pc-btn:active { transform:scale(.97); }
      .wg-pc-btn-primary {
        background:${color}; color:#fff;
        box-shadow:0 4px 16px ${color}44;
      }
      .wg-pc-btn-secondary {
        background:${dark ? '#1e3048' : '#eef1f7'};
        color:${textMain};
      }
      @keyframes wgPopIn {
        from { transform:scale(0); opacity:0; }
        to   { transform:scale(1); opacity:1; }
      }
    </style>

    <!-- Header -->
    <div id="wg-header">
      <button id="wg-back-btn">&#8592;</button>
      <div id="wg-title-wrap">
        <div id="wg-title">${title}</div>
        <div id="wg-phase-label">${phaseLabel}</div>
      </div>
      <div style="width:36px"></div>
    </div>

    <!-- Clues -->
    <div id="wg-clues-wrap">
      <div id="wg-clues">${clues}</div>
    </div>

    <!-- Crossword -->
    <div id="wg-crossword-wrap">
      <div id="wg-crossword"
        style="grid-template-columns: repeat(${state.cols}, var(--wg-cell-size, 32px));
               grid-template-rows:    repeat(${state.rows}, var(--wg-cell-size, 32px));">
      </div>
    </div>

    <!-- Word display -->
    <div id="wg-word-display">
      <span class="wg-typed-placeholder">Hərfləri birləşdir...</span>
    </div>

    <!-- Wheel + actions -->
    <div id="wg-wheel-wrap">
      <div id="wg-wheel" style="position:relative;">
        <!-- SVG lines drawn by JS -->
      </div>
      <div id="wg-actions">
        <button class="wg-action-btn" id="wg-shuffle-btn">🔀 Qarışdır</button>
        <button class="wg-action-btn" id="wg-submit-btn">✓ Yoxla</button>
      </div>
    </div>
    `;
  }


  // ══════════════════════════════════════════════════════════
  //  5. CROSSWORD RENDER
  // ══════════════════════════════════════════════════════════

  function renderCrosswordCells() {
    const wrap  = document.getElementById('wg-crossword-wrap');
    const board = document.getElementById('wg-crossword');
    if (!board) return;

    // Responsive cell ölçüsü
    const availW    = wrap.clientWidth  - 24;
    const availH    = wrap.clientHeight - 24;
    const cellByW   = Math.floor(availW  / state.cols);
    const cellByH   = Math.floor(availH  / state.rows);
    const cellSize  = Math.max(24, Math.min(cellByW, cellByH, 38));

    board.style.gridTemplateColumns = `repeat(${state.cols}, ${cellSize}px)`;
    board.style.gridTemplateRows    = `repeat(${state.rows}, ${cellSize}px)`;

    board.innerHTML = '';
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.cols; c++) {
        const cell = state.grid[r][c];
        const div  = document.createElement('div');
        div.className  = cell ? 'wg-cell' : 'wg-cell wg-empty';
        div.dataset.r  = r;
        div.dataset.c  = c;
        div.textContent = '';   // Hərflər gizli — yalnız tapılanda görünür
        if (cell) {
          div.dataset.letter = cell.letter;
        }
        board.appendChild(div);
      }
    }
    refreshFoundCells();
  }

  function refreshFoundCells() {
    state.foundWords.forEach(word => {
      const pw = state.placedWords.find(p => p.word === word);
      if (!pw) return;
      pw.cells.forEach(({ r, c }) => {
        const el = document.querySelector(`#wg-crossword .wg-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) {
          el.textContent = state.grid[r]?.[c]?.letter || '';
          el.classList.add('wg-found');
        }
      });
    });
  }

  // ── Söz tapılanda animasiya ───────────────────────────────
  function animateWordFound(word) {
    const pw = state.placedWords.find(p => p.word === word);
    if (!pw) return;

    pw.cells.forEach(({ r, c }, i) => {
      setTimeout(() => {
        const el = document.querySelector(`#wg-crossword .wg-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) {
          el.textContent = state.grid[r]?.[c]?.letter || '';
          el.classList.add('wg-found', 'wg-found-anim');
          setTimeout(() => el.classList.remove('wg-found-anim'), 400);
        }
      }, i * 60);
    });

    // Clue chip-i işarələ
    const chip = document.querySelector(`.wg-clue-chip[data-word="${word}"]`);
    if (chip) chip.classList.add('wg-clue-found');
  }


  // ══════════════════════════════════════════════════════════
  //  6. LETTER WHEEL RENDER
  // ══════════════════════════════════════════════════════════

  function renderWheel() {
    const wrap = document.getElementById('wg-wheel');
    if (!wrap) return;

    const letters = state.letters;
    const count   = letters.length;

    // Wheel ölçüsü ekrana görə
    const maxWheel = Math.min(window.innerWidth - 48, 280);
    const radius   = Math.max(60, Math.min(maxWheel / 2 - 26, 110));
    const size     = radius * 2 + 60;
    const cx       = size / 2;
    const cy       = size / 2;

    wrap.style.width  = `${size}px`;
    wrap.style.height = `${size}px`;

    // SVG xətlər üçün
    let svgHTML = `<svg id="wg-wheel-svg" width="${size}" height="${size}"></svg>`;

    // Hərflər
    let btnsHTML = '';
    letters.forEach((letter, i) => {
      const angle = (2 * Math.PI * i / count) - Math.PI / 2;
      const x     = cx + radius * Math.cos(angle);
      const y     = cy + radius * Math.sin(angle);
      btnsHTML += `
        <button class="wg-letter-btn" data-idx="${i}" data-letter="${letter}"
          style="left:${x}px; top:${y}px;">
          ${letter}
        </button>`;
    });

    // Mərkəz — sil düyməsi
    btnsHTML += `
      <div id="wg-wheel-center" title="Sil">⌫</div>`;

    wrap.innerHTML = svgHTML + btnsHTML;

    attachWheelEvents(wrap);
  }

  function attachWheelEvents(wrap) {
    wrap.querySelectorAll('.wg-letter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx    = parseInt(btn.dataset.idx);
        const letter = btn.dataset.letter;
        if (btn.classList.contains('selected')) return;
        btn.classList.add('selected');
        state.selected.push(idx);
        state.currentWord += letter;
        updateWordDisplay();
        drawWheelLines();
      });
    });

    const centerBtn = wrap.querySelector('#wg-wheel-center');
    if (centerBtn) {
      centerBtn.addEventListener('click', clearSelection);
    }
  }

  function clearSelection() {
    state.selected   = [];
    state.currentWord = '';
    document.querySelectorAll('.wg-letter-btn').forEach(b => b.classList.remove('selected'));
    updateWordDisplay();
    drawWheelLines();
  }

  function drawWheelLines() {
    const svg = document.getElementById('wg-wheel-svg');
    if (!svg) return;
    svg.innerHTML = '';

    const btns = document.querySelectorAll('.wg-letter-btn');
    const color = getLvlColor();

    for (let i = 0; i < state.selected.length - 1; i++) {
      const a = btns[state.selected[i]];
      const b = btns[state.selected[i + 1]];
      if (!a || !b) continue;

      const ax = parseFloat(a.style.left);
      const ay = parseFloat(a.style.top);
      const bx = parseFloat(b.style.left);
      const by = parseFloat(b.style.top);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', ax);
      line.setAttribute('y1', ay);
      line.setAttribute('x2', bx);
      line.setAttribute('y2', by);
      line.setAttribute('class', 'wg-conn-line');
      line.setAttribute('stroke', color);
      svg.appendChild(line);
    }
  }

  function updateWordDisplay() {
    const display = document.getElementById('wg-word-display');
    if (!display) return;

    if (!state.currentWord) {
      display.innerHTML = `<span class="wg-typed-placeholder">Hərfləri birləşdir...</span>`;
      return;
    }

    const color = getLvlColor();
    const dark  = isDark();
    display.innerHTML = state.currentWord.split('').map(l => `
      <div class="wg-typed-letter" style="
        background:${color}22; color:${color};
        border:2px solid ${color};
      ">${l}</div>`).join('');
  }


  // ══════════════════════════════════════════════════════════
  //  7. OYUN MƏNTİQİ
  // ══════════════════════════════════════════════════════════

  function submitWord() {
    const word = state.currentWord;
    if (!word) return;

    const pw = state.placedWords.find(p => p.word === word && !state.foundWords.has(word));
    if (pw) {
      state.foundWords.add(word);
      animateWordFound(word);
      clearSelection();

      // Hamısı tapılıbsa phase tamamlandı
      if (state.foundWords.size === state.placedWords.length) {
        setTimeout(onPhaseComplete, 700);
      }
    } else {
      // Səhv söz — shake
      const display = document.getElementById('wg-word-display');
      if (display) {
        display.classList.remove('wg-shake');
        void display.offsetWidth;
        display.classList.add('wg-shake');
        setTimeout(() => display.classList.remove('wg-shake'), 400);
      }
      clearSelection();
    }
  }

  function shuffleLetters() {
    state.letters = shuffleArr(state.letters);
    renderWheel();
  }

  // ── Phase tamamlandı ─────────────────────────────────────
  function onPhaseComplete() {
    const newPhaseIdx = state.phaseIdx + 1;
    const isLastPhase = newPhaseIdx >= state.totalPhases;

    // Progress saxla
    const progressKey = `${state.levelId}_game_${state.gameKey}`;
    localStorage.setItem(progressKey, String(newPhaseIdx));

    showPhaseCompleteScreen(isLastPhase, newPhaseIdx);
  }

  function showPhaseCompleteScreen(isLast, nextPhaseIdx) {
    const overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;

    const color    = getLvlColor();
    const dark     = isDark();
    const textMain = dark ? '#e8edf3' : '#1a2233';
    const textSub  = dark ? '#8a9bb0' : '#6b7a90';

    const emoji   = isLast ? '🏆' : '⭐';
    const heading = isLast ? 'Oyun tamamlandı!' : `Phase ${state.phaseIdx + 1} tamamlandı!`;
    const subtext = isLast
      ? 'Bütün phaseləri uğurla bitirdiniz!'
      : `Növbəti phase: ${nextPhaseIdx + 1} / ${state.totalPhases}`;

    const primaryLabel   = isLast ? 'Ana səhifəyə qayıt' : 'Növbəti phase';
    const secondaryLabel = 'Çıx';

    const screen = document.createElement('div');
    screen.id = 'wg-phase-complete';
    screen.innerHTML = `
      <div class="wg-pc-emoji">${emoji}</div>
      <h2>${heading}</h2>
      <p>${subtext}</p>
      <button class="wg-pc-btn wg-pc-btn-primary" id="wg-pc-primary"
        style="background:${color}; box-shadow:0 4px 16px ${color}44; color:#fff;">
        ${primaryLabel}
      </button>
      <button class="wg-pc-btn wg-pc-btn-secondary" id="wg-pc-secondary"
        style="background:${dark ? '#1e3048' : '#eef1f7'}; color:${textMain};">
        ${secondaryLabel}
      </button>
    `;
    overlay.appendChild(screen);

    screen.querySelector('#wg-pc-primary').addEventListener('click', () => {
      if (isLast) {
        closeOverlay();
        // Ana səhifəni yenilə ki progress görünsün
        if (typeof renderPath === 'function') renderPath();
      } else {
        screen.remove();
        const savedState = { levelId: state.levelId, gameKey: state.gameKey, gameData: state.gameData };
        initState(savedState.levelId, savedState.gameKey, savedState.gameData, nextPhaseIdx);
        overlay.innerHTML = buildGameHTML();
        attachGameEvents(overlay);
        renderCrosswordCells();
      }
    });

    screen.querySelector('#wg-pc-secondary').addEventListener('click', () => {
      closeOverlay();
    });
  }


  // ══════════════════════════════════════════════════════════
  //  8. EVENT LISTENERS
  // ══════════════════════════════════════════════════════════

  function attachGameEvents(overlay) {
    overlay.querySelector('#wg-back-btn')?.addEventListener('click', closeOverlay);
    overlay.querySelector('#wg-submit-btn')?.addEventListener('click', submitWord);
    overlay.querySelector('#wg-shuffle-btn')?.addEventListener('click', shuffleLetters);

    // Responsive: resize-da crossword yenidən hesabla
    const resizeObs = new ResizeObserver(() => {
      renderCrosswordCells();
      renderWheel();
    });
    resizeObs.observe(overlay);

    // Wheel-i ilk render
    renderWheel();
  }


  // ══════════════════════════════════════════════════════════
  //  9. PUBLIC API
  // ══════════════════════════════════════════════════════════

  /**
   * app.js-dəki startWordGame() bu funksiyanı çağırır:
   *   WordGame.start(levelId, gameKey, gameData, savedPhase)
   */
  function start(levelId, gameKey, gameData, savedPhase) {
    initState(levelId, gameKey, gameData, savedPhase);
    openOverlay();
  }

  return { start };

})();
