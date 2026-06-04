// ============================================================
//  WORDPATH — GENERAL ENGLISH DATA
//  general-english-data.js
//  Bu fayl app.js-dən sonra, engine.js-dən əvvəl yüklənməlidir.
// ============================================================

const GENERAL_ENGLISH_LEVELS = [

  // ── 1. Cümlə Təməli ──────────────────────────────────────
  {
    id:    'cumle_temeli',
    name:  'Cümlə Təməli',
    icon:  '🧱',
    color: '#6366F1',
    quizzes: [

      // ── Node 1 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Cümlənin əsas hissələri',
        cards: [
          {
            type:    'lesson',
            title:   'Cümlənin əsas hissələri nədir?',
            content: 'İngilis dilində hər cümlənin iki əsas hissəsi var: **subject** (mübtəda) və **predicate** (xəbər).\n\nMübtəda cümlədə kim və ya nə haqqında danışıldığını bildirir. Xəbər isə mübtəda haqqında nə deyildiyin göstərir.',
            examples: [
              { word: 'The cat sleeps.',   az: 'Pişik yatır.',       note: 'subject: The cat' },
              { word: 'She reads books.',  az: 'O kitab oxuyur.',    note: 'subject: She' },
              { word: 'They play tennis.', az: 'Onlar tennis oynayır.', note: 'subject: They' },
            ],
            tip: 'Cümlədə mübtədanı tapmaq üçün "kim?" və ya "nə?" sualını ver.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"The dog runs fast." — cümlədə subject hansıdır?',
                options: ['runs fast', 'The dog', 'fast', 'runs'],
                answer:  'The dog',
              },
              {
                q:       'Hansı cümlə düzgün quruluşdadır?',
                options: ['Sleeps the cat.', 'The cat sleeps.', 'Cat the sleeps.', 'Sleeps cat the.'],
                answer:  'The cat sleeps.',
              },
              {
                q:       '"She writes letters." — predicate hansıdır?',
                options: ['She', 'letters', 'writes letters', 'She writes'],
                answer:  'writes letters',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🧱',
            title: 'Birinci addım!',
            desc:  'Cümlənin əsas hissələrini öyrəndin.',
            stats: [
              { num: '2',  label: 'əsas hissə' },
              { num: '3',  label: 'nümunə' },
            ],
          },
        ],
      },

      // ── Node 2 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Söz sırası (Word Order)',
        cards: [
          {
            type:    'lesson',
            title:   'İngilis dilində söz sırası',
            content: 'İngilis dilinin əsas söz sırası: **Subject → Verb → Object** (SVO).\n\nBu sıra demək olar ki, həmişə sabitdir. Azərbaycan dilindən fərqli olaraq, ingilis dilində söz sırasını dəyişmək cümləni yanlış edə bilər.',
            table: [
              ['Subject', 'Verb',  'Object'],
              ['I',       'eat',   'apples'],
              ['She',     'loves', 'music'],
              ['They',    'watch', 'films'],
            ],
            note: 'İngilis dilində söz sırasını dəyişmək olmaz: "Apples eat I" — yanlışdır!',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       'Düzgün söz sırası hansıdır?',
                options: ['Books she reads.', 'She reads books.', 'Reads she books.', 'Books reads she.'],
                answer:  'She reads books.',
              },
              {
                q:       'SVO nəyi bildirir?',
                options: [
                  'Sound, Voice, Object',
                  'Subject, Verb, Object',
                  'Subject, Voice, Order',
                  'Simple, Verb, Output',
                ],
                answer:  'Subject, Verb, Object',
              },
              {
                q:       '"___ play football every day." — boşluğa nə gəlir?',
                options: ['Football', 'Every day', 'The boys', 'Play'],
                answer:  'The boys',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '📐',
            title: 'Söz sırası mənimsəndi!',
            desc:  'SVO strukturunu öyrəndin.',
          },
        ],
      },

      // ── Node 3 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Müsbət cümlə qurmaq',
        cards: [
          {
            type:    'lesson',
            title:   'Müsbət (affirmative) cümlə',
            content: 'Müsbət cümlə bir faktı, vərdişi və ya hərəkəti bildirir. Quruluşu sadədir:\n\n**Subject + Verb (+ Object/Complement)**',
            examples: [
              { word: 'I work here.',          az: 'Mən burada işləyirəm.' },
              { word: 'He plays the guitar.',  az: 'O gitara çalır.' },
              { word: 'We love this city.',    az: 'Biz bu şəhəri sevirik.' },
            ],
            tip: '3-cü şəxs təkdə (he/she/it) fellərə **-s** və ya **-es** əlavə olunur: works, plays, goes.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"She ___ to school every day."',
                options: ['go', 'goes', 'going', 'gone'],
                answer:  'goes',
              },
              {
                q:       'Hansı cümlə müsbət cümlədir?',
                options: [
                  'He does not play.',
                  'Does she sing?',
                  'They watch TV.',
                  'We are not here.',
                ],
                answer:  'They watch TV.',
              },
              {
                q:       '"I ___ English every morning."',
                options: ['studies', 'study', 'studied', 'studying'],
                answer:  'study',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '✅',
            title: 'Müsbət cümlə!',
            desc:  'Affirmative cümlə qurmağı öyrəndin.',
          },
        ],
      },

      // ── Node 4 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'İnkar cümlə qurmaq',
        cards: [
          {
            type:    'lesson',
            title:   'İnkar (negative) cümlə',
            content: 'İnkar cümlə qurmaq üçün **do not (don\'t)** və ya **does not (doesn\'t)** istifadə olunur.\n\n**I/You/We/They** → don\'t + fel\n**He/She/It** → doesn\'t + fel',
            table: [
              ['Müsbət',           'İnkar'],
              ['I play.',          'I don\'t play.'],
              ['She works.',       'She doesn\'t work.'],
              ['They watch TV.',   'They don\'t watch TV.'],
            ],
            note: 'doesn\'t istifadə edəndə feldən -s/-es götürülür: "She doesn\'t works" — yanlışdır!',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"He ___ like coffee."',
                options: ['don\'t', 'doesn\'t', 'not', 'isn\'t'],
                answer:  'doesn\'t',
              },
              {
                q:       '"They ___ speak French."',
                options: ['doesn\'t', 'not', 'don\'t', 'isn\'t'],
                answer:  'don\'t',
              },
              {
                q:       'Hansı inkar cümlə düzgündür?',
                options: [
                  'She doesn\'t works here.',
                  'She don\'t work here.',
                  'She doesn\'t work here.',
                  'She not works here.',
                ],
                answer:  'She doesn\'t work here.',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '❌',
            title: 'İnkar cümlə!',
            desc:  'Negative cümlə qurmağı öyrəndin.',
          },
        ],
      },

      // ── Node 5 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Sual cümləsi qurmaq',
        cards: [
          {
            type:    'lesson',
            title:   'Sual (interrogative) cümlə',
            content: 'Sual cümləsi qurmaq üçün **do/does** cümlənin əvvəlinə gəlir.\n\n**Do** + I/you/we/they + fel?\n**Does** + he/she/it + fel?',
            examples: [
              { word: 'Do you like tea?',     az: 'Sən çay sevirirsən?' },
              { word: 'Does he work here?',   az: 'O burada işləyir?' },
              { word: 'Do they play chess?',  az: 'Onlar şahmat oynayır?' },
            ],
            tip: 'Yes/No suallarına qısa cavab veririk: "Yes, I do." / "No, she doesn\'t."',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"___ she speak English?"',
                options: ['Do', 'Does', 'Is', 'Are'],
                answer:  'Does',
              },
              {
                q:       '"Do you like pizza?" — düzgün qısa cavab hansıdır?',
                options: ['Yes, I like.', 'Yes, I does.', 'Yes, I do.', 'Yes, do I.'],
                answer:  'Yes, I do.',
              },
              {
                q:       '"___ they study at night?"',
                options: ['Does', 'Is', 'Do', 'Are'],
                answer:  'Do',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '❓',
            title: 'Sual ustası!',
            desc:  'Interrogative cümlə qurmağı öyrəndin.',
          },
        ],
      },

    ],
  },

  // ── 2. Zamanlar və Modal ──────────────────────────────────
  {
    id:    'zamanlar_modal',
    name:  'Zamanlar və Modal',
    icon:  '⏱️',
    color: '#0EA5E9',
    quizzes: [

      // ── Node 1 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Present Simple',
        cards: [
          {
            type:    'lesson',
            title:   'Present Simple — İndiki Sadə Zaman',
            content: 'Present Simple vərdiş, ümumi həqiqət və daimi hərəkətlər üçün işlədilir.\n\n**Quruluş:** Subject + V1 (he/she/it → V1+s)',
            table: [
              ['Şəxs',  'Müsbət',        'İnkar',              'Sual'],
              ['I',     'work',          'don\'t work',        'Do I work?'],
              ['He',    'works',         'doesn\'t work',      'Does he work?'],
              ['They',  'work',          'don\'t work',        'Do they work?'],
            ],
            examples: [
              { word: 'She teaches math.',   az: 'O riyaziyyat tədris edir.' },
              { word: 'The sun rises east.', az: 'Günəş şərqdən doğur.' },
            ],
            tip: 'Zaman zərfləri: always, usually, often, sometimes, never, every day.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"He ___ football on Saturdays."',
                options: ['play', 'plays', 'played', 'playing'],
                answer:  'plays',
              },
              {
                q:       'Present Simple hansı hal üçün istifadə olunmur?',
                options: ['Vərdişlər', 'Ümumi həqiqətlər', 'İndi baş verən hadisə', 'Daimi hərəkətlər'],
                answer:  'İndi baş verən hadisə',
              },
              {
                q:       '"___ you drink coffee every morning?"',
                options: ['Does', 'Is', 'Do', 'Are'],
                answer:  'Do',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🔄',
            title: 'Present Simple!',
            desc:  'İndiki sadə zamanı öyrəndin.',
          },
        ],
      },

      // ── Node 2 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Present Continuous',
        cards: [
          {
            type:    'lesson',
            title:   'Present Continuous — İndiki Davamlı Zaman',
            content: 'Present Continuous indi, danışıq anında baş verən hərəkətlər üçün istifadə olunur.\n\n**Quruluş:** Subject + am/is/are + V-ing',
            table: [
              ['Şəxs',  'Nümunə'],
              ['I',     'am working'],
              ['He/She','is working'],
              ['We/They','are working'],
            ],
            examples: [
              { word: 'I am reading now.',      az: 'Mən indi oxuyuram.' },
              { word: 'She is cooking dinner.', az: 'O nahar bişirir.' },
            ],
            tip: 'Zaman zərfləri: now, at the moment, currently, right now, today.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"They ___ TV right now."',
                options: ['watch', 'watches', 'are watching', 'watched'],
                answer:  'are watching',
              },
              {
                q:       '"She ___ her homework at the moment."',
                options: ['do', 'does', 'is doing', 'did'],
                answer:  'is doing',
              },
              {
                q:       'Hansı cümlə Present Continuous-dadır?',
                options: [
                  'I work every day.',
                  'I am working now.',
                  'I worked yesterday.',
                  'I will work tomorrow.',
                ],
                answer:  'I am working now.',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '▶️',
            title: 'Present Continuous!',
            desc:  'İndiki davamlı zamanı öyrəndin.',
          },
        ],
      },

      // ── Node 3 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Past Simple',
        cards: [
          {
            type:    'lesson',
            title:   'Past Simple — Keçmiş Sadə Zaman',
            content: 'Past Simple keçmişdə başa çatmış hərəkətlər üçün istifadə olunur.\n\n**Müntəzəm fellər:** V + -ed\n**Qeyri-müntəzəm fellər:** xüsusi forma (go→went, see→saw)',
            examples: [
              { word: 'I visited London.',    az: 'Mən Londona getdim.' },
              { word: 'She saw that film.',   az: 'O o filmi gördü.' },
              { word: 'They didn\'t come.',   az: 'Onlar gəlmədi.' },
            ],
            tip: 'Zaman zərfləri: yesterday, last week, ago, in 2020, in the morning.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"She ___ the book yesterday."',
                options: ['read', 'reads', 'reading', 'is reading'],
                answer:  'read',
              },
              {
                q:       '"They ___ to the party last night." (go)',
                options: ['go', 'goes', 'went', 'gone'],
                answer:  'went',
              },
              {
                q:       '"___ you finish your homework?" (Past Simple sual)',
                options: ['Do', 'Does', 'Did', 'Have'],
                answer:  'Did',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '⏮️',
            title: 'Past Simple!',
            desc:  'Keçmiş sadə zamanı öyrəndin.',
          },
        ],
      },

      // ── Node 4 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Future Simple',
        cards: [
          {
            type:    'lesson',
            title:   'Future Simple — Gələcək Sadə Zaman',
            content: 'Future Simple gələcəkdəki hərəkətlər, qərarlar və proqnozlar üçün istifadə olunur.\n\n**Quruluş:** Subject + will + V1',
            table: [
              ['Növ',       'Nümunə'],
              ['Müsbət',    'I will call you.'],
              ['İnkar',     'I won\'t call you.'],
              ['Sual',      'Will you call me?'],
            ],
            tip: 'will not = won\'t. "I\'ll" = "I will" — danışıq dilindəki qısaldılmış forma.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"I think it ___ rain tomorrow."',
                options: ['is', 'rains', 'will', 'going'],
                answer:  'will',
              },
              {
                q:       '"She ___ come to the party." (inkar)',
                options: ['will not', 'does not', 'is not', 'has not'],
                answer:  'will not',
              },
              {
                q:       '"___ you help me?" (sual)',
                options: ['Do', 'Are', 'Will', 'Did'],
                answer:  'Will',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '⏭️',
            title: 'Future Simple!',
            desc:  'Gələcək sadə zamanı öyrəndin.',
          },
        ],
      },

      // ── Node 5 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Modal Fellər: can, must, should',
        cards: [
          {
            type:    'lesson',
            title:   'Modal fellər nədir?',
            content: 'Modal fellər bacarıq, məcburiyyət və məsləhəti bildirmək üçün istifadə olunur. Modal fellərdən sonra həmişə **V1** (əsas fel) gəlir.',
            table: [
              ['Modal', 'Məna',         'Nümunə'],
              ['can',   'bacarıq',      'She can swim.'],
              ['must',  'məcburiyyət',  'You must study.'],
              ['should','məsləhət',     'You should sleep early.'],
            ],
            note: 'Modal fellərdən sonra "to" gəlmir: "She can to swim" — yanlışdır!',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"You ___ see a doctor. (məsləhət)"',
                options: ['can', 'must', 'should', 'will'],
                answer:  'should',
              },
              {
                q:       '"She ___ speak three languages. (bacarıq)"',
                options: ['must', 'should', 'can', 'will'],
                answer:  'can',
              },
              {
                q:       '"You ___ wear a seatbelt. (məcburiyyət)"',
                options: ['should', 'can', 'might', 'must'],
                answer:  'must',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '⚙️',
            title: 'Modal fellər!',
            desc:  'can, must və should-u öyrəndin.',
          },
        ],
      },

    ],
  },

  // ── 3. İsimlər, Əvəzliklər, Artikl ──────────────────────
  {
    id:    'isim_evezlik_artikl',
    name:  'İsimlər, Əvəzliklər, Artikl',
    icon:  '🔤',
    color: '#10B981',
    quizzes: [

      // ── Node 1 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'İsimlər: sayılan və sayılmayan',
        cards: [
          {
            type:    'lesson',
            title:   'Countable və Uncountable Nouns',
            content: 'İngiliscədə isimlər iki qrupa bölünür:\n\n**Sayılan (Countable):** saya bilənlər — a book, two books\n**Sayılmayan (Uncountable):** saya bilməyənlər — water, music, information',
            table: [
              ['Sayılan',   'Sayılmayan'],
              ['a chair',   'water'],
              ['two cats',  'music'],
              ['an apple',  'information'],
            ],
            note: 'Sayılmayan isimlərlə "a/an" işlədilmir, cəm forması olmur: "informations" — yanlışdır!',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"Music" hansı növ isimdir?',
                options: ['Sayılan', 'Sayılmayan', 'Xüsusi isim', 'Cəm isim'],
                answer:  'Sayılmayan',
              },
              {
                q:       'Hansı söz sayılan isimdir?',
                options: ['water', 'advice', 'chair', 'sugar'],
                answer:  'chair',
              },
              {
                q:       '"___ good advice." — boşluğa nə gəlir?',
                options: ['A', 'An', 'Some', 'Two'],
                answer:  'Some',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '📦',
            title: 'İsimlər mənimsəndi!',
            desc:  'Countable və uncountable nouns-u öyrəndin.',
          },
        ],
      },

      // ── Node 2 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Şəxs əvəzlikləri',
        cards: [
          {
            type:    'lesson',
            title:   'Personal Pronouns — Şəxs Əvəzlikləri',
            content: 'Şəxs əvəzlikləri isimlər yerinə işlədilir. Cümlədəki mövqeyinə görə iki forması var: **subject** (mübtəda) və **object** (tamamlıq).',
            table: [
              ['Subject', 'Object', 'Məna'],
              ['I',       'me',     'mən/məni'],
              ['you',     'you',    'sən/səni'],
              ['he',      'him',    'o/onu (kişi)'],
              ['she',     'her',    'o/onu (qadın)'],
              ['it',      'it',     'o/onu (şey)'],
              ['we',      'us',     'biz/bizi'],
              ['they',    'them',   'onlar/onları'],
            ],
            tip: 'Subject əvəzliyi felin əvvəlində, object əvəzliyi felin ardından gəlir.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"___ is my brother." — (o, kişi)',
                options: ['Him', 'His', 'He', 'It'],
                answer:  'He',
              },
              {
                q:       '"I saw ___ at the park." — (onu, qadın)',
                options: ['she', 'her', 'hers', 'him'],
                answer:  'her',
              },
              {
                q:       '"___ are students." — (biz)',
                options: ['Us', 'Our', 'We', 'Them'],
                answer:  'We',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '👤',
            title: 'Əvəzliklər!',
            desc:  'Personal pronouns-u öyrəndin.',
          },
        ],
      },

      // ── Node 3 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Mülkiyyət əvəzlikləri',
        cards: [
          {
            type:    'lesson',
            title:   'Possessive Pronouns & Adjectives',
            content: 'Mülkiyyət bildirən iki forma var:\n\n**Possessive Adjective** (isimdən əvvəl): my, your, his, her, its, our, their\n**Possessive Pronoun** (müstəqil): mine, yours, his, hers, ours, theirs',
            table: [
              ['Adjective', 'Pronoun', 'Nümunə'],
              ['my',        'mine',    'This is my book. / It\'s mine.'],
              ['your',      'yours',   'Is this your pen? / Is it yours?'],
              ['his',       'his',     'That\'s his car. / It\'s his.'],
              ['her',       'hers',    'Her bag is red. / The red one is hers.'],
            ],
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"This is ___ phone." — (mənim)',
                options: ['mine', 'me', 'my', 'I'],
                answer:  'my',
              },
              {
                q:       '"The blue bag is ___." — (onun, qadın)',
                options: ['her', 'she', 'hers', 'his'],
                answer:  'hers',
              },
              {
                q:       '"Is that ___ car?" — (sizin)',
                options: ['you', 'yours', 'your', 'ours'],
                answer:  'your',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🏷️',
            title: 'Mülkiyyət əvəzlikləri!',
            desc:  'Possessive forms-u öyrəndin.',
          },
        ],
      },

      // ── Node 4 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'A, An, The — Artikllar',
        cards: [
          {
            type:    'lesson',
            title:   'Müəyyən və qeyri-müəyyən artikl',
            content: '**A / An** — qeyri-müəyyən artikl: ilk dəfə xatırlananda, ümumi bir şey haqqında danışanda.\n\n**The** — müəyyən artikl: artıq bilinən, müəyyən bir şey haqqında danışanda.\n\n**A** samit səslə başlayan sözlər üçün, **An** sait səslə başlayan sözlər üçün.',
            table: [
              ['Artikl', 'İstifadə',         'Nümunə'],
              ['a',      'samit + ilk dəfə', 'a book, a car'],
              ['an',     'sait + ilk dəfə',  'an apple, an hour'],
              ['the',    'müəyyən/bilinən',  'the sun, the book I told you'],
            ],
            note: '"an hour" — h səssizdən başlasa da, tələffüzdə sait kimi başlayır, ona görə "an" istifadə olunur.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"She is ___ engineer."',
                options: ['a', 'an', 'the', '-'],
                answer:  'an',
              },
              {
                q:       '"___ sun rises in the east."',
                options: ['A', 'An', 'The', '-'],
                answer:  'The',
              },
              {
                q:       '"I saw ___ dog in the park. ___ dog was brown."',
                options: ['a / A', 'a / The', 'the / A', 'an / The'],
                answer:  'a / The',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '📰',
            title: 'Artikllar!',
            desc:  'A, an, the-ni öyrəndin.',
          },
        ],
      },

      // ── Node 5 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'This, That, These, Those',
        cards: [
          {
            type:    'lesson',
            title:   'Demonstrative Pronouns — İşarə əvəzlikləri',
            content: 'İşarə əvəzlikləri yaxın və uzaq şeyləri göstərmək üçün işlədilir.\n\n**Tək:** this (yaxın) / that (uzaq)\n**Cəm:** these (yaxın) / those (uzaq)',
            table: [
              ['',       'Tək',    'Cəm'],
              ['Yaxın',  'this',   'these'],
              ['Uzaq',   'that',   'those'],
            ],
            examples: [
              { word: 'This is my pen.',      az: 'Bu mənim qələmimdir.' },
              { word: 'That house is big.',   az: 'O ev böyükdür.' },
              { word: 'These are my keys.',   az: 'Bunlar mənim açarlarımdır.' },
              { word: 'Those birds fly fast.',az: 'O quşlar sürətli uçur.' },
            ],
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"___ books on the table are mine." — (yaxın, cəm)',
                options: ['That', 'This', 'Those', 'These'],
                answer:  'These',
              },
              {
                q:       '"___ mountain over there is very high." — (uzaq, tək)',
                options: ['This', 'These', 'Those', 'That'],
                answer:  'That',
              },
              {
                q:       '"Is ___ your phone?" — (əlindəki, yaxın)',
                options: ['that', 'those', 'this', 'these'],
                answer:  'this',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '👆',
            title: 'İşarə əvəzlikləri!',
            desc:  'This, that, these, those-u öyrəndin.',
          },
        ],
      },

    ],
  },

  // ── 4. Cümləni Tamamlayanlar ──────────────────────────────
  {
    id:    'cumle_tamamlayanlar',
    name:  'Cümləni Tamamlayanlar',
    icon:  '🔗',
    color: '#F59E0B',
    quizzes: [

      // ── Node 1 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Sifətlər (Adjectives)',
        cards: [
          {
            type:    'lesson',
            title:   'Sifətlər — Adjectives',
            content: 'Sifətlər isimləri təsvir edir. İngilis dilində sifət həmişə isimden **əvvəl** gəlir (Azərbaycan dili ilə eyni).',
            examples: [
              { word: 'a tall building',    az: 'hündür bina' },
              { word: 'cold weather',       az: 'soyuq hava' },
              { word: 'an interesting book',az: 'maraqlı kitab' },
            ],
            table: [
              ['Növ',          'Nümunə'],
              ['Ölçü',         'big, small, tall, short'],
              ['Rəng',         'red, blue, green, white'],
              ['Keyfiyyət',    'good, bad, old, new'],
              ['Hiss',         'happy, sad, tired, excited'],
            ],
            tip: 'Sifət cümlədə "be" felindən sonra da gələ bilər: "She is happy." — burada "happy" sifətdir.',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"She has ___ hair." — sifət hansıdır?',
                options: ['has', 'she', 'long', 'hair'],
                answer:  'long',
              },
              {
                q:       'Hansı söz sifətdir?',
                options: ['quickly', 'beauty', 'beautiful', 'beautify'],
                answer:  'beautiful',
              },
              {
                q:       '"The ___ dog barked loudly."',
                options: ['run', 'quickly', 'big', 'barked'],
                answer:  'big',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🎨',
            title: 'Sifətlər!',
            desc:  'Adjectives-i öyrəndin.',
          },
        ],
      },

      // ── Node 2 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Zərflər (Adverbs)',
        cards: [
          {
            type:    'lesson',
            title:   'Zərflər — Adverbs',
            content: 'Zərflər fel, sifət və ya digər zərfləri təsvir edir. Çox vaxt sifətə **-ly** əlavə edilir.\n\nQuick → quickly\nSlow → slowly\nHappy → happily',
            table: [
              ['Növ',       'Nümunə'],
              ['Tərz',      'quickly, slowly, well, badly'],
              ['Zaman',     'now, then, soon, already, yet'],
              ['Yer',       'here, there, everywhere, nowhere'],
              ['Tezlik',    'always, often, sometimes, never'],
            ],
            note: 'Bəzi zərflər sifətlə eyni formadadır: fast, hard, late — "She runs fast." / "a fast car"',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"She sings ___." — (gözəl şəkildə)',
                options: ['beautiful', 'beauty', 'beautifully', 'more beautiful'],
                answer:  'beautifully',
              },
              {
                q:       '"He ___ forgets his keys." — (həmişə)',
                options: ['often', 'never', 'always', 'sometimes'],
                answer:  'always',
              },
              {
                q:       '"They arrived ___." — (gec)',
                options: ['lately', 'late', 'later', 'latest'],
                answer:  'late',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '⚡',
            title: 'Zərflər!',
            desc:  'Adverbs-i öyrəndin.',
          },
        ],
      },

      // ── Node 3 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Önlüklər (Prepositions)',
        cards: [
          {
            type:    'lesson',
            title:   'Prepositions — Önlüklər',
            content: 'Önlüklər zaman, yer və istiqaməti bildirir. Ən çox istifadə olunanlar: **in, on, at**.',
            table: [
              ['Önlük', 'İstifadə',               'Nümunə'],
              ['in',    'ölkə, şəhər, ay, il',    'in London, in June, in 2024'],
              ['on',    'gün, tarix, səth',        'on Monday, on the table'],
              ['at',    'dəqiq vaxt, yer nöqtəsi', 'at 5 o\'clock, at school'],
            ],
            examples: [
              { word: 'She was born in 1995.',  az: 'O 1995-ci ildə anadan olub.' },
              { word: 'The book is on the desk.',az: 'Kitab masanın üstündədir.' },
              { word: 'Meet me at the station.',az: 'Stansiyada görüşək.' },
            ],
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"I wake up ___ 7 o\'clock."',
                options: ['in', 'on', 'at', 'by'],
                answer:  'at',
              },
              {
                q:       '"My birthday is ___ March."',
                options: ['at', 'on', 'in', 'by'],
                answer:  'in',
              },
              {
                q:       '"The meeting is ___ Monday."',
                options: ['in', 'at', 'by', 'on'],
                answer:  'on',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '📍',
            title: 'Önlüklər!',
            desc:  'in, on, at önlüklərini öyrəndin.',
          },
        ],
      },

      // ── Node 4 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'Bağlayıcılar (Conjunctions)',
        cards: [
          {
            type:    'lesson',
            title:   'Conjunctions — Bağlayıcılar',
            content: 'Bağlayıcılar sözləri, ifadələri və cümlələri birləşdirir.\n\n**Əsas bağlayıcılar:** and, but, or, so, because, although',
            table: [
              ['Bağlayıcı',  'Məna',         'Nümunə'],
              ['and',        'və',           'I like tea and coffee.'],
              ['but',        'amma',         'She is smart but lazy.'],
              ['or',         'və ya',        'Tea or coffee?'],
              ['because',    'çünki',        'I\'m tired because I worked all day.'],
              ['so',         'ona görə',     'It was cold, so I wore a coat.'],
              ['although',   'baxmayaraq',   'Although it rained, we went out.'],
            ],
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"I wanted to go, ___ I was tired."',
                options: ['and', 'because', 'but', 'so'],
                answer:  'but',
              },
              {
                q:       '"She stayed home ___ she was sick."',
                options: ['but', 'although', 'because', 'or'],
                answer:  'because',
              },
              {
                q:       '"Do you want tea ___ coffee?"',
                options: ['and', 'but', 'so', 'or'],
                answer:  'or',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🔗',
            title: 'Bağlayıcılar!',
            desc:  'Conjunctions-u öyrəndin.',
          },
        ],
      },

      // ── Node 5 ───────────────────────────────────────────
      {
        type:  'grammar_lesson',
        title: 'There is / There are',
        cards: [
          {
            type:    'lesson',
            title:   'There is / There are',
            content: 'Bir şeyin mövcudluğunu bildirmək üçün **there is** (tək) və **there are** (cəm) istifadə olunur.',
            table: [
              ['Forma',      'Nümunə',                        'Məna'],
              ['There is',   'There is a cat in the garden.', 'Bağda bir pişik var.'],
              ['There are',  'There are books on the shelf.', 'Rəfdə kitablar var.'],
              ['There isn\'t','There isn\'t any milk.',        'Süd yoxdur.'],
              ['There aren\'t','There aren\'t any students.',  'Heç bir tələbə yoxdur.'],
            ],
            tip: 'Sual forması: "Is there a bank near here?" / "Are there any seats?"',
          },
          {
            type:  'mini_check',
            questions: [
              {
                q:       '"___ a supermarket near my house."',
                options: ['There are', 'There is', 'It is', 'They are'],
                answer:  'There is',
              },
              {
                q:       '"___ many students in the classroom."',
                options: ['There is', 'It are', 'There are', 'They are'],
                answer:  'There are',
              },
              {
                q:       '"___ any water in the bottle?" — sual',
                options: ['Are there', 'Is there', 'There is', 'Have there'],
                answer:  'Is there',
              },
            ],
          },
          {
            type:  'badge',
            icon:  '🌍',
            title: 'There is/are!',
            desc:  'Mövcudluq ifadəsini öyrəndin.',
          },
        ],
      },

    ],
  },

];
GENERAL_ENGLISH_LEVELS.forEach(lvl => LEVELS.push(lvl));
window.GENERAL_ENGLISH_LEVELS = GENERAL_ENGLISH_LEVELS;
