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

     // ── To be — indiki zaman ─────────────────────────────────────
{ type: 'section_divider', title: 'To be — indiki zaman' },
      
{
  type: 'grammar_lesson',
  title: 'To be — indiki zaman (Dərs 1)',
  cards: [

    // ── Ekran 1: Giriş ───────────────────────────────
    {
      type: 'lesson',
      title: 'To be nədir?',
      content: '"To be" ingilis dilinin ən əsas felidir. Azərbaycan dilindəki "olmaq" felinə uyğun gəlir.\n\nİndiki zamanda üç forması var:',
      examples: [
        { word: 'am',  az: 'I ilə işlənir',              note: 'I am a student.' },
        { word: 'is',  az: 'he / she / it ilə işlənir',  note: 'She is a doctor.' },
        { word: 'are', az: 'we / you / they ilə işlənir', note: 'They are friends.' },
      ],
      tip: 'To be feli cümlədə həm "var", həm "dır/dir", həm də "am/is/are" mənasını verir.',
    },

    // ── Ekran 2: Müsbət forma ────────────────────────
    {
      type: 'lesson',
      title: 'Müsbət forma',
      content: 'To be-nin tam və qısa formaları var. Danışıqda qısa formalar daha çox işlənir:',
      examples: [
        { word: 'I am → I\'m',       az: 'Mən ... -am/-əm'    },
        { word: 'He is → He\'s',     az: 'O (kişi) ... -dır'  },
        { word: 'She is → She\'s',   az: 'O (qadın) ... -dır' },
        { word: 'It is → It\'s',     az: 'O (əşya) ... -dır'  },
        { word: 'We are → We\'re',   az: 'Biz ... -ıq/-ik'    },
        { word: 'You are → You\'re', az: 'Sən/Siz ... -san'   },
        { word: 'They are → They\'re', az: 'Onlar ... -dırlar' },
      ],
      tip: 'That\'s = that is · There\'s = there is · Here\'s = here is',
    },

    // ── Ekran 3: İstifadə sahələri ───────────────────
    {
      type: 'lesson',
      title: 'To be necə işlənir?',
      content: 'To be aşağıdakı hallarda işlənir:',
      examples: [
        { word: 'I\'m a student.',         az: 'Peşə / vəzifə',     note: 'I am + isim' },
        { word: 'She is American.',        az: 'Milliyyət',          note: 'is + milliyyət' },
        { word: 'He\'s tall.',             az: 'Sifət / xüsusiyyət', note: 'is + sifət' },
        { word: 'I\'m 25 years old.',      az: 'Yaş',               note: 'am + rəqəm' },
        { word: 'They\'re from Baku.',     az: 'Yer / mənşə',       note: 'are + from' },
        { word: 'My favourite colour is blue.', az: 'Sevimli şey',  note: 'is + isim' },
      ],
      tip: '"I\'m interested in art." — to be + interested in → bir şeyə maraq bildirmək üçün.',
    },

    // ── Mini-check 1 ─────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'I ___ a student.',
          options: ['am', 'is', 'are'],
          answer: 'am',
        },
        {
          q: 'She ___ a doctor.',
          options: ['am', 'is', 'are'],
          answer: 'is',
        },
        {
          q: 'They ___ from Baku.',
          options: ['am', 'is', 'are'],
          answer: 'are',
        },
        {
          q: 'My brother ___ very tall.',
          options: ['am', 'is', 'are'],
          answer: 'is',
        },
        {
          q: 'We ___ good friends.',
          options: ['am', 'is', 'are'],
          answer: 'are',
        },
        {
          q: 'It ___ ten o\'clock.',
          options: ['am', 'is', 'are'],
          answer: 'is',
        },
        {
          q: 'Your keys ___ on the table.',
          options: ['am', 'is', 'are'],
          answer: 'are',
        },
      ],
    },

    // ── Ekran 4: Mənfi forma ─────────────────────────
    {
      type: 'lesson',
      title: 'Mənfi forma',
      content: 'Mənfi cümlə qurmaq üçün to be-dən sonra "not" əlavə olunur.\n\nİki qısa forma var:',
      examples: [
        { word: 'I am not → I\'m not',                   az: 'Mən deyiləm'       },
        { word: 'He is not → He\'s not / He isn\'t',     az: 'O deyil (kişi)'    },
        { word: 'She is not → She\'s not / She isn\'t',  az: 'O deyil (qadın)'   },
        { word: 'It is not → It\'s not / It isn\'t',     az: 'O deyil (əşya)'    },
        { word: 'We are not → We\'re not / We aren\'t',  az: 'Biz deyilik'       },
        { word: 'You are not → You\'re not / You aren\'t', az: 'Sən/Siz deyilsən' },
        { word: 'They are not → They\'re not / They aren\'t', az: 'Onlar deyillər' },
      ],
      note: 'I\'m not — yeganə formadır. "I amn\'t" deyilmir.',
    },

    // ── Ekran 5: Mənfi nümunələr ─────────────────────
    {
      type: 'lesson',
      title: 'Mənfi cümlə nümunələri',
      content: 'Gündəlik danışıqda mənfi formanın işlənməsinə bax:',
      examples: [
        { word: 'I\'m tired but I\'m not hungry.',           az: 'Mən yorğunam amma ac deyiləm.'         },
        { word: 'Tom isn\'t interested in politics.',        az: 'Tom siyasətlə maraqlanmır.'            },
        { word: 'Jane isn\'t at home. She\'s at work.',      az: 'Jane evdə deyil. O işdədir.'           },
        { word: 'Those people aren\'t English.',             az: 'O adamlar ingilisli deyil.'            },
        { word: 'It\'s sunny today but it isn\'t warm.',     az: 'Bu gün günəşlidir amma isti deyil.'    },
      ],
      tip: 'He\'s not = He isn\'t — ikisi də düzgündür, mənada fərq yoxdur.',
    },

    // ── Mini-check 2 ─────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'I ___ hungry. (mənfi)',
          options: ['\'m not', 'isn\'t', 'aren\'t'],
          answer: '\'m not',
        },
        {
          q: 'She ___ at home. (mənfi)',
          options: ['\'m not', 'isn\'t', 'aren\'t'],
          answer: 'isn\'t',
        },
        {
          q: 'They ___ English. (mənfi)',
          options: ['\'m not', 'isn\'t', 'aren\'t'],
          answer: 'aren\'t',
        },
        {
          q: 'It ___ warm today. (mənfi)',
          options: ['\'m not', 'isn\'t', 'aren\'t'],
          answer: 'isn\'t',
        },
        {
          q: 'We ___ late. (mənfi)',
          options: ['\'m not', 'isn\'t', 'aren\'t'],
          answer: 'aren\'t',
        },
        {
          q: '"I amn\'t" — bu forma doğrudurmu?',
          options: ['Xeyr, "I\'m not" işlənir', 'Bəli, doğrudur', 'Bəzən işlənir'],
          answer: 'Xeyr, "I\'m not" işlənir',
        },
      ],
    },

  ],
},

// ── To be — indiki zaman (Dərs 2) ───────────────────────────

{
  type: 'grammar_lesson',
  title: 'To be — indiki zaman (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual forması ────────────────────────
    {
      type: 'lesson',
      title: 'Sual forması',
      content: 'Sual qurmaq üçün to be mübtədanın önünə keçir.\n\nDüz sıra: Subject + to be\nSual sırası: To be + Subject',
      examples: [
        { word: 'I am late. → Am I late?',             az: 'Mən gecikdimmi?'           },
        { word: 'She is at home. → Is she at home?',   az: 'O evdədir?'                },
        { word: 'They are new. → Are they new?',       az: 'Onlar yenidirlər?'         },
        { word: 'Your shoes are nice. → Are your shoes nice?', az: 'Ayaqqabıların gözəldir?' },
      ],
      note: '"Is at home your mother?" — yanlış. "Is your mother at home?" — düzgün.',
    },

    // ── Ekran 2: Wh- sualları ────────────────────────
    {
      type: 'lesson',
      title: 'Wh- sualları',
      content: 'What / Where / Who / How / Why sualları to be-dən əvvəl gəlir:',
      examples: [
        { word: 'What colour is your car?',     az: 'Maşınınızın rəngi nədir?',    note: 'It\'s red.' },
        { word: 'Where are you from?',          az: 'Sən haradan gəlirsən?',       note: 'Canada.' },
        { word: 'How old is Joe?',              az: 'Coenin yaşı neçədir?',        note: 'He\'s 24.' },
        { word: 'Why are you angry?',           az: 'Niyə əsəbisiniz?',            note: '—' },
        { word: 'How much are these postcards?', az: 'Bu kartpostallar neçəyədir?', note: 'Fifty pence.' },
        { word: 'Who\'s that man?',             az: 'O kişi kimdir?',              note: '—' },
      ],
      tip: 'What\'s = what is · Who\'s = who is · Where\'s = where is · How\'s = how is',
    },

    // ── Ekran 3: Qısa cavablar ───────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar',
      content: 'İngilis dilində "Bəli" və ya "Xeyr" ilə qısa cavab verilərkən to be təkrarlanır:\n\nYes/No ilə cavab verərkən qısa forma işlənmir — "Yes, I\'m" deyilmir!',
      examples: [
        { word: 'Are you tired? — Yes, I am.',           az: '"Yes, I\'m" deyilmir!'     },
        { word: 'Are you hungry? — No, I\'m not.',       az: 'Mənfidə qısa forma olur.'  },
        { word: 'Is your friend English? — Yes, he is.', az: '"Yes, he\'s" deyilmir!'    },
        { word: 'Are these your keys? — Yes, they are.', az: '"Yes, they\'re" deyilmir!' },
        { word: 'Is that your seat? — No, it isn\'t.',   az: 'Mənfidə qısa forma olur.'  },
      ],
      tip: 'Müsbət qısa cavabda həmişə tam forma: Yes, I am. / Yes, she is. / Yes, they are.',
    },

    // ── Mini-check 3 ─────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '___ you married?',
          options: ['Are', 'Is', 'Am'],
          answer: 'Are',
        },
        {
          q: '___ your mother at home?',
          options: ['Are', 'Is', 'Am'],
          answer: 'Is',
        },
        {
          q: '___ I late?',
          options: ['Are', 'Is', 'Am'],
          answer: 'Am',
        },
        {
          q: 'Where ___ you from?',
          options: ['are', 'is', 'am'],
          answer: 'are',
        },
        {
          q: 'How old ___ Joe?',
          options: ['are', 'is', 'am'],
          answer: 'is',
        },
        {
          q: '"Are you tired?" — Düzgün qısa cavab hansıdır?',
          options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, am.'],
          answer: 'Yes, I am.',
        },
        {
          q: '"Is she a doctor?" — Düzgün qısa cavab hansıdır?',
          options: ['Yes, she is.', 'Yes, she\'s.', 'Yes, is.'],
          answer: 'Yes, she is.',
        },
        {
          q: 'Why ___ you angry?',
          options: ['are', 'is', 'am'],
          answer: 'are',
        },
      ],
    },

  ],
},

// ── To be — indiki zaman: Translate Quiz ────────────────────

[
  { en: 'I ___ a student.',                     tr: 'am',      wrong: 'is'       },
  { en: 'She ___ a doctor.',                    tr: 'is',      wrong: 'are'      },
  { en: 'They ___ from Baku.',                  tr: 'are',     wrong: 'is'       },
  { en: 'We ___ good friends.',                 tr: 'are',     wrong: 'am'       },
  { en: 'I ___ not hungry.',                    tr: '\'m',     wrong: 'isn\'t'   },
  { en: 'He ___ not at home.',                  tr: 'is',      wrong: 'are'      },
  { en: 'They ___ English. (mənfi)',             tr: 'aren\'t', wrong: 'isn\'t'   },
  { en: 'It ___ warm today. (mənfi)',            tr: 'isn\'t',  wrong: 'aren\'t'  },
  { en: '"Are you tired?" → Düzgün cavab?',     tr: 'Yes, I am.',    wrong: 'Yes, I\'m.'   },
  { en: '"Is she a nurse?" → Düzgün cavab?',    tr: 'Yes, she is.',  wrong: 'Yes, she\'s.' },
  { en: '___ your mother at home?',             tr: 'Is',      wrong: 'Are'      },
  { en: '___ I late?',                          tr: 'Am',      wrong: 'Is'       },
  { en: 'Where ___ you from?',                  tr: 'are',     wrong: 'is'       },
  { en: 'How old ___ Joe?',                     tr: 'is',      wrong: 'are'      },
  { en: 'What\'s = ?',                          tr: 'what is', wrong: 'what are' },
  { en: 'Who\'s = ?',                           tr: 'who is',  wrong: 'who are'  },
  { en: 'There\'s = ?',                         tr: 'there is', wrong: 'there are' },
  { en: 'I\'m tired ___ I\'m not hungry.',      tr: 'but',     wrong: 'and'      },
  { en: 'John ___ afraid of dogs.',             tr: 'is',      wrong: 'are'      },
  { en: 'Your keys ___ on the table.',          tr: 'are',     wrong: 'is'       },
],

// ── To be — indiki zaman: Sentence Builder Quiz ─────────────

{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən tələbəyəm.',
      words: ['I', 'am', 'a', 'student', 'is', 'are'],
      answer: ['I', 'am', 'a', 'student'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O həkimdir.',
      words: ['She', 'is', 'a', 'doctor', 'am', 'are'],
      answer: ['She', 'is', 'a', 'doctor'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar Bakıdandır.',
      words: ['They', 'are', 'from', 'Baku', 'is', 'am'],
      answer: ['They', 'are', 'from', 'Baku'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən ac deyiləm.',
      words: ['I', '\'m', 'not', 'hungry', 'isn\'t', 'aren\'t'],
      answer: ['I', '\'m', 'not', 'hungry'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O evdə deyil.',
      words: ['She', 'isn\'t', 'at', 'home', 'aren\'t', '\'m not'],
      answer: ['She', 'isn\'t', 'at', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən gecikdinmi?',
      words: ['Are', 'you', 'late', 'Is', 'Am'],
      answer: ['Are', 'you', 'late'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Maşınınızın rəngi nədir?',
      words: ['What', 'colour', 'is', 'your', 'car', 'are', 'am'],
      answer: ['What', 'colour', 'is', 'your', 'car'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən haradan gəlirsən?',
      words: ['Where', 'are', 'you', 'from', 'is', 'am'],
      answer: ['Where', 'are', 'you', 'from'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gün günəşlidir amma isti deyil.',
      words: ['It\'s', 'sunny', 'today', 'but', 'it', 'isn\'t', 'warm', 'aren\'t', 'not'],
      answer: ['It\'s', 'sunny', 'today', 'but', 'it', 'isn\'t', 'warm'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Açarların masanın üstündədir.',
      words: ['Your', 'keys', 'are', 'on', 'the', 'table', 'is', 'am'],
      answer: ['Your', 'keys', 'are', 'on', 'the', 'table'],
    },
  ],
},


      { type: 'section_divider', title: 'To be — keçmiş zaman' },

      // ── UNIT 10 — To be: Keçmiş Zaman (was / were) ──────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Was / Were — Keçmiş Zaman (Dərs 1)',
  cards: [

    // ── Ekran 1: Giriş ───────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Was / Were nədir?',
      content: '"To be" felinin keçmiş zamanıdır.\n\nİndiki zamandakı am / is → was olur\nİndiki zamandakı are → were olur',
      examples: [
        { word: 'I am tired now.',          az: 'I was tired last night.',         note: 'am → was' },
        { word: 'She is at home now.',      az: 'She was at home yesterday.',      note: 'is → was'  },
        { word: 'They are busy now.',       az: 'They were busy last week.',       note: 'are → were' },
        { word: 'The weather is cold now.', az: 'The weather was warm last month.', note: 'is → was' },
      ],
      tip: 'was = I / he / she / it ilə\nwere = we / you / they ilə işlənir.',
    },

    // ── Ekran 2: Müsbət forma ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Müsbət forma',
      content: 'Keçmiş zamanda to be-nin iki forması var:\n\nwas → tək şəxslər üçün\nwere → cəm və you üçün',
      examples: [
        { word: 'I was',      az: 'Mən ... idim'        },
        { word: 'He was',     az: 'O (kişi) ... idi'    },
        { word: 'She was',    az: 'O (qadın) ... idi'   },
        { word: 'It was',     az: 'O (əşya) ... idi'    },
        { word: 'We were',    az: 'Biz ... idik'        },
        { word: 'You were',   az: 'Sən/Siz ... idin'    },
        { word: 'They were',  az: 'Onlar ... idilər'    },
      ],
      tip: 'Keçmiş zamanda qısa forma yoxdur: "I\'s" və ya "they\'re" yazılmır.',
    },

    // ── Ekran 3: Mənfi forma ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Mənfi forma',
      content: 'Mənfi cümlə üçün was / were-dən sonra "not" əlavə olunur.\n\nDanışıqda qısa formalar işlənir:',
      examples: [
        { word: 'I was not → I wasn\'t',         az: 'Mən deyildim'        },
        { word: 'He was not → He wasn\'t',        az: 'O deyildi (kişi)'   },
        { word: 'She was not → She wasn\'t',      az: 'O deyildi (qadın)'  },
        { word: 'It was not → It wasn\'t',        az: 'O deyildi (əşya)'   },
        { word: 'We were not → We weren\'t',      az: 'Biz deyildik'       },
        { word: 'You were not → You weren\'t',    az: 'Sən deyildin'       },
        { word: 'They were not → They weren\'t',  az: 'Onlar deyildilər'   },
      ],
      tip: 'wasn\'t = was not · weren\'t = were not',
    },

    // ── Ekran 4: Nümunə cümlələr ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Nümunə cümlələr',
      content: 'was / were-in real kontekstdə işlənməsinə bax:',
      examples: [
        { word: 'She was 20 last year, so she is 21 now.',      az: 'O keçən il 20 yaşında idi, indi 21-dir.' },
        { word: 'The exam was long but it wasn\'t difficult.',   az: 'İmtahan uzun idi amma çətin deyildi.'    },
        { word: 'We were hungry after the trip.',               az: 'Səfərdən sonra ac idik.'                 },
        { word: 'The hotel wasn\'t expensive.',                 az: 'Otel baha deyildi.'                      },
        { word: 'They weren\'t at the meeting yesterday.',      az: 'Onlar dünən görüşdə deyildilər.'         },
      ],
      tip: 'last night / yesterday / last week / last year — keçmiş zamana işarə edən sözlərdir.',
    },

    // ── Mini-check 1 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'I ___ at school yesterday.',
          options: ['was', 'were', 'am'],
          answer: 'was',
        },
        {
          q: 'They ___ very tired after the game.',
          options: ['was', 'were', 'are'],
          answer: 'were',
        },
        {
          q: 'She ___ a student five years ago.',
          options: ['was', 'were', 'is'],
          answer: 'was',
        },
        {
          q: 'We ___ at home last Sunday.',
          options: ['was', 'were', 'are'],
          answer: 'were',
        },
        {
          q: 'The film ___ really interesting.',
          options: ['was', 'were', 'is'],
          answer: 'was',
        },
        {
          q: 'He ___ happy with the result.',
          options: ['wasn\'t', 'weren\'t', 'isn\'t'],
          answer: 'wasn\'t',
        },
        {
          q: 'The shops ___ open on Monday.',
          options: ['wasn\'t', 'weren\'t', 'aren\'t'],
          answer: 'weren\'t',
        },
        {
          q: 'It ___ cold last winter.',
          options: ['was', 'were', 'are'],
          answer: 'was',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Was / Were — Keçmiş Zaman (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual forması ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual forması',
      content: 'Sual qurmaq üçün was / were mübtədanın önünə keçir.\n\nDüz sıra: Subject + was/were\nSual sırası: Was/Were + Subject',
      examples: [
        { word: 'You were late. → Were you late?',          az: 'Sən gecikdin?'              },
        { word: 'She was at work. → Was she at work?',      az: 'O işdə idi?'                },
        { word: 'They were tired. → Were they tired?',      az: 'Onlar yorğun idilər?'       },
        { word: 'It was expensive. → Was it expensive?',    az: 'O baha idi?'                },
      ],
      note: '"Was at home your brother?" — yanlış. "Was your brother at home?" — düzgün.',
    },

    // ── Ekran 2: Wh- sualları ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Wh- sualları',
      content: 'What / Where / Who / How / Why sualları was / were-dən əvvəl gəlir:',
      examples: [
        { word: 'Where were you last night?',      az: 'Dünən gecə harada idin?',       note: 'I was at home.' },
        { word: 'Why was she angry?',              az: 'O niyə əsəbi idi?',             note: '—'             },
        { word: 'How much was the ticket?',        az: 'Bilet neçəyə idi?',             note: 'It was £15.'   },
        { word: 'Who was that man?',               az: 'O kişi kim idi?',               note: '—'             },
        { word: 'What was the weather like?',      az: 'Hava necə idi?',               note: 'It was sunny.' },
        { word: 'How old were you in 2010?',       az: '2010-cu ildə neçə yaşın var idi?', note: 'I was 15.' },
      ],
      tip: 'was / were sual cümləsinin əsasını təşkil edir — do/does işlənmir!',
    },

    // ── Ekran 3: Qısa cavablar ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar',
      content: 'Bəli/Xeyr cavablarında was / were mütləq təkrarlanır.\n\nMüsbət qısa cavabda qısa forma işlənmir!',
      examples: [
        { word: 'Were you late? — Yes, I was.',             az: '"Yes, I were" deyilmir!'     },
        { word: 'Were you late? — No, I wasn\'t.',          az: 'Mənfidə qısa forma olur.'   },
        { word: 'Was he at school? — Yes, he was.',         az: '"Yes, he were" deyilmir!'   },
        { word: 'Were they tired? — No, they weren\'t.',    az: 'Mənfidə qısa forma olur.'   },
        { word: 'Was it cheap? — Yes, it was.',             az: '"Yes, it were" deyilmir!'   },
      ],
      tip: 'Müsbət qısa cavabda həmişə tam forma: Yes, I was. / Yes, she was. / Yes, they were.',
    },

    // ── Mini-check 2 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '___ you at home last night?',
          options: ['Were', 'Was', 'Are'],
          answer: 'Were',
        },
        {
          q: '___ the film good?',
          options: ['Were', 'Was', 'Is'],
          answer: 'Was',
        },
        {
          q: 'Where ___ they last weekend?',
          options: ['was', 'were', 'are'],
          answer: 'were',
        },
        {
          q: 'Why ___ she upset?',
          options: ['was', 'were', 'is'],
          answer: 'was',
        },
        {
          q: 'How much ___ the shoes?',
          options: ['was', 'were', 'are'],
          answer: 'were',
        },
        {
          q: '"Were you tired?" — Düzgün qısa cavab hansıdır?',
          options: ['Yes, I was.', 'Yes, I were.', 'Yes, was.'],
          answer: 'Yes, I was.',
        },
        {
          q: '"Was she at the party?" — Düzgün mənfi qısa cavab hansıdır?',
          options: ['No, she wasn\'t.', 'No, she weren\'t.', 'No, she not.'],
          answer: 'No, she wasn\'t.',
        },
        {
          q: 'How old ___ your father in 1995?',
          options: ['was', 'were', 'is'],
          answer: 'was',
        },
      ],
    },

  ],
},

// ── Translate Quiz ───────────────────────────────────────────────────────────
[
  { en: 'I ___ at work yesterday.',                        tr: 'was',       wrong: 'were'     },
  { en: 'We ___ very busy last week.',                     tr: 'were',      wrong: 'was'      },
  { en: 'She ___ happy with the news.',                    tr: 'was',       wrong: 'were'     },
  { en: 'They ___ at the stadium last night.',             tr: 'were',      wrong: 'was'      },
  { en: 'The coffee ___ too hot.',                         tr: 'was',       wrong: 'were'     },
  { en: 'You ___ right about that.',                       tr: 'were',      wrong: 'was'      },
  { en: 'He ___ late for the meeting.',                    tr: 'was',       wrong: 'were'     },
  { en: 'The tickets ___ very cheap.',                     tr: 'were',      wrong: 'was'      },
  { en: 'It ___ cold last winter.',                        tr: 'was',       wrong: 'were'     },
  { en: 'My parents ___ born in Baku.',                    tr: 'were',      wrong: 'was'      },
  { en: 'The hotel ___ not expensive. (qısa forma)',       tr: 'wasn\'t',   wrong: 'weren\'t' },
  { en: 'They ___ not ready on time. (qısa forma)',        tr: 'weren\'t',  wrong: 'wasn\'t'  },
  { en: '___ you tired after work?',                       tr: 'Were',      wrong: 'Was'      },
  { en: '___ the exam difficult?',                         tr: 'Was',       wrong: 'Were'     },
  { en: 'Where ___ you last Sunday?',                      tr: 'were',      wrong: 'was'      },
  { en: 'Why ___ she angry yesterday?',                    tr: 'was',       wrong: 'were'     },
  { en: '"Were you late?" → Düzgün müsbət qısa cavab?',   tr: 'Yes, I was.',     wrong: 'Yes, I were.'    },
  { en: '"Was he at school?" → Düzgün mənfi qısa cavab?', tr: 'No, he wasn\'t.', wrong: 'No, he weren\'t.' },
  { en: 'am / is → keçmiş zamanda',                       tr: 'was',       wrong: 'were'     },
  { en: 'are → keçmiş zamanda',                           tr: 'were',      wrong: 'was'      },
],

// ── Sentence Builder Quiz ────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən dünən evdə idim.',
      words: ['I', 'was', 'at', 'home', 'yesterday', 'were', 'am'],
      answer: ['I', 'was', 'at', 'home', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar keçən həftə çox məşğul idilər.',
      words: ['They', 'were', 'very', 'busy', 'last', 'week', 'was', 'are'],
      answer: ['They', 'were', 'very', 'busy', 'last', 'week'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O baha deyildi.',
      words: ['It', 'wasn\'t', 'expensive', 'weren\'t', 'isn\'t'],
      answer: ['It', 'wasn\'t', 'expensive'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar görüşdə deyildilər.',
      words: ['They', 'weren\'t', 'at', 'the', 'meeting', 'wasn\'t', 'aren\'t'],
      answer: ['They', 'weren\'t', 'at', 'the', 'meeting'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən dünən gecikdinmi?',
      words: ['Were', 'you', 'late', 'yesterday', 'Was', 'Are'],
      answer: ['Were', 'you', 'late', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İmtahan çətin idi?',
      words: ['Was', 'the', 'exam', 'difficult', 'Were', 'Is'],
      answer: ['Was', 'the', 'exam', 'difficult'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dünən gecə harada idin?',
      words: ['Where', 'were', 'you', 'last', 'night', 'was', 'are'],
      answer: ['Where', 'were', 'you', 'last', 'night'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Otel rahat idi amma baha deyildi.',
      words: ['The', 'hotel', 'was', 'comfortable', 'but', 'it', 'wasn\'t', 'expensive', 'weren\'t', 'were'],
      answer: ['The', 'hotel', 'was', 'comfortable', 'but', 'it', 'wasn\'t', 'expensive'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaq ikən çox aktiv idim.',
      words: ['When', 'I', 'was', 'a', 'child', 'I', 'were', 'very', 'active', 'am'],
      answer: ['When', 'I', 'was', 'a', 'child', 'I', 'was', 'very', 'active'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O niyə əsəbi idi?',
      words: ['Why', 'was', 'she', 'angry', 'were', 'is'],
      answer: ['Why', 'was', 'she', 'angry'],
    },
  ],
},
     
{ type: 'section_divider', title: 'Söz sırası' },

// ── UNIT — Söz Sırası (Word Order) ───────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Söz Sırası — Word Order (Dərs 1)',
  cards: [

    // ── Ekran 1: Giriş — SVO ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İngilis dilində söz sırası',
      content: 'İngilis dilində cümlənin əsas quruluşu sabitdir:\n\nSubject → Verb → Object\n\nBu sıra pozulduqda cümlə yanlış olur. Azərbaycan dilindən fərqli olaraq ingilis dilində söz sırasını dəyişmək olmaz.',
      table: [
        ['Subject', 'Verb',    'Object'],
        ['I',       'like',    'big cities.'],
        ['She',     'watches', 'television.'],
        ['Tim',     'works',   'very hard.'],
      ],
      tip: 'Fel həmişə subject-dən dərhal sonra gəlir. Object isə felin arxasında olur.',
    },

    // ── Ekran 2: Düzgün və yanlış nümunələr ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Düzgün və yanlış sıra',
      content: 'Object felin önünə keçə bilməz. Aşağıdakı nümunələrə diqqət et:',
      examples: [
        { word: 'She speaks English very well.',    az: '✅ Düzgün',  note: 'Verb + Object + Adverb' },
        { word: 'She speaks very well English.',    az: '❌ Yanlış',  note: 'Object felin arxasına gəlir' },
        { word: 'Tim works in a bank.',             az: '✅ Düzgün',  note: 'Subject + Verb + Place' },
        { word: 'Tim in a bank works.',             az: '❌ Yanlış',  note: 'Verb həmişə subject-dən sonra' },
        { word: 'I like big cities.',               az: '✅ Düzgün',  note: 'SVO qaydası' },
        { word: 'I big cities like.',               az: '❌ Yanlış',  note: 'Object ortaya gəlməz' },
      ],
      tip: 'Yadda saxla: Verb + Object sırası pozulmamalıdır.',
    },

    // ── Ekran 3: Yer və Zaman sırası ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Yer və Zaman sırası',
      content: 'Cümlədə həm yer, həm zaman varsa — yer (Place) zamandan (Time) əvvəl gəlir:\n\nSubject + Verb + Place + Time',
      table: [
        ['Subject', 'Verb',    'Place',         'Time'],
        ['She',     'works',   'in a shop',     'every day.'],
        ['We',      'arrived', 'at the hotel',  'at 5 o\'clock.'],
        ['I',       'was',     'in Paris',      'last year.'],
      ],
      tip: 'Zaman ifadəsi (yesterday, last week, every day) adətən cümlənin sonuna gəlir.',
    },

    // ── Ekran 4: Zaman ifadəsinin yeri ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Zaman ifadəsi harda dayanır?',
      content: 'Zaman ifadəsi adətən cümlənin sonundadır. Vurğu üçün əvvələ də gələ bilər — amma ortaya gəlməz:',
      examples: [
        { word: 'I cleaned my teeth this morning.',    az: '✅ Düzgün — sonda'   },
        { word: 'This morning I cleaned my teeth.',    az: '✅ Düzgün — əvvəldə (vurğu üçün)' },
        { word: 'I this morning cleaned my teeth.',    az: '❌ Yanlış — ortada olmaz' },
        { word: 'She goes to work every morning.',     az: '✅ Düzgün'           },
        { word: 'She goes every morning to work.',     az: '❌ Yanlış — yer ilə zaman arasına girməz' },
        { word: 'I was in Paris last year.',           az: '✅ Düzgün — Place + Time' },
        { word: 'I was last year in Paris.',           az: '❌ Yanlış — zaman yerin önünə keçməz' },
      ],
    },

    // ── Mini-check 1 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün söz sırası hansıdır?',
          options: [
            'She very well speaks English.',
            'She speaks English very well.',
            'She speaks very well English.',
          ],
          answer: 'She speaks English very well.',
        },
        {
          q: 'Düzgün söz sırası hansıdır?',
          options: [
            'I big cities like.',
            'I like big cities.',
            'Like I big cities.',
          ],
          answer: 'I like big cities.',
        },
        {
          q: 'Yer və zaman sırası düzgün olan hansıdır?',
          options: [
            'I was last year in Paris.',
            'I was in Paris last year.',
            'Last year in Paris I was.',
          ],
          answer: 'I was in Paris last year.',
        },
        {
          q: '"She goes ___ every morning." — boşluğa nə gəlir?',
          options: ['every morning to work', 'to work every morning', 'to every morning work'],
          answer: 'to work every morning',
        },
        {
          q: 'Zaman ifadəsi cümlədə harda daya bilməz?',
          options: ['Cümlənin sonunda', 'Cümlənin əvvəlində (vurğu)', 'Cümlənin ortasında'],
          answer: 'Cümlənin ortasında',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'We arrived at 5 o\'clock at the hotel.',
            'We arrived at the hotel at 5 o\'clock.',
            'We at the hotel arrived at 5 o\'clock.',
          ],
          answer: 'We arrived at the hotel at 5 o\'clock.',
        },
        {
          q: 'SVO nədir?',
          options: [
            'Sound – Verb – Object',
            'Subject – Verb – Object',
            'Subject – Voice – Order',
          ],
          answer: 'Subject – Verb – Object',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Söz Sırası — Word Order (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual cümləsində söz sırası ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual cümləsində söz sırası',
      content: 'Sual cümlələrində köməkçi fel (is/are/do/does/did) subject-dən əvvəl gəlir:\n\nKöməkçi fel + Subject + Verb',
      table: [
        ['Köməkçi', 'Subject',       'Verb'],
        ['Is',      'Paul',          'working today?'],
        ['Where',   'are',           'they going?'],
        ['Do',      'you',           'live here?'],
        ['Does',    'she',           'speak French?'],
      ],
      tip: 'Wh- sözü (where/what/why/how) ən əvvələ gəlir, sonra köməkçi fel, sonra subject.',
    },

    // ── Ekran 2: Sualda yanlış sıra ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sualda yanlış sıra — diqqət et!',
      content: 'Subject köməkçi felin arxasına keçir — subject ilə köməkçi arasına heç nə girməz:',
      examples: [
        { word: 'Is Paul working today?',           az: '✅ Düzgün'  },
        { word: 'Is working Paul today?',           az: '❌ Yanlış — subject köməkçi feldən sonra gəlir'   },
        { word: 'Where are those people going?',    az: '✅ Düzgün'  },
        { word: 'Where are going those people?',    az: '❌ Yanlış — verb ilə subject arasına girməz'      },
        { word: 'Do you live here?',                az: '✅ Düzgün'  },
        { word: 'You do live here?',                az: '❌ Yanlış — köməkçi əvvələ gəlir'                },
      ],
      tip: 'Qayda: Wh- → Köməkçi → Subject → Verb → Object/Place/Time',
    },

    // ── Ekran 3: Give / Send / Show ilə söz sırası ───────────────────────────
    {
      type: 'lesson',
      title: 'Give / Send / Show — iki variant',
      content: 'Bu fellər iki cür işlənə bilər:\n\nVariant 1: Fel + şəxs + əşya\nVariant 2: Fel + əşya + to + şəxs',
      table: [
        ['Variant 1',            'Variant 2'],
        ['Give me that book.',   'Give that book to me.'],
        ['Send him a letter.',   'Send a letter to him.'],
        ['Show us the photos.',  'Show the photos to us.'],
        ['Buy her a gift.',      'Buy a gift for her.'],
      ],
      note: 'Əgər object əvəzlik (it / them) dirsə — mütləq Variant 2 işlənir!\n✅ Give it to me.\n❌ Give me it. — YANLIŞ',
    },

    // ── Ekran 4: Əvəzlik qaydası ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Əvəzlik (it / them) olduqda',
      content: 'Object it / them / him / her kimi əvəzlik olduqda mütləq "to" ilə Variant 2 işlənir:',
      examples: [
        { word: 'Give it to me.',     az: '✅ Düzgün',  note: '"Give me it" olmaz' },
        { word: 'Send it to him.',    az: '✅ Düzgün',  note: '"Send him it" olmaz' },
        { word: 'Show them to us.',   az: '✅ Düzgün',  note: '"Show us them" olmaz' },
        { word: 'Give her it.',       az: '❌ Yanlış',  note: 'Give it to her.' },
        { word: 'Send me them.',      az: '❌ Yanlış',  note: 'Send them to me.' },
      ],
      tip: 'İsim olduqda hər iki variant mümkündür. Əvəzlik olduqda yalnız "to" ilə variant işlənir.',
    },

    // ── Mini-check 2 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Sual cümləsini düzgün seç:',
          options: [
            'Is working Paul today?',
            'Is Paul working today?',
            'Paul is working today?',
          ],
          answer: 'Is Paul working today?',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Where are going your friends?',
            'Where your friends are going?',
            'Where are your friends going?',
          ],
          answer: 'Where are your friends going?',
        },
        {
          q: '"Give me it." — bu cümləni düzəlt:',
          options: [
            'Give it me.',
            'Give it to me.',
            'Give to me it.',
          ],
          answer: 'Give it to me.',
        },
        {
          q: '"Send him a letter." — Variant 2:',
          options: [
            'Send to him a letter.',
            'Send a letter to him.',
            'Send him to a letter.',
          ],
          answer: 'Send a letter to him.',
        },
        {
          q: 'Əvəzlik (it/them) object olduqda hansı variant işlənir?',
          options: [
            'Variant 1: Give me it.',
            'Variant 2: Give it to me.',
            'Hər ikisi eyni dərəcədə düzgündür.',
          ],
          answer: 'Variant 2: Give it to me.',
        },
        {
          q: 'Düzgün sual sırasını seç:',
          options: [
            'Do you live here?',
            'You do live here?',
            'Live do you here?',
          ],
          answer: 'Do you live here?',
        },
        {
          q: '"Show us the photos." — Variant 2:',
          options: [
            'Show the photos us.',
            'Show the photos to us.',
            'Show to us the photos.',
          ],
          answer: 'Show the photos to us.',
        },
        {
          q: 'Wh- sualında düzgün sıra hansıdır?',
          options: [
            'Wh- → Subject → Köməkçi → Verb',
            'Wh- → Köməkçi → Subject → Verb',
            'Köməkçi → Wh- → Subject → Verb',
          ],
          answer: 'Wh- → Köməkçi → Subject → Verb',
        },
      ],
    },

  ],
},

// ── Translate Quiz ───────────────────────────────────────────────────────────
[
  { en: 'Düzgün: She speaks ___ very well.',                         tr: 'English',            wrong: 'very well English'  },
  { en: 'Düzgün: Tim works ___.',                                    tr: 'in a bank',          wrong: 'a bank in'          },
  { en: 'Yer + Zaman sırası: We arrived ___ at 5 o\'clock.',        tr: 'at the hotel',       wrong: 'at 5 o\'clock'      },
  { en: 'Düzgün: I was ___ last year.',                              tr: 'in Paris',           wrong: 'last year in Paris' },
  { en: 'Zaman ifadəsi harda dayana bilər?',                         tr: 'Sonda və ya əvvəldə', wrong: 'Cümlənin ortasında' },
  { en: 'Düzgün sual: ___ Paul working today?',                      tr: 'Is',                 wrong: 'Is working'         },
  { en: 'Düzgün sual: Where are ___ going?',                        tr: 'those people',       wrong: 'going those people' },
  { en: '"Give me that book." → Variant 2:',                        tr: 'Give that book to me.', wrong: 'Give to me that book.' },
  { en: '"Send him a letter." → Variant 2:',                        tr: 'Send a letter to him.', wrong: 'Send to him a letter.' },
  { en: 'Object əvəzlik (it) olduqda düzgün variant:',              tr: 'Give it to me.',     wrong: 'Give me it.'        },
  { en: '"Show us the photos." → Variant 2:',                       tr: 'Show the photos to us.', wrong: 'Show us to the photos.' },
  { en: 'Düzgün: I like ___ very much.',                            tr: 'your jacket',        wrong: 'very much your jacket' },
  { en: 'Düzgün sual sırası: Wh- → ___ → Subject → Verb',          tr: 'Köməkçi fel',        wrong: 'Subject'            },
  { en: 'Düzgün: She goes to the gym ___.',                         tr: 'every morning',      wrong: 'every morning to the gym' },
  { en: '"Give her it." — düzəldilmiş forma:',                      tr: 'Give it to her.',    wrong: 'Give her to it.'    },
  { en: 'Düzgün: They were ___ yesterday.',                         tr: 'at home',            wrong: 'yesterday at home'  },
  { en: 'Düzgün sual: Does she ___?',                               tr: 'speak French',       wrong: 'speaks French'      },
  { en: 'SVO — hərflər nəyi bildirir?',                             tr: 'Subject–Verb–Object', wrong: 'Sound–Voice–Order'  },
  { en: '"Send them to me." — bu cümləni Variant 1 ilə yaz:',       tr: 'Olmaz — əvəzlikdə yalnız Variant 2', wrong: 'Send me them.' },
  { en: 'Düzgün: He arrived ___ at noon.',                          tr: 'at work',            wrong: 'at noon at work'    },
],

// ── Sentence Builder Quiz ────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O ingilis dilini çox yaxşı danışır.',
      words: ['She', 'speaks', 'English', 'very', 'well', 'very well', 'English speaks'],
      answer: ['She', 'speaks', 'English', 'very', 'well'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən hər gün işə avtobusla gedirəm.',
      words: ['I', 'go', 'to', 'work', 'by', 'bus', 'every', 'day', 'every day', 'by bus'],
      answer: ['I', 'go', 'to', 'work', 'by', 'bus', 'every', 'day'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən keçən il Parisdə idim.',
      words: ['I', 'was', 'in', 'Paris', 'last', 'year', 'last year', 'in Paris'],
      answer: ['I', 'was', 'in', 'Paris', 'last', 'year'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hər gün dükan da işləyir.',
      words: ['She', 'works', 'in', 'a', 'shop', 'every', 'day', 'every day', 'in a shop'],
      answer: ['She', 'works', 'in', 'a', 'shop', 'every', 'day'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Paul bu gün işləyirmi?',
      words: ['Is', 'Paul', 'working', 'today', 'Is working', 'Paul working'],
      answer: ['Is', 'Paul', 'working', 'today'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dostların hara gedir?',
      words: ['Where', 'are', 'your', 'friends', 'going', 'are going', 'going your'],
      answer: ['Where', 'are', 'your', 'friends', 'going'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O kitabı mənə ver. (Variant 2)',
      words: ['Give', 'that', 'book', 'to', 'me', 'me that', 'to that'],
      answer: ['Give', 'that', 'book', 'to', 'me'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onu mənə ver.',
      words: ['Give', 'it', 'to', 'me', 'me it', 'to it'],
      answer: ['Give', 'it', 'to', 'me'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Şəkilləri bizə göstər.',
      words: ['Show', 'the', 'photos', 'to', 'us', 'us the', 'to the'],
      answer: ['Show', 'the', 'photos', 'to', 'us'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Ona məktub göndər. (Variant 2)',
      words: ['Send', 'a', 'letter', 'to', 'him', 'him a', 'to a'],
      answer: ['Send', 'a', 'letter', 'to', 'him'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Present Simple — müsbət cümlə' },

// ── UNIT 5 — Present Simple (Müsbət Cümlə) ───────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple — Müsbət Cümlə (Dərs 1)',
  cards: [

    // ── Ekran 1: Giriş — Quruluş ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Simple — Quruluş',
      content: 'Present Simple — hər zaman doğru olan, tez-tez və ya həmişə baş verən hadisələr üçün işlədilir.\n\nQuruluş:\nSubject + Verb (sadə forma)\n\nI / we / you / they ilə fel dəyişmir.\nHe / she / it ilə felə -s və ya -es əlavə olunur.',
      table: [
        ['Subject',              'Verb'],
        ['I / we / you / they',  'work / like / eat / have'],
        ['he / she / it',        'works / likes / eats / has'],
      ],
      tip: 'He/she/it ilə feli unutma — həmişə -s/-es alır!',
    },

    // ── Ekran 2: 3-cü şəxs -s qaydası ───────────────────────────────────────
    {
      type: 'lesson',
      title: '3-cü şəxs -s qaydası',
      content: 'He / She / It ilə işlənən fellərin sonuna -s və ya -es əlavə edilir:',
      table: [
        ['Əsas fel', 'He / She / It'],
        ['work',    'works'],
        ['like',    'likes'],
        ['live',    'lives'],
        ['rain',    'rains'],
        ['watch',   'watches'],
        ['finish',  'finishes'],
        ['pass',    'passes'],
        ['study',   'studies'],
        ['try',     'tries'],
        ['do',      'does'],
        ['go',      'goes'],
        ['have',    'has'],
      ],
      tip: 'Yadda saxla: I work / She works ✅ — She work ❌',
    },

    // ── Ekran 3: Yazılış qaydaları (Spelling) ────────────────────────────────
    {
      type: 'lesson',
      title: 'Yazılış qaydaları (-s/-es/-ies)',
      content: 'Felə -s əlavə edərkən yazılışa diqqət et:',
      table: [
        ['Qayda',                              'Nümunə'],
        ['-s / -sh / -ch / -x sonunda → -es',  'pass→passes, finish→finishes, watch→watches'],
        ['samit + -y sonunda → -ies',           'study→studies, try→tries'],
        ['İstisnalar',                          'do→does, go→goes, have→has'],
      ],
      tip: 'Sait + -y olduqda sadəcə -s əlavə olunur: play→plays, say→says',
    },

    // ── Ekran 4: Nümunə cümlələri ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Nümunə cümlələri',
      content: 'I/we/you/they ilə fel dəyişmir, he/she/it ilə -s/-es alır:',
      examples: [
        { word: 'I work in a shop.',                    az: '✅ I — fel dəyişmir'    },
        { word: 'My brother works in a bank.',          az: '✅ he — works'          },
        { word: 'Linda lives in London.',               az: '✅ she — lives'         },
        { word: 'Her parents live in Scotland.',        az: '✅ they — live'         },
        { word: 'She watches TV every evening.',        az: '✅ she — watches'       },
        { word: 'He does his homework after school.',   az: '✅ he — does'           },
        { word: 'John has a shower every day.',         az: '✅ he — has (istisnа)'  },
        { word: 'It rains a lot in winter.',            az: '✅ it — rains'          },
      ],
      tip: 'Linda lives — Her parents live. Eyni fel, fərqli subject → fərqli forma!',
    },

    // ── Mini-check 1 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün formanı seç: "She ___ in London."',
          options: ['live', 'lives', 'livees'],
          answer: 'lives',
        },
        {
          q: '"watch" felinin he/she/it forması nədir?',
          options: ['watchs', 'watchies', 'watches'],
          answer: 'watches',
        },
        {
          q: '"study" felinin he/she/it forması nədir?',
          options: ['studys', 'studies', 'studyes'],
          answer: 'studies',
        },
        {
          q: '"have" felinin he/she/it forması nədir?',
          options: ['haves', 'havs', 'has'],
          answer: 'has',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'He work in a bank.',
            'He works in a bank.',
            'He working in a bank.',
          ],
          answer: 'He works in a bank.',
        },
        {
          q: '"go" felinin he/she/it forması nədir?',
          options: ['gos', 'goes', 'goies'],
          answer: 'goes',
        },
        {
          q: '"finish" → he/she/it forması:',
          options: ['finishs', 'finishes', 'finishies'],
          answer: 'finishes',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'They works very hard.',
            'She work every day.',
            'He tries his best.',
          ],
          answer: 'He tries his best.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple — Müsbət Cümlə (Dərs 2)',
  cards: [

    // ── Ekran 1: Nə zaman işlədilir ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Simple — nə zaman işlədilir?',
      content: 'Present Simple iki əsas halda işlədilir:\n\n1. Ümumi həqiqətlər — həmişə doğru olan faktlar\n2. Təkrarlanan hərəkətlər — hər gün, həmişə, tez-tez baş verən işlər',
      examples: [
        { word: 'The Earth goes round the Sun.',              az: '🌍 Ümumi həqiqət'           },
        { word: 'Water boils at 100 degrees Celsius.',        az: '🌡️ Ümumi həqiqət'           },
        { word: 'I get up at 7 o\'clock every morning.',      az: '🔁 Təkrarlanan hərəkət'     },
        { word: 'The shops open at 9 and close at 5.30.',     az: '🔁 Təkrarlanan hərəkət'     },
        { word: 'Tim starts at 7.30 and finishes at 8.',      az: '🔁 Təkrarlanan hərəkət'     },
        { word: 'It costs a lot to stay at luxury hotels.',   az: '🌍 Ümumi həqiqət'           },
      ],
      tip: 'Present Simple "indi nə edirsən" deyil — "ümumiyyətlə nə edirsən" deməkdir.',
    },

    // ── Ekran 2: Tezlik zərfləri ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tezlik zərfləri (Frequency adverbs)',
      content: 'Present Simple tez-tez tezlik zərfləri ilə işlədilir. Bu zərflər fellə birlikdə söz sırasına görə yerləşir:\n\nSubject + zərf + Verb',
      table: [
        ['Zərf',      'Mənası',         'Nümunə'],
        ['always',    'həmişə',         'She always arrives early.'],
        ['usually',   'adətən',         'I usually have tea in the morning.'],
        ['often',     'tez-tez',        'He often goes to the gym.'],
        ['sometimes', 'bəzən',          'We sometimes eat out.'],
        ['rarely',    'nadir hallarda', 'She rarely watches TV.'],
        ['never',     'heç vaxt',       'Tim never watches television.'],
      ],
      tip: 'Zərf həmişə felin ÖNündə dayanır: I always work hard ✅ — I work always hard ❌',
    },

    // ── Ekran 3: Tezlik zərfi ilə söz sırası ─────────────────────────────────
    {
      type: 'lesson',
      title: 'Tezlik zərfi — söz sırası',
      content: 'Tezlik zərfinin cümlədə yeri sabitdir — felin ÖNündə gəlir:',
      examples: [
        { word: 'Sue always arrives early.',          az: '✅ always + arrives'                    },
        { word: 'I often play basketball.',           az: '✅ often + play'                        },
        { word: 'Margaret usually works hard.',       az: '✅ usually + works'                     },
        { word: 'Jenny always wears nice clothes.',   az: '✅ always + wears'                      },
        { word: 'Tim never watches television.',      az: '✅ never + watches'                     },
        { word: 'Julia always enjoys parties.',       az: '✅ always + enjoys'                     },
        { word: 'I work always hard.',                az: '❌ Yanlış — zərf felin arxasına keçməz' },
        { word: 'She arrives always early.',          az: '❌ Yanlış — always felin önündə olmalı' },
      ],
      tip: '"always/usually/often/never" — həmişə felin önündə, subjectin arxasında.',
    },

    // ── Ekran 4: Xülasə ──────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Xülasə — Present Simple Müsbət',
      content: 'Bütün qaydaları bir yerdə:',
      table: [
        ['Qayda',                     'Nümunə'],
        ['I/we/you/they + fel',        'I work / They live'],
        ['he/she/it + fel-s',          'She works / He lives'],
        ['-ch/-sh/-s/-x → -es',        'watches / finishes / passes'],
        ['samit + y → -ies',           'studies / tries'],
        ['İstisnalar',                 'does / goes / has'],
        ['Zərf + Verb sırası',         'always works / never goes'],
      ],
      tip: 'Present Simple = ümumi həqiqət + təkrarlanan hərəkət.',
    },

    // ── Mini-check 2 ─────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı cümlə Present Simple-ın işlənmə yerinə uyğundur?',
          options: [
            'Mən indi kitab oxuyuram.',
            'Günəş şərqdən doğur.',
            'O sabah işə gedəcək.',
          ],
          answer: 'Günəş şərqdən doğur.',
        },
        {
          q: 'Tezlik zərfi cümlədə harda dayanır?',
          options: [
            'Felin arxasında',
            'Felin önündə',
            'Cümlənin sonunda',
          ],
          answer: 'Felin önündə',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I work always late.',
            'I always work late.',
            'Always I work late.',
          ],
          answer: 'I always work late.',
        },
        {
          q: '"She ___ rarely ___ to parties." — düzgün variant:',
          options: [
            'She goes rarely to parties.',
            'She rarely goes to parties.',
            'Rarely she goes to parties.',
          ],
          answer: 'She rarely goes to parties.',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Tim never watches television.',
            'Tim watches never television.',
            'Tim watches television never.',
          ],
          answer: 'Tim never watches television.',
        },
        {
          q: 'Present Simple hansı hal üçün işlədilmir?',
          options: [
            'Ümumi həqiqətlər',
            'Təkrarlanan hərəkətlər',
            'Hal-hazırda davam edən iş',
          ],
          answer: 'Hal-hazırda davam edən iş',
        },
        {
          q: '"We ___ have dinner at 7.30." — boşluğa hansı zərf gəlir (həmişə mənasında)?',
          options: ['often', 'always', 'rarely'],
          answer: 'always',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Children usually likes chocolate.',
            'Children usually like chocolate.',
            'Children like usually chocolate.',
          ],
          answer: 'Children usually like chocolate.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"work" — he/she/it forması:',                              tr: 'works',            wrong: 'workies'               },
  { en: '"watch" — he/she/it forması:',                             tr: 'watches',          wrong: 'watchs'                },
  { en: '"study" — he/she/it forması:',                             tr: 'studies',          wrong: 'studys'                },
  { en: '"go" — he/she/it forması:',                                tr: 'goes',             wrong: 'gos'                   },
  { en: '"have" — he/she/it forması:',                              tr: 'has',              wrong: 'haves'                 },
  { en: '"try" — he/she/it forması:',                               tr: 'tries',            wrong: 'trys'                  },
  { en: '"finish" — he/she/it forması:',                            tr: 'finishes',         wrong: 'finishs'               },
  { en: '"do" — he/she/it forması:',                                tr: 'does',             wrong: 'dos'                   },
  { en: 'Düzgün: She ___ in London.',                               tr: 'lives',            wrong: 'live'                  },
  { en: 'Düzgün: Her parents ___ in Scotland.',                     tr: 'live',             wrong: 'lives'                 },
  { en: 'Düzgün: He ___ to the cinema a lot.',                      tr: 'goes',             wrong: 'go'                    },
  { en: 'Düzgün: I always ___ hard.',                               tr: 'work',             wrong: 'works'                 },
  { en: 'Tezlik zərfi — "həmişə":',                                 tr: 'always',           wrong: 'usually'               },
  { en: 'Tezlik zərfi — "heç vaxt":',                               tr: 'never',            wrong: 'rarely'                },
  { en: 'Tezlik zərfi — "adətən":',                                 tr: 'usually',          wrong: 'often'                 },
  { en: 'Düzgün: Tim ___ watches television.',                      tr: 'never',            wrong: 'not'                   },
  { en: 'Düzgün: Sue always ___ early.',                            tr: 'arrives',          wrong: 'arrive'                },
  { en: 'Düzgün: The Earth ___ round the Sun.',                     tr: 'goes',             wrong: 'go'                    },
  { en: 'Düzgün: Water ___ at 100 degrees.',                        tr: 'boils',            wrong: 'boil'                  },
  { en: 'Düzgün: She ___ eight hours a night.',                     tr: 'sleeps',           wrong: 'sleep'                 },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O Londonda yaşayır.',
      words: ['She', 'lives', 'in', 'London', 'live', 'in London'],
      answer: ['She', 'lives', 'in', 'London'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hər gün duş alır.',
      words: ['He', 'has', 'a', 'shower', 'every', 'day', 'every day', 'have'],
      answer: ['He', 'has', 'a', 'shower', 'every', 'day'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sue həmişə tez gəlir.',
      words: ['Sue', 'always', 'arrives', 'early', 'arrive', 'always arrives'],
      answer: ['Sue', 'always', 'arrives', 'early'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tim heç vaxt televizora baxmır.',
      words: ['Tim', 'never', 'watches', 'television', 'watch', 'never watches'],
      answer: ['Tim', 'never', 'watches', 'television'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz həmişə axşam yeməyini 7.30-da yeyirik.',
      words: ['We', 'always', 'have', 'dinner', 'at', '7.30', 'at 7.30', 'always have'],
      answer: ['We', 'always', 'have', 'dinner', 'at', '7.30'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O tez-tez basketbol oynayıram. (I)',
      words: ['I', 'often', 'play', 'basketball', 'plays', 'often play'],
      answer: ['I', 'often', 'play', 'basketball'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Margaret adətən çox çalışır.',
      words: ['Margaret', 'usually', 'works', 'hard', 'work', 'usually works'],
      answer: ['Margaret', 'usually', 'works', 'hard'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaqlar adətən şokolad sevir.',
      words: ['Children', 'usually', 'like', 'chocolate', 'likes', 'usually like'],
      answer: ['Children', 'usually', 'like', 'chocolate'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O çox dil danışır.',
      words: ['She', 'speaks', 'four', 'languages', 'speak', 'four languages'],
      answer: ['She', 'speaks', 'four', 'languages'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Günəş şərqdən doğur.',
      words: ['The', 'Sun', 'rises', 'in', 'the', 'east', 'rise', 'the east'],
      answer: ['The', 'Sun', 'rises', 'in', 'the', 'east'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Present Simple — inkar və sual' },

// ── UNIT 6–7 — Present Simple (İnkar və Sual) ────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple — İnkar (Dərs 1)',
  cards: [

    // ── Ekran 1: İnkar quruluşu ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Simple — İnkar quruluşu',
      content: 'Present Simple-də inkar üçün do not (don\'t) və does not (doesn\'t) işlədilir:\n\nI / we / you / they → don\'t + fel\nHe / she / it → doesn\'t + fel\n\n❗ Əsas qayda: doesn\'t / don\'t-dan sonra fel sadə formada qalır — -s almır!',
      table: [
        ['Subject',              'Köməkçi',   'Fel'],
        ['I / we / you / they',  'don\'t',    'work / like / eat'],
        ['he / she / it',        'doesn\'t',  'work / like / eat'],
      ],
      tip: 'doesn\'t işlətdikdə felə -s əlavə etmə: She doesn\'t speak ✅ — She doesn\'t speaks ❌',
    },

    // ── Ekran 2: Düzgün və yanlış nümunələr ──────────────────────────────────
    {
      type: 'lesson',
      title: 'İnkarda yanlış və düzgün forma',
      content: 'doesn\'t / don\'t-dan sonra fel həmişə sadə formada (infinitive) qalır:',
      examples: [
        { word: 'She doesn\'t speak Italian.',      az: '✅ Düzgün — doesn\'t + sadə fel'       },
        { word: 'She doesn\'t speaks Italian.',     az: '❌ Yanlış — -s artıq doesn\'t-dadır'   },
        { word: 'He doesn\'t have a car.',          az: '✅ Düzgün — doesn\'t + have'            },
        { word: 'He doesn\'t has a car.',           az: '❌ Yanlış — doesn\'t + has olmaz'       },
        { word: 'They don\'t know my address.',     az: '✅ Düzgün — don\'t + know'              },
        { word: 'I don\'t drink tea.',              az: '✅ Düzgün — don\'t + drink'             },
        { word: 'We don\'t works on Sunday.',       az: '❌ Yanlış — don\'t + works olmaz'       },
      ],
      tip: '-s mənası doesn\'t içindədir. Ayrıca felə -s əlavə etmək lazım deyil.',
    },

    // ── Ekran 3: İnkar nümunə cümlələri ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'İnkar — nümunə cümlələri',
      content: 'don\'t və doesn\'t ilə düzgün cümlələrə bax:',
      examples: [
        { word: 'I drink coffee but I don\'t drink tea.',          az: 'I → don\'t'      },
        { word: 'Sue drinks tea but she doesn\'t drink coffee.',   az: 'she → doesn\'t'  },
        { word: 'We don\'t watch television very often.',          az: 'we → don\'t'     },
        { word: 'It doesn\'t rain very often here.',               az: 'it → doesn\'t'   },
        { word: 'My car doesn\'t use much petrol.',                az: 'my car → doesn\'t' },
        { word: 'Paula doesn\'t usually have breakfast.',          az: 'she → doesn\'t'  },
        { word: 'Gerry and Linda don\'t know many people.',        az: 'they → don\'t'   },
      ],
      tip: 'don\'t = do not, doesn\'t = does not. Danışıq dilində qısa forma işlədilir.',
    },

    // ── Ekran 4: don't / doesn't seçimi ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'don\'t yoxsa doesn\'t?',
      content: 'Seçim subject-ə görə edilir:',
      table: [
        ['Subject',                     'İnkar'],
        ['I',                           'I don\'t like...'],
        ['You',                         'You don\'t work...'],
        ['We',                          'We don\'t eat...'],
        ['They',                        'They don\'t know...'],
        ['He',                          'He doesn\'t drive...'],
        ['She',                         'She doesn\'t go...'],
        ['It',                          'It doesn\'t rain...'],
        ['The shop / My friend',        '...doesn\'t open / doesn\'t call'],
      ],
      tip: 'He/she/it → doesn\'t. Qalan hamısı → don\'t.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'She doesn\'t speaks French.',
            'She doesn\'t speak French.',
            'She don\'t speak French.',
          ],
          answer: 'She doesn\'t speak French.',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'They doesn\'t work on weekends.',
            'They don\'t works on weekends.',
            'They don\'t work on weekends.',
          ],
          answer: 'They don\'t work on weekends.',
        },
        {
          q: '"He ___ a car." — boşluğu doldur (inkarda):',
          options: ['don\'t have', 'doesn\'t have', 'doesn\'t has'],
          answer: 'doesn\'t have',
        },
        {
          q: 'Hansı cümlə yanlışdır?',
          options: [
            'I don\'t drink coffee.',
            'She doesn\'t eats meat.',
            'We don\'t know his address.',
          ],
          answer: 'She doesn\'t eats meat.',
        },
        {
          q: '"My car ___ much petrol." — düzgün forma:',
          options: ['don\'t use', 'doesn\'t uses', 'doesn\'t use'],
          answer: 'doesn\'t use',
        },
        {
          q: '"Paula ___ usually have breakfast." — boşluğa nə gəlir?',
          options: ['don\'t', 'doesn\'t', 'isn\'t'],
          answer: 'doesn\'t',
        },
        {
          q: 'doesn\'t-dan sonra fel necə olur?',
          options: ['Sadə forma (-s almır)', 'Fel -s alır', 'Fel -ing alır'],
          answer: 'Sadə forma (-s almır)',
        },
        {
          q: '"Gerry and Linda ___ many people." — düzgün forma:',
          options: ['doesn\'t know', 'don\'t knows', 'don\'t know'],
          answer: 'don\'t know',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple — Sual (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Simple — Sual quruluşu',
      content: 'Present Simple-də sual üçün do / does köməkçi feli subject-dən əvvələ keçir:\n\nDo / Does + Subject + Verb\n\n❗ Sualda da fel sadə formada qalır — -s almır!',
      table: [
        ['Köməkçi', 'Subject',              'Fel'],
        ['Do',      'I / we / you / they',  'work / live / eat?'],
        ['Does',    'he / she / it',        'work / live / eat?'],
      ],
      tip: 'Does she work? ✅ — Does she works? ❌ — Sualda da felə -s əlavə etmə!',
    },

    // ── Ekran 2: Sual nümunələri ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual — nümunə cümlələri',
      content: 'Do və Does ilə düzgün sual cümlələri:',
      examples: [
        { word: 'Do you live near here?',          az: 'you → Do'         },
        { word: 'Do they know each other?',        az: 'they → Do'        },
        { word: 'Does she work in a bank?',        az: 'she → Does'       },
        { word: 'Does it rain a lot here?',        az: 'it → Does'        },
        { word: 'Do you usually have breakfast?',  az: 'you → Do'         },
        { word: 'Does your brother play tennis?',  az: 'your brother → Does' },
        { word: 'Does his sister have a car?',     az: 'his sister → Does'   },
      ],
      tip: 'Do you like...? / Does he like...? — subject dəyişir, fel dəyişmir.',
    },

    // ── Ekran 3: Qısa cavablar ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar (Short Answers)',
      content: 'Suala qısa cavab verərkən do / does / don\'t / doesn\'t işlədilir — fel təkrarlanmır:',
      table: [
        ['Sual',                          'Bəli',          'Xeyr'],
        ['Do you like football?',         'Yes, I do.',    'No, I don\'t.'],
        ['Does she work here?',           'Yes, she does.','No, she doesn\'t.'],
        ['Do they live near you?',        'Yes, they do.', 'No, they don\'t.'],
        ['Does Paul live near you?',      'Yes, he does.', 'No, he doesn\'t.'],
        ['Do your parents speak English?','Yes, they do.', 'No, they don\'t.'],
      ],
      tip: '"Yes, she does like." demə — sadəcə "Yes, she does." kifayətdir.',
    },

    // ── Ekran 4: Sual sözləri ilə ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə (Where/What/How often)',
      content: 'Sual sözü (Where/What/How often/What time) cümlənin əvvəlinə gəlir, sonra Do/Does:',
      table: [
        ['Sual sözü',  'Köməkçi', 'Subject',    'Fel'],
        ['Where',      'do',      'you',         'live?'],
        ['What',       'does',    'she',         'do?'],
        ['How often',  'do',      'they',        'come?'],
        ['What time',  'does',    'the film',    'start?'],
        ['Where',      'do',      'you',         'come from?'],
        ['What',       'does',    'this word',   'mean?'],
      ],
      tip: 'Sual sözü → Do/Does → Subject → Verb sırası pozulmamalıdır.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Does she works in a bank?',
            'Does she work in a bank?',
            'Do she work in a bank?',
          ],
          answer: 'Does she work in a bank?',
        },
        {
          q: '"Do you like classical music?" — bəli cavabı:',
          options: ['Yes, I like.', 'Yes, I do.', 'Yes, do I.'],
          answer: 'Yes, I do.',
        },
        {
          q: '"Does Paul live near you?" — xeyr cavabı:',
          options: ['No, he doesn\'t.', 'No, he don\'t.', 'No, Paul doesn\'t lives.'],
          answer: 'No, he doesn\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Where does you come from?',
            'Where do you come from?',
            'Where you do come from?',
          ],
          answer: 'Where do you come from?',
        },
        {
          q: '"___ the film start?" — boşluğa nə gəlir?',
          options: ['What time do', 'What time does', 'What does time'],
          answer: 'What time does',
        },
        {
          q: '"Do your parents speak English?" — xeyr cavabı:',
          options: ['No, they don\'t.', 'No, they doesn\'t.', 'No, don\'t they.'],
          answer: 'No, they don\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'How often do you wash your hair?',
            'How often you wash your hair?',
            'How often does you wash your hair?',
          ],
          answer: 'How often do you wash your hair?',
        },
        {
          q: '"What ___ this word ___?" — boşluqlara nə gəlir?',
          options: ['do / means', 'does / mean', 'does / means'],
          answer: 'does / mean',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'İnkar: I / we / you / they + ___',                          tr: 'don\'t',                    wrong: 'doesn\'t'                    },
  { en: 'İnkar: he / she / it + ___',                                tr: 'doesn\'t',                  wrong: 'don\'t'                      },
  { en: 'doesn\'t-dan sonra fel necə olur?',                         tr: 'Sadə forma',                wrong: '-s alır'                     },
  { en: 'Düzgün: She ___ speak Italian.',                            tr: 'doesn\'t',                  wrong: 'don\'t'                      },
  { en: 'Düzgün: They ___ know my address.',                         tr: 'don\'t',                    wrong: 'doesn\'t'                    },
  { en: 'Düzgün: He ___ have a car.',                                tr: 'doesn\'t',                  wrong: 'don\'t'                      },
  { en: 'Düzgün: It ___ rain very often.',                           tr: 'doesn\'t',                  wrong: 'don\'t'                      },
  { en: 'Sual: Do / Does + subject + ___',                           tr: 'sadə fel',                  wrong: 'fel + -s'                    },
  { en: 'Düzgün sual: ___ she work in a bank?',                      tr: 'Does',                      wrong: 'Do'                          },
  { en: 'Düzgün sual: ___ you live near here?',                      tr: 'Do',                        wrong: 'Does'                        },
  { en: '"Do you like tea?" — bəli cavabı:',                         tr: 'Yes, I do.',                wrong: 'Yes, I like.'                },
  { en: '"Does he work here?" — xeyr cavabı:',                       tr: 'No, he doesn\'t.',          wrong: 'No, he don\'t.'              },
  { en: 'Sual sözü ilə düzgün sıra:',                                tr: 'Wh- + Does/Do + Subject + Verb', wrong: 'Wh- + Subject + Does/Do + Verb' },
  { en: '"What time ___ the film start?"',                           tr: 'does',                      wrong: 'do'                          },
  { en: '"Where ___ you come from?"',                                tr: 'do',                        wrong: 'does'                        },
  { en: '"How often ___ they come?"',                                tr: 'do',                        wrong: 'does'                        },
  { en: '"What ___ this word mean?"',                                tr: 'does',                      wrong: 'do'                          },
  { en: 'Düzgün: My car ___ use much petrol.',                       tr: 'doesn\'t',                  wrong: 'don\'t'                      },
  { en: '"Does your brother play tennis?" — bəli cavabı:',           tr: 'Yes, he does.',             wrong: 'Yes, he plays.'              },
  { en: 'Düzgün: Paula ___ usually have breakfast.',                 tr: 'doesn\'t',                  wrong: 'don\'t'                      },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O italyan dilini bilmir.',
      words: ['She', 'doesn\'t', 'speak', 'Italian', 'don\'t', 'speaks'],
      answer: ['She', 'doesn\'t', 'speak', 'Italian'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz tez-tez televizora baxmırıq.',
      words: ['We', 'don\'t', 'watch', 'television', 'very', 'often', 'doesn\'t', 'watches'],
      answer: ['We', 'don\'t', 'watch', 'television', 'very', 'often'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O səhər yeməyi yemirsə.',
      words: ['She', 'doesn\'t', 'usually', 'have', 'breakfast', 'don\'t', 'has'],
      answer: ['She', 'doesn\'t', 'usually', 'have', 'breakfast'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən bankda işləyirsənmi?',
      words: ['Do', 'you', 'work', 'in', 'a', 'bank', 'Does', 'works', 'in a bank'],
      answer: ['Do', 'you', 'work', 'in', 'a', 'bank'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O burada işləyirmi?',
      words: ['Does', 'she', 'work', 'here', 'Do', 'works'],
      answer: ['Does', 'she', 'work', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən haradan gəlirsən?',
      words: ['Where', 'do', 'you', 'come', 'from', 'does', 'comes'],
      answer: ['Where', 'do', 'you', 'come', 'from'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Film saat neçədə başlayır?',
      words: ['What', 'time', 'does', 'the', 'film', 'start', 'do', 'starts'],
      answer: ['What', 'time', 'does', 'the', 'film', 'start'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən neçə dəfə saçını yuyursan?',
      words: ['How', 'often', 'do', 'you', 'wash', 'your', 'hair', 'does', 'washes'],
      answer: ['How', 'often', 'do', 'you', 'wash', 'your', 'hair'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O mənim evimin yanında yaşamır.',
      words: ['He', 'doesn\'t', 'live', 'near', 'my', 'house', 'don\'t', 'lives'],
      answer: ['He', 'doesn\'t', 'live', 'near', 'my', 'house'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar bir-birini tanıyırmı?',
      words: ['Do', 'they', 'know', 'each', 'other', 'Does', 'knows', 'each other'],
      answer: ['Do', 'they', 'know', 'each', 'other'],
    },
  ],
},      
      
{ type: 'section_divider', title: 'Tezlik zərfləri' },

// ── UNIT 93 — Tezlik Zərfləri (always / usually / often / sometimes / never) ──

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Tezlik Zərfləri — Frequency Adverbs (Dərs 1)',
  cards: [

    // ── Ekran 1: Tezlik sırası ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tezlik zərfləri — sıra və məna',
      content: 'Tezlik zərfləri bir işin nə qədər tez-tez baş verdiyini bildirir. Ən çoxdan ən aza doğru sıra:',
      table: [
        ['Zərf',       'Mənası',           'Faiz'],
        ['always',     'həmişə',           '100%'],
        ['usually',    'adətən',           '~90%'],
        ['often',      'tez-tez',          '~70%'],
        ['sometimes',  'bəzən',            '~50%'],
        ['never',      'heç vaxt',         '0%'],
      ],
      tip: 'always → usually → often → sometimes → never. Bu sıranı yadda saxla!',
    },

    // ── Ekran 2: Adi felin əvvəlində ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qayda 1 — Adi felin əvvəlində',
      content: 'Tezlik zərfi adi felin (work/go/eat...) əvvəlinə gəlir — arxasına yox:\n\nSubject + Zərf + Verb',
      examples: [
        { word: 'Sue always arrives at work early.',    az: '✅ always + arrives'                     },
        { word: 'I usually go to work by car.',         az: '✅ usually + go'                         },
        { word: 'Julia never eats breakfast.',          az: '✅ never + eats'                         },
        { word: 'Tom often sees him.',                  az: '✅ often + sees'                         },
        { word: 'I sometimes watch TV in the evening.', az: '✅ sometimes + watch'                   },
        { word: 'Sue arrives always early.',            az: '❌ Yanlış — zərf felin arxasına keçməz' },
        { word: 'I go usually to work by car.',         az: '❌ Yanlış — usually felin önündə olmalı'},
      ],
      tip: 'Zərf felin ÖNündə, subjectin arxasında dayanır.',
    },

    // ── Ekran 3: "to be" felinin arxasında ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Qayda 2 — "to be" felinin arxasında',
      content: 'Fel "to be" (is/are/was/were) olduqda zərf onun ARXASINA gəlir — önünə yox:\n\nSubject + to be + Zərf',
      examples: [
        { word: 'He is always tired.',               az: '✅ is + always'                          },
        { word: 'They are usually at home.',         az: '✅ are + usually'                        },
        { word: 'She was never late.',               az: '✅ was + never'                          },
        { word: 'I am sometimes hungry.',            az: '✅ am + sometimes'                       },
        { word: 'He always is tired.',               az: '❌ Yanlış — zərf "is"-dən sonra gəlir'  },
        { word: 'We usually are at home.',           az: '❌ Yanlış — always "are"-dən sonra olur'},
      ],
      tip: 'Adi fel → zərf önə gəlir. "to be" → zərf arxaya gəlir. İki qayda, iki istiqamət!',
    },

    // ── Ekran 4: Əlavə zaman ifadələri ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Əlavə zaman ifadələri',
      content: 'Bu ifadələr tezlik bildirmir — amma Present Simple ilə tez-tez işlədilir. Cümlənin SONUNA gəlirlər:',
      table: [
        ['İfadə',           'Nümunə'],
        ['every day',       'I go to the gym every day.'],
        ['every morning',   'She checks her phone every morning.'],
        ['once a week',     'He calls his mother once a week.'],
        ['twice a month',   'We visit them twice a month.'],
        ['on Mondays',      'I have a meeting on Mondays.'],
        ['at weekends',     'They are usually at home at weekends.'],
      ],
      tip: '"every/once/twice" ifadələri cümlənin sonunda dayanır — tezlik zərfləri kimi ortaya girmir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Tezliyi ən yüksək olan zərf hansıdır?',
          options: ['usually', 'often', 'always'],
          answer: 'always',
        },
        {
          q: '"never" neçə faiz tezlik bildirir?',
          options: ['50%', '0%', '100%'],
          answer: '0%',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Julia eats never breakfast.',
            'Julia never eats breakfast.',
            'Never Julia eats breakfast.',
          ],
          answer: 'Julia never eats breakfast.',
        },
        {
          q: '"to be" ilə düzgün sıra hansıdır?',
          options: [
            'He always is tired.',
            'He is always tired.',
            'Always he is tired.',
          ],
          answer: 'He is always tired.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'They usually are at home.',
            'They are usually at home.',
            'Usually they are at home.',
          ],
          answer: 'They are usually at home.',
        },
        {
          q: 'Əlavə zaman ifadəsi (every day) cümlədə harda dayanır?',
          options: ['Felin önündə', 'Cümlənin sonunda', 'Subjectin önündə'],
          answer: 'Cümlənin sonunda',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I go usually to work by car.',
            'I usually go to work by car.',
            'Usually I go to work by car.',
          ],
          answer: 'I usually go to work by car.',
        },
        {
          q: '"sometimes" təxminən neçə faiz tezlik bildirir?',
          options: ['~90%', '~50%', '~70%'],
          answer: '~50%',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"həmişə" ingilis dilində:',                                  tr: 'always',              wrong: 'usually'              },
  { en: '"adətən" ingilis dilində:',                                  tr: 'usually',             wrong: 'often'                },
  { en: '"heç vaxt" ingilis dilində:',                                tr: 'never',               wrong: 'sometimes'            },
  { en: '"bəzən" ingilis dilində:',                                   tr: 'sometimes',           wrong: 'rarely'               },
  { en: '"tez-tez" ingilis dilində:',                                 tr: 'often',               wrong: 'always'               },
  { en: 'Adi felin önündə yoxsa arxasında?',                          tr: 'Önündə',              wrong: 'Arxasında'            },
  { en: '"to be" feldən sonra yoxsa əvvəl?',                          tr: 'Sonra',               wrong: 'Əvvəl'               },
  { en: 'Düzgün: She ___ arrives late.',                              tr: 'always',              wrong: 'is always'            },
  { en: 'Düzgün: He is ___ tired after work.',                        tr: 'always',              wrong: 'always is'            },
  { en: 'Düzgün: I ___ go to the gym in the morning.',               tr: 'usually',             wrong: 'am usually'           },
  { en: 'Düzgün: They are ___ happy to see us.',                      tr: 'always',              wrong: 'always are'           },
  { en: 'Düzgün: Tim ___ watches television.',                        tr: 'never',               wrong: 'not'                  },
  { en: 'Düzgün: I go to the gym ___.',                               tr: 'every morning',       wrong: 'every morning go'     },
  { en: 'Düzgün: She washes her hair ___.',                           tr: 'twice a week',        wrong: 'a twice week'         },
  { en: 'Düzgün: We visit them ___.',                                 tr: 'once a month',        wrong: 'once month a'         },
  { en: '"always" neçə faiz tezlik bildirir?',                        tr: '100%',                wrong: '90%'                  },
  { en: '"usually" neçə faiz tezlik bildirir?',                       tr: '~90%',                wrong: '~70%'                 },
  { en: 'Düzgün: Margaret ___ works hard.',                           tr: 'usually',             wrong: 'is usually'           },
  { en: 'Düzgün: She was ___ rude to anyone.',                        tr: 'never',               wrong: 'not never'            },
  { en: 'Düzgün: I am ___ hungry before lunch.',                      tr: 'sometimes',           wrong: 'sometimes am'         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Sue həmişə işə tez gəlir.',
      words: ['Sue', 'always', 'arrives', 'at', 'work', 'early', 'arrive', 'always arrives'],
      answer: ['Sue', 'always', 'arrives', 'at', 'work', 'early'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən adətən işə maşınla gedirəm.',
      words: ['I', 'usually', 'go', 'to', 'work', 'by', 'car', 'goes', 'usually go'],
      answer: ['I', 'usually', 'go', 'to', 'work', 'by', 'car'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Julia heç vaxt səhər yeməyi yemirsə.',
      words: ['Julia', 'never', 'eats', 'breakfast', 'eat', 'never eats'],
      answer: ['Julia', 'never', 'eats', 'breakfast'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O həmişə işdən sonra yorğun olur.',
      words: ['He', 'is', 'always', 'tired', 'after', 'work', 'always is', 'are'],
      answer: ['He', 'is', 'always', 'tired', 'after', 'work'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar bazar günləri adətən evdə olurlar.',
      words: ['They', 'are', 'usually', 'at', 'home', 'on', 'Sundays', 'usually are', 'is'],
      answer: ['They', 'are', 'usually', 'at', 'home', 'on', 'Sundays'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bəzən axşam televizora baxıram.',
      words: ['I', 'sometimes', 'watch', 'television', 'in', 'the', 'evening', 'watches', 'in the evening'],
      answer: ['I', 'sometimes', 'watch', 'television', 'in', 'the', 'evening'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tim heç vaxt televizora baxmır.',
      words: ['Tim', 'never', 'watches', 'television', 'watch', 'doesn\'t never'],
      answer: ['Tim', 'never', 'watches', 'television'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaqlar adətən şokolad sevir.',
      words: ['Children', 'usually', 'like', 'chocolate', 'likes', 'usually like'],
      answer: ['Children', 'usually', 'like', 'chocolate'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən hər səhər idmana gedirəm.',
      words: ['I', 'go', 'to', 'the', 'gym', 'every', 'morning', 'goes', 'every morning'],
      answer: ['I', 'go', 'to', 'the', 'gym', 'every', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O həftədə iki dəfə saçını yuyur.',
      words: ['She', 'washes', 'her', 'hair', 'twice', 'a', 'week', 'wash', 'twice a week'],
      answer: ['She', 'washes', 'her', 'hair', 'twice', 'a', 'week'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Present Continuous — indiki proses' },

// ── UNIT 3–4 — Present Continuous (İndiki Proses) ───────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Continuous — Quruluş və Spelling (Dərs 1)',
  cards: [

    // ── Ekran 1: Müsbət quruluş ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous — Müsbət quruluş',
      content: 'Present Continuous — hal-hazırda, danışıq anında baş verən hərəkəti bildirir.\n\nQuruluş:\nSubject + am/is/are + verb(-ing)',
      table: [
        ['Subject',           'to be', 'Verb + ing'],
        ['I',                 'am',    'working'],
        ['he / she / it',     'is',    'working'],
        ['we / you / they',   'are',   'working'],
      ],
      tip: 'am/is/are unutma — "I working" yox, "I am working" ✅',
    },

    // ── Ekran 2: İnkar və Sual ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İnkar və Sual quruluşu',
      content: 'İnkarda "not" am/is/are-dən sonra gəlir. Sualda am/is/are subject-dən əvvələ keçir:',
      table: [
        ['',        'I',          'he/she/it',    'we/you/they'],
        ['Müsbət',  'I am working','he is working','they are working'],
        ['İnkar',   'I\'m not working','he isn\'t working','they aren\'t working'],
        ['Sual',    'Am I working?','Is he working?','Are they working?'],
      ],
      tip: 'am not qısaldılmır — "I amn\'t" olmaz! Yalnız "I\'m not" ✅',
    },

    // ── Ekran 3: -ing yazılış qaydaları ──────────────────────────────────────
    {
      type: 'lesson',
      title: '-ing yazılış qaydaları (Spelling)',
      content: 'Felə -ing əlavə edərkən 4 qayda var:',
      table: [
        ['Qayda',                                      'Nümunə'],
        ['Əksər fellər + -ing',                        'work→working, eat→eating, go→going'],
        ['-e ilə bitən → e düşür + -ing',              'come→coming, write→writing, dance→dancing'],
        ['Qısa vurğulu samit ilə bitən → samit ×2',   'sit→sitting, run→running, swim→swimming, stop→stopping'],
        ['-ie ilə bitən → -ying',                      'lie→lying, die→dying'],
      ],
      tip: 'make→making (e düşür) ✅ — make→makeing ❌. Həmişə e-ni sil!',
    },

    // ── Ekran 4: Danışıq anında işlədilir ────────────────────────────────────
    {
      type: 'lesson',
      title: 'Nə zaman işlədilir? — Danışıq anı',
      content: 'Present Continuous indi, tam bu anda baş verən işlər üçün işlədilir:',
      examples: [
        { word: 'Please be quiet. I am trying to work.',       az: '🔴 İndi baş verir'   },
        { word: 'Look! Somebody is coming.',                   az: '🔴 İndi baş verir'   },
        { word: 'It isn\'t raining now. Let\'s go out.',       az: '🔴 İndi baş verir'   },
        { word: 'Why are you looking at me like that?',        az: '🔴 İndi baş verir'   },
        { word: 'The children are playing in the garden.',     az: '🔴 İndi baş verir'   },
        { word: 'Please don\'t make noise — the baby is sleeping.', az: '🔴 İndi baş verir' },
        { word: 'He is having lunch at the moment.',           az: '🔴 İndi baş verir'   },
      ],
      tip: '"now / at the moment / look! / right now" — bu sözlər Present Continuous işarəsidir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün müsbət cümləni seç:',
          options: [
            'She working in the garden.',
            'She is working in the garden.',
            'She are working in the garden.',
          ],
          answer: 'She is working in the garden.',
        },
        {
          q: '"come" felinin -ing forması:',
          options: ['comeing', 'coming', 'comming'],
          answer: 'coming',
        },
        {
          q: '"sit" felinin -ing forması:',
          options: ['siting', 'sitting', 'sitiing'],
          answer: 'sitting',
        },
        {
          q: '"lie" felinin -ing forması:',
          options: ['lieing', 'lying', 'liing'],
          answer: 'lying',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'It amn\'t raining.',
            'It isn\'t raining.',
            'It aren\'t raining.',
          ],
          answer: 'It isn\'t raining.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'She is sleeping?',
            'Is she sleeping?',
            'Does she sleeping?',
          ],
          answer: 'Is she sleeping?',
        },
        {
          q: '"run" felinin -ing forması:',
          options: ['runing', 'running', 'runeing'],
          answer: 'running',
        },
        {
          q: '"write" felinin -ing forması:',
          options: ['writeing', 'writting', 'writing'],
          answer: 'writing',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Continuous — İstifadə və Qısa Cavablar (Dərs 2)',
  cards: [

    // ── Ekran 1: Bu günlər davam edən işlər ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Nə zaman işlədilir? — Bu günlər / Bu dövrdə',
      content: 'Present Continuous tam bu anda olmasa belə — bu günlər, bu dövrdə davam edən işlər üçün də işlədilir:',
      examples: [
        { word: 'I am learning to drive.',                        az: '📅 Bu günlər davam edir'  },
        { word: 'She is working very hard these days.',           az: '📅 Bu günlər davam edir'  },
        { word: 'The company is losing a lot of money.',          az: '📅 Bu dövrdə davam edir'  },
        { word: 'Some friends of mine are building their own house.', az: '📅 Bu dövrdə davam edir' },
        { word: 'She is working in London this week.',            az: '📅 Bu həftə davam edir'   },
        { word: 'We aren\'t going out tonight.',                  az: '📅 Bu gecə planı'          },
      ],
      tip: '"these days / this week / this month / nowadays" — bu sözlər "bu dövrdə" mənasını verir.',
    },

    // ── Ekran 2: Danışıq anı vs Bu günlər ────────────────────────────────────
    {
      type: 'lesson',
      title: 'İki istifadə halını müqayisə et',
      content: 'Present Continuous hər iki halda da işlənir — fərq vaxt genişliyindədir:',
      table: [
        ['Danışıq anı (indi)',                      'Bu dövrdə (bu günlər)'],
        ['"Look! It is raining."',                  '"It has been raining all week."'],
        ['"Be quiet — he is sleeping."',            '"He is sleeping badly these days."'],
        ['"What are you doing right now?"',         '"What are you doing this month?"'],
        ['"She is talking on the phone."',          '"She is learning Spanish this year."'],
      ],
      tip: 'Hər iki halda eyni quruluş — am/is/are + -ing. Mənası kontekstdən aydın olur.',
    },

    // ── Ekran 3: Qısa cavablar ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar (Short Answers)',
      content: 'Suala qısa cavab verərkən am/is/are işlədilir — fel təkrarlanmır:',
      table: [
        ['Sual',                      'Bəli',           'Xeyr'],
        ['Are you working?',          'Yes, I am.',     'No, I\'m not.'],
        ['Is she sleeping?',          'Yes, she is.',   'No, she isn\'t.'],
        ['Are they coming?',          'Yes, they are.', 'No, they aren\'t.'],
        ['Is it raining?',            'Yes, it is.',    'No, it isn\'t.'],
        ['Are your friends waiting?', 'Yes, they are.', 'No, they aren\'t.'],
      ],
      tip: '"Yes, I am working." demə — sadəcə "Yes, I am." kifayətdir.',
    },

    // ── Ekran 4: Sual sözləri ilə ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə Present Continuous',
      content: 'Wh- sual sözü əvvələ gəlir, sonra am/is/are, sonra subject, sonra -ing:',
      examples: [
        { word: 'What are you doing?',         az: 'What + are + you + doing'      },
        { word: 'Where is she going?',         az: 'Where + is + she + going'      },
        { word: 'Why are they laughing?',      az: 'Why + are + they + laughing'   },
        { word: 'What is Ann cooking?',        az: 'What + is + Ann + cooking'     },
        { word: 'Who are you talking to?',     az: 'Who + are + you + talking'     },
        { word: 'What is he reading?',         az: 'What + is + he + reading'      },
      ],
      tip: 'Wh- → am/is/are → Subject → Verb(-ing). Present Simple-dakı sual sırası ilə eynidir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I am learning to drive." — bu cümlə hansı hal üçündür?',
          options: [
            'Tam bu anda baş verir.',
            'Bu günlər davam edən iş.',
            'Həmişə baş verən iş.',
          ],
          answer: 'Bu günlər davam edən iş.',
        },
        {
          q: '"Are you working?" — bəli cavabı:',
          options: ['Yes, I working.', 'Yes, I am.', 'Yes, I do.'],
          answer: 'Yes, I am.',
        },
        {
          q: '"Is she sleeping?" — xeyr cavabı:',
          options: ['No, she isn\'t.', 'No, she doesn\'t.', 'No, she aren\'t.'],
          answer: 'No, she isn\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'What you are doing?',
            'What are you doing?',
            'What do you doing?',
          ],
          answer: 'What are you doing?',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She is work hard these days.',
            'She working hard these days.',
            'She is working hard these days.',
          ],
          answer: 'She is working hard these days.',
        },
        {
          q: '"Are they coming?" — xeyr cavabı:',
          options: ['No, they aren\'t.', 'No, they isn\'t.', 'No, they don\'t.'],
          answer: 'No, they aren\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Where she is going?',
            'Where is she going?',
            'Where does she going?',
          ],
          answer: 'Where is she going?',
        },
        {
          q: 'Hansı cümlə "bu günlər" mənasında işlədilir?',
          options: [
            'Look! It is raining.',
            'The company is losing money these days.',
            'Be quiet — he is sleeping.',
          ],
          answer: 'The company is losing money these days.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Present Continuous quruluşu:',                               tr: 'am/is/are + verb-ing',      wrong: 'do/does + verb-ing'         },
  { en: '"I" ilə hansı "to be" işlədilir?',                          tr: 'am',                        wrong: 'is'                         },
  { en: '"he/she/it" ilə hansı "to be" işlədilir?',                  tr: 'is',                        wrong: 'are'                        },
  { en: '"we/you/they" ilə hansı "to be" işlədilir?',                tr: 'are',                       wrong: 'is'                         },
  { en: '"come" → -ing forması:',                                     tr: 'coming',                    wrong: 'comeing'                    },
  { en: '"sit" → -ing forması:',                                      tr: 'sitting',                   wrong: 'siting'                     },
  { en: '"write" → -ing forması:',                                    tr: 'writing',                   wrong: 'writeing'                   },
  { en: '"swim" → -ing forması:',                                     tr: 'swimming',                  wrong: 'swiming'                    },
  { en: '"lie" → -ing forması:',                                      tr: 'lying',                     wrong: 'lieing'                     },
  { en: '"stop" → -ing forması:',                                     tr: 'stopping',                  wrong: 'stoping'                    },
  { en: '"dance" → -ing forması:',                                    tr: 'dancing',                   wrong: 'danceing'                   },
  { en: 'I-nin inkar forması:',                                       tr: 'I\'m not',                  wrong: 'I amn\'t'                   },
  { en: 'he/she/it-in inkar forması:',                                tr: 'isn\'t',                    wrong: 'aren\'t'                    },
  { en: 'we/you/they-in inkar forması:',                              tr: 'aren\'t',                   wrong: 'isn\'t'                     },
  { en: '"Are you reading?" — bəli cavabı:',                          tr: 'Yes, I am.',                wrong: 'Yes, I do.'                 },
  { en: '"Is it raining?" — xeyr cavabı:',                           tr: 'No, it isn\'t.',            wrong: 'No, it doesn\'t.'           },
  { en: 'Sual sözü ilə düzgün sıra:',                                 tr: 'Wh- + is/are + subject + -ing', wrong: 'Wh- + subject + is/are + -ing' },
  { en: '"these days / this week" — hansı zaman üçün işarə?',        tr: 'Bu dövrdə davam edən iş',   wrong: 'Tam bu anda baş verən iş'   },
  { en: '"now / at the moment / look!" — hansı zaman üçün işarə?',   tr: 'Danışıq anı',               wrong: 'Bu dövrdə davam edən iş'    },
  { en: 'Düzgün: She ___ working hard these days.',                   tr: 'is',                        wrong: 'are'                        },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən kitab oxuyuram.',
      words: ['I', 'am', 'reading', 'a', 'book', 'is', 'read'],
      answer: ['I', 'am', 'reading', 'a', 'book'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hal-hazırda duş alır.',
      words: ['He', 'is', 'having', 'a', 'shower', 'are', 'have'],
      answer: ['He', 'is', 'having', 'a', 'shower'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İndi yağış yağmır.',
      words: ['It', 'isn\'t', 'raining', 'now', 'aren\'t', 'rain'],
      answer: ['It', 'isn\'t', 'raining', 'now'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaqlar bağçada oynayırlar.',
      words: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden', 'is', 'play'],
      answer: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən nə edirsən?',
      words: ['What', 'are', 'you', 'doing', 'do', 'is', 'done'],
      answer: ['What', 'are', 'you', 'doing'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hara gedir?',
      words: ['Where', 'is', 'she', 'going', 'are', 'goes', 'go'],
      answer: ['Where', 'is', 'she', 'going'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu günlər sürücülük öyrənirəm.',
      words: ['I', 'am', 'learning', 'to', 'drive', 'is', 'learn'],
      answer: ['I', 'am', 'learning', 'to', 'drive'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar bu gecə çıxmırlar.',
      words: ['They', 'aren\'t', 'going', 'out', 'tonight', 'isn\'t', 'go'],
      answer: ['They', 'aren\'t', 'going', 'out', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Şirkət bu günlər çox pul itirir.',
      words: ['The', 'company', 'is', 'losing', 'a', 'lot', 'of', 'money', 'are', 'lose'],
      answer: ['The', 'company', 'is', 'losing', 'a', 'lot', 'of', 'money'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Niyə onlar gülürlər?',
      words: ['Why', 'are', 'they', 'laughing', 'is', 'laugh', 'do'],
      answer: ['Why', 'are', 'they', 'laughing'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Present Simple vs Present Continuous' },

// ── UNIT 8 — Present Simple vs Present Continuous (Müqayisə) ────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple vs Continuous — Əsas Fərq (Dərs 1)',
  cards: [

    // ── Ekran 1: Əsas fərq ────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Əsas fərq — hansını seçim?',
      content: 'Bu iki zamanı seçərkən əsas sual:\n\n❓ Həmişə / adətən baş verir? → Present Simple\n❓ İndi, bu anda baş verir? → Present Continuous',
      table: [
        ['',                  'Present Simple',             'Present Continuous'],
        ['Sual',              'Həmişə belə olur?',          'İndi baş verir?'],
        ['Quruluş',           'I work / She works',         'I am working / She is working'],
        ['Zaman ifadələri',   'always, every day, never',   'now, at the moment, today'],
      ],
      tip: '"now / at the moment" görürsənsə → Continuous. "always / every day" görürsənsə → Simple.',
    },

    // ── Ekran 2: Müqayisəli nümunələr ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Müqayisəli nümunələr',
      content: 'Eyni fel — fərqli zaman. Fərqi kontekstdən anla:',
      table: [
        ['Present Simple',                        'Present Continuous'],
        ['I work in a shop. (həmişə)',             'I am working this week. (bu həftə)'],
        ['She lives in London. (daimi)',           'She is living in Paris now. (müvəqqəti)'],
        ['It rains a lot in winter. (ümumi)',      'It is raining now. (indi)'],
        ['He plays tennis on Sundays. (adət)',     'He is playing tennis now. (indi)'],
        ['I read books every night. (adət)',       'I am reading a good book. (indi)'],
        ['Tom has a shower every morning. (adət)', 'Tom is having a shower now. (indi)'],
      ],
      tip: 'Eyni fel iki cür işlənə bilər — kontekst hər şeyi dəyişir.',
    },

    // ── Ekran 3: Zaman ifadələri ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Zaman ifadələri — hansı zamanla?',
      content: 'Zaman ifadəsi çox vaxt doğru zamanı seçməyə kömək edir:',
      table: [
        ['Present Simple ilə',        'Present Continuous ilə'],
        ['always',                    'now / right now'],
        ['usually',                   'at the moment'],
        ['often / sometimes / never', 'today / this week / this month'],
        ['every day / every morning', 'Look! / Listen!'],
        ['on Mondays / at weekends',  'currently / these days'],
        ['once a week / twice a month','this year'],
      ],
      tip: '"Look! / Listen!" gördükdə həmişə Continuous — gözlə görünən, qulaqla eşidilən şey.',
    },

    // ── Ekran 4: Müqayisəli cümlə cütləri ────────────────────────────────────
    {
      type: 'lesson',
      title: 'Eyni mövzu — fərqli zaman',
      content: 'Bu cümlə cütlərini diqqətlə müqayisə et:',
      examples: [
        { word: 'I usually go to work by car.',         az: '✅ PS — adət (usually)'          },
        { word: 'I am going to work by bus today.',     az: '✅ PC — bu gün, müvəqqəti'       },
        { word: 'Do you work every Saturday?',          az: '✅ PS — adət (every Saturday)'   },
        { word: 'Are you working today?',               az: '✅ PC — bu gün (today)'           },
        { word: 'It snows a lot here in winter.',       az: '✅ PS — ümumi həqiqət'            },
        { word: 'Look! It is snowing!',                 az: '✅ PC — indi baş verir (Look!)'  },
        { word: 'She usually wears light clothes.',     az: '✅ PS — adət (usually)'          },
        { word: 'Why is she wearing a coat today?',     az: '✅ PC — bu gün (today)'           },
      ],
      tip: 'Adət → Simple. Müvəqqəti / indi baş verən → Continuous.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Please be quiet. I ___ to concentrate." — düzgün forma:',
          options: ['try', 'am trying', 'tries'],
          answer: 'am trying',
        },
        {
          q: '"She ___ coffee every morning." — düzgün forma:',
          options: ['is drinking', 'drinks', 'drink'],
          answer: 'drinks',
        },
        {
          q: '"Look! It ___!" — düzgün forma:',
          options: ['snows', 'is snowing', 'snow'],
          answer: 'is snowing',
        },
        {
          q: '"He ___ tennis every Sunday." — düzgün forma:',
          options: ['is playing', 'plays', 'playing'],
          answer: 'plays',
        },
        {
          q: '"They ___ TV at the moment." — düzgün forma:',
          options: ['watch', 'are watching', 'watches'],
          answer: 'are watching',
        },
        {
          q: '"What ___ you ___ right now?" — düzgün forma:',
          options: ['do / do', 'are / doing', 'do / doing'],
          answer: 'are / doing',
        },
        {
          q: '"What ___ you ___ every weekend?" — düzgün forma:',
          options: ['are / doing', 'do / do', 'do / doing'],
          answer: 'do / doing',
        },
        {
          q: 'Hansı zaman ifadəsi Present Continuous ilə işlədilir?',
          options: ['every morning', 'at the moment', 'on Mondays'],
          answer: 'at the moment',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Simple vs Continuous — Stative Verbs (Dərs 2)',
  cards: [

    // ── Ekran 1: Stative verbs nədir? ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Stative Verbs — həmişə Simple ilə',
      content: 'Bəzi fellər hərəkət deyil, hal və ya vəziyyət bildirir. Bu fellər adətən Present Continuous ilə işlədilmir — hətta indi baş versə belə:\n\nBu fellərə "stative verbs" deyilir.',
      table: [
        ['Kateqoriya',    'Fellər'],
        ['Hisslər',       'like, love, hate, want, need, prefer'],
        ['Düşüncə',       'know, think, believe, understand, remember, forget'],
        ['Sahib olmaq',   'have, own, belong'],
        ['Hiss etmək',    'see, hear, smell, taste'],
      ],
      tip: 'Bu fellər "proses" deyil, "vəziyyət" bildirir — ona görə -ing almır.',
    },

    // ── Ekran 2: Stative verbs — düzgün/yanlış ───────────────────────────────
    {
      type: 'lesson',
      title: 'Stative verbs — düzgün və yanlış',
      content: 'Bu fellər həmişə Present Simple ilə işlədilir:',
      examples: [
        { word: 'I know him very well.',            az: '✅ Düzgün — know Simple ilə'          },
        { word: 'I am knowing him very well.',      az: '❌ Yanlış — know -ing almır'          },
        { word: 'She likes chocolate.',             az: '✅ Düzgün — like Simple ilə'          },
        { word: 'She is liking chocolate.',         az: '❌ Yanlış — like -ing almır'          },
        { word: 'I understand you.',                az: '✅ Düzgün — understand Simple ilə'    },
        { word: 'I am understanding you.',          az: '❌ Yanlış — understand -ing almır'    },
        { word: 'Do you want some coffee?',         az: '✅ Düzgün — want Simple ilə'          },
        { word: 'Are you wanting some coffee?',     az: '❌ Yanlış — want -ing almır'          },
      ],
      tip: 'like/love/hate/know/want/need/understand/believe → həmişə Simple!',
    },

    // ── Ekran 3: "have" — xüsusi hal ─────────────────────────────────────────
    {
      type: 'lesson',
      title: '"have" — iki fərqli məna',
      content: '"have" feli mənasına görə iki cür işlənə bilər:\n\n"Sahib olmaq" mənasında → həmişə Simple\n"Yemək/içmək/etmək" mənasında → Continuous ola bilər',
      examples: [
        { word: 'I have a car.',                    az: '✅ PS — sahib olmaq mənası'            },
        { word: 'I am having a car.',               az: '❌ Yanlış — sahib olmaq -ing almır'   },
        { word: 'Tom is having a shower.',          az: '✅ PC — hərəkət mənası (duş almaq)'   },
        { word: 'He has a shower every morning.',   az: '✅ PS — adət'                         },
        { word: 'We are having dinner now.',        az: '✅ PC — hərəkət mənası (yemək yemək)' },
        { word: 'She has breakfast at 7.',          az: '✅ PS — adət'                         },
      ],
      tip: '"have a car/house/money" → Simple. "have a shower/dinner/coffee" → Continuous ola bilər.',
    },

    // ── Ekran 4: Qarışıq məşq — xülasə ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Xülasə — seçim qaydası',
      content: 'Düzgün zamanı seçmək üçün bu sualları özünə ver:',
      examples: [
        { word: 'Həmişə / adətən baş verir?',       az: '→ Present Simple'                              },
        { word: 'İndi, bu anda baş verir?',          az: '→ Present Continuous'                          },
        { word: 'Bu günlər / bu dövrdə davam edir?', az: '→ Present Continuous'                          },
        { word: 'Hiss, düşüncə, sahib olmaq?',       az: '→ Present Simple (stative verb)'              },
        { word: '"always/every day/usually" var?',   az: '→ Present Simple'                              },
        { word: '"now/at the moment/Look!" var?',    az: '→ Present Continuous'                          },
        { word: '"know/like/want/understand" var?',  az: '→ Present Simple (stative — -ing almır)'      },
        { word: '"have" = sahib olmaq?',             az: '→ Present Simple. "have" = hərəkət → hər ikisi' },
      ],
      tip: 'Zaman ifadəsinə bax → stative verb yoxla → konteksti oxu. Bu üç addım kifayət edir!',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ him very well." — düzgün forma (know):',
          options: ['am knowing', 'know', 'knows'],
          answer: 'know',
        },
        {
          q: '"She ___ chocolate." — düzgün forma (like):',
          options: ['is liking', 'likes', 'like'],
          answer: 'likes',
        },
        {
          q: '"Tom ___ a shower at the moment." — düzgün forma (have):',
          options: ['has', 'is having', 'have'],
          answer: 'is having',
        },
        {
          q: '"He ___ a shower every morning." — düzgün forma (have):',
          options: ['is having', 'has', 'have'],
          answer: 'has',
        },
        {
          q: 'Hansı fel stative verbdir?',
          options: ['run', 'believe', 'go'],
          answer: 'believe',
        },
        {
          q: '"Do you ___ some coffee?" — düzgün forma (want):',
          options: ['wanting', 'are wanting', 'want'],
          answer: 'want',
        },
        {
          q: '"I ___ to work by bus today." — düzgün forma (go):',
          options: ['go', 'am going', 'goes'],
          answer: 'am going',
        },
        {
          q: 'Hansı cümlə yanlışdır?',
          options: [
            'I know the answer.',
            'She is liking ice cream.',
            'They are watching TV now.',
          ],
          answer: 'She is liking ice cream.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Adət → hansı zaman?',                                        tr: 'Present Simple',            wrong: 'Present Continuous'          },
  { en: 'İndi baş verir → hansı zaman?',                             tr: 'Present Continuous',        wrong: 'Present Simple'              },
  { en: '"always" hansı zamanla işlədilir?',                          tr: 'Present Simple',            wrong: 'Present Continuous'          },
  { en: '"at the moment" hansı zamanla işlədilir?',                   tr: 'Present Continuous',        wrong: 'Present Simple'              },
  { en: '"every day" hansı zamanla işlədilir?',                       tr: 'Present Simple',            wrong: 'Present Continuous'          },
  { en: '"now" hansı zamanla işlədilir?',                             tr: 'Present Continuous',        wrong: 'Present Simple'              },
  { en: '"Look!" hansı zamanla işlədilir?',                           tr: 'Present Continuous',        wrong: 'Present Simple'              },
  { en: 'Stative verb nədir?',                                        tr: 'Hərəkət deyil, hal bildirən fel', wrong: 'Hərəkət bildirən fel' },
  { en: '"know" — Continuous ilə işlənirmi?',                         tr: 'Xeyr, həmişə Simple',       wrong: 'Bəli, işlənə bilər'          },
  { en: '"like" — Continuous ilə işlənirmi?',                         tr: 'Xeyr, həmişə Simple',       wrong: 'Bəli, işlənə bilər'          },
  { en: '"want" — Continuous ilə işlənirmi?',                         tr: 'Xeyr, həmişə Simple',       wrong: 'Bəli, işlənə bilər'          },
  { en: '"have a shower" — hansı zaman ola bilər?',                   tr: 'Present Continuous',        wrong: 'Yalnız Present Simple'       },
  { en: '"have a car" — hansı zaman işlədilir?',                      tr: 'Present Simple',            wrong: 'Present Continuous'          },
  { en: 'Düzgün: She ___ in London. (daimi)',                         tr: 'lives',                     wrong: 'is living'                   },
  { en: 'Düzgün: She ___ in Paris this month. (müvəqqəti)',           tr: 'is living',                 wrong: 'lives'                       },
  { en: 'Düzgün: It ___ a lot in winter. (ümumi həqiqət)',            tr: 'rains',                     wrong: 'is raining'                  },
  { en: 'Düzgün: It ___ now. (indi)',                                  tr: 'is raining',                wrong: 'rains'                       },
  { en: '"these days" hansı zamanla işlədilir?',                      tr: 'Present Continuous',        wrong: 'Present Simple'              },
  { en: '"on Mondays" hansı zamanla işlədilir?',                      tr: 'Present Simple',            wrong: 'Present Continuous'          },
  { en: 'Düzgün: I ___ the answer. (know)',                           tr: 'know',                      wrong: 'am knowing'                  },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən adətən işə maşınla gedirəm.',
      words: ['I', 'usually', 'go', 'to', 'work', 'by', 'car', 'am going', 'goes'],
      answer: ['I', 'usually', 'go', 'to', 'work', 'by', 'car'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu gün işə avtobus ilə gedirəm.',
      words: ['I', 'am', 'going', 'to', 'work', 'by', 'bus', 'today', 'go', 'usually'],
      answer: ['I', 'am', 'going', 'to', 'work', 'by', 'bus', 'today'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bax! Qar yağır!',
      words: ['Look', 'it', 'is', 'snowing', 'snows', 'are'],
      answer: ['Look', 'it', 'is', 'snowing'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Qış aylarında burada çox qar yağır.',
      words: ['It', 'snows', 'a', 'lot', 'here', 'in', 'winter', 'is snowing', 'snow'],
      answer: ['It', 'snows', 'a', 'lot', 'here', 'in', 'winter'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tom hər səhər duş alır.',
      words: ['Tom', 'has', 'a', 'shower', 'every', 'morning', 'is having', 'have'],
      answer: ['Tom', 'has', 'a', 'shower', 'every', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tom hal-hazırda duş alır.',
      words: ['Tom', 'is', 'having', 'a', 'shower', 'at', 'the', 'moment', 'has', 'have'],
      answer: ['Tom', 'is', 'having', 'a', 'shower', 'at', 'the', 'moment'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən onu çox yaxşı tanıyıram.',
      words: ['I', 'know', 'him', 'very', 'well', 'am knowing', 'knows'],
      answer: ['I', 'know', 'him', 'very', 'well'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O bu günlər çox çalışır.',
      words: ['She', 'is', 'working', 'very', 'hard', 'these', 'days', 'works', 'are'],
      answer: ['She', 'is', 'working', 'very', 'hard', 'these', 'days'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən şokolad sevməni?',
      words: ['Do', 'you', 'like', 'chocolate', 'Are', 'liking', 'does'],
      answer: ['Do', 'you', 'like', 'chocolate'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O indi nə edir?',
      words: ['What', 'is', 'she', 'doing', 'does', 'do', 'are'],
      answer: ['What', 'is', 'she', 'doing'],
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

     
{ type: 'section_divider', title: 'Past Simple — düzgün fellər' },

// ── UNIT 11 — Past Simple: Düzgün Fellər (Regular Verbs) ────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — Düzgün Fellər, Quruluş və Spelling (Dərs 1)',
  cards: [

    // ── Ekran 1: Quruluş ──────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple — Quruluş',
      content: 'Past Simple — keçmişdə baş vermiş və bitmiş hərəkətlər üçün işlədilir.\n\nDüzgün fellərdə quruluş:\nSubject + Verb + -ed\n\n❗ Bütün şəxslər üçün eyni forma — dəyişmir!',
      table: [
        ['Subject',                    'Verb + ed'],
        ['I',                          'worked / lived / visited'],
        ['he / she / it',              'worked / lived / visited'],
        ['we / you / they',            'worked / lived / visited'],
      ],
      tip: 'Present Simple-dən fərqli olaraq he/she/it üçün ayrıca forma yoxdur — hamı üçün eynidir!',
    },

    // ── Ekran 2: -ed yazılış qaydaları ───────────────────────────────────────
    {
      type: 'lesson',
      title: '-ed yazılış qaydaları (Spelling)',
      content: 'Felə -ed əlavə edərkən 4 qayda var:',
      table: [
        ['Qayda',                                    'Nümunə'],
        ['Əksər fellər + -ed',                       'work→worked, clean→cleaned, start→started'],
        ['-e ilə bitən → + -d',                      'live→lived, arrive→arrived, dance→danced'],
        ['samit + -y ilə bitən → -ied',              'try→tried, study→studied, copy→copied'],
        ['qısa vurğulu samit ilə bitən → samit ×2',  'stop→stopped, plan→planned'],
      ],
      tip: 'sait + -y olduqda sadəcə -ed əlavə olunur: stay→stayed, play→played ✅',
    },

    // ── Ekran 3: Spelling məşq nümunələri ────────────────────────────────────
    {
      type: 'lesson',
      title: 'Spelling — düzgün və yanlış',
      content: 'Ən çox səhv edilən formalar:',
      examples: [
        { word: 'stop → stopped',     az: '✅ Düzgün — samit ikiqat'               },
        { word: 'stop → stoped',      az: '❌ Yanlış — samit ikiqat yazılmalı'     },
        { word: 'study → studied',    az: '✅ Düzgün — samit+y → ied'             },
        { word: 'study → studyed',    az: '❌ Yanlış — y düşür, ied gəlir'        },
        { word: 'live → lived',       az: '✅ Düzgün — e ilə bitən → +d'          },
        { word: 'live → liveed',      az: '❌ Yanlış — -e olduqda yalnız -d'      },
        { word: 'plan → planned',     az: '✅ Düzgün — samit ikiqat'              },
        { word: 'enjoy → enjoyed',    az: '✅ Düzgün — sait+y → sadəcə -ed'      },
      ],
      tip: 'play→played, stay→stayed — sait + y olduqda ikiqat yox, sadəcə -ed!',
    },

    // ── Ekran 4: Nümunə cümlələri ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple — nümunə cümlələri',
      content: 'Keçmişdə baş vermiş və bitmiş hərəkətlər:',
      examples: [
        { word: 'I cleaned my teeth this morning.',              az: 'clean → cleaned'   },
        { word: 'Terry worked in a bank for many years.',        az: 'work → worked'     },
        { word: 'Yesterday it rained all morning.',              az: 'rain → rained'     },
        { word: 'We danced a lot and talked to many people.',    az: 'dance → danced'    },
        { word: 'She lived in Paris for two years.',             az: 'live → lived'      },
        { word: 'They arrived at the hotel at 9 o\'clock.',     az: 'arrive → arrived'  },
        { word: 'He wanted to be a doctor when he was young.',   az: 'want → wanted'     },
        { word: 'I studied English at school.',                  az: 'study → studied'  },
      ],
      tip: 'Bütün cümlələrdə eyni qayda — subject kim olursa olsun, fel dəyişmir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"stop" felinin Past Simple forması:',
          options: ['stoped', 'stopped', 'stopeed'],
          answer: 'stopped',
        },
        {
          q: '"study" felinin Past Simple forması:',
          options: ['studyed', 'studieed', 'studied'],
          answer: 'studied',
        },
        {
          q: '"live" felinin Past Simple forması:',
          options: ['liveed', 'lived', 'livd'],
          answer: 'lived',
        },
        {
          q: '"plan" felinin Past Simple forması:',
          options: ['planed', 'planied', 'planned'],
          answer: 'planned',
        },
        {
          q: '"enjoy" felinin Past Simple forması:',
          options: ['enjoied', 'enjoyed', 'enjoed'],
          answer: 'enjoyed',
        },
        {
          q: 'Past Simple-də he/she/it üçün forma necədir?',
          options: [
            'Ayrıca forma var — -s alır.',
            'Bütün şəxslər üçün eynidir.',
            'Yalnız -ed alır, digərləri fərqlidir.',
          ],
          answer: 'Bütün şəxslər üçün eynidir.',
        },
        {
          q: '"copy" felinin Past Simple forması:',
          options: ['copyed', 'copied', 'copid'],
          answer: 'copied',
        },
        {
          q: '"arrive" felinin Past Simple forması:',
          options: ['arriveed', 'arrivd', 'arrived'],
          answer: 'arrived',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — Tələffüz və Zaman İfadələri (Dərs 2)',
  cards: [

    // ── Ekran 1: Tələffüz qaydaları ───────────────────────────────────────────
    {
      type: 'lesson',
      title: '-ed sonu — 3 cür tələffüz',
      content: '-ed sonu felin bitdiyi səsə görə 3 cür tələffüz edilir:',
      table: [
        ['Tələffüz', 'Nə vaxt',                                    'Nümunə'],
        ['/t/',      'Kar samitdən sonra (p,k,f,s,sh,ch)',         'worked, stopped, finished, watched'],
        ['/d/',      'Saitdən və cingiltili samitdən sonra',        'lived, cleaned, arrived, stayed'],
        ['/ɪd/',     '-t və -d ilə bitən fellərdən sonra',          'wanted, started, visited, waited'],
      ],
      tip: 'Ən asan yol: -t və -d ilə bitən fel → /ɪd/. Qalan ikisini qulaqla ayırd etmək olar.',
    },

    // ── Ekran 2: Tələffüz nümunələri ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tələffüz — nümunələr',
      content: 'Hər tələffüz növündən nümunələr:',
      examples: [
        { word: 'worked  → /wɜːkt/',       az: '/t/ — kar samit k'          },
        { word: 'stopped → /stɒpt/',       az: '/t/ — kar samit p'          },
        { word: 'watched → /wɒtʃt/',       az: '/t/ — kar samit ch'         },
        { word: 'finished → /ˈfɪnɪʃt/',   az: '/t/ — kar samit sh'         },
        { word: 'lived   → /lɪvd/',        az: '/d/ — cingiltili v'         },
        { word: 'cleaned → /kliːnd/',      az: '/d/ — cingiltili n'         },
        { word: 'arrived → /əˈraɪvd/',    az: '/d/ — cingiltili v'         },
        { word: 'visited → /ˈvɪzɪtɪd/',   az: '/ɪd/ — -t ilə bitir'       },
        { word: 'started → /stɑːtɪd/',    az: '/ɪd/ — -t ilə bitir'       },
        { word: 'waited  → /weɪtɪd/',     az: '/ɪd/ — -t ilə bitir'       },
        { word: 'needed  → /ˈniːdɪd/',    az: '/ɪd/ — -d ilə bitir'       },
      ],
      tip: '/ɪd/ tələffüzündə əlavə heca yaranır: visit → vis-it-id (3 heca).',
    },

    // ── Ekran 3: Zaman ifadələri ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple ilə zaman ifadələri',
      content: 'Bu ifadələr Past Simple ilə işlədilir — keçmişə işarə edir:',
      table: [
        ['İfadə',                           'Mənası',                    'Nümunə'],
        ['yesterday',                       'dünən',                     'I cleaned the house yesterday.'],
        ['last night / last week / last year','dünən gecə / keçən həftə / keçən il', 'She called last night.'],
        ['ago',                             '... əvvəl',                 'He arrived two days ago.'],
        ['in 1999 / in 2010',               'ildə',                      'They got married in 2010.'],
        ['this morning',                    'bu səhər',                  'I worked hard this morning.'],
        ['for + müddət',                    'müddət ərzində',            'She lived there for two years.'],
      ],
      tip: '"ago" həmişə müddətin ARXASINA gəlir: two days ago ✅ — ago two days ❌',
    },

    // ── Ekran 4: Tam cümlə nümunələri ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Zaman ifadəli tam cümlələr',
      content: 'Zaman ifadəsi ilə Past Simple cümlələri:',
      examples: [
        { word: 'I cleaned my teeth this morning.',              az: 'this morning → PS'         },
        { word: 'She started her job last Monday.',              az: 'last Monday → PS'          },
        { word: 'Terry worked in a bank from 1986 to 1993.',     az: 'from...to → PS'            },
        { word: 'They arrived at the hotel at 9 o\'clock.',     az: 'keçmişdə bitmiş → PS'     },
        { word: 'He called me two hours ago.',                   az: 'ago → PS'                  },
        { word: 'We stayed at a very nice hotel last year.',     az: 'last year → PS'            },
        { word: 'She lived in Paris for two years.',             az: 'for + müddət → PS'         },
        { word: 'The party finished at midnight.',               az: 'keçmişdə bitmiş → PS'     },
      ],
      tip: 'Zaman ifadəsi çox vaxt cümlənin sonunda dayanır — amma əvvəldə də gələ bilər.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"worked" necə tələffüz edilir?',
          options: ['/wɜːkd/', '/wɜːkt/', '/wɜːkɪd/'],
          answer: '/wɜːkt/',
        },
        {
          q: '"visited" necə tələffüz edilir?',
          options: ['/ˈvɪzɪtd/', '/ˈvɪzɪt/', '/ˈvɪzɪtɪd/'],
          answer: '/ˈvɪzɪtɪd/',
        },
        {
          q: '"lived" necə tələffüz edilir?',
          options: ['/lɪvt/', '/lɪvd/', '/lɪvɪd/'],
          answer: '/lɪvd/',
        },
        {
          q: '/ɪd/ tələffüzü nə vaxt işlədilir?',
          options: [
            'Kar samitdən sonra',
            '-t və -d ilə bitən fellərdən sonra',
            'Saitdən sonra',
          ],
          answer: '-t və -d ilə bitən fellərdən sonra',
        },
        {
          q: '"ago" cümlədə harda dayanır?',
          options: [
            'Müddətin əvvəlində: ago two days',
            'Müddətin arxasında: two days ago',
            'Cümlənin əvvəlində həmişə',
          ],
          answer: 'Müddətin arxasında: two days ago',
        },
        {
          q: 'Hansı zaman ifadəsi Past Simple ilə işlədilir?',
          options: ['at the moment', 'every day', 'last week'],
          answer: 'last week',
        },
        {
          q: '"wanted" necə tələffüz edilir?',
          options: ['/wɒntd/', '/wɒntt/', '/ˈwɒntɪd/'],
          answer: '/ˈwɒntɪd/',
        },
        {
          q: '"finished" necə tələffüz edilir?',
          options: ['/ˈfɪnɪʃt/', '/ˈfɪnɪʃd/', '/ˈfɪnɪʃɪd/'],
          answer: '/ˈfɪnɪʃt/',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Past Simple — düzgün fel quruluşu:',                        tr: 'Verb + -ed',                wrong: 'Verb + -s'                   },
  { en: 'He/she/it üçün Past Simple forması:',                       tr: 'Eyni — dəyişmir',           wrong: '-s əlavə olunur'             },
  { en: '"work" → Past Simple:',                                     tr: 'worked',                    wrong: 'workt'                       },
  { en: '"stop" → Past Simple:',                                     tr: 'stopped',                   wrong: 'stoped'                      },
  { en: '"study" → Past Simple:',                                    tr: 'studied',                   wrong: 'studyed'                     },
  { en: '"live" → Past Simple:',                                     tr: 'lived',                     wrong: 'liveed'                      },
  { en: '"plan" → Past Simple:',                                     tr: 'planned',                   wrong: 'planed'                      },
  { en: '"try" → Past Simple:',                                      tr: 'tried',                     wrong: 'tryed'                       },
  { en: '"dance" → Past Simple:',                                    tr: 'danced',                    wrong: 'danceed'                     },
  { en: '"copy" → Past Simple:',                                     tr: 'copied',                    wrong: 'copyed'                      },
  { en: '"worked" tələffüzü:',                                       tr: '/t/',                       wrong: '/d/'                         },
  { en: '"lived" tələffüzü:',                                        tr: '/d/',                       wrong: '/t/'                         },
  { en: '"visited" tələffüzü:',                                      tr: '/ɪd/',                      wrong: '/t/'                         },
  { en: '"started" tələffüzü:',                                      tr: '/ɪd/',                      wrong: '/d/'                         },
  { en: '"watched" tələffüzü:',                                      tr: '/t/',                       wrong: '/ɪd/'                        },
  { en: '"dünən" ingilis dilində:',                                  tr: 'yesterday',                 wrong: 'last day'                    },
  { en: '"keçən həftə" ingilis dilində:',                            tr: 'last week',                 wrong: 'ago week'                    },
  { en: '"iki gün əvvəl" ingilis dilində:',                          tr: 'two days ago',              wrong: 'ago two days'                },
  { en: '"stay" → Past Simple:',                                     tr: 'stayed',                    wrong: 'staied'                      },
  { en: '"arrive" → Past Simple:',                                   tr: 'arrived',                   wrong: 'arriveed'                    },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu səhər dişlərimi təmizlədim.',
      words: ['I', 'cleaned', 'my', 'teeth', 'this', 'morning', 'clean', 'this morning'],
      answer: ['I', 'cleaned', 'my', 'teeth', 'this', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dünən bütün gün yağış yağdı.',
      words: ['Yesterday', 'it', 'rained', 'all', 'morning', 'rain', 'all morning'],
      answer: ['Yesterday', 'it', 'rained', 'all', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O iki il Parisdə yaşadı.',
      words: ['She', 'lived', 'in', 'Paris', 'for', 'two', 'years', 'live', 'for two years'],
      answer: ['She', 'lived', 'in', 'Paris', 'for', 'two', 'years'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar otela saat 9-da çatdılar.',
      words: ['They', 'arrived', 'at', 'the', 'hotel', 'at', '9', 'o\'clock', 'arrive', 'at the hotel'],
      answer: ['They', 'arrived', 'at', 'the', 'hotel', 'at', '9', 'o\'clock'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən məktəbdə ingilis dili öyrəndim.',
      words: ['I', 'studied', 'English', 'at', 'school', 'study', 'at school'],
      answer: ['I', 'studied', 'English', 'at', 'school'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Party gecəyarı bitdi.',
      words: ['The', 'party', 'finished', 'at', 'midnight', 'finish', 'at midnight'],
      answer: ['The', 'party', 'finished', 'at', 'midnight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O keçən bazar ertəsi işə başladı.',
      words: ['She', 'started', 'her', 'job', 'last', 'Monday', 'start', 'last Monday'],
      answer: ['She', 'started', 'her', 'job', 'last', 'Monday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O iki gün əvvəl zəng etdi.',
      words: ['He', 'called', 'two', 'days', 'ago', 'call', 'ago two days'],
      answer: ['He', 'called', 'two', 'days', 'ago'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz çox gözəl bir oteldə qaldıq.',
      words: ['We', 'stayed', 'at', 'a', 'very', 'nice', 'hotel', 'stay', 'at a very nice hotel'],
      answer: ['We', 'stayed', 'at', 'a', 'very', 'nice', 'hotel'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaq ikən o həkim olmaq istəyirdi.',
      words: ['He', 'wanted', 'to', 'be', 'a', 'doctor', 'when', 'he', 'was', 'a', 'child', 'want', 'to be'],
      answer: ['He', 'wanted', 'to', 'be', 'a', 'doctor', 'when', 'he', 'was', 'a', 'child'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Past Simple — dəyişən fellər' },

// ── UNIT 11 — Past Simple: Düzgünsüz Fellər (Irregular Verbs) ───────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — Düzgünsüz Fellər, Qrup 1–3 (Dərs 1)',
  cards: [

    // ── Ekran 1: Giriş — düzgünsüz fellər nədir? ─────────────────────────────
    {
      type: 'lesson',
      title: 'Düzgünsüz fellər — nədir?',
      content: 'Düzgünsüz fellər -ed almır. Bunların keçmiş formaları tamamilə fərqlidir — əzbərlənməlidir.\n\nDüzgün fel: work → worked ✅\nDüzgünsüz fel: go → went ✅ (go → goed ❌)',
      examples: [
        { word: 'go → went',       az: '❌ "goed" olmaz'    },
        { word: 'buy → bought',    az: '❌ "buyed" olmaz'   },
        { word: 'take → took',     az: '❌ "taked" olmaz'   },
        { word: 'think → thought', az: '❌ "thinked" olmaz' },
        { word: 'write → wrote',   az: '❌ "writed" olmaz'  },
        { word: 'see → saw',       az: '❌ "seed" olmaz'    },
        { word: 'come → came',     az: '❌ "comed" olmaz'   },
        { word: 'have → had',      az: '❌ "haved" olmaz'   },
      ],
      tip: 'Düzgünsüz felləri qruplara bölüb əzbərləmək daha asandır.',
    },

    // ── Ekran 2: Qrup 1 — Eyni qalır + Qrup 2 — Sait dəyişir ────────────────
    {
      type: 'lesson',
      title: 'Qrup 1 — Eyni qalır | Qrup 2 — Sait dəyişir',
      content: 'Qrup 1: Keçmiş zaman forması infinitivlə eynidir.\nQrup 2: Sait hərfi dəyişir (a→e→u modeli):',
      table: [
        ['Qrup 1 — Eyni',  '',          'Qrup 2 — Sait dəyişir', ''],
        ['put',            'put',       'begin',                  'began'],
        ['cut',            'cut',       'drink',                  'drank'],
        ['',               '',          'run',                    'ran'],
        ['',               '',          'swim',                   'swam'],
        ['',               '',          'sing',                   'sang'],
        ['',               '',          'come',                   'came'],
        ['',               '',          'give',                   'gave'],
        ['',               '',          'take',                   'took'],
      ],
      tip: 'Qrup 2-də sait hərfi dəyişir: drink→drank, swim→swam, run→ran, sing→sang.',
    },

    // ── Ekran 3: Qrup 3 — -ought / -aught ────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qrup 3 — -ought / -aught forması',
      content: 'Bu fellər keçmiş zamanda -ought və ya -aught alır — tələffüzü eynidir: /ɔːt/',
      table: [
        ['İnfinitive', 'Past Simple', 'Mənası'],
        ['bring',      'brought',    'gətirmək'],
        ['buy',        'bought',     'almaq'],
        ['think',      'thought',    'düşünmək'],
        ['catch',      'caught',     'tutmaq'],
        ['teach',      'taught',     'öyrətmək'],
        ['fight',      'fought',     'döyüşmək'],
      ],
      tip: 'Hamısının tələffüzü /ɔːt/ — brought/bought/thought/caught/taught — eyni səslənir!',
    },

    // ── Ekran 4: Nümunə cümlələri — Qrup 1–3 ────────────────────────────────
    {
      type: 'lesson',
      title: 'Qrup 1–3 ilə nümunə cümlələr',
      content: 'Bu qrupların felləri cümlələrdə:',
      examples: [
        { word: 'She bought a new dress yesterday.',        az: 'buy → bought (Qrup 3)'   },
        { word: 'I thought about it all day.',             az: 'think → thought (Qrup 3)' },
        { word: 'He ran to catch the bus.',                az: 'run → ran (Qrup 2)'       },
        { word: 'We swam in the sea last summer.',         az: 'swim → swam (Qrup 2)'     },
        { word: 'She put the keys on the table.',          az: 'put → put (Qrup 1)'       },
        { word: 'He brought me a gift from London.',       az: 'bring → brought (Qrup 3)' },
        { word: 'The team began the match at 3 o\'clock.', az: 'begin → began (Qrup 2)'  },
        { word: 'He cut the bread and gave it to us.',     az: 'cut → cut, give → gave'   },
      ],
      tip: 'Hər cümləni oxuyarkən keçmiş formanı yüksək səslə de — əzbərləmə sürətlənir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"go" felinin Past Simple forması:',
          options: ['goed', 'went', 'gone'],
          answer: 'went',
        },
        {
          q: '"buy" felinin Past Simple forması:',
          options: ['buyed', 'boughted', 'bought'],
          answer: 'bought',
        },
        {
          q: '"swim" felinin Past Simple forması:',
          options: ['swimmed', 'swum', 'swam'],
          answer: 'swam',
        },
        {
          q: '"put" felinin Past Simple forması:',
          options: ['putted', 'put', 'puted'],
          answer: 'put',
        },
        {
          q: '"think" felinin Past Simple forması:',
          options: ['thinked', 'thought', 'thunk'],
          answer: 'thought',
        },
        {
          q: '"bring" felinin Past Simple forması:',
          options: ['bringed', 'brung', 'brought'],
          answer: 'brought',
        },
        {
          q: '"run" felinin Past Simple forması:',
          options: ['runned', 'ran', 'run'],
          answer: 'ran',
        },
        {
          q: '"catch" felinin Past Simple forması:',
          options: ['catched', 'caught', 'cought'],
          answer: 'caught',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — Düzgünsüz Fellər, Qrup 4–6 (Dərs 2)',
  cards: [

    // ── Ekran 1: Qrup 4 — -ew forması ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qrup 4 — -ew forması',
      content: 'Bu fellər keçmiş zamanda -ew alır:',
      table: [
        ['İnfinitive', 'Past Simple', 'Mənası'],
        ['know',       'knew',        'bilmək'],
        ['fly',        'flew',        'uçmaq'],
        ['grow',       'grew',        'böyümək'],
        ['blow',       'blew',        'əsmək (külək)'],
        ['draw',       'drew',        'çəkmək (şəkil)'],
        ['throw',      'threw',       'atmaq'],
      ],
      tip: 'know→knew, fly→flew, grow→grew — hamısı -ew ilə bitir.',
    },

    // ── Ekran 2: Qrup 5 — -oke/-ose forması + Qrup 6 — -eft/-ent/-ept ────────
    {
      type: 'lesson',
      title: 'Qrup 5 — -oke/-ose | Qrup 6 — -eft/-ent/-ept',
      content: 'Qrup 5: sonu -oke və ya -ose ilə bitir.\nQrup 6: sonu -eft, -ent, -ept ilə bitir:',
      table: [
        ['Qrup 5',   '',       'Qrup 6',  ''],
        ['speak',    'spoke',  'leave',   'left'],
        ['break',    'broke',  'send',    'sent'],
        ['wake',     'woke',   'sleep',   'slept'],
        ['choose',   'chose',  'feel',    'felt'],
        ['write',    'wrote',  'keep',    'kept'],
        ['drive',    'drove',  'spend',   'spent'],
        ['ride',     'rode',   'build',   'built'],
      ],
      tip: 'speak→spoke, break→broke — model eynidir. leave→left, send→sent — sonu dəyişir.',
    },

    // ── Ekran 3: Ən çox işlənən fellər — tam siyahı ───────────────────────────
    {
      type: 'lesson',
      title: 'Ən çox işlənən düzgünsüz fellər',
      content: 'Bu felləri mütləq bil:',
      table: [
        ['İnfinitive', 'Past',    'İnfinitive', 'Past'],
        ['be',         'was/were','make',        'made'],
        ['come',       'came',    'meet',        'met'],
        ['do',         'did',     'pay',         'paid'],
        ['eat',        'ate',     'read',        'read'],
        ['fall',       'fell',    'say',         'said'],
        ['find',       'found',   'see',         'saw'],
        ['forget',     'forgot',  'sell',        'sold'],
        ['get',        'got',     'sit',         'sat'],
        ['give',       'gave',    'stand',       'stood'],
        ['have',       'had',     'tell',        'told'],
        ['hear',       'heard',   'win',         'won'],
        ['leave',      'left',    'lose',        'lost'],
      ],
      tip: '"read" felinin Past Simple forması da "read" — amma tələffüzü /red/ kimi oxunur!',
    },

    // ── Ekran 4: Nümunə cümlələri — Qrup 4–6 + qarışıq ──────────────────────
    {
      type: 'lesson',
      title: 'Qrup 4–6 ilə nümunə cümlələr',
      content: 'Bu qrupların felləri cümlələrdə:',
      examples: [
        { word: 'I knew the answer immediately.',             az: 'know → knew (Qrup 4)'   },
        { word: 'She spoke to me but I didn\'t hear her.',   az: 'speak → spoke (Qrup 5)' },
        { word: 'He left the house at 8 o\'clock.',          az: 'leave → left (Qrup 6)'  },
        { word: 'She sent me a long message.',               az: 'send → sent (Qrup 6)'   },
        { word: 'The wind blew strongly last night.',        az: 'blow → blew (Qrup 4)'   },
        { word: 'He broke the window by accident.',          az: 'break → broke (Qrup 5)' },
        { word: 'We spent a week in the mountains.',         az: 'spend → spent (Qrup 6)' },
        { word: 'She wrote a long letter to her friend.',    az: 'write → wrote (Qrup 5)' },
      ],
      tip: 'Hər gün 5 yeni düzgünsüz fel öyrən — bir ayda hamısını biləcəksən.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"know" felinin Past Simple forması:',
          options: ['knowed', 'knew', 'known'],
          answer: 'knew',
        },
        {
          q: '"speak" felinin Past Simple forması:',
          options: ['speaked', 'spoken', 'spoke'],
          answer: 'spoke',
        },
        {
          q: '"leave" felinin Past Simple forması:',
          options: ['leaved', 'left', 'left'],
          answer: 'left',
        },
        {
          q: '"send" felinin Past Simple forması:',
          options: ['sended', 'sent', 'send'],
          answer: 'sent',
        },
        {
          q: '"write" felinin Past Simple forması:',
          options: ['writed', 'written', 'wrote'],
          answer: 'wrote',
        },
        {
          q: '"have" felinin Past Simple forması:',
          options: ['haved', 'had', 'has'],
          answer: 'had',
        },
        {
          q: '"see" felinin Past Simple forması:',
          options: ['seed', 'seen', 'saw'],
          answer: 'saw',
        },
        {
          q: '"fly" felinin Past Simple forması:',
          options: ['flyed', 'flown', 'flew'],
          answer: 'flew',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"go" → Past Simple:',           tr: 'went',    wrong: 'goed'     },
  { en: '"come" → Past Simple:',         tr: 'came',    wrong: 'comed'    },
  { en: '"have" → Past Simple:',         tr: 'had',     wrong: 'haved'    },
  { en: '"buy" → Past Simple:',          tr: 'bought',  wrong: 'buyed'    },
  { en: '"think" → Past Simple:',        tr: 'thought', wrong: 'thinked'  },
  { en: '"take" → Past Simple:',         tr: 'took',    wrong: 'taked'    },
  { en: '"see" → Past Simple:',          tr: 'saw',     wrong: 'seed'     },
  { en: '"write" → Past Simple:',        tr: 'wrote',   wrong: 'writed'   },
  { en: '"know" → Past Simple:',         tr: 'knew',    wrong: 'knowed'   },
  { en: '"speak" → Past Simple:',        tr: 'spoke',   wrong: 'speaked'  },
  { en: '"leave" → Past Simple:',        tr: 'left',    wrong: 'leaved'   },
  { en: '"send" → Past Simple:',         tr: 'sent',    wrong: 'sended'   },
  { en: '"run" → Past Simple:',          tr: 'ran',     wrong: 'runned'   },
  { en: '"swim" → Past Simple:',         tr: 'swam',    wrong: 'swimmed'  },
  { en: '"put" → Past Simple:',          tr: 'put',     wrong: 'putted'   },
  { en: '"catch" → Past Simple:',        tr: 'caught',  wrong: 'catched'  },
  { en: '"bring" → Past Simple:',        tr: 'brought', wrong: 'bringed'  },
  { en: '"find" → Past Simple:',         tr: 'found',   wrong: 'finded'   },
  { en: '"tell" → Past Simple:',         tr: 'told',    wrong: 'telled'   },
  { en: '"fly" → Past Simple:',          tr: 'flew',    wrong: 'flyed'    },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O dünən yeni paltar aldı.',
      words: ['She', 'bought', 'a', 'new', 'dress', 'yesterday', 'buyed', 'buy'],
      answer: ['She', 'bought', 'a', 'new', 'dress', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz keçən il Londona getdik.',
      words: ['We', 'went', 'to', 'London', 'last', 'year', 'goed', 'go'],
      answer: ['We', 'went', 'to', 'London', 'last', 'year'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Jim otağa girdi, paltosunu çıxardı və oturdu.',
      words: ['Jim', 'came', 'into', 'the', 'room', 'took', 'off', 'his', 'coat', 'and', 'sat', 'down', 'come', 'take'],
      answer: ['Jim', 'came', 'into', 'the', 'room', 'took', 'off', 'his', 'coat', 'and', 'sat', 'down'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən onun adını unutdum.',
      words: ['I', 'forgot', 'her', 'name', 'forget', 'forgeted', 'his'],
      answer: ['I', 'forgot', 'her', 'name'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O mənə maraqlı bir şey söylədi.',
      words: ['He', 'told', 'me', 'something', 'interesting', 'telled', 'tell'],
      answer: ['He', 'told', 'me', 'something', 'interesting'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən cavabı dərhal bildim.',
      words: ['I', 'knew', 'the', 'answer', 'immediately', 'knowed', 'know'],
      answer: ['I', 'knew', 'the', 'answer', 'immediately'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O evdən saat 8-də çıxdı.',
      words: ['She', 'left', 'the', 'house', 'at', '8', 'o\'clock', 'leaved', 'leave'],
      answer: ['She', 'left', 'the', 'house', 'at', '8', 'o\'clock'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz partydə əla vaxt keçirdik.',
      words: ['We', 'had', 'a', 'great', 'time', 'at', 'the', 'party', 'haved', 'have'],
      answer: ['We', 'had', 'a', 'great', 'time', 'at', 'the', 'party'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O mənə London\'dan hədiyyə gətirdi.',
      words: ['He', 'brought', 'me', 'a', 'gift', 'from', 'London', 'bringed', 'bring'],
      answer: ['He', 'brought', 'me', 'a', 'gift', 'from', 'London'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O dünən ofisə tez gəldi.',
      words: ['She', 'came', 'to', 'the', 'office', 'early', 'yesterday', 'comed', 'come'],
      answer: ['She', 'came', 'to', 'the', 'office', 'early', 'yesterday'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Past Simple — inkar və sual' },

// ── UNIT 12 — Past Simple: İnkar və Sual (didn't / Did you?) ─────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — İnkar (didn\'t) (Dərs 1)',
  cards: [

    // ── Ekran 1: İnkar quruluşu ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple — İnkar quruluşu',
      content: 'Past Simple-də inkar üçün didn\'t (did not) işlədilir.\n\nBütün şəxslər üçün eynidir — dəyişmir:\nSubject + didn\'t + Verb (sadə forma)\n\n❗ didn\'t-dan sonra fel sadə formada qalır — keçmiş forma işlədilmir!',
      table: [
        ['Subject',                          'Köməkçi', 'Fel'],
        ['I / he / she / it / we / you / they', 'didn\'t', 'go / work / see / buy'],
      ],
      tip: 'didn\'t = did not. Danışıq dilində həmişə qısa forma işlədilir.',
    },

    // ── Ekran 2: didn't-dan sonra sadə forma ─────────────────────────────────
    {
      type: 'lesson',
      title: 'didn\'t-dan sonra — sadə forma!',
      content: 'didn\'t-dan sonra fel keçmiş forma almır — sadə (infinitive) formada qalır:',
      examples: [
        { word: 'She didn\'t go to work.',       az: '✅ Düzgün — didn\'t + go'           },
        { word: 'She didn\'t went to work.',     az: '❌ Yanlış — went olmaz'             },
        { word: 'I didn\'t see him.',            az: '✅ Düzgün — didn\'t + see'           },
        { word: 'I didn\'t saw him.',            az: '❌ Yanlış — saw olmaz'              },
        { word: 'They didn\'t come.',            az: '✅ Düzgün — didn\'t + come'         },
        { word: 'They didn\'t came.',            az: '❌ Yanlış — came olmaz'             },
        { word: 'He didn\'t tell me.',           az: '✅ Düzgün — didn\'t + tell'         },
        { word: 'He didn\'t told me.',           az: '❌ Yanlış — told olmaz'             },
      ],
      tip: 'Keçmiş məna artıq didn\'t-dadır. Felə ayrıca keçmiş forma vermə!',
    },

    // ── Ekran 3: Müsbəti inkara çevirmə ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Müsbəti inkara çevir',
      content: 'Müsbət cümləni inkara çevirərkən fel sadə formaya qayıdır:',
      table: [
        ['Müsbət',                          'İnkar'],
        ['I went to work.',                 'I didn\'t go to work.'],
        ['She bought a dress.',             'She didn\'t buy a dress.'],
        ['They came to the party.',         'They didn\'t come to the party.'],
        ['He told me.',                     'He didn\'t tell me.'],
        ['It rained yesterday.',            'It didn\'t rain yesterday.'],
        ['We had dinner at home.',          'We didn\'t have dinner at home.'],
        ['I saw him at the meeting.',       'I didn\'t see him at the meeting.'],
      ],
      tip: 'went→go, bought→buy, came→come — inkarda fel sadə formaya qayıdır.',
    },

    // ── Ekran 4: İnkar nümunə cümlələri ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'İnkar — nümunə cümlələri',
      content: 'didn\'t ilə düzgün cümlələr:',
      examples: [
        { word: 'I didn\'t go to work yesterday. I stayed at home.',  az: 'I → didn\'t go'    },
        { word: 'She didn\'t watch television last night.',           az: 'she → didn\'t watch' },
        { word: 'We didn\'t have dinner at home.',                    az: 'we → didn\'t have'  },
        { word: 'They didn\'t come to the party.',                    az: 'they → didn\'t come' },
        { word: 'It didn\'t rain yesterday.',                         az: 'it → didn\'t rain'  },
        { word: 'She didn\'t buy anything at the shops.',             az: 'she → didn\'t buy'  },
      ],
      tip: 'didn\'t bütün şəxslər üçün eynidir — Present Simple-dən fərqli olaraq don\'t/doesn\'t yoxdur.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'She didn\'t went to school.',
            'She didn\'t go to school.',
            'She don\'t go to school.',
          ],
          answer: 'She didn\'t go to school.',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'They didn\'t came to the party.',
            'They didn\'t come to the party.',
            'They doesn\'t come to the party.',
          ],
          answer: 'They didn\'t come to the party.',
        },
        {
          q: '"I went to the cinema." → inkara çevir:',
          options: [
            'I didn\'t went to the cinema.',
            'I didn\'t go to the cinema.',
            'I don\'t go to the cinema.',
          ],
          answer: 'I didn\'t go to the cinema.',
        },
        {
          q: '"He told me." → inkara çevir:',
          options: [
            'He didn\'t told me.',
            'He didn\'t tell me.',
            'He doesn\'t tell me.',
          ],
          answer: 'He didn\'t tell me.',
        },
        {
          q: 'didn\'t-dan sonra fel necə olur?',
          options: [
            'Keçmiş forma (went/bought)',
            'Sadə forma (go/buy)',
            '-ing forması',
          ],
          answer: 'Sadə forma (go/buy)',
        },
        {
          q: '"She bought a dress." → inkara çevir:',
          options: [
            'She didn\'t bought a dress.',
            'She didn\'t buy a dress.',
            'She wasn\'t buy a dress.',
          ],
          answer: 'She didn\'t buy a dress.',
        },
        {
          q: 'Past Simple inkarda bütün şəxslər üçün hansı forma işlədilir?',
          options: ['don\'t / doesn\'t', 'didn\'t', 'wasn\'t / weren\'t'],
          answer: 'didn\'t',
        },
        {
          q: '"It rained." → inkara çevir:',
          options: [
            'It didn\'t rained.',
            'It didn\'t rain.',
            'It wasn\'t rain.',
          ],
          answer: 'It didn\'t rain.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Past Simple — Sual (Did?) (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple — Sual quruluşu',
      content: 'Past Simple-də sual üçün Did köməkçi feli subject-dən əvvələ keçir:\n\nDid + Subject + Verb (sadə forma)?\n\n❗ Did-dən sonra da fel sadə formada qalır!',
      table: [
        ['Köməkçi', 'Subject',                          'Fel'],
        ['Did',     'I / he / she / it / we / you / they', 'go / work / see / buy?'],
      ],
      tip: 'Did you go? ✅ — Did you went? ❌ — Sualda da fel sadə formada olur!',
    },

    // ── Ekran 2: Sual nümunələri ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual — nümunə cümlələri',
      content: 'Did ilə düzgün sual cümlələri:',
      examples: [
        { word: 'Did you go out last night?',        az: 'you → Did you go'      },
        { word: 'Did she pass the exam?',            az: 'she → Did she pass'    },
        { word: 'Did they enjoy the party?',         az: 'they → Did they enjoy' },
        { word: 'Did it rain yesterday?',            az: 'it → Did it rain'      },
        { word: 'Did he tell you about it?',         az: 'he → Did he tell'      },
        { word: 'Did you wake up early?',            az: 'you → Did you wake'    },
        { word: 'Did she buy anything?',             az: 'she → Did she buy'     },
      ],
      tip: 'Present Simple-də do/does işlədilirdi — Past Simple-də ikisi birləşib Did olur.',
    },

    // ── Ekran 3: Qısa cavablar + Sual sözləri ────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar və sual sözləri',
      content: 'Qısa cavabda did / didn\'t işlədilir. Sual sözü əvvələ gəlir:',
      table: [
        ['Sual',                    'Bəli',          'Xeyr'],
        ['Did you go out?',         'Yes, I did.',   'No, I didn\'t.'],
        ['Did she pass?',           'Yes, she did.', 'No, she didn\'t.'],
        ['Did they enjoy it?',      'Yes, they did.','No, they didn\'t.'],
        ['Did it rain?',            'Yes, it did.',  'No, it didn\'t.'],
      ],
      tip: '"Yes, I did go." demə — sadəcə "Yes, I did." kifayətdir.',
    },

    // ── Ekran 4: Sual sözləri ilə ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə Past Simple sualları',
      content: 'Sual sözü əvvələ gəlir, sonra Did, sonra subject, sonra sadə fel:',
      examples: [
        { word: 'What did you do last weekend?',      az: 'What + did + you + do'       },
        { word: 'Where did she go on holiday?',       az: 'Where + did + she + go'      },
        { word: 'Why did he leave early?',            az: 'Why + did + he + leave'      },
        { word: 'How much did it cost?',              az: 'How much + did + it + cost'  },
        { word: 'What time did the film start?',      az: 'What time + did + film + start' },
        { word: 'Who did you meet at the party?',     az: 'Who + did + you + meet'      },
        { word: 'How long did they stay?',            az: 'How long + did + they + stay' },
      ],
      tip: 'Sual sözü → Did → Subject → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Did she went to school?',
            'Did she go to school?',
            'Does she go to school?',
          ],
          answer: 'Did she go to school?',
        },
        {
          q: '"Did you enjoy the party?" — bəli cavabı:',
          options: ['Yes, I enjoyed.', 'Yes, I did.', 'Yes, I do.'],
          answer: 'Yes, I did.',
        },
        {
          q: '"Did it rain yesterday?" — xeyr cavabı:',
          options: ['No, it didn\'t.', 'No, it don\'t.', 'No, it wasn\'t.'],
          answer: 'No, it didn\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Where did you went last night?',
            'Where did you go last night?',
            'Where you did go last night?',
          ],
          answer: 'Where did you go last night?',
        },
        {
          q: '"How much ___ it ___?" — boşluqlara nə gəlir?',
          options: ['do / cost', 'did / cost', 'did / costed'],
          answer: 'did / cost',
        },
        {
          q: '"Did they come to the meeting?" — xeyr cavabı:',
          options: ['No, they didn\'t.', 'No, they don\'t.', 'No, they weren\'t.'],
          answer: 'No, they didn\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'What did you do at the weekend?',
            'What you did do at the weekend?',
            'What did you did at the weekend?',
          ],
          answer: 'What did you do at the weekend?',
        },
        {
          q: '"Why did she leave early?" — bu cümlədə fel hansı formadadır?',
          options: ['Keçmiş forma (left)', 'Sadə forma (leave)', '-ing forması'],
          answer: 'Sadə forma (leave)',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Past Simple inkar — bütün şəxslər üçün:',                   tr: 'didn\'t',                   wrong: 'don\'t / doesn\'t'           },
  { en: 'didn\'t-dan sonra fel necə olur?',                          tr: 'Sadə forma',                wrong: 'Keçmiş forma'                },
  { en: 'Düzgün: She ___ go to school yesterday.',                   tr: 'didn\'t',                   wrong: 'doesn\'t'                    },
  { en: '"I went." → inkara çevir:',                                 tr: 'I didn\'t go.',             wrong: 'I didn\'t went.'             },
  { en: '"She bought." → inkara çevir:',                             tr: 'She didn\'t buy.',          wrong: 'She didn\'t bought.'         },
  { en: '"They came." → inkara çevir:',                              tr: 'They didn\'t come.',        wrong: 'They didn\'t came.'          },
  { en: '"He told me." → inkara çevir:',                             tr: 'He didn\'t tell me.',       wrong: 'He didn\'t told me.'         },
  { en: 'Past Simple sual — köməkçi fel:',                           tr: 'Did',                       wrong: 'Do / Does'                   },
  { en: 'Düzgün sual: ___ you go out last night?',                   tr: 'Did',                       wrong: 'Do'                          },
  { en: '"Did you see the film?" — bəli cavabı:',                    tr: 'Yes, I did.',               wrong: 'Yes, I saw.'                 },
  { en: '"Did it rain?" — xeyr cavabı:',                             tr: 'No, it didn\'t.',           wrong: 'No, it don\'t.'              },
  { en: 'Sual sözü ilə düzgün sıra:',                                tr: 'Wh- + Did + Subject + Verb', wrong: 'Wh- + Subject + Did + Verb' },
  { en: '"Where ___ she ___?" — boşluqlara nə gəlir? (go)',         tr: 'did / go',                  wrong: 'did / went'                  },
  { en: '"What ___ you ___?" — boşluqlara nə gəlir? (do)',          tr: 'did / do',                  wrong: 'did / did'                   },
  { en: '"How much ___ it ___?" — boşluqlara nə gəlir? (cost)',     tr: 'did / cost',                wrong: 'did / costed'                },
  { en: '"Why did he leave?" — feldən sonra nə gəlir?',              tr: 'Sadə forma (leave)',        wrong: 'Keçmiş forma (left)'         },
  { en: 'Düzgün: Did she ___ the exam?',                             tr: 'pass',                      wrong: 'passed'                      },
  { en: 'Düzgün: I didn\'t ___ television last night.',              tr: 'watch',                     wrong: 'watched'                     },
  { en: '"Did they enjoy it?" — xeyr cavabı:',                       tr: 'No, they didn\'t.',         wrong: 'No, they enjoyed not.'       },
  { en: 'Düzgün: We didn\'t ___ dinner at home.',                    tr: 'have',                      wrong: 'had'                         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən dünən işə getmədim.',
      words: ['I', 'didn\'t', 'go', 'to', 'work', 'yesterday', 'went', 'don\'t'],
      answer: ['I', 'didn\'t', 'go', 'to', 'work', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O axşam televizora baxmadı.',
      words: ['She', 'didn\'t', 'watch', 'television', 'last', 'night', 'watched', 'doesn\'t'],
      answer: ['She', 'didn\'t', 'watch', 'television', 'last', 'night'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar partiyə gəlmədilər.',
      words: ['They', 'didn\'t', 'come', 'to', 'the', 'party', 'came', 'doesn\'t'],
      answer: ['They', 'didn\'t', 'come', 'to', 'the', 'party'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dünən gecə çıxdınmı?',
      words: ['Did', 'you', 'go', 'out', 'last', 'night', 'went', 'Do'],
      answer: ['Did', 'you', 'go', 'out', 'last', 'night'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O imtahanı keçdimi?',
      words: ['Did', 'she', 'pass', 'the', 'exam', 'passed', 'Does'],
      answer: ['Did', 'she', 'pass', 'the', 'exam'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən həftəsonu nə etdin?',
      words: ['What', 'did', 'you', 'do', 'at', 'the', 'weekend', 'did', 'done'],
      answer: ['What', 'did', 'you', 'do', 'at', 'the', 'weekend'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O niyə tez getdi?',
      words: ['Why', 'did', 'she', 'leave', 'early', 'left', 'does'],
      answer: ['Why', 'did', 'she', 'leave', 'early'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu nə qədər başa gəldi?',
      words: ['How', 'much', 'did', 'it', 'cost', 'costed', 'do'],
      answer: ['How', 'much', 'did', 'it', 'cost'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O mənə bunu demədi.',
      words: ['He', 'didn\'t', 'tell', 'me', 'about', 'it', 'told', 'doesn\'t'],
      answer: ['He', 'didn\'t', 'tell', 'me', 'about', 'it'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Film saat neçədə başladı?',
      words: ['What', 'time', 'did', 'the', 'film', 'start', 'started', 'do'],
      answer: ['What', 'time', 'did', 'the', 'film', 'start'],
    },
  ],
},
      
{ type: 'section_divider', title: 'going to — plan və niyyət' },

// ── UNIT 26–27 — going to (Plan və Niyyət) ───────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'going to — Müsbət və İnkar (Dərs 1)',
  cards: [

    // ── Ekran 1: going to quruluşu ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'going to — quruluş',
      content: 'Gələcəkdə əvvəlcədən qərara gəlinmiş plan və niyyət üçün going to işlədilir.\n\nQuruluş: Subject + am/is/are + going to + Verb (sadə forma)\n\n❗ going to-dan sonra fel həmişə sadə formada olur!',
      table: [
        ['Subject',              'to be', 'going to', 'Verb'],
        ['I',                   'am',    'going to',  'work / buy / study'],
        ['he / she / it',       'is',    'going to',  'work / buy / study'],
        ['we / you / they',     'are',   'going to',  'work / buy / study'],
      ],
      tip: 'am/is/are — subject-ə görə dəyişir. going to isə həmişə eyni qalır.',
    },

    // ── Ekran 2: İnkar quruluşu ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'going to — İnkar',
      content: 'İnkarda to be-nin yanına not əlavə olunur:\nI am not / he isn\'t / they aren\'t going to + Verb',
      examples: [
        { word: 'I am not going to watch TV tonight.',       az: '✅ am not going to'      },
        { word: 'I am going to watched TV tonight.',         az: '❌ watched olmaz'         },
        { word: 'She isn\'t going to come to the party.',    az: '✅ isn\'t going to'       },
        { word: 'She isn\'t going to came to the party.',    az: '❌ came olmaz'            },
        { word: 'They aren\'t going to move next year.',     az: '✅ aren\'t going to'      },
        { word: 'They aren\'t going to moved next year.',    az: '❌ moved olmaz'           },
        { word: 'He isn\'t going to study medicine.',        az: '✅ isn\'t going to'       },
        { word: 'He isn\'t going to studied medicine.',      az: '❌ studied olmaz'         },
      ],
      tip: 'going to-dan sonra fel sadə formada qalır — inkar da bu qaydanı dəyişmir!',
    },

    // ── Ekran 3: Müsbət — nümunə cümlələri ───────────────────────────────────
    {
      type: 'lesson',
      title: 'going to — Müsbət cümlələr',
      content: 'Əvvəlcədən verilmiş qərar və plan ifadə edən cümlələr:',
      table: [
        ['Cümlə',                                         'İzah'],
        ['I am going to call him tonight.',               'qərar artıq verilib'],
        ['She is going to visit her parents next week.',  'planlaşdırılıb'],
        ['We are going to move to a new flat soon.',      'qərar verilib'],
        ['They are going to get married in June.',        'plan var'],
        ['He is going to study medicine at university.',  'qərar verilib'],
        ['I am going to buy new shoes tomorrow.',         'planlaşdırılıb'],
        ['We are going to have a party on Saturday.',     'plan var'],
      ],
      tip: 'I\'m going to = I am going to. Danışıqda qısa forma daha çox işlədilir.',
    },

    // ── Ekran 4: İnkar — nümunə cümlələri ────────────────────────────────────
    {
      type: 'lesson',
      title: 'going to — İnkar cümlələri',
      content: 'am not / isn\'t / aren\'t going to ilə inkar cümlələri:',
      examples: [
        { word: 'I am not going to watch TV tonight.',        az: 'I → am not going to'       },
        { word: 'She isn\'t going to come to the meeting.',   az: 'she → isn\'t going to'     },
        { word: 'He isn\'t going to sell his car.',           az: 'he → isn\'t going to'      },
        { word: 'We aren\'t going to stay at home.',          az: 'we → aren\'t going to'     },
        { word: 'They aren\'t going to come to the party.',   az: 'they → aren\'t going to'   },
        { word: 'It isn\'t going to be easy.',                az: 'it → isn\'t going to'      },
      ],
      tip: 'I\'m not going to / She\'s not going to — hər iki qısa forma düzgündür.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün müsbət cümləni seç:',
          options: [
            'She is going to visits her friend.',
            'She is going to visit her friend.',
            'She going to visit her friend.',
          ],
          answer: 'She is going to visit her friend.',
        },
        {
          q: '"I" ilə going to — hansı to be işlədilir?',
          options: ['is', 'are', 'am'],
          answer: 'am',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'He isn\'t going to came.',
            'He isn\'t going to come.',
            'He not going to come.',
          ],
          answer: 'He isn\'t going to come.',
        },
        {
          q: '"They" ilə going to inkar — hansı forma?',
          options: ['isn\'t going to', 'aren\'t going to', 'am not going to'],
          answer: 'aren\'t going to',
        },
        {
          q: 'going to-dan sonra fel necə olur?',
          options: ['Sadə forma (buy)', 'Keçmiş forma (bought)', '-ing forması (buying)'],
          answer: 'Sadə forma (buy)',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'We are going to moved next year.',
            'We are going to move next year.',
            'We are go to move next year.',
          ],
          answer: 'We are going to move next year.',
        },
        {
          q: '"She / he / it" ilə going to — hansı to be işlədilir?',
          options: ['am', 'is', 'are'],
          answer: 'is',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'I am not going to watched TV.',
            'I am not going to watch TV.',
            'I not going to watch TV.',
          ],
          answer: 'I am not going to watch TV.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'going to — Sual və Proqnoz (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'going to — Sual quruluşu',
      content: 'Sual üçün to be subject-dən əvvələ keçir:\n\nAm/Is/Are + Subject + going to + Verb?\n\n❗ Sualda da fel sadə formada qalır!',
      table: [
        ['to be', 'Subject',              'going to', 'Verb'],
        ['Am',    'I',                    'going to',  'work?'],
        ['Is',    'he / she / it',        'going to',  'work?'],
        ['Are',   'we / you / they',      'going to',  'work?'],
      ],
      tip: 'Are you going to study? ✅ — Are you going to studied? ❌',
    },

    // ── Ekran 2: Qısa cavablar ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar',
      content: 'Qısa cavabda to be-dən istifadə edilir — going to təkrarlanmır:',
      table: [
        ['Sual',                          'Bəli',           'Xeyr'],
        ['Are you going to study?',       'Yes, I am.',     'No, I\'m not.'],
        ['Is she going to come?',         'Yes, she is.',   'No, she isn\'t.'],
        ['Is he going to call?',          'Yes, he is.',    'No, he isn\'t.'],
        ['Are they going to move?',       'Yes, they are.', 'No, they aren\'t.'],
        ['Is it going to rain?',          'Yes, it is.',    'No, it isn\'t.'],
      ],
      tip: '"Yes, I am going to." demə — sadəcə "Yes, I am." kifayətdir.',
    },

    // ── Ekran 3: Sual sözləri ilə ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə going to sualları',
      content: 'Sual sözü əvvələ gəlir, sonra to be, sonra subject, sonra going to + fel:',
      examples: [
        { word: 'What are you going to do after the course?',   az: 'What + are + you + going to + do'    },
        { word: 'Where are they going to go on holiday?',       az: 'Where + are + they + going to + go'  },
        { word: 'When is he going to start his new job?',       az: 'When + is + he + going to + start'   },
        { word: 'Why is she going to sell her car?',            az: 'Why + is + she + going to + sell'    },
        { word: 'How long are they going to stay?',             az: 'How long + are + they + going to + stay' },
        { word: 'Who are you going to invite?',                 az: 'Who + are + you + going to + invite' },
        { word: 'What is he going to study at university?',     az: 'What + is + he + going to + study'   },
      ],
      tip: 'Sual sözü → to be → Subject → going to → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Ekran 4: Görünən əlamətə əsasən proqnoz ──────────────────────────────
    {
      type: 'lesson',
      title: 'going to — Proqnoz (görünən əlamət)',
      content: 'Görünən bir əlamətə əsasən nəyin baş verəcəyini proqnozlaşdırmaq üçün going to işlədilir:',
      examples: [
        { word: 'Look at those clouds! It is going to rain.',    az: 'bulud görünür → yağış proqnozu'   },
        { word: 'Be careful! You are going to fall!',            az: 'vəziyyət görünür → düşmə proqnozu' },
        { word: 'She looks very tired. She is going to faint.',  az: 'görünüş əsasında proqnoz'         },
        { word: 'Look at that cat! It is going to jump!',        az: 'hərəkət görünür → proqnoz'        },
        { word: 'The sky is very dark. It is going to snow.',    az: 'göy üzü → qar proqnozu'           },
      ],
      tip: 'will ilə fərq: going to = əvvəlcədən plan ya görünən əlamət. will = indi verilən qərar.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Is she going to sells her car?',
            'Is she going to sell her car?',
            'Does she going to sell her car?',
          ],
          answer: 'Is she going to sell her car?',
        },
        {
          q: '"Are you going to study tonight?" — bəli cavabı:',
          options: ['Yes, I am going to.', 'Yes, I am.', 'Yes, I do.'],
          answer: 'Yes, I am.',
        },
        {
          q: '"Is it going to rain?" — xeyr cavabı:',
          options: ['No, it isn\'t.', 'No, it don\'t.', 'No, it won\'t.'],
          answer: 'No, it isn\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Where are they going to go on holiday?',
            'Where they are going to go on holiday?',
            'Where are they going to went on holiday?',
          ],
          answer: 'Where are they going to go on holiday?',
        },
        {
          q: 'Hansı cümlə görünən əlamətə əsasən proqnozdur?',
          options: [
            'I am going to visit my friend tomorrow.',
            'Look at those clouds! It is going to rain.',
            'She isn\'t going to come to the party.',
          ],
          answer: 'Look at those clouds! It is going to rain.',
        },
        {
          q: '"Are they going to move?" — xeyr cavabı:',
          options: ['No, they aren\'t.', 'No, they don\'t.', 'No, they didn\'t.'],
          answer: 'No, they aren\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'What you are going to do?',
            'What are you going to do?',
            'What are you going to did?',
          ],
          answer: 'What are you going to do?',
        },
        {
          q: 'going to — nə zaman işlədilir?',
          options: [
            'Danışıq anında verilmiş qərar',
            'Əvvəlcədən qərara gəlinmiş plan',
            'Adət və rutin hərəkətlər',
          ],
          answer: 'Əvvəlcədən qərara gəlinmiş plan',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'going to — müsbət quruluş:',                                   tr: 'Subject + am/is/are + going to + Verb',  wrong: 'Subject + going to + Verb'             },
  { en: '"I" ilə going to müsbət:',                                     tr: 'I am going to work.',                    wrong: 'I is going to work.'                   },
  { en: '"She" ilə going to müsbət:',                                   tr: 'She is going to study.',                 wrong: 'She are going to study.'               },
  { en: '"They" ilə going to inkar:',                                   tr: 'They aren\'t going to come.',            wrong: 'They isn\'t going to come.'            },
  { en: '"He" ilə going to inkar:',                                     tr: 'He isn\'t going to sell his car.',       wrong: 'He aren\'t going to sell his car.'     },
  { en: '"I" ilə going to inkar:',                                      tr: 'I am not going to watch TV.',            wrong: 'I isn\'t going to watch TV.'           },
  { en: 'going to-dan sonra fel necə olur?',                            tr: 'Sadə forma',                             wrong: 'Keçmiş forma'                          },
  { en: 'going to sual — "she" ilə:',                                   tr: 'Is she going to come?',                  wrong: 'Does she going to come?'               },
  { en: 'going to sual — "they" ilə:',                                  tr: 'Are they going to move?',                wrong: 'Do they going to move?'                },
  { en: '"Are you going to study?" — bəli cavabı:',                     tr: 'Yes, I am.',                             wrong: 'Yes, I am going to.'                   },
  { en: '"Is he going to call?" — xeyr cavabı:',                        tr: 'No, he isn\'t.',                         wrong: 'No, he don\'t.'                        },
  { en: '"Is it going to rain?" — bəli cavabı:',                        tr: 'Yes, it is.',                            wrong: 'Yes, it does.'                         },
  { en: 'Sual sözü ilə düzgün sıra:',                                   tr: 'Wh- + to be + Subject + going to + Verb', wrong: 'Wh- + Subject + to be + going to + Verb' },
  { en: '"Where ___ they ___ go?" — boşluqlara nə gəlir?',             tr: 'are / going to',                         wrong: 'do / going to'                         },
  { en: '"When ___ he ___ start?" — boşluqlara nə gəlir?',             tr: 'is / going to',                          wrong: 'does / going to'                       },
  { en: 'Görünən əlamətə əsasən proqnoz — hansı quruluş?',              tr: 'going to',                               wrong: 'will'                                  },
  { en: '"Look at those clouds!" → proqnoz:',                           tr: 'It is going to rain.',                   wrong: 'It will rains.'                        },
  { en: 'Danışıq anında verilən qərar — hansı quruluş?',                tr: 'will',                                   wrong: 'going to'                              },
  { en: 'Düzgün: She ___ going to visit her parents.',                  tr: 'is',                                     wrong: 'are'                                   },
  { en: 'Düzgün: We ___ going to have a party on Saturday.',            tr: 'are',                                    wrong: 'is'                                    },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən sabah yeni ayaqqabı alacağam.',
      words: ['I', 'am', 'going', 'to', 'buy', 'new', 'shoes', 'tomorrow', 'bought', 'is'],
      answer: ['I', 'am', 'going', 'to', 'buy', 'new', 'shoes', 'tomorrow'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O gələn həftə valideynlərini ziyarət edəcək.',
      words: ['She', 'is', 'going', 'to', 'visit', 'her', 'parents', 'next', 'week', 'visited', 'are'],
      answer: ['She', 'is', 'going', 'to', 'visit', 'her', 'parents', 'next', 'week'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar iyunda evlənəcəklər.',
      words: ['They', 'are', 'going', 'to', 'get', 'married', 'in', 'June', 'got', 'is'],
      answer: ['They', 'are', 'going', 'to', 'get', 'married', 'in', 'June'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu axşam televizora baxmayacağam.',
      words: ['I', 'am', 'not', 'going', 'to', 'watch', 'TV', 'tonight', 'watched', 'isn\'t'],
      answer: ['I', 'am', 'not', 'going', 'to', 'watch', 'TV', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O görüşə gəlməyəcək.',
      words: ['She', 'isn\'t', 'going', 'to', 'come', 'to', 'the', 'meeting', 'came', 'aren\'t'],
      answer: ['She', 'isn\'t', 'going', 'to', 'come', 'to', 'the', 'meeting'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam matçı izləyəcəksənmi?',
      words: ['Are', 'you', 'going', 'to', 'watch', 'the', 'match', 'tonight', 'watched', 'Do'],
      answer: ['Are', 'you', 'going', 'to', 'watch', 'the', 'match', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kurs bitdikdən sonra nə edəcəksən?',
      words: ['What', 'are', 'you', 'going', 'to', 'do', 'after', 'the', 'course', 'did', 'is'],
      answer: ['What', 'are', 'you', 'going', 'to', 'do', 'after', 'the', 'course'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O universiteti tibb üzrə oxuyacaq.',
      words: ['He', 'is', 'going', 'to', 'study', 'medicine', 'at', 'university', 'studied', 'are'],
      answer: ['He', 'is', 'going', 'to', 'study', 'medicine', 'at', 'university'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar tezliklə yeni mənzilə köçəcəklər.',
      words: ['They', 'are', 'going', 'to', 'move', 'to', 'a', 'new', 'flat', 'soon', 'moved', 'is'],
      answer: ['They', 'are', 'going', 'to', 'move', 'to', 'a', 'new', 'flat', 'soon'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bax o buludlara! Yağış yağacaq.',
      words: ['Look', 'at', 'those', 'clouds', 'It', 'is', 'going', 'to', 'rain', 'will', 'rains'],
      answer: ['Look', 'at', 'those', 'clouds', 'It', 'is', 'going', 'to', 'rain'],
    },
  ],
},
      
{ type: 'section_divider', title: 'will — qərar, təklif, proqnoz' },

// ── UNIT 28–29 — will (Qərar, Təklif, Proqnoz) ───────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'will — Quruluş və İşlənmə (Dərs 1)',
  cards: [

    // ── Ekran 1: will quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'will — quruluş',
      content: 'will gələcək üçün işlədilir. Bütün şəxslər üçün eynidir — dəyişmir.\n\nQuruluş: Subject + will + Verb (sadə forma)\n\n❗ will-dən sonra fel həmişə sadə formada olur — to olmur, -s/-ed olmur!',
      table: [
        ['Subject',                              'will (qısa)',  'Verb'],
        ['I / he / she / it / we / you / they',  'will (\'ll)',  'help / come / be'],
      ],
      tip: 'will not = won\'t. Danışıqda \'ll və won\'t qısa formaları daha çox işlədilir.',
    },

    // ── Ekran 2: will-dən sonra sadə forma ───────────────────────────────────
    {
      type: 'lesson',
      title: 'will-dən sonra — sadə forma!',
      content: 'will-dən sonra fel sadə (infinitive) formada qalır — heç bir dəyişiklik olmur:',
      examples: [
        { word: 'I\'ll help you.',            az: '✅ Düzgün — will + help'       },
        { word: 'I\'ll to help you.',         az: '❌ Yanlış — to olmaz'           },
        { word: 'She will come tomorrow.',    az: '✅ Düzgün — will + come'        },
        { word: 'She wills come tomorrow.',   az: '❌ Yanlış — wills olmaz'        },
        { word: 'It will rain.',              az: '✅ Düzgün — will + rain'        },
        { word: 'It will rains.',             az: '❌ Yanlış — rains olmaz'        },
        { word: 'He will be late.',           az: '✅ Düzgün — will + be'          },
        { word: 'He will comes late.',        az: '❌ Yanlış — comes olmaz'        },
      ],
      tip: 'will artıq gələcək məna daşıyır — felə ayrıca forma vermə!',
    },

    // ── Ekran 3: will — nə zaman işlədilir (1) ───────────────────────────────
    {
      type: 'lesson',
      title: 'will — Danışıq anında verilmiş qərar',
      content: 'Danışıq zamanı indi qərar verilir — əvvəlcədən planlaşdırılmayıb:',
      table: [
        ['Vəziyyət',                          'will ilə cavab'],
        ['The phone is ringing!',             'I\'ll answer it.'],
        ['I\'m hungry.',                      'I\'ll make you a sandwich.'],
        ['I\'ve left the door open.',         'I\'ll close it.'],
        ['I need some money.',               'I\'ll lend you some.'],
        ['Can somebody help me?',            'I\'ll help you.'],
        ['It\'s hot in here.',               'I\'ll open the window.'],
      ],
      tip: 'going to ilə fərq: going to = əvvəlcədən plan. will = indi verilən qərar.',
    },

    // ── Ekran 4: will — Vəd və Proqnoz ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'will — Vəd və Proqnoz',
      content: 'will həmçinin vəd vermək və şəxsi fikrə əsaslanan proqnoz üçün işlədilir:',
      examples: [
        { word: 'I won\'t tell anyone. I promise.',       az: 'vəd — won\'t = will not'         },
        { word: 'I\'ll call you tomorrow.',               az: 'vəd — geri zəng vədi'            },
        { word: 'I think it will rain tomorrow.',         az: 'proqnoz — şəxsi fikir'           },
        { word: 'She\'ll probably be late.',              az: 'proqnoz — probably ilə'          },
        { word: 'I don\'t think they\'ll come.',          az: 'mənfi proqnoz — don\'t think'    },
        { word: 'Don\'t worry. Everything will be OK.',   az: 'proqnoz — əminlik ifadəsi'       },
        { word: 'You won\'t pass if you don\'t study.',   az: 'proqnoz — şərtlə'               },
      ],
      tip: '"I don\'t think they\'ll come." ✅ — "I think they won\'t come." az işlədilir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I will to help you.',
            'I\'ll help you.',
            'I will helping you.',
          ],
          answer: 'I\'ll help you.',
        },
        {
          q: 'will-dən sonra fel necə olur?',
          options: ['Sadə forma (come)', 'Keçmiş forma (came)', '-ing forması (coming)'],
          answer: 'Sadə forma (come)',
        },
        {
          q: 'Hansı cümlə danışıq anında verilmiş qərardır?',
          options: [
            'I\'m going to buy a new car next month.',
            'I\'ll answer the phone.',
            'She is going to study medicine.',
          ],
          answer: 'I\'ll answer the phone.',
        },
        {
          q: 'will not — qısa forması:',
          options: ['willn\'t', 'won\'t', 'wouldn\'t'],
          answer: 'won\'t',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She wills come tomorrow.',
            'She will comes tomorrow.',
            'She will come tomorrow.',
          ],
          answer: 'She will come tomorrow.',
        },
        {
          q: 'Vəd ifadə edən cümləni seç:',
          options: [
            'I think it will rain.',
            'I won\'t tell anyone. I promise.',
            'The phone is ringing. I\'ll answer it.',
          ],
          answer: 'I won\'t tell anyone. I promise.',
        },
        {
          q: 'Düzgün proqnoz cümləsini seç:',
          options: [
            'I think she will passes the exam.',
            'I think she will pass the exam.',
            'I think she wills pass the exam.',
          ],
          answer: 'I think she will pass the exam.',
        },
        {
          q: '"I don\'t think they\'ll come." — bu cümlə nəyi ifadə edir?',
          options: ['Danışıq anında verilmiş qərar', 'Mənfi proqnoz', 'Əvvəlcədən verilmiş plan'],
          answer: 'Mənfi proqnoz',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'will — Sual, İnkar və will vs going to (Dərs 2)',
  cards: [

    // ── Ekran 1: will — Sual və İnkar ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'will — Sual və İnkar quruluşu',
      content: 'Sualda will subject-dən əvvələ keçir.\nİnkarda will not (won\'t) işlədilir:\n\nWill + Subject + Verb?\nSubject + won\'t + Verb',
      table: [
        ['Növ',    'Quruluş',                          'Nümunə'],
        ['Sual',   'Will + Subject + Verb?',            'Will you help me?'],
        ['İnkar',  'Subject + won\'t + Verb',           'I won\'t be late.'],
        ['Bəli',   'Yes, + Subject + will.',            'Yes, I will.'],
        ['Xeyr',   'No, + Subject + won\'t.',           'No, I won\'t.'],
      ],
      tip: 'Will you be at home? ✅ — Will you to be at home? ❌ — sualda da to olmaz.',
    },

    // ── Ekran 2: Sual sözləri ilə will ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə will',
      content: 'Sual sözü əvvələ gəlir, sonra will, sonra subject, sonra sadə fel:',
      examples: [
        { word: 'What will you do tonight?',         az: 'What + will + you + do'          },
        { word: 'When will she arrive?',             az: 'When + will + she + arrive'      },
        { word: 'Where will they stay?',             az: 'Where + will + they + stay'      },
        { word: 'How long will you be away?',        az: 'How long + will + you + be'      },
        { word: 'Who will help me?',                 az: 'Who + will + help'               },
        { word: 'Why won\'t he come?',               az: 'Why + won\'t + he + come'        },
        { word: 'How much will it cost?',            az: 'How much + will + it + cost'     },
      ],
      tip: 'Sual sözü → will → Subject → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Ekran 3: I think / I don't think + will ───────────────────────────────
    {
      type: 'lesson',
      title: 'I think / I don\'t think + will',
      content: 'Proqnozda I think / I don\'t think + will quruluşu işlədilir:\n\n❗ Mənfi proqnozda "I don\'t think + will" işlədilir — "I think + won\'t" az işlədilir!',
      table: [
        ['Müsbət proqnoz',                        'Mənfi proqnoz'],
        ['I think she will pass.',                'I don\'t think she will pass.'],
        ['I think it will rain tomorrow.',        'I don\'t think it will rain.'],
        ['I think they will come.',               'I don\'t think they will come.'],
        ['I think he will be late.',              'I don\'t think he will be late.'],
        ['I think we will win.',                  'I don\'t think we will win.'],
      ],
      tip: '"I don\'t think he\'ll be here." ✅ — "I think he won\'t be here." ✅ amma az işlədilir.',
    },

    // ── Ekran 4: will vs going to ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'will vs going to — fərq',
      content: 'will və going to hər ikisi gələcək üçündür, lakin istifadə fərqlidir:',
      examples: [
        { word: '\'I\'m cold.\' — \'I\'ll close the window.\'',          az: 'will — indi verilən qərar'          },
        { word: 'I\'m going to buy a new coat. I saw it yesterday.',     az: 'going to — əvvəlcədən plan'         },
        { word: 'I think it will rain tomorrow.',                         az: 'will — şəxsi fikir əsasında'        },
        { word: 'Look at those clouds! It\'s going to rain!',            az: 'going to — görünən əlamət'          },
        { word: 'I\'ll help you with that. *(indi qərar)*',              az: 'will — təklif, indi verilir'        },
        { word: 'She\'s going to study medicine. *(qərar verilib)*',     az: 'going to — əvvəlcədən plan'         },
      ],
      tip: 'Sadə qayda: indi qərar verirsən → will. Əvvəl planlamısan → going to.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Will she to come tomorrow?',
            'Will she come tomorrow?',
            'Will she comes tomorrow?',
          ],
          answer: 'Will she come tomorrow?',
        },
        {
          q: '"Will you help me?" — bəli cavabı:',
          options: ['Yes, I will help.', 'Yes, I will.', 'Yes, I do.'],
          answer: 'Yes, I will.',
        },
        {
          q: '"Will it rain?" — xeyr cavabı:',
          options: ['No, it willn\'t.', 'No, it won\'t.', 'No, it isn\'t.'],
          answer: 'No, it won\'t.',
        },
        {
          q: 'Mənfi proqnoz üçün düzgün cümləni seç:',
          options: [
            'I think they won\'t come.',
            'I don\'t think they will come.',
            'I not think they will come.',
          ],
          answer: 'I don\'t think they will come.',
        },
        {
          q: 'Hansı cümlədə will düzgün işlədilir?',
          options: [
            '\'The phone is ringing!\' — \'I\'m going to answer it.\'',
            '\'The phone is ringing!\' — \'I\'ll answer it.\'',
            '\'The phone is ringing!\' — \'I answer it.\'',
          ],
          answer: '\'The phone is ringing!\' — \'I\'ll answer it.\'',
        },
        {
          q: 'Hansı cümlədə going to düzgün işlədilir?',
          options: [
            'Look at those clouds! It will rain!',
            'Look at those clouds! It\'s going to rain!',
            'Look at those clouds! It rains!',
          ],
          answer: 'Look at those clouds! It\'s going to rain!',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'What will you do tonight?',
            'What will you to do tonight?',
            'What will you did tonight?',
          ],
          answer: 'What will you do tonight?',
        },
        {
          q: '"How long ___ you ___ away?" — boşluqlara nə gəlir?',
          options: ['do / be', 'will / be', 'will / been'],
          answer: 'will / be',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'will — bütün şəxslər üçün:',                                   tr: 'will (dəyişmir)',                      wrong: 'will / wills'                          },
  { en: 'will-dən sonra fel necə olur?',                                 tr: 'Sadə forma',                          wrong: 'to + verb'                             },
  { en: 'will not — qısa forması:',                                      tr: 'won\'t',                              wrong: 'willn\'t'                              },
  { en: 'Danışıq anında verilmiş qərar — hansı quruluş?',               tr: 'will',                                wrong: 'going to'                              },
  { en: '"The phone is ringing!" → düzgün cavab:',                       tr: 'I\'ll answer it.',                    wrong: 'I\'m going to answer it.'              },
  { en: 'Vəd ifadəsi — düzgün cümlə:',                                  tr: 'I won\'t tell anyone. I promise.',    wrong: 'I\'m not going to tell anyone.'        },
  { en: 'Proqnoz — şəxsi fikir əsasında:',                              tr: 'I think it will rain.',               wrong: 'I think it is going to rain.'          },
  { en: 'Görünən əlamətə əsasən proqnoz:',                              tr: 'going to',                            wrong: 'will'                                  },
  { en: 'will — sual quruluşu:',                                         tr: 'Will + Subject + Verb?',              wrong: 'Subject + will + Verb?'                },
  { en: '"Will you help me?" — bəli cavabı:',                            tr: 'Yes, I will.',                        wrong: 'Yes, I will help.'                     },
  { en: '"Will it snow?" — xeyr cavabı:',                                tr: 'No, it won\'t.',                      wrong: 'No, it willn\'t.'                      },
  { en: 'Mənfi proqnoz üçün düzgün forma:',                              tr: 'I don\'t think they will come.',      wrong: 'I think they won\'t come.'             },
  { en: '"What ___ you do tonight?" — boşluğa nə gəlir?',              tr: 'will',                                wrong: 'are going to'                          },
  { en: '"How long ___ you ___ away?" — boşluqlara nə gəlir?',         tr: 'will / be',                           wrong: 'will / been'                           },
  { en: 'Düzgün: She ___probably be late.',                              tr: 'will',                                wrong: 'wills'                                 },
  { en: 'Düzgün: I ___ tell anyone. I promise.',                         tr: 'won\'t',                              wrong: 'am not going to'                       },
  { en: 'Əvvəlcədən planlaşdırılmış iş — hansı quruluş?',              tr: 'going to',                            wrong: 'will'                                  },
  { en: 'Düzgün: Will you ___ at home tonight?',                         tr: 'be',                                  wrong: 'to be'                                 },
  { en: 'Düzgün: I think Brazil ___ win.',                               tr: 'will',                                wrong: 'is going to'                           },
  { en: '"I\'m cold." — indi qərar verilir, düzgün cavab:',             tr: 'I\'ll close the window.',             wrong: 'I\'m going to close the window.'       },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən sənə kömək edəcəyəm.',
      words: ['I\'ll', 'help', 'you', 'to', 'helping', 'won\'t'],
      answer: ['I\'ll', 'help', 'you'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O sabah gec gələcək.',
      words: ['She', 'will', 'be', 'late', 'tomorrow', 'comes', 'to'],
      answer: ['She', 'will', 'be', 'late', 'tomorrow'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən heç kimə deməyəcəyəm. Söz verirəm.',
      words: ['I', 'won\'t', 'tell', 'anyone', 'I', 'promise', 'told', 'will'],
      answer: ['I', 'won\'t', 'tell', 'anyone', 'I', 'promise'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fikirləşirəm ki, yağış yağacaq.',
      words: ['I', 'think', 'it', 'will', 'rain', 'tomorrow', 'rains', 'going'],
      answer: ['I', 'think', 'it', 'will', 'rain', 'tomorrow'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam evdə olacaqsanmı?',
      words: ['Will', 'you', 'be', 'at', 'home', 'tonight', 'to', 'Do'],
      answer: ['Will', 'you', 'be', 'at', 'home', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fikirləşmirəm ki, onlar gələcək.',
      words: ['I', 'don\'t', 'think', 'they', 'will', 'come', 'won\'t', 'think'],
      answer: ['I', 'don\'t', 'think', 'they', 'will', 'come'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gecə nə edəcəksən?',
      words: ['What', 'will', 'you', 'do', 'tonight', 'did', 'to'],
      answer: ['What', 'will', 'you', 'do', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, çox güman ki, gec qalacaq.',
      words: ['She\'ll', 'probably', 'be', 'late', 'to', 'goes', 'will'],
      answer: ['She\'ll', 'probably', 'be', 'late'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Narahat olma. Hər şey yaxşı olacaq.',
      words: ['Don\'t', 'worry', 'Everything', 'will', 'be', 'OK', 'to', 'won\'t'],
      answer: ['Don\'t', 'worry', 'Everything', 'will', 'be', 'OK'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nə qədər vaxt uzaqda olacaqsan?',
      words: ['How', 'long', 'will', 'you', 'be', 'away', 'been', 'do'],
      answer: ['How', 'long', 'will', 'you', 'be', 'away'],
    },
  ],
},
      
{ type: 'section_divider', title: 'can / can\'t — bacarıq' },

// ── UNIT 24 — can / can't (Bacarıq) ──────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'can / can\'t — Quruluş və Bacarıq (Dərs 1)',
  cards: [

    // ── Ekran 1: can quruluşu ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'can / can\'t — quruluş',
      content: 'can bacarıq, imkan və icazə bildirmək üçün işlədilir.\ncan\'t (cannot) isə bacarmazlıq bildirir.\n\nQuruluş: Subject + can/can\'t + Verb (sadə forma)\n\n❗ can heç vaxt -s almır. Arxasında həmişə sadə fel gəlir!',
      table: [
        ['Növ',    'Subject',                              'Modal', 'Verb'],
        ['Müsbət', 'I / he / she / it / we / you / they', 'can',   'swim / drive / speak'],
        ['İnkar',  'I / he / she / it / we / you / they', 'can\'t','swim / drive / speak'],
        ['Sual',   'Can + Subject',                        '—',    'swim / drive / speak?'],
      ],
      tip: 'can bütün şəxslər üçün eynidir — Present Simple-dən fərqli olaraq he/she üçün -s almır.',
    },

    // ── Ekran 2: can-dan sonra sadə forma ────────────────────────────────────
    {
      type: 'lesson',
      title: 'can-dan sonra — sadə forma!',
      content: 'can / can\'t-dan sonra fel sadə formada qalır — to olmur, -s olmur:',
      examples: [
        { word: 'She can swim.',          az: '✅ Düzgün — can + swim'          },
        { word: 'She cans swim.',         az: '❌ Yanlış — cans olmaz'           },
        { word: 'She can swims.',         az: '❌ Yanlış — swims olmaz'          },
        { word: 'I can\'t drive.',        az: '✅ Düzgün — can\'t + drive'      },
        { word: 'I can\'t to drive.',     az: '❌ Yanlış — to olmaz'             },
        { word: 'Can you help me?',       az: '✅ Düzgün — Can + you + help'    },
        { word: 'Can you to help me?',    az: '❌ Yanlış — to olmaz'             },
        { word: 'He can drives well.',    az: '❌ Yanlış — drives olmaz'         },
      ],
      tip: 'can artıq modal feldir — arxasında gələn fel heç bir dəyişiklik almır!',
    },

    // ── Ekran 3: can — Bacarıq nümunələri ────────────────────────────────────
    {
      type: 'lesson',
      title: 'can / can\'t — Bacarıq cümlələri',
      content: 'Bacarıq və bacarmazlıq ifadə edən nümunə cümlələr:',
      table: [
        ['Müsbət',                                    'İnkar'],
        ['I can swim.',                               'I can\'t dive.'],
        ['She can speak French very well.',           'She can\'t speak German.'],
        ['He can drive.',                             'He can\'t ride a motorbike.'],
        ['We can see the mountains from here.',       'We can\'t see the sea.'],
        ['She can run very fast.',                    'She can\'t run a marathon.'],
        ['They can play the guitar.',                 'They can\'t play the piano.'],
      ],
      tip: 'I can swim but I can\'t dive. — "but" ilə bacarıq və bacarmazlığı birlikdə ifadə etmək olar.',
    },

    // ── Ekran 4: can — İcazə və Xahiş ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'can — İcazə və Xahiş',
      content: 'can bacarıqdan başqa icazə və xahiş üçün də işlədilir:',
      examples: [
        { word: 'Can I sit here?',               az: 'icazə — otura bilərəmmi?'       },
        { word: 'Can I use your phone?',          az: 'icazə — telefondan istifadə'    },
        { word: 'Can I open the window?',         az: 'icazə — pəncərəni açım?'       },
        { word: 'Can you help me, please?',       az: 'xahiş — köməklik istəmək'      },
        { word: 'Can you pass the salt?',         az: 'xahiş — bir şey ötürmək'       },
        { word: 'You can borrow my umbrella.',    az: 'icazə — vermək'                },
        { word: 'You can\'t park here.',          az: 'icazəsizlik — qadağan'          },
      ],
      tip: 'Can I...? — icazə istəmək üçün. Can you...? — xahiş etmək üçün.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She cans speak French.',
            'She can speaks French.',
            'She can speak French.',
          ],
          answer: 'She can speak French.',
        },
        {
          q: 'can-dan sonra fel necə olur?',
          options: ['Sadə forma (swim)', 'to + verb (to swim)', '-ing forması (swimming)'],
          answer: 'Sadə forma (swim)',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'He can\'t to drive.',
            'He can\'t drives.',
            'He can\'t drive.',
          ],
          answer: 'He can\'t drive.',
        },
        {
          q: 'can — "he / she / it" ilə necə dəyişir?',
          options: ['cans olur', 'Dəyişmir — can qalır', 'is can olur'],
          answer: 'Dəyişmir — can qalır',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Can you to help me?',
            'Can you help me?',
            'Can you helping me?',
          ],
          answer: 'Can you help me?',
        },
        {
          q: 'İcazə istəmək üçün hansı cümlə işlədilir?',
          options: [
            'I can sit here.',
            'Can I sit here?',
            'Can you sit here?',
          ],
          answer: 'Can I sit here?',
        },
        {
          q: 'cannot — qısa forması:',
          options: ['can\'t', 'won\'t', 'couldn\'t'],
          answer: 'can\'t',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I can not find my keys. *(iki söz)*',
            'I can\'t find my keys.',
            'I cann\'t find my keys.',
          ],
          answer: 'I can\'t find my keys.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'can — Sual, Qısa Cavab və Sual Sözləri (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'can — Sual quruluşu',
      content: 'Sualda can subject-dən əvvələ keçir:\n\nCan + Subject + Verb (sadə forma)?\n\n❗ Sualda da fel sadə formada qalır — to olmur!',
      table: [
        ['Köməkçi', 'Subject',                              'Verb'],
        ['Can',     'I / he / she / it / we / you / they', 'swim / drive / speak?'],
      ],
      tip: 'Can she speak English? ✅ — Can she to speak English? ❌ — Can she speaks English? ❌',
    },

    // ── Ekran 2: Qısa cavablar ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar',
      content: 'Qısa cavabda can / can\'t işlədilir — fel təkrarlanmır:',
      table: [
        ['Sual',               'Bəli',          'Xeyr'],
        ['Can you swim?',      'Yes, I can.',   'No, I can\'t.'],
        ['Can she drive?',     'Yes, she can.', 'No, she can\'t.'],
        ['Can he cook?',       'Yes, he can.',  'No, he can\'t.'],
        ['Can they come?',     'Yes, they can.','No, they can\'t.'],
        ['Can we park here?',  'Yes, you can.', 'No, you can\'t.'],
      ],
      tip: '"Yes, I can swim." demə — sadəcə "Yes, I can." kifayətdir.',
    },

    // ── Ekran 3: Sual sözləri ilə can ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə can',
      content: 'Sual sözü əvvələ gəlir, sonra can, sonra subject, sonra sadə fel:',
      examples: [
        { word: 'What can you cook?',              az: 'What + can + you + cook'          },
        { word: 'Where can I buy tickets?',        az: 'Where + can + I + buy'            },
        { word: 'When can you meet me?',           az: 'When + can + you + meet'          },
        { word: 'How well can she speak French?',  az: 'How well + can + she + speak'     },
        { word: 'Who can help me?',                az: 'Who + can + help'                 },
        { word: 'Where can we park?',              az: 'Where + can + we + park'          },
        { word: 'What languages can he speak?',    az: 'What + can + he + speak'          },
      ],
      tip: 'Sual sözü → can → Subject → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Ekran 4: Səhv cümlələr — düzəliş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'can ilə bağlı ən çox edilən səhvlər:',
      examples: [
        { word: 'She cans swim. → She can swim.',            az: '❌ cans → ✅ can'              },
        { word: 'Can you to help me? → Can you help me?',   az: '❌ to olmaz → ✅ sadə forma'   },
        { word: 'I can\'t to swim. → I can\'t swim.',       az: '❌ to olmaz → ✅ sadə forma'   },
        { word: 'He can drives. → He can drive.',           az: '❌ drives → ✅ drive'          },
        { word: 'Can she speaks? → Can she speak?',         az: '❌ speaks → ✅ speak'          },
        { word: 'I can not go. → I can\'t go.',             az: '❌ iki söz → ✅ can\'t'        },
      ],
      tip: 'Əsas qayda: can / can\'t-dan sonra həmişə sadə fel, heç vaxt to + verb olmaz.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Can she speaks English?',
            'Can she to speak English?',
            'Can she speak English?',
          ],
          answer: 'Can she speak English?',
        },
        {
          q: '"Can you swim?" — bəli cavabı:',
          options: ['Yes, I can swim.', 'Yes, I can.', 'Yes, I do.'],
          answer: 'Yes, I can.',
        },
        {
          q: '"Can they come?" — xeyr cavabı:',
          options: ['No, they can\'t.', 'No, they don\'t.', 'No, they won\'t.'],
          answer: 'No, they can\'t.',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'What can you to cook?',
            'What you can cook?',
            'What can you cook?',
          ],
          answer: 'What can you cook?',
        },
        {
          q: 'Səhv cümləni tap:',
          options: [
            'She can speak three languages.',
            'He can drives very well.',
            'Can I use your phone?',
          ],
          answer: 'He can drives very well.',
        },
        {
          q: '"Can we park here?" — icazə verilir:',
          options: ['Yes, we can.', 'Yes, you can.', 'Yes, they can.'],
          answer: 'Yes, you can.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Where can I to buy tickets?',
            'Where can I buy tickets?',
            'Where I can buy tickets?',
          ],
          answer: 'Where can I buy tickets?',
        },
        {
          q: '"How well ___ she ___ French?" — boşluqlara nə gəlir?',
          options: ['does / speak', 'can / speaks', 'can / speak'],
          answer: 'can / speak',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'can — bütün şəxslər üçün:',                                    tr: 'can (dəyişmir)',                   wrong: 'can / cans'                            },
  { en: 'can-dan sonra fel necə olur?',                                  tr: 'Sadə forma',                      wrong: 'to + verb'                             },
  { en: 'cannot — danışıq qısa forması:',                                tr: 'can\'t',                          wrong: 'cann\'t'                               },
  { en: 'Bacarıq bildirən cümləni seç:',                                 tr: 'She can speak French.',           wrong: 'She cans speak French.'                },
  { en: 'Düzgün: He ___ drive. He passed his test.',                     tr: 'can',                             wrong: 'cans'                                  },
  { en: 'Düzgün: I ___ find my keys. Have you seen them?',              tr: 'can\'t',                          wrong: 'can\'t to'                             },
  { en: 'İcazə istəmək üçün düzgün sual:',                              tr: 'Can I sit here?',                 wrong: 'Can I to sit here?'                    },
  { en: 'Xahiş etmək üçün düzgün sual:',                                tr: 'Can you help me?',                wrong: 'Can you to help me?'                   },
  { en: 'can — sual quruluşu:',                                          tr: 'Can + Subject + Verb?',           wrong: 'Subject + can + Verb?'                 },
  { en: '"Can you swim?" — bəli cavabı:',                                tr: 'Yes, I can.',                     wrong: 'Yes, I can swim.'                      },
  { en: '"Can she drive?" — xeyr cavabı:',                               tr: 'No, she can\'t.',                 wrong: 'No, she don\'t.'                       },
  { en: 'Sual sözü ilə düzgün sıra:',                                    tr: 'Wh- + can + Subject + Verb',      wrong: 'Wh- + Subject + can + Verb'            },
  { en: '"What ___ you ___?" — boşluqlara nə gəlir? (cook)',            tr: 'can / cook',                      wrong: 'can / cooks'                           },
  { en: '"Where ___ I ___ tickets?" — boşluqlara nə gəlir? (buy)',      tr: 'can / buy',                       wrong: 'can / to buy'                          },
  { en: 'Düzgün: She ___ run very fast.',                                tr: 'can',                             wrong: 'cans'                                  },
  { en: 'Düzgün: Can she ___ English?',                                  tr: 'speak',                           wrong: 'speaks'                                },
  { en: 'Düzgün: They ___ come tonight. They\'re busy.',                 tr: 'can\'t',                          wrong: 'can\'t to'                             },
  { en: '"How well ___ she ___ French?" — boşluqlara nə gəlir?',        tr: 'can / speak',                     wrong: 'can / speaks'                          },
  { en: 'Düzgün: We ___ see the mountains from here.',                   tr: 'can',                             wrong: 'can to'                                },
  { en: 'Düzgün: You ___ park here. *(qadağa)*',                        tr: 'can\'t',                          wrong: 'don\'t'                                },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən üzə bilirəm amma dalğıc edə bilmirəm.',
      words: ['I', 'can', 'swim', 'but', 'I', 'can\'t', 'dive', 'to', 'dives'],
      answer: ['I', 'can', 'swim', 'but', 'I', 'can\'t', 'dive'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O fransız dilini çox yaxşı danışa bilir.',
      words: ['She', 'can', 'speak', 'French', 'very', 'well', 'speaks', 'cans'],
      answer: ['She', 'can', 'speak', 'French', 'very', 'well'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O bu gecə partiyaya gələ bilməz.',
      words: ['He', 'can\'t', 'come', 'to', 'the', 'party', 'tonight', 'comes', 'to'],
      answer: ['He', 'can\'t', 'come', 'to', 'the', 'party', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Telefonundan istifadə edə bilərəmmi?',
      words: ['Can', 'I', 'use', 'your', 'phone', 'to', 'uses', 'Do'],
      answer: ['Can', 'I', 'use', 'your', 'phone'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənə kömək edə bilərsənmi?',
      words: ['Can', 'you', 'help', 'me', 'to', 'helps', 'Do'],
      answer: ['Can', 'you', 'help', 'me'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz pəncərəmizdən dağları görə bilirik.',
      words: ['We', 'can', 'see', 'the', 'mountains', 'from', 'our', 'window', 'sees', 'to'],
      answer: ['We', 'can', 'see', 'the', 'mountains', 'from', 'our', 'window'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən nə bişirə bilərsən?',
      words: ['What', 'can', 'you', 'cook', 'to', 'cooks', 'do'],
      answer: ['What', 'can', 'you', 'cook'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O çox sürətli qaça bilir.',
      words: ['She', 'can', 'run', 'very', 'fast', 'runs', 'cans', 'to'],
      answer: ['She', 'can', 'run', 'very', 'fast'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən açarlarımı tapa bilmirəm.',
      words: ['I', 'can\'t', 'find', 'my', 'keys', 'to', 'found', 'don\'t'],
      answer: ['I', 'can\'t', 'find', 'my', 'keys'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O fransız dilini nə qədər yaxşı danışa bilir?',
      words: ['How', 'well', 'can', 'she', 'speak', 'French', 'speaks', 'to'],
      answer: ['How', 'well', 'can', 'she', 'speak', 'French'],
    },
  ],
},
      
{ type: 'section_divider', title: 'could — keçmişdə bacarıq və nəzakətli xahiş' },

// ── UNIT 25 — could (Keçmişdə Bacarıq + Nəzakətli Xahiş) ────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'could / couldn\'t — Quruluş və Keçmiş Bacarıq (Dərs 1)',
  cards: [

    // ── Ekran 1: could quruluşu ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'could / couldn\'t — quruluş',
      content: 'could — can-in keçmiş zamanıdır. Keçmişdə bacarılan şeyləri ifadə edir.\ncouldn\'t (could not) — bacarmazlığı bildirir.\n\nQuruluş: Subject + could/couldn\'t + Verb (sadə forma)\n\n❗ could-dan sonra fel həmişə sadə formada olur — to olmur!',
      table: [
        ['Növ',    'Subject',                              'Modal',     'Verb'],
        ['Müsbət', 'I / he / she / it / we / you / they', 'could',     'swim / run / speak'],
        ['İnkar',  'I / he / she / it / we / you / they', 'couldn\'t', 'swim / run / speak'],
        ['Sual',   'Could + Subject',                     '—',         'swim / run / speak?'],
      ],
      tip: 'could not = couldn\'t. could bütün şəxslər üçün eynidir — dəyişmir.',
    },

    // ── Ekran 2: could-dan sonra sadə forma ──────────────────────────────────
    {
      type: 'lesson',
      title: 'could-dan sonra — sadə forma!',
      content: 'could / couldn\'t-dan sonra fel sadə formada qalır — to olmur, -s/-ed olmur:',
      examples: [
        { word: 'She could speak French.',          az: '✅ Düzgün — could + speak'       },
        { word: 'She could speaks French.',         az: '❌ Yanlış — speaks olmaz'         },
        { word: 'I couldn\'t sleep.',               az: '✅ Düzgün — couldn\'t + sleep'   },
        { word: 'I couldn\'t to sleep.',            az: '❌ Yanlış — to olmaz'             },
        { word: 'Could you help me?',               az: '✅ Düzgün — Could + you + help'  },
        { word: 'Could you to help me?',            az: '❌ Yanlış — to olmaz'             },
        { word: 'He could run very fast.',          az: '✅ Düzgün — could + run'          },
        { word: 'He could ran very fast.',          az: '❌ Yanlış — ran olmaz'            },
      ],
      tip: 'could artıq keçmiş məna daşıyır — felə ayrıca keçmiş forma vermə!',
    },

    // ── Ekran 3: Keçmişdə bacarıq — nümunələr ────────────────────────────────
    {
      type: 'lesson',
      title: 'could / couldn\'t — Keçmiş bacarıq',
      content: 'Keçmişdə bacarılan və bacarılmayan şeyləri ifadə edən cümlələr:',
      table: [
        ['could — bacarırdı',                                  'couldn\'t — bacarmırdı'],
        ['When I was young, I could run very fast.',           'Now I can\'t run fast.'],
        ['She could speak French as a child.',                 'She couldn\'t speak German.'],
        ['I could play chess when I was 8.',                   'I couldn\'t play cards.'],
        ['My grandmother could speak four languages.',         'She couldn\'t drive.'],
        ['We could see the mountains from the hotel.',         'We couldn\'t see the sea.'],
        ['He could eat anything as a child.',                  'He couldn\'t cook at all.'],
      ],
      tip: 'When I was young... / As a child... / At school... — could ilə tez-tez işlədilən ifadələr.',
    },

    // ── Ekran 4: could vs can — fərq ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'can vs could — fərq',
      content: 'can — indiki bacarıq. could — keçmiş bacarıq:',
      examples: [
        { word: 'I can swim now.',                            az: 'can — indi bacarır'              },
        { word: 'I could swim when I was 7.',                 az: 'could — keçmişdə bacarırdı'     },
        { word: 'She can speak three languages.',             az: 'can — indi bacarır'              },
        { word: 'She could speak French as a child.',         az: 'could — uşaqkən bacarırdı'      },
        { word: 'He couldn\'t walk after the accident.',      az: 'couldn\'t — keçmişdə bacarmırdı'},
        { word: 'Now he can walk again.',                     az: 'can — indi bacarır'              },
      ],
      tip: 'could = keçmişdə. can = indi. İkisi birlikdə: "I could swim then but I can\'t now."',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She could speaks French as a child.',
            'She could speak French as a child.',
            'She could to speak French as a child.',
          ],
          answer: 'She could speak French as a child.',
        },
        {
          q: 'could-dan sonra fel necə olur?',
          options: ['Sadə forma (run)', 'Keçmiş forma (ran)', 'to + verb (to run)'],
          answer: 'Sadə forma (run)',
        },
        {
          q: 'could not — qısa forması:',
          options: ['coudn\'t', 'couldn\'t', 'can\'t'],
          answer: 'couldn\'t',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'He couldn\'t to walk after the accident.',
            'He couldn\'t walked after the accident.',
            'He couldn\'t walk after the accident.',
          ],
          answer: 'He couldn\'t walk after the accident.',
        },
        {
          q: 'Hansı cümlə keçmiş bacarığı ifadə edir?',
          options: [
            'I can play the piano.',
            'I could play the piano when I was at school.',
            'I am going to play the piano.',
          ],
          answer: 'I could play the piano when I was at school.',
        },
        {
          q: 'could — bütün şəxslər üçün necə dəyişir?',
          options: ['could / coulds', 'could (dəyişmir)', 'could / could not'],
          answer: 'could (dəyişmir)',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'When I was young, I can run fast.',
            'When I was young, I could run fast.',
            'When I was young, I could ran fast.',
          ],
          answer: 'When I was young, I could run fast.',
        },
        {
          q: '"She couldn\'t come because she was ill." — bu cümlə nəyi bildirir?',
          options: ['İndiki bacarıqsızlıq', 'Keçmişdə bacarmazlıq', 'Nəzakətli xahiş'],
          answer: 'Keçmişdə bacarmazlıq',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'could — Sual, Qısa Cavab və Nəzakətli Xahiş (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu və qısa cavablar ───────────────────────────────
    {
      type: 'lesson',
      title: 'could — Sual və Qısa Cavablar',
      content: 'Sualda could subject-dən əvvələ keçir.\nQısa cavabda could / couldn\'t işlədilir:',
      table: [
        ['Sual',                            'Bəli',            'Xeyr'],
        ['Could you swim at 5?',            'Yes, I could.',   'No, I couldn\'t.'],
        ['Could she speak French?',         'Yes, she could.', 'No, she couldn\'t.'],
        ['Could he find the hotel?',        'Yes, he could.',  'No, he couldn\'t.'],
        ['Could they come?',                'Yes, they could.','No, they couldn\'t.'],
      ],
      tip: '"Yes, I could swim." demə — sadəcə "Yes, I could." kifayətdir.',
    },

    // ── Ekran 2: Nəzakətli xahiş ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'could — Nəzakətli Xahiş',
      content: 'could — can-dən daha nəzakətlidir. Rəsmi vəziyyətlərdə işlədilir:',
      examples: [
        { word: 'Could you help me, please?',             az: 'nəzakətli xahiş — could you'      },
        { word: 'Can you help me?',                       az: 'adi xahiş — can you'               },
        { word: 'Could you speak more slowly?',           az: 'nəzakətli — anlamıram'             },
        { word: 'Could I use your phone?',                az: 'nəzakətli icazə — could I'         },
        { word: 'Could you pass the salt, please?',       az: 'nəzakətli xahiş — stolda'         },
        { word: 'Could I have a glass of water?',         az: 'nəzakətli — restorand/otaqda'     },
        { word: 'Could you tell me the way to the station?', az: 'nəzakətli — yol soruşmaq'     },
      ],
      tip: 'Could you...? = Can you...?-dən daha nəzakətlidir. Rəsmi yerlərdə could üstün tutulur.',
    },

    // ── Ekran 3: Sual sözləri ilə could ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə could',
      content: 'Sual sözü əvvələ gəlir, sonra could, sonra subject, sonra sadə fel:',
      examples: [
        { word: 'What could you do when you were young?',   az: 'What + could + you + do'          },
        { word: 'How well could she speak English?',        az: 'How well + could + she + speak'   },
        { word: 'Why couldn\'t they come to the party?',    az: 'Why + couldn\'t + they + come'    },
        { word: 'Where could we find a good restaurant?',   az: 'Where + could + we + find'        },
        { word: 'When could you play chess?',               az: 'When + could + you + play'        },
        { word: 'How many languages could she speak?',      az: 'How many + could + she + speak'   },
      ],
      tip: 'Sual sözü → could → Subject → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Ekran 4: can vs could — xahiş müqayisəsi ─────────────────────────────
    {
      type: 'lesson',
      title: 'can vs could — xahiş müqayisəsi',
      content: 'Eyni xahişi can və could ilə ifadə etmək olar — could daha rəsmi və nəzakətlidir:',
      table: [
        ['can — adi xahiş',            'could — nəzakətli xahiş'],
        ['Can you help me?',           'Could you help me, please?'],
        ['Can I sit here?',            'Could I sit here?'],
        ['Can you open the door?',     'Could you open the door?'],
        ['Can I use your pen?',        'Could I use your pen?'],
        ['Can you speak slowly?',      'Could you speak more slowly?'],
        ['Can I have the menu?',       'Could I have the menu, please?'],
      ],
      tip: 'could xahiş zamanı keçmiş mənası daşımır — sadəcə daha nəzakətli formadır.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Could she to speak French as a child?',
            'Could she speaks French as a child?',
            'Could she speak French as a child?',
          ],
          answer: 'Could she speak French as a child?',
        },
        {
          q: '"Could you swim at 5?" — bəli cavabı:',
          options: ['Yes, I could swim.', 'Yes, I could.', 'Yes, I can.'],
          answer: 'Yes, I could.',
        },
        {
          q: '"Could they find the hotel?" — xeyr cavabı:',
          options: ['No, they couldn\'t.', 'No, they can\'t.', 'No, they didn\'t.'],
          answer: 'No, they couldn\'t.',
        },
        {
          q: 'Nəzakətli xahişi seç:',
          options: [
            'Can you help me?',
            'Could you help me, please?',
            'Help me, please.',
          ],
          answer: 'Could you help me, please?',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Could I to use your phone?',
            'Could I use your phone?',
            'Could I using your phone?',
          ],
          answer: 'Could I use your phone?',
        },
        {
          q: '"Could you speak more slowly?" — bu cümlə nədir?',
          options: ['Keçmiş bacarıq', 'Nəzakətli xahiş', 'İcazə vermək'],
          answer: 'Nəzakətli xahiş',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Why couldn\'t they to come?',
            'Why couldn\'t they come?',
            'Why they couldn\'t come?',
          ],
          answer: 'Why couldn\'t they come?',
        },
        {
          q: '"How well ___ she ___ English?" — boşluqlara nə gəlir?',
          options: ['can / speaks', 'could / speak', 'could / spoke'],
          answer: 'could / speak',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'could — nəyin keçmiş zamanıdır?',                              tr: 'can',                             wrong: 'will'                                  },
  { en: 'could-dan sonra fel necə olur?',                               tr: 'Sadə forma',                      wrong: 'Keçmiş forma'                          },
  { en: 'could not — qısa forması:',                                    tr: 'couldn\'t',                       wrong: 'coudn\'t'                              },
  { en: 'Keçmiş bacarıq — düzgün cümlə:',                              tr: 'She could speak French as a child.', wrong: 'She could speaks French.'           },
  { en: 'Düzgün: When I was young, I ___ run very fast.',               tr: 'could',                           wrong: 'can'                                   },
  { en: 'Düzgün: He ___ walk for two months after the accident.',       tr: 'couldn\'t',                       wrong: 'can\'t'                                },
  { en: 'Düzgün: I ___ sleep last night. I was too worried.',           tr: 'couldn\'t',                       wrong: 'couldn\'t to'                          },
  { en: 'Nəzakətli xahiş — düzgün cümlə:',                             tr: 'Could you help me, please?',      wrong: 'Could you to help me?'                 },
  { en: 'could — sual quruluşu:',                                       tr: 'Could + Subject + Verb?',         wrong: 'Subject + could + Verb?'               },
  { en: '"Could you swim at 5?" — bəli cavabı:',                        tr: 'Yes, I could.',                   wrong: 'Yes, I could swim.'                    },
  { en: '"Could she come?" — xeyr cavabı:',                             tr: 'No, she couldn\'t.',              wrong: 'No, she can\'t.'                       },
  { en: 'Sual sözü ilə düzgün sıra:',                                   tr: 'Wh- + could + Subject + Verb',    wrong: 'Wh- + Subject + could + Verb'          },
  { en: '"What ___ you do when you were young?" — boşluğa nə gəlir?',  tr: 'could',                           wrong: 'can'                                   },
  { en: '"How well ___ she ___ English?" — boşluqlara nə gəlir?',      tr: 'could / speak',                   wrong: 'could / spoke'                         },
  { en: 'Düzgün: Could I ___ your phone?',                              tr: 'use',                             wrong: 'to use'                                },
  { en: 'Düzgün: Could you ___ more slowly?',                           tr: 'speak',                           wrong: 'to speak'                              },
  { en: 'can vs could — xahiş zamanı hansı daha nəzakətlidir?',         tr: 'could',                           wrong: 'can'                                   },
  { en: 'Düzgün: My grandmother ___ speak four languages.',             tr: 'could',                           wrong: 'could to'                              },
  { en: 'Düzgün: They ___ find the hotel. They got lost.',              tr: 'couldn\'t',                       wrong: 'can\'t'                                },
  { en: 'Düzgün: We ___ see the mountains from the window.',            tr: 'could',                           wrong: 'could to'                              },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaq ikən çox sürətli qaça bilirdim.',
      words: ['When', 'I', 'was', 'young', 'I', 'could', 'run', 'very', 'fast', 'ran', 'can'],
      answer: ['When', 'I', 'was', 'young', 'I', 'could', 'run', 'very', 'fast'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənim nənəm dörd dil danışa bilirdi.',
      words: ['My', 'grandmother', 'could', 'speak', 'four', 'languages', 'spoke', 'can'],
      answer: ['My', 'grandmother', 'could', 'speak', 'four', 'languages'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O xəstə olduğuna görə partiyaya gələ bilmədi.',
      words: ['She', 'couldn\'t', 'come', 'to', 'the', 'party', 'because', 'she', 'was', 'ill', 'came', 'to'],
      answer: ['She', 'couldn\'t', 'come', 'to', 'the', 'party', 'because', 'she', 'was', 'ill'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənə kömək edə bilərsənmi, xahişən?',
      words: ['Could', 'you', 'help', 'me', 'please', 'to', 'helps', 'Can'],
      answer: ['Could', 'you', 'help', 'me', 'please'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Telefonunuzdan istifadə edə bilərəmmi?',
      words: ['Could', 'I', 'use', 'your', 'phone', 'to', 'uses', 'Can'],
      answer: ['Could', 'I', 'use', 'your', 'phone'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Daha yavaş danışa bilərsənmi?',
      words: ['Could', 'you', 'speak', 'more', 'slowly', 'to', 'speaks', 'Can'],
      answer: ['Could', 'you', 'speak', 'more', 'slowly'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uşaq ikən nə edə bilərdin?',
      words: ['What', 'could', 'you', 'do', 'when', 'you', 'were', 'young', 'did', 'can'],
      answer: ['What', 'could', 'you', 'do', 'when', 'you', 'were', 'young'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar oteli tapa bilmədilər. Yollarını itirdilər.',
      words: ['They', 'couldn\'t', 'find', 'the', 'hotel', 'They', 'got', 'lost', 'found', 'can\'t'],
      answer: ['They', 'couldn\'t', 'find', 'the', 'hotel', 'They', 'got', 'lost'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, 5 yaşında üzə bilirdimi?',
      words: ['Could', 'she', 'swim', 'when', 'she', 'was', 'five', 'swam', 'Can'],
      answer: ['Could', 'she', 'swim', 'when', 'she', 'was', 'five'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O nə qədər yaxşı ingilis dilini danışa bilirdi?',
      words: ['How', 'well', 'could', 'she', 'speak', 'English', 'spoke', 'can'],
      answer: ['How', 'well', 'could', 'she', 'speak', 'English'],
    },
  ],
},
      
{ type: 'section_divider', title: 'must / have to — vaciblik' },

// ── UNIT 32–33 — must / have to (Vaciblik) ───────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'must / have to — Quruluş və Fərq (Dərs 1)',
  cards: [

    // ── Ekran 1: must və have to quruluşu ────────────────────────────────────
    {
      type: 'lesson',
      title: 'must / have to — quruluş',
      content: 'must və have to hər ikisi vaciblik bildirir.\n\nQuruluş:\nSubject + must + Verb (sadə forma)\nSubject + have to / has to + Verb (sadə forma)\n\n❗ must-dan sonra fel sadə formada olur — to olmaz, -s olmaz!',
      table: [
        ['Subject',              'must',  'have to / has to'],
        ['I / we / you / they', 'must',  'have to'],
        ['he / she / it',       'must',  'has to'],
      ],
      tip: 'must bütün şəxslər üçün eynidir. has to yalnız he/she/it ilə işlədilir.',
    },

    // ── Ekran 2: must vs have to — əsas fərq ─────────────────────────────────
    {
      type: 'lesson',
      title: 'must vs have to — fərq',
      content: 'must — şəxsi fikir, özün belə düşünürsən.\nhave to — xarici qayda, başqası tərəfindən tələb olunur:',
      table: [
        ['must — şəxsi qərar',                          'have to — xarici qayda'],
        ['I must study more. *(özüm bilirəm)*',         'I have to wear a uniform. *(iş qaydası)*'],
        ['I must call my mother. *(özüm istəyirəm)*',   'She has to be at school at 8. *(məktəb)*'],
        ['You must see this film! *(tövsiyə)*',         'In Britain you have to drive on the left. *(qanun)*'],
        ['We must leave soon. *(özümüz bilirik)*',      'He has to take medicine twice a day. *(həkim)*'],
      ],
      tip: 'Sadə qayda: öz qərarın → must. Başqasının qaydası → have to.',
    },

    // ── Ekran 3: must — nümunə cümlələri ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'must — nümunə cümlələri',
      content: 'must — şəxsi vaciblik, tövsiyə, güclü ehtimal:',
      examples: [
        { word: 'I must go to the bank. I have no money.',    az: 'şəxsi qərar — pulum yoxdur'      },
        { word: 'You must try this dish — it\'s delicious!',  az: 'tövsiyə — sına, çox dadlıdır'    },
        { word: 'I must remember to call her.',               az: 'şəxsi vaciblik — unutmamalıyam'  },
        { word: 'We must leave soon or we\'ll miss the bus.', az: 'şəxsi qərar — gecikirsik'        },
        { word: 'You must be tired after such a long trip.',  az: 'güclü ehtimal — yorulmuşsunuz'   },
        { word: 'I must do my homework tonight.',             az: 'şəxsi vaciblik — özüm bilirəm'   },
      ],
      tip: 'must-dan sonra fel sadə forma: must go ✅ — must to go ❌ — musts go ❌',
    },

    // ── Ekran 4: have to / has to — nümunə cümlələri ─────────────────────────
    {
      type: 'lesson',
      title: 'have to / has to — nümunə cümlələri',
      content: 'have to / has to — xarici tələb, qayda, qanun:',
      examples: [
        { word: 'I have to wear a uniform at work.',           az: 'iş qaydası — xarici tələb'         },
        { word: 'She has to be at school at 8 every morning.', az: 'məktəb qaydası — has to'           },
        { word: 'In Britain you have to drive on the left.',   az: 'qanun — ölkə qaydası'              },
        { word: 'He has to take medicine three times a day.',  az: 'həkim göstərişi — has to'          },
        { word: 'Do you have to work on Saturdays?',           az: 'sual — xarici tələb varmı?'        },
        { word: 'They have to finish the report by Friday.',   az: 'iş tələbi — xarici qayda'          },
      ],
      tip: 'he/she/it ilə has to işlədilir — has to work ✅ — have to works ❌',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I must to go now.',
            'I must go now.',
            'I musts go now.',
          ],
          answer: 'I must go now.',
        },
        {
          q: '"he / she / it" ilə have to — hansı forma?',
          options: ['have to', 'has to', 'must to'],
          answer: 'has to',
        },
        {
          q: 'Şəxsi qərar — hansı forma daha uyğundur?',
          options: ['have to', 'must', 'has to'],
          answer: 'must',
        },
        {
          q: 'Xarici qayda — hansı forma daha uyğundur?',
          options: ['must', 'have to / has to', 'mustn\'t'],
          answer: 'have to / has to',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She have to wear a uniform.',
            'She has to wear a uniform.',
            'She has to wears a uniform.',
          ],
          answer: 'She has to wear a uniform.',
        },
        {
          q: 'must-dan sonra fel necə olur?',
          options: ['to + verb (to go)', 'Sadə forma (go)', '-ing forması (going)'],
          answer: 'Sadə forma (go)',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'You must see this film! It\'s amazing.',
            'You must to see this film!',
            'You musts see this film!',
          ],
          answer: 'You must see this film! It\'s amazing.',
        },
        {
          q: '"In Britain you ___ drive on the left." — boşluğa nə gəlir?',
          options: ['must', 'have to', 'has to'],
          answer: 'have to',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'mustn\'t / don\'t have to / had to (Dərs 2)',
  cards: [

    // ── Ekran 1: mustn't vs don't have to — fərq ─────────────────────────────
    {
      type: 'lesson',
      title: 'mustn\'t vs don\'t have to — fərq',
      content: 'Bu iki inkar tamamilə fərqli məna daşıyır!\n\nmustn\'t = qadağandır — etmək olmaz\ndon\'t have to = məcburi deyil — istəsən edə bilərsən',
      table: [
        ['mustn\'t — qadağan',                          'don\'t have to — məcburi deyil'],
        ['You mustn\'t smoke here. *(qadağandır)*',     'You don\'t have to come. *(məcburi deyil)*'],
        ['You mustn\'t tell anyone. *(sirr)*',          'I don\'t have to get up early. *(imtahan yox)*'],
        ['We mustn\'t be late. *(çox vacibdir)*',       'She doesn\'t have to cook tonight. *(istəsə)*'],
        ['You mustn\'t park here. *(qadağa)*',          'He doesn\'t have to wear a tie. *(sərbəstdir)*'],
      ],
      tip: 'mustn\'t ≠ don\'t have to! mustn\'t = etmə! don\'t have to = etməsən də olar.',
    },

    // ── Ekran 2: mustn't və don't have to — nümunələr ────────────────────────
    {
      type: 'lesson',
      title: 'mustn\'t / don\'t have to — nümunələr',
      content: 'Hər iki formanın düzgün işlənmə nümunələri:',
      examples: [
        { word: 'You mustn\'t smoke in the hospital.',          az: 'qadağan — tibb müəssisəsi'        },
        { word: 'You mustn\'t use your phone in the exam.',     az: 'qadağan — imtahan qaydası'        },
        { word: 'I don\'t have to work tomorrow — it\'s Sunday.', az: 'məcburi deyil — bazar günü'   },
        { word: 'She doesn\'t have to cook — we\'ll order food.', az: 'məcburi deyil — seçim var'    },
        { word: 'You mustn\'t park in front of the entrance.',  az: 'qadağan — icazəsiz park'         },
        { word: 'He doesn\'t have to wear a uniform.',          az: 'məcburi deyil — sərbəst geyim'   },
      ],
      tip: 'mustn\'t — "etmə, qadağandır". don\'t have to — "etməsən də olur, məcburi deyil".',
    },

    // ── Ekran 3: Keçmiş zaman — had to ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Keçmiş zaman — had to',
      content: 'must-un keçmiş zamanı yoxdur → had to işlədilir.\nSual: Did + subject + have to?\nİnkar: didn\'t have to',
      table: [
        ['İndiki',                    'Keçmiş'],
        ['I must go.',                'I had to go.'],
        ['She has to work.',          'She had to work.'],
        ['He must leave early.',      'He had to leave early.'],
        ['Do you have to pay?',       'Did you have to pay?'],
        ['I don\'t have to hurry.',   'I didn\'t have to hurry.'],
      ],
      tip: 'had to — bütün şəxslər üçün eynidir. didn\'t have to = keçmişdə məcburi deyildi.',
    },

    // ── Ekran 4: Sual quruluşu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'must / have to — Sual quruluşu',
      content: 'have to ilə sual do/does/did köməkçi felləri ilə qurulur:',
      examples: [
        { word: 'Do you have to work on Saturdays?',        az: 'do + you + have to'             },
        { word: 'Does she have to wear a uniform?',         az: 'does + she + have to'           },
        { word: 'Did you have to wait long?',               az: 'did + you + have to (keçmiş)'  },
        { word: 'What time does he have to be at work?',    az: 'What time + does + he'         },
        { word: 'Do they have to take an exam?',            az: 'do + they + have to'            },
        { word: 'Must I wear a tie? *(rəsmi)*',             az: 'must — rəsmi sual forması'      },
      ],
      tip: 'must sualı rəsmi üslubdadır. Gündəlik danışıqda Do/Does + have to daha çox işlədilir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"You ___ smoke here." — qadağa bildirən forma:',
          options: ['don\'t have to', 'mustn\'t', 'didn\'t have to'],
          answer: 'mustn\'t',
        },
        {
          q: '"I ___ get up early tomorrow — it\'s Sunday." — məcburi deyil:',
          options: ['mustn\'t', 'doesn\'t have to', 'don\'t have to'],
          answer: 'don\'t have to',
        },
        {
          q: 'must-un keçmiş zamanı:',
          options: ['musted', 'had to', 'must have'],
          answer: 'had to',
        },
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Does she have to wears a uniform?',
            'Does she has to wear a uniform?',
            'Does she have to wear a uniform?',
          ],
          answer: 'Does she have to wear a uniform?',
        },
        {
          q: '"I ___ wait for an hour." — keçmişdə məcburi idi:',
          options: ['must', 'have to', 'had to'],
          answer: 'had to',
        },
        {
          q: 'mustn\'t vs don\'t have to — hansı qadağa bildirir?',
          options: ['don\'t have to', 'mustn\'t', 'didn\'t have to'],
          answer: 'mustn\'t',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'I didn\'t must get up early.',
            'I didn\'t have to get up early.',
            'I mustn\'t get up early.',
          ],
          answer: 'I didn\'t have to get up early.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She musts wear a uniform.',
            'She must to wear a uniform.',
            'She must wear a uniform.',
          ],
          answer: 'She must wear a uniform.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'must — nə zaman işlədilir?',                                    tr: 'Şəxsi qərar / tövsiyə',           wrong: 'Xarici qayda'                          },
  { en: 'have to — nə zaman işlədilir?',                                 tr: 'Xarici qayda / tələb',            wrong: 'Şəxsi qərar'                           },
  { en: '"he / she / it" ilə have to — forma:',                          tr: 'has to',                          wrong: 'have to'                               },
  { en: 'must-dan sonra fel necə olur?',                                  tr: 'Sadə forma',                      wrong: 'to + verb'                             },
  { en: 'mustn\'t — nə bildirir?',                                        tr: 'Qadağan — etmək olmaz',           wrong: 'Məcburi deyil'                         },
  { en: 'don\'t have to — nə bildirir?',                                  tr: 'Məcburi deyil',                   wrong: 'Qadağan'                               },
  { en: 'must-un keçmiş zamanı:',                                         tr: 'had to',                          wrong: 'musted'                                },
  { en: 'Düzgün: I ___ go to the bank. I have no money.',                tr: 'must',                            wrong: 'must to'                               },
  { en: 'Düzgün: She ___ be at school at 8. *(məktəb qaydası)*',         tr: 'has to',                          wrong: 'have to'                               },
  { en: 'Düzgün: You ___ smoke in the hospital.',                         tr: 'mustn\'t',                        wrong: 'don\'t have to'                        },
  { en: 'Düzgün: I ___ get up early — it\'s my day off.',                tr: 'don\'t have to',                  wrong: 'mustn\'t'                              },
  { en: 'Düzgün: She ___ take medicine twice a day. *(həkim)*',          tr: 'has to',                          wrong: 'must'                                  },
  { en: 'have to — sual quruluşu (you):',                                 tr: 'Do you have to ...?',             wrong: 'Have you to ...?'                      },
  { en: 'have to — sual quruluşu (she):',                                 tr: 'Does she have to ...?',           wrong: 'Has she to ...?'                       },
  { en: 'have to — keçmiş sual:',                                         tr: 'Did you have to ...?',            wrong: 'Had you to ...?'                       },
  { en: 'Düzgün: He ___ work last Sunday. It was a holiday.',            tr: 'didn\'t have to',                 wrong: 'didn\'t must'                          },
  { en: 'Düzgün: We ___ leave now or we\'ll miss the train.',            tr: 'must',                            wrong: 'must to'                               },
  { en: 'Düzgün: He ___ take an exam yesterday.',                         tr: 'had to',                          wrong: 'must'                                  },
  { en: 'Düzgün: You ___ tell anyone. It\'s a secret.',                  tr: 'mustn\'t',                        wrong: 'don\'t have to'                        },
  { en: 'Düzgün: In Britain you ___ drive on the left.',                  tr: 'have to',                         wrong: 'must'                                  },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu gün banka getməliyəm. Pulumuz yoxdur.',
      words: ['I', 'must', 'go', 'to', 'the', 'bank', 'today', 'to', 'musts', 'went'],
      answer: ['I', 'must', 'go', 'to', 'the', 'bank', 'today'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hər gün işdə forma geyinməlidir.',
      words: ['She', 'has', 'to', 'wear', 'a', 'uniform', 'at', 'work', 'have', 'wears'],
      answer: ['She', 'has', 'to', 'wear', 'a', 'uniform', 'at', 'work'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Burda siqaret çəkmək qadağandır.',
      words: ['You', 'mustn\'t', 'smoke', 'here', 'to', 'don\'t', 'smokes'],
      answer: ['You', 'mustn\'t', 'smoke', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sabah tez qalxmağa məcbur deyiləm — bazar günüdür.',
      words: ['I', 'don\'t', 'have', 'to', 'get', 'up', 'early', 'tomorrow', 'mustn\'t', 'got'],
      answer: ['I', 'don\'t', 'have', 'to', 'get', 'up', 'early', 'tomorrow'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O dünən imtahan verməli oldu.',
      words: ['She', 'had', 'to', 'take', 'an', 'exam', 'yesterday', 'has', 'took', 'must'],
      answer: ['She', 'had', 'to', 'take', 'an', 'exam', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Həftə sonları işləməli olurmusunuz?',
      words: ['Do', 'you', 'have', 'to', 'work', 'at', 'weekends', 'must', 'works', 'Does'],
      answer: ['Do', 'you', 'have', 'to', 'work', 'at', 'weekends'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bunu heç kimə deməməlisən. Bu sirdir.',
      words: ['You', 'mustn\'t', 'tell', 'anyone', 'It\'s', 'a', 'secret', 'don\'t', 'to', 'told'],
      answer: ['You', 'mustn\'t', 'tell', 'anyone', 'It\'s', 'a', 'secret'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Britaniyada sol tərəfdən getmək məcburidir.',
      words: ['In', 'Britain', 'you', 'have', 'to', 'drive', 'on', 'the', 'left', 'must', 'drives'],
      answer: ['In', 'Britain', 'you', 'have', 'to', 'drive', 'on', 'the', 'left'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O bu axşam yemək bişirməyə məcbur deyil.',
      words: ['She', 'doesn\'t', 'have', 'to', 'cook', 'tonight', 'mustn\'t', 'cooks', 'don\'t'],
      answer: ['She', 'doesn\'t', 'have', 'to', 'cook', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O dərmanı gündə üç dəfə içməlidir.',
      words: ['He', 'has', 'to', 'take', 'medicine', 'three', 'times', 'a', 'day', 'have', 'takes'],
      answer: ['He', 'has', 'to', 'take', 'medicine', 'three', 'times', 'a', 'day'],
    },
  ],
},
      
{ type: 'section_divider', title: 'should — məsləhət' },

// ── UNIT 34 — should (Məsləhət) ──────────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'should / shouldn\'t — Quruluş və Məsləhət (Dərs 1)',
  cards: [

    // ── Ekran 1: should quruluşu ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'should / shouldn\'t — quruluş',
      content: 'should — məsləhət, tövsiyə və fikir bildirmək üçün işlədilir.\nshouldn\'t (should not) — əks məsləhət bildirir.\n\nQuruluş: Subject + should/shouldn\'t + Verb (sadə forma)\n\n❗ should heç vaxt -s almır. Arxasında həmişə sadə fel gəlir!',
      table: [
        ['Növ',    'Subject',                              'Modal',       'Verb'],
        ['Müsbət', 'I / he / she / it / we / you / they', 'should',      'sleep / eat / go'],
        ['İnkar',  'I / he / she / it / we / you / they', 'shouldn\'t',  'sleep / eat / go'],
        ['Sual',   'Should + Subject',                    '—',           'sleep / eat / go?'],
      ],
      tip: 'should not = shouldn\'t. should bütün şəxslər üçün eynidir — dəyişmir.',
    },

    // ── Ekran 2: should-dan sonra sadə forma ─────────────────────────────────
    {
      type: 'lesson',
      title: 'should-dan sonra — sadə forma!',
      content: 'should / shouldn\'t-dan sonra fel sadə formada qalır — to olmur, -s olmur:',
      examples: [
        { word: 'You should sleep more.',          az: '✅ Düzgün — should + sleep'        },
        { word: 'You should to sleep more.',       az: '❌ Yanlış — to olmaz'               },
        { word: 'She should rest.',                az: '✅ Düzgün — should + rest'          },
        { word: 'She shoulds rest.',               az: '❌ Yanlış — shoulds olmaz'           },
        { word: 'She should rests.',               az: '❌ Yanlış — rests olmaz'             },
        { word: 'He shouldn\'t drive so fast.',    az: '✅ Düzgün — shouldn\'t + drive'    },
        { word: 'He shouldn\'t to drive so fast.', az: '❌ Yanlış — to olmaz'               },
        { word: 'Should I call him?',              az: '✅ Düzgün — Should + I + call'      },
      ],
      tip: 'should artıq modal feldir — arxasında gələn fel heç bir dəyişiklik almır!',
    },

    // ── Ekran 3: should — məsləhət nümunələri ────────────────────────────────
    {
      type: 'lesson',
      title: 'should — Məsləhət cümlələri',
      content: 'should ilə müsbət məsləhət, shouldn\'t ilə əks məsləhət:',
      table: [
        ['should — et',                                     'shouldn\'t — etmə'],
        ['You look tired. You should go to bed.',           'You shouldn\'t watch TV so late.'],
        ['He should eat less — he\'s gaining weight.',      'He shouldn\'t eat so much sugar.'],
        ['She has a cold. She should stay at home.',        'She shouldn\'t go out in the rain.'],
        ['You should always wear a seatbelt.',              'You shouldn\'t drive so fast.'],
        ['Students should read more outside class.',        'Students shouldn\'t waste time.'],
      ],
      tip: 'should = "etmək yaxşı olar". shouldn\'t = "etmək yaxşı olmaz".',
    },

    // ── Ekran 4: should vs must — fərq ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'should vs must — fərq',
      content: 'should — tövsiyə (güclü deyil). must — vaciblik (güclüdür):',
      examples: [
        { word: 'You should sleep more.',             az: 'should — tövsiyə, məsləhətdir'       },
        { word: 'You must take this medicine.',       az: 'must — vacibdir, mütləq lazımdır'    },
        { word: 'He should see a doctor.',            az: 'should — məsləhət görürəm'           },
        { word: 'He must take his medicine now.',     az: 'must — vacibdir, təcilidir'          },
        { word: 'You shouldn\'t waste food.',         az: 'shouldn\'t — etmək yaxşı deyil'     },
        { word: 'You mustn\'t smoke here.',           az: 'mustn\'t — tamamilə qadağandır'      },
      ],
      tip: 'should = məsləhət. must = vaciblik. mustn\'t = qadağa. shouldn\'t = əks məsləhət.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'You should to sleep more.',
            'You should sleep more.',
            'You shoulds sleep more.',
          ],
          answer: 'You should sleep more.',
        },
        {
          q: 'should-dan sonra fel necə olur?',
          options: ['to + verb (to go)', 'Sadə forma (go)', '-ing forması (going)'],
          answer: 'Sadə forma (go)',
        },
        {
          q: 'Düzgün inkar cümləsini seç:',
          options: [
            'He shouldn\'t to drive fast.',
            'He shouldn\'t drives fast.',
            'He shouldn\'t drive fast.',
          ],
          answer: 'He shouldn\'t drive fast.',
        },
        {
          q: 'should — nə zaman işlədilir?',
          options: ['Qadağa bildirmək üçün', 'Məsləhət və tövsiyə üçün', 'Vaciblik bildirmək üçün'],
          answer: 'Məsləhət və tövsiyə üçün',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She should rests more.',
            'She should rest more.',
            'She shoulds rest more.',
          ],
          answer: 'She should rest more.',
        },
        {
          q: 'should vs must — hansı daha güclüdür?',
          options: ['should', 'must', 'Hər ikisi eynidir'],
          answer: 'must',
        },
        {
          q: 'Düzgün məsləhət cümləsini seç:',
          options: [
            'You should always tell the truth.',
            'You should always to tell the truth.',
            'You shoulds always tell the truth.',
          ],
          answer: 'You should always tell the truth.',
        },
        {
          q: '"You ___ eat so much sugar." — əks məsləhət:',
          options: ['should', 'shouldn\'t', 'mustn\'t'],
          answer: 'shouldn\'t',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'should — Sual, Qısa Cavab və I think + should (Dərs 2)',
  cards: [

    // ── Ekran 1: Sual quruluşu və qısa cavablar ───────────────────────────────
    {
      type: 'lesson',
      title: 'should — Sual və Qısa Cavablar',
      content: 'Sualda should subject-dən əvvələ keçir.\nQısa cavabda should / shouldn\'t işlədilir:',
      table: [
        ['Sual',                        'Bəli',              'Xeyr'],
        ['Should I call him?',          'Yes, you should.',  'No, you shouldn\'t.'],
        ['Should she see a doctor?',    'Yes, she should.',  'No, she shouldn\'t.'],
        ['Should we leave now?',        'Yes, you should.',  'No, you shouldn\'t.'],
        ['Should they apologise?',      'Yes, they should.', 'No, they shouldn\'t.'],
      ],
      tip: '"Yes, you should call." demə — sadəcə "Yes, you should." kifayətdir.',
    },

    // ── Ekran 2: Sual sözləri ilə should ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual sözləri ilə should',
      content: 'Sual sözü əvvələ gəlir, sonra should, sonra subject, sonra sadə fel:',
      examples: [
        { word: 'What should I do?',                   az: 'What + should + I + do'               },
        { word: 'Where should we eat tonight?',        az: 'Where + should + we + eat'            },
        { word: 'Should I call him or send an email?', az: 'Should + I + call / send'             },
        { word: 'What should she study?',              az: 'What + should + she + study'          },
        { word: 'When should we leave?',               az: 'When + should + we + leave'           },
        { word: 'How much should I pay?',              az: 'How much + should + I + pay'          },
        { word: 'Should I wear a jacket?',             az: 'Should + I + wear'                    },
      ],
      tip: 'Sual sözü → should → Subject → Verb (sadə). Bu sıra həmişə eynidir.',
    },

    // ── Ekran 3: I think / I don't think + should ────────────────────────────
    {
      type: 'lesson',
      title: 'I think / I don\'t think + should',
      content: 'Fikir bildirərkən I think / I don\'t think + should işlədilir:\n\n❗ Mənfi formada "I don\'t think + should" işlədilir — "I think + shouldn\'t" az işlədilir!',
      table: [
        ['Müsbət fikir',                               'Mənfi fikir'],
        ['I think you should take the job.',           'I don\'t think you should take it.'],
        ['I think he should see a doctor.',            'I don\'t think he should worry.'],
        ['I think she should apologise.',              'I don\'t think she should go alone.'],
        ['I think we should leave now.',               'I don\'t think we should be late.'],
        ['I think they should talk more.',             'I don\'t think they should argue.'],
      ],
      tip: '"I don\'t think you should lend him money." ✅ — "I think you shouldn\'t lend him money." az işlədilir.',
    },

    // ── Ekran 4: should / must / don't have to müqayisəsi ────────────────────
    {
      type: 'lesson',
      title: 'should / must / don\'t have to — müqayisə',
      content: 'Üç formanın fərqini nümunələrlə tanı:',
      examples: [
        { word: 'You should eat more vegetables.',            az: 'should — tövsiyə, yaxşı olar'       },
        { word: 'You must wear a seatbelt. It\'s the law.',   az: 'must — vacibdir, qanundur'          },
        { word: 'You don\'t have to come if you\'re busy.',   az: 'don\'t have to — məcburi deyil'    },
        { word: 'You shouldn\'t drink so much coffee.',       az: 'shouldn\'t — tövsiyə, yaxşı deyil' },
        { word: 'You mustn\'t smoke here. It\'s forbidden.',  az: 'mustn\'t — tamamilə qadağandır'     },
        { word: 'She doesn\'t have to work on Sundays.',      az: 'doesn\'t have to — məcburi deyil'  },
      ],
      tip: 'should = məsləhət. must = vaciblik. mustn\'t = qadağa. don\'t have to = məcburi deyil.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün sual cümləsini seç:',
          options: [
            'Should I to call him?',
            'Should I call him?',
            'Should I calls him?',
          ],
          answer: 'Should I call him?',
        },
        {
          q: '"Should she see a doctor?" — bəli cavabı:',
          options: ['Yes, she should see.', 'Yes, she should.', 'Yes, she does.'],
          answer: 'Yes, she should.',
        },
        {
          q: '"Should we leave now?" — xeyr cavabı:',
          options: ['No, we shouldn\'t.', 'No, we don\'t.', 'No, we mustn\'t.'],
          answer: 'No, we shouldn\'t.',
        },
        {
          q: 'Mənfi fikir üçün düzgün cümləni seç:',
          options: [
            'I think you shouldn\'t worry.',
            'I don\'t think you should worry.',
            'I not think you should worry.',
          ],
          answer: 'I don\'t think you should worry.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'What should I to do?',
            'What should I do?',
            'What I should do?',
          ],
          answer: 'What should I do?',
        },
        {
          q: '"You ___ smoke here. It\'s forbidden." — düzgün forma:',
          options: ['shouldn\'t', 'mustn\'t', 'don\'t have to'],
          answer: 'mustn\'t',
        },
        {
          q: '"You ___ come if you don\'t want to." — məcburi deyil:',
          options: ['shouldn\'t', 'mustn\'t', 'don\'t have to'],
          answer: 'don\'t have to',
        },
        {
          q: '"Where ___ we eat tonight?" — boşluğa nə gəlir?',
          options: ['must', 'should', 'have to'],
          answer: 'should',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'should — nə zaman işlədilir?',                                  tr: 'Məsləhət və tövsiyə',             wrong: 'Vaciblik'                              },
  { en: 'should-dan sonra fel necə olur?',                               tr: 'Sadə forma',                      wrong: 'to + verb'                             },
  { en: 'should not — qısa forması:',                                     tr: 'shouldn\'t',                      wrong: 'shouldnt'                              },
  { en: 'Düzgün: You look tired. You ___ go to bed.',                    tr: 'should',                          wrong: 'should to'                             },
  { en: 'Düzgün: He ___ drive so fast — it\'s dangerous.',               tr: 'shouldn\'t',                      wrong: 'shouldn\'t to'                         },
  { en: 'Düzgün: She ___ see a doctor.',                                  tr: 'should',                          wrong: 'shoulds'                               },
  { en: 'should vs must — hansı daha güclüdür?',                         tr: 'must',                            wrong: 'should'                                },
  { en: 'should — sual quruluşu:',                                        tr: 'Should + Subject + Verb?',        wrong: 'Subject + should + Verb?'              },
  { en: '"Should I call him?" — bəli cavabı:',                           tr: 'Yes, you should.',                wrong: 'Yes, you should call.'                 },
  { en: '"Should they apologise?" — xeyr cavabı:',                       tr: 'No, they shouldn\'t.',            wrong: 'No, they don\'t.'                      },
  { en: 'Mənfi fikir üçün düzgün forma:',                                tr: 'I don\'t think you should worry.',wrong: 'I think you shouldn\'t worry.'         },
  { en: 'Sual sözü ilə düzgün sıra:',                                    tr: 'Wh- + should + Subject + Verb',   wrong: 'Wh- + Subject + should + Verb'         },
  { en: '"What ___ I do?" — boşluğa nə gəlir?',                         tr: 'should',                          wrong: 'should to'                             },
  { en: '"Where ___ we eat tonight?" — boşluğa nə gəlir?',              tr: 'should',                          wrong: 'must'                                  },
  { en: 'Düzgün: You ___ always tell the truth.',                         tr: 'should',                          wrong: 'should to'                             },
  { en: 'Düzgün: I ___ think you should take the job.',                  tr: 'think',                           wrong: 'don\'t think'                          },
  { en: 'Düzgün: I don\'t think she ___ go alone.',                      tr: 'should',                          wrong: 'shouldn\'t'                            },
  { en: '"You ___ smoke here. It\'s forbidden." — düzgün forma:',        tr: 'mustn\'t',                        wrong: 'shouldn\'t'                            },
  { en: '"You ___ come if you\'re busy." — məcburi deyil:',             tr: 'don\'t have to',                  wrong: 'shouldn\'t'                            },
  { en: 'Düzgün: Students ___ read more outside class.',                 tr: 'should',                          wrong: 'shoulds'                               },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Yorğun görünürsən. Erkən yatmağa getməlisən.',
      words: ['You', 'look', 'tired', 'You', 'should', 'go', 'to', 'bed', 'early', 'to', 'went'],
      answer: ['You', 'look', 'tired', 'You', 'should', 'go', 'to', 'bed', 'early'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O bu qədər sürətli sürməməlidir — təhlükəlidir.',
      words: ['He', 'shouldn\'t', 'drive', 'so', 'fast', 'it\'s', 'dangerous', 'to', 'drives'],
      answer: ['He', 'shouldn\'t', 'drive', 'so', 'fast', 'it\'s', 'dangerous'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fikirləşirəm ki, həkimə getməlisən.',
      words: ['I', 'think', 'you', 'should', 'see', 'a', 'doctor', 'to', 'sees', 'must'],
      answer: ['I', 'think', 'you', 'should', 'see', 'a', 'doctor'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fikirləşmirəm ki, buna görə narahat olmalısan.',
      words: ['I', 'don\'t', 'think', 'you', 'should', 'worry', 'about', 'it', 'shouldn\'t', 'to'],
      answer: ['I', 'don\'t', 'think', 'you', 'should', 'worry', 'about', 'it'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Ona zəng etməliyəmmi?',
      words: ['Should', 'I', 'call', 'him', 'to', 'calls', 'Must'],
      answer: ['Should', 'I', 'call', 'him'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gecə harada yemək yeyəcəyik?',
      words: ['Where', 'should', 'we', 'eat', 'tonight', 'to', 'eats', 'must'],
      answer: ['Where', 'should', 'we', 'eat', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən həmişə düzü danışmalısan.',
      words: ['You', 'should', 'always', 'tell', 'the', 'truth', 'to', 'tells', 'must'],
      answer: ['You', 'should', 'always', 'tell', 'the', 'truth'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O bu qədər çox kofe içməməlidir. Ona yaxşı deyil.',
      words: ['She', 'shouldn\'t', 'drink', 'so', 'much', 'coffee', 'It\'s', 'not', 'good', 'for', 'her', 'to', 'drinks'],
      answer: ['She', 'shouldn\'t', 'drink', 'so', 'much', 'coffee', 'It\'s', 'not', 'good', 'for', 'her'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fikirləşirəm ki, bu işi qəbul etməlisən.',
      words: ['I', 'think', 'you', 'should', 'take', 'the', 'job', 'to', 'takes', 'must'],
      answer: ['I', 'think', 'you', 'should', 'take', 'the', 'job'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nə etməliyəm? Həqiqətən bilmirəm.',
      words: ['What', 'should', 'I', 'do', 'I', 'really', 'don\'t', 'know', 'to', 'must'],
      answer: ['What', 'should', 'I', 'do', 'I', 'really', 'don\'t', 'know'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Present Perfect — giriş' },

// ── UNIT 7–8 — Present Perfect: have/has + V3 ────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Perfect — Quruluş və İstifadə (Dərs 1)',
  cards: [

    // ── Ekran 1: Quruluş ──────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — Quruluş',
      content: 'Present Perfect — keçmişdə baş vermiş, lakin indiki zamana bağlı olan hadisələr üçün işlədilir. Nə vaxt baş verdiyi deyilmir və ya vacib deyil.\n\nQuruluş:\nSubject + have/has + Past Participle (V3)\n\n❗ have — I/we/you/they ilə\n❗ has — he/she/it ilə',
      table: [
        ['Subject',                    'Köməkçi',        'Past Participle'],
        ['I / we / you / they',        'have (\'ve)',     'worked / seen / visited'],
        ['he / she / it',             'has (\'s)',       'worked / seen / visited'],
      ],
      tip: '\'ve = have, \'s = has — danışıq dilində qısa formalar işlədilir: I\'ve finished. She\'s arrived.',
    },

    // ── Ekran 2: V3 — düzgün və düzgünsüz fellər ─────────────────────────────
    {
      type: 'lesson',
      title: 'Past Participle (V3)',
      content: 'Düzgün fellər (Regular) sadəcə -ed alır. Düzgünsüz fellər (Irregular) əzbərlənməlidir:',
      table: [
        ['Fel',    'V2 (Past Simple)', 'V3 (Past Participle)'],
        ['work',   'worked',           'worked'],
        ['finish', 'finished',         'finished'],
        ['go',     'went',             'gone'],
        ['see',    'saw',              'seen'],
        ['eat',    'ate',              'eaten'],
        ['buy',    'bought',           'bought'],
        ['write',  'wrote',            'written'],
        ['speak',  'spoke',            'spoken'],
        ['lose',   'lost',             'lost'],
        ['forget', 'forgot',           'forgotten'],
        ['be',     'was / were',       'been'],
        ['take',   'took',             'taken'],
      ],
      tip: 'V2 ilə V3 bəzən eyni olur (buy→bought→bought), bəzən fərqli (go→went→gone).',
    },

    // ── Ekran 3: İnkar və Sual ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — İnkar və Sual',
      content: 'İnkar: have/has + not + V3\nSual: Have/Has + Subject + V3?',
      table: [
        ['Müsbət',                          'İnkar',                              'Sual'],
        ['I have seen it.',                 'I haven\'t seen it.',                'Have you seen it?'],
        ['She has finished.',               'She hasn\'t finished.',              'Has she finished?'],
        ['They have arrived.',              'They haven\'t arrived.',             'Have they arrived?'],
        ['He has called.',                  'He hasn\'t called.',                 'Has he called?'],
      ],
      tip: 'haven\'t = have not, hasn\'t = has not. Qısa cavab: Yes, I have. / No, she hasn\'t.',
    },

    // ── Ekran 4: Nə vaxt işlədilir? ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — Nə vaxt işlədilir?',
      content: 'Üç əsas istifadə:',
      examples: [
        { word: 'I have visited many countries.',             az: '1. Həyat təcrübəsi — nə vaxt deyilmir'     },
        { word: 'Have you ever been to Japan?',              az: '1. Həyat təcrübəsi — ever ilə sual'        },
        { word: 'She has never eaten sushi.',                az: '1. Həyat təcrübəsi — never ilə inkar'      },
        { word: 'I\'ve just finished my homework.',         az: '2. Yenicə bitmiş iş — just ilə'            },
        { word: 'They\'ve just arrived at the hotel.',      az: '2. Yenicə bitmiş iş — just ilə'            },
        { word: 'I\'ve already eaten, thanks.',             az: '3. Artıq edilmiş — already ilə'            },
        { word: 'Have you packed your bag yet?',            az: '3. Sual — yet ilə'                         },
        { word: 'I haven\'t called him yet.',               az: '3. İnkar — yet ilə'                        },
      ],
      tip: 'just/already/yet/ever/never — bunlar Present Perfect-in "siqnal sözləri"dir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün formanı seç:',
          options: [
            'She have finished her work.',
            'She has finished her work.',
            'She has finish her work.',
          ],
          answer: 'She has finished her work.',
        },
        {
          q: '"go" felinin V3 forması hansıdır?',
          options: ['went', 'gone', 'going'],
          answer: 'gone',
        },
        {
          q: 'Düzgün inkar formasını seç:',
          options: [
            'I hasn\'t seen him.',
            'I haven\'t seen him.',
            'I didn\'t have seen him.',
          ],
          answer: 'I haven\'t seen him.',
        },
        {
          q: '"eat" felinin V3 forması hansıdır?',
          options: ['ate', 'eat', 'eaten'],
          answer: 'eaten',
        },
        {
          q: 'Düzgün sual formasını seç:',
          options: [
            'Has she ever been to France?',
            'Have she ever been to France?',
            'Did she ever been to France?',
          ],
          answer: 'Has she ever been to France?',
        },
        {
          q: '"write" felinin V3 forması hansıdır?',
          options: ['wrote', 'written', 'writed'],
          answer: 'written',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'They have just arrived.',
            'They has just arrived.',
            'They have just arrive.',
          ],
          answer: 'They have just arrived.',
        },
        {
          q: '"speak" felinin V3 forması hansıdır?',
          options: ['spoke', 'speaked', 'spoken'],
          answer: 'spoken',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Present Perfect — just/already/yet/ever/never + PP vs PS (Dərs 2)',
  cards: [

    // ── Ekran 1: just / already / yet ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'just / already / yet',
      content: 'Bu sözlər Present Perfect ilə çox işlənir:',
      table: [
        ['Söz',      'Mövqe',                   'Mənası',                        'Nümunə'],
        ['just',     'have/has-dən sonra',       'yenicə, az əvvəl',              'I\'ve just called her.'],
        ['already',  'have/has-dən sonra',       'artıq (gözləndiyindən tez)',    'He\'s already left.'],
        ['yet',      'cümlənin sonunda',         'hələ (inkar + sual)',            'Has it started yet?'],
      ],
      tip: '"yet" yalnız inkar və sual cümlələrinin sonunda gəlir. "already" müsbət cümlələrdə işlənir.',
    },

    // ── Ekran 2: ever / never ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'ever / never — həyat təcrübəsi',
      content: 'ever və never həyat təcrübəsini soruşmaq və danışmaq üçün işlədilir:',
      examples: [
        { word: 'Have you ever tried Turkish food?',         az: 'ever — suallarda, subject-dən əvvəl'       },
        { word: 'Has she ever won a competition?',           az: 'ever — suallarda, subject-dən əvvəl'       },
        { word: 'I\'ve never been to South America.',       az: 'never — müsbət fel, inkar məna'            },
        { word: 'He\'s never told a lie.',                  az: 'never — müsbət fel, inkar məna'            },
        { word: 'She\'s never eaten raw fish.',             az: 'never — müsbət fel, inkar məna'            },
        { word: 'Have they ever seen snow?',                az: 'ever — suallarda, subject-dən əvvəl'       },
      ],
      tip: 'never ilə fel müsbət formada qalır — haven\'t never demə! (ikiqat inkar yanlışdır)',
    },

    // ── Ekran 3: Present Perfect vs Past Simple ───────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect vs Past Simple — əsas fərq',
      content: 'Nə vaxt deyilsə → Past Simple. Nə vaxt deyilməsə → Present Perfect:',
      table: [
        ['Present Perfect',                   'Past Simple'],
        ['I\'ve seen that film.',             'I saw that film last week.'],
        ['She\'s visited Paris.',             'She visited Paris in 2019.'],
        ['Have you met him?',                 'Did you meet him yesterday?'],
        ['We\'ve just eaten.',                'We ate two hours ago.'],
        ['He\'s never tried it.',             'He didn\'t try it last time.'],
      ],
      tip: 'yesterday / last week / in 2010 / ago → həmişə Past Simple! Bu sözlər görünsə PP işlətmə.',
    },

    // ── Ekran 4: Keçmiş zamana aid siqnal sözlər ─────────────────────────────
    {
      type: 'lesson',
      title: 'Siqnal sözlər — PP yoxsa PS?',
      content: 'Cümlədə hansı sözün olduğuna bax:',
      table: [
        ['Present Perfect ilə',           'Past Simple ilə'],
        ['just, already, yet',            'yesterday'],
        ['ever, never',                   'last week / last year'],
        ['recently, lately',              '... ago'],
        ['so far, up to now',             'in 2005, in March'],
        ['today, this week (hələ bitməyib)', 'this morning (artıq bitib)'],
      ],
      tip: '"today" ilə diqqətli ol: "I haven\'t eaten today" (hələ davam edir) ✅ — "I ate this morning" (bitmişdir) ✅',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Do you want to eat?" — "No thanks, I\'ve ___ eaten."',
          options: ['yet', 'just', 'already'],
          answer: 'already',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She has visited Rome last summer.',
            'She visited Rome last summer.',
            'She has visit Rome last summer.',
          ],
          answer: 'She visited Rome last summer.',
        },
        {
          q: '"Have you finished your report ___?" — boşluğa nə gəlir?',
          options: ['already', 'just', 'yet'],
          answer: 'yet',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I\'ve never been to Canada.',
            'I\'ve never go to Canada.',
            'I haven\'t never been to Canada.',
          ],
          answer: 'I\'ve never been to Canada.',
        },
        {
          q: '"I ___ my keys. I can\'t find them!" — boşluğa nə gəlir?',
          options: ['lost', 'have lost', 'was losing'],
          answer: 'have lost',
        },
        {
          q: '"___ she ever tried that dish?" — düzgün köməkçi:',
          options: ['Have', 'Has', 'Did'],
          answer: 'Has',
        },
        {
          q: '"The train ___ just ___." — düzgün forma:',
          options: ['has / left', 'have / left', 'has / leave'],
          answer: 'has / left',
        },
        {
          q: '"I ___ him yesterday." — düzgün forma:',
          options: ['have seen', 'saw', 'has seen'],
          answer: 'saw',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Present Perfect quruluşu (I/we/you/they):',                     tr: 'have + V3',                        wrong: 'has + V3'                        },
  { en: 'Present Perfect quruluşu (he/she/it):',                         tr: 'has + V3',                         wrong: 'have + V3'                       },
  { en: '"go" felinin V3 forması:',                                       tr: 'gone',                             wrong: 'went'                            },
  { en: '"see" felinin V3 forması:',                                      tr: 'seen',                             wrong: 'saw'                             },
  { en: '"write" felinin V3 forması:',                                    tr: 'written',                          wrong: 'wrote'                           },
  { en: '"buy" felinin V3 forması:',                                      tr: 'bought',                           wrong: 'buyed'                           },
  { en: '"forget" felinin V3 forması:',                                   tr: 'forgotten',                        wrong: 'forgot'                          },
  { en: '"speak" felinin V3 forması:',                                    tr: 'spoken',                           wrong: 'spoke'                           },
  { en: 'Düzgün: She ___ finished her work.',                             tr: 'has',                              wrong: 'have'                            },
  { en: 'Düzgün: I ___ never been to Asia.',                              tr: '\'ve',                             wrong: '\'m'                             },
  { en: '"Have you arrived yet?" — bəli cavabı:',                         tr: 'Yes, I have.',                     wrong: 'Yes, I did.'                     },
  { en: '"Has he called?" — xeyr cavabı:',                                tr: 'No, he hasn\'t.',                  wrong: 'No, he didn\'t.'                 },
  { en: 'Yenicə bitmiş iş üçün hansı söz işlədilir?',                     tr: 'just',                             wrong: 'yet'                             },
  { en: '"already" harada işlədilir?',                                    tr: 'Müsbət cümlələrdə',                wrong: 'İnkar cümlələrdə'                },
  { en: '"yet" harada işlədilir?',                                        tr: 'İnkar və sual cümlələrinin sonunda', wrong: 'Müsbət cümlələrdə'             },
  { en: '"I last night dinner." — düzgün forma (have/eat):',              tr: 'I had dinner last night.',         wrong: 'I have eaten dinner last night.' },
  { en: 'Həyat təcrübəsi soruşmaq üçün hansı söz işlədilir?',            tr: 'ever',                             wrong: 'yet'                             },
  { en: '"never" ilə fel necə olur?',                                     tr: 'Müsbət formada qalır',             wrong: 'İnkar formada olur'              },
  { en: 'Düzgün: He ___ visited Paris in 2018.',                          tr: 'visited',                          wrong: 'has visited'                     },
  { en: 'Düzgün: I ___ my glasses. Have you seen them?',                  tr: '\'ve lost',                        wrong: 'lost'                            },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu filmi üç dəfə görmüşəm.',
      words: ['I', 'have', 'seen', 'this', 'film', 'three', 'times', 'saw', 'has'],
      answer: ['I', 'have', 'seen', 'this', 'film', 'three', 'times'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O yenicə evdən çıxıb.',
      words: ['She', 'has', 'just', 'left', 'the', 'house', 'have', 'leave'],
      answer: ['She', 'has', 'just', 'left', 'the', 'house'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar hələ gəlməyiblər.',
      words: ['They', 'haven\'t', 'arrived', 'yet', 'has', 'didn\'t', 'arrive'],
      answer: ['They', 'haven\'t', 'arrived', 'yet'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən heç vaxt Yaponiyada olmusanmı?',
      words: ['Have', 'you', 'ever', 'been', 'to', 'Japan', 'Has', 'went'],
      answer: ['Have', 'you', 'ever', 'been', 'to', 'Japan'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən açarlarımı itirmişəm.',
      words: ['I', 'have', 'lost', 'my', 'keys', 'has', 'lose', 'lost'],
      answer: ['I', 'have', 'lost', 'my', 'keys'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O heç vaxt sushi yeməyib.',
      words: ['She', 'has', 'never', 'eaten', 'sushi', 'have', 'ate', 'hasn\'t'],
      answer: ['She', 'has', 'never', 'eaten', 'sushi'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz bir-birimizi illərdir tanıyırıq.',
      words: ['We', 'have', 'known', 'each', 'other', 'for', 'years', 'has', 'knew'],
      answer: ['We', 'have', 'known', 'each', 'other', 'for', 'years'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O hələ mənə zəng etməyib.',
      words: ['She', 'hasn\'t', 'called', 'me', 'yet', 'haven\'t', 'didn\'t', 'call'],
      answer: ['She', 'hasn\'t', 'called', 'me', 'yet'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən artıq nahar etmişəm.',
      words: ['I', 'have', 'already', 'had', 'lunch', 'has', 'ate', 'yet'],
      answer: ['I', 'have', 'already', 'had', 'lunch'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O nə vaxt kitabı yazdı?',
      words: ['When', 'did', 'she', 'write', 'the', 'book', 'has', 'written', 'wrote'],
      answer: ['When', 'did', 'she', 'write', 'the', 'book'],
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
{ type: 'section_divider', title: 'a / an — qeyri-müəyyən artikl' },
{ type: 'section_divider', title: 'the — müəyyən artikl' },
{ type: 'section_divider', title: 'Artikl işlənməyən hallar' },
{ type: 'section_divider', title: 'Sayılan isimlər — çoxluq' },
{ type: 'section_divider', title: 'Sayılmayan isimlər' },
{ type: 'section_divider', title: 'some / any' },
{ type: 'section_divider', title: 'much / many / a lot of' },
{ type: 'section_divider', title: 'Şəxs əvəzlikləri tam sistem' },
{ type: 'section_divider', title: 'this / that / these / those' },
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
{ type: 'section_divider', title: 'Sual qurmaq — ümumi suallar' },
{ type: 'section_divider', title: 'Sual qurmaq — xüsusi suallar (Wh-)' },
{ type: 'section_divider', title: 'there is / there are' },
{ type: 'section_divider', title: 'Müqayisə dərəcəsi — comparative' },
{ type: 'section_divider', title: 'Müqayisə dərəcəsi — superlative' },
{ type: 'section_divider', title: 'Önlüklər — yer' },
{ type: 'section_divider', title: 'Önlüklər — zaman' },
{ type: 'section_divider', title: 'Önlüklər — digər' },
{ type: 'section_divider', title: 'and / but / or / so' },
{ type: 'section_divider', title: 'because / although / however' },
{ type: 'section_divider', title: 'when / while / before / after' },
{ type: 'section_divider', title: 'if — birinci şərt cümləsi' },
{ type: 'section_divider', title: 'Passive voice — giriş' },
    ],
  },

];

GENERAL_ENGLISH_LEVELS.forEach(lvl => LEVELS.push(lvl));
window.GENERAL_ENGLISH_LEVELS = GENERAL_ENGLISH_LEVELS;
