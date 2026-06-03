//  WORDPATH — KIDS & GRAMMAR DATA
// ============================================================
// Yeni Kids format:
//   { pic: 1, correct: 1, wrong: 3 }
//   pic     → kids/{n}.png rəsmi
//   correct → KIDS_WORDS[n] — düzgün cavab
//   wrong   → KIDS_WORDS[n] — yanlış seçim
//
// ID — SÖZ XƏRİTƏSİ (KIDS_WORDS):
//  1:bear        2:bee         3:bird        4:cat
//  5:chicken     6:cow         7:crocodile   8:dog
//  9:donkey     10:duck       11:elephant   12:fish
// 13:frog       14:giraffe    15:goat       16:hippo
// 17:horse      18:jellyfish  19:lizard     20:monkey
// 21:mouse      22:polar bear 23:sheep      24:snake
// 25:spider     26:tiger      27:zebra
// 28:apple      29:banana     30:bean       31:carrot
// 32:coconut    33:grape      34:kiwi       35:lemon
// 36:lime       37:mango      38:onion      39:orange
// 40:pea        41:pear       42:pineapple  43:potato
// 44:tomato     45:watermelon
// 46:bread      47:burger     48:cake       49:candy
// 50:chips      51:chocolate  52:egg        53:ice cream
// 54:juice      55:lemonade   56:meat       57:meatballs
// 58:milk       59:pie        60:rice       61:sausage
// 62:water
// 63:black      64:blue       65:brown      66:gray
// 67:green      68:orange     69:pink       70:purple
// 71:red        72:white      73:yellow
// 74:baby       75:brother    76:cousin     77:father
// 78:grandfather 79:grandmother 80:mother   81:sister
// 82:arm        83:ear        84:eye        85:face
// 86:foot       87:hair       88:hand       89:head
// 90:leg        91:mouth      92:nose       93:tail
// 94:baseball cap 95:boots    96:dress      97:glasses
// 98:hat        99:jacket    100:jeans     101:shirt
//102:shoe      103:shorts    104:skirt     105:sock
//106:T-shirt   107:trousers
//108:apartment 109:bathroom  110:bedroom   111:dining room
//112:garden    113:hall      114:house     115:kitchen
//116:living room
//117:armchair  118:bath      119:bed       120:bookcase
//121:box       122:chair     123:clock     124:cupboard
//125:desk      126:door      127:floor     128:lamp
//129:mat       130:mirror    131:rug       132:sofa
//133:table     134:wall      135:window
//136:badminton 137:baseball  138:basketball 139:board game
//140:football  141:hockey    142:skateboarding 143:swimming
//144:table tennis 145:tennis
//146:bike      147:boat      148:bus       149:car
//150:helicopter 151:motorbike 152:plane    153:ship
//154:train     155:truck
//156:beach     157:flower    158:sea       159:shell
//160:sun       161:tree
//162:ball      163:balloon   164:bat       165:camera
//166:doll      167:guitar    168:kite      169:music
//170:painting  171:piano     172:radio     173:robot
//174:teddy bear 175:toy
//176:bookshop  177:park      178:playground 179:school
//180:shop      181:street    182:zoo
//183:angry     184:beautiful 185:big       186:clean
//187:dirty     188:funny     189:good      190:happy
//191:long      192:new       193:nice      194:old
//195:sad       196:scary     197:short     198:silly
//199:small     200:ugly      201:young
//202:afternoon 203:birthday  204:day       205:evening
//206:morning   207:night     208:today     209:year
//210:alien     211:boy       212:child     213:girl
//214:man       215:monster   216:person    217:woman
//218:bounce    219:catch     220:clap      221:draw
//222:drink     223:eat       224:fly       225:jump
//226:kick      227:paint     228:run       229:sing
//230:sit       231:sleep     232:smile     233:swim
//234:throw     235:walk      236:wave      237:write

const KIDS_WORDS = {
    1: 'bear',        2: 'bee',         3: 'bird',        4: 'cat',
    5: 'chicken',     6: 'cow',         7: 'crocodile',   8: 'dog',
    9: 'donkey',     10: 'duck',       11: 'elephant',   12: 'fish',
   13: 'frog',       14: 'giraffe',    15: 'goat',       16: 'hippo',
   17: 'horse',      18: 'jellyfish',  19: 'lizard',     20: 'monkey',
   21: 'mouse',      22: 'polar bear', 23: 'sheep',      24: 'snake',
   25: 'spider',     26: 'tiger',      27: 'zebra',
   28: 'apple',      29: 'banana',     30: 'bean',       31: 'carrot',
   32: 'coconut',    33: 'grape',      34: 'kiwi',       35: 'lemon',
   36: 'lime',       37: 'mango',      38: 'onion',      39: 'orange',
   40: 'pea',        41: 'pear',       42: 'pineapple',  43: 'potato',
   44: 'tomato',     45: 'watermelon',
   46: 'bread',      47: 'burger',     48: 'cake',       49: 'candy',
   50: 'chips',      51: 'chocolate',  52: 'egg',        53: 'ice cream',
   54: 'juice',      55: 'lemonade',   56: 'meat',       57: 'meatballs',
   58: 'milk',       59: 'pie',        60: 'rice',       61: 'sausage',
   62: 'water',
   63: 'black',      64: 'blue',       65: 'brown',      66: 'gray',
   67: 'green',      68: 'orange',     69: 'pink',       70: 'purple',
   71: 'red',        72: 'white',      73: 'yellow',
   74: 'baby',       75: 'brother',    76: 'cousin',     77: 'father',
   78: 'grandfather',79: 'grandmother',80: 'mother',     81: 'sister',
   82: 'arm',        83: 'ear',        84: 'eye',        85: 'face',
   86: 'foot',       87: 'hair',       88: 'hand',       89: 'head',
   90: 'leg',        91: 'mouth',      92: 'nose',       93: 'tail',
   94: 'baseball cap',95: 'boots',    96: 'dress',       97: 'glasses',
   98: 'hat',        99: 'jacket',    100: 'jeans',     101: 'shirt',
  102: 'shoe',      103: 'shorts',    104: 'skirt',     105: 'sock',
  106: 'T-shirt',   107: 'trousers',
  108: 'apartment', 109: 'bathroom',  110: 'bedroom',   111: 'dining room',
  112: 'garden',    113: 'hall',      114: 'house',     115: 'kitchen',
  116: 'living room',
  117: 'armchair',  118: 'bath',      119: 'bed',       120: 'bookcase',
  121: 'box',       122: 'chair',     123: 'clock',     124: 'cupboard',
  125: 'desk',      126: 'door',      127: 'floor',     128: 'lamp',
  129: 'mat',       130: 'mirror',    131: 'rug',       132: 'sofa',
  133: 'table',     134: 'wall',      135: 'window',
  136: 'badminton', 137: 'baseball',  138: 'basketball',139: 'board game',
  140: 'football',  141: 'hockey',    142: 'skateboarding',143: 'swimming',
  144: 'table tennis',145: 'tennis',
  146: 'bike',      147: 'boat',      148: 'bus',       149: 'car',
  150: 'helicopter',151: 'motorbike', 152: 'plane',     153: 'ship',
  154: 'train',     155: 'truck',
  156: 'beach',     157: 'flower',    158: 'sea',       159: 'shell',
  160: 'sun',       161: 'tree',
  162: 'ball',      163: 'balloon',   164: 'bat',       165: 'camera',
  166: 'doll',      167: 'guitar',    168: 'kite',      169: 'music',
  170: 'painting',  171: 'piano',     172: 'radio',     173: 'robot',
  174: 'teddy bear',175: 'toy',
  176: 'bookshop',  177: 'park',      178: 'playground',179: 'school',
  180: 'shop',      181: 'street',    182: 'zoo',
  183: 'angry',     184: 'beautiful', 185: 'big',       186: 'clean',
  187: 'dirty',     188: 'funny',     189: 'good',      190: 'happy',
  191: 'long',      192: 'new',       193: 'nice',      194: 'old',
  195: 'sad',       196: 'scary',     197: 'short',     198: 'silly',
  199: 'small',     200: 'ugly',      201: 'young',
  202: 'afternoon', 203: 'birthday',  204: 'day',       205: 'evening',
  206: 'morning',   207: 'night',     208: 'today',     209: 'year',
  210: 'alien',     211: 'boy',       212: 'child',     213: 'girl',
  214: 'man',       215: 'monster',   216: 'person',    217: 'woman',
  218: 'bounce',    219: 'catch',     220: 'clap',      221: 'draw',
  222: 'drink',     223: 'eat',       224: 'fly',       225: 'jump',
  226: 'kick',      227: 'paint',     228: 'run',       229: 'sing',
  230: 'sit',       231: 'sleep',     232: 'smile',     233: 'swim',
  234: 'throw',     235: 'walk',      236: 'wave',      237: 'write',
};

const KIDS_GRAMMAR_LEVELS = [
  {
    id: 'kids',
    name: 'KIDS',
    icon: '🧒',
    color: '#E91E8C',
    quizzes: [

      // ── Quiz 1 · Animals (27 söz | id 1–27) ──────────────────────────
      [
        { pic:  1, correct:  1, wrong:  3 },  //  1:bear      vs  3:bird
        { pic:  2, correct:  2, wrong: 25 },  //  2:bee       vs 25:spider
        { pic:  3, correct:  3, wrong:  2 },  //  3:bird      vs  2:bee
        { pic:  4, correct:  4, wrong:  8 },  //  4:cat       vs  8:dog
        { pic:  5, correct:  5, wrong: 10 },  //  5:chicken   vs 10:duck
        { pic:  6, correct:  6, wrong: 17 },  //  6:cow       vs 17:horse
        { pic:  7, correct:  7, wrong: 19 },  //  7:crocodile vs 19:lizard
        { pic:  8, correct:  8, wrong:  4 },  //  8:dog       vs  4:cat
        { pic:  9, correct:  9, wrong: 17 },  //  9:donkey    vs 17:horse
        { pic: 10, correct: 10, wrong:  5 },  // 10:duck      vs  5:chicken
        { pic: 11, correct: 11, wrong: 16 },  // 11:elephant  vs 16:hippo
        { pic: 12, correct: 12, wrong: 13 },  // 12:fish      vs 13:frog
        { pic: 13, correct: 13, wrong: 12 },  // 13:frog      vs 12:fish
        { pic: 14, correct: 14, wrong: 27 },  // 14:giraffe   vs 27:zebra
        { pic: 15, correct: 15, wrong: 23 },  // 15:goat      vs 23:sheep
        { pic: 16, correct: 16, wrong: 11 },  // 16:hippo     vs 11:elephant
        { pic: 17, correct: 17, wrong:  9 },  // 17:horse     vs  9:donkey
        { pic: 18, correct: 18, wrong: 12 },  // 18:jellyfish vs 12:fish
        { pic: 19, correct: 19, wrong:  7 },  // 19:lizard    vs  7:crocodile
        { pic: 20, correct: 20, wrong:  1 },  // 20:monkey    vs  1:bear
        { pic: 21, correct: 21, wrong:  4 },  // 21:mouse     vs  4:cat
        { pic: 22, correct: 22, wrong:  1 },  // 22:polar bear vs 1:bear
        { pic: 23, correct: 23, wrong: 15 },  // 23:sheep     vs 15:goat
        { pic: 24, correct: 24, wrong: 19 },  // 24:snake     vs 19:lizard
        { pic: 25, correct: 25, wrong:  2 },  // 25:spider    vs  2:bee
        { pic: 26, correct: 26, wrong:  4 },  // 26:tiger     vs  4:cat
        { pic: 27, correct: 27, wrong: 17 },  // 27:zebra     vs 17:horse
      ],

      // ── Quiz 2 · Fruits & Vegetables (18 söz | id 28–45) ─────────────
      [
        { pic: 28, correct: 28, wrong: 41 },  // 28:apple      vs 41:pear
        { pic: 29, correct: 29, wrong: 35 },  // 29:banana     vs 35:lemon
        { pic: 30, correct: 30, wrong: 40 },  // 30:bean       vs 40:pea
        { pic: 31, correct: 31, wrong: 43 },  // 31:carrot     vs 43:potato
        { pic: 32, correct: 32, wrong: 39 },  // 32:coconut    vs 39:orange
        { pic: 33, correct: 33, wrong: 28 },  // 33:grape      vs 28:apple
        { pic: 34, correct: 34, wrong: 36 },  // 34:kiwi       vs 36:lime
        { pic: 35, correct: 35, wrong: 36 },  // 35:lemon      vs 36:lime
        { pic: 36, correct: 36, wrong: 35 },  // 36:lime       vs 35:lemon
        { pic: 37, correct: 37, wrong: 39 },  // 37:mango      vs 39:orange
        { pic: 38, correct: 38, wrong: 43 },  // 38:onion      vs 43:potato
        { pic: 39, correct: 39, wrong: 35 },  // 39:orange     vs 35:lemon
        { pic: 40, correct: 40, wrong: 30 },  // 40:pea        vs 30:bean
        { pic: 41, correct: 41, wrong: 28 },  // 41:pear       vs 28:apple
        { pic: 42, correct: 42, wrong: 32 },  // 42:pineapple  vs 32:coconut
        { pic: 43, correct: 43, wrong: 38 },  // 43:potato     vs 38:onion
        { pic: 44, correct: 44, wrong: 28 },  // 44:tomato     vs 28:apple
        { pic: 45, correct: 45, wrong: 42 },  // 45:watermelon vs 42:pineapple
      ],

      // ── Quiz 3 · Food & Drinks (17 söz | id 46–62) ───────────────────
      [
        { pic: 46, correct: 46, wrong: 48 },  // 46:bread     vs 48:cake
        { pic: 47, correct: 47, wrong: 59 },  // 47:burger    vs 59:pie
        { pic: 48, correct: 48, wrong: 46 },  // 48:cake      vs 46:bread
        { pic: 49, correct: 49, wrong: 51 },  // 49:candy     vs 51:chocolate
        { pic: 50, correct: 50, wrong: 46 },  // 50:chips     vs 46:bread
        { pic: 51, correct: 51, wrong: 49 },  // 51:chocolate vs 49:candy
        { pic: 52, correct: 52, wrong: 56 },  // 52:egg       vs 56:meat
        { pic: 53, correct: 53, wrong: 48 },  // 53:ice cream vs 48:cake
        { pic: 54, correct: 54, wrong: 58 },  // 54:juice     vs 58:milk
        { pic: 55, correct: 55, wrong: 54 },  // 55:lemonade  vs 54:juice
        { pic: 56, correct: 56, wrong: 61 },  // 56:meat      vs 61:sausage
        { pic: 57, correct: 57, wrong: 56 },  // 57:meatballs vs 56:meat
        { pic: 58, correct: 58, wrong: 54 },  // 58:milk      vs 54:juice
        { pic: 59, correct: 59, wrong: 48 },  // 59:pie       vs 48:cake
        { pic: 60, correct: 60, wrong: 46 },  // 60:rice      vs 46:bread
        { pic: 61, correct: 61, wrong: 56 },  // 61:sausage   vs 56:meat
        { pic: 62, correct: 62, wrong: 54 },  // 62:water     vs 54:juice
      ],

      // ── Quiz 4 · Colours (11 söz | id 63–73) ─────────────────────────
      [
        { pic: 63, correct: 63, wrong: 65 },  // 63:black  vs 65:brown
        { pic: 64, correct: 64, wrong: 70 },  // 64:blue   vs 70:purple
        { pic: 65, correct: 65, wrong: 63 },  // 65:brown  vs 63:black
        { pic: 66, correct: 66, wrong: 72 },  // 66:gray   vs 72:white
        { pic: 67, correct: 67, wrong: 64 },  // 67:green  vs 64:blue
        { pic: 68, correct: 68, wrong: 73 },  // 68:orange vs 73:yellow
        { pic: 69, correct: 69, wrong: 71 },  // 69:pink   vs 71:red
        { pic: 70, correct: 70, wrong: 64 },  // 70:purple vs 64:blue
        { pic: 71, correct: 71, wrong: 69 },  // 71:red    vs 69:pink
        { pic: 72, correct: 72, wrong: 66 },  // 72:white  vs 66:gray
        { pic: 73, correct: 73, wrong: 68 },  // 73:yellow vs 68:orange
      ],

      // ── Quiz 5 · Family (8 söz | id 74–81) ───────────────────────────
      [
        { pic: 74, correct: 74, wrong: 212 }, // 74:baby        vs 212:child
        { pic: 75, correct: 75, wrong: 81  }, // 75:brother     vs  81:sister
        { pic: 76, correct: 76, wrong: 75  }, // 76:cousin      vs  75:brother
        { pic: 77, correct: 77, wrong: 78  }, // 77:father      vs  78:grandfather
        { pic: 78, correct: 78, wrong: 77  }, // 78:grandfather vs  77:father
        { pic: 79, correct: 79, wrong: 80  }, // 79:grandmother vs  80:mother
        { pic: 80, correct: 80, wrong: 79  }, // 80:mother      vs  79:grandmother
        { pic: 81, correct: 81, wrong: 75  }, // 81:sister      vs  75:brother
      ],

      // ── Quiz 6 · Body Parts (12 söz | id 82–93) ──────────────────────
      [
        { pic: 82, correct: 82, wrong: 90 },  // 82:arm   vs 90:leg
        { pic: 83, correct: 83, wrong: 84 },  // 83:ear   vs 84:eye
        { pic: 84, correct: 84, wrong: 83 },  // 84:eye   vs 83:ear
        { pic: 85, correct: 85, wrong: 89 },  // 85:face  vs 89:head
        { pic: 86, correct: 86, wrong: 88 },  // 86:foot  vs 88:hand
        { pic: 87, correct: 87, wrong: 85 },  // 87:hair  vs 85:face
        { pic: 88, correct: 88, wrong: 86 },  // 88:hand  vs 86:foot
        { pic: 89, correct: 89, wrong: 85 },  // 89:head  vs 85:face
        { pic: 90, correct: 90, wrong: 82 },  // 90:leg   vs 82:arm
        { pic: 91, correct: 91, wrong: 92 },  // 91:mouth vs 92:nose
        { pic: 92, correct: 92, wrong: 91 },  // 92:nose  vs 91:mouth
        { pic: 93, correct: 93, wrong: 90 },  // 93:tail  vs 90:leg
      ],

      // ── Quiz 7 · Clothes (14 söz | id 94–107) ────────────────────────
      [
        { pic:  94, correct:  94, wrong:  98 }, //  94:baseball cap vs  98:hat
        { pic:  95, correct:  95, wrong: 102 }, //  95:boots        vs 102:shoe
        { pic:  96, correct:  96, wrong: 104 }, //  96:dress        vs 104:skirt
        { pic:  97, correct:  97, wrong:  98 }, //  97:glasses      vs  98:hat
        { pic:  98, correct:  98, wrong:  94 }, //  98:hat          vs  94:baseball cap
        { pic:  99, correct:  99, wrong: 101 }, //  99:jacket       vs 101:shirt
        { pic: 100, correct: 100, wrong: 107 }, // 100:jeans        vs 107:trousers
        { pic: 101, correct: 101, wrong:  99 }, // 101:shirt        vs  99:jacket
        { pic: 102, correct: 102, wrong:  95 }, // 102:shoe         vs  95:boots
        { pic: 103, correct: 103, wrong: 107 }, // 103:shorts       vs 107:trousers
        { pic: 104, correct: 104, wrong:  96 }, // 104:skirt        vs  96:dress
        { pic: 105, correct: 105, wrong: 102 }, // 105:sock         vs 102:shoe
        { pic: 106, correct: 106, wrong: 101 }, // 106:T-shirt      vs 101:shirt
        { pic: 107, correct: 107, wrong: 103 }, // 107:trousers     vs 103:shorts
      ],

      // ── Quiz 8 · House & Rooms (9 söz | id 108–116) ──────────────────
      [
        { pic: 108, correct: 108, wrong: 114 }, // 108:apartment   vs 114:house
        { pic: 109, correct: 109, wrong: 110 }, // 109:bathroom    vs 110:bedroom
        { pic: 110, correct: 110, wrong: 109 }, // 110:bedroom     vs 109:bathroom
        { pic: 111, correct: 111, wrong: 115 }, // 111:dining room vs 115:kitchen
        { pic: 112, correct: 112, wrong: 177 }, // 112:garden      vs 177:park
        { pic: 113, correct: 113, wrong: 116 }, // 113:hall        vs 116:living room
        { pic: 114, correct: 114, wrong: 108 }, // 114:house       vs 108:apartment
        { pic: 115, correct: 115, wrong: 111 }, // 115:kitchen     vs 111:dining room
        { pic: 116, correct: 116, wrong: 110 }, // 116:living room vs 110:bedroom
      ],

      // ── Quiz 9 · Furniture & Objects (19 söz | id 117–135) ───────────
      [
        { pic: 117, correct: 117, wrong: 122 }, // 117:armchair vs 122:chair
        { pic: 118, correct: 118, wrong: 119 }, // 118:bath     vs 119:bed
        { pic: 119, correct: 119, wrong: 132 }, // 119:bed      vs 132:sofa
        { pic: 120, correct: 120, wrong: 124 }, // 120:bookcase vs 124:cupboard
        { pic: 121, correct: 121, wrong: 119 }, // 121:box      vs 119:bed
        { pic: 122, correct: 122, wrong: 117 }, // 122:chair    vs 117:armchair
        { pic: 123, correct: 123, wrong: 128 }, // 123:clock    vs 128:lamp
        { pic: 124, correct: 124, wrong: 120 }, // 124:cupboard vs 120:bookcase
        { pic: 125, correct: 125, wrong: 133 }, // 125:desk     vs 133:table
        { pic: 126, correct: 126, wrong: 135 }, // 126:door     vs 135:window
        { pic: 127, correct: 127, wrong: 134 }, // 127:floor    vs 134:wall
        { pic: 128, correct: 128, wrong: 123 }, // 128:lamp     vs 123:clock
        { pic: 129, correct: 129, wrong: 131 }, // 129:mat      vs 131:rug
        { pic: 130, correct: 130, wrong: 135 }, // 130:mirror   vs 135:window
        { pic: 131, correct: 131, wrong: 129 }, // 131:rug      vs 129:mat
        { pic: 132, correct: 132, wrong: 117 }, // 132:sofa     vs 117:armchair
        { pic: 133, correct: 133, wrong: 125 }, // 133:table    vs 125:desk
        { pic: 134, correct: 134, wrong: 127 }, // 134:wall     vs 127:floor
        { pic: 135, correct: 135, wrong: 126 }, // 135:window   vs 126:door
      ],

      // ── Quiz 10 · Sports & Games (10 söz | id 136–145) ───────────────
      [
        { pic: 136, correct: 136, wrong: 145 }, // 136:badminton     vs 145:tennis
        { pic: 137, correct: 137, wrong: 138 }, // 137:baseball      vs 138:basketball
        { pic: 138, correct: 138, wrong: 137 }, // 138:basketball    vs 137:baseball
        { pic: 139, correct: 139, wrong: 140 }, // 139:board game    vs 140:football
        { pic: 140, correct: 140, wrong: 138 }, // 140:football      vs 138:basketball
        { pic: 141, correct: 141, wrong: 140 }, // 141:hockey        vs 140:football
        { pic: 142, correct: 142, wrong: 140 }, // 142:skateboarding vs 140:football
        { pic: 143, correct: 143, wrong: 140 }, // 143:swimming      vs 140:football
        { pic: 144, correct: 144, wrong: 145 }, // 144:table tennis  vs 145:tennis
        { pic: 145, correct: 145, wrong: 136 }, // 145:tennis        vs 136:badminton
      ],

      // ── Quiz 11 · Transport (10 söz | id 146–155) ────────────────────
      [
        { pic: 146, correct: 146, wrong: 151 }, // 146:bike        vs 151:motorbike
        { pic: 147, correct: 147, wrong: 153 }, // 147:boat        vs 153:ship
        { pic: 148, correct: 148, wrong: 149 }, // 148:bus         vs 149:car
        { pic: 149, correct: 149, wrong: 148 }, // 149:car         vs 148:bus
        { pic: 150, correct: 150, wrong: 152 }, // 150:helicopter  vs 152:plane
        { pic: 151, correct: 151, wrong: 146 }, // 151:motorbike   vs 146:bike
        { pic: 152, correct: 152, wrong: 150 }, // 152:plane       vs 150:helicopter
        { pic: 153, correct: 153, wrong: 147 }, // 153:ship        vs 147:boat
        { pic: 154, correct: 154, wrong: 148 }, // 154:train       vs 148:bus
        { pic: 155, correct: 155, wrong: 149 }, // 155:truck       vs 149:car
      ],

      // ── Quiz 12 · Nature (6 söz | id 156–161) ────────────────────────
      [
        { pic: 156, correct: 156, wrong: 158 }, // 156:beach  vs 158:sea
        { pic: 157, correct: 157, wrong: 161 }, // 157:flower vs 161:tree
        { pic: 158, correct: 158, wrong: 156 }, // 158:sea    vs 156:beach
        { pic: 159, correct: 159, wrong: 157 }, // 159:shell  vs 157:flower
        { pic: 160, correct: 160, wrong: 157 }, // 160:sun    vs 157:flower
        { pic: 161, correct: 161, wrong: 157 }, // 161:tree   vs 157:flower
      ],

      // ── Quiz 13 · Toys & Hobbies (14 söz | id 162–175) ───────────────
      [
        { pic: 162, correct: 162, wrong: 163 }, // 162:ball      vs 163:balloon
        { pic: 163, correct: 163, wrong: 162 }, // 163:balloon   vs 162:ball
        { pic: 164, correct: 164, wrong: 162 }, // 164:bat       vs 162:ball
        { pic: 165, correct: 165, wrong: 172 }, // 165:camera    vs 172:radio
        { pic: 166, correct: 166, wrong: 174 }, // 166:doll      vs 174:teddy bear
        { pic: 167, correct: 167, wrong: 171 }, // 167:guitar    vs 171:piano
        { pic: 168, correct: 168, wrong: 163 }, // 168:kite      vs 163:balloon
        { pic: 169, correct: 169, wrong: 167 }, // 169:music     vs 167:guitar
        { pic: 170, correct: 170, wrong: 221 }, // 170:painting  vs 221:draw
        { pic: 171, correct: 171, wrong: 167 }, // 171:piano     vs 167:guitar
        { pic: 172, correct: 172, wrong: 165 }, // 172:radio     vs 165:camera
        { pic: 173, correct: 173, wrong: 166 }, // 173:robot     vs 166:doll
        { pic: 174, correct: 174, wrong: 166 }, // 174:teddy bear vs 166:doll
        { pic: 175, correct: 175, wrong: 166 }, // 175:toy       vs 166:doll
      ],

      // ── Quiz 14 · Places (7 söz | id 176–182) ────────────────────────
      [
        { pic: 176, correct: 176, wrong: 180 }, // 176:bookshop   vs 180:shop
        { pic: 177, correct: 177, wrong: 112 }, // 177:park       vs 112:garden
        { pic: 178, correct: 178, wrong: 177 }, // 178:playground vs 177:park
        { pic: 179, correct: 179, wrong: 110 }, // 179:school     vs 110:bedroom
        { pic: 180, correct: 180, wrong: 176 }, // 180:shop       vs 176:bookshop
        { pic: 181, correct: 181, wrong: 177 }, // 181:street     vs 177:park
        { pic: 182, correct: 182, wrong: 177 }, // 182:zoo        vs 177:park
      ],

      // ── Quiz 15 · Feelings & Adjectives (19 söz | id 183–201) ────────
      [
        { pic: 183, correct: 183, wrong: 195 }, // 183:angry     vs 195:sad
        { pic: 184, correct: 184, wrong: 193 }, // 184:beautiful vs 193:nice
        { pic: 185, correct: 185, wrong: 199 }, // 185:big       vs 199:small
        { pic: 186, correct: 186, wrong: 187 }, // 186:clean     vs 187:dirty
        { pic: 187, correct: 187, wrong: 186 }, // 187:dirty     vs 186:clean
        { pic: 188, correct: 188, wrong: 198 }, // 188:funny     vs 198:silly
        { pic: 189, correct: 189, wrong: 193 }, // 189:good      vs 193:nice
        { pic: 190, correct: 190, wrong: 195 }, // 190:happy     vs 195:sad
        { pic: 191, correct: 191, wrong: 197 }, // 191:long      vs 197:short
        { pic: 192, correct: 192, wrong: 194 }, // 192:new       vs 194:old
        { pic: 193, correct: 193, wrong: 189 }, // 193:nice      vs 189:good
        { pic: 194, correct: 194, wrong: 192 }, // 194:old       vs 192:new
        { pic: 195, correct: 195, wrong: 190 }, // 195:sad       vs 190:happy
        { pic: 196, correct: 196, wrong: 188 }, // 196:scary     vs 188:funny
        { pic: 197, correct: 197, wrong: 191 }, // 197:short     vs 191:long
        { pic: 198, correct: 198, wrong: 188 }, // 198:silly     vs 188:funny
        { pic: 199, correct: 199, wrong: 185 }, // 199:small     vs 185:big
        { pic: 200, correct: 200, wrong: 184 }, // 200:ugly      vs 184:beautiful
        { pic: 201, correct: 201, wrong: 194 }, // 201:young     vs 194:old
      ],

      // ── Quiz 16 · Time (8 söz | id 202–209) ──────────────────────────
      [
        { pic: 202, correct: 202, wrong: 205 }, // 202:afternoon vs 205:evening
        { pic: 203, correct: 203, wrong: 204 }, // 203:birthday  vs 204:day
        { pic: 204, correct: 204, wrong: 207 }, // 204:day       vs 207:night
        { pic: 205, correct: 205, wrong: 202 }, // 205:evening   vs 202:afternoon
        { pic: 206, correct: 206, wrong: 202 }, // 206:morning   vs 202:afternoon
        { pic: 207, correct: 207, wrong: 204 }, // 207:night     vs 204:day
        { pic: 208, correct: 208, wrong: 204 }, // 208:today     vs 204:day
        { pic: 209, correct: 209, wrong: 204 }, // 209:year      vs 204:day
      ],

      // ── Quiz 17 · People (8 söz | id 210–217) ────────────────────────
      [
        { pic: 210, correct: 210, wrong: 215 }, // 210:alien   vs 215:monster
        { pic: 211, correct: 211, wrong: 213 }, // 211:boy     vs 213:girl
        { pic: 212, correct: 212, wrong: 74  }, // 212:child   vs  74:baby
        { pic: 213, correct: 213, wrong: 211 }, // 213:girl    vs 211:boy
        { pic: 214, correct: 214, wrong: 217 }, // 214:man     vs 217:woman
        { pic: 215, correct: 215, wrong: 210 }, // 215:monster vs 210:alien
        { pic: 216, correct: 216, wrong: 214 }, // 216:person  vs 214:man
        { pic: 217, correct: 217, wrong: 214 }, // 217:woman   vs 214:man
      ],

      // ── Quiz 18 · Actions (20 söz | id 218–237) ──────────────────────
      [
        { pic: 218, correct: 218, wrong: 225 }, // 218:bounce vs 225:jump
        { pic: 219, correct: 219, wrong: 234 }, // 219:catch  vs 234:throw
        { pic: 220, correct: 220, wrong: 236 }, // 220:clap   vs 236:wave
        { pic: 221, correct: 221, wrong: 227 }, // 221:draw   vs 227:paint
        { pic: 222, correct: 222, wrong: 223 }, // 222:drink  vs 223:eat
        { pic: 223, correct: 223, wrong: 222 }, // 223:eat    vs 222:drink
        { pic: 224, correct: 224, wrong: 225 }, // 224:fly    vs 225:jump
        { pic: 225, correct: 225, wrong: 228 }, // 225:jump   vs 228:run
        { pic: 226, correct: 226, wrong: 234 }, // 226:kick   vs 234:throw
        { pic: 227, correct: 227, wrong: 221 }, // 227:paint  vs 221:draw
        { pic: 228, correct: 228, wrong: 235 }, // 228:run    vs 235:walk
        { pic: 229, correct: 229, wrong: 230 }, // 229:sing   vs 230:sit
        { pic: 230, correct: 230, wrong: 232 }, // 230:sit    vs 232:smile
        { pic: 231, correct: 231, wrong: 230 }, // 231:sleep  vs 230:sit
        { pic: 232, correct: 232, wrong: 236 }, // 232:smile  vs 236:wave
        { pic: 233, correct: 233, wrong: 228 }, // 233:swim   vs 228:run
        { pic: 234, correct: 234, wrong: 219 }, // 234:throw  vs 219:catch
        { pic: 235, correct: 235, wrong: 228 }, // 235:walk   vs 228:run
        { pic: 236, correct: 236, wrong: 220 }, // 236:wave   vs 220:clap
        { pic: 237, correct: 237, wrong: 221 }, // 237:write  vs 221:draw
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
  title: 'Sadə, Düzəltmə, Mürəkkəb isimlər',
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

        {
  type: 'mini_check',
  questions: [
    {
      q: '"book" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"sun" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"chair" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"darkness" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"freedom" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"railway" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"self-control" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
  ],
},
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

         {
  type: 'mini_check',
  questions: [
            { q: 'Düzəltmə isimi seç', options: ['teacher',     'book'        ], answer: 'teacher'     },
            { q: 'Düzəltmə isimi seç', options: ['happiness',   'sunrise'     ], answer: 'happiness'   },
            { q: 'Düzəltmə isimi seç', options: ['freedom',     'railway'     ], answer: 'freedom'     },
            { q: 'Düzəltmə isimi seç', options: ['childhood',   'flowerbed'   ], answer: 'childhood'   },
            { q: 'Düzəltmə isimi seç', options: ['development', 'self-control'], answer: 'development' },
          ],
        },

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
{
  type: 'mini_check',
  questions: [
            { q: 'Mürəkkəb isimi seç', options: ['sunrise',      'pen'        ], answer: 'sunrise'      },
            { q: 'Mürəkkəb isimi seç', options: ['railway',      'kindness'   ], answer: 'railway'      },
            { q: 'Mürəkkəb isimi seç', options: ['flowerbed',    'freedom'    ], answer: 'flowerbed'    },
            { q: 'Mürəkkəb isimi seç', options: ['full moon',    'leadership' ], answer: 'full moon'    },
            { q: 'Mürəkkəb isimi seç', options: ['self-control', 'development'], answer: 'self-control' },
          ],
        },

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

          {
  type: 'mini_check',
  questions: [
    {
      q: '"teacher" sözündə hansı şəkilçi isim düzəldir?',
      options: ['-er', '-ness', '-dom', '-hood'],
      answer: '-er',
    },
    {
      q: 'Hansı söz feldən düzəlmiş isimdir?',
      options: ['wisdom', 'meeting', 'village', 'kingdom'],
      answer: 'meeting',
    },
    {
      q: '"develop" felindən isim düzəltmək üçün hansı şəkilçi lazımdır?',
      options: ['-ness', '-ity', '-ment', '-hood'],
      answer: '-ment',
    },
    {
      q: 'Hansı söz "-tion / -sion" şəkilçisi ilə düzəlmişdir?',
      options: ['darkness', 'friendship', 'revision', 'strength'],
      answer: 'revision',
    },
  ],
},          // ── Ekran 3: Sifətdən düzələn isimlər ───────────
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
  { en: '"teacher" hansı növ isimdir?',      tr: 'Düzəltmə',    wrong: 'Sadə'        },
  { en: '"book" hansı növ isimdir?',         tr: 'Sadə',        wrong: 'Mürəkkəb'    },
  { en: '"sunrise" hansı növ isimdir?',      tr: 'Mürəkkəb',    wrong: 'Düzəltmə'    },
  { en: '"rain" hansı növ isimdir?',         tr: 'Sadə',        wrong: 'Düzəltmə'    },
  { en: '"happiness" hansı növ isimdir?',    tr: 'Düzəltmə',    wrong: 'Mürəkkəb'    },
  { en: '"toothbrush" hansı növ isimdir?',   tr: 'Mürəkkəb',    wrong: 'Sadə'        },
  { en: '"hero____m" — boşluğa nə gəlir?',  tr: '-is',         wrong: '-er'         },
  { en: '"teach → ____"',                    tr: 'teacher',     wrong: 'teachness'   },
  { en: '"waterfall" hansı növ isimdir?',    tr: 'Mürəkkəb',    wrong: 'Düzəltmə'   },
  { en: '"stone" hansı növ isimdir?',        tr: 'Sadə',        wrong: 'Düzəltmə'   },
  { en: '"free → ____"',                     tr: 'freedom',     wrong: 'freeship'    },
  { en: '"kind → ____"',                     tr: 'kindness',    wrong: 'kindment'    },
  { en: '"friendship" hansı növ isimdir?',   tr: 'Düzəltmə',    wrong: 'Mürəkkəb'   },
  { en: '"bedroom" hansı növ isimdir?',      tr: 'Mürəkkəb',    wrong: 'Düzəltmə'   },
  { en: '"develop → ____"',                  tr: 'development', wrong: 'developness' },
  { en: '"kingdom" hansı növ isimdir?',      tr: 'Düzəltmə',    wrong: 'Sadə'        },
  { en: '"hand" hansı növ isimdir?',         tr: 'Sadə',        wrong: 'Mürəkkəb'    },
  { en: '"lead → ____ship"',                 tr: 'leadership',  wrong: 'leaderhood'  },
  { en: '"earthquake" hansı növ isimdir?',   tr: 'Mürəkkəb',    wrong: 'Düzəltmə'   },
  { en: '"strong → ____"',                   tr: 'strength',    wrong: 'strongness'  },
],

     // ── Bölmə 2 ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Konkret və Mücərrəd isimlər',
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

[
  { en: '"Baku" hansı növ isimdir?',                  tr: 'Proper noun',  wrong: 'Common noun'  },
  { en: '"a city" hansı növ isimdir?',                tr: 'Common noun',  wrong: 'Proper noun'  },
  { en: '"January" hansı növ isimdir?',               tr: 'Proper noun',  wrong: 'Common noun'  },
  { en: '"a lake" hansı növ isimdir?',                tr: 'Common noun',  wrong: 'Proper noun'  },
  { en: '"Tuesday" hansı növ isimdir?',               tr: 'Proper noun',  wrong: 'Common noun'  },
  { en: '"weather" hansı növ isimdir?',               tr: 'Common noun',  wrong: 'Proper noun'  },
  { en: '"happiness" hansı növ isimdir?',             tr: 'Abstract',     wrong: 'Concrete'     },
  { en: '"a pen" hansı növ isimdir?',                 tr: 'Concrete',     wrong: 'Abstract'     },
  { en: '"freedom" hansı növ isimdir?',               tr: 'Abstract',     wrong: 'Concrete'     },
  { en: '"a table" hansı növ isimdir?',               tr: 'Concrete',     wrong: 'Abstract'     },
  { en: '"knowledge" hansı növ isimdir?',             tr: 'Abstract',     wrong: 'Concrete'     },
  { en: '"bread" hansı növ isimdir?',                 tr: 'Concrete',     wrong: 'Abstract'     },
  { en: '"milk" hansı növ isimdir?',                  tr: 'Uncountable',  wrong: 'Countable'    },
  { en: '"a book" hansı növ isimdir?',                tr: 'Countable',    wrong: 'Uncountable'  },
  { en: '"water" hansı növ isimdir?',                 tr: 'Uncountable',  wrong: 'Countable'    },
  { en: '"a chair" hansı növ isimdir?',               tr: 'Countable',    wrong: 'Uncountable'  },
  { en: 'Çox kitab → ____',                          tr: 'many books',   wrong: 'much books'   },
  { en: 'Çox süd → ____',                            tr: 'much milk',    wrong: 'many milk'    },
  { en: 'Az pul → ____',                             tr: 'little money', wrong: 'few money'    },
  { en: 'Az uşaq → ____',                            tr: 'few children', wrong: 'little children' },
  { en: '"a good ____" — boşluğa nə gəlir?',         tr: 'knowledge',    wrong: 'knowledges'   },
  { en: '"a hard ____" — boşluğa nə gəlir?',         tr: 'life',         wrong: 'lives'        },
  { en: '"actor" sözünün qadın forması nədir?',       tr: 'actress',      wrong: 'actoress'     },
  { en: 'Ölkə → hansı əvəzlik?',                     tr: 'she',          wrong: 'it'           },
  { en: 'Həşərat → hansı əvəzlik?',                  tr: 'it',           wrong: 'she'          },
  { en: '"lion" sözünün qadın forması nədir?',        tr: 'lioness',      wrong: 'lionness'     },
],
     // ── Bölmə 3 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Countable və Uncountable · Much / Many / Few / Little',
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

  [
  { en: '"student" hansı növ isimdir?',               tr: 'Countable',     wrong: 'Uncountable'  },
  { en: '"milk" hansı növ isimdir?',                  tr: 'Uncountable',   wrong: 'Countable'    },
  { en: '"furniture" hansı növ isimdir?',             tr: 'Uncountable',   wrong: 'Countable'    },
  { en: '"book" hansı növ isimdir?',                  tr: 'Countable',     wrong: 'Uncountable'  },
  { en: '"advice" hansı növ isimdir?',                tr: 'Uncountable',   wrong: 'Countable'    },
  { en: '"teacher" hansı növ isimdir?',               tr: 'Countable',     wrong: 'Uncountable'  },
  { en: '"knowledge" hansı növ isimdir?',             tr: 'Uncountable',   wrong: 'Countable'    },
  { en: '"rice" hansı növ isimdir?',                  tr: 'Uncountable',   wrong: 'Countable'    },
  { en: 'Çox kitab → ____',                          tr: 'many books',    wrong: 'much books'   },
  { en: 'Çox su → ____',                             tr: 'much water',    wrong: 'many water'   },
  { en: 'Az tələbə → ____',                          tr: 'few students',  wrong: 'little students' },
  { en: 'Az vaxt → ____',                            tr: 'little time',   wrong: 'few time'     },
  { en: 'Bir neçə kitabım var → ____',               tr: 'a few books',   wrong: 'few books'    },
  { en: 'Bir az pulum var → ____',                   tr: 'a little money',wrong: 'little money' },
  { en: 'Təsdiq cümlədə: Çox maşın var → ____',     tr: 'a lot of cars', wrong: 'many cars'    },
  { en: 'Sual cümlədə: Çox maşın var? → ____',      tr: 'many cars?',    wrong: 'a lot of cars?' },
  { en: 'A lot of water ___ wasted.',                tr: 'is',            wrong: 'are'          },
  { en: 'A lot of students ___ in yard.',            tr: 'are',           wrong: 'is'           },
  { en: 'Much time ___ wasted.',                     tr: 'was',           wrong: 'were'         },
  { en: 'The news ___ good.',                        tr: 'is',            wrong: 'are'          },
  { en: 'O çox oxuyur → He reads ____',              tr: 'a lot',         wrong: 'a lot of'     },
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
        title: 'Topluluq bildirən isimlər',
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

[
  { en: '"crowd" hansı növ isimdir?',                          tr: 'Kollektiv isim',      wrong: 'Mücərrəd isim' },
  { en: '"family" hansı növ isimdir?',                         tr: 'Kollektiv isim',      wrong: 'Sayılmayan'    },
  { en: '"crew" hansı növ isimdir?',                           tr: 'Kollektiv isim',      wrong: 'Xüsusi isim'   },
  { en: 'The crowds ___ enormous.',                            tr: 'were',                wrong: 'was'           },
  { en: 'My family ___ large. (bir bütün kimi)',               tr: 'is',                  wrong: 'are'           },
  { en: 'My family ___ early risers. (üzvlər kimi)',           tr: 'are',                 wrong: 'is'            },
  { en: 'The police ___ there.',                               tr: 'were',                wrong: 'was'           },
  { en: 'The cattle ___ grazing.',                             tr: 'were',                wrong: 'was'           },
  { en: 'People ___ strange sometimes.',                       tr: 'are',                 wrong: 'is'            },
  { en: 'Money ___ money.',                                    tr: 'makes',               wrong: 'make'          },
  { en: '"a cattle" ifadəsi düzgündürmü?',                     tr: 'Xeyr',                wrong: 'Bəli'          },
  { en: '"polices" forması düzgündürmü?',                      tr: 'Xeyr',                wrong: 'Bəli'          },
  { en: '"The peoples of the world" — nə mənada işlənir?',     tr: 'Bir neçə xalq',       wrong: 'İnsanlar'      },
  { en: '"The people of Azerbaijan" — nə mənada işlənir?',     tr: 'Azərbaycan xalqı',    wrong: 'İnsanlar'      },
  { en: '"money" — "çox" mənasında ____',                      tr: 'much money',          wrong: 'many money'    },
  { en: '"money" — "az" mənasında ____',                       tr: 'little money',        wrong: 'few money'     },
  { en: '"youth" ismi necə işlənir?',                          tr: 'həmişə tək',          wrong: 'həmişə cəm'    },
  { en: '"linen" ismi necə işlənir?',                          tr: 'həmişə tək',          wrong: 'həmişə cəm'    },
  { en: '"police" ismi necə işlənir?',                         tr: 'həmişə cəm',          wrong: 'həmişə tək'    },
  { en: '"cattle" ismi necə işlənir?',                         tr: 'həmişə cəm',          wrong: 'həmişə tək'    },
],

   // ── Bölmə 5 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Cəm formaları — tam qaydalar',
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
[
  { en: 'box → ____',          tr: 'boxes',         wrong: 'boxs'        },
  { en: 'pen → ____',          tr: 'pens',          wrong: 'penes'       },
  { en: 'watch → ____',        tr: 'watches',       wrong: 'watchs'      },
  { en: 'bus → ____',          tr: 'buses',         wrong: 'buss'        },
  { en: 'bench → ____',        tr: 'benches',       wrong: 'benchs'      },
  { en: 'man → ____',          tr: 'men',           wrong: 'mans'        },
  { en: 'tooth → ____',        tr: 'teeth',         wrong: 'tooths'      },
  { en: 'child → ____',        tr: 'children',      wrong: 'childs'      },
  { en: 'mouse → ____',        tr: 'mice',          wrong: 'mouses'      },
  { en: 'foot → ____',         tr: 'feet',          wrong: 'foots'       },
  { en: 'goose → ____',        tr: 'geese',         wrong: 'gooses'      },
  { en: 'postman → ____',      tr: 'postmen',       wrong: 'postmans'    },
  { en: 'policeman → ____',    tr: 'policemen',     wrong: 'policemans'  },
  { en: 'woman doctor → ____', tr: 'women doctors', wrong: 'woman doctors' },
  { en: 'German → ____',       tr: 'Germans',       wrong: 'Germens'     },
  { en: 'wife → ____',         tr: 'wives',         wrong: 'wifes'       },
  { en: 'leaf → ____',         tr: 'leaves',        wrong: 'leafs'       },
  { en: 'roof → ____',         tr: 'roofs',         wrong: 'rooves'      },
  { en: 'shelf → ____',        tr: 'shelves',       wrong: 'shelfs'      },
  { en: 'chief → ____',        tr: 'chiefs',        wrong: 'chieves'     },
  { en: 'potato → ____',       tr: 'potatoes',      wrong: 'potatos'     },
  { en: 'radio → ____',        tr: 'radios',        wrong: 'radioes'     },
  { en: 'hero → ____',         tr: 'heroes',        wrong: 'heros'       },
  { en: 'piano → ____',        tr: 'pianos',        wrong: 'pianoes'     },
  { en: 'city → ____',         tr: 'cities',        wrong: 'citys'       },
  { en: 'day → ____',          tr: 'days',          wrong: 'daies'       },
  { en: 'baby → ____',         tr: 'babies',        wrong: 'babys'       },
  { en: 'monkey → ____',       tr: 'monkeys',       wrong: 'monkies'     },
  { en: 'factory → ____',      tr: 'factories',     wrong: 'factorys'    },
],
      // ── Bölmə 6 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Xüsusi cəm halları',
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

[
  { en: '"advice" sözünün cəmi varmı?',                  tr: 'Xeyr',                   wrong: 'Bəli'          },
  { en: '"furniture" sözünün cəmi varmı?',               tr: 'Xeyr',                   wrong: 'Bəli'          },
  { en: 'Much progress ___ made.',                       tr: 'was',                    wrong: 'were'          },
  { en: 'Much information ___ needed.',                  tr: 'is',                     wrong: 'are'           },
  { en: 'Her hair ___ beautiful.',                       tr: 'is',                     wrong: 'are'           },
  { en: 'Fruit ___ useful.',                             tr: 'is',                     wrong: 'are'           },
  { en: '"fruits" forması nə vaxt işlənir?',             tr: 'Müxtəlif növ meyvə',     wrong: 'Həmişə'        },
  { en: 'Where ___ my scissors?',                        tr: 'are',                    wrong: 'is'            },
  { en: 'My jeans ___ blue.',                            tr: 'are',                    wrong: 'is'            },
  { en: 'The clothes ___ clean.',                        tr: 'are',                    wrong: 'is'            },
  { en: 'Bir qayçı → ____',                             tr: 'a pair of scissors',     wrong: 'a scissors'    },
  { en: 'İki şalvar → ____',                            tr: 'two pairs of trousers',  wrong: 'two trousers'  },
  { en: 'Today ___ a holiday. (bayram mənasında)',       tr: 'is',                     wrong: 'are'           },
  { en: 'The holidays ___ over. (tətil mənasında)',      tr: 'are',                    wrong: 'is'            },
  { en: 'The news ___ good.',                            tr: 'is',                     wrong: 'are'           },
  { en: 'Physics ___ difficult.',                        tr: 'is',                     wrong: 'are'           },
  { en: 'Phonetics ___ interesting.',                    tr: 'is',                     wrong: 'are'           },
  { en: '"a news" ifadəsi düzgündürmü?',                 tr: 'Xeyr',                   wrong: 'Bəli'          },
  { en: 'Five sheep ___ grazing.',                       tr: 'are',                    wrong: 'is'            },
  { en: 'A deer ___ in the forest.',                     tr: 'is',                     wrong: 'are'           },
  { en: '"fish" sözünün cəmi necədir?',                  tr: 'fish',                   wrong: 'fishes'        },
  { en: '"various fishes" — nə mənada işlənir?',         tr: 'Müxtəlif növ balıq',     wrong: 'Səhvdir'       },
],
    // ── Bölmə 7 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Possessive case (Yiyəlik hal)',
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
  title: 'Sayılmayan isimlər',
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


          {
      type: 'section_divider',
      title: 'NOUNS - ÜMUMİ İMTAHAN',
},
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
{
      type: 'section_divider',
      title: 'Simple Present',
},
   
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
{ type: 'section_divider', title: 'Simple Past' },


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

   {
  type: 'mini_check',
  questions: [
    {
      q: '"played" — "-ed" necə oxunur?',
      options: ['[d]', '[t]'],
      answer: '[d]',
    },
    {
      q: '"asked" — "-ed" necə oxunur?',
      options: ['[t]', '[ɪd]'],
      answer: '[t]',
    },
    {
      q: '"wanted" — "-ed" necə oxunur?',
      options: ['[ɪd]', '[d]'],
      answer: '[ɪd]',
    },
    {
      q: '"lived" — "-ed" necə oxunur?',
      options: ['[d]', '[ɪd]'],
      answer: '[d]',
    },
    {
      q: '"stopped" — "-ed" necə oxunur?',
      options: ['[t]', '[d]'],
      answer: '[t]',
    },
  ],
},

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
    {
  type: 'mini_check',
  questions: [
    {
      q: 'write → Past Simple?',
      options: ['wrote', 'writed'],
      answer: 'wrote',
    },
    {
      q: 'speak → Past Simple?',
      options: ['spoke', 'speaked'],
      answer: 'spoke',
    },
    {
      q: 'break → Past Simple?',
      options: ['broke', 'breaked'],
      answer: 'broke',
    },
    {
      q: 'drive → Past Simple?',
      options: ['drove', 'drived'],
      answer: 'drove',
    },
    {
      q: 'give → Past Simple?',
      options: ['gave', 'gived'],
      answer: 'gave',
    },
  ],
},

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

    {
  type: 'mini_check',
  questions: [
    {
      q: 'sell → Past Simple?',
      options: ['sold', 'selled'],
      answer: 'sold',
    },
    {
      q: 'feel → Past Simple?',
      options: ['felt', 'feeled'],
      answer: 'felt',
    },
    {
      q: 'go → Past Simple?',
      options: ['went', 'goed'],
      answer: 'went',
    },
    {
      q: 'cut → Past Simple?',
      options: ['cut', 'cutted'],
      answer: 'cut',
    },
    {
      q: 'buy → Past Simple?',
      options: ['bought', 'buyed'],
      answer: 'bought',
    },
    {
      q: '"can" → keçmiş forması?',
      options: ['could', 'canned'],
      answer: 'could',
    },
    {
      q: '"will" → keçmiş forması?',
      options: ['would', 'willed'],
      answer: 'would',
    },
  ],
},

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
  title: 'Simple Future',
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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ go to school." — düzgün forma?',
      options: ['shall', 'will'],
      answer: 'shall',
    },
    {
      q: '"She ___ come tomorrow." — düzgün forma?',
      options: ['will', 'shall'],
      answer: 'will',
    },
    {
      q: '"We ___ work next week." — düzgün forma?',
      options: ['shall', 'will'],
      answer: 'shall',
    },
    {
      q: '"They ___ not come." — qısa inkar?',
      options: ["won't", "shan't"],
      answer: "won't",
    },
    {
      q: '"I ___ not go." — qısa inkar?',
      options: ["shan't", "won't"],
      answer: "shan't",
    },
    {
      q: '"___ he come tomorrow?" — sual?',
      options: ['Will', 'Shall'],
      answer: 'Will',
    },
  ],
},

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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ going to study." — boşluq?',
      options: ['am', 'is'],
      answer: 'am',
    },
    {
      q: '"She ___ going to leave." — boşluq?',
      options: ['is', 'are'],
      answer: 'is',
    },
    {
      q: '"They ___ going to work." — boşluq?',
      options: ['are', 'is'],
      answer: 'are',
    },
    {
      q: '"going to" nə bildirir?',
      options: ['Hazırlaşmaq', 'Etmək üzrə olmaq'],
      answer: 'Hazırlaşmaq',
    },
  ],
},

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
  title: 'Future Indefinite in the Past',
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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ come to the meeting."',
      options: ['should', 'would'],
      answer: 'should',
    },
    {
      q: '"She ___ return in time."',
      options: ['would', 'should'],
      answer: 'would',
    },
    {
      q: '"We ___ not go there."',
      options: ['should', 'would'],
      answer: 'should',
    },
    {
      q: '"They ___ not come." — qısa?',
      options: ["wouldn't", "shouldn't"],
      answer: "wouldn't",
    },
    {
      q: '"I ___ not go." — qısa?',
      options: ["shouldn't", "wouldn't"],
      answer: "shouldn't",
    },
    {
      q: '"I\'d come." — tam forması?',
      options: ['I would come', 'I should come'],
      answer: 'I would come',
    },
  ],
},

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
   {
  type: 'mini_check',
  questions: [
    {
      q: '"will" → vasitəli nitqdə?',
      options: ['would', 'should'],
      answer: 'would',
    },
    {
      q: '"shall" → vasitəli nitqdə?',
      options: ['should', 'would'],
      answer: 'should',
    },
    {
      q: '"tomorrow" → vasitəli nitqdə?',
      options: ['the next day', 'yesterday'],
      answer: 'the next day',
    },
    {
      q: '"He said he ___ come." — boşluq?',
      options: ['would', 'will'],
      answer: 'would',
    },
    {
      q: '"She said we ___ go." — boşluq?',
      options: ['should', 'shall'],
      answer: 'should',
    },
  ],
},

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
  title: 'Present Continuous',
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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ writing." — boşluq?',
      options: ['am', 'is'],
      answer: 'am',
    },
    {
      q: '"She ___ writing." — boşluq?',
      options: ['is', 'are'],
      answer: 'is',
    },
    {
      q: '"They ___ writing." — boşluq?',
      options: ['are', 'is'],
      answer: 'are',
    },
    {
      q: '"We ___ writing." — boşluq?',
      options: ['are', 'am'],
      answer: 'are',
    },
    {
      q: '"He ___ writing." — boşluq?',
      options: ['is', 'are'],
      answer: 'is',
    },
    {
      q: '"You ___ writing." — boşluq?',
      options: ['are', 'is'],
      answer: 'are',
    },
    {
      q: '"I\'m writing." — tam forması?',
      options: ['I am writing', 'I is writing'],
      answer: 'I am writing',
    },
    {
      q: '"He isn\'t writing." — tam forması?',
      options: ['He is not writing', 'He are not writing'],
      answer: 'He is not writing',
    },
  ],
},
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
  {
  type: 'mini_check',
  questions: [
    {
      q: 'Present Continuous zaman zərfi?',
      options: ['now', 'yesterday'],
      answer: 'now',
    },
    {
      q: '"at the ___" — Present Continuous zərfi?',
      options: ['moment', 'time'],
      answer: 'moment',
    },
    {
      q: '"Look! She ___ coming." — boşluq?',
      options: ['is', 'was'],
      answer: 'is',
    },
    {
      q: '"Listen! They ___ singing." — boşluq?',
      options: ['are', 'were'],
      answer: 'are',
    },
    {
      q: '"I am reading ___ moment." — boşluq?',
      options: ['at the present', 'at that'],
      answer: 'at the present',
    },
    {
      q: '"___ the moment, he is working." — boşluq?',
      options: ['At', 'In'],
      answer: 'At',
    },
  ],
},

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
   {
  type: 'mini_check',
  questions: [
    {
      q: '"to know" — stativ feldir?',
      options: ['Bəli', 'Xeyr'],
      answer: 'Bəli',
    },
    {
      q: '"to run" — stativ feldir?',
      options: ['Xeyr', 'Bəli'],
      answer: 'Xeyr',
    },
    {
      q: '"to love" — davamedici formada işlənir?',
      options: ['Xeyr', 'Bəli'],
      answer: 'Xeyr',
    },
    {
      q: '"to belong to" — mənası?',
      options: ['məxsus olmaq', 'asılı olmaq'],
      answer: 'məxsus olmaq',
    },
    {
      q: '"to depend on" — mənası?',
      options: ['asılı olmaq', 'məxsus olmaq'],
      answer: 'asılı olmaq',
    },
    {
      q: '"I am thinking of you." — "think" burada?',
      options: ['fikirləşmək', 'məncə'],
      answer: 'fikirləşmək',
    },
    {
      q: '"I think you are right." — "think" burada?',
      options: ['məncə', 'fikirləşmək'],
      answer: 'məncə',
    },
    {
      q: '"I am knowing." — bu cümlə düzdür?',
      options: ['Xeyr', 'Bəli'],
      answer: 'Xeyr',
    },
  ],
},

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
  title: 'Past Continuous',
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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ writing."',
      options: ['was', 'were'],
      answer: 'was',
    },
    {
      q: '"She ___ writing."',
      options: ['was', 'were'],
      answer: 'was',
    },
    {
      q: '"They ___ writing."',
      options: ['were', 'was'],
      answer: 'were',
    },
    {
      q: '"We ___ writing."',
      options: ['were', 'was'],
      answer: 'were',
    },
    {
      q: '"He ___ writing."',
      options: ['was', 'were'],
      answer: 'was',
    },
    {
      q: '"You ___ writing."',
      options: ['were', 'was'],
      answer: 'were',
    },
    {
      q: '"I wasn\'t writing." — tam forması?',
      options: ['I was not writing', 'I were not writing'],
      answer: 'I was not writing',
    },
    {
      q: '"Weren\'t they?" — tam forması?',
      options: ['Were they not?', 'Was they not?'],
      answer: 'Were they not?',
    },
  ],
},
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
    {
  type: 'mini_check',
  questions: [
    {
      q: '"When I came, she ___ writing." — boşluq?',
      options: ['was', 'is'],
      answer: 'was',
    },
    {
      q: '"___ that time yesterday" — zərf?',
      options: ['at', 'in'],
      answer: 'at',
    },
    {
      q: '"all day ___" — tam ifadə?',
      options: ['long', 'time'],
      answer: 'long',
    },
    {
      q: '"when" ilə hansı zaman işlənir?',
      options: ['Past Continuous', 'Simple Future'],
      answer: 'Past Continuous',
    },
    {
      q: '"She was writing" → Az. dilində?',
      options: ['yazırdı', 'yazacaq'],
      answer: 'yazırdı',
    },
  ],
},

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
   {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"She ___ answered."',
      options: ['has', 'have'],
      answer: 'has',
    },
    {
      q: '"They ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"He ___ answered."',
      options: ['has', 'have'],
      answer: 'has',
    },
    {
      q: '"We ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"You ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"I haven\'t answered." — tam forması?',
      options: ['I have not answered', 'I has not answered'],
      answer: 'I have not answered',
    },
    {
      q: '"He hasn\'t answered." — tam forması?',
      options: ['He has not answered', 'He have not answered'],
      answer: 'He has not answered',
    },
  ],
},
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

    {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"She ___ answered."',
      options: ['has', 'have'],
      answer: 'has',
    },
    {
      q: '"They ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"He ___ answered."',
      options: ['has', 'have'],
      answer: 'has',
    },
    {
      q: '"We ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"You ___ answered."',
      options: ['have', 'has'],
      answer: 'have',
    },
    {
      q: '"I haven\'t answered." — tam forması?',
      options: ['I have not answered', 'I has not answered'],
      answer: 'I have not answered',
    },
    {
      q: '"He hasn\'t answered." — tam forması?',
      options: ['He has not answered', 'He have not answered'],
      answer: 'He has not answered',
    },
  ],
},

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
  title: 'Past Perfect',
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
   {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ written the letter."',
      options: ['had', 'have'],
      answer: 'had',
    },
    {
      q: '"She ___ already left."',
      options: ['had', 'has'],
      answer: 'had',
    },
    {
      q: '"They ___ finished before we came."',
      options: ['had', 'have'],
      answer: 'had',
    },
    {
      q: '"He ___ never seen snow before."',
      options: ['had', 'has'],
      answer: 'had',
    },
    {
      q: '"We ___ eaten before she arrived."',
      options: ['had', 'have'],
      answer: 'had',
    },
    {
      q: '"I hadn\'t written." — tam forması?',
      options: ['I had not written', 'I have not written'],
      answer: 'I had not written',
    },
    {
      q: '"Hadn\'t she finished?" — tam forması?',
      options: ['Had she not finished?', 'Has she not finished?'],
      answer: 'Had she not finished?',
    },
  ],
},
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
{
  type: 'mini_check',
  questions: [
    {
      q: '"When I came, she ___ already left."',
      options: ['had', 'has'],
      answer: 'had',
    },
    {
      q: '"After he ___ written, he went to sleep."',
      options: ['had', 'has'],
      answer: 'had',
    },
    {
      q: '"She had left ___ I came."',
      options: ['before', 'after'],
      answer: 'before',
    },
    {
      q: '"___ he had written, he went to sleep."',
      options: ['After', 'Before'],
      answer: 'After',
    },
    {
      q: '"By that time she ___ finished."',
      options: ['had', 'has'],
      answer: 'had',
    },
    {
      q: '"Hardly had I arrived ___ it rained."',
      options: ['when', 'than'],
      answer: 'when',
    },
    {
      q: '"No sooner had I arrived ___ it rained."',
      options: ['than', 'when'],
      answer: 'than',
    },
    {
      q: '"I had written." — Azərbaycanca?',
      options: ['Mən yazmışdım.', 'Mən yazmışam.'],
      answer: 'Mən yazmışdım.',
    },
  ],
},

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

  

    // ── index: 1 — Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Present / Past / Future Indefinite Passive',
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

       {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ invited."',
      options: ['am', 'is'],
      answer: 'am',
    },
    {
      q: '"She ___ invited."',
      options: ['is', 'are'],
      answer: 'is',
    },
    {
      q: '"They ___ invited."',
      options: ['are', 'is'],
      answer: 'are',
    },
    {
      q: '"English ___ spoken here."',
      options: ['is', 'are'],
      answer: 'is',
    },
    {
      q: '"The books ___ sold."',
      options: ['are', 'is'],
      answer: 'are',
    },
    {
      q: '"___ I invited?" — sual',
      options: ['Am', 'Is'],
      answer: 'Am',
    },
    {
      q: '"___ he called?" — sual',
      options: ['Is', 'Are'],
      answer: 'Is',
    },
    {
      q: '"I am not invited." — qısa forması?',
      options: ["I'm not invited", "I isn't invited"],
      answer: "I'm not invited",
    },
  ],
},

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
{
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ invited yesterday."',
      options: ['was', 'were'],
      answer: 'was',
    },
    {
      q: '"They ___ invited last week."',
      options: ['were', 'was'],
      answer: 'were',
    },
    {
      q: '"She ___ called last night."',
      options: ['was', 'were'],
      answer: 'was',
    },
    {
      q: '"We ___ told about it."',
      options: ['were', 'was'],
      answer: 'were',
    },
    {
      q: '"___ he invited?" — sual',
      options: ['Was', 'Were'],
      answer: 'Was',
    },
    {
      q: '"___ they told?" — sual',
      options: ['Were', 'Was'],
      answer: 'Were',
    },
    {
      q: '"was invited" — Azərbaycanca?',
      options: ['dəvət edildi', 'dəvət edilir'],
      answer: 'dəvət edildi',
    },
    {
      q: '"were broken" — Azərbaycanca?',
      options: ['sındırıldılar', 'sındırılırlar'],
      answer: 'sındırıldılar',
    },
  ],
},
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
     {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ invited." — Future Passive',
      options: ['shall be', 'will be'],
      answer: 'shall be',
    },
    {
      q: '"She ___ invited." — Future Passive',
      options: ['will be', 'shall be'],
      answer: 'will be',
    },
    {
      q: '"They ___ told." — Future Passive',
      options: ['will be', 'shall be'],
      answer: 'will be',
    },
    {
      q: '"We ___ invited." — Future Passive',
      options: ['shall be', 'will be'],
      answer: 'shall be',
    },
    {
      q: '"___ I be invited?" — sual',
      options: ['Shall', 'Will'],
      answer: 'Shall',
    },
    {
      q: '"___ he be called?" — sual',
      options: ['Will', 'Shall'],
      answer: 'Will',
    },
    {
      q: '"will be sent" — Azərbaycanca?',
      options: ['göndəriləcək', 'göndərildi'],
      answer: 'göndəriləcək',
    },
    {
      q: '"shall not be invited" — qısa forması?',
      options: ["shan't be invited", "won't be invited"],
      answer: "shan't be invited",
    },
  ],
},

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
      title: 'Present / Past Perfect Passive',
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
      {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ invited." — Present Perfect Passive',
      options: ['have been', 'has been'],
      answer: 'have been',
    },
    {
      q: '"She ___ invited." — Present Perfect Passive',
      options: ['has been', 'have been'],
      answer: 'has been',
    },
    {
      q: '"They ___ told." — Present Perfect Passive',
      options: ['have been', 'has been'],
      answer: 'have been',
    },
    {
      q: '"___ he invited?" — Present Perfect Passive',
      options: ['Has', 'Have'],
      answer: 'Has',
    },
    {
      q: '"___ they told?" — Present Perfect Passive',
      options: ['Have', 'Has'],
      answer: 'Have',
    },
    {
      q: '"has been written" — Azərbaycanca?',
      options: ['yazılmışdır', 'yazılmışdı'],
      answer: 'yazılmışdır',
    },
    {
      q: '"have been sold" — Azərbaycanca?',
      options: ['satılmışlar', 'satılırdılar'],
      answer: 'satılmışlar',
    },
  ],
},
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

       {
  type: 'mini_check',
  questions: [
    {
      q: '"I ___ invited." — Past Perfect Passive',
      options: ['had been', 'have been'],
      answer: 'had been',
    },
    {
      q: '"She ___ told." — Past Perfect Passive',
      options: ['had been', 'has been'],
      answer: 'had been',
    },
    {
      q: '"___ he invited?" — Past Perfect Passive',
      options: ['Had', 'Have'],
      answer: 'Had',
    },
    {
      q: '"had been written" — Azərbaycanca?',
      options: ['yazılmışdı', 'yazılmışdır'],
      answer: 'yazılmışdı',
    },
    {
      q: '"had been invited" — Azərbaycanca?',
      options: ['dəvət edilmişdi', 'dəvət edilmişdir'],
      answer: 'dəvət edilmişdi',
    },
  ],
},
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
      title: 'Modal fellərin məchul növü',
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

        {
  type: 'mini_check',
  questions: [
    {
      q: '"The work ___ be done."',
      options: ['must', 'should be'],
      answer: 'must',
    },
    {
      q: '"The letter ___ be written."',
      options: ['can', 'could be'],
      answer: 'can',
    },
    {
      q: 'Modal Passive necə düzəlir?',
      options: ['modal + be + P II', 'modal + been + P II'],
      answer: 'modal + be + P II',
    },
    {
      q: '"must be done" — Azərbaycanca?',
      options: ['görülməlidir', 'görüldü'],
      answer: 'görülməlidir',
    },
    {
      q: '"can be written" — Azərbaycanca?',
      options: ['yazıla bilər', 'yazıldı'],
      answer: 'yazıla bilər',
    },
    {
      q: '"should be finished" — Azərbaycanca?',
      options: ['bitirilməlidir', 'bitirildi'],
      answer: 'bitirilməlidir',
    },
    {
      q: '"The door ___ not be opened."',
      options: ['must', 'is'],
      answer: 'must',
    },
  ],
},

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

  
    // ── index: 15 — Bölmə 4 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Çevirmənin əsas qaydaları',
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
       {
  type: 'mini_check',
  questions: [
    {
      q: '"I write a letter." → məchul mübtəda?',
      options: ['A letter', 'I'],
      answer: 'A letter',
    },
    {
      q: '"She sent the book." → məchul mübtəda?',
      options: ['The book', 'She'],
      answer: 'The book',
    },
    {
      q: 'İcraçını bildirən sözönü?',
      options: ['by', 'with'],
      answer: 'by',
    },
    {
      q: '"by her" — Azərbaycanca?',
      options: ['onun tərəfindən', 'onunla'],
      answer: 'onun tərəfindən',
    },
    {
      q: '"I write" → Passive Present?',
      options: ['is written', 'was written'],
      answer: 'is written',
    },
    {
      q: '"She wrote" → Passive Past?',
      options: ['was written', 'is written'],
      answer: 'was written',
    },
    {
      q: '"He will send" → Passive Future?',
      options: ['will be sent', 'is sent'],
      answer: 'will be sent',
    },
  ],
},

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
      {
  type: 'mini_check',
  questions: [
    {
      q: 'Məchul mübtəda: "him" → ?',
      options: ['he', 'him'],
      answer: 'he',
    },
    {
      q: 'Məchul mübtəda: "her" → ?',
      options: ['she', 'her'],
      answer: 'she',
    },
    {
      q: 'Məchul mübtəda: "them" → ?',
      options: ['they', 'them'],
      answer: 'they',
    },
    {
      q: 'Məchul mübtəda: "us" → ?',
      options: ['we', 'us'],
      answer: 'we',
    },
    {
      q: 'Məchul mübtəda: "me" → ?',
      options: ['I', 'me'],
      answer: 'I',
    },
    {
      q: '"by" ilə: "I" → ?',
      options: ['by me', 'by I'],
      answer: 'by me',
    },
    {
      q: '"by" ilə: "she" → ?',
      options: ['by her', 'by she'],
      answer: 'by her',
    },
    {
      q: '"by" ilə: "they" → ?',
      options: ['by them', 'by they'],
      answer: 'by them',
    },
  ],
},

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
      title: 'Canlı / cansız tamamlıq qaydaları',
    },

    // ── index: 20 — Dərs 5.1 ──────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Canlı + cansız tamamlıq',
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
        {
  type: 'mini_check',
  questions: [
    {
      q: '"I give him a book." → canlı tamamlıq?',
      options: ['him', 'a book'],
      answer: 'him',
    },
    {
      q: '"I give him a book." → məchul mübtəda?',
      options: ['He', 'A book'],
      answer: 'He',
    },
    {
      q: '"She sent me a letter." → məchul mübtəda?',
      options: ['I', 'A letter'],
      answer: 'I',
    },
    {
      q: '"He gave her the money." → məchul mübtəda?',
      options: ['She', 'The money'],
      answer: 'She',
    },
    {
      q: 'Canlı tamamlıq məchul cümlədə nə olur?',
      options: ['mübtəda', 'tamamlıq'],
      answer: 'mübtəda',
    },
  ],
},

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

      {
  type: 'mini_check',
  questions: [
    {
      q: '"I gave him a book." → Passive (Past)?',
      options: ['He was given a book.', 'He is given a book.'],
      answer: 'He was given a book.',
    },
    {
      q: '"I give him a book." → Passive (Present)?',
      options: ['He is given a book.', 'He was given a book.'],
      answer: 'He is given a book.',
    },
    {
      q: '"I will give him a book." → Passive (Future)?',
      options: ['He will be given a book.', 'He is given a book.'],
      answer: 'He will be given a book.',
    },
    {
      q: '"I have given him a book." → Passive?',
      options: ['He has been given a book.', 'He had been given a book.'],
      answer: 'He has been given a book.',
    },
    {
      q: '"I had given him a book." → Passive?',
      options: ['He had been given a book.', 'He has been given a book.'],
      answer: 'He had been given a book.',
    },
  ],
},
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
      title: 'Bütün zaman formalarında çevrilməsi',
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

       {
  type: 'mini_check',
  questions: [
    {
      q: '"They write letters." → Passive Present?',
      options: ['Letters are written.', 'Letters were written.'],
      answer: 'Letters are written.',
    },
    {
      q: '"They wrote letters." → Passive Past?',
      options: ['Letters were written.', 'Letters are written.'],
      answer: 'Letters were written.',
    },
    {
      q: '"They will write." → Passive Future?',
      options: ['It will be written.', 'It is written.'],
      answer: 'It will be written.',
    },
    {
      q: '"They have written." → Passive Present Perfect?',
      options: ['It has been written.', 'It had been written.'],
      answer: 'It has been written.',
    },
    {
      q: '"They had written." → Passive Past Perfect?',
      options: ['It had been written.', 'It has been written.'],
      answer: 'It had been written.',
    },
    {
      q: '"They must write." → Passive Modal?',
      options: ['It must be written.', 'It must been written.'],
      answer: 'It must be written.',
    },
  ],
},
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

        {
  type: 'mini_check',
  questions: [
    {
      q: '"is written" — Azərbaycanca?',
      options: ['yazılır', 'yazıldı'],
      answer: 'yazılır',
    },
    {
      q: '"was written" — Azərbaycanca?',
      options: ['yazıldı', 'yazılır'],
      answer: 'yazıldı',
    },
    {
      q: '"will be written" — Azərbaycanca?',
      options: ['yazılacaq', 'yazıldı'],
      answer: 'yazılacaq',
    },
    {
      q: '"has been written" — Azərbaycanca?',
      options: ['yazılmışdır', 'yazılmışdı'],
      answer: 'yazılmışdır',
    },
    {
      q: '"had been written" — Azərbaycanca?',
      options: ['yazılmışdı', 'yazılmışdır'],
      answer: 'yazılmışdı',
    },
    {
      q: '"must be written" — Azərbaycanca?',
      options: ['yazılmalıdır', 'yazıla bilər'],
      answer: 'yazılmalıdır',
    },
    {
      q: '"can be written" — Azərbaycanca?',
      options: ['yazıla bilər', 'yazılmalıdır'],
      answer: 'yazıla bilər',
    },
  ],
},
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

      {
      type: 'section_divider',
      title: 'PASSIVE VOICE - ÜMUMİ İMTAHAN',
},
      
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

 

    // ── index: 1 ─ Bölmə 1 bölücüsü ──────────────────────────
    {
      type: 'section_divider',
      title: 'Əsas qaydalar: nəqli cümlənin çevrilməsi',
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
      title: 'Zaman və məkan sözlərinin dəyişməsi',
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

   
    // ── index: 12 ─ Bölmə 3 bölücüsü ─────────────────────────
    {
      type: 'section_divider',
      title: 'Ümumi sualların vasitəli nitqə çevrilməsi',
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
      title: 'Xüsusi sualların vasitəli nitqə çevrilməsi',
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
      title: 'Əmr və xahiş cümlələrinin çevrilməsi',
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

{
      type: 'section_divider',
      title: ' DİRECT & INDİRECT SPEECH - ÜMUMİ İMTAHAN',
},
      
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


const SEQUENCE_TENSES_LEVEL = {
  id: 'sequence_tenses',
  name: 'SEQUENCE OF TENSES',
  icon: '<i class="ti ti-clock"></i>',
  color: '#5EEAD4',

  quizzes: [
// ══════════════════════════════════════════════════════════
// ║  ZAMANLARIN UZLAŞMASI (SEQUENCE OF TENSES) — Tam bölüm ║
// ══════════════════════════════════════════════════════════

{
      type: 'section_divider',
      title: 'Əsas qaydalar',
},
      
// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 1 — Əsas qayda                                │
// │  What is Sequence of Tenses?                           │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 1.1 — Zamanların uzlaşması nədir? ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Zamanların uzlaşması nədir?',
  cards: [

    // ── Ekran 1: Tərif ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Zamanların uzlaşması (Sequence of Tenses)',
      content:
        'İngilis dilində bir qayda olaraq, budaq cümləli tabeli mürəkkəb cümlənin ' +
        'baş cümləsində fel keçmiş zamanda olduqda tamamlıq budaq cümləsindəki fel ' +
        'də mütləq keçmiş zaman formalarından birində işlənməlidir.\n\n' +
        'Bu hadisəyə zamanların uzlaşması deyilir.',
      table: [
        ['Nümunə',                   'İzah'],
        ['I heard that he was ill.', 'Baş cümlə keçmiş → budaq cümlə də keçmiş'],
        ['She said that he would come.', 'Baş cümlə keçmiş → gələcəyə aid keçmiş'],
      ],
      tip: 'Əsas qayda: baş cümlə keçmiş zamandadırsa — budaq cümlə də keçmiş zaman formalarından birində olmalıdır.',
    },

    // ── Ekran 2: Ümumi sxem ──────────────────────────────
    {
      type: 'lesson',
      title: 'Uzlaşma növlərinə ümumi baxış',
      content: 'Zamanların uzlaşması aşağıdakı əsas növlərə bölünür:',
      table: [
        ['Növ',                     'Açar bağlayıcı',              'Nümunə'],
        ['Eyni vaxt',               'when, while',                 'When I came, he was writing.'],
        ['Əvvəl baş verən',         'before, when',                'When I came, she had done it.'],
        ['Sonra baş verən',         'after',                       'After she had slept, I came.'],
        ['Şərt / vaxt budaq c.',    'if, when, until, as soon as', 'If she comes, I shall go.'],
        ['Gələcəyə aid keçmiş',     'said that',                   'He said that he would come.'],
        ['Since + keçmiş',          'since',                       'I haven\'t seen her since he came.'],
        ['İstisnalar',              'ümumi həqiqət, müqayisə, təyin', 'The Earth goes around the Sun.'],
      ],
    },

    // ── Quiz: əsas anlayış ───────────────────────────────
    { en: 'Baş cümlə keçmişdədirsə budaq cümlə hansı zamanda olur?',  tr: 'Keçmiş',         wrong: 'İndiki'       },
    { en: '"I heard that he was ill." — uzlaşma varmı?',              tr: 'Bəli',            wrong: 'Xeyr'         },
    { en: 'Bu hadisənin adı nədir?',                                   tr: 'Zamanların uzlaşması', wrong: 'Zamanların növləri' },
    { en: '"I heard that he is ill." — uzlaşma düzdürmü?',            tr: 'Xeyr',            wrong: 'Bəli'         },

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Zamanların uzlaşması qaydası nə vaxt tətbiq olunur?',
          options: [
            'Baş cümlə indiki zamanda olduqda',
            'Baş cümlə keçmiş zamanda olduqda',
            'Hər zaman',
            'Yalnız sual cümlələrində',
          ],
          answer: 'Baş cümlə keçmiş zamanda olduqda',
        },
        {
          q: '"I heard that he ___ ill." — düzgün forma hansıdır?',
          options: ['is', 'will be', 'was', 'has been'],
          answer: 'was',
        },
        {
          q: 'Zamanların uzlaşması hansı cümlə növünə aiddir?',
          options: ['Sadə cümlə', 'Tabeli mürəkkəb cümlə', 'Tabesiz mürəkkəb cümlə', 'Sual cümləsi'],
          answer: 'Tabeli mürəkkəb cümlə',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Şərt və vaxt budaq cümlələri (if, when, until…) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Şərt və vaxt budaq cümlələri',
  cards: [

    // ── Ekran 1: Əsas qayda ──────────────────────────────
    {
      type: 'lesson',
      title: 'if, when, after, before, as soon as, till, until',
      content:
        'Əgər budaq cümlə when, if, after, before, as soon as, till, until ' +
        'bağlayıcıları ilə bağlanarsa:\n\n' +
        '• Budaq cümlə → indiki qeyri-müəyyən zamanda\n' +
        '• Baş cümlə → gələcək qeyri-müəyyən zamanda (shall/will)\n\n' +
        'Əgər baş cümlə əmr formasında olsa, budaq cümlə yenə indiki qeyri-müəyyən zamanda olur.',
      table: [
        ['Baş cümlə',                    'Budaq cümlə',              'Bağlayıcı'],
        ['I shall go to the cinema',     'if my mother comes',       'if'],
        ['We shall go to the forest',    'if the rain stops',        'if'],
        ['Go to school',                 'if mother comes',          'if (əmr)'],
        ['Go to the forest',             'if the rain stops',        'if (əmr)'],
      ],
      examples: [
        { word: 'If my mother comes, I shall go to the cinema.',  az: 'Anam gələrsə, kinoya gedəcəyəm.' },
        { word: 'If the rain stops, we shall go to the forest.',  az: 'Yağış dayanarsa, meşəyə gedəcəyik.' },
        { word: 'Go to school if mother comes.',                   az: 'Əgər ana gəlsə, məktəbə get.' },
      ],
      tip: 'Xatırla: "if/when" olan tərəfdə SHALL/WILL işlənmir — o tərəf indiki qeyri-müəyyəndə qalır.',
    },

    // ── Quiz ─────────────────────────────────────────────
    {
  type: 'mini_check',
  questions: [
    {
      q: '"If she comes, I ___ go." — boşluğa nə gəlir?',
      options: ['will', 'shall', 'will go', 'went'],
      answer: 'shall',
    },
    {
      q: '"if" olan budaq cümlə hansı zamanda olur?',
      options: ['Gələcək', 'Keçmiş qeyri-müəyyən', 'İndiki qeyri-müəyyən', 'İndiki bitmiş'],
      answer: 'İndiki qeyri-müəyyən',
    },
    {
      q: '"until" olan budaq cümlənin baş cümləsi hansı zamanda?',
      options: ['Keçmiş', 'İndiki qeyri-müəyyən', 'Gələcək qeyri-müəyyən', 'İndiki davamedici'],
      answer: 'Gələcək qeyri-müəyyən',
    },
    {
      q: 'Baş cümlə əmr formasında olsa budaq cümlə hansı zamanda?',
      options: ['Keçmiş', 'Gələcək', 'İndiki qeyri-müəyyən', 'İndiki bitmiş'],
      answer: 'İndiki qeyri-müəyyən',
    },
    {
      q: '"Go to the forest if the rain stops." — "stops" düzdür?',
      options: ['Bəli', 'Xeyr', 'Hər ikisi olar', 'Kontekstdən asılıdır'],
      answer: 'Bəli',
    },
  ],
}

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"If the rain stops, we ___ go to the forest." — boşluq?',
          options: ['go', 'went', 'shall go', 'have gone'],
          answer: 'shall go',
        },
        {
          q: '"as soon as" bağlayıcısı olan budaq cümlə hansı zamanda olur?',
          options: ['Gələcək qeyri-müəyyən', 'Keçmiş qeyri-müəyyən', 'İndiki qeyri-müəyyən', 'İndiki bitmiş'],
          answer: 'İndiki qeyri-müəyyən',
        },
        {
          q: '"Go to school if mother comes." — bu cümlədə baş cümlə hansı formadadır?',
          options: ['Gələcək', 'İndiki', 'Əmr', 'Keçmiş'],
          answer: 'Əmr',
        },
        {
          q: '"till" bağlayıcısı olan budaq cümlənin baş cümləsi hansı zamanda olur?',
          options: ['Keçmiş qeyri-müəyyən', 'Gələcək qeyri-müəyyən', 'İndiki davamedici', 'Keçmiş bitmiş'],
          answer: 'Gələcək qeyri-müəyyən',
        },
      ],
    },
  ],
},


// ── Quiz 1 — Mərhələ 1 yekun ─────────────────────────────
[
  { en: 'Baş cümlə keçmişdədirsə budaq cümlə hansı zamanda olmalıdır?',  tr: 'Keçmiş',              wrong: 'İndiki'            },
  { en: '"I heard that he was ill." — uzlaşma düzdürmü?',                tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"if" olan budaq cümlə hansı zamanda işlənir?',                  tr: 'İndiki qeyri-müəyyən', wrong: 'Gələcək'           },
  { en: '"when" olan budaq cümlənin baş cümləsi hansı zamanda ola bilər?', tr: 'Gələcək qeyri-müəyyən', wrong: 'Keçmiş bitmiş' },
  { en: '"until" bağlayıcısından sonra "will" işlənirmi?',               tr: 'Xeyr',                wrong: 'Bəli'              },
  { en: 'Baş cümlə əmr formasında olduqda budaq cümlə hansı zamanda?',   tr: 'İndiki qeyri-müəyyən', wrong: 'Keçmiş'           },
  { en: '"Go to school if mother comes." — "comes" düzdür?',             tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"If the rain stops, we will go." — düzdür?',                    tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"as soon as" bağlayıcısı şərt budaq cümlələrinə aiddir?',       tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"She said that he was ill." — uzlaşma varmı?',                  tr: 'Bəli',                wrong: 'Xeyr'              },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 2 — Eyni vaxt və ardıcıllıq                  │
// │  Simultaneous & Sequential Actions                     │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'When / While',
},
      
// ── Dərs 2.1 — Eyni vaxtda baş verən hərəkətlər (when, while) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Eyni vaxtda baş verən hərəkətlər',
  cards: [

    // ── Ekran 1: when ilə ────────────────────────────────
    {
      type: 'lesson',
      title: 'Eyni vaxt — when bağlayıcısı',
      content:
        'Baş cümlə ilə budaq cümlədəki hərəkət eyni vaxtda baş verərsə:\n\n' +
        '• Budaq cümlə (when ilə) → keçmiş qeyri-müəyyən zamanda\n' +
        '• Baş cümlə → keçmiş davamedici və ya keçmiş qeyri-müəyyən zamanda',
      table: [
        ['Budaq cümlə (when)',          'Baş cümlə',                  'Baş cümlə zamanı'],
        ['When I came',                 'my friend was writing something', 'Keçmiş davamedici'],
        ['When my father came',         'I was preparing my lessons',      'Keçmiş davamedici'],
      ],
      examples: [
        { word: 'When I came, my friend was writing something.',    az: 'Mən gələndə dostum nəsə yazırdı.' },
        { word: 'When my father came, I was preparing my lessons.', az: 'Atam gələndə mən dərslərimi hazırlayırdım.' },
      ],
      tip: 'when + keçmiş qeyri-müəyyən → baş cümlədə keçmiş davamedici (uzun sürən hərəkət).',
    },

    // ── Ekran 2: while ilə ───────────────────────────────
    {
      type: 'lesson',
      title: 'Eyni vaxt — while bağlayıcısı',
      content:
        'While ilə verilən budaq cümlələrdə:\n\n' +
        '• While olan tərəf → keçmiş davamedici zamanda\n' +
        '• Baş cümlə → keçmiş qeyri-müəyyən və ya keçmiş davamedici zamanda',
      table: [
        ['Budaq cümlə (while)',            'Baş cümlə',                      'Baş cümlə zamanı'],
        ['While I was coming',             'he prepared his lessons',          'Keçmiş qeyri-müəyyən'],
        ['While I was coming',             'he was preparing his lessons',     'Keçmiş davamedici'],
      ],
      examples: [
        { word: 'While I was coming, he prepared his lessons.',         az: 'Mən gəlirkən o dərslərini hazırladı.' },
        { word: 'While I was coming, he was preparing his lessons.',    az: 'Mən gəlirkən o dərslərini hazırlayırdı.' },
      ],
      tip: 'while → hər zaman keçmiş davamedici (while olan tərəfdə). Baş cümlə hər iki keçmiş formada ola bilər.',
    },

    // ── Quiz ─────────────────────────────────────────────
  {
  type: 'mini_check',
  questions: [
    {
      q: '"When I came, my friend ___ writing." — boşluq?',
      options: ['is', 'was', 'were', 'has been'],
      answer: 'was',
    },
    {
      q: '"when" olan budaq cümlə hansı zamanda olur (eyni vaxt)?',
      options: ['Keçmiş davamedici', 'Keçmiş bitmiş', 'Keçmiş qeyri-müəyyən', 'İndiki qeyri-müəyyən'],
      answer: 'Keçmiş qeyri-müəyyən',
    },
    {
      q: '"while" olan budaq cümlə hansı zamanda olur?',
      options: ['Keçmiş qeyri-müəyyən', 'Keçmiş bitmiş', 'Keçmiş davamedici', 'İndiki davamedici'],
      answer: 'Keçmiş davamedici',
    },
    {
      q: '"While I was coming, he ___ his lessons." — boşluq?',
      options: ['prepares', 'is preparing', 'prepared', 'has prepared'],
      answer: 'prepared',
    },
    {
      q: '"when" ilə eyni vaxt bildirilir?',
      options: ['Xeyr', 'Bəli', 'Yalnız gələcəkdə', 'Yalnız keçmişdə'],
      answer: 'Bəli',
    },
    {
      q: '"While I was reading, she was singing." — bu cümlə düzdür?',
      options: ['Xeyr', 'Bəli', 'Qismən düzdür', 'Kontekstdən asılıdır'],
      answer: 'Bəli',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"When my father came, I ___ my lessons." — düzgün forma?',
          options: ['prepare', 'was preparing', 'have prepared', 'will prepare'],
          answer: 'was preparing',
        },
        {
          q: '"while" olan budaq cümlə mütləq hansı zamanda olur?',
          options: ['Keçmiş qeyri-müəyyən', 'Keçmiş bitmiş', 'Keçmiş davamedici', 'İndiki davamedici'],
          answer: 'Keçmiş davamedici',
        },
        {
          q: '"While I was coming, he ___ his lessons." — iki düzgün variant?',
          options: [
            'prepared / was preparing',
            'prepares / is preparing',
            'had prepared / prepared',
            'will prepare / prepares',
          ],
          answer: 'prepared / was preparing',
        },
        {
          q: 'Eyni vaxt bildirən when budaq cümləsinin baş cümləsi hansı zamanda ola bilər?',
          options: [
            'Yalnız keçmiş davamedici',
            'Keçmiş davamedici və ya keçmiş qeyri-müəyyən',
            'İndiki qeyri-müəyyən',
            'Gələcək qeyri-müəyyən',
          ],
          answer: 'Keçmiş davamedici və ya keçmiş qeyri-müəyyən',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Əvvəl baş verən hərəkət (before, when + keçmiş bitmiş) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Əvvəl baş verən hərəkət',
  cards: [

    // ── Ekran 1: before / when ilə ───────────────────────
    {
      type: 'lesson',
      title: 'Budaq cümlədəki hərəkət daha əvvəl baş verib — before / when',
      content:
        'Budaq cümlədəki hərəkət baş cümlədəki hərəkətdən əvvəl icra edilibsə:\n\n' +
        '• Budaq cümlə (before / when ilə) → keçmiş qeyri-müəyyən zamanda\n' +
        '• Baş cümlə → keçmiş bitmiş zamanda (had + V3)',
      table: [
        ['Budaq cümlə',              'Baş cümlə',                       'İzah'],
        ['When I came',              'my sister had done her homework',  'before ilə eyni məntiqlə'],
        ['Before my father came',    'I had done my homework',           'before = əvvəl'],
      ],
      examples: [
        { word: 'When I came, my sister had done her homework.',  az: 'Mən gələndə bacım ev tapşırığını etmişdi.' },
        { word: 'Before my father came, I had done my homework.', az: 'Atam gəlməmişdən əvvəl ev tapşırığımı etmişdim.' },
      ],
      tip: 'Keçmiş bitmiş (had + V3) — 1-ci hərəkəti (daha əvvəl baş verəni) bildirir.',
    },

    // ── Ekran 2: after ilə ───────────────────────────────
    {
      type: 'lesson',
      title: 'after ilə — əksinə sıralama',
      content:
        'After ilə olan budaq cümlələrdə sıralama əksinə olur:\n\n' +
        '• After olan tərəf → keçmiş bitmiş zamanda (1-ci hərəkət)\n' +
        '• Baş cümlə → keçmiş qeyri-müəyyən zamanda (2-ci hərəkət)',
      table: [
        ['Bağlayıcı',   '1-ci hərəkət (keçmiş bitmiş)',         '2-ci hərəkət (keçmiş q/m)'],
        ['after',       'After my mother had slept',             'I came'],
        ['before',      'Before my father came (q/m)',           'I had done (keçmiş bitmiş)'],
      ],
      examples: [
        { word: 'After my mother had slept, I came.',    az: 'Anam yatdıqdan sonra mən gəldim.' },
      ],
      tip:
        'Qayda: "after" olan tərəf keçmiş bitmiş — çünki "after" özü "sonra" deməkdir, ' +
        'həmin tərəfdəki iş artıq bitib.\n' +
        '"before" olan tərəf keçmiş qeyri-müəyyən — baş cümlə keçmiş bitmiş.',
    },

  {
  type: 'mini_check',
  questions: [
    {
      q: '"When I came, my sister ___ her homework." — boşluq?',
      options: ['did', 'has done', 'had done', 'was doing'],
      answer: 'had done',
    },
    {
      q: '"before" budaq cümləsinin baş cümləsi hansı zamanda olur?',
      options: ['Keçmiş qeyri-müəyyən', 'Keçmiş davamedici', 'Keçmiş bitmiş', 'İndiki bitmiş'],
      answer: 'Keçmiş bitmiş',
    },
    {
      q: '"after" olan tərəf hansı zamanda olur?',
      options: ['Keçmiş qeyri-müəyyən', 'Keçmiş davamedici', 'İndiki bitmiş', 'Keçmiş bitmiş'],
      answer: 'Keçmiş bitmiş',
    },
    {
      q: '"After my mother had slept, I ___." — baş cümlə hansı zamanda olur?',
      options: ['Keçmiş bitmiş', 'İndiki qeyri-müəyyən', 'Keçmiş davamedici', 'Keçmiş qeyri-müəyyən'],
      answer: 'Keçmiş qeyri-müəyyən',
    },
    {
      q: '"before" olan tərəf hansı zamanda olur?',
      options: ['Keçmiş bitmiş', 'Keçmiş davamedici', 'İndiki bitmiş', 'Keçmiş qeyri-müəyyən'],
      answer: 'Keçmiş qeyri-müəyyən',
    },
    {
      q: '"had done" — bu hansı zamanın formasıdır?',
      options: ['İndiki bitmiş', 'Gələcək bitmiş', 'Keçmiş davamedici', 'Keçmiş bitmiş'],
      answer: 'Keçmiş bitmiş',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Before my father came, I ___ my homework." — düzgün forma?',
          options: ['did', 'do', 'had done', 'have done'],
          answer: 'had done',
        },
        {
          q: '"After my mother had slept, I ___." — baş cümlə zamanı?',
          options: ['had come', 'have come', 'came', 'come'],
          answer: 'came',
        },
        {
          q: '"when + keçmiş qeyri-müəyyən" → baş cümlə hansı zamanda?',
          options: ['İndiki', 'Keçmiş davamedici', 'Keçmiş bitmiş', 'Gələcək'],
          answer: 'Keçmiş bitmiş',
        },
        {
          q: '"after" olan budaq cümlə hansı zamanda olur?',
          options: ['Keçmiş qeyri-müəyyən', 'Keçmiş davamedici', 'Keçmiş bitmiş', 'İndiki bitmiş'],
          answer: 'Keçmiş bitmiş',
        },
        {
          q: '"When I came, my sister had done her homework." — Azərbaycanca?',
          options: [
            'Mən gələndə bacım ev tapşırığını edirdi.',
            'Mən gəlməmişdən əvvəl bacım ev tapşırığını etdi.',
            'Mən gələndə bacım ev tapşırığını etmişdi.',
            'Bacım gəldi, mən ev tapşırığımı etdim.',
          ],
          answer: 'Mən gələndə bacım ev tapşırığını etmişdi.',
        },
      ],
    },
  ],
},


// ── Quiz 2 — Mərhələ 2 yekun ─────────────────────────────
[
  // when / while fərqi
  { en: '"when" olan budaq cümlə eyni vaxtda hansı zamanda olur?',      tr: 'Keçmiş q/m',          wrong: 'Keçmiş davamedici' },
  { en: '"while" olan budaq cümlə həmişə hansı zamanda olur?',          tr: 'Keçmiş davamedici',   wrong: 'Keçmiş q/m'        },
  { en: '"When I came, he ___ writing." — boşluq?',                     tr: 'was',                 wrong: 'had been'          },
  { en: '"While I was reading, she ___ singing." — baş cümlə?',         tr: 'was',                 wrong: 'had been'          },

  // before / after / when + keçmiş bitmiş
  { en: '"before" olan tərəf hansı zamanda olur?',                      tr: 'Keçmiş q/m',          wrong: 'Keçmiş bitmiş'     },
  { en: '"before" olan cümlənin baş cümləsi hansı zamanda?',            tr: 'Keçmiş bitmiş',       wrong: 'Keçmiş q/m'        },
  { en: '"after" olan tərəf hansı zamanda olur?',                       tr: 'Keçmiş bitmiş',       wrong: 'Keçmiş q/m'        },
  { en: '"After she had gone, I ___." — baş cümlə zamanı?',             tr: 'Keçmiş q/m',          wrong: 'Keçmiş bitmiş'     },
  { en: '"When I came, she ___ her work." — boşluq?',                   tr: 'had finished',        wrong: 'finished'          },
  { en: '"Before he came, I ___ dinner." — boşluq?',                    tr: 'had cooked',          wrong: 'cooked'            },

  // Cümlə düzgünlüyü
  { en: '"While I was reading, he prepared dinner." — düzdür?',         tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"After I came, she had left." — düzdür?',                      tr: 'Xeyr',                wrong: 'Bəli'              },
],

{
      type: 'section_divider',
      title: 'The future indefinite in the past',
},
      

// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 3 — Since və Gələcəyə aid keçmiş             │
// │  Since & Future in the Past                            │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 3.1 — Since + indiki bitmiş ─────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Since + indiki bitmiş zaman',
  cards: [

    // ── Ekran 1: Qayda ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Since — indiki bitmiş zamanla işlənir',
      content:
        'Aşağıdakı hallarda baş cümlə indiki bitmiş zamanda (have/has + V3) olur:\n\n' +
        '• since + illər (since 2010)\n' +
        '• since then\n' +
        '• since + keçmiş qeyri-müəyyəndə olan budaq cümlə (since he came)\n' +
        '• since + həftənin günləri (since Monday)',
      table: [
        ['Budaq cümlə (since)',        'Baş cümlə',                          'İzah'],
        ['since he came',             'I haven\'t seen her',                 'since + keçmiş q/m → indiki bitmiş'],
        ['since 2010',                'She has lived here',                  'since + il → indiki bitmiş'],
        ['since Monday',              'He hasn\'t called',                   'since + gün → indiki bitmiş'],
        ['since then',                'Things have changed',                 'since then → indiki bitmiş'],
      ],
      examples: [
        { word: 'I haven\'t seen her since he came.',   az: 'O gəldiyindən bəri mən onu görmədim.' },
        { word: 'She has lived here since 2010.',       az: 'O, 2010-dan bəri burada yaşayır.' },
      ],
      tip: 'since = "bəri" — həmişə indiki bitmiş (present perfect) ilə işlənir.',
    },

    // ── Quiz ─────────────────────────────────────────────
  {
  type: 'mini_check',
  questions: [
    {
      q: '"since" bağlayıcısı baş cümləni hansı zamanda tələb edir?',
      options: ['Keçmiş qeyri-müəyyən', 'Keçmiş bitmiş', 'İndiki qeyri-müəyyən', 'İndiki bitmiş'],
      answer: 'İndiki bitmiş',
    },
    {
      q: '"since he came" → baş cümlə hansı zamanda olur?',
      options: ['Keçmiş bitmiş', 'Keçmiş qeyri-müəyyən', 'İndiki qeyri-müəyyən', 'İndiki bitmiş'],
      answer: 'İndiki bitmiş',
    },
    {
      q: '"I ___ seen her since he came." — boşluq?',
      options: ["didn't", "wasn't", "haven't", "hadn't"],
      answer: "haven't",
    },
    {
      q: '"since Monday" → baş cümlə hansı zamanda olur?',
      options: ['Keçmiş qeyri-müəyyən', 'Keçmiş davamedici', 'İndiki davamedici', 'İndiki bitmiş'],
      answer: 'İndiki bitmiş',
    },
    {
      q: '"since then" → baş cümlə hansı zamanda olur?',
      options: ['İndiki qeyri-müəyyən', 'Keçmiş qeyri-müəyyən', 'Keçmiş bitmiş', 'İndiki bitmiş'],
      answer: 'İndiki bitmiş',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ seen her since he came." — düzgün forma?',
          options: ['didn\'t', 'don\'t', 'haven\'t', 'hadn\'t'],
          answer: 'haven\'t',
        },
        {
          q: '"Since 2010" → baş cümlə hansı zamanda olur?',
          options: ['Keçmiş q/m', 'Keçmiş bitmiş', 'İndiki bitmiş', 'İndiki q/m'],
          answer: 'İndiki bitmiş',
        },
        {
          q: '"since" ilə işlənən budaq cümlə özü hansı zamanda olur?',
          options: ['İndiki bitmiş', 'Keçmiş davamedici', 'Keçmiş qeyri-müəyyən', 'İndiki q/m'],
          answer: 'Keçmiş qeyri-müəyyən',
        },
        {
          q: '"She ___ here since Monday." — düzgün forma?',
          options: ['lives', 'lived', 'has lived', 'had lived'],
          answer: 'has lived',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — Gələcəyə aid keçmiş (Future in the Past) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Gələcəyə aid keçmiş (Future in the Past)',
  cards: [

    // ── Ekran 1: Qayda ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Future in the Past — would / could / might',
      content:
        'Baş cümlə keçmiş qeyri-müəyyən zamanda olarsa, budaq cümlədə gələcəyə ' +
        'aid olan hərəkətlər keçmişə nəzərən gələcək zamanda (would / could / might) olur.\n\n' +
        'Yəni: shall → would, will → would',
      table: [
        ['İndiki zaman (baş c.)',         'Keçmiş zaman (baş c.)',           'Budaq cümlə'],
        ['She says that he will come.',   'She said that he would come.',    'will → would'],
        ['He thinks he can do it.',       'He thought he could do it.',      'can → could'],
        ['She hopes it may be true.',     'She hoped it might be true.',     'may → might'],
      ],
      examples: [
        { word: 'He said that he would come.',     az: 'O dedi ki, gələcəkdir.' },
        { word: 'She said she would be late.',     az: 'O dedi ki, gecikəcəkdir.' },
      ],
      tip: 'Uzlaşma cədvəli: shall/will → would · can → could · may → might',
    },

    // ── Ekran 2: Uzlaşma cədvəli ─────────────────────────
    {
      type: 'lesson',
      title: 'Zamanların uzlaşması — tam dəyişim cədvəli',
      content: 'Baş cümlə keçmişdədirsə budaq cümlədəki fellərin dəyişimi:',
      table: [
        ['İndiki forma',           'Keçmiş (uzlaşma) forması'],
        ['am / is / are',          'was / were'],
        ['do / does',              'did'],
        ['have / has',             'had'],
        ['will / shall',           'would'],
        ['can',                    'could'],
        ['may',                    'might'],
        ['Present Simple',         'Past Simple'],
        ['Present Continuous',     'Past Continuous'],
        ['Present Perfect',        'Past Perfect'],
        ['Future Simple',          'Future in the Past (would)'],
      ],
    },

    // ── Quiz ─────────────────────────────────────────────
    {
  type: 'mini_check',
  questions: [
    {
      q: '"He said that he ___ come." — boşluq?',
      options: ['will', 'could', 'might', 'would'],
      answer: 'would',
    },
    {
      q: '"will" dolayı nitqdə keçmiş zamana nəyə çevrilir?',
      options: ['could', 'might', 'should', 'would'],
      answer: 'would',
    },
    {
      q: '"can" dolayı nitqdə keçmiş zamana nəyə çevrilir?',
      options: ['would', 'might', 'should', 'could'],
      answer: 'could',
    },
    {
      q: '"may" dolayı nitqdə keçmiş zamana nəyə çevrilir?',
      options: ['would', 'could', 'should', 'might'],
      answer: 'might',
    },
    {
      q: '"She said she ___ be late." — boşluq?',
      options: ['will', 'could', 'might', 'would'],
      answer: 'would',
    },
    {
      q: '"is" dolayı nitqdə keçmiş zamana nəyə çevrilir?',
      options: ['were', 'been', 'will be', 'was'],
      answer: 'was',
    },
    {
      q: '"have" dolayı nitqdə keçmiş zamana nəyə çevrilir?',
      options: ['has', 'having', 'have had', 'had'],
      answer: 'had',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She says that he will come." → keçmiş zamana çevirdikdə?',
          options: [
            'She said that he will come.',
            'She said that he would come.',
            'She said that he comes.',
            'She said that he came.',
          ],
          answer: 'She said that he would come.',
        },
        {
          q: '"can" → uzlaşmada nəyə çevrilir?',
          options: ['will', 'would', 'could', 'might'],
          answer: 'could',
        },
        {
          q: '"He thought he ___ do it." — boşluq?',
          options: ['can', 'will', 'could', 'may'],
          answer: 'could',
        },
        {
          q: '"Future in the Past" zamanı nə ilə ifadə olunur?',
          options: ['will', 'shall', 'would', 'had'],
          answer: 'would',
        },
        {
          q: '"Present Perfect" uzlaşmada nəyə çevrilir?',
          options: ['Present Simple', 'Past Simple', 'Past Perfect', 'Past Continuous'],
          answer: 'Past Perfect',
        },
      ],
    },
  ],
},


// ── Quiz 3 — Mərhələ 3 yekun ─────────────────────────────
[
  // Since
  { en: '"since" baş cümləni hansı zamanda tələb edir?',               tr: 'İndiki bitmiş',       wrong: 'Keçmiş q/m'        },
  { en: '"since Monday" → baş cümlə hansı zamanda?',                   tr: 'İndiki bitmiş',       wrong: 'Keçmiş q/m'        },
  { en: '"I ___ seen her since he came." — boşluq?',                   tr: 'haven\'t',            wrong: 'didn\'t'           },
  { en: '"since then" → baş cümlə hansı zamanda?',                     tr: 'İndiki bitmiş',       wrong: 'Keçmiş bitmiş'     },

  // Future in the Past
  { en: '"will" uzlaşmada nəyə çevrilir?',                             tr: 'would',               wrong: 'could'             },
  { en: '"can" uzlaşmada nəyə çevrilir?',                              tr: 'could',               wrong: 'would'             },
  { en: '"may" uzlaşmada nəyə çevrilir?',                              tr: 'might',               wrong: 'would'             },
  { en: '"He said that he ___ come." — boşluq?',                       tr: 'would',               wrong: 'will'              },
  { en: '"She hoped it ___ be true." — boşluq?',                       tr: 'might',               wrong: 'may'               },
  { en: '"Present Continuous" uzlaşmada nəyə çevrilir?',               tr: 'Past Continuous',     wrong: 'Past Perfect'      },
  { en: '"Present Simple" uzlaşmada nəyə çevrilir?',                   tr: 'Past Simple',         wrong: 'Past Perfect'      },
  { en: '"have/has" uzlaşmada nəyə çevrilir?',                         tr: 'had',                 wrong: 'have'              },
],


      {
      type: 'section_divider',
      title: 'Istisnalar',
},

// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 4 — Uzlaşmanın pozulması (İstisnalar)        │
// │  Exceptions to the Rule                                │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 4.1 — Uzlaşma pozula bilər: istisnalar ──────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — Uzlaşmanın pozulması: istisnalar',
  cards: [

    // ── Ekran 1: Ümumi həqiqətlər ────────────────────────
    {
      type: 'lesson',
      title: 'İstisna 1 — Ümumi həqiqətlər',
      content:
        'Ümumi həqiqətlərdən söhbət gedən budaq cümlələrdə uzlaşma pozula bilər — ' +
        'budaq cümlə indiki qeyri-müəyyən zamanda qalır, baş cümlə keçmiş zamanda olsa belə.',
      table: [
        ['Cümlə',                                                   'İzah'],
        ['The teacher said that the Earth goes around the Sun.',    'goes — ümumi həqiqət, dəyişmir'],
        ['He said that water boils at 100 degrees.',                'boils — elmi fakt, dəyişmir'],
        ['She told us that light travels faster than sound.',       'travels — fizika qanunu'],
      ],
      examples: [
        { word: 'The teacher said that the Earth goes around the Sun.', az: 'Müəllim dedi ki, Yer Günəşin ətrafında fırlanır.' },
      ],
      tip: 'Ümumi həqiqətlər, elmi faktlar, qanunlar — hər zaman indiki qeyri-müəyyəndə qalır.',
    },

    // ── Ekran 2: Müqayisə budaq cümlələri ────────────────
    {
      type: 'lesson',
      title: 'İstisna 2 — Müqayisə budaq cümlələri',
      content:
        'Müqayisə budaq cümlələrində uzlaşma pozula bilər — keçmiş və indiki zaman ' +
        'eyni cümlədə yan-yana işlənə bilər.',
      table: [
        ['Cümlə',                                                 'İzah'],
        ['She skated better last year than you skate now.',       'keçmiş + indiki q/m — müqayisə'],
        ['He ran faster yesterday than she runs today.',          'müqayisə budaq c.'],
      ],
      examples: [
        { word: 'She skated better last year than you skate now.', az: 'O keçən il sən indi sürdüyündən yaxşı sürd.' },
      ],
      tip: 'than ilə verilən müqayisə budaq cümlələrində uzlaşma tələb olunmur.',
    },

    // ── Ekran 3: Təyin budaq cümlələri ───────────────────
    {
      type: 'lesson',
      title: 'İstisna 3 — Təyin budaq cümlələri',
      content:
        'Təyin budaq cümlələrində (which, that, who ilə) uzlaşma pozula bilər — ' +
        'budaq cümlə öz məntiqi zamanında qalır.',
      table: [
        ['Cümlə',                                                   'İzah'],
        ['I read the article which published some days ago.',       'published — öz zamanında'],
        ['She met the man who works at the hospital.',              'works — indiki hal'],
        ['He bought the book that she recommended.',                'recommended — öz keçmiş zamanında'],
      ],
      examples: [
        { word: 'I read the article which published some days ago.', az: 'Mən bir neçə gün əvvəl nəşr edilmiş məqaləni oxudum.' },
      ],
      tip: 'Təyin budaq cümlələri müstəqildir — onlar aid olduqları ismin zamanına tabe olur, baş cümləyə deyil.',
    },

    // ── Ekran 4: Üç istisna — xülasə ────────────────────
    {
      type: 'lesson',
      title: 'Üç istisna — xülasə cədvəli',
      content: 'Uzlaşma aşağıdakı üç halda pozula bilər:',
      table: [
        ['İstisna növü',             'Nümunə'],
        ['Ümumi həqiqət / elmi fakt', 'The Earth goes around the Sun.'],
        ['Müqayisə budaq cümləsi',   'She skated better than you skate now.'],
        ['Təyin budaq cümləsi',       'I read the article which published some days ago.'],
      ],
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"The Earth goes around the Sun" — uzlaşma pozulubmu?',
      options: ['Xeyr', 'Bəli, ümumi həqiqətdir', 'Bəli, səhvdir', 'Kontekstdən asılıdır'],
      answer: 'Bəli, ümumi həqiqətdir',
    },
    {
      q: 'Ümumi həqiqətlərdə budaq cümlə hansı zamanda qalır?',
      options: ['Keçmiş qeyri-müəyyən', 'İndiki bitmiş', 'İndiki davamedici', 'İndiki qeyri-müəyyən'],
      answer: 'İndiki qeyri-müəyyən',
    },
    {
      q: 'Müqayisə budaq cümlələrində zamanların uzlaşması tələb olunurmu?',
      options: ['Bəli', 'Bəzən', 'Yalnız keçmişdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"than" ilə verilən budaq cümlə zamanların uzlaşmasından istisnadır?',
      options: ['Xeyr', 'Yalnız gələcəkdə', 'Yalnız keçmişdə', 'Bəli'],
      answer: 'Bəli',
    },
    {
      q: 'Təyin budaq cümlələri hansı bağlayıcılarla verilir?',
      options: ['if / when', 'since / until', 'because / although', 'which / that / who'],
      answer: 'which / that / who',
    },
    {
      q: '"She skated better last year than you skate now." — bu cümlə düzdür?',
      options: ['Xeyr', 'Qismən düzdür', 'Kontekstdən asılıdır', 'Bəli'],
      answer: 'Bəli',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The teacher said that the Earth ___ around the Sun." — düzgün forma?',
          options: ['went', 'had gone', 'would go', 'goes'],
          answer: 'goes',
        },
        {
          q: 'Uzlaşma neçə istisna halında pozula bilər?',
          options: ['1', '2', '3', '4'],
          answer: '3',
        },
        {
          q: '"She skated better last year than you ___ now." — boşluq?',
          options: ['skated', 'had skated', 'skate', 'would skate'],
          answer: 'skate',
        },
        {
          q: 'Hansı budaq cümlə növündə uzlaşma pozulur?',
          options: [
            'Yalnız ümumi həqiqətlər',
            'Ümumi həqiqət, müqayisə, təyin budaq cümlələri',
            'Yalnız müqayisə budaq cümlələri',
            'Yalnız şərt budaq cümlələri',
          ],
          answer: 'Ümumi həqiqət, müqayisə, təyin budaq cümlələri',
        },
        {
          q: '"I read the article which ___ some days ago." — düzgün forma?',
          options: ['publishes', 'had published', 'published', 'would publish'],
          answer: 'published',
        },
      ],
    },
  ],
},


// ── Quiz 4 — İstisnalar ───────────────────────────────────
[
  // Ümumi həqiqətlər
  { en: 'Ümumi həqiqətlər — uzlaşma tətbiq olunurmu?',                 tr: 'Xeyr',                wrong: 'Bəli'              },
  { en: '"The Earth goes around the Sun." — "goes" düzdür?',           tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"He said that water boils at 100°." — düzdür?',               tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: '"He said that water boiled at 100°." — uzlaşma varmı?',       tr: 'Bəli',                wrong: 'Xeyr'              },

  // Müqayisə
  { en: 'Müqayisə budaq cümlələrindən əvvəl hansı söz gəlir?',        tr: 'than',                wrong: 'that'              },
  { en: '"She skated better than you skate now." — düzdür?',           tr: 'Bəli',                wrong: 'Xeyr'              },
  { en: 'Müqayisə budaq cümlələrindən uzlaşma tələb olunurmu?',        tr: 'Xeyr',                wrong: 'Bəli'              },

  // Təyin budaq cümlələri
  { en: 'Təyin budaq cümləsinin bağlayıcıları hansılardır?',           tr: 'which / that / who',  wrong: 'if / when / since' },
  { en: '"I read the article which published some days ago." — düzdür?', tr: 'Bəli',              wrong: 'Xeyr'              },
  { en: 'Təyin budaq cümlələrindən uzlaşma tələb olunurmu?',           tr: 'Xeyr',                wrong: 'Bəli'              },
],

{
      type: 'section_divider',
      title: 'SEGUENCE OF TENSES - ÜMUMİ İMTAHAN',
},
// ── Final Quiz — Zamanların uzlaşması ────────────────────
[
  // Əsas qayda
  { en: 'Baş cümlə keçmişdədirsə budaq cümlə hansı zamanda olur?',     tr: 'Keçmiş',                  wrong: 'İndiki'             },
  { en: '"I heard that he was ill." — uzlaşma varmı?',                  tr: 'Bəli',                    wrong: 'Xeyr'               },
  { en: '"She said that he is ill." — uzlaşma düzdürmü?',               tr: 'Xeyr',                    wrong: 'Bəli'               },

  // Şərt / vaxt budaq cümlələri
  { en: '"if" olan budaq cümlə hansı zamanda olur?',                    tr: 'İndiki q/m',              wrong: 'Gələcək q/m'        },
  { en: '"until" olan budaq cümlənin baş cümləsi hansı zamanda?',       tr: 'Gələcək q/m',             wrong: 'Keçmiş q/m'         },
  { en: '"Go to school if mother comes." — "comes" düzdür?',            tr: 'Bəli',                    wrong: 'Xeyr'               },
  { en: 'Baş cümlə əmr formasında olsa budaq cümlə hansı zamanda?',    tr: 'İndiki q/m',              wrong: 'Keçmiş q/m'         },

  // Eyni vaxt / while / when
  { en: '"when" eyni vaxt bildirir — baş cümlə hansı zamanda?',        tr: 'Keçmiş davamedici / q/m', wrong: 'Keçmiş bitmiş'      },
  { en: '"while" olan tərəf hansı zamanda olur?',                       tr: 'Keçmiş davamedici',       wrong: 'Keçmiş q/m'         },
  { en: '"When I came, he ___ writing." — boşluq?',                    tr: 'was',                     wrong: 'had been'           },

  // Before / after / when + keçmiş bitmiş
  { en: '"before" olan tərəf hansı zamanda olur?',                      tr: 'Keçmiş q/m',             wrong: 'Keçmiş bitmiş'      },
  { en: '"before" cümlələrdə baş cümlə hansı zamanda?',                 tr: 'Keçmiş bitmiş',          wrong: 'Keçmiş q/m'         },
  { en: '"after" olan tərəf hansı zamanda olur?',                       tr: 'Keçmiş bitmiş',          wrong: 'Keçmiş q/m'         },
  { en: '"After she had left, I ___." — baş cümlə zamanı?',             tr: 'Keçmiş q/m',             wrong: 'Keçmiş bitmiş'      },
  { en: '"Before he came, I ___ dinner." — boşluq?',                    tr: 'had cooked',             wrong: 'cooked'             },

  // Since
  { en: '"since" baş cümləni hansı zamanda tələb edir?',                tr: 'İndiki bitmiş',           wrong: 'Keçmiş q/m'         },
  { en: '"I ___ seen her since he came." — boşluq?',                    tr: 'haven\'t',                wrong: 'didn\'t'            },
  { en: '"since then" → baş cümlə hansı zamanda?',                      tr: 'İndiki bitmiş',           wrong: 'Keçmiş bitmiş'      },

  // Future in the Past
  { en: '"will" uzlaşmada nəyə çevrilir?',                              tr: 'would',                   wrong: 'could'              },
  { en: '"can" uzlaşmada nəyə çevrilir?',                               tr: 'could',                   wrong: 'might'              },
  { en: '"may" uzlaşmada nəyə çevrilir?',                               tr: 'might',                   wrong: 'would'              },
  { en: '"He said that he ___ come." — boşluq?',                        tr: 'would',                   wrong: 'will'               },
  { en: '"Present Perfect" uzlaşmada nəyə çevrilir?',                   tr: 'Past Perfect',            wrong: 'Past Simple'        },

  // İstisnalar
  { en: 'Ümumi həqiqətlərdə uzlaşma pozulurmu?',                        tr: 'Bəli',                    wrong: 'Xeyr'               },
  { en: '"The teacher said that the Earth goes around the Sun." — düzdür?', tr: 'Bəli',                wrong: 'Xeyr'               },
  { en: 'Müqayisə budaq cümlələrindən uzlaşma tələb olunurmu?',          tr: 'Xeyr',                   wrong: 'Bəli'               },
  { en: '"She skated better than you skate now." — düzdür?',             tr: 'Bəli',                    wrong: 'Xeyr'               },
  { en: 'Təyin budaq cümlələrindən uzlaşma tələb olunurmu?',             tr: 'Xeyr',                    wrong: 'Bəli'               },
  { en: '"I read the article which published some days ago." — düzdür?', tr: 'Bəli',                    wrong: 'Xeyr'               },
  { en: 'Uzlaşma neçə istisna halında pozula bilər?',                    tr: '3',                       wrong: '2'                  },
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
// ║  SİFƏT (ADJECTIVE) — Tam bölüm                        ║
// ══════════════════════════════════════════════════════════

// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 1 — Sifətin əsasları                          │
// │  What is an adjective?                                  │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Sifətin əsasları',
},

// ── Dərs 1.1 — Sifət nədir? ──────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Sifət nədir?',
  cards: [

    // ── Ekran 1: Tərif ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Sifət (Adjective) nədir?',
      content:
        'Sifət şəxs və ya əşyanın əlamətini, keyfiyyətini bildirir.\n\n' +
        'Sifət aid olduğu isimdən əvvəl gəlir. Təyin etdiyi isimlə uzlaşmır — ' +
        'isim hansı halda, cinsdə, miqdarda olmasına baxmayaraq sifət bir formada qalır.',
      table: [
        ['Nümunə',              'İzah'],
        ['a clever boy',        'clever — boy-u təyin edir'],
        ['a long street',       'long — street-i təyin edir'],
        ['green leaves',        'green — leaves-i təyin edir'],
        ['an interesting book', 'tək isim'],
        ['five interesting books', 'cəm isim — sifət dəyişmir'],
      ],
      tip: 'Sifət zərflə də təyin oluna bilir.\nEx: The task was too difficult.',
    },

    // ── Ekran 2: Sifətin növləri — ümumi baxış ──────────
    {
      type: 'lesson',
      title: 'Sifətin növləri',
      content: 'Sifətlər quruluşca 3 növə bölünür:',
      table: [
        ['Növ',          'İzah',                                    'Nümunə'],
        ['Sadə',         'Kök halında olan sifət',                  'long, short, black, cool'],
        ['Düzəltmə',     'Suffiks/prefiks vasitəsilə düzələn',      'hopeless, careful, golden'],
        ['Mürəkkəb',     'İki və daha artıq kökdən düzələn',        'blue-eyed, snow-white'],
      ],
    },

    // ── Ekran 3: Məna baxımından növlər ─────────────────
    {
      type: 'lesson',
      title: 'Məna baxımından: əsli və nisbi sifətlər',
      content: 'Sifətlər məna baxımından 2 qrupa bölünür:',
      table: [
        ['Qrup',           'İzah',                               'Nümunə'],
        ['Əsli sifətlər',  'Kökdən sifətlərdir',                 'long, short, big, cold'],
        ['Nisbi sifətlər', '"-en" şəkilçisi vasitəsilə düzəlir', 'golden, woolen, wooden, silken'],
      ],
      tip: 'Nisbi sifətlər material/maddə bildirən isimlərdən düzəlir.\ngold → golden / wool → woolen / wood → wooden',
    },

    // ── Quiz: sifəti tanı ────────────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"a clever boy" — sifət hansıdır?',
      options: ['boy', 'a', 'clever', 'hər ikisi'],
      answer: 'clever',
    },
    {
      q: '"green leaves" — sifət hansıdır?',
      options: ['leaves', 'hər ikisi', 'heç biri', 'green'],
      answer: 'green',
    },
    {
      q: '"golden" hansı növ sifətdir?',
      options: ['Əsli', 'Mürəkkəb', 'Sadə', 'Nisbi'],
      answer: 'Nisbi',
    },
    {
      q: '"long" hansı növ sifətdir?',
      options: ['Nisbi', 'Mürəkkəb', 'Düzəltmə', 'Əsli'],
      answer: 'Əsli',
    },
    {
      q: '"blue-eyed" hansı növ sifətdir?',
      options: ['Sadə', 'Nisbi', 'Əsli', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"five interesting books" — "interesting" saydan asılı olaraq dəyişirmi?',
      options: ['Bəli', 'Bəzən', 'Yalnız çoxluqda', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"wooden" hansı isimdən düzəlib?',
      options: ['wool', 'wind', 'wade', 'wood'],
      answer: 'wood',
    },
    {
      q: '"woolen" hansı isimdən düzəlib?',
      options: ['wood', 'water', 'world', 'wool'],
      answer: 'wool',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Sifət cümlədə isimdən ___ gəlir.',
          options: ['sonra', 'əvvəl', 'uzaqda', 'ayrılıqda'],
          answer: 'əvvəl',
        },
        {
          q: '"snow-white" — hansı növ sifətdir?',
          options: ['Sadə', 'Nisbi', 'Düzəltmə', 'Mürəkkəb'],
          answer: 'Mürəkkəb',
        },
        {
          q: '"golden" necə düzəlib?',
          options: ['gold + less', 'gold + en', 'gold + ful', 'gold + ish'],
          answer: 'gold + en',
        },
        {
          q: '"an interesting book" — "five interesting books" — sifətin forması?',
          options: ['Dəyişir', 'Dəyişmir', 'Cəmdə -s alır', 'Artikl alır'],
          answer: 'Dəyişmir',
        },
        {
          q: 'Hansı sifət sadə sifətdir?',
          options: ['hopeless', 'golden', 'blue-eyed', 'cool'],
          answer: 'cool',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Düzəltmə sifətlər: suffikslər ────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Düzəltmə sifətlər: suffikslər',
  cards: [

    // ── Ekran 1: Əsas suffikslər (qrup A) ────────────────
    {
      type: 'lesson',
      title: 'Suffikslər — I qrup',
      content: 'Ən çox işlənən suffikslər:',
      table: [
        ['Suffiks', 'Mənası',          'Nümunə'],
        ['-less',   '-sız/-siz/-suz/-süz', 'hopeless, careless, useless'],
        ['-ful',    '-lı/-li/-lu/-lü', 'careful, useful, beautiful'],
        ['-like',   '-kimi',           'manlike, womanlike, childlike'],
        ['-ish',    '(xüsusiyyət)',    'boyish, childish, polish'],
        ['-ed/-d',  '(keyfiyyət)',     'lion-hearted, blue-eyed, ashamed'],
      ],
    },

    // ── Ekran 2: Əsas suffikslər (qrup B) ────────────────
    {
      type: 'lesson',
      title: 'Suffikslər — II qrup',
      content: 'Davamı:',
      table: [
        ['Suffiks',      'Mənası',           'Nümunə'],
        ['-ible/-able',  '-malı/-məli',      'responsible, possible, hospitable, eatable'],
        ['-ent/-ant',    '(xüsusiyyət)',     'important, silent, dependent, different'],
        ['-en',          '(material)',       'golden, woolen, wooden, silken'],
        ['-ous',         '(keyfiyyət)',      'famous, dangerous'],
        ['-some',        '(görünüş/hal)',    'handsome, troublesome'],
        ['-ly',          '(dövr)',           'weekly, daily, monthly'],
        ['-y',           '(hava/vəziyyət)', 'windy, cloudy, foggy, frosty, snowy'],
        ['-ic',          '(aid olan)',       'patriotic, cosmic'],
        ['-ive',         '(xüsusiyyət)',     'passive, active, collective'],
      ],
    },

    // ── Ekran 3: Mürəkkəb sifətlər ───────────────────────
    {
      type: 'lesson',
      title: 'Mürəkkəb sifətlər',
      content:
        'İki və daha artıq kökdən düzələn sifətlər müxtəlif nitq hissələrinin ' +
        'birləşməsindən əmələ gəlir. Defis (-) ilə yazılır:',
      table: [
        ['Mürəkkəb sifət', 'Mənası'],
        ['blue-eyed',      'mavi gözlü'],
        ['snow-white',     'qar kimi ağ'],
        ['pease-loving',   'sülhsevər'],
        ['lion-hearted',   'cəsur, aslan ürəkli'],
        ['shame-faced',    'utancaq'],
      ],
    },

    // ── Quiz: suffiks tanı ───────────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"hopeless" — hansı suffiks ilə düzəlib?',
      options: ['-ful', '-ous', '-ish', '-less'],
      answer: '-less',
    },
    {
      q: '"careful" — hansı suffiks ilə düzəlib?',
      options: ['-less', '-ive', '-ish', '-ful'],
      answer: '-ful',
    },
    {
      q: '"boyish" — hansı suffiks ilə düzəlib?',
      options: ['-en', '-ly', '-ous', '-ish'],
      answer: '-ish',
    },
    {
      q: '"dangerous" — hansı suffiks ilə düzəlib?',
      options: ['-ive', '-ful', '-ant', '-ous'],
      answer: '-ous',
    },
    {
      q: '"weekly" — hansı suffiks ilə düzəlib?',
      options: ['-y', '-ish', '-ful', '-ly'],
      answer: '-ly',
    },
    {
      q: '"snowy" — hansı suffiks ilə düzəlib?',
      options: ['-ly', '-ish', '-ous', '-y'],
      answer: '-y',
    },
    {
      q: '"passive" — hansı suffiks ilə düzəlib?',
      options: ['-ent', '-ous', '-able', '-ive'],
      answer: '-ive',
    },
    {
      q: '"important" — hansı suffiks ilə düzəlib?',
      options: ['-ive', '-ous', '-ible', '-ant'],
      answer: '-ant',
    },
    {
      q: '"responsible" — hansı suffiks ilə düzəlib?',
      options: ['-ous', '-able', '-ant', '-ible'],
      answer: '-ible',
    },
    {
      q: '"handsome" — hansı suffiks ilə düzəlib?',
      options: ['-ish', '-ful', '-less', '-some'],
      answer: '-some',
    },
  ],
}

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"useless" — "-less" nə mənaya gəlir?',
          options: ['-lı/-li', '-kimi', '-sız/-siz', '-malı/-məli'],
          answer: '-sız/-siz',
        },
        {
          q: '"beautiful" — hansı suffiks işlənib?',
          options: ['-less', '-ful', '-ish', '-ous'],
          answer: '-ful',
        },
        {
          q: '"foggy" — bu sifətin mənası nədir?',
          options: ['donlu', 'qarlı', 'dumanı olan', 'küləkli'],
          answer: 'dumanı olan',
        },
        {
          q: 'Mürəkkəb sifətlər necə yazılır?',
          options: ['boşluqla', 'defislə', 'bitişik', 'vergüllə'],
          answer: 'defislə',
        },
        {
          q: '"patriotic" — hansı suffiks?',
          options: ['-ive', '-ous', '-ic', '-ant'],
          answer: '-ic',
        },
        {
          q: 'Hansı sifətin suffiksi "-ible/-able" qrupuna aiddir?',
          options: ['famous', 'silent', 'hospitable', 'weekly'],
          answer: 'hospitable',
        },
      ],
    },
  ],
},

// ── Quiz 1 — Mərhələ 1 yekun ─────────────────────────────
[
  // Növ tanımaq
  { en: '"long" — hansı növ sifətdir?',                   tr: 'Sadə',      wrong: 'Düzəltmə' },
  { en: '"hopeless" — hansı növ sifətdir?',               tr: 'Düzəltmə',  wrong: 'Mürəkkəb' },
  { en: '"blue-eyed" — hansı növ sifətdir?',              tr: 'Mürəkkəb',  wrong: 'Düzəltmə' },
  { en: '"wooden" — hansı növ sifətdir?',                 tr: 'Nisbi',     wrong: 'Əsli'     },

  // Suffiks tanımaq
  { en: '"cloudless" — hansı suffiks?',                   tr: '-less',     wrong: '-ful'     },
  { en: '"helpful" — hansı suffiks?',                     tr: '-ful',      wrong: '-less'    },
  { en: '"childish" — hansı suffiks?',                    tr: '-ish',      wrong: '-like'    },
  { en: '"golden" — hansı suffiks?',                      tr: '-en',       wrong: '-ous'     },
  { en: '"cosmic" — hansı suffiks?',                      tr: '-ic',       wrong: '-ive'     },
  { en: '"active" — hansı suffiks?',                      tr: '-ive',      wrong: '-ic'      },

  // Mürəkkəb sifət
  { en: '"snow-white" — hansı növ sifətdir?',             tr: 'Mürəkkəb',  wrong: 'Sadə'     },
  { en: '"pease-loving" — mürəkkəb sifətdir?',            tr: 'Bəli',      wrong: 'Xeyr'     },

  // Qayda
  { en: 'Sifət isimdən əvvəl gəlir?',                    tr: 'Bəli',      wrong: 'Xeyr'     },
  { en: 'Sifət cəm isimlə birlikdə dəyişirmi?',           tr: 'Xeyr',      wrong: 'Bəli'     },
  { en: '"womanlike" — "-like" nə mənaya gəlir?',         tr: '-kimi',     wrong: '-lı/-li'  },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 2 — Sifətin dərəcələri                        │
// │  Degrees of Adjectives                                  │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Sifətin dərəcələri',
},

// ── Dərs 2.1 — Adi dərəcə: as…as, not so…as ─────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Adi dərəcə (Positive Degree)',
  cards: [

    // ── Ekran 1: Adi dərəcə nədir? ───────────────────────
    {
      type: 'lesson',
      title: 'Adi dərəcə — the Positive Degree',
      content:
        'Sifət adi dərəcədə heç bir morfoloji formaya malik olmur.\n\n' +
        'Adi dərəcədə sifət as…as, not so…as, not as…as bağlayıcıları ilə işlənir ' +
        'və müqayisə olunan şəxs/əşyaların eyni və ya qeyri-bərabər keyfiyyətə ' +
        'malik olduğunu bildirir.',
      table: [
        ['Bağlayıcı',      'Mənası',                     'Nümunə'],
        ['as … as',        'eyni dərəcədə',              'My room is as large as yours.'],
        ['not so … as',    'qeyri-bərabər (daha az)',     'My brother is not so strong as yours.'],
        ['not as … as',    'qeyri-bərabər (daha az)',     'She is not as tall as her sister.'],
      ],
      examples: [
        { word: 'My room is as large as yours.',              az: 'Mənim otağım səninkindən böyükdür.' },
        { word: 'My brother is not so strong as yours.',      az: 'Mənim qardaşım sənin kimi güclü deyil.' },
      ],
      tip: 'Əgər cümlədə as…as, not so…as, not as…as, too, very, quite, rather varsa — sifət adi dərəcədədir.',
    },

    // ── Quiz: adi dərəcə bağlayıcıları ───────────────────
    {
  type: 'mini_check',
  questions: [
    {
      q: '"My room is ___ large ___ yours." — eyni dərəcədə müqayisə üçün boşluqlar?',
      options: ['so … as', 'more … than', 'too … to', 'as … as'],
      answer: 'as … as',
    },
    {
      q: '"He is not ___ tall ___ his father." — daha az mənasında boşluqlar?',
      options: ['as … as', 'more … than', 'too … to', 'so … as'],
      answer: 'so … as',
    },
    {
      q: '"as … as" konstruksiyasında sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
    {
      q: '"too" işlənəndə yanındakı sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
    {
      q: '"very" işlənəndə yanındakı sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"My room is as large as yours." — sifət hansı dərəcədədir?',
          options: ['Müqayisə', 'Üstünlük', 'Adi', 'Yoxdur'],
          answer: 'Adi',
        },
        {
          q: '"not so … as" nə bildirir?',
          options: ['Eyni dərəcəli keyfiyyət', 'Ən yüksək keyfiyyət', 'Qeyri-bərabər keyfiyyət', 'Üstünlük'],
          answer: 'Qeyri-bərabər keyfiyyət',
        },
        {
          q: '"The task was too difficult." — sifət hansı dərəcədədir?',
          options: ['Müqayisə', 'Üstünlük', 'Adi', 'Nisbi'],
          answer: 'Adi',
        },
        {
          q: '"as … as" bağlayıcısı nə bildirir?',
          options: ['Daha az keyfiyyət', 'Eyni dərəcəli keyfiyyət', 'Ən yüksək keyfiyyət', 'Fərq'],
          answer: 'Eyni dərəcəli keyfiyyət',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Müqayisə dərəcəsi ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Müqayisə dərəcəsi (Comparative Degree)',
  cards: [

    // ── Ekran 1: Sintetik yol ─────────────────────────────
    {
      type: 'lesson',
      title: 'Müqayisə dərəcəsi — sintetik yol (-er)',
      content:
        'Birhecalı sifətlər və sonu -er, -e, -ow, -fle, -y ilə bitən ikihecalı ' +
        'sifətlər müqayisə dərəcəsini sintetik yolla — sona "-er" əlavə etməklə düzəldir.',
      table: [
        ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Qayda'],
        ['long',       'longer',             'sona -er'],
        ['short',      'shorter',            'sona -er'],
        ['large',      'larger',             '-e bitir: + r'],
        ['happy',      'happier',            '-y → i + er'],
        ['thin',       'thinner',            'son hərf qoşalanır + er'],
      ],
      tip: 'Müqayisə dərəcəsini "than" bağlayıcısı izləyir.\nAzərbaycan dilində: -dan/-dən daha',
    },

    // ── Ekran 2: Analitik yol ─────────────────────────────
    {
      type: 'lesson',
      title: 'Müqayisə dərəcəsi — analitik yol (more)',
      content:
        'Çoxhecalı sifətlər və sonu -er, -e, -ow, -fle, -y ilə bitməyən ikihecalı ' +
        'sifətlər müqayisə dərəcəsini analitik yolla — əvvələ "more" əlavə etməklə düzəldir.',
      table: [
        ['Adi dərəcə',    'Müqayisə dərəcəsi',         'Nümunə cümlə'],
        ['interesting',   'more interesting',           'This book is more interesting than that one.'],
        ['important',     'more important',             'This question is more important than that one.'],
        ['difficult',     'more difficult',             'This task is more difficult than that one.'],
      ],
      examples: [
        { word: 'My room is larger than yours.',               az: 'Mənim otağım sizinkindən genişdir.' },
        { word: 'This question is more important than that.',  az: 'Bu məsələ ondan daha vacibdir.' },
        { word: 'This table is much thinner than that one.',   az: 'Bu stol o birisindən daha nazikdir.' },
      ],
      tip: '"much" müqayisə dərəcəsini qüvvətləndirir.\nEx: much longer, much more interesting',
    },

    // ── Ekran 3: İşarə qaydası ───────────────────────────
    {
      type: 'lesson',
      title: 'Müqayisə dərəcəsini tanıma işarəsi',
      content: 'Əgər cümlədə aşağıdakılardan biri varsa — sifət müqayisə dərəcəsindədir:',
      table: [
        ['İşarə',   'Nümunə'],
        ['than',    'She is taller than her sister.'],
        ['much',    'This is much better.'],
        ['a little','It is a little warmer today.'],
      ],
      note: 'Müqayisə dərəcəsindən sonra sayıla bilən tək isim gələrsə, sifətin qarşısında "a/an" artikli işlənir.',
    },

    // ── Quiz: müqayisə dərəcəsi düzəlt ───────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"long" → müqayisə dərəcəsi necə düzəlir?',
      options: ['most long', 'more long', 'longing', 'longer'],
      answer: 'longer',
    },
    {
      q: '"short" → müqayisə dərəcəsi necə düzəlir?',
      options: ['more short', 'shortest', 'shorting', 'shorter'],
      answer: 'shorter',
    },
    {
      q: '"happy" → müqayisə dərəcəsi necə düzəlir?',
      options: ['more happy', 'happiest', 'happiер', 'happier'],
      answer: 'happier',
    },
    {
      q: '"interesting" → müqayisə dərəcəsi necə düzəlir?',
      options: ['interestinger', 'interestingest', 'most interesting', 'more interesting'],
      answer: 'more interesting',
    },
    {
      q: '"important" → müqayisə dərəcəsi necə düzəlir?',
      options: ['importanter', 'importantest', 'most important', 'more important'],
      answer: 'more important',
    },
    {
      q: 'Cümlədə "than" varsa sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi'],
      answer: 'Müqayisə dərəcəsi',
    },
    {
      q: '"much" ilə qüvvətlənən sifət dərəcəsi hansıdır?',
      options: ['Adi dərəcə', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi'],
      answer: 'Müqayisə dərəcəsi',
    },
    {
      q: '"thin" → müqayisə dərəcəsi necə düzəlir?',
      options: ['thiner', 'more thin', 'thinest', 'thinner'],
      answer: 'thinner',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"happy" → müqayisə dərəcəsi hansıdır?',
          options: ['more happy', 'happier', 'happiest', 'most happy'],
          answer: 'happier',
        },
        {
          q: '"This book is more interesting than that one." — Azərbaycanca?',
          options: [
            'Bu kitab ən maraqlıdır.',
            'Bu kitab o kitabdan daha maraqlıdır.',
            'Bu kitab maraqlı deyil.',
            'Bu kitab o kitab qədər maraqlıdır.',
          ],
          answer: 'Bu kitab o kitabdan daha maraqlıdır.',
        },
        {
          q: '"much" sifəti nə edir?',
          options: ['Üstünlük dərəcəsi düzəldir', 'Müqayisəni qüvvətləndirir', 'Adi dərəcə bildirir', 'İnkar bildirir'],
          answer: 'Müqayisəni qüvvətləndirir',
        },
        {
          q: 'Analitik yolla hansı sifətlər müqayisə dərəcəsi düzəldir?',
          options: [
            'Birhecalı sifətlər',
            '-y ilə bitən ikihecalı sifətlər',
            'Çoxhecalı sifətlər',
            '-ow ilə bitən sifətlər',
          ],
          answer: 'Çoxhecalı sifətlər',
        },
        {
          q: '"a little" cümlədə varsa sifət hansı dərəcədədir?',
          options: ['Adi', 'Üstünlük', 'Müqayisə', 'Nisbi'],
          answer: 'Müqayisə',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — Üstünlük dərəcəsi ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — Üstünlük dərəcəsi (Superlative Degree)',
  cards: [

    // ── Ekran 1: Sintetik yol ─────────────────────────────
    {
      type: 'lesson',
      title: 'Üstünlük dərəcəsi — sintetik yol (-est)',
      content:
        'Birhecalı sifətlər və sonu -er, -e, -ow, -fle, -y ilə bitən ikihecalı ' +
        'sifətlər üstünlük dərəcəsini "-est" əlavə etməklə düzəldir.\n\n' +
        'Bütün üstünlük dərəcəli sifətlərin qarşısında "the" müəyyənlik artikli işlənir.',
      table: [
        ['Adi',    'Müqayisə',  'Üstünlük'],
        ['long',   'longer',    'the longest'],
        ['short',  'shorter',   'the shortest'],
        ['large',  'larger',    'the largest'],
        ['happy',  'happier',   'the happiest'],
        ['thin',   'thinner',   'the thinnest'],
      ],
      examples: [
        { word: 'Ali is the strongest boy in our class.',       az: 'Əli sinifdə ən güclü oğlandır.' },
        { word: 'My grandfather is the oldest man in the village.', az: 'Babam kənddə ən qoca kişidir.' },
        { word: 'My brother is the cleverest boy of all.',      az: 'Qardaşım hamıdan ağıllı oğlandır.' },
      ],
    },

    // ── Ekran 2: Analitik yol ─────────────────────────────
    {
      type: 'lesson',
      title: 'Üstünlük dərəcəsi — analitik yol (most)',
      content: 'Çoxhecalı sifətlər üstünlük dərəcəsini əvvələ "most" əlavə etməklə düzəldir:',
      table: [
        ['Adi dərəcə',    'Üstünlük dərəcəsi'],
        ['interesting',   'the most interesting'],
        ['important',     'the most important'],
        ['difficult',     'the most difficult'],
      ],
    },

    // ── Ekran 3: İşarə qaydası ───────────────────────────
    {
      type: 'lesson',
      title: 'Üstünlük dərəcəsini tanıma işarəsi',
      content: 'Əgər cümlədə aşağıdakılardan biri varsa — sifət üstünlük dərəcəsindədir:',
      table: [
        ['İşarə',             'Nümunə'],
        ['"the" artikli',     'the strongest boy'],
        ['ever',              'the best film I have ever seen'],
        ['of all',            'the cleverest of all'],
        ['which of',          'which of them is the tallest?'],
        ['in the world',      'the longest river in the world'],
        ['among boys',        'the fastest among boys'],
        ['in the village',    'the oldest man in the village'],
        ['in the family',     'the eldest child in the family'],
        ['in class/at school','the best student in class'],
      ],
    },

    // ── Quiz: üstünlük dərəcəsi ───────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"long" → üstünlük dərəcəsi necə düzəlir?',
      options: ['the most long', 'longest', 'more longest', 'the longest'],
      answer: 'the longest',
    },
    {
      q: '"happy" → üstünlük dərəcəsi necə düzəlir?',
      options: ['the most happy', 'happiest', 'more happiest', 'the happiest'],
      answer: 'the happiest',
    },
    {
      q: '"interesting" → üstünlük dərəcəsi necə düzəlir?',
      options: ['the interestingest', 'most interesting', 'interestingest', 'the most interesting'],
      answer: 'the most interesting',
    },
    {
      q: 'Üstünlük dərəcəsindən əvvəl hansı artikl işlənir?',
      options: ['a', 'an', 'artikl işlənmir', 'the'],
      answer: 'the',
    },
    {
      q: 'Cümlədə "of all" varsa sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
    {
      q: 'Cümlədə "ever" varsa sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
    {
      q: 'Cümlədə "in the world" varsa sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Ali is the strongest boy in our class." — Azərbaycanca?',
          options: [
            'Əli sinifdən güclüdür.',
            'Əli sinifdə ən güclü oğlandır.',
            'Əli sinifdə güclü deyil.',
            'Əli sinifin güclü oğlanıdır.',
          ],
          answer: 'Əli sinifdə ən güclü oğlandır.',
        },
        {
          q: '"the most interesting" — bu hansı dərəcədir?',
          options: ['Adi', 'Müqayisə', 'Üstünlük', 'Nisbi'],
          answer: 'Üstünlük',
        },
        {
          q: 'Üstünlük dərəcəli sifətdən əvvəl hansı artikl işlənir?',
          options: ['a', 'an', 'the', 'artikl işlənmir'],
          answer: 'the',
        },
        {
          q: '"in class" işarəsi cümlədə varsa sifət hansı dərəcədədir?',
          options: ['Adi', 'Müqayisə', 'Üstünlük', 'Nisbi'],
          answer: 'Üstünlük',
        },
        {
          q: 'Çoxhecalı sifətin üstünlük dərəcəsi necə düzəlir?',
          options: ['-est əlavə etməklə', 'more əlavə etməklə', 'most əlavə etməklə', 'Dəyişmir'],
          answer: 'most əlavə etməklə',
        },
      ],
    },
  ],
},

// ── Quiz 2 — Dərəcələr ───────────────────────────────────
[
  // Adi dərəcə
  { en: '"as…as" — sifət hansı dərəcədədir?',             tr: 'Adi',       wrong: 'Müqayisə'         },
  { en: '"very" cümlədə varsa — hansı dərəcə?',           tr: 'Adi',       wrong: 'Üstünlük'         },
  { en: '"quite" cümlədə varsa — hansı dərəcə?',          tr: 'Adi',       wrong: 'Müqayisə'         },

  // Müqayisə dərəcəsi düzəltmə
  { en: '"short" → müqayisə dərəcəsi?',                   tr: 'shorter',          wrong: 'shortest'         },
  { en: '"large" → müqayisə dərəcəsi?',                   tr: 'larger',           wrong: 'more large'       },
  { en: '"difficult" → müqayisə dərəcəsi?',               tr: 'more difficult',   wrong: 'difficulter'      },
  { en: '"happy" → müqayisə dərəcəsi?',                   tr: 'happier',          wrong: 'more happy'       },

  // Üstünlük dərəcəsi düzəltmə
  { en: '"short" → üstünlük dərəcəsi?',                   tr: 'the shortest',         wrong: 'the most short'   },
  { en: '"difficult" → üstünlük dərəcəsi?',               tr: 'the most difficult',   wrong: 'the difficultest' },
  { en: '"happy" → üstünlük dərəcəsi?',                   tr: 'the happiest',         wrong: 'the most happy'   },

  // İşarə qaydası
  { en: '"than" varsa — hansı dərəcə?',                   tr: 'Müqayisə',      wrong: 'Üstünlük'         },
  { en: '"the" + sifət varsa — hansı dərəcə?',            tr: 'Üstünlük',      wrong: 'Müqayisə'         },
  { en: '"of all" varsa — hansı dərəcə?',                 tr: 'Üstünlük',      wrong: 'Müqayisə'         },
  { en: '"much longer" — "much" nə edir?',                tr: 'Qüvvətləndirir', wrong: 'Dərəcə düzəldir' },
  { en: '"a little" varsa — hansı dərəcə?',               tr: 'Müqayisə',      wrong: 'Adi'              },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 3 — İstisnalar: kökdən dəyişən sifətlər      │
// │  Irregular Adjectives                                   │
// └─────────────────────────────────────────────────────────┘

{
      type: 'section_divider',
      title: 'Kökdən dəyişən sifətlər',
},      

// ── Dərs 3.1 — good / bad / little / many ────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Düzgün olmayan dərəcələr: good / bad / little / many',
  cards: [

    // ── Ekran 1: Cədvəl ──────────────────────────────────
    {
      type: 'lesson',
      title: 'Kökdən dəyişən sifətlər',
      content:
        'Bəzi sifətlərin müqayisə və üstünlük dərəcəsi kökdən tamamilə dəyişir. ' +
        'Bunları ayrıca əzbərləmək lazımdır:',
      table: [
        ['Adi',    'Müqayisə', 'Üstünlük'],
        ['good',   'better',   'best'],
        ['bad',    'worse',    'worst'],
        ['little', 'less',     'least'],
        ['many',   'more',     'most'],
        ['much',   'more',     'most'],
      ],
      tip: 'Bu sifətlərə heç vaxt -er/-est və ya more/most əlavə edilmir.',
    },

    // ── Quiz: kökdən dəyişənlər ───────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"good" → müqayisə dərəcəsi necədir?',
      options: ['gooder', 'more good', 'goodest', 'better'],
      answer: 'better',
    },
    {
      q: '"good" → üstünlük dərəcəsi necədir?',
      options: ['goodest', 'the gooder', 'the most good', 'best'],
      answer: 'best',
    },
    {
      q: '"bad" → müqayisə dərəcəsi necədir?',
      options: ['badder', 'more bad', 'badly', 'worse'],
      answer: 'worse',
    },
    {
      q: '"bad" → üstünlük dərəcəsi necədir?',
      options: ['baddest', 'the most bad', 'the worse', 'worst'],
      answer: 'worst',
    },
    {
      q: '"little" → müqayisə dərəcəsi necədir?',
      options: ['littler', 'more little', 'fewer', 'less'],
      answer: 'less',
    },
    {
      q: '"little" → üstünlük dərəcəsi necədir?',
      options: ['littlest', 'the most little', 'fewest', 'least'],
      answer: 'least',
    },
    {
      q: '"many / much" → müqayisə dərəcəsi necədir?',
      options: ['morer', 'manyer', 'much more', 'more'],
      answer: 'more',
    },
    {
      q: '"many / much" → üstünlük dərəcəsi necədir?',
      options: ['mostest', 'the most much', 'the maniest', 'most'],
      answer: 'most',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"good" → üstünlük dərəcəsi hansıdır?',
          options: ['goodest', 'most good', 'better', 'best'],
          answer: 'best',
        },
        {
          q: '"bad" → müqayisə dərəcəsi hansıdır?',
          options: ['badder', 'most bad', 'worse', 'worst'],
          answer: 'worse',
        },
        {
          q: '"little" → müqayisə dərəcəsi hansıdır?',
          options: ['littler', 'most little', 'least', 'less'],
          answer: 'less',
        },
        {
          q: 'Bu sifətlərə -er/-est əlavə edilirmi?',
          options: ['Bəli', 'Xeyr', 'Bəzən', 'Yalnız -est'],
          answer: 'Xeyr',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — far / near / old / late ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — İki formalı sifətlər: far, near, old, late',
  cards: [

    // ── Ekran 1: Cədvəl ──────────────────────────────────
    {
      type: 'lesson',
      title: 'İki formalı sifətlər',
      content: 'Bir neçə sifətin müqayisə və üstünlük dərəcəsinin iki forması var. Hər forma ayrı məna daşıyır:',
      table: [
        ['Adi',   'Müqayisə',           'Üstünlük'],
        ['far',   'farther / further',  'farthest / furthest'],
        ['near',  'nearer',             'nearest / next'],
        ['late',  'later',              'last / latter'],
        ['old',   'older / elder',      'oldest / eldest'],
      ],
    },

    // ── Ekran 2: farther / further fərqi ─────────────────
    {
      type: 'lesson',
      title: 'farther / further — fərq',
      content: 'Hər ikisi məsafə bildirir, lakin "further" əlavə məna da verir:',
      table: [
        ['Söz',      'Məna',                    'Nümunə'],
        ['farther',  'məsafə',                  'The shop is at the farthest end of the street.'],
        ['further',  'məsafə + "sonra/daha"',   'She refused to go any further.'],
        ['further',  '"sonra" (zaman)',          'What happened further?'],
        ['further',  '"daha" (əlavə)',           'Further discussion is not necessary.'],
      ],
      examples: [
        { word: 'The shop is at the farthest end of the street.', az: 'Mağaza küçənin lap sonundadır.' },
        { word: 'What happened further?',                         az: 'Sonra nə baş verdi?' },
        { word: 'Further discussion is not necessary.',           az: 'Daha müzakirə lazım deyil.' },
      ],
    },

    // ── Ekran 3: nearest / next fərqi ────────────────────
    {
      type: 'lesson',
      title: 'nearest / next — fərq',
      content:
        '"nearest" məsafə, "next" isə sıra ilə əlaqədar işlədilir:',
      table: [
        ['Söz',      'Mənası',                    'Nümunə'],
        ['nearest',  'ən yaxın (məsafə)',          'It is the nearest way to our village.'],
        ['next',     'o biri / gələn (sıra)',      'The next year he could enter the institute.'],
        ['next',     'gələn (zaman)',              'I shall go to Moscow next year.'],
      ],
      examples: [
        { word: 'It is the nearest way to our village.',            az: 'Bu bizim kəndə gedən ən yaxın yoldur.' },
        { word: 'The next year he could enter the institute.',      az: 'O biri il o, instituta girə bildi.' },
      ],
    },

    // ── Ekran 4: older/elder, last/latter/later fərqi ────
    {
      type: 'lesson',
      title: 'older/elder · later/latter/last — fərq',
      content: '',
      table: [
        ['Söz',     'Mənası',                                'Nümunə'],
        ['older',   'yaş/müddət (ümumi)',                   'I am older than my friend.'],
        ['elder',   'böyük (ailə/rütbə)',                   'My elder brother lives in Moscow.'],
        ['eldest',  'ən böyük (ailə)',                      'She was the eldest child of the family.'],
        ['later',   'gec (zamanla)',                        'It was later than I expected.'],
        ['latter',  'ikinci / ikisindən axırıncı (sıra)',   'The latter studies at our institute.'],
        ['last',    'keçən / axırıncı / sonuncu (sıra)',    'We went to the theatre last week.'],
      ],
      note:
        'QEYD: "elder" sifətindən sonra heç vaxt "than" işlədilmir.\n' +
        '"elder" yalnız ailə üzvlərini və ya rütbəcə böyük olanları fərqləndirərkən işlənir.',
      examples: [
        { word: 'My elder brother lives in Moscow.',          az: 'Mənim böyük qardaşım Moskvada yaşayır.' },
        { word: 'She was the eldest child of the family.',    az: 'O ailənin ən böyük uşağı idi.' },
        { word: 'It was later than I expected.',             az: 'Mən gözlədiyimdən gec idi.' },
      ],
    },

    // ── Quiz: iki formalı sifətlər ────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"farther" nə bildirir?',
      options: ['Sıra', 'Zaman', 'Əlavə məna', 'Məsafə'],
      answer: 'Məsafə',
    },
    {
      q: '"further" sözünün əlavə mənası nədir?',
      options: ['Ən yaxın', 'Məsafə', 'Keçmiş', 'Sonra/daha'],
      answer: 'Sonra/daha',
    },
    {
      q: '"nearest" nə bildirir?',
      options: ['O biri (sıra)', 'Gələn (zaman)', 'Ən böyük', 'Ən yaxın (məsafə)'],
      answer: 'Ən yaxın (məsafə)',
    },
    {
      q: '"next" nə bildirir?',
      options: ['Ən yaxın (məsafə)', 'Ən böyük', 'Keçən', 'O biri/gələn (sıra)'],
      answer: 'O biri/gələn (sıra)',
    },
    {
      q: '"elder" hansı kontekstdə işlənir?',
      options: ['Ümumi yaş müqayisəsi', 'Məsafə bildirir', 'Zaman bildirir', 'Ailə/rütbə'],
      answer: 'Ailə/rütbə',
    },
    {
      q: '"older" nə bildirir?',
      options: ['Ailə böyüklüyü', 'Sıra', 'Məsafə', 'Ümumi yaş/müddət'],
      answer: 'Ümumi yaş/müddət',
    },
    {
      q: '"elder" sözündən sonra "than" işlədilirmi?',
      options: ['Bəli', 'Bəzən', 'Yalnız rəsmi nitqdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"latter" nə bildirir?',
      options: ['Gec (zaman)', 'Məsafə', 'Ən yaxın', 'İkinci/axırıncı (sıra)'],
      answer: 'İkinci/axırıncı (sıra)',
    },
    {
      q: '"later" nə bildirir?',
      options: ['İkinci (sıra)', 'Məsafə', 'Ailə böyüklüyü', 'Gec (zamanla)'],
      answer: 'Gec (zamanla)',
    },
    {
      q: '"last" nə bildirir?',
      options: ['Sonrakı', 'Ən yaxın', 'Daha çox', 'Keçən/axırıncı'],
      answer: 'Keçən/axırıncı',
    },
  ],
}
    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"My elder brother lives in Moscow." — "elder" nə mənaya gəlir?',
          options: ['Daha qoca', 'Böyük (ailə)', 'Daha uzaq', 'Sonuncu'],
          answer: 'Böyük (ailə)',
        },
        {
          q: '"elder"dən sonra hansı bağlayıcı işlədilmir?',
          options: ['and', 'but', 'than', 'or'],
          answer: 'than',
        },
        {
          q: '"It is the nearest way." — "nearest" nə bildirir?',
          options: ['Sıra', 'Ən yaxın (məsafə)', 'Gələn', 'Axırıncı'],
          answer: 'Ən yaxın (məsafə)',
        },
        {
          q: '"The next year" — "next" nə bildirir?',
          options: ['Ən yaxın məsafə', 'Gələn (sıra/zaman)', 'Ən uzaq', 'Keçən'],
          answer: 'Gələn (sıra/zaman)',
        },
        {
          q: '"We went to the theatre last week." — "last" nə mənaya gəlir?',
          options: ['Gələcək', 'Ən uzaq', 'Keçən', 'İkinci'],
          answer: 'Keçən',
        },
        {
          q: '"Further discussion is not necessary." — "further" burada nə mənaya gəlir?',
          options: ['Ən uzaq', 'Məsafə', 'Daha (əlavə)', 'Ən yaxın'],
          answer: 'Daha (əlavə)',
        },
      ],
    },
  ],
},

// ── Quiz 3 — İstisnalar ───────────────────────────────────
[
  // Kökdən dəyişənlər
  { en: '"good" → müqayisə?',                              tr: 'better',   wrong: 'gooder'   },
  { en: '"good" → üstünlük?',                              tr: 'best',     wrong: 'most good' },
  { en: '"bad" → müqayisə?',                               tr: 'worse',    wrong: 'badder'   },
  { en: '"bad" → üstünlük?',                               tr: 'worst',    wrong: 'most bad' },
  { en: '"little" → müqayisə?',                            tr: 'less',     wrong: 'littler'  },
  { en: '"many" → üstünlük?',                              tr: 'most',     wrong: 'maniest'  },

  // İki formalılar — məna fərqi
  { en: '"nearest" — məsafə, yoxsa sıra?',                 tr: 'Məsafə',   wrong: 'Sıra'     },
  { en: '"next" — məsafə, yoxsa sıra?',                    tr: 'Sıra',     wrong: 'Məsafə'   },
  { en: '"elder" — ümumi yaş, yoxsa ailə?',                tr: 'Ailə',     wrong: 'Ümumi yaş' },
  { en: '"older" — ümumi yaş, yoxsa ailə?',                tr: 'Ümumi yaş', wrong: 'Ailə'    },
  { en: '"latter" — zaman, yoxsa sıra?',                   tr: 'Sıra',     wrong: 'Zaman'    },
  { en: '"later" — zaman, yoxsa sıra?',                    tr: 'Zaman',    wrong: 'Sıra'     },
  { en: '"elder"dən sonra "than" işlədilirmi?',            tr: 'Xeyr',     wrong: 'Bəli'     },
  { en: '"further" "daha/sonra" mənasını verirmi?',         tr: 'Bəli',     wrong: 'Xeyr'     },

  // Cümlə düzgünlüyü
  { en: '"She is elder than me." — düzdür?',               tr: 'Xeyr',     wrong: 'Bəli'     },
  { en: '"She is older than me." — düzdür?',               tr: 'Bəli',     wrong: 'Xeyr'     },
  { en: '"This is the gooder book." — düzdür?',            tr: 'Xeyr',     wrong: 'Bəli'     },
  { en: '"This is the best book." — düzdür?',              tr: 'Bəli',     wrong: 'Xeyr'     },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 4 — Dərəcə tanıma: cümlədə işarələr          │
// │  How to identify the degree in a sentence              │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Cümlədə işlənməsi',
},

// ── Dərs 4.1 — Cümlədə işarə qaydaları ──────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — Cümlədə dərəcəni necə tanımaq olar?',
  cards: [

    // ── Ekran 1: Tam xülasə cədvəli ──────────────────────
    {
      type: 'lesson',
      title: 'Dərəcə tanıma — işarə cədvəli',
      content: 'Cümlədə hansı sözlər olduğuna baxaraq sifətin dərəcəsini müəyyən et:',
      table: [
        ['Dərəcə',      'Cümlədə bu sözlər olarsa'],
        ['Adi dərəcə',  'as…as · not so…as · not as…as · too · very · quite · rather'],
        ['Müqayisə',    'than · much · a little'],
        ['Üstünlük',    '"the" artikli · ever · of all · which of · in the world · among · in the village · in the family · in class · at school · of home'],
      ],
      tip:
        'Müqayisə dərəcəsindən sonra sayıla bilən tək isim gələrsə — ' +
        'sifətin qarşısında "a/an" qeyri-müəyyənlik artikli işlənir.\n' +
        'Ex: It is a longer way.',
    },

    // ── Ekran 2: Nümunə cümlələr ─────────────────────────
    {
      type: 'lesson',
      title: 'Dərəcə tanıma — nümunələr',
      content: '',
      table: [
        ['Cümlə',                                     'Dərəcə',     'İşarə'],
        ['My room is as large as yours.',             'Adi',        'as…as'],
        ['My room is larger than yours.',             'Müqayisə',   'than'],
        ['Ali is the strongest in class.',            'Üstünlük',   'the + in class'],
        ['The task was too difficult.',               'Adi',        'too'],
        ['This is much more interesting.',            'Müqayisə',   'much'],
        ['Have you ever seen a better film?',         'Üstünlük',   'ever'],
        ['It is the nearest way.',                    'Üstünlük',   'the'],
        ['She is not so tall as her sister.',         'Adi',        'not so…as'],
      ],
    },

    // ── Quiz: dərəcəni tap ───────────────────────────────
   {
  type: 'mini_check',
  questions: [
    {
      q: '"He is very tall." — sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
    {
      q: '"She is taller than me." — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi'],
      answer: 'Müqayisə dərəcəsi',
    },
    {
      q: '"It is the best film." — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Azaltma dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
    {
      q: '"I am quite tired." — sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
    {
      q: '"He is much taller." — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi'],
      answer: 'Müqayisə dərəcəsi',
    },
    {
      q: '"She is the cleverest of all." — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Azaltma dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
    {
      q: '"It is rather cold." — sifət hansı dərəcədədir?',
      options: ['Müqayisə dərəcəsi', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Adi dərəcə'],
      answer: 'Adi dərəcə',
    },
    {
      q: '"Have you ever seen a longer road?" — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Azaltma dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
    {
      q: '"It is a little warmer today." — sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Üstünlük dərəcəsi', 'Azaltma dərəcəsi', 'Müqayisə dərəcəsi'],
      answer: 'Müqayisə dərəcəsi',
    },
    {
      q: 'Cümlədə "among boys" varsa sifət hansı dərəcədədir?',
      options: ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Azaltma dərəcəsi', 'Üstünlük dərəcəsi'],
      answer: 'Üstünlük dərəcəsi',
    },
  ],
}

    // ── Mini-check ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She is not so strong as her brother." — hansı dərəcə?',
          options: ['Müqayisə', 'Üstünlük', 'Adi', 'Nisbi'],
          answer: 'Adi',
        },
        {
          q: '"This is the most important question of all." — hansı dərəcə?',
          options: ['Adi', 'Müqayisə', 'Üstünlük', 'Sadə'],
          answer: 'Üstünlük',
        },
        {
          q: '"He is a little taller than me." — hansı dərəcə?',
          options: ['Adi', 'Üstünlük', 'Müqayisə', 'Nisbi'],
          answer: 'Müqayisə',
        },
        {
          q: 'Müqayisə dərəcəsindən sonra tək isim gəlsə — hansı artikl işlənir?',
          options: ['the', 'a/an', 'artikl işlənmir', 'some'],
          answer: 'a/an',
        },
        {
          q: '"in the world" cümlədə varsa — sifət hansı dərəcədədir?',
          options: ['Adi', 'Müqayisə', 'Üstünlük', 'Düzəltmə'],
          answer: 'Üstünlük',
        },
        {
          q: '"rather" cümlədə varsa — sifət hansı dərəcədədir?',
          options: ['Müqayisə', 'Üstünlük', 'Adi', 'Mürəkkəb'],
          answer: 'Adi',
        },
      ],
    },
  ],
},

      {
      type: 'section_divider',
      title: 'ADJECTİVE - ÜMUMİ İMTAHAN',
},
// ── Final Quiz — Sifət (Adjective) ───────────────────────
[
  // Növ tanımaq
  { en: '"short" — hansı növ sifətdir?',                   tr: 'Sadə',          wrong: 'Düzəltmə'     },
  { en: '"careless" — hansı növ sifətdir?',                tr: 'Düzəltmə',      wrong: 'Sadə'         },
  { en: '"lion-hearted" — hansı növ sifətdir?',            tr: 'Mürəkkəb',      wrong: 'Düzəltmə'     },
  { en: '"silken" — hansı növ sifətdir?',                  tr: 'Nisbi',         wrong: 'Əsli'         },

  // Suffiks tanımaq
  { en: '"peaceful" — hansı suffiks?',                     tr: '-ful',          wrong: '-less'        },
  { en: '"homeless" — hansı suffiks?',                     tr: '-less',         wrong: '-ful'         },
  { en: '"troublesome" — hansı suffiks?',                  tr: '-some',         wrong: '-ish'         },
  { en: '"cosmic" — hansı suffiks?',                       tr: '-ic',           wrong: '-ive'         },
  { en: '"collective" — hansı suffiks?',                   tr: '-ive',          wrong: '-ic'          },

  // Adi dərəcə
  { en: '"as cold as ice" — hansı dərəcə?',                tr: 'Adi',           wrong: 'Müqayisə'     },
  { en: '"too hot" — hansı dərəcə?',                       tr: 'Adi',           wrong: 'Üstünlük'     },

  // Müqayisə dərəcəsi
  { en: '"cold" → müqayisə?',                              tr: 'colder',        wrong: 'more cold'    },
  { en: '"beautiful" → müqayisə?',                         tr: 'more beautiful', wrong: 'beautifuler' },
  { en: '"than" — hansı dərəcənin işarəsi?',               tr: 'Müqayisə',      wrong: 'Üstünlük'     },
  { en: '"much colder" — "much" nə edir?',                 tr: 'Qüvvətləndirir', wrong: 'Dərəcə düzəldir' },

  // Üstünlük dərəcəsi
  { en: '"cold" → üstünlük?',                              tr: 'the coldest',       wrong: 'the most cold' },
  { en: '"beautiful" → üstünlük?',                         tr: 'the most beautiful', wrong: 'the beautifulest' },
  { en: '"of all" — hansı dərəcənin işarəsi?',             tr: 'Üstünlük',      wrong: 'Müqayisə'     },
  { en: 'Üstünlük dərəcəsindən əvvəl hansı artikl?',       tr: 'the',           wrong: 'a/an'         },

  // Kökdən dəyişənlər
  { en: '"good" → better → ___?',                          tr: 'best',          wrong: 'goodest'      },
  { en: '"bad" → worse → ___?',                            tr: 'worst',         wrong: 'baddest'      },
  { en: '"little" → less → ___?',                          tr: 'least',         wrong: 'littlest'     },

  // İki formalılar
  { en: '"elder"dən sonra "than" işlədilirmi?',            tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"nearest" — məsafə, yoxsa sıra?',                 tr: 'Məsafə',        wrong: 'Sıra'         },
  { en: '"next" — məsafə, yoxsa sıra?',                    tr: 'Sıra',          wrong: 'Məsafə'       },
  { en: '"latter" nə bildirir?',                           tr: 'İkinci/axırıncı (sıra)', wrong: 'Gec (zaman)' },
  { en: '"further discussion" — "further" burada?',        tr: 'Daha (əlavə)',  wrong: 'Ən uzaq'      },

  // Cümlə düzgünlüyü
  { en: '"She is the most good student." — düzdür?',       tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"She is the best student." — düzdür?',            tr: 'Bəli',          wrong: 'Xeyr'         },
  { en: '"He is more stronger than me." — düzdür?',        tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"He is stronger than me." — düzdür?',             tr: 'Bəli',          wrong: 'Xeyr'         },
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
      
// ══════════════════════════════════════════════════════════
// ║  ƏVƏZLİK (PRONOUNS) — Tam bölüm                        ║
// ══════════════════════════════════════════════════════════

{
      type: 'section_divider',
      title: 'Əvəzliyin halları',
},
      
// ── Dərs 1.1 — Adlıq hal ─────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Adlıq hal (Nominative case)',
  cards: [

    {
      type: 'lesson',
      title: 'Şəxs əvəzlikləri — Adlıq hal',
      content:
        'İngilis dilində şəxs əvəzliklərinin iki halı var: adlıq hal və obyekt hal.\n\n' +
        'Adlıq hal Azərbaycan dilindəki adlıq hala uyğundur. ' +
        'Şəxs əvəzliyi cümlədə mübtəda funksiyasında çıxış edir və cümlənin əvvəlində gəlir.',
      table: [
        ['Şəxs əvəzliyi', 'Azərbaycanca', 'Şəxs'],
        ['I',   'mən',   '1-ci tək'],
        ['you', 'sən',   '2-ci tək'],
        ['he',  'o (kişi)',  '3-cü tək'],
        ['she', 'o (qadın)', '3-cü tək'],
        ['it',  'o (cansız)', '3-cü tək'],
        ['we',  'biz',   '1-ci cəm'],
        ['you', 'siz',   '2-ci cəm'],
        ['they','onlar', '3-cü cəm'],
      ],
      tip: 'Diqqət: "I" əvəzliyi həmişə böyük hərflə yazılır. Üçüncü şəxsin təki üçün he / she / it — hər üçü Azərbaycancaya "o" kimi tərcümə olunur.',
    },

    {
      type: 'lesson',
      title: 'Adlıq hal — işlənmə qaydası',
      content:
        'Şəxs əvəzliyi adlıq halda cümlədə mübtəda kimi işlənir.\n\n' +
        'Cəmdə he / she / it → they ilə ifadə olunur.',
      examples: [
        { word: 'I am a student.',        az: 'Mən tələbəyəm.' },
        { word: 'She is a teacher.',      az: 'O müəllimədir.' },
        { word: 'They are doctors.',      az: 'Onlar həkimlərdir.' },
        { word: 'We go to school.',       az: 'Biz məktəbə gedirik.' },
        { word: 'It is a book.',          az: 'O kitabdır.' },
      ],
      tip: 'Şəxs əvəzliyi adlıq halda həmişə cümlənin əvvəlində — xəbərdən əvvəl gəlir.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"I" əvəzliyi necə yazılır?',
      options: ['Həmişə kiçik hərflə', 'Cümlə əvvəlində böyük', 'Fərqi yoxdur', 'Həmişə böyük hərflə'],
      answer: 'Həmişə böyük hərflə',
    },
    {
      q: '"She" Azərbaycancaya necə tərcümə olunur?',
      options: ['Onlar', 'Biz', 'O (kişi)', 'O (qadın)'],
      answer: 'O (qadın)',
    },
    {
      q: '"They" əvəzliyi neçənci şəxsin cəmidir?',
      options: ['1-ci şəxsin cəmi', '2-ci şəxsin cəmi', 'Tək şəxs', '3-cü şəxsin cəmi'],
      answer: '3-cü şəxsin cəmi',
    },
    {
      q: '"It" hansı varlıqlar üçün işlənir?',
      options: ['Yalnız heyvanlar', 'Yalnız insanlar', 'Kişilər', 'Cansız varlıqlar'],
      answer: 'Cansız varlıqlar',
    },
    {
      q: 'Adlıq hal cümlədə hansı funksiyada işlənir?',
      options: ['Tamamlıq', 'Zərflik', 'Xəbər', 'Mübtəda'],
      answer: 'Mübtəda',
    },
    {
      q: '"We" Azərbaycancaya necə tərcümə olunur?',
      options: ['Siz', 'Onlar', 'Mən', 'Biz'],
      answer: 'Biz',
    },
    {
      q: '"He / she / it" cəmdə hansı əvəzliklə ifadə olunur?',
      options: ['We', 'You', 'I', 'They'],
      answer: 'They',
    },
    {
      q: 'Şəxs əvəzliyi adlıq halda cümlənin harasında gəlir?',
      options: ['Sonunda', 'Ortasında', 'Xəbərdən sonra', 'Əvvəlində'],
      answer: 'Əvvəlində',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı əvəzlik həmişə böyük hərflə yazılır?',
          options: ['he', 'I', 'we', 'they'],
          answer: 'I',
        },
        {
          q: '"O (kişi)" mənasında hansı əvəzlik işlənir?',
          options: ['it', 'she', 'he', 'they'],
          answer: 'he',
        },
        {
          q: 'Adlıq hal cümlədə hansı funksiyada çıxış edir?',
          options: ['Tamamlıq', 'Təyin', 'Mübtəda', 'Zərflik'],
          answer: 'Mübtəda',
        },
        {
          q: '"He, she, it" cəmdə hansı əvəzliklə ifadə olunur?',
          options: ['we', 'you', 'they', 'it'],
          answer: 'they',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Obyekt hal ────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Obyekt hal (Object case)',
  cards: [

    {
      type: 'lesson',
      title: 'Şəxs əvəzlikləri — Obyekt hal',
      content:
        'Obyekt hal Azərbaycan dilindəki yönlük və təsirlik hala uyğundur.\n\n' +
        'Həm vasitəli, həm də vasitəsiz tamamlıq vəzifəsində işlənir.',
      table: [
        ['Adlıq hal', 'Obyekt hal', 'Azərbaycanca'],
        ['I',    'me',   'məni / mənə'],
        ['you',  'you',  'səni / sənə'],
        ['he',   'him',  'onu / ona (kişi)'],
        ['she',  'her',  'onu / ona (qadın)'],
        ['it',   'it',   'onu / ona (cansız)'],
        ['we',   'us',   'bizi / bizə'],
        ['you',  'you',  'sizi / sizə'],
        ['they', 'them', 'onları / onlara'],
      ],
      tip: 'Diqqət: "you" əvəzliyi həm adlıq, həm obyekt halda eyni formada qalır.',
    },

    {
      type: 'lesson',
      title: 'Sözönləri ilə obyekt hal',
      content:
        'Obyekt hal sözönləri ilə birlikdə işlənir. Hər sözönü fərqli məna verir:',
      table: [
        ['Sözönü', 'Azərbaycanca', 'Nümunə'],
        ['to',    'yönlük hal (-a/-ə)',      'He sent this book to me.'],
        ['speak + to', 'ilə (-la/-lə)',      'I spoke to him.'],
        ['by',    'tərəfindən',              'The money is sent by them.'],
        ['with',  'ilə (-la/-lə)',           'I went with him.'],
        ['for',   'üçün',                   'The book is for you.'],
        ['about', 'haqqında',               'He has written about you.'],
        ['from',  'çıxışlıq hal (-dan/-dən)', 'I got a letter from her.'],
      ],
      examples: [
        { word: 'He has sent this book to me.',   az: 'O bu kitabı mənə göndərib.' },
        { word: 'I spoke to him.',                az: 'Mən onunla danışdım.' },
        { word: 'The money is sent by them.',     az: 'Pul onların tərəfindən göndərilib.' },
        { word: 'I went with him.',               az: 'Mən onunla getdim.' },
        { word: 'The book is for you.',           az: 'Kitab sizin üçündür.' },
        { word: 'He has written about you.',      az: 'O sənin haqqında yazmışdır.' },
        { word: 'I got a letter from her.',       az: 'Mən ondan məktub aldım.' },
      ],
    },

  {
  type: 'mini_check',
  questions: [
    {
      q: '"I" əvəzliyinin obyekt hal forması nədir?',
      options: ['my', 'mine', 'I', 'me'],
      answer: 'me',
    },
    {
      q: '"He" əvəzliyinin obyekt hal forması nədir?',
      options: ['his', 'he', 'himself', 'him'],
      answer: 'him',
    },
    {
      q: '"They" əvəzliyinin obyekt hal forması nədir?',
      options: ['their', 'theirs', 'they', 'them'],
      answer: 'them',
    },
    {
      q: '"We" əvəzliyinin obyekt hal forması nədir?',
      options: ['our', 'ours', 'we', 'us'],
      answer: 'us',
    },
    {
      q: '"She" əvəzliyinin obyekt hal forması nədir?',
      options: ['hers', 'she', 'herself', 'her'],
      answer: 'her',
    },
    {
      q: '"for" sözönü ilə obyekt hal necə tərcümə olunur?',
      options: ['ilə', 'tərəfindən', 'haqqında', 'üçün'],
      answer: 'üçün',
    },
    {
      q: '"by" sözönü ilə obyekt hal necə tərcümə olunur?',
      options: ['üçün', 'ilə', 'haqqında', 'tərəfindən'],
      answer: 'tərəfindən',
    },
    {
      q: '"with" sözönü ilə obyekt hal necə tərcümə olunur?',
      options: ['tərəfindən', 'üçün', 'haqqında', 'ilə (-la/-lə)'],
      answer: 'ilə (-la/-lə)',
    },
    {
      q: '"about" sözönü ilə obyekt hal necə tərcümə olunur?',
      options: ['üçün', 'ilə', 'tərəfindən', 'haqqında'],
      answer: 'haqqında',
    },
    {
      q: '"from" sözönü ilə obyekt hal necə tərcümə olunur?',
      options: ['Yönlük hal (-a/-ə)', 'Yiyəlik hal', 'İlə (-la/-lə)', 'Çıxışlıq hal (-dan/-dən)'],
      answer: 'Çıxışlıq hal (-dan/-dən)',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"He" əvəzliyinin obyekt forması hansıdır?',
          options: ['he', 'his', 'him', 'her'],
          answer: 'him',
        },
        {
          q: '"The book is ___ you." — boşluğa hansı sözönü gəlir? (sizin üçün)',
          options: ['to', 'by', 'for', 'from'],
          answer: 'for',
        },
        {
          q: '"I went ___ him." — hansı sözönü işlənir? (onunla)',
          options: ['to', 'with', 'for', 'about'],
          answer: 'with',
        },
        {
          q: '"They" əvəzliyinin obyekt forması hansıdır?',
          options: ['their', 'they', 'theirs', 'them'],
          answer: 'them',
        },
        {
          q: '"by" sözönü ilə cümlə xəbəri hansı növdə olur?',
          options: ['Məlum növ', 'Məchul növ', 'Qayıdış növ', 'Qarşılıq növ'],
          answer: 'Məchul növ',
        },
      ],
    },
  ],
},

// ── Quiz 1 — Şəxs əvəzlikləri yekun ─────────────────────
[
  { en: '"I" əvəzliyinin obyekt forması nədir?',                   tr: 'me',                   wrong: 'my'                  },
  { en: '"She" əvəzliyinin obyekt forması nədir?',                 tr: 'her',                  wrong: 'she'                 },
  { en: '"We" əvəzliyinin obyekt forması nədir?',                  tr: 'us',                   wrong: 'our'                 },
  { en: '"They" əvəzliyinin obyekt forması nədir?',                tr: 'them',                 wrong: 'their'               },
  { en: 'Adlıq hal cümlədə hansı funksiyada işlənir?',            tr: 'Mübtəda',              wrong: 'Tamamlıq'            },
  { en: 'Obyekt hal cümlədə hansı funksiyada işlənir?',           tr: 'Tamamlıq',             wrong: 'Mübtəda'             },
  { en: '"for" sözönü ilə obyekt hal necə tərcümə olunur?',       tr: 'üçün',                 wrong: 'ilə'                 },
  { en: '"by" sözönü ilə hansı növ xəbər işlənir?',               tr: 'Məchul növ',           wrong: 'Məlum növ'           },
  { en: '"with" sözönü ilə obyekt hal necə tərcümə olunur?',      tr: '-la/-lə (ilə)',        wrong: 'tərəfindən'          },
  { en: '"about" sözönü Azərbaycancaya necə tərcümə olunur?',     tr: 'haqqında',             wrong: 'üçün'                },
  { en: '"He spoke to him." — "to" burada necə tərcümə olunur?',  tr: '-la/-lə (ilə)',        wrong: '-a/-ə (yönlük)'      },
  { en: '"I" əvəzliyi necə yazılır?',                             tr: 'Həmişə böyük hərflə',  wrong: 'Həmişə kiçik hərflə' },
  { en: 'Üçüncü şəxs təkinin neçə forması var?',                  tr: '3 (he / she / it)',    wrong: '2 (he / she)'        },
  { en: '"from" sözönü ilə obyekt hal hansı hala uyğundur?',      tr: 'Çıxışlıq hal',         wrong: 'Yönlük hal'          },
  { en: '"you" əvəzliyi adlıq və obyekt halda eyni formadamı?',   tr: 'Bəli',                 wrong: 'Xeyr'                },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 2 — Yiyəlik əvəzlikləri                       │
// │  Possessive Pronouns                                    │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Yiyəlik əvəzlikləri',
},

// ── Dərs 2.1 — İsimlə işlənən forma ─────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Yiyəlik əvəzlikləri: isimlə işlənən forma',
  cards: [

    {
      type: 'lesson',
      title: 'Yiyəlik əvəzlikləri — isimlə işlənən forma',
      content:
        'Yiyəlik əvəzliyinin iki forması var.\n\n' +
        '1-ci forma — isimlə işlənən forma. Bu forma özündən sonra mütləq isim tələb edir ' +
        'və cümlədə təyin funksiyasında işlənir.',
      table: [
        ['Şəxs əvəzliyi', 'Yiyəlik (isimlə)', 'Azərbaycanca'],
        ['I',    'my',    'mənim'],
        ['you',  'your',  'sənin'],
        ['he',   'his',   'onun (kişi)'],
        ['she',  'her',   'onun (qadın)'],
        ['it',   'its',   'onun (cansız)'],
        ['we',   'our',   'bizim'],
        ['you',  'your',  'sizin'],
        ['they', 'their', 'onların'],
      ],
      tip: 'Bu forma özündən sonra mütləq isim tələb edir: my book, your pen, his car. Azərbaycan dilinə şəxs əvəzliyinin yiyəlik halı ilə tərcümə olunur.',
    },

    {
      type: 'lesson',
      title: 'Yiyəlik əvəzlikləri — isimlə işlənmə nümunələri',
      content:
        'İsimlə işlənən yiyəlik əvəzliyi cümlədə həmişə təyin funksiyasını yerinə yetirir.\n\n' +
        'İsimdən əvvəl yiyəlik əvəzliyi işləndikdə artikl işlənmir.',
      examples: [
        { word: 'My aunt was an actress.',       az: 'Mənim bibim aktrisa idi.' },
        { word: 'His book is on the table.',     az: 'Onun kitabı masanın üstündədir.' },
        { word: 'Their house is very big.',      az: 'Onların evi çox böyükdür.' },
        { word: 'Our teacher is kind.',          az: 'Bizim müəllimimiz mehriban­dır.' },
        { word: 'Its colour is red.',            az: 'Onun rəngi qırmızıdır.' },
      ],
      tip: 'Diqqət: isimdən əvvəl yiyəlik əvəzliyi işləndikdə nə a/an, nə də the artikli işlənmir.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"my" hansı şəxsin yiyəlik formasıdır?',
      options: ['2-ci şəxs tək (you)', '1-ci şəxs cəm (we)', '3-cü şəxs tək', '1-ci şəxs tək (I)'],
      answer: '1-ci şəxs tək (I)',
    },
    {
      q: '"their" hansı şəxsin yiyəlik formasıdır?',
      options: ['1-ci şəxs cəm (we)', '2-ci şəxs cəm (you)', '3-cü şəxs tək', '3-cü şəxs cəm (they)'],
      answer: '3-cü şəxs cəm (they)',
    },
    {
      q: '"his" hansı şəxsin yiyəlik formasıdır?',
      options: ['1-ci şəxs tək', '3-cü şəxs tək qadın', '2-ci şəxs tək', '3-cü şəxs tək kişi'],
      answer: '3-cü şəxs tək kişi',
    },
    {
      q: 'İsimlə işlənən yiyəlik əvəzliyi cümlədə hansı funksiyadadır?',
      options: ['Mübtəda', 'Xəbər', 'Tamamlıq', 'Təyin'],
      answer: 'Təyin',
    },
    {
      q: 'Yiyəlik əvəzliyindən sonra nə gəlir (isimlə forma)?',
      options: ['Köməkçi fel', 'Sifət', 'Artikl', 'Mütləq isim'],
      answer: 'Mütləq isim',
    },
    {
      q: '"our" Azərbaycancaya necə tərcümə olunur?',
      options: ['onların', 'sizin', 'onun', 'bizim'],
      answer: 'bizim',
    },
    {
      q: '"its" nəyin yiyəlik formasıdır?',
      options: ['he (kişi)', 'she (qadın)', 'they (cəm)', 'it (cansız varlıq)'],
      answer: 'it (cansız varlıq)',
    },
    {
      q: 'Yiyəlik əvəzliyindən əvvəl artikl işlənirmi?',
      options: ['Bəli, "the" işlənir', 'Bəli, "a/an" işlənir', 'Bəzən işlənir', 'Xeyr, işlənmir'],
      answer: 'Xeyr, işlənmir',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She" əvəzliyinin isimlə işlənən yiyəlik forması hansıdır?',
          options: ['she', 'her', 'hers', 'his'],
          answer: 'her',
        },
        {
          q: '"___ book is on the table." (onun — kişi) — boşluğa nə gəlir?',
          options: ['Her', 'Their', 'His', 'Its'],
          answer: 'His',
        },
        {
          q: 'İsimlə işlənən yiyəlik əvəzliyi cümlədə hansı funksiyada çıxış edir?',
          options: ['Mübtəda', 'Xəbər', 'Tamamlıq', 'Təyin'],
          answer: 'Təyin',
        },
        {
          q: '"My ___ was an actress." — boşluğa nə gəlir?',
          options: ['she', 'her', 'aunt', 'our'],
          answer: 'aunt',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Müstəqil (isimsiz) forma ──────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Yiyəlik əvəzlikləri: müstəqil (isimsiz) forma',
  cards: [

    {
      type: 'lesson',
      title: 'Yiyəlik əvəzlikləri — müstəqil (isimsiz) forma',
      content:
        'Müstəqil forma tək işlənir — özündən sonra isim tələb etmir.\n\n' +
        'Bu forma cümlədə mübtəda, ismi xəbər və tamamlıq funksiyasında çıxış edir.',
      table: [
        ['Isimlə forma', 'Müstəqil forma', 'Azərbaycanca'],
        ['my',    'mine',   'mənimki'],
        ['your',  'yours',  'səninki'],
        ['his',   'his',    'onunku (kişi)'],
        ['her',   'hers',   'onunku (qadın)'],
        ['its',   'its',    'onunku (cansız)'],
        ['our',   'ours',   'bizimki'],
        ['your',  'yours',  'sizinki'],
        ['their', 'theirs', 'onlarınkı'],
      ],
      tip: '"of" sözü ilə işləndikdə müstəqil forma təyin funksiyasında çıxış edir: Nick is an uncle of ours.',
    },

    {
      type: 'lesson',
      title: 'İki formanın fərqi',
      content:
        'Hansı formanı seçmək — isimdən asılıdır:\n\n' +
        '• Özündən sonra isim gəlirsə → isimlə forma (my, your, his...)\n' +
        '• Özündən sonra isim gəlmirsə → müstəqil forma (mine, yours, his...)',
      table: [
        ['İsimlə forma (isim tələb edir)',  'Müstəqil forma (isim tələb etmir)'],
        ['This is my book.',                'This book is mine.'],
        ['Is this your pen?',              'Is this pen yours?'],
        ['His car is fast.',               'That car is his.'],
        ['Their house is big.',            'That house is theirs.'],
      ],
      examples: [
        { word: 'Nick is an uncle of ours.',    az: 'Nick bizim əmimizdir.' },
        { word: 'This book is mine.',           az: 'Bu kitab mənimkidir.' },
        { word: 'Is that pen yours?',           az: 'O qələm səninkidirmi?' },
      ],
      tip: '"of + müstəqil forma" birləşməsi yiyəlik mənasını bildirir: a friend of mine — mənim bir dostum.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"mine" hansı formanın müstəqil variantıdır?',
      options: ['me', 'I', 'myself', 'my'],
      answer: 'my',
    },
    {
      q: '"yours" hansı şəxsin müstəqil yiyəlik formasıdır?',
      options: ['they', 'we', 'I', 'you'],
      answer: 'you',
    },
    {
      q: '"theirs" Azərbaycancaya necə tərcümə olunur?',
      options: ['bizimki', 'sizinki', 'onunki', 'onlarınkı'],
      answer: 'onlarınkı',
    },
    {
      q: '"hers" hansı şəxsin müstəqil yiyəlik formasıdır?',
      options: ['it', 'they', 'he', 'she'],
      answer: 'she',
    },
    {
      q: '"ours" hansı şəxsin müstəqil yiyəlik formasıdır?',
      options: ['you', 'they', 'I', 'we'],
      answer: 'we',
    },
    {
      q: 'Müstəqil yiyəlik forma özündən sonra isim tələb edirmi?',
      options: ['Bəli, həmişə', 'Bəli, bəzən', 'Kontekstdən asılıdır', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"This book is ___." — boşluğa "mənimki" mənasında nə gəlir?',
      options: ['my', 'me', 'I', 'mine'],
      answer: 'mine',
    },
    {
      q: '"Nick is an uncle of ___." — boşluğa "bizimki" mənasında nə gəlir?',
      options: ['our', 'us', 'we', 'ours'],
      answer: 'ours',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"This is ___ pen." (sənin) — isimlə forma hansıdır?',
          options: ['yours', 'your', 'mine', 'hers'],
          answer: 'your',
        },
        {
          q: '"This pen is ___." (sənin) — müstəqil forma hansıdır?',
          options: ['your', 'you', 'yours', 'mine'],
          answer: 'yours',
        },
        {
          q: 'Müstəqil forma cümlədə hansı funksiyalarda çıxış edə bilər?',
          options: [
            'Yalnız mübtəda',
            'Mübtəda, ismi xəbər, tamamlıq',
            'Yalnız tamamlıq',
            'Yalnız xəbər',
          ],
          answer: 'Mübtəda, ismi xəbər, tamamlıq',
        },
        {
          q: '"a friend of ___" (mənim bir dostum) — boşluğa nə gəlir?',
          options: ['me', 'my', 'mine', 'I'],
          answer: 'mine',
        },
      ],
    },
  ],
},

// ── Quiz 2 — Yiyəlik əvəzlikləri yekun ───────────────────
[
  { en: '"my" özündən sonra nə tələb edir?',                        tr: 'İsim',                 wrong: 'Fel'                 },
  { en: '"mine" özündən sonra nə tələb edir?',                      tr: 'Heç nə (isimsiz)',      wrong: 'İsim'                },
  { en: '"their" Azərbaycancaya necə tərcümə olunur?',              tr: 'onların',               wrong: 'onlarınkı'           },
  { en: '"theirs" Azərbaycancaya necə tərcümə olunur?',             tr: 'onlarınkı',             wrong: 'onların'             },
  { en: '"his" həm isimlə, həm müstəqil formada eyni yazılır?',     tr: 'Bəli',                  wrong: 'Xeyr'                },
  { en: '"This book is ___." (mənimki) — boşluğa nə gəlir?',       tr: 'mine',                  wrong: 'my'                  },
  { en: '"___ book is on the table." (onların) — boşluq?',         tr: 'Their',                 wrong: 'Theirs'              },
  { en: 'Yiyəlik əvəzliyinin neçə forması var?',                    tr: '2',                     wrong: '3'                   },
  { en: '"ours" hansı formanın müstəqil variantıdır?',              tr: 'our',                   wrong: 'us'                  },
  { en: '"a friend of ___" (sənin bir dostun) — boşluq?',          tr: 'yours',                 wrong: 'your'                },
  { en: 'İsimlə işlənən yiyəlik əvəzliyindən əvvəl artikl olurmu?', tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Müstəqil forma "of" ilə işləndikdə hansı funksiyadır?',    tr: 'Təyin',                 wrong: 'Mübtəda'             },
  { en: '"her" həm obyekt hal, həm yiyəlik formasımı?',             tr: 'Bəli',                  wrong: 'Xeyr'                },
  { en: '"hers" hansı şəxsin müstəqil yiyəlik formasıdır?',         tr: 'she',                   wrong: 'he'                  },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 3 — Qayıdış + İşarə əvəzlikləri              │
// │  Reflexive + Demonstrative Pronouns                     │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Qayıdış və İşarə',
},

// ── Dərs 3.1 — Qayıdış əvəzlikləri ──────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Qayıdış əvəzlikləri (Reflexive Pronouns)',
  cards: [

    {
      type: 'lesson',
      title: 'Qayıdış əvəzliklərinin düzəlişi',
      content:
        'Qayıdış əvəzliklərinin hamısı düzəltmə sözlərdir.\n\n' +
        '• 1-ci və 2-ci şəxs: yiyəlik əvəzliyi + self (tək) / selves (cəm)\n' +
        '• 3-cü şəxs tək: him / her / it + self\n' +
        '• 3-cü şəxs cəm: them + selves',
      table: [
        ['Şəxs',       'Qayıdış əvəzliyi', 'Azərbaycanca'],
        ['I',          'myself',            'özüm'],
        ['you (tək)',  'yourself',          'özün'],
        ['he',         'himself',           'özü (kişi)'],
        ['she',        'herself',           'özü (qadın)'],
        ['it',         'itself',            'özü (cansız)'],
        ['we',         'ourselves',         'özümüz'],
        ['you (cəm)',  'yourselves',        'özünüz'],
        ['they',       'themselves',        'özləri'],
      ],
      tip: '"Help yourself!" — yemək təklif edərkən işlənən sabit ifadə.',
    },

    {
      type: 'lesson',
      title: 'Qayıdış əvəzliklərinin işlənmə qaydaları',
      content:
        'Qayıdış əvəzlikləri yalnız ismi əvəzlik kimi işlənir.\n\n' +
        '• Əsasən vasitəsiz tamamlıq kimi cümlənin sonunda gəlir\n' +
        '• Mənanı gücləndirmək üçün aid olduğu sözün yanında gəlir\n' +
        '• Sözönündən sonra işlənə bilir: "by himself" → özü tək',
      examples: [
        { word: 'I do my homework myself.',    az: 'Ev tapşırığımı özüm edirəm.' },
        { word: 'I myself do my homework.',    az: 'Ev tapşırığımı məhz özüm edirəm.' },
        { word: 'He thinks too much of himself.', az: 'O özü haqqında çox fikirləşir.' },
        { word: 'She lives by herself.',       az: 'O özü tək yaşayır.' },
      ],
      tip: '"by + qayıdış əvəzliyi" → "özü tək / tənha" mənasını verir.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"I" şəxsinin qayıdış əvəzliyi nədir?',
      options: ['yourself', 'herself', 'himself', 'myself'],
      answer: 'myself',
    },
    {
      q: '"they" şəxsinin qayıdış əvəzliyi nədir?',
      options: ['ourselves', 'yourselves', 'himself', 'themselves'],
      answer: 'themselves',
    },
    {
      q: '"he" şəxsinin qayıdış əvəzliyi nədir?',
      options: ['herself', 'itself', 'themselves', 'himself'],
      answer: 'himself',
    },
    {
      q: '"we" şəxsinin qayıdış əvəzliyi nədir?',
      options: ['themselves', 'yourselves', 'myself', 'ourselves'],
      answer: 'ourselves',
    },
    {
      q: '"by himself" necə tərcümə olunur?',
      options: ['özündən', 'özü ilə', 'özünə görə', 'özü tək'],
      answer: 'özü tək',
    },
    {
      q: 'Qayıdış əvəzliyi cümlədə əsasən hansı funksiyadadır?',
      options: ['Mübtəda', 'Xəbər', 'Zərflik', 'Vasitəsiz tamamlıq'],
      answer: 'Vasitəsiz tamamlıq',
    },
    {
      q: '"Help yourself!" ifadəsi nə vaxt işlənir?',
      options: ['Kömək istəyərkən', 'Üzr istəyərkən', 'Təşəkkür edərkən', 'Yemək təklif edərkən'],
      answer: 'Yemək təklif edərkən',
    },
    {
      q: '"herself" hansı şəxsə aiddir?',
      options: ['it', 'they', 'he', 'she'],
      answer: 'she',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She looked at ___." (özünə baxdı) — boşluğa nə gəlir?',
          options: ['himself', 'itself', 'herself', 'myself'],
          answer: 'herself',
        },
        {
          q: '"by himself" necə tərcümə olunur?',
          options: ['onunla birlikdə', 'özü tək', 'ona görə', 'onun üçün'],
          answer: 'özü tək',
        },
        {
          q: '"We did it ___." (özümüz) — boşluq?',
          options: ['ourselves', 'themselves', 'yourself', 'itself'],
          answer: 'ourselves',
        },
        {
          q: 'Qayıdış əvəzliyi mənanı gücləndirmək üçün cümlənin harasında gəlir?',
          options: ['Həmişə sonda', 'Aid olduğu sözün yanında', 'Cümlənin əvvəlində', 'Feldan əvvəl'],
          answer: 'Aid olduğu sözün yanında',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — İşarə əvəzlikləri ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — İşarə əvəzlikləri (Demonstrative Pronouns)',
  cards: [

    {
      type: 'lesson',
      title: 'İşarə əvəzlikləri: this / that / these / those',
      content:
        'İşarə əvəzlikləri: this, that, the same, such.\n\n' +
        '"this" və "that" əvəzliklərinin cəm forması var.\n' +
        'İngilis dilində işarə əvəzliyi təyin etdiyi isimlə kəmiyyətcə uzlaşır.',
      table: [
        ['Tək',   'Cəm',    'Azərbaycanca',  'İşlənmə'],
        ['this',  'these',  'bu / bunlar',   'Yaxın (zaman və məkan)'],
        ['that',  'those',  'o / onlar',     'Uzaq (zaman və məkan)'],
      ],
      examples: [
        { word: 'This book is mine.',         az: 'Bu kitab mənimdir.' },
        { word: 'These books are mine.',      az: 'Bu kitablar mənimdir.' },
        { word: 'That house is big.',         az: 'O ev böyükdür.' },
        { word: 'Those days were great.',     az: 'O günlər əla idi.' },
        { word: 'These days are busy.',       az: 'Bu günlər məşğuldur.' },
      ],
      tip: 'İsimdən əvvəl işarə əvəzliyi olduqda artikl işlənmir. Həmçinin: Give me another book. I have read this one.',
    },

    {
      type: 'lesson',
      title: 'The same və Such',
      content:
        '"the same" həmişə müəyyənlik artikli ilə işlənir → "eyni, həmin" mənasında.\n\n' +
        '"such" → "elə, belə" mənasında.\n' +
        'Sayıla bilən tək isimdən əvvəl such + a/an işlənir.',
      table: [
        ['Əvəzlik',    'Xüsusiyyət',                          'Azərbaycanca'],
        ['the same',  'həmişə "the" ilə işlənir',            'eyni, həmin'],
        ['such',      'sayılan tək isimdən əvvəl "a/an" gəlir', 'elə, belə'],
      ],
      examples: [
        { word: 'He said the same thing.',         az: 'O eyni şeyi dedi.' },
        { word: 'Such a book is hard to find.',    az: 'Belə bir kitab tapmaq çətindir.' },
        { word: 'I have never seen such a man.',   az: 'Mən heç vaxt belə bir adam görmədim.' },
      ],
      tip: '"such" işlənməsi üçün mütləq isim olmalıdır. "The same" isə həmişə "the" ilə gəlir.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"this" sözünün cəm forması nədir?',
      options: ['those', 'that', 'thises', 'these'],
      answer: 'these',
    },
    {
      q: '"that" sözünün cəm forması nədir?',
      options: ['these', 'thats', 'this', 'those'],
      answer: 'those',
    },
    {
      q: '"these days" Azərbaycancaya necə tərcümə olunur?',
      options: ['o günlər', 'keçən günlər', 'gələcək günlər', 'bu günlər'],
      answer: 'bu günlər',
    },
    {
      q: '"those days" Azərbaycancaya necə tərcümə olunur?',
      options: ['bu günlər', 'gələcək günlər', 'həmin günlər deyil', 'o günlər'],
      answer: 'o günlər',
    },
    {
      q: '"the same" həmişə hansı artikl ilə işlənir?',
      options: ['"a" ilə', '"an" ilə', 'artikl işlənmir', '"the" ilə'],
      answer: '"the" ilə',
    },
    {
      q: '"such" Azərbaycancaya necə tərcümə olunur?',
      options: ['eyni, həmin', 'bu, həmin', 'hər, bütün', 'elə, belə'],
      answer: 'elə, belə',
    },
    {
      q: 'İşarə əvəzliyindən əvvəl artikl işlənirmi?',
      options: ['Bəli, "the"', 'Bəli, "a/an"', 'Bəzən', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"Such a book" — burada niyə "a" artiklı işlənir?',
      options: ['Sayılmayan isim', 'Cəm isim', 'Xüsusi isim', 'Sayılan tək isim'],
      answer: 'Sayılan tək isim',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ books are mine." (bu kitablar) — boşluğa nə gəlir?',
          options: ['This', 'That', 'These', 'Those'],
          answer: 'These',
        },
        {
          q: '"___ house is big." (uzaqda olan ev) — boşluğa nə gəlir?',
          options: ['This', 'These', 'Those', 'That'],
          answer: 'That',
        },
        {
          q: '"the same" həmişə hansı söz ilə işlənir?',
          options: ['a', 'an', 'the', 'heç biri'],
          answer: 'the',
        },
        {
          q: '"Such ___ book is hard to find." — boşluğa nə gəlir?',
          options: ['the', 'a', 'an', 'heç nə'],
          answer: 'a',
        },
      ],
    },
  ],
},

// ── Quiz 3 — Qayıdış + İşarə yekun ──────────────────────
[
  { en: '"she" şəxsinin qayıdış əvəzliyi nədir?',                  tr: 'herself',              wrong: 'himself'             },
  { en: '"they" şəxsinin qayıdış əvəzliyi nədir?',                 tr: 'themselves',           wrong: 'ourselves'           },
  { en: '"by himself" necə tərcümə olunur?',                        tr: 'özü tək',              wrong: 'onunla birlikdə'     },
  { en: 'Qayıdış əvəzlikləri cümlədə əsasən hansı funksiyadadır?', tr: 'Vasitəsiz tamamlıq',   wrong: 'Mübtəda'             },
  { en: '"Help yourself!" ifadəsi nə vaxt işlənir?',               tr: 'Yemək təklif edərkən', wrong: 'Kömək istəyərkən'    },
  { en: '"I myself" — "myself" burada hansı funksiyadadır?',        tr: 'Gücləndirilmiş əlavə', wrong: 'Vasitəsiz tamamlıq' },
  { en: '"this" cəm forması nədir?',                                tr: 'these',                wrong: 'those'               },
  { en: '"those days" Azərbaycancaya necə tərcümə olunur?',         tr: 'o günlər',             wrong: 'bu günlər'           },
  { en: '"the same" həmişə hansı artikl ilə işlənir?',             tr: 'the',                  wrong: 'a'                   },
  { en: '"such" Azərbaycancaya necə tərcümə olunur?',              tr: 'elə, belə',            wrong: 'eyni, həmin'         },
  { en: '"such" işlənməsi üçün nə lazımdır?',                      tr: 'İsim olmalıdır',       wrong: 'Fel olmalıdır'       },
  { en: 'İşarə əvəzliyindən əvvəl artikl işlənirmi?',             tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"ourselves" hansı şəxsə aiddir?',                          tr: 'we',                   wrong: 'they'                },
  { en: '"that" cəm forması nədir?',                                tr: 'those',                wrong: 'these'               },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 4 — Sual əvəzlikləri                          │
// │  Interrogative Pronouns                                 │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Sual əvəzlikləri',
},

// ── Dərs 4.1 — Who / Whom / Whose ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — Who / Whom / Whose',
  cards: [

    {
      type: 'lesson',
      title: 'Who — canlı varlıqlara sual',
      content:
        '"Who" ilə canlı mübtədaya sual veririk.\n\n' +
        '"Who" mübtəda olduqda xəbər təkdə olur.\n' +
        '"Who" əvəzliyi mürəkkəb ismi xəbərin ad hissəsi olduqda mübtəda ilə uzlaşır.',
      table: [
        ['Cümlə',                       'Sual',                          'İzah'],
        ['Ann teaches you English.',    'Who teaches you English?',      'Who → mübtəda, xəbər tək'],
        ['The boy was the first man.',  'Who was the first spaceman?',   'Who → mübtəda'],
        ['These are students.',        'Who are these students?',       'Who → xəbər cəmlə uzlaşır'],
      ],
      examples: [
        { word: 'Who teaches you English?',   az: 'Sizin ingilis dili müəlliminiz kimdir?' },
        { word: 'Who was the first spaceman?', az: 'Birinci kosmonaft kim olub?' },
        { word: 'Who are these students?',    az: 'Bu tələbələr kimdir?' },
      ],
      tip: '"Who" mübtəda funksiyasında işlənərkən köməkçi fel tələb olunmur.',
    },

    {
      type: 'lesson',
      title: 'Whom — tamamlığa sual',
      content:
        '"Whom" tamamlığa sual verir. "Whom"-dan sonra mütləq köməkçi fel gəlir.\n\n' +
        'Sözönlü tamamlıq olarsa sözönü "whom"-dan əvvələ keçir.\n\n' +
        '"Who" ilə tamamlığa da sual vermək olar, amma fərq var: ' +
        '"who" ilə tamamlığa sual verəndə sözönü axırda qalır.',
      table: [
        ['Cümlə',               'Whom ilə sual',                    'Who ilə sual'],
        ['I give him a book.',  'Whom do I give a book?',           'Who do I give a book to?'],
        ['I give a book to him.', 'To whom do I give a book?',     'Who do I give a book to?'],
      ],
      examples: [
        { word: 'Whom do I give a book?',    az: 'Mən kitabı kimə verirəm?' },
        { word: 'To whom did she speak?',    az: 'O kiminlə danışdı?' },
        { word: 'Who do I give a book to?',  az: 'Mən kitabı kimə verirəm?' },
      ],
      tip: 'Fərq: "whom" ilə sözönü əvvələ keçir; "who" ilə sözönü sonda qalır.',
    },

    {
      type: 'lesson',
      title: 'Whose — mənsubiyyət bildirir',
      content:
        '"Whose" mənsubiyyət, sahiblik bildirir.\n\n' +
        'Həmişə sifəti əvəzlik kimi işlənir — aid olduğu ismin qarşısında gəlir.\n' +
        'Bu halda ismin qarşısında heç bir artikl işlənmir.\n' +
        '"Whose" ilə yiyəlik halda ismə və yiyəlik əvəzliyinə sual verilir.',
      examples: [
        { word: 'Whose book is this?',       az: 'Bu kimin kitabıdır?' },
        { word: 'Whose pen did you take?',   az: 'Sən kimin qələmini götürdün?' },
      ],
      tip: '"Whose" → "kimin" kimi tərcümə olunur. Həmişə özündən sonra isim gəlir.',
    },

  {
  type: 'mini_check',
  questions: [
    {
      q: '"Who" mübtəda olduqda xəbər hansı sayda olur?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"Whom"-dan sonra cümlədə nə gəlməlidir?',
      options: ['İsim', 'Sifət', 'Zərf', 'Köməkçi fel'],
      answer: 'Köməkçi fel',
    },
    {
      q: '"Whose" Azərbaycancaya necə tərcümə olunur?',
      options: ['hansı', 'nə', 'harada', 'kimin'],
      answer: 'kimin',
    },
    {
      q: '"Whom" ilə sözönlü tamamlıqda sözönü cümlənin harasına keçir?',
      options: ['Sona', 'Ortaya', 'Dəyişmir', 'Cümlənin əvvəlinə'],
      answer: 'Cümlənin əvvəlinə',
    },
    {
      q: '"Who" ilə sözönlü tamamlıqda sözönü cümlənin harasında qalır?',
      options: ['Əvvəldə', 'Ortada', 'İsmin yanında', 'Sonda'],
      answer: 'Sonda',
    },
    {
      q: '"Whose" özündən sonra nə tələb edir?',
      options: ['Köməkçi fel', 'Sifət', 'Zərf', 'İsim'],
      answer: 'İsim',
    },
    {
      q: '"Who are these students?" — "who" burada hansı funksiyadır?',
      options: ['Mübtəda', 'Tamamlıq', 'Zərflik', 'Xəbər hissəsi'],
      answer: 'Xəbər hissəsi',
    },
    {
      q: '"Whose book is this?" — "whose" ismə hansı halda sual verir?',
      options: ['Adlıq hal', 'Obyekt hal', 'Vasitəli hal', 'Yiyəlik hal'],
      answer: 'Yiyəlik hal',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I give him a book." — tamamlığa "whom" ilə sual?',
          options: [
            'Who I give a book?',
            'Whom do I give a book?',
            'Whose do I give a book?',
            'Who gives a book?',
          ],
          answer: 'Whom do I give a book?',
        },
        {
          q: '"Whose" Azərbaycancaya necə tərcümə olunur?',
          options: ['hansı', 'nə', 'kimin', 'kimdən'],
          answer: 'kimin',
        },
        {
          q: '"To ___ did she speak?" — boşluğa nə gəlir?',
          options: ['who', 'whose', 'whom', 'which'],
          answer: 'whom',
        },
        {
          q: '"Who teaches you English?" — "who" burada hansı funksiyadır?',
          options: ['Tamamlıq', 'Xəbər', 'Mübtəda', 'Təyin'],
          answer: 'Mübtəda',
        },
      ],
    },
  ],
},

// ── Dərs 4.2 — What / Which ──────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.2 — What / Which',
  cards: [

    {
      type: 'lesson',
      title: 'What — cansız varlıqlara sual',
      content:
        '"What" adətən cansız varlıqlarla işlənir.\n\n' +
        'Lakin adamların sənəti, vəzifəsini soruşanda "what" şəxsə aid olur.\n\n' +
        '"What" həm sifəti əvəzlik (what book), həm də ismi əvəzlik (what has happened) kimi işlənə bilir.\n' +
        'İsmi əvəzlik kimi işlənərkən "hansı?" sualı ilə tərcümə olunur.',
      table: [
        ['İşlənmə',             'Nümunə',                          'Azərbaycanca'],
        ['Cansız mübtəda',      'What is it?',                     'Bu nədir?'],
        ['Sənət / vəzifə',     'What is he?',                     'O nəçidir?'],
        ['İsmi əvəzlik',        'What has happened?',              'Nə olub?'],
        ['Sifəti əvəzlik',      'What book is it?',                'O hansı kitabdır?'],
        ['Sifəti əvəzlik',      'What book did you buy?',          'Siz hansı kitabı aldınız?'],
      ],
      tip: '"What" cansız mübtəda ilə işlənərkən xəbər tək olur.',
    },

    {
      type: 'lesson',
      title: 'Which — seçmə mənası',
      content:
        '"Which" seçmə mənasına malikdir.\n\n' +
        'Mövcud olan 2 şəxs və ya əşyadan münasib olanı soruşarkən işlədilir.\n' +
        'Həm şəxsə, həm əşyaya aid verilə bilər.\n' +
        '"Which" → "hansı" kimi tərcümə olunur.',
      examples: [
        { word: 'Which book do you want to read?',                            az: 'Hansı kitabı oxumaq istəyirsiniz?' },
        { word: 'Which room do you like — the dining room or bedroom?',       az: 'Hansı otağı bəyənirsiniz — yemək otağını, yoxsa yataq otağını?' },
      ],
      table: [
        ['What',   'Ümumi sual (nə? kim? nəçi?)',          'What is this? / What is he?'],
        ['Which',  'Seçim sualı — mövcud olanlardan biri', 'Which book do you prefer?'],
      ],
      tip: '"What" — ümumi; "Which" — konkret seçim arasından soruşur.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"What" adətən hansı varlıqlarla işlənir?',
      options: ['Canlı varlıqlar', 'Yalnız insanlar', 'Yalnız heyvanlar', 'Cansız varlıqlar'],
      answer: 'Cansız varlıqlar',
    },
    {
      q: '"What is he?" cümləsi nəyi soruşur?',
      options: ['Adını', 'Yaşını', 'Yerini', 'Sənəti / vəzifəsini'],
      answer: 'Sənəti / vəzifəsini',
    },
    {
      q: '"Which" Azərbaycancaya necə tərcümə olunur?',
      options: ['nə', 'kim', 'niyə', 'hansı'],
      answer: 'hansı',
    },
    {
      q: '"Which" nə vaxt işlənir?',
      options: ['Ümumi sorğularda', 'Yalnız cansız varlıqlarda', 'Yalnız insanlarda', 'Mövcud seçimlər arasında'],
      answer: 'Mövcud seçimlər arasında',
    },
    {
      q: '"What book did you buy?" — "what" burada hansı növdür?',
      options: ['İsmi əvəzlik', 'Qayıdış əvəzlik', 'Şəxs əvəzliyi', 'Sifəti əvəzlik'],
      answer: 'Sifəti əvəzlik',
    },
    {
      q: '"What has happened?" — "what" burada hansı növdür?',
      options: ['Sifəti əvəzlik', 'Qayıdış əvəzlik', 'Şəxs əvəzliyi', 'İsmi əvəzlik'],
      answer: 'İsmi əvəzlik',
    },
    {
      q: '"What" cansız mübtəda ilə işlənərkən xəbər hansı sayda olur?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"Which" həm şəxsə, həm əşyaya aid işlənə bilirmi?',
      options: ['Xeyr, yalnız əşyaya', 'Xeyr, yalnız insanlara', 'Bəzən', 'Bəli, hər ikisinə'],
      answer: 'Bəli, hər ikisinə',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ is he?" (O nəçidir?) — boşluğa nə gəlir?',
          options: ['Who', 'Whose', 'Which', 'What'],
          answer: 'What',
        },
        {
          q: '"___ book do you prefer?" (seçim arasında) — boşluğa nə gəlir?',
          options: ['What', 'Who', 'Which', 'Whose'],
          answer: 'Which',
        },
        {
          q: '"What" ismi əvəzlik kimi işlənərkən necə tərcümə olunur?',
          options: ['nə', 'kim', 'hansı', 'nəçi'],
          answer: 'hansı',
        },
        {
          q: '"Which" ilə "what" arasındakı əsas fərq nədir?',
          options: [
            'Birincisi canlı, ikincisi cansız üçün',
            'Which seçim sualı, what ümumi sual',
            'Which insan üçün, what əşya üçün',
            'Heç bir fərq yoxdur',
          ],
          answer: 'Which seçim sualı, what ümumi sual',
        },
      ],
    },
  ],
},

// ── Quiz 4 — Sual əvəzlikləri yekun ──────────────────────
[
  { en: '"Who" mübtəda olduqda xəbər hansı sayda olur?',           tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"Whom"-dan sonra mütləq nə gəlir?',                        tr: 'Köməkçi fel',          wrong: 'İsim'                },
  { en: '"Whose" Azərbaycancaya necə tərcümə olunur?',             tr: 'kimin',                wrong: 'hansı'               },
  { en: '"Whom" ilə sözönlü tamamlıqda sözönü hara keçir?',        tr: 'Əvvələ',               wrong: 'Sona'                },
  { en: '"Who" ilə sözönlü tamamlıqda sözönü hara qalır?',         tr: 'Sonda',                wrong: 'Əvvəldə'             },
  { en: '"What is he?" cümləsi nəyi soruşur?',                      tr: 'Sənəti / vəzifəsini',  wrong: 'Adını'               },
  { en: '"What" cansız mübtəda ilə işlənərkən xəbər hansı sayda?', tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"Which" nə vaxt işlənir?',                                 tr: 'Seçim arasında',       wrong: 'Ümumi sorğularda'    },
  { en: '"Which" Azərbaycancaya necə tərcümə olunur?',             tr: 'hansı',                wrong: 'nə'                  },
  { en: '"Who are these students?" — "who" hansı funksiyadır?',     tr: 'Xəbər hissəsi',        wrong: 'Mübtəda'             },
  { en: '"What book is it?" — "what" hansı növ əvəzlikdir?',       tr: 'Sifəti əvəzlik',       wrong: 'İsmi əvəzlik'        },
  { en: '"What has happened?" — "what" hansı növ əvəzlikdir?',     tr: 'İsmi əvəzlik',         wrong: 'Sifəti əvəzlik'      },
  { en: '"Whose" özündən sonra mütləq nə tələb edir?',             tr: 'İsim',                 wrong: 'Köməkçi fel'         },
  { en: '"Which" həm canlı, həm cansıza aid ola bilərmi?',         tr: 'Bəli',                 wrong: 'Xeyr'                },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 5 — Təyin əvəzlikləri                         │
// │  Defining Pronouns                                      │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Təyin əvəzlikləri',
},

// ── Dərs 5.1 — All / Each / Every ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.1 — All / Each / Every',
  cards: [

    {
      type: 'lesson',
      title: 'All — ümumləşdirici əvəzlik',
      content:
        '"All" ümumləşdirici mənaya malikdir. Həm tək, həm cəm isimlərlə işlənə bilər.\n\n' +
        '• Canlı varlıqları bildirdikdə fel cəmdə olur\n' +
        '• Mücərrəd varlıqları bildirdikdə fel təkdə olur\n' +
        '• Sayılmayan isim gələrsə fel tək gəlir\n' +
        '• Şəxs əvəzliklərindən sonra əlavə kimi işlənə bilər',
      table: [
        ['Nümunə',                                'İzah'],
        ['All were present at the meeting.',      'Canlı → fel cəm'],
        ['All the students are in the yard.',     'Canlı → fel cəm'],
        ['All that glisters is not gold.',        'Mücərrəd → fel tək'],
        ['All information is useful.',            'Sayılmayan → fel tək'],
        ['It all seemed useless.',               'Şəxs əvəzliyinə əlavə'],
      ],
      tip: '"All" → "hamı, bütün" kimi tərcümə olunur.',
    },

    {
      type: 'lesson',
      title: 'Each vs Every',
      content:
        '"Each" — əvvəlcədən xatırladılmış qrup içindəki hər birini ayrı-ayrılıqda bildirir.\n\n' +
        '"Every" — sayıla bilən isimlərin qarşısında sifəti əvəzlik kimi işlənir.\n\n' +
        '• "each of" işlənir — amma "every of" heç vaxt işlənmir!\n' +
        '• Hər ikisi mübtəda olduqda fel tək gəlir.',
      table: [
        ['Each',                                         'Every'],
        ['Xatırladılmış qrupdan hər biri ayrı-ayrı',   'Ümumi qrupun hər bir üzvü'],
        ['Each of them got a new flat.',                'Every man must be honest.'],
        ['Each had a red flag.',                        'Every student passed.'],
        ['"each of" işlənir',                           '"every of" heç vaxt işlənmir'],
      ],
      examples: [
        { word: 'Each of them got a new flat.',    az: 'Onların hər biri yeni mənzil aldı.' },
        { word: 'Every man must be honest.',       az: 'Hər bir adam dürüst olmalıdır.' },
        { word: 'Everybody is here.',             az: 'Hamı buradadır.' },
        { word: 'Everything is clear.',           az: 'Hər şey aydındır.' },
      ],
      tip: 'Everybody / Everyone → hər kəs / hamı (şəxsə aid). Everything → hər şey (əşyaya aid). Hər ikisindən sonra fel tək gəlir.',
    },

  {
  type: 'mini_check',
  questions: [
    {
      q: '"All" canlı varlıqlarla işlənərkən fel hansı sayda olur?',
      options: ['Tək', 'Hər ikisi olar', 'Kontekstdən asılı', 'Cəm'],
      answer: 'Cəm',
    },
    {
      q: '"All" sayılmayan isimlə işlənərkən fel hansı sayda olur?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"all" Azərbaycancaya necə tərcümə olunur?',
      options: ['hər biri', 'heç biri', 'bəzisi', 'hamı, bütün'],
      answer: 'hamı, bütün',
    },
    {
      q: '"each" ilə "every"dən fərqli olaraq nə işlənir?',
      options: ['every of', 'each one', 'each every', 'each of'],
      answer: 'each of',
    },
    {
      q: '"every of" konstruksiyası işlənirmi?',
      options: ['Bəli, işlənir', 'Bəzən işlənir', 'Rəsmi nitqdə işlənir', 'Xeyr, işlənmir'],
      answer: 'Xeyr, işlənmir',
    },
    {
      q: '"Everybody" mübtəda olduqda fel hansı sayda gəlir?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"Everything" hansı varlıqlara aid işlənir?',
      options: ['Şəxslərə', 'Heyvanlara', 'Canlılara', 'Əşyalara'],
      answer: 'Əşyalara',
    },
    {
      q: '"each" mübtəda olduqda fel hansı sayda gəlir?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"All information ___ useful." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: '"___ of them got a new flat." — boşluğa nə gəlir?',
          options: ['Every', 'All', 'Each', 'Both'],
          answer: 'Each',
        },
        {
          q: '"Everything ___." — fel hansı sayda olur?',
          options: ['Cəm', 'Tək', 'İkisi də olar', 'Asılı deyil'],
          answer: 'Tək',
        },
        {
          q: '"Every ___" — özündən sonra nə gəlir?',
          options: ['of + əvəzlik', 'Mütləq isim', 'Köməkçi fel', 'Heç nə'],
          answer: 'Mütləq isim',
        },
      ],
    },
  ],
},

// ── Dərs 5.2 — Both / Either / Neither ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.2 — Both / Either / Neither',
  cards: [

    {
      type: 'lesson',
      title: 'Both — hər iki',
      content:
        '"Both" əvvəlcədən xatırladılmış iki şəxs, əşya və ya fikri bildirir.\n\n' +
        '• Həm artikl, həm artiklsiz işlənir\n' +
        '• Mübtəda olduqda xəbər cəm olur\n' +
        '• Both ... and ... → həm ... həm də (yalnız təsdiq cümlədə)\n' +
        '• "Both"un inkarı "neither" ilə düzəlir',
      table: [
        ['Forma',               'Nümunə',                                    'Azərbaycanca'],
        ['Müstəqil',            'Both were present.',                         'Hər ikisi iştirak etdi.'],
        ['Şəxs əvəzliyilə',    'We both / both of us / both of them',        'hər ikimiz / hər ikiniz...'],
        ['both...and',          'Both my sister and brother are doctors.',    'Həm bacım, həm qardaşım həkimdir.'],
      ],
      tip: '"Both ... and" yalnız təsdiq cümlədə işlənir. İnkarı "neither ... nor" ilə düzəlir.',
    },

    {
      type: 'lesson',
      title: 'Either — ikisindən biri / hər ikisi',
      content:
        '"Either" əvvəl xatırladılmış 2 şəxs və ya əşyaya aid işlənir.\n\n' +
        '2 mənası var:\n' +
        '1. İstədiyin, hər hansı ikisindən biri\n' +
        '2. Hər ikisi\n\n' +
        'Mübtəda olduqda fel tək olur.\n\n' +
        'Həmçinin inkar cümləni təsdiq etmək üçün cümlənin sonunda gəlir.',
      examples: [
        { word: 'Take either book.',                   az: 'İstədiyin kitabı götür.' },
        { word: 'I have two pens. You can take either.', az: 'Mənim 2 qələmim var. İstədiyini götürə bilərsən.' },
        { word: 'I don\'t go to school. My sister doesn\'t go to school either.', az: 'Mən məktəbə getmirəm. Bacım da.' },
      ],
      tip: '"either...or" → ya...ya da (təsdiq cümlədə). Mübtəda olduqda axırıncı mübtəda ilə uzlaşır.',
    },

    {
      type: 'lesson',
      title: 'Either...or / Neither...nor + too / either fərqi',
      content:
        '"either ... or" → ya ... ya da (təsdiq cümlədə)\n' +
        '"neither ... nor" → nə ... nə də (inkar mənada)\n\n' +
        '"too" → həmçinin, da/də (təsdiq cümlənin sonunda)\n' +
        '"either" → həmçinin, da/də (inkar cümlənin sonunda)\n\n' +
        'Qısa təsdiq: "so + köməkçi fel + şəxs"\n' +
        'Qısa inkar: "neither + köməkçi fel + şəxs"',
      table: [
        ['Cümlə',                                      'Cavab (qısa)'],
        ['I go to school.',                            'So does my sister. / I do too.'],
        ['I don\'t go to school.',                     'Neither does my sister. / I don\'t either.'],
        ['Either my brothers or my sister is home.',   'Ya qardaşlarım ya da bacım evdədir.'],
        ['Neither my sister nor my brothers are home.','Nə bacım, nə qardaşlarım evdədir.'],
      ],
      tip: '"either...or" — axırıncı mübtəda ilə uzlaşma: either...or my sister IS / either...or my brothers ARE.',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"Both" mübtəda olduqda xəbər hansı sayda olur?',
      options: ['Tək', 'Hər ikisi olar', 'Kontekstdən asılı', 'Cəm'],
      answer: 'Cəm',
    },
    {
      q: '"both...and" yalnız hansı cümlədə işlənir?',
      options: ['İnkar cümlədə', 'Sual cümlədə', 'Əmr cümlədə', 'Təsdiq cümlədə'],
      answer: 'Təsdiq cümlədə',
    },
    {
      q: '"Both"un inkarı nədir?',
      options: ['either', 'none', 'not both', 'neither'],
      answer: 'neither',
    },
    {
      q: '"Either" mübtəda olduqda fel hansı sayda olur?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"too" cümlənin sonunda hansı tip cümlədə işlənir?',
      options: ['İnkar cümlə', 'Sual cümlə', 'Əmr cümlə', 'Təsdiq cümlə'],
      answer: 'Təsdiq cümlə',
    },
    {
      q: '"either" cümlənin sonunda hansı tip cümlədə işlənir?',
      options: ['Təsdiq cümlə', 'Sual cümlə', 'Əmr cümlə', 'İnkar cümlə'],
      answer: 'İnkar cümlə',
    },
    {
      q: '"neither...nor" Azərbaycancaya necə tərcümə olunur?',
      options: ['ya...ya da', 'həm...həm də', 'nə...nə də', 'əgər...onda'],
      answer: 'nə...nə də',
    },
    {
      q: '"either...or" Azərbaycancaya necə tərcümə olunur?',
      options: ['nə...nə də', 'həm...həm də', 'nə...nə də', 'ya...ya da'],
      answer: 'ya...ya da',
    },
    {
      q: '"neither" mübtəda olduqda fel hansı sayda gəlir?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: 'Qısa inkar cümləni necə düzəldirik?',
      options: ['so + köməkçi fel + şəxs', 'not + köməkçi fel + şəxs', 'nor + köməkçi fel + şəxs', 'neither + köməkçi fel + şəxs'],
      answer: 'neither + köməkçi fel + şəxs',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Both my sister and brother ___ doctors." — boşluq?',
          options: ['is', 'was', 'are', 'were'],
          answer: 'are',
        },
        {
          q: '"I don\'t like it. My friend doesn\'t like it ___." — boşluq?',
          options: ['too', 'also', 'either', 'neither'],
          answer: 'either',
        },
        {
          q: '"Either my brothers or my sister ___ home." — boşluq?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: '"I can\'t speak English. ___ can I." — boşluq?',
          options: ['So', 'Too', 'Either', 'Neither'],
          answer: 'Neither',
        },
        {
          q: '"both...and" inkarı nədir?',
          options: ['either...or', 'neither...nor', 'not...and', 'no...and'],
          answer: 'neither...nor',
        },
      ],
    },
  ],
},

// ── Dərs 5.3 — Other / Another / Else ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.3 — Other / Another / Else',
  cards: [

    {
      type: 'lesson',
      title: 'Other — digər, başqa',
      content:
        '"Other" əvvəlcə xatırladılmış şəxsdən fərqlənən digər şəxs və ya əşya haqqında danışarkən işlənir.\n\n' +
        '• Həm tək, həm cəm isimlə işlənir\n' +
        '• Özü cəm ola bilər (others) — amma "others"dan sonra isim gəlmir\n' +
        '• "the other" → o biri (ikidən biri haqqında)',
      table: [
        ['Forma',        'Nümunə',                                      'Azərbaycanca'],
        ['other (sifət)', 'Give me another book, I need other ideas.',  'başqa, digər'],
        ['others (isim)', 'I have lost my pen and others.',             'başqaları'],
        ['the other',    'One is a doctor, the other is a teacher.',    'o biri'],
        ['the others',   'One left, the others stayed.',                'digərləri'],
      ],
      examples: [
        { word: 'Mr Brown has two sons. One is a doctor, the other is a teacher.', az: 'Cənab Braunun 2 oğlu var. Biri həkim, o birisi müəllimdir.' },
        { word: 'You must be tender to the others.',                               az: 'Siz başqalarına qarşı nəzakətli olmalısınız.' },
      ],
    },

    {
      type: 'lesson',
      title: 'Another — başqa bir / bir ... də',
      content:
        '"Another" düzəltmə sözdür: an + other.\n\n' +
        'Buna görə yalnız sayıla bilən tək isimlərə işlənir.\n' +
        '"another pen" ✓ — "another pens" ✗ → "other pens" ✓\n\n' +
        '2 mənası var:\n' +
        '1. Başqa bir (əvvəlkindən fərqli) — sonrakı cümlə inkar olur\n' +
        '2. Bir ... da/də (əlavə) — sonrakı cümlə kifayətsizliyi göstərir',
      examples: [
        { word: 'Give me another pen. This one doesn\'t write.',      az: 'Mənə başqa bir qələm verin. Bu yazmır.' },
        { word: 'Bring me another cup of tea. I am very thirsty.',    az: 'Mənə bir fincan da çay gətirin. Çox susamışam.' },
      ],
      tip: '"another" + cəm isim işlənmir → "another pen" ✓ / "other pens" ✓ / "another pens" ✗',
    },

    {
      type: 'lesson',
      title: 'Else — başqa / savayı',
      content:
        '"Else" sual əvəzliklərindən (who, what) sonra işlənir.\n\n' +
        '3 nöqtədən sonra:\n' +
        '• İsim gəlirsə → "other" işlənir\n' +
        '• Köməkçi fel / fel gəlirsə → "else" işlənir\n\n' +
        '"Else" qeyri-müəyyən əvəzliklərdən (somebody, something, nobody...) sonra da işlənir.',
      table: [
        ['"else" işlənir',                         '"other" işlənir'],
        ['Who else is there?',                     'What other films did you see?'],
        ['What else do you want?',                 'What other books do you need?'],
        ['Where else did you go?',                 '—'],
        ['There is something else I want to say.', '—'],
        ['Ask somebody else about it.',            '—'],
      ],
      tip: '"else"-dən sonra mütləq köməkçi fel / fel gəlir, isim gəlmir.',
    },
{
  type: 'mini_check',
  questions: [
    {
      q: '"another" yalnız hansı isimlərlə işlənir?',
      options: ['Sayılmayan isimlər', 'Cəm isimlər', 'Xüsusi isimlər', 'Sayılan tək isimlər'],
      answer: 'Sayılan tək isimlər',
    },
    {
      q: '"another pens" düzgün işlənişdirmi?',
      options: ['Bəli', 'Bəzən düzdür', 'Rəsmi nitqdə düzdür', 'Xeyr, "other pens" olmalıdır'],
      answer: 'Xeyr, "other pens" olmalıdır',
    },
    {
      q: '"the other" nə zaman işlənir?',
      options: ['Üçdən birini bildirərkən', 'Çoxluqdan birini bildirərkən', 'Sayılmayan isimlərdə', 'İkidən birini bildirərkən'],
      answer: 'İkidən birini bildirərkən',
    },
    {
      q: '"else" sözündən sonra cümlədə nə gəlir?',
      options: ['İsim', 'Sifət', 'Artikl', 'Köməkçi fel / fel'],
      answer: 'Köməkçi fel / fel',
    },
    {
      q: '"others" sözündən sonra isim işlənirmi?',
      options: ['Bəli, həmişə', 'Bəli, bəzən', 'Yalnız cəmdə', 'Xeyr, işlənmir'],
      answer: 'Xeyr, işlənmir',
    },
    {
      q: '"another" söz hansı iki sözdən əmələ gəlib?',
      options: ['any + other', 'and + other', 'one + other', 'an + other'],
      answer: 'an + other',
    },
    {
      q: '"Give me another pen." — "another" burada hansı mənadır?',
      options: ['Bir ... da/də (əlavə)', 'Hər hansı bir', 'Eyni', 'Başqa bir (əvvəlkindən fərqli)'],
      answer: 'Başqa bir (əvvəlkindən fərqli)',
    },
    {
      q: '"Bring me another cup of tea." — "another" burada hansı mənadır?',
      options: ['Başqa bir (əvvəlkindən fərqli)', 'Hər hansı bir', 'Eyni', 'Bir ... da/də (əlavə)'],
      answer: 'Bir ... da/də (əlavə)',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"What ___ do you want?" (başqa) — "else" yoxsa "other"?',
          options: ['other', 'else', 'another', 'others'],
          answer: 'else',
        },
        {
          q: '"What ___ films did you see?" — "else" yoxsa "other"?',
          options: ['else', 'others', 'other', 'another'],
          answer: 'other',
        },
        {
          q: '"another pens" düzdürmü?',
          options: ['Bəli', 'Xeyr — "other pens" olmalıdır', 'Bəli, cəmdə də işlənir', 'Kontekstdən asılıdır'],
          answer: 'Xeyr — "other pens" olmalıdır',
        },
        {
          q: '"One is a doctor, the ___ is a teacher." — boşluğa nə gəlir?',
          options: ['another', 'other', 'others', 'else'],
          answer: 'other',
        },
      ],
    },
  ],
},

// ── Quiz 5 — Təyin əvəzlikləri yekun ─────────────────────
[
  { en: '"All" canlılarla işlənərkən fel hansı sayda olur?',           tr: 'Cəm',                  wrong: 'Tək'                 },
  { en: '"All" sayılmayan isimlə işlənərkən fel hansı sayda olur?',    tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"each of" işlənirmi?',                                         tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"every of" işlənirmi?',                                        tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Everybody" mübtəda olduqda fel hansı sayda?',                tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"Everything" hansı varlıqlara aid işlənir?',                  tr: 'Əşyalara',             wrong: 'Şəxslərə'            },
  { en: '"Both" mübtəda olduqda xəbər hansı sayda olur?',              tr: 'Cəm',                  wrong: 'Tək'                 },
  { en: '"both...and" yalnız hansı cümlədə işlənir?',                  tr: 'Təsdiq cümlədə',       wrong: 'İnkar cümlədə'       },
  { en: '"both...and"ın inkarı nədir?',                                 tr: 'neither...nor',        wrong: 'either...or'         },
  { en: '"Either" mübtəda olduqda fel hansı sayda olur?',              tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"too" hansı cümlənin sonunda işlənir?',                       tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"either" (sonda) hansı cümlənin sonunda işlənir?',            tr: 'İnkar',                wrong: 'Təsdiq'              },
  { en: '"neither...nor" Azərbaycancaya necə tərcümə olunur?',         tr: 'nə...nə də',           wrong: 'ya...ya da'          },
  { en: '"another" yalnız hansı isimlərə işlənir?',                    tr: 'Sayılan tək isimlər',  wrong: 'Sayılmayan isimlər'  },
  { en: '"another pens" düzdürmü?',                                     tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"else"-dən sonra nə gəlir?',                                   tr: 'Köməkçi fel / fel',    wrong: 'İsim'                },
  { en: '"the other" nə zaman işlənir?',                                tr: 'İkidən birini bildirərkən', wrong: 'Üçdən birini bildirərkən' },
  { en: '"neither" mübtəda olduqda fel hansı sayda gəlir?',            tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"What else" — "else"-dən sonra nə gəlir?',                    tr: 'Köməkçi fel',          wrong: 'İsim'                },
  { en: '"What other films" — burada niyə "other" işlənir?',          tr: 'Sonra isim gəlir',      wrong: 'Sonra fel gəlir'     },
],


// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 6 — Qeyri-müəyyən, İnkar, Nisbi əvəzliklər   │
// │  Indefinite + Negative + Relative Pronouns             │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Qeyri-müəyyən, İnkar, Nisbi əvəzliklər',
},

// ── Dərs 6.1 — Qeyri-müəyyən əvəzliklər ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.1 — Qeyri-müəyyən əvəzliklər (Indefinite Pronouns)',
  cards: [

    {
      type: 'lesson',
      title: 'Some / Any',
      content:
        '"Some" və "any" həm sayılan, həm sayılmayan isimlərlə işlənir.\n\n' +
        '• "some" → adətən təsdiq cümlədə\n' +
        '• "any" → adətən sual və inkar cümlədə\n' +
        '• "any" → şərt cümlədə "istədiyin" mənasında\n' +
        '• "some" bəzən inkar cümlədə "bəzi" mənasında işlənir\n' +
        '• Sayılan isimlə: "bir neçə" mənası; sayılmayan isimlə: "bir az" mənası',
      table: [
        ['',       'Some',                      'Any'],
        ['Cümlə',  'Adətən təsdiq',             'Adətən sual/inkar'],
        ['Məna',   'bir neçə / bir az / bəzi',  'istədiyin / heç bir'],
        ['Nümunə', 'Some pupils are in the yard.', 'Do you have any books?'],
        ['İstisna', 'Some birds can\'t fly.',   'If you have any time, come.'],
      ],
      tip: '"some" və "any"-dən sonra həmişə isim gəlir. Əgər isim artıq çəkilibirsə, yalnız "some/any" işlənə bilir: Bring me some paper. We haven\'t any.',
    },

    {
      type: 'lesson',
      title: 'Somebody / Anyone / Something / Anything',
      content:
        'Şəxsə aid:\n' +
        '• somebody / someone → kimsə (təsdiq cümlədə)\n' +
        '• anybody / anyone → heç kim (sual/inkar cümlədə)\n\n' +
        'Əşyaya aid:\n' +
        '• something → nəisə bir şey (təsdiq cümlədə)\n' +
        '• anything → heç bir şey (sual/inkar cümlədə)\n\n' +
        'Hamısından sonra isim gəlmir. Mübtəda olduqda fel tək gəlir.',
      table: [
        ['Əvəzlik',    'Aid olduğu', 'İşlənmə',        'Azərbaycanca'],
        ['somebody',   'Şəxs',      'Təsdiq',          'kimsə'],
        ['anybody',    'Şəxs',      'Sual/inkar',      'heç kim'],
        ['something',  'Əşya',      'Təsdiq',          'nəisə bir şey'],
        ['anything',   'Əşya',      'Sual/inkar',      'heç bir şey / bir şeymi'],
      ],
      examples: [
        { word: 'Somebody is at the door.',        az: 'Qapıda kimsə var.' },
        { word: 'Does anybody come?',              az: 'Kimsə gəlir?' },
        { word: 'There is something on the table.',az: 'Masanın üstündə nəsə var.' },
        { word: 'I don\'t want anything.',         az: 'Mən heç nə istəmirəm.' },
      ],
    },

    {
      type: 'lesson',
      title: 'Many / Much / A lot of',
      content:
        '"Many" → sayılan isimlərlə (cəm isim, cəm fel)\n' +
        '"Much" → sayılmayan isimlərlə (tək isim, tək fel)\n\n' +
        'Hər ikisi əsasən sual və inkar cümlədə işlənir.\n\n' +
        '"A lot of" → təsdiq cümlədə işlənir (sualda/inkarda many/much əvəz edir)\n\n' +
        '"Much" felə də aid ola bilər — feldən sonra gəlir.\n' +
        '"A lot" felə aid olduqda "of" olmur, feldən sonra gəlir.',
      table: [
        ['',        'Many',                  'Much',                   'A lot of'],
        ['İsim',    'Sayılan (cəm)',         'Sayılmayan (tək)',        'Hər ikisi'],
        ['Cümlə',   'Sual/inkar',            'Sual/inkar',             'Yalnız təsdiq'],
        ['Nümunə',  'Many books',            'Much milk',              'A lot of books/milk'],
        ['Feldən sonra', '—',               'She speaks much.',        'She speaks a lot.'],
      ],
    },

    {
      type: 'lesson',
      title: 'Few / Little / A few / A little',
      content:
        '"few" → sayılan isimlərlə — mənfi məna (az, kifayətsiz)\n' +
        '"little" → sayılmayan isimlərlə — mənfi məna (az, kifayətsiz)\n\n' +
        '"a few" → sayılan isimlərlə — müsbət məna (bir neçə, bəzi)\n' +
        '"a little" → sayılmayan isimlərlə — müsbət məna (bir az)\n\n' +
        'Isimsiz də işlənə bilər.',
      table: [
        ['Forma',     'İsim növü',   'Məna',      'Nümunə'],
        ['few',       'Sayılan',     'Az (mənfi)', 'I have few books. I can\'t give you.'],
        ['a few',     'Sayılan',     'Bir neçə',   'I have a few books. I can give you.'],
        ['little',    'Sayılmayan',  'Az (mənfi)', 'I have little money. I can\'t give it.'],
        ['a little',  'Sayılmayan',  'Bir az',     'I have a little money. I can give you.'],
      ],
      tip: '"a" artiklı ilə: müsbət məna → "I have a few / a little" — verə bilərəm. Artikl olmadan: mənfi məna → "I have few / little" — verə bilmirəm.',
    },

 {
  type: 'mini_check',
  questions: [
    {
      q: '"some" adətən hansı cümlədə işlənir?',
      options: ['İnkar', 'Sual', 'Əmr', 'Təsdiq'],
      answer: 'Təsdiq',
    },
    {
      q: '"any" adətən hansı cümlədə işlənir?',
      options: ['Təsdiq', 'Əmr', 'Nida', 'Sual/inkar'],
      answer: 'Sual/inkar',
    },
    {
      q: '"a lot of" hansı cümlədə işlənir?',
      options: ['Yalnız inkar', 'Yalnız sual', 'Yalnız əmr', 'Təsdiq'],
      answer: 'Təsdiq',
    },
    {
      q: '"many" hansı isimlərlə işlənir?',
      options: ['Sayılmayan (tək)', 'Xüsusi isimlər', 'Tək isimlər', 'Sayılan (cəm)'],
      answer: 'Sayılan (cəm)',
    },
    {
      q: '"much" hansı isimlərlə işlənir?',
      options: ['Sayılan (cəm)', 'Xüsusi isimlər', 'Cəm isimlər', 'Sayılmayan (tək)'],
      answer: 'Sayılmayan (tək)',
    },
    {
      q: '"somebody" hansı cümlədə işlənir?',
      options: ['Sual', 'İnkar', 'Sual/inkar', 'Təsdiq'],
      answer: 'Təsdiq',
    },
    {
      q: '"anybody" hansı cümlədə işlənir?',
      options: ['Təsdiq', 'Əmr', 'Nida', 'Sual/inkar'],
      answer: 'Sual/inkar',
    },
    {
      q: '"a few" ilə "few" arasındakı fərq nədir?',
      options: ['Heç bir fərq yoxdur', 'İkisi də mənfi məna verir', 'İkisi də müsbət məna verir', 'a few müsbət, few mənfi məna verir'],
      answer: 'a few müsbət, few mənfi məna verir',
    },
    {
      q: '"a little" Azərbaycancaya necə tərcümə olunur?',
      options: ['az (mənfi)', 'çox az', 'heç', 'bir az (müsbət)'],
      answer: 'bir az (müsbət)',
    },
    {
      q: '"something" hansı varlıqlara aid işlənir?',
      options: ['Şəxslərə', 'Heyvanlara', 'Canlılara', 'Əşyalara'],
      answer: 'Əşyalara',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"There are ___ students in the yard." (bir neçə — müsbət) — boşluq?',
          options: ['few', 'little', 'a few', 'a little'],
          answer: 'a few',
        },
        {
          q: '"I have ___ money. I can\'t give it to you." — boşluq?',
          options: ['a little', 'a few', 'many', 'little'],
          answer: 'little',
        },
        {
          q: '"___ books are on the table." (çox — təsdiq) — boşluq?',
          options: ['Many', 'Much', 'A lot of', 'Few'],
          answer: 'A lot of',
        },
        {
          q: '"Does ___ come?" — boşluğa nə gəlir?',
          options: ['somebody', 'nobody', 'anybody', 'everybody'],
          answer: 'anybody',
        },
        {
          q: '"She speaks ___." (çox — felə aid) — boşluq?',
          options: ['many', 'much', 'a lot of', 'a lot'],
          answer: 'a lot',
        },
      ],
    },
  ],
},

// ── Dərs 6.2 — İnkar əvəzlikləri ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.2 — İnkar əvəzlikləri (Negative Pronouns)',
  cards: [

    {
      type: 'lesson',
      title: 'İnkar əvəzliklərinin cədvəli',
      content:
        'İngilis dilindəki inkar əvəzlikləri cümləni tək başına inkar edir.\n\n' +
        'Bir cümlədə yalnız bir inkarlıq mümkündür — ikinci inkarlıq heç vaxt işlənmər.',
      table: [
        ['Əvəzlik',  'Azərbaycanca',           'Xüsusiyyət'],
        ['no',       'heç bir',                'İsimin qarşısında gəlir, artikl işlənmir'],
        ['none',     'heç biri / heç kim',     '"no"nun müstəqil (isimsiz) forması'],
        ['nobody',   'heç kim / heç kəs',      'Şəxsə aid, isimsiz, fel tək'],
        ['no one',   'heç kim / heç kəs',      'Şəxsə aid, isimsiz, fel tək'],
        ['nothing',  'heç nə / heç bir şey',   'Əşyaya aid, isimsiz, fel tək'],
        ['neither',  'heç biri ... deyil',     'İki şeydən heç biri, fel tək'],
      ],
      examples: [
        { word: 'No man he knew in that village.',     az: 'O kənddə heç bir adam tanımır.' },
        { word: 'None of them dared to speak.',        az: 'Onlardan heç kim danışmağa cürət etmədi.' },
        { word: 'I know nobody in this village.',      az: 'Mən bu kənddə heç kimi tanımıram.' },
        { word: 'Neither of my friends was there.',    az: 'Dostlarımdan heç biri orada deyildi.' },
      ],
    },

    {
      type: 'lesson',
      title: 'İnkar əvəzliklərinin işlənmə qaydası',
      content:
        '"no" → isimin qarşısında gəlir, cümləni inkar edir. İsim artiklsiz olur.\n\n' +
        '"none" → "no"nun müstəqil (isimsiz) formasıdır. Həm şəxsə, həm əşyaya aid işlənə bilər.\n\n' +
        '"nobody / no one" → şəxsə aid. Mübtəda olduqda fel tək.\n\n' +
        '"nothing" → əşyaya aid. Mübtəda olduqda fel tək.\n\n' +
        '"neither" → iki şeydən heç biri. Həm tək, həm isimlə işlənir. Mübtəda olduqda fel tək.',
      table: [
        ['Bir cümlədə İKİ inkar? → YANLIŞ',           'Bir cümlədə BİR inkar → DÜZGÜN'],
        ['I don\'t know nobody. ✗',                   'I know nobody. ✓'],
        ['He didn\'t see nothing. ✗',                 'He saw nothing. ✓'],
        ['Nobody didn\'t come. ✗',                    'Nobody came. ✓'],
      ],
      tip: 'İnkar əvəzliyi olan cümlədə "not/didn\'t/don\'t" kimi əlavə inkar işlənmir!',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"no" isimin qarşısında gəldikdə artikl işlənirmi?',
      options: ['Bəli, "the"', 'Bəli, "a/an"', 'Bəzən', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"none" "no"nun hansı formasıdır?',
      options: ['Cəm forması', 'Gücləndirilmiş forması', 'Sual forması', 'Müstəqil (isimsiz)'],
      answer: 'Müstəqil (isimsiz)',
    },
    {
      q: '"nobody" hansı varlıqlara aid işlənir?',
      options: ['Əşyalara', 'Heyvanlara', 'Cansız varlıqlara', 'Şəxslərə'],
      answer: 'Şəxslərə',
    },
    {
      q: '"nothing" hansı varlıqlara aid işlənir?',
      options: ['Şəxslərə', 'Heyvanlara', 'Canlılara', 'Əşyalara'],
      answer: 'Əşyalara',
    },
    {
      q: '"neither" mübtəda olduqda fel hansı sayda gəlir?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: 'İngilis dilində bir cümlədə neçə inkarlıq işlənə bilər?',
      options: ['İki', 'Üç', 'Məhdudiyyət yoxdur', 'Bir'],
      answer: 'Bir',
    },
    {
      q: '"I know nobody." — bu cümlə düzgündürmü?',
      options: ['Xeyr', 'Bəzən düzdür', 'Yalnız danışıq dilində', 'Bəli'],
      answer: 'Bəli',
    },
    {
      q: '"I don\'t know nobody." — bu cümlə düzgündürmü?',
      options: ['Bəli', 'Bəzən düzdür', 'Danışıq dilində düzdür', 'Xeyr'],
      answer: 'Xeyr',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ of my friends was there." (heç biri) — boşluq?',
          options: ['Nobody', 'Nothing', 'Neither', 'None'],
          answer: 'Neither',
        },
        {
          q: '"I know ___ in this village." — boşluq? (heç kimi)',
          options: ['nothing', 'nobody', 'neither', 'no one of'],
          answer: 'nobody',
        },
        {
          q: '"___ man he knew in that village." — boşluq?',
          options: ['None', 'Nobody', 'No', 'Neither'],
          answer: 'No',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'I don\'t know nothing.',
            'I know nothing.',
            'I don\'t know no one.',
            'Nobody didn\'t come.',
          ],
          answer: 'I know nothing.',
        },
      ],
    },
  ],
},

// ── Dərs 6.3 — Nisbi əvəzliklər ──────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.3 — Nisbi əvəzliklər (Relative Pronouns)',
  cards: [

    {
      type: 'lesson',
      title: 'Nisbi əvəzliklər — cədvəl',
      content:
        'Nisbi əvəzliklər eyni vaxtda iki vəzifə daşıyır:\n' +
        '1. Cümlə üzvü olur (mübtəda, tamamlıq)\n' +
        '2. Təyin budaq cümləsini baş cümləyə bağlayır (bağlayıcı)',
      table: [
        ['Əvəzlik', 'Aid olduğu',                 'Funksiya',              'Nümunə'],
        ['who',     'İnsan bildirən isimlər',      'Mübtəda / tamamlıq',   'People who live here are poor.'],
        ['whom',    'İnsan bildirən isimlər',      'Yalnız tamamlıq',      'The man whom we waited for...'],
        ['which',   'Cansız / heyvan',             'Mübtəda / tamamlıq',   'The bird which can speak...'],
        ['whose',   'Mənsubiyyət (canlı)',         'Təyin',                'The boy whose father is ill...'],
        ['that',    'Həm insan, həm cansız',       'Mübtəda / tamamlıq',   'The chair that has a broken leg...'],
      ],
    },

    {
      type: 'lesson',
      title: 'Who / Whom / Which / Whose / That — fərqlər',
      content:
        '"who" → insanlara aid, həm mübtəda, həm tamamlıq\n' +
        '"whom" → insanlara aid, yalnız tamamlıq\n' +
        '"which" → cansız varlıqlara və heyvanlara aid\n' +
        '"whose" → mənsubiyyət bildirir (canlı varlıqlar), əvəz edilə bilmir\n' +
        '"that" → həm who/whom, həm which yerinə işlənir. "Whose" əvəz edilmir.',
      examples: [
        { word: 'The man who is standing in the corridor is our teacher.',    az: 'Dəhlizin qabağında dayanan adam bizim müəllimimizdir.' },
        { word: 'The man whom we are waiting for is a writer.',               az: 'Bizim gözlədiyimiz adam yazıçıdır.' },
        { word: 'The bird which can speak is the parrot.',                    az: 'Danışmağı bacaran quş tutuquşudur.' },
        { word: 'The boy whose father is in hospital is crying.',             az: 'Atası xəstəxanada olan oğlan ağlayır.' },
        { word: 'Don\'t sit on the chair that has a broken leg.',             az: 'Ayağı sınıq olan stulda oturma.' },
      ],
    },

    {
      type: 'lesson',
      title: 'Where / In which',
      content:
        'Yer bildirən zərflər olduqda "where" və ya "in which" işlədilir.',
      examples: [
        { word: 'We arrived at the house where I lived.',          az: 'Mən yaşadığım evə çatdıq.' },
        { word: 'We arrived at the house in which I lived.',       az: 'Mən yaşadığım evə çatdıq.' },
      ],
      table: [
        ['Bağlayıcı',  'İşlənmə',                         'Nümunə'],
        ['where',      'Yer bildirən isimlərdən sonra',    'the house where I lived'],
        ['in which',   '"where" yerinə işlənə bilir',      'the house in which I lived'],
      ],
      tip: '"whose" heç vaxt "that" ilə əvəz edilə bilmir — bunu xatırla!',
    },

    {{
  type: 'mini_check',
  questions: [
    {
      q: '"who" nisbi əvəzliyi hansı varlıqlara aid işlənir?',
      options: ['Cansız varlıqlara', 'Heyvanlara', 'Əşyalara', 'İnsanlara'],
      answer: 'İnsanlara',
    },
    {
      q: '"whom" yalnız hansı funksiyada işlənir?',
      options: ['Mübtəda', 'Xəbər', 'Zərflik', 'Tamamlıq'],
      answer: 'Tamamlıq',
    },
    {
      q: '"which" hansı varlıqlara aid işlənir?',
      options: ['Yalnız insanlara', 'Yalnız heyvanlara', 'Yalnız əşyalara', 'Cansız / heyvan'],
      answer: 'Cansız / heyvan',
    },
    {
      q: '"that" nisbi əvəzliyi kimi əvəz edə bilir?',
      options: ['Yalnız who', 'Yalnız which', 'Whose', 'Who / whom / which'],
      answer: 'Who / whom / which',
    },
    {
      q: '"whose" "that" ilə əvəz edilə bilirmi?',
      options: ['Bəli', 'Bəzən', 'Yalnız rəsmi nitqdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: 'Yer bildirən zərflər yerinə təyin budaq cümləsində nə işlənir?',
      options: ['that / which', 'who / whom', 'whose / which', 'where / in which'],
      answer: 'where / in which',
    },
    {
      q: 'Nisbi əvəzliklər eyni vaxtda neçə vəzifə daşıyır?',
      options: ['1', '3', '4', '2'],
      answer: '2',
    },
    {
      q: '"whose" mənsubiyyəti bildirərkən hansı varlıqlara aid olur?',
      options: ['Yalnız cansız varlıqlara', 'Yalnız əşyalara', 'Yalnız heyvanlara', 'Canlı varlıqlara'],
      answer: 'Canlı varlıqlara',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The man ___ we are waiting for is a writer." — boşluğa nə gəlir?',
          options: ['who', 'whose', 'which', 'whom'],
          answer: 'whom',
        },
        {
          q: '"The bird ___ can speak is the parrot." — boşluq?',
          options: ['who', 'whose', 'which', 'whom'],
          answer: 'which',
        },
        {
          q: '"The boy ___ father is in hospital is crying." — boşluq?',
          options: ['who', 'that', 'whose', 'which'],
          answer: 'whose',
        },
        {
          q: '"We arrived at the house ___ I lived." — iki düzgün variant?',
          options: [
            'that / whose',
            'where / in which',
            'who / whom',
            'which / whose',
          ],
          answer: 'where / in which',
        },
      ],
    },
  ],
},

// ── Dərs 6.4 — Xüsusi qeydlər (Notes) ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 6.4 — Xüsusi qeydlər',
  cards: [

    {
      type: 'lesson',
      title: 'A number of / The number of',
      content:
        '"A number of" + isim cəm gəlir, fel də cəm gəlir.\n\n' +
        '"The number of" + isim cəm gəlir, fel tək gəlir.\n' +
        '("the number" — nəyinsə sayı mənasında)',
      table: [
        ['İfadə',          'İsim',  'Fel',  'Nümunə'],
        ['a number of',    'Cəm',   'Cəm',  'A number of books are on the table.'],
        ['the number of',  'Cəm',   'Tək',  'The number of books is unknown.'],
      ],
      examples: [
        { word: 'A number of books are on the table.',    az: 'Masanın üstündə bir neçə kitab var.' },
        { word: 'The number of books is unknown.',        az: 'Kitabların sayı məlum deyil.' },
      ],
    },

    {
      type: 'lesson',
      title: 'Politics + very/too + a lot of/a lot',
      content:
        '"Politics" — fənn mənasında → fel tək\n' +
        '"Politics" — kiminsə siyasəti mənasında → fel cəm\n\n' +
        '"a lot of" → yalnız təsdiq cümlədə, ismə aid olur\n' +
        '"a lot" → felə aid olur, feldən sonra gəlir, "of" olmur\n\n' +
        '"very" / "too" → sifət və ya zərfə aid olur\n' +
        '"very many books" → lap çox kitab\n' +
        '"too many questions" → daha çox sual (artıq)',
      table: [
        ['İfadə',         'Aid olduğu',    'Nümunə'],
        ['a lot of',      'İsmə',          'A lot of books are sold.'],
        ['a lot',         'Felə',          'She speaks a lot.'],
        ['very many',     'Sifət/zərf',    'very many books'],
        ['too many',      'Sifət/zərf',    'too many questions'],
      ],
    },

    {
      type: 'lesson',
      title: 'Any of / None of / A lot of — felə təsiri',
      content:
        'Aşağıdakı ifadələrdən sonra sayılmayan isim gələrsə fel tək olur:\n\n' +
        '• any of, none of, a lot of, a plenty of, all (of)',
      table: [
        ['İfadə',          'Nümunə',                              'Fel'],
        ['a lot of + sayılmayan', 'A lot of information is ready.', 'Tək'],
        ['none of + sayılmayan',  'None of the milk was left.',     'Tək'],
        ['all of + sayılmayan',   'All of the water is gone.',      'Tək'],
      ],
      tip: 'Sayılan isimlərlə bu ifadələr cəm feli tələb edir.',
    },
{
  type: 'mini_check',
  questions: [
    {
      q: '"A number of books ___." — fel hansı sayda olur?',
      options: ['Tək (is)', 'Hər ikisi olar', 'Kontekstdən asılı', 'Cəm (are)'],
      answer: 'Cəm (are)',
    },
    {
      q: '"The number of books ___." — fel hansı sayda olur?',
      options: ['Cəm (are)', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək (is)'],
      answer: 'Tək (is)',
    },
    {
      q: '"Politics" fənn mənasında işlənərkən fel hansı sayda olur?',
      options: ['Cəm', 'Hər ikisi olar', 'Kontekstdən asılı', 'Tək'],
      answer: 'Tək',
    },
    {
      q: '"a lot of" yalnız hansı cümlədə işlənir?',
      options: ['İnkar', 'Sual', 'Əmr', 'Təsdiq'],
      answer: 'Təsdiq',
    },
    {
      q: '"a lot" felə aid olduqda "of" işlənirmi?',
      options: ['Bəli, həmişə', 'Bəli, bəzən', 'Rəsmi nitqdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"very" / "too" söz birləşməsində nəyə aid olur?',
      options: ['İsmə', 'Felə', 'Artikla', 'Sifət / zərfə'],
      answer: 'Sifət / zərfə',
    },
    {
      q: '"A lot of information ___ ready." — boşluğa nə gəlir?',
      options: ['are', 'were', 'have been', 'is'],
      answer: 'is',
    },
    {
      q: '"She speaks ___." — "çox" mənasında felə aid boşluğa nə gəlir?',
      options: ['a lot of', 'very', 'much', 'a lot'],
      answer: 'a lot',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"A number of students ___ in the yard." — boşluq?',
          options: ['is', 'was', 'are', 'has been'],
          answer: 'are',
        },
        {
          q: '"The number of students ___ unknown." — boşluq?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: '"She reads ___." (çox — felə aid) — boşluq?',
          options: ['a lot of', 'much', 'many', 'a lot'],
          answer: 'a lot',
        },
        {
          q: '"A lot of information ___ ready." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
      ],
    },
  ],
},

// ── Quiz 6 — Mərhələ 6 yekun ──────────────────────────────
[
  // Qeyri-müəyyən
  { en: '"some" adətən hansı cümlədə işlənir?',                        tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"any" adətən hansı cümlədə işlənir?',                         tr: 'Sual/inkar',           wrong: 'Təsdiq'              },
  { en: '"somebody" hansı cümlədə işlənir?',                           tr: 'Təsdiq',               wrong: 'Sual/inkar'          },
  { en: '"anybody" hansı cümlədə işlənir?',                            tr: 'Sual/inkar',           wrong: 'Təsdiq'              },
  { en: '"many" hansı isimlərlə işlənir?',                             tr: 'Sayılan (cəm)',         wrong: 'Sayılmayan (tək)'    },
  { en: '"much" hansı isimlərlə işlənir?',                             tr: 'Sayılmayan (tək)',      wrong: 'Sayılan (cəm)'       },
  { en: '"a few" hansı mənaya malikdir?',                              tr: 'Bir neçə (müsbət)',     wrong: 'Az (mənfi)'          },
  { en: '"little" hansı mənaya malikdir?',                             tr: 'Az (mənfi)',            wrong: 'Bir az (müsbət)'     },
  // İnkar
  { en: 'Bir cümlədə neçə inkarlıq ola bilər?',                       tr: 'Bir',                  wrong: 'İki'                 },
  { en: '"nobody" hansı varlıqlara aid işlənir?',                      tr: 'Şəxslərə',             wrong: 'Əşyalara'            },
  { en: '"nothing" hansı varlıqlara aid işlənir?',                     tr: 'Əşyalara',             wrong: 'Şəxslərə'            },
  { en: '"neither" mübtəda olduqda fel hansı sayda gəlir?',            tr: 'Tək',                  wrong: 'Cəm'                 },
  // Nisbi
  { en: '"who" nisbi əvəzliyi hansı varlıqlara aid işlənir?',          tr: 'İnsanlara',            wrong: 'Cansız varlıqlara'   },
  { en: '"whom" yalnız hansı funksiyada işlənir?',                     tr: 'Tamamlıq',             wrong: 'Mübtəda'             },
  { en: '"which" hansı varlıqlara aid işlənir?',                       tr: 'Cansız / heyvan',       wrong: 'İnsanlara'           },
  { en: '"whose" "that" ilə əvəz edilə bilirmi?',                      tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Yer bildirən zərflər yerinə hansı işlənir?',                  tr: 'where / in which',     wrong: 'that / which'        },
  // Qeydlər
  { en: '"A number of books ___." — fel hansı sayda?',                 tr: 'Cəm (are)',            wrong: 'Tək (is)'            },
],

      {
      type: 'section_divider',
      title: 'PRONOUN - ÜMUMİ İMTAHAN',
},

// ┌─────────────────────────────────────────────────────────┐
// │  FINAL QUIZ — Əvəzlik (Pronoun) — Bütün bölüm         │
// └─────────────────────────────────────────────────────────┘
[
  // Şəxs əvəzlikləri — adlıq hal
  { en: '"I" əvəzliyi necə yazılır?',                                   tr: 'Həmişə böyük hərflə',  wrong: 'Həmişə kiçik hərflə' },
  { en: 'Adlıq hal cümlədə hansı funksiyada işlənir?',                 tr: 'Mübtəda',              wrong: 'Tamamlıq'            },
  { en: '"he / she / it" cəmdə hansı əvəzliklə ifadə olunur?',        tr: 'they',                 wrong: 'we'                  },
  // Şəxs əvəzlikləri — obyekt hal
  { en: '"he" əvəzliyinin obyekt forması nədir?',                       tr: 'him',                  wrong: 'his'                 },
  { en: '"they" əvəzliyinin obyekt forması nədir?',                     tr: 'them',                 wrong: 'their'               },
  { en: '"by" sözönü ilə hansı növ xəbər işlənir?',                    tr: 'Məchul növ',           wrong: 'Məlum növ'           },
  { en: '"for" sözönü ilə obyekt hal necə tərcümə olunur?',            tr: 'üçün',                 wrong: 'ilə'                 },
  // Yiyəlik əvəzlikləri
  { en: '"my" özündən sonra nə tələb edir?',                            tr: 'İsim',                 wrong: 'Heç nə'              },
  { en: '"mine" özündən sonra nə tələb edir?',                          tr: 'Heç nə (isimsiz)',     wrong: 'İsim'                },
  { en: '"their" ilə "theirs" fərqi nədir?',                           tr: '"their" isimlə, "theirs" isimsiz', wrong: 'Heç bir fərq yoxdur' },
  { en: '"a friend of ___" (sənin bir dostun) — boşluq?',              tr: 'yours',                wrong: 'your'                },
  // Qayıdış əvəzlikləri
  { en: '"she" şəxsinin qayıdış əvəzliyi nədir?',                      tr: 'herself',              wrong: 'himself'             },
  { en: '"by himself" necə tərcümə olunur?',                           tr: 'özü tək',              wrong: 'onunla birlikdə'     },
  // İşarə əvəzlikləri
  { en: '"this" cəm forması nədir?',                                    tr: 'these',                wrong: 'those'               },
  { en: '"the same" həmişə hansı artikl ilə işlənir?',                 tr: 'the',                  wrong: 'a'                   },
  { en: '"such" işlənməsi üçün nə lazımdır?',                          tr: 'İsim olmalıdır',       wrong: 'Fel olmalıdır'       },
  // Sual əvəzlikləri
  { en: '"Who" mübtəda olduqda xəbər hansı sayda olur?',               tr: 'Tək',                  wrong: 'Cəm'                 },
  { en: '"Whom"-dan sonra mütləq nə gəlir?',                           tr: 'Köməkçi fel',          wrong: 'İsim'                },
  { en: '"Whose" Azərbaycancaya necə tərcümə olunur?',                 tr: 'kimin',                wrong: 'hansı'               },
  { en: '"Which" — nə vaxt işlənir?',                                   tr: 'Seçim arasında',       wrong: 'Ümumi sorğularda'    },
  { en: '"What is he?" cümləsi nəyi soruşur?',                         tr: 'Sənəti / vəzifəsini',  wrong: 'Adını'               },
  // Təyin əvəzlikləri
  { en: '"each of" işlənirmi?',                                         tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"every of" işlənirmi?',                                        tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Both" mübtəda olduqda xəbər hansı sayda olur?',              tr: 'Cəm',                  wrong: 'Tək'                 },
  { en: '"both...and"ın inkarı nədir?',                                 tr: 'neither...nor',        wrong: 'either...or'         },
  { en: '"too" hansı cümlənin sonunda işlənir?',                       tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"either" (sonda) hansı cümlənin sonunda işlənir?',            tr: 'İnkar',                wrong: 'Təsdiq'              },
  { en: '"another" yalnız hansı isimlərə işlənir?',                    tr: 'Sayılan tək isimlər',  wrong: 'Sayılmayan isimlər'  },
  { en: '"else"-dən sonra nə gəlir?',                                   tr: 'Köməkçi fel / fel',    wrong: 'İsim'                },
  // Qeyri-müəyyən əvəzliklər
  { en: '"some" adətən hansı cümlədə işlənir?',                        tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"a lot of" hansı cümlədə işlənir?',                           tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"a few" hansı mənaya malikdir?',                              tr: 'Bir neçə (müsbət)',     wrong: 'Az (mənfi)'          },
  { en: '"much" hansı isimlərlə işlənir?',                             tr: 'Sayılmayan (tək)',      wrong: 'Sayılan (cəm)'       },
  // İnkar əvəzliklər
  { en: 'Bir cümlədə neçə inkarlıq ola bilər?',                       tr: 'Bir',                  wrong: 'İki'                 },
  { en: '"nobody" hansı varlıqlara aid işlənir?',                      tr: 'Şəxslərə',             wrong: 'Əşyalara'            },
  { en: '"nothing" hansı varlıqlara aid işlənir?',                     tr: 'Əşyalara',             wrong: 'Şəxslərə'            },
  // Nisbi əvəzliklər
  { en: '"which" nisbi əvəzliyi hansı varlıqlara aid işlənir?',        tr: 'Cansız / heyvan',       wrong: 'İnsanlara'           },
  { en: '"whose" "that" ilə əvəz edilə bilirmi?',                      tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"whom" yalnız hansı funksiyada işlənir?',                     tr: 'Tamamlıq',             wrong: 'Mübtəda'             },
  // Qeydlər
  { en: '"A number of books ___." — fel hansı sayda?',                 tr: 'Cəm (are)',            wrong: 'Tək (is)'            },
  { en: '"The number of books ___." — fel hansı sayda?',               tr: 'Tək (is)',             wrong: 'Cəm (are)'           },
  { en: '"a lot" felə aid olduqda "of" işlənirmi?',                    tr: 'Xeyr',                 wrong: 'Bəli'                },
],
      
  ],
};
// ── 8. ARTICLE (ARTİKL) ─────────────────────────────────────
const ARTICLE_LEVEL = {
  id: 'article',
  name: 'ARTICLE — ARTİKL',
  icon: '<i class="ti ti-tag"></i>',
  color: '#FCD34D',

  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  ARTİKL — Tam bölüm                                    ║
// ══════════════════════════════════════════════════════════

// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 1 — Qeyri-müəyyənlik artiklı (a / an)            │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Qeyri-müəyyənlik (a/an)',
},

// ── Bölmə 1 — a / an: əsas qayda və tələffüz ─────────────
{
  type: 'grammar_lesson',
  title: 'Bölmə 1 — a / an: əsas qayda və tələffüz',
  cards: [

    {
      type: 'lesson',
      title: 'Artikl nədir?',
      content:
        'Artikl köməkçi nitq hissəsidir. Artikl ancaq ismin əlamətidir.\n\n' +
        'Artiklın iki növü var:\n' +
        '• Qeyri-müəyyənlik artiklı — a / an\n' +
        '• Müəyyənlik artiklı — the\n\n' +
        '"a / an" artiklı "bir \ hər hansı bir", "the" artiklı isə "o \ həmin" mənalarını verir. ' +
        'Ancaq çox vaxt dilimizə tərcümə olunmurlar.\n\n' +
        'Ex: I have a book. The book is interesting.\n' +
        'Mənim bir kitabım var. Həmin kitab maraqlıdır.',
      table: [
        ['Artikl', 'Növ', 'Məna'],
        ['a / an', 'Qeyri-müəyyən', 'bir / hər hansı bir'],
        ['the',    'Müəyyən',       'o / həmin'],
      ],
      tip: 'Artikl həmişə təyin etdiyi isimdən əvvəl gəlir. Əgər isimin qarşısında sifət gələrsə, artikl sifətdən əvvəl işlənir, ancaq ismə aid olur.',
    },

    {
      type: 'lesson',
      title: 'a yoxsa an? — seçim qaydası',
      content:
        '"a" — samitlə başlayan sözlərin qarşısında işlənir.\n' +
        '"an" — sait səslə başlayan sözlərin qarşısında işlənir.\n\n' +
        'Diqqət: Yazılışa yox, tələffüzə baxılır!\n\n' +
        'Oxunmayan "h" ilə başlayan sözlərin qarşısında "an" işlənir:\n' +
        'an hour [ən\'auə], an honourable person\n\n' +
        'Samit səs verən "y" və "u" hərfləri ilə başlayan sözlərin qarşısında "a" işlənir:\n' +
        'a yard [ə\'ja:d], a uniform [ə\'ju:nıfɔ:m], a university',
      table: [
        ['a (samit səs)',       'an (sait səs)'],
        ['a book',             'an orange'],
        ['a chair',            'an armchair'],
        ['a dog',              'an engineer'],
        ['a university',       'an hour'],
        ['a yard',             'an honest judge'],
        ['a uniform',          'an umbrella'],
        ['a one-way street',   'an SOS'],
      ],
      tip: '"a/an" artiklı qədim ingilis dilində "bir (one)" sözündən yaranıb. Bütün sayıla bilən tək isimlər a/an artiklı ilə işlənməlidir.',
    },

    {
      type: 'lesson',
      title: 'a/an artiklı işlənməyən hallar',
      content:
        'Aşağıdakı isimlərin qarşısında a/an artiklı işlənmir:\n\n' +
        '• Sayıla bilməyən isimlər: advice, bread, news\n' +
        '• Cəm isimlər: books, shoes, men\n' +
        '• Xüsusi isimlər: Baku, England, George\n\n' +
        'Yalnız sayıla bilən tək isimlərin qarşısında yiyəlik əvəzlikləri, "that" işarə əvəzliyi, ' +
        '"no" inkar əvəzliyi gələrsə — artiklsız işlənir.\n\n' +
        'Əgər ismin qarşısında "all" və "both" əvəzlikləri gələrsə, artikl onlardan sonra gəlir:\n' +
        'All the children — Uşaqların hamısı\n' +
        'Both the boys — Oğlanların hər ikisi',
      table: [
        ['Düzgün',           'Yanlış'],
        ['a book',           'a books ✗'],
        ['an advice ✗',      'some advice ✓'],
        ['a Baku ✗',         'Baku ✓'],
        ['my book (artiklsız)', 'a my book ✗'],
      ],
    },

    {
  type: 'mini_check',
  questions: [
    {
      q: '"a" artiklı hansı səslə başlayan sözlərlə işlənir?',
      options: ['Sait səs', 'Həm sait, həm samit', 'Hərfə görə deyil', 'Samit səs'],
      answer: 'Samit səs',
    },
    {
      q: '"an" artiklı hansı səslə başlayan sözlərlə işlənir?',
      options: ['Samit səs', 'Həm sait, həm samit', 'Hərfə görə deyil', 'Sait səs'],
      answer: 'Sait səs',
    },
    {
      q: '"an hour" — niyə "an" işlənir?',
      options: ['h samitdir', 'Xüsusi isimdir', 'Cəm formasıdır', 'h oxunmur, sait səslə başlayır'],
      answer: 'h oxunmur, sait səslə başlayır',
    },
    {
      q: '"a university" — niyə "a" işlənir?',
      options: ['Sait hərflə yazılır', 'Xüsusi isimdir', 'Cəm formasıdır', 'y səsi ilə tələffüz olunur'],
      answer: 'y səsi ilə tələffüz olunur',
    },
    {
      q: 'Sayıla bilməyən isimlərin qarşısında "a/an" işlənirmi?',
      options: ['Bəli', 'Bəzən', 'Yalnız rəsmi nitqdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: 'Cəm isimlərin qarşısında "a/an" işlənirmi?',
      options: ['Bəli', 'Bəzən', 'Yalnız rəsmi nitqdə', 'Xeyr'],
      answer: 'Xeyr',
    },
    {
      q: '"All the children" — artikl "all"dan əvvəl gəlirmi?',
      options: ['Bəli, əvvəl gəlir', 'Hər ikisi olar', 'Artikl işlənmir', 'Xeyr, "all"dan sonra gəlir'],
      answer: 'Xeyr, "all"dan sonra gəlir',
    },
    {
      q: '"a/an" artiklı hansı sözün mənasından yaranıb?',
      options: ['bu (this)', 'o (that)', 'hər (every)', 'bir (one)'],
      answer: 'bir (one)',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı sözün qarşısında "an" işlənir?',
          options: ['a university', 'an book', 'an hour', 'a umbrella'],
          answer: 'an hour',
        },
        {
          q: '"___ uniform" — boşluğa nə gəlir?',
          options: ['an', 'a', 'the', 'heç nə'],
          answer: 'a',
        },
        {
          q: 'Hansı ismin qarşısında a/an işlənə bilməz?',
          options: ['book', 'chair', 'news', 'dog'],
          answer: 'news',
        },
        {
          q: '"Both ___ boys" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ honest judge" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'an',
        },
      ],
    },
  ],
},

// ── Bölmə 2 — a / an: 12 işlənmə halı ───────────────────
{
  type: 'grammar_lesson',
  title: 'Bölmə 2 — a / an: 12 işlənmə halı',
  cards: [

    {
      type: 'lesson',
      title: 'İşlənmə halları 1–6',
      content: 'a/an artiklının əsas işlənmə halları:',
      table: [
        ['#', 'Hal',                                        'Nümunə'],
        ['1', 'İlk dəfə çəkilən sayılan tək isim',         'My brother bought a new house.'],
        ['2', 'Peşa / məşğuliyyət',                        'My brother is a doctor.'],
        ['3', 'Nida: What + sayılan tək isim',             'What a nice day it is!'],
        ['4', 'have ifadələri',                            'to have a rest / a walk / a bath'],
        ['5', 'Təsvir etdikdə',                            'Sadig was a fifteen year old boy.'],
        ['6', 'Ölçü, vaxt, məbləğ, məsafə',               'a quarter of an hour / twice a day'],
      ],
      tip: 'Peşa bildirən sözlər həmişə a/an artiklı ilə işlənir: a doctor, a teacher, a police officer.',
    },

    {
      type: 'lesson',
      title: 'İşlənmə halları 7–12',
      content: 'Davamı:',
      table: [
        ['#', 'Hal',                                              'Nümunə'],
        ['7', 'hundred / thousand / million',                    'a hundred years, a thousand times'],
        ['8', 'Sayılan tək isim predikat funksiyasında',        'It is a book.'],
        ['9', 'such / quite / rather + sayılan tək isim',       'Such a nice girl. Quite a little boy.'],
        ['10','Sabit ifadələr',                                  'a cup of tea, a piece of paper'],
        ['11','There is + sayılan tək isim',                    'There is a car in the yard.'],
        ['12','Seçmə sualda sayılan tək isim',                  'Are you a pupil or a student?'],
      ],
      tip: 'period, population, distance, salary kimi mücərrəd isimlər də bəzən a/an artiklı ilə işlənə bilir.',
    },

    {
      type: 'lesson',
      title: 'have ifadələri — tam siyahı',
      content: 'Aşağıdakı "have" ifadələri həmişə a/an artiklı ilə işlənir:',
      table: [
        ['İfadə',                  'Azərbaycanca'],
        ['to have a rest',         'istirahət etmək'],
        ['to have a talk',         'söhbət etmək'],
        ['to have a bath',         'vanna qəbul etmək'],
        ['to have a shower',       'duş qəbul etmək'],
        ['to have a walk',         'gəzintiyə çıxmaq'],
        ['to have a good time',    'yaxşı vaxt keçirmək'],
        ['to have a baby',         'uşağı olmaq'],
        ['to have a headache',     'başağrısı olmaq'],
        ['to have an accident',    'qəzaya uğramaq'],
      ],
      tip: 'Qeyd: "have" feli yemək adları ilə işlənərsə a/an artiklı işlənmir:\nWe have breakfast at 8. (artiklsız)',
    },

    {
      type: 'lesson',
      title: 'such / quite / very / rather + a/an',
      content:
        'Bu sözlər sayıla bilən tək isimdən əvvəl gəldikdə a/an artiklı işlənir.\n' +
        'Artiklın yeri hər sözlə fərqlidir:',
      table: [
        ['Söz',    'Artiklın yeri',        'Nümunə'],
        ['such',   'such-dan sonra',       'He is such a clever boy.'],
        ['quite',  'quite-dən sonra',      'He is quite a clever boy.'],
        ['rather', 'həm əvvəl, həm sonra', 'He is rather a clever boy. / He is a rather clever boy.'],
        ['very',   'very-dən əvvəl',       'He is a very clever boy.'],
        ['so',     'sifətdən əvvəl',       'She spoke with so slight an accent.'],
        ['too',    'sifətdən əvvəl',       'It is too heavy a parcel for me.'],
        ['as',     'sifətdən əvvəl',       'It is not as easy a thing as you think.'],
        ['how',    'sifətdən əvvəl',       'How small an amount of capital!'],
        ['like',   'like-dan sonra',       'She sings like a singer.'],
      ],
    },

    {
      type: 'lesson',
      title: 'Sifət + isim işlənən xüsusi hallar',
      content:
        'İsimin qarşısında onu təyin edən sifət işlənərsə, artikl sifətdən əvvələ keçir və onunla uyğunlaşır:\n\n' +
        'a book → an interesting book\n' +
        'an answer → a wrong answer\n' +
        'an apple → a red apple\n\n' +
        'İsimin qarşısında onu təyin edən başqa bir isim işlənərsə, artikl o birinci ismə keçir:\n\n' +
        'a door → an iron door\n' +
        'an exam → a physics exam\n' +
        'a book → an English book\n\n' +
        'Sayıla bilməyən isim qarşısında sifət işlənərsə a/an işlənə bilir:\n' +
        'an education → a good education\n' +
        'a noise → a loud noise',
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"My brother is ___ doctor." — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"What ___ nice day!" — boşluğa nə gəlir?',
      options: ['an', 'the', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"to have ___ rest" — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"There is ___ car in the yard." — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"It is ___ book." — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"Such ___ nice girl." — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"a hundred years" — "a" burada nə mənasındadır?',
      options: ['hər hansı bir', 'hər (per)', 'bu', 'bir (one)'],
      answer: 'bir (one)',
    },
    {
      q: '"We have breakfast" — niyə artiklsız işlənir?',
      options: ['Sayılmayan isimdir', 'Cəm isimdir', 'Xüsusi isimdir', 'Yemək adı ilə "have" işlənir'],
      answer: 'Yemək adı ilə "have" işlənir',
    },
    {
      q: '"a book" → "an interesting book" — artikl niyə dəyişdi?',
      options: ['Cəm isimdir', 'Sayılmayan isimdir', 'Xüsusi isimdir', 'Sifət sait səslə başlayır'],
      answer: 'Sifət sait səslə başlayır',
    },
    {
      q: '"twice a day" — "a" burada nə mənasındadır?',
      options: ['bir (one)', 'bu', 'hər hansı bir', 'hər (per)'],
      answer: 'hər (per)',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Are you ___ pupil or ___ student?" — boşluqlara nə gəlir?',
          options: ['the / the', 'a / a', 'an / a', 'a / an'],
          answer: 'a / a',
        },
        {
          q: '"He is ___ very clever boy." — boşluğa nə gəlir?',
          options: ['such', 'quite', 'a', 'the'],
          answer: 'a',
        },
        {
          q: '"to have ___ accident" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'an',
        },
        {
          q: '"___ excellent supper" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'an',
        },
        {
          q: '"a door" → "___ iron door" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'an',
        },
      ],
    },
  ],
},

// ── Bölmə 2 — Dərs 2.3: all/both + the + isim ─────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — all/both + the + isim · sifət + isim · artikl yeri',
  cards: [

    {
      type: 'lesson',
      title: 'many / rather / quite / such + a/an',
      content:
        'Bu sözlər sayılan tək isimlə işlənir:\n\n' +
        'many + a/an + sayılan tək isim\n' +
        'rather + a/an + sayılan tək isim\n' +
        'quite + a/an + sayılan tək isim\n' +
        'such + a/an + sayılan tək isim',
      examples: [
        { word: 'Many a woman would welcome such a chance.', az: 'Çox qadın belə bir fürsəti alqışlayardı.' },
        { word: 'It is rather a pity, I say.',              az: 'Mən deyirəm ki, bu olduqca yazıqdır.' },
      ],
      tip: 'Sira sayı miqdar ifadə edərkən + a/an = "əlavə bir" mənasında işlənir: a second book.',
    },

    {
      type: 'lesson',
      title: 'a/an "per" mənasında',
      content:
        '"a/an" artiklı "bir" mənasında "per" sözü ilə sinonimdir:',
      table: [
        ['a ilə',           'per ilə',          'Məna'],
        ['once a day',      'once per day',      'gündə bir dəfə'],
        ['twice a week',    'twice per week',    'həftədə iki dəfə'],
        ['2 dollars a dozen', '2 dollars per dozen', 'dəst başına 2 dollar'],
        ['40 miles a gallon', '40 miles per gallon', 'qallon başına 40 mil'],
      ],
    },

   {
  type: 'mini_check',
  questions: [
    {
      q: '"many ___ woman" — boşluğa nə gəlir?',
      options: ['the', 'an', 'artikl işlənmir', 'a'],
      answer: 'a',
    },
    {
      q: '"a/an" artiklı "per" ilə sinonimdir?',
      options: ['Xeyr', 'Yalnız rəsmi nitqdə', 'Bəzən', 'Bəli'],
      answer: 'Bəli',
    },
    {
      q: '"once a day" ifadəsindəki "a" hansı söz ilə əvəz edilə bilər?',
      options: ['the', 'one', 'every', 'per'],
      answer: 'per',
    },
    {
      q: '"a second book" — "a" burada nə mənasındadır?',
      options: ['İkinci (sıra)', 'Müəyyən bir', 'Hər hansı', 'Əlavə bir'],
      answer: 'Əlavə bir',
    },
    {
      q: 'Akronimlər hansı artiklı ala bilər?',
      options: ['Həmişə "the"', 'Həmişə "a"', 'Artikl işlənmir', 'a / an (tələffüzə görə)'],
      answer: 'a / an (tələffüzə görə)',
    },
  ],
}
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ MP" — boşluğa nə gəlir? (M — "em" kimi oxunur)',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'an',
        },
        {
          q: '"___ NATO" — boşluğa nə gəlir? (N — "en" kimi oxunur)',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'a',
        },
        {
          q: '"twice ___ week" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'per'],
          answer: 'a',
        },
      ],
    },
  ],
},

// ── Test 1 — Qeyri-müəyyən artikl (Bölmə 1–2) ────────────
[
  { en: '"a" artiklı hansı səslə başlayan sözlərlə işlənir?',          tr: 'Samit səs',            wrong: 'Sait səs'            },
  { en: '"an" artiklı hansı səslə başlayan sözlərlə işlənir?',         tr: 'Sait səs',             wrong: 'Samit səs'           },
  { en: '"an hour" — niyə "an"?',                                      tr: 'h oxunmur',            wrong: 'h samitdir'          },
  { en: '"a university" — niyə "a"?',                                  tr: 'y səsi ilə tələffüz',  wrong: 'Sait hərflə yazılır' },
  { en: 'Cəm isimlərin qarşısında a/an işlənirmi?',                    tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Sayıla bilməyən isimlərin qarşısında a/an işlənirmi?',        tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"My brother is ___ doctor." — boşluq?',                       tr: 'a',                    wrong: 'the'                 },
  { en: '"What ___ nice day!" — boşluq?',                              tr: 'a',                    wrong: 'an'                  },
  { en: '"to have ___ rest" — boşluq?',                                tr: 'a',                    wrong: 'the'                 },
  { en: '"to have ___ accident" — boşluq?',                            tr: 'an',                   wrong: 'a'                   },
  { en: '"We have breakfast" — niyə artiklsız?',                       tr: 'Yemək adı ilə "have"', wrong: 'Sayılmayan isimdir'  },
  { en: '"It is ___ book." — boşluq?',                                 tr: 'a',                    wrong: 'the'                 },
  { en: '"Such ___ nice girl." — boşluq?',                             tr: 'a',                    wrong: 'the'                 },
  { en: '"He is ___ very clever boy." — boşluq?',                      tr: 'a',                    wrong: 'such'                },
  { en: '"twice a day" — "a" nə mənasındadır?',                        tr: 'hər (per)',             wrong: 'bir (one)'           },
  { en: '"a hundred years" — "a" nə mənasındadır?',                    tr: 'bir (one)',             wrong: 'hər hansı bir'       },
  { en: '"There is ___ car in the yard." — boşluq?',                   tr: 'a',                    wrong: 'the'                 },
  { en: '"Are you ___ pupil or ___ student?" — boşluqlar?',            tr: 'a / a',                wrong: 'the / the'           },
  { en: '"a book" → "___ interesting book" — boşluq?',                 tr: 'an',                   wrong: 'a'                   },
  { en: '"a door" → "___ iron door" — boşluq?',                        tr: 'an',                   wrong: 'a'                   },
],


// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 2 — Müəyyənlik artiklı (the)                     │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Müəyyənlik artiklı (the)',
},

// ── Bölmə 3 — the: əsas qayda və tələffüz ────────────────
{
  type: 'grammar_lesson',
  title: 'Bölmə 3 — the: əsas qayda və tələffüz',
  cards: [

    {
      type: 'lesson',
      title: '"the" artiklı — giriş',
      content:
        '"the" müəyyənlik artiklı "this" işarə əvəzliyindən yaranmışdır.\n\n' +
        'İki cür tələffüz edilir:\n' +
        '• Samitlə başlayan sözlərdən əvvəl [ðə]: the book [ðə buk], the pen [ðə pen]\n' +
        '• Saitlə və tələffüz olunmayan "h" ilə başlayan sözlərdən əvvəl [ði:]: the artist, the hour\n\n' +
        'a/an artiklından fərqli olaraq "the" müəyyənlik artiklı həm sayıla bilən tək, həm cəm, ' +
        'həm sayıla bilməyən, həm də xüsusi isimlərin qarşısında işlənə bilir.',
      table: [
        ['[ðə] — samitdən əvvəl', '[ði:] — saitdən əvvəl'],
        ['the book',              'the artist'],
        ['the pen',               'the hour'],
        ['the yard',              'the engineer'],
        ['the house',             'the orange'],
      ],
      tip: 'Müəyyənlik artiklı həm sayıla bilən tək, həm cəm, həm sayıla bilməyən, həm də xüsusi isimlərlə işlənə bilir.',
    },

    {
      type: 'lesson',
      title: '"the" artiklının işlənmə halları — I qrup',
      content: 'Əsas işlənmə halları:',
      table: [
        ['Hal',                                                    'Nümunə'],
        ['İkinci dəfə çəkilən, hər ikiyə məlum olan isim',        'I see a car. The car is red.'],
        ['Sıra sayları ilə',                                       'January is the first month.'],
        ['Sifət isimsizləşdikdə (the + adj = cəm isim)',          'the old (qocalar), the poor (kasiblar)'],
        ['Soyad + s → ailə bildirəndə',                           'The Browns — Braunlar ailəsi'],
        ['Sonu -sh/-ch/-ese ilə bitən millət adları (cəmdə)',     'the English, the French, the Japanese'],
        ['Musiqi alətləri ilə',                                    'play the piano, the violin, the drums'],
        ['Pul vahidləri ilə',                                      'the euro, the peso'],
      ],
    },

    {
      type: 'lesson',
      title: '"the" artiklının işlənmə halları — II qrup',
      content: 'Coğrafi adlar və xüsusi isimlər:',
      table: [
        ['Hal',                                               'Nümunə'],
        ['"of" sözönü ilə işlənən xüsusi isimlər',          'The University of Virginia, The Fourth of July'],
        ['Cəmdə olan xüsusi isimlər',                        'The Blue Ridge Mountains, The Johnsons'],
        ['Birlik və ittifaq bildirən xüsusi isimlər',        'The United Arab Emirates, The Commonwealth'],
        ['Göl qrupları, sıradağlar, ada qrupları',           'the Alps, the Great Lakes, the Canary Islands'],
        ['Okean, dəniz, çay adları',                         'the Atlantic Ocean, the Amazon, the Nile'],
        ['Bəzi ölkə adları',                                  'the Netherlands, the Philippines, the Sudan'],
        ['Dini kitabların adları',                            'the Quran, the Bible'],
        ['Tarixi hadisələr',                                  'the battle of Plassey, the mutiny of 1857'],
      ],
      tip: 'Qeyd: Tək dağ zirvələri (Mount Kenya), küçə adları (Downing Street), qitə adları (Europe, Asia) "the" almaz.',
    },

    {
      type: 'lesson',
      title: '"the" artiklının işlənmə halları — III qrup',
      content: 'Digər xüsusi hallar:',
      table: [
        ['Hal',                                                        'Nümunə'],
        ['Elmi təsnifləndirmə zamanı',                                'The zebra is native to Africa.'],
        ['Simvol və ya rəmz bildirərkən',                             'The Merlion is a symbol of Singapore.'],
        ['Nisbi əvəzliklərdən əvvəl işlənən isimlərlə',              'The paintings (which are) in the gallery'],
        ['Müqayisə dərəcəsi ilə',                                     'I like the bigger roller coaster.'],
        ['on illiklər',                                                'He was born in the 1920s.'],
        ['Bəzi tibb müəssisələri ilə',                                 'the beach, the hospital'],
        ['the + world/sky/sun/moon/earth/environment',                'The environment / The sun'],
        ['Ölçü bildirən söz = "hər" mənasında',                      'You get paid by the hour.'],
        ['one of + the',                                               'One of the famous writers'],
      ],
    },

    { en: '"the" artiklı samitdən əvvəl necə tələffüz olunur?',        tr: '[ðə]',                 wrong: '[ði:]'              },
    { en: '"the" artiklı saitdən əvvəl necə tələffüz olunur?',         tr: '[ði:]',                wrong: '[ðə]'               },
    { en: '"the" artiklı hansı isimlə işlənə bilməz?',                 tr: 'Hamısı ilə işlənə bilir', wrong: 'Cəm isimlər'    },
    { en: '"the old" — bu ifadə nə mənasındadır?',                     tr: 'Qocalar (isimləşmiş)', wrong: 'Qoca (sifət)'      },
    { en: '"The Browns" nə mənasındadır?',                             tr: 'Braunlar ailəsi',       wrong: 'Braun adlı bir nəfər'},
    { en: '"play the piano" — niyə "the" işlənir?',                    tr: 'Musiqi aləti',          wrong: 'İkinci dəfə çəkilir'},
    { en: '"the first month" — "the" niyə işlənir?',                   tr: 'Sıra sayısı',           wrong: 'İkinci dəfə çəkilir'},
    { en: '"the English" — nə mənasındadır?',                          tr: 'İngilislər (millət)',   wrong: 'İngilis (tək)'      },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I see a car. ___ car is red." — boşluğa nə gəlir?',
          options: ['A', 'An', 'The', 'heç nə'],
          answer: 'The',
        },
        {
          q: '"January is ___ first month." — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ French invented champagne." — boşluğa nə gəlir?',
          options: ['A', 'An', 'The', 'heç nə'],
          answer: 'The',
        },
        {
          q: '"play ___ violin" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ Alps" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
      ],
    },
  ],
},

// ── Bölmə 4 — the: geniş işlənmə halları ─────────────────
{
  type: 'grammar_lesson',
  title: 'Bölmə 4 — the: geniş işlənmə halları',
  cards: [

    {
      type: 'lesson',
      title: 'Dərs 4.1 — Unikal + coğrafi adlar',
      content:
        'Dünyada tək olan isimlər "the" ilə işlənir:',
      table: [
        ['Qrup',               'Nümunə'],
        ['Göy cisimləri',      'the sun, the moon, the Earth'],
        ['Okeanlar, dənizlər', 'the Atlantic Ocean, the Caspian Sea'],
        ['Çaylar',             'the Kur, the Araz, the Amazon, the Nile'],
        ['Dağ silsilələri',    'the Alps, the Caucasus, the Andes'],
        ['Ölkə qrupları',     'the United States, the Netherlands'],
        ['Qəzetlər',           'the Times, the Guardian'],
        ['Tarixi abidələr',   'the Eiffel Tower, the White House, the Kremlin'],
        ['Dini kitablar',      'the Quran, the Bible'],
      ],
      tip: 'Qeyd: Tək dağ zirvələri "the" almaz: Mount Kenya, Mount Vesuvius.',
    },

    {
      type: 'lesson',
      title: 'Dərs 4.2 — Üstünlük + digər hallar',
      content: 'Üstünlük dərəcəsi və digər xüsusi işlənmə halları:',
      table: [
        ['Hal',                              'Nümunə'],
        ['Superlative',                      'the best, the most interesting'],
        ['Sıra sayları',                     'the first, the second'],
        ['all/both + the',                   'All the students / Both the boys'],
        ['Musiqi alətləri',                  'play the piano, play the guitar'],
        ['Millətlər (-sh/-ch/-ese)',          'the English, the French, the Chinese'],
        ['Cümlə daxrinda müəyyənlik',        'the house at the end of the street'],
        ['the same / wrong / right / only',  'the same book / the only child (ailəcə tək)'],
        ['the very (elə həmin)',             'That is the very book I needed.'],
      ],
      tip: 'Qeyd: "an only child" — ailənin tək övladı mənasında işlənər.',
    },

    { en: '"the sun" — niyə "the" işlənir?',                           tr: 'Dünyada tək olan',    wrong: 'İkinci dəfə çəkilir' },
    { en: '"the Times" — niyə "the" işlənir?',                         tr: 'Qəzet adı',           wrong: 'Coğrafi ad'          },
    { en: '"the best" — niyə "the" işlənir?',                          tr: 'Superlative dərəcəsi', wrong: 'İkinci dəfə çəkilir'},
    { en: '"the Eiffel Tower" — niyə "the"?',                          tr: 'Dünyada tək yer',     wrong: 'Millət adı'          },
    { en: '"Mount Kenya" — "the" alırmı?',                             tr: 'Xeyr',                wrong: 'Bəli'               },
    { en: '"the Nile" — niyə "the"?',                                  tr: 'Çay adı',             wrong: 'Ölkə adı'           },
    { en: '"the same book" — "the" hansı sözlə işlənir?',              tr: 'same',                wrong: 'book'               },
    { en: '"the Caspian Sea" — niyə "the"?',                           tr: 'Dəniz adı',           wrong: 'Ölkə adı'           },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ Alps" — boşluq?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ Mount Vesuvius" — boşluq?',
          options: ['a', 'the', 'heç nə', 'an'],
          answer: 'heç nə',
        },
        {
          q: '"___ Times" (qəzet) — boşluq?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ Quran" — boşluq?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"___ United States" — boşluq?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
      ],
    },
  ],
},

// ── Test 2 — Müəyyən artikl + artiklsız (Bölmə 3–5) ──────
[
  { en: '"the" artiklı samitdən əvvəl necə tələffüz olunur?',          tr: '[ðə]',                 wrong: '[ði:]'               },
  { en: '"the" artiklı saitdən əvvəl necə tələffüz olunur?',           tr: '[ði:]',                wrong: '[ðə]'                },
  { en: '"I see a car. ___ car is red." — boşluq?',                    tr: 'The',                  wrong: 'A'                   },
  { en: '"play ___ piano" — boşluq?',                                  tr: 'the',                  wrong: 'a'                   },
  { en: '"___ Alps" — boşluq?',                                        tr: 'the',                  wrong: 'heç nə'              },
  { en: '"___ Mount Vesuvius" — boşluq?',                              tr: 'heç nə',               wrong: 'the'                 },
  { en: '"___ English" (millət) — boşluq?',                            tr: 'The',                  wrong: 'An'                  },
  { en: '"___ best student" — boşluq?',                                tr: 'the',                  wrong: 'a'                   },
  { en: '"___ same book" — boşluq?',                                   tr: 'the',                  wrong: 'a'                   },
  { en: '"___ Quran" — boşluq?',                                       tr: 'the',                  wrong: 'a'                   },
  { en: '"___ United States" — boşluq?',                               tr: 'the',                  wrong: 'heç nə'              },
  { en: '"Go to ___ school" (məktəbə getmək — əsas məna) — boşluq?',  tr: 'heç nə (artiklsız)',   wrong: 'the'                 },
  { en: '"go to ___ cinema" (binadan söhbət) — boşluq?',               tr: 'the',                  wrong: 'heç nə'              },
  { en: '"by ___  car" — boşluq?',                                     tr: 'heç nə (artiklsız)',   wrong: 'a'                   },
  { en: '"at ___ home" — boşluq?',                                     tr: 'heç nə (artiklsız)',   wrong: 'the'                 },
],


// ┌─────────────────────────────────────────────────────────┐
// │  BÖLMƏ 5 — Artiklsız işlənmə halları                   │
// └─────────────────────────────────────────────────────────┘

      {
      type: 'section_divider',
      title: 'Artiklsız işlənmə halları',
},
{
  type: 'grammar_lesson',
  title: 'Bölmə 5 — Artiklsız işlənmə halları (Zero Article)',
  cards: [

    {
      type: 'lesson',
      title: 'Dərs 5.1 — Artikl işlənməyən hallar',
      content:
        'Sıfır artikl (zero article) — bəzi nitq hissələri özlərindən sonra artikl işlənməsinə icazə vermir:',
      table: [
        ['Hal',                                        'Nümunə'],
        ['Yiyəlik əvəzliklərindən sonra',             'my bag, its tail, their house'],
        ['Yiyəlik halında olan isim sonra (\'s)',     'Tom\'s pencil, the pupils\' names'],
        ['İşarə əvəzliklərindən sonra',               'this table, that girl, these books'],
        ['"no" inkar əvəzliyindən sonra',             'no child, no children'],
        ['Şirkət adları',                             'Samsung, Sony, Oxford University Press'],
        ['Xüsusi isimlər (şəxs, şəhər)',             'Paris, Sue, Baku'],
        ['Qitə adları',                               'Europe, Asia, Africa, Australia'],
        ['Tək ölkə adları',                           'Turkey, Japan, Azerbaijan'],
        ['İdman adları',                              'basketball, badminton, chess'],
        ['Elm və fənn adları',                        'maths, geography, physics'],
        ['Həftənin günləri və aylar',                 'Friday, May, January'],
        ['Rənglər',                                   'blue, white, red'],
        ['Universitet adları (şəxs adı ilə)',         'Cambridge University, Robert College'],
        ['Kimyəvi elementlər',                        'CO₂, H₂O'],
      ],
      tip: 'Qeyd: THE North Atlantic Treaty Organization, THE BBC, THE UNESCO — bu kimi qısaltmalar "the" alır.',
    },

    {
      type: 'lesson',
      title: 'Dərs 5.2 — Sabit ifadələr artiklsız',
      content: 'Aşağıdakı sabit ifadələrdə artikl işlənmir:',
      table: [
        ['İfadə',                   'Azərbaycanca'],
        ['at home / at work',       'evdə / işdə'],
        ['at school / at university','məktəbdə / universitetdə (əsas məna)'],
        ['at hospital / in prison', 'xəstəxanada / həbsxanada (əsas məna)'],
        ['go to bed',               'yatmağa getmək'],
        ['go to church',            'kilsəyə getmək (ibadət)'],
        ['by car / by bus / by plane','maşınla / avtobusla / təyyarə ilə'],
        ['on foot',                 'piyada'],
        ['at night / by day',       'gecə / gündüz'],
        ['at dawn / at sunrise',    'şəfəqdə / günəş doğanda'],
        ['from time to time',       'vaxtaşırı'],
        ['step by step',            'addım-addım'],
        ['in fact / in brief',      'əslində / qısaca'],
        ['at once',                 'dərhal'],
        ['listen to music',         'musiqi dinləmək (ümumi)'],
        ['play basketball/chess',   'basketbol/şahmat oynamaq'],
        ['have breakfast/lunch/dinner', 'səhər/nahar/şam yeməyi yemək'],
      ],
      tip: 'Qeyd: go to THE cinema (bina), listen to THE beautiful music (konkret musiqi) — burada artikl işlənir.',
    },

    { en: '"my bag" — niyə artiklsız?',                                tr: 'Yiyəlik əvəzliyindən sonra', wrong: 'Sayılmayan isimdir'},
    { en: '"this table" — niyə artiklsız?',                            tr: 'İşarə əvəzliyindən sonra', wrong: 'Cəm isimdir'       },
    { en: '"no child" — niyə artiklsız?',                              tr: '"no" inkar əvəzliyindən sonra', wrong: 'Xüsusi isimdir'},
    { en: '"Europe" — artikl alırmı?',                                 tr: 'Xeyr (qitə adı)',         wrong: 'Bəli, "the"'        },
    { en: '"play basketball" — artikl işlənirmi?',                     tr: 'Xeyr (idman adı)',        wrong: 'Bəli, "the"'        },
    { en: '"go to school" (dərs üçün) — artikl işlənirmi?',           tr: 'Xeyr (əsas məna)',        wrong: 'Bəli, "the"'        },
    { en: '"go to the cinema" — niyə "the" işlənir?',                  tr: 'Binadan söhbət gedir',    wrong: 'İkinci dəfə çəkilir' },
    { en: '"by car" — artikl işlənirmi?',                              tr: 'Xeyr',                    wrong: 'Bəli, "a"'          },
    { en: '"have breakfast" — artikl işlənirmi?',                      tr: 'Xeyr',                    wrong: 'Bəli, "a"'          },
    { en: '"Samsung" — artikl alırmı?',                                tr: 'Xeyr (şirkət adı)',       wrong: 'Bəli, "the"'        },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ Friday" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
        {
          q: '"___ maths" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
        {
          q: '"go to ___ bed" — boşluğa nə gəlir?',
          options: ['a', 'the', 'heç nə', 'an'],
          answer: 'heç nə',
        },
        {
          q: '"___ Tom\'s pencil" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
        {
          q: '"play ___ chess" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
      ],
    },
  ],
},

{
      type: 'section_divider',
      title: 'ARTİCLE - ÜMUMİ İMTAHAN',
},
      
// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Artikl tam test · 30+ sual               │
// └─────────────────────────────────────────────────────────┘
[
  // a / an seçimi
  { en: '"___ hour" — boşluq?',                                        tr: 'an',                   wrong: 'a'                   },
  { en: '"___ university" — boşluq?',                                  tr: 'a',                    wrong: 'an'                  },
  { en: '"___ honest judge" — boşluq?',                                tr: 'an',                   wrong: 'a'                   },
  { en: '"___ uniform" — boşluq?',                                     tr: 'a',                    wrong: 'an'                  },
  { en: '"___ MP" (em-pi) — boşluq?',                                  tr: 'an',                   wrong: 'a'                   },

  // İşlənmə halları
  { en: '"My brother is ___ doctor." — boşluq?',                       tr: 'a',                    wrong: 'the'                 },
  { en: '"What ___ nice day!" — boşluq?',                              tr: 'a',                    wrong: 'the'                 },
  { en: '"to have ___ shower" — boşluq?',                              tr: 'a',                    wrong: 'the'                 },
  { en: '"It is ___ book." — boşluq?',                                 tr: 'a',                    wrong: 'the'                 },
  { en: '"Such ___ nice girl." — boşluq?',                             tr: 'a',                    wrong: 'the'                 },
  { en: '"There is ___ car." — boşluq?',                               tr: 'a',                    wrong: 'the'                 },
  { en: '"Are you ___ pupil or ___ student?" — boşluqlar?',            tr: 'a / a',                wrong: 'the / the'           },
  { en: '"twice ___ day" — boşluq?',                                   tr: 'a',                    wrong: 'the'                 },
  { en: '"___ hundred years" — boşluq?',                               tr: 'a',                    wrong: 'the'                 },
  { en: '"We have breakfast" — niyə artiklsız?',                       tr: 'Yemək adı ilə "have"', wrong: 'Sayılmayan isimdir'  },

  // the — işlənmə halları
  { en: '"I see a car. ___ car is red." — boşluq?',                    tr: 'The',                  wrong: 'A'                   },
  { en: '"January is ___ first month." — boşluq?',                     tr: 'the',                  wrong: 'a'                   },
  { en: '"play ___ piano" — boşluq?',                                  tr: 'the',                  wrong: 'a'                   },
  { en: '"___ French" (millət) — boşluq?',                             tr: 'The',                  wrong: 'A'                   },
  { en: '"___ Alps" — boşluq?',                                        tr: 'the',                  wrong: 'heç nə'              },
  { en: '"___ Nile" — boşluq?',                                        tr: 'the',                  wrong: 'heç nə'              },
  { en: '"___ Bible" — boşluq?',                                       tr: 'the',                  wrong: 'heç nə'              },
  { en: '"___ best student" — boşluq?',                                tr: 'the',                  wrong: 'a'                   },
  { en: '"___ same book" — boşluq?',                                   tr: 'the',                  wrong: 'a'                   },
  { en: '"___ Browns" (ailə) — boşluq?',                               tr: 'The',                  wrong: 'A'                   },

  // Sabit ifadələr + artiklsız
  { en: '"___ Europe" — boşluq?',                                      tr: 'heç nə',               wrong: 'the'                 },
  { en: '"___ Mount Kenya" — boşluq?',                                  tr: 'heç nə',               wrong: 'the'                 },
  { en: '"go to ___ bed" — boşluq?',                                   tr: 'heç nə',               wrong: 'the'                 },
  { en: '"by ___ car" — boşluq?',                                      tr: 'heç nə',               wrong: 'a'                   },
  { en: '"play ___ basketball" — boşluq?',                             tr: 'heç nə',               wrong: 'the'                 },
  { en: '"at ___ home" — boşluq?',                                     tr: 'heç nə',               wrong: 'the'                 },
  { en: '"go to ___ cinema" (bina) — boşluq?',                         tr: 'the',                  wrong: 'heç nə'              },
  { en: '"___ my bag" — "my"dən əvvəl artikl işlənirmi?',              tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"___ this table" — "this"dən əvvəl artikl işlənirmi?',        tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"___ Samsung" — artikl alırmı?',                              tr: 'Xeyr',                  wrong: 'Bəli, "the"'         },      
      ],
  ],
};


// ── 9. QUESTIONS (SUAL CÜMLƏLƏRİ) ──────────────────────────
const QUESTIONS_LEVEL = {
  id: 'questions',
  name: 'QUESTIONS — SUALLAR',
  icon: '<i class="ti ti-help-circle"></i>',
  color: '#7DD3FC',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  SUAL CÜMLƏLƏRİ — Tam bölüm                           ║
// ══════════════════════════════════════════════════════════

      {
      type: 'section_divider',
      title: 'Ümumi suallar / Xüsusi suallar',
},

// ┌─────────────────────────────────────────────────────────┐
// │  BÖLMƏ 1 — Ümumi suallar (Yes/No) + Xüsusi suallar    │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 1.1 — Ümumi suallar (Yes/No) ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Ümumi suallar (Yes/No questions)',
  cards: [

    {
      type: 'lesson',
      title: 'Ümumi suallar nədir?',
      content:
        'Bütöv cümləyə verilən suala ümumi sual deyilir.\n\n' +
        'Ümumi suallar qısa təsdiq və qısa inkar cavab tələb edir:\n' +
        'Yes, I do. / No, I don\'t.\n\n' +
        'Düzəltmə qaydası:\n' +
        '• Cümlədə am / is / are / was / were / shall / will / can / may / must / have got / has got varsa — ' +
        'həmin köməkçi fel mübtədadan əvvələ keçir.\n' +
        '• Bunlar yoxdursa — zamana uyğun do / does / did mübtədadan əvvələ əlavə edilir.\n\n' +
        'Cümlədə iki və ya üç köməkçi fel olduqda yalnız birinci köməkçi fel mübtədadan əvvələ keçir.',
      table: [
        ['Nəqli cümlə',                                  'Ümumi sual'],
        ['I am a teacher.',                              'Am I a teacher?'],
        ['I go to school.',                              'Do I go to school?'],
        ['He speaks English.',                           'Does he speak English?'],
        ['She went home.',                               'Did she go home?'],
        ['A lot of houses will be built next year.',     'Will a lot of houses be built next year?'],
      ],
      tip: 'Qısa cavab: Yes, you are. / No, you are not.\nYes, I do. / No, I don\'t.\nYes, he does. / No, he doesn\'t.',
    },

    { en: 'Ümumi sual hansı cavab tələb edir?',                        tr: 'Yes / No',             wrong: 'Tam cümlə'           },
    { en: '"I am a teacher." → ümumi sual?',                           tr: 'Am I a teacher?',      wrong: 'Do I am a teacher?'  },
    { en: '"I go to school." → ümumi sual?',                           tr: 'Do I go to school?',   wrong: 'Am I go to school?'  },
    { en: '"He speaks English." → ümumi sual?',                        tr: 'Does he speak English?', wrong: 'Do he speak English?' },
    { en: '"She went home." → ümumi sual?',                            tr: 'Did she go home?',     wrong: 'Does she go home?'   },
    { en: 'İki köməkçi fel olduqda hansı əvvələ keçir?',               tr: 'Birinci köməkçi fel',  wrong: 'İkinci köməkçi fel'  },
    { en: '"Yes, he does." — bu qısa cavabın mənfi forması?',          tr: 'No, he doesn\'t.',     wrong: 'No, he don\'t.'      },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She can swim." → ümumi sual?',
          options: ['Does she can swim?', 'Can she swim?', 'Is she swim?', 'Do she swim?'],
          answer: 'Can she swim?',
        },
        {
          q: '"They were at home." → ümumi sual?',
          options: ['Did they were at home?', 'Do they were at home?', 'Were they at home?', 'Are they at home?'],
          answer: 'Were they at home?',
        },
        {
          q: '"He plays football." → qısa inkar cavab?',
          options: ['No, he don\'t.', 'No, he doesn\'t.', 'No, he didn\'t.', 'No, he isn\'t.'],
          answer: 'No, he doesn\'t.',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Xüsusi suallar (Wh/How) ──────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Xüsusi suallar (Wh/How questions)',
  cards: [

    {
      type: 'lesson',
      title: 'Xüsusi suallar nədir?',
      content:
        'Cümlənin ayrı-ayrı üzvlərinə verilən suallara xüsusi suallar deyilir.\n\n' +
        'Sual əvəzlikləri: who, whom, whose, which, what\n' +
        'Sual zərfləri: where, when, why, how\n' +
        'Mürəkkəb sual sözləri: how many/much, how often, how long, how old, how far, what kind of, what time\n\n' +
        'Ümumi söz sırası (mübtədadan başqa üzvlərə sual verərkən):\n' +
        'Wh + köməkçi fel + mübtəda + əsas fel + digər üzvlər',
      table: [
        ['Sual sözü',     'Nə soruşur'],
        ['who',           'canlı mübtəda'],
        ['whom',          'canlı tamamlıq'],
        ['whose',         'yiyəlik — kimin'],
        ['what',          'cansız mübtəda / tamamlıq / xəbər'],
        ['which',         'seçim — hansı'],
        ['where',         'yer zərfi'],
        ['when',          'zaman zərfi'],
        ['why',           'səbəb zərfliyi'],
        ['how',           'tərzi-keyfiyyət zərfi'],
      ],
    },

    {
      type: 'lesson',
      title: 'Mübtədaya sual — söz sırası dəyişmir',
      content:
        '"Who?" ilə canlı mübtədaya sual veririk.\n' +
        '"What?" ilə cansız mübtədaya sual veririk.\n\n' +
        'Mübtədaya sual verərkən söz sırası dəyişmir — mübtədanı götürüb yerinə sual əvəzliyini qoyuruq.\n' +
        'Köməkçi do/does/did işlənmir.\n' +
        'Cümlə Simple Present-də olarsa felə -s/-es əlavə edilir.',
      table: [
        ['Cümlə',                        'Sual'],
        ['I go to school.',              'Who goes to school?'],
        ['A tragic event took place.',   'What event took place?'],
        ['It makes me tell the lie.',    'What makes you tell the lie?'],
        ['I don\'t go to school.',       'Who doesn\'t go to school?'],
      ],
      tip: 'Mübtədanın təyininə sual verərkən də söz sırası dəyişmir, köməkçi fel işlənmir.',
    },

    {
      type: 'lesson',
      title: 'Digər üzvlərə sual — söz sırası dəyişir',
      content:
        'Mübtədadan başqa bütün üzvlərə sual verərkən söz sırası dəyişir:\n\n' +
        'Wh + köməkçi fel + mübtəda + əsas fel + digər üzvlər\n\n' +
        'Canlı tamamlığa "whom" ilə və "who" ilə sual vermək olar.\n' +
        'Fərq: "whom" ilə sözönü cümlənin əvvəlinə keçir, "who" ilə sonda qalır.',
      table: [
        ['Cümlə',                        'Whom ilə sual',                 'Who ilə sual'],
        ['I give a pen to my sister.',   'To whom do I give a pen?',      'Who do I give a pen to?'],
        ['I give a pen to my sister.',   'Whom do I give a pen to?',      'Who do I give a pen to?'],
      ],
      examples: [
        { word: 'I live in Baku.',           az: 'Where do I live?' },
        { word: 'She went home yesterday.',  az: 'When did she go home?' },
        { word: 'I can speak English well.', az: 'How can you speak English?' },
      ],
    },

    { en: 'Mübtədaya sual verərkən söz sırası dəyişirmi?',             tr: 'Xeyr, dəyişmir',       wrong: 'Bəli, dəyişir'       },
    { en: '"Who goes to school?" — bu hansı üzvə sualıdır?',           tr: 'Mübtəda',              wrong: 'Tamamlıq'            },
    { en: 'Mübtədaya sual verərkən do/does/did işlənirmi?',            tr: 'Xeyr',                 wrong: 'Bəli'                },
    { en: '"To whom do I give a pen?" — sözönü haradadır?',            tr: 'whom-dan əvvəl',        wrong: 'Cümlənin sonunda'    },
    { en: '"Who do I give a pen to?" — sözönü haradadır?',             tr: 'Cümlənin sonunda',      wrong: 'whom-dan əvvəl'      },
    { en: 'Xüsusi sual söz sırası (digər üzvlər)?',                    tr: 'Wh + köməkçi + mübtəda + fel', wrong: 'Köməkçi + mübtəda + Wh + fel' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Ann teaches you English." → mübtədaya sual?',
          options: ['Who do teach English?', 'Who teaches you English?', 'Who you teach English?', 'Whom teaches English?'],
          answer: 'Who teaches you English?',
        },
        {
          q: '"I give a pen to my sister." → canlı tamamlığa "whom" ilə sual?',
          options: ['Who do I give a pen?', 'Whom I give a pen to?', 'To whom do I give a pen?', 'Whom gives a pen?'],
          answer: 'To whom do I give a pen?',
        },
        {
          q: '"She went home." → zaman zərfinə sual?',
          options: ['Where did she go?', 'When did she go home?', 'Why she went home?', 'How did she go?'],
          answer: 'When did she go home?',
        },
      ],
    },
  ],
},

// ── Dərs 1.3 — Who / Whom / Whose fərqi ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.3 — Who / Whom / Whose fərqi',
  cards: [

    {
      type: 'lesson',
      title: 'Who / Whom / Whose',
      content:
        '"Who" — canlı mübtədaya sual verir. Söz sırası dəyişmir.\n\n' +
        '"Whom" — canlı tamamlığa sual verir. Söz sırası dəyişir.\n' +
        'Sözönlü tamamlıqda sözönü whom-dan əvvələ keçir.\n\n' +
        '"Whose" — yiyəlik halında olan isim və yiyəlik əvəzliyinə sual verir.\n' +
        '• Mübtədanın təyininə sual verərkən — söz sırası dəyişmir\n' +
        '• Tamamlığın təyininə sual verərkən — söz sırası dəyişir',
      table: [
        ['Sual',   'Funksiya',      'Söz sırası', 'Nümunə'],
        ['Who',    'Mübtəda',       'Dəyişmir',   'Who goes to school?'],
        ['Whom',   'Tamamlıq',      'Dəyişir',    'To whom do I give a pen?'],
        ['Whose',  'Yiyəlik (təyin)','Mübtədada dəyişmir / tamamlıqda dəyişir', 'Whose sister is a doctor?'],
      ],
      examples: [
        { word: 'My sister is a doctor.',        az: 'Whose sister is a doctor? (söz sırası dəyişmir)' },
        { word: 'I give my pen to my sister.',   az: 'Whose sister do I give a pen? (söz sırası dəyişir)' },
      ],
    },

    { en: '"Who" hansı üzvə sual verir?',                              tr: 'Canlı mübtəda',        wrong: 'Canlı tamamlıq'      },
    { en: '"Whom" hansı üzvə sual verir?',                             tr: 'Canlı tamamlıq',       wrong: 'Mübtəda'             },
    { en: '"Whose" nəyə sual verir?',                                  tr: 'Yiyəlik — kimin',      wrong: 'Yer zərfi'           },
    { en: '"Whose sister is a doctor?" — söz sırası dəyişibmi?',       tr: 'Xeyr (mübtədanın təyini)', wrong: 'Bəli'           },
    { en: '"To whom do I give a pen?" — sözönü haradadır?',            tr: 'whom-dan əvvəl',        wrong: 'Cümlənin sonunda'   },
    { en: '"Who do I give a pen to?" — "who" hansı funksiyadır?',      tr: 'Tamamlıq',             wrong: 'Mübtəda'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"My sister is a doctor." → "whose" ilə sual?',
          options: ['Whose is your sister a doctor?', 'Whose sister is a doctor?', 'Whom sister is a doctor?', 'Who sister is doctor?'],
          answer: 'Whose sister is a doctor?',
        },
        {
          q: '"I spoke to him." → "whom" ilə sual?',
          options: ['Who did you speak?', 'Whom did you speak to?', 'To whom did you speak?', 'Whose did you speak?'],
          answer: 'To whom did you speak?',
        },
      ],
    },
  ],
},

// ── Dərs 1.4 — What / Which fərqi ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.4 — What / Which fərqi',
  cards: [

    {
      type: 'lesson',
      title: 'What vs Which',
      content:
        '"What" — seçim qoyulmur, ümumi mənada sual verilir.\n' +
        '"Which" — seçim qoyulur; 2 və ya 3 əşya arasında "or" bağlayıcısı ilə.\n\n' +
        '"Which" ilə sıra sayına da sual vermək olar.\n' +
        '"Which" ilə səciyyələndirici təyinə sual veririk.',
      table: [
        ['What',                                          'Which'],
        ['Ümumi sual — seçim yoxdur',                    'Seçim var — 2-3 əşya arasında'],
        ['What is the largest river in Azerbaijan?',      'Which is larger: the Kur or the Araz?'],
        ['What book did you read?',                      'Which boy is your brother? (səciyyələndirici)'],
      ],
      examples: [
        { word: 'What is the largest river in Azerbaijan?',          az: 'Azərbaycanda ən böyük çay hansıdır?' },
        { word: 'Which is the largest river: the Kur or the Araz?', az: 'Hansı daha böyükdür: Kür, yoxsa Araz?' },
        { word: 'The boy standing at the door is my brother.',       az: 'Which boy is your brother?' },
      ],
      tip: '"What" ilə "hansı" mənasında sual verərkən seçim qoyulmur. "Which" ilə seçim "or" ilə qoyulur.',
    },

    { en: '"What" ilə sual verərkən seçim qoyulurmu?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"Which" ilə sual verərkən seçim qoyulurmu?',              tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"Which" ilə seçim hansı bağlayıcı ilə qoyulur?',          tr: 'or',                    wrong: 'and'                 },
    { en: '"Which" ilə hansı növ təyinə sual veririk?',              tr: 'Səciyyələndirici təyin', wrong: 'Təsviri təyin'       },
    { en: '"What" ilə hansı növ təyinə sual veririk?',               tr: 'Prenozativ (növ) təyin', wrong: 'Səciyyələndirici'   },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"The Kur or the Araz?" — seçimli sual üçün hansı sual sözü işlənir?',
          options: ['What', 'Who', 'Which', 'Whose'],
          answer: 'Which',
        },
        {
          q: '"What is your job?" — bu cümlə nəyi soruşur?',
          options: ['Adını', 'Peşəsini', 'Yaşını', 'Ünvanını'],
          answer: 'Peşəsini',
        },
      ],
    },
  ],
},

// ── Dərs 1.5 — What ilə xəbərə, mübtədaya, tamamlığa sual
{
  type: 'grammar_lesson',
  title: 'Dərs 1.5 — What ilə xəbərə, mübtədaya, tamamlığa sual',
  cards: [

    {
      type: 'lesson',
      title: 'What ilə xəbərə sual',
      content:
        '"What" ilə xəbərə sual verərkən söz sırası dəyişir:\n' +
        'What + köməkçi fel + mübtəda + əsas "do"\n\n' +
        'Əsas "do" dəyişmir — yalnız davamedici zamanda "doing", bitmiş zamanda "done" ola bilir.',
      examples: [
        { word: 'I was reading a book.',   az: 'What was I doing?' },
        { word: 'She has done the work.',  az: 'What has she done?' },
      ],
      table: [
        ['What ilə soruşulan mövzular',    'Nümunə'],
        ['Hava',                           'What is the weather like today?'],
        ['Gün',                            'What day is it today?'],
        ['Tarix',                          'What date is it today?'],
        ['Fəsil',                          'What season is it now?'],
        ['Ölçü',                           'What size is your shirt?'],
        ['Rəng',                           'What colour is your skirt?'],
        ['Peşə',                           'What are you? / What do you do?'],
      ],
      tip: '"What are you?" — peşəni soruşur.\n"Who are you?" — adı / kimliyini soruşur.',
    },

    { en: '"What was I doing?" — bu hansı üzvə sualıdır?',            tr: 'Xəbər',                wrong: 'Mübtəda'             },
    { en: '"What are you?" — bu nəyi soruşur?',                       tr: 'Peşəni',               wrong: 'Adı'                 },
    { en: '"Who are you?" — bu nəyi soruşur?',                        tr: 'Adı / kimliyini',      wrong: 'Peşəni'              },
    { en: '"What day is it?" — bu nəyi soruşur?',                     tr: 'Günü',                 wrong: 'Tarixi'              },
    { en: '"What colour is your skirt?" — bu nəyi soruşur?',          tr: 'Rəngi',                wrong: 'Ölçünü'             },
    { en: '"I was reading a book." → what ilə xəbərə sual?',          tr: 'What was I doing?',    wrong: 'What was I read?'   },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"What do you do?" — bu cümlə nəyi soruşur?',
          options: ['Adını', 'Yaşını', 'Peşəsini', 'Ünvanını'],
          answer: 'Peşəsini',
        },
        {
          q: '"I give a pen to my sister." → cansız tamamlığa sual?',
          options: ['Who do I give to my sister?', 'What do I give to my sister?', 'Which do I give my sister?', 'Whom do I give?'],
          answer: 'What do I give to my sister?',
        },
        {
          q: '"What size is your shirt?" — bu nəyi soruşur?',
          options: ['Rəngi', 'Ölçünü', 'Növünü', 'Qiymətini'],
          answer: 'Ölçünü',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 ───────────────────────────────────────────
[
  { en: '"I go to school." → do/does/did seç?',                        tr: 'Do',                   wrong: 'Does'                },
  { en: '"She speaks English." → do/does/did seç?',                    tr: 'Does',                 wrong: 'Do'                  },
  { en: '"They went home." → do/does/did seç?',                        tr: 'Did',                  wrong: 'Does'                },
  { en: 'Mübtədaya sual verərkən söz sırası dəyişirmi?',               tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Mübtədaya sual verərkən do/does/did işlənirmi?',              tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Who" hansı üzvə sual verir?',                                tr: 'Canlı mübtəda',        wrong: 'Canlı tamamlıq'      },
  { en: '"Whom" hansı üzvə sual verir?',                               tr: 'Canlı tamamlıq',       wrong: 'Mübtəda'             },
  { en: '"Whose" nəyə sual verir?',                                    tr: 'Yiyəlik — kimin',      wrong: 'Yer zərfi'           },
  { en: '"What" ilə sual verərkən seçim qoyulurmu?',                  tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Which" ilə seçim hansı bağlayıcı ilə qoyulur?',             tr: 'or',                   wrong: 'and'                 },
  { en: '"What are you?" — bu nəyi soruşur?',                         tr: 'Peşəni',               wrong: 'Adı'                 },
  { en: '"Who are you?" — bu nəyi soruşur?',                          tr: 'Adı / kimliyini',      wrong: 'Peşəni'              },
  { en: '"To whom do I give a pen?" — sözönü haradadır?',             tr: 'whom-dan əvvəl',        wrong: 'Cümlənin sonunda'   },
  { en: '"What was I doing?" — bu hansı üzvə sualıdır?',              tr: 'Xəbər',                wrong: 'Mübtəda'             },
],


// ┌─────────────────────────────────────────────────────────┐
// │  BÖLMƏ 2 — How ilə mürəkkəb sual sözləri              │
// └─────────────────────────────────────────────────────────┘

    {
      type: 'section_divider',
      title: 'How ilə mürəkkəb suallar',
},  

// ── Dərs 2.1 — How many/much · How often · How long ──────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — How many/much · How often · How long',
  cards: [

    {
      type: 'lesson',
      title: 'How many / How much',
      content:
        '"How many" — sayılan isimlərlə işlənir → neçə?\n' +
        '"How much" — sayılmayan isimlərlə işlənir → nə qədər?\n\n' +
        'Hər ikisinin söz sırası dəyişir:\n' +
        'How many/much + isim + köməkçi fel + mübtəda + əsas fel?',
      table: [
        ['How many',                     'How much'],
        ['Sayılan isim — neçə',          'Sayılmayan isim — nə qədər'],
        ['How many books do you have?',  'How much water do you drink?'],
        ['How many students are there?', 'How much money does he earn?'],
      ],
    },

    {
      type: 'lesson',
      title: 'How often / How long',
      content:
        '"How often" — neçə dəfə? Əsasən every day/week/month, usually, often, never kimi ' +
        'qeyri-müəyyən zərflərə sual verilir.\n\n' +
        '"How long" — nə qədər müddətdir ki? Davam müddətinə sual verilir.\n' +
        'Davam müddətini zaman zərfindən ayırmaq üçün: zaman zərfinin qarşısında "for" və ya ' +
        '"another" gəlir, ya da xəbər "to last / to continue" ilə ifadə olunur.',
      table: [
        ['Sual sözü',    'Nümunə cümlə',                       'Sual'],
        ['How often',   'I go to school every day.',           'How often do you go to school?'],
        ['How long',    'I want to stay there another week.',  'How long do you want to stay there?'],
        ['How long',    'Our lesson lasts 45 minutes.',        'How long does our lesson last?'],
        ['How long',    'I have known him for 2 years.',       'How long have you known him?'],
      ],
      tip: '"When" ilə indiki bitmiş və keçmiş bitmiş zamanlara sual verilmir. Bu hallarda sual keçmiş qeyri-müəyyən zamanda olur.',
    },

    { en: '"How many" hansı isimlərlə işlənir?',                      tr: 'Sayılan isim',          wrong: 'Sayılmayan isim'     },
    { en: '"How much" hansı isimlərlə işlənir?',                      tr: 'Sayılmayan isim',       wrong: 'Sayılan isim'        },
    { en: '"How often" nəyə sual verir?',                             tr: 'Tezliyə — neçə dəfə',  wrong: 'Müddətə — nə qədər'  },
    { en: '"How long" nəyə sual verir?',                              tr: 'Davam müddətinə',       wrong: 'Tezliyə'             },
    { en: '"Our lesson lasts 45 minutes." → sual?',                   tr: 'How long does our lesson last?', wrong: 'How often does our lesson last?' },
    { en: '"When" ilə indiki bitmiş zamana sual verilirmi?',          tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: 'Davam müddəti zərfinin əvvəlində hansı söz gəlir?',       tr: 'for / another',         wrong: 'since / still'       },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I drink a lot of water every day." → "How often" ilə sual?',
          options: ['How long do you drink water?', 'How often do you drink water?', 'How much do you drink?', 'How many do you drink?'],
          answer: 'How often do you drink water?',
        },
        {
          q: '"I have known him for 2 years." → "How long" ilə sual?',
          options: ['How long do you know him?', 'How long have you known him?', 'How often have you known him?', 'How long you have known him?'],
          answer: 'How long have you known him?',
        },
        {
          q: '"How ___ books do you have?" — boşluq?',
          options: ['much', 'many', 'long', 'often'],
          answer: 'many',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — How old · How far · How tall · How big ───
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — How old · How far · How tall · How big',
  cards: [

    {
      type: 'lesson',
      title: 'How + sifət/zərf — mürəkkəb sual sözləri',
      content:
        '"How" sual əvəzliyi sifət və zərflə yanaşı işlənərək mürəkkəb sual sözləri formalaşdırır.\n\n' +
        'Söz sırası həmişə dəyişir.',
      table: [
        ['Sual sözü',      'Nəyi soruşur',            'Nümunə'],
        ['How old',        'Yaşı',                    'How old are you?'],
        ['How far',        'Məsafəni',                'How far is it from here?'],
        ['How tall',       'Boy / hündürlüyü',        'How tall is he?'],
        ['How big',        'Böyüklüyünü / sahəsini',  'How big is your house?'],
        ['What kind of',   'Növünü — nə cür',         'What kind of music do you like?'],
        ['What time',      'Vaxtı — nə vaxt',         'What time does the train leave?'],
      ],
      tip: '"Why" ilə "for" işlənmir. Əvəzində "What ... for?" ilə səbəb soruşmaq olar. Söz sırası dəyişir.',
    },

    { en: '"How old" nəyi soruşur?',                                  tr: 'Yaşı',                 wrong: 'Hündürlüyü'          },
    { en: '"How far" nəyi soruşur?',                                  tr: 'Məsafəni',             wrong: 'Böyüklüyü'           },
    { en: '"How tall" nəyi soruşur?',                                 tr: 'Boy / hündürlüyü',     wrong: 'Yaşı'                },
    { en: '"How big" nəyi soruşur?',                                  tr: 'Böyüklüyü / sahəsi',   wrong: 'Məsafəni'            },
    { en: '"What kind of" nəyi soruşur?',                             tr: 'Növünü — nə cür',      wrong: 'Vaxtı'               },
    { en: '"What time" nəyi soruşur?',                                tr: 'Vaxtı',                wrong: 'Növünü'              },
    { en: '"Why" ilə "for" işlənirmi?',                               tr: 'Xeyr',                 wrong: 'Bəli'                },
    { en: '"Why" əvəzinə nə ilə sual vermək olar?',                   tr: 'What ... for?',        wrong: 'How come?'           },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"He is 25 years old." → sual?',
          options: ['How long is he?', 'How old is he?', 'How big is he?', 'How tall is he?'],
          answer: 'How old is he?',
        },
        {
          q: '"What kind of music do you like?" — bu nəyi soruşur?',
          options: ['Musiqinin adını', 'Musiqinin növünü', 'Musiqinin müəllifini', 'Musiqinin uzunluğunu'],
          answer: 'Musiqinin növünü',
        },
        {
          q: '"Why do you study English?" — "why"nin ekvivalenti?',
          options: ['How come you study?', 'What do you study for?', 'For what you study?', 'What for you study?'],
          answer: 'What do you study for?',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — Təyin növləri + Which ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — Təyin növləri + Which ilə səciyyələndirici təyin',
  cards: [

    {
      type: 'lesson',
      title: 'İngilis dilində 3 növ təyin',
      content:
        'İngilis dilində əsasən 3 növ təyin var:',
      table: [
        ['Növ',                    'İfadə vasitəsi',          'Artikl',           'Sual'],
        ['Təsviri təyin',          'Sifətlə (isimdən əvvəl)', 'a/an (sayılan tək)', 'what kind of...?'],
        ['Səciyyələndirici təyin', 'Feli sifətlə (əvvəl/sonra)', 'the (həmişə)',  'which?'],
        ['Prenozativ (növ) təyin', 'İsim və ya sifətlə',      'Heç bir artikl',   'what...?'],
      ],
      examples: [
        { word: 'A clever boy (təsviri)',                      az: 'what kind of boy?' },
        { word: 'The boy standing at the door (səciyyələndirici)', az: 'which boy?' },
        { word: 'An English book (prenozativ/növ)',            az: 'what book?' },
      ],
      tip: '"Which" ilə sıra sayına da sual veririk:\nThe first boy is my brother. → Which boy is your brother?',
    },

    { en: 'Təsviri təyinə sual sözü?',                                tr: 'what kind of?',        wrong: 'which?'              },
    { en: 'Səciyyələndirici təyinə sual sözü?',                       tr: 'which?',               wrong: 'what kind of?'       },
    { en: 'Prenozativ (növ) təyinə sual sözü?',                       tr: 'what...?',             wrong: 'which?'              },
    { en: 'Səciyyələndirici təyin olan ismin artiklı?',               tr: 'the (həmişə)',          wrong: 'a/an'               },
    { en: 'Təsviri təyin olan sayılan tək ismin artiklı?',            tr: 'a/an',                 wrong: 'the'                 },
    { en: 'Prenozativ (növ) təyin olan ismin artiklı?',               tr: 'Heç bir artikl',        wrong: 'the'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"The boy standing at the door" — bu hansı növ təyindir?',
          options: ['Təsviri', 'Prenozativ', 'Səciyyələndirici', 'Zərflik'],
          answer: 'Səciyyələndirici',
        },
        {
          q: '"A clever boy" — bu hansı növ təyindir?',
          options: ['Səciyyələndirici', 'Prenozativ', 'Təsviri', 'Yiyəlik'],
          answer: 'Təsviri',
        },
        {
          q: '"An English book" — bu hansı növ təyindir?',
          options: ['Təsviri', 'Səciyyələndirici', 'Prenozativ', 'Zərflik'],
          answer: 'Prenozativ',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 ───────────────────────────────────────────
[
  { en: '"How many" hansı isimlərlə işlənir?',                        tr: 'Sayılan isim',          wrong: 'Sayılmayan isim'     },
  { en: '"How much" hansı isimlərlə işlənir?',                        tr: 'Sayılmayan isim',       wrong: 'Sayılan isim'        },
  { en: '"How often" nəyə sual verir?',                               tr: 'Tezliyə — neçə dəfə',  wrong: 'Müddətə'             },
  { en: '"How long" nəyə sual verir?',                                tr: 'Davam müddətinə',       wrong: 'Tezliyə'             },
  { en: '"How old" nəyi soruşur?',                                    tr: 'Yaşı',                  wrong: 'Hündürlüyü'          },
  { en: '"How far" nəyi soruşur?',                                    tr: 'Məsafəni',              wrong: 'Böyüklüyü'           },
  { en: '"How tall" nəyi soruşur?',                                   tr: 'Boy / hündürlüyü',      wrong: 'Yaşı'                },
  { en: '"What kind of" nəyi soruşur?',                               tr: 'Növünü — nə cür',       wrong: 'Vaxtı'               },
  { en: '"Why" ilə "for" işlənirmi?',                                 tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: 'Səciyyələndirici təyinə sual sözü?',                         tr: 'which?',                wrong: 'what kind of?'       },
  { en: 'Təsviri təyinə sual sözü?',                                  tr: 'what kind of?',         wrong: 'which?'              },
  { en: 'Prenozativ (növ) təyinə sual sözü?',                         tr: 'what...?',              wrong: 'which?'              },
  { en: '"When" ilə indiki bitmiş zamana sual verilirmi?',            tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: 'Davam müddəti zərfinin əvvəlində hansı söz gəlir?',         tr: 'for / another',          wrong: 'since / still'       },
],


// ┌─────────────────────────────────────────────────────────┐
// │  BÖLMƏ 3 — Seçmə suallar + Ayrılan suallar            │
// └─────────────────────────────────────────────────────────┘

{
      type: 'section_divider',
      title: 'Seçmə / Ayrılan suallar',
},
      
// ── Dərs 3.1 — Alternative questions ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Seçmə suallar (Alternative questions)',
  cards: [

    {
      type: 'lesson',
      title: 'Seçmə suallar nədir?',
      content:
        'İki fikirdən birini seçmək üçün işlədilən sual cümləsidir.\n\n' +
        'İki hissədən ibarət olur:\n' +
        '• Birinci hissə — ümumi sual forması\n' +
        '• İkinci hissə — "or" bağlayıcısı + alternativ söz\n\n' +
        '"or" bağlayıcısının sabit yeri yoxdur — hansı sözə əvəzləyici verilərsə, onun yanında qoyulur.\n\n' +
        'Bu tip sual cümlələrinə yes/no cavabı verilmir — tam cavab verilir.',
      table: [
        ['Sual',                              'Cavab'],
        ['Do you go to school or home?',      'I go home. / Home.'],
        ['Is he a teacher or a doctor?',      'He is a doctor. / A doctor.'],
        ['Did she call you or write to you?', 'She wrote to me. / She wrote.'],
      ],
      tip: '"Or" bağlayıcısı birinci hissənin sonunda deyil, əvəzlənən sözün yanında gəlir.',
    },

    { en: 'Seçmə sualın ikinci hissəsi hansı bağlayıcı ilə başlayır?',tr: 'or',                   wrong: 'and'                 },
    { en: 'Seçmə suala yes/no cavabı verilirmi?',                     tr: 'Xeyr',                 wrong: 'Bəli'                },
    { en: '"or" bağlayıcısının sabit yeri varmı?',                    tr: 'Xeyr',                 wrong: 'Bəli'                },
    { en: '"Do you go to school or home?" — cavab?',                  tr: 'I go home.',           wrong: 'Yes, I do.'          },
    { en: 'Seçmə sualın birinci hissəsi hansı sual formasındadır?',   tr: 'Ümumi sual forması',   wrong: 'Xüsusi sual forması' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Is he a teacher or a doctor?" — düzgün cavab hansıdır?',
          options: ['Yes, he is.', 'No, he isn\'t.', 'He is a doctor.', 'He is.'],
          answer: 'He is a doctor.',
        },
        {
          q: 'Seçmə sualda "or" bağlayıcısı haraya qoyulur?',
          options: ['Cümlənin əvvəlinə', 'Birinci hissənin sonuna', 'Əvəzlənən sözün yanına', 'Cümlənin sonuna'],
          answer: 'Əvəzlənən sözün yanına',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — Tag questions ─────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Ayrılan suallar (Tag questions)',
  cards: [

    {
      type: 'lesson',
      title: 'Tag questions nədir?',
      content:
        'Tag questions da iki hissədən ibarətdir:\n' +
        '• Birinci hissə — adi nəqli cümlə\n' +
        '• İkinci hissə — qısa sual (köməkçi fel + şəxs əvəzliyi)\n\n' +
        'Qayda:\n' +
        '• Birinci hissə təsdiq olarsa → ikinci hissə inkar\n' +
        '• Birinci hissə inkar olarsa → ikinci hissə təsdiq\n\n' +
        'Mübtəda mütləq şəxs əvəzliyi ilə əvəzlənməlidir.\n\n' +
        'Birinci şəxs təkdə "am" formasının yerinə "are" yazılır:\n' +
        'I am a teacher, aren\'t I?\n' +
        'I am not a pupil, am I?',
      table: [
        ['Nəqli cümlə',             'Tag sualı'],
        ['He is a teacher,',        'isn\'t he?'],
        ['She can swim,',           'can\'t she?'],
        ['They went home,',         'didn\'t they?'],
        ['You don\'t like it,',     'do you?'],
        ['She can\'t drive,',       'can she?'],
        ['I am a teacher,',         'aren\'t I?'],
      ],
      tip: 'Cavab: Yes, I am. / No, I\'m not. (tam cavab da ola bilər)',
    },

    { en: 'Tag sualının birinci hissəsi təsdiqdirsə, ikinci hissə?', tr: 'İnkar',                 wrong: 'Təsdiq'              },
    { en: 'Tag sualının birinci hissəsi inkardırsa, ikinci hissə?',  tr: 'Təsdiq',                wrong: 'İnkar'               },
    { en: '"I am a teacher, ___ I?" — boşluq?',                     tr: 'aren\'t',               wrong: 'isn\'t'              },
    { en: '"He is a teacher, ___ he?" — boşluq?',                   tr: 'isn\'t',                wrong: 'aren\'t'             },
    { en: '"She can swim, ___ she?" — boşluq?',                     tr: 'can\'t',                wrong: 'isn\'t'              },
    { en: '"They went home, ___ they?" — boşluq?',                  tr: 'didn\'t',               wrong: 'weren\'t'            },
    { en: '"You don\'t like it, ___ you?" — boşluq?',               tr: 'do',                    wrong: 'don\'t'              },
    { en: 'Tag sualında mübtəda nə ilə əvəzlənir?',                 tr: 'Şəxs əvəzliyi',         wrong: 'İsim'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She can\'t drive, ___ she?" — boşluq?',
          options: ['can\'t', 'isn\'t', 'can', 'doesn\'t'],
          answer: 'can',
        },
        {
          q: '"I am a teacher, ___ I?" — birinci şəxs tək üçün düzgün tag?',
          options: ['amn\'t', 'am not', 'isn\'t', 'aren\'t'],
          answer: 'aren\'t',
        },
        {
          q: '"They went home, ___ they?" — boşluq?',
          options: ['weren\'t', 'didn\'t', 'don\'t', 'haven\'t'],
          answer: 'didn\'t',
        },
      ],
    },
  ],
},

// ── Dərs 3.3 — Tag questions: əvəzlik dəyişmələri ────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.3 — Tag questions: əvəzlik dəyişmələri',
  cards: [

    {
      type: 'lesson',
      title: 'Xüsusi əvəzlik dəyişmələri',
      content:
        'Tag suallarında aşağıdakı xüsusi əvəzlik dəyişmələrinə diqqət yetirmək lazımdır:',
      table: [
        ['Birinci hissədəki mübtəda',        'Tag-dakı əvəzlik',  'Nümunə'],
        ['this / that',                      'it',                'This is a book, isn\'t it?'],
        ['these / those',                    'they',              'These are books, aren\'t they?'],
        ['everybody / everyone / someone / somebody / none / nobody', 'they', 'Everybody took the test, didn\'t they?'],
        ['everything / something / nothing', 'it',                'Everything is OK, isn\'t it?'],
        ['I (am)',                           'aren\'t I',         'I am a teacher, aren\'t I?'],
        ['I am not',                         'am I',              'I am not a pupil, am I?'],
      ],
      tip: 'Qısa cavab: Yes, I am. / No, I\'m not.\nYes, he is. / No, he isn\'t.',
    },

    { en: '"This is a book, ___ it?" — boşluq?',                    tr: 'isn\'t',                wrong: 'aren\'t'             },
    { en: '"These are books, ___ they?" — boşluq?',                 tr: 'aren\'t',               wrong: 'isn\'t'              },
    { en: '"Everybody took the test, ___ they?" — boşluq?',         tr: 'didn\'t',               wrong: 'didn\'t he'          },
    { en: '"Everything is OK, ___ it?" — boşluq?',                  tr: 'isn\'t',                wrong: 'aren\'t'             },
    { en: '"Nobody came, ___ they?" — boşluq?',                     tr: 'did',                   wrong: 'didn\'t'             },
    { en: '"this/that" tag sualında hansı əvəzliklə əvəzlənir?',    tr: 'it',                    wrong: 'they'                },
    { en: '"these/those" tag sualında hansı əvəzliklə əvəzlənir?',  tr: 'they',                  wrong: 'it'                  },
    { en: '"everybody" tag sualında hansı əvəzliklə əvəzlənir?',    tr: 'they',                  wrong: 'it'                  },
    { en: '"everything" tag sualında hansı əvəzliklə əvəzlənir?',   tr: 'it',                    wrong: 'they'                },
    { en: '"nothing" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'it',                    wrong: 'they'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"That is your book, ___ ___?" — boşluqlar?',
          options: ['isn\'t it', 'aren\'t it', 'isn\'t that', 'don\'t it'],
          answer: 'isn\'t it',
        },
        {
          q: '"Nobody came, ___ ___?" — boşluqlar?',
          options: ['didn\'t they', 'did they', 'didn\'t he', 'did he'],
          answer: 'did they',
        },
        {
          q: '"Something is wrong, ___ ___?" — boşluqlar?',
          options: ['isn\'t something', 'aren\'t they', 'isn\'t it', 'doesn\'t it'],
          answer: 'isn\'t it',
        },
        {
          q: '"I am not late, ___ I?" — boşluq?',
          options: ['aren\'t', 'am not', 'am', 'isn\'t'],
          answer: 'am',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 ───────────────────────────────────────────
[
  { en: 'Seçmə sualın ikinci hissəsi hansı bağlayıcı ilə başlayır?', tr: 'or',                   wrong: 'and'                 },
  { en: 'Seçmə suala yes/no cavabı verilirmi?',                      tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Do you go to school or home?" — cavab?',                   tr: 'I go home.',           wrong: 'Yes, I do.'          },
  { en: 'Tag sualının birinci hissəsi təsdiqdirsə, ikinci hissə?',   tr: 'İnkar',                wrong: 'Təsdiq'              },
  { en: '"I am a teacher, ___ I?" — boşluq?',                       tr: 'aren\'t',              wrong: 'isn\'t'              },
  { en: '"She can swim, ___ she?" — boşluq?',                       tr: 'can\'t',               wrong: 'isn\'t'              },
  { en: '"this/that" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'it',                   wrong: 'they'                },
  { en: '"these/those" tag sualında hansı əvəzliklə əvəzlənir?',    tr: 'they',                 wrong: 'it'                  },
  { en: '"everybody" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'they',                 wrong: 'it'                  },
  { en: '"everything" tag sualında hansı əvəzliklə əvəzlənir?',     tr: 'it',                   wrong: 'they'                },
  { en: '"Nothing happened, ___ it?" — boşluq?',                    tr: 'did',                  wrong: 'didn\'t'             },
  { en: 'Tag sualında mübtəda nə ilə əvəzlənir?',                   tr: 'Şəxs əvəzliyi',        wrong: 'İsim'                },
],


// ── Test 1 — Ümumi + Xüsusi suallar (Bölmə 1–2) ─────────
[
  { en: '"I go to school." → do/does/did seç?',                       tr: 'Do',                   wrong: 'Does'                },
  { en: '"She speaks English." → do/does/did seç?',                   tr: 'Does',                 wrong: 'Do'                  },
  { en: '"They went home." → do/does/did seç?',                       tr: 'Did',                  wrong: 'Does'                },
  { en: 'Mübtədaya sual verərkən söz sırası dəyişirmi?',              tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Mübtədaya sual verərkən do/does/did işlənirmi?',             tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Who" hansı üzvə sual verir?',                               tr: 'Canlı mübtəda',        wrong: 'Canlı tamamlıq'      },
  { en: '"Whom" hansı üzvə sual verir?',                              tr: 'Canlı tamamlıq',       wrong: 'Mübtəda'             },
  { en: '"Whose" nəyə sual verir?',                                   tr: 'Yiyəlik — kimin',      wrong: 'Yer zərfi'           },
  { en: '"What" ilə sual verərkən seçim qoyulurmu?',                 tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Which" ilə seçim hansı bağlayıcı ilə qoyulur?',            tr: 'or',                   wrong: 'and'                 },
  { en: '"How many" hansı isimlərlə işlənir?',                        tr: 'Sayılan isim',         wrong: 'Sayılmayan isim'     },
  { en: '"How much" hansı isimlərlə işlənir?',                        tr: 'Sayılmayan isim',      wrong: 'Sayılan isim'        },
  { en: '"How often" nəyə sual verir?',                               tr: 'Tezliyə — neçə dəfə', wrong: 'Müddətə'             },
  { en: '"How long" nəyə sual verir?',                                tr: 'Davam müddətinə',      wrong: 'Tezliyə'             },
  { en: '"How old" nəyi soruşur?',                                    tr: 'Yaşı',                 wrong: 'Hündürlüyü'          },
  { en: '"How far" nəyi soruşur?',                                    tr: 'Məsafəni',             wrong: 'Böyüklüyü'           },
  { en: '"Why" ilə "for" işlənirmi?',                                 tr: 'Xeyr',                wrong: 'Bəli'                 },
  { en: 'Səciyyələndirici təyinə sual sözü?',                         tr: 'which?',               wrong: 'what kind of?'       },
  { en: '"When" ilə indiki bitmiş zamana sual verilirmi?',            tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"What are you?" — bu nəyi soruşur?',                         tr: 'Peşəni',               wrong: 'Adı'                 },
  { en: '"Who are you?" — bu nəyi soruşur?',                         tr: 'Adı / kimliyini',      wrong: 'Peşəni'              },
  { en: '"To whom do I give a pen?" — sözönü haradadır?',            tr: 'whom-dan əvvəl',        wrong: 'Cümlənin sonunda'    },
],

// ── Test 2 — Seçmə + Ayrılan suallar (Bölmə 3) ──────────
[
  { en: 'Seçmə sualın ikinci hissəsi hansı bağlayıcı ilə başlayır?', tr: 'or',                   wrong: 'and'                 },
  { en: 'Seçmə suala yes/no cavabı verilirmi?',                      tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"or" bağlayıcısının sabit yeri varmı?',                     tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Do you go to school or home?" — cavab?',                   tr: 'I go home.',           wrong: 'Yes, I do.'          },
  { en: 'Tag sualının birinci hissəsi təsdiqdirsə, ikinci hissə?',   tr: 'İnkar',                wrong: 'Təsdiq'              },
  { en: 'Tag sualının birinci hissəsi inkardırsa, ikinci hissə?',    tr: 'Təsdiq',               wrong: 'İnkar'               },
  { en: '"I am a teacher, ___ I?" — boşluq?',                       tr: 'aren\'t',              wrong: 'isn\'t'              },
  { en: '"She can swim, ___ she?" — boşluq?',                       tr: 'can\'t',               wrong: 'isn\'t'              },
  { en: '"They went home, ___ they?" — boşluq?',                    tr: 'didn\'t',              wrong: 'weren\'t'            },
  { en: '"this/that" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'it',                   wrong: 'they'                },
  { en: '"these/those" tag sualında hansı əvəzliklə əvəzlənir?',    tr: 'they',                 wrong: 'it'                  },
  { en: '"everybody" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'they',                 wrong: 'it'                  },
  { en: '"everything" tag sualında hansı əvəzliklə əvəzlənir?',     tr: 'it',                   wrong: 'they'                },
  { en: '"nothing" tag sualında hansı əvəzliklə əvəzlənir?',        tr: 'it',                   wrong: 'they'                },
  { en: 'Tag sualında mübtəda nə ilə əvəzlənir?',                   tr: 'Şəxs əvəzliyi',        wrong: 'İsim'                },
],

{
      type: 'section_divider',
      title: 'QUESTİONS - ÜMUMİ İMTAHAN',
},
// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Questions tam test · 20 sual             │
// └─────────────────────────────────────────────────────────┘
[
  // Ümumi suallar
  { en: '"He speaks English." → ümumi sual?',                         tr: 'Does he speak English?', wrong: 'Do he speak English?' },
  { en: '"She went home." → ümumi sual?',                             tr: 'Did she go home?',     wrong: 'Does she go home?'   },
  { en: 'İki köməkçi fel olduqda hansı əvvələ keçir?',               tr: 'Birinci köməkçi fel',  wrong: 'İkinci köməkçi fel'  },
  // Xüsusi suallar
  { en: '"Who goes to school?" — bu hansı üzvə sualıdır?',           tr: 'Mübtəda',              wrong: 'Tamamlıq'            },
  { en: 'Mübtədaya sual verərkən do/does/did işlənirmi?',            tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"To whom do I give a pen?" — sözönü haradadır?',            tr: 'whom-dan əvvəl',        wrong: 'Cümlənin sonunda'   },
  { en: '"Who do I give a pen to?" — sözönü haradadır?',             tr: 'Cümlənin sonunda',      wrong: 'whom-dan əvvəl'     },
  { en: '"What are you?" — nəyi soruşur?',                           tr: 'Peşəni',               wrong: 'Adı'                 },
  { en: '"What was I doing?" — hansı üzvə sualıdır?',                tr: 'Xəbər',                wrong: 'Mübtəda'             },
  // How sualları
  { en: '"How many" hansı isimlərlə işlənir?',                       tr: 'Sayılan isim',         wrong: 'Sayılmayan isim'     },
  { en: '"How often" nəyə sual verir?',                              tr: 'Tezliyə — neçə dəfə',  wrong: 'Müddətə'             },
  { en: '"How long" nəyə sual verir?',                               tr: 'Davam müddətinə',       wrong: 'Tezliyə'             },
  { en: '"Why" ilə "for" işlənirmi?',                                tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Which" ilə seçim hansı bağlayıcı ilə qoyulur?',           tr: 'or',                    wrong: 'and'                },
  // Seçmə sual
  { en: 'Seçmə suala yes/no cavabı verilirmi?',                      tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"or" bağlayıcısının sabit yeri varmı?',                     tr: 'Xeyr',                 wrong: 'Bəli'                },
  // Tag suallar
  { en: 'Tag sualının birinci hissəsi təsdiqdirsə, ikinci hissə?',   tr: 'İnkar',                wrong: 'Təsdiq'              },
  { en: '"I am a teacher, ___ I?" — boşluq?',                       tr: 'aren\'t',              wrong: 'isn\'t'              },
  { en: '"this/that" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'it',                   wrong: 'they'                },
  { en: '"everybody" tag sualında hansı əvəzliklə əvəzlənir?',      tr: 'they',                 wrong: 'it'                  },
],

  ],
};
// ── 10. MODAL VERBS ──────────────────────────────────────────
const MODAL_VERBS_LEVEL = {
  id: 'modal_verbs',
  name: 'MODAL VERBS — MODAL FELLƏR',
  icon: '<i class="ti ti-key"></i>',
  color: '#86EFAC',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  MODAL FELLƏR — Tam bölüm                             ║
// ══════════════════════════════════════════════════════════

      {
      type: 'section_divider',
      title: 'Can / Could / To be able to',
},

// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 1 — Can / May / Must                             │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 1 — Can / Could / To be able to ────────────────

// ── Dərs 1.1 — Can / Could ───────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Can / Could',
  cards: [

    {
      type: 'lesson',
      title: 'Modal fellərin ümumi xüsusiyyətləri',
      content:
        'Modal fellərin 5 əsas xüsusiyyəti var:\n\n' +
        '1. Modal feldən sonra məsdər "to" hissəciksiz işlənir (yalnız "ought to" istisna).\n' +
        '2. III şəxs təkdə "-s" sonluğu qəbul etmir.\n' +
        '3. Sual cümləsi: modal fel mübtədadan əvvələ keçir.\n' +
        '4. Modal fellərin şəxssiz formaları yoxdur.\n' +
        '5. İnkar: modal feldən sonra "not" artırılır.',
      table: [
        ['Xüsusiyyət',              'Nümunə'],
        ['to-suz məsdər',           'She can swim. (swim — to-suz)'],
        ['III şəxs -s almır',       'He can (not cans), She must (not musts)'],
        ['Sual: modal əvvələ keçir','Can I work? / May she go?'],
        ['İnkar: modal + not',      'She cannot swim. / I must not go.'],
      ],
    },

    {
      type: 'lesson',
      title: 'Can / Could — mənası və formaları',
      content:
        '"Can" — bacarmaq, bilmək mənasını verir.\n\n' +
        'İki zaman forması var:\n' +
        '• İndiki zaman: can\n' +
        '• Keçmiş qeyri-müəyyən: could\n\n' +
        'Şəxslər üzrə dəyişmir. Özündən sonra to-suz məsdər işlənir.',
      table: [
        ['Forma',     'Nümunə'],
        ['Təsdiq',    'I / You / He / She / We / They can work.'],
        ['Keçmiş',    'I / You / He / She / We / They could work.'],
        ['Sual',      'Can I work? / Can you work? / Could you work?'],
        ['İnkar',     'I cannot (can\'t) work. / I could not (couldn\'t) work.'],
      ],
      tip: 'Qısa cavab: Yes, I can. / No, I can\'t.\nYes, he could. / No, he couldn\'t.',
    },

    { en: '"Can" nə mənasını verir?',                                  tr: 'Bacarmaq, bilmək',     wrong: 'Vaciblik'            },
    { en: '"Can" neçə zaman forması var?',                             tr: '2 (can / could)',       wrong: '3'                  },
    { en: '"Can"ın keçmiş forması nədir?',                             tr: 'could',                wrong: 'caned'              },
    { en: '"Can" III şəxs təkdə "-s" alırmı?',                        tr: 'Xeyr',                 wrong: 'Bəli'               },
    { en: '"Can"ın inkar forması?',                                    tr: 'cannot / can\'t',      wrong: 'don\'t can'         },
    { en: '"She cannot swim." — düzgün inkar formasımı?',              tr: 'Bəli',                 wrong: 'Xeyr'               },
    { en: 'Modal feldən sonra hansı məsdər işlənir?',                  tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'      },
    { en: 'Modal fellərin şəxssiz formaları varmı?',                   tr: 'Xeyr',                 wrong: 'Bəli'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ swim very well." — boşluğa nə gəlir?',
          options: ['cans', 'can to', 'can', 'is can'],
          answer: 'can',
        },
        {
          q: '"Can I work?" — bu hansı forma?',
          options: ['İnkar', 'Sual', 'Keçmiş', 'Gələcək'],
          answer: 'Sual',
        },
        {
          q: '"Could you work?" — "could" hansı zamandır?',
          options: ['İndiki', 'Gələcək', 'Keçmiş qeyri-müəyyən', 'İndiki bitmiş'],
          answer: 'Keçmiş qeyri-müəyyən',
        },
        {
          q: 'Modal feldən sonra hansı məsdər işlənir?',
          options: ['to + məsdər', 'to-suz məsdər', 'feli sifət', 'feli bağlama'],
          answer: 'to-suz məsdər',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — To be able to ─────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — To be able to',
  cards: [

    {
      type: 'lesson',
      title: '"To be able to" — can-ın əvəzedicisi',
      content:
        '"To be able to" — can felinin əvəzedicisidir.\n' +
        'Şəraitdən asılı olaraq bir şeyi bacarmaq, bilmək mənasında işlənir.\n\n' +
        '"Can"dan fərqli olaraq "to be able to" şəxslər üzrə dəyişir və bütün zamanları var.',
      table: [
        ['Şəxs',        'İndiki zaman'],
        ['I',           'am able to work'],
        ['You',         'are able to work'],
        ['He / She',    'is able to work'],
        ['We / You / They', 'are able to work'],
      ],
      tip: 'Sual verərkən am/is/are/was/were/shall/will/have/has/had mübtədadan əvvələ keçir.',
    },

    {
      type: 'lesson',
      title: '"To be able to" — bütün zamanlar',
      content: '"To be able to" bütün zamanlar üzrə:',
      table: [
        ['Zaman',                    'Forma',                      'Nümunə'],
        ['İndiki q/m',               'am/is/are able to',          'I am able to work.'],
        ['Keçmiş q/m',               'was/were able to',           'He was able to work.'],
        ['Gələcək q/m',              'shall/will be able to',      'I shall be able to work.'],
        ['İndiki bitmiş',            'have/has been able to',      'I have been able to work.'],
        ['Keçmiş bitmiş',            'had been able to',           'I had been able to work.'],
      ],
      examples: [
        { word: 'Am I able to work?',           az: 'İş görə bilərəmmi?' },
        { word: 'Was he able to work?',         az: 'O iş görə bilirdimi?' },
        { word: 'I am not able to work.',       az: 'Mən iş görə bilmirəm.' },
        { word: 'I wasn\'t able to work.',      az: 'Mən iş görə bilmirdim.' },
        { word: 'Shall I be able to work?',     az: 'İş görə biləcəyəmmi?' },
      ],
    },

    { en: '"To be able to" neyin əvəzedicisidir?',                     tr: 'can',                  wrong: 'must'               },
    { en: '"To be able to" şəxslər üzrə dəyişirmi?',                  tr: 'Bəli',                 wrong: 'Xeyr'               },
    { en: '"To be able to"nun bütün zamanları varmı?',                 tr: 'Bəli',                 wrong: 'Xeyr'               },
    { en: '"He ___ able to work." (indiki) — boşluq?',                tr: 'is',                   wrong: 'are'                },
    { en: '"Keçmiş q/m-də to be able to" forması?',                   tr: 'was/were able to',     wrong: 'had been able to'   },
    { en: '"Gələcək q/m-də to be able to" forması?',                  tr: 'shall/will be able to', wrong: 'have been able to' },
    { en: '"İndiki bitmiş zamanda to be able to" forması?',           tr: 'have/has been able to', wrong: 'was/were able to'  },
    { en: '"I am not able to work." — inkar düzgündürmü?',            tr: 'Bəli',                 wrong: 'Xeyr'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ I able to work?" (indiki, sual) — boşluq?',
          options: ['Is', 'Are', 'Am', 'Was'],
          answer: 'Am',
        },
        {
          q: '"She ___ able to swim last year." (keçmiş) — boşluq?',
          options: ['is', 'are', 'has been', 'was'],
          answer: 'was',
        },
        {
          q: '"I ___ been able to finish the work." (indiki bitmiş) — boşluq?',
          options: ['was', 'had', 'have', 'am'],
          answer: 'have',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 ───────────────────────────────────────────
[
  { en: '"Can"ın keçmiş forması nədir?',                              tr: 'could',                wrong: 'caned'               },
  { en: '"Can" III şəxs təkdə "-s" alırmı?',                         tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Can"ın inkar forması?',                                     tr: 'cannot / can\'t',      wrong: 'don\'t can'          },
  { en: 'Modal feldən sonra hansı məsdər işlənir?',                   tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'       },
  { en: '"To be able to" neyin əvəzedicisidir?',                      tr: 'can',                  wrong: 'must'                },
  { en: '"To be able to" şəxslər üzrə dəyişirmi?',                   tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"Keçmiş q/m-də to be able to" forması?',                    tr: 'was/were able to',     wrong: 'had been able to'    },
  { en: '"Gələcək q/m-də to be able to" forması?',                   tr: 'shall/will be able to', wrong: 'have been able to'  },
  { en: '"İndiki bitmiş zamanda to be able to" forması?',            tr: 'have/has been able to', wrong: 'was/were able to'   },
  { en: '"can" → "to be able to"ya çevirmək: "I can work" →?',       tr: 'I am able to work.',   wrong: 'I be able to work.'  },
],

{
      type: 'section_divider',
      title: 'May / Might',
},
// ── Bölmə 2 — May / Might · Must / Have to ───────────────

// ── Dərs 2.1 — May / Might ───────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — May / Might',
  cards: [

    {
      type: 'lesson',
      title: '"May" modal feli',
      content:
        '"May" — olar, olarmı; icazə, mümkünlük və güman bildirir.\n\n' +
        'İki zaman forması var:\n' +
        '• İndiki q/m: may\n' +
        '• Keçmiş q/m: might\n\n' +
        'Şəxslər üzrə dəyişmir. to-suz məsdər işlənir.\n\n' +
        'Qısa cavab: Yes, you may. / No, you mayn\'t.\n' +
        'Qətilik bildirərkən "may" ilə verilən suallara "must" ilə cavab verilə bilər:\n' +
        'May I smoke? — No, you mustn\'t.',
      table: [
        ['Forma',   'Nümunə'],
        ['Təsdiq',  'I / You / He / She / We / They may work.'],
        ['Sual',    'May I work? / May she work?'],
        ['İnkar',   'I may not work. / He may not work.'],
        ['Keçmiş',  'I might do. / They might do.'],
      ],
      tip: '"May" indiki q/m-da ancaq icazə mənasında işlənir.\n"Might" yalnız vasitəli nitqdə işlənir:\nThey said that I might take her book.',
    },

    { en: '"May" nə mənasını verir?',                                  tr: 'İcazə, mümkünlük, güman', wrong: 'Vaciblik'       },
    { en: '"May"ın keçmiş forması nədir?',                             tr: 'might',                wrong: 'mayed'              },
    { en: '"May" şəxslər üzrə dəyişirmi?',                            tr: 'Xeyr',                 wrong: 'Bəli'               },
    { en: '"May I smoke?" — qısa inkar cavab?',                        tr: 'No, you mayn\'t.',     wrong: 'No, you mustn\'t.'  },
    { en: '"Qətilik bildirərkən may suala hansı fel ilə cavab vermək olar?',tr: 'must',             wrong: 'can'               },
    { en: '"Might" hansı nitqdə işlənir?',                             tr: 'Vasitəli nitq',        wrong: 'Vasitəsiz nitq'     },
    { en: '"May" indiki q/m-da hansı mənada işlənir?',                 tr: 'Yalnız icazə',         wrong: 'Vaciblik'           },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ I take your book?" (icazə) — boşluq?',
          options: ['Must', 'Should', 'May', 'Need'],
          answer: 'May',
        },
        {
          q: '"They said that I ___ take her book." — vasitəli nitq, boşluq?',
          options: ['may', 'might', 'must', 'should'],
          answer: 'might',
        },
        {
          q: '"May I smoke?" — qısa inkar cavab?',
          options: ['No, you can\'t.', 'No, you mayn\'t.', 'No, you shouldn\'t.', 'No, you needn\'t.'],
          answer: 'No, you mayn\'t.',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Must / Have to ────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Must / Have to',
  cards: [

    {
      type: 'lesson',
      title: '"Must" modal feli',
      content:
        '"Must" — vaciblik, zərurət, güman və ehtimal bildirir.\n\n' +
        'Yalnız indiki zaman forması var. Şəxslər üzrə dəyişmir. to-suz məsdər işlənir.\n\n' +
        'İnkar mənası: must not — qadağa (etmə mənası — "not allowed to").\n\n' +
        'Qısa cavab: Yes, I must. / No, I mustn\'t.',
      table: [
        ['Forma',   'Nümunə'],
        ['Təsdiq',  'I / You / He / She / We / They must work.'],
        ['Sual',    'Must I work? / Must he work?'],
        ['İnkar',   'I must not go. / You must not go.'],
      ],
      tip: '"Must" yalnız indiki zamanda işlənir. Digər zamanlarda "have to" əvəzedicisi işlənir.',
    },

    {
      type: 'lesson',
      title: '"Have to" — must-un əvəzedicisi',
      content:
        '"Have to" — şəraitdən asılı olaraq bir şeyin vacib olduğunu bildirir.\n\n' +
        '"Must"dan fərqli olaraq bütün zamanları var.\n' +
        'Sual və inkar do/does/did köməkçi feli ilə düzəlir.\n\n' +
        'Asıl vaciblik (must) vs Şəraitdən asılı vaciblik (have to):\n' +
        'must → özündən asılı vaciblik\n' +
        'have to → xarici şəraitdən asılı vaciblik',
      table: [
        ['Şəxs',         'İndiki'],
        ['I / You / We / They', 'have to come'],
        ['He / She',     'has to come'],
      ],
      tip: 'Qısa cavab: Yes, I do. / No, I don\'t.\nYes, he does. / No, he doesn\'t.',
    },

    { en: '"Must" nə mənasını verir?',                                 tr: 'Vaciblik, zərurət, güman', wrong: 'İcazə'          },
    { en: '"Must" neçə zaman forması var?',                            tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'     },
    { en: '"Must" şəxslər üzrə dəyişirmi?',                           tr: 'Xeyr',                 wrong: 'Bəli'               },
    { en: '"Must not" nə mənasındadır?',                               tr: 'Qadağa — etmə',        wrong: 'Lazım deyil'        },
    { en: '"Have to" ilə sual/inkar hansı fellərlə düzəlir?',          tr: 'do / does / did',      wrong: 'have / has'         },
    { en: '"He ___ to come." (indiki) — boşluq?',                     tr: 'has',                  wrong: 'have'               },
    { en: '"Must" vs "have to" — fərq nədir?',                        tr: 'must = daxili, have to = xarici vaciblik', wrong: 'Heç bir fərq yoxdur' },
    { en: '"Have to"nun qısa cavabı hansı fellərlə verilir?',          tr: 'do / does',            wrong: 'have / has'         },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ he have to come?" (sual, indiki) — boşluq?',
          options: ['Must', 'Has', 'Does', 'Is'],
          answer: 'Does',
        },
        {
          q: '"You ___ not smoke here." (qadağa) — boşluq?',
          options: ['have', 'should', 'must', 'need'],
          answer: 'must',
        },
        {
          q: '"Yes, I ___." (have to-nun qısa cavabı) — boşluq?',
          options: ['have', 'must', 'do', 'am'],
          answer: 'do',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — Have to: bütün zaman formaları ────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — Have to: bütün zaman formaları',
  cards: [

    {
      type: 'lesson',
      title: '"Have to" — bütün zamanlar',
      content: '"Have to" bütün zamanlar üzrə:',
      table: [
        ['Zaman',              'Forma',                    'Sual / İnkar'],
        ['İndiki q/m',         'have to / has to',         'Do/Does + have to / don\'t/doesn\'t have to'],
        ['Keçmiş q/m',         'had to',                   'Did + have to / didn\'t have to'],
        ['Gələcək q/m',        'shall/will have to',       'Shall/Will + have to'],
        ['İndiki bitmiş',      'have/has had to',          'Haven\'t/Hasn\'t had to'],
        ['Keçmiş bitmiş',      'had had to',               'Hadn\'t had to'],
      ],
      examples: [
        { word: 'I have to come.',             az: 'Mən gəlməliyəm.' },
        { word: 'Did I have to come?',         az: 'Gəlməli idimmi?' },
        { word: 'I didn\'t have to come.',     az: 'Gəlməli deyildim.' },
        { word: 'I shall have to come.',       az: 'Gəlməli olacağam.' },
        { word: 'Shall I have to come?',       az: 'Gəlməli olacağammı?' },
      ],
      tip: 'Keçmiş q/m-də "had to" işlənir, sual/inkarı "did" ilə düzəlir. Keçmişlik "did"-də göstərilir, "have to" dəyişmir.',
    },

    { en: '"Have to"nun keçmiş forması nədir?',                        tr: 'had to',               wrong: 'have had to'        },
    { en: '"Had to"nun sualı hansı fellərlə düzəlir?',                 tr: 'did',                  wrong: 'had'                },
    { en: '"Have to"nun gələcək forması?',                             tr: 'shall/will have to',   wrong: 'going to have to'   },
    { en: '"Have to"nun indiki bitmiş forması?',                       tr: 'have/has had to',      wrong: 'had had to'         },
    { en: '"Did I have to come?" — inkar forması?',                    tr: 'I didn\'t have to come.', wrong: 'I hadn\'t have to come.' },
    { en: '"Shall I have to come?" — bu hansı zaman?',                 tr: 'Gələcək q/m sual',     wrong: 'İndiki q/m sual'    },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ to come yesterday." (keçmiş) — boşluq?',
          options: ['have had', 'has had', 'had', 'did have'],
          answer: 'had',
        },
        {
          q: '"___ she have to come?" (keçmiş, sual) — boşluq?',
          options: ['Does', 'Has', 'Did', 'Had'],
          answer: 'Did',
        },
        {
          q: '"I ___ have to come tomorrow." (gələcək) — boşluq?',
          options: ['am', 'do', 'shall', 'have'],
          answer: 'shall',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 ───────────────────────────────────────────
[
  { en: '"May"ın keçmiş forması nədir?',                              tr: 'might',                wrong: 'mayed'               },
  { en: '"May" şəxslər üzrə dəyişirmi?',                             tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Might" hansı nitqdə işlənir?',                              tr: 'Vasitəli nitq',        wrong: 'Vasitəsiz nitq'      },
  { en: '"Must" neçə zaman forması var?',                             tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'      },
  { en: '"Must not" nə mənasındadır?',                                tr: 'Qadağa — etmə',        wrong: 'Lazım deyil'         },
  { en: '"Have to" ilə sual/inkar hansı fellərlə düzəlir?',          tr: 'do / does / did',      wrong: 'have / has'          },
  { en: '"He ___ to come." (indiki) — boşluq?',                      tr: 'has',                  wrong: 'have'                },
  { en: '"Have to"nun keçmiş forması nədir?',                         tr: 'had to',               wrong: 'have had to'         },
  { en: '"Had to"nun sualı hansı fellərlə düzəlir?',                  tr: 'did',                  wrong: 'had'                 },
  { en: '"Must" vs "have to" — fərq nədir?',                         tr: 'must = daxili, have to = xarici vaciblik', wrong: 'Heç bir fərq yoxdur' },
],

// ── Test 1 — Can / May / Must (Bölmə 1–2) ────────────────
[
  { en: '"Can" nə mənasını verir?',                                    tr: 'Bacarmaq, bilmək',     wrong: 'Vaciblik'            },
  { en: '"Can"ın keçmiş forması?',                                     tr: 'could',                wrong: 'caned'               },
  { en: '"Can" III şəxs təkdə "-s" alırmı?',                          tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: 'Modal feldən sonra hansı məsdər işlənir?',                    tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'       },
  { en: '"To be able to" neyin əvəzedicisidir?',                       tr: 'can',                  wrong: 'must'                },
  { en: '"To be able to" şəxslər üzrə dəyişirmi?',                    tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"Keçmiş q/m-də to be able to" forması?',                     tr: 'was/were able to',     wrong: 'had been able to'    },
  { en: '"Gələcək q/m-də to be able to" forması?',                    tr: 'shall/will be able to', wrong: 'have been able to'  },
  { en: '"May" nə mənasını verir?',                                    tr: 'İcazə, mümkünlük, güman', wrong: 'Vaciblik'        },
  { en: '"May"ın keçmiş forması?',                                     tr: 'might',                wrong: 'mayed'               },
  { en: '"Might" hansı nitqdə işlənir?',                               tr: 'Vasitəli nitq',        wrong: 'Vasitəsiz nitq'      },
  { en: '"Must" neçə zaman forması var?',                              tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'      },
  { en: '"Must not" nə mənasındadır?',                                 tr: 'Qadağa — etmə',        wrong: 'Lazım deyil'         },
  { en: '"Have to" ilə sual/inkar hansı fellərlə düzəlir?',           tr: 'do / does / did',      wrong: 'have / has'          },
  { en: '"Have to"nun keçmiş forması?',                                tr: 'had to',               wrong: 'have had to'         },
],

{
      type: 'section_divider',
      title: 'Should / Ought to · Need',
},
// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 2 — Should / Need / Modal fellərin ümumi         │
// │           xüsusiyyətləri                               │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 3 — Should / Ought to · Need ───────────────────

// ── Dərs 3.1 — Should / Ought to ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Should / Ought to',
  cards: [

    {
      type: 'lesson',
      title: '"Should" modal feli',
      content:
        '"Should" — gərək, -malı/-məli; bir şeyin məsləhət şəklində vacib olduğunu bildirir.\n\n' +
        'Bütün şəxslərdə dəyişmir. to-suz məsdər işlənir.',
      table: [
        ['Forma',   'Nümunə'],
        ['Təsdiq',  'I / You / He / She / We / They should go.'],
        ['Sual',    'Should I go?'],
        ['İnkar',   'I shouldn\'t go.'],
      ],
      tip: '"Ought to" should feli kimi gərəklik bildirir. Şəxslər üzrə dəyişmir.\nFərq: "ought to" daha güclü məcburiyyət bildirir.\n\nQeyd: "ought" yeganə modal feldir ki, özündən sonra "to" işlənir.',
    },

    {
      type: 'lesson',
      title: '"Ought to" — should ilə müqayisə',
      content:
        '"Ought to" — should kimi gərəklik bildirir. Şəxslər üzrə dəyişmir.\n\n' +
        '"Ought to" yeganə modal feldir ki, özündən sonra "to" işlənir.',
      table: [
        ['Should',          'Ought to'],
        ['I should go.',    'I ought to go.'],
        ['You should go.',  'You ought to go.'],
        ['He should go.',   'He ought to go.'],
      ],
      examples: [
        { word: 'I should go.',    az: 'Getməliyəm (məsləhət).' },
        { word: 'I ought to go.',  az: 'Getməliyəm (gərəklik).' },
      ],
      tip: 'Bütün modal fellərdən sonra to-suz məsdər işlənir — "ought to" YEGANƏ istisnandır.',
    },

    { en: '"Should" nə mənasını verir?',                               tr: 'Məsləhət / gərəklik',  wrong: 'İcazə'              },
    { en: '"Should" bütün şəxslərdə dəyişirmi?',                      tr: 'Xeyr, dəyişmir',       wrong: 'Bəli, dəyişir'      },
    { en: '"Should"dan sonra hansı məsdər işlənir?',                   tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'      },
    { en: '"Ought to"dan sonra hansı məsdər işlənir?',                 tr: 'to ilə məsdər',        wrong: 'to-suz məsdər'      },
    { en: 'Hansı modal feldən sonra "to" işlənir?',                    tr: 'ought to',             wrong: 'should'             },
    { en: '"I shouldn\'t go." — düzgün inkar formasımı?',             tr: 'Bəli',                 wrong: 'Xeyr'               },
    { en: '"Should" ilə "ought to" mənaca bənzərmi?',                  tr: 'Bəli',                 wrong: 'Xeyr'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"You ___ study harder." (məsləhət) — boşluq?',
          options: ['must', 'can', 'should', 'may'],
          answer: 'should',
        },
        {
          q: '"I ought ___ go." — boşluq?',
          options: ['to', 'not', 'to not', 'heç nə'],
          answer: 'to',
        },
        {
          q: '"Should I go?" — qısa inkar cavab?',
          options: ['No, I shouldn\'t.', 'No, I mustn\'t.', 'No, I needn\'t.', 'No, I can\'t.'],
          answer: 'No, I shouldn\'t.',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — Need: əsas fel vs modal fel ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Need: əsas fel vs modal fel',
  cards: [

    {
      type: 'lesson',
      title: '"Need" — əsas fel və modal fel',
      content:
        '"Need" həm əsas fel, həm də modal feldir.\n\n' +
        'Əsas fel kimi:\n' +
        '• Özündən sonra isim gəlir və ya "to" ilə məsdər işlənir\n' +
        '• Həm təsdiq, həm sual, həm inkar cümlədə işlənir\n' +
        '• Sual/inkarı do/does/did ilə düzəlir\n' +
        '• Bütün zamanları var\n' +
        '• III şəxs təkdə "-s" qəbul edir\n' +
        '• "Ehtiyacı olmaq" mənasını verir\n\n' +
        'Modal fel kimi:\n' +
        '• Özündən sonra to-suz fel işlənir\n' +
        '• Yalnız indiki q/m-da işlənir\n' +
        '• İnkar: need not (needn\'t)\n' +
        '• "Lazım deyil" mənasını verir',
    },

    {
      type: 'lesson',
      title: '"Need" — müqayisəli cədvəl',
      content: 'Əsas fel vs modal fel fərqləri:',
      table: [
        ['Xüsusiyyət',          'Əsas fel (need)',                  'Modal fel (need)'],
        ['Sonrakı fel',         'isim / to + məsdər',              'to-suz məsdər'],
        ['Cümlə növü',          'Təsdiq, sual, inkar',             'Əsasən inkar/sual'],
        ['Sual/inkar',          'do/does/did ilə',                 'need + not (needn\'t)'],
        ['Zamanlar',            'Bütün zamanlar',                  'Yalnız indiki q/m'],
        ['III şəxs tək',        'needs (s alır)',                  'need (s almır)'],
        ['Mənası',              'ehtiyacı olmaq',                  'lazım deyil'],
      ],
      examples: [
        { word: 'She needs a pen. (əsas fel — isim)',            az: 'Onun qələmə ehtiyacı var.' },
        { word: 'She needs to buy a pen. (əsas fel — to+məsdər)', az: 'O qələm almalıdır.' },
        { word: 'Need she go? (modal fel)',                      az: 'O getməlidirsə?' },
        { word: 'She needn\'t go. (modal fel)',                  az: 'O getməyə ehtiyac yoxdur.' },
        { word: 'Does she need to go? (əsas fel — sual)',        az: 'O getməli olurmu?' },
        { word: 'She doesn\'t need to go. (əsas fel — inkar)',   az: 'O getməyə ehtiyac yoxdur.' },
      ],
    },

    { en: '"Need" modal fel kimi nə mənasını verir?',                  tr: 'Lazım deyil',          wrong: 'Ehtiyacı olmaq'     },
    { en: '"Need" əsas fel kimi nə mənasını verir?',                   tr: 'Ehtiyacı olmaq',       wrong: 'Lazım deyil'        },
    { en: '"Need" modal fel kimi yalnız hansı zamanda işlənir?',       tr: 'İndiki q/m',           wrong: 'Bütün zamanlar'     },
    { en: '"Need" modal fel kimi III şəxs təkdə "-s" alırmı?',        tr: 'Xeyr',                 wrong: 'Bəli'               },
    { en: '"Need" əsas fel kimi III şəxs təkdə "-s" alırmı?',         tr: 'Bəli (needs)',         wrong: 'Xeyr'               },
    { en: '"Need" modal fel kimi inkar forması?',                      tr: 'need not / needn\'t',  wrong: 'don\'t need'        },
    { en: '"Need" əsas fel kimi sual/inkarı hansı fellərlə düzəlir?',  tr: 'do/does/did',          wrong: 'need/needn\'t'      },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ to buy a pen." (əsas fel, indiki) — boşluq?',
          options: ['need', 'needs', 'needn\'t', 'ought'],
          answer: 'needs',
        },
        {
          q: '"You ___ go. It\'s not necessary." (modal fel, inkar) — boşluq?',
          options: ['don\'t need', 'doesn\'t need', 'needn\'t', 'mustn\'t'],
          answer: 'needn\'t',
        },
        {
          q: '"___ she need to go?" (əsas fel, sual) — boşluq?',
          options: ['Need', 'Does', 'Is', 'Has'],
          answer: 'Does',
        },
      ],
    },
  ],
},

// ── Dərs 3.3 — Need: 6 fərqin cədvəli ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.3 — Need: 6 fərqin cədvəli (tam xülasə)',
  cards: [

    {
      type: 'lesson',
      title: 'Need — 6 əsas fərq',
      content: '"Need" əsas fel vs modal fel — 6 fərq:',
      table: [
        ['#', 'Əsas fel',                          'Modal fel'],
        ['1', 'isim / to+məsdər işlənir',          'to-suz fel işlənir'],
        ['2', 'Bütün zamanlar var',                'Yalnız indiki q/m'],
        ['3', 'III şəxs tək: needs (-s alır)',     'III şəxs tək: need (-s almır)'],
        ['4', 'do/does/did ilə sual/inkar',        'needn\'t ilə inkar'],
        ['5', '"Ehtiyacı olmaq" mənası',           '"Lazım deyil" mənası'],
        ['6', 'Təsdiq, sual, inkar cümlədə',       'Əsasən inkar/sual cümlədə'],
      ],
      tip: 'Əsas fel inkarı: don\'t/doesn\'t need to go.\nModal fel inkarı: needn\'t go.\nHər ikisi "lazım deyil" mənasını verir, amma əsas fel daha rəsmi deyildir.',
    },

    { en: '"need" əsas fel kimi sonrakı fel?',                         tr: 'to + məsdər',          wrong: 'to-suz məsdər'      },
    { en: '"need" modal fel kimi sonrakı fel?',                        tr: 'to-suz məsdər',        wrong: 'to + məsdər'        },
    { en: '"She needs to go." — "need" hansı formada işlənib?',        tr: 'Əsas fel',             wrong: 'Modal fel'          },
    { en: '"She needn\'t go." — "need" hansı formada işlənib?',       tr: 'Modal fel',            wrong: 'Əsas fel'           },
    { en: '"Does she need to go?" — "need" hansı formada işlənib?',   tr: 'Əsas fel',             wrong: 'Modal fel'          },
    { en: '"needn\'t" = "don\'t need to" — mənaca bərabərmi?',        tr: 'Bəli',                 wrong: 'Xeyr'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ a new book." (əsas fel, isim, indiki) — boşluq?',
          options: ['need', 'needs', 'needn\'t', 'needed'],
          answer: 'needs',
        },
        {
          q: '"Need I go?" — "need" hansı formada işlənib?',
          options: ['Əsas fel', 'Modal fel', 'Köməkçi fel', 'Feli bağlama'],
          answer: 'Modal fel',
        },
        {
          q: '"She ___ need to come. It\'s not necessary." (əsas fel inkar) — boşluq?',
          options: ['needn\'t', 'doesn\'t', 'mustn\'t', 'shouldn\'t'],
          answer: 'doesn\'t',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 ───────────────────────────────────────────
[
  { en: '"Should" nə mənasını verir?',                                tr: 'Məsləhət / gərəklik',  wrong: 'İcazə'               },
  { en: '"Should"dan sonra hansı məsdər işlənir?',                    tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'       },
  { en: '"Ought to"dan sonra hansı məsdər işlənir?',                  tr: 'to ilə məsdər',        wrong: 'to-suz məsdər'       },
  { en: 'Hansı modal feldən sonra "to" işlənir?',                     tr: 'ought to',             wrong: 'should'              },
  { en: '"Need" modal fel kimi nə mənasını verir?',                   tr: 'Lazım deyil',          wrong: 'Ehtiyacı olmaq'      },
  { en: '"Need" modal fel kimi yalnız hansı zamanda işlənir?',        tr: 'İndiki q/m',           wrong: 'Bütün zamanlar'      },
  { en: '"Need" əsas fel kimi III şəxs təkdə "-s" alırmı?',          tr: 'Bəli (needs)',         wrong: 'Xeyr'                },
  { en: '"Need" modal fel kimi III şəxs təkdə "-s" alırmı?',         tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"needn\'t" = "don\'t need to" — mənaca bərabərmi?',         tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"Need" əsas fel kimi sual/inkarı hansı fellərlə düzəlir?',   tr: 'do/does/did',          wrong: 'need/needn\'t'       },
],

      {
      type: 'section_divider',
      title: 'Xüsusiyyətlər',
},

// ── Bölmə 4 — Modal fellərin 5 ümumi xüsusiyyəti ─────────

// ── Dərs 4.1 — 5 əsas xüsusiyyət ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — Modal fellərin 5 əsas xüsusiyyəti',
  cards: [

    {
      type: 'lesson',
      title: 'Modal fellərin 5 əsas xüsusiyyəti',
      content: 'Bütün modal fellərə aid ümumi xüsusiyyətlər:',
      table: [
        ['#', 'Xüsusiyyət',                                  'İstisna'],
        ['1', 'to-suz məsdər işlənir',                      'ought to — to işlənir'],
        ['2', 'III şəxs tək -s almır',                      'need (əsas fel kimi) -s alır'],
        ['3', 'Sual: modal fel mübtədadan əvvələ keçir',     'have to — do/does/did işlənir'],
        ['4', 'Şəxssiz formaları yoxdur',                   'Yoxdur'],
        ['5', 'İnkar: modal + not',                         'have to — don\'t/doesn\'t have to'],
      ],
    },

    {
      type: 'lesson',
      title: 'Dərs 4.2 — Bütün modal fellər xülasəsi',
      content: 'Modal fellərin tam formaları:',
      table: [
        ['Modal fel',  'Keçmiş / Alternativ forma',      'Mənası'],
        ['can',        'could',                          'bacarmaq, bilmək'],
        ['will',       'would',                          'gələcək, arzu'],
        ['shall',      'should',                         'gərəklik, məsləhət'],
        ['may',        'might',                          'icazə, güman'],
        ['must',       '(yalnız indiki)',                 'vaciblik, zərurət'],
        ['need',       '(yalnız indiki — modal kimi)',   'lazım deyil'],
        ['ought to',   '—',                              'gərəklik'],
      ],
      tip: '"will → would", "shall → should", "can → could", "may → might" — keçmiş formaları vasitəli nitqdə və şərt cümlələrində işlənir.',
    },

    { en: 'Modal fellərin şəxssiz formaları varmı?',                   tr: 'Xeyr',                 wrong: 'Bəli'               },
    { en: 'Hansı modal feldən sonra "to" işlənir?',                    tr: 'ought to',             wrong: 'should'             },
    { en: '"can"ın keçmiş / alternativ forması?',                      tr: 'could',                wrong: 'caned'              },
    { en: '"will"in keçmiş / alternativ forması?',                     tr: 'would',                wrong: 'willed'             },
    { en: '"shall"ın keçmiş / alternativ forması?',                    tr: 'should',               wrong: 'shalled'            },
    { en: '"may"ın keçmiş / alternativ forması?',                      tr: 'might',                wrong: 'mayed'              },
    { en: '"must" neçə zaman forması var?',                            tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'     },
    { en: '"need" modal fel kimi neçə zaman forması var?',             tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'     },

    {
      type: 'mini_check',
      questions: [
        {
          q: 'Modal fellərdən sonra ümumiyyətlə hansı forma işlənir?',
          options: ['to + məsdər', 'to-suz məsdər', 'feli sifət', 'feli bağlama'],
          answer: 'to-suz məsdər',
        },
        {
          q: 'Hansı modal fel yalnız indiki zamanda işlənir?',
          options: ['can', 'may', 'must', 'need (modal)'],
          answer: 'must',
        },
        {
          q: '"She ___ (can) finish the work." — doğru forma?',
          options: ['cans', 'can to', 'can', 'is can'],
          answer: 'can',
        },
      ],
    },
  ],
},

// ── Dərs 4.3 — Modal fellərin mənalarına görə müqayisəsi ─
{
  type: 'grammar_lesson',
  title: 'Dərs 4.3 — Modal fellərin mənalarına görə müqayisəsi',
  cards: [

    {
      type: 'lesson',
      title: 'Mənaya görə qruplaşdırma',
      content: 'Modal fellər mənalarına görə qruplaşdırılır:',
      table: [
        ['Məna',        'Modal fel(lər)',                'Nümunə'],
        ['Bacarmaq',    'can / could / to be able to',  'I can swim.'],
        ['İcazə',       'may / can',                    'May I go? / Can I go?'],
        ['Vaciblik',    'must / have to',               'You must go. / You have to go.'],
        ['Məsləhət',    'should / ought to',            'You should rest.'],
        ['Lazım deyil', 'needn\'t / don\'t need to',   'You needn\'t go.'],
        ['Qadağa',      'must not',                     'You mustn\'t smoke here.'],
        ['Güman',       'may / might / must',           'He may be at home.'],
      ],
      tip: '"must not" — qadağa (etmə)\n"needn\'t / don\'t have to" — lazım deyil (etməyə məcbur deyilsən)',
    },

    { en: '"Bacarmaq" mənasını hansı modal fellər bildirir?',          tr: 'can / could / to be able to', wrong: 'must / have to' },
    { en: '"Vaciblik" mənasını hansı modal fellər bildirir?',          tr: 'must / have to',       wrong: 'should / ought to'  },
    { en: '"Məsləhət" mənasını hansı modal fellər bildirir?',          tr: 'should / ought to',    wrong: 'must / have to'     },
    { en: '"Qadağa" mənasını hansı modal fel bildirir?',               tr: 'must not',             wrong: 'needn\'t'           },
    { en: '"Lazım deyil" mənasını hansı modal fel bildirir?',          tr: 'needn\'t / don\'t need to', wrong: 'must not'      },
    { en: '"must not" vs "needn\'t" — fərq nədir?',                   tr: 'mustn\'t = qadağa, needn\'t = lazım deyil', wrong: 'Heç bir fərq yoxdur' },
    { en: '"İcazə" mənasını hansı modal fellər bildirir?',             tr: 'may / can',            wrong: 'must / should'      },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"You ___ smoke here." (qadağa) — hansı modal fel?',
          options: ['needn\'t', 'shouldn\'t', 'mustn\'t', 'can\'t'],
          answer: 'mustn\'t',
        },
        {
          q: '"You ___ come if you don\'t want to." (lazım deyil) — hansı modal fel?',
          options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'needn\'t'],
          answer: 'needn\'t',
        },
        {
          q: '"You ___ see a doctor." (məsləhət) — hansı modal fel?',
          options: ['must', 'may', 'should', 'need'],
          answer: 'should',
        },
      ],
    },
  ],
},

// ── Mini-quiz 4 ───────────────────────────────────────────
[
  { en: 'Modal fellərin şəxssiz formaları varmı?',                    tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"can"ın alternativ forması?',                                 tr: 'could',                wrong: 'caned'               },
  { en: '"will"in alternativ forması?',                               tr: 'would',                wrong: 'willed'              },
  { en: '"may"ın alternativ forması?',                                 tr: 'might',                wrong: 'mayed'               },
  { en: '"shall"ın alternativ forması?',                              tr: 'should',               wrong: 'shalled'             },
  { en: '"Bacarmaq" mənasını hansı modal fellər bildirir?',           tr: 'can / could / to be able to', wrong: 'must / have to'},
  { en: '"Vaciblik" mənasını hansı modal fellər bildirir?',           tr: 'must / have to',       wrong: 'should / ought to'   },
  { en: '"Məsləhət" mənasını hansı modal fellər bildirir?',           tr: 'should / ought to',    wrong: 'must / have to'      },
  { en: '"mustn\'t" vs "needn\'t" — fərq nədir?',                    tr: 'mustn\'t = qadağa, needn\'t = lazım deyil', wrong: 'Heç bir fərq yoxdur' },
  { en: 'Hansı modal feldən sonra "to" işlənir?',                     tr: 'ought to',             wrong: 'should'              },
  { en: '"must" neçə zaman forması var?',                             tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'      },
  { en: '"need" modal fel kimi yalnız hansı zamanda işlənir?',        tr: 'İndiki q/m',           wrong: 'Bütün zamanlar'      },
],

// ── Test 2 — Should / Need / Ümumi xüsusiyyətlər ─────────
[
  { en: '"Should" nə mənasını verir?',                                 tr: 'Məsləhət / gərəklik',  wrong: 'İcazə'              },
  { en: '"Should"dan sonra hansı məsdər işlənir?',                     tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'      },
  { en: '"Ought to"dan sonra hansı məsdər işlənir?',                   tr: 'to ilə məsdər',        wrong: 'to-suz məsdər'      },
  { en: 'Hansı modal feldən sonra "to" işlənir?',                      tr: 'ought to',             wrong: 'should'             },
  { en: '"Need" modal fel kimi nə mənasını verir?',                    tr: 'Lazım deyil',          wrong: 'Ehtiyacı olmaq'     },
  { en: '"Need" əsas fel kimi III şəxs təkdə "-s" alırmı?',           tr: 'Bəli (needs)',         wrong: 'Xeyr'               },
  { en: '"Need" modal fel kimi III şəxs təkdə "-s" alırmı?',          tr: 'Xeyr',                 wrong: 'Bəli'               },
  { en: '"needn\'t" = "don\'t need to" — mənaca bərabərmi?',          tr: 'Bəli',                 wrong: 'Xeyr'               },
  { en: '"mustn\'t" vs "needn\'t" — fərq nədir?',                     tr: 'mustn\'t = qadağa, needn\'t = lazım deyil', wrong: 'Heç bir fərq yoxdur' },
  { en: 'Modal fellərin şəxssiz formaları varmı?',                     tr: 'Xeyr',                 wrong: 'Bəli'               },
  { en: '"Bacarmaq" mənasını hansı modal fellər bildirir?',            tr: 'can / could / to be able to', wrong: 'must / have to'},
  { en: '"Vaciblik" mənasını hansı modal fellər bildirir?',            tr: 'must / have to',       wrong: 'should / ought to'  },
  { en: '"Məsləhət" mənasını hansı modal fellər bildirir?',            tr: 'should / ought to',    wrong: 'must / have to'     },
  { en: '"Qadağa" mənasını hansı modal fel bildirir?',                 tr: 'must not',             wrong: 'needn\'t'           },
  { en: '"İcazə" mənasını hansı modal fellər bildirir?',               tr: 'may / can',            wrong: 'must / should'      },
],

{
      type: 'section_divider',
      title: 'MODAL VERBS - ÜMUMİ İMTAHAN',
},
      
// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Modal Verbs tam test · 30+ sual          │
// └─────────────────────────────────────────────────────────┘
[
  // Can / Could
  { en: '"Can" nə mənasını verir?',                                    tr: 'Bacarmaq, bilmək',     wrong: 'Vaciblik'            },
  { en: '"Can"ın keçmiş forması?',                                     tr: 'could',                wrong: 'caned'               },
  { en: '"Can" III şəxs təkdə "-s" alırmı?',                          tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"Can"ın inkar forması?',                                      tr: 'cannot / can\'t',      wrong: 'don\'t can'          },
  // To be able to
  { en: '"To be able to" neyin əvəzedicisidir?',                       tr: 'can',                  wrong: 'must'                },
  { en: '"To be able to" şəxslər üzrə dəyişirmi?',                    tr: 'Bəli',                 wrong: 'Xeyr'                },
  { en: '"Keçmiş q/m-də to be able to" forması?',                     tr: 'was/were able to',     wrong: 'had been able to'    },
  { en: '"Gələcək q/m-də to be able to" forması?',                    tr: 'shall/will be able to', wrong: 'have been able to'  },
  // May / Might
  { en: '"May" nə mənasını verir?',                                    tr: 'İcazə, mümkünlük, güman', wrong: 'Vaciblik'        },
  { en: '"May"ın keçmiş forması?',                                     tr: 'might',                wrong: 'mayed'               },
  { en: '"Might" hansı nitqdə işlənir?',                               tr: 'Vasitəli nitq',        wrong: 'Vasitəsiz nitq'      },
  // Must / Have to
  { en: '"Must" neçə zaman forması var?',                              tr: 'Yalnız indiki',        wrong: 'Bütün zamanlar'      },
  { en: '"Must not" nə mənasındadır?',                                 tr: 'Qadağa — etmə',        wrong: 'Lazım deyil'         },
  { en: '"Have to" ilə sual/inkar hansı fellərlə düzəlir?',           tr: 'do / does / did',      wrong: 'have / has'          },
  { en: '"Have to"nun keçmiş forması?',                                tr: 'had to',               wrong: 'have had to'         },
  { en: '"Must" vs "have to" — fərq nədir?',                          tr: 'must = daxili, have to = xarici vaciblik', wrong: 'Heç bir fərq yoxdur' },
  // Should / Ought to / Need
  { en: '"Should" nə mənasını verir?',                                 tr: 'Məsləhət / gərəklik',  wrong: 'İcazə'               },
  { en: 'Hansı modal feldən sonra "to" işlənir?',                      tr: 'ought to',             wrong: 'should'              },
  { en: '"Need" modal fel kimi nə mənasını verir?',                    tr: 'Lazım deyil',          wrong: 'Ehtiyacı olmaq'      },
  { en: '"Need" əsas fel kimi III şəxs təkdə "-s" alırmı?',           tr: 'Bəli (needs)',         wrong: 'Xeyr'                },
  { en: '"Need" modal fel kimi III şəxs təkdə "-s" alırmı?',          tr: 'Xeyr',                 wrong: 'Bəli'                },
  // Ümumi xüsusiyyətlər
  { en: 'Modal feldən sonra ümumiyyətlə hansı məsdər işlənir?',        tr: 'to-suz məsdər',        wrong: 'to ilə məsdər'       },
  { en: 'Modal fellərin şəxssiz formaları varmı?',                     tr: 'Xeyr',                 wrong: 'Bəli'                },
  { en: '"can"ın alternativ forması?',                                  tr: 'could',                wrong: 'caned'               },
  { en: '"will"in alternativ forması?',                                 tr: 'would',                wrong: 'willed'              },
  // Mənalar üzrə müqayisə
  { en: '"Bacarmaq" mənasını hansı modal fellər bildirir?',            tr: 'can / could / to be able to', wrong: 'must / have to'},
  { en: '"Vaciblik" mənasını hansı modal fellər bildirir?',            tr: 'must / have to',       wrong: 'should / ought to'   },
  { en: '"Məsləhət" mənasını hansı modal fellər bildirir?',            tr: 'should / ought to',    wrong: 'must / have to'      },
  { en: '"Qadağa" mənasını hansı modal fel bildirir?',                 tr: 'must not',             wrong: 'needn\'t'            },
  { en: '"mustn\'t" vs "needn\'t" — fərq nədir?',                     tr: 'mustn\'t = qadağa, needn\'t = lazım deyil', wrong: 'Heç bir fərq yoxdur' },
  { en: '"İcazə" mənasını hansı modal fellər bildirir?',               tr: 'may / can',            wrong: 'must / should'       },
],

  ],
};
// ── 11. PREPOSITIONS (SÖZÖNLƏRİ) ────────────────────────────
const PREPOSITIONS_LEVEL = {
  id: 'prepositions',
  name: 'PREPOSITIONS — SÖZÖNLƏRİ',
  icon: '<i class="ti ti-map-pin"></i>',
  color: '#FDBA74',
  quizzes: [
   // ══════════════════════════════════════════════════════════
// ║  SÖZÖNLƏR (PREPOSITIONS) — Tam bölüm                  ║
// ══════════════════════════════════════════════════════════
// Struktur: 5 Bölmə · 2 Qrup · (dərs + mini-quiz) + test
// ──────────────────────────────────────────────────────────

      {
      type: 'section_divider',
      title: 'İn / On / At (yer + zaman)',
},

// ╔══════════════════════════════════════════════════════╗
// ║  QRUP 1 — Yer və Zaman bildirən sözönlər            ║
// ╚══════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────┐
// │  BÖLMƏ 1 — in / on / at (yer + zaman)               │
// └──────────────────────────────────────────────────────┘

// ── Dərs 1.1 — "in" yer + zaman ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — "in" yer + zaman',
  cards: [

    {
      type: 'lesson',
      title: '"in" — yer mənası',
      content:
        '"in" şəxsin və ya əşyanın nəyinsə daxilində, sərhədli bir ərazidə ' +
        'olduğunu bildirir.',
      table: [
        ['İfadə',               'Azərbaycanca'],
        ['in the room',         'otaqda'],
        ['in the city',         'şəhərdə'],
        ['in the park',         'parkda'],
        ['in the yard',         'həyətdə'],
        ['in the street',       'küçədə'],
        ['in the sky',          'səmada'],
        ['in the book',         'kitabın içində'],
        ['in the corner',       'küncdə (otağın)'],
        ['in the box',          'qutuda'],
        ['in the bag',          'çantada'],
        ['in the world',        'dünyada'],
        ['in the sea',          'dənizdə'],
        ['in Azerbaijan',       'Azərbaycanda'],
        ['in Baku',             'Bakıda'],
        ['in the north/south',  'şimalda / cənubda'],
        ['in a car / in a taxi','maşınla / taksi ilə'],
        ['in hospital',         'xəstəxanada'],
        ['in prison',           'həbsdə'],
        ['in bed',              'yataqda'],
        ['in the open air',     'açıq havada'],
        ['in the shade',        'kölgədə'],
      ],
      tip:
        'Ölkə, şəhər, kənd — "in" ilə.\n' +
        'Coğrafi cəhətlər (north/south) — "in" ilə.\n' +
        'Artikl olarsa nəqliyyat vasitələri "by" ilə işlənməz: in a car (✓) · by car (✓) · by a car (✗)',
    },

    // ── Dərs-içi quiz: "in" yer ──────────────────────────
    { en: '"___ the room" — boşluğa nə gəlir?',                  tr: 'in',    wrong: 'on'   },
    { en: '"___ Azerbaijan" — ölkə adının qarşısında?',           tr: 'in',    wrong: 'at'   },
    { en: '"___ the sky" — hansı sözön?',                        tr: 'in',    wrong: 'on'   },
    { en: '"___ hospital" — xəstəxanada mənası?',                tr: 'in',    wrong: 'at'   },
    { en: '"___ the north" — coğrafi cəhətin önündə?',           tr: 'in',    wrong: 'on'   },
    { en: '"___ a car" — maşınla (artikl ilə)?',                 tr: 'in',    wrong: 'by'   },
    { en: '"___ the open air" — açıq havada?',                   tr: 'in',    wrong: 'at'   },
    { en: '"___ the street" — küçədə?',                          tr: 'in',    wrong: 'on'   },

    {
      type: 'lesson',
      title: '"in" — zaman mənası',
      content: '"in" aşağıdakı zaman ifadələrinin qarşısında işlənir:',
      table: [
        ['İşlənmə konteksti',             'Nümunə'],
        ['Günün 3 hissəsi',               'in the morning / afternoon / evening'],
        ['Aylar (tarixsiz)',              'in May · in September'],
        ['İllər',                         'in 1994 · in 2005'],
        ['Fəsillər',                      'in spring · in summer · in winter'],
        ['Gələcək zaman zərfi',           'in two days · in a week'],
        ['Əsrlər',                        'in the XX century'],
        ['Dövrlər',                       'in my life · in my youth'],
      ],
    },

    // ── Dərs-içi quiz: "in" zaman ─────────────────────────
    { en: '"___ the morning" — hansı sözön?',                    tr: 'in',    wrong: 'at'   },
    { en: '"___ May" — ay adının önündə (tarixsiz)?',            tr: 'in',    wrong: 'on'   },
    { en: '"___ 1994" — il göstərərkən?',                        tr: 'in',    wrong: 'on'   },
    { en: '"___ spring" — fəsil adının önündə?',                 tr: 'in',    wrong: 'at'   },
    { en: '"___ two days" — gələcək zaman zərfi?',               tr: 'in',    wrong: 'for'  },
    { en: '"___ the XX century" — əsr ifadəsinin önündə?',       tr: 'in',    wrong: 'at'   },
  ],
},

// ── Dərs 1.2 — "on" yer + zaman ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — "on" yer + zaman',
  cards: [

    {
      type: 'lesson',
      title: '"on" — yer mənası',
      content:
        '"on" şəxsin və ya əşyanın üfüqi və ya şaquli vəziyyətdə ' +
        'nəyinsə üstündə olduğunu bildirir. Azərbaycanca: üstündə, -da/-də.',
      table: [
        ['İfadə',                   'Azərbaycanca'],
        ['on the table',            'stolun üstündə'],
        ['on the wall',             'divarda'],
        ['on the right / left',     'sağda / solda'],
        ['on the floor',            'döşəmədə / mərtəbədə'],
        ['on the ground',           'yerdə'],
        ['on the Earth',            'yer kürəsində'],
        ['on the isle / beach',     'adada / çimərlikdə'],
        ['on the coast',            'dəniz sahilində'],
        ['on TV',                   'televizorda'],
        ['on the map',              'xəritədə'],
        ['on the farm',             'fermada'],
        ['on the way',              'yolda'],
        ['on holiday / vacation',   'tətildə / məzuniyyətdə'],
        ['on business',             'iş üçün / biznes məqsədilə'],
        ['on sale',                 'satışda'],
        ['on a bus/train/ship/plane','avtobusla / qatarla / gəmiylə / təyyarəylə'],
        ['on page',                 'neçənci səhifədə'],
        ['on average',              'orta hesabla'],
      ],
      tip:
        '"on" kitabın, filmin, mövzunun məzmunu haqqında danışarkən:\n' +
        'I have a book on history — tarihdən kitabım var.',
    },

    // ── Dərs-içi quiz: "on" yer ───────────────────────────
    { en: '"___ the table" — stolun üstündə?',                   tr: 'on',    wrong: 'in'   },
    { en: '"___ the wall" — divarda?',                           tr: 'on',    wrong: 'at'   },
    { en: '"___ TV" — televizorda?',                             tr: 'on',    wrong: 'in'   },
    { en: '"___ the right" — sağda?',                            tr: 'on',    wrong: 'at'   },
    { en: '"___ the floor" — döşəmədə?',                         tr: 'on',    wrong: 'in'   },
    { en: '"___ a bus" — avtobusla?',                            tr: 'on',    wrong: 'by'   },
    { en: '"___ the map" — xəritədə?',                           tr: 'on',    wrong: 'in'   },
    { en: '"___ sale" — satışda?',                               tr: 'on',    wrong: 'at'   },

    {
      type: 'lesson',
      title: '"on" — zaman mənası',
      content: '"on" aşağıdakı zaman ifadələrinin qarşısında işlənir:',
      table: [
        ['İşlənmə konteksti',                         'Nümunə'],
        ['Həftənin günləri',                           'on Monday · on Sunday'],
        ['Gün + günün hissəsi',                        'on Friday morning / evening'],
        ['Tarix (ay + rəqəm)',                         'on the 4th of March'],
        ['Xüsusi günlər',                              'on New Year\'s Eve · on Christmas Day'],
        ['Gün + sifət',                                'on a warm spring day'],
      ],
      tip:
        'Christmas Day — "on" ilə.\n' +
        '"at Christmas" — "day" olmadan "at" ilə.\n' +
        'on Monday morning (✓) — gün + günün hissəsi birlikdədirsə "on" işlənir.',
    },

    // ── Dərs-içi quiz: "on" zaman ─────────────────────────
    { en: '"___ Monday" — həftənin gününün önündə?',             tr: 'on',    wrong: 'in'   },
    { en: '"___ Friday morning" — gün + günün hissəsi?',         tr: 'on',    wrong: 'in'   },
    { en: '"___ the 4th of March" — tarix?',                     tr: 'on',    wrong: 'in'   },
    { en: '"___ New Year\'s Eve" — xüsusi gün?',                 tr: 'on',    wrong: 'at'   },
    { en: '"___ Christmas Day" — "day" sözü varsa?',             tr: 'on',    wrong: 'at'   },
  ],
},

// ── Dərs 1.3 — "at" yer + zaman ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.3 — "at" yer + zaman',
  cards: [

    {
      type: 'lesson',
      title: '"at" — yer mənası',
      content:
        '"at" əsasən yer bildirir: yanında, kənarında, arxasında, -da/-də. ' +
        'Adətən nisbətən kiçik obyektlərin yanında işlənir.',
      table: [
        ['İfadə',                       'Azərbaycanca'],
        ['at home',                     'evdə'],
        ['at school',                   'məktəbdə'],
        ['at the lesson',               'dərsdə'],
        ['at the party',                'şənlikdə / ziyafətdə'],
        ['at the station',              'vağzalda'],
        ['at the airport',              'aeroportda'],
        ['at the bus stop',             'avtobus dayanacağında'],
        ['at the traffic light',        'işıqforunda'],
        ['at the corner of the street', 'küçənin tinində'],
        ['at the door / gate',          'qapının / darvazanın ağzında'],
        ['at the concert',              'konsertdə'],
        ['at the football match',       'futbol oyununda'],
        ['at the window',               'pəncərənin yanında'],
        ['at the desk',                 'parta arxasında'],
        ['at my uncle\'s',              'əmimgildə'],
        ['at the doctor\'s',            'həkimdə'],
        ['at the baker\'s',             'çörək mağazasında'],
        ['at the age of 5',             'beş yaşında'],
        ['at 65 Nizami street',         'Nizami küçəsi 65-də'],
      ],
      tip:
        'Küçə adı nömrəsiz verilərsə → "in": in Nizami street.\n' +
        'Nömrə ilə verilərsə → "at": at 65 Nizami street.\n' +
        'Cinema, theatre, stadium, concert — "at" ilə.\n' +
        'Hotel və restaurant — həm "at", həm "in" ilə işlənə bilər.',
    },

    // ── Dərs-içi quiz: "at" yer ───────────────────────────
    { en: '"___ home" — evdə?',                                  tr: 'at',    wrong: 'in'   },
    { en: '"___ school" — məktəbdə?',                            tr: 'at',    wrong: 'in'   },
    { en: '"___ the station" — vağzalda?',                       tr: 'at',    wrong: 'in'   },
    { en: '"___ the corner" — küçənin tinində?',                 tr: 'at',    wrong: 'on'   },
    { en: '"___ the window" — pəncərənin yanında?',              tr: 'at',    wrong: 'in'   },
    { en: '"___ the bus stop" — avtobus dayanacağında?',         tr: 'at',    wrong: 'on'   },
    { en: '"___ the concert" — konsertdə?',                      tr: 'at',    wrong: 'in'   },
    { en: '"in Nizami street" vs "___ 65 Nizami street" — nömrə ilə?', tr: 'at', wrong: 'in' },

    {
      type: 'lesson',
      title: '"at" — zaman mənası',
      content: '"at" aşağıdakı zaman ifadələrinin qarşısında işlənir:',
      table: [
        ['İşlənmə konteksti',           'Nümunə'],
        ['Saatlar',                     'at 8 o\'clock · at 9 p.m.'],
        ['Gecə vaxtı',                  'at night · at midnight · at noon'],
        ['Dəqiq an',                    'at that moment · at the same time'],
        ['Keçmiş davamedici + dəqiq vaxt', 'at this time yesterday'],
        ['Sabit ifadələr',              'at last · at once · at first · at present'],
        ['Nahar/şam vaxtı',             'at dinner · at supper'],
        ['Həftə sonu',                  'at the weekend'],
      ],
      tip:
        '"During the night" — artikl ilə verilərsə "at" yox, "during" işlənir.\n' +
        '"at noon" (saat 12) — "in" yox, "at" ilə.',
    },

    // ── Dərs-içi quiz: "at" zaman ─────────────────────────
    { en: '"___ 8 o\'clock" — saat ifadəsi?',                   tr: 'at',    wrong: 'on'   },
    { en: '"___ night" — gecə vaxtı?',                           tr: 'at',    wrong: 'in'   },
    { en: '"___ noon" — saat 12?',                               tr: 'at',    wrong: 'in'   },
    { en: '"___ the weekend" — həftə sonu?',                     tr: 'at',    wrong: 'on'   },
    { en: '"___ once" — dərhal mənasında?',                      tr: 'at',    wrong: 'in'   },
    { en: '"___ present" — hal-hazırda?',                        tr: 'at',    wrong: 'in'   },
  ],
},

// ── Dərs 1.4 — in / on / at müqayisəsi + fərqlər ─────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.4 — in / on / at müqayisəsi + fərqlər',
  cards: [

    {
      type: 'lesson',
      title: 'in / on / at — yer müqayisəsi',
      content: 'Hansı sözönün işlənəcəyini cümlənin kontekstinə görə müəyyənləşdir:',
      table: [
        ['Nümunə 1',              'Nümunə 2',              'Fərq'],
        ['in the street (küçədə)','at the corner (tində)', 'ərazi vs nöqtə'],
        ['in Nizami street',      'at 65 Nizami street',   'ad vs nömrə'],
        ['at the window',         'on the wall',           'kiçik obj. vs üst'],
        ['in the morning',        'on Monday morning',     'zaman hissəsi vs gün+hissə'],
        ['in May',                'on the 4th of May',     'ay vs tarix'],
        ['in the morning',        'at noon',               'hissə vs dəqiq an'],
        ['at school',             'in the school building','yer (məkan) vs bina içi'],
        ['on a bus',              'in a car/taxi',         'ictimai vs fərdi nəqliyyat'],
        ['at Christmas',          'on Christmas Day',      '"day" yoxdur vs var'],
      ],
    },

    // ── Dərs-içi quiz: müqayisə ──────────────────────────
    { en: '"___ the morning" — günün hissəsi?',                  tr: 'in',    wrong: 'at'   },
    { en: '"___ Monday morning" — gün + hissə birlikdə?',        tr: 'on',    wrong: 'in'   },
    { en: '"___ May" — ay adı (tarixsiz)?',                      tr: 'in',    wrong: 'on'   },
    { en: '"___ the 4th of May" — tarix?',                       tr: 'on',    wrong: 'in'   },
    { en: '"___ noon" — saat 12?',                               tr: 'at',    wrong: 'in'   },
    { en: '"___ a bus" — ictimai nəqliyyat?',                    tr: 'on',    wrong: 'in'   },
    { en: '"___ a car" — fərdi nəqliyyat (artikl ilə)?',         tr: 'in',    wrong: 'on'   },
    { en: '"___ school" — məktəbdə (ümumi məkan)?',              tr: 'at',    wrong: 'in'   },
    { en: '"___ Christmas" — "day" sözü yoxdur?',                tr: 'at',    wrong: 'on'   },
    { en: '"___ Christmas Day" — "day" sözü var?',               tr: 'on',    wrong: 'at'   },

    // ── Mini-check 1 ──────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ the morning" vs "___ Monday morning" — fərq nədir?',
          options: [
            'Hər ikisi "in" ilə',
            '"in" günün hissəsi, "on" gün+hissə',
            'Hər ikisi "on" ilə',
            '"at" günün hissəsi, "in" gün+hissə',
          ],
          answer: '"in" günün hissəsi, "on" gün+hissə',
        },
        {
          q: '"___ 65 Nizami street" — nömrə ilə küçə ünvanı?',
          options: ['in', 'on', 'at', 'by'],
          answer: 'at',
        },
        {
          q: '"___ a taxi" — taksidə (artikl ilə)?',
          options: ['by', 'on', 'at', 'in'],
          answer: 'in',
        },
        {
          q: '"___ a train" — qatarla?',
          options: ['in', 'at', 'on', 'by'],
          answer: 'on',
        },
        {
          q: '"___ the weekend" — həftə sonu?',
          options: ['in', 'on', 'at', 'by'],
          answer: 'at',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 ── in/on/at sec: yer yoxsa zaman, fərqli kontekstdə ──
[
  // Yer — in
  { en: '"___ the room"',                      tr: 'in',   wrong: 'at'  },
  { en: '"___ the sky"',                       tr: 'in',   wrong: 'on'  },
  { en: '"___ Azerbaijan"',                    tr: 'in',   wrong: 'at'  },
  { en: '"___ hospital"',                      tr: 'in',   wrong: 'at'  },
  { en: '"___ the sea"',                       tr: 'in',   wrong: 'on'  },
  // Yer — on
  { en: '"___ the table"',                     tr: 'on',   wrong: 'in'  },
  { en: '"___ the wall"',                      tr: 'on',   wrong: 'at'  },
  { en: '"___ TV"',                            tr: 'on',   wrong: 'in'  },
  { en: '"___ the map"',                       tr: 'on',   wrong: 'at'  },
  { en: '"___ the beach"',                     tr: 'on',   wrong: 'at'  },
  // Yer — at
  { en: '"___ home"',                          tr: 'at',   wrong: 'in'  },
  { en: '"___ the station"',                   tr: 'at',   wrong: 'in'  },
  { en: '"___ the window"',                    tr: 'at',   wrong: 'on'  },
  { en: '"___ the concert"',                   tr: 'at',   wrong: 'in'  },
  { en: '"___ the bus stop"',                  tr: 'at',   wrong: 'on'  },
  // Zaman — in
  { en: '"___ the evening"',                   tr: 'in',   wrong: 'at'  },
  { en: '"___ 1994"',                          tr: 'in',   wrong: 'on'  },
  { en: '"___ spring"',                        tr: 'in',   wrong: 'at'  },
  { en: '"___ two days"',                      tr: 'in',   wrong: 'for' },
  // Zaman — on
  { en: '"___ Monday"',                        tr: 'on',   wrong: 'in'  },
  { en: '"___ the 4th of March"',              tr: 'on',   wrong: 'in'  },
  { en: '"___ Friday morning"',                tr: 'on',   wrong: 'in'  },
  // Zaman — at
  { en: '"___ 8 o\'clock"',                   tr: 'at',   wrong: 'in'  },
  { en: '"___ night"',                         tr: 'at',   wrong: 'in'  },
  { en: '"___ the weekend"',                   tr: 'at',   wrong: 'on'  },
  { en: '"___ noon"',                          tr: 'at',   wrong: 'in'  },
  // Fərq sualları
  { en: '"in Nizami street" vs "___ 65 Nizami" — nömrə ilə?', tr: 'at', wrong: 'in' },
  { en: '"___ a car" (artikl ilə)',             tr: 'in',   wrong: 'by'  },
  { en: '"___ Christmas" ("day" yoxdur)',       tr: 'at',   wrong: 'on'  },
  { en: '"___ Christmas Day" ("day" var)',      tr: 'on',   wrong: 'at'  },
],

{
      type: 'section_divider',
      title: 'Mövqe bildirən sözönlər',
},
// ┌──────────────────────────────────────────────────────┐
// │  BÖLMƏ 2 — Mövqe bildirən sözönlər                  │
// └──────────────────────────────────────────────────────┘

// ── Dərs 2.1 — under / above / over / behind ─────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — under / above / over / behind',
  cards: [

    {
      type: 'lesson',
      title: 'under / above / over / behind',
      content: '',
      table: [
        ['Sözön',    'Mənası',                    'Nümunə'],
        ['under',    'altında',                   'under the table — stolun altında'],
        ['above',    'yuxarısında (yuxarıda)',    'The flag is above the window.'],
        ['over',     'üzərində / üstündən',       'over the river — çayın üzərində'],
        ['over',     'o tayında',                 'a house over the river — çayın o tayında'],
        ['behind',   'arxasında',                 'There is a garden behind the house.'],
      ],
      note:
        'in the sun — günəşin altında (under yox!)\n' +
        'in the rain — yağışda\n' +
        'in the shade — kölgədə\n' +
        'all over the world — bütün dünyada\n' +
        'over (bitmiş/sona çatmış mənasında): The lesson is over.',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ the table" — stolun altında?',                   tr: 'under',   wrong: 'below'  },
    { en: '"The flag is ___ the window." — yuxarısında?',        tr: 'above',   wrong: 'over'   },
    { en: '"___ the river" — çayın üzərində (körpü kimi)?',      tr: 'over',    wrong: 'above'  },
    { en: '"in the sun" — günəşin altında? ("under" işlənirmi?)', tr: 'Xeyr, "in"', wrong: 'Bəli, "under"' },
    { en: '"___ the house" — evin arxasında?',                   tr: 'behind',  wrong: 'under'  },
    { en: '"all ___ the world" — bütün dünyada?',                tr: 'over',    wrong: 'above'  },
  ],
},

// ── Dərs 2.2 — near / beside / between / among ───────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — near / beside / between / among',
  cards: [

    {
      type: 'lesson',
      title: 'near / beside / next to / between / among',
      content: '',
      table: [
        ['Sözön',        'Mənası',                         'Nümunə'],
        ['near',         'yaxınlığında (böyük obj.)',       'near school — məktəbin yanında'],
        ['at',           'yanında (kiçik obj.)',            'at the window — pəncərənin yanında'],
        ['beside',       'yanında, yanaşı',                'Sadiq was sitting beside Arzu.'],
        ['next to',      'bitişik, yanında',               'next to the door — qapının yanında'],
        ['between',      'ikisinin arasında',              'between the sofa and the bookcase'],
        ['among',        'ikidən artıq arasında',          'Distribute books among students.'],
        ['in the middle of', 'ortasında / mərkəzində',    'in the middle of the room'],
      ],
      tip:
        '"near" böyük obyektlər (məktəb, bina), "at" kiçik obyektlər (pəncərə, stol).\n' +
        '"between" — 2 şəxs/əşya arasında.\n' +
        '"among" — 3 və daha çox şəxs/əşya arasında. Üstünlük dərəcəsini tələb edir.',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ the sofa and the bookcase" — ikisinin arasında?', tr: 'between', wrong: 'among' },
    { en: '"___ students" — çox şagird arasında?',               tr: 'among',   wrong: 'between'},
    { en: '"___ school" — məktəbin yanında (böyük obj.)?',       tr: 'near',    wrong: 'at'    },
    { en: '"___ the window" — pəncərənin yanında (kiçik obj.)?', tr: 'at',      wrong: 'near'  },
    { en: '"___ the room" — otağın ortasında?',                  tr: 'in the middle of', wrong: 'between' },
    { en: '"Sadiq was sitting ___ Arzu." — yanaşı?',             tr: 'beside',  wrong: 'between'},
  ],
},

// ── Dərs 2.3 — in front of / opposite / across / round / below ──
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — in front of / opposite / across / round / below',
  cards: [

    {
      type: 'lesson',
      title: 'in front of / opposite / across / round / around / below',
      content: '',
      table: [
        ['Sözön',         'Mənası',                    'Nümunə'],
        ['in front of',   'qarşısında / qabağında',    'trees in front of our school'],
        ['opposite',      'üzbəüz / qarşı-qarşıya',    'sitting opposite us'],
        ['across',        'o biri tərəfdə / eninə',    'My home is across the street.'],
        ['round/around',  'ətrafında / dövrəsində',    'We walked round the town.'],
        ['below',         'aşağıda / altında',         '20° below zero'],
        ['towards',       'tərəfə / sarı',             'driving towards the shore'],
      ],
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ our school" — məktəbin qarşısında?',             tr: 'in front of', wrong: 'opposite' },
    { en: '"sitting ___ us" — üzbəüz oturmaq?',                  tr: 'opposite',    wrong: 'across'   },
    { en: '"My home is ___ the street." — yolun o biri tərəfi?', tr: 'across',      wrong: 'opposite' },
    { en: '"walking ___ the town" — şəhər ətrafında dolaşmaq?',  tr: 'round',       wrong: 'across'   },
    { en: '"20° ___ zero" — sıfırdan aşağı?',                    tr: 'below',       wrong: 'under'    },
    { en: '"driving ___ the shore" — sahilə tərəf?',             tr: 'towards',     wrong: 'across'   },

    // ── Mini-check 2 ──────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"between" ilə "among" arasındakı fərq nədir?',
          options: [
            'İkisi eynidir',
            '"between" 2, "among" 3+ arasında',
            '"between" 3+, "among" 2 arasında',
            '"among" yalnız insanlara aiddir',
          ],
          answer: '"between" 2, "among" 3+ arasında',
        },
        {
          q: '"near" ilə "at" arasındakı fərq?',
          options: [
            '"near" kiçik, "at" böyük obyektlər',
            '"near" böyük, "at" kiçik obyektlər',
            'İkisi eynidir',
            '"at" yalnız zamanla işlənir',
          ],
          answer: '"near" böyük, "at" kiçik obyektlər',
        },
        {
          q: '"in the sun" — günəşin altında mənasında hansı sözön?',
          options: ['under', 'below', 'in', 'above'],
          answer: 'in',
        },
        {
          q: '"above" ilə "over" fərqi?',
          options: [
            '"above" üzərindən keçmə, "over" yalnız yuxarıda',
            '"above" yuxarıda, "over" üzərindən/üstündən/o tayında',
            'İkisi tamamilə eynidir',
            '"over" yalnız məsafə bildirir',
          ],
          answer: '"above" yuxarıda, "over" üzərindən/üstündən/o tayında',
        },
        {
          q: '"My home is ___ the street." — hansı sözön?',
          options: ['opposite', 'in front of', 'across', 'beside'],
          answer: 'across',
        },
      ],
    },
  ],
},

// ── Test 1 — in/on/at + Mövqe sözönləri (Bölmə 1-2) ──────
[
  // in — yer
  { en: '"___ the room"',                                        tr: 'in',          wrong: 'at'         },
  { en: '"___ the bag"',                                         tr: 'in',          wrong: 'on'         },
  { en: '"___ Azerbaijan"',                                      tr: 'in',          wrong: 'at'         },
  { en: '"___ hospital"',                                        tr: 'in',          wrong: 'at'         },
  { en: '"___ the sea"',                                         tr: 'in',          wrong: 'on'         },
  { en: '"___ the corner" (otağın küncdə)',                      tr: 'in',          wrong: 'at'         },
  { en: '"___ prison"',                                          tr: 'in',          wrong: 'at'         },
  { en: '"___ bed"',                                             tr: 'in',          wrong: 'on'         },
  // in — zaman
  { en: '"___ the morning"',                                     tr: 'in',          wrong: 'at'         },
  { en: '"___ May"',                                             tr: 'in',          wrong: 'on'         },
  { en: '"___ 1994"',                                            tr: 'in',          wrong: 'on'         },
  { en: '"___ spring"',                                          tr: 'in',          wrong: 'at'         },
  { en: '"___ two days"',                                        tr: 'in',          wrong: 'for'        },
  // on — yer
  { en: '"___ the table"',                                       tr: 'on',          wrong: 'in'         },
  { en: '"___ the wall"',                                        tr: 'on',          wrong: 'at'         },
  { en: '"___ TV"',                                              tr: 'on',          wrong: 'in'         },
  { en: '"___ the floor"',                                       tr: 'on',          wrong: 'in'         },
  { en: '"___ the map"',                                         tr: 'on',          wrong: 'at'         },
  { en: '"___ a bus"',                                           tr: 'on',          wrong: 'in'         },
  { en: '"___ the farm"',                                        tr: 'on',          wrong: 'in'         },
  { en: '"___ holiday"',                                         tr: 'on',          wrong: 'at'         },
  { en: '"___ sale"',                                            tr: 'on',          wrong: 'at'         },
  // on — zaman
  { en: '"___ Monday"',                                          tr: 'on',          wrong: 'in'         },
  { en: '"___ Friday morning"',                                  tr: 'on',          wrong: 'in'         },
  { en: '"___ the 4th of March"',                                tr: 'on',          wrong: 'in'         },
  { en: '"___ Christmas Day"',                                   tr: 'on',          wrong: 'at'         },
  // at — yer
  { en: '"___ home"',                                            tr: 'at',          wrong: 'in'         },
  { en: '"___ school"',                                          tr: 'at',          wrong: 'in'         },
  { en: '"___ the station"',                                     tr: 'at',          wrong: 'in'         },
  { en: '"___ the window"',                                      tr: 'at',          wrong: 'on'         },
  { en: '"___ the concert"',                                     tr: 'at',          wrong: 'in'         },
  { en: '"___ the traffic light"',                               tr: 'at',          wrong: 'on'         },
  { en: '"___ the corner of the street"',                        tr: 'at',          wrong: 'in'         },
  // at — zaman
  { en: '"___ 8 o\'clock"',                                      tr: 'at',          wrong: 'in'         },
  { en: '"___ night"',                                           tr: 'at',          wrong: 'in'         },
  { en: '"___ noon"',                                            tr: 'at',          wrong: 'in'         },
  { en: '"___ the weekend"',                                     tr: 'at',          wrong: 'on'         },
  { en: '"___ midnight"',                                        tr: 'at',          wrong: 'in'         },
  // Mövqe sözönləri
  { en: '"___ the table" — stolun altında?',                     tr: 'under',       wrong: 'below'      },
  { en: '"___ the river" — çayın üzərindən?',                    tr: 'over',        wrong: 'above'      },
  { en: '"___ the window" — pəncərənin yuxarısında?',            tr: 'above',       wrong: 'over'       },
  { en: '"___ the house" — evin arxasında?',                     tr: 'behind',      wrong: 'under'      },
  { en: '"___ the sofa and bookcase" — ikisinin arasında?',      tr: 'between',     wrong: 'among'      },
  { en: '"___ students" — çox şagird arasında?',                 tr: 'among',       wrong: 'between'    },
  { en: '"___ our school" — məktəbin qarşısında?',               tr: 'in front of', wrong: 'opposite'   },
  { en: '"sitting ___ us" — üzbəüz?',                            tr: 'opposite',    wrong: 'across'     },
  { en: '"___ the street" — yolun o biri tərəfi?',               tr: 'across',      wrong: 'opposite'   },
  { en: '"___ the town" — şəhər ətrafında?',                     tr: 'round',       wrong: 'across'     },
  { en: '"___ zero" — sıfırdan aşağı?',                          tr: 'below',       wrong: 'under'      },
  { en: '"driving ___ the shore" — sahilə tərəf?',               tr: 'towards',     wrong: 'across'     },
  // Fərq sualları
  { en: '"in the sun" — günəşin altında?',                       tr: 'in (not under)', wrong: 'under'   },
  { en: '"___ a car" (artikl ilə, fərdi nəqliyyat)',              tr: 'in',          wrong: 'on'         },
  { en: '"___ Christmas" ("day" yoxdur)',                         tr: 'at',          wrong: 'on'         },
  { en: '"near school" vs "___ the window" — kiçik obj. üçün?',  tr: 'at',          wrong: 'near'       },
],

{
      type: 'section_divider',
      title: 'İstiqamət bildirən sözönlər',
},
// ╔══════════════════════════════════════════════════════╗
// ║  QRUP 2 — İstiqamət · Mücərrəd əlaqə · Sabit ifadələr ║
// ╚══════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────┐
// │  BÖLMƏ 3 — İstiqamət bildirən sözönlər              │
// └──────────────────────────────────────────────────────┘

// ── Dərs 3.1 — to / into / from / out of ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — to / into / from / out of',
  cards: [

    {
      type: 'lesson',
      title: 'to / into / from / out of',
      content: '',
      table: [
        ['Sözön',    'Mənası',                          'Nümunə'],
        ['to',       '-a/-ə, tərəf, gilə',              'I go to London. / go to my friend.'],
        ['to',       'heç vaxt "home" ilə işlənmir',    'to go home (to go to home — yanlış)'],
        ['into',     'içinə / içərisinə (hərəkət)',     'Put books into your bag.'],
        ['from',     '-dan/-dən (ayrılma)',              'I come from school.'],
        ['out of',   'örtülü yerdən bayıra',            'out of the room — otaqdan çıxmaq'],
      ],
      tip:
        '"to" + yer → istiqamət bildirir.\n' +
        '"into" = bayırdan örtülü yerə hərəkət. "in" = içəridə olmaq (vəziyyət).\n' +
        '"out of" = örtülü yerdən bayıra hərəkət. "out" = bayırda olmaq (vəziyyət).',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"I go ___ London." — istiqamət?',                     tr: 'to',      wrong: 'into'  },
    { en: '"___ go home" — "home"dan əvvəl "to" işlənirmi?',    tr: 'Xeyr',    wrong: 'Bəli'  },
    { en: '"Put books ___ your bag." — çantanın içinə?',         tr: 'into',    wrong: 'in'    },
    { en: '"I come ___ school." — məktəbdən?',                   tr: 'from',    wrong: 'out of'},
    { en: '"___ the room" — otaqdan çıxmaq (hərəkət)?',         tr: 'out of',  wrong: 'from'  },
    { en: '"get ___ a car" — maşına minmək?',                    tr: 'into',    wrong: 'to'    },
  ],
},

// ── Dərs 3.2 — along / towards / up / down ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — along / towards / up / down',
  cards: [

    {
      type: 'lesson',
      title: 'along / towards / up / down',
      content: '',
      table: [
        ['Sözön',      'Mənası',                     'Nümunə'],
        ['along',      'boyunca / istiqamətdə',      'along the river — çay boyunca'],
        ['towards',    'tərəfə / sarı',              'driving towards the shore'],
        ['up',         'yuxarıya doğru / yaxınlaşma','up the stairs — pillə ilə yuxarı'],
        ['down',       'aşağıya olan hərəkət',       'to sit down · to fall down'],
      ],
      examples: [
        { word: 'Hurry up!',            az: 'Tələsin!' },
        { word: 'to get up',            az: 'yataqdan qalxmaq' },
        { word: 'to run up',            az: 'qiymətləri qaldırmaq / yaxınlaşmaq' },
        { word: 'to come up to smb.',   az: 'kiməsə yaxınlaşmaq' },
        { word: 'to write down',        az: 'köçürmək / yazmaq' },
        { word: 'to fall down',         az: 'yıxılmaq' },
        { word: 'to jump down',         az: 'aşağı tullanmaq' },
      ],
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ the river" — çay boyunca?',                      tr: 'along',    wrong: 'towards' },
    { en: '"driving ___ the shore" — sahilə sarı?',              tr: 'towards',  wrong: 'along'   },
    { en: '"___ the stairs" — pillə ilə yuxarı?',                tr: 'up',       wrong: 'down'    },
    { en: '"to sit ___" — əyləşmək?',                            tr: 'down',     wrong: 'up'      },
    { en: '"to get ___" — yataqdan qalxmaq?',                    tr: 'up',       wrong: 'down'    },
    { en: '"to write ___" — köçürmək?',                          tr: 'down',     wrong: 'up'      },

    // ── Mini-quiz 3 ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"to" sözönü "home" sözündən əvvəl işlənirmi?',
          options: ['Bəli, həmişə', 'Xeyr, heç vaxt', 'Bəzən', 'Yalnız gələcək zamanda'],
          answer: 'Xeyr, heç vaxt',
        },
        {
          q: '"into" ilə "in" arasındakı fərq?',
          options: [
            '"into" vəziyyət, "in" hərəkət',
            '"into" hərəkət (içinə), "in" vəziyyət (içəridə)',
            'İkisi eynidir',
            '"in" hərəkət bildirir',
          ],
          answer: '"into" hərəkət (içinə), "in" vəziyyət (içəridə)',
        },
        {
          q: '"along" nə mənasına gəlir?',
          options: ['tərəfə', 'arasında', 'boyunca', 'altında'],
          answer: 'boyunca',
        },
        {
          q: '"to come up to smb." nə deməkdir?',
          options: ['kimdənsə uzaqlaşmaq', 'kiməsə yaxınlaşmaq', 'kimsəyə baxmaq', 'kimdənsə soruşmaq'],
          answer: 'kiməsə yaxınlaşmaq',
        },
      ],
    },
  ],
},
{
      type: 'section_divider',
      title: 'Mücərrəd əlaqə: with/by/about/of/for… ',
},

// ┌──────────────────────────────────────────────────────┐
// │  BÖLMƏ 4 — Mücərrəd əlaqə: with/by/about/of/for… │
// └──────────────────────────────────────────────────────┘

// ── Dərs 4.1 — with / by / about ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — with / by / about',
  cards: [

    {
      type: 'lesson',
      title: 'with / by / about',
      content: '',
      table: [
        ['Sözön',   'Mənası',                              'Nümunə'],
        ['with',    'ilə / -la/-lə',                       'with my father — atamla'],
        ['with',    'cansız: alətlə',                      'to cut with a knife — bıçaqla kəsmək'],
        ['by',      'nəqliyyat vasitəsi ilə (artikl yox)', 'by bus · by car · by train'],
        ['by',      'yanında (artikl ilə)',                'by the car — maşının yanında'],
        ['by',      'tərəfindən (məchul)',                 'written by our teacher'],
        ['by',      'qədər (keçmiş bitmiş + vaxt)',        'by five o\'clock yesterday'],
        ['by',      'ilə (üsul)',                          'by heart · by hand · by chek'],
        ['about',   'haqqında / barəsində',                'about your friend'],
        ['about',   'təxminən',                            'about eight million'],
      ],
      tip:
        '"by + nəqliyyat" — aralarında artikl olmur: by bus (✓) · by a bus (✗).\n' +
        '"in a car/taxi" — artikl olarsa "in" işlənir.\n' +
        '"with" cansız isimlə: alət/vasitə bildirərkən.',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ my father" — atamla?',                           tr: 'with',    wrong: 'by'    },
    { en: '"___ bus" — avtobusla (artikl yox)?',                 tr: 'by',      wrong: 'on'    },
    { en: '"written ___ our teacher" — məchul?',                 tr: 'by',      wrong: 'with'  },
    { en: '"___ your friend" — dostun haqqında?',                tr: 'about',   wrong: 'of'    },
    { en: '"___ heart" — əzbərdən?',                             tr: 'by',      wrong: 'with'  },
    { en: '"___ eight million" — təxminən?',                     tr: 'about',   wrong: 'by'    },
    { en: '"to cut ___ a knife" — bıçaqla kəsmək?',             tr: 'with',    wrong: 'by'    },
    { en: '"___ five o\'clock yesterday" — keçmiş bitmiş + vaxt?', tr: 'by',   wrong: 'at'    },
  ],
},

// ── Dərs 4.2 — of / for / without / off ──────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.2 — of / for / without / off',
  cards: [

    {
      type: 'lesson',
      title: 'of / for / without / off',
      content: '',
      table: [
        ['Sözön',      'Mənası',                           'Nümunə'],
        ['of',         '-ın/-nin (yiyəlik)',               'the title of the film'],
        ['of',         'miqdar ifadəsi',                   'a cup of coffee · a loaf of bread'],
        ['for',        'üçün',                             'for you — sənin üçün'],
        ['for',        'müddət bildirir (bitmiş zaman)',   'for five years — beş ildir ki'],
        ['for',        'ilk/bir dəfə',                     'for the first time'],
        ['without',    '-sız/-siz (inkar)',                'without your help'],
        ['off',        'inkarlıq / əks məna fellər',       'put off · switch off · take off'],
      ],
      note:
        '"for + zaman" → bitmiş zaman tələb edir:\n' +
        'I have known him for five years.\n\n' +
        '"wait for" (isim) vs "wait to" (fel):\n' +
        'I\'m waiting for you. / I\'m waiting to see you.',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"the title ___ the film" — filmin adı?',              tr: 'of',       wrong: 'for'   },
    { en: '"a cup ___ coffee" — miqdar ifadəsi?',                tr: 'of',       wrong: 'for'   },
    { en: '"___ you" — sənin üçün?',                             tr: 'for',      wrong: 'of'    },
    { en: '"for five years" — hansı zaman işlənir?',             tr: 'Bitmiş',   wrong: 'Keçmiş'},
    { en: '"___ your help" — köməyin olmadan?',                  tr: 'without',  wrong: 'off'   },
    { en: '"to put ___" — söndürmək?',                           tr: 'off',      wrong: 'out'   },
    { en: '"to take ___" — soyunmaq?',                           tr: 'off',      wrong: 'out'   },
    { en: '"I\'m waiting ___ you." — şəxsə gözləmək (isim)?',   tr: 'for',      wrong: 'to'    },
  ],
},

// ── Dərs 4.3 — after / before / during / till / until ────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.3 — after / before / during / till / until',
  cards: [

    {
      type: 'lesson',
      title: 'after / before / during / while / till / until',
      content: '',
      table: [
        ['Sözön',    'Mənası',                            'Qeyd'],
        ['after',    'sonra',                             'after school · after dinner'],
        ['after',    'şərəfinə',                          'after the guests — qonaqların şərəfinə'],
        ['after',    'fel birləşmələri',                  'look after · take after · go on'],
        ['before',   'əvvəl / qabaq',                    'before lesson · before dinner'],
        ['during',   'ərzində (isim ilə)',                'during the lesson · during summer'],
        ['while',    'ərzində (cümlə ilə)',               'while + keçmiş davamedici zaman'],
        ['till/until','qədər / dək',                     'till evening · until Monday'],
      ],
      tip:
        '"during" özündən sonra isim tələb edir.\n' +
        '"while" özündən sonra tam cümlə tələb edir (fel var).\n' +
        '"the day after tomorrow" — birisigün.\n' +
        '"the day before yesterday" — sırağagün.',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"___ school" — məktəbdən sonra?',                     tr: 'after',    wrong: 'before' },
    { en: '"___ lesson" — dərsdən əvvəl?',                       tr: 'before',   wrong: 'after'  },
    { en: '"___ the lesson" — dərs ərzində (isim ilə)?',         tr: 'during',   wrong: 'while'  },
    { en: '"___ I was reading" — oxuyarkən (cümlə ilə)?',        tr: 'while',    wrong: 'during' },
    { en: '"___ evening" — axşamadək?',                          tr: 'till',     wrong: 'during' },
    { en: '"the day ___ tomorrow" — birisigün?',                 tr: 'after',    wrong: 'before' },
    { en: '"the day ___ yesterday" — sırağagün?',               tr: 'before',   wrong: 'after'  },
    { en: '"look ___" — qayğısına qalmaq?',                      tr: 'after',    wrong: 'before' },

    // ── Mini-quiz 4 ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"during" ilə "while" arasındakı fərq?',
          options: [
            'İkisi eynidir',
            '"during" isim, "while" cümlə (fel) tələb edir',
            '"while" isim, "during" cümlə tələb edir',
            '"during" yalnız keçmiş zamanda işlənir',
          ],
          answer: '"during" isim, "while" cümlə (fel) tələb edir',
        },
        {
          q: '"for five years" — hansı zaman forması ilə işlənir?',
          options: ['Keçmiş sadə', 'İndiki sadə', 'Bitmiş zaman', 'Gələcək zaman'],
          answer: 'Bitmiş zaman',
        },
        {
          q: '"by bus" ilə "in a car" arasındakı fərq?',
          options: [
            '"by" fərdi, "in" ictimai nəqliyyat',
            '"by" ictimai/ümumi, "in" artikl ilə fərdi nəqliyyat',
            'İkisi eynidir',
            '"in" həmişə nəqliyyat bildirir',
          ],
          answer: '"by" ictimai/ümumi, "in" artikl ilə fərdi nəqliyyat',
        },
        {
          q: '"I\'m waiting ___ you" vs "I\'m waiting ___ see you" — boşluqlar?',
          options: [
            'hər ikisi "for"',
            'hər ikisi "to"',
            '"for" (isim) / "to" (fel)',
            '"to" (isim) / "for" (fel)',
          ],
          answer: '"for" (isim) / "to" (fel)',
        },
        {
          q: '"the day before yesterday" nə deməkdir?',
          options: ['birisigün', 'sabah', 'sırağagün', 'bu gün'],
          answer: 'sırağagün',
        },
      ],
    },
  ],
},

{
      type: 'section_divider',
      title: 'Sabit ifadələr + Sözönü olmayan fellər',
},
// ┌──────────────────────────────────────────────────────┐
// │  BÖLMƏ 5 — Sabit ifadələr + Sözönü olmayan fellər   │
// └──────────────────────────────────────────────────────┘

// ── Dərs 5.1 — Sabit ifadələr siyahısı ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.1 — Sabit ifadələr siyahısı',
  cards: [

    {
      type: 'lesson',
      title: 'Əsas sabit ifadələr — I',
      content: '',
      table: [
        ['İfadə',                    'Azərbaycanca'],
        ['all over the world',       'bütün dünyada'],
        ['to be interested in',      'maraqlanmaq'],
        ['to depend on',             'asılı olmaq'],
        ['to look after',            'qayğısına qalmaq'],
        ['to take care of',          'qayğısına qalmaq'],
        ['to be afraid of',          'qorxmaq'],
        ['to fall in love with',     'vurulmaq'],
        ['to be good at smth',       'bir işdə bacarıqlı olmaq'],
        ['to arrive at',             'stansiyaya, partiyə çatmaq'],
        ['to arrive in',             'şəhərə çatmaq'],
        ['to be in a hurry',         'tələsmək'],
        ['to be busy with/in',       'məşğul olmaq'],
        ['to be tired of',           'yorulmaq'],
        ['to be pleased with',       'razı qalmaq'],
        ['to be devoted to',         'həsr olunmaq'],
        ['to be famous for',         'nə iləsə məşhur olmaq'],
        ['to be grateful to smb.',   'minnətdar olmaq'],
        ['to belong to',             'məxsus olmaq / aid olmaq'],
        ['by heart',                 'əzbərdən'],
        ['by hand',                  'əllə'],
        ['by the way',               'yeri gəlmişkən'],
        ['in time',                  'vaxtında'],
        ['in short',                 'qısası'],
        ['at once',                  'dərhal'],
        ['at last',                  'nəhayət'],
        ['at least',                 'heç olmasa'],
        ['at present',               'hal-hazırda'],
        ['at first',                 'əvvəlcə'],
      ],
    },

    // ── Dərs-içi quiz: sabit ifadələr I ──────────────────
    { en: '"to be interested ___" — maraqlanmaq?',               tr: 'in',      wrong: 'at'   },
    { en: '"to depend ___" — asılı olmaq?',                      tr: 'on',      wrong: 'of'   },
    { en: '"to be afraid ___" — qorxmaq?',                       tr: 'of',      wrong: 'from' },
    { en: '"to be good ___ smth" — bacarıqlı olmaq?',            tr: 'at',      wrong: 'in'   },
    { en: '"to arrive ___ the city" — şəhərə çatmaq?',          tr: 'in',      wrong: 'at'   },
    { en: '"to arrive ___ the station" — stansiyaya çatmaq?',   tr: 'at',      wrong: 'in'   },
    { en: '"___ heart" — əzbərdən?',                             tr: 'by',      wrong: 'in'   },
    { en: '"___ time" — vaxtında?',                              tr: 'in',      wrong: 'at'   },
    { en: '"___ last" — nəhayət?',                               tr: 'at',      wrong: 'in'   },
    { en: '"___ once" — dərhal?',                                tr: 'at',      wrong: 'in'   },

    {
      type: 'lesson',
      title: 'Əsas sabit ifadələr — II',
      content: '',
      table: [
        ['İfadə',                      'Azərbaycanca'],
        ['to look for',                'axtarmaq'],
        ['to look at',                 'baxmaq'],
        ['to look like',               'bənzəmək (zahirən)'],
        ['to take after',              'bənzəmək (xarakterinə)'],
        ['to laugh at',                'gülmək'],
        ['to smile at',                'gülümsəmək'],
        ['to shout at',                'üstünə qışqırmaq'],
        ['to throw at',                'atmaq (daş, gül)'],
        ['to speak to/about',          'danışmaq'],
        ['to talk about',              'haqqında söhbət etmək'],
        ['to listen to',               'qulaq asmaq'],
        ['to write to smb.',           'kiməsə yazmaq'],
        ['to pay attention to',        'diqqət vermək'],
        ['to prefer smth to smth',     'üstün tutmaq'],
        ['to wait for',                'gözləmək (isim)'],
        ['to ask for',                 'xahiş etmək'],
        ['to thank smb for smth',      'təşəkkür etmək'],
        ['to be late for',             'gecikmək'],
        ['to be ready for',            'hazır olmaq'],
        ['to be sorry for',            'peşman olmaq'],
        ['to go for a walk',           'gəzməyə getmək'],
        ['to think of',                'fikirləşmək'],
        ['to be made of',              'nədənsə hazırlanmaq'],
        ['to be full of',              'dolu olmaq'],
        ['to agree with',              'razılaşmaq'],
        ['to be angry with smb.',      'kiməsə acıqlanmaq'],
        ['to be angry at smth',        'nəyə isə acıqlanmaq'],
        ['to take part in',            'iştirak etmək'],
        ['to move to',                 'köçmək'],
        ['to fall in love with',       'vurulmaq'],
        ['to shake hands with',        'əlini sıxmaq'],
        ['to spend money on smth',     'bir şeyə pul xərcləmək'],
        ['to get into trouble',        'falakətə düçar olmaq'],
        ['instead of',                 'əvəzinə / yerinə'],
        ['on the right/left',          'sağda / solda'],
        ['on business',                'iş üçün'],
        ['on my return',               'mən qayıdanda'],
        ['in honour of somebody',      'kiminsə şərəfinə'],
        ['a number of + cəm isim',     'bir neçə (fel cəm)'],
        ['the number of + cəm isim',   'sayı (fel tək)'],
      ],
    },

    // ── Dərs-içi quiz: sabit ifadələr II ─────────────────
    { en: '"to look ___" — axtarmaq?',                           tr: 'for',     wrong: 'at'   },
    { en: '"to look ___" — baxmaq?',                             tr: 'at',      wrong: 'for'  },
    { en: '"to look ___" — bənzəmək (zahirən)?',                 tr: 'like',    wrong: 'after'},
    { en: '"to take ___" — bənzəmək (xarakter)?',               tr: 'after',   wrong: 'like' },
    { en: '"to laugh ___" — gülmək?',                            tr: 'at',      wrong: 'about'},
    { en: '"to listen ___" — qulaq asmaq?',                      tr: 'to',      wrong: 'at'   },
    { en: '"to wait ___ you" — sənə gözləmək (isim)?',           tr: 'for',     wrong: 'to'   },
    { en: '"to agree ___" — razılaşmaq?',                        tr: 'with',    wrong: 'to'   },
    { en: '"to take part ___" — iştirak etmək?',                 tr: 'in',      wrong: 'at'   },
    { en: '"to think ___" — fikirləşmək?',                       tr: 'of',      wrong: 'about'},
  ],
},

// ── Dərs 5.2 — Sözönü almayan fellər ─────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.2 — Sözönü almayan fellər',
  cards: [

    {
      type: 'lesson',
      title: 'Sözönü olmayan fellər — heç vaxt sözönü almırlar',
      content:
        'Aşağıdakı fellər bilavasitə tamamlıq alır — heç vaxt sözönü ' +
        'işlənmir. Azərbaycan dilindəki qarşılıqlarına baxmayaraq, ingilis ' +
        'dilindəki bu fellər sözönüsüz işlənir.',
      table: [
        ['Fel',       'Azərbaycanca',           'Yanlış forma'],
        ['to address','müraciət etmək',         'address to (✗)'],
        ['to reach',  'çatmaq',                 'reach to (✗)'],
        ['to catch',  'tutmaq / yetişmək',      'catch to (✗)'],
        ['to watch',  'seyr etmək / baxmaq',    'watch at (✗)'],
        ['to enter',  'içəri keçmək / girmək',  'enter into (✗)'],
        ['to learn',  'öyrənmək',               'learn about (✗)'],
        ['to visit',  'ziyarət etmək',          'visit to (✗)'],
        ['to approach','yaxınlaşmaq',           'approach to (✗)'],
        ['to meet',   'görüşmək / tanış olmaq', 'meet with (✗)'],
      ],
      tip:
        'X enter to the room → Enter the room (✓)\n' +
        'X He visited to London → He visited London (✓)\n' +
        'X She approached to him → She approached him (✓)',
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"He ___ the room." — içəri girdi (sözönü işlənirmi?)', tr: 'entered (sözönü yox)', wrong: 'entered into' },
    { en: '"She ___ London." — ziyarət etdi?',                   tr: 'visited (sözön yox)',  wrong: 'visited to'   },
    { en: '"He ___ him." — yaxınlaşdı?',                         tr: 'approached (sözön yox)', wrong: 'approached to' },
    { en: '"to watch" felindən sonra sözön işlənirmi?',          tr: 'Xeyr',                 wrong: 'Bəli ("at")' },
    { en: '"to meet" felindən sonra "with" işlənirmi?',          tr: 'Xeyr',                 wrong: 'Bəli'         },
    { en: '"to reach" felindən sonra "to" işlənirmi?',           tr: 'Xeyr',                 wrong: 'Bəli'         },
  ],
},

// ── Dərs 5.3 — Mənasını dəyişdirən fel+sözönü birləşmələri ──
{
  type: 'grammar_lesson',
  title: 'Dərs 5.3 — Mənasını dəyişdirən fel+sözönü birləşmələri',
  cards: [

    {
      type: 'lesson',
      title: 'Fel + sözönü — mənası dəyişən birləşmələr',
      content: 'Sözönü feldən sonra gəldikdə felin mənasını tamamilə dəyişdirir:',
      table: [
        ['Birləşmə',          'Azərbaycanca'],
        ['look at',           'baxmaq'],
        ['look for',          'axtarmaq'],
        ['look after',        'qayğısına qalmaq'],
        ['look like',         'bənzəmək (zahirən)'],
        ['take after',        'bənzəmək (xarakter)'],
        ['take off',          'soyunmaq / qalxmaq (təyyarə)'],
        ['take part in',      'iştirak etmək'],
        ['take care of',      'qayğısına qalmaq'],
        ['put on',            'geyinmək'],
        ['put off',           'söndürmək / təxirə salmaq'],
        ['get on',            'minmək / yaxşı keçinmək'],
        ['get off / out of',  'düşmək'],
        ['get into',          'minmək (maşına)'],
        ['get up',            'yataqdan qalxmaq'],
        ['switch on/turn on', 'yandırmaq'],
        ['switch off/turn off','söndürmək'],
        ['go on',             'davam etmək'],
        ['run off',           'qaçıb uzaqlaşmaq'],
        ['depend on',         'asılı olmaq'],
        ['to try on',         'geyib baxmaq'],
        ['to go for a walk',  'gəzməyə getmək'],
        ['to leave for',      'harasa yola düşmək'],
      ],
    },

    // ── Dərs-içi quiz ─────────────────────────────────────
    { en: '"look at/for/after" — hansı mənası axtarmaqdır?',     tr: 'look for',   wrong: 'look at'   },
    { en: '"put on" nə deməkdir?',                               tr: 'geyinmək',   wrong: 'söndürmək' },
    { en: '"put off" nə deməkdir?',                              tr: 'söndürmək / təxirə salmaq', wrong: 'geyinmək' },
    { en: '"get up" nə deməkdir?',                               tr: 'yataqdan qalxmaq', wrong: 'minmək' },
    { en: '"go on" nə deməkdir?',                                tr: 'davam etmək', wrong: 'getmək'   },
    { en: '"switch on" nə deməkdir?',                            tr: 'yandırmaq',  wrong: 'söndürmək' },
    { en: '"switch off" nə deməkdir?',                           tr: 'söndürmək',  wrong: 'yandırmaq' },
    { en: '"take off" nə deməkdir?',                             tr: 'soyunmaq / qalxmaq', wrong: 'geyinmək' },

    // ── Mini-quiz 5 ───────────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"look at" ilə "look for" arasındakı fərq?',
          options: [
            '"look at" axtarmaq, "look for" baxmaq',
            '"look at" baxmaq, "look for" axtarmaq',
            'İkisi eynidir',
            '"look for" qayğısına qalmaq',
          ],
          answer: '"look at" baxmaq, "look for" axtarmaq',
        },
        {
          q: '"to enter" felindən sonra sözön işlənirmi?',
          options: ['Bəli, "into"', 'Bəli, "in"', 'Xeyr, sözönsüz', 'Bəzən "to"'],
          answer: 'Xeyr, sözönsüz',
        },
        {
          q: '"a number of books" — fel necə olur?',
          options: ['tək', 'cəm', 'hər ikisi olar', 'yalnız keçmiş'],
          answer: 'cəm',
        },
        {
          q: '"the number of books" — fel necə olur?',
          options: ['cəm', 'tək', 'hər ikisi olar', 'yalnız indiki'],
          answer: 'tək',
        },
        {
          q: '"to be angry ___ smb." — kiməsə acıqlanmaq?',
          options: ['at', 'on', 'with', 'about'],
          answer: 'with',
        },
        {
          q: '"to be angry ___ smth" — nəyə isə acıqlanmaq?',
          options: ['with', 'on', 'about', 'at'],
          answer: 'at',
        },
      ],
    },
  ],
},

// ── Test 2 — İstiqamət + Mücərrəd + Sabit ifadələr (Bölmə 3–5) ──
[
  // İstiqamət — to / into / from / out of
  { en: '"I go ___ London." — istiqamət?',                       tr: 'to',        wrong: 'into'    },
  { en: '"go ___ home" — "to" işlənirmi?',                       tr: 'Xeyr',      wrong: 'Bəli'    },
  { en: '"put books ___ your bag" — içinə (hərəkət)?',           tr: 'into',      wrong: 'in'      },
  { en: '"I come ___ school." — məktəbdən?',                     tr: 'from',      wrong: 'out of'  },
  { en: '"get ___ a car" — maşına minmək?',                      tr: 'into',      wrong: 'on'      },
  { en: '"___ the room" — otaqdan çıxmaq?',                      tr: 'out of',    wrong: 'from'    },
  // Along / towards / up / down
  { en: '"___ the river" — çay boyunca?',                        tr: 'along',     wrong: 'towards' },
  { en: '"driving ___ the shore" — sarı?',                       tr: 'towards',   wrong: 'along'   },
  { en: '"___ the stairs" — yuxarı?',                            tr: 'up',        wrong: 'down'    },
  { en: '"to sit ___" — əyləşmək?',                              tr: 'down',      wrong: 'up'      },
  { en: '"to write ___" — köçürmək?',                            tr: 'down',      wrong: 'up'      },
  { en: '"to come ___ to smb." — yaxınlaşmaq?',                  tr: 'up',        wrong: 'down'    },
  // with / by / about
  { en: '"___ my father" — atamla?',                             tr: 'with',      wrong: 'by'      },
  { en: '"___ bus" — avtobusla (artikl yox)?',                   tr: 'by',        wrong: 'on'      },
  { en: '"written ___ our teacher" — məchul?',                   tr: 'by',        wrong: 'with'    },
  { en: '"___ eight million" — təxminən?',                       tr: 'about',     wrong: 'by'      },
  { en: '"___ heart" — əzbərdən?',                               tr: 'by',        wrong: 'in'      },
  { en: '"to cut ___ a knife" — bıçaqla?',                       tr: 'with',      wrong: 'by'      },
  { en: '"___ five o\'clock yesterday" — keçmiş bitmiş + vaxt?', tr: 'by',       wrong: 'at'      },
  // of / for / without / off
  { en: '"the title ___ the film" — yiyəlik?',                   tr: 'of',        wrong: 'for'     },
  { en: '"a cup ___ coffee" — miqdar?',                          tr: 'of',        wrong: 'for'     },
  { en: '"___ you" — sənin üçün?',                               tr: 'for',       wrong: 'of'      },
  { en: '"I have known him ___ five years." — müddət?',           tr: 'for',       wrong: 'since'   },
  { en: '"___ your help" — köməyin olmadan?',                     tr: 'without',   wrong: 'off'     },
  { en: '"to switch ___" — söndürmək?',                           tr: 'off',       wrong: 'out'     },
  // after / before / during / while / till
  { en: '"___ school" — məktəbdən sonra?',                       tr: 'after',     wrong: 'before'  },
  { en: '"___ lesson" — dərsdən əvvəl?',                         tr: 'before',    wrong: 'after'   },
  { en: '"___ the lesson" — dərs ərzində (isim)?',               tr: 'during',    wrong: 'while'   },
  { en: '"___ I was reading" — oxuyarkən (cümlə)?',              tr: 'while',     wrong: 'during'  },
  { en: '"___ evening" — axşamadək?',                             tr: 'till',      wrong: 'until'   },
  { en: '"the day ___ tomorrow" — birisigün?',                    tr: 'after',     wrong: 'before'  },
  { en: '"the day ___ yesterday" — sırağagün?',                  tr: 'before',    wrong: 'after'   },
  // Sabit ifadələr
  { en: '"to be interested ___" — maraqlanmaq?',                 tr: 'in',        wrong: 'at'      },
  { en: '"to depend ___" — asılı olmaq?',                        tr: 'on',        wrong: 'of'      },
  { en: '"to be afraid ___" — qorxmaq?',                         tr: 'of',        wrong: 'from'    },
  { en: '"to arrive ___ the city" — şəhərə?',                    tr: 'in',        wrong: 'at'      },
  { en: '"to arrive ___ the station" — stansiyaya?',             tr: 'at',        wrong: 'in'      },
  { en: '"to look ___ " — axtarmaq?',                             tr: 'for',       wrong: 'at'      },
  { en: '"to look ___" — baxmaq?',                               tr: 'at',        wrong: 'for'     },
  { en: '"to look ___" — qayğısına qalmaq?',                     tr: 'after',     wrong: 'for'     },
  { en: '"to laugh ___" — gülmək?',                              tr: 'at',        wrong: 'about'   },
  { en: '"to listen ___" — qulaq asmaq?',                        tr: 'to',        wrong: 'at'      },
  { en: '"to agree ___" — razılaşmaq?',                           tr: 'with',      wrong: 'to'      },
  { en: '"to take part ___" — iştirak etmək?',                   tr: 'in',        wrong: 'at'      },
  { en: '"to think ___" — fikirləşmək?',                         tr: 'of',        wrong: 'about'   },
  { en: '"to be made ___" — nədənsə hazırlanmaq?',               tr: 'of',        wrong: 'from'    },
  { en: '"to be full ___" — dolu olmaq?',                        tr: 'of',        wrong: 'with'    },
  { en: '"to spend money ___" — pul xərcləmək?',                 tr: 'on',        wrong: 'for'     },
  // Sözönsüz fellər
  { en: '"He ___ the room." — girmək (sözönsüz)?',               tr: 'entered',   wrong: 'entered into' },
  { en: '"She ___ London." — ziyarət (sözönsüz)?',               tr: 'visited',   wrong: 'visited to'   },
  { en: '"to approach" felindən sonra "to" işlənirmi?',          tr: 'Xeyr',      wrong: 'Bəli'    },
  { en: '"to watch" felindən sonra sözön işlənirmi?',            tr: 'Xeyr',      wrong: 'Bəli ("at")' },
  // Fel+sözön birləşmələri
  { en: '"put on" nə deməkdir?',                                  tr: 'geyinmək',  wrong: 'söndürmək'},
  { en: '"put off" nə deməkdir?',                                 tr: 'söndürmək', wrong: 'geyinmək'},
  { en: '"go on" nə deməkdir?',                                   tr: 'davam etmək', wrong: 'getmək'},
  { en: '"switch on" nə deməkdir?',                               tr: 'yandırmaq', wrong: 'söndürmək'},
  { en: '"take off" nə deməkdir?',                                tr: 'soyunmaq / qalxmaq', wrong: 'geyinmək'},
  // a/the number of
  { en: '"a number of books" — fel necə?',                        tr: 'cəm',       wrong: 'tək'     },
  { en: '"the number of books" — fel necə?',                      tr: 'tək',       wrong: 'cəm'     },
],

{
      type: 'section_divider',
      title: 'PREPOSİTİONS - ÜMUMİ İMTAHAN',
},
      
// ── Final Test — Sözönlər (Prepositions) tam test ─────────
[
  // in — yer (seçmə)
    { en: '"___ five years" — müddət (bitmiş zaman)?',              tr: 'for',          wrong: 'since'       },
  { en: '"___ the morning"',                                       tr: 'in',           wrong: 'at'          },
  { en: '"to depend ___"',                                         tr: 'on',           wrong: 'of'          },
  { en: '"___ the table" — stolun altında?',                       tr: 'under',        wrong: 'below'       },
  { en: '"___ Monday"',                                            tr: 'on',           wrong: 'in'          },
  { en: '"a number of books" — fel?',                              tr: 'cəm',          wrong: 'tək'         },
  { en: '"___ home"',                                              tr: 'at',           wrong: 'in'          },
  { en: '"put books ___ your bag" — içinə?',                       tr: 'into',         wrong: 'in'          },
  { en: '"go ___ home" — "to" işlənirmi?',                        tr: 'Xeyr',         wrong: 'Bəli'        },
  { en: '"___ the river" — çayın üzərindən?',                     tr: 'over',         wrong: 'above'       },
  { en: '"___ Azerbaijan"',                                        tr: 'in',           wrong: 'at'          },
  { en: '"to visit" — sözönsüz?',                                  tr: 'Bəli',         wrong: 'Xeyr'        },
  { en: '"___ the lesson" — dərs ərzində (isim)?',                 tr: 'during',       wrong: 'while'       },
  { en: '"___ night"',                                             tr: 'at',           wrong: 'in'          },
  { en: '"to be made ___"',                                        tr: 'of',           wrong: 'from'        },
  { en: '"___ the wall"',                                          tr: 'on',           wrong: 'at'          },
  { en: '"go on" nə deməkdir?',                                    tr: 'davam etmək',  wrong: 'getmək'      },
  { en: '"___ school"',                                            tr: 'at',           wrong: 'in'          },
  { en: '"___ bed"',                                               tr: 'in',           wrong: 'on'          },
  { en: '"the number of books" — fel?',                            tr: 'tək',          wrong: 'cəm'         },
  { en: '"___ students" — çox şagird arasında?',                   tr: 'among',        wrong: 'between'     },
  { en: '"___ noon"',                                              tr: 'at',           wrong: 'in'          },
  { en: '"to arrive ___ the station"',                             tr: 'at',           wrong: 'in'          },
  { en: '"___ the sky"',                                           tr: 'in',           wrong: 'on'          },
  { en: '"switch on" nə deməkdir?',                                tr: 'yandırmaq',    wrong: 'söndürmək'   },
  { en: '"___ the concert"',                                       tr: 'at',           wrong: 'in'          },
  { en: '"___ a car" (artikl ilə, fərdi)',                         tr: 'in',           wrong: 'on'          },
  { en: '"___ bus" — avtobusla (artikl yox)?',                     tr: 'by',           wrong: 'on'          },
  { en: '"___ the room" — otaqdan çıxmaq?',                        tr: 'out of',       wrong: 'from'        },
  { en: '"to watch at" — düzdür?',                                 tr: 'Xeyr',         wrong: 'Bəli'        },
  { en: '"___ spring"',                                            tr: 'in',           wrong: 'at'          },
  { en: '"to look ___ " — axtarmaq?',                              tr: 'for',          wrong: 'at'          },
  { en: '"___ the station"',                                       tr: 'at',           wrong: 'in'          },
  { en: '"I go ___ London."',                                      tr: 'to',           wrong: 'into'        },
  { en: '"put on" nə deməkdir?',                                   tr: 'geyinmək',     wrong: 'söndürmək'   },
  { en: '"___ Friday morning"',                                    tr: 'on',           wrong: 'in'          },
  { en: '"___ heart" — əzbərdən?',                                 tr: 'by',           wrong: 'in'          },
  { en: '"to agree ___"',                                          tr: 'with',         wrong: 'to'          },
  { en: '"___ your help" — köməyin olmadan?',                      tr: 'without',      wrong: 'off'         },
  { en: '"to laugh ___"',                                          tr: 'at',           wrong: 'about'       },
  { en: '"___ May"',                                               tr: 'in',           wrong: 'on'          },
  { en: '"to be afraid ___"',                                      tr: 'of',           wrong: 'from'        },
  { en: '"___ the river" — boyunca?',                              tr: 'along',        wrong: 'towards'     },
  { en: '"___ the 4th of March"',                                  tr: 'on',           wrong: 'in'          },
  { en: '"written ___ our teacher" — məchul?',                     tr: 'by',           wrong: 'with'        },
  { en: '"___ the table"',                                         tr: 'on',           wrong: 'in'          },
  { en: '"___ hospital"',                                          tr: 'in',           wrong: 'at'          },
  { en: '"to spend money ___"',                                    tr: 'on',           wrong: 'for'         },
  { en: '"___ the weekend"',                                       tr: 'at',           wrong: 'on'          },
  { en: '"___ the window" — pəncərənin yuxarısında?',              tr: 'above',        wrong: 'over'        },
  { en: '"___ I was reading" — oxuyarkən (cümlə)?',               tr: 'while',        wrong: 'during'      },
  { en: '"___ the map"',                                           tr: 'on',           wrong: 'at'          },
  { en: '"to be interested ___"',                                  tr: 'in',           wrong: 'at'          },
  { en: '"to get ___" — yataqdan qalxmaq?',                        tr: 'up',           wrong: 'down'        },
  { en: '"___ zero" — sıfırdan aşağı?',                            tr: 'below',        wrong: 'under'       },
  { en: '"___ the house" — arxasında?',                            tr: 'behind',       wrong: 'under'       },
  { en: '"a cup ___ coffee"',                                      tr: 'of',           wrong: 'for'         },
  { en: '"___ the sofa and bookcase" — 2 əşyanın arasında?',       tr: 'between',      wrong: 'among'       },
  { en: '"___ you" — sənin üçün?',                                 tr: 'for',          wrong: 'of'          },
  { en: '"to listen ___"',                                         tr: 'to',           wrong: 'at'          },
  { en: '"___ sale"',                                              tr: 'on',           wrong: 'at'          },
  { en: '"___ my father" — atamla?',                               tr: 'with',         wrong: 'by'          },
  { en: '"___ our school" — qarşısında?',                          tr: 'in front of',  wrong: 'opposite'    },
  { en: '"___ 1994"',                                              tr: 'in',           wrong: 'on'          },
  { en: '"___ Christmas Day"',                                     tr: 'on',           wrong: 'at'          },
  { en: '"I come ___ school."',                                    tr: 'from',         wrong: 'out of'      },
  { en: '"the day ___ tomorrow" — birisigün?',                     tr: 'after',        wrong: 'before'      },
  { en: '"to enter" — sözönsüz?',                                  tr: 'Bəli',         wrong: 'Xeyr'        },
  { en: '"to take part ___"',                                      tr: 'in',           wrong: 'at'          },
  { en: '"___ TV"',                                                tr: 'on',           wrong: 'in'          },
  { en: '"sitting ___ us" — üzbəüz?',                              tr: 'opposite',     wrong: 'across'      },
  { en: '"___ a bus"',                                             tr: 'on',           wrong: 'in'          },
  { en: '"___ the corner of the street"',                          tr: 'at',           wrong: 'in'          },
  { en: '"to be full ___"',                                        tr: 'of',           wrong: 'with'        },
  { en: '"to approach to" — düzdür?',                              tr: 'Xeyr',         wrong: 'Bəli'        },
  { en: '"___ two days"',                                          tr: 'in',           wrong: 'for'         },
  { en: '"put off" nə deməkdir?',                                  tr: 'söndürmək',    wrong: 'geyinmək'    },
  { en: '"___ the street" — o biri tərəfdə?',                      tr: 'across',       wrong: 'opposite'    },
  { en: '"to sit ___" — əyləşmək?',                               tr: 'down',         wrong: 'up'          },
  { en: '"___ the room"',                                          tr: 'in',           wrong: 'at'          },
  { en: '"the day ___ yesterday" — sırağagün?',                    tr: 'before',       wrong: 'after'       },
  { en: '"to arrive ___ the city"',                                tr: 'in',           wrong: 'at'          },
  { en: '"to look ___" — qayğısına qalmaq?',                       tr: 'after',        wrong: 'for'         },
  { en: '"take off" nə deməkdir?',                                 tr: 'soyunmaq',     wrong: 'geyinmək'    },
],
  ],
};

// ── 12. ADVERB (ZƏRF) ───────────────────────────────────────
const ADVERB_LEVEL = {
  id: 'adverb',
  name: 'ADVERB — ZƏRF',
  icon: '<i class="ti ti-bolt"></i>',
  color: '#e879f9',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  ADVERB — Tam bölüm                                   ║
// ══════════════════════════════════════════════════════════

      {
      type: 'section_divider',
      title: 'Zərfin əsasları',
},

// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 1 — Zərfin əsasları  (What is an adverb?)    │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 1.1 — Zərf nədir? Tərif + mənaya görə növlər ───
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Zərf nədir?',
  cards: [

    {
      type: 'lesson',
      title: 'Zərfin tərifi',
      content:
        'Zərf — hərəkətin əlamətini və ya hərəkətin hansı şəraitdə, nə halda, ' +
        'harada, necə, nə zaman icra olunduğunu bildirən nitq hissəsidir.\n\n' +
        'Zərf cümlədə əsasən felə aid olur.\n\n' +
        'Nümunələr:\n' +
        '• She came yesterday. — O dünən gəldi.\n' +
        '• Ali speaks well. — Əli yaxşı danışır.',
      table: [
        ['Sual',     'Mənası',              'Nümunə'],
        ['Necə?',    'Tərzi-hərəkət',       'quickly, well, fast'],
        ['Harada?',  'Yer',                 'here, there, inside'],
        ['Nə zaman?','Zaman',               'today, soon, before'],
        ['Nə qədər?','Dərəcə / ölçü',       'very, almost, enough'],
        ['Nə üçün?', 'Səbəb / nəticə',      'therefore, accordingly'],
        ['Nə qədər tez-tez?', 'Təkrar',     'often, seldom, sometimes'],
      ],
    },

    {
      type: 'lesson',
      title: 'Zərfin 6 mənaca növü',
      content: 'Mənalarına görə zərflər 6 qrupa bölünür:',
      table: [
        ['#', 'Növ',                        'Nümunələr'],
        ['1', 'Zaman zərfləri',             'today, tomorrow, before, after, still, yet, soon, once'],
        ['2', 'Yer zərfləri',               'here, there, inside, outside, downstairs, upstairs, homeward'],
        ['3', 'Səbəb-nəticə zərfləri',      'therefore, consequently, accordingly'],
        ['4', 'Tərzi-hərəkət zərfləri',     'daily, always, usually, quickly, fast, hard'],
        ['5', 'Təkrar zərfləri',            'often, seldom, sometimes, scarcely'],
        ['6', 'Dərəcə-ölçü zərfləri',       'nearly, almost, hardly, much, very, enough, little, too'],
      ],
      tip: '"therefore" — ona görə, onun üçün\n"consequently" — nəticə olaraq\n"accordingly" — ona görə, əsasən\n"scarcely" — güclə, çətinliklə',
    },

    { en: 'Zərf cümlədə əsasən nəyə aid olur?',                       tr: 'Felə',                  wrong: 'İsmə'               },
    { en: '"today, tomorrow, before, after" — hansı növ zərflərdir?',  tr: 'Zaman zərfləri',        wrong: 'Yer zərfləri'       },
    { en: '"here, there, inside, outside" — hansı növ zərflərdir?',   tr: 'Yer zərfləri',          wrong: 'Zaman zərfləri'     },
    { en: '"therefore, consequently" — hansı növ zərflərdir?',        tr: 'Səbəb-nəticə zərfləri', wrong: 'Dərəcə zərfləri'   },
    { en: '"often, seldom, sometimes" — hansı növ zərflərdir?',       tr: 'Təkrar zərfləri',       wrong: 'Tərzi-hərəkət'      },
    { en: '"very, almost, enough, too" — hansı növ zərflərdir?',      tr: 'Dərəcə-ölçü zərfləri', wrong: 'Təkrar zərfləri'    },
    { en: '"quickly, fast, hard, well" — hansı növ zərflərdir?',      tr: 'Tərzi-hərəkət zərfləri', wrong: 'Zaman zərfləri'  },
    { en: '"scarcely" nə mənasını verir?',                             tr: 'Güclə, çətinliklə',     wrong: 'Tez-tez'            },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She came yesterday." — "yesterday" hansı növ zərfdir?',
          options: ['Yer zərfi', 'Zaman zərfi', 'Tərzi-hərəkət', 'Dərəcə'],
          answer: 'Zaman zərfi',
        },
        {
          q: '"He works very hard." — "very" hansı növ zərfdir?',
          options: ['Zaman', 'Yer', 'Dərəcə-ölçü', 'Təkrar'],
          answer: 'Dərəcə-ölçü',
        },
        {
          q: 'Zərf cümlədə əsasən nəyə aid olur?',
          options: ['İsmə', 'Sifətə', 'Felə', 'Əvəzliyə'],
          answer: 'Felə',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Quruluşca növlər: Sadə · Düzəltmə · Mürəkkəb ──
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Quruluşca növlər',
  cards: [

    {
      type: 'lesson',
      title: 'Zərfin quruluşca 3 növü',
      content: 'Zərflər quruluşca 3 növə bölünür:',
      table: [
        ['Növ',         'İzah',                              'Nümunələr'],
        ['Sadə',        'Kök şəklindədir',                   'here, there, fast, hard, well'],
        ['Düzəltmə',    'Şəkilçi artırmaqla düzəlir',        'quickly, homeward, slowly, nicely'],
        ['Mürəkkəb',    'İki sözdən birləşir',               'sometimes, somewhere, anyhow, anywhere'],
      ],
      tip: 'Zərflər əsasən sifətin üzərinə "-ly" artırmaqla düzəlir:\nslow → slowly\nnice → nicely\nquick → quickly',
    },

    {
      type: 'lesson',
      title: 'Həm sifət, həm zərf olan sözlər',
      content:
        'Bəzi sözlər həm sifət, həm də zərf kimi işlənə bilər:\n' +
        'hard, fast, early, late, near, short, far, straight, big, long\n\n' +
        'Qayda:\n' +
        '• İsimdən əvvəl gəlsə → sifət\n' +
        '• Feldən sonra işlənsə → zərf',
      table: [
        ['Söz',   'Sifət (isimdən əvvəl)',      'Zərf (feldən sonra)'],
        ['hard',  'hard work — çətin iş',        'He works hard. — o çox işləyir'],
        ['fast',  'fast car — sürətli maşın',    'She runs fast. — o sürətli qaçır'],
        ['early', 'early morning — erkən səhər', 'Come early. — erkən gəl'],
        ['late',  'late arrival — gec gəliş',    'He came late. — o gec gəldi'],
      ],
      tip: 'Diqqət: "hardly, nearly, lately" — yalnız zərfdir, sifət deyil!\n• hardly — güclə, çətinliklə\n• nearly — demək olar ki\n• lately — son zamanlar',
    },

    { en: '"here, there, fast, hard" — quruluşca hansı növ zərflərdir?', tr: 'Sadə zərflər',       wrong: 'Düzəltmə zərflər'   },
    { en: '"quickly, homeward, slowly" — quruluşca hansı növ?',          tr: 'Düzəltmə zərflər',  wrong: 'Mürəkkəb zərflər'   },
    { en: '"sometimes, somewhere, anywhere" — quruluşca hansı növ?',     tr: 'Mürəkkəb zərflər',  wrong: 'Sadə zərflər'        },
    { en: 'Zərflər əsasən hansı şəkilçi ilə düzəlir?',                  tr: '-ly',               wrong: '-er'                 },
    { en: '"hard work" — "hard" hansı nitq hissəsidir?',                 tr: 'Sifət',             wrong: 'Zərf'                },
    { en: '"He works hard." — "hard" hansı nitq hissəsidir?',            tr: 'Zərf',              wrong: 'Sifət'               },
    { en: '"hardly" nə mənasını verir?',                                  tr: 'Güclə, çətinliklə', wrong: 'Çox çətin'           },
    { en: '"lately" nə mənasını verir?',                                  tr: 'Son zamanlar',      wrong: 'Gec-gec'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She runs fast." — "fast" hansı nitq hissəsidir?',
          options: ['Sifət', 'Zərf', 'İsim', 'Fel'],
          answer: 'Zərf',
        },
        {
          q: '"quickly" — quruluşca hansı növ zərfdir?',
          options: ['Sadə', 'Mürəkkəb', 'Düzəltmə', 'Xüsusi'],
          answer: 'Düzəltmə',
        },
        {
          q: '"hardly" nə mənasını verir?',
          options: ['Çox çətin', 'Güclə, çətinliklə', 'Çox sərt', 'Bir az'],
          answer: 'Güclə, çətinliklə',
        },
      ],
    },
  ],
},

// ── Quiz 1 — Zərfin əsasları (Növlər + nümunələr — 15 sual) ──
[
  { en: 'Zərf cümlədə əsasən nəyə aid olur?',                         tr: 'Felə',                  wrong: 'İsmə'               },
  { en: '"today, tomorrow, before" — hansı növ zərflərdir?',          tr: 'Zaman zərfləri',        wrong: 'Yer zərfləri'       },
  { en: '"here, there, outside" — hansı növ zərflərdir?',             tr: 'Yer zərfləri',          wrong: 'Zaman zərfləri'     },
  { en: '"therefore, consequently" — hansı növ zərflərdir?',          tr: 'Səbəb-nəticə zərfləri', wrong: 'Dərəcə zərfləri'   },
  { en: '"often, seldom, sometimes" — hansı növ zərflərdir?',         tr: 'Təkrar zərfləri',       wrong: 'Tərzi-hərəkət'      },
  { en: '"very, almost, enough" — hansı növ zərflərdir?',             tr: 'Dərəcə-ölçü zərfləri', wrong: 'Təkrar zərfləri'    },
  { en: '"quickly, fast, hard" — hansı növ zərflərdir?',              tr: 'Tərzi-hərəkət zərfləri', wrong: 'Zaman zərfləri'  },
  { en: '"here, there, fast" — quruluşca hansı növ?',                 tr: 'Sadə zərflər',          wrong: 'Düzəltmə'           },
  { en: '"quickly, homeward, slowly" — quruluşca hansı növ?',         tr: 'Düzəltmə zərflər',     wrong: 'Mürəkkəb'           },
  { en: '"sometimes, somewhere" — quruluşca hansı növ?',              tr: 'Mürəkkəb zərflər',     wrong: 'Sadə zərflər'        },
  { en: 'Zərflər əsasən hansı şəkilçi ilə düzəlir?',                  tr: '-ly',                   wrong: '-er'                },
  { en: '"hard work" — "hard" hansı nitq hissəsidir?',                tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"He works hard." — "hard" hansı nitq hissəsidir?',           tr: 'Zərf',                  wrong: 'Sifət'              },
  { en: '"hardly" nə mənasını verir?',                                 tr: 'Güclə, çətinliklə',    wrong: 'Çox çətin'          },
  { en: '"nearly" nə mənasını verir?',                                 tr: 'Demək olar ki',         wrong: 'Yaxında'            },
],
{
      type: 'section_divider',
      title: 'Zərfin dərəcələri',
},

// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 2 — Zərfin dərəcələri  (Degrees of adverbs)  │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 2.1 — Sintetik yol (-er / -est) ────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Sintetik yol (-er / -est)',
  cards: [

    {
      type: 'lesson',
      title: 'Zərfin dərəcələri — Sintetik üsul',
      content:
        'İngilis dilində yalnız keyfiyyət zərflərinin dərəcə kateqoriyası var.\n\n' +
        'Sintetik üsul: zərfin sonuna şəkilçi əlavə etməklə.\n\n' +
        'Birhecalı zərflərdə:\n' +
        '• Müqayisə dərəcəsi: + -er\n' +
        '• Üstünlük dərəcəsi: + -est',
      table: [
        ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Üstünlük dərəcəsi'],
        ['fast',       'faster',             'fastest'],
        ['hard',       'harder',             'hardest'],
        ['long',       'longer',             'longest'],
        ['early',      'earlier',            'earliest'],
      ],
      tip: '"early" zərfinin müqayisə və üstünlük dərəcəsi "-er / -est" ilə düzəlir,\nçünki "-ly" burada zərf düzəldən şəkilçi deyil, kökün özündədir.',
    },

    { en: 'Sintetik üsul nə deməkdir?',                               tr: 'Zərfin sonuna şəkilçi əlavə etmək', wrong: 'Əvvələ söz əlavə etmək' },
    { en: '"fast"ın müqayisə dərəcəsi?',                              tr: 'faster',                wrong: 'more fast'          },
    { en: '"fast"ın üstünlük dərəcəsi?',                              tr: 'fastest',               wrong: 'most fast'          },
    { en: '"hard"ın müqayisə dərəcəsi?',                              tr: 'harder',                wrong: 'more hard'          },
    { en: '"hard"ın üstünlük dərəcəsi?',                              tr: 'hardest',               wrong: 'most hard'          },
    { en: '"early"ın müqayisə dərəcəsi?',                             tr: 'earlier',               wrong: 'more early'         },
    { en: '"early"ın üstünlük dərəcəsi?',                             tr: 'earliest',              wrong: 'most early'         },
    { en: 'Hansı dərəcə növlərinin dərəcəsi var?',                    tr: 'Yalnız keyfiyyət zərflərinin', wrong: 'Bütün zərflərin' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"fast" → müqayisə dərəcəsi?',
          options: ['most fast', 'more fast', 'faster', 'fastest'],
          answer: 'faster',
        },
        {
          q: '"early" → üstünlük dərəcəsi?',
          options: ['most early', 'more early', 'earliest', 'earlier'],
          answer: 'earliest',
        },
        {
          q: 'Sintetik üsulda nə edilir?',
          options: ['Əvvələ "more" artırılır', 'Sonuna şəkilçi artırılır', 'Söz dəyişir', 'Heç nə edilmir'],
          answer: 'Sonuna şəkilçi artırılır',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Analitik yol (more/most) + -ly zərfləri ─
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Analitik yol (more / most)',
  cards: [

    {
      type: 'lesson',
      title: 'Zərfin dərəcələri — Analitik üsul',
      content:
        'Analitik üsul: zərfin əvvəlinə köməkçi söz əlavə etməklə.\n\n' +
        'İki və çoxhecalı zərflərdə:\n' +
        '• Müqayisə dərəcəsi: more + zərf\n' +
        '• Üstünlük dərəcəsi: most + zərf\n\n' +
        'Bütün "-ly" ilə düzələn zərflərin dərəcəsi more/most ilə düzəlir.\n\n' +
        'Müqayisə dərəcəsi "much" ilə qüvvətləndirilir.',
      table: [
        ['Adi dərəcə', 'Müqayisə dərəcəsi',      'Üstünlük dərəcəsi'],
        ['nicely',     'more nicely',              'most nicely'],
        ['quickly',    'more quickly',             'most quickly'],
        ['slowly',     'more slowly',              'most slowly'],
        ['carefully',  'more carefully',           'most carefully'],
      ],
      tip: 'Müqayisə dərəcəsini qüvvətləndirmək üçün "much" işlənir:\n"She works much more carefully than him."',
    },

    { en: 'Analitik üsul nə deməkdir?',                              tr: 'Əvvələ köməkçi söz əlavə etmək', wrong: 'Sonuna şəkilçi əlavə etmək' },
    { en: '"-ly" ilə düzələn zərflərin müqayisə dərəcəsi?',          tr: 'more + zərf',           wrong: 'zərf + -er'         },
    { en: '"-ly" ilə düzələn zərflərin üstünlük dərəcəsi?',          tr: 'most + zərf',           wrong: 'zərf + -est'        },
    { en: '"nicely"nin müqayisə dərəcəsi?',                           tr: 'more nicely',           wrong: 'nicer'              },
    { en: '"quickly"nin üstünlük dərəcəsi?',                          tr: 'most quickly',          wrong: 'quickliest'         },
    { en: 'Müqayisə dərəcəsi hansı sözlə qüvvətləndirilir?',         tr: 'much',                  wrong: 'very'               },
    { en: '"She works ___ more carefully." — boşluq?',                tr: 'much',                  wrong: 'very'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"slowly" → müqayisə dərəcəsi?',
          options: ['slower', 'slowlier', 'more slowly', 'most slowly'],
          answer: 'more slowly',
        },
        {
          q: '"carefully" → üstünlük dərəcəsi?',
          options: ['most carefully', 'more carefully', 'carefulliest', 'carefulest'],
          answer: 'most carefully',
        },
        {
          q: 'Müqayisə dərəcəsini hansı söz qüvvətləndirir?',
          options: ['very', 'too', 'much', 'so'],
          answer: 'much',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — İstisnalar: well/badly/much/little + 2 formalılar ──
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — İstisnalar',
  cards: [

    {
      type: 'lesson',
      title: 'Köklə dəyişən zərflər (istisnalar)',
      content: 'Bəzi zərflərin dərəcələri kökün dəyişməsi yolu ilə düzəlir:',
      table: [
        ['Adi dərəcə', 'Müqayisə dərəcəsi', 'Üstünlük dərəcəsi'],
        ['well',       'better',             'best'],
        ['badly',      'worse',              'worst'],
        ['much',       'more',               'most'],
        ['little',     'less',               'least'],
      ],
    },

    {
      type: 'lesson',
      title: '2 müqayisə və 2 üstünlük dərəcəsi olan zərflər',
      content: 'Bəzi zərflərin 2 müqayisə və 2 üstünlük dərəcəsi var:',
      table: [
        ['Adi',  'Müqayisə 1', 'Müqayisə 2', 'Üstünlük 1', 'Üstünlük 2'],
        ['near', 'nearer',     '—',           'nearest',    'next'],
        ['far',  'farther',    'further',     'farthest',   'furthest'],
        ['late', 'later',      '—',           'latest',     'last'],
      ],
      tip: '"further/furthest" — həm uzaqlıq, həm də məcazi mənada (əlavə) işlənir:\n"further information" — əlavə məlumat',
    },

    { en: '"well"in müqayisə dərəcəsi?',                             tr: 'better',                wrong: 'weller'              },
    { en: '"well"in üstünlük dərəcəsi?',                             tr: 'best',                  wrong: 'wellest'             },
    { en: '"badly"nin müqayisə dərəcəsi?',                           tr: 'worse',                 wrong: 'badlier'             },
    { en: '"badly"nin üstünlük dərəcəsi?',                           tr: 'worst',                 wrong: 'badliest'            },
    { en: '"much"un müqayisə dərəcəsi?',                             tr: 'more',                  wrong: 'mucher'              },
    { en: '"little"in müqayisə dərəcəsi?',                           tr: 'less',                  wrong: 'littler'             },
    { en: '"little"in üstünlük dərəcəsi?',                           tr: 'least',                 wrong: 'littlest'            },
    { en: '"far"ın 2-ci müqayisə dərəcəsi?',                         tr: 'further',               wrong: 'farer'               },
    { en: '"late"nin 2-ci üstünlük dərəcəsi?',                       tr: 'last',                  wrong: 'later'               },
    { en: '"near"in üstünlük dərəcəsinin 2-ci forması?',             tr: 'next',                  wrong: 'nearest'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"well" → üstünlük dərəcəsi?',
          options: ['weller', 'better', 'best', 'most well'],
          answer: 'best',
        },
        {
          q: '"badly" → müqayisə dərəcəsi?',
          options: ['badlier', 'more badly', 'worse', 'worst'],
          answer: 'worse',
        },
        {
          q: '"far" → 2-ci müqayisə dərəcəsi?',
          options: ['farer', 'farther', 'further', 'farthest'],
          answer: 'further',
        },
      ],
    },
  ],
},

// ── Dərs 2.4 — Dərəcəni cümlədə tanı (as…as · than · of all / ever) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 2.4 — Dərəcəni cümlədə tanı',
  cards: [

    {
      type: 'lesson',
      title: 'Cümlədə hansı dərəcəni tapmaq',
      content: 'Cümlədəki açar sözlərə görə dərəcəni tanımaq olar:',
      table: [
        ['Açar söz',                                      'Dərəcə',             'Nümunə'],
        ['as...as / not so...as / not as...as / too / very / rather / quite', 'Adi dərəcə',   'She runs as fast as him.'],
        ['that / much / a little / a bit',                'Müqayisə dərəcəsi',  'She runs much faster.'],
        ['which / of all / ever / in the world / at home', 'Üstünlük dərəcəsi', 'She runs fastest of all.'],
      ],
      tip: 'Üstünlük dərəcəsindəki zərfin qarşısında "the" artiklı heç vaxt işlənmir!\n(Sifətdən fərqlidir: "the best student" — burada "the" işlənir, amma "she runs fastest" — işlənmir)',
    },

    { en: '"as...as" cümlədə hansı dərəcəni göstərir?',              tr: 'Adi dərəcə',            wrong: 'Müqayisə dərəcəsi'  },
    { en: '"not so...as" cümlədə hansı dərəcəni göstərir?',          tr: 'Adi dərəcə',            wrong: 'Üstünlük dərəcəsi'  },
    { en: '"a little, a bit" cümlədə hansı dərəcəni göstərir?',      tr: 'Müqayisə dərəcəsi',     wrong: 'Adi dərəcə'         },
    { en: '"much" cümlədə hansı dərəcəni qüvvətləndirir?',           tr: 'Müqayisə dərəcəsi',     wrong: 'Üstünlük dərəcəsi'  },
    { en: '"of all" cümlədə hansı dərəcəni göstərir?',               tr: 'Üstünlük dərəcəsi',     wrong: 'Müqayisə dərəcəsi'  },
    { en: '"ever, in the world" cümlədə hansı dərəcəni göstərir?',   tr: 'Üstünlük dərəcəsi',     wrong: 'Adi dərəcə'         },
    { en: 'Üstünlük dərəcəsindəki zərfin qarşısında "the" işlənirmi?', tr: 'Xeyr',               wrong: 'Bəli'               },
    { en: '"very, too, quite, rather" — hansı dərəcəni göstərir?',   tr: 'Adi dərəcə',            wrong: 'Müqayisə dərəcəsi'  },
    { en: '"that" sözü cümlədə hansı dərəcəni göstərir?',            tr: 'Müqayisə dərəcəsi',     wrong: 'Üstünlük dərəcəsi'  },
    { en: '"which of, at school" cümlədə hansı dərəcəni göstərir?',  tr: 'Üstünlük dərəcəsi',     wrong: 'Adi dərəcə'         },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She sings as well as her sister." — hansı dərəcə?',
          options: ['Müqayisə', 'Üstünlük', 'Adi', 'Dəyişmir'],
          answer: 'Adi',
        },
        {
          q: '"He runs much faster than me." — hansı dərəcə?',
          options: ['Adi', 'Üstünlük', 'Müqayisə', 'İstisna'],
          answer: 'Müqayisə',
        },
        {
          q: '"She works best of all." — hansı dərəcə?',
          options: ['Adi', 'Müqayisə', 'Üstünlük', 'Analitik'],
          answer: 'Üstünlük',
        },
      ],
    },
  ],
},

// ── Quiz 2 — Dərəcələr (Sintetik · Analitik · İstisna — 20 sual) ──
[
  { en: 'Sintetik üsulda nə edilir?',                                tr: 'Sonuna şəkilçi artırılır', wrong: 'Əvvələ söz artırılır' },
  { en: '"fast"ın müqayisə dərəcəsi?',                              tr: 'faster',                wrong: 'more fast'            },
  { en: '"fast"ın üstünlük dərəcəsi?',                              tr: 'fastest',               wrong: 'most fast'            },
  { en: '"early"ın müqayisə dərəcəsi?',                             tr: 'earlier',               wrong: 'more early'           },
  { en: '"-ly" ilə düzələn zərflərin müqayisə dərəcəsi?',           tr: 'more + zərf',           wrong: 'zərf + -er'           },
  { en: '"nicely"nin üstünlük dərəcəsi?',                           tr: 'most nicely',           wrong: 'niceliest'            },
  { en: 'Müqayisə dərəcəsi hansı sözlə qüvvətləndirilir?',         tr: 'much',                  wrong: 'very'                 },
  { en: '"well"in müqayisə dərəcəsi?',                              tr: 'better',                wrong: 'weller'               },
  { en: '"well"in üstünlük dərəcəsi?',                              tr: 'best',                  wrong: 'wellest'              },
  { en: '"badly"nin müqayisə dərəcəsi?',                            tr: 'worse',                 wrong: 'badlier'              },
  { en: '"badly"nin üstünlük dərəcəsi?',                            tr: 'worst',                 wrong: 'badliest'             },
  { en: '"much"un müqayisə dərəcəsi?',                              tr: 'more',                  wrong: 'mucher'               },
  { en: '"little"in müqayisə dərəcəsi?',                            tr: 'less',                  wrong: 'littler'              },
  { en: '"far"ın 2-ci müqayisə dərəcəsi?',                          tr: 'further',               wrong: 'farer'                },
  { en: '"late"nin 2-ci üstünlük dərəcəsi?',                        tr: 'last',                  wrong: 'later'                },
  { en: '"as...as" cümlədə hansı dərəcəni göstərir?',               tr: 'Adi dərəcə',            wrong: 'Müqayisə dərəcəsi'    },
  { en: '"a little, a bit" cümlədə hansı dərəcəni göstərir?',       tr: 'Müqayisə dərəcəsi',     wrong: 'Adi dərəcə'           },
  { en: '"of all" cümlədə hansı dərəcəni göstərir?',                tr: 'Üstünlük dərəcəsi',     wrong: 'Müqayisə dərəcəsi'    },
  { en: 'Üstünlük dərəcəsindəki zərfin qarşısında "the" işlənirmi?', tr: 'Xeyr',                wrong: 'Bəli'                  },
  { en: '"very, too, quite" — hansı dərəcəni göstərir?',            tr: 'Adi dərəcə',            wrong: 'Müqayisə dərəcəsi'    },
],


{
      type: 'section_divider',
      title: 'Tərzi-hərəkət zərfləri',
},
// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 3 — Zərfin cümlədə yeri  (Position)          │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 3.1 — Tərzi-hərəkət zərfləri (feldən sonra · tamamlıqdan sonra) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Tərzi-hərəkət zərflərinin yeri',
  cards: [

    {
      type: 'lesson',
      title: 'Tərzi-hərəkət zərflərinin cümlədə yeri',
      content:
        'Tərzi-hərəkət zərflərinin yeri əsasən feldən sonradır.\n\n' +
        'Əgər cümlədə feldən sonra tamamlıq varsa, zərf tamamlıqdan sonra gəlir.\n\n' +
        'Diqqət: zərf fel ilə tamamlıq arasında dura bilməz!\n\n' +
        'Cümlədə feldən sonra məsdər olduqda zərf feldən əvvəl gəlir.',
      table: [
        ['Hal',                          'Zərfin yeri',        'Nümunə'],
        ['Sadə cümlə (fel + zərf)',      'Feldən sonra',       'She was walking slowly.'],
        ['Tamamlıq varsa',               'Tamamlıqdan sonra',  'He recited the poem loudly.'],
        ['Feldən sonra məsdər varsa',    'Feldən əvvəl',       'He seriously began to study.'],
      ],
      tip: '❌ Səhv: He recited loudly the poem.\n✅ Düzgün: He recited the poem loudly.\n\nZərf heç vaxt fel ilə tamamlıq arasına girə bilməz!',
    },

    { en: 'Tərzi-hərəkət zərfinin yeri əsasən haradadır?',            tr: 'Feldən sonra',          wrong: 'Feldən əvvəl'        },
    { en: 'Cümlədə tamamlıq varsa zərf haraya gəlir?',                tr: 'Tamamlıqdan sonra',     wrong: 'Feldən əvvəl'        },
    { en: 'Zərf fel ilə tamamlıq arasında dura bilərmi?',             tr: 'Xeyr',                  wrong: 'Bəli'               },
    { en: 'Feldən sonra məsdər olduqda zərf haraya gəlir?',           tr: 'Feldən əvvəl',          wrong: 'Tamamlıqdan sonra'  },
    { en: '"She was walking slowly." — "slowly" düzgün yerdədir?',    tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"He seriously began to study." — "seriously" düzgün?',     tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"He recited loudly the poem." — düzgündürmü?',             tr: 'Xeyr',                  wrong: 'Bəli'               },
    { en: '"He recited the poem loudly." — düzgündürmü?',             tr: 'Bəli',                  wrong: 'Xeyr'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She was walking ___." — "slowly" haraya gəlir?',
          options: ['Feldən əvvəl', 'Feldən sonra', 'Cümlənin əvvəlinə', 'Tamamlıqdan əvvəl'],
          answer: 'Feldən sonra',
        },
        {
          q: '"He recited ___ the poem ___." — "loudly" hansı yerdə olmalıdır?',
          options: ['Feldən əvvəl', 'Feldən sonra, tamamlıqdan əvvəl', 'Tamamlıqdan sonra', 'Cümlənin əvvəlində'],
          answer: 'Tamamlıqdan sonra',
        },
        {
          q: '"He ___ began to study." — "seriously" haraya gəlir?',
          options: ['Məsdərdən sonra', 'Cümlənin sonuna', 'Feldən əvvəl', 'Tamamlıqdan sonra'],
          answer: 'Feldən əvvəl',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — Qeyri-müəyyən zaman zərfləri ─────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Qeyri-müəyyən zaman zərflərinin yeri',
  cards: [

    {
      type: 'lesson',
      title: 'Qeyri-müəyyən zaman zərfləri',
      content:
        'Qeyri-müəyyən zaman zərfləri:\n' +
        'always, often, seldom, ever, never, just, already, sometimes, soon, yet\n\n' +
        '• Sometimes — əsasən cümlənin əvvəlində gəlir\n' +
        '• Yet — inkar cümlədə sonda gəlir',
      table: [
        ['Hal',                                   'Qayda',                      'Nümunə'],
        ['1 mübtəda + 1 xəbər',                   'İkisinin arasında',          'He often goes to the library.'],
        ['Köməkçi + əsas fel',                    'Köməkçi ilə əsas fel arasında', 'I shall never forget you.'],
        ['2 köməkçi fel',                         'Birinci köməkçidən sonra',   'The letter has already been sent.'],
        ['Modal fellər (can/may/must)',            'Modal feldən sonra',         'I must always greet her.'],
        ['"have to" əvəzedici',                   '"have to"-dan əvvəl',        'I often had to help her.'],
        ['"used to"',                             '"used to"-dan əvvəl',        'He often used to go to the village.'],
      ],
    },

    { en: '"always, often, never, just, already" — hansı zərf növüdür?', tr: 'Qeyri-müəyyən zaman zərfləri', wrong: 'Yer zərfləri' },
    { en: '"Sometimes" əsasən cümlənin harasında gəlir?',             tr: 'Əvvəlində',             wrong: 'Sonunda'             },
    { en: '"Yet" inkar cümlədə harada gəlir?',                        tr: 'Sonunda',               wrong: 'Əvvəlində'           },
    { en: '"He often goes to the library." — "often" düzgün yerdədir?', tr: 'Bəli',               wrong: 'Xeyr'               },
    { en: '1 köməkçi + 1 əsas fel olduqda zərf haraya gəlir?',        tr: 'Köməkçi ilə əsas fel arasına', wrong: 'Əsas feldən sonra' },
    { en: '"I shall never forget you." — "never" düzgün yerdədir?',   tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"have to" vasitəsilə ifadə olunduqda zərf haraya gəlir?',  tr: '"have to"-dan əvvəl',   wrong: '"have to"-dan sonra' },
    { en: '"used to" ilə zərf haraya gəlir?',                         tr: '"used to"-dan əvvəl',   wrong: '"used to"-dan sonra' },
    { en: 'Modal fellərdən sonra qeyri-müəyyən zaman zərfləri gəlirmi?', tr: 'Bəli',              wrong: 'Xeyr'               },
    { en: '"The letter has already been sent." — zərf neçənci köməkçidən sonra?', tr: 'Birincisindn sonra', wrong: 'Hər ikisindən sonra' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ never ___ forget you." — "never" haraya gəlir (shall forget)?',
          options: ['"shall"dan əvvəl', '"shall" ilə "forget" arasına', '"forget"dən sonra', 'Cümlənin sonuna'],
          answer: '"shall" ilə "forget" arasına',
        },
        {
          q: '"I ___ had to help her." — "often" haraya gəlir?',
          options: ['"had to"-dan sonra', '"had to"-dan əvvəl', 'Cümlənin sonuna', '"help"-dən sonra'],
          answer: '"had to"-dan əvvəl',
        },
        {
          q: '"___ she goes to school." — "Sometimes" haraya gəlir?',
          options: ['Ortaya', 'Sona', 'Əvvələ', 'Feldən sonra'],
          answer: 'Əvvələ',
        },
      ],
    },
  ],
},

// ── Quiz 3 — Cümlədə yeri (Tərzi-hərəkət + Qeyri-müəyyən — 18 sual) ──
[
  { en: 'Tərzi-hərəkət zərfinin yeri əsasən haradadır?',             tr: 'Feldən sonra',          wrong: 'Feldən əvvəl'        },
  { en: 'Cümlədə tamamlıq varsa zərf haraya gəlir?',                 tr: 'Tamamlıqdan sonra',     wrong: 'Feldən əvvəl'        },
  { en: 'Zərf fel ilə tamamlıq arasında dura bilərmi?',              tr: 'Xeyr',                  wrong: 'Bəli'               },
  { en: 'Feldən sonra məsdər olduqda zərf haraya gəlir?',            tr: 'Feldən əvvəl',          wrong: 'Tamamlıqdan sonra'  },
  { en: '"He recited loudly the poem." — düzgündürmü?',              tr: 'Xeyr',                  wrong: 'Bəli'               },
  { en: '"Sometimes" əsasən cümlənin harasında gəlir?',              tr: 'Əvvəlində',             wrong: 'Sonunda'            },
  { en: '"Yet" inkar cümlədə harada gəlir?',                         tr: 'Sonunda',               wrong: 'Əvvəlində'          },
  { en: '1 köməkçi + 1 əsas fel olduqda zərf haraya gəlir?',         tr: 'Köməkçi ilə əsas fel arasına', wrong: 'Əsas feldən sonra' },
  { en: '"I shall never forget you." — "never" düzgün yerdədir?',    tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '2 köməkçi fel olduqda qeyri-müəyyən zərf haraya gəlir?',   tr: 'Birinci köməkçidən sonra', wrong: 'İkinci köməkçidən sonra' },
  { en: '"have to" vasitəsilə ifadə olduqda zərf haraya gəlir?',     tr: '"have to"-dan əvvəl',   wrong: '"have to"-dan sonra' },
  { en: '"used to" ilə zərf haraya gəlir?',                          tr: '"used to"-dan əvvəl',   wrong: '"used to"-dan sonra' },
  { en: 'Modal fellərdən sonra zərf gəlirmi?',                       tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"He seriously began to study." — "seriously" düzgündürmü?', tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"always, often, never, just, already" — hansı növdür?',     tr: 'Qeyri-müəyyən zaman zərfləri', wrong: 'Yer zərfləri' },
  { en: '"She was walking slowly." — "slowly" düzgün yerdədir?',     tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"He often used to go to the village." — "often" düzgün?',   tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"I must always greet her." — "always" düzgün yerdədir?',    tr: 'Bəli',                  wrong: 'Xeyr'               },
],


{
      type: 'section_divider',
      title: 'Sifətlə işlənən fellər + Xüsusi zərflər',
},
// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 4 — Sifətlə işlənən fellər + Xüsusi zərflər  │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 4.1 — Zərflə işlənməyən fellər ────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — Zərflə işlənməyən fellər',
  cards: [

    {
      type: 'lesson',
      title: 'Sifətlə işlənən fellər',
      content:
        'Bir qrup fellər var ki, onlardan sonra zərf yox, sifət işlənir:\n\n' +
        'to be, to become, to grow (olmaq mənasında)\n' +
        'to taste, to sound, to remain, to smell, to seem, to feel, to look\n\n' +
        'Diqqət: "to get" — yalnız "olmaq" mənasında sifətlə işlənir.\n' +
        'Digər mənalarda (almaq, çatmaq, minmək, düşmək) zərflə işlənir.',
      table: [
        ['Fel',        'Mənası',            'İşlənmə',         'Nümunə'],
        ['to be',      'olmaq',             'Həmişə sifət',    'She is tired.'],
        ['to become',  'olmaq',             'Həmişə sifət',    'He became sad.'],
        ['to grow',    'olmaq (mənasında)', 'Sifət',           'He grew old.'],
        ['to taste',   'dadmaq',            'Həmişə sifət',    'It tastes sweet.'],
        ['to sound',   'səslənmək',         'Həmişə sifət',    'It sounds good.'],
        ['to remain',  'qalmaq',            'Həmişə sifət',    'She remained calm.'],
        ['to smell',   'iyi gəlmək',        'Həmişə sifət',    'It smells nice.'],
        ['to seem',    'görünmək',          'Həmişə sifət',    'He seems tired.'],
        ['to feel',    'hiss etmək',        'Həmişə sifət',    'I feel good / well.'],
        ['to look',    'görünmək',          'Sifət (söz önsüz)', 'She looks nice.'],
        ['to get',     'olmaq mənasında',   'Sifət',           'He got tired.'],
      ],
      tip: '"to be well" və "to feel well" — insanın əhval-ruhiyyəsinə aiddir.\n"I feel well." ✅ (yaxşı hiss etmək)\n"The film is good." ✅ (good — sifət, filmin özü haqqında)\n\n"lonely, lovely" — sifətdir\n"alone" — zərfdir: to stay alone, to be alone',
    },

    { en: '"to be, to become" — hansı nitq hissəsi ilə işlənir?',    tr: 'Sifət',                 wrong: 'Zərf'               },
    { en: '"to grow" — hansı mənada sifətlə işlənir?',               tr: 'Olmaq mənasında',       wrong: 'Becərmək mənasında' },
    { en: '"to taste, to sound, to smell" — sonrasında nə gəlir?',   tr: 'Sifət',                 wrong: 'Zərf'               },
    { en: '"to look" — hansı mənada sifətlə işlənir?',               tr: 'Görünmək mənasında (söz önsüz)', wrong: 'Baxmaq mənasında' },
    { en: '"to feel" — hansı nitq hissəsi ilə işlənir?',             tr: 'Sifət',                 wrong: 'Zərf'               },
    { en: '"I feel well." — düzgündürmü?',                            tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"to get" — yalnız hansı mənada sifətlə işlənir?',         tr: 'Olmaq mənasında',       wrong: 'Almaq mənasında'    },
    { en: '"lonely, lovely" — hansı nitq hissəsidir?',               tr: 'Sifət',                 wrong: 'Zərf'               },
    { en: '"alone" — hansı nitq hissəsidir?',                        tr: 'Zərf',                  wrong: 'Sifət'              },
    { en: '"to look nice" — "nice" hansı nitq hissəsidir?',          tr: 'Sifət',                 wrong: 'Zərf'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ tired." (to get — olmaq) — "tired" hansı nitq hissəsidir?',
          options: ['Zərf', 'Sifət', 'İsim', 'Fel'],
          answer: 'Sifət',
        },
        {
          q: '"It ___ sweet." (to taste) — boşluğa nə gəlir?',
          options: ['tastes sweetly', 'tastes sweet', 'tastes sweetness', 'sweetly tastes'],
          answer: 'tastes sweet',
        },
        {
          q: '"to stay ___" — "alone" bu cümlədə hansı nitq hissəsidir?',
          options: ['Sifət', 'İsim', 'Zərf', 'Bağlayıcı'],
          answer: 'Zərf',
        },
      ],
    },
  ],
},

// ── Dərs 4.2 — Xüsusi zərflər (too/also/either · else/even/only · enough) ──
{
  type: 'grammar_lesson',
  title: 'Dərs 4.2 — Xüsusi zərflər',
  cards: [

    {
      type: 'lesson',
      title: 'too / also / either — "həmçinin, da, də"',
      content:
        'Üçü də "həmçinin, da, də" kimi tərcümə olunur, lakin işlənmə yeri fərqlidir:',
      table: [
        ['Zərf',   'Cümlə növü',                    'Yeri',              'Nümunə'],
        ['too',    'Təsdiq / sual cümləsi',          'Cümlənin sonunda',  'I like it too.'],
        ['also',   'Təsdiq / sual cümləsi',          'Cümlənin ortasında', 'She also likes it.'],
        ['either', 'İnkar cümləsini dəstəkləyir',   'Cümlənin sonunda',  'I don\'t like it either.'],
      ],
      tip: '"too" → təsdiq cümlə sonu\n"also" → cümlə ortası\n"either" → inkar cümlə sonu',
    },

    {
      type: 'lesson',
      title: 'else · even · only · just + "enough"',
      content:
        '"else" — daha, "even" — hətta, "only" — yalnız, "just" — elə, məhz\n' +
        'Bu zərflər mənayı qüvvətləndirmək üçün işlədilir.\n\n' +
        '"enough" xüsusi zərfdir:\n' +
        '• İsimdən əvvəl gəlir: enough time, enough money\n' +
        '• Sifətdən sonra gəlir: hot enough, cold enough',
      table: [
        ['Zərf',    'Mənası',    'Nümunə'],
        ['else',    'daha',      'What else do you need?'],
        ['even',    'hətta',     'Even he knows it.'],
        ['only',    'yalnız',    'Only she can do it.'],
        ['just',    'elə, məhz', 'Just do it.'],
        ['enough',  'kifayət',   'enough time / hot enough'],
      ],
      tip: '"enough" isimdən əvvəl, sifətdən sonra gəlir:\n✅ enough time (isim)\n✅ hot enough (sifət)\n❌ enough hot / time enough',
    },

    { en: '"too" hansı cümlədə işlənir?',                             tr: 'Təsdiq / sual',         wrong: 'İnkar'              },
    { en: '"too" cümlənin harasında gəlir?',                          tr: 'Sonunda',               wrong: 'Ortasında'          },
    { en: '"also" cümlənin harasında gəlir?',                         tr: 'Ortasında',             wrong: 'Sonunda'            },
    { en: '"either" hansı cümlədə işlənir?',                          tr: 'İnkar cümləsini dəstəkləyir', wrong: 'Təsdiq cümlə' },
    { en: '"either" cümlənin harasında gəlir?',                       tr: 'Sonunda',               wrong: 'Ortasında'          },
    { en: '"enough" isimdən əvvəl gəlirmi?',                          tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"enough" sifətdən sonra gəlirmi?',                         tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"hot enough" — düzgündürmü?',                              tr: 'Bəli',                  wrong: 'Xeyr'               },
    { en: '"enough hot" — düzgündürmü?',                              tr: 'Xeyr',                  wrong: 'Bəli'               },
    { en: '"even" nə mənasını verir?',                                tr: 'Hətta',                 wrong: 'Yalnız'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I don\'t like it ___." — "either" doğru işlənib?',
          options: ['Xeyr, "too" olmalıdır', 'Xeyr, "also" olmalıdır', 'Bəli', 'Xeyr, "even" olmalıdır'],
          answer: 'Bəli',
        },
        {
          q: '"___ time" → "enough" haraya gəlir?',
          options: ['Sonra (time enough)', 'Əvvəl (enough time)', 'Araya (time enough more)', 'Fərq etməz'],
          answer: 'Əvvəl (enough time)',
        },
        {
          q: '"She ___ likes coffee." — "also" haraya gəlir?',
          options: ['Cümlənin sonuna', 'Cümlənin əvvəlinə', 'Cümlənin ortasına (feldən əvvəl)', 'İsmə əvvəl'],
          answer: 'Cümlənin ortasına (feldən əvvəl)',
        },
      ],
    },
  ],
},

// ── Quiz 4 — Fellər + Xüsusi zərflər (16 sual) ───────────
[
  { en: '"to be, to become" — sonrasında sifət mi, zərf mi?',         tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"to grow" — hansı mənada sifətlə işlənir?',                  tr: 'Olmaq mənasında',       wrong: 'Becərmək mənasında' },
  { en: '"to taste, to sound, to smell" — sonrasında nə gəlir?',      tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"to look" — söz önsüz hansı nitq hissəsi ilə işlənir?',     tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"to get" — yalnız hansı mənada sifətlə işlənir?',            tr: 'Olmaq mənasında',       wrong: 'Almaq mənasında'    },
  { en: '"alone" — hansı nitq hissəsidir?',                           tr: 'Zərf',                  wrong: 'Sifət'              },
  { en: '"lonely, lovely" — hansı nitq hissəsidir?',                  tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"I feel well." — düzgündürmü?',                              tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"too" hansı cümlədə işlənir?',                               tr: 'Təsdiq / sual',         wrong: 'İnkar'              },
  { en: '"also" cümlənin harasında gəlir?',                           tr: 'Ortasında',             wrong: 'Sonunda'            },
  { en: '"either" hansı cümlədə işlənir?',                            tr: 'İnkar cümləsini dəstəkləyir', wrong: 'Təsdiq cümlə' },
  { en: '"enough" isimdən əvvəl gəlirmi?',                            tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"enough" sifətdən sonra gəlirmi?',                           tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"hot enough" — düzgündürmü?',                                tr: 'Bəli',                  wrong: 'Xeyr'               },
  { en: '"even" nə mənasını verir?',                                  tr: 'Hətta',                 wrong: 'Yalnız'             },
  { en: '"only" nə mənasını verir?',                                  tr: 'Yalnız',                wrong: 'Hətta'              },
],


{
      type: 'section_divider',
      title: 'Make və Do',
},
// ┌─────────────────────────────────────────────────────────┐
// │  MƏRHƏLƏ 5 — Make və Do                                │
// └─────────────────────────────────────────────────────────┘

// ── Dərs 5.1 — "to make" ifadələri ──────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.1 — "to make" ifadələri',
  cards: [

    {
      type: 'lesson',
      title: '"to make" — düzəltmək, hazırlamaq',
      content: '"to make" — düzəltmək mənasında işlənən sabit ifadələr:',
      table: [
        ['İfadə',                  'Azərbaycanca'],
        ['make money',             'pul qazanmaq'],
        ['make up a sentence',     'cümlə qurmaq'],
        ['make tea',               'çay dəmləmək'],
        ['make dinner',            'nahar hazırlamaq'],
        ['make a dress',           'paltar tikmək'],
        ['make progress',          'nailiyyət əldə etmək'],
        ['make a film',            'film çəkmək'],
        ['make a note',            'qeyd götürmək'],
        ['make a bed',             'çarpayını yığışdırmaq'],
        ['make up one\'s mind',    'qərara almaq'],
        ['make a fire',            'tonqal yandırmaq'],
      ],
    },

    { en: '"make money" nə mənasını verir?',                          tr: 'Pul qazanmaq',          wrong: 'Pul xərcləmək'      },
    { en: '"make progress" nə mənasını verir?',                       tr: 'Nailiyyət əldə etmək',  wrong: 'İrəli getmək'        },
    { en: '"make a bed" nə mənasını verir?',                          tr: 'Çarpayını yığışdırmaq', wrong: 'Çarpayı almaq'       },
    { en: '"make up one\'s mind" nə mənasını verir?',                 tr: 'Qərara almaq',          wrong: 'Fikrini dəyişmək'   },
    { en: '"make a note" nə mənasını verir?',                         tr: 'Qeyd götürmək',         wrong: 'Nota yazmaq'         },
    { en: '"make a film" nə mənasını verir?',                         tr: 'Film çəkmək',           wrong: 'Film izləmək'        },
    { en: '"make a fire" nə mənasını verir?',                         tr: 'Tonqal yandırmaq',      wrong: 'Yanğın söndürmək'   },
    { en: '"make tea" nə mənasını verir?',                            tr: 'Çay dəmləmək',          wrong: 'Çay içmək'          },
    { en: '"make dinner" nə mənasını verir?',                         tr: 'Nahar hazırlamaq',      wrong: 'Nahar etmək'         },
    { en: '"make a dress" nə mənasını verir?',                        tr: 'Paltar tikmək',         wrong: 'Paltar almaq'        },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ progress in English." — hansı fel?',
          options: ['does', 'takes', 'makes', 'gives'],
          answer: 'makes',
        },
        {
          q: '"He ___ up his mind." — hansı fel?',
          options: ['does', 'makes', 'takes', 'gives'],
          answer: 'makes',
        },
        {
          q: '"___ tea" — hansı fel?',
          options: ['do', 'make', 'have', 'take'],
          answer: 'make',
        },
      ],
    },
  ],
},

// ── Dərs 5.2 — "to do" ifadələri ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 5.2 — "to do" ifadələri',
  cards: [

    {
      type: 'lesson',
      title: '"to do" — etmək',
      content: '"to do" — etmək mənasında işlənən sabit ifadələr:',
      table: [
        ['İfadə',                  'Azərbaycanca'],
        ['do shopping',            'bazarlıq etmək'],
        ['do one\'s best',         'əlindən gələni etmək'],
        ['do one\'s lesson',       'dərslərini etmək'],
        ['do housework',           'ev işlərini etmək'],
        ['do homework',            'ev tapşırığını etmək'],
        ['do morning exercise',    'səhər idmanı etmək'],
        ['do exercises',           'tapşırıqlar etmək'],
        ['do sums',                'misallar etmək'],
        ['do good',                'yaxşılıq etmək'],
        ['do smb. a favour',       'bir kəsə yaxşılıq etmək'],
        ['do research',            'araşdırma aparmaq'],
        ['do business',            'kommersiya ilə məşğul olmaq'],
        ['do damage',              'xətər yetirmək, zərər vermək'],
      ],
    },

    { en: '"do shopping" nə mənasını verir?',                         tr: 'Bazarlıq etmək',        wrong: 'Alış-veriş planlamaq' },
    { en: '"do one\'s best" nə mənasını verir?',                      tr: 'Əlindən gələni etmək',  wrong: 'Ən yaxşısını almaq'  },
    { en: '"do homework" nə mənasını verir?',                         tr: 'Ev tapşırığını etmək',  wrong: 'Ev işlərini etmək'   },
    { en: '"do housework" nə mənasını verir?',                        tr: 'Ev işlərini etmək',     wrong: 'Ev tapşırığını etmək' },
    { en: '"do research" nə mənasını verir?',                         tr: 'Araşdırma aparmaq',     wrong: 'Axtarış etmək'       },
    { en: '"do damage" nə mənasını verir?',                           tr: 'Xətər yetirmək, zərər vermək', wrong: 'Zərər almaq' },
    { en: '"do good" nə mənasını verir?',                             tr: 'Yaxşılıq etmək',        wrong: 'Yaxşı olmaq'         },
    { en: '"do sums" nə mənasını verir?',                             tr: 'Misallar etmək',        wrong: 'Cəmləmək'            },
    { en: '"do business" nə mənasını verir?',                         tr: 'Kommersiya ilə məşğul olmaq', wrong: 'İş görmək'    },
    { en: '"do morning exercise" nə mənasını verir?',                 tr: 'Səhər idmanı etmək',    wrong: 'Səhər tapşırıqları'  },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ her homework every day." — hansı fel?',
          options: ['makes', 'does', 'takes', 'gives'],
          answer: 'does',
        },
        {
          q: '"They ___ research on climate change." — hansı fel?',
          options: ['make', 'take', 'do', 'give'],
          answer: 'do',
        },
        {
          q: '"___ shopping" — hansı fel?',
          options: ['make', 'take', 'do', 'have'],
          answer: 'do',
        },
      ],
    },
  ],
},

// ── Quiz 5 — Make and Do (make mi, do mu? — 12 sual) ─────
[
  { en: '"make money" — make mi, do mu?',                             tr: 'make',                  wrong: 'do'                 },
  { en: '"make progress" — make mi, do mu?',                          tr: 'make',                  wrong: 'do'                 },
  { en: '"make a bed" — make mi, do mu?',                             tr: 'make',                  wrong: 'do'                 },
  { en: '"make up one\'s mind" — make mi, do mu?',                    tr: 'make',                  wrong: 'do'                 },
  { en: '"do shopping" — make mi, do mu?',                            tr: 'do',                    wrong: 'make'               },
  { en: '"do homework" — make mi, do mu?',                            tr: 'do',                    wrong: 'make'               },
  { en: '"do research" — make mi, do mu?',                            tr: 'do',                    wrong: 'make'               },
  { en: '"do damage" — make mi, do mu?',                              tr: 'do',                    wrong: 'make'               },
  { en: '"make a film" — make mi, do mu?',                            tr: 'make',                  wrong: 'do'                 },
  { en: '"do one\'s best" — make mi, do mu?',                         tr: 'do',                    wrong: 'make'               },
  { en: '"make tea" — make mi, do mu?',                               tr: 'make',                  wrong: 'do'                 },
  { en: '"do good" — make mi, do mu?',                                tr: 'do',                    wrong: 'make'               },
],


{
      type: 'section_divider',
      title: 'ADVERB - ÜMUMİ İMTAHAN',
},
// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Zərf (Adverb) — 30+ sual                 │
// └─────────────────────────────────────────────────────────┘
[
  // Növlər
  { en: 'Zərf cümlədə əsasən nəyə aid olur?',                        tr: 'Felə',                  wrong: 'İsmə'               },
  { en: '"today, tomorrow, before" — hansı növ zərflərdir?',         tr: 'Zaman zərfləri',        wrong: 'Yer zərfləri'       },
  { en: '"here, there, outside" — hansı növ zərflərdir?',            tr: 'Yer zərfləri',          wrong: 'Zaman zərfləri'     },
  { en: '"often, seldom, sometimes" — hansı növ zərflərdir?',        tr: 'Təkrar zərfləri',       wrong: 'Tərzi-hərəkət'      },
  { en: '"very, almost, enough" — hansı növ zərflərdir?',            tr: 'Dərəcə-ölçü zərfləri', wrong: 'Təkrar zərfləri'    },
  // Quruluş
  { en: '"here, there, fast" — quruluşca hansı növ?',                tr: 'Sadə zərflər',          wrong: 'Düzəltmə'           },
  { en: '"quickly, slowly, homeward" — quruluşca hansı növ?',        tr: 'Düzəltmə zərflər',     wrong: 'Mürəkkəb'           },
  { en: '"sometimes, somewhere" — quruluşca hansı növ?',             tr: 'Mürəkkəb zərflər',     wrong: 'Sadə'               },
  { en: '"hard work" — "hard" hansı nitq hissəsidir?',               tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"He works hard." — "hard" hansı nitq hissəsidir?',          tr: 'Zərf',                  wrong: 'Sifət'              },
  // Dərəcələr
  { en: '"fast"ın müqayisə dərəcəsi?',                               tr: 'faster',                wrong: 'more fast'          },
  { en: '"fast"ın üstünlük dərəcəsi?',                               tr: 'fastest',               wrong: 'most fast'          },
  { en: '"-ly" zərflərin müqayisə dərəcəsi?',                        tr: 'more + zərf',           wrong: 'zərf + -er'         },
  { en: '"well"in müqayisə dərəcəsi?',                               tr: 'better',                wrong: 'weller'             },
  { en: '"badly"nin üstünlük dərəcəsi?',                             tr: 'worst',                 wrong: 'badliest'           },
  { en: '"much"un müqayisə dərəcəsi?',                               tr: 'more',                  wrong: 'mucher'             },
  { en: '"little"in müqayisə dərəcəsi?',                             tr: 'less',                  wrong: 'littler'            },
  { en: '"as...as" cümlədə hansı dərəcəni göstərir?',                tr: 'Adi dərəcə',            wrong: 'Müqayisə'           },
  { en: '"of all" cümlədə hansı dərəcəni göstərir?',                 tr: 'Üstünlük dərəcəsi',    wrong: 'Müqayisə'           },
  { en: 'Üstünlük dərəcəsindəki zərfin qarşısında "the" işlənirmi?', tr: 'Xeyr',                 wrong: 'Bəli'               },
  // Cümlədə yer
  { en: 'Tərzi-hərəkət zərfinin yeri əsasən haradadır?',             tr: 'Feldən sonra',          wrong: 'Feldən əvvəl'       },
  { en: 'Zərf fel ilə tamamlıq arasında dura bilərmi?',              tr: 'Xeyr',                  wrong: 'Bəli'               },
  { en: '"Sometimes" cümlənin harasında gəlir?',                     tr: 'Əvvəlində',             wrong: 'Sonunda'            },
  { en: '1 köməkçi + 1 əsas fel olduqda qeyri-müəyyən zərf haraya gəlir?', tr: 'Köməkçi ilə əsas fel arasına', wrong: 'Əsas feldən sonra' },
  { en: '"have to" vasitəsilə ifadə olduqda zərf haraya gəlir?',     tr: '"have to"-dan əvvəl',  wrong: '"have to"-dan sonra' },
  // Sifətlə işlənən fellər + xüsusi zərflər
  { en: '"to be, to become" — sonrasında sifət mi, zərf mi?',        tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"to taste, to sound, to smell" — sonrasında nə gəlir?',     tr: 'Sifət',                 wrong: 'Zərf'               },
  { en: '"too" cümlənin harasında gəlir?',                           tr: 'Sonunda',               wrong: 'Ortasında'          },
  { en: '"either" hansı cümlədə işlənir?',                           tr: 'İnkar cümləsini dəstəkləyir', wrong: 'Təsdiq cümlə' },
  { en: '"enough" sifətdən sonra gəlirmi?',                          tr: 'Bəli',                  wrong: 'Xeyr'               },
  // Make and Do
  { en: '"make progress" — make mi, do mu?',                         tr: 'make',                  wrong: 'do'                 },
  { en: '"do homework" — make mi, do mu?',                           tr: 'do',                    wrong: 'make'               },
  { en: '"make a bed" — make mi, do mu?',                            tr: 'make',                  wrong: 'do'                 },
  { en: '"do research" — make mi, do mu?',                           tr: 'do',                    wrong: 'make'               },
],

  ],
};
// ── 13. COMPLEX OBJECT (MÜRƏKKƏB TAMAMLIQ) ──────────────────
const COMPLEX_OBJECT_LEVEL = {
  id: 'complex_object',
  name: 'COMPLEX OBJECT — MÜRƏKKƏB TAMAMLIQ',
  icon: '<i class="ti ti-link"></i>',
  color: '#60a5fa',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  COMPLEX OBJECT — Tam bölüm                           ║
// ══════════════════════════════════════════════════════════

      
{
      type: 'section_divider',
      title: 'Mürəkkəb tamamlığın quruluşu',
},

// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 1 — Quruluş + to ilə işlənən fellər             │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 1 — Mürəkkəb tamamlığın quruluşu ───────────────

// ── Dərs 1.1 — Quruluş: I hissə + II hissə ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Quruluş: I hissə + II hissə',
  cards: [

    {
      type: 'lesson',
      title: 'Mürəkkəb tamamlığın quruluşu',
      content:
        'İngilis dilində mürəkkəb tamamlıq 2 hissədən ibarət olur:\n\n' +
        'I hissə: adlıq halında isim və ya obyekt halında əvəzlik\n' +
        'II hissə: məsdər (to ilə / to-suz) və ya Participle I (feli sifət I)',
      table: [
        ['I hissə',                        'II hissə'],
        ['adlıq halda isim: father, Anar, the boys', 'məsdər (to ilə): to understand, to write'],
        ['obyekt əvəzliyi: me, you, him, her, it, us, them', 'məsdər (to-suz): go, write, sing'],
        ['—',                              'P I (feli sifət I): watching, writing, singing'],
      ],
      tip: 'Mürəkkəb tamamlıq bir qrup xüsusi fellərdən sonra işlənir.\n' +
           'Hansı felə görə II hissə to ilə, to-suz və ya P I ilə işlənir.',
    },

    {
      type: 'lesson',
      title: 'I hissə — obyekt əvəzlikləri',
      content: 'I hissədə obyekt halında əvəzliklər işlənir:',
      table: [
        ['Şəxs',          'Obyekt əvəzliyi'],
        ['I',             'me'],
        ['you',           'you'],
        ['he',            'him'],
        ['she',           'her'],
        ['it',            'it'],
        ['we',            'us'],
        ['they',          'them'],
      ],
      examples: [
        { word: 'I want you to understand me.',  az: 'Mən istəyirəm ki, sən məni anlayasan.' },
        { word: 'I expect her to write to me.',  az: 'Mən gözləyirəm ki, o mənə yazsın.' },
        { word: 'I heard them singing.',         az: 'Mən onların oxuduğunu eşitdim.' },
        { word: 'I felt someone watching.',      az: 'Mən birinin baxdığını hiss etdim.' },
      ],
    },

    { en: 'Mürəkkəb tamamlıq neçə hissədən ibarətdir?',               tr: '2 hissə',               wrong: '3 hissə'             },
    { en: 'I hissə nədən ibarət olur?',                               tr: 'Adlıq halda isim / obyekt əvəzliyi', wrong: 'Yiyəlik halda isim' },
    { en: 'II hissə nə ola bilər?',                                   tr: 'Məsdər (to/to-suz) və ya P I', wrong: 'Yalnız məsdər'  },
    { en: '"me, you, him, her, us, them" — hansı halda əvəzliklərdir?', tr: 'Obyekt halı',          wrong: 'Adlıq halı'          },
    { en: '"I" əvəzliyinin obyekt forması?',                          tr: 'me',                    wrong: 'my'                  },
    { en: '"he" əvəzliyinin obyekt forması?',                         tr: 'him',                   wrong: 'his'                 },
    { en: '"they" əvəzliyinin obyekt forması?',                       tr: 'them',                  wrong: 'their'               },
    { en: '"we" əvəzliyinin obyekt forması?',                         tr: 'us',                    wrong: 'our'                 },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I want ___ to understand me." — I hissədə hansı əvəzlik?',
          options: ['he', 'his', 'you', 'your'],
          answer: 'you',
        },
        {
          q: 'Mürəkkəb tamamlığın I hissəsi nədən ibarətdir?',
          options: ['Yiyəlik əvəzliyi', 'Obyekt əvəzliyi / adlıq isim', 'Fel', 'Sifət'],
          answer: 'Obyekt əvəzliyi / adlıq isim',
        },
        {
          q: 'II hissə nə ola bilər?',
          options: ['Yalnız to + məsdər', 'Yalnız to-suz məsdər', 'Məsdər və ya P I', 'Yalnız P I'],
          answer: 'Məsdər və ya P I',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Cədvəl: I + II hissə nümunələri ──────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Cədvəl: I + II hissə nümunələri',
  cards: [

    {
      type: 'lesson',
      title: 'I hissə + II hissə — nümunəli cədvəl',
      content: 'Mürəkkəb tamamlıqda I və II hissənin birlikdə işlənməsi:',
      table: [
        ['Cümlə',                          'I hissə',  'II hissə'],
        ['I want you to understand.',       'you',      'to understand'],
        ['I saw him go out.',               'him',      'go out'],
        ['I felt someone watching.',        'someone',  'watching'],
        ['I expect her to write.',          'her',      'to write'],
        ['I heard them singing.',           'them',     'singing'],
        ['He ordered them to leave.',       'them',     'to leave'],
        ['She asked him to help her.',      'him',      'to help'],
        ['I would like you to stay.',       'you',      'to stay'],
      ],
      tip: 'to want, to expect, to ask, to order, would like → to ilə məsdər\n' +
           'to see, to hear, to feel, to watch → to-suz məsdər və ya P I',
    },

    { en: '"I want you to understand." — I hissə nədir?',             tr: 'you',                   wrong: 'understand'          },
    { en: '"I want you to understand." — II hissə nədir?',            tr: 'to understand',         wrong: 'you'                 },
    { en: '"I saw him go out." — I hissə nədir?',                     tr: 'him',                   wrong: 'go'                  },
    { en: '"I saw him go out." — II hissə nədir?',                    tr: 'go out',                wrong: 'him'                 },
    { en: '"I felt someone watching." — II hissə nədir?',             tr: 'watching (P I)',        wrong: 'to watch'            },
    { en: '"I heard them singing." — I hissə nədir?',                 tr: 'them',                  wrong: 'singing'             },
    { en: '"He ordered them to leave." — II hissə nədir?',            tr: 'to leave',              wrong: 'leave'               },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I expect ___ to write to me." — I hissədə hansı əvəzlik?',
          options: ['him', 'his', 'he', 'himself'],
          answer: 'him',
        },
        {
          q: '"I saw him ___ out." — II hissədə hansı forma?',
          options: ['to go', 'going', 'go', 'gone'],
          answer: 'go',
        },
        {
          q: '"I felt someone ___." — II hissədə hansı forma?',
          options: ['watch', 'to watch', 'watched', 'watching'],
          answer: 'watching',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 ───────────────────────────────────────────
[
  { en: 'Mürəkkəb tamamlıq neçə hissədən ibarətdir?',                tr: '2 hissə',               wrong: '3 hissə'             },
  { en: 'I hissə nədən ibarət ola bilər?',                           tr: 'Adlıq isim / obyekt əvəzliyi', wrong: 'Yiyəlik əvəzliyi' },
  { en: 'II hissə nə ola bilər?',                                    tr: 'Məsdər (to/to-suz) / P I', wrong: 'Yalnız məsdər'    },
  { en: '"he" əvəzliyinin obyekt forması?',                          tr: 'him',                   wrong: 'his'                 },
  { en: '"they" əvəzliyinin obyekt forması?',                        tr: 'them',                  wrong: 'their'               },
  { en: '"I want you to understand." — I hissə?',                    tr: 'you',                   wrong: 'understand'          },
  { en: '"I saw him go out." — II hissə?',                           tr: 'go out',                wrong: 'him'                 },
  { en: '"I felt someone watching." — II hissə?',                    tr: 'watching (P I)',        wrong: 'to watch'            },
  { en: '"I expect her to write." — I hissə?',                       tr: 'her',                   wrong: 'to write'            },
  { en: '"He ordered them to leave." — II hissə?',                   tr: 'to leave',              wrong: 'leave'               },
],


{
      type: 'section_divider',
      title: 'To ilə işlənən fellər',
},
// ── Bölmə 2 — to ilə işlənən fellər ──────────────────────

// ── Dərs 2.1 — to + məsdər tələb edən fellər ─────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — to + məsdər tələb edən fellər',
  cards: [

    {
      type: 'lesson',
      title: '"to" ilə işlənən fellər',
      content:
        'Aşağıdakı fellərdən sonra gələn mürəkkəb tamamlığın\n' +
        'II hissəsi "to" ilə məsdər şəklində işlənir:\n\n' +
        'to want — istəmək\n' +
        'to expect — gözləmək\n' +
        'to ask — xahiş etmək\n' +
        'to order — əmr etmək\n' +
        'to try — cəhd etmək\n' +
        'to find — tapmaq\n' +
        'would like — istəmək (nəzakətli)\n' +
        'to suggest — təklif etmək',
      table: [
        ['Fel',          'Mənası',              'Nümunə'],
        ['to want',      'istəmək',             'I want you to understand me.'],
        ['to expect',    'gözləmək',            'I expect you to write to me.'],
        ['to ask',       'xahiş etmək',         'She asked him to help her.'],
        ['to order',     'əmr etmək',           'He ordered them to leave.'],
        ['to try',       'cəhd etmək',          'She tried him to come.'],
        ['to find',      'tapmaq',              'I found it to be difficult.'],
        ['would like',   'istəmək (nəzakətli)', 'I would like you to stay.'],
        ['to suggest',   'təklif etmək',        'She suggested him to go.'],
      ],
      tip: 'Bu fellər + I hissə (obyekt) + to + məsdər\n' +
           'Qayda: fel + obyekt + to + V (məsdər)',
    },

    { en: '"to want" — sonrasında hansı forma işlənir?',              tr: 'obyekt + to + məsdər',  wrong: 'obyekt + məsdər'     },
    { en: '"to expect" nə mənasını verir?',                           tr: 'Gözləmək',              wrong: 'Əmr etmək'           },
    { en: '"to ask" — complex object-də nə mənasını verir?',          tr: 'Xahiş etmək',           wrong: 'Sual vermək'         },
    { en: '"to order" nə mənasını verir?',                            tr: 'Əmr etmək',             wrong: 'Sifariş etmək'       },
    { en: '"would like" nə mənasını verir?',                          tr: 'İstəmək (nəzakətli)',   wrong: 'Xoşlamaq'            },
    { en: '"I want you ___ understand me." — boşluq?',                tr: 'to',                    wrong: 'heç nə'              },
    { en: '"She asked him ___ help her." — boşluq?',                  tr: 'to',                    wrong: 'heç nə'              },
    { en: '"He ordered them ___ leave." — boşluq?',                   tr: 'to',                    wrong: 'heç nə'              },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I want him ___ come." — boşluq?',
          options: ['heç nə', 'to', 'for', 'that'],
          answer: 'to',
        },
        {
          q: '"She asked him ___ help." — boşluq?',
          options: ['heç nə', 'for', 'to', 'that'],
          answer: 'to',
        },
        {
          q: '"I would like you ___ stay." — boşluq?',
          options: ['heç nə', 'that', 'for', 'to'],
          answer: 'to',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Nümunələr ─────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — to ilə işlənmə: nümunələr',
  cards: [

    {
      type: 'lesson',
      title: '"to" ilə işlənmə — genişləndirilmiş nümunələr',
      content: 'to + məsdər tələb edən fellərin nümunəli cədvəli:',
      table: [
        ['Cümlə',                              'Azərbaycanca'],
        ['I want you to understand me.',        'İstəyirəm ki, sən məni anlayasan.'],
        ['I expect you to write to me.',        'Gözləyirəm ki, sən mənə yazasan.'],
        ['She asked him to help her.',          'O ondan kömək etməsini xahiş etdi.'],
        ['He ordered them to leave.',           'O onlara getmələrini əmr etdi.'],
        ['I would like you to stay.',           'İstərdim ki, sən qalasan.'],
        ['She tried him to come early.',        'O onun erkən gəlməsinə çalışdı.'],
        ['I found it to be difficult.',         'Onun çətin olduğunu gördüm.'],
      ],
      tip: 'Azərbaycancaya çeviriş: "I want you to go" → "İstəyirəm ki, sən gedəsən"\n' +
           'Yəni: fel + ki + mübtəda + xəbər',
    },

    { en: '"I want you to understand me." — düzgün quruluşdurmu?',   tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"I expect you to write to me." — II hissə nədir?',        tr: 'to write',              wrong: 'write'               },
    { en: '"She asked him to help her." — I hissə nədir?',           tr: 'him',                   wrong: 'to help'             },
    { en: '"He ordered them to leave." — II hissə nədir?',           tr: 'to leave',              wrong: 'them'                },
    { en: '"I would like you to stay." — I hissə nədir?',            tr: 'you',                   wrong: 'to stay'             },
    { en: '"I want you understand me." — düzgündürmü?',              tr: 'Xeyr, "to" çatışmır',   wrong: 'Bəli'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I expect ___ to write to me." — I hissəyə hansı əvəzlik?',
          options: ['he', 'his', 'him', 'himself'],
          answer: 'him',
        },
        {
          q: '"She asked ___ to help her." — I hissəyə hansı əvəzlik?',
          options: ['he', 'his', 'him', 'himself'],
          answer: 'him',
        },
        {
          q: '"I want ___ go." — boşluğa nə gəlir?',
          options: ['him to', 'him', 'to him', 'for him'],
          answer: 'him to',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 ───────────────────────────────────────────
[
  { en: '"to want" — sonrasında hansı forma?',                       tr: 'obyekt + to + məsdər',  wrong: 'obyekt + məsdər'     },
  { en: '"to expect" nə mənasını verir?',                            tr: 'Gözləmək',              wrong: 'Əmr etmək'           },
  { en: '"to order" nə mənasını verir?',                             tr: 'Əmr etmək',             wrong: 'Sifariş etmək'       },
  { en: '"would like" nə mənasını verir?',                           tr: 'İstəmək (nəzakətli)',   wrong: 'Xoşlamaq'            },
  { en: '"I want you ___ understand." — boşluq?',                   tr: 'to',                    wrong: 'heç nə'              },
  { en: '"I want you understand me." — düzgündürmü?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"She asked him to help her." — I hissə?',                  tr: 'him',                   wrong: 'to help'             },
  { en: '"He ordered them to leave." — II hissə?',                  tr: 'to leave',              wrong: 'them'                },
  { en: '"I expect you to write to me." — II hissə?',               tr: 'to write',              wrong: 'write'               },
  { en: '"I would like you to stay." — I hissə?',                   tr: 'you',                   wrong: 'to stay'             },
],

// ── Test 1 — Quruluş + to ilə işlənən fellər (Bölmə 1–2) — 12 sual ──
[
  { en: 'Mürəkkəb tamamlıq neçə hissədən ibarətdir?',               tr: '2 hissə',               wrong: '3 hissə'             },
  { en: 'I hissə nədən ibarət ola bilər?',                          tr: 'Adlıq isim / obyekt əvəzliyi', wrong: 'Yiyəlik əvəzliyi' },
  { en: 'II hissə nə ola bilər?',                                   tr: 'Məsdər (to/to-suz) / P I', wrong: 'Yalnız məsdər'    },
  { en: '"he" əvəzliyinin obyekt forması?',                         tr: 'him',                   wrong: 'his'                 },
  { en: '"they" əvəzliyinin obyekt forması?',                       tr: 'them',                  wrong: 'their'               },
  { en: '"to want" — sonrasında hansı forma?',                      tr: 'obyekt + to + məsdər',  wrong: 'obyekt + məsdər'     },
  { en: '"to expect" nə mənasını verir?',                           tr: 'Gözləmək',              wrong: 'Əmr etmək'           },
  { en: '"to order" nə mənasını verir?',                            tr: 'Əmr etmək',             wrong: 'Sifariş etmək'       },
  { en: '"I want you ___ understand me." — boşluq?',               tr: 'to',                    wrong: 'heç nə'              },
  { en: '"She asked him to help her." — I hissə?',                  tr: 'him',                   wrong: 'to help'             },
  { en: '"He ordered them to leave." — II hissə?',                  tr: 'to leave',              wrong: 'them'                },
  { en: '"I want you understand me." — düzgündürmü?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
],


{
      type: 'section_divider',
      title: 'To-suz məsdər + P I ilə işlənmə + ümumi fərq',
},
// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 2 — to-suz işlənən fellər + P I ilə işlənmə     │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 3 — to-suz məsdər + P I ilə işlənmə + ümumi fərq ──

// ── Dərs 3.1 — to-suz məsdər tələb edən fellər ───────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — to-suz məsdər tələb edən fellər',
  cards: [

    {
      type: 'lesson',
      title: 'to-suz məsdər işlənən fellər',
      content:
        'Aşağıdakı fellərdən sonra gələn mürəkkəb tamamlığın\n' +
        'II hissəsi to-suz məsdər şəklində işlənir:\n\n' +
        'to see — görmək\n' +
        'to watch — baxmaq / izləmək\n' +
        'to notice — görmək, fərq etmək\n' +
        'to hear — eşitmək\n' +
        'to feel — hiss etmək\n' +
        'to smell — iyləmək\n' +
        'to make — məcbur etmək\n' +
        'to let — icazə vermək',
      table: [
        ['Fel',       'Mənası',              'Nümunə'],
        ['to see',    'görmək',              'I saw him go out.'],
        ['to watch',  'baxmaq, izləmək',     'I watched them play.'],
        ['to notice', 'görmək, fərq etmək',  'I noticed him leave.'],
        ['to hear',   'eşitmək',             'I heard her sing.'],
        ['to feel',   'hiss etmək',          'I felt him move.'],
        ['to smell',  'iyləmək',             'I smelled something burn.'],
        ['to make',   'məcbur etmək',        'She made him do it.'],
        ['to let',    'icazə vermək',        'She let him go.'],
      ],
      tip: 'to make + obyekt + to-suz məsdər → məcburetmə\n' +
           'to let + obyekt + to-suz məsdər → icazə vermə\n\n' +
           '"I saw him go out." — "go" to-suzdur!\n' +
           'Passive-də: He was made TO go. (to geri qayıdır)',
    },

    { en: '"to see" + complex object — II hissə hansı formada?',     tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
    { en: '"to hear" + complex object — II hissə hansı formada?',    tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
    { en: '"to make" complex object-də nə mənasını verir?',          tr: 'Məcbur etmək',          wrong: 'Düzəltmək'           },
    { en: '"to let" complex object-də nə mənasını verir?',           tr: 'İcazə vermək',          wrong: 'Buraxmaq'            },
    { en: '"I saw him ___ out." — boşluq?',                          tr: 'go',                    wrong: 'to go'               },
    { en: '"She made him ___ it." — boşluq?',                        tr: 'do',                    wrong: 'to do'               },
    { en: '"She let him ___ ." — boşluq?',                           tr: 'go',                    wrong: 'to go'               },
    { en: '"I heard her ___ ." — boşluq?',                           tr: 'sing',                  wrong: 'to sing'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I saw him ___ out." — boşluğa nə gəlir?',
          options: ['to go', 'going', 'go', 'gone'],
          answer: 'go',
        },
        {
          q: '"She made him ___ it." — boşluğa nə gəlir?',
          options: ['to do', 'doing', 'do', 'done'],
          answer: 'do',
        },
        {
          q: '"She let him ___ ." — boşluğa nə gəlir?',
          options: ['to go', 'going', 'gone', 'go'],
          answer: 'go',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — P I ilə işlənmə ───────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Participle I (P I) ilə işlənmə',
  cards: [

    {
      type: 'lesson',
      title: 'P I ilə işlənmə — hərəkətin davam etməsi',
      content:
        'to see, to watch, to hear, to smell, to feel\n' +
        'felləri II hissədə to-suz məsdər əvəzinə P I (V+ing) qəbul edə bilir.\n\n' +
        'Fərq:\n' +
        '• to-suz məsdər → hərəkəti başdan sona gördük (tam)\n' +
        '• P I → hərəkətin davam etdiyini gördük (qismən)',
      table: [
        ['to-suz məsdər (tam)',              'P I (davam)'],
        ['I saw him go out.',                'I saw him going out.'],
        ['I heard her sing.',                'I heard her singing.'],
        ['I felt him move.',                 'I felt him moving.'],
        ['I watched them play.',             'I watched them playing.'],
      ],
      examples: [
        { word: 'I felt someone watching me.',   az: 'Birinin mənə baxdığını hiss etdim. (davam)' },
        { word: 'I saw him writing something.',  az: 'Onun nəsə yazdığını gördüm. (davam)'        },
        { word: 'She heard them singing.',       az: 'Onların oxuduğunu eşitdi. (davam)'           },
      ],
      tip: 'P I (V+ing) = hərəkət davam edirdi, tam bitməmişdi.\n' +
           'to-suz məsdər = hərəkəti əvvəldən axıra qədər gördük.',
    },

    { en: 'P I hansı fellərdən sonra işlənə bilər?',                 tr: 'to see, to watch, to hear, to smell, to feel', wrong: 'to want, to expect' },
    { en: 'P I nəyi bildirir?',                                       tr: 'Hərəkətin davam etdiyini', wrong: 'Hərəkətin bitdiyini' },
    { en: 'to-suz məsdər nəyi bildirir?',                            tr: 'Hərəkəti tam gördük',   wrong: 'Hərəkətin davam etdiyini' },
    { en: '"I felt someone watching me." — II hissə hansı formadadır?', tr: 'P I (watching)',     wrong: 'to-suz məsdər'       },
    { en: '"I saw him writing something." — II hissə hansı forma?',  tr: 'P I (writing)',         wrong: 'to-suz məsdər'       },
    { en: '"I saw him go out." vs "I saw him going out." — fərq nədir?', tr: 'Tam vs davam eden', wrong: 'Heç bir fərq yoxdur' },
    { en: '"I heard her ___ ." (davam) — boşluq?',                   tr: 'singing',               wrong: 'sing'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I felt someone ___ me." (davam) — boşluğa nə gəlir?',
          options: ['watch', 'to watch', 'watched', 'watching'],
          answer: 'watching',
        },
        {
          q: '"I saw him ___ something." (davam) — boşluğa nə gəlir?',
          options: ['write', 'to write', 'written', 'writing'],
          answer: 'writing',
        },
        {
          q: 'P I işləndiyi zaman hərəkət haqqında nə bilirik?',
          options: ['Tam bitdi', 'Başlamadı', 'Davam edirdi', 'Keçmişdə baş verdi'],
          answer: 'Davam edirdi',
        },
      ],
    },
  ],
},

// ── Dərs 3.3 — to ilə / to-suz / P I fərqi ───────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.3 — to ilə / to-suz / P I fərqi',
  cards: [

    {
      type: 'lesson',
      title: 'Üç formanın müqayisəsi',
      content: 'Complex object-də II hissənin üç forması:',
      table: [
        ['Forma',          'Fellər',                                  'Nümunə'],
        ['to + məsdər',    'to want, expect, ask, order, would like', 'I want him to go.'],
        ['to-suz məsdər',  'to see, watch, hear, feel, smell, make, let', 'I saw him go.'],
        ['P I (V+ing)',    'to see, watch, hear, feel, smell',        'I saw him going.'],
      ],
      tip: '"to" qrupu → istak/gözləmə felləri\n' +
           '"to-suz" qrupu → qavrayış + make/let felləri\n' +
           '"P I" → qavrayış felləri (davam bildirmək üçün)\n\n' +
           'make + to-suz: She made him do it.\n' +
           'let + to-suz: She let him go.',
    },

    {
      type: 'lesson',
      title: 'Tam xülasə cədvəli',
      content: 'Bütün fellərin II hissə forması:',
      table: [
        ['Fel',          'II hissə forması'],
        ['to want',      'to + məsdər'],
        ['to expect',    'to + məsdər'],
        ['to ask',       'to + məsdər'],
        ['to order',     'to + məsdər'],
        ['would like',   'to + məsdər'],
        ['to suggest',   'to + məsdər'],
        ['to see',       'to-suz məsdər / P I'],
        ['to watch',     'to-suz məsdər / P I'],
        ['to hear',      'to-suz məsdər / P I'],
        ['to feel',      'to-suz məsdər / P I'],
        ['to smell',     'to-suz məsdər / P I'],
        ['to notice',    'to-suz məsdər / P I'],
        ['to make',      'to-suz məsdər'],
        ['to let',       'to-suz məsdər'],
      ],
    },

    { en: '"to want" — II hissə forması?',                           tr: 'to + məsdər',           wrong: 'to-suz məsdər'       },
    { en: '"to see" — II hissə forması?',                            tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
    { en: '"to make" — II hissə forması?',                           tr: 'to-suz məsdər',         wrong: 'to + məsdər'         },
    { en: '"to let" — II hissə forması?',                            tr: 'to-suz məsdər',         wrong: 'to + məsdər'         },
    { en: '"to hear" — II hissə forması?',                           tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
    { en: '"to expect" — II hissə forması?',                         tr: 'to + məsdər',           wrong: 'to-suz məsdər'       },
    { en: '"I saw him go." vs "I saw him going." — fərq?',           tr: 'go = tam, going = davam', wrong: 'Heç fərq yoxdur'  },
    { en: '"to notice" — II hissə forması?',                         tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"I want him ___ go." — boşluğa nə gəlir?',
          options: ['heç nə', 'going', 'to', 'for'],
          answer: 'to',
        },
        {
          q: '"I saw him ___ go." — boşluğa nə gəlir?',
          options: ['to', 'for', 'heç nə', 'that'],
          answer: 'heç nə',
        },
        {
          q: '"She made him ___ do it." — "to" işlənirmi?',
          options: ['Bəli, to lazımdır', 'Xeyr, to-suz', 'P I işlənir', 'İkisi də olar'],
          answer: 'Xeyr, to-suz',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 ───────────────────────────────────────────
[
  { en: '"to see" + complex object — II hissə hansı formada?',       tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
  { en: '"to make" complex object-də nə mənasını verir?',            tr: 'Məcbur etmək',          wrong: 'Düzəltmək'           },
  { en: '"to let" complex object-də nə mənasını verir?',             tr: 'İcazə vermək',          wrong: 'Buraxmaq'            },
  { en: '"I saw him ___ out." — boşluq?',                            tr: 'go',                    wrong: 'to go'               },
  { en: '"She made him ___ it." — boşluq?',                          tr: 'do',                    wrong: 'to do'               },
  { en: 'P I nəyi bildirir?',                                        tr: 'Hərəkətin davam etdiyini', wrong: 'Hərəkətin bitdiyini' },
  { en: '"I felt someone watching me." — II hissə hansı forma?',     tr: 'P I (watching)',        wrong: 'to-suz məsdər'       },
  { en: '"to want" — II hissə forması?',                             tr: 'to + məsdər',           wrong: 'to-suz məsdər'       },
  { en: '"to hear" — II hissə forması?',                             tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
  { en: '"I saw him go." vs "I saw him going." — fərq?',             tr: 'go = tam, going = davam', wrong: 'Heç fərq yoxdur'  },
],

// ── Test 2 — to-suz + P I + ümumi fərq (Bölmə 3) — 12 sual ──
[
  { en: '"to see" — II hissə forması?',                              tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
  { en: '"to make" complex object-də nə mənasını verir?',           tr: 'Məcbur etmək',          wrong: 'Düzəltmək'           },
  { en: '"to let" complex object-də nə mənasını verir?',            tr: 'İcazə vermək',          wrong: 'Buraxmaq'            },
  { en: '"I saw him ___ out." — boşluq?',                           tr: 'go',                    wrong: 'to go'               },
  { en: '"She let him ___ ." — boşluq?',                            tr: 'go',                    wrong: 'to go'               },
  { en: 'P I nəyi bildirir?',                                       tr: 'Hərəkətin davam etdiyini', wrong: 'Hərəkətin bitdiyini' },
  { en: 'to-suz məsdər nəyi bildirir?',                             tr: 'Hərəkəti tam gördük',   wrong: 'Davam edirdi'         },
  { en: '"I felt someone watching me." — II hissə hansı forma?',    tr: 'P I (watching)',        wrong: 'to-suz məsdər'        },
  { en: '"to want" — II hissə forması?',                            tr: 'to + məsdər',           wrong: 'to-suz məsdər'        },
  { en: '"to hear" — II hissə forması?',                            tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'          },
  { en: '"to expect" — II hissə forması?',                          tr: 'to + məsdər',           wrong: 'to-suz məsdər'        },
  { en: '"to notice" — II hissə forması?',                          tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'          },
],

{
      type: 'section_divider',
      title: 'COMPLEX OBJECT - ÜMUMİ İMTAHAN',
},

// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Complex Object tam test · 20 sual        │
// └─────────────────────────────────────────────────────────┘
[
  // Quruluş
  { en: 'Mürəkkəb tamamlıq neçə hissədən ibarətdir?',               tr: '2 hissə',               wrong: '3 hissə'             },
  { en: 'I hissə nədən ibarət ola bilər?',                          tr: 'Adlıq isim / obyekt əvəzliyi', wrong: 'Yiyəlik əvəzliyi' },
  { en: 'II hissə nə ola bilər?',                                   tr: 'Məsdər (to/to-suz) / P I', wrong: 'Yalnız məsdər'    },
  { en: '"he" əvəzliyinin obyekt forması?',                         tr: 'him',                   wrong: 'his'                 },
  { en: '"they" əvəzliyinin obyekt forması?',                       tr: 'them',                  wrong: 'their'               },
  // to ilə fellər
  { en: '"to want" — II hissə forması?',                            tr: 'to + məsdər',           wrong: 'to-suz məsdər'       },
  { en: '"to expect" nə mənasını verir?',                           tr: 'Gözləmək',              wrong: 'Əmr etmək'           },
  { en: '"to order" nə mənasını verir?',                            tr: 'Əmr etmək',             wrong: 'Sifariş etmək'       },
  { en: '"I want you ___ understand me." — boşluq?',               tr: 'to',                    wrong: 'heç nə'              },
  { en: '"I want you understand me." — düzgündürmü?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
  // to-suz fellər
  { en: '"to see" — II hissə forması?',                             tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'         },
  { en: '"to make" complex object-də nə mənasını verir?',          tr: 'Məcbur etmək',          wrong: 'Düzəltmək'           },
  { en: '"to let" complex object-də nə mənasını verir?',           tr: 'İcazə vermək',          wrong: 'Buraxmaq'            },
  { en: '"I saw him ___ out." — boşluq?',                          tr: 'go',                    wrong: 'to go'               },
  { en: '"She made him ___ it." — boşluq?',                        tr: 'do',                    wrong: 'to do'               },
  // P I
  { en: 'P I nəyi bildirir?',                                      tr: 'Hərəkətin davam etdiyini', wrong: 'Hərəkətin bitdiyini' },
  { en: 'to-suz məsdər nəyi bildirir?',                            tr: 'Hərəkəti tam gördük',   wrong: 'Davam edirdi'         },
  { en: '"I felt someone watching me." — II hissə hansı forma?',   tr: 'P I (watching)',        wrong: 'to-suz məsdər'        },
  { en: '"I saw him go." vs "I saw him going." — fərq?',           tr: 'go = tam, going = davam', wrong: 'Heç fərq yoxdur'  },
  // Ümumi
  { en: '"to hear" — II hissə forması?',                           tr: 'to-suz məsdər / P I',   wrong: 'to + məsdər'          },
],

  ],
};

// ── 14. SUBJECT-VERB AGREEMENT ───────────────────────────────
const SUBJECT_VERB_AGREEMENT_LEVEL = {
  id: 'subject_verb_agreement',
  name: 'SUBJECT-VERB AGREEMENT',
  icon: '<i class="ti ti-scale"></i>',
  color: '#36d39a',
  quizzes: [

{
      type: 'section_divider',
      title: 'And · Either/Or · Neither/Nor · With',
},
// ══════════════════════════════════════════════════════════
// ║  SUBJECT-VERB AGREEMENT — Tam bölüm                   ║
// ══════════════════════════════════════════════════════════

// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 1 — And · Either/Or · Neither/Nor · With        │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 1 — And ilə bağlanan mübtədalar + Either/Or · Neither/Nor ──

// ── Dərs 1.1 — And ilə cəm xəbər ────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — And ilə cəm xəbər',
  cards: [

    {
      type: 'lesson',
      title: 'Ümumi qayda və "and" bağlayıcısı',
      content:
        'İngilis dilində xəbər şəxsə və kəmiyyətə görə mübtəda ilə uzlaşır:\n' +
        '• Mübtəda təkdə → xəbər təkdə\n' +
        '• Mübtəda cəmdə → xəbər cəmdə\n\n' +
        'Qayda 1: "and" bağlayıcısı ilə bağlanan iki və daha çox\n' +
        'həmcins mübtədadan sonra xəbər CƏMdə olur.',
      table: [
        ['Nümunə',                        'Azərbaycanca'],
        ['John and I were talking.',       'John və mən danışırdıq.'],
        ['Tea and coffee are useful.',     'Çay və qəhvə faydalıdır.'],
      ],
      tip: 'İstisna: "Bread and butter is tasty." — bir bütöv kimi qəbul edilən şeylər\n' +
           'Birlikdə həmişə istifadə edilən iki söz bir anlayış kimi tək xəbər alır.',
    },

    { en: '"and" ilə bağlanan iki mübtədadan sonra xəbər necə olur?',  tr: 'Cəmdə',                wrong: 'Təkdə'               },
    { en: '"John and I ___ talking." — boşluq?',                       tr: 'were',                  wrong: 'was'                 },
    { en: '"Tea and coffee ___ useful." — boşluq?',                    tr: 'are',                   wrong: 'is'                  },
    { en: '"Bread and butter is tasty." — niyə tək?',                  tr: 'Bir bütöv kimi qəbul edilir', wrong: 'İki mübtəda var' },
    { en: 'Ümumi qayda: mübtəda cəmdə olduqda xəbər necə olur?',      tr: 'Cəmdə',                 wrong: 'Təkdə'               },
    { en: '"and" bağlayıcısı ilə bağlanan mübtədalar xəbəri neçə alır?', tr: 'Cəm',                wrong: 'Tək'                 },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Tom and Mary ___ friends." — boşluq?',
          options: ['is', 'was', 'are', 'has'],
          answer: 'are',
        },
        {
          q: '"Tea and coffee ___ useful." — boşluq?',
          options: ['is', 'was', 'are', 'were'],
          answer: 'are',
        },
        {
          q: '"Bread and butter ___ tasty." — (bir bütöv) boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Either/or · Neither/nor ───────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Either/or · Neither/nor',
  cards: [

    {
      type: 'lesson',
      title: '"either...or" / "neither...nor" — axırıncı mübtəda ilə uzlaşma',
      content:
        'Qayda 2: İki mübtəda "either...or", "neither...nor"\n' +
        'bağlayıcıları ilə bağlanarkən xəbər\n' +
        'AXIRINCİ mübtəda ilə uzlaşır.\n\n' +
        '• Axırıncı mübtəda tək → xəbər tək\n' +
        '• Axırıncı mübtəda cəm → xəbər cəm',
      table: [
        ['Nümunə',                                    'Axırıncı mübtəda', 'Xəbər'],
        ['Either you or I am to go.',                  'I (tək)',          'am'],
        ['Neither Brown nor you were at home.',        'you (cəm kimi)',   'were'],
        ['Neither you nor Brown was at home.',         'Brown (tək)',      'was'],
      ],
      tip: '"not only...but also" bağlayıcısında da eyni qayda tətbiq olunur:\n' +
           'axırıncı mübtəda ilə uzlaşır.',
    },

    { en: '"either...or" ilə xəbər hansı mübtəda ilə uzlaşır?',       tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
    { en: '"neither...nor" ilə xəbər hansı mübtəda ilə uzlaşır?',     tr: 'Axırıncı mübtəda',      wrong: 'Hər ikisi'           },
    { en: '"Either you or I ___ to go." — boşluq?',                   tr: 'am',                    wrong: 'are'                 },
    { en: '"Neither Brown nor you ___ at home." — boşluq?',           tr: 'were',                  wrong: 'was'                 },
    { en: '"Neither you nor Brown ___ at home." — boşluq?',           tr: 'was',                   wrong: 'were'                },
    { en: '"not only...but also" — xəbər hansı mübtəda ilə uzlaşır?', tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Either she or they ___ right." — boşluq?',
          options: ['is', 'am', 'was', 'are'],
          answer: 'are',
        },
        {
          q: '"Neither he nor she ___ home." — boşluq?',
          options: ['are', 'were', 'is', 'am'],
          answer: 'is',
        },
        {
          q: '"Either you or I ___ to go." — boşluq?',
          options: ['are', 'is', 'were', 'am'],
          answer: 'am',
        },
      ],
    },
  ],
},

// ── Dərs 1.3 — Not only...but also ───────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.3 — Not only...but also',
  cards: [

    {
      type: 'lesson',
      title: '"not only...but also" — axırıncı mübtəda ilə uzlaşma',
      content:
        '"Not only...but also" bağlayıcısı ilə bağlanan mübtədalardan\n' +
        'sonra xəbər axırıncı mübtəda ilə uzlaşır.\n\n' +
        'Bu qayda "either...or" və "neither...nor" ilə eynidir.',
      table: [
        ['Nümunə',                                        'Axırıncı mübtəda', 'Xəbər'],
        ['Not only she but also they are here.',           'they (cəm)',       'are'],
        ['Not only he but also I am right.',               'I (tək)',          'am'],
        ['Not only you but also she is correct.',          'she (tək)',        'is'],
      ],
      tip: 'Xülasə — axırıncı mübtəda ilə uzlaşan bağlayıcılar:\n' +
           '• either...or\n' +
           '• neither...nor\n' +
           '• not only...but also',
    },

    { en: '"Not only she but also they ___ here." — boşluq?',         tr: 'are',                   wrong: 'is'                  },
    { en: '"not only...but also" — xəbər hansı mübtəda ilə uzlaşır?', tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
    { en: '"Not only he but also I ___ right." — boşluq?',            tr: 'am',                    wrong: 'is'                  },
    { en: '"Not only you but also she ___ correct." — boşluq?',       tr: 'is',                    wrong: 'are'                 },
    { en: 'Hansı 3 bağlayıcıda axırıncı mübtəda ilə uzlaşma var?',   tr: 'either/or · neither/nor · not only/but also', wrong: 'and · or · but' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Not only she but also they ___ here." — boşluq?',
          options: ['is', 'was', 'are', 'am'],
          answer: 'are',
        },
        {
          q: '"Not only he but also I ___ right." — boşluq?',
          options: ['is', 'are', 'was', 'am'],
          answer: 'am',
        },
        {
          q: 'Hansı bağlayıcıda axırıncı mübtəda ilə uzlaşma VAR?',
          options: ['and', 'but', 'neither...nor', 'or (sadə)'],
          answer: 'neither...nor',
        },
      ],
    },
  ],
},

{
      type: 'section_divider',
      title: 'With / Together with · Qeyri-müəyyən əvəzliklər',
},

// ── Bölmə 2 — With / Together with · Qeyri-müəyyən əvəzliklər ──

// ── Dərs 2.1 — With / Together with ─────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — With / Together with',
  cards: [

    {
      type: 'lesson',
      title: '"with" / "together with" — birinci mübtəda ilə uzlaşma',
      content:
        'Qayda 3: "with" yaxud "together with" bağlayıcısı ilə\n' +
        'bağlanmış iki isim mübtəda funksiyasında işlənərkən\n' +
        'xəbər BİRİNCİ mübtəda ilə uzlaşır.',
      table: [
        ['Nümunə',                                           'Birinci mübtəda', 'Xəbər'],
        ['The teacher with the students was present.',        'The teacher (tək)', 'was'],
        ['My brother with his friends is coming.',            'My brother (tək)', 'is'],
        ['The students with the teacher were present.',       'The students (cəm)', 'were'],
      ],
      tip: '"with" ilə bağlanan ikinci hissə əslində "əlavə məlumat" verir.\n' +
           'Əsas mübtəda birinci isimdir — xəbər ona görə uzlaşır.\n\n' +
           '"and" → xəbər cəm\n' +
           '"with" → xəbər BİRİNCİ mübtəda ilə',
    },

    { en: '"with" / "together with" ilə xəbər hansı mübtəda ilə uzlaşır?', tr: 'Birinci mübtəda', wrong: 'Axırıncı mübtəda'   },
    { en: '"The teacher with the students ___ present." — boşluq?',    tr: 'was',                   wrong: 'were'                },
    { en: '"The students with the teacher ___ present." — boşluq?',    tr: 'were',                  wrong: 'was'                 },
    { en: '"and" vs "with" — xəbər fərqi nədir?',                      tr: 'and → cəm, with → birinci mübtəda', wrong: 'Heç fərq yoxdur' },
    { en: '"My brother with his friends ___ coming." — boşluq?',       tr: 'is',                    wrong: 'are'                 },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"The teacher with the students ___ present." — boşluq?',
          options: ['were', 'are', 'have', 'was'],
          answer: 'was',
        },
        {
          q: '"The students with the teacher ___ present." — boşluq?',
          options: ['was', 'is', 'were', 'has'],
          answer: 'were',
        },
        {
          q: '"and" ilə "with" arasındakı fərq nədir?',
          options: [
            'and → cəm, with → birinci mübtəda',
            'Hər ikisi cəm xəbər alır',
            'Hər ikisi tək xəbər alır',
            'and → birinci, with → axırıncı',
          ],
          answer: 'and → cəm, with → birinci mübtəda',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Qeyri-müəyyən əvəzliklər ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Qeyri-müəyyən əvəzliklər',
  cards: [

    {
      type: 'lesson',
      title: 'Qeyri-müəyyən əvəzliklərdən sonra tək xəbər',
      content:
        'Qayda 4: Qeyri-müəyyən əvəzliklər mübtəda funksiyasında\n' +
        'işlənərkən xəbər həmişə TƏKdə olur.\n\n' +
        'Bu əvəzliklər:\n' +
        'each, one, everybody, everyone, anyone, anybody,\n' +
        'somebody, something, anything, nobody, none, nothing',
      table: [
        ['Əvəzlik',     'Mənası',              'Nümunə'],
        ['each',        'hər biri',            'Each of them is ready.'],
        ['everyone',    'hər kəs',             'Everyone is here.'],
        ['somebody',    'kimsə',               'Somebody is knocking.'],
        ['nobody',      'heç kəs',             'Nobody knows it.'],
        ['nothing',     'heç nə',              'Nothing is wrong.'],
        ['anyone',      'hər hansı biri',      'Anyone can do it.'],
        ['none',        'heç biri',            'None of them is right.'],
      ],
      tip: 'Bu əvəzliklərin hamısı TƏK xəbər alır — istisna yoxdur!\n' +
           '"Everyone ARE here" ❌\n' +
           '"Everyone IS here" ✅',
    },

    { en: '"each, one, everybody, everyone" — xəbər necə olur?',      tr: 'Tək',                   wrong: 'Cəm'                 },
    { en: '"nobody, none, nothing" — xəbər necə olur?',               tr: 'Tək',                   wrong: 'Cəm'                 },
    { en: '"Everyone ___ here." — boşluq?',                           tr: 'is',                    wrong: 'are'                 },
    { en: '"Nobody ___ it." — boşluq?',                               tr: 'knows',                 wrong: 'know'                },
    { en: '"Each of them ___ ready." — boşluq?',                      tr: 'is',                    wrong: 'are'                 },
    { en: '"Something ___ wrong." — boşluq?',                         tr: 'is',                    wrong: 'are'                 },
    { en: '"None of them ___ right." — boşluq?',                      tr: 'is',                    wrong: 'are'                 },
    { en: '"Somebody ___ knocking." — boşluq?',                       tr: 'is',                    wrong: 'are'                 },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Everyone ___ happy." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"Nobody ___ the answer." — boşluq?',
          options: ['know', 'are', 'were', 'knows'],
          answer: 'knows',
        },
        {
          q: '"Each of the students ___ a book." — boşluq?',
          options: ['have', 'are', 'has', 'were'],
          answer: 'has',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 ───────────────────────────────────────────
[
  { en: '"and" ilə bağlanan iki mübtədadan sonra xəbər necə olur?',  tr: 'Cəmdə',                 wrong: 'Təkdə'               },
  { en: '"either...or" — xəbər hansı mübtəda ilə uzlaşır?',         tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
  { en: '"neither...nor" — xəbər hansı mübtəda ilə uzlaşır?',       tr: 'Axırıncı mübtəda',      wrong: 'Hər ikisi'           },
  { en: '"with" / "together with" — xəbər hansı mübtəda ilə?',      tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'    },
  { en: 'Qeyri-müəyyən əvəzliklərdən sonra xəbər necə olur?',       tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Either you or I ___ to go." — boşluq?',                   tr: 'am',                    wrong: 'are'                 },
  { en: '"Neither you nor Brown ___ at home." — boşluq?',           tr: 'was',                   wrong: 'were'                },
  { en: '"The teacher with the students ___ present." — boşluq?',   tr: 'was',                   wrong: 'were'                },
  { en: '"Everyone ___ here." — boşluq?',                           tr: 'is',                    wrong: 'are'                 },
  { en: '"Nobody ___ it." — boşluq?',                               tr: 'knows',                 wrong: 'know'                },
],

// ── Test 1 — And / Either / With / Qeyri-müəyyən (Bölmə 1–2) — 12 sual ──
[
  { en: '"and" ilə bağlanan mübtədalardan sonra xəbər necə?',        tr: 'Cəm',                   wrong: 'Tək'                 },
  { en: '"John and I ___ talking." — boşluq?',                       tr: 'were',                  wrong: 'was'                 },
  { en: '"Tea and coffee ___ useful." — boşluq?',                    tr: 'are',                   wrong: 'is'                  },
  { en: '"either...or" — xəbər hansı mübtəda ilə uzlaşır?',         tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
  { en: '"Either you or I ___ to go." — boşluq?',                   tr: 'am',                    wrong: 'are'                 },
  { en: '"Neither Brown nor you ___ at home." — boşluq?',           tr: 'were',                  wrong: 'was'                 },
  { en: '"not only...but also" — xəbər hansı mübtəda ilə?',         tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
  { en: '"Not only she but also they ___ here." — boşluq?',         tr: 'are',                   wrong: 'is'                  },
  { en: '"with" / "together with" — xəbər hansı mübtəda ilə?',      tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'    },
  { en: '"The teacher with the students ___ present." — boşluq?',   tr: 'was',                   wrong: 'were'                },
  { en: 'Qeyri-müəyyən əvəzliklərdən sonra xəbər necə olur?',       tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Everyone ___ here." — boşluq?',                           tr: 'is',                    wrong: 'are'                 },
],


{
      type: 'section_divider',
      title: 'Ölçü/vaxt/məbləğ · Riyazi hesab · There is/are',
},
// ┌─────────────────────────────────────────────────────────┐
// │  QRUP 2 — Ölçü · Riyazi hesab · There is/are          │
// └─────────────────────────────────────────────────────────┘

// ── Bölmə 3 — Ölçü/vaxt/məbləğ · Riyazi hesab · There is/are ──

// ── Dərs 3.1 — Ölçü / vaxt / məbləğ / məsafə ────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — Ölçü / vaxt / məbləğ / məsafə',
  cards: [

    {
      type: 'lesson',
      title: 'Ölçü, vaxt, məbləğ, məsafə — tək xəbər',
      content:
        'Qayda 5: Ölçü, vaxt, məbləğ və məsafə bildirən\n' +
        'isimlərlə ifadə olunan mübtədadan sonra\n' +
        'xəbər TƏKdə işlənir.',
      table: [
        ['Nümunə',                          'İzah'],
        ['Ten miles is a long distance.',    'Məsafə → tək xəbər'],
        ['Two hours is enough time.',        'Vaxt → tək xəbər'],
        ['Five dollars is too much.',        'Məbləğ → tək xəbər'],
        ['Three kilos is a lot.',            'Ölçü → tək xəbər'],
      ],
      tip: 'Bu cümlələrdə rəqəm cəm görünür, amma xəbər TƏKdə olur,\n' +
           'çünki ölçü/vaxt/məbləğ/məsafə bir bütöv anlayış kimi qəbul edilir.',
    },

    { en: 'Ölçü, vaxt, məbləğ bildirən mübtədadan sonra xəbər necə?', tr: 'Tək',                  wrong: 'Cəm'                 },
    { en: '"Ten miles ___ a long distance." — boşluq?',               tr: 'is',                    wrong: 'are'                 },
    { en: '"Two hours ___ enough time." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
    { en: '"Five dollars ___ too much." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
    { en: 'Niyə "Ten miles is" — tək xəbər?',                        tr: 'Bir bütöv ölçü anlayışı kimi', wrong: 'Tək ism olduğu üçün' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Two hours ___ enough." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"Five dollars ___ too much." — boşluq?',
          options: ['are', 'were', 'have', 'is'],
          answer: 'is',
        },
        {
          q: '"Ten miles ___ a long way." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — Riyazi hesab ──────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — Riyazi hesab',
  cards: [

    {
      type: 'lesson',
      title: 'Riyazi hesablama — xəbər qaydaları',
      content:
        'Qayda 6: Mübtəda riyazi hesablama bildirən söz qrupu\n' +
        'ilə ifadə olunduqda xəbər TƏKdə işlənir.\n\n' +
        'Toplama və çıxma → xəbər TƏK\n' +
        'Vurma → xəbər HƏM TƏK, HƏM CƏM ola bilər',
      table: [
        ['Əməliyyat',  'Nümunə',                   'Xəbər'],
        ['Toplama',    'Five and five is ten.',      'is (tək)'],
        ['Çıxma',      'Four minus two is two.',     'is (tək)'],
        ['Vurma',      'Two times three is/are six.', 'is və ya are'],
        ['Bölmə',      'Ten divided by two is five.', 'is (tək)'],
      ],
      tip: 'Toplama: "Five and five IS ten." ✅\n' +
           'Çıxma: "Four minus two IS two." ✅\n' +
           'Vurma: "Two times three IS/ARE six." — hər ikisi düzgün!',
    },

    { en: 'Toplama cümləsində xəbər necə olur?',                      tr: 'Tək',                   wrong: 'Cəm'                 },
    { en: 'Çıxma cümləsində xəbər necə olur?',                        tr: 'Tək',                   wrong: 'Cəm'                 },
    { en: 'Vurma cümləsində xəbər necə ola bilər?',                   tr: 'Həm tək, həm cəm',      wrong: 'Yalnız tək'          },
    { en: '"Five and five ___ ten." — boşluq?',                       tr: 'is',                    wrong: 'are'                 },
    { en: '"Four minus two ___ two." — boşluq?',                      tr: 'is',                    wrong: 'are'                 },
    { en: '"Two times three ___ six." — hansı forma düzgündür?',      tr: 'is və ya are (hər ikisi)', wrong: 'Yalnız are'       },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Five and five ___ ten." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"Four minus two ___ two." — boşluq?',
          options: ['are', 'were', 'have', 'is'],
          answer: 'is',
        },
        {
          q: 'Vurma cümləsində xəbər necə ola bilər?',
          options: ['Yalnız tək', 'Yalnız cəm', 'Həm tək, həm cəm', 'Heç biri'],
          answer: 'Həm tək, həm cəm',
        },
      ],
    },
  ],
},

// ── Dərs 3.3 — There is / There are ─────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.3 — There is / There are',
  cards: [

    {
      type: 'lesson',
      title: '"There is/are" — birinci mübtəda ilə uzlaşma',
      content:
        'Qayda 7: "There" formal sözü ilə başlanan cümlələrdə\n' +
        'bir neçə mübtəda olduqda xəbər adətən\n' +
        'BİRİNCİ mübtəda ilə uzlaşır.',
      table: [
        ['Nümunə',                                        'Birinci mübtəda', 'Xəbər'],
        ['There is a table and six chairs in the room.',  'a table (tək)',   'is'],
        ['There are six chairs and a table in the room.', 'six chairs (cəm)', 'are'],
        ['There is a book and two pens on the desk.',     'a book (tək)',    'is'],
        ['There are two pens and a book on the desk.',    'two pens (cəm)',  'are'],
      ],
      tip: '"There is" → birinci isim tək\n' +
           '"There are" → birinci isim cəm\n\n' +
           'Cümlədəki digər isimlərin sayı xəbərə təsir etmir,\n' +
           'yalnız birinci isim vacibdir.',
    },

    { en: '"There is/are" cümlədə xəbər hansı mübtəda ilə uzlaşır?',  tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'   },
    { en: '"There ___ a table and six chairs." — boşluq?',            tr: 'is',                    wrong: 'are'                 },
    { en: '"There ___ six chairs and a table." — boşluq?',            tr: 'are',                   wrong: 'is'                  },
    { en: '"There ___ a book and two pens." — boşluq?',               tr: 'is',                    wrong: 'are'                 },
    { en: '"There ___ two pens and a book." — boşluq?',               tr: 'are',                   wrong: 'is'                  },
    { en: '"There is/are"-da yalnız nə vacibdir?',                    tr: 'Birinci ismin sayı',    wrong: 'Bütün isimlərin sayı' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"There ___ a table and six chairs in the room." — boşluq?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"There ___ three books and a pen on the desk." — boşluq?',
          options: ['is', 'was', 'are', 'has'],
          answer: 'are',
        },
        {
          q: '"There is/are"-da xəbər hansı mübtəda ilə uzlaşır?',
          options: ['Axırıncı', 'Ən çox olan', 'Birinci', 'Hamısı ilə'],
          answer: 'Birinci',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 ───────────────────────────────────────────
[
  { en: 'Ölçü, vaxt, məbləğ bildirən mübtədadan sonra xəbər necə?', tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Ten miles ___ a long distance." — boşluq?',               tr: 'is',                    wrong: 'are'                 },
  { en: '"Two hours ___ enough time." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
  { en: 'Riyazi toplama cümləsində xəbər necə?',                    tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Five and five ___ ten." — boşluq?',                       tr: 'is',                    wrong: 'are'                 },
  { en: 'Vurma cümləsində xəbər necə ola bilər?',                   tr: 'Həm tək, həm cəm',      wrong: 'Yalnız tək'          },
  { en: '"There is/are"-da xəbər hansı mübtəda ilə uzlaşır?',       tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'    },
  { en: '"There ___ a table and six chairs." — boşluq?',            tr: 'is',                    wrong: 'are'                 },
  { en: '"There ___ six chairs and a table." — boşluq?',            tr: 'are',                   wrong: 'is'                  },
  { en: '"Five dollars ___ too much." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
],

// ── Test 2 — Ölçü + Riyazi + There is/are (Bölmə 3) — 10 sual ──
[
  { en: 'Ölçü, vaxt, məbləğ bildirən mübtədadan sonra xəbər necə?', tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Ten miles ___ a long distance." — boşluq?',               tr: 'is',                    wrong: 'are'                 },
  { en: '"Two hours ___ enough time." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
  { en: '"Five dollars ___ too much." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
  { en: '"Five and five ___ ten." — boşluq?',                       tr: 'is',                    wrong: 'are'                 },
  { en: '"Four minus two ___ two." — boşluq?',                      tr: 'is',                    wrong: 'are'                 },
  { en: 'Vurma cümləsində xəbər necə ola bilər?',                   tr: 'Həm tək, həm cəm',      wrong: 'Yalnız tək'          },
  { en: '"There is/are"-da xəbər hansı mübtəda ilə uzlaşır?',       tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'    },
  { en: '"There ___ a table and six chairs." — boşluq?',            tr: 'is',                    wrong: 'are'                 },
  { en: '"There ___ three books and a pen." — boşluq?',             tr: 'are',                   wrong: 'is'                  },
],

{
      type: 'section_divider',
      title: 'SUBJECT-VERB AGREEMENT - ÜMUMİ İMTAHAN',
},

// ┌─────────────────────────────────────────────────────────┐
// │  FINAL TEST — Subject-Verb Agreement tam test · 20 sual│
// └─────────────────────────────────────────────────────────┘
[
  // And / Or / Nor / With
  { en: '"and" ilə bağlanan iki mübtədadan sonra xəbər necə?',       tr: 'Cəm',                   wrong: 'Tək'                 },
  { en: '"John and I ___ talking." — boşluq?',                       tr: 'were',                  wrong: 'was'                 },
  { en: '"Tea and coffee ___ useful." — boşluq?',                    tr: 'are',                   wrong: 'is'                  },
  { en: '"Bread and butter ___ tasty." — (bir bütöv) boşluq?',      tr: 'is',                    wrong: 'are'                 },
  { en: '"either...or" — xəbər hansı mübtəda ilə uzlaşır?',         tr: 'Axırıncı mübtəda',      wrong: 'Birinci mübtəda'     },
  { en: '"Either you or I ___ to go." — boşluq?',                   tr: 'am',                    wrong: 'are'                 },
  { en: '"Neither you nor Brown ___ at home." — boşluq?',           tr: 'was',                   wrong: 'were'                },
  { en: '"Not only she but also they ___ here." — boşluq?',         tr: 'are',                   wrong: 'is'                  },
  { en: '"with" / "together with" — xəbər hansı mübtəda ilə?',      tr: 'Birinci mübtəda',       wrong: 'Axırıncı mübtəda'    },
  { en: '"The teacher with the students ___ present." — boşluq?',   tr: 'was',                   wrong: 'were'                },
  // Qeyri-müəyyən əvəzliklər
  { en: 'Qeyri-müəyyən əvəzliklərdən sonra xəbər necə olur?',       tr: 'Tək',                   wrong: 'Cəm'                 },
  { en: '"Everyone ___ here." — boşluq?',                           tr: 'is',                    wrong: 'are'                 },
  { en: '"Nobody ___ it." — boşluq?',                               tr: 'knows',                 wrong: 'know'                },
  { en: '"Each of them ___ ready." — boşluq?',                      tr: 'is',                    wrong: 'are'                 },
  // Ölçü / Riyazi / There is/are
  { en: '"Ten miles ___ a long distance." — boşluq?',               tr: 'is',                    wrong: 'are'                 },
  { en: '"Two hours ___ enough time." — boşluq?',                   tr: 'is',                    wrong: 'are'                 },
  { en: '"Five and five ___ ten." — boşluq?',                       tr: 'is',                    wrong: 'are'                 },
  { en: 'Vurma cümləsində xəbər necə ola bilər?',                   tr: 'Həm tək, həm cəm',      wrong: 'Yalnız tək'          },
  { en: '"There ___ a table and six chairs." — boşluq?',            tr: 'is',                    wrong: 'are'                 },
  { en: '"There ___ three books and a pen." — boşluq?',             tr: 'are',                   wrong: 'is'                  },
],

  ],
};

// ── 15. THE IMPERATIVE (ƏMR CÜMLƏSİ) ────────────────────────
const IMPERATIVE_LEVEL = {
  id: 'imperative',
  name: 'THE IMPERATIVE — ƏMR CÜMLƏSİ',
  icon: '<i class="ti ti-speakerphone"></i>',
  color: '#fda4af',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  THE IMPERATIVE — Tam bölüm                           ║
// ══════════════════════════════════════════════════════════

      
{
      type: 'section_divider',
      title: 'Əmr cümləsi',
},

// ┌─────────────────────────────────────────────────────────┐
// │  MÖVZU 1 — The Imperative (Əmr Cümləsi)               │
// └─────────────────────────────────────────────────────────┘

// ── Qrup 1 — Əsas qayda + Do · İnkar · to be əmri ───────

// ── Dərs 1.1 — Əsas qayda ────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Əsas qayda',
  cards: [

    {
      type: 'lesson',
      title: 'Əmr cümləsinin əsas qaydası',
      content:
        'Əmr, xahiş bildirən cümlələrə deyilir.\n\n' +
        'Hərəkət əsasən ikinci şəxsə aiddir.\n' +
        'Felin qarşısından "to" hissəciyi atılır və cümlə fellə başlayır.\n\n' +
        '"Do" sözü əmrin daha da vacib və mütləq olduğunu bildirir.',
      table: [
        ['Məsdər',      'Əmr forması',        'Azərbaycanca'],
        ['to go',       'Go to school.',       'Məktəbə get.'],
        ['to read',     'Read the book.',      'Kitabı oxu.'],
        ['to open',     'Open the window.',    'Pəncərəni aç.'],
        ['to sit',      'Sit down.',           'Otur.'],
        ['to go (do)',  'Do go to school.',    'Mütləq məktəbə get.'],
        ['to read (do)','Do read this book.',  'Mütləq bu kitabı oxu.'],
      ],
      tip: '"Do" əmrin önünə gəldikdə "mütləq" mənası verir:\n' +
           'Do go! — Mütləq get!\n' +
           'Do read! — Mütləq oxu!',
    },

    { en: 'Əmr cümləsi hansı şəxsə aiddir?',                         tr: 'II şəxs',               wrong: 'I şəxs'              },
    { en: 'Əmr cümləsində "to" nə olur?',                            tr: 'Atılır',                wrong: 'Qalır'               },
    { en: 'Əmr cümləsi nə ilə başlayır?',                            tr: 'Fellə',                 wrong: 'İsimlə'              },
    { en: '"Do" əmr cümləsinin önündə nə mənası verir?',             tr: 'Mütləq',                wrong: 'Etmə'                },
    { en: '"Do go to school." — "Do" nə üçün işlənir?',              tr: 'Mütləqlik bildirmək',   wrong: 'İnkar bildirmək'     },
    { en: '"to go" → əmr forması?',                                  tr: 'Go',                    wrong: 'To go'               },
    { en: '"to read" → əmr forması?',                                tr: 'Read',                  wrong: 'To read'             },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"to open" → əmr forması?',
          options: ['To open', 'Opening', 'Open', 'Opens'],
          answer: 'Open',
        },
        {
          q: '"Do go!" — "Do" nə mənası verir?',
          options: ['İnkar', 'Mütləq', 'İcazə', 'Xahiş'],
          answer: 'Mütləq',
        },
        {
          q: 'Əmr cümləsi nə ilə başlayır?',
          options: ['İsimlə', 'Əvəzliklə', 'Fellə', 'Sifətlə'],
          answer: 'Fellə',
        },
      ],
    },
  ],
},

// ── Dərs 1.2 — Do + İnkar + to be əmri (qüvvətləndirmə) ─
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — Do + İnkar + to be',
  cards: [

    {
      type: 'lesson',
      title: 'İnkar əmr + to be əmr forması',
      content:
        'İnkar əmr: Don\'t + fel\n\n' +
        '"to be" felinin əmr forması xüsusidir:\n' +
        'Təsdiq: Be + sifət\n' +
        'İnkar: Don\'t be + sifət',
      table: [
        ['Forma',        'Nümunə',                'Azərbaycanca'],
        ['Təsdiq',       'Go.',                   'Get.'],
        ['Do (mütləq)',  'Do go.',                'Mütləq get.'],
        ['İnkar',        'Don\'t go.',            'Getmə.'],
        ['İnkar',        'Don\'t read this.',     'Bunu oxuma.'],
        ['Be (təsdiq)',  'Be ready!',             'Hazır ol!'],
        ['Be (təsdiq)',  'Be sure!',              'Əmin ol!'],
        ['Be (təsdiq)',  'Be quiet!',             'Sakit ol!'],
        ['Don\'t be',   'Don\'t be angry!',       'Əsəbləşmə!'],
        ['Don\'t be',   'Don\'t be late!',        'Gecikmə!'],
      ],
      tip: '"to be" felinin əmr forması → Be!\n' +
           '"to be" felinin inkar əmri → Don\'t be!\n\n' +
           'Don\'t go. ✅\n' +
           'Don\'t be angry. ✅',
    },

    { en: 'Əmr cümləsinin inkarı necə düzəlir?',                     tr: 'Don\'t + fel',          wrong: 'Not + fel'           },
    { en: '"to be" felinin əmr forması?',                            tr: 'Be',                    wrong: 'Is'                  },
    { en: '"to be" felinin inkar əmr forması?',                      tr: 'Don\'t be',             wrong: 'Be not'              },
    { en: '"Be ready!" — Azərbaycancası?',                           tr: 'Hazır ol!',             wrong: 'Hazır deyilsən!'     },
    { en: '"Don\'t be angry!" — Azərbaycancası?',                    tr: 'Əsəbləşmə!',           wrong: 'Əsəbi olma!'         },
    { en: '"Don\'t be late!" — Azərbaycancası?',                     tr: 'Gecikmə!',              wrong: 'Gec olma!'           },
    { en: '"Don\'t go." — düzgün inkar əmrdirmi?',                   tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"Be not angry!" — düzgündürmü?',                          tr: 'Xeyr, "Don\'t be" olmalıdır', wrong: 'Bəli'         },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ ready!" — boşluğa nə gəlir? (to be əmri)',
          options: ['Is', 'Are', 'Be', 'Don\'t be'],
          answer: 'Be',
        },
        {
          q: '"___ be late!" — boşluğa nə gəlir? (inkar)',
          options: ['Be not', 'Not be', 'Don\'t', 'Don\'t be'],
          answer: 'Don\'t',
        },
        {
          q: '"___ go!" — boşluğa nə gəlir? (inkar)',
          options: ['Not', 'Be not', 'Don\'t', 'No'],
          answer: 'Don\'t',
        },
      ],
    },
  ],
},

// ── Mini-quiz 1 — Əmr formasını düzəlt · Do/Don't · Be əmri ──
[
  { en: 'Əmr cümləsi hansı şəxsə aiddir?',                          tr: 'II şəxs',               wrong: 'I şəxs'              },
  { en: 'Əmr cümləsində "to" nə olur?',                             tr: 'Atılır',                wrong: 'Qalır'               },
  { en: '"Do" əmr cümləsinin önündə nə mənası verir?',              tr: 'Mütləq',                wrong: 'Etmə'                },
  { en: 'Əmr cümləsinin inkarı necə düzəlir?',                      tr: 'Don\'t + fel',          wrong: 'Not + fel'           },
  { en: '"to be" felinin əmr forması?',                             tr: 'Be',                    wrong: 'Is'                  },
  { en: '"to be" felinin inkar əmr forması?',                       tr: 'Don\'t be',             wrong: 'Be not'              },
  { en: '"Be ready!" — Azərbaycancası?',                            tr: 'Hazır ol!',             wrong: 'Hazır deyilsən!'     },
  { en: '"Don\'t be angry!" — Azərbaycancası?',                     tr: 'Əsəbləşmə!',           wrong: 'Əsəbi olma!'         },
  { en: '"Don\'t go." — düzgün inkar əmrdirmi?',                    tr: 'Bəli',                  wrong: 'Xeyr'                },
  { en: '"to open" → əmr forması?',                                 tr: 'Open',                  wrong: 'To open'             },
],


// ── Qrup 2 — Let ilə I və III şəxs əmri ──────────────────

{
      type: 'section_divider',
      title: 'Let ilə I və III şəxs əmri',
},
// ── Dərs 2.1 — Let ilə əmr ───────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Let ilə əmr',
  cards: [

    {
      type: 'lesson',
      title: '"Let" ilə I və III şəxs əmri',
      content:
        'Hərəkət I və III şəxsə aid edildikdə\n' +
        '"to let" feli ilə başlayan cümlə növündən istifadə edilir.\n\n' +
        '"to let" felindən sonra məsdər "to" hissəciksiz işlədilir.\n\n' +
        '"Let" — gəlin, icazə verin, qoy mənalarını verir.',
      table: [
        ['Struktur',                    'Nümunə',                    'Azərbaycanca'],
        ['Let + obyekt + to-suz məsdər', 'Let him go home.',         'Qoy o evə getsin.'],
        ['Let + obyekt + to-suz məsdər', 'Let her speak.',           'Qoy o danışsın.'],
        ['Let + them + to-suz məsdər',   'Let them stay.',           'Qoy onlar qalsın.'],
        ['Don\'t let + obyekt + ...',    'Don\'t let Fuad go out.',  'Fuada çölə çıxmağa icazə vermə.'],
      ],
      tip: '"Let" + obyekt əvəzliyi + to-suz məsdər\n' +
           'Obyekt əvəzlikləri: him, her, them, us, me\n\n' +
           '"Let" → icazə vermə / III şəxs əmri\n' +
           '"Don\'t let" → inkar / icazə vermə',
    },

    { en: '"Let" əmr cümləsi hansı şəxslər üçündür?',               tr: 'I və III şəxs',         wrong: 'II şəxs'             },
    { en: '"Let" felindən sonra məsdər hansı formada işlənir?',      tr: 'to-suz məsdər',         wrong: 'to ilə məsdər'       },
    { en: '"Let" nə mənasını verir?',                                tr: 'Gəlin, icazə verin, qoy', wrong: 'Etmə'              },
    { en: '"Let him go home." — "him" nədir?',                       tr: 'Obyekt əvəzliyi (III şəxs tək)', wrong: 'Mübtəda'  },
    { en: '"Don\'t let Fuad go out." — mənası?',                     tr: 'Fuada çölə çıxmağa icazə vermə.', wrong: 'Fuad çölə çıxmasın.' },
    { en: '"Let her ___ ." — boşluğa nə gəlir?',                    tr: 'to-suz məsdər',         wrong: 'to ilə məsdər'       },
    { en: '"Let them stay." — düzgündürmü?',                         tr: 'Bəli',                  wrong: 'Xeyr'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Let him ___ home." — boşluğa nə gəlir?',
          options: ['to go', 'going', 'goes', 'go'],
          answer: 'go',
        },
        {
          q: '"___ let Fuad go out." — boşluğa nə gəlir? (inkar)',
          options: ['Not', 'No', 'Don\'t', 'Be not'],
          answer: 'Don\'t',
        },
        {
          q: '"Let" əmri hansı şəxslər üçün işlənir?',
          options: ['Yalnız II şəxs', 'Yalnız III şəxs', 'I və III şəxs', 'Bütün şəxslər'],
          answer: 'I və III şəxs',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Let's + Don't let ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Let\'s + Don\'t let',
  cards: [

    {
      type: 'lesson',
      title: '"Let\'s" — I şəxs cəm əmri',
      content:
        'Obyekt əvəzliklərinin I şəxs cəmi (us) əksər hallarda\n' +
        'ixtisar edilmiş variantda işlədilir:\n\n' +
        'Let us → Let\'s\n\n' +
        '"Let\'s" = "Let us" = qısa forma',
      table: [
        ['Tam forma',           'Qısa forma',         'Azərbaycanca'],
        ['Let us go home.',     'Let\'s go home.',    'Gəlin evə gedək.'],
        ['Let us go out.',      'Let\'s go out.',     'Gəlin çölə çıxaq.'],
        ['Let us begin.',       'Let\'s begin.',      'Gəlin başlayaq.'],
        ['Don\'t let them go.', '—',                 'Onların getməsinə icazə vermə.'],
        ['Don\'t let him leave.','—',                'Onun getməsinə icazə vermə.'],
      ],
      tip: '"Let\'s" yalnız I şəxs cəm (us = biz) üçündür.\n' +
           '"Let\'s go!" = "Let us go!" = Gedək!\n\n' +
           'İnkar: Don\'t let + obyekt (us üçün: Let\'s not)\n' +
           'Let\'s not go. = Getməyək.',
    },

    { en: '"Let\'s" = nəyin qısa formasıdır?',                       tr: 'Let us',                wrong: 'Let them'            },
    { en: '"Let\'s go home." — Azərbaycancası?',                     tr: 'Gəlin evə gedək.',      wrong: 'Evə getsin.'         },
    { en: '"Let us go home." = "Let\'s go home." — bərabərmi?',      tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"Let\'s" hansı şəxs üçündür?',                            tr: 'I şəxs cəm (biz)',      wrong: 'III şəxs tək'        },
    { en: '"Don\'t let them leave." — mənası?',                      tr: 'Onların getməsinə icazə vermə.', wrong: 'Onlar getməsin.' },
    { en: '"Let\'s not go." — mənası?',                              tr: 'Getməyək.',             wrong: 'Getməsinlər.'        },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"Let ___ go home." — "\'s" açıq yazıldıqda?',
          options: ['him', 'them', 'us', 'her'],
          answer: 'us',
        },
        {
          q: '"Let\'s begin!" — Azərbaycancası?',
          options: ['Başlasın!', 'Başla!', 'Başlayaq!', 'Başlatma!'],
          answer: 'Başlayaq!',
        },
        {
          q: '"Don\'t let them ___ ." — boşluğa nə gəlir?',
          options: ['to go', 'going', 'gone', 'go'],
          answer: 'go',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 — Let/Let's seç · obyekt əvəzliyi · Don't let inkar ──
[
  { en: '"Let" əmr cümləsi hansı şəxslər üçündür?',                 tr: 'I və III şəxs',         wrong: 'II şəxs'             },
  { en: '"Let" felindən sonra məsdər hansı formada?',                tr: 'to-suz məsdər',         wrong: 'to ilə məsdər'       },
  { en: '"Let\'s" = nəyin qısa formasıdır?',                        tr: 'Let us',                wrong: 'Let them'            },
  { en: '"Let\'s go home." — Azərbaycancası?',                      tr: 'Gəlin evə gedək.',      wrong: 'Evə getsin.'         },
  { en: '"Let him go home." — "him" nədir?',                        tr: 'Obyekt əvəzliyi (III şəxs)', wrong: 'Mübtəda'       },
  { en: '"Don\'t let" nə mənasını verir?',                          tr: 'İcazə vermə',           wrong: 'Getmə'               },
  { en: '"Let them stay." — düzgündürmü?',                          tr: 'Bəli',                  wrong: 'Xeyr'                },
  { en: '"Let\'s not go." — mənası?',                               tr: 'Getməyək.',             wrong: 'Getməsinlər.'        },
],

      
{
      type: 'section_divider',
      title: 'THE İMPERATİVE - ÜMUMİ İMTAHAN',
},

// ── Final Test 1 — The Imperative · 15 sual ──────────────
[
  // Əsas qayda
  { en: 'Əmr cümləsi hansı şəxsə aiddir?',                          tr: 'II şəxs',               wrong: 'I şəxs'              },
  { en: 'Əmr cümləsində "to" nə olur?',                             tr: 'Atılır',                wrong: 'Qalır'               },
  { en: 'Əmr cümləsi nə ilə başlayır?',                             tr: 'Fellə',                 wrong: 'İsimlə'              },
  { en: '"to read" → əmr forması?',                                 tr: 'Read',                  wrong: 'To read'             },
  // Do / Don't / Be
  { en: '"Do" əmr cümləsinin önündə nə mənası verir?',              tr: 'Mütləq',                wrong: 'Etmə'                },
  { en: 'Əmr cümləsinin inkarı necə düzəlir?',                      tr: 'Don\'t + fel',          wrong: 'Not + fel'           },
  { en: '"to be" felinin əmr forması?',                             tr: 'Be',                    wrong: 'Is'                  },
  { en: '"to be" felinin inkar əmr forması?',                       tr: 'Don\'t be',             wrong: 'Be not'              },
  { en: '"Be ready!" — Azərbaycancası?',                            tr: 'Hazır ol!',             wrong: 'Hazır deyilsən!'     },
  { en: '"Don\'t be late!" — Azərbaycancası?',                      tr: 'Gecikmə!',              wrong: 'Gec olma!'           },
  // Let / Let's / Don't let
  { en: '"Let" əmri hansı şəxslər üçün işlənir?',                   tr: 'I və III şəxs',         wrong: 'II şəxs'             },
  { en: '"Let" felindən sonra məsdər hansı formada?',                tr: 'to-suz məsdər',         wrong: 'to ilə məsdər'       },
  { en: '"Let\'s" = nəyin qısa formasıdır?',                        tr: 'Let us',                wrong: 'Let them'            },
  { en: '"Let\'s go home." — Azərbaycancası?',                      tr: 'Gəlin evə gedək.',      wrong: 'Evə getsin.'         },
  { en: '"Don\'t let them leave." — mənası?',                       tr: 'Onların getməsinə icazə vermə.', wrong: 'Onlar getməsin.' },
],

  ],
};


// ── 16. EXCLAMATORY SENTENCES (NİDA CÜMLƏLƏRİ) ──────────────
const EXCLAMATORY_LEVEL = {
  id: 'exclamatory',
  name: 'EXCLAMATORY SENTENCES — NİDA CÜMLƏLƏRİ',
  icon: '<i class="ti ti-exclamation-mark"></i>',
  color: '#fde895',
  quizzes: [

// ══════════════════════════════════════════════════════════
// ║  EXCLAMATORY SENTENCES — Tam bölüm                    ║
// ══════════════════════════════════════════════════════════


{
      type: 'section_divider',
      title: 'What ilə nida cümləsi',
},
      
// ┌─────────────────────────────────────────────────────────┐
// │  MÖVZU 2 — Exclamatory Sentences (Nida Cümləsi)       │
// └─────────────────────────────────────────────────────────┘

// ── Qrup 1 — What ilə nida cümləsi ───────────────────────

// ── Dərs 3.1 — What ilə quruluş ──────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — What ilə quruluş',
  cards: [

    {
      type: 'lesson',
      title: 'Nida cümləsinin tərifi və "What" ilə quruluş',
      content:
        'Hiss və həyacan bildirən cümlələrə nida cümlələri deyilir.\n' +
        'İngilis dilində nida cümlələri əsasən "what" və "how" ilə düzəlir.\n' +
        'Hər ikisi "necə də, nə" vasitəsilə tərcümə edilir.\n\n' +
        '"What" ilə nida cümləsinin quruluşu:\n' +
        'What + (a/an) + sifət + isim + (əvəzlik) + (xəbər)',
      table: [
        ['Hal',                      'Struktur',                       'Nümunə'],
        ['Sayılan tək isim',          'What + a/an + sifət + isim',    'What a beautiful name!'],
        ['Sayılan tək isim + xəbər', 'What + a/an + sifət + isim + xəbər', 'What an interesting book it was!'],
        ['Sayılmayan/cəm isim',      'What + sifət + isim',            'What beautiful flowers!'],
        ['Sayılmayan/cəm + xəbər',   'What + sifət + isim + xəbər',   'What nice weather we have!'],
      ],
      tip: '"What" ilə nida cümləsi MÜTLƏQ isim tələb edir!\n' +
           '"What" ilə heç vaxt "the" artiklı işlənmir.\n' +
           'Sayılan tək isim → a/an mütləq işlənir.\n' +
           'Sayılmayan/cəm isim → artıkl işlənmir.\n' +
           'Mübtəda/xəbər olmaya da bilər: "What a beautiful name!"',
    },

    { en: 'Nida cümləsi nə bildirir?',                               tr: 'Hiss və həyacan',       wrong: 'Əmr və xahiş'        },
    { en: '"What" ilə nida cümləsi mütləq nə tələb edir?',           tr: 'İsim',                  wrong: 'Fel'                 },
    { en: '"What" ilə heç vaxt hansı artıkl işlənmir?',              tr: '"the" artiklı',         wrong: '"a/an" artiklı'      },
    { en: 'Sayılan tək isimdə "What" ilə hansı artıkl işlənir?',    tr: 'a / an',                wrong: 'the'                 },
    { en: 'Sayılmayan/cəm isimdə "What" ilə artıkl işlənirmi?',     tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"What a beautiful name!" — isim sayılanlırmı?',           tr: 'Bəli, sayılan tək isim', wrong: 'Xeyr'              },
    { en: '"What beautiful flowers!" — artıkl işlənibmi?',           tr: 'Xeyr (cəm isim)',       wrong: 'Bəli'                },
    { en: '"What" nida cümləsi hərəkət ifadə edirmi?',               tr: 'Xeyr',                  wrong: 'Bəli'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"What ___ beautiful name!" — boşluğa nə gəlir?',
          options: ['the', 'an', 'a', 'heç nə'],
          answer: 'a',
        },
        {
          q: '"What ___ flowers!" — boşluğa nə gəlir? (cəm isim)',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
        {
          q: '"What" nida cümləsi mütləq nə tələb edir?',
          options: ['Fel', 'Zərf', 'İsim', 'Sifət'],
          answer: 'İsim',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — What qaydaları ────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — What qaydaları',
  cards: [

    {
      type: 'lesson',
      title: '"What" nida cümləsinin ətraflı qaydaları',
      content:
        '"What" ilə nida cümləsinin 4 əsas qaydası:',
      table: [
        ['#', 'Qayda',                                         'Nümunə'],
        ['1', 'Mütləq isim tələb edir',                       'What a name! / What flowers!'],
        ['2', '"the" artiklı heç vaxt işlənmir',              'What the name! ❌'],
        ['3', 'Hərəkət ifadə etmir (fel bildirmir)',          'What runs fast! ❌'],
        ['4', 'Mübtəda/xəbər olmaya bilər',                   'What a beautiful name! ✅'],
      ],
      examples: [
        { word: 'What a beautiful name!',       az: 'Nə gözəl addır!' },
        { word: 'What a nice day it is!',       az: 'Nə gözəl gündür bu!' },
        { word: 'What an interesting book it was!', az: 'Nə maraqlı kitab idi!' },
        { word: 'What beautiful flowers!',      az: 'Nə gözəl çiçəklərdir!' },
        { word: 'What nice weather we have!',   az: 'Nə gözəl havamız var!' },
      ],
      tip: 'a/an seçimi:\n' +
           '"a" → samitlə başlayan sifət/isim: a beautiful, a nice\n' +
           '"an" → saitlə başlayan sifət/isim: an interesting, an old',
    },

    { en: '"What a nice day it is!" — "it is" nədir?',               tr: 'Mübtəda + xəbər',       wrong: 'Artıkl'              },
    { en: '"What a nice day!" — mübtəda/xəbər varmı?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"What an interesting book it was!" — "an" niyə?',         tr: 'Sait hərflə başlayır (i)', wrong: 'Cəm isimdir'     },
    { en: '"What a beautiful name!" — "a" niyə?',                    tr: 'Samit hərflə başlayır (b)', wrong: 'Cəm isimdir'    },
    { en: '"What" nida cümləsi hərəkət ifadə edirmi?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"What beautiful flowers!" — niyə artıkl yoxdur?',         tr: 'Cəm isim',              wrong: 'Sayılmayan isim'     },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"What ___ interesting book!" — boşluğa nə gəlir?',
          options: ['a', 'the', 'heç nə', 'an'],
          answer: 'an',
        },
        {
          q: '"What beautiful flowers!" — niyə artıkl yoxdur?',
          options: ['Sayılan tək isim', 'Cəm isim', '"the" işlənir', 'Qayda yoxdur'],
          answer: 'Cəm isim',
        },
        {
          q: '"What ___ nice weather we have!" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'heç nə',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 — What ilə nida düzəlt · a/an işlənir/işlənmir · the yoxdur ──
[
  { en: 'Nida cümləsi nə bildirir?',                                 tr: 'Hiss və həyacan',       wrong: 'Əmr və xahiş'        },
  { en: '"What" ilə nida cümləsi mütləq nə tələb edir?',             tr: 'İsim',                  wrong: 'Fel'                 },
  { en: '"What" ilə heç vaxt hansı artıkl işlənmir?',                tr: '"the" artiklı',         wrong: '"a/an" artiklı'      },
  { en: 'Sayılan tək isimdə "What" ilə hansı artıkl işlənir?',      tr: 'a / an',                wrong: 'the'                 },
  { en: 'Sayılmayan/cəm isimdə artıkl işlənirmi?',                  tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"What ___ beautiful name!" — boşluq?',                      tr: 'a',                     wrong: 'the'                 },
  { en: '"What ___ interesting book!" — boşluq?',                    tr: 'an',                    wrong: 'a'                   },
  { en: '"What beautiful flowers!" — niyə artıkl yoxdur?',          tr: 'Cəm isim',              wrong: 'Sayılmayan isim'     },
  { en: '"What" nida cümləsi hərəkət ifadə edirmi?',                tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"What a nice day it is!" — mübtəda/xəbər varmı?',          tr: 'Bəli (it is)',          wrong: 'Xeyr'                },
],


// ── Qrup 2 — How ilə nida cümləsi + What vs How fərqi ────

      
{
      type: 'section_divider',
      title: 'How ilə nida cümləsi',
},

// ── Dərs 4.1 — How ilə quruluş ───────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.1 — How ilə quruluş',
  cards: [

    {
      type: 'lesson',
      title: '"How" ilə nida cümləsinin quruluşu',
      content:
        '"How" ilə nida cümləsinin quruluşu:\n' +
        'How + sifət / zərf + (the + isim) + (mübtəda + xəbər)',
      table: [
        ['Struktur',                               'Nümunə'],
        ['How + sifət + xəbər',                   'How interesting the book was!'],
        ['How + zərf + xəbər',                    'How well she sings!'],
        ['How + sifət + isim + xəbər',            'How nice the rose is!'],
        ['How + zərf (mübtəda/xəbər yoxdur)',     'How interesting!'],
      ],
      tip: '"How" ilə:\n' +
           '• Heç vaxt a/an artiklı işlənmir\n' +
           '• "the" artiklı işlənə bilir (isim varsa)\n' +
           '• Hərəkət ifadə edə bilir (How well she sings!)\n' +
           '• Mübtəda/xəbər olmaya bilər: "How interesting!"',
    },

    { en: '"How" nida cümləsindən sonra hansı artıkl işlənmir?',     tr: 'a / an',                wrong: 'the'                 },
    { en: '"How" nida cümləsi hərəkət ifadə edə bilirmi?',           tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"How" ilə "the" artiklı işlənə bilirmi?',                 tr: 'Bəli (isim varsa)',     wrong: 'Xeyr, heç vaxt'      },
    { en: '"How interesting the book was!" — "the" niyə işlənir?',  tr: 'İsim (book) var',       wrong: 'Həmişə işlənir'      },
    { en: '"How well she sings!" — "well" hansı nitq hissəsidir?',   tr: 'Zərf',                  wrong: 'Sifət'               },
    { en: '"How interesting!" — mübtəda/xəbər varmı?',              tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"How nice the rose is!" — quruluş düzgündürmü?',          tr: 'Bəli',                  wrong: 'Xeyr'                },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"How ___ she sings!" — boşluğa nə gəlir?',
          options: ['good', 'a', 'an', 'well'],
          answer: 'well',
        },
        {
          q: '"How interesting ___ book was!" — boşluğa nə gəlir?',
          options: ['a', 'an', 'the', 'heç nə'],
          answer: 'the',
        },
        {
          q: '"How" nida cümləsi hərəkət ifadə edə bilirmi?',
          options: ['Xeyr, heç vaxt', 'Bəli', 'Yalnız keçmişdə', 'Yalnız indiki zamanda'],
          answer: 'Bəli',
        },
      ],
    },
  ],
},

// ── Dərs 4.2 — What vs How fərqi ─────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 4.2 — What vs How fərqi',
  cards: [

    {
      type: 'lesson',
      title: '"What" vs "How" — ətraflı müqayisə',
      content: '"What" və "How" nida cümlələrinin fərqləri:',
      table: [
        ['Xüsusiyyət',              '"What" ilə',                    '"How" ilə'],
        ['Sonrakı söz növü',        'İsim tələb edir',               'Sifət / zərf tələb edir'],
        ['a/an artiklı',            'Sayılan tək isimdə işlənir',    'Heç vaxt işlənmir'],
        ['"the" artiklı',           'Heç vaxt işlənmir',             'İsim varsa işlənə bilir'],
        ['Hərəkət ifadəsi',         'Yox (fel bildirmir)',           'Bəli (zərflə hərəkət ola bilir)'],
        ['Mübtəda/xəbər',           'Olmaya bilər',                  'Olmaya bilər'],
      ],
      examples: [
        { word: 'What a nice rose! (isim var)',     az: 'Nə gözəl qızıl güldür! (What → isim)' },
        { word: 'How nice the rose is! (sifət)',    az: 'Nə qədər gözəldir qızıl gül! (How → sifət)' },
        { word: 'How nice the rose smells! (zərf)', az: 'Qızıl gül nə gözəl iylənir! (How → hərəkət)' },
      ],
      tip: 'Əsas fərq:\n' +
           '"What" → mütləq isim lazımdır, hərəkət yoxdur\n' +
           '"How" → sifət/zərf lazımdır, hərəkət ola bilər\n\n' +
           '"What a beautiful rose!" ✅ (isim var)\n' +
           '"How beautiful the rose is!" ✅ (sifət var)\n' +
           '"How beautifully it smells!" ✅ (zərf + hərəkət)',
    },

    { en: '"What" nida cümləsi mütləq nə tələb edir?',               tr: 'İsim',                  wrong: 'Sifət / zərf'        },
    { en: '"How" nida cümləsi mütləq nə tələb edir?',                tr: 'Sifət / zərf',          wrong: 'İsim'                },
    { en: '"What" ilə a/an artiklı işlənirmi?',                      tr: 'Bəli (sayılan tək isim)', wrong: 'Xeyr, heç vaxt'   },
    { en: '"How" ilə a/an artiklı işlənirmi?',                       tr: 'Xeyr, heç vaxt',        wrong: 'Bəli'                },
    { en: '"What" ilə "the" artiklı işlənirmi?',                     tr: 'Xeyr, heç vaxt',        wrong: 'Bəli'                },
    { en: '"How" ilə "the" artiklı işlənə bilirmi?',                 tr: 'Bəli (isim varsa)',     wrong: 'Xeyr, heç vaxt'      },
    { en: '"What" nida cümləsi hərəkət ifadə edirmi?',               tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"How" nida cümləsi hərəkət ifadə edə bilirmi?',           tr: 'Bəli',                  wrong: 'Xeyr'                },
    { en: '"What a nice rose!" vs "How nice the rose is!" — fərq?',  tr: 'What → isim, How → sifət', wrong: 'Heç fərq yoxdur' },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"How nice the rose ___!" — boşluğa nə gəlir?',
          options: ['was smelling', 'smell', 'smells', 'to smell'],
          answer: 'smells',
        },
        {
          q: '"What ___ beautiful rose!" — boşluğa nə gəlir?',
          options: ['how', 'the', 'an', 'a'],
          answer: 'a',
        },
        {
          q: '"___ well she sings!" — What mi, How mi?',
          options: ['What (zərf var)', 'How (zərf var)', 'What (isim var)', 'How (isim var)'],
          answer: 'How (zərf var)',
        },
      ],
    },
  ],
},

// ── Dərs 4.3 — Mübtədasız/xəbərsiz nida + Azərbaycanca tərcümə ──
{
  type: 'grammar_lesson',
  title: 'Dərs 4.3 — Mübtədasız/xəbərsiz nida + Azərbaycanca',
  cards: [

    {
      type: 'lesson',
      title: 'Mübtəda/xəbər olmaya bilər + Azərbaycanca tərcümə',
      content:
        'Nida cümləsində mübtəda və xəbər olmaya bilər.\n\n' +
        'Azərbaycancaya necə tərcümə olunur:\n' +
        '"What" → "Nə (gözəl)..." / "Necə (gözəl)..."\n' +
        '"How" → "Necə..." / "Nə qədər..."',
      table: [
        ['Nida cümləsi',                  'Azərbaycanca',                    'Qeyd'],
        ['What a beautiful name!',        'Nə gözəl addır!',                 'Mübtəda/xəbər yox'],
        ['How interesting!',              'Nə maraqlıdır!',                  'Mübtəda/xəbər yox'],
        ['What a nice day it is!',        'Bu nə gözəl gündür!',             'it is → mübtəda + xəbər'],
        ['How interesting the book was!', 'O kitab nə maraqlı idi!',         'the book was → mübtəda + xəbər'],
        ['How well she sings!',           'O necə yaxşı oxuyur!',            'she sings → mübtəda + xəbər'],
        ['How nice the rose smells!',     'Gül nə gözəl iylənir!',           'the rose smells → mübtəda + xəbər'],
      ],
      tip: 'Azərbaycancada hər ikisi "nə gözəl", "necə" ilə ifadə olunur.\n' +
           'İngilis dilindəki fərq (What/How) Azərbaycancada çox hiss olunmur.',
    },

    { en: '"What a beautiful name!" — mübtəda/xəbər varmı?',         tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"How interesting!" — mübtəda/xəbər varmı?',              tr: 'Xeyr',                  wrong: 'Bəli'                },
    { en: '"What a nice day it is!" — "it is" nədir?',               tr: 'Mübtəda + xəbər',       wrong: 'Artıkl'              },
    { en: '"How well she sings!" — "she sings" nədir?',              tr: 'Mübtəda + xəbər',       wrong: 'Sifət + zərf'        },
    { en: '"What" → Azərbaycancada necə tərcümə olunur?',            tr: 'Nə (gözəl)...',         wrong: 'Necə yaxşı...'       },
    { en: '"How" → Azərbaycancada necə tərcümə olunur?',             tr: 'Necə... / Nə qədər...', wrong: 'Nə cür...'           },

    {
      type: 'mini_check',
      questions: [
        {
          q: '"What a beautiful name!" — mübtəda/xəbər varmı?',
          options: ['Bəli, "name" mübtədadır', 'Bəli, "beautiful" xəbərdir', 'Xeyr', 'Bəli, "a" artıkldır'],
          answer: 'Xeyr',
        },
        {
          q: '"How well she sings!" — mübtəda nədir?',
          options: ['How', 'well', 'she', 'sings'],
          answer: 'she',
        },
        {
          q: '"How nice the rose smells!" — Azərbaycancası?',
          options: ['Nə gözəl güldür!', 'Gül nə gözəl iylənir!', 'Nə gözəl gül var!', 'Gül nə gözəldir!'],
          answer: 'Gül nə gözəl iylənir!',
        },
      ],
    },
  ],
},

// ── Mini-quiz 4 — What/How seç · a/an yoxsa yoxdur · fərqi izah et ──
[
  { en: '"What" nida cümləsi mütləq nə tələb edir?',                 tr: 'İsim',                  wrong: 'Sifət / zərf'        },
  { en: '"How" nida cümləsi mütləq nə tələb edir?',                  tr: 'Sifət / zərf',          wrong: 'İsim'                },
  { en: '"How" ilə a/an artiklı işlənirmi?',                         tr: 'Xeyr, heç vaxt',        wrong: 'Bəli'                },
  { en: '"What" ilə "the" artiklı işlənirmi?',                       tr: 'Xeyr, heç vaxt',        wrong: 'Bəli'                },
  { en: '"How" ilə "the" artiklı işlənə bilirmi?',                   tr: 'Bəli (isim varsa)',     wrong: 'Xeyr, heç vaxt'      },
  { en: '"What" nida cümləsi hərəkət ifadə edirmi?',                 tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"How" nida cümləsi hərəkət ifadə edə bilirmi?',             tr: 'Bəli',                  wrong: 'Xeyr'                },
  { en: '"What a beautiful name!" — mübtəda/xəbər varmı?',          tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"What ___ interesting book!" — boşluq?',                    tr: 'an',                    wrong: 'a'                   },
  { en: '"What ___ flowers!" — boşluq? (cəm)',                       tr: 'heç nə',                wrong: 'a'                   },
  { en: '"___ well she sings!" — What mi, How mi?',                  tr: 'How',                   wrong: 'What'                },
  { en: '"What a nice day ___!" — boşluğa nə gəlir? (mübtəda+xəbər)', tr: 'it is',               wrong: 'is it'               },
],


{
      type: 'section_divider',
      title: 'EXCLAMATORY SENTENCES - ÜMUMİ İMTAHAN',
},
      
// ── Final Test 2 — Exclamatory Sentences · 15 sual ───────
[
  // What ilə
  { en: 'Nida cümləsi nə bildirir?',                                 tr: 'Hiss və həyacan',       wrong: 'Əmr və xahiş'        },
  { en: '"What" ilə nida cümləsi mütləq nə tələb edir?',             tr: 'İsim',                  wrong: 'Sifət / zərf'        },
  { en: '"What" ilə heç vaxt hansı artıkl işlənmir?',                tr: '"the" artiklı',         wrong: '"a/an" artiklı'      },
  { en: 'Sayılan tək isimdə "What" ilə hansı artıkl işlənir?',      tr: 'a / an',                wrong: 'the'                 },
  { en: 'Sayılmayan/cəm isimdə artıkl işlənirmi?',                  tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"What ___ beautiful name!" — boşluq?',                      tr: 'a',                     wrong: 'the'                 },
  { en: '"What ___ interesting book!" — boşluq?',                    tr: 'an',                    wrong: 'a'                   },
  { en: '"What beautiful flowers!" — niyə artıkl yoxdur?',          tr: 'Cəm isim',              wrong: 'Sayılmayan isim'     },
  // How ilə
  { en: '"How" nida cümləsi mütləq nə tələb edir?',                  tr: 'Sifət / zərf',          wrong: 'İsim'                },
  { en: '"How" ilə a/an artiklı işlənirmi?',                         tr: 'Xeyr, heç vaxt',        wrong: 'Bəli'                },
  { en: '"How" ilə "the" artiklı işlənə bilirmi?',                   tr: 'Bəli (isim varsa)',     wrong: 'Xeyr, heç vaxt'      },
  { en: '"How" nida cümləsi hərəkət ifadə edə bilirmi?',             tr: 'Bəli',                  wrong: 'Xeyr'                },
  // Fərq + Azərbaycanca
  { en: '"What" nida cümləsi hərəkət ifadə edirmi?',                 tr: 'Xeyr',                  wrong: 'Bəli'                },
  { en: '"___ well she sings!" — What mi, How mi?',                  tr: 'How',                   wrong: 'What'                },
  { en: '"What a beautiful name!" — mübtəda/xəbər varmı?',          tr: 'Xeyr',                  wrong: 'Bəli'                },
],

  ],
};

KIDS_GRAMMAR_LEVELS.push(VERBS_LEVEL);
KIDS_GRAMMAR_LEVELS.push(PASSIVE_LEVEL);
KIDS_GRAMMAR_LEVELS.push(INDIRECT_SPEECH_LEVEL);
KIDS_GRAMMAR_LEVELS.push(SEQUENCE_TENSES_LEVEL);
KIDS_GRAMMAR_LEVELS.push(ADJECTIVES_LEVEL);
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
