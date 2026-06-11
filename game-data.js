// ============================================================
//  WORDPATH — GAME DATA
//  game-data.js
//
//  Yüklənmə sırası:
//    game-data.js  →  general-english-engine.js  →  app.js
//
//  Hər level üçün game nodeları bu faylda saxlanılır.
//  Struktur:
//    GAME_DATA[levelId][gameId] = {
//      id:       string,       // unikal ID, məs. 'a1_g1'
//      title:    string,       // node labelı
//      words: [                // krossvord üçün sözlər
//        { word: 'APPLE', clue: 'A fruit', az: 'alma' },
//        ...
//      ]
//    }
//
//  gameId = blok indeksi + game indeksi, məs. 'b0_g0'
//  (b0 = birinci exam bloku, g0 = həmin blokun ilk oyunu)
//
//  QEYD: Bu faylı özün doldurursan. Hər oyun üçün ən azı
//  10-15 söz əlavə et ki krossvord tam yerləşsin.
// ============================================================

const GAME_DATA = {

  // ── A1 ─────────────────────────────────────────────────
  // Blok 0 → quizlər: [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → quizlər: [5,6,7,8,9] → 5 quiz → 4 game
  // Blok 2 → quizlər: [11,12,13] → 3 quiz → 2 game
  // Blok 3 → quizlər: [15,16,17] → 3 quiz → 2 game
  // Blok 4 → quizlər: [19,20,21,22] → 4 quiz → 3 game
  // Blok 5 → quizlər: [24,25,26,27] → 4 quiz → 3 game
  // Blok 6 → quizlər: [29,30,31] → 3 quiz → 2 game
  // Blok 7 → quizlər: [33,34,35] → 3 quiz → 2 game
  // Blok 8 → quizlər: [37,38,39] → 3 quiz → 2 game
  // Blok 9 → quizlər: [41,42,43] → 3 quiz → 2 game
  // Blok 10 → quizlər: [45,46,47] → 3 quiz → 2 game
  // Blok 11 → quizlər: [49,50,51] → 3 quiz → 2 game
  'a1': {
    // Blok 0 gameləri
    'b0_g0': {
  id: 'a1_b0_g0',
  title: 'Game 1',
  phases: [
    {
      // Phase 1 — Peşələr (ortaq hərflər: A, R, T, E, S)
      words: [
        { word: 'BABY',         az: 'körpə' },
        { word: 'BOY',          az: 'oğlan' },
        { word: 'ANYBODY',      az: 'hər hansı biri' },
        { word: 'NOBODY',       az: 'heç kim' },
      ]
    },
    {
      // Phase 2 — Peşələr (ortaq hərflər: S, E, R, I, N)
      words: [
        
        { word: 'ACTRESS',      az: 'aktrisa' },
        { word: 'ARTIST',       az: 'rəssam' },
        { word: 'WAITER',       az: 'ofisiant' },
        { word: 'WRITER',       az: 'yazıçı' },
      ]
    },
    {
      // Phase 3 — Ümumi insanlar (ortaq hərflər: O, N, E, R, A)
      words: [
        { word: 'DANCER',       az: 'rəqqas' },
        { word: 'MAN',          az: 'kişi' },
        { word: 'MEMBER',       az: 'üzv' },
        
      ]
    },
  ]
},
    'b0_g1': { 
      id: 'a1_b0_g1', 
      title: 'Game 2',   
      phases: [
    {
      words: [
         { word: 'MAN',          az: 'kişi' },
        { word: 'AUNT',         az: 'xala' },
        { word: 'DAD',          az: 'papa' },
        { word: 'MUM',          az: 'mama' },
      ]
    },
    {
      words: [
        
        { word: 'WOMAN',        az: 'qadın' },
        { word: 'SOMEONE',      az: 'biri' },
        { word: 'SON',          az: 'oğul' },
      ]
    },
    {
      words: [
        { word: 'PARTNER',      az: 'ortaq' },
        { word: 'PERSON',       az: 'insan' },
        { word: 'PARENT',       az: 'valideyn' },
        { word: 'SON',          az: 'oğul' },
      ]
    },
  ]
},
    'b0_g2': { id: 'a1_b0_g2', title: 'Game 3',      phases: [
    {
      words: [
        { word: 'ARM',          az: 'qol' },
        { word: 'EAR',          az: 'qulaq' },
        { word: 'FACE',         az: 'üz' },
      ]
    },
    {
      words: [
        { word: 'BODY',         az: 'bədən' },
        { word: 'EYE',          az: 'göz' },
        { word: 'HAND',         az: 'əl' },
        { word: 'HEAD',         az: 'baş' },        
      ]
    },
    {
      words: [

        { word: 'BROTHER',      az: 'qardaş' },
        { word: 'MOTHER',       az: 'ana' },
        { word: 'TOOTH',        az: 'diş' },
        { word: 'BOTTOM',       az: 'oturacaq' },
      ]
    },
  ]
},


    
    // Blok 1 gameləri
    'b1_g0': { id: 'a1_b1_g0', title: 'Game 4',      phases: [
    {
      words: [
        { word: 'TALL',         az: 'hündür' },
        { word: 'FAT',          az: 'kök' },
        { word: 'LEFT',         az: 'sol' },
        { word: 'LATE',         az: 'gec' },
      ]
    },
    {
      words: [
            { word: 'COOL',         az: 'əla' },
        { word: 'GOOD',         az: 'yaxşı' },
        { word: 'COLD',         az: 'soyuq' },
        { word: 'OLD',          az: 'köhnə' },
      ]
    },
    {
      words: [
        { word: 'DEAR',         az: 'əziz' },
        { word: 'DRY',          az: 'quru' },
        { word: 'EARLY',        az: 'erkən' },
        { word: 'READY',        az: 'hazır' },
        { word: 'REAL',         az: 'həqiqi' },

      ]
    },
  ]
},

    
    'b1_g1': { id: 'a1_b1_g1', title: 'Game 5',phases: [
    {
      words: [
        { word: 'SHORT',        az: 'qısa' },
        { word: 'TOP',          az: 'üst' },
        { word: 'HOT',          az: 'isti' },
        { word: 'POOR',         az: 'kasıb' },
      ]
    },
    {
      words: [
        { word: 'BACK',         az: 'arxa' },
        { word: 'BAD',          az: 'pis' },
        { word: 'DARK',         az: 'qaranlıq' },    
      ]
    },
    {
      words: [

        { word: 'SAD',          az: 'kədərli' },
        { word: 'SMALL',        az: 'kiçik' },
        { word: 'MIDDLE',       az: 'orta' },
        { word: 'SIDE',         az: 'yan' },
        { word: 'SAME',         az: 'eyni' },
      ]
    },
  ]
},

    
    'b1_g2': { id: 'a1_b1_g2', title: 'Game 6',phases: [
    {
      words: [
        { word: 'FULL',         az: 'dolu' },
        { word: 'FALSE',        az: 'yalan' },
        { word: 'FREE',         az: 'azad' },
        { word: 'SURE',         az: 'əmin' },
      ]
    },
    {
      words: [
        { word: 'BIG',          az: 'böyük' },
        { word: 'HIGH',         az: 'yüksək' },
        { word: 'RIGHT',        az: 'sağ' },
        { word: 'RICH',         az: 'varlı' },    
      ]
    },
    {
      words: [

        { word: 'TIRED',        az: 'yorğun' },
        { word: 'NICE',         az: 'xoş' },
        { word: 'CENTRE',       az: 'mərkəz' },
        { word: 'DIFFERENT',    az: 'fərqli' },
        { word: 'FINE',         az: 'normal' },
      ]
    },
  ]
},

    'b1_g3': { id: 'a1_b1_g3', title: 'Game 7', phases: [
    {
      words: [
        { word: 'GREAT',        az: 'əla' },
        { word: 'LARGE',        az: 'iri' },
        { word: 'LITTLE',       az: 'balaca' },
        { word: 'TERRIBLE',     az: 'dəhşətli' },
      ]
    },
    {
      words: [
        { word: 'TO FEEL',      az: 'hiss etmək' },
        { word: 'TO HATE',      az: 'nifrət etmək' },
        { word: 'HALF',         az: 'yarım' },
        { word: 'FAST',         az: 'sürətli' },    
      ]
    },
    {
      words: [
        { word: 'PERFECT',      az: 'mükəmməl' },
        { word: 'FRONT',        az: 'ön' },
        { word: 'CORRECT',      az: 'düzgün' },
        { word: 'OPEN',         az: 'açıq' },
      ]
    },
  ]
},

    // Blok 2 gameləri
    'b2_g0': { id: 'a1_b2_g0', title: 'Game 8', phases: [
    {
      words: [
        { word: 'TOMATO',       az: 'pomidor' },
        { word: 'MEAT',         az: 'ət' },
        { word: 'TEA',          az: 'çay' },
        { word: 'TO EAT',       az: 'yemək' },
      ]
    },
    {
      words: [
        { word: 'PEPPER',       az: 'bibər' },
        { word: 'RICE',         az: 'düyü' },
        { word: 'RECIPE',       az: 'resept' },
        { word: 'BEER',         az: 'pivə' },    
      ]
    },
    {
      words: [
        { word: 'BANANA',       az: 'banan' },
        { word: 'PLANT',        az: 'bitki' },
        { word: 'SALT',         az: 'duz' },
        { word: 'PASTA',        az: 'makaron' },
      ]
    },
  ]
},

    'b2_g1': { id: 'a1_b2_g1', title: 'Game 9', phases: [
    {
      words: [
        { word: 'ONION',        az: 'soğan' },
        { word: 'DIET',         az: 'pəhriz' },
        { word: 'DINNER',       az: 'axşam yeməyi' },
        { word: 'TO ORDER',     az: 'sifariş etmək' },
      ]
    },
    {
      words: [
            { word: 'APPLE',        az: 'alma' },
        { word: 'EGG',          az: 'yumurta' },
        { word: 'MEAL',         az: 'yemək' },
      ]
    },
    {
      words: [
        { word: 'CHEESE',       az: 'pendir' },
        { word: 'FISH',         az: 'balıq' },
        { word: 'DISH',         az: 'təam' },
        { word: 'FOOD',         az: 'qida' },
        { word: 'COFFEE',       az: 'qəhvə' },

      ]
    },
  ]
},

    
    // Blok 3 gameləri
    'b3_g0': { id: 'a1_b3_g0', title: 'Game 10', phases: [
    {
      words: [
        { word: 'ONE',          az: 'bir' },
        { word: 'NINE',         az: 'doqquz' },
        { word: 'ONCE',         az: 'bir dəfə' },
      ]
    },
    {
      words: [
        { word: 'TEN',          az: 'on' },
        { word: 'FIFTEEN',      az: 'on beş' },
        { word: 'FIFTY',        az: 'əlli' },
        { word: 'NINETY',       az: 'doxsan' },    
      ]
    },
    {
      words: [
        { word: 'GREEN',        az: 'yaşıl' },
        { word: 'THREE',        az: 'üç' },
        { word: 'EIGHT',        az: 'səkkiz' },
        { word: 'THIRTEEN',     az: 'on üç' },
        { word: 'EIGHTEEN',     az: 'on səkkiz' },

      ]
    },
  ]
},
    'b3_g1': { id: 'a1_b3_g1', title: 'Game 11', phases: [
    {
      words: [
        { word: 'RED',          az: 'qırmızı' },
        { word: 'DARK',         az: 'qaranlıq' },
        { word: 'PALE',         az: 'solğun' },
        { word: 'DEEP',         az: 'dərin' },
      ]
    },
    {
      words: [
            { word: 'SIX',          az: 'altı' },
        { word: 'SEVEN',        az: 'yeddi' },
        { word: 'SIXTEEN',      az: 'on altı' },
        { word: 'SIXTY',        az: 'altmış' },
        { word: 'SEVENTY',      az: 'yetmiş' },
      ]
    },
    {
      words: [
        { word: 'FOUR',         az: 'dörd' },
        { word: 'THIRTY',       az: 'otuz' },
        { word: 'FORTY',        az: 'qırx' },
        { word: 'FOURTH',       az: 'dördüncü' },
        { word: 'FIFTH',        az: 'beşinci' },

      ]
    },
  ]
},


    
    // Blok 4 gameləri
    'b4_g0': { id: 'a1_b4_g0', title: 'Game 12', phases: [
    {
      words: [
        { word: 'BED',          az: 'çarpayı' },
        { word: 'AREA',         az: 'ərazi' },
        { word: 'BAR',          az: 'bar' },
      ]
    },
    {
      words: [
        { word: 'POOL',         az: 'hovuz' },
        { word: 'POST',         az: 'poçt' },
        { word: 'TOP',          az: 'zirvə' },
      ]
    },
    {
      words: [
        { word: 'PAPER',        az: 'kağız' },
        { word: 'PEN',          az: 'qələm' },
        { word: 'PARK',         az: 'park' },
      ]
    },
  ]
},
    'b4_g1': { id: 'a1_b4_g1', title: 'Game 13', phases: [
    {
      words: [
        { word: 'HOME',         az: 'ev' },
        { word: 'HOUSE',        az: 'ev' },
        { word: 'MUSEUM',       az: 'muzey' },
      ]
    },
    {
      words: [
        { word: 'BATH',         az: 'vanna' },
        { word: 'TABLE',        az: 'masa' },
        { word: 'BOTTLE',       az: 'şüşə' },
        { word: 'HOTEL',        az: 'otel' },
      ]
    },
    {
      words: [
        { word: 'CUP',          az: 'fincan' },
        { word: 'CLUB',         az: 'klub' },
        { word: 'PLACE',        az: 'məkan' },
      ]
    },
  ]
},
    'b4_g2': { id: 'a1_b4_g2', title: 'Game 14', phases: [
    {
      words: [
        { word: 'BAG',          az: 'çanta' },
        { word: 'KEY',          az: 'açar' },
        { word: 'BANK',         az: 'bank' },
        { word: 'GYM',          az: 'idman zalı' },
      ]
    },
    {
      words: [
        { word: 'BATHROOM',     az: 'vanna otağı' },
        { word: 'ROOM',         az: 'otaq' },
        { word: 'THEATRE',      az: 'teatr' },
        { word: 'BOTTOM',       az: 'dib' },
      ]
    },
    {
      words: [
        { word: 'FLAT',         az: 'mənzil' },
        { word: 'TOILET',       az: 'tualet' },
        { word: 'CAFE',         az: 'kafe' },
        { word: 'OFFICE',       az: 'ofis' },
      ]
    },
  ]
},




    
    // Blok 5 gameləri
    'b5_g0': { id: 'a1_b5_g0', title: 'Game 15', phases: [
    {
      words: [
        { word: 'CAT',          az: 'pişik' },
        { word: 'BOAT',         az: 'qayıq' },
        { word: 'BOOT',         az: 'çəkmə' },
        { word: 'COAT',         az: 'palto' },
      ]
    },
    {
      words: [
        { word: 'AIR',          az: 'hava' },
        { word: 'RAIN',         az: 'yağış' },
        { word: 'TRAIN',        az: 'qatar' },
        { word: 'TRIP',         az: 'səfər' },
        { word: 'PAIR',         az: 'cüt' },
      ]
    },
    {
      words: [
        { word: 'EAST',         az: 'şərq' },
        { word: 'SEA',          az: 'dəniz' },
        { word: 'WEST',         az: 'qərb' },
        { word: 'TREE',         az: 'ağac' },
        { word: 'WATER',        az: 'su' },
        { word: 'SWEATER',      az: 'sviter' },
      ]
    },
  ]
},
    'b5_g1': { id: 'a1_b5_g1', title: 'Game 16',  phases: [
    {
      words: [
        { word: 'ROAD',         az: 'yol' },
        { word: 'COW',          az: 'inək' },
        { word: 'WOOD',         az: 'taxta' },
        { word: 'CAR',          az: 'avtomobil' },
      ]
    },
    {
      words: [
        { word: 'ICE',          az: 'buz' },
        { word: 'BIKE',         az: 'motosiklet' },
        { word: 'TICKET',       az: 'bilet' },
      ]
    },
    {
      words: [
        { word: 'DOG',          az: 'it' },
        { word: 'HORSE',        az: 'at' },
        { word: 'DRESS',        az: 'don' },
        { word: 'SHOE',         az: 'ayaqqabı' },
      ]
    },
  ]
},
    'b5_g2': { id: 'a1_b5_g2', title: 'Game 17',  phases: [
    {
      words: [
        { word: 'DOG',          az: 'it' },
        { word: 'HORSE',        az: 'at' },
        { word: 'DRESS',        az: 'don' },
        { word: 'SHOE',         az: 'ayaqqabı' },
      ]
    },
    {
      words: [
        { word: 'BEACH',        az: 'çimərlik' },
        { word: 'WEATHER',      az: 'hava' },
        { word: 'HAT',          az: 'şlyapa' },
        { word: 'WATCH',        az: 'saat' },
      ]
    },
    {
      words: [
        { word: 'ISLAND',       az: 'ada' },
        { word: 'LAND',         az: 'torpaq' },
        { word: 'SUN',          az: 'günəş' },
        { word: 'BUS',          az: 'avtobus' },
      ]
    },
  ]
},

    
    // Blok 6 gameləri
    'b6_g0': { id: 'a1_b6_g0', title: 'Game 18', phases: [
    {
      words: [
        { word: 'AGE',          az: 'yaş' },
        { word: 'DATE',         az: 'tarix' },
        { word: 'LATE',         az: 'gec' },
      ]
    },
    {
      words: [
        { word: 'DAY',          az: 'gün' },
        { word: 'YEAR',         az: 'il' },
        { word: 'EARLY',        az: 'erkən' },
      ]
    },
    {
      words: [
        { word: 'AGO',          az: 'əvvəl' },
        { word: 'NOW',          az: 'indi' },
        { word: 'SOON',         az: 'tezliklə' },
      ]
    },
  ]
},
    'b6_g1': { id: 'a1_b6_g1', title: 'Game 19', phases: [
    {
      words: [
        { word: 'MOMENT',       az: 'an' },
        { word: 'MONTH',        az: 'ay' },
        { word: 'THEN',         az: 'sonra' },
        { word: 'OFTEN',        az: 'tez-tez' },
      ]
    },
    {
      words: [
        { word: 'MONDAY',       az: 'bazar ertəsi' },
        { word: 'MAY',          az: 'may' },
        { word: 'AUTUMN',       az: 'payız' },
        { word: 'TODAY',        az: 'bu gün' },
      ]
    },
    {
      words: [
        { word: 'JUNE',         az: 'iyun' },
        { word: 'MINUTE',       az: 'dəqiqə' },
        { word: 'TIME',         az: 'vaxt' },
      ]
    },
  ]
},

    
    // Blok 7 gameləri
    'b7_g0': { id: 'a1_b7_g0', title: 'Game 20', phases: [
    {
      words: [
        { word: 'POOR',         az: 'kasıb' },
        { word: 'PHOTO',        az: 'şəkil' },
        { word: 'PHOTO',        az: 'şəkil' },
        { word: 'POP',          az: 'pop musiqi' },
      ]
    },
    {
      words: [
        { word: 'CARD',         az: 'kart' },
        { word: 'CD',           az: 'disk' },
        { word: 'DVD',          az: 'kaset' },
        { word: 'TV',           az: 'televizor' },
      ]
    },
    {
      words: [
        { word: 'BILL',         az: 'hesab' },
        { word: 'BLOG',         az: 'bloq' },
        { word: 'BOOK',         az: 'kitab' },
      ]
    },
  ]
},

    
    'b7_g1': { id: 'a1_b7_g1', title: 'Game 21',  phases: [
    {
      words: [
        { word: 'SHOP',         az: 'mağaza' },
        { word: 'PHONE',        az: 'telefon' },
        { word: 'NEWS',         az: 'xəbər' },
        { word: 'SHOW',         az: 'veriliş' },
      ]
    },
    {
      words: [
        { word: 'PRICE',        az: 'qiymət' },
        { word: 'CHEAP',        az: 'ucuz' },
        { word: 'RICH',         az: 'varlı' },
      ]
    },
    {
      words: [
        { word: 'CENT',         az: 'sent' },
        { word: 'TO COST',      az: 'başa gəlmək' },
        { word: 'FREE',         az: 'pulsuz' },
        { word: 'SCREEN',       az: 'ekran' },
        { word: 'CONCERT',      az: 'konsert' },
      ]
    },
  ]
},



    
    // Blok 8 gameləri
    'b8_g0': { id: 'a1_b8_g0', title: 'Game 22',phases: [
    {
      words: [
        { word: 'PAGE',         az: 'səhifə' },
        { word: 'GAME',         az: 'oyun' },
        { word: 'TEAM',         az: 'komanda' },
      ]
    },
    {
      words: [
        { word: 'SCIENCE',      az: 'elm' },
        { word: 'TEST',         az: 'test' },
        { word: 'TENNIS',       az: 'tennis' },
      ]
    },
    {
      words: [
        { word: 'LETTER',       az: 'hərf' },
        { word: 'ART',          az: 'sənət' },
        { word: 'BALL',         az: 'top' },
      ]
    },
  ]
},
    'b8_g1': { id: 'a1_b8_g1', title: 'Game 23',phases: [
    {
      words: [
        { word: 'LESSON',       az: 'dərs' },
        { word: 'NOTE',         az: 'qeyd' },
        { word: 'TO SPELL',     az: 'hərfləmək' },
        { word: 'POOL',         az: 'hovuz' },
      ]
    },
    {
      words: [
        { word: 'CLASS',        az: 'sinif' },
        { word: 'DETAIL',       az: 'təfərrüat' },
        { word: 'TITLE',        az: 'başlıq' },
      ]
    },
    {
      words: [
        { word: 'TO TEACH',     az: 'öyrətmək' },
        { word: 'CHESS',        az: 'şahmat' },
        { word: 'MATCH',        az: 'oyun' },
      ]
    },
  ]
},

    
    // Blok 9 gameləri
    'b9_g0': { id: 'a1_b9_g0', title: 'Game 24', phases: [
    {
      words: [
        { word: 'GO',        az: 'getmək' },
        { word: 'EAT',       az: 'yemək' },
        { word: 'GET',       az: 'əldə etmək' },
      ]
    },
    {
      words: [
        { word: 'RUN',       az: 'qaçmaq' },
        { word: 'TURN',      az: 'dönmək' },
        { word: 'CUT',       az: 'kəsmək' },
      ]
    },
    {
      words: [
        { word: 'FALL',      az: 'yıxılmaq' },
        { word: 'CALL',      az: 'çağırmaq' },
        { word: 'TALK',      az: 'söhbət etmək' },
        { word: 'COOK',      az: 'bişirmək' },
      ]
    },
  ]
},
    'b9_g1': { id: 'a1_b9_g1', title: 'Game 25', phases: [
    {
      words: [
        { word: 'SIT',       az: 'oturmaq' },
        { word: 'ASK',       az: 'soruşmaq' },
        { word: 'SPEAK',     az: 'danışmaq' },
        { word: 'KEEP',      az: 'saxlamaq' },
      ]
    },
    {
      words: [
        { word: 'STAND',     az: 'ayağa qalxmaq' },
        { word: 'LISTEN',    az: 'qulaq asmaq' },
        { word: 'SEND',      az: 'göndərmək' },
        { word: 'CLEAN',     az: 'təmizləmək' },
        { word: 'CLOSE',     az: 'bağlamaq' },
        { word: 'DANCE',     az: 'rəqs etmək' },
      ]
    },
    {
      words: [
        { word: 'ARRIVE',    az: 'çatmaq' },
        { word: 'RIDE',      az: 'minmək' },
        { word: 'READ',      az: 'oxumaq' },
        { word: 'WRITE',     az: 'yazmaq' },
        { word: 'GIVE',      az: 'vermək' },
        { word: 'GROW',      az: 'böyümək' },
      ]
    },
  ]
},

    
    // Blok 10 gameləri
    'b10_g0': { id: 'a1_b10_g0', title: 'Game 26', phases: [
    {
      words: [
        { word: 'MAKE',         az: 'düzəltmək' },
        { word: 'MEET',         az: 'görüşmək' },
        { word: 'TAKE',         az: 'götürmək' },
      ]
    },
    {
      words: [
        { word: 'WAIT',         az: 'gözləmək' },
        { word: 'WANT',         az: 'istəmək' },
        { word: 'WIN',          az: 'qalib gəlmək' },
      ]
    },
    {
      words: [
        { word: 'FEEL',         az: 'hiss etmək' },
        { word: 'FIND',         az: 'tapmaq' },
        { word: 'NEED',         az: 'ehtiyac duymaq' },
        { word: 'DIE',          az: 'ölmək' },
        { word: 'LIE',          az: 'uzanmaq' },
      ]
    },
  ]
},
    'b10_g1': { id: 'a1_b10_g1', title: 'Game 27',phases: [
    {
      words: [
        { word: 'SLEEP',        az: 'yatmaq' },
        { word: 'STOP',         az: 'dayanmaq' },
        { word: 'LOSE',         az: 'itirmək' },
        { word: 'SEE',          az: 'görmək' },
        { word: 'LET',          az: 'icazə vermək' },
      ]
    },
    {
      words: [
        { word: 'ORDER',        az: 'sifariş etmək' },
        { word: 'DO',           az: 'etmək' },
        { word: 'HEAR',         az: 'eşitmək' },
        { word: 'DRAW',         az: 'rəsm çəkmək' },
        { word: 'WEAR',         az: 'geymək' },
      ]
    },
    {
      words: [
        { word: 'LOOK',         az: 'baxmaq' },
        { word: 'OWN',          az: 'sahib olmaq' },
        { word: 'PAY',          az: 'ödəmək' },
        { word: 'PLAY',         az: 'oynamaq' },
        { word: 'KNOW',         az: 'bilmək' },
        { word: 'PLAN',         az: 'planlaşdırmaq' },
      ]
    },
  ]
},

    
    // Blok 11 gameləri
    'b11_g0': { id: 'a1_b11_g0', title: 'Game 28',phases: [
    {
      words: [
        { word: 'END',          az: 'son' },
        { word: 'IDEA',         az: 'fikir' },
        { word: 'KIND',         az: 'növ' },
      ]
    },
    {
      words: [
        { word: 'PLAN',         az: 'plan' },
        { word: 'MAP',          az: 'xəritə' },
        { word: 'NAME',         az: 'ad' },
      ]
    },
    {
      words: [
        { word: 'MODEL',        az: 'model' },
        { word: 'LOT',          az: 'xeyli' },
        { word: 'BOTTLE',       az: 'butulka' },
        { word: 'ITEM',         az: 'əşya' },
        { word: 'MODEL',        az: 'model' },
        { word: 'TITLE',        az: 'başlıq' },
      ]
    },
  ]
},
    
    'b11_g1': { id: 'a1_b11_g1', title: 'Game 29',phases: [
    {
      words: [
        { word: 'FUN',          az: 'əyləncə' },
        { word: 'LIFE',         az: 'həyat' },
        { word: 'LINE',         az: 'xətt' },
        { word: 'CUP',          az: 'fincan' },
        { word: 'PIECE',        az: 'parça' },
      ]
    },
    {
      words: [
        { word: 'REPORT',       az: 'hesabat' },
        { word: 'WORK',         az: 'iş' },
        { word: 'WORK',      az: 'işləmək' },
        { word: 'PART',         az: 'hissə' },
        { word: 'TYPE',         az: 'növ' },
        { word: 'WAY',          az: 'yol' },
      ]
    },
    {
      words: [
        { word: 'ACTION',       az: 'hərəkət' },
        { word: 'OFFICE',       az: 'ofis' },
        { word: 'TO PLAN',      az: 'planlaşdırmaq' },
        { word: 'LIST',         az: 'siyahı' },
        { word: 'POINT',        az: 'nöqtə' },
        { word: 'SPACE',        az: 'kosmos' },
      ]
    },
  ]
},
  },

  // ── A2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → [5,6,7,8] → 4 quiz → 3 game
  // Blok 2 → [10,11,12,13] → 4 quiz → 3 game
  // Blok 3 → [15,16] → 2 quiz → 1 game
  // Blok 4 → [18,19,20,21] → 4 quiz → 3 game
  // Blok 5 → [23,24,25,26] → 4 quiz → 3 game
  // Blok 6 → [28,29] → 2 quiz → 1 game
  // Blok 7 → [31,32] → 2 quiz → 1 game
  // Blok 8 → [34,35] → 2 quiz → 1 game
  // Blok 9 → [37,38] → 2 quiz → 1 game
  'a2': {
    'b0_g0': { id: 'a2_b0_g0', title: 'Game 1',phases: [
    {
      words: [
        { word: 'PAIN',         az: 'ağrı' },
        { word: 'ILL',          az: 'xəstə' },
        { word: 'PILL',         az: 'həb' },
      ]
    },
    {
      words: [
        { word: 'COOK',         az: 'aşpaz' },
        { word: 'BONE',         az: 'sümük' },
        { word: 'KNEE',         az: 'diz' },
        { word: 'NECK',         az: 'boyun' },
      ]
    },
    {
      words: [
        { word: 'DOCTOR',       az: 'həkim' },
        { word: 'TOE',          az: 'ayaq barmağı' },
        { word: 'EAR',          az: 'qulaq' },
        { word: 'DOCTOR',       az: 'həkim' },
      ]
    },
  ]
},
    'b0_g1': { id: 'a2_b0_g1', title: 'Game 2', phases: [
    {
      words: [
        { word: 'CHEF',         az: 'aşpaz' },
        { word: 'FACE',         az: 'üz' },
        { word: 'HAND',         az: 'əl' },
        { word: 'HEAD',         az: 'baş' },
      ]
    },
    {
      words: [
        { word: 'TEACHER',      az: 'müəllim' },
        { word: 'ATHLETE',      az: 'atlet' },
        { word: 'HEART',        az: 'ürək' },
        { word: 'HEALTH',       az: 'sağlamlıq' },
      ]
    },
    {
      words: [
        { word: 'BRAIN',        az: 'beyin' },
        { word: 'SKIN',         az: 'dəri' },
        { word: 'BACK',         az: 'arxa' },
        { word: 'SICK',         az: 'xəstə' },     
      ]
    },
  ]
},
    'b0_g2': { id: 'a2_b0_g2', title: 'Game 3', phases: [
    {
      words: [
        { word: 'ARCHITECT',    az: 'memar' },
        { word: 'ARTIST',       az: 'sənətkar' },
        { word: 'ACTRESS',      az: 'aktrisa' },
        { word: 'CHEST',        az: 'sinə' },
      ]
    },
    {
      words: [
        { word: 'LAWYER',       az: 'hüquqşünas' },
        { word: 'WRITER',       az: 'yazıçı' },
        { word: 'WAITER',       az: 'ofisiant' },
        { word: 'EYE',          az: 'göz' },
      ]
    },
    {
      words: [
             { word: 'DESIGNER',     az: 'dizayner' },
        { word: 'DRIVER',       az: 'sürücü' },
        { word: 'NURSE',        az: 'tibb bacısı' },
        { word: 'DISEASE',      az: 'xəstəlik' },
        { word: 'DRUG',         az: 'dərman' },
        { word: 'VIRUS',        az: 'virus' },
      ]
    },
  ]
},
    'b1_g0': { id: 'a2_b1_g0', title: 'Game 4', phases: [
    {
      words: [
        { word: 'BEAR',         az: 'ayı' },
        { word: 'RAT',          az: 'siçovul' },
        { word: 'BEE',          az: 'arı' },
        { word: 'TREE',         az: 'ağac' },
      ]
    },
    {
      words: [
        { word: 'PAN',          az: 'tava' },
        { word: 'CAN',          az: 'konserv qutusu' },
        { word: 'ANT',          az: 'qarışqa' },
        { word: 'CAT',          az: 'pişik' },
      ]
    },
    {
      words: [
             { word: 'GRAPE',        az: 'üzüm' },
        { word: 'PEAR',         az: 'armud' },
        { word: 'EGG',          az: 'yumurta' },
        { word: 'JAR',          az: 'banka' },
      ]
    },
  ]
},
    'b1_g1': { id: 'a2_b1_g1', title: 'Game 5', phases: [
    {
      words: [
        { word: 'TASTE',        az: 'dad' },
        { word: 'BREAD',        az: 'çörək' },
        { word: 'DESERT',       az: 'səhra' },
        { word: 'STAR',         az: 'ulduz' },
      ]
    },
    {
      words: [
        { word: 'PLATE',        az: 'boşqab' },
        { word: 'BOTTLE',       az: 'şüşə' },
        { word: 'POT',          az: 'qazan' },
        { word: 'TABLE',        az: 'masa' },
      ]
    },
    {
      words: [
             { word: 'BEEF',         az: 'mal əti' },
        { word: 'BOWL',         az: 'dərin boşqab' },
        { word: 'WOLF',         az: 'canavar' },
        { word: 'WOOD',         az: 'meşə' },
      ]
    },
  ]
},
    'b1_g2': { id: 'a2_b1_g2', title: 'Game 6', phases: [
    {
      words: [
        { word: 'MEAT',         az: 'ət' },
        { word: 'MOON',         az: 'ay' },
        { word: 'OCEAN',        az: 'okean' },
        { word: 'COAST',        az: 'sahil' },
        { word: 'STONE',        az: 'daş' },
      ]
    },
    {
      words: [
        { word: 'GLASS',        az: 'stəkan' },
        { word: 'LID',          az: 'qapaq' },
        { word: 'DOG',          az: 'it' },
        { word: 'LION',         az: 'aslan' },
        { word: 'ISLAND',       az: 'ada' },
      ]
    },
    {
      words: [
        { word: 'FROG',         az: 'qurbağa' },
        { word: 'GOAT',         az: 'keçi' },
        { word: 'HORSE',        az: 'at' },
        { word: 'FOREST',       az: 'meşə' },
        { word: 'GRASS',        az: 'ot' },
        { word: 'EARTH',        az: 'yer kürəsi' },
      ]
    },
  ]
},

    
    'b2_g0': { id: 'a2_b2_g0', title: 'Game 7',phases: [
    {
      words: [
        { word: 'APP',          az: 'tətbiq' },
        { word: 'POSTER',       az: 'afişa' },
        { word: 'REPORT',       az: 'hesabat' },
        { word: 'PRESS',        az: 'mətbuat' },
        { word: 'TEST',         az: 'test' },
      ]
    },
    {
      words: [
        { word: 'TABLET',       az: 'planşet' },
        { word: 'WEB',          az: 'veb' },
        { word: 'LAB',          az: 'laboratoriya' },
        { word: 'DATA',         az: 'məlumat' },
      ]
    },
    {
      words: [
        { word: 'CODE',         az: 'kod' },
        { word: 'DEVICE',       az: 'cihaz' },
        { word: 'USER',         az: 'istifadəçi' },
        { word: 'RECORD',       az: 'yazmaq / lövhə' },
        { word: 'SERIES',       az: 'serial' },
        { word: 'COURSE',       az: 'kurs' },
        { word: 'DISCOVER',     az: 'kəşf etmək' },     
      ]
    },
  ]
},
    'b2_g1': { id: 'a2_b2_g1', title: 'Game 8', phases: [
    {
      words: [
        { word: 'SCREEN',       az: 'ekran' },
        { word: 'CHANNEL',      az: 'kanal' },
        { word: 'SCHOOL',       az: 'məktəb' },
        { word: 'LESSON',       az: 'dərs' },
        { word: 'CLASS',        az: 'sinif' },
        { word: 'RESEARCH',     az: 'tədqiqat' },
        { word: 'RESEARCHER',   az: 'tədqiqatçı' },
      ]
    },
    {
      words: [
        { word: 'DIGITAL',      az: 'rəqəmsal' },
        { word: 'EMAIL',        az: 'elektron poçt' },
        { word: 'INTERNET',     az: 'internet' },
        { word: 'MEDIA',        az: 'media' },
        { word: 'DRAMA',        az: 'dram' },
        { word: 'LEARNING',     az: 'öyrənmə' },
        { word: 'DEGREE',       az: 'diplom' },
      ]
    },
    {
      words: [
         { word: 'LAPTOP',       az: 'noutbuk' },
        { word: 'ONLINE',       az: 'onlayn' },
        { word: 'NOVEL',        az: 'roman' },
        { word: 'EXPLANATION',  az: 'izahat' },
        { word: 'INVENTION',    az: 'ixtira' },
        { word: 'INVENT',       az: 'ixtira etmək' },    
      ]
    },
  ]
},
    'b2_g2': { id: 'a2_b2_g2', title: 'Game 9', phases: [
    {
      words: [
        { word: 'ESSAY',        az: 'inşa' },
        { word: 'MATHS',        az: 'riyaziyyat' },
        { word: 'EXAM',         az: 'imtahan' },
        { word: 'FACT',         az: 'fakt' },
        { word: 'SYSTEM',       az: 'sistem' },
      ]
    },
    {
      words: [
        { word: 'LECTURE',      az: 'mühazirə' },
        { word: 'RESULT',       az: 'nəticə' },
        { word: 'PROCESS',      az: 'proses' },
        { word: 'EXPERT',       az: 'mütəxəssis' },
      ]
    },
    {
      words: [
         { word: 'NETWORK',      az: 'şəbəkə' },
        { word: 'NEWS',         az: 'xəbər' },
        { word: 'SHOW',         az: 'şou' },
        { word: 'HOMEWORK',     az: 'ev tapşırığı' },    
      ]
    },
  ]
},

    
    'b3_g0': { id: 'a2_b3_g0', title: 'Game 10', phases: [
    {
      words: [
        { word: 'RACE',         az: 'yarış' },
        { word: 'ART',          az: 'sənət' },
        { word: 'CRAFT',        az: 'əl işi' },
      ]
    },
    {
      words: [
        { word: 'TEAM',         az: 'komanda' },
        { word: 'MATCH',        az: 'oyun' },
        { word: 'ATHLETE',      az: 'atlet' },
        { word: 'CAMP',         az: 'düşərgə' },
      ]
    },
    {
      words: [
        { word: 'RUN',          az: 'qaçmaq' },
        { word: 'RUNNING',      az: 'qaçış' },
        { word: 'WINNER',       az: 'qalib' },
        { word: 'TRAINING',     az: 'məşq' },
        { word: 'DRAWING',      az: 'çəkmə' },
        { word: 'READING',      az: 'oxumaq' },
        { word: 'WRITING',      az: 'yazmaq' },
        { word: 'GARDEN',       az: 'bağ' },     
      ]
    },
  ]
},


    
    'b4_g0': { id: 'a2_b4_g0', title: 'Game 11', phases: [
    {
      words: [
        { word: 'COACH',        az: 'avtobus' },
        { word: 'COAT',         az: 'palto' },
        { word: 'HAT',          az: 'papaq' },
      ]
    },
    {
      words: [
        { word: 'SITE',         az: 'ərazi' },
        { word: 'BUS',          az: 'avtobus' },
        { word: 'SUIT',         az: 'kostyum' },
        { word: 'TIE',          az: 'qalstuk' },
      ]
    },
    {
      words: [
         { word: 'LORRY',        az: 'yük maşını' },
        { word: 'FERRY',        az: 'bərə' },
        { word: 'ROOF',         az: 'dam' },
        { word: 'DOOR',         az: 'qapı' },
        { word: 'FLOOR',        az: 'döşəmə' },    
      ]
    },
  ]
},
    'b4_g1': { id: 'a2_b4_g1', title: 'Game 12', phases: [
    {
      words: [
        { word: 'WHEEL',        az: 'təkər' },
        { word: 'BOAT',         az: 'qayıq' },
        { word: 'TOWEL',        az: 'dəsmal' },
        { word: 'WALL',         az: 'divar' },
        { word: 'BELT',         az: 'kəmər' },
      ]
    },
    {
      words: [
        { word: 'STAGE',        az: 'səhnə' },
        { word: 'TRAIN',        az: 'qatar' },
        { word: 'STAIRS',       az: 'pilləkən' },
        { word: 'TRAINERS',     az: 'idman ayaqqabısı' },
        { word: 'RING',         az: 'üzük' },
      ]
    },
    {
      words: [
        { word: 'CASTLE',       az: 'qala' },
        { word: 'PALACE',       az: 'saray' },
        { word: 'CAR',          az: 'avtomobil' },
        { word: 'PLANE',        az: 'təyyarə' },
        { word: 'CARPET',       az: 'xalça' },
        { word: 'PANTS',        az: 'şalvar' },     
      ]
    },
  ]
},
    'b4_g2': { id: 'a2_b4_g2', title: 'Game 13', phases: [
    {
      words: [
        { word: 'PALACE',       az: 'saray' },
        { word: 'AIRLINE',      az: 'aviaşirkət' },
        { word: 'CAR',          az: 'avtomobil' },
        { word: 'PLANE',        az: 'təyyarə' },
        { word: 'BIN',          az: 'zibil qabı' },
      ]
    },
    {
      words: [
        { word: 'PUB',          az: 'pivəxana' },
        { word: 'UPSTAIRS',     az: 'yuxarı mərtəbə' },
        { word: 'SHIP',         az: 'gəmi' },
        { word: 'BRUSH',        az: 'fırça' },
        { word: 'SHIRT',        az: 'köynək' },
      ]
    },
    {
      words: [
             { word: 'CHURCH',       az: 'kilsə' },
        { word: 'TRUCK',        az: 'yük avtomobili' },
        { word: 'SHEET',        az: 'çarşab' },
        { word: 'SOCK',         az: 'corab' },
        { word: 'DRESS',        az: 'don' },
        { word: 'SHOES',        az: 'ayaqqabı' },
      ]
    },
  ]
},


    
    
    'b5_g0': { id: 'a2_b5_g0', title: 'Game 14', phases: [
    {
      words: [
        { word: 'IDEAL',        az: 'ideal' },
        { word: 'DEAD',         az: 'ölü' },
        { word: 'ILL',          az: 'xəstə' },
      ]
    },
    {
      words: [
        { word: 'PLEASED',      az: 'məmnun' },
        { word: 'DEEP',         az: 'dərin' },
        { word: 'ASLEEP',       az: 'yuxuda' },
      ]
    },
    {
      words: [
             { word: 'FEAR',         az: 'qorxu' },
        { word: 'BRAVE',        az: 'cəsur' },
        { word: 'FAIR',         az: 'ədalətli' },
      ]
    },
  ]
},
    'b5_g1': { id: 'a2_b5_g1', title: 'Game 15', phases: [
    {
      words: [
        { word: 'ACTIVE',       az: 'fəal' },
        { word: 'CLEVER',       az: 'ağıllı' },
        { word: 'CREATIVE',     az: 'yaradıcı' },
        { word: 'ANCIENT',      az: 'qədim' },
        { word: 'CERTAIN',      az: 'əmin' },
        { word: 'ALIVE',        az: 'sağ' },
      ]
    },
    {
      words: [
        { word: 'CALM',         az: 'sakit' },
        { word: 'CAREFUL',      az: 'diqqətli' },
        { word: 'CUTE',         az: 'sevimli' },
        { word: 'EXACT',        az: 'dəqiq' },
        { word: 'EXTREME',      az: 'həddindən artıq' },
        { word: 'FLAT',         az: 'düz' },
      ]
    },
    {
      words: [
        { word: 'PAIN',         az: 'ağrı' },
        { word: 'GLAD',         az: 'sevincli' },
        { word: 'KIND',         az: 'mehriban' },
        { word: 'BLANK',        az: 'boş' },
        { word: 'DARK',         az: 'qaranlıq' },     
      ]
    },
  ]
},
    'b5_g2': { id: 'a2_b5_g2', title: 'Game 16', phases: [
    {
      words: [
        { word: 'HURT',         az: 'incimək' },
        { word: 'CRAZY',        az: 'dəli' },
        { word: 'LAZY',         az: 'tənbəl' },
        { word: 'SHY',          az: 'utancaq' },
        { word: 'CURLY',        az: 'qıvrım' },
      ]
    },
    {
      words: [
        { word: 'LONELY',       az: 'tənha' },
        { word: 'POLITE',       az: 'nəzakətli' },
        { word: 'TYPICAL',      az: 'tipik' },
        { word: 'PATIENT',      az: 'səbirli' },
        { word: 'COMMON',       az: 'ümumi' },
        { word: 'EMPTY',        az: 'boş' },
      ]
    },
    {
      words: [
        { word: 'HOPE',         az: 'ümid' },
        { word: 'ANGRY',        az: 'əsəbi' },
        { word: 'UNHAPPY',      az: 'xoşbəxt olmayan' },
        { word: 'AVERAGE',      az: 'orta' },
        { word: 'HEAVY',        az: 'ağır' },
        { word: 'HUGE',         az: 'nəhəng' },     
      ]
    },
  ]
},


    
    'b6_g0': { id: 'a2_b6_g0', title: 'Game 17', phases: [
    {
      words: [
        { word: 'EASILY',       az: 'asanlıqla' },
        { word: 'LAST',         az: 'son' },
        { word: 'LATELY',       az: 'son vaxtlar' },
        { word: 'STILL',        az: 'hələ də' },
        { word: 'YET',          az: 'hələ' },
      ]
    },
    {
      words: [
        { word: 'ALREADY',      az: 'artıq' },
        { word: 'CLEARLY',      az: 'aydın şəkildə' },
        { word: 'DAILY',        az: 'gündəlik' },
        { word: 'ALREADY',      az: 'artıq' },
      ]
    },
    {
      words: [
        { word: 'AFTER',        az: 'sonra' },
        { word: 'BEFORE',       az: 'əvvəl' },
        { word: 'SOON',         az: 'tezliklə' },
        { word: 'NEVER',        az: 'heç vaxt' },
        { word: 'OFTEN',        az: 'tez-tez' },
      ]
    },
  ]
},
    'b7_g0': { id: 'a2_b7_g0', title: 'Game 18',phases: [
    {
      words: [
        { word: 'AGREE',        az: 'razılaşmaq' },
        { word: 'ARGUE',        az: 'mübahisə etmək' },
        { word: 'SUGGEST',      az: 'təklif etmək' },
        { word: 'GUEST',        az: 'qonaq' },
      ]
    },
    {
      words: [
        { word: 'ADVICE',       az: 'məsləhət' },
        { word: 'COMMENT',      az: 'şərh' },
        { word: 'MENTION',      az: 'qeyd etmək' },
        { word: 'INVITE',       az: 'dəvət etmək' },
      ]
    },
    {
      words: [
        { word: 'ARGUMENT',     az: 'mübahisə' },
        { word: 'PROMISE',      az: 'söz vermək' },
        { word: 'MARRIAGE',     az: 'evlilik' },
        { word: 'PARTNER',      az: 'tərəfdaş' },
        { word: 'SUPPORT',      az: 'dəstək' },
      ]
    },
  ]
},
    'b8_g0': { id: 'a2_b8_g0', title: 'Game 19', phases: [
    {
      words: [
        { word: 'DANGER',       az: 'təhlükə' },
        { word: 'WAR',          az: 'müharibə' },
        { word: 'AWARD',        az: 'mükafat' },
        { word: 'EARN',         az: 'qazanmaq' },
      ]
    },
    {
      words: [
        { word: 'LAW',          az: 'qanun' },
        { word: 'STEAL',        az: 'oğurlamaq' },
        { word: 'SALE',         az: 'satış' },
        { word: 'TAX',          az: 'vergi' },
      ]
    },
    {
      words: [
        { word: 'CRIME',        az: 'cinayət' },
        { word: 'PROTECT',      az: 'qorumaq' },
        { word: 'OFFICER',      az: 'zabit' },
        { word: 'COIN',         az: 'sikkə' },
        { word: 'PERCENT',     az: 'faiz' },
        { word: 'PROFIT',       az: 'mənfəət' },
      ]
    },
  ]
},
    'b9_g0': { id: 'a2_b9_g0', title: 'Game 20', phases: [
    {
      words: [
        { word: 'GAS',          az: 'qaz' },
        { word: 'GOLD',         az: 'qızıl' },
        { word: 'GRASS',        az: 'ot' },
        { word: 'ABROAD',       az: 'xaricdə' },
      ]
    },
    {
      words: [
        { word: 'OIL',          az: 'neft' },
        { word: 'POLLUTION',    az: 'çirklənmə' },
        { word: 'NATURE',       az: 'təbiət' },
        { word: 'AIRLINE',      az: 'aviaşirkət' },
        { word: 'TOUR',         az: 'tur' },
        { word: 'ROUTE',        az: 'marşrut' },
        { word: 'TRIP',         az: 'səfər' },
      ]
    },
    {
      words: [
        { word: 'FOREST',       az: 'meşə' },
        { word: 'REDUCE',       az: 'azaltmaq' },
        { word: 'RESOURCE',     az: 'resurs' },
        { word: 'WASTE',        az: 'tullantı' },
        { word: 'WOOD',         az: 'taxta' },
        { word: 'COAST',        az: 'sahil' },
      ]
    },
  ]
},
  },

  // ── B1 ─────────────────────────────────────────────────
  // Blok 0 → [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → [5,6,7] → 3 quiz → 2 game
  // Blok 2 → [9,10] → 2 quiz → 1 game
  // Blok 3 → [12,13,14] → 3 quiz → 2 game
  // Blok 4 → [16,17,18] → 3 quiz → 2 game
  // Blok 5 → [20,21,22] → 3 quiz → 2 game
  // Blok 6 → [24,25] → 2 quiz → 1 game
  // Blok 7 → [27,28,29] → 3 quiz → 2 game
  'b1': {
    'b0_g0': { id: 'b1_b0_g0', title: 'Game 1', phases: [
    {
      words: [
        { word: 'EDUCATE',      az: 'təhsil vermək' },
        { word: 'EDUCATED',     az: 'təhsilli' },
        { word: 'CAREER',       az: 'karyera' },
        { word: 'TRADE',        az: 'ticarət' },
      ]
    },
    {
      words: [
        { word: 'TOPIC',        az: 'mövzu' },
        { word: 'COMPETITOR',   az: 'rəqib' },
        { word: 'PROMOTE',      az: 'təbliğ etmək' },
        { word: 'IMPORT',       az: 'idxal etmək' },
        { word: 'PRICE',        az: 'qiymət' },
      ]
    },
    {
      words: [
        { word: 'ACADEMIC',     az: 'akademik' },
        { word: 'CANDIDATE',    az: 'namizəd' },
        { word: 'INDICATE',     az: 'göstərmək' },
        { word: 'NOTE',         az: 'qeyd' },
        { word: 'ECONOMIC',     az: 'iqtisadi' },
      ]
    },
  ]
},

    'b0_g1': { id: 'b1_b0_g1', title: 'Game 2', phases: [
    {
      words: [

      ]
    },
    {
      words: [
        { word: 'GRADE',        az: 'qiymət' },
        { word: 'DIAGRAM',      az: 'diaqram' },
        { word: 'BARGAIN',      az: 'sövdələşmə' },
        { word: 'BRAND',        az: 'marka' },
      ]
    },
    {
      words: [
        { word: 'CHAPTER',      az: 'fəsil' },
        { word: 'PROJECT',      az: 'layihə' },
        { word: 'EXPORT',       az: 'ixrac etmək' },
        { word: 'TAX',          az: 'vergi' },
      ]
    },
  ]
},

    'b0_g2': { id: 'b1_b0_g2', title: 'Game 3',phases: [
    {
      words: [
        { word: 'REVISE',       az: 'təkrar etmək' },
        { word: 'NARRATIVE',    az: 'hekayə' },
        { word: 'TRANSLATE',    az: 'tərcümə etmək' },
        { word: 'CLIENT',       az: 'müştəri' },
        { word: 'INVEST',       az: 'sərmayə qoymaq' },
      ]
    },
    {
      words: [
        { word: 'PRACTICAL',    az: 'praktiki' },
        { word: 'APPLICATION',  az: 'müraciət' },
        { word: 'PROFIT',       az: 'mənfəət' },
        { word: 'FINANCIAL',    az: 'maliyyə' },
        { word: 'PROFIT',       az: 'mənfəət' },
      ]
    },
    {
      words: [
        { word: 'STANDARD',     az: 'standart' },
        { word: 'ACCOUNT',      az: 'hesab' },
        { word: 'STAFF',        az: 'heyət' },
        { word: 'AFFORD',       az: 'gücü çatmaq' },
        { word: 'RESOURCE',     az: 'resurs' },
      ]
    },
  ]
},


    
    'b1_g0': { id: 'b1_b1_g0', title: 'Game 4', phases: [
    {
      words: [
        { word: 'SCAN',         az: 'skan etmək' },
        { word: 'CONTACT',      az: 'əlaqə saxlamaq' },
        { word: 'STATE',        az: 'bəyan etmək' },
      ]
    },
    {
      words: [
        { word: 'MALL',         az: 'ticarət mərkəzi' },
        { word: 'VALUE',        az: 'dəyər' },
        { word: 'VALUABLE',     az: 'dəyərli' },
        { word: 'YELL',         az: 'bağırmaq' },
      ]
    },
    {
      words: [
        { word: 'CREDIT',       az: 'kredit' },
        { word: 'RENT',         az: 'icarə' },
        { word: 'COMMENT',      az: 'şərh' },
        { word: 'RECOMMEND',    az: 'tövsiyə etmək' },
        { word: 'REMIND',       az: 'xatırlatmaq' },
      ]
    },
  ]
},
    'b1_g1': { id: 'b1_b1_g1', title: 'Game 5', phases: [
    {
      words: [
        { word: 'FINE',         az: 'cərimə' },
        { word: 'CHANNEL',      az: 'kanal' },
        { word: 'FILE',         az: 'fayl' },
        { word: 'HEADLINE',     az: 'başlıq' },
      ]
    },
    {
      words: [
        { word: 'BARGAIN',      az: 'sövdələşmə' },
        { word: 'BRAND',        az: 'marka' },
        { word: 'GOODS',        az: 'mallar' },
        { word: 'LOG',          az: 'qeyd' },
        { word: 'SIGNAL',       az: 'siqnal' },
      ]
    },
    {
      words: [
        { word: 'PRICE',        az: 'qiymət' },
        { word: 'SCRIPT',       az: 'ssenari' },
        { word: 'UPDATE',       az: 'yeniləmək' },
        { word: 'APPRECIATE',   az: 'qiymətləndirmək' },
        { word: 'DISCUSS',      az: 'müzakirə etmək' },
        { word: 'PERSUADE',     az: 'razı salmaq' },
      ]
    },
  ]
},




    
    'b2_g0': { id: 'b1_b2_g0', title: 'Game 6', phases: [
    {
      words: [
        { word: 'UPSET',        az: 'narahat' },
        { word: 'CARELESS',     az: 'diqqətsiz' },
        { word: 'CRUEL',        az: 'zalım' },
        { word: 'PLEASANT',     az: 'xoş' },
        { word: 'UNPLEASANT',   az: 'xoşagəlməz' },
      ]
    },
    {
      words: [
        { word: 'AMAZED',       az: 'heyrətlənmiş' },
        { word: 'GLAD',         az: 'şad' },
        { word: 'MAD',          az: 'dəli / əsəbi' },
        { word: 'CALM',         az: 'sakit' },
        { word: 'GENTLE',       az: 'mülayim' },
        { word: 'TALENTED',     az: 'istedadlı' },
      ]
    },
    {
      words: [
        { word: 'HONEST',       az: 'dürüst' },
        { word: 'LONELY',       az: 'tənha' },
        { word: 'SHY',          az: 'utancaq' },
        { word: 'HORRIBLE',     az: 'dəhşətli' },
        { word: 'SENSIBLE',     az: 'ağıllı' },
        { word: 'SILLY',        az: 'axmaq' },
      ]
    },
  ]
},



    
    'b3_g0': { id: 'b1_b3_g0', title: 'Game 7', phases: [
    {
      words: [
        { word: 'BAN',          az: 'qadağan etmək' },
        { word: 'GUARD',        az: 'mühafizəçi' },
        { word: 'WARNING',      az: 'xəbərdarlıq' },
        { word: 'WARN',         az: 'xəbərdarlıq etmək' },
      ]
    },
    {
      words: [
        { word: 'BOMB',         az: 'bomba' },
        { word: 'STATE',        az: 'dövlət' },
        { word: 'BATTLE',       az: 'döyüş' },
        { word: 'BOMB',         az: 'bomba' },
        { word: 'SLAM',         az: 'şiddətlə vurmaq' },
      ]
    },
    {
      words: [
        { word: 'ELECTION',     az: 'seçki' },
        { word: 'VICTIM',       az: 'qurban' },
        { word: 'VOTE',         az: 'səs vermək' },
        { word: 'CLAIM',        az: 'iddia etmək' },
        { word: 'VIOLENT',      az: 'zorakı' },
      ]
    },
  ]
},
    'b3_g1': { id: 'b1_b3_g1', title: 'Game 8', phases: [
    {
      words: [
        { word: 'PRISON',       az: 'həbsxana' },
        { word: 'PUNISH',       az: 'cəzalandırmaq' },
        { word: 'BURST',        az: 'partlamaq' },
        { word: 'HUNT',         az: 'ov etmək' },
        { word: 'SHOOT',        az: 'atəş açmaq' },
      ]
    },
    {
      words: [
        { word: 'LEGAL',        az: 'qanuni' },
        { word: 'FORCE',        az: 'güc' },
        { word: 'KILLING',      az: 'öldürmə' },
        { word: 'RIFLE',        az: 'tüfəng' },
        { word: 'RISK',         az: 'risk' }, ]
    },
    {
      words: [
        { word: 'ARREST',       az: 'həbs etmək' },
        { word: 'POLITICAL',    az: 'siyasi' },
        { word: 'POLITICS',     az: 'siyasət' },
        { word: 'PROTEST',      az: 'etiraz' },
        { word: 'SLAP',         az: 'şillə vurmaq' },
      ]
    },
  ]
},



    
    'b4_g0': { id: 'b1_b4_g0', title: 'Game 9',  phases: [
    {
      words: [
        { word: 'RAIN',         az: 'yağış' },
        { word: 'DEER',         az: 'maral' },
        { word: 'SAND',         az: 'qum' },
        { word: 'SEED',         az: 'toxum' },
      ]
    },
    {
      words: [
        { word: 'GUIDE',        az: 'bələdçi' },
        { word: 'LUGGAGE',      az: 'baqaj' },
        { word: 'FUEL',         az: 'yanacaq' },
        { word: 'LEAF',         az: 'yarpaq' },
      ]
    },
    {
      words: [
        { word: 'TRAILER',      az: 'qoşqu' },
        { word: 'HEAT',         az: 'istilik' },
        { word: 'WEATHER',      az: 'hava' },
        { word: 'WHALE',        az: 'balina' },
        { word: 'WOOL',         az: 'yun' },
      ]
    },
  ]
},
    'b4_g1': { id: 'b1_b4_g1', title: 'Game 10',phases: [
    {
      words: [
        { word: 'BORDER',       az: 'sərhəd' },
        { word: 'DEPARTURE',    az: 'yola düşmə' },
        { word: 'PORT',         az: 'liman' },
        { word: 'ROUTE',        az: 'marşrut' },
      ]
    },
    {
      words: [
        { word: 'SAILOR',       az: 'dənizçi' },
        { word: 'TOURISM',      az: 'turizm' },
        { word: 'STORM',        az: 'fırtına' },
        { word: 'MUD',          az: 'palçıq' },
        { word: 'SOIL',         az: 'torpaq' },
      ]
    },
    {
      words: [
        { word: 'DESTINATION',  az: 'təyinat yeri' },
        { word: 'TRANSPORT',    az: 'nəqliyyat' },
        { word: 'DISASTER',     az: 'fəlakət' },
        { word: 'GRAIN',        az: 'taxıl' },
        { word: 'SPRING',       az: 'yaz' },
        { word: 'ENTRANCE',     az: 'giriş' },
      ]
    },
  ]
},



    
    'b5_g0': { id: 'b1_b5_g0', title: 'Game 11', phases: [
    {
      words: [
        { word: 'TIN',          az: 'qalay' },
        { word: 'PAIN',         az: 'ağrı' },
        { word: 'PAN',          az: 'tava' },
        { word: 'POT',          az: 'qazan' },
      ]
    },
    {
      words: [
        { word: 'LEATHER',      az: 'dəri' },
        { word: 'METAL',        az: 'metal' },
        { word: 'HEALTH',       az: 'sağlamlıq' },
        { word: 'TREAT',        az: 'müalicə etmək' },
        { word: 'MEAL',         az: 'yemək' },
      ]
    },
    {
      words: [
        { word: 'COAL',         az: 'kömür' },
        { word: 'COTTON',       az: 'pambıq' },
        { word: 'THROAT',       az: 'boğaz' },
        { word: 'ALCOHOL',      az: 'spirt' },
        { word: 'CLOTH',        az: 'parça' },
      ]
    },
  ]
},
    'b5_g1': { id: 'b1_b5_g1', title: 'Game 12', phases: [
    {
      words: [
        { word: 'SCIENTIFIC',   az: 'elmi' },
        { word: 'CHEST',        az: 'sinə' },
        { word: 'FITNESS',      az: 'fiziki forma' },
        { word: 'ILLNESS',      az: 'xəstəlik' },
        { word: 'SLICE',        az: 'dilim' },
      ]
    },
    {
      words: [
        { word: 'MATERIAL',     az: 'material' },
        { word: 'BREATH',       az: 'nəfəs' },
        { word: 'BREATHE',      az: 'nəfəs almaq' },
        { word: 'MENTAL',       az: 'zehni' },
        { word: 'TREATMENT',    az: 'müalicə' },
      ]
    },
    {
      words: [
        { word: 'COPPER',       az: 'mis' },
        { word: 'FUEL',         az: 'yanacaq' },
        { word: 'IRON',         az: 'dəmir' },
        { word: 'NUCLEAR',      az: 'nüvə' },
        { word: 'PAINFUL',      az: 'ağrılı' },
        { word: 'APPLIANCE',    az: 'məişət texnikası' },
        { word: 'FLOUR',        az: 'un' },
        { word: 'RECIPE',       az: 'resept' },
      ]
    },
  ]
},




    
    'b6_g0': { id: 'b1_b6_g0', title: 'Game 13', phases: [
    {
      words: [
        { word: 'APPLIANCE',    az: 'məişət texnikası' },
        { word: 'CEILING',      az: 'tavan' },
        { word: 'PAN',          az: 'tava' },
        { word: 'PIPE',         az: 'boru' },
      ]
    },
    {
      words: [
        { word: 'ALARM',        az: 'zəng / siqnal' },
        { word: 'GARAGE',       az: 'qaraj' },
        { word: 'BRIDE',        az: 'gəlin' },
        { word: 'MARRIAGE',     az: 'evlilik' },
      ]
    },
    {
      words: [
        { word: 'BEDROOM',      az: 'yataq otağı' },
        { word: 'COTTAGE',      az: 'kiçik ev' },
        { word: 'ENGAGED',      az: 'nişanlı' },
        { word: 'ROMANCE',      az: 'romantika' },
        { word: 'ROMANTIC',     az: 'romantik' },
        { word: 'TRADITION',    az: 'ənənə' },
      ]
    },
  ]
},



    
    'b7_g0': { id: 'b1_b7_g0', title: 'Game 14', phases: [
    {
      words: [
        { word: 'POEM',         az: 'şeir' },
        { word: 'POET',         az: 'şair' },
        { word: 'POETRY',       az: 'şeir sənəti' },
        { word: 'REPORT',       az: 'hesabat' },
      ]
    },
    {
      words: [
        { word: 'THEME',        az: 'mövzu' },
        { word: 'ATHLETE',      az: 'atlet' },
        { word: 'TALENT',       az: 'istedad' },
        { word: 'LABEL',        az: 'etiket' },
      ]
    },
    {
      words: [
        { word: 'CULTURAL',     az: 'mədəni' },
        { word: 'CULTURE',      az: 'mədəniyyət' },
        { word: 'GIG',          az: 'konsert' },
        { word: 'RACE',         az: 'qaçış yarışı' },
        { word: 'RACING',       az: 'yarış' },
        { word: 'TRAINING',     az: 'məşq' },
      ]
    },
  ]
},
    'b7_g1': { id: 'b1_b7_g1', title: 'Game 15', phases: [
    {
      words: [
        { word: 'ALBUM',        az: 'albom' },
        { word: 'MAGIC',        az: 'sehrli' },
        { word: 'MUSCLE',       az: 'əzələ' },
        { word: 'RUGBY',        az: 'reqbi' },
        { word: 'SUMMARY',      az: 'xülasə' },
      ]
    },
    {
      words: [
        { word: 'CAPTAIN',      az: 'kapitan' },
        { word: 'CHAMPION',     az: 'çempion' },
        { word: 'COACH',        az: 'məşqçi' },
        { word: 'COMMENT',      az: 'şərh' },
        { word: 'NOTE',         az: 'qeyd' },
        { word: 'TOPIC',        az: 'mövzu' },
      ]
    },
    {
      words: [
        { word: 'PORTRAIT',     az: 'portret' },
        { word: 'STUDIO',       az: 'studiya' },
        { word: 'SPEED',        az: 'sürət' },
        { word: 'STADIUM',      az: 'stadion' },
        { word: 'SUPPORTER',    az: 'azarkeş' },
        { word: 'SUMMARISE',    az: 'xülasə etmək' },
      ]
    },
  ]
},
  },

  // ── B2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 quiz → 1 game
  // Blok 1 → [3,4,5] → 3 quiz → 2 game
  // Blok 2 → [7,8,9,10] → 4 quiz → 3 game
  // Blok 3 → [12,13,14] → 3 quiz → 2 game
  // Blok 4 → [16,17] → 2 quiz → 1 game
  // Blok 5 → [19,20] → 2 quiz → 1 game
  // Blok 6 → [22,23,24,25] → 4 quiz → 3 game
  // Blok 7 → [27,28,29,30] → 4 quiz → 3 game
  // Blok 8 → [32,33] → 2 quiz → 1 game
  // Blok 9 → [35,36] → 2 quiz → 1 game
  // Blok 10 → [38,39] → 2 quiz → 1 game
  // Blok 11 → [41,42] → 2 quiz → 1 game
  // Blok 12 → [44,45,46] → 3 quiz → 2 game
  // Blok 13 → [48,49,50] → 3 quiz → 2 game
  // Blok 14 → [52,53] → 2 quiz → 1 game
  'b2': {
    'b0_g0':  { id: 'b2_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'b2_b1_g0',  title: 'Game 2',  words: [] },
    'b1_g1':  { id: 'b2_b1_g1',  title: 'Game 3',  words: [] },
    'b2_g0':  { id: 'b2_b2_g0',  title: 'Game 4',  words: [] },
    'b2_g1':  { id: 'b2_b2_g1',  title: 'Game 5',  words: [] },
    'b2_g2':  { id: 'b2_b2_g2',  title: 'Game 6',  words: [] },
    'b3_g0':  { id: 'b2_b3_g0',  title: 'Game 7',  words: [] },
    'b3_g1':  { id: 'b2_b3_g1',  title: 'Game 8',  words: [] },
    'b4_g0':  { id: 'b2_b4_g0',  title: 'Game 9',  words: [] },
    'b5_g0':  { id: 'b2_b5_g0',  title: 'Game 10', words: [] },
    'b6_g0':  { id: 'b2_b6_g0',  title: 'Game 11', words: [] },
    'b6_g1':  { id: 'b2_b6_g1',  title: 'Game 12', words: [] },
    'b6_g2':  { id: 'b2_b6_g2',  title: 'Game 13', words: [] },
    'b7_g0':  { id: 'b2_b7_g0',  title: 'Game 14', words: [] },
    'b7_g1':  { id: 'b2_b7_g1',  title: 'Game 15', words: [] },
    'b7_g2':  { id: 'b2_b7_g2',  title: 'Game 16', words: [] },
    'b8_g0':  { id: 'b2_b8_g0',  title: 'Game 17', words: [] },
    'b9_g0':  { id: 'b2_b9_g0',  title: 'Game 18', words: [] },
    'b10_g0': { id: 'b2_b10_g0', title: 'Game 19', words: [] },
    'b11_g0': { id: 'b2_b11_g0', title: 'Game 20', words: [] },
    'b12_g0': { id: 'b2_b12_g0', title: 'Game 21', words: [] },
    'b12_g1': { id: 'b2_b12_g1', title: 'Game 22', words: [] },
    'b13_g0': { id: 'b2_b13_g0', title: 'Game 23', words: [] },
    'b13_g1': { id: 'b2_b13_g1', title: 'Game 24', words: [] },
    'b14_g0': { id: 'b2_b14_g0', title: 'Game 25', words: [] },
  },

  // ── C1 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 quiz → 1 game
  // Blok 1 → [3,4] → 2 quiz → 1 game
  // Blok 2 → [6,7,8] → 3 quiz → 2 game
  // Blok 3 → [10,11] → 2 quiz → 1 game
  // Blok 4 → [13,14,15] → 3 quiz → 2 game
  // Blok 5 → [17,18,19] → 3 quiz → 2 game
  // Blok 6 → [21,22,23] → 3 quiz → 2 game
  // Blok 7 → [25,26,27] → 3 quiz → 2 game
  // Blok 8 → [29,30,31] → 3 quiz → 2 game
  // Blok 9 → [33,34,35] → 3 quiz → 2 game
  // Blok 10 → [37,38,39] → 3 quiz → 2 game
  // Blok 11 → [41,42,43] → 3 quiz → 2 game
  // Blok 12 → [45,46,47] → 3 quiz → 2 game
  // Blok 13 → [49,50,51,52] → 4 quiz → 3 game
  'c1': {
    'b0_g0':  { id: 'c1_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'c1_b1_g0',  title: 'Game 2',  words: [] },
    'b2_g0':  { id: 'c1_b2_g0',  title: 'Game 3',  words: [] },
    'b2_g1':  { id: 'c1_b2_g1',  title: 'Game 4',  words: [] },
    'b3_g0':  { id: 'c1_b3_g0',  title: 'Game 5',  words: [] },
    'b4_g0':  { id: 'c1_b4_g0',  title: 'Game 6',  words: [] },
    'b4_g1':  { id: 'c1_b4_g1',  title: 'Game 7',  words: [] },
    'b5_g0':  { id: 'c1_b5_g0',  title: 'Game 8',  words: [] },
    'b5_g1':  { id: 'c1_b5_g1',  title: 'Game 9',  words: [] },
    'b6_g0':  { id: 'c1_b6_g0',  title: 'Game 10', words: [] },
    'b6_g1':  { id: 'c1_b6_g1',  title: 'Game 11', words: [] },
    'b7_g0':  { id: 'c1_b7_g0',  title: 'Game 12', words: [] },
    'b7_g1':  { id: 'c1_b7_g1',  title: 'Game 13', words: [] },
    'b8_g0':  { id: 'c1_b8_g0',  title: 'Game 14', words: [] },
    'b8_g1':  { id: 'c1_b8_g1',  title: 'Game 15', words: [] },
    'b9_g0':  { id: 'c1_b9_g0',  title: 'Game 16', words: [] },
    'b9_g1':  { id: 'c1_b9_g1',  title: 'Game 17', words: [] },
    'b10_g0': { id: 'c1_b10_g0', title: 'Game 18', words: [] },
    'b10_g1': { id: 'c1_b10_g1', title: 'Game 19', words: [] },
    'b11_g0': { id: 'c1_b11_g0', title: 'Game 20', words: [] },
    'b11_g1': { id: 'c1_b11_g1', title: 'Game 21', words: [] },
    'b12_g0': { id: 'c1_b12_g0', title: 'Game 22', words: [] },
    'b12_g1': { id: 'c1_b12_g1', title: 'Game 23', words: [] },
    'b13_g0': { id: 'c1_b13_g0', title: 'Game 24', words: [] },
    'b13_g1': { id: 'c1_b13_g1', title: 'Game 25', words: [] },
    'b13_g2': { id: 'c1_b13_g2', title: 'Game 26', words: [] },
  },

  // ── C2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 → 1 game
  // Blok 1 → [3,4] → 2 → 1 game
  // Blok 2 → [6,7,8,9] → 4 → 3 game
  // Blok 3 → [11,12,13,14] → 4 → 3 game
  // Blok 4 → [16,17,18] → 3 → 2 game
  // Blok 5 → [20,21,22,23] → 4 → 3 game
  // Blok 6 → [25,26,27] → 3 → 2 game
  // Blok 7 → [29,30,31,32] → 4 → 3 game
  // Blok 8 → [34,35,36,37] → 4 → 3 game
  // Blok 9 → [39,40,41] → 3 → 2 game
  // Blok 10 → [43,44] → 2 → 1 game
  // Blok 11 → [46,47] → 2 → 1 game
  // Blok 12 → [49,50] → 2 → 1 game
  // Blok 13 → [52,53,54] → 3 → 2 game
  // Blok 14 → [56,57] → 2 → 1 game
  // Blok 15 → [59,60,61] → 3 → 2 game
  // Blok 16 → [63,64] → 2 → 1 game
  // Blok 17 → [66,67,68] → 3 → 2 game
  // Blok 18 → [70,71,72] → 3 → 2 game
  'c2': {
    'b0_g0':  { id: 'c2_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'c2_b1_g0',  title: 'Game 2',  words: [] },
    'b2_g0':  { id: 'c2_b2_g0',  title: 'Game 3',  words: [] },
    'b2_g1':  { id: 'c2_b2_g1',  title: 'Game 4',  words: [] },
    'b2_g2':  { id: 'c2_b2_g2',  title: 'Game 5',  words: [] },
    'b3_g0':  { id: 'c2_b3_g0',  title: 'Game 6',  words: [] },
    'b3_g1':  { id: 'c2_b3_g1',  title: 'Game 7',  words: [] },
    'b3_g2':  { id: 'c2_b3_g2',  title: 'Game 8',  words: [] },
    'b4_g0':  { id: 'c2_b4_g0',  title: 'Game 9',  words: [] },
    'b4_g1':  { id: 'c2_b4_g1',  title: 'Game 10', words: [] },
    'b5_g0':  { id: 'c2_b5_g0',  title: 'Game 11', words: [] },
    'b5_g1':  { id: 'c2_b5_g1',  title: 'Game 12', words: [] },
    'b5_g2':  { id: 'c2_b5_g2',  title: 'Game 13', words: [] },
    'b6_g0':  { id: 'c2_b6_g0',  title: 'Game 14', words: [] },
    'b6_g1':  { id: 'c2_b6_g1',  title: 'Game 15', words: [] },
    'b7_g0':  { id: 'c2_b7_g0',  title: 'Game 16', words: [] },
    'b7_g1':  { id: 'c2_b7_g1',  title: 'Game 17', words: [] },
    'b7_g2':  { id: 'c2_b7_g2',  title: 'Game 18', words: [] },
    'b8_g0':  { id: 'c2_b8_g0',  title: 'Game 19', words: [] },
    'b8_g1':  { id: 'c2_b8_g1',  title: 'Game 20', words: [] },
    'b8_g2':  { id: 'c2_b8_g2',  title: 'Game 21', words: [] },
    'b9_g0':  { id: 'c2_b9_g0',  title: 'Game 22', words: [] },
    'b9_g1':  { id: 'c2_b9_g1',  title: 'Game 23', words: [] },
    'b10_g0': { id: 'c2_b10_g0', title: 'Game 24', words: [] },
    'b11_g0': { id: 'c2_b11_g0', title: 'Game 25', words: [] },
    'b12_g0': { id: 'c2_b12_g0', title: 'Game 26', words: [] },
    'b13_g0': { id: 'c2_b13_g0', title: 'Game 27', words: [] },
    'b13_g1': { id: 'c2_b13_g1', title: 'Game 28', words: [] },
    'b14_g0': { id: 'c2_b14_g0', title: 'Game 29', words: [] },
    'b15_g0': { id: 'c2_b15_g0', title: 'Game 30', words: [] },
    'b15_g1': { id: 'c2_b15_g1', title: 'Game 31', words: [] },
    'b16_g0': { id: 'c2_b16_g0', title: 'Game 32', words: [] },
    'b17_g0': { id: 'c2_b17_g0', title: 'Game 33', words: [] },
    'b17_g1': { id: 'c2_b17_g1', title: 'Game 34', words: [] },
    'b18_g0': { id: 'c2_b18_g0', title: 'Game 35', words: [] },
    'b18_g1': { id: 'c2_b18_g1', title: 'Game 36', words: [] },
  },
};

// ── Köməkçi funksiya: levelId + gameId ilə data al ────────
function getGameData(levelId, gameId) {
  return GAME_DATA[levelId]?.[gameId] || null;
}

// ── Global export ─────────────────────────────────────────
window.GAME_DATA   = GAME_DATA;
window.getGameData = getGameData;
