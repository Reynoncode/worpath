
// ============================================================
//  WORDPATH — WRITING SKILLS DATA
//  writing-data.js
// ============================================================

const WRITING_LEVELS = [
  {
    id:    'writing_skills',
    name:  'Yazı Bacarıqları',
    icon:  '✍️',
    color: '#10B981',
    quizzes: [

      { type: 'section_divider', title: 'Cümləni Tamamla' },

      // ── Node 1: My Hobby ────────────────────────────────
      {
        type: 'writing_fill',
        title: 'My Hobby',

        paragraphs: [
          {
            // __BLANK_N__ işarəsi boşluğu göstərir
            text: 'My name is Sara. I am a __BLANK_0__ years old girl. My favourite hobby is __BLANK_1__ books. I read every day __BLANK_2__ school. I also like __BLANK_3__ music in my free time.',
            blanks: [
              { id: 'BLANK_0', answer: 'fifteen'      },
              { id: 'BLANK_1', answer: 'reading'      },
              { id: 'BLANK_2', answer: 'after'        },
              { id: 'BLANK_3', answer: 'listening to' },
            ],
            words: ['fifteen', 'reading', 'after', 'listening to', 'before', 'watching', 'twelve', 'writing'],
          },
          {
            text: 'I __BLANK_4__ a member of the school book club. We __BLANK_5__ every Friday and talk about our favourite books. My best friend Anna __BLANK_6__ reading too. We often __BLANK_7__ books with each other.',
            blanks: [
              { id: 'BLANK_4', answer: 'am'     },
              { id: 'BLANK_5', answer: 'meet'   },
              { id: 'BLANK_6', answer: 'enjoys' },
              { id: 'BLANK_7', answer: 'share'  },
            ],
            words: ['am', 'meet', 'enjoys', 'share', 'is', 'meets', 'enjoy', 'give'],
          },
        ],

        fullText: 'My name is Sara. I am a fifteen years old girl. My favourite hobby is reading books. I read every day after school. I also like listening to music in my free time. I am a member of the school book club. We meet every Friday and talk about our favourite books. My best friend Anna enjoys reading too. We often share books with each other.',
      },

    ],
  },
];

if (typeof GENERAL_ENGLISH_LEVELS !== 'undefined') {
  GENERAL_ENGLISH_LEVELS.push(...WRITING_LEVELS);
}
