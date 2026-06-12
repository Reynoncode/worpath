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
//        { word: 'APPLE', clue: 'A fruit', az: 'alma', definition: 'a round red or green fruit' },
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
        { word: 'BABY',         az: 'körpə', definition: 'a very young child who cannot walk or talk yet' },
        { word: 'BOY',          az: 'oğlan', definition: 'a male child' },
        { word: 'ANYBODY',      az: 'hər hansı biri', definition: 'any person at all' },
        { word: 'NOBODY',       az: 'heç kim', definition: 'no person' },
      ]
    },
    {
      // Phase 2 — Peşələr (ortaq hərflər: S, E, R, I, N)
      words: [
        
        { word: 'ACTRESS',      az: 'aktrisa', definition: 'a woman who acts in films or theatre' },
        { word: 'ARTIST',       az: 'rəssam', definition: 'a person who creates art' },
        { word: 'WAITER',       az: 'ofisiant', definition: 'a person who serves food in restaurants' },
        { word: 'WRITER',       az: 'yazıçı', definition: 'a person who writes books and stories' },
      ]
    },
    {
      // Phase 3 — Ümumi insanlar (ortaq hərflər: O, N, E, R, A)
      words: [
        { word: 'DANCER',       az: 'rəqqas', definition: 'a person who dances to music' },
        { word: 'MAN',          az: 'kişi', definition: 'an adult male person' },
        { word: 'MEMBER',       az: 'üzv', definition: 'a person who belongs to a group, club, or organization' },
        
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
        { word: 'MAN',          az: 'kişi', definition: 'an adult male person' },
        { word: 'AUNT',         az: 'xala', definition: 'sister of your parents' },
        { word: 'DAD',          az: 'papa', definition: 'informal word for your father' },
        { word: 'MUM',          az: 'mama', definition: 'informal word for your mother' },
      ]
    },
    {
      words: [
        
        { word: 'WOMAN',        az: 'qadın', definition: 'an adult female person' },
        { word: 'SOMEONE',      az: 'biri', definition: 'a person who is not specified' },
        { word: 'SON',          az: 'oğul', definition: 'a male child of his parents' },
      ]
    },
    {
      words: [
        { word: 'PARTNER',      az: 'ortaq', definition: 'a person you are in a relationship with' },
        { word: 'PERSON',       az: 'insan', definition: 'a human being' },
        { word: 'PARENT',       az: 'valideyn', definition: 'a mother or a father' },
        { word: 'SON',          az: 'oğul', definition: 'a male child of his parents' },
      ]
    },
  ]
},
    'b0_g2': { id: 'a1_b0_g2', title: 'Game 3',      phases: [
    {
      words: [
        { word: 'ARM',          az: 'qol', definition: 'the upper limb from shoulder to hand' },
        { word: 'EAR',          az: 'qulaq', definition: 'the part of your head you hear with' },
        { word: 'FACE',         az: 'üz', definition: 'the front part of your head' },
      ]
    },
    {
      words: [
        { word: 'BODY',         az: 'bədən', definition: 'the entire physical structure of a human' },
        { word: 'EYE',          az: 'göz', definition: 'the part of your face you see with' },
        { word: 'HAND',         az: 'əl', definition: 'the part at the end of your arm' },
        { word: 'HEAD',         az: 'baş', definition: 'the top part of your body' },        
      ]
    },
    {
      words: [

        { word: 'BROTHER',      az: 'qardaş', definition: 'a boy who has the same parents as you' },
        { word: 'MOTHER',       az: 'ana', definition: 'a female parent' },
        { word: 'TOOTH',        az: 'diş', definition: 'the hard white parts inside your mouth used for biting' },
        { word: 'BOTTOM',       az: 'oturacaq', definition: 'lowest part' },
      ]
    },
  ]
},


    
    // Blok 1 gameləri
    'b1_g0': { id: 'a1_b1_g0', title: 'Game 4',      phases: [
    {
      words: [
        { word: 'TALL',         az: 'hündür', definition: 'high person' },
        { word: 'FAT',          az: 'kök', definition: 'big body' },
        { word: 'LEFT',         az: 'sol', definition: 'left side' },
        { word: 'LATE',         az: 'gec', definition: 'after the right time' },
      ]
    },
    {
      words: [
            { word: 'COOL',         az: 'əla', definition: 'very good' },
        { word: 'GOOD',         az: 'yaxşı', definition: 'nice or correct' },
        { word: 'COLD',         az: 'soyuq', definition: 'not warm' },
        { word: 'OLD',          az: 'köhnə', definition: 'not new' },
      ]
    },
    {
      words: [
        { word: 'DEAR',         az: 'əziz', definition: 'very loved' },
        { word: 'DRY',          az: 'quru', definition: 'not wet' },
        { word: 'EARLY',        az: 'erkən', definition: 'before the right time' },
        { word: 'READY',        az: 'hazır', definition: 'prepared to do' },
        { word: 'REAL',         az: 'həqiqi', definition: 'not fake' },

      ]
    },
  ]
},

    
    'b1_g1': { id: 'a1_b1_g1', title: 'Game 5',phases: [
    {
      words: [
        { word: 'SHORT',        az: 'qısa', definition: 'not long' },
        { word: 'TOP',          az: 'üst', definition: 'highest part' },
        { word: 'HOT',          az: 'isti', definition: 'very warm' },
        { word: 'POOR',         az: 'kasıb', definition: 'has little money' },
      ]
    },
    {
      words: [
        { word: 'BACK',         az: 'arxa', definition: 'the rear part of your body' },
        { word: 'BAD',          az: 'pis', definition: 'not good' },
        { word: 'DARK',         az: 'qaranlıq', definition: 'with very little light' },    
      ]
    },
    {
      words: [

        { word: 'SAD',          az: 'kədərli', definition: 'feeling unhappy' },
        { word: 'SMALL',        az: 'kiçik', definition: 'little size' },
        { word: 'MIDDLE',       az: 'orta', definition: 'centre part' },
        { word: 'SIDE',         az: 'yan', definition: 'left or right part' },
        { word: 'SAME',         az: 'eyni', definition: 'exactly like' },
      ]
    },
  ]
},

    
    'b1_g2': { id: 'a1_b1_g2', title: 'Game 6',phases: [
    {
      words: [
        { word: 'FULL',         az: 'dolu', definition: 'no space left' },
        { word: 'FALSE',        az: 'yalan', definition: 'not true' },
        { word: 'FREE',         az: 'azad', definition: 'costs nothing' },
        { word: 'SURE',         az: 'əmin', definition: 'very certain' },
      ]
    },
    {
      words: [
        { word: 'BIG',          az: 'böyük', definition: 'large size' },
        { word: 'HIGH',         az: 'yüksək', definition: 'far up' },
        { word: 'RIGHT',        az: 'sağ', definition: 'right side' },
        { word: 'RICH',         az: 'varlı', definition: 'has a lot of money' },    
      ]
    },
    {
      words: [

        { word: 'TIRED',        az: 'yorğun', definition: 'feeling the need to rest' },
        { word: 'NICE',         az: 'xoş', definition: 'pleasant and kind' },
        { word: 'CENTRE',       az: 'mərkəz', definition: 'middle of the city' },
        { word: 'DIFFERENT',    az: 'fərqli', definition: 'not the same' },
        { word: 'FINE',         az: 'normal', definition: 'money you have to pay as a punishment' },
      ]
    },
  ]
},

'b1_g3': { id: 'a1_b1_g3', title: 'Game 7', phases: [
    {
      words: [
        { word: 'GREAT',        az: 'əla',        definition: 'Of an extent, amount, or intensity considerably above the normal or average.' },
        { word: 'LARGE',        az: 'iri',         definition: 'Of considerable or relatively great size, extent, or capacity.' },
        { word: 'LITTLE',       az: 'balaca',      definition: 'Small in size, amount, or degree.' },
        { word: 'TERRIBLE',     az: 'dəhşətli',    definition: 'Extremely bad or serious; causing or likely to cause terror.' },
      ]
    },
    {
      words: [
        { word: 'FEEL',         az: 'hiss etmək',  definition: 'To be aware of a sensation or emotion through physical or mental experience.' },
        { word: 'HATE',         az: 'nifrət etmək',definition: 'To feel intense dislike or strong aversion toward someone or something.' },
        { word: 'HALF',         az: 'yarım',       definition: 'Either of two equal parts that together make up a whole.' },
        { word: 'FAST',         az: 'sürətli',     definition: 'Moving or capable of moving at high speed.' },
      ]
    },
    {
      words: [
        { word: 'PERFECT',      az: 'mükəmməl',    definition: 'Having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be.' },
        { word: 'FRONT',        az: 'ön',          definition: 'The side or part of an object that faces forward or is normally seen first.' },
        { word: 'CORRECT',      az: 'düzgün',      definition: 'Free from error; in accordance with fact or truth.' },
        { word: 'OPEN',         az: 'açıq',        definition: 'Allowing access, passage, or a view; not closed or blocked.' },
      ]
    },
  ]
},
    
    // Blok 2 gameləri
    'b2_g0': { id: 'a1_b2_g0', title: 'Game 8', phases: [
    {
      words: [
        { word: 'TOMATO',       az: 'pomidor', definition: 'a round red vegetable' },
        { word: 'MEAT',         az: 'ət', definition: 'food from animals' },
        { word: 'TEA',          az: 'çay', definition: 'hot drink from leaves' },
        { word: 'EAT',       az: 'yemək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'PEPPER',       az: 'bibər', definition: 'a red or green vegetable' },
        { word: 'RICE',         az: 'düyü', definition: 'small white grains' },
        { word: 'RECIPE',       az: 'resept', definition: 'instructions for cooking a particular dish' },
        { word: 'BEER',         az: 'pivə', definition: 'alcoholic drink from grain' },    
      ]
    },
    {
      words: [
        { word: 'BANANA',       az: 'banan', definition: 'a long yellow fruit' },
        { word: 'PLANT',        az: 'bitki', definition: 'living thing in a pot' },
        { word: 'SALT',         az: 'duz', definition: 'white powder that makes food salty' },
        { word: 'PASTA',        az: 'makaron', definition: 'Italian food from flour' },
      ]
    },
  ]
},

    'b2_g1': { id: 'a1_b2_g1', title: 'Game 9', phases: [
    {
      words: [
        { word: 'ONION',        az: 'soğan', definition: 'a round white vegetable with strong smell' },
        { word: 'DIET',         az: 'pəhriz', definition: 'special food plan' },
        { word: 'DINNER',       az: 'axşam yeməyi', definition: 'evening meal' },
        { word: 'ORDER',     az: 'sifariş etmək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
            { word: 'APPLE',        az: 'alma', definition: 'a round red or green fruit' },
        { word: 'EGG',          az: 'yumurta', definition: 'food that comes from chickens' },
        { word: 'MEAL',         az: 'yemək', definition: 'food eaten at one time' },
      ]
    },
    {
      words: [
        { word: 'CHEESE',       az: 'pendir', definition: 'a solid food made from milk' },
        { word: 'FISH',         az: 'balıq', definition: 'an animal that lives in water' },
        { word: 'DISH',         az: 'təam', definition: 'one kind of food' },
        { word: 'FOOD',         az: 'qida', definition: 'things we eat' },
        { word: 'COFFEE',       az: 'qəhvə', definition: 'hot brown drink' },

      ]
    },
  ]
},

    
    // Blok 3 gameləri
    'b3_g0': { id: 'a1_b3_g0', title: 'Game 10', phases: [
    {
      words: [
        { word: 'ONE',          az: 'bir', definition: 'the number 1' },
        { word: 'NINE',         az: 'doqquz', definition: 'the number 9' },
        { word: 'ONCE',         az: 'bir dəfə', definition: 'one time' },
      ]
    },
    {
      words: [
        { word: 'TEN',          az: 'on', definition: 'the number 10' },
        { word: 'FIFTEEN',      az: 'on beş', definition: 'the number 15' },
        { word: 'FIFTY',        az: 'əlli', definition: 'the number 50' },
        { word: 'NINETY',       az: 'doxsan', definition: 'the number 90' },    
      ]
    },
    {
      words: [
        { word: 'GREEN',        az: 'yaşıl', definition: 'colour of grass' },
        { word: 'THREE',        az: 'üç', definition: 'the number 3' },
        { word: 'EIGHT',        az: 'səkkiz', definition: 'the number 8' },
        { word: 'THIRTEEN',     az: 'on üç', definition: 'the number 13' },
        { word: 'EIGHTEEN',     az: 'on səkkiz', definition: 'the number 18' },

      ]
    },
  ]
},
    'b3_g1': { id: 'a1_b3_g1', title: 'Game 11', phases: [
    {
      words: [
        { word: 'RED',          az: 'qırmızı', definition: 'colour of blood' },
        { word: 'DARK',         az: 'qaranlıq', definition: 'with very little light' },
        { word: 'PALE',         az: 'solğun', definition: 'very light colour' },
        { word: 'DEEP',         az: 'dərin', definition: 'going far down' },
      ]
    },
    {
      words: [
            { word: 'SIX',          az: 'altı', definition: 'the number 6' },
        { word: 'SEVEN',        az: 'yeddi', definition: 'the number 7' },
        { word: 'SIXTEEN',      az: 'on altı', definition: 'the number 16' },
        { word: 'SIXTY',        az: 'altmış', definition: 'the number 60' },
        { word: 'SEVENTY',      az: 'yetmiş', definition: 'the number 70' },
      ]
    },
    {
      words: [
        { word: 'FOUR',         az: 'dörd', definition: 'the number 4' },
        { word: 'THIRTY',       az: 'otuz', definition: 'the number 30' },
        { word: 'FORTY',        az: 'qırx', definition: 'the number 40' },
        { word: 'FOURTH',       az: 'dördüncü', definition: 'number 4 in order' },
        { word: 'FIFTH',        az: 'beşinci', definition: 'number 5 in order' },

      ]
    },
  ]
},


    
    // Blok 4 gameləri
    'b4_g0': { id: 'a1_b4_g0', title: 'Game 12', phases: [
    {
      words: [
        { word: 'BED',          az: 'çarpayı', definition: 'furniture for sleeping' },
        { word: 'AREA',         az: 'ərazi', definition: 'part of a city' },
        { word: 'BAR',          az: 'bar', definition: 'place for alcoholic drinks' },
      ]
    },
    {
      words: [
        { word: 'POOL',         az: 'hovuz', definition: 'place to swim' },
        { word: 'POST',         az: 'poçt', definition: 'place to send letters' },
        { word: 'TOP',          az: 'zirvə', definition: 'highest part' },
      ]
    },
    {
      words: [
        { word: 'PAPER',        az: 'kağız', definition: 'thin material for writing' },
        { word: 'PEN',          az: 'qələm', definition: 'writes with ink' },
        { word: 'PARK',         az: 'park', definition: 'green place with trees' },
      ]
    },
  ]
},
    'b4_g1': { id: 'a1_b4_g1', title: 'Game 13', phases: [
    {
      words: [
        { word: 'HOME',         az: 'ev', definition: 'the place where you live' },
        { word: 'HOUSE',        az: 'ev', definition: 'a building for one family' },
        { word: 'MUSEUM',       az: 'muzey', definition: 'a place where old and important things are shown' },
      ]
    },
    {
      words: [
        { word: 'BATH',         az: 'vanna', definition: 'a big tub for washing' },
        { word: 'TABLE',        az: 'masa', definition: 'furniture where you eat' },
        { word: 'BOTTLE',       az: 'şüşə', definition: 'a tall container for liquids' },
        { word: 'HOTEL',        az: 'otel', definition: 'a building where people pay to stay' },
      ]
    },
    {
      words: [
        { word: 'CUP',          az: 'fincan', definition: 'a small container for hot drinks' },
        { word: 'CLUB',         az: 'klub', definition: 'place for dancing' },
        { word: 'PLACE',        az: 'məkan', definition: 'where something is' },
      ]
    },
  ]
},
    'b4_g2': { id: 'a1_b4_g2', title: 'Game 14', phases: [
    {
      words: [
        { word: 'BAG',          az: 'çanta', definition: 'you carry things in it' },
        { word: 'KEY',          az: 'açar', definition: 'opens a door' },
        { word: 'BANK',         az: 'bank', definition: 'place for money' },
        { word: 'GYM',          az: 'idman zalı', definition: 'place for exercise' },
      ]
    },
    {
      words: [
        { word: 'BATHROOM',     az: 'vanna otağı', definition: 'room with toilet and shower' },
        { word: 'ROOM',         az: 'otaq', definition: 'a space inside a house' },
        { word: 'THEATRE',      az: 'teatr', definition: 'a building where plays are performed' },
        { word: 'BOTTOM',       az: 'dib', definition: 'lowest part' },
      ]
    },
    {
      words: [
        { word: 'FLAT',         az: 'mənzil', definition: 'without hills or curves' },
        { word: 'TOILET',       az: 'tualet', definition: 'room with WC' },
        { word: 'CAFE',         az: 'kafe', definition: 'small place for coffee' },
        { word: 'OFFICE',       az: 'ofis', definition: 'place where people work at desks' },
      ]
    },
  ]
},




    
    // Blok 5 gameləri
    'b5_g0': { id: 'a1_b5_g0', title: 'Game 15', phases: [
    {
      words: [
        { word: 'CAT',          az: 'pişik', definition: 'a small pet that says meow' },
        { word: 'BOAT',         az: 'qayıq', definition: 'a small vehicle for water' },
        { word: 'BOOT',         az: 'çəkmə', definition: 'tall footwear' },
        { word: 'COAT',         az: 'palto', definition: 'a warm outer piece of clothing' },
      ]
    },
    {
      words: [
        { word: 'AIR',          az: 'hava', definition: 'what we breathe' },
        { word: 'RAIN',         az: 'yağış', definition: 'water that falls from clouds' },
        { word: 'TRAIN',        az: 'qatar', definition: 'a long vehicle that runs on rails' },
        { word: 'TRIP',         az: 'səfər', definition: 'a short journey' },
        { word: 'PAIR',         az: 'cüt', definition: 'two things together' },
      ]
    },
    {
      words: [
        { word: 'EAST',         az: 'şərq', definition: 'direction of sunrise' },
        { word: 'SEA',          az: 'dəniz', definition: 'big salt water' },
        { word: 'WEST',         az: 'qərb', definition: 'direction of sunset' },
        { word: 'TREE',         az: 'ağac', definition: 'a tall plant with a trunk' },
        { word: 'WATER',        az: 'su', definition: 'clear liquid we drink' },
        { word: 'SWEATER',      az: 'sviter', definition: 'warm wool top' },
      ]
    },
  ]
},
    'b5_g1': { id: 'a1_b5_g1', title: 'Game 16',  phases: [
    {
      words: [
        { word: 'ROAD',         az: 'yol', definition: 'way for cars' },
        { word: 'COW',          az: 'inək', definition: 'big farm animal that gives milk' },
        { word: 'WOOD',         az: 'taxta', definition: 'material from trees used for building' },
        { word: 'CAR',          az: 'avtomobil', definition: 'a small vehicle for families' },
      ]
    },
    {
      words: [
        { word: 'ICE',          az: 'buz', definition: 'frozen water' },
        { word: 'BIKE',         az: 'motosiklet', definition: 'short word for bicycle' },
        { word: 'TICKET',       az: 'bilet', definition: 'a piece of paper that allows you to travel' },
      ]
    },
    {
      words: [
        { word: 'DOG',          az: 'it', definition: 'a pet that says woof' },
        { word: 'HORSE',        az: 'at', definition: 'a big animal people ride' },
        { word: 'DRESS',        az: 'don', definition: 'a one-piece clothing for women' },
        { word: 'SHOE',         az: 'ayaqqabı', definition: 'footwear' },
      ]
    },
  ]
},
    'b5_g2': { id: 'a1_b5_g2', title: 'Game 17',  phases: [
    {
      words: [
        { word: 'DOG',          az: 'it', definition: 'a pet that says woof' },
        { word: 'HORSE',        az: 'at', definition: 'a big animal people ride' },
        { word: 'DRESS',        az: 'don', definition: 'a one-piece clothing for women' },
        { word: 'SHOE',         az: 'ayaqqabı', definition: 'footwear' },
      ]
    },
    {
      words: [
        { word: 'BEACH',        az: 'çimərlik', definition: 'sandy place by the sea' },
        { word: 'WEATHER',      az: 'hava', definition: 'the condition of the atmosphere at a particular time and place' },
        { word: 'HAT',          az: 'şlyapa', definition: 'something you wear on your head' },
        { word: 'WATCH',        az: 'saat', definition: 'tells time on your wrist' },
      ]
    },
    {
      words: [
        { word: 'ISLAND',       az: 'ada', definition: 'land with water all around it' },
        { word: 'LAND',         az: 'torpaq', definition: 'ground, not water' },
        { word: 'SUN',          az: 'günəş', definition: 'bright star in the sky' },
        { word: 'BUS',          az: 'avtobus', definition: 'a large vehicle for many passengers' },
      ]
    },
  ]
},

    
    // Blok 6 gameləri
    'b6_g0': { id: 'a1_b6_g0', title: 'Game 18', phases: [
    {
      words: [
        { word: 'AGE',          az: 'yaş', definition: 'how old you are' },
        { word: 'DATE',         az: 'tarix', definition: 'day, month and year' },
        { word: 'LATE',         az: 'gec', definition: 'after the right time' },
      ]
    },
    {
      words: [
        { word: 'DAY',          az: 'gün', definition: '24 hours' },
        { word: 'YEAR',         az: 'il', definition: '12 months' },
        { word: 'EARLY',        az: 'erkən', definition: 'before the right time' },
      ]
    },
    {
      words: [
        { word: 'AGO',          az: 'əvvəl', definition: 'in the past' },
        { word: 'NOW',          az: 'indi', definition: 'at this moment' },
        { word: 'SOON',         az: 'tezliklə', definition: 'in a short time from now' },
      ]
    },
  ]
},
    'b6_g1': { id: 'a1_b6_g1', title: 'Game 19', phases: [
    {
      words: [
        { word: 'MOMENT',       az: 'an', definition: 'a very short time' },
        { word: 'MONTH',        az: 'ay', definition: 'about 30 days' },
        { word: 'THEN',         az: 'sonra', definition: 'at that time' },
        { word: 'OFTEN',        az: 'tez-tez', definition: 'many times' },
      ]
    },
    {
      words: [
        { word: 'MONDAY',       az: 'bazar ertəsi', definition: 'first day of the week' },
        { word: 'MAY',          az: 'may', definition: 'fifth month of the year' },
        { word: 'AUTUMN',       az: 'payız', definition: 'season after summer' },
        { word: 'TODAY',        az: 'bu gün', definition: 'this day' },
      ]
    },
    {
      words: [
        { word: 'JUNE',         az: 'iyun', definition: 'sixth month of the year' },
        { word: 'MINUTE',       az: 'dəqiqə', definition: '60 seconds' },
        { word: 'TIME',         az: 'vaxt', definition: 'hours, minutes, seconds' },
      ]
    },
  ]
},

    
    // Blok 7 gameləri
    'b7_g0': { id: 'a1_b7_g0', title: 'Game 20', phases: [
    {
      words: [
        { word: 'POOR',         az: 'kasıb', definition: 'has little money' },
        { word: 'PHOTO',        az: 'şəkil', definition: 'picture' },
        { word: 'POP',          az: 'pop musiqi', definition: 'popular modern music' },
      ]
    },
    {
      words: [
        { word: 'CARD',         az: 'kart', definition: 'plastic money' },
        { word: 'CD',           az: 'disk', definition: 'old round music disc' },
        { word: 'DVD',          az: 'kaset', definition: 'disc for movies' },
        { word: 'TV',           az: 'televizor', definition: 'screen for watching' },
      ]
    },
    {
      words: [
        { word: 'BILL',         az: 'hesab', definition: 'paper money' },
        { word: 'BLOG',         az: 'bloq', definition: 'a personal website with regular posts' },
        { word: 'BOOK',         az: 'kitab', definition: 'pages with story' },
      ]
    },
  ]
},

    
    'b7_g1': { id: 'a1_b7_g1', title: 'Game 21',  phases: [
    {
      words: [
        { word: 'SHOP',         az: 'mağaza', definition: 'a building where you can buy things' },
        { word: 'PHONE',        az: 'telefon', definition: 'device to call people' },
        { word: 'NEWS',         az: 'xəbər', definition: 'information about recent events' },
        { word: 'SHOW',         az: 'veriliş', definition: 'a television program' },
      ]
    },
    {
      words: [
        { word: 'PRICE',        az: 'qiymət', definition: 'the amount of money you must pay for something' },
        { word: 'CHEAP',        az: 'ucuz', definition: 'low price' },
        { word: 'RICH',         az: 'varlı', definition: 'has a lot of money' },
      ]
    },
    {
      words: [
        { word: 'CENT',         az: 'sent', definition: 'small part of a dollar' },
        { word: 'COST',      az: 'başa gəlmək', definition: 'the amount of money you need to pay' },
        { word: 'FREE',         az: 'pulsuz', definition: 'costs nothing' },
        { word: 'SCREEN',       az: 'ekran', definition: 'the part you look at on a device' },
        { word: 'CONCERT',      az: 'konsert', definition: 'a live performance of music' },
      ]
    },
  ]
},



    
    // Blok 8 gameləri
    'b8_g0': { id: 'a1_b8_g0', title: 'Game 22',phases: [
    {
      words: [
        { word: 'PAGE',         az: 'səhifə', definition: 'one side of paper' },
        { word: 'GAME',         az: 'oyun', definition: 'play activity' },
        { word: 'TEAM',         az: 'komanda', definition: 'a group of players who play together' },
      ]
    },
    {
      words: [
        { word: 'SCIENCE',      az: 'elm', definition: 'study of nature and experiments' },
        { word: 'TEST',         az: 'test', definition: 'a short check of knowledge' },
        { word: 'TENNIS',       az: 'tennis', definition: 'sport with racket and ball' },
      ]
    },
    {
      words: [
        { word: 'LETTER',       az: 'hərf', definition: 'a, b, c or written message' },
        { word: 'ART',          az: 'sənət', definition: 'the creation of paintings, sculptures and other works' },
        { word: 'BALL',         az: 'top', definition: 'round thing for games' },
      ]
    },
  ]
},
    'b8_g1': { id: 'a1_b8_g1', title: 'Game 23',phases: [
    {
      words: [
        { word: 'LESSON',       az: 'dərs', definition: 'one class period' },
        { word: 'NOTE',         az: 'qeyd', definition: 'a short written message' },
        { word: 'SPELL',     az: 'hərfləmək', definition: '— tapılmadı —' },
        { word: 'POOL',         az: 'hovuz', definition: 'place to swim' },
      ]
    },
    {
      words: [
        { word: 'CLASS',        az: 'sinif', definition: 'a group of students' },
        { word: 'DETAIL',       az: 'təfərrüat', definition: 'small information' },
        { word: 'TITLE',        az: 'başlıq', definition: 'name of a book or film' },
      ]
    },
    {
      words: [
        { word: 'TEACH',     az: 'öyrətmək', definition: '— tapılmadı —' },
        { word: 'CHESS',        az: 'şahmat', definition: 'board game with king' },
        { word: 'MATCH',        az: 'oyun', definition: 'a game between two teams' },
      ]
    },
  ]
},

    
    // Blok 9 gameləri
    'b9_g0': { id: 'a1_b9_g0', title: 'Game 24', phases: [
    {
      words: [
        { word: 'GO',        az: 'getmək', definition: '— tapılmadı —' },
        { word: 'EAT',       az: 'yemək', definition: '— tapılmadı —' },
        { word: 'GET',       az: 'əldə etmək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'RUN',       az: 'qaçmaq', definition: 'to move fast with your legs' },
        { word: 'TURN',      az: 'dönmək', definition: '— tapılmadı —' },
        { word: 'CUT',       az: 'kəsmək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'FALL',      az: 'yıxılmaq', definition: '— tapılmadı —' },
        { word: 'CALL',      az: 'çağırmaq', definition: '— tapılmadı —' },
        { word: 'TALK',      az: 'söhbət etmək', definition: '— tapılmadı —' },
        { word: 'COOK',      az: 'bişirmək', definition: 'to prepare food by heating it' },
      ]
    },
  ]
},
    'b9_g1': { id: 'a1_b9_g1', title: 'Game 25', phases: [
    {
      words: [
        { word: 'SIT',       az: 'oturmaq', definition: '— tapılmadı —' },
        { word: 'ASK',       az: 'soruşmaq', definition: '— tapılmadı —' },
        { word: 'SPEAK',     az: 'danışmaq', definition: '— tapılmadı —' },
        { word: 'KEEP',      az: 'saxlamaq', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'STAND',     az: 'ayağa qalxmaq', definition: '— tapılmadı —' },
        { word: 'LISTEN',    az: 'qulaq asmaq', definition: '— tapılmadı —' },
        { word: 'SEND',      az: 'göndərmək', definition: '— tapılmadı —' },
        { word: 'CLEAN',     az: 'təmizləmək', definition: 'not dirty' },
        { word: 'CLOSE',     az: 'bağlamaq', definition: '— tapılmadı —' },
        { word: 'DANCE',     az: 'rəqs etmək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'ARRIVE',    az: 'çatmaq', definition: '— tapılmadı —' },
        { word: 'RIDE',      az: 'minmək', definition: '— tapılmadı —' },
        { word: 'READ',      az: 'oxumaq', definition: '— tapılmadı —' },
        { word: 'WRITE',     az: 'yazmaq', definition: '— tapılmadı —' },
        { word: 'GIVE',      az: 'vermək', definition: '— tapılmadı —' },
        { word: 'GROW',      az: 'böyümək', definition: '— tapılmadı —' },
      ]
    },
  ]
},

    
    // Blok 10 gameləri
    'b10_g0': { id: 'a1_b10_g0', title: 'Game 26', phases: [
    {
      words: [
        { word: 'MAKE',         az: 'düzəltmək', definition: '— tapılmadı —' },
        { word: 'MEET',         az: 'görüşmək', definition: '— tapılmadı —' },
        { word: 'TAKE',         az: 'götürmək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'WAIT',         az: 'gözləmək', definition: '— tapılmadı —' },
        { word: 'WANT',         az: 'istəmək', definition: 'a lack or deficiency of something' },
        { word: 'WIN',          az: 'qalib gəlmək', definition: 'to be successful in a competition' },
      ]
    },
    {
      words: [
        { word: 'FEEL',         az: 'hiss etmək', definition: '— tapılmadı —' },
        { word: 'FIND',         az: 'tapmaq', definition: '— tapılmadı —' },
        { word: 'NEED',         az: 'ehtiyac duymaq', definition: '— tapılmadı —' },
        { word: 'DIE',          az: 'ölmək', definition: '— tapılmadı —' },
        { word: 'LIE',          az: 'uzanmaq', definition: '— tapılmadı —' },
      ]
    },
  ]
},
    'b10_g1': { id: 'a1_b10_g1', title: 'Game 27',phases: [
    {
      words: [
        { word: 'SLEEP',        az: 'yatmaq', definition: '— tapılmadı —' },
        { word: 'STOP',         az: 'dayanmaq', definition: '— tapılmadı —' },
        { word: 'LOSE',         az: 'itirmək', definition: '— tapılmadı —' },
        { word: 'SEE',          az: 'görmək', definition: '— tapılmadı —' },
        { word: 'LET',          az: 'icazə vermək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'ORDER',        az: 'sifariş etmək', definition: '— tapılmadı —' },
        { word: 'DO',           az: 'etmək', definition: '— tapılmadı —' },
        { word: 'HEAR',         az: 'eşitmək', definition: '— tapılmadı —' },
        { word: 'DRAW',         az: 'rəsm çəkmək', definition: '— tapılmadı —' },
        { word: 'WEAR',         az: 'geymək', definition: '— tapılmadı —' },
      ]
    },
    {
      words: [
        { word: 'LOOK',         az: 'baxmaq', definition: '— tapılmadı —' },
        { word: 'OWN',          az: 'sahib olmaq', definition: '— tapılmadı —' },
        { word: 'PAY',          az: 'ödəmək', definition: '— tapılmadı —' },
        { word: 'PLAY',         az: 'oynamaq', definition: '— tapılmadı —' },
        { word: 'KNOW',         az: 'bilmək', definition: '— tapılmadı —' },
        { word: 'PLAN',         az: 'planlaşdırmaq', definition: 'what you will do' },
      ]
    },
  ]
},

    
    // Blok 11 gameləri
    'b11_g0': { id: 'a1_b11_g0', title: 'Game 28',phases: [
    {
      words: [
        { word: 'END',          az: 'son', definition: 'last part' },
        { word: 'IDEA',         az: 'fikir', definition: 'a thought or suggestion' },
        { word: 'KIND',         az: 'növ', definition: 'friendly, generous and caring' },
      ]
    },
    {
      words: [
        { word: 'PLAN',         az: 'plan', definition: 'what you will do' },
        { word: 'MAP',          az: 'xəritə', definition: 'picture of a place' },
        { word: 'NAME',         az: 'ad', definition: 'what someone is called' },
      ]
    },
    {
      words: [
        { word: 'MODEL',        az: 'model', definition: 'small copy' },
        { word: 'LOT',          az: 'xeyli', definition: 'large amount' },
        { word: 'BOTTLE',       az: 'butulka', definition: 'a tall container for liquids' },
        { word: 'ITEM',         az: 'əşya', definition: 'one single thing' },
        { word: 'MODEL',        az: 'model', definition: 'small copy' },
        { word: 'TITLE',        az: 'başlıq', definition: 'name of a book or film' },
      ]
    },
  ]
},
    
    'b11_g1': { id: 'a1_b11_g1', title: 'Game 29',phases: [
    {
      words: [
        { word: 'FUN',          az: 'əyləncə', definition: 'enjoyable time' },
        { word: 'LIFE',         az: 'həyat', definition: 'time you are alive' },
        { word: 'LINE',         az: 'xətt', definition: 'long thin mark' },
        { word: 'CUP',          az: 'fincan', definition: 'a small container for hot drinks' },
        { word: 'PIECE',        az: 'parça', definition: 'one part' },
      ]
    },
    {
      words: [
        { word: 'REPORT',       az: 'hesabat', definition: 'a written or spoken account of events' },
        { word: 'WORK',         az: 'iş', definition: 'job or activity' },
        { word: 'WORK',      az: 'işləmək', definition: 'job or activity' },
        { word: 'PART',         az: 'hissə', definition: 'piece of something' },
        { word: 'TYPE',         az: 'növ', definition: 'kind or sort' },
        { word: 'WAY',          az: 'yol', definition: 'how to do something' },
      ]
    },
    {
      words: [
        { word: 'ACTION',       az: 'hərəkət', definition: 'something you do' },
        { word: 'OFFICE',       az: 'ofis', definition: 'place where people work at desks' },
        { word: 'TO PLAN',      az: 'planlaşdırmaq', definition: 'to prepare future' },
        { word: 'LIST',         az: 'siyahı', definition: 'names or things one after another' },
        { word: 'POINT',        az: 'nöqtə', definition: 'single dot or idea' },
        { word: 'SPACE',        az: 'kosmos', definition: 'empty area' },
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
        { word: 'PAIN',         az: 'ağrı', definition: 'the feeling when part of your body hurts' },
        { word: 'ILL',          az: 'xəstə', definition: 'sick' },
        { word: 'PILL',         az: 'həb', definition: 'small round medicine' },
      ]
    },
    {
      words: [
        { word: 'COOK',         az: 'aşpaz', definition: 'to prepare food by heating it' },
        { word: 'BONE',         az: 'sümük', definition: 'the hard parts inside your body' },
        { word: 'KNEE',         az: 'diz', definition: 'the joint in the middle of your leg' },
        { word: 'NECK',         az: 'boyun', definition: 'the part that connects your head to your body' },
      ]
    },
    {
      words: [
        { word: 'DOCTOR',       az: 'həkim', definition: 'a person who treats sick people' },
        { word: 'TOE',          az: 'ayaq barmağı', definition: 'one of the five parts at the end of your foot' },
        { word: 'EAR',          az: 'qulaq', definition: 'the part of your head you hear with' },
      ]
    },
  ]
},
    'b0_g1': { id: 'a2_b0_g1', title: 'Game 2', phases: [
    {
      words: [
        { word: 'CHEF',         az: 'aşpaz', definition: 'a professional cook' },
        { word: 'FACE',         az: 'üz', definition: 'the front part of your head' },
        { word: 'HAND',         az: 'əl', definition: 'the part at the end of your arm' },
        { word: 'HEAD',         az: 'baş', definition: 'the top part of your body' },
      ]
    },
    {
      words: [
        { word: 'TEACHER',      az: 'müəllim', definition: 'a person who teaches in a school' },
        { word: 'ATHLETE',      az: 'atlet', definition: 'a person who competes in sports' },
        { word: 'HEART',        az: 'ürək', definition: 'the organ that pumps blood in your body' },
        { word: 'HEALTH',       az: 'sağlamlıq', definition: 'the condition of your body and mind' },
      ]
    },
    {
      words: [
        { word: 'BRAIN',        az: 'beyin', definition: 'the organ inside your head that controls thinking' },
        { word: 'SKIN',         az: 'dəri', definition: 'the outer covering of your body' },
        { word: 'BACK',         az: 'arxa', definition: 'the rear part of your body' },
        { word: 'SICK',         az: 'xəstə', definition: 'not healthy' },     
      ]
    },
  ]
},
    'b0_g2': { id: 'a2_b0_g2', title: 'Game 3', phases: [
    {
      words: [
        { word: 'ARCHITECT',    az: 'memar', definition: 'a person who designs buildings' },
        { word: 'ARTIST',       az: 'sənətkar', definition: 'a person who creates art' },
        { word: 'ACTRESS',      az: 'aktrisa', definition: 'a woman who acts in films or theatre' },
        { word: 'CHEST',        az: 'sinə', definition: 'the front part of your body between your neck and waist' },
      ]
    },
    {
      words: [
        { word: 'LAWYER',       az: 'hüquqşünas', definition: 'a person who gives advice about the law' },
        { word: 'WRITER',       az: 'yazıçı', definition: 'a person who writes books and stories' },
        { word: 'WAITER',       az: 'ofisiant', definition: 'a person who serves food in restaurants' },
        { word: 'EYE',          az: 'göz', definition: 'the part of your face you see with' },
      ]
    },
    {
      words: [
             { word: 'DESIGNER',     az: 'dizayner', definition: 'a person who creates the look of things' },
        { word: 'DRIVER',       az: 'sürücü', definition: 'a person who drives vehicles' },
        { word: 'NURSE',        az: 'tibb bacısı', definition: 'a person who cares for sick people' },
        { word: 'DISEASE',      az: 'xəstəlik', definition: 'an illness that affects the body or mind' },
        { word: 'DRUG',         az: 'dərman', definition: 'medicine or pill' },
        { word: 'VIRUS',        az: 'virus', definition: 'a microscopic infectious agent that replicates inside living cells' },
      ]
    },
  ]
},
    'b1_g0': { id: 'a2_b1_g0', title: 'Game 4', phases: [
    {
      words: [
        { word: 'BEAR',         az: 'ayı', definition: 'a big wild animal with thick fur' },
        { word: 'RAT',          az: 'siçovul', definition: 'a large mouse' },
        { word: 'BEE',          az: 'arı', definition: 'an insect that makes honey' },
        { word: 'TREE',         az: 'ağac', definition: 'a tall plant with a trunk' },
      ]
    },
    {
      words: [
        { word: 'PAN',          az: 'tava', definition: 'a shallow metal container for frying' },
        { word: 'CAN',          az: 'konserv qutusu', definition: 'a metal container for food' },
        { word: 'ANT',          az: 'qarışqa', definition: 'a very small insect that lives in groups' },
        { word: 'CAT',          az: 'pişik', definition: 'a small pet that says meow' },
      ]
    },
    {
      words: [
             { word: 'GRAPE',        az: 'üzüm', definition: 'a small round fruit that grows in bunches' },
        { word: 'PEAR',         az: 'armud', definition: 'a sweet green or yellow fruit' },
        { word: 'EGG',          az: 'yumurta', definition: 'food that comes from chickens' },
        { word: 'JAR',          az: 'banka', definition: 'a glass container for jam' },
      ]
    },
  ]
},
    'b1_g1': { id: 'a2_b1_g1', title: 'Game 5', phases: [
    {
      words: [
        { word: 'TASTE',        az: 'dad', definition: 'the flavour of food or drink' },
        { word: 'BREAD',        az: 'çörək', definition: 'food made from flour and baked' },
        { word: 'DESERT',       az: 'səhra', definition: 'a very dry hot place with sand' },
        { word: 'STAR',         az: 'ulduz', definition: 'a bright point in the night sky' },
      ]
    },
    {
      words: [
        { word: 'PLATE',        az: 'boşqab', definition: 'a flat dish for food' },
        { word: 'BOTTLE',       az: 'şüşə', definition: 'a tall container for liquids' },
        { word: 'POT',          az: 'qazan', definition: 'a deep container for cooking soup' },
        { word: 'TABLE',        az: 'masa', definition: 'furniture where you eat' },
      ]
    },
    {
      words: [
             { word: 'BEEF',         az: 'mal əti', definition: 'meat that comes from a cow' },
        { word: 'BOWL',         az: 'dərin boşqab', definition: 'a round deep dish for soup' },
        { word: 'WOLF',         az: 'canavar', definition: 'a wild animal like a big dog' },
        { word: 'WOOD',         az: 'meşə', definition: 'material from trees used for building' },
      ]
    },
  ]
},
    'b1_g2': { id: 'a2_b1_g2', title: 'Game 6', phases: [
    {
      words: [
        { word: 'MEAT',         az: 'ət', definition: 'food from animals' },
        { word: 'MOON',         az: 'ay', definition: 'the round object we see at night' },
        { word: 'OCEAN',        az: 'okean', definition: 'a very large area of salt water' },
        { word: 'COAST',        az: 'sahil', definition: 'the land next to the sea' },
        { word: 'STONE',        az: 'daş', definition: 'a small piece of rock' },
      ]
    },
    {
      words: [
        { word: 'GLASS',        az: 'stəkan', definition: 'a container for cold drinks' },
        { word: 'LID',          az: 'qapaq', definition: 'the top cover of a pot' },
        { word: 'DOG',          az: 'it', definition: 'a pet that says woof' },
        { word: 'LION',         az: 'aslan', definition: 'a big wild cat with a mane' },
        { word: 'ISLAND',       az: 'ada', definition: 'land with water all around it' },
      ]
    },
    {
      words: [
        { word: 'FROG',         az: 'qurbağa', definition: 'a small green animal that jumps' },
        { word: 'GOAT',         az: 'keçi', definition: 'a farm animal with horns' },
        { word: 'HORSE',        az: 'at', definition: 'a big animal people ride' },
        { word: 'FOREST',       az: 'meşə', definition: 'a large area of land covered with trees' },
        { word: 'GRASS',        az: 'ot', definition: 'the green plant that covers fields' },
        { word: 'EARTH',        az: 'yer kürəsi', definition: 'the planet we live on' },
      ]
    },
  ]
},

    
    'b2_g0': { id: 'a2_b2_g0', title: 'Game 7',phases: [
    {
      words: [
        { word: 'APP',          az: 'tətbiq', definition: 'a program designed for a mobile phone' },
        { word: 'POSTER',       az: 'afişa', definition: 'a big picture used for advertising' },
        { word: 'REPORT',       az: 'hesabat', definition: 'a written or spoken account of events' },
        { word: 'PRESS',        az: 'mətbuat', definition: 'newspapers and journalists' },
        { word: 'TEST',         az: 'test', definition: 'a short check of knowledge' },
      ]
    },
    {
      words: [
        { word: 'TABLET',       az: 'planşet', definition: 'a flat portable computer' },
        { word: 'WEB',          az: 'veb', definition: 'the system of websites' },
        { word: 'LAB',          az: 'laboratoriya', definition: 'a room for scientific experiments' },
        { word: 'DATA',         az: 'məlumat', definition: 'facts and information used for analysis' },
      ]
    },
    {
      words: [
        { word: 'CODE',         az: 'kod', definition: 'instructions for a computer' },
        { word: 'DEVICE',       az: 'cihaz', definition: 'a tool or machine designed for a particular purpose' },
        { word: 'USER',         az: 'istifadəçi', definition: 'a person who uses a system' },
        { word: 'RECORD',       az: 'yazmaq / lövhə', definition: 'a piece of music on a disc' },
        { word: 'SERIES',       az: 'serial', definition: 'a TV story with many parts' },
        { word: 'COURSE',       az: 'kurs', definition: 'a complete study program' },
        { word: 'DISCOVER',     az: 'kəşf etmək', definition: 'to find something new' },     
      ]
    },
  ]
},
    'b2_g1': { id: 'a2_b2_g1', title: 'Game 8', phases: [
    {
      words: [
        { word: 'SCREEN',       az: 'ekran', definition: 'the part you look at on a device' },
        { word: 'CHANNEL',      az: 'kanal', definition: 'a television or radio station' },
        { word: 'SCHOOL',       az: 'məktəb', definition: 'a place for children to study' },
        { word: 'LESSON',       az: 'dərs', definition: 'one class period' },
        { word: 'CLASS',        az: 'sinif', definition: 'a group of students' },
        { word: 'RESEARCH',     az: 'tədqiqat', definition: 'to study something in detail to discover new facts' },
        { word: 'RESEARCHER',   az: 'tədqiqatçı', definition: 'a person who does research' },
      ]
    },
    {
      words: [
        { word: 'DIGITAL',      az: 'rəqəmsal', definition: 'using computers and electronic signals' },
        { word: 'EMAIL',        az: 'elektron poçt', definition: 'a message sent by computer' },
        { word: 'INTERNET',     az: 'internet', definition: 'the global computer network' },
        { word: 'MEDIA',        az: 'media', definition: 'television, radio, newspapers and the internet' },
        { word: 'DRAMA',        az: 'dram', definition: 'a serious film or play' },
        { word: 'LEARNING',     az: 'öyrənmə', definition: 'the process of getting knowledge' },
        { word: 'DEGREE',       az: 'diplom', definition: 'qualification from university' },
      ]
    },
    {
      words: [
         { word: 'LAPTOP',       az: 'noutbuk', definition: 'a small portable computer' },
        { word: 'ONLINE',       az: 'onlayn', definition: 'connected to the internet' },
        { word: 'NOVEL',        az: 'roman', definition: 'a long book with a story' },
        { word: 'EXPLANATION',  az: 'izahat', definition: 'making something clear' },
        { word: 'INVENTION',    az: 'ixtira', definition: 'creating something new' },
        { word: 'INVENT',       az: 'ixtira etmək', definition: 'to create something new' },    
      ]
    },
  ]
},
    'b2_g2': { id: 'a2_b2_g2', title: 'Game 9', phases: [
    {
      words: [
        { word: 'ESSAY',        az: 'inşa', definition: 'a long piece of writing' },
        { word: 'MATHS',        az: 'riyaziyyat', definition: 'short word for mathematics' },
        { word: 'EXAM',         az: 'imtahan', definition: 'an important test' },
        { word: 'FACT',         az: 'fakt', definition: 'something that is true' },
        { word: 'SYSTEM',       az: 'sistem', definition: 'an organized way of working' },
      ]
    },
    {
      words: [
        { word: 'LECTURE',      az: 'mühazirə', definition: 'a long talk by a teacher' },
        { word: 'RESULT',       az: 'nəticə', definition: 'what happens at the end of an experiment' },
        { word: 'PROCESS',      az: 'proses', definition: 'a series of actions' },
        { word: 'EXPERT',       az: 'mütəxəssis', definition: 'a person with special knowledge' },
      ]
    },
    {
      words: [
         { word: 'NETWORK',      az: 'şəbəkə', definition: 'a group of connected computers' },
        { word: 'NEWS',         az: 'xəbər', definition: 'information about recent events' },
        { word: 'SHOW',         az: 'şou', definition: 'a television program' },
        { word: 'HOMEWORK',     az: 'ev tapşırığı', definition: 'work you do at home' },    
      ]
    },
  ]
},

    
    'b3_g0': { id: 'a2_b3_g0', title: 'Game 10', phases: [
    {
      words: [
        { word: 'RACE',         az: 'yarış', definition: 'a competition to see who is fastest' },
        { word: 'ART',          az: 'sənət', definition: 'the creation of paintings, sculptures and other works' },
        { word: 'CRAFT',        az: 'əl işi', definition: 'making things with your hands' },
      ]
    },
    {
      words: [
        { word: 'TEAM',         az: 'komanda', definition: 'a group of players who play together' },
        { word: 'MATCH',        az: 'oyun', definition: 'a game between two teams' },
        { word: 'ATHLETE',      az: 'atlet', definition: 'a person who competes in sports' },
        { word: 'CAMP',         az: 'düşərgə', definition: 'a place where you sleep in tents' },
      ]
    },
    {
      words: [
        { word: 'RUN',          az: 'qaçmaq', definition: 'to move fast with your legs' },
        { word: 'RUNNING',      az: 'qaçış', definition: 'the sport of moving fast on foot' },
        { word: 'WINNER',       az: 'qalib', definition: 'a person who wins a competition' },
        { word: 'TRAINING',     az: 'məşq', definition: 'practice to improve skills in sport' },
        { word: 'DRAWING',      az: 'çəkmə', definition: 'making pictures with a pencil' },
        { word: 'READING',      az: 'oxumaq', definition: 'looking at books or magazines' },
        { word: 'WRITING',      az: 'yazmaq', definition: 'creating stories or poems' },
        { word: 'GARDEN',       az: 'bağ', definition: 'a piece of land where flowers and vegetables are grown' },     
      ]
    },
  ]
},


    
    'b4_g0': { id: 'a2_b4_g0', title: 'Game 11', phases: [
    {
      words: [
        { word: 'COACH',        az: 'avtobus', definition: 'a person who trains athletes' },
        { word: 'COAT',         az: 'palto', definition: 'a warm outer piece of clothing' },
        { word: 'HAT',          az: 'papaq', definition: 'something you wear on your head' },
      ]
    },
    {
      words: [
        { word: 'SITE',         az: 'ərazi', definition: 'a piece of land where something is built' },
        { word: 'BUS',          az: 'avtobus', definition: 'a large vehicle for many passengers' },
        { word: 'SUIT',         az: 'kostyum', definition: 'formal clothes for men' },
        { word: 'TIE',          az: 'qalstuk', definition: 'a long cloth you wear with a shirt' },
      ]
    },
    {
      words: [
         { word: 'LORRY',        az: 'yük maşını', definition: 'a big vehicle for carrying goods' },
        { word: 'FERRY',        az: 'bərə', definition: 'a ship that carries cars and people' },
        { word: 'ROOF',         az: 'dam', definition: 'the top covering of a building' },
        { word: 'DOOR',         az: 'qapı', definition: 'you open it to enter a room' },
        { word: 'FLOOR',        az: 'döşəmə', definition: 'the surface you walk on' },    
      ]
    },
  ]
},
    'b4_g1': { id: 'a2_b4_g1', title: 'Game 12', phases: [
    {
      words: [
        { word: 'WHEEL',        az: 'təkər', definition: 'the round part that makes a car move' },
        { word: 'BOAT',         az: 'qayıq', definition: 'a small vehicle for water' },
        { word: 'TOWEL',        az: 'dəsmal', definition: 'a cloth you use after washing' },
        { word: 'WALL',         az: 'divar', definition: 'a vertical structure that forms the side of a building' },
        { word: 'BELT',         az: 'kəmər', definition: 'a band you wear around your waist' },
      ]
    },
    {
      words: [
        { word: 'STAGE',        az: 'səhnə', definition: 'the place where actors perform' },
        { word: 'TRAIN',        az: 'qatar', definition: 'a long vehicle that runs on rails' },
        { word: 'STAIRS',       az: 'pilləkən', definition: 'steps to go up or down' },
        { word: 'TRAINERS',     az: 'idman ayaqqabısı', definition: 'sport shoes' },
        { word: 'RING',         az: 'üzük', definition: 'jewellery you wear on your finger' },
      ]
    },
    {
      words: [
        { word: 'CASTLE',       az: 'qala', definition: 'an old strong building from the past' },
        { word: 'PALACE',       az: 'saray', definition: 'a very big and beautiful house for kings' },
        { word: 'CAR',          az: 'avtomobil', definition: 'a small vehicle for families' },
        { word: 'PLANE',        az: 'təyyarə', definition: 'a flying vehicle' },
        { word: 'CARPET',       az: 'xalça', definition: 'a soft covering on the floor' },
        { word: 'PANTS',        az: 'şalvar', definition: 'another word for trousers' },     
      ]
    },
  ]
},
    'b4_g2': { id: 'a2_b4_g2', title: 'Game 13', phases: [
    {
      words: [
        { word: 'PALACE',       az: 'saray', definition: 'a very big and beautiful house for kings' },
        { word: 'AIRLINE',      az: 'aviaşirkət', definition: 'a company that flies planes' },
        { word: 'CAR',          az: 'avtomobil', definition: 'a small vehicle for families' },
        { word: 'PLANE',        az: 'təyyarə', definition: 'a flying vehicle' },
        { word: 'BIN',          az: 'zibil qabı', definition: 'a container for rubbish' },
      ]
    },
    {
      words: [
        { word: 'PUB',          az: 'pivəxana', definition: 'a place where people drink beer and talk' },
        { word: 'UPSTAIRS',     az: 'yuxarı mərtəbə', definition: 'on a higher floor of a building' },
        { word: 'SHIP',         az: 'gəmi', definition: 'a large boat for sea travel' },
        { word: 'BRUSH',        az: 'fırça', definition: 'a tool for cleaning or painting' },
        { word: 'SHIRT',        az: 'köynək', definition: 'a top with buttons' },
      ]
    },
    {
      words: [
             { word: 'CHURCH',       az: 'kilsə', definition: 'a Christian religious building' },
        { word: 'TRUCK',        az: 'yük avtomobili', definition: 'a large vehicle for heavy goods' },
        { word: 'SHEET',        az: 'çarşab', definition: 'a thin cloth for your bed' },
        { word: 'SOCK',         az: 'corab', definition: 'something you wear on your feet' },
        { word: 'DRESS',        az: 'don', definition: 'a one-piece clothing for women' },
        { word: 'SHOES',        az: 'ayaqqabı', definition: 'footwear' },
      ]
    },
  ]
},


    
    
    'b5_g0': { id: 'a2_b5_g0', title: 'Game 14', phases: [
    {
      words: [
        { word: 'IDEAL',        az: 'ideal', definition: 'perfect for a purpose' },
        { word: 'DEAD',         az: 'ölü', definition: 'not living' },
        { word: 'ILL',          az: 'xəstə', definition: 'sick' },
      ]
    },
    {
      words: [
        { word: 'PLEASED',      az: 'məmnun', definition: 'happy with something' },
        { word: 'DEEP',         az: 'dərin', definition: 'going far down' },
        { word: 'ASLEEP',       az: 'yuxuda', definition: 'sleeping' },
      ]
    },
    {
      words: [
             { word: 'FEAR',         az: 'qorxu', definition: 'the feeling when you are afraid' },
        { word: 'BRAVE',        az: 'cəsur', definition: 'not afraid to face danger' },
        { word: 'FAIR',         az: 'ədalətli', definition: 'treating everyone equally' },
      ]
    },
  ]
},
    'b5_g1': { id: 'a2_b5_g1', title: 'Game 15', phases: [
    {
      words: [
        { word: 'ACTIVE',       az: 'fəal', definition: 'someone who does a lot of things' },
        { word: 'CLEVER',       az: 'ağıllı', definition: 'quick to understand and learn' },
        { word: 'CREATIVE',     az: 'yaradıcı', definition: 'able to produce new and original ideas' },
        { word: 'ANCIENT',      az: 'qədim', definition: 'very very old' },
        { word: 'CERTAIN',      az: 'əmin', definition: 'sure about something' },
        { word: 'ALIVE',        az: 'sağ', definition: 'living and not dead' },
      ]
    },
    {
      words: [
        { word: 'CALM',         az: 'sakit', definition: 'peaceful and not excited or angry' },
        { word: 'CAREFUL',      az: 'diqqətli', definition: 'doing things safely' },
        { word: 'CUTE',         az: 'sevimli', definition: 'attractive and lovely' },
        { word: 'EXACT',        az: 'dəqiq', definition: 'completely correct' },
        { word: 'EXTREME',      az: 'həddindən artıq', definition: 'very strong or large' },
        { word: 'FLAT',         az: 'düz', definition: 'without hills or curves' },
      ]
    },
    {
      words: [
        { word: 'PAIN',         az: 'ağrı', definition: 'the feeling when part of your body hurts' },
        { word: 'GLAD',         az: 'sevincli', definition: 'pleased and happy about something' },
        { word: 'KIND',         az: 'mehriban', definition: 'friendly, generous and caring' },
        { word: 'BLANK',        az: 'boş', definition: 'completely empty' },
        { word: 'DARK',         az: 'qaranlıq', definition: 'with very little light' },     
      ]
    },
  ]
},
    'b5_g2': { id: 'a2_b5_g2', title: 'Game 16', phases: [
    {
      words: [
        { word: 'HURT',         az: 'incimək', definition: 'to feel emotional pain' },
        { word: 'CRAZY',        az: 'dəli', definition: 'not behaving normally' },
        { word: 'LAZY',         az: 'tənbəl', definition: 'not wanting to work' },
        { word: 'SHY',          az: 'utancaq', definition: 'nervous and not comfortable with people' },
        { word: 'CURLY',        az: 'qıvrım', definition: 'hair with curls' },
      ]
    },
    {
      words: [
        { word: 'LONELY',       az: 'tənha', definition: 'feeling sad because you are alone' },
        { word: 'POLITE',       az: 'nəzakətli', definition: 'showing good manners and respect' },
        { word: 'TYPICAL',      az: 'tipik', definition: 'normal or usual' },
        { word: 'PATIENT',      az: 'səbirli', definition: 'a person who is receiving medical treatment' },
        { word: 'COMMON',       az: 'ümumi', definition: 'happening often' },
        { word: 'EMPTY',        az: 'boş', definition: 'with nothing inside' },
      ]
    },
    {
      words: [
        { word: 'HOPE',         az: 'ümid', definition: 'the feeling that something good will happen' },
        { word: 'ANGRY',        az: 'əsəbi', definition: 'feeling strong displeasure or annoyance' },
        { word: 'UNHAPPY',      az: 'xoşbəxt olmayan', definition: 'not happy' },
        { word: 'AVERAGE',      az: 'orta', definition: 'normal or usual' },
        { word: 'HEAVY',        az: 'ağır', definition: 'weighing a lot' },
        { word: 'HUGE',         az: 'nəhəng', definition: 'very very big' },     
      ]
    },
  ]
},


    
    'b6_g0': { id: 'a2_b6_g0', title: 'Game 17', phases: [
    {
      words: [
        { word: 'EASILY',       az: 'asanlıqla', definition: 'without difficulty' },
        { word: 'LAST',         az: 'son', definition: 'the final one' },
        { word: 'LATELY',       az: 'son vaxtlar', definition: 'in the recent past' },
        { word: 'STILL',        az: 'hələ də', definition: 'continuing until now' },
        { word: 'YET',          az: 'hələ', definition: 'until now (in negative sentences)' },
      ]
    },
    {
      words: [
        { word: 'ALREADY',      az: 'artıq', definition: 'before now' },
        { word: 'CLEARLY',      az: 'aydın şəkildə', definition: 'in a way that is easy to understand' },
        { word: 'DAILY',        az: 'gündəlik', definition: 'every day' },
        { word: 'ALREADY',      az: 'artıq', definition: 'before now' },
      ]
    },
    {
      words: [
        { word: 'AFTER',        az: 'sonra', definition: 'later than something' },
        { word: 'BEFORE',       az: 'əvvəl', definition: 'earlier than something' },
        { word: 'SOON',         az: 'tezliklə', definition: 'in a short time from now' },
        { word: 'NEVER',        az: 'heç vaxt', definition: 'at no time' },
        { word: 'OFTEN',        az: 'tez-tez', definition: 'many times' },
      ]
    },
  ]
},
    'b7_g0': { id: 'a2_b7_g0', title: 'Game 18',phases: [
    {
      words: [
        { word: 'AGREE',        az: 'razılaşmaq', definition: 'to have the same opinion' },
        { word: 'ARGUE',        az: 'mübahisə etmək', definition: 'to disagree angrily' },
        { word: 'SUGGEST',      az: 'təklif etmək', definition: 'to give an idea for someone to consider' },
        { word: 'GUEST',        az: 'qonaq', definition: 'a person who visits your home' },
      ]
    },
    {
      words: [
        { word: 'ADVICE',       az: 'məsləhət', definition: 'an opinion to help someone' },
        { word: 'COMMENT',      az: 'şərh', definition: 'an opinion or remark about something' },
        { word: 'MENTION',      az: 'qeyd etmək', definition: 'to speak about something quickly' },
        { word: 'INVITE',       az: 'dəvət etmək', definition: 'to ask someone to come' },
      ]
    },
    {
      words: [
        { word: 'ARGUMENT',     az: 'mübahisə', definition: 'a serious disagreement' },
        { word: 'PROMISE',      az: 'söz vermək', definition: 'to say you will definitely do something' },
        { word: 'MARRIAGE',     az: 'evlilik', definition: 'the legal relationship between husband and wife' },
        { word: 'PARTNER',      az: 'tərəfdaş', definition: 'a person you are in a relationship with' },
        { word: 'SUPPORT',      az: 'dəstək', definition: 'help and encouragement' },
      ]
    },
  ]
},
    'b8_g0': { id: 'a2_b8_g0', title: 'Game 19', phases: [
    {
      words: [
        { word: 'DANGER',       az: 'təhlükə', definition: 'the possibility of being harmed or killed' },
        { word: 'WAR',          az: 'müharibə', definition: 'a long period of fighting between countries or groups' },
        { word: 'AWARD',        az: 'mükafat', definition: 'a prize given for an achievement' },
        { word: 'EARN',         az: 'qazanmaq', definition: 'to get money by working' },
      ]
    },
    {
      words: [
        { word: 'LAW',          az: 'qanun', definition: 'the official rules of a country' },
        { word: 'STEAL',        az: 'oğurlamaq', definition: 'to take something that is not yours' },
        { word: 'SALE',         az: 'satış', definition: 'the act of selling something' },
        { word: 'TAX',          az: 'vergi', definition: 'money paid to the government' },
      ]
    },
    {
      words: [
        { word: 'CRIME',        az: 'cinayət', definition: 'an illegal act that is punishable by law' },
        { word: 'PROTECT',      az: 'qorumaq', definition: 'to keep someone safe' },
        { word: 'OFFICER',      az: 'zabit', definition: 'a person with authority in the army or police' },
        { word: 'COIN',         az: 'sikkə', definition: 'a small round piece of metal money' },
        { word: 'PERCENT',     az: 'faiz', definition: '— tapılmadı —' },
        { word: 'PROFIT',       az: 'mənfəət', definition: 'the financial gain after all expenses have been deducted' },
      ]
    },
  ]
},
    'b9_g0': { id: 'a2_b9_g0', title: 'Game 20', phases: [
    {
      words: [
        { word: 'GAS',          az: 'qaz', definition: 'a substance like air that we use for energy' },
        { word: 'GOLD',         az: 'qızıl', definition: 'a very valuable yellow metal' },
        { word: 'GRASS',        az: 'ot', definition: 'the green plant that covers fields' },
        { word: 'ABROAD',       az: 'xaricdə', definition: 'in another country' },
      ]
    },
    {
      words: [
        { word: 'OIL',          az: 'neft', definition: 'a black liquid used to make petrol' },
        { word: 'POLLUTION',    az: 'çirklənmə', definition: 'the presence of harmful substances in the environment' },
        { word: 'NATURE',       az: 'təbiət', definition: 'the natural world of plants, animals, and landscapes' },
        { word: 'AIRLINE',      az: 'aviaşirkət', definition: 'a company that flies planes' },
        { word: 'TOUR',         az: 'tur', definition: 'an organized trip to see places' },
        { word: 'ROUTE',        az: 'marşrut', definition: 'the way or road you take to travel somewhere' },
        { word: 'TRIP',         az: 'səfər', definition: 'a short journey' },
      ]
    },
    {
      words: [
        { word: 'FOREST',       az: 'meşə', definition: 'a large area of land covered with trees' },
        { word: 'REDUCE',       az: 'azaltmaq', definition: 'to make something smaller or less' },
        { word: 'RESOURCE',     az: 'resurs', definition: 'something useful like money or materials' },
        { word: 'WASTE',        az: 'tullantı', definition: 'unwanted materials that are thrown away' },
        { word: 'WOOD',         az: 'taxta', definition: 'material from trees used for building' },
        { word: 'COAST',        az: 'sahil', definition: 'the land next to the sea' },
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
        { word: 'EDUCATE',      az: 'təhsil vermək', definition: 'to teach someone over a long period, especially at school' },
        { word: 'EDUCATED',     az: 'təhsilli', definition: 'having received a good education' },
        { word: 'CAREER',       az: 'karyera', definition: 'the series of jobs you have during your working life' },
        { word: 'TRADE',        az: 'ticarət', definition: 'the activity of buying and selling goods' },
      ]
    },
    {
      words: [
        { word: 'TOPIC',        az: 'mövzu', definition: 'the subject of a discussion or text' },
        { word: 'COMPETITOR',   az: 'rəqib', definition: 'a company or person trying to be more successful' },
        { word: 'PROMOTE',      az: 'təbliğ etmək', definition: 'to help something develop or become more popular' },
        { word: 'IMPORT',       az: 'idxal etmək', definition: 'to bring goods from other countries' },
        { word: 'PRICE',        az: 'qiymət', definition: 'the amount of money you must pay for something' },
      ]
    },
    {
      words: [
        { word: 'ACADEMIC',     az: 'akademik', definition: 'connected with education, especially at university level' },
        { word: 'CANDIDATE',    az: 'namizəd', definition: 'a person who is trying to be elected' },
        { word: 'INDICATE',     az: 'göstərmək', definition: 'to show or point out something' },
        { word: 'NOTE',         az: 'qeyd', definition: 'a short written message' },
        { word: 'ECONOMIC',     az: 'iqtisadi', definition: 'related to the economy' },
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
        { word: 'GRADE',        az: 'qiymət', definition: 'a mark you receive for your work at school' },
        { word: 'DIAGRAM',      az: 'diaqram', definition: 'a drawing that shows information' },
        { word: 'BARGAIN',      az: 'sövdələşmə', definition: 'a very good deal or agreement on price' },
        { word: 'BRAND',        az: 'marka', definition: 'a name that identifies a particular product' },
      ]
    },
    {
      words: [
        { word: 'CHAPTER',      az: 'fəsil', definition: 'one of the main parts of a book' },
        { word: 'PROJECT',      az: 'layihə', definition: 'a planned piece of work with a specific goal' },
        { word: 'EXPORT',       az: 'ixrac etmək', definition: 'to sell goods to other countries' },
        { word: 'TAX',          az: 'vergi', definition: 'money paid to the government' },
      ]
    },
  ]
},

    'b0_g2': { id: 'b1_b0_g2', title: 'Game 3',phases: [
    {
      words: [
        { word: 'REVISE',       az: 'təkrar etmək', definition: 'to study again before an exam' },
        { word: 'NARRATIVE',    az: 'hekayə', definition: 'a story or description of events' },
        { word: 'TRANSLATE',    az: 'tərcümə etmək', definition: 'to change text from one language to another' },
        { word: 'CLIENT',       az: 'müştəri', definition: 'a person or company that buys a service' },
        { word: 'INVEST',       az: 'sərmayə qoymaq', definition: 'to put money into something to make more money' },
      ]
    },
    {
      words: [
        { word: 'PRACTICAL',    az: 'praktiki', definition: 'connected with real situations' },
        { word: 'APPLICATION',  az: 'müraciət', definition: 'a formal request for a job' },
        { word: 'PROFIT',       az: 'mənfəət', definition: 'the financial gain after all expenses have been deducted' },
        { word: 'FINANCIAL',    az: 'maliyyə', definition: 'connected with money and finance' },
        { word: 'PROFIT',       az: 'mənfəət', definition: 'the financial gain after all expenses have been deducted' },
      ]
    },
    {
      words: [
        { word: 'STANDARD',     az: 'standart', definition: 'a level of quality that is accepted' },
        { word: 'ACCOUNT',      az: 'hesab', definition: 'a record of money in a bank' },
        { word: 'STAFF',        az: 'heyət', definition: 'the people who work for an organization' },
        { word: 'AFFORD',       az: 'gücü çatmaq', definition: 'to have enough money to buy something' },
        { word: 'RESOURCE',     az: 'resurs', definition: 'something useful like money or materials' },
      ]
    },
  ]
},


    
    'b1_g0': { id: 'b1_b1_g0', title: 'Game 4', phases: [
    {
      words: [
        { word: 'SCAN',         az: 'skan etmək', definition: 'to make a digital copy of a document' },
        { word: 'CONTACT',      az: 'əlaqə saxlamaq', definition: 'to communicate with someone' },
        { word: 'STATE',        az: 'bəyan etmək', definition: 'an organized political community' },
      ]
    },
    {
      words: [
        { word: 'MALL',         az: 'ticarət mərkəzi', definition: 'a large building with many shops' },
        { word: 'VALUE',        az: 'dəyər', definition: 'how useful or important something is' },
        { word: 'VALUABLE',     az: 'dəyərli', definition: 'worth a lot of money or very useful' },
        { word: 'YELL',         az: 'bağırmaq', definition: 'to shout very loudly' },
      ]
    },
    {
      words: [
        { word: 'CREDIT',       az: 'kredit', definition: 'an agreement to pay for something later' },
        { word: 'RENT',         az: 'icarə', definition: 'money paid regularly to use a house or flat' },
        { word: 'COMMENT',      az: 'şərh', definition: 'an opinion or remark about something' },
        { word: 'RECOMMEND',    az: 'tövsiyə etmək', definition: 'to say that something is good or suitable' },
        { word: 'REMIND',       az: 'xatırlatmaq', definition: 'to help someone remember something' },
      ]
    },
  ]
},
    'b1_g1': { id: 'b1_b1_g1', title: 'Game 5', phases: [
    {
      words: [
        { word: 'FINE',         az: 'cərimə', definition: 'money you have to pay as a punishment' },
        { word: 'CHANNEL',      az: 'kanal', definition: 'a television or radio station' },
        { word: 'FILE',         az: 'fayl', definition: 'a collection of information on a computer' },
        { word: 'HEADLINE',     az: 'başlıq', definition: 'the heading at the top of a newspaper story' },
      ]
    },
    {
      words: [
        { word: 'BARGAIN',      az: 'sövdələşmə', definition: 'a very good deal or agreement on price' },
        { word: 'BRAND',        az: 'marka', definition: 'a name that identifies a particular product' },
        { word: 'GOODS',        az: 'mallar', definition: 'things that are made to be sold' },
        { word: 'LOG',          az: 'qeyd', definition: 'a record of activity on a computer' },
        { word: 'SIGNAL',       az: 'siqnal', definition: 'a sign or wave that carries information' },
      ]
    },
    {
      words: [
        { word: 'PRICE',        az: 'qiymət', definition: 'the amount of money you must pay for something' },
        { word: 'SCRIPT',       az: 'ssenari', definition: 'the written text of a film or play' },
        { word: 'UPDATE',       az: 'yeniləmək', definition: 'to make something more modern or recent' },
        { word: 'APPRECIATE',   az: 'qiymətləndirmək', definition: 'to be thankful for something' },
        { word: 'DISCUSS',      az: 'müzakirə etmək', definition: 'to talk about something in detail with others' },
        { word: 'PERSUADE',     az: 'razı salmaq', definition: 'to make someone do something by giving reasons' },
      ]
    },
  ]
},




    
    'b2_g0': { id: 'b1_b2_g0', title: 'Game 6', phases: [
    {
      words: [
        { word: 'UPSET',        az: 'narahat', definition: 'unhappy and disappointed about something' },
        { word: 'CARELESS',     az: 'diqqətsiz', definition: 'not paying attention to what you do' },
        { word: 'CRUEL',        az: 'zalım', definition: 'deliberately causing pain or suffering to others' },
        { word: 'PLEASANT',     az: 'xoş', definition: 'nice and enjoyable' },
        { word: 'UNPLEASANT',   az: 'xoşagəlməz', definition: 'not nice or enjoyable' },
      ]
    },
    {
      words: [
        { word: 'AMAZED',       az: 'heyrətlənmiş', definition: 'very surprised by something unexpected or impressive' },
        { word: 'GLAD',         az: 'şad', definition: 'pleased and happy about something' },
        { word: 'MAD',          az: 'dəli / əsəbi', definition: 'very angry' },
        { word: 'CALM',         az: 'sakit', definition: 'peaceful and not excited or angry' },
        { word: 'GENTLE',       az: 'mülayim', definition: 'kind, calm and not rough' },
        { word: 'TALENTED',     az: 'istedadlı', definition: 'having a natural ability to do something well' },
      ]
    },
    {
      words: [
        { word: 'HONEST',       az: 'dürüst', definition: 'always telling the truth' },
        { word: 'LONELY',       az: 'tənha', definition: 'feeling sad because you are alone' },
        { word: 'SHY',          az: 'utancaq', definition: 'nervous and not comfortable with people' },
        { word: 'HORRIBLE',     az: 'dəhşətli', definition: 'extremely unpleasant or bad' },
        { word: 'SENSIBLE',     az: 'ağıllı', definition: 'showing good judgement' },
        { word: 'SILLY',        az: 'axmaq', definition: 'not serious or sensible' },
      ]
    },
  ]
},



    
    'b3_g0': { id: 'b1_b3_g0', title: 'Game 7', phases: [
    {
      words: [
        { word: 'BAN',          az: 'qadağan etmək', definition: 'to officially say that something is not permitted' },
        { word: 'GUARD',        az: 'mühafizəçi', definition: 'a person who protects something' },
        { word: 'WARNING',      az: 'xəbərdarlıq', definition: 'a message about possible danger' },
        { word: 'WARN',         az: 'xəbərdarlıq etmək', definition: 'to tell someone about possible danger' },
      ]
    },
    {
      words: [
        { word: 'BOMB',         az: 'bomba', definition: 'an explosive device used to cause damage' },
        { word: 'STATE',        az: 'dövlət', definition: 'an organized political community' },
        { word: 'BATTLE',       az: 'döyüş', definition: 'a fight between two armies in a war' },
        { word: 'BOMB',         az: 'bomba', definition: 'an explosive device used to cause damage' },
        { word: 'SLAM',         az: 'şiddətlə vurmaq', definition: 'to close something with great force' },
      ]
    },
    {
      words: [
        { word: 'ELECTION',     az: 'seçki', definition: 'the process of choosing a government or representatives by voting' },
        { word: 'VICTIM',       az: 'qurban', definition: 'a person who has been hurt or suffered because of a crime' },
        { word: 'VOTE',         az: 'səs vermək', definition: 'to choose someone in an election' },
        { word: 'CLAIM',        az: 'iddia etmək', definition: 'to say that something is true' },
        { word: 'VIOLENT',      az: 'zorakı', definition: 'using or involving physical force' },
      ]
    },
  ]
},
    'b3_g1': { id: 'b1_b3_g1', title: 'Game 8', phases: [
    {
      words: [
        { word: 'PRISON',       az: 'həbsxana', definition: 'a building where criminals are kept as punishment' },
        { word: 'PUNISH',       az: 'cəzalandırmaq', definition: 'to make someone suffer for doing wrong' },
        { word: 'BURST',        az: 'partlamaq', definition: 'to break open suddenly' },
        { word: 'HUNT',         az: 'ov etmək', definition: 'to chase and catch wild animals' },
        { word: 'SHOOT',        az: 'atəş açmaq', definition: 'to fire a gun' },
      ]
    },
    {
      words: [
        { word: 'LEGAL',        az: 'qanuni', definition: 'allowed by the law' },
        { word: 'FORCE',        az: 'güc', definition: 'physical power or violence' },
        { word: 'KILLING',      az: 'öldürmə', definition: 'the act of causing someone’s death' },
        { word: 'RIFLE',        az: 'tüfəng', definition: 'a long gun used by soldiers' },
        { word: 'RISK',         az: 'risk', definition: 'the possibility of something bad happening' }, ]
    },
    {
      words: [
        { word: 'ARREST',       az: 'həbs etmək', definition: 'to take someone to the police station because they may have committed a crime' },
        { word: 'POLITICAL',    az: 'siyasi', definition: 'relating to the government or public affairs of a country' },
        { word: 'POLITICS',     az: 'siyasət', definition: 'the activities of government and power' },
        { word: 'PROTEST',      az: 'etiraz', definition: 'a public demonstration against something' },
        { word: 'SLAP',         az: 'şillə vurmaq', definition: 'to hit someone with your open hand' },
      ]
    },
  ]
},



    
    'b4_g0': { id: 'b1_b4_g0', title: 'Game 9',  phases: [
    {
      words: [
        { word: 'RAIN',         az: 'yağış', definition: 'water that falls from clouds' },
        { word: 'DEER',         az: 'maral', definition: 'a large wild animal with antlers' },
        { word: 'SAND',         az: 'qum', definition: 'very small grains of rock found on beaches' },
        { word: 'SEED',         az: 'toxum', definition: 'a small object from which a new plant grows' },
      ]
    },
    {
      words: [
        { word: 'GUIDE',        az: 'bələdçi', definition: 'a person who shows tourists around' },
        { word: 'LUGGAGE',      az: 'baqaj', definition: 'bags and suitcases you take on a trip' },
        { word: 'FUEL',         az: 'yanacaq', definition: 'a material like petrol used to produce energy' },
        { word: 'LEAF',         az: 'yarpaq', definition: 'the flat green part of a tree or plant' },
      ]
    },
    {
      words: [
        { word: 'TRAILER',      az: 'qoşqu', definition: 'a vehicle pulled behind a car' },
        { word: 'HEAT',         az: 'istilik', definition: 'high temperature' },
        { word: 'WEATHER',      az: 'hava', definition: 'the condition of the atmosphere at a particular time and place' },
        { word: 'WHALE',        az: 'balina', definition: 'a very large sea animal' },
        { word: 'WOOL',         az: 'yun', definition: 'soft material from sheep' },
      ]
    },
  ]
},
    'b4_g1': { id: 'b1_b4_g1', title: 'Game 10',phases: [
    {
      words: [
        { word: 'BORDER',       az: 'sərhəd', definition: 'the official line separating two countries' },
        { word: 'DEPARTURE',    az: 'yola düşmə', definition: 'the act of leaving a place' },
        { word: 'PORT',         az: 'liman', definition: 'a place where ships load and unload goods' },
        { word: 'ROUTE',        az: 'marşrut', definition: 'the way or road you take to travel somewhere' },
      ]
    },
    {
      words: [
        { word: 'SAILOR',       az: 'dənizçi', definition: 'a person who works on a ship' },
        { word: 'TOURISM',      az: 'turizm', definition: 'the business of organizing holidays for people' },
        { word: 'STORM',        az: 'fırtına', definition: 'bad weather with strong winds and rain' },
        { word: 'MUD',          az: 'palçıq', definition: 'wet earth that is soft and sticky' },
        { word: 'SOIL',         az: 'torpaq', definition: 'the top layer of earth where plants grow' },
      ]
    },
    {
      words: [
        { word: 'DESTINATION',  az: 'təyinat yeri', definition: 'the place you are travelling to' },
        { word: 'TRANSPORT',    az: 'nəqliyyat', definition: 'the system of moving people or goods' },
        { word: 'DISASTER',     az: 'fəlakət', definition: 'a sudden event that causes great damage' },
        { word: 'GRAIN',        az: 'taxıl', definition: 'the seeds of crops like wheat and rice' },
        { word: 'SPRING',       az: 'yaz', definition: 'the season after winter' },
        { word: 'ENTRANCE',     az: 'giriş', definition: 'the door or gate where you enter a building' },
      ]
    },
  ]
},



    
    'b5_g0': { id: 'b1_b5_g0', title: 'Game 11', phases: [
    {
      words: [
        { word: 'TIN',          az: 'qalay', definition: 'a soft metal often used for cans' },
        { word: 'PAIN',         az: 'ağrı', definition: 'the feeling when part of your body hurts' },
        { word: 'PAN',          az: 'tava', definition: 'a shallow metal container for frying' },
        { word: 'POT',          az: 'qazan', definition: 'a deep container for cooking soup' },
      ]
    },
    {
      words: [
        { word: 'LEATHER',      az: 'dəri', definition: 'material made from animal skin' },
        { word: 'METAL',        az: 'metal', definition: 'a hard shiny material like iron or gold' },
        { word: 'HEALTH',       az: 'sağlamlıq', definition: 'the condition of your body and mind' },
        { word: 'TREAT',        az: 'müalicə etmək', definition: 'to give medical care to someone' },
        { word: 'MEAL',         az: 'yemək', definition: 'food eaten at one time' },
      ]
    },
    {
      words: [
        { word: 'COAL',         az: 'kömür', definition: 'a black rock used as fuel' },
        { word: 'COTTON',       az: 'pambıq', definition: 'a soft natural material from plants' },
        { word: 'THROAT',       az: 'boğaz', definition: 'the passage at the back of your mouth' },
        { word: 'ALCOHOL',      az: 'spirt', definition: 'drinks like beer and wine that contain ethanol' },
        { word: 'CLOTH',        az: 'parça', definition: 'material made of fabric' },
      ]
    },
  ]
},
    'b5_g1': { id: 'b1_b5_g1', title: 'Game 12', phases: [
    {
      words: [
        { word: 'SCIENTIFIC',   az: 'elmi', definition: 'relating to science and experiments' },
        { word: 'CHEST',        az: 'sinə', definition: 'the front part of your body between your neck and waist' },
        { word: 'FITNESS',      az: 'fiziki forma', definition: 'the state of being physically healthy and strong' },
        { word: 'ILLNESS',      az: 'xəstəlik', definition: 'a disease or period of being ill' },
        { word: 'SLICE',        az: 'dilim', definition: 'a thin flat piece cut from something' },
      ]
    },
    {
      words: [
        { word: 'MATERIAL',     az: 'material', definition: 'a substance used for making things' },
        { word: 'BREATH',       az: 'nəfəs', definition: 'the air that goes in and out of your lungs' },
        { word: 'BREATHE',      az: 'nəfəs almaq', definition: 'to take air into your lungs' },
        { word: 'MENTAL',       az: 'zehni', definition: 'relating to the mind' },
        { word: 'TREATMENT',    az: 'müalicə', definition: 'the process of treating an illness or injury' },
      ]
    },
    {
      words: [
        { word: 'COPPER',       az: 'mis', definition: 'a reddish-brown metal used in wires' },
        { word: 'FUEL',         az: 'yanacaq', definition: 'a material like petrol used to produce energy' },
        { word: 'IRON',         az: 'dəmir', definition: 'a strong metal used for making tools' },
        { word: 'NUCLEAR',      az: 'nüvə', definition: 'relating to the energy produced by atoms' },
        { word: 'PAINFUL',      az: 'ağrılı', definition: 'causing pain' },
        { word: 'APPLIANCE',    az: 'məişət texnikası', definition: 'a machine used in the home, such as a fridge or washing machine' },
        { word: 'FLOUR',        az: 'un', definition: 'powder made from wheat used for bread' },
        { word: 'RECIPE',       az: 'resept', definition: 'instructions for cooking a particular dish' },
      ]
    },
  ]
},




    
    'b6_g0': { id: 'b1_b6_g0', title: 'Game 13', phases: [
    {
      words: [
        { word: 'APPLIANCE',    az: 'məişət texnikası', definition: 'a machine used in the home, such as a fridge or washing machine' },
        { word: 'CEILING',      az: 'tavan', definition: 'the upper surface of a room' },
        { word: 'PAN',          az: 'tava', definition: 'a shallow metal container for frying' },
        { word: 'PIPE',         az: 'boru', definition: 'a tube that carries water or gas' },
      ]
    },
    {
      words: [
        { word: 'ALARM',        az: 'zəng / siqnal', definition: 'a loud sound used to wake you up or warn you' },
        { word: 'GARAGE',       az: 'qaraj', definition: 'a building for keeping a car' },
        { word: 'BRIDE',        az: 'gəlin', definition: 'a woman on her wedding day' },
        { word: 'MARRIAGE',     az: 'evlilik', definition: 'the legal relationship between husband and wife' },
      ]
    },
    {
      words: [
        { word: 'BEDROOM',      az: 'yataq otağı', definition: 'the room where you sleep' },
        { word: 'COTTAGE',      az: 'kiçik ev', definition: 'a small house, usually in the countryside' },
        { word: 'ENGAGED',      az: 'nişanlı', definition: 'having formally agreed to marry someone' },
        { word: 'ROMANCE',      az: 'romantika', definition: 'a loving relationship' },
        { word: 'ROMANTIC',     az: 'romantik', definition: 'showing love in a sentimental way' },
        { word: 'TRADITION',    az: 'ənənə', definition: 'a custom passed down through generations' },
      ]
    },
  ]
},



    
    'b7_g0': { id: 'b1_b7_g0', title: 'Game 14', phases: [
    {
      words: [
        { word: 'POEM',         az: 'şeir', definition: 'a piece of writing with short lines and rhythm' },
        { word: 'POET',         az: 'şair', definition: 'a person who writes poems' },
        { word: 'POETRY',       az: 'şeir sənəti', definition: 'the art of writing poems' },
        { word: 'REPORT',       az: 'hesabat', definition: 'a written or spoken account of events' },
      ]
    },
    {
      words: [
        { word: 'THEME',        az: 'mövzu', definition: 'the main subject or idea in a work of art' },
        { word: 'ATHLETE',      az: 'atlet', definition: 'a person who competes in sports' },
        { word: 'TALENT',       az: 'istedad', definition: 'a natural ability to do something well' },
        { word: 'LABEL',        az: 'etiket', definition: 'a piece of paper with information on a product' },
      ]
    },
    {
      words: [
        { word: 'CULTURAL',     az: 'mədəni', definition: 'related to the culture of a society' },
        { word: 'CULTURE',      az: 'mədəniyyət', definition: 'the customs, arts and way of life of a society' },
        { word: 'GIG',          az: 'konsert', definition: 'a live performance by a musician or band' },
        { word: 'RACE',         az: 'qaçış yarışı', definition: 'a competition to see who is fastest' },
        { word: 'RACING',       az: 'yarış', definition: 'the sport of competing in races' },
        { word: 'TRAINING',     az: 'məşq', definition: 'practice to improve skills in sport' },
      ]
    },
  ]
},
    'b7_g1': { id: 'b1_b7_g1', title: 'Game 15', phases: [
    {
      words: [
        { word: 'ALBUM',        az: 'albom', definition: 'a collection of songs released together' },
        { word: 'MAGIC',        az: 'sehrli', definition: 'the art of doing tricks that seem impossible' },
        { word: 'MUSCLE',       az: 'əzələ', definition: 'the soft tissue in your body that helps you move' },
        { word: 'RUGBY',        az: 'reqbi', definition: 'a team sport played with an oval ball' },
        { word: 'SUMMARY',      az: 'xülasə', definition: 'a short version of a longer piece of writing' },
      ]
    },
    {
      words: [
        { word: 'CAPTAIN',      az: 'kapitan', definition: 'the leader of a sports team' },
        { word: 'CHAMPION',     az: 'çempion', definition: 'the winner of a competition' },
        { word: 'COACH',        az: 'məşqçi', definition: 'a person who trains athletes' },
        { word: 'COMMENT',      az: 'şərh', definition: 'an opinion or remark about something' },
        { word: 'NOTE',         az: 'qeyd', definition: 'a short written message' },
        { word: 'TOPIC',        az: 'mövzu', definition: 'the subject of a discussion or text' },
      ]
    },
    {
      words: [
        { word: 'PORTRAIT',     az: 'portret', definition: 'a painting, drawing or photograph of a person' },
        { word: 'STUDIO',       az: 'studiya', definition: 'a room where artists or musicians work' },
        { word: 'SPEED',        az: 'sürət', definition: 'how fast someone or something moves' },
        { word: 'STADIUM',      az: 'stadion', definition: 'a large building where people watch sports' },
        { word: 'SUPPORTER',    az: 'azarkeş', definition: 'a person who supports a sports team' },
        { word: 'SUMMARISE',    az: 'xülasə etmək', definition: 'to give a short version of a longer text' },
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


    
      // ──────────────────────────────────────────────
  
  'b2': {
    'b0_g0':  { id: 'b2_b0_g0',  title: 'Game 1', phases: [
    {
      words: [
        { word: 'EDUCATE',      az: 'təhsil vermək', definition: 'to teach someone over a long period, especially at school' },
        { word: 'GRADUATE',     az: 'məzun olmaq', definition: 'to successfully complete a university course' },
        { word: 'ACCURATE',     az: 'dəqiq', definition: 'correct and exact in all details' },
      ]
    },
    {
      words: [
        { word: 'SEMINAR',      az: 'seminar', definition: 'a class at university where a small group discusses a subject' },
        { word: 'AWARE',        az: 'xəbərdar', definition: 'knowing about a situation or fact' },
        { word: 'AWARENESS',    az: 'məlumatlılıq', definition: 'knowledge or understanding of a situation' },
      ]
    },
    {
      words: [
        { word: 'ANALYSIS',     az: 'təhlil', definition: 'a detailed examination of the elements or structure of something' },
        { word: 'ANALYST',      az: 'analitik', definition: 'a person who examines information and makes reports' },
        { word: 'DEADLINE',     az: 'son tarix', definition: 'the last date by which something must be finished' },
        { word: 'ABILITY',      az: 'qabiliyyət', definition: 'the mental or physical power to do something' },
      ]
    },
  ]
},

      
      // ──────────────────────────────────────────────
    'b1_g0':  { id: 'b2_b1_g0',  title: 'Game 2', phases: [
    {
      words: [
        { word: 'BUDGET',       az: 'büdcə', definition: 'a financial plan estimating income and expenditure over a period' },
        { word: 'DEBT',         az: 'borc', definition: 'money that you owe to someone' },
        { word: 'FEE',          az: 'ödəniş / haqq', definition: 'money you pay for a professional service' },
        { word: 'FUND',         az: 'fond', definition: 'an amount of money saved or collected for a purpose' },
      ]
    },
    {
      words: [
        { word: 'DEADLINE',     az: 'son tarix', definition: 'the last date by which something must be finished' },
        { word: 'FINANCE',      az: 'maliyyə', definition: 'the management of large amounts of money' },
        { word: 'FINANCIAL',    az: 'maliyyə', definition: 'connected with money and finance' },
      ]
    },
    {
      words: [
        { word: 'CLIENT',       az: 'müştəri', definition: 'a person or company that buys a service' },
        { word: 'COMMITTEE',    az: 'komitə', definition: 'a group of people who make decisions together' },
        { word: 'INCOME',       az: 'gəlir', definition: 'money that you receive regularly' },
        { word: 'LOAN',         az: 'kredit', definition: 'money that you borrow and must pay back' },
      ]
    },
  ]
},

    'b1_g1':  { id: 'b2_b1_g1',  title: 'Game 3', phases: [
    {
      words: [
        { word: 'CAREER',       az: 'karyera', definition: 'the series of jobs you have during your working life' },
        { word: 'MANAGEMENT',   az: 'idarəetmə', definition: 'the process of controlling and organizing a company' },
        { word: 'MANAGER',      az: 'menecer', definition: 'a person who is in charge of a team or department' },
        { word: 'TRADE',        az: 'ticarət', definition: 'the activity of buying and selling goods' },
      ]
    },
    {
      words: [
        { word: 'AGENCY',       az: 'agentlik', definition: 'a business that provides a particular service' },
        { word: 'COMPANY',      az: 'şirkət', definition: 'a business organization' },
        { word: 'ECONOMY',      az: 'iqtisadiyyat', definition: 'the system of money, industry and trade in a country' },
        { word: 'PAYMENT',      az: 'ödəniş', definition: 'the act of paying money for something' },
      ]
    },
    {
      words: [
        { word: 'CORPORATION',  az: 'korporasiya', definition: 'a large company or group of companies authorized to act as a single entity' },
        { word: 'FIRM',         az: 'firma', definition: 'a business company' },
        { word: 'PROFIT',       az: 'mənfəət', definition: 'the financial gain after all expenses have been deducted' },
        { word: 'PROMOTION',    az: 'vəzifə yüksəlişi', definition: 'moving to a higher position in a company' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b2_g0':  { id: 'b2_b2_g0',  title: 'Game 4', phases: [
    {
      words: [
        { word: 'GLAD',         az: 'şad', definition: 'pleased and happy about something' },
        { word: 'EAGER',        az: 'həvəsli', definition: 'very keen and excited to do something' },
        { word: 'RELAXED',      az: 'rahat', definition: 'feeling calm and not worried' },
      ]
    },
    {
      words: [
        { word: 'INTERNET',     az: 'internet', definition: 'the global computer network' },
        { word: 'IT',           az: 'informasiya texnologiyası', definition: 'the use of computers and technology in business' },
        { word: 'REMIND',       az: 'xatırlatmaq', definition: 'to help someone remember something' },
        { word: 'DETERMINED',   az: 'qərarlı', definition: 'having a firm decision or being resolved to do something' },
      ]
    },
    {
      words: [
        { word: 'UPDATE',       az: 'yeniləmək', definition: 'to make something more modern or recent' },
        { word: 'PERSUADE',     az: 'razı salmaq', definition: 'to make someone do something by giving reasons' },
        { word: 'DEPRESSED',    az: 'depressiyada olan', definition: 'feeling very sad and without hope for a long time' },
        { word: 'UPSET',        az: 'narahat', definition: 'unhappy and disappointed about something' },
      ]
    },
  ]
},
    'b2_g1':  { id: 'b2_b2_g1',  title: 'Game 5',   phases: [
    {
      words: [
        { word: 'ONLINE',       az: 'onlayn', definition: 'connected to the internet' },
        { word: 'YELL',         az: 'bağırmaq', definition: 'to shout very loudly' },
        { word: 'LONELY',       az: 'tənha', definition: 'feeling sad because you are alone' },
        { word: 'ANNOYING',     az: 'əsəbləşdirici', definition: 'making you feel slightly angry or irritated' },
      ]
    },
    {
      words: [
        { word: 'ANNOUNCE',     az: 'elan etmək', definition: 'to tell people something officially or publicly' },
        { word: 'ANNOUNCEMENT', az: 'elan', definition: 'an official statement about something' },
        { word: 'COMMENT',      az: 'şərh', definition: 'an opinion or remark about something' },
        { word: 'CONTACT',      az: 'əlaqə saxlamaq', definition: 'to communicate with someone' },
      ]
    },
    {
      words: [
        { word: 'DISCUSS',      az: 'müzakirə etmək', definition: 'to talk about something in detail with others' },
        { word: 'CURIOUS',      az: 'maraqlanan', definition: 'wanting to know or learn more about something' },
        { word: 'FURIOUS',      az: 'qəzəbli', definition: 'extremely angry' },
        { word: 'PROUD',        az: 'qürurlu', definition: 'feeling pleased about your own achievements' },
        { word: 'SURPRISED',    az: 'təəccüblənmiş', definition: 'feeling unexpected astonishment' },
      ]
    },
  ]
},
    'b2_g2':  { id: 'b2_b2_g2',  title: 'Game 6',   phases: [
    {
      words: [
        { word: 'ASHAMED',      az: 'utanmış', definition: 'feeling embarrassed or guilty about something you did' },
        { word: 'SATISFIED',    az: 'məmnun', definition: 'pleased because your needs or expectations are met' },
        { word: 'DATABASE',     az: 'verilənlər bazası', definition: 'a large collection of information stored in a computer' },
        { word: 'MEDIA',        az: 'media', definition: 'television, radio, newspapers and the internet' },
      ]
    },
    {
      words: [
        { word: 'SUGGEST',      az: 'təklif etmək', definition: 'to give an idea for someone to consider' },
        { word: 'GESTURE',      az: 'jest', definition: 'a movement of the hand or head to express something' },
        { word: 'FRUSTRATED',   az: 'əsəbləşmiş', definition: 'feeling annoyed because you cannot achieve what you want' },
        { word: 'GRATEFUL',     az: 'minnətdar', definition: 'feeling thankful for something' },
        { word: 'CRUEL',        az: 'zalım', definition: 'deliberately causing pain or suffering to others' },
      ]
    },
    {
      words: [
        { word: 'STUDIO',       az: 'studiya', definition: 'a room where artists or musicians work' },
        { word: 'VERSION',      az: 'versiya', definition: 'a form of something that is slightly different' },
        { word: 'RESPOND',      az: 'cavab vermək', definition: 'to reply or react to something' },
        { word: 'INTERPRET',    az: 'şərh etmək', definition: 'to explain the meaning of something' },
        { word: 'INTERPRETATION', az: 'şərh', definition: 'an explanation or understanding of something' },
        { word: 'DISAPPOINTED', az: 'məyus', definition: 'sad because something was not as good as expected' },
        { word: 'NERVOUS',      az: 'gərgin', definition: 'worried or anxious about something' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b3_g0':  { id: 'b2_b3_g0',  title: 'Game 7',   phases: [
    {
      words: [
        { word: 'LAW',          az: 'qanun', definition: 'the official rules of a country' },
        { word: 'LEGAL',        az: 'qanuni', definition: 'allowed by the law' },
        { word: 'DAMAGE',       az: 'ziyan', definition: 'physical harm caused to something' },
        { word: 'WAR',          az: 'müharibə', definition: 'a long period of fighting between countries or groups' },
        { word: 'ARMED',        az: 'silahlı', definition: 'carrying or equipped with weapons' },
      ]
    },
    {
      words: [
        { word: 'OFFENCE',      az: 'hüquq pozuntusu', definition: 'a crime or illegal action' },
        { word: 'ELECTION',     az: 'seçki', definition: 'the process of choosing a government or representatives by voting' },
        { word: 'VOTE',         az: 'səs vermək', definition: 'to choose someone in an election' },
        { word: 'CONFLICT',     az: 'münaqişə', definition: 'a serious disagreement or argument' },
        { word: 'VIOLENCE',     az: 'zorakılıq', definition: 'the use of physical force to harm people' },
      ]
    },
    {
      words: [
        { word: 'BAN',          az: 'qadağan etmək', definition: 'to officially say that something is not permitted' },
        { word: 'TRIAL',        az: 'məhkəmə prosesi', definition: 'the legal process of judging someone in court' },
        { word: 'BATTLE',       az: 'döyüş', definition: 'a fight between two armies in a war' },
        { word: 'THREAT',       az: 'təhdid', definition: 'a statement of an intention to inflict harm' },
        { word: 'THREATEN',     az: 'təhdid etmək', definition: 'to say that you will cause harm to someone' },
      ]
    },
  ]
},
    'b3_g1':  { id: 'b2_b3_g1',  title: 'Game 8',   phases: [
    {
      words: [
        { word: 'CRIME',        az: 'cinayət', definition: 'an illegal act that is punishable by law' },
        { word: 'VICTIM',       az: 'qurban', definition: 'a person who has been hurt or suffered because of a crime' },
        { word: 'MINISTER',     az: 'nazir', definition: 'a senior member of the government' },
        { word: 'EVIDENCE',     az: 'sübut', definition: 'facts or information that prove something is true' },
        { word: 'CRISIS',       az: 'böhran', definition: 'a time of intense difficulty or danger' },
      ]
    },
    {
      words: [
        { word: 'ARREST',       az: 'həbs etmək', definition: 'to take someone to the police station because they may have committed a crime' },
        { word: 'COURT',        az: 'məhkəmə', definition: 'the place where legal cases are judged' },
        { word: 'SUSPECT',      az: 'şübhəli', definition: 'a person who is thought to have committed a crime' },
        { word: 'PROTEST',      az: 'etiraz', definition: 'a public demonstration against something' },
        { word: 'ACCUSE',       az: 'ittiham etmək', definition: 'to say that someone has done something wrong' },
      ]
    },
    {
      words: [
        { word: 'POLICE',       az: 'polis', definition: 'the official organization that keeps order and catches criminals' },
        { word: 'PRISON',       az: 'həbsxana', definition: 'a building where criminals are kept as punishment' },
        { word: 'CANDIDATE',    az: 'namizəd', definition: 'a person who is trying to be elected' },
        { word: 'POLITICAL',    az: 'siyasi', definition: 'relating to the government or public affairs of a country' },
        { word: 'PRESIDENT',    az: 'prezident', definition: 'the head of state in many countries' },
        { word: 'SOLDIER',      az: 'əsgər', definition: 'a person who serves in the army' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b4_g0':  { id: 'b2_b4_g0',  title: 'Game 9',   phases: [
    {
      words: [
        { word: 'AIRPORT',      az: 'hava limanı', definition: 'a place where planes take off and land' },
        { word: 'PASSPORT',     az: 'pasport', definition: 'an official document needed for international travel' },
        { word: 'PORT',         az: 'liman', definition: 'a place where ships load and unload goods' },
        { word: 'STORM',        az: 'fırtına', definition: 'bad weather with strong winds and rain' },
      ]
    },
    {
      words: [
        { word: 'ROUTE',        az: 'marşrut', definition: 'the way or road you take to travel somewhere' },
        { word: 'TOURIST',      az: 'turist', definition: 'a person who travels for pleasure' },
        { word: 'VISA',         az: 'viza', definition: 'an official permission to enter a foreign country' },
        { word: 'RIVER',        az: 'çay', definition: 'a large natural flow of water' },
      ]
    },
    {
      words: [
        { word: 'GUIDE',        az: 'bələdçi', definition: 'a person who shows tourists around' },
        { word: 'BORDER',       az: 'sərhəd', definition: 'the official line separating two countries' },
        { word: 'FLOOD',        az: 'daşqın', definition: 'when a lot of water covers land that is normally dry' },
        { word: 'GLOBAL',       az: 'qlobal', definition: 'affecting the whole world' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b5_g0':  { id: 'b2_b5_g0',  title: 'Game 10',  phases: [
    {
      words: [
        { word: 'DATA',         az: 'məlumat', definition: 'facts and information used for analysis' },
        { word: 'HEAL',         az: 'sağalmaq', definition: 'to become healthy again after being ill' },
        { word: 'HEALTH',       az: 'sağlamlıq', definition: 'the condition of your body and mind' },
        { word: 'MENTAL',       az: 'zehni', definition: 'relating to the mind' },
      ]
    },
    {
      words: [
        { word: 'ANALYSIS',     az: 'təhlil', definition: 'a detailed examination of the elements or structure of something' },
        { word: 'ANALYSE',      az: 'təhlil etmək', definition: 'to examine something in detail' },
        { word: 'ILLNESS',      az: 'xəstəlik', definition: 'a disease or period of being ill' },
        { word: 'PAIN',         az: 'ağrı', definition: 'the feeling when part of your body hurts' },
        { word: 'PATIENT',      az: 'xəstə', definition: 'a person who is receiving medical treatment' },
      ]
    },
    {
      words: [
        { word: 'NUCLEAR',      az: 'nüvə', definition: 'relating to the energy produced by atoms' },
        { word: 'AMBULANCE',    az: 'təcili yardım maşını', definition: 'a vehicle used to take people to hospital in an emergency' },
        { word: 'CANCER',       az: 'xərçəng', definition: 'a serious disease in which cells grow uncontrollably' },
        { word: 'MUSCLE',       az: 'əzələ', definition: 'the soft tissue in your body that helps you move' },
        { word: 'CHEMICAL',     az: 'kimyəvi', definition: 'relating to chemistry or made by chemical processes' },

      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b6_g0':  { id: 'b2_b6_g0',  title: 'Game 11',  phases: [
    {
      words: [
        { word: 'MEAL',         az: 'yemək', definition: 'food eaten at one time' },
        { word: 'THEME',        az: 'mövzu', definition: 'the main subject or idea in a work of art' },
        { word: 'ATHLETE',      az: 'atlet', definition: 'a person who competes in sports' },
        { word: 'TEAM',         az: 'komanda', definition: 'a group of players who play together' },
      ]
    },
    {
      words: [
        { word: 'RECIPE',       az: 'resept', definition: 'instructions for cooking a particular dish' },
        { word: 'GARAGE',       az: 'qaraj', definition: 'a building for keeping a car' },
        { word: 'PIPE',         az: 'boru', definition: 'a tube that carries water or gas' },
        { word: 'GIG',          az: 'konsert', definition: 'a live performance by a musician or band' },
        { word: 'RACE',         az: 'qaçış yarışı', definition: 'a competition to see who is fastest' },
      ]
    },
    {
      words: [
        { word: 'BAKE',         az: 'bişirmək', definition: 'to cook food in an oven' },
        { word: 'BATTERY',      az: 'batareya', definition: 'a device that stores electrical energy' },
        { word: 'ART',          az: 'sənət', definition: 'the creation of paintings, sculptures and other works' },
        { word: 'THEATRE',      az: 'teatr', definition: 'a building where plays are performed' },
      ]
    },
  ]
},
    'b6_g1':  { id: 'b2_b6_g1',  title: 'Game 12',  phases: [
    {
      words: [
        { word: 'COOK',         az: 'bişirmək', definition: 'to prepare food by heating it' },
        { word: 'COTTAGE',      az: 'kiçik ev', definition: 'a small house, usually in the countryside' },
        { word: 'COACH',        az: 'məşqçi', definition: 'a person who trains athletes' },
        { word: 'MATCH',        az: 'oyun / matç', definition: 'a game between two teams' },
      ]
    },
    {
      words: [
        { word: 'INGREDIENT',   az: 'inqredient', definition: 'one of the foods or substances needed to make a dish' },
        { word: 'ENGAGED',      az: 'nişanlı', definition: 'having formally agreed to marry someone' },
        { word: 'TRADITION',    az: 'ənənə', definition: 'a custom passed down through generations' },
        { word: 'GENERATION',   az: 'nəsil', definition: 'all people born at about the same time' },
        { word: 'TRAINING',     az: 'məşq', definition: 'practice to improve skills in sport' },
      ]
    },
    {
      words: [
        { word: 'ROMANTIC',     az: 'romantik', definition: 'showing love in a sentimental way' },
        { word: 'CONCERT',      az: 'konsert', definition: 'a live performance of music' },
        { word: 'POEM',         az: 'şeir', definition: 'a piece of writing with short lines and rhythm' },
        { word: 'CAPTAIN',      az: 'kapitan', definition: 'the leader of a sports team' },
        { word: 'COMPETITION',  az: 'yarış', definition: 'an event where people try to win' },
      ]
    },
  ]
},
    'b6_g2':  { id: 'b2_b6_g2',  title: 'Game 13',  phases: [
    {
      words: [
        { word: 'ALARM',        az: 'zəng / siqnal', definition: 'a loud sound used to wake you up or warn you' },
        { word: 'ALBUM',        az: 'albom', definition: 'a collection of songs released together' },
        { word: 'PLAYER',       az: 'oyunçu', definition: 'a person who takes part in a sport or game' },
        { word: 'RUGBY',        az: 'reqbi', definition: 'a team sport played with an oval ball' },
      ]
    },
    {
      words: [
        { word: 'DIVORCE',      az: 'boşanma', definition: 'the legal end of a marriage' },
        { word: 'SOCIETY',      az: 'cəmiyyət', definition: 'all the people in a country or area' },
        { word: 'SCORE',        az: 'hesab', definition: 'the number of points in a game' },
        { word: 'VICTORY',      az: 'qələbə', definition: 'an act of defeating an opponent in a battle or contest' },
      ]
    },
    {
      words: [
        { word: 'CEILING',      az: 'tavan', definition: 'the upper surface of a room' },
        { word: 'CURTAIN',      az: 'pərdə', definition: 'a piece of material hung to cover a window' },
        { word: 'HEATING',      az: 'isitmə', definition: 'the system that makes a house warm' },
        { word: 'SHELTER',      az: 'sığınak', definition: 'a place that protects you from danger or bad weather' },
        { word: 'CULTURE',      az: 'mədəniyyət', definition: 'the customs, arts and way of life of a society' },
        { word: 'STRENGTH',     az: 'güc', definition: 'physical power' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b7_g0':  { id: 'b2_b7_g0',  title: 'Game 14',  phases: [
    {
      words: [
        { word: 'IDEA',         az: 'fikir', definition: 'a thought or suggestion' },
        { word: 'ADAPT',        az: 'uyğunlaşmaq', definition: 'to change your behaviour to suit a new situation' },
        { word: 'CREATE',       az: 'yaratmaq', definition: 'to make something new' },
        { word: 'PREPARE',      az: 'hazırlamaq', definition: 'to make something ready for use' },
        { word: 'REACT',        az: 'reaksiya vermək', definition: 'to respond to something' },
      ]
    },
    {
      words: [
        { word: 'CONCEPT',      az: 'konsepsiya', definition: 'an abstract idea or general notion' },
        { word: 'CONDUCT',      az: 'həyata keçirmək', definition: 'to carry out or organize something' },
        { word: 'PROCEED',      az: 'davam etmək', definition: 'to continue doing something' },
        { word: 'PRODUCE',      az: 'istehsal etmək', definition: 'to make or create something' },
        { word: 'REDUCE',       az: 'azaltmaq', definition: 'to make something smaller or less' },
      ]
    },
    {
      words: [
        { word: 'VIEW',         az: 'görüş', definition: 'a particular opinion or way of thinking' },
        { word: 'WISE',         az: 'müdrik', definition: 'having experience and good judgement' },
        { word: 'ACHIEVE',      az: 'əldə etmək', definition: 'to succeed in reaching a goal' },
        { word: 'RECEIVE',      az: 'almaq', definition: 'to get or be given something' },
        { word: 'RESEARCH',     az: 'tədqiqat aparmaq', definition: 'to study something in detail to discover new facts' },
      ]
    },
  ]
},
    'b7_g1':  { id: 'b2_b7_g1',  title: 'Game 15',  phases: [
    {
      words: [
        { word: 'BOLD',         az: 'cəsarətli', definition: 'confident and willing to take risks' },
        { word: 'BRAVE',        az: 'cəsur', definition: 'not afraid to face danger' },
        { word: 'EAGER',        az: 'həvəsli', definition: 'very keen and excited to do something' },
        { word: 'RESOLVE',      az: 'həll etmək', definition: 'to find a solution to a problem' },
        { word: 'SOLVE',        az: 'həll etmək', definition: 'to find a solution to a problem' },
      ]
    },
    {
      words: [
        { word: 'CALM',         az: 'sakit', definition: 'peaceful and not excited or angry' },
        { word: 'LOGIC',        az: 'məntiq', definition: 'reasoning conducted according to strict principles of validity' },
        { word: 'LOGICAL',      az: 'məntiqi', definition: 'based on reason and clear thinking' },
        { word: 'NOTION',       az: 'təsəvvür', definition: 'a conception of or belief about something' },
        { word: 'MANAGE',       az: 'idarə etmək', definition: 'to be in charge of something' },
        { word: 'NEGOTIATE',    az: 'danışıqlar aparmaq', definition: 'to discuss something in order to reach an agreement' },
      ]
    },
    {
      words: [
        { word: 'DETERMINED',   az: 'qərarlı', definition: 'having a firm decision or being resolved to do something' },
        { word: 'MIND',         az: 'ağıl', definition: 'the part of a person that thinks and feels' },
        { word: 'DEVELOP',      az: 'inkişaf etdirmək', definition: 'to grow or improve over time' },
        { word: 'IMPLEMENT',    az: 'tətbiq etmək', definition: 'to put a decision, plan or agreement into effect' },
        { word: 'IMPROVE',      az: 'təkmilləşdirmək', definition: 'to make something better' },
        { word: 'PROMOTE',      az: 'təbliğ etmək', definition: 'to help something develop or become more popular' },
        { word: 'PROVIDE',      az: 'təmin etmək', definition: 'to give someone something they need' },
      ]
    },
  ]
},
    'b7_g2':  { id: 'b2_b7_g2',  title: 'Game 16',  phases: [
    {
      words: [
        { word: 'HONEST',       az: 'dürüst', definition: 'always telling the truth' },
        { word: 'LOYAL',        az: 'sadiq', definition: 'always supporting and being faithful to someone' },
        { word: 'THEORY',       az: 'nəzəriyyə', definition: 'an idea intended to explain something' },
        { word: 'ANALYSE',      az: 'təhlil etmək', definition: 'to examine something in detail' },
        { word: 'HANDLE',       az: 'idarə etmək', definition: 'to deal with a situation or problem' },
      ]
    },
    {
      words: [
        { word: 'PATIENT',      az: 'səbirli', definition: 'a person who is receiving medical treatment' },
        { word: 'ABSTRACT',     az: 'mücərrəd', definition: 'existing in thought and not in physical form' },
        { word: 'PRINCIPLE',    az: 'prinsip', definition: 'a fundamental truth or proposition that serves as the foundation for a system' },
        { word: 'REALISE',      az: 'dərk etmək', definition: 'to become aware of something' },
        { word: 'REPLACE',      az: 'əvəz etmək', definition: 'to put something new in the place of something old' },
      ]
    },
    {
      words: [
        { word: 'CRUEL',        az: 'zalım', definition: 'deliberately causing pain or suffering to others' },
        { word: 'CURIOUS',      az: 'maraqlanan', definition: 'wanting to know or learn more about something' },
        { word: 'GENUINE',      az: 'səmimi', definition: 'real and sincere' },
        { word: 'ORGANISE',     az: 'təşkil etmək', definition: 'to arrange or plan something' },
        { word: 'REQUIRE',      az: 'tələb etmək', definition: 'to need something' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b8_g0':  { id: 'b2_b8_g0',  title: 'Game 17',  phases: [
    {
      words: [
        { word: 'ALTER',        az: 'dəyişdirmək', definition: 'to change something slightly' },
        { word: 'CRISIS',       az: 'böhran', definition: 'a time of intense difficulty or danger' },
        { word: 'ISSUE',        az: 'məsələ', definition: 'a problem or important subject' },
        { word: 'FAILURE',      az: 'uğursuzluq', definition: 'lack of success' },
        { word: 'FAULT',        az: 'səhv', definition: 'a mistake or weakness' },
      ]
    },
    {
      words: [
        { word: 'EVOLVE',       az: 'təkamül keçirmək', definition: 'to develop gradually from a simple to a more complex form' },
        { word: 'REVOLUTION',   az: 'inqilab', definition: 'a dramatic and wide-reaching change in conditions or way of life' },
        { word: 'TRANSITION',   az: 'keçid', definition: 'the process or period of changing from one state to another' },
        { word: 'VARIATION',    az: 'fərqlilik', definition: 'a change or difference in something' },
        { word: 'EVOLUTION',    az: 'təkamül', definition: 'the gradual development of something from a simple to a more complex form' },
        { word: 'SOLUTION',     az: 'həll yolu', definition: 'a way of solving a problem' },
      ]
    },
    {
      words: [
        { word: 'DEVELOP',      az: 'inkişaf etmək', definition: 'to grow or improve over time' },
        { word: 'IMPROVE',      az: 'yaxşılaşdırmaq', definition: 'to make something better' },
        { word: 'MODIFY',       az: 'dəyişiklik etmək', definition: 'to change something slightly' },
        { word: 'REFORM',       az: 'islahat', definition: 'to make changes in something in order to improve it' },
        { word: 'VARY',         az: 'dəyişmək', definition: 'to be different in size or amount' },
        { word: 'DILEMMA',      az: 'dilemma', definition: 'a situation in which a difficult choice has to be made' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b9_g0':  { id: 'b2_b9_g0',  title: 'Game 18',  phases: [
    {
      words: [
        { word: 'STATE',        az: 'dövlət', definition: 'an organized political community' },
        { word: 'LAW',          az: 'qanun', definition: 'the official rules of a country' },
        { word: 'LEGAL',        az: 'qanuni', definition: 'allowed by the law' },
      ]
    },
    {
      words: [
        { word: 'CANDIDATE',    az: 'namizəd', definition: 'a person who is trying to be elected' },
        { word: 'VOTE',         az: 'səs vermək', definition: 'to choose someone in an election' },
        { word: 'INNOCENT',     az: 'günahsız', definition: 'not responsible for a crime or wrongdoing' },
        { word: 'EVIDENCE',     az: 'sübut', definition: 'facts or information that prove something is true' },
      ]
    },
    {
      words: [
        { word: 'ELECTION',     az: 'seçki', definition: 'the process of choosing a government or representatives by voting' },
        { word: 'POLITICAL',    az: 'siyasi', definition: 'relating to the government or public affairs of a country' },
        { word: 'PROTEST',      az: 'etiraz', definition: 'a public demonstration against something' },
        { word: 'PRISON',       az: 'həbsxana', definition: 'a building where criminals are kept as punishment' },
        { word: 'TRIAL',        az: 'məhkəmə prosesi', definition: 'the legal process of judging someone in court' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b10_g0': { id: 'b2_b10_g0', title: 'Game 19',  phases: [
    {
      words: [
        { word: 'CAREER',       az: 'karyera', definition: 'the series of jobs you have during your working life' },
        { word: 'AWARD',        az: 'mükafat', definition: 'a prize given for an achievement' },
        { word: 'WIN',          az: 'qazanmaq', definition: 'to be successful in a competition' },
        { word: 'WINNER',       az: 'qalib', definition: 'a person who wins a competition' },
        { word: 'REWARD',       az: 'mükafat', definition: 'something given because of good work' },
      ]
    },
    {
      words: [
        { word: 'CONTRACT',     az: 'müqavilə', definition: 'a formal legal agreement about work' },
        { word: 'RETIRE',       az: 'təqaüdə çıxmaq', definition: 'to stop working because of old age' },
        { word: 'TALENT',       az: 'istedad', definition: 'a natural ability to do something well' },
        { word: 'GOAL',         az: 'məqsəd', definition: 'something you want to achieve' },
        { word: 'RECOGNITION',  az: 'tanınma', definition: 'identification of the existence, validity or legality of something' },
        { word: 'TARGET',       az: 'hədəf', definition: 'a goal or result you want to achieve' },
      ]
    },
    {
      words: [
        { word: 'COLLEAGUE',    az: 'iş yoldaşı', definition: 'a person you work with' },
        { word: 'EMPLOYEE',     az: 'işçi', definition: 'a person who works for a company' },
        { word: 'EMPLOYER',     az: 'işəgötürən', definition: 'a person or company that gives jobs to people' },
        { word: 'SALARY',       az: 'maaş', definition: 'money paid to someone regularly for their work' },
        { word: 'SUCCESS',      az: 'uğur', definition: 'the accomplishment of an aim or purpose' },
        { word: 'PROGRESS',     az: 'irəliləyiş', definition: 'forward or onward movement towards a destination or goal' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b11_g0': { id: 'b2_b11_g0', title: 'Game 20',  phases: [
    {
      words: [
        { word: 'ASHAMED',      az: 'utanmış', definition: 'feeling embarrassed or guilty about something you did' },
        { word: 'SAD',          az: 'kədərli', definition: 'feeling unhappy' },
        { word: 'SCARED',       az: 'qorxmuş', definition: 'feeling afraid or scared' },
        { word: 'CALM',         az: 'sakit', definition: 'peaceful and not excited or angry' },
      ]
    },
    {
      words: [
        { word: 'ANNOYED',      az: 'əsəbləşmiş', definition: 'slightly angry or irritated' },
        { word: 'LONELY',       az: 'tənha', definition: 'feeling sad because you are alone' },
        { word: 'PATIENT',      az: 'səbirli', definition: 'a person who is receiving medical treatment' },
        { word: 'POLITE',       az: 'nəzakətli', definition: 'showing good manners and respect' },
        { word: 'TALENTED',     az: 'istedadlı', definition: 'having a natural ability to do something well' },
      ]
    },
    {
      words: [
        { word: 'BRAVE',        az: 'cəsur', definition: 'not afraid to face danger' },
        { word: 'CALM',         az: 'sakit', definition: 'peaceful and not excited or angry' },
        { word: 'CREATIVE',     az: 'yaradıcı', definition: 'able to produce new and original ideas' },
        { word: 'DETERMINED',   az: 'qərarlı', definition: 'having a firm decision or being resolved to do something' },
        { word: 'RELIABLE',     az: 'etibarlı', definition: 'able to be trusted' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b12_g0': { id: 'b2_b12_g0', title: 'Game 21',  phases: [
    {
      words: [
        { word: 'CHANNEL',      az: 'kanal', definition: 'a television or radio station' },
        { word: 'CANCER',       az: 'xərçəng', definition: 'a serious disease in which cells grow uncontrollably' },
        { word: 'HEAL',         az: 'sağalmaq', definition: 'to become healthy again after being ill' },
        { word: 'HEALTH',       az: 'sağlamlıq', definition: 'the condition of your body and mind' },
      ]
    },
    {
      words: [
        { word: 'EDITOR',       az: 'redaktor', definition: 'a person who is in charge of and selects material for a publication' },
        { word: 'MEDIA',        az: 'media', definition: 'television, radio, newspapers and the internet' },
        { word: 'DISASTER',     az: 'fəlakət', definition: 'a sudden event that causes great damage' },
        { word: 'STORM',        az: 'fırtına', definition: 'bad weather with strong winds and rain' },
        { word: 'DISEASE',      az: 'xəstəlik', definition: 'an illness that affects the body or mind' },
      ]
    },
    {
      words: [
        { word: 'INTERNET',     az: 'internet', definition: 'the global computer network' },
        { word: 'NEWS',         az: 'xəbər', definition: 'information about recent events' },
        { word: 'NEWSPAPER',    az: 'qəzet', definition: 'a daily publication with news' },
        { word: 'WEBSITE',      az: 'vebsayt', definition: 'a set of pages on the internet' },
        { word: 'NATURE',       az: 'təbiət', definition: 'the natural world of plants, animals, and landscapes' },
        { word: 'WASTE',        az: 'tullantı', definition: 'unwanted materials that are thrown away' },
        { word: 'NURSE',        az: 'tibb bacısı', definition: 'a person who cares for sick people' },
        { word: 'PATIENT',      az: 'xəstə', definition: 'a person who is receiving medical treatment' },
      ]
    },
  ]
},
    'b12_g1': { id: 'b2_b12_g1', title: 'Game 22',  phases: [
    {
      words: [
        { word: 'BROADCAST',    az: 'yayımlamaq', definition: 'to transmit radio or television programmes to a wide audience' },
        { word: 'BLOG',         az: 'bloq', definition: 'a personal website with regular posts' },
        { word: 'FLOOD',        az: 'daşqın', definition: 'when a lot of water covers land that is normally dry' },
        { word: 'SOLAR',        az: 'günəş enerjisi', definition: 'using the power of the sun' },
        { word: 'DOCTOR',       az: 'həkim', definition: 'a person who treats sick people' },
      ]
    },
    {
      words: [
        { word: 'HEADLINE',     az: 'başlıq', definition: 'the heading at the top of a newspaper story' },
        { word: 'CLIMATE',      az: 'iqlim', definition: 'the long-term weather conditions in a particular region' },
        { word: 'FITNESS',      az: 'fiziki forma', definition: 'the state of being physically healthy and strong' },
        { word: 'ILLNESS',      az: 'xəstəlik', definition: 'a disease or period of being ill' },
        { word: 'MEDICINE',     az: 'dərman', definition: 'a substance used to treat illness' },
        { word: 'MENTAL HEALTH', az: 'zehni sağlamlıq', definition: 'the condition of your mind and emotions' },
      ]
    },
    {
      words: [
        { word: 'ARTICLE',      az: 'məqalə', definition: 'a piece of writing in a newspaper or magazine' },
        { word: 'SOCIAL MEDIA', az: 'sosial media', definition: 'websites where people share information and photos' },
        { word: 'RECYCLE',      az: 'təkrar emal etmək', definition: 'to process used materials so they can be used again' },
        { word: 'ATMOSPHERE',   az: 'atmosfer', definition: 'the layer of gases that surrounds the Earth' },
        { word: 'HOSPITAL',     az: 'xəstəxana', definition: 'a place where sick or injured people are treated' },
        { word: 'SYMPTOM',      az: 'simptom', definition: 'a sign of an illness or disease' },
        { word: 'THERAPY',      az: 'terapiya', definition: 'treatment intended to relieve or heal a disorder' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b13_g0': { id: 'b2_b13_g0', title: 'Game 23', phases: [
    {
      words: [
        { word: 'ROBOT',        az: 'robot', definition: 'a machine that can do tasks automatically' },
        { word: 'APP',          az: 'tətbiq', definition: 'a program designed for a mobile phone' },
        { word: 'AIRPORT',      az: 'hava limanı', definition: 'a place where planes take off and land' },
        { word: 'TRIP',         az: 'gəzinti', definition: 'a short journey' },
      ]
    },
    {
      words: [
        { word: 'LAPTOP',       az: 'noutbuk', definition: 'a small portable computer' },
        { word: 'HOTEL',        az: 'otel', definition: 'a building where people pay to stay' },
        { word: 'SALE',         az: 'satış', definition: 'the act of selling something' },
        { word: 'SHOP',         az: 'mağaza', definition: 'a building where you can buy things' },
        { word: 'TASTE',        az: 'dad', definition: 'the flavour of food or drink' },
      ]
    },
    {
      words: [
        { word: 'GADGET',       az: 'qadcet', definition: 'a small useful machine or tool' },
        { word: 'INTERNET',     az: 'internet', definition: 'the global computer network' },
        { word: 'INGREDIENT',   az: 'inqredient', definition: 'one of the foods or substances needed to make a dish' },
        { word: 'BARGAIN',      az: 'sövdələşmə', definition: 'a very good deal or agreement on price' },
        { word: 'BRAND',        az: 'marka', definition: 'a name that identifies a particular product' },
      ]
    },
  ]
},
    'b13_g1': { id: 'b2_b13_g1', title: 'Game 24', phases: [
    {
      words: [
        { word: 'DEVICE',       az: 'cihaz', definition: 'a tool or machine designed for a particular purpose' },
        { word: 'VISA',         az: 'viza', definition: 'an official permission to enter a foreign country' },
        { word: 'PRICE',        az: 'qiymət', definition: 'the amount of money you must pay for something' },
        { word: 'RECIPE',       az: 'resept', definition: 'instructions for cooking a particular dish' },
      ]
    },
    {
      words: [
        { word: 'UPDATE',       az: 'yeniləmək', definition: 'to make something more modern or recent' },
        { word: 'PASSPORT',     az: 'pasport', definition: 'an official document needed for international travel' },
        { word: 'RESORT',       az: 'kurort', definition: 'a place where people go for a holiday' },
        { word: 'TRANSPORT',    az: 'nəqliyyat', definition: 'the system of moving people or goods' },
        { word: 'RESTAURANT',   az: 'restoran', definition: 'a place where you can buy and eat a meal' },
      ]
    },
    {
      words: [
        { word: 'ELECTRONIC',   az: 'elektron', definition: 'using electricity and microchips' },
        { word: 'ONLINE',       az: 'onlayn', definition: 'connected to the internet' },
        { word: 'TOURISM',      az: 'turizm', definition: 'the business of organizing holidays for people' },
        { word: 'TOURIST',      az: 'turist', definition: 'a person who travels for pleasure' },
        { word: 'CUSTOMER',     az: 'müştəri', definition: 'a person who buys goods or services' },
        { word: 'MENU',         az: 'menyu', definition: 'a list of food available in a restaurant' },
      ]
    },
  ]
},
      
      // ──────────────────────────────────────────────
    'b14_g0': { id: 'b2_b14_g0', title: 'Game 25', phases: [
    {
      words: [
        { word: 'GARAGE',       az: 'qaraj', definition: 'a building for keeping a car' },
        { word: 'GARDEN',       az: 'bağ', definition: 'a piece of land where flowers and vegetables are grown' },
        { word: 'RENT',         az: 'icarə', definition: 'money paid regularly to use a house or flat' },
        { word: 'AGENDA',       az: 'gündəlik', definition: 'a list of things to be discussed' },
      ]
    },
    {
      words: [
        { word: 'ROOF',         az: 'dam', definition: 'the top covering of a building' },
        { word: 'WALL',         az: 'divar', definition: 'a vertical structure that forms the side of a building' },
        { word: 'WINDOW',       az: 'pəncərə', definition: 'an opening in a wall with glass' },
        { word: 'ABANDON',      az: 'tərk etmək', definition: 'to leave someone or something completely' },
        { word: 'AFFAIR',       az: 'məsələ / iş', definition: 'an event or situation' },
      ]
    },
    {
      words: [
        { word: 'APPLIANCE',    az: 'məişət texnikası', definition: 'a machine used in the home, such as a fridge or washing machine' },
        { word: 'CEILING',      az: 'tavan', definition: 'the upper surface of a room' },
        { word: 'HEATING',      az: 'isitmə', definition: 'the system that makes a house warm' },
        { word: 'HOME',         az: 'ev', definition: 'the place where you live' },
        { word: 'COTTAGE',      az: 'kiçik ev', definition: 'a small house, usually in the countryside' },
        { word: 'ACCENT',       az: 'vurğu / ləhcə', definition: 'the way someone pronounces words' },
        { word: 'ACCOMMODATE',  az: 'yerləşdirmək', definition: 'to provide a place for someone to stay' },
        { word: 'ADOPT',        az: 'qəbul etmək', definition: 'to take something and use it as your own' },
      ]
    },
  ]
},
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

        // ──────────────────────────────────────────────

  'c1': {
    'b0_g0':  { id: 'c1_b0_g0',  title: 'Game 1',  phases: [
    {
      words: [
        { word: 'BALLOT',       az: 'səsvermə bülleteni', definition: 'the piece of paper used to cast a vote in an election' },
        { word: 'CABINET',      az: 'kabinet', definition: 'the group of senior ministers who advise the head of government' },
        { word: 'COALITION',    az: 'koalisiya', definition: 'a temporary alliance between different political parties' },
        { word: 'ELECTION',     az: 'seçki', definition: 'the process of choosing a government or representatives by voting' },
      ]
    },
    {
      words: [
        { word: 'AMENDMENT',    az: 'düzəliş', definition: 'a minor change or addition designed to improve or correct a law, document or constitution' },
        { word: 'DEMOCRACY',    az: 'demokratiya', definition: 'a system of government in which power is held by the people through voting' },
        { word: 'MANDATE',      az: 'mandat', definition: 'the authority to carry out a policy or course of action given by an electorate' },
        { word: 'TREATY',       az: 'müqavilə', definition: 'a formally concluded and ratified agreement between states' },
      ]
    },
    {
      words: [
        { word: 'CONGRESS',     az: 'kongres', definition: 'a formal meeting or the legislative body in some countries' },
        { word: 'COUNCILLOR',   az: 'şura üzvü', definition: 'a member of a local council or advisory body' },
        { word: 'ELECTORAL',    az: 'seçki (sifət)', definition: 'relating to elections and the process of voting' },
        { word: 'LEGISLATION',  az: 'qanunvericilik', definition: 'laws collectively or the process of making or enacting laws' },
        { word: 'LEGISLATURE',  az: 'qanunverici orqan', definition: 'the body of people with the power to make laws' },
        { word: 'REGULATION',   az: 'tənzimləmə', definition: 'an official rule or law controlling how something is done' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b1_g0':  { id: 'c1_b1_g0',  title: 'Game 2',  phases: [
    {
      words: [
        { word: 'DETENTION',    az: 'saxlanılma', definition: 'the action of keeping someone in official custody' },
        { word: 'DETAIN',       az: 'saxlamaq', definition: 'to keep someone in official custody' },
        { word: 'RAID',         az: 'basqın', definition: 'a sudden attack on an enemy by troops, aircraft or other armed forces' },
        { word: 'RIOT',         az: 'iğtişaş', definition: 'a violent disturbance by a crowd of people' },
      ]
    },
    {
      words: [
        { word: 'BREACH',       az: 'pozuntu', definition: 'an act of breaking or failing to observe a law, agreement or code of conduct' },
        { word: 'COUP',         az: 'çevriliş', definition: 'a sudden, violent and illegal seizure of power from a government' },
        { word: 'RAPE',         az: 'zorlanma', definition: 'the crime of forcing someone to have sexual intercourse' },
        { word: 'TORTURE',      az: 'işgəncə', definition: 'the infliction of severe pain to punish or extract information' },
      ]
    },
    {
      words: [
        { word: 'ALLEGATION',   az: 'iddia', definition: 'a claim or assertion that someone has done something illegal or wrong, typically without proof' },
        { word: 'ALLEGE',       az: 'iddia etmək', definition: 'to claim or assert that something is the case' },
        { word: 'CONVICTION',   az: 'məhkumetmə', definition: 'a formal declaration that someone is guilty of a crime' },
        { word: 'DEFENDANT',    az: 'müttəhim', definition: 'an individual, company or institution sued or accused in a court of law' },
        { word: 'GENOCIDE',     az: 'soyqırım', definition: 'the deliberate killing of a large number of people from a particular nation or group' },
        { word: 'VIOLATION',    az: 'pozuntu', definition: 'the action of breaking a law, rule or agreement' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b2_g0':  { id: 'c1_b2_g0',  title: 'Game 3',  phases: [
    {
      words: [
        { word: 'CONTRACTOR',   az: 'podratçı', definition: 'a person or company that undertakes a contract to provide materials or labor' },
        { word: 'ALLOCATION',   az: 'bölüşdürmə', definition: 'the action of distributing resources according to a plan' },
        { word: 'ABORTION',     az: 'abort', definition: 'the deliberate termination of a pregnancy' },
        { word: 'TOLERANCE',    az: 'tolerantlıq', definition: 'the ability to accept opinions or behaviour different from one’s own' },
      ]
    },
    {
      words: [
        { word: 'BUDGET',       az: 'büdcə', definition: 'a financial plan estimating income and expenditure over a period' },
        { word: 'ASSET',        az: 'aktiv', definition: 'a useful or valuable thing or person owned by a company' },
        { word: 'AUDIT',        az: 'audit', definition: 'an official inspection of financial accounts' },
        { word: 'SUBSIDY',      az: 'subsidiya', definition: 'a sum of money granted by the government to support an industry' },
      ]
    },
    {
      words: [
        { word: 'MERGER',       az: 'birləşmə', definition: 'the combining of two or more companies into one' },
        { word: 'TRANSACTION',  az: 'əməliyyat', definition: 'an instance of buying or selling something' },
        { word: 'INTEGRATION',  az: 'inteqrasiya', definition: 'the process of combining different groups into a unified society' },
        { word: 'MIGRATION',    az: 'miqrasiya', definition: 'the movement of people from one country or area to another' },
        { word: 'RACISM',       az: 'irqçilik', definition: 'prejudice, discrimination or antagonism directed against a person based on race' },
      ]
    },
  ]
},
    'b2_g1':  { id: 'c1_b2_g1',  title: 'Game 4',  phases: [
    {
      words: [
        { word: 'DEFICIT',      az: 'kəsir', definition: 'the amount by which expenditure exceeds income' },
        { word: 'BENEFICIARY',  az: 'faydalanan', definition: 'a person or thing that receives help or an advantage' },
        { word: 'YIELD',        az: 'gəlir (investisiya)', definition: 'the profit or income from an investment' },
        { word: 'LIBERTY',      az: 'azadlıq', definition: 'the state of being free from oppressive restrictions' },
      ]
    },
    {
      words: [
        { word: 'CAPITALISM',   az: 'kapitalizm', definition: 'an economic system based on private ownership and free markets' },
        { word: 'COMMODITY',    az: 'əmtəə', definition: 'a raw material or primary agricultural product that can be bought and sold' },
        { word: 'FISCAL',       az: 'fiskal', definition: 'relating to government revenue, especially through taxation' },
        { word: 'PROFIT',       az: 'mənfəət', definition: 'the financial gain after all expenses have been deducted' },
        { word: 'SOLIDARITY',   az: 'həmrəylik', definition: 'unity or agreement of feeling or action among individuals' },
      ]
    },
    {
      words: [
        { word: 'ACCUMULATION', az: 'toplanma', definition: 'the process of gradually collecting or increasing in quantity' },
        { word: 'ACCOUNTABILITY', az: 'hesabatlılıq', definition: 'the obligation to explain and justify one’s actions and decisions' },
        { word: 'EQUALITY',     az: 'bərabərlik', definition: 'the state of being equal in rights, status and opportunities' },
        { word: 'INEQUALITY',   az: 'bərabərsizlik', definition: 'the unfair situation in which some people have more rights than others' },
        { word: 'MINORITY',     az: 'azlıq', definition: 'a smaller group of people differing from the rest of a community' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b3_g0':  { id: 'c1_b3_g0',  title: 'Game 5',  phases: [
    {
      words: [
        { word: 'PERCEPTION',   az: 'qavrayış', definition: 'the way in which something is regarded, understood or interpreted' },
        { word: 'CONCEPT',      az: 'konsept', definition: 'an abstract idea or general notion' },
        { word: 'CRITERION',    az: 'meyar', definition: 'a principle or standard by which something is judged' },
        { word: 'NOTION',       az: 'anlayış', definition: 'a conception of or belief about something' },
      ]
    },
    {
      words: [
        { word: 'EGO',          az: 'ego', definition: 'a person’s sense of self-esteem or self-importance' },
        { word: 'ANALOGY',      az: 'anoloji', definition: 'a comparison between two things to explain or clarify an idea' },
        { word: 'IDEOLOGY',     az: 'ideologiya', definition: 'a system of ideas and ideals, especially one which forms the basis of economic or political theory and policy' },
        { word: 'LOGIC',        az: 'məntiq', definition: 'reasoning conducted according to strict principles of validity' },
      ]
    },
    {
      words: [
        { word: 'DEPRESSION',   az: 'depressiya', definition: 'a mental state of persistent sadness and loss of interest' },
        { word: 'IRONY',        az: 'ironi', definition: 'a situation or statement that is the opposite of what is expected' },
        { word: 'OPTIMISM',     az: 'optimizm', definition: 'hopefulness and confidence about the future' },
        { word: 'SENTIMENT',    az: 'hiss', definition: 'a view, opinion or feeling towards a situation or event' },
        { word: 'DIMENSION',    az: 'ölçü', definition: 'a measurable extent of a particular kind' },
        { word: 'HYPOTHESIS',   az: 'hipotez', definition: 'a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation' },
        { word: 'THESIS',       az: 'tezis', definition: 'a statement or theory put forward to be maintained or proved' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b4_g0':  { id: 'c1_b4_g0',  title: 'Game 6',  phases: [
    {
      words: [
        { word: 'CONFER',       az: 'müzakirə etmək', definition: 'to have discussions or exchange opinions' },
        { word: 'ENFORCE',      az: 'tətbiq etmək', definition: 'to compel observance of or obedience to a law, rule or command' },
        { word: 'REFORM',       az: 'islahat', definition: 'to make changes in something in order to improve it' },
      ]
    },
    {
      words: [
        { word: 'ALLOCATE',     az: 'bölüşdürmək', definition: 'to distribute resources according to a plan' },
        { word: 'COLLABORATE',  az: 'əməkdaşlıq etmək', definition: 'to work jointly with others on an activity or project' },
        { word: 'CORRELATE',    az: 'əlaqəsi olmaq', definition: 'to have a mutual relationship or connection' },
        { word: 'EVOLVE',       az: 'inkişaf etmək', definition: 'to develop gradually from a simple to a more complex form' },
      ]
    },
    {
      words: [
        { word: 'ADMINISTER',   az: 'idarə etmək', definition: 'to manage and be responsible for the running of an organization' },
        { word: 'DEMONSTRATE',  az: 'nümayiş etdirmək', definition: 'to show or prove something clearly' },
        { word: 'MONITOR',      az: 'izləmək', definition: 'to observe and check the progress or quality of something over time' },
        { word: 'DETERIORATION', az: 'pisləşmə', definition: 'the process of becoming progressively worse' },
        { word: 'TRANSITION',   az: 'keçid', definition: 'the process or period of changing from one state to another' },
      ]
    },
  ]
},
    'b4_g1':  { id: 'c1_b4_g1',  title: 'Game 7',  phases: [
    {
      words: [
        { word: 'CONCEIVE',     az: 'düşünmək', definition: 'to form or devise a plan or idea in the mind' },
        { word: 'DERIVE',       az: 'hasil etmək', definition: 'to obtain something from a specified source' },
        { word: 'ENSURE',       az: 'təmin etmək', definition: 'to make certain that something will occur or be the case' },
        { word: 'CONVERSION',   az: 'çevrilmə', definition: 'the process of changing or causing something to change into a different form' },
      ]
    },
    {
      words: [
        { word: 'EVALUATE',     az: 'qiymətləndirmək', definition: 'to form an idea of the amount, number or value of something' },
        { word: 'INTEGRATE',    az: 'inteqrasiya etmək', definition: 'to combine or bring together different elements into a whole' },
        { word: 'NEGOTIATE',    az: 'danışıqlar aparmaq', definition: 'to discuss something in order to reach an agreement' },
        { word: 'EVOLUTION',    az: 'təkamül', definition: 'the gradual development of something from a simple to a more complex form' },
        { word: 'REVOLUTION',   az: 'inqilab', definition: 'a dramatic and wide-reaching change in conditions or way of life' },
      ]
    },
    {
      words: [
        { word: 'COMPENSATE',   az: 'kompensasiya vermək', definition: 'to give someone something to reduce or balance the effect of loss or suffering' },
        { word: 'COMPRISE',     az: 'əhatə etmək', definition: 'to consist of or be made up of particular elements' },
        { word: 'EXERT',        az: 'səy göstərmək', definition: 'to apply or bring to bear a force, influence or quality' },
        { word: 'IMPOSE',       az: 'tətbiq etmək (məcburi)', definition: 'to force a law, rule or tax to be obeyed or paid' },
        { word: 'MAXIMISE',     az: 'maksimallaşdırmaq', definition: 'to make something as large or great as possible' },
        { word: 'EXPANSION',    az: 'genişlənmə', definition: 'the action of becoming larger or more extensive' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b5_g0':  { id: 'c1_b5_g0',  title: 'Game 8',  phases: [
    {
      words: [
        { word: 'RATIO',        az: 'nisbət', definition: 'the quantitative relation between two amounts' },
        { word: 'TRAUMA',       az: 'travma', definition: 'a deeply distressing or disturbing experience' },
        { word: 'TUMOUR',       az: 'şiş', definition: 'a mass of cells growing abnormally in the body' },
      ]
    },
    {
      words: [
        { word: 'COVERAGE',     az: 'işıqlandırma', definition: 'the extent to which something is reported or dealt with by the media' },
        { word: 'CONVEY',       az: 'çatdırmaq', definition: 'to communicate or make known an idea or feeling' },
        { word: 'IRONY',        az: 'ironi', definition: 'a situation or statement that is the opposite of what is expected' },
        { word: 'VACCINE',      az: 'vaksin', definition: 'a substance used to stimulate the production of antibodies and provide immunity' },
      ]
    },
    {
      words: [
        { word: 'RHETORIC',     az: 'ritorika', definition: 'the art of effective or persuasive speaking or writing' },
        { word: 'THEORETICAL',  az: 'nəzəri', definition: 'concerned with or involving the theory of a subject or area of study rather than its practical application' },
        { word: 'CORRELATION',  az: 'korrelyasiya', definition: 'a mutual relationship or connection between two or more things' },
        { word: 'CHRONIC',      az: 'xroniki', definition: 'persisting for a long time or constantly recurring' },
        { word: 'CLINICAL',     az: 'klinik', definition: 'relating to the observation and treatment of actual patients' },
      ]
    },
  ]
},
    'b5_g1':  { id: 'c1_b5_g1',  title: 'Game 9',  phases: [
    {
      words: [
          { word: 'TRANSCRIPT',   az: 'transkript', definition: 'a written or printed version of material originally presented in another medium' },
        { word: 'THESIS',       az: 'tezis', definition: 'a statement or theory put forward to be maintained or proved' },
        { word: 'PSYCHIATRIC',  az: 'psixiatrik', definition: 'relating to the study and treatment of mental illness' },
        { word: 'THERAPY',      az: 'terapiya', definition: 'treatment intended to relieve or heal a disorder' },
        { word: 'PHYSICIAN',    az: 'terapevt', definition: 'a medical practitioner who treats general medical conditions' },     
      ]
    },
    {
      words: [
        { word: 'EDITOR',       az: 'redaktor', definition: 'a person who is in charge of and selects material for a publication' },
        { word: 'ARTICULATE',   az: 'aydın ifadə etmək', definition: 'to express an idea or feeling fluently and coherently' },
        { word: 'EMPIRICAL',    az: 'empirik', definition: 'based on observation or experience rather than theory' },
        { word: 'PARAMETER',    az: 'parametr', definition: 'a numerical or other measurable factor that defines a system' },
        { word: 'MOLECULAR',    az: 'molekulyar', definition: 'relating to or consisting of molecules' },
        { word: 'EPIDEMIC',     az: 'epidemiya', definition: 'the rapid spread of a disease to many people in a community' },
      ]
    },
    {
      words: [
        { word: 'DISCOURSE',    az: 'diskurs', definition: 'written or spoken communication or debate' },
        { word: 'SCRUTINY',     az: 'diqqətli nəzarət', definition: 'critical observation or examination' },
        { word: 'DIAGNOSIS',    az: 'diaqnoz', definition: 'the identification of the nature of an illness or problem' },
        { word: 'GENETIC',      az: 'genetik', definition: 'relating to genes or heredity' },
        { word: 'SURGEON',      az: 'cərrah', definition: 'a medical practitioner qualified to practise surgery' },
        { word: 'SURGERY',      az: 'cərrahiyyə', definition: 'medical treatment in which a doctor cuts open the body' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b6_g0':  { id: 'c1_b6_g0',  title: 'Game 10', phases: [
    {
      words: [
        { word: 'ARTISTIC',     az: 'bədii', definition: 'having or revealing creative skill and imagination' },
        { word: 'CLASSICAL',    az: 'klassik', definition: 'relating to ancient Greek or Roman culture' },
        { word: 'RADICAL',      az: 'radikal', definition: 'relating to or affecting the fundamental nature of something' },
      ]
    },
    {
      words: [
        { word: 'EMISSION',     az: 'emissiya', definition: 'the production and discharge of something, especially gas or radiation' },
        { word: 'MARINE',       az: 'dəniz (sifət)', definition: 'relating to the sea' },
        { word: 'EROSION',      az: 'eroziya', definition: 'the process of eroding or being eroded by wind, water or other natural agents' },
        { word: 'GENRE',        az: 'janr', definition: 'a category of artistic composition' },
      ]
    },
    {
      words: [
        { word: 'HABITAT',      az: 'yaşayış mühiti', definition: 'the natural home or environment of an animal or plant' },
        { word: 'ARCHITECTURAL', az: 'memarlıq (sifət)', definition: 'relating to the design and construction of buildings' },
        { word: 'LITERATURE',   az: 'ədəbiyyat', definition: 'written works, especially those considered of superior artistic merit' },
        { word: 'THEATRICAL',   az: 'teatr (sifət)', definition: 'relating to acting, actors or the theatre' },
      ]
    },
  ]
},
    'b6_g1':  { id: 'c1_b6_g1',  title: 'Game 11', phases: [
    {
      words: [
        { word: 'ECOLOGICAL',   az: 'ekoloji', definition: 'relating to the relationships between living organisms and their environment' },
        { word: 'EXTINCTION',   az: 'nəslin kəsilməsi', definition: 'the state of a species no longer existing' },
        { word: 'TOXIC',        az: 'zəhərli', definition: 'containing or being poisonous' },
        { word: 'ARROGANT',     az: 'təkəbbürlü', definition: 'having an exaggerated sense of one’s own importance' },
        { word: 'TOLERANT',     az: 'tolerant', definition: 'showing willingness to allow the existence of opinions or behaviour different from one’s own' },
      ]
    },
    {
      words: [
        { word: 'CONSERVATION', az: 'mühafizə', definition: 'the protection and preservation of the natural environment' },
        { word: 'AESTHETIC',    az: 'estetik', definition: 'concerned with beauty or the appreciation of beauty' },
        { word: 'CANVAS',       az: 'kətan', definition: 'a strong cloth used as a surface for painting' },
        { word: 'ORCHESTRA',    az: 'orkestr', definition: 'a large group of musicians who play various instruments together' },
        { word: 'NAIVE',        az: 'sadəlövh', definition: 'lacking experience, wisdom or judgement' },
      ]
    },
    {
      words: [
        { word: 'CLIMATE',      az: 'iqlim', definition: 'the long-term weather conditions in a particular region' },
        { word: 'ECOSYSTEM',    az: 'ekosistem', definition: 'a biological community of interacting organisms and their physical environment' },
        { word: 'MELODY',       az: 'melodiya', definition: 'a sequence of single notes that is musically satisfying' },
        { word: 'CYNICAL',      az: 'kinik', definition: 'believing that people are motivated purely by self-interest' },
        { word: 'COMPASSIONATE', az: 'şəfqətli', definition: 'feeling or showing sympathy and concern for others' },
        { word: 'DIPLOMATIC',   az: 'diplomatik', definition: 'having or showing skill in dealing with people' },
        { word: 'SCEPTICAL',    az: 'şübhəci', definition: 'not easily convinced or having doubts' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b7_g0':  { id: 'c1_b7_g0',  title: 'Game 12', phases: [
    {
      words: [
        { word: 'MILITANT',     az: 'silahlı', definition: 'a person who is engaged in aggressive or violent action' },
        { word: 'TACTICAL',     az: 'taktik', definition: 'relating to short-term military planning' },
        { word: 'DYNAMIC',      az: 'dinamik', definition: 'characterized by constant change, activity or progress' },
        { word: 'CYNICAL',      az: 'kinik', definition: 'believing that people are motivated purely by self-interest' },
      ]
    },
    {
      words: [
        { word: 'ABSURD',       az: 'absurd', definition: 'wildly unreasonable, illogical or inappropriate' },
        { word: 'ACCESSIBLE',   az: 'əlçatan', definition: 'easy to approach, reach or understand' },
        { word: 'BIASED',       az: 'qərəzli', definition: '— tapılmadı —' },
        { word: 'CREDIBLE',     az: 'etibarlı', definition: 'able to be believed or trusted' },
        { word: 'RADICAL',      az: 'radikal', definition: 'relating to or affecting the fundamental nature of something' },
      ]
    },
    {
      words: [
        { word: 'INVASION',     az: 'işğal', definition: 'an act of invading a country or region with an armed force' },
        { word: 'VETERAN',      az: 'veteran', definition: 'a person who has had long experience in a particular field' },
        { word: 'NAIVE',        az: 'sadəlövh', definition: 'lacking experience, wisdom or judgement' },
        { word: 'RESILIENT',    az: 'davamlı', definition: 'able to withstand or recover quickly from difficult conditions' },
        { word: 'TOLERANT',     az: 'tolerant', definition: 'showing willingness to allow the existence of opinions or behaviour different from one’s own' },
      ]
    },
  ]
},
    'b7_g1':  { id: 'c1_b7_g1',  title: 'Game 13', phases: [
    {
      words: [
        { word: 'MISSILE',      az: 'raket', definition: 'a weapon that is self-propelled or directed' },
        { word: 'ARMED',        az: 'silahlı', definition: 'carrying or equipped with weapons' },
        { word: 'ADVERSE',      az: 'mənfi', definition: 'preventing success or development' },
        { word: 'DECISIVE',     az: 'qəti', definition: 'settling an issue or showing a clear result' },
      ]
    },
    {
      words: [
        { word: 'DEPLOYMENT',   az: 'yerləşdirmə', definition: 'the movement of troops or equipment to a place where they are needed' },
        { word: 'MILITARY',     az: 'hərbi', definition: 'relating to or characteristic of soldiers or armed forces' },
        { word: 'TROOP',        az: 'qoşun', definition: 'soldiers or armed forces' },
        { word: 'ARTILLERY',    az: 'artilleriya', definition: 'large-calibre guns used in warfare on land' },
        { word: 'DOMINANT',     az: 'dominant', definition: 'having power and influence over others' },
      ]
    },
    {
      words: [
        { word: 'COMBAT',       az: 'döyüş', definition: 'fighting between armed forces' },
        { word: 'AUTHENTIC',    az: 'həqiqi', definition: 'of undisputed origin and not a copy' },
        { word: 'COHERENT',     az: 'ardıcıl', definition: 'logical and consistent' },
        { word: 'AMBITIOUS',    az: 'ambisiyalı', definition: 'having a strong desire for success' },
        { word: 'CHARISMATIC',  az: 'xarizmatik', definition: 'exercising a compelling charm that inspires devotion' },
        { word: 'STUBBORN',     az: 'inadkar', definition: 'determined not to change one’s attitude or position' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b8_g0':  { id: 'c1_b8_g0',  title: 'Game 14', phases: [
    {
      words: [
        { word: 'ALLOCATE',     az: 'bölüşdürmək', definition: 'to distribute resources according to a plan' },
        { word: 'ASSERT',       az: 'iddia etmək', definition: 'to state a fact or belief confidently and forcefully' },
        { word: 'ESCALATE',     az: 'güclənmək', definition: 'to become or make something more intense' },
      ]
    },
    {
      words: [
        { word: 'DOCTRINE',     az: 'doktrina', definition: 'a belief or set of beliefs held and taught by a group' },
        { word: 'NOTION',       az: 'anlayış', definition: 'a conception of or belief about something' },
        { word: 'CONCEDE',      az: 'etiraf etmək', definition: 'to admit or agree that something is true' },
        { word: 'CONCEIVE',     az: 'düşünmək', definition: 'to form or devise a plan or idea in the mind' },
        { word: 'REVIVE',       az: 'canlandırmaq', definition: 'to restore to life or consciousness' },
      ]
    },
    {
      words: [
        { word: 'PRINCIPLE',    az: 'prinsip', definition: 'a fundamental truth or proposition that serves as the foundation for a system' },
        { word: 'COMPEL',       az: 'məcbur etmək', definition: 'to force or oblige someone to do something' },
        { word: 'COMPILE',      az: 'tərtib etmək', definition: 'to produce a list, book or report by assembling information' },
        { word: 'CONFER',       az: 'müzakirə etmək', definition: 'to have discussions or exchange opinions' },
        { word: 'REFORM',       az: 'islahat etmək', definition: 'to make changes in something in order to improve it' },
      ]
    },
  ]
},
    'b8_g1':  { id: 'c1_b8_g1',  title: 'Game 15', phases: [
    {
      words: [
        { word: 'DILEMMA',      az: 'dilemma', definition: 'a situation in which a difficult choice has to be made' },
        { word: 'ACCUMULATE',   az: 'toplamaq', definition: 'to gather together or acquire an increasing number or quantity of something' },
        { word: 'ARTICULATE',   az: 'aydın ifadə etmək', definition: 'to express an idea or feeling fluently and coherently' },
        { word: 'CIRCULATE',    az: 'dövriyyəyə buraxmaq', definition: 'to pass or cause to pass from place to place or person to person' },
      ]
    },
    {
      words: [
        { word: 'DIGNITY',      az: 'ləyaqət', definition: 'the quality of being worthy of respect or honour' },
        { word: 'INTEGRITY',    az: 'dürüstlük', definition: 'the quality of being honest and having strong moral principles' },
        { word: 'IRONY',        az: 'ironi', definition: 'a situation or statement that is the opposite of what is expected' },
        { word: 'REASONING',    az: 'mühakimə', definition: 'the process of thinking about something in a logical way' },
        { word: 'TRANSITION',   az: 'keçid etmək', definition: 'the process or period of changing from one state to another' },
      ]
    },
    {
      words: [
        { word: 'ADHERE',       az: 'riayət etmək', definition: 'to stick fast to a surface or to a rule or agreement' },
        { word: 'CONSOLIDATE',  az: 'möhkəmləndirmək', definition: 'to make something physically stronger or more solid' },
        { word: 'COORDINATE',   az: 'əlaqələndirmək', definition: 'to organize different elements so they work together effectively' },
        { word: 'CONVERSION',   az: 'çevrilmə', definition: 'the process of changing or causing something to change into a different form' },
        { word: 'EVOLVE',       az: 'inkişaf etmək', definition: 'to develop gradually from a simple to a more complex form' },
        { word: 'THRIVE',       az: 'uğurla inkişaf etmək', definition: 'to grow or develop vigorously and successfully' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b9_g0':  { id: 'c1_b9_g0',  title: 'Game 16', phases: [
    {
      words: [
        { word: 'CHAOS',        az: 'xaos', definition: 'complete disorder and confusion' },
        { word: 'CRISIS',       az: 'böhran', definition: 'a time of intense difficulty or danger' },
        { word: 'THREAT',       az: 'təhdid', definition: 'a statement of an intention to inflict harm' },
        { word: 'RHETORIC',     az: 'ritorika', definition: 'the art of effective or persuasive speaking or writing' },
      ]
    },
    {
      words: [
        { word: 'CONSTRAINT',   az: 'məhdudiyyət', definition: 'a limitation or restriction' },
        { word: 'RESTRAINT',    az: 'məhdudiyyət', definition: 'a measure or condition that keeps someone or something under control' },
        { word: 'FEAT',         az: 'qəhrəmanlıq', definition: 'an achievement that requires great courage, skill or strength' },
        { word: 'SENSATION',    az: 'sensasiya', definition: 'a widespread reaction of interest and excitement' },
        { word: 'IRONIC',       az: 'ironik', definition: 'using or characterized by irony' },
      ]
    },
    {
      words: [
        { word: 'MERIT',        az: 'ləyaqət', definition: 'the quality of being particularly good or worthy' },
        { word: 'RECOGNITION',  az: 'tanınma', definition: 'identification of the existence, validity or legality of something' },
        { word: 'VICTORY',      az: 'zəfər', definition: 'an act of defeating an opponent in a battle or contest' },
        { word: 'COMMENTARY',   az: 'şərh', definition: 'a set of explanatory notes or opinions on an event or text' },
        { word: 'COVERAGE',     az: 'işıqlandırma', definition: 'the extent to which something is reported or dealt with by the media' },
        { word: 'CONVEY',       az: 'çatdırmaq', definition: 'to communicate or make known an idea or feeling' },
      ]
    },
  ]
},
    'b9_g1':  { id: 'c1_b9_g1',  title: 'Game 17', phases: [
    {
      words: [
        { word: 'FLAW',         az: 'qüsur', definition: 'a defect or weakness in something' },
        { word: 'RENOWNED',     az: 'məşhur', definition: 'known and respected by many people' },
        { word: 'WORTHWHILE',   az: 'dəyərli', definition: 'worth the time, money or effort spent' },
        { word: 'EDITORIAL',    az: 'redaksiya məqaləsi', definition: 'a newspaper or magazine article that gives the opinion of the editor' },
        { word: 'HEADLINE',     az: 'başlıq', definition: 'the heading at the top of a newspaper story' },
      ]
    },
    {
      words: [
        { word: 'PROMINENT',    az: 'görkəmli', definition: 'important or famous' },
        { word: 'CORRESPONDENT', az: 'müxbir', definition: 'a journalist who reports from a particular place or on a specific subject' },
        { word: 'DISCOURSE',    az: 'diskurs', definition: 'written or spoken communication or debate' },
        { word: 'RUMOUR',       az: 'şayiə', definition: 'a currently circulating story or report of uncertain truth' },
        { word: 'SPECTRUM',     az: 'spektr', definition: 'a wide range of different but related ideas or opinions' },
      ]
    },
    {
      words: [
        { word: 'OBSTACLE',     az: 'maneə', definition: 'a thing that blocks one’s way or prevents progress' },
        { word: 'EXCEPTIONAL',  az: 'müstəsna', definition: 'unusually good or remarkable' },
        { word: 'PUBLICATION',  az: 'nəşr', definition: 'a book, journal or other printed material that is issued for sale' },
        { word: 'TRANSCRIPT',   az: 'transkript', definition: 'a written or printed version of material originally presented in another medium' },
        { word: 'ARTICULATE',   az: 'aydın ifadə etmək', definition: 'to express an idea or feeling fluently and coherently' },
        { word: 'EXPLICIT',     az: 'açıq', definition: 'stated clearly and in detail, leaving no room for confusion' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b10_g0': { id: 'c1_b10_g0', title: 'Game 18', phases: [
    {
      words: [
        { word: 'RATIO',        az: 'nisbət', definition: 'the quantitative relation between two amounts' },
        { word: 'TRAUMA',       az: 'travma', definition: 'a deeply distressing or disturbing experience' },
        { word: 'TUMOUR',       az: 'şiş', definition: 'a mass of cells growing abnormally in the body' },
        { word: 'HABITAT',      az: 'yaşayış mühiti', definition: 'the natural home or environment of an animal or plant' },
      ]
    },
    {
      words: [
        { word: 'EMISSION',     az: 'emissiya', definition: 'the production and discharge of something, especially gas or radiation' },
        { word: 'EROSION',      az: 'eroziya', definition: 'the process of eroding or being eroded by wind, water or other natural agents' },
        { word: 'MARINE',       az: 'donanma', definition: 'relating to the sea' },
        { word: 'OZONE',        az: 'ozon', definition: 'a colourless unstable gas that forms a protective layer in the atmosphere' },
      ]
    },
    {
      words: [
        { word: 'GENETIC',      az: 'genetik', definition: 'relating to genes or heredity' },
        { word: 'CLINICAL',     az: 'klinik', definition: 'relating to the observation and treatment of actual patients' },
        { word: 'ECOLOGICAL',   az: 'ekoloji', definition: 'relating to the relationships between living organisms and their environment' },
        { word: 'EXTINCTION',   az: 'nəslin kəsilməsi', definition: 'the state of a species no longer existing' },
        { word: 'TOXIC',        az: 'zəhərli', definition: 'containing or being poisonous' },
      ]
    },
  ]
},
    'b10_g1': { id: 'c1_b10_g1', title: 'Game 19', phases: [
    {
      words: [
        { word: 'EMPIRICAL',    az: 'empirik', definition: 'based on observation or experience rather than theory' },
        { word: 'PARAMETER',    az: 'parametr', definition: 'a numerical or other measurable factor that defines a system' },
        { word: 'EPIDEMIC',     az: 'epidemiya', definition: 'the rapid spread of a disease to many people in a community' },
        { word: 'CLIMATE',      az: 'iqlim', definition: 'the long-term weather conditions in a particular region' },
      ]
    },
    {
      words: [
        { word: 'HYPOTHESIS',   az: 'hipotez', definition: 'a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation' },
        { word: 'PROTOTYPE',    az: 'prototip', definition: 'a first or preliminary model of something' },
        { word: 'OBESITY',      az: 'piylənmə', definition: 'the condition of being grossly fat or overweight' },
        { word: 'THERAPY',      az: 'terapiya', definition: 'treatment intended to relieve or heal a disorder' },
      ]
    },
    {
      words: [
        { word: 'THEORETICAL',  az: 'nəzəri', definition: 'concerned with or involving the theory of a subject or area of study rather than its practical application' },
        { word: 'VARIABLE',     az: 'dəyişən', definition: 'a factor that can change in a scientific experiment' },
        { word: 'CORRELATION',  az: 'korrelyasiya', definition: 'a mutual relationship or connection between two or more things' },
        { word: 'CHRONIC',      az: 'xroniki', definition: 'persisting for a long time or constantly recurring' },
        { word: 'INFECTION',    az: 'infeksiya', definition: 'the invasion of an organism’s body tissues by disease-causing agents' },
        { word: 'VACCINE',      az: 'vaksin', definition: 'a substance used to stimulate the production of antibodies and provide immunity' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b11_g0': { id: 'c1_b11_g0', title: 'Game 20', phases: [
    {
      words: [
        { word: 'ARTISTIC',     az: 'bədii', definition: 'having or revealing creative skill and imagination' },
        { word: 'CLASSICAL',    az: 'klassik', definition: 'relating to ancient Greek or Roman culture' },
        { word: 'RITUAL',       az: 'ritual', definition: 'a religious or solemn ceremony consisting of a series of actions' },
        { word: 'ASSAULT',      az: 'hücum', definition: 'a violent physical attack on someone' },
        { word: 'TACTICAL',     az: 'taktik', definition: 'relating to short-term military planning' },
      ]
    },
    {
      words: [
        { word: 'CANVAS',       az: 'kətan', definition: 'a strong cloth used as a surface for painting' },
        { word: 'CONVICTION',   az: 'məhkumetmə', definition: 'a formal declaration that someone is guilty of a crime' },
        { word: 'SANCTION',     az: 'sanksiya', definition: 'a threatened penalty for disobeying a law or rule' },
        { word: 'VIOLATION',    az: 'pozuntu', definition: 'the action of breaking a law, rule or agreement' },
        { word: 'INVASION',     az: 'işğal', definition: 'an act of invading a country or region with an armed force' },
      ]
    },
    {
      words: [
        { word: 'GENRE',        az: 'janr', definition: 'a category of artistic composition' },
        { word: 'LITERATURE',   az: 'ədəbiyyat', definition: 'written works, especially those considered of superior artistic merit' },
        { word: 'ALLEGATION',   az: 'iddia', definition: 'a claim or assertion that someone has done something illegal or wrong, typically without proof' },
        { word: 'REGULATION',   az: 'tənzimləmə', definition: 'an official rule or law controlling how something is done' },
        { word: 'GUERRILLA',    az: 'partizan', definition: 'a member of an irregular armed force that fights a stronger force by sabotage and harassment' },
        { word: 'RIOT',         az: 'iğtişaş', definition: 'a violent disturbance by a crowd of people' },
        { word: 'TORTURE',      az: 'işgəncə', definition: 'the infliction of severe pain to punish or extract information' },
      ]
    },
  ]
},
    'b11_g1': { id: 'c1_b11_g1', title: 'Game 21', phases: [
    {
      words: [
        { word: 'WARRANT',      az: 'axtarış orderi', definition: 'an official authorization or a document authorizing an action' },
        { word: 'LAWFUL',       az: 'qanuni', definition: 'conforming to or permitted by law' },
        { word: 'UNLAWFUL',     az: 'qeyri-qanuni', definition: 'not conforming to or permitted by law' },
        { word: 'VETERAN',      az: 'veteran', definition: 'a person who has had long experience in a particular field' },
        { word: 'WARFARE',      az: 'müharibə', definition: 'the activity of fighting a war' },
      ]
    },
    {
      words: [
        { word: 'AESTHETIC',    az: 'estetik', definition: 'concerned with beauty or the appreciation of beauty' },
        { word: 'HERITAGE',     az: 'miras', definition: 'property or traditions that are inherited from the past' },
        { word: 'ORCHESTRA',    az: 'orkestr', definition: 'a large group of musicians who play various instruments together' },
        { word: 'BREACH',       az: 'pozuntu', definition: 'an act of breaking or failing to observe a law, agreement or code of conduct' },
        { word: 'HOSTAGE',      az: 'girov', definition: 'a person held captive by force as a means of bargaining' },
      ]
    },
    {
      words: [
        { word: 'INDICTMENT',   az: 'ittihamnamə', definition: 'a formal charge or accusation of a serious crime' },
        { word: 'LEGISLATION',  az: 'qanunvericilik', definition: 'laws collectively or the process of making or enacting laws' },
        { word: 'LEGITIMATE',   az: 'qanuni', definition: 'conforming to the law or rules' },
        { word: 'GENOCIDE',     az: 'soyqırım', definition: 'the deliberate killing of a large number of people from a particular nation or group' },
        { word: 'MILITANT',     az: 'silahlı', definition: 'a person who is engaged in aggressive or violent action' },
        { word: 'MISSILE',      az: 'raket', definition: 'a weapon that is self-propelled or directed' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b12_g0': { id: 'c1_b12_g0', title: 'Game 22', phases: [
    {
      words: [
        { word: 'MERGER',       az: 'birləşmə', definition: 'the combining of two or more companies into one' },
        { word: 'RACISM',       az: 'irqçilik', definition: 'prejudice, discrimination or antagonism directed against a person based on race' },
        { word: 'SARCASM',      az: 'sarkazm', definition: 'the use of irony to mock or convey contempt' },
      ]
    },
    {
      words: [
        { word: 'ASSET',        az: 'aktiv', definition: 'a useful or valuable thing or person owned by a company' },
        { word: 'INTEGRATION',  az: 'inteqrasiya', definition: 'the process of combining different groups into a unified society' },
        { word: 'NEGOTIATION',  az: 'danışıqlar', definition: 'discussion aimed at reaching an agreement' },
        { word: 'ASSERTION',    az: 'iddia', definition: 'a confident and forceful statement of fact or belief' },
      ]
    },
    {
      words: [
        { word: 'TURNOVER',     az: 'dövriyyə', definition: 'the total sales made by a business over a period' },
        { word: 'TOLERANCE',    az: 'tolerantlıq', definition: 'the ability to accept opinions or behaviour different from one’s own' },
        { word: 'VULNERABLE',   az: 'həssas', definition: 'exposed to the possibility of being attacked or harmed' },
        { word: 'VERBAL',       az: 'şifahi', definition: 'relating to or in the form of words' },
      ]
    },
  ]
},
    'b12_g1': { id: 'c1_b12_g1', title: 'Game 23', phases: [
    {
      words: [
        { word: 'COMMODITY',    az: 'əmtəə', definition: 'a raw material or primary agricultural product that can be bought and sold' },
        { word: 'MIGRATION',    az: 'miqrasiya', definition: 'the movement of people from one country or area to another' },
        { word: 'MINORITY',     az: 'azlıq', definition: 'a smaller group of people differing from the rest of a community' },
        { word: 'IRONY',        az: 'ironi', definition: 'a situation or statement that is the opposite of what is expected' },
      ]
    },
    {
      words: [
        { word: 'TRANSACTION',  az: 'əməliyyat', definition: 'an instance of buying or selling something' },
        { word: 'ARTICULATE',   az: 'aydın ifadə etmək', definition: 'to express an idea or feeling fluently and coherently' },
        { word: 'INTERPRET',    az: 'şərh etmək', definition: 'to explain the meaning of something' },
        { word: 'PERSUASION',   az: 'inandırma', definition: 'the action or process of persuading someone' },
        { word: 'CONSULTATION', az: 'məsləhət', definition: 'the action or process of formally consulting or discussing' },
      ]
    },
    {
      words: [
        { word: 'DEFICIT',      az: 'kəsir', definition: 'the amount by which expenditure exceeds income' },
        { word: 'FISCAL',       az: 'fiskal', definition: 'relating to government revenue, especially through taxation' },
        { word: 'SHAREHOLDER',  az: 'səhmdar', definition: 'a person who owns shares in a company' },
        { word: 'YIELD',        az: 'gəlir (investisiya)', definition: 'the profit or income from an investment' },
        { word: 'SOLIDARITY',   az: 'həmrəylik', definition: 'unity or agreement of feeling or action among individuals' },
        { word: 'RHETORIC',     az: 'ritorika', definition: 'the art of effective or persuasive speaking or writing' },
      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b13_g0': { id: 'c1_b13_g0', title: 'Game 24', phases: [
    {
      words: [
        { word: 'MISERY',       az: 'əzab', definition: 'a state or feeling of great distress or discomfort' },
        { word: 'CYNICISM',     az: 'kinizm', definition: 'an inclination to believe that people are motivated purely by self-interest' },
        { word: 'MERCY',        az: 'mərhəmət', definition: 'compassion or forgiveness shown towards someone' },
      ]
    },
    {
      words: [
        { word: 'INTENSE',      az: 'güclü', definition: 'of extreme force, degree or strength' },
        { word: 'ABSENCE',      az: 'yoxluq', definition: 'the state of being away from a place or person' },
        { word: 'AESTHETIC',    az: 'estetik', definition: 'concerned with beauty or the appreciation of beauty' },
      ]
    },
    {
      words: [
        { word: 'ADVERSE',      az: 'mənfi', definition: 'preventing success or development' },
        { word: 'CREDIBLE',     az: 'etibarlı', definition: 'able to be believed or trusted' },
        { word: 'DECISIVE',     az: 'qəti', definition: 'settling an issue or showing a clear result' },
        { word: 'ACCESSIBLE',   az: 'əlçatan', definition: 'easy to approach, reach or understand' },
      ]
    },
  ]
},
    'b13_g1': { id: 'c1_b13_g1', title: 'Game 25', phases: [
    {
      words: [
        { word: 'HATRED',       az: 'nifrət', definition: 'intense dislike or ill will' },
        { word: 'DEDICATION',   az: 'sədaqət', definition: 'the quality of being committed to a task or purpose' },
        { word: 'COHERENT',     az: 'ardıcıl', definition: 'logical and consistent' },
        { word: 'INHERENT',     az: 'daxili', definition: 'existing in something as a permanent and inseparable element' },
      ]
    },
    {
      words: [
        { word: 'ATROCITY',     az: 'vəhşilik', definition: 'an extremely wicked or cruel act, typically one involving physical violence or injury' },
        { word: 'INTEGRITY',    az: 'dürüstlük', definition: 'the quality of being honest and having strong moral principles' },
        { word: 'LOYALTY',      az: 'sədaqət', definition: 'a strong feeling of support or allegiance' },
        { word: 'TOLERANCE',    az: 'tolerantlıq', definition: 'the ability to accept opinions or behaviour different from one’s own' },
        { word: 'INTEGRAL',     az: 'ayrılmaz', definition: 'necessary to make a whole complete' },
        { word: 'ALLEGATION',   az: 'iddia', definition: 'a claim or assertion that someone has done something illegal or wrong, typically without proof' },
      ]
    },
    {
      words: [
        { word: 'CORRUPTION',   az: 'korrupsiya', definition: 'dishonest or fraudulent conduct by those in power, typically involving bribery' },
        { word: 'SUSPICION',    az: 'şübhə', definition: 'a feeling or thought that something is possible or true' },
        { word: 'TRAUMA',       az: 'travma', definition: 'a deeply distressing or disturbing experience' },
        { word: 'COMPASSION',   az: 'şəfqət', definition: 'sympathetic pity and concern for the sufferings of others' },
        { word: 'OPTIMISM',     az: 'optimizm', definition: 'hopefulness and confidence about the future' },
        { word: 'ASPIRATION',   az: 'istək', definition: 'a hope or ambition of achieving something' },
      ]
    },
  ]
},
    'b13_g2': { id: 'c1_b13_g2', title: 'Game 26', phases: [
    {
      words: [
        { word: 'CONTEMPT',     az: 'nifrət', definition: 'the feeling that a person or thing is worthless or beneath consideration' },
        { word: 'DOMINANT',     az: 'dominant', definition: 'having power and influence over others' },
        { word: 'ACTIVATION',   az: 'aktivləşdirmə', definition: 'the action of making something active or operative' },
        { word: 'ADOPTION',     az: 'qəbul etmə', definition: 'the action of adopting or being adopted' },
        { word: 'ADVOCATE',     az: 'müdafiəçi', definition: 'a person who publicly supports or recommends a particular cause' },
      ]
    },
    {
      words: [
        { word: 'FRUSTRATION',  az: 'məyusluq', definition: 'the feeling of being upset or annoyed as a result of being unable to change or achieve something' },
        { word: 'GRIEF',        az: 'yas', definition: 'intense sorrow, especially caused by someone’s death' },
        { word: 'GUILT',        az: 'günah hissi', definition: 'a feeling of having done something wrong or immoral' },
        { word: 'OUTRAGE',      az: 'qəzəb', definition: 'an extremely strong reaction of anger or shock' },
        { word: 'FAIRNESS',     az: 'ədalətlilik', definition: 'impartial and just treatment or behaviour' },
        { word: 'AGGRESSION',   az: 'aqressiya', definition: 'hostile or violent behaviour or attitudes' },
      ]
    },
    {
      words: [
        { word: 'BETRAYAL',     az: 'xəyanət', definition: 'the action of betraying someone or something' },
        { word: 'VULNERABILITY', az: 'həssaslıq', definition: 'the quality of being easily hurt or attacked' },
        { word: 'VIRTUE',       az: 'fəzilət', definition: 'behaviour showing high moral standards' },
        { word: 'SINCERITY',    az: 'səmimiyyət', definition: 'the quality of being free from pretence or deceit' },
        { word: 'INEVITABLE',   az: 'qaçılmaz', definition: 'certain to happen and unavoidable' },
        { word: 'SUBSTANTIAL',  az: 'əhəmiyyətli', definition: 'of considerable importance, size or worth' },
      ]
    },
  ]
},
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

        // ──────────────────────────────────────────────

  'c2': {
    'b0_g0':  { id: 'c2_b0_g0',  title: 'Game 1',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b1_g0':  { id: 'c2_b1_g0',  title: 'Game 2',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b2_g0':  { id: 'c2_b2_g0',  title: 'Game 3',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b2_g1':  { id: 'c2_b2_g1',  title: 'Game 4',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b2_g2':  { id: 'c2_b2_g2',  title: 'Game 5',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b3_g0':  { id: 'c2_b3_g0',  title: 'Game 6',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b3_g1':  { id: 'c2_b3_g1',  title: 'Game 7',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b3_g2':  { id: 'c2_b3_g2',  title: 'Game 8',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b4_g0':  { id: 'c2_b4_g0',  title: 'Game 9',  phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b4_g1':  { id: 'c2_b4_g1',  title: 'Game 10', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b5_g0':  { id: 'c2_b5_g0',  title: 'Game 11', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b5_g1':  { id: 'c2_b5_g1',  title: 'Game 12', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b5_g2':  { id: 'c2_b5_g2',  title: 'Game 13', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b6_g0':  { id: 'c2_b6_g0',  title: 'Game 14', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b6_g1':  { id: 'c2_b6_g1',  title: 'Game 15', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b7_g0':  { id: 'c2_b7_g0',  title: 'Game 16', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b7_g1':  { id: 'c2_b7_g1',  title: 'Game 17', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b7_g2':  { id: 'c2_b7_g2',  title: 'Game 18', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b8_g0':  { id: 'c2_b8_g0',  title: 'Game 19', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b8_g1':  { id: 'c2_b8_g1',  title: 'Game 20', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b8_g2':  { id: 'c2_b8_g2',  title: 'Game 21', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b9_g0':  { id: 'c2_b9_g0',  title: 'Game 22', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b9_g1':  { id: 'c2_b9_g1',  title: 'Game 23', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b10_g0': { id: 'c2_b10_g0', title: 'Game 24', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b11_g0': { id: 'c2_b11_g0', title: 'Game 25', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b12_g0': { id: 'c2_b12_g0', title: 'Game 26', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b13_g0': { id: 'c2_b13_g0', title: 'Game 27', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b13_g1': { id: 'c2_b13_g1', title: 'Game 28', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b14_g0': { id: 'c2_b14_g0', title: 'Game 29', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b15_g0': { id: 'c2_b15_g0', title: 'Game 30', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b15_g1': { id: 'c2_b15_g1', title: 'Game 31', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b16_g0': { id: 'c2_b16_g0', title: 'Game 32', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b17_g0': { id: 'c2_b17_g0', title: 'Game 33', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b17_g1': { id: 'c2_b17_g1', title: 'Game 34', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
          // ──────────────────────────────────────────────

    'b18_g0': { id: 'c2_b18_g0', title: 'Game 35', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
    'b18_g1': { id: 'c2_b18_g1', title: 'Game 36', phases: [
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
    {
      words: [

      ]
    },
  ]
},
  },
};

// ── Köməkçi funksiya: levelId + gameId ilə data al ────────
function getGameData(levelId, gameId) {
  return GAME_DATA[levelId]?.[gameId] || null;
}

// ── Global export ─────────────────────────────────────────
window.GAME_DATA   = GAME_DATA;
window.getGameData = getGameData;
