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
      
{ type: 'section_divider', title: 'a / an — qeyri-müəyyən artikl' },

// ── UNIT 69–70 — a / an (Qeyri-Müəyyən Artikl) ──────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'a / an — Qeyri-Müəyyən Artikl (Dərs 1)',
  cards: [

    // ── Ekran 1: a vs an qayda ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'a / an — əsas qayda',
      content: 'a/an — qeyri-müəyyən artikldır. Mənası "bir" və ya "hər hansı bir" deməkdir.\n\nQuruluş:\na + samit səslə başlayan söz\nan + sait səslə başlayan söz\n\n❗ Yazıya deyil, SƏSƏ baxılır!',
      table: [
        ['a',                          'an'],
        ['a cat',                      'an apple'],
        ['a book',                     'an egg'],
        ['a dog',                      'an orange'],
        ['a car',                      'an umbrella'],
        ['a university (yoo...)',      'an hour (h səssiz)'],
        ['a European (yoo...)',        'an honest man (h səssiz)'],
        ['a one-way street (wan...)',  'an MP (em...)'],
      ],
      tip: '"a university" — u hərfi ilə yazılır, amma "yoo" səsi ilə tələffüz edilir → a. "an hour" — h hərfi var, amma səssizdir → an.',
    },

    // ── Ekran 2: Nə vaxt işlədilir? ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'a / an — nə vaxt işlədilir?',
      content: 'Dörd əsas istifadə:',
      examples: [
        { word: 'I saw a cat in the garden.',          az: '1. İlk dəfə bəhs edilən şey'           },
        { word: 'She bought an old lamp.',             az: '1. İlk dəfə bəhs edilən şey'           },
        { word: 'He is a teacher.',                    az: '2. Peşə və vəzifə'                     },
        { word: 'She is an architect.',                az: '2. Peşə və vəzifə'                     },
        { word: 'a hundred / a thousand / a dozen',    az: '3. Saylarla (= one)'                   },
        { word: '80 kilometres an hour',               az: '4. Ölçü və nisbətlər'                  },
        { word: 'three times a week',                  az: '4. Ölçü və nisbətlər'                  },
        { word: '£3 a kilo',                           az: '4. Ölçü və nisbətlər'                  },
      ],
      tip: 'Peşə bildirəndə mütləq a/an işlədilir: "He is doctor." yanlışdır — "He is a doctor." düzgündür.',
    },

    // ── Ekran 3: İlk dəfə → ikinci dəfə ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'a/an → the (ilk dəfə → ikinci dəfə)',
      content: 'Bir şeydən ilk dəfə danışanda a/an, sonradan həmin şeydən danışanda the işlədilir:',
      table: [
        ['İlk bəhs (a/an)',                         'Sonrakı bəhs (the)'],
        ['I saw a dog in the park.',                'The dog was very friendly.'],
        ['She bought a jacket.',                    'The jacket was on sale.'],
        ['There is a lamp in the corner.',          'The lamp gives nice light.'],
        ['He found a wallet on the street.',        'The wallet had no ID inside.'],
      ],
      tip: 'a/an = "bilmirsən hansı" | the = "ikimiz də bilirik hansı"',
    },

    // ── Ekran 4: Nümunə cümlələri ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Nümunə cümlələri',
      content: 'a / an ilə düzgün cümlələr:',
      examples: [
        { word: 'I need a pen and an envelope.',      az: 'pen → samit (p) → a | envelope → sait (e) → an' },
        { word: 'Is there a bank near here?',         az: 'bank → samit (b) → a'                           },
        { word: 'What an interesting story!',         az: 'interesting → sait (i) → an'                    },
        { word: 'She earns £40,000 a year.',          az: 'nisbət — a year'                                },
        { word: 'He is an honest person.',            az: 'honest → h səssiz, sait kimi → an'              },
        { word: 'It was a useful lesson.',            az: 'useful → "yoo" səsi → samit → a'                },
        { word: 'I go jogging twice a week.',         az: 'nisbət — a week'                                },
        { word: 'She is a very good engineer.',       az: 'peşə — engineer, amma a very ilə başlayır'      },
      ],
      tip: '"useful" — u hərfi ilə yazılır, amma "yoo" səsi ilə başlayır → a useful (a university kimi).',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ apple" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the'],
          answer: 'an',
        },
        {
          q: '"___ university" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'a',
        },
        {
          q: '"She is ___ engineer." — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'an',
        },
        {
          q: '"___ hour" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the'],
          answer: 'an',
        },
        {
          q: '"He drives ___ European car." — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'a',
        },
        {
          q: '"I visit my family twice ___ month." — boşluğa nə gəlir?',
          options: ['a', 'an', 'the'],
          answer: 'a',
        },
        {
          q: '"___ honest answer" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'an',
        },
        {
          q: '"___ one-way street" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'a',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'a / an — Tələffüz Qaydası və Xüsusi Hallar (Dərs 2)',
  cards: [

    // ── Ekran 1: Səs qaydası — detallı ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Səs qaydası — tələffüzə diqqət!',
      content: 'Bəzi sözlər gözlənilməz tələffüzə malikdir. Yazıya yox, səsə bax:',
      table: [
        ['Söz',           'Tələffüz',      'Artikl', 'Səbəb'],
        ['university',    '/juːnɪˈvɜːsɪti/', 'a',   'y-səsi ilə başlayır'],
        ['European',      '/ˌjʊərəˈpiːən/', 'a',    'y-səsi ilə başlayır'],
        ['one-way',       '/wʌn/',          'a',    'w-səsi ilə başlayır'],
        ['useful',        '/ˈjuːsfəl/',     'a',    'y-səsi ilə başlayır'],
        ['hour',          '/ˈaʊər/',        'an',   'h səssiz, a-səsi ilə başlayır'],
        ['honest',        '/ˈɒnɪst/',       'an',   'h səssiz, o-səsi ilə başlayır'],
        ['MP',            '/ˌem ˈpiː/',     'an',   'em-səsi ilə başlayır'],
        ['FBI',           '/ˌef biː ˈaɪ/', 'an',   'ef-səsi ilə başlayır'],
      ],
      tip: 'İxtisarları oxuyarkən birinci hərfin tələffüzünə bax: MP → em → an MP; FBI → ef → an FBI.',
    },

    // ── Ekran 2: a/an ilə xüsusi strukturlar ─────────────────────────────────
    {
      type: 'lesson',
      title: 'a / an ilə xüsusi strukturlar',
      content: 'a / an bəzi sabit birləşmələrdə işlənir:',
      examples: [
        { word: 'What a wonderful idea!',             az: 'What a/an + sifət + isim — nida'              },
        { word: 'What an amazing view!',              az: 'What a/an + sifət + isim — nida'              },
        { word: 'Such a long journey!',               az: 'such a/an + sifət + isim'                     },
        { word: 'It was such an easy task.',          az: 'such a/an + sifət + isim'                     },
        { word: 'half an hour',                       az: 'half an hour — sabit ifadə'                   },
        { word: 'quite a surprise',                   az: 'quite a/an + isim'                            },
        { word: 'rather a difficult problem',         az: 'rather a/an + sifət + isim'                   },
        { word: 'a hundred / a thousand / a million', az: 'böyük ədədlərdə a = one'                     },
      ],
      tip: '"What a/an" strukturunda artikl sifətin deyil, ismin əvvəlinə gəlir: What a beautiful day! (a + day)',
    },

    // ── Ekran 3: Ümumi səhvlər ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Ümumi səhvlər',
      content: 'Tez-tez edilən səhvlər:',
      table: [
        ['Yanlış',                          'Düzgün',                       'Səbəb'],
        ['She is doctor.',                  'She is a doctor.',             'Peşədə a/an lazımdır'],
        ['I need a umbrella.',              'I need an umbrella.',          'umbrella → sait (u)'],
        ['He is a honest man.',             'He is an honest man.',         'h səssizdir'],
        ['It was a easy test.',             'It was an easy test.',         'easy → sait (e)'],
        ['I saw an dog.',                   'I saw a dog.',                 'dog → samit (d)'],
        ['She is an very good teacher.',    'She is a very good teacher.',  'very → samit (v)'],
      ],
      tip: '"She is an very good teacher" — yanlışdır, çünki artikl birbaşa sifətin (very good) deyil, ismin (teacher) qabağında gəlir.',
    },

    // ── Ekran 4: Nisbət və tezlik ifadələri ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Nisbət və tezlik ifadələri',
      content: 'Sürət, qiymət, tezlik bildirən ifadələrdə a / an işlədilir:',
      examples: [
        { word: '120 kilometres an hour',          az: 'sürət'                 },
        { word: 'four times a day',                az: 'tezlik — gün ərzində'  },
        { word: 'twice a week',                    az: 'tezlik — həftədə'      },
        { word: 'once a month',                    az: 'tezlik — ayda'         },
        { word: '£5 a kilo',                       az: 'qiymət — kiloya görə'  },
        { word: '$15 an hour',                     az: 'qiymət — saata görə'   },
        { word: 'three meals a day',               az: 'miqdar — gündə'        },
        { word: '£30,000 a year',                  az: 'maaş — ildə'           },
      ],
      tip: 'Bu ifadələrdə a/an = "hər bir" mənasındadır: "£5 a kilo" = "hər kilo üçün £5".',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"What ___ amazing concert!" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'an',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She is an very kind person.',
            'She is a very kind person.',
            'She is very kind person.',
          ],
          answer: 'She is a very kind person.',
        },
        {
          q: '"I go to the pool three times ___ week." — boşluğa nə gəlir?',
          options: ['a', 'an', 'the'],
          answer: 'a',
        },
        {
          q: '"It takes ___ hour to get there." — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'an',
        },
        {
          q: '"___ MP" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'an',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'He is an useful assistant.',
            'He is a useful assistant.',
            'He is useful assistant.',
          ],
          answer: 'He is a useful assistant.',
        },
        {
          q: '"What ___ long trip it was!" — boşluğa nə gəlir?',
          options: ['a', 'an', '-'],
          answer: 'a',
        },
        {
          q: '"She earns £500 ___ week." — boşluğa nə gəlir?',
          options: ['a', 'an', 'the'],
          answer: 'a',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Sait səslə başlayan sözdən əvvəl:',                          tr: 'an',                           wrong: 'a'                            },
  { en: 'Samit səslə başlayan sözdən əvvəl:',                         tr: 'a',                            wrong: 'an'                           },
  { en: '"___ apple" — düzgün artikl:',                                tr: 'an',                           wrong: 'a'                            },
  { en: '"___ car" — düzgün artikl:',                                  tr: 'a',                            wrong: 'an'                           },
  { en: '"___ hour" — düzgün artikl (h səssizdir):',                   tr: 'an',                           wrong: 'a'                            },
  { en: '"___ university" — düzgün artikl (y-səsi):',                  tr: 'a',                            wrong: 'an'                           },
  { en: '"___ honest answer" — düzgün artikl:',                        tr: 'an',                           wrong: 'a'                            },
  { en: '"___ European country" — düzgün artikl:',                     tr: 'a',                            wrong: 'an'                           },
  { en: '"He is ___ architect." — boşluğa nə gəlir?',                 tr: 'an',                           wrong: 'a'                            },
  { en: '"She is ___ nurse." — boşluğa nə gəlir?',                    tr: 'a',                            wrong: 'an'                           },
  { en: '"twice ___ week" — boşluğa nə gəlir?',                       tr: 'a',                            wrong: 'an'                           },
  { en: '"£10 ___ hour" — boşluğa nə gəlir?',                         tr: 'an',                           wrong: 'a'                            },
  { en: '"What ___ exciting match!" — boşluğa nə gəlir?',             tr: 'an',                           wrong: 'a'                            },
  { en: '"What ___ great day!" — boşluğa nə gəlir?',                  tr: 'a',                            wrong: 'an'                           },
  { en: '"___ MP" — düzgün artikl (em-səsi):',                         tr: 'an',                           wrong: 'a'                            },
  { en: '"___ one-way street" — düzgün artikl (w-səsi):',              tr: 'a',                            wrong: 'an'                           },
  { en: '"___ useful tip" — düzgün artikl (y-səsi):',                  tr: 'a',                            wrong: 'an'                           },
  { en: 'Peşə bildirən cümlələrdə a/an:',                              tr: 'Mütləq işlədilir',             wrong: 'İşlədilmir'                   },
  { en: 'İlk dəfə bəhs edilən şeydən sonra:',                         tr: 'the işlədilir',                wrong: 'a/an işlədilir'               },
  { en: '"I need ___ envelope." — boşluğa nə gəlir?',                 tr: 'an',                           wrong: 'a'                            },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O mühasibdir.',
      words: ['She', 'is', 'an', 'accountant', 'a', 'the'],
      answer: ['She', 'is', 'an', 'accountant'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O maraqlı kitab aldı.',
      words: ['He', 'bought', 'an', 'interesting', 'book', 'a', 'the'],
      answer: ['He', 'bought', 'an', 'interesting', 'book'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Buraya çatmaq bir saat çəkir.',
      words: ['It', 'takes', 'an', 'hour', 'to', 'get', 'here', 'a', 'the'],
      answer: ['It', 'takes', 'an', 'hour', 'to', 'get', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nə gözəl bir gündür!',
      words: ['What', 'a', 'beautiful', 'day', 'an', 'the', '!'],
      answer: ['What', 'a', 'beautiful', 'day', '!'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Həftədə iki dəfə idmana gedirəm.',
      words: ['I', 'go', 'to', 'the', 'gym', 'twice', 'a', 'week', 'an', 'day'],
      answer: ['I', 'go', 'to', 'the', 'gym', 'twice', 'a', 'week'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O dürüst insandır.',
      words: ['She', 'is', 'an', 'honest', 'person', 'a', 'the'],
      answer: ['She', 'is', 'an', 'honest', 'person'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bura yaxın bank varmı?',
      words: ['Is', 'there', 'a', 'bank', 'near', 'here', 'an', 'the', '?'],
      answer: ['Is', 'there', 'a', 'bank', 'near', 'here', '?'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O Avropa avtomobili sürür.',
      words: ['He', 'drives', 'a', 'European', 'car', 'an', 'the'],
      answer: ['He', 'drives', 'a', 'European', 'car'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənə qələm və zərf lazımdır.',
      words: ['I', 'need', 'a', 'pen', 'and', 'an', 'envelope', 'the', 'a'],
      answer: ['I', 'need', 'a', 'pen', 'and', 'an', 'envelope'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O saatda 90 kilometr sürətlə gedirdi.',
      words: ['She', 'was', 'driving', 'at', '90', 'kilometres', 'an', 'hour', 'a', 'the'],
      answer: ['She', 'was', 'driving', 'at', '90', 'kilometres', 'an', 'hour'],
    },
  ],
},
  
{ type: 'section_divider', title: 'the — müəyyən artikl' },

// ── UNIT 71–74 — the (Müəyyən Artikl) ───────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'the — Müəyyən Artikl (Dərs 1)',
  cards: [

    // ── Ekran 1: the nədir? ───────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'the — nədir və nə vaxt işlədilir?',
      content: 'the — müəyyən artikldır. Həm danışan, həm dinləyən hansı şeydən bəhs edildiyini bilir.\n\n❗ Azərbaycan dilində the-nin birbaşa qarşılığı yoxdur — bu səbəbdən ən çətin mövzulardan biridir!\n\nƏsas istifadə halları:',
      table: [
        ['Hal',                           'Nümunə'],
        ['İkinci dəfə bəhs edilən şey',   'I saw a dog. The dog was huge.'],
        ['Yeganə olan şeylər',            'the sun / the moon / the world'],
        ['Hər iki tərəfin bildiyi şey',   'Can you close the door?'],
        ['Musiqi alətləri',               'She plays the piano.'],
        ['Superlativ ilə',                'He is the best student.'],
      ],
      tip: 'the = "biz ikimiz də bilirik hansı şeydən danışırıq" mənasındadır.',
    },

    // ── Ekran 2: İkinci bəhs + yeganə şeylər ─────────────────────────────────
    {
      type: 'lesson',
      title: 'İkinci dəfə bəhs + yeganə şeylər',
      content: 'İlk dəfə a/an, sonra the. Dünyada tək olan şeylər həmişə the ilə:',
      examples: [
        { word: 'I bought a jacket. The jacket was on sale.',   az: 'ilk → a | sonra → the'              },
        { word: 'She has a dog. The dog loves to run.',         az: 'ilk → a | sonra → the'              },
        { word: 'The sun rises in the east.',                   az: 'yeganə — dünyada bir günəş var'      },
        { word: 'The moon was very bright last night.',         az: 'yeganə — dünyada bir ay var'         },
        { word: 'She travels around the world.',                az: 'yeganə — bir dünya var'              },
        { word: 'I read it on the internet.',                   az: 'yeganə — bir internet var'           },
        { word: 'We need to protect the environment.',          az: 'yeganə — bir ətraf mühit var'        },
        { word: 'The sky was clear all day.',                   az: 'yeganə — bir səma var'               },
      ],
      tip: 'the sun, the moon, the world, the sky, the earth, the sea, the internet — bunlar həmişə the ilə işlədilir.',
    },

    // ── Ekran 3: Hər iki tərəfin bildiyi şey + musiqi alətləri ───────────────
    {
      type: 'lesson',
      title: 'Kontekstdən məlum olan şey + musiqi alətləri',
      content: 'Kontekstdən aydın olanda the işlədilir. Musiqi alətlərindən əvvəl həmişə the gəlir:',
      examples: [
        { word: 'Can you pass the salt, please?',       az: 'süfrədəki duz — kontekstdən məlumdur'       },
        { word: 'Where is the bathroom?',               az: 'bu binadakı hamam — kontekstdən məlumdur'    },
        { word: 'The children are in the garden.',      az: 'bu ailənin uşaqları — kontekstdən məlumdur' },
        { word: 'I\'m going to the bank.',              az: 'hər ikimiz hansı bank olduğunu bilirik'     },
        { word: 'She plays the violin.',                az: 'musiqi aləti — həmişə the'                  },
        { word: 'He is learning the guitar.',           az: 'musiqi aləti — həmişə the'                  },
        { word: 'I used to play the flute.',            az: 'musiqi aləti — həmişə the'                  },
        { word: 'She performs the piano beautifully.',  az: 'musiqi aləti — həmişə the'                  },
      ],
      tip: 'Musiqi alətlərindən fərqli olaraq, idman növlərindən əvvəl the işlədilmir: She plays tennis. (the yox!)',
    },

    // ── Ekran 4: Superlativ + coğrafi istiqamətlər ────────────────────────────
    {
      type: 'lesson',
      title: 'Superlativ + coğrafi istiqamətlər',
      content: '"Ən ..." ifadəsi həmişə the ilə işlənir. İstiqamətlər (the north/south...) the ilə:',
      examples: [
        { word: 'She is the best player on the team.',          az: 'superlativ — the best'              },
        { word: 'It was the most interesting lecture.',         az: 'superlativ — the most'              },
        { word: 'That is the tallest building in the city.',    az: 'superlativ — the tallest'           },
        { word: 'It was the worst experience of my life.',      az: 'superlativ — the worst'             },
        { word: 'They live in the north of the country.',       az: 'istiqamət — the north'              },
        { word: 'She moved to the south of France.',            az: 'istiqamət — the south'              },
        { word: 'The sun rises in the east.',                   az: 'istiqamət — the east'               },
        { word: 'Winds come from the west in winter.',          az: 'istiqamət — the west'               },
      ],
      tip: 'the + superlativ həmişə birlikdə gəlir: the best, the most expensive, the tallest — heç vaxt "a best" demə.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She plays ___ piano." — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: 'the',
        },
        {
          q: '"___ sun is very bright today." — boşluğa nə gəlir?',
          options: ['A', 'The', '-'],
          answer: 'The',
        },
        {
          q: '"He is ___ best student in the class." — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: 'the',
        },
        {
          q: '"I saw a cat. ___ cat was black." — boşluğa nə gəlir?',
          options: ['A', 'The', '-'],
          answer: 'The',
        },
        {
          q: '"She plays ___ tennis." — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: '-',
        },
        {
          q: '"Can you close ___ window?" — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: 'the',
        },
        {
          q: '"They live in ___ north of the country." — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: 'the',
        },
        {
          q: '"I read it on ___ internet." — boşluğa nə gəlir?',
          options: ['a', 'the', '-'],
          answer: 'the',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'the — Coğrafi Adlar + the İşlənməyən Hallar (Dərs 2)',
  cards: [

    // ── Ekran 1: Coğrafi adlar — the işlədilən ────────────────────────────────
    {
      type: 'lesson',
      title: 'Coğrafi adlar — the işlədilən',
      content: 'Bəzi coğrafi adlar həmişə the ilə işlənir:',
      table: [
        ['Kateqoriya',           'Nümunələr'],
        ['Çaylar',               'the Nile, the Thames, the Amazon, the Kura'],
        ['Okeanlar / Dənizlər',  'the Pacific, the Atlantic, the Caspian Sea'],
        ['Dağ silsiləsi',        'the Alps, the Himalayas, the Caucasus'],
        ['Arxipelaq',            'the Canary Islands, the Maldives'],
        ['Ölkə (çoxluq/republic)', 'the USA, the UK, the Netherlands'],
        ['Səhralar',             'the Sahara, the Gobi'],
      ],
      tip: 'Qayda: çoxluq formasında olan coğrafi adlar (the Alps, the USA) və çaylar/okeanlar — həmişə the ilə.',
    },

    // ── Ekran 2: Coğrafi adlar — the işlədilməyən ────────────────────────────
    {
      type: 'lesson',
      title: 'Coğrafi adlar — the işlədilməyən',
      content: 'Bəzi coğrafi adlardan əvvəl the işlədilmir:',
      table: [
        ['Kateqoriya',       'Nümunələr'],
        ['Şəhərlər',         'London, Paris, Baku, Tokyo'],
        ['Tək ölkələr',      'France, Germany, Azerbaijan, Japan'],
        ['Qitələr',          'Europe, Asia, Africa, America'],
        ['Tək dağlar',       'Mount Everest, Mount Fuji, Mount Elbrus'],
        ['Göllər',           'Lake Victoria, Lake Ganja, Lake Baikal'],
        ['Küçə adları',      'Oxford Street, Fifth Avenue'],
      ],
      tip: 'Lake Ganja ✅ (the yox!) — çünki "Lake" artıq kateqoriyanı göstərir. The Lake Ganja ❌.',
    },

    // ── Ekran 3: the işlədilməyən digər hallar ────────────────────────────────
    {
      type: 'lesson',
      title: 'the işlədilməyən digər hallar',
      content: 'Bəzi ümumi anlayışlardan əvvəl the işlədilmir:',
      examples: [
        { word: 'She speaks French and Spanish.',          az: 'dillər — the yox'                            },
        { word: 'I study mathematics and history.',        az: 'fənlər — the yox'                            },
        { word: 'He loves football.',                      az: 'idman — the yox'                             },
        { word: 'I had breakfast at eight.',               az: 'yeməklər (ümumi) — the yox'                  },
        { word: 'She goes to school every day.',           az: 'at school/work/home — məqsəd bildirir, the yox' },
        { word: 'He is at work right now.',                az: 'at work — the yox'                           },
        { word: 'I go to bed at eleven.',                  az: 'to bed — the yox'                            },
        { word: 'She is in hospital.',                     az: 'in hospital (xəstədir) — the yox (BrE)'      },
      ],
      tip: '"go to school" (şagirddir) vs "go to the school" (binaya gedir) — the-nin olub-olmaması mənası dəyişdirir!',
    },

    // ── Ekran 4: a/an vs the — müqayisə ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'a/an vs the — müqayisə',
      content: 'İki artiklin fərqi:',
      table: [
        ['a / an',                              'the'],
        ['İlk dəfə bəhs edilir',                'İkinci dəfə / artıq məlumdur'],
        ['Hər hansı biri',                      'Konkret, müəyyən biri'],
        ['I need a doctor.',                    'The doctor is in room 3.'],
        ['She has a cat.',                      'The cat is sleeping now.'],
        ['I watched a film.',                   'Did you enjoy the film?'],
        ['He is a teacher.',                    'He is the best teacher here.'],
      ],
      tip: '"I need a doctor" = istənilən həkim | "The doctor called" = biliyimiz olan həmin həkim.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ Alps are in Europe." — boşluğa nə gəlir?',
          options: ['The', '-', 'A'],
          answer: 'The',
        },
        {
          q: '"She speaks ___ French." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"___ Amazon is in South America." — boşluğa nə gəlir?',
          options: ['The', '-', 'A'],
          answer: 'The',
        },
        {
          q: '"She goes to ___ school every day." (şagiddir) — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"___ Netherlands is a small country." — boşluğa nə gəlir?',
          options: ['The', '-', 'A'],
          answer: 'The',
        },
        {
          q: '"___ Lake Ganja is beautiful." — boşluğa nə gəlir?',
          options: ['The', 'A', '-'],
          answer: '-',
        },
        {
          q: '"___ Baku is the capital of Azerbaijan." — boşluğa nə gəlir?',
          options: ['The', 'A', '-'],
          answer: '-',
        },
        {
          q: '"He loves ___ football." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Musiqi alətlərindən əvvəl:',                                    tr: 'the işlədilir',              wrong: 'the işlədilmir'               },
  { en: 'İdman növlərindən əvvəl:',                                       tr: 'the işlədilmir',             wrong: 'the işlədilir'                },
  { en: '"___ sun" — düzgün artikl:',                                     tr: 'the',                        wrong: 'a'                            },
  { en: '"___ moon" — düzgün artikl:',                                    tr: 'the',                        wrong: 'a'                            },
  { en: '"___ Nile" — düzgün artikl:',                                    tr: 'the',                        wrong: '-'                            },
  { en: '"___ France" — düzgün artikl:',                                  tr: '-',                          wrong: 'the'                          },
  { en: '"___ Alps" — düzgün artikl:',                                    tr: 'the',                        wrong: '-'                            },
  { en: '"___ Mount Everest" — düzgün artikl:',                           tr: '-',                          wrong: 'the'                          },
  { en: '"___ USA" — düzgün artikl:',                                     tr: 'the',                        wrong: '-'                            },
  { en: '"___ Lake Baikal" — düzgün artikl:',                             tr: '-',                          wrong: 'the'                          },
  { en: '"She is ___ best doctor here." — boşluğa nə gəlir?',            tr: 'the',                        wrong: 'a'                            },
  { en: '"They live in ___ south of the country." — boşluğa nə gəlir?',  tr: 'the',                        wrong: '-'                            },
  { en: '"He plays ___ guitar." — boşluğa nə gəlir?',                    tr: 'the',                        wrong: '-'                            },
  { en: '"She speaks ___ English." — boşluğa nə gəlir?',                 tr: '-',                          wrong: 'the'                          },
  { en: '"I go to ___ work by bus." — boşluğa nə gəlir?',                tr: '-',                          wrong: 'the'                          },
  { en: '"I read it on ___ internet." — boşluğa nə gəlir?',              tr: 'the',                        wrong: '-'                            },
  { en: '"I saw a bird. ___ bird flew away." — boşluğa nə gəlir?',       tr: 'The',                        wrong: 'A'                            },
  { en: '"___ Sahara is in Africa." — boşluğa nə gəlir?',                tr: 'the',                        wrong: '-'                            },
  { en: '"Can you pass ___ salt?" — boşluğa nə gəlir?',                  tr: 'the',                        wrong: 'a'                            },
  { en: '"She goes to ___ school." (şagirddir) — boşluğa nə gəlir?',    tr: '-',                          wrong: 'the'                          },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O ən yaxşı tələbədir.',
      words: ['She', 'is', 'the', 'best', 'student', 'a', 'an', 'most'],
      answer: ['She', 'is', 'the', 'best', 'student'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Günəş şərqdə doğur.',
      words: ['The', 'sun', 'rises', 'in', 'the', 'east', 'a', 'west'],
      answer: ['The', 'sun', 'rises', 'in', 'the', 'east'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O skripka çalır.',
      words: ['She', 'plays', 'the', 'violin', 'a', '-', 'tennis'],
      answer: ['She', 'plays', 'the', 'violin'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Amazon Cənubi Amerikadadır.',
      words: ['The', 'Amazon', 'is', 'in', 'South', 'America', 'A', 'the'],
      answer: ['The', 'Amazon', 'is', 'in', 'South', 'America'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən bu axşam kinoya gedirəm.',
      words: ['I\'m', 'going', 'to', 'the', 'cinema', 'tonight', 'a', 'school'],
      answer: ['I\'m', 'going', 'to', 'the', 'cinema', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Niderlandiya kiçik bir ölkədir.',
      words: ['The', 'Netherlands', 'is', 'a', 'small', 'country', 'the', 'an'],
      answer: ['The', 'Netherlands', 'is', 'a', 'small', 'country'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Pəncərəni bağlaya bilərsənmi? Soyuqdur.',
      words: ['Can', 'you', 'close', 'the', 'window', 'It\'s', 'cold', 'a', 'an'],
      answer: ['Can', 'you', 'close', 'the', 'window', 'It\'s', 'cold'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O ölkənin şimalında yaşayırlar.',
      words: ['They', 'live', 'in', 'the', 'north', 'of', 'the', 'country', 'a', 'south'],
      answer: ['They', 'live', 'in', 'the', 'north', 'of', 'the', 'country'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Alp dağları Avropadadır.',
      words: ['The', 'Alps', 'are', 'in', 'Europe', 'A', 'the', 'Asia'],
      answer: ['The', 'Alps', 'are', 'in', 'Europe'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İnternetdə oxudum.',
      words: ['I', 'read', 'it', 'on', 'the', 'internet', 'a', 'an', 'in'],
      answer: ['I', 'read', 'it', 'on', 'the', 'internet'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Artikl işlənməyən hallar' },

// ── UNIT 70–72 — Artikl İşlənməyən Hallar (No Article) ──────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Artikl İşlənməyən Hallar — İdman, Dillər, Fənlər, Ümumi Anlayışlar (Dərs 1)',
  cards: [

    // ── Ekran 1: İdman + Dillər ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İdman, oyunlar və dillər — artikl yoxdur',
      content: 'İdman növləri və dil adlarından əvvəl heç bir artikl işlədilmir:\n\nİdman: football, tennis, chess, basketball, skiing...\nDillər: English, French, German, Arabic...',
      examples: [
        { word: 'I play football every weekend.',           az: 'idman — artikl yox'                   },
        { word: 'She is learning basketball.',             az: 'idman — artikl yox'                   },
        { word: 'Do you play chess?',                      az: 'oyun — artikl yox'                    },
        { word: 'Do you think English is difficult?',      az: 'dil — artikl yox'                     },
        { word: 'She speaks French fluently.',             az: 'dil — artikl yox'                     },
        { word: 'He studies Arabic at university.',        az: 'dil — artikl yox'                     },
      ],
      tip: 'İdman: artikl yox. Musiqi aləti: the var! → She plays tennis. ✅ She plays the violin. ✅',
    },

    // ── Ekran 2: Fənlər + Ümumi anlayışlar ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Fənn adları + ümumi anlayışlar',
      content: 'Fənn adları və ümumi mənada işlədilən isimlərdən əvvəl artikl işlədilmir:',
      examples: [
        { word: 'Tom is studying physics and chemistry.',  az: 'fənlər — artikl yox'                  },
        { word: 'She teaches history and geography.',      az: 'fənlər — artikl yox'                  },
        { word: 'I\'m not good at mathematics.',          az: 'fənn — artikl yox'                    },
        { word: 'I like music, especially jazz.',         az: 'ümumi anlayış — artikl yox'            },
        { word: 'We don\'t eat meat very often.',         az: 'ümumi anlayış — artikl yox'            },
        { word: 'Life is not possible without water.',    az: 'ümumi anlayış — artikl yox'            },
      ],
      tip: '"I like music" (ümumi) ≠ "The music at the party was loud" (konkret). Ümumidə artikl yox, konkretdə the var.',
    },

    // ── Ekran 3: Ümumi vs Konkret ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Ümumi anlayış vs konkret — fərq',
      content: 'Eyni söz ümumi mənada artikl olmadan, konkret mənada the ilə işlədilir:',
      table: [
        ['Artikl yox — ümumi',                       'the var — konkret'],
        ['Flowers are beautiful.',                   'The flowers in this garden are lovely.'],
        ['I don\'t like cold weather.',              'The weather today is terrible.'],
        ['We don\'t eat fish often.',                'The fish we ordered was delicious.'],
        ['Are you interested in history?',           'Are you interested in the history of Baku?'],
        ['I like music.',                            'The music at the concert was amazing.'],
        ['Water is essential for life.',             'The water in this river is clean.'],
      ],
      tip: 'Ümumi qayda: konkret bir şeydən danışırsan → the. Bütün növ / bütün miqdar → artikl yox.',
    },

    // ── Ekran 4: İdman vs Musiqi aləti — tələ ────────────────────────────────
    {
      type: 'lesson',
      title: 'İdman vs musiqi aləti — vacib fərq',
      content: 'Bu fərq çox tez-tez sınaqda çıxır — diqqətlə öyrən:',
      table: [
        ['İdman (artikl yox)',          'Musiqi aləti (the var)'],
        ['She plays tennis.',           'She plays the piano.'],
        ['He loves football.',          'He is learning the guitar.'],
        ['Do you play chess?',          'Can you play the violin?'],
        ['I go skiing in winter.',      'She performed the flute at the concert.'],
        ['They play basketball.',       'He practises the drums every day.'],
      ],
      tip: 'Oyun + idman = artikl yox. Musiqi aləti = the. Bu istisna əzbərlənməlidir!',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She plays ___ tennis." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"He plays ___ guitar." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: 'the',
        },
        {
          q: '"Do you think ___ French is hard?" — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"She is studying ___ biology." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"I like ___ music." (ümumi) — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"___ music at the party was loud." — boşluğa nə gəlir?',
          options: ['The', 'A', '-'],
          answer: 'The',
        },
        {
          q: '"We don\'t eat ___ meat." (ümumi) — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"I hate ___ exams." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Artikl İşlənməyən Hallar — Xüsusi İfadələr və Coğrafi Adlar (Dərs 2)',
  cards: [

    // ── Ekran 1: Funksional ifadələr — go to work/school/bed ─────────────────
    {
      type: 'lesson',
      title: 'Funksional ifadələr — artikl yoxdur',
      content: 'Bu ifadələrdə konkret yer deyil, funksiya nəzərdə tutulur — artikl işlədilmir:',
      table: [
        ['İfadə',                 'Nümunə'],
        ['go to work / at work',  'I\'m going to work now.'],
        ['go to school / at school', 'What did you learn at school?'],
        ['go to university',      'She wants to go to university.'],
        ['go to hospital / in hospital', 'He had to go to hospital.'],
        ['go to prison / in prison', 'Why is he in prison?'],
        ['go to church / at church', 'She goes to church on Sundays.'],
        ['go to bed / in bed',    'I\'m going to bed. Goodnight!'],
        ['go home / at home',     'I\'m going home. (not "to home")'],
      ],
      tip: '"go to the hospital" (ziyarətçi, konkret bina) vs "go to hospital" (xəstədir, funksional məna) — the-nin olub-olmaması mənası dəyişir!',
    },

    // ── Ekran 2: Funksional ifadələr — the ilə fərq ───────────────────────────
    {
      type: 'lesson',
      title: 'Funksional ifadələr — the ilə fərq',
      content: 'Eyni yerlər funksional mənada artikl olmadan, konkret mənada the ilə işlənir:',
      table: [
        ['Artikl yox — funksional məna',            'the var — konkret bina/yer'],
        ['go to school (şagirddir)',                'go to the school (binaya gedir)'],
        ['in hospital (xəstədir)',                  'visit the hospital (ziyarət edir)'],
        ['go to prison (cəza alıb)',                'go to the prison (işinə görə gedir)'],
        ['go to church (ibadət edir)',              'go to the church (binaya gedir)'],
        ['go to university (tələbədir)',            'go to the university (campusa gedir)'],
      ],
      tip: '"She went to the school to speak with the teacher." — burada the var, çünki konkret binaya gedir, şagird kimi deyil.',
    },

    // ── Ekran 3: Coğrafi adlar — artikl yox ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Coğrafi adlar — artikl işlədilmir',
      content: 'Bu kateqoriyalarda artikl işlədilmir:',
      examples: [
        { word: 'France is a very large country.',         az: 'tək ölkə — artikl yox'                },
        { word: 'Cairo is the capital of Egypt.',          az: 'şəhər — artikl yox'                   },
        { word: 'Corsica is an island.',                   az: 'tək ada — artikl yox'                 },
        { word: 'Mount Everest is the highest mountain.',  az: 'tək dağ — artikl yox'                 },
        { word: 'Lake Victoria is in Africa.',             az: 'göl — artikl yox'                     },
        { word: 'Kevin lives in Newton Street.',           az: 'küçə adı — artikl yox'                },
        { word: 'She studies at Cambridge University.',    az: 'ad + university — artikl yox'         },
        { word: 'The flight lands at Kennedy Airport.',    az: 'ad + airport — artikl yox'            },
      ],
      tip: 'Lake Victoria, Mount Everest — bu adlarda kateqoriya sözü (Lake/Mount) artıq mənanı verir, the lazım deyil.',
    },

    // ── Ekran 4: Xülasə — the var vs yox ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Xülasə — the var vs artikl yox',
      content: 'Bütün qaydaları bir yerdə:',
      table: [
        ['Artikl yox',                           'the var'],
        ['tennis, football (idman)',             'the piano, the violin (musiqi)'],
        ['English, French (dillər)',             'the north, the south (istiqamət)'],
        ['physics, history (fənlər)',            'the best, the most (superlativ)'],
        ['go to work / bed / school',            'go to the cinema / the bank'],
        ['France, Cairo, Mount Everest',         'the Alps, the Amazon, the UK'],
        ['music, water, life (ümumi)',           'the music at the party (konkret)'],
      ],
      tip: 'Əgər şübhəlisinisə, özündən soruş: "Bu ümumi mənadadır, yoxsa konkret bir şeydən danışıram?" Ümumi → artikl yox. Konkret → the.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I\'m going to ___ work now." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"She goes to ___ church on Sundays." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"___ France is a large country." — boşluğa nə gəlir?',
          options: ['The', 'A', '-'],
          answer: '-',
        },
        {
          q: '"I\'m going to ___ bed. Goodnight!" — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"He had to go to ___ hospital." (xəstədir) — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"She studies at ___ Cambridge University." — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"What did you learn at ___ school?" — boşluğa nə gəlir?',
          options: ['the', 'a', '-'],
          answer: '-',
        },
        {
          q: '"I\'m going ___  home." — boşluğa nə gəlir?',
          options: ['to the', 'to a', '-'],
          answer: '-',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'İdman növlərindən əvvəl artikl:',                               tr: 'işlədilmir',                   wrong: 'the işlədilir'                },
  { en: 'Musiqi alətlərindən əvvəl artikl:',                             tr: 'the işlədilir',                wrong: 'işlədilmir'                   },
  { en: '"She plays ___ violin." — boşluğa nə gəlir?',                  tr: 'the',                          wrong: '-'                            },
  { en: '"He plays ___ football." — boşluğa nə gəlir?',                 tr: '-',                            wrong: 'the'                          },
  { en: '"Do you speak ___ German?" — boşluğa nə gəlir?',               tr: '-',                            wrong: 'the'                          },
  { en: '"She studies ___ chemistry." — boşluğa nə gəlir?',             tr: '-',                            wrong: 'the'                          },
  { en: '"I\'m going to ___ work." — boşluğa nə gəlir?',                tr: '-',                            wrong: 'the'                          },
  { en: '"I\'m going to ___ cinema." — boşluğa nə gəlir?',              tr: 'the',                          wrong: '-'                            },
  { en: '"He had to go to ___ hospital." (xəstədir) — boşluğa nə gəlir?', tr: '-',                         wrong: 'the'                          },
  { en: '"___ life is not possible without ___ water." — boşluqlar:',   tr: '- / -',                        wrong: 'The / the'                    },
  { en: '"I like ___ music." (ümumi) — boşluğa nə gəlir?',              tr: '-',                            wrong: 'the'                          },
  { en: '"___ music at the party was great." — boşluğa nə gəlir?',      tr: 'The',                          wrong: '-'                            },
  { en: '"___ France is a beautiful country." — boşluğa nə gəlir?',     tr: '-',                            wrong: 'The'                          },
  { en: '"___ Netherlands is small." — boşluğa nə gəlir?',              tr: 'The',                          wrong: '-'                            },
  { en: '"She goes to ___ school." (şagirddir) — boşluğa nə gəlir?',   tr: '-',                            wrong: 'the'                          },
  { en: '"___ Lake Victoria is in Africa." — boşluğa nə gəlir?',        tr: '-',                            wrong: 'The'                          },
  { en: '"I\'m going ___ home." — boşluğa nə gəlir?',                   tr: '-',                            wrong: 'to the'                       },
  { en: '"She wants to go to ___ university." — boşluğa nə gəlir?',     tr: '-',                            wrong: 'the'                          },
  { en: '"Are you interested in ___ history?" (ümumi) — boşluğa nə gəlir?', tr: '-',                       wrong: 'the'                          },
  { en: '"Are you interested in ___ history of this city?" — boşluğa nə gəlir?', tr: 'the',                wrong: '-'                            },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən işə gedirəm. Sağ ol!',
      words: ['I\'m', 'going', 'to', 'work', 'Goodbye', 'the', 'a', '!'],
      answer: ['I\'m', 'going', 'to', 'work', 'Goodbye', '!'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O tennis oynayır, amma mən piano çalıram.',
      words: ['She', 'plays', 'tennis', 'but', 'I', 'play', 'the', 'piano', 'a', 'football'],
      answer: ['She', 'plays', 'tennis', 'but', 'I', 'play', 'the', 'piano'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tom fizika və kimya oxuyur.',
      words: ['Tom', 'is', 'studying', 'physics', 'and', 'chemistry', 'the', 'a'],
      answer: ['Tom', 'is', 'studying', 'physics', 'and', 'chemistry'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yorulmuşam. Yatmağa gedirəm.',
      words: ['I\'m', 'tired', 'I\'m', 'going', 'to', 'bed', 'the', 'a', '.'],
      answer: ['I\'m', 'tired', '.', 'I\'m', 'going', 'to', 'bed', '.'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O anadilli kimi fransızca danışır.',
      words: ['She', 'speaks', 'French', 'like', 'a', 'native', 'the', 'speaker'],
      answer: ['She', 'speaks', 'French', 'like', 'a', 'native', 'speaker'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O xəstəxanaya getməli oldu.',
      words: ['He', 'had', 'to', 'go', 'to', 'hospital', 'the', 'a', 'work'],
      answer: ['He', 'had', 'to', 'go', 'to', 'hospital'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Fransız dili maraqlıdır.',
      words: ['French', 'is', 'an', 'interesting', 'language', 'The', 'a', 'the'],
      answer: ['French', 'is', 'an', 'interesting', 'language'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Keçən bazar günü kilsəyə getdi.',
      words: ['She', 'went', 'to', 'church', 'last', 'Sunday', 'the', 'a', 'school'],
      answer: ['She', 'went', 'to', 'church', 'last', 'Sunday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam evdə qalıram.',
      words: ['I\'m', 'staying', 'at', 'home', 'tonight', 'the', 'a', 'work'],
      answer: ['I\'m', 'staying', 'at', 'home', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu şəhərin tarixiylə maraqlanırsanmı?',
      words: ['Are', 'you', 'interested', 'in', 'the', 'history', 'of', 'this', 'city', 'a', '-', '?'],
      answer: ['Are', 'you', 'interested', 'in', 'the', 'history', 'of', 'this', 'city', '?'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Sayılan isimlər — çoxluq' },

// ── UNIT 65 — Sayılan İsimlər: Çoxluq (Plural Nouns) ────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Çoxluq — Yazılış Qaydaları (Dərs 1)',
  cards: [

    // ── Ekran 1: Ümumi qayda + xüsusi sonluqlar ───────────────────────────────
    {
      type: 'lesson',
      title: 'Çoxluq — yazılış qaydaları',
      content: 'Əksər isimlərin çoxluğu -s əlavə etməklə düzəlir. Bəzi son hərflər xüsusi qayda tələb edir:',
      table: [
        ['Son hərflər',            'Qayda',       'Nümunə'],
        ['ümumi hal',              '+ -s',         'flower → flowers, week → weeks'],
        ['-s / -sh / -ch / -x',   '+ -es',        'bus → buses, dish → dishes, box → boxes'],
        ['-o',                     '+ -es',        'potato → potatoes, tomato → tomatoes'],
        ['-y (samitdən sonra)',    '-y → -ies',    'baby → babies, party → parties'],
        ['-ay / -ey / -oy',       '+ -s',          'day → days, monkey → monkeys, boy → boys'],
        ['-f / -fe',               '-f → -ves',    'shelf → shelves, knife → knives, wife → wives'],
      ],
      tip: '-y qaydası: samitdən sonra -ies (baby→babies), saitdən sonra sadəcə -s (day→days).',
    },

    // ── Ekran 2: Yazılış nümunələri ───────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Yazılış qaydaları — nümunələr',
      content: 'Hər qayda üçün əlavə nümunələr:',
      examples: [
        { word: 'church → churches',          az: '-ch → -es'                              },
        { word: 'address → addresses',        az: '-s → -es'                               },
        { word: 'sandwich → sandwiches',      az: '-ch → -es'                              },
        { word: 'dictionary → dictionaries',  az: '-y (samitdən sonra) → -ies'             },
        { word: 'city → cities',              az: '-y (samitdən sonra) → -ies'             },
        { word: 'family → families',          az: '-y (samitdən sonra) → -ies'             },
        { word: 'leaf → leaves',              az: '-f → -ves'                              },
        { word: 'half → halves',              az: '-f → -ves'                              },
      ],
      tip: 'holiday → holidays ✅ (ay+y → sadəcə -s). city → cities ✅ (samit t+y → -ies). Fərqi gör!',
    },

    // ── Ekran 3: Düzgünsüz çoxluqlar ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Düzgünsüz çoxluqlar — əzbərlə',
      content: 'Bu isimlərin çoxluğu qaydaya uyğun deyil — əzbərlənməlidir:',
      table: [
        ['Tək',     'Çox'],
        ['man',     'men'],
        ['woman',   'women'],
        ['child',   'children'],
        ['foot',    'feet'],
        ['tooth',   'teeth'],
        ['mouse',   'mice'],
        ['sheep',   'sheep (dəyişmir)'],
        ['fish',    'fish (dəyişmir)'],
        ['person',  'people'],
      ],
      tip: 'sheep və fish dəyişmir: one sheep → two sheep ✅. "two sheeps" ❌.',
    },

    // ── Ekran 4: person/people + police ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'person → people / police',
      content: 'person-un çoxluğu people-dır. police həmişə cəm kimi işlədilir:',
      examples: [
        { word: 'She is a nice person.',              az: 'tək — person'                              },
        { word: 'They are nice people.',              az: 'çox — people (persons yox!)'               },
        { word: 'A lot of people speak English.',     az: 'people → cəm fel (speaks yox!)'            },
        { word: 'I like the people here.',            az: 'people = they'                             },
        { word: 'The police are looking for him.',    az: 'police → həmişə cəm (is yox!)'             },
        { word: 'Why are the police here?',           az: 'police → cəm sual'                         },
      ],
      tip: '"people" artıq cəm mənalıdır — "peoples" demə. "A lot of people speak" — speak (speaks yox).',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"baby" sözünün çoxluğu:',
          options: ['babys', 'babies', 'babes'],
          answer: 'babies',
        },
        {
          q: '"knife" sözünün çoxluğu:',
          options: ['knifes', 'knifes', 'knives'],
          answer: 'knives',
        },
        {
          q: '"child" sözünün çoxluğu:',
          options: ['childs', 'childen', 'children'],
          answer: 'children',
        },
        {
          q: '"dish" sözünün çoxluğu:',
          options: ['dishs', 'dishes', 'dishies'],
          answer: 'dishes',
        },
        {
          q: '"sheep" sözünün çoxluğu:',
          options: ['sheeps', 'sheep', 'sheepes'],
          answer: 'sheep',
        },
        {
          q: '"A lot of people ___ English." — düzgün fel:',
          options: ['speaks', 'speak', 'is speaking'],
          answer: 'speak',
        },
        {
          q: '"tooth" sözünün çoxluğu:',
          options: ['tooths', 'teeth', 'toothes'],
          answer: 'teeth',
        },
        {
          q: '"city" sözünün çoxluğu:',
          options: ['citys', 'cities', 'cites'],
          answer: 'cities',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Çoxluq — Həmişə Cəm İsimlər + Ümumi Səhvlər (Dərs 2)',
  cards: [

    // ── Ekran 1: Həmişə cəm işlənən isimlər ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Həmişə cəm işlənən isimlər',
      content: 'Bu isimlərin tək forması yoxdur — həmişə cəm kimi işlədilir və cəm fel alır:',
      table: [
        ['İsim',        'Düzgün',                              'Yanlış'],
        ['scissors',    'Where are the scissors?',             'Where is the scissor?'],
        ['glasses',     'My glasses are on the table.',        'My glass is on the table.'],
        ['trousers',    'These trousers are too long.',        'This trouser is too long.'],
        ['jeans',       'Your jeans look great.',              'Your jean looks great.'],
        ['pyjamas',     'He put on his pyjamas.',              'He put on his pyjama.'],
      ],
      tip: 'Bu isimlər həmişə cəm — həmişə "they/them" əvəzliyi ilə işlədilir: "I like your trousers. They\'re nice."',
    },

    // ── Ekran 2: pair of ilə ──────────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"a pair of" ilə tək danışmaq',
      content: 'Həmişə cəm olan isimlərdən tək danışmaq üçün "a pair of" işlədilir:',
      examples: [
        { word: 'I need a new pair of jeans.',          az: 'a pair of jeans — tək məna'            },
        { word: 'She bought two pairs of trousers.',    az: 'two pairs of — iki ədəd'               },
        { word: 'Do you have a pair of scissors?',      az: 'a pair of scissors — tək məna'         },
        { word: 'I need some new jeans.',               az: 'some new jeans — da qəbul edilir'       },
        { word: 'He broke his glasses.',                az: 'glasses — cəm kimi qalır'              },
        { word: 'She needs a new pair of glasses.',     az: 'a pair of glasses — tək məna'          },
      ],
      tip: '"a new jeans" ❌ — ya "a new pair of jeans" ✅ ya da "some new jeans" ✅.',
    },

    // ── Ekran 3: Tez-tez edilən səhvlər ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'Azərbaycanlı öyrənənlərin ən çox etdiyi çoxluq səhvləri:',
      table: [
        ['Yanlış',                                    'Düzgün'],
        ['two mens',                                  'two men'],
        ['three childs',                              'three children'],
        ['many persons',                              'many people'],
        ['a lot of sheeps',                           'a lot of sheep'],
        ['I need a new jeans.',                       'I need a new pair of jeans.'],
        ['This scissor is sharp.',                    'These scissors are sharp.'],
        ['He put on his pyjama.',                     'He put on his pyjamas.'],
        ['The police is here.',                       'The police are here.'],
      ],
      tip: 'persons istifadəsi çox nadir hallarda rəsmi dildə görünür — danışıq dilindəki doğrusu people-dır.',
    },

    // ── Ekran 4: Sayılabilən isimlərlə ümumi qayda ────────────────────────────
    {
      type: 'lesson',
      title: 'Çoxluq — ümumi xatırlatma',
      content: 'Sayılan isimlərdə ədəd + çoxluq forması işlədilir:',
      examples: [
        { word: 'There was a woman with two men.',           az: 'woman → tək, men → çox'            },
        { word: 'I have three children.',                    az: 'children — düzgünsüz çoxluq'        },
        { word: 'Most of my friends are students.',          az: 'friends, students — cəm'            },
        { word: 'The town was full of tourists.',            az: 'tourists — -s ilə adi cəm'          },
        { word: 'We caught a lot of fish.',                  az: 'fish — dəyişmir'                    },
        { word: 'I don\'t like mice.',                       az: 'mice — mouse-un çoxluğu'            },
        { word: 'These scissors aren\'t sharp enough.',      az: 'scissors — həmişə cəm'              },
        { word: 'My feet hurt after the long walk.',         az: 'feet — foot-un çoxluğu'             },
      ],
      tip: 'Bir ismin çoxluğunu bilmirsənsə, əvvəlcə adi -s qaydasını sına, sonra düzgünsüz formalar siyahısına bax.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I need a new jeans.',
            'I need a new pair of jeans.',
            'I need a new jean.',
          ],
          answer: 'I need a new pair of jeans.',
        },
        {
          q: '"Where ___ my glasses?" — düzgün fel:',
          options: ['is', 'are', 'was'],
          answer: 'are',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'The police is outside.',
            'The police are outside.',
            'The polices are outside.',
          ],
          answer: 'The police are outside.',
        },
        {
          q: '"He put on his ___ and went to bed." — boşluğa nə gəlir?',
          options: ['pyjama', 'pyjamas', 'pyjamases'],
          answer: 'pyjamas',
        },
        {
          q: '"person" sözünün çoxluğu:',
          options: ['persons', 'peoples', 'people'],
          answer: 'people',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'These scissor aren\'t sharp.',
            'This scissors isn\'t sharp.',
            'These scissors aren\'t sharp.',
          ],
          answer: 'These scissors aren\'t sharp.',
        },
        {
          q: '"I can\'t find my glasses. Have you seen ___?" — boşluğa nə gəlir?',
          options: ['it', 'them', 'him'],
          answer: 'them',
        },
        {
          q: '"foot" sözünün çoxluğu:',
          options: ['foots', 'feets', 'feet'],
          answer: 'feet',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"baby" → çoxluq:',                                              tr: 'babies',                       wrong: 'babys'                        },
  { en: '"knife" → çoxluq:',                                             tr: 'knives',                       wrong: 'knifes'                       },
  { en: '"child" → çoxluq:',                                             tr: 'children',                     wrong: 'childs'                       },
  { en: '"woman" → çoxluq:',                                             tr: 'women',                        wrong: 'womans'                       },
  { en: '"tooth" → çoxluq:',                                             tr: 'teeth',                        wrong: 'tooths'                       },
  { en: '"mouse" → çoxluq:',                                             tr: 'mice',                         wrong: 'mouses'                       },
  { en: '"sheep" → çoxluq:',                                             tr: 'sheep',                        wrong: 'sheeps'                       },
  { en: '"city" → çoxluq:',                                              tr: 'cities',                       wrong: 'citys'                        },
  { en: '"leaf" → çoxluq:',                                              tr: 'leaves',                       wrong: 'leafs'                        },
  { en: '"potato" → çoxluq:',                                            tr: 'potatoes',                     wrong: 'potatos'                      },
  { en: '"address" → çoxluq:',                                           tr: 'addresses',                    wrong: 'addresss'                     },
  { en: '"family" → çoxluq:',                                            tr: 'families',                     wrong: 'familys'                      },
  { en: '"person" → çoxluq:',                                            tr: 'people',                       wrong: 'persons'                      },
  { en: '"fish" → çoxluq:',                                              tr: 'fish',                         wrong: 'fishes'                       },
  { en: '"scissors" → fel:',                                             tr: 'are (həmişə cəm)',              wrong: 'is'                           },
  { en: '"The police ___ here." — düzgün fel:',                          tr: 'are',                          wrong: 'is'                           },
  { en: '"jeans" üçün tək danışmaq üçün:',                              tr: 'a pair of jeans',              wrong: 'a jeans'                      },
  { en: '"A lot of people ___ English." — düzgün fel:',                  tr: 'speak',                        wrong: 'speaks'                       },
  { en: '"sandwich" → çoxluq:',                                          tr: 'sandwiches',                   wrong: 'sandwichs'                    },
  { en: '"half" → çoxluq:',                                              tr: 'halves',                       wrong: 'halfs'                        },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O, paltarını geyinib yatmağa getdi.',
      words: ['He', 'put', 'on', 'his', 'pyjamas', 'and', 'went', 'to', 'bed', 'pyjama', 'the'],
      answer: ['He', 'put', 'on', 'his', 'pyjamas', 'and', 'went', 'to', 'bed'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənə yeni bir cins şalvar lazımdır.',
      words: ['I', 'need', 'a', 'new', 'pair', 'of', 'jeans', 'jean', 'the'],
      answer: ['I', 'need', 'a', 'new', 'pair', 'of', 'jeans'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu qayçı kifayət qədər iti deyil.',
      words: ['These', 'scissors', 'aren\'t', 'sharp', 'enough', 'This', 'scissor', 'isn\'t'],
      answer: ['These', 'scissors', 'aren\'t', 'sharp', 'enough'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çox adam ingilis dilini öyrənir.',
      words: ['A', 'lot', 'of', 'people', 'are', 'learning', 'English', 'person', 'is'],
      answer: ['A', 'lot', 'of', 'people', 'are', 'learning', 'English'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O üç uşağı olan bir qadındır.',
      words: ['She', 'is', 'a', 'woman', 'with', 'three', 'children', 'childs', 'womans'],
      answer: ['She', 'is', 'a', 'woman', 'with', 'three', 'children'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Polis bu hadisəni araşdırır.',
      words: ['The', 'police', 'are', 'investigating', 'the', 'incident', 'is', 'polices'],
      answer: ['The', 'police', 'are', 'investigating', 'the', 'incident'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bütün dişlərimi fırçaladım.',
      words: ['I', 'brushed', 'all', 'my', 'teeth', 'tooths', 'toothes', 'the'],
      answer: ['I', 'brushed', 'all', 'my', 'teeth'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çayda çoxlu balıq var.',
      words: ['There', 'are', 'a', 'lot', 'of', 'fish', 'in', 'the', 'river', 'fishes'],
      answer: ['There', 'are', 'a', 'lot', 'of', 'fish', 'in', 'the', 'river'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Rəfdəki bıçaqlar haradadır?',
      words: ['Where', 'are', 'the', 'knives', 'on', 'the', 'shelf', 'knife', 'is'],
      answer: ['Where', 'are', 'the', 'knives', 'on', 'the', 'shelf'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uzun gəzintidən sonra ayaqlarım ağrıdı.',
      words: ['My', 'feet', 'hurt', 'after', 'the', 'long', 'walk', 'foot', 'foots'],
      answer: ['My', 'feet', 'hurt', 'after', 'the', 'long', 'walk'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Sayılmayan isimlər' },

// ── UNIT 66–67, 82 — Sayılmayan İsimlər & How much / How many ────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Sayılan vs Sayılmayan İsimlər (Dərs 1)',
  cards: [

    // ── Ekran 1: Sayılan vs Sayılmayan ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sayılan (Countable) vs Sayılmayan (Uncountable)',
      content: 'Sayılan isimlər: tək və cəm forması var, a/an ilə işlədilir.\nSayılmayan isimlər: yalnız bir forması var, -s qoyulmur, a/an ilə işlədilmir.',
      table: [
        ['Sayılan (Countable)',          'Sayılmayan (Uncountable)'],
        ['a car / two cars',             'water (a water ❌)'],
        ['an idea / many ideas',         'music (a music ❌)'],
        ['a key / some keys',            'rice (two rices ❌)'],
        ['a flower / some flowers',      'money (a money ❌)'],
        ['a job / three jobs',           'work (a work ❌)'],
      ],
      tip: 'Sayılmayan isimlərlə a/an heç vaxt işlədilmir. "a water", "a music", "a money" — hamısı yanlışdır.',
    },

    // ── Ekran 2: Həmişə sayılmayan isimlər ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Həmişə sayılmayan isimlər — diqqət!',
      content: 'Bu isimlər ingilis dilində həmişə sayılmayandır — çoxluq forması yoxdur:',
      table: [
        ['İsim',          'Düzgün',                  'Yanlış'],
        ['information',   'some information',        'informations / an information'],
        ['advice',        'some advice',             'advices / an advice'],
        ['weather',       'nice weather',            'a nice weather'],
        ['news',          'some good news',          'a good news / news are'],
        ['bread',         'some bread',              'a bread / breads'],
        ['hair',          'long hair',               'long hairs'],
        ['furniture',     'some furniture',          'furnitures'],
        ['luggage',       'some luggage',            'luggages / a luggage'],
      ],
      tip: 'news görünüşcə cəm kimi görünür, amma sayılmayandır: "The news is good." (is — are yox!)',
    },

    // ── Ekran 3: work vs job ──────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'work vs job — vacib fərq',
      content: 'work sayılmayandır, job sayılayandır:',
      examples: [
        { word: 'I\'ve got a new job.',          az: 'job — sayılan: a new job ✅'          },
        { word: 'It\'s hard work.',              az: 'work — sayılmayan: a hard work ❌'    },
        { word: 'She found a good job.',         az: 'job — sayılan: a good job ✅'         },
        { word: 'We did a lot of work.',         az: 'work — sayılmayan: a lot of work ✅'  },
        { word: 'He has two jobs.',              az: 'job — sayılan: two jobs ✅'           },
        { word: 'This work is difficult.',       az: 'work — sayılmayan: this work ✅'      },
      ],
      tip: '"a new work" ❌ — doğrusu ya "a new job" ya da "some new work" olmalıdır.',
    },

    // ── Ekran 4: a piece of / a glass of ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sayılmayan isimləri ölçmək — a piece of / a cup of...',
      content: 'Sayılmayan isimlərin miqdarını ifadə etmək üçün xüsusi ifadələr işlədilir:',
      table: [
        ['İfadə',              'Nümunə'],
        ['a glass of',         'a glass of water / juice'],
        ['a cup of',           'a cup of coffee / tea'],
        ['a bottle of',        'a bottle of milk / water'],
        ['a bowl of',          'a bowl of rice / soup'],
        ['a piece of',         'a piece of cheese / bread / music'],
        ['a bar of',           'a bar of chocolate / soap'],
        ['a loaf of',          'a loaf of bread'],
        ['a can of',           'a can of oil / soup'],
      ],
      tip: '"two pieces of bread" ✅ — "two breads" ❌. Ölçü ifadəsi sayıla bilir, ismin özü dəyişmir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"information" sayılan (C) yoxsa sayılmayan (U)?',
          options: ['Sayılan (C)', 'Sayılmayan (U)'],
          answer: 'Sayılmayan (U)',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She gave me a good advice.',
            'She gave me some good advice.',
            'She gave me good advices.',
          ],
          answer: 'She gave me some good advice.',
        },
        {
          q: '"furniture" sayılan (C) yoxsa sayılmayan (U)?',
          options: ['Sayılan (C)', 'Sayılmayan (U)'],
          answer: 'Sayılmayan (U)',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I\'ve got a new work.',
            'I\'ve got a new job.',
            'I\'ve got new works.',
          ],
          answer: 'I\'ve got a new job.',
        },
        {
          q: '"news" ilə düzgün fel:',
          options: ['The news are good.', 'The news is good.', 'The news were good.'],
          answer: 'The news is good.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Sue has got long hairs.',
            'Sue has got a long hair.',
            'Sue has got long hair.',
          ],
          answer: 'Sue has got long hair.',
        },
        {
          q: '"bread" üçün düzgün ifadə:',
          options: ['a bread', 'two breads', 'a loaf of bread'],
          answer: 'a loaf of bread',
        },
        {
          q: '"idea" sayılan (C) yoxsa sayılmayan (U)?',
          options: ['Sayılan (C)', 'Sayılmayan (U)'],
          answer: 'Sayılan (C)',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'much / many / a lot of + How much / How many (Dərs 2)',
  cards: [

    // ── Ekran 1: much / many / a lot of ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'much / many / a lot of — fərq',
      content: 'much — sayılmayan isimlər ilə\nmany — sayılan isimlər ilə\na lot of — hər ikisi ilə:',
      table: [
        ['',           'Sayılmayan',              'Sayılan (cəm)'],
        ['much',       'much money / food',       '❌ much books'],
        ['many',       '❌ many water',           'many books / people'],
        ['a lot of',   'a lot of money',          'a lot of books'],
      ],
      tip: 'much adətən sual və inkarda işlənir. Müsbət cümlədə a lot of daha təbiidir: "I drink a lot of coffee." ✅',
    },

    // ── Ekran 2: much / many — sual və inkar ─────────────────────────────────
    {
      type: 'lesson',
      title: 'much / many — sual və inkar nümunələri',
      content: 'much/many adətən sual (?) və inkar (not) cümlələrində işlədilir:',
      examples: [
        { word: 'Did you buy much food?',           az: 'much — sayılmayan, sual'              },
        { word: 'Did you buy many books?',          az: 'many — sayılan, sual'                 },
        { word: 'We haven\'t got much petrol.',     az: 'much — sayılmayan, inkar'             },
        { word: 'We don\'t know many people.',      az: 'many — sayılan, inkar'                },
        { word: 'I drink a lot of coffee.',         az: 'a lot of — müsbət cümlə'              },
        { word: 'She has been to a lot of countries.', az: 'a lot of — müsbət cümlə'          },
      ],
      tip: '"I drink much coffee." — qrammatik cəhətdən yanlış deyil, lakin danışıqda qəribə səslənir. a lot of de.',
    },

    // ── Ekran 3: How much / How many ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'How much / How many',
      content: 'How much — sayılmayan isimlər üçün\nHow many — sayılan isimlər üçün:',
      table: [
        ['How many (sayılan)',                    'How much (sayılmayan)'],
        ['How many books did you buy?',           'How much money do you want?'],
        ['How many players are in a team?',       'How much milk do you need?'],
        ['How many languages do you speak?',      'How much information do you have?'],
        ['How many people came?',                 'How much bread is left?'],
        ['How many times did you call?',          'How much time do we have?'],
      ],
      tip: 'Şübhəli olsanda, özündən soruş: bu ismi sayabilərəmmi? Saya bilirsən → How many. Sayamırsan → How much.',
    },

    // ── Ekran 4: some + sayılan/sayılmayan ───────────────────────────────────
    {
      type: 'lesson',
      title: 'some — sayılan və sayılmayan ilə',
      content: 'some həm sayılan (cəm), həm də sayılmayan isimlərlə işlənir:',
      examples: [
        { word: 'I need a new car.',              az: 'a/an + tək sayılan isim'               },
        { word: 'I need some new shoes.',         az: 'some + cəm sayılan isim'               },
        { word: 'I need some money.',             az: 'some + sayılmayan isim'                },
        { word: 'Would you like some cheese?',    az: 'some + sayılmayan isim (təklif)'       },
        { word: 'She bought a hat and some shoes.', az: 'a (tək) + some (cəm)'               },
        { word: 'I have some information for you.', az: 'some + sayılmayan isim'             },
      ],
      tip: '"some information", "some advice", "some news" — sayılmayan isimlərlə some işlədilir, a/an yox.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"How ___ money do you need?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'lot of'],
          answer: 'much',
        },
        {
          q: '"How ___ people came to the party?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'lot of'],
          answer: 'many',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I drink much coffee every day.',
            'I drink a lot of coffee every day.',
            'I drink many coffee every day.',
          ],
          answer: 'I drink a lot of coffee every day.',
        },
        {
          q: '"We haven\'t got ___ petrol." — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot'],
          answer: 'much',
        },
        {
          q: '"How ___ languages do you speak?" — boşluğa nə gəlir?',
          options: ['much', 'many', 'lot'],
          answer: 'many',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'There aren\'t much hotels here.',
            'There aren\'t many hotels here.',
            'There aren\'t a lot hotels here.',
          ],
          answer: 'There aren\'t many hotels here.',
        },
        {
          q: '"Would you like ___ cheese?" — boşluğa nə gəlir?',
          options: ['a', 'an', 'some'],
          answer: 'some',
        },
        {
          q: '"A lot of people ___ English." — düzgün fel:',
          options: ['speaks', 'speak', 'is speaking'],
          answer: 'speak',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"information" → düzgün işlədilmə:',                             tr: 'some information',             wrong: 'an information'               },
  { en: '"advice" → düzgün işlədilmə:',                                  tr: 'some advice',                  wrong: 'an advice'                    },
  { en: '"news" ilə düzgün fel:',                                         tr: 'The news is good.',            wrong: 'The news are good.'           },
  { en: '"hair" → düzgün işlədilmə:',                                    tr: 'long hair',                    wrong: 'long hairs'                   },
  { en: '"furniture" → düzgün işlədilmə:',                               tr: 'some furniture',               wrong: 'some furnitures'              },
  { en: '"work" vs "job" — sayılan hansıdır?',                           tr: 'job',                          wrong: 'work'                         },
  { en: '"a new ___" — düzgün söz:',                                     tr: 'job',                          wrong: 'work'                         },
  { en: '"bread" üçün ölçü ifadəsi:',                                    tr: 'a loaf of bread',              wrong: 'a bread'                      },
  { en: '"cheese" üçün ölçü ifadəsi:',                                   tr: 'a piece of cheese',            wrong: 'a cheese'                     },
  { en: 'Sayılmayan isimlərlə miqdar sorusu:',                           tr: 'How much',                     wrong: 'How many'                     },
  { en: 'Sayılan isimlərlə miqdar sorusu:',                              tr: 'How many',                     wrong: 'How much'                     },
  { en: '"How ___ milk do you need?" — boşluğa nə gəlir?',              tr: 'much',                         wrong: 'many'                         },
  { en: '"How ___ students are in the class?" — boşluğa nə gəlir?',     tr: 'many',                         wrong: 'much'                         },
  { en: 'Müsbət cümlədə "çox" miqdar üçün ən təbii seçim:',             tr: 'a lot of',                     wrong: 'much'                         },
  { en: '"much" adətən hansı cümlələrdə işlədilir?',                    tr: 'Sual və inkar',                 wrong: 'Müsbət cümlələr'              },
  { en: '"___ luggage do you have?" — boşluğa nə gəlir?',               tr: 'How much',                     wrong: 'How many'                     },
  { en: '"some" + sayılmayan isim — nümunə:',                            tr: 'some money',                   wrong: 'a money'                      },
  { en: '"We haven\'t got ___ time." — boşluğa nə gəlir?',              tr: 'much',                         wrong: 'many'                         },
  { en: '"There aren\'t ___ hotels here." — boşluğa nə gəlir?',         tr: 'many',                         wrong: 'much'                         },
  { en: '"A lot of people ___ here." — düzgün fel:',                     tr: 'live',                         wrong: 'lives'                        },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Oteldən biraz məlumat lazımdır.',
      words: ['I', 'need', 'some', 'information', 'about', 'the', 'hotel', 'informations', 'an'],
      answer: ['I', 'need', 'some', 'information', 'about', 'the', 'hotel'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O mənə yaxşı bir tövsiyə verdi.',
      words: ['She', 'gave', 'me', 'some', 'good', 'advice', 'an', 'advices'],
      answer: ['She', 'gave', 'me', 'some', 'good', 'advice'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Partiyaya neçə nəfər gəldi?',
      words: ['How', 'many', 'people', 'came', 'to', 'the', 'party', 'much', '?'],
      answer: ['How', 'many', 'people', 'came', 'to', 'the', 'party', '?'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hər gün çox qəhvə içirəm.',
      words: ['I', 'drink', 'a', 'lot', 'of', 'coffee', 'every', 'day', 'much', 'many'],
      answer: ['I', 'drink', 'a', 'lot', 'of', 'coffee', 'every', 'day'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bizdə çox yanacaq yoxdur.',
      words: ['We', 'haven\'t', 'got', 'much', 'petrol', 'many', 'a', 'lot'],
      answer: ['We', 'haven\'t', 'got', 'much', 'petrol'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O yeni bir iş tapdı.',
      words: ['She', 'found', 'a', 'new', 'job', 'work', 'an', 'some'],
      answer: ['She', 'found', 'a', 'new', 'job'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bir parça pendir istəyirsinizmi?',
      words: ['Would', 'you', 'like', 'a', 'piece', 'of', 'cheese', 'some', 'cheeses', '?'],
      answer: ['Would', 'you', 'like', 'a', 'piece', 'of', 'cheese', '?'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gün hava gözəldir.',
      words: ['It\'s', 'nice', 'weather', 'today', 'a', 'the', 'weathers'],
      answer: ['It\'s', 'nice', 'weather', 'today'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Neçə kitab aldın?',
      words: ['How', 'many', 'books', 'did', 'you', 'buy', 'much', 'book', '?'],
      answer: ['How', 'many', 'books', 'did', 'you', 'buy', '?'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Burada çox adam yaşayır.',
      words: ['A', 'lot', 'of', 'people', 'live', 'here', 'lives', 'much', 'person'],
      answer: ['A', 'lot', 'of', 'people', 'live', 'here'],
    },
  ],
},
      
{ type: 'section_divider', title: 'some / any' },

// ── UNIT 75 — some / any ─────────────────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'some / any — Əsas Qayda (Dərs 1)',
  cards: [

    // ── Ekran 1: Əsas qayda ───────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'some / any — nə vaxt işlədilir?',
      content: 'some və any həm sayılan isimlər (cəmdə), həm də sayılmayan isimlərlə işlənir. Fərq cümlənin növündən asılıdır:',
      table: [
        ['Cümlə növü',       'İşlədilən söz',  'Nümunə'],
        ['Müsbət',           'some',            'I bought some bread.'],
        ['İnkar',            'any',             'I didn\'t buy any bread.'],
        ['Sual',             'any',             'Did you buy any bread?'],
        ['Təklif (sual)',    'some',            'Would you like some tea?'],
        ['Xahiş (sual)',     'some',            'Can I have some water, please?'],
      ],
      tip: 'Ümumi qayda: müsbətdə → some, inkar/sualda → any. Lakin təklif və xahiş suallarında some işlədilir.',
    },

    // ── Ekran 2: Müsbət cümlələr ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Müsbət cümlələrdə — some',
      content: 'Müsbət cümlələrdə həmişə some işlədilir, sayılan və sayılmayan isimlərlə:',
      examples: [
        { word: 'There\'s some milk in the fridge.',        az: 'sayılmayan isim — some'             },
        { word: 'I need some stamps.',                      az: 'sayılan isim (cəm) — some'          },
        { word: 'We visited some interesting places.',      az: 'sayılan isim (cəm) — some'          },
        { word: 'There are some flowers on the table.',     az: 'sayılan isim (cəm) — some'          },
        { word: 'She gave me some useful advice.',          az: 'sayılmayan isim — some'             },
        { word: 'I\'ve got some time this afternoon.',      az: 'sayılmayan isim — some'             },
      ],
      tip: 'some = müəyyən miqdarda / bir qədər. Konkret rəqəm yoxdursa, some işlədilir.',
    },

    // ── Ekran 3: İnkar cümlələr ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İnkar cümlələrdə — any',
      content: 'not ilə birlikdə any işlədilir — sayılan və sayılmayan isimlərlə:',
      examples: [
        { word: 'There isn\'t any sugar left.',              az: 'sayılmayan — any'                  },
        { word: 'We didn\'t make any mistakes.',             az: 'sayılan (cəm) — any'               },
        { word: 'She doesn\'t have any free time.',          az: 'sayılmayan — any'                  },
        { word: 'I haven\'t got any cash with me.',          az: 'sayılmayan — any'                  },
        { word: 'They didn\'t ask any questions.',           az: 'sayılan (cəm) — any'               },
        { word: 'He didn\'t bring any food to the party.',   az: 'sayılmayan — any'                  },
      ],
      tip: '"not ... any" = "heç bir / heç nə". I don\'t have any money = Məndə heç pul yoxdur.',
    },

    // ── Ekran 4: Sual cümlələri + istisnalar ─────────────────────────────────
    {
      type: 'lesson',
      title: 'Sual cümlələri — any və some',
      content: 'Sualların əksəriyyətində any işlədilir. Lakin təklif və xahiş suallarında some olur:',
      examples: [
        { word: 'Have you got any questions?',              az: 'adi sual — any'                     },
        { word: 'Is there any news?',                       az: 'adi sual — any'                     },
        { word: 'Did they find any evidence?',              az: 'adi sual — any'                     },
        { word: 'Would you like some coffee?',              az: 'təklif sualı — some ✅'              },
        { word: 'Can I have some more bread?',              az: 'xahiş sualı — some ✅'              },
        { word: 'Could you lend me some money?',            az: 'xahiş sualı — some ✅'              },
      ],
      tip: 'Would you like any coffee? ❌ — Təklif edərkən some işlədilir, çünki cavabın "hə" olacağı güzülür.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I need ___ help." — boşluğa nə gəlir?',
          options: ['some', 'any', 'no'],
          answer: 'some',
        },
        {
          q: '"We didn\'t have ___ problems." — boşluğa nə gəlir?',
          options: ['some', 'any', 'no'],
          answer: 'any',
        },
        {
          q: '"Would you like ___ juice?" — boşluğa nə gəlir?',
          options: ['any', 'some', 'no'],
          answer: 'some',
        },
        {
          q: '"Is there ___ water in the bottle?" — boşluğa nə gəlir?',
          options: ['some', 'any', 'no'],
          answer: 'any',
        },
        {
          q: '"There are ___ nice cafés near here." — boşluğa nə gəlir?',
          options: ['any', 'some', 'no'],
          answer: 'some',
        },
        {
          q: '"Can I have ___ more time, please?" — boşluğa nə gəlir?',
          options: ['any', 'some', 'no'],
          answer: 'some',
        },
        {
          q: '"She didn\'t say ___ to me." — boşluğa nə gəlir?',
          options: ['something', 'anything', 'somebody'],
          answer: 'anything',
        },
        {
          q: '"Have you bought ___ food?" — boşluğa nə gəlir?',
          options: ['some', 'any', 'no'],
          answer: 'any',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'some / any — İsimsiz İşlənmə + something/anybody (Dərs 2)',
  cards: [

    // ── Ekran 1: İsimsiz işlənmə ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'some / any — isim olmadan',
      content: 'Artıq məlum olan isim təkrarlanmır, some/any tək işlədilir:',
      examples: [
        { word: 'I didn\'t take photos but Lena took some.',   az: 'some = some photos'              },
        { word: '\'Are there any biscuits?\' \'Yes, some.\'',   az: 'some = some biscuits'            },
        { word: 'I made tea. Would you like some?',            az: 'some = some tea'                 },
        { word: '\'Any luggage?\' \'No, I haven\'t got any.\'' , az: 'any = any luggage'             },
        { word: 'You can take some fruit. I don\'t want any.', az: 'any = any fruit'                 },
        { word: '\'Need a hand?\' \'No thanks, I don\'t need any.\'', az: 'any = any help'           },
      ],
      tip: 'Söhbətin kontekstindən artıq nəyin söhbət getdiyi məlumdursa, isimi təkrar etmə — sadəcə some/any işlət.',
    },

    // ── Ekran 2: something / somebody / anything / anybody ───────────────────
    {
      type: 'lesson',
      title: 'something / somebody — anything / anybody',
      content: 'some/any qaydası mürəkkəb formalarına da aiddir:',
      table: [
        ['Müsbət',         'İnkar / Sual'],
        ['something',      'anything'],
        ['somebody',       'anybody'],
        ['someone',        'anyone'],
      ],
      tip: 'somebody = someone (eyni məna). anybody = anyone (eyni məna). İkisi də istifadə edilə bilər.',
    },

    // ── Ekran 3: something/anything nümunələri ───────────────────────────────
    {
      type: 'lesson',
      title: 'something / anything — nümunələr',
      content: 'Müsbətdə something, inkar/sualda anything:',
      examples: [
        { word: 'There\'s something in my bag.',              az: 'müsbət — something'               },
        { word: 'I heard something outside.',                  az: 'müsbət — something'               },
        { word: 'I didn\'t hear anything.',                    az: 'inkar — anything'                 },
        { word: 'Did you hear anything last night?',           az: 'sual — anything'                  },
        { word: 'Would you like something to eat?',            az: 'təklif — something ✅'            },
        { word: 'Are you doing anything this weekend?',        az: 'adi sual — anything'              },
      ],
      tip: 'Təklif sualında something işlədilir: "Would you like something to drink?" ✅  "anything" ❌',
    },

    // ── Ekran 4: somebody/anybody nümunələri + tez-tez edilən səhvlər ────────
    {
      type: 'lesson',
      title: 'somebody / anybody — səhvlər',
      content: 'somebody/anybody ilə bağlı ümumi səhvlər:',
      table: [
        ['Yanlış',                                    'Düzgün'],
        ['Somebody didn\'t call.',                    'Nobody called. / Somebody called.'],
        ['Would you like any tea?',                   'Would you like some tea?'],
        ['Can I have any sugar, please?',             'Can I have some sugar, please?'],
        ['I bought any new books.',                   'I bought some new books.'],
        ['She didn\'t say something.',                'She didn\'t say anything.'],
        ['There aren\'t some chairs left.',           'There aren\'t any chairs left.'],
      ],
      tip: '"Somebody didn\'t come" ❌ — məntiqi problem var. Gəlməyəni vurğulamaq üçün "Nobody came" ✅ işlət.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She said ___ but I didn\'t understand." — boşluğa nə gəlir?',
          options: ['anything', 'something', 'somebody'],
          answer: 'something',
        },
        {
          q: '"Has ___ seen my keys?" — boşluğa nə gəlir?',
          options: ['somebody', 'anybody', 'nobody'],
          answer: 'anybody',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Would you like any help?',
            'Would you like some help?',
            'Would you like no help?',
          ],
          answer: 'Would you like some help?',
        },
        {
          q: '"I didn\'t buy ___. The shop was closed." — boşluğa nə gəlir?',
          options: ['something', 'anybody', 'anything'],
          answer: 'anything',
        },
        {
          q: '"There were ___ of mine at the event." — boşluğa nə gəlir?',
          options: ['any friends', 'some friends', 'no friend'],
          answer: 'some friends',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She didn\'t say something.',
            'She didn\'t say anything.',
            'She said anything.',
          ],
          answer: 'She didn\'t say anything.',
        },
        {
          q: '"___ is at the door. Can you check?" — boşluğa nə gəlir?',
          options: ['Anybody', 'Nobody', 'Somebody'],
          answer: 'Somebody',
        },
        {
          q: '"I made coffee. Would you like ___?" — boşluğa nə gəlir?',
          options: ['any', 'some', 'no'],
          answer: 'some',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Müsbət cümlədə — some / any?',                                        tr: 'some',                         wrong: 'any'                          },
  { en: 'İnkar cümlədə — some / any?',                                          tr: 'any',                          wrong: 'some'                         },
  { en: '"Would you like ___ tea?" — some / any?',                              tr: 'some',                         wrong: 'any'                           },
  { en: '"Is there ___ milk?" — some / any?',                                   tr: 'any',                          wrong: 'some'                          },
  { en: '"something" — inkar/sual forması:',                                    tr: 'anything',                     wrong: 'something'                    },
  { en: '"somebody" — inkar/sual forması:',                                     tr: 'anybody',                      wrong: 'somebody'                     },
  { en: '"Can I have ___ water?" — some / any?',                                tr: 'some',                         wrong: 'any'                           },
  { en: '"We didn\'t find ___ clues." — some / any?',                           tr: 'any',                          wrong: 'some'                          },
  { en: '"There are ___ nice parks nearby." — some / any?',                     tr: 'some',                         wrong: 'any'                           },
  { en: '"She didn\'t say ___." — something / anything?',                       tr: 'anything',                     wrong: 'something'                    },
  { en: '"___ called while you were out." — somebody / anybody?',               tr: 'somebody',                     wrong: 'anybody'                      },
  { en: '"Has ___ taken my pen?" — somebody / anybody?',                        tr: 'anybody',                      wrong: 'somebody'                     },
  { en: '"Would you like ___ to eat?" — something / anything?',                 tr: 'something',                    wrong: 'anything'                     },
  { en: '"I bought ___ new shoes." — some / any?',                              tr: 'some',                         wrong: 'any'                           },
  { en: '"I don\'t need ___ help." — some / any?',                              tr: 'any',                          wrong: 'some'                          },
  { en: '"I took some photos but Paul didn\'t take ___." — some / any?',        tr: 'any',                          wrong: 'some'                          },
  { en: '"Are you doing ___ tonight?" — something / anything?',                 tr: 'anything',                     wrong: 'something'                    },
  { en: '"I heard ___ outside." — something / anything?',                       tr: 'something',                    wrong: 'anything'                     },
  { en: '"Could you lend me ___ money?" — some / any?',                         tr: 'some',                         wrong: 'any'                           },
  { en: '"There aren\'t ___ seats left." — some / any?',                        tr: 'any',                          wrong: 'some'                          },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənə bir az su lazımdır.',
      words: ['I', 'need', 'some', 'water', 'any', 'the'],
      answer: ['I', 'need', 'some', 'water'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onun heç vaxtı yox idi.',
      words: ['She', 'didn\'t', 'have', 'any', 'time', 'some', 'the'],
      answer: ['She', 'didn\'t', 'have', 'any', 'time'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bir az çay istərdinizmi?',
      words: ['Would', 'you', 'like', 'some', 'tea', 'any', 'the'],
      answer: ['Would', 'you', 'like', 'some', 'tea'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, mənə nəsə dedi amma mən başa düşmədim.',
      words: ['She', 'said', 'something', 'to', 'me', 'but', 'I', 'didn\'t', 'understand', 'anything', 'nobody'],
      answer: ['She', 'said', 'something', 'to', 'me', 'but', 'I', 'didn\'t', 'understand'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kim isə pəncərəni qırmışdı.',
      words: ['Somebody', 'had', 'broken', 'the', 'window', 'Anybody', 'Nobody'],
      answer: ['Somebody', 'had', 'broken', 'the', 'window'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bağda bir neçə gözəl çiçək var.',
      words: ['There', 'are', 'some', 'beautiful', 'flowers', 'in', 'the', 'garden', 'any', 'a'],
      answer: ['There', 'are', 'some', 'beautiful', 'flowers', 'in', 'the', 'garden'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam bir şey edirsənmi?',
      words: ['Are', 'you', 'doing', 'anything', 'this', 'evening', 'something', 'nobody'],
      answer: ['Are', 'you', 'doing', 'anything', 'this', 'evening'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən foto çəkmədim amma o çəkdi.',
      words: ['I', 'didn\'t', 'take', 'any', 'photos', 'but', 'she', 'took', 'some', 'any', 'the'],
      answer: ['I', 'didn\'t', 'take', 'any', 'photos', 'but', 'she', 'took', 'some'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bir az çörək ala bilərəmmi?',
      words: ['Can', 'I', 'have', 'some', 'bread', 'please', 'any', 'the'],
      answer: ['Can', 'I', 'have', 'some', 'bread', 'please'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onu heç kim görməmişdi.',
      words: ['Nobody', 'had', 'seen', 'her', 'Anybody', 'Somebody', 'any'],
      answer: ['Nobody', 'had', 'seen', 'her'],
    },
  ],
},
      
{ type: 'section_divider', title: 'much / many / a lot of' },

// ── UNIT 82 — much / many / a lot of ─────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'much / many / a lot of — Əsas Qayda (Dərs 1)',
  cards: [

    // ── Ekran 1: Əsas fərq ───────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'much / many / a lot of — fərq nədir?',
      content: 'Üçü də "çox" mənasını verir. Fərq isim növündən asılıdır:',
      table: [
        ['Söz',        'İsim növü',              'Nümunə'],
        ['much',       'sayılmayan (uncountable)', 'much water / much time'],
        ['many',       'sayılan cəm (countable)',  'many cars / many people'],
        ['a lot of',   'hər ikisi',               'a lot of water / a lot of cars'],
      ],
      tip: 'Çaşırsan? a lot of — həmişə işlədə bilərsən. Lakin much/many-nin işləndiyi yeri bilmək vacibdir.',
    },

    // ── Ekran 2: much — sayılmayan isimlərlə ─────────────────────────────────
    {
      type: 'lesson',
      title: 'much — sayılmayan isimlərlə',
      content: 'much yalnız sayılmayan isimlərlə işlənir — adətən sual və inkar cümlələrdə:',
      examples: [
        { word: 'We haven\'t got much fuel.',          az: 'inkar — sayılmayan'                },
        { word: 'Did you spend much money?',           az: 'sual — sayılmayan'                 },
        { word: 'How much time do we have?',           az: 'How much — sayılmayan'             },
        { word: 'I wasn\'t hungry. I didn\'t eat much.', az: 'isim olmadan — much tək'         },
        { word: 'There isn\'t much space in here.',    az: 'inkar — sayılmayan'                },
        { word: 'She doesn\'t get much sleep.',        az: 'inkar — sayılmayan'                },
      ],
      tip: 'much müsbət cümlədə qeyri-təbii səslənir: "I have much work" ❌ → "I have a lot of work" ✅',
    },

    // ── Ekran 3: many — sayılan isimlərlə ────────────────────────────────────
    {
      type: 'lesson',
      title: 'many — sayılan isimlərlə (cəmdə)',
      content: 'many yalnız sayılan cəm isimlərlə işlənir — sual, inkar və müsbət cümlələrdə:',
      examples: [
        { word: 'How many tickets do you need?',       az: 'How many — sayılan cəm'            },
        { word: 'We don\'t know many people here.',    az: 'inkar — sayılan cəm'               },
        { word: 'Were there many cars on the road?',   az: 'sual — sayılan cəm'               },
        { word: 'Many students passed the exam.',      az: 'müsbət — sayılan cəm'             },
        { word: 'She didn\'t take many photos.',       az: 'inkar — sayılan cəm'               },
        { word: 'I took some, but not many.',          az: 'isim olmadan — many tək'           },
      ],
      tip: 'many → həmişə cəm isim. "many water" ❌ — water sayılmayandır, much işlət.',
    },

    // ── Ekran 4: a lot of — hər iki isim növüylə ─────────────────────────────
    {
      type: 'lesson',
      title: 'a lot of — universal forma',
      content: 'a lot of həm sayılan, həm də sayılmayan isimlərlə işlənir. Fel ismin növünə görə dəyişir:',
      examples: [
        { word: 'There is a lot of noise outside.',         az: 'sayılmayan → tək fel (is)'      },
        { word: 'There are a lot of tourists today.',       az: 'sayılan → cəm fel (are)'        },
        { word: 'A lot of people use public transport.',    az: 'sayılan → cəm fel (use)'        },
        { word: 'She earns a lot of money.',                az: 'sayılmayan — müsbət cümlə'      },
        { word: 'We asked a lot of questions.',             az: 'sayılan — müsbət cümlə'         },
        { word: 'I don\'t have a lot of free time.',        az: 'sayılmayan — inkar'             },
      ],
      tip: '"A lot of people speaks" ❌ — people sayılan cəmdir, fel də cəm olur: "speak" ✅.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"We haven\'t got ___ petrol." — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot'],
          answer: 'much',
        },
        {
          q: '"How ___ players are in a team?" — boşluğa nə gəlir?',
          options: ['much', 'many', 'a lot of'],
          answer: 'many',
        },
        {
          q: '"I drink ___ coffee every morning." — ən təbii seçim:',
          options: ['much', 'many', 'a lot of'],
          answer: 'a lot of',
        },
        {
          q: '"There ___ a lot of traffic today." — düzgün fel:',
          options: ['are', 'is', 'were'],
          answer: 'is',
        },
        {
          q: '"Did you spend ___ time there?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot'],
          answer: 'much',
        },
        {
          q: '"There aren\'t ___ hotels in this village." — boşluğa nə gəlir?',
          options: ['much', 'a lot', 'many'],
          answer: 'many',
        },
        {
          q: '"A lot of people ___ English." — düzgün fel:',
          options: ['speaks', 'speak', 'is speaking'],
          answer: 'speak',
        },
        {
          q: '"How ___ money do you need?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot of'],
          answer: 'much',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'much / many / a lot of — İşlənmə Fərqləri + Səhvlər (Dərs 2)',
  cards: [

    // ── Ekran 1: much — müsbət cümlədə qeyri-təbii ───────────────────────────
    {
      type: 'lesson',
      title: 'much — müsbət cümlədə istifadə edilmir',
      content: 'much adətən sual və inkar cümlələrə aiddir. Müsbət cümlədə a lot of daha təbiidir:',
      table: [
        ['Cümlə növü',  'Nümunə',                              'Qeyd'],
        ['Sual',        'Do you eat much sugar?',              '✅ təbii'],
        ['İnkar',       'I don\'t eat much sugar.',            '✅ təbii'],
        ['Müsbət',      'I eat a lot of sugar.',               '✅ — much yox'],
        ['Müsbət',      'I eat much sugar.',                   '❌ qeyri-təbii'],
        ['Cavab',       '\'Yes, a lot.\' (not \'Yes, much.\')', '✅ a lot — isim olmadan'],
      ],
      tip: 'much müsbət cavabda da işlənmir: "Do you read much?" → "Yes, a lot." ✅  "Yes, much." ❌',
    },

    // ── Ekran 2: much / a lot — isim olmadan ─────────────────────────────────
    {
      type: 'lesson',
      title: 'much / a lot — isim olmadan işlənmə',
      content: 'İsim olmadan much (əsasən inkar/sualda) və a lot (müsbətdə) işlədilir:',
      examples: [
        { word: 'She talked a lot but didn\'t say much.',      az: 'a lot (müsbət) / much (inkar)'   },
        { word: 'Do you watch TV much?',                       az: 'much = tez-tez (zərflik)'        },
        { word: 'No, not much.',                               az: 'not much — inkar cavab'          },
        { word: 'We enjoy hiking, so we go a lot.',            az: 'a lot — müsbət, isim olmadan'    },
        { word: 'I don\'t like this film very much.',          az: 'very much — inkar'               },
        { word: 'He reads a lot.',                             az: 'a lot — tez-tez mənasında'       },
      ],
      tip: '"We go much" ❌ — müsbətdə isim olmadan a lot işlədilir: "We go a lot" ✅.',
    },

    // ── Ekran 3: How much / How many ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'How much / How many',
      content: 'Sual cümlələrindəki How much/How many seçimi isim növünə görə dəyişir:',
      examples: [
        { word: 'How much water should I drink daily?',        az: 'sayılmayan — How much'           },
        { word: 'How much does this coat cost?',               az: 'qiymət sualı — How much'         },
        { word: 'How many stops until the city centre?',       az: 'sayılan — How many'              },
        { word: 'How many times have you been there?',         az: 'sayılan — How many'              },
        { word: 'How much sugar do you take?',                 az: 'sayılmayan — How much'           },
        { word: 'How many languages do you speak?',            az: 'sayılan — How many'              },
      ],
      tip: 'How much = qiymət sualında da işlədilir: "How much is it?" ✅ — bu vaxt isim gəlmir.',
    },

    // ── Ekran 4: Tez-tez edilən səhvlər ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'much / many / a lot of ilə bağlı ən çox edilən səhvlər:',
      table: [
        ['Yanlış',                               'Düzgün'],
        ['I have much homework.',                'I have a lot of homework.'],
        ['How many money do you have?',          'How much money do you have?'],
        ['There are a lot of traffic.',          'There is a lot of traffic.'],
        ['A lot of people speaks French.',       'A lot of people speak French.'],
        ['We haven\'t got many luggage.',        'We haven\'t got much luggage.'],
        ['How much students are there?',         'How many students are there?'],
      ],
      tip: 'luggage, traffic, money, homework — sayılmayan isimlərdir. much + tək fel işlədilir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I drink much tea every day.',
            'I drink a lot of tea every day.',
            'I drink many tea every day.',
          ],
          answer: 'I drink a lot of tea every day.',
        },
        {
          q: '"How ___ luggage have you got?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot of'],
          answer: 'much',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'There are a lot of snow today.',
            'There is a lot of snow today.',
            'There is many snow today.',
          ],
          answer: 'There is a lot of snow today.',
        },
        {
          q: '"Do you go to concerts ___?" — boşluğa nə gəlir?',
          options: ['much', 'many', 'a lot of'],
          answer: 'much',
        },
        {
          q: '"Yes, ___." — (müsbət cavab, isim olmadan)',
          options: ['much', 'a lot', 'many'],
          answer: 'a lot',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'A lot of information are missing.',
            'A lot of information is missing.',
            'Many information is missing.',
          ],
          answer: 'A lot of information is missing.',
        },
        {
          q: '"We didn\'t see ___ animals in the park." — boşluğa nə gəlir?',
          options: ['much', 'many', 'a lot'],
          answer: 'many',
        },
        {
          q: '"How ___ does it cost?" — boşluğa nə gəlir?',
          options: ['many', 'much', 'a lot'],
          answer: 'much',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"water" ilə işlədilən forma:',                                          tr: 'much water',                   wrong: 'many water'                   },
  { en: '"cars" ilə işlədilən forma:',                                           tr: 'many cars',                    wrong: 'much cars'                    },
  { en: 'Müsbət cümlədə "çox" üçün:',                                           tr: 'a lot of',                     wrong: 'much'                         },
  { en: '"How ___ money?" — much / many?',                                       tr: 'much',                         wrong: 'many'                         },
  { en: '"How ___ people?" — much / many?',                                      tr: 'many',                         wrong: 'much'                         },
  { en: '"There is a lot of traffic." — traffic sayılan/sayılmayan?',            tr: 'sayılmayan',                   wrong: 'sayılan'                      },
  { en: '"A lot of people ___ French." — düzgün fel:',                           tr: 'speak',                        wrong: 'speaks'                       },
  { en: '"I don\'t have ___ time." — much / many?',                              tr: 'much',                         wrong: 'many'                         },
  { en: '"Were there ___ tourists?" — much / many?',                             tr: 'many',                         wrong: 'much'                         },
  { en: '"She reads ___." — müsbət, isim olmadan:',                              tr: 'a lot',                        wrong: 'much'                         },
  { en: '"I don\'t like it very ___." — boşluğa nə gəlir?',                     tr: 'much',                         wrong: 'many'                         },
  { en: '"There ___ a lot of cars." — düzgün fel:',                              tr: 'are',                          wrong: 'is'                           },
  { en: '"There ___ a lot of traffic." — düzgün fel:',                           tr: 'is',                           wrong: 'are'                          },
  { en: '"We haven\'t got ___ luggage." — much / many?',                         tr: 'much',                         wrong: 'many'                         },
  { en: '"I drink much coffee." — düzgün forması:',                              tr: 'I drink a lot of coffee.',     wrong: 'I drink many coffee.'         },
  { en: '"How much does it cost?" — bu sualda isim:',                            tr: 'yoxdur (qiymət sualı)',        wrong: 'cost'                         },
  { en: '"Did you eat ___?" — sual cümləsində:',                                 tr: 'much',                         wrong: 'a lot of'                     },
  { en: '"I haven\'t read ___ books lately." — boşluğa:',                        tr: 'many',                         wrong: 'much'                         },
  { en: '"\'Do you travel much?\' \'Yes, ___.\'" — cavab:',                      tr: 'a lot',                        wrong: 'much'                         },
  { en: '"How ___ students are in your class?" — much / many?',                  tr: 'many',                         wrong: 'much'                         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bizim çox vaxtımız yoxdur.',
      words: ['We', 'haven\'t', 'got', 'much', 'time', 'many', 'a lot'],
      answer: ['We', 'haven\'t', 'got', 'much', 'time'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu yolda çox qəza olur.',
      words: ['There', 'are', 'a', 'lot', 'of', 'accidents', 'on', 'this', 'road', 'is', 'much'],
      answer: ['There', 'are', 'a', 'lot', 'of', 'accidents', 'on', 'this', 'road'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Neçə bilet lazımdır?',
      words: ['How', 'many', 'tickets', 'do', 'you', 'need', 'much', 'is'],
      answer: ['How', 'many', 'tickets', 'do', 'you', 'need'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu il o, çox kitab oxuyub.',
      words: ['She', 'has', 'read', 'a', 'lot', 'of', 'books', 'this', 'year', 'much', 'many'],
      answer: ['She', 'has', 'read', 'a', 'lot', 'of', 'books', 'this', 'year'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Partiyaya çox adam gəlmişdi.',
      words: ['A', 'lot', 'of', 'people', 'came', 'to', 'the', 'party', 'much', 'is'],
      answer: ['A', 'lot', 'of', 'people', 'came', 'to', 'the', 'party'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu yaxınlarda çox yağış yağmayıb.',
      words: ['There', 'hasn\'t', 'been', 'much', 'rain', 'lately', 'many', 'are'],
      answer: ['There', 'hasn\'t', 'been', 'much', 'rain', 'lately'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən neçə dil bilirsən?',
      words: ['How', 'many', 'languages', 'do', 'you', 'speak', 'much', 'is'],
      answer: ['How', 'many', 'languages', 'do', 'you', 'speak'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, çox danışdı amma az şey dedi.',
      words: ['She', 'talked', 'a', 'lot', 'but', 'didn\'t', 'say', 'much', 'many', 'some'],
      answer: ['She', 'talked', 'a', 'lot', 'but', 'didn\'t', 'say', 'much'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gün yolda çox trafik var.',
      words: ['There', 'is', 'a', 'lot', 'of', 'traffic', 'today', 'are', 'many'],
      answer: ['There', 'is', 'a', 'lot', 'of', 'traffic', 'today'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çox adam ingilis dili öyrənir.',
      words: ['A', 'lot', 'of', 'people', 'learn', 'English', 'learns', 'much', 'many'],
      answer: ['A', 'lot', 'of', 'people', 'learn', 'English'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Şəxs əvəzlikləri tam sistem' },

// ── UNIT 58–62 — Şəxs Əvəzlikləri: Tam Sistem ────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Şəxs Əvəzlikləri — Subject / Object (Dərs 1)',
  cards: [

    // ── Ekran 1: Tam cədvəl ───────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Şəxs əvəzlikləri — 5 forma',
      content: 'İngilis dilində şəxs əvəzliklərinin 5 forması var. Cümlədəki rola görə dəyişir:',
      table: [
        ['Şəxs',      'Subject', 'Object', 'Poss. Adj.', 'Poss. Pron.', 'Reflexive'],
        ['Mən',       'I',       'me',     'my',         'mine',        'myself'],
        ['Sən',       'you',     'you',    'your',       'yours',       'yourself'],
        ['O (kişi)',  'he',      'him',    'his',        'his',         'himself'],
        ['O (qadın)', 'she',     'her',    'her',        'hers',        'herself'],
        ['O (şey)',   'it',      'it',     'its',        '—',           'itself'],
        ['Biz',       'we',      'us',     'our',        'ours',        'ourselves'],
        ['Onlar',     'they',    'them',   'their',      'theirs',      'themselves'],
      ],
      tip: 'Hər forma üçün sual: Kim edir? (subject) / Kimə edilir? (object) / Kimin? (possessive) / Özü? (reflexive)',
    },

    // ── Ekran 2: Subject əvəzlikləri ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Subject əvəzlikləri — I / you / he / she...',
      content: 'Subject əvəzliyi cümlənin əvvəlində, felin subyekti kimi işlədilir:',
      examples: [
        { word: 'I called him yesterday.',               az: 'I — felin subyekti'               },
        { word: 'She was very happy with the result.',   az: 'she — felin subyekti'             },
        { word: 'They are waiting outside.',             az: 'they — felin subyekti'            },
        { word: 'We arrived late to the meeting.',       az: 'we — felin subyekti'              },
        { word: 'He works in a bank.',                   az: 'he — felin subyekti'              },
        { word: 'It was a difficult decision.',          az: 'it — şey/hal üçün'                },
      ],
      tip: 'Subject əvəzliyi həmişə felin qarşısında gəlir. "Me called him" ❌ → "I called him" ✅',
    },

    // ── Ekran 3: Object əvəzlikləri ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Object əvəzlikləri — me / him / her / them...',
      content: 'Object əvəzliyi felin və ya prepoziyanın arxasında işlədilir:',
      examples: [
        { word: 'Can you call me later?',                az: 'me — felin obyekti'               },
        { word: 'I saw him at the station.',             az: 'him — felin obyekti'              },
        { word: 'We invited her to dinner.',             az: 'her — felin obyekti'              },
        { word: 'Give it to them, please.',              az: 'them — prepoziyanın arxasında'    },
        { word: 'Come with us to the park.',             az: 'us — prepoziyanın arxasında'      },
        { word: 'She didn\'t talk to him.',              az: 'him — prepoziyanın arxasında'     },
      ],
      tip: '"Give it to I" ❌ — prepoziyanın arxasında həmişə object forma işlədilir: "Give it to me" ✅',
    },

    // ── Ekran 4: Subject vs Object — müqayisə ────────────────────────────────
    {
      type: 'lesson',
      title: 'Subject vs Object — fərqi gör',
      content: 'Eyni şəxs üçün subject və object forması fərqlidir:',
      table: [
        ['Şəxs',      'Subject',  'Object',  'Nümunə'],
        ['1-ci tək',  'I',        'me',      'I know him. He knows me.'],
        ['3-cü kişi', 'he',       'him',     'He called her. She called him.'],
        ['3-cü qadın','she',      'her',     'She saw us. We saw her.'],
        ['3-cü cəm',  'they',     'them',    'They invited us. We invited them.'],
        ['1-ci cəm',  'we',       'us',      'We helped them. They helped us.'],
      ],
      tip: '"Do you know that woman?" "Yes, I know her." — her = object, çünki "know" felinin arxasındadır.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ works in a hospital." — boşluğa nə gəlir?',
          options: ['Her', 'She', 'Hers'],
          answer: 'She',
        },
        {
          q: '"Can you help ___?" — boşluğa nə gəlir (mən mənasında):',
          options: ['I', 'my', 'me'],
          answer: 'me',
        },
        {
          q: '"We invited ___ to the party." — boşluğa nə gəlir (onlar mənasında):',
          options: ['they', 'their', 'them'],
          answer: 'them',
        },
        {
          q: '"___ called us this morning." — boşluğa nə gəlir (o — qadın):',
          options: ['Her', 'She', 'Hers'],
          answer: 'She',
        },
        {
          q: '"Why don\'t you come with ___?" — boşluğa nə gəlir (biz):',
          options: ['we', 'our', 'us'],
          answer: 'us',
        },
        {
          q: '"I saw ___ at the market." — boşluğa nə gəlir (o — kişi):',
          options: ['he', 'his', 'him'],
          answer: 'him',
        },
        {
          q: '"___ are playing in the garden." — boşluğa nə gəlir (onlar):',
          options: ['Them', 'Their', 'They'],
          answer: 'They',
        },
        {
          q: '"She didn\'t talk to ___." — boşluğa nə gəlir (mən):',
          options: ['I', 'me', 'my'],
          answer: 'me',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Şəxs Əvəzlikləri — Possessive + Reflexive (Dərs 2)',
  cards: [

    // ── Ekran 1: Possessive Adjective ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Possessive Adjective — my / your / his / her...',
      content: 'Possessive adjective həmişə isimli işlədilir — ismin əvvəlində gəlir:',
      examples: [
        { word: 'My phone is out of battery.',           az: 'my + isim — possessive adj.'      },
        { word: 'Is this your jacket?',                  az: 'your + isim — possessive adj.'    },
        { word: 'I don\'t know his surname.',            az: 'his + isim — possessive adj.'     },
        { word: 'She forgot her umbrella.',              az: 'her + isim — possessive adj.'     },
        { word: 'The dog hurt its paw.',                 az: 'its + isim — şey üçün'            },
        { word: 'We cleaned our room.',                  az: 'our + isim — possessive adj.'     },
        { word: 'They sold their old car.',              az: 'their + isim — possessive adj.'   },
      ],
      tip: '"It\'s" = it is / it has. "Its" = onun (şeyin). Bunları qarışdırma: "its paw" ✅  "it\'s paw" ❌',
    },

    // ── Ekran 2: Possessive Pronoun ───────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Possessive Pronoun — mine / yours / his / hers...',
      content: 'Possessive pronoun isim olmadan işlədilir — isim artıq məlumdur:',
      examples: [
        { word: 'Is this bag yours or mine?',            az: 'yours = your bag / mine = my bag' },
        { word: 'I didn\'t have a pen, so she gave me hers.', az: 'hers = her pen'             },
        { word: 'We took our car and they took theirs.', az: 'theirs = their car'              },
        { word: 'It\'s not our problem, it\'s ours.',    az: 'ours = our problem'               },
        { word: 'His camera is newer than mine.',        az: 'mine = my camera'                 },
        { word: 'Her marks were better than his.',       az: 'his = his marks'                  },
      ],
      tip: '"his" həm possessive adjective, həm possessive pronoun kimi eyni formadadır: "his book" / "it\'s his" — ikisi də düzgündür.',
    },

    // ── Ekran 3: Reflexive ────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Reflexive — myself / yourself / himself...',
      content: 'Subyekt və obyekt eyni şəxsdirsə reflexive əvəzliyi işlədilir:',
      examples: [
        { word: 'I burned myself on the oven.',           az: 'I = myself — eyni şəxs'          },
        { word: 'He taught himself to play guitar.',      az: 'he = himself — eyni şəxs'        },
        { word: 'She looked at herself in the window.',   az: 'she = herself — eyni şəxs'       },
        { word: 'We organized everything ourselves.',     az: 'we = ourselves — eyni şəxs'      },
        { word: 'Please help yourself to the food.',      az: 'yourself — bir nəfərə'            },
        { word: 'Please help yourselves.',                az: 'yourselves — bir neçə nəfərə'     },
      ],
      tip: '"He cut him" ❌ (başqa biri) vs "He cut himself" ✅ (özünü). Subyekt = obyektdirsə → reflexive.',
    },

    // ── Ekran 4: by myself / each other / a friend of mine ───────────────────
    {
      type: 'lesson',
      title: 'by myself / each other / a friend of mine',
      content: 'Əvəzliklərlə bağlı xüsusi ifadələr:',
      table: [
        ['İfadə',              'Məna',           'Nümunə'],
        ['by myself/herself…', 'tək, yalnız',    'She went by herself.'],
        ['each other',         'bir-birini',      'They know each other well.'],
        ['a friend of mine',   'mənim dostum',   'I met a friend of mine.'],
        ['a friend of his',    'onun dostu',     'He came with a friend of his.'],
        ['friends of yours',   'sənin dostların', 'Are they friends of yours?'],
      ],
      tip: '"a friend of me" ❌ — of-dan sonra possessive pronoun gəlir: "a friend of mine" ✅  "a friend of hers" ✅',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Is this ___ phone?" — boşluğa nə gəlir (sənin mənasında, isimli):',
          options: ['yours', 'your', 'you'],
          answer: 'your',
        },
        {
          q: '"The bag is ___." — boşluğa nə gəlir (onunkudur — qadın, isimsizdə):',
          options: ['her', 'hers', 'herself'],
          answer: 'hers',
        },
        {
          q: '"He hurt ___ during training." — boşluğa nə gəlir:',
          options: ['him', 'his', 'himself'],
          answer: 'himself',
        },
        {
          q: '"We enjoyed ___ at the festival." — boşluğa nə gəlir:',
          options: ['us', 'our', 'ourselves'],
          answer: 'ourselves',
        },
        {
          q: '"She went on the trip by ___." — boşluğa nə gəlir:',
          options: ['her', 'hers', 'herself'],
          answer: 'herself',
        },
        {
          q: '"Jill and Tom called ___." — (o — ona, o — ona):',
          options: ['themselves', 'each other', 'theirs'],
          answer: 'each other',
        },
        {
          q: '"I had dinner with a friend of ___." — boşluğa nə gəlir (mən):',
          options: ['me', 'my', 'mine'],
          answer: 'mine',
        },
        {
          q: '"The dog wagged ___ tail." — boşluğa nə gəlir:',
          options: ['it\'s', 'its', 'it'],
          answer: 'its',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"mən" — subject forma:',                                                tr: 'I',                            wrong: 'me'                           },
  { en: '"mən" — object forma:',                                                 tr: 'me',                           wrong: 'I'                            },
  { en: '"o (qadın)" — possessive adjective:',                                   tr: 'her',                          wrong: 'hers'                         },
  { en: '"o (qadın)" — possessive pronoun:',                                     tr: 'hers',                         wrong: 'her'                          },
  { en: '"o (kişi)" — reflexive:',                                               tr: 'himself',                      wrong: 'hisself'                      },
  { en: '"biz" — object forma:',                                                  tr: 'us',                           wrong: 'we'                           },
  { en: '"onlar" — possessive adjective:',                                        tr: 'their',                        wrong: 'theirs'                       },
  { en: '"onlar" — possessive pronoun:',                                          tr: 'theirs',                       wrong: 'their'                        },
  { en: '"o (şey)" — possessive adjective:',                                      tr: 'its',                          wrong: 'it\'s'                        },
  { en: '"biz" — reflexive:',                                                    tr: 'ourselves',                    wrong: 'ourself'                      },
  { en: '"siz/sən" — reflexive (bir neçə nəfər):',                               tr: 'yourselves',                   wrong: 'yourself'                     },
  { en: '"tək, yalnız" mənasında — by ___:',                                     tr: 'by myself',                    wrong: 'by me'                        },
  { en: '"bir-birini" mənasında:',                                               tr: 'each other',                   wrong: 'themselves'                   },
  { en: '"mənim dostum" — of ilə:',                                              tr: 'a friend of mine',             wrong: 'a friend of me'               },
  { en: '"She gave the ticket to ___." (mən):',                                  tr: 'me',                           wrong: 'I'                            },
  { en: '"___ room is bigger than hers." (mən):',                                tr: 'My',                           wrong: 'Mine'                         },
  { en: '"It\'s not their car, it\'s ___." (biz):',                              tr: 'ours',                         wrong: 'our'                          },
  { en: '"He cut ___ with a knife." (özünü):',                                   tr: 'himself',                      wrong: 'him'                          },
  { en: '"Is this bag ___ or mine?" (sən, isimsizdə):',                          tr: 'yours',                        wrong: 'your'                         },
  { en: '"They enjoyed ___ at the concert." (onlar — özləri):',                  tr: 'themselves',                   wrong: 'each other'                   },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'O, güzgüyə baxdı.',
      words: ['She', 'looked', 'at', 'herself', 'in', 'the', 'mirror', 'her', 'hers'],
      answer: ['She', 'looked', 'at', 'herself', 'in', 'the', 'mirror'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu onların problemi deyil, bizimkidir.',
      words: ['It\'s', 'not', 'their', 'problem', 'it\'s', 'ours', 'theirs', 'our'],
      answer: ['It\'s', 'not', 'their', 'problem', 'it\'s', 'ours'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Biz tatildə əyləndik.',
      words: ['We', 'enjoyed', 'ourselves', 'on', 'holiday', 'us', 'ourself'],
      answer: ['We', 'enjoyed', 'ourselves', 'on', 'holiday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Cill və Pol bir-birini çox yaxşı tanıyır.',
      words: ['Jill', 'and', 'Paul', 'know', 'each', 'other', 'very', 'well', 'themselves', 'them'],
      answer: ['Jill', 'and', 'Paul', 'know', 'each', 'other', 'very', 'well'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, bu axşam mənim dostumla görüşür.',
      words: ['She\'s', 'meeting', 'a', 'friend', 'of', 'mine', 'this', 'evening', 'me', 'my'],
      answer: ['She\'s', 'meeting', 'a', 'friend', 'of', 'mine', 'this', 'evening'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, bıçaqla özünü kəsdi.',
      words: ['He', 'cut', 'himself', 'with', 'a', 'knife', 'him', 'his'],
      answer: ['He', 'cut', 'himself', 'with', 'a', 'knife'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mənim otağım onunkindən böyükdür.',
      words: ['My', 'room', 'is', 'bigger', 'than', 'hers', 'her', 'Mine', 'she'],
      answer: ['My', 'room', 'is', 'bigger', 'than', 'hers'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Şəmsiyəm yox idi, ona görə o, mənə öz şəmsiyəsini verdi.',
      words: ['I', 'didn\'t', 'have', 'an', 'umbrella', 'so', 'she', 'gave', 'me', 'hers', 'her', 'herself'],
      answer: ['I', 'didn\'t', 'have', 'an', 'umbrella', 'so', 'she', 'gave', 'me', 'hers'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, tək səyahətə getdi.',
      words: ['She', 'went', 'on', 'the', 'trip', 'by', 'herself', 'her', 'hers', 'alone'],
      answer: ['She', 'went', 'on', 'the', 'trip', 'by', 'herself'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən mənə niyə heç vaxt danışmırsan?',
      words: ['Why', 'do', 'you', 'never', 'talk', 'to', 'me', 'I', 'my', 'myself'],
      answer: ['Why', 'do', 'you', 'never', 'talk', 'to', 'me'],
    },
  ],
},
      
{ type: 'section_divider', title: 'this / that / these / those' },

      // ── UNIT 73 — this / that / these / those ────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'this / that / these / those — Əsas Qayda (Dərs 1)',
  cards: [

    // ── Ekran 1: Əsas cədvəl ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'this / that / these / those — yaxın vs uzaq',
      content: 'Bu dörd söz yaxınlıq və uzaqlığı bildirir — tək və cəm formalarda:',
      table: [
        ['',       'Yaxın (here)',  'Uzaq (there)'],
        ['Tək',    'this',          'that'],
        ['Cəm',    'these',         'those'],
      ],
      tip: 'Sadə yoxlama: əlimdə/yanımda → this/these. Uzaqda/orada → that/those.',
    },

    // ── Ekran 2: İsimlə işlənmə ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İsimlə işlənmə',
      content: 'this / that / these / those birbaşa ismin qarşısında işlədilə bilər:',
      examples: [
        { word: 'This café is very cosy.',               az: 'this + tək isim — yaxın'           },
        { word: 'That building is very old.',            az: 'that + tək isim — uzaq'            },
        { word: 'These apples look fresh.',              az: 'these + cəm isim — yaxın'          },
        { word: 'Who are those people over there?',      az: 'those + cəm isim — uzaq'           },
        { word: 'Do you like this colour?',              az: 'this + tək isim — yaxın'           },
        { word: 'Can I try that jacket in the window?',  az: 'that + tək isim — uzaq'            },
      ],
      tip: 'this/that → tək isimlərlə. these/those → cəm isimlərlə. "These book" ❌ → "This book" ✅',
    },

    // ── Ekran 3: İsimsiz işlənmə ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'İsimsiz işlənmə',
      content: 'İsim məlum olduqda this / that / these / those tək işlədilir:',
      examples: [
        { word: 'Excuse me, is this yours?',             az: 'this — isim olmadan'               },
        { word: 'Who\'s that over there?',               az: 'that — isim olmadan'               },
        { word: 'Which do you prefer — these or those?', az: 'these/those — isim olmadan'        },
        { word: 'This is my stop. I have to get off.',   az: 'this — vəziyyətə istinad'          },
        { word: 'That looks delicious!',                 az: 'that — uzaqdakı şeyə istinad'      },
        { word: 'Are these yours or mine?',              az: 'these — isim olmadan'              },
      ],
      tip: 'Söhbətin kontekstindən nəyin nəzərdə tutulduğu aydındırsa, isim olmadan işlədilir.',
    },

    // ── Ekran 4: that — keçmiş hala istinad ──────────────────────────────────
    {
      type: 'lesson',
      title: 'that — baş vermiş şeyə istinad',
      content: 'that artıq deyilmiş sözə və ya baş vermiş hadisəyə istinad edir:',
      examples: [
        { word: 'That was a wonderful concert, thank you.', az: 'that = konsert (bitib)'         },
        { word: '\'I\'m sorry I\'m late.\' \'That\'s fine.\'', az: 'that = üzr istəmə'          },
        { word: '\'You\'re right.\' \'Yes, that\'s true.\'',   az: 'that = deyilən fikir'       },
        { word: '\'Lily got a promotion.\' \'I didn\'t know that.\'', az: 'that = xəbər'        },
        { word: '\'I\'m moving abroad.\' \'Oh, that\'s exciting!\'',  az: 'that = məlumat'      },
        { word: '\'You\'re a student, right?\' \'Yes, that\'s right.\'', az: 'that = sual'      },
      ],
      tip: 'that — həmişə geri baxır: artıq söylənmiş, baş vermiş, eşidilmiş şeyə istinad edir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ shoes are very comfortable." — ayağımdakı, cəm:',
          options: ['That', 'Those', 'These'],
          answer: 'These',
        },
        {
          q: '"Look at ___ mountains over there!" — uzaqda, cəm:',
          options: ['this', 'these', 'those'],
          answer: 'those',
        },
        {
          q: '"___ is my favourite café." — yanımdakı, tək:',
          options: ['That', 'These', 'This'],
          answer: 'This',
        },
        {
          q: '"Who is ___ girl over there?" — uzaqda, tək:',
          options: ['this', 'that', 'those'],
          answer: 'that',
        },
        {
          q: '"___ was a great idea, thank you!" — keçmiş hala istinad:',
          options: ['This', 'These', 'That'],
          answer: 'That',
        },
        {
          q: '"Which bag do you prefer — ___ or that one?" — yaxındakı, tək:',
          options: ['those', 'this', 'these'],
          answer: 'this',
        },
        {
          q: '"___ apples here look really fresh." — yaxında, cəm:',
          options: ['Those', 'That', 'These'],
          answer: 'These',
        },
        {
          q: '"Can I try ___ coat in the window?" — uzaqda, tək:',
          options: ['this', 'these', 'that'],
          answer: 'that',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'this / that / these / those — Xüsusi Hallar + Səhvlər (Dərs 2)',
  cards: [

    // ── Ekran 1: Telefonda işlənmə ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Telefonda — this is / is that?',
      content: 'Telefon danışığında this = danışan şəxs, that = digər şəxs:',
      examples: [
        { word: 'Hello, this is Kamran.',                az: 'this = danışan (mən)'              },
        { word: 'Is that Leyla?',                        az: 'that = digər şəxs (sən)'           },
        { word: 'Hi, this is reception. How can I help?', az: 'this is = tanıtma'               },
        { word: 'Hello, is that the doctor\'s office?',  az: 'that = zəng edilən yer'            },
        { word: 'This is Anna speaking.',                az: 'this is = rəsmi tanıtma'           },
        { word: 'Is that you, David?',                   az: 'that = digər şəxs'                },
      ],
      tip: '"Hello, that is Kamran." ❌ — danışan özünü tanıtdıranda this işlədilir: "this is Kamran" ✅',
    },

    // ── Ekran 2: Tanıtma — this is... ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tanıtma — this is...',
      content: 'Birini başqasına tanıtdırarkən this is işlədilir:',
      examples: [
        { word: 'Sara, this is my colleague, Farid.',    az: 'this is = tanıtma'                 },
        { word: 'Pleased to meet you, Farid.',           az: 'standart cavab'                   },
        { word: 'Mum, this is my friend Rena.',          az: 'this is = tanıtma'                 },
        { word: 'Nice to meet you, Rena.',               az: 'standart cavab'                   },
        { word: 'Everyone, this is our new manager.',    az: 'this is = qrupa tanıtma'           },
        { word: 'Hi everyone!',                          az: 'cavab'                            },
      ],
      tip: '"That is my friend" ❌ — tanıtma zamanı həmişə this is işlədilir, şəxs yaxında olduğu üçün.',
    },

    // ── Ekran 3: Tez-tez edilən səhvlər ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'this / that / these / those ilə bağlı ən çox edilən səhvlər:',
      table: [
        ['Yanlış',                                    'Düzgün'],
        ['These is my favourite place.',              'This is my favourite place.'],
        ['Who is those people?',                      'Who are those people?'],
        ['That shoes are expensive.',                 'Those shoes are expensive.'],
        ['Hello, that is Emma.',                      'Hello, this is Emma.'],
        ['Look at this birds up there!',              'Look at those birds up there!'],
        ['Those was a brilliant match!',              'That was a brilliant match!'],
      ],
      tip: 'this/that → tək fel (is/was). these/those → cəm fel (are/were). "These is" ❌ → "These are" ✅',
    },

    // ── Ekran 4: Ümumi xatırlatma — dörd sözün müqayisəsi ────────────────────
    {
      type: 'lesson',
      title: 'Dörd sözün tam müqayisəsi',
      content: 'Hər sözün hansı hallarda işləndiyini bir arada gör:',
      examples: [
        { word: 'This is delicious! What is it?',        az: 'this — yaxın, tək, isimsizdə'      },
        { word: 'That was a long journey.',              az: 'that — keçmiş hala istinad'        },
        { word: 'These are on sale. Let\'s buy some.',   az: 'these — yaxın, cəm, isimsizdə'    },
        { word: 'Those look amazing from here.',         az: 'those — uzaq, cəm, isimsizdə'     },
        { word: 'This bag is mine, that one is yours.',  az: 'this — yaxın / that — uzaq'       },
        { word: 'These seats are taken, take those.',    az: 'these — yaxın / those — uzaq'     },
      ],
      tip: 'Hər zaman iki şeyi düşün: 1) Yaxın mı, uzaq mı? → this/that vs these/those. 2) Tək mi, cəm mi? → this/that vs these/those.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Telefonda özünü tanıtdırarkən: "Hello, ___ is Omar."',
          options: ['that', 'those', 'this'],
          answer: 'this',
        },
        {
          q: '"___ was a fantastic meal! Thank you." — keçmiş hala istinad:',
          options: ['This', 'These', 'That'],
          answer: 'That',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'These is my favourite song.',
            'This is my favourite song.',
            'Those is my favourite song.',
          ],
          answer: 'This is my favourite song.',
        },
        {
          q: '"Who are ___ children playing over there?" — uzaqda, cəm:',
          options: ['this', 'these', 'those'],
          answer: 'those',
        },
        {
          q: '"Tom, ___ is my sister, Nina." — tanıtma:',
          options: ['that', 'those', 'this'],
          answer: 'this',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'That shoes are too small.',
            'Those shoes are too small.',
            'Those shoes is too small.',
          ],
          answer: 'Those shoes are too small.',
        },
        {
          q: '"\'I\'m sorry I forgot.\' \'___ OK, don\'t worry.\'" — keçmiş hala:',
          options: ['This\'s', 'These\'s', 'That\'s'],
          answer: 'That\'s',
        },
        {
          q: '"Is ___ Sarah? It\'s me, Kim." — telefonda, digər şəxs:',
          options: ['this', 'these', 'that'],
          answer: 'that',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'yaxın + tək:',                                                          tr: 'this',                         wrong: 'that'                         },
  { en: 'uzaq + tək:',                                                           tr: 'that',                         wrong: 'this'                         },
  { en: 'yaxın + cəm:',                                                          tr: 'these',                        wrong: 'those'                        },
  { en: 'uzaq + cəm:',                                                           tr: 'those',                        wrong: 'these'                        },
  { en: '"___ is my bag." — yaxında, tək:',                                      tr: 'This',                         wrong: 'That'                         },
  { en: '"Look at ___ stars up there!" — uzaqda, cəm:',                          tr: 'those',                        wrong: 'these'                        },
  { en: '"___ shoes here are comfortable." — yaxında, cəm:',                     tr: 'These',                        wrong: 'Those'                        },
  { en: '"___ building over there is the library." — uzaqda, tək:',              tr: 'That',                         wrong: 'This'                         },
  { en: '"___ was a great idea!" — keçmiş hala istinad:',                        tr: 'That',                         wrong: 'This'                         },
  { en: 'Telefonda özünü tanıtdıranda:',                                          tr: 'this is',                      wrong: 'that is'                      },
  { en: 'Telefonda digər şəxsə müraciətdə:',                                     tr: 'is that',                      wrong: 'is this'                      },
  { en: 'Birini tanıtdırarkən: "Ana, ___ mənim dostum Elvin."',                  tr: 'this is',                      wrong: 'that is'                      },
  { en: '"\'Gecikdim.\' \'___ problem deyil.\'" — keçmiş hala:',                 tr: 'That\'s',                      wrong: 'This\'s'                      },
  { en: '"These is wrong." — düzgün forması:',                                   tr: 'These are wrong.',             wrong: 'Those is wrong.'              },
  { en: '"That shoes are nice." — düzgün forması:',                              tr: 'Those shoes are nice.',        wrong: 'That shoe are nice.'          },
  { en: '"___ or those? Hansını seçirsən?" — yaxındakı, cəm:',                   tr: 'These',                        wrong: 'This'                         },
  { en: '"Which is better — ___ one here or that one?" — yaxın, tək:',           tr: 'this',                         wrong: 'these'                        },
  { en: '"___ are on sale over there." — uzaqda, cəm:',                          tr: 'Those',                        wrong: 'These'                        },
  { en: '"\'Maraqlı xəbərdir.\' \'Bunu bilmirdim.\'" — that / this?',            tr: 'that',                         wrong: 'this'                         },
  { en: '"Hello, ___ is the front desk." — telefonda, danışan:',                 tr: 'this',                         wrong: 'that'                         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu ayağımdakı ayaqqabılar çox rahatdır.',
      words: ['These', 'shoes', 'are', 'very', 'comfortable', 'Those', 'This', 'is'],
      answer: ['These', 'shoes', 'are', 'very', 'comfortable'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uzaqdakı o bina çox köhnədir.',
      words: ['That', 'building', 'over', 'there', 'is', 'very', 'old', 'This', 'are'],
      answer: ['That', 'building', 'over', 'there', 'is', 'very', 'old'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu mənim sevimli kitabımdır.',
      words: ['This', 'is', 'my', 'favourite', 'book', 'That', 'These', 'are'],
      answer: ['This', 'is', 'my', 'favourite', 'book'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Oradakı o alma ağaclarına bax!',
      words: ['Look', 'at', 'those', 'apple', 'trees', 'over', 'there', 'these', 'this'],
      answer: ['Look', 'at', 'those', 'apple', 'trees', 'over', 'there'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu, əla bir axşam yeməyi idi. Çox sağ ol.',
      words: ['That', 'was', 'a', 'wonderful', 'dinner', 'thank', 'you', 'This', 'were'],
      answer: ['That', 'was', 'a', 'wonderful', 'dinner', 'thank', 'you'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Salam, mən Nigarəm. Rəna sənsənmi?',
      words: ['Hello', 'this', 'is', 'Nigara', 'is', 'that', 'Rena', 'that', 'this'],
      answer: ['Hello', 'this', 'is', 'Nigara', 'is', 'that', 'Rena'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kənan, bu mənim bacım Aytəndır.',
      words: ['Kenan', 'this', 'is', 'my', 'sister', 'Ayten', 'that', 'those'],
      answer: ['Kenan', 'this', 'is', 'my', 'sister', 'Ayten'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bunları sevirsən, yoxsa onları?',
      words: ['Do', 'you', 'prefer', 'these', 'or', 'those', 'this', 'that'],
      answer: ['Do', 'you', 'prefer', 'these', 'or', 'those'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: '\'Gecikdim, bağışla.\' \'Problem deyil.\'',
      words: ['\'I\'m', 'late,', 'sorry.\'', '\'That\'s', 'OK.\'', 'This\'s', 'These\'s'],
      answer: ['\'I\'m', 'late,', 'sorry.\'', '\'That\'s', 'OK.\''],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Uzaqdakı o oturacaqlar boşdur.',
      words: ['Those', 'seats', 'over', 'there', 'are', 'free', 'These', 'is', 'This'],
      answer: ['Those', 'seats', 'over', 'there', 'are', 'free'],
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

     
{ type: 'section_divider', title: 'Sual qurmaq — ümumi suallar' },

// ── UNIT 4, 10, 12 — Ümumi Suallar (Yes/No Questions) ────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Yes/No Sualları — do/does + is/are (Dərs 1)',
  cards: [

    // ── Ekran 1: Əsas formula ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Yes/No sualları — qurma qaydası',
      content: 'Yes/No sualları qurmaq üçün köməkçi fel subyektdən əvvələ keçir:',
      table: [
        ['Köməkçi fel',  'Subyekt',     'Əsas fel',     'Nümunə'],
        ['Do',           'you/they/we', '+ fel',        'Do you like jazz?'],
        ['Does',         'he/she/it',   '+ fel',        'Does she work here?'],
        ['Is',           'he/she/it',   '+ -ing',       'Is he sleeping?'],
        ['Are',          'you/they/we', '+ -ing',       'Are they coming?'],
        ['Was',          'he/she/it',   '+ adj/place',  'Was it cold?'],
        ['Were',         'you/they/we', '+ adj/place',  'Were you at home?'],
        ['Did',          'hamısı',      '+ əsas hal',   'Did she call?'],
      ],
      tip: 'Qayda sadədir: köməkçi feli öndə gör — sual var. "You like music?" ❌ → "Do you like music?" ✅',
    },

    // ── Ekran 2: do / does — Present Simple ──────────────────────────────────
    {
      type: 'lesson',
      title: 'do / does — Present Simple sualları',
      content: 'Geniş zamanda do (I/you/we/they) və does (he/she/it) işlədilir. Əsas fel sadə formada qalır:',
      examples: [
        { word: 'Do you drink coffee?',                  az: 'do — I/you/we/they'               },
        { word: 'Does he work on weekends?',             az: 'does — he/she/it'                 },
        { word: 'Do they live nearby?',                  az: 'do — they'                        },
        { word: 'Does your mother speak any languages?', az: 'does — your mother = she'         },
        { word: 'Do you always have breakfast?',         az: 'always — do ilə birlikdə'         },
        { word: 'Does it cost much?',                    az: 'does — it'                        },
      ],
      tip: '"Does she works?" ❌ — does ilə əsas fel -s almır: "Does she work?" ✅',
    },

    // ── Ekran 3: is / are — Present Continuous ───────────────────────────────
    {
      type: 'lesson',
      title: 'is / are — Present Continuous sualları',
      content: 'İndi davam edən zamanda is (he/she/it) və are (you/we/they) işlədilir:',
      examples: [
        { word: 'Is he studying right now?',             az: 'is — he/she/it + -ing'            },
        { word: 'Are you feeling better today?',         az: 'are — you + -ing'                 },
        { word: 'Is it snowing outside?',                az: 'is — it + -ing'                   },
        { word: 'Are your parents coming tonight?',      az: 'are — they + -ing'                },
        { word: 'Why are you wearing a jacket inside?',  az: 'why + are — sual sözü ilə'        },
        { word: 'Where is she going?',                   az: 'where + is — sual sözü ilə'       },
      ],
      tip: '"Are she working?" ❌ — she/he/it ilə is işlədilir: "Is she working?" ✅',
    },

    // ── Ekran 4: Qısa cavablar ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qısa cavablar — köməkçi feli təkrarla',
      content: 'Qısa cavabda köməkçi fel suala uyğun olmalıdır — əsas feli təkrarlamaq olmaz:',
      table: [
        ['Sual',              'Bəli',            'Xeyr'],
        ['Do you...?',        'Yes, I do.',       'No, I don\'t.'],
        ['Does she...?',      'Yes, she does.',   'No, she doesn\'t.'],
        ['Is he...?',         'Yes, he is.',      'No, he isn\'t.'],
        ['Are they...?',      'Yes, they are.',   'No, they aren\'t.'],
      ],
      tip: '"Do you like it?" → "Yes, I like." ❌ — köməkçi feli təkrar et: "Yes, I do." ✅',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ she work on Saturdays?" — boşluğa nə gəlir?',
          options: ['Do', 'Does', 'Is'],
          answer: 'Does',
        },
        {
          q: '"___ they coming to dinner tonight?" — boşluğa nə gəlir?',
          options: ['Do', 'Does', 'Are'],
          answer: 'Are',
        },
        {
          q: '"Does he play football?" → "Yes, ___." — qısa cavab:',
          options: ['Yes, he play.', 'Yes, he does.', 'Yes, he is.'],
          answer: 'Yes, he does.',
        },
        {
          q: '"___ your friends live near here?" — boşluğa nə gəlir?',
          options: ['Does', 'Is', 'Do'],
          answer: 'Do',
        },
        {
          q: '"___ it raining now?" — boşluğa nə gəlir?',
          options: ['Does', 'Is', 'Do'],
          answer: 'Is',
        },
        {
          q: '"Are you hungry?" → "No, ___." — qısa cavab:',
          options: ['No, I\'m not.', 'No, I don\'t.', 'No, I aren\'t.'],
          answer: 'No, I\'m not.',
        },
        {
          q: 'Düzgün sualı seç:',
          options: ['Does she works here?', 'Does she work here?', 'Do she work here?'],
          answer: 'Does she work here?',
        },
        {
          q: '"Why ___ you wearing a hat inside?" — boşluğa nə gəlir?',
          options: ['do', 'does', 'are'],
          answer: 'are',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Yes/No Sualları — was/were + did (Dərs 2)',
  cards: [

    // ── Ekran 1: was / were — keçmişdə to be ──────────────────────────────────
    {
      type: 'lesson',
      title: 'was / were — Past Simple (to be)',
      content: 'Keçmişdə olmaq, vəziyyət, yer bildirən suallar üçün was/were işlədilir:',
      examples: [
        { word: 'Was the film interesting?',             az: 'was — he/she/it + adj'            },
        { word: 'Were you tired after the journey?',     az: 'were — you/we/they + adj'         },
        { word: 'Was she at the office yesterday?',      az: 'was — she + yer'                  },
        { word: 'Were your parents at home last night?', az: 'were — they + yer'                },
        { word: 'Why were you late this morning?',       az: 'why + were — sual sözü ilə'       },
        { word: 'How much was the train ticket?',        az: 'how much + was — qiymət sualı'    },
      ],
      tip: '"Were he there?" ❌ — he/she/it ilə was işlədilir: "Was he there?" ✅',
    },

    // ── Ekran 2: did — Past Simple (digər fellər) ─────────────────────────────
    {
      type: 'lesson',
      title: 'did — Past Simple sualları',
      content: 'Keçmişdə digər fellərlə did işlədilir. Əsas fel mütləq sadə (infinitive) formada qalır:',
      examples: [
        { word: 'Did you enjoy the concert?',            az: 'did + əsas hal — enjoy ✅'        },
        { word: 'Did she call you back?',                az: 'did + əsas hal — call ✅'         },
        { word: 'Did they arrive on time?',              az: 'did + əsas hal — arrive ✅'       },
        { word: 'What did you do last weekend?',         az: 'what + did — sual sözü ilə'       },
        { word: 'Where did your family go on holiday?',  az: 'where + did — sual sözü ilə'      },
        { word: 'How did you hear about this?',          az: 'how + did — sual sözü ilə'        },
      ],
      tip: '"Did they went?" ❌ — did-dən sonra həmişə əsas hal (infinitive): "Did they go?" ✅',
    },

    // ── Ekran 3: was/were + did üçün qısa cavablar ───────────────────────────
    {
      type: 'lesson',
      title: 'was/were + did — qısa cavablar',
      content: 'Keçmiş zaman suallarında köməkçi fel eyni formada qalır:',
      table: [
        ['Sual',              'Bəli',            'Xeyr'],
        ['Was it...?',        'Yes, it was.',     'No, it wasn\'t.'],
        ['Were they...?',     'Yes, they were.',  'No, they weren\'t.'],
        ['Did you...?',       'Yes, I did.',      'No, I didn\'t.'],
        ['Did she...?',       'Yes, she did.',    'No, she didn\'t.'],
      ],
      tip: '"Did you go?" → "Yes, I went." ❌ — köməkçi feli geri qaytar: "Yes, I did." ✅',
    },

    // ── Ekran 4: Tez-tez edilən səhvlər ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'Yes/No sualları ilə bağlı ən çox edilən səhvlər:',
      table: [
        ['Yanlış',                               'Düzgün'],
        ['Does you like coffee?',                'Do you like coffee?'],
        ['Did they went to the cinema?',         'Did they go to the cinema?'],
        ['Are she working today?',               'Is she working today?'],
        ['Were you late? Yes, I were.',          'Were you late? Yes, I was.'],
        ['Did you enjoyed the match?',           'Did you enjoy the match?'],
        ['Does he works hard?',                  'Does he work hard?'],
        ['Is they coming to the party?',         'Are they coming to the party?'],
      ],
      tip: 'Ən çox edilən səhv: did + -ed forması. "Did she called?" ❌ → "Did she call?" ✅ — did artıq keçmişi bildirir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ the weather nice last week?" — boşluğa nə gəlir?',
          options: ['Were', 'Did', 'Was'],
          answer: 'Was',
        },
        {
          q: '"___ you enjoy the holiday?" — boşluğa nə gəlir?',
          options: ['Were', 'Did', 'Was'],
          answer: 'Did',
        },
        {
          q: 'Düzgün sualı seç:',
          options: ['Did they went?', 'Did they go?', 'Did they gone?'],
          answer: 'Did they go?',
        },
        {
          q: '"Was he at work yesterday?" → "Yes, ___." — qısa cavab:',
          options: ['Yes, he did.', 'Yes, he were.', 'Yes, he was.'],
          answer: 'Yes, he was.',
        },
        {
          q: '"___ they at the concert last night?" — boşluğa nə gəlir?',
          options: ['Did', 'Was', 'Were'],
          answer: 'Were',
        },
        {
          q: '"Did she call?" → "No, ___." — qısa cavab:',
          options: ['No, she didn\'t.', 'No, she wasn\'t.', 'No, she didn\'t called.'],
          answer: 'No, she didn\'t.',
        },
        {
          q: 'Düzgün sualı seç:',
          options: ['Did you enjoyed it?', 'Did you enjoy it?', 'Did you enjoying it?'],
          answer: 'Did you enjoy it?',
        },
        {
          q: '"Were you late?" → "No, ___." — qısa cavab:',
          options: ['No, I weren\'t.', 'No, I wasn\'t.', 'No, I didn\'t.'],
          answer: 'No, I wasn\'t.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'I/you/we/they ilə Present Simple sual:',                                tr: 'Do',                           wrong: 'Does'                         },
  { en: 'he/she/it ilə Present Simple sual:',                                    tr: 'Does',                         wrong: 'Do'                           },
  { en: 'he/she/it ilə Present Continuous sual:',                                tr: 'Is',                           wrong: 'Are'                          },
  { en: 'you/we/they ilə Present Continuous sual:',                              tr: 'Are',                          wrong: 'Is'                           },
  { en: 'he/she/it ilə Past Simple (to be) sual:',                               tr: 'Was',                          wrong: 'Were'                         },
  { en: 'you/we/they ilə Past Simple (to be) sual:',                             tr: 'Were',                         wrong: 'Was'                          },
  { en: 'Keçmişdə digər fellər üçün sual:',                                      tr: 'Did',                          wrong: 'Does'                         },
  { en: '"Did + ?" — əsas fel hansı formada olur?',                              tr: 'əsas hal (infinitive)',         wrong: '-ed forması'                  },
  { en: '"Does she work?" — qısa müsbət cavab:',                                 tr: 'Yes, she does.',               wrong: 'Yes, she works.'              },
  { en: '"Did you go?" — qısa inkar cavab:',                                     tr: 'No, I didn\'t.',               wrong: 'No, I didn\'t go.'            },
  { en: '"Was it cold?" — qısa müsbət cavab:',                                   tr: 'Yes, it was.',                 wrong: 'Yes, it did.'                 },
  { en: '"Are they coming?" — qısa inkar cavab:',                                tr: 'No, they aren\'t.',            wrong: 'No, they don\'t.'             },
  { en: '"Does he works?" — düzgün forması:',                                    tr: 'Does he work?',                wrong: 'Do he work?'                  },
  { en: '"Did they went?" — düzgün forması:',                                    tr: 'Did they go?',                 wrong: 'Did they goes?'               },
  { en: '"Are she sleeping?" — düzgün forması:',                                 tr: 'Is she sleeping?',             wrong: 'Does she sleeping?'           },
  { en: 'Yes/No suallarında intonasiya:',                                         tr: 'yuxarı qalxır (↗)',            wrong: 'aşağı düşür (↘)'              },
  { en: '"Do you always get up early?" — always-in yeri:',                       tr: 'do ilə əsas fel arasında',     wrong: 'cümlənin əvvəlində'           },
  { en: '"Were you late? Yes, I ___." — boşluğa nə gəlir?',                      tr: 'was',                          wrong: 'were'                         },
  { en: '"Did you enjoyed it?" — düzgün forması:',                               tr: 'Did you enjoy it?',            wrong: 'Did you enjoying it?'         },
  { en: '"Is they coming?" — düzgün forması:',                                   tr: 'Are they coming?',             wrong: 'Does they coming?'            },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən tez-tez tennis oynayırsan?',
      words: ['Do', 'you', 'often', 'play', 'tennis', 'Does', 'plays'],
      answer: ['Do', 'you', 'often', 'play', 'tennis'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, bu yaxınlarda yaşayır?',
      words: ['Does', 'she', 'live', 'near', 'here', 'Do', 'lives'],
      answer: ['Does', 'she', 'live', 'near', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar indi görüşməyə gəlirlər?',
      words: ['Are', 'they', 'coming', 'to', 'the', 'meeting', 'now', 'Is', 'come'],
      answer: ['Are', 'they', 'coming', 'to', 'the', 'meeting', 'now'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O dünən işdə idi?',
      words: ['Was', 'she', 'at', 'work', 'yesterday', 'Were', 'Did'],
      answer: ['Was', 'she', 'at', 'work', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Onlar konsertdən həzz aldılar?',
      words: ['Did', 'they', 'enjoy', 'the', 'concert', 'enjoyed', 'Were'],
      answer: ['Did', 'they', 'enjoy', 'the', 'concert'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Niyə bu səhər gecikdin?',
      words: ['Why', 'were', 'you', 'late', 'this', 'morning', 'was', 'did'],
      answer: ['Why', 'were', 'you', 'late', 'this', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu söz nə mənaya gəlir?',
      words: ['What', 'does', 'this', 'word', 'mean', 'do', 'means'],
      answer: ['What', 'does', 'this', 'word', 'mean'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Valideynlərin keçən həftə hara getdilər?',
      words: ['Where', 'did', 'your', 'parents', 'go', 'last', 'week', 'went', 'were'],
      answer: ['Where', 'did', 'your', 'parents', 'go', 'last', 'week'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İmtahan çətin idi?',
      words: ['Was', 'your', 'exam', 'difficult', 'Were', 'Did', 'difficulty'],
      answer: ['Was', 'your', 'exam', 'difficult'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Həmişə erkən durursunmu?',
      words: ['Do', 'you', 'always', 'get', 'up', 'early', 'Does', 'got', 'did'],
      answer: ['Do', 'you', 'always', 'get', 'up', 'early'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Sual qurmaq — xüsusi suallar (Wh-)' },

// ── UNIT 43–46 — Xüsusi Suallar (Wh- Questions) ──────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Wh- Sualları — Sual Sözləri + Formula (Dərs 1)',
  cards: [

    // ── Ekran 1: Sual sözləri cədvəli ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Wh- sual sözləri — tam siyahı',
      content: 'Wh- sualları müəyyən məlumat soruşur. Hər sual sözünün öz mənası var:',
      table: [
        ['Sual sözü',    'Mənası',                    'Nümunə'],
        ['What',         'Nə',                        'What do you do?'],
        ['Where',        'Hara / Harada',              'Where did she go?'],
        ['When',         'Nə vaxt',                   'When does he arrive?'],
        ['Who',          'Kim',                       'Who called you?'],
        ['Why',          'Niyə',                      'Why are you tired?'],
        ['How',          'Necə',                      'How do you go to work?'],
        ['Which',        'Hansı',                     'Which bag is yours?'],
        ['How long',     'Nə qədər müddət',           'How long have you lived here?'],
        ['How often',    'Nə qədər tez-tez',          'How often do you exercise?'],
        ['How much',     'Nə qədər (sayılmayan)',      'How much was the ticket?'],
        ['How many',     'Nə qədər (sayılan)',         'How many people came?'],
        ['How far',      'Nə qədər uzaqda',           'How far is the station?'],
        ['How old',      'Neçə yaşında',              'How old is she?'],
      ],
      tip: 'Wh- suallarında intonasiya aşağı düşür (↘) — Yes/No suallarından fərqli olaraq yuxarı qalxmır.',
    },

    // ── Ekran 2: Qurma formulu ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Wh- sualları — qurma formulu',
      content: 'Sual sözü cümlənin əvvəlinə gəlir, sonra köməkçi fel + subyekt + əsas fel:',
      examples: [
        { word: 'Where do your friends live?',          az: 'Where + do + subyekt + əsas hal'   },
        { word: 'What does this sign mean?',            az: 'What + does + subyekt + əsas hal'  },
        { word: 'Why is she crying?',                   az: 'Why + is + subyekt + -ing'         },
        { word: 'When did they arrive?',                az: 'When + did + subyekt + əsas hal'   },
        { word: 'How are you feeling today?',           az: 'How + are + subyekt + -ing'        },
        { word: 'What time does the match start?',      az: 'What time + does + subyekt + fel'  },
      ],
      tip: '"Where you live?" ❌ — köməkçi fel mütləq lazımdır: "Where do you live?" ✅',
    },

    // ── Ekran 3: Subyekt sualı — who/what köməkçi felsiz ─────────────────────
    {
      type: 'lesson',
      title: 'Subyekt sualları — who / what + birbaşa fel',
      content: 'Who və ya what özü subyekt olduqda köməkçi fel işlədilmir:',
      examples: [
        { word: 'Who took my phone?',                   az: 'who = subyekt — köməkçi fel yox'   },
        { word: 'What happened at the meeting?',        az: 'what = subyekt — köməkçi fel yox'  },
        { word: 'Who lives next door?',                 az: 'who = subyekt — fel birbaşa'       },
        { word: 'What made you change your mind?',      az: 'what = subyekt — köməkçi fel yox'  },
        { word: 'Who is coming to the party?',          az: 'who = subyekt — is ilə (davam)' },
        { word: 'Who has got the tickets?',             az: 'who = subyekt — has ilə'           },
      ],
      tip: '"Who did broke the window?" ❌ — who subyektdirsə did işlətmə: "Who broke the window?" ✅',
    },

    // ── Ekran 4: Obyekt sualı — who/what köməkçi felli ───────────────────────
    {
      type: 'lesson',
      title: 'Obyekt sualları — who / what + köməkçi fel',
      content: 'Who və ya what obyekt olduqda köməkçi fel lazımdır:',
      examples: [
        { word: 'Who did you invite to the party?',     az: 'who = obyekt — did lazımdır'       },
        { word: 'What did she say to you?',             az: 'what = obyekt — did lazımdır'      },
        { word: 'Who are you waiting for?',             az: 'who = obyekt — are lazımdır'       },
        { word: 'What was he reading?',                 az: 'what = obyekt — was lazımdır'      },
        { word: 'Who did they meet at the conference?', az: 'who = obyekt — did lazımdır'       },
        { word: 'What does she want?',                  az: 'what = obyekt — does lazımdır'     },
      ],
      tip: 'Sadə yoxlama: "Somebody did it" → who subyektdir → köməkçi felsiz. "I met somebody" → who obyektdir → köməkçi felli.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ do you usually go to work?" — boşluğa nə gəlir?',
          options: ['What', 'Who', 'How'],
          answer: 'How',
        },
        {
          q: '"___ broke the window?" — subyekt sualı:',
          options: ['Who did', 'Who does', 'Who'],
          answer: 'Who',
        },
        {
          q: '"___ did you meet at the airport?" — obyekt sualı:',
          options: ['Who', 'What', 'Which'],
          answer: 'Who',
        },
        {
          q: '"___ does this word mean?" — boşluğa nə gəlir?',
          options: ['Who', 'What', 'Which'],
          answer: 'What',
        },
        {
          q: '"What ___ last night?" — subyekt sualı, keçmiş:',
          options: ['did happen', 'happened', 'does happen'],
          answer: 'happened',
        },
        {
          q: '"___ didn\'t you come yesterday?" — boşluğa nə gəlir?',
          options: ['What', 'How', 'Why'],
          answer: 'Why',
        },
        {
          q: '"___ train shall we take — the 8.15 or the 9.00?" — məhdud seçim:',
          options: ['What', 'Who', 'Which'],
          answer: 'Which',
        },
        {
          q: '"___ did you buy?" — obyekt sualı:',
          options: ['Who', 'What', 'Which did'],
          answer: 'What',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Wh- Sualları — What/Which/How + Xüsusi Hallar (Dərs 2)',
  cards: [

    // ── Ekran 1: what vs which ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'what vs which — fərq',
      content: 'what — ümumi suallar üçün. which — məhdud sayda variant arasında seçim üçün:',
      table: [
        ['what — ümumi',                              'which — məhdud seçim'],
        ['What sport do you like?',                   'Which sport do you prefer — tennis or football?'],
        ['What is the capital of France?',            'Which city is bigger — Paris or Lyon?'],
        ['What colour is your car?',                  'Which colour suits me better — blue or green?'],
        ['What sort of films do you like?',           'Which film shall we watch — this one or that one?'],
      ],
      tip: 'İnsanlar arasında seçimdə who işlədilir: "Who is taller — Tim or Sam?" ✅  "Which is taller?" ❌',
    },

    // ── Ekran 2: What is it like? ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'What is/are ... like? — ümumi təəssürat',
      content: 'What is/are ... like? — bir şey, yer və ya adam haqqında ümumi fikir soruşmaq üçün:',
      examples: [
        { word: 'What\'s your new apartment like?',   az: 'ümumi təəssürat — necədir?'         },
        { word: 'What are your classmates like?',     az: 'insanlar haqqında — necədirlər?'    },
        { word: 'What was the traffic like?',         az: 'keçmiş — necə idi?'                },
        { word: 'What\'s the food like there?',       az: 'yer haqqında — necədir?'            },
        { word: 'What was the journey like?',         az: 'təcrübə haqqında — necə idi?'      },
        { word: 'What is he like as a manager?',      az: 'xüsusi kontekstdə — necədir?'      },
      ],
      tip: '"Do you like it?" ≠ "What is it like?" — like burada prepoziyadır: "What\'s it like?" = "Necədir?" ✅',
    },

    // ── Ekran 3: Prepoziysiya sualın sonunda ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Prepoziysiya — sualın sonunda',
      content: 'Wh- suallarında prepoziysiya adətən cümlənin sonunda işlədilir:',
      examples: [
        { word: 'Where are you from?',               az: 'from — sonda'                       },
        { word: 'Who is she going with?',            az: 'with — sonda'                       },
        { word: 'What are you talking about?',       az: 'about — sonda'                      },
        { word: 'Which hotel are they staying in?',  az: 'in — sonda'                         },
        { word: 'Who does this laptop belong to?',   az: 'to — sonda'                         },
        { word: 'What was he afraid of?',            az: 'of — sonda'                         },
      ],
      tip: '"From where are you?" ❌ — ingilis dilində prepoziysiya cümlənin əvvəlinə keçmir: "Where are you from?" ✅',
    },

    // ── Ekran 4: why + inkar + tez-tez edilən səhvlər ────────────────────────
    {
      type: 'lesson',
      title: 'why + inkar + ümumi səhvlər',
      content: 'why inkar köməkçi felli suallar qura bilər. Ən çox edilən Wh- səhvləri:',
      table: [
        ['Yanlış',                               'Düzgün'],
        ['Why you didn\'t call?',                'Why didn\'t you call?'],
        ['What does she likes?',                 'What does she like?'],
        ['Who did broke the lock?',              'Who broke the lock?'],
        ['Where are from you?',                  'Where are you from?'],
        ['What did happen?',                     'What happened?'],
        ['How old has she?',                     'How old is she?'],
        ['Which is taller — Ben or Sam?',        'Who is taller — Ben or Sam?'],
      ],
      tip: 'why + inkar: "Why isn\'t he here?" ✅ "Why he isn\'t here?" ❌ — köməkçi fel subyektdən əvvəl gəlir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"What ___ the new office like?" — boşluğa nə gəlir?',
          options: ['do', 'is', 'are'],
          answer: 'is',
        },
        {
          q: '"___ is bigger — the kitchen or the living room?" — iki variant arasında:',
          options: ['What', 'Who', 'Which'],
          answer: 'Which',
        },
        {
          q: '"Where are you ___?" — prepoziysiya sonda:',
          options: ['from?', 'of?', 'at?'],
          answer: 'from?',
        },
        {
          q: '"Why ___ she come to class yesterday?" — inkar sual:',
          options: ['didn\'t', 'don\'t', 'wasn\'t'],
          answer: 'didn\'t',
        },
        {
          q: '"___ is taller — your brother or your sister?" — insanlar arasında seçim:',
          options: ['Which', 'What', 'Who'],
          answer: 'Who',
        },
        {
          q: 'Düzgün sualı seç:',
          options: ['What did happen?', 'What happened?', 'What does happened?'],
          answer: 'What happened?',
        },
        {
          q: '"___ is it to the city centre?" — məsafə:',
          options: ['How long', 'How often', 'How far'],
          answer: 'How far',
        },
        {
          q: '"What are your new colleagues ___?" — ümumi təəssürat:',
          options: ['like?', 'as?', 'similar?'],
          answer: 'like?',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"Hara?" — sual sözü:',                                                  tr: 'Where',                        wrong: 'When'                         },
  { en: '"Nə vaxt?" — sual sözü:',                                               tr: 'When',                         wrong: 'Where'                        },
  { en: '"Niyə?" — sual sözü:',                                                  tr: 'Why',                          wrong: 'How'                          },
  { en: '"Necə?" — sual sözü:',                                                  tr: 'How',                          wrong: 'What'                         },
  { en: '"Nə qədər tez-tez?" — sual sözü:',                                      tr: 'How often',                    wrong: 'How long'                     },
  { en: '"Nə qədər uzaqda?" — sual sözü:',                                       tr: 'How far',                      wrong: 'How much'                     },
  { en: '"Neçə yaşında?" — sual sözü:',                                          tr: 'How old',                      wrong: 'How tall'                     },
  { en: 'Subyekt sualında — who/what ilə köməkçi fel:',                          tr: 'işlədilmir',                   wrong: 'işlədilir'                    },
  { en: 'Obyekt sualında — who/what ilə köməkçi fel:',                           tr: 'işlədilir',                    wrong: 'işlədilmir'                   },
  { en: '"Who broke the window?" — who burada:',                                  tr: 'subyektdir',                   wrong: 'obyektdir'                    },
  { en: '"Who did you meet?" — who burada:',                                      tr: 'obyektdir',                    wrong: 'subyektdir'                   },
  { en: 'Məhdud seçim üçün what / which?',                                        tr: 'which',                        wrong: 'what'                         },
  { en: 'İnsanlar arasında seçim üçün which / who?',                              tr: 'who',                          wrong: 'which'                        },
  { en: '"What is it like?" — like burada:',                                      tr: 'prepoziyadır',                 wrong: 'feldir'                       },
  { en: '"Where are you from?" — from-un yeri:',                                  tr: 'sonda',                        wrong: 'əvvəldə'                      },
  { en: 'Wh- suallarında intonasiya:',                                            tr: 'aşağı düşür (↘)',              wrong: 'yuxarı qalxır (↗)'            },
  { en: '"What did happen?" — düzgün forması:',                                   tr: 'What happened?',               wrong: 'What did happened?'           },
  { en: '"How old has she?" — düzgün forması:',                                   tr: 'How old is she?',              wrong: 'How old does she?'            },
  { en: '"Why you didn\'t come?" — düzgün forması:',                              tr: 'Why didn\'t you come?',        wrong: 'Why you didn\'t come?'        },
  { en: '"Which is taller — Ann or Kate?" — düzgün forması:',                     tr: 'Who is taller — Ann or Kate?', wrong: 'What is taller — Ann or Kate?' },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Valideynlərin harda yaşayır?',
      words: ['Where', 'do', 'your', 'parents', 'live', 'does', 'lives'],
      answer: ['Where', 'do', 'your', 'parents', 'live'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kim pəncərəni qırdı?',
      words: ['Who', 'broke', 'the', 'window', 'did', 'break', 'Who did'],
      answer: ['Who', 'broke', 'the', 'window'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dünən axşam sən kimi gördün?',
      words: ['Who', 'did', 'you', 'see', 'last', 'night', 'saw', 'who'],
      answer: ['Who', 'did', 'you', 'see', 'last', 'night'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Niyə dünən mənə zəng etmədin?',
      words: ['Why', 'didn\'t', 'you', 'call', 'me', 'yesterday', 'don\'t', 'called'],
      answer: ['Why', 'didn\'t', 'you', 'call', 'me', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yeni müəllim necədir?',
      words: ['What', 'is', 'the', 'new', 'teacher', 'like', 'does', 'look'],
      answer: ['What', 'is', 'the', 'new', 'teacher', 'like'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sən haradan gəlirsən?',
      words: ['Where', 'are', 'you', 'from', 'from', 'where', 'do', 'come'],
      answer: ['Where', 'are', 'you', 'from'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hava necə idi?',
      words: ['What', 'was', 'the', 'weather', 'like', 'did', 'is', 'were'],
      answer: ['What', 'was', 'the', 'weather', 'like'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nə vaxt qatarın yola düşür?',
      words: ['What', 'time', 'does', 'the', 'train', 'leave', 'did', 'left', 'do'],
      answer: ['What', 'time', 'does', 'the', 'train', 'leave'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hava limanına nə qədər uzaqdır?',
      words: ['How', 'far', 'is', 'it', 'to', 'the', 'airport', 'long', 'does'],
      answer: ['How', 'far', 'is', 'it', 'to', 'the', 'airport'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hansını seçirsən — çay, yoxsa qəhvə?',
      words: ['Which', 'do', 'you', 'prefer', 'tea', 'or', 'coffee', 'What', 'does'],
      answer: ['Which', 'do', 'you', 'prefer', 'tea', 'or', 'coffee'],
    },
  ],
},

{ type: 'section_divider', title: 'there is / there are' },

// ── UNIT 36 — there is / there are ───────────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'there is / there are — Əsas Qayda (Dərs 1)',
  cards: [

    // ── Ekran 1: Forma cədvəli ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'there is / there are — bütün formalar',
      content: 'there is / there are — bir şeyin var olduğunu bildirmək üçün işlədilir:',
      table: [
        ['',           'Tək',                        'Cəm'],
        ['Müsbət',     'There is / There\'s',        'There are'],
        ['İnkar',      'There isn\'t / There\'s not', 'There aren\'t'],
        ['Sual',       'Is there ...?',              'Are there ...?'],
        ['Qısa cavab', 'Yes, there is. / No, there isn\'t.', 'Yes, there are. / No, there aren\'t.'],
      ],
      tip: 'there is → tək isimlərlə. there are → cəm isimlərlə. "There\'s" = qısaltma — yalnız müsbət cümlədə.',
    },

    // ── Ekran 2: Müsbət cümlələr ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'there is / there are — müsbət cümlələr',
      content: 'Bir şeyin mövcudluğunu, yerini bildirmək üçün:',
      examples: [
        { word: 'There\'s a pharmacy on the corner.',      az: 'there\'s = there is — tək'         },
        { word: 'There are some seats at the back.',       az: 'there are — cəm'                   },
        { word: 'There\'s a lot of noise outside.',        az: 'there\'s — sayılmayan isim'        },
        { word: 'There are a lot of people in the park.',  az: 'there are — sayılan cəm'           },
        { word: 'There\'s some milk in the fridge.',       az: 'there\'s — some ilə'               },
        { word: 'There are twenty-six letters in the English alphabet.', az: 'there are — rəqəmlə' },
      ],
      tip: '"There are a lot of noise" ❌ — noise sayılmayandır, tək: "There\'s a lot of noise" ✅',
    },

    // ── Ekran 3: İnkar + sual cümlələri ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'there isn\'t / aren\'t + is there? / are there?',
      content: 'İnkar və sual formalarında any tez-tez işlədilir:',
      examples: [
        { word: 'There isn\'t a lift in this building.',   az: 'there isn\'t — tək, inkar'         },
        { word: 'There aren\'t any seats left.',           az: 'there aren\'t any — cəm, inkar'    },
        { word: 'Is there a bus stop near here?',          az: 'is there? — tək, sual'             },
        { word: 'Are there any good restaurants nearby?',  az: 'are there any? — cəm, sual'        },
        { word: 'There isn\'t any signal in this area.',   az: 'there isn\'t any — sayılmayan'     },
        { word: 'How many floors are there in this block?', az: 'how many + are there?'            },
      ],
      tip: '"There aren\'t no seats" ❌ — ikiqat inkar olmaz: "There aren\'t any seats" ✅',
    },

    // ── Ekran 4: there is vs it is ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'there is vs it is — fərq',
      content: 'there is — yeni məlumat bildirir. it is — artıq məlum olan şeyə istinad edir:',
      examples: [
        { word: 'There\'s a park near our office.',        az: 'there\'s — yeni məlumat'           },
        { word: 'It\'s very big and beautiful.',           az: 'it = the park — artıq məlum'       },
        { word: 'There\'s a match tonight.',               az: 'there\'s — məlumat veririk'        },
        { word: 'It starts at 8 o\'clock.',               az: 'it = the match — artıq məlum'      },
        { word: 'There\'s a lot of sugar in this cake.',   az: 'there\'s — var olma'               },
        { word: 'It\'s too sweet for me.',                 az: 'it = the cake — qiymət verirəm'   },
      ],
      tip: '"There is interesting." ❌ — there is-dən sonra isim gəlir. "It\'s interesting." ✅ — it isə artıq məlum şeyə işarə edir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ a supermarket near here?" — sual:',
          options: ['There is', 'Is there', 'Are there'],
          answer: 'Is there',
        },
        {
          q: '"___ some eggs in the fridge." — müsbət:',
          options: ['There is', 'It is', 'There are'],
          answer: 'There are',
        },
        {
          q: '"___ any buses after midnight?" — sual, cəm:',
          options: ['Is there', 'Are there', 'There are'],
          answer: 'Are there',
        },
        {
          q: '"___ a great film on tonight. ___ starts at nine." — boşluqlara:',
          options: ['There\'s / It', 'It\'s / There', 'There\'s / There'],
          answer: 'There\'s / It',
        },
        {
          q: '"___ any parking here." — inkar:',
          options: ['There isn\'t', 'It isn\'t', 'There aren\'t'],
          answer: 'There isn\'t',
        },
        {
          q: '"How many players ___ in a basketball team?" — sual:',
          options: ['there is', 'is there', 'are there'],
          answer: 'are there',
        },
        {
          q: '"___ eleven players in a football team." — müsbət:',
          options: ['It\'s', 'There\'s', 'There are'],
          answer: 'There are',
        },
        {
          q: '"Is there a hotel nearby?" → "No, ___." — qısa inkar cavab:',
          options: ['No, there isn\'t.', 'No, it isn\'t.', 'No, there aren\'t.'],
          answer: 'No, there isn\'t.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'there is / there are — some/any + Səhvlər (Dərs 2)',
  cards: [

    // ── Ekran 1: some / any ilə işlənmə ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'there is/are + some / any',
      content: 'there is/are çox vaxt some (müsbət) və any (inkar/sual) ilə birlikdə işlədilir:',
      examples: [
        { word: 'There\'s some water in the bottle.',      az: 'müsbət — some'                    },
        { word: 'There are some messages for you.',        az: 'müsbət — some + cəm'              },
        { word: 'There isn\'t any petrol left.',           az: 'inkar — any + sayılmayan'         },
        { word: 'There aren\'t any tickets available.',    az: 'inkar — any + cəm'               },
        { word: 'Is there any news?',                      az: 'sual — any + sayılmayan'          },
        { word: 'Are there any questions?',                az: 'sual — any + cəm'                },
      ],
      tip: 'there is + some/any → isim növünə bax: tək/sayılmayan → there is. cəm → there are.',
    },

    // ── Ekran 2: a lot of / a few / many ilə ─────────────────────────────────
    {
      type: 'lesson',
      title: 'there are + a lot of / not many',
      content: 'Miqdar bildirən ifadələrlə there is/are işlənməsi:',
      examples: [
        { word: 'There\'s a lot of traffic this morning.', az: 'there\'s + a lot of — sayılmayan' },
        { word: 'There are a lot of things to do.',        az: 'there are + a lot of — cəm'      },
        { word: 'There isn\'t much space in here.',        az: 'there isn\'t + much — sayılmayan' },
        { word: 'There aren\'t many cafés in this area.',  az: 'there aren\'t + many — cəm'      },
        { word: 'There are a few seats at the front.',     az: 'there are + a few — cəm'         },
        { word: 'There\'s a little time before we start.', az: 'there\'s + a little — sayılmayan'},
      ],
      tip: '"There are much traffic" ❌ — traffic sayılmayandır: "There\'s a lot of traffic" ✅',
    },

    // ── Ekran 3: Faktlar üçün there are ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'there are — faktlar və rəqəmlər',
      content: 'Ümumi faktları, rəqəmləri bildirmək üçün there are işlədilir:',
      examples: [
        { word: 'There are seven days in a week.',         az: 'ümumi fakt'                       },
        { word: 'There are fifty states in the USA.',      az: 'coğrafi fakt'                     },
        { word: 'There are nine planets in the solar system.', az: 'elmi fakt'                   },
        { word: 'There are fifteen players in a rugby team.', az: 'idman fakı'                   },
        { word: 'There are thirty days in September.',     az: 'təqvim fakı'                      },
        { word: 'There are twenty-six letters in the English alphabet.', az: 'dil fakı'           },
      ],
      tip: 'Rəqəmlə başlayan faktlarda həmişə there are işlədilir — rəqəm 1-dən böyükdürsə.',
    },

    // ── Ekran 4: Tez-tez edilən səhvlər ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'there is / there are + it is ilə bağlı ən çox edilən səhvlər:',
      table: [
        ['Yanlış',                                    'Düzgün'],
        ['There are a hospital in the town.',         'There\'s a hospital in the town.'],
        ['There is many people here.',                'There are many people here.'],
        ['It\'s a problem with the lift.',            'There\'s a problem with the lift.'],
        ['There are no any chairs left.',             'There aren\'t any chairs left.'],
        ['Is there any chairs?',                      'Are there any chairs?'],
        ['There aren\'t no buses after 11.',          'There aren\'t any buses after 11.'],
      ],
      tip: '"It\'s a park near here." ❌ — yeni məlumat verəndə there işlət: "There\'s a park near here." ✅',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'There are a hospital nearby.',
            'There\'s a hospital nearby.',
            'It\'s a hospital nearby.',
          ],
          answer: 'There\'s a hospital nearby.',
        },
        {
          q: '"___ many people at the concert?" — sual:',
          options: ['Is there', 'Are there', 'There are'],
          answer: 'Are there',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'There are a lot of noise outside.',
            'There\'s a lot of noise outside.',
            'It\'s a lot of noise outside.',
          ],
          answer: 'There\'s a lot of noise outside.',
        },
        {
          q: '"___ fifty states in the USA." — fakt:',
          options: ['It\'s', 'There\'s', 'There are'],
          answer: 'There are',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'There aren\'t no seats left.',
            'There aren\'t any seats left.',
            'There are no any seats left.',
          ],
          answer: 'There aren\'t any seats left.',
        },
        {
          q: '"There\'s a new café in our street. ___ very good." — boşluğa:',
          options: ['There\'s', 'It\'s', 'There is'],
          answer: 'It\'s',
        },
        {
          q: '"___ any signal here?" — sual, sayılmayan:',
          options: ['Are there', 'Is there', 'There is'],
          answer: 'Is there',
        },
        {
          q: '"Are there any good films tonight?" → "Yes, ___." — qısa cavab:',
          options: ['Yes, there is.', 'Yes, it is.', 'Yes, there are.'],
          answer: 'Yes, there are.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"var" — tək isim üçün:',                                                tr: 'there is',                     wrong: 'there are'                    },
  { en: '"var" — cəm isim üçün:',                                                tr: 'there are',                    wrong: 'there is'                     },
  { en: '"yoxdur" — tək isim üçün:',                                             tr: 'there isn\'t',                 wrong: 'there aren\'t'                },
  { en: '"yoxdur" — cəm isim üçün:',                                             tr: 'there aren\'t',                wrong: 'there isn\'t'                 },
  { en: '"there is" — qısaltması:',                                              tr: 'there\'s',                     wrong: 'there\'re'                    },
  { en: '"___ a park near here?" — tək sual:',                                   tr: 'Is there',                     wrong: 'Are there'                    },
  { en: '"___ any cinemas nearby?" — cəm sual:',                                 tr: 'Are there',                    wrong: 'Is there'                     },
  { en: 'Yeni məlumat bildirəndə — there is / it is?',                           tr: 'there is',                     wrong: 'it is'                        },
  { en: 'Artıq məlum şeyə istinad edəndə — there is / it is?',                  tr: 'it is',                        wrong: 'there is'                     },
  { en: '"There are much traffic." — düzgün forması:',                           tr: 'There\'s a lot of traffic.',   wrong: 'There are a lot of traffics.' },
  { en: '"Is there any chairs?" — düzgün forması:',                              tr: 'Are there any chairs?',        wrong: 'Is there some chairs?'        },
  { en: '"There are a hospital." — düzgün forması:',                             tr: 'There\'s a hospital.',         wrong: 'There is hospitals.'          },
  { en: '"There aren\'t no buses." — düzgün forması:',                           tr: 'There aren\'t any buses.',     wrong: 'There are no any buses.'      },
  { en: '"It\'s a problem with the signal." — düzgün forması:',                  tr: 'There\'s a problem with the signal.', wrong: 'It is problem.'       },
  { en: '"Is there a bank nearby?" → müsbət qısa cavab:',                        tr: 'Yes, there is.',               wrong: 'Yes, it is.'                  },
  { en: '"Are there any students?" → inkar qısa cavab:',                         tr: 'No, there aren\'t.',           wrong: 'No, there isn\'t.'            },
  { en: '"Həftədə neçə gün var?" — there are + rəqəm:',                         tr: 'There are seven days.',        wrong: 'It\'s seven days.'            },
  { en: '"There is some" — hansı cümlə növündə?',                               tr: 'müsbət',                       wrong: 'inkar'                        },
  { en: '"There isn\'t any" — hansı cümlə növündə?',                            tr: 'inkar',                        wrong: 'müsbət'                       },
  { en: '"Are there any?" — hansı cümlə növündə?',                              tr: 'sual',                         wrong: 'inkar'                        },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu küçədə bir neçə restoran var.',
      words: ['There', 'are', 'some', 'restaurants', 'on', 'this', 'street', 'is', 'it'],
      answer: ['There', 'are', 'some', 'restaurants', 'on', 'this', 'street'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu otaqda heç bir pəncərə yoxdur.',
      words: ['There', 'isn\'t', 'a', 'window', 'in', 'this', 'room', 'aren\'t', 'any'],
      answer: ['There', 'isn\'t', 'a', 'window', 'in', 'this', 'room'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu yaxınlıqda xəstəxana varmı?',
      words: ['Is', 'there', 'a', 'hospital', 'near', 'here', 'Are', 'there', 'any'],
      answer: ['Is', 'there', 'a', 'hospital', 'near', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu yolda çox qəza olur.',
      words: ['There', 'are', 'a', 'lot', 'of', 'accidents', 'on', 'this', 'road', 'is', 'it'],
      answer: ['There', 'are', 'a', 'lot', 'of', 'accidents', 'on', 'this', 'road'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Həftədə yeddi gün var.',
      words: ['There', 'are', 'seven', 'days', 'in', 'a', 'week', 'is', 'it\'s'],
      answer: ['There', 'are', 'seven', 'days', 'in', 'a', 'week'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Sinifdə neçə nəfər var?',
      words: ['How', 'many', 'students', 'are', 'there', 'in', 'the', 'class', 'is', 'there'],
      answer: ['How', 'many', 'students', 'are', 'there', 'in', 'the', 'class'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam televizorda yaxşı film var.',
      words: ['There\'s', 'a', 'good', 'film', 'on', 'TV', 'tonight', 'It\'s', 'are'],
      answer: ['There\'s', 'a', 'good', 'film', 'on', 'TV', 'tonight'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Soyuducuda süd yoxdur.',
      words: ['There', 'isn\'t', 'any', 'milk', 'in', 'the', 'fridge', 'aren\'t', 'some'],
      answer: ['There', 'isn\'t', 'any', 'milk', 'in', 'the', 'fridge'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Burada pulsuz oturacaq varmı?',
      words: ['Are', 'there', 'any', 'free', 'seats', 'here', 'Is', 'there', 'a'],
      answer: ['Are', 'there', 'any', 'free', 'seats', 'here'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Küçədə yeni kafe var. Çox gözəldir.',
      words: ['There\'s', 'a', 'new', 'café', 'on', 'the', 'street', 'It\'s', 'very', 'nice', 'There\'s', 'There are'],
      answer: ['There\'s', 'a', 'new', 'café', 'on', 'the', 'street', 'It\'s', 'very', 'nice'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Müqayisə dərəcəsi — comparative' },

// ── UNIT 31 — Müqayisə Dərəcəsi: Comparative ────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Comparative — Yazılış Qaydaları (Dərs 1)',
  cards: [

    // ── Ekran 1: Ümumi qayda + -er formalar ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Comparative — yazılış qaydaları',
      content: 'İki şeyi müqayisə etmək üçün comparative işlədilir. Qısa sözlərə -er, uzun sözlərə more əlavə edilir:',
      table: [
        ['Söz növü',                    'Qayda',            'Nümunə'],
        ['1 hecalı (ümumi hal)',         '+ -er',            'old → older, slow → slower'],
        ['1 hecalı, sonda samit+sait+samit', 'son samit ikiqatlaşır + -er', 'big → bigger, hot → hotter'],
        ['-e ilə bitən',                '+ -r',             'nice → nicer, late → later'],
        ['-y ilə bitən (samitdən sonra)', '-y → -ier',       'easy → easier, heavy → heavier'],
        ['2+ hecalı',                   'more + söz',       'careful → more careful'],
        ['Qeyri-nizami formalar',        'əzbərlə',          'good → better, bad → worse, far → further'],
      ],
      tip: '-y qaydası: samitdən sonra -ier (happy→happier), saitdən sonra sadəcə -er istisna hallarda görünür.',
    },

    // ── Ekran 2: more ... ilə uzun sözlər ────────────────────────────────────
    {
      type: 'lesson',
      title: 'more ... ilə comparative',
      content: '2 və daha çox hecalı sözlər more ilə işlədilir. -er işlənmir:',
      examples: [
        { word: 'careful → more careful',           az: '2 hecalı — more işlədilir'                    },
        { word: 'expensive → more expensive',       az: '3 hecalı — more işlədilir'                    },
        { word: 'interesting → more interesting',   az: '4 hecalı — more işlədilir'                    },
        { word: 'polite → more polite',             az: '2 hecalı — more işlədilir'                    },
        { word: 'crowded → more crowded',           az: '2 hecalı — more işlədilir'                    },
        { word: 'comfortable → more comfortable',   az: '4 hecalı — more işlədilir'                    },
        { word: 'beautiful → more beautiful',       az: '4 hecalı — more işlədilir'                    },
        { word: 'important → more important',       az: '3 hecalı — more işlədilir'                    },
      ],
      tip: '"more old" ❌ → "older" ✅. "more big" ❌ → "bigger" ✅. Qısa sözlərdə "more" işlənmir.',
    },

    // ── Ekran 3: Qeyri-nizami formalar ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qeyri-nizami comparative formalar — əzbərlə',
      content: 'Bu sözlərin comparative forması qaydaya uyğun deyil — əzbərlənməlidir:',
      table: [
        ['Əsas forma',    'Comparative'],
        ['good',          'better'],
        ['well',          'better'],
        ['bad',           'worse'],
        ['far',           'further / farther'],
      ],
      tip: 'well → better: "I feel better today" (not "more well"). bad → worse: "It\'s getting worse" (not "more bad").',
    },

    // ── Ekran 4: Nümunə cümlələr ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Comparative — nümunə cümlələr',
      content: 'Comparative cümlələrə baxaq:',
      examples: [
        { word: 'Athens is older than Rome.',                   az: 'old → older (qısa söz)'                    },
        { word: 'Is it cheaper to go by bus or by taxi?',       az: 'cheap → cheaper (qısa söz)'                },
        { word: 'Sarah wants a bigger flat.',                   az: 'big → bigger (ikiqatlı samit)'             },
        { word: 'This jacket is nicer than that one.',          az: 'nice → nicer (-e ilə bitir)'               },
        { word: 'It\'s easier to call than to write.',          az: 'easy → easier (-y → -ier)'                 },
        { word: 'You must be more careful next time.',          az: 'careful → more careful (uzun söz)'         },
        { word: 'I want a more interesting job.',               az: 'interesting → more interesting (uzun söz)' },
        { word: 'The weather is better today than yesterday.',  az: 'good → better (qeyri-nizami)'              },
        { word: 'I feel worse than this morning.',              az: 'bad → worse (qeyri-nizami)'                },
        { word: 'It\'s further than I thought.',                az: 'far → further (qeyri-nizami)'              },
      ],
      tip: 'Comparative formadan sonra adətən than gəlir: "older than", "more expensive than", "better than".',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"big" sözünün comparative forması:',
          options: ['biger', 'more big', 'bigger'],
          answer: 'bigger',
        },
        {
          q: '"happy" sözünün comparative forması:',
          options: ['happyer', 'happier', 'more happy'],
          answer: 'happier',
        },
        {
          q: '"good" sözünün comparative forması:',
          options: ['gooder', 'more good', 'better'],
          answer: 'better',
        },
        {
          q: '"expensive" sözünün comparative forması:',
          options: ['expensiver', 'more expensive', 'expensiveer'],
          answer: 'more expensive',
        },
        {
          q: '"bad" sözünün comparative forması:',
          options: ['badder', 'more bad', 'worse'],
          answer: 'worse',
        },
        {
          q: '"easy" sözünün comparative forması:',
          options: ['easyer', 'easier', 'more easy'],
          answer: 'easier',
        },
        {
          q: '"far" sözünün comparative forması:',
          options: ['farer', 'more far', 'further'],
          answer: 'further',
        },
        {
          q: '"interesting" sözünün comparative forması:',
          options: ['interestinger', 'more interesting', 'interestingier'],
          answer: 'more interesting',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Comparative — than / a bit / much (Dərs 2)',
  cards: [

    // ── Ekran 1: than ilə müqayisə ────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"than" ilə müqayisə',
      content: 'Comparative formadan sonra than işlədilərək iki şey müqayisə edilir:',
      examples: [
        { word: 'My bag is heavier than yours.',             az: 'heavy → heavier + than'                  },
        { word: 'This route is shorter than the other one.', az: 'short → shorter + than'                  },
        { word: 'Flying is faster than going by train.',     az: 'fast → faster + than'                    },
        { word: 'The new model is more powerful than before.', az: 'powerful → more powerful + than'       },
        { word: 'It\'s better to arrive early than to be late.', az: 'good → better + than'               },
        { word: 'The exam was worse than I expected.',       az: 'bad → worse + than'                      },
        { word: 'The restaurant is more crowded than usual.', az: 'crowded → more crowded + than usual'    },
      ],
      tip: '"than" müqayisə əlaqəcisidir — comparative formadan sonra gəlir. "then" ilə qarışdırma!',
    },

    // ── Ekran 2: Əvəzliklərlə than ───────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Şəxs əvəzlikləri ilə "than"',
      content: 'than-dan sonra obyekt əvəzliyi (him/her/me/them) və ya tam cümlə işlədilə bilər:',
      examples: [
        { word: 'She runs faster than him.',            az: 'him = obyekt əvəzliyi (danışıq dili)'         },
        { word: 'She runs faster than he does.',        az: 'he does = tam cümlə (rəsmi dil)'              },
        { word: 'You are a better cook than me.',       az: 'me = obyekt əvəzliyi (danışıq dili)'          },
        { word: 'You are a better cook than I am.',     az: 'I am = tam cümlə (rəsmi dil)'                 },
        { word: 'We got there earlier than them.',      az: 'them = obyekt əvəzliyi (danışıq dili)'        },
        { word: 'We got there earlier than they did.',  az: 'they did = tam cümlə (rəsmi dil)'             },
      ],
      tip: 'Hər iki forma düzgündür. "faster than him" danışıqda, "faster than he does" rəsmi yazıda üstünlük verilir.',
    },

    // ── Ekran 3: a bit / much + comparative ──────────────────────────────────
    {
      type: 'lesson',
      title: '"a bit" / "much" + comparative',
      content: 'Fərqin az və ya çox olduğunu bildirmək üçün comparative-dən əvvəl a bit və ya much işlədilir:',
      table: [
        ['Dərəcə',   'Söz',     'Nümunə'],
        ['az fərq',  'a bit',   'Today is a bit warmer than yesterday.'],
        ['çox fərq', 'much',    'Canada is much bigger than Portugal.'],
        ['az fərq',  'a bit',   'This bag is a bit heavier than that one.'],
        ['çox fərq', 'much',    'The new phone is much more expensive than the old one.'],
      ],
      tip: '"very bigger" ❌ — "much bigger" ✅. Comparative ilə "very" işlənmir, "much" işlənir.',
    },

    // ── Ekran 4: more / less than ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"more than" / "less than" — say və miqdarla',
      content: 'Rəqəm və miqdar ifadələrindən əvvəl more than və less than işlədilir:',
      examples: [
        { word: 'The concert lasted more than three hours.',    az: 'more than = artıq, üstəgəl'             },
        { word: 'It costs less than I thought.',                az: 'less than = az, aşağı'                  },
        { word: 'She\'s been waiting for more than an hour.',   az: 'more than + müddət'                     },
        { word: 'The flight is less than two hours.',           az: 'less than + müddət'                     },
        { word: 'They have more experience than we do.',        az: 'more than müqayisə ilə'                 },
        { word: 'You go out more than me.',                     az: 'more than — tezlik müqayisəsi'           },
      ],
      tip: '"less than" — az miqdar üçün. "fewer than" — sayılan isimlər üçün: "fewer than ten people".',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Rome is more old than this city.',
            'Rome is older than this city.',
            'Rome is oldest than this city.',
          ],
          answer: 'Rome is older than this city.',
        },
        {
          q: '"The hotel was ___ expensive ___ I expected." — boşluqlara nə gəlir?',
          options: ['more ... than', 'much ... that', 'more ... that'],
          answer: 'more ... than',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She is very taller than her sister.',
            'She is much taller than her sister.',
            'She is more tall than her sister.',
          ],
          answer: 'She is much taller than her sister.',
        },
        {
          q: '"Today it\'s ___ warmer than yesterday." — az fərq üçün:',
          options: ['much', 'very', 'a bit'],
          answer: 'a bit',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I can swim faster than him.',
            'I can swim faster than he.',
            'I can swim more fast than him.',
          ],
          answer: 'I can swim faster than him.',
        },
        {
          q: '"The film lasted ___ than two hours." — az miqdar üçün:',
          options: ['more', 'less', 'fewer'],
          answer: 'less',
        },
        {
          q: '"feel" ilə "bad" comparative: "Today I feel ___."',
          options: ['badder', 'more bad', 'worse'],
          answer: 'worse',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'This job is more interesting that my old one.',
            'This job is more interesting than my old one.',
            'This job is interestinger than my old one.',
          ],
          answer: 'This job is more interesting than my old one.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"old" → comparative:',                                            tr: 'older',                          wrong: 'more old'                     },
  { en: '"good" → comparative:',                                           tr: 'better',                         wrong: 'gooder'                       },
  { en: '"bad" → comparative:',                                            tr: 'worse',                          wrong: 'badder'                       },
  { en: '"far" → comparative:',                                            tr: 'further',                        wrong: 'more far'                     },
  { en: '"big" → comparative:',                                            tr: 'bigger',                         wrong: 'biger'                        },
  { en: '"happy" → comparative:',                                          tr: 'happier',                        wrong: 'happyer'                      },
  { en: '"expensive" → comparative:',                                      tr: 'more expensive',                 wrong: 'expensiver'                   },
  { en: '"easy" → comparative:',                                           tr: 'easier',                         wrong: 'more easy'                    },
  { en: '"careful" → comparative:',                                        tr: 'more careful',                   wrong: 'carefullier'                  },
  { en: '"hot" → comparative:',                                            tr: 'hotter',                         wrong: 'hoter'                        },
  { en: '"interesting" → comparative:',                                    tr: 'more interesting',               wrong: 'interestinger'                },
  { en: '"heavy" → comparative:',                                          tr: 'heavier',                        wrong: 'heavyer'                      },
  { en: '"comfortable" → comparative:',                                    tr: 'more comfortable',               wrong: 'comfortabler'                 },
  { en: '"Fərq çoxdur" mənasını gücləndirir:',                            tr: 'much',                           wrong: 'very'                         },
  { en: '"Fərq azdır" mənasını gücləndirir:',                             tr: 'a bit',                          wrong: 'a lot'                        },
  { en: '"Athens is ___ than Rome." — old ilə:',                          tr: 'older',                          wrong: 'more old'                     },
  { en: '"The bag is ___ than I thought." — heavy ilə:',                  tr: 'heavier',                        wrong: 'more heavy'                   },
  { en: '"Canada is much ___ than Portugal." — big ilə:',                 tr: 'bigger',                         wrong: 'more big'                     },
  { en: '"She arrived ___ than us." — early ilə:',                        tr: 'earlier',                        wrong: 'more early'                   },
  { en: '"The new phone is ___ the old one." — expensive, müqayisə:',     tr: 'more expensive than',            wrong: 'more expensive that'          },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Afina Romadan daha qədimdir.',
      words: ['Athens', 'is', 'older', 'than', 'Rome', 'more old', 'then'],
      answer: ['Athens', 'is', 'older', 'than', 'Rome'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kanada Fransadan çox daha böyükdür.',
      words: ['Canada', 'is', 'much', 'bigger', 'than', 'France', 'very', 'more big'],
      answer: ['Canada', 'is', 'much', 'bigger', 'than', 'France'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu iş mənim köhnə işimdən daha maraqlıdır.',
      words: ['This', 'job', 'is', 'more', 'interesting', 'than', 'my', 'old', 'one', 'interestinger', 'that'],
      answer: ['This', 'job', 'is', 'more', 'interesting', 'than', 'my', 'old', 'one'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu gün özümü dünəndən çox daha yaxşı hiss edirəm.',
      words: ['I', 'feel', 'much', 'better', 'today', 'than', 'yesterday', 'very', 'gooder'],
      answer: ['I', 'feel', 'much', 'better', 'today', 'than', 'yesterday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Daha diqqətli olmağa çalışmalısan.',
      words: ['You', 'need', 'to', 'be', 'more', 'careful', 'carefullier', 'than'],
      answer: ['You', 'need', 'to', 'be', 'more', 'careful'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu uçuş düşündüyümdən bir az uzundur.',
      words: ['This', 'flight', 'is', 'a', 'bit', 'longer', 'than', 'I', 'thought', 'much', 'more long'],
      answer: ['This', 'flight', 'is', 'a', 'bit', 'longer', 'than', 'I', 'thought'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O məndən daha sürətli üzür.',
      words: ['She', 'swims', 'faster', 'than', 'me', 'more fast', 'than', 'I'],
      answer: ['She', 'swims', 'faster', 'than', 'me'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Konsert iki saatdan çox sürdü.',
      words: ['The', 'concert', 'lasted', 'more', 'than', 'two', 'hours', 'less', 'then'],
      answer: ['The', 'concert', 'lasted', 'more', 'than', 'two', 'hours'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Avtobus getmək taksi ilə getməkdən ucuzdur.',
      words: ['Going', 'by', 'bus', 'is', 'cheaper', 'than', 'taking', 'a', 'taxi', 'more cheap', 'then'],
      answer: ['Going', 'by', 'bus', 'is', 'cheaper', 'than', 'taking', 'a', 'taxi'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İşlər gündən-günə daha da pisləşir.',
      words: ['Things', 'are', 'getting', 'worse', 'every', 'day', 'more bad', 'badder'],
      answer: ['Things', 'are', 'getting', 'worse', 'every', 'day'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Müqayisə dərəcəsi — superlative' },

// ── UNIT 32 — Müqayisə Dərəcəsi: Superlative ────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Superlative — Yazılış Qaydaları (Dərs 1)',
  cards: [

    // ── Ekran 1: Ümumi qayda + -est formalar ─────────────────────────────────
    {
      type: 'lesson',
      title: 'Superlative — yazılış qaydaları',
      content: 'Bir şeyin hamısından üstün/aşağı olduğunu bildirmək üçün superlative işlədilir. Həmişə "the" ilə işlədilir:',
      table: [
        ['Söz növü',                           'Qayda',                    'Nümunə'],
        ['1 hecalı (ümumi hal)',                'the + -est',               'old → the oldest, cheap → the cheapest'],
        ['1 hecalı, sonda samit+sait+samit',    'son samit ikiqatlaşır + -est', 'big → the biggest, hot → the hottest'],
        ['-e ilə bitən',                        'the + -st',                'nice → the nicest, late → the latest'],
        ['-y ilə bitən (samitdən sonra)',        '-y → -iest',               'easy → the easiest, heavy → the heaviest'],
        ['2+ hecalı',                           'the most + söz',           'careful → the most careful'],
        ['Qeyri-nizami formalar',               'əzbərlə',                  'good → the best, bad → the worst'],
      ],
      tip: 'Superlative həmişə "the" ilə işlənir: "the oldest", "the most expensive". "the" unudulmaması çox vacibdir!',
    },

    // ── Ekran 2: the most ... ilə uzun sözlər ────────────────────────────────
    {
      type: 'lesson',
      title: '"the most ..." ilə superlative',
      content: '2 və daha çox hecalı sözlər "the most" ilə işlədilir:',
      examples: [
        { word: 'careful → the most careful',           az: '2 hecalı — the most işlədilir'                },
        { word: 'expensive → the most expensive',       az: '3 hecalı — the most işlədilir'                },
        { word: 'interesting → the most interesting',   az: '4 hecalı — the most işlədilir'                },
        { word: 'popular → the most popular',           az: '3 hecalı — the most işlədilir'                },
        { word: 'important → the most important',       az: '4 hecalı — the most işlədilir'                },
        { word: 'boring → the most boring',             az: '2 hecalı — the most işlədilir'                },
        { word: 'unusual → the most unusual',           az: '3 hecalı — the most işlədilir'                },
        { word: 'comfortable → the most comfortable',   az: '4 hecalı — the most işlədilir'                },
      ],
      tip: '"the most old" ❌ → "the oldest" ✅. "the most big" ❌ → "the biggest" ✅. Qısa sözlərdə "the most" işlənmir.',
    },

    // ── Ekran 3: Qeyri-nizami formalar ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'Qeyri-nizami superlative formalar — əzbərlə',
      content: 'Bu sözlərin superlative forması qaydaya uyğun deyil:',
      table: [
        ['Əsas forma',  'Comparative',  'Superlative'],
        ['good',        'better',       'the best'],
        ['well',        'better',       'the best'],
        ['bad',         'worse',        'the worst'],
      ],
      tip: '"the most good" ❌ → "the best" ✅. "the most bad" ❌ → "the worst" ✅. Comparative ilə superlative birlikdə əzbərlə.',
    },

    // ── Ekran 4: Comparative vs Superlative fərqi ────────────────────────────
    {
      type: 'lesson',
      title: 'Comparative vs Superlative — fərq',
      content: 'Comparative iki şeyi müqayisə edir, superlative isə hamısından üstününü göstərir:',
      examples: [
        { word: 'Box A is bigger than Box B.',                   az: 'comparative — iki şey müqayisəsi'              },
        { word: 'Box A is the biggest of all.',                  az: 'superlative — hamısından böyük'                },
        { word: 'The Europa is more expensive than the Grand.',  az: 'comparative — iki otel müqayisəsi'             },
        { word: 'The Europa is the most expensive in town.',     az: 'superlative — şəhərdəki ən bahalı'             },
        { word: 'Today is colder than yesterday.',               az: 'comparative — iki gün müqayisəsi'              },
        { word: 'Today is the coldest day of the year.',         az: 'superlative — ilin ən soyuq günü'              },
        { word: 'She is a better player than me.',               az: 'comparative — iki oyunçu müqayisəsi'           },
        { word: 'She is the best player in the team.',           az: 'superlative — komandanın ən yaxşısı'           },
      ],
      tip: 'Comparative: "than" ilə işlənir. Superlative: "the" ilə başlayır, adətən "in/of" ilə davam edir.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"big" sözünün superlative forması:',
          options: ['the bigest', 'the most big', 'the biggest'],
          answer: 'the biggest',
        },
        {
          q: '"happy" sözünün superlative forması:',
          options: ['the happyest', 'the most happy', 'the happiest'],
          answer: 'the happiest',
        },
        {
          q: '"good" sözünün superlative forması:',
          options: ['the goodest', 'the most good', 'the best'],
          answer: 'the best',
        },
        {
          q: '"expensive" sözünün superlative forması:',
          options: ['the expensivest', 'the most expensive', 'the expensiveest'],
          answer: 'the most expensive',
        },
        {
          q: '"bad" sözünün superlative forması:',
          options: ['the baddest', 'the most bad', 'the worst'],
          answer: 'the worst',
        },
        {
          q: '"easy" sözünün superlative forması:',
          options: ['the easyest', 'the most easy', 'the easiest'],
          answer: 'the easiest',
        },
        {
          q: '"interesting" sözünün superlative forması:',
          options: ['the interestingest', 'the most interesting', 'the interestingiest'],
          answer: 'the most interesting',
        },
        {
          q: 'Superlative həmişə ___ ilə işlədilir:',
          options: ['a', 'an', 'the'],
          answer: 'the',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Superlative — in/of + ever (Dərs 2)',
  cards: [

    // ── Ekran 1: in / of ilə superlative ─────────────────────────────────────
    {
      type: 'lesson',
      title: '"in" / "of" ilə superlative',
      content: 'Superlative-dən sonra yer üçün "in", qrup/dövr üçün "of" işlədilir:',
      examples: [
        { word: 'It\'s the tallest building in the city.',          az: 'in + yer (şəhər)'                           },
        { word: 'The Nile is the longest river in the world.',      az: 'in + yer (dünya)'                           },
        { word: 'She is the youngest student in the class.',        az: 'in + yer (sinif)'                           },
        { word: 'That was the best day of my life.',                az: 'of + dövr (həyat)'                          },
        { word: 'It was the coldest night of the year.',            az: 'of + dövr (il)'                             },
        { word: 'He is the fastest runner of the group.',           az: 'of + qrup'                                  },
      ],
      tip: '"in the class / in the world / in the country" — yer üçün "in". "of my life / of the year / of the group" — dövr/qrup üçün "of".',
    },

    // ── Ekran 2: ever ilə superlative ────────────────────────────────────────
    {
      type: 'lesson',
      title: '"ever" ilə superlative',
      content: 'Superlative + I\'ve / you\'ve / he\'s ... ever ... — indiyə qədər ən ... olan şeyi bildirir:',
      examples: [
        { word: 'It\'s the best film I\'ve ever seen.',             az: 'ever = indiyə qədər'                        },
        { word: 'That was the worst meal I\'ve ever had.',          az: 'worst + ever — ən pis yemək'                },
        { word: 'She\'s the most interesting person I\'ve ever met.', az: 'most interesting + ever — ən maraqlı adam' },
        { word: 'Is this the biggest mistake you\'ve ever made?',   az: 'biggest + ever — ən böyük səhv'             },
        { word: 'That\'s the strangest thing I\'ve ever heard.',    az: 'strangest + ever — ən qəribə şey'           },
        { word: 'What\'s the most unusual place you\'ve ever been?', az: 'most unusual + ever — ən qeyri-adi yer'    },
      ],
      tip: '"ever" Present Perfect ilə işlənir: "I\'ve ever seen", "you\'ve ever done". Past Simple ilə işlənmir: "I ever saw" ❌.',
    },

    // ── Ekran 3: İsimsiz superlative işlənməsi ────────────────────────────────
    {
      type: 'lesson',
      title: 'Superlative — isim olmadan da işlənə bilər',
      content: 'Kontekstdən aydın olduqda superlative-dən sonra isim buraxıla bilər:',
      examples: [
        { word: 'Tom is a good player but not the best.',           az: 'the best = the best player — isim buraxılır' },
        { word: 'All three hotels are good but this is the cheapest.', az: 'the cheapest = the cheapest hotel'       },
        { word: 'I\'ve seen many films but that was the worst.',    az: 'the worst = the worst film'                 },
        { word: 'There were five runners and she was the fastest.', az: 'the fastest = the fastest runner'           },
      ],
      tip: 'İsim buraxılsa belə "the" mütləq qalır: "she was fastest" ❌ → "she was the fastest" ✅.',
    },

    // ── Ekran 4: Nümunə cümlələr — coğrafi faktlar ───────────────────────────
    {
      type: 'lesson',
      title: 'Superlative — coğrafi faktlar ilə nümunələr',
      content: 'Superlative tez-tez coğrafi faktlarda işlədilir:',
      examples: [
        { word: 'The Nile is the longest river in the world.',        az: 'long → the longest'                       },
        { word: 'Everest is the highest mountain in the world.',      az: 'high → the highest'                       },
        { word: 'Russia is the largest country in the world.',        az: 'large → the largest'                      },
        { word: 'Brazil is the largest country in South America.',    az: 'large → the largest + in'                 },
        { word: 'Jupiter is the biggest planet in the solar system.', az: 'big → the biggest (ikiqatlı samit)'       },
        { word: 'Alaska is the largest state in the USA.',            az: 'large → the largest'                      },
        { word: 'What is the deepest lake in the world?',             az: 'deep → the deepest'                       },
      ],
      tip: 'Coğrafi faktlarda "in + yer adı" çox işlənir: "in the world", "in Europe", "in South America".',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'It\'s oldest building in the town.',
            'It\'s the oldest building in the town.',
            'It\'s the most old building in the town.',
          ],
          answer: 'It\'s the oldest building in the town.',
        },
        {
          q: '"___ day of my life" — "happy" ilə superlative:',
          options: ['The most happy', 'The happyest', 'The happiest'],
          answer: 'The happiest',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'It\'s the best film I\'ve ever seen.',
            'It\'s the best film I ever saw.',
            'It\'s the most good film I\'ve ever seen.',
          ],
          answer: 'It\'s the best film I\'ve ever seen.',
        },
        {
          q: '"in" yoxsa "of"? → "the tallest student ___ the class"',
          options: ['of', 'in', 'from'],
          answer: 'in',
        },
        {
          q: '"in" yoxsa "of"? → "the best day ___ my life"',
          options: ['in', 'from', 'of'],
          answer: 'of',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'She was fastest in the race.',
            'She was the fastest in the race.',
            'She was most fast in the race.',
          ],
          answer: 'She was the fastest in the race.',
        },
        {
          q: '"What is ___ river in the world?" — long ilə:',
          options: ['the longer', 'the most long', 'the longest'],
          answer: 'the longest',
        },
        {
          q: '"bad" → superlative:',
          options: ['the baddest', 'the most bad', 'the worst'],
          answer: 'the worst',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"old" → superlative:',                                            tr: 'the oldest',                     wrong: 'the most old'                 },
  { en: '"good" → superlative:',                                           tr: 'the best',                       wrong: 'the most good'                },
  { en: '"bad" → superlative:',                                            tr: 'the worst',                      wrong: 'the most bad'                 },
  { en: '"big" → superlative:',                                            tr: 'the biggest',                    wrong: 'the bigest'                   },
  { en: '"happy" → superlative:',                                          tr: 'the happiest',                   wrong: 'the happyest'                 },
  { en: '"expensive" → superlative:',                                      tr: 'the most expensive',             wrong: 'the expensivest'              },
  { en: '"easy" → superlative:',                                           tr: 'the easiest',                    wrong: 'the most easy'                },
  { en: '"interesting" → superlative:',                                    tr: 'the most interesting',           wrong: 'the interestingest'           },
  { en: '"hot" → superlative:',                                            tr: 'the hottest',                    wrong: 'the hotest'                   },
  { en: '"pretty" → superlative:',                                         tr: 'the prettiest',                  wrong: 'the prettyest'                },
  { en: '"comfortable" → superlative:',                                    tr: 'the most comfortable',           wrong: 'the comfortablest'            },
  { en: '"long" → superlative:',                                           tr: 'the longest',                    wrong: 'the most long'                },
  { en: 'Superlative həmişə ___ ilə işlədilir:',                          tr: 'the',                            wrong: 'a'                            },
  { en: '"yer" ifadəsindən əvvəl superlative ilə işlənən sözönü:',        tr: 'in',                             wrong: 'of'                           },
  { en: '"dövr/qrup" ifadəsindən əvvəl superlative ilə işlənən sözönü:',  tr: 'of',                             wrong: 'in'                           },
  { en: '"ever" ilə superlative hansı zamanlada işlənir?',                 tr: 'Present Perfect',                wrong: 'Past Simple'                  },
  { en: '"It\'s the best film I\'ve ever ___."',                           tr: 'seen',                           wrong: 'saw'                          },
  { en: '"high" → superlative:',                                           tr: 'the highest',                    wrong: 'the most high'                },
  { en: '"large" → superlative:',                                          tr: 'the largest',                    wrong: 'the most large'               },
  { en: '"boring" → superlative:',                                         tr: 'the most boring',                wrong: 'the boringest'                },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu şəhərin ən qədim binasıdır.',
      words: ['It\'s', 'the', 'oldest', 'building', 'in', 'the', 'city', 'most old', 'of'],
      answer: ['It\'s', 'the', 'oldest', 'building', 'in', 'the', 'city'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nil dünyanın ən uzun çayıdır.',
      words: ['The', 'Nile', 'is', 'the', 'longest', 'river', 'in', 'the', 'world', 'most long', 'of'],
      answer: ['The', 'Nile', 'is', 'the', 'longest', 'river', 'in', 'the', 'world'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu indiyə qədər gördüyüm ən yaxşı filmdır.',
      words: ['It\'s', 'the', 'best', 'film', 'I\'ve', 'ever', 'seen', 'most good', 'I', 'ever', 'saw'],
      answer: ['It\'s', 'the', 'best', 'film', 'I\'ve', 'ever', 'seen'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu həyatımın ən xoşbəxt günü idi.',
      words: ['It', 'was', 'the', 'happiest', 'day', 'of', 'my', 'life', 'most happy', 'in'],
      answer: ['It', 'was', 'the', 'happiest', 'day', 'of', 'my', 'life'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Pul vacibdir amma ən vacib şey deyil.',
      words: ['Money', 'is', 'important', 'but', 'it', 'isn\'t', 'the', 'most', 'important', 'thing', 'most importantest', 'a'],
      answer: ['Money', 'is', 'important', 'but', 'it', 'isn\'t', 'the', 'most', 'important', 'thing'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, komandanın ən yaxşı oyunçusudur.',
      words: ['She', 'is', 'the', 'best', 'player', 'in', 'the', 'team', 'most good', 'of'],
      answer: ['She', 'is', 'the', 'best', 'player', 'in', 'the', 'team'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu ildəki ən soyuq gecə idi.',
      words: ['It', 'was', 'the', 'coldest', 'night', 'of', 'the', 'year', 'most cold', 'in'],
      answer: ['It', 'was', 'the', 'coldest', 'night', 'of', 'the', 'year'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yupiter günəş sisteminin ən böyük planetidir.',
      words: ['Jupiter', 'is', 'the', 'biggest', 'planet', 'in', 'the', 'solar', 'system', 'most big', 'of'],
      answer: ['Jupiter', 'is', 'the', 'biggest', 'planet', 'in', 'the', 'solar', 'system'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İndiyə qədər etdiyin ən qeyri-adi şey nədir?',
      words: ['What', 'is', 'the', 'most', 'unusual', 'thing', 'you\'ve', 'ever', 'done', 'you', 'ever', 'did', 'unusualest'],
      answer: ['What', 'is', 'the', 'most', 'unusual', 'thing', 'you\'ve', 'ever', 'done'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bütün otellər yaxşıdır amma bu ən ucuzdur.',
      words: ['All', 'the', 'hotels', 'are', 'good', 'but', 'this', 'is', 'the', 'cheapest', 'most cheap', 'a'],
      answer: ['All', 'the', 'hotels', 'are', 'good', 'but', 'this', 'is', 'the', 'cheapest'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Önlüklər — yer' },

// ── UNIT 33 — Önlüklər: Yer (Prepositions of Place) ─────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'in / on / at — Əsas Fərqlər (Dərs 1)',
  cards: [

    // ── Ekran 1: in — içəridə ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"in" — içəridə, daxilində',
      content: '"in" — bir şeyin içərisində, daxilində olduğunu bildirir:',
      examples: [
        { word: 'The keys are in my bag.',               az: 'in + qapalı yer (çanta)'                    },
        { word: 'She lives in a small village.',         az: 'in + yaşayış yeri'                          },
        { word: 'Milan is in the north of Italy.',       az: 'in + ölkə, yer adı'                         },
        { word: 'There are a lot of fish in this river.', az: 'in + su (çay, dəniz)'                      },
        { word: 'Angela works in a bank.',               az: 'in + bina növü'                             },
        { word: 'I saw it in a newspaper.',              az: 'in + çap mətbuatı'                          },
        { word: 'Who is that in the photograph?',        az: 'in + şəkil, foto'                           },
        { word: 'There\'s a tree in the middle of the garden.', az: 'in the middle of — ortasında'        },
      ],
      tip: '"in" — içəridə olmaq hissi verir: in a room, in a city, in a country, in the water, in a car/taxi.',
    },

    // ── Ekran 2: at — nöqtə kimi yer ─────────────────────────────────────────
    {
      type: 'lesson',
      title: '"at" — nöqtə kimi görülən yer',
      content: '"at" — yeri konkret bir nöqtə, məkan kimi göstərir:',
      examples: [
        { word: 'There\'s somebody at the door.',        az: 'at + giriş nöqtəsi'                         },
        { word: 'The bus stops at the traffic lights.',  az: 'at + konkret nöqtə'                         },
        { word: 'Will you be at home this evening?',     az: 'at home — evdə (xüsusi ifadə)'              },
        { word: 'She\'s at work right now.',             az: 'at work — işdə (xüsusi ifadə)'              },
        { word: 'My daughter is at university.',         az: 'at university/school — xüsusi ifadə'        },
        { word: 'I\'ll meet you at the station.',        az: 'at + toplantı/görüş nöqtəsi'                },
        { word: 'There weren\'t many people at the party.', az: 'at + hadisə, toplantı'                   },
        { word: 'Write your name at the top of the page.', az: 'at the top/bottom/end — ucunda'           },
      ],
      tip: '"at home / at work / at school / at university" — bunlar əzbərlənməli xüsusi ifadələrdir. "in home" ❌.',
    },

    // ── Ekran 3: on — səthdə ──────────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"on" — səthdə, üstündə',
      content: '"on" — bir səthin üzərindəki mövqeyi bildirir:',
      examples: [
        { word: 'The books are on the shelf.',           az: 'on + üfüqi səth'                            },
        { word: 'There are pictures on the wall.',       az: 'on + şaquli səth (divar)'                   },
        { word: 'Don\'t walk on the grass.',             az: 'on + yer səthi'                             },
        { word: 'There\'s a spider on the ceiling.',     az: 'on + tavan səthi'                           },
        { word: 'My office is on the first floor.',      az: 'on the first/second floor — mərtəbə'        },
        { word: 'I met her on the way to work.',         az: 'on the way — yolda'                         },
        { word: 'He came here on a bicycle.',            az: 'on + nəqliyyat (velosiped, at)'             },
        { word: 'I read about it on the internet.',      az: 'on the internet — internetdə'               },
      ],
      tip: '"on the first floor" ✅ — mərtəbə üçün "on" işlədilir, "in the first floor" ❌. "on the way" — yolda xüsusi ifadə.',
    },

    // ── Ekran 4: in / on / at — xüsusi ifadələr cədvəli ──────────────────────
    {
      type: 'lesson',
      title: 'in / on / at — xüsusi ifadələr',
      content: 'Bu ifadələr əzbərlənməlidir — qayda deyil, istifadə adətidir:',
      table: [
        ['in',                    'at',                       'on'],
        ['in bed',                'at home',                  'on a bus / train / plane'],
        ['in hospital',           'at work / at school',      'on the first floor'],
        ['in prison',             'at university',            'on the way (to/home)'],
        ['in a car / in a taxi',  'at the station/airport',   'on the left / on the right'],
        ['in a newspaper/book',   'at a party / at a concert','on the ground floor'],
        ['in a photograph',       'at the doctor\'s',         'on the internet'],
        ['in the middle (of)',    'at the top/bottom/end',    'on a horse / on a bicycle'],
      ],
      tip: '"on a bus/train/plane" ✅ amma "in a car/taxi" ✅ — nəqliyyatda bu fərqə diqqət et!',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She\'s studying law ___ university."',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
        {
          q: '"Milan is ___ the north of Italy."',
          options: ['at', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"The office is ___ the second floor."',
          options: ['in', 'at', 'on'],
          answer: 'on',
        },
        {
          q: '"Will you be ___ home this evening?"',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
        {
          q: '"I came here ___ a taxi."',
          options: ['on', 'at', 'in'],
          answer: 'in',
        },
        {
          q: '"There\'s somebody ___ the door."',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
        {
          q: '"Don\'t sit ___ the grass."',
          options: ['in', 'at', 'on'],
          answer: 'on',
        },
        {
          q: '"I read about it ___ the newspaper."',
          options: ['on', 'in', 'at'],
          answer: 'in',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'next to / between / above / under — Nisbi Mövqe (Dərs 2)',
  cards: [

    // ── Ekran 1: next to / between / opposite ─────────────────────────────────
    {
      type: 'lesson',
      title: 'next to / between / opposite',
      content: 'Şeylərin bir-birinə nisbətən mövqeyini bildirən önlüklər:',
      table: [
        ['Önlük',           'Azərbaycanca',     'Nümunə'],
        ['next to / beside','yanında',           'The pharmacy is next to the bank.'],
        ['between',         'arasında',          'The café is between the shop and the hotel.'],
        ['opposite',        'qarşısında',        'The school is opposite the park.'],
        ['in front of',     'önündə',            'There\'s a fountain in front of the building.'],
        ['behind',          'arxasında',         'The car park is behind the supermarket.'],
        ['on the left',     'solda',             'The exit is on the left.'],
        ['on the right',    'sağda',             'The post office is on the right.'],
        ['in the middle',   'ortada',            'There\'s a table in the middle of the room.'],
      ],
      tip: '"next to" = "beside" — ikisi eyni mənadadır. "opposite" = üz-üzə, qarşı-qarşıya olmaq deməkdir.',
    },

    // ── Ekran 2: under / above / below / by ──────────────────────────────────
    {
      type: 'lesson',
      title: 'under / above / below / by',
      content: 'Şaquli mövqe və yaxınlıq bildirən önlüklər:',
      examples: [
        { word: 'The cat is sleeping under the table.',          az: 'under — altında'                           },
        { word: 'I wear a shirt under my jacket.',               az: 'under — alt-üst münasibəti'                },
        { word: 'The pictures are above the shelves.',           az: 'above — yuxarısında'                       },
        { word: 'The shelves are below the pictures.',           az: 'below — aşağısında'                        },
        { word: 'Our house is by the sea.',                      az: 'by — yanında, kənarında'                   },
        { word: 'Who is that man by the window?',                az: 'by — yanında (= next to)'                  },
        { word: 'There\'s a public phone by the entrance.',      az: 'by — yaxınında'                            },
        { word: 'The village is below the mountain.',            az: 'below — dağın aşağısında'                  },
      ],
      tip: '"above" ↔ "below" — bir-birinin əksidir. "by" = "next to" = "beside" — hamısı yanında deməkdir.',
    },

    // ── Ekran 3: in front of vs opposite fərqi ───────────────────────────────
    {
      type: 'lesson',
      title: '"in front of" vs "opposite" — fərq',
      content: '"in front of" və "opposite" hər ikisi qarşıda mənasına gəlir, amma fərqlidir:',
      examples: [
        { word: 'The student is sitting in front of the teacher.',  az: 'in front of — eyni istiqamətdə, öndə'   },
        { word: 'The teacher is behind the student.',               az: 'behind — arxada'                         },
        { word: 'The café is opposite the bank.',                   az: 'opposite — üz-üzə, qarşı tərəfdə'        },
        { word: 'I sat opposite her at the table.',                 az: 'opposite — üzbəüz oturmaq'               },
        { word: 'There\'s a mirror in front of me.',                az: 'in front of — önümdə'                    },
        { word: 'The house opposite has a red door.',               az: 'opposite — qarşı tərəfdəki'              },
      ],
      tip: '"in front of" — arxa ilə ön arasındakı münasibət. "opposite" — bir-birinin üzündə, aralarında boşluq var.',
    },

    // ── Ekran 4: Nümunə cümlələr — kompleks ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Yer önlükləri — qarışıq nümunələr',
      content: 'Bir neçə önlüyü birlikdə görək:',
      examples: [
        { word: 'The supermarket is between the bank and the café.',  az: 'between + iki şey'                     },
        { word: 'There\'s a bus stop next to the traffic lights.',    az: 'next to + yaxınlıq'                    },
        { word: 'My keys are under the newspaper on the table.',      az: 'under + on — iki önlük'                },
        { word: 'The hotel is on the left, opposite the station.',    az: 'on the left + opposite'                },
        { word: 'She was standing by the window, above the street.',  az: 'by + above — mövqe'                    },
        { word: 'The notice is on the wall behind the door.',         az: 'on + behind — iki önlük'               },
        { word: 'Sit in the middle, between Tom and Anna.',           az: 'in the middle + between'               },
        { word: 'The car is parked in front of the building.',        az: 'in front of — binanın önü'             },
      ],
      tip: 'Cümlədə bir neçə önlük ola bilər. Hər önlüyün öz rolunu başa düşmək vacibdir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The café is ___ the bank and the post office."',
          options: ['next to', 'between', 'opposite'],
          answer: 'between',
        },
        {
          q: '"The cat is ___ the table." — altında:',
          options: ['above', 'over', 'under'],
          answer: 'under',
        },
        {
          q: '"The pictures are ___ the shelves." — yuxarısında:',
          options: ['under', 'below', 'above'],
          answer: 'above',
        },
        {
          q: '"Our house is ___ the sea." — yanında, kənarında:',
          options: ['near to', 'by', 'at'],
          answer: 'by',
        },
        {
          q: '"The school is ___ the park." — üz-üzə:',
          options: ['in front of', 'behind', 'opposite'],
          answer: 'opposite',
        },
        {
          q: '"There\'s a fountain ___ the building." — önündə:',
          options: ['behind', 'in front of', 'next to'],
          answer: 'in front of',
        },
        {
          q: '"next to" sözünün sinonimi:',
          options: ['opposite', 'beside', 'behind'],
          answer: 'beside',
        },
        {
          q: '"The exit is ___ the right."',
          options: ['in', 'at', 'on'],
          answer: 'on',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"Kitab çantamın içindədir." — in/on/at?',                         tr: 'in',                             wrong: 'at'                           },
  { en: '"O, evdədir." — at/in/on?',                                       tr: 'at home',                        wrong: 'in home'                      },
  { en: '"O, işdədir." — at/in/on?',                                       tr: 'at work',                        wrong: 'in work'                      },
  { en: '"Ofis ikinci mərtəbədədir." — at/in/on?',                         tr: 'on the second floor',            wrong: 'in the second floor'          },
  { en: '"Avtobusla gəldim." — on/in/at?',                                 tr: 'on the bus',                     wrong: 'in the bus'                   },
  { en: '"Taksi ilə gəldim." — on/in/at?',                                 tr: 'in a taxi',                      wrong: 'on a taxi'                    },
  { en: '"Pişik masanın altındadır." — önlük:',                            tr: 'under',                          wrong: 'below'                        },
  { en: '"Şəkillər rəflərin yuxarısındadır." — önlük:',                    tr: 'above',                          wrong: 'over'                         },
  { en: '"Kafe bank ilə mehmanxana arasındadır." — önlük:',                tr: 'between',                        wrong: 'next to'                      },
  { en: '"Mağaza parkin qarşısındadır (üz-üzə)." — önlük:',               tr: 'opposite',                       wrong: 'in front of'                  },
  { en: '"Ev dənizin kənarındadır." — by/beside mənasında:',               tr: 'by',                             wrong: 'at'                           },
  { en: '"next to" sözünün sinonimi:',                                     tr: 'beside',                         wrong: 'opposite'                     },
  { en: '"Qapının yanında biri var." — in/on/at?',                         tr: 'at',                             wrong: 'in'                           },
  { en: '"Mən haqqında qəzetdə oxudum." — in/on/at?',                      tr: 'in',                             wrong: 'on'                           },
  { en: '"Sağda çıxış var." — önlük ifadəsi:',                             tr: 'on the right',                   wrong: 'at the right'                 },
  { en: '"İşə gedərkən onu gördüm." — "yolda":',                          tr: 'on the way to work',             wrong: 'in the way to work'           },
  { en: '"Bağın ortasında ağac var." — önlük ifadəsi:',                    tr: 'in the middle of',               wrong: 'at the middle of'             },
  { en: '"Uşaq universitetdədir." — at/in?',                               tr: 'at',                             wrong: 'in'                           },
  { en: '"Kitabın arxasında cavab var." — önlük:',                         tr: 'behind',                         wrong: 'under'                        },
  { en: '"Binanın önündə çeşmə var." — önlük ifadəsi:',                   tr: 'in front of',                    wrong: 'opposite'                     },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Çantanda nə var?',
      words: ['What', 'have', 'you', 'got', 'in', 'your', 'bag', 'at', 'on'],
      answer: ['What', 'have', 'you', 'got', 'in', 'your', 'bag'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu axşam evdə olacaqsan?',
      words: ['Will', 'you', 'be', 'at', 'home', 'this', 'evening', 'in', 'on'],
      answer: ['Will', 'you', 'be', 'at', 'home', 'this', 'evening'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Ofis ikinci mərtəbədədir.',
      words: ['The', 'office', 'is', 'on', 'the', 'second', 'floor', 'in', 'at'],
      answer: ['The', 'office', 'is', 'on', 'the', 'second', 'floor'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Pişik masanın altında yatır.',
      words: ['The', 'cat', 'is', 'sleeping', 'under', 'the', 'table', 'below', 'at'],
      answer: ['The', 'cat', 'is', 'sleeping', 'under', 'the', 'table'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kafe bank ilə kitab mağazası arasındadır.',
      words: ['The', 'cafe', 'is', 'between', 'the', 'bank', 'and', 'the', 'bookshop', 'next to', 'opposite'],
      answer: ['The', 'cafe', 'is', 'between', 'the', 'bank', 'and', 'the', 'bookshop'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Haqqında qəzetdə oxudum.',
      words: ['I', 'read', 'about', 'it', 'in', 'the', 'newspaper', 'on', 'at'],
      answer: ['I', 'read', 'about', 'it', 'in', 'the', 'newspaper'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Binanın önündə çeşmə var.',
      words: ['There', 'is', 'a', 'fountain', 'in', 'front', 'of', 'the', 'building', 'opposite', 'behind'],
      answer: ['There', 'is', 'a', 'fountain', 'in', 'front', 'of', 'the', 'building'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Ev dənizin kənarındadır.',
      words: ['Our', 'house', 'is', 'by', 'the', 'sea', 'at', 'in'],
      answer: ['Our', 'house', 'is', 'by', 'the', 'sea'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İşə gedərkən onu gördüm.',
      words: ['I', 'saw', 'her', 'on', 'the', 'way', 'to', 'work', 'in', 'at'],
      answer: ['I', 'saw', 'her', 'on', 'the', 'way', 'to', 'work'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bağın ortasında böyük ağac var.',
      words: ['There', 'is', 'a', 'big', 'tree', 'in', 'the', 'middle', 'of', 'the', 'garden', 'at', 'on'],
      answer: ['There', 'is', 'a', 'big', 'tree', 'in', 'the', 'middle', 'of', 'the', 'garden'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Önlüklər — zaman' },

// ── UNIT 34 — Önlüklər: Zaman (Prepositions of Time) ────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'at / on / in — Zaman Önlükləri (Dərs 1)',
  cards: [

    // ── Ekran 1: at — saat və xüsusi ifadələr ────────────────────────────────
    {
      type: 'lesson',
      title: '"at" — saat və xüsusi zaman ifadələri',
      content: '"at" dəqiq saat və bəzi xüsusi ifadələrlə işlədilir:',
      table: [
        ['at ilə işlədilir',         'Nümunə'],
        ['at + saat',                'at 7 o\'clock, at 10.30, at midnight'],
        ['at night',                 'I can\'t sleep at night.'],
        ['at the weekend',           'Are you free at the weekend?'],
        ['at Christmas / at Easter', 'Where will you be at Christmas?'],
        ['at the end of ...',        'I\'m going on holiday at the end of July.'],
        ['at the moment',            'She\'s busy at the moment.'],
        ['at the same time',         'We arrived at the same time.'],
      ],
      tip: '"at night" ✅ amma "in the morning/afternoon/evening" ✅ — gecə üçün "at", günün digər hissələri üçün "in".',
    },

    // ── Ekran 2: on — günlər və tarixlər ────────────────────────────────────
    {
      type: 'lesson',
      title: '"on" — günlər və tarixlər',
      content: '"on" həftənin günləri, tarixlər və xüsusi günlərlə işlədilir:',
      table: [
        ['on ilə işlədilir',              'Nümunə'],
        ['on + həftənin günü',             'on Monday, on Friday, on Sunday'],
        ['on + tarix',                     'on 15 March, on 3 October'],
        ['on + xüsusi gün',                'on New Year\'s Day, on Christmas Day'],
        ['on + gün + günün hissəsi',       'on Monday morning, on Friday evening'],
        ['on Saturday night',              'Are you free on Saturday night?'],
      ],
      tip: '"on Christmas Day" ✅ amma "at Christmas" ✅ — "Christmas Day" konkret gün olduğu üçün "on", ümumi bayram dövrü üçün "at".',
    },

    // ── Ekran 3: in — ay, il, fəsil, günün hissəsi ───────────────────────────
    {
      type: 'lesson',
      title: '"in" — ay, il, fəsil, günün hissəsi',
      content: '"in" daha uzun zaman dövrlərini bildirir:',
      table: [
        ['in ilə işlədilir',           'Nümunə'],
        ['in + ay',                    'in March, in October, in December'],
        ['in + il',                    'in 1990, in 2005, in the 1980s'],
        ['in + fəsil',                 'in spring, in summer, in autumn, in winter'],
        ['in the morning',             'I feel energetic in the morning.'],
        ['in the afternoon',           'She usually rests in the afternoon.'],
        ['in the evening',             'Do you go out in the evening?'],
      ],
      tip: '"in the morning/afternoon/evening" ✅ amma "at night" ✅ — gecə istisnadır, "in the night" demə!',
    },

    // ── Ekran 4: Müqayisəli nümunələr ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'at / on / in — müqayisəli nümunələr',
      content: 'Üç önlüyü eyni mövzu ətrafında müqayisə edək:',
      examples: [
        { word: 'I start work at 8 o\'clock.',            az: 'at + dəqiq saat'                            },
        { word: 'The concert is on 22 November.',         az: 'on + tarix'                                 },
        { word: 'I\'m going on holiday in October.',      az: 'in + ay'                                    },
        { word: 'I can\'t sleep at night.',               az: 'at night — xüsusi ifadə'                    },
        { word: 'I always feel good in the morning.',     az: 'in the morning — günün hissəsi'             },
        { word: 'See you on Friday morning.',             az: 'on + gün + günün hissəsi'                   },
        { word: 'She was born in 1995.',                  az: 'in + il'                                    },
        { word: 'The garden is beautiful in spring.',     az: 'in + fəsil'                                 },
        { word: 'Are you free at the weekend?',           az: 'at the weekend — xüsusi ifadə'              },
        { word: 'I\'ll be there at the end of the week.', az: 'at the end of — xüsusi ifadə'              },
      ],
      tip: 'Qısa xülasə: at = saat/nöqtə, on = gün/tarix, in = dövr (ay/il/fəsil/günün hissəsi).',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ 7 o\'clock" — at/on/in?',
          options: ['on', 'in', 'at'],
          answer: 'at',
        },
        {
          q: '"___ Monday" — at/on/in?',
          options: ['at', 'in', 'on'],
          answer: 'on',
        },
        {
          q: '"___ October" — at/on/in?',
          options: ['at', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"___ 1998" — at/on/in?',
          options: ['at', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"___ night" — at/on/in?',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
        {
          q: '"___ the morning" — at/on/in?',
          options: ['at', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"___ Friday evening" — at/on/in?',
          options: ['at', 'in', 'on'],
          answer: 'on',
        },
        {
          q: '"___ Christmas Day" — at/on/in?',
          options: ['in', 'at', 'on'],
          answer: 'on',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'this/last/next/every + in ... (müddət sonra) (Dərs 2)',
  cards: [

    // ── Ekran 1: önlük işlənməyən hallar ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'this / last / next / every — önlük işlənmir',
      content: '"this / last / next / every" ilə başlayan zaman ifadələrinin qarşısında at/on/in işlənmir:',
      examples: [
        { word: 'Are you going out this evening?',       az: 'this evening — önlük yoxdur'                },
        { word: 'I spoke to her last Monday.',           az: 'last Monday — önlük yoxdur'                 },
        { word: 'I\'m going on holiday next week.',      az: 'next week — önlük yoxdur ("on next week" ❌)' },
        { word: 'The garden was lovely last summer.',    az: 'last summer — önlük yoxdur'                 },
        { word: 'I go to the gym every morning.',        az: 'every morning — önlük yoxdur'               },
        { word: 'She calls me every Sunday.',            az: 'every Sunday — önlük yoxdur'                },
        { word: 'I\'ll see you next Friday.',            az: 'next Friday — "on next Friday" ❌'           },
        { word: 'What did you do this weekend?',         az: 'this weekend — önlük yoxdur'                },
      ],
      tip: '"on next Monday" ❌ → "next Monday" ✅. "in last summer" ❌ → "last summer" ✅. this/last/next/every ilə önlük işlənmir!',
    },

    // ── Ekran 2: in + müddət (indi dən ... sonra) ────────────────────────────
    {
      type: 'lesson',
      title: '"in ..." — müddət sonra',
      content: '"in + vaxt ifadəsi" — indi dən müəyyən müddət sonra demək deməkdir:',
      examples: [
        { word: 'The train leaves in ten minutes.',       az: 'in = indi dən 10 dəqiqə sonra'             },
        { word: 'I\'ll call you back in a moment.',       az: 'in a moment — bir azdan'                   },
        { word: 'She\'ll be ready in half an hour.',      az: 'in half an hour — yarım saatdan sonra'     },
        { word: 'See you in a few days.',                 az: 'in a few days — bir neçə gündən sonra'     },
        { word: 'The project will be done in two weeks.', az: 'in two weeks — iki həftədən sonra'         },
        { word: 'We\'ll arrive in about three hours.',    az: 'in three hours — üç saatdan sonra'         },
      ],
      tip: '"in five minutes" = indi dən 5 dəqiqə sonra. "after five minutes" ilə qarışdırma — "after" başqa mənada işlənir.',
    },

    // ── Ekran 3: at Christmas vs on Christmas Day + digər fərqlər ────────────
    {
      type: 'lesson',
      title: 'Tez-tez qarışdırılan ifadələr',
      content: 'Bu cütlər tez-tez qarışdırılır — fərqə diqqət et:',
      table: [
        ['İfadə',               'Düzgün',                       'Yanlış'],
        ['at Christmas',        'at Christmas (dövr)',           'in Christmas ❌'],
        ['on Christmas Day',    'on Christmas Day (konkret gün)','at Christmas Day ❌'],
        ['at night',            'at night',                      'in the night ❌ (adətən)'],
        ['in the morning',      'in the morning',                'at the morning ❌'],
        ['on Monday morning',   'on Monday morning',             'in Monday morning ❌'],
        ['at the weekend',      'at the weekend',                'in the weekend ❌'],
        ['at the end of ...',   'at the end of October',         'in the end of October ❌'],
        ['at the moment',       'at the moment',                 'in the moment ❌'],
      ],
      tip: '"in the end" başqa mənaya gəlir (= nəticədə, axırda). "at the end of ..." = bir şeyin sonunda.',
    },

    // ── Ekran 4: Qarışıq nümunələr ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Zaman önlükləri — qarışıq nümunələr',
      content: 'Bütün qaydaları bir yerdə görək:',
      examples: [
        { word: 'I\'m starting my new job on 3 July.',            az: 'on + tarix'                         },
        { word: 'The company was founded in 1969.',               az: 'in + il'                            },
        { word: 'Let\'s meet at 7.30 tomorrow evening.',          az: 'at + saat'                          },
        { word: 'I often go away at the weekend.',                az: 'at the weekend'                     },
        { word: 'Do you work on Saturdays?',                      az: 'on + həftənin günü'                 },
        { word: 'She likes reading in the evening.',              az: 'in the evening'                     },
        { word: 'I\'ll send you the details at the end of the month.', az: 'at the end of'               },
        { word: 'I\'m going to the dentist next Thursday.',       az: 'next Thursday — önlük yoxdur'       },
        { word: 'I didn\'t go out last night.',                   az: 'last night — önlük yoxdur'          },
        { word: 'Hurry up! The bus leaves in three minutes.',     az: 'in = müddət sonra'                  },
      ],
      tip: 'Hər cümləni oxuyanda özünə sor: bu saat, gün, yoxsa dövrdür? Cavaba görə at/on/in seç.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I\'m leaving ___ next Monday." — önlük lazımdırmı?',
          options: ['on next Monday', 'in next Monday', 'next Monday (önlük yoxdur)'],
          answer: 'next Monday (önlük yoxdur)',
        },
        {
          q: '"The train leaves ___ five minutes." — indi dən sonra:',
          options: ['after', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"___ the weekend" — at/on/in?',
          options: ['on', 'in', 'at'],
          answer: 'at',
        },
        {
          q: '"___ Saturday night" — at/on/in?',
          options: ['at', 'in', 'on'],
          answer: 'on',
        },
        {
          q: '"I like walking ___ the evening." — at/on/in?',
          options: ['at', 'on', 'in'],
          answer: 'in',
        },
        {
          q: '"She calls me ___ every Sunday." — önlük lazımdırmı?',
          options: ['on every Sunday', 'at every Sunday', 'every Sunday (önlük yoxdur)'],
          answer: 'every Sunday (önlük yoxdur)',
        },
        {
          q: '"Where were you ___ Christmas?" — at/on/in?',
          options: ['on', 'in', 'at'],
          answer: 'at',
        },
        {
          q: '"___ the end of the month" — at/on/in?',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"Saat 6-da." — at/on/in?',                                        tr: 'at',                             wrong: 'on'                           },
  { en: '"Cümə axşamı." — at/on/in?',                                      tr: 'on',                             wrong: 'in'                           },
  { en: '"Oktyabr ayında." — at/on/in?',                                   tr: 'in',                             wrong: 'on'                           },
  { en: '"1987-ci ildə." — at/on/in?',                                     tr: 'in',                             wrong: 'at'                           },
  { en: '"Gecə." — at/on/in?',                                             tr: 'at night',                       wrong: 'in the night'                 },
  { en: '"Səhər." — at/on/in?',                                            tr: 'in the morning',                 wrong: 'at the morning'               },
  { en: '"Həftəsonu." — at/on/in?',                                        tr: 'at the weekend',                 wrong: 'in the weekend'               },
  { en: '"Bazar ertəsi səhər." — at/on/in?',                               tr: 'on Monday morning',              wrong: 'in Monday morning'            },
  { en: '"Milad bayramında." — at/on/in?',                                 tr: 'at Christmas',                   wrong: 'in Christmas'                 },
  { en: '"Milad günündə." — at/on/in?',                                    tr: 'on Christmas Day',               wrong: 'at Christmas Day'             },
  { en: '"Yayda." — at/on/in?',                                            tr: 'in summer',                      wrong: 'at summer'                    },
  { en: '"24 sentyabrda." — at/on/in?',                                    tr: 'on',                             wrong: 'in'                           },
  { en: '"Hal-hazırda." — xüsusi ifadə:',                                  tr: 'at the moment',                  wrong: 'in the moment'                },
  { en: '"Ayın sonunda." — xüsusi ifadə:',                                 tr: 'at the end of the month',        wrong: 'in the end of the month'      },
  { en: '"5 dəqiqə sonra (indi dən)." — önlük:',                          tr: 'in',                             wrong: 'after'                        },
  { en: '"Gələn həftə." — önlük lazımdırmı?',                             tr: 'next week (önlük yoxdur)',        wrong: 'on next week'                 },
  { en: '"Hər gün." — önlük lazımdırmı?',                                 tr: 'every day (önlük yoxdur)',        wrong: 'on every day'                 },
  { en: '"Keçən yay." — önlük lazımdırmı?',                               tr: 'last summer (önlük yoxdur)',      wrong: 'in last summer'               },
  { en: '"Bu axşam." — önlük lazımdırmı?',                                tr: 'this evening (önlük yoxdur)',     wrong: 'in this evening'              },
  { en: '"Cümə axşamı axşamı." — at/on/in?',                              tr: 'on Thursday evening',            wrong: 'in Thursday evening'          },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Saat 8-də işə başlayıram.',
      words: ['I', 'start', 'work', 'at', '8', 'o\'clock', 'on', 'in'],
      answer: ['I', 'start', 'work', 'at', '8', 'o\'clock'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Oktyabrın sonunda tətilə gedirəm.',
      words: ['I\'m', 'going', 'on', 'holiday', 'at', 'the', 'end', 'of', 'October', 'in', 'the', 'end'],
      answer: ['I\'m', 'going', 'on', 'holiday', 'at', 'the', 'end', 'of', 'October'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bazar ertəsi günü ilə görüşürəm.',
      words: ['I\'m', 'meeting', 'Jill', 'on', 'Monday', 'morning', 'in', 'at'],
      answer: ['I\'m', 'meeting', 'Jill', 'on', 'Monday', 'morning'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Gələn Cümə günü tətilə gedirəm.',
      words: ['I\'m', 'going', 'on', 'holiday', 'next', 'Friday', 'on next', 'in next'],
      answer: ['I\'m', 'going', 'on', 'holiday', 'next', 'Friday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tələs! Qatar beş dəqiqə sonra yola düşür.',
      words: ['Hurry!', 'The', 'train', 'leaves', 'in', 'five', 'minutes', 'after', 'at'],
      answer: ['Hurry!', 'The', 'train', 'leaves', 'in', 'five', 'minutes'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hər bazar günü onu zəng edirəm.',
      words: ['I', 'call', 'her', 'every', 'Sunday', 'on every', 'at every'],
      answer: ['I', 'call', 'her', 'every', 'Sunday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Şirkət 1969-cu ildə quruldu.',
      words: ['The', 'company', 'was', 'founded', 'in', '1969', 'on', 'at'],
      answer: ['The', 'company', 'was', 'founded', 'in', '1969'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Milad bayramında harada olacaqsan?',
      words: ['Where', 'will', 'you', 'be', 'at', 'Christmas', 'in', 'on'],
      answer: ['Where', 'will', 'you', 'be', 'at', 'Christmas'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Axşamları çıxırsan?',
      words: ['Do', 'you', 'often', 'go', 'out', 'in', 'the', 'evening', 'at', 'on'],
      answer: ['Do', 'you', 'often', 'go', 'out', 'in', 'the', 'evening'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Keçən yay bağ gözəl idi.',
      words: ['The', 'garden', 'was', 'lovely', 'last', 'summer', 'in last', 'at last'],
      answer: ['The', 'garden', 'was', 'lovely', 'last', 'summer'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Önlüklər — digər' },

// ── UNIT 35 — Önlüklər: Digər (Other Prepositions) ──────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'on / at / by / with / about — Xüsusi İfadələr (Dərs 1)',
  cards: [

    // ── Ekran 1: on ilə xüsusi ifadələr ──────────────────────────────────────
    {
      type: 'lesson',
      title: '"on" ilə xüsusi ifadələr',
      content: '"on" bəzi sabit ifadələrdə işlədilir — bu ifadələr əzbərlənməlidir:',
      table: [
        ['İfadə',             'Nümunə'],
        ['on holiday',        'She isn\'t at work this week. She\'s on holiday.'],
        ['on television',     'Did you watch the match on television?'],
        ['on the radio',      'I heard the news on the radio this morning.'],
        ['on the phone',      'I spoke to him on the phone last night.'],
        ['on fire',           'Call the fire brigade! The building is on fire!'],
        ['on time (= vaxtında)', 'The meeting started on time. Nobody was late.'],
        ['on foot',           'She goes to work on foot every day.'],
      ],
      tip: '"on foot" — nəqliyyat ifadələrinin əksəriyyəti "by" ilə olur, amma "on foot" istisnadır: "by foot" ❌.',
    },

    // ── Ekran 2: by ilə nəqliyyat və müəllif ─────────────────────────────────
    {
      type: 'lesson',
      title: '"by" — nəqliyyat, müəllif, passiv',
      content: '"by" nəqliyyat vasitəsi, əsər müəllifi və passiv cümlələrdə işlədilir:',
      examples: [
        { word: 'Do you like travelling by train?',          az: 'by + nəqliyyat (önlüksüz isim)'            },
        { word: 'It\'s faster to go by plane than by car.',  az: 'by plane / by car'                         },
        { word: 'I usually go to work by bus.',              az: 'by bus — "on the bus" da deyilir'          },
        { word: 'She prefers to travel by bike.',            az: 'by bike'                                   },
        { word: 'Romeo and Juliet is a play by Shakespeare.', az: 'by + müəllif/sənətkar'                   },
        { word: 'Have you read anything by Agatha Christie?', az: 'by + yazıçı'                              },
        { word: 'I was bitten by a dog yesterday.',          az: 'by — passiv cümlədə icraçı'                },
      ],
      tip: '"by car / by bus / by plane" — nəqliyyatdan əvvəl "the" işlənmir: "by the car" ❌ → "by car" ✅. İstisna: "on foot".',
    },

    // ── Ekran 3: with / without / about ───────────────────────────────────────
    {
      type: 'lesson',
      title: '"with" / "without" / "about"',
      content: 'Bu üç önlüyün işləndiyi əsas hallar:',
      examples: [
        { word: 'I cut the rope with a knife.',              az: 'with + alət (vasitə ilə)'                  },
        { word: 'Do you take your coffee with or without milk?', az: 'with/without — ilə/siz'               },
        { word: 'Who is that woman with the red hat?',       az: 'with + xüsusiyyət (saçlı, eynəkli...)'    },
        { word: 'Don\'t leave without your keys.',           az: 'without — olmadan'                         },
        { word: 'He left without saying a word.',            az: 'without + -ing'                            },
        { word: 'I don\'t know much about this topic.',      az: 'about — haqqında'                          },
        { word: 'They were talking about their plans.',      az: 'talk about — haqqında danışmaq'            },
        { word: 'Did you read that article about climate change?', az: 'about — mövzu'                       },
      ],
      tip: 'Önlükdən sonra fel gəlsə -ing alır: "without saying", "after doing", "before leaving" — heç vaxt infinitiv yox!',
    },

    // ── Ekran 4: at ilə xüsusi ifadələr ──────────────────────────────────────
    {
      type: 'lesson',
      title: '"at" — yaş, sürət, temperatura',
      content: '"at" rəqəmsal ölçülərlə (yaş, sürət, temperatur) işlədilir:',
      examples: [
        { word: 'She started university at 18.',             az: 'at + yaş'                                  },
        { word: 'He retired at the age of 65.',              az: 'at the age of + rəqəm'                     },
        { word: 'The car was going at 120 kilometres an hour.', az: 'at + sürət'                             },
        { word: 'Water freezes at 0 degrees Celsius.',       az: 'at + temperatur/dərəcə'                    },
        { word: 'Water boils at 100 degrees.',               az: 'at + temperatur'                           },
        { word: 'These trains travel at very high speeds.',  az: 'at + sürət'                                },
      ],
      tip: '"at the age of 30" = "at 30" — ikisi eyni mənadadır. "in 30 years old" ❌ → "at 30" ✅.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She goes to school ___ foot." — by/on/with?',
          options: ['by', 'with', 'on'],
          answer: 'on',
        },
        {
          q: '"The book is ___ Hemingway." — müəllif:',
          options: ['from', 'of', 'by'],
          answer: 'by',
        },
        {
          q: '"We watched the match ___ television."',
          options: ['in', 'by', 'on'],
          answer: 'on',
        },
        {
          q: '"Water boils ___ 100 degrees."',
          options: ['in', 'on', 'at'],
          answer: 'at',
        },
        {
          q: '"He left ___ saying goodbye." — olmadan:',
          options: ['without', 'with no', 'not with'],
          answer: 'without',
        },
        {
          q: '"She was talking ___ her new job."',
          options: ['for', 'of', 'about'],
          answer: 'about',
        },
        {
          q: '"I usually go to work ___ bus."',
          options: ['on', 'in', 'by'],
          answer: 'by',
        },
        {
          q: '"The building is ___ fire!"',
          options: ['in', 'at', 'on'],
          answer: 'on',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Sifət + Önlük / Fel + Önlük (Dərs 2)',
  cards: [

    // ── Ekran 1: Sifət + önlük ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Sifət + önlük — əzbərlə',
      content: 'Bu birləşmələr sabitdir — önlüklər dəyişdirilə bilməz:',
      table: [
        ['Sifət + önlük',        'Nümunə'],
        ['afraid of',            'Are you afraid of the dark?'],
        ['angry with (şəxs)',    'Why are you angry with me?'],
        ['angry about (şey)',    'She was angry about what happened.'],
        ['different from',       'This city is very different from my hometown.'],
        ['fed up with',          'I\'m fed up with doing the same thing every day.'],
        ['full of',              'The bag was full of old books.'],
        ['good at / bad at',     'He\'s good at cooking but bad at baking.'],
        ['interested in',        'Are you interested in history?'],
        ['married to',           'She\'s married to a doctor.'],
        ['sorry about/for',      'I\'m sorry about the noise. / Sorry for keeping you waiting.'],
        ['kind/nice to',         'He\'s always very kind to his neighbours.'],
      ],
      tip: '"different from" ✅ — "different than / different to" bəzi dialektlərdə işlənir, amma "from" ən geniş qəbul edilənidir.',
    },

    // ── Ekran 2: Fel + önlük ─────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Fel + önlük — əzbərlə',
      content: 'Bu fellərin özünəməxsus önlükləri var — başqa önlük işlənmir:',
      table: [
        ['Fel + önlük',                  'Nümunə'],
        ['ask (sb) for',                 'She asked the waiter for the bill.'],
        ['belong to',                    'Does this bag belong to you?'],
        ['happen to',                    'What happened to your phone?'],
        ['listen to',                    'I love listening to music in the morning.'],
        ['talk/speak to sb about sth',   'I need to talk to you about something.'],
        ['thank sb for',                 'Thank you for your help.'],
        ['think about / think of',       'I often think about my childhood.'],
        ['wait for',                     'I\'ve been waiting for you for an hour!'],
        ['write to',                     'She wrote to me every week when I was abroad.'],
        ['depend on',                    'It depends on the weather.'],
        ['phone sb (önlük yoxdur)',       'I need to phone my sister. (not "phone to")'],
      ],
      tip: '"phone to someone" ❌ → "phone someone" ✅. "phone" felindən sonra birbaşa şəxs gəlir, önlük işlənmir.',
    },

    // ── Ekran 3: look at / look for / look after ──────────────────────────────
    {
      type: 'lesson',
      title: '"look" + önlük — üç fərqli məna',
      content: '"look" felinin önlüyə görə mənası tamam dəyişir:',
      table: [
        ['İfadə',        'Məna',              'Nümunə'],
        ['look at',      'baxmaq',            'Look at this photo! It\'s amazing.'],
        ['look for',     'axtarmaq',          'I\'ve lost my glasses. I\'m looking for them.'],
        ['look after',   'qayğısına qalmaq',  'Can you look after my cat while I\'m away?'],
      ],
      tip: '"look for" = axtarmaq (tapılmayıb). "look at" = baxmaq (artıq qarşındadır). "look after" = qayğı göstərmək.',
    },

    // ── Ekran 4: Önlük + -ing (qarışıq nümunələr) ────────────────────────────
    {
      type: 'lesson',
      title: 'Önlük + -ing forması',
      content: 'Önlükdən sonra gələn fel həmişə -ing formasında olur:',
      examples: [
        { word: 'She\'s good at solving problems.',          az: 'good at + -ing'                            },
        { word: 'I\'m fed up with waiting in queues.',       az: 'fed up with + -ing'                        },
        { word: 'He left without finishing his meal.',       az: 'without + -ing'                            },
        { word: 'Thank you for helping me.',                 az: 'thank for + -ing'                          },
        { word: 'I\'m sorry for arriving late.',             az: 'sorry for + -ing'                          },
        { word: 'Before going to bed, she reads.',           az: 'before + -ing'                             },
        { word: 'After finishing work, he went to the gym.', az: 'after + -ing'                              },
        { word: 'Mark is thinking of moving abroad.',        az: 'think of + -ing'                           },
      ],
      tip: 'Önlükdən sonra "to + infinitiv" yox, -ing işlənir: "good at to solve" ❌ → "good at solving" ✅.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Are you ___ sport?" — interested:',
          options: ['interested about', 'interested in', 'interested of'],
          answer: 'interested in',
        },
        {
          q: '"She\'s ___ a lawyer." — married:',
          options: ['married with', 'married for', 'married to'],
          answer: 'married to',
        },
        {
          q: '"What happened ___ your keys?"',
          options: ['with', 'for', 'to'],
          answer: 'to',
        },
        {
          q: '"I need to phone ___ my mum." — önlük lazımdırmı?',
          options: ['phone to my mum', 'phone for my mum', 'phone my mum (önlük yoxdur)'],
          answer: 'phone my mum (önlük yoxdur)',
        },
        {
          q: '"He\'s looking ___ his passport." — axtarmaq:',
          options: ['look at', 'look after', 'look for'],
          answer: 'look for',
        },
        {
          q: '"She\'s ___ cooking." — good:',
          options: ['good at', 'good in', 'good for'],
          answer: 'good at',
        },
        {
          q: '"I\'m sorry ___ not calling you earlier."',
          options: ['sorry about', 'sorry for', 'sorry of'],
          answer: 'sorry for',
        },
        {
          q: '"This town is very ___ where I grew up." — different:',
          options: ['different than', 'different to', 'different from'],
          answer: 'different from',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"Televiziyada baxmaq." — on/in/by?',                              tr: 'on television',                  wrong: 'in television'                },
  { en: '"Radioda eşitmək." — on/in/by?',                                  tr: 'on the radio',                   wrong: 'in the radio'                 },
  { en: '"Telefonda danışmaq." — on/in/by?',                               tr: 'on the phone',                   wrong: 'by the phone'                 },
  { en: '"Vaxtında (gecikməyərək)." — on/in/at?',                         tr: 'on time',                        wrong: 'in time'                      },
  { en: '"Piyada getmək." — by/on/with?',                                  tr: 'on foot',                        wrong: 'by foot'                      },
  { en: '"Təyyarə ilə getmək." — by/on/in?',                              tr: 'by plane',                       wrong: 'on plane'                     },
  { en: '"Shakespeare-in pyesi." — by/of/from?',                          tr: 'by Shakespeare',                 wrong: 'from Shakespeare'             },
  { en: '"Passiv: it bitten ___ a dog."',                                  tr: 'by',                             wrong: 'from'                         },
  { en: '"Futboldan qorxmaq." — afraid:',                                  tr: 'afraid of',                      wrong: 'afraid from'                  },
  { en: '"Riyaziyyatda yaxşıdır." — good:',                                tr: 'good at',                        wrong: 'good in'                      },
  { en: '"Tarixlə maraqlanır." — interested:',                             tr: 'interested in',                  wrong: 'interested about'             },
  { en: '"Həkimlə evlidir." — married:',                                   tr: 'married to',                     wrong: 'married with'                 },
  { en: '"Eyni iş görməkdən bezdi." — fed up:',                           tr: 'fed up with',                    wrong: 'fed up of'                    },
  { en: '"Kitab kitablarla dolu idi." — full:',                            tr: 'full of',                        wrong: 'full with'                    },
  { en: '"Məndən fərqlidir." — different:',                                tr: 'different from',                 wrong: 'different than'               },
  { en: '"Səni gözlədim." — wait:',                                        tr: 'waited for you',                 wrong: 'waited you'                   },
  { en: '"Həmin çanta kimə aiddir?" — belong:',                           tr: 'belong to',                      wrong: 'belong for'                   },
  { en: '"Mənə bax!" — look:',                                             tr: 'look at me',                     wrong: 'look me'                      },
  { en: '"Açarlarımı axtarıram." — look:',                                 tr: 'looking for',                    wrong: 'looking after'                },
  { en: '"Önlükdən sonra fel hansı formada gəlir?"',                       tr: '-ing',                           wrong: 'infinitiv (to + fel)'         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu həftə işdə deyil. Tətildədir.',
      words: ['She\'s', 'not', 'at', 'work', 'this', 'week.', 'She\'s', 'on', 'holiday', 'in', 'by'],
      answer: ['She\'s', 'not', 'at', 'work', 'this', 'week.', 'She\'s', 'on', 'holiday'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Otaq insanlarla dolu idi.',
      words: ['The', 'room', 'was', 'full', 'of', 'people', 'with', 'for'],
      answer: ['The', 'room', 'was', 'full', 'of', 'people'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, dişçiyə evlidir.',
      words: ['She', 'is', 'married', 'to', 'a', 'dentist', 'with', 'for'],
      answer: ['She', 'is', 'married', 'to', 'a', 'dentist'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Tom xudahafizləşmədən getdi.',
      words: ['Tom', 'left', 'without', 'saying', 'goodbye', 'without', 'to say', 'not saying'],
      answer: ['Tom', 'left', 'without', 'saying', 'goodbye'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Köməyin üçün sağ ol.',
      words: ['Thank', 'you', 'for', 'your', 'help', 'of', 'to', 'about'],
      answer: ['Thank', 'you', 'for', 'your', 'help'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Açarlarımı itirmişəm. Onları axtarıram.',
      words: ['I\'ve', 'lost', 'my', 'keys.', 'I\'m', 'looking', 'for', 'them', 'at', 'after'],
      answer: ['I\'ve', 'lost', 'my', 'keys.', 'I\'m', 'looking', 'for', 'them'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu şəhər doğulduğum yerdən çox fərqlidir.',
      words: ['This', 'city', 'is', 'very', 'different', 'from', 'where', 'I', 'grew', 'up', 'than', 'to'],
      answer: ['This', 'city', 'is', 'very', 'different', 'from', 'where', 'I', 'grew', 'up'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Anama zəng etməliyəm.',
      words: ['I', 'need', 'to', 'phone', 'my', 'mother', 'phone to', 'call to'],
      answer: ['I', 'need', 'to', 'phone', 'my', 'mother'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mark xaricdə yaşamağı düşünür.',
      words: ['Mark', 'is', 'thinking', 'of', 'moving', 'abroad', 'to move', 'about move'],
      answer: ['Mark', 'is', 'thinking', 'of', 'moving', 'abroad'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Nə baş verdi sənin telefonuna?',
      words: ['What', 'happened', 'to', 'your', 'phone', 'with', 'for', '?'],
      answer: ['What', 'happened', 'to', 'your', 'phone', '?'],
    },
  ],
},
      
{ type: 'section_divider', title: 'and / but / or / so' },

// ── UNIT 36 — Bağlayıcılar: and / but / or / so / because ───────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'and / but / or — Əsas Bağlayıcılar (Dərs 1)',
  cards: [

    // ── Ekran 1: and — əlavə, davam ───────────────────────────────────────────
    {
      type: 'lesson',
      title: '"and" — əlavə, davam',
      content: '"and" iki fikri, hərəkəti və ya şəxsi birləşdirir:',
      examples: [
        { word: 'We stayed at home and watched a film.',         az: 'iki hərəkət birləşir'                      },
        { word: 'My brother is a teacher and lives in Baku.',    az: 'iki məlumat birləşir'                      },
        { word: 'She opened the door and walked in.',            az: 'ardıcıl hərəkətlər'                        },
        { word: 'He doesn\'t like coffee and she doesn\'t either.', az: 'iki mənfi cümlə'                       },
        { word: 'I got home, had dinner, sat down and fell asleep.', az: 'siyahıda and yalnız sonda işlənir'    },
        { word: 'Tom is at work, Lisa is at school and Dan is home.', az: 'üç cümlədə and yalnız sonuncudan əvvəl' },
      ],
      tip: 'Siyahıda "and" yalnız sonuncu iki element arasında işlədilir: "x, y and z" — hər iki elementdən əvvəl "and" ❌.',
    },

    // ── Ekran 2: but — ziddiyyət ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"but" — ziddiyyət, gözlənilməz nəticə',
      content: '"but" iki zidd fikri birləşdirir — ikinci hissə birincinin əksinədir:',
      examples: [
        { word: 'I bought the book but I didn\'t read it.',      az: 'gözlənilən ilə olan fərqli'               },
        { word: 'It\'s a nice flat but it hasn\'t got a balcony.', az: 'müsbət + mənfi'                         },
        { word: 'I wanted to help but I didn\'t know how.',      az: 'istək + maneə'                            },
        { word: 'She\'s tired but she won\'t stop working.',     az: 'hal + əks davranış'                       },
        { word: 'The film was long but very interesting.',       az: 'mənfi + müsbət xüsusiyyət'                },
        { word: 'I know him but not very well.',                 az: 'qismən ziddiyyət'                         },
      ],
      tip: '"but" = amma, lakin. Birinci hissənin əksinə olan bir şey gəlir. "and" ilə qarışdırma!',
    },

    // ── Ekran 3: or — seçim ───────────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"or" — seçim, alternativ',
      content: '"or" iki seçim arasında işlədilir:',
      examples: [
        { word: 'Do you want tea or coffee?',                    az: 'iki seçim arasında'                       },
        { word: 'Is he coming by train or by bus?',              az: 'nəqliyyat seçimi'                         },
        { word: 'You can stay here or come with us.',            az: 'iki seçenek'                              },
        { word: 'Do you want to go out or are you too tired?',   az: 'sual + alternativ sual'                   },
        { word: 'Shall I call you or send a message?',           az: 'iki alternativ hərəkət'                   },
        { word: 'Is that Mark or his brother?',                  az: 'kimlik seçimi'                            },
      ],
      tip: '"or" inkar cümlələrdə "and" yerinə işlənir: "I don\'t eat meat or fish." (= meat and fish ikisini də yemir)',
    },

    // ── Ekran 4: and/but/or — müqayisəli nümunələr ───────────────────────────
    {
      type: 'lesson',
      title: 'and / but / or — müqayisəli baxış',
      content: 'Üç bağlayıcını eyni mövzuda müqayisə edək:',
      examples: [
        { word: 'I was tired and I went to bed early.',          az: 'and — nəticə uyğundur'                    },
        { word: 'I was tired but I didn\'t go to bed.',          az: 'but — nəticə gözlənilməzdir'              },
        { word: 'Were you tired or did you feel okay?',          az: 'or — seçim soruşulur'                     },
        { word: 'She studied hard and passed the exam.',         az: 'and — ardıcıl, uyğun'                     },
        { word: 'She studied hard but failed the exam.',         az: 'but — gözlənilməz nəticə'                 },
        { word: 'Did she study hard or give up?',                az: 'or — iki alternativ'                      },
      ],
      tip: 'Hansı bağlayıcının düzgün olduğunu anlamaq üçün: əlavəmi (and), ziddiyyətmi (but), seçimmi (or)?',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I wanted to call you ___ I didn\'t have your number." — and/but/or?',
          options: ['and', 'or', 'but'],
          answer: 'but',
        },
        {
          q: '"She opened the door ___ walked in." — and/but/or?',
          options: ['but', 'or', 'and'],
          answer: 'and',
        },
        {
          q: '"Do you want to stay ___ shall we leave?" — and/but/or?',
          options: ['and', 'but', 'or'],
          answer: 'or',
        },
        {
          q: '"It\'s a nice hotel ___ it\'s very expensive." — and/but/or?',
          options: ['and', 'or', 'but'],
          answer: 'but',
        },
        {
          q: 'Siyahıda "and" harada işlədilir?',
          options: ['hər elementdən əvvəl', 'yalnız sonuncu iki element arasında', 'yalnız əvvəldə'],
          answer: 'yalnız sonuncu iki element arasında',
        },
        {
          q: '"I got home, had a shower ___ went to bed." — and/but/or?',
          options: ['but', 'or', 'and'],
          answer: 'and',
        },
        {
          q: '"Is he Turkish ___ Iranian?" — and/but/or?',
          options: ['and', 'but', 'or'],
          answer: 'or',
        },
        {
          q: '"She\'s very smart ___ very kind." — əlavə mənası:',
          options: ['but', 'or', 'and'],
          answer: 'and',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'so / because — Nəticə və Səbəb (Dərs 2)',
  cards: [

    // ── Ekran 1: so — nəticə ──────────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"so" — nəticə bildirmək',
      content: '"so" birinci cümlənin nəticəsini bildirir — buna görə, beləliklə:',
      examples: [
        { word: 'It was raining, so we stayed inside.',          az: 'yağış → nəticə: içəridə qaldıq'           },
        { word: 'I was hungry, so I made a sandwich.',           az: 'ac idim → nəticə: sandwich etdim'         },
        { word: 'The shop was closed, so we went home.',         az: 'bağlı idi → nəticə: getdik'               },
        { word: 'She missed the bus, so she was late.',          az: 'avtobusu qaçırdı → nəticə: gecikdi'       },
        { word: 'They like jazz, so they often go to concerts.', az: 'sevir → nəticə: tez-tez gedirlər'         },
        { word: 'It was getting dark, so I turned on the light.', az: 'qaranlıq oldu → nəticə: işığı yandırdım' },
      ],
      tip: '"so" = buna görə. A baş verdi, SO B baş verdi. Birinci cümlə səbəb, "so" dan sonrakı nəticədir.',
    },

    // ── Ekran 2: because — səbəb ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: '"because" — səbəb bildirmək',
      content: '"because" birinci cümlənin səbəbini izah edir — çünki:',
      examples: [
        { word: 'I stayed inside because it was raining.',       az: 'because + səbəb'                          },
        { word: 'She was late because she missed the bus.',      az: 'gecikdi, çünki avtobusu qaçırdı'          },
        { word: 'I was tired because I hadn\'t slept well.',     az: 'yorğun idim, çünki yaxşı yatmamışdım'    },
        { word: 'He didn\'t come because he was ill.',           az: 'gəlmədi, çünki xəstə idi'                 },
        { word: 'Because it was late, I took a taxi.',           az: 'because cümlənin əvvəlində də işlənə bilər' },
        { word: 'Because she worked hard, she got promoted.',    az: 'because + vergül — əvvəldə'               },
      ],
      tip: '"because" cümlənin əvvəlində işlənəndə vergül qoyulur: "Because it rained, we stayed in." ✅',
    },

    // ── Ekran 3: so vs because — fərq ────────────────────────────────────────
    {
      type: 'lesson',
      title: '"so" vs "because" — fərq',
      content: '"so" və "because" eyni məlumatı fərqli istiqamətdən izah edir:',
      examples: [
        { word: 'It was hot, so I opened the window.',           az: 'so: isti idi → nəticə: pəncərəni açdım'  },
        { word: 'I opened the window because it was hot.',       az: 'because: açdım, çünki isti idi'           },
        { word: 'She was tired, so she went to bed early.',      az: 'so: yorğun idi → nəticə: erkən yatdı'    },
        { word: 'She went to bed early because she was tired.',  az: 'because: erkən yatdı, çünki yorğun idi'  },
        { word: 'The exam was hard, so many students failed.',   az: 'so: çətin idi → nəticə: uğursuz oldular' },
        { word: 'Many students failed because the exam was hard.', az: 'because: çünki çətin idi'              },
      ],
      tip: '"so" nəticəni göstərir (A→B). "because" səbəbi izah edir (B, çünki A). İkisi eyni mənalı ola bilər, amma ardıcıllıq dəyişir.',
    },

    // ── Ekran 4: Birdən çox bağlayıcı ────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Birdən çox bağlayıcı ilə uzun cümlələr',
      content: 'Bir cümlədə bir neçə bağlayıcı işlənə bilər:',
      examples: [
        { word: 'It was late and I was tired, so I went to bed.',  az: 'and + so — iki bağlayıcı'              },
        { word: 'I like London but I wouldn\'t live there because it\'s too crowded.', az: 'but + because'     },
        { word: 'She studied all night and passed the exam, so she was very happy.', az: 'and + so'            },
        { word: 'He wanted to come but couldn\'t because he was working.', az: 'but + because'                 },
        { word: 'I was hungry and tired, so I ordered food and went to sleep.', az: 'and + so + and'           },
      ],
      tip: 'Birdən çox bağlayıcı işlənəndə hər birinin mənasına diqqət et: əlavə (and), ziddiyyət (but), nəticə (so), səbəb (because).',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The traffic was bad, ___ I was late." — so/because?',
          options: ['because', 'but', 'so'],
          answer: 'so',
        },
        {
          q: '"I was late ___ the traffic was bad." — so/because?',
          options: ['so', 'and', 'because'],
          answer: 'because',
        },
        {
          q: '"It was cold, ___ I put on a coat." — and/so/because?',
          options: ['because', 'but', 'so'],
          answer: 'so',
        },
        {
          q: '"I put on a coat ___ it was cold." — and/so/because?',
          options: ['so', 'but', 'because'],
          answer: 'because',
        },
        {
          q: '"It was late ___ I was tired, so I went home." — and/but/or?',
          options: ['or', 'but', 'and'],
          answer: 'and',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Because it was hot so I opened the window.',
            'It was hot, so I opened the window.',
            'It was hot so because I opened the window.',
          ],
          answer: 'It was hot, so I opened the window.',
        },
        {
          q: '"because" cümlənin əvvəlində işlənəndə nə qoyulur?',
          options: ['nöqtə', 'vergül', 'sual işarəsi'],
          answer: 'vergül',
        },
        {
          q: '"She didn\'t eat anything ___ she wasn\'t hungry." — so/because?',
          options: ['so', 'and', 'because'],
          answer: 'because',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: '"Evdə qaldım ___ televizora baxdım." — əlavə:',                   tr: 'and',                            wrong: 'but'                          },
  { en: '"Qəzet aldım ___ oxumadım." — ziddiyyət:',                        tr: 'but',                            wrong: 'and'                          },
  { en: '"Çay istəyirsən ___ qəhvə?" — seçim:',                           tr: 'or',                             wrong: 'and'                          },
  { en: '"İsti idi, ___ pəncərəni açdım." — nəticə:',                     tr: 'so',                             wrong: 'because'                      },
  { en: '"Pəncərəni açdım ___ isti idi." — səbəb:',                       tr: 'because',                        wrong: 'so'                           },
  { en: '"Yorğun idim ___ erkən yatdım." — nəticə:',                      tr: 'so',                             wrong: 'but'                          },
  { en: '"Erkən yatdım ___ yorğun idim." — səbəb:',                       tr: 'because',                        wrong: 'and'                          },
  { en: '"Filmi sevdim ___ çox uzun idi." — ziddiyyət:',                  tr: 'but',                            wrong: 'and'                          },
  { en: 'Siyahıda "and" hansı mövqedə işlənir?',                          tr: 'yalnız sonuncu iki element arasında', wrong: 'hər elementdən əvvəl'    },
  { en: '"Gəlmək istəyirsən ___ burada gözləyim?" — seçim:',              tr: 'or',                             wrong: 'but'                          },
  { en: '"Avtobusu qaçırdı, ___ gecikdi." — nəticə:',                     tr: 'so',                             wrong: 'because'                      },
  { en: '"Gecikdi, ___ avtobusu qaçırmışdı." — səbəb:',                  tr: 'because',                        wrong: 'so'                           },
  { en: '"because" cümlənin əvvəlində işlənəndə sonra nə gəlir?',         tr: 'vergül',                         wrong: 'nöqtə'                        },
  { en: '"Gec idi ___ yorğun idim, ona görə erkən yatdım." — əlavə:',     tr: 'and',                            wrong: 'but'                          },
  { en: '"Mağaza bağlı idi, ___ evə qayıtdıq." — nəticə:',               tr: 'so',                             wrong: 'but'                          },
  { en: '"so" nəyi bildirir?',                                             tr: 'nəticəni',                       wrong: 'səbəbi'                       },
  { en: '"because" nəyi bildirir?',                                        tr: 'səbəbi',                         wrong: 'nəticəni'                     },
  { en: '"Zəng etmək istədim ___ nömrən yox idi." — ziddiyyət:',          tr: 'but',                            wrong: 'so'                           },
  { en: '"Açı idim, ___ sendviç etdim." — nəticə:',                       tr: 'so',                             wrong: 'because'                      },
  { en: '"Gözəl şəhərdir ___ çox böyükdür, ___ ora köçmərəm." — iki bağlayıcı:', tr: 'but ... because',        wrong: 'and ... so'                   },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Qəzet aldım amma oxumadım.',
      words: ['I', 'bought', 'a', 'newspaper', 'but', 'I', 'didn\'t', 'read', 'it', 'and', 'so'],
      answer: ['I', 'bought', 'a', 'newspaper', 'but', 'I', 'didn\'t', 'read', 'it'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İsti idi, ona görə pəncərəni açdım.',
      words: ['It', 'was', 'hot,', 'so', 'I', 'opened', 'the', 'window', 'because', 'but'],
      answer: ['It', 'was', 'hot,', 'so', 'I', 'opened', 'the', 'window'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Pəncərəni açdım çünki isti idi.',
      words: ['I', 'opened', 'the', 'window', 'because', 'it', 'was', 'hot', 'so', 'but'],
      answer: ['I', 'opened', 'the', 'window', 'because', 'it', 'was', 'hot'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Evə gəldim, yedim, oturdum və yuxuya getdim.',
      words: ['I', 'got', 'home,', 'had', 'something', 'to', 'eat,', 'sat', 'down', 'and', 'fell', 'asleep', 'but', 'so'],
      answer: ['I', 'got', 'home,', 'had', 'something', 'to', 'eat,', 'sat', 'down', 'and', 'fell', 'asleep'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Gec idi və yorğun idim, ona görə yatmağa getdim.',
      words: ['It', 'was', 'late', 'and', 'I', 'was', 'tired,', 'so', 'I', 'went', 'to', 'bed', 'because', 'but'],
      answer: ['It', 'was', 'late', 'and', 'I', 'was', 'tired,', 'so', 'I', 'went', 'to', 'bed'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Londonu sevərəm amma ora yaşamaq istəmərəm çünki çox böyükdür.',
      words: ['I', 'love', 'London', 'but', 'I', 'wouldn\'t', 'live', 'there', 'because', 'it\'s', 'too', 'big', 'so', 'and'],
      answer: ['I', 'love', 'London', 'but', 'I', 'wouldn\'t', 'live', 'there', 'because', 'it\'s', 'too', 'big'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çıxmaq istəyirsən yoxsa burada qalmağı üstün tutursan?',
      words: ['Do', 'you', 'want', 'to', 'go', 'out', 'or', 'would', 'you', 'prefer', 'to', 'stay', 'but', 'and'],
      answer: ['Do', 'you', 'want', 'to', 'go', 'out', 'or', 'would', 'you', 'prefer', 'to', 'stay'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çünki hava pisdi, evdə qaldıq.',
      words: ['Because', 'the', 'weather', 'was', 'bad,', 'we', 'stayed', 'at', 'home', 'So', 'But'],
      answer: ['Because', 'the', 'weather', 'was', 'bad,', 'we', 'stayed', 'at', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O, gözəl mənzildir amma bağçası yoxdur.',
      words: ['It\'s', 'a', 'nice', 'flat', 'but', 'it', 'hasn\'t', 'got', 'a', 'garden', 'and', 'so'],
      answer: ['It\'s', 'a', 'nice', 'flat', 'but', 'it', 'hasn\'t', 'got', 'a', 'garden'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Maşın bağlı idi, ona görə avtobusu tutdum.',
      words: ['The', 'car', 'was', 'broken,', 'so', 'I', 'took', 'the', 'bus', 'because', 'but'],
      answer: ['The', 'car', 'was', 'broken,', 'so', 'I', 'took', 'the', 'bus'],
    },
  ],
},
      
{ type: 'section_divider', title: 'because / although / however' },

// ── UNIT 37 — because / although / however / despite — Səbəb və Ziddiyyət ────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'because / although / however / despite (Dərs 1)',
  cards: [

    // ── Ekran 1: because — səbəb bildirmək ───────────────────────────────────
    {
      type: 'lesson',
      title: 'because — səbəb bildirmək',
      content: 'because = çünki\nİki cümləni birləşdirir, səbəbi izah edir.\n\nSubject + Verb + because + Subject + Verb\n\n❗ because cümlənin əvvəlində də işlədilə bilər — məna dəyişmir!',
      examples: [
        { word: 'I was late because the bus didn\'t come.',         az: 'because — niyə gecikmisən?' },
        { word: 'She stayed home because she felt ill.',            az: 'because — niyə evdə qaldı?' },
        { word: 'He couldn\'t come because he had to work.',        az: 'because — niyə gəlmədi?'   },
        { word: 'Because it was cold, we didn\'t go out.',          az: 'cümlənin əvvəlində because' },
        { word: 'Because she studied hard, she passed.',            az: 'cümlənin əvvəlində because' },
      ],
      tip: 'because — səbəb bildirir (niyə?). so — nəticə bildirir (nə oldu?).',
    },

    // ── Ekran 2: although — ziddiyyət (bağlayıcı) ────────────────────────────
    {
      type: 'lesson',
      title: 'although — ziddiyyət bildirmək',
      content: 'although = baxmayaraq ki, hərçənd\nİki cümləni birləşdirir — gözlənilməz nəticə bildirir.\n\nalthough cümlənin əvvəlində və ya ortasında işlədilə bilər:',
      examples: [
        { word: 'Although it was raining, we went out.',            az: 'yağış yağırdı, amma çıxdıq'      },
        { word: 'Although she was tired, she kept working.',        az: 'yorğun idi, amma davam etdi'     },
        { word: 'I liked the book although it was very long.',      az: 'uzun idi, amma bəyəndim'         },
        { word: 'He passed the test although he didn\'t prepare.',  az: 'hazırlaşmadı, amma keçdi'        },
        { word: 'Although he was young, he was very responsible.',  az: 'gənc idi, amma məsuliyyətli idi' },
      ],
      tip: 'although-dan sonra tam cümlə gəlir. Mənası: gözlənilməz, təəccüblü nəticə.',
    },

    // ── Ekran 3: however — ziddiyyət (əlaqələndirici) ────────────────────────
    {
      type: 'lesson',
      title: 'however — iki ayrı cümləni əlaqələndirmək',
      content: 'however = lakin, bununla belə\nİki ayrı cümləni əlaqələndirir.\n\n❗ however cümlənin əvvəlində gəlir və mütləq vergül ilə ayrılır:',
      examples: [
        { word: 'The hotel was old. However, it was very clean.',   az: 'however + vergül'             },
        { word: 'She worked very hard. However, she didn\'t get a promotion.', az: 'however + vergül'  },
        { word: 'I liked the jacket. However, it was too expensive.',          az: 'however + vergül'  },
        { word: 'The weather was cold. However, we enjoyed the day.',          az: 'however + vergül'  },
      ],
      tip: '❗ however-dən sonra mütləq vergül gəlir: "However, ..." — vergülsüz olmaz!',
    },

    // ── Ekran 4: despite / in spite of ───────────────────────────────────────
    {
      type: 'lesson',
      title: 'despite / in spite of — önlük ilə ziddiyyət',
      content: 'despite / in spite of = -a/-ə baxmayaraq\n\n❗ Bunlardan sonra isim və ya -ing forması gəlir — tam cümlə gəlmir!',
      table: [
        ['Forma',                    'Nümunə'],
        ['despite + isim',           'Despite the rain, we went out.'],
        ['despite + being/doing',    'Despite being tired, she continued.'],
        ['in spite of + isim',       'In spite of the cold, they played.'],
        ['in spite of + being/doing','In spite of feeling ill, she smiled.'],
      ],
      tip: '❌ Despite she was tired → Yanlış! ✅ Despite being tired → Düzgün! Tam cümlə gəlmir.',
    },

    // ── Ekran 5: Müqayisə cədvəli ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'although / however / despite — müqayisə',
      content: 'Eyni mənanı üç cür ifadə etmək mümkündür:',
      table: [
        ['Bağlayıcı',          'Forma',              'Nümunə'],
        ['although',           'although + cümlə',   'Although it was cold, we swam.'],
        ['however',            'however, + cümlə',   'It was cold. However, we swam.'],
        ['despite/in spite of','despite + isim/ing',  'Despite the cold, we swam.'],
      ],
      tip: 'although → birbaşa birləşdirir | however → nöqtə ilə ayırır | despite → isim/ing alır.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'I stayed home because I felt tired.',
            'I stayed home although I felt tired.',
            'I stayed home however I felt tired.',
          ],
          answer: 'I stayed home because I felt tired.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'Although the film was long, but I enjoyed it.',
            'Although the film was long, I enjoyed it.',
            'Although the film was long however I enjoyed it.',
          ],
          answer: 'Although the film was long, I enjoyed it.',
        },
        {
          q: '"however" düzgün işlədilmiş cümləni seç:',
          options: [
            'The room was small however it was comfortable.',
            'The room was small. However, it was comfortable.',
            'However the room was small, it was comfortable.',
          ],
          answer: 'The room was small. However, it was comfortable.',
        },
        {
          q: '"despite" düzgün işlədilmiş cümləni seç:',
          options: [
            'Despite she was nervous, she spoke well.',
            'Despite of being nervous, she spoke well.',
            'Despite being nervous, she spoke well.',
          ],
          answer: 'Despite being nervous, she spoke well.',
        },
        {
          q: '"despite"-dan sonra nə gəlir?',
          options: [
            'Tam cümlə (subject + verb)',
            'İsim və ya -ing forması',
            'although / however',
          ],
          answer: 'İsim və ya -ing forması',
        },
        {
          q: 'Boşluğu doldur: She passed the exam ___ she barely studied.',
          options: ['because', 'although', 'however'],
          answer: 'although',
        },
        {
          q: '"however" işlədilən cümlədə vergül harada gəlir?',
          options: [
            'however-dən əvvəl',
            'however-dən sonra',
            'vergül lazım deyil',
          ],
          answer: 'however-dən sonra',
        },
        {
          q: 'Eyni məna: "Although it rained, we went hiking." → "Despite ___"',
          options: [
            'Despite it rained, we went hiking.',
            'Despite the rain, we went hiking.',
            'Despite raining, however we went hiking.',
          ],
          answer: 'Despite the rain, we went hiking.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'because / although / however / despite — Təkmilləşdirmə (Dərs 2)',
  cards: [

    // ── Ekran 1: because vs so ────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'because — so müqayisəsi',
      content: 'because → səbəb bildirir (niyə?)\nso → nəticə bildirir (nə oldu?)\n\nHər iki cümlə eyni hadisəni fərqli yöndən izah edir:',
      table: [
        ['because (səbəb)',                              'so (nəticə)'],
        ['I was tired because I didn\'t sleep.',         'I didn\'t sleep, so I was tired.'],
        ['She was late because the bus broke down.',     'The bus broke down, so she was late.'],
        ['We stayed in because it was raining.',         'It was raining, so we stayed in.'],
        ['He failed because he didn\'t prepare.',        'He didn\'t prepare, so he failed.'],
      ],
      tip: 'because-dən əvvəl nəticə, sonra səbəb gəlir. so-dan əvvəl səbəb, sonra nəticə gəlir.',
    },

    // ── Ekran 2: Xəta düzəltmə ───────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'Bu bağlayıcılarla ən çox edilən səhvlər:',
      examples: [
        { word: 'Although it was cold, but we went out.',         az: '❌ although + but olmaz — birini sil'              },
        { word: 'Although it was cold, we went out.',             az: '✅ Düzgün — yalnız although'                      },
        { word: 'Despite she was tired, she worked.',             az: '❌ despite-dan sonra tam cümlə olmaz'             },
        { word: 'Despite being tired, she worked.',               az: '✅ Düzgün — despite + being'                      },
        { word: 'I was hungry. However I didn\'t eat.',           az: '❌ however-dən sonra vergül lazımdır'             },
        { word: 'I was hungry. However, I didn\'t eat.',          az: '✅ Düzgün — however + vergül'                    },
        { word: 'Despite of the noise, she slept.',               az: '❌ "despite of" olmaz — yalnız "despite"'         },
        { word: 'Despite the noise, she slept.',                  az: '✅ Düzgün — despite + isim (of olmadan)'         },
      ],
      tip: '"despite of" — yanlış forma. Yalnız "despite" və ya "in spite of" işlədilir.',
    },

    // ── Ekran 3: Praktik nümunələr ────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Bütün bağlayıcılarla nümunələr',
      content: 'Eyni vəziyyəti dörd cür ifadə etmək:',
      examples: [
        { word: 'She is very busy because she has three jobs.',           az: 'because — səbəb'           },
        { word: 'Although she is very busy, she finds time for family.',  az: 'although — ziddiyyət'      },
        { word: 'She is very busy. However, she never complains.',        az: 'however — ziddiyyət'       },
        { word: 'Despite being very busy, she looks relaxed.',           az: 'despite — ziddiyyət'       },
        { word: 'We couldn\'t find a seat because the café was full.',   az: 'because — səbəb'           },
        { word: 'Although the café was full, we managed to get a table.',az: 'although — ziddiyyət'      },
        { word: 'The café was full. However, the staff found us seats.', az: 'however — ziddiyyət'       },
        { word: 'Despite the café being full, we found a place to sit.', az: 'despite — ziddiyyət'       },
      ],
      tip: 'Eyni məna — fərqli quruluş. Hansını seçmək kontekstdən asılıdır.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I was cold because ___" — bu cümləni tamamla:',
          options: [
            'I forgot my jacket.',
            'I put on my jacket.',
            'however I put on my coat.',
          ],
          answer: 'I forgot my jacket.',
        },
        {
          q: 'Xətanı tap:',
          options: [
            'Despite of the traffic, we arrived on time.',
            'Despite the traffic, we arrived on time.',
            'In spite of the traffic, we arrived on time.',
          ],
          answer: 'Despite the traffic, we arrived on time.',
        },
        {
          q: '"Although she ___ tired, she ___ working." — boşluqları doldur:',
          options: [
            'was / continued',
            'is / continues',
            'was / had continued',
          ],
          answer: 'was / continued',
        },
        {
          q: '"The food was delicious. ___, it was very cheap." — boşluğa nə gəlir?',
          options: ['Although', 'However', 'Despite'],
          answer: 'However',
        },
        {
          q: '"___ not studying, he got a high mark." — boşluğa nə gəlir?',
          options: ['Although', 'However', 'Despite'],
          answer: 'Despite',
        },
        {
          q: '"She didn\'t eat anything, ___ she was very hungry." — boşluğa nə gəlir?',
          options: ['because', 'although', 'however'],
          answer: 'although',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'He was ill. However he went to work.',
            'He was ill. However, he went to work.',
            'He was ill, however, he went to work.',
          ],
          answer: 'He was ill. However, he went to work.',
        },
        {
          q: '"She didn\'t sleep well, ___ she was exhausted the next day." → so/because?',
          options: [
            'so — nəticə bildirir',
            'because — nəticə bildirir',
            'although — səbəb bildirir',
          ],
          answer: 'so — nəticə bildirir',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'because — nə bildirir?',                                       tr: 'Səbəb (niyə?)',                      wrong: 'Ziddiyyət'                           },
  { en: 'although — nə bildirir?',                                      tr: 'Ziddiyyət (gözlənilməz nəticə)',     wrong: 'Səbəb'                               },
  { en: 'however-dən sonra nə işlədilir?',                              tr: 'Vergül (However,)',                  wrong: 'Nöqtəli vergül'                      },
  { en: 'despite-dan sonra nə gəlir?',                                  tr: 'İsim və ya -ing forması',            wrong: 'Tam cümlə'                           },
  { en: '"Despite ___ ill, he came." — boşluğa nə gəlir?',             tr: 'being',                              wrong: 'he was'                              },
  { en: '"I was tired ___ I worked all day." — boşluğa nə gəlir?',     tr: 'because',                            wrong: 'although'                            },
  { en: '"___ she was nervous, she spoke well." — boşluğa nə gəlir?',  tr: 'Although',                           wrong: 'Despite'                             },
  { en: '"The room was small. ___, it was cosy." — boşluğa nə gəlir?', tr: 'However,',                           wrong: 'Although'                            },
  { en: '"despite of" — düzgündürmü?',                                  tr: 'Yanlış — yalnız "despite" işlədilir', wrong: 'Düzgün'                             },
  { en: '"Although + but" — düzgündürmü?',                              tr: 'Yanlış — birini silmək lazımdır',    wrong: 'Düzgün'                              },
  { en: '"In spite of ___ tired, she smiled." — boşluğa nə gəlir?',    tr: 'being',                              wrong: 'she was'                             },
  { en: '"I didn\'t sleep. ___ I was tired all day." — boşluğa nə?',   tr: 'So,',                                wrong: 'However,'                            },
  { en: '"___ the weather, the picnic was fun." — boşluğa nə gəlir?',  tr: 'Despite',                            wrong: 'Although'                            },
  { en: '"She passed the exam ___ it was difficult." — boşluğa nə?',   tr: 'although',                           wrong: 'because'                             },
  { en: 'however — hansı cümlə formasında işlədilir?',                  tr: 'İki ayrı cümlə arasında',            wrong: 'İki cümləni birbaşa birləşdirir'      },
  { en: '"___ being expensive, the hotel was worth it." → düzgün?',     tr: 'Despite being expensive, ...',       wrong: 'Although being expensive, ...'       },
  { en: '"We went out ___ it was cold." — ziddiyyət bildirmək üçün:',   tr: 'although',                           wrong: 'because'                             },
  { en: '"The traffic was heavy. ___, we arrived early." — boşluğa?',   tr: 'However,',                           wrong: 'Although,'                           },
  { en: '"___ not having a map, they found the place." → boşluğa?',    tr: 'Despite',                            wrong: 'However'                             },
  { en: '"because vs so" — fərq nədir?',                                tr: 'because=səbəb, so=nəticə',           wrong: 'Fərq yoxdur, eynidir'                },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Yağış yağdığı üçün evdə qaldıq.',
      words: ['We', 'stayed', 'home', 'because', 'it', 'was', 'raining', 'although', 'however'],
      answer: ['We', 'stayed', 'home', 'because', 'it', 'was', 'raining'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yorğun olmasına baxmayaraq işləməyə davam etdi.',
      words: ['Although', 'she', 'was', 'tired', 'she', 'continued', 'working', 'but', 'however'],
      answer: ['Although', 'she', 'was', 'tired', 'she', 'continued', 'working'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Otel köhnə idi. Lakin çox təmiz idi.',
      words: ['The', 'hotel', 'was', 'old', 'However', 'it', 'was', 'very', 'clean', 'Although', 'Despite'],
      answer: ['The', 'hotel', 'was', 'old', 'However', 'it', 'was', 'very', 'clean'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yorğunluğuna baxmayaraq gülümsədi.',
      words: ['Despite', 'being', 'tired', 'she', 'smiled', 'she', 'was', 'Although', 'of'],
      answer: ['Despite', 'being', 'tired', 'she', 'smiled'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Film çox uzun idi, lakin bəyəndim.',
      words: ['I', 'liked', 'the', 'film', 'although', 'it', 'was', 'very', 'long', 'but', 'however'],
      answer: ['I', 'liked', 'the', 'film', 'although', 'it', 'was', 'very', 'long'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yağışa baxmayaraq oynadılar.',
      words: ['Despite', 'the', 'rain', 'they', 'played', 'football', 'Although', 'of', 'Despite of'],
      answer: ['Despite', 'the', 'rain', 'they', 'played', 'football'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hazırlaşmadığına baxmayaraq imtahanı keçdi.',
      words: ['He', 'passed', 'the', 'exam', 'despite', 'not', 'studying', 'studied', 'although', 'he'],
      answer: ['He', 'passed', 'the', 'exam', 'despite', 'not', 'studying'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Soyuq havaya baxmayaraq üzdük.',
      words: ['In', 'spite', 'of', 'the', 'cold', 'we', 'went', 'swimming', 'Despite of', 'Although'],
      answer: ['In', 'spite', 'of', 'the', 'cold', 'we', 'went', 'swimming'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O çox gənc idi. Lakin çox məsuliyyətli idi.',
      words: ['He', 'was', 'very', 'young', 'However', 'he', 'was', 'very', 'responsible', 'Although', 'but'],
      answer: ['He', 'was', 'very', 'young', 'However', 'he', 'was', 'very', 'responsible'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'İş çox çətin idi. Lakin əksər tələbələr keçdi.',
      words: ['The', 'exam', 'was', 'difficult', 'However', 'most', 'students', 'passed', 'Although', 'Despite', 'but'],
      answer: ['The', 'exam', 'was', 'difficult', 'However', 'most', 'students', 'passed'],
    },
  ],
},
      
{ type: 'section_divider', title: 'when / while / before / after' },

// ── UNIT 38 — when / while / before / after — Zaman Bağlayıcıları ────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'when / while / before / after — Zaman Bağlayıcıları (Dərs 1)',
  cards: [

    // ── Ekran 1: when ─────────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'when — nə zaman, -dığı zaman',
      content: 'when + cümlə — iki hadisə eyni anda baş verir və ya biri digərini tetikləyir.\n\nwhen cümlənin əvvəlində və ya ortasında işlədilə bilər:',
      examples: [
        { word: 'When I arrived home, everyone was asleep.',       az: 'when — əvvəldə, vergül lazımdır'    },
        { word: 'I was reading a book when the phone rang.',       az: 'when — ortada, vergül yoxdur'       },
        { word: 'When I was a child, I loved swimming.',           az: 'when — keçmiş vərdiş'               },
        { word: 'She was cooking dinner when I walked in.',        az: 'when — eyni anda iki hadisə'        },
      ],
      tip: '❗ Gələcək mənada when-dən sonra will yox, Present Simple işlədilir:\n"When I get home, I\'ll call you." — (not "when I will get")',
    },

    // ── Ekran 2: while ────────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'while — -dığı müddətdə, eyni zamanda',
      content: 'while + cümlə — iki hadisə eyni anda paralel davam edir.\n\nwhile vs during fərqi:',
      table: [
        ['while + cümlə (fel var)',               'during + isim (fel yoxdur)'],
        ['We didn\'t talk while we were eating.',  'We didn\'t talk during the meal.'],
        ['I fell asleep while I was watching TV.', 'I fell asleep during the film.'],
        ['She listened to music while she worked.','She listened during the lesson.'],
      ],
      tip: 'while → sonra cümlə gəlir (subject + verb). during → sonra isim gəlir.',
    },

    // ── Ekran 3: before ───────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'before — -dən əvvəl',
      content: 'before + cümlə — bir hadisə digərindən əvvəl baş verir.\n\nbefore + -ing forması da işlədilə bilər:',
      examples: [
        { word: 'Always look both ways before you cross the road.',  az: 'before + cümlə'         },
        { word: 'Before you leave, please turn off the lights.',     az: 'before — əvvəldə, vergül'},
        { word: 'I had a shower before I went to bed.',              az: 'before + cümlə'         },
        { word: 'I always make a list before going shopping.',       az: 'before + -ing'          },
        { word: 'Before opening the door, she checked who it was.',  az: 'before + -ing — əvvəldə'},
      ],
      tip: '❌ before to go → Yanlış! ✅ before going → Düzgün. "-ing" forması işlədilir.',
    },

    // ── Ekran 4: after ────────────────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'after — -dən sonra',
      content: 'after + cümlə — bir hadisə digərindən sonra baş verir.\n\nafter + -ing forması da işlədilə bilər:',
      examples: [
        { word: 'After the match ended, everyone went home.',        az: 'after + cümlə'          },
        { word: 'She felt much better after she had some rest.',     az: 'after + cümlə'          },
        { word: 'After finishing work, he usually goes for a walk.', az: 'after + -ing'           },
        { word: 'I started cooking after reading the recipe.',       az: 'after + -ing'           },
        { word: 'After the concert, we went to a café.',             az: 'after + isim'           },
      ],
      tip: '❌ after to eat → Yanlış! ✅ after eating → Düzgün. Gələcəkdə: "after I get" (will yox).',
    },

    // ── Ekran 5: Gələcək zaman + vergül qaydası ───────────────────────────────
    {
      type: 'lesson',
      title: 'Gələcək zaman + vergül qaydası',
      content: 'when / while / before / after ilə gələcək mənada will yox, Present Simple işlədilir:',
      table: [
        ['❌ Yanlış',                      '✅ Düzgün'],
        ['When I will get home...',        'When I get home...'],
        ['before you will go out...',      'before you go out...'],
        ['while we will be away...',       'while we are away...'],
        ['after she will finish...',       'after she finishes...'],
      ],
      tip: 'Bağlayıcı cümlənin əvvəlindədirsə vergül lazımdır: "When I got home, I had dinner." Ortadadırsa vergül yoxdur.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'When I will finish work, I\'ll call you.',
            'When I finish work, I\'ll call you.',
            'When I finished work, I\'ll call you.',
          ],
          answer: 'When I finish work, I\'ll call you.',
        },
        {
          q: '"while vs during" — düzgün cümləni seç:',
          options: [
            'I fell asleep while the film.',
            'I fell asleep during the film.',
            'I fell asleep during I was watching.',
          ],
          answer: 'I fell asleep during the film.',
        },
        {
          q: '"before + -ing" — düzgün formanı seç:',
          options: [
            'Before to leave, she locked the door.',
            'Before leaving, she locked the door.',
            'Before leave, she locked the door.',
          ],
          answer: 'Before leaving, she locked the door.',
        },
        {
          q: '"after + -ing" — düzgün formanı seç:',
          options: [
            'After to finish dinner, we watched a film.',
            'After finish dinner, we watched a film.',
            'After finishing dinner, we watched a film.',
          ],
          answer: 'After finishing dinner, we watched a film.',
        },
        {
          q: 'Vergül qaydası — hansı cümlə düzgündür?',
          options: [
            'I had breakfast, when I woke up.',
            'When I woke up I had breakfast.',
            'When I woke up, I had breakfast.',
          ],
          answer: 'When I woke up, I had breakfast.',
        },
        {
          q: 'Boşluğu doldur: "She was listening to music ___ she cooked dinner."',
          options: ['when', 'while', 'after'],
          answer: 'while',
        },
        {
          q: '"We didn\'t talk ___ the journey." — boşluğa nə gəlir?',
          options: ['while', 'during', 'when'],
          answer: 'during',
        },
        {
          q: 'Gələcək + before — düzgün cümləni seç:',
          options: [
            'Call me before you will leave.',
            'Call me before you leave.',
            'Call me before you are leaving.',
          ],
          answer: 'Call me before you leave.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'when / while / before / after — Təkmilləşdirmə (Dərs 2)',
  cards: [

    // ── Ekran 1: while vs when fərqi ──────────────────────────────────────────
    {
      type: 'lesson',
      title: 'when vs while — fərq',
      content: 'when → ani hadisə. while → davam edən hadisə (background action).\n\nBir cümlədə ikisi birlikdə işlədilə bilər:',
      examples: [
        { word: 'I was walking home when it started to rain.',      az: 'while(davam) + when(ani)'     },
        { word: 'While I was cooking, the smoke alarm went off.',   az: 'while(davam) + ani hadisə'    },
        { word: 'When the doorbell rang, I was having a shower.',   az: 'when(ani) + while(davam)'     },
        { word: 'She cut her finger while she was chopping onions.',az: 'while(davam) + ani hadisə'    },
        { word: 'When he walked into the room, everyone stood up.', az: 'when — ani, nəticə tetikləyir'},
      ],
      tip: 'while + was/were doing (davam edən). when + keçmiş sadə forma (ani, tamamlanmış).',
    },

    // ── Ekran 2: before / after — sıra bildirir ───────────────────────────────
    {
      type: 'lesson',
      title: 'before / after — hadisə sırası',
      content: 'before / after iki hadisənin sırasını bildirir. Eyni məna fərqli quruluşla ifadə oluna bilər:',
      table: [
        ['before + cümlə',                                'after + cümlə'],
        ['Before she left, she said goodbye.',             'After she said goodbye, she left.'],
        ['He checked his bag before he locked the door.',  'He locked the door after he checked his bag.'],
        ['Before eating, she always washes her hands.',    'After washing her hands, she eats.'],
        ['I had a coffee before I started work.',          'After having a coffee, I started work.'],
      ],
      tip: 'before → önce olan hadisəni, after → sonra olan hadisəni əsas olaraq vurğulayır.',
    },

    // ── Ekran 3: Tez-tez edilən səhvlər ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'Bu bağlayıcılarla ən çox edilən səhvlər:',
      examples: [
        { word: 'When I will arrive, I\'ll phone you.',             az: '❌ will + when olmaz'              },
        { word: 'When I arrive, I\'ll phone you.',                  az: '✅ Düzgün — Present Simple'        },
        { word: 'While the lesson, I was bored.',                   az: '❌ while + isim olmaz'             },
        { word: 'During the lesson, I was bored.',                  az: '✅ Düzgün — during + isim'         },
        { word: 'After to finish work, she went home.',             az: '❌ after to + verb olmaz'          },
        { word: 'After finishing work, she went home.',             az: '✅ Düzgün — after + -ing'          },
        { word: 'I met her when I was waited for the bus.',         az: '❌ was waited — yanlış forma'      },
        { word: 'I met her when I was waiting for the bus.',        az: '✅ Düzgün — was waiting'           },
      ],
      tip: 'while → cümlə (subject+verb) | during → isim | before/after → cümlə və ya -ing.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I was reading ___ the phone rang." — boşluğa nə gəlir?',
          options: ['while', 'when', 'after'],
          answer: 'when',
        },
        {
          q: '"___ the meeting, nobody spoke." — boşluğa nə gəlir?',
          options: ['While', 'During', 'When'],
          answer: 'During',
        },
        {
          q: '"She checked her messages ___ waiting for the train." — boşluğa?',
          options: ['when', 'during', 'while'],
          answer: 'while',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'After to study, he felt confident.',
            'After studying, he felt confident.',
            'After study, he felt confident.',
          ],
          answer: 'After studying, he felt confident.',
        },
        {
          q: '"Before you ___ out, close the window." — gələcək, boşluğa nə?',
          options: ['will go', 'go', 'are going'],
          answer: 'go',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'While I was asleep, someone knocked on the door.',
            'While I slept, someone knocked on the door.',
            'While I sleeping, someone knocked on the door.',
          ],
          answer: 'While I was asleep, someone knocked on the door.',
        },
        {
          q: '"He left the office ___ finishing the report." → before/after?',
          options: [
            'before — hesabatı bitirmədən getdi',
            'after — hesabatı bitirib getdi',
            'when — eyni anda getdi',
          ],
          answer: 'after — hesabatı bitirib getdi',
        },
        {
          q: '"___ I get paid, I\'ll pay you back." — boşluğa nə gəlir?',
          options: ['While', 'When', 'During'],
          answer: 'When',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'when — nə bildirir?',                                              tr: 'Eyni anda / biri digərini tetikləyir',  wrong: 'Ziddiyyət'                        },
  { en: 'while — nə bildirir?',                                             tr: 'Paralel davam edən hadisələr',          wrong: 'Bir-birinin ardınca hadisələr'     },
  { en: 'before — nə bildirir?',                                            tr: 'Bir hadisə digərindən əvvəl',           wrong: 'Bir hadisə digərindən sonra'       },
  { en: 'after — nə bildirir?',                                             tr: 'Bir hadisə digərindən sonra',           wrong: 'Paralel davam edən hadisələr'      },
  { en: 'while vs during — fərq nədir?',                                   tr: 'while+cümlə, during+isim',              wrong: 'Fərq yoxdur, eynidir'             },
  { en: '"When I ___ home, I\'ll have dinner." — boşluğa nə gəlir?',      tr: 'get',                                   wrong: 'will get'                         },
  { en: '"___ the flight, she read a book." — boşluğa nə gəlir?',         tr: 'During',                                wrong: 'While'                            },
  { en: '"Before ___ out, she locked the door." — boşluğa nə gəlir?',     tr: 'going',                                 wrong: 'to go'                            },
  { en: '"After ___ the film, we went home." — boşluğa nə gəlir?',        tr: 'watching',                              wrong: 'to watch'                         },
  { en: 'Gələcək + when/while/before/after — hansı forma işlədilir?',      tr: 'Present Simple (will yox)',             wrong: 'will + verb'                      },
  { en: '"I was cooking ___ he arrived." — boşluğa nə gəlir?',            tr: 'when',                                  wrong: 'while'                            },
  { en: '"She listened to music ___ she was running." — boşluğa nə?',     tr: 'while',                                 wrong: 'during'                           },
  { en: 'Bağlayıcı cümlənin əvvəlindədirsə vergül:',                      tr: 'Lazımdır',                              wrong: 'Lazım deyil'                      },
  { en: 'Bağlayıcı cümlənin ortasındadırsa vergül:',                      tr: 'Lazım deyil',                           wrong: 'Lazımdır'                         },
  { en: '"Before you ___ out, put on your coat." — boşluğa nə gəlir?',    tr: 'go',                                    wrong: 'will go'                          },
  { en: '"___ I was waiting, it began to rain." — boşluğa nə gəlir?',     tr: 'While',                                 wrong: 'During'                           },
  { en: '"after to eat" — düzgündürmü?',                                   tr: 'Yanlış — after eating işlədilir',       wrong: 'Düzgün'                           },
  { en: '"while + isim" — düzgündürmü?',                                   tr: 'Yanlış — during + isim işlədilir',      wrong: 'Düzgün'                           },
  { en: '"I\'ll call you ___ I arrive." — boşluğa nə gəlir?',             tr: 'when',                                  wrong: 'while'                            },
  { en: '"___ leaving, he said goodbye to everyone." — boşluğa nə?',      tr: 'Before',                                wrong: 'While'                            },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Evə gəldiyimdə hamı yatmışdı.',
      words: ['When', 'I', 'got', 'home', 'everyone', 'was', 'asleep', 'while', 'will get'],
      answer: ['When', 'I', 'got', 'home', 'everyone', 'was', 'asleep'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən oxuyarkən telefon zəng etdi.',
      words: ['I', 'was', 'reading', 'when', 'the', 'phone', 'rang', 'while', 'during'],
      answer: ['I', 'was', 'reading', 'when', 'the', 'phone', 'rang'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Dərsdə bütün tələbələr çox diqqətli idi.',
      words: ['During', 'the', 'lesson', 'all', 'students', 'were', 'very', 'attentive', 'While', 'When'],
      answer: ['During', 'the', 'lesson', 'all', 'students', 'were', 'very', 'attentive'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çıxmazdan əvvəl işıqları söndür.',
      words: ['Before', 'going', 'out', 'turn', 'off', 'the', 'lights', 'to go', 'After'],
      answer: ['Before', 'going', 'out', 'turn', 'off', 'the', 'lights'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Alış-veriş etdikdən sonra evə getdilər.',
      words: ['After', 'doing', 'the', 'shopping', 'they', 'went', 'home', 'to do', 'Before'],
      answer: ['After', 'doing', 'the', 'shopping', 'they', 'went', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O musiqi dinləyirdi, mən isə yeməyi hazırlayırdım.',
      words: ['She', 'listened', 'to', 'music', 'while', 'I', 'was', 'cooking', 'when', 'during'],
      answer: ['She', 'listened', 'to', 'music', 'while', 'I', 'was', 'cooking'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Evə gəldikdə sənə zəng edəcəm.',
      words: ['I\'ll', 'call', 'you', 'when', 'I', 'get', 'home', 'will get', 'while'],
      answer: ['I\'ll', 'call', 'you', 'when', 'I', 'get', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Çıxmazdan əvvəl pəncərəni bağla.',
      words: ['Please', 'close', 'the', 'window', 'before', 'you', 'go', 'out', 'will go', 'after'],
      answer: ['Please', 'close', 'the', 'window', 'before', 'you', 'go', 'out'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O gənc ikən çox sürətli qaça bilirdi.',
      words: ['When', 'he', 'was', 'young', 'he', 'could', 'run', 'very', 'fast', 'while', 'during'],
      answer: ['When', 'he', 'was', 'young', 'he', 'could', 'run', 'very', 'fast'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yemək yedikdən sonra televizora baxdılar.',
      words: ['After', 'eating', 'dinner', 'they', 'watched', 'television', 'to eat', 'Before', 'during'],
      answer: ['After', 'eating', 'dinner', 'they', 'watched', 'television'],
    },
  ],
},
      
{ type: 'section_divider', title: 'if — birinci şərt cümləsi' },

// ── UNIT 39 — if — Birinci Şərt Cümləsi (First Conditional) ─────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'if — Birinci Şərt Cümləsi (Dərs 1)',
  cards: [

    // ── Ekran 1: Forma və quruluş ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Birinci Şərt Cümləsi — Forma',
      content: 'Birinci şərt cümləsi real ehtimal bildirir — bu hal baş verə bilər.\n\nIf + Present Simple → will / won\'t + fel\n\n❗ if hissəsindən sonra will işlədilmir — Present Simple işlədilir!',
      table: [
        ['if hissəsi (şərt)',      'nəticə hissəsi'],
        ['If it rains,',           'I\'ll stay at home.'],
        ['If you don\'t hurry,',   'you\'ll miss the train.'],
        ['If the phone rings,',    'can you answer it?'],
        ['If you\'re hungry,',     'have something to eat.'],
      ],
      tip: 'if cümlənin əvvəlindədirsə vergül lazımdır. Ortasındadırsa vergül yoxdur:\n"If it rains, I\'ll stay home." ✅  |  "I\'ll stay home if it rains." ✅',
    },

    // ── Ekran 2: if-dən sonra will yox, Present Simple ───────────────────────
    {
      type: 'lesson',
      title: 'if-dən sonra — will yox!',
      content: 'if-dən sonra will işlədilmir. Present Simple işlədilir:',
      examples: [
        { word: 'If it rains, I\'ll stay home.',             az: '✅ Düzgün — if + rains (Present Simple)'  },
        { word: 'If it will rain, I\'ll stay home.',         az: '❌ Yanlış — if + will rain olmaz'         },
        { word: 'If you see Ann, tell her I called.',        az: '✅ Düzgün — if + see (Present Simple)'   },
        { word: 'If you will see Ann, tell her.',            az: '❌ Yanlış — if + will see olmaz'         },
        { word: 'If I don\'t feel well, I\'ll rest.',        az: '✅ Düzgün — if + don\'t feel'            },
        { word: 'If I won\'t feel well, I\'ll rest.',        az: '❌ Yanlış — if + won\'t feel olmaz'      },
        { word: 'If there is a problem, call me.',           az: '✅ Düzgün — if + is (Present Simple)'   },
        { word: 'If there will be a problem, call me.',      az: '❌ Yanlış — if + will be olmaz'          },
      ],
      tip: 'Keçmiş zaman bağlayıcılarında olduğu kimi — if-dən sonra da will işlənmir.',
    },

    // ── Ekran 3: Nəticə hissəsinin müxtəlif formaları ────────────────────────
    {
      type: 'lesson',
      title: 'Nəticə hissəsinin müxtəlif formaları',
      content: 'Nəticə hissəsində yalnız will yox, başqa formalar da işlənə bilər:',
      table: [
        ['Nəticə forması', 'Nümunə'],
        ['will',           'If you study hard, you will pass.'],
        ['won\'t',         'If you don\'t hurry, you won\'t make it.'],
        ['can',            'If you need help, I can come.'],
        ['can\'t',         'If it\'s too expensive, I can\'t buy it.'],
        ['əmr cümləsi',   'If you\'re cold, put on your jacket.'],
      ],
      tip: 'can / can\'t — imkan bildirir. Əmr forması — tövsiyə / göstəriş bildirir.',
    },

    // ── Ekran 4: if vs when fərqi ─────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'if vs when — fərq',
      content: 'if → ehtimal (bəlkə baş verər, bəlkə yox)\nwhen → əminlik (mütləq baş verəcək)\n\nBu fərq cümlənin mənasını tamamilə dəyişir:',
      examples: [
        { word: 'If I go out, I\'ll close the window.',      az: 'if — bəlkə çıxaram, bəlkə yox'      },
        { word: 'When I go out, I\'ll close the window.',    az: 'when — çıxacağam, əminəm'            },
        { word: 'If I\'m late, don\'t wait for me.',         az: 'if — gec qalmayacağam, bəlkə'        },
        { word: 'When I get home, I\'ll have dinner.',       az: 'when — evə gedəcəyəm, əmin'          },
        { word: 'We\'ll play tennis if it doesn\'t rain.',   az: 'if — yağış yağıb-yağmayacaq?'        },
        { word: 'When she arrives, tell her to call me.',    az: 'when — gələcəyini bilirik'            },
      ],
      tip: 'Sadə sual: "Bu hadisə mütləq baş verəcəkmi?" → Bəli = when. Bilmirəm = if.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'If it will snow tomorrow, school will be cancelled.',
            'If it snows tomorrow, school will be cancelled.',
            'If it is snowing tomorrow, school will be cancelled.',
          ],
          answer: 'If it snows tomorrow, school will be cancelled.',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'If you will need help, call me.',
            'If you needed help, call me.',
            'If you need help, call me.',
          ],
          answer: 'If you need help, call me.',
        },
        {
          q: '"if vs when" — düzgün variantı seç: "___ I get to the office, I\'ll send the file."',
          options: [
            'If — getməyəcəm, bəlkə',
            'When — gedəcəm, əminəm',
            'Fərq yoxdur',
          ],
          answer: 'When — gedəcəm, əminəm',
        },
        {
          q: 'Nəticə hissəsində nə işlədilə bilər?',
          options: [
            'Yalnız will',
            'will / can / əmr forması',
            'Yalnız Present Simple',
          ],
          answer: 'will / can / əmr forması',
        },
        {
          q: '"If I ___ early, I\'ll call you." — boşluğa nə gəlir?',
          options: ['will finish', 'finish', 'finished'],
          answer: 'finish',
        },
        {
          q: 'Vergül qaydası — hansı cümlə düzgündür?',
          options: [
            'I\'ll stay home, if it rains.',
            'If it rains I\'ll stay home.',
            'If it rains, I\'ll stay home.',
          ],
          answer: 'If it rains, I\'ll stay home.',
        },
        {
          q: '"if vs when" — "___ you see Kate, give her this message."',
          options: [
            'When — Kate ilə mütləq görüşəcəksən',
            'If — Kate ilə görüşüb-görüşməyəcəyin bəlli deyil',
            'Fərq yoxdur',
          ],
          answer: 'If — Kate ilə görüşüb-görüşməyəcəyin bəlli deyil',
        },
        {
          q: 'Düzgün cümləni seç:',
          options: [
            'If he won\'t apologise, she won\'t forgive him.',
            'If he doesn\'t apologise, she won\'t forgive him.',
            'If he isn\'t apologise, she won\'t forgive him.',
          ],
          answer: 'If he doesn\'t apologise, she won\'t forgive him.',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'if — Birinci Şərt Cümləsi Təkmilləşdirmə (Dərs 2)',
  cards: [

    // ── Ekran 1: if cümlənin əvvəlində / ortasında ────────────────────────────
    {
      type: 'lesson',
      title: 'if — cümlənin əvvəlində və ortasında',
      content: 'if cümlənin əvvəlində işləndikdə vergül lazımdır.\nOrtasında işləndikdə vergül yoxdur.\n\nHər iki quruluşun mənası eynidir:',
      table: [
        ['if — əvvəldə (vergüllü)',             'if — ortada (vergülsüz)'],
        ['If we take the bus, it\'ll be cheaper.','It\'ll be cheaper if we take the bus.'],
        ['If she studies, she\'ll pass.',         'She\'ll pass if she studies.'],
        ['If you\'re tired, go to bed.',          'Go to bed if you\'re tired.'],
        ['If he calls, tell him I\'m busy.',      'Tell him I\'m busy if he calls.'],
      ],
      tip: 'Əvvəldə → vergül var. Ortada → vergül yoxdur. Məna eynidir.',
    },

    // ── Ekran 2: Tez-tez edilən səhvlər ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Tez-tez edilən səhvlər',
      content: 'Birinci Şərt Cümləsində ən çox edilən səhvlər:',
      examples: [
        { word: 'If it will rain, take an umbrella.',             az: '❌ if + will olmaz'                     },
        { word: 'If it rains, take an umbrella.',                 az: '✅ Düzgün — if + Present Simple'        },
        { word: 'If you won\'t be ready, I\'ll go alone.',        az: '❌ if + won\'t olmaz'                   },
        { word: 'If you\'re not ready, I\'ll go alone.',          az: '✅ Düzgün — if + aren\'t / not'         },
        { word: 'If he pass the exam, he\'ll celebrate.',         az: '❌ he passes — 3-cü şəxs -s lazımdır'  },
        { word: 'If he passes the exam, he\'ll celebrate.',       az: '✅ Düzgün — he/she/it + -s'            },
        { word: 'When I\'m not sure, I\'ll ask for help.',        az: '❌ when yox — bəlkə əmin olmayacam'    },
        { word: 'If I\'m not sure, I\'ll ask for help.',          az: '✅ Düzgün — ehtimal = if'              },
      ],
      tip: '3-cü şəxs tək (he/she/it) ilə Present Simple-də -s/-es yaddan çıxmır!',
    },

    // ── Ekran 3: Tam cümlə nümunələri ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Birinci Şərt — tam nümunələr',
      content: 'Müxtəlif nəticə formaları ilə nümunələr:',
      examples: [
        { word: 'If you go to bed early, you\'ll feel better tomorrow.',   az: 'will — nəticə'          },
        { word: 'If you\'re busy, we can meet another day.',               az: 'can — imkan'            },
        { word: 'If you\'re cold, put on a jumper.',                       az: 'əmr — tövsiyə'          },
        { word: 'I\'ll be surprised if they win the match.',               az: 'if — ortada'            },
        { word: 'If I don\'t see you later, I\'ll send you a message.',    az: 'inkar + will'           },
        { word: 'If the weather is nice, shall we have lunch outside?',    az: 'shall — təklif'         },
        { word: 'You can borrow the book if you promise to return it.',    az: 'can — şərtli icazə'     },
        { word: 'If he doesn\'t reply, I\'ll try again tomorrow.',         az: 'inkar + will'           },
      ],
      tip: 'Birinci Şərt = real dünyada mümkün olan hadisələr. İkinci Şərt = xəyali hadisələr (Unit 40).',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"If she ___ hard, she\'ll get a good result." — boşluğa nə gəlir?',
          options: ['will study', 'studies', 'studied'],
          answer: 'studies',
        },
        {
          q: '"___ I have time, I\'ll help you." — if/when?',
          options: [
            'When — vaxtım olacaq, əminəm',
            'If — vaxtım olub-olmayacaq, bəlli deyil',
            'Fərq yoxdur',
          ],
          answer: 'If — vaxtım olub-olmayacaq, bəlli deyil',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'If you will come early, we can have breakfast together.',
            'If you come early, we can have breakfast together.',
            'If you came early, we can have breakfast together.',
          ],
          answer: 'If you come early, we can have breakfast together.',
        },
        {
          q: '"It will be faster ___ we go by train." — vergül?',
          options: [
            'if, — vergül lazımdır',
            'if — vergül lazım deyil',
            'when, — vergül lazımdır',
          ],
          answer: 'if — vergül lazım deyil',
        },
        {
          q: 'Xətanı tap:',
          options: [
            'If he don\'t call, I\'ll go without him.',
            'If he doesn\'t call, I\'ll go without him.',
            'I\'ll go without him if he doesn\'t call.',
          ],
          answer: 'If he doesn\'t call, I\'ll go without him.',
        },
        {
          q: '"If you ___ the report by Friday, send it to the manager." → boşluğa?',
          options: ['will finish', 'finish', 'finished'],
          answer: 'finish',
        },
        {
          q: '"___ she arrives, I\'ll let you know." — if/when?',
          options: [
            'If — gəlib-gəlməyəcəyi bəlli deyil',
            'When — gələcəyini bilirik',
            'Fərq yoxdur',
          ],
          answer: 'When — gələcəyini bilirik',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'If the weather will be good, we\'ll have a picnic.',
            'If the weather is good, we\'ll have a picnic.',
            'If the weather is good, we have a picnic.',
          ],
          answer: 'If the weather is good, we\'ll have a picnic.',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Birinci Şərt Cümləsinin forması:',                                   tr: 'If + Present Simple + will',          wrong: 'If + will + will'                  },
  { en: 'if-dən sonra hansı forma işlədilir?',                                tr: 'Present Simple (will yox)',           wrong: 'will + fel'                        },
  { en: '"If it ___, I\'ll take an umbrella." — boşluğa nə gəlir?',          tr: 'rains',                               wrong: 'will rain'                         },
  { en: '"If you ___ tired, go to bed." — boşluğa nə gəlir?',               tr: 'are',                                 wrong: 'will be'                           },
  { en: 'if vs when — fərq nədir?',                                           tr: 'if=ehtimal, when=əminlik',            wrong: 'Fərq yoxdur, eynidir'              },
  { en: '"___ I get home, I\'ll have dinner." — ehtimal deyil, əminlik:',    tr: 'When',                                wrong: 'If'                                },
  { en: '"___ it rains, we\'ll cancel the trip." — ehtimal:',                tr: 'If',                                  wrong: 'When'                              },
  { en: 'if əvvəldə işləndikdə vergül:',                                     tr: 'Lazımdır',                            wrong: 'Lazım deyil'                       },
  { en: 'if ortada işləndikdə vergül:',                                       tr: 'Lazım deyil',                         wrong: 'Lazımdır'                          },
  { en: 'Nəticə hissəsində yalnız will işlədilirmi?',                        tr: 'Xeyr — can / əmr forması da olar',   wrong: 'Bəli — yalnız will'                },
  { en: '"If you ___ busy, we can meet tomorrow." — boşluğa nə gəlir?',      tr: 'are',                                 wrong: 'will be'                           },
  { en: '"If he ___ the exam, he\'ll be happy." — 3-cü şəxs:',              tr: 'passes',                              wrong: 'pass'                              },
  { en: '"If she ___ call, leave a message." — inkar + will:',               tr: 'doesn\'t',                            wrong: 'won\'t'                            },
  { en: '"If you need money, I ___ lend you some." — boşluğa nə gəlir?',    tr: 'can',                                 wrong: 'will can'                          },
  { en: '"If you\'re cold, ___ on your coat." — əmr forması:',              tr: 'put',                                 wrong: 'you will put'                      },
  { en: 'Birinci Şərt — nə bildirir?',                                       tr: 'Real ehtimal (mümkün)',               wrong: 'Xəyali / qeyri-real hal'           },
  { en: '"I\'ll call you ___ I arrive." — əminlik:',                         tr: 'when',                                wrong: 'if'                                },
  { en: '"If I ___ sure, I\'ll ask." — inkar, boşluğa nə gəlir?',           tr: 'am not',                              wrong: 'won\'t be'                         },
  { en: '"If the weather ___ nice, shall we go out?" — boşluğa nə?',        tr: 'is',                                  wrong: 'will be'                           },
  { en: '"If you ___ the book, you can borrow it." — boşluğa nə gəlir?',    tr: 'want',                                wrong: 'will want'                         },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Tələsməsən, avtobusu qaçıracaqsan.',
      words: ['If', 'you', 'don\'t', 'hurry', 'you\'ll', 'miss', 'the', 'bus', 'won\'t', 'will'],
      answer: ['If', 'you', 'don\'t', 'hurry', 'you\'ll', 'miss', 'the', 'bus'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Yağış yağarsa evdə qalacağam.',
      words: ['If', 'it', 'rains', 'I\'ll', 'stay', 'at', 'home', 'will rain', 'when'],
      answer: ['If', 'it', 'rains', 'I\'ll', 'stay', 'at', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Acsan bir şey ye.',
      words: ['If', 'you\'re', 'hungry', 'have', 'something', 'to', 'eat', 'will have', 'when'],
      answer: ['If', 'you\'re', 'hungry', 'have', 'something', 'to', 'eat'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Pula ehtiyacın olarsa sənə borc verə bilərəm.',
      words: ['If', 'you', 'need', 'money', 'I', 'can', 'lend', 'you', 'some', 'will need', 'when'],
      answer: ['If', 'you', 'need', 'money', 'I', 'can', 'lend', 'you', 'some'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'O çox çalışarsa imtahanı keçəcək.',
      words: ['If', 'she', 'studies', 'hard', 'she\'ll', 'pass', 'the', 'exam', 'will study', 'study'],
      answer: ['If', 'she', 'studies', 'hard', 'she\'ll', 'pass', 'the', 'exam'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Avtobus ilə getsək daha ucuz olacaq.',
      words: ['It\'ll', 'be', 'cheaper', 'if', 'we', 'go', 'by', 'bus', 'will go', 'when'],
      answer: ['It\'ll', 'be', 'cheaper', 'if', 'we', 'go', 'by', 'bus'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Əgər özünü yaxşı hiss etməsən evdə qal.',
      words: ['If', 'you', 'don\'t', 'feel', 'well', 'stay', 'at', 'home', 'won\'t feel', 'will'],
      answer: ['If', 'you', 'don\'t', 'feel', 'well', 'stay', 'at', 'home'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hava yaxşı olarsa piknikə gedə bilərik.',
      words: ['If', 'the', 'weather', 'is', 'good', 'we', 'can', 'have', 'a', 'picnic', 'will be', 'when'],
      answer: ['If', 'the', 'weather', 'is', 'good', 'we', 'can', 'have', 'a', 'picnic'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Telefon zəng edərsə cavab ver.',
      words: ['If', 'the', 'phone', 'rings', 'please', 'answer', 'it', 'will ring', 'when'],
      answer: ['If', 'the', 'phone', 'rings', 'please', 'answer', 'it'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Üzr istəməsə onu bağışlamayacaq.',
      words: ['If', 'he', 'doesn\'t', 'apologise', 'she', 'won\'t', 'forgive', 'him', 'won\'t apologise', 'when'],
      answer: ['If', 'he', 'doesn\'t', 'apologise', 'she', 'won\'t', 'forgive', 'him'],
    },
  ],
},
      
{ type: 'section_divider', title: 'Passive voice — giriş' },

// ── UNIT 40 — Passive Voice — Məchul Növ ─────────────────────────────────────

// ── Grammar Lesson (Dərs 1) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Passive Voice — Məchul Növ (Dərs 1)',
  cards: [

    // ── Ekran 1: Aktiv vs Məchul ──────────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Aktiv vs Məchul növ',
      content: 'Məchul növ — hərəkəti kimin etdiyini deyil, nəyin baş verdiyini ön plana çıxarır.\n\nMəchul növ = am / is / are / was / were + past participle',
      table: [
        ['Aktiv',                                      'Məchul'],
        ['Somebody cleans the office every day.',      'The office is cleaned every day.'],
        ['Somebody cleaned the office yesterday.',     'The office was cleaned yesterday.'],
        ['Somebody is painting the wall.',             'The wall is being painted.'],
        ['Somebody has stolen my phone.',              'My phone has been stolen.'],
      ],
      tip: 'Məchul növdə hərəkəti edən (agent) vacib deyil və ya bilinmir. Nəticə ön plandadır.',
    },

    // ── Ekran 2: Present Simple Passive ──────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Simple Passive — is/are + done',
      content: 'Hər gün / həmişə baş verən hadisələr üçün:\n\nis/are + past participle',
      examples: [
        { word: 'Butter is made from milk.',                  az: 'is made — hər zaman'              },
        { word: 'Oranges are grown in warm countries.',       az: 'are grown — ümumi həqiqət'         },
        { word: 'English is spoken in many countries.',       az: 'is spoken — ümumi həqiqət'         },
        { word: 'These cars are produced in Germany.',        az: 'are produced — ümumi fakt'         },
        { word: 'How is this word spelled?',                  az: 'is spelled — sual forması'         },
        { word: 'This machine isn\'t used very often.',       az: 'isn\'t used — inkar forması'       },
      ],
      tip: 'Tək subject → is + pp. Cəm subject → are + pp. Sualda: Is/Are + subject + pp?',
    },

    // ── Ekran 3: Past Simple Passive ─────────────────────────────────────────
    {
      type: 'lesson',
      title: 'Past Simple Passive — was/were + done',
      content: 'Keçmişdə baş vermiş hadisələr üçün:\n\nwas/were + past participle',
      examples: [
        { word: 'This bridge was built in 1890.',             az: 'was built — keçmişdə'             },
        { word: 'Three people were taken to hospital.',       az: 'were taken — cəm'                 },
        { word: 'When was the telephone invented?',           az: 'was invented — sual forması'       },
        { word: 'We weren\'t invited to the wedding.',        az: 'weren\'t invited — inkar'         },
        { word: 'My bike was stolen last week.',              az: 'was stolen — nizamsız pp'          },
        { word: 'Were you offered the job?',                  az: 'were offered — sual'               },
      ],
      tip: 'Tək subject → was + pp. Cəm subject → were + pp. "was born" xüsusi ifadədir — həmişə keçmiş zamandadır.',
    },

    // ── Ekran 4: was/were born + Passive by ──────────────────────────────────
    {
      type: 'lesson',
      title: 'was/were born — və — Passive + by',
      content: '"was/were born" — doğulmaq ifadəsi həmişə keçmiş zamanda işlədilir.\n\nHərəkəti kimin etdiyini bildirmək üçün by işlədilir:',
      examples: [
        { word: 'I was born in Baku in 1998.',                az: 'was born — daima keçmiş, "am born" olmaz' },
        { word: 'Where were you born?',                       az: 'were born — sual forması'                 },
        { word: 'The telephone was invented by Bell.',        az: 'by — kimin tərəfindən'                    },
        { word: 'We were woken up by a loud noise.',          az: 'by — səbəb/agent'                         },
        { word: 'The building was designed by a famous architect.', az: 'by + agent'                         },
        { word: 'She was bitten by a dog in the park.',       az: 'by + agent'                               },
      ],
      tip: '❌ "I am born in Baku." → Yanlış! ✅ "I was born in Baku." → Düzgün.',
    },

    // ── Mini-check 1 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Düzgün məchul cümləni seç:',
          options: [
            'This bridge built in 1920.',
            'This bridge was built in 1920.',
            'This bridge is built in 1920.',
          ],
          answer: 'This bridge was built in 1920.',
        },
        {
          q: '"Glass ___ from sand." — Present Simple Passive:',
          options: ['made', 'is made', 'was made'],
          answer: 'is made',
        },
        {
          q: '"Three people ___ to hospital after the accident." — Past Passive:',
          options: ['was taken', 'is taken', 'were taken'],
          answer: 'were taken',
        },
        {
          q: '"Where ___ you ___?" — was/were born:',
          options: ['are / born', 'were / born', 'was / born'],
          answer: 'were / born',
        },
        {
          q: 'by — nə üçün işlədilir?',
          options: [
            'Hərəkətin zamanını bildirmək üçün',
            'Hərəkəti kimin etdiyini bildirmək üçün',
            'Məchul növü aktiv növə çevirmək üçün',
          ],
          answer: 'Hərəkəti kimin etdiyini bildirmək üçün',
        },
        {
          q: '"How ___ this word ___?" — Present Simple Passive, sual:',
          options: ['is / pronounced', 'was / pronounced', 'are / pronounced'],
          answer: 'is / pronounced',
        },
        {
          q: '"We ___ to the party." — keçmişdə dəvət edilmədilər:',
          options: ['aren\'t invited', 'weren\'t invited', 'wasn\'t invited'],
          answer: 'weren\'t invited',
        },
        {
          q: 'Məchul növün forması:',
          options: [
            'have/has + past participle',
            'am/is/are/was/were + past participle',
            'be + -ing forması',
          ],
          answer: 'am/is/are/was/were + past participle',
        },
      ],
    },

  ],
},

// ── Grammar Lesson (Dərs 2) ──────────────────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Passive Voice — Present Continuous və Present Perfect (Dərs 2)',
  cards: [

    // ── Ekran 1: Present Continuous Passive ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous Passive — is/are being + done',
      content: 'İndi, bu anda davam edən hadisələr üçün:\n\nis/are being + past participle\n\nPresent Continuous vs Present Simple Passive fərqi:',
      table: [
        ['Present Continuous Passive (indi)',       'Present Simple Passive (hər gün)'],
        ['The road is being repaired at the moment.','The road is repaired every year.'],
        ['A new school is being built near here.',   'Schools are built by the government.'],
        ['The car is being washed right now.',       'The car is washed every weekend.'],
      ],
      tip: 'is/are being + pp → indi baş verir. is/are + pp → ümumi həqiqət / vərdiş.',
    },

    // ── Ekran 2: Present Perfect Passive ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect Passive — has/have been + done',
      content: 'Nəticəsi indi görünən hadisələr üçün:\n\nhas/have been + past participle\n\nPresent Perfect Passive vs Past Simple Passive fərqi:',
      table: [
        ['Present Perfect Passive (nəticə indi)',  'Past Simple Passive (nə vaxt?)'],
        ['My keys have been found.',               'My keys were found yesterday.'],
        ['The window has been broken.',            'The window was broken last night.'],
        ['Has the report been sent?',              'Was the report sent on Monday?'],
        ['I haven\'t been told about the meeting.','I wasn\'t told about it last week.'],
      ],
      tip: 'has/have been + pp → nəticə indi önəmlidir. was/were + pp → keçmişdə nə vaxt baş verdi.',
    },

    // ── Ekran 3: Dörd zamanın müqayisəsi ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Dörd zamanın müqayisəsi',
      content: '"clean" feli ilə dörd zaman forması:',
      table: [
        ['Zaman',               'Forma',                      'Nümunə'],
        ['Present Simple',      'is/are + cleaned',           'The office is cleaned every day.'],
        ['Past Simple',         'was/were + cleaned',         'The office was cleaned yesterday.'],
        ['Pres. Continuous',    'is/are being + cleaned',     'The office is being cleaned now.'],
        ['Present Perfect',     'has/have been + cleaned',    'The office has been cleaned.'],
      ],
      tip: 'Past participle (pp) bütün zamanlar üçün eyni qalır — yalnız köməkçi fel dəyişir.',
    },

    // ── Mini-check 2 ──────────────────────────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"My car is at the garage. It ___ at the moment." — Present Continuous Passive:',
          options: ['is repaired', 'is being repaired', 'has been repaired'],
          answer: 'is being repaired',
        },
        {
          q: '"My wallet ___. I can\'t find it anywhere." — Present Perfect Passive:',
          options: ['was stolen', 'is stolen', 'has been stolen'],
          answer: 'has been stolen',
        },
        {
          q: '"I\'m not going to the concert. I ___." — Present Perfect Passive, inkar:',
          options: ['wasn\'t invited', 'haven\'t been invited', 'am not being invited'],
          answer: 'haven\'t been invited',
        },
        {
          q: '"Some new flats ___ near the station right now." — Present Continuous Passive:',
          options: ['are built', 'are being built', 'have been built'],
          answer: 'are being built',
        },
        {
          q: '"The room is clean. It ___." — nəticə indi görünür:',
          options: ['was cleaned', 'is being cleaned', 'has been cleaned'],
          answer: 'has been cleaned',
        },
        {
          q: '"___ the computer ___ at the moment?" — Present Continuous Passive, sual:',
          options: ['Is / being used', 'Has / been used', 'Was / used'],
          answer: 'Is / being used',
        },
        {
          q: '"The road is closed. It ___ last week and it ___ yet." — boşluqlara nə gəlir?',
          options: [
            'was damaged / hasn\'t been repaired',
            'has been damaged / wasn\'t repaired',
            'is damaged / isn\'t repaired',
          ],
          answer: 'was damaged / hasn\'t been repaired',
        },
        {
          q: '"Has this shirt ___?" — Present Perfect Passive, sual:',
          options: ['washed', 'been washed', 'being washed'],
          answer: 'been washed',
        },
      ],
    },

  ],
},

// ── Translate Quiz ────────────────────────────────────────────────────────────
[
  { en: 'Məchul növün əsas forması:',                                          tr: 'am/is/are/was/were + past participle', wrong: 'have/has + past participle'       },
  { en: 'Present Simple Passive — tək subject:',                               tr: 'is + past participle',                 wrong: 'are + past participle'            },
  { en: 'Present Simple Passive — cəm subject:',                               tr: 'are + past participle',                wrong: 'is + past participle'             },
  { en: 'Past Simple Passive — tək subject:',                                  tr: 'was + past participle',                wrong: 'were + past participle'           },
  { en: 'Past Simple Passive — cəm subject:',                                  tr: 'were + past participle',               wrong: 'was + past participle'            },
  { en: '"Butter ___ from milk." — Present Simple Passive:',                   tr: 'is made',                              wrong: 'was made'                         },
  { en: '"This castle ___ 500 years ago." — Past Simple Passive:',             tr: 'was built',                            wrong: 'is built'                         },
  { en: '"I was born in Baku." — düzgündürmü?',                                tr: 'Düzgün — was born həmişə keçmiş zamandadır', wrong: 'Yanlış — "I am born" olmalıdır' },
  { en: 'by — nə bildirir?',                                                   tr: 'Hərəkəti kimin etdiyini (agent)',      wrong: 'Hərəkətin zamanını'               },
  { en: 'Present Continuous Passive forması:',                                  tr: 'is/are being + past participle',       wrong: 'is/are + past participle'         },
  { en: '"My car ___ right now." — Present Continuous Passive:',               tr: 'is being washed',                      wrong: 'is washed'                        },
  { en: 'Present Perfect Passive forması:',                                     tr: 'has/have been + past participle',      wrong: 'was/were + past participle'       },
  { en: '"My keys ___. I can\'t find them." — Present Perfect Passive:',       tr: 'have been taken',                      wrong: 'were taken'                       },
  { en: '"___ you ___ to the party?" — keçmişdə, sual forması:',              tr: 'Were / invited',                       wrong: 'Are / invited'                    },
  { en: '"The window ___." — nəticə indi görünür:',                            tr: 'has been broken',                      wrong: 'was broken'                       },
  { en: '"The window ___ last night." — nə vaxt baş verdi:',                   tr: 'was broken',                           wrong: 'has been broken'                  },
  { en: '"English ___ in many countries." — ümumi həqiqət:',                   tr: 'is spoken',                            wrong: 'was spoken'                       },
  { en: '"The bridge ___ by engineers in 1920." — by + agent:',                tr: 'was designed',                         wrong: 'is designed'                      },
  { en: '"A new hospital ___ near the city." — indi tikilir:',                 tr: 'is being built',                       wrong: 'has been built'                   },
  { en: '"I ___ about the change. Nobody told me." — Present Perfect Passive:', tr: 'wasn\'t told / haven\'t been told',    wrong: 'am not told'                      },
],

// ── Sentence Builder Quiz ─────────────────────────────────────────────────────
{
  type: 'quiz_sentence_builder',
  questions: [
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu körpü 200 il əvvəl tikilmişdir.',
      words: ['This', 'bridge', 'was', 'built', '200', 'years', 'ago', 'is', 'were', 'build'],
      answer: ['This', 'bridge', 'was', 'built', '200', 'years', 'ago'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Kənd yağı südən hazırlanır.',
      words: ['Butter', 'is', 'made', 'from', 'milk', 'was', 'are', 'make'],
      answer: ['Butter', 'is', 'made', 'from', 'milk'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Telefon Bell tərəfindən ixtira edilmişdir.',
      words: ['The', 'telephone', 'was', 'invented', 'by', 'Bell', 'is', 'invent', 'were'],
      answer: ['The', 'telephone', 'was', 'invented', 'by', 'Bell'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Maşınam hal-hazırda təmir edilir.',
      words: ['My', 'car', 'is', 'being', 'repaired', 'at', 'the', 'moment', 'was', 'has been'],
      answer: ['My', 'car', 'is', 'being', 'repaired', 'at', 'the', 'moment'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Açarım oğurlanıb.',
      words: ['My', 'key', 'has', 'been', 'stolen', 'was', 'is', 'being', 'steal'],
      answer: ['My', 'key', 'has', 'been', 'stolen'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Bu otaq hər gün təmizlənir.',
      words: ['This', 'room', 'is', 'cleaned', 'every', 'day', 'was', 'is being', 'clean'],
      answer: ['This', 'room', 'is', 'cleaned', 'every', 'day'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Mən Bakıda anadan olmuşam.',
      words: ['I', 'was', 'born', 'in', 'Baku', 'am', 'have been', 'bear'],
      answer: ['I', 'was', 'born', 'in', 'Baku'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Məni toya dəvət etmədilər.',
      words: ['I', 'wasn\'t', 'invited', 'to', 'the', 'wedding', 'haven\'t been', 'aren\'t', 'invite'],
      answer: ['I', 'wasn\'t', 'invited', 'to', 'the', 'wedding'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Parkın yanında yeni evlər tikilir.',
      words: ['Some', 'new', 'houses', 'are', 'being', 'built', 'near', 'the', 'park', 'were', 'have been'],
      answer: ['Some', 'new', 'houses', 'are', 'being', 'built', 'near', 'the', 'park'],
    },
    {
      q: 'Cümləni düzün:',
      sentence: 'Hesabat hələ göndərilməyib.',
      words: ['The', 'report', 'hasn\'t', 'been', 'sent', 'yet', 'wasn\'t', 'isn\'t being', 'send'],
      answer: ['The', 'report', 'hasn\'t', 'been', 'sent', 'yet'],
    },
  ],
},
      
    ],
  },

];

GENERAL_ENGLISH_LEVELS.forEach(lvl => LEVELS.push(lvl));
window.GENERAL_ENGLISH_LEVELS = GENERAL_ENGLISH_LEVELS;
