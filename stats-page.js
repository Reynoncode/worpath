/**
 * WordPath — Statistika Səhifəsi (UI)
 * Dark və Light mode dəstəyi daxildir.
 * stats.js və grammar-stats.js fayllarından sonra yüklənməlidir.
 *
 * İSTİFADƏ:
 *   StatsPage.render("stats-container-id")
 */

const StatsPage = (() => {

  const LEVELS = [
    { label: "A1", color: "#C0392B", sublevelKeys: ["a1"],             total: 123 },
    { label: "A2", color: "#E67E22", sublevelKeys: ["a2"],             total: 93  },
    { label: "B1", color: "#D4AC0D", sublevelKeys: ["b1","b1a","b1b"], total: 135 },
    { label: "B2", color: "#1E8449", sublevelKeys: ["b2","b2a","b2b"], total: 165 },
    { label: "C1", color: "#2471A3", sublevelKeys: ["c1","c1a","c1b"], total: 147 },
    { label: "C2", color: "#1B2A3B", sublevelKeys: ["c2"],             total: 174 },
  ];

  const STATUS_PHASE_MAP = {
    'completed':        1,
    'phase2_unlocked':  1,
    'phase2_completed': 2,
    'phase3_unlocked':  2,
    'level_done':       3,
  };

  function getPhasesByLevel() {
    let raw = {};
    try {
      const stored = localStorage.getItem('wordpath_v1');
      if (stored) raw = JSON.parse(stored);
    } catch (_) {}

    const keySum = {};
    for (const [levelId, statuses] of Object.entries(raw)) {
      let sum = 0;
      if (Array.isArray(statuses)) {
        statuses.forEach(s => { sum += (STATUS_PHASE_MAP[s] || 0); });
      }
      keySum[levelId.toLowerCase()] = sum;
    }

    const counts = {};
    LEVELS.forEach(lv => {
      let total = 0;
      lv.sublevelKeys.forEach(k => { total += (keySum[k] || 0); });
      counts[lv.label] = total;
    });

    return counts;
  }

  // ─── Tema köməkçisi ───────────────────────────────────────────────────────
  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function getTheme() {
    const dark = isDark();
    return {
      dark,
      pageBg:       dark ? '#0d1b2a'  : '#F5F0E8',
      cardBg:       dark ? '#142233'  : '#EDEAE2',
      cardBorder:   dark ? '#1d3348'  : '#E8E2D9',
      whiteBg:      dark ? '#142233'  : '#fff',
      titleColor:   dark ? '#ffffff'  : '#1A1A1A',
      subText:      dark ? '#6d90a8'  : '#6B7280',
      faintText:    dark ? '#3f5e72'  : '#9CA3AF',
      numColor:     dark ? '#ffffff'  : '#1A1A1A',
      labelColor:   dark ? '#dce8f2'  : '#1A1A1A',
      progressBg:   dark ? '#1d3348'  : '#F0ECE4',
      rowBorder:    dark ? '#1d3348'  : '#F3F4F6',
      wordColor:    dark ? '#dce8f2'  : '#1a1a1a',
      streakBg:     dark ? '#2a1e08'  : '#FAEEDA',
      streakBorder: dark ? '#7a5a10'  : '#FAC775',
      streakColor:  dark ? '#d4a040'  : '#633806',
    };
  }

  // ─── Söz səhv qrupu konfiqurasiyası ──────────────────────────────────────
  const SEV_CFG = {
    critical: {
      label: "Kritik zəiflik", icon: "⚠️",
      bg: "#FFF1F0", border: "#FCA5A5", textColor: "#991B1B",
      bgDark: "#2a0c0c", borderDark: "#7a2020",
    },
    medium: {
      label: "Orta səviyyə", icon: "⚡",
      bg: "#FFFBEB", border: "#FCD34D", textColor: "#92400E",
      bgDark: "#2a1e08", borderDark: "#7a5a10",
    },
    light: {
      label: "Yüngül səhv", icon: "ℹ️",
      bg: "#F0FDF4", border: "#86EFAC", textColor: "#14532D",
      bgDark: "#0a2418", borderDark: "#1a6a3a",
    },
  };

  // ─── Söz səhv açıq/bağlı vəziyyəti ──────────────────────────────────────
  const openState = { critical: false, medium: false, light: false };

  // ─── Grammar qayda açıq/bağlı vəziyyəti ──────────────────────────────────
  const openGrammarRules = new Set();

  // ─── Söz səhv qrupu render ────────────────────────────────────────────────
  function renderGroup(sev, words) {
    const cfg = SEV_CFG[sev];
    const t = getTheme();
    const isOpen = openState[sev];
    const headRadius = isOpen ? "10px 10px 0 0" : "10px";

    const bg     = t.dark ? cfg.bgDark     : cfg.bg;
    const border = t.dark ? cfg.borderDark : cfg.border;

    const rows = words.map(w => `
      <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid ${t.rowBorder};${w.starFixed ? "opacity:0.72;" : ""}">
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            <span style="font-size:14px;font-weight:600;color:${t.wordColor};">${w.word}</span>
            <span style="font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:#E1F5EE;color:#085041;">${w.level}</span>
            ${w.starFixed ? `<span style="font-size:10px;font-weight:600;padding:1px 7px;border-radius:99px;background:#FAEEDA;color:#633806;border:1px solid #FAC775;">⭐ düzəldildi</span>` : ""}
          </div>
          <div style="font-size:12px;color:${t.subText};margin-top:2px;">${w.translation}</div>
        </div>
        <div style="text-align:center;flex-shrink:0;">
          <div style="font-size:16px;font-weight:700;color:${cfg.textColor};">${w.errors}</div>
          <div style="font-size:10px;color:${t.faintText};">səhv</div>
        </div>
      </div>
    `).join("");

    return `
      <div style="margin-bottom:8px;">
        <button
          onclick="StatsPage._toggle('${sev}')"
          style="width:100%;display:flex;align-items:center;gap:8px;background:${bg};border:1px solid ${border};border-radius:${headRadius};padding:9px 14px;cursor:pointer;font-size:13px;font-weight:600;color:${t.labelColor};transition:border-radius 0.15s;"
          id="sp-head-${sev}"
          aria-expanded="${isOpen}">
          ${cfg.icon}
          ${cfg.label}
          <span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:${border};color:${cfg.textColor};">${words.length} söz</span>
          <span style="margin-left:auto;font-size:12px;" id="sp-chevron-${sev}">${isOpen ? "▲" : "▼"}</span>
        </button>
        <div id="sp-body-${sev}"
          style="background:${t.whiteBg};border:1px solid ${border};border-top:none;border-radius:0 0 10px 10px;overflow:hidden;${isOpen ? '' : 'display:none;'}">
          ${rows}
        </div>
      </div>
    `;
  }

  // ─── Söz səhv toggle ─────────────────────────────────────────────────────
  function _toggle(sev) {
    openState[sev] = !openState[sev];
    const body    = document.getElementById(`sp-body-${sev}`);
    const chevron = document.getElementById(`sp-chevron-${sev}`);
    const head    = document.getElementById(`sp-head-${sev}`);
    const t   = getTheme();
    const cfg = SEV_CFG[sev];

    body.style.display      = openState[sev] ? "" : "none";
    body.style.background   = t.whiteBg;
    body.style.borderColor  = t.dark ? cfg.borderDark : cfg.border;
    chevron.textContent     = openState[sev] ? "▲" : "▼";
    head.style.borderRadius = openState[sev] ? "10px 10px 0 0" : "10px";
    head.style.background   = t.dark ? cfg.bgDark : cfg.bg;
    head.style.borderColor  = t.dark ? cfg.borderDark : cfg.border;
    head.style.color        = t.labelColor;
    head.setAttribute("aria-expanded", openState[sev]);
  }

  // ─── Grammar: qayda irəliləmə sətri ──────────────────────────────────────
  function renderGrammarProgressRow(rule, t) {
    const ACCENT = '#085041';
    const isDone  = rule.total > 0 && rule.completed >= rule.total;
    const color   = rule.pct > 0 ? ACCENT : t.faintText;
    const badge   = isDone
      ? `<span style="font-size:10px;font-weight:600;padding:2px 7px;border-radius:99px;background:#E1F5EE;color:#085041;flex-shrink:0;">✓ Tamamlandı</span>`
      : '';

    return `
      <div style="margin-bottom:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px;flex-wrap:wrap;">
          <span style="font-size:13px;font-weight:600;color:${t.labelColor};line-height:1.3;flex:1;min-width:0;">${rule.name}</span>
          ${badge}
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="flex:1;height:6px;background:${t.progressBg};border-radius:99px;overflow:hidden;">
            <div style="width:${rule.pct}%;height:100%;background:${ACCENT};border-radius:99px;transition:width 0.6s ease;"></div>
          </div>
          <span style="font-size:12px;font-weight:600;width:32px;text-align:right;color:${color};flex-shrink:0;">${rule.pct}%</span>
          <span style="font-size:11px;color:${t.faintText};width:52px;text-align:right;flex-shrink:0;">${rule.completed}/${rule.total}</span>
        </div>
      </div>
    `;
  }

  // ─── Grammar: qayda səhv dropdown ────────────────────────────────────────
  function renderGrammarErrorGroup(rule, t) {
    const safeId = rule.ruleId.replace(/[^a-zA-Z0-9_]/g, '_');
    const isOpen = openGrammarRules.has(rule.ruleId);

    let bg, border, textColor;
    if (rule.totalErrors >= 3) {
      bg = t.dark ? '#2a0c0c' : '#FFF1F0';
      border = t.dark ? '#7a2020' : '#FCA5A5';
      textColor = '#991B1B';
    } else if (rule.totalErrors === 2) {
      bg = t.dark ? '#2a1e08' : '#FFFBEB';
      border = t.dark ? '#7a5a10' : '#FCD34D';
      textColor = '#92400E';
    } else {
      bg = t.dark ? '#0a2418' : '#F0FDF4';
      border = t.dark ? '#1a6a3a' : '#86EFAC';
      textColor = '#14532D';
    }

    const icon = rule.totalErrors >= 3 ? '⚠️' : rule.totalErrors === 2 ? '⚡' : 'ℹ️';

    const rows = rule.errorQuestions.map(q => `
      <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-bottom:1px solid ${t.rowBorder};">
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:500;color:${t.wordColor};line-height:1.4;">${q.text}</div>
          <div style="font-size:11px;color:${t.faintText};margin-top:2px;">
  ${q.nodeTitle ? `📖 ${q.nodeTitle}` : `${q.attempts} cəhd · ${q.correct} düzgün`}
</div>
        </div>
        <div style="text-align:center;flex-shrink:0;">
          <div style="font-size:15px;font-weight:700;color:${textColor};">${q.errors}</div>
          <div style="font-size:10px;color:${t.faintText};">səhv</div>
        </div>
      </div>
    `).join('');

    return `
      <div style="margin-bottom:8px;">
        <button
          onclick="StatsPage._toggleGrammarRule('${safeId}','${rule.ruleId}')"
          id="sp-ghead-${safeId}"
          aria-expanded="${isOpen}"
          style="width:100%;display:flex;align-items:center;gap:8px;background:${bg};border:1px solid ${border};
                 border-radius:${isOpen ? '10px 10px 0 0' : '10px'};padding:9px 14px;cursor:pointer;
                 font-size:13px;font-weight:600;color:${t.labelColor};transition:border-radius 0.15s;text-align:left;">
          <span>${icon}</span>
          <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rule.name}</span>
          <span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:${border};color:${textColor};flex-shrink:0;">${rule.errorQuestions.length} sual</span>
          <span style="font-size:12px;flex-shrink:0;" id="sp-gchev-${safeId}">${isOpen ? '▲' : '▼'}</span>
        </button>
        <div id="sp-gbody-${safeId}"
          style="background:${t.whiteBg};border:1px solid ${border};border-top:none;border-radius:0 0 10px 10px;overflow:hidden;${isOpen ? '' : 'display:none;'}">
          ${rows}
        </div>
      </div>
    `;
  }

  // ─── Grammar qayda toggle ─────────────────────────────────────────────────
  function _toggleGrammarRule(safeId, ruleId) {
    const body    = document.getElementById(`sp-gbody-${safeId}`);
    const chevron = document.getElementById(`sp-gchev-${safeId}`);
    const head    = document.getElementById(`sp-ghead-${safeId}`);
    if (!body) return;

    if (openGrammarRules.has(ruleId)) {
      openGrammarRules.delete(ruleId);
      body.style.display = 'none';
      if (chevron) chevron.textContent = '▼';
      if (head) { head.style.borderRadius = '10px'; head.setAttribute('aria-expanded', 'false'); }
    } else {
      openGrammarRules.add(ruleId);
      body.style.display = '';
      if (chevron) chevron.textContent = '▲';
      if (head) { head.style.borderRadius = '10px 10px 0 0'; head.setAttribute('aria-expanded', 'true'); }
    }
  }

  // ─── Köhnə yanlış ruleId-ləri sil ───────────────────────────────────────
  function _cleanStaleGrammarRules() {
    try {
      const validIds = new Set(
        (window.LEVELS || []).map(lv => lv.id).filter(Boolean)
      );
      if (validIds.size === 0) return;
      const raw = GrammarStats.load();
      let changed = false;
      for (const ruleId of Object.keys(raw.rules || {})) {
        if (!validIds.has(ruleId)) { delete raw.rules[ruleId]; changed = true; }
      }
      if (changed) localStorage.setItem('wordpath_grammar_stats', JSON.stringify(raw));
    } catch(_) {}
  }

  // ─── Grammar stats hesabla (localStorage-dan) ─────────────────────────────
  function getGrammarStats() {
    if (!window.GrammarStats) return null;
    _cleanStaleGrammarRules();
    return GrammarStats.getStats();
  }


  // ─── ANA RENDER FUNKSİYASI ────────────────────────────────────────────────
  function render(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    // State sıfırla
    openState.critical = false;
    openState.medium   = false;
    openState.light    = false;
    openGrammarRules.clear();

    const t = getTheme();
    const s = Stats.getStats();
    const phasesByLevel = getPhasesByLevel();
    const grouped = { critical: [], medium: [], light: [] };
    s.errorWords.forEach(w => grouped[w.severity].push(w));

    // ── Söz səviyyə irəliləmə sətirləri ─────────────────────────────────
    const levelRows = LEVELS.map(lv => {
      const done = phasesByLevel[lv.label] || 0;
      const pct  = lv.total > 0 ? Math.min(100, Math.round((done / lv.total) * 100)) : 0;
      return `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;">
          <div style="width:30px;height:30px;border-radius:5px;background:${lv.color};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:10px;font-weight:800;color:#fff;letter-spacing:0.2px;">${lv.label}</span>
          </div>
          <div style="flex:1;height:6px;background:${t.progressBg};border-radius:99px;overflow:hidden;">
            <div style="width:${pct}%;height:100%;background:${lv.color};border-radius:99px;transition:width 0.6s ease;"></div>
          </div>
          <span style="font-size:12px;font-weight:600;width:32px;text-align:right;color:${pct > 0 ? lv.color : t.faintText};">${pct}%</span>
          <span style="font-size:11px;color:${t.faintText};width:52px;text-align:right;">${done}/${lv.total}</span>
        </div>
      `;
    }).join("");

    // ── Söz səhv qrupları ────────────────────────────────────────────────
    const errGroups = ["critical", "medium", "light"]
      .filter(sev => grouped[sev].length > 0)
      .map(sev => renderGroup(sev, grouped[sev]))
      .join("");

    const noErrors = s.errorWords.length === 0 ? `
      <div style="background:${t.dark ? '#0a2418' : '#F0FDF4'};border:1px solid ${t.dark ? '#1a6a3a' : '#86EFAC'};border-radius:12px;padding:24px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">🎉</div>
        <div style="font-size:14px;font-weight:600;color:${t.dark ? '#3aaa6a' : '#14532D'};">Heç bir səhv yoxdur!</div>
      </div>
    ` : "";

    // ── Grammar statistikası ─────────────────────────────────────────────
    const gs = getGrammarStats();
    let grammarSection = '';

    if (gs) {
      // Qayda irəliləmə sətirləri
      let grammarProgressRows = '';
      if (gs.ruleStats.length > 0) {
        grammarProgressRows = gs.ruleStats
          .map(r => renderGrammarProgressRow(r, t))
          .join('');
      } else {
        grammarProgressRows = `
          <div style="text-align:center;padding:14px 0;color:${t.faintText};font-size:13px;">
            Hələ heç bir qayda başlanılmayıb
          </div>
        `;
      }

      // Qayda səhv analizi
      const grammarErrGroups = gs.errorRules.length > 0
        ? gs.errorRules.map(r => renderGrammarErrorGroup(r, t)).join('')
        : `
          <div style="background:${t.dark ? '#0a2418' : '#F0FDF4'};border:1px solid ${t.dark ? '#1a6a3a' : '#86EFAC'};border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:28px;margin-bottom:6px;">🎉</div>
            <div style="font-size:13px;font-weight:600;color:${t.dark ? '#3aaa6a' : '#14532D'};">Heç bir grammar səhvi yoxdur!</div>
          </div>
        `;

      grammarSection = `
        <!-- Bölücü xətt -->
        <div style="height:1px;background:${t.cardBorder};margin:4px 0 16px;"></div>

        <!-- Grammar başlığı -->
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
          <span style="font-size:18px;font-weight:700;color:${t.titleColor};">📖 Grammar</span>
        </div>

        <!-- Qayda irəliləmə cədvəli -->
        <div style="background:${t.whiteBg};border:1px solid ${t.cardBorder};border-radius:14px;padding:14px 16px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:600;color:${t.subText};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:14px;">
            Qayda üzrə irəliləmə
          </div>
          ${grammarProgressRows}
        </div>

        <!-- Qayda üzrə səhv analizi başlığı -->
        <div style="font-size:12px;font-weight:600;color:${t.subText};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">
          Qayda üzrə səhv analizi
        </div>
        ${grammarErrGroups}
      `;
    }

    // ── HTML ─────────────────────────────────────────────────────────────
    el.innerHTML = `
      <div style="background:${t.pageBg};min-height:100vh;padding:20px 20px 40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

        <!-- Başlıq -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <span style="font-size:22px;font-weight:700;color:${t.titleColor};">Statistika</span>
          <span style="display:flex;align-items:center;gap:5px;background:${t.streakBg};color:${t.streakColor};border:1px solid ${t.streakBorder};border-radius:99px;padding:5px 12px;font-size:12px;font-weight:600;">
            🔥 ${s.streak} STREAK
          </span>
        </div>

        <!-- 4 kart -->
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:12px;">
          ${[
            { val: s.totalLearned,       lbl: "Öyrənilmiş söz",  sub: null },
            { val: `${s.correctRate}%`,  lbl: "Düzgün cavab",    sub: null },
            { val: s.totalErrors,        lbl: "Ümumi səhv sayı", sub: `${s.starFixedCount} ulduzla düzəldildi`, subColor: "#D97706" },
            { val: "📋", lbl: "Ev tapşırığı", sub: null, isHomework: true },
          ].map(c => `
            <div style="background:${t.cardBg};border-radius:10px;padding:0;overflow:hidden;" id="${c.isHomework ? 'stats-homework-card' : ''}">
              ${c.isHomework
                ? `<div style="padding:14px 16px;">
                     <div style="font-size:11px;font-weight:600;color:${t.labelColor};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">EV TAPŞIRIĞI</div>
                     <div style="font-size:13px;color:${t.faintText};">Yüklənir...</div>
                   </div>`
                : `<div style="padding:14px 16px;">
                     <div style="font-size:24px;font-weight:700;color:${t.numColor};">${c.val}</div>
                     <div style="font-size:12px;color:${t.numColor};margin-top:3px;">${c.lbl}</div>
                     ${c.sub ? `<div style="font-size:11px;color:${c.subColor};margin-top:3px;font-weight:500;">${c.sub}</div>` : ""}
                   </div>`
              }
            </div>
          `).join("")}
        </div>

        <!-- Söz: Səviyyə irəliləməsi -->
        <div style="background:${t.whiteBg};border:1px solid ${t.cardBorder};border-radius:14px;padding:14px 16px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:600;color:${t.subText};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">Səviyyə üzrə irəliləmə</div>
          ${levelRows}
        </div>

        <!-- Söz: Səhv analizi -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div style="font-size:12px;font-weight:600;color:${t.subText};text-transform:uppercase;letter-spacing:0.06em;">Səhv analizi</div>
          ${s.errorWords.length > 0 ? `
            <button onclick="StatsPage._retryWrongs()"
              style="display:flex;align-items:center;gap:5px;background:#085041;color:#fff;border:none;border-radius:99px;padding:6px 14px;font-size:12px;font-weight:600;cursor:pointer;">
              🔁 Təkrar et
            </button>
          ` : ''}
        </div>
        ${errGroups}
        ${noErrors}

        <!-- Grammar bölümü -->
        ${grammarSection}

      </div>
    `;

    // Ev tapşırığı kartını yüklə
    setTimeout(() => {
      if (window.HomeworkManager?.renderCard) {
        window.HomeworkManager.renderCard("stats-homework-card");
      }
      if (window.QuizHomeworkManager?.renderCard) {
        window.QuizHomeworkManager.renderCard("stats-homework-card");
      }
    }, 1000);

    // Header avatar
    const headerProfileAvatar = document.getElementById('header-profile-avatar');
    if (headerProfileAvatar && window.AuthManager) {
      const user = AuthManager.getCurrentUser();
      if (user && user.photoURL) {
        headerProfileAvatar.innerHTML = `<img src="${user.photoURL}" style="width:100%;height:100%;border-radius:10px;object-fit:cover;display:block;" />`;
      } else if (user) {
        const name = user.displayName ? user.displayName.split(' ')[0] : user.email;
        headerProfileAvatar.textContent = name.charAt(0).toUpperCase();
      }
    }

  } // ← render() bağlanan mötərizə

  // ─── Səhv sözləri təkrar et ───────────────────────────────────────────────
  function startWrongWordsRetake() {
    const s = Stats.getStats();
    if (s.errorWords.length === 0) {
      alert('Heç bir səhv söz yoxdur!');
      return;
    }

    const shuffled = [...s.errorWords].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 20);

    const dataLevels = window.LEVELS;
    if (!dataLevels) {
      alert('LEVELS tapılmadı. data.js yüklənib?');
      return;
    }

    const tagged = [];

    for (const errWord of selected) {
      let found = null;
      for (const lvl of dataLevels) {
        if (!lvl.quizzes) continue;
        for (const quizItem of lvl.quizzes) {
          if (!Array.isArray(quizItem)) continue;
          const match = quizItem.find(w => w && w.en === errWord.word);
          if (match) { found = match; break; }
        }
        if (found) break;
      }
      if (!found) continue;

      const available = [];
      if (found.en && found.tr && found.wrong) available.push('normal');
      if (found.en && found.tr && found.wen)   available.push('phase2');
      if (found.en && found.wen && found.def)  available.push('phase3');
      if (available.length === 0) continue;

      const phase = available[Math.floor(Math.random() * available.length)];
      tagged.push({ ...found, _retakeMode: phase });
    }

    if (tagged.length === 0) {
      alert('Sözlər tapılmadı.');
      return;
    }

    quiz.mode         = 'retake';
    quiz.levelIdx     = -1;
    quiz.quizIdx      = -1;
    quiz.words        = tagged.sort(() => Math.random() - 0.5);
    quiz.index        = 0;
    quiz.mistakes     = 0;
    quiz.locked       = false;
    quiz.chanceUsed   = false;
    quiz.chanceActive = false;

    window.restoreNormalQuizBody();
    window.elQuestionHint.textContent = 'Səhv sözlər — qarışıq təkrar';
    window.showQuizScreen();
    window.showQuestion();
  }

  window.startWrongWordsRetake = startWrongWordsRetake;

  return { render, _toggle, _toggleGrammarRule, _retryWrongs: startWrongWordsRetake };

})();
