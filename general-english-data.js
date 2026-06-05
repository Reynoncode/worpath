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

      
      
{ type: 'section_divider', title: 'Tezlik zərfləri' },


      
{ type: 'section_divider', title: 'Present Continuous — indiki proses' },


      
{ type: 'section_divider', title: 'Present Simple vs Present Continuous' },



      
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
{ type: 'section_divider', title: 'Past Simple — düzgün fellər' },
{ type: 'section_divider', title: 'Past Simple — düzgünsüz fellər' },
{ type: 'section_divider', title: 'Past Simple — inkar və sual' },
{ type: 'section_divider', title: 'going to — plan və niyyət' },
{ type: 'section_divider', title: 'will — qərar, təklif, proqnoz' },
{ type: 'section_divider', title: 'can / can\'t — bacarıq' },
{ type: 'section_divider', title: 'could — keçmişdə bacarıq və nəzakətli xahiş' },
{ type: 'section_divider', title: 'must / have to — vaciblik' },
{ type: 'section_divider', title: 'should — məsləhət' },
{ type: 'section_divider', title: 'Present Perfect — giriş' },
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
