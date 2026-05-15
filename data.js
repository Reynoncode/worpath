// ============================================================
//  WORDPATH — QUIZ DATA
// ============================================================
//  Hər söz üçün format:
//    { en: 'İngiliscə söz', tr: 'Düzgün Azərbaycanca tərcümə', wrong: 'Yanlış tərcümə' }
//
//  Hər səviyyə içində 10 quiz var.
//  Hər quizdə tam olaraq 20 söz olmalıdır.
//  Boş qalan quizlər oyunda "Tezliklə..." kimi görünür.
// ============================================================

const LEVELS = [

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 1 — A1: BEGİNNER                       ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'a1',
    name: 'A1 — BEGİNNER',
    icon: '🌱',
    color: '#4A8FE7',
    quizzes: [

     // ─────────────────────── QUIZ 1 — Peşələr ───────────────────────
[
  { en: 'actor',      tr: 'aktyor',       wrong: 'rejissor',     wen: 'director',     def: 'a person who performs in films or theatre' },
  { en: 'actress',    tr: 'aktrisa',      wrong: 'rəqqasə',      wen: 'dancer',       def: 'a woman who performs in films or theatre' },
  { en: 'adult',      tr: 'yetkin',       wrong: 'uşaq',         wen: 'child',        def: 'a fully grown person' },
  { en: 'artist',     tr: 'rəssam',       wrong: 'musiqiçi',     wen: 'musician',     def: 'a person who creates paintings or drawings' },
  { en: 'dancer',     tr: 'rəqqas',       wrong: 'müğənni',      wen: 'singer',       def: 'a person who dances to music' },
  { en: 'doctor',     tr: 'həkim',        wrong: 'müəllim',      wen: 'teacher',      def: 'a person who treats sick people' },
  { en: 'driver',     tr: 'sürücü',       wrong: 'pilot',        wen: 'pilot',        def: 'a person who drives a car or bus' },
  { en: 'farmer',     tr: 'əkinçi',       wrong: 'balıqçı',      wen: 'fisherman',    def: 'a person who grows food on a farm' },
  { en: 'nurse',      tr: 'tibb bacısı',  wrong: 'həkim',        wen: 'teacher',      def: 'a person who helps doctors and patients in hospital' },
  { en: 'player',     tr: 'oyunçu',       wrong: 'məşqçi',       wen: 'coach',        def: 'a person who plays a sport or game' },
  { en: 'policeman',  tr: 'polis',        wrong: 'gözətçi',      wen: 'guard',        def: 'a person who protects people and catches criminals' },
  { en: 'scientist',  tr: 'alim',         wrong: 'mühəndis',     wen: 'engineer',     def: 'a person who studies science and does experiments' },
  { en: 'singer',     tr: 'müğənni',      wrong: 'rəqqas',       wen: 'dancer',       def: 'a person who sings songs' },
  { en: 'student',    tr: 'tələbə',       wrong: 'müəllim',      wen: 'teacher',      def: 'a person who studies at school or university' },
  { en: 'teacher',    tr: 'müəllim',      wrong: 'direktor',     wen: 'principal',    def: 'a person who teaches students' },
  { en: 'tourist',    tr: 'turist',       wrong: 'səfir',        wen: 'ambassador',   def: 'a person who travels for pleasure' },
  { en: 'visitor',    tr: 'ziyarətçi',    wrong: 'sakin',        wen: 'resident',     def: 'a person who visits a place' },
  { en: 'waiter',     tr: 'ofisiant',     wrong: 'aşpaz',        wen: 'chef',         def: 'a person who serves food in a restaurant' },
  { en: 'worker',     tr: 'işçi',         wrong: 'müdir',        wen: 'manager',      def: 'a person who works for money' },
  { en: 'writer',     tr: 'yazıçı',       wrong: 'jurnalist',    wen: 'journalist',   def: 'a person who writes books or stories' }
],


// ─────────────────────── QUIZ 2 — Ümumi insanlar ───────────────────────
[
  { en: 'baby', tr: 'körpə', wrong: 'uşaq', wen: 'adult', def: 'a very young child who cannot walk or talk yet' },
  { en: 'boy', tr: 'oğlan', wrong: 'qız', wen: 'girl', def: 'a male child' },
  { en: 'child', tr: 'uşaq', wrong: 'gənc', wen: 'adult', def: 'a young person who is not yet an adult' },
  { en: 'customer', tr: 'müştəri', wrong: 'satıcı', wen: 'seller', def: 'a person who buys something from a shop or business' },
  { en: 'girl', tr: 'qız', wrong: 'oğlan', wen: 'boy', def: 'a female child' },
  { en: 'man', tr: 'kişi', wrong: 'qadın', wen: 'woman', def: 'an adult male person' },
  { en: 'member', tr: 'üzv', wrong: 'rəhbər', wen: 'leader', def: 'a person who belongs to a group, club, or organization' },
  { en: 'neighbour', tr: 'qonşu', wrong: 'dost', wen: 'friend', def: 'a person who lives near you' },
  { en: 'partner', tr: 'ortaq', wrong: 'rəqib', wen: 'rival', def: 'a person you work or do business with' },
  { en: 'person', tr: 'insan', wrong: 'heyvan', wen: 'animal', def: 'a human being' },
  { en: 'teenager', tr: 'yeniyetmə', wrong: 'körpə', wen: 'baby', def: 'a person between 13 and 19 years old' },
  { en: 'woman', tr: 'qadın', wrong: 'kişi', wen: 'man', def: 'an adult female person' },
  { en: 'people', tr: 'insanlar', wrong: 'heyvanlar', wen: 'animals', def: 'more than one person' },
  { en: 'friend', tr: 'dost', wrong: 'qonşu', wen: 'neighbour', def: 'a person you like and enjoy spending time with' },
  { en: 'somebody', tr: 'kimsə', wrong: 'heç kim', wen: 'nobody', def: 'a person who is not named or known' },
  { en: 'someone', tr: 'biri', wrong: 'hamı', wen: 'everyone', def: 'a person who is not specified' },
  { en: 'anybody', tr: 'hər hansı biri', wrong: 'heç kim', wen: 'nobody', def: 'any person at all' },
  { en: 'anyone', tr: 'hər kəs', wrong: 'heç biri', wen: 'no one', def: 'any person' },
  { en: 'nobody', tr: 'heç kim', wrong: 'hamı', wen: 'everybody', def: 'no person' },
  { en: 'no one', tr: 'heç kəs', wrong: 'kimsə', wen: 'someone', def: 'no person at all' },
],

// ─────────────────────── QUIZ 3 — Ailə ───────────────────────
[
  { en: 'aunt', tr: 'xala', wrong: 'nənə', wen: 'grandmother', def: 'your parent\'s sister' },
  { en: 'boyfriend', tr: 'oğlan dostu', wrong: 'qardaş', wen: 'brother', def: 'a boy you are dating romantically' },
  { en: 'brother', tr: 'qardaş', wrong: 'bacı', wen: 'sister', def: 'a boy who has the same parents as you' },
  { en: 'cousin', tr: 'əmiuşağı', wrong: 'nəvə', wen: 'grandchild', def: 'the child of your uncle or aunt' },
  { en: 'dad', tr: 'ata', wrong: 'baba', wen: 'grandfather', def: 'informal word for your father' },
  { en: 'daughter', tr: 'qız övlad', wrong: 'oğul', wen: 'son', def: 'a female child of her parents' },
  { en: 'family', tr: 'ailə', wrong: 'qrup', wen: 'group', def: 'people who are related by blood or marriage' },
  { en: 'father', tr: 'ata', wrong: 'ana', wen: 'mother', def: 'a male parent' },
  { en: 'girlfriend', tr: 'qız dostu', wrong: 'oğlan dostu', wen: 'boyfriend', def: 'a girl you are dating romantically' },
  { en: 'grandfather', tr: 'baba', wrong: 'əmi', wen: 'uncle', def: 'your parent\'s father' },
  { en: 'grandmother', tr: 'nənə', wrong: 'xala', wen: 'aunt', def: 'your parent\'s mother' },
  { en: 'grandparent', tr: 'nənə baba', wrong: 'valideyn', wen: 'parent', def: 'a grandmother or grandfather' },
  { en: 'husband', tr: 'ər', wrong: 'arvad', wen: 'wife', def: 'a married man' },
  { en: 'mother', tr: 'ana', wrong: 'ata', wen: 'father', def: 'a female parent' },
  { en: 'mum', tr: 'ana', wrong: 'baba', wen: 'dad', def: 'informal word for your mother' },
  { en: 'parent', tr: 'valideyn', wrong: 'müəllim', wen: 'teacher', def: 'a mother or a father' },
  { en: 'sister', tr: 'bacı', wrong: 'qardaş', wen: 'brother', def: 'a girl who has the same parents as you' },
  { en: 'son', tr: 'oğul', wrong: 'qız övlad', wen: 'daughter', def: 'a male child of his parents' },
  { en: 'uncle', tr: 'əmi', wrong: 'baba', wen: 'grandfather', def: 'your parent\'s brother' },
  { en: 'wife', tr: 'arvad', wrong: 'ər', wen: 'husband', def: 'a married woman' },
],

// ─────────────────────── QUIZ 4 — Bədən ───────────────────────
[
  { en: 'arm', tr: 'qol', wrong: 'ayaq', wen: 'leg', def: 'the upper limb from shoulder to hand' },
  { en: 'body', tr: 'bədən', wrong: 'üz', wen: 'face', def: 'the entire physical structure of a human' },
  { en: 'ear', tr: 'qulaq', wrong: 'göz', wen: 'eye', def: 'the organ you use to hear sounds' },
  { en: 'eye', tr: 'göz', wrong: 'qulaq', wen: 'ear', def: 'the organ you use to see' },
  { en: 'face', tr: 'üz', wrong: 'baş', wen: 'head', def: 'the front part of the head including eyes, nose and mouth' },
  { en: 'foot', tr: 'ayaq', wrong: 'əl', wen: 'hand', def: 'the part at the end of your leg that you walk on' },
  { en: 'hair', tr: 'saç', wrong: 'qaş', wen: 'eyebrow', def: 'the strands that grow on your head' },
  { en: 'hand', tr: 'əl', wrong: 'qol', wen: 'arm', def: 'the part at the end of your arm with fingers' },
  { en: 'head', tr: 'baş', wrong: 'boyun', wen: 'neck', def: 'the top part of your body containing the brain' },
  { en: 'leg', tr: 'ayaq', wrong: 'qol', wen: 'arm', def: 'the lower limb from hip to foot' },
  { en: 'mouth', tr: 'ağız', wrong: 'burun', wen: 'nose', def: 'the opening on your face used for eating and speaking' },
  { en: 'nose', tr: 'burun', wrong: 'ağız', wen: 'mouth', def: 'the part of your face used for smelling' },
  { en: 'tooth', tr: 'diş', wrong: 'dil', wen: 'tongue', def: 'the hard white parts inside your mouth used for biting' },
  { en: 'back', tr: 'kürək', wrong: 'qarın', wen: 'stomach', def: 'the rear part of the body from shoulders to hips' },
  { en: 'bottom', tr: 'oturacaq', wrong: 'üst', wen: 'top', def: 'the part of the body you sit on' },
  { en: 'skin', tr: 'dəri', wrong: 'sümük', wen: 'bone', def: 'the outer layer that covers your body' },
  { en: 'health', tr: 'sağlamlıq', wrong: 'xəstəlik', wen: 'illness', def: 'the state of being physically well' },
  { en: 'diet', tr: 'pəhriz', wrong: 'idman', wen: 'exercise', def: 'the kinds of food a person usually eats' },
  { en: 'exercise', tr: 'məşq', wrong: 'istirahət', wen: 'rest', def: 'physical activity done to stay healthy' },
  { en: 'born', tr: 'doğulmuş', wrong: 'ölmüş', wen: 'dead', def: 'having come into life' },
],
      
// ─────────────────────── EXAM 1 — Ümumi insanlar ───────────────────────
[
  { 
    en: "The ____ is sleeping.", 
    tr: 'baby', 
    wrong: 'scientist' 
  },
  { 
    en: "This ____ is my son.", 
    tr: 'boy', 
    wrong: 'grandmother' 
  },
  { 
    en: "The ____ is playing in the park.", 
    tr: 'child', 
    wrong: 'doctor' 
  },
  { 
    en: "The ____ wants to buy a new phone.", 
    tr: 'customer', 
    wrong: 'policeman' 
  },
  { 
    en: "That ____ is my daughter.", 
    tr: 'girl', 
    wrong: 'farmer' 
  },
  { 
    en: "The tall ____ is my father.", 
    tr: 'man', 
    wrong: 'nurse' 
  },
  { 
    en: "He is a ____ of our team.", 
    tr: 'member', 
    wrong: 'waiter' 
  },
  { 
    en: "My ____ lives next door.", 
    tr: 'neighbour', 
    wrong: 'singer' 
  },
  { 
    en: "She is my business ____.", 
    tr: 'partner', 
    wrong: 'baby' 
  },
  { 
    en: "Every ____ needs food and water.", 
    tr: 'person', 
    wrong: 'tooth' 
  },
  { 
    en: "The ____ goes to high school.", 
    tr: 'teenager', 
    wrong: 'grandfather' 
  },
  { 
    en: "The ____ is my mother.", 
    tr: 'woman', 
    wrong: 'driver' 
  },
  { 
    en: "Many ____ live in this city.", 
    tr: 'people', 
    wrong: 'actor' 
  },
  { 
    en: "He is my best ____.", 
    tr: 'friend', 
    wrong: 'leg' 
  },
  { 
    en: "____ is knocking at the door.", 
    tr: 'Somebody', 
    wrong: 'nobody' 
  },
  { 
    en: "I saw ____ in the park yesterday.", 
    tr: 'someone', 
    wrong: 'no one' 
  },
  { 
    en: "Is ____ home right now?", 
    tr: 'anybody', 
    wrong: 'teacher' 
  },
  { 
    en: "Can ____ help me please?", 
    tr: 'anyone', 
    wrong: 'hair' 
  },
  { 
    en: "____ came to the meeting.", 
    tr: 'Nobody', 
    wrong: 'artist' 
  },
  { 
    en: "____ knows the secret.", 
    tr: 'No one', 
    wrong: 'visitor' 
  }
],
      
      // ─────────────────────── QUIZ 5 — Hisslər ───────────────────────
[
  { en: 'afraid',      tr: 'qorxmuş',       wrong: 'xoşbəxt',     wen: 'happy',       def: 'feeling scared' },
  { en: 'angry',       tr: 'əsəbi',         wrong: 'sakit',       wen: 'calm',        def: 'very mad' },
  { en: 'bored',       tr: 'darıxmış',      wrong: 'həyəcanlı',   wen: 'excited',     def: 'not interested' },
  { en: 'excited',     tr: 'həyəcanlı',     wrong: 'yorğun',      wen: 'tired',       def: 'very happy about something' },
  { en: 'happy',       tr: 'xoşbəxt',       wrong: 'kədərli',     wen: 'sad',         def: 'feeling good and joyful' },
  { en: 'hungry',      tr: 'ac',            wrong: 'susamış',     wen: 'thirsty',     def: 'wanting food' },
  { en: 'interested',  tr: 'maraqlanmış',   wrong: 'biganə',      wen: 'bored',       def: 'wanting to know more' },
  { en: 'sad',         tr: 'kədərli',       wrong: 'xoşbəxt',     wen: 'happy',       def: 'feeling unhappy' },
  { en: 'sick',        tr: 'xəstə',         wrong: 'sağlam',      wen: 'healthy',     def: 'not well, ill' },
  { en: 'sorry',       tr: 'üzr istəmək',   wrong: 'razı olmaq',  wen: 'glad',        def: 'feeling bad about something' },
  { en: 'thirsty',     tr: 'susamış',       wrong: 'ac',          wen: 'hungry',      def: 'wanting water' },
  { en: 'tired',       tr: 'yorğun',        wrong: 'enerjili',    wen: 'energetic',   def: 'needing rest' },
  { en: 'boring',      tr: 'cansıxıcı',     wrong: 'maraqlı',     wen: 'interesting', def: 'not interesting' },
  { en: 'exciting',    tr: 'həyəcanlandırıcı', wrong: 'darıxdırıcı', wen: 'boring',    def: 'very interesting' },
  { en: 'interesting', tr: 'maraqlı',       wrong: 'sıxıcı',      wen: 'boring',      def: 'good to know' },
  { en: 'dear',        tr: 'əziz',          wrong: 'uzaq',        wen: 'distant',     def: 'very loved' },
  { en: 'to feel',     tr: 'hiss etmək',    wrong: 'görmək',      wen: 'to see',      def: 'to have an emotion' },
  { en: 'to hate',     tr: 'nifrət etmək',  wrong: 'sevmək',      wen: 'to love',     def: 'to dislike very much' },
  { en: 'to love',     tr: 'sevmək',        wrong: 'nifrət etmək', wen: 'to hate',    def: 'to like very much' },
  { en: 'to like',     tr: 'xoşlamaq',      wrong: 'sevməmək',    wen: 'to dislike',  def: 'to enjoy something' },
],
      
// ─────────────────────── QUIZ 6 — Müsbət Sifətlər ───────────────────────
[
  { en: 'amazing',    tr: 'heyrətamiz',    wrong: 'darıxdırıcı', wen: 'boring',      def: 'very very good' },
  { en: 'beautiful',  tr: 'gözəl',         wrong: 'çirkin',     wen: 'ugly',        def: 'very nice to look at' },
  { en: 'cool',       tr: 'əla',           wrong: 'bərbad',      wen: 'terrible',    def: 'very good' },
  { en: 'delicious',  tr: 'dadlı',         wrong: 'dadsız',     wen: 'tasteless',   def: 'very good to eat' },
  { en: 'fantastic',  tr: 'fantastik',     wrong: 'adi',         wen: 'ordinary',    def: 'extremely good' },
  { en: 'favourite',  tr: 'sevimli',       wrong: 'sevilməyən',  wen: 'hated',       def: 'liked the most' },
  { en: 'friendly',   tr: 'mehriban',      wrong: 'düşmənçilik', wen: 'unfriendly',  def: 'nice to people' },
  { en: 'funny',      tr: 'gülməli',       wrong: 'kədərli',     wen: 'sad',         def: 'makes you laugh' },
  { en: 'good',       tr: 'yaxşı',         wrong: 'pis',         wen: 'bad',         def: 'nice or correct' },
  { en: 'great',      tr: 'əla',           wrong: 'zəif',        wen: 'weak',        def: 'very good' },
  { en: 'healthy',    tr: 'sağlam',        wrong: 'xəstə',       wen: 'sick',        def: 'in good health' },
  { en: 'kind',       tr: 'xeyirxah',      wrong: 'zalım',       wen: 'cruel',       def: 'nice and helpful' },
  { en: 'nice',       tr: 'xoş',           wrong: 'pis',         wen: 'mean',        def: 'pleasant and kind' },
  { en: 'perfect',    tr: 'mükəmməl',      wrong: 'qüsurlu',     wen: 'flawed',      def: 'with no mistakes' },
  { en: 'popular',    tr: 'məşhur',        wrong: 'naməlum',     wen: 'unknown',     def: 'liked by many' },
  { en: 'pretty',     tr: 'qəşəng',        wrong: 'çirkin',      wen: 'ugly',        def: 'nice to look at' },
  { en: 'special',    tr: 'xüsusi',        wrong: 'adi',         wen: 'ordinary',    def: 'not normal' },
  { en: 'strong',     tr: 'güclü',         wrong: 'zəif',        wen: 'weak',        def: 'having power' },
  { en: 'wonderful',  tr: 'möhtəşəm',      wrong: 'dəhşətli',     wen: 'terrible',    def: 'very very good' },
  { en: 'modern',     tr: 'müasir',        wrong: 'köhnə',       wen: 'old-fashioned', def: 'new style' },
],

// ─────────────────────── QUIZ 7 — Ölçü / Size & Shape ───────────────────────
[
  { en: 'big',     tr: 'böyük',   wrong: 'kiçik',  wen: 'small',   def: 'large size' },
  { en: 'small',   tr: 'kiçik',   wrong: 'böyük',  wen: 'big',     def: 'little size' },
  { en: 'large',   tr: 'iri',     wrong: 'dar',    wen: 'narrow',  def: 'very big' },
  { en: 'little',  tr: 'balaca',  wrong: 'nəhəng', wen: 'huge',    def: 'small' },
  { en: 'long',    tr: 'uzun',    wrong: 'qısa',   wen: 'short',   def: 'not short' },
  { en: 'short',   tr: 'qısa',    wrong: 'uzun',   wen: 'long',    def: 'not long' },
  { en: 'tall',    tr: 'hündür',  wrong: 'alçaq',  wen: 'short',   def: 'high person' },
  { en: 'high',    tr: 'yüksək',  wrong: 'aşağı',  wen: 'low',     def: 'far up' },
  { en: 'fat',     tr: 'kök',     wrong: 'arıq',   wen: 'thin',    def: 'big body' },
  { en: 'full',    tr: 'dolu',    wrong: 'boş',    wen: 'empty',   def: 'no space left' },
  { en: 'half',    tr: 'yarım',   wrong: 'tam',    wen: 'whole',   def: '50 percent' },
  { en: 'top',     tr: 'üst',     wrong: 'alt',    wen: 'bottom',  def: 'highest part' },
  { en: 'bottom',  tr: 'alt',     wrong: 'üst',    wen: 'top',     def: 'lowest part' },
  { en: 'middle',  tr: 'orta',    wrong: 'kənar',  wen: 'edge',    def: 'centre part' },
  { en: 'front',   tr: 'ön',      wrong: 'arxa',   wen: 'back',    def: 'forward side' },
  { en: 'back',    tr: 'arxa',    wrong: 'ön',     wen: 'front',   def: 'rear side' },
  { en: 'left',    tr: 'sol',     wrong: 'sağ',    wen: 'right',   def: 'left side' },
  { en: 'right',   tr: 'sağ',     wrong: 'sol',    wen: 'left',    def: 'right side' },
  { en: 'centre',  tr: 'mərkəz',  wrong: 'kənar',  wen: 'edge',    def: 'middle point' },
  { en: 'side',    tr: 'yan',     wrong: 'orta',   wen: 'middle',  def: 'left or right part' },
],

// ─────────────────────── QUIZ 8 — Hal Sifətləri 1 ───────────────────────
[
  { en: 'bad',        tr: 'pis',          wrong: 'yaxşı',      wen: 'good',        def: 'not good' },
  { en: 'busy',       tr: 'məşğul',       wrong: 'boş',        wen: 'free',        def: 'having a lot of work' },
  { en: 'cheap',      tr: 'ucuz',         wrong: 'bahalı',     wen: 'expensive',   def: 'low price' },
  { en: 'clean',      tr: 'təmiz',        wrong: 'çirkli',     wen: 'dirty',       def: 'not dirty' },
  { en: 'cold',       tr: 'soyuq',        wrong: 'isti',       wen: 'hot',         def: 'not warm' },
  { en: 'correct',    tr: 'düzgün',       wrong: 'səhv',       wen: 'wrong',       def: 'true or right' },
  { en: 'dangerous',  tr: 'təhlükəli',    wrong: 'təhlükəsiz', wen: 'safe',        def: 'can hurt you' },
  { en: 'dark',       tr: 'qaranlıq',     wrong: 'işıqlı',     wen: 'bright',      def: 'no light' },
  { en: 'different',  tr: 'fərqli',       wrong: 'eyni',       wen: 'same',        def: 'not the same' },
  { en: 'difficult',  tr: 'çətin',        wrong: 'asan',       wen: 'easy',        def: 'not easy' },
  { en: 'dirty',      tr: 'çirkli',       wrong: 'təmiz',      wen: 'clean',       def: 'not clean' },
  { en: 'dry',        tr: 'quru',         wrong: 'nəm',        wen: 'wet',         def: 'not wet' },
  { en: 'early',      tr: 'erkən',        wrong: 'gec',        wen: 'late',        def: 'before the time' },
  { en: 'easy',       tr: 'asan',         wrong: 'çətin',      wen: 'difficult',   def: 'not difficult' },
  { en: 'expensive',  tr: 'bahalı',       wrong: 'ucuz',       wen: 'cheap',       def: 'high price' },
  { en: 'false',      tr: 'yalan',        wrong: 'həqiqi',     wen: 'true',        def: 'not true' },
  { en: 'fast',       tr: 'sürətli',      wrong: 'yavaş',      wen: 'slow',        def: 'moving quickly' },
  { en: 'fine',       tr: 'yaxşı',        wrong: 'pis',        wen: 'bad',         def: 'good or okay' },
  { en: 'free',       tr: 'azad',         wrong: 'məhkum',     wen: 'imprisoned',  def: 'not in prison' },
  { en: 'hard',       tr: 'çətin',        wrong: 'asan',       wen: 'easy',        def: 'very difficult' },
],

// ─────────────────────── QUIZ 9 — Hal Sifətləri 2 ───────────────────────
[
  { en: 'hot',        tr: 'isti',         wrong: 'soyuq',      wen: 'cold',        def: 'very warm' },
  { en: 'important',  tr: 'vacib',        wrong: 'əhəmiyyətsiz', wen: 'unimportant', def: 'very necessary' },
  { en: 'late',       tr: 'gec',          wrong: 'erkən',      wen: 'early',       def: 'after the time' },
  { en: 'married',    tr: 'evli',         wrong: 'subay',      wen: 'single',      def: 'has a wife or husband' },
  { en: 'old',        tr: 'köhnə',        wrong: 'yeni',       wen: 'new',         def: 'not new' },
  { en: 'open',       tr: 'açıq',         wrong: 'bağlı',      wen: 'closed',      def: 'not closed' },
  { en: 'opposite',   tr: 'əks',          wrong: 'eyni',       wen: 'same',        def: 'completely different' },
  { en: 'poor',       tr: 'kasıb',        wrong: 'varlı',      wen: 'rich',        def: 'has little money' },
  { en: 'possible',   tr: 'mümkün',       wrong: 'qeyri-mümkün', wen: 'impossible', def: 'can happen' },
  { en: 'quick',      tr: 'tez',          wrong: 'yavaş',      wen: 'slow',        def: 'very fast' },
  { en: 'quiet',      tr: 'sakit',        wrong: 'səs-küylü',  wen: 'noisy',       def: 'little or no sound' },
  { en: 'ready',      tr: 'hazır',        wrong: 'razı',       wen: 'unprepared',  def: 'prepared to do' },
  { en: 'real',       tr: 'həqiqi',       wrong: 'saxta',      wen: 'fake',        def: 'not fake' },
  { en: 'rich',       tr: 'varlı',        wrong: 'kasıb',      wen: 'poor',        def: 'has a lot of money' },
  { en: 'same',       tr: 'eyni',         wrong: 'fərqli',     wen: 'different',   def: 'exactly like' },
  { en: 'slow',       tr: 'yavaş',        wrong: 'sürətli',    wen: 'fast',        def: 'not fast' },
  { en: 'sure',       tr: 'əmin',         wrong: 'şübhəli',    wen: 'unsure',      def: 'very certain' },
  { en: 'terrible',   tr: 'dəhşətli',     wrong: 'möhtəşəm',   wen: 'wonderful',   def: 'very bad' },
  { en: 'true',       tr: 'doğru',        wrong: 'yalan',      wen: 'false',       def: 'correct' },
  { en: 'warm',       tr: 'isti',         wrong: 'soyuq',      wen: 'cold',        def: 'a little hot' },
],
// ─────────────────────── NEW EXAM — Emotions & Adjectives ───────────────────────
[
  { 
    en: "I am very ____ today.", 
    tr: 'happy', 
    wrong: 'big' 
  },
  { 
    en: "She feels ____ before the trip.", 
    tr: 'excited', 
    wrong: 'dirty' 
  },
  { 
    en: "The baby is ____ now.", 
    tr: 'hungry', 
    wrong: 'short' 
  },
  { 
    en: "He is ____ of the dark.", 
    tr: 'afraid', 
    wrong: 'delicious' 
  },
  { 
    en: "I feel ____ after running.", 
    tr: 'tired', 
    wrong: 'beautiful' 
  },
  { 
    en: "This food is very ____.", 
    tr: 'delicious', 
    wrong: 'cold' 
  },
  { 
    en: "She is a ____ girl.", 
    tr: 'beautiful', 
    wrong: 'late' 
  },
  { 
    en: "The movie was very ____.", 
    tr: 'interesting', 
    wrong: 'small' 
  },
  { 
    en: "My house is ____.", 
    tr: 'big', 
    wrong: 'sad' 
  },
  { 
    en: "The man is very ____.", 
    tr: 'tall', 
    wrong: 'hungry' 
  },
  { 
    en: "This bag is too ____.", 
    tr: 'heavy', 
    wrong: 'happy' 
  },
  { 
    en: "The room is ____.", 
    tr: 'clean', 
    wrong: 'long' 
  },
  { 
    en: "It is ____ outside today.", 
    tr: 'hot', 
    wrong: 'afraid' 
  },
  { 
    en: "The test was very ____.", 
    tr: 'difficult', 
    wrong: 'full' 
  },
  { 
    en: "I am ____ I am late.", 
    tr: 'sorry', 
    wrong: 'expensive' 
  },
  { 
    en: "She is ____ with her new phone.", 
    tr: 'happy', 
    wrong: 'short' 
  },
  { 
    en: "The water is ____.", 
    tr: 'cold', 
    wrong: 'boring' 
  },
  { 
    en: "This is my ____ book.", 
    tr: 'favourite', 
    wrong: 'angry' 
  },
  { 
    en: "The street is very ____ at night.", 
    tr: 'quiet', 
    wrong: 'tall' 
  },
  { 
    en: "He is ____ in football.", 
    tr: 'interested', 
    wrong: 'small' 
  }
],

// ─────────────────────── QUIZ 10 — Yemək / Food ───────────────────────
[
  { en: 'apple',     tr: 'alma',         wrong: 'armud',      wen: 'pear',        def: 'a round red or green fruit' },
  { en: 'banana',    tr: 'banan',        wrong: 'ərik',       wen: 'apricot',     def: 'a long yellow fruit' },
  { en: 'carrot',    tr: 'yerkökü',      wrong: 'soğan',      wen: 'onion',       def: 'a long orange vegetable' },
  { en: 'fruit',     tr: 'meyvə',        wrong: 'tərəvəz',    wen: 'vegetable',   def: 'sweet food from trees' },
  { en: 'onion',     tr: 'soğan',        wrong: 'sarımsaq',   wen: 'garlic',      def: 'a round white vegetable with strong smell' },
  { en: 'orange',    tr: 'portağal',     wrong: 'limon',      wen: 'lemon',       def: 'a round sweet orange fruit' },
  { en: 'pepper',    tr: 'bibər',        wrong: 'pomidor',    wen: 'tomato',      def: 'a red or green vegetable' },
  { en: 'potato',    tr: 'kartof',       wrong: 'yerkökü',    wen: 'carrot',      def: 'a round brown vegetable from the ground' },
  { en: 'tomato',    tr: 'pomidor',      wrong: 'bibər',      wen: 'pepper',      def: 'a round red vegetable' },
  { en: 'vegetable', tr: 'tərəvəz',      wrong: 'meyvə',      wen: 'fruit',       def: 'food from plants that is not sweet' },
  { en: 'salad',     tr: 'salat',        wrong: 'şorba',      wen: 'soup',        def: 'a cold dish with vegetables' },
  { en: 'plant',     tr: 'bitki',        wrong: 'heyvan',     wen: 'animal',      def: 'something that grows in the ground' },
  { en: 'lemon',     tr: 'limon',        wrong: 'portağal',   wen: 'orange',      def: 'a yellow sour fruit' },
  { en: 'rice',      tr: 'düyü',         wrong: 'un',         wen: 'flour',       def: 'small white grains' },
  { en: 'bread',     tr: 'çörək',        wrong: 'kərə yağı',  wen: 'butter',      def: 'food made from flour' },
  { en: 'butter',    tr: 'kərə yağı',    wrong: 'çörək',      wen: 'bread',       def: 'yellow food from milk' },
  { en: 'flour',     tr: 'un',           wrong: 'şəkər',      wen: 'sugar',       def: 'white powder for making bread' },
  { en: 'egg',       tr: 'yumurta',      wrong: 'süd',        wen: 'milk',        def: 'food from chickens' },
  { en: 'sugar',     tr: 'şəkər',        wrong: 'duz',        wen: 'salt',        def: 'sweet white powder' },
  { en: 'salt',      tr: 'duz',          wrong: 'şəkər',      wen: 'sugar',       def: 'white powder that makes food salty' },
],
      
// ─────────────────────── QUIZ 11 — Yemək 2 / Ət & Dairy ───────────────────────
[
  { en: 'cake',       tr: 'tort',         wrong: 'çörək',      wen: 'bread',       def: 'sweet food for birthdays' },
  { en: 'cheese',     tr: 'pendir',       wrong: 'kərə yağı',  wen: 'butter',      def: 'yellow or white food from milk' },
  { en: 'chicken',    tr: 'toyuq',        wrong: 'balıq',      wen: 'fish',        def: 'meat from a bird' },
  { en: 'chocolate',  tr: 'şokolad',      wrong: 'karamel',    wen: 'caramel',     def: 'sweet brown candy' },
  { en: 'cream',      tr: 'qaymaq',       wrong: 'süd',        wen: 'milk',        def: 'thick white part of milk' },
  { en: 'fish',       tr: 'balıq',        wrong: 'ət',         wen: 'meat',        def: 'food from the sea' },
  { en: 'ice cream',  tr: 'dondurma',     wrong: 'tort',       wen: 'cake',        def: 'cold sweet dessert' },
  { en: 'meat',       tr: 'ət',           wrong: 'toyuq',      wen: 'chicken',     def: 'food from animals' },
  { en: 'milk',       tr: 'süd',          wrong: 'su',         wen: 'water',       def: 'white drink from cows' },
  { en: 'pasta',      tr: 'makaron',      wrong: 'düyü',       wen: 'rice',        def: 'Italian food from flour' },
  { en: 'pizza',      tr: 'pizza',        wrong: 'burger',     wen: 'burger',      def: 'round Italian food with cheese' },
  { en: 'sandwich',   tr: 'sendviç',      wrong: 'pizza',      wen: 'pizza',       def: 'bread with food inside' },
  { en: 'soup',       tr: 'şorba',        wrong: 'salat',      wen: 'salad',       def: 'hot liquid food' },
  { en: 'dish',       tr: 'təam',         wrong: 'dadsız',     wen: 'tasteless',   def: 'one kind of food' },
  { en: 'food',       tr: 'qida',         wrong: 'içki',       wen: 'drink',       def: 'things we eat' },
  { en: 'snack',      tr: 'qəlyanaltı',   wrong: 'nahar',      wen: 'lunch',       def: 'small food between meals' },
  { en: 'butter',     tr: 'kərə yağı',    wrong: 'pendir',     wen: 'cheese',      def: 'yellow food from milk' },
  { en: 'diet',       tr: 'pəhriz',       wrong: 'resept',     wen: 'recipe',      def: 'special food plan' },
  { en: 'cooking',    tr: 'bişirmək',     wrong: 'yemək',      wen: 'to eat',      def: 'making food' },
  { en: 'recipe',     tr: 'resept',       wrong: 'menyu',      wen: 'menu',        def: 'instructions to make food' },
],

// ─────────────────────── QUIZ 12 — Yemək 3 / İçki & Meals ───────────────────────
[
  { en: 'beer',        tr: 'pivə',           wrong: 'şərab',        wen: 'wine',          def: 'alcoholic drink from grain' },
  { en: 'coffee',      tr: 'qəhvə',          wrong: 'çay',          wen: 'tea',           def: 'hot brown drink' },
  { en: 'juice',       tr: 'meyvə şirəsi',    wrong: 'qazlı su',     wen: 'soda',          def: 'drink from fruit' },
  { en: 'milk',        tr: 'süd',            wrong: 'qəhvə',        wen: 'coffee',        def: 'white drink from cows' },
  { en: 'tea',         tr: 'çay',            wrong: 'qəhvə',        wen: 'coffee',        def: 'hot drink from leaves' },
  { en: 'water',       tr: 'su',             wrong: 'şirə',         wen: 'juice',         def: 'clear liquid we drink' },
  { en: 'wine',        tr: 'şərab',          wrong: 'pivə',         wen: 'beer',          def: 'alcoholic drink from grapes' },
  { en: 'breakfast',   tr: 'səhər yeməyi',   wrong: 'axşam yeməyi', wen: 'dinner',        def: 'morning meal' },
  { en: 'dinner',      tr: 'axşam yeməyi',   wrong: 'səhər yeməyi', wen: 'breakfast',     def: 'evening meal' },
  { en: 'lunch',       tr: 'nahar',          wrong: 'başlatmaq',    wen: 'start',         def: 'midday meal' },
  { en: 'meal',        tr: 'yemək',          wrong: 'qəlyanaltı',   wen: 'snack',         def: 'food we eat at one time' },
  { en: 'menu',        tr: 'menyu',          wrong: 'resept',       wen: 'recipe',        def: 'list of foods in a restaurant' },
  { en: 'to drink',    tr: 'içmək',          wrong: 'yemək',        wen: 'to eat',        def: 'to take liquid' },
  { en: 'to eat',      tr: 'yemək',          wrong: 'içmək',        wen: 'to drink',      def: 'to take food' },
  { en: 'to cook',     tr: 'bişirmək',       wrong: 'sifariş etmək', wen: 'to order',     def: 'to make food hot' },
  { en: 'to order',    tr: 'sifariş etmək',  wrong: 'dadmaq',       wen: 'to taste',      def: 'to ask for food in restaurant' },
  { en: 'to taste',    tr: 'dadmaq',         wrong: 'bişirmək',     wen: 'to cook',       def: 'to try the flavour' },
  { en: 'hungry',      tr: 'ac',             wrong: 'susamış',      wen: 'thirsty',       def: 'wanting food' },
  { en: 'thirsty',     tr: 'susamış',        wrong: 'ac',           wen: 'hungry',        def: 'wanting water' },
  { en: 'delicious',   tr: 'dadlı',          wrong: 'dadsız',       wen: 'tasteless',     def: 'very good to eat' },
],
     
[
  {
    en: "I eat an ____ every day.",
    tr: 'apple',
    wrong: 'chicken'
  },
  {
    en: "She likes ____ with milk.",
    tr: 'banana',
    wrong: 'salt'
  },
  {
    en: "The ____ is orange and long.",
    tr: 'carrot',
    wrong: 'bread'
  },
  {
    en: "I like fresh ____ in summer.",
    tr: 'fruit',
    wrong: 'milk'
  },
  {
    en: "This ____ is red and round.",
    tr: 'tomato',
    wrong: 'rice'
  },
  {
    en: "We eat ____ with butter.",
    tr: 'bread',
    wrong: 'water'
  },
  {
    en: "I drink ____ in the morning.",
    tr: 'milk',
    wrong: 'cake'
  },
  {
    en: "My mother cooks ____ for lunch.",
    tr: 'chicken',
    wrong: 'coffee'
  },
  {
    en: "Please give me a glass of ____.",
    tr: 'water',
    wrong: 'banana'
  },
  {
    en: "We eat ____ in the morning.",
    tr: 'breakfast',
    wrong: 'dinner'
  },
  {
    en: "I have ____ at school at 12.",
    tr: 'lunch',
    wrong: 'breakfast'
  },
  {
    en: "We have ____ at 8 o'clock.",
    tr: 'dinner',
    wrong: 'lunch'
  },
  {
    en: "I am very ____. I want food.",
    tr: 'hungry',
    wrong: 'thirsty'
  },
  {
    en: "She is ____. She wants water.",
    tr: 'thirsty',
    wrong: 'hungry'
  },
  {
    en: "This pizza is very ____.",
    tr: 'delicious',
    wrong: 'carrot'
  },
  {
    en: "I want to ____ some cake.",
    tr: 'eat',
    wrong: 'drink'
  },
  {
    en: "We ____ tea every evening.",
    tr: 'drink',
    wrong: 'eat'
  },
  {
    en: "My favourite ____ is chocolate.",
    tr: 'cake',
    wrong: 'tomato'
  },
  {
    en: "I like ____ with fish.",
    tr: 'rice',
    wrong: 'apple'
  },
  {
    en: "She drinks ____ in the morning.",
    tr: 'coffee',
    wrong: 'carrot'
  }
],

// ─────────────────────── QUIZ 13 — Rənglər / Colours ───────────────────────
[
  { en: 'black',     tr: 'qara',        wrong: 'ağ',         wen: 'white',       def: 'the darkest colour' },
  { en: 'blonde',    tr: 'sarışın',     wrong: 'qarayanız',  wen: 'brunette',    def: 'light yellow hair colour' },
  { en: 'blue',      tr: 'mavi',        wrong: 'yaşıl',      wen: 'green',       def: 'colour of the sky' },
  { en: 'brown',     tr: 'qəhvəyi',     wrong: 'boz',        wen: 'grey',        def: 'colour of chocolate' },
  { en: 'green',     tr: 'yaşıl',       wrong: 'mavi',       wen: 'blue',        def: 'colour of grass' },
  { en: 'grey',      tr: 'boz',         wrong: 'qəhvəyi',    wen: 'brown',       def: 'colour between black and white' },
  { en: 'orange',    tr: 'narıncı',     wrong: 'sarı',       wen: 'yellow',      def: 'colour of an orange fruit' },
  { en: 'pink',      tr: 'çəhrayı',     wrong: 'bənövşəyi',  wen: 'purple',      def: 'light red colour' },
  { en: 'purple',    tr: 'bənövşəyi',   wrong: 'çəhrayı',    wen: 'pink',        def: 'colour between red and blue' },
  { en: 'red',       tr: 'qırmızı',     wrong: 'narıncı',    wen: 'orange',      def: 'colour of blood' },
  { en: 'white',     tr: 'ağ',          wrong: 'qara',       wen: 'black',       def: 'the lightest colour' },
  { en: 'yellow',    tr: 'sarı',        wrong: 'narıncı',    wen: 'orange',      def: 'colour of the sun' },
  { en: 'colour',    tr: 'rəng',        wrong: 'çalar',      wen: 'shade',       def: 'red, blue, green etc.' },
  { en: 'dark',      tr: 'qaranlıq',    wrong: 'açıq',       wen: 'light',       def: 'not light colour' },
  { en: 'light',     tr: 'parlaq',      wrong: 'tünd',       wen: 'dark',        def: 'not dark colour' },
  { en: 'bright',    tr: 'parlaq',      wrong: 'solğun',     wen: 'pale',        def: 'very strong colour' },
  { en: 'pale',      tr: 'solğun',      wrong: 'parlaq',     wen: 'bright',      def: 'very light colour' },
  { en: 'deep',      tr: 'dərin',       wrong: 'açıq',       wen: 'light',       def: 'strong and dark colour' },
  { en: 'shade',     tr: 'kölgə',       wrong: 'rəngsiz',    wen: 'colourless',  def: 'a type of colour' },
  { en: 'colourful', tr: 'rəngli',      wrong: 'tünd',       wen: 'dark',        def: 'with many colours' },
],
// ─────────────────────── QUIZ 14 — Rəqəmlər 1 / Numbers 1–20 ───────────────────────
[
  { en: 'one',       tr: 'bir',         wrong: 'iki',        wen: 'two',         def: 'the number 1' },
  { en: 'two',       tr: 'iki',         wrong: 'üç',         wen: 'three',       def: 'the number 2' },
  { en: 'three',     tr: 'üç',          wrong: 'dörd',       wen: 'four',        def: 'the number 3' },
  { en: 'four',      tr: 'dörd',        wrong: 'beş',        wen: 'five',        def: 'the number 4' },
  { en: 'five',      tr: 'beş',         wrong: 'altı',       wen: 'six',         def: 'the number 5' },
  { en: 'six',       tr: 'altı',        wrong: 'yeddi',      wen: 'seven',       def: 'the number 6' },
  { en: 'seven',     tr: 'yeddi',       wrong: 'səkkiz',     wen: 'eight',       def: 'the number 7' },
  { en: 'eight',     tr: 'səkkiz',      wrong: 'doqquz',     wen: 'nine',        def: 'the number 8' },
  { en: 'nine',      tr: 'doqquz',      wrong: 'on',         wen: 'ten',         def: 'the number 9' },
  { en: 'ten',       tr: 'on',          wrong: 'doqquz',     wen: 'nine',        def: 'the number 10' },
  { en: 'eleven',    tr: 'on bir',      wrong: 'on iki',     wen: 'twelve',      def: 'the number 11' },
  { en: 'twelve',    tr: 'on iki',      wrong: 'on üç',      wen: 'thirteen',    def: 'the number 12' },
  { en: 'thirteen',  tr: 'on üç',       wrong: 'on dörd',    wen: 'fourteen',    def: 'the number 13' },
  { en: 'fourteen',  tr: 'on dörd',     wrong: 'on beş',     wen: 'fifteen',     def: 'the number 14' },
  { en: 'fifteen',   tr: 'on beş',      wrong: 'on altı',    wen: 'sixteen',     def: 'the number 15' },
  { en: 'sixteen',   tr: 'on altı',     wrong: 'on yeddi',   wen: 'seventeen',   def: 'the number 16' },
  { en: 'seventeen', tr: 'on yeddi',    wrong: 'on səkkiz',  wen: 'eighteen',    def: 'the number 17' },
  { en: 'eighteen',  tr: 'on səkkiz',   wrong: 'on doqquz',  wen: 'nineteen',    def: 'the number 18' },
  { en: 'nineteen',  tr: 'on doqquz',   wrong: 'iyirmi',     wen: 'twenty',      def: 'the number 19' },
  { en: 'twenty',    tr: 'iyirmi',      wrong: 'on doqquz',  wen: 'nineteen',    def: 'the number 20' },
],

// ─────────────────────── QUIZ 15 — Rəqəmlər 2 / Numbers 30–ordinals ───────────────────────
[
  { en: 'thirty',    tr: 'otuz',        wrong: 'qırx',       wen: 'forty',       def: 'the number 30' },
  { en: 'forty',     tr: 'qırx',        wrong: 'əlli',       wen: 'fifty',       def: 'the number 40' },
  { en: 'fifty',     tr: 'əlli',        wrong: 'altmış',     wen: 'sixty',       def: 'the number 50' },
  { en: 'sixty',     tr: 'altmış',      wrong: 'yetmiş',     wen: 'seventy',     def: 'the number 60' },
  { en: 'seventy',   tr: 'yetmiş',      wrong: 'səksən',     wen: 'eighty',      def: 'the number 70' },
  { en: 'eighty',    tr: 'səksən',      wrong: 'doxsan',     wen: 'ninety',      def: 'the number 80' },
  { en: 'ninety',    tr: 'doxsan',      wrong: 'yüz',        wen: 'hundred',     def: 'the number 90' },
  { en: 'hundred',   tr: 'yüz',         wrong: 'min',        wen: 'thousand',    def: 'the number 100' },
  { en: 'thousand',  tr: 'min',         wrong: 'milyon',     wen: 'million',     def: 'the number 1000' },
  { en: 'million',   tr: 'milyon',      wrong: 'min',        wen: 'thousand',    def: 'the number 1,000,000' },
  { en: 'first',     tr: 'birinci',     wrong: 'ikinci',     wen: 'second',      def: 'number 1 in order' },
  { en: 'second',    tr: 'ikinci',      wrong: 'üçüncü',     wen: 'third',       def: 'number 2 in order' },
  { en: 'third',     tr: 'üçüncü',      wrong: 'dördüncü',   wen: 'fourth',      def: 'number 3 in order' },
  { en: 'fourth',    tr: 'dördüncü',    wrong: 'beşinci',    wen: 'fifth',       def: 'number 4 in order' },
  { en: 'fifth',     tr: 'beşinci',     wrong: 'altıncı',    wen: 'sixth',       def: 'number 5 in order' },
  { en: 'number',    tr: 'nömrə',       wrong: 'sıra',       wen: 'order',       def: '1, 2, 3 etc.' },
  { en: 'half',      tr: 'yarım',       wrong: 'tam',        wen: 'whole',       def: '50 percent' },
  { en: 'quarter',   tr: 'rüb',         wrong: 'yarım',      wen: 'half',        def: '25 percent' },
  { en: 'once',      tr: 'bir dəfə',    wrong: 'iki dəfə',   wen: 'twice',       def: 'one time' },
  { en: 'twice',     tr: 'iki dəfə',    wrong: 'bir dəfə',   wen: 'once',        def: 'two times' },
],
      
[
  {
    en: "My car is ____.",
    tr: 'black',
    wrong: 'first'
  },
  {
    en: "The sky is ____.",
    tr: 'blue',
    wrong: 'thirty'
  },
  {
    en: "Grass is ____.",
    tr: 'green',
    wrong: 'second'
  },
  {
    en: "This apple is ____.",
    tr: 'red',
    wrong: 'hundred'
  },
  {
    en: "She has ____ hair.",
    tr: 'blonde',
    wrong: 'fifth'
  },
  {
    en: "I have ____ books.",
    tr: 'two',
    wrong: 'purple'
  },
  {
    en: "He is ____ years old.",
    tr: 'ten',
    wrong: 'yellow'
  },
  {
    en: "This is my ____ car.",
    tr: 'first',
    wrong: 'blue'
  },
  {
    en: "I want ____ ice cream.",
    tr: 'one',
    wrong: 'dark'
  },
  {
    en: "The sun is ____.",
    tr: 'yellow',
    wrong: 'third'
  },
  {
    en: "She wears a ____ dress.",
    tr: 'pink',
    wrong: 'twenty'
  },
  {
    en: "There are ____ students.",
    tr: 'fifteen',
    wrong: 'white'
  },
  {
    en: "My shirt is ____.",
    tr: 'white',
    wrong: 'quarter'
  },
  {
    en: "This is the ____ time.",
    tr: 'second',
    wrong: 'green'
  },
  {
    en: "I see a ____ cat.",
    tr: 'black',
    wrong: 'fifty'
  },
  {
    en: "He lives on the ____ floor.",
    tr: 'third',
    wrong: 'red'
  },
  {
    en: "The light is very ____.",
    tr: 'bright',
    wrong: 'twice'
  },
  {
    en: "I have ____ apples.",
    tr: 'three',
    wrong: 'purple'
  },
  {
    en: "Her bag is ____.",
    tr: 'brown',
    wrong: 'once'
  },
  {
    en: "I drink ____ glasses of water.",
    tr: 'two',
    wrong: 'colourful'
  }
],
// ─────────────────────── QUIZ 16 — Ev 1 / Rooms & Furniture ───────────────────────
[
  { en: 'apartment', tr: 'mənzil',       wrong: 'ev',           wen: 'house',       def: 'a home in a big building' },
  { en: 'bath',      tr: 'vanna',        wrong: 'duş',          wen: 'shower',      def: 'a big tub for washing' },
  { en: 'bathroom',  tr: 'vanna otağı',  wrong: 'yataq otağı',  wen: 'bedroom',     def: 'room with toilet and shower' },
  { en: 'bed',       tr: 'çarpayı',      wrong: 'divan',        wen: 'sofa',        def: 'furniture for sleeping' },
  { en: 'bedroom',   tr: 'yataq otağı',  wrong: 'qonaq otağı',  wen: 'living room', def: 'room for sleeping' },
  { en: 'building',  tr: 'bina',         wrong: 'mənzil',       wen: 'apartment',   def: 'a big house with many floors' },
  { en: 'chair',     tr: 'stul',         wrong: 'masa',         wen: 'table',       def: 'furniture to sit on' },
  { en: 'clock',     tr: 'saat',         wrong: 'təqvim',       wen: 'calendar',    def: 'tells the time' },
  { en: 'desk',      tr: 'iş masası',    wrong: 'stul',         wen: 'chair',       def: 'table for working' },
  { en: 'door',      tr: 'qapı',         wrong: 'pəncərə',      wen: 'window',      def: 'you open it to enter a room' },
  { en: 'flat',      tr: 'mənzil',       wrong: 'villa',        wen: 'house',       def: 'another word for apartment' },
  { en: 'floor',     tr: 'döşəmə',       wrong: 'tavan',        wen: 'ceiling',     def: 'you walk on it' },
  { en: 'home',      tr: 'ev',           wrong: 'ofis',         wen: 'office',      def: 'where you live' },
  { en: 'house',     tr: 'ev',           wrong: 'mənzil',       wen: 'apartment',   def: 'a building for one family' },
  { en: 'kitchen',   tr: 'mətbəx',       wrong: 'hamam',        wen: 'bathroom',    def: 'room for cooking' },
  { en: 'room',      tr: 'otaq',         wrong: 'koridor',      wen: 'hall',        def: 'a space inside a house' },
  { en: 'sofa',      tr: 'divan',        wrong: 'stul',         wen: 'chair',       def: 'big soft seat' },
  { en: 'table',     tr: 'masa',         wrong: 'stul',         wen: 'chair',       def: 'furniture for eating' },
  { en: 'toilet',    tr: 'tualet',       wrong: 'hamam',        wen: 'bathroom',    def: 'room with WC' },
  { en: 'wall',      tr: 'divar',        wrong: 'tavan',        wen: 'ceiling',     def: 'side of a room' },
],

// ─────────────────────── QUIZ 17 — Ev 2 / Household objects ───────────────────────
[
  { en: 'bag',       tr: 'çanta',        wrong: 'qutu',         wen: 'box',         def: 'you carry things in it' },
  { en: 'bottle',    tr: 'şüşə',         wrong: 'stəkan',       wen: 'glass',       def: 'container for drinks' },
  { en: 'box',       tr: 'qutu',         wrong: 'çanta',        wen: 'bag',         def: 'hard container' },
  { en: 'cup',       tr: 'fincan',       wrong: 'stəkan',       wen: 'glass',       def: 'small container with handle for hot drinks' },
  { en: 'garden',    tr: 'bağça',        wrong: 'həyət',        wen: 'yard',        def: 'place with plants outside house' },
  { en: 'glass',     tr: 'stəkan',       wrong: 'fincan',       wen: 'cup',         def: 'container for cold drinks' },
  { en: 'key',       tr: 'açar',         wrong: 'qıfıl',        wen: 'lock',        def: 'opens a door' },
  { en: 'lamp',      tr: 'lampa',        wrong: 'pəncərə',      wen: 'window',      def: 'gives light' },
  { en: 'machine',   tr: 'maşın',        wrong: 'alət',         wen: 'tool',        def: 'device that does work' },
  { en: 'paper',     tr: 'kağız',        wrong: 'dəftər',       wen: 'notebook',    def: 'thin material for writing' },
  { en: 'pen',       tr: 'qələm',        wrong: 'karandaş',     wen: 'pencil',      def: 'writes with ink' },
  { en: 'pencil',    tr: 'karandaş',     wrong: 'qələm',        wen: 'pen',         def: 'writes with graphite' },
  { en: 'picture',   tr: 'şəkil',        wrong: 'poster',       wen: 'poster',      def: 'photo or painting' },
  { en: 'plant',     tr: 'bitki',        wrong: 'çiçək',        wen: 'flower',      def: 'living thing in a pot' },
  { en: 'shower',    tr: 'duş',          wrong: 'vanna',        wen: 'bath',        def: 'you wash under it' },
  { en: 'window',    tr: 'pəncərə',      wrong: 'qapı',         wen: 'door',        def: 'glass in the wall' },
  { en: 'upstairs',  tr: 'üst mərtəbədə', wrong: 'alt mərtəbədə', wen: 'downstairs',  def: 'on a higher floor' },
  { en: 'downstairs',tr: 'alt mərtəbədə', wrong: 'üst mərtəbədə', wen: 'upstairs',    def: 'on a lower floor' },
  { en: 'inside',    tr: 'içəridə',      wrong: 'çöldə',        wen: 'outside',     def: 'in the house' },
  { en: 'outside',   tr: 'çöldə',        wrong: 'içəridə',      wen: 'inside',      def: 'not in the house' },
],
// ─────────────────────── QUIZ 18 — Şəhər 1 / City buildings ───────────────────────
[
  { en: 'airport',    tr: 'hava limanı',  wrong: 'stansiya',     wen: 'station',     def: 'place for planes' },
  { en: 'bank',       tr: 'bank',         wrong: 'ofis',         wen: 'office',      def: 'place for money' },
  { en: 'cafe',       tr: 'kafe',         wrong: 'restoran',     wen: 'restaurant',  def: 'small place for coffee' },
  { en: 'cinema',     tr: 'kinoteatr',    wrong: 'teatr',        wen: 'theatre',     def: 'place to watch movies' },
  { en: 'city',       tr: 'şəhər',        wrong: 'kənd',         wen: 'village',     def: 'big place with many people' },
  { en: 'club',       tr: 'klub',         wrong: 'kafe',         wen: 'cafe',        def: 'place for dancing' },
  { en: 'college',    tr: 'kollec',       wrong: 'universitet',  wen: 'university',  def: 'place for study after school' },
  { en: 'gym',        tr: 'idman zalı',   wrong: 'hovuz',        wen: 'pool',        def: 'place for exercise' },
  { en: 'hospital',   tr: 'xəstəxana',    wrong: 'aptek',        wen: 'pharmacy',    def: 'place for sick people' },
  { en: 'hotel',      tr: 'otel',         wrong: 'hostel',       wen: 'hostel',      def: 'place to stay for tourists' },
  { en: 'library',    tr: 'kitabxana',    wrong: 'muzey',        wen: 'museum',      def: 'place full of books' },
  { en: 'market',     tr: 'mağaza',       wrong: 'supermarket',  wen: 'supermarket', def: 'place to buy things' },
  { en: 'museum',     tr: 'muzey',        wrong: 'kitabxana',    wen: 'library',     def: 'place with old things' },
  { en: 'office',     tr: 'ofis',         wrong: 'mağaza',       wen: 'shop',        def: 'place to work' },
  { en: 'park',       tr: 'park',         wrong: 'bağça',        wen: 'garden',      def: 'green place with trees' },
  { en: 'pool',       tr: 'hovuz',        wrong: 'idman zalı',   wen: 'gym',         def: 'place to swim' },
  { en: 'restaurant', tr: 'restoran',     wrong: 'kafe',         wen: 'cafe',        def: 'place to eat meals' },
  { en: 'school',     tr: 'məktəb',       wrong: 'kollec',       wen: 'college',     def: 'place for children to study' },
  { en: 'supermarket',tr: 'supermarket',  wrong: 'bazar',        wen: 'market',      def: 'big shop for food' },
  { en: 'theatre',    tr: 'teatr',        wrong: 'kinoteatr',    wen: 'cinema',      def: 'place to watch plays' },
],

// ─────────────────────── QUIZ 19 — Şəhər 2 / Places & areas ───────────────────────
[
  { en: 'area',      tr: 'ərazi',        wrong: 'ölkə',         wen: 'country',     def: 'part of a city' },
  { en: 'bar',       tr: 'bar',          wrong: 'kafe',         wen: 'cafe',        def: 'place for alcoholic drinks' },
  { en: 'capital',   tr: 'paytaxt',      wrong: 'şəhər',        wen: 'city',        def: 'main city of a country' },
  { en: 'centre',    tr: 'mərkəz',       wrong: 'kənar',        wen: 'edge',        def: 'middle of the city' },
  { en: 'country',   tr: 'ölkə',         wrong: 'şəhər',        wen: 'city',        def: 'big land with its own government' },
  { en: 'farm',      tr: 'ferma',        wrong: 'bağça',        wen: 'garden',      def: 'place for animals and food' },
  { en: 'place',     tr: 'məkan',        wrong: 'ərazi',        wen: 'area',        def: 'where something is' },
  { en: 'police',    tr: 'polis',        wrong: 'ordu',         wen: 'army',        def: 'people who keep us safe' },
  { en: 'post',      tr: 'poçt',         wrong: 'bank',         wen: 'bank',        def: 'place to send letters' },
  { en: 'station',   tr: 'vağzal',       wrong: 'hava limanı',  wen: 'airport',     def: 'place for trains' },
  { en: 'street',    tr: 'küçə',         wrong: 'prospekt',     wen: 'avenue',      def: 'road in a city' },
  { en: 'town',      tr: 'qəsəbə',       wrong: 'kənd',         wen: 'village',     def: 'small city' },
  { en: 'university',tr: 'universitet',  wrong: 'kollec',       wen: 'college',     def: 'big place for higher study' },
  { en: 'village',   tr: 'kənd',         wrong: 'qəsəbə',       wen: 'town',        def: 'very small place' },
  { en: 'world',     tr: 'dünya',        wrong: 'ölkə',         wen: 'country',     def: 'the whole planet' },
  { en: 'address',   tr: 'ünvan',        wrong: 'poçt indeksi', wen: 'postcode',    def: 'where you live' },
  { en: 'floor',     tr: 'mərtəbə',      wrong: 'tavan',        wen: 'ceiling',     def: 'level in a building' },
  { en: 'space',     tr: 'kainat',       wrong: 'yer',          wen: 'place',       def: 'big empty area' },
  { en: 'top',       tr: 'zirvə',        wrong: 'ətək',         wen: 'bottom',      def: 'highest part' },
  { en: 'bottom',    tr: 'dib',          wrong: 'dayaz',        wen: 'top',         def: 'lowest part' },
],

      [
  {
    en: "I sleep in my ____.",
    tr: 'bed',
    wrong: 'kitchen'
  },
  {
    en: "We cook in the ____.",
    tr: 'kitchen',
    wrong: 'bathroom'
  },
  {
    en: "I take a shower in the ____.",
    tr: 'bathroom',
    wrong: 'bed'
  },
  {
    en: "My books are on the ____.",
    tr: 'desk',
    wrong: 'window'
  },
  {
    en: "Please open the ____.",
    tr: 'door',
    wrong: 'lamp'
  },
  {
    en: "I watch TV in the living ____.",
    tr: 'room',
    wrong: 'floor'
  },
  {
    en: "She sits on the ____.",
    tr: 'sofa',
    wrong: 'toilet'
  },
  {
    en: "There is a big ____ in the garden.",
    tr: 'tree',
    wrong: 'chair'
  },
  {
    en: "I live in a small ____.",
    tr: 'apartment',
    wrong: 'hospital'
  },
  {
    en: "This is my ____.",
    tr: 'house',
    wrong: 'school'
  },
  {
    en: "I drink water from a ____.",
    tr: 'glass',
    wrong: 'bed'
  },
  {
    en: "Turn on the ____ please.",
    tr: 'lamp',
    wrong: 'door'
  },
  {
    en: "The shop is in the city ____.",
    tr: 'centre',
    wrong: 'bedroom'
  },
  {
    en: "I go to school by ____.",
    tr: 'bus',
    wrong: 'chair'
  },
  {
    en: "We buy food in the ____.",
    tr: 'supermarket',
    wrong: 'bathroom'
  },
  {
    en: "She lives in a small ____.",
    tr: 'village',
    wrong: 'desk'
  },
  {
    en: "The doctor works in the ____.",
    tr: 'hospital',
    wrong: 'kitchen'
  },
  {
    en: "I read books in the ____.",
    tr: 'library',
    wrong: 'toilet'
  },
  {
    en: "We eat dinner in the ____.",
    tr: 'restaurant',
    wrong: 'bed'
  },
  {
    en: "This is my favourite ____.",
    tr: 'room',
    wrong: 'station'
  }
],
      
// ─────────────────────── QUIZ 20 — Təbiət / Nature & Geography ───────────────────────
[
  { en: 'beach',    tr: 'çimərlik',      wrong: 'ada',         wen: 'island',      def: 'sandy place by the sea' },
  { en: 'east',     tr: 'şərq',          wrong: 'qərb',        wen: 'west',        def: 'direction of sunrise' },
  { en: 'island',   tr: 'ada',           wrong: 'yarımada',    wen: 'peninsula',   def: 'land with water all around' },
  { en: 'land',     tr: 'torpaq / ərazi', wrong: 'dəniz',      wen: 'sea',         def: 'ground, not water' },
  { en: 'mountain', tr: 'dağ',           wrong: 'təpə',        wen: 'hill',        def: 'very high land' },
  { en: 'north',    tr: 'şimal',         wrong: 'cənub',       wen: 'south',       def: 'direction to the north pole' },
  { en: 'river',    tr: 'çay',           wrong: 'göl',         wen: 'lake',        def: 'long water that moves' },
  { en: 'road',     tr: 'yol',           wrong: 'küçə',        wen: 'street',      def: 'way for cars' },
  { en: 'sea',      tr: 'dəniz',         wrong: 'okean',       wen: 'ocean',       def: 'big salt water' },
  { en: 'south',    tr: 'cənub',         wrong: 'şimal',       wen: 'north',       def: 'direction opposite to north' },
  { en: 'west',     tr: 'qərb',          wrong: 'şərq',        wen: 'east',        def: 'direction of sunset' },
  { en: 'air',      tr: 'hava',          wrong: 'külək',       wen: 'wind',        def: 'what we breathe' },
  { en: 'fire',     tr: 'od / atəş',     wrong: 'su',          wen: 'water',       def: 'hot and burns' },
  { en: 'flower',   tr: 'çiçək',         wrong: 'ağac',        wen: 'tree',        def: 'beautiful plant with colours' },
  { en: 'ice',      tr: 'buz',           wrong: 'qar',         wen: 'snow',        def: 'frozen water' },
  { en: 'light',    tr: 'işıq',          wrong: 'kölgə',       wen: 'shadow',      def: 'makes things bright' },
  { en: 'rain',     tr: 'yağış',         wrong: 'qar',         wen: 'snow',        def: 'water from the sky' },
  { en: 'snow',     tr: 'qar',           wrong: 'yağış',       wen: 'rain',        def: 'white cold from sky' },
  { en: 'sun',      tr: 'günəş',         wrong: 'ay',          wen: 'moon',        def: 'bright star in the sky' },
  { en: 'tree',     tr: 'ağac',          wrong: 'kol',         wen: 'bush',        def: 'tall plant with wood' },
],

// ─────────────────────── QUIZ 21 — Heyvanlar / Animals ───────────────────────
[
  { en: 'animal',   tr: 'heyvan',        wrong: 'bitki',       wen: 'plant',       def: 'living thing that moves' },
  { en: 'bird',     tr: 'quş',           wrong: 'balıq',       wen: 'fish',        def: 'animal that flies' },
  { en: 'cat',      tr: 'pişik',         wrong: 'it',          wen: 'dog',         def: 'small pet that says meow' },
  { en: 'cow',      tr: 'inək',          wrong: 'keçi',        wen: 'goat',        def: 'big farm animal that gives milk' },
  { en: 'dog',      tr: 'it',            wrong: 'pişik',       wen: 'cat',         def: 'pet that says woof' },
  { en: 'elephant', tr: 'fil',           wrong: 'aslan',       wen: 'lion',        def: 'very big animal with long nose' },
  { en: 'fish',     tr: 'balıq',         wrong: 'quş',         wen: 'bird',        def: 'animal that swims' },
  { en: 'horse',    tr: 'at',            wrong: 'eşşək',       wen: 'donkey',      def: 'animal people ride' },
  { en: 'lion',     tr: 'aslan',         wrong: 'pələng',      wen: 'tiger',       def: 'big cat with mane' },
  { en: 'mouse',    tr: 'siçan',         wrong: 'dovşan',      wen: 'rabbit',      def: 'small animal with long tail' },
  { en: 'pig',      tr: 'donuz',         wrong: 'qoyun',       wen: 'sheep',       def: 'pink farm animal' },
  { en: 'rabbit',   tr: 'dovşan',        wrong: 'siçan',       wen: 'mouse',       def: 'animal with long ears' },
  { en: 'sheep',    tr: 'qoyun',         wrong: 'keçi',        wen: 'goat',        def: 'farm animal with wool' },
  { en: 'snake',    tr: 'ilan',          wrong: 'kərtənkələ',  wen: 'lizard',      def: 'long animal without legs' },
  { en: 'weather',  tr: 'hava / iqlim',  wrong: 'mənzərə',     wen: 'view',        def: 'sun, rain, wind etc.' },
  { en: 'water',    tr: 'su',            wrong: 'hava',        wen: 'air',         def: 'clear liquid we drink' },
  { en: 'rock',     tr: 'qaya / daş',    wrong: 'torpaq',      wen: 'soil',        def: 'hard stone' },
  { en: 'wood',     tr: 'taxta / meşə',  wrong: 'daş',         wen: 'stone',       def: 'material from trees' },
  { en: 'grass',    tr: 'ot / çəmən',    wrong: 'ağac',        wen: 'tree',        def: 'green plant on ground' },
  { en: 'farm',     tr: 'ferma',         wrong: 'bağça',       wen: 'garden',      def: 'place for animals and crops' },
],

// ─────────────────────── QUIZ 22 — Nəqliyyat / Transport ───────────────────────
[
  { en: 'bicycle',  tr: 'velosiped',     wrong: 'motosiklet',  wen: 'motorcycle',  def: 'two-wheel vehicle with pedals' },
  { en: 'bike',     tr: 'velosiped / moto', wrong: 'avtomobil', wen: 'car',        def: 'short word for bicycle' },
  { en: 'boat',     tr: 'qayıq',         wrong: 'gəmi',        wen: 'ship',        def: 'small vehicle on water' },
  { en: 'bus',      tr: 'avtobus',       wrong: 'trolleybus',  wen: 'trolleybus',  def: 'big vehicle for many people' },
  { en: 'car',      tr: 'avtomobil',     wrong: 'avtobus',     wen: 'bus',         def: 'small vehicle for family' },
  { en: 'flight',   tr: 'uçuş',          wrong: 'səyahət',     wen: 'trip',        def: 'journey by plane' },
  { en: 'plane',    tr: 'təyyarə',       wrong: 'vertolyot',   wen: 'helicopter',  def: 'flying vehicle' },
  { en: 'taxi',     tr: 'taksi',         wrong: 'avtobus',     wen: 'bus',         def: 'car for paying passengers' },
  { en: 'train',    tr: 'qatar',         wrong: 'metro',       wen: 'metro',       def: 'long vehicle on rails' },
  { en: 'driving',  tr: 'sürücülük',     wrong: 'uçuş',        wen: 'flying',      def: 'controlling a car' },
  { en: 'traffic',  tr: 'nəqliyyat / tıxac', wrong: 'yol',     wen: 'road',        def: 'cars on the street' },
  { en: 'trip',     tr: 'səfər / gəzinti', wrong: 'yol',       wen: 'road',        def: 'short journey' },
  { en: 'journey',  tr: 'səyahət',       wrong: 'gəzinti',     wen: 'walk',        def: 'long travel' },
  { en: 'travel',   tr: 'səyahət etmək', wrong: 'uçmaq',       wen: 'to fly',      def: 'to go to another place' },
  { en: 'ticket',   tr: 'bilet',         wrong: 'pasport',     wen: 'passport',    def: 'paper to travel' },
  { en: 'passport', tr: 'pasport',       wrong: 'bilet',       wen: 'ticket',      def: 'official document for travel' },
  { en: 'to drive', tr: 'sürmək',        wrong: 'uçmaq',       wen: 'to fly',      def: 'to control a car' },
  { en: 'to fly',   tr: 'uçmaq',         wrong: 'sürmək',      wen: 'to drive',    def: 'to move in the air' },
  { en: 'to ride',  tr: 'minmək / sürmək', wrong: 'gətirmək',  wen: 'to bring',    def: 'to go on a bike or horse' },
  { en: 'to travel',tr: 'səyahət etmək', wrong: 'köçmək',      wen: 'to move',     def: 'to go from one place to another' },
],

// ─────────────────────── QUIZ 23 — Geyim / Clothes & Accessories ───────────────────────
[
  { en: 'boot',     tr: 'çəkmə',         wrong: 'ayaqqabı',    wen: 'shoe',        def: 'tall footwear' },
  { en: 'coat',     tr: 'palto',         wrong: 'gödəkçə',     wen: 'jacket',      def: 'warm long outer clothing' },
  { en: 'dress',    tr: 'don',           wrong: 'ətək',        wen: 'skirt',       def: 'one-piece clothing for girls' },
  { en: 'hat',      tr: 'papaq / şlyapa', wrong: 'şal',        wen: 'scarf',       def: 'covers your head' },
  { en: 'jacket',   tr: 'gödəkçə',       wrong: 'palto',       wen: 'coat',        def: 'short outer clothing' },
  { en: 'jeans',    tr: 'cins şalvar',   wrong: 'şalvar',      wen: 'trousers',    def: 'blue pants' },
  { en: 'shirt',    tr: 'köynək',        wrong: 'pencək',      wen: 'suit',        def: 'top clothing with buttons' },
  { en: 'shoe',     tr: 'ayaqqabı',      wrong: 'çəkmə',       wen: 'boot',        def: 'footwear' },
  { en: 'skirt',    tr: 'ətək',          wrong: 'don',         wen: 'dress',       def: 'clothing from waist down' },
  { en: 'sweater',  tr: 'sviter',        wrong: 'köynək',      wen: 'shirt',       def: 'warm wool top' },
  { en: 'T-shirt',  tr: 'futbolka',      wrong: 'köynək',      wen: 'shirt',       def: 'casual short-sleeve top' },
  { en: 'trousers', tr: 'şalvar',        wrong: 'cins şalvar', wen: 'jeans',       def: 'pants' },
  { en: 'umbrella', tr: 'çətir',         wrong: 'papaq',       wen: 'hat',         def: 'protects from rain' },
  { en: 'watch',    tr: 'saat',          wrong: 'üzük',        wen: 'ring',        def: 'tells time on your wrist' },
  { en: 'clothes',  tr: 'geyim / paltar', wrong: 'aksesuar',   wen: 'accessory',   def: 'things you wear' },
  { en: 'style',    tr: 'üslub / stil',  wrong: 'moda',        wen: 'fashion',     def: 'way of dressing' },
  { en: 'pair',     tr: 'cüt',           wrong: 'ədəd',        wen: 'piece',       def: 'two things together' },
  { en: 'to wear',  tr: 'geymək',        wrong: 'çıxarmaq',    wen: 'to take off', def: 'to put on clothes' },
  { en: 'to dress', tr: 'geyindirmək',   wrong: 'soyundırmaq', wen: 'to undress',  def: 'to put clothes on someone' },
  { en: 'fashion',  tr: 'moda',          wrong: 'stil',        wen: 'style',       def: 'popular way of dressing' },
],

      [
  {
    en: "I swim in the ____.",
    tr: 'sea',
    wrong: 'mountain'
  },
  {
    en: "The ____ is very high.",
    tr: 'mountain',
    wrong: 'river'
  },
  {
    en: "There is a big ____ in the garden.",
    tr: 'tree',
    wrong: 'car'
  },
  {
    en: "The cat is an ____.",
    tr: 'animal',
    wrong: 'shirt'
  },
  {
    en: "I have a small ____ at home.",
    tr: 'dog',
    wrong: 'boat'
  },
  {
    en: "The ____ flies in the sky.",
    tr: 'bird',
    wrong: 'shoe'
  },
  {
    en: "We go to school by ____.",
    tr: 'bus',
    wrong: 'dress'
  },
  {
    en: "My father drives a ____.",
    tr: 'car',
    wrong: 'lion'
  },
  {
    en: "I wear a ____ in winter.",
    tr: 'coat',
    wrong: 'beach'
  },
  {
    en: "She has a new red ____.",
    tr: 'dress',
    wrong: 'river'
  },
  {
    en: "The ____ is very hot today.",
    tr: 'sun',
    wrong: 'train'
  },
  {
    en: "I see a ____ in the zoo.",
    tr: 'lion',
    wrong: 'jacket'
  },
  {
    en: "We travel by ____.",
    tr: 'plane',
    wrong: 'flower'
  },
  {
    en: "Put on your ____.",
    tr: 'shoes',
    wrong: 'island'
  },
  {
    en: "There are many trees in the ____.",
    tr: 'forest',
    wrong: 'taxi'
  },
  {
    en: "The ____ gives us milk.",
    tr: 'cow',
    wrong: 'hat'
  },
  {
    en: "I ride my ____ to school.",
    tr: 'bicycle',
    wrong: 'snow'
  },
  {
    en: "She wears blue ____.",
    tr: 'jeans',
    wrong: 'mountain'
  },
  {
    en: "The ____ is very cold.",
    tr: 'snow',
    wrong: 'bus'
  },
  {
    en: "I need an ____ for the rain.",
    tr: 'umbrella',
    wrong: 'elephant'
  }
],

// ─────────────────────── QUIZ 24 — Zaman 1 / Days & Months ───────────────────────
[
  { en: 'Monday',    tr: 'bazar ertəsi',    wrong: 'çərşənbə',      wen: 'Wednesday',   def: 'first day of the week' },
  { en: 'Tuesday',   tr: 'çərşənbə axşamı', wrong: 'bazar ertəsi',  wen: 'Monday',      def: 'second day of the week' },
  { en: 'Wednesday', tr: 'çərşənbə',        wrong: 'cümə axşamı',  wen: 'Thursday',    def: 'third day of the week' },
  { en: 'Thursday',  tr: 'cümə axşamı',     wrong: 'çərşənbə',      wen: 'Wednesday',   def: 'fourth day of the week' },
  { en: 'Friday',    tr: 'cümə',            wrong: 'şənbə',         wen: 'Saturday',    def: 'fifth day of the week' },
  { en: 'Saturday',  tr: 'şənbə',           wrong: 'bazar',         wen: 'Sunday',      def: 'sixth day of the week' },
  { en: 'Sunday',    tr: 'bazar',           wrong: 'şənbə',         wen: 'Saturday',    def: 'last day of the week' },
  { en: 'January',   tr: 'yanvar',          wrong: 'fevral',        wen: 'February',    def: 'first month of the year' },
  { en: 'February',  tr: 'fevral',          wrong: 'yanvar',        wen: 'January',     def: 'second month of the year' },
  { en: 'March',     tr: 'mart',            wrong: 'aprel',         wen: 'April',       def: 'third month of the year' },
  { en: 'April',     tr: 'aprel',           wrong: 'mart',          wen: 'March',       def: 'fourth month of the year' },
  { en: 'May',       tr: 'may',             wrong: 'iyun',          wen: 'June',        def: 'fifth month of the year' },
  { en: 'June',      tr: 'iyun',            wrong: 'may',           wen: 'May',         def: 'sixth month of the year' },
  { en: 'July',      tr: 'iyul',            wrong: 'avqust',        wen: 'August',      def: 'seventh month of the year' },
  { en: 'August',    tr: 'avqust',          wrong: 'iyul',          wen: 'July',        def: 'eighth month of the year' },
  { en: 'September', tr: 'sentyabr',        wrong: 'oktyabr',       wen: 'October',     def: 'ninth month of the year' },
  { en: 'October',   tr: 'oktyabr',         wrong: 'sentyabr',      wen: 'September',   def: 'tenth month of the year' },
  { en: 'November',  tr: 'noyabr',          wrong: 'dekabr',        wen: 'December',    def: 'eleventh month of the year' },
  { en: 'December',  tr: 'dekabr',          wrong: 'noyabr',        wen: 'November',    def: 'twelfth month of the year' },
  { en: 'week',      tr: 'həftə',           wrong: 'ay',            wen: 'month',       def: 'seven days' },
],

// ─────────────────────── QUIZ 25 — Zaman 2 / General time ───────────────────────
[
  { en: 'afternoon', tr: 'günorta sonrası', wrong: 'səhər',         wen: 'morning',     def: 'time between lunch and evening' },
  { en: 'age',       tr: 'yaş',             wrong: 'müddət',        wen: 'period',      def: 'how old you are' },
  { en: 'autumn',    tr: 'payız',           wrong: 'yaz',           wen: 'spring',      def: 'season after summer' },
  { en: 'date',      tr: 'tarix',           wrong: 'vaxt',          wen: 'time',        def: 'day, month and year' },
  { en: 'day',       tr: 'gün',             wrong: 'gecə',          wen: 'night',       def: '24 hours' },
  { en: 'evening',   tr: 'axşam',           wrong: 'gecə',          wen: 'night',       def: 'time after sunset' },
  { en: 'future',    tr: 'gələcək',         wrong: 'keçmiş',        wen: 'past',        def: 'time that will come' },
  { en: 'holiday',   tr: 'tətil',           wrong: 'iş günü',       wen: 'workday',     def: 'day when you don’t work' },
  { en: 'hour',      tr: 'saat',            wrong: 'dəqiqə',        wen: 'minute',      def: '60 minutes' },
  { en: 'midnight',  tr: 'gecə yarısı',     wrong: 'günorta',       wen: 'noon',        def: '12 o’clock at night' },
  { en: 'minute',    tr: 'dəqiqə',          wrong: 'saniyə',        wen: 'second',      def: '60 seconds' },
  { en: 'moment',    tr: 'an',              wrong: 'dövr',          wen: 'period',      def: 'a very short time' },
  { en: 'month',     tr: 'ay',              wrong: 'həftə',         wen: 'week',        def: 'about 30 days' },
  { en: 'morning',   tr: 'səhər',           wrong: 'axşam',         wen: 'evening',     def: 'early part of the day' },
  { en: 'night',     tr: 'gecə',            wrong: 'gündüz',        wen: 'day',         def: 'dark time' },
  { en: 'noon',      tr: 'günorta',         wrong: 'gecə yarısı',   wen: 'midnight',    def: '12 o’clock in the day' },
  { en: 'past',      tr: 'keçmiş',          wrong: 'gələcək',       wen: 'future',      def: 'time that already happened' },
  { en: 'period',    tr: 'dövr',            wrong: 'an',            wen: 'moment',      def: 'a length of time' },
  { en: 'spring',    tr: 'yaz',             wrong: 'payız',         wen: 'autumn',      def: 'season after winter' },
  { en: 'summer',    tr: 'yay',             wrong: 'qış',           wen: 'winter',      def: 'hottest season' },
],
      
// ─────────────────────── QUIZ 26 — Zaman 3 / More time words ───────────────────────
[
  { en: 'time',      tr: 'vaxt',            wrong: 'dövr',         wen: 'period',      def: 'hours, minutes, seconds' },
  { en: 'today',     tr: 'bu gün',          wrong: 'sabah',         wen: 'tomorrow',    def: 'this day' },
  { en: 'tomorrow',  tr: 'sabah',           wrong: 'dünən',         wen: 'yesterday',   def: 'the next day' },
  { en: 'tonight',   tr: 'bu gecə',         wrong: 'bu səhər',      wen: 'this morning',def: 'this night' },
  { en: 'weekend',   tr: 'həftə sonu',      wrong: 'iş günü',       wen: 'workday',     def: 'Saturday and Sunday' },
  { en: 'winter',    tr: 'qış',             wrong: 'yay',           wen: 'summer',      def: 'coldest season' },
  { en: 'year',      tr: 'il',              wrong: 'ay',            wen: 'month',       def: '12 months' },
  { en: 'yesterday', tr: 'dünən',           wrong: 'bu gün',        wen: 'today',       def: 'the day before today' },
  { en: 'second',    tr: 'saniyə',          wrong: 'dəqiqə',        wen: 'minute',      def: 'very short time' },
  { en: 'birthday',  tr: 'ad günü',         wrong: 'bayram',        wen: 'holiday',     def: 'your birth day' },
  { en: 'festival',  tr: 'festival',        wrong: 'konsert',       wen: 'concert',     def: 'big celebration' },
  { en: 'ago',       tr: 'əvvəl',           wrong: 'sonra',    wen: 'later',       def: 'in the past' },
  { en: 'now',       tr: 'indi',            wrong: 'sonra',         wen: 'later',       def: 'at this moment' },
  { en: 'then',      tr: 'sonra',           wrong: 'indi',          wen: 'now',         def: 'at that time' },
  { en: 'soon',      tr: 'tezliklə',        wrong: 'gec',           wen: 'late',        def: 'in a short time' },
  { en: 'late',      tr: 'gec',             wrong: 'erkən',         wen: 'early',       def: 'after the right time' },
  { en: 'early',     tr: 'erkən',           wrong: 'gec',           wen: 'late',        def: 'before the right time' },
  { en: 'always',    tr: 'həmişə',          wrong: 'heç vaxt',      wen: 'never',       def: 'all the time' },
  { en: 'never',     tr: 'heç vaxt',        wrong: 'həmişə',        wen: 'always',      def: 'at no time' },
  { en: 'often',     tr: 'tez-tez',         wrong: 'nadir hallarda', wen: 'rarely',     def: 'many times' },
],
[
  {
    en: "Today is ____.",
    tr: 'Monday',
    wrong: 'summer'
  },
  {
    en: "My birthday is in ____.",
    tr: 'July',
    wrong: 'night'
  },
  {
    en: "We go to school on ____.",
    tr: 'Monday',
    wrong: 'winter'
  },
  {
    en: "It is very hot in ____.",
    tr: 'summer',
    wrong: 'Tuesday'
  },
  {
    en: "The party is on ____.",
    tr: 'Saturday',
    wrong: 'morning'
  },
  {
    en: "I wake up in the ____.",
    tr: 'morning',
    wrong: 'December'
  },
  {
    en: "We sleep at ____.",
    tr: 'night',
    wrong: 'January'
  },
  {
    en: "She was born in ____.",
    tr: 'March',
    wrong: 'evening'
  },
  {
    en: "I have English class on ____.",
    tr: 'Wednesday',
    wrong: 'autumn'
  },
  {
    en: "Tomorrow is ____.",
    tr: 'Tuesday',
    wrong: 'year'
  },
  {
    en: "It snows in ____.",
    tr: 'winter',
    wrong: 'Friday'
  },
  {
    en: "The meeting is in the ____.",
    tr: 'afternoon',
    wrong: 'April'
  },
  {
    en: "Yesterday was ____.",
    tr: 'Sunday',
    wrong: 'spring'
  },
  {
    en: "My favourite month is ____.",
    tr: 'May',
    wrong: 'tonight'
  },
  {
    en: "We eat breakfast in the ____.",
    tr: 'morning',
    wrong: 'November'
  },
  {
    en: "School starts in ____.",
    tr: 'September',
    wrong: 'midnight'
  },
  {
    en: "I am going there ____.",
    tr: 'tomorrow',
    wrong: 'December'
  },
  {
    en: "This is my ____ year.",
    tr: 'first',
    wrong: 'evening'
  },
  {
    en: "We celebrate New Year in ____.",
    tr: 'December',
    wrong: 'afternoon'
  },
  {
    en: "I am free on the ____.",
    tr: 'weekend',
    wrong: 'January'
  }
],
// ─────────────────────── QUIZ 27 — Pul / Money & Shopping ───────────────────────
[
  { en: 'bill',       tr: 'hesab',           wrong: 'kart',        wen: 'card',        def: 'paper money' },
  { en: 'card',       tr: 'kart',            wrong: 'əskinaz',     wen: 'cash',        def: 'plastic money' },
  { en: 'cent',       tr: 'sent',            wrong: 'dollar',      wen: 'dollar',      def: 'small part of a dollar' },
  { en: 'dollar',     tr: 'dollar',          wrong: 'euro',        wen: 'euro',        def: 'money in USA' },
  { en: 'euro',       tr: 'avro',            wrong: 'funt',        wen: 'pound',       def: 'money in Europe' },
  { en: 'money',      tr: 'pul',             wrong: 'qiymət',      wen: 'price',       def: 'what you use to buy things' },
  { en: 'pound',      tr: 'funt',            wrong: 'avro',        wen: 'euro',        def: 'money in UK' },
  { en: 'price',      tr: 'qiymət',          wrong: 'endirim',     wen: 'discount',    def: 'how much something costs' },
  { en: 'shop',       tr: 'mağaza',          wrong: 'bazar',       wen: 'market',      def: 'place to buy things' },
  { en: 'shopping',   tr: 'alış-veriş',      wrong: 'satış',       wen: 'sale',        def: 'buying things' },
  { en: 'to buy',     tr: 'almaq',           wrong: 'satmaq',      wen: 'to sell',     def: 'to get something with money' },
  { en: 'to cost',    tr: 'başa gəlmək',     wrong: 'ödəmək',      wen: 'to pay',      def: 'how much money you need' },
  { en: 'to pay',     tr: 'ödəmək',          wrong: 'almaq',       wen: 'to buy',      def: 'to give money' },
  { en: 'to order',   tr: 'sifariş etmək',   wrong: 'ödəmək',      wen: 'to pay',      def: 'to ask for something' },
  { en: 'cheap',      tr: 'ucuz',            wrong: 'bahalı',      wen: 'expensive',   def: 'low price' },
  { en: 'expensive',  tr: 'bahalı',          wrong: 'ucuz',        wen: 'cheap',       def: 'high price' },
  { en: 'free',       tr: 'pulsuz',          wrong: 'bahalı',      wen: 'expensive',   def: 'costs nothing' },
  { en: 'rich',       tr: 'varlı',           wrong: 'kasıb',       wen: 'poor',        def: 'has a lot of money' },
  { en: 'poor',       tr: 'kasıb',           wrong: 'varlı',       wen: 'rich',        def: 'has little money' },
  { en: 'market',     tr: 'bazar',           wrong: 'mağaza',      wen: 'shop',        def: 'outdoor place to buy things' },
],
// ─────────────────────── QUIZ 28 — Texnologiya / Technology ───────────────────────
[
  { en: 'blog',       tr: 'bloq',           wrong: 'vebsayt',     wen: 'website',     def: 'personal online diary' },
  { en: 'camera',     tr: 'kamera',         wrong: 'foto',        wen: 'photo',       def: 'device to take pictures' },
  { en: 'CD',         tr: 'CD disk',        wrong: 'DVD',         wen: 'DVD',         def: 'old round music disc' },
  { en: 'computer',   tr: 'kompüter',       wrong: 'planşet',     wen: 'tablet',      def: 'machine for work and games' },
  { en: 'DVD',        tr: 'DVD disk',       wrong: 'CD',          wen: 'CD',          def: 'disc for movies' },
  { en: 'email',      tr: 'elektron poçt',  wrong: 'mesaj',       wen: 'message',     def: 'electronic letter' },
  { en: 'internet',   tr: 'internet',       wrong: 'şəbəkə',      wen: 'network',     def: 'world wide web' },
  { en: 'message',    tr: 'mesaj',          wrong: 'email',       wen: 'email',       def: 'short text' },
  { en: 'online',     tr: 'onlayn',         wrong: 'oflayn',      wen: 'offline',     def: 'connected to internet' },
  { en: 'phone',      tr: 'telefon',        wrong: 'planşet',     wen: 'tablet',      def: 'device to call people' },
  { en: 'photo',      tr: 'şəkil',          wrong: 'video',       wen: 'video',       def: 'still picture' },
  { en: 'photograph', tr: 'fotoşəkil',      wrong: 'şəkil çəkmək', wen: 'to take photo', def: 'picture taken by camera' },
  { en: 'programme',  tr: 'proqram',        wrong: 'tətbiq',      wen: 'app',         def: 'computer software' },
  { en: 'telephone',  tr: 'telefon',        wrong: 'radio',       wen: 'radio',       def: 'device for calling' },
  { en: 'television', tr: 'televiziya',     wrong: 'radio',       wen: 'radio',       def: 'TV' },
  { en: 'text',       tr: 'mətn',           wrong: 'mesaj',       wen: 'message',     def: 'written words' },
  { en: 'TV',         tr: 'televizor',      wrong: 'radio',       wen: 'radio',       def: 'screen for watching' },
  { en: 'video',      tr: 'video',          wrong: 'audio',       wen: 'audio',       def: 'moving pictures' },
  { en: 'website',    tr: 'vebsayt',        wrong: 'bloq',        wen: 'blog',        def: 'page on the internet' },
  { en: 'screen',     tr: 'ekran',          wrong: 'klaviatura',  wen: 'keyboard',    def: 'where you see pictures' },
],

// ─────────────────────── QUIZ 29 — Media / Media & Entertainment ───────────────────────
[
  { en: 'article',    tr: 'məqalə',         wrong: 'xəbər',       wen: 'news',        def: 'long text in newspaper' },
  { en: 'book',       tr: 'kitab',          wrong: 'jurnal',      wen: 'magazine',    def: 'pages with story' },
  { en: 'film',       tr: 'film',           wrong: 'serial',      wen: 'series',      def: 'movie' },
  { en: 'magazine',   tr: 'jurnal',         wrong: 'qəzet',       wen: 'newspaper',   def: 'weekly or monthly reading' },
  { en: 'movie',      tr: 'film',           wrong: 'serial',      wen: 'series',      def: 'story in cinema' },
  { en: 'music',      tr: 'musiqi',         wrong: 'mahnı',       wen: 'song',        def: 'sounds and songs' },
  { en: 'newspaper',  tr: 'qəzet',          wrong: 'jurnal',      wen: 'magazine',    def: 'daily news paper' },
  { en: 'news',       tr: 'xəbər',          wrong: 'məqalə',      wen: 'article',     def: 'new information' },
  { en: 'photo',      tr: 'şəkil',          wrong: 'video',       wen: 'video',       def: 'picture' },
  { en: 'pop',        tr: 'pop musiqi',     wrong: 'rok',         wen: 'rock',        def: 'popular modern music' },
  { en: 'programme',  tr: 'veriliş',        wrong: 'kanal',   wen: 'channel',     def: 'TV show' },
  { en: 'radio',      tr: 'radio',          wrong: 'televiziya',  wen: 'television',  def: 'sound only device' },
  { en: 'report',     tr: 'hesabat',        wrong: 'məqalə',     wen: 'article',     def: 'news story' },
  { en: 'rock',       tr: 'rok musiqi',     wrong: 'pop',         wen: 'pop',         def: 'loud guitar music' },
  { en: 'show',       tr: 'veriliş',        wrong: 'konsert',     wen: 'concert',     def: 'television program' },
  { en: 'song',       tr: 'mahnı',          wrong: 'musiqi',      wen: 'music',       def: 'one piece of music with words' },
  { en: 'story',      tr: 'hekayə',         wrong: 'roman',       wen: 'novel',       def: 'short tale' },
  { en: 'video',      tr: 'video',          wrong: 'audio',       wen: 'audio',       def: 'moving picture' },
  { en: 'band',       tr: 'qrup',           wrong: 'orkestra',    wen: 'orchestra',   def: 'music group' },
  { en: 'concert',    tr: 'konsert',        wrong: 'şou',         wen: 'show',        def: 'live music performance' },
],

      [
  {
    en: "I want to buy a new ____.",
    tr: 'phone',
    wrong: 'book'
  },
  {
    en: "How much is this ____?",
    tr: 'shirt',
    wrong: 'music'
  },
  {
    en: "I pay with my ____.",
    tr: 'card',
    wrong: 'television'
  },
  {
    en: "This computer is very ____.",
    tr: 'expensive',
    wrong: 'Monday'
  },
  {
    en: "I watch films on my ____.",
    tr: 'computer',
    wrong: 'dollar'
  },
  {
    en: "She listens to ____ every day.",
    tr: 'music',
    wrong: 'price'
  },
  {
    en: "I read the ____ in the morning.",
    tr: 'newspaper',
    wrong: 'euro'
  },
  {
    en: "Send me an ____ please.",
    tr: 'email',
    wrong: 'concert'
  },
  {
    en: "This dress is very ____.",
    tr: 'cheap',
    wrong: 'website'
  },
  {
    en: "I take a ____ with my camera.",
    tr: 'photo',
    wrong: 'bill'
  },
  {
    en: "We go to the ____ to buy food.",
    tr: 'shop',
    wrong: 'song'
  },
  {
    en: "Turn on the ____ please.",
    tr: 'television',
    wrong: 'money'
  },
  {
    en: "I need a new ____.",
    tr: 'phone',
    wrong: 'movie'
  },
  {
    en: "She likes pop ____.",
    tr: 'music',
    wrong: 'card'
  },
  {
    en: "The ____ is very big.",
    tr: 'price',
    wrong: 'radio'
  },
  {
    en: "I watch a ____ in the cinema.",
    tr: 'movie',
    wrong: 'euro'
  },
  {
    en: "This ____ is free.",
    tr: 'magazine',
    wrong: 'dollar'
  },
  {
    en: "I listen to the ____ in the car.",
    tr: 'radio',
    wrong: 'shopping'
  },
  {
    en: "He is a very ____ man.",
    tr: 'rich',
    wrong: 'screen'
  },
  {
    en: "I send a ____ to my friend.",
    tr: 'message',
    wrong: 'price'
  }
],
      
// ─────────────────────── QUIZ 30 — Məktəb 1 / School & Study ───────────────────────
[
  { en: 'answer',     tr: 'cavab',                 wrong: 'sual',           wen: 'question',      def: 'what you say after a question' },
  { en: 'class',      tr: 'dərs',         wrong: 'kurs',           wen: 'course',        def: 'group of students' },
  { en: 'classroom',  tr: 'sinif otağı',          wrong: 'laboratoriya',   wen: 'laboratory',    def: 'room where you have lessons' },
  { en: 'course',     tr: 'kurs',                  wrong: 'dərs',           wen: 'lesson',        def: 'long study program' },
  { en: 'detail',     tr: 'təfərrüat',    wrong: 'nümunə',         wen: 'example',       def: 'small information' },
  { en: 'dialogue',   tr: 'dialoq',               wrong: 'monoloq',        wen: 'monologue',     def: 'conversation between two people' },
  { en: 'dictionary', tr: 'lüğət',                 wrong: 'kitab',          wen: 'book',          def: 'book of words and meanings' },
  { en: 'exam',       tr: 'imtahan',              wrong: 'test',           wen: 'test',          def: 'big important test' },
  { en: 'example',    tr: 'nümunə',       wrong: 'tapşırıq',       wen: 'exercise',      def: 'something that shows how' },
  { en: 'exercise',   tr: 'məşq',      wrong: 'nümunə',         wen: 'example',       def: 'practice task' },
  { en: 'geography',  tr: 'coğrafiya',            wrong: 'tarix',          wen: 'history',       def: 'study of countries and maps' },
  { en: 'history',    tr: 'tarix',                 wrong: 'coğrafiya',      wen: 'geography',     def: 'study of the past' },
  { en: 'homework',   tr: 'ev tapşırığı',          wrong: 'sinif işi',      wen: 'classwork',     def: 'work you do at home' },
  { en: 'language',   tr: 'dil',                   wrong: 'ləhcə',          wen: 'dialect',       def: 'way of speaking' },
  { en: 'lesson',     tr: 'dərs',                  wrong: 'kurs',           wen: 'course',        def: 'one class period' },
  { en: 'letter',     tr: 'hərf',        wrong: 'söz',            wen: 'word',          def: 'a, b, c or written message' },
  { en: 'note',       tr: 'qeyd',                  wrong: 'məqalə',         wen: 'article',       def: 'short written message' },
  { en: 'page',       tr: 'səhifə',                wrong: 'paraqraf',       wen: 'paragraph',     def: 'one side of paper' },
  { en: 'paragraph',  tr: 'paraqraf',              wrong: 'cümlə',          wen: 'sentence',      def: 'group of sentences' },
  { en: 'phrase',     tr: 'ifadə', wrong: 'cümlə',        wen: 'sentence',      def: 'group of words' },
],
      
// ─────────────────────── QUIZ 31 — Məktəb 2 / More school words ───────────────────────
[
  { en: 'practice',   tr: 'təcrübə',       wrong: 'nəzəriyyə',      wen: 'theory',        def: 'doing something many times' },
  { en: 'question',   tr: 'sual',                 wrong: 'cavab',          wen: 'answer',        def: 'what you ask' },
  { en: 'reading',    tr: 'oxuma',                wrong: 'yazma',          wen: 'writing',       def: 'looking at words' },
  { en: 'rule',       tr: 'qayda',                wrong: 'istisna',        wen: 'exception',     def: 'what you must do' },
  { en: 'science',    tr: 'elm',                  wrong: 'tarix',          wen: 'history',       def: 'study of nature and experiments' },
  { en: 'section',    tr: 'bölmə',                wrong: 'paraqraf',       wen: 'paragraph',     def: 'part of a text' },
  { en: 'sentence',   tr: 'cümlə',                wrong: 'söz',            wen: 'word',          def: 'full idea with words' },
  { en: 'spelling',   tr: 'yazılış', wrong: 'tələffüz',      wen: 'pronunciation', def: 'how to write words correctly' },
  { en: 'subject',    tr: 'mövzu',         wrong: 'dərs',           wen: 'lesson',        def: 'school topic like math' },
  { en: 'test',       tr: 'test',                 wrong: 'imtahan',        wen: 'exam',          def: 'small check of knowledge' },
  { en: 'title',      tr: 'başlıq',               wrong: 'mövzu',          wen: 'topic',         def: 'name of a book or text' },
  { en: 'word',       tr: 'söz',                  wrong: 'hərf',           wen: 'letter',        def: 'unit of language' },
  { en: 'writing',    tr: 'yazma',                wrong: 'oxuma',          wen: 'reading',       def: 'putting words on paper' },
  { en: 'to learn',   tr: 'öyrənmək',             wrong: 'öyrətmək',       wen: 'to teach',      def: 'to get new knowledge' },
  { en: 'to read',    tr: 'oxumaq',               wrong: 'yazmaq',         wen: 'to write',      def: 'to look at text' },
  { en: 'to study',   tr: 'öyrənmək',    wrong: 'istirahət etmək', wen: 'to rest',       def: 'to learn in school' },
  { en: 'to teach',   tr: 'öyrətmək',             wrong: 'öyrənmək',       wen: 'to learn',      def: 'to give knowledge' },
  { en: 'to write',   tr: 'yazmaq',               wrong: 'oxumaq',         wen: 'to read',       def: 'to make letters on paper' },
  { en: 'to spell',   tr: 'hərfləmək',            wrong: 'tələffüz etmək', wen: 'to pronounce',  def: 'to say letters of a word' },
  { en: 'to repeat',  tr: 'təkrarlamaq',          wrong: 'davam etmək',    wen: 'to continue',   def: 'to say again' },
],

// ─────────────────────── QUIZ 32 — İdman / Sport & Hobbies ───────────────────────
[
  { en: 'art',       tr: 'sənət',                wrong: 'musiqi',         wen: 'music',         def: 'drawing and painting' },
  { en: 'ball',      tr: 'top',                  wrong: 'raket',          wen: 'racket',        def: 'round thing for games' },
  { en: 'chess',     tr: 'şahmat',               wrong: 'dama',           wen: 'checkers',      def: 'board game with king' },
  { en: 'concert',   tr: 'konsert',              wrong: 'şou',            wen: 'show',          def: 'live music performance' },
  { en: 'cooking',   tr: 'bişirmə',              wrong: 'rəsm çəkmə',     wen: 'painting',      def: 'making food' },
  { en: 'dancing',   tr: 'rəqs etmə',            wrong: 'oxuma',          wen: 'singing',       def: 'moving to music' },
  { en: 'festival',  tr: 'festival',             wrong: 'konsert',        wen: 'concert',       def: 'big celebration' },
  { en: 'football',  tr: 'futbol',               wrong: 'basketbol',      wen: 'basketball',    def: 'sport with foot and ball' },
  { en: 'game',      tr: 'oyun',                 wrong: 'matç',           wen: 'match',         def: 'play activity' },
  { en: 'guitar',    tr: 'gitara',               wrong: 'piano',          wen: 'piano',         def: 'string music instrument' },
  { en: 'hobby',     tr: 'hobbi',                wrong: 'peşə',           wen: 'job',           def: 'fun activity in free time' },
  { en: 'match',     tr: 'oyun',          wrong: 'turnir',         wen: 'tournament',    def: 'sports competition' },
  { en: 'painting',  tr: 'rəsm çəkmə',   wrong: 'heykəltəraşlıq', wen: 'sculpture',     def: 'making pictures with colours' },
  { en: 'piano',     tr: 'piano',                wrong: 'gitara',         wen: 'guitar',        def: 'keyboard music instrument' },
  { en: 'pool',      tr: 'hovuz',                wrong: 'idman zalı',     wen: 'gym',           def: 'place to swim' },
  { en: 'singing',   tr: 'mahnı oxuma',  wrong: 'rəqs etmə',      wen: 'dancing',       def: 'using your voice for music' },
  { en: 'sport',     tr: 'idman',                wrong: 'hobbi',          wen: 'hobby',         def: 'physical activity' },
  { en: 'swimming',  tr: 'üzmə',                 wrong: 'qaçış',          wen: 'running',       def: 'moving in water' },
  { en: 'team',      tr: 'komanda',              wrong: 'oyunçu',         wen: 'player',        def: 'group of players' },
  { en: 'tennis',    tr: 'tennis',               wrong: 'badminton',      wen: 'badminton',     def: 'sport with racket and ball' },
],
[
  {
    en: "I go to ____ every day.",
    tr: 'school',
    wrong: 'football'
  },
  {
    en: "The teacher writes on the ____.",
    tr: 'board',
    wrong: 'ball'
  },
  {
    en: "We do ____ at home.",
    tr: 'homework',
    wrong: 'guitar'
  },
  {
    en: "This is my English ____.",
    tr: 'lesson',
    wrong: 'piano'
  },
  {
    en: "I like ____ very much.",
    tr: 'history',
    wrong: 'swimming'
  },
  {
    en: "Please open your ____.",
    tr: 'book',
    wrong: 'team'
  },
  {
    en: "The ____ is very difficult.",
    tr: 'exam',
    wrong: 'concert'
  },
  {
    en: "I write with a ____.",
    tr: 'pen',
    wrong: 'match'
  },
  {
    en: "We play ____ after school.",
    tr: 'football',
    wrong: 'dictionary'
  },
  {
    en: "She is a good ____.",
    tr: 'student',
    wrong: 'painting'
  },
  {
    en: "I read a new ____.",
    tr: 'book',
    wrong: 'tennis'
  },
  {
    en: "The answer is on page ____.",
    tr: 'five',
    wrong: 'guitar'
  },
  {
    en: "We learn new ____ in class.",
    tr: 'words',
    wrong: 'swimming'
  },
  {
    en: "I study ____ at school.",
    tr: 'geography',
    wrong: 'cooking'
  },
  {
    en: "He plays ____ very well.",
    tr: 'tennis',
    wrong: 'homework'
  },
  {
    en: "This is my favourite ____.",
    tr: 'subject',
    wrong: 'piano'
  },
  {
    en: "We sing in music ____.",
    tr: 'class',
    wrong: 'team'
  },
  {
    en: "I need a new ____.",
    tr: 'dictionary',
    wrong: 'festival'
  },
  {
    en: "She draws a beautiful ____.",
    tr: 'picture',
    wrong: 'question'
  },
  {
    en: "We play in the ____ after class.",
    tr: 'yard',
    wrong: 'exam'
  }
],
      
// ─────────────────────── QUIZ 33 — Feil 1 / Movement verbs ───────────────────────
[
  { en: 'to arrive',   tr: 'çatmaq',       wrong: 'getmək',           wen: 'to leave',       def: 'to reach a place' },
  { en: 'to bring',    tr: 'gətirmək',              wrong: 'aparmaq',          wen: 'to take',        def: 'to carry something here' },
  { en: 'to carry',    tr: 'daşımaq',     wrong: 'qoymaq',           wen: 'to put',         def: 'to hold and move something' },
  { en: 'to climb',    tr: 'dırmaşmaq',             wrong: 'düşmək',           wen: 'to fall',        def: 'to go up' },
  { en: 'to come',     tr: 'gəlmək',                wrong: 'getmək',           wen: 'to go',          def: 'to move towards here' },
  { en: 'to fall',     tr: 'yıxılmaq',     wrong: 'qalxmaq',          wen: 'to rise',        def: 'to drop down' },
  { en: 'to fly',      tr: 'uçmaq',                 wrong: 'üzmək',            wen: 'to swim',        def: 'to move in the air' },
  { en: 'to follow',   tr: 'ardınca getmək', wrong: 'qaçmaq',        wen: 'to run',         def: 'to go after someone' },
  { en: 'to go',       tr: 'getmək',                wrong: 'gəlmək',           wen: 'to come',        def: 'to move away' },
  { en: 'to leave',    tr: 'ayrılmaq',     wrong: 'qalmaq',           wen: 'to stay',        def: 'to go away from a place' },
  { en: 'to move',     tr: 'hərəkət etmək',         wrong: 'dayanmaq',         wen: 'to stop',        def: 'to change position' },
  { en: 'to ride',     tr: 'minmək',       wrong: 'yüyürmək',         wen: 'to run',         def: 'to travel on something' },
  { en: 'to run',      tr: 'qaçmaq',                wrong: 'gəzmək',           wen: 'to walk',        def: 'to move fast with legs' },
  { en: 'to sit',      tr: 'oturmaq',               wrong: 'durmaq',           wen: 'to stand',       def: 'to rest on your bottom' },
  { en: 'to stand',    tr: 'ayağa qalxmaq', wrong: 'oturmaq',         wen: 'to sit',         def: 'to be on your feet' },
  { en: 'to turn',     tr: 'dönmək ',     wrong: 'getmək',           wen: 'to go',          def: 'to change direction' },
  { en: 'to walk',     tr: 'gəzmək ',      wrong: 'qaçmaq',           wen: 'to run',         def: 'to move with legs slowly' },
  { en: 'to wake',     tr: 'oyanmaq',               wrong: 'yatmaq',           wen: 'to sleep',       def: 'to stop sleeping' },
  { en: 'to jump',     tr: 'tullanmaq',   wrong: 'qaçmaq',           wen: 'to run',         def: 'to push up from the ground' },
  { en: 'to return',   tr: 'qayıtmaq',              wrong: 'getmək',           wen: 'to go',          def: 'to come back' },
],
      
// ─────────────────────── QUIZ 34 — Feil 2 / Communication verbs ───────────────────────
[
  { en: 'to answer',    tr: 'cavablamaq',           wrong: 'sual vermək',      wen: 'to ask',         def: 'to reply' },
  { en: 'to ask',       tr: 'soruşmaq',             wrong: 'cavablamaq',       wen: 'to answer',      def: 'to question someone' },
  { en: 'to call',      tr: 'zəng etmək / çağırmaq', wrong: 'göndərmək',       wen: 'to send',        def: 'to telephone someone' },
  { en: 'to explain',   tr: 'izah etmək',           wrong: 'sual vermək',      wen: 'to ask',         def: 'to make something clear' },
  { en: 'to guess',     tr: 'təxmin etmək',         wrong: 'bilmək',           wen: 'to know',        def: 'to try to know without sure' },
  { en: 'to introduce', tr: 'təqdim etmək',         wrong: 'izah etmək',       wen: 'to explain',     def: 'to present someone' },
  { en: 'to laugh',     tr: 'gülmək',               wrong: 'ağlamaq',          wen: 'to cry',         def: 'to make happy sound' },
  { en: 'to listen',    tr: 'qulaq asmaq',          wrong: 'danışmaq',         wen: 'to speak',       def: 'to hear carefully' },
  { en: 'to read',      tr: 'oxumaq',               wrong: 'yazmaq',           wen: 'to write',       def: 'to look at words' },
  { en: 'to repeat',    tr: 'təkrarlamaq',          wrong: 'davam etmək',      wen: 'to continue',    def: 'to say again' },
  { en: 'to say',       tr: 'demək',                wrong: 'soruşmaq',         wen: 'to ask',         def: 'to speak words' },
  { en: 'to send',      tr: 'göndərmək',            wrong: 'almaq',            wen: 'to receive',     def: 'to make something go' },
  { en: 'to show',      tr: 'göstərmək',            wrong: 'gizlətmək',        wen: 'to hide',        def: 'to let someone see' },
  { en: 'to sing',      tr: 'mahnı oxumaq',         wrong: 'rəqs etmək',       wen: 'to dance',       def: 'to make music with voice' },
  { en: 'to speak',     tr: 'danışmaq',             wrong: 'susmaaq',          wen: 'to be quiet',    def: 'to talk' },
  { en: 'to spell',     tr: 'hərfləmək',            wrong: 'tələffüz etmək',   wen: 'to pronounce',   def: 'to say letters' },
  { en: 'to talk',      tr: 'söhbət etmək',         wrong: 'susmaaq',          wen: 'to be quiet',    def: 'to speak with someone' },
  { en: 'to tell',      tr: 'söyləmək / danışmaq',  wrong: 'soruşmaq',         wen: 'to ask',         def: 'to give information' },
  { en: 'to thank',     tr: 'təşəkkür etmək',       wrong: 'üzr istəmək',      wen: 'to apologise',   def: 'to say thank you' },
  { en: 'to write',     tr: 'yazmaq',               wrong: 'oxumaq',           wen: 'to read',        def: 'to make letters' },
],
// ─────────────────────── QUIZ 35 — Feil 3 / Daily life verbs ───────────────────────
[
  { en: 'to add',     tr: 'əlavə etmək',         wrong: 'çıxarmaq',       wen: 'to remove',      def: 'to put more' },
  { en: 'to buy',     tr: 'almaq',               wrong: 'satmaq',         wen: 'to sell',        def: 'to get with money' },
  { en: 'to change',  tr: 'dəyişmək',            wrong: 'saxlamaq',       wen: 'to keep',        def: 'to make different' },
  { en: 'to check',   tr: 'yoxlamaq',            wrong: 'düzəltmək',      wen: 'to fix',         def: 'to look if correct' },
  { en: 'to clean',   tr: 'təmizləmək',          wrong: 'çirkləndirmək',   wen: 'to dirty',       def: 'to make clean' },
  { en: 'to close',   tr: 'bağlamaq',            wrong: 'açmaq',          wen: 'to open',        def: 'to shut' },
  { en: 'to cook',    tr: 'bişirmək',            wrong: 'yemək',          wen: 'to eat',         def: 'to make food' },
  { en: 'to cut',     tr: 'kəsmək',              wrong: 'yapışdırmaq',    wen: 'to stick',       def: 'to divide with knife' },
  { en: 'to dance',   tr: 'rəqs etmək',          wrong: 'oxumaq',         wen: 'to sing',        def: 'to move to music' },
  { en: 'to drink',   tr: 'içmək',               wrong: 'yemək',          wen: 'to eat',         def: 'to take liquid' },
  { en: 'to eat',     tr: 'yemək',               wrong: 'içmək',          wen: 'to drink',       def: 'to take food' },
  { en: 'to fill',    tr: 'doldurmaq',           wrong: 'boşaltmaq',      wen: 'to empty',       def: 'to make full' },
  { en: 'to finish',  tr: 'bitirmək',            wrong: 'başlamaq',       wen: 'to start',       def: 'to complete' },
  { en: 'to fix',     tr: 'düzəltmək',           wrong: 'sındırmaq',      wen: 'to break',       def: 'to repair' },
  { en: 'to get',     tr: 'almaq / əldə etmək',  wrong: 'vermək',         wen: 'to give',        def: 'to receive' },
  { en: 'to give',    tr: 'vermək',              wrong: 'almaq',          wen: 'to take',        def: 'to offer something' },
  { en: 'to grow',    tr: 'böyümək / yetişdirmək', wrong: 'azalmaq',      wen: 'to decrease',    def: 'to become bigger' },
  { en: 'to have',    tr: 'sahib olmaq / var olmaq', wrong: 'istəmək',    wen: 'to want',        def: 'to own or possess' },
  { en: 'to help',    tr: 'kömək etmək',         wrong: 'mane olmaq',     wen: 'to disturb',     def: 'to assist' },
  { en: 'to keep',    tr: 'saxlamaq',            wrong: 'atmaq',          wen: 'to throw',       def: 'to hold and not give away' },
],
[
  {
    en: "I ____ to school every day.",
    tr: 'go',
    wrong: 'sing'
  },
  {
    en: "Please ____ the door.",
    tr: 'close',
    wrong: 'fly'
  },
  {
    en: "She ____ a lot of water.",
    tr: 'drinks',
    wrong: 'climbs'
  },
  {
    en: "We ____ football after school.",
    tr: 'play',
    wrong: 'explain'
  },
  {
    en: "He ____ very fast.",
    tr: 'runs',
    wrong: 'thanks'
  },
  {
    en: "I ____ my homework now.",
    tr: 'do',
    wrong: 'fall'
  },
  {
    en: "The teacher ____ us English.",
    tr: 'teaches',
    wrong: 'jumps'
  },
  {
    en: "Please ____ me your book.",
    tr: 'give',
    wrong: 'arrive'
  },
  {
    en: "She ____ a beautiful song.",
    tr: 'sings',
    wrong: 'carry'
  },
  {
    en: "I ____ up at 7 o'clock.",
    tr: 'wake',
    wrong: 'buy'
  },
  {
    en: "We ____ to music every evening.",
    tr: 'listen',
    wrong: 'cut'
  },
  {
    en: "He ____ the ball very well.",
    tr: 'catches',
    wrong: 'return'
  },
  {
    en: "I want to ____ a new phone.",
    tr: 'buy',
    wrong: 'speak'
  },
  {
    en: "The plane ____ very high.",
    tr: 'flies',
    wrong: 'clean'
  },
  {
    en: "Please ____ the question.",
    tr: 'answer',
    wrong: 'fall'
  },
  {
    en: "She ____ dinner for the family.",
    tr: 'cooks',
    wrong: 'follow'
  },
  {
    en: "I ____ English every day.",
    tr: 'study',
    wrong: 'dance'
  },
  {
    en: "They ____ in the park.",
    tr: 'play',
    wrong: 'write'
  },
  {
    en: "He ____ the mountain quickly.",
    tr: 'climbs',
    wrong: 'drink'
  },
  {
    en: "We ____ home at 5 o'clock.",
    tr: 'return',
    wrong: 'ask'
  }
],
      
      
// ─────────────────────── QUIZ 36 — Feil 4 / Daily life verbs 2 ───────────────────────
[
  { en: 'to live',    tr: 'yaşamaq',                    wrong: 'ölmək',           wen: 'to die',          def: 'to be alive' },
  { en: 'to look',    tr: 'baxmaq',                     wrong: 'görmək',          wen: 'to see',          def: 'to turn your eyes toward something' },
  { en: 'to make',    tr: 'etmək / düzəltmək',          wrong: 'dağıtmaq',        wen: 'to break',        def: 'to create or build' },
  { en: 'to meet',    tr: 'görüşmək / tanışmaq',        wrong: 'ayrılmaq',        wen: 'to separate',     def: 'to see someone for the first time' },
  { en: 'to miss',    tr: 'darıxmaq / qaçırmaq',        wrong: 'çatmaq',          wen: 'to arrive',       def: 'to feel sad when someone is not here' },
  { en: 'to open',    tr: 'açmaq',                      wrong: 'bağlamaq',        wen: 'to close',        def: 'to make something not closed' },
  { en: 'to order',   tr: 'sifariş etmək',              wrong: 'ödəmək',          wen: 'to pay',          def: 'to ask for food or things' },
  { en: 'to own',     tr: 'sahib olmaq',                wrong: 'itirmək',         wen: 'to lose',         def: 'to have something as your property' },
  { en: 'to paint',   tr: 'rəsm çəkmək / boyamaq',      wrong: 'silmək',          wen: 'to erase',        def: 'to make pictures with colours' },
  { en: 'to pay',     tr: 'ödəmək',                     wrong: 'almaq',           wen: 'to buy',          def: 'to give money' },
  { en: 'to play',    tr: 'oynamaq',                    wrong: 'işləmək',         wen: 'to work',         def: 'to have fun with games' },
  { en: 'to put',     tr: 'qoymaq',                     wrong: 'götürmək',        wen: 'to take',         def: 'to place something somewhere' },
  { en: 'to relax',   tr: 'istirahət etmək',            wrong: 'işləmək',         wen: 'to work',         def: 'to rest and feel calm' },
  { en: 'to sleep',   tr: 'yatmaq',                     wrong: 'oyanmaq',         wen: 'to wake',         def: 'to close your eyes and rest' },
  { en: 'to spend',   tr: 'xərcləmək / keçirmək',       wrong: 'qazanmaq',        wen: 'to earn',         def: 'to use money or time' },
  { en: 'to start',   tr: 'başlamaq',                   wrong: 'bitirmək',        wen: 'to finish',       def: 'to begin' },
  { en: 'to stop',    tr: 'dayanmaq / dayandırmaq',     wrong: 'davam etmək',     wen: 'to continue',     def: 'to finish moving or doing' },
  { en: 'to swim',    tr: 'üzmək',                      wrong: 'qaçmaq',          wen: 'to run',          def: 'to move in water' },
  { en: 'to take',    tr: 'götürmək / almaq',           wrong: 'vermək',          wen: 'to give',         def: 'to get and hold' },
  { en: 'to try',     tr: 'cəhd etmək',                 wrong: 'imtina etmək',     wen: 'to refuse',       def: 'to attempt something' },
],

// ─────────────────────── QUIZ 37 — Feil 5 / Mental & abstract verbs ───────────────────────
[
  { en: 'to become',   tr: 'olmaq / çevrilmək',         wrong: 'qalmaq',          wen: 'to stay',         def: 'to change into something' },
  { en: 'to begin',    tr: 'başlamaq',                  wrong: 'bitirmək',        wen: 'to finish',       def: 'to start' },
  { en: 'to believe',  tr: 'inanmaq',                   wrong: 'şübhə etmək',     wen: 'to doubt',        def: 'to think something is true' },
  { en: 'to build',    tr: 'inşa etmək / qurmaq',       wrong: 'dağıtmaq',        wen: 'to destroy',      def: 'to make a building' },
  { en: 'to complete', tr: 'tamamlamaq',                wrong: 'başlamaq',        wen: 'to start',        def: 'to finish completely' },
  { en: 'to decide',   tr: 'qərar vermək',              wrong: 'şübhə etmək',     wen: 'to doubt',        def: 'to make a choice' },
  { en: 'to do',       tr: 'etmək / yapmaq',            wrong: 'dayandırmaq',     wen: 'to stop',         def: 'to perform an action' },
  { en: 'to enjoy',    tr: 'zövq almaq',                wrong: 'nifrət etmək',    wen: 'to hate',         def: 'to like something very much' },
  { en: 'to feel',     tr: 'hiss etmək',                wrong: 'düşünmək',        wen: 'to think',        def: 'to have an emotion' },
  { en: 'to find',     tr: 'tapmaq',                    wrong: 'itirmək',         wen: 'to lose',         def: 'to discover something' },
  { en: 'to forget',   tr: 'unutmaq',                   wrong: 'xatırlamaq',      wen: 'to remember',     def: 'to not remember' },
  { en: 'to hate',     tr: 'nifrət etmək',              wrong: 'sevmək',          wen: 'to love',         def: 'to strongly dislike' },
  { en: 'to hear',     tr: 'eşitmək',                   wrong: 'görmək',          wen: 'to see',          def: 'to receive sound' },
  { en: 'to hope',     tr: 'ümid etmək',                wrong: 'ümidsiz olmaq',   wen: 'to despair',      def: 'to want something to happen' },
  { en: 'to include',  tr: 'daxil etmək',               wrong: 'xaric etmək',     wen: 'to exclude',      def: 'to put inside a group' },
  { en: 'to join',     tr: 'qoşulmaq / birləşmək',      wrong: 'ayrılmaq',        wen: 'to leave',        def: 'to become a member' },
  { en: 'to know',     tr: 'bilmək',                    wrong: 'unutmaq',         wen: 'to forget',       def: 'to have information' },
  { en: 'to lose',     tr: 'itirmək / udmaq',           wrong: 'tapmaq',          wen: 'to find',         def: 'to not be able to find' },
  { en: 'to love',     tr: 'sevmək',                    wrong: 'nifrət etmək',    wen: 'to hate',         def: 'to like very very much' },
  { en: 'to mean',     tr: 'mənası olmaq / demək istəmək', wrong: 'bilmək',       wen: 'to know',         def: 'to have a meaning' },
],

// ─────────────────────── QUIZ 38 — Feil 6 / Mental verbs 2 ───────────────────────
[
  { en: 'to need',     tr: 'ehtiyac duymaq',            wrong: 'istəmək',         wen: 'to want',         def: 'to must have something' },
  { en: 'to plan',     tr: 'planlaşdırmaq',             wrong: 'ləğv etmək',      wen: 'to cancel',       def: 'to prepare future actions' },
  { en: 'to practise', tr: 'məşq etmək',                wrong: 'dinlənmək',       wen: 'to rest',         def: 'to repeat to improve' },
  { en: 'to remember', tr: 'xatırlamaq',                wrong: 'unutmaq',         wen: 'to forget',       def: 'to keep in mind' },
  { en: 'to see',      tr: 'görmək',                    wrong: 'eşitmək',         wen: 'to hear',         def: 'to use your eyes' },
  { en: 'to think',    tr: 'düşünmək',                  wrong: 'hiss etmək',      wen: 'to feel',         def: 'to use your mind' },
  { en: 'to understand', tr: 'başa düşmək',             wrong: 'anlamaq',         wen: 'to understand',   def: 'to know the meaning' },
  { en: 'to use',      tr: 'istifadə etmək',            wrong: 'atmaq',           wen: 'to throw',        def: 'to do something with a tool' },
  { en: 'to wait',     tr: 'gözləmək',                  wrong: 'getmək',          wen: 'to go',           def: 'to stay until something happens' },
  { en: 'to want',     tr: 'istəmək',                   wrong: 'ehtiyac duymaq',  wen: 'to need',         def: 'to wish for something' },
  { en: 'to wash',     tr: 'yumaq',                     wrong: 'çirkləndirmək',    wen: 'to dirty',        def: 'to make clean with water' },
  { en: 'to watch',    tr: 'izləmək / seyr etmək',      wrong: 'dinləmək',        wen: 'to listen',       def: 'to look at something for a time' },
  { en: 'to win',      tr: 'qazanmaq / udmaq',          wrong: 'uduzmaq',         wen: 'to lose',         def: 'to be the best' },
  { en: 'to work',     tr: 'işləmək',                   wrong: 'istirahət etmək', wen: 'to rest',         def: 'to do a job' },
  { en: 'to draw',     tr: 'rəsm çəkmək',               wrong: 'boyamaq',         wen: 'to paint',        def: 'to make pictures with pencil' },
  { en: 'to die',      tr: 'ölmək',                     wrong: 'yaşamaq',         wen: 'to live',         def: 'to stop living' },
  { en: 'to let',      tr: 'icazə vermək',              wrong: 'qadağan etmək',   wen: 'to forbid',       def: 'to allow' },
  { en: 'to lie',      tr: 'uzanmaq / yalan söyləmək',  wrong: 'oturmaq',         wen: 'to sit',          def: 'to be in horizontal position' },
  { en: 'to break',    tr: 'sındırmaq',                 wrong: 'düzəltmək',       wen: 'to fix',          def: 'to make something not work' },
  { en: 'to wear',     tr: 'geymək',                    wrong: 'çıxarmaq',        wen: 'to take off',     def: 'to have clothes on your body' },
],
[
  {
    en: "I ____ in Baku.",
    tr: 'live',
    wrong: 'win'
  },
  {
    en: "Please ____ the window.",
    tr: 'open',
    wrong: 'forget'
  },
  {
    en: "She ____ to music.",
    tr: 'listens',
    wrong: 'breaks'
  },
  {
    en: "We ____ football on Sunday.",
    tr: 'play',
    wrong: 'die'
  },
  {
    en: "He ____ a new car.",
    tr: 'wants',
    wrong: 'remembers'
  },
  {
    en: "I ____ my homework every day.",
    tr: 'do',
    wrong: 'lie'
  },
  {
    en: "She ____ a beautiful picture.",
    tr: 'draws',
    wrong: 'waits'
  },
  {
    en: "They ____ in the sea.",
    tr: 'swim',
    wrong: 'understand'
  },
  {
    en: "I ____ you very much.",
    tr: 'love',
    wrong: 'wash'
  },
  {
    en: "He ____ to work by car.",
    tr: 'goes',
    wrong: 'hopes'
  },
  {
    en: "Please ____ for me.",
    tr: 'wait',
    wrong: 'build'
  },
  {
    en: "We ____ TV in the evening.",
    tr: 'watch',
    wrong: 'believe'
  },
  {
    en: "She ____ English very well.",
    tr: 'speaks',
    wrong: 'needs'
  },
  {
    en: "I ____ my keys.",
    tr: 'lost',
    wrong: 'enjoys'
  },
  {
    en: "He ____ in the morning.",
    tr: 'wakes',
    wrong: 'plans'
  },
  {
    en: "They ____ a big house.",
    tr: 'have',
    wrong: 'practises'
  },
  {
    en: "I ____ to be a doctor.",
    tr: 'want',
    wrong: 'breaks'
  },
  {
    en: "She ____ her hands before eating.",
    tr: 'washes',
    wrong: 'remembers'
  },
  {
    en: "We ____ our friends at school.",
    tr: 'meet',
    wrong: 'uses'
  },
  {
    en: "He ____ very hard.",
    tr: 'works',
    wrong: 'hates'
  }
],
// ─────────────────────── QUIZ 39 — İş / Work & Business ───────────────────────
[
  { en: 'action',     tr: 'hərəkət / fəaliyyət', wrong: 'fikir',         wen: 'idea',          def: 'something you do' },
  { en: 'activity',   tr: 'fəaliyyət',           wrong: 'istirahət',     wen: 'rest',          def: 'thing you do' },
  { en: 'business',   tr: 'biznes / iş',         wrong: 'hobbi',         wen: 'hobby',         def: 'work to make money' },
  { en: 'company',    tr: 'şirkət',              wrong: 'komanda',       wen: 'team',          def: 'big group that works together' },
  { en: 'interview',  tr: 'müsahibə',            wrong: 'imtahan',       wen: 'exam',          def: 'meeting for a job' },
  { en: 'job',        tr: 'iş / vəzifə',         wrong: 'hobbi',         wen: 'hobby',         def: 'work you do for money' },
  { en: 'meeting',    tr: 'görüş / iclas',       wrong: 'müsahibə',      wen: 'interview',     def: 'when people talk together' },
  { en: 'model',      tr: 'model',               wrong: 'nümunə',        wen: 'example',       def: 'small copy or example' },
  { en: 'office',     tr: 'ofis',                wrong: 'fabrik',        wen: 'factory',       def: 'place where people work at desks' },
  { en: 'plan',       tr: 'plan',                wrong: 'hesabat',       wen: 'report',        def: 'what you will do' },
  { en: 'problem',    tr: 'problem',             wrong: 'həll',          wen: 'solution',      def: 'difficult situation' },
  { en: 'project',    tr: 'layihə',              wrong: 'plan',          wen: 'plan',          def: 'big piece of work' },
  { en: 'reason',     tr: 'səbəb',               wrong: 'nəticə',        wen: 'result',        def: 'why something happens' },
  { en: 'report',     tr: 'hesabat',             wrong: 'plan',          wen: 'plan',          def: 'written information' },
  { en: 'rule',       tr: 'qayda',               wrong: 'istisna',       wen: 'exception',     def: 'what you must follow' },
  { en: 'work',       tr: 'iş',                  wrong: 'istirahət',     wen: 'rest',          def: 'job or activity' },
  { en: 'to work',    tr: 'işləmək',             wrong: 'istirahət etmək', wen: 'to rest',       def: 'to do a job' },
  { en: 'to complete',tr: 'tamamlamaq',          wrong: 'başlamaq',      wen: 'to start',      def: 'to finish' },
  { en: 'to plan',    tr: 'planlaşdırmaq',       wrong: 'ləğv etmək',    wen: 'to cancel',     def: 'to prepare future' },
  { en: 'to fix',     tr: 'düzəltmək',           wrong: 'sındırmaq',     wen: 'to break',      def: 'to repair' },
],
      
// ─────────────────────── QUIZ 40 — Müxtəlif İsimlər / Misc nouns ───────────────────────
[
  { en: 'beginning',  tr: 'başlanğıc',           wrong: 'son',           wen: 'end',           def: 'first part' },
  { en: 'chart',      tr: 'cədvəl / qrafik',     wrong: 'xəritə',        wen: 'map',           def: 'picture with information' },
  { en: 'end',        tr: 'son',                 wrong: 'başlanğıc',     wen: 'beginning',     def: 'last part' },
  { en: 'form',       tr: 'forma / bianket',     wrong: 'sənəd',         wen: 'document',      def: 'paper to fill' },
  { en: 'fun',        tr: 'əyləncə / zövq',      wrong: 'sıkıntı',       wen: 'boredom',       def: 'enjoyable time' },
  { en: 'group',      tr: 'qrup',                wrong: 'fərd',          wen: 'individual',    def: 'more than one person together' },
  { en: 'idea',       tr: 'fikir / ideya',       wrong: 'plan',          wen: 'plan',          def: 'new thought' },
  { en: 'information',tr: 'məlumat',             wrong: 'sual',          wen: 'question',      def: 'facts and knowledge' },
  { en: 'interest',   tr: 'maraq / faiz',        wrong: 'biganəlik',     wen: 'boredom',       def: 'wanting to know more' },
  { en: 'kind',       tr: 'növ / cür',           wrong: 'rəng',          wen: 'colour',        def: 'type or sort' },
  { en: 'life',       tr: 'həyat',               wrong: 'ölüm',          wen: 'death',         def: 'time you are alive' },
  { en: 'line',       tr: 'xətt / sıra',         wrong: 'nöqtə',         wen: 'point',         def: 'long thin mark' },
  { en: 'list',       tr: 'siyahı',              wrong: 'cədvəl',        wen: 'chart',         def: 'names or things one after another' },
  { en: 'lot',        tr: 'çox / xeyli',         wrong: 'az',            wen: 'little',        def: 'large amount' },
  { en: 'map',        tr: 'xəritə',              wrong: 'plan',          wen: 'plan',          def: 'picture of a place' },
  { en: 'meaning',    tr: 'məna',                wrong: 'söz',           wen: 'word',          def: 'what something means' },
  { en: 'mistake',    tr: 'səhv',                wrong: 'cavab',         wen: 'answer',        def: 'wrong action' },
  { en: 'part',       tr: 'hissə',               wrong: 'tam',           wen: 'whole',         def: 'piece of something' },
  { en: 'point',      tr: 'nöqtə / məqam',       wrong: 'xətt',          wen: 'line',          def: 'single dot or idea' },
  { en: 'sound',      tr: 'səs',                 wrong: 'şəkil',         wen: 'picture',       def: 'what you hear' },
],

// ─────────────────────── QUIZ 41 — Müxtəlif İsimlər 2 / Misc nouns 2 ───────────────────────
[
  { en: 'space',     tr: 'məkan / kosmoz',       wrong: 'yer',           wen: 'place',         def: 'empty area' },
  { en: 'style',     tr: 'üslub / stil',         wrong: 'moda',          wen: 'fashion',       def: 'way of doing something' },
  { en: 'type',      tr: 'növ / tip',            wrong: 'forma',         wen: 'shape',         def: 'kind or sort' },
  { en: 'way',       tr: 'yol / üsul',           wrong: 'məkan',         wen: 'place',         def: 'how to do something' },
  { en: 'cup',       tr: 'fincan',               wrong: 'stəkan',        wen: 'glass',         def: 'small container with handle' },
  { en: 'glass',     tr: 'stəkan / şüşə',        wrong: 'fincan',        wen: 'cup',           def: 'container for drinks' },
  { en: 'bottle',    tr: 'şüşə / butulka',       wrong: 'qutu',          wen: 'box',           def: 'container for liquid' },
  { en: 'box',       tr: 'qutu',                 wrong: 'çanta',         wen: 'bag',           def: 'hard container' },
  { en: 'piece',     tr: 'parça / hissə',        wrong: 'tam',           wen: 'whole',         def: 'one part' },
  { en: 'thing',     tr: 'şey',                  wrong: 'yer',           wen: 'place',         def: 'object' },
  { en: 'stuff',     tr: 'şeylər / əşyalar',     wrong: 'məlumat',       wen: 'information',   def: 'different things' },
  { en: 'item',      tr: 'maddə / əşya',         wrong: 'siyahı',        wen: 'list',          def: 'one single thing' },
  { en: 'model',     tr: 'model',                wrong: 'tip',           wen: 'type',          def: 'small copy' },
  { en: 'size',      tr: 'ölçü / beden',         wrong: 'forma',         wen: 'shape',         def: 'how big or small' },
  { en: 'shape',     tr: 'forma / şəkil',        wrong: 'rəng',          wen: 'colour',        def: 'form of something' },
  { en: 'colour',    tr: 'rəng',                 wrong: 'forma',         wen: 'shape',         def: 'red, blue, green etc.' },
  { en: 'name',      tr: 'ad / isim',            wrong: 'soyad',         wen: 'surname',       def: 'what someone is called' },
  { en: 'title',     tr: 'başlıq / ünvan',       wrong: 'ad',            wen: 'name',          def: 'name of a book or film' },
  { en: 'number',    tr: 'rəqəm / nömrə',        wrong: 'hərf',          wen: 'letter',        def: '1, 2, 3 etc.' },
],
      [
  {
    en: "I go to the ____ every day.",
    tr: 'office',
    wrong: 'shape'
  },
  {
    en: "She has a good ____.",
    tr: 'job',
    wrong: 'piece'
  },
  {
    en: "We have a meeting at the ____.",
    tr: 'company',
    wrong: 'bottle'
  },
  {
    en: "This is an important ____.",
    tr: 'project',
    wrong: 'cup'
  },
  {
    en: "I need to ____ the problem.",
    tr: 'fix',
    wrong: 'space'
  },
  {
    en: "He works in a big ____.",
    tr: 'office',
    wrong: 'item'
  },
  {
    en: "What is the ____ of this shirt?",
    tr: 'size',
    wrong: 'number'
  },
  {
    en: "I have a new business ____.",
    tr: 'plan',
    wrong: 'glass'
  },
  {
    en: "She is very good at her ____.",
    tr: 'job',
    wrong: 'title'
  },
  {
    en: "We need more ____ about the trip.",
    tr: 'information',
    wrong: 'model'
  },
  {
    en: "This is my favourite ____.",
    tr: 'colour',
    wrong: 'meeting'
  },
  {
    en: "I made a small ____.",
    tr: 'mistake',
    wrong: 'interview'
  },
  {
    en: "He has a great ____.",
    tr: 'idea',
    wrong: 'box'
  },
  {
    en: "The ____ of the story is sad.",
    tr: 'end',
    wrong: 'report'
  },
  {
    en: "I want to ____ a new phone.",
    tr: 'buy',
    wrong: 'name'
  },
  {
    en: "This ____ is very interesting.",
    tr: 'work',
    wrong: 'thing'
  },
  {
    en: "She has a beautiful ____.",
    tr: 'name',
    wrong: 'business'
  },
  {
    en: "We need to make a ____.",
    tr: 'list',
    wrong: 'interview'
  },
  {
    en: "The ____ of this bag is big.",
    tr: 'size',
    wrong: 'action'
  },
  {
    en: "I like this ____ of music.",
    tr: 'type',
    wrong: 'company'
  }
],

   
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 2 — A2: Əsas Səviyyə                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'a2',
    name: 'A2 — ELEMENTARY',
    icon: '🌿',
    color: '#9B6FD4',
    quizzes: [
      // ─────────────────────── QUIZ 1 — Peşələr 1 (texniki / yaradıcı) ───────────────────────
[
  { en: 'architect',   tr: 'memar',         wrong: 'mühəndis',    wen: 'scientist',     def: 'a person who designs buildings' },
  { en: 'designer',    tr: 'dizayner',      wrong: 'rəssam',       wen: 'chef',          def: 'a person who creates the look of things' },
  { en: 'engineer',    tr: 'mühəndis',      wrong: 'texnik',       wen: 'doctor',        def: 'a person who builds machines and bridges' },
  { en: 'journalist',  tr: 'jurnalist',     wrong: 'redaktor',     wen: 'pilot',         def: 'a person who writes news for newspapers or TV' },
  { en: 'lawyer',      tr: 'hüquqşünas',    wrong: 'hakim',        wen: 'teacher',       def: 'a person who gives advice about the law' },
  { en: 'musician',    tr: 'musiqiçi',      wrong: 'müğənni',      wen: 'painter',       def: 'a person who plays a musical instrument' },
  { en: 'painter',     tr: 'rəssam',        wrong: 'heykəltəraş',  wen: 'writer',        def: 'a person who paints pictures' },
  { en: 'photographer',tr: 'fotoqraf',      wrong: 'operator',     wen: 'driver',        def: 'a person who takes photos' },
  { en: 'pilot',       tr: 'pilot',         wrong: 'kapitan',      wen: 'chef',          def: 'a person who flies planes' },
  { en: 'professor',   tr: 'professor',     wrong: 'müəllim',      wen: 'manager',       def: 'a high level teacher at university' },
  { en: 'programmer',  tr: 'proqramçı',     wrong: 'mühəndis',     wen: 'journalist',    def: 'a person who writes computer programs' },
  { en: 'scientist',   tr: 'alim',          wrong: 'tədqiqatçı',   wen: 'artist',        def: 'a person who does scientific research' },
  { en: 'teacher',     tr: 'müəllim',       wrong: 'tərbiyəçi',    wen: 'doctor',        def: 'a person who teaches in a school' },
  { en: 'writer',      tr: 'yazıçı',        wrong: 'jurnalist',    wen: 'musician',      def: 'a person who writes books and stories' },
  { en: 'artist',      tr: 'sənətkar',      wrong: 'rəssam',       wen: 'engineer',      def: 'a person who creates art' },
  { en: 'chef',        tr: 'aşpaz',         wrong: 'ofisiant',     wen: 'pilot',         def: 'a professional cook' },
  { en: 'actor',       tr: 'aktyor',        wrong: 'rejissor',     wen: 'teacher',       def: 'a person who acts in films or theatre' },
  { en: 'actress',     tr: 'aktrisa',       wrong: 'müğənni',      wen: 'painter',       def: 'a woman who acts in films or theatre' },
  { en: 'director',    tr: 'rejissor',      wrong: 'prodüser',     wen: 'scientist',     def: 'a person who tells actors what to do in a film' },
  { en: 'editor',      tr: 'redaktor',      wrong: 'jurnalist',    wen: 'photographer',  def: 'a person who corrects and improves texts' }
],

// ─────────────────────── QUIZ 2 — Peşələr 2 (xidmət / sosial) ───────────────────────
[
  { en: 'assistant',   tr: 'köməkçi',       wrong: 'katib',        wen: 'manager',       def: 'a person who helps someone with their work' },
  { en: 'athlete',     tr: 'atlet',         wrong: 'məşqçi',       wen: 'scientist',     def: 'a person who does sports professionally' },
  { en: 'author',      tr: 'müəllif',       wrong: 'redaktor',     wen: 'pilot',         def: 'a person who writes books' },
  { en: 'businessman', tr: 'iş adamı',      wrong: 'siyasətçi',    wen: 'artist',        def: 'a man who owns or works in business' },
  { en: 'cook',        tr: 'aşpaz',         wrong: 'ofisiant',     wen: 'teacher',       def: 'a person who prepares food' },
  { en: 'detective',   tr: 'dedektiv',      wrong: 'polis',        wen: 'doctor',        def: 'a person who solves crimes' },
  { en: 'doctor',      tr: 'həkim',         wrong: 'tibb bacısı',  wen: 'chef',          def: 'a person who treats patients' },
  { en: 'driver',      tr: 'sürücü',        wrong: 'pilot',        wen: 'journalist',    def: 'a person who drives vehicles' },
  { en: 'employee',    tr: 'işçi',          wrong: 'müdir',        wen: 'artist',        def: 'a person who works for a company' },
  { en: 'employer',    tr: 'işəgötürən',    wrong: 'işçi',         wen: 'student',       def: 'a person who gives jobs to others' },
  { en: 'instructor',  tr: 'təlimatçı',     wrong: 'müəllim',      wen: 'scientist',     def: 'a person who teaches practical skills' },
  { en: 'manager',     tr: 'menecer',       wrong: 'direktor',     wen: 'athlete',       def: 'a person who controls a team or department' },
  { en: 'nurse',       tr: 'tibb bacısı',   wrong: 'həkim',        wen: 'teacher',       def: 'a person who cares for sick people' },
  { en: 'officer',     tr: 'zabit',         wrong: 'əsgər',        wen: 'chef',          def: 'a person with high rank in the army or police' },
  { en: 'reporter',    tr: 'müxbir',        wrong: 'redaktor',     wen: 'pilot',         def: 'a person who reports news' },
  { en: 'researcher',  tr: 'tədqiqatçı',    wrong: 'alim',         wen: 'musician',      def: 'a person who does research' },
  { en: 'secretary',   tr: 'katib',         wrong: 'köməkçi',      wen: 'driver',        def: 'a person who organises office work' },
  { en: 'soldier',     tr: 'əsgər',         wrong: 'zabit',        wen: 'artist',        def: 'a person who serves in the army' },
  { en: 'waiter',      tr: 'ofisiant',      wrong: 'aşpaz',        wen: 'teacher',       def: 'a person who serves food in restaurants' },
  { en: 'worker',      tr: 'fəhlə',         wrong: 'işçi',         wen: 'manager',       def: 'a person who does physical work' }
],

// ─────────────────────── QUIZ 3 — İnsan bədəni ───────────────────────
[
  { en: 'ankle',      tr: 'topuq',            wrong: 'diz',           wen: 'wrist',         def: 'the joint between your foot and leg' },
  { en: 'blood',      tr: 'qan',              wrong: 'nəfəs',         wen: 'skin',          def: 'the red liquid inside your body' },
  { en: 'bone',       tr: 'sümük',            wrong: 'əzələ',         wen: 'heart',         def: 'the hard parts inside your body' },
  { en: 'brain',      tr: 'beyin',            wrong: 'ürək',          wen: 'stomach',       def: 'the organ inside your head that controls thinking' },
  { en: 'finger',     tr: 'barmaq',           wrong: 'dırnaq',        wen: 'toe',           def: 'one of the five parts at the end of your hand' },
  { en: 'heart',      tr: 'ürək',             wrong: 'ciyər',         wen: 'lung',          def: 'the organ that pumps blood in your body' },
  { en: 'knee',       tr: 'diz',              wrong: 'topuq',         wen: 'elbow',         def: 'the joint in the middle of your leg' },
  { en: 'neck',       tr: 'boyun',            wrong: 'çiyin',         wen: 'waist',         def: 'the part that connects your head to your body' },
  { en: 'shoulder',   tr: 'çiyin',            wrong: 'qol',           wen: 'knee',          def: 'the part between your neck and your arm' },
  { en: 'skin',       tr: 'dəri',             wrong: 'saç',           wen: 'bone',          def: 'the outer covering of your body' },
  { en: 'stomach',    tr: 'mədə',             wrong: 'bağırsaq',      wen: 'brain',         def: 'the organ where food is digested' },
  { en: 'toe',        tr: 'ayaq barmağı',     wrong: 'dırnaq',        wen: 'finger',        def: 'one of the five parts at the end of your foot' },
  { en: 'back',       tr: 'arxa',             wrong: 'qarın',         wen: 'chest',         def: 'the rear part of your body' },
  { en: 'chest',      tr: 'sinə',             wrong: 'bel',           wen: 'back',          def: 'the front part of your body between your shoulders and waist' },
  { en: 'ear',        tr: 'qulaq',            wrong: 'göz',           wen: 'nose',          def: 'the part of your head you hear with' },
  { en: 'eye',        tr: 'göz',              wrong: 'qaş',           wen: 'mouth',         def: 'the part of your face you see with' },
  { en: 'face',       tr: 'üz',               wrong: 'alın',          wen: 'neck',          def: 'the front part of your head' },
  { en: 'foot',       tr: 'ayaq',             wrong: 'diz',           wen: 'hand',          def: 'the part at the end of your leg' },
  { en: 'hand',       tr: 'əl',               wrong: 'bilərzik',      wen: 'foot',          def: 'the part at the end of your arm' },
  { en: 'head',       tr: 'baş',              wrong: 'boyun',         wen: 'shoulder',      def: 'the top part of your body' }
],

// ─────────────────────── QUIZ 4 — Sağlamlıq və xəstəlik ───────────────────────
[
  { en: 'headache',    tr: 'baş ağrısı',       wrong: 'hərarət',       wen: 'stomachache',   def: 'a pain in your head' },
  { en: 'illness',     tr: 'xəstəlik',         wrong: 'zədə',          wen: 'injury',        def: 'when you are not healthy' },
  { en: 'injury',      tr: 'xəsarət',          wrong: 'xəstəlik',      wen: 'fever',         def: 'physical damage to your body' },
  { en: 'pain',        tr: 'ağrı',             wrong: 'hərarət',       wen: 'cough',         def: 'the feeling when part of your body hurts' },
  { en: 'flu',         tr: 'qrip',             wrong: 'soyuqdəymə',    wen: 'headache',      def: 'a common infectious disease' },
  { en: 'medicine',    tr: 'dərman',           wrong: 'həb',           wen: 'exercise',      def: 'something you take when you are sick' },
  { en: 'disease',     tr: 'xəstəlik',         wrong: 'virus',         wen: 'health',        def: 'a serious illness' },
  { en: 'drug',        tr: 'dərman',           wrong: 'vitamin',       wen: 'food',          def: 'medicine or pill' },
  { en: 'virus',       tr: 'virus',            wrong: 'bakteriya',     wen: 'medicine',      def: 'a very small thing that can make you sick' },
  { en: 'temperature', tr: 'hərarət',          wrong: 'nəbz',          wen: 'blood',         def: 'how hot your body is' },
  { en: 'dentist',     tr: 'diş həkimi',       wrong: 'cərrah',        wen: 'teacher',       def: 'a doctor who takes care of teeth' },
  { en: 'physical',    tr: 'fiziki',           wrong: 'psixi',         wen: 'mental',        def: 'related to the body' },
  { en: 'hurt',        tr: 'ağrımaq',          wrong: 'qaşınmaq',      wen: 'cough',         def: 'to feel pain' },
  { en: 'ill',         tr: 'xəstə',            wrong: 'yorğun',        wen: 'healthy',       def: 'not feeling well' },
  { en: 'health',      tr: 'sağlamlıq',        wrong: 'gigiyena',      wen: 'disease',       def: 'the condition of your body' },
  { en: 'hospital',    tr: 'xəstəxana',        wrong: 'klinika',       wen: 'school',        def: 'a place where sick people go' },
  { en: 'patient',     tr: 'xəstə',            wrong: 'həkim',         wen: 'doctor',        def: 'a person who is sick in hospital' },
  { en: 'pill',        tr: 'həb',              wrong: 'şərbət',        wen: 'food',          def: 'small round medicine' },
  { en: 'sick',        tr: 'xəstə',            wrong: 'zəif',          wen: 'strong',        def: 'not healthy' },
  { en: 'doctor',      tr: 'həkim',            wrong: 'tibb bacısı',   wen: 'teacher',       def: 'a person who helps sick people' }
],
      // ─────────────────────── QUIZ 1 — A2 Mixed (Peşələr, Bədən, Sağlamlıq) ───────────────────────
[
  { en: "My sister wants to become a famous ____.", tr: 'architect', wrong: 'patient' },
  { en: "He works as a software ____ in a big company.", tr: 'programmer', wrong: 'knee' },
  { en: "The ____ helps people who have legal problems.", tr: 'lawyer', wrong: 'headache' },
  { en: "She is a talented ____ and takes beautiful photos.", tr: 'photographer', wrong: 'virus' },
  { en: "I have a bad ____. I need to take medicine.", tr: 'headache', wrong: 'chef' },
  { en: "The ____ designs new buildings and houses.", tr: 'architect', wrong: 'blood' },
  { en: "My uncle is a heart ____ in the hospital.", tr: 'doctor', wrong: 'editor' },
  { en: "She broke her ____ while playing football.", tr: 'ankle', wrong: 'journalist' },
  { en: "The famous ____ wrote more than 15 books.", tr: 'writer', wrong: 'temperature' },
  { en: "I can feel my ____ beating very fast.", tr: 'heart', wrong: 'pilot' },
  { en: "He is a professional ____ and cooks in a big restaurant.", tr: 'chef', wrong: 'brain' },
  { en: "The university ____ teaches biology and chemistry.", tr: 'professor', wrong: 'injury' },
  { en: "I have a high ____. I think I have the flu.", tr: 'temperature', wrong: 'musician' },
  { en: "The ____ is checking the patient's blood pressure.", tr: 'nurse', wrong: 'shoulder' },
  { en: "She studies ____ at university and wants to be a doctor.", tr: 'medicine', wrong: 'director' },
  { en: "Be careful! Don't break your ____.", tr: 'bone', wrong: 'manager' },
  { en: "The young ____ creates modern clothes and fashion.", tr: 'designer', wrong: 'stomach' },
  { en: "I can't move my ____ after the accident.", tr: 'neck', wrong: 'reporter' },
  { en: "The ____ is doing important research in the lab.", tr: 'scientist', wrong: 'pill' },
  { en: "He is a very good ____ and wins many matches.", tr: 'athlete', wrong: 'disease' }
],

// ─────────────────────── QUIZ 5 — Yemək və içki ───────────────────────
[
  { en: 'bean',        tr: 'lobya',          wrong: 'noxud',        wen: 'carrot',        def: 'a small green vegetable that grows in pods' },
  { en: 'beef',        tr: 'mal əti',        wrong: 'quzu əti',     wen: 'chicken',       def: 'meat that comes from a cow' },
  { en: 'biscuit',     tr: 'peçenye',        wrong: 'keks',         wen: 'bread',         def: 'a small hard sweet cake' },
  { en: 'chip',        tr: 'cips',           wrong: 'kreker',       wen: 'soup',          def: 'thin slices of potato fried in oil' },
  { en: 'grape',       tr: 'üzüm',           wrong: 'alça',         wen: 'apple',         def: 'a small round fruit that grows in bunches' },
  { en: 'jam',         tr: 'mürəbbə',        wrong: 'bal',          wen: 'cheese',        def: 'sweet fruit cooked with sugar' },
  { en: 'lemon',       tr: 'limon',          wrong: 'portağal',     wen: 'banana',        def: 'a yellow sour fruit' },
  { en: 'nut',         tr: 'qoz',            wrong: 'fındıq',       wen: 'vegetable',     def: 'a hard fruit with a seed inside' },
  { en: 'pear',        tr: 'armud',          wrong: 'alma',         wen: 'orange',        def: 'a sweet green or yellow fruit' },
  { en: 'sauce',       tr: 'sous',           wrong: 'şorba',        wen: 'dessert',       def: 'a liquid you put on food to give taste' },
  { en: 'strawberry',  tr: 'çiyələk',        wrong: 'moruq',        wen: 'tomato',        def: 'a small red fruit with seeds on the outside' },
  { en: 'taste',       tr: 'dad',            wrong: 'iy',           wen: 'smell',         def: 'the flavour of food' },
  { en: 'bread',       tr: 'çörək',          wrong: 'lavaş',        wen: 'rice',          def: 'food made from flour and baked' },
  { en: 'butter',      tr: 'kərə yağı',      wrong: 'margarin',     wen: 'oil',           def: 'yellow food made from milk' },
  { en: 'cheese',      tr: 'pendir',         wrong: 'yoğurt',       wen: 'milk',          def: 'a solid food made from milk' },
  { en: 'chicken',     tr: 'toyuq',          wrong: 'hinduşka',     wen: 'beef',          def: 'meat from a bird' },
  { en: 'egg',         tr: 'yumurta',        wrong: 'süd',          wen: 'bread',         def: 'food that comes from chickens' },
  { en: 'fish',        tr: 'balıq',          wrong: 'dəniz məhsulu', wen: 'meat',          def: 'food that lives in water' },
  { en: 'meat',        tr: 'ət',             wrong: 'toyuq',        wen: 'vegetable',     def: 'food from animals' },
  { en: 'milk',        tr: 'süd',            wrong: 'ayran',        wen: 'juice',         def: 'white liquid from cows' }
],

// ─────────────────────── QUIZ 6 — Mətbəx və qab-qacaq ───────────────────────
[
  { en: 'bowl',       tr: 'dərin boşqab',     wrong: 'nimçə',        wen: 'knife',         def: 'a round deep dish for soup' },
  { en: 'fork',       tr: 'çəngəl',           wrong: 'qaşıq',        wen: 'plate',         def: 'a tool with points for eating' },
  { en: 'fridge',     tr: 'soyuducu',         wrong: 'dondurucu',    wen: 'oven',          def: 'a machine that keeps food cold' },
  { en: 'oven',       tr: 'soba',             wrong: 'ocaq',         wen: 'fridge',        def: 'a machine that cooks food with heat' },
  { en: 'plate',      tr: 'boşqab',          wrong: 'nimçə',        wen: 'bowl',          def: 'a flat dish for food' },
  { en: 'spoon',      tr: 'qaşıq',           wrong: 'çəngəl',       wen: 'fork',          def: 'a tool for eating soup' },
  { en: 'cooker',     tr: 'ocaq',             wrong: 'soba',         wen: 'fridge',        def: 'a machine used for cooking' },
  { en: 'cupboard',   tr: 'şkaf',             wrong: 'rəf',          wen: 'table',         def: 'a piece of furniture to keep dishes' },
  { en: 'knife',      tr: 'bıçaq',           wrong: 'çəngəl',       wen: 'spoon',         def: 'a sharp tool for cutting' },
  { en: 'pan',        tr: 'tava',            wrong: 'qazan',        wen: 'bowl',          def: 'a metal container for frying' },
  { en: 'cup',        tr: 'fincan',          wrong: 'stəkan',       wen: 'plate',         def: 'a small container for hot drinks' },
  { en: 'glass',      tr: 'stəkan',          wrong: 'fincan',       wen: 'bowl',          def: 'a container for cold drinks' },
  { en: 'bottle',     tr: 'şüşə',            wrong: 'kuzə',         wen: 'cup',           def: 'a tall container for liquids' },
  { en: 'can',        tr: 'konserv qutusu',  wrong: 'şüşə',         wen: 'plate',         def: 'a metal container for food' },
  { en: 'jar',        tr: 'banka',           wrong: 'qutu',         wen: 'cup',           def: 'a glass container for jam' },
  { en: 'tray',       tr: 'sərvis lövhəsi',  wrong: 'nimçə',        wen: 'knife',         def: 'a flat object to carry food' },
  { en: 'lid',        tr: 'qapaq',           wrong: 'zərflik',      wen: 'spoon',         def: 'the top cover of a pot' },
  { en: 'pot',        tr: 'qazan',           wrong: 'tava',         wen: 'bowl',          def: 'a deep container for cooking' },
  { en: 'sink',       tr: 'lavabo',          wrong: 'vanna',        wen: 'fridge',        def: 'a place in the kitchen to wash dishes' },
  { en: 'table',      tr: 'masa',            wrong: 'stul',         wen: 'cupboard',      def: 'furniture where you eat' }
],
      
// ─────────────────────── QUIZ 7 — Heyvanlar ───────────────────────
[
  { en: 'bear',       tr: 'ayı',            wrong: 'canavar',      wen: 'lion',          def: 'a big wild animal with thick fur' },
  { en: 'butterfly',  tr: 'kəpənək',        wrong: 'arı',          wen: 'spider',        def: 'a flying insect with colourful wings' },
  { en: 'duck',       tr: 'ördək',          wrong: 'qaz',          wen: 'chicken',       def: 'a bird that swims on water' },
  { en: 'frog',       tr: 'qurbağa',        wrong: 'kərtənkələ',   wen: 'snake',         def: 'a small green animal that jumps' },
  { en: 'goat',       tr: 'keçi',           wrong: 'qoyun',        wen: 'cow',           def: 'a farm animal with horns' },
  { en: 'insect',     tr: 'böcək',          wrong: 'sürünən',      wen: 'bird',          def: 'a small animal with six legs' },
  { en: 'monkey',     tr: 'meymun',         wrong: 'şimpanze',     wen: 'elephant',      def: 'an animal that likes bananas' },
  { en: 'rat',        tr: 'siçovul',        wrong: 'siçan',        wen: 'cat',           def: 'a large mouse' },
  { en: 'spider',     tr: 'hörümçək',       wrong: 'böcək',        wen: 'butterfly',     def: 'an insect that makes webs' },
  { en: 'squirrel',   tr: 'dələ',           wrong: 'dovşan',       wen: 'fox',           def: 'a small animal with a big tail' },
  { en: 'tiger',      tr: 'pələng',         wrong: 'aslan',        wen: 'bear',          def: 'a big cat with stripes' },
  { en: 'ant',        tr: 'qarışqa',        wrong: 'arı',          wen: 'bee',           def: 'a very small insect that lives in groups' },
  { en: 'bee',        tr: 'arı',            wrong: 'kəpənək',      wen: 'spider',        def: 'an insect that makes honey' },
  { en: 'bird',       tr: 'quş',            wrong: 'yarasa',       wen: 'fish',          def: 'an animal that can fly' },
  { en: 'cat',        tr: 'pişik',          wrong: 'it',           wen: 'dog',           def: 'a small pet that says meow' },
  { en: 'dog',        tr: 'it',             wrong: 'pişik',        wen: 'cat',           def: 'a pet that says woof' },
  { en: 'fish',       tr: 'balıq',          wrong: 'kərtənkələ',   wen: 'bird',          def: 'an animal that lives in water' },
  { en: 'horse',      tr: 'at',             wrong: 'eşşək',        wen: 'cow',           def: 'a big animal people ride' },
  { en: 'lion',       tr: 'aslan',          wrong: 'pələng',       wen: 'elephant',      def: 'a big wild cat with a mane' },
  { en: 'wolf',       tr: 'canavar',        wrong: 'tülkü',        wen: 'bear',          def: 'a wild animal like a big dog' }
],

// ─────────────────────── QUIZ 8 — Təbiət və coğrafiya ───────────────────────
[
  { en: 'forest',     tr: 'meşə',           wrong: 'bağ',           wen: 'desert',        def: 'a large area with many trees' },
  { en: 'grass',      tr: 'ot',             wrong: 'yarpaq',        wen: 'stone',         def: 'green plant that covers the ground' },
  { en: 'lake',       tr: 'göl',            wrong: 'çay',           wen: 'mountain',      def: 'a large area of water with land around' },
  { en: 'moon',       tr: 'ay',             wrong: 'ulduz',         wen: 'sun',           def: 'the round object we see at night' },
  { en: 'ocean',      tr: 'okean',          wrong: 'dəniz',         wen: 'river',         def: 'a very large area of salt water' },
  { en: 'pond',       tr: 'hovuz',          wrong: 'göl',           wen: 'forest',        def: 'a small area of water' },
  { en: 'valley',     tr: 'dərə',           wrong: 'düzənlik',      wen: 'mountain',      def: 'low land between hills' },
  { en: 'hill',       tr: 'təpə',           wrong: 'dağ',           wen: 'lake',          def: 'a small mountain' },
  { en: 'coast',      tr: 'sahil',          wrong: 'körfəz',        wen: 'desert',        def: 'the land next to the sea' },
  { en: 'desert',     tr: 'səhra',          wrong: 'düzənlik',      wen: 'forest',        def: 'a very dry hot place with sand' },
  { en: 'earth',      tr: 'yer kürəsi',     wrong: 'torpaq',        wen: 'sky',           def: 'the planet we live on' },
  { en: 'ground',     tr: 'yer',            wrong: 'torpaq',        wen: 'ocean',         def: 'the surface of the earth' },
  { en: 'island',     tr: 'ada',            wrong: 'yarımada',      wen: 'mountain',      def: 'land with water all around it' },
  { en: 'sky',        tr: 'göy',            wrong: 'üfüq',          wen: 'ground',        def: 'the blue area above us' },
  { en: 'star',       tr: 'ulduz',          wrong: 'planet',        wen: 'moon',          def: 'a bright point in the night sky' },
  { en: 'stone',      tr: 'daş',            wrong: 'qaya',          wen: 'grass',         def: 'a small piece of rock' },
  { en: 'tree',       tr: 'ağac',           wrong: 'kol',           wen: 'flower',        def: 'a tall plant with a trunk' },
  { en: 'wood',       tr: 'meşə',           wrong: 'kənd',          wen: 'desert',        def: 'material from trees' },
  { en: 'river',      tr: 'çay',            wrong: 'göl',           wen: 'ocean',         def: 'water that flows across the land' },
  { en: 'mountain',   tr: 'dağ',            wrong: 'təpə',          wen: 'valley',        def: 'a very high area of land' }
],

      // ─────────────────────── QUIZ 5 — A2 Mixed (Yemək, Mətbəx, Heyvanlar, Təbiət) ───────────────────────
[
  { en: "I usually eat ____ with rice and vegetables.", tr: 'chicken', wrong: 'stone' },
  { en: "She bought some fresh ____ from the market.", tr: 'strawberry', wrong: 'fork' },
  { en: "We keep milk and eggs in the ____.", tr: 'fridge', wrong: 'lion' },
  { en: "Be careful! There's a big ____ in the forest.", tr: 'bear', wrong: 'sauce' },
  { en: "I like to drink orange juice with a little ____.", tr: 'sugar', wrong: 'spider' },
  { en: "Can you pass me the ____? I want to cut the bread.", tr: 'knife', wrong: 'mountain' },
  { en: "The ____ is my favourite animal because it's very fast.", tr: 'horse', wrong: 'jam' },
  { en: "We saw a beautiful ____ while walking in the countryside.", tr: 'lake', wrong: 'bowl' },
  { en: "My mother makes delicious ____ from cherries.", tr: 'jam', wrong: 'tiger' },
  { en: "There is a big ____ behind our house.", tr: 'tree', wrong: 'plate' },
  { en: "I don't like ____ very much, but I love cheese.", tr: 'beef', wrong: 'butterfly' },
  { en: "Please put the dirty plates in the ____.", tr: 'sink', wrong: 'pear' },
  { en: "A ____ has eight legs and catches insects.", tr: 'spider', wrong: 'oven' },
  { en: "We picked some fresh ____ from the garden.", tr: 'grape', wrong: 'cupboard' },
  { en: "The highest ____ in the world is Mount Everest.", tr: 'mountain', wrong: 'nut' },
  { en: "I always put ____ on my bread in the morning.", tr: 'butter', wrong: 'frog' },
  { en: "The little ____ jumped into the water and swam away.", tr: 'frog', wrong: 'sauce' },
  { en: "Can you bring me a clean ____ for the soup?", tr: 'bowl', wrong: 'desert' },
  { en: "She is afraid of ____ and never goes to the zoo.", tr: 'snake', wrong: 'biscuit' },
  { en: "We had a picnic near a small ____ in the valley.", tr: 'river', wrong: 'chef' }
],
      
// ─────────────────────── QUIZ 9 — Texnologiya və internet ───────────────────────
[
  { en: 'app',         tr: 'tətbiq',            wrong: 'proqram',      wen: 'keyboard',      def: 'a program you use on your phone' },
  { en: 'code',        tr: 'kod',               wrong: 'şifrə',        wen: 'password',      def: 'instructions for a computer' },
  { en: 'device',      tr: 'cihaz',             wrong: 'alət',         wen: 'tool',          def: 'a piece of electronic equipment' },
  { en: 'digital',     tr: 'rəqəmsal',          wrong: 'elektron',     wen: 'paper',         def: 'something using computers and numbers' },
  { en: 'download',    tr: 'yükləmək',          wrong: 'göndərmək',    wen: 'upload',        def: 'to get files from the internet' },
  { en: 'laptop',      tr: 'noutbuk',           wrong: 'planşet',      wen: 'camera',        def: 'a portable computer' },
  { en: 'mobile',      tr: 'mobil',             wrong: 'simsiz',       wen: 'cable',         def: 'something you can carry with you' },
  { en: 'network',     tr: 'şəbəkə',            wrong: 'internet',     wen: 'website',       def: 'a group of connected computers' },
  { en: 'program',     tr: 'proqram',           wrong: 'tətbiq',       wen: 'screen',        def: 'software for a computer' },
  { en: 'screen',      tr: 'ekran',             wrong: 'monitor',      wen: 'keyboard',      def: 'the part you look at on a device' },
  { en: 'smartphone',  tr: 'ağıllı telefon',    wrong: 'planşet',      wen: 'laptop',        def: 'a mobile phone with many functions' },
  { en: 'tablet',      tr: 'planşet',           wrong: 'noutbuk',      wen: 'camera',        def: 'a flat portable computer' },
  { en: 'web',         tr: 'veb',               wrong: 'internet',     wen: 'password',      def: 'the system of websites' },
  { en: 'email',       tr: 'elektron poçt',     wrong: 'mesaj',        wen: 'letter',        def: 'a message sent by computer' },
  { en: 'social',      tr: 'sosial',            wrong: 'ictimai',      wen: 'private',       def: 'related to communication with others' },
  { en: 'profile',     tr: 'profil',            wrong: 'hesab',        wen: 'password',      def: 'your personal page on a website' },
  { en: 'user',        tr: 'istifadəçi',        wrong: 'müştəri',      wen: 'seller',        def: 'a person who uses a system' },
  { en: 'platform',    tr: 'platforma',         wrong: 'sistem',       wen: 'keyboard',      def: 'a website or service like Instagram' },
  { en: 'online',      tr: 'onlayn',            wrong: 'virtual',      wen: 'paper',         def: 'connected to the internet' },
  { en: 'internet',    tr: 'internet',          wrong: 'şəbəkə',        wen: 'cable',         def: 'the global computer network' }
],

// ─────────────────────── QUIZ 10 — Media və reklam ───────────────────────
[
  { en: 'advertisement', tr: 'reklam',               wrong: 'elan',            wen: 'news',          def: 'a message to sell something' },
  { en: 'advertising',   tr: 'reklamçılıq',          wrong: 'marketinq',       wen: 'education',     def: 'the business of making ads' },
  { en: 'audience',      tr: 'tamaşaçılar',          wrong: 'izləyicilər',     wen: 'team',          def: 'the people who watch or listen' },
  { en: 'film',          tr: 'film',                 wrong: 'serial',          wen: 'book',          def: 'a story you watch in the cinema' },
  { en: 'media',         tr: 'media',                wrong: 'mətbuat',         wen: 'school',        def: 'television, radio and newspapers' },
  { en: 'news',          tr: 'xəbər',                wrong: 'məlumat',         wen: 'story',         def: 'new information about events' },
  { en: 'novel',         tr: 'roman',                wrong: 'hekayə',          wen: 'magazine',      def: 'a long book with a story' },
  { en: 'poster',        tr: 'afişa',                wrong: 'banner',          wen: 'email',         def: 'a big picture used for advertising' },
  { en: 'record',        tr: 'yazmaq / lövhə',       wrong: 'yadda saxlamaq',  wen: 'delete',        def: 'a piece of music on a disc' },
  { en: 'recording',     tr: 'yazı / qeyd',          wrong: 'yayım',           wen: 'photo',         def: 'sound or video that is saved' },
  { en: 'series',        tr: 'serial',               wrong: 'film',            wen: 'concert',       def: 'a TV story with many parts' },
  { en: 'report',        tr: 'hesabat',              wrong: 'xəbər',           wen: 'advertisement', def: 'an official written document' },
  { en: 'reporter',      tr: 'müxbir',               wrong: 'redaktor',        wen: 'teacher',       def: 'a person who reports news' },
  { en: 'press',         tr: 'mətbuat',              wrong: 'media',           wen: 'school',        def: 'newspapers and journalists' },
  { en: 'channel',       tr: 'kanal',                wrong: 'şəbəkə',          wen: 'website',       def: 'a TV station' },
  { en: 'documentary',   tr: 'sənədli film',         wrong: 'xəbər buraxılışı', wen: 'comedy',        def: 'a film about real events' },
  { en: 'drama',         tr: 'dram',                 wrong: 'komediya',        wen: 'sport',         def: 'a serious film or play' },
  { en: 'show',          tr: 'şou',                  wrong: 'konsert',         wen: 'book',          def: 'a television program' },
  { en: 'publish',       tr: 'nəşr etmək',           wrong: 'yazmaq',          wen: 'read',          def: 'to print a book or magazine' },
  { en: 'magazine',      tr: 'jurnal',               wrong: 'qəzet',           wen: 'website',       def: 'a weekly or monthly reading' }
],

// ─────────────────────── QUIZ 11 — Təhsil ───────────────────────
[
  { en: 'education',   tr: 'təhsil',            wrong: 'elm',            wen: 'sport',         def: 'the process of learning' },
  { en: 'essay',       tr: 'inşa',              wrong: 'məruzə',         wen: 'test',          def: 'a long piece of writing' },
  { en: 'experiment',  tr: 'təcrübə',           wrong: 'müşahidə',       wen: 'book',          def: 'a scientific test' },
  { en: 'knowledge',   tr: 'bilik',             wrong: 'təcrübə',        wen: 'money',         def: 'what you know and understand' },
  { en: 'lab',         tr: 'laboratoriya',      wrong: 'sinif',          wen: 'office',        def: 'a room for scientific experiments' },
  { en: 'learning',    tr: 'öyrənmə',           wrong: 'tədris',         wen: 'sleeping',      def: 'the process of getting knowledge' },
  { en: 'lecture',     tr: 'mühazirə',          wrong: 'seminar',        wen: 'game',          def: 'a long talk by a teacher' },
  { en: 'mathematics', tr: 'riyaziyyat',        wrong: 'həndəsə',        wen: 'history',       def: 'the study of numbers' },
  { en: 'maths',       tr: 'riyaziyyat',        wrong: 'fizika',         wen: 'art',           def: 'short word for mathematics' },
  { en: 'degree',      tr: 'diplom',            wrong: 'sertifikat',     wen: 'job',           def: 'qualification from university' },
  { en: 'teaching',    tr: 'tədris',            wrong: 'öyrənmə',        wen: 'playing',       def: 'the job of a teacher' },
  { en: 'university',  tr: 'universitet',       wrong: 'kollec',         wen: 'school',        def: 'a place for higher education' },
  { en: 'school',      tr: 'məktəb',            wrong: 'lisey',          wen: 'hospital',      def: 'a place for children to study' },
  { en: 'lesson',      tr: 'dərs',              wrong: 'mühazirə',       wen: 'exam',          def: 'one class period' },
  { en: 'class',       tr: 'sinif',             wrong: 'qrup',           wen: 'team',          def: 'a group of students' },
  { en: 'study',       tr: 'oxumaq',            wrong: 'öyrənmək',       wen: 'work',          def: 'to learn at school or university' },
  { en: 'exam',        tr: 'imtahan',           wrong: 'test',           wen: 'game',          def: 'an important test' },
  { en: 'test',        tr: 'test',              wrong: 'imtahan',        wen: 'lesson',        def: 'a short check of knowledge' },
  { en: 'homework',    tr: 'ev tapşırığı',      wrong: 'layihə',         wen: 'sport',         def: 'work you do at home' },
  { en: 'course',      tr: 'kurs',              wrong: 'proqram',        wen: 'game',          def: 'a complete study program' }
],

// ─────────────────────── QUIZ 12 — Elm və kəşf ───────────────────────
[
  { en: 'biology',     tr: 'biologiya',         wrong: 'kimya',          wen: 'history',       def: 'the study of living things' },
  { en: 'chemistry',   tr: 'kimya',             wrong: 'fizika',         wen: 'art',           def: 'the study of substances and reactions' },
  { en: 'discovery',   tr: 'kəşf',              wrong: 'ixtira',         wen: 'sport',         def: 'finding something new' },
  { en: 'explanation', tr: 'izahat',            wrong: 'təsvir',         wen: 'question',      def: 'making something clear' },
  { en: 'invention',   tr: 'ixtira',            wrong: 'kəşf',           wen: 'book',          def: 'creating something new' },
  { en: 'invent',      tr: 'ixtira etmək',      wrong: 'kəşf etmək',     wen: 'forget',        def: 'to create something new' },
  { en: 'physics',     tr: 'fizika',            wrong: 'kimya',          wen: 'music',         def: 'the study of matter and energy' },
  { en: 'research',    tr: 'tədqiqat',          wrong: 'müşahidə',       wen: 'game',          def: 'serious study to find new facts' },
  { en: 'researcher',  tr: 'tədqiqatçı',        wrong: 'alim',           wen: 'teacher',       def: 'a person who does research' },
  { en: 'technology',  tr: 'texnologiya',       wrong: 'elm',            wen: 'sport',         def: 'using science in practical ways' },
  { en: 'theory',      tr: 'nəzəriyyə',         wrong: 'fərziyyə',       wen: 'fact',          def: 'an idea to explain something' },
  { en: 'fact',        tr: 'fakt',              wrong: 'fikir',          wen: 'dream',         def: 'something that is true' },
  { en: 'result',      tr: 'nəticə',            wrong: 'məlumat',        wen: 'question',      def: 'what happens at the end of an experiment' },
  { en: 'analysis',    tr: 'analiz',            wrong: 'tədqiqat',       wen: 'game',          def: 'detailed examination' },
  { en: 'data',        tr: 'məlumat',           wrong: 'fakt',           wen: 'opinion',       def: 'information and numbers' },
  { en: 'method',      tr: 'metod',             wrong: 'üsul',           wen: 'answer',        def: 'a way of doing something' },
  { en: 'process',     tr: 'proses',            wrong: 'addım',          wen: 'result',        def: 'a series of actions' },
  { en: 'system',      tr: 'sistem',            wrong: 'proses',         wen: 'game',          def: 'an organized way of working' },
  { en: 'expert',      tr: 'mütəxəssis',        wrong: 'alim',           wen: 'student',       def: 'a person with special knowledge' },
  { en: 'discover',    tr: 'kəşf etmək',        wrong: 'ixtira etmək',    wen: 'forget',        def: 'to find something new' }
],
      
      // ─────────────────────── QUIZ 9 — A2 Mixed (Texnologiya, Media, Təhsil, Elm) ───────────────────────
[
  { 
    en: "I need to ____ this app on my phone.", 
    tr: 'download', 
    wrong: 'invent' 
  },
  { 
    en: "She is studying ____ at university.", 
    tr: 'biology', 
    wrong: 'audience' 
  },
  { 
    en: "My brother wants to work as a software ____.", 
    tr: 'programmer', 
    wrong: 'reporter' 
  },
  { 
    en: "We watched an interesting ____ about space.", 
    tr: 'documentary', 
    wrong: 'degree' 
  },
  { 
    en: "You can find a lot of useful ____ on the internet.", 
    tr: 'information', 
    wrong: 'experiment' 
  },
  { 
    en: "I always check my ____ before going to bed.", 
    tr: 'email', 
    wrong: 'lecture' 
  },
  { 
    en: "The scientist made an important ____ last year.", 
    tr: 'discovery', 
    wrong: 'essay' 
  },
  { 
    en: "She is doing ____ in chemistry at the laboratory.", 
    tr: 'research', 
    wrong: 'channel' 
  },
  { 
    en: "I use my ____ to take notes during lessons.", 
    tr: 'laptop', 
    wrong: 'novel' 
  },
  { 
    en: "This ____ has millions of users around the world.", 
    tr: 'app', 
    wrong: 'press' 
  },
  { 
    en: "The ____ gave a very interesting lecture yesterday.", 
    tr: 'professor', 
    wrong: 'advertisement' 
  },
  { 
    en: "I saw this news on social ____ this morning.", 
    tr: 'media', 
    wrong: 'theory' 
  },
  { 
    en: "He is writing a long ____ about climate change.", 
    tr: 'essay', 
    wrong: 'screen' 
  },
  { 
    en: "My favourite TV ____ starts at 8 o'clock.", 
    tr: 'series', 
    wrong: 'method' 
  },
  { 
    en: "You need a good internet ____ to watch online videos.", 
    tr: 'connection', 
    wrong: 'fact' 
  },
  { 
    en: "The new ____ of this phone is really fast.", 
    tr: 'technology', 
    wrong: 'poster' 
  },
  { 
    en: "Students must do their ____ every evening.", 
    tr: 'homework', 
    wrong: 'recording' 
  },
  { 
    en: "She wants to study ____ at university.", 
    tr: 'physics', 
    wrong: 'platform' 
  },
  { 
    en: "I saw a very funny ____ on YouTube yesterday.", 
    tr: 'video', 
    wrong: 'analysis' 
  },
  { 
    en: "The ____ interviewed the famous actor yesterday.", 
    tr: 'reporter', 
    wrong: 'tablet' 
  }
],
      
// ─────────────────────── QUIZ 13 — İdman ───────────────────────
[
  { en: 'baseball',     tr: 'beysbol',           wrong: 'kriket',        wen: 'swimming',      def: 'a game played with a bat and ball in America' },
  { en: 'basketball',   tr: 'basketbol',         wrong: 'voleybol',      wen: 'tennis',        def: 'a game where you throw a ball into a high net' },
  { en: 'golf',         tr: 'qolf',              wrong: 'polo',          wen: 'boxing',        def: 'a sport where you hit a small ball into holes' },
  { en: 'hockey',       tr: 'xokkey',            wrong: 'reqbi',         wen: 'chess',         def: 'a fast sport played on ice with a stick' },
  { en: 'race',         tr: 'yarış',             wrong: 'turnir',        wen: 'match',         def: 'a competition to see who is the fastest' },
  { en: 'run',          tr: 'qaçmaq',            wrong: 'atlamaq',       wen: 'swim',          def: 'to move fast with your legs' },
  { en: 'running',      tr: 'qaçış',             wrong: 'yürüş',         wen: 'cycling',       def: 'the sport of moving fast on foot' },
  { en: 'sailing',      tr: 'yelkənli idman',    wrong: 'kürek çəkmə',   wen: 'fishing',       def: 'the sport of travelling on water with sails' },
  { en: 'skiing',       tr: 'xizək idmanı',      wrong: 'sürüşmə',       wen: 'boxing',        def: 'the sport of moving on snow with skis' },
  { en: 'soccer',       tr: 'futbol',            wrong: 'reqbi',         wen: 'golf',          def: 'the most popular sport in the world' },
  { en: 'score',        tr: 'hesab',             wrong: 'nəticə',        wen: 'team',          def: 'the number of points in a game' },
  { en: 'team',         tr: 'komanda',           wrong: 'qrup',          wen: 'audience',      def: 'a group of players who play together' },
  { en: 'match',        tr: 'oyun',              wrong: 'yarış',         wen: 'training',      def: 'a game between two teams' },
  { en: 'competition',  tr: 'müsabiqə',          wrong: 'çempionat',     wen: 'hobby',         def: 'an event where people try to win' },
  { en: 'winner',       tr: 'qalib',             wrong: 'finalistçi',    wen: 'player',        def: 'the person who wins the game' },
  { en: 'training',     tr: 'məşq',              wrong: 'idman',         wen: 'holiday',       def: 'practice to become better at sport' },
  { en: 'athlete',      tr: 'atlet',             wrong: 'idmançı',       wen: 'coach',         def: 'a person who does sports professionally' },
  { en: 'coach',        tr: 'məşqçi',            wrong: 'menecer',       wen: 'fan',           def: 'a person who trains athletes' },
  { en: 'champion',     tr: 'çempion',           wrong: 'qalib',         wen: 'player',        def: 'the best player or team' },
  { en: 'stadium',      tr: 'stadion',           wrong: 'arena',         wen: 'gym',           def: 'a large place where people watch sports' }
],

// ─────────────────────── QUIZ 14 — Hobbi və boş vaxt ───────────────────────
[
  { en: 'camp',         tr: 'düşərgə',           wrong: 'otel',          wen: 'restaurant',    def: 'a place where you sleep in tents' },
  { en: 'camping',      tr: 'düşərgə qurmaq',    wrong: 'piknik',        wen: 'reading',       def: 'spending time sleeping in a tent' },
  { en: 'cycle',        tr: 'velosiped sürmək',  wrong: 'qaçmaq',        wen: 'painting',      def: 'to ride a bicycle' },
  { en: 'fishing',      tr: 'balıqçılıq',        wrong: 'ovçuluq',       wen: 'cooking',       def: 'trying to catch fish' },
  { en: 'drawing',      tr: 'çəkmə',             wrong: 'boyama',        wen: 'swimming',      def: 'making pictures with a pencil' },
  { en: 'singing',      tr: 'oxumaq',            wrong: 'çalmaq',        wen: 'running',       def: 'using your voice to make music' },
  { en: 'skiing',       tr: 'xizək sürmək',      wrong: 'sürüşmək',      wen: 'fishing',       def: 'moving on snow with skis' },
  { en: 'sailing',      tr: 'yelkənli sürmək',   wrong: 'üzmək',         wen: 'reading',       def: 'travelling on water with a boat' },
  { en: 'photography',  tr: 'fotoqrafiya',       wrong: 'çəkiliş',       wen: 'cooking',       def: 'taking photos as a hobby' },
  { en: 'reading',      tr: 'oxumaq',            wrong: 'yazmaq',        wen: 'running',       def: 'looking at books or magazines' },
  { en: 'cooking',      tr: 'yemək bişirmək',    wrong: 'çörək bişirmək', wen: 'fishing',       def: 'making food as a hobby' },
  { en: 'painting',     tr: 'rəsm çəkmək',       wrong: 'boyamaq',       wen: 'singing',       def: 'making pictures with colours' },
  { en: 'hiking',       tr: 'piyada gəzmək',     wrong: 'dağa dırmanmaq', wen: 'cycling',       def: 'walking long distances in nature' },
  { en: 'collecting',   tr: 'toplamaq',          wrong: 'saxlamaq',      wen: 'reading',       def: 'gathering things like stamps or coins' },
  { en: 'dancing',      tr: 'rəqs etmək',        wrong: 'gimnastika',    wen: 'fishing',       def: 'moving your body to music' },
  { en: 'writing',      tr: 'yazmaq',            wrong: 'çizmək',        wen: 'swimming',      def: 'creating stories or poems' },
  { en: 'art',          tr: 'sənət',             wrong: 'mədəniyyət',    wen: 'sport',         def: 'creating paintings and drawings' },
  { en: 'craft',        tr: 'əl işi',            wrong: 'sənətkarlıq',   wen: 'music',         def: 'making things with your hands' },
  { en: 'garden',       tr: 'bağ',               wrong: 'park',          wen: 'kitchen',       def: 'a place where you grow flowers and plants' },
  { en: 'hobby',        tr: 'hobbi',             wrong: 'maraq',         wen: 'job',           def: 'something you enjoy doing in your free time' }
],
      
      // ─────────────────────── QUIZ 13 — A2 Mixed (İdman və Hobbi) ───────────────────────
[
  { 
    en: "My favourite sport is ____ because it is very exciting.", 
    tr: 'basketball', 
    wrong: 'camping' 
  },
  { 
    en: "She goes to the stadium to watch a football ____.", 
    tr: 'match', 
    wrong: 'drawing' 
  },
  { 
    en: "He is a professional ____ and trains every day.", 
    tr: 'athlete', 
    wrong: 'fishing' 
  },
  { 
    en: "We are going ____ in the mountains next weekend.", 
    tr: 'hiking', 
    wrong: 'sailing' 
  },
  { 
    en: "The ____ told the players to run faster.", 
    tr: 'coach', 
    wrong: 'reading' 
  },
  { 
    en: "I like ____ because I can see beautiful places.", 
    tr: 'travel', 
    wrong: 'hockey' 
  },
  { 
    en: "She is very good at ____ and paints wonderful pictures.", 
    tr: 'painting', 
    wrong: 'golf' 
  },
  { 
    en: "Our team won the ____ last season.", 
    tr: 'champion', 
    wrong: 'cooking' 
  },
  { 
    en: "I usually go ____ on the lake in summer.", 
    tr: 'fishing', 
    wrong: 'skiing' 
  },
  { 
    en: "They play ____ every Saturday in the park.", 
    tr: 'soccer', 
    wrong: 'photography' 
  },
  { 
    en: "My hobby is ____. I love taking photos of nature.", 
    tr: 'photography', 
    wrong: 'baseball' 
  },
  { 
    en: "The Olympic Games is the biggest sports ____.", 
    tr: 'competition', 
    wrong: 'singing' 
  },
  { 
    en: "She enjoys ____ in her free time.", 
    tr: 'dancing', 
    wrong: 'race' 
  },
  { 
    en: "We need a big ____ to watch the football final.", 
    tr: 'stadium', 
    wrong: 'hiking' 
  },
  { 
    en: "He is learning how to play ____ on the snow.", 
    tr: 'skiing', 
    wrong: 'writing' 
  },
  { 
    en: "My brother collects stamps as a ____.", 
    tr: 'hobby', 
    wrong: 'score' 
  },
  { 
    en: "The final ____ was 3-2 for our team.", 
    tr: 'score', 
    wrong: 'garden' 
  },
  { 
    en: "I like ____ because it is relaxing and creative.", 
    tr: 'cooking', 
    wrong: 'team' 
  },
  { 
    en: "They went ____ in the forest last summer.", 
    tr: 'camping', 
    wrong: 'tennis' 
  },
  { 
    en: "She reads a lot of books in her ____ time.", 
    tr: 'free', 
    wrong: 'match' 
  }
],

// ─────────────────────── QUIZ 15 — Şəhər həyatı ───────────────────────
[
  { en: 'bridge',       tr: 'körpü',            wrong: 'tunel',         wen: 'tower',         def: 'a structure over a river or road' },
  { en: 'castle',       tr: 'qala',             wrong: 'saray',         wen: 'museum',        def: 'an old strong building from the past' },
  { en: 'church',       tr: 'kilsə',            wrong: 'məscid',        wen: 'school',        def: 'a Christian religious building' },
  { en: 'gallery',      tr: 'qalereya',         wrong: 'muzey',         wen: 'hospital',      def: 'a place where people show and sell art' },
  { en: 'government',   tr: 'hökumət',          wrong: 'parlament',     wen: 'company',       def: 'the group that controls a country' },
  { en: 'palace',       tr: 'saray',            wrong: 'qala',          wen: 'hotel',         def: 'a very big and beautiful house for kings' },
  { en: 'parking',      tr: 'dayanacaq',        wrong: 'qaraj',         wen: 'garden',        def: 'a place where you leave your car' },
  { en: 'prison',       tr: 'həbsxana',         wrong: 'polis idarəsi', wen: 'school',        def: 'a building where criminals are kept' },
  { en: 'pub',          tr: 'pivəxana',         wrong: 'bar',           wen: 'restaurant',    def: 'a place where people drink beer and talk' },
  { en: 'railway',      tr: 'dəmiryol',         wrong: 'metro',         wen: 'airport',       def: 'the system of trains and tracks' },
  { en: 'site',         tr: 'ərazi',            wrong: 'sahə',          wen: 'shop',          def: 'a piece of land where something is built' },
  { en: 'square',       tr: 'meydan',           wrong: 'park',          wen: 'bridge',        def: 'an open public area in a city' },
  { en: 'stage',        tr: 'səhnə',            wrong: 'podium',        wen: 'office',        def: 'the place where actors perform' },
  { en: 'tower',        tr: 'qüllə',            wrong: 'bina',          wen: 'bridge',        def: 'a very tall narrow building' },
  { en: 'underground',  tr: 'metro',            wrong: 'tunel',         wen: 'bus',           def: 'a train system under the ground' },
  { en: 'upstairs',     tr: 'yuxarı mərtəbə',   wrong: 'aşağı mərtəbə', wen: 'outside',       def: 'on a higher floor of a building' },
  { en: 'downstairs',   tr: 'aşağı mərtəbə',    wrong: 'yuxarı mərtəbə', wen: 'inside',       def: 'on a lower floor of a building' },
  { en: 'museum',       tr: 'muzey',            wrong: 'qalereya',      wen: 'hospital',      def: 'a place where old and important things are shown' },
  { en: 'library',      tr: 'kitabxana',        wrong: 'arxiv',         wen: 'school',        def: 'a place where you can borrow books' },
  { en: 'market',       tr: 'bazar',            wrong: 'mağaza',        wen: 'hotel',         def: 'an outdoor place to buy food and things' }
],

// ─────────────────────── QUIZ 16 — Nəqliyyat ───────────────────────
[
  { en: 'airline',      tr: 'aviaşirkət',       wrong: 'hava limanı',   wen: 'hospital',      def: 'a company that operates planes' },
  { en: 'coach',        tr: 'avtobus',          wrong: 'qatar',         wen: 'taxi',          def: 'a comfortable long-distance bus' },
  { en: 'lorry',        tr: 'yük maşını',       wrong: 'avtobus',       wen: 'bicycle',       def: 'a big vehicle for carrying goods' },
  { en: 'motorcycle',   tr: 'motosiklet',       wrong: 'velosiped',     wen: 'car',           def: 'a fast vehicle with two wheels' },
  { en: 'passenger',    tr: 'sərnişin',         wrong: 'sürücü',        wen: 'pilot',         def: 'a person who travels in a vehicle' },
  { en: 'petrol',       tr: 'benzin',           wrong: 'dizel',         wen: 'water',         def: 'fuel for cars' },
  { en: 'platform',     tr: 'platforma',        wrong: 'peron',         wen: 'station',       def: 'the place where you wait for a train' },
  { en: 'transport',    tr: 'nəqliyyat',        wrong: 'infrastruktur', wen: 'education',     def: 'the system of moving people and goods' },
  { en: 'truck',        tr: 'yük avtomobili',   wrong: 'avtobus',       wen: 'plane',         def: 'a large vehicle for heavy goods' },
  { en: 'van',          tr: 'mikroavtobus',     wrong: 'furqon',        wen: 'boat',          def: 'a small truck for deliveries' },
  { en: 'wheel',        tr: 'təkər',            wrong: 'mühərrik',      wen: 'door',          def: 'the round part that makes a car move' },
  { en: 'bus',          tr: 'avtobus',          wrong: 'tramvay',       wen: 'ship',          def: 'a large vehicle for many passengers' },
  { en: 'car',          tr: 'avtomobil',        wrong: 'yük maşını',    wen: 'train',         def: 'a small vehicle for families' },
  { en: 'train',        tr: 'qatar',            wrong: 'metro',         wen: 'plane',         def: 'a long vehicle that runs on rails' },
  { en: 'plane',        tr: 'təyyarə',          wrong: 'helikopter',    wen: 'bus',           def: 'a flying vehicle' },
  { en: 'ship',         tr: 'gəmi',             wrong: 'qayıq',         wen: 'car',           def: 'a large boat for sea travel' },
  { en: 'boat',         tr: 'qayıq',            wrong: 'gəmi',          wen: 'train',         def: 'a small vehicle for water' },
  { en: 'taxi',         tr: 'taksi',            wrong: 'avtobus',       wen: 'bicycle',       def: 'a car you pay to travel in' },
  { en: 'bicycle',      tr: 'velosiped',        wrong: 'motosiklet',    wen: 'plane',         def: 'a vehicle with two wheels you ride' },
  { en: 'ferry',        tr: 'bərə',             wrong: 'gəmi',          wen: 'bus',           def: 'a ship that carries cars and people' }
],

// ─────────────────────── QUIZ 17 — Ev və məişət ───────────────────────
[
  { en: 'bin',         tr: 'zibil qabı',        wrong: 'qutu',          wen: 'fridge',        def: 'a container for rubbish' },
  { en: 'brush',       tr: 'fırça',             wrong: 'daraq',         wen: 'knife',         def: 'a tool for cleaning or painting' },
  { en: 'button',      tr: 'düymə',             wrong: 'fermuvar',      wen: 'key',           def: 'a small round thing on clothes' },
  { en: 'carpet',      tr: 'xalça',             wrong: 'döşəmə',        wen: 'curtain',       def: 'a soft covering on the floor' },
  { en: 'cupboard',    tr: 'şkaf',              wrong: 'rəf',           wen: 'table',         def: 'furniture where you keep clothes or dishes' },
  { en: 'furniture',   tr: 'mebel',             wrong: 'dekor',         wen: 'food',          def: 'tables, chairs, beds etc.' },
  { en: 'lamp',        tr: 'çıraq',             wrong: 'şamdan',        wen: 'mirror',        def: 'an object that gives light' },
  { en: 'lock',        tr: 'kilid',             wrong: 'qıfıl',         wen: 'door',          def: 'something that keeps a door closed' },
  { en: 'mirror',      tr: 'güzgü',             wrong: 'şüşə',          wen: 'window',        def: 'glass you look at yourself in' },
  { en: 'plug',        tr: 'rozetka',           wrong: 'kabel',         wen: 'switch',        def: 'the part you put into the wall for electricity' },
  { en: 'roof',        tr: 'dam',               wrong: 'tavan',         wen: 'floor',         def: 'the top covering of a house' },
  { en: 'sheet',       tr: 'çarşab',            wrong: 'yorğan',        wen: 'towel',         def: 'a thin cloth for your bed' },
  { en: 'stairs',      tr: 'pilləkən',          wrong: 'lift',          wen: 'door',          def: 'steps to go up or down' },
  { en: 'towel',       tr: 'dəsmal',            wrong: 'örtük',         wen: 'carpet',        def: 'a cloth you use after washing' },
  { en: 'wall',        tr: 'divar',             wrong: 'tavan',         wen: 'roof',          def: 'the side of a room' },
  { en: 'window',      tr: 'pəncərə',           wrong: 'qapı',          wen: 'mirror',        def: 'an opening in the wall with glass' },
  { en: 'door',        tr: 'qapı',              wrong: 'pəncərə',       wen: 'wall',          def: 'you open it to enter a room' },
  { en: 'floor',       tr: 'döşəmə',            wrong: 'tavan',         wen: 'roof',          def: 'the surface you walk on' },
  { en: 'garden',      tr: 'bağ',               wrong: 'həyət',         wen: 'kitchen',       def: 'an area with plants outside a house' },
  { en: 'bedroom',     tr: 'yataq otağı',       wrong: 'qonaq otağı',   wen: 'bathroom',      def: 'the room where you sleep' }
],

      
// ─────────────────────── QUIZ 18 — Geyim və aksesuar ───────────────────────
[
  { en: 'belt',        tr: 'kəmər',             wrong: 'boyunbağı',     wen: 'gloves',        def: 'a band you wear around your waist' },
  { en: 'clothing',    tr: 'geyim',             wrong: 'paltar',        wen: 'food',          def: 'things you wear' },
  { en: 'fashion',     tr: 'moda',              wrong: 'stil',          wen: 'sport',         def: 'popular style of clothes' },
  { en: 'mask',        tr: 'maska',             wrong: 'şlyapa',        wen: 'belt',          def: 'something you wear to cover your face' },
  { en: 'pants',       tr: 'şalvar',            wrong: 'şort',          wen: 'dress',         def: 'another word for trousers' },
  { en: 'scarf',       tr: 'şal',               wrong: 'qalstuk',       wen: 'hat',           def: 'a long piece of cloth for your neck' },
  { en: 'sock',        tr: 'corab',             wrong: 'çorab',         wen: 'shoe',          def: 'something you wear on your feet' },
  { en: 'suit',        tr: 'kostyum',           wrong: 'pencək',        wen: 'jeans',         def: 'formal clothes for men' },
  { en: 'tie',         tr: 'qalstuk',           wrong: 'papion',        wen: 'belt',          def: 'a long cloth you wear with a shirt' },
  { en: 'trainers',    tr: 'idman ayaqqabısı',  wrong: 'çəkmə',         wen: 'gloves',        def: 'sport shoes' },
  { en: 'uniform',     tr: 'forma',             wrong: 'kostyum',       wen: 'dress',         def: 'special clothes for school or work' },
  { en: 'coat',        tr: 'palto',             wrong: 'pencək',        wen: 'shirt',         def: 'a warm outer piece of clothing' },
  { en: 'dress',       tr: 'don',               wrong: 'ətək',          wen: 'suit',          def: 'a one-piece clothing for women' },
  { en: 'hat',         tr: 'papaq',             wrong: 'şlyapa',        wen: 'scarf',         def: 'something you wear on your head' },
  { en: 'jacket',      tr: 'gödəkcə',           wrong: 'palto',         wen: 'dress',         def: 'a short coat' },
  { en: 'shirt',       tr: 'köynək',            wrong: 'bluzka',        wen: 'trousers',      def: 'a top with buttons' },
  { en: 'shoes',       tr: 'ayaqqabı',          wrong: 'çəkmə',         wen: 'socks',         def: 'footwear' },
  { en: 'gloves',      tr: 'əlcək',             wrong: 'qolçaq',        wen: 'hat',           def: 'something you wear on your hands' },
  { en: 'jewellery',   tr: 'zinət əşyaları',    wrong: 'aksesuar',      wen: 'clothes',       def: 'rings, necklaces etc.' },
  { en: 'ring',        tr: 'üzük',              wrong: 'qolbaq',        wen: 'belt',          def: 'jewellery you wear on your finger' }
],
      
      // ─────────────────────── QUIZ 15 — A2 Mixed (Şəhər, Nəqliyyat, Ev, Geyim) ───────────────────────
[
  { 
    en: "There is a beautiful old ____ in the centre of the city.", 
    tr: 'castle', 
    wrong: 'belt' 
  },
  { 
    en: "We crossed the long ____ over the river.", 
    tr: 'bridge', 
    wrong: 'sock' 
  },
  { 
    en: "I usually travel to work by ____.", 
    tr: 'bus', 
    wrong: 'carpet' 
  },
  { 
    en: "She lives on the fifth ____ of that tall building.", 
    tr: 'floor', 
    wrong: 'tie' 
  },
  { 
    en: "The fastest way to travel is by ____.", 
    tr: 'plane', 
    wrong: 'mirror' 
  },
  { 
    en: "We bought new ____ for our living room last month.", 
    tr: 'furniture', 
    wrong: 'platform' 
  },
  { 
    en: "I left my car in the underground ____ near the station.", 
    tr: 'parking', 
    wrong: 'scarf' 
  },
  { 
    en: "The famous painting is in the art ____.", 
    tr: 'gallery', 
    wrong: 'lorry' 
  },
  { 
    en: "Please hang your coat on the ____.", 
    tr: 'hook', 
    wrong: 'church' 
  },
  { 
    en: "The ____ arrived late because of bad weather.", 
    tr: 'train', 
    wrong: 'roof' 
  },
  { 
    en: "She looked at herself in the big ____.", 
    tr: 'mirror', 
    wrong: 'truck' 
  },
  { 
    en: "We visited a very old ____ during our trip.", 
    tr: 'church', 
    wrong: 'van' 
  },
  { 
    en: "I need to buy a new winter ____.", 
    tr: 'coat', 
    wrong: 'bin' 
  },
  { 
    en: "The ____ is full of people on Saturday mornings.", 
    tr: 'market', 
    wrong: 'button' 
  },
  { 
    en: "Don't forget to lock the front ____.", 
    tr: 'door', 
    wrong: 'ferry' 
  },
  { 
    en: "We waited for the bus at the ____.", 
    tr: 'station', 
    wrong: 'dress' 
  },
  { 
    en: "My bedroom is ____ and the kitchen is downstairs.", 
    tr: 'upstairs', 
    wrong: 'petrol' 
  },
  { 
    en: "He drives a big red ____ for his job.", 
    tr: 'truck', 
    wrong: 'library' 
  },
  { 
    en: "She always wears a beautiful red ____ to parties.", 
    tr: 'dress', 
    wrong: 'wheel' 
  },
  { 
    en: "The view from the top of the ____ is amazing.", 
    tr: 'tower', 
    wrong: 'suit' 
  }
],
      

// ─────────────────────── QUIZ 19 — Hisslər və emosiyalar ───────────────────────
[
  { en: 'fear',       tr: 'qorxu',             wrong: 'narahatlıq',    wen: 'happiness',     def: 'the feeling when you are afraid' },
  { en: 'feeling',    tr: 'hiss',              wrong: 'duyğu',         wen: 'idea',          def: 'an emotion inside you' },
  { en: 'hope',       tr: 'ümid',              wrong: 'arzu',          wen: 'anger',         def: 'the feeling that something good will happen' },
  { en: 'hurt',       tr: 'incimək',           wrong: 'narahat olmaq', wen: 'laugh',         def: 'to feel emotional pain' },
  { en: 'nervous',    tr: 'gərgin',            wrong: 'narahat',       wen: 'calm',          def: 'worried and not relaxed' },
  { en: 'pain',       tr: 'ağrı',              wrong: 'kədər',         wen: 'joy',           def: 'a bad physical feeling' },
  { en: 'pleased',    tr: 'məmnun',            wrong: 'razı',          wen: 'angry',         def: 'happy with something' },
  { en: 'scared',     tr: 'qorxmuş',           wrong: 'narahat',       wen: 'brave',         def: 'very afraid' },
  { en: 'stress',     tr: 'stress',            wrong: 'narahatlıq',    wen: 'relaxation',    def: 'a worried feeling from too much work' },
  { en: 'surprised',  tr: 'təəccüblənmiş',     wrong: 'çaşmış',        wen: 'bored',         def: 'when something unexpected happens' },
  { en: 'upset',      tr: 'kədərli',           wrong: 'narahat',       wen: 'excited',       def: 'sad and unhappy' },
  { en: 'worried',    tr: 'narahat',           wrong: 'gərgin',        wen: 'relaxed',       def: 'thinking something bad may happen' },
  { en: 'angry',      tr: 'əsəbi',             wrong: 'sinirli',       wen: 'calm',          def: 'very annoyed' },
  { en: 'calm',       tr: 'sakit',             wrong: 'rahat',         wen: 'nervous',       def: 'peaceful and relaxed' },
  { en: 'excited',    tr: 'həyəcanlı',         wrong: 'coşğun',        wen: 'bored',         def: 'very happy about something' },
  { en: 'glad',       tr: 'sevincli',          wrong: 'xoşbəxt',       wen: 'sad',           def: 'pleased and happy' },
  { en: 'proud',      tr: 'qürurlu',           wrong: 'məmnun',        wen: 'shy',           def: 'feeling good about your success' },
  { en: 'lonely',     tr: 'tənha',             wrong: 'yalnız',        wen: 'popular',       def: 'feeling sad because you are alone' },
  { en: 'unhappy',    tr: 'xoşbəxt olmayan',   wrong: 'kədərli',       wen: 'excited',       def: 'not happy' },
  { en: 'surprised',  tr: 'təəccüblü',         wrong: 'şaşırmış',      wen: 'tired',         def: 'feeling shocked by something unexpected' }
],

// ─────────────────────── QUIZ 20 — Xarakter və davranış ───────────────────────
[
  { en: 'active',     tr: 'fəal',              wrong: 'enerjili',      wen: 'lazy',          def: 'someone who does a lot of things' },
  { en: 'awful',      tr: 'dəhşətli',          wrong: 'pis',           wen: 'wonderful',     def: 'very bad' },
  { en: 'brilliant',  tr: 'əla',               wrong: 'parlaq',        wen: 'stupid',        def: 'very clever or excellent' },
  { en: 'careful',    tr: 'diqqətli',          wrong: 'ehtiyatlı',     wen: 'careless',      def: 'doing things safely' },
  { en: 'clever',     tr: 'ağıllı',            wrong: 'zəki',          wen: 'stupid',        def: 'quick to understand and learn' },
  { en: 'crazy',      tr: 'dəli',              wrong: 'qəribə',        wen: 'normal',        def: 'not behaving normally' },
  { en: 'creative',   tr: 'yaradıcı',          wrong: 'istedadlı',     wen: 'boring',        def: 'good at making new ideas' },
  { en: 'cute',       tr: 'sevimli',           wrong: 'cəlbedici',     wen: 'ugly',          def: 'attractive and lovely' },
  { en: 'lazy',       tr: 'tənbəl',            wrong: 'passiv',        wen: 'active',        def: 'not wanting to work' },
  { en: 'polite',     tr: 'nəzakətli',         wrong: 'hörmətli',      wen: 'rude',          def: 'showing good manners' },
  { en: 'rude',       tr: 'kobud',             wrong: 'nəzakətsiz',    wen: 'polite',        def: 'not polite' },
  { en: 'serious',    tr: 'ciddi',             wrong: 'məsuliyyətli',  wen: 'funny',         def: 'not joking' },
  { en: 'stupid',     tr: 'axmaq',             wrong: 'gic',           wen: 'clever',        def: 'not intelligent' },
  { en: 'sweet',      tr: 'şirin',             wrong: 'mehriban',      wen: 'rude',          def: 'kind and pleasant' },
  { en: 'typical',    tr: 'tipik',             wrong: 'adi',           wen: 'strange',       def: 'normal or usual' },
  { en: 'honest',     tr: 'dürüst',            wrong: 'sadiq',         wen: 'dishonest',     def: 'telling the truth' },
  { en: 'brave',      tr: 'cəsur',             wrong: 'qorxmaz',       wen: 'scared',        def: 'not afraid' },
  { en: 'kind',       tr: 'mehriban',          wrong: 'səxavətli',     wen: 'cruel',         def: 'nice and helpful' },
  { en: 'patient',    tr: 'səbirli',           wrong: 'dözümlü',       wen: 'impatient',     def: 'able to wait calmly' },
  { en: 'shy',        tr: 'utancaq',           wrong: 'çəkingen',      wen: 'confident',     def: 'quiet and not confident with people' }
],
      // ─────────────────────── QUIZ 21 — Sifətlər (keyfiyyət) ───────────────────────
[
  { en: 'ancient',    tr: 'qədim',             wrong: 'köhnə',         wen: 'modern',        def: 'very very old' },
  { en: 'average',    tr: 'orta',              wrong: 'adi',           wen: 'excellent',     def: 'normal or usual' },
  { en: 'blank',      tr: 'boş',               wrong: 'açıq',          wen: 'full',          def: 'completely empty' },
  { en: 'bright',     tr: 'parlaq',            wrong: 'işıqlı',        wen: 'dark',          def: 'shining with light' },
  { en: 'broken',     tr: 'sınmış',            wrong: 'xarab',         wen: 'new',           def: 'not working anymore' },
  { en: 'certain',    tr: 'əmin',              wrong: 'dəqiq',         wen: 'unsure',        def: 'sure about something' },
  { en: 'common',     tr: 'ümumi',             wrong: 'normal',        wen: 'rare',          def: 'happening often' },
  { en: 'dark',       tr: 'qaranlıq',          wrong: 'tutqun',        wen: 'bright',        def: 'with very little light' },
  { en: 'deep',       tr: 'dərin',             wrong: 'enli',          wen: 'shallow',       def: 'going far down' },
  { en: 'empty',      tr: 'boş',               wrong: 'dolu',          wen: 'full',          def: 'with nothing inside' },
  { en: 'enormous',   tr: 'nəhəng',            wrong: 'böyük',         wen: 'tiny',          def: 'extremely big' },
  { en: 'exact',      tr: 'dəqiq',             wrong: 'düzgün',        wen: 'approximate',   def: 'completely correct' },
  { en: 'extreme',    tr: 'həddindən artıq',   wrong: 'çox',           wen: 'normal',        def: 'very strong or large' },
  { en: 'fair',       tr: 'ədalətli',          wrong: 'düzgün',        wen: 'unfair',        def: 'treating everyone equally' },
  { en: 'flat',       tr: 'düz',               wrong: 'hamar',         wen: 'curved',        def: 'without hills or curves' },
  { en: 'foreign',    tr: 'xarici',            wrong: 'yad',           wen: 'local',         def: 'from another country' },
  { en: 'fresh',      tr: 'təzə',              wrong: 'yeni',          wen: 'old',           def: 'new and clean' },
  { en: 'heavy',      tr: 'ağır',              wrong: 'yüklü',         wen: 'light',         def: 'weighing a lot' },
  { en: 'huge',       tr: 'nəhəng',            wrong: 'böyük',         wen: 'tiny',          def: 'very very big' },
  { en: 'ideal',      tr: 'ideal',             wrong: 'mükəmməl',      wen: 'terrible',      def: 'perfect for a purpose' }
],

// ─────────────────────── QUIZ 22 — Sifətlər (vəziyyət) ───────────────────────
[
  { en: 'alive',       tr: 'sağ',               wrong: 'canlı',         wen: 'dead',          def: 'living and not dead' },
  { en: 'asleep',      tr: 'yuxuda',            wrong: 'dincəlir',      wen: 'awake',         def: 'sleeping' },
  { en: 'available',   tr: 'mövcud',            wrong: 'hazır',         wen: 'busy',          def: 'ready to be used' },
  { en: 'closed',      tr: 'bağlı',             wrong: 'kilidli',       wen: 'open',          def: 'not open' },
  { en: 'comfortable', tr: 'rahat',             wrong: 'uyğun',         wen: 'uncomfortable', def: 'pleasant to sit or lie on' },
  { en: 'connected',   tr: 'bağlı',             wrong: 'əlaqəli',       wen: 'disconnected',  def: 'joined to something' },
  { en: 'crowded',     tr: 'izdihamlı',         wrong: 'sıx',           wen: 'empty',         def: 'full of people' },
  { en: 'curly',       tr: 'qıvrım',            wrong: 'dalğalı',       wen: 'straight',      def: 'hair with curls' },
  { en: 'dead',        tr: 'ölü',               wrong: 'cansız',        wen: 'alive',         def: 'not living' },
  { en: 'divorced',    tr: 'boşanmış',          wrong: 'subay',         wen: 'married',       def: 'not married anymore' },
  { en: 'electronic',  tr: 'elektron',          wrong: 'elektrik',      wen: 'paper',         def: 'using electricity and chips' },
  { en: 'ill',         tr: 'xəstə',             wrong: 'zəif',          wen: 'healthy',       def: 'sick' },
  { en: 'impossible',  tr: 'qeyri-mümkün',      wrong: 'çətin',         wen: 'easy',          def: 'cannot be done' },
  { en: 'included',    tr: 'daxil edilmiş',     wrong: 'əlavə edilmiş', wen: 'excluded',      def: 'part of a group' },
  { en: 'independent', tr: 'müstəqil',          wrong: 'azad',          wen: 'dependent',     def: 'not needing help from others' },
  { en: 'individual',  tr: 'fərdi',             wrong: 'şəxsi',         wen: 'group',         def: 'one single person' },
  { en: 'informal',    tr: 'qeyri-rəsmi',       wrong: 'sadə',          wen: 'formal',        def: 'relaxed and friendly' },
  { en: 'intelligent', tr: 'zəkalı',            wrong: 'ağıllı',        wen: 'stupid',        def: 'very clever' },
  { en: 'missing',     tr: 'itmiş',             wrong: 'yoxolan',       wen: 'found',         def: 'lost or not there' },
  { en: 'mobile',      tr: 'mobil',             wrong: 'portativ',      wen: 'fixed',         def: 'able to move' }
],
      // ─────────────────────── QUIZ 19 — A2 Mixed (Hisslər, Xarakter, Sifətlər) ───────────────────────
[
  { 
    en: "I felt very ____ when I saw my old friend after many years.", 
    tr: 'surprised', 
    wrong: 'crowded' 
  },
  { 
    en: "She was ____ because she didn't get the job.", 
    tr: 'upset', 
    wrong: 'alive' 
  },
  { 
    en: "He is a very ____ person and always helps others.", 
    tr: 'kind', 
    wrong: 'curly' 
  },
  { 
    en: "I'm a bit ____ about the exam tomorrow.", 
    tr: 'nervous', 
    wrong: 'ancient' 
  },
  { 
    en: "My little sister is very ____ of spiders.", 
    tr: 'scared', 
    wrong: 'available' 
  },
  { 
    en: "He is extremely ____ and never tells lies.", 
    tr: 'honest', 
    wrong: 'heavy' 
  },
  { 
    en: "I'm so ____ of you! You did a great job.", 
    tr: 'proud', 
    wrong: 'closed' 
  },
  { 
    en: "The old ____ castle is now a popular tourist place.", 
    tr: 'ancient', 
    wrong: 'comfortable' 
  },
  { 
    en: "She felt very ____ after the long journey.", 
    tr: 'tired', 
    wrong: 'intelligent' 
  },
  { 
    en: "Don't be ____! Everything will be fine.", 
    tr: 'worried', 
    wrong: 'divorced' 
  },
  { 
    en: "He is a ____ student and always gets high marks.", 
    tr: 'clever', 
    wrong: 'missing' 
  },
  { 
    en: "The room was completely ____ when we arrived.", 
    tr: 'empty', 
    wrong: 'independent' 
  },
  { 
    en: "I was really ____ when I won the competition.", 
    tr: 'excited', 
    wrong: 'informal' 
  },
  { 
    en: "She is quite ____ and doesn't like talking to strangers.", 
    tr: 'shy', 
    wrong: 'electronic' 
  },
  { 
    en: "This chair is very ____. I can sit here for hours.", 
    tr: 'comfortable', 
    wrong: 'impossible' 
  },
  { 
    en: "The teacher was ____ with the students' results.", 
    tr: 'pleased', 
    wrong: 'deep' 
  },
  { 
    en: "He made a very ____ decision to study abroad.", 
    tr: 'brave', 
    wrong: 'bright' 
  },
  { 
    en: "I'm not ____ with my exam results.", 
    tr: 'happy', 
    wrong: 'connected' 
  },
  { 
    en: "The city was too ____, so we couldn't walk easily.", 
    tr: 'crowded', 
    wrong: 'patient' 
  },
  { 
    en: "She has a very ____ personality and makes friends easily.", 
    tr: 'friendly', 
    wrong: 'exact' 
  }
],

// ─────────────────────── QUIZ 23 — Zərflər və bağlayıcılar ───────────────────────
[
  { en: 'actually',     tr: 'əslində',           wrong: 'həqiqətən',     wen: 'maybe',         def: 'in fact or really' },
  { en: 'almost',       tr: 'demək olar ki',     wrong: 'təxminən',      wen: 'exactly',       def: 'very close to something' },
  { en: 'already',      tr: 'artıq',             wrong: 'hələ',          wen: 'later',         def: 'before now or sooner than expected' },
  { en: 'although',     tr: 'baxmayaraq ki',     wrong: 'hərçənd',       wen: 'because',       def: 'used to show contrast' },
  { en: 'anyway',       tr: 'hər halda',         wrong: 'ümumiyyətlə',   wen: 'never',         def: 'in any case' },
  { en: 'certainly',    tr: 'əlbəttə',           wrong: 'mütləq',        wen: 'maybe',         def: 'without any doubt' },
  { en: 'clearly',      tr: 'aydın şəkildə',     wrong: 'açıq şəkildə',  wen: 'quietly',       def: 'in a way that is easy to understand' },
  { en: 'completely',   tr: 'tamamilə',          wrong: 'bütünlüklə',    wen: 'partly',        def: 'totally or fully' },
  { en: 'correctly',    tr: 'düzgün şəkildə',    wrong: 'dəqiq şəkildə', wen: 'wrongly',       def: 'in the right way' },
  { en: 'definitely',   tr: 'mütləq',            wrong: 'əlbəttə',       wen: 'perhaps',       def: 'without any doubt' },
  { en: 'easily',       tr: 'asanlıqla',         wrong: 'rahatca',       wen: 'hardly',        def: 'without difficulty' },
  { en: 'especially',   tr: 'xüsusilə',          wrong: 'ələlxüsus',     wen: 'normally',      def: 'more than usual' },
  { en: 'everywhere',   tr: 'hər yerdə',         wrong: 'hər tərəfdə',   wen: 'nowhere',       def: 'in all places' },
  { en: 'exactly',      tr: 'tam olaraq',        wrong: 'dəqiq olaraq',  wen: 'roughly',       def: 'precisely, no more and no less' },
  { en: 'extremely',    tr: 'son dərəcə',        wrong: 'çox',           wen: 'slightly',      def: 'to a very high degree' },
  { en: 'finally',      tr: 'nəhayət',           wrong: 'axırda',        wen: 'firstly',       def: 'at the end, after a long time' },
  { en: 'fortunately',  tr: 'xoşbəxtlikdən',     wrong: 'şükür ki',      wen: 'unfortunately', def: 'luckily' },
  { en: 'happily',      tr: 'xoşbəxtliklə',      wrong: 'sevinclə',      wen: 'sadly',         def: 'in a happy way' },
  { en: 'immediately',  tr: 'dərhal',            wrong: 'tez',           wen: 'later',         def: 'right now, without delay' },
  { en: 'unfortunately',tr: 'təəssüf ki',        wrong: 'acınacaqlı ki', wen: 'fortunately',   def: 'sadly or unluckily' }
],

// ─────────────────────── QUIZ 24 — Zaman və ardıcıllıq ───────────────────────
[
  { en: 'after',       tr: 'sonra',             wrong: 'əvvəl',         wen: 'before',        def: 'later than something' },
  { en: 'before',      tr: 'əvvəl',             wrong: 'sonra',         wen: 'after',         def: 'earlier than something' },
  { en: 'daily',       tr: 'gündəlik',          wrong: 'həftəlik',      wen: 'yearly',        def: 'every day' },
  { en: 'finally',     tr: 'nəhayət',           wrong: 'əvvəlcə',       wen: 'firstly',       def: 'at the end' },
  { en: 'firstly',     tr: 'birincisi',         wrong: 'əvvəlcə',       wen: 'lastly',        def: 'the first thing' },
  { en: 'forward',     tr: 'irəli',             wrong: 'geri',          wen: 'backward',      def: 'toward the front' },
  { en: 'last',        tr: 'son',               wrong: 'əvvəlki',       wen: 'first',         def: 'the final one' },
  { en: 'lately',      tr: 'son vaxtlar',       wrong: 'tez-tez',       wen: 'always',        def: 'in the recent past' },
  { en: 'recently',    tr: 'yaxınlarda',        wrong: 'keçmişdə',      wen: 'soon',          def: 'a short time ago' },
  { en: 'secondly',    tr: 'ikincisi',          wrong: 'birincisi',     wen: 'finally',       def: 'the second thing' },
  { en: 'since',       tr: 'o vaxtdan',         wrong: 'o zamana qədər', wen: 'until',         def: 'from that time until now' },
  { en: 'still',       tr: 'hələ də',           wrong: 'artıq',         wen: 'already',       def: 'continuing until now' },
  { en: 'suddenly',    tr: 'birdən',            wrong: 'tədricən',      wen: 'slowly',        def: 'quickly and unexpectedly' },
  { en: 'yet',         tr: 'hələ',              wrong: 'artıq',         wen: 'already',       def: 'until now (in negative sentences)' },
  { en: 'already',     tr: 'artıq',             wrong: 'hələ',          wen: 'yet',           def: 'before now' },
  { en: 'soon',        tr: 'tezliklə',          wrong: 'gec',           wen: 'late',          def: 'in a short time from now' },
  { en: 'always',      tr: 'həmişə',            wrong: 'bəzən',         wen: 'never',         def: 'all the time' },
  { en: 'never',       tr: 'heç vaxt',          wrong: 'həmişə',        wen: 'always',        def: 'at no time' },
  { en: 'often',       tr: 'tez-tez',           wrong: 'nadir hallarda', wen: 'rarely',       def: 'many times' },
  { en: 'sometimes',   tr: 'bəzən',             wrong: 'tez-tez',       wen: 'always',        def: 'not always, but sometimes' }
],

      // ─────────────────────── QUIZ 23 — A2 Mixed (Zərflər və Zaman ifadələri) ───────────────────────
[
  { 
    en: "I ____ finished my homework, so I can watch TV now.", 
    tr: 'already', 
    wrong: 'yet' 
  },
  { 
    en: "She was very tired, ____ she continued working.", 
    tr: 'although', 
    wrong: 'finally' 
  },
  { 
    en: "We go to the cinema ____ on weekends.", 
    tr: 'sometimes', 
    wrong: 'always' 
  },
  { 
    en: "He ran very fast and ____ won the race.", 
    tr: 'finally', 
    wrong: 'suddenly' 
  },
  { 
    en: "I haven't eaten anything ____.", 
    tr: 'yet', 
    wrong: 'already' 
  },
  { 
    en: "She smiled ____ when she saw her birthday present.", 
    tr: 'happily', 
    wrong: 'certainly' 
  },
  { 
    en: "____ I prefer tea, but today I want coffee.", 
    tr: 'usually', 
    wrong: 'exactly' 
  },
  { 
    en: "Call me ____ you arrive at the airport.", 
    tr: 'as soon as', 
    wrong: 'before' 
  },
  { 
    en: "It was raining, ____ we decided to stay at home.", 
    tr: 'so', 
    wrong: 'although' 
  },
  { 
    en: "I ____ go to the gym three times a week.", 
    tr: 'often', 
    wrong: 'never' 
  },
  { 
    en: "____, I don't agree with your idea.", 
    tr: 'actually', 
    wrong: 'certainly' 
  },
  { 
    en: "She has lived in London ____ 2015.", 
    tr: 'since', 
    wrong: 'still' 
  },
  { 
    en: "He spoke ____ and everyone understood him.", 
    tr: 'clearly', 
    wrong: 'completely' 
  },
  { 
    en: "I will call you ____ I finish the meeting.", 
    tr: 'as soon as', 
    wrong: 'lately' 
  },
  { 
    en: "____ I was late, I still managed to catch the train.", 
    tr: 'although', 
    wrong: 'suddenly' 
  },
  { 
    en: "She is ____ the best student in the class.", 
    tr: 'definitely', 
    wrong: 'especially' 
  },
  { 
    en: "We ____ go swimming in the summer.", 
    tr: 'sometimes', 
    wrong: 'daily' 
  },
  { 
    en: "He left the house ____ without saying goodbye.", 
    tr: 'suddenly', 
    wrong: 'finally' 
  },
  { 
    en: "I have ____ told you the answer three times.", 
    tr: 'already', 
    wrong: 'yet' 
  },
  { 
    en: "____, we won the match in the last minute.", 
    tr: 'fortunately', 
    wrong: 'unfortunately' 
  }
],
      
// ─────────────────────── QUIZ 25 — Ünsiyyət və dil ───────────────────────
[
  { en: 'advice',       tr: 'məsləhət',           wrong: 'xəbərdarlıq',   wen: 'question',      def: 'an opinion to help someone' },
  { en: 'agree',        tr: 'razılaşmaq',         wrong: 'qəbul etmək',   wen: 'refuse',        def: 'to have the same opinion' },
  { en: 'argue',        tr: 'mübahisə etmək',     wrong: 'danışmaq',      wen: 'agree',         def: 'to disagree angrily' },
  { en: 'argument',     tr: 'mübahisə',           wrong: 'söhbət',        wen: 'conversation',  def: 'a serious disagreement' },
  { en: 'communicate',  tr: 'ünsiyyət qurmaq',    wrong: 'danışmaq',      wen: 'listen',        def: 'to share information with others' },
  { en: 'comment',      tr: 'şərh',               wrong: 'rəy',           wen: 'answer',        def: 'an opinion about something' },
  { en: 'conversation', tr: 'söhbət',             wrong: 'müzakirə',      wen: 'argument',      def: 'a friendly talk between people' },
  { en: 'description',  tr: 'təsvir',             wrong: 'izahat',        wen: 'question',      def: 'saying what something looks like' },
  { en: 'disagree',     tr: 'razılaşmamaq',       wrong: 'etiraz etmək',  wen: 'agree',         def: 'to have a different opinion' },
  { en: 'discuss',      tr: 'müzakirə etmək',     wrong: 'danışmaq',      wen: 'shout',         def: 'to talk about something seriously' },
  { en: 'explanation',  tr: 'izahat',             wrong: 'təsvir',        wen: 'joke',          def: 'making something clear' },
  { en: 'expression',   tr: 'ifadə',             wrong: 'söz',           wen: 'silence',       def: 'a word or phrase' },
  { en: 'informal',     tr: 'qeyri-rəsmi',        wrong: 'sadə',          wen: 'formal',        def: 'relaxed and friendly way of speaking' },
  { en: 'joke',         tr: 'zarafat',            wrong: 'lətifə',        wen: 'fact',          def: 'something funny you say' },
  { en: 'mention',      tr: 'qeyd etmək',         wrong: 'demək',         wen: 'hide',          def: 'to speak about something quickly' },
  { en: 'promise',      tr: 'söz vermək',         wrong: 'and içmək',     wen: 'forget',        def: 'to say you will definitely do something' },
  { en: 'reply',        tr: 'cavab vermək',       wrong: 'reaksiya vermək', wen: 'ask',         def: 'to answer someone' },
  { en: 'speech',       tr: 'nitq',               wrong: 'çıxış',         wen: 'song',          def: 'a formal talk to an audience' },
  { en: 'statement',    tr: 'bəyanat',            wrong: 'açıqlama',      wen: 'question',      def: 'something you say or write officially' },
  { en: 'suggest',      tr: 'təklif etmək',       wrong: 'tövsiyə etmək', wen: 'refuse',        def: 'to give an idea for someone to consider' }
],
      
// ─────────────────────── QUIZ 26 — Sosial həyat və münasibətlər ───────────────────────
[
  { en: 'charity',      tr: 'xeyriyyə',          wrong: 'könüllülük',    wen: 'business',      def: 'an organization that helps people' },
  { en: 'community',    tr: 'icma',              wrong: 'cəmiyyət',      wen: 'family',        def: 'a group of people living in the same area' },
  { en: 'couple',       tr: 'cütlük',            wrong: 'ailə',          wen: 'group',         def: 'two people in a romantic relationship' },
  { en: 'crowd',        tr: 'izdiham',           wrong: 'kütlə',         wen: 'team',          def: 'a large group of people' },
  { en: 'guest',        tr: 'qonaq',             wrong: 'ziyarətçi',     wen: 'host',          def: 'a person who visits your home' },
  { en: 'habit',        tr: 'vərdiş',            wrong: 'adət',          wen: 'hobby',         def: 'something you do regularly' },
  { en: 'invite',       tr: 'dəvət etmək',       wrong: 'çağırmaq',      wen: 'refuse',        def: 'to ask someone to come' },
  { en: 'invitation',   tr: 'dəvətnamə',         wrong: 'dəvət',         wen: 'reply',         def: 'a card or message asking someone to come' },
  { en: 'marriage',     tr: 'evlilik',           wrong: 'nişan',         wen: 'friendship',    def: 'the relationship between husband and wife' },
  { en: 'partner',      tr: 'tərəfdaş',          wrong: 'həyat yoldaşı', wen: 'stranger',      def: 'a person you are in a relationship with' },
  { en: 'relationship', tr: 'münasibət',         wrong: 'əlaqə',         wen: 'competition',   def: 'the way people are connected' },
  { en: 'support',      tr: 'dəstək',            wrong: 'kömək',         wen: 'criticism',     def: 'help and encouragement' },
  { en: 'wedding',      tr: 'toy',               wrong: 'nişan',         wen: 'birthday',      def: 'the ceremony when people get married' },
  { en: 'welcome',      tr: 'xoş gəlmisiniz',    wrong: 'salam',         wen: 'goodbye',       def: 'a friendly greeting' },
  { en: 'tradition',    tr: 'ənənə',             wrong: 'adət',          wen: 'fashion',       def: 'a custom passed from generation to generation' },
  { en: 'traditional',  tr: 'ənənəvi',           wrong: 'köhnə',         wen: 'modern',        def: 'following old customs' },
  { en: 'society',      tr: 'cəmiyyət',          wrong: 'icma',          wen: 'family',        def: 'all the people in a country' },
  { en: 'culture',      tr: 'mədəniyyət',        wrong: 'ənənə',         wen: 'sport',         def: 'the customs and arts of a society' },
  { en: 'celebrate',    tr: 'qeyd etmək',        wrong: 'bayram etmək',  wen: 'complain',      def: 'to do something special for a happy event' },
  { en: 'festival',     tr: 'festival',          wrong: 'bayram',        wen: 'meeting',       def: 'a big public celebration' }
],

      // ─────────────────────── QUIZ 25 — A2 Mixed (Ünsiyyət və Sosial həyat) ───────────────────────
[
  { 
    en: "Can you give me some ____ about choosing a university?", 
    tr: 'advice', 
    wrong: 'festival' 
  },
  { 
    en: "I don't ____ with you. I think you're wrong.", 
    tr: 'agree', 
    wrong: 'celebrate' 
  },
  { 
    en: "We had a long ____ about politics last night.", 
    tr: 'conversation', 
    wrong: 'wedding' 
  },
  { 
    en: "She didn't ____ to my message until this morning.", 
    tr: 'reply', 
    wrong: 'tradition' 
  },
  { 
    en: "He made a very funny ____ and everyone laughed.", 
    tr: 'joke', 
    wrong: 'community' 
  },
  { 
    en: "I want to ____ a party for my birthday next month.", 
    tr: 'invite', 
    wrong: 'suggest' 
  },
  { 
    en: "They got married last year. It was a beautiful ____.", 
    tr: 'wedding', 
    wrong: 'argument' 
  },
  { 
    en: "She is very good at ____ with people from different countries.", 
    tr: 'communicate', 
    wrong: 'support' 
  },
  { 
    en: "I ____ going to the cinema tonight. What do you think?", 
    tr: 'suggest', 
    wrong: 'relationship' 
  },
  { 
    en: "There was a big ____ between the two brothers.", 
    tr: 'argument', 
    wrong: 'culture' 
  },
  { 
    en: "My best friend always ____ me when I have problems.", 
    tr: 'supports', 
    wrong: 'mentions' 
  },
  { 
    en: "It's important to respect other people's ____.", 
    tr: 'culture', 
    wrong: 'guest' 
  },
  { 
    en: "He gave a long ____ at the conference yesterday.", 
    tr: 'speech', 
    wrong: 'invitation' 
  },
  { 
    en: "We have a very good ____ with our neighbours.", 
    tr: 'relationship', 
    wrong: 'description' 
  },
  { 
    en: "Could you ____ the new teacher to me?", 
    tr: 'introduce', 
    wrong: 'discuss' 
  },
  { 
    en: "The whole ____ came together to help the poor family.", 
    tr: 'community', 
    wrong: 'expression' 
  },
  { 
    en: "She received a beautiful ____ to her sister's wedding.", 
    tr: 'invitation', 
    wrong: 'disagree' 
  },
  { 
    en: "Don't forget to ____ your promise.", 
    tr: 'keep', 
    wrong: 'argue' 
  },
  { 
    en: "They ____ Christmas with their whole family.", 
    tr: 'celebrate', 
    wrong: 'comment' 
  },
  { 
    en: "I need your honest ____ about my new dress.", 
    tr: 'opinion', 
    wrong: 'society' 
  }
],
      
// ─────────────────────── QUIZ 27 — Hüquq, cinayət və ordu ───────────────────────
[
  { en: 'army',        tr: 'ordu',               wrong: 'qoşun',         wen: 'school',        def: 'the military forces of a country' },
  { en: 'attack',      tr: 'hücum',              wrong: 'müdafiə',       wen: 'peace',         def: 'to try to hurt or damage someone' },
  { en: 'crime',       tr: 'cinayət',           wrong: 'günah',         wen: 'sport',         def: 'an illegal action' },
  { en: 'criminal',    tr: 'cinayətkar',         wrong: 'quldur',        wen: 'doctor',        def: 'a person who commits crimes' },
  { en: 'danger',      tr: 'təhlükə',           wrong: 'risk',          wen: 'safety',        def: 'the possibility of being hurt' },
  { en: 'destroy',     tr: 'məhv etmək',         wrong: 'dağıtmaq',      wen: 'build',         def: 'to damage something completely' },
  { en: 'detective',   tr: 'dedektiv',          wrong: 'polis',         wen: 'teacher',       def: 'a person who solves crimes' },
  { en: 'fight',       tr: 'dava etmək',         wrong: 'vuruşmaq',      wen: 'agree',         def: 'to use force against someone' },
  { en: 'gun',         tr: 'silah',             wrong: 'tüfəng',        wen: 'knife',         def: 'a weapon that shoots bullets' },
  { en: 'kill',        tr: 'öldürmək',          wrong: 'yaralamaq',     wen: 'help',          def: 'to make someone die' },
  { en: 'law',         tr: 'qanun',             wrong: 'qayda',         wen: 'game',          def: 'official rules of a country' },
  { en: 'prison',      tr: 'həbsxana',          wrong: 'polis idarəsi', wen: 'hospital',      def: 'a place where criminals are kept' },
  { en: 'protect',     tr: 'qorumaq',           wrong: 'müdafiə etmək', wen: 'attack',        def: 'to keep someone safe' },
  { en: 'soldier',     tr: 'əsgər',             wrong: 'zabit',         wen: 'teacher',       def: 'a person who serves in the army' },
  { en: 'steal',       tr: 'oğurlamaq',         wrong: 'soymaq',        wen: 'buy',           def: 'to take something that is not yours' },
  { en: 'thief',       tr: 'oğru',              wrong: 'soyğunçu',      wen: 'customer',      def: 'a person who steals' },
  { en: 'war',         tr: 'müharibə',          wrong: 'döyüş',         wen: 'peace',         def: 'fighting between countries' },
  { en: 'weapon',      tr: 'silah',             wrong: 'bomba',         wen: 'tool',          def: 'an object used for fighting' },
  { en: 'safety',      tr: 'təhlükəsizlik',     wrong: 'mühafizə',      wen: 'danger',        def: 'the state of being safe' },
  { en: 'officer',     tr: 'zabit',             wrong: 'polis',         wen: 'student',       def: 'a person with authority in the army or police' }
],

// ─────────────────────── QUIZ 28 — Biznes, pul və iqtisadiyyat ───────────────────────
[
  { en: 'award',       tr: 'mükafat',           wrong: 'medal',         wen: 'punishment',    def: 'a prize for good work' },
  { en: 'benefit',     tr: 'fayda',             wrong: 'üstünlük',      wen: 'problem',       def: 'an advantage or positive result' },
  { en: 'billion',     tr: 'milyard',           wrong: 'milyon',        wen: 'thousand',      def: 'one thousand million' },
  { en: 'cash',        tr: 'nağd pul',          wrong: 'valyuta',       wen: 'card',          def: 'money in the form of notes and coins' },
  { en: 'coin',        tr: 'sikkə',             wrong: 'əskinaz',       wen: 'note',          def: 'a small round piece of metal money' },
  { en: 'competition', tr: 'rəqabət',           wrong: 'müsabiqə',      wen: 'cooperation',   def: 'trying to be better than others in business' },
  { en: 'earn',        tr: 'qazanmaq',          wrong: 'almaq',         wen: 'spend',         def: 'to get money by working' },
  { en: 'factory',     tr: 'fabrik',            wrong: 'zavod',         wen: 'office',        def: 'a building where things are made' },
  { en: 'farming',     tr: 'əkinçilik',         wrong: 'heyvandarlıq',  wen: 'fishing',       def: 'the business of growing food on land' },
  { en: 'industry',    tr: 'sənaye',            wrong: 'istehsal',      wen: 'education',     def: 'the production of goods in factories' },
  { en: 'per cent',    tr: 'faiz',              wrong: 'nisbət',        wen: 'total',         def: 'one part in every hundred' },
  { en: 'quality',     tr: 'keyfiyyət',         wrong: 'standart',      wen: 'price',         def: 'how good something is' },
  { en: 'salary',      tr: 'maaş',              wrong: 'gəlir',         wen: 'cost',          def: 'money you receive every month for work' },
  { en: 'sale',        tr: 'satış',             wrong: 'endirim',       wen: 'purchase',      def: 'when you sell something' },
  { en: 'cost',        tr: 'qiymət',            wrong: 'dəyər',         wen: 'profit',        def: 'the amount of money you need to pay' },
  { en: 'profit',      tr: 'mənfəət',           wrong: 'gəlir',         wen: 'loss',          def: 'the money you make after costs' },
  { en: 'tax',         tr: 'vergi',             wrong: 'rüsum',         wen: 'salary',        def: 'money you pay to the government' },
  { en: 'budget',      tr: 'büdcə',             wrong: 'xərc',          wen: 'income',        def: 'a plan for how to spend money' },
  { en: 'investment',  tr: 'investisiya',       wrong: 'kapital',       wen: 'holiday',       def: 'putting money into something to make more money' },
  { en: 'economy',     tr: 'iqtisadiyyat',      wrong: 'maliyyə',       wen: 'weather',       def: 'the system of money and business in a country' }
],
      
  // ─────────────────────── QUIZ 27 — A2 Mixed (Hüquq, Cinayət, Biznes və İqtisadiyyat) ───────────────────────
[
  { 
    en: "The police caught the ____ who stole the car.", 
    tr: 'thief', 
    wrong: 'soldier' 
  },
  { 
    en: "He works in a big company and earns a good ____.", 
    tr: 'salary', 
    wrong: 'weapon' 
  },
  { 
    en: "The government is trying to improve the ____ of the country.", 
    tr: 'economy', 
    wrong: 'prison' 
  },
  { 
    en: "Many people lost their jobs during the economic ____.", 
    tr: 'crisis', 
    wrong: 'army' 
  },
  { 
    en: "The young man was sent to ____ for two years.", 
    tr: 'prison', 
    wrong: 'factory' 
  },
  { 
    en: "The company made a big ____ this year.", 
    tr: 'profit', 
    wrong: 'crime' 
  },
  { 
    en: "You must pay ____ on your income every year.", 
    tr: 'tax', 
    wrong: 'fight' 
  },
  { 
    en: "The ____ attacked the city at night.", 
    tr: 'army', 
    wrong: 'customer' 
  },
  { 
    en: "She is a very successful business ____.", 
    tr: 'woman', 
    wrong: 'officer' 
  },
  { 
    en: "The police officer arrested the ____ last night.", 
    tr: 'criminal', 
    wrong: 'farmer' 
  },
  { 
    en: "This phone is very expensive. It ____ too much.", 
    tr: 'costs', 
    wrong: 'kills' 
  },
  { 
    en: "The soldiers received special ____ training.", 
    tr: 'military', 
    wrong: 'budget' 
  },
  { 
    en: "He wants to start his own ____ next year.", 
    tr: 'business', 
    wrong: 'war' 
  },
  { 
    en: "The bank gave me a loan for my new ____.", 
    tr: 'investment', 
    wrong: 'gun' 
  },
  { 
    en: "Stealing money from a bank is a serious ____.", 
    tr: 'crime', 
    wrong: 'salary' 
  },
  { 
    en: "The president gave an important ____ on television.", 
    tr: 'speech', 
    wrong: 'coin' 
  },
  { 
    en: "Many people work in the car ____ in our city.", 
    tr: 'industry', 
    wrong: 'danger' 
  },
  { 
    en: "The detective solved the ____ very quickly.", 
    tr: 'case', 
    wrong: 'benefit' 
  },
  { 
    en: "This shop is having a big ____ this weekend.", 
    tr: 'sale', 
    wrong: 'attack' 
  },
  { 
    en: "The country is preparing for possible ____.", 
    tr: 'war', 
    wrong: 'profit' 
  }
],
      
// ─────────────────────── QUIZ 29 — Ətraf mühit ───────────────────────
[
  { en: 'climate',     tr: 'iqlim',             wrong: 'hava',          wen: 'weather',       def: 'the normal weather conditions in a place' },
  { en: 'continent',   tr: 'qitə',              wrong: 'materik',       wen: 'country',       def: 'a very large area of land like Asia or Africa' },
  { en: 'earth',       tr: 'yer kürəsi',        wrong: 'dünya',         wen: 'moon',          def: 'the planet we live on' },
  { en: 'energy',      tr: 'enerji',            wrong: 'güc',           wen: 'food',          def: 'power that makes machines work' },
  { en: 'environment', tr: 'ətraf mühit',       wrong: 'təbiət',        wen: 'city',          def: 'the natural world around us' },
  { en: 'forest',      tr: 'meşə',              wrong: 'cəngəllik',     wen: 'desert',        def: 'a large area full of trees' },
  { en: 'gas',         tr: 'qaz',               wrong: 'yanacaq',       wen: 'water',         def: 'a substance like air that we use for energy' },
  { en: 'gold',        tr: 'qızıl',             wrong: 'gümüş',         wen: 'paper',         def: 'a very valuable yellow metal' },
  { en: 'grass',       tr: 'ot',                wrong: 'bitki',         wen: 'stone',         def: 'the green plant that covers fields' },
  { en: 'oil',         tr: 'neft',              wrong: 'yanacaq',       wen: 'water',         def: 'a black liquid used to make petrol' },
  { en: 'planet',      tr: 'planet',            wrong: 'ulduz',         wen: 'moon',          def: 'a large round object that moves around a star' },
  { en: 'pollution',   tr: 'çirklənmə',         wrong: 'zərər',         wen: 'cleanliness',   def: 'dirty air, water or land' },
  { en: 'recycle',     tr: 'emal etmək',        wrong: 'təkrar istifadə', wen: 'throw away',   def: 'to use something again in a new way' },
  { en: 'reduce',      tr: 'azaltmaq',          wrong: 'qısaltmaq',     wen: 'increase',      def: 'to make something smaller or less' },
  { en: 'region',      tr: 'bölgə',             wrong: 'rayon',         wen: 'country',       def: 'a particular area of a country' },
  { en: 'resource',    tr: 'resurs',            wrong: 'ehtiyat',       wen: 'problem',       def: 'something useful like water or oil' },
  { en: 'rubbish',     tr: 'zibil',             wrong: 'tullantı',      wen: 'food',          def: 'things you throw away' },
  { en: 'waste',       tr: 'tullantı',          wrong: 'zibil',         wen: 'money',         def: 'unwanted materials' },
  { en: 'wood',        tr: 'taxta',             wrong: 'ağac',          wen: 'stone',         def: 'material from trees used for building' },
  { en: 'nature',      tr: 'təbiət',            wrong: 'ətraf mühit',   wen: 'city',          def: 'the natural world of plants and animals' }
],
      
// ─────────────────────── QUIZ 30 — Səyahət və turizm ───────────────────────
[
  { en: 'abroad',       tr: 'xaricdə',           wrong: 'uzaqda',        wen: 'at home',       def: 'in another country' },
  { en: 'adventure',    tr: 'macəra',            wrong: 'səyahət',       wen: 'work',          def: 'an exciting and dangerous trip' },
  { en: 'airline',      tr: 'aviaşirkət',        wrong: 'hava limanı',   wen: 'hotel',         def: 'a company that flies planes' },
  { en: 'camping',      tr: 'düşərgə',           wrong: 'piknik',        wen: 'reading',       def: 'sleeping in a tent outdoors' },
  { en: 'coast',        tr: 'sahil',             wrong: 'çimərlik',      wen: 'mountain',      def: 'the land next to the sea' },
  { en: 'guide',        tr: 'bələdçi',           wrong: 'turist',        wen: 'driver',        def: 'a person who shows tourists places' },
  { en: 'journey',      tr: 'səfər',             wrong: 'yol',           wen: 'ticket',        def: 'a long trip from one place to another' },
  { en: 'passenger',    tr: 'sərnişin',          wrong: 'müsafir',       wen: 'pilot',         def: 'a person who travels in a vehicle' },
  { en: 'tour',         tr: 'tur',               wrong: 'səyahət',       wen: 'meeting',       def: 'an organized trip to see places' },
  { en: 'tourism',      tr: 'turizm',            wrong: 'istirahət',     wen: 'business',      def: 'the business of helping tourists' },
  { en: 'traveller',    tr: 'səyyah',            wrong: 'turist',        wen: 'resident',      def: 'a person who travels a lot' },
  { en: 'destination',  tr: 'təyinat yeri',      wrong: 'son dayanacaq', wen: 'ticket',        def: 'the place you are travelling to' },
  { en: 'hotel',        tr: 'otel',              wrong: 'motel',         wen: 'hospital',      def: 'a building where tourists stay' },
  { en: 'luggage',      tr: 'baqaj',             wrong: 'çamadan',       wen: 'clothes',       def: 'bags and suitcases for travel' },
  { en: 'passport',     tr: 'şəxsiyyət vəsiqəsi', wrong: 'doğum şəhadətnaməsi', wen: 'ticket',   def: 'an official document for travelling abroad' },
  { en: 'reservation',  tr: 'rezervasiya',       wrong: 'sifariş',       wen: 'menu',          def: 'booking a room or seat in advance' },
  { en: 'route',        tr: 'marşrut',           wrong: 'yol',           wen: 'map',           def: 'the way you take to travel' },
  { en: 'sightseeing',  tr: 'ətrafa baxış',      wrong: 'gəzinti',       wen: 'shopping',      def: 'visiting interesting places' },
  { en: 'trip',         tr: 'səfər',             wrong: 'gəzinti',       wen: 'meeting',       def: 'a short journey' },
  { en: 'visa',         tr: 'viza',              wrong: 'icazə',         wen: 'ticket',        def: 'an official permission to enter a country' }
],

      // ─────────────────────── QUIZ 29 — A2 Mixed (Ətraf mühit və Səyahət) ───────────────────────
[
  { 
    en: "We must protect the ____ if we want a better future.", 
    tr: 'environment', 
    wrong: 'passport' 
  },
  { 
    en: "Many animals live in the Amazon ____.", 
    tr: 'forest', 
    wrong: 'luggage' 
  },
  { 
    en: "Air ____ is a big problem in big cities.", 
    tr: 'pollution', 
    wrong: 'reservation' 
  },
  { 
    en: "We should ____ plastic bottles and paper.", 
    tr: 'recycle', 
    wrong: 'adventure' 
  },
  { 
    en: "The ____ is changing because of global warming.", 
    tr: 'climate', 
    wrong: 'visa' 
  },
  { 
    en: "I always take a lot of ____ when I travel.", 
    tr: 'luggage', 
    wrong: 'rubbish' 
  },
  { 
    en: "We are going on a ____ to Italy next summer.", 
    tr: 'trip', 
    wrong: 'wood' 
  },
  { 
    en: "You need a ____ to visit some countries.", 
    tr: 'visa', 
    wrong: 'grass' 
  },
  { 
    en: "Solar ____ is clean and good for the environment.", 
    tr: 'energy', 
    wrong: 'destination' 
  },
  { 
    en: "The hotel made a ____ for us for next weekend.", 
    tr: 'reservation', 
    wrong: 'gold' 
  },
  { 
    en: "Earth is the only ____ where we can live.", 
    tr: 'planet', 
    wrong: 'tour' 
  },
  { 
    en: "Don't throw ____ on the ground. Use the bin.", 
    tr: 'rubbish', 
    wrong: 'coast' 
  },
  { 
    en: "We went on a boat ____ along the Nile River.", 
    tr: 'tour', 
    wrong: 'oil' 
  },
  { 
    en: "She wants to save the ____ and plant more trees.", 
    tr: 'nature', 
    wrong: 'guide' 
  },
  { 
    en: "This summer we are travelling ____ to Spain.", 
    tr: 'abroad', 
    wrong: 'recycle' 
  },
  { 
    en: "The beautiful sandy ____ is full of tourists.", 
    tr: 'beach', 
    wrong: 'continent' 
  },
  { 
    en: "We must reduce our use of plastic to save the ____.", 
    tr: 'planet', 
    wrong: 'sightseeing' 
  },
  { 
    en: "He is a professional mountain ____.", 
    tr: 'guide', 
    wrong: 'factory' 
  },
  { 
    en: "This car uses less ____ than older models.", 
    tr: 'petrol', 
    wrong: 'region' 
  },
  { 
    en: "We had an amazing ____ in the mountains last year.", 
    tr: 'adventure', 
    wrong: 'climate' 
  }
],
      
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 3 — B1: Orta-Aşağı I                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b1',
    name: 'B1 — İNTERMEDİATE',
    icon: '🌳',
    color: '#E07A30',
    quizzes: [// ─────────────────────── QUIZ 1 — Education & Learning (1) ───────────────────────
[
  { en: 'academic',     tr: 'akademik',          wrong: 'peşəkar',       wen: 'practical',     def: 'related to studying and education at a high level' },
  { en: 'assignment',   tr: 'tapşırıq',          wrong: 'imtahan',       wen: 'holiday',       def: 'a piece of work that a teacher gives to a student' },
  { en: 'campus',       tr: 'kampus',            wrong: 'yataqxana',     wen: 'factory',       def: 'the buildings and grounds of a university' },
  { en: 'chapter',      tr: 'fəsil',             wrong: 'mövzu',         wen: 'lesson',        def: 'one of the main parts of a book' },
  { en: 'educate',      tr: 'təhsil vermək',     wrong: 'öyrətmək',      wen: 'entertain',     def: 'to teach someone at school or university' },
  { en: 'educated',     tr: 'təhsilli',          wrong: 'istedadlı',     wen: 'wealthy',       def: 'having received a good education' },
  { en: 'educational',  tr: 'təhsil verici',     wrong: 'əyləncəli',     wen: 'expensive',     def: 'helping people to learn' },
  { en: 'examination',  tr: 'imtahan',           wrong: 'tapşırıq',      wen: 'interview',     def: 'a formal test of knowledge' },
  { en: 'grade',        tr: 'qiymət',            wrong: 'sinif',         wen: 'salary',        def: 'a mark you receive for your work at school' },
  { en: 'improvement',  tr: 'inkişaf',           wrong: 'nəticə',        wen: 'failure',       def: 'becoming better than before' },
  { en: 'intelligence', tr: 'zəka',              wrong: 'yaradıcılıq',   wen: 'strength',      def: 'the ability to learn and understand things' },
  { en: 'laboratory',   tr: 'laboratoriya',      wrong: 'sinif otağı',   wen: 'office',        def: 'a room where scientific experiments are done' },
  { en: 'presentation', tr: 'təqdimat',          wrong: 'məruzə',        wen: 'exam',          def: 'a talk in front of a group of people' },
  { en: 'qualification',tr: 'ixtisas',           wrong: 'sertifikat',    wen: 'hobby',         def: 'an official certificate that shows you can do a job' },
  { en: 'qualified',    tr: 'ixtisaslı',         wrong: 'təcrübəli',     wen: 'famous',        def: 'having the right skills or certificates for a job' },
  { en: 'qualify',      tr: 'ixtisaslaşmaq',     wrong: 'qazanmaq',      wen: 'fail',          def: 'to pass exams to get a certificate' },
  { en: 'revise',       tr: 'təkrar etmək',      wrong: 'yazmaq',        wen: 'forget',        def: 'to study again before an exam' },
  { en: 'skill',        tr: 'bacarıq',           wrong: 'bilik',         wen: 'luck',          def: 'the ability to do something well' },
  { en: 'summary',      tr: 'xülasə',            wrong: 'giriş',         wen: 'detail',        def: 'a short version of a longer text' },
  { en: 'summarise',    tr: 'xülasə etmək',      wrong: 'tərcümə etmək', wen: 'expand',        def: 'to make a short version of something' }
],

// ─────────────────────── QUIZ 2 — Education & Learning (2) ───────────────────────
[
  { en: 'achievement',  tr: 'nailiyyət',         wrong: 'məqsəd',        wen: 'failure',       def: 'something you succeed in doing' },
  { en: 'candidate',    tr: 'namizəd',           wrong: 'iştirakçı',     wen: 'teacher',       def: 'a person who applies for a job or exam' },
  { en: 'career',       tr: 'karyera',           wrong: 'peşə',          wen: 'hobby',         def: 'the jobs you do during your working life' },
  { en: 'concentration',tr: 'diqqət cəmləmə',    wrong: 'anlayış',       wen: 'relaxation',    def: 'the ability to focus on one thing' },
  { en: 'diagram',      tr: 'diaqram',           wrong: 'cədvəl',        wen: 'story',         def: 'a drawing that shows information' },
  { en: 'experienced',  tr: 'təcrübəli',         wrong: 'ixtisaslı',     wen: 'young',         def: 'having a lot of knowledge from doing something' },
  { en: 'indicate',     tr: 'göstərmək',         wrong: 'açıqlamaq',     wen: 'hide',          def: 'to show or point out something' },
  { en: 'journal',      tr: 'jurnal',            wrong: 'kitab',         wen: 'newspaper',     def: 'a written record of events' },
  { en: 'literature',   tr: 'ədəbiyyat',         wrong: 'tarix',         wen: 'science',       def: 'books, poems and plays' },
  { en: 'narrative',    tr: 'hekayə',            wrong: 'şeir',          wen: 'fact',          def: 'a story or description of events' },
  { en: 'note',         tr: 'qeyd',              wrong: 'tapşırıq',      wen: 'exam',          def: 'a short written message' },
  { en: 'practical',    tr: 'praktiki',          wrong: 'nəzəri',        wen: 'impossible',    def: 'connected with real situations' },
  { en: 'primary',      tr: 'ibtidai',           wrong: 'orta',          wen: 'university',    def: 'first level of education for children' },
  { en: 'project',      tr: 'layihə',            wrong: 'tapşırıq',      wen: 'holiday',       def: 'a planned piece of work' },
  { en: 'secondary',    tr: 'orta',              wrong: 'ali',           wen: 'primary',       def: 'education after primary school' },
  { en: 'standard',     tr: 'standart',          wrong: 'səviyyə',       wen: 'price',         def: 'a level of quality that is accepted' },
  { en: 'technique',    tr: 'üsul',              wrong: 'metod',         wen: 'machine',       def: 'a special way of doing something' },
  { en: 'topic',        tr: 'mövzu',            wrong: 'fəsil',         wen: 'answer',        def: 'the subject of a discussion or text' },
  { en: 'translate',    tr: 'tərcümə etmək',     wrong: 'oxumaq',        wen: 'forget',        def: 'to change text from one language to another' },
  { en: 'translation',  tr: 'tərcümə',           wrong: 'izahat',        wen: 'original',      def: 'a text that has been translated' }
],

// ─────────────────────── QUIZ 3 — Business & Work (1) ───────────────────────
[
  { en: 'account',      tr: 'hesab',             wrong: 'balans',        wen: 'holiday',       def: 'a record of money in a bank' },
  { en: 'advertisement',tr: 'reklam',            wrong: 'elan',          wen: 'meeting',       def: 'a notice to persuade people to buy something' },
  { en: 'application',  tr: 'müraciət',          wrong: 'sənəd',         wen: 'vacation',      def: 'a formal request for a job' },
  { en: 'appointment',  tr: 'görüş',             wrong: 'toplantı',      wen: 'party',         def: 'an arranged meeting at a specific time' },
  { en: 'business',     tr: 'biznes',            wrong: 'şirkət',        wen: 'hobby',         def: 'buying and selling goods to make money' },
  { en: 'client',       tr: 'müştəri',           wrong: 'tərəfdaş',      wen: 'friend',        def: 'a person who pays for a service' },
  { en: 'commercial',   tr: 'kommersiya',        wrong: 'sənaye',        wen: 'educational',   def: 'related to buying and selling' },
  { en: 'competitor',   tr: 'rəqib',             wrong: 'tərəfdaş',      wen: 'colleague',     def: 'a company or person trying to be more successful' },
  { en: 'competitive',  tr: 'rəqabətli',         wrong: 'gəlirli',       wen: 'relaxed',       def: 'trying hard to be better than others' },
  { en: 'employment',   tr: 'məşğulluq',         wrong: 'iş yeri',       wen: 'unemployment',  def: 'having a paid job' },
  { en: 'management',   tr: 'idarəetmə',         wrong: 'təşkilat',      wen: 'workers',       def: 'the people who control a company' },
  { en: 'marketing',    tr: 'marketinq',         wrong: 'reklam',        wen: 'production',    def: 'the activity of promoting and selling products' },
  { en: 'producer',     tr: 'istehsalçı',        wrong: 'distribütor',   wen: 'customer',      def: 'a person or company that makes goods' },
  { en: 'production',   tr: 'istehsal',          wrong: 'satış',         wen: 'education',     def: 'the process of making goods' },
  { en: 'product',      tr: 'məhsul',            wrong: 'xidmət',        wen: 'idea',          def: 'something that is made to be sold' },
  { en: 'profession',   tr: 'peşə',              wrong: 'vəzifə',        wen: 'hobby',         def: 'a job that needs special training' },
  { en: 'profit',       tr: 'mənfəət',           wrong: 'gəlir',         wen: 'cost',          def: 'the money a business makes' },
  { en: 'project',      tr: 'layihə',            wrong: 'plan',          wen: 'holiday',       def: 'a planned piece of work' },
  { en: 'promote',      tr: 'təbliğ etmək',      wrong: 'satmaq',        wen: 'reduce',        def: 'to advertise something' },
  { en: 'staff',        tr: 'heyət',             wrong: 'müdir',         wen: 'customer',      def: 'the people who work for a company' }
],

// ─────────────────────── QUIZ 4 — Business & Work (2) ───────────────────────
[
  { en: 'afford',       tr: 'gücü çatmaq',       wrong: 'qənaət etmək',  wen: 'waste',         def: 'to have enough money to buy something' },
  { en: 'bargain',      tr: 'sövdələşmə',        wrong: 'endirim',       wen: 'gift',          def: 'a good deal or agreement on price' },
  { en: 'brand',        tr: 'marka',             wrong: 'logo',          wen: 'price',         def: 'a name that identifies a product' },
  { en: 'currency',     tr: 'məzənnə',           wrong: 'kapital',       wen: 'language',      def: 'the money used in a country' },
  { en: 'discount',     tr: 'endirim',           wrong: 'bonus',         wen: 'increase',      def: 'a reduction in price' },
  { en: 'economy',      tr: 'iqtisadiyyat',      wrong: 'büdcə',         wen: 'weather',       def: 'the system of money and industry in a country' },
  { en: 'economic',     tr: 'iqtisadi',          wrong: 'maliyyə',       wen: 'personal',      def: 'related to the economy' },
  { en: 'export',       tr: 'ixrac etmək',       wrong: 'idxal etmək',   wen: 'buy',           def: 'to sell goods to other countries' },
  { en: 'financial',    tr: 'maliyyə',           wrong: 'iqtisadi',      wen: 'medical',       def: 'related to money and finance' },
  { en: 'goods',        tr: 'mallar',            wrong: 'məhsullar',     wen: 'services',      def: 'things that are produced to be sold' },
  { en: 'import',       tr: 'idxal etmək',       wrong: 'ixrac etmək',   wen: 'sell',          def: 'to bring goods from other countries' },
  { en: 'invest',       tr: 'sərmayə qoymaq',    wrong: 'qazanmaq',      wen: 'spend',         def: 'to put money into something to make profit' },
  { en: 'market',       tr: 'bazar',             wrong: 'mağaza',        wen: 'hospital',      def: 'the place where goods are bought and sold' },
  { en: 'opportunity',  tr: 'fürsət',            wrong: 'imkan',         wen: 'problem',       def: 'a chance to do something' },
  { en: 'payment',      tr: 'ödəniş',            wrong: 'qiymət',        wen: 'gift',          def: 'the act of paying money' },
  { en: 'price',        tr: 'qiymət',            wrong: 'endirim',       wen: 'quality',       def: 'the amount of money you pay for something' },
  { en: 'resource',     tr: 'resurs',            wrong: 'ehtiyat',       wen: 'idea',          def: 'something useful like money or materials' },
  { en: 'tax',          tr: 'vergi',             wrong: 'rüsum',         wen: 'salary',        def: 'money paid to the government' },
  { en: 'trade',        tr: 'ticarət',           wrong: 'mübadiləetmə',  wen: 'sport',         def: 'the activity of buying and selling goods' },
  { en: 'profit',       tr: 'mənfəət',           wrong: 'əmək haqqı',    wen: 'cost',          def: 'the money a business earns' }
],

      // ─────────────────────── EXAM 1 — Education & Business Vocabulary ───────────────────────
[
  {
    en: "She has a very good _____ from university.",
    tr: 'qualification',
    wrong: 'laboratory'
  },
  {
    en: "I need to _____ for the exam next week.",
    tr: 'revise',
    wrong: 'promote'
  },
  {
    en: "The students have a lot of _____ this semester.",
    tr: 'assignments',
    wrong: 'currencies'
  },
  {
    en: "He works for a big international _____ .",
    tr: 'company',
    wrong: 'campus'
  },
  {
    en: "The _____ of this product is very high.",
    tr: 'quality',
    wrong: 'presentation'
  },
  {
    en: "Our team has a very important _____ this month.",
    tr: 'project',
    wrong: 'summary'
  },
  {
    en: "She is the best _____ in our department.",
    tr: 'candidate',
    wrong: 'diagram'
  },
  {
    en: "I want to _____ my English before the trip.",
    tr: 'improve',
    wrong: 'export'
  },
  {
    en: "The meeting will take place on the university _____.",
    tr: 'campus',
    wrong: 'profit'
  },
  {
    en: "He received a high _____ for his essay.",
    tr: 'grade',
    wrong: 'staff'
  },
  {
    en: "This course will help you develop new _____.",
    tr: 'skills',
    wrong: 'competitors'
  },
  {
    en: "The manager wants to _____ the new product next month.",
    tr: 'launch',
    wrong: 'summarise'
  },
  {
    en: "We made a good _____ last year.",
    tr: 'profit',
    wrong: 'chapter'
  },
  {
    en: "She is very _____ in marketing.",
    tr: 'experienced',
    wrong: 'academic'
  },
  {
    en: "I have an _____ with the doctor at 3 pm.",
    tr: 'appointment',
    wrong: 'translation'
  },
  {
    en: "The company is looking for new _____ .",
    tr: 'clients',
    wrong: 'laboratories'
  },
  {
    en: "You need to _____ the main points of the text.",
    tr: 'summarise',
    wrong: 'invest'
  },
  {
    en: "He has a very successful _____.",
    tr: 'career',
    wrong: 'examination'
  },
  {
    en: "The teacher asked us to draw a _____ of the process.",
    tr: 'diagram',
    wrong: 'business'
  },
  {
    en: "This is a very _____ price for such a good product.",
    tr: 'competitive',
    wrong: 'educated'
  }
],
      
// ─────────────────────── QUIZ 5 — Money & Shopping ───────────────────────
[
  { en: 'credit',      tr: 'kredit',            wrong: 'borc',          wen: 'gift',          def: 'an agreement to pay for something later' },
  { en: 'fine',        tr: 'cərimə',            wrong: 'vergi',         wen: 'salary',        def: 'money you have to pay as a punishment' },
  { en: 'luxury',      tr: 'lüks',              wrong: 'bahalı',        wen: 'basic',         def: 'something expensive and not necessary' },
  { en: 'mall',        tr: 'ticarət mərkəzi',   wrong: 'bazar',         wen: 'hospital',      def: 'a large building with many shops' },
  { en: 'payment',     tr: 'ödəniş',            wrong: 'əmək haqqı',     wen: 'holiday',       def: 'the act of paying money for something' },
  { en: 'price',       tr: 'qiymət',            wrong: 'dəyər',         wen: 'quality',       def: 'the amount of money you need to pay' },
  { en: 'profit',      tr: 'mənfəət',           wrong: 'gəlir',         wen: 'cost',          def: 'the money a business makes after expenses' },
  { en: 'rent',        tr: 'icarə',             wrong: 'əmlak',         wen: 'salary',        def: 'money you pay to live in a house' },
  { en: 'shop',        tr: 'mağaza',            wrong: 'bazar',         wen: 'school',        def: 'a place where you buy things' },
  { en: 'value',       tr: 'dəyər',             wrong: 'qiymət',        wen: 'size',          def: 'how useful or important something is' },
  { en: 'valuable',    tr: 'dəyərli',           wrong: 'bahalı',        wen: 'cheap',         def: 'worth a lot of money or very useful' },
  { en: 'wealth',      tr: 'sərvət',            wrong: 'kapital',       wen: 'health',        def: 'a large amount of money and possessions' },
  { en: 'worth',       tr: 'dəyərində olmaq',   wrong: 'sahib olmaq',   wen: 'forget',        def: 'having a particular value' },
  { en: 'market',      tr: 'bazar',             wrong: 'mağaza',        wen: 'library',       def: 'a place where people buy and sell things' },
  { en: 'bargain',     tr: 'sövdələşmə',        wrong: 'endirimlimərz', wen: 'argument',      def: 'a very good price for something' },
  { en: 'brand',       tr: 'marka',             wrong: 'model',         wen: 'price',         def: 'a well-known name of a product' },
  { en: 'discount',    tr: 'endirim',           wrong: 'güzəşt',        wen: 'increase',      def: 'a reduction in the normal price' },
  { en: 'goods',       tr: 'mallar',            wrong: 'əşyalar',       wen: 'services',      def: 'things that are made to be sold' },
  { en: 'afford',      tr: 'gücü çatmaq',       wrong: 'almaq',         wen: 'waste',         def: 'to have enough money to buy something' },
  { en: 'currency',    tr: 'valyuta',           wrong: 'pul',           wen: 'language',      def: 'the money used in a particular country' }
],

// ─────────────────────── QUIZ 6 — Technology & Media ───────────────────────
[
  { en: 'click',        tr: 'klikləmək',         wrong: 'sürükləmək',    wen: 'shout',         def: 'to press a button on a mouse or screen' },
  { en: 'channel',      tr: 'kanal',             wrong: 'proqram',       wen: 'road',          def: 'a television station' },
  { en: 'desktop',      tr: 'iş masası',         wrong: 'noutbuk',       wen: 'kitchen',       def: 'the main screen of a computer' },
  { en: 'documentary',  tr: 'sənədli film',      wrong: 'serialfilm',    wen: 'comedy',        def: 'a film about real events and facts' },
  { en: 'episode',      tr: 'bölüm',             wrong: 'serial',        wen: 'chapter',       def: 'one part of a TV series' },
  { en: 'file',         tr: 'fayl',              wrong: 'qovluq',        wen: 'book',          def: 'a collection of information on a computer' },
  { en: 'headline',     tr: 'başlıq',            wrong: 'xəbər',         wen: 'title',         def: 'the main title of a news story' },
  { en: 'IT',           tr: 'informasiya texnologiyası', wrong: 'süni intellekt', wen: 'sport',  def: 'the use of computers and technology' },
  { en: 'keyboard',     tr: 'klaviatura',        wrong: 'monitor',       wen: 'mirror',        def: 'the set of keys you type on' },
  { en: 'log',          tr: 'qeyd',              wrong: 'hesabat',       wen: 'joke',          def: 'a record of activity on a computer' },
  { en: 'photography',  tr: 'fotoqrafiya',       wrong: 'kino',          wen: 'cooking',       def: 'the art of taking photographs' },
  { en: 'photographer', tr: 'fotoqraf',          wrong: 'operator',      wen: 'chef',          def: 'a person who takes photos' },
  { en: 'scan',         tr: 'skan etmək',        wrong: 'çap etmək',     wen: 'draw',          def: 'to make a digital copy of a document' },
  { en: 'script',       tr: 'ssenari',           wrong: 'proqram',       wen: 'menu',          def: 'the written text of a film or play' },
  { en: 'signal',       tr: 'siqnal',            wrong: 'əlaqə',         wen: 'road',          def: 'a sign or wave that carries information' },
  { en: 'software',     tr: 'proqram təminatı',  wrong: 'avadanlıq',     wen: 'furniture',     def: 'programs that run on a computer' },
  { en: 'studio',       tr: 'studiya',           wrong: 'ofis',          wen: 'kitchen',       def: 'a place where films, music or TV shows are made' },
  { en: 'update',       tr: 'yeniləmək',         wrong: 'qurmaq',        wen: 'delete',        def: 'to make something more modern' },
  { en: 'version',      tr: 'versiya',           wrong: 'nüsxə',         wen: 'price',         def: 'a form of something that is slightly different' },
  { en: 'viewer',       tr: 'tamaşaçı',          wrong: 'istifadəçi',    wen: 'customer',      def: 'a person who watches television' }
],

// ─────────────────────── QUIZ 7 — Communication & Social Interaction ───────────────────────
[
  { en: 'announce',     tr: 'elan etmək',        wrong: 'bildirmək',     wen: 'hide',          def: 'to tell people something officially' },
  { en: 'announcement', tr: 'elan',               wrong: 'xəbər',         wen: 'secret',        def: 'an official statement' },
  { en: 'apologise',    tr: 'üzr istəmək',       wrong: 'bağışlamaq',    wen: 'thank',         def: 'to say you are sorry' },
  { en: 'appreciate',   tr: 'qiymətləndirmək',   wrong: 'tərifləmək',    wen: 'criticise',     def: 'to be thankful for something' },
  { en: 'assist',       tr: 'kömək etmək',       wrong: 'dəstəkləmək',   wen: 'refuse',        def: 'to help someone' },
  { en: 'comment',      tr: 'şərh',              wrong: 'fikir',         wen: 'order',         def: 'an opinion or remark' },
  { en: 'communicate',  tr: 'ünsiyyət qurmaq',   wrong: 'danışmaq',      wen: 'argue',         def: 'to exchange information with others' },
  { en: 'confirm',      tr: 'təsdiqləmək',       wrong: 'bildirmək',     wen: 'deny',          def: 'to say that something is definitely true' },
  { en: 'contact',      tr: 'əlaqə saxlamaq',    wrong: 'zəng etmək',    wen: 'avoid',         def: 'to communicate with someone' },
  { en: 'convince',     tr: 'inandırmaq',        wrong: 'məcbur etmək',  wen: 'confuse',       def: 'to make someone believe something' },
  { en: 'discuss',      tr: 'müzakirə etmək',    wrong: 'danışmaq',      wen: 'shout',         def: 'to talk about something in detail' },
  { en: 'encourage',    tr: 'həvəsləndirmək',    wrong: 'dəstəkləmək',   wen: 'criticise',     def: 'to give someone confidence' },
  { en: 'persuade',     tr: 'razı salmaq',       wrong: 'inandırmaq',    wen: 'force',         def: 'to make someone agree by giving reasons' },
  { en: 'recommend',    tr: 'tövsiyə etmək',     wrong: 'təklif etmək',  wen: 'refuse',        def: 'to say that something is good' },
  { en: 'remind',       tr: 'xatırlatmaq',       wrong: 'söyləmək',      wen: 'forget',        def: 'to help someone remember' },
  { en: 'respond',      tr: 'cavab vermək',      wrong: 'reaksiya göstərmək', wen: 'ignore',   def: 'to reply or react to something' },
  { en: 'state',        tr: 'bəyan etmək',       wrong: 'söyləmək',      wen: 'ask',           def: 'to say something formally' },
  { en: 'suggest',      tr: 'təklif etmək',      wrong: 'tövsiyə etmək', wen: 'order',         def: 'to give an idea for someone to consider' },
  { en: 'warn',         tr: 'xəbərdarlıq etmək', wrong: 'qorxutmaq',     wen: 'praise',        def: 'to tell someone about possible danger' },
  { en: 'yell',         tr: 'bağırmaq',          wrong: 'danlamaq',      wen: 'whisper',       def: 'to shout loudly' }
],
// ─────────────────────── EXAM 2 — Money, Technology & Communication ───────────────────────
[
  {
    en: "I can't _____ this expensive car right now.",
    tr: 'afford',
    wrong: 'click'
  },
  {
    en: "They gave me a 20% _____ on this jacket.",
    tr: 'discount',
    wrong: 'announcement'
  },
  {
    en: "We made a good _____ last year.",
    tr: 'profit',
    wrong: 'keyboard'
  },
  {
    en: "I need to make a _____ by the end of the month.",
    tr: 'payment',
    wrong: 'episode'
  },
  {
    en: "This phone is a very famous _____.",
    tr: 'brand',
    wrong: 'viewer'
  },
  {
    en: "Can you _____ me the file please?",
    tr: 'send',
    wrong: 'yell'
  },
  {
    en: "I always _____ on the link to buy tickets.",
    tr: 'click',
    wrong: 'bargain'
  },
  {
    en: "She is a very good _____ on social media.",
    tr: 'influencer',
    wrong: 'currency'
  },
  {
    en: "The latest _____ of this app is much better.",
    tr: 'version',
    wrong: 'fine'
  },
  {
    en: "I saw an interesting _____ about climate change.",
    tr: 'documentary',
    wrong: 'rent'
  },
  {
    en: "Please _____ me when the meeting starts.",
    tr: 'remind',
    wrong: 'luxury'
  },
  {
    en: "The government introduced a new digital _____.",
    tr: 'currency',
    wrong: 'studio'
  },
  {
    en: "He tried to _____ me to buy his product.",
    tr: 'persuade',
    wrong: 'scan'
  },
  {
    en: "I live in a small flat and pay high _____.",
    tr: 'rent',
    wrong: 'headline'
  },
  {
    en: "You can download the file from this _____ .",
    tr: 'website',
    wrong: 'wealth'
  },
  {
    en: "The teacher asked us to _____ our homework.",
    tr: 'submit',
    wrong: 'apologise'
  },
  {
    en: "This painting has a very high _____.",
    tr: 'value',
    wrong: 'channel'
  },
  {
    en: "I need to _____ my phone because it's old.",
    tr: 'update',
    wrong: 'recommend'
  },
  {
    en: "She works as a _____ for a big news company.",
    tr: 'photographer',
    wrong: 'mall'
  },
  {
    en: "The company made a big _____ from this new product.",
    tr: 'profit',
    wrong: 'script'
  }
],
      
// ─────────────────────── QUIZ 8 — Feelings & Personality (1) ───────────────────────
[
  { en: 'amazed',       tr: 'heyrətlənmiş',      wrong: 'sevincli',      wen: 'bored',         def: 'very surprised by something unexpected' },
  { en: 'ambitious',    tr: 'iddialı',           wrong: 'məqsədli',      wen: 'lazy',          def: 'someone who wants to be very successful' },
  { en: 'annoyed',      tr: 'əsəbləşmiş',        wrong: 'yorulmuş',      wen: 'relaxed',       def: 'slightly angry about something' },
  { en: 'annoying',     tr: 'əsəbləşdirici',     wrong: 'sıxıcı',        wen: 'interesting',   def: 'something that makes you feel irritated' },
  { en: 'cheerful',     tr: 'şən',               wrong: 'sevincli',      wen: 'depressed',     def: 'happy and in a good mood' },
  { en: 'confident',    tr: 'özünə inamlı',      wrong: 'cəsur',         wen: 'shy',           def: 'believing in your own abilities' },
  { en: 'disappointed', tr: 'məyus',             wrong: 'üzülmüş',       wen: 'excited',       def: 'sad because something was not as good as expected' },
  { en: 'embarrassed',  tr: 'utanmış',           wrong: 'narahat',       wen: 'proud',         def: 'feeling ashamed or uncomfortable in front of others' },
  { en: 'embarrassing', tr: 'utandırıcı',        wrong: 'narahatedici',  wen: 'normal',        def: 'making you feel ashamed' },
  { en: 'frightened',   tr: 'qorxmuş',           wrong: 'narahat',       wen: 'brave',         def: 'feeling afraid' },
  { en: 'frightening',  tr: 'qorxuducu',         wrong: 'təhlükəli',     wen: 'safe',          def: 'making you feel scared' },
  { en: 'glad',         tr: 'şad',               wrong: 'məmnun',        wen: 'angry',         def: 'pleased and happy about something' },
  { en: 'grateful',     tr: 'minnətdar',         wrong: 'xoşbəxt',       wen: 'jealous',       def: 'thankful for something' },
  { en: 'honest',       tr: 'dürüst',            wrong: 'etibarlı',      wen: 'clever',        def: 'always telling the truth' },
  { en: 'lonely',       tr: 'tənha',             wrong: 'kədərli',       wen: 'popular',       def: 'feeling sad because you are alone' },
  { en: 'mad',          tr: 'dəli / əsəbi',      wrong: 'qorxmuş',       wen: 'calm',          def: 'very angry' },
  { en: 'pessimistic',  tr: 'bədbin',            wrong: 'ümidsiz',       wen: 'optimistic',    def: 'always expecting bad things to happen' },
  { en: 'proud',        tr: 'qürurlu',           wrong: 'xoşbəxt',       wen: 'ashamed',       def: 'feeling pleased about your achievements' },
  { en: 'shy',          tr: 'utancaq',           wrong: 'sakit',         wen: 'confident',     def: 'nervous and not comfortable with people' },
  { en: 'upset',        tr: 'narahat',           wrong: 'kədərli',       wen: 'relaxed',       def: 'unhappy and disappointed' }
],

// ─────────────────────── QUIZ 9 — Feelings & Personality (2) ───────────────────────
[
  { en: 'brave',        tr: 'cəsur',             wrong: 'güclü',         wen: 'cowardly',      def: 'not afraid to face danger' },
  { en: 'calm',         tr: 'sakit',             wrong: 'səbirli',       wen: 'nervous',       def: 'peaceful and not excited or angry' },
  { en: 'careless',     tr: 'diqqətsiz',         wrong: 'tənbəl',        wen: 'careful',       def: 'not paying attention to what you do' },
  { en: 'cruel',        tr: 'zalım',             wrong: 'kobud',         wen: 'kind',          def: 'very unkind and causing pain to others' },
  { en: 'determined',   tr: 'qərarlı',           wrong: 'iddialı',       wen: 'lazy',          def: 'having a strong will to achieve something' },
  { en: 'gentle',       tr: 'mülayim',           wrong: 'mehriban',      wen: 'aggressive',    def: 'kind, calm and not rough' },
  { en: 'horrible',     tr: 'dəhşətli',          wrong: 'pis',           wen: 'wonderful',     def: 'extremely unpleasant' },
  { en: 'kind',         tr: 'xeyirxah',          wrong: 'mehriban',      wen: 'cruel',         def: 'friendly, helpful and good to others' },
  { en: 'negative',     tr: 'mənfi',             wrong: 'bədbin',        wen: 'positive',      def: 'thinking about the bad side of things' },
  { en: 'peaceful',     tr: 'dinc',              wrong: 'sakit',         wen: 'noisy',         def: 'quiet and calm' },
  { en: 'pleasant',     tr: 'xoş',               wrong: 'gözəl',         wen: 'horrible',      def: 'nice and enjoyable' },
  { en: 'positive',     tr: 'müsbət',            wrong: 'nikbin',        wen: 'negative',      def: 'thinking about the good side of things' },
  { en: 'relaxed',      tr: 'rahat',             wrong: 'sakit',         wen: 'stressed',      def: 'feeling calm and not worried' },
  { en: 'relaxing',     tr: 'rahatladıcı',       wrong: 'sakinləşdirici', wen: 'tiring',       def: 'helping you feel calm and less stressed' },
  { en: 'sensible',     tr: 'ağıllı',            wrong: 'ağıllıca',      wen: 'stupid',        def: 'having good judgement' },
  { en: 'silly',        tr: 'axmaq',             wrong: 'sadəlövh',      wen: 'serious',       def: 'not serious or sensible' },
  { en: 'smart',        tr: 'ağıllı',            wrong: 'istedadlı',     wen: 'stupid',        def: 'intelligent and quick to learn' },
  { en: 'talented',     tr: 'istedadlı',         wrong: 'bacarıqlı',     wen: 'lazy',          def: 'having a natural ability to do something well' },
  { en: 'uncomfortable',tr: 'narahat',           wrong: 'sıxıntılı',     wen: 'relaxed',       def: 'not comfortable or relaxed' },
  { en: 'unpleasant',   tr: 'xoşagəlməz',        wrong: 'pis',           wen: 'pleasant',      def: 'not nice or enjoyable' }
],
      // ─────────────────────── EXAM 3 — Feelings & Personality ───────────────────────
[
  {
    en: "She was very _____ when she saw the surprise party.",
    tr: 'amazed',
    wrong: 'shy'
  },
  {
    en: "He is _____ and wants to be a doctor one day.",
    tr: 'ambitious',
    wrong: 'lonely'
  },
  {
    en: "I felt _____ after I lost my keys.",
    tr: 'upset',
    wrong: 'cheerful'
  },
  {
    en: "My grandmother is always _____ and happy.",
    tr: 'cheerful',
    wrong: 'pessimistic'
  },
  {
    en: "He is very _____ and doesn't like speaking in class.",
    tr: 'shy',
    wrong: 'brave'
  },
  {
    en: "I was _____ when I fell in front of everyone.",
    tr: 'embarrassed',
    wrong: 'relaxed'
  },
  {
    en: "My best friend is very _____ . He never lies.",
    tr: 'honest',
    wrong: 'cruel'
  },
  {
    en: "The dark forest was very _____ at night.",
    tr: 'frightening',
    wrong: 'pleasant'
  },
  {
    en: "She feels _____ because she has no friends here.",
    tr: 'lonely',
    wrong: 'confident'
  },
  {
    en: "I am very _____ for your help.",
    tr: 'grateful',
    wrong: 'annoyed'
  },
  {
    en: "She is a very _____ person. She always helps people.",
    tr: 'kind',
    wrong: 'negative'
  },
  {
    en: "The park is very _____ in the morning.",
    tr: 'peaceful',
    wrong: 'horrible'
  },
  {
    en: "He stayed _____ when the accident happened.",
    tr: 'calm',
    wrong: 'mad'
  },
  {
    en: "My mother is very _____ and makes good decisions.",
    tr: 'sensible',
    wrong: 'silly'
  },
  {
    en: "He is _____ and works very hard every day.",
    tr: 'determined',
    wrong: 'careless'
  },
  {
    en: "She is a very _____ singer.",
    tr: 'talented',
    wrong: 'unpleasant'
  },
  {
    en: "I feel _____ after sleeping for 8 hours.",
    tr: 'relaxed',
    wrong: 'frightened'
  },
  {
    en: "The food was _____ . I didn't like it.",
    tr: 'unpleasant',
    wrong: 'positive'
  },
  {
    en: "He was very _____ when he got the job.",
    tr: 'proud',
    wrong: 'disappointed'
  },
  {
    en: "Don't be _____ ! Everything will be okay.",
    tr: 'pessimistic',
    wrong: 'gentle'
  }
],

// ─────────────────────── QUIZ 10 — Crime, Law & Government (1) ───────────────────────
[
  { en: 'arrest',       tr: 'həbs etmək',        wrong: 'tutmaq',        wen: 'release',       def: 'to take someone to the police station because they may have committed a crime' },
  { en: 'authority',    tr: 'səlahiyyət',        wrong: 'hökumət',       wen: 'freedom',       def: 'the power to make decisions and control people' },
  { en: 'ban',          tr: 'qadağan etmək',     wrong: 'məhdudlaşdırmaq', wen: 'allow',       def: 'to officially say that something is not permitted' },
  { en: 'campaign',     tr: 'kampaniya',         wrong: 'seçki',         wen: 'holiday',       def: 'a planned series of activities to achieve a goal' },
  { en: 'candidate',    tr: 'namizəd',           wrong: 'deputat',       wen: 'voter',         def: 'a person who is trying to be elected' },
  { en: 'court',        tr: 'məhkəmə',           wrong: 'hökumət',       wen: 'school',        def: 'the place where legal cases are judged' },
  { en: 'election',     tr: 'seçki',             wrong: 'referendum',    wen: 'festival',      def: 'the process of choosing a government by voting' },
  { en: 'evidence',     tr: 'sübut',             wrong: 'şahid',         wen: 'opinion',       def: 'facts or information that prove something' },
  { en: 'guilty',       tr: 'günahkar',          wrong: 'şübhəli',       wen: 'innocent',      def: 'having done something illegal' },
  { en: 'illegal',      tr: 'qanunsuz',          wrong: 'cinayətkar',    wen: 'normal',        def: 'not allowed by the law' },
  { en: 'innocent',     tr: 'günahsız',          wrong: 'azad',          wen: 'guilty',        def: 'not having done anything wrong' },
  { en: 'investigate',  tr: 'araşdırmaq',        wrong: 'sorğu keçirmək', wen: 'ignore',        def: 'to try to find out the truth about something' },
  { en: 'judge',        tr: 'hakim',             wrong: 'prokuror',      wen: 'doctor',        def: 'the person who makes decisions in a court' },
  { en: 'legal',        tr: 'qanuni',            wrong: 'rəsmi',         wen: 'illegal',       def: 'allowed by the law' },
  { en: 'official',     tr: 'rəsmi',             wrong: 'hüquqi',        wen: 'private',       def: 'connected with government or authority' },
  { en: 'politician',   tr: 'siyasətçi',         wrong: 'deputat',       wen: 'scientist',     def: 'a person who works in politics' },
  { en: 'prison',       tr: 'həbsxana',          wrong: 'polis bölməsi', wen: 'hospital',      def: 'a building where criminals are kept as punishment' },
  { en: 'punishment',   tr: 'cəza',              wrong: 'həbs',          wen: 'reward',        def: 'something bad given to someone who has done wrong' },
  { en: 'victim',       tr: 'qurban',            wrong: 'şahid',         wen: 'criminal',      def: 'a person who has been hurt or suffered' },
  { en: 'vote',         tr: 'səs vermək',        wrong: 'seçmək',        wen: 'buy',           def: 'to choose someone in an election' }
],

// ─────────────────────── QUIZ 11 — Crime, Law & Government (2) ───────────────────────
[
  { en: 'bomb',         tr: 'bomba',             wrong: 'silah',         wen: 'gift',          def: 'an explosive device used in attacks' },
  { en: 'claim',        tr: 'iddia etmək',       wrong: 'bildirmək',     wen: 'deny',          def: 'to say that something is true' },
  { en: 'explosion',    tr: 'partlayış',         wrong: 'yanğın',        wen: 'party',         def: 'a loud event when a bomb goes off' },
  { en: 'force',        tr: 'güc',               wrong: 'zorakılıq',     wen: 'peace',         def: 'physical strength or violence' },
  { en: 'guard',        tr: 'mühafizəçi',        wrong: 'polis',         wen: 'teacher',       def: 'a person who protects a place or person' },
  { en: 'killing',      tr: 'öldürmə',           wrong: 'cinayət',       wen: 'saving',        def: 'the act of causing someone’s death' },
  { en: 'murder',       tr: 'qətl',              wrong: 'hücum',         wen: 'accident',      def: 'the crime of killing someone deliberately' },
  { en: 'policy',       tr: 'siyasət',           wrong: 'qanun',         wen: 'hobby',         def: 'a plan of action by a government or company' },
  { en: 'political',    tr: 'siyasi',            wrong: 'hüquqi',        wen: 'medical',       def: 'connected with politics and government' },
  { en: 'politics',     tr: 'siyasət',           wrong: 'idarəetmə',     wen: 'sport',         def: 'the activities of government and power' },
  { en: 'protest',      tr: 'etiraz',            wrong: 'nümayiş',       wen: 'party',         def: 'a public demonstration against something' },
  { en: 'punish',       tr: 'cəzalandırmaq',     wrong: 'məhkum etmək',  wen: 'reward',        def: 'to make someone suffer for doing wrong' },
  { en: 'rifle',        tr: 'tüfəng',            wrong: 'tapança',       wen: 'knife',         def: 'a long gun used by soldiers' },
  { en: 'security',     tr: 'təhlükəsizlik',     wrong: 'mühafizə',      wen: 'freedom',       def: 'protection from danger or crime' },
  { en: 'state',        tr: 'dövlət',            wrong: 'hökumət',       wen: 'family',        def: 'an organized political community' },
  { en: 'violent',      tr: 'zorakı',            wrong: 'təhlükəli',     wen: 'peaceful',      def: 'using or involving physical force' },
  { en: 'warning',      tr: 'xəbərdarlıq',       wrong: 'təhdid',        wen: 'invitation',    def: 'telling someone about possible danger' },
  { en: 'weapon',       tr: 'silah',             wrong: 'alət',          wen: 'tool',          def: 'an object used for fighting or attacking' },
  { en: 'protest',      tr: 'etiraz etmək',      wrong: 'nümayiş etmək', wen: 'celebrate',     def: 'to show strong disagreement in public' },
  { en: 'illegal',      tr: 'qanunsuz',          wrong: 'yasaq',         wen: 'normal',        def: 'against the law' }
],
      // ─────────────────────── QUIZ 12 — War, Conflict & Danger ───────────────────────
[
  { en: 'battle',       tr: 'döyüş',             wrong: 'müharibə',      wen: 'party',         def: 'a fight between two armies' },
  { en: 'bomb',         tr: 'bomba',             wrong: 'silah',         wen: 'present',       def: 'an explosive device' },
  { en: 'burst',        tr: 'partlamaq',         wrong: 'yanmaq',        wen: 'grow',          def: 'to break open suddenly' },
  { en: 'enemy',        tr: 'düşmən',            wrong: 'rəqib',         wen: 'friend',        def: 'a person or country you are fighting against' },
  { en: 'explode',      tr: 'partlamaq',         wrong: 'yanmaq',        wen: 'build',         def: 'to burst with a loud noise' },
  { en: 'explosion',    tr: 'partlayış',         wrong: 'yanğın',        wen: 'celebration',   def: 'a sudden loud event caused by a bomb' },
  { en: 'fighting',     tr: 'döyüşmə',           wrong: 'müqavimət',     wen: 'cooperation',   def: 'the act of fighting in a war or argument' },
  { en: 'guard',        tr: 'mühafizəçi',        wrong: 'əsgər',         wen: 'student',       def: 'a person who protects something' },
  { en: 'hunt',         tr: 'ov etmək',          wrong: 'izləmək',       wen: 'help',          def: 'to chase and catch wild animals' },
  { en: 'military',     tr: 'hərbi',             wrong: 'siyasi',        wen: 'educational',   def: 'connected with soldiers and war' },
  { en: 'protest',      tr: 'etiraz',            wrong: 'nümayiş',       wen: 'festival',      def: 'a public demonstration against something' },
  { en: 'risk',         tr: 'risk',              wrong: 'təhlükə',       wen: 'safety',        def: 'the possibility of something bad happening' },
  { en: 'shoot',        tr: 'atəş açmaq',        wrong: 'vurmaq',        wen: 'help',          def: 'to fire a gun' },
  { en: 'slam',         tr: 'şiddətlə vurmaq',   wrong: 'itələmək',      wen: 'open',          def: 'to close something with great force' },
  { en: 'slap',         tr: 'şillə vurmaq',      wrong: 'yumruqlamaq',   wen: 'hug',           def: 'to hit someone with your open hand' },
  { en: 'sword',        tr: 'qılınc',            wrong: 'xəncər',        wen: 'pen',           def: 'a long metal weapon used for fighting' },
  { en: 'warn',         tr: 'xəbərdarlıq etmək', wrong: 'qorxutmaq',     wen: 'praise',        def: 'to tell someone about possible danger' },
  { en: 'warning',      tr: 'xəbərdarlıq',       wrong: 'təhdid',        wen: 'invitation',    def: 'a message about possible danger' },
  { en: 'weapon',       tr: 'silah',             wrong: 'alət',          wen: 'tool',          def: 'an object used for fighting' },
  { en: 'force',        tr: 'güc',               wrong: 'zorakılıq',     wen: 'peace',         def: 'physical power or violence' }
],

      // ─────────────────────── EXAM 4 — Crime, Law & Conflict ───────────────────────
[
  {
    en: "The police decided to _____ the suspect after finding new evidence.",
    tr: 'arrest',
    wrong: 'protest'
  },
  {
    en: "The _____ said that the man was not guilty.",
    tr: 'judge',
    wrong: 'weapon'
  },
  {
    en: "It is _____ to sell cigarettes to children.",
    tr: 'illegal',
    wrong: 'political'
  },
  {
    en: "The court found him _____ of the crime.",
    tr: 'guilty',
    wrong: 'official'
  },
  {
    en: "Many people believe he is _____ , even though he is in prison.",
    tr: 'innocent',
    wrong: 'military'
  },
  {
    en: "The government started a big _____ against smoking.",
    tr: 'campaign',
    wrong: 'explosion'
  },
  {
    en: "The police are still _____ the murder.",
    tr: 'investigating',
    wrong: 'voting'
  },
  {
    en: "There was a big _____ in the city centre yesterday.",
    tr: 'protest',
    wrong: 'prison'
  },
  {
    en: "The country has very strict gun _____ .",
    tr: 'laws',
    wrong: 'candidates'
  },
  {
    en: "He was sent to _____ for five years.",
    tr: 'prison',
    wrong: 'election'
  },
  {
    en: "The terrorist left a _____ in the building.",
    tr: 'bomb',
    wrong: 'authority'
  },
  {
    en: "The police need more _____ before they can arrest him.",
    tr: 'evidence',
    wrong: 'battle'
  },
  {
    en: "The president is an important political _____ .",
    tr: 'leader',
    wrong: 'victim'
  },
  {
    en: "The two countries are in a serious political _____ .",
    tr: 'conflict',
    wrong: 'court'
  },
  {
    en: "Many soldiers died during the _____ .",
    tr: 'battle',
    wrong: 'warning'
  },
  {
    en: "The government has the _____ to change the law.",
    tr: 'authority',
    wrong: 'explosion'
  },
  {
    en: "The man used a gun as a _____ during the robbery.",
    tr: 'weapon',
    wrong: 'punishment'
  },
  {
    en: "She was the main _____ in the car accident.",
    tr: 'victim',
    wrong: 'guard'
  },
  {
    en: "The police gave a serious _____ about the dangerous man.",
    tr: 'warning',
    wrong: 'election'
  },
  {
    en: "The new law will come into effect after the next _____ .",
    tr: 'election',
    wrong: 'bomb'
  }
],
      
// ─────────────────────── QUIZ 13 — Travel & Transport ───────────────────────
[
  { en: 'accommodation', tr: 'yaşayış yeri',     wrong: 'otel',           wen: 'restaurant',    def: 'a place where you can stay or live temporarily' },
  { en: 'booking',      tr: 'rezervasiya',       wrong: 'bilet',          wen: 'ticket',        def: 'an arrangement to reserve a room or seat' },
  { en: 'border',       tr: 'sərhəd',            wrong: 'keçid',          wen: 'bridge',        def: 'the official line between two countries' },
  { en: 'departure',    tr: 'yola düşmə',        wrong: 'enmə',           wen: 'arrival',       def: 'the act of leaving a place' },
  { en: 'destination',  tr: 'təyinat yeri',      wrong: 'marşrut',        wen: 'price',         def: 'the place you are travelling to' },
  { en: 'entrance',     tr: 'giriş',             wrong: 'çıxış',          wen: 'exit',          def: 'the door or gate where you enter a building' },
  { en: 'expedition',   tr: 'ekspedisiya',       wrong: 'səyahət',        wen: 'holiday',       def: 'a long and difficult journey for a purpose' },
  { en: 'flight',       tr: 'uçuş',              wrong: 'səyahət',        wen: 'meeting',       def: 'a journey by plane' },
  { en: 'guide',        tr: 'bələdçi',           wrong: 'turist',         wen: 'driver',        def: 'a person who shows tourists around' },
  { en: 'helicopter',   tr: 'vertolyot',         wrong: 'təyyarə',        wen: 'bus',           def: 'a flying vehicle with rotating blades' },
  { en: 'journey',      tr: 'səyahət',           wrong: 'gəzinti',        wen: 'meeting',       def: 'a trip from one place to another' },
  { en: 'luggage',      tr: 'baqaj',             wrong: 'çanta',          wen: 'clothes',       def: 'bags and suitcases you take on a trip' },
  { en: 'port',         tr: 'liman',             wrong: 'hava limanı',    wen: 'school',        def: 'a place where ships load and unload' },
  { en: 'reservation',  tr: 'yer ayırtma',       wrong: 'rezervasiya',    wen: 'menu',          def: 'an arrangement to keep a room or seat for you' },
  { en: 'route',        tr: 'marşrut',           wrong: 'yol',            wen: 'price',         def: 'the way you take to travel somewhere' },
  { en: 'sailor',       tr: 'dənizçi',           wrong: 'kapitan',        wen: 'pilot',         def: 'a person who works on a ship' },
  { en: 'tourism',      tr: 'turizm',            wrong: 'səyahət',        wen: 'business',      def: 'the business of organizing holidays for people' },
  { en: 'trailer',      tr: 'qoşqu',             wrong: 'yük maşını',     wen: 'plane',         def: 'a vehicle pulled behind a car' },
  { en: 'transport',    tr: 'nəqliyyat',         wrong: 'daşıma',         wen: 'education',     def: 'the system of moving people or goods' },
  { en: 'vehicle',      tr: 'nəqliyyat vasitəsi', wrong: 'avtomobil',     wen: 'building',      def: 'a machine used for transporting people or goods' }
],

// ─────────────────────── QUIZ 14 — Nature & Environment + Weather ───────────────────────
[
  { en: 'atmosphere',   tr: 'atmosfer',          wrong: 'hava',          wen: 'ocean',         def: 'the layer of gases that surrounds the Earth' },
  { en: 'climate',      tr: 'iqlim',             wrong: 'hava şəraiti',  wen: 'economy',       def: 'the normal weather conditions in a region' },
  { en: 'cloud',        tr: 'bulud',             wrong: 'duman',         wen: 'stone',         def: 'a mass of water drops floating in the sky' },
  { en: 'countryside',  tr: 'kənd yeri',         wrong: 'dağlıq ərazi',  wen: 'city centre',   def: 'the areas outside cities and towns' },
  { en: 'disaster',     tr: 'fəlakət',           wrong: 'bəla',          wen: 'success',       def: 'a sudden event that causes great damage' },
  { en: 'earthquake',   tr: 'zəlzələ',           wrong: 'daşqın',        wen: 'festival',      def: 'a sudden shaking of the ground' },
  { en: 'environment',  tr: 'ətraf mühit',       wrong: 'təbiət',        wen: 'business',      def: 'the natural world around us' },
  { en: 'environmental',tr: 'ekoloji',           wrong: 'təbii',         wen: 'financial',     def: 'connected with the protection of nature' },
  { en: 'flood',        tr: 'daşqın',            wrong: 'fırtına',       wen: 'party',         def: 'when a lot of water covers dry land' },
  { en: 'fog',          tr: 'duman',             wrong: 'bulud',         wen: 'rain',          def: 'thick cloud near the ground that makes it hard to see' },
  { en: 'forecast',     tr: 'proqnoz',           wrong: 'xəbərdarlıq',   wen: 'story',         def: 'a prediction of future weather' },
  { en: 'freeze',       tr: 'donmaq',            wrong: 'soyumaq',       wen: 'melt',          def: 'to turn into ice because of cold' },
  { en: 'heat',         tr: 'istilik',           wrong: 'hərarət',       wen: 'cold',          def: 'high temperature' },
  { en: 'hurricane',    tr: 'qasırğa',           wrong: 'tufan',         wen: 'festival',      def: 'a very strong and dangerous storm' },
  { en: 'lightning',    tr: 'ildırım',           wrong: 'şimşək',        wen: 'rain',          def: 'a bright flash of electricity in the sky' },
  { en: 'rain',         tr: 'yağış',             wrong: 'dolu',          wen: 'sunshine',      def: 'water that falls from clouds' },
  { en: 'storm',        tr: 'fırtına',           wrong: 'qasırğa',       wen: 'party',         def: 'bad weather with strong winds and rain' },
  { en: 'thunder',      tr: 'göy gurultusu',     wrong: 'ildırım',       wen: 'music',         def: 'the loud noise that comes after lightning' },
  { en: 'weather',      tr: 'hava',              wrong: 'iqlim',         wen: 'economy',       def: 'the condition of the atmosphere at a particular time' },
  { en: 'wind',         tr: 'külək',             wrong: 'fırtına',       wen: 'silence',       def: 'moving air' }
],

// ─────────────────────── QUIZ 15 — Nature & Environment (2) ───────────────────────
[
  { en: 'countryside',  tr: 'kənd yeri',         wrong: 'meşə',          wen: 'city',          def: 'land outside towns and cities' },
  { en: 'deer',         tr: 'maral',             wrong: 'ceyran',        wen: 'lion',          def: 'a large wild animal with antlers' },
  { en: 'flood',        tr: 'daşqın',            wrong: 'zəlzələ',       wen: 'festival',      def: 'when water covers land that is normally dry' },
  { en: 'fog',          tr: 'duman',             wrong: 'çiskin',        wen: 'sunshine',      def: 'thick cloud close to the ground' },
  { en: 'fuel',         tr: 'yanacaq',           wrong: 'enerji',        wen: 'food',          def: 'a substance like petrol used to produce energy' },
  { en: 'grain',        tr: 'taxıl',             wrong: 'dən',           wen: 'fruit',         def: 'the seeds of crops like wheat and rice' },
  { en: 'hurricane',    tr: 'qasırğa',           wrong: 'tufan',         wen: 'party',         def: 'a very violent tropical storm' },
  { en: 'leaf',         tr: 'yarpaq',            wrong: 'budaq',         wen: 'stone',         def: 'the flat green part of a tree or plant' },
  { en: 'mud',          tr: 'palçıq',            wrong: 'torpaq',        wen: 'sand',          def: 'wet earth that is soft and sticky' },
  { en: 'sand',         tr: 'qum',               wrong: 'çınqıl',        wen: 'water',         def: 'very small grains of rock found on beaches' },
  { en: 'seed',         tr: 'toxum',             wrong: 'kök',           wen: 'flower',        def: 'a small object from which a new plant grows' },
  { en: 'soil',         tr: 'torpaq',            wrong: 'palçıq',        wen: 'air',           def: 'the top layer of earth where plants grow' },
  { en: 'spring',       tr: 'yaz',               wrong: 'bulaq',         wen: 'autumn',        def: 'the season after winter' },
  { en: 'whale',        tr: 'balina',            wrong: 'köpək balığı',   wen: 'bird',          def: 'a very large sea animal' },
  { en: 'wool',         tr: 'yun',               wrong: 'ipək',          wen: 'cotton',        def: 'soft material from sheep' },
  { en: 'yard',         tr: 'həyət',             wrong: 'bağ',           wen: 'kitchen',       def: 'an open area around a house' },
  { en: 'atmosphere',   tr: 'atmosfer',          wrong: 'hava qatı',     wen: 'ocean',         def: 'the mixture of gases around the Earth' },
  { en: 'earthquake',   tr: 'zəlzələ',           wrong: 'vulkan',        wen: 'festival',      def: 'a sudden shaking of the Earth’s surface' },
  { en: 'environment',  tr: 'ətraf mühit',       wrong: 'ekosistem',     wen: 'business',      def: 'the natural surroundings where we live' },
  { en: 'disaster',     tr: 'fəlakət',           wrong: 'təhlükə',       wen: 'success',       def: 'a sudden event causing great damage' }
],
// ─────────────────────── EXAM 5 — Travel, Transport & Nature ───────────────────────
[
  {
    en: "We need to find cheap _____ near the beach for our holiday.",
    tr: 'accommodation',
    wrong: 'earthquake'
  },
  {
    en: "I made a _____ for the hotel two months ago.",
    tr: 'booking',
    wrong: 'fog'
  },
  {
    en: "Our final _____ is Rome. We arrive there tomorrow.",
    tr: 'destination',
    wrong: 'soil'
  },
  {
    en: "The plane's _____ was delayed because of bad weather.",
    tr: 'departure',
    wrong: 'deer'
  },
  {
    en: "Don't forget to take your _____ . It's very heavy.",
    tr: 'luggage',
    wrong: 'hurricane'
  },
  {
    en: "We crossed the _____ between Turkey and Georgia.",
    tr: 'border',
    wrong: 'leaf'
  },
  {
    en: "The train follows a beautiful mountain _____.",
    tr: 'route',
    wrong: 'whale'
  },
  {
    en: "A local _____ showed us the old city.",
    tr: 'guide',
    wrong: 'fuel'
  },
  {
    en: "I prefer public _____ because it's cheaper than a taxi.",
    tr: 'transport',
    wrong: 'thunder'
  },
  {
    en: "We saw a big _____ flying over the national park.",
    tr: 'helicopter',
    wrong: 'grain'
  },
  {
    en: "The _____ is changing very fast because of global warming.",
    tr: 'climate',
    wrong: 'reservation'
  },
  {
    en: "There was a terrible _____ last night and many houses were damaged.",
    tr: 'flood',
    wrong: 'sailor'
  },
  {
    en: "The weather _____ says it will rain tomorrow.",
    tr: 'forecast',
    wrong: 'explosion'
  },
  {
    en: "We live in the _____ , far away from the city noise.",
    tr: 'countryside',
    wrong: 'court'
  },
  {
    en: "After the heavy rain, there was a lot of _____ on the road.",
    tr: 'mud',
    wrong: 'election'
  },
  {
    en: "The strong _____ blew down several trees.",
    tr: 'wind',
    wrong: 'campaign'
  },
  {
    en: "Scientists are worried about the natural _____ .",
    tr: 'environment',
    wrong: 'punishment'
  },
  {
    en: "Many tourists come to this country for cultural _____ .",
    tr: 'tourism',
    wrong: 'victim'
  },
  {
    en: "We planted a small _____ in the garden last spring.",
    tr: 'seed',
    wrong: 'bomb'
  },
  {
    en: "The government is trying to protect the local _____ .",
    tr: 'wildlife',
    wrong: 'arrest'
  }
],
      
// ─────────────────────── QUIZ 16 — Science & Materials ───────────────────────
[
  { en: 'chemical',     tr: 'kimyəvi',           wrong: 'fiziki',        wen: 'musical',       def: 'relating to chemistry or chemicals' },
  { en: 'coal',         tr: 'kömür',             wrong: 'neft',          wen: 'water',         def: 'a black rock used as fuel' },
  { en: 'copper',       tr: 'mis',               wrong: 'dəmir',         wen: 'wood',          def: 'a reddish-brown metal used in wires' },
  { en: 'cotton',       tr: 'pambıq',            wrong: 'yun',           wen: 'plastic',       def: 'a soft natural material from plants' },
  { en: 'diamond',      tr: 'almaz',             wrong: 'qızıl',         wen: 'paper',         def: 'a very hard and expensive precious stone' },
  { en: 'engineering',  tr: 'mühəndislik',       wrong: 'texnologiya',   wen: 'medicine',      def: 'the work of designing and building machines and structures' },
  { en: 'fuel',         tr: 'yanacaq',           wrong: 'qaz',           wen: 'food',          def: 'a material like petrol used to produce energy' },
  { en: 'iron',         tr: 'dəmir',             wrong: 'polad',         wen: 'glass',         def: 'a strong metal used for making tools' },
  { en: 'laboratory',   tr: 'laboratoriya',      wrong: 'tədqiqat mərkəzi', wen: 'office',      def: 'a room for doing scientific experiments' },
  { en: 'leather',      tr: 'dəri',              wrong: 'parça',         wen: 'paper',         def: 'material made from animal skin' },
  { en: 'liquid',       tr: 'maye',              wrong: 'qaz',           wen: 'solid',         def: 'a substance that flows like water' },
  { en: 'material',     tr: 'material',          wrong: 'maddə',         wen: 'idea',          def: 'a substance used for making things' },
  { en: 'metal',        tr: 'metal',             wrong: 'mineral',       wen: 'fabric',        def: 'a hard shiny material like iron or gold' },
  { en: 'nuclear',      tr: 'nüvə',              wrong: 'kimyəvi',       wen: 'artistic',      def: 'relating to the energy from atoms' },
  { en: 'powder',       tr: 'toz',               wrong: 'kristal',       wen: 'liquid',        def: 'a dry substance made of very small particles' },
  { en: 'scientific',   tr: 'elmi',              wrong: 'texniki',       wen: 'artistic',      def: 'relating to science and experiments' },
  { en: 'solid',        tr: 'bərk cisim',        wrong: 'maye',          wen: 'gas',           def: 'a hard substance that keeps its shape' },
  { en: 'substance',    tr: 'maddə',             wrong: 'element',       wen: 'emotion',       def: 'a particular type of material' },
  { en: 'technical',    tr: 'texniki',           wrong: 'elmi',          wen: 'emotional',     def: 'relating to practical skills and machines' },
  { en: 'tin',          tr: 'qalay',             wrong: 'mis',           wen: 'wood',          def: 'a soft metal often used for cans' }
],

// ─────────────────────── QUIZ 17 — Health & Body ───────────────────────
[
  { en: 'breath',       tr: 'nəfəs',             wrong: 'ürək döyüntüsü', wen: 'thought',       def: 'the air that goes in and out of your lungs' },
  { en: 'breathe',      tr: 'nəfəs almaq',       wrong: 'udmaq',         wen: 'eat',           def: 'to take air into your lungs' },
  { en: 'breathing',    tr: 'tənəffüs',          wrong: 'nəbz',          wen: 'sleeping',      def: 'the process of taking air in and out' },
  { en: 'chest',        tr: 'sinə',              wrong: 'qarın',         wen: 'back',          def: 'the front part of your body between your neck and waist' },
  { en: 'emergency',    tr: 'təcili yardım',     wrong: 'xəstəxana',     wen: 'meeting',       def: 'a sudden dangerous situation needing immediate help' },
  { en: 'fitness',      tr: 'fiziki forma',      wrong: 'sağlamlıq',     wen: 'wealth',        def: 'the state of being physically healthy and strong' },
  { en: 'health',       tr: 'sağlamlıq',         wrong: 'güc',           wen: 'money',         def: 'the condition of your body and mind' },
  { en: 'illness',      tr: 'xəstəlik',          wrong: 'əziyyət',       wen: 'success',       def: 'a disease or period of being ill' },
  { en: 'injure',       tr: 'yaralamaq',         wrong: 'incitmək',      wen: 'help',          def: 'to hurt a part of your body' },
  { en: 'injured',      tr: 'yaralı',            wrong: 'xəstə',         wen: 'healthy',       def: 'physically hurt' },
  { en: 'medicine',     tr: 'dərman',            wrong: 'müalicə',       wen: 'food',          def: 'a substance used to treat illness' },
  { en: 'mental',       tr: 'zehni',             wrong: 'emosional',     wen: 'physical',      def: 'relating to the mind' },
  { en: 'muscle',       tr: 'əzələ',             wrong: 'sümük',         wen: 'skin',          def: 'the soft part under your skin that helps you move' },
  { en: 'pain',         tr: 'ağrı',              wrong: 'əzab',          wen: 'pleasure',      def: 'the feeling when part of your body hurts' },
  { en: 'painful',      tr: 'ağrılı',            wrong: 'ciddi',         wen: 'pleasant',      def: 'causing pain' },
  { en: 'symptom',      tr: 'simptom',           wrong: 'diaqnoz',       wen: 'medicine',      def: 'a sign of an illness' },
  { en: 'throat',       tr: 'boğaz',             wrong: 'ağız',          wen: 'ear',           def: 'the passage at the back of your mouth' },
  { en: 'tongue',       tr: 'dil',               wrong: 'dodaq',         wen: 'nose',          def: 'the soft part in your mouth used for tasting' },
  { en: 'treat',        tr: 'müalicə etmək',     wrong: 'baxmaq',        wen: 'ignore',        def: 'to give medical care to someone' },
  { en: 'treatment',    tr: 'müalicə',           wrong: 'əməliyyat',      wen: 'operation',     def: 'the process of treating an illness' }
],

// ─────────────────────── QUIZ 18 — Food & Cooking + House ───────────────────────
[
  { en: 'alcohol',      tr: 'spirt',             wrong: 'şərab',         wen: 'water',         def: 'drinks like beer and wine that contain ethanol' },
  { en: 'alcoholic',    tr: 'spirtli',           wrong: 'zərərli',        wen: 'healthy',       def: 'containing alcohol' },
  { en: 'appliance',    tr: 'məişət texnikası',  wrong: 'avadanlıq',     wen: 'furniture',     def: 'a machine used in the home like a fridge' },
  { en: 'bake',         tr: 'bişirmək',          wrong: 'qızartmaq',     wen: 'boil',          def: 'to cook food in an oven' },
  { en: 'bedroom',      tr: 'yataq otağı',       wrong: 'oturma otağı',  wen: 'kitchen',       def: 'the room where you sleep' },
  { en: 'cloth',        tr: 'parça',             wrong: 'geyim',         wen: 'metal',         def: 'material made of fabric' },
  { en: 'cooking',      tr: 'bişirmə',           wrong: 'yemək',         wen: 'eating',        def: 'preparing food by heating it' },
  { en: 'cottage',      tr: 'kiçik ev',          wrong: 'villa',         wen: 'office',        def: 'a small house in the countryside' },
  { en: 'flour',        tr: 'un',                wrong: 'nişasta',       wen: 'sugar',         def: 'powder made from wheat used for bread' },
  { en: 'fry',          tr: 'qızartmaq',         wrong: 'bişirmək',      wen: 'bake',          def: 'to cook food in hot oil' },
  { en: 'honey',        tr: 'bal',               wrong: 'şəkər',         wen: 'salt',          def: 'sweet substance made by bees' },
  { en: 'ingredient',   tr: 'inqredient',        wrong: 'resept',        wen: 'tool',          def: 'one of the foods you need to make a dish' },
  { en: 'kitchen',      tr: 'mətbəx',            wrong: 'yemək otağı',   wen: 'bedroom',       def: 'the room where food is prepared' },
  { en: 'meal',         tr: 'yemək',             wrong: 'xörək',         wen: 'drink',         def: 'food eaten at one time' },
  { en: 'mixture',      tr: 'qarışıq',           wrong: 'məhlul',        wen: 'single',        def: 'a combination of different things' },
  { en: 'pan',          tr: 'tava',              wrong: 'qazan',         wen: 'bowl',          def: 'a shallow metal container for frying' },
  { en: 'pot',          tr: 'qazan',             wrong: 'tava',          wen: 'cup',           def: 'a deep container for cooking soup' },
  { en: 'recipe',       tr: 'resept',            wrong: 'inqredient',    wen: 'menu',          def: 'instructions for cooking a dish' },
  { en: 'slice',        tr: 'dilim',             wrong: 'parça',         wen: 'whole',         def: 'a thin flat piece cut from something' },
  { en: 'spicy',        tr: 'ədviyyatlı',        wrong: 'acı',           wen: 'sweet',         def: 'having a strong hot taste' }
],

      // ─────────────────────── EXAM 6 — Science, Health, Food & House ───────────────────────
[
  {
    en: "Scientists are doing research in a modern _____ .",
    tr: 'laboratory',
    wrong: 'kitchen'
  },
  {
    en: "Gold and _____ are both very valuable metals.",
    tr: 'copper',
    wrong: 'flour'
  },
  {
    en: "This shirt is made of 100% _____ .",
    tr: 'cotton',
    wrong: 'diamond'
  },
  {
    en: "The doctor gave me some strong _____ for my headache.",
    tr: 'medicine',
    wrong: 'fuel'
  },
  {
    en: "I have a terrible _____ in my throat.",
    tr: 'pain',
    wrong: 'recipe'
  },
  {
    en: "Regular exercise is important for good _____ .",
    tr: 'health',
    wrong: 'powder'
  },
  {
    en: "She injured her _____ while playing football.",
    tr: 'muscle',
    wrong: 'ingredient'
  },
  {
    en: "We need to buy a new washing _____ for the house.",
    tr: 'appliance',
    wrong: 'substance'
  },
  {
    en: "Can you pass me the frying _____ ?",
    tr: 'pan',
    wrong: 'nuclear'
  },
  {
    en: "This soup has a very special _____ .",
    tr: 'ingredient',
    wrong: 'laboratory'
  },
  {
    en: "The cake is still in the _____ . It needs 20 more minutes.",
    tr: 'oven',
    wrong: 'bedroom'
  },
  {
    en: "I prefer _____ food because it's healthier.",
    tr: 'baked',
    wrong: 'illegal'
  },
  {
    en: "The car runs on diesel _____ .",
    tr: 'fuel',
    wrong: 'chest'
  },
  {
    en: "There was a big _____ accident at the factory.",
    tr: 'chemical',
    wrong: 'throat'
  },
  {
    en: "Iron is a very strong _____ .",
    tr: 'metal',
    wrong: 'meal'
  },
  {
    en: "My doctor says I have a serious _____ problem.",
    tr: 'mental',
    wrong: 'cotton'
  },
  {
    en: "This dish is quite _____ . I added a lot of pepper.",
    tr: 'spicy',
    wrong: 'solid'
  },
  {
    en: "We sleep in the _____ and cook in the kitchen.",
    tr: 'bedroom',
    wrong: 'explosion'
  },
  {
    en: "The scientist made an important _____ discovery.",
    tr: 'scientific',
    wrong: 'painful'
  },
  {
    en: "Be careful! This liquid is a dangerous _____ .",
    tr: 'substance',
    wrong: 'appliance'
  }
],
      
// ─────────────────────── QUIZ 19 — House & Daily Life ───────────────────────
[
  { en: 'alarm',       tr: 'zəng / siqnal',      wrong: 'saat',          wen: 'music',         def: 'a loud sound that warns you or wakes you up' },
  { en: 'appliance',   tr: 'məişət texnikası',   wrong: 'cihaz',         wen: 'furniture',     def: 'a machine used in the home, like a washing machine' },
  { en: 'battery',     tr: 'batareya',           wrong: 'şarj',          wen: 'key',           def: 'a device that stores energy for phones and toys' },
  { en: 'bedroom',     tr: 'yataq otağı',        wrong: 'hamam',         wen: 'kitchen',       def: 'the room where you sleep' },
  { en: 'ceiling',     tr: 'tavan',              wrong: 'döşəmə',        wen: 'wall',          def: 'the surface above you in a room' },
  { en: 'cloth',       tr: 'parça',              wrong: 'yorğan',        wen: 'metal',         def: 'material made of fabric' },
  { en: 'cottage',     tr: 'kiçik ev',           wrong: 'mənzil',        wen: 'office',        def: 'a small house, usually in the countryside' },
  { en: 'curtain',     tr: 'pərdə',              wrong: 'jalüz',         wen: 'carpet',        def: 'a piece of cloth that covers a window' },
  { en: 'fence',       tr: 'hasar',              wrong: 'divar',         wen: 'roof',          def: 'a structure that surrounds a garden' },
  { en: 'furniture',   tr: 'mebel',              wrong: 'dekor',         wen: 'food',          def: 'tables, chairs, beds and other items in a house' },
  { en: 'garage',      tr: 'qaraj',              wrong: 'anbar',         wen: 'kitchen',       def: 'a building where you keep a car' },
  { en: 'heating',     tr: 'isitmə',             wrong: 'ventilyasiya',  wen: 'lighting',      def: 'the system that makes a house warm' },
  { en: 'household',   tr: 'ev təsərrüfatı',     wrong: 'ailə',          wen: 'company',       def: 'all the people living in one house' },
  { en: 'kitchen',     tr: 'mətbəx',             wrong: 'hamam',         wen: 'bedroom',       def: 'the room where food is prepared' },
  { en: 'living',      tr: 'oturma otağı',       wrong: 'yataq otağı',   wen: 'bathroom',      def: 'the main room where the family spends time' },
  { en: 'pan',         tr: 'tava',               wrong: 'qab',           wen: 'chair',         def: 'a shallow metal container for frying' },
  { en: 'pipe',        tr: 'boru',               wrong: 'kabel',         wen: 'door',          def: 'a tube that carries water or gas' },
  { en: 'pot',         tr: 'qazan',              wrong: 'tava',          wen: 'cup',           def: 'a deep container for cooking soup' },
  { en: 'shelf',       tr: 'rəf',                wrong: 'stend',         wen: 'table',         def: 'a flat surface on a wall for storing things' },
  { en: 'underwear',   tr: 'alt paltarı',        wrong: 'corab',         wen: 'coat',          def: 'clothes worn under other clothes' }
],

// ─────────────────────── QUIZ 20 — Family, Relationships & Society ───────────────────────
[
  { en: 'bride',        tr: 'gəlin',             wrong: 'nişanlı',       wen: 'teacher',       def: 'a woman on her wedding day' },
  { en: 'childhood',    tr: 'uşaqlıq',           wrong: 'gənclik',       wen: 'old age',       def: 'the time when you are a child' },
  { en: 'community',    tr: 'icma',              wrong: 'cəmiyyət',      wen: 'family',        def: 'a group of people living in the same area' },
  { en: 'engaged',      tr: 'nişanlı',           wrong: 'evli',          wen: 'single',        def: 'having agreed to get married' },
  { en: 'family',       tr: 'ailə',              wrong: 'nəsil',         wen: 'company',       def: 'a group of people related by blood or marriage' },
  { en: 'friendship',   tr: 'dostluq',           wrong: 'qardaşlıq',     wen: 'competition',   def: 'a close relationship between friends' },
  { en: 'generation',   tr: 'nəsil',             wrong: 'dövr',          wen: 'country',       def: 'all people born at about the same time' },
  { en: 'marriage',     tr: 'evlilik',           wrong: 'nişan',         wen: 'job',           def: 'the legal relationship between husband and wife' },
  { en: 'neighbour',    tr: 'qonşu',             wrong: 'tanış',         wen: 'stranger',      def: 'a person who lives near you' },
  { en: 'neighbourhood',tr: 'məhəllə',           wrong: 'rayon',         wen: 'city',          def: 'an area where people live' },
  { en: 'relative',     tr: 'qohum',             wrong: 'tanış',         wen: 'friend',        def: 'a member of your family' },
  { en: 'relationship', tr: 'münasibət',         wrong: 'dostluq',       wen: 'business',      def: 'the way people are connected to each other' },
  { en: 'religion',     tr: 'din',               wrong: 'inanc',         wen: 'sport',         def: 'a system of belief and worship' },
  { en: 'religious',    tr: 'dini',              wrong: 'mənəvi',        wen: 'scientific',    def: 'connected with religion' },
  { en: 'romance',      tr: 'romantika',         wrong: 'sevgi',         wen: 'friendship',    def: 'a loving relationship' },
  { en: 'romantic',     tr: 'romantik',          wrong: 'həssas',        wen: 'practical',     def: 'showing love in a sentimental way' },
  { en: 'social',       tr: 'sosial',            wrong: 'ictimai',       wen: 'personal',      def: 'relating to society and people' },
  { en: 'society',      tr: 'cəmiyyət',          wrong: 'icma',          wen: 'family',        def: 'all the people in a country or area' },
  { en: 'tradition',    tr: 'ənənə',             wrong: 'adət',          wen: 'fashion',       def: 'a custom passed down through generations' },
  { en: 'youth',        tr: 'gənclik',           wrong: 'uşaqlıq',       wen: 'old age',       def: 'the time when you are young' }
],
      
      // ─────────────────────── EXAM 8 — House, Family & Society ───────────────────────
[
  {
    en: "We bought new _____ for our living room last weekend.",
    tr: 'furniture',
    wrong: 'bride'
  },
  {
    en: "The _____ in my bedroom is very high.",
    tr: 'ceiling',
    wrong: 'neighbourhood'
  },
  {
    en: "Please close the _____ , the sun is too bright.",
    tr: 'curtain',
    wrong: 'generation'
  },
  {
    en: "My grandparents live in a small _____ in the village.",
    tr: 'cottage',
    wrong: 'relationship'
  },
  {
    en: "The central _____ in this building is very old.",
    tr: 'heating',
    wrong: 'tradition'
  },
  {
    en: "She is my closest _____ . We grew up together.",
    tr: 'relative',
    wrong: 'garage'
  },
  {
    en: "They got married last year. She was a beautiful _____.",
    tr: 'bride',
    wrong: 'shelf'
  },
  {
    en: "I spent a very happy _____ in this house.",
    tr: 'childhood',
    wrong: 'appliance'
  },
  {
    en: "We live in a quiet _____ on the edge of the city.",
    tr: 'neighbourhood',
    wrong: 'marriage'
  },
  {
    en: "The whole _____ helped us when our house flooded.",
    tr: 'community',
    wrong: 'pot'
  },
  {
    en: "They have a very strong _____ after 30 years together.",
    tr: 'relationship',
    wrong: 'fence'
  },
  {
    en: "My brother and his girlfriend are _____ . They plan to marry soon.",
    tr: 'engaged',
    wrong: 'battery'
  },
  {
    en: "Different _____ often have different traditions.",
    tr: 'cultures',
    wrong: 'alarm'
  },
  {
    en: "The old _____ in the kitchen is broken again.",
    tr: 'appliance',
    wrong: 'romance'
  },
  {
    en: "We need to put up new _____ in the living room.",
    tr: 'curtains',
    wrong: 'society'
  },
  {
    en: "She comes from a very religious _____.",
    tr: 'family',
    wrong: 'shelf'
  },
  {
    en: "There is a high wooden _____ around the garden.",
    tr: 'fence',
    wrong: 'youth'
  },
  {
    en: "Modern _____ is very different from the past.",
    tr: 'society',
    wrong: 'pipe'
  },
  {
    en: "This song is about young love and _____.",
    tr: 'romance',
    wrong: 'garage'
  },
  {
    en: "The _____ clock woke me up at 6 o'clock this morning.",
    tr: 'alarm',
    wrong: 'religion'
  }
],

// ─────────────────────── QUIZ 21 — Art, Culture & Entertainment ───────────────────────
[
  { en: 'album',        tr: 'albom',             wrong: 'disk',          wen: 'novel',         def: 'a collection of songs released together' },
  { en: 'celebration',  tr: 'bayram',            wrong: 'mərasim',       wen: 'meeting',       def: 'a special event when people are happy' },
  { en: 'ceremony',     tr: 'mərasim',           wrong: 'tədbirlər',     wen: 'game',          def: 'a formal event like a wedding or graduation' },
  { en: 'cultural',     tr: 'mədəni',            wrong: 'ənənəvi',       wen: 'scientific',    def: 'related to the culture of a society' },
  { en: 'culture',      tr: 'mədəniyyət',        wrong: 'ənənə',         wen: 'economy',       def: 'the customs, arts and way of life of a society' },
  { en: 'entertainment',tr: 'əyləncə',           wrong: 'şou',           wen: 'work',          def: 'things that amuse or interest people' },
  { en: 'exhibition',   tr: 'sərgi',             wrong: 'muzey',         wen: 'hospital',      def: 'a public display of art or objects' },
  { en: 'fashion',      tr: 'moda',              wrong: 'stil',          wen: 'sport',         def: 'popular styles of clothing' },
  { en: 'fashionable',  tr: 'dəbli',             wrong: 'gözəl',         wen: 'old-fashioned', def: 'popular and modern in style' },
  { en: 'gig',          tr: 'konsert',           wrong: 'festival',      wen: 'lecture',       def: 'a live performance by a musician or band' },
  { en: 'magic',        tr: 'sehrli',            wrong: 'möcüzə',        wen: 'normal',        def: 'the art of doing tricks that seem impossible' },
  { en: 'performance',  tr: 'çıxış',             wrong: 'tamaşa',        wen: 'exam',          def: 'acting, singing or playing in front of an audience' },
  { en: 'poem',         tr: 'şeir',              wrong: 'hekayə',        wen: 'essay',         def: 'a piece of writing with short lines and rhythm' },
  { en: 'poet',         tr: 'şair',              wrong: 'yazıçı',        wen: 'scientist',     def: 'a person who writes poems' },
  { en: 'poetry',       tr: 'şeir sənəti',       wrong: 'ədəbiyyat',     wen: 'sport',         def: 'the art of writing poems' },
  { en: 'portrait',     tr: 'portret',           wrong: 'rəsm',          wen: 'map',           def: 'a painting or photo of a person' },
  { en: 'sculpture',    tr: 'heykəl',            wrong: 'rəsm',          wen: 'song',          def: 'a work of art made by carving or shaping materials' },
  { en: 'studio',       tr: 'studiya',           wrong: 'atelye',        wen: 'kitchen',       def: 'a room where artists or musicians work' },
  { en: 'theme',        tr: 'mövzu',             wrong: 'fikir',         wen: 'price',         def: 'the main subject or idea in a work of art' },
  { en: 'photography',  tr: 'fotoqrafiya',       wrong: 'rəssamlıq',     wen: 'cooking',       def: 'the art of taking and making photographs' }
],

// ─────────────────────── QUIZ 22 — Sports & Fitness ───────────────────────
[
  { en: 'athlete',      tr: 'atlet',             wrong: 'idmançı',       wen: 'scientist',     def: 'a person who competes in sports' },
  { en: 'captain',      tr: 'kapitan',           wrong: 'məşqçi',        wen: 'passenger',     def: 'the leader of a sports team' },
  { en: 'champion',     tr: 'çempion',           wrong: 'qalib',         wen: 'student',       def: 'the winner of a competition' },
  { en: 'challenge',    tr: 'çağırış',           wrong: 'rəqabət',       wen: 'holiday',       def: 'something difficult that tests your ability' },
  { en: 'coach',        tr: 'məşqçi',            wrong: 'kapitan',       wen: 'customer',      def: 'a person who trains athletes' },
  { en: 'competition',  tr: 'yarış',             wrong: 'turnir',        wen: 'meeting',       def: 'an event where people try to win' },
  { en: 'competitive',  tr: 'rəqabətli',         wrong: 'güclü',         wen: 'relaxed',       def: 'determined to be better than others' },
  { en: 'fitness',      tr: 'fiziki forma',      wrong: 'sağlamlıq',     wen: 'wealth',        def: 'the state of being physically healthy and strong' },
  { en: 'muscle',       tr: 'əzələ',             wrong: 'güc',           wen: 'brain',         def: 'the soft tissue in your body that helps you move' },
  { en: 'performance',  tr: 'nəticə',            wrong: 'göstərici',     wen: 'price',         def: 'how well someone does in a sport' },
  { en: 'race',         tr: 'qaçış yarışı',      wrong: 'turnir',        wen: 'party',         def: 'a competition to see who is fastest' },
  { en: 'racing',       tr: 'yarış',             wrong: 'sprint',        wen: 'reading',       def: 'the sport of competing in races' },
  { en: 'rugby',        tr: 'reqbi',             wrong: 'amerikan futbolu', wen: 'chess',      def: 'a team sport played with an oval ball' },
  { en: 'speed',        tr: 'sürət',             wrong: 'güc',           wen: 'price',         def: 'how fast someone or something moves' },
  { en: 'stadium',      tr: 'stadion',           wrong: 'arena',         wen: 'hospital',      def: 'a large building where people watch sports' },
  { en: 'strength',     tr: 'güc',               wrong: 'enerji',        wen: 'weakness',      def: 'physical power' },
  { en: 'supporter',    tr: 'azarkeş',           wrong: 'tamaşaçı',      wen: 'customer',      def: 'a person who supports a sports team' },
  { en: 'talent',       tr: 'istedad',           wrong: 'bacarıq',       wen: 'money',         def: 'a natural ability to do something well' },
  { en: 'training',     tr: 'məşq',              wrong: 'hazırlıq',      wen: 'holiday',       def: 'practice to improve skills in sport' },
  { en: 'victory',      tr: 'qələbə',            wrong: 'nailiyyət',     wen: 'defeat',        def: 'the act of winning a game or competition' }
],

// ─────────────────────── QUIZ 23 — Language & Writing ───────────────────────
[
  { en: 'chapter',      tr: 'fəsil',             wrong: 'bölmə',         wen: 'price',         def: 'one of the main parts of a book' },
  { en: 'comment',      tr: 'şərh',              wrong: 'qeyd',          wen: 'order',         def: 'an opinion or remark about something' },
  { en: 'journal',      tr: 'jurnal',            wrong: 'qəzet',         wen: 'menu',          def: 'a written record of events or a magazine' },
  { en: 'label',        tr: 'etiket',            wrong: 'başlıq',        wen: 'gift',          def: 'a piece of paper with information on a product' },
  { en: 'literature',   tr: 'ədəbiyyat',         wrong: 'sənət',         wen: 'science',       def: 'books, poems and plays as a subject of study' },
  { en: 'narrative',    tr: 'hekayə',            wrong: 'təsvir',        wen: 'fact',          def: 'a story or description of events' },
  { en: 'note',         tr: 'qeyd',              wrong: 'şərh',          wen: 'exam',          def: 'a short written message' },
  { en: 'poem',         tr: 'şeir',              wrong: 'nəsr',          wen: 'essay',         def: 'a piece of writing with rhythm and short lines' },
  { en: 'poetry',       tr: 'şeir sənəti',       wrong: 'nəsr',          wen: 'sport',         def: 'the art of writing poems' },
  { en: 'quote',        tr: 'sitat',             wrong: 'istinad',       wen: 'price',         def: 'a sentence taken from a book or speech' },
  { en: 'quotation',    tr: 'sitat',             wrong: 'ifadə',         wen: 'answer',        def: 'a group of words taken from another source' },
  { en: 'report',       tr: 'hesabat',           wrong: 'məruzə',        wen: 'joke',          def: 'a written or spoken account of events' },
  { en: 'script',       tr: 'ssenari',           wrong: 'mətn',          wen: 'menu',          def: 'the written text of a film or play' },
  { en: 'summarise',    tr: 'xülasə etmək',      wrong: 'tərcümə etmək', wen: 'expand',        def: 'to give a short version of a longer text' },
  { en: 'summary',      tr: 'xülasə',            wrong: 'giriş',         wen: 'detail',        def: 'a short version of a longer piece of writing' },
  { en: 'text',         tr: 'mətn',              wrong: 'sənəd',         wen: 'photo',         def: 'written words' },
  { en: 'topic',        tr: 'mövzu',             wrong: 'başlıq',        wen: 'price',         def: 'the subject of a discussion or text' },
  { en: 'translate',    tr: 'tərcümə etmək',     wrong: 'izah etmək',    wen: 'forget',        def: 'to change text from one language to another' },
  { en: 'translation',  tr: 'tərcümə',           wrong: 'şərh',          wen: 'original',      def: 'a text that has been translated' },
  { en: 'written',      tr: 'yazılı',            wrong: 'çap olunmuş',   wen: 'spoken',        def: 'expressed in writing' }
],
      // ─────────────────────── EXAM 9 — Art, Culture, Sports & Language ───────────────────────
[
  {
    en: "She is a famous _____ and has written more than 10 books of poems.",
    tr: 'poet',
    wrong: 'champion'
  },
  {
    en: "We went to an interesting _____ of modern Turkish painting.",
    tr: 'exhibition',
    wrong: 'training'
  },
  {
    en: "This song is from her latest _____ . It became very popular.",
    tr: 'album',
    wrong: 'stadium'
  },
  {
    en: "The wedding _____ was beautiful and took place in a big hall.",
    tr: 'ceremony',
    wrong: 'race'
  },
  {
    en: "He has a real _____ for playing the guitar.",
    tr: 'talent',
    wrong: 'summary'
  },
  {
    en: "The team showed great _____ in the second half of the match.",
    tr: 'performance',
    wrong: 'fashion'
  },
  {
    en: "She is one of the best _____ in the national team.",
    tr: 'athlete',
    wrong: 'poetry'
  },
  {
    en: "The coach was very angry after the _____ .",
    tr: 'defeat',
    wrong: 'portrait'
  },
  {
    en: "I enjoy reading _____ because it helps me relax.",
    tr: 'poetry',
    wrong: 'competition'
  },
  {
    en: "This dress is very _____ this season.",
    tr: 'fashionable',
    wrong: 'translation'
  },
  {
    en: "The main _____ of the film is friendship and trust.",
    tr: 'theme',
    wrong: 'muscle'
  },
  {
    en: "He is the _____ of our football team.",
    tr: 'captain',
    wrong: 'sculpture'
  },
  {
    en: "We need to write a short _____ of the story.",
    tr: 'summary',
    wrong: 'gig'
  },
  {
    en: "The band gave an amazing _____ last night.",
    tr: 'performance',
    wrong: 'neighbourhood'
  },
  {
    en: "I want to improve my English by reading more _____ .",
    tr: 'literature',
    wrong: 'strength'
  },
  {
    en: "The Olympic _____ takes place every four years.",
    tr: 'games',
    wrong: 'ceremony'
  },
  {
    en: "She studied _____ at university and now works as a translator.",
    tr: 'translation',
    wrong: 'fitness'
  },
  {
    en: "There was a big street _____ to celebrate the victory.",
    tr: 'celebration',
    wrong: 'script'
  },
  {
    en: "Regular _____ is very important for professional athletes.",
    tr: 'training',
    wrong: 'culture'
  },
  {
    en: "The artist painted a beautiful _____ of his wife.",
    tr: 'portrait',
    wrong: 'supporter'
  }
],
      
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 4 — B2: Orta-Aşağı                        ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b2',
    name: 'B2 — UPPER İNTERMEDİATE',
    icon: '🌲',
    color: '#E8A020',
    quizzes: [
      // ─────────────────────── QUIZ 1 — Education & Learning ───────────────────────
[
  { en: 'academic',       tr: 'akademik',            wrong: 'elmi'             },
  { en: 'analysis',       tr: 'təhlil',              wrong: 'araşdırma'        },
  { en: 'analyst',        tr: 'analitik',            wrong: 'tədqiqatçı'       },
  { en: 'assessment',     tr: 'qiymətləndirmə',      wrong: 'imtahan'          },
  { en: 'assignment',     tr: 'tapşırıq',            wrong: 'layihə'           },
  { en: 'campus',         tr: 'kampus',              wrong: 'yataqxana'        },
  { en: 'certificate',    tr: 'sertifikat',          wrong: 'diplom'           },
  { en: 'classroom',      tr: 'sinif otağı',         wrong: 'auditoriya'       },
  { en: 'concentration',  tr: 'diqqət cəmləmə',      wrong: 'anlayış'          },
  { en: 'curriculum',     tr: 'tədris proqramı',     wrong: 'dərslik'          },
  { en: 'deadline',       tr: 'son tarix',           wrong: 'müddət'           },
  { en: 'educate',        tr: 'təhsil vermək',       wrong: 'öyrətmək'         },
  { en: 'examination',    tr: 'imtahan',             wrong: 'test'             },
  { en: 'graduate',       tr: 'məzun olmaq',         wrong: 'oxumaq'           },
  { en: 'intelligence',   tr: 'zəka',                wrong: 'bilik'            },
  { en: 'laboratory',     tr: 'laboratoriya',        wrong: 'sinif otağı'      },
  { en: 'qualification',  tr: 'ixtisas',             wrong: 'sertifikat'       },
  { en: 'scholarship',    tr: 'təqaüd',              wrong: 'kredit'           },
  { en: 'seminar',        tr: 'seminar',             wrong: 'mühazirə'         },
  { en: 'textbook',       tr: 'dərslik',             wrong: 'kitab'            },
],

// ─────────────────────── QUIZ 2 — Personal Development & Skills ───────────────────────
[
  { en: 'ability',        tr: 'qabiliyyət',          wrong: 'bacarıq'          },
  { en: 'accomplish',     tr: 'nail olmaq',          wrong: 'tamamlamaq'       },
  { en: 'accurate',       tr: 'dəqiq',               wrong: 'doğru'            },
  { en: 'accurately',     tr: 'dəqiq şəkildə',       wrong: 'düzgün olaraq'    },
  { en: 'achieve',        tr: 'nail olmaq',          wrong: 'qazanmaq'         },
  { en: 'achievement',    tr: 'nailiyyət',           wrong: 'uğur'             },
  { en: 'adapt',          tr: 'uyğunlaşmaq',         wrong: 'dəyişmək'         },
  { en: 'adjust',         tr: 'tənzimləmək',         wrong: 'uyğunlaşmaq'      },
  { en: 'ambitious',      tr: 'iddialı',             wrong: 'məqsədli'         },
  { en: 'aware',          tr: 'xəbərdar',            wrong: 'diqqətli'         },
  { en: 'awareness',      tr: 'məlumatlılıq',        wrong: 'diqqət'           },
  { en: 'capable',        tr: 'qabiliyyətli',        wrong: 'istedadlı'        },
  { en: 'challenge',      tr: 'çağırış',             wrong: 'çətinlik'         },
  { en: 'concentration',  tr: 'diqqət',              wrong: 'düşüncə'          },
  { en: 'confident',      tr: 'özünə inamlı',        wrong: 'cəsur'            },
  { en: 'creativity',     tr: 'yaradıcılıq',         wrong: 'istedad'          },
  { en: 'determination',  tr: 'qərarlılıq',          wrong: 'iradə'            },
  { en: 'determine',      tr: 'müəyyən etmək',       wrong: 'qərar vermək'     },
  { en: 'develop',        tr: 'inkişaf etdirmək',    wrong: 'dəyişdirmək'      },
  { en: 'improvement',    tr: 'inkişaf',             wrong: 'dəyişiklik'       },
],

// ─────────────────────── QUIZ 3 — Business & Work (1) ───────────────────────
[
  { en: 'accountant',     tr: 'mühasib',             wrong: 'iqtisadçı'        },
  { en: 'administration', tr: 'inzibatçılıq',        wrong: 'idarəetmə'        },
  { en: 'agency',         tr: 'agentlik',            wrong: 'şirkət'           },
  { en: 'applicant',      tr: 'müraciət edən',       wrong: 'namizəd'          },
  { en: 'appointment',    tr: 'görüş',               wrong: 'toplantı'         },
  { en: 'budget',         tr: 'büdcə',               wrong: 'gəlir'            },
  { en: 'career',         tr: 'karyera',             wrong: 'peşə'             },
  { en: 'chairman',       tr: 'sədər',               wrong: 'direktor'         },
  { en: 'client',         tr: 'müştəri',             wrong: 'tərəfdaş'         },
  { en: 'committee',      tr: 'komitə',              wrong: 'şura'             },
  { en: 'company',        tr: 'şirkət',              wrong: 'müəssisə'         },
  { en: 'corporation',    tr: 'korporasiya',         wrong: 'holdinq'          },
  { en: 'deadline',       tr: 'son tarix',           wrong: 'müddət'           },
  { en: 'employment',     tr: 'məşğulluq',           wrong: 'iş yeri'          },
  { en: 'executive',      tr: 'icraçı',              wrong: 'müdir'            },
  { en: 'finance',        tr: 'maliyyə',             wrong: 'büdcə'            },
  { en: 'financial',      tr: 'maliyyə',             wrong: 'iqtisadi'         },
  { en: 'firm',           tr: 'firma',               wrong: 'şirkət'           },
  { en: 'headquarters',   tr: 'baş ofis',            wrong: 'filial'           },
  { en: 'income',         tr: 'gəlir',               wrong: 'əmək haqqı'       },
],

// ─────────────────────── QUIZ 4 — Business & Work (2) ───────────────────────
[
  { en: 'management',     tr: 'idarəetmə',           wrong: 'rəhbərlik'        },
  { en: 'manager',        tr: 'menecer',             wrong: 'direktor'         },
  { en: 'manufacture',    tr: 'istehsal etmək',      wrong: 'hazırlamaq'       },
  { en: 'manufacturing',  tr: 'istehsal',            wrong: 'emal'             },
  { en: 'marketing',      tr: 'marketinq',           wrong: 'reklam'           },
  { en: 'opportunity',    tr: 'fürsət',              wrong: 'imkan'            },
  { en: 'partnership',    tr: 'tərəfdaşlıq',         wrong: 'əməkdaşlıq'       },
  { en: 'profession',     tr: 'peşə',                wrong: 'vəzifə'           },
  { en: 'profit',         tr: 'mənfəət',             wrong: 'gəlir'            },
  { en: 'project',        tr: 'layihə',              wrong: 'plan'             },
  { en: 'promotion',      tr: 'vəzifə yüksəlişi',   wrong: 'reklam'           },
  { en: 'recruit',        tr: 'işə götürmək',        wrong: 'seçmək'           },
  { en: 'salary',         tr: 'maaş',                wrong: 'əmək haqqı'       },
  { en: 'staff',          tr: 'heyət',               wrong: 'işçilər'          },
  { en: 'trade',          tr: 'ticarət',             wrong: 'mübadiləetmə'     },
  { en: 'workforce',      tr: 'işçi qüvvəsi',        wrong: 'heyət'            },
  { en: 'workplace',      tr: 'iş yeri',             wrong: 'ofis'             },
  { en: 'workshop',       tr: 'seminar / emalatxana',wrong: 'konfrans'         },
  { en: 'investment',     tr: 'investisiya',         wrong: 'kapital'          },
  { en: 'investor',       tr: 'investor',            wrong: 'sahibkar'         },
],

// ─────────────────────── QUIZ 5 — Money & Economy ───────────────────────
[
  { en: 'affordable',     tr: 'əlçatan qiymətli',    wrong: 'ucuz'             },
  { en: 'bargain',        tr: 'sövdələşmə',          wrong: 'endirim'          },
  { en: 'budget',         tr: 'büdcə',               wrong: 'xərc'             },
  { en: 'currency',       tr: 'valyuta',             wrong: 'kapital'          },
  { en: 'debt',           tr: 'borc',                wrong: 'kredit'           },
  { en: 'discount',       tr: 'endirim',             wrong: 'bonus'            },
  { en: 'economy',        tr: 'iqtisadiyyat',        wrong: 'maliyyə'          },
  { en: 'expense',        tr: 'xərc',                wrong: 'ödəniş'           },
  { en: 'fee',            tr: 'ödəniş / haqq',       wrong: 'vergi'            },
  { en: 'finance',        tr: 'maliyyə',             wrong: 'iqtisadiyyat'     },
  { en: 'fund',           tr: 'fond',                wrong: 'kapital'          },
  { en: 'income',         tr: 'gəlir',               wrong: 'mənfəət'          },
  { en: 'invest',         tr: 'sərmayə qoymaq',      wrong: 'qazanmaq'         },
  { en: 'loan',           tr: 'kredit',              wrong: 'borc'             },
  { en: 'mortgage',       tr: 'ipoteka',             wrong: 'kredit'           },
  { en: 'payment',        tr: 'ödəniş',              wrong: 'haqq'             },
  { en: 'poverty',        tr: 'yoxsulluq',           wrong: 'işsizlik'         },
  { en: 'profit',         tr: 'mənfəət',             wrong: 'gəlir'            },
  { en: 'revenue',        tr: 'gəlir',               wrong: 'mənfəət'          },
  { en: 'wealth',         tr: 'sərvət',              wrong: 'kapital'          },
],

// ─────────────────────── QUIZ 6 — Technology & Media ───────────────────────
[
  { en: 'broadcast',      tr: 'yayımlamaq',          wrong: 'ötürmək'          },
  { en: 'channel',        tr: 'kanal',               wrong: 'proqram'          },
  { en: 'database',       tr: 'verilənlər bazası',   wrong: 'sistem'           },
  { en: 'digital',        tr: 'rəqəmsal',            wrong: 'elektron'         },
  { en: 'electronics',    tr: 'elektronika',         wrong: 'texnologiya'      },
  { en: 'graphic',        tr: 'qrafik',              wrong: 'şəkil'            },
  { en: 'graphics',       tr: 'qrafika',             wrong: 'dizayn'           },
  { en: 'internet',       tr: 'internet',            wrong: 'şəbəkə'           },
  { en: 'IT',             tr: 'informasiya texnologiyası', wrong: 'süni intellekt' },
  { en: 'keyboard',       tr: 'klaviatura',          wrong: 'monitor'          },
  { en: 'laptop',         tr: 'noutbuk',             wrong: 'planşet'          },
  { en: 'media',          tr: 'media',               wrong: 'mətbuat'          },
  { en: 'network',        tr: 'şəbəkə',              wrong: 'sistem'           },
  { en: 'online',         tr: 'onlayn',              wrong: 'rəqəmsal'         },
  { en: 'software',       tr: 'proqram təminatı',    wrong: 'avadanlıq'        },
  { en: 'studio',         tr: 'studiya',             wrong: 'ofis'             },
  { en: 'technological',  tr: 'texnoloji',           wrong: 'elmi'             },
  { en: 'update',         tr: 'yeniləmək',           wrong: 'qurmaq'           },
  { en: 'version',        tr: 'versiya',             wrong: 'nüsxə'            },
  { en: 'website',        tr: 'vebsayt',             wrong: 'proqram'          },
],

// ─────────────────────── QUIZ 7 — Communication & Social ───────────────────────
[
  { en: 'announce',       tr: 'elan etmək',          wrong: 'bildirmək'        },
  { en: 'announcement',   tr: 'elan',                wrong: 'xəbər'            },
  { en: 'apologise',      tr: 'üzr istəmək',         wrong: 'bağışlamaq'       },
  { en: 'comment',        tr: 'şərh',                wrong: 'fikir'            },
  { en: 'communicate',    tr: 'ünsiyyət qurmaq',      wrong: 'danışmaq'         },
  { en: 'confirm',        tr: 'təsdiqləmək',         wrong: 'bildirmək'        },
  { en: 'contact',        tr: 'əlaqə saxlamaq',      wrong: 'zəng etmək'       },
  { en: 'convince',       tr: 'inandırmaq',          wrong: 'məcbur etmək'     },
  { en: 'discuss',        tr: 'müzakirə etmək',      wrong: 'danışmaq'         },
  { en: 'encourage',      tr: 'həvəsləndirmək',      wrong: 'dəstəkləmək'      },
  { en: 'persuade',       tr: 'razı salmaq',         wrong: 'inandırmaq'       },
  { en: 'recommend',      tr: 'tövsiyə etmək',       wrong: 'təklif etmək'     },
  { en: 'remind',         tr: 'xatırlatmaq',         wrong: 'söyləmək'         },
  { en: 'respond',        tr: 'cavab vermək',        wrong: 'reaksiya göstərmək'},
  { en: 'suggest',        tr: 'təklif etmək',        wrong: 'tövsiyə etmək'    },
  { en: 'warn',           tr: 'xəbərdarlıq etmək',  wrong: 'qorxutmaq'        },
  { en: 'yell',           tr: 'bağırmaq',            wrong: 'danlamaq'         },
  { en: 'gesture',        tr: 'jest',                wrong: 'hərəkət'          },
  { en: 'interpret',      tr: 'şərh etmək',          wrong: 'tərcümə etmək'    },
  { en: 'interpretation', tr: 'şərh',                wrong: 'tərcümə'          },
],

// ─────────────────────── QUIZ 8 — Feelings & Emotions (1) ───────────────────────
[
  { en: 'amazed',         tr: 'heyrətlənmiş',        wrong: 'sevincli'         },
  { en: 'angry',          tr: 'əsəbi',               wrong: 'hirslı'           },
  { en: 'anxious',        tr: 'narahat',             wrong: 'gərgin'           },
  { en: 'ashamed',        tr: 'utanmış',             wrong: 'xəcalətli'        },
  { en: 'confident',      tr: 'özünə inamlı',        wrong: 'cəsur'            },
  { en: 'confused',       tr: 'çaşqın',              wrong: 'narahat'          },
  { en: 'curious',        tr: 'maraqlanan',          wrong: 'həvəsli'          },
  { en: 'delighted',      tr: 'sevinclı',            wrong: 'xoşbəxt'          },
  { en: 'depressed',      tr: 'depressiyada olan',   wrong: 'kədərli'          },
  { en: 'disappointed',   tr: 'məyus',               wrong: 'üzülmüş'          },
  { en: 'embarrassed',    tr: 'utanmış',             wrong: 'narahat'          },
  { en: 'frightened',     tr: 'qorxmuş',             wrong: 'narahat'          },
  { en: 'frustrated',     tr: 'əsəbləşmiş',          wrong: 'yorulmuş'         },
  { en: 'furious',        tr: 'qəzəbli',             wrong: 'əsəbi'            },
  { en: 'glad',           tr: 'şad',                 wrong: 'məmnun'           },
  { en: 'grateful',       tr: 'minnətdar',           wrong: 'xoşbəxt'          },
  { en: 'happy',          tr: 'xoşbəxt',             wrong: 'şad'              },
  { en: 'lonely',         tr: 'tənha',               wrong: 'kədərli'          },
  { en: 'nervous',        tr: 'gərgin',              wrong: 'narahat'          },
  { en: 'proud',          tr: 'qürurlu',             wrong: 'xoşbəxt'          },
],

// ─────────────────────── QUIZ 9 — Feelings & Emotions (2) ───────────────────────
[
  { en: 'amusing',        tr: 'əyləncəli',           wrong: 'maraqlı'          },
  { en: 'annoying',       tr: 'əsəbləşdirici',       wrong: 'sıxıcı'           },
  { en: 'calm',           tr: 'sakit',               wrong: 'rahat'            },
  { en: 'cheerful',       tr: 'şən',                 wrong: 'sevincli'         },
  { en: 'cruel',          tr: 'zalım',               wrong: 'kobud'            },
  { en: 'determined',     tr: 'qərarlı',             wrong: 'iddialı'          },
  { en: 'eager',          tr: 'həvəsli',             wrong: 'maraqla gözləyən' },
  { en: 'embarrassed',    tr: 'utanmış',             wrong: 'çaşqın'           },
  { en: 'enthusiastic',   tr: 'həvəsli',             wrong: 'coşğun'           },
  { en: 'hilarious',      tr: 'çox gülməli',         wrong: 'əyləncəli'        },
  { en: 'horrible',       tr: 'dəhşətli',            wrong: 'pis'              },
  { en: 'optimistic',     tr: 'nikbin',              wrong: 'müsbət'           },
  { en: 'pessimistic',    tr: 'bədbin',              wrong: 'ümidsiz'          },
  { en: 'relaxed',        tr: 'rahat',               wrong: 'sakit'            },
  { en: 'satisfied',      tr: 'məmnun',              wrong: 'xoşbəxt'          },
  { en: 'shocked',        tr: 'şoka düşmüş',         wrong: 'heyrətlənmiş'     },
  { en: 'surprised',      tr: 'təəccüblənmiş',       wrong: 'heyrətlənmiş'     },
  { en: 'sympathetic',    tr: 'həmfikirliyini bildirən', wrong: 'mehriban'     },
  { en: 'upset',          tr: 'narahat',             wrong: 'kədərli'          },
  { en: 'weird',          tr: 'qəribə',              wrong: 'maraqlı'          },
],

// ─────────────────────── QUIZ 10 — Crime, Law & Government (1) ───────────────────────
[
  { en: 'arrest',         tr: 'həbs etmək',          wrong: 'tutmaq'           },
  { en: 'authority',      tr: 'səlahiyyət',          wrong: 'hökumət'          },
  { en: 'ban',            tr: 'qadağan etmək',       wrong: 'məhdudlaşdırmaq'  },
  { en: 'court',          tr: 'məhkəmə',             wrong: 'hökumət'          },
  { en: 'crime',          tr: 'cinayət',             wrong: 'hüquq pozuntusu'  },
  { en: 'guilty',         tr: 'günahkar',            wrong: 'şübhəli'          },
  { en: 'illegal',        tr: 'qanunsuz',            wrong: 'cinayətkar'       },
  { en: 'innocent',       tr: 'günahsız',            wrong: 'azad'             },
  { en: 'investigate',    tr: 'araşdırmaq',          wrong: 'sorğu keçirmək'   },
  { en: 'judge',          tr: 'hakim',               wrong: 'prokuror'         },
  { en: 'jury',           tr: 'münsiflər heyəti',    wrong: 'şahidlər'         },
  { en: 'justice',        tr: 'ədalət',              wrong: 'qanun'            },
  { en: 'law',            tr: 'qanun',               wrong: 'hüquq'            },
  { en: 'legal',          tr: 'qanuni',              wrong: 'rəsmi'            },
  { en: 'offence',        tr: 'hüquq pozuntusu',     wrong: 'cinayət'          },
  { en: 'police',         tr: 'polis',               wrong: 'mühafizəçi'       },
  { en: 'prison',         tr: 'həbsxana',            wrong: 'polis bölməsi'    },
  { en: 'punishment',     tr: 'cəza',                wrong: 'həbs'             },
  { en: 'suspect',        tr: 'şübhəli',             wrong: 'günahkar'         },
  { en: 'victim',         tr: 'qurban',              wrong: 'şahid'            },
],

// ─────────────────────── QUIZ 11 — Crime, Law & Government (2) ───────────────────────
[
  { en: 'campaign',       tr: 'kampaniya',           wrong: 'seçki'            },
  { en: 'candidate',      tr: 'namizəd',             wrong: 'deputat'          },
  { en: 'democracy',      tr: 'demokratiya',         wrong: 'respublika'       },
  { en: 'election',       tr: 'seçki',               wrong: 'referendum'       },
  { en: 'government',     tr: 'hökumət',             wrong: 'parlament'        },
  { en: 'minister',       tr: 'nazir',               wrong: 'deputat'          },
  { en: 'parliament',     tr: 'parlament',           wrong: 'hökumət'          },
  { en: 'policy',         tr: 'siyasət',             wrong: 'qanun'            },
  { en: 'political',      tr: 'siyasi',              wrong: 'hüquqi'           },
  { en: 'politician',     tr: 'siyasətçi',           wrong: 'deputat'          },
  { en: 'president',      tr: 'prezident',           wrong: 'baş nazir'        },
  { en: 'protest',        tr: 'etiraz',              wrong: 'nümayiş'          },
  { en: 'security',       tr: 'təhlükəsizlik',       wrong: 'mühafizə'         },
  { en: 'terrorism',      tr: 'terrorizm',           wrong: 'ekstremizm'       },
  { en: 'terrorist',      tr: 'terrorist',           wrong: 'cinayətkar'       },
  { en: 'vote',           tr: 'səs vermək',          wrong: 'seçmək'           },
  { en: 'witness',        tr: 'şahid',               wrong: 'zərərçəkən'       },
  { en: 'accuse',         tr: 'ittiham etmək',       wrong: 'suçlamaq'         },
  { en: 'evidence',       tr: 'sübut',               wrong: 'şahidlik'         },
  { en: 'trial',          tr: 'məhkəmə prosesi',     wrong: 'sorğu'            },
],

// ─────────────────────── QUIZ 12 — War, Conflict & Danger ───────────────────────
[
  { en: 'battle',         tr: 'döyüş',               wrong: 'müharibə'         },
  { en: 'bomb',           tr: 'bomba',               wrong: 'silah'            },
  { en: 'conflict',       tr: 'münaqişə',            wrong: 'döyüş'            },
  { en: 'crisis',         tr: 'böhran',              wrong: 'fəlakət'          },
  { en: 'damage',         tr: 'ziyan',               wrong: 'itki'             },
  { en: 'danger',         tr: 'təhlükə',             wrong: 'risk'             },
  { en: 'destroy',        tr: 'məhv etmək',          wrong: 'dağıtmaq'         },
  { en: 'enemy',          tr: 'düşmən',              wrong: 'rəqib'            },
  { en: 'explosion',      tr: 'partlayış',           wrong: 'yanğın'           },
  { en: 'fight',          tr: 'döyüşmək',            wrong: 'müqavimət göstərmək' },
  { en: 'military',       tr: 'hərbi',               wrong: 'siyasi'           },
  { en: 'risk',           tr: 'risk',                wrong: 'təhlükə'          },
  { en: 'soldier',        tr: 'əsgər',               wrong: 'zabit'            },
  { en: 'threat',         tr: 'təhdid',              wrong: 'xəbərdarlıq'      },
  { en: 'threaten',       tr: 'təhdid etmək',        wrong: 'qorxutmaq'        },
  { en: 'violence',       tr: 'zorakılıq',           wrong: 'aqressiya'        },
  { en: 'war',            tr: 'müharibə',            wrong: 'döyüş'            },
  { en: 'weapon',         tr: 'silah',               wrong: 'alət'             },
  { en: 'wound',          tr: 'yara',                wrong: 'xəsarət'          },
  { en: 'armed',          tr: 'silahlı',             wrong: 'hərbi'            },
],

// ─────────────────────── QUIZ 13 — Travel & Transport ───────────────────────
[
  { en: 'accommodation',  tr: 'yaşayış yeri',        wrong: 'otel'             },
  { en: 'airport',        tr: 'hava limanı',         wrong: 'terminal'         },
  { en: 'border',         tr: 'sərhəd',              wrong: 'keçid'            },
  { en: 'booking',        tr: 'rezervasiya',         wrong: 'bilet'            },
  { en: 'cruise',         tr: 'kruiz',               wrong: 'gəmi səyahəti'    },
  { en: 'destination',    tr: 'təyinat yeri',        wrong: 'marşrut'          },
  { en: 'flight',         tr: 'uçuş',                wrong: 'səyahət'          },
  { en: 'guide',          tr: 'bələdçi',             wrong: 'turist'           },
  { en: 'journey',        tr: 'səyahət',             wrong: 'gəzinti'          },
  { en: 'luggage',        tr: 'baqaj',               wrong: 'çanta'            },
  { en: 'passport',       tr: 'pasport',             wrong: 'viza'             },
  { en: 'port',           tr: 'liman',               wrong: 'hava limanı'      },
  { en: 'reservation',    tr: 'yer ayırtma',         wrong: 'sifariş'          },
  { en: 'route',          tr: 'marşrut',             wrong: 'yol'              },
  { en: 'ticket',         tr: 'bilet',               wrong: 'kupon'            },
  { en: 'tourism',        tr: 'turizm',              wrong: 'səyahət'          },
  { en: 'tourist',        tr: 'turist',              wrong: 'səyyah'           },
  { en: 'transport',      tr: 'nəqliyyat',           wrong: 'daşıma'           },
  { en: 'vehicle',        tr: 'nəqliyyat vasitəsi',  wrong: 'avtomobil'        },
  { en: 'visa',           tr: 'viza',                wrong: 'icazə'            },
],

// ─────────────────────── QUIZ 14 — Nature & Environment ───────────────────────
[
  { en: 'atmosphere',     tr: 'atmosfer',            wrong: 'hava'             },
  { en: 'climate',        tr: 'iqlim',               wrong: 'hava şəraiti'     },
  { en: 'countryside',    tr: 'kənd yeri',           wrong: 'meşə'             },
  { en: 'disaster',       tr: 'fəlakət',             wrong: 'bəla'             },
  { en: 'earthquake',     tr: 'zəlzələ',             wrong: 'daşqın'           },
  { en: 'environment',    tr: 'ətraf mühit',         wrong: 'təbiət'           },
  { en: 'flood',          tr: 'daşqın',              wrong: 'fırtına'          },
  { en: 'forest',         tr: 'meşə',                wrong: 'bağ'              },
  { en: 'global',         tr: 'qlobal',              wrong: 'beynəlxalq'       },
  { en: 'greenhouse',     tr: 'istixana',            wrong: 'bağça'            },
  { en: 'hurricane',      tr: 'qasırğa',             wrong: 'fırtına'          },
  { en: 'nature',         tr: 'təbiət',              wrong: 'mühit'            },
  { en: 'pollution',      tr: 'çirklənmə',           wrong: 'çirkab'           },
  { en: 'river',          tr: 'çay',                 wrong: 'göl'              },
  { en: 'storm',          tr: 'fırtına',             wrong: 'qasırğa'          },
  { en: 'temperature',    tr: 'temperatur',          wrong: 'istilik'          },
  { en: 'tsunami',        tr: 'sunami',              wrong: 'dalğa'            },
  { en: 'weather',        tr: 'hava',                wrong: 'iqlim'            },
  { en: 'wildlife',       tr: 'vəhşi təbiət',        wrong: 'fauna'            },
  { en: 'pollution',      tr: 'çirklənmə',           wrong: 'tullantı'         },
],

// ─────────────────────── QUIZ 15 — Science & Research ───────────────────────
[
  { en: 'analysis',       tr: 'təhlil',              wrong: 'tədqiqat'         },
  { en: 'chemical',       tr: 'kimyəvi',             wrong: 'fiziki'           },
  { en: 'data',           tr: 'məlumat',             wrong: 'rəqəm'            },
  { en: 'database',       tr: 'verilənlər bazası',   wrong: 'sistem'           },
  { en: 'element',        tr: 'element',             wrong: 'maddə'            },
  { en: 'evidence',       tr: 'sübut',               wrong: 'nəticə'           },
  { en: 'experiment',     tr: 'eksperiment',         wrong: 'sınaq'            },
  { en: 'laboratory',     tr: 'laboratoriya',        wrong: 'tədqiqat mərkəzi' },
  { en: 'nuclear',        tr: 'nüvə',                wrong: 'kimyəvi'          },
  { en: 'research',       tr: 'tədqiqat',            wrong: 'araşdırma'        },
  { en: 'scientific',     tr: 'elmi',                wrong: 'texniki'          },
  { en: 'scientist',      tr: 'alim',                wrong: 'tədqiqatçı'       },
  { en: 'substance',      tr: 'maddə',               wrong: 'element'          },
  { en: 'theory',         tr: 'nəzəriyyə',           wrong: 'hipotez'          },
  { en: 'analyse',        tr: 'təhlil etmək',        wrong: 'araşdırmaq'       },
  { en: 'calculate',      tr: 'hesablamaq',          wrong: 'ölçmək'           },
  { en: 'observe',        tr: 'müşahidə etmək',      wrong: 'izləmək'          },
  { en: 'observation',    tr: 'müşahidə',            wrong: 'nəzarət'          },
  { en: 'discovery',      tr: 'kəşf',                wrong: 'ixtira'           },
  { en: 'evolution',      tr: 'təkamül',             wrong: 'inkişaf'          },
],

// ─────────────────────── QUIZ 16 — Health & Body ───────────────────────
[
  { en: 'ambulance',      tr: 'təcili yardım maşını', wrong: 'xəstəxana'      },
  { en: 'cancer',         tr: 'xərçəng',             wrong: 'şiş'              },
  { en: 'emergency',      tr: 'fövqəladə hal',       wrong: 'təcili yardım'    },
  { en: 'fitness',        tr: 'fiziki forma',        wrong: 'sağlamlıq'        },
  { en: 'heal',           tr: 'sağalmaq',            wrong: 'müalicə olmaq'    },
  { en: 'health',         tr: 'sağlamlıq',           wrong: 'güc'              },
  { en: 'healthcare',     tr: 'səhiyyə',             wrong: 'tibb'             },
  { en: 'hospital',       tr: 'xəstəxana',           wrong: 'klinika'          },
  { en: 'illness',        tr: 'xəstəlik',            wrong: 'əziyyət'          },
  { en: 'injure',         tr: 'yaralamaq',           wrong: 'incitmək'         },
  { en: 'injury',         tr: 'xəsarət',             wrong: 'yara'             },
  { en: 'medicine',       tr: 'dərman',              wrong: 'müalicə'          },
  { en: 'mental',         tr: 'zehni',               wrong: 'emosional'        },
  { en: 'muscle',         tr: 'əzələ',               wrong: 'sümük'            },
  { en: 'pain',           tr: 'ağrı',                wrong: 'əzab'             },
  { en: 'patient',        tr: 'xəstə',               wrong: 'səbirli'          },
  { en: 'surgery',        tr: 'əməliyyat',           wrong: 'müalicə'          },
  { en: 'symptom',        tr: 'simptom',             wrong: 'diaqnoz'          },
  { en: 'treatment',      tr: 'müalicə',             wrong: 'əməliyyat'        },
  { en: 'therapist',      tr: 'terapevt',            wrong: 'psixoloq'         },
],

// ─────────────────────── QUIZ 17 — Food, House & Daily Life ───────────────────────
[
  { en: 'appliance',      tr: 'məişət texnikası',    wrong: 'cihaz'            },
  { en: 'bake',           tr: 'bişirmək',            wrong: 'qızartmaq'        },
  { en: 'bedroom',        tr: 'yataq otağı',         wrong: 'oturma otağı'     },
  { en: 'cook',           tr: 'bişirmək',            wrong: 'hazırlamaq'       },
  { en: 'cottage',        tr: 'kiçik ev',            wrong: 'villa'            },
  { en: 'furniture',      tr: 'mebel',               wrong: 'dekor'            },
  { en: 'ingredient',     tr: 'inqredient',          wrong: 'resept'           },
  { en: 'kitchen',        tr: 'mətbəx',              wrong: 'yemək otağı'      },
  { en: 'meal',           tr: 'yemək',               wrong: 'xörək'            },
  { en: 'recipe',         tr: 'resept',              wrong: 'inqredient'       },
  { en: 'alarm',          tr: 'zəng / siqnal',       wrong: 'saat'             },
  { en: 'battery',        tr: 'batareya',            wrong: 'şarj'             },
  { en: 'ceiling',        tr: 'tavan',               wrong: 'döşəmə'           },
  { en: 'curtain',        tr: 'pərdə',               wrong: 'jalüz'            },
  { en: 'garage',         tr: 'qaraj',               wrong: 'anbar'            },
  { en: 'heating',        tr: 'isitmə',              wrong: 'ventilyasiya'     },
  { en: 'household',      tr: 'ev təsərrüfatı',      wrong: 'ailə'             },
  { en: 'shelter',        tr: 'sığınak',             wrong: 'ev'               },
  { en: 'pipe',           tr: 'boru',                wrong: 'kabel'            },
  { en: 'furniture',      tr: 'mebel',               wrong: 'avadanlıq'        },
],

// ─────────────────────── QUIZ 18 — Family & Society ───────────────────────
[
  { en: 'childhood',      tr: 'uşaqlıq',             wrong: 'gənclik'          },
  { en: 'community',      tr: 'icma',                wrong: 'cəmiyyət'         },
  { en: 'divorce',        tr: 'boşanma',             wrong: 'ayrılıq'          },
  { en: 'engaged',        tr: 'nişanlı',             wrong: 'evli'             },
  { en: 'family',         tr: 'ailə',                wrong: 'nəsil'            },
  { en: 'friendship',     tr: 'dostluq',             wrong: 'qardaşlıq'        },
  { en: 'generation',     tr: 'nəsil',               wrong: 'dövr'             },
  { en: 'marriage',       tr: 'evlilik',             wrong: 'nişan'            },
  { en: 'neighbour',      tr: 'qonşu',               wrong: 'tanış'            },
  { en: 'relative',       tr: 'qohum',               wrong: 'tanış'            },
  { en: 'relationship',   tr: 'münasibət',           wrong: 'dostluq'          },
  { en: 'religion',       tr: 'din',                 wrong: 'inanc'            },
  { en: 'romantic',       tr: 'romantik',            wrong: 'həssas'           },
  { en: 'society',        tr: 'cəmiyyət',            wrong: 'icma'             },
  { en: 'tradition',      tr: 'ənənə',               wrong: 'adət'             },
  { en: 'youth',          tr: 'gənclik',             wrong: 'uşaqlıq'          },
  { en: 'generation',     tr: 'nəsil',               wrong: 'əsr'              },
  { en: 'community',      tr: 'icma',                wrong: 'qrup'             },
  { en: 'household',      tr: 'ev təsərrüfatı',      wrong: 'ailə'             },
  { en: 'neighbour',      tr: 'qonşu',               wrong: 'həmsayə'          },
],

// ─────────────────────── QUIZ 19 — Art, Culture & Entertainment ───────────────────────
[
  { en: 'album',          tr: 'albom',               wrong: 'disk'             },
  { en: 'art',            tr: 'sənət',               wrong: 'mədəniyyət'       },
  { en: 'artist',         tr: 'sənətkar',            wrong: 'rəssam'           },
  { en: 'celebration',    tr: 'bayram',              wrong: 'mərasim'          },
  { en: 'ceremony',       tr: 'mərasim',             wrong: 'tədbirlər'        },
  { en: 'concert',        tr: 'konsert',             wrong: 'festival'         },
  { en: 'culture',        tr: 'mədəniyyət',          wrong: 'ənənə'            },
  { en: 'entertainment',  tr: 'əyləncə',             wrong: 'şou'              },
  { en: 'exhibition',     tr: 'sərgi',               wrong: 'muzey'            },
  { en: 'fashion',        tr: 'moda',                wrong: 'stil'             },
  { en: 'gig',            tr: 'konsert',             wrong: 'festival'         },
  { en: 'movie',          tr: 'film',                wrong: 'serial'           },
  { en: 'music',          tr: 'musiqi',              wrong: 'melodiya'         },
  { en: 'performance',    tr: 'çıxış',               wrong: 'tamaşa'           },
  { en: 'poem',           tr: 'şeir',                wrong: 'hekayə'           },
  { en: 'poetry',         tr: 'şeir sənəti',         wrong: 'ədəbiyyat'        },
  { en: 'sculpture',      tr: 'heykəl',              wrong: 'rəsm'             },
  { en: 'studio',         tr: 'studiya',             wrong: 'atelye'           },
  { en: 'theatre',        tr: 'teatr',               wrong: 'kino'             },
  { en: 'theme',          tr: 'mövzu',               wrong: 'fikir'            },
],

// ─────────────────────── QUIZ 20 — Sports & Fitness ───────────────────────
[
  { en: 'athlete',        tr: 'atlet',               wrong: 'idmançı'          },
  { en: 'captain',        tr: 'kapitan',             wrong: 'məşqçi'           },
  { en: 'champion',       tr: 'çempion',             wrong: 'qalib'            },
  { en: 'championship',   tr: 'çempionat',           wrong: 'turnir'           },
  { en: 'coach',          tr: 'məşqçi',              wrong: 'kapitan'          },
  { en: 'competition',    tr: 'yarış',               wrong: 'turnir'           },
  { en: 'competitive',    tr: 'rəqabətli',           wrong: 'güclü'            },
  { en: 'fitness',        tr: 'fiziki forma',        wrong: 'sağlamlıq'        },
  { en: 'match',          tr: 'oyun / matç',         wrong: 'turnir'           },
  { en: 'muscle',         tr: 'əzələ',               wrong: 'güc'              },
  { en: 'player',         tr: 'oyunçu',              wrong: 'idmançı'          },
  { en: 'race',           tr: 'qaçış yarışı',        wrong: 'sprint'           },
  { en: 'rugby',          tr: 'reqbi',               wrong: 'amerikan futbolu' },
  { en: 'score',          tr: 'hesab',               wrong: 'nəticə'           },
  { en: 'stadium',        tr: 'stadion',             wrong: 'arena'            },
  { en: 'strength',       tr: 'güc',                 wrong: 'enerji'           },
  { en: 'team',           tr: 'komanda',             wrong: 'qrup'             },
  { en: 'training',       tr: 'məşq',                wrong: 'hazırlıq'         },
  { en: 'victory',        tr: 'qələbə',              wrong: 'nailiyyət'        },
  { en: 'tournament',     tr: 'turnir',              wrong: 'çempionat'        },
],
      // ─────────────────────── QUIZ 21 — Personality & Character ───────────────────────
[
  { en: 'aggressive',    tr: 'aqressiv',            wrong: 'kobud'            },
  { en: 'ambitious',     tr: 'iddialı',             wrong: 'məqsədli'         },
  { en: 'anxious',       tr: 'narahat',             wrong: 'gərgin'           },
  { en: 'bold',          tr: 'cəsarətli',           wrong: 'güclü'            },
  { en: 'brave',         tr: 'cəsur',               wrong: 'qorxmaz'          },
  { en: 'calm',          tr: 'sakit',               wrong: 'rahat'            },
  { en: 'charming',      tr: 'cazibədar',           wrong: 'gözəl'            },
  { en: 'confident',     tr: 'özünə inamlı',        wrong: 'cəsur'            },
  { en: 'cruel',         tr: 'zalım',               wrong: 'kobud'            },
  { en: 'curious',       tr: 'maraqlanan',          wrong: 'diqqətli'         },
  { en: 'determined',    tr: 'qərarlı',             wrong: 'iddialı'          },
  { en: 'eager',         tr: 'həvəsli',             wrong: 'coşğun'           },
  { en: 'enthusiastic',  tr: 'coşğun',              wrong: 'həvəsli'          },
  { en: 'flexible',      tr: 'çevik',               wrong: 'uyğunlaşan'       },
  { en: 'genuine',       tr: 'səmimi',              wrong: 'dürüst'           },
  { en: 'honest',        tr: 'dürüst',              wrong: 'etibarlı'         },
  { en: 'impatient',     tr: 'səbirsiz',            wrong: 'tələsik'          },
  { en: 'loyal',         tr: 'sadiq',               wrong: 'etibarlı'         },
  { en: 'optimistic',    tr: 'nikbin',              wrong: 'müsbət'           },
  { en: 'patient',       tr: 'səbirli',             wrong: 'sakit'            },
],

// ─────────────────────── QUIZ 22 — Abstract Concepts & Thinking ───────────────────────
[
  { en: 'abstract',      tr: 'mücərrəd',            wrong: 'nəzəri'           },
  { en: 'concept',       tr: 'anlayış',             wrong: 'fikir'            },
  { en: 'context',       tr: 'kontekst',            wrong: 'mövzu'            },
  { en: 'idea',          tr: 'fikir',               wrong: 'anlayış'          },
  { en: 'imagination',   tr: 'təxəyyül',            wrong: 'yaradıcılıq'      },
  { en: 'logic',         tr: 'məntiq',              wrong: 'düşüncə'          },
  { en: 'logical',       tr: 'məntiqi',             wrong: 'rasional'         },
  { en: 'mind',          tr: 'ağıl',                wrong: 'beyin'            },
  { en: 'notion',        tr: 'təsəvvür',            wrong: 'anlayış'          },
  { en: 'perspective',   tr: 'baxış açısı',         wrong: 'görüş'            },
  { en: 'philosophy',    tr: 'fəlsəfə',             wrong: 'psixologiya'      },
  { en: 'principle',     tr: 'prinsip',             wrong: 'qanun'            },
  { en: 'psychology',    tr: 'psixologiya',         wrong: 'fəlsəfə'          },
  { en: 'theory',        tr: 'nəzəriyyə',           wrong: 'hipotez'          },
  { en: 'view',          tr: 'görüş',               wrong: 'fikir'            },
  { en: 'viewpoint',     tr: 'baxış nöqtəsi',       wrong: 'perspektiv'       },
  { en: 'wisdom',        tr: 'müdriklik',           wrong: 'bilik'            },
  { en: 'wise',          tr: 'müdrik',              wrong: 'ağıllı'           },
  { en: 'assumption',    tr: 'fərziyyə',            wrong: 'nəticə'           },
  { en: 'concept',       tr: 'konsepsiya',          wrong: 'ideya'            },
],

// ─────────────────────── QUIZ 23 — Actions & Processes (1) ───────────────────────
[
  { en: 'accomplish',    tr: 'nail olmaq',           wrong: 'tamamlamaq'       },
  { en: 'achieve',       tr: 'əldə etmək',           wrong: 'qazanmaq'         },
  { en: 'adapt',         tr: 'uyğunlaşmaq',          wrong: 'dəyişmək'         },
  { en: 'adjust',        tr: 'tənzimləmək',          wrong: 'uyğunlaşdırmaq'   },
  { en: 'analyse',       tr: 'təhlil etmək',         wrong: 'araşdırmaq'       },
  { en: 'attempt',       tr: 'cəhd etmək',           wrong: 'sınamaq'          },
  { en: 'calculate',     tr: 'hesablamaq',           wrong: 'ölçmək'           },
  { en: 'conduct',       tr: 'həyata keçirmək',      wrong: 'idarə etmək'      },
  { en: 'contribute',    tr: 'töhfə vermək',         wrong: 'dəstək olmaq'     },
  { en: 'create',        tr: 'yaratmaq',             wrong: 'qurmaq'           },
  { en: 'develop',       tr: 'inkişaf etdirmək',     wrong: 'dəyişdirmək'      },
  { en: 'establish',     tr: 'qurmaq',               wrong: 'yaratmaq'         },
  { en: 'evaluate',      tr: 'qiymətləndirmək',      wrong: 'yoxlamaq'         },
  { en: 'generate',      tr: 'yaratmaq',             wrong: 'istehsal etmək'   },
  { en: 'handle',        tr: 'idarə etmək',          wrong: 'həll etmək'       },
  { en: 'implement',     tr: 'tətbiq etmək',         wrong: 'həyata keçirmək'  },
  { en: 'improve',       tr: 'təkmilləşdirmək',      wrong: 'dəyişdirmək'      },
  { en: 'maintain',      tr: 'qoruyub saxlamaq',     wrong: 'davam etdirmək'   },
  { en: 'manage',        tr: 'idarə etmək',          wrong: 'nəzarət etmək'    },
  { en: 'perform',       tr: 'yerinə yetirmək',      wrong: 'icra etmək'       },
],

// ─────────────────────── QUIZ 24 — Actions & Processes (2) ───────────────────────
[
  { en: 'investigate',   tr: 'araşdırmaq',           wrong: 'sorğu keçirmək'   },
  { en: 'negotiate',     tr: 'danışıqlar aparmaq',   wrong: 'razılaşmaq'       },
  { en: 'organise',      tr: 'təşkil etmək',         wrong: 'planlaşdırmaq'    },
  { en: 'participate',   tr: 'iştirak etmək',        wrong: 'qoşulmaq'         },
  { en: 'prepare',       tr: 'hazırlamaq',           wrong: 'planlaşdırmaq'    },
  { en: 'proceed',       tr: 'davam etmək',          wrong: 'irəliləmək'       },
  { en: 'produce',       tr: 'istehsal etmək',       wrong: 'yaratmaq'         },
  { en: 'promote',       tr: 'təbliğ etmək',         wrong: 'dəstəkləmək'      },
  { en: 'provide',       tr: 'təmin etmək',          wrong: 'vermək'           },
  { en: 'publish',       tr: 'nəşr etmək',           wrong: 'yaymaq'           },
  { en: 'react',         tr: 'reaksiya vermək',      wrong: 'cavab vermək'     },
  { en: 'realise',       tr: 'dərk etmək',           wrong: 'anlamaq'          },
  { en: 'receive',       tr: 'almaq',                wrong: 'qəbul etmək'      },
  { en: 'reduce',        tr: 'azaltmaq',             wrong: 'kəsmək'           },
  { en: 'replace',       tr: 'əvəz etmək',           wrong: 'dəyişdirmək'      },
  { en: 'require',       tr: 'tələb etmək',          wrong: 'lazım olmaq'      },
  { en: 'research',      tr: 'tədqiqat aparmaq',     wrong: 'araşdırmaq'       },
  { en: 'resolve',       tr: 'həll etmək',           wrong: 'aradan qaldırmaq' },
  { en: 'respond',       tr: 'cavab vermək',         wrong: 'reaksiya göstərmək'},
  { en: 'solve',         tr: 'həll etmək',           wrong: 'çözmək'           },
],

// ─────────────────────── QUIZ 25 — Change & Development ───────────────────────
[
  { en: 'alter',         tr: 'dəyişdirmək',          wrong: 'tənzimləmək'      },
  { en: 'change',        tr: 'dəyişmək',             wrong: 'fərqlənmək'       },
  { en: 'convert',       tr: 'çevirmək',             wrong: 'dəyişdirmək'      },
  { en: 'develop',       tr: 'inkişaf etmək',        wrong: 'böyümək'          },
  { en: 'evolve',        tr: 'təkamül keçirmək',     wrong: 'dəyişmək'         },
  { en: 'expand',        tr: 'genişləndirmək',       wrong: 'böyütmək'         },
  { en: 'extend',        tr: 'uzatmaq',              wrong: 'genişləndirmək'   },
  { en: 'growth',        tr: 'artım',                wrong: 'inkişaf'          },
  { en: 'improve',       tr: 'yaxşılaşdırmaq',       wrong: 'inkişaf etdirmək' },
  { en: 'increase',      tr: 'artırmaq',             wrong: 'genişləndirmək'   },
  { en: 'modify',        tr: 'dəyişiklik etmək',     wrong: 'tənzimləmək'      },
  { en: 'progress',      tr: 'irəliləyiş',           wrong: 'inkişaf'          },
  { en: 'reform',        tr: 'islahat',              wrong: 'dəyişiklik'       },
  { en: 'revolution',    tr: 'inqilab',              wrong: 'islahat'          },
  { en: 'transform',     tr: 'çevirmək',             wrong: 'dəyişdirmək'      },
  { en: 'transition',    tr: 'keçid',                wrong: 'dəyişiklik'       },
  { en: 'update',        tr: 'yeniləmək',            wrong: 'dəyişdirmək'      },
  { en: 'vary',          tr: 'dəyişmək',             wrong: 'fərqlənmək'       },
  { en: 'variation',     tr: 'fərqlilik',            wrong: 'dəyişiklik'       },
  { en: 'evolution',     tr: 'təkamül',              wrong: 'inkişaf'          },
],

// ─────────────────────── QUIZ 26 — Problems & Solutions ───────────────────────
[
  { en: 'challenge',     tr: 'çağırış',              wrong: 'çətinlik'         },
  { en: 'crisis',        tr: 'böhran',               wrong: 'fəlakət'          },
  { en: 'difficulty',    tr: 'çətinlik',             wrong: 'problem'          },
  { en: 'issue',         tr: 'məsələ',               wrong: 'problem'          },
  { en: 'obstacle',      tr: 'maneə',                wrong: 'çətinlik'         },
  { en: 'problem',       tr: 'problem',              wrong: 'məsələ'           },
  { en: 'risk',          tr: 'risk',                 wrong: 'təhlükə'          },
  { en: 'solution',      tr: 'həll yolu',            wrong: 'cavab'            },
  { en: 'threat',        tr: 'təhdid',               wrong: 'xəbərdarlıq'      },
  { en: 'trouble',       tr: 'problem',              wrong: 'çətinlik'         },
  { en: 'barrier',       tr: 'maneə',                wrong: 'sədd'             },
  { en: 'conflict',      tr: 'münaqişə',             wrong: 'çəkişmə'          },
  { en: 'confusion',     tr: 'çaşqınlıq',            wrong: 'anlaşılmazlıq'    },
  { en: 'failure',       tr: 'uğursuzluq',           wrong: 'məğlubiyyət'      },
  { en: 'fault',         tr: 'səhv',                 wrong: 'qüsur'            },
  { en: 'limitation',    tr: 'məhdudiyyət',          wrong: 'çatışmazlıq'      },
  { en: 'shortage',      tr: 'çatışmazlıq',          wrong: 'kəsir'            },
  { en: 'weakness',      tr: 'zəiflik',              wrong: 'çatışmazlıq'      },
  { en: 'defect',        tr: 'qüsur',                wrong: 'xəta'             },
  { en: 'dilemma',       tr: 'dilemma',              wrong: 'seçim'            },
],

// ─────────────────────── QUIZ 27 — Government & Politics ───────────────────────
[
  { en: 'authority',     tr: 'səlahiyyət',           wrong: 'hökumət'          },
  { en: 'campaign',      tr: 'kampaniya',            wrong: 'seçki'            },
  { en: 'candidate',     tr: 'namizəd',              wrong: 'deputat'          },
  { en: 'democracy',     tr: 'demokratiya',          wrong: 'respublika'       },
  { en: 'election',      tr: 'seçki',                wrong: 'referendum'       },
  { en: 'government',    tr: 'hökumət',              wrong: 'parlament'        },
  { en: 'minister',      tr: 'nazir',                wrong: 'deputat'          },
  { en: 'parliament',    tr: 'parlament',            wrong: 'hökumət'          },
  { en: 'policy',        tr: 'siyasət',              wrong: 'qanun'            },
  { en: 'political',     tr: 'siyasi',               wrong: 'hüquqi'           },
  { en: 'politician',    tr: 'siyasətçi',            wrong: 'deputat'          },
  { en: 'president',     tr: 'prezident',            wrong: 'baş nazir'        },
  { en: 'reform',        tr: 'islahat',              wrong: 'dəyişiklik'       },
  { en: 'regulation',    tr: 'tənzimləmə',           wrong: 'qanun'            },
  { en: 'rights',        tr: 'hüquqlar',             wrong: 'azadlıqlar'       },
  { en: 'state',         tr: 'dövlət',               wrong: 'hökumət'          },
  { en: 'vote',          tr: 'səs vermək',           wrong: 'seçmək'           },
  { en: 'opposition',    tr: 'müxalifət',            wrong: 'rəqib'            },
  { en: 'protest',       tr: 'etiraz',               wrong: 'nümayiş'          },
  { en: 'democracy',     tr: 'demokratiya',          wrong: 'monarxiya'        },
],

// ─────────────────────── QUIZ 28 — Law & Justice ───────────────────────
[
  { en: 'court',         tr: 'məhkəmə',              wrong: 'hüquq bürosu'     },
  { en: 'crime',         tr: 'cinayət',              wrong: 'hüquq pozuntusu'  },
  { en: 'guilty',        tr: 'günahkar',             wrong: 'şübhəli'          },
  { en: 'innocent',      tr: 'günahsız',             wrong: 'azad'             },
  { en: 'judge',         tr: 'hakim',                wrong: 'prokuror'         },
  { en: 'jury',          tr: 'münsiflər heyəti',     wrong: 'şahidlər'         },
  { en: 'justice',       tr: 'ədalət',               wrong: 'qanun'            },
  { en: 'law',           tr: 'qanun',                wrong: 'hüquq'            },
  { en: 'legal',         tr: 'qanuni',               wrong: 'rəsmi'            },
  { en: 'offence',       tr: 'hüquq pozuntusu',      wrong: 'cinayət'          },
  { en: 'penalty',       tr: 'cərimə',               wrong: 'cəza'             },
  { en: 'prison',        tr: 'həbsxana',             wrong: 'polis bölməsi'    },
  { en: 'punishment',    tr: 'cəza',                 wrong: 'həbs'             },
  { en: 'regulation',    tr: 'tənzimləmə',           wrong: 'qanun'            },
  { en: 'rights',        tr: 'hüquqlar',             wrong: 'azadlıqlar'       },
  { en: 'rule',          tr: 'qayda',                wrong: 'qanun'            },
  { en: 'trial',         tr: 'məhkəmə prosesi',      wrong: 'sorğu'            },
  { en: 'accuse',        tr: 'ittiham etmək',        wrong: 'suçlamaq'         },
  { en: 'evidence',      tr: 'sübut',                wrong: 'şahidlik'         },
  { en: 'witness',       tr: 'şahid',                wrong: 'zərərçəkən'       },
],

// ─────────────────────── QUIZ 29 — Work & Employment ───────────────────────
[
  { en: 'application',   tr: 'müraciət',             wrong: 'sənəd'            },
  { en: 'career',        tr: 'karyera',              wrong: 'peşə'             },
  { en: 'colleague',     tr: 'iş yoldaşı',           wrong: 'tərəfdaş'         },
  { en: 'contract',      tr: 'müqavilə',             wrong: 'sənəd'            },
  { en: 'CV',            tr: 'CV / tərcümeyi-hal',   wrong: 'müraciət məktubu' },
  { en: 'employee',      tr: 'işçi',                 wrong: 'işəgötürən'       },
  { en: 'employer',      tr: 'işəgötürən',           wrong: 'işçi'             },
  { en: 'employment',    tr: 'məşğulluq',            wrong: 'iş yeri'          },
  { en: 'experience',    tr: 'təcrübə',              wrong: 'bilik'            },
  { en: 'interview',     tr: 'müsahibə',             wrong: 'görüş'            },
  { en: 'job',           tr: 'iş',                   wrong: 'vəzifə'           },
  { en: 'occupation',    tr: 'məşğuliyyət',          wrong: 'peşə'             },
  { en: 'profession',    tr: 'peşə',                 wrong: 'vəzifə'           },
  { en: 'promotion',     tr: 'vəzifə yüksəlişi',    wrong: 'mükafat'          },
  { en: 'retire',        tr: 'təqaüdə çıxmaq',       wrong: 'işdən çıxmaq'     },
  { en: 'retirement',    tr: 'təqaüd dövrü',         wrong: 'istirahət'        },
  { en: 'salary',        tr: 'maaş',                 wrong: 'əmək haqqı'       },
  { en: 'staff',         tr: 'heyət',                wrong: 'işçilər'          },
  { en: 'unemployed',    tr: 'işsiz',                wrong: 'boş'              },
  { en: 'experience',    tr: 'iş təcrübəsi',         wrong: 'bilik'            },
],

// ─────────────────────── QUIZ 30 — Success & Achievement ───────────────────────
[
  { en: 'achieve',       tr: 'nail olmaq',           wrong: 'qazanmaq'         },
  { en: 'achievement',   tr: 'nailiyyət',            wrong: 'uğur'             },
  { en: 'award',         tr: 'mükafat',              wrong: 'medal'            },
  { en: 'champion',      tr: 'çempion',              wrong: 'qalib'            },
  { en: 'championship',  tr: 'çempionat',            wrong: 'turnir'           },
  { en: 'medal',         tr: 'medal',                wrong: 'kubuk'            },
  { en: 'prize',         tr: 'mükafat',              wrong: 'medal'            },
  { en: 'success',       tr: 'uğur',                 wrong: 'nailiyyət'        },
  { en: 'successful',    tr: 'uğurlu',               wrong: 'bacarıqlı'        },
  { en: 'talent',        tr: 'istedad',              wrong: 'bacarıq'          },
  { en: 'victory',       tr: 'qələbə',               wrong: 'nailiyyət'        },
  { en: 'win',           tr: 'qazanmaq',             wrong: 'udmaq'            },
  { en: 'winner',        tr: 'qalib',                wrong: 'çempion'          },
  { en: 'accomplish',    tr: 'başa çatdırmaq',       wrong: 'həyata keçirmək'  },
  { en: 'ambition',      tr: 'ambisiya',             wrong: 'məqsəd'           },
  { en: 'goal',          tr: 'məqsəd',               wrong: 'hədəf'            },
  { en: 'progress',      tr: 'irəliləyiş',           wrong: 'inkişaf'          },
  { en: 'recognition',   tr: 'tanınma',              wrong: 'mükafat'          },
  { en: 'reward',        tr: 'mükafat',              wrong: 'hədiyyə'          },
  { en: 'target',        tr: 'hədəf',                wrong: 'məqsəd'           },
],
      // ─────────────────────── QUIZ 31 — Negative Emotions & States ───────────────────────
[
  { en: 'angry',         tr: 'əsəbi',               wrong: 'hirslı'           },
  { en: 'annoyed',       tr: 'əsəbləşmiş',          wrong: 'yorulmuş'         },
  { en: 'anxious',       tr: 'narahat',             wrong: 'gərgin'           },
  { en: 'ashamed',       tr: 'utanmış',             wrong: 'xəcalətli'        },
  { en: 'confused',      tr: 'çaşqın',              wrong: 'narahat'          },
  { en: 'depressed',     tr: 'depressiyada olan',   wrong: 'kədərli'          },
  { en: 'disappointed',  tr: 'məyus',               wrong: 'üzülmüş'          },
  { en: 'embarrassed',   tr: 'utanmış',             wrong: 'çaşqın'           },
  { en: 'frustrated',    tr: 'əsəbləşmiş',          wrong: 'bezmiş'           },
  { en: 'furious',       tr: 'qəzəbli',             wrong: 'əsəbi'            },
  { en: 'lonely',        tr: 'tənha',               wrong: 'kədərli'          },
  { en: 'nervous',       tr: 'gərgin',              wrong: 'narahat'          },
  { en: 'pessimistic',   tr: 'bədbin',              wrong: 'ümidsiz'          },
  { en: 'sad',           tr: 'kədərli',             wrong: 'üzülmüş'          },
  { en: 'scared',        tr: 'qorxmuş',             wrong: 'narahat'          },
  { en: 'shocked',       tr: 'şoka düşmüş',         wrong: 'heyrətlənmiş'     },
  { en: 'stressed',      tr: 'stress altında',      wrong: 'gərgin'           },
  { en: 'tired',         tr: 'yorulmuş',            wrong: 'bezmiş'           },
  { en: 'upset',         tr: 'narahat',             wrong: 'kədərli'          },
  { en: 'worried',       tr: 'narahat',             wrong: 'qayğılı'          },
],

// ─────────────────────── QUIZ 32 — Positive Qualities ───────────────────────
[
  { en: 'brave',         tr: 'cəsur',               wrong: 'qorxmaz'          },
  { en: 'calm',          tr: 'sakit',               wrong: 'rahat'            },
  { en: 'cheerful',      tr: 'şən',                 wrong: 'sevincli'         },
  { en: 'confident',     tr: 'özünə inamlı',        wrong: 'cəsur'            },
  { en: 'creative',      tr: 'yaradıcı',            wrong: 'istedadlı'        },
  { en: 'determined',    tr: 'qərarlı',             wrong: 'iddialı'          },
  { en: 'energetic',     tr: 'enerjili',            wrong: 'fəal'             },
  { en: 'enthusiastic',  tr: 'coşğun',              wrong: 'həvəsli'          },
  { en: 'friendly',      tr: 'mehriban',            wrong: 'xeyirxah'         },
  { en: 'generous',      tr: 'səxavətli',           wrong: 'xeyirxah'         },
  { en: 'honest',        tr: 'dürüst',              wrong: 'etibarlı'         },
  { en: 'kind',          tr: 'xeyirxah',            wrong: 'mehriban'         },
  { en: 'optimistic',    tr: 'nikbin',              wrong: 'müsbət'           },
  { en: 'patient',       tr: 'səbirli',             wrong: 'sakit'            },
  { en: 'polite',        tr: 'nəzakətli',           wrong: 'hörmətli'         },
  { en: 'reliable',      tr: 'etibarlı',            wrong: 'sadiq'            },
  { en: 'responsible',   tr: 'məsuliyyətli',        wrong: 'etibarlı'         },
  { en: 'sensible',      tr: 'ağıllı',              wrong: 'rasional'         },
  { en: 'talented',      tr: 'istedadlı',           wrong: 'bacarıqlı'        },
  { en: 'wise',          tr: 'müdrik',              wrong: 'ağıllı'           },
],

// ─────────────────────── QUIZ 33 — Media & Communication ───────────────────────
[
  { en: 'advertisement', tr: 'reklam',              wrong: 'elan'             },
  { en: 'article',       tr: 'məqalə',              wrong: 'xəbər'            },
  { en: 'broadcast',     tr: 'yayımlamaq',          wrong: 'nəşr etmək'       },
  { en: 'channel',       tr: 'kanal',               wrong: 'proqram'          },
  { en: 'documentary',   tr: 'sənədli film',        wrong: 'serial'           },
  { en: 'editor',        tr: 'redaktor',            wrong: 'jurnalist'        },
  { en: 'headline',      tr: 'başlıq',              wrong: 'xəbər'            },
  { en: 'internet',      tr: 'internet',            wrong: 'şəbəkə'           },
  { en: 'journalist',    tr: 'jurnalist',           wrong: 'müxbir'           },
  { en: 'magazine',      tr: 'jurnal',              wrong: 'qəzet'            },
  { en: 'media',         tr: 'media',               wrong: 'mətbuat'          },
  { en: 'news',          tr: 'xəbər',               wrong: 'məlumat'          },
  { en: 'newspaper',     tr: 'qəzet',               wrong: 'jurnal'           },
  { en: 'programme',     tr: 'proqram',             wrong: 'kanal'            },
  { en: 'publish',       tr: 'nəşr etmək',          wrong: 'yaymaq'           },
  { en: 'reporter',      tr: 'müxbir',              wrong: 'jurnalist'        },
  { en: 'social media',  tr: 'sosial media',        wrong: 'internet'         },
  { en: 'television',    tr: 'televiziya',          wrong: 'radio'            },
  { en: 'website',       tr: 'vebsayt',             wrong: 'proqram'          },
  { en: 'blog',          tr: 'bloq',                wrong: 'vebsayt'          },
],

// ─────────────────────── QUIZ 34 — Environment & Nature ───────────────────────
[
  { en: 'climate',        tr: 'iqlim',              wrong: 'hava şəraiti'     },
  { en: 'conservation',   tr: 'qorunma',            wrong: 'mühafizə'         },
  { en: 'disaster',       tr: 'fəlakət',            wrong: 'bəla'             },
  { en: 'earthquake',     tr: 'zəlzələ',            wrong: 'daşqın'           },
  { en: 'environment',    tr: 'ətraf mühit',        wrong: 'təbiət'           },
  { en: 'flood',          tr: 'daşqın',             wrong: 'fırtına'          },
  { en: 'global warming', tr: 'qlobal istiləşmə',   wrong: 'iqlim dəyişikliyi'},
  { en: 'greenhouse',     tr: 'istixana',           wrong: 'bağça'            },
  { en: 'nature',         tr: 'təbiət',             wrong: 'mühit'            },
  { en: 'pollution',      tr: 'çirklənmə',          wrong: 'tullantı'         },
  { en: 'recycle',        tr: 'təkrar emal etmək',  wrong: 'yenidən istifadə' },
  { en: 'renewable',      tr: 'bərpa olunan',       wrong: 'alternativ'       },
  { en: 'solar',          tr: 'günəş enerjisi',     wrong: 'külək enerjisi'   },
  { en: 'storm',          tr: 'fırtına',            wrong: 'qasırğa'          },
  { en: 'sustainable',    tr: 'davamlı',            wrong: 'ekoloji'          },
  { en: 'temperature',    tr: 'temperatur',         wrong: 'istilik'          },
  { en: 'tsunami',        tr: 'sunami',             wrong: 'dalğa'            },
  { en: 'waste',          tr: 'tullantı',           wrong: 'zibil'            },
  { en: 'wildlife',       tr: 'vəhşi təbiət',       wrong: 'fauna'            },
  { en: 'atmosphere',     tr: 'atmosfer',           wrong: 'hava qatı'        },
],

// ─────────────────────── QUIZ 35 — Health & Medicine ───────────────────────
[
  { en: 'cancer',        tr: 'xərçəng',             wrong: 'şiş'              },
  { en: 'disease',       tr: 'xəstəlik',            wrong: 'virus'            },
  { en: 'doctor',        tr: 'həkim',               wrong: 'cərrah'           },
  { en: 'emergency',     tr: 'fövqəladə hal',       wrong: 'təcili yardım'    },
  { en: 'fitness',       tr: 'fiziki forma',        wrong: 'sağlamlıq'        },
  { en: 'heal',          tr: 'sağalmaq',            wrong: 'müalicə olmaq'    },
  { en: 'health',        tr: 'sağlamlıq',           wrong: 'güc'              },
  { en: 'hospital',      tr: 'xəstəxana',           wrong: 'klinika'          },
  { en: 'illness',       tr: 'xəstəlik',            wrong: 'əziyyət'          },
  { en: 'injury',        tr: 'xəsarət',             wrong: 'yara'             },
  { en: 'medicine',      tr: 'dərman',              wrong: 'müalicə'          },
  { en: 'mental health', tr: 'zehni sağlamlıq',     wrong: 'psixoloji vəziyyət'},
  { en: 'nurse',         tr: 'tibb bacısı',         wrong: 'həkim'            },
  { en: 'patient',       tr: 'xəstə',               wrong: 'müraciət edən'    },
  { en: 'surgery',       tr: 'əməliyyat',           wrong: 'müalicə'          },
  { en: 'symptom',       tr: 'simptom',             wrong: 'diaqnoz'          },
  { en: 'therapy',       tr: 'terapiya',            wrong: 'müalicə'          },
  { en: 'treatment',     tr: 'müalicə',             wrong: 'əməliyyat'        },
  { en: 'virus',         tr: 'virus',               wrong: 'bakteriya'        },
  { en: 'wound',         tr: 'yara',                wrong: 'xəsarət'          },
],

// ─────────────────────── QUIZ 36 — Technology & Innovation ───────────────────────
[
  { en: 'computer',              tr: 'kompüter',            wrong: 'planşet'          },
  { en: 'device',                tr: 'cihaz',               wrong: 'avadanlıq'         },
  { en: 'digital',               tr: 'rəqəmsal',            wrong: 'elektron'          },
  { en: 'electronic',            tr: 'elektron',            wrong: 'rəqəmsal'          },
  { en: 'gadget',                tr: 'qadcet',              wrong: 'cihaz'             },
  { en: 'innovation',            tr: 'yenilik',             wrong: 'ixtira'            },
  { en: 'internet',              tr: 'internet',            wrong: 'şəbəkə'            },
  { en: 'laptop',                tr: 'noutbuk',             wrong: 'planşet'           },
  { en: 'machine',               tr: 'maşın',               wrong: 'mexanizm'          },
  { en: 'network',               tr: 'şəbəkə',              wrong: 'sistem'            },
  { en: 'online',                tr: 'onlayn',              wrong: 'rəqəmsal'          },
  { en: 'robot',                 tr: 'robot',               wrong: 'avtomatlaşdırma'   },
  { en: 'software',              tr: 'proqram təminatı',    wrong: 'avadanlıq'         },
  { en: 'smartphone',            tr: 'ağıllı telefon',      wrong: 'planşet'           },
  { en: 'technology',            tr: 'texnologiya',         wrong: 'elm'               },
  { en: 'update',                tr: 'yeniləmək',           wrong: 'qurmaq'            },
  { en: 'virtual',               tr: 'virtual',             wrong: 'rəqəmsal'          },
  { en: 'website',               tr: 'vebsayt',             wrong: 'proqram'           },
  { en: 'app',                   tr: 'tətbiq',              wrong: 'proqram'           },
  { en: 'artificial intelligence', tr: 'süni intellekt',   wrong: 'maşın öyrənməsi'   },
],

// ─────────────────────── QUIZ 37 — Travel & Holidays ───────────────────────
[
  { en: 'accommodation', tr: 'yaşayış yeri',        wrong: 'otel'             },
  { en: 'airport',       tr: 'hava limanı',         wrong: 'terminal'         },
  { en: 'booking',       tr: 'rezervasiya',         wrong: 'bilet'            },
  { en: 'destination',   tr: 'təyinat yeri',        wrong: 'marşrut'          },
  { en: 'flight',        tr: 'uçuş',                wrong: 'səyahət'          },
  { en: 'holiday',       tr: 'tətil',               wrong: 'istirahət'        },
  { en: 'hotel',         tr: 'otel',                wrong: 'hostel'           },
  { en: 'journey',       tr: 'səyahət',             wrong: 'gəzinti'          },
  { en: 'luggage',       tr: 'baqaj',               wrong: 'çanta'            },
  { en: 'passport',      tr: 'pasport',             wrong: 'viza'             },
  { en: 'reservation',   tr: 'yer ayırtma',         wrong: 'sifariş'          },
  { en: 'resort',        tr: 'kurort',              wrong: 'otel'             },
  { en: 'ticket',        tr: 'bilet',               wrong: 'kupon'            },
  { en: 'tourism',       tr: 'turizm',              wrong: 'səyahət'          },
  { en: 'tourist',       tr: 'turist',              wrong: 'səyyah'           },
  { en: 'transport',     tr: 'nəqliyyat',           wrong: 'daşıma'           },
  { en: 'trip',          tr: 'gəzinti',             wrong: 'səyahət'          },
  { en: 'vacation',      tr: 'məzuniyyət',          wrong: 'tətil'            },
  { en: 'visa',          tr: 'viza',                wrong: 'icazə'            },
  { en: 'voyage',        tr: 'gəmi səyahəti',       wrong: 'kruiz'            },
],

// ─────────────────────── QUIZ 38 — Food & Shopping ───────────────────────
[
  { en: 'customer',      tr: 'müştəri',             wrong: 'alıcı'            },
  { en: 'discount',      tr: 'endirim',             wrong: 'bonus'            },
  { en: 'ingredient',    tr: 'inqredient',          wrong: 'resept'           },
  { en: 'market',        tr: 'bazar',               wrong: 'mağaza'           },
  { en: 'meal',          tr: 'yemək',               wrong: 'xörək'            },
  { en: 'menu',          tr: 'menyu',               wrong: 'siyahı'           },
  { en: 'price',         tr: 'qiymət',              wrong: 'dəyər'            },
  { en: 'product',       tr: 'məhsul',              wrong: 'əşya'             },
  { en: 'recipe',        tr: 'resept',              wrong: 'inqredient'       },
  { en: 'restaurant',    tr: 'restoran',            wrong: 'kafe'             },
  { en: 'sale',          tr: 'satış',               wrong: 'endirim'          },
  { en: 'shop',          tr: 'mağaza',              wrong: 'bazar'            },
  { en: 'shopping',      tr: 'alış-veriş',          wrong: 'satış'            },
  { en: 'supermarket',   tr: 'supermarket',         wrong: 'bazar'            },
  { en: 'taste',         tr: 'dad',                 wrong: 'iy'               },
  { en: 'afford',        tr: 'gücü çatmaq',         wrong: 'almaq'            },
  { en: 'bargain',       tr: 'sövdələşmə',          wrong: 'endirim'          },
  { en: 'brand',         tr: 'marka',               wrong: 'model'            },
  { en: 'luxury',        tr: 'lüks',                wrong: 'bahalı'           },
  { en: 'purchase',      tr: 'satın almaq',         wrong: 'əldə etmək'       },
],

// ─────────────────────── QUIZ 39 — House & Everyday Life ───────────────────────
[
  { en: 'appliance',     tr: 'məişət texnikası',    wrong: 'cihaz'            },
  { en: 'bedroom',       tr: 'yataq otağı',         wrong: 'oturma otağı'     },
  { en: 'building',      tr: 'bina',                wrong: 'tikili'           },
  { en: 'ceiling',       tr: 'tavan',               wrong: 'döşəmə'           },
  { en: 'furniture',     tr: 'mebel',               wrong: 'dekor'            },
  { en: 'garage',        tr: 'qaraj',               wrong: 'anbar'            },
  { en: 'garden',        tr: 'bağ',                 wrong: 'həyət'            },
  { en: 'heating',       tr: 'isitmə',              wrong: 'ventilyasiya'     },
  { en: 'home',          tr: 'ev',                  wrong: 'mənzil'           },
  { en: 'household',     tr: 'ev təsərrüfatı',      wrong: 'ailə'             },
  { en: 'kitchen',       tr: 'mətbəx',              wrong: 'hamam'            },
  { en: 'living room',   tr: 'oturma otağı',        wrong: 'yataq otağı'      },
  { en: 'neighbour',     tr: 'qonşu',               wrong: 'tanış'            },
  { en: 'rent',          tr: 'icarə',               wrong: 'ödəniş'           },
  { en: 'repair',        tr: 'təmir etmək',         wrong: 'düzəltmək'        },
  { en: 'roof',          tr: 'dam',                 wrong: 'tavan'            },
  { en: 'wall',          tr: 'divar',               wrong: 'hasar'            },
  { en: 'window',        tr: 'pəncərə',             wrong: 'qapı'             },
  { en: 'furniture',     tr: 'mebel',               wrong: 'avadanlıq'        },
  { en: 'cottage',       tr: 'kiçik ev',            wrong: 'villa'            },
],

// ─────────────────────── QUIZ 40 — Remaining Mixed Words ───────────────────────
[
  { en: 'abandon',       tr: 'tərk etmək',          wrong: 'buraxmaq'         },
  { en: 'absent',        tr: 'yoxdur / olmayan',    wrong: 'hazır deyil'      },
  { en: 'absolute',      tr: 'mütləq',              wrong: 'tam'              },
  { en: 'absorb',        tr: 'udmaq / mənimsəmək',  wrong: 'əmib götürmək'    },
  { en: 'accent',        tr: 'vurğu / ləhcə',       wrong: 'tələffüz'         },
  { en: 'accidentally',  tr: 'təsadüfən',           wrong: 'bilməyərəkdən'    },
  { en: 'accommodate',   tr: 'yerləşdirmək',        wrong: 'qəbul etmək'      },
  { en: 'accompany',     tr: 'müşayiət etmək',      wrong: 'birlikdə getmək'  },
  { en: 'accuracy',      tr: 'dəqiqlik',            wrong: 'düzgünlük'        },
  { en: 'accuse',        tr: 'ittiham etmək',       wrong: 'suçlamaq'         },
  { en: 'acknowledge',   tr: 'etiraf etmək',        wrong: 'qəbul etmək'      },
  { en: 'acquire',       tr: 'əldə etmək',          wrong: 'almaq'            },
  { en: 'activate',      tr: 'aktivləşdirmək',      wrong: 'işə salmaq'       },
  { en: 'adequate',      tr: 'kifayət qədər',       wrong: 'uyğun'            },
  { en: 'adjust',        tr: 'tənzimləmək',         wrong: 'uyğunlaşmaq'      },
  { en: 'administration',tr: 'inzibatçılıq',        wrong: 'idarəetmə'        },
  { en: 'adopt',         tr: 'qəbul etmək',         wrong: 'tətbiq etmək'     },
  { en: 'affair',        tr: 'məsələ / iş',         wrong: 'hadisə'           },
  { en: 'afterwards',    tr: 'sonradan',            wrong: 'daha sonra'       },
  { en: 'agenda',        tr: 'gündəlik',            wrong: 'proqram'          },
],
  
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 5 — C1: Orta Səviyyə I                   ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c1',
    name: 'C1 — ADVANCED',
    icon: '⚡',
    color: '#2EAA6E',
    quizzes: [
      // ─────────────────────── QUIZ 1 — Government & Politics (1) ───────────────────────
[
  { en: 'abolish',         tr: 'ləğv etmək',         wrong: 'qadağan etmək'    },
  { en: 'accountability',  tr: 'hesabatlılıq',        wrong: 'şəffaflıq'        },
  { en: 'accountable',     tr: 'məsuliyyətli',        wrong: 'etibarlı'         },
  { en: 'administration',  tr: 'idarəetmə',           wrong: 'hökumət'          },
  { en: 'administrative',  tr: 'inzibati',            wrong: 'hüquqi'           },
  { en: 'administrator',   tr: 'inzibatçı',           wrong: 'nazir'            },
  { en: 'ambassador',      tr: 'səfir',               wrong: 'konsul'           },
  { en: 'amendment',       tr: 'düzəliş',             wrong: 'qanun'            },
  { en: 'ballot',          tr: 'səsvermə bülleteni',  wrong: 'seçki'            },
  { en: 'bureaucracy',     tr: 'bürokratiya',         wrong: 'demokratiya'      },
  { en: 'cabinet',         tr: 'kabinet',             wrong: 'parlament'        },
  { en: 'coalition',       tr: 'koalisiya',           wrong: 'ittifaq'          },
  { en: 'congress',        tr: 'kongres',             wrong: 'parlament'        },
  { en: 'constitution',    tr: 'konstitusiya',        wrong: 'qanun'            },
  { en: 'constitutional',  tr: 'konstitusional',      wrong: 'hüquqi'           },
  { en: 'councillor',      tr: 'şura üzvü',           wrong: 'deputat'          },
  { en: 'democracy',       tr: 'demokratiya',         wrong: 'respublika'       },
  { en: 'diplomatic',      tr: 'diplomatik',          wrong: 'siyasi'           },
  { en: 'election',        tr: 'seçki',               wrong: 'referendum'       },
  { en: 'electoral',       tr: 'seçki (sifət)',        wrong: 'siyasi'           },
],

// ─────────────────────── QUIZ 2 — Government & Politics (2) ───────────────────────
[
  { en: 'governance',   tr: 'idarəçilik',          wrong: 'siyasət'          },
  { en: 'ideology',     tr: 'ideologiya',           wrong: 'fəlsəfə'          },
  { en: 'judicial',     tr: 'məhkəmə (sifət)',      wrong: 'hüquqi'           },
  { en: 'jurisdiction', tr: 'yurisdiksiya',         wrong: 'səlahiyyət'       },
  { en: 'legislation',  tr: 'qanunvericilik',       wrong: 'idarəetmə'        },
  { en: 'legislative',  tr: 'qanunverici',          wrong: 'icraedici'        },
  { en: 'legislature',  tr: 'qanunverici orqan',    wrong: 'məhkəmə'          },
  { en: 'mandate',      tr: 'mandat',               wrong: 'səlahiyyət'       },
  { en: 'ministry',     tr: 'nazirlik',             wrong: 'idarə'            },
  { en: 'parliament',   tr: 'parlament',            wrong: 'kongres'          },
  { en: 'policy',       tr: 'siyasət',              wrong: 'qanun'            },
  { en: 'political',    tr: 'siyasi',               wrong: 'iqtisadi'         },
  { en: 'politician',   tr: 'siyasətçi',            wrong: 'dövlət xadimi'    },
  { en: 'presidency',   tr: 'prezidentlik',         wrong: 'baş nazirlik'     },
  { en: 'referendum',   tr: 'referendum',           wrong: 'seçki'            },
  { en: 'regime',       tr: 'rejim',                wrong: 'hökumət'          },
  { en: 'regulation',   tr: 'tənzimləmə',           wrong: 'qanun'            },
  { en: 'regulatory',   tr: 'tənzimləyici',         wrong: 'icraedici'        },
  { en: 'sovereignty',  tr: 'suverenlik',           wrong: 'müstəqillik'      },
  { en: 'treaty',       tr: 'müqavilə',             wrong: 'saziş'            },
],

// ─────────────────────── QUIZ 3 — Law & Justice ───────────────────────
[
  { en: 'accusation',  tr: 'ittiham',           wrong: 'şikayət'         },
  { en: 'allegation',  tr: 'iddia',             wrong: 'ittiham'         },
  { en: 'allege',      tr: 'iddia etmək',       wrong: 'sübut etmək'     },
  { en: 'asylum',      tr: 'sığınacaq',         wrong: 'qaçqın statusu'  },
  { en: 'breach',      tr: 'pozuntu',           wrong: 'cinayət'         },
  { en: 'conviction',  tr: 'məhkumetmə',        wrong: 'bəraət'          },
  { en: 'corruption',  tr: 'korrupsiya',        wrong: 'cinayət'         },
  { en: 'custody',     tr: 'həbs',              wrong: 'cərimə'          },
  { en: 'defendant',   tr: 'müttəhim',          wrong: 'şahid'           },
  { en: 'detention',   tr: 'saxlanılma',        wrong: 'həbs'            },
  { en: 'enforcement', tr: 'icra',              wrong: 'tənzimləmə'      },
  { en: 'felony',      tr: 'ağır cinayət',      wrong: 'xırda cinayət'   },
  { en: 'guilty',      tr: 'günahkar',          wrong: 'günahsız'        },
  { en: 'indictment',  tr: 'ittihamnamə',       wrong: 'hökm'            },
  { en: 'innocent',    tr: 'günahsız',          wrong: 'günahkar'        },
  { en: 'judicial',    tr: 'məhkəmə (sifət)',   wrong: 'hüquqi'          },
  { en: 'jurisdiction',tr: 'yurisdiksiya',      wrong: 'səlahiyyət'      },
  { en: 'justice',     tr: 'ədalət',            wrong: 'qanun'           },
  { en: 'lawsuit',     tr: 'məhkəmə işi',       wrong: 'şikayət'         },
  { en: 'verdict',     tr: 'hökm',              wrong: 'qərar'           },
],

// ─────────────────────── QUIZ 4 — Crime & Conflict ───────────────────────
[
  { en: 'assassination', tr: 'sui-qəsd',           wrong: 'qətl'           },
  { en: 'assault',       tr: 'hücum',              wrong: 'döyüş'          },
  { en: 'atrocity',      tr: 'vəhşilik',           wrong: 'zorakılıq'      },
  { en: 'combat',        tr: 'döyüş',              wrong: 'hücum'          },
  { en: 'conspiracy',    tr: 'sui-qəsd planı',     wrong: 'fitnə'          },
  { en: 'corruption',    tr: 'korrupsiya',         wrong: 'saxtakarlıq'    },
  { en: 'coup',          tr: 'çevriliş',           wrong: 'inqilab'        },
  { en: 'crime',         tr: 'cinayət',            wrong: 'günah'          },
  { en: 'detain',        tr: 'saxlamaq',           wrong: 'həbs etmək'     },
  { en: 'felony',        tr: 'ağır cinayət',       wrong: 'xırda cinayət'  },
  { en: 'genocide',      tr: 'soyqırım',           wrong: 'müharibə'       },
  { en: 'guerrilla',     tr: 'partizan',           wrong: 'əsgər'          },
  { en: 'hostage',       tr: 'girov',              wrong: 'məhbus'         },
  { en: 'raid',          tr: 'basqın',             wrong: 'hücum'          },
  { en: 'rape',          tr: 'zorlanma',           wrong: 'zorakılıq'      },
  { en: 'riot',          tr: 'iğtişaş',            wrong: 'etiraz'         },
  { en: 'terrorism',     tr: 'terrorçuluq',        wrong: 'ekstremizm'     },
  { en: 'torture',       tr: 'işgəncə',            wrong: 'zorakılıq'      },
  { en: 'violation',     tr: 'pozuntu',            wrong: 'cinayət'        },
  { en: 'warfare',       tr: 'müharibə',           wrong: 'döyüş'          },
],

// ─────────────────────── QUIZ 5 — Business & Economy (1) ───────────────────────
[
  { en: 'accumulation',   tr: 'toplanma',             wrong: 'artım'              },
  { en: 'bankruptcy',     tr: 'iflas',                wrong: 'borc'               },
  { en: 'budget',         tr: 'büdcə',                wrong: 'xərc'               },
  { en: 'capitalism',     tr: 'kapitalizm',           wrong: 'sosializm'          },
  { en: 'commodity',      tr: 'əmtəə',                wrong: 'məhsul'             },
  { en: 'compensation',   tr: 'kompensasiya',         wrong: 'maaş'               },
  { en: 'contractor',     tr: 'podratçı',             wrong: 'işçi'               },
  { en: 'corporation',    tr: 'korporasiya',          wrong: 'şirkət'             },
  { en: 'deficit',        tr: 'kəsir',                wrong: 'borc'               },
  { en: 'expenditure',    tr: 'xərc',                 wrong: 'büdcə'              },
  { en: 'fiscal',         tr: 'fiskal',               wrong: 'maliyyə'            },
  { en: 'franchise',      tr: 'françayzinq',          wrong: 'lisenziya'          },
  { en: 'funding',        tr: 'maliyyələşdirmə',      wrong: 'investisiya'        },
  { en: 'investment',     tr: 'investisiya',          wrong: 'kredit'             },
  { en: 'marketplace',    tr: 'bazarlıq',             wrong: 'bazar'              },
  { en: 'merger',         tr: 'birləşmə',             wrong: 'alım'               },
  { en: 'monopoly',       tr: 'inhisar',              wrong: 'kartell'            },
  { en: 'privatization',  tr: 'özəlləşdirmə',         wrong: 'milliləşdirmə'      },
  { en: 'profit',         tr: 'mənfəət',              wrong: 'gəlir'              },
  { en: 'revenue',        tr: 'gəlir',                wrong: 'mənfəət'            },
],
// ─────────────────────── QUIZ 6 — Business & Economy (2) ───────────────────────
[
  { en: 'accountability', tr: 'hesabatlılıq',        wrong: 'şəffaflıq'          },
  { en: 'acquisition',    tr: 'əldə etmə',           wrong: 'birləşmə'           },
  { en: 'allocation',     tr: 'bölüşdürmə',          wrong: 'paylaşma'           },
  { en: 'asset',          tr: 'aktiv',               wrong: 'kapital'            },
  { en: 'audit',          tr: 'audit',               wrong: 'yoxlama'            },
  { en: 'beneficiary',    tr: 'faydalanan',          wrong: 'alıcı'              },
  { en: 'compensation',   tr: 'kompensasiya',        wrong: 'maaş'               },
  { en: 'enterprise',     tr: 'müəssisə',            wrong: 'şirkət'             },
  { en: 'fiscal',         tr: 'fiskal',              wrong: 'maliyyə'            },
  { en: 'infrastructure', tr: 'infrastruktur',       wrong: 'quruluş'            },
  { en: 'investment',     tr: 'investisiya',         wrong: 'kredit'             },
  { en: 'liability',      tr: 'öhdəlik',             wrong: 'borc'               },
  { en: 'merger',         tr: 'birləşmə',            wrong: 'alım'               },
  { en: 'productivity',   tr: 'məhsuldarlıq',        wrong: 'səmərəlilik'        },
  { en: 'profitable',     tr: 'gəlirli',             wrong: 'uğurlu'             },
  { en: 'shareholder',    tr: 'səhmdar',             wrong: 'investor'           },
  { en: 'subsidy',        tr: 'subsidiya',           wrong: 'maliyyə yardımı'    },
  { en: 'transaction',    tr: 'əməliyyat',           wrong: 'ödəniş'             },
  { en: 'turnover',       tr: 'dövriyyə',            wrong: 'gəlir'              },
  { en: 'yield',          tr: 'gəlir (investisiya)', wrong: 'mənfəət'            },
],

// ─────────────────────── QUIZ 7 — Society & Social Issues ───────────────────────
[
  { en: 'abortion',        tr: 'abort',              wrong: 'doğuş'            },
  { en: 'discrimination',  tr: 'ayrı-seçkilik',      wrong: 'ədalətsizlik'     },
  { en: 'diversity',       tr: 'müxtəliflik',        wrong: 'bərabərlik'       },
  { en: 'equality',        tr: 'bərabərlik',         wrong: 'ədalət'           },
  { en: 'inequality',      tr: 'bərabərsizlik',      wrong: 'ayrı-seçkilik'    },
  { en: 'integration',     tr: 'inteqrasiya',        wrong: 'birləşmə'         },
  { en: 'justice',         tr: 'ədalət',             wrong: 'hüquq'            },
  { en: 'liberty',         tr: 'azadlıq',            wrong: 'hüquq'            },
  { en: 'migration',       tr: 'miqrasiya',          wrong: 'köç'              },
  { en: 'minority',        tr: 'azlıq',              wrong: 'çoxluq'           },
  { en: 'prejudice',       tr: 'qərəz',              wrong: 'ayrı-seçkilik'    },
  { en: 'racism',          tr: 'irqçilik',           wrong: 'ayrı-seçkilik'    },
  { en: 'refugee',         tr: 'qaçqın',             wrong: 'mühacir'          },
  { en: 'rehabilitation',  tr: 'reabilitasiya',      wrong: 'müalicə'          },
  { en: 'solidarity',      tr: 'həmrəylik',          wrong: 'birlik'           },
  { en: 'tolerance',       tr: 'tolerantlıq',        wrong: 'hörmət'           },
  { en: 'vulnerable',      tr: 'həssas',             wrong: 'zəif'             },
  { en: 'welfare',         tr: 'rifah',              wrong: 'yardım'           },
  { en: 'well-being',      tr: 'rifahlıq',           wrong: 'sağlamlıq'        },
  { en: 'workforce',       tr: 'işçi qüvvəsi',       wrong: 'əmək bazarı'      },
],

// ─────────────────────── QUIZ 8 — Psychology & Emotions ───────────────────────
[
  { en: 'anxiety',         tr: 'narahatlıq',         wrong: 'qorxu'           },
  { en: 'consciousness',   tr: 'şüur',               wrong: 'idrak'           },
  { en: 'depression',      tr: 'depressiya',         wrong: 'kədər'           },
  { en: 'dignity',         tr: 'ləyaqət',            wrong: 'şərəf'           },
  { en: 'ego',             tr: 'ego',                wrong: 'özünəinam'       },
  { en: 'embarrassment',   tr: 'utanc',              wrong: 'xəcalət'         },
  { en: 'frustration',     tr: 'məyusluq',           wrong: 'kədər'           },
  { en: 'grief',           tr: 'yas',                wrong: 'kədər'           },
  { en: 'guilt',           tr: 'günah hissi',        wrong: 'peşmançılıq'     },
  { en: 'humiliation',     tr: 'alçaldılma',         wrong: 'utanc'           },
  { en: 'irony',           tr: 'ironi',              wrong: 'sarkazm'         },
  { en: 'obsession',       tr: 'obsessiya',          wrong: 'vəsvəsə'         },
  { en: 'optimism',        tr: 'optimizm',           wrong: 'nikbinlik'       },
  { en: 'perception',      tr: 'qavrayış',           wrong: 'anlayış'         },
  { en: 'psychological',   tr: 'psixoloji',          wrong: 'emosional'       },
  { en: 'resentment',      tr: 'inciklik',           wrong: 'küskünlük'       },
  { en: 'sentiment',       tr: 'hiss',               wrong: 'duyğu'           },
  { en: 'trauma',          tr: 'travma',             wrong: 'zərbə'           },
  { en: 'vulnerability',   tr: 'həssaslıq',          wrong: 'zəiflik'         },
  { en: 'willingness',     tr: 'istək',              wrong: 'hazırlıq'        },
],

// ─────────────────────── QUIZ 9 — Abstract Concepts & Thinking ───────────────────────
[
  { en: 'analogy',       tr: 'anoloji',          wrong: 'müqayisə'        },
  { en: 'aspect',        tr: 'aspekt',           wrong: 'cəhət'           },
  { en: 'assumption',    tr: 'fərziyyə',         wrong: 'nəticə'          },
  { en: 'concept',       tr: 'konsept',          wrong: 'fikir'           },
  { en: 'consciousness', tr: 'şüur',             wrong: 'idrak'           },
  { en: 'context',       tr: 'kontekst',         wrong: 'məzmun'          },
  { en: 'criterion',     tr: 'meyar',            wrong: 'standart'        },
  { en: 'dimension',     tr: 'ölçü',             wrong: 'aspekt'          },
  { en: 'doctrine',      tr: 'doktrina',         wrong: 'nəzəriyyə'       },
  { en: 'essence',       tr: 'mahiyyət',         wrong: 'məzmun'          },
  { en: 'hypothesis',    tr: 'hipotez',          wrong: 'nəzəriyyə'       },
  { en: 'ideology',      tr: 'ideologiya',       wrong: 'fəlsəfə'         },
  { en: 'logic',         tr: 'məntiq',           wrong: 'düşüncə'         },
  { en: 'notion',        tr: 'anlayış',          wrong: 'fikir'           },
  { en: 'perspective',   tr: 'perspektiv',       wrong: 'baxış'           },
  { en: 'philosophy',    tr: 'fəlsəfə',          wrong: 'ideologiya'      },
  { en: 'principle',     tr: 'prinsip',          wrong: 'qayda'           },
  { en: 'reasoning',     tr: 'mühakimə',         wrong: 'düşüncə'         },
  { en: 'spectrum',      tr: 'spektr',           wrong: 'diapazon'        },
  { en: 'thesis',        tr: 'tezis',            wrong: 'hipotez'         },
],

// ─────────────────────── QUIZ 10 — Actions & Processes (1) ───────────────────────
[
  { en: 'accelerate',     tr: 'sürətləndirmək',           wrong: 'artırmaq'               },
  { en: 'accumulate',     tr: 'toplamaq',                 wrong: 'yığmaq'                 },
  { en: 'administer',     tr: 'idarə etmək',              wrong: 'tənzimləmək'            },
  { en: 'allocate',       tr: 'bölüşdürmək',              wrong: 'paylaşmaq'              },
  { en: 'assess',         tr: 'qiymətləndirmək',          wrong: 'yoxlamaq'               },
  { en: 'attribute',      tr: 'aid etmək',                wrong: 'bağlamaq'               },
  { en: 'circulate',      tr: 'dövriyyəyə buraxmaq',      wrong: 'yaymaq'                 },
  { en: 'collaborate',    tr: 'əməkdaşlıq etmək',         wrong: 'birləşmək'              },
  { en: 'compensate',     tr: 'kompensasiya vermək',      wrong: 'ödəmək'                 },
  { en: 'comprise',       tr: 'əhatə etmək',              wrong: 'daxil etmək'            },
  { en: 'conceive',       tr: 'düşünmək',                 wrong: 'planlaşdırmaq'          },
  { en: 'confer',         tr: 'müzakirə etmək',           wrong: 'danışmaq'               },
  { en: 'consolidate',    tr: 'möhkəmləndirmək',          wrong: 'birləşdirmək'           },
  { en: 'constitute',     tr: 'təşkil etmək',             wrong: 'yaratmaq'               },
  { en: 'coordinate',     tr: 'əlaqələndirmək',           wrong: 'idarə etmək'            },
  { en: 'correlate',      tr: 'əlaqəsi olmaq',            wrong: 'müqayisə etmək'         },
  { en: 'demonstrate',    tr: 'nümayiş etdirmək',         wrong: 'göstərmək'              },
  { en: 'deploy',         tr: 'yerləşdirmək',             wrong: 'göndərmək'              },
  { en: 'derive',         tr: 'hasil etmək',              wrong: 'almaq'                  },
  { en: 'differentiate',  tr: 'fərqləndirmək',            wrong: 'ayırmaq'                },
],

// ─────────────────────── QUIZ 11 — Actions & Processes (2) ───────────────────────
[
  { en: 'enforce',     tr: 'tətbiq etmək',               wrong: 'həyata keçirmək'         },
  { en: 'enhance',     tr: 'artırmaq',                   wrong: 'yaxşılaşdırmaq'          },
  { en: 'ensure',      tr: 'təmin etmək',                wrong: 'zəmanət vermək'          },
  { en: 'establish',   tr: 'yaratmaq',                   wrong: 'qurmaq'                  },
  { en: 'evaluate',    tr: 'qiymətləndirmək',            wrong: 'yoxlamaq'                },
  { en: 'evolve',      tr: 'inkişaf etmək',              wrong: 'dəyişmək'                },
  { en: 'execute',     tr: 'icra etmək',                 wrong: 'həyata keçirmək'         },
  { en: 'exert',       tr: 'səy göstərmək',              wrong: 'tətbiq etmək'            },
  { en: 'facilitate',  tr: 'asanlaşdırmaq',              wrong: 'kömək etmək'             },
  { en: 'formulate',   tr: 'formalaşdırmaq',             wrong: 'hazırlamaq'              },
  { en: 'implement',   tr: 'həyata keçirmək',            wrong: 'tətbiq etmək'            },
  { en: 'impose',      tr: 'tətbiq etmək (məcburi)',     wrong: 'qoymaq'                  },
  { en: 'initiate',    tr: 'başlamaq',                   wrong: 'həyata keçirmək'         },
  { en: 'integrate',   tr: 'inteqrasiya etmək',          wrong: 'birləşdirmək'            },
  { en: 'intervene',   tr: 'müdaxilə etmək',             wrong: 'qarışmaq'                },
  { en: 'manipulate',  tr: 'manipulyasiya etmək',        wrong: 'idarə etmək'             },
  { en: 'maximise',    tr: 'maksimallaşdırmaq',          wrong: 'artırmaq'                },
  { en: 'minimise',    tr: 'minimuma endirmək',          wrong: 'azaltmaq'                },
  { en: 'monitor',     tr: 'izləmək',                   wrong: 'nəzarət etmək'           },
  { en: 'negotiate',   tr: 'danışıqlar aparmaq',         wrong: 'müzakirə etmək'          },
],

// ─────────────────────── QUIZ 12 — Change & Development ───────────────────────
[
  { en: 'adaptation',      tr: 'adaptasiya',            wrong: 'dəyişiklik'         },
  { en: 'breakthrough',    tr: 'irəliləyiş',            wrong: 'nailiyyət'          },
  { en: 'conversion',      tr: 'çevrilmə',              wrong: 'dəyişiklik'         },
  { en: 'deterioration',   tr: 'pisləşmə',              wrong: 'tənəzzül'           },
  { en: 'evolution',       tr: 'təkamül',               wrong: 'inkişaf'            },
  { en: 'expansion',       tr: 'genişlənmə',            wrong: 'böyümə'             },
  { en: 'innovation',      tr: 'innovasiya',            wrong: 'ixtira'             },
  { en: 'modification',    tr: 'modifikasiya',          wrong: 'dəyişiklik'         },
  { en: 'progress',        tr: 'tərəqqi',               wrong: 'inkişaf'            },
  { en: 'reform',          tr: 'islahat',               wrong: 'dəyişiklik'         },
  { en: 'revolution',      tr: 'inqilab',               wrong: 'çevriliş'           },
  { en: 'transformation',  tr: 'transformasiya',        wrong: 'dəyişiklik'         },
  { en: 'transition',      tr: 'keçid',                 wrong: 'dəyişiklik'         },
  { en: 'upgrade',         tr: 'təkmilləşdirmə',        wrong: 'yeniləmə'           },
  { en: 'accelerate',      tr: 'sürətləndirmək',        wrong: 'artırmaq'           },
  { en: 'evolve',          tr: 'inkişaf etmək',         wrong: 'dəyişmək'           },
  { en: 'flourish',        tr: 'çiçəklənmək',           wrong: 'inkişaf etmək'      },
  { en: 'thrive',          tr: 'uğurla inkişaf etmək',  wrong: 'böyümək'            },
  { en: 'undermine',       tr: 'zəiflətmək',            wrong: 'baltalamaq'         },
  { en: 'upgrade',         tr: 'təkmilləşdirmək',       wrong: 'yeniləmək'          },
],

// ─────────────────────── QUIZ 13 — Media & Communication ───────────────────────
[
  { en: 'broadcast',      tr: 'yayımlamaq',             wrong: 'nəşr etmək'          },
  { en: 'commentary',     tr: 'şərh',                   wrong: 'rəy'                 },
  { en: 'correspondent',  tr: 'müxbir',                 wrong: 'jurnalist'           },
  { en: 'coverage',       tr: 'işıqlandırma',           wrong: 'xəbər'               },
  { en: 'discourse',      tr: 'diskurs',                wrong: 'müzakirə'            },
  { en: 'editor',         tr: 'redaktor',               wrong: 'jurnalist'           },
  { en: 'headline',       tr: 'başlıq',                 wrong: 'xəbər'               },
  { en: 'journalist',     tr: 'jurnalist',              wrong: 'müxbir'              },
  { en: 'propaganda',     tr: 'təbliğat',               wrong: 'reklam'              },
  { en: 'publication',    tr: 'nəşr',                   wrong: 'məqalə'              },
  { en: 'rhetoric',       tr: 'ritorika',               wrong: 'natiqlik'            },
  { en: 'scrutiny',       tr: 'diqqətli nəzarət',       wrong: 'yoxlama'             },
  { en: 'spectrum',       tr: 'spektr',                 wrong: 'diapazon'            },
  { en: 'transcript',     tr: 'transkript',             wrong: 'protokol'            },
  { en: 'transmission',   tr: 'ötürülmə',               wrong: 'yayım'               },
  { en: 'articulate',     tr: 'aydın ifadə etmək',      wrong: 'danışmaq'            },
  { en: 'convey',         tr: 'çatdırmaq',              wrong: 'bildirmək'           },
  { en: 'explicit',       tr: 'açıq',                   wrong: 'aydın'               },
  { en: 'implicit',       tr: 'gizli',                  wrong: 'örtülü'              },
  { en: 'irony',          tr: 'ironi',                  wrong: 'sarkazm'             },
],

// ─────────────────────── QUIZ 14 — Science & Research ───────────────────────
[
  { en: 'empirical',      tr: 'empirik',            wrong: 'nəzəri'           },
  { en: 'hypothesis',     tr: 'hipotez',            wrong: 'nəzəriyyə'        },
  { en: 'laboratory',     tr: 'laboratoriya',       wrong: 'tədqiqat mərkəzi' },
  { en: 'parameter',      tr: 'parametr',           wrong: 'göstərici'        },
  { en: 'ratio',          tr: 'nisbət',             wrong: 'faiz'             },
  { en: 'specimen',       tr: 'nümunə',             wrong: 'model'            },
  { en: 'statistical',    tr: 'statistik',          wrong: 'rəqəmsal'         },
  { en: 'synthesis',      tr: 'sintez',             wrong: 'analiz'           },
  { en: 'theoretical',    tr: 'nəzəri',             wrong: 'empirik'          },
  { en: 'thesis',         tr: 'tezis',              wrong: 'hipotez'          },
  { en: 'variable',       tr: 'dəyişən',            wrong: 'sabit'            },
  { en: 'analysis',       tr: 'analiz',             wrong: 'tədqiqat'         },
  { en: 'correlation',    tr: 'korrelyasiya',       wrong: 'əlaqə'            },
  { en: 'diagnosis',      tr: 'diaqnoz',            wrong: 'müayinə'          },
  { en: 'equation',       tr: 'tənlik',             wrong: 'düstur'           },
  { en: 'experimental',   tr: 'eksperimental',      wrong: 'praktik'          },
  { en: 'genetic',        tr: 'genetik',            wrong: 'bioloji'          },
  { en: 'molecular',      tr: 'molekulyar',         wrong: 'atomik'           },
  { en: 'quantum',        tr: 'kvant',              wrong: 'nüvə'             },
  { en: 'simulation',     tr: 'simulyasiya',        wrong: 'model'            },
],

// ─────────────────────── QUIZ 15 — Health & Medicine ───────────────────────
[
  { en: 'chronic',         tr: 'xroniki',                    wrong: 'kəskin'          },
  { en: 'diagnosis',       tr: 'diaqnoz',                    wrong: 'müayinə'         },
  { en: 'epidemic',        tr: 'epidemiya',                  wrong: 'pandemiya'       },
  { en: 'infection',       tr: 'infeksiya',                  wrong: 'virus'           },
  { en: 'injection',       tr: 'iynə',                       wrong: 'dərman'          },
  { en: 'medication',      tr: 'dərman',                     wrong: 'müalicə'         },
  { en: 'obesity',         tr: 'piylənmə',                   wrong: 'artıq çəki'      },
  { en: 'outbreak',        tr: 'xəstəliyin kütləvi yayılması', wrong: 'epidemiya'     },
  { en: 'psychiatric',     tr: 'psixiatrik',                 wrong: 'psixoloji'       },
  { en: 'rehabilitation',  tr: 'reabilitasiya',              wrong: 'müalicə'         },
  { en: 'surgeon',         tr: 'cərrah',                     wrong: 'həkim'           },
  { en: 'surgery',         tr: 'cərrahiyyə',                 wrong: 'əməliyyat'       },
  { en: 'syndrome',        tr: 'sindrom',                    wrong: 'xəstəlik'        },
  { en: 'therapy',         tr: 'terapiya',                   wrong: 'müalicə'         },
  { en: 'trauma',          tr: 'travma',                     wrong: 'zərbə'           },
  { en: 'tumour',          tr: 'şiş',                        wrong: 'xərçəng'         },
  { en: 'vaccine',         tr: 'vaksin',                     wrong: 'dərman'          },
  { en: 'virus',           tr: 'virus',                      wrong: 'bakteriya'       },
  { en: 'clinical',        tr: 'klinik',                     wrong: 'tibbi'           },
  { en: 'physician',       tr: 'terapevt',                   wrong: 'cərrah'          },
],

// ─────────────────────── QUIZ 16 — Environment & Nature ───────────────────────
[
  { en: 'biodiversity',  tr: 'biomüxtəliflik',    wrong: 'ekosistem'         },
  { en: 'conservation',  tr: 'mühafizə',          wrong: 'qoruma'            },
  { en: 'ecological',    tr: 'ekoloji',           wrong: 'ətraf mühit'       },
  { en: 'emission',      tr: 'emissiya',          wrong: 'çirklənmə'         },
  { en: 'greenhouse',    tr: 'istixana',          wrong: 'emissiya'          },
  { en: 'pollution',     tr: 'çirklənmə',         wrong: 'çirkab'            },
  { en: 'renewable',     tr: 'bərpa olunan',      wrong: 'alternativ'        },
  { en: 'sustainable',   tr: 'davamlı',           wrong: 'ekoloji'           },
  { en: 'wildlife',      tr: 'vəhşi təbiət',      wrong: 'fauna'             },
  { en: 'climate',       tr: 'iqlim',             wrong: 'hava'              },
  { en: 'degradation',   tr: 'deqradasiya',       wrong: 'pisləşmə'          },
  { en: 'habitat',       tr: 'yaşayış mühiti',    wrong: 'ekosistem'         },
  { en: 'marine',        tr: 'dəniz (sifət)',      wrong: 'su'                },
  { en: 'sustainability',tr: 'davamlılıq',        wrong: 'bərpa'             },
  { en: 'ecosystem',     tr: 'ekosistem',         wrong: 'biomüxtəliflik'    },
  { en: 'erosion',       tr: 'eroziya',           wrong: 'parçalanma'        },
  { en: 'extinction',    tr: 'nəslin kəsilməsi',  wrong: 'yoxa çıxma'        },
  { en: 'ozone',         tr: 'ozon',              wrong: 'atmosfer'          },
  { en: 'recycling',     tr: 'təkrar emal',       wrong: 'utilizasiya'       },
  { en: 'toxic',         tr: 'zəhərli',           wrong: 'təhlükəli'         },
],

// ─────────────────────── QUIZ 17 — Art, Culture & Entertainment ───────────────────────
[
  { en: 'aesthetic',      tr: 'estetik',           wrong: 'bədii'           },
  { en: 'architectural',  tr: 'memarlıq (sifət)',  wrong: 'dizayn'          },
  { en: 'artistic',       tr: 'bədii',             wrong: 'yaradıcı'        },
  { en: 'canvas',         tr: 'kətan',             wrong: 'rəsm'            },
  { en: 'classical',      tr: 'klassik',           wrong: 'ənənəvi'         },
  { en: 'contemporary',   tr: 'müasir',            wrong: 'çağdaş'          },
  { en: 'exhibition',     tr: 'sərgi',             wrong: 'muzey'           },
  { en: 'genre',          tr: 'janr',              wrong: 'üslub'           },
  { en: 'heritage',       tr: 'miras',             wrong: 'ənənə'           },
  { en: 'literature',     tr: 'ədəbiyyat',         wrong: 'şeir'            },
  { en: 'manuscript',     tr: 'əlyazması',         wrong: 'sənəd'           },
  { en: 'masterpiece',    tr: 'şah əsər',          wrong: 'klassik'         },
  { en: 'melody',         tr: 'melodiya',          wrong: 'musiqi'          },
  { en: 'orchestra',      tr: 'orkestr',           wrong: 'ansambl'         },
  { en: 'portrait',       tr: 'portret',           wrong: 'rəsm'            },
  { en: 'sculpture',      tr: 'heykəltəraşlıq',   wrong: 'rəssamlıq'       },
  { en: 'symphony',       tr: 'simfoniya',         wrong: 'konçerto'        },
  { en: 'theatrical',     tr: 'teatr (sifət)',     wrong: 'dramatik'        },
  { en: 'masterpiece',    tr: 'şah əsər',          wrong: 'nadir əsər'      },
  { en: 'legendary',      tr: 'əfsanəvi',          wrong: 'məşhur'          },
],

// ─────────────────────── QUIZ 18 — Personality & Character ───────────────────────
[
  { en: 'cynical',       tr: 'kinik',             wrong: 'şübhəci'         },
  { en: 'optimistic',    tr: 'nikbin',            wrong: 'ümidli'          },
  { en: 'pessimistic',   tr: 'bədbin',            wrong: 'kədərli'         },
  { en: 'resilient',     tr: 'davamlı',           wrong: 'güclü'           },
  { en: 'sophisticated', tr: 'zərif',             wrong: 'mürəkkəb'        },
  { en: 'stubborn',      tr: 'inadkar',           wrong: 'sərt'            },
  { en: 'ambitious',     tr: 'ambisiyalı',        wrong: 'hədəfli'         },
  { en: 'arrogant',      tr: 'təkəbbürlü',        wrong: 'özündən razı'    },
  { en: 'charismatic',   tr: 'xarizmatik',        wrong: 'cəlbedici'       },
  { en: 'compassionate', tr: 'şəfqətli',          wrong: 'mehriban'        },
  { en: 'diplomatic',    tr: 'diplomatik',        wrong: 'nəzakətli'       },
  { en: 'eccentric',     tr: 'ekssentrik',        wrong: 'qəribə'          },
  { en: 'humble',        tr: 'təvazökar',         wrong: 'sadə'            },
  { en: 'influential',   tr: 'təsirli',           wrong: 'güclü'           },
  { en: 'naive',         tr: 'sadəlövh',          wrong: 'güvənən'         },
  { en: 'notorious',     tr: 'bədnam',            wrong: 'məşhur'          },
  { en: 'prestigious',   tr: 'nüfuzlu',           wrong: 'hörmətli'        },
  { en: 'radical',       tr: 'radikal',           wrong: 'ekstremist'      },
  { en: 'sceptical',     tr: 'şübhəci',           wrong: 'ehtiyatlı'       },
  { en: 'tolerant',      tr: 'tolerant',          wrong: 'hörmətli'        },
],

// ─────────────────────── QUIZ 19 — War & Military ───────────────────────
[
  { en: 'battlefield',  tr: 'döyüş meydanı',    wrong: 'cəbhə'           },
  { en: 'combat',       tr: 'döyüş',            wrong: 'müharibə'        },
  { en: 'deployment',   tr: 'yerləşdirmə',      wrong: 'göndərmə'        },
  { en: 'invasion',     tr: 'işğal',            wrong: 'hücum'           },
  { en: 'militant',     tr: 'silahlı',          wrong: 'döyüşçü'         },
  { en: 'military',     tr: 'hərbi',            wrong: 'silahlı'         },
  { en: 'missile',      tr: 'raket',            wrong: 'bomba'           },
  { en: 'troop',        tr: 'qoşun',            wrong: 'dəstə'           },
  { en: 'veteran',      tr: 'veteran',          wrong: 'əsgər'           },
  { en: 'warfare',      tr: 'müharibə',         wrong: 'döyüş'           },
  { en: 'warrior',      tr: 'döyüşçü',          wrong: 'əsgər'           },
  { en: 'armed',        tr: 'silahlı',          wrong: 'hərbi'           },
  { en: 'artillery',    tr: 'artilleriya',      wrong: 'silah'           },
  { en: 'ceasefire',    tr: 'atəşkəs',          wrong: 'sülh'            },
  { en: 'conflict',     tr: 'münaqişə',         wrong: 'toqquşma'        },
  { en: 'defence',      tr: 'müdafiə',          wrong: 'qorunma'         },
  { en: 'offensive',    tr: 'hücum',            wrong: 'basqın'          },
  { en: 'strategic',    tr: 'strateji',         wrong: 'taktik'          },
  { en: 'surrender',    tr: 'təslim olmaq',     wrong: 'geri çəkilmək'   },
  { en: 'tactical',     tr: 'taktik',           wrong: 'strateji'        },
],

// ─────────────────────── QUIZ 20 — Remaining Advanced Words (Mixed) ───────────────────────
[
  { en: 'absurd',         tr: 'absurd',                wrong: 'mənasız'         },
  { en: 'accessible',     tr: 'əlçatan',               wrong: 'mövcud'          },
  { en: 'accordingly',    tr: 'müvafiq olaraq',         wrong: 'buna görə'       },
  { en: 'adverse',        tr: 'mənfi',                 wrong: 'zərərli'         },
  { en: 'advocate',       tr: 'müdafiəçi',             wrong: 'tərəfdar'        },
  { en: 'arbitrary',      tr: 'özbaşına',              wrong: 'ixtiyari'        },
  { en: 'authentic',      tr: 'həqiqi',                wrong: 'orijinal'        },
  { en: 'autonomous',     tr: 'muxtariyyətli',         wrong: 'müstəqil'        },
  { en: 'biased',         tr: 'qərəzli',               wrong: 'ədalətsiz'       },
  { en: 'coherent',       tr: 'ardıcıl',               wrong: 'məntiqi'         },
  { en: 'consensus',      tr: 'konsensus',             wrong: 'razılaşma'       },
  { en: 'controversial',  tr: 'mübahisəli',            wrong: 'ziddiyyətli'     },
  { en: 'credible',       tr: 'etibarlı',              wrong: 'inandırıcı'      },
  { en: 'decisive',       tr: 'qəti',                  wrong: 'güclü'           },
  { en: 'dedicated',      tr: 'sadiq',                 wrong: 'həvəsli'         },
  { en: 'deliberate',     tr: 'qəsdən edilən',         wrong: 'bilərəkdən'      },
  { en: 'dominant',       tr: 'dominant',              wrong: 'hakim'           },
  { en: 'dynamic',        tr: 'dinamik',               wrong: 'aktiv'           },
  { en: 'explicit',       tr: 'açıq',                  wrong: 'aydın'           },
  { en: 'fundamental',    tr: 'əsas',                  wrong: 'vacib'           },
],
// ─────────────────────── QUIZ 21 — Personality & Character Traits ───────────────────────
[
  { en: 'absurd',        tr: 'absurd',            wrong: 'mənasız'         },
  { en: 'ambitious',     tr: 'ambisiyalı',        wrong: 'hədəfli'         },
  { en: 'arrogant',      tr: 'təkəbbürlü',        wrong: 'özündən razı'    },
  { en: 'charismatic',   tr: 'xarizmatik',        wrong: 'cəlbedici'       },
  { en: 'cynical',       tr: 'kinik',             wrong: 'şübhəci'         },
  { en: 'dedicated',     tr: 'sadiq',             wrong: 'həvəsli'         },
  { en: 'determined',    tr: 'qətiyyətli',        wrong: 'iradəli'         },
  { en: 'eccentric',     tr: 'ekssentrik',        wrong: 'qəribə'          },
  { en: 'humble',        tr: 'təvazökar',         wrong: 'sadə'            },
  { en: 'influential',   tr: 'təsirli',           wrong: 'güclü'           },
  { en: 'naive',         tr: 'sadəlövh',          wrong: 'güvənən'         },
  { en: 'notorious',     tr: 'bədnam',            wrong: 'məşhur'          },
  { en: 'optimistic',    tr: 'nikbin',            wrong: 'ümidli'          },
  { en: 'prestigious',   tr: 'nüfuzlu',           wrong: 'hörmətli'        },
  { en: 'radical',       tr: 'radikal',           wrong: 'ekstremist'      },
  { en: 'resilient',     tr: 'davamlı',           wrong: 'güclü'           },
  { en: 'sceptical',     tr: 'şübhəci',           wrong: 'ehtiyatlı'       },
  { en: 'sophisticated', tr: 'zərif',             wrong: 'mürəkkəb'        },
  { en: 'stubborn',      tr: 'inadkar',           wrong: 'sərt'            },
  { en: 'tolerant',      tr: 'tolerant',          wrong: 'hörmətli'        },
],

// ─────────────────────── QUIZ 22 — Abstract & Philosophical Concepts ───────────────────────
[
  { en: 'autonomy',      tr: 'muxtariyyət',       wrong: 'azadlıq'         },
  { en: 'consciousness', tr: 'şüur',              wrong: 'idrak'           },
  { en: 'dignity',       tr: 'ləyaqət',           wrong: 'şərəf'           },
  { en: 'doctrine',      tr: 'doktrina',          wrong: 'nəzəriyyə'       },
  { en: 'essence',       tr: 'mahiyyət',          wrong: 'məzmun'          },
  { en: 'ideology',      tr: 'ideologiya',        wrong: 'fəlsəfə'         },
  { en: 'integrity',     tr: 'dürüstlük',         wrong: 'vicdanlılıq'     },
  { en: 'irony',         tr: 'ironi',             wrong: 'sarkazm'         },
  { en: 'morality',      tr: 'əxlaq',             wrong: 'vicdan'          },
  { en: 'notion',        tr: 'anlayış',           wrong: 'fikir'           },
  { en: 'philosophy',    tr: 'fəlsəfə',           wrong: 'ideologiya'      },
  { en: 'principle',     tr: 'prinsip',           wrong: 'qayda'           },
  { en: 'reasoning',     tr: 'mühakimə',          wrong: 'düşüncə'         },
  { en: 'solidarity',    tr: 'həmrəylik',         wrong: 'birlik'          },
  { en: 'sovereignty',   tr: 'suverenlik',        wrong: 'müstəqillik'     },
  { en: 'virtue',        tr: 'fəzilət',           wrong: 'dəyər'           },
  { en: 'consensus',     tr: 'konsensus',         wrong: 'razılaşma'       },
  { en: 'controversy',   tr: 'mübahisə',          wrong: 'ziddiyyət'       },
  { en: 'paradox',       tr: 'paradoks',          wrong: 'ziddiyyət'       },
  { en: 'dilemma',       tr: 'dilemma',           wrong: 'problem'         },
],

// ─────────────────────── QUIZ 23 — Actions & Processes (3) ───────────────────────
[
  { en: 'abolish',       tr: 'ləğv etmək',              wrong: 'qadağan etmək'   },
  { en: 'accelerate',    tr: 'sürətləndirmək',          wrong: 'artırmaq'        },
  { en: 'accumulate',    tr: 'toplamaq',                wrong: 'yığmaq'          },
  { en: 'adhere',        tr: 'riayət etmək',            wrong: 'bağlı olmaq'     },
  { en: 'allocate',      tr: 'bölüşdürmək',             wrong: 'paylaşmaq'       },
  { en: 'articulate',    tr: 'aydın ifadə etmək',       wrong: 'danışmaq'        },
  { en: 'assemble',      tr: 'toplamaq',                wrong: 'yığmaq'          },
  { en: 'assert',        tr: 'iddia etmək',             wrong: 'bildirmək'       },
  { en: 'attribute',     tr: 'aid etmək',               wrong: 'bağlamaq'        },
  { en: 'circulate',     tr: 'dövriyyəyə buraxmaq',     wrong: 'yaymaq'          },
  { en: 'collaborate',   tr: 'əməkdaşlıq etmək',        wrong: 'birləşmək'       },
  { en: 'compel',        tr: 'məcbur etmək',            wrong: 'sövq etmək'      },
  { en: 'compile',       tr: 'tərtib etmək',            wrong: 'toplamaq'        },
  { en: 'comprise',      tr: 'əhatə etmək',             wrong: 'daxil etmək'     },
  { en: 'concede',       tr: 'etiraf etmək',            wrong: 'qəbul etmək'     },
  { en: 'conceive',      tr: 'düşünmək',                wrong: 'planlaşdırmaq'   },
  { en: 'confer',        tr: 'müzakirə etmək',          wrong: 'danışmaq'        },
  { en: 'consolidate',   tr: 'möhkəmləndirmək',         wrong: 'birləşdirmək'    },
  { en: 'constitute',    tr: 'təşkil etmək',            wrong: 'yaratmaq'        },
  { en: 'coordinate',    tr: 'əlaqələndirmək',          wrong: 'idarə etmək'     },
],

// ─────────────────────── QUIZ 24 — Change, Development & Movement ───────────────────────
[
  { en: 'adaptation',    tr: 'adaptasiya',              wrong: 'dəyişiklik'          },
  { en: 'breakthrough',  tr: 'irəliləyiş',              wrong: 'nailiyyət'           },
  { en: 'conversion',    tr: 'çevrilmə',                wrong: 'dəyişiklik'          },
  { en: 'deteriorate',   tr: 'pisləşmək',               wrong: 'tənəzzül etmək'      },
  { en: 'diminish',      tr: 'azalmaq',                 wrong: 'kiçilmək'            },
  { en: 'escalate',      tr: 'güclənmək',               wrong: 'artmaq'              },
  { en: 'evolve',        tr: 'inkişaf etmək',           wrong: 'dəyişmək'            },
  { en: 'expand',        tr: 'genişlənmək',             wrong: 'böyümək'             },
  { en: 'flourish',      tr: 'çiçəklənmək',             wrong: 'inkişaf etmək'       },
  { en: 'intensify',     tr: 'güclənmək',               wrong: 'artmaq'              },
  { en: 'manifest',      tr: 'özünü göstərmək',         wrong: 'aşkar olmaq'         },
  { en: 'maximise',      tr: 'maksimallaşdırmaq',       wrong: 'artırmaq'            },
  { en: 'minimise',      tr: 'minimuma endirmək',       wrong: 'azaltmaq'            },
  { en: 'progress',      tr: 'tərəqqi etmək',           wrong: 'inkişaf etmək'       },
  { en: 'reform',        tr: 'islahat etmək',           wrong: 'dəyişdirmək'         },
  { en: 'revive',        tr: 'canlandırmaq',            wrong: 'bərpa etmək'         },
  { en: 'thrive',        tr: 'uğurla inkişaf etmək',    wrong: 'böyümək'             },
  { en: 'transform',     tr: 'transformasiya etmək',    wrong: 'dəyişdirmək'         },
  { en: 'transition',    tr: 'keçid etmək',             wrong: 'dəyişmək'            },
  { en: 'undermine',     tr: 'zəiflətmək',              wrong: 'baltalamaq'          },
],

// ─────────────────────── QUIZ 25 — Problems, Difficulties & Risks ───────────────────────
[
  { en: 'burden',        tr: 'yük',                     wrong: 'problem'         },
  { en: 'chaos',         tr: 'xaos',                    wrong: 'qarışıqlıq'      },
  { en: 'complication',  tr: 'çətinlik',                wrong: 'problem'         },
  { en: 'constraint',    tr: 'məhdudiyyət',             wrong: 'çərçivə'         },
  { en: 'crisis',        tr: 'böhran',                  wrong: 'problem'         },
  { en: 'deficiency',    tr: 'çatışmazlıq',             wrong: 'çatışmama'       },
  { en: 'deficit',       tr: 'kəsir',                   wrong: 'borc'            },
  { en: 'dilemma',       tr: 'dilemma',                 wrong: 'problem'         },
  { en: 'drawback',      tr: 'çatışmazlıq',             wrong: 'mənfi cəhət'     },
  { en: 'flaw',          tr: 'qüsur',                   wrong: 'çatışmazlıq'     },
  { en: 'frustration',   tr: 'məyusluq',                wrong: 'kədər'           },
  { en: 'hazard',        tr: 'təhlükə',                 wrong: 'risk'            },
  { en: 'obstacle',      tr: 'maneə',                   wrong: 'çətinlik'        },
  { en: 'prejudice',     tr: 'qərəz',                   wrong: 'ayrı-seçkilik'   },
  { en: 'restraint',     tr: 'məhdudiyyət',             wrong: 'nəzarət'         },
  { en: 'shortage',      tr: 'çatışmazlıq',             wrong: 'kəsir'           },
  { en: 'threat',        tr: 'təhdid',                  wrong: 'təhlükə'         },
  { en: 'vulnerability', tr: 'həssaslıq',               wrong: 'zəiflik'         },
  { en: 'weakness',      tr: 'zəiflik',                 wrong: 'çatışmazlıq'     },
  { en: 'obstacle',      tr: 'maneə',                   wrong: 'çətinlik'        },
],

// ─────────────────────── QUIZ 26 — Success, Achievement & Recognition ───────────────────────
[
  { en: 'accomplishment', tr: 'nailiyyət',              wrong: 'uğur'            },
  { en: 'achievement',    tr: 'nail olma',              wrong: 'uğur'            },
  { en: 'breakthrough',   tr: 'irəliləyiş',             wrong: 'nailiyyət'       },
  { en: 'excellence',     tr: 'mükəmməllik',            wrong: 'üstünlük'        },
  { en: 'feat',           tr: 'qəhrəmanlıq',            wrong: 'nailiyyət'       },
  { en: 'glory',          tr: 'şöhrət',                 wrong: 'şərəf'           },
  { en: 'merit',          tr: 'ləyaqət',                wrong: 'dəyər'           },
  { en: 'prestige',       tr: 'nüfuz',                  wrong: 'şöhrət'          },
  { en: 'prosperity',     tr: 'rifah',                  wrong: 'uğur'            },
  { en: 'recognition',    tr: 'tanınma',                wrong: 'qəbul'           },
  { en: 'remarkable',     tr: 'əlamətdar',              wrong: 'qeyri-adi'       },
  { en: 'renowned',       tr: 'məşhur',                 wrong: 'tanınmış'        },
  { en: 'success',        tr: 'uğur',                   wrong: 'nailiyyət'       },
  { en: 'triumph',        tr: 'qələbə',                 wrong: 'uğur'            },
  { en: 'victory',        tr: 'zəfər',                  wrong: 'qələbə'          },
  { en: 'worthwhile',     tr: 'dəyərli',                wrong: 'faydalı'         },
  { en: 'worthy',         tr: 'layiq',                  wrong: 'dəyərli'         },
  { en: 'outstanding',    tr: 'fərqlənən',              wrong: 'əla'             },
  { en: 'exceptional',    tr: 'müstəsna',               wrong: 'fərqli'          },
  { en: 'prominent',      tr: 'görkəmli',               wrong: 'məşhur'          },
],

// ─────────────────────── QUIZ 27 — Media, Journalism & Public Opinion ───────────────────────
[
  { en: 'commentary',    tr: 'şərh',                    wrong: 'rəy'             },
  { en: 'correspondent', tr: 'müxbir',                  wrong: 'jurnalist'       },
  { en: 'coverage',      tr: 'işıqlandırma',            wrong: 'xəbər'           },
  { en: 'discourse',     tr: 'diskurs',                 wrong: 'müzakirə'        },
  { en: 'editorial',     tr: 'redaksiya məqaləsi',      wrong: 'şərh'            },
  { en: 'footage',       tr: 'görüntü',                 wrong: 'video'           },
  { en: 'headline',      tr: 'başlıq',                  wrong: 'xəbər'           },
  { en: 'journalist',    tr: 'jurnalist',               wrong: 'müxbir'          },
  { en: 'propaganda',    tr: 'təbliğat',                wrong: 'reklam'          },
  { en: 'publication',   tr: 'nəşr',                    wrong: 'məqalə'          },
  { en: 'rumour',        tr: 'şayiə',                   wrong: 'xəbər'           },
  { en: 'scrutiny',      tr: 'diqqətli nəzarət',        wrong: 'yoxlama'         },
  { en: 'sensation',     tr: 'sensasiya',               wrong: 'hadisə'          },
  { en: 'spectrum',      tr: 'spektr',                  wrong: 'diapazon'        },
  { en: 'transcript',    tr: 'transkript',              wrong: 'protokol'        },
  { en: 'articulate',    tr: 'aydın ifadə etmək',       wrong: 'danışmaq'        },
  { en: 'convey',        tr: 'çatdırmaq',               wrong: 'bildirmək'       },
  { en: 'explicit',      tr: 'açıq',                    wrong: 'aydın'           },
  { en: 'ironic',        tr: 'ironik',                  wrong: 'sarkazmlı'       },
  { en: 'rhetoric',      tr: 'ritorika',                wrong: 'natiqlik'        },
],

// ─────────────────────── QUIZ 28 — Science, Research & Technology ───────────────────────
[
  { en: 'empirical',     tr: 'empirik',                 wrong: 'nəzəri'          },
  { en: 'experimental',  tr: 'eksperimental',           wrong: 'praktik'         },
  { en: 'hypothesis',    tr: 'hipotez',                 wrong: 'nəzəriyyə'       },
  { en: 'innovation',    tr: 'innovasiya',              wrong: 'ixtira'          },
  { en: 'parameter',     tr: 'parametr',                wrong: 'göstərici'       },
  { en: 'ratio',         tr: 'nisbət',                  wrong: 'faiz'            },
  { en: 'simulation',    tr: 'simulyasiya',             wrong: 'model'           },
  { en: 'specimen',      tr: 'nümunə',                  wrong: 'model'           },
  { en: 'statistical',   tr: 'statistik',               wrong: 'rəqəmsal'        },
  { en: 'synthesis',     tr: 'sintez',                  wrong: 'analiz'          },
  { en: 'technological', tr: 'texnoloji',               wrong: 'elmi'            },
  { en: 'theoretical',   tr: 'nəzəri',                  wrong: 'empirik'         },
  { en: 'variable',      tr: 'dəyişən',                 wrong: 'sabit'           },
  { en: 'correlation',   tr: 'korrelyasiya',            wrong: 'əlaqə'           },
  { en: 'diagnosis',     tr: 'diaqnoz',                 wrong: 'müayinə'         },
  { en: 'equation',      tr: 'tənlik',                  wrong: 'düstur'          },
  { en: 'genetic',       tr: 'genetik',                 wrong: 'bioloji'         },
  { en: 'molecular',     tr: 'molekulyar',              wrong: 'atomik'          },
  { en: 'quantum',       tr: 'kvant',                   wrong: 'nüvə'            },
  { en: 'prototype',     tr: 'prototip',                wrong: 'model'           },
],

// ─────────────────────── QUIZ 29 — Health, Medicine & Psychology ───────────────────────
[
  { en: 'chronic',        tr: 'xroniki',                wrong: 'kəskin'          },
  { en: 'clinical',       tr: 'klinik',                 wrong: 'tibbi'           },
  { en: 'diagnosis',      tr: 'diaqnoz',                wrong: 'müayinə'         },
  { en: 'epidemic',       tr: 'epidemiya',              wrong: 'pandemiya'       },
  { en: 'infection',      tr: 'infeksiya',              wrong: 'virus'           },
  { en: 'injection',      tr: 'iynə',                   wrong: 'dərman'          },
  { en: 'medication',     tr: 'dərman',                 wrong: 'müalicə'         },
  { en: 'obesity',        tr: 'piylənmə',               wrong: 'artıq çəki'      },
  { en: 'outbreak',       tr: 'xəstəliyin yayılması',   wrong: 'epidemiya'       },
  { en: 'psychiatric',    tr: 'psixiatrik',             wrong: 'psixoloji'       },
  { en: 'rehabilitation', tr: 'reabilitasiya',          wrong: 'müalicə'         },
  { en: 'surgeon',        tr: 'cərrah',                 wrong: 'həkim'           },
  { en: 'syndrome',       tr: 'sindrom',                wrong: 'xəstəlik'        },
  { en: 'therapy',        tr: 'terapiya',               wrong: 'müalicə'         },
  { en: 'trauma',         tr: 'travma',                 wrong: 'zərbə'           },
  { en: 'tumour',         tr: 'şiş',                    wrong: 'xərçəng'         },
  { en: 'vaccine',        tr: 'vaksin',                 wrong: 'dərman'          },
  { en: 'virus',          tr: 'virus',                  wrong: 'bakteriya'       },
  { en: 'physician',      tr: 'terapevt',               wrong: 'cərrah'          },
  { en: 'practitioner',   tr: 'praktik həkim',          wrong: 'mütəxəssis'      },
],

// ─────────────────────── QUIZ 30 — Environment & Sustainability ───────────────────────
[
  { en: 'biodiversity',   tr: 'biomüxtəliflik',         wrong: 'ekosistem'       },
  { en: 'conservation',   tr: 'mühafizə',               wrong: 'qoruma'          },
  { en: 'ecological',     tr: 'ekoloji',                wrong: 'ətraf mühit'     },
  { en: 'emission',       tr: 'emissiya',               wrong: 'çirklənmə'       },
  { en: 'greenhouse',     tr: 'istixana',               wrong: 'emissiya'        },
  { en: 'pollution',      tr: 'çirklənmə',              wrong: 'çirkab'          },
  { en: 'renewable',      tr: 'bərpa olunan',           wrong: 'alternativ'      },
  { en: 'sustainability', tr: 'davamlılıq',             wrong: 'bərpa'           },
  { en: 'sustainable',    tr: 'davamlı',                wrong: 'ekoloji'         },
  { en: 'wildlife',       tr: 'vəhşi təbiət',           wrong: 'fauna'           },
  { en: 'degradation',    tr: 'deqradasiya',            wrong: 'pisləşmə'        },
  { en: 'ecosystem',      tr: 'ekosistem',              wrong: 'biomüxtəliflik'  },
  { en: 'erosion',        tr: 'eroziya',                wrong: 'parçalanma'      },
  { en: 'extinction',     tr: 'nəslin kəsilməsi',       wrong: 'yoxa çıxma'      },
  { en: 'habitat',        tr: 'yaşayış mühiti',         wrong: 'ekosistem'       },
  { en: 'marine',         tr: 'dəniz (sifət)',           wrong: 'su'              },
  { en: 'ozone',          tr: 'ozon',                   wrong: 'atmosfer'        },
  { en: 'recycling',      tr: 'təkrar emal',            wrong: 'utilizasiya'     },
  { en: 'toxic',          tr: 'zəhərli',                wrong: 'təhlükəli'       },
  { en: 'climate',        tr: 'iqlim',                  wrong: 'hava'            },
],

// ─────────────────────── QUIZ 31 — Art, Culture & Heritage ───────────────────────
[
  { en: 'aesthetic',      tr: 'estetik',                wrong: 'bədii'           },
  { en: 'architectural',  tr: 'memarlıq (sifət)',        wrong: 'dizayn'          },
  { en: 'artistic',       tr: 'bədii',                  wrong: 'yaradıcı'        },
  { en: 'canvas',         tr: 'kətan',                  wrong: 'rəsm'            },
  { en: 'classical',      tr: 'klassik',                wrong: 'ənənəvi'         },
  { en: 'contemporary',   tr: 'müasir',                 wrong: 'çağdaş'          },
  { en: 'exhibition',     tr: 'sərgi',                  wrong: 'muzey'           },
  { en: 'genre',          tr: 'janr',                   wrong: 'üslub'           },
  { en: 'heritage',       tr: 'miras',                  wrong: 'ənənə'           },
  { en: 'legendary',      tr: 'əfsanəvi',               wrong: 'məşhur'          },
  { en: 'literature',     tr: 'ədəbiyyat',              wrong: 'şeir'            },
  { en: 'manuscript',     tr: 'əlyazması',              wrong: 'sənəd'           },
  { en: 'masterpiece',    tr: 'şah əsər',               wrong: 'klassik'         },
  { en: 'melody',         tr: 'melodiya',               wrong: 'musiqi'          },
  { en: 'orchestra',      tr: 'orkestr',                wrong: 'ansambl'         },
  { en: 'portrait',       tr: 'portret',                wrong: 'rəsm'            },
  { en: 'sculpture',      tr: 'heykəltəraşlıq',         wrong: 'rəssamlıq'       },
  { en: 'theatrical',     tr: 'teatr (sifət)',           wrong: 'dramatik'        },
  { en: 'symphony',       tr: 'simfoniya',              wrong: 'konçerto'        },
  { en: 'ritual',         tr: 'ritual',                 wrong: 'ənənə'           },
],

// ─────────────────────── QUIZ 32 — Law, Order & Authority ───────────────────────
[
  { en: 'accusation',    tr: 'ittiham',                 wrong: 'şikayət'         },
  { en: 'allegation',    tr: 'iddia',                   wrong: 'ittiham'         },
  { en: 'breach',        tr: 'pozuntu',                 wrong: 'cinayət'         },
  { en: 'conviction',    tr: 'məhkumetmə',              wrong: 'bəraət'          },
  { en: 'corruption',    tr: 'korrupsiya',              wrong: 'cinayət'         },
  { en: 'custody',       tr: 'həbs',                    wrong: 'cərimə'          },
  { en: 'enforcement',   tr: 'icra',                    wrong: 'tənzimləmə'      },
  { en: 'indictment',    tr: 'ittihamnamə',             wrong: 'hökm'            },
  { en: 'jurisdiction',  tr: 'yurisdiksiya',            wrong: 'səlahiyyət'      },
  { en: 'legislation',   tr: 'qanunvericilik',          wrong: 'idarəetmə'       },
  { en: 'legitimate',    tr: 'qanuni',                  wrong: 'rəsmi'           },
  { en: 'prosecution',   tr: 'ittiham tərəfi',          wrong: 'müdafiə'         },
  { en: 'regulation',    tr: 'tənzimləmə',              wrong: 'qanun'           },
  { en: 'sanction',      tr: 'sanksiya',                wrong: 'cəza'            },
  { en: 'verdict',       tr: 'hökm',                    wrong: 'qərar'           },
  { en: 'violation',     tr: 'pozuntu',                 wrong: 'cinayət'         },
  { en: 'warrant',       tr: 'axtarış orderi',          wrong: 'icazə'           },
  { en: 'judicial',      tr: 'məhkəmə (sifət)',         wrong: 'hüquqi'          },
  { en: 'lawful',        tr: 'qanuni',                  wrong: 'rəsmi'           },
  { en: 'unlawful',      tr: 'qeyri-qanuni',            wrong: 'qadağan'         },
],

// ─────────────────────── QUIZ 33 — War, Conflict & Security ───────────────────────
[
  { en: 'assassination', tr: 'sui-qəsd',                wrong: 'qətl'            },
  { en: 'assault',       tr: 'hücum',                   wrong: 'döyüş'           },
  { en: 'battlefield',   tr: 'döyüş meydanı',           wrong: 'cəbhə'           },
  { en: 'combat',        tr: 'döyüş',                   wrong: 'müharibə'        },
  { en: 'deployment',    tr: 'yerləşdirmə',             wrong: 'göndərmə'        },
  { en: 'genocide',      tr: 'soyqırım',                wrong: 'müharibə'        },
  { en: 'guerrilla',     tr: 'partizan',                wrong: 'əsgər'           },
  { en: 'invasion',      tr: 'işğal',                   wrong: 'hücum'           },
  { en: 'militant',      tr: 'silahlı',                 wrong: 'döyüşçü'         },
  { en: 'missile',       tr: 'raket',                   wrong: 'bomba'           },
  { en: 'raid',          tr: 'basqın',                  wrong: 'hücum'           },
  { en: 'riot',          tr: 'iğtişaş',                 wrong: 'etiraz'          },
  { en: 'surrender',     tr: 'təslim olmaq',            wrong: 'geri çəkilmək'   },
  { en: 'tactical',      tr: 'taktik',                  wrong: 'strateji'        },
  { en: 'terrorism',     tr: 'terrorçuluq',             wrong: 'ekstremizm'      },
  { en: 'torture',       tr: 'işgəncə',                 wrong: 'zorakılıq'       },
  { en: 'veteran',       tr: 'veteran',                 wrong: 'əsgər'           },
  { en: 'warfare',       tr: 'müharibə',                wrong: 'döyüş'           },
  { en: 'warrior',       tr: 'döyüşçü',                 wrong: 'əsgər'           },
  { en: 'hostage',       tr: 'girov',                   wrong: 'məhbus'          },
],

// ─────────────────────── QUIZ 34 — Economy & Finance (Advanced) ───────────────────────
[
  { en: 'bankruptcy',    tr: 'iflas',                   wrong: 'borc'            },
  { en: 'commodity',     tr: 'əmtəə',                   wrong: 'məhsul'          },
  { en: 'deficit',       tr: 'kəsir',                   wrong: 'borc'            },
  { en: 'expenditure',   tr: 'xərc',                    wrong: 'büdcə'           },
  { en: 'fiscal',        tr: 'fiskal',                  wrong: 'maliyyə'         },
  { en: 'franchise',     tr: 'françayzinq',             wrong: 'lisenziya'       },
  { en: 'infrastructure',tr: 'infrastruktur',           wrong: 'quruluş'         },
  { en: 'liability',     tr: 'öhdəlik',                 wrong: 'borc'            },
  { en: 'merger',        tr: 'birləşmə',                wrong: 'alım'            },
  { en: 'monopoly',      tr: 'inhisar',                 wrong: 'kartell'         },
  { en: 'privatization', tr: 'özəlləşdirmə',            wrong: 'milliləşdirmə'   },
  { en: 'productivity',  tr: 'məhsuldarlıq',            wrong: 'səmərəlilik'     },
  { en: 'profitable',    tr: 'gəlirli',                 wrong: 'uğurlu'          },
  { en: 'shareholder',   tr: 'səhmdar',                 wrong: 'investor'        },
  { en: 'subsidy',       tr: 'subsidiya',               wrong: 'maliyyə yardımı' },
  { en: 'transaction',   tr: 'əməliyyat',               wrong: 'ödəniş'          },
  { en: 'turnover',      tr: 'dövriyyə',                wrong: 'gəlir'           },
  { en: 'yield',         tr: 'gəlir (investisiya)',      wrong: 'mənfəət'         },
  { en: 'asset',         tr: 'aktiv',                   wrong: 'kapital'         },
  { en: 'revenue',       tr: 'gəlir',                   wrong: 'mənfəət'         },
],

// ─────────────────────── QUIZ 35 — Society & Social Issues (Advanced) ───────────────────────
[
  { en: 'discrimination',tr: 'ayrı-seçkilik',           wrong: 'ədalətsizlik'    },
  { en: 'diversity',     tr: 'müxtəliflik',             wrong: 'bərabərlik'      },
  { en: 'equality',      tr: 'bərabərlik',              wrong: 'ədalət'          },
  { en: 'inequality',    tr: 'bərabərsizlik',           wrong: 'ayrı-seçkilik'   },
  { en: 'integration',   tr: 'inteqrasiya',             wrong: 'birləşmə'        },
  { en: 'justice',       tr: 'ədalət',                  wrong: 'hüquq'           },
  { en: 'liberty',       tr: 'azadlıq',                 wrong: 'hüquq'           },
  { en: 'migration',     tr: 'miqrasiya',               wrong: 'köç'             },
  { en: 'minority',      tr: 'azlıq',                   wrong: 'çoxluq'          },
  { en: 'prejudice',     tr: 'qərəz',                   wrong: 'ayrı-seçkilik'   },
  { en: 'racism',        tr: 'irqçilik',                wrong: 'millətçilik'     },
  { en: 'refugee',       tr: 'qaçqın',                  wrong: 'mühacir'         },
  { en: 'rehabilitation',tr: 'reabilitasiya',           wrong: 'müalicə'         },
  { en: 'solidarity',    tr: 'həmrəylik',               wrong: 'birlik'          },
  { en: 'tolerance',     tr: 'tolerantlıq',             wrong: 'hörmət'          },
  { en: 'vulnerable',    tr: 'həssas',                  wrong: 'zəif'            },
  { en: 'welfare',       tr: 'rifah',                   wrong: 'yardım'          },
  { en: 'citizenship',   tr: 'vətəndaşlıq',             wrong: 'milliyyət'       },
  { en: 'humanity',      tr: 'bəşəriyyət',              wrong: 'insanlıq'        },
  { en: 'equality',      tr: 'hüquq bərabərliyi',       wrong: 'ədalət'          },
],

// ─────────────────────── QUIZ 36 — Communication & Interaction ───────────────────────
[
  { en: 'articulate',    tr: 'aydın ifadə etmək',       wrong: 'danışmaq'        },
  { en: 'convey',        tr: 'çatdırmaq',               wrong: 'bildirmək'       },
  { en: 'correspondence',tr: 'yazışma',                 wrong: 'məktub'          },
  { en: 'discourse',     tr: 'diskurs',                 wrong: 'müzakirə'        },
  { en: 'explicit',      tr: 'açıq',                    wrong: 'aydın'           },
  { en: 'implicit',      tr: 'gizli',                   wrong: 'örtülü'          },
  { en: 'interpret',     tr: 'şərh etmək',              wrong: 'tərcümə etmək'   },
  { en: 'interpretation',tr: 'şərh',                    wrong: 'tərcümə'         },
  { en: 'irony',         tr: 'ironi',                   wrong: 'sarkazm'         },
  { en: 'rhetoric',      tr: 'ritorika',                wrong: 'natiqlik'        },
  { en: 'sarcasm',       tr: 'sarkazm',                 wrong: 'ironi'           },
  { en: 'verbal',        tr: 'şifahi',                  wrong: 'sözlü'           },
  { en: 'dialogue',      tr: 'dialoq',                  wrong: 'söhbət'          },
  { en: 'negotiation',   tr: 'danışıqlar',              wrong: 'müzakirə'        },
  { en: 'persuasion',    tr: 'inandırma',               wrong: 'təsir'           },
  { en: 'assertion',     tr: 'iddia',                   wrong: 'bəyanat'         },
  { en: 'allegation',    tr: 'iddia',                   wrong: 'ittiham'         },
  { en: 'clarification', tr: 'aydınlaşdırma',           wrong: 'izah'            },
  { en: 'consultation',  tr: 'məsləhət',                wrong: 'görüş'           },
  { en: 'consensus',     tr: 'konsensus',               wrong: 'razılaşma'       },
],

// ─────────────────────── QUIZ 37 — Negative States & Emotions ───────────────────────
[
  { en: 'atrocity',      tr: 'vəhşilik',                wrong: 'zorakılıq'       },
  { en: 'betrayal',      tr: 'xəyanət',                 wrong: 'aldatma'         },
  { en: 'contempt',      tr: 'nifrət',                  wrong: 'hörmətsizlik'    },
  { en: 'corruption',    tr: 'korrupsiya',              wrong: 'saxtakarlıq'     },
  { en: 'despair',       tr: 'ümidsizlik',              wrong: 'kədər'           },
  { en: 'destructive',   tr: 'dağıdıcı',                wrong: 'zərərli'         },
  { en: 'distress',      tr: 'sıxıntı',                 wrong: 'kədər'           },
  { en: 'embarrassment', tr: 'utanc',                   wrong: 'xəcalət'         },
  { en: 'frustration',   tr: 'məyusluq',                wrong: 'kədər'           },
  { en: 'grief',         tr: 'yas',                     wrong: 'kədər'           },
  { en: 'guilt',         tr: 'günah hissi',             wrong: 'peşmançılıq'     },
  { en: 'hatred',        tr: 'nifrət',                  wrong: 'kin'             },
  { en: 'hostility',     tr: 'düşmənçilik',             wrong: 'nifrət'          },
  { en: 'misery',        tr: 'əzab',                    wrong: 'bədbəxtlik'      },
  { en: 'outrage',       tr: 'qəzəb',                   wrong: 'hiddət'          },
  { en: 'resentment',    tr: 'inciklik',                wrong: 'küskünlük'       },
  { en: 'suspicion',     tr: 'şübhə',                   wrong: 'ehtiyat'         },
  { en: 'trauma',        tr: 'travma',                  wrong: 'zərbə'           },
  { en: 'vulnerability', tr: 'həssaslıq',               wrong: 'zəiflik'         },
  { en: 'cynicism',      tr: 'kinizm',                  wrong: 'şübhəçilik'      },
],

// ─────────────────────── QUIZ 38 — Positive Qualities & Values ───────────────────────
[
  { en: 'compassion',    tr: 'şəfqət',                  wrong: 'mehribanlıq'     },
  { en: 'credibility',   tr: 'etibarlılıq',             wrong: 'inam'            },
  { en: 'dedication',    tr: 'sədaqət',                 wrong: 'həvəs'           },
  { en: 'dignity',       tr: 'ləyaqət',                 wrong: 'şərəf'           },
  { en: 'integrity',     tr: 'dürüstlük',               wrong: 'vicdanlılıq'     },
  { en: 'justice',       tr: 'ədalət',                  wrong: 'hüquq'           },
  { en: 'loyalty',       tr: 'sədaqət',                 wrong: 'etibarlılıq'     },
  { en: 'mercy',         tr: 'mərhəmət',                wrong: 'şəfqət'          },
  { en: 'morality',      tr: 'əxlaq',                   wrong: 'vicdan'          },
  { en: 'optimism',      tr: 'optimizm',                wrong: 'nikbinlik'       },
  { en: 'solidarity',    tr: 'həmrəylik',               wrong: 'birlik'          },
  { en: 'tolerance',     tr: 'tolerantlıq',             wrong: 'hörmət'          },
  { en: 'transparency',  tr: 'şəffaflıq',               wrong: 'açıqlıq'         },
  { en: 'virtue',        tr: 'fəzilət',                 wrong: 'dəyər'           },
  { en: 'excellence',    tr: 'mükəmməllik',             wrong: 'üstünlük'        },
  { en: 'fairness',      tr: 'ədalətlilik',             wrong: 'bərabərlik'      },
  { en: 'generosity',    tr: 'səxavət',                 wrong: 'cömerdlik'       },
  { en: 'honesty',       tr: 'dürüstlük',               wrong: 'açıqlıq'         },
  { en: 'humanity',      tr: 'insanlıq',                wrong: 'bəşəriyyət'      },
  { en: 'sincerity',     tr: 'səmimiyyət',              wrong: 'dürüstlük'       },
],

// ─────────────────────── QUIZ 39 — Miscellaneous Advanced Words (1) ───────────────────────
[
  { en: 'accordingly',   tr: 'müvafiq olaraq',          wrong: 'buna görə'       },
  { en: 'adverse',       tr: 'mənfi',                   wrong: 'zərərli'         },
  { en: 'arbitrary',     tr: 'özbaşına',                wrong: 'ixtiyari'        },
  { en: 'authentic',     tr: 'həqiqi',                  wrong: 'orijinal'        },
  { en: 'coherent',      tr: 'ardıcıl',                 wrong: 'məntiqi'         },
  { en: 'controversial', tr: 'mübahisəli',              wrong: 'ziddiyyətli'     },
  { en: 'credible',      tr: 'etibarlı',                wrong: 'inandırıcı'      },
  { en: 'decisive',      tr: 'qəti',                    wrong: 'güclü'           },
  { en: 'deliberate',    tr: 'qəsdən edilən',           wrong: 'bilərəkdən olan' },
  { en: 'dominant',      tr: 'dominant',                wrong: 'hakim'           },
  { en: 'dynamic',       tr: 'dinamik',                 wrong: 'aktiv'           },
  { en: 'explicit',      tr: 'açıq',                    wrong: 'aydın'           },
  { en: 'fundamental',   tr: 'əsas',                    wrong: 'vacib'           },
  { en: 'implicit',      tr: 'gizli',                   wrong: 'örtülü'          },
  { en: 'inevitable',    tr: 'qaçılmaz',                wrong: 'mümkün'          },
  { en: 'inherent',      tr: 'daxili',                  wrong: 'əsas'            },
  { en: 'integral',      tr: 'ayrılmaz',                wrong: 'vacib'           },
  { en: 'intense',       tr: 'güclü',                   wrong: 'şiddətli'        },
  { en: 'profound',      tr: 'dərin',                   wrong: 'əsaslı'          },
  { en: 'substantial',   tr: 'əhəmiyyətli',             wrong: 'böyük'           },
],

// ─────────────────────── QUIZ 40 — Remaining Words (Tamamlayıcı) ───────────────────────
[
  { en: 'absence',       tr: 'yoxluq',                  wrong: 'olmama'          },
  { en: 'absorption',    tr: 'udma',                    wrong: 'əmilmə'          },
  { en: 'accessible',    tr: 'əlçatan',                 wrong: 'mövcud'          },
  { en: 'accordingly',   tr: 'müvafiq olaraq',          wrong: 'buna görə'       },
  { en: 'accumulation',  tr: 'toplanma',                wrong: 'artım'           },
  { en: 'activation',    tr: 'aktivləşdirmə',           wrong: 'başlatma'        },
  { en: 'adjacent',      tr: 'qonşu',                   wrong: 'yaxın'           },
  { en: 'adjustment',    tr: 'tənzimləmə',              wrong: 'dəyişiklik'      },
  { en: 'adoption',      tr: 'qəbul etmə',              wrong: 'mənimsəmə'       },
  { en: 'adverse',       tr: 'mənfi',                   wrong: 'zərərli'         },
  { en: 'advocate',      tr: 'müdafiəçi',               wrong: 'tərəfdar'        },
  { en: 'aesthetic',     tr: 'estetik',                 wrong: 'bədii'           },
  { en: 'aftermath',     tr: 'nəticə',                  wrong: 'aqibət'          },
  { en: 'aggression',    tr: 'aqressiya',               wrong: 'hücum'           },
  { en: 'alignment',     tr: 'uyğunlaşma',              wrong: 'düzülüş'         },
  { en: 'alike',         tr: 'oxşar',                   wrong: 'eyni'            },
  { en: 'allegation',    tr: 'iddia',                   wrong: 'ittiham'         },
  { en: 'anonymous',     tr: 'anonim',                  wrong: 'naməlum'         },
  { en: 'apparent',      tr: 'aşkar',                   wrong: 'açıq'            },
  { en: 'aspiration',    tr: 'istək',                   wrong: 'arzu'            },
  ],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 6 — C2: Orta Səviyyə II                 ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c2',
    name: 'C2 — MASTERY',
    icon: '🔥',
    color: '#D44E30',
    quizzes: [

      // ─────────────────────── QUIZ 1 — Deception & Dishonesty (1) ───────────────────────
[
  { en: 'artifice', tr: 'hiylə', wrong: 'səmimiyyət' },
  { en: 'to belie', tr: 'yalanlamaq', wrong: 'təsdiqləmək' },
  { en: 'charlatan', tr: 'şarlatan', wrong: 'mütəxəssis' },
  { en: 'chicanery', tr: 'hiyləgərlik', wrong: 'dürüstlük' },
  { en: 'to collude', tr: 'gizli əlbir olmaq', wrong: 'açıq əməkdaşlıq' },
  { en: 'collusion', tr: 'gizli razılaşma', wrong: 'qanuni müqavilə' },
  { en: 'to connive', tr: 'göz yummaq', wrong: 'mane olmaq' },
  { en: 'deceitful', tr: 'aldadıcı', wrong: 'səmimi' },
  { en: 'to fabricate', tr: 'uydurmaq', wrong: 'sübut etmək' },
  { en: 'fabrication', tr: 'uydurma', wrong: 'həqiqət' },
  { en: 'fallacious', tr: 'yanlış', wrong: 'doğru' },
  { en: 'fallacy', tr: 'yanlış təsəvvür', wrong: 'həqiqət' },
  { en: 'to feign', tr: 'özünü göstərmək', wrong: 'əslini göstərmək' },
  { en: 'guile', tr: 'hiylə', wrong: 'sadəlik' },
  { en: 'duplicity', tr: 'ikiüzlülük', wrong: 'səmimiyyət' },
  { en: 'to obfuscate', tr: 'bulandırmaq', wrong: 'aydınlaşdırmaq' },
  { en: 'obfuscation', tr: 'bulanıqlıq', wrong: 'aydınlıq' },
  { en: 'ruse', tr: 'hiylə', wrong: 'açıq plan' },
  { en: 'subterfuge', tr: 'aldatma vasitəsi', wrong: 'dürüst yol' },
  { en: 'to dissemble', tr: 'gizlətmək', wrong: 'etiraf etmək' }
],

// ─────────────────────── QUIZ 2 — Deception & Dishonesty (2) ───────────────────────
[
  { en: 'disingenuous', tr: 'iküzlü', wrong: 'səmimi' },
  { en: 'mendacious', tr: 'yalançı', wrong: 'dürüst' },
  { en: 'to prevaricate', tr: 'yanıltmaq', wrong: 'birbaşa demək' },
  { en: 'specious', tr: 'aldadıcı', wrong: 'əsl' },
  { en: 'spurious', tr: 'saxta', wrong: 'həqiqi' },
  { en: 'surreptitious', tr: 'gizli', wrong: 'açıq' },
  { en: 'trickery', tr: 'fırıldaq', wrong: 'dürüstlük' },
  { en: 'trickster', tr: 'fırıldaqçı', wrong: 'dürüst adam' },
  { en: 'whitewash', tr: 'ört-basdır etmək', wrong: 'ifşa etmək' },
  { en: 'to delude', tr: 'aldatmaq', wrong: 'maarifləndirmək' },
  { en: 'façade', tr: 'yalançı görünüş', wrong: 'əsl görünüş' },
  { en: 'skullduggery', tr: 'hiyləgərlik', wrong: 'dürüstlük' },
  { en: 'to hoodwink', tr: 'aldatmaq', wrong: 'xəbərdar etmək' },
  { en: 'to masquerade', tr: 'özünü qələmə vermək', wrong: 'əslini göstərmək' },
  { en: 'ploy', tr: 'hiylə', wrong: 'açıq strategiya' },
  { en: 'pretence', tr: 'ədə', wrong: 'səmimiyyət' },
  { en: 'swindle', tr: 'fırıldaq', wrong: 'qanuni iş' },
  { en: 'to beguile', tr: 'cazibə ilə aldatmaq', wrong: 'qorxutmaq' },
  { en: 'gambit', tr: 'açılış hiyləsi', wrong: 'dürüst addım' },
  { en: 'sophistry', tr: 'yalançı mühakimə', wrong: 'düzgün mühakimə' }
],

// ─────────────────────── QUIZ 3 — Criticism & Condemnation (1) ───────────────────────
[
  { en: 'to admonish', tr: 'xəbərdar etmək', wrong: 'tərifləmək' },
  { en: 'to berate', tr: 'qızğın tənqid etmək', wrong: 'tərifləmək' },
  { en: 'to castigate', tr: 'sərt tənbeh etmək', wrong: 'tərifləmək' },
  { en: 'to censure', tr: 'qınamaq', wrong: 'bəyənmək' },
  { en: 'to chastise', tr: 'cəzalandırmaq', wrong: 'mükafatlandırmaq' },
  { en: 'to chide', tr: 'danlamaq', wrong: 'tərifləmək' },
  { en: 'to decry', tr: 'pisləmək', wrong: 'dəstəkləmək' },
  { en: 'to denigrate', tr: 'ləkələmək', wrong: 'ucaltmaq' },
  { en: 'to deprecate', tr: 'əhəmiyyətini azaltmaq', wrong: 'qiymətləndirmək' },
  { en: 'to disparage', tr: 'aşağılamaq', wrong: 'tərifləmək' },
  { en: 'to excoriate', tr: 'sərt tənqid etmək', wrong: 'tərifləmək' },
  { en: 'to lambaste', tr: 'qızğın hücum etmək', wrong: 'dəstəkləmək' },
  { en: 'to rebuke', tr: 'tənbeh etmək', wrong: 'tərifləmək' },
  { en: 'to reprimand', tr: 'rəsmi danlamaq', wrong: 'təşəkkür etmək' },
  { en: 'to reproach', tr: 'irad tutmaq', wrong: 'tərifləmək' },
  { en: 'to repudiate', tr: 'rədd etmək', wrong: 'qəbul etmək' },
  { en: 'to upbraid', tr: 'qınamaq', wrong: 'tərifləmək' },
  { en: 'to vilify', tr: 'iftira atmaq', wrong: 'tərifləmək' },
  { en: 'to vituperate', tr: 'qəzəbli tənqid etmək', wrong: 'tərifləmək' },
  { en: 'diatribe', tr: 'sərt hücum', wrong: 'tərif nitqi' }
],

// ─────────────────────── QUIZ 4 — Criticism & Condemnation (2) ───────────────────────
[
  { en: 'acrimonious', tr: 'acıqlı', wrong: 'mehriban' },
  { en: 'acrimony', tr: 'kin', wrong: 'sevgi' },
  { en: 'aspersion', tr: 'iftira', wrong: 'tərif' },
  { en: 'defamation', tr: 'ləkələmə', wrong: 'tərif' },
  { en: 'derisive', tr: 'lağ edici', wrong: 'hörmətli' },
  { en: 'derogatory', tr: 'aşağılayıcı', wrong: 'tərifedici' },
  { en: 'invective', tr: 'təhqir', wrong: 'tərif' },
  { en: 'pejorative', tr: 'aşağılayıcı', wrong: 'müsbət' },
  { en: 'polemic', tr: 'kəskin mübahisə', wrong: 'razılıq' },
  { en: 'recrimination', tr: 'qarşılıqlı ittiham', wrong: 'qarşılıqlı tərif' },
  { en: 'reprehensible', tr: 'qınanacaq', wrong: 'təqdirəlayiq' },
  { en: 'scathing', tr: 'sərt', wrong: 'yumşaq' },
  { en: 'scurrilous', tr: 'təhqiramiz', wrong: 'hörmətli' },
  { en: 'slander', tr: 'iftira', wrong: 'tərif' },
  { en: 'tirade', tr: 'qızğın nitq', wrong: 'tərif nitqi' },
  { en: 'vitriolic', tr: 'zəhərli', wrong: 'mehriban' },
  { en: 'harangue', tr: 'qızğın danışma', wrong: 'sakit danışma' },
  { en: 'lampoon', tr: 'satira', wrong: 'tərif' },
  { en: 'to malign', tr: 'pisləmək', wrong: 'tərifləmək' },
  { en: 'to impugn', tr: 'şübhə altına almaq', wrong: 'təsdiqləmək' }
],

// ─────────────────────── QUIZ 5 — Morality & Ethics (1) ───────────────────────
[
  { en: 'to absolve', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq' },
  { en: 'to atone', tr: 'təkfir etmək', wrong: 'günah işləmək' },
  { en: 'contrition', tr: 'peşmançılıq', wrong: 'qürur' },
  { en: 'culpable', tr: 'günahkar', wrong: 'günahsız' },
  { en: 'culprit', tr: 'təqsirkar', wrong: 'qurban' },
  { en: 'depravity', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq' },
  { en: 'impropriety', tr: 'uyğunsuzluq', wrong: 'uyğunluq' },
  { en: 'iniquitous', tr: 'ədalətsiz', wrong: 'ədalətli' },
  { en: 'malfeasance', tr: 'qanunsuz hərəkət', wrong: 'qanuni hərəkət' },
  { en: 'nefarious', tr: 'alçaq', wrong: 'nəcib' },
  { en: 'penitence', tr: 'peşmançılıq', wrong: 'qürur' },
  { en: 'probity', tr: 'dürüstlük', wrong: 'yalançılıq' },
  { en: 'profligate', tr: 'israfçı', wrong: 'qənaətcil' },
  { en: 'rectitude', tr: 'əxlaqi düzgünlük', wrong: 'əxlaqsızlıq' },
  { en: 'repentance', tr: 'peşmançılıq', wrong: 'qürur' },
  { en: 'reproachable', tr: 'qınanacaq', wrong: 'təqdirəlayiq' },
  { en: 'righteousness', tr: 'ədalətlilik', wrong: 'ədalətsizlik' },
  { en: 'turpitude', tr: 'alçaqlıq', wrong: 'nəciblik' },
  { en: 'wrongdoer', tr: 'günahkar', wrong: 'günahsız' },
  { en: 'wickedness', tr: 'pislik', wrong: 'yaxşılıq' }
],

// ─────────────────────── QUIZ 6 — Morality & Ethics (2) ───────────────────────
[
  { en: 'altruistic', tr: 'əltruist', wrong: 'eqoist' },
  { en: 'to condone', tr: 'bağışlamaq', wrong: 'cəzalandırmaq' },
  { en: 'to desecrate', tr: 'müqəddəsliyini pozmaq', wrong: 'hörmət etmək' },
  { en: 'dishonourable', tr: 'namussuz', wrong: 'namuslu' },
  { en: 'execrable', tr: 'nifrətəlayiq', wrong: 'təqdirəlayiq' },
  { en: 'flagrant', tr: 'aşkar', wrong: 'gizli' },
  { en: 'heinous', tr: 'çox pis', wrong: 'yaxşı' },
  { en: 'immaculate', tr: 'ləkəsiz', wrong: 'ləkəli' },
  { en: 'inhumanity', tr: 'insanlıqsızlıq', wrong: 'insanlıq' },
  { en: 'irreproachable', tr: 'qüsursuz', wrong: 'qüsurlu' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri' },
  { en: 'philanthropic', tr: 'xeyriyyəçi', wrong: 'eqoist' },
  { en: 'pious', tr: 'dindar', wrong: 'dinsiz' },
  { en: 'sacrilegious', tr: 'müqəddəsliyə hörmətsizlik', wrong: 'hörmətli' },
  { en: 'sanctimonious', tr: 'iküzlü dindar', wrong: 'səmimi dindar' },
  { en: 'scrupulous', tr: 'vicdanlı', wrong: 'vicdansız' },
  { en: 'to transgress', tr: 'qanunu pozmaq', wrong: 'qanuna əməl etmək' },
  { en: 'transgression', tr: 'pozuntu', wrong: 'əməl' }
],

// ─────────────────────── QUIZ 7 — Power & Authority (1) ───────────────────────
[
  { en: 'autocracy', tr: 'avtokratiya', wrong: 'demokratiya' },
  { en: 'autocrat', tr: 'avtokrat', wrong: 'demokrat' },
  { en: 'to abdicate', tr: 'taxtdan imtina etmək', wrong: 'taxta çıxmaq' },
  { en: 'ascendancy', tr: 'üstünlük', wrong: 'zəiflik' },
  { en: 'dominion', tr: 'hakimiyyət', wrong: 'tabesizlik' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'respublika' },
  { en: 'hegemony', tr: 'hegemonluq', wrong: 'bərabərlik' },
  { en: 'imperialism', tr: 'imperializm', wrong: 'azadlıq' },
  { en: 'incumbent', tr: 'vəzifədə olan', wrong: 'namizəd' },
  { en: 'oligarchy', tr: 'oliqarxiya', wrong: 'demokratiya' },
  { en: 'omnipotence', tr: 'hər şeyə qadirlik', wrong: 'zəiflik' },
  { en: 'patriarch', tr: 'atafiqur', wrong: 'anafigür' },
  { en: 'prerogative', tr: 'imtiyaz', wrong: 'məhdudiyyət' },
  { en: 'primacy', tr: 'birincilik', wrong: 'ikincilik' },
  { en: 'sovereignty', tr: 'suverenlik', wrong: 'asılılıq' },
  { en: 'supremacy', tr: 'üstünlük', wrong: 'bərabərlik' },
  { en: 'to subjugate', tr: 'boyunduruq altına almaq', wrong: 'azad etmək' },
  { en: 'to usurp', tr: 'zorla ələ keçirmək', wrong: 'qanuni almaq' },
  { en: 'usurpation', tr: 'zorla ələ keçirmə', wrong: 'qanuni miras' },
  { en: 'totalitarian', tr: 'totalitar', wrong: 'demokratik' }
],

// ─────────────────────── QUIZ 8 — Power & Authority (2) ───────────────────────
[
  { en: 'aegis', tr: 'himayə', wrong: 'təhlükə' },
  { en: 'to coerce', tr: 'məcbur etmək', wrong: 'azad buraxmaq' },
  { en: 'coercion', tr: 'məcburiyyət', wrong: 'azadlıq' },
  { en: 'demagogue', tr: 'demqoq', wrong: 'dövlət xadimi' },
  { en: 'dictatorial', tr: 'diktatorluq', wrong: 'demokratik' },
  { en: 'entrenchment', tr: 'möhkəmlənmə', wrong: 'zəifləmə' },
  { en: 'figurehead', tr: 'nominal rəhbər', wrong: 'əsl rəhbər' },
  { en: 'jurisdiction', tr: 'səlahiyyət', wrong: 'məhdudiyyət' },
  { en: 'mandate', tr: 'səlahiyyət', wrong: 'qadağa' },
  { en: 'matriarch', tr: 'anafigür', wrong: 'atafiqur' },
  { en: 'mogul', tr: 'maqnat', wrong: 'adi adam' },
  { en: 'monarch', tr: 'monarx', wrong: 'respublikaçı' },
  { en: 'potentate', tr: 'hakim', wrong: 'tabe' },
  { en: 'regent', tr: 'regent', wrong: 'adi vətəndaş' },
  { en: 'to subdue', tr: 'ram etmək', wrong: 'azad etmək' },
  { en: 'to suppress', tr: 'boğmaq', wrong: 'dəstəkləmək' },
  { en: 'tutelage', tr: 'himayə', wrong: 'azadlıq' },
  { en: 'tyrant', tr: 'tiran', wrong: 'ədalətli hökmdar' },
  { en: 'tyranny', tr: 'tiranlıq', wrong: 'demokratiya' },
  { en: 'veto', tr: 'veto', wrong: 'təsdiq' }
],

// ─────────────────────── QUIZ 9 — Conflict & Hostility (1) ───────────────────────
[
  { en: 'adversary', tr: 'düşmən', wrong: 'dost' },
  { en: 'altercation', tr: 'mübahisə', wrong: 'razılıq' },
  { en: 'animosity', tr: 'kin', wrong: 'sevgi' },
  { en: 'antagonise', tr: 'düşmən etmək', wrong: 'dost etmək' },
  { en: 'antipathy', tr: 'antipatiya', wrong: 'simpatiya' },
  { en: 'bellicose', tr: 'döyüşkən', wrong: 'sülhsevər' },
  { en: 'belligerent', tr: 'müharibə aparan', wrong: 'sülhsevər' },
  { en: 'combat', tr: 'döyüş', wrong: 'sülh' },
  { en: 'conflagration', tr: 'böyük münaqişə', wrong: 'sülh' },
  { en: 'discord', tr: 'nifaq', wrong: 'harmoniya' },
  { en: 'enmity', tr: 'düşmənçilik', wrong: 'dostluq' },
  { en: 'feud', tr: 'qarşıdurma', wrong: 'barış' },
  { en: 'fray', tr: 'dava', wrong: 'sülh' },
  { en: 'to foment', tr: 'qızışdırmaq', wrong: 'sakitləşdirmək' },
  { en: 'incendiary', tr: 'qızışdırıcı', wrong: 'sakitləşdirici' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh' },
  { en: 'internecine', tr: 'daxili müharibə', wrong: 'xarici müharibə' },
  { en: 'melee', tr: 'qarışıq dava', wrong: 'sülh' },
  { en: 'onslaught', tr: 'güclü hücum', wrong: 'müdafiə' },
  { en: 'skirmish', tr: 'kiçik toqquşma', wrong: 'sülh' }
],

// ─────────────────────── QUIZ 10 — Conflict & Hostility (2) ───────────────────────
[
  { en: 'strife', tr: 'mübarizə', wrong: 'sülh' },
  { en: 'tumult', tr: 'qarışıqlıq', wrong: 'sakitlik' },
  { en: 'tumultuous', tr: 'qarışıq', wrong: 'sakit' },
  { en: 'upheaval', tr: 'çevriliş', wrong: 'sabitlik' },
  { en: 'uprising', tr: 'üsyan', wrong: 'sülh' },
  { en: 'turmoil', tr: 'qarışıqlıq', wrong: 'sakitlik' },
  { en: 'vendetta', tr: 'qan davası', wrong: 'barış' },
  { en: 'warfare', tr: 'müharibə', wrong: 'sülh' },
  { en: 'to beleaguer', tr: 'mühazirə etmək', wrong: 'azad etmək' },
  { en: 'dissension', tr: 'ixtilaf', wrong: 'razılıq' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət' },
  { en: 'marauder', tr: 'talançı', wrong: 'qoruyucu' },
  { en: 'rancour', tr: 'kin', wrong: 'sevgi' },
  { en: 'ravage', tr: 'dağıntı', wrong: 'qurma' },
  { en: 'to retaliate', tr: 'qisas almaq', wrong: 'bağışlamaq' },
  { en: 'retribution', tr: 'cəza', wrong: 'mükafat' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik' },
  { en: 'siege', tr: 'mühazirə', wrong: 'azadlıq' },
  { en: 'warlord', tr: 'müharibə başçısı', wrong: 'sülh elçisi' },
  { en: 'to vanquish', tr: 'məğlub etmək', wrong: 'məğlub olmaq' }
]

      // ─────────────────────── QUIZ 11 — Law & Governance (1) ───────────────────────
[
  { en: 'to abrogate', tr: 'ləğv etmək', wrong: 'təsdiqləmək' },
  { en: 'abrogation', tr: 'ləğv', wrong: 'təsdiq' },
  { en: 'to accede', tr: 'razılaşmaq', wrong: 'imtina etmək' },
  { en: 'affidavit', tr: 'andlı ifadə', wrong: 'şifahi ifadə' },
  { en: 'allegation', tr: 'iddiaya', wrong: 'sübut' },
  { en: 'to allege', tr: 'iddiaya etmək', wrong: 'sübut etmək' },
  { en: 'amendment', tr: 'dəyişiklik', wrong: 'sabitlik' },
  { en: 'breach', tr: 'pozuntu', wrong: 'əməl' },
  { en: 'to contravene', tr: 'pozmaq', wrong: 'əməl etmək' },
  { en: 'decree', tr: 'fərman', wrong: 'təklif' },
  { en: 'edict', tr: 'əmr', wrong: 'məsləhət' },
  { en: 'enforcement', tr: 'icra', wrong: 'ləğv' },
  { en: 'to indict', tr: 'ittiham etmək', wrong: 'azad etmək' },
  { en: 'indictment', tr: 'ittihamnamə', wrong: 'bəraət' },
  { en: 'infraction', tr: 'qayda pozuntusu', wrong: 'qaydaya riayət' },
  { en: 'injunction', tr: 'məhkəmə qadağası', wrong: 'icazə' },
  { en: 'jurisdiction', tr: 'səlahiyyət dairəsi', wrong: 'səlahiyyətsizlik' },
  { en: 'jurisprudence', tr: 'hüquqşünaslıq', wrong: 'qeyri-hüquqi' },
  { en: 'legislation', tr: 'qanunvericilik', wrong: 'qanunsuzluq' },
  { en: 'ordinance', tr: 'yerli qayda', wrong: 'qadağa' }
],

// ─────────────────────── QUIZ 12 — Law & Governance (2) ───────────────────────
[
  { en: 'perjury', tr: 'yalan ifadə', wrong: 'düzgün ifadə' },
  { en: 'plaintiff', tr: 'iddiaçı', wrong: 'cavabdeh' },
  { en: 'to ratify', tr: 'təsdiqləmək', wrong: 'ləğv etmək' },
  { en: 'ratification', tr: 'təsdiq', wrong: 'imtina' },
  { en: 'to rescind', tr: 'ləğv etmək', wrong: 'qüvvədə saxlamaq' },
  { en: 'to revoke', tr: 'ləğv etmək', wrong: 'uzatmaq' },
  { en: 'revocation', tr: 'ləğv', wrong: 'təsdiq' },
  { en: 'statute', tr: 'qanun', wrong: 'ənənə' },
  { en: 'subpoena', tr: 'məhkəmə çağırışı', wrong: 'dəvət' },
  { en: 'to adjudicate', tr: 'məhkəmə yolu ilə həll etmək', wrong: 'görüşmədə həll etmək' },
  { en: 'tribunal', tr: 'məhkəmə', wrong: 'parlament' },
  { en: 'verdict', tr: 'hökm', wrong: 'təklif' },
  { en: 'to acquit', tr: 'bəraət qazanmaq', wrong: 'günahlandırmaq' },
  { en: 'culprit', tr: 'təqsirkar', wrong: 'qurban' },
  { en: 'custody', tr: 'həbs', wrong: 'azadlıq' },
  { en: 'defendant', tr: 'cavabdeh', wrong: 'iddiaçı' },
  { en: 'to exonerate', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq' },
  { en: 'to indemnify', tr: 'təzminat ödəmək', wrong: 'cərimə etmək' },
  { en: 'to prosecute', tr: 'cinayət işi açmaq', wrong: 'müdafiə etmək' },
  { en: 'restitution', tr: 'əvəz ödənişi', wrong: 'cəza' }
],

// ─────────────────────── QUIZ 13 — Praise & Admiration ───────────────────────
[
  { en: 'acclaim', tr: 'böyük tərif', wrong: 'tənqid' },
  { en: 'acclamation', tr: 'alkış', wrong: 'pisləmə' },
  { en: 'accolade', tr: 'fəxri ad', wrong: 'tənqid' },
  { en: 'adulation', tr: 'həddindən artıq tərif', wrong: 'nifrət' },
  { en: 'to commend', tr: 'tərifləmək', wrong: 'qınamaq' },
  { en: 'to extol', tr: 'ucaltmaq', wrong: 'aşağılamaq' },
  { en: 'eulogy', tr: 'tərif nitqi', wrong: 'tənqid nitqi' },
  { en: 'to exalt', tr: 'ucaltmaq', wrong: 'alçaltmaq' },
  { en: 'exaltation', tr: 'ucaldılma', wrong: 'alçaldılma' },
  { en: 'homage', tr: 'hörmət', wrong: 'hörmətsizlik' },
  { en: 'kudos', tr: 'tərif', wrong: 'tənqid' },
  { en: 'to laud', tr: 'tərifləmək', wrong: 'pisləmək' },
  { en: 'laudable', tr: 'tərifəlayiq', wrong: 'qınanacaq' },
  { en: 'laureate', tr: 'mükafatçı', wrong: 'məğlub' },
  { en: 'ovation', tr: 'ayaq üstə alqış', wrong: 'fit' },
  { en: 'to revere', tr: 'hörmət etmək', wrong: 'nifrət etmək' },
  { en: 'reverent', tr: 'hörmətli', wrong: 'hörmətsiz' },
  { en: 'venerable', tr: 'hörmətəlayiq', wrong: 'adi' },
  { en: 'veneration', tr: 'hörmət', wrong: 'nifrət' },
  { en: 'to vindicate', tr: 'haqlı çıxarmaq', wrong: 'günahlandırmaq' }
],

// ─────────────────────── QUIZ 14 — Negative Character Traits (1) ───────────────────────
[
  { en: 'arrogance', tr: 'təkəbbür', wrong: 'təvazökarlıq' },
  { en: 'avarice', tr: 'tamahkarlıq', wrong: 'səxavət' },
  { en: 'bigotry', tr: 'fanatizm', wrong: 'tolerantlıq' },
  { en: 'bombastic', tr: 'təntənəli', wrong: 'sadə' },
  { en: 'boorish', tr: 'kobud', wrong: 'nəzakətli' },
  { en: 'callous', tr: 'duyğusuz', wrong: 'hissli' },
  { en: 'capricious', tr: 'qərarsız', wrong: 'qətiyyətli' },
  { en: 'churlish', tr: 'qaba', wrong: 'mehriban' },
  { en: 'complacent', tr: 'özündən razı', wrong: 'təvazökar' },
  { en: 'condescension', tr: 'yuxarıdan baxma', wrong: 'bərabər münasibət' },
  { en: 'craven', tr: 'qorxaq', wrong: 'cəsur' },
  { en: 'credulous', tr: 'asanlıqla inanan', wrong: 'skeptik' },
  { en: 'cupidity', tr: 'tamah', wrong: 'qənaət' },
  { en: 'feckless', tr: 'məsuliyyətsiz', wrong: 'məsuliyyətli' },
  { en: 'frivolous', tr: 'ciddi olmayan', wrong: 'ciddi' },
  { en: 'gluttony', tr: 'oburluq', wrong: 'təmkin' },
  { en: 'hubris', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq' },
  { en: 'hypocrisy', tr: 'iküzlülük', wrong: 'səmimiyyət' },
  { en: 'impudence', tr: 'utanmazlıq', wrong: 'utanma' },
  { en: 'insolent', tr: 'ədəbsiz', wrong: 'nəzakətli' }
],

// ─────────────────────── QUIZ 15 — Negative Character Traits (2) ───────────────────────
[
  { en: 'irascible', tr: 'tez əsəbiləşən', wrong: 'sakit' },
  { en: 'jaded', tr: 'yorğun və biganə', wrong: 'həvəsli' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı' },
  { en: 'mendacious', tr: 'yalançı', wrong: 'dürüst' },
  { en: 'misanthrope', tr: 'insan nifrətçisi', wrong: 'insansevər' },
  { en: 'narcissism', tr: 'özünə vurulma', wrong: 'özünütənqid' },
  { en: 'nepotism', tr: 'qohumbazlıq', wrong: 'ədalət' },
  { en: 'obsequious', tr: 'yaltaq', wrong: 'ləyaqətli' },
  { en: 'obstinate', tr: 'tərs', wrong: 'güzəştə getməyə hazır' },
  { en: 'petulant', tr: 'əsəbi və tələbkar', wrong: 'sakit' },
  { en: 'pompous', tr: 'təntənəli', wrong: 'sadə' },
  { en: 'presumptuous', tr: 'həddini aşan', wrong: 'təvazökar' },
  { en: 'pusillanimous', tr: 'qorxaq', wrong: 'cəsur' },
  { en: 'rapacious', tr: 'tamahkar', wrong: 'səxavətli' },
  { en: 'recalcitrant', tr: 'itaətsiz', wrong: 'itaətkar' },
  { en: 'recklessness', tr: 'ehtiyatsızlıq', wrong: 'ehtiyatlılıq' },
  { en: 'servile', tr: 'qul kimi', wrong: 'ləyaqətli' },
  { en: 'sycophantic', tr: 'yaltaq', wrong: 'dürüst' },
  { en: 'unctuous', tr: 'yaltaq', wrong: 'səmimi' },
  { en: 'vindictive', tr: 'qisasçı', wrong: 'bağışlayan' }
],

// ─────────────────────── QUIZ 16 — Positive Character Traits (1) ───────────────────────
[
  { en: 'adroit', tr: 'bacarıqlı', wrong: 'bacarıqsız' },
  { en: 'affable', tr: 'səmimi və mehriban', wrong: 'kobud' },
  { en: 'astute', tr: 'zirək', wrong: 'sadəlövh' },
  { en: 'candour', tr: 'açıqlıq', wrong: 'gizlətmə' },
  { en: 'circumspect', tr: 'ehtiyatlı', wrong: 'ehtiyatsız' },
  { en: 'clemency', tr: 'mərhəmət', wrong: 'sərtlik' },
  { en: 'convivial', tr: 'şən və əyləncəli', wrong: 'kədərli' },
  { en: 'dexterous', tr: 'mahır', wrong: 'bacarıqsız' },
  { en: 'diligent', tr: 'çalışqan', wrong: 'tənbəl' },
  { en: 'equanimity', tr: 'sakitlik', wrong: 'həyəcan' },
  { en: 'fastidious', tr: 'tələbkar', wrong: 'biganə' },
  { en: 'forbearance', tr: 'dözümlülük', wrong: 'səbirsizlik' },
  { en: 'fortitude', tr: 'dözüm', wrong: 'zəiflik' },
  { en: 'frugal', tr: 'qənaətcil', wrong: 'israfçı' },
  { en: 'genial', tr: 'mehriban', wrong: 'soyuq' },
  { en: 'gregarious', tr: 'ünsiyyətcil', wrong: 'tənha' },
  { en: 'impartial', tr: 'ədalətli', wrong: 'tərəfkeş' },
  { en: 'indefatigable', tr: 'yorulmaz', wrong: 'yorğun' },
  { en: 'industrious', tr: 'çalışqan', wrong: 'tənbəl' },
  { en: 'intrepid', tr: 'qorxmaz', wrong: 'qorxaq' }
],

// ─────────────────────── QUIZ 17 — Positive Character Traits (2) ───────────────────────
[
  { en: 'judicious', tr: 'ağıllı', wrong: 'axmaq' },
  { en: 'level-headed', tr: 'ağıl başında', wrong: 'həyəcanlı' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli' },
  { en: 'meticulous', tr: 'dəqiq', wrong: 'səhlənkar' },
  { en: 'painstaking', tr: 'zəhmətkeş', wrong: 'tənbəl' },
  { en: 'perseverance', tr: 'davamlılıq', wrong: 'təslimçilik' },
  { en: 'perspicacious', tr: 'iti ağıllı', wrong: 'küt' },
  { en: 'pragmatic', tr: 'realist', wrong: 'xəyalpərəst' },
  { en: 'prudent', tr: 'ehtiyatlı', wrong: 'ehtiyatsız' },
  { en: 'resolute', tr: 'qətiyyətli', wrong: 'qərarsız' },
  { en: 'sagacious', tr: 'dərin ağıllı', wrong: 'sadə' },
  { en: 'scrupulous', tr: 'vicdanlı', wrong: 'vicdansız' },
  { en: 'steadfastness', tr: 'sadiqlik', wrong: 'xəyanət' },
  { en: 'stoic', tr: 'dözümlü', wrong: 'həssas' },
  { en: 'tenacious', tr: 'davamlı', wrong: 'zəif' },
  { en: 'undaunted', tr: 'qorxmaz', wrong: 'qorxaq' },
  { en: 'valour', tr: 'cəsarət', wrong: 'qorxaqlıq' },
  { en: 'versatility', tr: 'çoxqabiliyyətlilik', wrong: 'məhdudluq' },
  { en: 'vigilant', tr: 'diqqətli', wrong: 'biganə' },
  { en: 'forthright', tr: 'açıq danışan', wrong: 'iküzlü' }
],

// ─────────────────────── QUIZ 18 — Emotion & Psychological States (1) ───────────────────────
[
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc' },
  { en: 'apprehension', tr: 'narahatlıq', wrong: 'sakitlik' },
  { en: 'bereavement', tr: 'itki', wrong: 'qazanc' },
  { en: 'chagrin', tr: 'məyusluq', wrong: 'sevinc' },
  { en: 'consternation', tr: 'dəhşət', wrong: 'sevinc' },
  { en: 'despondency', tr: 'ümidsizlik', wrong: 'ümid' },
  { en: 'disillusionment', tr: 'məyusluq', wrong: 'ilham' },
  { en: 'dismay', tr: 'narahatlıq', wrong: 'sevinc' },
  { en: 'doldrums', tr: 'ruhi depressiya', wrong: 'xoşbəxtlik' },
  { en: 'elation', tr: 'yüksək əhval', wrong: 'kədər' },
  { en: 'euphoria', tr: 'hədsiz sevinc', wrong: 'kədər' },
  { en: 'exultation', tr: 'qələbə sevinci', wrong: 'məğlubiyyət' },
  { en: 'forlorn', tr: 'tərk edilmiş', wrong: 'xoşbəxt' },
  { en: 'frenzy', tr: 'dəli kimi həyəcan', wrong: 'sakitlik' },
  { en: 'grief', tr: 'kədər', wrong: 'sevinc' },
  { en: 'hysteria', tr: 'histeriya', wrong: 'sakitlik' },
  { en: 'indignation', tr: 'qəzəb', wrong: 'sakitlik' },
  { en: 'infatuation', tr: 'ehtiras', wrong: 'nifrət' },
  { en: 'jubilation', tr: 'şadlıq', wrong: 'kədər' },
  { en: 'melancholy', tr: 'qəmginlik', wrong: 'sevinc' }
],

// ─────────────────────── QUIZ 19 — Emotion & Psychological States (2) ───────────────────────
[
  { en: 'misgiving', tr: 'şübhə', wrong: 'inam' },
  { en: 'pang', tr: 'kəskin ağrı', wrong: 'rahatlıq' },
  { en: 'pique', tr: 'inciklik', wrong: 'sevinc' },
  { en: 'rapture', tr: 'dərin zövq', wrong: 'kədər' },
  { en: 'remorse', tr: 'vicdan əzabı', wrong: 'qürur' },
  { en: 'repugnance', tr: 'iyrənc', wrong: 'xoş' },
  { en: 'reverie', tr: 'xəyal', wrong: 'reallıq' },
  { en: 'trepidation', tr: 'qorxu', wrong: 'cəsarət' },
  { en: 'umbrage', tr: 'inciklik', wrong: 'razılıq' },
  { en: 'unease', tr: 'narahatlıq', wrong: 'rahatlıq' },
  { en: 'vexation', tr: 'qıcıqlanma', wrong: 'sakitlik' },
  { en: 'wistful', tr: 'həsrətli', wrong: 'məmnun' },
  { en: 'woe', tr: 'bədbəxtlik', wrong: 'xoşbəxtlik' },
  { en: 'yearning', tr: 'həsrət', wrong: 'biganəlik' },
  { en: 'ennui', tr: 'darıxma', wrong: 'həyəcan' },
  { en: 'catharsis', tr: 'ruhi təmizlənmə', wrong: 'stress' },
  { en: 'palpitation', tr: 'ürək döyüntüsü', wrong: 'sakitlik' },
  { en: 'delirium', tr: 'sayrışma', wrong: 'ağıl' },
  { en: 'stupor', tr: 'keylik', wrong: 'canlılıq' },
  { en: 'mortifying', tr: 'utandırıcı', wrong: 'qürurverici' }
],

// ─────────────────────── QUIZ 20 — Weakness & Decline ───────────────────────
[
  { en: 'to abate', tr: 'zəifləmək', wrong: 'güclənmək' },
  { en: 'attrition', tr: 'zəifləmə', wrong: 'güclənmə' },
  { en: 'to debilitate', tr: 'zəiflətmək', wrong: 'gücləndirmək' },
  { en: 'decrepit', tr: 'köhnəlmiş', wrong: 'yeni' },
  { en: 'defunct', tr: 'fəaliyyətsiz', wrong: 'aktiv' },
  { en: 'to deplete', tr: 'tükətmək', wrong: 'artırmaq' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq' },
  { en: 'enervate', tr: 'zəiflətmək', wrong: 'gücləndirmək' },
  { en: 'entropy', tr: 'dağılma', wrong: 'qayda' },
  { en: 'to erode', tr: 'eroziyaya uğratmaq', wrong: 'möhkəmlətmək' },
  { en: 'feeble', tr: 'zəif', wrong: 'güclü' },
  { en: 'to founder', tr: 'iflas etmək', wrong: 'uğur qazanmaq' },
  { en: 'impair', tr: 'zədələmək', wrong: 'yaxşılaşdırmaq' },
  { en: 'inertia', tr: 'hərəkətsizlik', wrong: 'hərəkət' },
  { en: 'lethargic', tr: 'tənbəl', wrong: 'enerjili' },
  { en: 'lethargy', tr: 'tənbəllik', wrong: 'enerji' },
  { en: 'moribund', tr: 'ölüm ayağında', wrong: 'canlı' },
  { en: 'to stagnate', tr: 'durğunlaşmaq', wrong: 'inkişaf etmək' },
  { en: 'stagnant', tr: 'durğun', wrong: 'inkişaf edən' },
  { en: 'to wane', tr: 'zəifləmək', wrong: 'güclənmək' }
]
      // ─────────────────────── QUIZ 21 — Resistance & Stubbornness ───────────────────────
[
  { en: 'adamant', tr: 'sarsılmaz', wrong: 'qərarsız' },
  { en: 'to balk', tr: 'imtina etmək', wrong: 'razılaşmaq' },
  { en: 'contumacious', tr: 'itaətsiz', wrong: 'itaətkar' },
  { en: 'dogged', tr: 'davamlı', wrong: 'təslimçi' },
  { en: 'implacable', tr: 'barışmaz', wrong: 'barışaq' },
  { en: 'indomitable', tr: 'məğlubedilməz', wrong: 'zəif' },
  { en: 'intransigent', tr: 'güzəştə getməyən', wrong: 'güzəştə gedən' },
  { en: 'intransigence', tr: 'güzəştsizlik', wrong: 'güzəşt' },
  { en: 'obdurate', tr: 'tərs', wrong: 'yumşaq' },
  { en: 'obstinate', tr: 'tərs', wrong: 'güzəştə getməyə hazır' },
  { en: 'refractory', tr: 'itaətsiz', wrong: 'itaətkar' },
  { en: 'recalcitrant', tr: 'itaətsiz', wrong: 'itaətkar' },
  { en: 'recalcitrance', tr: 'itaətsizlik', wrong: 'itaət' },
  { en: 'relentless', tr: 'amansız', wrong: 'yumşaq' },
  { en: 'reticent', tr: 'danıqmaz', wrong: 'açıq danışan' },
  { en: 'restive', tr: 'narazı', wrong: 'razı' },
  { en: 'stalwart', tr: 'sadiq və möhkəm', wrong: 'zəif' },
  { en: 'steadfast', tr: 'sarsılmaz', wrong: 'dəyişkən' },
  { en: 'to withstand', tr: 'dözmək', wrong: 'təslim olmaq' },
  { en: 'unyielding', tr: 'güzəştsiz', wrong: 'güzəştə gedən' }
],

// ─────────────────────── QUIZ 22 — Disorder & Chaos ───────────────────────
[
  { en: 'anarchy', tr: 'anarxiya', wrong: 'nizam' },
  { en: 'bedlam', tr: 'dəlilik', wrong: 'sakitlik' },
  { en: 'cacophony', tr: 'qulaqbatırıcı səs', wrong: 'harmoniya' },
  { en: 'cataclysm', tr: 'böyük fəlakət', wrong: 'sakitlik' },
  { en: 'débâcle', tr: 'tam iflas', wrong: 'uğur' },
  { en: 'havoc', tr: 'dağıntı', wrong: 'qayda' },
  { en: 'maelstrom', tr: 'qasırğa', wrong: 'sakit dəniz' },
  { en: 'mayhem', tr: 'xaos', wrong: 'nizam' },
  { en: 'pandemonium', tr: 'dəhşətli xaos', wrong: 'sakitlik' },
  { en: 'ruckus', tr: 'səs-küy', wrong: 'sakitlik' },
  { en: 'shambles', tr: 'dağınıqlıq', wrong: 'qayda' },
  { en: 'stampede', tr: 'panik qaçış', wrong: 'sakit hərəkət' },
  { en: 'tumult', tr: 'qarışıqlıq', wrong: 'sakitlik' },
  { en: 'turbulence', tr: 'turbulentlik', wrong: 'sakitlik' },
  { en: 'uproar', tr: 'səs-küy', wrong: 'sakitlik' },
  { en: 'upheaval', tr: 'çevriliş', wrong: 'sabitlik' },
  { en: 'commotion', tr: 'həyəcan', wrong: 'sakitlik' },
  { en: 'disarray', tr: 'dağınıqlıq', wrong: 'qayda' },
  { en: 'melee', tr: 'qarışıq dava', wrong: 'sülh' },
  { en: 'frenzy', tr: 'dəli həyəcan', wrong: 'sakitlik' }
],

// ─────────────────────── QUIZ 23 — Language, Rhetoric & Literature (1) ───────────────────────
[
  { en: 'allegory', tr: 'alleqoriya', wrong: 'birbaşa məna' },
  { en: 'allusion', tr: 'işarə', wrong: 'birbaşa demə' },
  { en: 'anecdote', tr: 'qısa hekayə', wrong: 'roman' },
  { en: 'aphorism', tr: 'aforizm', wrong: 'uzun mətn' },
  { en: 'axiom', tr: 'aksiyom', wrong: 'fərziyyə' },
  { en: 'byword', tr: 'atasözü', wrong: 'qeyri-rəsmi' },
  { en: 'cadence', tr: 'ritm', wrong: 'qeyri-ritmik' },
  { en: 'connotation', tr: 'əlavə məna', wrong: 'əsas məna' },
  { en: 'epigram', tr: 'epigram', wrong: 'uzun şeir' },
  { en: 'euphemism', tr: 'yumşaq ifadə', wrong: 'kobud ifadə' },
  { en: 'hyperbole', tr: 'həddindən artıq şişirtmə', wrong: 'həqiqət' },
  { en: 'innuendo', tr: 'gizli işarə', wrong: 'birbaşa demə' },
  { en: 'jargon', tr: 'peşə termini', wrong: 'adi dil' },
  { en: 'lexicon', tr: 'sözlük', wrong: 'cümlə' },
  { en: 'maxim', tr: 'müdrik kəlam', wrong: 'axmaq söz' },
  { en: 'metaphor', tr: 'metafora', wrong: 'birbaşa müqayisə' },
  { en: 'nomenclature', tr: 'terminologiya', wrong: 'adi ad' },
  { en: 'oxymoron', tr: 'oksümoron', wrong: 'uyğun ifadə' },
  { en: 'parable', tr: 'məsəl', wrong: 'roman' },
  { en: 'parlance', tr: 'danışıq tərzi', wrong: 'rəsmi dil' }
],

// ─────────────────────── QUIZ 24 — Language, Rhetoric & Literature (2) ───────────────────────
[
  { en: 'platitude', tr: 'banal ifadə', wrong: 'orijinal fikir' },
  { en: 'polemic', tr: 'kəskin mübahisə', wrong: 'razılıq' },
  { en: 'proverb', tr: 'atasözü', wrong: 'şeir' },
  { en: 'rhetoric', tr: 'retorika', wrong: 'adi danışıq' },
  { en: 'semantics', tr: 'semantika', wrong: 'qrammatika' },
  { en: 'simile', tr: 'oxşatma', wrong: 'metafora' },
  { en: 'soliloquy', tr: 'tək danışış', wrong: 'dialoq' },
  { en: 'stanza', tr: 'bənd', wrong: 'bütün şeir' },
  { en: 'synopsis', tr: 'qısa məzmun', wrong: 'tam mətn' },
  { en: 'tenet', tr: 'əsas prinsip', wrong: 'ikinci dərəcəli' },
  { en: 'terminology', tr: 'terminologiya', wrong: 'adi söz' },
  { en: 'tome', tr: 'qalın kitab', wrong: 'incə kitab' },
  { en: 'treatise', tr: 'elmi əsər', wrong: 'hekayə' },
  { en: 'truism', tr: 'aşkar həqiqət', wrong: 'şübhəli fikir' },
  { en: 'verbatim', tr: 'hərfiyyən', wrong: 'tərcümə' },
  { en: 'vernacular', tr: 'xalq dili', wrong: 'rəsmi dil' },
  { en: 'glossary', tr: 'sözlük', wrong: 'mətn' },
  { en: 'adage', tr: 'müdrik kəlam', wrong: 'axmaq söz' },
  { en: 'diatribe', tr: 'sərt hücum', wrong: 'tərif' },
  { en: 'dissertation', tr: 'dissertasiya', wrong: 'qısa məqalə' }
],

// ─────────────────────── QUIZ 25 — Thought, Reasoning & Philosophy (1) ───────────────────────
[
  { en: 'abstraction', tr: 'abstraksiya', wrong: 'konkretlik' },
  { en: 'ambiguity', tr: 'ikmənalılıq', wrong: 'aydınlıq' },
  { en: 'anachronism', tr: 'anaxronizm', wrong: 'zaman uyğunluğu' },
  { en: 'antithesis', tr: 'əkslik', wrong: 'oxşarlıq' },
  { en: 'axiom', tr: 'aksiyom', wrong: 'fərziyyə' },
  { en: 'axiomatic', tr: 'öz-özünə aydın', wrong: 'şübhəli' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif' },
  { en: 'conjecture', tr: 'fərziyyə', wrong: 'sübut' },
  { en: 'dialectic', tr: 'dialektika', wrong: 'monoloq' },
  { en: 'dichotomy', tr: 'ikili bölgü', wrong: 'vahidlik' },
  { en: 'dogma', tr: 'doqma', wrong: 'şübhə' },
  { en: 'enigma', tr: 'tapmaca', wrong: 'aydınlıq' },
  { en: 'epistemology', tr: 'epistemologiya', wrong: 'praktika' },
  { en: 'equivocal', tr: 'ikmənalı', wrong: 'aydın' },
  { en: 'fallacy', tr: 'yanlış təsəvvür', wrong: 'həqiqət' },
  { en: 'hypothesis', tr: 'hipotez', wrong: 'sübut' },
  { en: 'ideology', tr: 'ideologiya', wrong: 'praktika' },
  { en: 'inference', tr: 'nəticə çıxarma', wrong: 'fakt' },
  { en: 'introspection', tr: 'özünüdərketmə', wrong: 'xarici müşahidə' },
  { en: 'nihilism', tr: 'nihilizm', wrong: 'idealizm' }
],

// ─────────────────────── QUIZ 26 — Thought, Reasoning & Philosophy (2) ───────────────────────
[
  { en: 'paradigm', tr: 'paradigma', wrong: 'köhnə model' },
  { en: 'paradox', tr: 'paradoks', wrong: 'məntiqi nəticə' },
  { en: 'pragmatism', tr: 'pragmatizm', wrong: 'idealizm' },
  { en: 'postulate', tr: 'postulat', wrong: 'şübhə' },
  { en: 'rationalism', tr: 'rasionalizm', wrong: 'emosionalizm' },
  { en: 'sophistry', tr: 'yalançı mühakimə', wrong: 'düzgün mühakimə' },
  { en: 'syllogism', tr: 'sillogizm', wrong: 'qeyri-məntiqi' },
  { en: 'synthesis', tr: 'sintez', wrong: 'ayrılma' },
  { en: 'tenet', tr: 'əsas prinsip', wrong: 'ikinci dərəcəli' },
  { en: 'theorem', tr: 'teorem', wrong: 'fərziyyə' },
  { en: 'utilitarianism', tr: 'utilitarizm', wrong: 'idealizm' },
  { en: 'utopianism', tr: 'utopiya', wrong: 'realizm' },
  { en: 'empiricism', tr: 'empirizm', wrong: 'spekulyasiya' },
  { en: 'ontology', tr: 'ontologiya', wrong: 'praktika' },
  { en: 'relativism', tr: 'relativizm', wrong: 'absolyutizm' },
  { en: 'scepticism', tr: 'skeptisizm', wrong: 'inam' },
  { en: 'stoicism', tr: 'stoitsizm', wrong: 'emosionalizm' },
  { en: 'subjectivism', tr: 'subyektivizm', wrong: 'obyektivizm' },
  { en: 'fatalism', tr: 'fatalizm', wrong: 'azad iradə' },
  { en: 'materialism', tr: 'materializm', wrong: 'idealizm' }
],

// ─────────────────────── QUIZ 27 — Social Status & Class ───────────────────────
[
  { en: 'bourgeoisie', tr: 'burjuaziya', wrong: 'proletariat' },
  { en: 'caste', tr: 'kasta', wrong: 'bərabərlik' },
  { en: 'chattel', tr: 'əmlak kimi qul', wrong: 'azad insan' },
  { en: 'clique', tr: 'qrup', wrong: 'açıq cəmiyyət' },
  { en: 'compatriot', tr: 'vətəndaş yoldaşı', wrong: 'əcnəbi' },
  { en: 'cosmopolitan', tr: 'kosmopolit', wrong: 'millətçi' },
  { en: 'diaspora', tr: 'diaspora', wrong: 'vətəndə yaşayanlar' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'demokratiya' },
  { en: 'enclave', tr: 'ərazi qrupu', wrong: 'açıq ərazi' },
  { en: 'entourage', tr: 'ətraf', wrong: 'tək' },
  { en: 'gentry', tr: 'zadəganlar', wrong: 'kasıblar' },
  { en: 'intelligentsia', tr: 'intelligensiya', wrong: 'sadə xalq' },
  { en: 'lineage', tr: 'nəsil', wrong: 'qohumsuzluq' },
  { en: 'meritocracy', tr: 'ləyaqət sistemi', wrong: 'qohumbazlıq' },
  { en: 'pariah', tr: 'kənarlaşdırılmış', wrong: 'mərkəzdə olan' },
  { en: 'patrician', tr: 'zadəgan', wrong: 'sadə vətəndaş' },
  { en: 'pedigree', tr: 'nəcabət', wrong: 'adi mənşə' },
  { en: 'populace', tr: 'xalq kütləsi', wrong: 'elit' },
  { en: 'proletariat', tr: 'proletariat', wrong: 'burjuaziya' },
  { en: 'serfdom', tr: 'təhkimçilik', wrong: 'azadlıq' }
],

// ─────────────────────── QUIZ 28 — Wealth, Greed & Poverty ───────────────────────
[
  { en: 'avarice', tr: 'tamahkarlıq', wrong: 'səxavət' },
  { en: 'bounty', tr: 'bolluq', wrong: 'yoxsulluq' },
  { en: 'cupidity', tr: 'tamah', wrong: 'qənaət' },
  { en: 'destitute', tr: 'kasıb', wrong: 'varlı' },
  { en: 'frugal', tr: 'qənaətcil', wrong: 'israfçı' },
  { en: 'indigent', tr: 'yoxsul', wrong: 'varlı' },
  { en: 'largesse', tr: 'səxavət', wrong: 'cimrilik' },
  { en: 'meagre', tr: 'az', wrong: 'bol' },
  { en: 'miserly', tr: 'cimri', wrong: 'səxavətli' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri' },
  { en: 'opulence', tr: 'zənginlik', wrong: 'yoxsulluq' },
  { en: 'opulent', tr: 'zəngin', wrong: 'kasıb' },
  { en: 'parsimonious', tr: 'qənaətcil', wrong: 'israfçı' },
  { en: 'parsimony', tr: 'cimrilik', wrong: 'səxavət' },
  { en: 'paucity', tr: 'çatışmazlıq', wrong: 'bolluq' },
  { en: 'penury', tr: 'yoxsulluq', wrong: 'var-dövlət' },
  { en: 'pittance', tr: 'cüzi məbləğ', wrong: 'böyük məbləğ' },
  { en: 'plunder', tr: 'talamaq', wrong: 'vermək' },
  { en: 'rapacious', tr: 'tamahkar', wrong: 'səxavətli' },
  { en: 'squander', tr: 'israf etmək', wrong: 'qənaət etmək' }
],

// ─────────────────────── QUIZ 29 — Religion, Belief & Ritual (1) ───────────────────────
[
  { en: 'apostle', tr: 'həvari', wrong: 'düşmən' },
  { en: 'blasphemy', tr: 'küfr', wrong: 'ibadət' },
  { en: 'consecration', tr: 'müqəddəsləşdirmə', wrong: 'müqəddəsliyi pozma' },
  { en: 'creed', tr: 'etikad', wrong: 'şübhə' },
  { en: 'deity', tr: 'ilahə', wrong: 'adi insan' },
  { en: 'disciple', tr: 'şagird', wrong: 'rəhbər' },
  { en: 'divination', tr: 'falçılıq', wrong: 'elmi proqnoz' },
  { en: 'dogma', tr: 'doqma', wrong: 'şübhə' },
  { en: 'heresy', tr: 'bidət', wrong: 'əsas inanc' },
  { en: 'heretical', tr: 'bidətçi', wrong: 'dindar' },
  { en: 'iconoclasm', tr: 'ikon qırıcı', wrong: 'hörmət' },
  { en: 'invocation', tr: 'çağırış', wrong: 'sükut' },
  { en: 'liturgy', tr: 'ibadət ayini', wrong: 'adi mərasim' },
  { en: 'martyrdom', tr: 'şəhidlik', wrong: 'qorxaqlıq' },
  { en: 'messiah', tr: 'məsih', wrong: 'adi insan' },
  { en: 'oracle', tr: 'kahin', wrong: 'adi danışan' },
  { en: 'piety', tr: 'dindarlıq', wrong: 'dinsizlik' },
  { en: 'pious', tr: 'dindar', wrong: 'dinsiz' },
  { en: 'prophecy', tr: 'peyğəmbərlik', wrong: 'yalan' },
  { en: 'sacrilege', tr: 'müqəddəsliyə hörmətsizlik', wrong: 'hörmət' }
],

// ─────────────────────── QUIZ 30 — Religion, Belief & Ritual (2) ───────────────────────
[
  { en: 'sacrosanct', tr: 'müqəddəs', wrong: 'adi' },
  { en: 'sainthood', tr: 'müqəddəslik', wrong: 'günahkarlıq' },
  { en: 'salvation', tr: 'xilas', wrong: 'cəhənnəm' },
  { en: 'sanctity', tr: 'müqəddəslik', wrong: 'adi' },
  { en: 'sanctuary', tr: 'sığınacaq', wrong: 'təhlükə' },
  { en: 'shrine', tr: 'ziyarətgah', wrong: 'adi yer' },
  { en: 'to abjure', tr: 'imtina etmək', wrong: 'qəbul etmək' },
  { en: 'to genuflect', tr: 'dizi üstə çökmək', wrong: 'dik durmaq' },
  { en: 'to consecrate', tr: 'müqəddəsləşdirmək', wrong: 'müqəddəsliyi pozmaq' },
  { en: 'tithe', tr: 'on faiz', wrong: 'bütün var-dövlət' },
  { en: 'talisman', tr: 'talisman', wrong: 'adi əşya' },
  { en: 'totem', tr: 'totem', wrong: 'adi simvol' },
  { en: 'veneration', tr: 'hörmət', wrong: 'nifrət' },
  { en: 'to revere', tr: 'hörmət etmək', wrong: 'nifrət etmək' },
  { en: 'resurrection', tr: 'dirilmə', wrong: 'ölüm' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik' },
  { en: 'theology', tr: 'ilahiyyat', wrong: 'elmi' },
  { en: 'rite', tr: 'ayin', wrong: 'adi hərəkət' },
  { en: 'creed', tr: 'etikad', wrong: 'şübhə' },
  { en: 'zealotry', tr: 'fanatizm', wrong: 'laqeydlik' }
]
      // ─────────────────────── QUIZ 31 — Ambition, Success & Failure (1) ───────────────────────
[
  { en: 'acumen', tr: 'iti ağıl', wrong: 'küt ağıl' },
  { en: 'aplomb', tr: 'özünə inam', wrong: 'qorxu' },
  { en: 'aptitude', tr: 'qabiliyyət', wrong: 'bacarıqsızlıq' },
  { en: 'audacity', tr: 'cəsarət', wrong: 'qorxaqlıq' },
  { en: 'to burgeon', tr: 'çiçəklənmək', wrong: 'solmaq' },
  { en: 'to culminate', tr: 'zirvəyə çatmaq', wrong: 'uğursuzluqla bitmək' },
  { en: 'daunting', tr: 'qorxuducu', wrong: 'asan' },
  { en: 'to excel', tr: 'üstün olmaq', wrong: 'geridə qalmaq' },
  { en: 'expedition', tr: 'sürətli irəliləyiş', wrong: 'ləngimə' },
  { en: 'to flourish', tr: 'inkişaf etmək', wrong: 'tənəzzül etmək' },
  { en: 'formidable', tr: 'təsirli', wrong: 'zəif' },
  { en: 'fruition', tr: 'nəticə', wrong: 'uğursuzluq' },
  { en: 'to galvanise', tr: 'hərəkətə keçirmək', wrong: 'saxlamaq' },
  { en: 'ingenuity', tr: 'zirəklik', wrong: 'sadəlik' },
  { en: 'to persevere', tr: 'davam etmək', wrong: 'təslim olmaq' },
  { en: 'pinnacle', tr: 'zirvə', wrong: 'dib' },
  { en: 'pioneering', tr: 'öncüllük', wrong: 'gerilik' },
  { en: 'prodigious', tr: 'heyrətamiz', wrong: 'adi' },
  { en: 'to surmount', tr: 'qalib gəlmək', wrong: 'məğlub olmaq' },
  { en: 'zenith', tr: 'zirvə', wrong: 'dib' }
],

// ─────────────────────── QUIZ 32 — Ambition, Success & Failure (2) ───────────────────────
[
  { en: 'debacle', tr: 'tam iflas', wrong: 'uğur' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq' },
  { en: 'to falter', tr: 'səndələmək', wrong: 'qətiyyətli olmaq' },
  { en: 'fiasco', tr: 'böyük uğursuzluq', wrong: 'uğur' },
  { en: 'folly', tr: 'axmaqlıq', wrong: 'ağıllılıq' },
  { en: 'to founder', tr: 'iflas etmək', wrong: 'uğur qazanmaq' },
  { en: 'futile', tr: 'boş', wrong: 'faydalı' },
  { en: 'futility', tr: 'boşluq', wrong: 'fayda' },
  { en: 'hapless', tr: 'bədbəxt', wrong: 'xoşbəxt' },
  { en: 'impediment', tr: 'maneə', wrong: 'kömək' },
  { en: 'inadequacy', tr: 'çatışmazlıq', wrong: 'kifayətlik' },
  { en: 'ineptitude', tr: 'bacarıqsızlıq', wrong: 'bacarıq' },
  { en: 'nadir', tr: 'ən aşağı nöqtə', wrong: 'zirvə' },
  { en: 'pitfall', tr: 'tələ', wrong: 'uğur yolu' },
  { en: 'quagmire', tr: 'çətin vəziyyət', wrong: 'asan yol' },
  { en: 'recklessness', tr: 'ehtiyatsızlıq', wrong: 'ehtiyatlılıq' },
  { en: 'to squander', tr: 'israf etmək', wrong: 'qənaət etmək' },
  { en: 'to succumb', tr: 'məğlub olmaq', wrong: 'qalib gəlmək' },
  { en: 'undoing', tr: 'məhv', wrong: 'qurtuluş' },
  { en: 'ruination', tr: 'dağıntı', wrong: 'qurma' }
],

// ─────────────────────── QUIZ 33 — Deference, Submission & Servility ───────────────────────
[
  { en: 'acquiescence', tr: 'razılaşma', wrong: 'etiraz' },
  { en: 'to acquiesce', tr: 'razılaşmaq', wrong: 'etiraz etmək' },
  { en: 'to appease', tr: 'sakitləşdirmək', wrong: 'qızışdırmaq' },
  { en: 'to capitulate', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək' },
  { en: 'complicity', tr: 'gizli iştirak', wrong: 'müqavimət' },
  { en: 'to condescend', tr: 'yuxarıdan baxmaq', wrong: 'bərabər davranmaq' },
  { en: 'deference', tr: 'hörmət', wrong: 'hörmətsizlik' },
  { en: 'to defer', tr: 'hörmət etmək', wrong: 'etiraz etmək' },
  { en: 'to grovel', tr: 'yaltaqlanmaq', wrong: 'ləyaqətli olmaq' },
  { en: 'obsequious', tr: 'yaltaq', wrong: 'ləyaqətli' },
  { en: 'servile', tr: 'qul kimi', wrong: 'ləyaqətli' },
  { en: 'servility', tr: 'qulluq', wrong: 'ləyaqət' },
  { en: 'servitude', tr: 'qulluq', wrong: 'azadlıq' },
  { en: 'subservience', tr: 'tabesizlik', wrong: 'müstəqillik' },
  { en: 'subordinate', tr: 'tabe', wrong: 'rəhbər' },
  { en: 'subordination', tr: 'tabesizlik', wrong: 'bərabərlik' },
  { en: 'to succumb', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək' },
  { en: 'sycophancy', tr: 'yaltaqlıq', wrong: 'dürüstlük' },
  { en: 'sycophant', tr: 'yaltaq', wrong: 'dürüst adam' },
  { en: 'to yield', tr: 'güzəştə getmək', wrong: 'müqavimət göstərmək' }
],

// ─────────────────────── QUIZ 34 — Time, Change & Impermanence ───────────────────────
[
  { en: 'anachronism', tr: 'zaman uyğunsuzluğu', wrong: 'zaman uyğunluğu' },
  { en: 'antiquated', tr: 'köhnəlmiş', wrong: 'müasir' },
  { en: 'antiquity', tr: 'qədimlik', wrong: 'müasirlik' },
  { en: 'archaic', tr: 'qədim', wrong: 'müasir' },
  { en: 'to burgeon', tr: 'inkişaf etmək', wrong: 'tənəzzül etmək' },
  { en: 'cessation', tr: 'dayanma', wrong: 'davam' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq' },
  { en: 'ephemeral', tr: 'qısaömürlü', wrong: 'davamlı' },
  { en: 'evanescent', tr: 'tez keçən', wrong: 'davamlı' },
  { en: 'fleeting', tr: 'keçici', wrong: 'davamlı' },
  { en: 'flux', tr: 'dəyişiklik', wrong: 'sabitlik' },
  { en: 'hiatus', tr: 'fasilə', wrong: 'davamlılıq' },
  { en: 'inception', tr: 'başlanğıc', wrong: 'son' },
  { en: 'moratorium', tr: 'müvəqqəti dayandırma', wrong: 'davam' },
  { en: 'nascent', tr: 'yeni yaranan', wrong: 'köhnə' },
  { en: 'obsolescence', tr: 'köhnəlmə', wrong: 'yenilik' },
  { en: 'obsolete', tr: 'köhnəlmiş', wrong: 'müasir' },
  { en: 'perennial', tr: 'davamlı', wrong: 'qısaömürlü' },
  { en: 'renaissance', tr: 'dirçəliş', wrong: 'tənəzzül' },
  { en: 'transient', tr: 'keçici', wrong: 'davamlı' }
],

// ─────────────────────── QUIZ 35 — Nature & Geography ───────────────────────
[
  { en: 'archipelago', tr: 'ada qrupu', wrong: 'qitə' },
  { en: 'abyss', tr: 'uçurum', wrong: 'təpə' },
  { en: 'chasm', tr: 'yarğan', wrong: 'təpə' },
  { en: 'crevasse', tr: 'buz çatlağı', wrong: 'düzənlik' },
  { en: 'delta', tr: 'çay mənsəbi', wrong: 'mənbə' },
  { en: 'escarpment', tr: 'dik qaya', wrong: 'düzənlik' },
  { en: 'fauna', tr: 'heyvanlar aləmi', wrong: 'bitkilər aləmi' },
  { en: 'flora', tr: 'bitkilər aləmi', wrong: 'heyvanlar aləmi' },
  { en: 'hinterland', tr: 'daxili ərazi', wrong: 'sahil' },
  { en: 'knoll', tr: 'təpəcik', wrong: 'uçurum' },
  { en: 'ravine', tr: 'dərə', wrong: 'dağ' },
  { en: 'tundra', tr: 'tundra', wrong: 'səhra' },
  { en: 'wasteland', tr: 'səhra', wrong: 'məhsuldar torpaq' },
  { en: 'wilderness', tr: 'vəhşi təbiət', wrong: 'şəhər' },
  { en: 'typhoon', tr: 'tayfun', wrong: 'sakit hava' },
  { en: 'tornado', tr: 'tornado', wrong: 'sakit hava' },
  { en: 'tributary', tr: 'çay qolu', wrong: 'əsas çay' },
  { en: 'sediment', tr: 'çökmə', wrong: 'təmiz su' },
  { en: 'topography', tr: 'topoqrafiya', wrong: 'düzənlik' }
],

// ─────────────────────── QUIZ 36 — War, Military & Strategy (1) ───────────────────────
[
  { en: 'armistice', tr: 'atəşkəs', wrong: 'müharibə' },
  { en: 'attrition', tr: 'zəiflətmə müharibəsi', wrong: 'sürətli qələbə' },
  { en: 'bastion', tr: 'qala', wrong: 'açıq ərazi' },
  { en: 'brinkmanship', tr: 'riskli siyasət', wrong: 'ehtiyatlı siyasət' },
  { en: 'bulwark', tr: 'müdafiə', wrong: 'zəiflik' },
  { en: 'citadel', tr: 'qala', wrong: 'açıq şəhər' },
  { en: 'to decimate', tr: 'böyük itki vermək', wrong: 'qorumaq' },
  { en: 'garrison', tr: 'qarnizon', wrong: 'mülki əhali' },
  { en: 'guerrilla', tr: 'partizan', wrong: 'nizami ordu' },
  { en: 'incursion', tr: 'basqın', wrong: 'müdafiə' },
  { en: 'munition', tr: 'sursat', wrong: 'silahsız' },
  { en: 'reconnaissance', tr: 'kəşfiyyat', wrong: 'mübarizə' },
  { en: 'sabotage', tr: 'diversiya', wrong: 'qurma' },
  { en: 'saboteur', tr: 'diversant', wrong: 'qurucu' },
  { en: 'squadron', tr: 'eskadrilya', wrong: 'tək əsgər' },
  { en: 'stratagem', tr: 'hərbi hiylə', wrong: 'açıq döyüş' },
  { en: 'stronghold', tr: 'möhkəm mövqe', wrong: 'zəif mövqe' },
  { en: 'to subjugate', tr: 'boyunduruq altına almaq', wrong: 'azad etmək' },
  { en: 'to vanquish', tr: 'məğlub etmək', wrong: 'məğlub olmaq' },
  { en: 'weaponry', tr: 'silahlar', wrong: 'silahsız' }
],

// ─────────────────────── QUIZ 37 — War, Military & Strategy (2) ───────────────────────
[
  { en: 'ambush', tr: 'pusqu', wrong: 'açıq döyüş' },
  { en: 'cavalry', tr: 'atlı qoşun', wrong: 'piyada' },
  { en: 'combat', tr: 'döyüş', wrong: 'sülh' },
  { en: 'conscription', tr: 'məcburi hərbi xidmət', wrong: 'könüllü' },
  { en: 'coup', tr: 'dövlət çevrilişi', wrong: 'qanuni hakimiyyət' },
  { en: 'entrenchment', tr: 'istehkam', wrong: 'açıq mövqe' },
  { en: 'foray', tr: 'basqın', wrong: 'müdafiə' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh' },
  { en: 'marauder', tr: 'talançı', wrong: 'qoruyucu' },
  { en: 'mercenary', tr: 'muzdlu əsgər', wrong: 'vətənpərvər' },
  { en: 'militia', tr: 'xalq milisi', wrong: 'nizami ordu' },
  { en: 'raid', tr: 'basqın', wrong: 'müdafiə' },
  { en: 'rout', tr: 'tam məğlubiyyət', wrong: 'qələbə' },
  { en: 'siege', tr: 'mühazirə', wrong: 'azadlıq' },
  { en: 'skirmish', tr: 'kiçik toqquşma', wrong: 'böyük döyüş' },
  { en: 'sortie', tr: 'çıxış əməliyyatı', wrong: 'müdafiə' },
  { en: 'standoff', tr: 'qarşıdurma', wrong: 'razılıq' },
  { en: 'to besiege', tr: 'mühazirə etmək', wrong: 'azad etmək' },
  { en: 'to repel', tr: 'dəf etmək', wrong: 'qəbul etmək' },
  { en: 'to retaliate', tr: 'qisas almaq', wrong: 'bağışlamaq' }
],

// ─────────────────────── QUIZ 38 — Crime, Corruption & Wrongdoing (1) ───────────────────────
[
  { en: 'accomplice', tr: 'cinayət ortaqı', wrong: 'şahid' },
  { en: 'to abscond', tr: 'qaçmaq', wrong: 'qalmaq' },
  { en: 'to abet', tr: 'cinayətə kömək etmək', wrong: 'mane olmaq' },
  { en: 'cabal', tr: 'gizli qrup', wrong: 'açıq qrup' },
  { en: 'clandestine', tr: 'gizli', wrong: 'açıq' },
  { en: 'collusion', tr: 'gizli razılaşma', wrong: 'qanuni müqavilə' },
  { en: 'complicity', tr: 'iştirak', wrong: 'günahsızlıq' },
  { en: 'conspiracy', tr: 'sui-qəsd', wrong: 'açıq plan' },
  { en: 'to embezzle', tr: 'mənimsəmək', wrong: 'qaytarmaq' },
  { en: 'felony', tr: 'ağır cinayət', wrong: 'kiçik pozuntu' },
  { en: 'illicit', tr: 'qanunsuz', wrong: 'qanuni' },
  { en: 'impunity', tr: 'cəzasızlıq', wrong: 'cəza' },
  { en: 'indictment', tr: 'ittiham', wrong: 'bəraət' },
  { en: 'infraction', tr: 'pozuntu', wrong: 'qaydaya riayət' },
  { en: 'larceny', tr: 'oğurluq', wrong: 'qanuni əldə etmə' },
  { en: 'malfeasance', tr: 'qanunsuz hərəkət', wrong: 'qanuni hərəkət' },
  { en: 'nefarious', tr: 'alçaq', wrong: 'nəcib' },
  { en: 'perpetrator', tr: 'cinayətkar', wrong: 'qurban' },
  { en: 'piracy', tr: 'dəniz quldurluğu', wrong: 'qanuni ticarət' },
  { en: 'recidivism', tr: 'təkrar cinayət', wrong: 'islah' }
],

// ─────────────────────── QUIZ 39 — Crime, Corruption & Wrongdoing (2) ───────────────────────
[
  { en: 'ringleader', tr: 'başçı', wrong: 'adi iştirakçı' },
  { en: 'rogue', tr: 'fırıldaqçı', wrong: 'dürüst' },
  { en: 'scoundrel', tr: 'alçaq', wrong: 'nəcib' },
  { en: 'skullduggery', tr: 'hiyləgərlik', wrong: 'dürüstlük' },
  { en: 'subterfuge', tr: 'aldatma', wrong: 'açıqlıq' },
  { en: 'to swindle', tr: 'fırıldaq etmək', wrong: 'qanuni iş' },
  { en: 'trafficker', tr: 'qaçaqmalçı', wrong: 'qanuni tacir' },
  { en: 'treason', tr: 'vətənə xəyanət', wrong: 'vətənpərvərlik' },
  { en: 'turpitude', tr: 'alçaqlıq', wrong: 'nəciblik' },
  { en: 'vandalism', tr: 'vandalizm', wrong: 'qoruma' },
  { en: 'villainy', tr: 'alçaqlıq', wrong: 'qəhrəmanlıq' },
  { en: 'to connive', tr: 'göz yummaq', wrong: 'mane olmaq' },
  { en: 'to contravene', tr: 'pozmaq', wrong: 'əməl etmək' },
  { en: 'contraband', tr: 'qaçaqmal', wrong: 'qanuni mal' },
  { en: 'corruption', tr: 'korrupsiya', wrong: 'dürüstlük' },
  { en: 'extortion', tr: 'ələ keçirmə', wrong: 'qanuni ödəniş' },
  { en: 'forgery', tr: 'saxtakarlıq', wrong: 'orijinal' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət' },
  { en: 'subversion', tr: 'dağıdıcı fəaliyyət', wrong: 'qurma' },
  { en: 'wrongdoer', tr: 'günahkar', wrong: 'günahsız' }
],

// ─────────────────────── QUIZ 40 — Suffering & Hardship (1) ───────────────────────
[
  { en: 'adversity', tr: 'çətinlik', wrong: 'asanlıq' },
  { en: 'affliction', tr: 'əzab', wrong: 'xoşbəxtlik' },
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc' },
  { en: 'atrocity', tr: 'vəhşilik', wrong: 'yaxşılıq' },
  { en: 'bereavement', tr: 'itki', wrong: 'qazanc' },
  { en: 'desolation', tr: 'tənhalıq', wrong: 'sevinc' },
  { en: 'destitute', tr: 'kasıb', wrong: 'varlı' },
  { en: 'duress', tr: 'məcburiyyət', wrong: 'azadlıq' },
  { en: 'emaciated', tr: 'arıqlamış', wrong: 'sağlam' },
  { en: 'forlorn', tr: 'ümidsiz', wrong: 'xoşbəxt' },
  { en: 'grievance', tr: 'şikayət', wrong: 'razılıq' },
  { en: 'gruelling', tr: 'çox ağır', wrong: 'asan' },
  { en: 'hardship', tr: 'çətinlik', wrong: 'asanlıq' },
  { en: 'holocaust', tr: 'böyük qırğın', wrong: 'sülh' },
  { en: 'inhumanity', tr: 'insanlıqsızlıq', wrong: 'insanlıq' },
  { en: 'misery', tr: 'əzab', wrong: 'xoşbəxtlik' },
  { en: 'oppression', tr: 'əsarət', wrong: 'azadlıq' },
  { en: 'ordeal', tr: 'ağır sınaq', wrong: 'asanlıq' },
  { en: 'persecution', tr: 'təqib', wrong: 'dəstək' },
  { en: 'privation', tr: 'yoxsulluq', wrong: 'bolluq' }
]

      // ─────────────────────── QUIZ 41 — Suffering & Hardship (2) ───────────────────────
[
  { en: 'plight', tr: 'ağır vəziyyət', wrong: 'asan vəziyyət' },
  { en: 'remorse', tr: 'vicdan əzabı', wrong: 'qürur' },
  { en: 'repression', tr: 'siyasi təzyiq', wrong: 'azadlıq' },
  { en: 'scourge', tr: 'bəla', wrong: 'xeyir' },
  { en: 'servitude', tr: 'qulluq', wrong: 'azadlıq' },
  { en: 'shackle', tr: 'zəncir', wrong: 'azadlıq' },
  { en: 'squalid', tr: 'çirkli və yoxsul', wrong: 'təmiz və varlı' },
  { en: 'squalor', tr: 'yoxsulluq', wrong: 'zənginlik' },
  { en: 'torment', tr: 'işgəncə', wrong: 'rahatlıq' },
  { en: 'tribulation', tr: 'çətin sınaq', wrong: 'asanlıq' },
  { en: 'woe', tr: 'bədbəxtlik', wrong: 'xoşbəxtlik' },
  { en: 'wretched', tr: 'bədbəxt', wrong: 'xoşbəxt' },
  { en: 'yoke', tr: 'boyunduruq', wrong: 'azadlıq' },
  { en: 'serfdom', tr: 'təhkimçilik', wrong: 'azadlıq' },
  { en: 'depravity', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq' },
  { en: 'subjugation', tr: 'əsarət', wrong: 'azadlıq' },
  { en: 'drudgery', tr: 'ağır zəhmət', wrong: 'asan iş' },
  { en: 'ignominy', tr: 'rüsvayçılıq', wrong: 'şöhrət' },
  { en: 'destitution', tr: 'kasıblıq', wrong: 'var-dövlət' },
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc' }
],

// ─────────────────────── QUIZ 42 — Generosity, Charity & Compassion ───────────────────────
[
  { en: 'benefactor', tr: 'xeyriyyəçi', wrong: 'eqoist' },
  { en: 'benevolence', tr: 'xeyirxahlıq', wrong: 'pis niyyət' },
  { en: 'benevolent', tr: 'xeyirxah', wrong: 'zalım' },
  { en: 'to bequeath', tr: 'vəsiyyət etmək', wrong: 'almaq' },
  { en: 'bequest', tr: 'vəsiyyət', wrong: 'borc' },
  { en: 'bounty', tr: 'səxavət', wrong: 'cimrilik' },
  { en: 'to commiserate', tr: 'həmdərd olmaq', wrong: 'lağa qoymaq' },
  { en: 'to endow', tr: 'ianə vermək', wrong: 'almaq' },
  { en: 'to exonerate', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq' },
  { en: 'forbearance', tr: 'dözümlülük', wrong: 'səbirsizlik' },
  { en: 'to forgive', tr: 'bağışlamaq', wrong: 'cəzalandırmaq' },
  { en: 'largesse', tr: 'səxavət', wrong: 'cimrilik' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri' },
  { en: 'to palliate', tr: 'yumşaltmaq', wrong: 'pisləşdirmək' },
  { en: 'philanthropic', tr: 'xeyriyyəçi', wrong: 'eqoist' },
  { en: 'philanthropist', tr: 'xeyriyyəçi', wrong: 'eqoist' },
  { en: 'reparation', tr: 'təzminat', wrong: 'cəza' },
  { en: 'to solace', tr: 'təsəlli vermək', wrong: 'əzab vermək' },
  { en: 'to succour', tr: 'kömək etmək', wrong: 'zərər vermək' }
],

// ─────────────────────── QUIZ 43 — Pride, Vanity & Arrogance ───────────────────────
[
  { en: 'affectation', tr: 'sunilik', wrong: 'təbiiilik' },
  { en: 'arrogance', tr: 'təkəbbür', wrong: 'təvazökarlıq' },
  { en: 'audacity', tr: 'həyasızlıq', wrong: 'utanma' },
  { en: 'bombastic', tr: 'təntənəli', wrong: 'sadə' },
  { en: 'bravado', tr: 'yalançı igidlik', wrong: 'təvazökarlıq' },
  { en: 'condescension', tr: 'yuxarıdan baxma', wrong: 'bərabərlik' },
  { en: 'effrontery', tr: 'utanmazlıq', wrong: 'utanma' },
  { en: 'egregious', tr: 'çox pis', wrong: 'mükəmməl' },
  { en: 'grandiosity', tr: 'böyüklük iddiası', wrong: 'təvazökarlıq' },
  { en: 'haughtiness', tr: 'təkəbbür', wrong: 'təvazökarlıq' },
  { en: 'hubris', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq' },
  { en: 'imperious', tr: 'əmr verən', wrong: 'təvazökar' },
  { en: 'insolence', tr: 'ədəbsizlik', wrong: 'nəzakət' },
  { en: 'ostentation', tr: 'nümayişkarlıq', wrong: 'sadəlik' },
  { en: 'ostentatious', tr: 'nümayişkar', wrong: 'sadə' },
  { en: 'pompous', tr: 'təntənəli', wrong: 'sadə' },
  { en: 'presumptuous', tr: 'həddini aşan', wrong: 'təvazökar' },
  { en: 'pretentious', tr: 'id dialı', wrong: 'sadə' },
  { en: 'vanity', tr: 'özünə vurulma', wrong: 'təvazökarlıq' },
  { en: 'overweening', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq' }
],

// ─────────────────────── QUIZ 44 — Secrecy & Concealment ───────────────────────
[
  { en: 'arcane', tr: 'gizli', wrong: 'açıq' },
  { en: 'clandestine', tr: 'gizli', wrong: 'açıq' },
  { en: 'covert', tr: 'gizli', wrong: 'açıq' },
  { en: 'cryptic', tr: 'sirli', wrong: 'aydın' },
  { en: 'esoteric', tr: 'daxili', wrong: 'xarici' },
  { en: 'furtive', tr: 'gizli', wrong: 'açıq' },
  { en: 'to harbour', tr: 'gizlətmək', wrong: 'açıqlamaq' },
  { en: 'to hoard', tr: 'yığmaq', wrong: 'paylaşmaq' },
  { en: 'inscrutable', tr: 'anlaşılmaz', wrong: 'aydın' },
  { en: 'latent', tr: 'gizli', wrong: 'aşkar' },
  { en: 'obscure', tr: 'qaranlıq', wrong: 'aydın' },
  { en: 'opacity', tr: 'bulanıqlıq', wrong: 'şəffaflıq' },
  { en: 'recondite', tr: 'dərin və gizli', wrong: 'sadə' },
  { en: 'to shroud', tr: 'örtmək', wrong: 'açmaq' },
  { en: 'shrouded', tr: 'örtülü', wrong: 'açıq' },
  { en: 'sly', tr: 'hiyləgər', wrong: 'səmimi' },
  { en: 'stealth', tr: 'gizlilik', wrong: 'açıqlıq' },
  { en: 'surreptitious', tr: 'gizli', wrong: 'açıq' },
  { en: 'to suppress', tr: 'boğmaq', wrong: 'açıqlamaq' },
  { en: 'to withhold', tr: 'gizlətmək', wrong: 'vermək' }
],

// ─────────────────────── QUIZ 45 — Rebellion & Dissent ───────────────────────
[
  { en: 'anarchy', tr: 'anarxiya', wrong: 'nizam' },
  { en: 'apostasy', tr: 'dindən dönmə', wrong: 'sadiqlik' },
  { en: 'defection', tr: 'tərəf dəyişmə', wrong: 'sadiqlik' },
  { en: 'disaffection', tr: 'narazılıq', wrong: 'razılıq' },
  { en: 'dissident', tr: 'dissident', wrong: 'tərəfdar' },
  { en: 'heresy', tr: 'bidət', wrong: 'əsas inanc' },
  { en: 'iconoclasm', tr: 'köhnəyə qarşı çıxma', wrong: 'hörmət' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh' },
  { en: 'mutiny', tr: 'qiyam', wrong: 'itaət' },
  { en: 'radicalism', tr: 'radikalizm', wrong: 'mühafizəkarlıq' },
  { en: 'renegade', tr: 'xain', wrong: 'sadiq' },
  { en: 'to renounce', tr: 'imtina etmək', wrong: 'qəbul etmək' },
  { en: 'to revolt', tr: 'üsyan etmək', wrong: 'itaət etmək' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik' },
  { en: 'secession', tr: 'ayrılma', wrong: 'birlik' },
  { en: 'seditious', tr: 'üsyançı', wrong: 'sadiq' },
  { en: 'subversive', tr: 'dağıdıcı', wrong: 'qurucu' },
  { en: 'to subvert', tr: 'dağıtmaq', wrong: 'qurmaq' },
  { en: 'uprising', tr: 'üsyan', wrong: 'sülh' }
],

// ─────────────────────── QUIZ 46 — Diplomacy & Negotiation ───────────────────────
[
  { en: 'to accede', tr: 'razılaşmaq', wrong: 'imtina etmək' },
  { en: 'accession', tr: 'qəbul', wrong: 'rədd' },
  { en: 'bilateral', tr: 'ikitarafli', wrong: 'tək tərəfli' },
  { en: 'brinkmanship', tr: 'riskli danışıq', wrong: 'ehtiyatlı danışıq' },
  { en: 'to capitulate', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək' },
  { en: 'cessation', tr: 'dayanma', wrong: 'davam' },
  { en: 'conciliatory', tr: 'barışdırıcı', wrong: 'münaqişəli' },
  { en: 'concordance', tr: 'razılıq', wrong: 'ixtilaf' },
  { en: 'to convene', tr: 'toplaşdırmaq', wrong: 'dağıtmaq' },
  { en: 'to deliberate', tr: 'müzakirə etmək', wrong: 'tələsmək' },
  { en: 'envoy', tr: 'elçi', wrong: 'düşmən' },
  { en: 'emissary', tr: 'elçi', wrong: 'düşmən' },
  { en: 'to mediate', tr: 'vasitəçilik etmək', wrong: 'müdaxilə etmək' },
  { en: 'moratorium', tr: 'müvəqqəti dayandırma', wrong: 'davam' },
  { en: 'parity', tr: 'bərabərlik', wrong: 'üstünlük' },
  { en: 'ratification', tr: 'təsdiq', wrong: 'ləğv' },
  { en: 'to ratify', tr: 'təsdiqləmək', wrong: 'ləğv etmək' },
  { en: 'reciprocity', tr: 'qarşılıqlılıq', wrong: 'bir tərəfli' },
  { en: 'reprieve', tr: 'müvəqqəti azadlıq', wrong: 'cəza' },
  { en: 'treaty', tr: 'müqavilə', wrong: 'müharibə' }
],

// ─────────────────────── QUIZ 47 — Excess & Indulgence ───────────────────────
[
  { en: 'decadence', tr: 'tənəzzül', wrong: 'inkişaf' },
  { en: 'debauchery', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq' },
  { en: 'excess', tr: 'həddindən artıq', wrong: 'ölçü' },
  { en: 'extravagance', tr: 'israf', wrong: 'qənaət' },
  { en: 'gluttony', tr: 'oburluq', wrong: 'təmkin' },
  { en: 'hedonistic', tr: 'zövq axtaran', wrong: 'təmkinli' },
  { en: 'indulgent', tr: 'həddindən artıq əzizləyən', wrong: 'sərt' },
  { en: 'intemperance', tr: 'hədsizlik', wrong: 'təmkin' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı' },
  { en: 'masochism', tr: 'özünə işgəncə', wrong: 'özünə qayğı' },
  { en: 'opulence', tr: 'zənginlik', wrong: 'yoxsulluq' },
  { en: 'overindulgence', tr: 'həddindən artıq zövq', wrong: 'təmkin' },
  { en: 'prodigal', tr: 'israfçı', wrong: 'qənaətcil' },
  { en: 'profligate', tr: 'israfçı', wrong: 'qənaətcil' },
  { en: 'promiscuity', tr: 'əxlaqsızlıq', wrong: 'sadiqlik' },
  { en: 'salacious', tr: 'şəhvani', wrong: 'təmiz' },
  { en: 'satiate', tr: 'doymaq', wrong: 'ac qalmaq' },
  { en: 'surfeit', tr: 'həddindən artıq', wrong: 'çatışmazlıq' },
  { en: 'wantonness', tr: 'hədsizlik', wrong: 'təmkin' },
  { en: 'dissipation', tr: 'israf', wrong: 'qənaət' }
],

// ─────────────────────── QUIZ 48 — Intellect & Knowledge (1) ───────────────────────
[
  { en: 'acuity', tr: 'iti ağıl', wrong: 'küt ağıl' },
  { en: 'acumen', tr: 'iti ağıl', wrong: 'küt ağıl' },
  { en: 'astute', tr: 'zirək', wrong: 'sadəlövh' },
  { en: 'cerebral', tr: 'ağıl ağırlıqlı', wrong: 'emosional' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif' },
  { en: 'discernment', tr: 'fərq etmə qabiliyyəti', wrong: 'korluq' },
  { en: 'erudite', tr: 'oxumuş', wrong: 'cahil' },
  { en: 'erudition', tr: 'dərin bilik', wrong: 'cahillik' },
  { en: 'incisive', tr: 'iti', wrong: 'küt' },
  { en: 'ingenious', tr: 'zirək', wrong: 'sadə' },
  { en: 'ingenuity', tr: 'zirəklik', wrong: 'sadəlik' },
  { en: 'insightful', tr: 'dərin anlayışlı', wrong: 'səthi' },
  { en: 'intuition', tr: 'intuisiya', wrong: 'məntiq' },
  { en: 'judicious', tr: 'ağıllı', wrong: 'axmaq' },
  { en: 'luminous', tr: 'aydın', wrong: 'qaranlıq' },
  { en: 'perspicacious', tr: 'iti ağıllı', wrong: 'küt' },
  { en: 'sagacious', tr: 'dərin ağıllı', wrong: 'sadə' },
  { en: 'savant', tr: 'alim', wrong: 'cahil' },
  { en: 'shrewd', tr: 'zirək', wrong: 'sadəlövh' },
  { en: 'shrewdness', tr: 'zirəklik', wrong: 'sadəlik' }
],

// ─────────────────────── QUIZ 49 — Intellect & Knowledge (2) ───────────────────────
[
  { en: 'to ascertain', tr: 'əmin olmaq', wrong: 'şübhə etmək' },
  { en: 'to debunk', tr: 'yalanını ifşa etmək', wrong: 'qəbul etmək' },
  { en: 'to discern', tr: 'fərq etmək', wrong: 'qarışdırmaq' },
  { en: 'to elucidate', tr: 'aydınlaşdırmaq', wrong: 'bulandırmaq' },
  { en: 'to enumerate', tr: 'sadələmək', wrong: 'qarışdırmaq' },
  { en: 'to expound', tr: 'ətraflı izah etmək', wrong: 'qısaltmaq' },
  { en: 'to fathom', tr: 'anlamaq', wrong: 'anlamamaq' },
  { en: 'to glean', tr: 'toplamaq', wrong: 'itirmək' },
  { en: 'to postulate', tr: 'fərz etmək', wrong: 'sübut etmək' },
  { en: 'to substantiate', tr: 'sübut etmək', wrong: 'yalanlamaq' },
  { en: 'abstruse', tr: 'çətin anlaşılır', wrong: 'sadə' },
  { en: 'arcane', tr: 'gizli', wrong: 'açıq' },
  { en: 'convoluted', tr: 'mürəkkəb', wrong: 'sadə' },
  { en: 'didactic', tr: 'öyrədici', wrong: 'əyləncəli' },
  { en: 'esoteric', tr: 'daxili', wrong: 'xarici' },
  { en: 'hypothetical', tr: 'fərzi', wrong: 'real' },
  { en: 'recondite', tr: 'dərin', wrong: 'sadə' },
  { en: 'theoretical', tr: 'nəzəri', wrong: 'praktiki' },
  { en: 'to construe', tr: 'anlamaq', wrong: 'yanlış başa düşmək' },
  { en: 'to infer', tr: 'nəticə çıxarmaq', wrong: 'fakt' }
],

// ─────────────────────── QUIZ 50 — Appearance & Perception ───────────────────────
[
  { en: 'diaphanous', tr: 'şəffaf', wrong: 'qalın' },
  { en: 'dishevelled', tr: 'dağınıq', wrong: 'səliqəli' },
  { en: 'emaciated', tr: 'arıqlamış', wrong: 'dolğun' },
  { en: 'ethereal', tr: 'havayi', wrong: 'kütləvi' },
  { en: 'garish', tr: 'çox rəngli', wrong: 'sadə' },
  { en: 'grandiose', tr: 'təntənəli', wrong: 'sadə' },
  { en: 'immaculate', tr: 'ləkəsiz', wrong: 'ləkəli' },
  { en: 'luminous', tr: 'işıqlı', wrong: 'qaranlıq' },
  { en: 'ornate', tr: 'bəzəkli', wrong: 'sadə' },
  { en: 'ostentatious', tr: 'nümayişkar', wrong: 'sadə' },
  { en: 'palatial', tr: 'saray kimi', wrong: 'adi' },
  { en: 'pallid', tr: 'solğun', wrong: 'rəngli' },
  { en: 'resplendent', tr: 'parlaq', wrong: 'solğun' },
  { en: 'shoddy', tr: 'keyfiyyətsiz', wrong: 'keyfiyyətli' },
  { en: 'silhouette', tr: 'siluet', wrong: 'tam görünüş' },
  { en: 'sombre', tr: 'qaranlıq', wrong: 'parlaq' },
  { en: 'splendour', tr: 'təntənə', wrong: 'sadəlik' },
  { en: 'stately', tr: 'təntənəli', wrong: 'adi' },
  { en: 'tawdry', tr: 'ucuz və bəzəkli', wrong: 'zərif' },
  { en: 'visage', tr: 'üz ifadəsi', wrong: 'arxa' }
]
      // ─────────────────────── QUIZ 51 — Indifference & Detachment ───────────────────────
[
  { en: 'aloof', tr: 'kənarda duran', wrong: 'ünsiyyətcil' },
  { en: 'apathetic', tr: 'laqeyd', wrong: 'həvəsli' },
  { en: 'detachment', tr: 'emosional uzaqlıq', wrong: 'emosional yaxınlıq' },
  { en: 'diffident', tr: 'özünə inamsız', wrong: 'özünə inamlı' },
  { en: 'disinterested', tr: 'laqeyd', wrong: 'maraqlı' },
  { en: 'dispassionate', tr: 'emosiyasız', wrong: 'emosional' },
  { en: 'impassive', tr: 'hisssiz', wrong: 'hissli' },
  { en: 'indifference', tr: 'laqeydlik', wrong: 'maraq' },
  { en: 'indifferent', tr: 'laqeyd', wrong: 'maraqlı' },
  { en: 'insouciant', tr: 'qayğısız', wrong: 'qayğıkeş' },
  { en: 'lackadaisical', tr: 'tənbəl və laqeyd', wrong: 'çalışqan' },
  { en: 'languid', tr: 'sölgün', wrong: 'enerjili' },
  { en: 'nonchalance', tr: 'qayğısızlıq', wrong: 'narahatlıq' },
  { en: 'nonchalant', tr: 'qayğısız', wrong: 'narahat' },
  { en: 'phlegmatic', tr: 'sakit və laqeyd', wrong: 'həyəcanlı' },
  { en: 'placid', tr: 'sakit', wrong: 'həyəcanlı' },
  { en: 'reticent', tr: 'danıqmaz', wrong: 'danışqan' },
  { en: 'stoic', tr: 'dözümlü', wrong: 'həssas' },
  { en: 'taciturn', tr: 'az danışan', wrong: 'çox danışan' },
  { en: 'disaffection', tr: 'narazılıq', wrong: 'razılıq' }
],

// ─────────────────────── QUIZ 52 — Brevity, Precision & Style ───────────────────────
[
  { en: 'brevity', tr: 'qısalıq', wrong: 'uzunluq' },
  { en: 'candour', tr: 'açıqlıq', wrong: 'gizlətmə' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif' },
  { en: 'concise', tr: 'qısa və dəqiq', wrong: 'uzun və dolaşıq' },
  { en: 'eloquent', tr: 'diləbər', wrong: 'diləbərsiz' },
  { en: 'finesse', tr: 'incəlik', wrong: 'kobudluq' },
  { en: 'laconic', tr: 'az sözlü', wrong: 'çox sözlü' },
  { en: 'lucid', tr: 'aydın', wrong: 'bulanıq' },
  { en: 'pithy', tr: 'dərin mənalı qısa', wrong: 'səthi' },
  { en: 'poise', tr: 'sakitlik və incəlik', wrong: 'həyəcan' },
  { en: 'succinct', tr: 'qısa və dəqiq', wrong: 'uzun' },
  { en: 'terse', tr: 'qısa və kəskin', wrong: 'uzun' },
  { en: 'trenchant', tr: 'iti və dəqiq', wrong: 'zəif' },
  { en: 'adroit', tr: 'bacarıqlı', wrong: 'bacarıqsız' },
  { en: 'dexterous', tr: 'mahır', wrong: 'bacarıqsız' },
  { en: 'fastidious', tr: 'tələbkar', wrong: 'biganə' },
  { en: 'meticulous', tr: 'dəqiq', wrong: 'səhlənkar' },
  { en: 'painstaking', tr: 'zəhmətkeş', wrong: 'tənbəl' },
  { en: 'punctilious', tr: 'çox dəqiq', wrong: 'səhlənkar' },
  { en: 'rigorous', tr: 'sərt və dəqiq', wrong: 'yumşaq' }
],

// ─────────────────────── QUIZ 53 — Fate, Prophecy & the Supernatural ───────────────────────
[
  { en: 'apparition', tr: 'xəyalət', wrong: 'real insan' },
  { en: 'augury', tr: 'fal', wrong: 'elmi proqnoz' },
  { en: 'divination', tr: 'falçılıq', wrong: 'elmi proqnoz' },
  { en: 'harbinger', tr: 'xəbərçi', wrong: 'son' },
  { en: 'horoscope', tr: 'horoskop', wrong: 'elmi proqnoz' },
  { en: 'incarnation', tr: 'təcəssüm', wrong: 'adi insan' },
  { en: 'omen', tr: 'əlamət', wrong: 'adi hadisə' },
  { en: 'oracle', tr: 'kahin', wrong: 'adi danışan' },
  { en: 'portent', tr: 'xəbərdarlıq əlaməti', wrong: 'adi hadisə' },
  { en: 'portentous', tr: 'əhəmiyyətli', wrong: 'adi' },
  { en: 'premonition', tr: 'ön hiss', wrong: 'xatirə' },
  { en: 'prophecy', tr: 'peyğəmbərlik', wrong: 'yalan' },
  { en: 'reincarnation', tr: 'yenidən doğuş', wrong: 'ölüm' },
  { en: 'resurrection', tr: 'dirilmə', wrong: 'ölüm' },
  { en: 'seer', tr: 'gələcəyi görən', wrong: 'kor' },
  { en: 'specter', tr: 'xəyalət', wrong: 'real insan' },
  { en: 'talisman', tr: 'talisman', wrong: 'adi əşya' },
  { en: 'witchcraft', tr: 'cadugərlik', wrong: 'elmi' },
  { en: 'zodiac', tr: 'bürc', wrong: 'adi təqvim' },
  { en: 'alchemy', tr: 'əlkimya', wrong: 'kimya' }
],

// ─────────────────────── QUIZ 54 — Memory, Legacy & History ───────────────────────
[
  { en: 'antecedent', tr: 'əvvəlki', wrong: 'sonrakı' },
  { en: 'antiquity', tr: 'qədimlik', wrong: 'müasirlik' },
  { en: 'chronicle', tr: 'salnamə', wrong: 'hekayə' },
  { en: 'commemoration', tr: 'anım', wrong: 'unutma' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'tək nəsil' },
  { en: 'epoch', tr: 'dövr', wrong: 'an' },
  { en: 'epitaph', tr: 'qəbir daşı yazısı', wrong: 'adi yazı' },
  { en: 'heirloom', tr: 'ailə yadigarı', wrong: 'yeni əşya' },
  { en: 'legacy', tr: 'miras', wrong: 'yeni şey' },
  { en: 'lineage', tr: 'nəsil', wrong: 'qohumsuzluq' },
  { en: 'memento', tr: 'yadigar', wrong: 'adi əşya' },
  { en: 'memorabilia', tr: 'yadigarlar', wrong: 'adi şeylər' },
  { en: 'posterity', tr: 'gələcək nəsillər', wrong: 'keçmiş' },
  { en: 'provenance', tr: 'mənşə', wrong: 'naməlum mənşə' },
  { en: 'relic', tr: 'qalıq', wrong: 'yeni şey' },
  { en: 'remembrance', tr: 'xatirə', wrong: 'unutma' },
  { en: 'renaissance', tr: 'dirçəliş', wrong: 'tənəzzül' },
  { en: 'remnant', tr: 'qalıq', wrong: 'tamam' },
  { en: 'vestige', tr: 'iz', wrong: 'tam itki' },
  { en: 'retrospection', tr: 'keçmişə baxış', wrong: 'gələcəyə baxış' }
],

// ─────────────────────── QUIZ 55 — Abundance & Scarcity ───────────────────────
[
  { en: 'bounty', tr: 'bolluq', wrong: 'yoxsulluq' },
  { en: 'copious', tr: 'bol', wrong: 'az' },
  { en: 'cornucopia', tr: 'bolluq rəmzi', wrong: 'çatışmazlıq' },
  { en: 'dearth', tr: 'çatışmazlıq', wrong: 'bolluq' },
  { en: 'depleted', tr: 'tükənmiş', wrong: 'dolu' },
  { en: 'exuberant', tr: 'bol və canlı', wrong: 'az' },
  { en: 'famine', tr: 'aclıq', wrong: 'bolluq' },
  { en: 'meagre', tr: 'az', wrong: 'bol' },
  { en: 'myriad', tr: 'çoxlu', wrong: 'az' },
  { en: 'paucity', tr: 'çatışmazlıq', wrong: 'bolluq' },
  { en: 'pittance', tr: 'cüzi miqdar', wrong: 'bol miqdar' },
  { en: 'plethora', tr: 'həddindən artıq', wrong: 'çatışmazlıq' },
  { en: 'profusion', tr: 'bolluq', wrong: 'azlıq' },
  { en: 'scarcity', tr: 'çatışmazlıq', wrong: 'bolluq' },
  { en: 'smattering', tr: 'az miqdar', wrong: 'bol miqdar' },
  { en: 'sparse', tr: 'seyrək', wrong: 'sıx' },
  { en: 'surfeit', tr: 'həddindən artıq', wrong: 'çatışmazlıq' },
  { en: 'teeming', tr: 'dolu', wrong: 'boş' },
  { en: 'want', tr: 'yoxsulluq', wrong: 'bolluq' },
  { en: 'penury', tr: 'yoxsulluq', wrong: 'var-dövlət' }
],
      
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 7 — C1: İrəliləmiş I                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c1a',
    name: 'Readings (deaktiv)',
    icon: '💎',
    color: '#3BAAB5',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 8 — C1+: İrəliləmiş II                   ║
  // ╚══════════════════════════════════════════════════╝
 {
    id: 'c1b',
    name: 'Listenings (deaktiv)',
    icon: '💎',
    color: '#3BAAB5',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 9 — C2: Ustalıq Səviyyəsi                ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c2',
    name: 'Writing (deaktiv)',
    icon: '👑',
    color: '#2C3E50',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 10 — İş Ingilis dili                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'business',
    name: 'Business English',
    icon: '💼',
    color: '#8B7355',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },
];
