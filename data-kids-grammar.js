// ============================================================
//  WORDPATH — KIDS & GRAMMAR DATA
// ============================================================
// pic → kids/{pic}.png  (cəmi 237 şəkil)
const KIDS_GRAMMAR_LEVELS = [
  {
    id: 'kids',
    name: 'KIDS',
    icon: '🧒',
    color: '#E91E8C',
    quizzes: [

      // ── Quiz 1 · Animals (27 söz | pic 1–27) ──────────────────────────
      [
        { en: 'bear',       wen: 'bird',       pic: 1  },
        { en: 'bee',        wen: 'spider',      pic: 2  },
        { en: 'bird',       wen: 'bee',         pic: 3  },
        { en: 'cat',        wen: 'dog',         pic: 4  },
        { en: 'chicken',    wen: 'duck',        pic: 5  },
        { en: 'cow',        wen: 'horse',       pic: 6  },
        { en: 'crocodile',  wen: 'lizard',      pic: 7  },
        { en: 'dog',        wen: 'cat',         pic: 8  },
        { en: 'donkey',     wen: 'horse',       pic: 9  },
        { en: 'duck',       wen: 'chicken',     pic: 10 },
        { en: 'elephant',   wen: 'hippo',       pic: 11 },
        { en: 'fish',       wen: 'frog',        pic: 12 },
        { en: 'frog',       wen: 'fish',        pic: 13 },
        { en: 'giraffe',    wen: 'zebra',       pic: 14 },
        { en: 'goat',       wen: 'sheep',       pic: 15 },
        { en: 'hippo',      wen: 'elephant',    pic: 16 },
        { en: 'horse',      wen: 'donkey',      pic: 17 },
        { en: 'jellyfish',  wen: 'fish',        pic: 18 },
        { en: 'lizard',     wen: 'crocodile',   pic: 19 },
        { en: 'monkey',     wen: 'bear',        pic: 20 },
        { en: 'mouse',      wen: 'cat',         pic: 21 },
        { en: 'polar bear', wen: 'bear',        pic: 22 },
        { en: 'sheep',      wen: 'goat',        pic: 23 },
        { en: 'snake',      wen: 'lizard',      pic: 24 },
        { en: 'spider',     wen: 'bee',         pic: 25 },
        { en: 'tiger',      wen: 'cat',         pic: 26 },
        { en: 'zebra',      wen: 'horse',       pic: 27 },
      ],

      // ── Quiz 2 · Fruits & Vegetables (18 söz | pic 28–45) ────────────
      [
        { en: 'apple',      wen: 'pear',        pic: 28 },
        { en: 'banana',     wen: 'lemon',       pic: 29 },
        { en: 'bean',       wen: 'pea',         pic: 30 },
        { en: 'carrot',     wen: 'potato',      pic: 31 },
        { en: 'coconut',    wen: 'orange',      pic: 32 },
        { en: 'grape',      wen: 'apple',       pic: 33 },
        { en: 'kiwi',       wen: 'lime',        pic: 34 },
        { en: 'lemon',      wen: 'lime',        pic: 35 },
        { en: 'lime',       wen: 'lemon',       pic: 36 },
        { en: 'mango',      wen: 'orange',      pic: 37 },
        { en: 'onion',      wen: 'potato',      pic: 38 },
        { en: 'orange',     wen: 'lemon',       pic: 39 },
        { en: 'pea',        wen: 'bean',        pic: 40 },
        { en: 'pear',       wen: 'apple',       pic: 41 },
        { en: 'pineapple',  wen: 'coconut',     pic: 42 },
        { en: 'potato',     wen: 'onion',       pic: 43 },
        { en: 'tomato',     wen: 'apple',       pic: 44 },
        { en: 'watermelon', wen: 'pineapple',   pic: 45 },
      ],

      // ── Quiz 3 · Food & Drinks (17 söz | pic 46–62) ──────────────────
      [
        { en: 'bread',      wen: 'cake',        pic: 46 },
        { en: 'burger',     wen: 'pie',         pic: 47 },
        { en: 'cake',       wen: 'bread',       pic: 48 },
        { en: 'candy',      wen: 'chocolate',   pic: 49 },
        { en: 'chips',      wen: 'bread',       pic: 50 },
        { en: 'chocolate',  wen: 'candy',       pic: 51 },
        { en: 'egg',        wen: 'meat',        pic: 52 },
        { en: 'ice cream',  wen: 'cake',        pic: 53 },
        { en: 'juice',      wen: 'milk',        pic: 54 },
        { en: 'lemonade',   wen: 'juice',       pic: 55 },
        { en: 'meat',       wen: 'sausage',     pic: 56 },
        { en: 'meatballs',  wen: 'meat',        pic: 57 },
        { en: 'milk',       wen: 'juice',       pic: 58 },
        { en: 'pie',        wen: 'cake',        pic: 59 },
        { en: 'rice',       wen: 'bread',       pic: 60 },
        { en: 'sausage',    wen: 'meat',        pic: 61 },
        { en: 'water',      wen: 'juice',       pic: 62 },
      ],

      // ── Quiz 4 · Colors (11 söz | pic 63–73) ─────────────────────────
      [
        { en: 'black',      wen: 'brown',       pic: 63 },
        { en: 'blue',       wen: 'purple',      pic: 64 },
        { en: 'brown',      wen: 'black',       pic: 65 },
        { en: 'gray',       wen: 'white',       pic: 66 },
        { en: 'green',      wen: 'blue',        pic: 67 },
        { en: 'orange',     wen: 'yellow',      pic: 68 },
        { en: 'pink',       wen: 'red',         pic: 69 },
        { en: 'purple',     wen: 'blue',        pic: 70 },
        { en: 'red',        wen: 'pink',        pic: 71 },
        { en: 'white',      wen: 'gray',        pic: 72 },
        { en: 'yellow',     wen: 'orange',      pic: 73 },
      ],

      // ── Quiz 5 · Family (8 söz | pic 74–81) ──────────────────────────
      [
        { en: 'baby',        wen: 'child',       pic: 74 },
        { en: 'brother',     wen: 'sister',      pic: 75 },
        { en: 'cousin',      wen: 'brother',     pic: 76 },
        { en: 'father',      wen: 'grandfather', pic: 77 },
        { en: 'grandfather', wen: 'father',      pic: 78 },
        { en: 'grandmother', wen: 'mother',      pic: 79 },
        { en: 'mother',      wen: 'grandmother', pic: 80 },
        { en: 'sister',      wen: 'brother',     pic: 81 },
      ],

      // ── Quiz 6 · Body Parts (12 söz | pic 82–93) ─────────────────────
      [
        { en: 'arm',   wen: 'leg',   pic: 82 },
        { en: 'ear',   wen: 'eye',   pic: 83 },
        { en: 'eye',   wen: 'ear',   pic: 84 },
        { en: 'face',  wen: 'head',  pic: 85 },
        { en: 'foot',  wen: 'hand',  pic: 86 },
        { en: 'hair',  wen: 'face',  pic: 87 },
        { en: 'hand',  wen: 'foot',  pic: 88 },
        { en: 'head',  wen: 'face',  pic: 89 },
        { en: 'leg',   wen: 'arm',   pic: 90 },
        { en: 'mouth', wen: 'nose',  pic: 91 },
        { en: 'nose',  wen: 'mouth', pic: 92 },
        { en: 'tail',  wen: 'leg',   pic: 93 },
      ],

      // ── Quiz 7 · Clothes (14 söz | pic 94–107) ───────────────────────
      [
        { en: 'baseball cap', wen: 'hat',          pic: 94  },
        { en: 'boots',        wen: 'shoe',          pic: 95  },
        { en: 'dress',        wen: 'skirt',         pic: 96  },
        { en: 'glasses',      wen: 'hat',           pic: 97  },
        { en: 'hat',          wen: 'baseball cap',  pic: 98  },
        { en: 'jacket',       wen: 'shirt',         pic: 99  },
        { en: 'jeans',        wen: 'trousers',      pic: 100 },
        { en: 'shirt',        wen: 'jacket',        pic: 101 },
        { en: 'shoe',         wen: 'boots',         pic: 102 },
        { en: 'shorts',       wen: 'trousers',      pic: 103 },
        { en: 'skirt',        wen: 'dress',         pic: 104 },
        { en: 'sock',         wen: 'shoe',          pic: 105 },
        { en: 'T-shirt',      wen: 'shirt',         pic: 106 },
        { en: 'trousers',     wen: 'shorts',        pic: 107 },
      ],

      // ── Quiz 8 · House & Rooms (9 söz | pic 108–116) ─────────────────
      [
        { en: 'apartment',   wen: 'house',       pic: 108 },
        { en: 'bathroom',    wen: 'bedroom',     pic: 109 },
        { en: 'bedroom',     wen: 'bathroom',    pic: 110 },
        { en: 'dining room', wen: 'kitchen',     pic: 111 },
        { en: 'garden',      wen: 'park',        pic: 112 },
        { en: 'hall',        wen: 'room',        pic: 113 },
        { en: 'house',       wen: 'apartment',   pic: 114 },
        { en: 'kitchen',     wen: 'dining room', pic: 115 },
        { en: 'living room', wen: 'bedroom',     pic: 116 },
      ],

      // ── Quiz 9 · Furniture & Objects (19 söz | pic 117–135) ──────────
      [
        { en: 'armchair',  wen: 'chair',     pic: 117 },
        { en: 'bath',      wen: 'bed',       pic: 118 },
        { en: 'bed',       wen: 'sofa',      pic: 119 },
        { en: 'bookcase',  wen: 'cupboard',  pic: 120 },
        { en: 'box',       wen: 'bag',       pic: 121 },
        { en: 'chair',     wen: 'armchair',  pic: 122 },
        { en: 'clock',     wen: 'lamp',      pic: 123 },
        { en: 'cupboard',  wen: 'bookcase',  pic: 124 },
        { en: 'desk',      wen: 'table',     pic: 125 },
        { en: 'door',      wen: 'window',    pic: 126 },
        { en: 'floor',     wen: 'wall',      pic: 127 },
        { en: 'lamp',      wen: 'clock',     pic: 128 },
        { en: 'mat',       wen: 'rug',       pic: 129 },
        { en: 'mirror',    wen: 'window',    pic: 130 },
        { en: 'rug',       wen: 'mat',       pic: 131 },
        { en: 'sofa',      wen: 'armchair',  pic: 132 },
        { en: 'table',     wen: 'desk',      pic: 133 },
        { en: 'wall',      wen: 'floor',     pic: 134 },
        { en: 'window',    wen: 'door',      pic: 135 },
      ],

      // ── Quiz 10 · Sports & Games (10 söz | pic 136–145) ──────────────
      [
        { en: 'badminton',     wen: 'tennis',      pic: 136 },
        { en: 'baseball',      wen: 'basketball',  pic: 137 },
        { en: 'basketball',    wen: 'baseball',    pic: 138 },
        { en: 'board game',    wen: 'game',        pic: 139 },
        { en: 'football',      wen: 'basketball',  pic: 140 },
        { en: 'hockey',        wen: 'football',    pic: 141 },
        { en: 'skateboarding', wen: 'football',    pic: 142 },
        { en: 'swimming',      wen: 'football',    pic: 143 },
        { en: 'table tennis',  wen: 'tennis',      pic: 144 },
        { en: 'tennis',        wen: 'badminton',   pic: 145 },
      ],

      // ── Quiz 11 · Transport (10 söz | pic 146–155) ───────────────────
      [
        { en: 'bike',       wen: 'motorbike', pic: 146 },
        { en: 'boat',       wen: 'ship',      pic: 147 },
        { en: 'bus',        wen: 'car',       pic: 148 },
        { en: 'car',        wen: 'bus',       pic: 149 },
        { en: 'helicopter', wen: 'plane',     pic: 150 },
        { en: 'motorbike',  wen: 'bike',      pic: 151 },
        { en: 'plane',      wen: 'helicopter',pic: 152 },
        { en: 'ship',       wen: 'boat',      pic: 153 },
        { en: 'train',      wen: 'bus',       pic: 154 },
        { en: 'truck',      wen: 'car',       pic: 155 },
      ],

      // ── Quiz 12 · Nature (6 söz | pic 156–161) ───────────────────────
      [
        { en: 'beach',  wen: 'sea',    pic: 156 },
        { en: 'flower', wen: 'tree',   pic: 157 },
        { en: 'sea',    wen: 'beach',  pic: 158 },
        { en: 'shell',  wen: 'flower', pic: 159 },
        { en: 'sun',    wen: 'flower', pic: 160 },
        { en: 'tree',   wen: 'flower', pic: 161 },
      ],

      // ── Quiz 13 · Toys & Hobbies (14 söz | pic 162–175) ─────────────
      [
        { en: 'ball',       wen: 'balloon',    pic: 162 },
        { en: 'balloon',    wen: 'ball',        pic: 163 },
        { en: 'bat',        wen: 'ball',        pic: 164 },
        { en: 'camera',     wen: 'phone',       pic: 165 },
        { en: 'doll',       wen: 'teddy bear',  pic: 166 },
        { en: 'guitar',     wen: 'piano',       pic: 167 },
        { en: 'kite',       wen: 'balloon',     pic: 168 },
        { en: 'music',      wen: 'song',        pic: 169 },
        { en: 'painting',   wen: 'drawing',     pic: 170 },
        { en: 'piano',      wen: 'guitar',      pic: 171 },
        { en: 'radio',      wen: 'camera',      pic: 172 },
        { en: 'robot',      wen: 'doll',        pic: 173 },
        { en: 'teddy bear', wen: 'doll',        pic: 174 },
        { en: 'toy',        wen: 'doll',        pic: 175 },
      ],

      // ── Quiz 14 · Places (7 söz | pic 176–182) ───────────────────────
      [
        { en: 'bookshop',   wen: 'shop',       pic: 176 },
        { en: 'park',       wen: 'garden',     pic: 177 },
        { en: 'playground', wen: 'park',       pic: 178 },
        { en: 'school',     wen: 'classroom',  pic: 179 },
        { en: 'shop',       wen: 'bookshop',   pic: 180 },
        { en: 'street',     wen: 'road',       pic: 181 },
        { en: 'zoo',        wen: 'park',       pic: 182 },
      ],

      // ── Quiz 15 · Feelings & Adjectives (19 söz | pic 183–201) ──────
      [
        { en: 'angry',     wen: 'sad',       pic: 183 },
        { en: 'beautiful', wen: 'nice',      pic: 184 },
        { en: 'big',       wen: 'small',     pic: 185 },
        { en: 'clean',     wen: 'dirty',     pic: 186 },
        { en: 'dirty',     wen: 'clean',     pic: 187 },
        { en: 'funny',     wen: 'silly',     pic: 188 },
        { en: 'good',      wen: 'nice',      pic: 189 },
        { en: 'happy',     wen: 'sad',       pic: 190 },
        { en: 'long',      wen: 'short',     pic: 191 },
        { en: 'new',       wen: 'old',       pic: 192 },
        { en: 'nice',      wen: 'good',      pic: 193 },
        { en: 'old',       wen: 'new',       pic: 194 },
        { en: 'sad',       wen: 'happy',     pic: 195 },
        { en: 'scary',     wen: 'funny',     pic: 196 },
        { en: 'short',     wen: 'long',      pic: 197 },
        { en: 'silly',     wen: 'funny',     pic: 198 },
        { en: 'small',     wen: 'big',       pic: 199 },
        { en: 'ugly',      wen: 'beautiful', pic: 200 },
        { en: 'young',     wen: 'old',       pic: 201 },
      ],

      // ── Quiz 16 · Time (8 söz | pic 202–209) ─────────────────────────
      [
        { en: 'afternoon', wen: 'evening',   pic: 202 },
        { en: 'birthday',  wen: 'day',       pic: 203 },
        { en: 'day',       wen: 'night',     pic: 204 },
        { en: 'evening',   wen: 'afternoon', pic: 205 },
        { en: 'morning',   wen: 'afternoon', pic: 206 },
        { en: 'night',     wen: 'day',       pic: 207 },
        { en: 'today',     wen: 'day',       pic: 208 },
        { en: 'year',      wen: 'day',       pic: 209 },
      ],

      // ── Quiz 17 · People (8 söz | pic 210–217) ───────────────────────
      [
        { en: 'alien',   wen: 'monster', pic: 210 },
        { en: 'boy',     wen: 'girl',    pic: 211 },
        { en: 'child',   wen: 'baby',    pic: 212 },
        { en: 'girl',    wen: 'boy',     pic: 213 },
        { en: 'man',     wen: 'woman',   pic: 214 },
        { en: 'monster', wen: 'alien',   pic: 215 },
        { en: 'person',  wen: 'man',     pic: 216 },
        { en: 'woman',   wen: 'man',     pic: 217 },
      ],

      // ── Quiz 18 · Actions (20 söz | pic 218–237) ─────────────────────
      [
        { en: 'bounce', wen: 'jump',  pic: 218 },
        { en: 'catch',  wen: 'throw', pic: 219 },
        { en: 'clap',   wen: 'wave',  pic: 220 },
        { en: 'draw',   wen: 'paint', pic: 221 },
        { en: 'drink',  wen: 'eat',   pic: 222 },
        { en: 'eat',    wen: 'drink', pic: 223 },
        { en: 'fly',    wen: 'jump',  pic: 224 },
        { en: 'jump',   wen: 'run',   pic: 225 },
        { en: 'kick',   wen: 'throw', pic: 226 },
        { en: 'paint',  wen: 'draw',  pic: 227 },
        { en: 'run',    wen: 'walk',  pic: 228 },
        { en: 'sing',   wen: 'dance', pic: 229 },
        { en: 'sit',    wen: 'stand', pic: 230 },
        { en: 'sleep',  wen: 'sit',   pic: 231 },
        { en: 'smile',  wen: 'wave',  pic: 232 },
        { en: 'swim',   wen: 'run',   pic: 233 },
        { en: 'throw',  wen: 'catch', pic: 234 },
        { en: 'walk',   wen: 'run',   pic: 235 },
        { en: 'wave',   wen: 'clap',  pic: 236 },
        { en: 'write',  wen: 'draw',  pic: 237 },
      ],

    ],
  },


  // ╔══════════════════════════════════════════════════╗
  // ║  GRAMMAR BÖLÜMÜ — NOUNS (İsimlər)               ║
  // ╚══════════════════════════════════════════════════╝
{
    id: 'grammar',
    name: 'NOUNS - İSİMLƏR',
    icon: '<i class="ti ti-box"></i>',
    color: '#D4A96A',
    quizzes: [
      {
  type: 'section_divider',
  title: 'Bölmə 1 — Sadə, düzəltmə, mürəkkəb isimlər',
},

  // index: 1 — Dərs 1.1
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Sadə, düzəltmə, mürəkkəb isimlər',
  cards: [
          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'İsim (The Noun)',
            content: 'İsim canlı və cansız əşyaların, yerlərin, hisslərin və fikirlərin adını bildirir.\n\nİsimlər quruluşca 3 növdür:',
            examples: [
              { word: 'Simple noun',     az: 'Sadə isim',     note: '— yalnız bir kökdən ibarət' },
              { word: 'Derivative noun', az: 'Düzəltmə isim', note: '— kök + şəkilçi' },
              { word: 'Compound noun',   az: 'Mürəkkəb isim', note: '— iki və ya daha çox söz' },
            ],
          },

          // ── Ekran 2: Sadə isimlər ────────────────────────
          {
            type: 'lesson',
            title: '1. Sadə isimlər (Simple nouns)',
            content: 'Sadə isimlər yalnız bir kökdən ibarətdir — heç bir şəkilçi əlavə edilmir.',
            examples: [
              { word: 'book',  az: 'kitab' },
              { word: 'pen',   az: 'qələm' },
              { word: 'cat',   az: 'pişik' },
              { word: 'sun',   az: 'günəş' },
              { word: 'chair', az: 'stul'  },
            ],
            tip: 'Sadə isimlər ən qısa və ən çox işlənən isim növüdür.',
          },

          // ── Quiz: Sadə isimi seç ─────────────────────────
          { en: 'Sadə isimi seç', tr: 'book',  wrong: 'teacher'     },
          { en: 'Sadə isimi seç', tr: 'sun',   wrong: 'darkness'    },
          { en: 'Sadə isimi seç', tr: 'chair', wrong: 'freedom'     },
          { en: 'Sadə isimi seç', tr: 'road',  wrong: 'railway'     },
          { en: 'Sadə isimi seç', tr: 'rain',  wrong: 'self-control'},

          // ── Ekran 3: Düzəltmə isimlər ───────────────────
          {
            type: 'lesson',
            title: '2. Düzəltmə isimlər (Derivative nouns)',
            content: 'Düzəltmə isimlər kök sözə şəkilçi əlavə etməklə yaranır.\n\nBu şəkilçilər sözün mənasını dəyişdirir və ondan isim düzəldir:',
            examples: [
              { word: 'teach → teacher',       az: '-er şəkilçisi ilə' },
              { word: 'happy → happiness',     az: '-ness şəkilçisi ilə' },
              { word: 'develop → development', az: '-ment şəkilçisi ilə' },
              { word: 'free → freedom',        az: '-dom şəkilçisi ilə' },
              { word: 'child → childhood',     az: '-hood şəkilçisi ilə' },
            ],
            note: 'Şəkilçi əlavə olunduqda kök sözün yazılışı bəzən dəyişə bilər: happy → happiness.',
          },

          // ── Quiz: Düzəltmə isimi seç ────────────────────
          { en: 'Düzəltmə isimi seç', tr: 'teacher',     wrong: 'book'         },
          { en: 'Düzəltmə isimi seç', tr: 'happiness',   wrong: 'sunrise'      },
          { en: 'Düzəltmə isimi seç', tr: 'freedom',     wrong: 'railway'      },
          { en: 'Düzəltmə isimi seç', tr: 'childhood',   wrong: 'flowerbed'    },
          { en: 'Düzəltmə isimi seç', tr: 'development', wrong: 'self-control' },

          // ── Ekran 4: Mürəkkəb isimlər ───────────────────
          {
            type: 'lesson',
            title: '3. Mürəkkəb isimlər (Compound nouns)',
            content: 'Mürəkkəb isimlər iki və ya daha çox sözdən birləşərək yeni bir məna yaradır.\n\nYazılış 3 cür ola bilər:',
            examples: [
              { word: 'flowerbed',    az: 'bitişik yazılır' },
              { word: 'railway',      az: 'bitişik yazılır' },
              { word: 'full moon',    az: 'ayrı yazılır' },
              { word: 'self-control', az: 'tire ilə yazılır' },
              { word: 'sunrise',      az: 'bitişik yazılır' },
            ],
            tip: 'Mürəkkəb isimlərdə əsas məna ikinci sözdə olur: flower + bed = çiçəklik (çarpayı növü).',
          },

          // ── Quiz: Mürəkkəb isimi seç ────────────────────
          { en: 'Mürəkkəb isimi seç', tr: 'sunrise',      wrong: 'pen'         },
          { en: 'Mürəkkəb isimi seç', tr: 'railway',      wrong: 'kindness'    },
          { en: 'Mürəkkəb isimi seç', tr: 'flowerbed',    wrong: 'freedom'     },
          { en: 'Mürəkkəb isimi seç', tr: 'full moon',    wrong: 'leadership'  },
          { en: 'Mürəkkəb isimi seç', tr: 'self-control', wrong: 'development' },

          // ── Ekran 5: Müqayisə cədvəli ───────────────────
          {
            type: 'lesson',
            title: 'Müqayisə: 3 növ bir arada',
            content: 'Üç növü yan-yana görərək fərqi daha asan mənimsəyəcəksən:',
            table: [
              ['Növ',        'Quruluş',       'Nümunə'],
              ['Simple',     'kök',           'book, sun, pen'],
              ['Derivative', 'kök + şəkilçi', 'teacher, freedom'],
              ['Compound',   'söz + söz',     'sunrise, self-control'],
            ],
            note: 'Bəzən bir söz həm düzəltmə, həm mürəkkəb ola bilər: "workmanship" — work + man + -ship.',
          },

         // ── Mini-quiz: Ümumi təkrar ───────────────────────────
{
  type: 'mini_check',
  questions: [
    {
      q: '"road" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"kingdom" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"toothbrush" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"rain" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"friendship" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"bedroom" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"stone" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"kindness" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"earthquake" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"hand" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"heroism" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"waterfall" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"tree" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"neighbourhood" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"footprint" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
  ],
},
            ],
},
      // index: 2 — Dərs 1.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 1.2 — İsim düzəldən şəkilçilər',
        cards: [

          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'İsim düzəldən şəkilçilər',
            content: 'Şəkilçi əlavə etməklə fel, sifət və başqa söz növlərindən isim düzəltmək olar.\n\nBu şəkilçiləri bilmək yeni sözləri asanlıqa tanımağa kömək edir.',
            tip: 'Şəkilçini tanısan, sözün mənasını bilməsən belə onun isim olduğunu anlayarsan.',
          },

          // ── Ekran 2: Feldən düzələn isimlər ─────────────
          {
            type: 'lesson',
            title: 'Feldən düzələn isimlər',
            content: 'Aşağıdakı şəkilçilər fellərə əlavə edilərək isim yaradır:',
            table: [
              ['Şəkilçi',       'Nümunə fel',  'Düzələn isim'],
              ['-er / -or',     'teach, work', 'teacher, worker'],
              ['-ment',         'develop',     'development'],
              ['-tion / -sion', 'station',     'profession, revision'],
              ['-ance / -ence', 'perform',     'performance, dependence'],
              ['-ing',          'meet, weed',  'meeting, weeding'],
            ],
            note: '-er / -or şəkilçisi "iş görən şəxs" mənası verir: teach → teacher (müəllim).',
          },

          // ── Mini-check: Feldən düzələn ───────────────────
          { type: 'mini_check', questions: [{ q: '"teacher" sözündə hansı şəkilçi isim düzəldir?', options: ['-er', '-ness', '-dom', '-hood'], answer: '-er' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz feldən düzəlmiş isimdir?', options: ['wisdom', 'meeting', 'village', 'kingdom'], answer: 'meeting' }] },
          { type: 'mini_check', questions: [{ q: '"develop" felindən isim düzəltmək üçün hansı şəkilçi lazımdır?', options: ['-ness', '-ity', '-ment', '-hood'], answer: '-ment' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz "-tion / -sion" şəkilçisi ilə düzəlmişdir?', options: ['darkness', 'friendship', 'revision', 'strength'], answer: 'revision' }] },

          // ── Ekran 3: Sifətdən düzələn isimlər ───────────
          {
            type: 'lesson',
            title: 'Sifətdən düzələn isimlər',
            content: 'Sifətlərə şəkilçi əlavə edərək isim düzəltmək olar:',
            table: [
              ['Şəkilçi', 'Nümunə sifət', 'Düzələn isim'],
              ['-ness',   'happy, kind',  'happiness, kindness'],
              ['-ity',    'popular',      'popularity, celebrity'],
              ['-th',     'strong, wide', 'strength, width'],
              ['-dom',    'free, wise',   'freedom, wisdom'],
            ],
            tip: '-ness şəkilçisi demək olar ki, istənilən sifətə əlavə edilə bilər.',
          },

          // ── Mini-check: Sifətdən düzələn ────────────────
          { type: 'mini_check', questions: [{ q: '"happy" sifətindən isim düzəltmək üçün hansı şəkilçi lazımdır?', options: ['-ment', '-ness', '-ship', '-ing'], answer: '-ness' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz sifətdən düzəlmiş isimdir?', options: ['meeting', 'village', 'width', 'typist'], answer: 'width' }] },
          { type: 'mini_check', questions: [{ q: '"popular" sözündən hansı isim düzəlir?', options: ['popularity', 'popularing', 'popularhood', 'popularism'], answer: 'popularity' }] },

          // ── Ekran 4: Digər şəkilçilər ────────────────────
          {
            type: 'lesson',
            title: 'Digər mühüm şəkilçilər',
            content: 'Bəzi şəkilçilər müstəqil kök sözlərə əlavə edilir:',
            table: [
              ['Şəkilçi', 'Məna',               'Nümunə'],
              ['-hood',   'vəziyyət, dövr',     'childhood, brotherhood'],
              ['-ship',   'xüsusiyyət, vəzifə', 'leadership, friendship'],
              ['-ism',    'ideologiya, sistem',  'heroism, communism'],
              ['-ist',    'peşə sahibi',         'typist, dentist'],
              ['-age',    'yer, vəziyyət',       'village, package'],
            ],
            note: '-ist şəkilçisi həm peşəni (dentist), həm də ideologiyanın tərəfdarını (communist) bildirir.',
          },

          // ── Mini-check: Digər şəkilçilər ─────────────────
          { type: 'mini_check', questions: [{ q: '"friendship" sözündə hansı şəkilçi var?', options: ['-hood', '-ism', '-ship', '-dom'], answer: '-ship' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz "-ism" şəkilçisi ilə düzəlmişdir?', options: ['dentist', 'heroism', 'village', 'childhood'], answer: 'heroism' }] },
          { type: 'mini_check', questions: [{ q: '"typist" sözündəki "-ist" şəkilçisi nə bildirir?', options: ['yer, məkan', 'ideologiya', 'peşə sahibi', 'vəziyyət, dövr'], answer: 'peşə sahibi' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı şəkilçi "vəziyyət, dövr" mənası verir?', options: ['-ship', '-ism', '-age', '-hood'], answer: '-hood' }] },

          // ── Ekran 5: Xülasə ──────────────────────────────
          {
            type: 'lesson',
            title: 'Şəkilçilərin ümumi xülasəsi',
            content: 'Bütün şəkilçiləri bir yerdə görmək üçün:',
            table: [
              ['Şəkilçi',       'Nümunə'],
              ['-er / -or',     'teacher, writer, actor'],
              ['-ness',         'happiness, darkness'],
              ['-ment',         'development, department'],
              ['-hood',         'childhood, neighbourhood'],
              ['-ship',         'friendship, leadership'],
              ['-ism',          'heroism, communism'],
              ['-dom',          'freedom, kingdom'],
              ['-tion / -sion', 'station, revision'],
              ['-ence / -ance', 'dependence, performance'],
              ['-ing',          'meeting, carving'],
              ['-ity',          'popularity, celebrity'],
              ['-age',          'village, cottage'],
              ['-th',           'strength, length, depth'],
              ['-ist',          'typist, dentist'],
            ],
            tip: 'Bu şəkilçilərdən birini gördükdə o sözün isim olma ehtimalı çox yüksəkdir.',
          },

          // ── Mini-quiz: Ümumi təkrar — şəkilçilər ─────────────
{
  type: 'mini_check',
  questions: [
    {
      q: '"actor" sözü hansı şəkilçi ilə düzəlmişdir?',
      options: ['-ment', '-or', '-ness', '-th'],
      answer: '-or',
    },
    {
      q: 'Hansı söz "-dom" şəkilçisi ilə düzəlmişdir?',
      options: ['meeting', 'wisdom', 'package', 'dentist'],
      answer: 'wisdom',
    },
    {
      q: '"strength" sözündəki şəkilçi hansıdır?',
      options: ['-ness', '-ity', '-th', '-age'],
      answer: '-th',
    },
    {
      q: 'Hansı söz "-age" şəkilçisi ilə düzəlmişdir?',
      options: ['leadership', 'cottage', 'revision', 'darkness'],
      answer: 'cottage',
    },
    {
      q: '"carving" sözü hansı feldən düzəlmişdir?',
      options: ['carry', 'care', 'carve', 'card'],
      answer: 'carve',
    },
    {
      q: 'Hansı şəkilçi sifətə əlavə edilir?',
      options: ['-er', '-ment', '-ness', '-or'],
      answer: '-ness',
    },
    {
      q: '"neighbourhood" sözündə neçə morfem var?',
      options: ['2', '3', '4', '1'],
      answer: '3',
    },
  ],
},
        ],
      },
// index: 3 — Bölmə 1 ümumi quiz
[
  { en: 'teacher',      tr: 'Düzəltmə',  wrong: 'Sadə'      },
  { en: 'book',         tr: 'Sadə',      wrong: 'Mürəkkəb'  },
  { en: 'sunrise',      tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'rain',         tr: 'Sadə',      wrong: 'Düzəltmə'  },
  { en: 'happiness',    tr: 'Düzəltmə',  wrong: 'Mürəkkəb'  },
  { en: 'toothbrush',   tr: 'Mürəkkəb',  wrong: 'Sadə'      },
  { en: 'hero____m',    tr: '-is',       wrong: '-er'        },
  { en: 'teach → ____', tr: 'teacher',   wrong: 'teachness'  },
  { en: 'waterfall',    tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'stone',        tr: 'Sadə',      wrong: 'Düzəltmə'  },
  { en: 'free → ____',  tr: 'freedom',   wrong: 'freeship'   },
  { en: 'kind → ____',  tr: 'kindness',  wrong: 'kindment'   },
  { en: 'friendship',   tr: 'Düzəltmə',  wrong: 'Mürəkkəb'  },
  { en: 'bedroom',      tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'develop → ____', tr: 'development', wrong: 'developness' },
  { en: 'kingdom',      tr: 'Düzəltmə',  wrong: 'Sadə'      },
  { en: 'hand',         tr: 'Sadə',      wrong: 'Mürəkkəb'  },
  { en: 'lead → ____ship', tr: 'leadership', wrong: 'leaderhood' },
  { en: 'earthquake',   tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'strong → ____', tr: 'strength', wrong: 'strongness' },
],

     // ── Bölmə 2 ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 2 — Common vs Proper nouns · Konkret vs Mücərrəd',
},

// Dərs 2.1 — Common vs Proper noun fərqi
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Common vs Proper nouns',
  cards: [

    // ── Ekran 1: Ümumi və Xüsusi isimlər ─────────────────
    {
      type: 'lesson',
      title: 'Ümumi və Xüsusi isimlər',
      content: 'İsimlər iki böyük qrupa bölünür:\n\nCommon nouns (Ümumi isimlər) — eyni qəbildən olan əşyaların adını bildirir. Kiçik hərflə yazılır.\n\nProper nouns (Xüsusi isimlər) — eyni qəbildən olan əşyaları bir-birindən fərqləndirmək üçün verilən adlardır. Həmişə böyük hərflə yazılır.',
      examples: [
        { word: 'a city, a country, a lake', az: 'Common noun — kiçik hərflə' },
        { word: 'Baku, Azerbaijan',          az: 'Proper noun — böyük hərflə' },
        { word: 'peace, weather',            az: 'Common noun — kiçik hərflə' },
        { word: 'January, Monday',           az: 'Proper noun — böyük hərflə' },
      ],
      tip: 'Azərbaycan dilindən fərqli olaraq ingilis dilində ay və həftə günlərinin adları həmişə böyük hərflə yazılır.',
    },

    // ── Ekran 2: Proper nouns kateqoriyaları ─────────────
    {
      type: 'lesson',
      title: 'Proper nouns — hansı sözlər daxildir?',
      content: 'Aşağıdakı kateqoriyalar həmişə böyük hərflə yazılır:',
      table: [
        ['Kateqoriya',                 'Nümunə'],
        ['İnsan adları',               'Anar, Sara'],
        ['Coğrafi adlar',              'Azerbaijan, Baku, Caspian Sea'],
        ['Ayların adları',             'January, February, March'],
        ['Həftə günlərinin adları',    'Monday, Tuesday, Sunday'],
        ['Gəmi, otel, meydan adları',  'Titanic, Hilton, Times Square'],
        ['Teatr, klub, jurnal adları', 'The Globe, Vogue'],
      ],
      note: 'Common noun ilə Proper noun arasındakı fərq: a lake (hər hansı göl) — Caspian Sea (konkret, xüsusi ad verilmiş göl).',
    },

    // ── Mini-check: Common vs Proper ─────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Baku" hansı növ isimdir?',
          options: ['Common noun', 'Proper noun', 'Abstract noun', 'Collective noun'],
          answer: 'Proper noun',
        },
        {
          q: '"a city" hansı növ isimdir?',
          options: ['Proper noun', 'Abstract noun', 'Common noun', 'Compound noun'],
          answer: 'Common noun',
        },
        {
          q: 'Hansı söz mütləq böyük hərflə yazılır?',
          options: ['country', 'lake', 'Monday', 'peace'],
          answer: 'Monday',
        },
        {
          q: '"Caspian Sea" nə üçün böyük hərflə yazılır?',
          options: [
            'Mücərrəd isim olduğuna görə',
            'Xüsusi ad olduğuna görə',
            'Cəm formada olduğuna görə',
            'Sayılmayan isim olduğuna görə',
          ],
          answer: 'Xüsusi ad olduğuna görə',
        },
        {
          q: 'Hansı sırada hər iki söz də Common noun-dur?',
          options: ['Anar, Sara', 'January, Monday', 'weather, lake', 'Baku, Titanic'],
          answer: 'weather, lake',
        },
        {
          q: '"february" yazılışında nə səhvdir?',
          options: [
            'Heç nə — düzgündür',
            'Böyük hərflə yazılmalıdır',
            'Kiçik hərflə yazılmalıdır',
            'Sözün özü yanlışdır',
          ],
          answer: 'Böyük hərflə yazılmalıdır',
        },
      ],
    },
  ],
},

// Dərs 2.2 — Concrete vs Abstract isimlər
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Concrete vs Abstract · Countable vs Uncountable',
  cards: [

    // ── Ekran 1: Common noun-un 2 qrupu ──────────────────
    {
      type: 'lesson',
      title: 'Ümumi isimlər — Konkret və Mücərrəd',
      content: 'Common nouns özü də 2 qrupa bölünür:\n\nI. Konkret isimlər (Concrete nouns) — fiziki əşyaların adını bildirir. Əl ilə toxunmaq, gözlə görmək mümkündür.\n\nII. Mücərrəd isimlər (Abstract nouns) — gözlə görünməyən, əl ilə toxunulmayan isimlərdir. Hərəkət, vəziyyət və keyfiyyət adlarını bildirir.',
      examples: [
        { word: 'a pen, bread, a city, a table', az: 'Concrete — görünür, toxunulur' },
        { word: 'happiness, love, freedom',      az: 'Abstract — görünmür, toxunulmur' },
        { word: 'knowledge, hate',               az: 'Abstract — hərəkət, keyfiyyət adı' },
      ],
      tip: 'Özünə sual ver: Bu şeyi görə bilərəm ya hiss edə bilərəm? Yalnız hiss edirəmsə — abstract.',
    },

    // ── Ekran 2: Concrete → Countable vs Uncountable ─────
    {
      type: 'lesson',
      title: 'Konkret isimlər — Sayılan və Sayılmayan',
      content: 'Konkret isimlər özü də 2 yarımqrupa bölünür:\n\na) Sayılan isimlər (Countable nouns)\nb) Sayılmayan isimlər (Uncountable nouns)',
      table: [
        ['Xüsusiyyət',          'Countable',          'Uncountable'],
        ['Cəm forması',         'var: books',         'yoxdur'],
        ['a / an artiklı',      'işlənir: a book',    'işlənmir'],
        ['Rəqəm',               'işlənir: 3 books',   'işlənmir'],
        ['"çox" mənasında',     'many books',         'much milk'],
        ['"az" mənasında',      'few books',          'little butter'],
        ['Felin forması',       'cəm fel: books are', 'tək fel: milk is'],
      ],
      examples: [
        { word: 'a book → many books / few books', az: 'Countable' },
        { word: 'much milk / little butter',       az: 'Uncountable' },
        { word: 'Many books are on the table.',    az: 'Cəm fel' },
      ],
    },

    // ── Mini-check: Countable vs Uncountable ─────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"milk" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract noun'],
          answer: 'Uncountable',
        },
        {
          q: 'Countable isimlərlə hansı söz işlənir ("az" mənasında)?',
          options: ['little', 'much', 'few', 'less'],
          answer: 'few',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Many butters are in the fridge.',
            'Few milks are left.',
            'Many books are on the table.',
            'Much books are here.',
          ],
          answer: 'Many books are on the table.',
        },
        {
          q: '"a / an" artiklı hansı isimlərlə işlənir?',
          options: [
            'Yalnız Uncountable',
            'Yalnız Countable',
            'Həm Countable, həm Uncountable',
            'Yalnız Abstract',
          ],
          answer: 'Yalnız Countable',
        },
        {
          q: '"bread" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Uncountable', 'Abstract noun'],
          answer: 'Uncountable',
        },
      ],
    },

    // ── Ekran 3: Abstract nouns — qaydalar ───────────────
    {
      type: 'lesson',
      title: 'Abstract nouns — diqqət ediləcək qaydalar',
      content: 'Mücərrəd isimlər adətən bu qaydalara tabedir:\n\n• Sayılmır, cəmlənmir\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə olur',
      examples: [
        { word: 'Knowledge is power.',  az: 'Fel tək — "is"' },
        { word: 'Love is beautiful.',   az: 'Fel tək — "is"' },
      ],
      note: 'Vacib istisna: Mücərrəd isimin qarşısında sifət gələrsə, a / an artiklı işlənir.',
    },

    // ── Ekran 4: Sifətli abstract noun istisnaları ────────
    {
      type: 'lesson',
      title: 'Abstract noun + sifət → a / an işlənir',
      content: 'Mücərrəd ismin qarşısında sifət olduqda a / an artiklı mütləq işlənir:',
      table: [
        ['İfadə',           'Sifət'],
        ['a good knowledge', '"good" sifəti var'],
        ['a long distance',  '"long" sifəti var'],
        ['a long silence',   '"long" sifəti var'],
        ['a hard life',      '"hard" sifəti var'],
        ['a good salary',    '"good" sifəti var'],
        ['a bad impression', '"bad" sifəti var'],
        ['a thick population',  '"thick" sifəti var'],
        ['a terrible storm',    '"terrible" sifəti var'],
        ['a single cloud',      '"single" sifəti var'],
        ['a long period',       '"long" sifəti var'],
      ],
      tip: 'Qayda: sifət + abstract noun → mütləq a / an. Sifətsiz abstract noun → a / an işlənmir.',
    },

    // ── Mini-check: Abstract nouns ───────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A love is beautiful.',
            'Love is beautiful.',
            'Loves is beautiful.',
            'The loves are beautiful.',
          ],
          answer: 'Love is beautiful.',
        },
        {
          q: 'Hansı halda "a" artiklı işlənir?',
          options: [
            'love',
            'a hard life',
            'freedom',
            'knowledge',
          ],
          answer: 'a hard life',
        },
        {
          q: '"happiness" hansı növ isimdir?',
          options: ['Concrete', 'Countable', 'Abstract', 'Proper noun'],
          answer: 'Abstract',
        },
        {
          q: 'Abstract isimlərin arxasında fel necə olur?',
          options: ['Cəm', 'Tək', 'İstənilən formada', 'Həmişə "are"'],
          answer: 'Tək',
        },
        {
          q: 'Hansı ifadə düzgündür?',
          options: [
            'a knowledge',
            'a good knowledge',
            'good knowledges',
            'the knowledges',
          ],
          answer: 'a good knowledge',
        },
        {
          q: '"freedom" cəmlənə bilərmi?',
          options: [
            'Bəli, freedoms olur',
            'Xeyr, mücərrəd isim olduğuna görə cəmlənmir',
            'Bəli, xüsusi hallarda',
            'Bəli, freedomes olur',
          ],
          answer: 'Xeyr, mücərrəd isim olduğuna görə cəmlənmir',
        },
      ],
    },

    // ── Ekran 5: Cins kateqoriyası ────────────────────────
    {
      type: 'lesson',
      title: 'İsimlərin cinsi (Gender)',
      content: 'İngilis dilində cins kateqoriyası əsasən üçüncü şəxs əvəzliklərində özünü göstərir: he, she, it\n\nQadın cinsi düzəldən şəkilçi: -ess',
      table: [
        ['Kişi cinsi', 'Qadın cinsi'],
        ['actor',      'actress'],
        ['lion',       'lioness'],
        ['waiter',     'waitress'],
      ],
      note: 'Xüsusi qaydalar:\n• Ölkə adları həmişə qadın cinsinə aid edilir: "Azerbaijan is our country. She is an independent country."\n• Ölkə ərazi mənasında işləndikdə orta cinsə aid edilə bilər: "Its area is 84 square kilometres."\n• Həşəratlar, quşlar, balıqlar həmişə orta cinsə (it) aid edilir.',
    },

    // ── Mini-check: Gender ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"actor" sözünün qadın cinsi necədir?',
          options: ['actoress', 'actress', 'actorness', 'actrice'],
          answer: 'actress',
        },
        {
          q: 'Ölkə adları hansı cinsə aid edilir?',
          options: ['Kişi cinsi (he)', 'Orta cins (it)', 'Qadın cinsi (she)', 'Cins yoxdur'],
          answer: 'Qadın cinsi (she)',
        },
        {
          q: 'Həşəratlar ingilis dilində hansı əvəzliklə əvəz edilir?',
          options: ['he', 'she', 'it', 'they'],
          answer: 'it',
        },
        {
          q: 'Qadın cinsi düzəldən şəkilçi hansıdır?',
          options: ['-er', '-ness', '-ess', '-ity'],
          answer: '-ess',
        },
        {
          q: '"Azerbaijan is our country. ___ is an independent country." — boşluğa nə gəlir?',
          options: ['He', 'It', 'She', 'They'],
          answer: 'She',
        },
      ],
    },

    // ── Ekran 6: Tam xülasə cədvəli ──────────────────────
    {
      type: 'lesson',
      title: 'Bölmə 2 — Tam xülasə',
      content: 'Bütün isim növlərini bir yerdə görək:',
      table: [
        ['Növ',          'Xüsusiyyət',                   'Nümunə'],
        ['Common noun',  'kiçik hərflə',                 'city, lake, peace'],
        ['Proper noun',  'böyük hərflə',                 'Baku, Monday, Sara'],
        ['Concrete',     'görünür, toxunulur',            'pen, bread, table'],
        ['Abstract',     'hiss edilir, görünmür',         'love, freedom, hate'],
        ['Countable',    'sayılır, cəmlənir, a/an alır',  'book → books'],
        ['Uncountable',  'sayılmır, a/an almır',          'milk, bread, water'],
      ],
      tip: 'Bir isim həm Proper, həm Concrete ola bilər: "Caspian Sea" — xüsusi ad, fiziki yer.',
    },
  ],
},

// ── Bölmə 2 — Ümumi Quiz ─────────────────────────────────
[
  // Common vs Proper
  { en: 'Baku',          tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'a city',        tr: 'Common noun',    wrong: 'Proper noun'  },
  { en: 'January',       tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'a lake',        tr: 'Common noun',    wrong: 'Proper noun'  },
  { en: 'Tuesday',       tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'weather',       tr: 'Common noun',    wrong: 'Proper noun'  },

  // Concrete vs Abstract
  { en: 'happiness',     tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'a pen',         tr: 'Concrete',       wrong: 'Abstract'     },
  { en: 'freedom',       tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'a table',       tr: 'Concrete',       wrong: 'Abstract'     },
  { en: 'knowledge',     tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'bread',         tr: 'Concrete',       wrong: 'Abstract'     },

  // Countable vs Uncountable
  { en: 'milk',          tr: 'Uncountable',    wrong: 'Countable'    },
  { en: 'a book',        tr: 'Countable',      wrong: 'Uncountable'  },
  { en: 'water',         tr: 'Uncountable',    wrong: 'Countable'    },
  { en: 'a chair',       tr: 'Countable',      wrong: 'Uncountable'  },

  // many / much / few / little
  { en: 'Çox kitab → ____', tr: 'many books',  wrong: 'much books'   },
  { en: 'Çox süd → ____',   tr: 'much milk',   wrong: 'many milk'    },
  { en: 'Az pul → ____',    tr: 'little money',wrong: 'few money'    },
  { en: 'Az uşaq → ____',   tr: 'few children',wrong: 'little children' },

  // Abstract noun + sifət
  { en: 'a good ____',   tr: 'knowledge',      wrong: 'knowledges'   },
  { en: 'a hard ____',   tr: 'life',           wrong: 'lives'        },

  // Gender
  { en: 'actor → ____',  tr: 'actress',        wrong: 'actoress'     },
  { en: 'Ölkə → hansı əvəzlik?', tr: 'she',   wrong: 'it'           },
  { en: 'Həşərat → hansı əvəzlik?', tr: 'it', wrong: 'she'          },
  { en: 'lion → ____',   tr: 'lioness',        wrong: 'lionness'     },
],
     // ── Bölmə 3 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 3 — Countable vs Uncountable · Much / Many / Few / Little',
      },

      // Dərs 3.1 — Countable nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.1 — Countable nouns',
        cards: [

          // ── Ekran 1: Countable — əsas qaydalar ──────────
          {
            type: 'lesson',
            title: 'Sayılan isimlər (Countable nouns)',
            content: 'Sayılan isimlər saymağın mümkün olduğu bütün isimlərdir.',
            table: [
              ['Xüsusiyyət',       'Nümunə'],
              ['Tək + a / an',     'a book, a student'],
              ['Cəm forması var',  'books, students'],
              ['"çox" → many',     'many books'],
              ['"az" → few',       'few students'],
              ['Fel cəm gəlir',    'Many books are here.'],
            ],
            tip: 'many və few-dan sonra isim cəm, fel də cəm gəlir.',
          },

          // ── Mini-check: Countable ────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: 'Countable isimlərlə "çox" mənasında hansı söz işlənir?',
                options: ['much', 'many', 'little', 'a lot'],
                answer: 'many',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Few student is here.',
                  'Few students are here.',
                  'Few students is here.',
                  'A few student are here.',
                ],
                answer: 'Few students are here.',
              },
              {
                q: '"a book" — bu hansı növ isimdir?',
                options: ['Uncountable', 'Abstract', 'Countable', 'Proper noun'],
                answer: 'Countable',
              },
              {
                q: 'Countable isimlərlə "az" mənasında hansı söz işlənir?',
                options: ['little', 'much', 'few', 'less'],
                answer: 'few',
              },
              {
                q: '"Many teachers ___ this rule." — boşluğa nə gəlir?',
                options: ['knows', 'know', 'is knowing', 'has known'],
                answer: 'know',
              },
            ],
          },
        ],
      },

      // Dərs 3.2 — Uncountable nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.2 — Uncountable nouns',
        cards: [

          // ── Ekran 1: Uncountable — əsas qaydalar ────────
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər (Uncountable nouns)',
            content: 'Sayılmayan isimlər say bildirməyən, bölünməz kimi qəbul edilən isimlərdir.',
            table: [
              ['Xüsusiyyət',          'Nümunə'],
              ['Cəm forması yoxdur',  'milk, water, bread'],
              ['a / an almır',        '❌ a milk, a water'],
              ['Rəqəm işlənmir',      '❌ 3 milks'],
              ['"çox" → much',        'much milk'],
              ['"az" → little',       'little butter'],
              ['Fel tək gəlir',       'Water is important.'],
            ],
            tip: 'Much time was wasted. — fel tək, isim tək.',
          },

          // ── Ekran 2: Qruplar — Maye, Ərzaq ─────────────
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər — Qrup 1',
            content: 'Bu qruplar həmişə uncountable-dır:',
            table: [
              ['Qrup',      'Nümunələr'],
              ['Maye adları', 'water, milk, tea, coffee, juice, oil, wine'],
              ['Ərzaq adları', 'bread, butter, cheese, meat, rice, sugar, flour, salt'],
            ],
            tip: 'Bu isimlər qarşısında heç vaxt a / an işlənmir, cəmlənmir.',
          },

          // ── Ekran 3: Qruplar — Material, Metal, Digər ──
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər — Qrup 2',
            content: 'Daha geniş uncountable qrupları:',
            table: [
              ['Qrup',          'Nümunələr'],
              ['Material adları', 'silk, cotton, wool, wood, paper, glass, marble'],
              ['Metal adları',    'iron, silver, gold, bronze'],
              ['Digər',           'advice, information, progress, traffic, knowledge,\nluggage, furniture, news, weather, money, work,\nrain, snow, sand, dust'],
            ],
            note: 'Diqqət: "news" görünüşcə cəm kimi görünür, amma tekdir: "The news is good."',
          },

          // ── Mini-check: Uncountable ──────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"furniture" hansı növ isimdir?',
                options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract'],
                answer: 'Uncountable',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'The news are good.',
                  'The news is good.',
                  'A news is good.',
                  'Many news are good.',
                ],
                answer: 'The news is good.',
              },
              {
                q: '"rice" uncountable olduğu üçün necə işlənir?',
                options: [
                  'a rice, many rices',
                  'much rice, little rice',
                  'few rice, a rice',
                  'rices are, a rice is',
                ],
                answer: 'much rice, little rice',
              },
              {
                q: 'Hansı söz countable-dır?',
                options: ['luggage', 'sand', 'student', 'wool'],
                answer: 'student',
              },
              {
                q: '"Much time ___ wasted." — boşluğa nə gəlir?',
                options: ['were', 'are', 'was', 'have been'],
                answer: 'was',
              },
              {
                q: 'Aşağıdakılardan hansı uncountable-dır?',
                options: ['book', 'teacher', 'advice', 'student'],
                answer: 'advice',
              },
            ],
          },
        ],
      },

      // Dərs 3.3 — Much / Many / Few / Little / A lot of
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.3 — Much · Many · Few · Little · A lot of',
        cards: [

          // ── Ekran 1: Müqayisə cədvəli ───────────────────
          {
            type: 'lesson',
            title: 'Much / Many / Few / Little — müqayisə',
            content: 'Bu dörd söz isim növünə görə fərqlənir:',
            table: [
              ['Söz',    'İsim növü',        'Məna', 'Nümunə'],
              ['many',   'countable (cəm)',  'çox',  'many books'],
              ['much',   'uncountable (tək)','çox',  'much water'],
              ['few',    'countable (cəm)',  'az',   'few students'],
              ['little', 'uncountable (tək)','az',   'little time'],
            ],
            tip: 'many / much — çox. few / little — az. Countable → many/few. Uncountable → much/little.',
          },

          // ── Ekran 2: A lot of — tam izah ────────────────
          {
            type: 'lesson',
            title: 'A lot of — nə vaxt işlənir?',
            content: '"a lot of" həm countable, həm uncountable, həm mücərrəd isimlərlə işlənir.\n\nAncaq yalnız TƏSDİQ cümlədə işlənir.',
            table: [
              ['Cümlə növü', 'Düzgün forma',              'Yanlış'],
              ['Təsdiq',     'There are a lot of cars.',   '—'],
              ['Sual',       'Are there many cars?',       '❌ a lot of cars?'],
              ['İnkar',      'There aren\'t many cars.',   '❌ a lot of cars.'],
            ],
            examples: [
              { word: 'A lot of students are in the yard.', az: 'countable → fel cəm' },
              { word: 'A lot of water is wasted.',          az: 'uncountable → fel tək' },
            ],
          },

          // ── Ekran 3: A lot (zərf) · A few / A little ───
          {
            type: 'lesson',
            title: 'A lot (zərf) · A few · A little',
            content: '"a lot" feldən SONRA gəlir — zərf olur, "of" işlənmir:',
            examples: [
              { word: 'He reads a lot.',   az: 'O çox oxuyur.' },
              { word: 'He reads much.',    az: 'Eyni məna.' },
            ],
            table: [
              ['İfadə',    'İsim növü',   'Məna',      'Çalar'],
              ['few',      'countable',   'az',        'mənfi — yetərsiz'],
              ['a few',    'countable',   'bir neçə',  'müsbət — var'],
              ['little',   'uncountable', 'az',        'mənfi — yetərsiz'],
              ['a little', 'uncountable', 'bir az',    'müsbət — var'],
            ],
            note: 'I have few books. I can\'t give you one.\nI have a few books. I can give you one.',
          },

          // ── Mini-check: Much/Many/Few/Little/A lot of ───
          {
            type: 'mini_check',
            questions: [
              {
                q: '"There isn\'t ___ time left." — boşluğa nə gəlir?',
                options: ['many', 'few', 'much', 'a lot of'],
                answer: 'much',
              },
              {
                q: '"I have ___ friends, so I feel lonely." — doğru variant?',
                options: ['a few', 'few', 'little', 'a little'],
                answer: 'few',
              },
              {
                q: '"Are there ___ students in the class?" — doğru variant?',
                options: ['much', 'a lot of', 'many', 'little'],
                answer: 'many',
              },
              {
                q: '"I have ___ money, I can help you." — doğru variant?',
                options: ['few', 'little', 'a few', 'a little'],
                answer: 'a little',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Are there a lot of cars?',
                  'There are a lot of cars.',
                  'There aren\'t a lot of cars.',
                  'Is there a lot of cars?',
                ],
                answer: 'There are a lot of cars.',
              },
              {
                q: '"He speaks ___." — zərf kimi doğru variant?',
                options: ['much money', 'a lot of', 'a lot', 'many'],
                answer: 'a lot',
              },
              {
                q: '"A lot of information ___ ready." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"I have ___ books. I can give you one." — doğru variant?',
                options: ['few', 'little', 'a few', 'a little'],
                answer: 'a few',
              },
            ],
          },
        ],
      },

      // ── Bölmə 3 — Ümumi Quiz ────────────────────────────
      [
        // Countable vs Uncountable
        { en: 'student',     tr: 'Countable',   wrong: 'Uncountable' },
        { en: 'milk',        tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'furniture',   tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'book',        tr: 'Countable',    wrong: 'Uncountable' },
        { en: 'advice',      tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'teacher',     tr: 'Countable',    wrong: 'Uncountable' },
        { en: 'knowledge',   tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'rice',        tr: 'Uncountable',  wrong: 'Countable'  },

        // many / much / few / little
        { en: 'Çox kitab → ____',   tr: 'many books',   wrong: 'much books'   },
        { en: 'Çox su → ____',      tr: 'much water',   wrong: 'many water'   },
        { en: 'Az tələbə → ____',   tr: 'few students', wrong: 'little students' },
        { en: 'Az vaxt → ____',     tr: 'little time',  wrong: 'few time'     },

        // a few / a little
        { en: 'Bir neçə kitabım var → ____', tr: 'a few books',   wrong: 'few books'   },
        { en: 'Bir az pulum var → ____',     tr: 'a little money',wrong: 'little money' },

        // a lot of
        { en: 'Təsdiq: Çox maşın var → ____', tr: 'a lot of cars',  wrong: 'many cars'   },
        { en: 'Sual: Çox maşın var? → ____',  tr: 'many cars?',     wrong: 'a lot of cars?' },

        // fel uyğunluğu
        { en: 'A lot of water ___ wasted.',      tr: 'is',  wrong: 'are' },
        { en: 'A lot of students ___ in yard.',  tr: 'are', wrong: 'is'  },
        { en: 'Much time ___ wasted.',           tr: 'was', wrong: 'were'},
        { en: 'The news ___ good.',              tr: 'is',  wrong: 'are' },

        // zərf
        { en: 'O çox oxuyur → He reads ____',   tr: 'a lot',        wrong: 'a lot of'   },
      ],

     // ── Test 1 — Bölmə 1, 2, 3 yekun testi ─────────────
      [
        // Bölmə 1 — Quruluş
        { en: '"railway" hansı quruluş?',           tr: 'Compound noun',   wrong: 'Derivative noun' },
        { en: '"teacher" hansı quruluş?',           tr: 'Derivative noun', wrong: 'Simple noun'     },
        { en: '"rain" hansı quruluş?',              tr: 'Simple noun',     wrong: 'Compound noun'   },
        { en: '"toothbrush" hansı quruluş?',        tr: 'Compound noun',   wrong: 'Simple noun'     },
        { en: '"kindness" hansı quruluş?',          tr: 'Derivative noun', wrong: 'Compound noun'   },

        // Bölmə 1 — Şəkilçilər
        { en: 'teach → ____',                       tr: 'teacher',         wrong: 'teachness'       },
        { en: 'free → ____',                        tr: 'freedom',         wrong: 'freehood'        },
        { en: 'strong → ____',                      tr: 'strength',        wrong: 'strongness'      },
        { en: '"heroism" hansı şəkilçi?',           tr: '-ism',            wrong: '-hood'           },
        { en: '"darkness" hansı şəkilçi?',          tr: '-ness',           wrong: '-dom'            },
        { en: '"friendship" hansı şəkilçi?',        tr: '-ship',           wrong: '-ism'            },
        { en: 'develop → ____',                     tr: 'development',     wrong: 'developness'     },

        // Bölmə 2 — Common / Proper
        { en: '"August" hansı növ?',                tr: 'Proper noun',     wrong: 'Common noun'     },
        { en: '"a lake" hansı növ?',                tr: 'Common noun',     wrong: 'Proper noun'     },
        { en: '"Tuesday" hansı növ?',               tr: 'Proper noun',     wrong: 'Common noun'     },

        // Bölmə 2 — Concrete / Abstract
        { en: '"happiness" hansı növ?',             tr: 'Abstract',        wrong: 'Concrete'        },
        { en: '"a table" hansı növ?',               tr: 'Concrete',        wrong: 'Abstract'        },
        { en: '"freedom" hansı növ?',               tr: 'Abstract',        wrong: 'Concrete'        },

        // Bölmə 2 — Artıkl qaydası
        { en: '"a terrible storm" — artıkl niyə?',  tr: 'Sifət var',       wrong: 'Countable-dır'   },
        { en: '"___ hard life" — boşluğa nə?',      tr: 'a',               wrong: 'the'             },
        { en: 'actor → ____',                       tr: 'actress',         wrong: 'actoress'        },

        // Bölmə 3 — Countable / Uncountable
        { en: 'Hansı countable-dır?',               tr: 'student',         wrong: 'furniture'       },
        { en: 'Hansı uncountable-dır?',             tr: 'advice',          wrong: 'book'            },
        { en: '"rice" hansı növ?',                  tr: 'Uncountable',     wrong: 'Countable'       },
        { en: 'The news ___ good.',                 tr: 'is',              wrong: 'are'             },

        // Bölmə 3 — Many / Much / Few / Little
        { en: 'Çox kitab → ____',                   tr: 'many books',      wrong: 'much books'      },
        { en: 'Az vaxt → ____',                     tr: 'little time',     wrong: 'few time'        },
        { en: 'There isn\'t ___ time.',             tr: 'much',            wrong: 'many'            },
        { en: 'Are there ___ students?',            tr: 'many',            wrong: 'much'            },

        // Bölmə 3 — A few / A little
        { en: 'Pulum var, kömək edərəm → ____',     tr: 'a little money',  wrong: 'little money'    },
        { en: 'Kitabım var, verə bilərəm → ____',   tr: 'a few books',     wrong: 'few books'       },

        // Bölmə 3 — A lot of / A lot
        { en: 'There is ___ information.',          tr: 'a lot of',        wrong: 'many'            },
        { en: 'He speaks ____.',                    tr: 'a lot',           wrong: 'a lot of'        },
        { en: 'Sual cümləsində → ____',             tr: 'many cars?',      wrong: 'a lot of cars?'  },
        { en: 'A lot of water ___ wasted.',         tr: 'is',              wrong: 'are'             },
      ],

 
   // ── Bölmə 4 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 4 — Kollektiv isimlər · Topluluq bildirən isimlər',
      },

      // Dərs 4.1 — Collective nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.1 — Collective nouns: family, crowd, crew',
        cards: [

          // ── Ekran 1: Kollektiv isimlər ───────────────────
          {
            type: 'lesson',
            title: 'Kollektiv isimlər (Collective nouns)',
            content: 'Kollektiv isimlər bir ad altında bir neçə nəfər və ya əşyanı bildirən isimlərdir.',
            examples: [
              { word: 'family',  az: 'ailə' },
              { word: 'crowd',   az: 'izdiham' },
              { word: 'company', az: 'şirkət, dəstə' },
              { word: 'crew',    az: 'ekipaj, heyət' },
            ],
            tip: 'Kollektiv isimlər sayılan isimlərdir — tək və cəm olurlar. Cəm olduqda fel də cəm gəlir.',
          },

          // ── Mini-check: Kollektiv isimlər ───────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: 'Kollektiv isimlər hansı növ isimdir?',
                options: ['Sayılmayan', 'Sayılan', 'Mücərrəd', 'Xüsusi'],
                answer: 'Sayılan',
              },
              {
                q: '"The crowds ___ enormous." — boşluğa nə gəlir?',
                options: ['was', 'is', 'were', 'has been'],
                answer: 'were',
              },
              {
                q: 'Hansı söz kollektiv isimdir?',
                options: ['happiness', 'crew', 'milk', 'Monday'],
                answer: 'crew',
              },
            ],
          },

          // ── Ekran 2: Family qaydası ──────────────────────
          {
            type: 'lesson',
            title: 'Family — tək mi, cəm mi?',
            content: '"family" sözü digər kollektiv isimlərdən fərqli olaraq həm tək, həm cəm fel ala bilir.\n\nQayda:\n• Ailə bütövlükdə götürülərsə → fel təkdə olur\n• Ailənin üzvləri ayrı-ayrılıqda götürülərsə → fel cəmdə olur',
            examples: [
              { word: 'My family is large.',         az: 'ailə bir bütün kimi' },
              { word: 'My family are early risers.', az: 'hər bir üzv ayrıca' },
            ],
            note: 'Hər iki halda da "family" sözü cəmlik şəkilçisi almır — yəni bu kontekstdə "families" forması işlənmir.',
          },

          // ── Mini-check: Family ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"My family ___ large." — ailə bir bütün kimi. Boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"My family ___ early risers." — hər üzv ayrıca. Boşluğa nə gəlir?',
                options: ['is', 'was', 'has', 'are'],
                answer: 'are',
              },
              {
                q: '"families" forması bu kontekstdə işlənirmi?',
                options: ['Bəli, həmişə', 'Xeyr, işlənmir', 'Bəli, bəzən', 'Yalnız cəmdə'],
                answer: 'Xeyr, işlənmir',
              },
            ],
          },

          // ── Ekran 3: Police, Cattle, Poultry ────────────
          {
            type: 'lesson',
            title: 'Police · Cattle · Poultry',
            content: 'Bu isimlər cəm şəkilçisi qəbul etmir, lakin həmişə cəmlik bildirir və özündən sonra həmişə cəm fel tələb edir.',
            table: [
              ['İsim',    'Mənası',     'Fel'],
              ['police',  'polis',      'həmişə cəm'],
              ['cattle',  'mal-qara',   'həmişə cəm'],
              ['poultry', 'ev quşları', 'həmişə cəm'],
            ],
            examples: [
              { word: 'The police were there.',                  az: '✅' },
              { word: 'The cattle were grazing in the meadow.', az: '✅' },
              { word: 'The poultry are kept in the barn.',       az: '✅' },
            ],
            note: 'Bu isimlərə a / an artiklı işlənmir, cəm şəkilçisi də almırlar.',
          },

          // ── Mini-check: Police/Cattle/Poultry ───────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"The police ___ there." — boşluğa nə gəlir?',
                options: ['was', 'is', 'were', 'has been'],
                answer: 'were',
              },
              {
                q: 'Bu isimlər cəm şəkilçisi alırmı?',
                options: ['Bəli', 'Xeyr', 'Bəzən', 'Yalnız "police"'],
                answer: 'Xeyr',
              },
              {
                q: '"a cattle" forması düzgündürmü?',
                options: ['Bəli', 'Xeyr, a / an işlənmir', 'Bəli, tək halda', 'Bəzən işlənir'],
                answer: 'Xeyr, a / an işlənmir',
              },
            ],
          },

        ],
      },

      // Dərs 4.2 — People, Money, Youth, Linen
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.2 — People · Money · Youth · Linen',
        cards: [

          // ── Ekran 1: People ──────────────────────────────
          {
            type: 'lesson',
            title: 'People — xüsusi qayda',
            content: '"people" ismi həmişə cəmdir və özündən sonra həmişə cəm fel gəlir.',
            examples: [
              { word: 'People are strange sometimes.',     az: 'cəm fel' },
              { word: 'Many people were at the concert.', az: 'cəm fel' },
            ],
            note: 'İstisna: "people" xalq mənasında işləndikdə tək olur və -s şəkilçisi qəbul edə bilir.\n• The people of Azerbaijan — Azərbaycan xalqı (tək)\n• The peoples of the world — dünyanın xalqları (bir neçə xalq, cəm)',
          },

          // ── Mini-check: People ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"People ___ strange sometimes." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"peoples" forması nə vaxt işlənir?',
                options: ['Həmişə', 'Heç vaxt', 'Bir neçə xalq mənasında', 'Yalnız sual cümlədə'],
                answer: 'Bir neçə xalq mənasında',
              },
              {
                q: '"The people of Azerbaijan" — burada "people" hansı mənadadır?',
                options: ['İnsanlar (cəm)', 'Xalq (tək)', 'Dəstə', 'Kollektiv isim'],
                answer: 'Xalq (tək)',
              },
            ],
          },

          // ── Ekran 2: Money, Youth, Linen ─────────────────
          {
            type: 'lesson',
            title: 'Money · Youth · Linen',
            content: 'Bu isimlər görünüşcə cəm kimi görünə bilər, lakin həmişə tək formada işlənir və tək fel tələb edir.',
            table: [
              ['İsim',  'Mənası',        'Qayda'],
              ['money', 'pul',           'həmişə tək'],
              ['youth', 'gənclik',       'həmişə tək'],
              ['linen', 'mələfə, kətan', 'həmişə tək'],
            ],
            examples: [
              { word: 'Money makes money.',    az: 'tək fel' },
              { word: 'Much money was spent.', az: 'much ilə — uncountable kimi' },
            ],
            tip: '"çox" mənasında much, "az" mənasında little ilə işlənir. Sayılmır.',
          },

          // ── Mini-check: Money/Youth/Linen ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Money ___ money." — boşluğa nə gəlir?',
                options: ['make', 'are making', 'makes', 'have made'],
                answer: 'makes',
              },
              {
                q: '"money" ilə "çox" mənasında hansı söz işlənir?',
                options: ['many', 'few', 'much', 'a few'],
                answer: 'much',
              },
              {
                q: '"money" sayılırmı?',
                options: ['Bəli', 'Xeyr', 'Bəzən', 'Yalnız cəmdə'],
                answer: 'Xeyr',
              },
              {
                q: 'Hansı söz həmişə tək formada işlənir?',
                options: ['crowd', 'crew', 'youth', 'family'],
                answer: 'youth',
              },
            ],
          },

        ],
      },

      // ── Bölmə 4 — Ümumi Quiz ─────────────────────────────
      [
        { en: 'crowd',   tr: 'Kollektiv isim', wrong: 'Mücərrəd isim' },
        { en: 'family',  tr: 'Kollektiv isim', wrong: 'Sayılmayan'    },
        { en: 'crew',    tr: 'Kollektiv isim', wrong: 'Xüsusi isim'   },

        { en: 'The crowds ___ enormous.',              tr: 'were',  wrong: 'was'  },
        { en: 'My family ___ large. (bir bütün)',      tr: 'is',    wrong: 'are'  },
        { en: 'My family ___ early risers. (üzvlər)', tr: 'are',   wrong: 'is'   },
        { en: 'The police ___ there.',                 tr: 'were',  wrong: 'was'  },
        { en: 'The cattle ___ grazing.',               tr: 'were',  wrong: 'was'  },
        { en: 'People ___ strange sometimes.',         tr: 'are',   wrong: 'is'   },
        { en: 'Money ___ money.',                      tr: 'makes', wrong: 'make' },

        { en: '"a cattle" düzgündürmü?',        tr: 'Xeyr', wrong: 'Bəli' },
        { en: '"polices" forması düzgündürmü?', tr: 'Xeyr', wrong: 'Bəli' },

        { en: 'The peoples of the world — nə mənada?', tr: 'Bir neçə xalq',    wrong: 'İnsanlar' },
        { en: 'The people of Azerbaijan — nə mənada?', tr: 'Azərbaycan xalqı', wrong: 'İnsanlar' },

        { en: 'money — "çox" mənasında ____', tr: 'much money',   wrong: 'many money' },
        { en: 'money — "az" mənasında ____',  tr: 'little money', wrong: 'few money'  },
        { en: 'youth',  tr: 'həmişə tək', wrong: 'həmişə cəm' },
        { en: 'linen',  tr: 'həmişə tək', wrong: 'həmişə cəm' },
        { en: 'police', tr: 'həmişə cəm', wrong: 'həmişə tək' },
        { en: 'cattle', tr: 'həmişə cəm', wrong: 'həmişə tək' },
      ],

   // ── Bölmə 5 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 5 — Plural nouns (Cəm formaları) — tam qaydalar',
      },

      // Dərs 5.1 — -s / -es qaydası
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.1 — -s / -es qaydası',
        cards: [

          // ── Ekran 1: Əsas qayda ──────────────────────────
          {
            type: 'lesson',
            title: 'Cəm formasının düzəldilməsi',
            content: 'İsimlərin cəm forması əsasən –s və ya –es şəkilçisi vasitəsilə düzəldilir.\n\nAdi qayda → -s əlavə et:',
            examples: [
              { word: 'a boy → boys',   az: '' },
              { word: 'a girl → girls', az: '' },
              { word: 'a pen → pens',   az: '' },
            ],
            tip: 'Sonu s, ss, sh, ch, tch, x, z, o hərfləri ilə bitən isimlərin cəmi -es ilə düzəlir.',
          },

          // ── Ekran 2: -es cədvəli ─────────────────────────
          {
            type: 'lesson',
            title: '-es əlavə edilən hallar',
            content: 'Sonu aşağıdakı hərflərlə bitən isimlər -es alır:',
            table: [
              ['Tək',     'Cəm'],
              ['a box',   'boxes'],
              ['a bench', 'benches'],
              ['a bus',   'buses'],
              ['a bush',  'bushes'],
              ['a watch', 'watches'],
            ],
          },

          // ── Mini-check: -s / -es ─────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"box" sözünün cəmi necədir?',
                options: ['boxs', 'boxes', 'boxies', 'boxen'],
                answer: 'boxes',
              },
              {
                q: '"bench" sözünün cəmi necədir?',
                options: ['benchs', 'benchies', 'benches', 'benchens'],
                answer: 'benches',
              },
              {
                q: '"pen" sözünün cəmi necədir?',
                options: ['penes', 'pens', 'penies', 'pensen'],
                answer: 'pens',
              },
              {
                q: 'Hansı sözün cəmi -es ilə düzəlir?',
                options: ['boy', 'girl', 'watch', 'pen'],
                answer: 'watch',
              },
              {
                q: '"bus" sözünün cəmi necədir?',
                options: ['buss', 'busies', 'bus', 'buses'],
                answer: 'buses',
              },
            ],
          },
        ],
      },

      // Dərs 5.2 — Qaydasız cəm formaları
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.2 — Qaydasız cəm formaları',
        cards: [

          // ── Ekran 1: 7 qaydasız isim ─────────────────────
          {
            type: 'lesson',
            title: 'Kökdəki saitin dəyişməsi ilə cəm',
            content: 'İngilis dilində 7 isim var ki, onların cəm forması kökdəki saitin dəyişməsi ilə düzəlir. Bunları əzbərləmək lazımdır.',
            table: [
              ['Tək',     'Cəm',      'Tələffüz'],
              ['a man',   'men',      '[men]'],
              ['a woman', 'women',    '[wimin]'],
              ['a foot',  'feet',     '[fiːt]'],
              ['a tooth', 'teeth',    '[tiːθ]'],
              ['a goose', 'geese',    '[giːs]'],
              ['a mouse', 'mice',     '[mais]'],
              ['a louse', 'lice',     '[lais]'],
            ],
            note: 'Bir isim isə həm kök saiti dəyişir, həm də -en şəkilçisi alır: a child → children',
          },

          // ── Mini-check: Qaydasız cəm ─────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"man" sözünün cəmi necədir?',
                options: ['mans', 'manes', 'men', 'menn'],
                answer: 'men',
              },
              {
                q: '"tooth" sözünün cəmi necədir?',
                options: ['tooths', 'toothes', 'teeths', 'teeth'],
                answer: 'teeth',
              },
              {
                q: '"child" sözünün cəmi necədir?',
                options: ['childs', 'childes', 'children', 'childen'],
                answer: 'children',
              },
              {
                q: '"mouse" sözünün cəmi necədir?',
                options: ['mouses', 'mices', 'mice', 'mouse'],
                answer: 'mice',
              },
              {
                q: '"foot" sözünün cəmi necədir?',
                options: ['foots', 'footes', 'feets', 'feet'],
                answer: 'feet',
              },
            ],
          },
        ],
      },

      // Dərs 5.3 — Man/Woman olan mürəkkəb isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.3 — Man/Woman olan mürəkkəb isimlər',
        cards: [

          // ── Ekran 1: Postman → Postmen ───────────────────
          {
            type: 'lesson',
            title: 'Postman → Postmen',
            content: 'Tərkibində man və ya woman sözü olan mürəkkəb isimlərin cəmini düzəldərkən man → men, woman → women olur.',
            table: [
              ['Tək',           'Cəm'],
              ['postman',       'postmen'],
              ['policeman',     'policemen'],
              ['woman writer',  'women writers'],
              ['woman doctor',  'women doctors'],
            ],
            note: 'Vacib istisna: Tərkibində "man" morfemi olan bəzi sözlər bu qaydaya tabe olmur — onların cəmi adi -s ilə düzəlir:\n• German → Germans\n• Roman → Romans\n• Norman → Normans',
          },

          // ── Mini-check: Man/Woman ─────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"postman" sözünün cəmi necədir?',
                options: ['postmans', 'postmens', 'postmen', 'postmanes'],
                answer: 'postmen',
              },
              {
                q: '"German" sözünün cəmi necədir?',
                options: ['Germaen', 'Germanen', 'Germens', 'Germans'],
                answer: 'Germans',
              },
              {
                q: '"woman doctor" sözünün cəmi necədir?',
                options: ['woman doctors', 'women doctor', 'women doctors', 'womans doctors'],
                answer: 'women doctors',
              },
              {
                q: 'Nə üçün "Roman" → "Romans" olur, "Romanmen" yox?',
                options: [
                  'Çünki qaydasız isimdir',
                  'Çünki "man" burada ayrı morfem deyil',
                  'Çünki xüsusi isimdir',
                  'Çünki -es alır',
                ],
                answer: 'Çünki "man" burada ayrı morfem deyil',
              },
            ],
          },
        ],
      },

      // Dərs 5.4 — -f / -fe ilə bitən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.4 — -f / -fe → -ves',
        cards: [

          // ── Ekran 1: Wife → Wives ─────────────────────────
          {
            type: 'lesson',
            title: 'Wife → Wives',
            content: 'İsim -f və ya -fe ilə bitirsə, cəm düzəldərkən f / fe → v olur və -es əlavə edilir.',
            table: [
              ['Tək',   'Cəm',    'Tələffüz'],
              ['wife',  'wives',  '[waivz]'],
              ['knife', 'knives', '[naivz]'],
              ['leaf',  'leaves', '[liːvz]'],
              ['loaf',  'loaves', '[louvz]'],
              ['half',  'halves', '[hɑːvz]'],
              ['life',  'lives',  '[laivz]'],
              ['wolf',  'wolves', '[wulvz]'],
              ['shelf', 'shelves','[ʃelvz]'],
            ],
          },

          // ── Ekran 2: İstisnalar ───────────────────────────
          {
            type: 'lesson',
            title: '-f / -ff dəyişməyən istisnalar',
            content: 'Bu sözlər -f / -ff ilə bitsə də dəyişmir, sadəcə -s alır:',
            table: [
              ['Tək',           'Cəm'],
              ['a roof',        'roofs'],
              ['a chief',       'chiefs'],
              ['a cliff',       'cliffs'],
              ['a handkerchief','handkerchiefs'],
            ],
            note: 'İki forması olan isimlər:\n• hoof → hoofs / hooves\n• scarf → scarfs / scarves',
          },

          // ── Mini-check: -f/-fe ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"wife" sözünün cəmi necədir?',
                options: ['wifes', 'wifes', 'wives', 'wiven'],
                answer: 'wives',
              },
              {
                q: '"roof" sözünün cəmi necədir?',
                options: ['rooves', 'roofen', 'roofes', 'roofs'],
                answer: 'roofs',
              },
              {
                q: '"leaf" sözünün cəmi necədir?',
                options: ['leafs', 'leafes', 'leaves', 'leaven'],
                answer: 'leaves',
              },
              {
                q: '"shelf" sözünün cəmi necədir?',
                options: ['shelfs', 'shelfes', 'shelves', 'shelfen'],
                answer: 'shelves',
              },
              {
                q: '"chief" sözünün cəmi necədir?',
                options: ['chieves', 'chiefen', 'chiefes', 'chiefs'],
                answer: 'chiefs',
              },
            ],
          },
        ],
      },

      // Dərs 5.5 — -o ilə bitən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.5 — -o → -oes: potato, hero',
        cards: [

          // ── Ekran 1: -oes qaydası ─────────────────────────
          {
            type: 'lesson',
            title: 'Potato → Potatoes',
            content: 'İsim -o hərfi ilə bitirsə cəmi -es ilə düzəlir:',
            table: [
              ['Tək',      'Cəm'],
              ['potato',   'potatoes'],
              ['hero',     'heroes'],
              ['negro',    'negroes'],
              ['tomato',   'tomatoes'],
              ['volcano',  'volcanoes'],
            ],
          },

          // ── Ekran 2: İstisnalar ───────────────────────────
          {
            type: 'lesson',
            title: '-o istisnalar — yalnız -s alır',
            content: 'Əcnəbi mənşəli (xüsusilə musiqi, texnologiya) sözlər adətən yalnız -s alır:',
            table: [
              ['Tək',    'Cəm'],
              ['radio',  'radios'],
              ['piano',  'pianos'],
              ['solo',   'solos'],
              ['zero',   'zeros'],
              ['photo',  'photos'],
              ['zoo',    'zoos'],
              ['video',  'videos'],
            ],
            tip: 'Əzbərləmə qaydası: Əcnəbi mənşəli sözlər adətən yalnız -s alır.',
          },

          // ── Mini-check: -o ───────────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"potato" sözünün cəmi necədir?',
                options: ['potatos', 'potatoies', 'potatoes', 'potatens'],
                answer: 'potatoes',
              },
              {
                q: '"radio" sözünün cəmi necədir?',
                options: ['radioes', 'radien', 'radios', 'radioies'],
                answer: 'radios',
              },
              {
                q: '"hero" sözünün cəmi necədir?',
                options: ['heros', 'heroies', 'heroen', 'heroes'],
                answer: 'heroes',
              },
              {
                q: '"piano" sözünün cəmi necədir?',
                options: ['pianoes', 'pianoen', 'pianos', 'pianoies'],
                answer: 'pianos',
              },
              {
                q: 'Hansı söz -es ilə cəmlənir?',
                options: ['radio', 'video', 'tomato', 'photo'],
                answer: 'tomato',
              },
            ],
          },
        ],
      },

      // Dərs 5.6 — -y qaydası
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.6 — -y qaydası: city→cities, day→days',
        cards: [

          // ── Ekran 1: Samit + y ────────────────────────────
          {
            type: 'lesson',
            title: 'City → Cities · Day → Days',
            content: 'İsim -y ilə bitirsə iki variant var:\n\n1. y-dən əvvəl SAMİT gələrsə → y → i olur, -es əlavə edilir:',
            table: [
              ['Tək',      'Cəm'],
              ['city',     'cities'],
              ['family',   'families'],
              ['factory',  'factories'],
              ['victory',  'victories'],
              ['baby',     'babies'],
              ['lady',     'ladies'],
            ],
          },

          // ── Ekran 2: Sait + y ─────────────────────────────
          {
            type: 'lesson',
            title: 'Sait + y → sadəcə -s',
            content: '2. y-dən əvvəl SAİT gələrsə → y dəyişmir, sadəcə -s əlavə edilir:',
            table: [
              ['Tək',      'Cəm'],
              ['a day',    'days'],
              ['a boy',    'boys'],
              ['a toy',    'toys'],
              ['a key',    'keys'],
              ['a monkey', 'monkeys'],
            ],
            tip: 'Qayda: samit + y → -ies. Sait + y → -s.',
          },

          // ── Mini-check: -y qaydası ───────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"city" sözünün cəmi necədir?',
                options: ['citys', 'cityies', 'cities', 'cityes'],
                answer: 'cities',
              },
              {
                q: '"day" sözünün cəmi necədir?',
                options: ['daies', 'dayes', 'daies', 'days'],
                answer: 'days',
              },
              {
                q: '"baby" sözünün cəmi necədir?',
                options: ['babys', 'babyies', 'babies', 'babyes'],
                answer: 'babies',
              },
              {
                q: '"monkey" sözünün cəmi necədir?',
                options: ['monkies', 'monkeies', 'monkeys', 'monkeyes'],
                answer: 'monkeys',
              },
              {
                q: '"factory" sözünün cəmi necədir?',
                options: ['factorys', 'factoryies', 'factories', 'factoryes'],
                answer: 'factories',
              },
            ],
          },
        ],
      },

      // ── Bölmə 5 — Ümumi Quiz ─────────────────────────────
      [
        // -s / -es
        { en: 'box → ____',   tr: 'boxes',   wrong: 'boxs'    },
        { en: 'pen → ____',   tr: 'pens',    wrong: 'penes'   },
        { en: 'watch → ____', tr: 'watches', wrong: 'watchs'  },
        { en: 'bus → ____',   tr: 'buses',   wrong: 'buss'    },
        { en: 'bench → ____', tr: 'benches', wrong: 'benchs'  },

        // Qaydasız cəm
        { en: 'man → ____',   tr: 'men',      wrong: 'mans'    },
        { en: 'tooth → ____', tr: 'teeth',    wrong: 'tooths'  },
        { en: 'child → ____', tr: 'children', wrong: 'childs'  },
        { en: 'mouse → ____', tr: 'mice',     wrong: 'mouses'  },
        { en: 'foot → ____',  tr: 'feet',     wrong: 'foots'   },
        { en: 'goose → ____', tr: 'geese',    wrong: 'gooses'  },

        // Man/Woman mürəkkəb
        { en: 'postman → ____',      tr: 'postmen',      wrong: 'postmans'     },
        { en: 'policeman → ____',    tr: 'policemen',    wrong: 'policemans'   },
        { en: 'woman doctor → ____', tr: 'women doctors',wrong: 'woman doctors'},
        { en: 'German → ____',       tr: 'Germans',      wrong: 'Germens'      },

        // -f / -fe
        { en: 'wife → ____',  tr: 'wives',  wrong: 'wifes'  },
        { en: 'leaf → ____',  tr: 'leaves', wrong: 'leafs'  },
        { en: 'roof → ____',  tr: 'roofs',  wrong: 'rooves' },
        { en: 'shelf → ____', tr: 'shelves',wrong: 'shelfs' },
        { en: 'chief → ____', tr: 'chiefs', wrong: 'chieves'},

        // -o
        { en: 'potato → ____', tr: 'potatoes', wrong: 'potatos' },
        { en: 'radio → ____',  tr: 'radios',   wrong: 'radioes' },
        { en: 'hero → ____',   tr: 'heroes',   wrong: 'heros'   },
        { en: 'piano → ____',  tr: 'pianos',   wrong: 'pianoes' },

        // -y
        { en: 'city → ____',    tr: 'cities',   wrong: 'citys'    },
        { en: 'day → ____',     tr: 'days',     wrong: 'daies'    },
        { en: 'baby → ____',    tr: 'babies',   wrong: 'babys'    },
        { en: 'monkey → ____',  tr: 'monkeys',  wrong: 'monkies'  },
        { en: 'factory → ____', tr: 'factories',wrong: 'factorys' },
      ],

      // ── Bölmə 6 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 6 — Xüsusi cəm halları',
      },

      // Dərs 6.1 — Yalnız tək formada işlənən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.1 — Yalnız tək formada işlənən isimlər',
        cards: [

          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'Həmişə tək — advice, information və başqaları',
            content: 'İngilis dilində bəzi isimlər var ki, onlar heç vaxt cəmlənmir, həmişə tək formada işlənir.\n\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə gəlir\n• Çox mənasında much, az mənasında little işlənir',
            table: [
              ['İsim',        'Mənası'],
              ['advice',      'məsləhət'],
              ['information', 'məlumat'],
              ['progress',    'nailiyyət, tərəqqi'],
              ['traffic',     'nəqliyyat'],
              ['knowledge',   'bilik'],
              ['luggage',     'yük, baqaj'],
              ['baggage',     'yük, baqaj'],
              ['furniture',   'mebel'],
            ],
            examples: [
              { word: 'Can you give me some advice?',  az: '✅ düzgün' },
              { word: 'Can you give me some advices?', az: '❌ yanlış' },
              { word: 'Much information is needed.',   az: 'much + tək fel' },
              { word: 'Little progress was made.',     az: 'little + tək fel' },
            ],
          },

          // ── Mini-check: Həmişə tək (1) ───────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"advice" sözünün cəm forması varmı?',
                options: ['Bəli, advices', 'Xeyr, cəmlənmir', 'Bəli, advicen', 'Bəzən işlənir'],
                answer: 'Xeyr, cəmlənmir',
              },
              {
                q: '"information" ilə "çox" mənasında hansı söz işlənir?',
                options: ['many', 'few', 'much', 'a few'],
                answer: 'much',
              },
              {
                q: '"Much progress ___ made." — boşluğa nə gəlir?',
                options: ['were', 'are', 'was', 'have been'],
                answer: 'was',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Can you give me some advices?',
                  'Can you give me some advice?',
                  'Can you give me an advice?',
                  'Can you give me a advice?',
                ],
                answer: 'Can you give me some advice?',
              },
              {
                q: '"furniture" hansı növ isimdir?',
                options: ['Countable', 'Proper noun', 'Uncountable', 'Collective'],
                answer: 'Uncountable',
              },
            ],
          },

          // ── Ekran 2: Hair və Fruit ───────────────────────
          {
            type: 'lesson',
            title: 'Hair · Fruit — xüsusi qaydalar',
            content: 'Bu iki ismin ayrıca qaydasına diqqət etmək lazımdır.',
            examples: [
              { word: 'Her hair is beautiful.',  az: 'hair — həmişə tək' },
              { word: 'His hair is short.',      az: 'tək fel — "is"' },
              { word: 'I like fruit.',           az: 'fruit — ümumi mənada tək' },
              { word: 'Fruit is useful.',        az: 'tək fel — "is"' },
            ],
            note: 'İstisna: "fruit" müxtəlif növ meyvələr mənasında işləndikdə cəm forması işlənə bilər:\nThere are a lot of fruits in our garden.\n— Bağımızda çoxlu (növ) meyvə var.',
          },

          // ── Mini-check: Hair / Fruit ─────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Her hair ___ beautiful." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"fruits" forması nə vaxt işlənə bilər?',
                options: [
                  'Həmişə',
                  'Heç vaxt',
                  'Müxtəlif növ meyvələr mənasında',
                  'Yalnız sual cümlədə',
                ],
                answer: 'Müxtəlif növ meyvələr mənasında',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Fruit are useful.',
                  'Fruits is useful.',
                  'Fruit is useful.',
                  'A fruit is useful.',
                ],
                answer: 'Fruit is useful.',
              },
            ],
          },
        ],
      },

      // Dərs 6.2 — Yalnız cəm formada işlənən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.2 — Yalnız cəm formada işlənən isimlər',
        cards: [

          // ── Ekran 1: Scissors, Trousers və s. ───────────
          {
            type: 'lesson',
            title: 'Həmişə cəm — scissors, trousers və başqaları',
            content: 'Bəzi isimlər həmişə cəm formada işlənir — sonunda –s var, tək forması yoxdur və həmişə cəm fel tələb edir.\n\nİki eyni hissədən ibarət olanlar:',
            table: [
              ['İsim',       'Mənası'],
              ['scissors',   'qayçı'],
              ['tongs',      'kəlbətin'],
              ['spectacles', 'eynək'],
              ['glasses',    'eynək, durbin'],
              ['scales',     'tərəzi'],
              ['trousers',   'şalvar'],
              ['jeans',      'cins şalvar'],
              ['tights',     'kolqotka'],
              ['pyjamas',    'pijama'],
              ['shorts',     'şort'],
              ['shoes',      'ayaqqabı'],
              ['gloves',     'əlcək'],
              ['mittens',    'tək barmaq əlcək'],
              ['boots',      'çəkmə'],
              ['socks',      'corab'],
              ['stockings',  'uzun corab'],
            ],
          },

          // ── Ekran 2: Digər həmişə cəm isimlər ───────────
          {
            type: 'lesson',
            title: 'Konkret əşya bildirən həmişə cəm isimlər',
            content: 'Bəzi konkret əşya bildirən isimlər də həmişə cəmdir:',
            table: [
              ['İsim',    'Mənası'],
              ['goods',   'mal, əmtəə'],
              ['stairs',  'pilləkən'],
              ['clothes', 'paltar'],
            ],
            examples: [
              { word: 'Where are my scissors?',  az: '✅ düzgün' },
              { word: 'Where is my scissors?',   az: '❌ yanlış' },
              { word: 'These trousers are new.', az: '✅ cəm fel' },
              { word: 'The clothes are clean.',  az: '✅ cəm fel' },
            ],
          },

          // ── Mini-check: Həmişə cəm (1) ───────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Where ___ my scissors?" — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"These trousers ___ new." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has been'],
                answer: 'are',
              },
              {
                q: 'Hansı isim həmişə cəm formada işlənir?',
                options: ['advice', 'furniture', 'scissors', 'information'],
                answer: 'scissors',
              },
              {
                q: '"clothes" sözü necə işlənir?',
                options: ['Həmişə tək', 'Həmişə cəm', 'Həm tək, həm cəm', 'Sayılmayan'],
                answer: 'Həmişə cəm',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'My jeans is blue.',
                  'My jeans are blue.',
                  'My jeans was blue.',
                  'A jeans is blue.',
                ],
                answer: 'My jeans are blue.',
              },
            ],
          },

          // ── Ekran 3: A pair of ───────────────────────────
          {
            type: 'lesson',
            title: 'A pair of — bir ədəd mənasında',
            content: 'Həmişə cəm olan bu isimlər bir ədəd mənasında işlənəndə "a pair of" ifadəsi ilə verilir.',
            examples: [
              { word: 'a pair of scissors', az: 'bir qayçı' },
              { word: 'a pair of trousers', az: 'bir şalvar' },
              { word: 'a pair of glasses',  az: 'bir eynək' },
              { word: 'a pair of shoes',    az: 'bir cüt ayaqqabı' },
              { word: 'a pair of gloves',   az: 'bir cüt əlcək' },
              { word: 'a pair of socks',    az: 'bir cüt corab' },
            ],
            note: 'İki, üç cüt mənasında:\n• two pairs of trousers — iki şalvar\n• three pairs of shoes — üç cüt ayaqqabı',
          },

          // ── Mini-check: A pair of ────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Bir qayçı" ingilis dilində necə deyilir?',
                options: ['a scissors', 'one scissors', 'a pair of scissors', 'scissor'],
                answer: 'a pair of scissors',
              },
              {
                q: '"two pairs of trousers" nə deməkdir?',
                options: ['iki cüt şalvar', 'iki şalvar', 'iki gödəkçə', 'iki cüt corab'],
                answer: 'iki şalvar',
              },
              {
                q: 'Hansı ifadə düzgündür?',
                options: ['a trouser', 'a trousers', 'a pair of trousers', 'one trouser'],
                answer: 'a pair of trousers',
              },
            ],
          },
        ],
      },

      // Dərs 6.3 — Formaca cəm, mənaca tək + eyni forma
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.3 — Formaca cəm, mənaca tək · Eyni forma',
        cards: [

          // ── Ekran 1: Holiday xüsusi qaydası ─────────────
          {
            type: 'lesson',
            title: 'Holiday — bayram yoxsa tətil?',
            content: '"holiday" sözü mənasına görə fərqli işlənir:',
            examples: [
              { word: 'Today is a holiday.',       az: 'bayram mənasında — tək fel' },
              { word: 'The holiday is tomorrow.',  az: 'bayram mənasında — tək fel' },
              { word: 'The holidays are over.',    az: 'tətil mənasında — cəm fel' },
              { word: 'My holidays were wonderful.', az: 'tətil mənasında — cəm fel' },
            ],
            tip: 'Bayram → tək. Tətil → cəm (-s alır).',
          },

          // ── Mini-check: Holiday ──────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Today ___ a holiday." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"The holidays ___ over." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has been'],
                answer: 'are',
              },
              {
                q: '"holidays" (cəm) nə mənasında işlənir?',
                options: ['Bayram', 'Tətil', 'Həm bayram, həm tətil', 'Heç biri'],
                answer: 'Tətil',
              },
            ],
          },

          // ── Ekran 2: News, Phonetics, Physics ───────────
          {
            type: 'lesson',
            title: 'News · Phonetics · Physics — sonunda -s var, amma tək',
            content: 'Bəzi isimlər var ki, sonunda -s şəkilçisi olmasına baxmayaraq həmişə təkdə işlənir.\n\nnews — xəbər:\n• Formaca cəmdir, mənaca təkdir\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə gəlir',
            examples: [
              { word: 'The news is good.',              az: '✅ düzgün' },
              { word: 'The news are good.',             az: '❌ yanlış' },
              { word: 'There is a lot of news today.',  az: '✅ tək fel' },
            ],
            note: 'Azərbaycan dilinə həm tək, həm cəmdə tərcümə oluna bilər:\nThe news is interesting. — Xəbər/Xəbərlər maraqlıdır.',
          },

          // ── Ekran 3: Elm adları ──────────────────────────
          {
            type: 'lesson',
            title: 'Elm adları — həmişə tək',
            content: 'Sonunda -s olmasına baxmayaraq həmişə tək, sayılmayan, artıklsız, özündən sonra fel tək:',
            table: [
              ['İsim',        'Mənası'],
              ['phonetics',   'fonetika'],
              ['physics',     'fizika'],
              ['optics',      'optika'],
              ['linguistics', 'dilçilik'],
              ['gymnastics',  'gimnastika'],
              ['economics',   'iqtisadiyyat'],
              ['mathematics', 'riyaziyyat'],
            ],
            examples: [
              { word: 'Phonetics is a branch of linguistics.', az: 'tək fel' },
              { word: 'Physics is difficult.',                 az: 'tək fel' },
            ],
          },

          // ── Mini-check: News / Elm adları ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"The news ___ good." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"Physics ___ difficult." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"a news" ifadəsi düzgündürmü?',
                options: ['Bəli', 'Xeyr, artıkl işlənmir', 'Bəli, tək mənasında', 'Bəzən'],
                answer: 'Xeyr, artıkl işlənmir',
              },
              {
                q: 'Hansı söz formaca cəm, mənaca təkdir?',
                options: ['trousers', 'scissors', 'news', 'clothes'],
                answer: 'news',
              },
            ],
          },

          // ── Ekran 4: Sheep, Fish, Deer ───────────────────
          {
            type: 'lesson',
            title: 'Sheep · Fish · Deer — tək də belədir, cəm də',
            content: 'Bəzi isimlər heç bir cəmlik şəkilçisi qəbul etmədən həm tək, həm cəm ola bilir.',
            table: [
              ['İsim',  'Tək',       'Cəm'],
              ['sheep', 'a sheep',   '5 sheep'],
              ['fish',  'a fish',    '5 fish'],
              ['deer',  'a deer',    '5 deer'],
              ['swine', 'a swine',   '5 swine'],
            ],
            examples: [
              { word: 'A sheep is in the garden.',    az: 'tək — fel tək' },
              { word: 'Five sheep are in the garden.',az: 'cəm — fel cəm' },
              { word: 'Some sheep are grazing.',      az: 'cəm — fel cəm' },
            ],
            note: '"fish" üçün xüsusi hal: Qarşısında different / various işləndikdə "fishes" forması işlənə bilər:\nThere are various fishes in the Caspian Sea.',
          },

          // ── Mini-check: Sheep / Fish / Deer ─────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Five sheep ___ in the garden." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"A deer ___ in the forest." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"fish" sözünün cəmi necədir?',
                options: ['fishes', 'fishies', 'fish', 'fishen'],
                answer: 'fish',
              },
              {
                q: '"fishes" forması nə vaxt işlənə bilər?',
                options: [
                  'Həmişə',
                  'Heç vaxt',
                  'Müxtəlif növ balıqlar mənasında',
                  'Yalnız sual cümlədə',
                ],
                answer: 'Müxtəlif növ balıqlar mənasında',
              },
              {
                q: 'Hansı söz tək də cəm də eyni formadadır?',
                options: ['man', 'child', 'deer', 'tooth'],
                answer: 'deer',
              },
            ],
          },
        ],
      },

      // ── Bölmə 6 — Ümumi Quiz ─────────────────────────────
      [
        // Həmişə tək
        { en: 'advice — cəmi varmı?',        tr: 'Xeyr',  wrong: 'Bəli'  },
        { en: 'furniture — cəmi varmı?',     tr: 'Xeyr',  wrong: 'Bəli'  },
        { en: 'Much progress ___ made.',     tr: 'was',   wrong: 'were'  },
        { en: 'Much information ___ needed.',tr: 'is',    wrong: 'are'   },

        // Hair / Fruit
        { en: 'Her hair ___ beautiful.',     tr: 'is',    wrong: 'are'   },
        { en: 'Fruit ___ useful.',           tr: 'is',    wrong: 'are'   },
        { en: 'fruits — nə vaxt işlənir?',   tr: 'Müxtəlif növ meyvə', wrong: 'Həmişə' },

        // Həmişə cəm
        { en: 'Where ___ my scissors?',      tr: 'are',   wrong: 'is'    },
        { en: 'My jeans ___ blue.',          tr: 'are',   wrong: 'is'    },
        { en: 'The clothes ___ clean.',      tr: 'are',   wrong: 'is'    },
        { en: 'Bir qayçı → ____',            tr: 'a pair of scissors', wrong: 'a scissors' },
        { en: 'İki şalvar → ____',           tr: 'two pairs of trousers', wrong: 'two trousers' },

        // Holiday
        { en: 'Today ___ a holiday. (bayram)', tr: 'is',  wrong: 'are'  },
        { en: 'The holidays ___ over. (tətil)',tr: 'are', wrong: 'is'   },

        // News / Elm adları
        { en: 'The news ___ good.',          tr: 'is',    wrong: 'are'  },
        { en: 'Physics ___ difficult.',      tr: 'is',    wrong: 'are'  },
        { en: 'Phonetics ___ interesting.',  tr: 'is',    wrong: 'are'  },
        { en: '"a news" düzgündürmü?',       tr: 'Xeyr',  wrong: 'Bəli' },

        // Sheep / Fish / Deer
        { en: 'Five sheep ___ grazing.',     tr: 'are',   wrong: 'is'   },
        { en: 'A deer ___ in the forest.',   tr: 'is',    wrong: 'are'  },
        { en: 'fish — adı cəmi necədir?',    tr: 'fish',  wrong: 'fishes' },
        { en: '"various fishes" — nə mənada?', tr: 'Müxtəlif növ balıq', wrong: 'Səhvdir' },
      ],

    // ── Bölmə 7 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 7 — Possessive case (Yiyəlik hal)',
      },

      // Dərs 7.1 — 's (tək) / ' (cəm) qaydası
      {
        type: 'grammar_lesson',
        title: "Dərs 7.1 — 's (tək) / ' (cəm) qaydası",
        cards: [

          // ── Ekran 1: İsmin halları ───────────────────────
          {
            type: 'lesson',
            title: 'İngilis dilində ismin halları',
            content: 'İngilis dilində ismin yalnız iki halı var:',
            table: [
              ['Hal',        'İngilis adı',          'Xüsusiyyəti'],
              ['Ümumi hal',  'The Common case',       'Heç bir şəkilçi almır'],
              ['Yiyəlik hal','The Possessive case',   "'s və ya ' alır"],
            ],
            examples: [
              { word: 'a table, a boy, a bench',       az: 'Ümumi hal — şəkilçisiz' },
              { word: "the boy's ball",                 az: 'Yiyəlik hal — oğlanın topu' },
              { word: "the teacher's book",             az: 'Yiyəlik hal — müəllimin kitabı' },
            ],
            tip: "Azərbaycan dilindəki -ın/-in/-un/-ün şəkilçisinə uyğun gəlir.",
          },

          // ── Ekran 2: 's və ' fərqi ───────────────────────
          {
            type: 'lesson',
            title: "'s və ' — fərq nədir?",
            content: 'Yiyəlik hal iki cür düzəlir:\n\nTək isimlərdə → \'s əlavə edilir:\nCəm isimlərdə → yalnız \' əlavə edilir.',
            examples: [
              { word: "the boy's ball",      az: 'tək — oğlanın topu' },
              { word: "the teacher's pen",   az: 'tək — müəllimin qələmi' },
              { word: "the cat's tail",      az: 'tək — pişiyin quyruğu' },
              { word: "the boys' ball",      az: 'cəm — oğlanların topu' },
              { word: "the teachers' room",  az: 'cəm — müəllimlərin otağı' },
            ],
            note: "Səbəb: Cəm isimlərinin sonunda artıq -s şəkilçisi var, ona görə yalnız apostrof ' işlənir.",
          },

          // ── Mini-check: 's / ' ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"oğlanın topu" — tək. Necə yazılır?',
                options: ["the boys' ball", "the boy's ball", "the boys's ball", "the boy ball"],
                answer: "the boy's ball",
              },
              {
                q: '"müəllimlərin otağı" — cəm. Necə yazılır?',
                options: ["the teacher's room", "the teachers's room", "the teachers' room", "the teachers room"],
                answer: "the teachers' room",
              },
              {
                q: 'Cəm isimlərdə niyə yalnız \' işlənir?',
                options: [
                  'Çünki qaydasızdır',
                  'Çünki sonunda artıq -s var',
                  'Çünki cansız isimdir',
                  'Çünki xüsusi addır',
                ],
                answer: 'Çünki sonunda artıq -s var',
              },
              {
                q: '"pişiyin quyruğu" — necə yazılır?',
                options: ["the cats' tail", "the cat tail", "the cat's tail", "the cats's tail"],
                answer: "the cat's tail",
              },
              {
                q: 'İngilis dilində ismin neçə halı var?',
                options: ['3', '4', '2', '6'],
                answer: '2',
              },
            ],
          },

          // ── Ekran 3: Kökü dəyişən cəm isimlər ──────────
          {
            type: 'lesson',
            title: "Men's · Children's — həm tək, həm cəmdə 's",
            content: "Cəm forması -s almadan kökdən dəyişən isimlərin həm tək, həm cəm yiyəlik halı 's vasitəsilə düzəlir. Çünki bu isimlərin sonunda cəm -s-i yoxdur.",
            table: [
              ['Tək yiyəlik',       'Mənası',           'Cəm yiyəlik',         'Mənası'],
              ["the man's cap",     'kişinin şapkası',  "the men's caps",      'kişilərin şapkaları'],
              ["the child's toy",   'uşağın oyuncağı',  "the children's toys", 'uşaqların oyuncaqları'],
              ["the woman's bag",   'qadının çantası',  "the women's bags",    'qadınların çantaları'],
            ],
          },

          // ── Mini-check: Kökü dəyişən cəm ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"uşaqların oyuncaqları" necə yazılır?',
                options: ["the childs' toys", "the children's toys", "the childrens' toys", "the children toys"],
                answer: "the children's toys",
              },
              {
                q: '"kişilərin şapkaları" necə yazılır?',
                options: ["the mans' caps", "the men' caps", "the men's caps", "the mens' caps"],
                answer: "the men's caps",
              },
              {
                q: 'Nə üçün "children\'s" — apostrofdan sonra -s işlənir?',
                options: [
                  'Çünki xüsusi qayda var',
                  'Çünki "children" -s almadan kökdən dəyişir',
                  'Çünki tək isimdir',
                  'Çünki cansız isimdir',
                ],
                answer: 'Çünki "children" -s almadan kökdən dəyişir',
              },
            ],
          },
        ],
      },

      // Dərs 7.2 — Cansız sözün possessive-i
      {
        type: 'grammar_lesson',
        title: "Dərs 7.2 — Cansız sözün possessive-i · Xüsusi hallar",
        cards: [

          // ── Ekran 1: Sonu -s ilə bitən isimlər ──────────
          {
            type: 'lesson',
            title: "Dickens's yoxsa Dickens'?",
            content: "Sonu -s hərfi ilə bitən isimlərin yiyəlik halı iki cür düzələ bilər. Hər iki forma düzgündür.",
            examples: [
              { word: "Dickens's father", az: "Variant 1 — 's əlavə et" },
              { word: "Dickens' father",  az: "Variant 2 — yalnız ' əlavə et" },
            ],
            tip: "Hər iki yazılış qəbul edilir. Praktikada ikinci variant (') daha çox işlənir.",
          },

          // ── Ekran 2: Mürəkkəb isimlərin yiyəlik halı ────
          {
            type: 'lesson',
            title: "Father-in-law's house",
            content: "Mürəkkəb isimlərin yiyəlik halını düzəldərkən 's şəkilçisi axırıncı komponentə əlavə edilir.",
            examples: [
              { word: "my father-in-law's house",       az: 'qaynatamın evi' },
              { word: "the editor-in-chief's office",   az: 'baş redaktorun kabineti' },
            ],
          },

          // ── Ekran 3: Birgə və ayrı yiyəlik ──────────────
          {
            type: 'lesson',
            title: "Tom and Nick's — yoxsa Tom's and Nick's?",
            content: "Eyni bir əşya iki şəxsə məxsusdursa → 's yalnız axırıncı ismə əlavə edilir.\n\nHər şəxsə ayrı-ayrılıqda məxsusdursa → 's hər birinə əlavə edilir.",
            examples: [
              { word: "Tom and Nick's father", az: "eyni ata — 's yalnız axırda" },
              { word: "Tom and Nick's house",  az: "eyni ev — birgə mülkiyyət" },
              { word: "Tom's and Nick's eyes", az: "ayrı-ayrı gözlər" },
              { word: "Tom's and Nick's cars", az: "ayrı maşınlar" },
            ],
          },

          // ── Mini-check: Xüsusi hallar ────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Tomun və Nikin evi" (eyni ev) necə yazılır?',
                options: [
                  "Tom's and Nick's house",
                  "Tom and Nick's house",
                  "Tom's and Nick house",
                  "Tom and Nick house",
                ],
                answer: "Tom and Nick's house",
              },
              {
                q: '"Tomun maşını və Nikin maşını" (ayrı maşınlar) necə yazılır?',
                options: [
                  "Tom and Nick's cars",
                  "Tom's and Nick cars",
                  "Tom's and Nick's cars",
                  "Tom Nick's cars",
                ],
                answer: "Tom's and Nick's cars",
              },
              {
                q: '"my father-in-law\'s house" — \'s hara əlavə edilib?',
                options: ['father-a', 'law-a', 'in-ə', 'axırıncı komponentə'],
                answer: 'axırıncı komponentə',
              },
            ],
          },

          // ── Ekran 4: Cansız isimlər — of ────────────────
          {
            type: 'lesson',
            title: 'Cansız isimlər — of sözönü',
            content: "Cansız varlıqları bildirən isimlərin yiyəlik halı bir qayda olaraq of sözönü vasitəsilə düzəlir. 's işlənmir.",
            examples: [
              { word: 'the leg of the table',    az: 'stolun qılçası' },
              { word: 'the centre of the city',  az: 'şəhərin mərkəzi' },
              { word: 'the pages of the book',   az: 'kitabın səhifələri' },
              { word: 'the top of the mountain', az: 'dağın zirvəsi' },
            ],
          },

          // ── Ekran 5: Cansız olsa da 's işlənən hallar ───
          {
            type: 'lesson',
            title: "Cansız olsa da 's işlənən isimlər",
            content: "Bəzi cansız isimlər istisna olaraq 's ilə işlənir:\n\n1. Fəsillərin, ayların, həftə günlərinin adları\n2. Ölkə və şəhər adları\n3. Müəyyən coğrafi və təbii obyektlər\n4. Zaman bildirən sözlər — yalnız 's\n5. today, tomorrow, yesterday — həmişə 's",
            examples: [
              { word: "December's frost",      az: 'dekabrın şaxtası' },
              { word: "London's beauty",       az: 'Londonun gözəlliyi' },
              { word: "the river's bank",      az: 'çayın sahili' },
              { word: "a moment's silence",    az: 'bir anlıq sükut' },
              { word: "two days' rest",        az: 'iki günlük istirahət' },
              { word: "today's newspaper",     az: 'bu günkü qəzet' },
              { word: "yesterday's news",      az: 'dünənki xəbər' },
              { word: "tomorrow's work",       az: 'sabahkı iş' },
            ],
            note: "the bank of the river = the river's bank — hər iki forma düzgündür (3-cü qrup üçün).\nZaman sözlərində isə yalnız 's işlənir, of işlənmir.",
          },

          // ── Mini-check: Cansız + 's ──────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"stolun qılçası" — necə yazılır?',
                options: [
                  "the table's leg",
                  "the leg of the table",
                  "the table leg",
                  "the leg's table",
                ],
                answer: 'the leg of the table',
              },
              {
                q: '"bu günkü qəzet" — necə yazılır?',
                options: [
                  'the newspaper of today',
                  "todays newspaper",
                  "today's newspaper",
                  "today newspaper",
                ],
                answer: "today's newspaper",
              },
              {
                q: '"bir həftəlik tətil" — necə yazılır?',
                options: [
                  'the holiday of a week',
                  "a week's holiday",
                  "a weeks holiday",
                  "holiday of week",
                ],
                answer: "a week's holiday",
              },
              {
                q: '"Londonun gözəlliyi" necə yazılır?',
                options: [
                  'the beauty of London',
                  "London's beauty",
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'Hər ikisi düzgündür',
              },
              {
                q: '"dünənki xəbər" — necə yazılır?',
                options: [
                  'the news of yesterday',
                  "yesterdays news",
                  "yesterday's news",
                  "yesterday news",
                ],
                answer: "yesterday's news",
              },
              {
                q: '"iki günlük istirahət" — necə yazılır?',
                options: [
                  'the rest of two days',
                  "two day's rest",
                  "two days' rest",
                  "two days rest",
                ],
                answer: "two days' rest",
              },
            ],
          },

          // ── Mini-quiz: Ümumi təkrar — Possessive ────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"müəllimin qələmi" — tək. Necə yazılır?',
                options: ["the teachers' pen", "the teacher pen", "the teacher's pen", "the teachers pen"],
                answer: "the teacher's pen",
              },
              {
                q: '"qadınların çantaları" — cəm (kökü dəyişən). Necə yazılır?',
                options: ["the woman's bags", "the womans' bags", "the women bags", "the women's bags"],
                answer: "the women's bags",
              },
              {
                q: '"şəhərin mərkəzi" — cansız isim. Necə yazılır?',
                options: [
                  "the city's centre",
                  'the centre of the city',
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'the centre of the city',
              },
              {
                q: '"dağın zirvəsi" — necə yazılır?',
                options: [
                  "the mountain's top",
                  'the top of the mountain',
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'the top of the mountain',
              },
              {
                q: '"bir saatlıq yol" — necə yazılır?',
                options: [
                  'the drive of an hour',
                  "an hour's drive",
                  "an hours drive",
                  "an hour drive",
                ],
                answer: "an hour's drive",
              },
              {
                q: '"sabahkı iş" — necə yazılır?',
                options: [
                  'the work of tomorrow',
                  "tomorrows work",
                  "tomorrow's work",
                  "tomorrow work",
                ],
                answer: "tomorrow's work",
              },
            ],
          },
        ],
      },

      // ── Bölmə 7 — Ümumi Quiz ─────────────────────────────
      [
        // Tək 's
        { en: "oğlanın topu → ____",         tr: "the boy's ball",       wrong: "the boys' ball"      },
        { en: "pişiyin quyruğu → ____",      tr: "the cat's tail",       wrong: "the cats' tail"      },
        { en: "müəllimin kitabı → ____",     tr: "the teacher's book",   wrong: "the teachers' book"  },

        // Cəm '
        { en: "oğlanların topu → ____",      tr: "the boys' ball",       wrong: "the boy's ball"      },
        { en: "müəllimlərin otağı → ____",   tr: "the teachers' room",   wrong: "the teacher's room"  },

        // Kökü dəyişən cəm
        { en: "uşaqların oyuncaqları → ____",tr: "the children's toys",  wrong: "the childrens' toys" },
        { en: "kişilərin şapkaları → ____",  tr: "the men's caps",       wrong: "the mens' caps"      },
        { en: "qadınların çantaları → ____", tr: "the women's bags",     wrong: "the womans' bags"    },

        // Birgə / ayrı yiyəlik
        { en: "eyni ev (Tom və Nick) → ____",    tr: "Tom and Nick's house",  wrong: "Tom's and Nick's house" },
        { en: "ayrı maşınlar → ____",            tr: "Tom's and Nick's cars", wrong: "Tom and Nick's cars"    },

        // Cansız — of
        { en: "stolun qılçası → ____",       tr: "the leg of the table",    wrong: "the table's leg"       },
        { en: "kitabın səhifələri → ____",   tr: "the pages of the book",   wrong: "the book's pages"      },
        { en: "dağın zirvəsi → ____",        tr: "the top of the mountain", wrong: "the mountain's top"    },

        // Cansız amma 's
        { en: "dekabrın şaxtası → ____",     tr: "December's frost",     wrong: "the frost of December" },
        { en: "Londonun gözəlliyi → ____",   tr: "London's beauty",      wrong: "the beauty of London"  },
        { en: "çayın sahili → ____",         tr: "the river's bank",     wrong: "the bank of river"     },

        // Zaman sözləri
        { en: "bu günkü qəzet → ____",       tr: "today's newspaper",    wrong: "the newspaper of today" },
        { en: "dünənki xəbər → ____",        tr: "yesterday's news",     wrong: "the news of yesterday"  },
        { en: "sabahkı iş → ____",           tr: "tomorrow's work",      wrong: "the work of tomorrow"   },
        { en: "bir həftəlik tətil → ____",   tr: "a week's holiday",     wrong: "the holiday of a week"  },
        { en: "iki günlük istirahət → ____", tr: "two days' rest",       wrong: "the rest of two days"   },
        { en: "bir saatlıq yol → ____",      tr: "an hour's drive",      wrong: "the drive of an hour"   },
      ],
     // ══════════════════════════════════════════════════════════════
//  BÖLMƏ 8 — Sayılmayan isimlər sözlüyü (Vocabulary bank)
//  index: 36 → 41
// ══════════════════════════════════════════════════════════════

// ── index: 36 — Bölmə 8 bölücüsü ────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 8 — Sayılmayan isimlər sözlüyü (Vocabulary bank)',
},

// ── index: 37 — Dərs 8.1 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.1 — Qida və içki adları',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Yemək və içki — hamısı sayılmayandır',
      content: 'Aşağıdakı bütün isimlər uncountable-dır.\nHeç biri a/an almır, cəmlənmir, özündən sonra fel tək gəlir.',
      examples: [
        { word: 'Water is important.',     az: '✅ tək fel' },
        { word: 'Bread is delicious.',     az: '✅ tək fel' },
        { word: '❌ a water, waters',      az: 'yanlış — a/an və cəm işlənmir' },
      ],
      tip: 'Maye, taxıl, ət, süd məhsulları — hamısı uncountable. "much" və "little" ilə işlənir.',
    },

    // ── Ekran 2: İçkilər ───────────────────────────────────
    {
      type: 'lesson',
      title: 'İçki adları (Drinks)',
      content: 'Bu içkilərin hamısı sayılmayandir:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['water',      '[wotə]',      'su'],
        ['milk',       '[milk]',      'süd'],
        ['tea',        '[tiː]',       'çay'],
        ['coffee',     '[kofiː]',     'kofe'],
        ['beer',       '[biə]',       'pivə'],
        ['wine',       '[wain]',      'çaxır'],
        ['juice',      '[dʒuːs]',     'şirə'],
        ['oil',        '[oil]',       'neft, yağ'],
        ['champagne',  '[ʃæmpein]',   'şampan'],
      ],
    },

    // ── Mini-check: İçkilər ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"milk" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'I want a water.',
            'I want water.',
            'I want waters.',
            'I want many water.',
          ],
          answer: 'I want water.',
        },
        {
          q: '"juice" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract'],
          answer: 'Uncountable',
        },
        {
          q: '"tea" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'little', 'a few'],
          answer: 'little',
        },
      ],
    },

    // ── Ekran 3: Qida adları — 1 ───────────────────────────
    {
      type: 'lesson',
      title: 'Qida adları — Part 1',
      content: 'Aşağıdakı qida adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',    'Azərbaycan'],
        ['bread',    '[bred]',      'çörək'],
        ['butter',   '[bʌtə]',     'yağ'],
        ['cheese',   '[tʃiːz]',    'pendir'],
        ['meat',     '[miːt]',      'ət'],
        ['rice',     '[rais]',      'düyü'],
        ['flour',    '[flauə]',     'un'],
        ['sugar',    '[ʃugə]',      'qənd'],
        ['salt',     '[soːlt]',     'duz'],
        ['honey',    '[hʌni]',      'bal'],
      ],
    },

    // ── Ekran 4: Qida adları — 2 ───────────────────────────
    {
      type: 'lesson',
      title: 'Qida adları — Part 2',
      content: 'Daha çox qida adları:',
      table: [
        ['İngilis',   'Tələffüz',    'Azərbaycan'],
        ['cream',     '[kriːm]',     'krem'],
        ['jam',       '[dʒæm]',      'mürəbbə'],
        ['toast',     '[toust]',     'qızardılmış çörək'],
        ['cake',      '[keik]',      'tort, piroq'],
        ['food',      '[fuːd]',      'ərzaq'],
        ['fruit',     '[fruːt]',     'meyvə'],
        ['mustard',   '[mʌstəd]',    'xardal'],
        ['pepper',    '[pepə]',      'istiot'],
      ],
    },

    // ── Mini-check: Qida adları ────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"bread" — düzgün işlənişi hansıdır?',
          options: ['a bread', 'some breads', 'much bread', 'many breads'],
          answer: 'much bread',
        },
        {
          q: '"sugar" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'a few', 'little', 'many'],
          answer: 'little',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'There is a cheese on the table.',
            'There are cheeses on the table.',
            'There is some cheese on the table.',
            'There are many cheese on the table.',
          ],
          answer: 'There is some cheese on the table.',
        },
        {
          q: '"Rice ___ healthy." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "qida" mənasındadır?',
          options: ['juice', 'food', 'silk', 'iron'],
          answer: 'food',
        },
        {
          q: '"fruit" sözü ümumi mənada necə işlənir?',
          options: [
            'a fruit, many fruits',
            'much fruit, little fruit',
            'few fruit, a few fruits',
            'a lot of fruits',
          ],
          answer: 'much fruit, little fruit',
        },
      ],
    },

    // ── Mini-quiz: 8.1 ümumi təkrar ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"meat" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Collective', 'Proper noun'],
          answer: 'Uncountable',
        },
        {
          q: '"coffee" ilə hansı ifadə düzgündür?',
          options: ['a coffee', 'many coffees', 'much coffee', 'few coffees'],
          answer: 'much coffee',
        },
        {
          q: 'Hansı söz içki deyil?',
          options: ['milk', 'wine', 'flour', 'juice'],
          answer: 'flour',
        },
        {
          q: '"honey ___ sweet." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı qida adı "mürəbbə" deməkdir?',
          options: ['cream', 'toast', 'jam', 'mustard'],
          answer: 'jam',
        },
        {
          q: '"salt" — düzgün işlənişi hansıdır?',
          options: ['a salt', 'many salts', 'much salt', 'few salts'],
          answer: 'much salt',
        },
        {
          q: '"butter" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'much', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Much meats are on the table.',
            'A meat is on the table.',
            'Much meat is on the table.',
            'Many meat are on the table.',
          ],
          answer: 'Much meat is on the table.',
        },
      ],
    },
  ],
},

// ── index: 38 — Dərs 8.2 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.2 — Material adları',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Materiallar — hamısı sayılmayandır',
      content: 'Material, metal, parça, yanacaq adları uncountable-dır.\nHeç biri a/an almır, cəmlənmir, özündən sonra fel tək gəlir.',
      examples: [
        { word: 'Gold is expensive.',    az: '✅ tək fel' },
        { word: 'Silk is soft.',         az: '✅ tək fel' },
        { word: '❌ a gold, silks',      az: 'yanlış' },
      ],
      tip: 'Materialın adını gördüyündə — much/little ilə işlət, a/an alma.',
    },

    // ── Ekran 2: Parça və toxuculuq ────────────────────────
    {
      type: 'lesson',
      title: 'Parça və toxuculuq (Fabric)',
      content: 'Bu parça adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis', 'Tələffüz', 'Azərbaycan'],
        ['silk',    '[silk]',   'ipək'],
        ['wool',    '[wuːl]',   'yun'],
        ['cotton',  '[kotn]',   'pambıq'],
        ['linen',   '[linin]',  'mələfə, kətan'],
      ],
    },

    // ── Mini-check: Parça adları ───────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"silk" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"wool" ilə hansı ifadə düzgündür?',
          options: ['a wool', 'many wools', 'much wool', 'few wools'],
          answer: 'much wool',
        },
        {
          q: 'Hansı söz "pambıq" deməkdir?',
          options: ['silk', 'linen', 'wool', 'cotton'],
          answer: 'cotton',
        },
        {
          q: '"linen" — "mələfə, kətan" mənasındadır. Hansı cümlə düzgündür?',
          options: [
            'A linen is soft.',
            'Linen is soft.',
            'Linens are soft.',
            'Many linen is soft.',
          ],
          answer: 'Linen is soft.',
        },
      ],
    },

    // ── Ekran 3: Tikinti materialları ──────────────────────
    {
      type: 'lesson',
      title: 'Tikinti və istehsal materialları',
      content: 'Bu materialların hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['wood',       '[wud]',       'taxta'],
        ['paper',      '[peipə]',     'kağız'],
        ['glass',      '[glɑːs]',     'şüşə'],
        ['cardboard',  '[kɑːdbɔːd]',  'karton'],
        ['rubber',     '[rʌbə]',      'rezin'],
        ['chalk',      '[tʃoːk]',     'təbaşir'],
      ],
    },

    // ── Mini-check: Tikinti materialları ──────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"glass" — "şüşə" mənasında. Hansı cümlə düzgündür?',
          options: [
            'A glass is everywhere.',
            'Glasses is used in windows.',
            'Glass is used in windows.',
            'Many glass is used.',
          ],
          answer: 'Glass is used in windows.',
        },
        {
          q: '"wood" ilə "çox" mənasında hansı söz işlənir?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: 'Hansı söz "təbaşir" deməkdir?',
          options: ['rubber', 'cardboard', 'chalk', 'paper'],
          answer: 'chalk',
        },
        {
          q: '"paper" — düzgün işlənişi hansıdır?',
          options: ['a paper', 'many papers', 'much paper', 'few papers'],
          answer: 'much paper',
        },
      ],
    },

    // ── Ekran 4: Metal adları ──────────────────────────────
    {
      type: 'lesson',
      title: 'Metal adları (Metals)',
      content: 'Metal adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',    'Azərbaycan'],
        ['iron',     '[aiən]',      'dəmir'],
        ['gold',     '[gould]',     'qızıl'],
        ['silver',   '[silvə]',     'gümüş'],
        ['bronze',   '[bronz]',     'bürünc'],
        ['coal',     '[koul]',      'kömür'],
      ],
    },

    // ── Ekran 5: Yanacaq və xammal ─────────────────────────
    {
      type: 'lesson',
      title: 'Yanacaq və xammal (Fuel)',
      content: 'Yanacaq adları da uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',   'Azərbaycan'],
        ['gas',      '[gæz]',      'qaz'],
        ['petrol',   '[petrol]',   'benzin'],
        ['ink',      '[iŋk]',      'mürəkkəb'],
      ],
    },

    // ── Mini-check: Metal və yanacaq ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"gold" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"iron" ilə hansı ifadə düzgündür?',
          options: ['an iron', 'many irons', 'much iron', 'few irons'],
          answer: 'much iron',
        },
        {
          q: '"petrol" — "benzin" mənasındadır. Hansı cümlə düzgündür?',
          options: [
            'A petrol is expensive.',
            'Petrols are expensive.',
            'Petrol is expensive.',
            'Many petrol is expensive.',
          ],
          answer: 'Petrol is expensive.',
        },
        {
          q: 'Hansı söz metal adı deyil?',
          options: ['gold', 'bronze', 'coal', 'cotton'],
          answer: 'cotton',
        },
        {
          q: '"silver ___ valuable." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "mürəkkəb" deməkdir (yazı üçün)?',
          options: ['gas', 'petrol', 'ink', 'coal'],
          answer: 'ink',
        },
      ],
    },

    // ── Mini-quiz: 8.2 ümumi təkrar ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"cotton" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Uncountable', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"wool" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'much', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı söz "taxta" deməkdir?',
          options: ['rubber', 'glass', 'wood', 'chalk'],
          answer: 'wood',
        },
        {
          q: '"Bronze ___ an ancient metal." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"gas" — düzgün işlənişi hansıdır?',
          options: ['a gas', 'many gases', 'much gas', 'few gases'],
          answer: 'much gas',
        },
        {
          q: 'Hansı söz "bürünc" deməkdir?',
          options: ['iron', 'silver', 'gold', 'bronze'],
          answer: 'bronze',
        },
        {
          q: '"paper" nə deməkdir?',
          options: ['taxta', 'kağız', 'rezin', 'karton'],
          answer: 'kağız',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A silk is beautiful.',
            'Silks are beautiful.',
            'Silk is beautiful.',
            'Many silk is beautiful.',
          ],
          answer: 'Silk is beautiful.',
        },
      ],
    },
  ],
},

// ── index: 39 — Dərs 8.3 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.3 — Mücərrəd isimlər',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Hiss, keyfiyyət, vəziyyət adları',
      content: 'Mücərrəd isimlər gözlə görünmür, əllə toxunulmur. Bunlar hisslər, keyfiyyətlər, vəziyyətlər, proseslərdir.\n\nBütün mücərrəd isimlər uncountable-dır:\n• a/an almır\n• cəmlənmir\n• özündən sonra fel tək gəlir',
      examples: [
        { word: 'Love is beautiful.',      az: '✅ tək fel' },
        { word: 'Knowledge is power.',     az: '✅ tək fel' },
        { word: '❌ a love, knowledges',   az: 'yanlış' },
      ],
      tip: 'İstisna: Sifət + abstract noun → a/an işlənir: "a great love", "a good knowledge".',
    },

    // ── Ekran 2: Hisslər ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Hisslər və münasibətlər (Feelings)',
      content: 'Bu hiss adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['love',       '[lʌv]',       'sevgi'],
        ['hate',       '[heit]',      'nifrət'],
        ['joy',        '[dʒoi]',      'sevinc'],
        ['anger',      '[æŋgə]',      'hirs, qəzəb'],
        ['fear',       '[fiə]',       'qorxu'],
        ['hope',       '[houp]',      'ümid'],
        ['pity',       '[piti]',      'təəssüf'],
        ['laughter',   '[lɑːftə]',    'gülüş'],
        ['horror',     '[horə]',      'dəhşət'],
      ],
    },

    // ── Mini-check: Hisslər ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"love" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Collective'],
          answer: 'Abstract',
        },
        {
          q: '"Anger ___ dangerous." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A fear is natural.',
            'Fear is natural.',
            'Fears are natural.',
            'Many fear is natural.',
          ],
          answer: 'Fear is natural.',
        },
        {
          q: '"joy" nə deməkdir?',
          options: ['qorxu', 'nifrət', 'sevinc', 'dəhşət'],
          answer: 'sevinc',
        },
        {
          q: '"laughter" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
      ],
    },

    // ── Ekran 3: Keyfiyyət adları ──────────────────────────
    {
      type: 'lesson',
      title: 'Keyfiyyət və xüsusiyyət adları (Qualities)',
      content: 'Bu keyfiyyət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',     'Azərbaycan'],
        ['beauty',     '[bjuːti]',     'gözəllik'],
        ['happiness',  '[hæpinis]',    'xoşbəxtlik'],
        ['health',     '[helθ]',       'sağlamlıq'],
        ['strength',   '[streŋθ]',     'güc, qüvvə'],
        ['luck',       '[lʌk]',        'bəxt'],
        ['courage',    '[kʌriʤ]',      'cəsarət'],
        ['patience',   '[peiʃəns]',    'səbr'],
        ['stupidness', '[stjuːpidnis]', 'axmaqlıq'],
        ['wealth',     '[welθ]',       'var-dövlət'],
      ],
    },

    // ── Mini-check: Keyfiyyət adları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"happiness" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Concrete'],
          answer: 'Abstract',
        },
        {
          q: '"Beauty ___ important." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"courage" nə deməkdir?',
          options: ['səbr', 'bəxt', 'cəsarət', 'güc'],
          answer: 'cəsarət',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A health is important.',
            'Health are important.',
            'Health is important.',
            'Healths are important.',
          ],
          answer: 'Health is important.',
        },
        {
          q: '"wealth" nə deməkdir?',
          options: ['sağlamlıq', 'bəxt', 'güc', 'var-dövlət'],
          answer: 'var-dövlət',
        },
        {
          q: '"luck" ilə hansı ifadə düzgündür?',
          options: ['a luck', 'many lucks', 'much luck', 'few lucks'],
          answer: 'much luck',
        },
      ],
    },

    // ── Ekran 4: Fəaliyyət adları ─────────────────────────
    {
      type: 'lesson',
      title: 'Fəaliyyət və proses adları (Activities)',
      content: 'Bu fəaliyyət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',       'Tələffüz',       'Azərbaycan'],
        ['knowledge',     '[noliʤ]',        'bilik'],
        ['education',     '[edjuːkeiʃn]',   'təhsil'],
        ['progress',      '[progres]',      'tərəqqi, inkişaf'],
        ['experience',    '[ikspiriəns]',   'təcrübə'],
        ['information',   '[infoːmeiʃn]',   'məlumat'],
        ['advice',        '[ædvais]',       'məsləhət'],
        ['help',          '[help]',         'kömək'],
        ['research',      '[risəːtʃ]',      'araşdırma'],
        ['travel',        '[trævl]',        'səyahət'],
        ['trade',         '[treid]',        'ticarət'],
        ['business',      '[biznes]',       'iş'],
      ],
    },

    // ── Mini-check: Fəaliyyət adları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"knowledge" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: '"Education ___ important." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"advice" — cəm forması varmı?',
          options: ['Bəli, advices', 'Xeyr, cəmlənmir', 'Bəli, advicen', 'Bəzən işlənir'],
          answer: 'Xeyr, cəmlənmir',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Can you give me an advice?',
            'Can you give me advices?',
            'Can you give me some advice?',
            'Can you give me a little advices?',
          ],
          answer: 'Can you give me some advice?',
        },
        {
          q: '"experience" nə deməkdir?',
          options: ['bilik', 'məsləhət', 'təcrübə', 'araşdırma'],
          answer: 'təcrübə',
        },
        {
          q: '"research" ilə hansı ifadə düzgündür?',
          options: ['a research', 'many researches', 'much research', 'few researches'],
          answer: 'much research',
        },
      ],
    },

    // ── Ekran 5: Gündəlik həyat adları ────────────────────
    {
      type: 'lesson',
      title: 'Gündəlik həyat adları (Daily life)',
      content: 'Bu gündəlik həyat adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',      'Tələffüz',       'Azərbaycan'],
        ['furniture',    '[fəːnitʃə]',     'mebel'],
        ['money',        '[mʌni]',         'pul'],
        ['work',         '[wəːk]',         'iş'],
        ['homework',     '[houmwəːk]',     'ev tapşırığı'],
        ['hometask',     '[houmtɑːsk]',    'ev tapşırığı'],
        ['housework',    '[hauswəːk]',     'ev işi'],
        ['shopping',     '[ʃopiŋ]',        'bazarlıq'],
        ['parking',      '[pɑːkiŋ]',       'maşın saxlama'],
        ['smoking',      '[smoukiŋ]',      'papiros çəkmə'],
        ['mail',         '[meil]',         'poçt'],
        ['transport',    '[trænspoːt]',    'nəqliyyat'],
        ['traffic',      '[træfik]',       'nəqliyyat'],
        ['shampoo',      '[ʃæmpuː]',       'şampun'],
        ['toothpaste',   '[tuːθpɑːst]',    'diş pastası'],
        ['soap',         '[soup]',         'sabun'],
        ['garbage',      '[gɑːbiʤ]',       'zibil'],
        ['rubbish',      '[rʌbiʃ]',        'zibil'],
        ['chess',        '[tʃes]',         'şahmat'],
      ],
    },

    // ── Mini-check: Gündəlik həyat ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"furniture" — düzgün işlənişi hansıdır?',
          options: ['a furniture', 'many furnitures', 'much furniture', 'few furnitures'],
          answer: 'much furniture',
        },
        {
          q: '"traffic" nə deməkdir?',
          options: ['bazarlıq', 'poçt', 'nəqliyyat', 'zibil'],
          answer: 'nəqliyyat',
        },
        {
          q: '"The homework ___ finished." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "sabun" deməkdir?',
          options: ['shampoo', 'toothpaste', 'soap', 'garbage'],
          answer: 'soap',
        },
        {
          q: '"rubbish" və "garbage" — nə deməkdir?',
          options: ['bazarlıq', 'zibil', 'poçt', 'mebel'],
          answer: 'zibil',
        },
        {
          q: '"chess" ilə hansı ifadə düzgündür?',
          options: ['a chess', 'many chesses', 'much chess', 'Chess are fun'],
          answer: 'much chess',
        },
      ],
    },

    // ── Ekran 6: Digər mücərrəd isimlər — 1 ───────────────
    {
      type: 'lesson',
      title: 'Digər mücərrəd isimlər — Part 1',
      content: 'Bu mücərrəd isimlər də uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',     'Azərbaycan'],
        ['life',       '[laif]',       'həyat'],
        ['death',      '[deθ]',        'ölüm'],
        ['time',       '[taim]',       'vaxt'],
        ['peace',      '[piːs]',       'sülh'],
        ['marriage',   '[mæriʤ]',      'evlilik'],
        ['damage',     '[dæmiʤ]',      'zərər, ziyan'],
        ['harm',       '[hɑːm]',       'ziyan'],
        ['fun',        '[fʌn]',        'zarafat'],
        ['music',      '[mjuːzik]',    'musiqi'],
        ['dancing',    '[dɑːnsiŋ]',    'rəqs'],
        ['writing',    '[raitiŋ]',     'yazı'],
        ['spelling',   '[speliŋ]',     'hərfləmə'],
        ['pollution',  '[pəluːʃən]',   'çirklənmə'],
        ['power',      '[pauə]',       'güc, qüvvət'],
      ],
    },

    // ── Ekran 7: Digər mücərrəd isimlər — 2 ───────────────
    {
      type: 'lesson',
      title: 'Digər mücərrəd isimlər — Part 2',
      content: 'Daha çox mücərrəd isimlər:',
      table: [
        ['İngilis',          'Tələffüz',            'Azərbaycan'],
        ['capital',          '[kæpitəl]',            'kapital'],
        ['chaos',            '[kaous]',              'xaos'],
        ['nonsense',         '[nosens]',             'cəfəngiyyat'],
        ['dirt',             '[dəːt]',               'çirk, kir'],
        ['gossip',           '[gosip]',              'şayiə'],
        ['hospitality',      '[hospitæbiliti]',      'qonaqpərvərlik'],
        ['choice',           '[tʃois]',              'seçim'],
        ['hobby',            '[hobi]',               'məşğuliyyət'],
        ['charity',          '[tʃæriti]',            'xeyriyyə'],
        ['applause',         '[æplos]',              'alqış'],
        ['assistance',       '[æsistəns]',           'yardım'],
        ['communication',    '[komjunikeiʃn]',       'rabitə'],
        ['behaviour',        '[biheivə]',            'davranış'],
        ['co-operation',     '[kouopəreiʃn]',        'əməkdaşlıq'],
        ['economy',          '[ikonomi]',            'iqtisadiyyat'],
        ['prohibition',      '[prohiʃn]',            'qadağan'],
        ['evidence',         '[evidəns]',            'dəlil, sübut'],
        ['flu',              '[fluː]',               'soyuqdəymə'],
      ],
    },

    // ── Mini-check: Digər mücərrəd isimlər ────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"peace" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Concrete'],
          answer: 'Abstract',
        },
        {
          q: '"Music ___ wonderful." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"pollution" nə deməkdir?',
          options: ['ziyan', 'çirklənmə', 'sülh', 'xaos'],
          answer: 'çirklənmə',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A fun is important.',
            'Funs are important.',
            'Fun is important.',
            'Many fun is important.',
          ],
          answer: 'Fun is important.',
        },
        {
          q: '"gossip" nə deməkdir?',
          options: ['xəbər', 'şayiə', 'məsləhət', 'cəfəngiyyat'],
          answer: 'şayiə',
        },
        {
          q: '"behaviour" ilə hansı ifadə düzgündür?',
          options: ['a behaviour', 'many behaviours', 'much behaviour', 'few behaviours'],
          answer: 'much behaviour',
        },
        {
          q: '"flu" nə deməkdir?',
          options: ['soyuqdəymə', 'ziyan', 'çirk', 'seçim'],
          answer: 'soyuqdəymə',
        },
        {
          q: '"hospitality" nə deməkdir?',
          options: ['iqtisadiyyat', 'əməkdaşlıq', 'qonaqpərvərlik', 'yardım'],
          answer: 'qonaqpərvərlik',
        },
      ],
    },

    // ── Ekran 8: Təbiət adları ─────────────────────────────
    {
      type: 'lesson',
      title: 'Təbiət hadisələri (Nature)',
      content: 'Təbiət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',     'Tələffüz',     'Azərbaycan'],
        ['water',       '[wotə]',       'su'],
        ['air',         '[eə]',         'hava'],
        ['weather',     '[weðə]',       'hava (şərait)'],
        ['rain',        '[rein]',       'yağış'],
        ['snow',        '[snou]',       'qar'],
        ['ice',         '[ais]',        'buz'],
        ['sand',        '[sænd]',       'qum'],
        ['mud',         '[mʌd]',        'palçıq'],
        ['dust',        '[dʌst]',       'toz'],
        ['grass',       '[grɑːs]',      'ot'],
        ['sunlight',    '[sʌnlait]',    'gün işığı'],
        ['moonlight',   '[muːnlait]',   'ay işığı'],
        ['sunshine',    '[sʌnʃain]',    'günəş işığı'],
        ['light',       '[lait]',       'işıq'],
        ['dark',        '[dɑːk]',       'qaranlıq'],
        ['thunder',     '[θʌndə]',      'şimşək, ildırım'],
        ['lightning',   '[laitniŋ]',    'şimşək'],
      ],
    },

    // ── Mini-check: Təbiət adları ─────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"rain" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"Snow ___ beautiful in winter." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"thunder" nə deməkdir?',
          options: ['ildırım', 'qum', 'buz', 'toz'],
          answer: 'ildırım',
        },
        {
          q: '"dust" ilə hansı ifadə düzgündür?',
          options: ['a dust', 'many dusts', 'much dust', 'few dusts'],
          answer: 'much dust',
        },
        {
          q: '"sunshine" nə deməkdir?',
          options: ['ay işığı', 'günəş işığı', 'şimşək', 'toz'],
          answer: 'günəş işığı',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A weather is cold today.',
            'Weathers are cold today.',
            'The weather is cold today.',
            'Many weather is cold.',
          ],
          answer: 'The weather is cold today.',
        },
        {
          q: '"mud" nə deməkdir?',
          options: ['qar', 'buz', 'palçıq', 'ot'],
          answer: 'palçıq',
        },
      ],
    },

    // ── Mini-quiz: 8.3 ümumi təkrar — böyük ───────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı söz hiss bildirmir?',
          options: ['love', 'anger', 'furniture', 'fear'],
          answer: 'furniture',
        },
        {
          q: '"knowledge" ilə hansı ifadə düzgündür?',
          options: ['a knowledge', 'many knowledges', 'much knowledge', 'few knowledges'],
          answer: 'much knowledge',
        },
        {
          q: '"Pollution ___ a big problem." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"charity" nə deməkdir?',
          options: ['cəsarət', 'xeyriyyə', 'yardım', 'əməkdaşlıq'],
          answer: 'xeyriyyə',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A progress is made.',
            'Progresses are made.',
            'Progress is made.',
            'Many progress are made.',
          ],
          answer: 'Progress is made.',
        },
        {
          q: '"evidence" nə deməkdir?',
          options: ['şayiə', 'cəfəngiyyat', 'dəlil, sübut', 'qadağan'],
          answer: 'dəlil, sübut',
        },
        {
          q: '"economy" ilə hansı söz işlənir ("az" mənasında)?',
          options: ['few', 'many', 'a few', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı söz gündəlik həyata aid deyil?',
          options: ['furniture', 'traffic', 'anger', 'shopping'],
          answer: 'anger',
        },
        {
          q: '"communication" nə deməkdir?',
          options: ['davranış', 'rabitə', 'əməkdaşlıq', 'iqtisadiyyat'],
          answer: 'rabitə',
        },
        {
          q: '"ice" ilə hansı ifadə düzgündür?',
          options: ['an ice', 'many ices', 'much ice', 'few ices'],
          answer: 'much ice',
        },
      ],
    },
  ],
},

// ── index: 40 — Mini-quiz 8 (Bölmə 8 ümumi quiz) ─────────────
[
  // ── Qida və içki ───────────────────────────────────────────
  { en: 'water',       tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'milk',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Çox çay → ____',       tr: 'much tea',      wrong: 'many tea'     },
  { en: 'Az qənd → ____',       tr: 'little sugar',  wrong: 'few sugar'    },
  { en: 'bread',       tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'rice',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Honey ___ sweet.',     tr: 'is',            wrong: 'are'          },
  { en: 'Flour ___ needed.',    tr: 'is',            wrong: 'are'          },
  { en: 'Az yağ → ____',        tr: 'little butter', wrong: 'few butter'   },
  { en: 'Çox un → ____',        tr: 'much flour',    wrong: 'many flour'   },
  { en: '"a juice" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"many rices" düzgündürmü?',      tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Material adları ────────────────────────────────────────
  { en: 'silk',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'gold',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'iron',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Silk ___ expensive.',  tr: 'is',            wrong: 'are'          },
  { en: 'Gold ___ valuable.',   tr: 'is',            wrong: 'are'          },
  { en: 'Çox kağız → ____',     tr: 'much paper',    wrong: 'many paper'   },
  { en: 'Az benzin → ____',     tr: 'little petrol', wrong: 'few petrol'   },
  { en: '"a cotton" düzgündürmü?',        tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: 'wool — "az" mənasında → ____',   tr: 'little wool',   wrong: 'few wool'     },
  { en: 'chalk nə deməkdir?',             tr: 'təbaşir',       wrong: 'taxta'        },
  { en: 'ink nə deməkdir?',              tr: 'mürəkkəb',      wrong: 'benzin'       },
  { en: 'coal nə deməkdir?',             tr: 'kömür',         wrong: 'dəmir'        },

  // ── Hisslər ────────────────────────────────────────────────
  { en: 'love',        tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'anger',       tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Love ___ beautiful.',  tr: 'is',            wrong: 'are'          },
  { en: 'Fear ___ natural.',    tr: 'is',            wrong: 'are'          },
  { en: 'joy nə deməkdir?',              tr: 'sevinc',        wrong: 'qorxu'        },
  { en: 'pity nə deməkdir?',             tr: 'təəssüf',       wrong: 'sevgi'        },
  { en: '"a fear" düzgündürmü?',          tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Keyfiyyət adları ───────────────────────────────────────
  { en: 'happiness',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'strength',    tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Health ___ important.',   tr: 'is',           wrong: 'are'          },
  { en: 'Beauty ___ in the eye.', tr: 'is',           wrong: 'are'          },
  { en: 'courage nə deməkdir?',          tr: 'cəsarət',       wrong: 'səbr'         },
  { en: 'wealth nə deməkdir?',           tr: 'var-dövlət',    wrong: 'sağlamlıq'    },
  { en: 'Çox bəxt → ____',         tr: 'much luck',     wrong: 'many luck'    },

  // ── Fəaliyyət adları ───────────────────────────────────────
  { en: 'knowledge',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'advice',      tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Knowledge ___ power.',    tr: 'is',            wrong: 'are'          },
  { en: 'Progress ___ made.',      tr: 'is',            wrong: 'are'          },
  { en: '"advices" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"researches" düzgündürmü?',      tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: 'experience nə deməkdir?',        tr: 'təcrübə',       wrong: 'məsləhət'     },
  { en: 'Çox məsləhət → ____',     tr: 'much advice',   wrong: 'many advice'  },

  // ── Gündəlik həyat ─────────────────────────────────────────
  { en: 'furniture',   tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'traffic',     tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Furniture ___ expensive.', tr: 'is',          wrong: 'are'          },
  { en: 'traffic nə deməkdir?',          tr: 'nəqliyyat',     wrong: 'bazarlıq'     },
  { en: 'soap nə deməkdir?',             tr: 'sabun',         wrong: 'şampun'       },
  { en: 'garbage nə deməkdir?',          tr: 'zibil',         wrong: 'poçt'         },
  { en: '"a furniture" düzgündürmü?',     tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Digər mücərrəd isimlər ─────────────────────────────────
  { en: 'pollution',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'peace',       tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Music ___ wonderful.',     tr: 'is',            wrong: 'are'          },
  { en: 'Peace ___ important.',     tr: 'is',            wrong: 'are'          },
  { en: 'gossip nə deməkdir?',           tr: 'şayiə',         wrong: 'cəfəngiyyat'  },
  { en: 'flu nə deməkdir?',              tr: 'soyuqdəymə',    wrong: 'ziyan'        },
  { en: 'charity nə deməkdir?',          tr: 'xeyriyyə',      wrong: 'yardım'       },
  { en: 'evidence nə deməkdir?',         tr: 'dəlil, sübut',  wrong: 'şayiə'        },
  { en: 'hospitality nə deməkdir?',      tr: 'qonaqpərvərlik',wrong: 'əməkdaşlıq'  },

  // ── Təbiət hadisələri ──────────────────────────────────────
  { en: 'rain',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'snow',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Snow ___ cold.',         tr: 'is',            wrong: 'are'          },
  { en: 'Weather ___ nice today.',tr: 'is',            wrong: 'are'          },
  { en: 'thunder nə deməkdir?',          tr: 'şimşək, ildırım',wrong: 'toz'         },
  { en: 'mud nə deməkdir?',              tr: 'palçıq',        wrong: 'qum'          },
  { en: 'sunshine nə deməkdir?',         tr: 'günəş işığı',   wrong: 'ay işığı'     },
  { en: 'Çox toz → ____',          tr: 'much dust',     wrong: 'many dust'    },
  { en: '"a snow" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
],

// ── index: 41 — Test 3 (Final — Bölmə 1-dən 8-ə qədər) ───────
[
  // ── Bölmə 1: Quruluş ───────────────────────────────────────
  { en: '"sunrise" hansı quruluş?',          tr: 'Compound noun',   wrong: 'Derivative noun' },
  { en: '"kindness" hansı quruluş?',         tr: 'Derivative noun', wrong: 'Simple noun'     },
  { en: '"hand" hansı quruluş?',             tr: 'Simple noun',     wrong: 'Compound noun'   },
  { en: 'teach → ____',                      tr: 'teacher',         wrong: 'teachness'       },
  { en: 'develop → ____',                    tr: 'development',     wrong: 'developness'     },
  { en: 'free → ____',                       tr: 'freedom',         wrong: 'freehood'        },
  { en: '"heroism" hansı şəkilçi?',          tr: '-ism',            wrong: '-ship'           },
  { en: '"childhood" hansı şəkilçi?',        tr: '-hood',           wrong: '-dom'            },

  // ── Bölmə 2: Common / Proper / Concrete / Abstract ─────────
  { en: '"February" hansı növ?',             tr: 'Proper noun',     wrong: 'Common noun'     },
  { en: '"a lake" hansı növ?',               tr: 'Common noun',     wrong: 'Proper noun'     },
  { en: '"freedom" hansı növ?',              tr: 'Abstract',        wrong: 'Concrete'        },
  { en: '"a table" hansı növ?',              tr: 'Concrete',        wrong: 'Abstract'        },
  { en: '"a good knowledge" — niyə a?',      tr: 'Sifət var',       wrong: 'Countable-dır'   },
  { en: 'actor → ____',                      tr: 'actress',         wrong: 'actoress'        },
  { en: 'Ölkə → hansı əvəzlik?',            tr: 'she',             wrong: 'it'              },

  // ── Bölmə 3: Countable / Uncountable / Many / Much ─────────
  { en: '"advice" hansı növ?',               tr: 'Uncountable',     wrong: 'Countable'       },
  { en: '"student" hansı növ?',              tr: 'Countable',       wrong: 'Uncountable'     },
  { en: 'Çox kitab → ____',                  tr: 'many books',      wrong: 'much books'      },
  { en: 'Az vaxt → ____',                    tr: 'little time',     wrong: 'few time'        },
  { en: 'The news ___ good.',                tr: 'is',              wrong: 'are'             },
  { en: 'There are ___ information.',        tr: 'a lot of',        wrong: 'many'            },
  { en: 'He speaks ____.',                   tr: 'a lot',           wrong: 'a lot of'        },

  // ── Bölmə 4: Kollektiv isimlər ─────────────────────────────
  { en: 'The police ___ there.',             tr: 'were',            wrong: 'was'             },
  { en: 'My family ___ large. (bir bütün)',  tr: 'is',              wrong: 'are'             },
  { en: 'People ___ strange.',               tr: 'are',             wrong: 'is'              },
  { en: 'Money ___ money.',                  tr: 'makes',           wrong: 'make'            },
  { en: 'cattle — "çox" mənasında → ____',   tr: 'much',            wrong: 'many'            },

  // ── Bölmə 5: Cəm formaları ─────────────────────────────────
  { en: 'box → ____',                        tr: 'boxes',           wrong: 'boxs'            },
  { en: 'tooth → ____',                      tr: 'teeth',           wrong: 'tooths'          },
  { en: 'child → ____',                      tr: 'children',        wrong: 'childs'          },
  { en: 'wife → ____',                       tr: 'wives',           wrong: 'wifes'           },
  { en: 'roof → ____',                       tr: 'roofs',           wrong: 'rooves'          },
  { en: 'potato → ____',                     tr: 'potatoes',        wrong: 'potatos'         },
  { en: 'radio → ____',                      tr: 'radios',          wrong: 'radioes'         },
  { en: 'city → ____',                       tr: 'cities',          wrong: 'citys'           },
  { en: 'day → ____',                        tr: 'days',            wrong: 'daies'           },
  { en: 'postman → ____',                    tr: 'postmen',         wrong: 'postmans'        },
  { en: 'German → ____',                     tr: 'Germans',         wrong: 'Germens'         },

  // ── Bölmə 6: Xüsusi cəm halları ────────────────────────────
  { en: 'Where ___ my scissors?',            tr: 'are',             wrong: 'is'              },
  { en: 'Five sheep ___ grazing.',           tr: 'are',             wrong: 'is'              },
  { en: 'Physics ___ difficult.',            tr: 'is',              wrong: 'are'             },
  { en: 'Her hair ___ beautiful.',           tr: 'is',              wrong: 'are'             },
  { en: 'Bir qayçı → ____',                  tr: 'a pair of scissors', wrong: 'a scissors'   },
  { en: 'Today ___ a holiday. (bayram)',     tr: 'is',              wrong: 'are'             },

  // ── Bölmə 7: Possessive case ───────────────────────────────
  { en: 'oğlanın topu → ____',              tr: "the boy's ball",    wrong: "the boys' ball"    },
  { en: 'müəllimlərin otağı → ____',        tr: "the teachers' room",wrong: "the teacher's room"},
  { en: 'uşaqların oyuncaqları → ____',     tr: "the children's toys",wrong: "the childrens' toys"},
  { en: 'stolun qılçası → ____',            tr: 'the leg of the table',wrong: "the table's leg" },
  { en: 'bu günkü qəzet → ____',           tr: "today's newspaper", wrong: 'the newspaper of today'},
  { en: 'iki günlük istirahət → ____',      tr: "two days' rest",    wrong: 'the rest of two days'},
  { en: 'eyni ev (Tom və Nick) → ____',     tr: "Tom and Nick's house",wrong: "Tom's and Nick's house"},

  // ── Bölmə 8: Vocabulary bank ───────────────────────────────
  { en: 'silk',                              tr: 'Uncountable',     wrong: 'Countable'       },
  { en: 'gold',                              tr: 'Uncountable',     wrong: 'Countable'       },
  { en: 'love',                              tr: 'Abstract',        wrong: 'Concrete'        },
  { en: 'knowledge',                         tr: 'Abstract',        wrong: 'Concrete'        },
  { en: 'Honey ___ sweet.',                  tr: 'is',              wrong: 'are'             },
  { en: 'Music ___ wonderful.',              tr: 'is',              wrong: 'are'             },
  { en: 'Çox mürəkkəb → ____',               tr: 'much ink',        wrong: 'many ink'        },
  { en: 'Az palçıq → ____',                  tr: 'little mud',      wrong: 'few mud'         },
  { en: 'joy nə deməkdir?',                  tr: 'sevinc',          wrong: 'qorxu'           },
  { en: 'courage nə deməkdir?',              tr: 'cəsarət',         wrong: 'səbr'            },
  { en: 'pollution nə deməkdir?',            tr: 'çirklənmə',       wrong: 'ziyan'           },
  { en: 'hospitality nə deməkdir?',          tr: 'qonaqpərvərlik',  wrong: 'əməkdaşlıq'     },
  { en: 'thunder nə deməkdir?',              tr: 'şimşək, ildırım', wrong: 'toz'             },
  { en: 'charity nə deməkdir?',              tr: 'xeyriyyə',        wrong: 'yardım'          },
  { en: '"a flour" düzgündürmü?',            tr: 'Xeyr',            wrong: 'Bəli'            },
  { en: '"advices" düzgündürmü?',            tr: 'Xeyr',            wrong: 'Bəli'            },
],],
  },

];

const VERBS_LEVEL = {
  id: 'verbs',
  name: 'VERBS',
  icon: '<i class="ti ti-bolt"></i>',
  color: '#FBBD3E',
  quizzes: [

   
// ── index: 1 — Dərs 1.1 ──────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Düzəlmə: to, III şəxs -s/-es',
  cards: [

    // ── Ekran 1: Əsas qayda ──────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present necə düzəlir?',
      content: 'Simple Present zamanı düzəltmək üçün məsdərdən "to" ədatı atılır, fel olduğu kimi qalır.\n\nYalnız III şəxs təkdə (he/she/it) fel "-s" və ya "-es" sonluğu alır.',
      table: [
        ['Şəxs',        'Tək',      'Cəm'],
        ['I',           'go',       'We go'],
        ['You',         'go',       'You go'],
        ['He/She/It',   'goes',     'They go'],
      ],
      note: '"-es" əlavə edilən hallar: fel s, ss, sh, ch, tch, x, z, o hərfləri ilə bitirsə III şəxs təkdə "-es" alır.',
    },

    // ── Ekran 2: -es nümunələri ──────────────────────────
    {
      type: 'lesson',
      title: '-s və -es nümunələri',
      content: 'III şəxs təkdə düzgün formanı seç:',
      examples: [
        { word: 'teach → he teaches',  az: '-ch ilə bitir → -es' },
        { word: 'pass → she passes',   az: '-ss ilə bitir → -es' },
        { word: 'go → he goes',        az: '-o ilə bitir → -es'  },
        { word: 'watch → she watches', az: '-tch ilə bitir → -es' },
        { word: 'read → she reads',    az: 'adi hal → -s'        },
        { word: 'play → he plays',     az: 'adi hal → -s'        },
      ],
      tip: 'Adi fellər yalnız -s alır. Xüsusi bitişlər (-s, -sh, -ch, -x, -o) isə -es alır.',
    },

    // ── Mini-check: -s / -es ─────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"teach" felinin III şəxs tək forması necədir?',
          options: ['teachs', 'teaches', 'teachies', 'teaching'],
          answer: 'teaches',
        },
        {
          q: '"read" felinin III şəxs tək forması necədir?',
          options: ['reades', 'readings', 'reads', 'reades'],
          answer: 'reads',
        },
        {
          q: '"go" felinin III şəxs tək forması necədir?',
          options: ['gos', 'goes', 'goies', 'going'],
          answer: 'goes',
        },
        {
          q: 'Hansı felin III şəxs tək forması "-es" alır?',
          options: ['play', 'read', 'work', 'watch'],
          answer: 'watch',
        },
        {
          q: '"pass" felinin III şəxs tək forması necədir?',
          options: ['passs', 'passies', 'passes', 'passing'],
          answer: 'passes',
        },
      ],
    },

    // ── Ekran 3: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — sual necə düzəlir?',
      content: 'Sual formasını düzəltmək üçün "to do" köməkçi felindən istifadə edilir.\n\nQayda: "do" / "does" mübtədadan əvvələ keçir. III şəxs təkdə "does" işlənir — bu zaman əsas felin "-s" / "-es" sonluğu düşür.',
      table: [
        ['Şəxs',                  'Sual'],
        ['I / You / We / They',   'Do I/you/we/they go?'],
        ['He / She / It',         'Does he/she/it go?'],
      ],
      examples: [
        { word: 'Do I go?',        az: '✅ düzgün' },
        { word: 'Does he go?',     az: '✅ düzgün' },
        { word: 'Does he goes?',   az: '❌ yanlış — "-s" düşür' },
      ],
      note: 'Qısa cavab:\nYes, I do. / No, I don\'t.\nYes, he does. / No, he doesn\'t.',
    },

    // ── Mini-check: Sual forması ─────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ he speak English well?" — boşluğa nə gəlir?',
          options: ['Do', 'Is', 'Does', 'Did'],
          answer: 'Does',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Does he goes to school?',
            'Do he go to school?',
            'Does he go to school?',
            'Does he going to school?',
          ],
          answer: 'Does he go to school?',
        },
        {
          q: '"Do they work here?" — qısa müsbət cavab necədir?',
          options: ['Yes, they do.', 'Yes, they does.', 'Yes, they are.', 'Yes, they work.'],
          answer: 'Yes, they do.',
        },
        {
          q: '"Does she like coffee?" — qısa mənfi cavab necədir?',
          options: ['No, she doesn\'t.', 'No, she don\'t.', 'No, she does.', 'No, she isn\'t.'],
          answer: 'No, she doesn\'t.',
        },
      ],
    },

    // ── Ekran 4: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — inkar necə düzəlir?',
      content: 'İnkar formasını düzəltmək üçün mübtədadan sonra "do not" (don\'t) və ya "does not" (doesn\'t) əlavə edilir.',
      table: [
        ['Şəxs',    'Tam inkar',          'Qısa inkar'],
        ['I',       'I do not read',       'I don\'t read'],
        ['You',     'You do not read',     'You don\'t read'],
        ['He/She',  'He does not read',    'He doesn\'t read'],
        ['We/They', 'We do not read',      'We don\'t read'],
      ],
      examples: [
        { word: 'Don\'t I go? = Do I not go?',       az: 'Sual-inkar forması' },
        { word: 'Doesn\'t he go? = Does he not go?', az: 'Sual-inkar forması' },
      ],
    },

    // ── Mini-check: İnkar forması ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ like coffee." — boşluğa nə gəlir?',
          options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'],
          answer: 'doesn\'t',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'He don\'t work here.',
            'She doesn\'t works here.',
            'They doesn\'t work here.',
            'I don\'t work here.',
          ],
          answer: 'I don\'t work here.',
        },
        {
          q: '"We do not go" — qısa forması necədir?',
          options: ['We doesn\'t go', 'We don\'t go', 'We not go', 'We aren\'t go'],
          answer: 'We don\'t go',
        },
      ],
    },
  ],
},

// ── index: 2 — Dərs 1.2 ──────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — İşlənmə: adat, həqiqət, xarakter',
  cards: [

    // ── Ekran 1: 4 əsas işlənmə halı ─────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — 4 əsas işlənmə halı',
      content: 'Simple Present aşağıdakı hallarda işlənir:',
      examples: [
        { word: '1. Adət halına almış, təkrarlanan hərəkətlər', az: 'every day, usually, always...' },
        { word: '2. Ümumi həqiqətlər',                          az: 'təbiət, elm faktları'          },
        { word: '3. Şəxsi xüsusiyyətlər',                      az: 'daimi vərdişlər, bacarıqlar'   },
        { word: '4. Zaman və şərt budaq cümlələri',             az: 'when, if, before, until...'    },
      ],
      tip: 'Zaman zərfləri: every day/week/month/year, usually, always, often, sometimes, seldom, once a week, on Sundays',
    },

    // ── Ekran 2: Adət + Həqiqət ──────────────────────────
    {
      type: 'lesson',
      title: 'Adət və ümumi həqiqətlər',
      content: '1. Adət halına almış, təkrarlanan hərəkətlər:',
      examples: [
        { word: 'I go to the institute every day.',    az: 'Mən hər gün institutа gedirəm.' },
        { word: 'They usually have dinner at five.',   az: 'Onlar adətən saat 5-də nahar edirlər.' },
      ],
      note: '2. Ümumi həqiqətlər — təbiət və cəmiyyətdə daima doğru olan faktlar:',
    },

    // ── Ekran 3: Həqiqətlər + Xüsusiyyətlər ─────────────
    {
      type: 'lesson',
      title: 'Ümumi həqiqətlər və şəxsi xüsusiyyətlər',
      content: 'Ümumi həqiqətlər:',
      examples: [
        { word: 'The sun rises in the East.',          az: 'Günəş şərqdən doğur.' },
        { word: 'Water boils at 100 degrees.',         az: 'Su 100 dərəcədə qaynayır.' },
        { word: 'The Earth travels around the Sun.',   az: 'Yer Günəşin ətrafında fırlanır.' },
        { word: 'He sleeps soundly.',                  az: 'O möhkəm yatır. (xüsusiyyət)' },
        { word: 'She plays tennis well.',              az: 'O tennis yaxşı oynayır. (xüsusiyyət)' },
      ],
    },

    // ── Mini-check: İşlənmə halları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The sun rises in the East." — bu cümlə Simple Present-in hansı işlənmə halıdır?',
          options: ['Adət', 'Ümumi həqiqət', 'Xüsusiyyət', 'Şərt budaq cümləsi'],
          answer: 'Ümumi həqiqət',
        },
        {
          q: '"I go to the institute every day." — hansı işlənmə halıdır?',
          options: ['Ümumi həqiqət', 'Şərt budaq cümləsi', 'Adət', 'Xüsusiyyət'],
          answer: 'Adət',
        },
        {
          q: '"She plays tennis well." — hansı işlənmə halıdır?',
          options: ['Adət', 'Ümumi həqiqət', 'Şərt budaq cümləsi', 'Xüsusiyyət'],
          answer: 'Xüsusiyyət',
        },
        {
          q: 'Hansı zaman zərfi Simple Present ilə işlənir?',
          options: ['yesterday', 'tomorrow', 'usually', 'right now'],
          answer: 'usually',
        },
      ],
    },

    // ── Ekran 4: Zaman + Şərt budaq cümlələri ───────────
    {
      type: 'lesson',
      title: 'Zaman və şərt budaq cümlələri',
      content: '"till", "until", "when", "before", "as soon as", "if" bağlayıcılarından sonra gələcək zamanda baş verəcək hərəkətlər Simple Present ilə verilir.\n\nQayda:\n• Budaq cümlə (bağlayıcı olan tərəf) → Simple Present\n• Baş cümlə → Future (will/shall)',
      examples: [
        { word: 'I shall go to the cinema if she comes.',    az: 'if → Simple Present' },
        { word: 'When it stops raining, we will go out.',    az: 'when → Simple Present' },
        { word: 'Call me as soon as you arrive.',            az: 'as soon as → Simple Present' },
      ],
      tip: 'Bağlayıcıdan sonra "will" işlənmir — bu ən çox yol verilən səhvdir!',
    },

    // ── Mini-check: Zaman + Şərt budaq cümlələri ────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I shall go if she ___." — boşluğa nə gəlir?',
          options: ['will come', 'comes', 'is coming', 'came'],
          answer: 'comes',
        },
        {
          q: '"When it ___ raining, we will go out." — boşluğa nə gəlir?',
          options: ['will stop', 'stopped', 'stops', 'is stopping'],
          answer: 'stops',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Call me as soon as you will arrive.',
            'Call me as soon as you arrive.',
            'Call me as soon as you arrived.',
            'Call me as soon as you are arriving.',
          ],
          answer: 'Call me as soon as you arrive.',
        },
        {
          q: '"if", "when", "before" bağlayıcılarından sonra gələcəyi ifadə etmək üçün hansı zaman işlənir?',
          options: ['Simple Future', 'Simple Past', 'Simple Present', 'Present Continuous'],
          answer: 'Simple Present',
        },
        {
          q: '"Till she ___, I will wait here." — boşluğa nə gəlir?',
          options: ['will come', 'is coming', 'came', 'comes'],
          answer: 'comes',
        },
      ],
    },

    // ── Ekran 5: Azərbaycana tərcümə + Xülasə ───────────
    {
      type: 'lesson',
      title: 'Xülasə — Simple Present',
      content: 'Simple Present bir qayda olaraq Azərbaycan dilinin indiki zaman forması kimi tərcümə olunur.',
      table: [
        ['İngilis',                        'Azərbaycan'],
        ['I go to school.',                'Mən məktəbə gedirəm.'],
        ['She reads books.',               'O kitab oxuyur.'],
        ['The sun rises in the East.',     'Günəş şərqdən doğur.'],
      ],
      note: 'Düzəlmə xülasəsi:\n• Əsas forma: to → at (to go → go)\n• III şəxs tək: -s / -es\n• Sual: Do / Does + məsdər\n• İnkar: don\'t / doesn\'t + məsdər',
    },
  ],
},

// ── index: 3 — Mini-quiz 1 ────────────────────────────────
// Do/Does · Doğru forma tap · Zaman zərfi ilə uyğunlaşdır
[
  // III şəxs tək forması
  { en: 'teach → he ____',           tr: 'teaches',    wrong: 'teachs'      },
  { en: 'go → she ____',             tr: 'goes',       wrong: 'gos'         },
  { en: 'read → he ____',            tr: 'reads',      wrong: 'reades'      },
  { en: 'watch → she ____',          tr: 'watches',    wrong: 'watchs'      },
  { en: 'play → he ____',            tr: 'plays',      wrong: 'plaies'      },
  { en: 'pass → she ____',           tr: 'passes',     wrong: 'passs'       },

  // Do / Does sual
  { en: '"___ she like coffee?"',    tr: 'Does',       wrong: 'Do'          },
  { en: '"___ they work here?"',     tr: 'Do',         wrong: 'Does'        },
  { en: '"___ he go to school?"',    tr: 'Does',       wrong: 'Do'          },
  { en: '"___ we need help?"',       tr: 'Do',         wrong: 'Does'        },

  // İnkar
  { en: 'She ___ like coffee.',      tr: 'doesn\'t',   wrong: 'don\'t'      },
  { en: 'They ___ work here.',       tr: 'don\'t',     wrong: 'doesn\'t'    },
  { en: 'He ___ read books.',        tr: 'doesn\'t',   wrong: 'don\'t'      },

  // Düzgün / yanlış forma
  { en: 'Does he go? — düzgündürmü?',   tr: 'Bəli',   wrong: 'Xeyr'        },
  { en: 'Does he goes? — düzgündürmü?', tr: 'Xeyr',   wrong: 'Bəli'        },
  { en: 'Do she go? — düzgündürmü?',    tr: 'Xeyr',   wrong: 'Bəli'        },

  // İşlənmə halları
  { en: '"The sun rises in the East." — hansı hal?', tr: 'Ümumi həqiqət', wrong: 'Adət'       },
  { en: '"I go there every day." — hansı hal?',      tr: 'Adət',          wrong: 'Ümumi həqiqət' },
  { en: '"She plays tennis well." — hansı hal?',     tr: 'Xüsusiyyət',    wrong: 'Adət'       },

  // Zaman + şərt budaq cümlələri
  { en: '"If she ___, I will go." — boşluq',         tr: 'comes',         wrong: 'will come'  },
  { en: '"When it ___ raining, we\'ll go out."',     tr: 'stops',         wrong: 'will stop'  },
  { en: '"Call me as soon as you ___."',              tr: 'arrive',        wrong: 'will arrive'},

  // Zaman zərfləri
  { en: 'Simple Present ilə işlənən zərf',           tr: 'usually',       wrong: 'yesterday'  },
  { en: 'Simple Present ilə işlənən zərf',           tr: 'every day',     wrong: 'tomorrow'   },
],
   

 // ============================================================
//  BÖLMƏ 2 — Simple Past (Past Indefinite)
//  grammar-data.js faylına əlavə et
// ============================================================

// ── Bölmə 2 Divider ──────────────────────────────────────
{ type: 'section_divider', title: 'Bölmə 1 — Simple Present (Present Indefinite)' },


// ── Dərs 2.1 — Qaydalı fellər ────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Qaydalı fellər və -ed tələffüzü',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past necə düzəlir?',
      content: 'Simple Past zamanı keçmişdə baş vermiş hərəkətləri bildirir.\n\nQaydalı fellərin (regular verbs) keçmiş zaman formasını düzəltmək üçün:\n• Məsdərdən "to" atılır\n• Felin sonuna "-ed" əlavə edilir\n• Bütün şəxslərdə eyni qalır',
      table: [
        ['Şəxs', 'Tək', 'Cəm'],
        ['I',        'worked', 'We worked'],
        ['You',      'worked', 'You worked'],
        ['He/She/It','worked', 'They worked'],
      ],
      tip: 'Simple Present-dən fərqli olaraq Simple Past-da III şəxs təkdə əlavə dəyişiklik olmur — hamı eyni formadadır.',
    },

    // ── Ekran 2: -ed tələffüzü ───────────────────────────
    {
      type: 'lesson',
      title: '"-ed" sonluğunun tələffüzü',
      content: '"-ed" sonluğu üç cür tələffüz edilir. Bu, feldən əvvəlki səsdən asılıdır:',
      table: [
        ['Tələffüz', 'Şərt',                          'Nümunə'],
        ['[d]',      'Sait və cingiltili samitdən sonra', 'played, lived, opened'],
        ['[t]',      'Kar samitdən sonra',               'asked, worked, stopped'],
        ['[ɪd]',     '"d" və "t" samitlərindən sonra',   'added, wanted, started'],
      ],
      note: 'Yalnız "d" və "t" ilə bitən fellərdə "-ed" [ɪd] kimi tam bir heca əmələ gətirir.',
    },

    // ── Quiz: -ed tələffüzü ──────────────────────────────
    { en: '"played" — "-ed" necə oxunur?',  tr: '[d]',  wrong: '[t]'  },
    { en: '"asked" — "-ed" necə oxunur?',   tr: '[t]',  wrong: '[ɪd]' },
    { en: '"wanted" — "-ed" necə oxunur?',  tr: '[ɪd]', wrong: '[d]'  },
    { en: '"lived" — "-ed" necə oxunur?',   tr: '[d]',  wrong: '[ɪd]' },
    { en: '"stopped" — "-ed" necə oxunur?', tr: '[t]',  wrong: '[d]'  },

    // ── Ekran 3: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — sual forması',
      content: 'Sual formasını düzəltmək üçün "did" köməkçi feli mübtədadan əvvələ keçir.\n\nBu zaman əsas felin "-ed" sonluğu düşür — fel başlanğıc formasına qayıdır.',
      table: [
        ['Şəxs',          'Sual forması'],
        ['I / You / We / They', 'Did I / you / we / they work?'],
        ['He / She / It',       'Did he / she / it work?'],
      ],
      examples: [
        { word: 'Did he work?', az: '✅ düzgün' },
        { word: 'Did he worked?', az: '❌ yanlış — "did" artıq keçmişi bildirir' },
      ],
      note: 'Qısa cavab: "Yes, I did." / "No, I didn\'t." / "Yes, he did." / "No, he didn\'t."',
    },

    // ── Ekran 4: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — inkar forması',
      content: 'İnkar formasını düzəltmək üçün mübtədadan sonra "did not" (didn\'t) əlavə edilir.\n\nBurada da əsas felin "-ed" sonluğu düşür.',
      table: [
        ['Şəxs',   'Tam inkar',            'Qısa inkar'],
        ['I',      'I did not work',       'I didn\'t work'],
        ['You',    'You did not work',     'You didn\'t work'],
        ['He/She', 'He did not work',      'He didn\'t work'],
        ['We/They','We did not work',      'We didn\'t work'],
      ],
      tip: 'Sual-inkar: "Did I not go?" = "Didn\'t I go?" — hər ikisi düzgündür.',
    },

    // ── Mini-check: Qaydalı fellər ───────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ to school yesterday." — Boşluğa nə gəlir?',
          options: ['go', 'goes', 'went', 'walked'],
          answer: 'walked',
        },
        {
          q: '"___ he speak English well?" — sual forması?',
          options: ['Do', 'Does', 'Did', 'Was'],
          answer: 'Did',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'She didn\'t go to school.',
            'Did he played football?',
            'I didn\'t like coffee.',
            'They didn\'t work here.',
          ],
          answer: 'Did he played football?',
        },
        {
          q: '"worked" sözündəki "-ed" necə oxunur?',
          options: ['[d]', '[t]', '[ɪd]', '[ed]'],
          answer: '[t]',
        },
        {
          q: '"added" sözündəki "-ed" necə oxunur?',
          options: ['[d]', '[t]', '[ɪd]', '[æd]'],
          answer: '[ɪd]',
        },
        {
          q: '"I ___ my homework last night." — Boşluğa nə gəlir?',
          options: ['finish', 'finishes', 'finished', 'finishing'],
          answer: 'finished',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Qaydasız fellər ───────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Qaydasız fellər (Irregular Verbs)',
  cards: [

    // ── Ekran 1: Giriş + qruplar ─────────────────────────
    {
      type: 'lesson',
      title: 'Qaydasız fellər — 5 qrup',
      content: 'Qaydasız fellərin (irregular verbs) keçmiş zamanı "-ed" ilə deyil, müxtəlif yollarla düzəlir.\n\nBu fellər 5 qrupa bölünür:',
      examples: [
        { word: '1. Kök + "-en" artır',        az: 'write → wrote → written' },
        { word: '2. Kök + "-d"/"-t" artır',    az: 'sell → sold → sold' },
        { word: '3. "-d" samiti "-t"-yə çevrilir', az: 'spend → spent → spent' },
        { word: '4. Heç dəyişmir',             az: 'cut → cut → cut' },
        { word: '5. Hər üç forması fərqlidir', az: 'go → went → gone' },
      ],
      tip: 'Bu fellərin keçmiş zaman formalarını əzbərləmək lazımdır — qayda yoxdur!',
    },

    // ── Ekran 2: Qrup 1 — kök dəyişir + en ──────────────
    {
      type: 'lesson',
      title: 'Qrup 1 — Kök dəyişir + "-en" artır',
      content: 'Bu fellərin Past Simple formasında kökdəki sait dəyişir:\n(Past Participle — P II — "-en" qəbul edir)',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['write',  'wrote',      'written'],
        ['speak',  'spoke',      'spoken'],
        ['break',  'broke',      'broken'],
        ['drive',  'drove',      'driven'],
        ['give',   'gave',       'given'],
        ['ride',   'rode',       'ridden'],
        ['choose', 'chose',      'chosen'],
        ['freeze', 'froze',      'frozen'],
        ['take',   'took',       'taken'],
      ],
    },

    // ── Quiz: Qrup 1 ─────────────────────────────────────
    { en: 'write → Past Simple?',  tr: 'wrote',  wrong: 'writed'  },
    { en: 'speak → Past Simple?',  tr: 'spoke',  wrong: 'speaked' },
    { en: 'break → Past Simple?',  tr: 'broke',  wrong: 'breaked' },
    { en: 'drive → Past Simple?',  tr: 'drove',  wrong: 'drived'  },
    { en: 'give → Past Simple?',   tr: 'gave',   wrong: 'gived'   },

    // ── Ekran 3: Qrup 2 — kök dəyişir + -d/-t ───────────
    {
      type: 'lesson',
      title: 'Qrup 2 — Kök dəyişir + "-d"/"-t" artır',
      content: 'Bu fellərdə kökdəki sait dəyişir VƏ sonuna "d" ya "t" samiti artır.\nPast Simple = P II (eyni forma):',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['sell',   'sold',  'sold'],
        ['tell',   'told',  'told'],
        ['feel',   'felt',  'felt'],
        ['keep',   'kept',  'kept'],
        ['sleep',  'slept', 'slept'],
        ['meet',   'met',   'met'],
        ['leave',  'left',  'left'],
        ['lose',   'lost',  'lost'],
        ['find',   'found', 'found'],
        ['hear',   'heard', 'heard'],
      ],
    },

    // ── Ekran 4: Qrup 3 — d→t çevrilir ──────────────────
    {
      type: 'lesson',
      title: 'Qrup 3 — "-d" samiti "-t"-yə çevrilir',
      content: 'Bu fellərdə kökün sonundakı "d" samiti "t"-yə çevrilir:\nPast Simple = P II (eyni forma):',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['spend',  'spent', 'spent'],
        ['send',   'sent',  'sent'],
        ['bend',   'bent',  'bent'],
        ['build',  'built', 'built'],
        ['lend',   'lent',  'lent'],
      ],
    },

    // ── Ekran 5: Qrup 4 — dəyişmir ──────────────────────
    {
      type: 'lesson',
      title: 'Qrup 4 — Dəyişməyən fellər',
      content: 'Bu fellər məsdər, Past Simple və P II formalarında eyni qalır:',
      examples: [
        { word: 'cut → cut → cut',       az: 'kəsmək' },
        { word: 'put → put → put',       az: 'qoymaq' },
        { word: 'let → let → let',       az: 'icazə vermək' },
        { word: 'hit → hit → hit',       az: 'vurmaq' },
        { word: 'hurt → hurt → hurt',    az: 'incitmək' },
        { word: 'cost → cost → cost',    az: 'dəymək (qiymət)' },
        { word: 'set → set → set',       az: 'qurmaq' },
        { word: 'read → read → read',    az: 'oxumaq ([riːd]→[red])' },
        { word: 'spread → spread → spread', az: 'yaymaq' },
        { word: 'shut → shut → shut',    az: 'bağlamaq' },
      ],
      tip: '"read" Past Simple-da eyni yazılır amma [red] kimi oxunur!',
    },

    // ── Ekran 6: Qrup 5 + Naqis fellər ──────────────────
    {
      type: 'lesson',
      title: 'Qrup 5 — Hər üç forması fərqli + Naqis fellər',
      content: 'Ən qeyri-müntəzəm qrup — hər üç forma tamamilə fərqlidir:',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['be',     'was / were', 'been'],
        ['go',     'went',       'gone'],
        ['do',     'did',        'done'],
        ['see',    'saw',        'seen'],
        ['buy',    'bought',     'bought'],
        ['bring',  'brought',    'brought'],
        ['think',  'thought',    'thought'],
        ['teach',  'taught',     'taught'],
        ['catch',  'caught',     'caught'],
      ],
      note: 'Modal fellərin keçmiş formaları:\ncan → could | will → would | may → might | shall → should\n\n"must" felinin keçmiş forması yoxdur — əvəzinə "had to" işlədilir.',
    },

    // ── Quiz: Qaydasız + Naqis ───────────────────────────
    { en: 'sell → Past Simple?',   tr: 'sold',    wrong: 'selled'  },
    { en: 'feel → Past Simple?',   tr: 'felt',    wrong: 'feeled'  },
    { en: 'go → Past Simple?',     tr: 'went',    wrong: 'goed'    },
    { en: 'cut → Past Simple?',    tr: 'cut',     wrong: 'cutted'  },
    { en: 'buy → Past Simple?',    tr: 'bought',  wrong: 'buyed'   },
    { en: '"can" → keçmiş forması?', tr: 'could', wrong: 'canned'  },
    { en: '"will" → keçmiş forması?', tr: 'would', wrong: 'willed' },

    // ── Mini-check: Qaydasız fellər ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"speak" felinin Past Simple forması hansıdır?',
          options: ['speaked', 'spoke', 'spoken', 'spake'],
          answer: 'spoke',
        },
        {
          q: 'Hansı fel Past Simple-da dəyişmir?',
          options: ['write', 'speak', 'cut', 'go'],
          answer: 'cut',
        },
        {
          q: '"can" felinin keçmiş forması nədir?',
          options: ['canned', 'was can', 'could', 'might'],
          answer: 'could',
        },
        {
          q: '"feel" → Past Simple?',
          options: ['feeled', 'felt', 'fallen', 'feel'],
          answer: 'felt',
        },
        {
          q: '"read" felinin Past Simple tələffüzü necədir?',
          options: ['[riːd]', '[red]', '[rɪd]', '[reɪd]'],
          answer: '[red]',
        },
        {
          q: '"will" felinin keçmiş forması nədir?',
          options: ['willed', 'would', 'should', 'could'],
          answer: 'would',
        },
        {
          q: '"send" → Past Simple?',
          options: ['sended', 'sent', 'sind', 'sand'],
          answer: 'sent',
        },
        {
          q: '"go" → Past Simple?',
          options: ['goed', 'gone', 'went', 'going'],
          answer: 'went',
        },
        {
          q: '"build" → Past Simple?',
          options: ['builded', 'built', 'bild', 'builed'],
          answer: 'built',
        },
        {
          q: '"must" felinin keçmiş forması nədir?',
          options: ['musted', 'should', 'could', 'had to'],
          answer: 'had to',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — İşlənmə + Qarışıq fellər ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — İşlənmə, Zaman zərfləri və Qarışıq fellər',
  cards: [

    // ── Ekran 1: 3 işlənmə halı ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — 3 əsas işlənmə halı',
      content: 'Simple Past zamanı üç əsas halda işlədilir:',
      examples: [
        { word: '1. Keçmişdə baş vermiş hərəkət', az: '"He went to the park yesterday."' },
        { word: '2. Keçmişdə ardıcıl hərəkətlər', az: '"He came in, greeted them and sat down."' },
        { word: '3. Keçmişdə müddətli hərəkət',   az: '"When I lived in the village, I swam every day."' },
      ],
      tip: 'Azərbaycan dilinə şühudi keçmiş zaman kimi tərcümə olunur (-dı/-di/-du/-dü).',
    },

    // ── Ekran 2: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — zaman zərfləri',
      content: 'Bu zərflər hərəkətin keçmişdə baş verdiyini bildirir. Cümlədə bu zərflərdən biri varsa Simple Past işlənir:',
      table: [
        ['Zaman zərfi',               'Mənası'],
        ['yesterday',                 'dünən'],
        ['the day before yesterday',  'srağagün'],
        ['... ago',                   '... əvvəl (two days ago)'],
        ['last week / month / year',  'keçən həftə/ay/il'],
        ['once',                      'bir dəfə, bir vaxtlar'],
        ['in 1994',                   '1994-cü ildə'],
        ['during the war',            'müharibə zamanı'],
        ['in my childhood / youth',   'uşaqlığımda / gəncliyimdə'],
        ['on Monday / on Sunday',     'bazar ertəsi / bazar günü'],
        ['the other day',             'bu yaxınlarda (keçmiş)'],
      ],
      note: 'Diqqət: "yesterday", "ago", "last" kimi zərflər olduqda mütləq Simple Past işlənir — Present Perfect deyil!',
    },

    // ── Ekran 3: used to + məsdər ────────────────────────
    {
      type: 'lesson',
      title: '"used to" — keçmişin vərdişi',
      content: 'Keçmişdə müntəzəm təkrarlanan, lakin artıq baş verməyən hərəkətlər üçün "used to + məsdər" işlənir.',
      examples: [
        { word: 'I used to go to the river.',      az: 'Mən çayda üzərdim. (indi etmirəm)' },
        { word: 'She used to play piano.',         az: 'O piano çalardı. (indi çalmır)' },
        { word: 'We used to live in Baku.',        az: 'Biz Bakıda yaşayardıq. (indi yaşamırıq)' },
        { word: 'When I was young I used to swim.', az: 'Gənc olanda üzərdim.' },
      ],
      note: 'Azərbaycan dilinə müzarəli keçmiş zaman kimi tərcümə olunur (-ər, -irdim kimi).\nI went to the forest every day. — Hər gün meşəyə gedərdim.',
    },

    // ── Mini-check: used to ──────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"used to" + _____ ? — hansı forma gəlir?',
          options: ['məsdər (to-suz)', 'məsdər (to ilə)', '-ing forması', '-ed forması'],
          answer: 'məsdər (to-suz)',
        },
        {
          q: '"I ___ swim in the river." — doğru forma?',
          options: ['use to', 'used to', 'am used to', 'was using'],
          answer: 'used to',
        },
        {
          q: '"used to" nə bildirir?',
          options: [
            'İndiki vərdiş',
            'Keçmişdə olan amma artıq olmayan vərdiş',
            'Gələcəkdə olacaq hərəkət',
            'Bitmiş hərəkət',
          ],
          answer: 'Keçmişdə olan amma artıq olmayan vərdiş',
        },
      ],
    },

    // ── Ekran 4: Qarışıq fellər ──────────────────────────
    {
      type: 'lesson',
      title: 'Qarışıq fellər (Mixed Verbs)',
      content: 'Qarışıq fellər (mixed verbs) — Past Simple forması qaydalı (-ed), Past Participle (P II) forması qaydasız olan fellərdir:',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['show',   'showed',      'shown'],
        ['learn',  'learned',     'learnt'],
        ['burn',   'burned',      'burnt'],
        ['dream',  'dreamed',     'dreamt'],
        ['sew',    'sewed',       'sewn'],
      ],
      note: 'Bu fellərin Past Simple forması qaydalı (-ed) düzəlir, lakin P II forması qaydasız olur.',
    },

    // ── Ekran 5: Müqayisə cədvəli ────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present vs Simple Past — müqayisə',
      content: 'İki zamanı fərqləndirən əsas cəhətlər:',
      table: [
        ['Xüsusiyyət',         'Simple Present',            'Simple Past'],
        ['Zaman',             'İndiki, adət',               'Keçmiş'],
        ['Qaydalı fel',       'work / works',               'worked'],
        ['Sual köməkçisi',    'do / does',                  'did'],
        ['İnkar',             'don\'t / doesn\'t',          'didn\'t'],
        ['III şəxs tək',      'works (-s əlavəsi)',          'worked (dəyişmir)'],
        ['Zaman zərfi',       'every day, usually',         'yesterday, ago, last'],
        ['Az. dilindəki forma', 'İndiki zaman (-ır/-ir)',   'Keçmiş zaman (-dı/-di)'],
      ],
    },

    // ── Mini-check: İşlənmə + Qarışıq fellər ─────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"He ___ to the park yesterday." — Boşluğa nə gəlir?',
          options: ['go', 'goes', 'went', 'going'],
          answer: 'went',
        },
        {
          q: 'Hansı zaman zərfi Simple Past ilə işlənir?',
          options: ['already', 'yet', 'yesterday', 'recently'],
          answer: 'yesterday',
        },
        {
          q: '"show" felinin Past Simple forması nədir?',
          options: ['shown', 'showed', 'shew', 'showded'],
          answer: 'showed',
        },
        {
          q: 'Simple Past Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'İndiki zaman (-ır/-ir)',
            'Şühudi keçmiş (-dı/-di)',
            'Nəqli keçmiş (-mış/-miş)',
            'Gələcək zaman (-acaq/-əcək)',
          ],
          answer: 'Şühudi keçmiş (-dı/-di)',
        },
        {
          q: '"used to" niyə işlənir?',
          options: [
            'Keçmişdə bir dəfə baş verən hərəkət üçün',
            'Keçmişdə müntəzəm olan amma artıq olmayan vərdiş üçün',
            'Gələcəkdə olacaq hərəkət üçün',
            'İndiki vərdiş üçün',
          ],
          answer: 'Keçmişdə müntəzəm olan amma artıq olmayan vərdiş üçün',
        },
        {
          q: '"She ___ coffee every day when she was a student." — Boşluğa nə gəlir?',
          options: ['drinks', 'drank', 'used to drink', 'is drinking'],
          answer: 'used to drink',
        },
        {
          q: 'Ardıcıl keçmiş hərəkətlər üçün hansı cümlə düzgündür?',
          options: [
            'He comes in, greets and sits down.',
            'He came in, greeted and sat down.',
            'He has come in, greeted and sat down.',
            'He was coming in, greeted and sat down.',
          ],
          answer: 'He came in, greeted and sat down.',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 — Bölmə 2 ümumi quiz ────────────────────
[
  // Qaydalı fellər — düzəlmə
  { en: '"work" → Past Simple?',   tr: 'worked',   wrong: 'workes'   },
  { en: '"play" → Past Simple?',   tr: 'played',   wrong: 'plaied'   },
  { en: '"study" → Past Simple?',  tr: 'studied',  wrong: 'studyed'  },
  { en: '"stop" → Past Simple?',   tr: 'stopped',  wrong: 'stoped'   },

  // -ed tələffüzü
  { en: '"opened" → tələffüz?',  tr: '[d]',  wrong: '[t]'  },
  { en: '"worked" → tələffüz?',  tr: '[t]',  wrong: '[d]'  },
  { en: '"started" → tələffüz?', tr: '[ɪd]', wrong: '[t]'  },
  { en: '"lived" → tələffüz?',   tr: '[d]',  wrong: '[ɪd]' },

  // Sual forması
  { en: 'Sual: "He worked." → ____', tr: 'Did he work?',  wrong: 'Did he worked?' },
  { en: '"___ she speak English?" — sual?', tr: 'Did', wrong: 'Does' },

  // İnkar forması
  { en: '"I ___ go to school." — inkar?', tr: 'didn\'t', wrong: 'don\'t' },
  { en: '"He ___ work yesterday." — inkar?', tr: 'didn\'t', wrong: 'doesn\'t' },

  // Qaydasız fellər — Qrup 1
  { en: 'write → Past Simple?',  tr: 'wrote',  wrong: 'writed'  },
  { en: 'speak → Past Simple?',  tr: 'spoke',  wrong: 'speaked' },
  { en: 'give → Past Simple?',   tr: 'gave',   wrong: 'gived'   },
  { en: 'drive → Past Simple?',  tr: 'drove',  wrong: 'drived'  },

  // Qaydasız fellər — Qrup 2
  { en: 'sell → Past Simple?',   tr: 'sold',   wrong: 'selled'  },
  { en: 'feel → Past Simple?',   tr: 'felt',   wrong: 'feeled'  },
  { en: 'leave → Past Simple?',  tr: 'left',   wrong: 'leaved'  },
  { en: 'find → Past Simple?',   tr: 'found',  wrong: 'finded'  },

  // Qrup 3 — d→t
  { en: 'spend → Past Simple?',  tr: 'spent',  wrong: 'spended' },
  { en: 'send → Past Simple?',   tr: 'sent',   wrong: 'sended'  },
  { en: 'build → Past Simple?',  tr: 'built',  wrong: 'builded' },

  // Qrup 4 — dəyişmir
  { en: 'cut → Past Simple?',    tr: 'cut',    wrong: 'cutted'  },
  { en: 'put → Past Simple?',    tr: 'put',    wrong: 'putted'  },
  { en: 'read [riːd] → Past Simple tələffüz?', tr: '[red]', wrong: '[riːd]' },

  // Qrup 5 — hər üçü fərqli
  { en: 'go → Past Simple?',     tr: 'went',   wrong: 'goed'    },
  { en: 'buy → Past Simple?',    tr: 'bought', wrong: 'buyed'   },
  { en: 'think → Past Simple?',  tr: 'thought', wrong: 'thinked' },
  { en: 'teach → Past Simple?',  tr: 'taught', wrong: 'teached' },

  // Modal fellər
  { en: '"can" → keçmiş forması?',  tr: 'could',  wrong: 'canned'  },
  { en: '"will" → keçmiş forması?', tr: 'would',  wrong: 'willed'  },
  { en: '"must" → keçmiş əvəzliyici?', tr: 'had to', wrong: 'should' },

  // used to
  { en: '"Keçmişdə üzərdim" → ____', tr: 'used to swim', wrong: 'use to swim'  },
  { en: '"Uşaqlıqda piano çalardım" → ____', tr: 'used to play piano', wrong: 'was used to play piano' },

  // Zaman zərfləri
  { en: 'Simple Past ilə işlənən zərf?', tr: 'yesterday', wrong: 'already'    },
  { en: '"two days ____" — zaman zərfi?', tr: 'ago',       wrong: 'before'     },
  { en: '"___ week" — zaman zərfi?',      tr: 'last',      wrong: 'next'        },

  // Qarışıq fellər
  { en: '"show" → Past Simple?',  tr: 'showed', wrong: 'shown'   },
  { en: '"learn" → Past Simple?', tr: 'learned', wrong: 'learnt' },
],
 // ============================================================
//  BÖLMƏ 3 — Simple Future (Future Indefinite)
//  grammar-data.js faylına əlavə et
// ============================================================

// ── Bölmə 3 Divider ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 3 — Simple Future (Future Indefinite)',
},

// ── Dərs 3.1 — shall / will + məsdər ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — shall / will + məsdər',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future necə düzəlir?',
      content: 'Simple Future zamanı gələcəkdə baş verəcək hərəkətləri bildirir.\n\nDüzəlmə: shall / will + əsas felin məsdəri (to-suz)\n\n• shall — I və We şəxslərində\n• will — qalan bütün şəxslərdə',
      table: [
        ['Şəxs',     'Tək',               'Cəm'],
        ['I',        'I shall work',      'We shall work'],
        ['You',      'You will work',     'You will work'],
        ['He/She/It','He will work',      'They will work'],
      ],
      tip: 'Azərbaycan dilinə gələcək zaman şəkilçisi (-acaq/-əcək) kimi tərcümə edilir.',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — sual forması',
      content: 'Sual formasını düzəltmək üçün shall / will mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Shall I work?'],
        ['You',           'Will you work?'],
        ['He / She / It', 'Will he work?'],
        ['We',            'Shall we work?'],
        ['They',          'Will they work?'],
      ],
      note: 'Qısa cavab:\nYes, I shall. / No, I shan\'t.\nYes, he will. / No, he won\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — inkar forması',
      content: 'İnkar formasını düzəltmək üçün shall / will-dən sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',              'Qısa inkar'],
        ['I',        'I shall not work',       'I shan\'t work'],
        ['You',      'You will not work',      'You won\'t work'],
        ['He/She',   'He will not work',       'He won\'t work'],
        ['We',       'We shall not work',      'We shan\'t work'],
        ['They',     'They will not work',     'They won\'t work'],
      ],
      tip: 'Qısa təsdiq: I\'ll, you\'ll, he\'ll, she\'ll, we\'ll, they\'ll.\nQısa inkar: shan\'t (I/We) , won\'t (qalanlar).',
    },

    // ── Ekran 4: Sual-inkar + Az. dilinə tərcümə ─────────
    {
      type: 'lesson',
      title: 'Sual-inkar və Azərbaycan dilinə tərcümə',
      content: 'Sual-inkar forması:\n"Shall I not work?" = "Shan\'t I work?"\n"Will he not work?" = "Won\'t he work?"\n\nAzərbaycan dilinə iki cür tərcümə olunur:',
      examples: [
        { word: 'Qəti gələcək → -acaq/-əcək', az: '"Tom will write me." — Tom mənə məktub yazacaq.' },
        { word: 'Qeyri-qəti gələcək → -ar/-ər', az: '"Tom will write me." — Tom mənə məktub yazar.' },
      ],
      note: 'Əgər hərəkətin icrası qətidirsə -acaq/-əcək, qeyri-qətidirsə -ar/-ər kimi tərcümə edilir.',
    },

    // ── Quiz: shall/will ─────────────────────────────────
    { en: '"I ___ go to school." — düzgün forma?',       tr: 'shall',   wrong: 'will'    },
    { en: '"She ___ come tomorrow." — düzgün forma?',     tr: 'will',    wrong: 'shall'   },
    { en: '"We ___ work next week." — düzgün forma?',     tr: 'shall',   wrong: 'will'    },
    { en: '"They ___ not come." — qısa inkar?',           tr: 'won\'t',  wrong: 'shan\'t' },
    { en: '"I ___ not go." — qısa inkar?',                tr: 'shan\'t', wrong: 'won\'t'  },
    { en: '"___ he come tomorrow?" — sual?',              tr: 'Will',    wrong: 'Shall'   },

    // ── Mini-check: shall/will ───────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ work tomorrow." — Boşluğa nə gəlir?',
          options: ['will', 'shall', 'would', 'should'],
          answer: 'shall',
        },
        {
          q: '"He ___ come to the party." — Boşluğa nə gəlir?',
          options: ['shall', 'will', 'would', 'should'],
          answer: 'will',
        },
        {
          q: '"I will not go." — qısa inkar forması nədir?',
          options: ['I shan\'t go', 'I won\'t go', 'I wouldn\'t go', 'I don\'t go'],
          answer: 'I won\'t go',
        },
        {
          q: '"We shall not work." — qısa inkar forması?',
          options: ['We won\'t work', 'We shan\'t work', 'We wouldn\'t work', 'We don\'t work'],
          answer: 'We shan\'t work',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'She will come tomorrow.',
            'Shall I go?',
            'Will we go?',
            'Shall he come?',
          ],
          answer: 'Shall he come?',
        },
        {
          q: '"I\'ll work." — bu nədir?',
          options: ['Qısa inkar', 'Tam inkar', 'Qısa təsdiq', 'Sual forması'],
          answer: 'Qısa təsdiq',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — to be going to + to be about to ──────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — to be going to · to be about to · Zaman zərfləri',
  cards: [

    // ── Ekran 1: going to vs will ─────────────────────────
    {
      type: 'lesson',
      title: 'Gələcəyin iki əlavə forması',
      content: 'Müasir ingilis dilində gələcək hərəkəti bildirmək üçün shall/will-dən başqa iki birləşmə də işlənir:',
      examples: [
        { word: 'to be going to + məsdər', az: 'bir şeyi etməyə hazırlaşmaq' },
        { word: 'to be about to + məsdər', az: 'bir şeyi etmək üzrə olmaq (çox yaxın gələcək)' },
      ],
      tip: '"going to" planlaşdırılmış hərəkəti, "about to" çox yaxın zamanda baş verəcək hərəkəti bildirir.',
    },

    // ── Ekran 2: to be going to — tam izah ───────────────
    {
      type: 'lesson',
      title: 'to be going to + məsdər',
      content: '"to be" feli şəxslərə görə dəyişir (am / is / are):\n\nI am going to read this novel.\nHe is going to visit us.\nThey are going to leave.',
      table: [
        ['Şəxs',     'Forma'],
        ['I',        'I am going to work'],
        ['You',      'You are going to work'],
        ['He/She/It','He is going to work'],
        ['We/They',  'We are going to work'],
      ],
      examples: [
        { word: 'I am going to read this novel.',    az: 'Mən bu romanı oxumağa hazırlaşıram.' },
        { word: 'She is going to study medicine.',   az: 'O tibb oxumağa hazırlaşır.' },
        { word: 'They are going to travel abroad.',  az: 'Onlar xaricə getməyə hazırlaşırlar.' },
      ],
      note: 'Sual: "Am I going to work?" / "Is he going to work?"\nİnkar: "I am not going to work." / "He isn\'t going to work."',
    },

    // ── Quiz: going to ───────────────────────────────────
    { en: '"I ___ going to study." — boşluq?',      tr: 'am',  wrong: 'is'    },
    { en: '"She ___ going to leave." — boşluq?',    tr: 'is',  wrong: 'are'   },
    { en: '"They ___ going to work." — boşluq?',    tr: 'are', wrong: 'is'    },
    { en: '"going to" nə bildirir?',                 tr: 'Hazırlaşmaq', wrong: 'Etmək üzrə olmaq' },

    // ── Ekran 3: to be about to ──────────────────────────
    {
      type: 'lesson',
      title: 'to be about to + məsdər',
      content: '"to be about to" çox yaxın zamanda, az sonra baş verəcək hərəkəti bildirir.\nAzərbaycan dilinə "etmək üzrədir / etmək üzrəyəm" kimi tərcümə olunur.',
      examples: [
        { word: 'The train is about to start.',    az: 'Qatar yola düşmək üzrədir.' },
        { word: 'I am about to leave.',            az: 'Mən getmək üzrəyəm.' },
        { word: 'She is about to cry.',            az: 'O ağlamaq üzrədir.' },
        { word: 'They are about to arrive.',       az: 'Onlar gəlib çatmaq üzrədirlər.' },
      ],
      tip: '"about to" — saniyələr/dəqiqələr sonra baş verəcək hərəkət. "going to" — ümumi plan.',
    },

    // ── Ekran 4: Üç formanın müqayisəsi ──────────────────
    {
      type: 'lesson',
      title: 'shall/will vs going to vs about to — müqayisə',
      content: 'Üç formanı bir arada görək:',
      table: [
        ['Forma',              'İşlənmə',                          'Nümunə'],
        ['shall / will',       'Ümumi gələcək hərəkət, qərar',     'I will call you.'],
        ['to be going to',     'Planlaşdırılmış hərəkət',          'I am going to call you.'],
        ['to be about to',     'Çox yaxın gələcək (saniyələr)',    'I am about to call you.'],
      ],
      note: 'Müasir ingilis danışıq dilində "will" çox vaxt "going to" ilə əvəz olunur.',
    },

    // ── Ekran 5: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — zaman zərfləri',
      content: 'Bu zərflər hərəkətin gələcəkdə baş verəcəyini bildirir:',
      table: [
        ['Zaman zərfi',               'Mənası'],
        ['tomorrow',                  'sabah'],
        ['the day after tomorrow',    'birisigün'],
        ['next week / month / year',  'gələn həftə/ay/il'],
        ['soon',                      'tezliklə'],
        ['in a week / in two days',   'bir həftəyə / iki gündə'],
        ['in a moment',               'bir an içində'],
        ['in the near future',        'yaxın gələcəkdə'],
      ],
      tip: 'Vacib qayda: zaman/şərt budaq cümlələrindən sonra gələcək hərəkət Simple Present ilə verilir!\n"I shall go if she comes." — "comes" → Simple Present, "shall go" → Simple Future.',
    },

    // ── Mini-check: going to + about to + zaman zərfləri ─
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The train ___ about to start." — boşluğa nə gəlir?',
          options: ['am', 'is', 'are', 'be'],
          answer: 'is',
        },
        {
          q: '"I am ___ to read this novel." — boşluğa nə gəlir?',
          options: ['about', 'going', 'will', 'shall'],
          answer: 'going',
        },
        {
          q: '"going to" ilə "about to" arasındakı fərq nədir?',
          options: [
            'Fərq yoxdur — eyni mənalıdır',
            '"going to" plan, "about to" çox yaxın gələcək',
            '"about to" plan, "going to" çox yaxın gələcək',
            '"going to" keçmiş, "about to" gələcək',
          ],
          answer: '"going to" plan, "about to" çox yaxın gələcək',
        },
        {
          q: 'Hansı zaman zərfi Simple Future ilə işlənir?',
          options: ['yesterday', 'ago', 'tomorrow', 'already'],
          answer: 'tomorrow',
        },
        {
          q: '"I shall go if she ___." — budaq cümlədə hansı zaman?',
          options: ['will come', 'comes', 'came', 'is coming'],
          answer: 'comes',
        },
        {
          q: '"She is going to study medicine." — mənası nədir?',
          options: [
            'O tibb oxumuşdur.',
            'O tibb oxuyur.',
            'O tibb oxumağa hazırlaşır.',
            'O tibb oxumaq üzrədir.',
          ],
          answer: 'O tibb oxumağa hazırlaşır.',
        },
        {
          q: '"They are about to arrive." — mənası nədir?',
          options: [
            'Onlar gəliblər.',
            'Onlar gəlmək üzrədirlər.',
            'Onlar gələcəklər (plan).',
            'Onlar gəldilər.',
          ],
          answer: 'Onlar gəlmək üzrədirlər.',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 — Bölmə 3 ümumi quiz ────────────────────
[
  // shall / will — düzəlmə
  { en: '"I ___ work tomorrow."',        tr: 'shall',   wrong: 'will'    },
  { en: '"She ___ come next week."',     tr: 'will',    wrong: 'shall'   },
  { en: '"We ___ go to Baku soon."',     tr: 'shall',   wrong: 'will'    },
  { en: '"He ___ not come." — qısa?',    tr: 'won\'t',  wrong: 'shan\'t' },
  { en: '"I ___ not go." — qısa?',       tr: 'shan\'t', wrong: 'won\'t'  },

  // Sual forması
  { en: '"___ I go?" — I şəxsdə sual?',  tr: 'Shall',   wrong: 'Will'   },
  { en: '"___ she work?" — sual?',        tr: 'Will',    wrong: 'Shall'  },
  { en: '"___ we leave?" — sual?',        tr: 'Shall',   wrong: 'Will'   },

  // Qısa formalar
  { en: '"I\'ll work." — bu nədir?',      tr: 'Qısa təsdiq', wrong: 'Qısa inkar' },
  { en: '"won\'t" — tam forması nədir?',  tr: 'will not',    wrong: 'shall not'  },
  { en: '"shan\'t" — tam forması nədir?', tr: 'shall not',   wrong: 'will not'   },

  // going to
  { en: '"I ___ going to study."',        tr: 'am',  wrong: 'is'    },
  { en: '"She ___ going to leave."',      tr: 'is',  wrong: 'are'   },
  { en: '"They ___ going to work."',      tr: 'are', wrong: 'is'    },
  { en: '"going to" nə bildirir?',        tr: 'Plan, hazırlaşmaq', wrong: 'Çox yaxın gələcək' },

  // about to
  { en: '"The train is about to ___."',   tr: 'start',   wrong: 'started' },
  { en: '"about to" nə bildirir?',        tr: 'Çox yaxın gələcək (etmək üzrə)', wrong: 'Plan, hazırlaşmaq' },
  { en: '"I am ___ to leave."',           tr: 'about',   wrong: 'going'   },

  // going to vs about to
  { en: '"Planlaşdırılmış hərəkət" → ____', tr: 'going to', wrong: 'about to' },
  { en: '"Saniyələr sonra baş verər" → ____', tr: 'about to', wrong: 'going to' },

  // Zaman zərfləri
  { en: 'Simple Future ilə işlənən zərf?',    tr: 'tomorrow',  wrong: 'yesterday' },
  { en: '"___ week" — gələcək zaman zərfi?',  tr: 'next',      wrong: 'last'      },
  { en: '"in two ___" — zaman zərfi?',         tr: 'days',      wrong: 'ago'       },
  { en: '"the day ___ tomorrow"',              tr: 'after',     wrong: 'before'    },

  // Budaq cümlə qaydası
  { en: '"I shall go if she ___."',        tr: 'comes',      wrong: 'will come'  },
  { en: '"When it stops raining, we ___."',tr: 'will go out', wrong: 'go out'    },
  { en: '"Call me as soon as you ___."',   tr: 'arrive',     wrong: 'will arrive' },

  // Az. dilinə tərcümə
  { en: '"Tom will write me." — qəti gələcək?', tr: 'yazacaq', wrong: 'yazar'   },
  { en: '"Tom will write me." — qeyri-qəti?',   tr: 'yazar',   wrong: 'yazacaq' },
],
   // ============================================================
//  BÖLMƏ 4 — Future Indefinite in the Past
//  (Keçmişə nəzərən gələcək zamanın qeyri-müəyyən forması)
//  grammar-data.js faylına əlavə et
// ============================================================

// ── Bölmə 4 Divider ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 4 — Future Indefinite in the Past',
},

// ── Dərs 4.1 — should / would + məsdər ──────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — should / would + məsdər',
  cards: [

    // ── Ekran 1: Giriş + düzəlmə qaydası ─────────────────
    {
      type: 'lesson',
      title: 'Future in the Past nədir?',
      content: 'Bu zaman forması keçmiş bir vaxtdan baxaraq gələcəkdə baş verəcək hərəkətləri bildirir.\n\nBaşqa sözlə: keçmişdə düşünülmüş, deyilmiş və ya bilinmiş gələcək hərəkət.\n\nDüzəlmə: should / would + əsas felin məsdəri (to-suz)\n\n• should — I və We şəxslərində\n• would — qalan bütün şəxslərdə',
      table: [
        ['Şəxs',     'Tək',                'Cəm'],
        ['I',        'I should come',      'We should come'],
        ['You',      'You would come',     'You would come'],
        ['He/She/It','He would come',      'They would come'],
      ],
      tip: 'Bu forma Simple Future-un (shall/will) keçmiş versiyasıdır:\nshall → should | will → would',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Future in the Past — sual forması',
      content: 'Sual formasını düzəltmək üçün should / would mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Should I come?'],
        ['You',           'Would you come?'],
        ['He / She / It', 'Would he come?'],
        ['We',            'Should we come?'],
        ['They',          'Would they come?'],
      ],
      note: 'Qısa cavab:\nYes, I should. / No, I shouldn\'t.\nYes, he would. / No, he wouldn\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Future in the Past — inkar forması',
      content: 'İnkar formasını düzəltmək üçün should / would-dan sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',                'Qısa inkar'],
        ['I',        'I should not come',        'I shouldn\'t come'],
        ['You',      'You would not come',       'You wouldn\'t come'],
        ['He/She',   'He would not come',        'He wouldn\'t come'],
        ['We',       'We should not come',       'We shouldn\'t come'],
        ['They',     'They would not come',      'They wouldn\'t come'],
      ],
      tip: 'Qısa təsdiq: I\'d, you\'d, he\'d, she\'d, we\'d, they\'d\nQısa inkar: shouldn\'t (I/We), wouldn\'t (qalanlar)',
    },

    // ── Ekran 4: Sual-inkar + qısa formalar ─────────────
    {
      type: 'lesson',
      title: 'Sual-inkar forması',
      content: 'Sual-inkar forması iki cür düzəlir:',
      table: [
        ['Tam forma',               'Qısa forma'],
        ['Should I not come?',      'Shouldn\'t I come?'],
        ['Should we not come?',     'Shouldn\'t we come?'],
        ['Would you not come?',     'Wouldn\'t you come?'],
        ['Would he not come?',      'Wouldn\'t he come?'],
        ['Would they not come?',    'Wouldn\'t they come?'],
      ],
      note: '"I\'d come" — qısa təsdiq forması.\n"I shouldn\'t come" / "You wouldn\'t come" — qısa inkar formalar.',
    },

    // ── Quiz: should / would seçimi ──────────────────────
    { en: '"I ___ come to the meeting."',       tr: 'should',    wrong: 'would'    },
    { en: '"She ___ return in time."',           tr: 'would',     wrong: 'should'   },
    { en: '"We ___ not go there."',              tr: 'should',    wrong: 'would'    },
    { en: '"They ___ not come." — qısa?',        tr: 'wouldn\'t', wrong: 'shouldn\'t' },
    { en: '"I ___ not go." — qısa?',             tr: 'shouldn\'t', wrong: 'wouldn\'t' },
    { en: '"I\'d come." — tam forması?',          tr: 'I would come', wrong: 'I should come' },

    // ── Mini-check: should/would ─────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ finish the work." — düzgün forma?',
          options: ['will', 'would', 'should', 'shall'],
          answer: 'should',
        },
        {
          q: '"He ___ return in time." — düzgün forma?',
          options: ['should', 'shall', 'would', 'will'],
          answer: 'would',
        },
        {
          q: '"I would not go." — qısa inkar forması?',
          options: ['I shouldn\'t go', 'I won\'t go', 'I wouldn\'t go', 'I don\'t go'],
          answer: 'I wouldn\'t go',
        },
        {
          q: '"I\'d come." — bu ifadə nədir?',
          options: ['I should come — qısa', 'I would come — qısa', 'I shall come — qısa', 'I will come — qısa'],
          answer: 'I would come — qısa',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'She would come.',
            'Should I go?',
            'Would he come?',
            'Should he come?',
          ],
          answer: 'Should he come?',
        },
        {
          q: '"We ___ not come." — qısa inkar?',
          options: ['We wouldn\'t', 'We shouldn\'t', 'We won\'t', 'We don\'t'],
          answer: 'We shouldn\'t',
        },
      ],
    },
  ],
},

// ── Dərs 4.2 — İşlənmə və Zaman zərfləri ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.2 — İşlənmə: vasitəli nitqdə çevrilmə',
  cards: [

    // ── Ekran 1: Əsas işlənmə halı ──────────────────────
    {
      type: 'lesson',
      title: 'Future in the Past — nə vaxt işlənir?',
      content: 'Bu zaman forması bir halda işlənir:\n\nBaş cümlə keçmiş zamanda olduqda, budaq cümlədəki gələcəyə aid hərəkəti bildirmək üçün.\n\nYəni: "dedi ki, gələcək", "bildi ki, qayıdacaq" — belə cümlələrdə.',
      examples: [
        { word: 'I knew that he would return in time.', az: 'Mən bilirdim ki, o vaxtında qayıdacaq.' },
        { word: 'He said that they would come.',        az: 'O dedi ki, onlar gələcəklər.' },
        { word: 'She thought he would win.',            az: 'O düşünürdü ki, o qazanacaq.' },
        { word: 'I hoped you would help me.',           az: 'Ümid edirdim ki, sən mənə kömək edəcəksən.' },
      ],
      tip: 'Qayda: baş cümlədə keçmiş zaman → budaq cümlədə Future in the Past (would/should).',
    },

    // ── Ekran 2: Simple Future → Future in the Past ───────
    {
      type: 'lesson',
      title: 'Simple Future → Future in the Past çevrilməsi',
      content: 'Vasitəsiz nitqi vasitəli nitqə çevirərkən zaman dəyişir:\n\nSimple Future → Future in the Past\nshall → should | will → would',
      table: [
        ['Vasitəsiz nitq (birbaşa)',                   'Vasitəli nitq (keçmiş)'],
        ['"I will finish my work in time."',           'He said he would finish his work in time.'],
        ['"She will come tomorrow."',                  'He said she would come the next day.'],
        ['"We shall go to Baku."',                     'They said they should go to Baku.'],
        ['"I will help you."',                         'She promised she would help me.'],
      ],
      note: 'Diqqət: "tomorrow" → "the next day" kimi dəyişir.\n"I will" → "he/she would" kimi şəxs əvəzlikləri də dəyişir.',
    },

    // ── Quiz: çevrilmə ───────────────────────────────────
    { en: '"will" → vasitəli nitqdə?',               tr: 'would',        wrong: 'should'      },
    { en: '"shall" → vasitəli nitqdə?',              tr: 'should',       wrong: 'would'       },
    { en: '"tomorrow" → vasitəli nitqdə?',           tr: 'the next day', wrong: 'yesterday'   },
    { en: '"He said he ___ come." — boşluq?',        tr: 'would',        wrong: 'will'        },
    { en: '"She said we ___ go." — boşluq?',         tr: 'should',       wrong: 'shall'       },

    // ── Ekran 3: Zaman zərfləri + Az. dilinə tərcümə ─────
    {
      type: 'lesson',
      title: 'Zaman zərfləri və Azərbaycan dilinə tərcümə',
      content: 'Future in the Past ilə işlənən zaman zərfləri:',
      table: [
        ['Zaman zərfi',          'Mənası'],
        ['the next day',         'ertəsi gün'],
        ['the following day',    'növbəti gün'],
        ['the following week',   'növbəti həftə'],
        ['the following month',  'növbəti ay'],
      ],
      examples: [
        { word: 'He said he would come the next day.', az: 'O dedi ki, ertəsi gün gələcək.' },
        { word: 'She promised to call the following day.', az: 'O ertəsi gün zəng edəcəyini vəd etdi.' },
      ],
      note: 'Azərbaycan dilinə -acaq/-əcək kimi tərcümə olunur.\n"He said that they would come." — O dedi ki, onlar gələcəklər.',
    },

    // ── Ekran 4: Simple Future vs Future in the Past ──────
    {
      type: 'lesson',
      title: 'Simple Future vs Future in the Past — müqayisə',
      content: 'İki formanı fərqləndirən əsas cəhətlər:',
      table: [
        ['Xüsusiyyət',        'Simple Future',                    'Future in the Past'],
        ['Köməkçi fel',       'shall / will',                     'should / would'],
        ['Baş cümlə',         'İndiki zaman',                     'Keçmiş zaman'],
        ['İşlənmə',           'Birbaşa gələcək hərəkət',          'Vasitəli nitqdə gələcək'],
        ['Nümunə',            '"She will come."',                 '"He said she would come."'],
        ['Az. tərcüməsi',     'gələcək (-acaq/-əcək)',            'gələcək (-acaq/-əcək)'],
      ],
      tip: 'Hər ikisi Azərbaycan dilinə eyni (-acaq/-əcək) kimi tərcümə olunur. Fərq yalnız ingilis dilinin daxilindədir.',
    },

    // ── Ekran 5: Praktik nümunələr ───────────────────────
    {
      type: 'lesson',
      title: 'Praktik nümunələr — çevrilmə tapşırıqları',
      content: 'Aşağıdakı vasitəsiz nitqlərin vasitəli nitqə çevrilməsinə bax:',
      table: [
        ['Vasitəsiz nitq',                         'Vasitəli nitq'],
        ['"I will go." (he)',                       'He said he would go.'],
        ['"We shall return." (they)',               'They said they should return.'],
        ['"She will not come." (he)',               'He said she would not come.'],
        ['"I will help you." (she)',                'She said she would help me.'],
        ['"They will win." (I)',                    'I knew they would win.'],
        ['"I will call you tomorrow." (she)',       'She said she would call me the next day.'],
      ],
      note: 'Xülasə qayda:\nI/We + will → I/We + would\nhe/she/they + will → he/she/they + would\nI/We + shall → I/We + should',
    },

    // ── Mini-check: İşlənmə + vasitəli nitq ─────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I knew that he ___ return in time." — boşluğa nə gəlir?',
          options: ['will', 'shall', 'would', 'should'],
          answer: 'would',
        },
        {
          q: '"He said that they ___ come." — boşluğa nə gəlir?',
          options: ['will', 'shall', 'would', 'should'],
          answer: 'would',
        },
        {
          q: '"She said we ___ go to Baku." — (we = I + she) boşluğa nə gəlir?',
          options: ['would', 'will', 'should', 'shall'],
          answer: 'should',
        },
        {
          q: '"I will come tomorrow." → vasitəli nitqdə? (he)',
          options: [
            'He said he will come tomorrow.',
            'He said he would come the next day.',
            'He said he should come the next day.',
            'He said he would come tomorrow.',
          ],
          answer: 'He said he would come the next day.',
        },
        {
          q: 'Future in the Past Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'Keçmiş zaman (-dı/-di)',
            'İndiki zaman (-ır/-ir)',
            'Gələcək zaman (-acaq/-əcək)',
            'Nəqli keçmiş (-mış/-miş)',
          ],
          answer: 'Gələcək zaman (-acaq/-əcək)',
        },
        {
          q: '"tomorrow" vasitəli nitqdə nəyə çevrilir?',
          options: ['yesterday', 'the next day', 'soon', 'that day'],
          answer: 'the next day',
        },
        {
          q: 'Bu cümlələrdən hansı Future in the Past-dır?',
          options: [
            'She will come tomorrow.',
            'I knew she would come.',
            'She is going to come.',
            'She came yesterday.',
          ],
          answer: 'I knew she would come.',
        },
        {
          q: '"He said he ___ finish the work." — "he" III şəxsdir, boşluq?',
          options: ['shall', 'should', 'will', 'would'],
          answer: 'would',
        },
      ],
    },
  ],
},

// ── Mini-quiz 4 — Bölmə 4 ümumi quiz ────────────────────
[
  // should / would — düzəlmə
  { en: '"I ___ come to the party."',            tr: 'should',      wrong: 'would'       },
  { en: '"She ___ return in time."',             tr: 'would',       wrong: 'should'      },
  { en: '"We ___ go to Baku."',                  tr: 'should',      wrong: 'would'       },
  { en: '"They ___ not come." — qısa?',          tr: 'wouldn\'t',   wrong: 'shouldn\'t'  },
  { en: '"I ___ not go." — qısa?',               tr: 'shouldn\'t',  wrong: 'wouldn\'t'   },

  // Sual forması
  { en: '"___ I come?" — I şəxsdə sual?',        tr: 'Should',      wrong: 'Would'       },
  { en: '"___ she come?" — sual?',               tr: 'Would',       wrong: 'Should'      },
  { en: '"___ we go?" — sual?',                  tr: 'Should',      wrong: 'Would'       },

  // Qısa formalar
  { en: '"I\'d come." — tam forması?',            tr: 'I would come',   wrong: 'I should come' },
  { en: '"wouldn\'t" — tam forması?',             tr: 'would not',      wrong: 'should not'    },
  { en: '"shouldn\'t" — tam forması?',            tr: 'should not',     wrong: 'would not'     },

  // Simple Future → Future in the Past çevrilməsi
  { en: '"will" → vasitəli nitqdə?',             tr: 'would',       wrong: 'should'      },
  { en: '"shall" → vasitəli nitqdə?',            tr: 'should',      wrong: 'would'       },
  { en: '"tomorrow" → vasitəli nitqdə?',         tr: 'the next day', wrong: 'yesterday'  },

  // Vasitəli nitq — boşluq doldur
  { en: '"He said he ___ come." — boşluq?',      tr: 'would',       wrong: 'will'        },
  { en: '"She said we ___ return." — boşluq?',   tr: 'should',      wrong: 'shall'       },
  { en: '"I knew they ___ win." — boşluq?',      tr: 'would',       wrong: 'will'        },
  { en: '"She hoped I ___ help her." — boşluq?', tr: 'would',       wrong: 'will'        },

  // Hansı cümlə Future in the Past-dır?
  { en: 'Future in the Past: hansı cümlədir?',   tr: 'I knew she would come.', wrong: 'She will come tomorrow.' },

  // Zaman zərfləri
  { en: 'Future in the Past zaman zərfi?',        tr: 'the next day',      wrong: 'yesterday'  },
  { en: '"the ___ day" — vasitəli nitqdə?',       tr: 'following',         wrong: 'next after' },

  // Müqayisə: Simple Future vs Future in the Past
  { en: '"She will come." → baş cümlə indiki?',  tr: 'Simple Future',     wrong: 'Future in the Past' },
  { en: '"He said she would come." → baş cümlə keçmiş?', tr: 'Future in the Past', wrong: 'Simple Future' },

  // Az. dilinə tərcümə
  { en: '"He said they would come." — Az. dilində?', tr: 'onlar gələcəklər', wrong: 'onlar gəldilər' },
  { en: 'Future in the Past → Az. dilindəki forma?', tr: '-acaq / -əcək',    wrong: '-dı / -di'      },
],
 {
  type: 'section_divider',
  title: 'Bölmə 5 —  Present Continuous',
},
    // ══════════════════════════════════════════════════════════
    // ║  QRUP 2 — Davamedici zaman formaları (Continuous)      ║
    // ══════════════════════════════════════════════════════════

// ── Dərs 5.1 — am/is/are + fel-ing ──────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.1 — am/is/are + fel-ing',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous necə düzəlir?',
      content: 'Present Continuous "to be" felinin indiki zaman formaları (am/is/are) və əsas felin üzərinə "-ing" sonluğu əlavə etməklə düzəlir.\n\nDüzəlmə: am/is/are + fel + ing',
      table: [
        ['Şəxs',      'Tək',             'Cəm'],
        ['I',         'I am writing',    'We are writing'],
        ['You',       'You are writing', 'You are writing'],
        ['He/She/It', 'He is writing',   'They are writing'],
      ],
      tip: 'Qısa təsdiq formaları:\nI\'m writing · You\'re writing · He\'s writing · They\'re writing',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous — sual forması',
      content: 'Sual formasını düzəltmək üçün "to be"-nin şəxs formaları mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Am I writing?'],
        ['You',           'Are you writing?'],
        ['He / She / It', 'Is he (she) writing?'],
        ['We',            'Are we writing?'],
        ['They',          'Are they writing?'],
      ],
      note: 'Qısa cavab:\nYes, I am. / No, I\'m not.\nYes, he is. / No, he isn\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous — inkar forması',
      content: 'İnkar formasını düzəltmək üçün "to be" felinin şəxs formasından sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',              'Qısa inkar'],
        ['I',        'I am not writing',       'I\'m not writing'],
        ['You',      'You are not writing',    'You aren\'t writing'],
        ['He/She',   'He is not writing',      'He isn\'t writing'],
        ['We',       'We are not writing',     'We aren\'t writing'],
        ['They',     'They are not writing',   'They aren\'t writing'],
      ],
      tip: 'Diqqət: "amn\'t" nadir işlənir. I şəxsində adətən "I\'m not" işlənir.',
    },

    // ── Ekran 4: Sual-inkar forması ──────────────────────
    {
      type: 'lesson',
      title: 'Sual-inkar forması',
      content: 'Sual-inkar forması iki cür düzəlir:',
      table: [
        ['Tam forma',               'Qısa forma'],
        ['Am I not writing?',       'Amn\'t I writing?'],
        ['Are you not writing?',    'Aren\'t you writing?'],
        ['Is he not writing?',      'Isn\'t he writing?'],
        ['Are we not writing?',     'Aren\'t we writing?'],
        ['Are they not writing?',   'Aren\'t they writing?'],
      ],
    },

    // ── Quiz: am/is/are seçimi ───────────────────────────
    { en: '"I ___ writing." — boşluq?',          tr: 'am',  wrong: 'is'  },
    { en: '"She ___ writing." — boşluq?',         tr: 'is',  wrong: 'are' },
    { en: '"They ___ writing." — boşluq?',        tr: 'are', wrong: 'is'  },
    { en: '"We ___ writing." — boşluq?',          tr: 'are', wrong: 'am'  },
    { en: '"He ___ writing." — boşluq?',          tr: 'is',  wrong: 'are' },
    { en: '"You ___ writing." — boşluq?',         tr: 'are', wrong: 'is'  },
    { en: '"I\'m writing." — tam forması?',        tr: 'I am writing',   wrong: 'I is writing'  },
    { en: '"He isn\'t writing." — tam forması?',   tr: 'He is not writing', wrong: 'He are not writing' },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ reading a book." — boşluğa nə gəlir?',
          options: ['am', 'are', 'is', 'be'],
          answer: 'is',
        },
        {
          q: '"We ___ playing football." — boşluğa nə gəlir?',
          options: ['is', 'am', 'be', 'are'],
          answer: 'are',
        },
        {
          q: '"I\'m not writing." — tam forması hansıdır?',
          options: ['I is not writing', 'I am not writing', 'I are not writing', 'I be not writing'],
          answer: 'I am not writing',
        },
        {
          q: '"___ he sleeping?" — sual forması?',
          options: ['Am', 'Are', 'Is', 'Be'],
          answer: 'Is',
        },
        {
          q: '"They aren\'t coming." — tam forması?',
          options: ['They is not coming', 'They am not coming', 'They are not coming', 'They be not coming'],
          answer: 'They are not coming',
        },
        {
          q: 'Hansı qısa forma YANLIŞ-dır?',
          options: ['I\'m writing', 'He\'s writing', 'They\'re writing', 'We\'s writing'],
          answer: 'We\'s writing',
        },
      ],
    },
  ],
},

// ── Dərs 5.2 — İşlənmə: danışıq anında ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.2 — İşlənmə: danışıq anında',
  cards: [

    // ── Ekran 1: İşlənmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Present Continuous — nə vaxt işlənir?',
      content: 'Bu zaman forması danışıq zamanı ilə eyni anda baş verən, icra edilən hərəkətləri bildirmək üçün işlədilir.\n\nAzərbaycan dilinə indiki zaman kimi tərcümə olunur.',
      examples: [
        { word: 'Look! The child is returning from school.', az: 'Bax! Uşaq məktəbdən qayıdır.' },
        { word: 'Listen! Your sister is singing.', az: 'Qulaq as! Bacın oxuyur.' },
        { word: 'I am writing a letter now.', az: 'Mən indi məktub yazıram.' },
        { word: 'She is reading at the moment.', az: 'O, hal-hazırda oxuyur.' },
      ],
      tip: 'Qayda: danışıq anında baş verən hərəkət → Present Continuous.',
    },

    // ── Ekran 2: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Zaman zərfləri',
      content: 'Present Continuous ilə işlənən zaman zərfləri:',
      table: [
        ['Zaman zərfi',          'Mənası'],
        ['now',                  'indi'],
        ['at the moment',        'hal-hazırda'],
        ['at the present moment','bu an'],
        ['Look!',                'Bax! (cümlə əvvəlində)'],
        ['Listen!',              'Qulaq as! (cümlə əvvəlində)'],
      ],
      examples: [
        { word: 'She is cooking now.', az: 'O indi bişirir.' },
        { word: 'At the moment, they are working.', az: 'Hal-hazırda onlar işləyirlər.' },
      ],
      note: 'Cümlənin əvvəlində "Look!" və ya "Listen!" varsa — Present Continuous işlənir.',
    },

    // ── Quiz: zaman zərfləri ─────────────────────────────
    { en: 'Present Continuous zaman zərfi?',            tr: 'now',            wrong: 'yesterday'     },
    { en: '"at the ___" — Present Continuous zərfi?',   tr: 'moment',         wrong: 'time'          },
    { en: '"Look! She ___ coming." — boşluq?',          tr: 'is',             wrong: 'was'           },
    { en: '"Listen! They ___ singing." — boşluq?',      tr: 'are',            wrong: 'were'          },
    { en: '"I am reading ___ moment." — boşluq?',       tr: 'at the present', wrong: 'at that'       },
    { en: '"___ the moment, he is working." — boşluq?', tr: 'At',             wrong: 'In'            },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Present Continuous hansı zaman zərfi ilə işlənir?',
          options: ['yesterday', 'now', 'last week', 'ago'],
          answer: 'now',
        },
        {
          q: '"Look! The dog ___ running." — boşluğa nə gəlir?',
          options: ['run', 'ran', 'is', 'are'],
          answer: 'is',
        },
        {
          q: '"She is working ___ the moment." — boşluq?',
          options: ['in', 'on', 'at', 'by'],
          answer: 'at',
        },
        {
          q: 'Hansı cümlə Present Continuous-dur?',
          options: [
            'She worked yesterday.',
            'She works every day.',
            'She is working now.',
            'She will work tomorrow.',
          ],
          answer: 'She is working now.',
        },
        {
          q: '"Listen! They ___ singing." — boşluq?',
          options: ['was', 'is', 'am', 'are'],
          answer: 'are',
        },
        {
          q: 'Present Continuous Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'Keçmiş zaman (-dı/-di)',
            'İndiki zaman (-ır/-ir)',
            'Gələcək zaman (-acaq/-əcək)',
            'Nəqli keçmiş (-mış/-miş)',
          ],
          answer: 'İndiki zaman (-ır/-ir)',
        },
      ],
    },
  ],
},

// ── Dərs 5.3 — Continuous zamanda işlənməyən fellər ─────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.3 — Continuous zamanda işlənməyən fellər',
  cards: [

    // ── Ekran 1: Stativ fellər ────────────────────────────
    {
      type: 'lesson',
      title: 'Stativ fellər nədir?',
      content: 'Bir qisim fellər hərəkət bildirmədikləri üçün davamedici zamanda işlənmirlər. Bunlara "stativ fellər" deyilir.\n\n3 əsas qrup var:\n\n1. Zehni fəaliyyət bildirənlər\n2. Hissi qavrayış bildirənlər\n3. Mücərrəd əlaqə bildirənlər',
      table: [
        ['Qrup',                       'Fellər'],
        ['Zehni fəaliyyət',            'like, see, know, notice, hear, want, wish, dream, think, understand, realize, remember'],
        ['Hissi qavrayış',             'hate, love'],
        ['Mücərrəd əlaqə',             'belong to, depend on'],
      ],
      tip: 'Bu fellər heç vaxt "-ing" ilə işlənmir!\n✗ I am knowing → ✓ I know\n✗ She is loving → ✓ She loves',
    },

    // ── Ekran 2: "think" felinin xüsusiyyəti ─────────────
    {
      type: 'lesson',
      title: '"think" felinin xüsus işlənməsi',
      content: '"think" feli mənasından asılı olaraq iki cür işlənir:',
      table: [
        ['Məna',              'Forma',              'Nümunə'],
        ['fikirləşmək',       'Continuous ola bilər','I am thinking of you.'],
        ['məncə / zənn etmək','Continuous olmaz',   'I think you are right.'],
      ],
      examples: [
        { word: 'I am thinking of you.',   az: 'Sizin haqqınızda fikirləşirəm.' },
        { word: 'I think you are right.',  az: 'Məncə siz haqlısınız.' },
      ],
      note: '"fikirləşmək" mənasında → Continuous ola bilər.\n"məncə/zənn etmək" mənasında → Continuous olmaz.',
    },

    // ── Quiz: stativ fellər ───────────────────────────────
    { en: '"to know" — stativ feldir?',           tr: 'Bəli',  wrong: 'Xeyr' },
    { en: '"to run" — stativ feldir?',             tr: 'Xeyr', wrong: 'Bəli' },
    { en: '"to love" — davamedici formada işlənir?', tr: 'Xeyr', wrong: 'Bəli' },
    { en: '"to belong to" — mənası?',              tr: 'məxsus olmaq', wrong: 'asılı olmaq' },
    { en: '"to depend on" — mənası?',              tr: 'asılı olmaq',  wrong: 'məxsus olmaq' },
    { en: '"I am thinking of you." — "think" burada?', tr: 'fikirləşmək', wrong: 'məncə' },
    { en: '"I think you are right." — "think" burada?', tr: 'məncə', wrong: 'fikirləşmək' },
    { en: '"I am knowing." — bu cümlə düzdür?',   tr: 'Xeyr', wrong: 'Bəli' },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı fel davamedici formada işlənə BİLMƏZ?',
          options: ['run', 'write', 'know', 'play'],
          answer: 'know',
        },
        {
          q: '"She ___ (love) him." — düzgün forma?',
          options: ['is loving', 'are loving', 'loves', 'loving'],
          answer: 'loves',
        },
        {
          q: '"I am thinking of you." — burada "think" nə mənasındadır?',
          options: ['məncə', 'zənn etmək', 'fikirləşmək', 'bilmək'],
          answer: 'fikirləşmək',
        },
        {
          q: 'Hansı fel stativ deyil?',
          options: ['hate', 'love', 'know', 'write'],
          answer: 'write',
        },
        {
          q: '"to belong to" — mənası nədir?',
          options: ['asılı olmaq', 'məxsus olmaq', 'fikirləşmək', 'eşitmək'],
          answer: 'məxsus olmaq',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'I know him.',
            'She loves music.',
            'I am knowing him.',
            'They want to leave.',
          ],
          answer: 'I am knowing him.',
        },
        {
          q: '"I think you are right." — bu cümlədə "think" Continuous-da işlənmir, çünki:',
          options: [
            '"think" həmişə stativ feldir',
            'Bu cümlədə "think" "məncə" mənasındadır',
            'Sual formasıdır',
            'İnkar formasıdır',
          ],
          answer: 'Bu cümlədə "think" "məncə" mənasındadır',
        },
      ],
    },
  ],
},
// ── Mini-quiz 5 ───────────────────────────────────────────
// am/is/are seç · stativ fel tap · now/at the moment tanı
[
  // am / is / are seçimi
  { en: '"I ___ writing now."',                      tr: 'am',   wrong: 'is'   },
  { en: '"She ___ reading at the moment."',           tr: 'is',   wrong: 'are'  },
  { en: '"They ___ playing now."',                    tr: 'are',  wrong: 'is'   },
  { en: '"We ___ working at the moment."',            tr: 'are',  wrong: 'am'   },
  { en: '"He ___ sleeping now."',                     tr: 'is',   wrong: 'are'  },

  // Stativ fellər
  { en: '"to know" — davamedici formada işlənir?',    tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"to write" — stativ feldir?',                tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"to love" — davamedici formada işlənir?',    tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"to run" — stativ feldir?',                  tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"to belong to" — stativ feldir?',            tr: 'Bəli', wrong: 'Xeyr' },

  // Düzgün / yanlış cümlə
  { en: '"I am knowing him." — düzdür?',              tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"She is running now." — düzdür?',            tr: 'Bəli', wrong: 'Xeyr' },
  { en: '"They are loving music." — düzdür?',         tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"He is playing now." — düzdür?',             tr: 'Bəli', wrong: 'Xeyr' },

  // Zaman zərfləri
  { en: 'Present Continuous zaman zərfi?',            tr: 'now',          wrong: 'yesterday'   },
  { en: '"at the ___" — Present Continuous zərfi?',   tr: 'moment',       wrong: 'time'        },
  { en: '"Look! She ___ coming."',                    tr: 'is',           wrong: 'was'         },
  { en: '"Listen! They ___ singing."',                tr: 'are',          wrong: 'were'        },

  // "think" felinin xüsusiyyəti
  { en: '"I am thinking of you." — "think" burada?', tr: 'fikirləşmək',  wrong: 'məncə'       },
  { en: '"I think you are right." — "think" burada?',tr: 'məncə',        wrong: 'fikirləşmək' },
],
  
 {
  type: 'section_divider',
  title: 'Bölmə 6 — Past Continuous',
},
// ── Dərs 6.1 — was/were + fel-ing ───────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.1 — was/were + fel-ing',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Past Continuous necə düzəlir?',
      content: 'Past Continuous "to be" felinin keçmiş zaman formaları (was/were) və əsas felin üzərinə "-ing" sonluğu əlavə etməklə düzəlir.\n\nDüzəlmə: was/were + fel + ing',
      table: [
        ['Şəxs',      'Tək',               'Cəm'],
        ['I',         'I was writing',     'We were writing'],
        ['You',       'You were writing',  'You were writing'],
        ['He/She/It', 'He was writing',    'They were writing'],
      ],
      tip: 'was → I, He, She, It\nwere → You, We, They',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Past Continuous — sual forması',
      content: 'Sual formasını düzəltmək üçün "to be"-nin şəxs formaları mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Was I writing?'],
        ['You',           'Were you writing?'],
        ['He / She / It', 'Was he (she) writing?'],
        ['We',            'Were we writing?'],
        ['They',          'Were they writing?'],
      ],
      note: 'Qısa cavab:\nYes, I was. / No, I wasn\'t.\nYes, they were. / No, they weren\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Past Continuous — inkar forması',
      content: 'İnkar formasını düzəltmək üçün "to be" felindən sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',                 'Qısa inkar'],
        ['I',        'I was not writing',          'I wasn\'t writing'],
        ['You',      'You were not writing',       'You weren\'t writing'],
        ['He/She',   'He was not writing',         'He wasn\'t writing'],
        ['We',       'We were not writing',        'We weren\'t writing'],
        ['They',     'They were not writing',      'They weren\'t writing'],
      ],
      tip: 'was not → wasn\'t\nwere not → weren\'t',
    },

    // ── Ekran 4: Sual-inkar forması ──────────────────────
    {
      type: 'lesson',
      title: 'Sual-inkar forması',
      content: 'Sual-inkar forması iki cür düzəlir:',
      table: [
        ['Tam forma',                  'Qısa forma'],
        ['Was I not writing?',         'Wasn\'t I writing?'],
        ['Were you not writing?',      'Weren\'t you writing?'],
        ['Was he/she not writing?',    'Wasn\'t he/she writing?'],
        ['Were we not writing?',       'Weren\'t we writing?'],
        ['Were they not writing?',     'Weren\'t they writing?'],
      ],
    },

    // ── Quiz: was / were seçimi ──────────────────────────
    { en: '"I ___ writing."',           tr: 'was',  wrong: 'were' },
    { en: '"She ___ writing."',         tr: 'was',  wrong: 'were' },
    { en: '"They ___ writing."',        tr: 'were', wrong: 'was'  },
    { en: '"We ___ writing."',          tr: 'were', wrong: 'was'  },
    { en: '"He ___ writing."',          tr: 'was',  wrong: 'were' },
    { en: '"You ___ writing."',         tr: 'were', wrong: 'was'  },
    { en: '"I wasn\'t writing." — tam?', tr: 'I was not writing',  wrong: 'I were not writing' },
    { en: '"Weren\'t they?" — tam?',    tr: 'Were they not?',     wrong: 'Was they not?'      },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ reading a book." — Past Continuous?',
          options: ['am', 'were', 'was', 'is'],
          answer: 'was',
        },
        {
          q: '"We ___ playing football." — Past Continuous?',
          options: ['was', 'am', 'is', 'were'],
          answer: 'were',
        },
        {
          q: '"I wasn\'t writing." — tam forması?',
          options: ['I were not writing', 'I am not writing', 'I was not writing', 'I be not writing'],
          answer: 'I was not writing',
        },
        {
          q: '"___ he sleeping?" — Past Continuous sual?',
          options: ['Am', 'Were', 'Was', 'Is'],
          answer: 'Was',
        },
        {
          q: '"They weren\'t coming." — tam forması?',
          options: ['They was not coming', 'They am not coming', 'They were not coming', 'They be not coming'],
          answer: 'They were not coming',
        },
        {
          q: 'Hansı forma YANLIŞ-dır?',
          options: ['I was writing', 'He was writing', 'We was writing', 'They were writing'],
          answer: 'We was writing',
        },
      ],
    },
  ],
},

// ── Dərs 6.2 — İşlənmə: keçmişdə dəqiq vaxt ────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.2 — İşlənmə: keçmişdə dəqiq vaxt',
  cards: [

    // ── Ekran 1: Əsas işlənmə halları ────────────────────
    {
      type: 'lesson',
      title: 'Past Continuous — nə vaxt işlənir?',
      content: 'Past Continuous 3 halda işlənir:\n\n1. Keçmişdə dəqiq bir vaxtda baş verən hərəkəti bildirmək üçün — "when" ilə başlanan budaq cümlə ilə\n\n2. Zərf birləşmələri ilə: at that time yesterday, at two o\'clock yesterday\n\n3. Keçmişdə müəyyən müddət davam edən hərəkətləri bildirmək üçün — "all day long", "the whole day" ilə',
      examples: [
        { word: 'When I came, my sister was writing something.', az: 'Mən gələndə bacım nəsə yazırdı.' },
        { word: 'We were going on an excursion at that time yesterday.', az: 'Dünən bu vaxt biz ekskursiyaya gedirdik.' },
        { word: 'I was working at my English all day long yesterday.', az: 'Dünən bütün gün ingilis dilim üzərində işləyirdim.' },
        { word: 'I was beginning to learn English.', az: 'Mən ingilis dilini öyrənməyə başlayırdım.' },
      ],
    },

    // ── Ekran 2: "when" ilə işlənmə ──────────────────────
    {
      type: 'lesson',
      title: '"when" ilə Past Continuous + Simple Past',
      content: '"when" ilə başlanan budaq cümlədə Simple Past, baş cümlədə isə Past Continuous işlənir.\n\nYəni: davam edən hərəkət (Past Continuous) + onu kəsən hərəkət (Simple Past / when)',
      table: [
        ['Davam edən hərəkət (Past Continuous)', 'Kəsən hərəkət (when + Simple Past)'],
        ['My sister was writing',                'when I came.'],
        ['He was sleeping',                      'when the phone rang.'],
        ['They were playing',                    'when it started to rain.'],
      ],
      tip: 'Qayda: when + Simple Past → baş cümlədə Past Continuous\n"When I came" — gəldim (Simple Past)\n"was writing" — yazırdı (Past Continuous)',
    },

    // ── Ekran 3: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Zaman zərfləri',
      content: 'Past Continuous ilə işlənən zaman zərfləri:',
      table: [
        ['Zaman zərfi',              'Mənası'],
        ['at that time yesterday',   'dünən bu vaxt'],
        ['at two o\'clock yesterday','dünən saat 2-də'],
        ['all day long',             'bütün gün boyu'],
        ['the whole day',            'bütün gün'],
        ['when',                     'nə vaxt ki / -anda/-əndə'],
      ],
      examples: [
        { word: 'We were going on an excursion at that time yesterday.', az: 'Dünən bu vaxt biz ekskursiyaya gedirdik.' },
        { word: 'I was working all day long.', az: 'Mən bütün gün işləyirdim.' },
      ],
      note: 'Azərbaycan dilinə felin şühudi keçmiş zaman forması (-ırdı/-irdi) və ya keçmiş davam forması ilə tərcümə olunur.',
    },

    // ── Ekran 4: Present Continuous vs Past Continuous ───
    {
      type: 'lesson',
      title: 'Present Continuous vs Past Continuous — müqayisə',
      content: 'İki formanın əsas fərqləri:',
      table: [
        ['Xüsusiyyət',      'Present Continuous',         'Past Continuous'],
        ['Köməkçi fel',     'am / is / are',              'was / were'],
        ['Zaman',           'İndi baş verir',             'Keçmişdə baş verirdi'],
        ['Zaman zərfi',     'now, at the moment',         'at that time yesterday, when, all day long'],
        ['Nümunə',          'She is writing now.',        'She was writing when I came.'],
        ['Az. tərcümə',     'yazır (indiki zaman)',       'yazırdı (keçmiş davam)'],
      ],
    },

    // ── Quiz: işlənmə ────────────────────────────────────
    { en: '"When I came, she ___ writing." — boşluq?',      tr: 'was',              wrong: 'is'              },
    { en: '"___ that time yesterday" — zərf?',              tr: 'at',               wrong: 'in'              },
    { en: '"all day ___" — tam ifadə?',                     tr: 'long',             wrong: 'time'            },
    { en: '"when" ilə hansı zaman işlənir?',                tr: 'Past Continuous',  wrong: 'Simple Future'   },
    { en: '"She was writing" → Az. dilində?',               tr: 'yazırdı',          wrong: 'yazacaq'         },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"When I came, my sister ___ writing." — boşluq?',
          options: ['is', 'are', 'was', 'were'],
          answer: 'was',
        },
        {
          q: 'Past Continuous hansı zaman zərfi ilə işlənir?',
          options: ['now', 'tomorrow', 'at that time yesterday', 'every day'],
          answer: 'at that time yesterday',
        },
        {
          q: '"I was working ___ day long." — boşluq?',
          options: ['whole', 'every', 'all', 'that'],
          answer: 'all',
        },
        {
          q: 'Hansı cümlə Past Continuous-dur?',
          options: [
            'She writes every day.',
            'She is writing now.',
            'She was writing when I came.',
            'She will write tomorrow.',
          ],
          answer: 'She was writing when I came.',
        },
        {
          q: '"We were going on an excursion at that time yesterday." — Az. dilində?',
          options: [
            'Biz ekskursiyaya gedəcəyik.',
            'Biz ekskursiyaya getdik.',
            'Dünən bu vaxt biz ekskursiyaya gedirdik.',
            'Biz ekskursiyaya gedirik.',
          ],
          answer: 'Dünən bu vaxt biz ekskursiyaya gedirdik.',
        },
        {
          q: '"when" ilə başlanan budaq cümlədə hansı zaman işlənir?',
          options: ['Past Continuous', 'Simple Past', 'Present Continuous', 'Simple Future'],
          answer: 'Simple Past',
        },
        {
          q: 'Past Continuous-da "was" hansı şəxslərdə işlənir?',
          options: ['You, We, They', 'I, He, She, It', 'Bütün şəxslərdə', 'Yalnız I şəxsində'],
          answer: 'I, He, She, It',
        },
        {
          q: 'Past Continuous Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'Gələcək zaman (-acaq/-əcək)',
            'İndiki zaman (-ır/-ir)',
            'Keçmiş davam forması (-ırdı/-irdi)',
            'Nəqli keçmiş (-mış/-miş)',
          ],
          answer: 'Keçmiş davam forması (-ırdı/-irdi)',
        },
      ],
    },
  ],
},

    // ── Mini-quiz 6 ───────────────────────────────────────────
// was/were seç · when ilə uyğun zaman · davamedici zərfi tanı
[
  // was / were seçimi
  { en: '"I ___ writing at that time."',              tr: 'was',  wrong: 'were' },
  { en: '"She ___ reading when I came."',             tr: 'was',  wrong: 'were' },
  { en: '"They ___ playing all day long."',           tr: 'were', wrong: 'was'  },
  { en: '"We ___ working yesterday."',                tr: 'were', wrong: 'was'  },
  { en: '"He ___ sleeping when the phone rang."',     tr: 'was',  wrong: 'were' },

  // İnkar forması
  { en: '"I ___ not writing." — was/were?',           tr: 'was',  wrong: 'were' },
  { en: '"They ___ not coming." — was/were?',         tr: 'were', wrong: 'was'  },
  { en: '"wasn\'t" — tam forması?',                   tr: 'was not', wrong: 'were not' },
  { en: '"weren\'t" — tam forması?',                  tr: 'were not', wrong: 'was not' },

  // when ilə işlənmə
  { en: '"When I came, she ___ writing." — boşluq?',  tr: 'was',          wrong: 'is'           },
  { en: '"when" budaq cümləsində hansı zaman?',       tr: 'Simple Past',  wrong: 'Past Continuous' },
  { en: '"When he called, they ___ sleeping."',       tr: 'were',         wrong: 'was'          },

  // Zaman zərfləri
  { en: 'Past Continuous zaman zərfi?',               tr: 'at that time yesterday', wrong: 'now'        },
  { en: '"all day ___" — tam ifadə?',                 tr: 'long',                   wrong: 'time'       },
  { en: '"the ___ day" — davam ifadəsi?',             tr: 'whole',                  wrong: 'next'       },
  { en: '"at ___ o\'clock yesterday" — boşluq?',      tr: 'two',                    wrong: 'the'        },

  // Düzgün / yanlış cümlə
  { en: '"We was writing." — düzdür?',                tr: 'Xeyr', wrong: 'Bəli' },
  { en: '"She was writing when I came." — düzdür?',   tr: 'Bəli', wrong: 'Xeyr' },

  // Azərbaycana tərcümə
  { en: '"She was writing." → Az. dilində?',          tr: 'yazırdı',   wrong: 'yazacaq'  },
  { en: 'Past Continuous → Az. forması?',             tr: '-ırdı/-irdi', wrong: '-acaq/-əcək' },
],
 {
  type: 'section_divider',
  title: 'Bölmə 7 — Present Perfect',
},
    // ══════════════════════════════════════════════════════════
    // ║  QRUP 3 — Bitmiş zaman formaları (Perfect)             ║
    // ══════════════════════════════════════════════════════════

   // ── Dərs 7.1 — have/has + P II ──────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 7.1 — have/has + P II',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect necə düzəlir?',
      content: 'Present Perfect "to have" köməkçi felinin indiki zaman formaları (have/has) və əsas felin P II (keçmiş zaman feli sifəti) vasitəsilə düzəlir.\n\nDüzəlmə: have/has + P II',
      table: [
        ['Şəxs',      'Tək',                  'Cəm'],
        ['I',         'I have answered',       'We have answered'],
        ['You',       'You have answered',     'You have answered'],
        ['He/She/It', 'He has answered',       'They have answered'],
      ],
      tip: 'have → I, You, We, They\nhas → He, She, It\n\nP II qaydalı fellərdə: fel + -ed (answered, worked)\nP II qaydasız fellərdə: 3-cü sütun (written, gone, seen)',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — sual forması',
      content: 'Sual formasını düzəltmək üçün have/has mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Have I answered?'],
        ['You',           'Have you answered?'],
        ['He / She / It', 'Has he/she answered?'],
        ['We',            'Have we answered?'],
        ['They',          'Have they answered?'],
      ],
      note: 'Qısa cavab:\nYes, I have. / No, I haven\'t.\nYes, he has. / No, he hasn\'t.\nYes, we have. / No, we haven\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — inkar forması',
      content: 'İnkar formasını düzəltmək üçün have/has-dan sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',                   'Qısa inkar'],
        ['I',        'I have not answered',          'I haven\'t answered'],
        ['You',      'You have not answered',        'You haven\'t answered'],
        ['He/She',   'He has not answered',          'He hasn\'t answered'],
        ['We',       'We have not answered',         'We haven\'t answered'],
        ['They',     'They have not answered',       'They haven\'t answered'],
      ],
      tip: 'have not → haven\'t\nhas not → hasn\'t',
    },

    // ── Ekran 4: Sual-inkar forması ──────────────────────
    {
      type: 'lesson',
      title: 'Sual-inkar forması',
      content: 'Sual-inkar forması iki cür düzəlir:',
      table: [
        ['Tam forma',                  'Qısa forma'],
        ['Have I not answered?',       'Haven\'t I answered?'],
        ['Have you not answered?',     'Haven\'t you answered?'],
        ['Has he not answered?',       'Hasn\'t he answered?'],
        ['Have we not answered?',      'Haven\'t we answered?'],
        ['Have they not answered?',    'Haven\'t they answered?'],
      ],
    },

    // ── Quiz: have / has seçimi ──────────────────────────
    { en: '"I ___ answered."',                          tr: 'have',  wrong: 'has'  },
    { en: '"She ___ answered."',                        tr: 'has',   wrong: 'have' },
    { en: '"They ___ answered."',                       tr: 'have',  wrong: 'has'  },
    { en: '"He ___ answered."',                         tr: 'has',   wrong: 'have' },
    { en: '"We ___ answered."',                         tr: 'have',  wrong: 'has'  },
    { en: '"You ___ answered."',                        tr: 'have',  wrong: 'has'  },
    { en: '"I haven\'t answered." — tam forması?',      tr: 'I have not answered',  wrong: 'I has not answered'  },
    { en: '"He hasn\'t answered." — tam forması?',      tr: 'He has not answered',  wrong: 'He have not answered' },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ finished her homework." — boşluğa nə gəlir?',
          options: ['have', 'had', 'has', 'is'],
          answer: 'has',
        },
        {
          q: '"They ___ already eaten." — boşluğa nə gəlir?',
          options: ['has', 'was', 'have', 'is'],
          answer: 'have',
        },
        {
          q: '"___ he answered?" — sual forması?',
          options: ['Have', 'Had', 'Has', 'Is'],
          answer: 'Has',
        },
        {
          q: '"I haven\'t answered." — tam forması hansıdır?',
          options: [
            'I has not answered',
            'I have not answered',
            'I had not answered',
            'I are not answered',
          ],
          answer: 'I have not answered',
        },
        {
          q: '"We ___ never seen snow." — boşluq?',
          options: ['has', 'had', 'is', 'have'],
          answer: 'have',
        },
        {
          q: 'Hansı qısa forma YANLIŞ-dır?',
          options: ['I\'ve answered', 'He\'s answered', 'They\'ve answered', 'She\'ve answered'],
          answer: 'She\'ve answered',
        },
      ],
    },
  ],
},

// ── Dərs 7.2 — İşlənmə: since, for, zaman zərfləri ──────
{
  type: 'grammar_lesson',
  title: 'Dərs 7.2 — İşlənmə: since, for, zaman zərfləri',
  cards: [

    // ── Ekran 1: 3 əsas işlənmə halı ─────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — nə vaxt işlədilir?',
      content: '3 əsas işlənmə halı var:',
      table: [
        ['Hal',   'İzah',                                    'Nümunə'],
        ['1',     'Bitmiş, nəticəsi indiki ana aiddir',      'I have written the letter. You may post it.'],
        ['2',     'Təkrarən baş verib bitmiş hərəkət',       'I\'ve written it over and over.'],
        ['3',     'Keçmişdə başlamış, hələ davam edir',      'We have known each other for ten years.'],
      ],
      examples: [
        { word: 'I have done my homework. Now I can play.', az: 'Ev tapşırığımı etmişəm. İndi oynaya bilərəm.' },
        { word: 'She has gone to Baku.', az: 'O Bakıya getmişdir.' },
        { word: 'I have known him for two years.', az: 'Onu iki ildir tanıyıram.' },
      ],
      tip: 'Azərbaycan dilinə:\n→ Əsasən nəqli keçmiş (-mış/-miş)\n→ "for" ilə işləndikdə indiki zaman (-ır/-ir)',
    },

    // ── Ekran 2: Since vs For ─────────────────────────────
    {
      type: 'lesson',
      title: 'Since vs For — fərq',
      content: '"since" başlanğıc nöqtəni, "for" isə müddəti bildirir:',
      table: [
        ['Söz',    'Mənası',       'Nə bildirir',      'Nümunə'],
        ['since',  '-dən bəri',    'Başlanğıc nöqtə',  'since 2010, since Monday, since morning'],
        ['for',    '...-dır ki',   'Müddət',           'for ten years, for two days, for a long time'],
      ],
      examples: [
        { word: 'I have lived here since 2015.',        az: '2015-ci ildən bəri burada yaşayıram.' },
        { word: 'She has been ill since Monday.',       az: 'Bazar ertəsindən bəri xəstədir.' },
        { word: 'I have lived here for ten years.',     az: 'On ildir ki burada yaşayıram.' },
        { word: 'She has been ill for three days.',     az: 'Üç gündür xəstədir.' },
      ],
      note: 'since → tarix, gün, hadisə, an bildirir\nfor → rəqəm + zaman vahidi bildirir',
    },

    // ── Ekran 3: Zaman zərfləri ───────────────────────────
    {
      type: 'lesson',
      title: 'Present Perfect — zaman zərfləri',
      content: 'Present Perfect ilə işlənən zaman zərfləri:',
      table: [
        ['Zərf',          'Mənası',              'Hansı cümlədə'],
        ['already',       'artıq',               'Təsdiq'],
        ['yet',           'hələ',                'İnkar / Sual'],
        ['ever',          'heç vaxt / -mı',      'Sual'],
        ['never',         'heç vaxt',            'İnkar'],
        ['recently',      'bu yaxınlarda',       'Təsdiq'],
        ['lately',        'son zamanlar',        'Təsdiq'],
        ['today',         'bu gün',              'Hər hansı'],
        ['this week',     'bu həftə',            'Hər hansı'],
        ['over and over', 'dəfələrlə',           'Təsdiq'],
      ],
      examples: [
        { word: 'I have already done it.',          az: 'Artıq etmişəm.' },
        { word: 'I haven\'t done it yet.',          az: 'Hələ etməmişəm.' },
        { word: 'Have you ever seen the sea?',      az: 'Heç dənizi görmüsənmi?' },
        { word: 'I have never seen him before.',    az: 'Onu əvvəllər heç görməmişəm.' },
      ],
    },

    // ── Quiz: since / for seçimi ──────────────────────────
    { en: '"I have lived here ___ 2010."',              tr: 'since',  wrong: 'for'   },
    { en: '"She has been ill ___ three days."',         tr: 'for',    wrong: 'since' },
    { en: '"He has worked here ___ Monday."',           tr: 'since',  wrong: 'for'   },
    { en: '"We have known each other ___ ten years."',  tr: 'for',    wrong: 'since' },
    { en: '"I haven\'t seen her ___ last week."',       tr: 'since',  wrong: 'for'   },
    { en: '"They have been friends ___ a long time."',  tr: 'for',    wrong: 'since' },

    // ── Quiz: zaman zərfləri ──────────────────────────────
    { en: '"I have ___ done it." — artıq?',             tr: 'already', wrong: 'yet'   },
    { en: '"I haven\'t done it ___." — hələ?',          tr: 'yet',     wrong: 'already' },
    { en: '"Have you ___ been to London?" — heç?',      tr: 'ever',    wrong: 'never' },
    { en: '"I have ___ seen snow." — heç vaxt?',        tr: 'never',   wrong: 'ever'  },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She has lived here ___ 2018." — boşluq?',
          options: ['for', 'during', 'since', 'ago'],
          answer: 'since',
        },
        {
          q: '"I have known him ___ five years." — boşluq?',
          options: ['since', 'ago', 'before', 'for'],
          answer: 'for',
        },
        {
          q: '"Have you ___ eaten sushi?" — boşluq?',
          options: ['never', 'yet', 'already', 'ever'],
          answer: 'ever',
        },
        {
          q: '"I haven\'t finished ___ ." — hələ bitirməmişəm?',
          options: ['already', 'ever', 'never', 'yet'],
          answer: 'yet',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'I have already eaten.',
            'She has never seen snow.',
            'Have you finished yet?',
            'I have seen him yesterday.',
          ],
          answer: 'I have seen him yesterday.',
        },
        {
          q: '"I have known him for two years." — Azərbaycanca?',
          options: [
            'Onu iki il əvvəl tanıdım.',
            'Onu iki ildir tanıyıram.',
            'Onu iki il sonra tanıyacağam.',
            'Onu iki il ərzində tanımışdım.',
          ],
          answer: 'Onu iki ildir tanıyıram.',
        },
        {
          q: 'Present Perfect Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'Şühudi keçmiş (-dı/-di)',
            'Nəqli keçmiş (-mış/-miş)',
            'Gələcək zaman (-acaq/-əcək)',
            'Uzaq keçmiş (-mışdı/-mişdi)',
          ],
          answer: 'Nəqli keçmiş (-mış/-miş)',
        },
      ],
    },
  ],
},

// ── Mini-quiz 7 ───────────────────────────────────────────
// have/has seç · since/for fərqi · already/yet/ever/never
[
  // have / has seçimi
  { en: '"I ___ finished."',                              tr: 'have',   wrong: 'has'   },
  { en: '"She ___ finished."',                            tr: 'has',    wrong: 'have'  },
  { en: '"They ___ finished."',                           tr: 'have',   wrong: 'has'   },
  { en: '"He ___ never been there."',                     tr: 'has',    wrong: 'have'  },
  { en: '"We ___ already eaten."',                        tr: 'have',   wrong: 'has'   },

  // since / for fərqi
  { en: '"I have studied ___ Monday."',                   tr: 'since',  wrong: 'for'   },
  { en: '"She has been ill ___ a week."',                 tr: 'for',    wrong: 'since' },
  { en: '"He has lived here ___ 2015."',                  tr: 'since',  wrong: 'for'   },
  { en: '"We have waited ___ two hours."',                tr: 'for',    wrong: 'since' },
  { en: '"I haven\'t seen her ___ last year."',           tr: 'since',  wrong: 'for'   },

  // already / yet / ever / never
  { en: '"I have ___ done it." — artıq',                  tr: 'already', wrong: 'yet'   },
  { en: '"I haven\'t done it ___." — hələ',               tr: 'yet',     wrong: 'already' },
  { en: '"Have you ___ been to Paris?" — heç',            tr: 'ever',    wrong: 'never' },
  { en: '"I have ___ eaten sushi." — heç vaxt',           tr: 'never',   wrong: 'ever'  },

  // Düzgün / yanlış cümlə
  { en: '"I have seen him yesterday." — düzdür?',         tr: 'Xeyr',   wrong: 'Bəli'  },
  { en: '"She has just arrived." — düzdür?',              tr: 'Bəli',   wrong: 'Xeyr'  },
  { en: '"Have you ever visited Baku?" — düzdür?',        tr: 'Bəli',   wrong: 'Xeyr'  },
  { en: '"I have never saw him." — düzdür?',              tr: 'Xeyr',   wrong: 'Bəli'  },

  // Azərbaycana tərcümə
  { en: '"She has gone." — Azərbaycanca?',                tr: 'O getmişdir.',      wrong: 'O gedirdi.'        },
  { en: '"I have known him for 2 years." — Azərbaycanca?',tr: 'Onu 2 ildir tanıyıram.', wrong: 'Onu 2 il əvvəl tanıdım.' },
],
    
 {
  type: 'section_divider',
  title: 'Bölmə 8 — Past Perfect',
},

// ── Dərs 8.1 — had + P II ────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.1 — had + P II',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Past Perfect necə düzəlir?',
      content: 'Past Perfect "to have" köməkçi felinin keçmiş zaman forması "had" və əsas felin P II vasitəsilə düzəlir. Bütün şəxslərdə "had" işlənir — dəyişmir.\n\nDüzəlmə: had + P II',
      table: [
        ['Şəxs',      'Tək',               'Cəm'],
        ['I',         'I had written',     'We had written'],
        ['You',       'You had written',   'You had written'],
        ['He/She/It', 'He had written',    'They had written'],
      ],
      tip: 'had → bütün şəxslərdə eynidir, dəyişmir.\n\nQısa forma: I\'d written / She\'d written',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Past Perfect — sual forması',
      content: 'Sual formasını düzəltmək üçün "had" mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Had I written?'],
        ['You',           'Had you written?'],
        ['He / She / It', 'Had he/she written?'],
        ['We',            'Had we written?'],
        ['They',          'Had they written?'],
      ],
      note: 'Qısa cavab:\nYes, I had. / No, I hadn\'t.\nYes, he had. / No, he hadn\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Past Perfect — inkar forması',
      content: 'İnkar formasını düzəltmək üçün "had"-dan sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',                  'Qısa inkar'],
        ['I',        'I had not written',           'I hadn\'t written'],
        ['You',      'You had not written',         'You hadn\'t written'],
        ['He/She',   'He had not written',          'He hadn\'t written'],
        ['We',       'We had not written',          'We hadn\'t written'],
        ['They',     'They had not written',        'They hadn\'t written'],
      ],
      tip: 'had not → hadn\'t',
    },

    // ── Ekran 4: Sual-inkar forması ──────────────────────
    {
      type: 'lesson',
      title: 'Sual-inkar forması',
      content: 'Sual-inkar forması iki cür düzəlir:',
      table: [
        ['Tam forma',                   'Qısa forma'],
        ['Had I not written?',          'Hadn\'t I written?'],
        ['Had you not written?',        'Hadn\'t you written?'],
        ['Had he not written?',         'Hadn\'t he written?'],
        ['Had we not written?',         'Hadn\'t we written?'],
        ['Had they not written?',       'Hadn\'t they written?'],
      ],
    },

    // ── Quiz: had seçimi ──────────────────────────────────
    { en: '"I ___ written the letter."',                   tr: 'had',  wrong: 'have' },
    { en: '"She ___ already left."',                       tr: 'had',  wrong: 'has'  },
    { en: '"They ___ finished before we came."',           tr: 'had',  wrong: 'have' },
    { en: '"He ___ never seen snow before."',              tr: 'had',  wrong: 'has'  },
    { en: '"We ___ eaten before she arrived."',            tr: 'had',  wrong: 'have' },
    { en: '"I hadn\'t written." — tam forması?',           tr: 'I had not written',   wrong: 'I have not written'  },
    { en: '"Hadn\'t she finished?" — tam forması?',        tr: 'Had she not finished?', wrong: 'Has she not finished?' },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ already left when I arrived." — boşluq?',
          options: ['has', 'have', 'had', 'is'],
          answer: 'had',
        },
        {
          q: '"___ they finished before you came?" — sual?',
          options: ['Have', 'Has', 'Had', 'Did'],
          answer: 'Had',
        },
        {
          q: '"I hadn\'t written." — tam forması?',
          options: [
            'I have not written',
            'I had not written',
            'I has not written',
            'I was not written',
          ],
          answer: 'I had not written',
        },
        {
          q: 'Past Perfect-də bütün şəxslərdə hansı köməkçi fel işlənir?',
          options: ['have', 'has', 'had', 'was'],
          answer: 'had',
        },
        {
          q: '"He\'d written." — tam forması?',
          options: [
            'He have written',
            'He has written',
            'He had written',
            'He was written',
          ],
          answer: 'He had written',
        },
        {
          q: 'Hansı qısa forma YANLIŞ-dır?',
          options: ['I\'d written', 'She\'d written', 'They\'d written', 'We\'s written'],
          answer: 'We\'s written',
        },
      ],
    },
  ],
},

// ── Dərs 8.2 — İşlənmə: when/after/before + ardıcıllıq ──
{
  type: 'grammar_lesson',
  title: 'Dərs 8.2 — İşlənmə: when/after/before + ardıcıllıq',
  cards: [

    // ── Ekran 1: Əsas qayda ───────────────────────────────
    {
      type: 'lesson',
      title: 'Past Perfect — əsas işlənmə qaydası',
      content: 'Past Perfect keçmişdəki iki hərəkətdən birincisini bildirir.\n\nBirinci baş verən hərəkət → Past Perfect\nİkinci baş verən hərəkət → Simple Past',
      examples: [
        { word: 'When we came, she had already done her homework.', az: 'Biz gələndə o ev tapşırığını artıq etmişdi.' },
        { word: 'By the time I arrived, they had left.', az: 'Mən gələnə qədər onlar getmişdilər.' },
      ],
      tip: 'Əvvəl baş verən → Past Perfect\nSonra baş verən → Simple Past',
    },

    // ── Ekran 2: when / before / after ilə qayda ─────────
    {
      type: 'lesson',
      title: 'when / before / after ilə qayda',
      content: 'Bağlayıcıya görə hansı tərəfin Past Perfect olduğu dəyişir:',
      table: [
        ['Bağlayıcı', 'Past Perfect olan tərəf',   'Simple Past olan tərəf'],
        ['when',      'Baş cümlə',                  'when olan budaq cümlə'],
        ['before',    'Baş cümlə',                  'before olan budaq cümlə'],
        ['after',     'after olan budaq cümlə',     'Baş cümlə'],
      ],
      examples: [
        { word: 'When I came, she had already left.',      az: 'Mən gələndə o artıq getmişdi.' },
        { word: 'She had left before I came.',             az: 'O, mən gəlməmişdən əvvəl getmişdi.' },
        { word: 'After he had written, he went to sleep.', az: 'Yazdıqdan sonra yatmağa getdi.' },
      ],
      note: 'after ilə — əksinədir!\nafter olan tərəf Past Perfect-dir çünki həmin hərəkət birinci baş verib.',
    },

    // ── Ekran 3: Zaman zərfləri ───────────────────────────
    {
      type: 'lesson',
      title: 'Past Perfect — zaman zərfləri',
      content: 'Past Perfect aşağıdakı zaman zərfləri ilə işlənir:',
      table: [
        ['Zərf',                    'Mənası'],
        ['by that time',            'o vaxta qədər'],
        ['by the end of the year',  'ilin sonuna qədər'],
        ['by five o\'clock yesterday', 'dünən saat beşə qədər'],
        ['by Saturday',             'şənbəyə qədər'],
        ['already',                 'artıq'],
        ['just',                    'yenicə'],
        ['never',                   'heç vaxt'],
        ['before',                  'əvvəl'],
        ['after',                   'sonra'],
      ],
      examples: [
        { word: 'By that time she had finished her work.',       az: 'O vaxta qədər işini qurtarmışdı.' },
        { word: 'By five o\'clock he had already left.',         az: 'Saat beşə qədər o artıq getmişdi.' },
      ],
    },

    // ── Ekran 4: Hardly / No sooner ──────────────────────
    {
      type: 'lesson',
      title: 'Hardly...when · No sooner...than',
      content: 'Past Perfect "hardly...when" və "no sooner...than" bağlayıcıları ilə işlənir.\n\nMənası: "Yenicə...ki", "Heç...ki"\n\nVacib qayda — inversiya: "had" mübtədadan əvvələ keçir.',
      table: [
        ['Bağlayıcı',           'Mənası',      'Nümunə'],
        ['No sooner...than',    'yenicə...ki', 'No sooner had I arrived than it rained.'],
        ['Hardly...when',       'heç...ki',    'Hardly had I arrived when it rained.'],
      ],
      examples: [
        { word: 'No sooner had I turned round than I bumped into a stranger.', az: 'Yenicə küçənin tinini dönmüşdüm ki, yad adamla toqquşdum.' },
        { word: 'Hardly had I turned round when I bumped into a stranger.',    az: 'Heç küçənin tinini dönməmişdim ki, yad adamla toqquşdum.' },
      ],
      note: 'İnversiya: "had" cümlənin əvvəlinə keçir!\nNo sooner had I... / Hardly had she...',
    },

    // ── Ekran 5: Azərbaycan dilinə tərcümə ───────────────
    {
      type: 'lesson',
      title: 'Past Perfect Azərbaycan dilinə necə tərcümə olunur?',
      content: 'Past Perfect Azərbaycan dilinin uzaq keçmiş zaman forması kimi tərcümə olunur.',
      table: [
        ['İngilis',                   'Azərbaycan'],
        ['I had written.',            'Mən yazmışdım.'],
        ['She had gone.',             'O getmişdi.'],
        ['They had finished.',        'Onlar qurtarmışdılar.'],
      ],
      examples: [
        { word: 'We had finished our work before the rain began.', az: 'Yağış başlayandan əvvəl biz işimizi qurtarmışdıq.' },
      ],
    },

    // ── Quiz: when / before / after ───────────────────────
    { en: '"When I came, she ___ already left."',              tr: 'had',         wrong: 'has'   },
    { en: '"After he ___ written, he went to sleep."',         tr: 'had',         wrong: 'has'   },
    { en: '"She had left ___ I came."',                        tr: 'before',      wrong: 'after' },
    { en: '"___ he had written, he went to sleep."',           tr: 'After',       wrong: 'Before' },
    { en: '"By that time she ___ finished."',                  tr: 'had',         wrong: 'has'   },
    { en: '"Hardly had I arrived ___ it rained."',             tr: 'when',        wrong: 'than'  },
    { en: '"No sooner had I arrived ___ it rained."',          tr: 'than',        wrong: 'when'  },
    { en: '"I had written." — Azərbaycanca?',                  tr: 'Mən yazmışdım.',  wrong: 'Mən yazmışam.' },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"When I arrived, she ___ already left." — boşluq?',
          options: ['has', 'have', 'is', 'had'],
          answer: 'had',
        },
        {
          q: '"After he ___ the letter, he went to sleep." — boşluq?',
          options: ['wrote', 'has written', 'had written', 'was writing'],
          answer: 'had written',
        },
        {
          q: '"___ had she left when he arrived." — boşluq?',
          options: ['When', 'After', 'Hardly', 'Since'],
          answer: 'Hardly',
        },
        {
          q: 'Hansı cümlə DOĞRU-dur?',
          options: [
            'When I came, she already left.',
            'She had left before I had come.',
            'After he had finished, he went home.',
            'By that time they have arrived.',
          ],
          answer: 'After he had finished, he went home.',
        },
        {
          q: '"She had gone." — Azərbaycanca?',
          options: [
            'O gedirdi.',
            'O gedəcəkdi.',
            'O getmişdi.',
            'O getmişdir.',
          ],
          answer: 'O getmişdi.',
        },
        {
          q: 'Past Perfect Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'Şühudi keçmiş (-dı/-di)',
            'Nəqli keçmiş (-mış/-miş)',
            'Uzaq keçmiş (-mışdı/-mişdi)',
            'İndiki zaman (-ır/-ir)',
          ],
          answer: 'Uzaq keçmiş (-mışdı/-mişdi)',
        },
        {
          q: '"No sooner had I arrived ___ it rained." — boşluq?',
          options: ['when', 'since', 'than', 'after'],
          answer: 'than',
        },
      ],
    },
  ],
},

// ── Mini-quiz 8 ───────────────────────────────────────────
// had seç · when/after/before · by that time · hardly/no sooner
[
  // had seçimi
  { en: '"I ___ written the letter."',                        tr: 'had',    wrong: 'have'  },
  { en: '"She ___ already left."',                            tr: 'had',    wrong: 'has'   },
  { en: '"They ___ finished before we came."',                tr: 'had',    wrong: 'have'  },
  { en: '"He ___ never seen snow before that day."',          tr: 'had',    wrong: 'has'   },
  { en: '"We ___ eaten before she arrived."',                 tr: 'had',    wrong: 'have'  },

  // when / before / after ardıcıllıq
  { en: '"When I came, she ___ already left."',               tr: 'had',         wrong: 'has'    },
  { en: '"She had left ___ I came."',                         tr: 'before',      wrong: 'after'  },
  { en: '"___ he had written, he went to sleep."',            tr: 'After',       wrong: 'Before' },
  { en: '"After he had written, he ___ to sleep."',           tr: 'went',        wrong: 'had gone' },

  // by that time zərfləri
  { en: '"By that time she ___ finished."',                   tr: 'had',         wrong: 'has'   },
  { en: '"By ___ o\'clock he had left."',                     tr: 'five',        wrong: 'now'   },

  // hardly / no sooner
  { en: '"Hardly had I arrived ___ it rained."',              tr: 'when',        wrong: 'than'  },
  { en: '"No sooner had I arrived ___ it rained."',           tr: 'than',        wrong: 'when'  },
  { en: '"___ had I turned when I saw him." — inversiya?',    tr: 'Hardly',      wrong: 'Never' },

  // Düzgün / yanlış cümlə
  { en: '"When I came, she already left." — düzdür?',         tr: 'Xeyr',        wrong: 'Bəli'  },
  { en: '"After he had finished, he went home." — düzdür?',   tr: 'Bəli',        wrong: 'Xeyr'  },
  { en: '"By that time they have arrived." — düzdür?',        tr: 'Xeyr',        wrong: 'Bəli'  },

  // Azərbaycana tərcümə
  { en: '"She had gone." — Azərbaycanca?',                    tr: 'O getmişdi.',       wrong: 'O getmişdir.'      },
  { en: '"I had written." — Azərbaycanca?',                   tr: 'Mən yazmışdım.',    wrong: 'Mən yazmışam.'     },
  { en: 'Past Perfect Azərbaycanda hansı zamandır?',          tr: 'Uzaq keçmiş',       wrong: 'Nəqli keçmiş'      },
],
    {
  type: 'section_divider',
  title: 'VERBS - ÜMUMİ İMTAHAN',
},

// ── Final Test — Felin zaman formaları (50 sual) ──────────
[
  // ── Simple Present ────────────────────────────────────
  { en: '"She ___ to school every day."',                     tr: 'goes',         wrong: 'go'          },
  { en: '"___ he speak English?"',                            tr: 'Does',         wrong: 'Do'          },
  { en: '"They ___ not like coffee."',                        tr: 'do',           wrong: 'does'        },
  { en: '"Water ___ at 100 degrees."',                        tr: 'boils',        wrong: 'boil'        },
  { en: '"I will call you if she ___."',                      tr: 'comes',        wrong: 'will come'   },
  { en: '"He ___ soundly every night."',                      tr: 'sleeps',       wrong: 'sleep'       },
  { en: '"___ they live here?"',                              tr: 'Do',           wrong: 'Does'        },
  { en: '"She doesn\'t ___."',                                tr: 'work',         wrong: 'works'       },

  // ── Simple Past ───────────────────────────────────────
  { en: '"I ___ to Baku yesterday."',                         tr: 'went',         wrong: 'go'          },
  { en: '"She ___ a letter last night."',                     tr: 'wrote',        wrong: 'writes'      },
  { en: '"___ you finish the work?"',                         tr: 'Did',          wrong: 'Does'        },
  { en: '"They ___ not come to the party."',                  tr: 'did',          wrong: 'does'        },
  { en: '"He ___ in the village when he was young."',         tr: 'lived',        wrong: 'lives'       },
  { en: '"asked" — -ed necə oxunur?',                         tr: '[t]',          wrong: '[id]'        },
  { en: '"added" — -ed necə oxunur?',                         tr: '[id]',         wrong: '[t]'         },
  { en: '"played" — -ed necə oxunur?',                        tr: '[d]',          wrong: '[t]'         },
  { en: '"write" felinin Simple Past forması?',               tr: 'wrote',        wrong: 'written'     },
  { en: '"speak" felinin Simple Past forması?',               tr: 'spoke',        wrong: 'spoken'      },
  { en: '"cut" felinin Simple Past forması?',                 tr: 'cut',          wrong: 'cutted'      },
  { en: '"send" felinin Simple Past forması?',                tr: 'sent',         wrong: 'sended'      },

  // ── Simple Future ─────────────────────────────────────
  { en: '"I ___ go to London next year."',                    tr: 'shall',        wrong: 'will'        },
  { en: '"She ___ call you tomorrow."',                       tr: 'will',         wrong: 'shall'       },
  { en: '"___ I help you?"',                                  tr: 'Shall',        wrong: 'Will'        },
  { en: '"I shan\'t work." — tam forması?',                   tr: 'I shall not work',  wrong: 'I will not work' },
  { en: '"He won\'t come." — tam forması?',                   tr: 'He will not come',  wrong: 'He shall not come' },
  { en: '"She ___ going to cook dinner." — hazırlaşır',       tr: 'is',           wrong: 'will'        },
  { en: '"The train is about ___ start."',                    tr: 'to',           wrong: 'for'         },
  { en: 'Simple Future zaman zərfi?',                         tr: 'tomorrow',     wrong: 'yesterday'   },

  // ── Future in the Past ────────────────────────────────
  { en: '"I ___ come." — Future in the Past, I şəxsi',       tr: 'should',       wrong: 'would'       },
  { en: '"She ___ come." — Future in the Past',               tr: 'would',        wrong: 'should'      },
  { en: '"He said that he ___ return in time."',              tr: 'would',        wrong: 'will'        },
  { en: '"I wouldn\'t come." — tam forması?',                 tr: 'I would not come',  wrong: 'I should not come' },
  { en: 'Future in the Past zaman zərfi?',                    tr: 'the next day', wrong: 'tomorrow'    },

  // ── Present Continuous ────────────────────────────────
  { en: '"She ___ writing now."',                             tr: 'is',           wrong: 'are'         },
  { en: '"They ___ playing at the moment."',                  tr: 'are',          wrong: 'is'          },
  { en: '"Look! He ___ running."',                            tr: 'is',           wrong: 'was'         },
  { en: '"I am not writing." — qısa forması?',                tr: 'I\'m not writing',  wrong: 'I aren\'t writing' },
  { en: '"to know" — Present Continuous-da işlənir?',         tr: 'Xeyr',         wrong: 'Bəli'        },
  { en: '"I am thinking of you." — "think" burada?',          tr: 'fikirləşmək',  wrong: 'məncə'       },
  { en: '"to belong to" — stativ feldir?',                    tr: 'Bəli',         wrong: 'Xeyr'        },
  { en: 'Present Continuous zaman zərfi?',                    tr: 'now',          wrong: 'yesterday'   },

  // ── Past Continuous ───────────────────────────────────
  { en: '"She ___ writing at that time."',                    tr: 'was',          wrong: 'were'        },
  { en: '"They ___ playing when I came."',                    tr: 'were',         wrong: 'was'         },
  { en: '"When I came, my sister ___ writing something."',    tr: 'was',          wrong: 'is'          },
  { en: '"I ___ working all day long yesterday."',            tr: 'was',          wrong: 'were'        },
  { en: 'Past Continuous zaman zərfi?',                       tr: 'at that time yesterday', wrong: 'just'  },

  // ── Present Perfect ───────────────────────────────────
  { en: '"She ___ finished her homework."',                   tr: 'has',          wrong: 'have'        },
  { en: '"They ___ already eaten."',                          tr: 'have',         wrong: 'has'         },
  { en: '"I ___ never seen snow."',                           tr: 'have',         wrong: 'has'         },
  { en: '"Have you ___ been to Paris?"',                      tr: 'ever',         wrong: 'never'       },
  { en: '"I haven\'t done it ___."',                          tr: 'yet',          wrong: 'already'     },
  { en: '"I have lived here ___ 2015."',                      tr: 'since',        wrong: 'for'         },
  { en: '"She has been ill ___ three days."',                 tr: 'for',          wrong: 'since'       },
  { en: '"I have seen him yesterday." — düzdür?',             tr: 'Xeyr',         wrong: 'Bəli'        },
  { en: '"She has gone." — Azərbaycanca?',                    tr: 'O getmişdir.', wrong: 'O gedirdi.'  },

  // ── Past Perfect ──────────────────────────────────────
  { en: '"When I came, she ___ already left."',               tr: 'had',          wrong: 'has'         },
  { en: '"After he ___ written, he went to sleep."',          tr: 'had',          wrong: 'has'         },
  { en: '"She had left ___ I came."',                         tr: 'before',       wrong: 'after'       },
  { en: '"By that time she ___ finished."',                   tr: 'had',          wrong: 'has'         },
  { en: '"Hardly had I arrived ___ it rained."',              tr: 'when',         wrong: 'than'        },
  { en: '"No sooner had I arrived ___ it rained."',           tr: 'than',         wrong: 'when'        },
  { en: '"I hadn\'t written." — tam forması?',                tr: 'I had not written', wrong: 'I have not written' },
  { en: '"She had gone." — Azərbaycanca?',                    tr: 'O getmişdi.',  wrong: 'O getmişdir.' },

  // ── Qarışıq: zaman tanıma ─────────────────────────────
  { en: '"She is reading now." — hansı zamandır?',            tr: 'Present Continuous',  wrong: 'Simple Present'   },
  { en: '"She reads every day." — hansı zamandır?',           tr: 'Simple Present',      wrong: 'Present Continuous' },
  { en: '"She was reading at 5." — hansı zamandır?',          tr: 'Past Continuous',     wrong: 'Present Continuous' },
  { en: '"She read yesterday." — hansı zamandır?',            tr: 'Simple Past',         wrong: 'Past Perfect'     },
  { en: '"She has read it." — hansı zamandır?',               tr: 'Present Perfect',     wrong: 'Past Perfect'     },
  { en: '"She had read it." — hansı zamandır?',               tr: 'Past Perfect',        wrong: 'Present Perfect'  },
  { en: '"She will read tomorrow." — hansı zamandır?',        tr: 'Simple Future',       wrong: 'Future in the Past' },
  { en: '"He said she would read." — hansı zamandır?',        tr: 'Future in the Past',  wrong: 'Simple Future'    },
],

  ],
};
const PASSIVE_LEVEL = {
  id: 'passive',
  name: 'PASSIVE VOICE',
  icon: '<i class="ti ti-refresh"></i>',
  color: '#93C5FD',

  quizzes: [

    // ── index: 0 — Qrup 1 bölücüsü ───────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 1 — Qeyri-müəyyən zaman formalarının məchul növü',
    },

    // ── index: 1 — Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 1 — Present / Past / Future Indefinite Passive',
    },

    // ── index: 2 — Dərs 1.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.1 — Present Indefinite Passive',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Present Indefinite Passive necə düzəlir?',
          content: 'Məchul növdə işin icraçısı məlum olmur.\n\nDüzəlmə: am / is / are + P II',
          table: [
            ['Şəxs',      'Təsdiq'],
            ['I',         'I am invited'],
            ['You',       'You are invited'],
            ['He / She',  'He is invited'],
            ['We',        'We are invited'],
            ['They',      'They are invited'],
          ],
          tip: 'am → I\nis → He, She, It\nare → You, We, They',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Sual və inkar forması',
          content: 'Sual: am/is/are mübtədadan əvvələ keçir.\nİnkar: am/is/are + not əlavə edilir.',
          table: [
            ['Sual',              'İnkar'],
            ['Am I invited?',     'I am not invited'],
            ['Are you invited?',  'You are not invited'],
            ['Is he invited?',    'He is not invited'],
            ['Are we invited?',   'We are not invited'],
            ['Are they invited?', 'They are not invited'],
          ],
          note: 'Azərbaycana tərcümə:\nis invited → dəvət edilir\nare invited → dəvət edilirlər',
        },

        // Ekran 3
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Present Indefinite Passive cümlələri:',
          examples: [
            { word: 'English is spoken here.',       az: 'Burada ingilis dilində danışılır.' },
            { word: 'The letters are written.',      az: 'Məktublar yazılır.' },
            { word: 'I am invited to the party.',    az: 'Mən ziyafətə dəvət edilirəm.' },
            { word: 'The room is cleaned every day.', az: 'Otaq hər gün təmizlənir.' },
          ],
          tip: 'İcraçını bildirmək üçün "by" sözönü işlənir:\nThe letter is written by him.',
        },

        // Quiz
        { en: '"I ___ invited."',                    tr: 'am',   wrong: 'is'   },
        { en: '"She ___ invited."',                  tr: 'is',   wrong: 'are'  },
        { en: '"They ___ invited."',                 tr: 'are',  wrong: 'is'   },
        { en: '"English ___ spoken here."',          tr: 'is',   wrong: 'are'  },
        { en: '"The books ___ sold."',               tr: 'are',  wrong: 'is'   },
        { en: '"___ I invited?" — sual',             tr: 'Am',   wrong: 'Is'   },
        { en: '"___ he called?" — sual',             tr: 'Is',   wrong: 'Are'  },
        { en: '"I am not invited." — qısa?',         tr: 'I\'m not invited', wrong: 'I isn\'t invited' },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter ___ written every day."',
              options: ['am', 'are', 'is', 'be'],
              answer: 'is',
            },
            {
              q: '"They ___ invited to the meeting."',
              options: ['am', 'is', 'be', 'are'],
              answer: 'are',
            },
            {
              q: '"___ English spoken here?" — sual',
              options: ['Am', 'Do', 'Is', 'Are'],
              answer: 'Is',
            },
            {
              q: '"is invited" — Azərbaycanca?',
              options: ['dəvət etdi', 'dəvət edilir', 'dəvət edəcək', 'dəvət etmişdi'],
              answer: 'dəvət edilir',
            },
            {
              q: 'Present Indefinite Passive düzəlmə qaydası?',
              options: ['was/were + P II', 'have/has + P II', 'am/is/are + P II', 'will be + P II'],
              answer: 'am/is/are + P II',
            },
          ],
        },
      ],
    },

    // ── index: 3 — Dərs 1.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.2 — Past Indefinite Passive',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Past Indefinite Passive necə düzəlir?',
          content: 'Düzəlmə: was / were + P II',
          table: [
            ['Şəxs',      'Təsdiq'],
            ['I',         'I was invited'],
            ['You',       'You were invited'],
            ['He / She',  'He was invited'],
            ['We',        'We were invited'],
            ['They',      'They were invited'],
          ],
          tip: 'was → I, He, She, It\nwere → You, We, They',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Sual və inkar forması',
          content: 'Sual: was/were mübtədadan əvvələ keçir.\nİnkar: was/were + not əlavə edilir.',
          table: [
            ['Sual',               'İnkar'],
            ['Was I invited?',     'I was not invited'],
            ['Were you invited?',  'You were not invited'],
            ['Was he invited?',    'He was not invited'],
            ['Were we invited?',   'We were not invited'],
            ['Were they invited?', 'They were not invited'],
          ],
          note: 'Azərbaycana tərcümə:\nwas invited → dəvət edildi\nwere invited → dəvət edildilər',
        },

        // Ekran 3
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Past Indefinite Passive cümlələri:',
          examples: [
            { word: 'The letter was written yesterday.',  az: 'Məktub dünən yazıldı.' },
            { word: 'They were invited to the party.',    az: 'Onlar ziyafətə dəvət edildilər.' },
            { word: 'The book was published in 2010.',    az: 'Kitab 2010-cu ildə çap edildi.' },
            { word: 'The windows were broken.',           az: 'Pəncərələr sındırıldı.' },
          ],
          tip: 'İcraçı: by + isim\nThe letter was written by her.',
        },

        // Quiz
        { en: '"I ___ invited yesterday."',              tr: 'was',  wrong: 'were'  },
        { en: '"They ___ invited last week."',           tr: 'were', wrong: 'was'   },
        { en: '"She ___ called last night."',            tr: 'was',  wrong: 'were'  },
        { en: '"We ___ told about it."',                 tr: 'were', wrong: 'was'   },
        { en: '"___ he invited?" — sual',                tr: 'Was',  wrong: 'Were'  },
        { en: '"___ they told?" — sual',                 tr: 'Were', wrong: 'Was'   },
        { en: '"was invited" — Azərbaycanca?',           tr: 'dəvət edildi',    wrong: 'dəvət edilir'   },
        { en: '"were broken" — Azərbaycanca?',           tr: 'sındırıldılar',   wrong: 'sındırılırlar'  },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter ___ written yesterday."',
              options: ['is', 'are', 'were', 'was'],
              answer: 'was',
            },
            {
              q: '"They ___ invited last night."',
              options: ['was', 'is', 'are', 'were'],
              answer: 'were',
            },
            {
              q: '"___ she called?" — sual',
              options: ['Were', 'Are', 'Was', 'Is'],
              answer: 'Was',
            },
            {
              q: '"was written" — Azərbaycanca?',
              options: ['yazılır', 'yazılacaq', 'yazıldı', 'yazılmışdı'],
              answer: 'yazıldı',
            },
            {
              q: 'Past Indefinite Passive düzəlmə qaydası?',
              options: ['am/is/are + P II', 'had been + P II', 'will be + P II', 'was/were + P II'],
              answer: 'was/were + P II',
            },
          ],
        },
      ],
    },

    // ── index: 4 — Dərs 1.3 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.3 — Future Indefinite Passive',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Future Indefinite Passive necə düzəlir?',
          content: 'Düzəlmə: shall be / will be + P II',
          table: [
            ['Şəxs',      'Təsdiq'],
            ['I',         'I shall be invited'],
            ['You',       'You will be invited'],
            ['He / She',  'He will be invited'],
            ['We',        'We shall be invited'],
            ['They',      'They will be invited'],
          ],
          tip: 'shall be → I, We\nwill be → You, He, She, It, They',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Sual və inkar forması',
          content: 'Sual: shall/will mübtədadan əvvələ keçir.\nİnkar: shall/will + not əlavə edilir.',
          table: [
            ['Sual',                   'İnkar'],
            ['Shall I be invited?',    'I shall not be invited'],
            ['Will you be invited?',   'You will not be invited'],
            ['Will he be invited?',    'He will not be invited'],
            ['Will they be invited?',  'They will not be invited'],
          ],
          note: 'Azərbaycana tərcümə:\nwill be invited → dəvət ediləcək\nshall be invited → dəvət ediləcəyəm',
        },

        // Ekran 3
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Future Indefinite Passive cümlələri:',
          examples: [
            { word: 'The letter will be sent tomorrow.', az: 'Məktub sabah göndəriləcək.' },
            { word: 'I shall be invited to the party.',  az: 'Mən ziyafətə dəvət ediləcəyəm.' },
            { word: 'The work will be done next week.',  az: 'İş gələn həftə görüləcək.' },
            { word: 'New houses will be built here.',    az: 'Burada yeni evlər tikilecək.' },
          ],
        },

        // Quiz
        { en: '"I ___ invited." — Future Passive',       tr: 'shall be', wrong: 'will be'  },
        { en: '"She ___ invited." — Future Passive',     tr: 'will be',  wrong: 'shall be' },
        { en: '"They ___ told." — Future Passive',       tr: 'will be',  wrong: 'shall be' },
        { en: '"We ___ invited." — Future Passive',      tr: 'shall be', wrong: 'will be'  },
        { en: '"___ I be invited?" — sual',              tr: 'Shall',    wrong: 'Will'     },
        { en: '"___ he be called?" — sual',              tr: 'Will',     wrong: 'Shall'    },
        { en: '"will be sent" — Azərbaycanca?',          tr: 'göndəriləcək',   wrong: 'göndərildi'      },
        { en: '"shall not be invited" — qısa?',          tr: 'shan\'t be invited', wrong: 'won\'t be invited' },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter ___ sent tomorrow."',
              options: ['is', 'was', 'will be', 'has been'],
              answer: 'will be',
            },
            {
              q: '"I ___ invited." — Future Passive, I şəxsi',
              options: ['will be', 'am', 'shall be', 'was'],
              answer: 'shall be',
            },
            {
              q: '"___ she be called?" — sual',
              options: ['Shall', 'Is', 'Was', 'Will'],
              answer: 'Will',
            },
            {
              q: '"will be built" — Azərbaycanca?',
              options: ['tikilir', 'tikildi', 'tikilmişdir', 'tikilecək'],
              answer: 'tikilecək',
            },
            {
              q: 'Future Indefinite Passive düzəlmə qaydası?',
              options: ['was/were + P II', 'am/is/are + P II', 'shall be/will be + P II', 'have been + P II'],
              answer: 'shall be/will be + P II',
            },
          ],
        },
      ],
    },

    // ── index: 5 — Mini-quiz 1 ────────────────────────────────
    [
      { en: '"I ___ invited." — Present Passive',          tr: 'am',       wrong: 'is'       },
      { en: '"She ___ called." — Present Passive',         tr: 'is',       wrong: 'are'      },
      { en: '"They ___ told." — Past Passive',             tr: 'were',     wrong: 'was'      },
      { en: '"He ___ invited." — Past Passive',            tr: 'was',      wrong: 'were'     },
      { en: '"It ___ sent tomorrow." — Future Passive',    tr: 'will be',  wrong: 'shall be' },
      { en: '"We ___ invited." — Future Passive',          tr: 'shall be', wrong: 'will be'  },
      { en: '"is invited" — Azərbaycanca?',                tr: 'dəvət edilir',   wrong: 'dəvət edildi'    },
      { en: '"was written" — Azərbaycanca?',               tr: 'yazıldı',        wrong: 'yazılır'         },
      { en: '"will be built" — Azərbaycanca?',             tr: 'tikilecək',      wrong: 'tikilir'         },
      { en: '"___ English spoken here?" — Present',        tr: 'Is',       wrong: 'Was'      },
      { en: '"___ the letter sent?" — Past',               tr: 'Was',      wrong: 'Is'       },
      { en: '"___ the work be done?" — Future',            tr: 'Will',     wrong: 'Was'      },
      { en: 'Present Passive düzəlmə?',                    tr: 'am/is/are + P II',      wrong: 'was/were + P II'      },
      { en: 'Past Passive düzəlmə?',                       tr: 'was/were + P II',        wrong: 'am/is/are + P II'     },
      { en: 'Future Passive düzəlmə?',                     tr: 'shall be/will be + P II', wrong: 'have/has been + P II' },
    ],

    // ── index: 6 — Bölmə 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 2 — Present / Past Perfect Passive',
    },

    // ── index: 7 — Dərs 2.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.1 — Present Perfect Passive',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Present Perfect Passive necə düzəlir?',
          content: 'Düzəlmə: have been / has been + P II',
          table: [
            ['Şəxs',      'Təsdiq'],
            ['I',         'I have been invited'],
            ['You',       'You have been invited'],
            ['He / She',  'He has been invited'],
            ['We',        'We have been invited'],
            ['They',      'They have been invited'],
          ],
          tip: 'have been → I, You, We, They\nhas been → He, She, It',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Sual və inkar forması',
          content: 'Sual: have/has mübtədadan əvvələ keçir.\nİnkar: have/has + not əlavə edilir.',
          table: [
            ['Sual',                        'İnkar'],
            ['Have I been invited?',        'I have not been invited'],
            ['Have you been invited?',      'You haven\'t been invited'],
            ['Has he been invited?',        'He has not been invited'],
            ['Have they been invited?',     'They haven\'t been invited'],
          ],
          note: 'Azərbaycana tərcümə:\nhas been invited → dəvət edilmişdir\nhave been written → yazılmışlar',
        },

        // Ekran 3
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Present Perfect Passive cümlələri:',
          examples: [
            { word: 'The letter has been written.',      az: 'Məktub yazılmışdır.' },
            { word: 'I have been invited to the party.', az: 'Mən ziyafətə dəvət edilmişəm.' },
            { word: 'The books have been sold.',         az: 'Kitablar satılmışdır.' },
            { word: 'Has the work been done?',           az: 'İş görülmüşdürmü?' },
          ],
        },

        // Quiz
        { en: '"I ___ invited." — Present Perfect Passive',     tr: 'have been', wrong: 'has been'  },
        { en: '"She ___ invited." — Present Perfect Passive',   tr: 'has been',  wrong: 'have been' },
        { en: '"They ___ told." — Present Perfect Passive',     tr: 'have been', wrong: 'has been'  },
        { en: '"___ he invited?" — Present Perfect Passive',    tr: 'Has',       wrong: 'Have'      },
        { en: '"___ they told?" — Present Perfect Passive',     tr: 'Have',      wrong: 'Has'       },
        { en: '"has been written" — Azərbaycanca?',             tr: 'yazılmışdır',  wrong: 'yazılmışdı'   },
        { en: '"have been sold" — Azərbaycanca?',               tr: 'satılmışlar',  wrong: 'satılırdılar' },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter ___ written." — Present Perfect Passive',
              options: ['have been', 'was', 'is', 'has been'],
              answer: 'has been',
            },
            {
              q: '"They ___ invited." — Present Perfect Passive',
              options: ['has been', 'was', 'were', 'have been'],
              answer: 'have been',
            },
            {
              q: '"___ the book published?" — Present Perfect Passive',
              options: ['Were', 'Was', 'Have', 'Has'],
              answer: 'Has',
            },
            {
              q: '"has been invited" — Azərbaycanca?',
              options: ['dəvət edildi', 'dəvət edilir', 'dəvət edilmişdir', 'dəvət edilmişdi'],
              answer: 'dəvət edilmişdir',
            },
            {
              q: 'Present Perfect Passive düzəlmə qaydası?',
              options: ['was/were + P II', 'had been + P II', 'have been/has been + P II', 'will be + P II'],
              answer: 'have been/has been + P II',
            },
          ],
        },
      ],
    },

    // ── index: 8 — Dərs 2.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.2 — Past Perfect Passive',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Past Perfect Passive necə düzəlir?',
          content: 'Düzəlmə: had been + P II\nBütün şəxslərdə "had been" işlənir.',
          table: [
            ['Şəxs',      'Təsdiq'],
            ['I',         'I had been invited'],
            ['You',       'You had been invited'],
            ['He / She',  'He had been invited'],
            ['We',        'We had been invited'],
            ['They',      'They had been invited'],
          ],
          tip: 'had been → bütün şəxslərdə eynidir',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Sual və inkar forması',
          content: 'Sual: had mübtədadan əvvələ keçir.\nİnkar: had + not əlavə edilir.',
          table: [
            ['Sual',                       'İnkar'],
            ['Had I been invited?',        'I had not been invited'],
            ['Had you been invited?',      'You hadn\'t been invited'],
            ['Had he been invited?',       'He had not been invited'],
            ['Had they been invited?',     'They hadn\'t been invited'],
          ],
          note: 'Azərbaycana tərcümə:\nhad been invited → dəvət edilmişdi\nhad been written → yazılmışdı',
        },

        // Ekran 3
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Past Perfect Passive cümlələri:',
          examples: [
            { word: 'The letter had been written before he came.',  az: 'O gəlməmişdən əvvəl məktub yazılmışdı.' },
            { word: 'I had been invited before the event.',         az: 'Hadisədən əvvəl dəvət edilmişdim.' },
            { word: 'The work had been done by that time.',         az: 'O vaxta qədər iş görülmüşdü.' },
            { word: 'Had the letter been sent?',                    az: 'Məktub göndərilmişdimi?' },
          ],
        },

        // Quiz
        { en: '"I ___ invited." — Past Perfect Passive',     tr: 'had been', wrong: 'have been'  },
        { en: '"She ___ told." — Past Perfect Passive',      tr: 'had been', wrong: 'has been'   },
        { en: '"___ he invited?" — Past Perfect Passive',    tr: 'Had',      wrong: 'Have'       },
        { en: '"had been written" — Azərbaycanca?',          tr: 'yazılmışdı',    wrong: 'yazılmışdır'  },
        { en: '"had been invited" — Azərbaycanca?',          tr: 'dəvət edilmişdi', wrong: 'dəvət edilmişdir' },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter ___ written before he came."',
              options: ['has been', 'have been', 'was', 'had been'],
              answer: 'had been',
            },
            {
              q: '"___ the work done?" — Past Perfect Passive',
              options: ['Has', 'Have', 'Was', 'Had'],
              answer: 'Had',
            },
            {
              q: '"had been sent" — Azərbaycanca?',
              options: ['göndərilir', 'göndərildi', 'göndərilmişdi', 'göndərilmişdir'],
              answer: 'göndərilmişdi',
            },
            {
              q: 'Past Perfect Passive düzəlmə qaydası?',
              options: ['have been + P II', 'was/were + P II', 'will be + P II', 'had been + P II'],
              answer: 'had been + P II',
            },
            {
              q: 'Past Perfect Passive-də bütün şəxslərdə hansı forma işlənir?',
              options: ['have been', 'has been', 'had been', 'will be'],
              answer: 'had been',
            },
          ],
        },
      ],
    },

    // ── index: 9 — Mini-quiz 2 ────────────────────────────────
    [
      { en: '"I ___ invited." — Present Perfect Passive',       tr: 'have been', wrong: 'has been'  },
      { en: '"She ___ invited." — Present Perfect Passive',     tr: 'has been',  wrong: 'have been' },
      { en: '"They ___ told." — Past Perfect Passive',          tr: 'had been',  wrong: 'have been' },
      { en: '"He ___ invited." — Past Perfect Passive',         tr: 'had been',  wrong: 'has been'  },
      { en: '"___ he invited?" — Present Perfect Passive',      tr: 'Has',       wrong: 'Had'       },
      { en: '"___ they told?" — Past Perfect Passive',          tr: 'Had',       wrong: 'Have'      },
      { en: '"has been written" — Azərbaycanca?',               tr: 'yazılmışdır',   wrong: 'yazılmışdı'    },
      { en: '"had been written" — Azərbaycanca?',               tr: 'yazılmışdı',    wrong: 'yazılmışdır'   },
      { en: '"have been sold" — Azərbaycanca?',                 tr: 'satılmışlar',   wrong: 'satılmışdılar' },
      { en: 'Present Perfect Passive düzəlmə?',                 tr: 'have been/has been + P II', wrong: 'had been + P II'         },
      { en: 'Past Perfect Passive düzəlmə?',                    tr: 'had been + P II',           wrong: 'have been/has been + P II'},
    ],

    // ── index: 10 — Bölmə 3 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 3 — Modal fellərin məchul növü',
    },

    // ── index: 11 — Dərs 3.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.1 — Modal + be + P II',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Modal fellərin məchul növü necə düzəlir?',
          content: 'Düzəlmə: Modal fel + be + P II\n\nModal feldən sonra məsdər "to"-suz işlənir.',
          table: [
            ['Modal fel',  'Məchul növ',         'Mənası'],
            ['must',       'must be done',       'görülməlidir'],
            ['can',        'can be written',     'yazıla bilər'],
            ['should',     'should be finished', 'bitirilməlidir'],
            ['may',        'may be sent',        'göndərilə bilər'],
            ['could',      'could be seen',      'görülə bilərdi'],
          ],
          tip: 'Modal + be + P II\nHeç vaxt "been" işlənmir — yalnız "be"!',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Modal fellərin məchul növü ilə cümlələr:',
          examples: [
            { word: 'The work must be done.',        az: 'İş görülməlidir.' },
            { word: 'The letter can be written.',    az: 'Məktub yazıla bilər.' },
            { word: 'It should be finished today.',  az: 'Bu gün bitirilməlidir.' },
            { word: 'The door may be opened.',       az: 'Qapı açıla bilər.' },
            { word: 'The problem could be solved.',  az: 'Problem həll edilə bilərdi.' },
          ],
          note: 'İnkar: Modal + not + be + P II\nThe work must not be done.\nThe letter cannot be written.',
        },

        // Quiz
        { en: '"The work ___ be done."',              tr: 'must',   wrong: 'should be' },
        { en: '"The letter ___ be written."',         tr: 'can',    wrong: 'could be'  },
        { en: 'Modal Passive düzəlmə?',               tr: 'modal + be + P II',   wrong: 'modal + been + P II' },
        { en: '"must be done" — Azərbaycanca?',       tr: 'görülməlidir',  wrong: 'görüldü'          },
        { en: '"can be written" — Azərbaycanca?',     tr: 'yazıla bilər',  wrong: 'yazıldı'          },
        { en: '"should be finished" — Azərbaycanca?', tr: 'bitirilməlidir', wrong: 'bitirildi'       },
        { en: '"The door ___ not be opened."',        tr: 'must',   wrong: 'is'        },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: 'Modal Passive düzəlmə qaydası?',
              options: ['modal + been + P II', 'modal + be + P II', 'modal + is + P II', 'modal + was + P II'],
              answer: 'modal + be + P II',
            },
            {
              q: '"The work ___ be done." — vaciblik',
              options: ['can', 'may', 'must', 'could'],
              answer: 'must',
            },
            {
              q: '"must be done" — Azərbaycanca?',
              options: ['görüldü', 'görülürdü', 'görülməlidir', 'görülə bilər'],
              answer: 'görülməlidir',
            },
            {
              q: '"can be written" — Azərbaycanca?',
              options: ['yazıldı', 'yazılır', 'yazıla bilər', 'yazılmalıdır'],
              answer: 'yazıla bilər',
            },
            {
              q: 'Hansı forma YANLIŞ-dır?',
              options: ['must be done', 'can be written', 'should be finished', 'could been seen'],
              answer: 'could been seen',
            },
          ],
        },
      ],
    },

    // ── index: 12 — Mini-quiz 3 ───────────────────────────────
    [
      { en: '"The work ___ be done." — vaciblik',         tr: 'must',   wrong: 'can'       },
      { en: '"The letter ___ be written." — imkan',       tr: 'can',    wrong: 'must'      },
      { en: '"It ___ be finished today." — lazımdır',     tr: 'should', wrong: 'could'     },
      { en: '"must be done" — Azərbaycanca?',             tr: 'görülməlidir', wrong: 'görüldü'    },
      { en: '"can be written" — Azərbaycanca?',           tr: 'yazıla bilər', wrong: 'yazılmalıdır' },
      { en: 'Modal Passive düzəlmə?',                     tr: 'modal + be + P II', wrong: 'modal + been + P II' },
      { en: '"could been seen" — düzdür?',                tr: 'Xeyr',   wrong: 'Bəli'      },
      { en: '"must be done" — inkarı?',                   tr: 'must not be done', wrong: 'must be not done' },
    ],

    // ── index: 13 — Test 1 ────────────────────────────────────
    [
      { en: '"I ___ invited." — Present Passive',          tr: 'am',        wrong: 'is'          },
      { en: '"She ___ called." — Present Passive',         tr: 'is',        wrong: 'are'         },
      { en: '"They ___ told." — Past Passive',             tr: 'were',      wrong: 'was'         },
      { en: '"He ___ invited." — Past Passive',            tr: 'was',       wrong: 'were'        },
      { en: '"It ___ sent tomorrow." — Future Passive',    tr: 'will be',   wrong: 'shall be'    },
      { en: '"We ___ invited." — Future Passive',          tr: 'shall be',  wrong: 'will be'     },
      { en: '"She ___ invited." — Present Perfect Passive',tr: 'has been',  wrong: 'have been'   },
      { en: '"They ___ told." — Past Perfect Passive',     tr: 'had been',  wrong: 'have been'   },
      { en: '"must be done" — Azərbaycanca?',              tr: 'görülməlidir',   wrong: 'görüldü'       },
      { en: '"was written" — Azərbaycanca?',               tr: 'yazıldı',        wrong: 'yazılır'       },
      { en: '"will be built" — Azərbaycanca?',             tr: 'tikilecək',      wrong: 'tikilir'       },
      { en: '"has been invited" — Azərbaycanca?',          tr: 'dəvət edilmişdir', wrong: 'dəvət edilmişdi' },
      { en: '"had been written" — Azərbaycanca?',          tr: 'yazılmışdı',     wrong: 'yazılmışdır'   },
      { en: 'Present Passive düzəlmə?',                    tr: 'am/is/are + P II',         wrong: 'was/were + P II'          },
      { en: 'Past Passive düzəlmə?',                       tr: 'was/were + P II',           wrong: 'am/is/are + P II'         },
      { en: 'Future Passive düzəlmə?',                     tr: 'shall be/will be + P II',   wrong: 'have been + P II'         },
      { en: 'Present Perfect Passive düzəlmə?',            tr: 'have been/has been + P II', wrong: 'had been + P II'          },
      { en: 'Past Perfect Passive düzəlmə?',               tr: 'had been + P II',           wrong: 'have been/has been + P II'},
      { en: 'Modal Passive düzəlmə?',                      tr: 'modal + be + P II',         wrong: 'modal + been + P II'      },
      { en: '"could been seen" — düzdür?',                 tr: 'Xeyr',      wrong: 'Bəli'        },
    ],

    // ── index: 14 — Qrup 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 2 — Məlum cümləni məchul cümləyə çevirmə',
    },

    // ── index: 15 — Bölmə 4 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 4 — Çevirmənin əsas qaydaları',
    },

    // ── index: 16 — Dərs 4.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.1 — Əsas çevirmə qaydası',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Məlum cümləni məchul cümləyə çevirmə',
          content: 'Çevirmənin 4 addımı:',
          table: [
            ['Addım', 'İzah'],
            ['1',     'Məlum cümlənin tamamlığı → məchul cümlənin mübtədası olur'],
            ['2',     'to be-nin müvafiq zaman forması qoyulur'],
            ['3',     'Əsas fel P II-də qoyulur'],
            ['4',     'İcraçı: by + isim cümlənin sonunda (istəyə görə)'],
          ],
          tip: 'Məlum: I write a letter.\nMəchul: A letter is written (by me).',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Zaman formasına görə çevirmə',
          content: 'Məlum cümlə hansı zamandaysa məchul cümlə də o zamanda olur:',
          table: [
            ['Məlum zaman',     'Məchul forma'],
            ['Simple Present',  'am/is/are + P II'],
            ['Simple Past',     'was/were + P II'],
            ['Simple Future',   'will be/shall be + P II'],
            ['Present Perfect', 'have been/has been + P II'],
            ['Past Perfect',    'had been + P II'],
          ],
          examples: [
            { word: 'She writes a letter. → A letter is written by her.',       az: 'Məktub onun tərəfindən yazılır.' },
            { word: 'She wrote a letter. → A letter was written by her.',       az: 'Məktub onun tərəfindən yazıldı.' },
            { word: 'She will write a letter. → A letter will be written.',     az: 'Məktub yazılacaq.' },
          ],
        },

        // Ekran 3
        {
          type: 'lesson',
          title: '"by" sözönü — icraçını bildirmək',
          content: '"by" sözönü işin icraçısını bildirir və cümlənin sonunda gəlir.',
          examples: [
            { word: 'The book is written by the author.',     az: 'Kitab müəllif tərəfindən yazılır.' },
            { word: 'The letter was sent by her.',            az: 'Məktub onun tərəfindən göndərildi.' },
            { word: 'The work will be done by the team.',     az: 'İş komanda tərəfindən görüləcək.' },
          ],
          note: '"by" + isim → tərəfindən\nİcraçı məlum deyilsə "by" işlənmir.',
        },

        // Quiz
        { en: '"I write a letter." → məchul mübtəda?',      tr: 'A letter',  wrong: 'I'          },
        { en: '"She sent the book." → məchul mübtəda?',     tr: 'The book',  wrong: 'She'        },
        { en: 'İcraçını bildirən sözönü?',                  tr: 'by',        wrong: 'with'       },
        { en: '"by her" — Azərbaycanca?',                   tr: 'onun tərəfindən', wrong: 'onunla' },
        { en: '"I write" → Passive Present?',               tr: 'is written',  wrong: 'was written' },
        { en: '"She wrote" → Passive Past?',                tr: 'was written', wrong: 'is written'  },
        { en: '"He will send" → Passive Future?',           tr: 'will be sent', wrong: 'is sent'    },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"I write a letter." → məchul cümlənin mübtədası?',
              options: ['I', 'write', 'A letter', 'by me'],
              answer: 'A letter',
            },
            {
              q: '"She wrote the letter." → Passive Past forması?',
              options: ['The letter is written.', 'The letter was written.', 'The letter will be written.', 'The letter has been written.'],
              answer: 'The letter was written.',
            },
            {
              q: 'İcraçını bildirən sözönü?',
              options: ['with', 'for', 'by', 'to'],
              answer: 'by',
            },
            {
              q: '"The book is written by the author." — "by" nə bildirir?',
              options: ['vasitəni', 'icraçını', 'zamanı', 'yeri'],
              answer: 'icraçını',
            },
            {
              q: '"He will send the letter." → Passive?',
              options: ['The letter is sent.', 'The letter was sent.', 'The letter will be sent.', 'The letter has been sent.'],
              answer: 'The letter will be sent.',
            },
          ],
        },
      ],
    },

    // ── index: 17 — Dərs 4.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.2 — Əvəzlik dəyişməsi',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Məchul cümlədə əvəzlik dəyişməsi',
          content: 'Məlum cümlənin tamamlığı obyekt əvəzlikdirsə, məchul cümlədə mübtəda olarkən şəxs əvəzliyinə çevrilir.',
          table: [
            ['Obyekt hal', 'Adlıq hal'],
            ['me',         'I'],
            ['you',        'you'],
            ['him',        'he'],
            ['her',        'she'],
            ['it',         'it'],
            ['us',         'we'],
            ['them',       'they'],
          ],
          tip: 'Məlum mübtəda "by" ilə verilərkən şəxs əvəzliyi obyekt hala keçir:\nI → by me · he → by him · she → by her',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Əvəzlik dəyişməsi ilə çevirmə:',
          examples: [
            { word: 'I do my homework. → My homework is done by me.',           az: 'Ev tapşırığım mənim tərəfimdən edilir.' },
            { word: 'She sent him a letter. → He was sent a letter by her.',    az: 'Ona onun tərəfindən məktub göndərildi.' },
            { word: 'They invited us. → We were invited by them.',              az: 'Biz onlar tərəfindən dəvət edildik.' },
            { word: 'He saw her. → She was seen by him.',                       az: 'O, onun tərəfindən görüldü.' },
          ],
          note: 'Məlum: They invited us.\nMəchul: We were invited by them.\nthey → them (by ilə), us → we (mübtəda)',
        },

        // Quiz
        { en: 'Məchul mübtəda: "him" → ?',        tr: 'he',   wrong: 'him'  },
        { en: 'Məchul mübtəda: "her" → ?',        tr: 'she',  wrong: 'her'  },
        { en: 'Məchul mübtəda: "them" → ?',       tr: 'they', wrong: 'them' },
        { en: 'Məchul mübtəda: "us" → ?',         tr: 'we',   wrong: 'us'   },
        { en: 'Məchul mübtəda: "me" → ?',         tr: 'I',    wrong: 'me'   },
        { en: '"by" ilə: "I" → ?',                tr: 'by me',   wrong: 'by I'   },
        { en: '"by" ilə: "she" → ?',              tr: 'by her',  wrong: 'by she' },
        { en: '"by" ilə: "they" → ?',             tr: 'by them', wrong: 'by they'},

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"They invited us." → Passive? Mübtəda?',
              options: ['They', 'Us', 'Them', 'We'],
              answer: 'We',
            },
            {
              q: '"She saw him." → "him" məchul cümlədə?',
              options: ['him', 'his', 'he', 'her'],
              answer: 'he',
            },
            {
              q: '"I wrote it." → Passive-də "I" necə olur?',
              options: ['I', 'me', 'my', 'mine'],
              answer: 'me',
            },
            {
              q: '"They invited us." → Passive: "___ were invited by them."',
              options: ['Us', 'Our', 'We', 'Them'],
              answer: 'We',
            },
            {
              q: '"He saw her." → Passive?',
              options: ['Her was seen by him.', 'She was seen by him.', 'She was seen by he.', 'Her was seen by he.'],
              answer: 'She was seen by him.',
            },
          ],
        },
      ],
    },

    // ── index: 18 — Mini-quiz 4 ───────────────────────────────
    [
      { en: '"I write a letter." → məchul mübtəda?',        tr: 'A letter',   wrong: 'I'           },
      { en: '"She sent the book." → məchul mübtəda?',       tr: 'The book',   wrong: 'She'         },
      { en: 'İcraçını bildirən sözönü?',                    tr: 'by',         wrong: 'with'        },
      { en: '"They invited us." → Passive mübtədası?',      tr: 'We',         wrong: 'They'        },
      { en: '"She saw him." → "him" məchul mübtəda?',       tr: 'he',         wrong: 'him'         },
      { en: '"I wrote it." → "I" by ilə?',                  tr: 'by me',      wrong: 'by I'        },
      { en: '"He will send the letter." → Passive?',        tr: 'The letter will be sent.', wrong: 'The letter is sent.'  },
      { en: '"She wrote the letter." → Passive?',           tr: 'The letter was written.', wrong: 'The letter is written.' },
      { en: '"by her" — Azərbaycanca?',                     tr: 'onun tərəfindən', wrong: 'onunla'  },
      { en: '"They saw us." → Passive?',                    tr: 'We were seen by them.', wrong: 'Us were seen by them.' },
    ],

    // ── index: 19 — Bölmə 5 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 5 — Canlı / cansız tamamlıq qaydaları',
    },

    // ── index: 20 — Dərs 5.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.1 — Canlı + cansız tamamlıq',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Canlı və cansız tamamlıq',
          content: 'Məlum cümlədə həm canlı, həm cansız tamamlıq olarsa:\n\nCanlı tamamlıq → məchul cümlənin mübtədası olur.',
          examples: [
            { word: 'I give him a book.',              az: 'Mən ona kitab verirəm.' },
            { word: '→ He is given a book by me.',     az: '→ Ona mənim tərəfimdən kitab verilir.' },
            { word: 'She sent me a letter.',           az: 'O mənə məktub göndərdi.' },
            { word: '→ I was sent a letter by her.',   az: '→ Mənə onun tərəfindən məktub göndərildi.' },
          ],
          tip: 'Canlı tamamlıq həmişə üstünlük alır.\nhim → he (mübtəda), me → I (mübtəda)',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'İki tamamlıq qaydası',
          content: 'İki canlı və ya iki cansız tamamlıq olduqda:\n\nBirinci gələn tamamlıq → məchul cümlənin mübtədası olur.',
          examples: [
            { word: 'I write a letter to my friend.',           az: 'Mən dostuma məktub yazıram.' },
            { word: '→ My friend is written a letter by me.',   az: '→ Dostuma mənim tərəfimdən məktub yazılır.' },
            { word: 'She gave the book to Tom.',                az: 'O kitabı Toma verdi.' },
            { word: '→ Tom was given the book by her.',         az: '→ Toma onun tərəfindən kitab verildi.' },
          ],
          note: 'Zaman məlum cümlə ilə eyni qalır.\nMəlum: Simple Past → Məchul: was/were + P II',
        },

        // Quiz
        { en: '"I give him a book." → canlı tamamlıq?',        tr: 'him',      wrong: 'a book'    },
        { en: '"I give him a book." → məchul mübtəda?',        tr: 'He',       wrong: 'A book'    },
        { en: '"She sent me a letter." → məchul mübtəda?',     tr: 'I',        wrong: 'A letter'  },
        { en: '"He gave her the money." → məchul mübtəda?',    tr: 'She',      wrong: 'The money' },
        { en: 'Canlı tamamlıq məchul cümlədə nə olur?',       tr: 'mübtəda',  wrong: 'tamamlıq'  },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"I give him a book." → Passive mübtədası?',
              options: ['I', 'A book', 'He', 'Him'],
              answer: 'He',
            },
            {
              q: '"She sent me a letter." → Passive?',
              options: [
                'A letter was sent me by her.',
                'I was sent a letter by her.',
                'Me was sent a letter by her.',
                'A letter was sent by her to I.',
              ],
              answer: 'I was sent a letter by her.',
            },
            {
              q: '"He gave her the money." → Passive mübtədası?',
              options: ['He', 'Her', 'She', 'The money'],
              answer: 'She',
            },
            {
              q: 'Canlı + cansız tamamlıq olduqda məchul mübtəda?',
              options: ['Cansız tamamlıq olur', 'Canlı tamamlıq olur', 'Hər ikisi olur', 'Heç biri olmur'],
              answer: 'Canlı tamamlıq olur',
            },
            {
              q: '"I write a letter to my friend." → Passive mübtədası?',
              options: ['I', 'A letter', 'My friend', 'By me'],
              answer: 'My friend',
            },
          ],
        },
      ],
    },

    // ── index: 21 — Dərs 5.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.2 — İki tamamlıq — əlavə qaydalar',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Bütün zamanlarla çevirmə təcrübəsi',
          content: 'Canlı tamamlıq qaydası bütün zaman formalarında eyni işləyir:',
          table: [
            ['Məlum',                          'Məchul'],
            ['I give him a book.',             'He is given a book.'],
            ['I gave him a book.',             'He was given a book.'],
            ['I will give him a book.',        'He will be given a book.'],
            ['I have given him a book.',       'He has been given a book.'],
            ['I had given him a book.',        'He had been given a book.'],
          ],
          tip: 'Mübtəda həmişə canlı tamamlıqdır.\nZaman forması dəyişir, qayda eyni qalır.',
        },

        // Quiz
        { en: '"I gave him a book." → Passive (Past)?',        tr: 'He was given a book.',       wrong: 'He is given a book.'        },
        { en: '"I give him a book." → Passive (Present)?',     tr: 'He is given a book.',        wrong: 'He was given a book.'       },
        { en: '"I will give him a book." → Passive (Future)?', tr: 'He will be given a book.',   wrong: 'He is given a book.'        },
        { en: '"I have given him a book." → Passive?',         tr: 'He has been given a book.',  wrong: 'He had been given a book.'  },
        { en: '"I had given him a book." → Passive?',          tr: 'He had been given a book.',  wrong: 'He has been given a book.'  },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"I gave him a book." → Passive?',
              options: ['He is given a book.', 'He was given a book.', 'He will be given a book.', 'He has been given a book.'],
              answer: 'He was given a book.',
            },
            {
              q: '"She will send them a letter." → Passive?',
              options: ['They are sent a letter.', 'They were sent a letter.', 'They will be sent a letter.', 'They have been sent a letter.'],
              answer: 'They will be sent a letter.',
            },
            {
              q: '"He has given her the book." → Passive?',
              options: ['She was given the book.', 'She is given the book.', 'She has been given the book.', 'She had been given the book.'],
              answer: 'She has been given the book.',
            },
          ],
        },
      ],
    },

    // ── index: 22 — Mini-quiz 5 ───────────────────────────────
    [
      { en: '"I give him a book." → məchul mübtəda?',           tr: 'He',       wrong: 'A book'    },
      { en: '"She sent me a letter." → məchul mübtəda?',        tr: 'I',        wrong: 'A letter'  },
      { en: '"He gave her the money." → məchul mübtəda?',       tr: 'She',      wrong: 'The money' },
      { en: '"I gave him a book." → Passive (Past)?',           tr: 'He was given a book.',      wrong: 'He is given a book.'       },
      { en: '"I give him a book." → Passive (Present)?',        tr: 'He is given a book.',       wrong: 'He was given a book.'      },
      { en: '"I will give him a book." → Passive?',             tr: 'He will be given a book.',  wrong: 'He is given a book.'       },
      { en: 'Canlı + cansız tamamlıqda məchul mübtəda?',        tr: 'Canlı tamamlıq',  wrong: 'Cansız tamamlıq' },
      { en: '"I write a letter to my friend." → mübtəda?',      tr: 'My friend', wrong: 'A letter'  },
    ],

    // ── index: 23 — Bölmə 6 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 6 — Bütün zaman formalarında çevirmə təcrübəsi',
    },

    // ── index: 24 — Dərs 6.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 6.1 — Zaman formaları ilə çevirmə',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Bütün Passive formaları — xülasə',
          content: 'Bütün zaman formalarının məchul növü bir arada:',
          table: [
            ['Zaman',             'Passive forma',               'Nümunə'],
            ['Simple Present',    'am/is/are + P II',            'is written'],
            ['Simple Past',       'was/were + P II',             'was written'],
            ['Simple Future',     'will be/shall be + P II',     'will be written'],
            ['Present Perfect',   'have been/has been + P II',   'has been written'],
            ['Past Perfect',      'had been + P II',             'had been written'],
            ['Modal',             'modal + be + P II',           'must be written'],
          ],
          tip: 'Hər zaman formasını ayrıca əzbərlə:\nPresent → is/are\nPast → was/were\nFuture → will be',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Çevirmə məşqi',
          content: 'Məlum cümlələrin bütün zamanlarla məchul forması:',
          examples: [
            { word: 'They build houses here. → Houses are built here.',               az: 'Burada evlər tikilir.' },
            { word: 'They built houses. → Houses were built.',                        az: 'Evlər tikildi.' },
            { word: 'They will build houses. → Houses will be built.',                az: 'Evlər tikilecək.' },
            { word: 'They have built houses. → Houses have been built.',              az: 'Evlər tikilmişdir.' },
            { word: 'They had built houses. → Houses had been built.',                az: 'Evlər tikilmişdi.' },
            { word: 'They must build houses. → Houses must be built.',                az: 'Evlər tikilməlidir.' },
          ],
        },

        // Quiz
        { en: '"They write letters." → Passive Present?',      tr: 'Letters are written.',         wrong: 'Letters were written.'         },
        { en: '"They wrote letters." → Passive Past?',         tr: 'Letters were written.',        wrong: 'Letters are written.'          },
        { en: '"They will write." → Passive Future?',          tr: 'It will be written.',          wrong: 'It is written.'                },
        { en: '"They have written." → Passive Present Perf?',  tr: 'It has been written.',         wrong: 'It had been written.'          },
        { en: '"They had written." → Passive Past Perf?',      tr: 'It had been written.',         wrong: 'It has been written.'          },
        { en: '"They must write." → Passive Modal?',           tr: 'It must be written.',          wrong: 'It must been written.'         },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"They build houses." → Passive?',
              options: ['Houses were built.', 'Houses are built.', 'Houses will be built.', 'Houses have been built.'],
              answer: 'Houses are built.',
            },
            {
              q: '"She has written the letter." → Passive?',
              options: ['The letter was written.', 'The letter is written.', 'The letter has been written.', 'The letter had been written.'],
              answer: 'The letter has been written.',
            },
            {
              q: '"They must finish the work." → Passive?',
              options: ['The work must been finished.', 'The work must be finished.', 'The work is must finished.', 'The work be must finished.'],
              answer: 'The work must be finished.',
            },
            {
              q: '"He had sent the letter." → Passive?',
              options: ['The letter was sent.', 'The letter has been sent.', 'The letter had been sent.', 'The letter will be sent.'],
              answer: 'The letter had been sent.',
            },
            {
              q: '"We will invite them." → Passive?',
              options: ['They are invited.', 'They were invited.', 'They will be invited.', 'They have been invited.'],
              answer: 'They will be invited.',
            },
          ],
        },
      ],
    },

    // ── index: 25 — Dərs 6.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 6.2 — Azərbaycana tərcümə',
      cards: [

        // Ekran 1
        {
          type: 'lesson',
          title: 'Passive Voice Azərbaycana necə tərcümə olunur?',
          content: 'Hər zaman formasının Azərbaycan dili qarşılığı:',
          table: [
            ['Passive forma',       'Azərbaycanca',         'Nümunə'],
            ['is/are written',      'yazılır',              'The letter is written.'],
            ['was/were written',    'yazıldı',              'The letter was written.'],
            ['will be written',     'yazılacaq',            'The letter will be written.'],
            ['has been written',    'yazılmışdır',          'The letter has been written.'],
            ['had been written',    'yazılmışdı',           'The letter had been written.'],
            ['must be written',     'yazılmalıdır',         'The letter must be written.'],
            ['can be written',      'yazıla bilər',         'The letter can be written.'],
          ],
          tip: 'Passive formasını azərbaycanca tanımaq:\n-ilir/-ilir → Present\n-ildi → Past\n-ilecək → Future\n-ilmişdir → Present Perfect\n-ilmişdi → Past Perfect',
        },

        // Ekran 2
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Passive cümlələrin Azərbaycana tərcüməsi:',
          examples: [
            { word: 'English is spoken here.',            az: 'Burada ingilis dilində danışılır.' },
            { word: 'The letter was sent yesterday.',     az: 'Məktub dünən göndərildi.' },
            { word: 'The work will be done tomorrow.',    az: 'İş sabah görüləcək.' },
            { word: 'The book has been published.',       az: 'Kitab çap edilmişdir.' },
            { word: 'The letter had been written.',       az: 'Məktub yazılmışdı.' },
            { word: 'The work must be finished.',         az: 'İş bitirilməlidir.' },
          ],
        },

        // Quiz
        { en: '"is written" — Azərbaycanca?',          tr: 'yazılır',       wrong: 'yazıldı'       },
        { en: '"was written" — Azərbaycanca?',         tr: 'yazıldı',       wrong: 'yazılır'       },
        { en: '"will be written" — Azərbaycanca?',     tr: 'yazılacaq',     wrong: 'yazıldı'       },
        { en: '"has been written" — Azərbaycanca?',    tr: 'yazılmışdır',   wrong: 'yazılmışdı'    },
        { en: '"had been written" — Azərbaycanca?',    tr: 'yazılmışdı',    wrong: 'yazılmışdır'   },
        { en: '"must be written" — Azərbaycanca?',     tr: 'yazılmalıdır',  wrong: 'yazıla bilər'  },
        { en: '"can be written" — Azərbaycanca?',      tr: 'yazıla bilər',  wrong: 'yazılmalıdır'  },

        // Mini-check
        {
          type: 'mini_check',
          questions: [
            {
              q: '"The letter is written." — Azərbaycanca?',
              options: ['Məktub yazıldı.', 'Məktub yazılır.', 'Məktub yazılacaq.', 'Məktub yazılmışdır.'],
              answer: 'Məktub yazılır.',
            },
            {
              q: '"The work was done." — Azərbaycanca?',
              options: ['İş görülür.', 'İş görüləcək.', 'İş görüldü.', 'İş görülmüşdür.'],
              answer: 'İş görüldü.',
            },
            {
              q: '"The book has been published." — Azərbaycanca?',
              options: ['Kitab çap edildi.', 'Kitab çap edilir.', 'Kitab çap edilmişdir.', 'Kitab çap edilmişdi.'],
              answer: 'Kitab çap edilmişdir.',
            },
            {
              q: '"The letter had been sent." — Azərbaycanca?',
              options: ['Məktub göndərildi.', 'Məktub göndərilir.', 'Məktub göndərilmişdi.', 'Məktub göndərilmişdir.'],
              answer: 'Məktub göndərilmişdi.',
            },
            {
              q: '"The work must be finished." — Azərbaycanca?',
              options: ['İş bitiriləcək.', 'İş bitirildi.', 'İş bitirilə bilər.', 'İş bitirilməlidir.'],
              answer: 'İş bitirilməlidir.',
            },
          ],
        },
      ],
    },

    // ── index: 26 — Mini-quiz 6 ───────────────────────────────
    [
      { en: '"They write letters." → Passive?',              tr: 'Letters are written.',       wrong: 'Letters were written.'      },
      { en: '"They wrote letters." → Passive?',             tr: 'Letters were written.',      wrong: 'Letters are written.'       },
      { en: '"They will write it." → Passive?',             tr: 'It will be written.',        wrong: 'It is written.'             },
      { en: '"She has written it." → Passive?',             tr: 'It has been written.',       wrong: 'It had been written.'       },
      { en: '"He had written it." → Passive?',              tr: 'It had been written.',       wrong: 'It has been written.'       },
      { en: '"They must write it." → Passive?',             tr: 'It must be written.',        wrong: 'It must been written.'      },
      { en: '"is written" — Azərbaycanca?',                 tr: 'yazılır',     wrong: 'yazıldı'      },
      { en: '"was written" — Azərbaycanca?',                tr: 'yazıldı',     wrong: 'yazılır'      },
      { en: '"will be written" — Azərbaycanca?',            tr: 'yazılacaq',   wrong: 'yazıldı'      },
      { en: '"has been written" — Azərbaycanca?',           tr: 'yazılmışdır', wrong: 'yazılmışdı'   },
      { en: '"had been written" — Azərbaycanca?',           tr: 'yazılmışdı',  wrong: 'yazılmışdır'  },
      { en: '"must be written" — Azərbaycanca?',            tr: 'yazılmalıdır', wrong: 'yazıla bilər' },
    ],

    // ── index: 27 — Test 2 ────────────────────────────────────
    [
      { en: '"I write a letter." → məchul mübtəda?',              tr: 'A letter',    wrong: 'I'           },
      { en: '"She sent him a book." → məchul mübtəda?',           tr: 'He',          wrong: 'A book'      },
      { en: '"They invited us." → Passive mübtədası?',            tr: 'We',          wrong: 'They'        },
      { en: '"He saw her." → Passive?',                           tr: 'She was seen by him.',    wrong: 'Her was seen by him.'   },
      { en: '"I gave him a book." → Passive (Past)?',             tr: 'He was given a book.',    wrong: 'He is given a book.'    },
      { en: '"She will send them a letter." → Passive?',          tr: 'They will be sent a letter.', wrong: 'They are sent a letter.' },
      { en: '"He has given her the book." → Passive?',            tr: 'She has been given the book.', wrong: 'She was given the book.' },
      { en: '"They build houses." → Passive?',                    tr: 'Houses are built.',       wrong: 'Houses were built.'     },
      { en: '"She has written the letter." → Passive?',           tr: 'The letter has been written.', wrong: 'The letter was written.' },
      { en: '"They must finish the work." → Passive?',            tr: 'The work must be finished.',   wrong: 'The work must been finished.' },
      { en: '"is written" — Azərbaycanca?',                       tr: 'yazılır',       wrong: 'yazıldı'       },
      { en: '"was written" — Azərbaycanca?',                      tr: 'yazıldı',       wrong: 'yazılır'       },
      { en: '"will be written" — Azərbaycanca?',                  tr: 'yazılacaq',     wrong: 'yazıldı'       },
      { en: '"has been written" — Azərbaycanca?',                 tr: 'yazılmışdır',   wrong: 'yazılmışdı'    },
      { en: '"had been written" — Azərbaycanca?',                 tr: 'yazılmışdı',    wrong: 'yazılmışdır'   },
      { en: '"by her" — Azərbaycanca?',                           tr: 'onun tərəfindən', wrong: 'onunla'      },
      { en: 'Canlı + cansız tamamlıqda məchul mübtəda?',          tr: 'Canlı tamamlıq',  wrong: 'Cansız tamamlıq' },
      { en: '"He had sent the letter." → Passive?',               tr: 'The letter had been sent.', wrong: 'The letter has been sent.' },
    ],

    // ── index: 28 — Final Test ────────────────────────────────
    [
      { en: 'Present Passive düzəlmə?',                           tr: 'am/is/are + P II',           wrong: 'was/were + P II'            },
      { en: 'Past Passive düzəlmə?',                              tr: 'was/were + P II',             wrong: 'am/is/are + P II'           },
      { en: 'Future Passive düzəlmə?',                            tr: 'shall be/will be + P II',     wrong: 'have been + P II'           },
      { en: 'Present Perfect Passive düzəlmə?',                   tr: 'have been/has been + P II',   wrong: 'had been + P II'            },
      { en: 'Past Perfect Passive düzəlmə?',                      tr: 'had been + P II',             wrong: 'have been/has been + P II'  },
      { en: 'Modal Passive düzəlmə?',                             tr: 'modal + be + P II',           wrong: 'modal + been + P II'        },
      { en: '"I ___ invited." — Present Passive',                 tr: 'am',        wrong: 'is'          },
      { en: '"She ___ invited." — Present Passive',               tr: 'is',        wrong: 'are'         },
      { en: '"They ___ told." — Past Passive',                    tr: 'were',      wrong: 'was'         },
      { en: '"He ___ invited." — Past Passive',                   tr: 'was',       wrong: 'were'        },
      { en: '"It ___ sent tomorrow." — Future Passive',           tr: 'will be',   wrong: 'shall be'    },
      { en: '"We ___ invited." — Future Passive',                 tr: 'shall be',  wrong: 'will be'     },
      { en: '"She ___ invited." — Present Perfect Passive',       tr: 'has been',  wrong: 'have been'   },
      { en: '"They ___ told." — Past Perfect Passive',            tr: 'had been',  wrong: 'have been'   },
      { en: '"is written" — Azərbaycanca?',                       tr: 'yazılır',       wrong: 'yazıldı'       },
      { en: '"was written" — Azərbaycanca?',                      tr: 'yazıldı',       wrong: 'yazılır'       },
      { en: '"will be written" — Azərbaycanca?',                  tr: 'yazılacaq',     wrong: 'yazıldı'       },
      { en: '"has been written" — Azərbaycanca?',                 tr: 'yazılmışdır',   wrong: 'yazılmışdı'    },
      { en: '"had been written" — Azərbaycanca?',                 tr: 'yazılmışdı',    wrong: 'yazılmışdır'   },
      { en: '"must be written" — Azərbaycanca?',                  tr: 'yazılmalıdır',  wrong: 'yazıla bilər'  },
      { en: '"can be written" — Azərbaycanca?',                   tr: 'yazıla bilər',  wrong: 'yazılmalıdır'  },
      { en: '"I write a letter." → məchul mübtəda?',              tr: 'A letter',    wrong: 'I'           },
      { en: '"She sent him a book." → məchul mübtəda?',           tr: 'He',          wrong: 'A book'      },
      { en: '"They invited us." → Passive mübtədası?',            tr: 'We',          wrong: 'They'        },
      { en: '"He saw her." → Passive?',                           tr: 'She was seen by him.',   wrong: 'Her was seen by him.'  },
      { en: 'Məchul mübtəda: "him" → ?',                         tr: 'he',    wrong: 'him'  },
      { en: 'Məchul mübtəda: "them" → ?',                        tr: 'they',  wrong: 'them' },
      { en: '"by" ilə: "she" → ?',                               tr: 'by her',  wrong: 'by she' },
      { en: '"They build houses." → Passive?',                    tr: 'Houses are built.',          wrong: 'Houses were built.'         },
      { en: '"She has written the letter." → Passive?',           tr: 'The letter has been written.', wrong: 'The letter was written.'  },
      { en: '"He had sent the letter." → Passive?',               tr: 'The letter had been sent.',  wrong: 'The letter has been sent.'  },
      { en: '"They must finish the work." → Passive?',            tr: 'The work must be finished.', wrong: 'The work must been finished.' },
      { en: '"could been seen" — düzdür?',                        tr: 'Xeyr',  wrong: 'Bəli'  },
      { en: 'Canlı + cansız tamamlıqda məchul mübtəda?',          tr: 'Canlı tamamlıq', wrong: 'Cansız tamamlıq' },
      { en: '"I gave him a book." → Passive (Past)?',             tr: 'He was given a book.',    wrong: 'He is given a book.'    },
      { en: '"She will send them a letter." → Passive?',          tr: 'They will be sent a letter.', wrong: 'They are sent a letter.' },
      { en: '"İcraçını bildirən sözönü?',                         tr: 'by',    wrong: 'with'  },
      { en: '"by her" — Azərbaycanca?',                           tr: 'onun tərəfindən', wrong: 'onunla' },
    ],

  ],
};

const INDIRECT_SPEECH_LEVEL = {
  id: 'indirect_speech',
  name: 'DIRECT & INDIRECT SPEECH',
  icon: '<i class="ti ti-message-2"></i>',
  color: '#6EE7B7',

// ============================================================
//  WORDPATH — DIRECT & INDIRECT SPEECH (TAM DƏRS KARTLARI)
//  Bu fayldakı quizzes massivini köhnə INDIRECT_SPEECH_LEVEL
//  içindəki boş quizzes massivi ilə əvəz et.
//
//  Struktur (26 index):
//  0       — Qrup 1 bölücüsü
//  1       — Bölmə 1 bölücüsü
//  2       — Dərs 1.1
//  3       — Dərs 1.2
//  4       — Dərs 1.3
//  5       — Mini-quiz 1
//  6       — Bölmə 2 bölücüsü
//  7       — Dərs 2.1
//  8       — Dərs 2.2
//  9       — Mini-quiz 2
//  10      — Test 1
//  11      — Qrup 2 bölücüsü
//  12      — Bölmə 3 bölücüsü
//  13      — Dərs 3.1
//  14      — Dərs 3.2
//  15      — Mini-quiz 3
//  16      — Bölmə 4 bölücüsü
//  17      — Dərs 4.1
//  18      — Dərs 4.2
//  19      — Mini-quiz 4
//  20      — Bölmə 5 bölücüsü
//  21      — Dərs 5.1
//  22      — Dərs 5.2
//  23      — Mini-quiz 5
//  24      — Test 2
//  25      — Final Test
// ============================================================

  // ============================================================
//  INDIRECT SPEECH — TAM DƏRS KARTLARI (v2)
//  köhnə quizzes massivini bu ilə əvəz et
// ============================================================

  quizzes: [

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 1 — Vasitəsiz nitqdən vasitəli nitqə çevirmə    ║
    // ══════════════════════════════════════════════════════════

    // ── index: 0 ─ Qrup 1 bölücüsü ───────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 1 — Vasitəsiz nitqdən vasitəli nitqə çevirmə',
    },

    // ── index: 1 ─ Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 1 — Əsas qaydalar: nəqli cümlənin çevrilməsi',
    },

    // ── index: 2 ─ Dərs 1.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.1 — Giriş + əsas dəyişikliklər',
      cards: [

        // ── Ekran 1: Giriş ───────────────────────────────────
        {
          type: 'lesson',
          title: 'Vasitəli və vasitəsiz nitq',
          content: 'Kimsənin sözlərini olduğu kimi aktaranda — vasitəsiz nitq, öz sözlərinlə danışanda — vasitəli nitq işlənirik.\n\nVasitəsiz → vasitəli nitqə çevirərkən 4 əsas dəyişiklik baş verir:',
          examples: [
            { word: '1. Dırnaqlar atılır',         az: '"that" bağlayıcısı əlavə olunur' },
            { word: '2. Şəxs əvəzlikləri dəyişir', az: 'I → he/she, my → his/her' },
            { word: '3. say + tamamlıq → tell',     az: 'tamamlıq yoxdursa say qalır' },
            { word: '4. Zamanlar dəyişir',          az: 'baş cümlə keçmişdə olduqda' },
          ],
        },

        // ── Ekran 2: Dırnaq + that ──────────────────────────
        {
          type: 'lesson',
          title: '1. Dırnaqlar atılır → "that" əlavə olunur',
          content: 'Vasitəsiz nitqin dırnaqları atılır, cümlə "that" bağlayıcısı ilə baş cümləyə bağlanır.',
          examples: [
            { word: 'Jane said: "I don\'t understand."',     az: '→ Jane said that she didn\'t understand.' },
            { word: 'He said: "I am tired."',                az: '→ He said that he was tired.' },
          ],
          note: '"that" bağlayıcısı işlənməyə də bilər: He says he is a pupil. ✔',
        },

        // ── Ekran 3: Əvəzlik dəyişməsi ──────────────────────
        {
          type: 'lesson',
          title: '2. Şəxs əvəzliklərinin dəyişməsi',
          content: 'Şəxs əvəzlikləri mənaya uyğun olaraq dəyişir:',
          table: [
            ['Vasitəsiz nitqdə', 'Vasitəli nitqdə'],
            ['I',               'he / she'],
            ['my',              'his / her'],
            ['we',              'they'],
            ['our',             'their'],
            ['me',              'him / her'],
          ],
          examples: [
            { word: 'He says: "I am a doctor."', az: '→ He says that he is a doctor.' },
          ],
        },

        // ── Ekran 4: say → tell ──────────────────────────────
        {
          type: 'lesson',
          title: '3. say → tell (tamamlıq varsa)',
          content: 'Vasitəsiz nitq "say" feli ilə başlayırsa:',
          examples: [
            { word: 'Tamamlıq VARSA → say → tell',   az: 'He says to me: "I am a driver." → He tells me that he is a driver.' },
            { word: 'Tamamlıq YOXDURSA → say qalır', az: 'She said: "I am tired." → She said that she was tired.' },
          ],
          tip: 'say to me → tell me · say to him → tell him',
        },

        // ── Ekran 5: Baş cümlə indikidə ─────────────────────
        {
          type: 'lesson',
          title: '4. Baş cümlə indiki zamanda — budaq cümlə dəyişmir',
          content: 'Baş cümlənin feli indiki, gələcək və ya bitmiş zamanda olarsa budaq cümlə olduğu zamanda qalır:',
          examples: [
            { word: 'He says: "I am a doctor."',            az: '→ He says that he is a doctor. ✔' },
            { word: 'He has said: "I sent them the book."', az: '→ He has said that he sent them the book. ✔' },
            { word: 'He will say: "I sent them the book."', az: '→ He will say that he sent them the book. ✔' },
          ],
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"that" bağlayıcısı vasitəli nitqdə mütləq işlənməlidirmi?', options: ['Bəli, mütləq', 'Xeyr, işlənməyə də bilər'], answer: 'Xeyr, işlənməyə də bilər' },
            { q: 'say + tamamlıq → ___', options: ['tell', 'ask', 'say', 'speak'], answer: 'tell' },
            { q: '"I" əvəzliyi vasitəli nitqdə nə olur?', options: ['he / she', 'they', 'we', 'you'], answer: 'he / she' },
            { q: 'Baş cümlə indiki zamanda olarsa budaq cümlə necə olur?', options: ['Dəyişmir', 'Keçmiş zamana keçir', 'Gələcəyə keçir', 'Silinir'], answer: 'Dəyişmir' },
            { q: 'Jane said: "I don\'t understand." → Jane said that ___ understand.', options: ['she didn\'t', 'I didn\'t', 'she doesn\'t', 'I don\'t'], answer: 'she didn\'t' },
          ],
        },
      ],
    },

    // ── index: 3 ─ Dərs 1.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.2 — Zamanların dəyişməsi',
      cards: [

        // ── Ekran 1: Giriş ───────────────────────────────────
        {
          type: 'lesson',
          title: 'Zamanların dəyişməsi (Backshift)',
          content: 'Baş cümlənin feli keçmiş zamanda olduqda budaq cümlədəki zamanlar da geriyə — keçmişə — doğru "sürüşür".\n\nBu hadisəyə backshift deyilir.',
          tip: 'Qayda sadədir: hər zaman bir addım geriyə gedir.',
        },

        // ── Ekran 2: Cədvəl ──────────────────────────────────
        {
          type: 'lesson',
          title: 'Zamanların dəyişmə cədvəli',
          content: 'Baş cümlə keçmiş zamanda olduqda:',
          table: [
            ['Vasitəsiz nitqdə',     'Vasitəli nitqdə'],
            ['Present Simple',       'Past Simple'],
            ['Present Continuous',   'Past Continuous'],
            ['Present Perfect',      'Past Perfect'],
            ['Past Simple',          'Past Perfect'],
            ['will / shall',         'would'],
          ],
        },

        // ── Ekran 3: Nümunələr ──────────────────────────────
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Hər dəyişməni nümunə ilə görək:',
          examples: [
            { word: '"I am sure I don\'t know."',       az: '→ he was sure he didn\'t know  (Pres.Simple → Past Simple)' },
            { word: '"I am preparing my lessons."',     az: '→ he was preparing his lessons  (Pres.Cont. → Past Cont.)' },
            { word: '"I have never seen him."',         az: '→ he had never seen him  (Pres.Perfect → Past Perfect)' },
            { word: '"I saw the boys yesterday."',      az: '→ he had seen the boys the day before  (Past Simple → Past Perfect)' },
            { word: '"I shall finish my work in time."',az: '→ he would finish his work in time  (will/shall → would)' },
          ],
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: 'Present Simple → vasitəli nitqdə ___', options: ['Past Simple', 'Past Perfect', 'Past Continuous', 'dəyişmir'], answer: 'Past Simple' },
            { q: 'Present Perfect → vasitəli nitqdə ___', options: ['Past Perfect', 'Past Simple', 'Past Continuous', 'dəyişmir'], answer: 'Past Perfect' },
            { q: '"I will come." → He said he ___ come.', options: ['would', 'will', 'shall', 'could'], answer: 'would' },
            { q: '"I am reading." → She said she ___ reading.', options: ['was', 'is', 'has been', 'had been'], answer: 'was' },
            { q: '"I have finished." → He said he ___ finished.', options: ['had', 'has', 'was', 'did'], answer: 'had' },
            { q: 'Past Simple → vasitəli nitqdə ___', options: ['Past Perfect', 'Past Simple', 'dəyişmir', 'would'], answer: 'Past Perfect' },
            { q: 'will / shall → vasitəli nitqdə ___', options: ['would', 'will', 'should', 'could'], answer: 'would' },
          ],
        },
      ],
    },

    // ── index: 4 ─ Dərs 1.3 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.3 — Zamanların dəyişmədiyi hallar',
      cards: [

        // ── Ekran 1: Giriş ───────────────────────────────────
        {
          type: 'lesson',
          title: 'Zamanlar hər zaman dəyişmirmi?',
          content: 'Bəzi hallarda zamanlar dəyişmir — backshift tətbiq edilmir.\n\nBu 4 istisna halı bilmək çox vacibdir:',
          examples: [
            { word: '1. Tarixi faktlar və ümumi həqiqətlər', az: 'həmişə doğru olduğu üçün dəyişmir' },
            { word: '2. Zaman budaq cümləsi ilə bildirilərsə', az: 'Past Simple dəyişmir' },
            { word: '3. Past Continuous',                      az: 'dəyişmir' },
            { word: '4. Past Perfect',                         az: 'artıq keçmişin keçmişidir, dəyişmir' },
          ],
        },

        // ── Ekran 2: Nümunələr ──────────────────────────────
        {
          type: 'lesson',
          title: 'İstisna halların nümunələri',
          content: 'Hər istisna halı nümunə ilə:',
          examples: [
            { word: '"Ch. Dickens was born in 1812."',           az: '→ The teacher said that Dickens was born in 1812. ✔ (tarixi fakt)' },
            { word: '"I went home when it began to rain."',      az: '→ he said he went home when it began to rain. ✔ (zaman budaq cümləsi)' },
            { word: '"I was going home at two o\'clock."',       az: '→ she said she was going home at two o\'clock. ✔ (Past Cont.)' },
            { word: '"I had not thought of it."',                az: '→ the doctor said he had not thought of it. ✔ (Past Perfect)' },
          ],
          note: 'Tarixi faktlar, elmi həqiqətlər həmişə indiki zamanda qalır: the Earth goes around the Sun.',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"Dickens was born in 1812." — vasitəli nitqdə zaman dəyişirmi?', options: ['Xeyr, tarixi fakt', 'Bəli, Past Perfect olur'], answer: 'Xeyr, tarixi fakt' },
            { q: 'Past Perfect vasitəli nitqdə dəyişirmi?', options: ['Xeyr, dəyişmir', 'Bəli, daha dərin keçmişə keçir'], answer: 'Xeyr, dəyişmir' },
            { q: 'Past Continuous vasitəli nitqdə dəyişirmi?', options: ['Xeyr, dəyişmir', 'Bəli, Past Perfect Continuous olur'], answer: 'Xeyr, dəyişmir' },
            { q: '"I went home when it rained." → she said she ___ home when it rained.', options: ['went', 'had gone', 'was going', 'goes'], answer: 'went' },
            { q: '"I was cooking at 6." → he said he ___ at 6.', options: ['was cooking', 'had been cooking', 'cooked', 'is cooking'], answer: 'was cooking' },
          ],
        },
      ],
    },

    // ── index: 5 ─ Mini-quiz 1 ────────────────────────────────
    [
      { en: 'Jane said: "I don\'t understand." → Jane said that she ___ understand.', tr: 'didn\'t', wrong: 'doesn\'t' },
      { en: 'He says to me: "I am a driver." → He ___ me that he is a driver.', tr: 'tells', wrong: 'says' },
      { en: '"I am preparing my lessons." → He said he ___ his lessons.', tr: 'was preparing', wrong: 'is preparing' },
      { en: '"I have never seen him." → She said she ___ never seen him.', tr: 'had', wrong: 'has' },
      { en: '"I will come." → He said he ___ come.', tr: 'would', wrong: 'will' },
      { en: '"that" bağlayıcısı işlənməyə də bilər — doğrudurmu?', tr: 'Bəli', wrong: 'Xeyr' },
      { en: 'say + tamamlıq → ___', tr: 'tell', wrong: 'ask' },
      { en: '"I saw them yesterday." → He said he ___ them the day before.', tr: 'had seen', wrong: 'saw' },
      { en: '"Dickens was born in 1812." → The teacher said Dickens ___ born in 1812.', tr: 'was', wrong: 'had been' },
      { en: '"I was going home at two." → She said she ___ home at two.', tr: 'was going', wrong: 'had been going' },
    ],

    // ── index: 6 ─ Bölmə 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 2 — Zaman və məkan sözlərinin dəyişməsi',
    },

    // ── index: 7 ─ Dərs 2.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.1 — Yaxın → uzaq sözlər',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Məkan sözlərinin dəyişməsi',
          content: 'Vasitəli nitqdə danışan artıq o yerdə deyil — buna görə yaxın məkan sözləri uzaq sözlərlə əvəz edilir:',
          table: [
            ['Vasitəsiz nitqdə', 'Vasitəli nitqdə'],
            ['this',             'that'],
            ['these',            'those'],
            ['here',             'there'],
            ['now',              'then'],
            ['today',            'that day'],
          ],
          examples: [
            { word: '"I like this book."',   az: '→ she said she liked that book.' },
            { word: '"Come here now."',       az: '→ he told her to go there then.' },
          ],
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"this" → vasitəli nitqdə ___', options: ['that', 'those', 'here', 'then'], answer: 'that' },
            { q: '"these" → vasitəli nitqdə ___', options: ['those', 'that', 'there', 'then'], answer: 'those' },
            { q: '"here" → vasitəli nitqdə ___', options: ['there', 'that', 'then', 'before'], answer: 'there' },
            { q: '"now" → vasitəli nitqdə ___', options: ['then', 'there', 'that day', 'before'], answer: 'then' },
            { q: '"today" → vasitəli nitqdə ___', options: ['that day', 'then', 'there', 'the next day'], answer: 'that day' },
          ],
        },
      ],
    },

    // ── index: 8 ─ Dərs 2.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.2 — Zaman zərflərinin dəyişməsi',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Zaman zərflərinin dəyişməsi',
          content: 'Zamanca yaxın sözlər də vasitəli nitqdə uzaq sözlərlə əvəz edilir:',
          table: [
            ['Vasitəsiz nitqdə', 'Vasitəli nitqdə'],
            ['tomorrow',         'the next day / the following day'],
            ['yesterday',        'the day before / the previous day'],
            ['ago',              'before'],
            ['last week',        'the previous week'],
            ['next year',        'the following year'],
          ],
          examples: [
            { word: '"I saw him yesterday."',     az: '→ he said he had seen him the day before.' },
            { word: '"I will come tomorrow."',    az: '→ she said she would come the next day.' },
            { word: '"I met her two days ago."',  az: '→ she said she had met her two days before.' },
          ],
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"tomorrow" → vasitəli nitqdə ___', options: ['the next day', 'the day before', 'then', 'before'], answer: 'the next day' },
            { q: '"yesterday" → vasitəli nitqdə ___', options: ['the day before', 'the next day', 'then', 'ago'], answer: 'the day before' },
            { q: '"ago" → vasitəli nitqdə ___', options: ['before', 'then', 'after', 'the day before'], answer: 'before' },
            { q: '"I did it today." → He said he ___ it that day.', options: ['had done', 'did', 'does', 'was doing'], answer: 'had done' },
            { q: '"next year" → vasitəli nitqdə ___', options: ['the following year', 'the previous year', 'that year', 'next year'], answer: 'the following year' },
          ],
        },
      ],
    },

    // ── index: 9 ─ Mini-quiz 2 ────────────────────────────────
    [
      { en: '"I like this book." → She said she liked ___ book.', tr: 'that', wrong: 'this' },
      { en: '"I live here." → He said he lived ___.', tr: 'there', wrong: 'here' },
      { en: '"I will come tomorrow." → She said she would come ___.', tr: 'the next day', wrong: 'tomorrow' },
      { en: '"I saw him yesterday." → He said he had seen him ___.', tr: 'the day before', wrong: 'yesterday' },
      { en: '"These are mine." → He said ___ were his.', tr: 'those', wrong: 'these' },
      { en: '"I met her two days ago." → She said she had met her two days ___.', tr: 'before', wrong: 'ago' },
      { en: '"I am busy now." → He said he was busy ___.', tr: 'then', wrong: 'now' },
      { en: '"I will come next year." → She said she would come ___.', tr: 'the following year', wrong: 'next year' },
      { en: '"this" → ___', tr: 'that', wrong: 'those' },
      { en: '"I did it today." → He said he ___ it that day.', tr: 'had done', wrong: 'did' },
    ],

    // ── index: 10 ─ Test 1 ────────────────────────────────────
    // Nəqli cümlə + zaman/məkan dəyişməsi (Bölmə 1–2) · 12 sual
    [
      { en: 'He said: "I am a teacher." → He said that ___ a teacher.', tr: 'he was', wrong: 'I was' },
      { en: 'She said to me: "I need help." → She ___ me she needed help.', tr: 'told', wrong: 'said' },
      { en: '"I have finished." → He said he ___ finished.', tr: 'had', wrong: 'has' },
      { en: '"I will call you tomorrow." → She said she ___ call me the next day.', tr: 'would', wrong: 'will' },
      { en: '"I like this house." → She said she liked ___ house.', tr: 'that', wrong: 'this' },
      { en: '"I live here." → He said he lived ___.', tr: 'there', wrong: 'here' },
      { en: '"Dickens was born in 1812." → The teacher said Dickens ___ born in 1812.', tr: 'was', wrong: 'had been' },
      { en: '"I was cooking at 6." → She said she ___ at 6.', tr: 'was cooking', wrong: 'had been cooking' },
      { en: '"I saw them yesterday." → He said he ___ them the day before.', tr: 'had seen', wrong: 'saw' },
      { en: '"I went home when it rained." → She said she ___ home when it rained.', tr: 'went', wrong: 'had gone' },
      { en: '"I will come tomorrow." → He said he would come ___.', tr: 'the next day', wrong: 'tomorrow' },
      { en: '"these" → vasitəli nitqdə ___', tr: 'those', wrong: 'that' },
    ],

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 2 — Sual, əmr və xahiş cümlələrinin çevrilməsi  ║
    // ══════════════════════════════════════════════════════════

    // ── index: 11 ─ Qrup 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 2 — Sual, əmr və xahiş cümlələrinin çevrilməsi',
    },

    // ── index: 12 ─ Bölmə 3 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 3 — Ümumi sualların vasitəli nitqə çevrilməsi',
    },

    // ── index: 13 ─ Dərs 3.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.1 — Əsas qayda',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Ümumi sual nədir?',
          content: 'Ümumi sual "hə/yox" cavabı tələb edən sualdır. Vasitəli nitqə çevirərkən 5 qayda var:',
          examples: [
            { word: '1. Tamamlıq budaq cümləsinə çevrilir',  az: 'sual cümləsi → xəbər cümləsi' },
            { word: '2. "if" / "whether" bağlayıcısı',       az: 'baş cümləyə bağlayır (ən çox if)' },
            { word: '3. Söz sırası: mübtəda → xəbər',        az: 'sual sırası deyil, cümlə sırası' },
            { word: '4. "do / does / did" atılır',           az: 'köməkçi fel lazım deyil' },
            { word: '5. say → ask',                          az: 'sual verən üçün ask işlənir' },
          ],
        },

        // ── Ekran 2: Nümunələr ──────────────────────────────
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Qaydaları nümunələrlə görək:',
          examples: [
            { word: '"Do you go to school in the morning?"', az: '→ He asks if I go to school in the morning.' },
            { word: '"Do you like tea?"',                    az: '→ He asked if I liked tea.' },
            { word: '"Is she coming?"',                      az: '→ He asked if she was coming.' },
            { word: '"Have you finished?"',                  az: '→ She asked if I had finished.' },
            { word: '"Will you help me?"',                   az: '→ He asked if I would help him.' },
          ],
          note: 'Zamanlar nəqli cümlədəki kimi eyni qaydada dəyişir.',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: 'Ümumi sualda say → ___', options: ['ask', 'tell', 'order', 'say'], answer: 'ask' },
            { q: '"Do you like music?" → He asked ___ I liked music.', options: ['if', 'that', 'whether or if — hər ikisi', 'what'], answer: 'if' },
            { q: 'Ümumi sualda "do" köməkçisi vasitəli nitqdə nə olur?', options: ['Atılır', 'Qalır', 'would olur', 'did olur'], answer: 'Atılır' },
            { q: 'Ümumi sualda söz sırası necədir?', options: ['mübtəda → xəbər', 'xəbər → mübtəda', 'dəyişmir', 'serbest'], answer: 'mübtəda → xəbər' },
            { q: '"Will she come?" → He asked if she ___ come.', options: ['would', 'will', 'shall', 'could'], answer: 'would' },
          ],
        },
      ],
    },

    // ── index: 14 ─ Dərs 3.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.2 — Nümunələr',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Ümumi sual — əlavə nümunələr',
          content: 'Müxtəlif zaman formalarında ümumi sualların çevrilməsi:',
          table: [
            ['Vasitəsiz nitq',          'Vasitəli nitq'],
            ['"Do you go to school?"',  'He asked if I went to school.'],
            ['"Is she coming?"',        'He asked if she was coming.'],
            ['"Have you finished?"',    'She asked if I had finished.'],
            ['"Will you help me?"',     'He asked if I would help him.'],
            ['"Are you ready?"',        'She asked if I was ready.'],
          ],
          note: '"Do you go to school in the morning?" cümləsindəki kimi "do" atılır və zaman dəyişir.',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"Are you tired?" → She asked if ___ tired.', options: ['I was', 'am I', 'I am', 'was I'], answer: 'I was' },
            { q: '"Have you eaten?" → He asked if I ___ eaten.', options: ['had', 'have', 'was', 'did'], answer: 'had' },
            { q: '"Do you speak English?" → He asked ___ I spoke English.', options: ['if', 'that', 'what', 'where'], answer: 'if' },
            { q: '"Is he your brother?" → She asked if ___ my brother.', options: ['he was', 'is he', 'he is', 'was he'], answer: 'he was' },
          ],
        },
      ],
    },

    // ── index: 15 ─ Mini-quiz 3 ───────────────────────────────
    [
      { en: '"Do you like music?" → He asked ___ I liked music.', tr: 'if', wrong: 'that' },
      { en: 'Ümumi sualda "do" köməkçisi vasitəli nitqdə nə olur?', tr: 'Atılır', wrong: 'Qalır' },
      { en: '"Are you tired?" → She asked if ___ tired.', tr: 'I was', wrong: 'am I' },
      { en: '"Have you eaten?" → He asked if I ___ eaten.', tr: 'had', wrong: 'have' },
      { en: '"Will she come?" → He asked if she ___ come.', tr: 'would', wrong: 'will' },
      { en: 'Ümumi sualda söz sırası necədir?', tr: 'mübtəda → xəbər', wrong: 'xəbər → mübtəda' },
      { en: 'Ümumi sualda say → ___', tr: 'ask', wrong: 'tell' },
    ],

    // ── index: 16 ─ Bölmə 4 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 4 — Xüsusi sualların vasitəli nitqə çevrilməsi',
    },

    // ── index: 17 ─ Dərs 4.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.1 — Əsas qayda',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Xüsusi sual nədir?',
          content: 'Xüsusi sual sual sözü ilə başlayan sualdır (where, when, what, who, how...).\nVasitəli nitqə çevirərkən 5 qayda:',
          examples: [
            { word: '1. Sual sözü saxlanılır',          az: 'where, when, what, who, how...' },
            { word: '2. Söz sırası: mübtəda → xəbər',  az: 'sual sırası deyil, cümlə sırası' },
            { word: '3. "do / does / did" atılır',      az: 'köməkçi fel lazım deyil' },
            { word: '4. Şəxs əvəzliyi dəyişir',        az: 'nəqli cümləkdəki kimi' },
            { word: '5. say → ask',                     az: 'sual üçün ask işlənir' },
          ],
          note: 'Xüsusi sualda "if/whether" işlənmir — sual sözü özü bağlayıcı rolunu oynayır.',
        },

        // ── Ekran 2: Nümunələr ──────────────────────────────
        {
          type: 'lesson',
          title: 'Nümunələr',
          content: 'Xüsusi sualların çevrilməsi:',
          examples: [
            { word: '"Where do you live?"',                    az: '→ He asks me where I live.' },
            { word: '"Where is your friend?"',                 az: '→ He asked me where my friend was.' },
            { word: '"When will they send you the book?"',     az: '→ He asked me when they would send me the book.' },
          ],
          tip: 'do/does/did atılır: "Where do you live?" → where I live (do yoxdur)',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: 'Xüsusi sualda say → ___', options: ['ask', 'tell', 'order', 'say'], answer: 'ask' },
            { q: '"Where do you live?" → He asked me ___ I lived.', options: ['where', 'if', 'that', 'when'], answer: 'where' },
            { q: 'Xüsusi sualda "if/whether" işlənirmi?', options: ['Xeyr', 'Bəli', 'Bəzən'], answer: 'Xeyr' },
            { q: '"do" köməkçisi xüsusi sualda atılırmı?', options: ['Bəli', 'Xeyr', 'Bəzən'], answer: 'Bəli' },
          ],
        },
      ],
    },

    // ── index: 18 ─ Dərs 4.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.2 — Nümunələr',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Xüsusi sual — əlavə nümunələr',
          content: 'Müxtəlif sual sözləri ilə nümunələr:',
          table: [
            ['Vasitəsiz nitq',                            'Vasitəli nitq'],
            ['"Where do you live?"',                      'He asked where I lived.'],
            ['"What are you doing?"',                     'She asked what I was doing.'],
            ['"How did you find it?"',                    'He asked how I had found it.'],
            ['"Who is that man?"',                        'She asked who that man was.'],
            ['"When will they send the book?"',           'He asked when they would send the book.'],
          ],
          note: 'Hər sual sözü (where, what, how, who, when) bağlayıcı rolunu özü oynayır.',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: '"What are you doing?" → She asked ___ I was doing.', options: ['what', 'if what', 'that', 'if'], answer: 'what' },
            { q: '"How did you do it?" → He asked how I ___ it.', options: ['had done', 'did', 'does', 'was doing'], answer: 'had done' },
            { q: '"Who is that girl?" → She asked ___ that girl was.', options: ['who', 'if who', 'that', 'if'], answer: 'who' },
            { q: '"When will he come?" → She asked ___ he would come.', options: ['when', 'if when', 'if', 'that'], answer: 'when' },
          ],
        },
      ],
    },

    // ── index: 19 ─ Mini-quiz 4 ───────────────────────────────
    [
      { en: '"Where do you live?" → He asked me ___ I lived.', tr: 'where', wrong: 'if' },
      { en: '"What are you doing?" → She asked ___ I was doing.', tr: 'what', wrong: 'if what' },
      { en: '"When will they send the book?" → He asked ___ they would send the book.', tr: 'when', wrong: 'if' },
      { en: 'Xüsusi sualda "if/whether" işlənirmi?', tr: 'Xeyr, sual sözü özü bağlayıcıdır', wrong: 'Bəli, mütləq işlənir' },
      { en: '"How did you do it?" → He asked how I ___ it.', tr: 'had done', wrong: 'did' },
      { en: 'do/does/did suallardan atılırmı?', tr: 'Bəli, atılır', wrong: 'Xeyr, qalır' },
      { en: '"Who is that girl?" → She asked ___ that girl was.', tr: 'who', wrong: 'if who' },
    ],

    // ── index: 20 ─ Bölmə 5 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 5 — Əmr və xahiş cümlələrinin çevrilməsi',
    },

    // ── index: 21 ─ Dərs 5.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.1 — Əmr cümləsi',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Əmr cümləsinin vasitəli nitqə çevrilməsi',
          content: 'Əmr cümləsini çevirərkən 2 əsas qayda:',
          examples: [
            { word: '1. say → tell / order',               az: 'əmr bildirən cümlədə' },
            { word: '2. Əmr forması → məsdər (to + fel)',  az: 'felin əmr forması məsdərlə əvəz edilir' },
          ],
        },

        // ── Ekran 2: Nümunələr ──────────────────────────────
        {
          type: 'lesson',
          title: 'Müsbət əmr nümunələri',
          content: 'Əmr cümləsinin çevrilməsi:',
          examples: [
            { word: '"Come at six o\'clock."',  az: '→ He told her to come at six o\'clock.' },
            { word: '"Open the door!"',         az: '→ She told him to open the door.' },
            { word: '"Sit down."',              az: '→ She told them to sit down.' },
          ],
        },

        // ── Ekran 3: İnkar əmr ──────────────────────────────
        {
          type: 'lesson',
          title: 'İnkar əmr cümləsi',
          content: 'İnkar əmr cümlələrini çevirərkən məsdərin qarşısında "not" işlənir:',
          examples: [
            { word: '"Don\'t open the window."', az: '→ I told her not to open the window.' },
            { word: '"Don\'t be late."',          az: '→ He told them not to be late.' },
          ],
          note: 'Formula: tell/order + (kim) + not to + fel',
          tip: 'Müsbət: told her to come  ·  İnkar: told her not to come',
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: 'Əmr bildirən cümlədə say → ___', options: ['tell / order', 'ask', 'say', 'speak'], answer: 'tell / order' },
            { q: '"Come here!" → He ___ her to come there.', options: ['told', 'asked', 'said', 'ordered'], answer: 'told' },
            { q: '"Don\'t open the door." → He told her ___ open the door.', options: ['not to', 'to not', 'don\'t', 'not'], answer: 'not to' },
            { q: 'Əmr forması vasitəli nitqdə nə ilə əvəz edilir?', options: ['to + fel (məsdər)', 'keçmiş zaman', 'would + fel', 'fel + ing'], answer: 'to + fel (məsdər)' },
            { q: '"Don\'t be late." → She told him ___ late.', options: ['not to be', 'to not be', 'don\'t be', 'not be'], answer: 'not to be' },
          ],
        },
      ],
    },

    // ── index: 22 ─ Dərs 5.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.2 — Xahiş cümləsi',
      cards: [

        // ── Ekran 1 ──────────────────────────────────────────
        {
          type: 'lesson',
          title: 'Xahiş cümləsinin vasitəli nitqə çevrilməsi',
          content: 'Xahiş bildirən cümlədə say → ask işlənir.\nƏmr forması yenə məsdərlə əvəz edilir:',
          examples: [
            { word: '"Please open the window."',  az: '→ He asked her to open the window.' },
            { word: '"Please help me."',           az: '→ She asked him to help her.' },
            { word: '"Please sit down."',          az: '→ She asked him to sit down.' },
          ],
        },

        // ── Ekran 2: İnkar xahiş ────────────────────────────
        {
          type: 'lesson',
          title: 'İnkar xahiş cümləsi',
          content: 'İnkar xahiş cümlələrini çevirərkən də "not" işlənir:',
          examples: [
            { word: '"Please don\'t make noise."', az: '→ He asked them not to make noise.' },
            { word: '"Please don\'t be rude."',    az: '→ She asked them not to be rude.' },
          ],
        },

        // ── Ekran 3: Xülasə ─────────────────────────────────
        {
          type: 'lesson',
          title: 'Əmr vs Xahiş — xülasə',
          content: 'Fərqi bir cədvəldə görək:',
          table: [
            ['Növ',          'say → ___',     'Formula',                  'Nümunə'],
            ['Əmr',          'tell / order',  'tell + kim + to + fel',    '"Come!" → told to come'],
            ['Xahiş',        'ask',           'ask + kim + to + fel',     '"Please come." → asked to come'],
            ['İnkar əmr',    'tell',          'tell + kim + not to + fel', '"Don\'t come." → told not to come'],
            ['İnkar xahiş',  'ask',           'ask + kim + not to + fel', '"Please don\'t." → asked not to'],
          ],
        },

        // ── Mini-check ───────────────────────────────────────
        {
          type: 'mini_check',
          questions: [
            { q: 'Xahiş bildirən cümlədə say → ___', options: ['ask', 'tell', 'order', 'say'], answer: 'ask' },
            { q: '"Please help me." → She ___ him to help her.', options: ['asked', 'told', 'ordered', 'said'], answer: 'asked' },
            { q: '"Please don\'t make noise." → He asked them ___ noise.', options: ['not to make', 'to not make', 'don\'t make', 'not make'], answer: 'not to make' },
            { q: 'Əmr — tell · Xahiş — ___', options: ['ask', 'tell', 'order', 'say'], answer: 'ask' },
          ],
        },
      ],
    },

    // ── index: 23 ─ Mini-quiz 5 ───────────────────────────────
    [
      { en: '"Come here!" → He ___ her to come there.', tr: 'told', wrong: 'asked' },
      { en: '"Please help me." → She ___ him to help her.', tr: 'asked', wrong: 'told' },
      { en: '"Don\'t open the door." → He told her ___ open the door.', tr: 'not to', wrong: 'to not' },
      { en: 'Əmr bildirən cümlədə say → ___', tr: 'tell / order', wrong: 'ask' },
      { en: 'Xahiş bildirən cümlədə say → ___', tr: 'ask', wrong: 'tell' },
      { en: '"Don\'t be late." → She told him ___ late.', tr: 'not to be', wrong: 'to not be' },
      { en: '"Please sit down." → She asked him ___ down.', tr: 'to sit', wrong: 'sitting' },
      { en: 'Əmr forması vasitəli nitqdə nə ilə əvəz edilir?', tr: 'to + fel (məsdər)', wrong: 'keçmiş zaman' },
    ],

    // ── index: 24 ─ Test 2 ────────────────────────────────────
    // Sual + əmr + xahiş çevrilməsi (Bölmə 3–5) · 12 sual
    [
      { en: '"Do you speak English?" → He asked ___ I spoke English.', tr: 'if', wrong: 'that' },
      { en: '"Where do you work?" → She asked me ___ I worked.', tr: 'where', wrong: 'if' },
      { en: '"Are you coming?" → He asked ___ I was coming.', tr: 'if', wrong: 'that' },
      { en: '"What did you buy?" → She asked ___ I had bought.', tr: 'what', wrong: 'if what' },
      { en: '"Close the window!" → She ___ him to close the window.', tr: 'told', wrong: 'asked' },
      { en: '"Please wait here." → He asked her to wait ___.', tr: 'there', wrong: 'here' },
      { en: '"Don\'t touch that!" → She told him ___ touch that.', tr: 'not to', wrong: 'to not' },
      { en: '"Have you seen my keys?" → She asked if I ___ her keys.', tr: 'had seen', wrong: 'have seen' },
      { en: '"When will you finish?" → He asked ___ I would finish.', tr: 'when', wrong: 'if' },
      { en: '"Please don\'t be rude." → He asked them ___ rude.', tr: 'not to be', wrong: 'to not be' },
      { en: '"Who wrote this?" → She asked ___ had written that.', tr: 'who', wrong: 'if who' },
      { en: '"Is she your sister?" → He asked if ___ his sister.', tr: 'she was', wrong: 'is she' },
    ],

    // ── index: 25 ─ Final Test ────────────────────────────────
    // Direct & Indirect Speech tam test · 40+ sual
    [
      { en: 'He said: "I am a doctor." → He said that ___ a doctor.', tr: 'he was', wrong: 'I was' },
      { en: 'She said to me: "I need help." → She ___ me she needed help.', tr: 'told', wrong: 'said' },
      { en: '"I have finished my work." → He said he ___ his work.', tr: 'had finished', wrong: 'has finished' },
      { en: '"I will call you tomorrow." → She said she ___ call me the next day.', tr: 'would', wrong: 'will' },
      { en: '"I saw him yesterday." → He said he ___ him the day before.', tr: 'had seen', wrong: 'saw' },
      { en: '"I like this house." → She said she liked ___ house.', tr: 'that', wrong: 'this' },
      { en: '"I live here." → He said he lived ___.', tr: 'there', wrong: 'here' },
      { en: '"Dickens was born in 1812." → She said Dickens ___ born in 1812.', tr: 'was', wrong: 'had been' },
      { en: '"I was reading at 8." → He said he ___ at 8.', tr: 'was reading', wrong: 'had been reading' },
      { en: '"I went home when it rained." → She said she ___ home when it rained.', tr: 'went', wrong: 'had gone' },
      { en: '"I am busy now." → He said he was busy ___.', tr: 'then', wrong: 'now' },
      { en: '"I met them two days ago." → She said she had met them two days ___.', tr: 'before', wrong: 'ago' },
      { en: '"I will come tomorrow." → He said he would come ___.', tr: 'the next day', wrong: 'tomorrow' },
      { en: '"These are mine." → He said ___ were his.', tr: 'those', wrong: 'these' },
      { en: '"Do you like coffee?" → She asked ___ I liked coffee.', tr: 'if', wrong: 'that' },
      { en: '"Where do you live?" → He asked ___ I lived.', tr: 'where', wrong: 'if' },
      { en: '"Are you ready?" → She asked if ___ ready.', tr: 'I was', wrong: 'am I' },
      { en: '"When will they arrive?" → He asked ___ they would arrive.', tr: 'when', wrong: 'if' },
      { en: '"Have you eaten?" → She asked if I ___ eaten.', tr: 'had', wrong: 'have' },
      { en: '"What are you doing?" → He asked ___ I was doing.', tr: 'what', wrong: 'if what' },
      { en: '"Come at 5!" → She ___ him to come at 5.', tr: 'told', wrong: 'asked' },
      { en: '"Please help me." → He ___ her to help him.', tr: 'asked', wrong: 'told' },
      { en: '"Don\'t open the door." → She told him ___ open the door.', tr: 'not to', wrong: 'to not' },
      { en: '"Don\'t be late, please." → She asked them ___ late.', tr: 'not to be', wrong: 'to not be' },
      { en: '"Who is that girl?" → He asked ___ that girl was.', tr: 'who', wrong: 'if who' },
      { en: 'say + tamamlıq → ___', tr: 'tell', wrong: 'ask' },
      { en: '"that" bağlayıcısı işlənməyə də bilər — doğrudurmu?', tr: 'Bəli', wrong: 'Xeyr' },
      { en: 'Xüsusi sualda if/whether işlənirmi?', tr: 'Xeyr', wrong: 'Bəli' },
      { en: 'İnkar əmr cümləsi → məsdərin qarşısında ___ işlənir.', tr: 'not', wrong: 'don\'t' },
      { en: '"How did you find it?" → He asked how I ___ it.', tr: 'had found', wrong: 'found' },
      { en: '"I had not thought of it." → She said she ___ thought of it.', tr: 'had not', wrong: 'has not' },
      { en: '"I am preparing dinner." → He said he ___ dinner.', tr: 'was preparing', wrong: 'is preparing' },
      { en: '"today" → vasitəli nitqdə ___', tr: 'that day', wrong: 'the next day' },
      { en: '"ago" → vasitəli nitqdə ___', tr: 'before', wrong: 'after' },
      { en: '"Don\'t make noise, please." → He asked them ___ noise.', tr: 'not to make', wrong: 'to not make' },
      { en: '"Is she your friend?" → He asked if ___ my friend.', tr: 'she was', wrong: 'is she' },
      { en: '"now" → vasitəli nitqdə ___', tr: 'then', wrong: 'here' },
      { en: '"here" → vasitəli nitqdə ___', tr: 'there', wrong: 'here' },
      { en: 'Əmr bildirən: say → ___ / xahiş bildirən: say → ___', tr: 'tell · ask', wrong: 'ask · tell' },
      { en: 'Present Continuous → vasitəli nitqdə ___', tr: 'Past Continuous', wrong: 'Past Perfect' },
    ],
  ],
};
// ============================================================
//  WORDPATH — SEQUENCE OF TENSES DATA (Zamanların uzlaşması)
//  Data faylının sonuna əlavə et:
//
//  KIDS_GRAMMAR_LEVELS.push(SEQUENCE_TENSES_LEVEL);
//
//  app.js — EXAM_IDS-ə əlavə et:
//  'sequence_tenses': new Set([])
//
//  app.js — renderLevels()-də əlavə et:
//  } else if (lvl.id === 'sequence_tenses') {
//    const grammarList = document.getElementById('grammar-list');
//    if (grammarList) grammarList.appendChild(card);
//  }
//
//  app.js — renderQuizPath()-də əlavə et:
//  if (lvl.id === 'grammar' || lvl.id === 'verbs' || lvl.id === 'passive' ||
//      lvl.id === 'indirect_speech' || lvl.id === 'sequence_tenses') {
//    return renderGrammarPath(lvl, li);
//  }
//
//  app.js — loadProgress()-də əlavə et:
//  const isOpenSection = ... || lvl.id === 'sequence_tenses';
// ============================================================

const SEQUENCE_TENSES_LEVEL = {
  id: 'sequence_tenses',
  name: 'SEQUENCE OF TENSES',
  icon: '<i class="ti ti-clock"></i>',
  color: '#5EEAD4',

  quizzes: [

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 1 — Uzlaşmanın əsas qaydaları                   ║
    // ══════════════════════════════════════════════════════════

    // ── index: 0 — Qrup 1 bölücüsü ───────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 1 — Zamanların uzlaşmasının əsas qaydaları',
    },

    // ── index: 1 — Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 1 — Uzlaşma nədir və əsas prinsip',
    },

    // ── index: 2 — Dərs 1.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.1 — Zamanların uzlaşması nədir?',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 1.1 — Zamanların uzlaşması nədir?',
          content: 'Sequence of Tenses — Zamanların uzlaşması\n\nBaş cümlədəki fel keçmiş zamanda olduqda tamamlıq budaq cümləsindəki fel də mütləq keçmiş zaman formalarından birində işlənməlidir.\n\n✦ I heard that he was ill.\n   (heard → keçmiş, was → keçmiş)\n\n✦ She said that she knew the answer.\n   (said → keçmiş, knew → keçmiş)\n\nBu hadisəyə zamanların uzlaşması deyilir.',
        },
      ],
    },

    // ── index: 3 — Dərs 1.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.2 — if, when, after, before, till ilə uzlaşma',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 1.2 — if, when, after, before, till ilə uzlaşma',
          content: 'when, if, after, before, as soon as, till, until bağlayıcıları ilə:\n\n✦ Budaq cümlə → Present Simple (indiki qeyri-müəyyən)\n✦ Baş cümlə → Future Simple (gələcək qeyri-müəyyən)\n\nIf my mother comes, I shall go to the cinema.\nAs soon as he arrives, we will start.\n\nBaş cümlə əmr formasında olsa:\nGo to school if mother comes.\n\nQAYDA: Bu bağlayıcılarla gələcək mənada belə indiki zaman işlənir.',
        },
      ],
    },

    // ── index: 4 — Mini-quiz 1 ────────────────────────────────
    [
      { en: 'I heard that he ___ ill.', tr: 'was', wrong: 'is' },
      { en: 'If my mother ___, I shall go to the cinema.', tr: 'comes', wrong: 'will come' },
      { en: 'She said that she ___ the answer.', tr: 'knew', wrong: 'knows' },
      { en: 'As soon as he ___, we will start.', tr: 'arrives', wrong: 'will arrive' },
      { en: 'Baş cümlə keçmiş zamanda olduqda budaq cümlə hansı zamanda olur?', tr: 'Keçmiş zaman formalarından birində', wrong: 'İndiki zamanda' },
      { en: 'Go to school if mother ___.', tr: 'comes', wrong: 'will come' },
      { en: 'Till he ___, I will wait here.', tr: 'comes', wrong: 'will come' },
    ],

    // ── index: 5 — Bölmə 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 2 — Eyni vaxtda baş verən hərəkətlər',
    },

    // ── index: 6 — Dərs 2.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.1 — when ilə eyni vaxtda baş verən hərəkət',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.1 — when ilə eyni vaxtda baş verən hərəkət',
          content: 'Baş cümlə ilə budaq cümlədəki hərəkət eyni vaxtda baş verərsə:\n\n✦ Budaq cümlə (when ilə) → Past Simple\n✦ Baş cümlə → Past Continuous və ya Past Simple\n\nWhen I came, my friend was writing something.\n(came → Past Simple · was writing → Past Continuous)\n\nWhen my father came, I was preparing my lessons.\n\nQAYDA: when olan tərəf Past Simple, baş cümlə Past Continuous.',
        },
      ],
    },

    // ── index: 7 — Dərs 2.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.2 — while ilə eyni vaxtda baş verən hərəkət',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.2 — while ilə eyni vaxtda baş verən hərəkət',
          content: 'while ilə verilən budaq cümlələrdə:\n\n✦ while olan tərəf → Past Continuous\n✦ Baş cümlə → Past Simple və ya Past Continuous\n\nWhile I was coming, he prepared his lessons.\n(was coming → Past Cont. · prepared → Past Simple)\n\nWhile I was coming, he was preparing his lessons.\n(was coming → Past Cont. · was preparing → Past Cont.)\n\nQAYDA: while hər zaman davamedici zaman tələb edir.',
        },
      ],
    },

    // ── index: 8 — Mini-quiz 2 ────────────────────────────────
    [
      { en: 'When I came, my friend ___ something.', tr: 'was writing', wrong: 'wrote' },
      { en: 'While I ___ coming, he prepared his lessons.', tr: 'was', wrong: 'am' },
      { en: 'When my father came, I ___ my lessons.', tr: 'was preparing', wrong: 'prepared' },
      { en: 'While she ___ TV, the phone rang.', tr: 'was watching', wrong: 'watched' },
      { en: 'when olan tərəf hansı zamanda olur (eyni vaxtda)?', tr: 'Past Simple', wrong: 'Past Continuous' },
      { en: 'while olan tərəf hansı zamanda olur?', tr: 'Past Continuous', wrong: 'Past Simple' },
      { en: 'While they ___, I was reading.', tr: 'were sleeping', wrong: 'slept' },
    ],

    // ── index: 9 — Bölmə 3 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 3 — Ardıcıl baş verən hərəkətlər: before, when, after',
    },

    // ── index: 10 — Dərs 3.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.1 — before / when ilə əvvəl baş verən hərəkət',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 3.1 — before / when ilə əvvəl baş verən hərəkət',
          content: 'Budaq cümlədəki hərəkət baş cümlədəkindən ƏVVƏL baş veribsə:\n\n✦ before / when olan tərəf → Past Simple\n✦ Baş cümlə → Past Perfect\n\nWhen I came, my sister had done her homework.\n(came → Past Simple · had done → Past Perfect)\n\nBefore my father came, I had done my homework.\n\nMəna: Ev tapşırığı atam gəlməzdən əvvəl artıq bitmişdi.',
        },
      ],
    },

    // ── index: 11 — Dərs 3.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.2 — after ilə ardıcıl hərəkət',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 3.2 — after ilə ardıcıl hərəkət',
          content: 'after ilə olan budaq cümlələrdə əksinə olur:\n\n✦ after olan tərəf → Past Perfect (1-ci hərəkət)\n✦ Baş cümlə → Past Simple (2-ci hərəkət)\n\nAfter my mother had slept, I came.\n(had slept → Past Perfect · came → Past Simple)\n\nAfter he had finished his work, he went home.\n\nQAYDA: after = bu iş bitmişdi, sonra o baş verdi.',
        },
      ],
    },

    // ── index: 12 — Mini-quiz 3 ───────────────────────────────
    [
      { en: 'When I came, my sister ___ her homework.', tr: 'had done', wrong: 'did' },
      { en: 'Before my father came, I ___ my homework.', tr: 'had done', wrong: 'did' },
      { en: 'After my mother ___ slept, I came.', tr: 'had', wrong: 'has' },
      { en: 'after olan tərəf hansı zamanda olur?', tr: 'Past Perfect', wrong: 'Past Simple' },
      { en: 'before olan tərəf hansı zamanda olur?', tr: 'Past Simple', wrong: 'Past Perfect' },
      { en: 'After he ___ his work, he went home.', tr: 'had finished', wrong: 'finished' },
      { en: 'When she arrived, they ___ already left.', tr: 'had', wrong: 'have' },
    ],

    // ── index: 13 — Test 1 ────────────────────────────────────
    // Uzlaşmanın əsas qaydaları (Bölmə 1–3) · 12 sual
    [
      { en: 'I heard that he ___ ill.', tr: 'was', wrong: 'is' },
      { en: 'If it ___, we will go out.', tr: 'stops raining', wrong: 'will stop raining' },
      { en: 'When I came, my friend ___ something.', tr: 'was writing', wrong: 'wrote' },
      { en: 'While she ___ TV, the phone rang.', tr: 'was watching', wrong: 'watched' },
      { en: 'Before he came, I ___ my work.', tr: 'had finished', wrong: 'finished' },
      { en: 'After they ___ eaten, they left.', tr: 'had', wrong: 'have' },
      { en: 'As soon as he ___, call me.', tr: 'arrives', wrong: 'will arrive' },
      { en: 'She said that she ___ the answer.', tr: 'knew', wrong: 'knows' },
      { en: 'When my father came, I ___ my lessons.', tr: 'was preparing', wrong: 'had prepared' },
      { en: 'After my mother ___ slept, I came home.', tr: 'had', wrong: 'has' },
      { en: 'Till he ___, I will stay here.', tr: 'comes', wrong: 'will come' },
      { en: 'While they ___, I was cooking.', tr: 'were sleeping', wrong: 'slept' },
    ],

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 2 — Xüsusi hallar və uzlaşmanın pozulması       ║
    // ══════════════════════════════════════════════════════════

    // ── index: 14 — Qrup 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 2 — Xüsusi bağlayıcılar və uzlaşmanın pozulması',
    },

    // ── index: 15 — Bölmə 4 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 4 — since və gələcəyə aid hərəkətlər',
    },

    // ── index: 16 — Dərs 4.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.1 — since ilə Present Perfect',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.1 — since ilə Present Perfect',
          content: 'since + keçmiş qeyri-müəyyən olan budaq cümlə, since then, since + illər/günlər verilərsə:\n\n✦ Baş cümlə → Present Perfect\n\nI haven\'t seen her since he came.\nShe has lived here since 2010.\nI have known him since Monday.\n\nQAYDA: since → "o vaxtdan bəri" mənası verir və baş cümlə Present Perfect tələb edir.',
        },
      ],
    },

    // ── index: 17 — Dərs 4.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.2 — Keçmişə nəzərən gələcək zaman (would)',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.2 — Keçmişə nəzərən gələcək zaman (would)',
          content: 'Baş cümlə keçmiş qeyri-müəyyən zamanda olarsa, budaq cümlədə gələcəyə aid hərəkətlər keçmişə nəzərən gələcək zamanda olur:\n\n✦ will → would\n✦ shall → would\n\nHe said that he would come.\n(said → keçmiş · would come → keçmişə nəzərən gələcək)\n\nShe told me that she would help.\nThey said they would arrive at 6.',
        },
      ],
    },

    // ── index: 18 — Mini-quiz 4 ───────────────────────────────
    [
      { en: 'I haven\'t seen her since he ___.', tr: 'came', wrong: 'comes' },
      { en: 'She ___ lived here since 2010.', tr: 'has', wrong: 'had' },
      { en: 'He said that he ___ come.', tr: 'would', wrong: 'will' },
      { en: 'She told me that she ___ help me.', tr: 'would', wrong: 'will' },
      { en: 'since bağlayıcısı ilə baş cümlə hansı zamanda olur?', tr: 'Present Perfect', wrong: 'Past Simple' },
      { en: 'I ___ known him since Monday.', tr: 'have', wrong: 'had' },
      { en: 'They said they ___ arrive at 6.', tr: 'would', wrong: 'will' },
    ],

    // ── index: 19 — Bölmə 5 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 5 — Uzlaşmanın pozulduğu hallar',
    },

    // ── index: 20 — Dərs 5.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.1 — Ümumi həqiqətlər və müqayisə budaq cümləsi',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 5.1 — Ümumi həqiqətlər və müqayisə budaq cümləsi',
          content: 'Uzlaşma POZULABİLƏR — 3 hal:\n\n1. Ümumi həqiqətlər:\n   The teacher said that the Earth goes around the Sun.\n   (goes → indiki zaman, dəyişmir — həmişə doğrudur)\n\n2. Müqayisə budaq cümlələri:\n   She skated better last year than you skate now.\n   (skate now → indiki zaman saxlanılır)\n\n3. Təyin budaq cümlələri:\n   I read the article which was published some days ago.\n   (zamanı dəqiq bilindiyindən dəyişmir)',
        },
      ],
    },

    // ── index: 21 — Dərs 5.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.2 — Bütün qaydaların xülasəsi',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 5.2 — Bütün qaydaların xülasəsi',
          content: 'XÜLASƏ CƏDVƏL:\n\nif/when/till/until → Present Simple + will/shall\nwhen (eyni vaxt) → Past Simple + Past Continuous\nwhile → Past Continuous + Past Simple/Cont.\nbefore/when (əvvəl) → Past Simple + Past Perfect\nafter → Past Perfect + Past Simple\nsince → Past Simple + Present Perfect\nbaş cümlə keçmiş → would (gələcək mənada)\n\nPOZULMA HALLAR:\n→ Ümumi həqiqətlər\n→ Müqayisə budaq cümlələri\n→ Təyin budaq cümlələri',
        },
      ],
    },

    // ── index: 22 — Mini-quiz 5 ───────────────────────────────
    [
      { en: 'The teacher said that the Earth ___ around the Sun.', tr: 'goes', wrong: 'went' },
      { en: 'She skated better last year than you ___ now.', tr: 'skate', wrong: 'skated' },
      { en: 'Ümumi həqiqətlərdə uzlaşma pozulurmu?', tr: 'Bəli, indiki zaman saxlanılır', wrong: 'Xeyr, həmişə keçmiş olur' },
      { en: 'I ___ seen her since he came.', tr: 'haven\'t', wrong: 'hadn\'t' },
      { en: 'He said that he ___ come tomorrow.', tr: 'would', wrong: 'will' },
      { en: 'Müqayisə budaq cümlələrində uzlaşma pozulurmu?', tr: 'Bəli', wrong: 'Xeyr' },
    ],

    // ── index: 23 — Test 2 ────────────────────────────────────
    // Xüsusi hallar + uzlaşmanın pozulması (Bölmə 4–5) · 12 sual
    [
      { en: 'I haven\'t seen him since he ___ here.', tr: 'came', wrong: 'comes' },
      { en: 'She ___ lived here since 2015.', tr: 'has', wrong: 'had' },
      { en: 'He said that he ___ finish it.', tr: 'would', wrong: 'will' },
      { en: 'The teacher said that water ___ at 100°C.', tr: 'boils', wrong: 'boiled' },
      { en: 'She danced better then than you ___ now.', tr: 'dance', wrong: 'danced' },
      { en: 'They told me they ___ be late.', tr: 'would', wrong: 'will' },
      { en: 'I ___ not spoken to her since Monday.', tr: 'have', wrong: 'had' },
      { en: 'He said the Sun ___ in the east.', tr: 'rises', wrong: 'rose' },
      { en: 'She said she ___ call me the next day.', tr: 'would', wrong: 'will' },
      { en: 'I ___ known her since we were children.', tr: 'have', wrong: 'had' },
      { en: 'He runs faster now than he ___ last year.', tr: 'ran', wrong: 'runs' },
      { en: 'They said they ___ arrive by noon.', tr: 'would', wrong: 'will' },
    ],

    // ── index: 24 — Final Test ────────────────────────────────
    // Sequence of Tenses tam test · 20+ sual
    [
      { en: 'I heard that he ___ ill.', tr: 'was', wrong: 'is' },
      { en: 'If it rains, we ___ stay home.', tr: 'shall', wrong: 'would' },
      { en: 'When I came, she ___ dinner.', tr: 'was cooking', wrong: 'cooked' },
      { en: 'While he ___ sleeping, the phone rang.', tr: 'was', wrong: 'is' },
      { en: 'Before she came, I ___ the dishes.', tr: 'had washed', wrong: 'washed' },
      { en: 'After he ___ eaten, he left.', tr: 'had', wrong: 'has' },
      { en: 'As soon as she ___, call me.', tr: 'arrives', wrong: 'will arrive' },
      { en: 'She said that she ___ help us.', tr: 'would', wrong: 'will' },
      { en: 'I haven\'t seen him since he ___.', tr: 'left', wrong: 'leaves' },
      { en: 'She ___ worked here since 2018.', tr: 'has', wrong: 'had' },
      { en: 'While I ___ reading, he came in.', tr: 'was', wrong: 'am' },
      { en: 'When they arrived, we ___ already started.', tr: 'had', wrong: 'have' },
      { en: 'The teacher said the Earth ___ round.', tr: 'is', wrong: 'was' },
      { en: 'Till he ___, I will not leave.', tr: 'comes', wrong: 'will come' },
      { en: 'After my mother ___ slept, I came.', tr: 'had', wrong: 'has' },
      { en: 'He skates better now than he ___ last year.', tr: 'skated', wrong: 'skates' },
      { en: 'She told me she ___ be there.', tr: 'would', wrong: 'will' },
      { en: 'When my father came, I ___ my homework.', tr: 'was doing', wrong: 'had done' },
      { en: 'Before he called, I ___ asleep.', tr: 'had fallen', wrong: 'fell' },
      { en: 'While they ___, we arrived.', tr: 'were talking', wrong: 'talked' },
      { en: 'I ___ not seen her since Monday.', tr: 'have', wrong: 'had' },
      { en: 'She said that she ___ come the next day.', tr: 'would', wrong: 'will' },
    ],

  ],
};


const ADJECTIVES_LEVEL = {
  id: 'adjectives',
  name: 'ADJECTIVES',
  icon: '<i class="ti ti-palette"></i>',
  color: '#F0ABFC',

  quizzes: [

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 1 — Sifətin növləri və şəkilçiləri              ║
    // ══════════════════════════════════════════════════════════

    // ── index: 0 — Qrup 1 bölücüsü ───────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 1 — Sifətin növləri və şəkilçiləri',
    },

    // ── index: 1 — Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 1 — Sifət nədir və növləri',
    },

    // ── index: 2 — Dərs 1.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.1 — Sifət nədir?',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 1.1 — Sifət nədir?',
          content: 'Sifət şəxs və ya əşyanın əlamətini, keyfiyyətini bildirir.\n\n✦ a clever boy\n✦ a long street\n✦ green leaves\n\nSifət aid olduğu isimdən əvvəl gəlir.\nİsim hansı halda, cinsdə, miqdarda olsun — sifət bir formada qalır.\n\n✦ an interesting book\n✦ five interesting books\n\nSifət zərflə təyin oluna bilir:\n✦ The task was too difficult.',
        },
      ],
    },

    // ── index: 3 — Dərs 1.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.2 — Sifətin növləri: sadə, düzəltmə, mürəkkəb',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 1.2 — Sifətin növləri',
          content: '1. Sadə sifətlər:\n   long, short, black, cool\n\n2. Düzəltmə sifətlər — şəkilçi ilə düzəlir:\n   -less → hopeless\n   -like → manlike, womanlike\n   -ish → boyish, childish\n   -ed → blue-eyed, lion-hearted\n   -ful → careful, useful\n   -able/-ible → eatable, responsible\n   -ous → famous, dangerous\n   -y → windy, cloudy, foggy\n   -ly → weekly, daily, monthly\n   -ic → patriotic, cosmic\n   -ive → active, passive\n   -en → golden, wooden\n\n3. Mürəkkəb sifətlər:\n   blue-eyed, snow-white, peace-loving',
        },
      ],
    },

    // ── index: 4 — Dərs 1.3 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 1.3 — Əsli və nisbi sifətlər',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 1.3 — Əsli və nisbi sifətlər',
          content: 'Sifətlər məna baxımından 2 qrupa bölünür:\n\n1. Əsli sifətlər — kökdən sifətlərdir:\n   long, short, big, clever\n\n2. Nisbi sifətlər — "-en" şəkilçisi vasitəsilə düzəlir:\n   gold → golden\n   wool → woolen\n   wood → wooden\n   silk → silken\n\nQAYDA: Əsli sifətlərin dərəcəsi var.\nNisbi sifətlərin dərəcəsi olmur.',
        },
      ],
    },

    // ── index: 5 — Mini-quiz 1 ────────────────────────────────
    [
      { en: '"hopeless" sözündəki şəkilçi hansıdır?', tr: '-less', wrong: '-ful' },
      { en: '"golden" sözü hansı sifət növünə aiddir?', tr: 'Nisbi sifət', wrong: 'Əsli sifət' },
      { en: '"careful" sözündəki şəkilçi hansıdır?', tr: '-ful', wrong: '-less' },
      { en: '"blue-eyed" hansı növ sifətdir?', tr: 'Mürəkkəb', wrong: 'Sadə' },
      { en: '"dangerous" sözündəki şəkilçi hansıdır?', tr: '-ous', wrong: '-ive' },
      { en: 'Sifət isimdən ___ gəlir.', tr: 'əvvəl', wrong: 'sonra' },
      { en: '"windy" sözündəki şəkilçi hansıdır?', tr: '-y', wrong: '-ly' },
      { en: '"weekly" sözündəki şəkilçi hansıdır?', tr: '-ly', wrong: '-y' },
      { en: '"wooden" sözü hansı şəkilçi ilə düzəlib?', tr: '-en', wrong: '-ous' },
      { en: '"active" sözündəki şəkilçi hansıdır?', tr: '-ive', wrong: '-ic' },
    ],

    // ── index: 6 — Bölmə 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 2 — Sifətin dərəcələri',
    },

    // ── index: 7 — Dərs 2.1 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.1 — Sintetik və analitik yol',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.1 — Sintetik və analitik yol',
          content: 'Sifətin 3 dərəcəsi var:\n1. Adi dərəcə (positive)\n2. Müqayisə dərəcəsi (comparative)\n3. Üstünlük dərəcəsi (superlative)\n\nSİNTETİK YOL (şəkilçi ilə):\n→ Birhecalı sifətlər\n→ -er, -e, -ow, -fle, -y ilə bitən ikihecalı sifətlər\nlong → longer → longest\nshort → shorter → shortest\nhappy → happier → happiest\n\nANALİTİK YOL (köməkçi söz ilə):\n→ Çoxhecalı sifətlər\n→ Digər ikihecalı sifətlər\ninteresting → more interesting → most interesting',
        },
      ],
    },

    // ── index: 8 — Dərs 2.2 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.2 — Adi dərəcə: as…as, not so…as',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.2 — Adi dərəcə: as…as, not so…as',
          content: 'Adi dərəcədə sifət morfoloji formaya malik olmur.\n\nas … as → eyni dərəcəli keyfiyyət:\n✦ My room is as large as yours.\n   (Mənim otağım səninki kimi böyükdür)\n\nnot so … as / not as … as → qeyri-bərabər keyfiyyət:\n✦ My brother is not so strong as yours.\n   (Mənim qardaşım sənin kimi güclü deyil)\n\nQAYDA: as…as, not so…as, too, very, quite, rather — sifət ADİ dərəcədə olur.',
        },
      ],
    },

    // ── index: 9 — Dərs 2.3 ───────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.3 — Müqayisə dərəcəsi: than, much',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.3 — Müqayisə dərəcəsi: than, much',
          content: 'Müqayisə dərəcəsi bir şəxsin/əşyanın digərindən üstün olduğunu bildirir.\nBağlayıcı: than (-dan/-dən, daha)\n\n✦ My room is larger than yours.\n✦ This question is more important than that one.\n\n"much" ilə qüvvətləndirmə:\n✦ This table is much thinner than that one.\n✦ This book is much more interesting than that one.\n\nQAYDA: than, much, a little → sifət MÜQAYİSƏ dərəcəsində olur.\nMüqayisə dərəcəsindən sonra tək sayıla bilən isim gələrsə → a/an işlənir.',
        },
      ],
    },

    // ── index: 10 — Dərs 2.4 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 2.4 — Üstünlük dərəcəsi: the + est / most',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 2.4 — Üstünlük dərəcəsi',
          content: 'Üstünlük dərəcəsi əşya/şəxsin öz sinfindəki ən yüksək keyfiyyətini bildirir.\n\n✦ Ali is the strongest boy in our class.\n✦ My grandfather is the oldest man in the village.\n✦ My brother is the cleverest of all the boys at school.\n\nQAYDA: Üstünlük dərəcəsinin qarşısında həmişə "the" işlənir.\n\nTanıma əlaməti — cümlədə bunlar varsa → ÜSTÜNLÜK dərəcəsi:\nthe · ever · of all · which of · in the world\nin class · at school · in the family · among boys',
        },
      ],
    },

    // ── index: 11 — Mini-quiz 2 ───────────────────────────────
    [
      { en: '"happy" sifətinin müqayisə dərəcəsi necədir?', tr: 'happier', wrong: 'more happy' },
      { en: '"interesting" sifətinin üstünlük dərəcəsi necədir?', tr: 'most interesting', wrong: 'interestingest' },
      { en: 'My room is as large ___ yours.', tr: 'as', wrong: 'than' },
      { en: 'This book is ___ more interesting than that one.', tr: 'much', wrong: 'very' },
      { en: 'Ali is ___ strongest boy in our class.', tr: 'the', wrong: 'a' },
      { en: 'Cümlədə "than" varsa sifət hansı dərəcədə olur?', tr: 'Müqayisə dərəcəsi', wrong: 'Üstünlük dərəcəsi' },
      { en: 'Cümlədə "of all" varsa sifət hansı dərəcədə olur?', tr: 'Üstünlük dərəcəsi', wrong: 'Müqayisə dərəcəsi' },
      { en: '"long" sifətinin sintetik yolla üstünlük dərəcəsi necədir?', tr: 'longest', wrong: 'most long' },
      { en: 'My brother is not so strong ___ yours.', tr: 'as', wrong: 'than' },
      { en: 'Cümlədə "very" varsa sifət hansı dərəcədə olur?', tr: 'Adi dərəcə', wrong: 'Müqayisə dərəcəsi' },
    ],

    // ── index: 12 — Test 1 ────────────────────────────────────
    // Sifətin növləri + dərəcələr (Bölmə 1–2) · 12 sual
    [
      { en: '"useful" sözündəki şəkilçi hansıdır?', tr: '-ful', wrong: '-less' },
      { en: '"short" sifətinin müqayisə dərəcəsi necədir?', tr: 'shorter', wrong: 'more short' },
      { en: 'She is ___ clever as her sister.', tr: 'as', wrong: 'so' },
      { en: 'This is ___ longest street in the city.', tr: 'the', wrong: 'a' },
      { en: '"responsible" sözündəki şəkilçi hansıdır?', tr: '-ible', wrong: '-ful' },
      { en: 'He is much ___ than his brother.', tr: 'stronger', wrong: 'strong' },
      { en: '"wooden" hansı sifət növünə aiddir?', tr: 'Nisbi sifət', wrong: 'Əsli sifət' },
      { en: 'Cümlədə "in the world" varsa sifət hansı dərəcədə olur?', tr: 'Üstünlük dərəcəsi', wrong: 'Müqayisə dərəcəsi' },
      { en: '"patriotic" sözündəki şəkilçi hansıdır?', tr: '-ic', wrong: '-ive' },
      { en: 'My room is ___ larger than yours.', tr: 'much', wrong: 'very' },
      { en: '"childish" sözündəki şəkilçi hansıdır?', tr: '-ish', wrong: '-ly' },
      { en: '"interesting" sifəti neçə hecalıdır və dərəcəsi necə düzəlir?', tr: 'Çoxhecalı — analitik yol', wrong: 'Birhecalı — sintetik yol' },
    ],

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 2 — İstisnalar və xüsusi formalar               ║
    // ══════════════════════════════════════════════════════════

    // ── index: 13 — Qrup 2 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Qrup 2 — Qeyri-düzgün formalar və xüsusi sifətlər',
    },

    // ── index: 14 — Bölmə 3 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 3 — Qeyri-düzgün müqayisə formaları',
    },

    // ── index: 15 — Dərs 3.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.1 — Kökdən dəyişən sifətlər',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 3.1 — Kökdən dəyişən sifətlər',
          content: 'Bəzi sifətlərin müqayisə və üstünlük dərəcəsi kökdən dəyişir:\n\ngood  → better  → best\nbad   → worse   → worst\nlittle → less   → least\nmany  ┐\nmuch  ┘ → more  → most\n\n✦ She is a good student. (adi)\n✦ She is better than me. (müqayisə)\n✦ She is the best in class. (üstünlük)',
        },
      ],
    },

    // ── index: 16 — Dərs 3.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 3.2 — İki formalı sifətlər: far, near, old, late, little',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 3.2 — İki formalı sifətlər',
          content: 'Bir neçə sifətin iki müqayisə forması var:\n\nfar   → farther/further → farthest/furthest\nnear  → nearer → nearest / next\nold   → older/elder → oldest/eldest\nlate  → later → last / latter → last\n\nfarther/farthest = məsafə\nfurther/furthest = məsafə VƏ "sonra, daha"\nnext = sıra ilə (the next year)\nnearest = ən yaxın məsafə\nelder/eldest = eyni ailədir (böyük qardaş)\nolder/oldest = yaş (ümumi)\nlatter = ikisindən axırıncısı\nlast = sonuncu, keçən',
        },
      ],
    },

    // ── index: 17 — Mini-quiz 3 ───────────────────────────────
    [
      { en: '"good" sifətinin müqayisə dərəcəsi necədir?', tr: 'better', wrong: 'gooder' },
      { en: '"bad" sifətinin üstünlük dərəcəsi necədir?', tr: 'worst', wrong: 'baddest' },
      { en: 'My elder brother lives in Moscow. "elder" burada nə mənadadır?', tr: 'Böyük (eyni ailə)', wrong: 'Daha yaşlı (ümumi)' },
      { en: 'The shop is at the ___ end of the street. (məsafə)', tr: 'farthest', wrong: 'furthest' },
      { en: 'I am ___ than my friend. (yaş, ümumi)', tr: 'older', wrong: 'elder' },
      { en: '"many" sifətinin müqayisə dərəcəsi necədir?', tr: 'more', wrong: 'manier' },
      { en: 'The ___ year he entered the institute. (sıra ilə)', tr: 'next', wrong: 'nearest' },
      { en: 'QEYD: "elder" sifətindən sonra hansı bağlayıcı işlənmir?', tr: 'than', wrong: 'as' },
    ],

    // ── index: 18 — Bölmə 4 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 4 — Xüsusi sifətlər: farther/further, elder/older, latter/last',
    },

    // ── index: 19 — Dərs 4.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.1 — farther/further, nearest/next fərqi',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.1 — farther/further, nearest/next fərqi',
          content: 'farther / farthest → məsafə:\n✦ The shop is at the farthest end of the street.\n\nfurther / furthest → məsafə + "sonra, daha":\n✦ She refused to go any further.\n✦ What happened further? (Sonra nə baş verdi?)\n✦ Further discussion is not necessary. (Daha müzakirə lazım deyil)\n\nnearest → ən yaxın məsafə:\n✦ It is the nearest way to our village.\n\nnext → sıra ilə (o biri, gələn):\n✦ The next year he entered the institute.\n✦ I shall go to Moscow next year.',
        },
      ],
    },

    // ── index: 20 — Dərs 4.2 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.2 — elder/older, latter/last, later fərqi',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.2 — elder/older, latter/last, later fərqi',
          content: 'older/oldest → ümumi yaş:\n✦ I am older than my friend.\n\nelder/eldest → eyni ailə üzvləri, yüksək rütbə:\n✦ My elder brother lives in Moscow.\n✦ She was the eldest child of the family.\n⚠️ elder-dən sonra "than" işlənmir!\n\nlater (than) → zamanla əlaqədar (gec):\n✦ It was later than I expected.\n\nlatter → sıra bildirir (ikisindən axırıncısı):\n✦ Tom and Brown are students. The latter studies here.\n\nlast → sonuncu, keçən:\n✦ We went to the theatre last week.',
        },
      ],
    },

    // ── index: 21 — Mini-quiz 4 ───────────────────────────────
    [
      { en: '"What happened ___?" (Sonra nə baş verdi?)', tr: 'further', wrong: 'farther' },
      { en: 'She was ___ child of the family. (ən böyük — ailə)', tr: 'the eldest', wrong: 'the oldest' },
      { en: 'It was ___ than I expected. (zamanla — gec)', tr: 'later', wrong: 'latter' },
      { en: 'Tom and Brown are students. ___ studies here. (ikisindən axırıncısı)', tr: 'The latter', wrong: 'The last' },
      { en: 'We went to the theatre ___ week. (keçən)', tr: 'last', wrong: 'latter' },
      { en: 'It is ___ way to our village. (ən yaxın məsafə)', tr: 'the nearest', wrong: 'the next' },
      { en: 'I am ___ than my friend. (ümumi yaş)', tr: 'older', wrong: 'elder' },
    ],

    // ── index: 22 — Test 2 ────────────────────────────────────
    // Qeyri-düzgün formalar + xüsusi sifətlər (Bölmə 3–4) · 12 sual
    [
      { en: '"good" sifətinin üstünlük dərəcəsi necədir?', tr: 'best', wrong: 'goodest' },
      { en: '"bad" sifətinin müqayisə dərəcəsi necədir?', tr: 'worse', wrong: 'badder' },
      { en: 'My ___ brother lives in Baku. (böyük — eyni ailə)', tr: 'elder', wrong: 'older' },
      { en: 'I am ___ than my friend. (yaş — ümumi)', tr: 'older', wrong: 'elder' },
      { en: '___ discussion is not necessary. (daha, bundan əlavə)', tr: 'Further', wrong: 'Farther' },
      { en: 'The shop is at ___ end of the street. (məsafə — ən uzaq)', tr: 'the farthest', wrong: 'the furthest' },
      { en: 'It was ___ than I expected.', tr: 'later', wrong: 'latter' },
      { en: '"little" sifətinin müqayisə dərəcəsi necədir?', tr: 'less', wrong: 'littler' },
      { en: 'The ___ year he could enter the institute. (sıra — o biri il)', tr: 'next', wrong: 'nearest' },
      { en: 'She was ___ child of the family.', tr: 'the eldest', wrong: 'the oldest' },
      { en: '"much" sifətinin üstünlük dərəcəsi necədir?', tr: 'most', wrong: 'muchest' },
      { en: 'We went to the theatre ___ week.', tr: 'last', wrong: 'latter' },
    ],

    // ── index: 23 — Final Test ────────────────────────────────
    // Adjectives tam test · 20+ sual
    [
      { en: '"hopeless" sözündəki şəkilçi hansıdır?', tr: '-less', wrong: '-ful' },
      { en: '"golden" hansı sifət növünə aiddir?', tr: 'Nisbi sifət', wrong: 'Əsli sifət' },
      { en: '"long" sifətinin müqayisə dərəcəsi necədir?', tr: 'longer', wrong: 'more long' },
      { en: 'My room is as large ___ yours.', tr: 'as', wrong: 'than' },
      { en: 'Ali is ___ strongest boy in our class.', tr: 'the', wrong: 'a' },
      { en: '"good" sifətinin müqayisə dərəcəsi necədir?', tr: 'better', wrong: 'gooder' },
      { en: '"bad" sifətinin üstünlük dərəcəsi necədir?', tr: 'worst', wrong: 'baddest' },
      { en: 'Cümlədə "than" varsa sifət hansı dərəcədə olur?', tr: 'Müqayisə dərəcəsi', wrong: 'Üstünlük dərəcəsi' },
      { en: 'Cümlədə "of all" varsa sifət hansı dərəcədə olur?', tr: 'Üstünlük dərəcəsi', wrong: 'Müqayisə dərəcəsi' },
      { en: '"interesting" sifəti analitik yolla düzəlir. Müqayisə dərəcəsi necədir?', tr: 'more interesting', wrong: 'interestinger' },
      { en: 'This book is ___ more interesting than that one.', tr: 'much', wrong: 'very' },
      { en: 'My ___ brother lives in Moscow. (eyni ailə)', tr: 'elder', wrong: 'older' },
      { en: 'I am ___ than my friend. (ümumi yaş)', tr: 'older', wrong: 'elder' },
      { en: 'The shop is at the ___ end of the street. (məsafə)', tr: 'farthest', wrong: 'furthest' },
      { en: '"Further discussion is not necessary." — "further" burada nə mənadadır?', tr: 'Daha, bundan əlavə', wrong: 'Daha uzaq məsafə' },
      { en: 'It was ___ than I expected. (zamanla)', tr: 'later', wrong: 'latter' },
      { en: 'Tom and Brown are here. ___ is my friend. (ikisindən axırıncısı)', tr: 'The latter', wrong: 'The last' },
      { en: 'We went to the cinema ___ week.', tr: 'last', wrong: 'latter' },
      { en: '"little" sifətinin üstünlük dərəcəsi necədir?', tr: 'least', wrong: 'littlest' },
      { en: 'It is ___ way to our village. (ən yaxın məsafə)', tr: 'the nearest', wrong: 'the next' },
      { en: 'She was ___ child of the family. (ən böyük — ailə)', tr: 'the eldest', wrong: 'the oldest' },
      { en: '"childish" sözündəki şəkilçi hansıdır?', tr: '-ish', wrong: '-ic' },
    ],

  ],
};

// ╔══════════════════════════════════════════════════════════╗
// ║  WORDPATH — YENİ QRAMMATİKA BÖLÜMLƏR                    ║
// ║  Aşağıdakı obyektləri LEVELS massivə əlavə et           ║
// ╚══════════════════════════════════════════════════════════╝


// ── 7. PRONOUN (ƏVƏZLİK) ────────────────────────────────────
const PRONOUN_LEVEL = {
  id: 'pronoun',
  name: 'PRONOUN — ƏVƏZLİK',
  icon: '<i class="ti ti-user"></i>',
  color: '#A5B4FC',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Şəxs & Yiyəlik əvəzlikləri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Qayıdış & İşarə əvəzlikləri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Sual & Nisbi əvəzliklər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 4 — Təyin & Qeyri-müəyyən əvəzliklər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 5 — İnkar əvəzlikləri',
      cards: [],
    },
  ],
};

// ── 8. ARTICLE (ARTİKL) ─────────────────────────────────────
const ARTICLE_LEVEL = {
  id: 'article',
  name: 'ARTICLE — ARTİKL',
  icon: '<i class="ti ti-tag"></i>',
  color: '#FCD34D',

  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — A / An — qeyri-müəyyən artikl',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — The — müəyyən artikl',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Artikl işlənməyən hallar',
      cards: [],
    },
  ],
};

// ── 9. QUESTIONS (SUAL CÜMLƏLƏRİ) ──────────────────────────
const QUESTIONS_LEVEL = {
  id: 'questions',
  name: 'QUESTIONS — SUALLAR',
  icon: '<i class="ti ti-help-circle"></i>',
  color: '#7DD3FC',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Ümumi & Xüsusi suallar',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Wh- sual sözləri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Seçmə & Ayrılan suallar',
      cards: [],
    },
  ],
};

// ── 10. MODAL VERBS ──────────────────────────────────────────
const MODAL_VERBS_LEVEL = {
  id: 'modal_verbs',
  name: 'MODAL VERBS',
  icon: '<i class="ti ti-key"></i>',
  color: '#86EFAC',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Can / Could / To be able to',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — May / Might',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Must / Have to',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 4 — Should / Ought to / Need',
      cards: [],
    },
  ],
};

// ── 11. PREPOSITIONS (SÖZÖNLƏRİ) ────────────────────────────
const PREPOSITIONS_LEVEL = {
  id: 'prepositions',
  name: 'PREPOSITIONS — SÖZÖNLƏRİ',
  icon: '<i class="ti ti-map-pin"></i>',
  color: '#FDBA74',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Yer bildirən sözönlər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Zaman bildirən sözönlər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — İstiqamət bildirən sözönlər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 4 — Mücərrəd əlaqə bildirən sözönlər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 5 — Sözönlü fellər & sabit ifadələr',
      cards: [],
    },
  ],
};

// ── 12. ADVERB (ZƏRF) ───────────────────────────────────────
const ADVERB_LEVEL = {
  id: 'adverb',
  name: 'ADVERB — ZƏRF',
  icon: '<i class="ti ti-trending-up"></i>',
  color: '#E879F9',

  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Zərfin növləri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Zərfin dərəcələri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Zərfin cümlədə yeri',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 4 — Too / Also / Either / Else / Only / Just',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 5 — Make and Do fərqi',
      cards: [],
    },
  ],
};

// ── 13. COMPLEX OBJECT ──────────────────────────────────────
const COMPLEX_OBJECT_LEVEL = {
  id: 'complex_object',
  name: 'COMPLEX OBJECT',
  icon: '<i class="ti ti-stack"></i>',
  color: '#60A5FA',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — to + məsdər ilə işlənən fellər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Məsdərsiz işlənən fellər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Participle I ilə işlənmə',
      cards: [],
    },
  ],
};

// ── 14. SUBJECT-VERB AGREEMENT ───────────────────────────────
const SUBJECT_VERB_AGREEMENT_LEVEL = {
  id: 'subject_verb_agreement',
  name: 'SUBJECT-VERB AGREEMENT',
  icon: '<i class="ti ti-scale"></i>',
  color: '#34D399',

  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — And / Either...or / Neither...nor ilə',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — With / Together with & Qeyri-müəyyən əvəzliklər',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Ölçü, vaxt & There is/are',
      cards: [],
    },
  ],
};

// ── 15. THE IMPERATIVE (ƏMR CÜMLƏSİ) ────────────────────────
const IMPERATIVE_LEVEL = {
  id: 'imperative',
  name: 'THE IMPERATIVE — ƏMR',
  icon: '<i class="ti ti-speakerphone"></i>',
  color: '#FDA4AF',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — Əmr cümləsinin quruluşu',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — Do ilə qüvvətləndirmə & İnkar forma',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — Let ilə I və III şəxs',
      cards: [],
    },
  ],
};

// ── 16. EXCLAMATORY SENTENCES (NİDA CÜMLƏSİ) ────────────────
const EXCLAMATORY_LEVEL = {
  id: 'exclamatory',
  name: 'EXCLAMATORY SENTENCES',
  icon: '<i class="ti ti-exclamation-mark"></i>',
  color: '#FDE68A',
  quizzes: [
    {
      type: 'grammar_lesson',
      title: 'Dərs 1 — What ilə nida cümləsi',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 2 — How ilə nida cümləsi',
      cards: [],
    },
    {
      type: 'grammar_lesson',
      title: 'Dərs 3 — What vs How — fərqlər',
      cards: [],
    },
  ],
};

KIDS_GRAMMAR_LEVELS.push(VERBS_LEVEL);
KIDS_GRAMMAR_LEVELS.push(PASSIVE_LEVEL);
KIDS_GRAMMAR_LEVELS.push(INDIRECT_SPEECH_LEVEL);
KIDS_GRAMMAR_LEVELS.push(ADJECTIVES_LEVEL);
KIDS_GRAMMAR_LEVELS.push(SEQUENCE_TENSES_LEVEL);
KIDS_GRAMMAR_LEVELS.push(PRONOUN_LEVEL);
KIDS_GRAMMAR_LEVELS.push(ARTICLE_LEVEL);
KIDS_GRAMMAR_LEVELS.push(QUESTIONS_LEVEL);
KIDS_GRAMMAR_LEVELS.push(MODAL_VERBS_LEVEL);
KIDS_GRAMMAR_LEVELS.push(PREPOSITIONS_LEVEL);
KIDS_GRAMMAR_LEVELS.push(ADVERB_LEVEL);
KIDS_GRAMMAR_LEVELS.push(COMPLEX_OBJECT_LEVEL);
KIDS_GRAMMAR_LEVELS.push(SUBJECT_VERB_AGREEMENT_LEVEL);
KIDS_GRAMMAR_LEVELS.push(IMPERATIVE_LEVEL);
KIDS_GRAMMAR_LEVELS.push(EXCLAMATORY_LEVEL);
window.KIDS_GRAMMAR_LEVELS = KIDS_GRAMMAR_LEVELS;
// LEVELS-ə birləşdir
KIDS_GRAMMAR_LEVELS.forEach(lvl => LEVELS.push(lvl));
