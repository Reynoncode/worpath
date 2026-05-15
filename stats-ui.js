/**
 * WordPath — Statistika Səhifəsi (UI)
 * stats.js faylından sonra yüklənməlidir.
 *
 * İSTİFADƏ:
 *   StatsPage.render("stats-container-id")
 */

const StatsPage = (() => {

  // Səviyyə konfiqurasiyası
  // total = həmin levelə aid olan bütün quizlərin phase sayının cəmi
  // Hər quiz üçün: phase1 = 1 nöqtə, phase2 = 1 nöqtə, phase3 = 1 nöqtə → max 3 nöqtə/quiz
  // Exam nodeları sayılmır (onlar quiz deyil)
  // Bu dəyərlər app.js-dəki LEVELS və EXAM_IDS-ə uyğun hesablanır:
  //   A1: 53 quiz var, 12-si exam → 41 normal quiz × 3 phase = 123 phase
  //   A2: 40 quiz var,  9-su exam → 31 normal quiz × 3 phase = 93 phase ... və s.
  // Əgər quiz sayı dəyişsə bu dəyərləri də yenilə.
  const LEVELS = [
    { id: "A1", color: "#639922", total: 123 },
    { id: "A2", color: "#3B6D11", total: 93  },
    { id: "B1", color: "#0F6E56", total: 69  },
    { id: "B2", color: "#085041", total: 93  },
    { id: "C1", color: "#BA7517", total: 93  },
    { id: "C2", color: "#A32D2D", total: 141 },
  ];

  // Status → neçə phase tamamlandı
  const STATUS_PHASE_MAP = {
    'completed':       1,
    'phase2_unlocked': 1,
    'phase2_completed':2,
    'phase3_unlocked': 2,
    'level_done':      3,
  };

  // wordpath_v1 progress-dən hər level üçün tamamlanan phase sayını hesabla
  function getPhasesByLevel() {
    let raw = {};
    try {
      const stored = localStorage.getItem('wordpath_v1');
      if (stored) raw = JSON.parse(stored);
    } catch (_) {}

    const counts = {};
    for (const [levelId, statuses] of Object.entries(raw)) {
      const id = levelId.toUpperCase();
      let sum = 0;
      if (Array.isArray(statuses)) {
        statuses.forEach(s => {
          sum += (STATUS_PHASE_MAP[s] || 0);
        });
      }
      counts[id] = sum;
    }
    return counts;
  }

  const SEV_CFG = {
    critical: { label: "Kritik zəiflik", icon: "⚠️", bg: "#FFF1F0", border: "#FCA5A5", textColor: "#991B1B" },
    medium:   { label: "Orta səviyyə",   icon: "⚡", bg: "#FFFBEB", border: "#FCD34D", textColor: "#92400E" },
    light:    { label: "Yüngül səhv",    icon: "ℹ️", bg: "#F0FDF4", border: "#86EFAC", textColor: "#14532D" },
  };

  // Bir səhv qrupunun HTML-i
  function renderGroup(sev, words, openState) {
    const cfg = SEV_CFG[sev];
    const isOpen = openState[sev];
    const headRadius = isOpen ? "10px 10px 0 0" : "10px";

    const rows = words.map(w => `
      <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid #F3F4F6;${w.starFixed ? "opacity:0.72;" : ""}">
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            <span style="font-size:14px;font-weight:600;color:#1a1a1a;">${w.word}</span>
            <span style="font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:#E1F5EE;color:#085041;">${w.level}</span>
            ${w.starFixed ? `<span style="font-size:10px;font-weight:600;padding:1px 7px;border-radius:99px;background:#FAEEDA;color:#633806;border:1px solid #FAC775;">⭐ düzəldildi</span>` : ""}
          </div>
          <div style="font-size:12px;color:#6B7280;margin-top:2px;">${w.translation}</div>
        </div>
        <div style="text-align:center;flex-shrink:0;">
          <div style="font-size:16px;font-weight:700;color:${cfg.textColor};">${w.errors}</div>
          <div style="font-size:10px;color:#9CA3AF;">səhv</div>
        </div>
      </div>
    `).join("");

    return `
      <div style="margin-bottom:8px;">
        <button
          onclick="StatsPage._toggle('${sev}')"
          style="width:100%;display:flex;align-items:center;gap:8px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:${headRadius};padding:9px 14px;cursor:pointer;font-size:13px;font-weight:600;color:${cfg.textColor};transition:border-radius 0.15s;"
          id="sp-head-${sev}"
          aria-expanded="${isOpen}">
          ${cfg.icon}
          ${cfg.label}
          <span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:${cfg.border};color:${cfg.textColor};">${words.length} söz</span>
          <span style="margin-left:auto;font-size:12px;" id="sp-chevron-${sev}">${isOpen ? "▲" : "▼"}</span>
        </button>
        <div id="sp-body-${sev}"
          style="background:#fff;border:1px solid ${cfg.border};border-top:none;border-radius:0 0 10px 10px;overflow:hidden;${isOpen ? "" : "display:none;"}">
          ${rows}
        </div>
      </div>
    `;
  }

  // Açma/bağlama
  const openState = { critical: true, medium: true, light: true };

  function _toggle(sev) {
    openState[sev] = !openState[sev];
    const body    = document.getElementById(`sp-body-${sev}`);
    const chevron = document.getElementById(`sp-chevron-${sev}`);
    const head    = document.getElementById(`sp-head-${sev}`);
    body.style.display      = openState[sev] ? "" : "none";
    chevron.textContent     = openState[sev] ? "▲" : "▼";
    head.style.borderRadius = openState[sev] ? "10px 10px 0 0" : "10px";
    head.setAttribute("aria-expanded", openState[sev]);
  }

  // ─── ANA RENDER FUNKSİYASI ────────────────────────────────────────────────
  function render(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const s = Stats.getStats();
    const phasesByLevel = getPhasesByLevel();

    // Qruplaşdır
    const grouped = { critical: [], medium: [], light: [] };
    s.errorWords.forEach(w => grouped[w.severity].push(w));

    // Səviyyə progress sətirləri
    // Icon əvəzinə rəngli kvadrat (border-radius ~10%), sağ tərəfdəki əlavə yazı yoxdur
    const levelRows = LEVELS.map(lv => {
      const done = phasesByLevel[lv.id] || 0;
      const pct  = lv.total > 0 ? Math.min(100, Math.round((done / lv.total) * 100)) : 0;

      // Rəngli kvadrat badge: 28×28px, border-radius 10% ≈ 3px
      const badge = `
        <div style="
          width:28px;height:28px;
          border-radius:3px;
          background:${lv.color};
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
        ">
          <span style="font-size:10px;font-weight:800;color:#fff;letter-spacing:0.2px;">${lv.id}</span>
        </div>
      `;

      return `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;">
          ${badge}
          <div style="flex:1;height:6px;background:#F0ECE4;border-radius:99px;overflow:hidden;">
            <div style="width:${pct}%;height:100%;background:${lv.color};border-radius:99px;transition:width 0.6s ease;"></div>
          </div>
          <span style="font-size:12px;font-weight:600;width:32px;text-align:right;color:${pct > 0 ? lv.color : "#C4B8A8"};">${pct}%</span>
          <span style="font-size:11px;color:#9CA3AF;width:52px;text-align:right;">${done}/${lv.total}</span>
        </div>
      `;
    }).join("");

    // Səhv qrupları
    const errGroups = ["critical", "medium", "light"]
      .filter(sev => grouped[sev].length > 0)
      .map(sev => renderGroup(sev, grouped[sev], openState))
      .join("");

    const noErrors = s.errorWords.length === 0 ? `
      <div style="background:#F0FDF4;border:1px solid #86EFAC;border-radius:12px;padding:24px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">🎉</div>
        <div style="font-size:14px;font-weight:600;color:#14532D;">Heç bir səhv yoxdur!</div>
      </div>
    ` : "";

    el.innerHTML = `
      <div style="background:#F5F0E8;min-height:100vh;padding:20px 20px 40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

        <!-- Başlıq -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <span style="font-size:22px;font-weight:700;color:#1A1A1A;">Statistika</span>
          <span style="display:flex;align-items:center;gap:5px;background:#FAEEDA;color:#633806;border:1px solid #FAC775;border-radius:99px;padding:5px 12px;font-size:12px;font-weight:600;">
            🔥 ${s.streak} günlük ardıcıllıq
          </span>
        </div>

        <!-- Ulduz paneli -->
        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:22px;">⭐</span>
          <div style="flex:1;">
            <span style="font-size:14px;font-weight:600;color:#1A1A1A;">${s.stars} ulduz</span>
            <span style="font-size:12px;color:#6B7280;"> · ${s.starFixedCount} səhv ulduzla düzəldildi</span>
          </div>
          <span style="font-size:11px;color:#9CA3AF;text-align:right;max-width:110px;line-height:1.4;">Düzəldilsə də səhv qeydə alınır</span>
        </div>

        <!-- 4 kart -->
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:12px;">
          ${[
            { val: s.totalLearned,       lbl: "Öyrənilmiş söz",  sub: null },
            { val: `${s.correctRate}%`,  lbl: "Düzgün cavab",    sub: null },
            { val: s.totalErrors,        lbl: "Ümumi səhv sayı", sub: `${s.starFixedCount} ulduzla düzəldildi`, subColor: "#D97706" },
            { val: "—",                  lbl: "Ortalama / gün",  sub: null },
          ].map(c => `
            <div style="background:#EDEAE2;border-radius:10px;padding:14px 16px;">
              <div style="font-size:24px;font-weight:700;color:#1A1A1A;">${c.val}</div>
              <div style="font-size:12px;color:#6B7280;margin-top:3px;">${c.lbl}</div>
              ${c.sub ? `<div style="font-size:11px;color:${c.subColor};margin-top:3px;font-weight:500;">${c.sub}</div>` : ""}
            </div>
          `).join("")}
        </div>

        <!-- Səviyyə irəliləməsi -->
        <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:14px 16px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">Səviyyə üzrə irəliləmə</div>
          ${levelRows}
        </div>

        <!-- Səhv analizi -->
        <div style="font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Səhv analizi</div>
        ${errGroups}
        ${noErrors}

      </div>
    `;
  }

  return { render, _toggle };

})();
