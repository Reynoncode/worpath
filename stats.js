/* ═══════════════════════════════════════════
   WORDPATH — stats.js
   Reads shared state from data.js + localStorage,
   then renders the statistics page.
═══════════════════════════════════════════ */

/* ── 1. READ STATE ──────────────────────────────────────────────────────────
   data.js exposes the global `LEVELS` array.
   app.js persists progress to localStorage under these keys:
     "wordpath_stars"          → integer
     "wordpath_streak"         → integer
     "wordpath_last_date"      → ISO date string
     "wordpath_progress"       → JSON: { [levelId]: { done: Set→Array } }
     "wordpath_errors"         → JSON: { [word]: { az, level, count, starFixed } }
     "wordpath_session_log"    → JSON: [{ date, durationSec }]
   Adjust key names below if app.js uses different ones.
─────────────────────────────────────────────────────────────────────────── */

function loadStats() {
  // ── Stars & streak ──
  const stars  = parseInt(localStorage.getItem("wordpath_stars")  || "0", 10);
  const streak = parseInt(localStorage.getItem("wordpath_streak") || "0", 10);

  // ── Per-level progress ──
  // progress[id].done is an array of completed quiz indices
  const rawProgress = JSON.parse(localStorage.getItem("wordpath_progress") || "{}");

  // Build enriched level list from LEVELS (data.js global)
  const levelList = (typeof LEVELS !== "undefined" ? LEVELS : []).map(lv => {
    const prog   = rawProgress[lv.id] || {};
    const done   = Array.isArray(prog.done) ? prog.done.length : 0;
    const total  = Array.isArray(lv.quizzes) ? lv.quizzes.length : (lv.total || 0);
    return {
      id:    lv.id,
      label: lv.label || lv.id,
      icon:  lv.icon  || "📖",
      color: lv.color || "#4A8FE7",
      total,
      done,
    };
  });

  // ── Error log ──
  const rawErrors = JSON.parse(localStorage.getItem("wordpath_errors") || "{}");
  const errors = Object.entries(rawErrors).map(([word, info]) => ({
    word,
    az:        info.az        || "",
    level:     info.level     || "",
    count:     info.count     || 1,
    starFixed: info.starFixed || false,
  })).sort((a, b) => b.count - a.count);

  // ── Session log → daily average minutes ──
  const sessionLog = JSON.parse(localStorage.getItem("wordpath_session_log") || "[]");
  const totalSec   = sessionLog.reduce((s, r) => s + (r.durationSec || 0), 0);
  const uniqueDays = new Set(sessionLog.map(r => (r.date || "").slice(0, 10))).size;
  const dailyAvgMin = uniqueDays > 0 ? Math.round(totalSec / uniqueDays / 60) : 0;

  // ── Derived metrics ──
  const totalLearned = levelList.reduce((s, l) => s + l.done, 0);

  // Weekly new: sessions in last 7 days
  const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  const weeklySessions = sessionLog.filter(r => r.date && new Date(r.date) >= weekAgo);
  const weeklyNew = weeklySessions.reduce((s, r) => s + (r.learned || 0), 0);

  // Correct rate from all sessions
  const totalQ       = sessionLog.reduce((s, r) => s + (r.total   || 0), 0);
  const totalCorrect = sessionLog.reduce((s, r) => s + (r.correct || 0), 0);
  const correctRate  = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

  // Weekly rate change (this week vs prev week)
  const twoWeeksAgo = new Date(); twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  const prevWeekSessions = sessionLog.filter(r => {
    const d = r.date ? new Date(r.date) : null;
    return d && d >= twoWeeksAgo && d < weekAgo;
  });
  const prevQ       = prevWeekSessions.reduce((s, r) => s + (r.total   || 0), 0);
  const prevCorrect = prevWeekSessions.reduce((s, r) => s + (r.correct || 0), 0);
  const prevRate    = prevQ > 0 ? Math.round((prevCorrect / prevQ) * 100) : 0;
  const weeklyRateChange = correctRate - prevRate;

  // Error summary
  const totalErrors  = errors.reduce((s, e) => s + e.count, 0);
  const starFixedCount = errors.filter(e => e.starFixed).length;

  return {
    stars, streak,
    totalLearned, weeklyNew,
    correctRate, weeklyRateChange,
    dailyAvgMin,
    levelList,
    errors,
    totalErrors, starFixedCount,
  };
}

// ── FALLBACK DEMO DATA (shown if localStorage is empty) ─────────────────────
// Remove this block once the real app writes to localStorage.
function maybeFallbackDemo(s) {
  if (s.totalLearned > 0 || s.errors.length > 0) return s; // real data exists
  return {
    ...s,
    streak: 7, stars: 5,
    totalLearned: 41, weeklyNew: 6,
    correctRate: 78, weeklyRateChange: 4,
    dailyAvgMin: 24,
    levelList: s.levelList.length ? s.levelList : [
      { id: "a1", label: "A1 — Beginner",          icon: "🌱", total: 54, done: 13, color: "#5aaa35" },
      { id: "a2", label: "A2 — Elementary",         icon: "🌿", total: 40, done:  0, color: "#3d8b37" },
      { id: "b1", label: "B1 — Intermediate",       icon: "🌲", total: 31, done:  0, color: "#2d6b2d" },
      { id: "b2", label: "B2 — Upper Intermediate", icon: "🌲", total: 40, done:  0, color: "#1f5220" },
      { id: "c1", label: "C1 — Advanced",           icon: "⚡", total: 40, done:  0, color: "#d4890a" },
      { id: "c2", label: "C2 — Mastery",            icon: "🔥", total: 60, done:  0, color: "#c93018" },
    ],
    errors: [
      { word: "ambiguous",     az: "qeyri-müəyyən", level: "B1", count: 4, starFixed: false },
      { word: "procrastinate", az: "ləngitmək",     level: "B2", count: 3, starFixed: true  },
      { word: "subtle",        az: "incə, gizli",   level: "B1", count: 3, starFixed: false },
      { word: "peculiar",      az: "qəribə",        level: "A2", count: 2, starFixed: false },
      { word: "endeavour",     az: "cəhd etmək",    level: "B1", count: 2, starFixed: true  },
      { word: "abundant",      az: "bollu",         level: "A2", count: 1, starFixed: false },
      { word: "diligent",      az: "çalışqan",      level: "A1", count: 1, starFixed: false },
    ],
    totalErrors: 16,
    starFixedCount: 2,
  };
}

// ── 2. RENDER ────────────────────────────────────────────────────────────────

function severity(count) {
  if (count >= 3) return "critical";
  if (count === 2) return "medium";
  return "light";
}

const LEVEL_COLORS = {
  A1: "#5aaa35", A2: "#3d8b37",
  B1: "#2d6b2d", B2: "#1f5220",
  C1: "#d4890a", C2: "#c93018",
};

function renderStats(s) {
  // ── Star count in header badge ──
  document.getElementById("star-count").textContent = s.stars;

  // ── Streak ──
  document.getElementById("streak-val").textContent = s.streak;

  // ── Star info bar ──
  document.getElementById("star-info-count").textContent = `${s.stars} ulduz mövcuddur`;
  document.getElementById("star-info-fixed").textContent = `· ${s.starFixedCount} səhv ulduzla düzəldildi`;

  // ── Metric cards ──
  document.getElementById("metric-learned").textContent      = s.totalLearned;
  document.getElementById("metric-weekly").textContent       = s.weeklyNew > 0 ? `↑ ${s.weeklyNew} bu həftə` : "";
  document.getElementById("metric-correct").textContent      = `${s.correctRate}%`;
  document.getElementById("metric-rate-change").textContent  = s.weeklyRateChange !== 0
    ? `${s.weeklyRateChange > 0 ? "↑" : "↓"} ${Math.abs(s.weeklyRateChange)}% keçən həftəyə görə` : "";
  document.getElementById("metric-errors").textContent       = s.totalErrors;
  document.getElementById("metric-star-fixed").textContent   = `${s.starFixedCount} ulduzla düzəldildi`;
  document.getElementById("metric-avg").textContent          = `${s.dailyAvgMin} dəq`;

  // ── Level progress ──
  const levelList = document.getElementById("level-progress-list");
  levelList.innerHTML = s.levelList.map(lv => {
    const pct = lv.total > 0 ? Math.round((lv.done / lv.total) * 100) : 0;
    return `
      <div class="level-row">
        <span class="level-row-icon">${lv.icon}</span>
        <span class="level-row-id">${lv.id.toUpperCase()}</span>
        <div class="level-row-bar-wrap">
          <div class="level-row-bar-fill"
               style="width:${pct}%; background:${lv.color}"></div>
        </div>
        <span class="level-row-pct" style="color:${pct > 0 ? lv.color : 'var(--text-faint)'}">${pct}%</span>
        <span class="level-row-count">${lv.done}/${lv.total}</span>
      </div>`;
  }).join("");

  // ── Error groups ──
  const errorGroups = document.getElementById("error-groups");
  const noErrors    = document.getElementById("no-errors");

  if (s.errors.length === 0) {
    noErrors.classList.remove("hidden");
    return;
  }

  const grouped = { critical: [], medium: [], light: [] };
  s.errors.forEach(e => grouped[severity(e.count)].push(e));

  const SEV_LABELS = {
    critical: "Kritik zəiflik",
    medium:   "Orta səviyyə",
    light:    "Yüngül səhv",
  };

  errorGroups.innerHTML = "";

  ["critical", "medium", "light"].forEach(sev => {
    const items = grouped[sev];
    if (!items.length) return;

    const group = document.createElement("div");
    group.className = `error-group sev-${sev}`;

    const header = document.createElement("button");
    header.className = "error-group-header open";
    header.innerHTML = `
      <span class="error-group-dot"></span>
      <span class="error-group-name">${SEV_LABELS[sev]}</span>
      <span class="error-group-badge">${items.length} söz</span>
      <span class="error-group-chevron open">▼</span>
    `;

    const itemsList = document.createElement("div");
    itemsList.className = "error-items-list";
    itemsList.innerHTML = items.map(e => {
      const lc = LEVEL_COLORS[e.level] || "#888";
      return `
        <div class="error-item${e.starFixed ? " star-fixed" : ""}">
          <div class="error-item-info">
            <div class="error-item-top">
              <span class="error-item-word">${e.word}</span>
              <span class="error-level-badge"
                    style="background:${lc}20; color:${lc}">${e.level}</span>
              ${e.starFixed
                ? `<span class="star-fixed-badge">⭐ düzəldildi</span>`
                : ""}
            </div>
            <div class="error-item-az">${e.az}</div>
          </div>
          <div class="error-count-wrap">
            <div class="error-count-num">${e.count}</div>
            <div class="error-count-lbl">səhv</div>
          </div>
        </div>`;
    }).join("");

    // Toggle accordion
    let open = true;
    header.addEventListener("click", () => {
      open = !open;
      header.classList.toggle("open", open);
      const chevron = header.querySelector(".error-group-chevron");
      chevron.classList.toggle("open", open);
      itemsList.style.display = open ? "" : "none";
      header.style.borderRadius = open ? "10px 10px 0 0" : "10px";
    });

    group.appendChild(header);
    group.appendChild(itemsList);
    errorGroups.appendChild(group);
  });
}

// ── 3. BACK BUTTON ───────────────────────────────────────────────────────────
document.getElementById("back-btn").addEventListener("click", () => {
  history.length > 1 ? history.back() : (window.location.href = "index.html");
});

// ── 4. INIT ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const raw   = loadStats();
  const stats = maybeFallbackDemo(raw);
  renderStats(stats);
});
