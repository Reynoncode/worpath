// ============================================================
//  WORDPATH — GAME ENGINE  v3
//  game-engine.js
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

    const first  = sorted[0];
    const startR = Math.floor(gridSize / 2);
    const startC = Math.floor((gridSize - first.word.length) / 2);
    _placeWord(grid, first, startR, startC, 'H');
    placed.push(_makeEntry(first, startR, startC, 'H'));

    for (let wi = 1; wi < sorted.length; wi++) {
      const w = sorted[wi];
      let best = null, bestScore = -1;

      for (const p of placed) {
        const pDir   = p.dir;
        const newDir = pDir === 'H' ? 'V' : 'H';

        for (let pi = 0; pi < p.word.length; pi++) {
          const pLetter = p.word[pi];
          const pCellR  = pDir === 'H' ? p.row       : p.row + pi;
          const pCellC  = pDir === 'H' ? p.col + pi  : p.col;

          for (let wi2 = 0; wi2 < w.word.length; wi2++) {
            if (w.word[wi2] !== pLetter) continue;

            let r, c;
            if (newDir === 'H') { r = pCellR;       c = pCellC - wi2; }
            else                { r = pCellR - wi2; c = pCellC; }

            const score = _canPlace(grid, w.word, r, c, newDir, gridSize);
            if (score > bestScore) { bestScore = score; best = { r, c, dir: newDir }; }
          }
        }
      }

      if (best && bestScore >= 0) {
        _placeWord(grid, w, best.r, best.c, best.dir);
        placed.push(_makeEntry(w, best.r, best.c, best.dir));
      } else {
        const fb = _findFreeRow(grid, w.word.length, gridSize, placed);
        if (fb) {
          _placeWord(grid, w, fb.r, fb.c, 'H');
          placed.push(_makeEntry(w, fb.r, fb.c, 'H'));
        }
      }
    }

    const trimmed = _trimGrid(grid, gridSize);

    // FIX: _trimGrid indi rowMap/colMap qaytarır — placed koordinatları
    // compression-dan sonra düzgün translate edilir
    return {
      grid: trimmed.grid,
      placedWords: placed.map(p => ({
        ...p,
        row:   trimmed.rowMap[p.row] ?? p.row - trimmed.minR,
        col:   trimmed.colMap[p.col] ?? p.col - trimmed.minC,
        cells: p.cells.map(cell => ({
          r: trimmed.rowMap[cell.r] ?? cell.r - trimmed.minR,
          c: trimmed.colMap[cell.c] ?? cell.c - trimmed.minC,
        })),
      })),
      rows: trimmed.rows,
      cols: trimmed.cols,
    };
  }

  function _canPlace(grid, word, r, c, dir, size) {
    const endR = dir === 'H' ? r                   : r + word.length - 1;
    const endC = dir === 'H' ? c + word.length - 1 : c;
    if (r < 0 || c < 0 || endR >= size || endC >= size) return -1;

    const bR = dir === 'H' ? r     : r - 1;
    const bC = dir === 'H' ? c - 1 : c;
    const aR = dir === 'H' ? r     : r + word.length;
    const aC = dir === 'H' ? c + word.length : c;
    if (grid[bR]?.[bC]) return -1;
    if (grid[aR]?.[aC]) return -1;

    let intersections = 0;
    for (let i = 0; i < word.length; i++) {
      const cr   = dir === 'H' ? r     : r + i;
      const cc   = dir === 'H' ? c + i : c;
      const cell = grid[cr][cc];

      if (cell) {
        if (cell.letter !== word[i]) return -1;
        intersections++;
      } else {
        if (dir === 'H') {
          if (grid[cr - 1]?.[cc] || grid[cr + 1]?.[cc]) return -1;
        } else {
          if (grid[cr]?.[cc - 1] || grid[cr]?.[cc + 1]) return -1;
        }
      }
    }
    return intersections;
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

  // FIX: _trimGrid indi rowMap və colMap da qaytarır.
  // Köhnə orijinal koordinat → yeni compressed koordinat mapping-i.
  function _trimGrid(grid, size) {
    let minR = size, maxR = 0, minC = size, maxC = 0;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          minR = Math.min(minR, r); maxR = Math.max(maxR, r);
          minC = Math.min(minC, c); maxC = Math.max(maxC, c);
        }
      }
    }
    if (minR > maxR) return { grid: [[]], minR: 0, minC: 0, rows: 1, cols: 1, rowMap: {}, colMap: {} };

    minR = Math.max(0, minR - 1); minC = Math.max(0, minC - 1);
    maxR = Math.min(size - 1, maxR + 1); maxC = Math.min(size - 1, maxC + 1);

    const rawRows = maxR - minR + 1;
    const rawCols = maxC - minC + 1;

    let tempGrid = Array.from({ length: rawRows }, (_, r) =>
      Array.from({ length: rawCols }, (_, c) => grid[minR + r]?.[minC + c] || null)
    );

    // Boş sıraları sıxışdır; hər orijinal sıranın yeni indeksini yadda saxla
    const keptRowsOrig = [];
    let emptyCount = 0;
    for (let r = 0; r < rawRows; r++) {
      const isEmpty = tempGrid[r].every(cell => cell === null);
      if (isEmpty) {
        emptyCount++;
        if (emptyCount <= 1) keptRowsOrig.push(minR + r);
      } else {
        emptyCount = 0;
        keptRowsOrig.push(minR + r);
      }
    }

    // Boş sütunları sıxışdır; hər orijinal sütunun yeni indeksini yadda saxla
    const keptColsOrig = [];
    let emptyColCount = 0;
    for (let c = 0; c < rawCols; c++) {
      const isEmpty = keptRowsOrig.every(origR => !grid[origR]?.[minC + c]);
      if (isEmpty) {
        emptyColCount++;
        if (emptyColCount <= 1) keptColsOrig.push(minC + c);
      } else {
        emptyColCount = 0;
        keptColsOrig.push(minC + c);
      }
    }

    const finalGrid = keptRowsOrig.map(origR =>
      keptColsOrig.map(origC => grid[origR]?.[origC] || null)
    );
    const finalRows = finalGrid.length;
    const finalCols = finalGrid[0]?.length || 0;

    // rowMap: orijinal grid r → yeni compressed r
    const rowMap = {};
    keptRowsOrig.forEach((origR, newIdx) => { rowMap[origR] = newIdx; });

    // colMap: orijinal grid c → yeni compressed c
    const colMap = {};
    keptColsOrig.forEach((origC, newIdx) => { colMap[origC] = newIdx; });

    return { grid: finalGrid, minR, minC, rows: finalRows, cols: finalCols, rowMap, colMap };
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
      pw.word.split('').forEach(l => { wordCount[l] = (wordCount[l] || 0) + 1; });
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
      selected:     [],
      selectedPos:  [],
      currentWord:  '',
      foundWords:   new Set(),
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

  function _darkenAccent(hex, dark) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    if (dark) {
      // FIX 8: dark modeda level rənginin daha tünd versiyası (crossword fon tonu ilə uyumlu)
      return `rgba(${Math.round(r*0.22)},${Math.round(g*0.22)},${Math.round(b*0.26)},1)`;
    } else {
      return `rgba(${Math.round(r*0.82 + 255*0.18)},${Math.round(g*0.82 + 255*0.18)},${Math.round(b*0.82 + 255*0.18)},1)`;
    }
  }

  // FIX 8: Dark modeda çevrə border/glow rəngi üçün level rənginin tünd tonu
  function _darkenAccentBorder(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    // ~60% qaralıq
    return `rgba(${Math.round(r*0.6)},${Math.round(g*0.6)},${Math.round(b*0.6)},1)`;
  }

  function _colors() {
    const dark   = _isDark();
    const accent = _getLvlColor();
    const btnBg  = _darkenAccent(accent, dark);
    return {
      accent,
      btnBg,
      bg:       dark ? '#0f1923' : '#f0f2f8',
      card:     dark ? '#142233' : '#ffffff',
      cellBg:   dark ? '#1a2d42' : '#dce3f5',
      cellBd:   dark ? '#2a4060' : '#b0bcda',
      textMain: dark ? '#e8edf3' : '#1a2233',
      textSub:  dark ? '#7a8fa8' : '#6b7a90',
      border:   dark ? '#1e3048' : '#e0e5f0',
      inputBg:  dark ? '#1e3048' : '#eef1f8',
      selBg:    dark ? '#c8d4e8' : '#ffffff',
    };
  }

  // ══════════════════════════════════════════════════════════
  //  5. WEB AUDIO
  // ══════════════════════════════════════════════════════════

  let _audioCtx = null;

  function _getAudio() {
    if (!_audioCtx) {
      try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    }
    return _audioCtx;
  }

  function _playTick() {
    const ctx = _getAudio(); if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sine';
    o.frequency.setValueAtTime(880, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.06);
    g.gain.setValueAtTime(0.18, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + 0.09);
  }

  function _playSuccess() {
    const ctx = _getAudio(); if (!ctx) return;
    [0, 0.1, 0.2].forEach((delay, i) => {
      const freqs = [523, 659, 784];
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(freqs[i], ctx.currentTime + delay);
      g.gain.setValueAtTime(0.22, ctx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.18);
      o.start(ctx.currentTime + delay);
      o.stop(ctx.currentTime + delay + 0.2);
    });
  }

  function _playError() {
    const ctx = _getAudio(); if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(220, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + 0.2);
  }

  // ══════════════════════════════════════════════════════════
  //  6. TOAST — FIX: 2x böyük, parlama, 3s göstər, hərflər tək-tək dolar, 0.3s yox olur
  // ══════════════════════════════════════════════════════════

  function _showWordToast(word) {
    const wordLen = word.length;
    // Mövcud toast varsa sil
    const old = document.getElementById('wg-toast');
    if (old) { clearTimeout(old._hideTimer); old.remove(); }

    let emoji, text, color;
    if (wordLen <= 4) {
      emoji = '👍'; text = 'Yaxşı!';      color = '#4CAF50';
    } else if (wordLen <= 7) {
      emoji = '⭐'; text = 'Əla!';         color = '#FF9800';
    } else if (wordLen <= 10) {
      emoji = '🔥'; text = 'Möhtəşəm!';   color = '#E91E63';
    } else {
      emoji = '💥'; text = 'İnanılmaz!';  color = '#9C27B0';
    }

    const dark = _isDark();
    const toastBg   = dark ? '#1e2d3d' : '#ffffff';
    const toastText = dark ? '#e8edf3' : '#1a2233';
    const toastBd   = dark ? '#2a4060' : '#e0e5f0';

    const toast = document.createElement('div');
    toast.id = 'wg-toast';
    // FIX 6: 10px aşağı (top:68px əvvəlki 58px idi)
    // FIX 4: 2x böyük (padding, font-size artırıldı)
    toast.style.cssText = `
      position:absolute;
      top:68px; left:50%; transform:translateX(-50%) translateY(-12px);
      z-index:10050;
      background:${toastBg};
      border:2px solid ${toastBd};
      border-left:5px solid ${color};
      border-radius:18px;
      padding:16px 28px;
      display:flex; align-items:center; gap:14px;
      box-shadow:0 8px 32px rgba(0,0,0,0.28);
      font-weight:800; font-size:22px;
      color:${toastText};
      white-space:nowrap;
      pointer-events:none;
      opacity:0;
      transition:opacity .2s ease, transform .2s ease;
      min-width:160px; justify-content:center;
    `;

    // FIX 5: Hərflər tək-tək dolar — əvvəlcə emoji+text span qoyuruq, sonra hərfləri animasiya ilə doldururuq
    const emojiSpan = document.createElement('span');
    emojiSpan.style.cssText = 'font-size:32px; line-height:1;';
    emojiSpan.textContent = emoji;

    const textSpan = document.createElement('span');
    textSpan.style.cssText = `
      font-size:22px; font-weight:800; letter-spacing:2px;
      overflow:hidden; white-space:nowrap;
      max-width:0; opacity:0;
    `;
    textSpan.textContent = text;
    
    toast.appendChild(emojiSpan);
    toast.appendChild(textSpan);
        
    const ov = document.getElementById('wg-overlay');
    if (ov) ov.appendChild(toast);

    // Animasiya: gəl
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

// text hərflərini tək-tək aç (max-width genişlənməsi ilə)
const totalChars = text.length;
setTimeout(() => {
  textSpan.style.transition = `max-width ${totalChars * 0.1 + 0.2}s steps(${totalChars}, end), opacity .15s`;
  textSpan.style.maxWidth = '200px';
  textSpan.style.opacity = '1';
}, 80);

const hideDelay = 3000;
    toast._hideTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-12px)';
      toast.style.transition = 'opacity .3s ease, transform .3s ease';
      setTimeout(() => toast.remove(), 320);
    }, hideDelay);
  }

  // ══════════════════════════════════════════════════════════
  //  7. OVERLAY & HTML
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
      position:fixed;
      top:0; left:0;
      width:100%;
      height:100dvh;
      z-index:9999;
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
  
  // Oyun tam bitibsə ulduz əlavə et
  const wasLastPhase = state && state._pendingStarReward;
  const savedLevelId = state?.levelId;
  const savedGameKey = state?.gameKey;

  if (ov) { ov.style.display = 'none'; ov.innerHTML = ''; }
  state = null;

  if (wasLastPhase) {
    setTimeout(() => {
      _addStarToGameNode(savedLevelId, savedGameKey);
    }, 300);
  }
}
  function _buildHTML() {
    const C          = _colors();
    const dark       = _isDark();
    const accent     = _getLvlColor();
    const phaseLabel = `${state.phaseIdx + 1} / ${state.totalPhases}`;
    const title      = state.gameData.title || 'Word Game';

    // FIX 3 & FIX new color: Hint chip rəngi — tapılmamış: mavi, tapılmış: yaşıl
    const cluesHTML = state.placedWords.map(pw => `
      <span class="wg-chip" data-word="${pw.word}">
        <span class="wg-chip-dot"></span>${pw.az}
      </span>`).join('');

    const iconBack = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>`;

    const iconHint = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l-.7 2H9l-.7-2A7 7 0 0 1 5 9a7 7 0 0 1 7-7z"/><path d="M9 21h6"/><path d="M9.5 17.5h5"/></svg>`;

    // FIX 2: Shuffle SVG — hər iki ox tam görünür (viewBox genişləndirildi, stroke-width azaldıldı)
const iconShuffle = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8af5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4l3 3l-3 3"/><path d="M18 20l3 -3l-3 -3"/><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h4"/><path d="M21 7h-4a5 5 0 0 0 -5 5a5 5 0 0 1 -5 5h-4"/></svg>`;
    // FIX 8: dark modeda wheel düymə rəngləri — level accent-in tünd versiyası
    const wheelBtnBg     = dark ? _darkenAccent(accent, true)       : _darkenAccent(accent, false);
    const wheelBtnBorder = dark ? _darkenAccentBorder(accent)        : accent;
    const wheelGlow      = dark ? `${accent}33`                      : `${accent}44`;

    return `
    <style>
      #${OID} { background:${C.bg}; position:relative; }
      #${OID} * { box-sizing:border-box; margin:0; padding:0; }

      /* Toast hərfi animasiyası */
      @keyframes wgLetterPop {
        from { transform:scale(.5) translateY(6px); opacity:0; }
        to   { transform:scale(1) translateY(0);    opacity:1; }
      }

      /* ── Header ── */
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
      #wg-hdr-title { font-size:15px; font-weight:700; color:${C.textMain}; line-height:1.2; }
      #wg-hdr-phase { font-size:11px; font-weight:600; color:${C.accent}; letter-spacing:.4px; margin-top:2px; }

      #wg-phase-dots { display:flex; gap:5px; align-items:center; flex-shrink:0; }
      .wg-dot { width:8px; height:8px; border-radius:50%; background:${C.border}; transition:background .3s; }
      .wg-dot.active { background:${C.accent}; }
      .wg-dot.done   { background:${C.accent}88; }

      /* ── Crossword area ── */
      #wg-cw-wrap {
        flex:1; min-height:0;
        display:flex; align-items:center; justify-content:center;
        overflow:hidden; padding:2px;
      }
      #wg-cw { display:grid; gap:2px; }

      .wg-cell {
        border-radius:7px;
        display:flex; align-items:center; justify-content:center;
        font-weight:800; letter-spacing:0;
        color:${C.textMain};
        background:${C.cellBg};
        border:1.5px solid ${C.cellBd};
        transition:background .25s, color .2s, border-color .25s;
        user-select:none; position:relative;
      }
      .wg-cell.empty { background:transparent !important; border-color:transparent !important; }
      .wg-cell.found { background:${C.accent} !important; color:#fff !important; border-color:${C.accent} !important; }
      .wg-cell.pop { animation:wgPop .38s cubic-bezier(.34,1.56,.64,1) both; }
      @keyframes wgPop {
        0%   { transform:scale(.65); opacity:.4; }
        65%  { transform:scale(1.1); }
        100% { transform:scale(1);  opacity:1; }
      }

      /* ── Hint row ── */
      #wg-hint-row {
        display:flex; align-items:center; gap:8px;
        padding:4px 16px; min-height:46px;
        background:${C.card};
        border-top:1px solid ${C.border};
        flex-shrink:0; position:relative;
      }
      #wg-hint-btn {
        width:36px; height:36px; border-radius:50%; border:none;
        background:${dark ? 'rgba(245,200,66,0.13)' : 'rgba(245,200,66,0.15)'};
        cursor:pointer; display:flex; align-items:center; justify-content:center;
        flex-shrink:0; transition:background .15s;
      }
      #wg-hint-btn:active { background:${dark ? 'rgba(245,200,66,0.22)' : 'rgba(245,200,66,0.28)'}; }

      /* FIX 3: Hint popup daha geniş, sözlər tam sığır */
      #wg-hint-popup {
        display:none;
        position:absolute; bottom:50px; left:14px;
        z-index:200;
        background:${C.card};
        border:1.5px solid ${C.border};
        border-radius:14px;
        padding:12px 14px; width:280px;
        box-shadow:0 8px 24px rgba(0,0,0,.22);
      }
      #wg-hint-list { display:flex; flex-wrap:wrap; gap:7px; }

      /* FIX 3 & color: Chips — tapılmamış mavi, tapılmış yaşıl */
      .wg-chip {
        display:inline-flex; align-items:center; gap:5px;
        padding:5px 14px; border-radius:20px;
        font-size:13px; font-weight:600;
        background:rgba(59,130,246,0.12);
        color:#3b82f6;
        border:1.5px solid rgba(59,130,246,0.35);
        transition:all .3s; white-space:nowrap;
      }

      /* Tapılmış: yaşıl ton, üstündən xətt */
      .wg-chip.found {
        background:rgba(34,197,94,0.12);
        color:#22c55e;
        border-color:rgba(34,197,94,0.4);
        text-decoration:line-through;
        opacity:.75;
      }
      .wg-chip.found .wg-chip-dot { background:#22c55e; }

      /* Typed word display */
      #wg-typed-word {
        display:flex; align-items:center; gap:4px;
        flex:1; justify-content:center;
      }
      .wg-tletter {
        width:34px; height:34px; border-radius:9px;
        display:flex; align-items:center; justify-content:center;
        font-size:16px; font-weight:800;
        background:${C.accent}22; color:${C.accent};
        border:2px solid ${C.accent};
        animation:wgLetterIn .12s ease both;
      }
      @keyframes wgLetterIn {
        from { transform:scale(.7) translateY(4px); opacity:0; }
        to   { transform:scale(1) translateY(0);   opacity:1; }
      }
      .wg-tplaceholder { font-size:14px; color:${C.textSub}; font-style:italic; }

      .wg-shake { animation:wgShake .35s ease both; }
     @keyframes wgShake {
        0%,100% { transform:translateX(0) translateY(0); }
        20%     { transform:translateX(-5px) translateY(0); }
        40%     { transform:translateX(5px) translateY(0); }
        60%     { transform:translateX(-3px) translateY(0); }
        80%     { transform:translateX(3px) translateY(0); }
      }
      .wg-correct-flash { animation:wgFlash .3s ease; }
      @keyframes wgFlash {
        0%   { background:${C.accent}40; }
        100% { background:${C.card}; }
      }

      /* ── Wheel area ── */
      #wg-wheel-area {
        background:${C.card};
        border-top:1px solid ${C.border};
        padding:6px 16px 14px;
        display:flex; flex-direction:column;
        align-items:center; gap:6px;
        flex-shrink:0;
      }
      #wg-wheel { position:relative; touch-action:none; user-select:none; }

      /* FIX 8: Letter buttons — dark modeda level rənginin tünd tonu */
      .wg-lb {
        position:absolute;
        border-radius:50%;
        border:2px solid ${wheelBtnBorder};
        display:flex; align-items:center; justify-content:center;
        font-weight:800;
        background:${wheelBtnBg};
        color:${dark ? '#e8edf3' : '#fff'};
        cursor:pointer;
        transform:translate(-50%, -50%);
        transition:transform .15s cubic-bezier(.34,1.56,.64,1), background .12s, box-shadow .12s, border-color .12s;
        box-shadow:0 3px 12px ${wheelGlow};
        -webkit-tap-highlight-color:transparent;
        touch-action:none;
      }
      .wg-lb.sel {
        background:${C.selBg};
        color:${C.accent};
        border-color:${C.accent};
        transform:translate(-50%, -50%) scale(1.2);
        box-shadow:0 5px 16px ${C.accent}55;
      }
      .wg-lb:active { transform:translate(-50%,-50%) scale(.9); }

      #wg-wcenter {
        position:absolute; border-radius:50%; border:none; cursor:pointer;
        background:${dark ? 'rgba(91,138,245,0.15)' : 'rgba(91,138,245,0.12)'};
        display:flex; align-items:center; justify-content:center;
        transform:translate(-50%,-50%);
        transition:background .15s, transform .12s;
        top:50%; left:50%;
        -webkit-tap-highlight-color:transparent;
        border:1.5px solid ${dark ? 'rgba(91,138,245,0.3)' : 'rgba(91,138,245,0.25)'};
      }
      #wg-wcenter:active { background:${dark ? 'rgba(91,138,245,0.28)' : 'rgba(91,138,245,0.22)'}; transform:translate(-50%,-50%) scale(.93); }

      #wg-wsvg { position:absolute; top:0; left:0; pointer-events:none; overflow:visible; }
      .wg-wline { stroke:${C.accent}; stroke-width:3.5; stroke-linecap:round; opacity:.5; }

      /* ── Phase complete overlay ── */
      #wg-pc {
        position:absolute; inset:0; z-index:10001;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        background:${dark ? 'rgba(10,18,28,.82)' : 'rgba(240,242,248,.82)'};
        backdrop-filter:blur(10px);
        gap:14px; padding:32px 24px;
      }
      #wg-pc .wg-pc-icon {
        font-size:0;
        animation:wgBounceIn .5s cubic-bezier(.34,1.56,.64,1);
        display:flex; align-items:center; justify-content:center;
      }
      @keyframes wgBounceIn {
        from { transform:scale(0) rotate(-15deg); opacity:0; }
        to   { transform:scale(1) rotate(0);      opacity:1; }
      }
      #wg-pc h2 { font-size:22px; font-weight:800; color:${C.textMain}; text-align:center; }
      #wg-pc p  { font-size:14px; color:${C.textSub}; text-align:center; line-height:1.5; }

      /* FIX 7: Phase complete düymə hündürlüyü 2x (əvvəl padding:16px, indi padding:32px 16px) */
      .wg-pc-btn {
        width:100%; max-width:280px;
        padding:20px 16px;
        min-height:64px;
        border-radius:16px; font-size:15px; font-weight:700;
        cursor:pointer; border:none;
        transition:transform .1s, box-shadow .1s;
        display:flex; align-items:center; justify-content:center; gap:8px;
      }
      .wg-pc-btn:active { transform:scale(.97); }
      .wg-pc-primary { background:${C.accent}; color:#fff; box-shadow:0 4px 18px ${C.accent}55; }
      .wg-pc-secondary { background:${C.inputBg}; color:${C.textMain}; margin-top:2px; }
    </style>

    <div id="wg-hdr">
      <button id="wg-back">${iconBack}</button>
      <div id="wg-hdr-mid">
        <div id="wg-hdr-title">${title}</div>
        <div id="wg-hdr-phase">Bölüm ${phaseLabel}</div>
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

    <div id="wg-hint-row">
      <button id="wg-hint-btn" title="İpucu">${iconHint}</button>
      <div id="wg-hint-popup">
        <div id="wg-hint-list">${cluesHTML}</div>
      </div>
      <div id="wg-typed-word">
        <span class="wg-tplaceholder">Hərfləri birləşdir...</span>
      </div>
    </div>

    <div id="wg-wheel-area">
      <div id="wg-wheel"></div>
    </div>`;
  }

  // ══════════════════════════════════════════════════════════
  //  8. CROSSWORD RENDER
  // ══════════════════════════════════════════════════════════

  function _renderCells() {
    const wrap  = document.getElementById('wg-cw-wrap');
    const board = document.getElementById('wg-cw');
    if (!board || !wrap) return;

    const cols = state.cols;
    const rows = state.rows;
    if (!cols || !rows) return;

    const gap    = 2;
    const availW = wrap.clientWidth  - 4;
    const availH = wrap.clientHeight - 4;

    const csW = Math.floor((availW - (cols - 1) * gap) / cols);
    const csH = Math.floor((availH - (rows - 1) * gap) / rows);
    const cs  = Math.max(12, csW <= csH ? csW : csH);

    board.style.cssText = `
      display:grid;
      grid-template-columns:repeat(${cols}, ${cs}px);
      grid-template-rows:repeat(${rows}, ${cs}px);
      gap:${gap}px;
    `;

    board.innerHTML = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = state.grid[r]?.[c];
        const div  = document.createElement('div');
        div.className     = cell ? 'wg-cell' : 'wg-cell empty';
        div.style.cssText = `width:${cs}px;height:${cs}px;font-size:${Math.max(8, cs - 14)}px;`;
        if (cell) {
          div.dataset.r      = r;
          div.dataset.c      = c;
          div.dataset.letter = cell.letter;
          // Orijinal davranış: xanalar boş qalır, söz tapıldıqda _animateWord açır
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

  // FIX 5: _animateWord — hərflər tək-tək sürətlə yazılır (0.1s aralıq), sonra toast çıxır
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
      }, i * 100);
    });
    const chip = document.querySelector(`.wg-chip[data-word="${word}"]`);
    if (chip) setTimeout(() => chip.classList.add('found'), pw.cells.length * 100 + 100);
  }

  // ══════════════════════════════════════════════════════════
  //  9. LETTER WHEEL RENDER + TOUCH
  // ══════════════════════════════════════════════════════════

  function _renderWheel() {
    const wrap = document.getElementById('wg-wheel');
    if (!wrap) return;

    const letters = state.letters;
    const count   = letters.length;
    const C       = _colors();
    const dark    = _isDark();
    const accent  = _getLvlColor();

    const maxW     = Math.min(window.innerWidth - 48, 300);
    const radius   = Math.max(55, Math.min((maxW / 2) - 28, 115));
    const size     = radius * 2 + 64;
    const cx       = size / 2;
    const cy       = size / 2;
    const btnSz    = Math.max(38, Math.min(50, radius * 0.45));
    const centerSz = Math.max(32, btnSz * 0.78);

    wrap.style.width  = `${size}px`;
    wrap.style.height = `${size}px`;

    // FIX 2: Shuffle SVG — hər iki ox tam görünür
const iconShuffle = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8af5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4l3 3l-3 3"/><path d="M18 20l3 -3l-3 -3"/><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h4"/><path d="M21 7h-4a5 5 0 0 0 -5 5a5 5 0 0 1 -5 5h-4"/></svg>`;
    // FIX 8: dark modeda çevrə rəngləri — level accent tünd tonu
    const wheelBtnBg     = dark ? _darkenAccent(accent, true)  : _darkenAccent(accent, false);
    const wheelBtnBorder = dark ? _darkenAccentBorder(accent)   : accent;
    const wheelGlow      = dark ? `${accent}33`                 : `${accent}44`;

    let html = `<svg id="wg-wsvg" width="${size}" height="${size}"></svg>`;

    letters.forEach((letter, i) => {
      const angle = (2 * Math.PI * i / count) - Math.PI / 2;
      const x     = cx + radius * Math.cos(angle);
      const y     = cy + radius * Math.sin(angle);
      html += `<button class="wg-lb" data-idx="${i}" data-letter="${letter}"
        style="left:${x}px;top:${y}px;width:${btnSz}px;height:${btnSz}px;font-size:${Math.max(13, btnSz - 22)}px;
               background:${wheelBtnBg}; border-color:${wheelBtnBorder}; box-shadow:0 3px 12px ${wheelGlow};
               color:${dark ? '#e8edf3' : '#fff'};">
        ${letter}</button>`;
    });

    html += `<button id="wg-wcenter"
      style="width:${centerSz}px;height:${centerSz}px;">
      ${iconShuffle}</button>`;

    wrap.innerHTML = html;

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
    const btns      = wrap.querySelectorAll('.wg-lb');
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
      if (state.currentWord.length >= 2) _submitWord();
      else _clearSel();
    });

    document.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      if (!wrap.contains(e.target)) _clearSel();
    });

    wrap.addEventListener('touchstart', _touchStart, { passive: false });
    wrap.addEventListener('touchmove',  _touchMove,  { passive: false });
    wrap.addEventListener('touchend',   _touchEnd,   { passive: false });
  }

  function _selectLetter(idx, letter, btnEl) {
    if (state.selected.includes(idx)) return;
    btnEl.classList.add('sel');
    state.selected.push(idx);
    state.currentWord += letter;

    const x = parseFloat(btnEl.style.left);
    const y = parseFloat(btnEl.style.top);
    state.selectedPos.push({ x, y });

    _playTick();
    _updateTyped();
    _drawLines();
  }

  function _touchStart(e) {
    e.preventDefault();
    state.isDragging  = true;
    state.selected    = [];
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
    if (state.currentWord.length >= 2) _submitWord();
    else _clearSel();
  }

  function _processTouch(touch) {
    const wrap = document.getElementById('wg-wheel');
    if (!wrap) return;
    wrap.querySelectorAll('.wg-lb').forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dist = Math.hypot(touch.clientX - cx, touch.clientY - cy);
      if (dist < rect.width * 0.65) {
        const idx = parseInt(btn.dataset.idx);
        if (!state.selected.includes(idx))
          _selectLetter(idx, btn.dataset.letter, btn);
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
  //  10. OYUN MƏNTİQİ
  // ══════════════════════════════════════════════════════════

  function _submitWord() {
    const word = state.currentWord;
    if (!word || word.length < 2) { _clearSel(); return; }

    const pw = state.placedWords.find(p => p.word === word && !state.foundWords.has(word));
    if (pw) {
      state.foundWords.add(word);

      _playSuccess();
      // FIX 5: toast-a sözün özünü ötürürük ki hərfləri göstərsin
      _showWordToast(word);

      const hintRow = document.getElementById('wg-hint-row');
      if (hintRow) {
        hintRow.classList.add('wg-correct-flash');
        setTimeout(() => hintRow.classList.remove('wg-correct-flash'), 320);
      }

      _animateWord(word);
      _clearSel();

      if (state.foundWords.size === state.placedWords.length) {
        setTimeout(_onPhaseComplete, 900);
      }
    } else {
      _playError();
      const hintRow = document.getElementById('wg-hint-row');
      if (hintRow) {
        hintRow.classList.remove('wg-shake');
        void hintRow.offsetWidth;
        hintRow.classList.add('wg-shake');
       setTimeout(() => {
  hintRow.classList.remove('wg-shake');
  _clearSel();
}, 380);
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

  if (isLast) {
    state._pendingStarReward = true;
  }

  if (typeof markCompleted === 'function' && typeof LEVELS !== 'undefined') {
    const lvlIdx = LEVELS.findIndex(l => l.id === state.levelId);
    if (lvlIdx !== -1 && typeof _refreshOpenCard === 'function') {
      _refreshOpenCard(lvlIdx);
    }
  }

  _showPhaseComplete(isLast, nextPhase);
}

function _addStarToGameNode(levelId, gameKey) {
  const wrap = document.querySelector(
    `[data-game-key="${gameKey}"][data-level-id="${levelId}"]`
  );
  if (!wrap) return;

  // Əgər artıq ulduz varsa əlavə etmə
  if (wrap.querySelector('.game-star-reward')) return;

  const star = document.createElement('div');
  star.className = 'game-star-reward';
  star.innerHTML = '⭐';
  star.style.cssText = `
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    cursor: pointer;
    z-index: 10;
    animation: starPulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 2px 6px rgba(255,200,0,0.7));
  `;

  // Pulse animasiyası CSS-ə əlavə et (bir dəfə)
  if (!document.getElementById('star-reward-style')) {
    const style = document.createElement('style');
    style.id = 'star-reward-style';
    style.textContent = `
      @keyframes starPulse {
        0%, 100% { transform: translateX(-50%) scale(1);   opacity: 1; }
        50%       { transform: translateX(-50%) scale(1.3); opacity: 0.8; }
      }
      @keyframes starFly {
        0%   { transform: translate(-50%, 0)   scale(1);   opacity: 1; }
        40%  { transform: translate(-50%, -20px) scale(3); opacity: 1; }
        100% { transform: translate(calc(var(--tx) - 50%), var(--ty)) scale(0.2); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // Tıklayanda uç
  star.addEventListener('click', (e) => {
    e.stopPropagation();

    // Ulduz sayğacının pozisyasunu tap
    const starCounter = document.getElementById('star-count');
    const counterRect = starCounter
      ? starCounter.getBoundingClientRect()
      : { left: window.innerWidth - 60, top: 20 };
    const starRect = star.getBoundingClientRect();

    const tx = counterRect.left - starRect.left;
    const ty = counterRect.top  - starRect.top - 20;

    star.style.setProperty('--tx', `${tx}px`);
    star.style.setProperty('--ty', `${ty}px`);
    star.style.animation = `starFly 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards`;

    setTimeout(() => {
      // 3 ulduz əlavə et
      if (typeof addStar === 'function') {
        addStar(); addStar(); addStar();
      }
      if (typeof Stats !== 'undefined') Stats.addStar(3);
      star.remove();

      // Node-u tık görünüşünə keçir
      const lvlIdx = LEVELS.findIndex(l => l.id === levelId);
      if (lvlIdx !== -1 && typeof _refreshOpenCard === 'function') {
        _refreshOpenCard(lvlIdx);
      }
    }, 700);
  });

  wrap.style.position = 'relative';
  wrap.appendChild(star);
}

  function _showPhaseComplete(isLast, nextPhase) {
    const ov = document.getElementById(OID);
    if (!ov) return;
    const C    = _colors();
    const dark = _isDark();

    const iconPC = isLast
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v7a6 6 0 0 1-12 0V4z"/><path d="M4 4h2"/><path d="M18 4h2"/><path d="M4 7c-1 0-2 .5-2 2s1 2 2 2"/><path d="M20 7c1 0 2 .5 2 2s-1 2-2 2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="${C.accent}" stroke="${C.accent}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    const heading = isLast
      ? 'Oyun tamamlandı!'
      : `Bölüm ${state.phaseIdx + 1} tamamlandı!`;

    const sub = isLast
      ? 'Bütün mərhələləri uğurla bitirdiniz!'
      : `Növbəti bölüm: ${nextPhase + 1} / ${state.totalPhases}`;

    const nextIconSvg = isLast
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M15 6l6 6-6 6"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

    const pc = document.createElement('div');
    pc.id = 'wg-pc';
    pc.innerHTML = `
      <div class="wg-pc-icon">${iconPC}</div>
      <h2>${heading}</h2>
      <p>${sub}</p>
      <button class="wg-pc-btn wg-pc-primary" id="wg-pc-next">
        ${nextIconSvg}
        ${isLast ? 'Ana səhifəyə qayıt' : 'Növbəti bölüm'}
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
  //  11. EVENT LISTENERS
  // ══════════════════════════════════════════════════════════

  function _attachEvents(ov) {
    ov.querySelector('#wg-back')?.addEventListener('click', _closeOverlay);

    const hintBtn   = ov.querySelector('#wg-hint-btn');
    const hintPopup = ov.querySelector('#wg-hint-popup');

    hintBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (hintPopup) {
        const isOpen = hintPopup.style.display === 'block';
        hintPopup.style.display = isOpen ? 'none' : 'block';
      }
    });

    ov.addEventListener('click', (e) => {
      if (!e.target.closest('#wg-hint-btn') && !e.target.closest('#wg-hint-popup')) {
        if (hintPopup) hintPopup.style.display = 'none';
      }
    });

    if (window._wgResizeObs) window._wgResizeObs.disconnect();
    window._wgResizeObs = new ResizeObserver(() => {
      _renderCells();
      _renderWheel();
    });
    window._wgResizeObs.observe(ov);
  }

  // ══════════════════════════════════════════════════════════
  //  12. PUBLIC API
  // ══════════════════════════════════════════════════════════

  function start(levelId, gameKey, gameData, savedPhase) {
    _initState(levelId, gameKey, gameData, savedPhase);
    _openOverlay();
  }

  return { start };

})();
