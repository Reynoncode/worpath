/**
 * WordPath — Grammar Engine Stats Hook
 * Bu fayl grammar-engine.js-ə toxunmadan onun funksiyalarını
 * GrammarStats ilə əlaqələndirir.
 *
 * grammar-engine.js-dən SONRA yüklənməlidir.
 * grammar-stats.js-dən SONRA yüklənməlidir.
 *
 * ruleId  = LEVELS[levelIdx].id   (məs: "grammar", "verbs", "passive_voice")
 * ruleName = LEVELS[levelIdx].name (məs: "NOUNS - İSİMLƏR", "VERBS")
 *
 * Beləliklə bütün "Dərs 1.1", "Dərs 1.2"... eyni "grammar" qaydası altında toplanır.
 */

(function patchGrammarStats() {

  // ─── handleGrammarMiniAnswer hook ──────────────────────────────────────
  const _origMiniAnswer = window.handleGrammarMiniAnswer;

  window.handleGrammarMiniAnswer = function(btn, card, cardIdx) {
    // Orijinal davranışı saxla
    if (_origMiniAnswer) _origMiniAnswer.call(this, btn, card, cardIdx);

    // Stats qeydiyyatı
    try {
      const qi      = parseInt(btn.dataset.qi);
      const chosen  = btn.dataset.opt;
      const q       = card.questions[qi];
      const correct = chosen === q.answer;

      const { ruleId, ruleName } = _getRule();

      if (window.GrammarStats && ruleId) {
        GrammarStats.recordAnswer(ruleId, ruleName, q.q, correct);
      }
    } catch(e) {
      console.warn('GrammarStats hook (miniAnswer):', e);
    }
  };

  // ─── finishGrammarLesson hook ───────────────────────────────────────────
  // Bir dərs bitəndə qaydanı "tamamlandı" kimi işarələmirik —
  // çünki bir qayda altında çoxlu dərs var (Dərs 1.1, 1.2...).
  // Qayda tamamlanması ayrıca məntiqlə (məs: bütün dərslər bitəndə) edilə bilər.
  // Hələlik bu hook yalnız stats qeydiyyatı üçün istifadə olunur.
  const _origFinish = window.finishGrammarLesson;

  window.finishGrammarLesson = function() {
    // Orijinal davranışı saxla
    if (_origFinish) _origFinish.call(this);
  };

  // ─── Qayda məlumatı köməkçisi ───────────────────────────────────────────
  // Level obyektinin özündən oxuyur:
  //   LEVELS[levelIdx].id   → ruleId  (məs: "grammar", "verbs")
  //   LEVELS[levelIdx].name → ruleName (məs: "NOUNS - İSİMLƏR")
  function _getRule() {
    const state = window.grammarState;
    if (!state || state.levelIdx === null) return { ruleId: null, ruleName: null };

    try {
      const lvl = window.LEVELS?.[state.levelIdx];
      if (!lvl) return { ruleId: null, ruleName: null };

      const ruleId   = lvl.id   || `rule_${state.levelIdx}`;
      const ruleName = lvl.name || ruleId;
      return { ruleId, ruleName };
    } catch(_) {
      return { ruleId: null, ruleName: null };
    }
  }

})();
