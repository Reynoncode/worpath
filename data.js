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
{
  sentences: [
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
  },
      
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
{
  sentences: [
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
  },

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
     // ─────────────────────── EXAM — foods ───────────────────────
{
  sentences: [
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
  },

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
      
{
  sentences: [
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
],},
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

{
  sentences: [
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
   },   
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

    {
  sentences:   [
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
},
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
      
{
  sentences: [
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
  },
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

     {
  sentences:  [
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
      },
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

      
{
  sentences: [
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
      },
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
{
  sentences: [
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
      },
      
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
{
  sentences: [
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
  },
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
   {
  sentences:    [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
     }, 

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
{
  sentences: [
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
},
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
{
  sentences: [
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
 },     
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
{
  sentences: [
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
      },
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
{
  sentences: [
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
      },
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
{
  sentences: [
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
      },
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
{
  sentences: [
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
      },
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
{
  sentences: [
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
      },
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
{
  sentences: [
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
},
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
{
  sentences: [
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
},
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
  { en: 'academic',     tr: 'akademik',          wrong: 'elmi',          wen: 'practical',     def: 'connected with education, especially at university level' },
  { en: 'analysis',     tr: 'təhlil',            wrong: 'araşdırma',     wen: 'celebration',   def: 'a detailed examination of something' },
  { en: 'analyst',      tr: 'analitik',          wrong: 'tədqiqatçı',    wen: 'athlete',       def: 'a person who examines information and makes reports' },
  { en: 'assessment',   tr: 'qiymətləndirmə',    wrong: 'imtahan',       wen: 'holiday',       def: 'the process of judging someone’s knowledge or ability' },
  { en: 'assignment',   tr: 'tapşırıq',          wrong: 'layihə',        wen: 'vacation',      def: 'a piece of work given to students by their teacher' },
  { en: 'campus',       tr: 'kampus',            wrong: 'yataqxana',     wen: 'factory',       def: 'the buildings and grounds of a university or college' },
  { en: 'certificate',  tr: 'sertifikat',        wrong: 'diplom',        wen: 'medal',         def: 'an official document proving you have passed a course' },
  { en: 'classroom',    tr: 'sinif otağı',       wrong: 'auditoriya',    wen: 'kitchen',       def: 'a room in a school where lessons are taught' },
  { en: 'concentration',tr: 'diqqət cəmləmə',    wrong: 'anlayış',       wen: 'relaxation',    def: 'the ability to focus all your attention on one thing' },
  { en: 'curriculum',   tr: 'tədris proqramı',   wrong: 'dərslik',       wen: 'menu',          def: 'the subjects taught in a school or university' },
  { en: 'deadline',     tr: 'son tarix',         wrong: 'müddət',        wen: 'beginning',     def: 'the last date by which something must be finished' },
  { en: 'educate',      tr: 'təhsil vermək',     wrong: 'öyrətmək',      wen: 'entertain',     def: 'to teach someone over a long period, especially at school' },
  { en: 'examination',  tr: 'imtahan',           wrong: 'test',          wen: 'interview',     def: 'a formal test of your knowledge or skill' },
  { en: 'graduate',     tr: 'məzun olmaq',       wrong: 'oxumaq',        wen: 'fail',          def: 'to successfully complete a university course' },
  { en: 'intelligence', tr: 'zəka',              wrong: 'bilik',         wen: 'strength',      def: 'the ability to learn, understand and think quickly' },
  { en: 'laboratory',   tr: 'laboratoriya',      wrong: 'sinif otağı',   wen: 'office',        def: 'a room equipped for scientific experiments and research' },
  { en: 'qualification',tr: 'ixtisas',           wrong: 'sertifikat',    wen: 'hobby',         def: 'an official certificate that proves you can do a particular job' },
  { en: 'scholarship',  tr: 'təqaüd',            wrong: 'kredit',        wen: 'salary',        def: 'money given to a student to help pay for their studies' },
  { en: 'seminar',      tr: 'seminar',           wrong: 'mühazirə',      wen: 'party',         def: 'a class at university where a small group discusses a subject' },
  { en: 'textbook',     tr: 'dərslik',           wrong: 'kitab',         wen: 'novel',         def: 'a book used for studying a particular subject' }
],

// ─────────────────────── QUIZ 2 — Personal Development & Skills ───────────────────────
[
  { en: 'ability',      tr: 'qabiliyyət',        wrong: 'bacarıq',       wen: 'weakness',      def: 'the mental or physical power to do something' },
  { en: 'accomplish',   tr: 'nail olmaq',        wrong: 'tamamlamaq',    wen: 'fail',          def: 'to succeed in doing something difficult' },
  { en: 'accurate',     tr: 'dəqiq',             wrong: 'doğru',         wen: 'approximate',   def: 'correct and exact in all details' },
  { en: 'accurately',   tr: 'dəqiq şəkildə',     wrong: 'düzgün olaraq', wen: 'roughly',       def: 'in a way that is correct and without mistakes' },
  { en: 'achieve',      tr: 'nail olmaq',        wrong: 'qazanmaq',      wen: 'lose',          def: 'to succeed in reaching a goal' },
  { en: 'achievement',  tr: 'nailiyyət',         wrong: 'uğur',          wen: 'failure',       def: 'something successful that you have done' },
  { en: 'adapt',        tr: 'uyğunlaşmaq',       wrong: 'dəyişmək',      wen: 'ignore',        def: 'to change your behaviour to suit a new situation' },
  { en: 'adjust',       tr: 'tənzimləmək',       wrong: 'uyğunlaşmaq',   wen: 'destroy',       def: 'to change something slightly to make it better' },
  { en: 'ambitious',    tr: 'iddialı',           wrong: 'məqsədli',      wen: 'lazy',          def: 'having a strong desire to succeed' },
  { en: 'aware',        tr: 'xəbərdar',          wrong: 'diqqətli',      wen: 'ignorant',      def: 'knowing about a situation or fact' },
  { en: 'awareness',    tr: 'məlumatlılıq',      wrong: 'diqqət',        wen: 'forgetfulness', def: 'knowledge or understanding of a situation' },
  { en: 'capable',      tr: 'qabiliyyətli',      wrong: 'istedadlı',     wen: 'useless',       def: 'having the ability or skill to do something' },
  { en: 'challenge',    tr: 'çağırış',           wrong: 'çətinlik',      wen: 'gift',          def: 'a difficult task that tests your ability' },
  { en: 'concentration',tr: 'diqqət',            wrong: 'düşüncə',       wen: 'relaxation',    def: 'the ability to focus all your attention on one thing' },
  { en: 'confident',    tr: 'özünə inamlı',      wrong: 'cəsur',         wen: 'shy',           def: 'feeling sure about your own abilities' },
  { en: 'creativity',   tr: 'yaradıcılıq',       wrong: 'istedad',       wen: 'routine',       def: 'the ability to produce new and original ideas' },
  { en: 'determination',tr: 'qərarlılıq',        wrong: 'iradə',         wen: 'laziness',      def: 'a strong will to achieve something' },
  { en: 'determine',    tr: 'müəyyən etmək',     wrong: 'qərar vermək',  wen: 'forget',        def: 'to discover or decide something after thinking' },
  { en: 'develop',      tr: 'inkişaf etdirmək',  wrong: 'dəyişdirmək',   wen: 'destroy',       def: 'to grow or improve something over time' },
  { en: 'improvement',  tr: 'inkişaf',           wrong: 'dəyişiklik',    wen: 'decline',       def: 'the process of becoming better' }
],
      
// ─────────────────────── EXAM — Education & Personal Development (B2) ───────────────────────
{
  sentences: [
    {
      en: "The university has completely revised its ____ to better prepare students for the modern job market.",
      tr: 'curriculum',
      wrong: 'creativity'
    },
    {
      en: "Continuous ____ throughout the course helps teachers understand each student’s weaknesses and strengths.",
      tr: 'assessment',
      wrong: 'laboratory'
    },
    {
      en: "Without a relevant professional ____, it is very difficult to find a well-paid job in this field.",
      tr: 'qualification',
      wrong: 'deadline'
    },
    {
      en: "The department organizes a monthly ____ on current global issues for postgraduate students.",
      tr: 'seminar',
      wrong: 'scholarship'
    },
    {
      en: "The market ____ predicted that inflation would continue to rise over the next six months.",
      tr: 'analyst',
      wrong: 'campus'
    },
    {
      en: "Her extraordinary ____ and hard work enabled her to succeed where others had given up.",
      tr: 'determination',
      wrong: 'textbook'
    },
    {
      en: "Modern businesses actively seek employees who show high levels of innovation and ____.",
      tr: 'creativity',
      wrong: 'examination'
    },
    {
      en: "Despite many setbacks, the team finally managed to ____ everything they had planned.",
      tr: 'accomplish',
      wrong: 'concentration'
    },
    {
      en: "She is highly ____ and aims to start her own company within the next few years.",
      tr: 'ambitious',
      wrong: 'certificate'
    },
    {
      en: "It was not easy for him to ____ to such a different working environment and culture.",
      tr: 'adapt',
      wrong: 'assignment'
    },
    {
      en: "Environmental organizations are trying to raise ____ about the dangers of plastic pollution.",
      tr: 'awareness',
      wrong: 'classroom'
    },
    {
      en: "Only the most talented and hardworking students can ____ their full potential at top universities.",
      tr: 'achieve',
      wrong: 'curriculum'
    },
    {
      en: "All scientific data must be recorded ____ to ensure the validity of the research findings.",
      tr: 'accurately',
      wrong: 'ambitious'
    },
    {
      en: "The experiments were carried out in a well-equipped research ____.",
      tr: 'laboratory',
      wrong: 'determination'
    },
    {
      en: "Thanks to the ____ she received, she was able to study abroad without financial difficulties.",
      tr: 'scholarship',
      wrong: 'analyst'
    },
    {
      en: "We are working against a very tight ____, so please submit your reports by Wednesday.",
      tr: 'deadline',
      wrong: 'creativity'
    },
    {
      en: "Deep ____ is required when reading complex academic texts in a foreign language.",
      tr: 'concentration',
      wrong: 'qualification'
    },
    {
      en: "Over 1,200 students are expected to ____ this year with degrees in engineering and business.",
      tr: 'graduate',
      wrong: 'awareness'
    },
    {
      en: "The final ____ includes both a written paper and an oral presentation.",
      tr: 'examination',
      wrong: 'adapt'
    },
    {
      en: "The main goal of the training program is to ____ employees’ leadership and communication skills.",
      tr: 'develop',
      wrong: 'seminar'
    }
  ],
},

// ─────────────────────── QUIZ 3 — Business & Work (1) ───────────────────────
[
  { en: 'accountant',   tr: 'mühasib',           wrong: 'iqtisadçı',     wen: 'teacher',       def: 'a person who keeps and checks financial records' },
  { en: 'administration',tr: 'inzibatçılıq',      wrong: 'idarəetmə',     wen: 'production',    def: 'the process of managing and organizing work' },
  { en: 'agency',       tr: 'agentlik',          wrong: 'şirkət',        wen: 'school',        def: 'a business that provides a particular service' },
  { en: 'applicant',    tr: 'müraciət edən',     wrong: 'namizəd',       wen: 'customer',      def: 'a person who applies for a job' },
  { en: 'appointment',  tr: 'görüş',             wrong: 'toplantı',      wen: 'holiday',       def: 'an arranged meeting at a specific time' },
  { en: 'budget',       tr: 'büdcə',             wrong: 'gəlir',         wen: 'salary',        def: 'a plan for how much money you can spend' },
  { en: 'career',       tr: 'karyera',           wrong: 'peşə',          wen: 'hobby',         def: 'the series of jobs you have during your working life' },
  { en: 'chairman',     tr: 'sədər',             wrong: 'direktor',      wen: 'employee',      def: 'the person who leads a company or meeting' },
  { en: 'client',       tr: 'müştəri',           wrong: 'tərəfdaş',      wen: 'competitor',    def: 'a person or company that buys a service' },
  { en: 'committee',    tr: 'komitə',            wrong: 'şura',          wen: 'team',          def: 'a group of people who make decisions together' },
  { en: 'company',      tr: 'şirkət',            wrong: 'müəssisə',      wen: 'school',        def: 'a business organization' },
  { en: 'corporation',  tr: 'korporasiya',       wrong: 'holdinq',       wen: 'family',        def: 'a large company, often with many branches' },
  { en: 'deadline',     tr: 'son tarix',         wrong: 'müddət',        wen: 'beginning',     def: 'the last date by which something must be finished' },
  { en: 'employment',   tr: 'məşğulluq',         wrong: 'iş yeri',       wen: 'unemployment',  def: 'the state of having a paid job' },
  { en: 'executive',    tr: 'icraçı',            wrong: 'müdir',         wen: 'worker',        def: 'a senior manager in a company' },
  { en: 'finance',      tr: 'maliyyə',           wrong: 'büdcə',         wen: 'education',     def: 'the management of money and investments' },
  { en: 'financial',    tr: 'maliyyə',           wrong: 'iqtisadi',      wen: 'medical',       def: 'connected with money and finance' },
  { en: 'firm',         tr: 'firma',             wrong: 'şirkət',        wen: 'hospital',      def: 'a business company' },
  { en: 'headquarters', tr: 'baş ofis',          wrong: 'filial',        wen: 'branch',        def: 'the main office of a company' },
  { en: 'income',       tr: 'gəlir',             wrong: 'əmək haqqı',     wen: 'expense',       def: 'money that you receive regularly' }
],

// ─────────────────────── QUIZ 4 — Business & Work (2) ───────────────────────
[
  { en: 'management',   tr: 'idarəetmə',         wrong: 'rəhbərlik',     wen: 'workers',       def: 'the process of controlling and organizing a company' },
  { en: 'manager',      tr: 'menecer',           wrong: 'direktor',      wen: 'employee',      def: 'a person who is in charge of a team or department' },
  { en: 'manufacture',  tr: 'istehsal etmək',    wrong: 'hazırlamaq',    wen: 'sell',          def: 'to make goods in large quantities in a factory' },
  { en: 'manufacturing',tr: 'istehsal',          wrong: 'emal',          wen: 'education',     def: 'the process of making products in factories' },
  { en: 'marketing',    tr: 'marketinq',         wrong: 'reklam',        wen: 'production',    def: 'the activity of promoting and selling products' },
  { en: 'opportunity',  tr: 'fürsət',            wrong: 'imkan',         wen: 'problem',       def: 'a chance to do something successfully' },
  { en: 'partnership',  tr: 'tərəfdaşlıq',       wrong: 'əməkdaşlıq',    wen: 'competition',   def: 'a business relationship between two or more people' },
  { en: 'profession',   tr: 'peşə',              wrong: 'vəzifə',        wen: 'hobby',         def: 'a job that needs special training and education' },
  { en: 'profit',       tr: 'mənfəət',           wrong: 'gəlir',         wen: 'loss',          def: 'the money a business makes after paying costs' },
  { en: 'project',      tr: 'layihə',            wrong: 'plan',          wen: 'holiday',       def: 'a planned piece of work with a specific goal' },
  { en: 'promotion',    tr: 'vəzifə yüksəlişi',  wrong: 'reklam',        wen: 'demotion',      def: 'moving to a higher position in a company' },
  { en: 'recruit',      tr: 'işə götürmək',      wrong: 'seçmək',        wen: 'fire',          def: 'to find and employ new people' },
  { en: 'salary',       tr: 'maaş',              wrong: 'əmək haqqı',    wen: 'expense',       def: 'money paid to someone regularly for their work' },
  { en: 'staff',        tr: 'heyət',             wrong: 'işçilər',       wen: 'customers',     def: 'the people who work for an organization' },
  { en: 'trade',        tr: 'ticarət',           wrong: 'mübadiləetmə',  wen: 'sport',         def: 'the activity of buying and selling goods' },
  { en: 'workforce',    tr: 'işçi qüvvəsi',      wrong: 'heyət',         wen: 'machinery',     def: 'all the people who work in a particular company' },
  { en: 'workplace',    tr: 'iş yeri',           wrong: 'ofis',          wen: 'home',          def: 'the place where you work' },
  { en: 'workshop',     tr: 'seminar',           wrong: 'konfrans',      wen: 'holiday',       def: 'a short training session or a place for making things' },
  { en: 'investment',   tr: 'investisiya',       wrong: 'kapital',       wen: 'holiday',       def: 'putting money into something to make more money' },
  { en: 'investor',     tr: 'investor',          wrong: 'sahibkar',      wen: 'employee',      def: 'a person who puts money into a business' }
],

// ─────────────────────── QUIZ 5 — Money & Economy ───────────────────────
[
  { en: 'affordable',   tr: 'əlçatan qiymətli',   wrong: 'ucuz',          wen: 'luxurious',     def: 'cheap enough for most people to buy' },
  { en: 'bargain',      tr: 'sövdələşmə',        wrong: 'endirim',       wen: 'argument',      def: 'a very good deal or agreement on price' },
  { en: 'budget',       tr: 'büdcə',             wrong: 'xərc',          wen: 'income',        def: 'a plan for how much money you can spend' },
  { en: 'currency',     tr: 'valyuta',           wrong: 'kapital',       wen: 'language',      def: 'the money used in a particular country' },
  { en: 'debt',         tr: 'borc',              wrong: 'kredit',        wen: 'profit',        def: 'money that you owe to someone' },
  { en: 'discount',     tr: 'endirim',           wrong: 'bonus',         wen: 'increase',      def: 'a reduction in the normal price' },
  { en: 'economy',      tr: 'iqtisadiyyat',      wrong: 'maliyyə',       wen: 'weather',       def: 'the system of money, industry and trade in a country' },
  { en: 'expense',      tr: 'xərc',              wrong: 'ödəniş',        wen: 'salary',        def: 'money that you spend' },
  { en: 'fee',          tr: 'ödəniş / haqq',     wrong: 'vergi',         wen: 'gift',          def: 'money you pay for a professional service' },
  { en: 'finance',      tr: 'maliyyə',           wrong: 'iqtisadiyyat',  wen: 'medicine',      def: 'the management of large amounts of money' },
  { en: 'fund',         tr: 'fond',              wrong: 'kapital',       wen: 'holiday',       def: 'an amount of money saved or collected for a purpose' },
  { en: 'income',       tr: 'gəlir',             wrong: 'mənfəət',       wen: 'expense',       def: 'money that you receive regularly' },
  { en: 'invest',       tr: 'sərmayə qoymaq',    wrong: 'qazanmaq',      wen: 'spend',         def: 'to put money into something to make more money' },
  { en: 'loan',         tr: 'kredit',            wrong: 'borc',          wen: 'gift',          def: 'money that you borrow and must pay back' },
  { en: 'mortgage',     tr: 'ipoteka',           wrong: 'kredit',        wen: 'salary',        def: 'a loan to buy a house or flat' },
  { en: 'payment',      tr: 'ödəniş',            wrong: 'haqq',          wen: 'holiday',       def: 'the act of paying money for something' },
  { en: 'poverty',      tr: 'yoxsulluq',         wrong: 'işsizlik',      wen: 'wealth',        def: 'the state of being very poor' },
  { en: 'profit',       tr: 'mənfəət',           wrong: 'gəlir',         wen: 'loss',          def: 'the money a business makes after paying costs' },
  { en: 'revenue',      tr: 'gəlir',             wrong: 'mənfəət',       wen: 'expense',       def: 'the money a company or government receives' },
  { en: 'wealth',       tr: 'sərvət',            wrong: 'kapital',       wen: 'poverty',       def: 'a large amount of money and valuable possessions' }
],

     // ─────────────────────── EXAM — Business & Work + Money & Economy (B2) ───────────────────────
{
  sentences: [
    {
      en: "The company's main ____ are located in New York, while the factories are spread across Asia.",
      tr: 'headquarters',
      wrong: 'workshop'
    },
    {
      en: "She works as a senior ____ in a multinational company and makes important strategic decisions.",
      tr: 'executive',
      wrong: 'applicant'
    },
    {
      en: "Apple is one of the largest ____ in the world, with operations in dozens of countries.",
      tr: 'corporation',
      wrong: 'committee'
    },
    {
      en: "The board of directors meets every quarter to discuss the company's long-term ____.",
      tr: 'strategy',
      wrong: 'bargain'   // (düz sözlər içindən ən uyğunu seçdim)
    },
    {
      en: "Successful ____ requires excellent communication and leadership skills.",
      tr: 'management',
      wrong: 'manufacture'
    },
    {
      en: "The company plans to ____ new employees for its expanding digital marketing team.",
      tr: 'recruit',
      wrong: 'mortgage'
    },
    {
      en: "After ten years of hard work, she finally received a well-deserved ____ to regional director.",
      tr: 'promotion',
      wrong: 'currency'
    },
    {
      en: "Germany has a very strong ____ sector, especially in cars and machinery.",
      tr: 'manufacturing',
      wrong: 'poverty'
    },
    {
      en: "The marketing team is developing a new campaign to increase brand ____.",
      tr: 'awareness',
      wrong: 'headquarters'
    },
    {
      en: "They formed a ____ to start a tech company together and share both risks and profits.",
      tr: 'partnership',
      wrong: 'appointment'
    },
    {
      en: "The government is trying to reduce ____ by creating more jobs in rural areas.",
      tr: 'poverty',
      wrong: 'revenue'
    },
    {
      en: "Buying a house usually requires taking out a large ____ that can last 20–30 years.",
      tr: 'mortgage',
      wrong: 'discount'
    },
    {
      en: "The company's ____ increased by 18% this year thanks to strong sales in Asia.",
      tr: 'revenue',
      wrong: 'workforce'
    },
    {
      en: "Many young people cannot afford to buy homes because prices are not ____.",
      tr: 'affordable',
      wrong: 'financial'
    },
    {
      en: "Foreign ____ are showing growing interest in the country’s renewable energy sector.",
      tr: 'investors',
      wrong: 'clients'
    },
    {
      en: "The ____ of the company consists of over 4,000 employees worldwide.",
      tr: 'workforce',
      wrong: 'appointment'
    },
    {
      en: "She has had a very successful ____, moving from assistant to vice president in just eight years.",
      tr: 'career',
      wrong: 'bargain'
    },
    {
      en: "The central bank decided to change the national ____ to control inflation.",
      tr: 'currency',
      wrong: 'committee'
    },
    {
      en: "Effective ____ is essential for any business that wants to sell its products successfully.",
      tr: 'marketing',
      wrong: 'manufacture'
    },
    {
      en: "The new factory will create hundreds of jobs and boost the local ____.",
      tr: 'economy',
      wrong: 'mortgage'
    }
  ],
},
      
// ─────────────────────── QUIZ 6 — Technology & Media ───────────────────────
[
  { en: 'broadcast',    tr: 'yayımlamaq',        wrong: 'ötürmək',       wen: 'hide',          def: 'to send out radio or television programmes' },
  { en: 'channel',      tr: 'kanal',             wrong: 'proqram',       wen: 'road',          def: 'a television or radio station' },
  { en: 'database',     tr: 'verilənlər bazası', wrong: 'sistem',        wen: 'library',       def: 'a large collection of information stored in a computer' },
  { en: 'digital',      tr: 'rəqəmsal',          wrong: 'elektron',      wen: 'paper',         def: 'using computers and electronic signals' },
  { en: 'electronics',  tr: 'elektronika',       wrong: 'texnologiya',   wen: 'furniture',     def: 'the technology of electronic devices' },
  { en: 'graphic',      tr: 'qrafik',            wrong: 'şəkil',         wen: 'sound',         def: 'a visual image or design' },
  { en: 'graphics',     tr: 'qrafika',           wrong: 'dizayn',        wen: 'music',         def: 'pictures and designs produced by a computer' },
  { en: 'internet',     tr: 'internet',          wrong: 'şəbəkə',        wen: 'road',          def: 'the global computer network' },
  { en: 'IT',           tr: 'informasiya texnologiyası', wrong: 'süni intellekt', wen: 'sport',  def: 'the use of computers and technology in business' },
  { en: 'keyboard',     tr: 'klaviatura',        wrong: 'monitor',       wen: 'mirror',        def: 'the set of keys you use to type on a computer' },
  { en: 'laptop',       tr: 'noutbuk',           wrong: 'planşet',       wen: 'camera',        def: 'a small portable computer' },
  { en: 'media',        tr: 'media',             wrong: 'mətbuat',       wen: 'school',        def: 'television, radio, newspapers and the internet' },
  { en: 'network',      tr: 'şəbəkə',            wrong: 'sistem',        wen: 'road',          def: 'a group of connected computers' },
  { en: 'online',       tr: 'onlayn',            wrong: 'rəqəmsal',      wen: 'paper',         def: 'connected to the internet' },
  { en: 'software',     tr: 'proqram təminatı',  wrong: 'avadanlıq',     wen: 'furniture',     def: 'programs that run on a computer' },
  { en: 'studio',       tr: 'studiya',           wrong: 'ofis',          wen: 'kitchen',       def: 'a room where films, music or TV shows are made' },
  { en: 'technological',tr: 'texnoloji',         wrong: 'elmi',          wen: 'artistic',      def: 'relating to modern technology and machines' },
  { en: 'update',       tr: 'yeniləmək',         wrong: 'qurmaq',        wen: 'delete',        def: 'to make something more modern or recent' },
  { en: 'version',      tr: 'versiya',           wrong: 'nüsxə',         wen: 'price',         def: 'a form of something that is slightly different' },
  { en: 'website',      tr: 'vebsayt',           wrong: 'proqram',       wen: 'book',          def: 'a set of pages on the internet' }
],

// ─────────────────────── QUIZ 7 — Communication & Social ───────────────────────
[
  { en: 'announce',     tr: 'elan etmək',        wrong: 'bildirmək',     wen: 'hide',          def: 'to tell people something officially or publicly' },
  { en: 'announcement', tr: 'elan',               wrong: 'xəbər',         wen: 'secret',        def: 'an official statement about something' },
  { en: 'apologise',    tr: 'üzr istəmək',       wrong: 'bağışlamaq',    wen: 'thank',         def: 'to say that you are sorry' },
  { en: 'comment',      tr: 'şərh',              wrong: 'fikir',         wen: 'order',         def: 'an opinion or remark about something' },
  { en: 'communicate',  tr: 'ünsiyyət qurmaq',   wrong: 'danışmaq',      wen: 'argue',         def: 'to exchange information or ideas with others' },
  { en: 'confirm',      tr: 'təsdiqləmək',       wrong: 'bildirmək',     wen: 'deny',          def: 'to say that something is definitely true' },
  { en: 'contact',      tr: 'əlaqə saxlamaq',    wrong: 'zəng etmək',    wen: 'avoid',         def: 'to communicate with someone' },
  { en: 'convince',     tr: 'inandırmaq',        wrong: 'məcbur etmək',  wen: 'confuse',       def: 'to make someone believe something is true' },
  { en: 'discuss',      tr: 'müzakirə etmək',    wrong: 'danışmaq',      wen: 'shout',         def: 'to talk about something in detail with others' },
  { en: 'encourage',    tr: 'həvəsləndirmək',    wrong: 'dəstəkləmək',   wen: 'criticise',     def: 'to give someone confidence or support' },
  { en: 'persuade',     tr: 'razı salmaq',       wrong: 'inandırmaq',    wen: 'force',         def: 'to make someone do something by giving reasons' },
  { en: 'recommend',    tr: 'tövsiyə etmək',     wrong: 'təklif etmək',  wen: 'refuse',        def: 'to say that something is good or suitable' },
  { en: 'remind',       tr: 'xatırlatmaq',       wrong: 'söyləmək',      wen: 'forget',        def: 'to help someone remember something' },
  { en: 'respond',      tr: 'cavab vermək',      wrong: 'reaksiya göstərmək', wen: 'ignore',   def: 'to reply or react to something' },
  { en: 'suggest',      tr: 'təklif etmək',      wrong: 'tövsiyə etmək', wen: 'order',         def: 'to give an idea for someone to consider' },
  { en: 'warn',         tr: 'xəbərdarlıq etmək', wrong: 'qorxutmaq',     wen: 'praise',        def: 'to tell someone about possible danger' },
  { en: 'yell',         tr: 'bağırmaq',          wrong: 'danlamaq',      wen: 'whisper',       def: 'to shout very loudly' },
  { en: 'gesture',      tr: 'jest',              wrong: 'hərəkət',       wen: 'word',          def: 'a movement of the hand or head to express something' },
  { en: 'interpret',    tr: 'şərh etmək',        wrong: 'tərcümə etmək', wen: 'ignore',        def: 'to explain the meaning of something' },
  { en: 'interpretation',tr: 'şərh',             wrong: 'tərcümə',       wen: 'fact',          def: 'an explanation or understanding of something' }
],

// ─────────────────────── QUIZ 8 — Feelings & Emotions (1) ───────────────────────
[
  { en: 'amazed',       tr: 'heyrətlənmiş',      wrong: 'sevincli',      wen: 'bored',         def: 'very surprised by something unexpected or impressive' },
  { en: 'angry',        tr: 'əsəbi',             wrong: 'hirslı',        wen: 'calm',          def: 'feeling strong displeasure or annoyance' },
  { en: 'anxious',      tr: 'narahat',           wrong: 'gərgin',        wen: 'relaxed',       def: 'worried or nervous about something that might happen' },
  { en: 'ashamed',      tr: 'utanmış',           wrong: 'xəcalətli',     wen: 'proud',         def: 'feeling embarrassed or guilty about something you did' },
  { en: 'confident',    tr: 'özünə inamlı',      wrong: 'cəsur',         wen: 'shy',           def: 'feeling sure about your own abilities or decisions' },
  { en: 'confused',     tr: 'çaşqın',            wrong: 'narahat',       wen: 'certain',       def: 'unable to understand something clearly' },
  { en: 'curious',      tr: 'maraqlanan',        wrong: 'həvəsli',       wen: 'bored',         def: 'wanting to know or learn more about something' },
  { en: 'delighted',    tr: 'sevinclı',          wrong: 'xoşbəxt',       wen: 'disappointed',  def: 'extremely pleased and happy about something' },
  { en: 'depressed',    tr: 'depressiyada olan', wrong: 'depressiyadan çıxan',  wen: 'cheerful',      def: 'feeling very sad and without hope for a long time' },
  { en: 'disappointed', tr: 'məyus',             wrong: 'üzülmüş',       wen: 'excited',       def: 'sad because something was not as good as expected' },
  { en: 'embarrassed',  tr: 'utanmış',           wrong: 'narahat',       wen: 'proud',         def: 'feeling ashamed or uncomfortable in front of others' },
  { en: 'frightened',   tr: 'qorxmuş',           wrong: 'narahat',       wen: 'brave',         def: 'feeling afraid or scared' },
  { en: 'frustrated',   tr: 'əsəbləşmiş',        wrong: 'yorulmuş',      wen: 'satisfied',     def: 'feeling annoyed because you cannot achieve what you want' },
  { en: 'furious',      tr: 'qəzəbli',           wrong: 'əsəbi',         wen: 'calm',          def: 'extremely angry' },
  { en: 'glad',         tr: 'şad',               wrong: 'məmnun',        wen: 'sad',           def: 'pleased and happy about something' },
  { en: 'grateful',     tr: 'minnətdar',         wrong: 'xoşbəxt',       wen: 'jealous',       def: 'feeling thankful for something' },
  { en: 'happy',        tr: 'xoşbəxt',           wrong: 'şad',           wen: 'miserable',     def: 'feeling pleased and content' },
  { en: 'lonely',       tr: 'tənha',             wrong: 'kədərli',       wen: 'popular',       def: 'feeling sad because you are alone' },
  { en: 'nervous',      tr: 'gərgin',            wrong: 'narahat',       wen: 'relaxed',       def: 'worried or anxious about something' },
  { en: 'proud',        tr: 'qürurlu',           wrong: 'xoşbəxt',       wen: 'ashamed',       def: 'feeling pleased about your own achievements' }
],

// ─────────────────────── QUIZ 9 — Feelings & Emotions (2) ───────────────────────
[
  { en: 'amusing',      tr: 'əyləncəli',         wrong: 'maraqlı',       wen: 'boring',        def: 'funny and entertaining' },
  { en: 'annoying',     tr: 'əsəbləşdirici',     wrong: 'sıxıcı',        wen: 'pleasant',      def: 'making you feel slightly angry or irritated' },
  { en: 'calm',         tr: 'sakit',             wrong: 'rahat',         wen: 'nervous',       def: 'peaceful and not excited or angry' },
  { en: 'cheerful',     tr: 'şən',               wrong: 'sevincli',      wen: 'depressed',     def: 'happy and in a good mood' },
  { en: 'cruel',        tr: 'zalım',             wrong: 'kobud',         wen: 'kind',          def: 'deliberately causing pain or suffering to others' },
  { en: 'determined',   tr: 'qərarlı',           wrong: 'iddialı',       wen: 'lazy',          def: 'having a strong will to achieve something' },
  { en: 'eager',        tr: 'həvəsli',           wrong: 'maraqla gözləyən', wen: 'reluctant',   def: 'very keen and excited to do something' },
  { en: 'embarrassed',  tr: 'utanmış',           wrong: 'çaşqın',        wen: 'proud',         def: 'feeling ashamed or uncomfortable in front of others' },
  { en: 'enthusiastic', tr: 'həvəsli',           wrong: 'coşğun',        wen: 'bored',         def: 'showing great interest and excitement' },
  { en: 'hilarious',    tr: 'çox gülməli',       wrong: 'əyləncəli',     wen: 'serious',       def: 'extremely funny' },
  { en: 'horrible',     tr: 'dəhşətli',          wrong: 'pis',           wen: 'wonderful',     def: 'extremely unpleasant or bad' },
  { en: 'optimistic',   tr: 'nikbin',            wrong: 'müsbət',        wen: 'pessimistic',   def: 'expecting good things to happen' },
  { en: 'pessimistic',  tr: 'bədbin',            wrong: 'ümidsiz',       wen: 'optimistic',    def: 'expecting bad things to happen' },
  { en: 'relaxed',      tr: 'rahat',             wrong: 'sakit',         wen: 'stressed',      def: 'feeling calm and not worried' },
  { en: 'satisfied',    tr: 'məmnun',            wrong: 'xoşbəxt',       wen: 'disappointed',  def: 'pleased because your needs or expectations are met' },
  { en: 'shocked',      tr: 'şoka düşmüş',       wrong: 'heyrətlənmiş',  wen: 'bored',         def: 'very surprised and upset by something' },
  { en: 'surprised',    tr: 'təəccüblənmiş',     wrong: 'heyrətlənmiş',  wen: 'bored',         def: 'feeling unexpected astonishment' },
  { en: 'sympathetic',  tr: 'həmfikirliyini bildirən', wrong: 'mehriban', wen: 'cruel',       def: 'showing understanding and pity for someone’s problems' },
  { en: 'upset',        tr: 'narahat',           wrong: 'kədərli',       wen: 'relaxed',       def: 'unhappy and disappointed about something' },
  { en: 'weird',        tr: 'qəribə',            wrong: 'maraqlı',       wen: 'normal',        def: 'very strange and unusual' }
],

      // ─────────────────────── EXAM — Technology, Communication & Emotions (B2) ───────────────────────
{
  sentences: [
    {
      en: "The company has developed a powerful new ____ that can process millions of user data points per second.",
      tr: 'database',
      wrong: 'gesture'
    },
    {
      en: "Social media has completely changed the way people ____ with each other across long distances.",
      tr: 'communicate',
      wrong: 'manufacture'
    },
    {
      en: "Many young people today prefer to watch live ____ on platforms like YouTube and Twitch instead of traditional television.",
      tr: 'broadcast',
      wrong: 'embarrassed'
    },
    {
      en: "The latest ____ of the software includes several important security improvements.",
      tr: 'version',
      wrong: 'anxious'
    },
    {
      en: "She felt extremely ____ before the job interview, even though she was well qualified.",
      tr: 'nervous',
      wrong: 'digital'
    },
    {
      en: "The government plans to invest heavily in ____ infrastructure to improve internet access nationwide.",
      tr: 'technological',
      wrong: 'furious'
    },
    {
      en: "I need to ____ the team that the project deadline has been moved forward by two weeks.",
      tr: 'inform',
      wrong: 'keyboard'   // (daha yaxşı səhv variant)
    },
    {
      en: "His ____ interpretation of the data led the whole team to the wrong conclusion.",
      tr: 'interpretation',
      wrong: 'optimistic'
    },
    {
      en: "She was deeply ____ when she realized she had accidentally sent the private email to her boss.",
      tr: 'embarrassed',
      wrong: 'software'
    },
    {
      en: "The new marketing campaign aims to ____ customers that this product is better than all competitors.",
      tr: 'convince',
      wrong: 'depressed'
    },
    {
      en: "After working 14 hours straight, he felt completely ____ and unable to continue.",
      tr: 'exhausted',
      wrong: 'hilarious'
    },
    {
      en: "Modern ____ design plays a crucial role in making websites user-friendly and attractive.",
      tr: 'graphics',
      wrong: 'pessimistic'
    },
    {
      en: "I strongly ____ that you book your flight early because prices tend to rise closer to the date.",
      tr: 'recommend',
      wrong: 'frustrated'
    },
    {
      en: "The CEO will personally ____ the good news at the annual general meeting tomorrow.",
      tr: 'announce',
      wrong: 'laptop'
    },
    {
      en: "She has always been very ____ and believes that hard work will eventually bring success.",
      tr: 'optimistic',
      wrong: 'network'
    },
    {
      en: "The new ____ allows users to edit videos directly in their browser without installing anything.",
      tr: 'software',
      wrong: 'sympathetic'
    },
    {
      en: "He became ____ when his colleague took credit for the work he had done.",
      tr: 'furious',
      wrong: 'update'
    },
    {
      en: "Parents should ____ their children to ask questions and explore new ideas.",
      tr: 'encourage',
      wrong: 'channel'
    },
    {
      en: "The film received mixed reviews; some critics found it brilliant while others called it ____.",
      tr: 'weird',
      wrong: 'website'
    },
    {
      en: "After months of hard work, she felt extremely ____ when she finally received the promotion.",
      tr: 'proud',
      wrong: 'broadcast'
    }
  ],
},

// ─────────────────────── QUIZ 10 — Crime, Law & Government (1) ───────────────────────
[
  { en: 'arrest',       tr: 'həbs etmək',        wrong: 'tutmaq',        wen: 'release',       def: 'to take someone to the police station because they may have committed a crime' },
  { en: 'authority',    tr: 'səlahiyyət',        wrong: 'hökumət',       wen: 'freedom',       def: 'the power or right to make decisions and control people' },
  { en: 'ban',          tr: 'qadağan etmək',     wrong: 'məhdudlaşdırmaq', wen: 'allow',       def: 'to officially say that something is not permitted' },
  { en: 'court',        tr: 'məhkəmə',           wrong: 'hökumət',       wen: 'school',        def: 'the place where legal cases are judged' },
  { en: 'crime',        tr: 'cinayət',           wrong: 'hüquq pozuntusu', wen: 'sport',       def: 'an illegal action that can be punished by law' },
  { en: 'guilty',       tr: 'günahkar',          wrong: 'şübhəli',       wen: 'innocent',      def: 'having done something illegal or wrong' },
  { en: 'illegal',      tr: 'qanunsuz',          wrong: 'cinayətkar',    wen: 'normal',        def: 'not allowed by the law' },
  { en: 'innocent',     tr: 'günahsız',          wrong: 'azad',          wen: 'guilty',        def: 'not having done anything wrong or illegal' },
  { en: 'investigate',  tr: 'araşdırmaq',        wrong: 'sorğu keçirmək', wen: 'ignore',        def: 'to try to find out the truth about a crime or situation' },
  { en: 'judge',        tr: 'hakim',             wrong: 'prokuror',      wen: 'doctor',        def: 'the person who makes decisions in a court of law' },
  { en: 'jury',         tr: 'münsiflər heyəti',  wrong: 'şahidlər',      wen: 'audience',      def: 'a group of people who decide if someone is guilty in court' },
  { en: 'justice',      tr: 'ədalət',            wrong: 'qanun',         wen: 'injustice',     def: 'fair treatment according to the law' },
  { en: 'law',          tr: 'qanun',             wrong: 'hüquq',         wen: 'game',          def: 'the official rules of a country' },
  { en: 'legal',        tr: 'qanuni',            wrong: 'rəsmi',         wen: 'illegal',       def: 'allowed by the law' },
  { en: 'offence',      tr: 'hüquq pozuntusu',   wrong: 'cinayət',       wen: 'achievement',   def: 'a crime or illegal action' },
  { en: 'police',       tr: 'polis',             wrong: 'mühafizəçi',    wen: 'teacher',       def: 'the official organization that keeps order and catches criminals' },
  { en: 'prison',       tr: 'həbsxana',          wrong: 'polis bölməsi', wen: 'hospital',      def: 'a building where criminals are kept as punishment' },
  { en: 'punishment',   tr: 'cəza',              wrong: 'həbs',          wen: 'reward',        def: 'a penalty for breaking the law' },
  { en: 'suspect',      tr: 'şübhəli',           wrong: 'günahkar',      wen: 'witness',       def: 'a person who is thought to have committed a crime' },
  { en: 'victim',       tr: 'qurban',            wrong: 'şahid',         wen: 'criminal',      def: 'a person who has been hurt or suffered because of a crime' }
],
      
// ─────────────────────── QUIZ 11 — Crime, Law & Government (2) ───────────────────────
[
  { en: 'campaign',     tr: 'kampaniya',         wrong: 'seçki',         wen: 'holiday',       def: 'a planned series of activities to achieve a political goal' },
  { en: 'candidate',    tr: 'namizəd',           wrong: 'deputat',       wen: 'voter',         def: 'a person who is trying to be elected to a position' },
  { en: 'democracy',    tr: 'demokratiya',       wrong: 'respublika',    wen: 'dictatorship',  def: 'a system of government where people vote' },
  { en: 'election',     tr: 'seçki',             wrong: 'referendum',    wen: 'festival',      def: 'the process of choosing a government by voting' },
  { en: 'government',   tr: 'hökumət',           wrong: 'parlament',     wen: 'company',       def: 'the group of people who control a country' },
  { en: 'minister',     tr: 'nazir',             wrong: 'deputat',       wen: 'teacher',       def: 'a senior member of the government' },
  { en: 'parliament',   tr: 'parlament',         wrong: 'hökumət',       wen: 'school',        def: 'the group of people who make laws' },
  { en: 'policy',       tr: 'siyasət',           wrong: 'qanun',         wen: 'hobby',         def: 'a plan of action by a government or organization' },
  { en: 'political',    tr: 'siyasi',            wrong: 'hüquqi',        wen: 'medical',       def: 'connected with politics and government' },
  { en: 'politician',   tr: 'siyasətçi',         wrong: 'deputat',       wen: 'scientist',     def: 'a person who works in politics' },
  { en: 'president',    tr: 'prezident',         wrong: 'baş nazir',     wen: 'manager',       def: 'the head of state in many countries' },
  { en: 'protest',      tr: 'etiraz',            wrong: 'nümayiş',       wen: 'party',         def: 'a public demonstration against something' },
  { en: 'security',     tr: 'təhlükəsizlik',     wrong: 'mühafizə',      wen: 'freedom',       def: 'protection from danger or crime' },
  { en: 'terrorism',    tr: 'terrorizm',         wrong: 'ekstremizm',    wen: 'sport',         def: 'the use of violence for political purposes' },
  { en: 'terrorist',    tr: 'terrorist',         wrong: 'cinayətkar',    wen: 'soldier',       def: 'a person who uses violence for political aims' },
  { en: 'vote',         tr: 'səs vermək',        wrong: 'seçmək',        wen: 'buy',           def: 'to choose someone in an election' },
  { en: 'witness',      tr: 'şahid',             wrong: 'zərərçəkən',    wen: 'criminal',      def: 'a person who sees a crime happen' },
  { en: 'accuse',       tr: 'ittiham etmək',     wrong: 'suçlamaq',      wen: 'praise',        def: 'to say that someone has done something wrong' },
  { en: 'evidence',     tr: 'sübut',             wrong: 'şahidlik',      wen: 'opinion',       def: 'facts or information that prove something' },
  { en: 'trial',        tr: 'məhkəmə prosesi',   wrong: 'sorğu',         wen: 'party',         def: 'the legal process of judging someone in court' }
],

// ─────────────────────── QUIZ 12 — War, Conflict & Danger ───────────────────────
[
  { en: 'battle',       tr: 'döyüş',             wrong: 'müharibə',      wen: 'party',         def: 'a fight between two armies in a war' },
  { en: 'bomb',         tr: 'bomba',             wrong: 'silah',         wen: 'present',       def: 'an explosive device used to cause damage' },
  { en: 'conflict',     tr: 'münaqişə',          wrong: 'döyüş',         wen: 'cooperation',   def: 'a serious disagreement or fight' },
  { en: 'crisis',       tr: 'böhran',            wrong: 'fəlakət',       wen: 'success',       def: 'a time of great difficulty or danger' },
  { en: 'damage',       tr: 'ziyan',             wrong: 'itki',          wen: 'benefit',       def: 'physical harm caused to something' },
  { en: 'danger',       tr: 'təhlükə',           wrong: 'risk',          wen: 'safety',        def: 'the possibility of being harmed or killed' },
  { en: 'destroy',      tr: 'məhv etmək',        wrong: 'dağıtmaq',      wen: 'build',         def: 'to damage something so badly that it no longer exists' },
  { en: 'enemy',        tr: 'düşmən',            wrong: 'rəqib',         wen: 'friend',        def: 'a person or country you are fighting against' },
  { en: 'explosion',    tr: 'partlayış',         wrong: 'yanğın',        wen: 'celebration',   def: 'a sudden loud event caused by a bomb' },
  { en: 'fight',        tr: 'döyüşmək',          wrong: 'müqavimət göstərmək', wen: 'cooperate', def: 'to use force against someone in a conflict' },
  { en: 'military',     tr: 'hərbi',             wrong: 'siyasi',        wen: 'educational',   def: 'connected with soldiers and war' },
  { en: 'risk',         tr: 'risk',              wrong: 'təhlükə',       wen: 'safety',        def: 'the possibility of something bad happening' },
  { en: 'soldier',      tr: 'əsgər',             wrong: 'zabit',         wen: 'teacher',       def: 'a person who serves in the army' },
  { en: 'threat',       tr: 'təhdid',            wrong: 'xəbərdarlıq',   wen: 'invitation',    def: 'a statement that someone will cause harm' },
  { en: 'threaten',     tr: 'təhdid etmək',      wrong: 'qorxutmaq',     wen: 'praise',        def: 'to say that you will cause harm to someone' },
  { en: 'violence',     tr: 'zorakılıq',         wrong: 'aqressiya',     wen: 'peace',         def: 'the use of physical force to harm people' },
  { en: 'war',          tr: 'müharibə',          wrong: 'döyüş',         wen: 'peace',         def: 'a long period of fighting between countries or groups' },
  { en: 'weapon',       tr: 'silah',             wrong: 'alət',          wen: 'tool',          def: 'an object used for fighting or attacking' },
  { en: 'wound',        tr: 'yara',              wrong: 'xəsarət',       wen: 'healing',       def: 'an injury to the body caused by violence' },
  { en: 'armed',        tr: 'silahlı',           wrong: 'hərbi',         wen: 'unarmed',       def: 'carrying weapons' }
],

    // ─────────────────────── EXAM — Crime, Law, Government & Conflict (B2) ───────────────────────
{
  sentences: [
    {
      en: "The police have enough ____ to charge the suspect with fraud.",
      tr: 'evidence',
      wrong: 'soldier'
    },
    {
      en: "The case will go to ____ next month where a jury will decide if he is guilty.",
      tr: 'trial',
      wrong: 'election'
    },
    {
      en: "The court found him ____ of murder and sentenced him to life in prison.",
      tr: 'guilty',
      wrong: 'campaign'
    },
    {
      en: "The government is planning to introduce a new ____ to reduce gun violence.",
      tr: 'policy',
      wrong: 'weapon'
    },
    {
      en: "The United Nations is trying to resolve the ____ between the two countries through diplomacy.",
      tr: 'conflict',
      wrong: 'jury'
    },
    {
      en: "Several opposition politicians were arrested during the anti-government ____.",
      tr: 'protest',
      wrong: 'database'
    },
    {
      en: "The terrorist attack caused widespread ____ and fear across the country.",
      tr: 'panic',
      wrong: 'punishment'
    },
    {
      en: "The judge has the ____ to decide whether the evidence is admissible in court.",
      tr: 'authority',
      wrong: 'democracy'
    },
    {
      en: "The police are continuing to ____ the murder, but they still have no clear suspect.",
      tr: 'investigate',
      wrong: 'protest'
    },
    {
      en: "Many people believe that the current justice system does not provide real ____ for victims.",
      tr: 'justice',
      wrong: 'military'
    },
    {
      en: "The president promised to increase ____ spending to strengthen national defence.",
      tr: 'military',
      wrong: 'evidence'
    },
    {
      en: "He was released from prison after new ____ proved he was innocent.",
      tr: 'evidence',
      wrong: 'threat'
    },
    {
      en: "The opposition party has launched a major ____ ahead of next year's election.",
      tr: 'campaign',
      wrong: 'punishment'
    },
    {
      en: "Carrying a concealed ____ is strictly ____ in this country.",
      tr: 'weapon',
      wrong: 'witness'
    },
    {
      en: "The victim received serious ____ in the explosion and is still in hospital.",
      tr: 'wounds',
      wrong: 'policy'
    },
    {
      en: "Terrorist groups continue to pose a serious ____ to national security.",
      tr: 'threat',
      wrong: 'jury'
    },
    {
      en: "The country has been in a state of political ____ for the past three years.",
      tr: 'crisis',
      wrong: 'court'
    },
    {
      en: "She acted as a key ____ in the trial and her testimony helped convict the defendant.",
      tr: 'witness',
      wrong: 'violence'
    },
    {
      en: "The new law aims to reduce juvenile ____ and improve rehabilitation programs.",
      tr: 'offence',
      wrong: 'election'
    },
    {
      en: "The United Nations condemned the use of excessive ____ against peaceful demonstrators.",
      tr: 'violence',
      wrong: 'candidate'
    }
  ],
},

// ─────────────────────── QUIZ 13 — Travel & Transport ───────────────────────
[
  { en: 'accommodation', tr: 'yaşayış yeri',     wrong: 'otel',           wen: 'restaurant',    def: 'a place where travellers can stay overnight' },
  { en: 'airport',      tr: 'hava limanı',       wrong: 'terminal',      wen: 'hospital',      def: 'a place where planes take off and land' },
  { en: 'border',       tr: 'sərhəd',            wrong: 'keçid',         wen: 'bridge',        def: 'the official line separating two countries' },
  { en: 'booking',      tr: 'rezervasiya',       wrong: 'bilet',         wen: 'ticket',        def: 'an arrangement to reserve a room, seat or ticket' },
  { en: 'cruise',       tr: 'kruiz',             wrong: 'gəmi səyahəti', wen: 'flight',        def: 'a holiday on a large ship' },
  { en: 'destination',  tr: 'təyinat yeri',      wrong: 'marşrut',       wen: 'price',         def: 'the place you are travelling to' },
  { en: 'flight',       tr: 'uçuş',              wrong: 'səyahət',       wen: 'meeting',       def: 'a journey by plane' },
  { en: 'guide',        tr: 'bələdçi',           wrong: 'turist',        wen: 'driver',        def: 'a person who shows tourists around' },
  { en: 'journey',      tr: 'səyahət',           wrong: 'gəzinti',       wen: 'meeting',       def: 'a trip from one place to another' },
  { en: 'luggage',      tr: 'baqaj',             wrong: 'çanta',         wen: 'clothes',       def: 'bags and suitcases you take on a trip' },
  { en: 'passport',     tr: 'pasport',           wrong: 'viza',          wen: 'ticket',        def: 'an official document needed for international travel' },
  { en: 'port',         tr: 'liman',             wrong: 'hava limanı',   wen: 'school',        def: 'a place where ships load and unload goods' },
  { en: 'reservation',  tr: 'yer ayırtma',       wrong: 'sifariş',       wen: 'menu',          def: 'an arrangement to keep a room or seat for you' },
  { en: 'route',        tr: 'marşrut',           wrong: 'yol',           wen: 'price',         def: 'the way or road you take to travel somewhere' },
  { en: 'ticket',       tr: 'bilet',             wrong: 'kupon',         wen: 'passport',      def: 'a piece of paper that allows you to travel' },
  { en: 'tourism',      tr: 'turizm',            wrong: 'səyahət',       wen: 'business',      def: 'the business of organizing holidays for people' },
  { en: 'tourist',      tr: 'turist',            wrong: 'səyyah',        wen: 'resident',      def: 'a person who travels for pleasure' },
  { en: 'transport',    tr: 'nəqliyyat',         wrong: 'daşıma',        wen: 'education',     def: 'the system of moving people or goods from one place to another' },
  { en: 'vehicle',      tr: 'nəqliyyat vasitəsi', wrong: 'avtomobil',     wen: 'building',      def: 'a machine used for transporting people or goods' },
  { en: 'visa',         tr: 'viza',              wrong: 'icazə',         wen: 'ticket',        def: 'an official permission to enter a foreign country' }
],

// ─────────────────────── QUIZ 14 — Nature & Environment ───────────────────────
[
  { en: 'atmosphere',   tr: 'atmosfer',          wrong: 'hava',          wen: 'ocean',         def: 'the layer of gases that surrounds the Earth' },
  { en: 'climate',      tr: 'iqlim',             wrong: 'hava şəraiti',  wen: 'economy',       def: 'the normal weather conditions in a particular region' },
  { en: 'countryside',  tr: 'kənd yeri',         wrong: 'meşə',          wen: 'city centre',   def: 'the areas outside towns and cities' },
  { en: 'disaster',     tr: 'fəlakət',           wrong: 'bəla',          wen: 'success',       def: 'a sudden event that causes great damage or suffering' },
  { en: 'earthquake',   tr: 'zəlzələ',           wrong: 'daşqın',        wen: 'festival',      def: 'a sudden shaking of the ground caused by movement of the Earth' },
  { en: 'environment',  tr: 'ətraf mühit',       wrong: 'təbiət',        wen: 'business',      def: 'the natural world of land, sea, air, plants and animals' },
  { en: 'flood',        tr: 'daşqın',            wrong: 'fırtına',       wen: 'party',         def: 'when a lot of water covers land that is normally dry' },
  { en: 'forest',       tr: 'meşə',              wrong: 'bağ',           wen: 'desert',        def: 'a large area of land covered with trees' },
  { en: 'global',       tr: 'qlobal',            wrong: 'beynəlxalq',    wen: 'local',         def: 'affecting the whole world' },
  { en: 'greenhouse',   tr: 'istixana',          wrong: 'bağça',         wen: 'hospital',      def: 'a glass building used for growing plants' },
  { en: 'hurricane',    tr: 'qasırğa',           wrong: 'fırtına',       wen: 'festival',      def: 'a very violent tropical storm with strong winds' },
  { en: 'nature',       tr: 'təbiət',            wrong: 'mühit',         wen: 'city',          def: 'the natural world of plants, animals, and landscapes' },
  { en: 'pollution',    tr: 'çirklənmə',         wrong: 'çirkab',        wen: 'cleanliness',   def: 'the presence of harmful substances in the environment' },
  { en: 'river',        tr: 'çay',               wrong: 'göl',           wen: 'mountain',      def: 'a large natural flow of water' },
  { en: 'storm',        tr: 'fırtına',           wrong: 'qasırğa',       wen: 'party',         def: 'bad weather with strong winds and rain' },
  { en: 'temperature',  tr: 'temperatur',        wrong: 'istilik',       wen: 'speed',         def: 'how hot or cold something is' },
  { en: 'tsunami',      tr: 'sunami',            wrong: 'dalğa',         wen: 'festival',      def: 'a very large and dangerous wave caused by an earthquake' },
  { en: 'weather',      tr: 'hava',              wrong: 'iqlim',         wen: 'economy',       def: 'the condition of the atmosphere at a particular time and place' },
  { en: 'wildlife',     tr: 'vəhşi təbiət',      wrong: 'fauna',         wen: 'technology',    def: 'wild animals and plants living in their natural environment' },
  { en: 'pollution',    tr: 'çirklənmə',         wrong: 'tullantı',      wen: 'cleanliness',   def: 'the presence of harmful substances in the environment' }
],

    // ─────────────────────── EXAM — Travel, Transport, Nature & Environment (B2) ───────────────────────
{
  sentences: [
    {
      en: "Finding affordable ____ in the city centre during peak tourist season can be extremely difficult.",
      tr: 'accommodation',
      wrong: 'destination'
    },
    {
      en: "The government has introduced stricter controls at the country's southern ____ to prevent illegal immigration.",
      tr: 'border',
      wrong: 'storm'
    },
    {
      en: "We need to make a ____ for the hotel room as soon as possible because the city gets very crowded in summer.",
      tr: 'reservation',
      wrong: 'tsunami'
    },
    {
      en: "The ship will depart from the port of Barcelona on a two-week Mediterranean ____.",
      tr: 'cruise',
      wrong: 'pollution'
    },
    {
      en: "After several delays, our ____ finally took off at midnight and arrived in Tokyo at dawn.",
      tr: 'flight',
      wrong: 'hurricane'
    },
    {
      en: "Make sure you keep your ____ with you at all times when travelling internationally.",
      tr: 'passport',
      wrong: 'wildlife'
    },
    {
      en: "Tourism is one of the main sources of income for many small countries with beautiful coastlines.",
      tr: 'tourism',
      wrong: 'atmosphere'
    },
    {
      en: "You will need a tourist ____ to enter the country, which can take up to three weeks to process.",
      tr: 'visa',
      wrong: 'earthquake'
    },
    {
      en: "The most direct ____ from Paris to Rome goes through the Alps and takes about 12 hours by train.",
      tr: 'route',
      wrong: 'greenhouse'
    },
    {
      en: "Electric ____ are becoming increasingly popular as cities try to reduce air pollution.",
      tr: 'vehicles',
      wrong: 'floods'
    },
    {
      en: "Scientists warn that the Earth's ____ is warming at an alarming rate due to human activity.",
      tr: 'climate',
      wrong: 'luggage'
    },
    {
      en: "The ____ has been badly damaged by decades of industrial activity and poor waste management.",
      tr: 'environment',
      wrong: 'cruise'
    },
    {
      en: "Many rare species of ____ are under threat because of deforestation and illegal hunting.",
      tr: 'wildlife',
      wrong: 'booking'
    },
    {
      en: "The government declared a state of emergency after the ____ destroyed thousands of homes.",
      tr: 'disaster',
      wrong: 'passport'
    },
    {
      en: "A powerful ____ struck the coast, causing massive waves that flooded coastal villages.",
      tr: 'tsunami',
      wrong: 'reservation'
    },
    {
      en: "The thick black smoke from the factory is a clear sign of serious air ____.",
      tr: 'pollution',
      wrong: 'journey'
    },
    {
      en: "Rising sea levels and extreme weather events are two major consequences of ____ warming.",
      tr: 'global',
      wrong: 'border'
    },
    {
      en: "The dense Amazon ____ plays a vital role in absorbing carbon dioxide from the atmosphere.",
      tr: 'forest',
      wrong: 'visa'
    },
    {
      en: "We had to cancel our trip because of the severe ____ warning issued by the meteorological office.",
      tr: 'hurricane',
      wrong: 'tourism'
    },
    {
      en: "The sudden drop in ____ during the night caught many travellers unprepared for the cold.",
      tr: 'temperature',
      wrong: 'vehicle'
    }
  ],
},
      
// ─────────────────────── QUIZ 15 — Science & Research ───────────────────────
[
  { en: 'analysis',     tr: 'təhlil',            wrong: 'tədqiqat',      wen: 'celebration',   def: 'a detailed examination of something' },
  { en: 'chemical',     tr: 'kimyəvi',           wrong: 'fiziki',        wen: 'musical',       def: 'relating to chemistry or made by chemical processes' },
  { en: 'data',         tr: 'məlumat',           wrong: 'rəqəm',         wen: 'emotion',       def: 'facts and information used for analysis' },
  { en: 'database',     tr: 'verilənlər bazası', wrong: 'sistem',        wen: 'library',       def: 'a large collection of information stored in a computer' },
  { en: 'element',      tr: 'element',           wrong: 'maddə',         wen: 'idea',          def: 'a basic chemical substance' },
  { en: 'evidence',     tr: 'sübut',             wrong: 'nəticə',        wen: 'opinion',       def: 'facts or information that prove something is true' },
  { en: 'experiment',   tr: 'eksperiment',       wrong: 'sınaq',         wen: 'party',         def: 'a scientific test to discover something' },
  { en: 'laboratory',   tr: 'laboratoriya',      wrong: 'tədqiqat mərkəzi', wen: 'office',      def: 'a room equipped for scientific experiments' },
  { en: 'nuclear',      tr: 'nüvə',              wrong: 'kimyəvi',       wen: 'artistic',      def: 'relating to the energy produced by atoms' },
  { en: 'research',     tr: 'tədqiqat',          wrong: 'araşdırma',     wen: 'holiday',       def: 'serious study to discover new facts' },
  { en: 'scientific',   tr: 'elmi',              wrong: 'texniki',       wen: 'artistic',      def: 'relating to science and experiments' },
  { en: 'scientist',    tr: 'alim',              wrong: 'tədqiqatçı',    wen: 'artist',        def: 'a person who studies science' },
  { en: 'substance',    tr: 'maddə',             wrong: 'element',       wen: 'emotion',       def: 'a particular type of material' },
  { en: 'theory',       tr: 'nəzəriyyə',         wrong: 'hipotez',       wen: 'fact',          def: 'an idea intended to explain something' },
  { en: 'analyse',      tr: 'təhlil etmək',      wrong: 'araşdırmaq',    wen: 'celebrate',     def: 'to examine something in detail' },
  { en: 'calculate',    tr: 'hesablamaq',        wrong: 'ölçmək',        wen: 'guess',         def: 'to find out a number using mathematics' },
  { en: 'observe',      tr: 'müşahidə etmək',    wrong: 'izləmək',       wen: 'ignore',        def: 'to watch something carefully' },
  { en: 'observation',  tr: 'müşahidə',          wrong: 'nəzarət',       wen: 'dream',         def: 'the action of watching something carefully' },
  { en: 'discovery',    tr: 'kəşf',              wrong: 'ixtira',        wen: 'routine',       def: 'the act of finding something new' },
  { en: 'evolution',    tr: 'təkamül',           wrong: 'inkişaf',       wen: 'revolution',    def: 'the gradual development of something' }
],
      
// ─────────────────────── QUIZ 16 — Health & Body ───────────────────────
[
  { en: 'ambulance',    tr: 'təcili yardım maşını', wrong: 'xəstəxana',   wen: 'school',        def: 'a vehicle used to take people to hospital in an emergency' },
  { en: 'cancer',       tr: 'xərçəng',           wrong: 'şiş',           wen: 'cold',          def: 'a serious disease in which cells grow uncontrollably' },
  { en: 'emergency',    tr: 'fövqəladə hal',     wrong: 'təcili yardım',  wen: 'meeting',       def: 'a sudden dangerous situation needing immediate help' },
  { en: 'fitness',      tr: 'fiziki forma',      wrong: 'sağlamlıq',     wen: 'wealth',        def: 'the state of being physically healthy and strong' },
  { en: 'heal',         tr: 'sağalmaq',          wrong: 'müalicə olmaq', wen: 'worsen',        def: 'to become healthy again after being ill' },
  { en: 'health',       tr: 'sağlamlıq',         wrong: 'güc',           wen: 'money',         def: 'the condition of your body and mind' },
  { en: 'healthcare',   tr: 'səhiyyə',           wrong: 'tibb',          wen: 'education',     def: 'the system of medical care and treatment' },
  { en: 'hospital',     tr: 'xəstəxana',         wrong: 'klinika',       wen: 'school',        def: 'a place where sick or injured people are treated' },
  { en: 'illness',      tr: 'xəstəlik',          wrong: 'əziyyət',       wen: 'success',       def: 'a disease or period of being ill' },
  { en: 'injure',       tr: 'yaralamaq',         wrong: 'incitmək',      wen: 'help',          def: 'to hurt a part of the body' },
  { en: 'injury',       tr: 'xəsarət',           wrong: 'yara',          wen: 'healing',       def: 'physical harm or damage to the body' },
  { en: 'medicine',     tr: 'dərman',            wrong: 'müalicə',       wen: 'food',          def: 'a substance used to treat illness' },
  { en: 'mental',       tr: 'zehni',             wrong: 'emosional',     wen: 'physical',      def: 'relating to the mind' },
  { en: 'muscle',       tr: 'əzələ',             wrong: 'sümük',         wen: 'skin',          def: 'the soft tissue in the body that helps you move' },
  { en: 'pain',         tr: 'ağrı',              wrong: 'əzab',          wen: 'pleasure',      def: 'the feeling when part of your body hurts' },
  { en: 'patient',      tr: 'xəstə',             wrong: 'səbirli',       wen: 'doctor',        def: 'a person who is receiving medical treatment' },
  { en: 'surgery',      tr: 'əməliyyat',         wrong: 'müalicə',       wen: 'medicine',      def: 'medical treatment in which a doctor cuts open the body' },
  { en: 'symptom',      tr: 'simptom',           wrong: 'diaqnoz',       wen: 'medicine',      def: 'a sign of an illness or disease' },
  { en: 'treatment',    tr: 'müalicə',           wrong: 'əməliyyat',      wen: 'operation',     def: 'the process of treating an illness or injury' },
  { en: 'therapist',    tr: 'terapevt',          wrong: 'psixoloq',      wen: 'teacher',       def: 'a person who treats physical or mental problems' }
],

    // ─────────────────────── EXAM — Science, Research, Health & Body (B2) ───────────────────────
{
  sentences: [
    {
      en: "The results of the latest ____ show a clear link between diet and heart disease.",
      tr: 'analysis',
      wrong: 'ambulance'
    },
    {
      en: "Scientists are conducting a long-term ____ into the effects of climate change on ocean life.",
      tr: 'research',
      wrong: 'patient'
    },
    {
      en: "All new medicines must be thoroughly tested in a controlled ____ before they are approved.",
      tr: 'experiment',
      wrong: 'symptom'
    },
    {
      en: "The discovery of penicillin was one of the most important ____ in medical history.",
      tr: 'discoveries',
      wrong: 'muscle'
    },
    {
      en: "Darwin's theory of ____ remains one of the most influential ideas in modern biology.",
      tr: 'evolution',
      wrong: 'surgery'
    },
    {
      en: "The laboratory uses advanced equipment to ____ chemical reactions at a molecular level.",
      tr: 'observe',
      wrong: 'cancer'
    },
    {
      en: "The researchers collected a huge amount of ____ from over 10,000 participants.",
      tr: 'data',
      wrong: 'therapist'
    },
    {
      en: "Nuclear power remains a controversial source of ____ due to safety concerns.",
      tr: 'energy',
      wrong: 'injury'
    },
    {
      en: "The doctor said the ____ would take several weeks to heal completely.",
      tr: 'injury',
      wrong: 'database'
    },
    {
      en: "Mental ____ is just as important as physical health in overall well-being.",
      tr: 'health',
      wrong: 'laboratory'
    },
    {
      en: "The patient showed several worrying ____, including high fever and difficulty breathing.",
      tr: 'symptoms',
      wrong: 'element'
    },
    {
      en: "He underwent major heart ____ last year but has now made a full recovery.",
      tr: 'surgery',
      wrong: 'theory'
    },
    {
      en: "Regular physical exercise is essential for maintaining good cardiovascular ____.",
      tr: 'fitness',
      wrong: 'evidence'
    },
    {
      en: "The government is investing more money in public ____ to improve access to hospitals.",
      tr: 'healthcare',
      wrong: 'chemical'
    },
    {
      en: "Many serious diseases can be prevented through early diagnosis and timely ____.",
      tr: 'treatment',
      wrong: 'scientist'
    },
    {
      en: "The chemical ____ released by the factory was highly toxic to marine life.",
      tr: 'substance',
      wrong: 'emergency'
    },
    {
      en: "An ____ was called immediately after the car accident on the motorway.",
      tr: 'ambulance',
      wrong: 'evolution'
    },
    {
      en: "The university has one of the most advanced ____ in the country for genetic research.",
      tr: 'laboratory',
      wrong: 'fitness'
    },
    {
      en: "The scientist received international recognition for her groundbreaking ____ in quantum physics.",
      tr: 'research',
      wrong: 'pain'
    },
    {
      en: "Chronic stress can have a very negative effect on both physical and ____ health.",
      tr: 'mental',
      wrong: 'nuclear'
    }
  ],
},
    
// ─────────────────────── QUIZ 17 — Food, House & Daily Life ───────────────────────
[
  { en: 'appliance',    tr: 'məişət texnikası',  wrong: 'cihaz',         wen: 'furniture',     def: 'a machine used in the home, such as a fridge or washing machine' },
  { en: 'bake',         tr: 'bişirmək',          wrong: 'qızartmaq',     wen: 'boil',          def: 'to cook food in an oven' },
  { en: 'bedroom',      tr: 'yataq otağı',       wrong: 'oturma otağı',  wen: 'kitchen',       def: 'the room where you sleep' },
  { en: 'cook',         tr: 'bişirmək',          wrong: 'hazırlamaq',    wen: 'eat',           def: 'to prepare food by heating it' },
  { en: 'cottage',      tr: 'kiçik ev',          wrong: 'villa',         wen: 'office',        def: 'a small house, usually in the countryside' },
  { en: 'furniture',    tr: 'mebel',             wrong: 'dekor',         wen: 'food',          def: 'tables, chairs, beds and other movable items in a house' },
  { en: 'ingredient',   tr: 'inqredient',        wrong: 'resept',        wen: 'tool',          def: 'one of the foods or substances needed to make a dish' },
  { en: 'kitchen',      tr: 'mətbəx',            wrong: 'yemək otağı',   wen: 'bedroom',       def: 'the room where food is prepared and cooked' },
  { en: 'meal',         tr: 'yemək',             wrong: 'xörək',         wen: 'drink',         def: 'food eaten at one time, such as breakfast or dinner' },
  { en: 'recipe',       tr: 'resept',            wrong: 'inqredient',    wen: 'menu',          def: 'instructions for cooking a particular dish' },
  { en: 'alarm',        tr: 'zəng / siqnal',     wrong: 'saat',          wen: 'melody',        def: 'a loud sound used to wake you up or warn you' },
  { en: 'battery',      tr: 'batareya',          wrong: 'şarj',          wen: 'key',           def: 'a device that stores electrical energy' },
  { en: 'ceiling',      tr: 'tavan',             wrong: 'döşəmə',        wen: 'wall',          def: 'the upper surface of a room' },
  { en: 'curtain',      tr: 'pərdə',             wrong: 'jalüz',         wen: 'carpet',        def: 'a piece of material hung to cover a window' },
  { en: 'garage',       tr: 'qaraj',             wrong: 'anbar',         wen: 'kitchen',       def: 'a building for keeping a car' },
  { en: 'heating',      tr: 'isitmə',            wrong: 'ventilyasiya',  wen: 'lighting',      def: 'the system that makes a house warm' },
  { en: 'household',    tr: 'ev təsərrüfatı',    wrong: 'ailə',          wen: 'company',       def: 'all the people who live together in one house' },
  { en: 'shelter',      tr: 'sığınak',           wrong: 'ev',            wen: 'office',        def: 'a place that protects you from danger or bad weather' },
  { en: 'pipe',         tr: 'boru',              wrong: 'kabel',         wen: 'door',          def: 'a tube that carries water or gas' },
  { en: 'furniture',    tr: 'mebel',             wrong: 'avadanlıq',     wen: 'food',          def: 'tables, chairs, beds and other movable items in a house' }
],

// ─────────────────────── QUIZ 18 — Family & Society ───────────────────────
[
  { en: 'childhood',    tr: 'uşaqlıq',           wrong: 'gənclik',       wen: 'old age',       def: 'the period of time when someone is a child' },
  { en: 'community',    tr: 'icma',              wrong: 'cəmiyyət',      wen: 'family',        def: 'a group of people living in the same area' },
  { en: 'divorce',      tr: 'boşanma',           wrong: 'ayrılıq',       wen: 'marriage',      def: 'the legal end of a marriage' },
  { en: 'engaged',      tr: 'nişanlı',           wrong: 'evli',          wen: 'single',        def: 'having formally agreed to marry someone' },
  { en: 'family',       tr: 'ailə',              wrong: 'nəsil',         wen: 'company',       def: 'a group of people who are related to each other' },
  { en: 'friendship',   tr: 'dostluq',           wrong: 'qardaşlıq',     wen: 'competition',   def: 'a close and trusting relationship between friends' },
  { en: 'generation',   tr: 'nəsil',             wrong: 'dövr',          wen: 'country',       def: 'all people born at about the same time' },
  { en: 'marriage',     tr: 'evlilik',           wrong: 'nişan',         wen: 'job',           def: 'the legal relationship between husband and wife' },
  { en: 'neighbour',    tr: 'qonşu',             wrong: 'tanış',         wen: 'stranger',      def: 'a person who lives near you' },
  { en: 'relative',     tr: 'qohum',             wrong: 'tanış',         wen: 'friend',        def: 'a member of your family' },
  { en: 'relationship', tr: 'münasibət',         wrong: 'dostluq',       wen: 'business',      def: 'the way people are connected to each other' },
  { en: 'religion',     tr: 'din',               wrong: 'inanc',         wen: 'sport',         def: 'a system of belief and worship' },
  { en: 'romantic',     tr: 'romantik',          wrong: 'həssas',        wen: 'practical',     def: 'showing love in a sentimental way' },
  { en: 'society',      tr: 'cəmiyyət',          wrong: 'icma',          wen: 'family',        def: 'all the people in a country or area' },
  { en: 'tradition',    tr: 'ənənə',             wrong: 'adət',          wen: 'fashion',       def: 'a custom passed down through generations' },
  { en: 'youth',        tr: 'gənclik',           wrong: 'uşaqlıq',       wen: 'old age',       def: 'the time when you are young' },
  { en: 'generation',   tr: 'nəsil',             wrong: 'əsr',           wen: 'country',       def: 'all people born at about the same time' },
  { en: 'community',    tr: 'icma',              wrong: 'qrup',          wen: 'family',        def: 'a group of people living in the same area' },
  { en: 'household',    tr: 'ev təsərrüfatı',    wrong: 'ailə',          wen: 'company',       def: 'all the people who live together in one house' },
  { en: 'neighbour',    tr: 'qonşu',             wrong: 'həmsayə',       wen: 'stranger',      def: 'a person who lives near you' }
],

// ─────────────────────── QUIZ 19 — Art, Culture & Entertainment ───────────────────────
[
  { en: 'album',        tr: 'albom',             wrong: 'disk',          wen: 'novel',         def: 'a collection of songs released together' },
  { en: 'art',          tr: 'sənət',             wrong: 'mədəniyyət',    wen: 'sport',         def: 'the creation of paintings, sculptures and other works' },
  { en: 'artist',       tr: 'sənətkar',          wrong: 'rəssam',        wen: 'scientist',     def: 'a person who creates art' },
  { en: 'celebration',  tr: 'bayram',            wrong: 'mərasim',       wen: 'meeting',       def: 'a special event when people are happy' },
  { en: 'ceremony',     tr: 'mərasim',           wrong: 'tədbirlər',     wen: 'game',          def: 'a formal event like a wedding or graduation' },
  { en: 'concert',      tr: 'konsert',           wrong: 'festival',      wen: 'lecture',       def: 'a live performance of music' },
  { en: 'culture',      tr: 'mədəniyyət',        wrong: 'ənənə',         wen: 'economy',       def: 'the customs, arts and way of life of a society' },
  { en: 'entertainment',tr: 'əyləncə',           wrong: 'şou',           wen: 'work',          def: 'things that amuse or interest people' },
  { en: 'exhibition',   tr: 'sərgi',             wrong: 'muzey',         wen: 'hospital',      def: 'a public display of art or objects' },
  { en: 'fashion',      tr: 'moda',              wrong: 'stil',          wen: 'sport',         def: 'popular styles of clothing' },
  { en: 'gig',          tr: 'konsert',           wrong: 'festival',      wen: 'lecture',       def: 'a live performance by a musician or band' },
  { en: 'movie',        tr: 'film',              wrong: 'serial',        wen: 'book',          def: 'a story you watch in the cinema or on TV' },
  { en: 'music',        tr: 'musiqi',            wrong: 'melodiya',      wen: 'sport',         def: 'sounds arranged in a way that is pleasant to listen to' },
  { en: 'performance',  tr: 'çıxış',             wrong: 'tamaşa',        wen: 'exam',          def: 'acting, singing or playing in front of an audience' },
  { en: 'poem',         tr: 'şeir',              wrong: 'hekayə',        wen: 'essay',         def: 'a piece of writing with short lines and rhythm' },
  { en: 'poetry',       tr: 'şeir sənəti',       wrong: 'ədəbiyyat',     wen: 'sport',         def: 'the art of writing poems' },
  { en: 'sculpture',    tr: 'heykəl',            wrong: 'rəsm',          wen: 'song',          def: 'a work of art made by carving or shaping materials' },
  { en: 'studio',       tr: 'studiya',           wrong: 'atelye',        wen: 'kitchen',       def: 'a room where artists or musicians work' },
  { en: 'theatre',      tr: 'teatr',             wrong: 'kino',          wen: 'hospital',      def: 'a building where plays are performed' },
  { en: 'theme',        tr: 'mövzu',             wrong: 'fikir',         wen: 'price',         def: 'the main subject or idea in a work of art' }
],

// ─────────────────────── QUIZ 20 — Sports & Fitness ───────────────────────
[
  { en: 'athlete',      tr: 'atlet',             wrong: 'idmançı',       wen: 'scientist',     def: 'a person who competes in sports' },
  { en: 'captain',      tr: 'kapitan',           wrong: 'məşqçi',        wen: 'passenger',     def: 'the leader of a sports team' },
  { en: 'champion',     tr: 'çempion',           wrong: 'qalib',         wen: 'student',       def: 'the winner of a competition' },
  { en: 'championship', tr: 'çempionat',         wrong: 'turnir',        wen: 'festival',      def: 'a competition to find the best player or team' },
  { en: 'coach',        tr: 'məşqçi',            wrong: 'kapitan',       wen: 'customer',      def: 'a person who trains athletes' },
  { en: 'competition',  tr: 'yarış',             wrong: 'turnir',        wen: 'meeting',       def: 'an event where people try to win' },
  { en: 'competitive',  tr: 'rəqabətli',         wrong: 'güclü',         wen: 'relaxed',       def: 'determined to be better than others' },
  { en: 'fitness',      tr: 'fiziki forma',      wrong: 'sağlamlıq',     wen: 'wealth',        def: 'the state of being physically healthy and strong' },
  { en: 'match',        tr: 'oyun / matç',       wrong: 'turnir',        wen: 'party',         def: 'a game between two teams' },
  { en: 'muscle',       tr: 'əzələ',             wrong: 'güc',           wen: 'brain',         def: 'the soft tissue in your body that helps you move' },
  { en: 'player',       tr: 'oyunçu',            wrong: 'idmançı',       wen: 'fan',           def: 'a person who takes part in a sport or game' },
  { en: 'race',         tr: 'qaçış yarışı',      wrong: 'sprint',        wen: 'party',         def: 'a competition to see who is fastest' },
  { en: 'rugby',        tr: 'reqbi',             wrong: 'amerikan futbolu', wen: 'chess',      def: 'a team sport played with an oval ball' },
  { en: 'score',        tr: 'hesab',             wrong: 'nəticə',        wen: 'team',          def: 'the number of points in a game' },
  { en: 'stadium',      tr: 'stadion',           wrong: 'arena',         wen: 'hospital',      def: 'a large building where people watch sports' },
  { en: 'strength',     tr: 'güc',               wrong: 'enerji',        wen: 'weakness',      def: 'physical power' },
  { en: 'team',         tr: 'komanda',           wrong: 'qrup',          wen: 'audience',      def: 'a group of players who play together' },
  { en: 'training',     tr: 'məşq',              wrong: 'hazırlıq',      wen: 'holiday',       def: 'practice to improve skills in sport' },
  { en: 'victory',      tr: 'qələbə',            wrong: 'nailiyyət',     wen: 'defeat',        def: 'the act of winning a game or competition' },
  { en: 'tournament',   tr: 'turnir',            wrong: 'çempionat',     wen: 'festival',      def: 'a series of competitions' }
],

      // ─────────────────────── EXAM — Daily Life, and Hobbies (B2) ───────────────────────
{
  sentences: [
    {
      en: "Modern households rely heavily on labour-saving ____ such as washing machines and dishwashers.",
      tr: 'appliances',
      wrong: 'ingredients'
    },
    {
      en: "Following the ____ carefully is essential if you want the cake to rise properly.",
      tr: 'recipe',
      wrong: 'stadium'
    },
    {
      en: "The whole ____ works together to maintain the house and share daily responsibilities.",
      tr: 'household',
      wrong: 'tournament'
    },
    {
      en: "After the earthquake, thousands of people were left without ____ and had to sleep in tents.",
      tr: 'shelter',
      wrong: 'championship'
    },
    {
      en: "A broken water ____ caused flooding in the basement and damaged the furniture.",
      tr: 'pipe',
      wrong: 'performance'
    },
    {
      en: "Different ____ often have conflicting values and attitudes towards technology.",
      tr: 'generations',
      wrong: 'appliances'
    },
    {
      en: "Building strong ____ within the local ____ is important for social cohesion.",
      tr: 'relationships',
      wrong: 'victory'
    },
    {
      en: "Cultural ____ and customs are passed down from one generation to the next.",
      tr: 'traditions',
      wrong: 'muscle'
    },
    {
      en: "The new art ____ at the museum attracted over 50,000 visitors in its first month.",
      tr: 'exhibition',
      wrong: 'recipe'
    },
    {
      en: "Her latest ____ explores the complex relationship between humans and nature.",
      tr: 'sculpture',
      wrong: 'appliance'
    },
    {
      en: "The live ____ of the national anthem at the opening ceremony was incredibly moving.",
      tr: 'performance',
      wrong: 'shelter'
    },
    {
      en: "The main ____ of the novel is the conflict between personal freedom and social expectations.",
      tr: 'theme',
      wrong: 'pipe'
    },
    {
      en: "The wedding ____ was held in a beautiful old church with over 200 guests.",
      tr: 'ceremony',
      wrong: 'fitness'
    },
    {
      en: "She is a highly ____ person who always strives to be the best in everything she does.",
      tr: 'competitive',
      wrong: 'tradition'
    },
    {
      en: "The national football ____ is watched by millions of people around the country.",
      tr: 'championship',
      wrong: 'generation'
    },
    {
      en: "The Olympic ____ brings together thousands of athletes from all over the world.",
      tr: 'tournament',
      wrong: 'household'
    },
    {
      en: "Regular physical ____ is necessary to build strength and improve overall fitness.",
      tr: 'training',
      wrong: 'exhibition'
    },
    {
      en: "The team celebrated their unexpected ____ with a parade through the city streets.",
      tr: 'victory',
      wrong: 'ceremony'
    },
    {
      en: "A large modern ____ was built to host international football matches and concerts.",
      tr: 'stadium',
      wrong: 'theme'
    },
    {
      en: "Maintaining a good work-life balance is essential for both mental and physical ____.",
      tr: 'wellbeing',
      wrong: 'performance'
    }
  ],
},
      
      // ─────────────────────── QUIZ 21 — Personality & Character ───────────────────────
[
  { en: 'aggressive',   tr: 'aqressiv',          wrong: 'kobud',         wen: 'calm',          def: 'behaving in an angry and violent way' },
  { en: 'ambitious',    tr: 'iddialı',           wrong: 'məqsədli',      wen: 'lazy',          def: 'having a strong desire to succeed' },
  { en: 'anxious',      tr: 'narahat',           wrong: 'gərgin',        wen: 'relaxed',       def: 'worried or nervous about something' },
  { en: 'bold',         tr: 'cəsarətli',         wrong: 'güclü',         wen: 'shy',           def: 'confident and willing to take risks' },
  { en: 'brave',        tr: 'cəsur',             wrong: 'qorxmaz',       wen: 'cowardly',      def: 'not afraid to face danger' },
  { en: 'calm',         tr: 'sakit',             wrong: 'rahat',         wen: 'nervous',       def: 'peaceful and not excited or angry' },
  { en: 'charming',     tr: 'cazibədar',         wrong: 'gözəl',         wen: 'ugly',          def: 'very pleasant and attractive' },
  { en: 'confident',    tr: 'özünə inamlı',      wrong: 'cəsur',         wen: 'shy',           def: 'feeling sure about your own abilities' },
  { en: 'cruel',        tr: 'zalım',             wrong: 'kobud',         wen: 'kind',          def: 'deliberately causing pain or suffering to others' },
  { en: 'curious',      tr: 'maraqlanan',        wrong: 'diqqətli',      wen: 'bored',         def: 'wanting to know or learn more about something' },
  { en: 'determined',   tr: 'qərarlı',           wrong: 'iddialı',       wen: 'lazy',          def: 'having a strong will to achieve something' },
  { en: 'eager',        tr: 'həvəsli',           wrong: 'coşğun',        wen: 'reluctant',     def: 'very keen and excited to do something' },
  { en: 'enthusiastic', tr: 'coşğun',            wrong: 'həvəsli',       wen: 'bored',         def: 'showing great interest and excitement' },
  { en: 'flexible',     tr: 'çevik',             wrong: 'uyğunlaşan',    wen: 'rigid',         def: 'able to change or adapt easily' },
  { en: 'genuine',      tr: 'səmimi',            wrong: 'dürüst',        wen: 'fake',          def: 'real and sincere' },
  { en: 'honest',       tr: 'dürüst',            wrong: 'etibarlı',      wen: 'dishonest',     def: 'always telling the truth' },
  { en: 'impatient',    tr: 'səbirsiz',          wrong: 'tələsik',       wen: 'patient',       def: 'not willing to wait calmly' },
  { en: 'loyal',        tr: 'sadiq',             wrong: 'etibarlı',      wen: 'unfaithful',    def: 'always supporting and being faithful to someone' },
  { en: 'optimistic',   tr: 'nikbin',            wrong: 'müsbət',        wen: 'pessimistic',   def: 'expecting good things to happen' },
  { en: 'patient',      tr: 'səbirli',           wrong: 'sakit',         wen: 'impatient',     def: 'able to wait calmly' }
],

// ─────────────────────── QUIZ 22 — Abstract Concepts & Thinking ───────────────────────
[
  { en: 'abstract',     tr: 'mücərrəd',          wrong: 'nəzəri',        wen: 'concrete',      def: 'existing in thought and not in physical form' },
  { en: 'concept',      tr: 'anlayış',           wrong: 'fikir',         wen: 'fact',          def: 'an idea or principle' },
  { en: 'context',      tr: 'kontekst',          wrong: 'mövzu',         wen: 'price',         def: 'the situation in which something happens' },
  { en: 'idea',         tr: 'fikir',             wrong: 'anlayış',       wen: 'object',        def: 'a thought or suggestion' },
  { en: 'imagination',  tr: 'təxəyyül',          wrong: 'yaradıcılıq',   wen: 'reality',       def: 'the ability to create pictures in your mind' },
  { en: 'logic',        tr: 'məntiq',            wrong: 'düşüncə',       wen: 'emotion',       def: 'a way of thinking based on reason' },
  { en: 'logical',      tr: 'məntiqi',           wrong: 'rasional',      wen: 'emotional',     def: 'based on reason and clear thinking' },
  { en: 'mind',         tr: 'ağıl',              wrong: 'beyin',         wen: 'body',          def: 'the part of a person that thinks and feels' },
  { en: 'notion',       tr: 'təsəvvür',          wrong: 'anlayış',       wen: 'fact',          def: 'a belief or idea' },
  { en: 'perspective',  tr: 'baxış açısı',       wrong: 'görüş',         wen: 'price',         def: 'a particular way of thinking about something' },
  { en: 'philosophy',   tr: 'fəlsəfə',           wrong: 'psixologiya',   wen: 'sport',         def: 'the study of the nature of existence and knowledge' },
  { en: 'principle',    tr: 'prinsip',           wrong: 'qanun',         wen: 'tool',          def: 'a basic rule or belief' },
  { en: 'psychology',   tr: 'psixologiya',       wrong: 'fəlsəfə',       wen: 'medicine',      def: 'the study of the human mind and behaviour' },
  { en: 'theory',       tr: 'nəzəriyyə',         wrong: 'hipotez',       wen: 'fact',          def: 'an idea intended to explain something' },
  { en: 'view',         tr: 'görüş',             wrong: 'fikir',         wen: 'price',         def: 'a particular opinion or way of thinking' },
  { en: 'viewpoint',    tr: 'baxış nöqtəsi',     wrong: 'perspektiv',    wen: 'fact',          def: 'a particular way of thinking about something' },
  { en: 'wisdom',       tr: 'müdriklik',         wrong: 'bilik',         wen: 'ignorance',     def: 'the quality of having experience and good judgement' },
  { en: 'wise',         tr: 'müdrik',            wrong: 'ağıllı',        wen: 'stupid',        def: 'having experience and good judgement' },
  { en: 'assumption',   tr: 'fərziyyə',          wrong: 'nəticə',        wen: 'fact',          def: 'something you think is true without proof' },
  { en: 'concept',      tr: 'konsepsiya',        wrong: 'ideya',         wen: 'object',        def: 'an idea or principle' }
],
// ─────────────────────── QUIZ 23 — Actions & Processes (1) ───────────────────────
[
  { en: 'accomplish',   tr: 'nail olmaq',        wrong: 'tamamlamaq',    wen: 'fail',          def: 'to succeed in doing something difficult' },
  { en: 'achieve',      tr: 'əldə etmək',        wrong: 'qazanmaq',      wen: 'lose',          def: 'to succeed in reaching a goal' },
  { en: 'adapt',        tr: 'uyğunlaşmaq',       wrong: 'dəyişmək',      wen: 'ignore',        def: 'to change your behaviour to suit a new situation' },
  { en: 'adjust',       tr: 'tənzimləmək',       wrong: 'uyğunlaşdırmaq', wen: 'destroy',       def: 'to change something slightly to make it better' },
  { en: 'analyse',      tr: 'təhlil etmək',      wrong: 'araşdırmaq',    wen: 'celebrate',     def: 'to examine something in detail' },
  { en: 'attempt',      tr: 'cəhd etmək',        wrong: 'sınamaq',       wen: 'succeed',       def: 'to try to do something' },
  { en: 'calculate',    tr: 'hesablamaq',        wrong: 'ölçmək',        wen: 'guess',         def: 'to find out a number using mathematics' },
  { en: 'conduct',      tr: 'həyata keçirmək',   wrong: 'idarə etmək',   wen: 'avoid',         def: 'to carry out or organize something' },
  { en: 'contribute',   tr: 'töhfə vermək',      wrong: 'dəstək olmaq',  wen: 'take',          def: 'to give something to help a cause' },
  { en: 'create',       tr: 'yaratmaq',          wrong: 'qurmaq',        wen: 'destroy',       def: 'to make something new' },
  { en: 'develop',      tr: 'inkişaf etdirmək',  wrong: 'dəyişdirmək',   wen: 'destroy',       def: 'to grow or improve something over time' },
  { en: 'establish',    tr: 'qurmaq',            wrong: 'yaratmaq',      wen: 'destroy',       def: 'to start or create something that will last' },
  { en: 'evaluate',     tr: 'qiymətləndirmək',   wrong: 'yoxlamaq',      wen: 'ignore',        def: 'to judge how good or important something is' },
  { en: 'generate',     tr: 'yaratmaq',          wrong: 'istehsal etmək', wen: 'destroy',       def: 'to produce or create something' },
  { en: 'handle',       tr: 'idarə etmək',       wrong: 'həll etmək',    wen: 'ignore',        def: 'to deal with a situation or problem' },
  { en: 'implement',    tr: 'tətbiq etmək',      wrong: 'həyata keçirmək', wen: 'abandon',     def: 'to put a plan or system into operation' },
  { en: 'improve',      tr: 'təkmilləşdirmək',   wrong: 'dəyişdirmək',   wen: 'worsen',        def: 'to make something better' },
  { en: 'maintain',     tr: 'qoruyub saxlamaq',  wrong: 'davam etdirmək', wen: 'destroy',       def: 'to keep something in good condition' },
  { en: 'manage',       tr: 'idarə etmək',       wrong: 'nəzarət etmək', wen: 'ignore',        def: 'to be in charge of something' },
  { en: 'perform',      tr: 'yerinə yetirmək',   wrong: 'icra etmək',    wen: 'fail',          def: 'to do something successfully' }
],

// ─────────────────────── QUIZ 24 — Actions & Processes (2) ───────────────────────
[
  { en: 'investigate',  tr: 'araşdırmaq',        wrong: 'sorğu keçirmək', wen: 'ignore',        def: 'to try to find out the truth about something' },
  { en: 'negotiate',    tr: 'danışıqlar aparmaq', wrong: 'razılaşmaq',    wen: 'refuse',        def: 'to discuss something in order to reach an agreement' },
  { en: 'organise',     tr: 'təşkil etmək',      wrong: 'planlaşdırmaq', wen: 'destroy',       def: 'to arrange or plan something' },
  { en: 'participate',  tr: 'iştirak etmək',     wrong: 'qoşulmaq',      wen: 'avoid',         def: 'to take part in an activity' },
  { en: 'prepare',      tr: 'hazırlamaq',        wrong: 'planlaşdırmaq', wen: 'destroy',       def: 'to make something ready for use' },
  { en: 'proceed',      tr: 'davam etmək',       wrong: 'irəliləmək',    wen: 'stop',          def: 'to continue doing something' },
  { en: 'produce',      tr: 'istehsal etmək',    wrong: 'yaratmaq',      wen: 'destroy',       def: 'to make or create something' },
  { en: 'promote',      tr: 'təbliğ etmək',      wrong: 'dəstəkləmək',   wen: 'reduce',        def: 'to help something develop or become more popular' },
  { en: 'provide',      tr: 'təmin etmək',       wrong: 'vermək',        wen: 'take',          def: 'to give someone something they need' },
  { en: 'publish',      tr: 'nəşr etmək',        wrong: 'yaymaq',        wen: 'hide',          def: 'to make a book or information available to the public' },
  { en: 'react',        tr: 'reaksiya vermək',   wrong: 'cavab vermək',  wen: 'ignore',        def: 'to respond to something' },
  { en: 'realise',      tr: 'dərk etmək',        wrong: 'anlamaq',       wen: 'forget',        def: 'to become aware of something' },
  { en: 'receive',      tr: 'almaq',             wrong: 'qəbul etmək',   wen: 'give',          def: 'to get or be given something' },
  { en: 'reduce',       tr: 'azaltmaq',          wrong: 'kəsmək',        wen: 'increase',      def: 'to make something smaller or less' },
  { en: 'replace',      tr: 'əvəz etmək',        wrong: 'dəyişdirmək',   wen: 'keep',          def: 'to put something new in the place of something old' },
  { en: 'require',      tr: 'tələb etmək',       wrong: 'lazım olmaq',   wen: 'offer',         def: 'to need something' },
  { en: 'research',     tr: 'tədqiqat aparmaq',  wrong: 'araşdırmaq',    wen: 'ignore',        def: 'to study something in detail to discover new facts' },
  { en: 'resolve',      tr: 'həll etmək',        wrong: 'aradan qaldırmaq', wen: 'create',      def: 'to find a solution to a problem' },
  { en: 'respond',      tr: 'cavab vermək',      wrong: 'reaksiya göstərmək', wen: 'ignore',   def: 'to reply or react to something' },
  { en: 'solve',        tr: 'həll etmək',        wrong: 'çözmək',        wen: 'create',        def: 'to find a solution to a problem' }
],

      // ─────────────────────── EXAM — Personality, Character, Abstract Concepts & Actions (B2) ───────────────────────
{
  sentences: [
    {
      en: "She is very ____ and always sets herself challenging goals in both her career and personal life.",
      tr: 'ambitious',
      wrong: 'curious'
    },
    {
      en: "Despite many obstacles, his ____ attitude helped him eventually achieve his dream of starting his own company.",
      tr: 'determined',
      wrong: 'flexible'
    },
    {
      en: "A good leader should remain ____ even in highly stressful and difficult situations.",
      tr: 'calm',
      wrong: 'aggressive'
    },
    {
      en: "He has a very ____ personality and can make friends with almost anyone he meets.",
      tr: 'charming',
      wrong: 'impatient'
    },
    {
      en: "Being ____ is important in negotiations because it allows you to see the situation from different angles.",
      tr: 'flexible',
      wrong: 'loyal'
    },
    {
      en: "She is extremely ____ and always supports her friends through both good and bad times.",
      tr: 'loyal',
      wrong: 'bold'
    },
    {
      en: "From a historical ____, the industrial revolution completely changed how people lived and worked.",
      tr: 'perspective',
      wrong: 'recipe'
    },
    {
      en: "The philosopher's ____ on life and happiness continues to influence people even today.",
      tr: 'philosophy',
      wrong: 'appliance'
    },
    {
      en: "Many scientific ____ are later proven wrong when new evidence appears.",
      tr: 'assumptions',
      wrong: 'ingredients'
    },
    {
      en: "You need strong ____ to understand complex philosophical arguments.",
      tr: 'logic',
      wrong: 'shelter'
    },
    {
      en: "The team successfully ____ the project despite working with a very limited budget.",
      tr: 'accomplished',
      wrong: 'negotiated'
    },
    {
      en: "The company plans to ____ a new system to improve customer service next year.",
      tr: 'implement',
      wrong: 'observe'
    },
    {
      en: "Both sides are willing to ____ in order to reach a fair agreement.",
      tr: 'negotiate',
      wrong: 'bake'
    },
    {
      en: "It took the scientists many years to ____ the complex problem of climate change.",
      tr: 'resolve',
      wrong: 'celebrate'
    },
    {
      en: "Before making a final decision, we need to carefully ____ all the available options.",
      tr: 'evaluate',
      wrong: 'generate'
    },
    {
      en: "Everyone in the community is encouraged to ____ ideas for improving the local park.",
      tr: 'contribute',
      wrong: 'adjust'
    },
    {
      en: "The government must ____ more funding to support scientific research and development.",
      tr: 'provide',
      wrong: 'perform'
    },
    {
      en: "She finally ____ that her current job was making her unhappy and decided to change careers.",
      tr: 'realised',
      wrong: 'maintained'
    },
    {
      en: "The manager has to ____ several difficult situations at the same time.",
      tr: 'handle',
      wrong: 'publish'
    },
    {
      en: "Regular exercise and a balanced diet help people ____ good physical and mental health.",
      tr: 'maintain',
      wrong: 'negotiate'
    }
  ],
},
      
// ─────────────────────── QUIZ 25 — Change & Development ───────────────────────
[
  { en: 'alter',        tr: 'dəyişdirmək',       wrong: 'tənzimləmək',   wen: 'keep',          def: 'to change something slightly' },
  { en: 'change',       tr: 'dəyişmək',          wrong: 'fərqlənmək',    wen: 'stay',          def: 'to become different' },
  { en: 'convert',      tr: 'çevirmək',          wrong: 'dəyişdirmək',   wen: 'destroy',       def: 'to change something into a different form' },
  { en: 'develop',      tr: 'inkişaf etmək',     wrong: 'böyümək',       wen: 'decline',       def: 'to grow or improve over time' },
  { en: 'evolve',       tr: 'təkamül keçirmək',  wrong: 'dəyişmək',      wen: 'stay',          def: 'to develop gradually' },
  { en: 'expand',       tr: 'genişləndirmək',    wrong: 'böyütmək',      wen: 'reduce',        def: 'to become larger' },
  { en: 'extend',       tr: 'uzatmaq',           wrong: 'genişləndirmək', wen: 'shorten',       def: 'to make something longer' },
  { en: 'growth',       tr: 'artım',             wrong: 'inkişaf',       wen: 'decline',       def: 'the process of increasing in size or amount' },
  { en: 'improve',      tr: 'yaxşılaşdırmaq',    wrong: 'inkişaf etdirmək', wen: 'worsen',     def: 'to make something better' },
  { en: 'increase',     tr: 'artırmaq',          wrong: 'genişləndirmək', wen: 'reduce',        def: 'to become greater in amount' },
  { en: 'modify',       tr: 'dəyişiklik etmək',  wrong: 'tənzimləmək',   wen: 'destroy',       def: 'to change something slightly' },
  { en: 'progress',     tr: 'irəliləyiş',        wrong: 'inkişaf',       wen: 'decline',       def: 'the process of improving or developing' },
  { en: 'reform',       tr: 'islahat',           wrong: 'dəyişiklik',    wen: 'tradition',     def: 'a change for the better' },
  { en: 'revolution',   tr: 'inqilab',           wrong: 'islahat',       wen: 'stability',     def: 'a complete change in the way something is done' },
  { en: 'transform',    tr: 'çevirmək',          wrong: 'dəyişdirmək',   wen: 'destroy',       def: 'to change completely' },
  { en: 'transition',   tr: 'keçid',             wrong: 'dəyişiklik',    wen: 'stability',     def: 'the process of changing from one state to another' },
  { en: 'update',       tr: 'yeniləmək',         wrong: 'dəyişdirmək',   wen: 'delete',        def: 'to make something more modern' },
  { en: 'vary',         tr: 'dəyişmək',          wrong: 'fərqlənmək',    wen: 'stay',          def: 'to be different in size or amount' },
  { en: 'variation',    tr: 'fərqlilik',         wrong: 'dəyişiklik',    wen: 'sameness',      def: 'a change or difference in something' },
  { en: 'evolution',    tr: 'təkamül',           wrong: 'inkişaf',       wen: 'revolution',    def: 'the gradual development of something' }
],

// ─────────────────────── QUIZ 26 — Problems & Solutions ───────────────────────
[
  { en: 'challenge',    tr: 'çağırış',           wrong: 'çətinlik',      wen: 'gift',          def: 'a difficult task that tests your ability' },
  { en: 'crisis',       tr: 'böhran',            wrong: 'fəlakət',       wen: 'success',       def: 'a time of great difficulty or danger' },
  { en: 'difficulty',   tr: 'çətinlik',          wrong: 'problem',       wen: 'solution',      def: 'a problem or situation that is hard to deal with' },
  { en: 'issue',        tr: 'məsələ',            wrong: 'problem',       wen: 'answer',        def: 'a problem or important subject' },
  { en: 'obstacle',     tr: 'maneə',             wrong: 'çətinlik',      wen: 'help',          def: 'something that stops you from making progress' },
  { en: 'problem',      tr: 'problem',           wrong: 'məsələ',        wen: 'solution',      def: 'a difficult situation that needs to be solved' },
  { en: 'risk',         tr: 'risk',              wrong: 'təhlükə',       wen: 'safety',        def: 'the possibility of something bad happening' },
  { en: 'solution',     tr: 'həll yolu',         wrong: 'cavab',         wen: 'problem',       def: 'a way of solving a problem' },
  { en: 'threat',       tr: 'təhdid',            wrong: 'xəbərdarlıq',   wen: 'invitation',    def: 'a statement that someone will cause harm' },
  { en: 'trouble',      tr: 'problem',           wrong: 'çətinlik',      wen: 'solution',      def: 'a difficult or unpleasant situation' },
  { en: 'barrier',      tr: 'maneə',             wrong: 'sədd',          wen: 'help',          def: 'something that stops progress' },
  { en: 'conflict',     tr: 'münaqişə',          wrong: 'çəkişmə',       wen: 'cooperation',   def: 'a serious disagreement' },
  { en: 'confusion',    tr: 'çaşqınlıq',         wrong: 'anlaşılmazlıq', wen: 'clarity',       def: 'the state of not understanding something' },
  { en: 'failure',      tr: 'uğursuzluq',        wrong: 'məğlubiyyət',   wen: 'success',       def: 'lack of success' },
  { en: 'fault',        tr: 'səhv',              wrong: 'qüsur',         wen: 'strength',      def: 'a mistake or weakness' },
  { en: 'limitation',   tr: 'məhdudiyyət',       wrong: 'çatışmazlıq',   wen: 'advantage',     def: 'a restriction or weakness' },
  { en: 'shortage',     tr: 'çatışmazlıq',       wrong: 'kəsir',         wen: 'surplus',       def: 'a lack of something' },
  { en: 'weakness',     tr: 'zəiflik',           wrong: 'çatışmazlıq',   wen: 'strength',      def: 'a weak point or lack of strength' },
  { en: 'defect',       tr: 'qüsur',             wrong: 'xəta',          wen: 'quality',       def: 'a fault or imperfection' },
  { en: 'dilemma',      tr: 'dilemma',           wrong: 'seçim',         wen: 'solution',      def: 'a difficult choice between two possibilities' }
],

      // ─────────────────────── EXAM — Change & Development + Problems & Solutions (B2) ───────────────────────
{
  sentences: [
    {
      en: "The company plans to ____ its headquarters into a modern eco-friendly building.",
      tr: 'transform',
      wrong: 'obstacle'
    },
    {
      en: "Society has ____ rapidly over the last twenty years due to advances in technology.",
      tr: 'evolved',
      wrong: 'dilemma'
    },
    {
      en: "The government is considering a major ____ of the education system to meet future needs.",
      tr: 'reform',
      wrong: 'shortage'
    },
    {
      en: "Many traditional industries are struggling to ____ to the digital economy.",
      tr: 'adapt',
      wrong: 'defect'
    },
    {
      en: "The sudden ____ from a planned economy to a free market caused serious social problems.",
      tr: 'transition',
      wrong: 'barrier'
    },
    {
      en: "Climate change poses one of the greatest ____ facing humanity in the 21st century.",
      tr: 'challenges',
      wrong: 'variations'
    },
    {
      en: "The country is currently experiencing a severe ____ of skilled workers in the technology sector.",
      tr: 'shortage',
      wrong: 'revolution'
    },
    {
      en: "Financial ____ often force people to make difficult decisions about their future.",
      tr: 'limitations',
      wrong: 'progress'
    },
    {
      en: "The team had to ____ their original plan when they encountered unexpected problems.",
      tr: 'modify',
      wrong: 'failure'
    },
    {
      en: "The economic ____ of 2008 had long-lasting effects on global markets.",
      tr: 'crisis',
      wrong: 'growth'
    },
    {
      en: "Rapid population ____ in cities has created serious infrastructure problems.",
      tr: 'expansion',
      wrong: 'fault'
    },
    {
      en: "She faced a real ____: accept the job abroad or stay with her family.",
      tr: 'dilemma',
      wrong: 'variation'
    },
    {
      en: "The new manager wants to ____ the company's image and attract younger customers.",
      tr: 'update',
      wrong: 'weakness'
    },
    {
      en: "Language teachers often ____ their methods according to the needs of each group.",
      tr: 'adapt',
      wrong: 'defect'
    },
    {
      en: "Overcoming financial and technical ____ is part of every successful startup story.",
      tr: 'obstacles',
      wrong: 'reform'
    },
    {
      en: "The invention of the internet caused a complete ____ in the way people communicate.",
      tr: 'revolution',
      wrong: 'confusion'
    },
    {
      en: "We need to find a permanent ____ to the ongoing water supply problem.",
      tr: 'solution',
      wrong: 'progress'
    },
    {
      en: "There is considerable ____ in how different cultures celebrate important life events.",
      tr: 'variation',
      wrong: 'crisis'
    },
    {
      en: "The main ____ of the current system is its inability to adapt to rapid change.",
      tr: 'weakness',
      wrong: 'extension'
    },
    {
      en: "Continuous learning is essential for personal and professional ____ in today's world.",
      tr: 'development',
      wrong: 'threat'
    }
  ],
},
      
// ─────────────────────── QUIZ 27 — Government & Politics ───────────────────────
[
  { en: 'authority',    tr: 'səlahiyyət',        wrong: 'hökumət',       wen: 'freedom',       def: 'the power or right to make decisions and control people' },
  { en: 'campaign',     tr: 'kampaniya',         wrong: 'seçki',         wen: 'holiday',       def: 'a planned series of activities to achieve a political goal' },
  { en: 'candidate',    tr: 'namizəd',           wrong: 'deputat',       wen: 'voter',         def: 'a person who is trying to be elected' },
  { en: 'democracy',    tr: 'demokratiya',       wrong: 'respublika',    wen: 'dictatorship',  def: 'a system of government where people vote' },
  { en: 'election',     tr: 'seçki',             wrong: 'referendum',    wen: 'festival',      def: 'the process of choosing a government by voting' },
  { en: 'government',   tr: 'hökumət',           wrong: 'parlament',     wen: 'company',       def: 'the group of people who control a country' },
  { en: 'minister',     tr: 'nazir',             wrong: 'deputat',       wen: 'teacher',       def: 'a senior member of the government' },
  { en: 'parliament',   tr: 'parlament',         wrong: 'hökumət',       wen: 'school',        def: 'the group of people who make laws' },
  { en: 'policy',       tr: 'siyasət',           wrong: 'qanun',         wen: 'hobby',         def: 'a plan of action by a government or organization' },
  { en: 'political',    tr: 'siyasi',            wrong: 'hüquqi',        wen: 'medical',       def: 'connected with politics and government' },
  { en: 'politician',   tr: 'siyasətçi',         wrong: 'deputat',       wen: 'scientist',     def: 'a person who works in politics' },
  { en: 'president',    tr: 'prezident',         wrong: 'baş nazir',     wen: 'manager',       def: 'the head of state in many countries' },
  { en: 'reform',       tr: 'islahat',           wrong: 'dəyişiklik',    wen: 'tradition',     def: 'a change for the better in a system' },
  { en: 'regulation',   tr: 'tənzimləmə',        wrong: 'qanun',         wen: 'freedom',       def: 'an official rule or law' },
  { en: 'rights',       tr: 'hüquqlar',          wrong: 'azadlıqlar',    wen: 'duties',        def: 'things that people are entitled to by law' },
  { en: 'state',        tr: 'dövlət',            wrong: 'hökumət',       wen: 'family',        def: 'an organized political community' },
  { en: 'vote',         tr: 'səs vermək',        wrong: 'seçmək',        wen: 'buy',           def: 'to choose someone in an election' },
  { en: 'opposition',   tr: 'müxalifət',         wrong: 'rəqib',         wen: 'support',       def: 'the main political party that is not in power' },
  { en: 'protest',      tr: 'etiraz',            wrong: 'nümayiş',       wen: 'party',         def: 'a public demonstration against something' },
  { en: 'democracy',    tr: 'demokratiya',       wrong: 'monarxiya',     wen: 'dictatorship',  def: 'a system of government where people vote' }
],
      
// ─────────────────────── QUIZ 28 — Law & Justice ───────────────────────
[
  { en: 'court',        tr: 'məhkəmə',           wrong: 'hüquq bürosu',  wen: 'school',        def: 'the place where legal cases are judged' },
  { en: 'crime',        tr: 'cinayət',           wrong: 'hüquq pozuntusu', wen: 'sport',       def: 'an illegal action that can be punished by law' },
  { en: 'guilty',       tr: 'günahkar',          wrong: 'şübhəli',       wen: 'innocent',      def: 'having done something illegal or wrong' },
  { en: 'innocent',     tr: 'günahsız',          wrong: 'azad',          wen: 'guilty',        def: 'not having done anything wrong or illegal' },
  { en: 'judge',        tr: 'hakim',             wrong: 'prokuror',      wen: 'doctor',        def: 'the person who makes decisions in a court of law' },
  { en: 'jury',         tr: 'münsiflər heyəti',  wrong: 'şahidlər',      wen: 'audience',      def: 'a group of people who decide if someone is guilty in court' },
  { en: 'justice',      tr: 'ədalət',            wrong: 'qanun',         wen: 'injustice',     def: 'fair treatment according to the law' },
  { en: 'law',          tr: 'qanun',             wrong: 'hüquq',         wen: 'game',          def: 'the official rules of a country' },
  { en: 'legal',        tr: 'qanuni',            wrong: 'rəsmi',         wen: 'illegal',       def: 'allowed by the law' },
  { en: 'offence',      tr: 'hüquq pozuntusu',   wrong: 'cinayət',       wen: 'achievement',   def: 'a crime or illegal action' },
  { en: 'penalty',      tr: 'cərimə',            wrong: 'cəza',          wen: 'reward',        def: 'a punishment for breaking a rule or law' },
  { en: 'prison',       tr: 'həbsxana',          wrong: 'polis bölməsi', wen: 'hospital',      def: 'a building where criminals are kept as punishment' },
  { en: 'punishment',   tr: 'cəza',              wrong: 'həbs',          wen: 'reward',        def: 'a penalty for breaking the law' },
  { en: 'regulation',   tr: 'tənzimləmə',        wrong: 'qanun',         wen: 'freedom',       def: 'an official rule or law' },
  { en: 'rights',       tr: 'hüquqlar',          wrong: 'azadlıqlar',    wen: 'duties',        def: 'things that people are entitled to by law' },
  { en: 'rule',         tr: 'qayda',             wrong: 'qanun',         wen: 'suggestion',    def: 'an official instruction about what you must or must not do' },
  { en: 'trial',        tr: 'məhkəmə prosesi',   wrong: 'sorğu',         wen: 'party',         def: 'the legal process of judging someone in court' },
  { en: 'accuse',       tr: 'ittiham etmək',     wrong: 'suçlamaq',      wen: 'praise',        def: 'to say that someone has done something wrong' },
  { en: 'evidence',     tr: 'sübut',             wrong: 'şahidlik',      wen: 'opinion',       def: 'facts or information that prove something is true' },
  { en: 'witness',      tr: 'şahid',             wrong: 'zərərçəkən',    wen: 'criminal',      def: 'a person who sees a crime happen' }
],

// ─────────────────────── EXAM — Government, Politics, Law & Justice (B2) ───────────────────────
{
  sentences: [
    {
      en: "The new government has promised to introduce major economic ____ to fight corruption.",
      tr: 'reforms',
      wrong: 'witness'
    },
    {
      en: "In a true ____, power ultimately belongs to the people through free and fair elections.",
      tr: 'democracy',
      wrong: 'penalty'
    },
    {
      en: "The opposition party launched a strong ____ ahead of the upcoming general election.",
      tr: 'campaign',
      wrong: 'jury'
    },
    {
      en: "The president has the constitutional ____ to veto bills passed by parliament.",
      tr: 'authority',
      wrong: 'evidence'
    },
    {
      en: "All citizens over the age of 18 have the right to ____ in national elections.",
      tr: 'vote',
      wrong: 'prison'
    },
    {
      en: "The main ____ party strongly criticised the government's new tax policy.",
      tr: 'opposition',
      wrong: 'trial'
    },
    {
      en: "The court found the defendant not ____ due to lack of sufficient evidence.",
      tr: 'guilty',
      wrong: 'regulation'
    },
    {
      en: "The case will go to ____ next month, where a jury will hear all the evidence.",
      tr: 'trial',
      wrong: 'campaign'
    },
    {
      en: "Freedom of speech is one of the fundamental ____ protected by the constitution.",
      tr: 'rights',
      wrong: 'candidate'
    },
    {
      en: "The judge's decision was widely regarded as a victory for social ____.",
      tr: 'justice',
      wrong: 'democracy'
    },
    {
      en: "New environmental ____ have been introduced to reduce industrial pollution.",
      tr: 'regulations',
      wrong: 'protest'
    },
    {
      en: "Thousands of people took part in a peaceful ____ against the new law.",
      tr: 'protest',
      wrong: 'minister'
    },
    {
      en: "The ____ must remain independent from political influence to ensure fair trials.",
      tr: 'judiciary',
      wrong: 'election'
    },
    {
      en: "She has been a leading ____ in the fight for women's rights for over twenty years.",
      tr: 'politician',
      wrong: 'offence'
    },
    {
      en: "The police are still gathering ____ in connection with the recent bank robbery.",
      tr: 'evidence',
      wrong: 'reform'
    },
    {
      en: "The new prime ____ announced a major education reform during his first speech.",
      tr: 'minister',
      wrong: 'court'
    },
    {
      en: "Parliament is expected to pass the new immigration bill before the end of the year.",
      tr: 'parliament',
      wrong: 'guilty'
    },
    {
      en: "He was called as a key ____ in the high-profile corruption case.",
      tr: 'witness',
      wrong: 'policy'
    },
    {
      en: "The government’s foreign ____ has been criticised by both opposition parties.",
      tr: 'policy',
      wrong: 'jury'
    },
    {
      en: "Anyone accused of a serious ____ has the right to a fair trial and legal representation.",
      tr: 'offence',
      wrong: 'democracy'
    }
  ],
},
// ─────────────────────── QUIZ 29 — Work & Employment ───────────────────────
[
  { en: 'application',  tr: 'müraciət',          wrong: 'sənəd',         wen: 'holiday',       def: 'a formal request for a job' },
  { en: 'career',       tr: 'karyera',           wrong: 'peşə',          wen: 'hobby',         def: 'the series of jobs you have during your working life' },
  { en: 'colleague',    tr: 'iş yoldaşı',        wrong: 'tərəfdaş',      wen: 'customer',      def: 'a person you work with' },
  { en: 'contract',     tr: 'müqavilə',          wrong: 'sənəd',         wen: 'gift',          def: 'a formal legal agreement about work' },
  { en: 'CV',           tr: 'CV / tərcümeyi-hal', wrong: 'müraciət məktubu', wen: 'novel',     def: 'a document that shows your education and work experience' },
  { en: 'employee',     tr: 'işçi',              wrong: 'işəgötürən',    wen: 'customer',      def: 'a person who works for a company' },
  { en: 'employer',     tr: 'işəgötürən',        wrong: 'işçi',          wen: 'student',       def: 'a person or company that gives jobs to people' },
  { en: 'employment',   tr: 'məşğulluq',         wrong: 'iş yeri',       wen: 'unemployment',  def: 'the state of having a paid job' },
  { en: 'experience',   tr: 'təcrübə',           wrong: 'bilik',         wen: 'theory',        def: 'knowledge and skill gained through doing something' },
  { en: 'interview',    tr: 'müsahibə',          wrong: 'görüş',         wen: 'party',         def: 'a formal meeting where someone is asked questions for a job' },
  { en: 'job',          tr: 'iş',                wrong: 'vəzifə',        wen: 'holiday',       def: 'regular paid work' },
  { en: 'occupation',   tr: 'məşğuliyyət',       wrong: 'peşə',          wen: 'hobby',         def: 'a person’s job or profession' },
  { en: 'profession',   tr: 'peşə',              wrong: 'vəzifə',        wen: 'hobby',         def: 'a job that needs special training and education' },
  { en: 'promotion',    tr: 'vəzifə yüksəlişi',  wrong: 'mükafat',       wen: 'demotion',      def: 'moving to a higher position in a company' },
  { en: 'retire',       tr: 'təqaüdə çıxmaq',    wrong: 'işdən çıxmaq',   wen: 'start',         def: 'to stop working because of old age' },
  { en: 'retirement',   tr: 'təqaüd dövrü',      wrong: 'istirahət',     wen: 'beginning',     def: 'the time when you stop working because of old age' },
  { en: 'salary',       tr: 'maaş',              wrong: 'əmək haqqı',     wen: 'expense',       def: 'money paid to someone regularly for their work' },
  { en: 'staff',        tr: 'heyət',             wrong: 'işçilər',       wen: 'customers',     def: 'the people who work for an organization' },
  { en: 'unemployed',   tr: 'işsiz',             wrong: 'boş',           wen: 'busy',          def: 'without a paid job' },
  { en: 'experience',   tr: 'iş təcrübəsi',      wrong: 'bilik',         wen: 'theory',        def: 'knowledge and skill gained through doing something' }
],
// ─────────────────────── QUIZ 30 — Success & Achievement ───────────────────────
[
  { en: 'achieve',      tr: 'nail olmaq',        wrong: 'qazanmaq',      wen: 'lose',          def: 'to succeed in reaching a goal' },
  { en: 'achievement',  tr: 'nailiyyət',         wrong: 'uğur',          wen: 'failure',       def: 'something successful that you have done' },
  { en: 'award',        tr: 'mükafat',           wrong: 'medal',         wen: 'punishment',    def: 'a prize given for an achievement' },
  { en: 'champion',     tr: 'çempion',           wrong: 'qalib',         wen: 'loser',         def: 'the winner of a competition' },
  { en: 'championship', tr: 'çempionat',         wrong: 'turnir',        wen: 'festival',      def: 'a competition to find the best player or team' },
  { en: 'medal',        tr: 'medal',             wrong: 'kubuk',         wen: 'book',          def: 'a metal disc given as a prize for winning' },
  { en: 'prize',        tr: 'mükafat',           wrong: 'medal',         wen: 'punishment',    def: 'something given to the winner of a competition' },
  { en: 'success',      tr: 'uğur',              wrong: 'nailiyyət',     wen: 'failure',       def: 'the achievement of a goal' },
  { en: 'successful',   tr: 'uğurlu',            wrong: 'bacarıqlı',     wen: 'unsuccessful',  def: 'achieving the results you want' },
  { en: 'talent',       tr: 'istedad',           wrong: 'bacarıq',       wen: 'weakness',      def: 'a natural ability to do something well' },
  { en: 'victory',      tr: 'qələbə',            wrong: 'nailiyyət',     wen: 'defeat',        def: 'the act of winning a game or competition' },
  { en: 'win',          tr: 'qazanmaq',          wrong: 'udmaq',         wen: 'lose',          def: 'to be successful in a competition' },
  { en: 'winner',       tr: 'qalib',             wrong: 'çempion',       wen: 'loser',         def: 'a person who wins a competition' },
  { en: 'accomplish',   tr: 'başa çatdırmaq',    wrong: 'həyata keçirmək', wen: 'fail',        def: 'to succeed in doing something difficult' },
  { en: 'ambition',     tr: 'ambisiya',          wrong: 'məqsəd',        wen: 'laziness',      def: 'a strong desire to achieve success' },
  { en: 'goal',         tr: 'məqsəd',            wrong: 'hədəf',         wen: 'problem',       def: 'something you want to achieve' },
  { en: 'progress',     tr: 'irəliləyiş',        wrong: 'inkişaf',       wen: 'decline',       def: 'the process of improving or developing' },
  { en: 'recognition',  tr: 'tanınma',           wrong: 'mükafat',       wen: 'ignorance',     def: 'public praise or attention for an achievement' },
  { en: 'reward',       tr: 'mükafat',           wrong: 'hədiyyə',       wen: 'punishment',    def: 'something given because of good work' },
  { en: 'target',       tr: 'hədəf',             wrong: 'məqsəd',        wen: 'problem',       def: 'a goal or result you want to achieve' }
],

      // ─────────────────────── EXAM — Work & Employment + Success & Achievement (B2) ───────────────────────
{
  sentences: [
    {
      en: "All applicants must submit a detailed ____ along with a cover letter.",
      tr: 'CV',
      wrong: 'medal'
    },
    {
      en: "After working for the same company for 35 years, he decided to ____ at the age of 62.",
      tr: 'retire',
      wrong: 'ambition'
    },
    {
      en: "The company offers a competitive ____ and excellent opportunities for career development.",
      tr: 'salary',
      wrong: 'target'
    },
    {
      en: "She had a very successful ____, rising from assistant to managing director in just ten years.",
      tr: 'career',
      wrong: 'obstacle'
    },
    {
      en: "The human resources department received over 200 ____ for the new marketing position.",
      tr: 'applications',
      wrong: 'talent'
    },
    {
      en: "Good communication skills and teamwork are essential when working with ____.",
      tr: 'colleagues',
      wrong: 'goals'
    },
    {
      en: "Before signing any ____, it is important to read all the terms and conditions carefully.",
      tr: 'contract',
      wrong: 'victory'
    },
    {
      en: "After several months of unemployment, he finally received a job ____ from a multinational company.",
      tr: 'offer',
      wrong: 'recognition'
    },
    {
      en: "The company promotes a culture where hard work and dedication are properly ____.",
      tr: 'rewarded',
      wrong: 'unemployed'
    },
    {
      en: "She has always been very ____ and set herself high targets from an early age.",
      tr: 'ambitious',
      wrong: 'staff'
    },
    {
      en: "Winning the championship was the greatest ____ of his sporting career.",
      tr: 'achievement',
      wrong: 'profession'
    },
    {
      en: "The team worked extremely hard and eventually ____ their goal of doubling sales.",
      tr: 'achieved',
      wrong: 'interview'
    },
    {
      en: "The young musician finally gained international ____ after releasing her second album.",
      tr: 'recognition',
      wrong: 'employer'
    },
    {
      en: "Setting clear and realistic ____ is the first step towards long-term success.",
      tr: 'goals',
      wrong: 'retirement'
    },
    {
      en: "Many people consider financial independence to be the true measure of ____.",
      tr: 'success',
      wrong: 'contract'
    },
    {
      en: "She is a highly ____ businesswoman who has built a global brand from nothing.",
      tr: 'successful',
      wrong: 'unemployed'
    },
    {
      en: "Natural ____ is important, but hard work and determination are what bring real results.",
      tr: 'talent',
      wrong: 'application'
    },
    {
      en: "After many years of effort, the project finally reached its main ____ ahead of schedule.",
      tr: 'target',
      wrong: 'colleague'
    },
    {
      en: "The whole ____ celebrated when the company announced record profits for the year.",
      tr: 'staff',
      wrong: 'achievement'
    },
    {
      en: "He received a special ____ for his outstanding contribution to the field of medical research.",
      tr: 'award',
      wrong: 'career'
    }
  ],
},
      
      // ─────────────────────── QUIZ 31 — Negative Emotions & States ───────────────────────
[
  { en: 'angry',        tr: 'əsəbi',             wrong: 'hirslı',        wen: 'calm',          def: 'feeling strong displeasure or annoyance' },
  { en: 'annoyed',      tr: 'əsəbləşmiş',        wrong: 'yorulmuş',      wen: 'pleased',       def: 'slightly angry or irritated' },
  { en: 'anxious',      tr: 'narahat',           wrong: 'gərgin',        wen: 'relaxed',       def: 'worried or nervous about something that might happen' },
  { en: 'ashamed',      tr: 'utanmış',           wrong: 'xəcalətli',     wen: 'proud',         def: 'feeling embarrassed or guilty about something you did' },
  { en: 'confused',     tr: 'çaşqın',            wrong: 'narahat',       wen: 'certain',       def: 'unable to understand something clearly' },
  { en: 'depressed',    tr: 'depressiyada olan', wrong: 'kədərli',       wen: 'cheerful',      def: 'feeling very sad and without hope for a long time' },
  { en: 'disappointed', tr: 'məyus',             wrong: 'üzülmüş',       wen: 'excited',       def: 'sad because something was not as good as expected' },
  { en: 'embarrassed',  tr: 'utanmış',           wrong: 'çaşqın',        wen: 'proud',         def: 'feeling ashamed or uncomfortable in front of others' },
  { en: 'frustrated',   tr: 'əsəbləşmiş',        wrong: 'bezmiş',        wen: 'satisfied',     def: 'feeling annoyed because you cannot achieve what you want' },
  { en: 'furious',      tr: 'qəzəbli',           wrong: 'əsəbi',         wen: 'calm',          def: 'extremely angry' },
  { en: 'lonely',       tr: 'tənha',             wrong: 'kədərli',       wen: 'popular',       def: 'feeling sad because you are alone' },
  { en: 'nervous',      tr: 'gərgin',            wrong: 'narahat',       wen: 'relaxed',       def: 'worried or anxious about something' },
  { en: 'pessimistic',  tr: 'bədbin',            wrong: 'ümidsiz',       wen: 'optimistic',    def: 'expecting bad things to happen' },
  { en: 'sad',          tr: 'kədərli',           wrong: 'üzülmüş',       wen: 'happy',         def: 'feeling unhappy' },
  { en: 'scared',       tr: 'qorxmuş',           wrong: 'narahat',       wen: 'brave',         def: 'feeling afraid or scared' },
  { en: 'shocked',      tr: 'şoka düşmüş',       wrong: 'heyrətlənmiş',  wen: 'bored',         def: 'very surprised and upset by something' },
  { en: 'stressed',     tr: 'stress altında',    wrong: 'gərgin',        wen: 'relaxed',       def: 'feeling worried and unable to relax' },
  { en: 'tired',        tr: 'yorulmuş',          wrong: 'bezmiş',        wen: 'energetic',     def: 'feeling the need to rest' },
  { en: 'upset',        tr: 'narahat',           wrong: 'kədərli',       wen: 'relaxed',       def: 'unhappy and disappointed about something' },
  { en: 'worried',      tr: 'narahat',           wrong: 'qayğılı',       wen: 'carefree',      def: 'feeling anxious about something bad that might happen' }
],

// ─────────────────────── QUIZ 32 — Positive Qualities ───────────────────────
[
  { en: 'brave',        tr: 'cəsur',             wrong: 'qorxmaz',       wen: 'cowardly',      def: 'not afraid to face danger' },
  { en: 'calm',         tr: 'sakit',             wrong: 'rahat',         wen: 'nervous',       def: 'peaceful and not excited or angry' },
  { en: 'cheerful',     tr: 'şən',               wrong: 'sevincli',      wen: 'depressed',     def: 'happy and in a good mood' },
  { en: 'confident',    tr: 'özünə inamlı',      wrong: 'cəsur',         wen: 'shy',           def: 'feeling sure about your own abilities' },
  { en: 'creative',     tr: 'yaradıcı',          wrong: 'istedadlı',     wen: 'routine',       def: 'able to produce new and original ideas' },
  { en: 'determined',   tr: 'qərarlı',           wrong: 'iddialı',       wen: 'lazy',          def: 'having a strong will to achieve something' },
  { en: 'energetic',    tr: 'enerjili',          wrong: 'fəal',          wen: 'tired',         def: 'full of energy and enthusiasm' },
  { en: 'enthusiastic', tr: 'coşğun',            wrong: 'həvəsli',       wen: 'bored',         def: 'showing great interest and excitement' },
  { en: 'friendly',     tr: 'mehriban',          wrong: 'xeyirxah',      wen: 'unfriendly',    def: 'kind and pleasant to others' },
  { en: 'generous',     tr: 'səxavətli',         wrong: 'xeyirxah',      wen: 'selfish',       def: 'willing to give more than is usual' },
  { en: 'honest',       tr: 'dürüst',            wrong: 'etibarlı',      wen: 'dishonest',     def: 'always telling the truth' },
  { en: 'kind',         tr: 'xeyirxah',          wrong: 'mehriban',      wen: 'cruel',         def: 'friendly, generous and caring' },
  { en: 'optimistic',   tr: 'nikbin',            wrong: 'müsbət',        wen: 'pessimistic',   def: 'expecting good things to happen' },
  { en: 'patient',      tr: 'səbirli',           wrong: 'sakit',         wen: 'impatient',     def: 'able to wait calmly' },
  { en: 'polite',       tr: 'nəzakətli',         wrong: 'hörmətli',      wen: 'rude',          def: 'showing good manners and respect' },
  { en: 'reliable',     tr: 'etibarlı',          wrong: 'sadiq',         wen: 'unreliable',    def: 'able to be trusted' },
  { en: 'responsible',  tr: 'məsuliyyətli',      wrong: 'etibarlı',      wen: 'careless',      def: 'having a duty to deal with something' },
  { en: 'sensible',     tr: 'ağıllı',            wrong: 'rasional',      wen: 'foolish',       def: 'showing good judgement' },
  { en: 'talented',     tr: 'istedadlı',         wrong: 'bacarıqlı',     wen: 'untalented',    def: 'having a natural ability to do something well' },
  { en: 'wise',         tr: 'müdrik',            wrong: 'ağıllı',        wen: 'stupid',        def: 'having experience and good judgement' }
],

      // ─────────────────────── EXAM — Negative Emotions & Positive Qualities (B2) ───────────────────────
{
  sentences: [
    {
      en: "She felt extremely ____ when she realised she had sent the private email to the wrong person.",
      tr: 'embarrassed',
      wrong: 'energetic'
    },
    {
      en: "He was ____ with his team’s performance because they had not prepared properly for the presentation.",
      tr: 'frustrated',
      wrong: 'generous'
    },
    {
      en: "After failing the exam twice, he started to feel ____ about his chances of getting into university.",
      tr: 'pessimistic',
      wrong: 'polite'
    },
    {
      en: "The news of the accident left the whole family feeling shocked and deeply ____.",
      tr: 'upset',
      wrong: 'talented'
    },
    {
      en: "Even though she was very ____ before the interview, she managed to answer all the questions confidently.",
      tr: 'nervous',
      wrong: 'wise'
    },
    {
      en: "Living alone in a new city for the first time made her feel incredibly ____.",
      tr: 'lonely',
      wrong: 'responsible'
    },
    {
      en: "He was ____ when his best friend betrayed his trust and shared his secret.",
      tr: 'furious',
      wrong: 'creative'
    },
    {
      en: "Parents should try to remain ____ when dealing with difficult teenagers.",
      tr: 'patient',
      wrong: 'depressed'
    },
    {
      en: "She is a very ____ person who always looks for the best possible outcome in any situation.",
      tr: 'optimistic',
      wrong: 'ashamed'
    },
    {
      en: "It was very ____ of her to donate most of her savings to help children in need.",
      tr: 'generous',
      wrong: 'anxious'
    },
    {
      en: "A good leader should stay ____ even during times of crisis and uncertainty.",
      tr: 'calm',
      wrong: 'disappointed'
    },
    {
      en: "He has always been very ____ and never gives up when facing challenges.",
      tr: 'determined',
      wrong: 'confused'
    },
    {
      en: "Young children are often more ____ and open to new ideas than adults.",
      tr: 'creative',
      wrong: 'stressed'
    },
    {
      en: "You can always trust her because she is a highly ____ and honest colleague.",
      tr: 'reliable',
      wrong: 'annoyed'
    },
    {
      en: "The team felt ____ after losing the final match in the last minute.",
      tr: 'disappointed',
      wrong: 'sensible'
    },
    {
      en: "It is important to be ____ when giving feedback so that it is not taken as rude.",
      tr: 'polite',
      wrong: 'lonely'
    },
    {
      en: "She felt deeply ____ after lying to her parents about where she had been.",
      tr: 'ashamed',
      wrong: 'enthusiastic'
    },
    {
      en: "The constant pressure at work left him feeling mentally and physically ____.",
      tr: 'stressed',
      wrong: 'brave'
    },
    {
      en: "A truly ____ person thinks carefully before making important decisions.",
      tr: 'sensible',
      wrong: 'furious'
    },
    {
      en: "Despite the difficulties, she remained ____ and continued working towards her long-term goals.",
      tr: 'determined',
      wrong: 'worried'
    }
  ],
},
      
// ─────────────────────── QUIZ 33 — Media & Communication ───────────────────────
[
  { en: 'advertisement', tr: 'reklam',           wrong: 'elan',          wen: 'secret',        def: 'a notice or film that tries to persuade people to buy something' },
  { en: 'article',      tr: 'məqalə',            wrong: 'xəbər',         wen: 'poem',          def: 'a piece of writing in a newspaper or magazine' },
  { en: 'broadcast',    tr: 'yayımlamaq',        wrong: 'nəşr etmək',    wen: 'hide',          def: 'to send out radio or television programmes' },
  { en: 'channel',      tr: 'kanal',             wrong: 'proqram',       wen: 'road',          def: 'a television or radio station' },
  { en: 'documentary',  tr: 'sənədli film',      wrong: 'serial',        wen: 'comedy',        def: 'a film or programme that gives facts about real events' },
  { en: 'editor',       tr: 'redaktor',          wrong: 'jurnalist',     wen: 'teacher',       def: 'a person who checks and corrects writing' },
  { en: 'headline',     tr: 'başlıq',            wrong: 'xəbər',         wen: 'price',         def: 'the title of a newspaper story' },
  { en: 'internet',     tr: 'internet',          wrong: 'şəbəkə',        wen: 'road',          def: 'the global computer network' },
  { en: 'journalist',   tr: 'jurnalist',         wrong: 'müxbir',        wen: 'scientist',     def: 'a person who writes news stories' },
  { en: 'magazine',     tr: 'jurnal',            wrong: 'qəzet',         wen: 'book',          def: 'a weekly or monthly publication with articles and pictures' },
  { en: 'media',        tr: 'media',             wrong: 'mətbuat',       wen: 'school',        def: 'television, radio, newspapers and the internet' },
  { en: 'news',         tr: 'xəbər',             wrong: 'məlumat',       wen: 'fiction',       def: 'information about recent events' },
  { en: 'newspaper',    tr: 'qəzet',             wrong: 'jurnal',        wen: 'book',          def: 'a daily publication with news' },
  { en: 'programme',    tr: 'proqram',           wrong: 'kanal',         wen: 'menu',          def: 'a television or radio show' },
  { en: 'publish',      tr: 'nəşr etmək',        wrong: 'yaymaq',        wen: 'hide',          def: 'to make a book or information available to the public' },
  { en: 'reporter',     tr: 'müxbir',            wrong: 'jurnalist',     wen: 'scientist',     def: 'a person who writes or reports news' },
  { en: 'social media', tr: 'sosial media',      wrong: 'internet',      wen: 'book',          def: 'websites where people share information and photos' },
  { en: 'television',   tr: 'televiziya',        wrong: 'radio',         wen: 'newspaper',     def: 'the system of broadcasting moving pictures' },
  { en: 'website',      tr: 'vebsayt',           wrong: 'proqram',       wen: 'book',          def: 'a set of pages on the internet' },
  { en: 'blog',         tr: 'bloq',              wrong: 'vebsayt',       wen: 'novel',         def: 'a personal website with regular posts' }
],

// ─────────────────────── QUIZ 34 — Environment & Nature ───────────────────────
[
  { en: 'climate',      tr: 'iqlim',             wrong: 'hava şəraiti',  wen: 'economy',       def: 'the normal weather conditions in a particular region' },
  { en: 'conservation', tr: 'qorunma',           wrong: 'mühafizə',      wen: 'destruction',   def: 'the protection of the environment' },
  { en: 'disaster',     tr: 'fəlakət',           wrong: 'bəla',          wen: 'success',       def: 'a sudden event that causes great damage' },
  { en: 'earthquake',   tr: 'zəlzələ',           wrong: 'daşqın',        wen: 'festival',      def: 'a sudden shaking of the ground' },
  { en: 'environment',  tr: 'ətraf mühit',       wrong: 'təbiət',        wen: 'business',      def: 'the natural world of land, sea, air, plants and animals' },
  { en: 'flood',        tr: 'daşqın',            wrong: 'fırtına',       wen: 'party',         def: 'when a lot of water covers land that is normally dry' },
  { en: 'global warming', tr: 'qlobal istiləşmə', wrong: 'iqlim dəyişikliyi', wen: 'cooling',   def: 'the increase in the Earth’s temperature' },
  { en: 'greenhouse',   tr: 'istixana',          wrong: 'bağça',         wen: 'hospital',      def: 'a glass building used for growing plants' },
  { en: 'nature',       tr: 'təbiət',            wrong: 'mühit',         wen: 'city',          def: 'the natural world of plants, animals, and landscapes' },
  { en: 'pollution',    tr: 'çirklənmə',         wrong: 'tullantı',      wen: 'cleanliness',   def: 'the presence of harmful substances in the environment' },
  { en: 'recycle',      tr: 'təkrar emal etmək', wrong: 'yenidən istifadə', wen: 'throw away',  def: 'to process used materials so they can be used again' },
  { en: 'renewable',    tr: 'bərpa olunan',      wrong: 'alternativ',    wen: 'fossil',        def: 'energy that can be used without running out' },
  { en: 'solar',        tr: 'günəş enerjisi',    wrong: 'külək enerjisi', wen: 'nuclear',       def: 'using the power of the sun' },
  { en: 'storm',        tr: 'fırtına',           wrong: 'qasırğa',       wen: 'party',         def: 'bad weather with strong winds and rain' },
  { en: 'sustainable',  tr: 'davamlı',           wrong: 'ekoloji',       wen: 'temporary',     def: 'able to continue for a long time without damaging the environment' },
  { en: 'temperature',  tr: 'temperatur',        wrong: 'istilik',       wen: 'speed',         def: 'how hot or cold something is' },
  { en: 'tsunami',      tr: 'sunami',            wrong: 'dalğa',         wen: 'festival',      def: 'a very large and dangerous wave caused by an earthquake' },
  { en: 'waste',        tr: 'tullantı',          wrong: 'zibil',         wen: 'resource',      def: 'unwanted materials that are thrown away' },
  { en: 'wildlife',     tr: 'vəhşi təbiət',      wrong: 'fauna',         wen: 'technology',    def: 'wild animals and plants living in their natural environment' },
  { en: 'atmosphere',   tr: 'atmosfer',          wrong: 'hava qatı',     wen: 'ocean',         def: 'the layer of gases that surrounds the Earth' }
],
// ─────────────────────── QUIZ 35 — Health & Medicine ───────────────────────
[
  { en: 'cancer',       tr: 'xərçəng',           wrong: 'şiş',           wen: 'cold',          def: 'a serious disease in which cells grow uncontrollably' },
  { en: 'disease',      tr: 'xəstəlik',          wrong: 'virus',         wen: 'health',        def: 'an illness that affects the body or mind' },
  { en: 'doctor',       tr: 'həkim',             wrong: 'cərrah',        wen: 'teacher',       def: 'a person who treats sick people' },
  { en: 'emergency',    tr: 'fövqəladə hal',     wrong: 'təcili yardım',  wen: 'meeting',       def: 'a sudden dangerous situation needing immediate help' },
  { en: 'fitness',      tr: 'fiziki forma',      wrong: 'sağlamlıq',     wen: 'wealth',        def: 'the state of being physically healthy and strong' },
  { en: 'heal',         tr: 'sağalmaq',          wrong: 'müalicə olmaq', wen: 'worsen',        def: 'to become healthy again after being ill' },
  { en: 'health',       tr: 'sağlamlıq',         wrong: 'güc',           wen: 'money',         def: 'the condition of your body and mind' },
  { en: 'hospital',     tr: 'xəstəxana',         wrong: 'klinika',       wen: 'school',        def: 'a place where sick or injured people are treated' },
  { en: 'illness',      tr: 'xəstəlik',          wrong: 'əziyyət',       wen: 'success',       def: 'a disease or period of being ill' },
  { en: 'injury',       tr: 'xəsarət',           wrong: 'yara',          wen: 'healing',       def: 'physical harm or damage to the body' },
  { en: 'medicine',     tr: 'dərman',            wrong: 'müalicə',       wen: 'food',          def: 'a substance used to treat illness' },
  { en: 'mental health',tr: 'zehni sağlamlıq',   wrong: 'psixoloji vəziyyət', wen: 'physical health', def: 'the condition of your mind and emotions' },
  { en: 'nurse',        tr: 'tibb bacısı',       wrong: 'həkim',         wen: 'teacher',       def: 'a person who cares for sick people' },
  { en: 'patient',      tr: 'xəstə',             wrong: 'müraciət edən', wen: 'doctor',        def: 'a person who is receiving medical treatment' },
  { en: 'surgery',      tr: 'əməliyyat',         wrong: 'müalicə',       wen: 'medicine',      def: 'medical treatment in which a doctor cuts open the body' },
  { en: 'symptom',      tr: 'simptom',           wrong: 'diaqnoz',       wen: 'medicine',      def: 'a sign of an illness or disease' },
  { en: 'therapy',      tr: 'terapiya',          wrong: 'müalicə',       wen: 'operation',     def: 'treatment to help someone with a problem' },
  { en: 'treatment',    tr: 'müalicə',           wrong: 'əməliyyat',      wen: 'operation',     def: 'the process of treating an illness or injury' },
  { en: 'virus',        tr: 'virus',             wrong: 'bakteriya',     wen: 'bacteria',      def: 'a very small organism that can cause disease' },
  { en: 'wound',        tr: 'yara',              wrong: 'xəsarət',       wen: 'healing',       def: 'an injury to the body caused by violence' }
],

      // ─────────────────────── EXAM — Media, Environment, Health & Medicine (B2) ───────────────────────
{
  sentences: [
    {
      en: "The breaking news ____ appeared in large letters across the front page of every newspaper.",
      tr: 'headline',
      wrong: 'surgery'
    },
    {
      en: "Social ____ has completely changed the way people receive and share information.",
      tr: 'media',
      wrong: 'patient'
    },
    {
      en: "The new ____ about climate change has sparked heated debate across the country.",
      tr: 'documentary',
      wrong: 'virus'
    },
    {
      en: "Many young people now get most of their news from ____ rather than traditional newspapers.",
      tr: 'websites',
      wrong: 'wound'
    },
    {
      en: "The journalist wrote a powerful ____ exposing corruption in the government.",
      tr: 'article',
      wrong: 'therapy'
    },
    {
      en: "The government is investing heavily in ____ energy to reduce dependence on fossil fuels.",
      tr: 'renewable',
      wrong: 'symptom'
    },
    {
      en: "Rapid ____ is one of the biggest challenges facing the planet in the 21st century.",
      tr: 'global warming',
      wrong: 'nurse'
    },
    {
      en: "We all need to do more to protect endangered species and preserve ____.",
      tr: 'wildlife',
      wrong: 'broadcast'
    },
    {
      en: "The factory was fined for releasing dangerous chemicals and causing serious air ____.",
      tr: 'pollution',
      wrong: 'channel'
    },
    {
      en: "After the earthquake and subsequent ____, thousands of people lost their homes.",
      tr: 'tsunami',
      wrong: 'editor'
    },
    {
      en: "Sustainable development aims to meet present needs without damaging the ____ for future generations.",
      tr: 'environment',
      wrong: 'magazine'
    },
    {
      en: "Early diagnosis and prompt ____ can significantly improve a patient’s chances of recovery.",
      tr: 'treatment',
      wrong: 'recycle'
    },
    {
      en: "Mental ____ is just as important as physical health and should not be ignored.",
      tr: 'health',
      wrong: 'reporter'
    },
    {
      en: "The doctor recommended complete rest and a course of ____ to fight the infection.",
      tr: 'medicine',
      wrong: 'conservation'
    },
    {
      en: "He suffered a serious ____ to his leg during the football match and needed surgery.",
      tr: 'injury',
      wrong: 'headline'
    },
    {
      en: "The hospital has a special unit for patients with life-threatening ____.",
      tr: 'emergencies',
      wrong: 'solar'
    },
    {
      en: "Regular physical exercise is essential for maintaining good cardiovascular ____.",
      tr: 'fitness',
      wrong: 'article'
    },
    {
      en: "The ____ performed a complex operation that lasted over six hours.",
      tr: 'surgeon',
      wrong: 'disaster'
    },
    {
      en: "One of the most common ____ of this disease is a persistent high fever.",
      tr: 'symptoms',
      wrong: 'programme'
    },
    {
      en: "The government launched a major ____ campaign to raise awareness about recycling.",
      tr: 'awareness',
      wrong: 'earthquake'
    }
  ],
},
      
// ─────────────────────── QUIZ 36 — Technology & Innovation ───────────────────────
[
  { en: 'computer',     tr: 'kompüter',          wrong: 'planşet',       wen: 'camera',        def: 'an electronic machine that can store and process information' },
  { en: 'device',       tr: 'cihaz',             wrong: 'avadanlıq',     wen: 'furniture',     def: 'a tool or machine designed for a particular purpose' },
  { en: 'digital',      tr: 'rəqəmsal',          wrong: 'elektron',      wen: 'paper',         def: 'using computers and electronic signals' },
  { en: 'electronic',   tr: 'elektron',          wrong: 'rəqəmsal',      wen: 'mechanical',    def: 'using electricity and microchips' },
  { en: 'gadget',       tr: 'qadcet',            wrong: 'cihaz',         wen: 'furniture',     def: 'a small useful machine or tool' },
  { en: 'innovation',   tr: 'yenilik',           wrong: 'ixtira',        wen: 'tradition',     def: 'a new idea, method or product' },
  { en: 'internet',     tr: 'internet',          wrong: 'şəbəkə',        wen: 'road',          def: 'the global computer network' },
  { en: 'laptop',       tr: 'noutbuk',           wrong: 'planşet',       wen: 'camera',        def: 'a small portable computer' },
  { en: 'machine',      tr: 'maşın',             wrong: 'mexanizm',      wen: 'idea',          def: 'a piece of equipment with moving parts' },
  { en: 'network',      tr: 'şəbəkə',            wrong: 'sistem',        wen: 'road',          def: 'a group of connected computers' },
  { en: 'online',       tr: 'onlayn',            wrong: 'rəqəmsal',      wen: 'paper',         def: 'connected to the internet' },
  { en: 'robot',        tr: 'robot',             wrong: 'avtomatlaşdırma', wen: 'human',       def: 'a machine that can do tasks automatically' },
  { en: 'software',     tr: 'proqram təminatı',  wrong: 'avadanlıq',     wen: 'furniture',     def: 'programs that run on a computer' },
  { en: 'smartphone',   tr: 'ağıllı telefon',    wrong: 'planşet',       wen: 'camera',        def: 'a mobile phone with advanced features' },
  { en: 'technology',   tr: 'texnologiya',       wrong: 'elm',           wen: 'art',           def: 'the use of scientific knowledge for practical purposes' },
  { en: 'update',       tr: 'yeniləmək',         wrong: 'qurmaq',        wen: 'delete',        def: 'to make something more modern or recent' },
  { en: 'virtual',      tr: 'virtual',           wrong: 'rəqəmsal',      wen: 'real',          def: 'not real but created by a computer' },
  { en: 'website',      tr: 'vebsayt',           wrong: 'proqram',       wen: 'book',          def: 'a set of pages on the internet' },
  { en: 'app',          tr: 'tətbiq',            wrong: 'proqram',       wen: 'book',          def: 'a program designed for a mobile phone' },
  { en: 'artificial intelligence', tr: 'süni intellekt', wrong: 'maşın öyrənməsi', wen: 'human intelligence', def: 'the ability of computers to think and learn like humans' }
],

// ─────────────────────── QUIZ 37 — Travel & Holidays ───────────────────────
[
  { en: 'accommodation', tr: 'yaşayış yeri',     wrong: 'otel',           wen: 'restaurant',    def: 'a place where travellers can stay overnight' },
  { en: 'airport',      tr: 'hava limanı',       wrong: 'terminal',      wen: 'hospital',      def: 'a place where planes take off and land' },
  { en: 'booking',      tr: 'rezervasiya',       wrong: 'bilet',         wen: 'ticket',        def: 'an arrangement to reserve a room, seat or ticket' },
  { en: 'destination',  tr: 'təyinat yeri',      wrong: 'marşrut',       wen: 'price',         def: 'the place you are travelling to' },
  { en: 'flight',       tr: 'uçuş',              wrong: 'səyahət',       wen: 'meeting',       def: 'a journey by plane' },
  { en: 'holiday',      tr: 'tətil',             wrong: 'istirahət',     wen: 'work',          def: 'a period of time when you do not have to work' },
  { en: 'hotel',        tr: 'otel',              wrong: 'hostel',        wen: 'school',        def: 'a building where people pay to stay' },
  { en: 'journey',      tr: 'səyahət',           wrong: 'gəzinti',       wen: 'meeting',       def: 'a trip from one place to another' },
  { en: 'luggage',      tr: 'baqaj',             wrong: 'çanta',         wen: 'clothes',       def: 'bags and suitcases you take on a trip' },
  { en: 'passport',     tr: 'pasport',           wrong: 'viza',          wen: 'ticket',        def: 'an official document needed for international travel' },
  { en: 'reservation',  tr: 'yer ayırtma',       wrong: 'sifariş',       wen: 'menu',          def: 'an arrangement to keep a room or seat for you' },
  { en: 'resort',       tr: 'kurort',            wrong: 'otel',          wen: 'hospital',      def: 'a place where people go for a holiday' },
  { en: 'ticket',       tr: 'bilet',             wrong: 'kupon',         wen: 'passport',      def: 'a piece of paper that allows you to travel' },
  { en: 'tourism',      tr: 'turizm',            wrong: 'səyahət',       wen: 'business',      def: 'the business of organizing holidays for people' },
  { en: 'tourist',      tr: 'turist',            wrong: 'səyyah',        wen: 'resident',      def: 'a person who travels for pleasure' },
  { en: 'transport',    tr: 'nəqliyyat',         wrong: 'daşıma',        wen: 'education',     def: 'the system of moving people or goods' },
  { en: 'trip',         tr: 'gəzinti',           wrong: 'səyahət',       wen: 'meeting',       def: 'a short journey' },
  { en: 'vacation',     tr: 'məzuniyyət',        wrong: 'tətil',         wen: 'work',          def: 'a period of time when you do not have to work' },
  { en: 'visa',         tr: 'viza',              wrong: 'icazə',         wen: 'ticket',        def: 'an official permission to enter a foreign country' },
  { en: 'voyage',       tr: 'gəmi səyahəti',     wrong: 'kruiz',         wen: 'flight',        def: 'a long journey by ship' }
],

// ─────────────────────── QUIZ 38 — Food & Shopping ───────────────────────
[
  { en: 'customer',     tr: 'müştəri',           wrong: 'alıcı',         wen: 'seller',        def: 'a person who buys goods or services' },
  { en: 'discount',     tr: 'endirim',           wrong: 'bonus',         wen: 'increase',      def: 'a reduction in the normal price' },
  { en: 'ingredient',   tr: 'inqredient',        wrong: 'resept',        wen: 'tool',          def: 'one of the foods or substances needed to make a dish' },
  { en: 'market',       tr: 'bazar',             wrong: 'mağaza',        wen: 'hospital',      def: 'a place where people buy and sell goods' },
  { en: 'meal',         tr: 'yemək',             wrong: 'xörək',         wen: 'drink',         def: 'food eaten at one time' },
  { en: 'menu',         tr: 'menyu',             wrong: 'siyahı',        wen: 'price',         def: 'a list of food available in a restaurant' },
  { en: 'price',        tr: 'qiymət',            wrong: 'dəyər',         wen: 'weight',        def: 'the amount of money you must pay for something' },
  { en: 'product',      tr: 'məhsul',            wrong: 'əşya',          wen: 'idea',          def: 'something that is made to be sold' },
  { en: 'recipe',       tr: 'resept',            wrong: 'inqredient',    wen: 'menu',          def: 'instructions for cooking a particular dish' },
  { en: 'restaurant',   tr: 'restoran',          wrong: 'kafe',          wen: 'hospital',      def: 'a place where you can buy and eat a meal' },
  { en: 'sale',         tr: 'satış',             wrong: 'endirim',       wen: 'purchase',      def: 'the act of selling something' },
  { en: 'shop',         tr: 'mağaza',            wrong: 'bazar',         wen: 'hospital',      def: 'a building where you can buy things' },
  { en: 'shopping',     tr: 'alış-veriş',        wrong: 'satış',         wen: 'work',          def: 'the activity of buying things' },
  { en: 'supermarket',  tr: 'supermarket',       wrong: 'bazar',         wen: 'hospital',      def: 'a large shop that sells food and other goods' },
  { en: 'taste',        tr: 'dad',               wrong: 'iy',            wen: 'sound',         def: 'the flavour of food or drink' },
  { en: 'afford',       tr: 'gücü çatmaq',       wrong: 'almaq',         wen: 'sell',          def: 'to have enough money to buy something' },
  { en: 'bargain',      tr: 'sövdələşmə',        wrong: 'endirim',       wen: 'argument',      def: 'a very good deal or agreement on price' },
  { en: 'brand',        tr: 'marka',             wrong: 'model',         wen: 'idea',          def: 'a name that identifies a particular product' },
  { en: 'luxury',       tr: 'lüks',              wrong: 'bahalı',        wen: 'necessity',     def: 'something expensive and not essential' },
  { en: 'purchase',     tr: 'satın almaq',       wrong: 'əldə etmək',    wen: 'sell',          def: 'to buy something' }
],

      // ─────────────────────── EXAM — Technology, Travel, Food & Shopping (B2) ───────────────────────
{
  sentences: [
    {
      en: "Artificial ____ is transforming many industries, from healthcare to transportation.",
      tr: 'intelligence',
      wrong: 'luggage'
    },
    {
      en: "The new ____ allows users to control their home lighting and heating from anywhere.",
      tr: 'app',
      wrong: 'resort'
    },
    {
      en: "Companies must constantly ____ their software to protect against cyber attacks.",
      tr: 'update',
      wrong: 'bargain'
    },
    {
      en: "Virtual reality creates a completely ____ environment that feels real to the user.",
      tr: 'virtual',
      wrong: 'ingredient'
    },
    {
      en: "Many experts believe that ____ will replace many traditional jobs in the near future.",
      tr: 'robots',
      wrong: 'passport'
    },
    {
      en: "Finding suitable ____ in the city centre during the tourist season is very difficult.",
      tr: 'accommodation',
      wrong: 'supermarket'
    },
    {
      en: "We need to make a ____ for the hotel before prices rise any further.",
      tr: 'reservation',
      wrong: 'brand'
    },
    {
      en: "The tropical island has become a popular ____ for wealthy tourists.",
      tr: 'resort',
      wrong: 'device'
    },
    {
      en: "Don't forget to take your ____ with you — you'll need it to enter the country.",
      tr: 'passport',
      wrong: 'recipe'
    },
    {
      en: "The long ____ by ship across the Atlantic took almost two weeks.",
      tr: 'voyage',
      wrong: 'discount'
    },
    {
      en: "Following the ____ exactly is essential if you want the cake to turn out perfectly.",
      tr: 'recipe',
      wrong: 'network'
    },
    {
      en: "This famous ____ is known for selling fresh organic products at reasonable prices.",
      tr: 'supermarket',
      wrong: 'innovation'
    },
    {
      en: "Many people cannot ____ to buy a house in the city centre because of high prices.",
      tr: 'afford',
      wrong: 'broadcast'
    },
    {
      en: "She got a great ____ and bought the designer bag for half the normal price.",
      tr: 'bargain',
      wrong: 'gadget'
    },
    {
      en: "The company is launching a new ____ of smartphones with improved cameras.",
      tr: 'brand',
      wrong: 'destination'
    },
    {
      en: "Consumers are becoming more conscious about the environmental impact of the ____ they buy.",
      tr: 'products',
      wrong: 'flights'
    },
    {
      en: "Solar power is one of the most promising forms of ____ energy.",
      tr: 'renewable',
      wrong: 'customer'
    },
    {
      en: "The hotel offers luxury ____ with beautiful sea views and private balconies.",
      tr: 'accommodation',
      wrong: 'software'
    },
    {
      en: "Modern ____ has made it much easier for people to stay connected while travelling.",
      tr: 'technology',
      wrong: 'meal'
    },
    {
      en: "The government is investing heavily in green ____ to fight climate change.",
      tr: 'innovation',
      wrong: 'purchase'
    }
  ],
},
      
// ─────────────────────── QUIZ 39 — House & Everyday Life ───────────────────────
[
  { en: 'appliance',    tr: 'məişət texnikası',  wrong: 'cihaz',         wen: 'furniture',     def: 'a machine used in the home, such as a fridge or washing machine' },
  { en: 'bedroom',      tr: 'yataq otağı',       wrong: 'oturma otağı',  wen: 'kitchen',       def: 'the room where you sleep' },
  { en: 'building',     tr: 'bina',              wrong: 'tikili',        wen: 'car',           def: 'a structure with a roof and walls' },
  { en: 'ceiling',      tr: 'tavan',             wrong: 'döşəmə',        wen: 'wall',          def: 'the upper surface of a room' },
  { en: 'furniture',    tr: 'mebel',             wrong: 'dekor',         wen: 'food',          def: 'tables, chairs, beds and other movable items in a house' },
  { en: 'garage',       tr: 'qaraj',             wrong: 'anbar',         wen: 'kitchen',       def: 'a building for keeping a car' },
  { en: 'garden',       tr: 'bağ',               wrong: 'həyət',         wen: 'kitchen',       def: 'a piece of land where flowers and vegetables are grown' },
  { en: 'heating',      tr: 'isitmə',            wrong: 'ventilyasiya',  wen: 'lighting',      def: 'the system that makes a house warm' },
  { en: 'home',         tr: 'ev',                wrong: 'mənzil',        wen: 'office',        def: 'the place where you live' },
  { en: 'household',    tr: 'ev təsərrüfatı',    wrong: 'ailə',          wen: 'company',       def: 'all the people who live together in one house' },
  { en: 'kitchen',      tr: 'mətbəx',            wrong: 'hamam',         wen: 'bedroom',       def: 'the room where food is prepared' },
  { en: 'living room',  tr: 'oturma otağı',       wrong: 'yataq otağı',   wen: 'bathroom',      def: 'the main room where the family relaxes' },
  { en: 'neighbour',    tr: 'qonşu',             wrong: 'tanış',         wen: 'stranger',      def: 'a person who lives near you' },
  { en: 'rent',         tr: 'icarə',             wrong: 'ödəniş',        wen: 'salary',        def: 'money paid regularly to use a house or flat' },
  { en: 'repair',       tr: 'təmir etmək',       wrong: 'düzəltmək',     wen: 'destroy',       def: 'to fix something that is broken' },
  { en: 'roof',         tr: 'dam',               wrong: 'tavan',         wen: 'floor',         def: 'the top covering of a building' },
  { en: 'wall',         tr: 'divar',             wrong: 'hasar',         wen: 'roof',          def: 'a vertical structure that forms the side of a building' },
  { en: 'window',       tr: 'pəncərə',           wrong: 'qapı',          wen: 'door',          def: 'an opening in a wall with glass' },
  { en: 'furniture',    tr: 'mebel',             wrong: 'avadanlıq',     wen: 'food',          def: 'tables, chairs, beds and other movable items in a house' },
  { en: 'cottage',      tr: 'kiçik ev',          wrong: 'villa',         wen: 'office',        def: 'a small house, usually in the countryside' }
],

// ─────────────────────── QUIZ 40 — Remaining Mixed Words ───────────────────────
[
  { en: 'abandon',      tr: 'tərk etmək',        wrong: 'buraxmaq',      wen: 'keep',          def: 'to leave someone or something completely' },
  { en: 'absent',       tr: 'yoxdur / olmayan',   wrong: 'hazır deyil',   wen: 'present',       def: 'not present in a place' },
  { en: 'absolute',     tr: 'mütləq',            wrong: 'tam',           wen: 'relative',      def: 'complete and total' },
  { en: 'absorb',       tr: 'udmaq / mənimsəmək', wrong: 'əmib götürmək', wen: 'reject',        def: 'to take in or learn something' },
  { en: 'accent',       tr: 'vurğu / ləhcə',     wrong: 'tələffüz',      wen: 'silence',       def: 'the way someone pronounces words' },
  { en: 'accidentally', tr: 'təsadüfən',         wrong: 'bilməyərəkdən', wen: 'deliberately',  def: 'by chance or without planning' },
  { en: 'accommodate',  tr: 'yerləşdirmək',      wrong: 'qəbul etmək',   wen: 'reject',        def: 'to provide a place for someone to stay' },
  { en: 'accompany',    tr: 'müşayiət etmək',    wrong: 'birlikdə getmək', wen: 'leave',       def: 'to go somewhere with someone' },
  { en: 'accuracy',     tr: 'dəqiqlik',          wrong: 'düzgünlük',     wen: 'mistake',       def: 'the quality of being correct and exact' },
  { en: 'accuse',       tr: 'ittiham etmək',     wrong: 'suçlamaq',      wen: 'praise',        def: 'to say that someone has done something wrong' },
  { en: 'acknowledge',  tr: 'etiraf etmək',      wrong: 'qəbul etmək',   wen: 'deny',          def: 'to accept that something is true' },
  { en: 'acquire',      tr: 'əldə etmək',        wrong: 'almaq',         wen: 'lose',          def: 'to get or buy something' },
  { en: 'activate',     tr: 'aktivləşdirmək',    wrong: 'işə salmaq',    wen: 'deactivate',    def: 'to make something start working' },
  { en: 'adequate',     tr: 'kifayət qədər',     wrong: 'uyğun',         wen: 'insufficient',  def: 'enough for a particular purpose' },
  { en: 'adjust',       tr: 'tənzimləmək',       wrong: 'uyğunlaşmaq',   wen: 'destroy',       def: 'to change something slightly to make it better' },
  { en: 'administration',tr: 'inzibatçılıq',     wrong: 'idarəetmə',     wen: 'production',    def: 'the process of managing and organizing work' },
  { en: 'adopt',        tr: 'qəbul etmək',       wrong: 'tətbiq etmək',  wen: 'reject',        def: 'to take something and use it as your own' },
  { en: 'affair',       tr: 'məsələ / iş',       wrong: 'hadisə',        wen: 'holiday',       def: 'an event or situation' },
  { en: 'afterwards',   tr: 'sonradan',          wrong: 'daha sonra',    wen: 'before',        def: 'at a later time' },
  { en: 'agenda',       tr: 'gündəlik',          wrong: 'proqram',       wen: 'menu',          def: 'a list of things to be discussed' }
],
  // ─────────────────────── EXAM — House & Everyday Life + Mixed Advanced Words (B2) ───────────────────────
{
  sentences: [
    {
      en: "Modern homes are full of labour-saving ____ such as washing machines and dishwashers.",
      tr: 'appliances',
      wrong: 'agenda'
    },
    {
      en: "The ____ in this old house is very high, which makes the rooms feel quite spacious.",
      tr: 'ceiling',
      wrong: 'accent'
    },
    {
      en: "We need to call a professional to ____ the leaking roof before the rainy season starts.",
      tr: 'repair',
      wrong: 'adopt'
    },
    {
      en: "The whole ____ works together to keep the house clean and organised.",
      tr: 'household',
      wrong: 'afterwards'
    },
    {
      en: "She has lived in the same ____ for over twenty years and knows all her neighbours well.",
      tr: 'neighbourhood',
      wrong: 'accuracy'
    },
    {
      en: "They decided to ____ a small cottage in the countryside for the summer.",
      tr: 'rent',
      wrong: 'activate'
    },
    {
      en: "The living room has large windows that let in plenty of natural light.",
      tr: 'windows',
      wrong: 'accommodate'
    },
    {
      en: "Solar panels on the ____ help reduce electricity bills significantly.",
      tr: 'roof',
      wrong: 'absent'
    },
    {
      en: "He had to ____ his original plans when he realised they were not realistic.",
      tr: 'abandon',
      wrong: 'luggage'
    },
    {
      en: "The company needs someone with strong ____ skills to manage the new project.",
      tr: 'administration',
      wrong: 'garden'
    },
    {
      en: "She showed great ____ by admitting her mistake immediately.",
      tr: 'acknowledgement',
      wrong: 'furniture'
    },
    {
      en: "Students must be ____ in at least 80% of classes to pass the course.",
      tr: 'present',
      wrong: 'kitchen'
    },
    {
      en: "The new system will automatically ____ when someone enters the building.",
      tr: 'activate',
      wrong: 'building'
    },
    {
      en: "We must find an ____ solution that satisfies both sides of the argument.",
      tr: 'adequate',
      wrong: 'garage'
    },
    {
      en: "The manager promised to ____ the schedule to give employees more flexible hours.",
      tr: 'adjust',
      wrong: 'bedroom'
    },
    {
      en: "Her strong regional ____ sometimes makes it difficult for people to understand her.",
      tr: 'accent',
      wrong: 'heating'
    },
    {
      en: "The government plans to ____ stricter rules on plastic waste next year.",
      tr: 'adopt',
      wrong: 'living room'
    },
    {
      en: "Please check the meeting ____ before you come so you know what will be discussed.",
      tr: 'agenda',
      wrong: 'ceiling'
    },
    {
      en: "The company aims to ____ new talent from top universities every year.",
      tr: 'acquire',
      wrong: 'wall'
    },
    {
      en: "He was ____ from school yesterday because he was feeling ill.",
      tr: 'absent',
      wrong: 'roof'
    }
  ],
},
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
  { en: 'abolish',      tr: 'ləğv etmək',        wrong: 'qadağan etmək', wen: 'establish',     def: 'to officially end a law, system or institution' },
  { en: 'accountability', tr: 'hesabatlılıq',    wrong: 'şəffaflıq',     wen: 'secrecy',       def: 'the fact of being responsible and having to explain your actions' },
  { en: 'accountable',  tr: 'məsuliyyətli',      wrong: 'etibarlı',      wen: 'irresponsible', def: 'required to explain and justify your decisions or actions' },
  { en: 'administration', tr: 'idarəetmə',       wrong: 'hökumət',       wen: 'chaos',         def: 'the process of managing and organizing the affairs of a country or organization' },
  { en: 'administrative', tr: 'inzibati',        wrong: 'hüquqi',        wen: 'creative',      def: 'relating to the management and organization of an institution' },
  { en: 'administrator', tr: 'inzibatçı',        wrong: 'nazir',         wen: 'scientist',     def: 'a person who manages the day-to-day operations of an organization' },
  { en: 'ambassador',   tr: 'səfir',             wrong: 'konsul',        wen: 'soldier',       def: 'a high-ranking diplomat who represents their country abroad' },
  { en: 'amendment',    tr: 'düzəliş',           wrong: 'qanun',         wen: 'tradition',     def: 'a change or addition made to a law or official document' },
  { en: 'ballot',       tr: 'səsvermə bülleteni', wrong: 'seçki',        wen: 'interview',     def: 'the piece of paper used to cast a vote in an election' },
  { en: 'bureaucracy',  tr: 'bürokratiya',       wrong: 'demokratiya',   wen: 'freedom',       def: 'a system of government with many officials and complicated procedures' },
  { en: 'cabinet',      tr: 'kabinet',           wrong: 'parlament',     wen: 'audience',      def: 'the group of senior ministers who advise the head of government' },
  { en: 'coalition',    tr: 'koalisiya',         wrong: 'ittifaq',       wen: 'rivalry',       def: 'a temporary alliance between different political parties' },
  { en: 'congress',     tr: 'kongres',           wrong: 'parlament',     wen: 'school',        def: 'a formal meeting or the legislative body in some countries' },
  { en: 'constitution', tr: 'konstitusiya',      wrong: 'qanun',         wen: 'novel',         def: 'the set of fundamental principles and laws of a country' },
  { en: 'constitutional', tr: 'konstitusional',  wrong: 'hüquqi',        wen: 'illegal',       def: 'in accordance with the constitution of a country' },
  { en: 'councillor',   tr: 'şura üzvü',         wrong: 'deputat',       wen: 'scientist',     def: 'a member of a local council or advisory body' },
  { en: 'democracy',    tr: 'demokratiya',       wrong: 'respublika',    wen: 'dictatorship',  def: 'a system of government in which power is held by the people through voting' },
  { en: 'diplomatic',   tr: 'diplomatik',        wrong: 'siyasi',        wen: 'military',      def: 'relating to the management of relations between countries' },
  { en: 'election',     tr: 'seçki',             wrong: 'referendum',    wen: 'festival',      def: 'the process of choosing a government or representatives by voting' },
  { en: 'electoral',    tr: 'seçki (sifət)',     wrong: 'siyasi',        wen: 'economic',      def: 'relating to elections and the process of voting' }
],
      
// ─────────────────────── QUIZ 2 — Government & Politics (2) ───────────────────────
[
  { en: 'governance',   tr: 'idarəçilik',        wrong: 'siyasət',       wen: 'chaos',         def: 'the way in which a country or organization is managed and controlled' },
  { en: 'ideology',     tr: 'ideologiya',        wrong: 'fəlsəfə',       wen: 'sport',         def: 'a system of ideas and beliefs that forms the basis of political or economic theory' },
  { en: 'judicial',     tr: 'məhkəmə (sifət)',   wrong: 'hüquqi',        wen: 'legislative',   def: 'relating to the courts and the administration of justice' },
  { en: 'jurisdiction', tr: 'yurisdiksiya',      wrong: 'səlahiyyət',    wen: 'freedom',       def: 'the official power to make legal decisions and judgments' },
  { en: 'legislation',  tr: 'qanunvericilik',    wrong: 'idarəetmə',     wen: 'execution',     def: 'the process of making or enacting laws' },
  { en: 'legislative',  tr: 'qanunverici',       wrong: 'icraedici',     wen: 'judicial',      def: 'having the power to make laws' },
  { en: 'legislature',  tr: 'qanunverici orqan', wrong: 'məhkəmə',       wen: 'army',          def: 'the body of people with the power to make laws' },
  { en: 'mandate',      tr: 'mandat',            wrong: 'səlahiyyət',    wen: 'gift',          def: 'the authority given to a government or official by voters' },
  { en: 'ministry',     tr: 'nazirlik',          wrong: 'idarə',         wen: 'school',        def: 'a government department headed by a minister' },
  { en: 'parliament',   tr: 'parlament',         wrong: 'kongres',       wen: 'school',        def: 'the supreme legislative body in many countries' },
  { en: 'policy',       tr: 'siyasət',           wrong: 'qanun',         wen: 'hobby',         def: 'a course or principle of action adopted by a government' },
  { en: 'political',    tr: 'siyasi',            wrong: 'iqtisadi',      wen: 'medical',       def: 'relating to the government or public affairs of a country' },
  { en: 'politician',   tr: 'siyasətçi',         wrong: 'dövlət xadimi',  wen: 'scientist',     def: 'a person whose profession is politics' },
  { en: 'presidency',   tr: 'prezidentlik',      wrong: 'baş nazirlik',   wen: 'monarchy',      def: 'the office or term of a president' },
  { en: 'referendum',   tr: 'referendum',        wrong: 'seçki',         wen: 'festival',      def: 'a direct vote by the people on a particular issue' },
  { en: 'regime',       tr: 'rejim',             wrong: 'hökumət',       wen: 'chaos',         def: 'a government or system of rule, often authoritarian' },
  { en: 'regulation',   tr: 'tənzimləmə',        wrong: 'qanun',         wen: 'freedom',       def: 'an official rule or law controlling how something is done' },
  { en: 'regulatory',   tr: 'tənzimləyici',      wrong: 'icraedici',     wen: 'creative',      def: 'having the power to make and enforce rules' },
  { en: 'sovereignty',  tr: 'suverenlik',        wrong: 'müstəqillik',   wen: 'dependence',    def: 'the full right and power of a country to govern itself' },
  { en: 'treaty',       tr: 'müqavilə',          wrong: 'saziş',         wen: 'war',           def: 'a formal agreement between two or more countries' }
],

// ─────────────────────── QUIZ 3 — Law & Justice ───────────────────────
[
  { en: 'accusation',   tr: 'ittiham',           wrong: 'şikayət',       wen: 'praise',        def: 'a claim or statement that someone has done something illegal' },
  { en: 'allegation',   tr: 'iddia',             wrong: 'ittiham',       wen: 'fact',          def: 'a claim or assertion that someone has done something wrong' },
  { en: 'allege',       tr: 'iddia etmək',       wrong: 'sübut etmək',   wen: 'deny',          def: 'to claim or assert that something is the case' },
  { en: 'asylum',       tr: 'sığınacaq',         wrong: 'qaçqın statusu', wen: 'hospital',      def: 'protection given by a country to someone escaping danger' },
  { en: 'breach',       tr: 'pozuntu',           wrong: 'cinayət',       wen: 'agreement',     def: 'an act of breaking a law, rule or agreement' },
  { en: 'conviction',   tr: 'məhkumetmə',        wrong: 'bəraət',        wen: 'acquittal',     def: 'a formal declaration that someone is guilty of a crime' },
  { en: 'corruption',   tr: 'korrupsiya',        wrong: 'cinayət',       wen: 'honesty',       def: 'dishonest or fraudulent conduct by those in power' },
  { en: 'custody',      tr: 'həbs',              wrong: 'cərimə',        wen: 'freedom',       def: 'the state of being kept in prison or under guard' },
  { en: 'defendant',    tr: 'müttəhim',          wrong: 'şahid',         wen: 'judge',         def: 'a person against whom a criminal charge is brought' },
  { en: 'detention',    tr: 'saxlanılma',        wrong: 'həbs',          wen: 'release',       def: 'the action of keeping someone in official custody' },
  { en: 'enforcement',  tr: 'icra',              wrong: 'tənzimləmə',    wen: 'violation',     def: 'the act of ensuring that laws or rules are obeyed' },
  { en: 'felony',       tr: 'ağır cinayət',      wrong: 'xırda cinayət',  wen: 'misdemeanor',   def: 'a serious crime, usually punishable by more than one year in prison' },
  { en: 'guilty',       tr: 'günahkar',          wrong: 'günahsız',      wen: 'innocent',      def: 'having been proven to have committed a crime or wrongdoing' },
  { en: 'indictment',   tr: 'ittihamnamə',       wrong: 'hökm',          wen: 'acquittal',     def: 'a formal charge or accusation of a serious crime' },
  { en: 'innocent',     tr: 'günahsız',          wrong: 'günahkar',      wen: 'guilty',        def: 'not responsible for a crime or wrongdoing' },
  { en: 'judicial',     tr: 'məhkəmə (sifət)',   wrong: 'hüquqi',        wen: 'legislative',   def: 'relating to the courts and the administration of justice' },
  { en: 'jurisdiction', tr: 'yurisdiksiya',      wrong: 'səlahiyyət',    wen: 'freedom',       def: 'the official power to make legal decisions and judgments' },
  { en: 'justice',      tr: 'ədalət',            wrong: 'qanun',         wen: 'injustice',     def: 'the fair and impartial application of the law' },
  { en: 'lawsuit',      tr: 'məhkəmə işi',       wrong: 'şikayət',       wen: 'celebration',   def: 'a claim or dispute brought to a court for decision' },
  { en: 'verdict',      tr: 'hökm',              wrong: 'qərar',         wen: 'suggestion',    def: 'the decision reached by a jury or judge in a court case' }
],

// ─────────────────────── QUIZ 4 — Crime & Conflict ───────────────────────
[
  { en: 'assassination', tr: 'sui-qəsd',         wrong: 'qətl',          wen: 'celebration',   def: 'the deliberate killing of a prominent person for political reasons' },
  { en: 'assault',      tr: 'hücum',             wrong: 'döyüş',         wen: 'invitation',    def: 'a violent physical attack on someone' },
  { en: 'atrocity',     tr: 'vəhşilik',          wrong: 'zorakılıq',     wen: 'kindness',      def: 'an extremely cruel and shocking act' },
  { en: 'combat',       tr: 'döyüş',             wrong: 'hücum',         wen: 'cooperation',   def: 'fighting between armed forces' },
  { en: 'conspiracy',   tr: 'sui-qəsd planı',    wrong: 'fitnə',         wen: 'openness',      def: 'a secret plan by a group to do something unlawful' },
  { en: 'corruption',   tr: 'korrupsiya',        wrong: 'saxtakarlıq',   wen: 'honesty',       def: 'dishonest or fraudulent conduct by those in power' },
  { en: 'coup',         tr: 'çevriliş',          wrong: 'inqilab',       wen: 'election',      def: 'a sudden violent overthrow of a government' },
  { en: 'crime',        tr: 'cinayət',           wrong: 'günah',         wen: 'sport',         def: 'an illegal act that is punishable by law' },
  { en: 'detain',       tr: 'saxlamaq',          wrong: 'həbs etmək',    wen: 'release',       def: 'to keep someone in official custody' },
  { en: 'felony',       tr: 'ağır cinayət',      wrong: 'xırda cinayət',  wen: 'misdemeanor',   def: 'a serious crime, usually punishable by more than one year in prison' },
  { en: 'genocide',     tr: 'soyqırım',          wrong: 'müharibə',      wen: 'peace',         def: 'the deliberate killing of a large number of people from a particular nation or group' },
  { en: 'guerrilla',    tr: 'partizan',          wrong: 'əsgər',         wen: 'soldier',       def: 'a member of an irregular armed force fighting against a regular army' },
  { en: 'hostage',      tr: 'girov',             wrong: 'məhbus',        wen: 'guest',         def: 'a person held captive by force as a means of bargaining' },
  { en: 'raid',         tr: 'basqın',            wrong: 'hücum',         wen: 'party',         def: 'a sudden attack on a place by police or soldiers' },
  { en: 'rape',         tr: 'zorlanma',          wrong: 'zorakılıq',     wen: 'consent',       def: 'the crime of forcing someone to have sexual intercourse' },
  { en: 'riot',         tr: 'iğtişaş',           wrong: 'etiraz',        wen: 'celebration',   def: 'a violent disturbance by a crowd of people' },
  { en: 'terrorism',    tr: 'terrorçuluq',       wrong: 'ekstremizm',    wen: 'sport',         def: 'the unlawful use of violence and intimidation for political aims' },
  { en: 'torture',      tr: 'işgəncə',           wrong: 'zorakılıq',     wen: 'kindness',      def: 'the infliction of severe pain to punish or extract information' },
  { en: 'violation',    tr: 'pozuntu',           wrong: 'cinayət',       wen: 'compliance',    def: 'the action of breaking a law, rule or agreement' },
  { en: 'warfare',      tr: 'müharibə',          wrong: 'döyüş',         wen: 'peace',         def: 'the activity of fighting a war' }
],

// ─────────────────────── QUIZ 5 — Business & Economy (1) ───────────────────────
[
  { en: 'accumulation', tr: 'toplanma',          wrong: 'artım',          wen: 'decline',       def: 'the process of gradually collecting or increasing in quantity' },
  { en: 'bankruptcy',   tr: 'iflas',             wrong: 'borc',          wen: 'prosperity',    def: 'the state of being unable to pay debts and legally declared insolvent' },
  { en: 'budget',       tr: 'büdcə',             wrong: 'xərc',          wen: 'income',        def: 'a financial plan estimating income and expenditure over a period' },
  { en: 'capitalism',   tr: 'kapitalizm',        wrong: 'sosializm',     wen: 'communism',     def: 'an economic system based on private ownership and free markets' },
  { en: 'commodity',    tr: 'əmtəə',             wrong: 'məhsul',        wen: 'service',       def: 'a raw material or primary agricultural product that can be bought and sold' },
  { en: 'compensation', tr: 'kompensasiya',      wrong: 'maaş',          wen: 'punishment',    def: 'money or benefits given to someone for loss or injury' },
  { en: 'contractor',   tr: 'podratçı',          wrong: 'işçi',          wen: 'employee',      def: 'a person or company that undertakes a contract to provide materials or labor' },
  { en: 'corporation',  tr: 'korporasiya',       wrong: 'şirkət',        wen: 'family',        def: 'a large company or group of companies authorized to act as a single entity' },
  { en: 'deficit',      tr: 'kəsir',             wrong: 'borc',          wen: 'surplus',       def: 'the amount by which expenditure exceeds income' },
  { en: 'expenditure',  tr: 'xərc',              wrong: 'büdcə',         wen: 'income',        def: 'the action of spending money or the amount spent' },
  { en: 'fiscal',       tr: 'fiskal',            wrong: 'maliyyə',       wen: 'medical',       def: 'relating to government revenue, especially through taxation' },
  { en: 'franchise',    tr: 'françayzinq',       wrong: 'lisenziya',     wen: 'monopoly',      def: 'the right to sell a company’s products or services in a particular area' },
  { en: 'funding',      tr: 'maliyyələşdirmə',   wrong: 'investisiya',   wen: 'donation',      def: 'money provided for a specific purpose or project' },
  { en: 'investment',   tr: 'investisiya',       wrong: 'kredit',        wen: 'expense',       def: 'the action of putting money into something to make a profit' },
  { en: 'marketplace',  tr: 'bazarlıq',          wrong: 'bazar',         wen: 'school',        def: 'the arena where goods and services are bought and sold' },
  { en: 'merger',       tr: 'birləşmə',          wrong: 'alım',          wen: 'separation',    def: 'the combining of two or more companies into one' },
  { en: 'monopoly',     tr: 'inhisar',           wrong: 'kartell',       wen: 'competition',   def: 'exclusive control of the supply of a commodity or service' },
  { en: 'privatization',tr: 'özəlləşdirmə',      wrong: 'milliləşdirmə',  wen: 'nationalization', def: 'the transfer of a business from public to private ownership' },
  { en: 'profit',       tr: 'mənfəət',           wrong: 'gəlir',         wen: 'loss',          def: 'the financial gain after all expenses have been deducted' },
  { en: 'revenue',      tr: 'gəlir',             wrong: 'mənfəət',       wen: 'expense',       def: 'income generated from normal business operations' }
],
      
// ─────────────────────── QUIZ 6 — Business & Economy (2) ───────────────────────
[
  { en: 'accountability', tr: 'hesabatlılıq',    wrong: 'şəffaflıq',     wen: 'secrecy',       def: 'the obligation to explain and justify one’s actions and decisions' },
  { en: 'acquisition',  tr: 'əldə etmə',         wrong: 'birləşmə',      wen: 'sale',          def: 'the purchase of one company by another' },
  { en: 'allocation',   tr: 'bölüşdürmə',        wrong: 'paylaşma',      wen: 'hoarding',      def: 'the action of distributing resources according to a plan' },
  { en: 'asset',        tr: 'aktiv',             wrong: 'kapital',       wen: 'liability',     def: 'a useful or valuable thing or person owned by a company' },
  { en: 'audit',        tr: 'audit',             wrong: 'yoxlama',       wen: 'celebration',   def: 'an official inspection of financial accounts' },
  { en: 'beneficiary',  tr: 'faydalanan',        wrong: 'alıcı',         wen: 'donor',         def: 'a person or thing that receives help or an advantage' },
  { en: 'compensation', tr: 'kompensasiya',      wrong: 'maaş',          wen: 'punishment',    def: 'money or benefits given to someone for loss or injury' },
  { en: 'enterprise',   tr: 'müəssisə',          wrong: 'şirkət',        wen: 'school',        def: 'a business or company, especially a large one' },
  { en: 'fiscal',       tr: 'fiskal',            wrong: 'maliyyə',       wen: 'medical',       def: 'relating to government revenue, especially through taxation' },
  { en: 'infrastructure', tr: 'infrastruktur',   wrong: 'quruluş',       wen: 'software',      def: 'the basic physical systems of a country or organization' },
  { en: 'investment',   tr: 'investisiya',       wrong: 'kredit',        wen: 'expense',       def: 'the action of putting money into something to make a profit' },
  { en: 'liability',    tr: 'öhdəlik',           wrong: 'borc',          wen: 'asset',         def: 'a legal responsibility or financial obligation' },
  { en: 'merger',       tr: 'birləşmə',          wrong: 'alım',          wen: 'separation',    def: 'the combining of two or more companies into one' },
  { en: 'productivity', tr: 'məhsuldarlıq',      wrong: 'səmərəlilik',    wen: 'idleness',      def: 'the effectiveness of productive effort measured by output' },
  { en: 'profitable',   tr: 'gəlirli',           wrong: 'uğurlu',        wen: 'loss-making',   def: 'producing a financial gain' },
  { en: 'shareholder',  tr: 'səhmdar',           wrong: 'investor',      wen: 'employee',      def: 'a person who owns shares in a company' },
  { en: 'subsidy',      tr: 'subsidiya',         wrong: 'maliyyə yardımı', wen: 'tax',         def: 'a sum of money granted by the government to support an industry' },
  { en: 'transaction',  tr: 'əməliyyat',         wrong: 'ödəniş',        wen: 'holiday',       def: 'an instance of buying or selling something' },
  { en: 'turnover',     tr: 'dövriyyə',          wrong: 'gəlir',         wen: 'loss',          def: 'the total sales made by a business over a period' },
  { en: 'yield',        tr: 'gəlir (investisiya)', wrong: 'mənfəət',     wen: 'expense',       def: 'the profit or income from an investment' }
],

// ─────────────────────── QUIZ 7 — Society & Social Issues ───────────────────────
[
  { en: 'abortion',     tr: 'abort',             wrong: 'doğuş',         wen: 'birth',         def: 'the deliberate termination of a pregnancy' },
  { en: 'discrimination', tr: 'ayrı-seçkilik',   wrong: 'ədalətsizlik',  wen: 'equality',      def: 'unfair treatment of different categories of people' },
  { en: 'diversity',    tr: 'müxtəliflik',       wrong: 'bərabərlik',    wen: 'uniformity',    def: 'the state of being varied in terms of race, culture or background' },
  { en: 'equality',     tr: 'bərabərlik',        wrong: 'ədalət',        wen: 'discrimination', def: 'the state of being equal in rights, status and opportunities' },
  { en: 'inequality',   tr: 'bərabərsizlik',     wrong: 'ayrı-seçkilik', wen: 'equality',      def: 'the unfair situation in which some people have more rights than others' },
  { en: 'integration',  tr: 'inteqrasiya',       wrong: 'birləşmə',      wen: 'segregation',   def: 'the process of combining different groups into a unified society' },
  { en: 'justice',      tr: 'ədalət',            wrong: 'hüquq',         wen: 'injustice',     def: 'fairness in the way people are treated' },
  { en: 'liberty',      tr: 'azadlıq',           wrong: 'hüquq',         wen: 'oppression',    def: 'the state of being free from oppressive restrictions' },
  { en: 'migration',    tr: 'miqrasiya',         wrong: 'köç',           wen: 'emigration',    def: 'the movement of people from one country or area to another' },
  { en: 'minority',     tr: 'azlıq',             wrong: 'çoxluq',        wen: 'majority',      def: 'a smaller group of people differing from the rest of a community' },
  { en: 'prejudice',    tr: 'qərəz',             wrong: 'ayrı-seçkilik', wen: 'tolerance',     def: 'a preconceived opinion not based on reason or experience' },
  { en: 'racism',       tr: 'irqçilik',          wrong: 'ayrı-seçkilik', wen: 'equality',      def: 'prejudice, discrimination or antagonism directed against a person based on race' },
  { en: 'refugee',      tr: 'qaçqın',            wrong: 'mühacir',       wen: 'citizen',       def: 'a person who has been forced to leave their country due to war or persecution' },
  { en: 'rehabilitation', tr: 'reabilitasiya',   wrong: 'müalicə',       wen: 'punishment',    def: 'the action of restoring someone to health or normal life' },
  { en: 'solidarity',   tr: 'həmrəylik',         wrong: 'birlik',        wen: 'division',      def: 'unity or agreement of feeling or action among individuals' },
  { en: 'tolerance',    tr: 'tolerantlıq',       wrong: 'hörmət',        wen: 'intolerance',   def: 'the ability to accept opinions or behaviour different from one’s own' },
  { en: 'vulnerable',   tr: 'həssas',            wrong: 'zəif',          wen: 'resilient',     def: 'exposed to the possibility of being attacked or harmed' },
  { en: 'welfare',      tr: 'rifah',             wrong: 'yardım',        wen: 'poverty',       def: 'the health, happiness and fortunes of a person or group' },
  { en: 'well-being',   tr: 'rifahlıq',          wrong: 'sağlamlıq',     wen: 'suffering',     def: 'the state of being comfortable, healthy or happy' },
  { en: 'workforce',    tr: 'işçi qüvvəsi',      wrong: 'əmək bazarı',    wen: 'machinery',     def: 'the people engaged in or available for work in a country or area' }
],
      
// ─────────────────────── QUIZ 8 — Psychology & Emotions ───────────────────────
[
  { en: 'anxiety',      tr: 'narahatlıq',        wrong: 'qorxu',         wen: 'confidence',    def: 'a feeling of worry, nervousness or unease about something with an uncertain outcome' },
  { en: 'consciousness',tr: 'şüur',              wrong: 'idrak',         wen: 'ignorance',     def: 'the state of being aware of and responsive to one’s surroundings' },
  { en: 'depression',   tr: 'depressiya',        wrong: 'kədər',         wen: 'elation',       def: 'a mental state of persistent sadness and loss of interest' },
  { en: 'dignity',      tr: 'ləyaqət',           wrong: 'şərəf',         wen: 'humiliation',   def: 'the quality of being worthy of respect or honour' },
  { en: 'ego',          tr: 'ego',               wrong: 'özünəinam',     wen: 'humility',      def: 'a person’s sense of self-esteem or self-importance' },
  { en: 'embarrassment',tr: 'utanc',             wrong: 'xəcalət',       wen: 'pride',         def: 'a feeling of self-consciousness, shame or awkwardness' },
  { en: 'frustration',  tr: 'məyusluq',          wrong: 'kədər',         wen: 'satisfaction',  def: 'the feeling of being upset or annoyed as a result of being unable to change or achieve something' },
  { en: 'grief',        tr: 'yas',               wrong: 'kədər',         wen: 'joy',           def: 'deep sorrow caused by loss, especially through death' },
  { en: 'guilt',        tr: 'günah hissi',       wrong: 'peşmançılıq',   wen: 'innocence',     def: 'a feeling of having done something wrong or immoral' },
  { en: 'humiliation',  tr: 'alçaldılma',        wrong: 'utanc',         wen: 'pride',         def: 'the feeling of being ashamed or foolish because of something that has happened' },
  { en: 'irony',        tr: 'ironi',             wrong: 'sarkazm',       wen: 'sincerity',     def: 'a situation or statement that is the opposite of what is expected' },
  { en: 'obsession',    tr: 'obsessiya',         wrong: 'vəsvəsə',       wen: 'indifference',  def: 'a persistent and disturbing preoccupation with an idea or feeling' },
  { en: 'optimism',     tr: 'optimizm',          wrong: 'nikbinlik',     wen: 'pessimism',     def: 'hopefulness and confidence about the future' },
  { en: 'perception',   tr: 'qavrayış',          wrong: 'anlayış',       wen: 'ignorance',     def: 'the way in which something is regarded, understood or interpreted' },
  { en: 'psychological',tr: 'psixoloji',         wrong: 'emosional',     wen: 'physical',      def: 'relating to the mental and emotional state of a person' },
  { en: 'resentment',   tr: 'inciklik',          wrong: 'küskünlük',     wen: 'gratitude',     def: 'bitter indignation at having been treated unfairly' },
  { en: 'sentiment',    tr: 'hiss',              wrong: 'duyğu',         wen: 'indifference',  def: 'a view, opinion or feeling towards a situation or event' },
  { en: 'trauma',       tr: 'travma',            wrong: 'zərbə',         wen: 'healing',       def: 'a deeply distressing or disturbing experience' },
  { en: 'vulnerability',tr: 'həssaslıq',         wrong: 'zəiflik',       wen: 'resilience',    def: 'the state of being exposed to the possibility of being attacked or harmed' },
  { en: 'willingness',  tr: 'istək',             wrong: 'hazırlıq',      wen: 'reluctance',    def: 'the quality of being prepared to do something' }
],

// ─────────────────────── QUIZ 9 — Abstract Concepts & Thinking ───────────────────────
[
  { en: 'analogy',      tr: 'anoloji',           wrong: 'müqayisə',      wen: 'difference',    def: 'a comparison between two things to explain or clarify an idea' },
  { en: 'aspect',       tr: 'aspekt',            wrong: 'cəhət',         wen: 'whole',         def: 'a particular part or feature of something' },
  { en: 'assumption',   tr: 'fərziyyə',          wrong: 'nəticə',        wen: 'fact',          def: 'a thing that is accepted as true without proof' },
  { en: 'concept',      tr: 'konsept',           wrong: 'fikir',         wen: 'object',        def: 'an abstract idea or general notion' },
  { en: 'consciousness',tr: 'şüur',              wrong: 'idrak',         wen: 'ignorance',     def: 'the state of being aware of and able to think about one’s own existence' },
  { en: 'context',      tr: 'kontekst',          wrong: 'məzmun',        wen: 'isolation',     def: 'the circumstances that form the setting for an event or idea' },
  { en: 'criterion',    tr: 'meyar',             wrong: 'standart',      wen: 'opinion',       def: 'a principle or standard by which something is judged' },
  { en: 'dimension',    tr: 'ölçü',              wrong: 'aspekt',        wen: 'surface',       def: 'a measurable extent of a particular kind' },
  { en: 'doctrine',     tr: 'doktrina',          wrong: 'nəzəriyyə',     wen: 'practice',      def: 'a belief or set of beliefs held and taught by a group' },
  { en: 'essence',      tr: 'mahiyyət',          wrong: 'məzmun',        wen: 'appearance',    def: 'the intrinsic nature or indispensable quality of something' },
  { en: 'hypothesis',   tr: 'hipotez',           wrong: 'nəzəriyyə',     wen: 'fact',          def: 'a supposition or proposed explanation based on limited evidence' },
  { en: 'ideology',     tr: 'ideologiya',        wrong: 'fəlsəfə',       wen: 'sport',         def: 'a system of ideas and ideals forming the basis of economic or political theory' },
  { en: 'logic',        tr: 'məntiq',            wrong: 'düşüncə',       wen: 'emotion',       def: 'reasoning conducted according to strict principles of validity' },
  { en: 'notion',       tr: 'anlayış',           wrong: 'fikir',         wen: 'fact',          def: 'a conception of or belief about something' },
  { en: 'perspective',  tr: 'perspektiv',        wrong: 'baxış',         wen: 'fact',          def: 'a particular attitude or way of regarding something' },
  { en: 'philosophy',   tr: 'fəlsəfə',           wrong: 'ideologiya',    wen: 'science',       def: 'the study of the fundamental nature of knowledge, reality and existence' },
  { en: 'principle',    tr: 'prinsip',           wrong: 'qayda',         wen: 'practice',      def: 'a fundamental truth or proposition that serves as the foundation for a system of belief' },
  { en: 'reasoning',    tr: 'mühakimə',          wrong: 'düşüncə',       wen: 'emotion',       def: 'the process of thinking about something in a logical way' },
  { en: 'spectrum',     tr: 'spektr',            wrong: 'diapazon',      wen: 'point',         def: 'a range of different positions or opinions' },
  { en: 'thesis',       tr: 'tezis',             wrong: 'hipotez',       wen: 'fact',          def: 'a statement or theory put forward to be maintained or proved' }
],
      
// ─────────────────────── QUIZ 10 — Actions & Processes (1) ───────────────────────
[
  { en: 'accelerate',   tr: 'sürətləndirmək',    wrong: 'artırmaq',      wen: 'slow down',     def: 'to begin to move or happen more quickly' },
  { en: 'accumulate',   tr: 'toplamaq',          wrong: 'yığmaq',        wen: 'discard',       def: 'to gather together or acquire an increasing number or quantity of something' },
  { en: 'administer',   tr: 'idarə etmək',       wrong: 'tənzimləmək',   wen: 'ignore',        def: 'to manage and be responsible for the running of an organization' },
  { en: 'allocate',     tr: 'bölüşdürmək',       wrong: 'paylaşmaq',     wen: 'hoard',         def: 'to distribute resources according to a plan' },
  { en: 'assess',       tr: 'qiymətləndirmək',   wrong: 'yoxlamaq',      wen: 'ignore',        def: 'to evaluate or estimate the nature, ability or quality of something' },
  { en: 'attribute',    tr: 'aid etmək',         wrong: 'bağlamaq',      wen: 'detach',        def: 'to regard something as being caused by a person or thing' },
  { en: 'circulate',    tr: 'dövriyyəyə buraxmaq', wrong: 'yaymaq',      wen: 'conceal',       def: 'to pass or cause to pass from place to place or person to person' },
  { en: 'collaborate',  tr: 'əməkdaşlıq etmək',  wrong: 'birləşmək',     wen: 'compete',       def: 'to work jointly with others on an activity or project' },
  { en: 'compensate',   tr: 'kompensasiya vermək', wrong: 'ödəmək',      wen: 'punish',        def: 'to give someone something to reduce or balance the effect of loss or suffering' },
  { en: 'comprise',     tr: 'əhatə etmək',       wrong: 'daxil etmək',   wen: 'exclude',       def: 'to consist of or be made up of particular elements' },
  { en: 'conceive',     tr: 'düşünmək',          wrong: 'planlaşdırmaq', wen: 'forget',        def: 'to form or devise a plan or idea in the mind' },
  { en: 'confer',       tr: 'müzakirə etmək',    wrong: 'danışmaq',      wen: 'ignore',        def: 'to have discussions or exchange opinions' },
  { en: 'consolidate',  tr: 'möhkəmləndirmək',   wrong: 'birləşdirmək',  wen: 'weaken',        def: 'to make something physically stronger or more solid' },
  { en: 'constitute',   tr: 'təşkil etmək',      wrong: 'yaratmaq',      wen: 'dissolve',      def: 'to be a part of a whole or to form' },
  { en: 'coordinate',   tr: 'əlaqələndirmək',    wrong: 'idarə etmək',   wen: 'disrupt',       def: 'to organize different elements so they work together effectively' },
  { en: 'correlate',    tr: 'əlaqəsi olmaq',     wrong: 'müqayisə etmək', wen: 'isolate',       def: 'to have a mutual relationship or connection' },
  { en: 'demonstrate',  tr: 'nümayiş etdirmək',  wrong: 'göstərmək',     wen: 'conceal',       def: 'to show or prove something clearly' },
  { en: 'deploy',       tr: 'yerləşdirmək',      wrong: 'göndərmək',     wen: 'withdraw',      def: 'to bring into effective action or use' },
  { en: 'derive',       tr: 'hasil etmək',       wrong: 'almaq',         wen: 'lose',          def: 'to obtain something from a specified source' },
  { en: 'differentiate',tr: 'fərqləndirmək',     wrong: 'ayırmaq',       wen: 'confuse',       def: 'to recognize or show the difference between things' }
],

// ─────────────────────── QUIZ 11 — Actions & Processes (2) ───────────────────────
[
  { en: 'enforce',      tr: 'tətbiq etmək',               wrong: 'həyata keçirmək',     wen: 'ignore',        def: 'to compel observance of or obedience to a law, rule or command' },
  { en: 'enhance',      tr: 'artırmaq',                   wrong: 'yaxşılaşdırmaq',      wen: 'diminish',      def: 'to increase or improve the quality, value or extent of something' },
  { en: 'ensure',       tr: 'təmin etmək',                wrong: 'zəmanət vermək',      wen: 'risk',          def: 'to make certain that something will occur or be the case' },
  { en: 'establish',    tr: 'yaratmaq',                   wrong: 'qurmaq',              wen: 'abolish',       def: 'to set up or lay the foundations of something on a firm basis' },
  { en: 'evaluate',     tr: 'qiymətləndirmək',            wrong: 'yoxlamaq',            wen: 'dismiss',       def: 'to form an idea of the amount, number or value of something' },
  { en: 'evolve',       tr: 'inkişaf etmək',              wrong: 'dəyişmək',            wen: 'stagnate',      def: 'to develop gradually over time, especially from a simple to a more complex form' },
  { en: 'execute',      tr: 'icra etmək',                 wrong: 'həyata keçirmək',     wen: 'abandon',       def: 'to carry out or put into effect a plan, order or action' },
  { en: 'exert',        tr: 'səy göstərmək',              wrong: 'tətbiq etmək',        wen: 'relax',         def: 'to apply or bring to bear a force, influence or quality' },
  { en: 'facilitate',   tr: 'asanlaşdırmaq',              wrong: 'kömək etmək',         wen: 'hinder',        def: 'to make an action or process easier or less difficult' },
  { en: 'formulate',    tr: 'formalaşdırmaq',             wrong: 'hazırlamaq',          wen: 'destroy',       def: 'to create or devise a strategy, plan or method in a precise way' },
  { en: 'implement',    tr: 'həyata keçirmək',            wrong: 'tətbiq etmək',        wen: 'abandon',       def: 'to put a decision, plan or agreement into effect' },
  { en: 'impose',       tr: 'tətbiq etmək (məcburi)',     wrong: 'qoymaq',              wen: 'remove',        def: 'to force a law, rule or tax to be obeyed or paid' },
  { en: 'initiate',     tr: 'başlamaq',                   wrong: 'həyata keçirmək',     wen: 'terminate',     def: 'to cause a process or action to begin' },
  { en: 'integrate',    tr: 'inteqrasiya etmək',          wrong: 'birləşdirmək',        wen: 'separate',      def: 'to combine or bring together different elements into a whole' },
  { en: 'intervene',    tr: 'müdaxilə etmək',             wrong: 'qarışmaq',            wen: 'ignore',        def: 'to become involved in a situation in order to improve or control it' },
  { en: 'manipulate',   tr: 'manipulyasiya etmək',        wrong: 'idarə etmək',         wen: 'assist',        def: 'to control or influence someone or something in a clever or unscrupulous way' },
  { en: 'maximise',     tr: 'maksimallaşdırmaq',          wrong: 'artırmaq',            wen: 'minimise',      def: 'to make something as large or great as possible' },
  { en: 'minimise',     tr: 'minimuma endirmək',          wrong: 'azaltmaq',            wen: 'maximise',      def: 'to reduce something to the smallest possible amount or degree' },
  { en: 'monitor',      tr: 'izləmək',                   wrong: 'nəzarət etmək',       wen: 'ignore',        def: 'to observe and check the progress or quality of something over time' },
  { en: 'negotiate',    tr: 'danışıqlar aparmaq',         wrong: 'müzakirə etmək',      wen: 'refuse',        def: 'to discuss something in order to reach an agreement' }
],

// ─────────────────────── QUIZ 12 — Change & Development ───────────────────────
[
  { en: 'adaptation',   tr: 'adaptasiya',               wrong: 'dəyişiklik',          wen: 'stagnation',    def: 'the process of changing to suit new conditions' },
  { en: 'breakthrough', tr: 'irəliləyiş',               wrong: 'nailiyyət',           wen: 'setback',       def: 'an important discovery or development that advances progress' },
  { en: 'conversion',   tr: 'çevrilmə',                 wrong: 'dəyişiklik',          wen: 'stability',     def: 'the process of changing or causing something to change into a different form' },
  { en: 'deterioration',tr: 'pisləşmə',                 wrong: 'tənəzzül',            wen: 'improvement',   def: 'the process of becoming progressively worse' },
  { en: 'evolution',    tr: 'təkamül',                  wrong: 'inkişaf',             wen: 'revolution',    def: 'the gradual development of something from a simple to a more complex form' },
  { en: 'expansion',    tr: 'genişlənmə',               wrong: 'böyümə',              wen: 'contraction',   def: 'the action of becoming larger or more extensive' },
  { en: 'innovation',   tr: 'innovasiya',               wrong: 'ixtira',              wen: 'tradition',     def: 'a new idea, method or product that represents change' },
  { en: 'modification', tr: 'modifikasiya',             wrong: 'dəyişiklik',          wen: 'preservation',  def: 'a change made to improve or adapt something' },
  { en: 'progress',     tr: 'tərəqqi',                  wrong: 'inkişaf',             wen: 'regression',    def: 'forward or onward movement towards a destination or goal' },
  { en: 'reform',       tr: 'islahat',                  wrong: 'dəyişiklik',          wen: 'revolution',    def: 'a change for the better in a system or institution' },
  { en: 'revolution',   tr: 'inqilab',                  wrong: 'çevriliş',            wen: 'stability',     def: 'a dramatic and wide-reaching change in conditions or way of life' },
  { en: 'transformation',tr: 'transformasiya',          wrong: 'dəyişiklik',          wen: 'preservation',  def: 'a marked change in form, nature or appearance' },
  { en: 'transition',   tr: 'keçid',                    wrong: 'dəyişiklik',          wen: 'stability',     def: 'the process or period of changing from one state to another' },
  { en: 'upgrade',      tr: 'təkmilləşdirmə',           wrong: 'yeniləmə',            wen: 'downgrade',     def: 'the act of improving or raising something to a higher standard' },
  { en: 'accelerate',   tr: 'sürətləndirmək',           wrong: 'artırmaq',            wen: 'decelerate',    def: 'to begin to move or happen more quickly' },
  { en: 'evolve',       tr: 'inkişaf etmək',            wrong: 'dəyişmək',            wen: 'stagnate',      def: 'to develop gradually, especially from a simple to a more complex form' },
  { en: 'flourish',     tr: 'çiçəklənmək',              wrong: 'inkişaf etmək',       wen: 'decline',       def: 'to grow or develop in a healthy or vigorous way' },
  { en: 'thrive',       tr: 'uğurla inkişaf etmək',     wrong: 'böyümək',             wen: 'decline',       def: 'to grow or develop vigorously and successfully' },
  { en: 'undermine',    tr: 'zəiflətmək',               wrong: 'baltalamaq',          wen: 'strengthen',    def: 'to gradually weaken or damage something' },
  { en: 'upgrade',      tr: 'təkmilləşdirmək',          wrong: 'yeniləmək',           wen: 'downgrade',     def: 'to raise something to a higher standard or level' }
],

// ─────────────────────── QUIZ 13 — Media & Communication ───────────────────────
[
  { en: 'broadcast',    tr: 'yayımlamaq',               wrong: 'nəşr etmək',          wen: 'conceal',       def: 'to transmit radio or television programmes to a wide audience' },
  { en: 'commentary',   tr: 'şərh',                     wrong: 'rəy',                 wen: 'silence',       def: 'a set of explanatory notes or opinions on an event or text' },
  { en: 'correspondent',tr: 'müxbir',                   wrong: 'jurnalist',           wen: 'scientist',     def: 'a journalist who reports from a particular place or on a specific subject' },
  { en: 'coverage',     tr: 'işıqlandırma',             wrong: 'xəbər',               wen: 'ignorance',     def: 'the extent to which something is reported or dealt with by the media' },
  { en: 'discourse',    tr: 'diskurs',                  wrong: 'müzakirə',            wen: 'silence',       def: 'written or spoken communication or debate' },
  { en: 'editor',       tr: 'redaktor',                 wrong: 'jurnalist',           wen: 'author',        def: 'a person who is in charge of and selects material for a publication' },
  { en: 'headline',     tr: 'başlıq',                   wrong: 'xəbər',               wen: 'footnote',      def: 'the heading at the top of a newspaper story' },
  { en: 'journalist',   tr: 'jurnalist',                wrong: 'müxbir',              wen: 'scientist',     def: 'a person who writes for newspapers, magazines or news websites' },
  { en: 'propaganda',   tr: 'təbliğat',                 wrong: 'reklam',              wen: 'truth',         def: 'information, especially of a biased or misleading nature, used to promote a political cause' },
  { en: 'publication',  tr: 'nəşr',                     wrong: 'məqalə',              wen: 'manuscript',    def: 'a book, journal or other printed material that is issued for sale' },
  { en: 'rhetoric',     tr: 'ritorika',                 wrong: 'natiqlik',            wen: 'silence',       def: 'the art of effective or persuasive speaking or writing' },
  { en: 'scrutiny',     tr: 'diqqətli nəzarət',         wrong: 'yoxlama',             wen: 'neglect',       def: 'critical observation or examination' },
  { en: 'spectrum',     tr: 'spektr',                   wrong: 'diapazon',            wen: 'point',         def: 'a wide range of different but related ideas or opinions' },
  { en: 'transcript',   tr: 'transkript',               wrong: 'protokol',            wen: 'summary',       def: 'a written or printed version of material originally presented in another medium' },
  { en: 'transmission', tr: 'ötürülmə',                 wrong: 'yayım',               wen: 'reception',     def: 'the action or process of transmitting something' },
  { en: 'articulate',   tr: 'aydın ifadə etmək',        wrong: 'danışmaq',            wen: 'mumble',        def: 'to express an idea or feeling fluently and coherently' },
  { en: 'convey',       tr: 'çatdırmaq',                wrong: 'bildirmək',           wen: 'conceal',       def: 'to communicate or make known an idea or feeling' },
  { en: 'explicit',     tr: 'açıq',                     wrong: 'aydın',               wen: 'vague',         def: 'stated clearly and in detail, leaving no room for confusion' },
  { en: 'implicit',     tr: 'gizli',                    wrong: 'örtülü',              wen: 'explicit',      def: 'implied though not plainly expressed' },
  { en: 'irony',        tr: 'ironi',                    wrong: 'sarkazm',             wen: 'sincerity',     def: 'a situation or statement that is the opposite of what is expected' }
],

// ─────────────────────── QUIZ 14 — Science & Research ───────────────────────
[
  { en: 'empirical',    tr: 'empirik',                  wrong: 'nəzəri',              wen: 'theoretical',   def: 'based on observation or experience rather than theory' },
  { en: 'hypothesis',   tr: 'hipotez',                  wrong: 'nəzəriyyə',           wen: 'fact',          def: 'a supposition or proposed explanation made on the basis of limited evidence' },
  { en: 'laboratory',   tr: 'laboratoriya',             wrong: 'tədqiqat mərkəzi',    wen: 'office',        def: 'a room or building equipped for scientific experiments and research' },
  { en: 'parameter',    tr: 'parametr',                 wrong: 'göstərici',           wen: 'constant',      def: 'a numerical or other measurable factor that defines a system' },
  { en: 'ratio',        tr: 'nisbət',                   wrong: 'faiz',                wen: 'difference',    def: 'the quantitative relation between two amounts' },
  { en: 'specimen',     tr: 'nümunə',                   wrong: 'model',               wen: 'prototype',     def: 'a sample or example used for scientific study or testing' },
  { en: 'statistical',  tr: 'statistik',                wrong: 'rəqəmsal',            wen: 'qualitative',   def: 'relating to the use of statistics or data analysis' },
  { en: 'synthesis',    tr: 'sintez',                   wrong: 'analiz',              wen: 'separation',    def: 'the combination of ideas or elements to form a connected whole' },
  { en: 'theoretical',  tr: 'nəzəri',                   wrong: 'empirik',             wen: 'practical',     def: 'concerned with or involving the theory of a subject rather than its practical application' },
  { en: 'thesis',       tr: 'tezis',                    wrong: 'hipotez',             wen: 'fact',          def: 'a statement or theory put forward to be maintained or proved' },
  { en: 'variable',     tr: 'dəyişən',                  wrong: 'sabit',               wen: 'constant',      def: 'a factor that can change in a scientific experiment' },
  { en: 'analysis',     tr: 'analiz',                   wrong: 'tədqiqat',            wen: 'synthesis',     def: 'a detailed examination of the elements or structure of something' },
  { en: 'correlation',  tr: 'korrelyasiya',             wrong: 'əlaqə',               wen: 'isolation',     def: 'a mutual relationship or connection between two or more things' },
  { en: 'diagnosis',    tr: 'diaqnoz',                  wrong: 'müayinə',             wen: 'prognosis',     def: 'the identification of the nature of an illness or problem' },
  { en: 'equation',     tr: 'tənlik',                   wrong: 'düstur',              wen: 'inequality',    def: 'a statement that the values of two mathematical expressions are equal' },
  { en: 'experimental', tr: 'eksperimental',            wrong: 'praktik',             wen: 'theoretical',   def: 'based on or derived from experiment rather than theory' },
  { en: 'genetic',      tr: 'genetik',                  wrong: 'bioloji',             wen: 'cultural',      def: 'relating to genes or heredity' },
  { en: 'molecular',    tr: 'molekulyar',               wrong: 'atomik',              wen: 'macroscopic',   def: 'relating to or consisting of molecules' },
  { en: 'quantum',      tr: 'kvant',                    wrong: 'nüvə',                wen: 'classical',     def: 'relating to quantum mechanics or discrete amounts of energy' },
  { en: 'simulation',   tr: 'simulyasiya',              wrong: 'model',               wen: 'reality',       def: 'imitation of a situation or process for study or training' }
],

// ─────────────────────── QUIZ 15 — Health & Medicine ───────────────────────
[
  { en: 'chronic',      tr: 'xroniki',                  wrong: 'kəskin',              wen: 'acute',         def: 'persisting for a long time or constantly recurring' },
  { en: 'diagnosis',    tr: 'diaqnoz',                  wrong: 'müayinə',             wen: 'prognosis',     def: 'the identification of the nature of an illness or problem' },
  { en: 'epidemic',     tr: 'epidemiya',                wrong: 'pandemiya',           wen: 'endemic',       def: 'the rapid spread of a disease to many people in a community' },
  { en: 'infection',    tr: 'infeksiya',                wrong: 'virus',               wen: 'immunity',      def: 'the invasion of an organism’s body tissues by disease-causing agents' },
  { en: 'injection',    tr: 'iynə',                     wrong: 'dərman',              wen: 'pill',          def: 'the act of administering a liquid medicine with a syringe' },
  { en: 'medication',   tr: 'dərman',                   wrong: 'müalicə',             wen: 'surgery',       def: 'a drug or other form of medicine used to treat illness' },
  { en: 'obesity',      tr: 'piylənmə',                 wrong: 'artıq çəki',          wen: 'underweight',   def: 'the condition of being grossly fat or overweight' },
  { en: 'outbreak',     tr: 'xəstəliyin kütləvi yayılması', wrong: 'epidemiya',     wen: 'remission',     def: 'the sudden or violent start of something unwelcome such as war or disease' },
  { en: 'psychiatric',  tr: 'psixiatrik',               wrong: 'psixoloji',           wen: 'physical',      def: 'relating to the study and treatment of mental illness' },
  { en: 'rehabilitation',tr: 'reabilitasiya',           wrong: 'müalicə',             wen: 'deterioration', def: 'the action of restoring someone to health or normal life' },
  { en: 'surgeon',      tr: 'cərrah',                   wrong: 'həkim',               wen: 'physician',     def: 'a medical practitioner qualified to practise surgery' },
  { en: 'surgery',      tr: 'cərrahiyyə',               wrong: 'əməliyyat',           wen: 'medicine',      def: 'medical treatment in which a doctor cuts open the body' },
  { en: 'syndrome',     tr: 'sindrom',                  wrong: 'xəstəlik',            wen: 'symptom',       def: 'a group of symptoms that consistently occur together' },
  { en: 'therapy',      tr: 'terapiya',                 wrong: 'müalicə',             wen: 'diagnosis',     def: 'treatment intended to relieve or heal a disorder' },
  { en: 'trauma',       tr: 'travma',                   wrong: 'zərbə',               wen: 'healing',       def: 'a deeply distressing or disturbing experience' },
  { en: 'tumour',       tr: 'şiş',                      wrong: 'xərçəng',             wen: 'benign growth', def: 'a mass of cells growing abnormally in the body' },
  { en: 'vaccine',      tr: 'vaksin',                   wrong: 'dərman',              wen: 'antibiotic',    def: 'a substance used to stimulate the production of antibodies and provide immunity' },
  { en: 'virus',        tr: 'virus',                    wrong: 'bakteriya',           wen: 'bacteria',      def: 'a microscopic infectious agent that replicates inside living cells' },
  { en: 'clinical',     tr: 'klinik',                   wrong: 'tibbi',               wen: 'theoretical',   def: 'relating to the observation and treatment of actual patients' },
  { en: 'physician',    tr: 'terapevt',                 wrong: 'cərrah',              wen: 'surgeon',       def: 'a medical practitioner who treats general medical conditions' }
],

// ─────────────────────── QUIZ 16 — Environment & Nature ───────────────────────
[
  { en: 'biodiversity', tr: 'biomüxtəliflik',           wrong: 'ekosistem',           wen: 'uniformity',    def: 'the variety of plant and animal life in a particular habitat' },
  { en: 'conservation', tr: 'mühafizə',                 wrong: 'qoruma',              wen: 'exploitation',  def: 'the protection and preservation of the natural environment' },
  { en: 'ecological',   tr: 'ekoloji',                  wrong: 'ətraf mühit',         wen: 'economic',      def: 'relating to the relationships between living organisms and their environment' },
  { en: 'emission',     tr: 'emissiya',                 wrong: 'çirklənmə',           wen: 'absorption',    def: 'the production and discharge of something, especially gas or radiation' },
  { en: 'greenhouse',   tr: 'istixana',                 wrong: 'emissiya',            wen: 'hospital',      def: 'a glass building used for growing plants that need protection' },
  { en: 'pollution',    tr: 'çirklənmə',                wrong: 'çirkab',              wen: 'cleanliness',   def: 'the presence of harmful substances in the environment' },
  { en: 'renewable',    tr: 'bərpa olunan',             wrong: 'alternativ',          wen: 'exhaustible',   def: 'energy from a source that is not depleted when used' },
  { en: 'sustainable',  tr: 'davamlı',                  wrong: 'ekoloji',             wen: 'temporary',     def: 'able to be maintained at a certain rate or level without depleting resources' },
  { en: 'wildlife',     tr: 'vəhşi təbiət',             wrong: 'fauna',               wen: 'technology',    def: 'wild animals and plants collectively' },
  { en: 'climate',      tr: 'iqlim',                    wrong: 'hava',                wen: 'economy',       def: 'the long-term weather conditions in a particular region' },
  { en: 'degradation',  tr: 'deqradasiya',              wrong: 'pisləşmə',            wen: 'improvement',   def: 'the process of becoming worse in condition' },
  { en: 'habitat',      tr: 'yaşayış mühiti',           wrong: 'ekosistem',           wen: 'city',          def: 'the natural home or environment of an animal or plant' },
  { en: 'marine',       tr: 'dəniz (sifət)',             wrong: 'su',                  wen: 'terrestrial',   def: 'relating to the sea' },
  { en: 'sustainability',tr: 'davamlılıq',              wrong: 'bərpa',               wen: 'depletion',     def: 'the ability to be maintained at a certain rate or level' },
  { en: 'ecosystem',    tr: 'ekosistem',                wrong: 'biomüxtəliflik',      wen: 'city',          def: 'a biological community of interacting organisms and their physical environment' },
  { en: 'erosion',      tr: 'eroziya',                  wrong: 'parçalanma',          wen: 'accumulation',  def: 'the process of eroding or being eroded by wind, water or other natural agents' },
  { en: 'extinction',   tr: 'nəslin kəsilməsi',         wrong: 'yoxa çıxma',          wen: 'proliferation', def: 'the state of a species no longer existing' },
  { en: 'ozone',        tr: 'ozon',                     wrong: 'atmosfer',            wen: 'oxygen',        def: 'a colourless unstable gas that forms a protective layer in the atmosphere' },
  { en: 'recycling',    tr: 'təkrar emal',              wrong: 'utilizasiya',         wen: 'disposal',      def: 'the process of converting waste into reusable material' },
  { en: 'toxic',        tr: 'zəhərli',                  wrong: 'təhlükəli',           wen: 'harmless',      def: 'containing or being poisonous' }
],

// ─────────────────────── QUIZ 17 — Art, Culture & Entertainment ───────────────────────
[
  { en: 'aesthetic',    tr: 'estetik',                  wrong: 'bədii',               wen: 'practical',     def: 'concerned with beauty or the appreciation of beauty' },
  { en: 'architectural',tr: 'memarlıq (sifət)',         wrong: 'dizayn',              wen: 'musical',       def: 'relating to the design and construction of buildings' },
  { en: 'artistic',     tr: 'bədii',                    wrong: 'yaradıcı',            wen: 'scientific',    def: 'having or revealing creative skill and imagination' },
  { en: 'canvas',       tr: 'kətan',                    wrong: 'rəsm',                wen: 'paper',         def: 'a strong cloth used as a surface for painting' },
  { en: 'classical',    tr: 'klassik',                  wrong: 'ənənəvi',             wen: 'modern',        def: 'relating to ancient Greek or Roman culture' },
  { en: 'contemporary', tr: 'müasir',                   wrong: 'çağdaş',              wen: 'historical',    def: 'belonging to or occurring in the present' },
  { en: 'exhibition',   tr: 'sərgi',                    wrong: 'muzey',               wen: 'hospital',      def: 'a public display of works of art or items of interest' },
  { en: 'genre',        tr: 'janr',                     wrong: 'üslub',               wen: 'theme',         def: 'a category of artistic composition' },
  { en: 'heritage',     tr: 'miras',                    wrong: 'ənənə',               wen: 'future',        def: 'property or traditions that are inherited from the past' },
  { en: 'literature',   tr: 'ədəbiyyat',                wrong: 'şeir',                wen: 'science',       def: 'written works, especially those considered of superior artistic merit' },
  { en: 'manuscript',   tr: 'əlyazması',                wrong: 'sənəd',               wen: 'printed book',  def: 'a book or document written by hand' },
  { en: 'masterpiece',  tr: 'şah əsər',                 wrong: 'klassik',             wen: 'mediocrity',    def: 'a work of outstanding artistry or skill' },
  { en: 'melody',       tr: 'melodiya',                 wrong: 'musiqi',              wen: 'rhythm',        def: 'a sequence of single notes that is musically satisfying' },
  { en: 'orchestra',    tr: 'orkestr',                  wrong: 'ansambl',             wen: 'choir',         def: 'a large group of musicians who play various instruments together' },
  { en: 'portrait',     tr: 'portret',                  wrong: 'rəsm',                wen: 'landscape',     def: 'a painting, drawing or photograph of a person' },
  { en: 'sculpture',    tr: 'heykəltəraşlıq',           wrong: 'rəssamlıq',           wen: 'painting',      def: 'the art of making three-dimensional figures by carving or shaping' },
  { en: 'symphony',     tr: 'simfoniya',                wrong: 'konçerto',            wen: 'solo',          def: 'an elaborate musical composition for full orchestra' },
  { en: 'theatrical',   tr: 'teatr (sifət)',            wrong: 'dramatik',            wen: 'mundane',       def: 'relating to acting, actors or the theatre' },
  { en: 'masterpiece',  tr: 'şah əsər',                 wrong: 'nadir əsər',          wen: 'mediocrity',    def: 'a work of outstanding artistry or skill' },
  { en: 'legendary',    tr: 'əfsanəvi',                 wrong: 'məşhur',              wen: 'ordinary',      def: 'remarkable enough to be famous or well known' }
],

// ─────────────────────── QUIZ 18 — Personality & Character ───────────────────────
[
  { en: 'cynical',      tr: 'kinik',                    wrong: 'şübhəci',             wen: 'trusting',      def: 'believing that people are motivated purely by self-interest' },
  { en: 'optimistic',   tr: 'nikbin',                   wrong: 'ümidli',              wen: 'pessimistic',   def: 'hopeful and confident about the future' },
  { en: 'pessimistic',  tr: 'bədbin',                   wrong: 'kədərli',             wen: 'optimistic',    def: 'tending to see the worst aspect of things' },
  { en: 'resilient',    tr: 'davamlı',                  wrong: 'güclü',               wen: 'fragile',       def: 'able to withstand or recover quickly from difficult conditions' },
  { en: 'sophisticated',tr: 'zərif',                    wrong: 'mürəkkəb',            wen: 'naive',         def: 'having or showing a refined understanding of the world' },
  { en: 'stubborn',     tr: 'inadkar',                  wrong: 'sərt',                wen: 'flexible',      def: 'determined not to change one’s attitude or position' },
  { en: 'ambitious',    tr: 'ambisiyalı',               wrong: 'hədəfli',             wen: 'apathetic',     def: 'having a strong desire to succeed' },
  { en: 'arrogant',     tr: 'təkəbbürlü',               wrong: 'özündən razı',        wen: 'humble',        def: 'having an exaggerated sense of one’s own importance' },
  { en: 'charismatic',  tr: 'xarizmatik',               wrong: 'cəlbedici',           wen: 'dull',          def: 'exercising a compelling charm that inspires devotion' },
  { en: 'compassionate',tr: 'şəfqətli',                 wrong: 'mehriban',            wen: 'cruel',         def: 'feeling or showing sympathy and concern for others' },
  { en: 'diplomatic',   tr: 'diplomatik',               wrong: 'nəzakətli',           wen: 'blunt',         def: 'having or showing skill in dealing with people' },
  { en: 'eccentric',    tr: 'ekssentrik',               wrong: 'qəribə',              wen: 'conventional',  def: 'unconventional and slightly strange' },
  { en: 'humble',       tr: 'təvazökar',                wrong: 'sadə',                wen: 'arrogant',      def: 'having or showing a modest or low estimate of one’s own importance' },
  { en: 'influential',  tr: 'təsirli',                  wrong: 'güclü',               wen: 'insignificant', def: 'having great influence on someone or something' },
  { en: 'naive',        tr: 'sadəlövh',                 wrong: 'güvənən',             wen: 'cynical',       def: 'lacking experience, wisdom or judgement' },
  { en: 'notorious',    tr: 'bədnam',                   wrong: 'məşhur',              wen: 'respected',     def: 'famous or well known, typically for some bad quality' },
  { en: 'prestigious',  tr: 'nüfuzlu',                  wrong: 'hörmətli',            wen: 'obscure',       def: 'inspiring respect and admiration' },
  { en: 'radical',      tr: 'radikal',                  wrong: 'ekstremist',          wen: 'moderate',      def: 'relating to or affecting the fundamental nature of something' },
  { en: 'sceptical',    tr: 'şübhəci',                  wrong: 'ehtiyatlı',           wen: 'trusting',      def: 'not easily convinced or having doubts' },
  { en: 'tolerant',     tr: 'tolerant',                 wrong: 'hörmətli',            wen: 'intolerant',    def: 'showing willingness to allow the existence of opinions or behaviour different from one’s own' }
],

// ─────────────────────── QUIZ 19 — War & Military ───────────────────────
[
  { en: 'battlefield',  tr: 'döyüş meydanı',            wrong: 'cəbhə',               wen: 'playground',    def: 'the piece of ground on which a battle is fought' },
  { en: 'combat',       tr: 'döyüş',                    wrong: 'müharibə',            wen: 'cooperation',   def: 'fighting between armed forces' },
  { en: 'deployment',   tr: 'yerləşdirmə',              wrong: 'göndərmə',            wen: 'withdrawal',    def: 'the movement of troops or equipment to a place where they are needed' },
  { en: 'invasion',     tr: 'işğal',                    wrong: 'hücum',               wen: 'retreat',       def: 'an act of invading a country or region with an armed force' },
  { en: 'militant',     tr: 'silahlı',                  wrong: 'döyüşçü',             wen: 'pacifist',      def: 'a person who is engaged in aggressive or violent action' },
  { en: 'military',     tr: 'hərbi',                    wrong: 'silahlı',             wen: 'civilian',      def: 'relating to or characteristic of soldiers or armed forces' },
  { en: 'missile',      tr: 'raket',                    wrong: 'bomba',               wen: 'shield',        def: 'a weapon that is self-propelled or directed' },
  { en: 'troop',        tr: 'qoşun',                    wrong: 'dəstə',               wen: 'civilian',      def: 'soldiers or armed forces' },
  { en: 'veteran',      tr: 'veteran',                  wrong: 'əsgər',               wen: 'recruit',       def: 'a person who has had long experience in a particular field' },
  { en: 'warfare',      tr: 'müharibə',                 wrong: 'döyüş',               wen: 'peace',         def: 'the activity of fighting a war' },
  { en: 'warrior',      tr: 'döyüşçü',                  wrong: 'əsgər',               wen: 'pacifist',      def: 'a brave or experienced soldier or fighter' },
  { en: 'armed',        tr: 'silahlı',                  wrong: 'hərbi',               wen: 'unarmed',       def: 'carrying or equipped with weapons' },
  { en: 'artillery',    tr: 'artilleriya',              wrong: 'silah',               wen: 'infantry',      def: 'large-calibre guns used in warfare on land' },
  { en: 'ceasefire',    tr: 'atəşkəs',                  wrong: 'sülh',                wen: 'war',           def: 'a temporary stopping of fighting' },
  { en: 'conflict',     tr: 'münaqişə',                 wrong: 'toqquşma',            wen: 'harmony',       def: 'a serious disagreement or argument' },
  { en: 'defence',      tr: 'müdafiə',                  wrong: 'qorunma',             wen: 'attack',        def: 'the action of protecting from attack' },
  { en: 'offensive',    tr: 'hücum',                    wrong: 'basqın',              wen: 'defensive',     def: 'an attacking military campaign' },
  { en: 'strategic',    tr: 'strateji',                 wrong: 'taktik',              wen: 'tactical',      def: 'relating to long-term military planning' },
  { en: 'surrender',    tr: 'təslim olmaq',             wrong: 'geri çəkilmək',       wen: 'resist',        def: 'to cease resistance to an enemy and submit to their authority' },
  { en: 'tactical',     tr: 'taktik',                   wrong: 'strateji',            wen: 'strategic',     def: 'relating to short-term military planning' }
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
  { en: 'absurd',       tr: 'absurd',                   wrong: 'mənasız',             wen: 'sensible',      def: 'wildly unreasonable, illogical or inappropriate' },
  { en: 'ambitious',    tr: 'ambisiyalı',               wrong: 'hədəfli',             wen: 'apathetic',     def: 'having a strong desire for success' },
  { en: 'arrogant',     tr: 'təkəbbürlü',               wrong: 'özündən razı',        wen: 'humble',        def: 'having an exaggerated sense of one’s own importance' },
  { en: 'charismatic',  tr: 'xarizmatik',               wrong: 'cəlbedici',           wen: 'dull',          def: 'exercising a compelling charm that inspires devotion' },
  { en: 'cynical',      tr: 'kinik',                    wrong: 'şübhəci',             wen: 'trusting',      def: 'believing that people are motivated purely by self-interest' },
  { en: 'dedicated',    tr: 'sadiq',                    wrong: 'həvəsli',             wen: 'indifferent',   def: 'devoted to a task or purpose' },
  { en: 'determined',   tr: 'qətiyyətli',               wrong: 'iradəli',             wen: 'indecisive',    def: 'having a firm decision or being resolved to do something' },
  { en: 'eccentric',    tr: 'ekssentrik',               wrong: 'qəribə',              wen: 'conventional',  def: 'unconventional and slightly strange' },
  { en: 'humble',       tr: 'təvazökar',                wrong: 'sadə',                wen: 'arrogant',      def: 'having or showing a modest or low estimate of one’s own importance' },
  { en: 'influential',  tr: 'təsirli',                  wrong: 'güclü',               wen: 'insignificant', def: 'having great influence on someone or something' },
  { en: 'naive',        tr: 'sadəlövh',                 wrong: 'güvənən',             wen: 'cynical',       def: 'lacking experience, wisdom or judgement' },
  { en: 'notorious',    tr: 'bədnam',                   wrong: 'məşhur',              wen: 'respected',     def: 'famous or well known, typically for some bad quality' },
  { en: 'optimistic',   tr: 'nikbin',                   wrong: 'ümidli',              wen: 'pessimistic',   def: 'hopeful and confident about the future' },
  { en: 'prestigious',  tr: 'nüfuzlu',                  wrong: 'hörmətli',            wen: 'obscure',       def: 'inspiring respect and admiration' },
  { en: 'radical',      tr: 'radikal',                  wrong: 'ekstremist',          wen: 'moderate',      def: 'relating to or affecting the fundamental nature of something' },
  { en: 'resilient',    tr: 'davamlı',                  wrong: 'güclü',               wen: 'fragile',       def: 'able to withstand or recover quickly from difficult conditions' },
  { en: 'sceptical',    tr: 'şübhəci',                  wrong: 'ehtiyatlı',           wen: 'trusting',      def: 'not easily convinced or having doubts' },
  { en: 'sophisticated',tr: 'zərif',                    wrong: 'mürəkkəb',            wen: 'naive',         def: 'having or showing a refined understanding of the world' },
  { en: 'stubborn',     tr: 'inadkar',                  wrong: 'sərt',                wen: 'flexible',      def: 'determined not to change one’s attitude or position' },
  { en: 'tolerant',     tr: 'tolerant',                 wrong: 'hörmətli',            wen: 'intolerant',    def: 'showing willingness to allow the existence of opinions or behaviour different from one’s own' }
],

// ─────────────────────── QUIZ 22 — Abstract & Philosophical Concepts ───────────────────────
[
  { en: 'autonomy',     tr: 'muxtariyyət',              wrong: 'azadlıq',             wen: 'dependence',    def: 'the right or condition of self-government' },
  { en: 'consciousness',tr: 'şüur',                     wrong: 'idrak',               wen: 'ignorance',     def: 'the state of being aware of and able to think about one’s own existence' },
  { en: 'dignity',      tr: 'ləyaqət',                  wrong: 'şərəf',               wen: 'humiliation',   def: 'the quality of being worthy of respect or honour' },
  { en: 'doctrine',     tr: 'doktrina',                 wrong: 'nəzəriyyə',           wen: 'practice',      def: 'a belief or set of beliefs held and taught by a group' },
  { en: 'essence',      tr: 'mahiyyət',                 wrong: 'məzmun',              wen: 'appearance',    def: 'the intrinsic nature or indispensable quality of something' },
  { en: 'ideology',     tr: 'ideologiya',               wrong: 'fəlsəfə',             wen: 'sport',         def: 'a system of ideas and ideals forming the basis of economic or political theory' },
  { en: 'integrity',    tr: 'dürüstlük',                wrong: 'vicdanlılıq',         wen: 'corruption',    def: 'the quality of being honest and having strong moral principles' },
  { en: 'irony',        tr: 'ironi',                    wrong: 'sarkazm',             wen: 'sincerity',     def: 'a situation or statement that is the opposite of what is expected' },
  { en: 'morality',     tr: 'əxlaq',                    wrong: 'vicdan',              wen: 'immorality',    def: 'principles concerning the distinction between right and wrong' },
  { en: 'notion',       tr: 'anlayış',                  wrong: 'fikir',               wen: 'fact',          def: 'a conception of or belief about something' },
  { en: 'philosophy',   tr: 'fəlsəfə',                  wrong: 'ideologiya',          wen: 'science',       def: 'the study of the fundamental nature of knowledge, reality and existence' },
  { en: 'principle',    tr: 'prinsip',                  wrong: 'qayda',               wen: 'practice',      def: 'a fundamental truth or proposition that serves as the foundation for a system' },
  { en: 'reasoning',    tr: 'mühakimə',                 wrong: 'düşüncə',             wen: 'emotion',       def: 'the process of thinking about something in a logical way' },
  { en: 'solidarity',   tr: 'həmrəylik',                wrong: 'birlik',              wen: 'division',      def: 'unity or agreement of feeling or action among individuals' },
  { en: 'sovereignty',  tr: 'suverenlik',               wrong: 'müstəqillik',         wen: 'dependence',    def: 'the full right and power of a country to govern itself' },
  { en: 'virtue',       tr: 'fəzilət',                  wrong: 'dəyər',               wen: 'vice',          def: 'behaviour showing high moral standards' },
  { en: 'consensus',    tr: 'konsensus',                wrong: 'razılaşma',           wen: 'disagreement',  def: 'general agreement among a group of people' },
  { en: 'controversy',  tr: 'mübahisə',                 wrong: 'ziddiyyət',           wen: 'agreement',     def: 'prolonged public disagreement or heated discussion' },
  { en: 'paradox',      tr: 'paradoks',                 wrong: 'ziddiyyət',           wen: 'certainty',     def: 'a statement that seems contradictory but may be true' },
  { en: 'dilemma',      tr: 'dilemma',                  wrong: 'problem',             wen: 'solution',      def: 'a situation in which a difficult choice has to be made between two or more alternatives' }
],

// ─────────────────────── QUIZ 23 — Actions & Processes (3) ───────────────────────
[
  { en: 'abolish',      tr: 'ləğv etmək',               wrong: 'qadağan etmək',       wen: 'establish',     def: 'to officially end a law, system or institution' },
  { en: 'accelerate',   tr: 'sürətləndirmək',           wrong: 'artırmaq',            wen: 'decelerate',    def: 'to begin to move or happen more quickly' },
  { en: 'accumulate',   tr: 'toplamaq',                 wrong: 'yığmaq',              wen: 'discard',       def: 'to gather together or acquire an increasing number or quantity of something' },
  { en: 'adhere',       tr: 'riayət etmək',             wrong: 'bağlı olmaq',         wen: 'deviate',       def: 'to stick fast to a surface or to a rule or agreement' },
  { en: 'allocate',     tr: 'bölüşdürmək',              wrong: 'paylaşmaq',           wen: 'hoard',         def: 'to distribute resources according to a plan' },
  { en: 'articulate',   tr: 'aydın ifadə etmək',        wrong: 'danışmaq',            wen: 'mumble',        def: 'to express an idea or feeling fluently and coherently' },
  { en: 'assemble',     tr: 'toplamaq',                 wrong: 'yığmaq',              wen: 'disperse',      def: 'to gather together in one place for a common purpose' },
  { en: 'assert',       tr: 'iddia etmək',              wrong: 'bildirmək',           wen: 'deny',          def: 'to state a fact or belief confidently and forcefully' },
  { en: 'attribute',    tr: 'aid etmək',                wrong: 'bağlamaq',            wen: 'detach',        def: 'to regard something as being caused by a person or thing' },
  { en: 'circulate',    tr: 'dövriyyəyə buraxmaq',      wrong: 'yaymaq',              wen: 'conceal',       def: 'to pass or cause to pass from place to place or person to person' },
  { en: 'collaborate',  tr: 'əməkdaşlıq etmək',         wrong: 'birləşmək',           wen: 'compete',       def: 'to work jointly with others on an activity or project' },
  { en: 'compel',       tr: 'məcbur etmək',             wrong: 'sövq etmək',          wen: 'persuade',      def: 'to force or oblige someone to do something' },
  { en: 'compile',      tr: 'tərtib etmək',             wrong: 'toplamaq',            wen: 'destroy',       def: 'to produce a list, book or report by assembling information' },
  { en: 'comprise',     tr: 'əhatə etmək',              wrong: 'daxil etmək',         wen: 'exclude',       def: 'to consist of or be made up of particular elements' },
  { en: 'concede',      tr: 'etiraf etmək',             wrong: 'qəbul etmək',         wen: 'refuse',        def: 'to admit or agree that something is true' },
  { en: 'conceive',     tr: 'düşünmək',                 wrong: 'planlaşdırmaq',       wen: 'forget',        def: 'to form or devise a plan or idea in the mind' },
  { en: 'confer',       tr: 'müzakirə etmək',           wrong: 'danışmaq',            wen: 'ignore',        def: 'to have discussions or exchange opinions' },
  { en: 'consolidate',  tr: 'möhkəmləndirmək',          wrong: 'birləşdirmək',        wen: 'weaken',        def: 'to make something physically stronger or more solid' },
  { en: 'constitute',   tr: 'təşkil etmək',             wrong: 'yaratmaq',            wen: 'dissolve',      def: 'to be a part of a whole or to form' },
  { en: 'coordinate',   tr: 'əlaqələndirmək',           wrong: 'idarə etmək',         wen: 'disrupt',       def: 'to organize different elements so they work together effectively' }
],

// ─────────────────────── QUIZ 24 — Change, Development & Movement ───────────────────────
[
  { en: 'adaptation',   tr: 'adaptasiya',               wrong: 'dəyişiklik',          wen: 'stagnation',    def: 'the process of changing to suit new conditions' },
  { en: 'breakthrough', tr: 'irəliləyiş',               wrong: 'nailiyyət',           wen: 'setback',       def: 'an important discovery or development that advances progress' },
  { en: 'conversion',   tr: 'çevrilmə',                 wrong: 'dəyişiklik',          wen: 'stability',     def: 'the process of changing or causing something to change into a different form' },
  { en: 'deteriorate',  tr: 'pisləşmək',                wrong: 'tənəzzül etmək',      wen: 'improve',       def: 'to become progressively worse' },
  { en: 'diminish',     tr: 'azalmaq',                  wrong: 'kiçilmək',            wen: 'increase',      def: 'to make or become less' },
  { en: 'escalate',     tr: 'güclənmək',                wrong: 'artmaq',              wen: 'de-escalate',   def: 'to become or make something more intense' },
  { en: 'evolve',       tr: 'inkişaf etmək',            wrong: 'dəyişmək',            wen: 'stagnate',      def: 'to develop gradually from a simple to a more complex form' },
  { en: 'expand',       tr: 'genişlənmək',              wrong: 'böyümək',             wen: 'contract',      def: 'to become or make larger in size or extent' },
  { en: 'flourish',     tr: 'çiçəklənmək',              wrong: 'inkişaf etmək',       wen: 'decline',       def: 'to grow or develop in a healthy or vigorous way' },
  { en: 'intensify',    tr: 'güclənmək',                wrong: 'artmaq',              wen: 'weaken',        def: 'to become or make more intense' },
  { en: 'manifest',     tr: 'özünü göstərmək',          wrong: 'aşkar olmaq',         wen: 'hide',          def: 'to display or show a quality or feeling clearly' },
  { en: 'maximise',     tr: 'maksimallaşdırmaq',        wrong: 'artırmaq',            wen: 'minimise',      def: 'to make something as large or great as possible' },
  { en: 'minimise',     tr: 'minimuma endirmək',        wrong: 'azaltmaq',            wen: 'maximise',      def: 'to reduce something to the smallest possible amount or degree' },
  { en: 'progress',     tr: 'tərəqqi etmək',            wrong: 'inkişaf etmək',       wen: 'regress',       def: 'forward or onward movement towards a destination or goal' },
  { en: 'reform',       tr: 'islahat etmək',            wrong: 'dəyişdirmək',         wen: 'preserve',      def: 'to make changes in something in order to improve it' },
  { en: 'revive',       tr: 'canlandırmaq',             wrong: 'bərpa etmək',         wen: 'suppress',      def: 'to restore to life or consciousness' },
  { en: 'thrive',       tr: 'uğurla inkişaf etmək',     wrong: 'böyümək',             wen: 'decline',       def: 'to grow or develop vigorously and successfully' },
  { en: 'transform',    tr: 'transformasiya etmək',     wrong: 'dəyişdirmək',         wen: 'preserve',      def: 'to make a marked change in form, nature or appearance' },
  { en: 'transition',   tr: 'keçid etmək',              wrong: 'dəyişmək',            wen: 'stability',     def: 'the process or period of changing from one state to another' },
  { en: 'undermine',    tr: 'zəiflətmək',               wrong: 'baltalamaq',          wen: 'strengthen',    def: 'to gradually weaken or damage something' }
],

// ─────────────────────── QUIZ 25 — Problems, Difficulties & Risks ───────────────────────
[
  { en: 'burden',       tr: 'yük',                      wrong: 'problem',             wen: 'relief',        def: 'a heavy load or responsibility that is difficult to bear' },
  { en: 'chaos',        tr: 'xaos',                     wrong: 'qarışıqlıq',          wen: 'order',         def: 'complete disorder and confusion' },
  { en: 'complication', tr: 'çətinlik',                 wrong: 'problem',             wen: 'simplicity',    def: 'a difficulty that makes a situation more complex' },
  { en: 'constraint',   tr: 'məhdudiyyət',              wrong: 'çərçivə',             wen: 'freedom',       def: 'a limitation or restriction' },
  { en: 'crisis',       tr: 'böhran',                   wrong: 'problem',             wen: 'stability',     def: 'a time of intense difficulty or danger' },
  { en: 'deficiency',   tr: 'çatışmazlıq',              wrong: 'çatışmama',           wen: 'surplus',       def: 'a lack or shortage of something' },
  { en: 'deficit',      tr: 'kəsir',                    wrong: 'borc',                wen: 'surplus',       def: 'the amount by which something is too small' },
  { en: 'dilemma',      tr: 'dilemma',                  wrong: 'problem',             wen: 'solution',      def: 'a situation in which a difficult choice has to be made' },
  { en: 'drawback',     tr: 'çatışmazlıq',              wrong: 'mənfi cəhət',         wen: 'advantage',     def: 'a disadvantage or negative feature' },
  { en: 'flaw',         tr: 'qüsur',                    wrong: 'çatışmazlıq',         wen: 'perfection',    def: 'a defect or weakness in something' },
  { en: 'frustration',  tr: 'məyusluq',                 wrong: 'kədər',               wen: 'satisfaction',  def: 'the feeling of being upset or annoyed as a result of being unable to change or achieve something' },
  { en: 'hazard',       tr: 'təhlükə',                  wrong: 'risk',                wen: 'safety',        def: 'a danger or risk' },
  { en: 'obstacle',     tr: 'maneə',                    wrong: 'çətinlik',            wen: 'help',          def: 'a thing that blocks one’s way or prevents progress' },
  { en: 'prejudice',    tr: 'qərəz',                    wrong: 'ayrı-seçkilik',       wen: 'tolerance',     def: 'a preconceived opinion not based on reason or experience' },
  { en: 'restraint',    tr: 'məhdudiyyət',              wrong: 'nəzarət',             wen: 'freedom',       def: 'a measure or condition that keeps someone or something under control' },
  { en: 'shortage',     tr: 'çatışmazlıq',              wrong: 'kəsir',               wen: 'surplus',       def: 'a lack or deficiency of something' },
  { en: 'threat',       tr: 'təhdid',                   wrong: 'təhlükə',             wen: 'safety',        def: 'a statement of an intention to inflict harm' },
  { en: 'vulnerability',tr: 'həssaslıq',                wrong: 'zəiflik',             wen: 'resilience',    def: 'the quality of being easily hurt or attacked' },
  { en: 'weakness',     tr: 'zəiflik',                  wrong: 'çatışmazlıq',         wen: 'strength',      def: 'a disadvantage or fault' },
  { en: 'obstacle',     tr: 'maneə',                    wrong: 'çətinlik',            wen: 'help',          def: 'a thing that blocks one’s way or prevents progress' }
],

// ─────────────────────── QUIZ 26 — Success, Achievement & Recognition ───────────────────────
[
  { en: 'accomplishment',tr: 'nailiyyət',               wrong: 'uğur',                wen: 'failure',       def: 'something that has been achieved successfully' },
  { en: 'achievement',  tr: 'nail olma',                 wrong: 'uğur',                wen: 'failure',       def: 'something accomplished, especially by skill or effort' },
  { en: 'breakthrough', tr: 'irəliləyiş',               wrong: 'nailiyyət',           wen: 'setback',       def: 'an important discovery or development that advances progress' },
  { en: 'excellence',   tr: 'mükəmməllik',              wrong: 'üstünlük',            wen: 'mediocrity',    def: 'the quality of being outstanding or extremely good' },
  { en: 'feat',         tr: 'qəhrəmanlıq',              wrong: 'nailiyyət',           wen: 'failure',       def: 'an achievement that requires great courage, skill or strength' },
  { en: 'glory',        tr: 'şöhrət',                   wrong: 'şərəf',               wen: 'shame',         def: 'high renown or honour won by notable achievements' },
  { en: 'merit',        tr: 'ləyaqət',                  wrong: 'dəyər',               wen: 'demerit',       def: 'the quality of being particularly good or worthy' },
  { en: 'prestige',     tr: 'nüfuz',                    wrong: 'şöhrət',              wen: 'obscurity',     def: 'widespread respect and admiration' },
  { en: 'prosperity',   tr: 'rifah',                    wrong: 'uğur',                wen: 'adversity',     def: 'the state of being successful or thriving' },
  { en: 'recognition',  tr: 'tanınma',                  wrong: 'qəbul',               wen: 'anonymity',     def: 'identification of the existence, validity or legality of something' },
  { en: 'remarkable',   tr: 'əlamətdar',                wrong: 'qeyri-adi',           wen: 'ordinary',      def: 'worthy of attention because of being unusual' },
  { en: 'renowned',     tr: 'məşhur',                   wrong: 'tanınmış',            wen: 'unknown',       def: 'known and respected by many people' },
  { en: 'success',      tr: 'uğur',                     wrong: 'nailiyyət',           wen: 'failure',       def: 'the accomplishment of an aim or purpose' },
  { en: 'triumph',      tr: 'qələbə',                   wrong: 'uğur',                wen: 'defeat',        def: 'a great victory or achievement' },
  { en: 'victory',      tr: 'zəfər',                    wrong: 'qələbə',              wen: 'defeat',        def: 'an act of defeating an opponent in a battle or contest' },
  { en: 'worthwhile',   tr: 'dəyərli',                  wrong: 'faydalı',             wen: 'worthless',     def: 'worth the time, money or effort spent' },
  { en: 'worthy',       tr: 'layiq',                    wrong: 'dəyərli',             wen: 'unworthy',      def: 'deserving effort, attention or respect' },
  { en: 'outstanding',  tr: 'fərqlənən',                wrong: 'əla',                 wen: 'mediocre',      def: 'exceptionally good or remarkable' },
  { en: 'exceptional',  tr: 'müstəsna',                 wrong: 'fərqli',              wen: 'ordinary',      def: 'unusually good or remarkable' },
  { en: 'prominent',    tr: 'görkəmli',                 wrong: 'məşhur',              wen: 'obscure',       def: 'important or famous' }
],
      
// ─────────────────────── QUIZ 27 — Media, Journalism & Public Opinion ───────────────────────
[
  { en: 'commentary',   tr: 'şərh',                     wrong: 'rəy',                 wen: 'silence',       def: 'a set of explanatory notes or opinions on an event or text' },
  { en: 'correspondent',tr: 'müxbir',                   wrong: 'jurnalist',           wen: 'scientist',     def: 'a journalist who reports from a particular place or on a specific subject' },
  { en: 'coverage',     tr: 'işıqlandırma',             wrong: 'xəbər',               wen: 'ignorance',     def: 'the extent to which something is reported or dealt with by the media' },
  { en: 'discourse',    tr: 'diskurs',                  wrong: 'müzakirə',            wen: 'silence',       def: 'written or spoken communication or debate' },
  { en: 'editorial',    tr: 'redaksiya məqaləsi',       wrong: 'şərh',                wen: 'advertisement', def: 'a newspaper or magazine article that gives the opinion of the editor' },
  { en: 'footage',      tr: 'görüntü',                  wrong: 'video',               wen: 'audio',         def: 'a length of film or video recording' },
  { en: 'headline',     tr: 'başlıq',                   wrong: 'xəbər',               wen: 'footnote',      def: 'the heading at the top of a newspaper story' },
  { en: 'journalist',   tr: 'jurnalist',                wrong: 'müxbir',              wen: 'scientist',     def: 'a person who writes for newspapers, magazines or news websites' },
  { en: 'propaganda',   tr: 'təbliğat',                 wrong: 'reklam',              wen: 'truth',         def: 'information, especially of a biased or misleading nature, used to promote a political cause' },
  { en: 'publication',  tr: 'nəşr',                     wrong: 'məqalə',              wen: 'manuscript',    def: 'a book, journal or other printed material that is issued for sale' },
  { en: 'rumour',       tr: 'şayiə',                    wrong: 'xəbər',               wen: 'fact',          def: 'a currently circulating story or report of uncertain truth' },
  { en: 'scrutiny',     tr: 'diqqətli nəzarət',         wrong: 'yoxlama',             wen: 'neglect',       def: 'critical observation or examination' },
  { en: 'sensation',    tr: 'sensasiya',                wrong: 'hadisə',              wen: 'fact',          def: 'a widespread reaction of interest and excitement' },
  { en: 'spectrum',     tr: 'spektr',                   wrong: 'diapazon',            wen: 'point',         def: 'a wide range of different but related ideas or opinions' },
  { en: 'transcript',   tr: 'transkript',               wrong: 'protokol',            wen: 'summary',       def: 'a written or printed version of material originally presented in another medium' },
  { en: 'articulate',   tr: 'aydın ifadə etmək',        wrong: 'danışmaq',            wen: 'mumble',        def: 'to express an idea or feeling fluently and coherently' },
  { en: 'convey',       tr: 'çatdırmaq',                wrong: 'bildirmək',           wen: 'conceal',       def: 'to communicate or make known an idea or feeling' },
  { en: 'explicit',     tr: 'açıq',                     wrong: 'aydın',               wen: 'vague',         def: 'stated clearly and in detail, leaving no room for confusion' },
  { en: 'ironic',       tr: 'ironik',                   wrong: 'sarkazmlı',           wen: 'sincere',       def: 'using or characterized by irony' },
  { en: 'rhetoric',     tr: 'ritorika',                 wrong: 'natiqlik',            wen: 'silence',       def: 'the art of effective or persuasive speaking or writing' }
],

// ─────────────────────── QUIZ 28 — Science, Research & Technology ───────────────────────
[
  { en: 'empirical',    tr: 'empirik',                  wrong: 'nəzəri',              wen: 'theoretical',   def: 'based on observation or experience rather than theory' },
  { en: 'experimental', tr: 'eksperimental',            wrong: 'praktik',             wen: 'theoretical',   def: 'based on or derived from experiment rather than theory' },
  { en: 'hypothesis',   tr: 'hipotez',                  wrong: 'nəzəriyyə',           wen: 'fact',          def: 'a supposition or proposed explanation made on the basis of limited evidence' },
  { en: 'innovation',   tr: 'innovasiya',               wrong: 'ixtira',              wen: 'tradition',     def: 'a new idea, method or product that represents change' },
  { en: 'parameter',    tr: 'parametr',                 wrong: 'göstərici',           wen: 'constant',      def: 'a numerical or other measurable factor that defines a system' },
  { en: 'ratio',        tr: 'nisbət',                   wrong: 'faiz',                wen: 'difference',    def: 'the quantitative relation between two amounts' },
  { en: 'simulation',   tr: 'simulyasiya',              wrong: 'model',               wen: 'reality',       def: 'imitation of a situation or process for study or training' },
  { en: 'specimen',     tr: 'nümunə',                   wrong: 'model',               wen: 'prototype',     def: 'a sample or example used for scientific study or testing' },
  { en: 'statistical',  tr: 'statistik',                wrong: 'rəqəmsal',            wen: 'qualitative',   def: 'relating to the use of statistics or data analysis' },
  { en: 'synthesis',    tr: 'sintez',                   wrong: 'analiz',              wen: 'separation',    def: 'the combination of ideas or elements to form a connected whole' },
  { en: 'technological',tr: 'texnoloji',                wrong: 'elmi',                wen: 'artistic',      def: 'relating to or using technology' },
  { en: 'theoretical',  tr: 'nəzəri',                   wrong: 'empirik',             wen: 'practical',     def: 'concerned with or involving the theory of a subject rather than its practical application' },
  { en: 'variable',     tr: 'dəyişən',                  wrong: 'sabit',               wen: 'constant',      def: 'a factor that can change in a scientific experiment' },
  { en: 'correlation',  tr: 'korrelyasiya',             wrong: 'əlaqə',               wen: 'isolation',     def: 'a mutual relationship or connection between two or more things' },
  { en: 'diagnosis',    tr: 'diaqnoz',                  wrong: 'müayinə',             wen: 'prognosis',     def: 'the identification of the nature of an illness or problem' },
  { en: 'equation',     tr: 'tənlik',                   wrong: 'düstur',              wen: 'inequality',    def: 'a statement that the values of two mathematical expressions are equal' },
  { en: 'genetic',      tr: 'genetik',                  wrong: 'bioloji',             wen: 'cultural',      def: 'relating to genes or heredity' },
  { en: 'molecular',    tr: 'molekulyar',               wrong: 'atomik',              wen: 'macroscopic',   def: 'relating to or consisting of molecules' },
  { en: 'quantum',      tr: 'kvant',                    wrong: 'nüvə',                wen: 'classical',     def: 'relating to quantum mechanics or discrete amounts of energy' },
  { en: 'prototype',    tr: 'prototip',                 wrong: 'model',               wen: 'finished product', def: 'a first or preliminary model of something' }
],

// ─────────────────────── QUIZ 29 — Health, Medicine & Psychology ───────────────────────
[
  { en: 'chronic',      tr: 'xroniki',                  wrong: 'kəskin',              wen: 'acute',         def: 'persisting for a long time or constantly recurring' },
  { en: 'clinical',     tr: 'klinik',                   wrong: 'tibbi',               wen: 'theoretical',   def: 'relating to the observation and treatment of actual patients' },
  { en: 'diagnosis',    tr: 'diaqnoz',                  wrong: 'müayinə',             wen: 'prognosis',     def: 'the identification of the nature of an illness or problem' },
  { en: 'epidemic',     tr: 'epidemiya',                wrong: 'pandemiya',           wen: 'endemic',       def: 'the rapid spread of a disease to many people in a community' },
  { en: 'infection',    tr: 'infeksiya',                wrong: 'virus',               wen: 'immunity',      def: 'the invasion of an organism’s body tissues by disease-causing agents' },
  { en: 'injection',    tr: 'iynə',                     wrong: 'dərman',              wen: 'pill',          def: 'the act of administering a liquid medicine with a syringe' },
  { en: 'medication',   tr: 'dərman',                   wrong: 'müalicə',             wen: 'surgery',       def: 'a drug or other form of medicine used to treat illness' },
  { en: 'obesity',      tr: 'piylənmə',                 wrong: 'artıq çəki',          wen: 'underweight',   def: 'the condition of being grossly fat or overweight' },
  { en: 'outbreak',     tr: 'xəstəliyin yayılması',     wrong: 'epidemiya',           wen: 'remission',     def: 'the sudden or violent start of something unwelcome such as war or disease' },
  { en: 'psychiatric',  tr: 'psixiatrik',               wrong: 'psixoloji',           wen: 'physical',      def: 'relating to the study and treatment of mental illness' },
  { en: 'rehabilitation',tr: 'reabilitasiya',           wrong: 'müalicə',             wen: 'deterioration', def: 'the action of restoring someone to health or normal life' },
  { en: 'surgeon',      tr: 'cərrah',                   wrong: 'həkim',               wen: 'physician',     def: 'a medical practitioner qualified to practise surgery' },
  { en: 'syndrome',     tr: 'sindrom',                  wrong: 'xəstəlik',            wen: 'symptom',       def: 'a group of symptoms that consistently occur together' },
  { en: 'therapy',      tr: 'terapiya',                 wrong: 'müalicə',             wen: 'diagnosis',     def: 'treatment intended to relieve or heal a disorder' },
  { en: 'trauma',       tr: 'travma',                   wrong: 'zərbə',               wen: 'healing',       def: 'a deeply distressing or disturbing experience' },
  { en: 'tumour',       tr: 'şiş',                      wrong: 'xərçəng',             wen: 'benign growth', def: 'a mass of cells growing abnormally in the body' },
  { en: 'vaccine',      tr: 'vaksin',                   wrong: 'dərman',              wen: 'antibiotic',    def: 'a substance used to stimulate the production of antibodies and provide immunity' },
  { en: 'virus',        tr: 'virus',                    wrong: 'bakteriya',           wen: 'bacteria',      def: 'a microscopic infectious agent that replicates inside living cells' },
  { en: 'physician',    tr: 'terapevt',                 wrong: 'cərrah',              wen: 'surgeon',       def: 'a medical practitioner who treats general medical conditions' },
  { en: 'practitioner', tr: 'praktik həkim',            wrong: 'mütəxəssis',          wen: 'theorist',      def: 'a person actively engaged in an art, discipline or profession' }
],

// ─────────────────────── QUIZ 30 — Environment & Sustainability ───────────────────────
[
  { en: 'biodiversity', tr: 'biomüxtəliflik',           wrong: 'ekosistem',           wen: 'uniformity',    def: 'the variety of plant and animal life in a particular habitat' },
  { en: 'conservation', tr: 'mühafizə',                 wrong: 'qoruma',              wen: 'exploitation',  def: 'the protection and preservation of the natural environment' },
  { en: 'ecological',   tr: 'ekoloji',                  wrong: 'ətraf mühit',         wen: 'economic',      def: 'relating to the relationships between living organisms and their environment' },
  { en: 'emission',     tr: 'emissiya',                 wrong: 'çirklənmə',           wen: 'absorption',    def: 'the production and discharge of something, especially gas or radiation' },
  { en: 'greenhouse',   tr: 'istixana',                 wrong: 'emissiya',            wen: 'hospital',      def: 'a glass building used for growing plants that need protection' },
  { en: 'pollution',    tr: 'çirklənmə',                wrong: 'çirkab',              wen: 'cleanliness',   def: 'the presence of harmful substances in the environment' },
  { en: 'renewable',    tr: 'bərpa olunan',             wrong: 'alternativ',          wen: 'exhaustible',   def: 'energy from a source that is not depleted when used' },
  { en: 'sustainability',tr: 'davamlılıq',              wrong: 'bərpa',               wen: 'depletion',     def: 'the ability to be maintained at a certain rate or level without depleting resources' },
  { en: 'sustainable',  tr: 'davamlı',                  wrong: 'ekoloji',             wen: 'temporary',     def: 'able to be maintained at a certain rate or level without depleting resources' },
  { en: 'wildlife',     tr: 'vəhşi təbiət',             wrong: 'fauna',               wen: 'technology',    def: 'wild animals and plants collectively' },
  { en: 'degradation',  tr: 'deqradasiya',              wrong: 'pisləşmə',            wen: 'improvement',   def: 'the process of becoming worse in condition' },
  { en: 'ecosystem',    tr: 'ekosistem',                wrong: 'biomüxtəliflik',      wen: 'city',          def: 'a biological community of interacting organisms and their physical environment' },
  { en: 'erosion',      tr: 'eroziya',                  wrong: 'parçalanma',          wen: 'accumulation',  def: 'the process of eroding or being eroded by wind, water or other natural agents' },
  { en: 'extinction',   tr: 'nəslin kəsilməsi',         wrong: 'yoxa çıxma',          wen: 'proliferation', def: 'the state of a species no longer existing' },
  { en: 'habitat',      tr: 'yaşayış mühiti',           wrong: 'ekosistem',           wen: 'city',          def: 'the natural home or environment of an animal or plant' },
  { en: 'marine',       tr: 'dəniz (sifət)',             wrong: 'su',                  wen: 'terrestrial',   def: 'relating to the sea' },
  { en: 'ozone',        tr: 'ozon',                     wrong: 'atmosfer',            wen: 'oxygen',        def: 'a colourless unstable gas that forms a protective layer in the atmosphere' },
  { en: 'recycling',    tr: 'təkrar emal',              wrong: 'utilizasiya',         wen: 'disposal',      def: 'the process of converting waste into reusable material' },
  { en: 'toxic',        tr: 'zəhərli',                  wrong: 'təhlükəli',           wen: 'harmless',      def: 'containing or being poisonous' },
  { en: 'climate',      tr: 'iqlim',                    wrong: 'hava',                wen: 'economy',       def: 'the long-term weather conditions in a particular region' }
],

// ─────────────────────── QUIZ 31 — Art, Culture & Heritage ───────────────────────
[
  { en: 'aesthetic',    tr: 'estetik',                  wrong: 'bədii',               wen: 'practical',     def: 'concerned with beauty or the appreciation of beauty' },
  { en: 'architectural',tr: 'memarlıq (sifət)',         wrong: 'dizayn',              wen: 'musical',       def: 'relating to the design and construction of buildings' },
  { en: 'artistic',     tr: 'bədii',                    wrong: 'yaradıcı',            wen: 'scientific',    def: 'having or revealing creative skill and imagination' },
  { en: 'canvas',       tr: 'kətan',                    wrong: 'rəsm',                wen: 'paper',         def: 'a strong cloth used as a surface for painting' },
  { en: 'classical',    tr: 'klassik',                  wrong: 'ənənəvi',             wen: 'modern',        def: 'relating to ancient Greek or Roman culture' },
  { en: 'contemporary', tr: 'müasir',                   wrong: 'çağdaş',              wen: 'historical',    def: 'belonging to or occurring in the present' },
  { en: 'exhibition',   tr: 'sərgi',                    wrong: 'muzey',               wen: 'hospital',      def: 'a public display of works of art or items of interest' },
  { en: 'genre',        tr: 'janr',                     wrong: 'üslub',               wen: 'theme',         def: 'a category of artistic composition' },
  { en: 'heritage',     tr: 'miras',                    wrong: 'ənənə',               wen: 'future',        def: 'property or traditions that are inherited from the past' },
  { en: 'legendary',    tr: 'əfsanəvi',                 wrong: 'məşhur',              wen: 'ordinary',      def: 'remarkable enough to be famous or well known' },
  { en: 'literature',   tr: 'ədəbiyyat',                wrong: 'şeir',                wen: 'science',       def: 'written works, especially those considered of superior artistic merit' },
  { en: 'manuscript',   tr: 'əlyazması',                wrong: 'sənəd',               wen: 'printed book',  def: 'a book or document written by hand' },
  { en: 'masterpiece',  tr: 'şah əsər',                 wrong: 'klassik',             wen: 'mediocrity',    def: 'a work of outstanding artistry or skill' },
  { en: 'melody',       tr: 'melodiya',                 wrong: 'musiqi',              wen: 'rhythm',        def: 'a sequence of single notes that is musically satisfying' },
  { en: 'orchestra',    tr: 'orkestr',                  wrong: 'ansambl',             wen: 'choir',         def: 'a large group of musicians who play various instruments together' },
  { en: 'portrait',     tr: 'portret',                  wrong: 'rəsm',                wen: 'landscape',     def: 'a painting, drawing or photograph of a person' },
  { en: 'sculpture',    tr: 'heykəltəraşlıq',           wrong: 'rəssamlıq',           wen: 'painting',      def: 'the art of making three-dimensional figures by carving or shaping' },
  { en: 'theatrical',   tr: 'teatr (sifət)',            wrong: 'dramatik',            wen: 'mundane',       def: 'relating to acting, actors or the theatre' },
  { en: 'symphony',     tr: 'simfoniya',                wrong: 'konçerto',            wen: 'solo',          def: 'an elaborate musical composition for full orchestra' },
  { en: 'ritual',       tr: 'ritual',                   wrong: 'ənənə',               wen: 'spontaneity',   def: 'a religious or solemn ceremony consisting of a series of actions' }
],
      
// ─────────────────────── QUIZ 32 — Law, Order & Authority ───────────────────────
[
  { en: 'accusation',   tr: 'ittiham',                  wrong: 'şikayət',             wen: 'praise',        def: 'a claim or statement that someone has done something illegal' },
  { en: 'allegation',   tr: 'iddia',                    wrong: 'ittiham',             wen: 'fact',          def: 'a claim or assertion that someone has done something wrong' },
  { en: 'breach',       tr: 'pozuntu',                  wrong: 'cinayət',             wen: 'agreement',     def: 'an act of breaking a law, rule or agreement' },
  { en: 'conviction',   tr: 'məhkumetmə',               wrong: 'bəraət',              wen: 'acquittal',     def: 'a formal declaration that someone is guilty of a crime' },
  { en: 'corruption',   tr: 'korrupsiya',               wrong: 'cinayət',             wen: 'honesty',       def: 'dishonest or fraudulent conduct by those in power' },
  { en: 'custody',      tr: 'həbs',                     wrong: 'cərimə',              wen: 'freedom',       def: 'the state of being kept in prison or under guard' },
  { en: 'enforcement',  tr: 'icra',                     wrong: 'tənzimləmə',          wen: 'violation',     def: 'the act of ensuring that laws or rules are obeyed' },
  { en: 'indictment',   tr: 'ittihamnamə',              wrong: 'hökm',                wen: 'acquittal',     def: 'a formal charge or accusation of a serious crime' },
  { en: 'jurisdiction', tr: 'yurisdiksiya',             wrong: 'səlahiyyət',          wen: 'freedom',       def: 'the official power to make legal decisions and judgments' },
  { en: 'legislation',  tr: 'qanunvericilik',           wrong: 'idarəetmə',           wen: 'execution',     def: 'the process of making or enacting laws' },
  { en: 'legitimate',   tr: 'qanuni',                   wrong: 'rəsmi',               wen: 'illegitimate',  def: 'conforming to the law or rules' },
  { en: 'prosecution',  tr: 'ittiham tərəfi',           wrong: 'müdafiə',             wen: 'defence',       def: 'the institution and conducting of legal proceedings against someone' },
  { en: 'regulation',   tr: 'tənzimləmə',               wrong: 'qanun',               wen: 'freedom',       def: 'an official rule or law controlling how something is done' },
  { en: 'sanction',     tr: 'sanksiya',                 wrong: 'cəza',                wen: 'permission',    def: 'a threatened penalty for disobeying a law or rule' },
  { en: 'verdict',      tr: 'hökm',                     wrong: 'qərar',               wen: 'suggestion',    def: 'the decision reached by a jury or judge in a court case' },
  { en: 'violation',    tr: 'pozuntu',                  wrong: 'cinayət',             wen: 'compliance',    def: 'the action of breaking a law, rule or agreement' },
  { en: 'warrant',      tr: 'axtarış orderi',           wrong: 'icazə',               wen: 'prohibition',   def: 'an official authorization or a document authorizing an action' },
  { en: 'judicial',     tr: 'məhkəmə (sifət)',          wrong: 'hüquqi',              wen: 'legislative',   def: 'relating to the courts and the administration of justice' },
  { en: 'lawful',       tr: 'qanuni',                   wrong: 'rəsmi',               wen: 'unlawful',      def: 'conforming to or permitted by law' },
  { en: 'unlawful',     tr: 'qeyri-qanuni',             wrong: 'qadağan',             wen: 'lawful',        def: 'not conforming to or permitted by law' }
],

// ─────────────────────── QUIZ 33 — War, Conflict & Security ───────────────────────
[
  { en: 'assassination',tr: 'sui-qəsd',                 wrong: 'qətl',                wen: 'celebration',   def: 'the deliberate killing of a prominent person for political reasons' },
  { en: 'assault',      tr: 'hücum',                    wrong: 'döyüş',               wen: 'invitation',    def: 'a violent physical attack on someone' },
  { en: 'battlefield',  tr: 'döyüş meydanı',            wrong: 'cəbhə',               wen: 'playground',    def: 'the piece of ground on which a battle is fought' },
  { en: 'combat',       tr: 'döyüş',                    wrong: 'müharibə',            wen: 'cooperation',   def: 'fighting between armed forces' },
  { en: 'deployment',   tr: 'yerləşdirmə',              wrong: 'göndərmə',            wen: 'withdrawal',    def: 'the movement of troops or equipment to a place where they are needed' },
  { en: 'genocide',     tr: 'soyqırım',                 wrong: 'müharibə',            wen: 'peace',         def: 'the deliberate killing of a large number of people from a particular nation or group' },
  { en: 'guerrilla',    tr: 'partizan',                 wrong: 'əsgər',               wen: 'soldier',       def: 'a member of an irregular armed force fighting against a regular army' },
  { en: 'invasion',     tr: 'işğal',                    wrong: 'hücum',               wen: 'retreat',       def: 'an act of invading a country or region with an armed force' },
  { en: 'militant',     tr: 'silahlı',                  wrong: 'döyüşçü',             wen: 'pacifist',      def: 'a person who is engaged in aggressive or violent action' },
  { en: 'missile',      tr: 'raket',                    wrong: 'bomba',               wen: 'shield',        def: 'a weapon that is self-propelled or directed' },
  { en: 'raid',         tr: 'basqın',                   wrong: 'hücum',               wen: 'party',         def: 'a sudden attack on a place by police or soldiers' },
  { en: 'riot',         tr: 'iğtişaş',                  wrong: 'etiraz',              wen: 'celebration',   def: 'a violent disturbance by a crowd of people' },
  { en: 'surrender',    tr: 'təslim olmaq',             wrong: 'geri çəkilmək',       wen: 'resist',        def: 'to cease resistance to an enemy and submit to their authority' },
  { en: 'tactical',     tr: 'taktik',                   wrong: 'strateji',            wen: 'strategic',     def: 'relating to short-term military planning' },
  { en: 'terrorism',    tr: 'terrorçuluq',              wrong: 'ekstremizm',          wen: 'sport',         def: 'the unlawful use of violence and intimidation for political aims' },
  { en: 'torture',      tr: 'işgəncə',                  wrong: 'zorakılıq',           wen: 'kindness',      def: 'the infliction of severe pain to punish or extract information' },
  { en: 'veteran',      tr: 'veteran',                  wrong: 'əsgər',               wen: 'recruit',       def: 'a person who has had long experience in a particular field' },
  { en: 'warfare',      tr: 'müharibə',                 wrong: 'döyüş',               wen: 'peace',         def: 'the activity of fighting a war' },
  { en: 'warrior',      tr: 'döyüşçü',                  wrong: 'əsgər',               wen: 'pacifist',      def: 'a brave or experienced soldier or fighter' },
  { en: 'hostage',      tr: 'girov',                    wrong: 'məhbus',              wen: 'guest',         def: 'a person held captive by force as a means of bargaining' }
],

// ─────────────────────── QUIZ 34 — Economy & Finance (Advanced) ───────────────────────
[
  { en: 'bankruptcy',   tr: 'iflas',                    wrong: 'borc',                wen: 'prosperity',    def: 'the state of being unable to pay debts and legally declared insolvent' },
  { en: 'commodity',    tr: 'əmtəə',                    wrong: 'məhsul',              wen: 'service',       def: 'a raw material or primary agricultural product that can be bought and sold' },
  { en: 'deficit',      tr: 'kəsir',                    wrong: 'borc',                wen: 'surplus',       def: 'the amount by which expenditure exceeds income' },
  { en: 'expenditure',  tr: 'xərc',                     wrong: 'büdcə',               wen: 'income',        def: 'the action of spending money or the amount spent' },
  { en: 'fiscal',       tr: 'fiskal',                   wrong: 'maliyyə',             wen: 'medical',       def: 'relating to government revenue, especially through taxation' },
  { en: 'franchise',    tr: 'françayzinq',              wrong: 'lisenziya',           wen: 'monopoly',      def: 'the right to sell a company’s products or services in a particular area' },
  { en: 'infrastructure',tr: 'infrastruktur',           wrong: 'quruluş',             wen: 'software',      def: 'the basic physical systems of a country or organization' },
  { en: 'liability',    tr: 'öhdəlik',                  wrong: 'borc',                wen: 'asset',         def: 'a legal responsibility or financial obligation' },
  { en: 'merger',       tr: 'birləşmə',                 wrong: 'alım',                wen: 'separation',    def: 'the combining of two or more companies into one' },
  { en: 'monopoly',     tr: 'inhisar',                  wrong: 'kartell',             wen: 'competition',   def: 'exclusive control of the supply of a commodity or service' },
  { en: 'privatization',tr: 'özəlləşdirmə',             wrong: 'milliləşdirmə',       wen: 'nationalization', def: 'the transfer of a business from public to private ownership' },
  { en: 'productivity', tr: 'məhsuldarlıq',             wrong: 'səmərəlilik',         wen: 'idleness',      def: 'the effectiveness of productive effort measured by output' },
  { en: 'profitable',   tr: 'gəlirli',                  wrong: 'uğurlu',              wen: 'loss-making',   def: 'producing a financial gain' },
  { en: 'shareholder',  tr: 'səhmdar',                  wrong: 'investor',            wen: 'employee',      def: 'a person who owns shares in a company' },
  { en: 'subsidy',      tr: 'subsidiya',                wrong: 'maliyyə yardımı',     wen: 'tax',           def: 'a sum of money granted by the government to support an industry' },
  { en: 'transaction',  tr: 'əməliyyat',                wrong: 'ödəniş',              wen: 'holiday',       def: 'an instance of buying or selling something' },
  { en: 'turnover',     tr: 'dövriyyə',                 wrong: 'gəlir',               wen: 'loss',          def: 'the total sales made by a business over a period' },
  { en: 'yield',        tr: 'gəlir (investisiya)',      wrong: 'mənfəət',             wen: 'expense',       def: 'the profit or income from an investment' },
  { en: 'asset',        tr: 'aktiv',                    wrong: 'kapital',             wen: 'liability',     def: 'a useful or valuable thing or person owned by a company' },
  { en: 'revenue',      tr: 'gəlir',                    wrong: 'mənfəət',             wen: 'expense',       def: 'income generated from normal business operations' }
],

// ─────────────────────── QUIZ 35 — Society & Social Issues (Advanced) ───────────────────────
[
  { en: 'discrimination',tr: 'ayrı-seçkilik',           wrong: 'ədalətsizlik',        wen: 'equality',      def: 'unfair treatment of different categories of people' },
  { en: 'diversity',    tr: 'müxtəliflik',              wrong: 'bərabərlik',          wen: 'uniformity',    def: 'the state of being varied in terms of race, culture or background' },
  { en: 'equality',     tr: 'bərabərlik',               wrong: 'ədalət',              wen: 'discrimination', def: 'the state of being equal in rights, status and opportunities' },
  { en: 'inequality',   tr: 'bərabərsizlik',            wrong: 'ayrı-seçkilik',       wen: 'equality',      def: 'the unfair situation in which some people have more rights than others' },
  { en: 'integration',  tr: 'inteqrasiya',              wrong: 'birləşmə',            wen: 'segregation',   def: 'the process of combining different groups into a unified society' },
  { en: 'justice',      tr: 'ədalət',                   wrong: 'hüquq',               wen: 'injustice',     def: 'fairness in the way people are treated' },
  { en: 'liberty',      tr: 'azadlıq',                  wrong: 'hüquq',               wen: 'oppression',    def: 'the state of being free from oppressive restrictions' },
  { en: 'migration',    tr: 'miqrasiya',                wrong: 'köç',                 wen: 'emigration',    def: 'the movement of people from one country or area to another' },
  { en: 'minority',     tr: 'azlıq',                    wrong: 'çoxluq',              wen: 'majority',      def: 'a smaller group of people differing from the rest of a community' },
  { en: 'prejudice',    tr: 'qərəz',                    wrong: 'ayrı-seçkilik',       wen: 'tolerance',     def: 'a preconceived opinion not based on reason or experience' },
  { en: 'racism',       tr: 'irqçilik',                 wrong: 'millətçilik',         wen: 'equality',      def: 'prejudice, discrimination or antagonism directed against a person based on race' },
  { en: 'refugee',      tr: 'qaçqın',                   wrong: 'mühacir',             wen: 'citizen',       def: 'a person who has been forced to leave their country due to war or persecution' },
  { en: 'rehabilitation',tr: 'reabilitasiya',           wrong: 'müalicə',             wen: 'punishment',    def: 'the action of restoring someone to health or normal life' },
  { en: 'solidarity',   tr: 'həmrəylik',                wrong: 'birlik',              wen: 'division',      def: 'unity or agreement of feeling or action among individuals' },
  { en: 'tolerance',    tr: 'tolerantlıq',              wrong: 'hörmət',              wen: 'intolerance',   def: 'the ability to accept opinions or behaviour different from one’s own' },
  { en: 'vulnerable',   tr: 'həssas',                   wrong: 'zəif',                wen: 'resilient',     def: 'exposed to the possibility of being attacked or harmed' },
  { en: 'welfare',      tr: 'rifah',                    wrong: 'yardım',              wen: 'poverty',       def: 'the health, happiness and fortunes of a person or group' },
  { en: 'citizenship',  tr: 'vətəndaşlıq',              wrong: 'milliyyət',           wen: 'statelessness', def: 'the position or status of being a citizen of a particular country' },
  { en: 'humanity',     tr: 'bəşəriyyət',               wrong: 'insanlıq',            wen: 'cruelty',       def: 'the quality of being humane or compassionate' },
  { en: 'equality',     tr: 'hüquq bərabərliyi',        wrong: 'ədalət',              wen: 'discrimination', def: 'the state of being equal in rights, status and opportunities' }
],

// ─────────────────────── QUIZ 36 — Communication & Interaction ───────────────────────
[
  { en: 'articulate',   tr: 'aydın ifadə etmək',        wrong: 'danışmaq',            wen: 'mumble',        def: 'to express an idea or feeling fluently and coherently' },
  { en: 'convey',       tr: 'çatdırmaq',                wrong: 'bildirmək',           wen: 'conceal',       def: 'to communicate or make known an idea or feeling' },
  { en: 'correspondence',tr: 'yazışma',                 wrong: 'məktub',              wen: 'silence',       def: 'communication by exchanging letters' },
  { en: 'discourse',    tr: 'diskurs',                  wrong: 'müzakirə',            wen: 'silence',       def: 'written or spoken communication or debate' },
  { en: 'explicit',     tr: 'açıq',                     wrong: 'aydın',               wen: 'vague',         def: 'stated clearly and in detail, leaving no room for confusion' },
  { en: 'implicit',     tr: 'gizli',                    wrong: 'örtülü',              wen: 'explicit',      def: 'implied though not plainly expressed' },
  { en: 'interpret',    tr: 'şərh etmək',               wrong: 'tərcümə etmək',       wen: 'ignore',        def: 'to explain the meaning of something' },
  { en: 'interpretation',tr: 'şərh',                    wrong: 'tərcümə',             wen: 'fact',          def: 'an explanation or understanding of something' },
  { en: 'irony',        tr: 'ironi',                    wrong: 'sarkazm',             wen: 'sincerity',     def: 'a situation or statement that is the opposite of what is expected' },
  { en: 'rhetoric',     tr: 'ritorika',                 wrong: 'natiqlik',            wen: 'silence',       def: 'the art of effective or persuasive speaking or writing' },
  { en: 'sarcasm',      tr: 'sarkazm',                  wrong: 'ironi',               wen: 'sincerity',     def: 'the use of irony to mock or convey contempt' },
  { en: 'verbal',       tr: 'şifahi',                   wrong: 'sözlü',               wen: 'non-verbal',    def: 'relating to or in the form of words' },
  { en: 'dialogue',     tr: 'dialoq',                   wrong: 'söhbət',              wen: 'monologue',     def: 'a conversation between two or more people' },
  { en: 'negotiation',  tr: 'danışıqlar',               wrong: 'müzakirə',            wen: 'argument',      def: 'discussion aimed at reaching an agreement' },
  { en: 'persuasion',   tr: 'inandırma',                wrong: 'təsir',               wen: 'coercion',      def: 'the action or process of persuading someone' },
  { en: 'assertion',    tr: 'iddia',                    wrong: 'bəyanat',             wen: 'denial',        def: 'a confident and forceful statement of fact or belief' },
  { en: 'allegation',   tr: 'iddia',                    wrong: 'ittiham',             wen: 'fact',          def: 'a claim or assertion that someone has done something wrong' },
  { en: 'clarification',tr: 'aydınlaşdırma',            wrong: 'izah',                wen: 'confusion',     def: 'the action of making something less confusing or more comprehensible' },
  { en: 'consultation', tr: 'məsləhət',                 wrong: 'görüş',               wen: 'isolation',     def: 'the action or process of formally consulting or discussing' },
  { en: 'consensus',    tr: 'konsensus',                wrong: 'razılaşma',           wen: 'disagreement',  def: 'general agreement among a group of people' }
],
// ─────────────────────── QUIZ 37 — Negative States & Emotions ───────────────────────
[
  { en: 'atrocity',     tr: 'vəhşilik',                 wrong: 'zorakılıq',           wen: 'kindness',      def: 'an extremely cruel and shocking act' },
  { en: 'betrayal',     tr: 'xəyanət',                  wrong: 'aldatma',             wen: 'loyalty',       def: 'the action of betraying someone or something' },
  { en: 'contempt',     tr: 'nifrət',                   wrong: 'hörmətsizlik',        wen: 'respect',       def: 'the feeling that a person or thing is worthless or beneath consideration' },
  { en: 'corruption',   tr: 'korrupsiya',               wrong: 'saxtakarlıq',         wen: 'honesty',       def: 'dishonest or fraudulent conduct by those in power' },
  { en: 'despair',      tr: 'ümidsizlik',               wrong: 'kədər',               wen: 'hope',          def: 'the complete loss or absence of hope' },
  { en: 'destructive',  tr: 'dağıdıcı',                 wrong: 'zərərli',             wen: 'constructive',  def: 'causing great and irreparable harm or damage' },
  { en: 'distress',     tr: 'sıxıntı',                  wrong: 'kədər',               wen: 'comfort',       def: 'extreme anxiety, sorrow or pain' },
  { en: 'embarrassment',tr: 'utanc',                    wrong: 'xəcalət',             wen: 'pride',         def: 'a feeling of self-consciousness, shame or awkwardness' },
  { en: 'frustration',  tr: 'məyusluq',                 wrong: 'kədər',               wen: 'satisfaction',  def: 'the feeling of being upset or annoyed as a result of being unable to change or achieve something' },
  { en: 'grief',        tr: 'yas',                      wrong: 'kədər',               wen: 'joy',           def: 'deep sorrow caused by loss, especially through death' },
  { en: 'guilt',        tr: 'günah hissi',              wrong: 'peşmançılıq',         wen: 'innocence',     def: 'a feeling of having done something wrong or immoral' },
  { en: 'hatred',       tr: 'nifrət',                   wrong: 'kin',                 wen: 'love',          def: 'intense dislike or ill will' },
  { en: 'hostility',    tr: 'düşmənçilik',              wrong: 'nifrət',              wen: 'friendship',    def: 'hostile behaviour or opposition' },
  { en: 'misery',       tr: 'əzab',                     wrong: 'bədbəxtlik',          wen: 'happiness',     def: 'a state or feeling of great physical or mental distress or discomfort' },
  { en: 'outrage',      tr: 'qəzəb',                    wrong: 'hiddət',              wen: 'calm',          def: 'an extremely strong reaction of anger or shock' },
  { en: 'resentment',   tr: 'inciklik',                 wrong: 'küskünlük',           wen: 'gratitude',     def: 'bitter indignation at having been treated unfairly' },
  { en: 'suspicion',    tr: 'şübhə',                    wrong: 'ehtiyat',             wen: 'trust',         def: 'a feeling or thought that something is possible or true' },
  { en: 'trauma',       tr: 'travma',                   wrong: 'zərbə',               wen: 'healing',       def: 'a deeply distressing or disturbing experience' },
  { en: 'vulnerability',tr: 'həssaslıq',                wrong: 'zəiflik',             wen: 'resilience',    def: 'the quality of being easily hurt or attacked' },
  { en: 'cynicism',     tr: 'kinizm',                   wrong: 'şübhəçilik',          wen: 'trust',         def: 'an inclination to believe that people are motivated purely by self-interest' }
],

// ─────────────────────── QUIZ 38 — Positive Qualities & Values ───────────────────────
[
  { en: 'compassion',   tr: 'şəfqət',                   wrong: 'mehribanlıq',         wen: 'cruelty',       def: 'sympathetic pity and concern for the sufferings of others' },
  { en: 'credibility',  tr: 'etibarlılıq',              wrong: 'inam',                wen: 'doubt',         def: 'the quality of being trusted and believed in' },
  { en: 'dedication',   tr: 'sədaqət',                  wrong: 'həvəs',               wen: 'indifference',  def: 'the quality of being committed to a task or purpose' },
  { en: 'dignity',      tr: 'ləyaqət',                  wrong: 'şərəf',               wen: 'humiliation',   def: 'the quality of being worthy of respect or honour' },
  { en: 'integrity',    tr: 'dürüstlük',                wrong: 'vicdanlılıq',         wen: 'corruption',    def: 'the quality of being honest and having strong moral principles' },
  { en: 'justice',      tr: 'ədalət',                   wrong: 'hüquq',               wen: 'injustice',     def: 'fairness in the way people are treated' },
  { en: 'loyalty',      tr: 'sədaqət',                  wrong: 'etibarlılıq',         wen: 'betrayal',      def: 'a strong feeling of support or allegiance' },
  { en: 'mercy',        tr: 'mərhəmət',                 wrong: 'şəfqət',              wen: 'cruelty',       def: 'compassion or forgiveness shown towards someone' },
  { en: 'morality',     tr: 'əxlaq',                    wrong: 'vicdan',              wen: 'immorality',    def: 'principles concerning the distinction between right and wrong' },
  { en: 'optimism',     tr: 'optimizm',                 wrong: 'nikbinlik',           wen: 'pessimism',     def: 'hopefulness and confidence about the future' },
  { en: 'solidarity',   tr: 'həmrəylik',                wrong: 'birlik',              wen: 'division',      def: 'unity or agreement of feeling or action among individuals' },
  { en: 'tolerance',    tr: 'tolerantlıq',              wrong: 'hörmət',              wen: 'intolerance',   def: 'the ability to accept opinions or behaviour different from one’s own' },
  { en: 'transparency', tr: 'şəffaflıq',                wrong: 'açıqlıq',             wen: 'secrecy',       def: 'the condition of being transparent or open' },
  { en: 'virtue',       tr: 'fəzilət',                  wrong: 'dəyər',               wen: 'vice',          def: 'behaviour showing high moral standards' },
  { en: 'excellence',   tr: 'mükəmməllik',              wrong: 'üstünlük',            wen: 'mediocrity',    def: 'the quality of being outstanding or extremely good' },
  { en: 'fairness',     tr: 'ədalətlilik',              wrong: 'bərabərlik',          wen: 'injustice',     def: 'impartial and just treatment or behaviour' },
  { en: 'generosity',   tr: 'səxavət',                  wrong: 'cömerdlik',           wen: 'selfishness',   def: 'the quality of being kind and generous' },
  { en: 'honesty',      tr: 'dürüstlük',                wrong: 'açıqlıq',             wen: 'dishonesty',    def: 'the quality of being honest and truthful' },
  { en: 'humanity',     tr: 'insanlıq',                 wrong: 'bəşəriyyət',          wen: 'cruelty',       def: 'the quality of being humane or compassionate' },
  { en: 'sincerity',    tr: 'səmimiyyət',               wrong: 'dürüstlük',           wen: 'deceit',        def: 'the quality of being free from pretence or deceit' }
],

// ─────────────────────── QUIZ 39 — Miscellaneous Advanced Words (1) ───────────────────────
[
  { en: 'accordingly',  tr: 'müvafiq olaraq',           wrong: 'buna görə',           wen: 'inappropriately', def: 'in a way that is appropriate to the particular circumstances' },
  { en: 'adverse',      tr: 'mənfi',                    wrong: 'zərərli',             wen: 'favourable',    def: 'preventing success or development' },
  { en: 'arbitrary',    tr: 'özbaşına',                 wrong: 'ixtiyari',            wen: 'systematic',    def: 'based on random choice or personal whim rather than reason' },
  { en: 'authentic',    tr: 'həqiqi',                   wrong: 'orijinal',            wen: 'fake',          def: 'of undisputed origin and not a copy' },
  { en: 'coherent',     tr: 'ardıcıl',                  wrong: 'məntiqi',             wen: 'incoherent',    def: 'logical and consistent' },
  { en: 'controversial',tr: 'mübahisəli',               wrong: 'ziddiyyətli',         wen: 'uncontroversial', def: 'causing or likely to cause public disagreement' },
  { en: 'credible',     tr: 'etibarlı',                 wrong: 'inandırıcı',          wen: 'unbelievable',  def: 'able to be believed or trusted' },
  { en: 'decisive',     tr: 'qəti',                     wrong: 'güclü',               wen: 'hesitant',      def: 'settling an issue or showing a clear result' },
  { en: 'deliberate',   tr: 'qəsdən edilən',            wrong: 'bilərəkdən olan',     wen: 'accidental',    def: 'done consciously and intentionally' },
  { en: 'dominant',     tr: 'dominant',                 wrong: 'hakim',               wen: 'subordinate',   def: 'having power and influence over others' },
  { en: 'dynamic',      tr: 'dinamik',                  wrong: 'aktiv',               wen: 'static',        def: 'characterized by constant change, activity or progress' },
  { en: 'explicit',     tr: 'açıq',                     wrong: 'aydın',               wen: 'vague',         def: 'stated clearly and in detail, leaving no room for confusion' },
  { en: 'fundamental',  tr: 'əsas',                     wrong: 'vacib',               wen: 'trivial',       def: 'forming a necessary base or core' },
  { en: 'implicit',     tr: 'gizli',                    wrong: 'örtülü',              wen: 'explicit',      def: 'implied though not plainly expressed' },
  { en: 'inevitable',   tr: 'qaçılmaz',                 wrong: 'mümkün',              wen: 'avoidable',     def: 'certain to happen and unavoidable' },
  { en: 'inherent',     tr: 'daxili',                   wrong: 'əsas',                wen: 'external',      def: 'existing in something as a permanent and inseparable element' },
  { en: 'integral',     tr: 'ayrılmaz',                 wrong: 'vacib',               wen: 'dispensable',   def: 'necessary to make a whole complete' },
  { en: 'intense',      tr: 'güclü',                    wrong: 'şiddətli',            wen: 'mild',          def: 'of extreme force, degree or strength' },
  { en: 'profound',     tr: 'dərin',                    wrong: 'əsaslı',              wen: 'superficial',   def: 'having or showing great knowledge or insight' },
  { en: 'substantial',  tr: 'əhəmiyyətli',              wrong: 'böyük',               wen: 'insignificant', def: 'of considerable importance, size or worth' }
],

// ─────────────────────── QUIZ 40 — Remaining Words (Tamamlayıcı) ───────────────────────
[
  { en: 'absence',      tr: 'yoxluq',                   wrong: 'olmama',              wen: 'presence',      def: 'the state of being away from a place or person' },
  { en: 'absorption',   tr: 'udma',                     wrong: 'əmilmə',              wen: 'rejection',     def: 'the state of being engrossed in something' },
  { en: 'accessible',   tr: 'əlçatan',                  wrong: 'mövcud',              wen: 'inaccessible',  def: 'easy to approach, reach or understand' },
  { en: 'accordingly',  tr: 'müvafiq olaraq',           wrong: 'buna görə',           wen: 'inappropriately', def: 'in a way that is appropriate to the particular circumstances' },
  { en: 'accumulation', tr: 'toplanma',                 wrong: 'artım',               wen: 'decline',       def: 'the process of gradually collecting or increasing in quantity' },
  { en: 'activation',   tr: 'aktivləşdirmə',            wrong: 'başlatma',            wen: 'deactivation',  def: 'the action of making something active or operative' },
  { en: 'adjacent',     tr: 'qonşu',                    wrong: 'yaxın',               wen: 'distant',       def: 'next to or adjoining something else' },
  { en: 'adjustment',   tr: 'tənzimləmə',               wrong: 'dəyişiklik',          wen: 'disruption',    def: 'a small change made to something' },
  { en: 'adoption',     tr: 'qəbul etmə',               wrong: 'mənimsəmə',           wen: 'rejection',     def: 'the action of adopting or being adopted' },
  { en: 'adverse',      tr: 'mənfi',                    wrong: 'zərərli',             wen: 'favourable',    def: 'preventing success or development' },
  { en: 'advocate',     tr: 'müdafiəçi',                wrong: 'tərəfdar',            wen: 'opponent',      def: 'a person who publicly supports or recommends a particular cause' },
  { en: 'aesthetic',    tr: 'estetik',                  wrong: 'bədii',               wen: 'practical',     def: 'concerned with beauty or the appreciation of beauty' },
  { en: 'aftermath',    tr: 'nəticə',                   wrong: 'aqibət',              wen: 'beginning',     def: 'the consequences or after-effects of an event' },
  { en: 'aggression',   tr: 'aqressiya',                wrong: 'hücum',               wen: 'peacefulness',  def: 'hostile or violent behaviour or attitudes' },
  { en: 'alignment',    tr: 'uyğunlaşma',               wrong: 'düzülüş',             wen: 'misalignment',  def: 'arrangement in a straight line or in correct relative positions' },
  { en: 'alike',        tr: 'oxşar',                    wrong: 'eyni',                wen: 'different',     def: 'in a similar way' },
  { en: 'allegation',   tr: 'iddia',                    wrong: 'ittiham',             wen: 'fact',          def: 'a claim or assertion that someone has done something wrong' },
  { en: 'anonymous',    tr: 'anonim',                   wrong: 'naməlum',             wen: 'identified',    def: 'having no known name or identity' },
  { en: 'apparent',     tr: 'aşkar',                    wrong: 'açıq',                wen: 'hidden',        def: 'clearly visible or understood' },
  { en: 'aspiration',   tr: 'istək',                    wrong: 'arzu',                wen: 'apathy',        def: 'a hope or ambition of achieving something' }
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
  { en: 'artifice',     tr: 'hiylə',                     wrong: 'səmimiyyət',         wen: 'honesty',       def: 'clever or cunning devices or expedients used to trick or deceive others' },
  { en: 'to belie',     tr: 'yalanlamaq',                wrong: 'təsdiqləmək',         wen: 'confirm',       def: 'to fail to give a true impression of something or to contradict it' },
  { en: 'charlatan',    tr: 'şarlatan',                  wrong: 'mütəxəssis',          wen: 'expert',        def: 'a person who falsely claims to have special knowledge or skill' },
  { en: 'chicanery',    tr: 'hiyləgərlik',               wrong: 'dürüstlük',           wen: 'integrity',     def: 'the use of trickery to achieve a political, financial or legal purpose' },
  { en: 'to collude',   tr: 'gizli əlbir olmaq',         wrong: 'açıq əməkdaşlıq',     wen: 'cooperate openly', def: 'to conspire secretly with others to deceive or defraud' },
  { en: 'collusion',    tr: 'gizli razılaşma',           wrong: 'qanuni müqavilə',     wen: 'legal contract', def: 'secret or illegal cooperation or conspiracy in order to deceive others' },
  { en: 'to connive',   tr: 'göz yummaq',                wrong: 'mane olmaq',          wen: 'prevent',       def: 'to secretly allow something wrong or illegal to happen' },
  { en: 'deceitful',    tr: 'aldadıcı',                  wrong: 'səmimi',              wen: 'sincere',       def: 'given to or involving deception or falsehood' },
  { en: 'to fabricate', tr: 'uydurmaq',                  wrong: 'sübut etmək',         wen: 'verify',        def: 'to invent or concoct something false in order to deceive' },
  { en: 'fabrication',  tr: 'uydurma',                   wrong: 'həqiqət',             wen: 'truth',         def: 'a lie or invented story intended to deceive' },
  { en: 'fallacious',   tr: 'yanlış',                    wrong: 'doğru',               wen: 'accurate',      def: 'based on a mistaken belief or unsound reasoning' },
  { en: 'fallacy',      tr: 'yanlış təsəvvür',           wrong: 'həqiqət',             wen: 'truth',         def: 'a mistaken belief or unsound argument based on false reasoning' },
  { en: 'to feign',     tr: 'özünü göstərmək',           wrong: 'əslini göstərmək',     wen: 'reveal',        def: 'to pretend to be affected by a feeling, state or injury' },
  { en: 'guile',        tr: 'hiylə',                     wrong: 'sadəlik',             wen: 'simplicity',    def: 'sly or cunning intelligence used to deceive' },
  { en: 'duplicity',    tr: 'ikiüzlülük',                wrong: 'səmimiyyət',         wen: 'sincerity',     def: 'deceitfulness or double-dealing in speech or conduct' },
  { en: 'to obfuscate', tr: 'bulandırmaq',               wrong: 'aydınlaşdırmaq',      wen: 'clarify',       def: 'to render something obscure or unclear, especially intentionally' },
  { en: 'obfuscation',  tr: 'bulanıqlıq',                wrong: 'aydınlıq',            wen: 'clarity',       def: 'the action of making something less clear and more confusing' },
  { en: 'ruse',         tr: 'hiylə',                     wrong: 'açıq plan',           wen: 'open strategy', def: 'an action intended to deceive someone' },
  { en: 'subterfuge',   tr: 'aldatma vasitəsi',          wrong: 'dürüst yol',          wen: 'honest method', def: 'deceit used in order to achieve one’s goal' },
  { en: 'to dissemble', tr: 'gizlətmək',                 wrong: 'etiraf etmək',         wen: 'confess',       def: 'to conceal one’s true motives or feelings' }
],

// ─────────────────────── QUIZ 2 — Deception & Dishonesty (2) ───────────────────────
[
  { en: 'disingenuous', tr: 'iküzlü',                    wrong: 'səmimi',              wen: 'sincere',       def: 'not candid or sincere, typically by pretending to know less about something than one really does' },
  { en: 'mendacious',   tr: 'yalançı',                   wrong: 'dürüst',              wen: 'truthful',      def: 'not telling the truth; lying' },
  { en: 'to prevaricate', tr: 'yanıltmaq',               wrong: 'birbaşa demək',       wen: 'speak plainly', def: 'to speak or act evasively in order to avoid telling the truth' },
  { en: 'specious',     tr: 'aldadıcı',                  wrong: 'əsl',                 wen: 'genuine',       def: 'superficially plausible but actually wrong or misleading' },
  { en: 'spurious',     tr: 'saxta',                     wrong: 'həqiqi',              wen: 'authentic',     def: 'not being what it purports to be; false or fake' },
  { en: 'surreptitious',tr: 'gizli',                     wrong: 'açıq',                wen: 'open',          def: 'kept secret, especially because it would not be approved of' },
  { en: 'trickery',     tr: 'fırıldaq',                  wrong: 'dürüstlük',           wen: 'honesty',       def: 'the practice of deception in order to achieve one’s aims' },
  { en: 'trickster',    tr: 'fırıldaqçı',                wrong: 'dürüst adam',         wen: 'honest person', def: 'a person who cheats or deceives people' },
  { en: 'whitewash',    tr: 'ört-basdır etmək',          wrong: 'ifşa etmək',          wen: 'expose',        def: 'to attempt to conceal or gloss over wrongdoing' },
  { en: 'to delude',    tr: 'aldatmaq',                  wrong: 'maarifləndirmək',     wen: 'enlighten',     def: 'to persuade someone to believe something that is not true' },
  { en: 'façade',       tr: 'yalançı görünüş',           wrong: 'əsl görünüş',         wen: 'true appearance', def: 'a deceptive outward appearance' },
  { en: 'skullduggery', tr: 'hiyləgərlik',               wrong: 'dürüstlük',           wen: 'integrity',     def: 'underhand or unscrupulous behaviour' },
  { en: 'to hoodwink',  tr: 'aldatmaq',                  wrong: 'xəbərdar etmək',      wen: 'warn',          def: 'to deceive or trick someone' },
  { en: 'to masquerade',tr: 'özünü qələmə vermək',       wrong: 'əslini göstərmək',     wen: 'reveal oneself', def: 'to pretend to be someone one is not' },
  { en: 'ploy',         tr: 'hiylə',                     wrong: 'açıq strategiya',     wen: 'open strategy', def: 'a cunning plan or action designed to turn a situation to one’s own advantage' },
  { en: 'pretence',     tr: 'ədə',                       wrong: 'səmimiyyət',         wen: 'sincerity',     def: 'an attempt to make something that is not the case appear true' },
  { en: 'swindle',      tr: 'fırıldaq',                  wrong: 'qanuni iş',           wen: 'legitimate deal', def: 'a scheme intended to defraud or cheat someone' },
  { en: 'to beguile',   tr: 'cazibə ilə aldatmaq',       wrong: 'qorxutmaq',           wen: 'frighten',      def: 'to charm or enchant someone in a deceptive way' },
  { en: 'gambit',       tr: 'açılış hiyləsi',            wrong: 'dürüst addım',        wen: 'honest move',   def: 'an opening move in chess or a calculated action to gain an advantage' },
  { en: 'sophistry',    tr: 'yalançı mühakimə',          wrong: 'düzgün mühakimə',     wen: 'sound reasoning', def: 'the use of clever but false arguments, especially with the intention of deceiving' }
],

// ─────────────────────── QUIZ 3 — Criticism & Condemnation (1) ───────────────────────
[
  { en: 'to admonish', tr: 'xəbərdar etmək', wrong: 'tərifləmək', wen: 'praise', def: 'to warn or reprimand someone firmly and seriously about their behaviour or actions' },
  { en: 'to berate', tr: 'qızğın tənqid etmək', wrong: 'tərifləmək', wen: 'laud', def: 'to scold or criticize someone angrily and at length' },
  { en: 'to castigate', tr: 'sərt tənbeh etmək', wrong: 'tərifləmək', wen: 'applaud', def: 'to reprimand someone severely and at length' },
  { en: 'to censure', tr: 'qınamaq', wrong: 'bəyənmək', wen: 'approve', def: 'to express strong disapproval or harsh criticism of someone or something' },
  { en: 'to chastise', tr: 'cəzalandırmaq', wrong: 'mükafatlandırmaq', wen: 'reward', def: 'to reprimand someone severely, often with the intention of correcting their behaviour' },
  { en: 'to chide', tr: 'danlamaq', wrong: 'tərifləmək', wen: 'praise', def: 'to scold or rebuke someone mildly but firmly' },
  { en: 'to decry', tr: 'pisləmək', wrong: 'dəstəkləmək', wen: 'endorse', def: 'to publicly denounce or criticize something strongly' },
  { en: 'to denigrate', tr: 'ləkələmək', wrong: 'ucaltmaq', wen: 'exalt', def: 'to criticize someone or something unfairly in order to make them seem less valuable' },
  { en: 'to deprecate', tr: 'əhəmiyyətini azaltmaq', wrong: 'qiymətləndirmək', wen: 'appreciate', def: 'to express disapproval of something or to belittle its importance' },
  { en: 'to disparage', tr: 'aşağılamaq', wrong: 'tərifləmək', wen: 'extol', def: 'to regard or represent someone or something as being of little worth' },
  { en: 'to excoriate', tr: 'sərt tənqid etmək', wrong: 'tərifləmək', wen: 'praise', def: 'to criticize someone or something very severely' },
  { en: 'to lambaste', tr: 'qızğın hücum etmək', wrong: 'dəstəkləmək', wen: 'support', def: 'to criticize someone or something harshly and at length' },
  { en: 'to rebuke', tr: 'tənbeh etmək', wrong: 'tərifləmək', wen: 'commend', def: 'to express sharp disapproval or criticism of someone' },
  { en: 'to reprimand', tr: 'rəsmi danlamaq', wrong: 'təşəkkür etmək', wen: 'thank', def: 'to rebuke someone, especially officially or formally' },
  { en: 'to reproach', tr: 'irad tutmaq', wrong: 'tərifləmək', wen: 'praise', def: 'to express disapproval, criticism or disappointment towards someone' },
  { en: 'to repudiate', tr: 'rədd etmək', wrong: 'qəbul etmək', wen: 'accept', def: 'to refuse to accept or be associated with something' },
  { en: 'to upbraid', tr: 'qınamaq', wrong: 'tərifləmək', wen: 'laud', def: 'to criticize or scold someone severely' },
  { en: 'to vilify', tr: 'iftira atmaq', wrong: 'tərifləmək', wen: 'praise', def: 'to speak or write about someone in an abusively disparaging manner' },
  { en: 'to vituperate', tr: 'qəzəbli tənqid etmək', wrong: 'tərifləmək', wen: 'extol', def: 'to criticize someone abusively and at length' },
  { en: 'diatribe', tr: 'sərt hücum', wrong: 'tərif nitqi', wen: 'eulogy', def: 'a bitter, sharply critical attack or denunciation in speech or writing' }
],

// ─────────────────────── QUIZ 4 — Criticism & Condemnation (2) ───────────────────────
[
  { en: 'acrimonious', tr: 'acıqlı', wrong: 'mehriban', wen: 'amicable', def: 'full of anger, arguments and bad feeling' },
  { en: 'acrimony', tr: 'kin', wrong: 'sevgi', wen: 'affection', def: 'bitterness or ill feeling between people' },
  { en: 'aspersion', tr: 'iftira', wrong: 'tərif', wen: 'praise', def: 'an attack on the reputation or integrity of someone' },
  { en: 'defamation', tr: 'ləkələmə', wrong: 'tərif', wen: 'commendation', def: 'the action of damaging someone’s good reputation by making false statements' },
  { en: 'derisive', tr: 'lağ edici', wrong: 'hörmətli', wen: 'respectful', def: 'expressing contempt or ridicule' },
  { en: 'derogatory', tr: 'aşağılayıcı', wrong: 'tərifedici', wen: 'complimentary', def: 'showing a critical or disrespectful attitude' },
  { en: 'invective', tr: 'təhqir', wrong: 'tərif', wen: 'eulogy', def: 'insulting, abusive or highly critical language' },
  { en: 'pejorative', tr: 'aşağılayıcı', wrong: 'müsbət', wen: 'positive', def: 'expressing contempt or disapproval' },
  { en: 'polemic', tr: 'kəskin mübahisə', wrong: 'razılıq', wen: 'agreement', def: 'a strong verbal or written attack on someone or something' },
  { en: 'recrimination', tr: 'qarşılıqlı ittiham', wrong: 'qarşılıqlı tərif', wen: 'mutual praise', def: 'an accusation made in response to a similar accusation' },
  { en: 'reprehensible', tr: 'qınanacaq', wrong: 'təqdirəlayiq', wen: 'commendable', def: 'deserving censure or condemnation' },
  { en: 'scathing', tr: 'sərt', wrong: 'yumşaq', wen: 'mild', def: 'witheringly scornful or severely critical' },
  { en: 'scurrilous', tr: 'təhqiramiz', wrong: 'hörmətli', wen: 'respectful', def: 'making or spreading scandalous claims about someone' },
  { en: 'slander', tr: 'iftira', wrong: 'tərif', wen: 'praise', def: 'the action or crime of making a false spoken statement damaging to a person’s reputation' },
  { en: 'tirade', tr: 'qızğın nitq', wrong: 'tərif nitqi', wen: 'eulogy', def: 'a long, angry speech of criticism or accusation' },
  { en: 'vitriolic', tr: 'zəhərli', wrong: 'mehriban', wen: 'kind', def: 'filled with bitter criticism or malice' },
  { en: 'harangue', tr: 'qızğın danışma', wrong: 'sakit danışma', wen: 'calm speech', def: 'a lengthy and aggressive speech criticising someone' },
  { en: 'lampoon', tr: 'satira', wrong: 'tərif', wen: 'panegyric', def: 'a sharp, often malicious satire directed against an individual' },
  { en: 'to malign', tr: 'pisləmək', wrong: 'tərifləmək', wen: 'praise', def: 'to speak about someone in a spitefully critical manner' },
  { en: 'to impugn', tr: 'şübhə altına almaq', wrong: 'təsdiqləmək', wen: 'affirm', def: 'to dispute the truth, validity or honesty of something' }
],

// ─────────────────────── QUIZ 5 — Morality & Ethics (1) ───────────────────────
[
  { en: 'to absolve', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq', wen: 'accuse', def: 'to declare someone free from guilt, blame or responsibility' },
  { en: 'to atone', tr: 'təkfir etmək', wrong: 'günah işləmək', wen: 'sin', def: 'to make amends or reparation for a wrongdoing or sin' },
  { en: 'contrition', tr: 'peşmançılıq', wrong: 'qürur', wen: 'pride', def: 'the state of feeling remorseful and repentant for one’s sins or wrongdoings' },
  { en: 'culpable', tr: 'günahkar', wrong: 'günahsız', wen: 'innocent', def: 'deserving blame or censure for a wrongdoing' },
  { en: 'culprit', tr: 'təqsirkar', wrong: 'qurban', wen: 'victim', def: 'a person who is responsible for a crime or other misdeed' },
  { en: 'depravity', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq', wen: 'virtue', def: 'moral corruption or wickedness' },
  { en: 'impropriety', tr: 'uyğunsuzluq', wrong: 'uyğunluq', wen: 'propriety', def: 'a failure to observe standards of behaviour regarded as correct' },
  { en: 'iniquitous', tr: 'ədalətsiz', wrong: 'ədalətli', wen: 'just', def: 'grossly unfair and morally wrong' },
  { en: 'malfeasance', tr: 'qanunsuz hərəkət', wrong: 'qanuni hərəkət', wen: 'lawful conduct', def: 'wrongdoing, especially by a public official' },
  { en: 'nefarious', tr: 'alçaq', wrong: 'nəcib', wen: 'noble', def: 'wicked or criminal in nature' },
  { en: 'penitence', tr: 'peşmançılıq', wrong: 'qürur', wen: 'arrogance', def: 'the feeling of sorrow or regret for having done something wrong' },
  { en: 'probity', tr: 'dürüstlük', wrong: 'yalançılıq', wen: 'dishonesty', def: 'the quality of having strong moral principles and honesty' },
  { en: 'profligate', tr: 'israfçı', wrong: 'qənaətcil', wen: 'frugal', def: 'recklessly extravagant or wasteful in the use of resources' },
  { en: 'rectitude', tr: 'əxlaqi düzgünlük', wrong: 'əxlaqsızlıq', wen: 'immorality', def: 'morally correct behaviour or thinking; righteousness' },
  { en: 'repentance', tr: 'peşmançılıq', wrong: 'qürur', wen: 'pride', def: 'the action of expressing sincere regret or remorse for wrongdoing' },
  { en: 'reproachable', tr: 'qınanacaq', wrong: 'təqdirəlayiq', wen: 'commendable', def: 'deserving blame or criticism' },
  { en: 'righteousness', tr: 'ədalətlilik', wrong: 'ədalətsizlik', wen: 'injustice', def: 'the quality of being morally right or justifiable' },
  { en: 'turpitude', tr: 'alçaqlıq', wrong: 'nəciblik', wen: 'nobility', def: 'depravity or wickedness' },
  { en: 'wrongdoer', tr: 'günahkar', wrong: 'günahsız', wen: 'innocent', def: 'a person who commits an immoral or illegal act' },
  { en: 'wickedness', tr: 'pislik', wrong: 'yaxşılıq', wen: 'goodness', def: 'the quality of being evil or morally wrong' }
],

// ─────────────────────── QUIZ 6 — Morality & Ethics (2) ───────────────────────
[
  { en: 'altruistic', tr: 'əltruist', wrong: 'eqoist', wen: 'selfish', def: 'showing a selfless concern for the well-being of others' },
  { en: 'to condone', tr: 'bağışlamaq', wrong: 'cəzalandırmaq', wen: 'punish', def: 'to accept or allow behaviour that is morally wrong' },
  { en: 'to desecrate', tr: 'müqəddəsliyini pozmaq', wrong: 'hörmət etmək', wen: 'venerate', def: 'to treat something sacred with violent disrespect' },
  { en: 'dishonourable', tr: 'namussuz', wrong: 'namuslu', wen: 'honourable', def: 'bringing shame or disgrace upon someone' },
  { en: 'execrable', tr: 'nifrətəlayiq', wrong: 'təqdirəlayiq', wen: 'admirable', def: 'extremely bad or unpleasant; deserving to be detested' },
  { en: 'flagrant', tr: 'aşkar', wrong: 'gizli', wen: 'covert', def: 'glaringly or conspicuously offensive' },
  { en: 'heinous', tr: 'çox pis', wrong: 'yaxşı', wen: 'virtuous', def: 'utterly odious or wicked' },
  { en: 'immaculate', tr: 'ləkəsiz', wrong: 'ləkəli', wen: 'flawed', def: 'perfectly clean, neat or free from moral blemish' },
  { en: 'inhumanity', tr: 'insanlıqsızlıq', wrong: 'insanlıq', wen: 'humanity', def: 'cruelty or lack of compassion' },
  { en: 'irreproachable', tr: 'qüsursuz', wrong: 'qüsurlu', wen: 'flawed', def: 'beyond criticism; faultless' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı', wen: 'virtuous', def: 'promiscuous and unprincipled in sexual matters' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli', wen: 'petty', def: 'generous or forgiving, especially towards a rival or less powerful person' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri', wen: 'stingy', def: 'extremely generous or liberal in giving' },
  { en: 'philanthropic', tr: 'xeyriyyəçi', wrong: 'eqoist', wen: 'selfish', def: 'seeking to promote the welfare of others' },
  { en: 'pious', tr: 'dindar', wrong: 'dinsiz', wen: 'irreligious', def: 'devoutly religious or showing deep reverence' },
  { en: 'sacrilegious', tr: 'müqəddəsliyə hörmətsizlik', wrong: 'hörmətli', wen: 'reverent', def: 'disrespectful to something considered sacred' },
  { en: 'sanctimonious', tr: 'iküzlü dindar', wrong: 'səmimi dindar', wen: 'genuinely devout', def: 'making a hypocritical show of moral superiority' },
  { en: 'scrupulous', tr: 'vicdanlı', wrong: 'vicdansız', wen: 'unscrupulous', def: 'careful, thorough and extremely attentive to details of morality' },
  { en: 'to transgress', tr: 'qanunu pozmaq', wrong: 'qanuna əməl etmək', wen: 'comply', def: 'to infringe or go beyond the bounds of a moral principle or law' },
  { en: 'transgression', tr: 'pozuntu', wrong: 'əməl', wen: 'compliance', def: 'a violation of a law, command or moral code' }
],

// ─────────────────────── QUIZ 7 — Power & Authority (1) ───────────────────────
[
  { en: 'autocracy', tr: 'avtokratiya', wrong: 'demokratiya', wen: 'democracy', def: 'a system of government in which one person possesses absolute power' },
  { en: 'autocrat', tr: 'avtokrat', wrong: 'demokrat', wen: 'democrat', def: 'a ruler with absolute power, especially a monarch who rules by their own authority' },
  { en: 'to abdicate', tr: 'taxtdan imtina etmək', wrong: 'taxta çıxmaq', wen: 'ascend the throne', def: 'to renounce the throne or a high office formally' },
  { en: 'ascendancy', tr: 'üstünlük', wrong: 'zəiflik', wen: 'weakness', def: 'the state of being in a position of superior power or influence' },
  { en: 'dominion', tr: 'hakimiyyət', wrong: 'tabesizlik', wen: 'subjection', def: 'sovereign control or supreme authority over a territory' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'respublika', wen: 'republic', def: 'a line of hereditary rulers of a country' },
  { en: 'hegemony', tr: 'hegemonluq', wrong: 'bərabərlik', wen: 'equality', def: 'leadership or dominance of one state or social group over others' },
  { en: 'imperialism', tr: 'imperializm', wrong: 'azadlıq', wen: 'liberty', def: 'a policy of extending a country’s power and influence through colonization or military force' },
  { en: 'incumbent', tr: 'vəzifədə olan', wrong: 'namizəd', wen: 'candidate', def: 'the current holder of a political office' },
  { en: 'oligarchy', tr: 'oliqarxiya', wrong: 'demokratiya', wen: 'democracy', def: 'a small group of people having control of a country or organization' },
  { en: 'omnipotence', tr: 'hər şeyə qadirlik', wrong: 'zəiflik', wen: 'impotence', def: 'the quality of having unlimited or very great power' },
  { en: 'patriarch', tr: 'atafiqur', wrong: 'anafigür', wen: 'matriarch', def: 'the male head of a family or tribe' },
  { en: 'prerogative', tr: 'imtiyaz', wrong: 'məhdudiyyət', wen: 'restriction', def: 'a right or privilege exclusive to a particular individual or class' },
  { en: 'primacy', tr: 'birincilik', wrong: 'ikincilik', wen: 'secondary status', def: 'the fact of being primary, pre-eminent or most important' },
  { en: 'sovereignty', tr: 'suverenlik', wrong: 'asılılıq', wen: 'dependence', def: 'the authority of a state to govern itself or another state' },
  { en: 'supremacy', tr: 'üstünlük', wrong: 'bərabərlik', wen: 'equality', def: 'the state or condition of being superior to all others in authority or power' },
  { en: 'to subjugate', tr: 'boyunduruq altına almaq', wrong: 'azad etmək', wen: 'liberate', def: 'to bring under domination or control, especially by conquest' },
  { en: 'to usurp', tr: 'zorla ələ keçirmək', wrong: 'qanuni almaq', wen: 'legitimately acquire', def: 'to take a position of power or importance illegally or by force' },
  { en: 'usurpation', tr: 'zorla ələ keçirmə', wrong: 'qanuni miras', wen: 'lawful inheritance', def: 'the act of seizing and holding a position of power by force' },
  { en: 'totalitarian', tr: 'totalitar', wrong: 'demokratik', wen: 'democratic', def: 'relating to a system of government that is centralized and dictatorial' }
],

// ─────────────────────── QUIZ 8 — Power & Authority (2) ───────────────────────
[
  { en: 'aegis', tr: 'himayə', wrong: 'təhlükə', wen: 'peril', def: 'the protection, backing or support of a particular person or organization' },
  { en: 'to coerce', tr: 'məcbur etmək', wrong: 'azad buraxmaq', wen: 'liberate', def: 'to persuade or restrain someone by force or threats' },
  { en: 'coercion', tr: 'məcburiyyət', wrong: 'azadlıq', wen: 'freedom', def: 'the practice of persuading someone to do something by using force or threats' },
  { en: 'demagogue', tr: 'demqoq', wrong: 'dövlət xadimi', wen: 'statesman', def: 'a political leader who seeks support by appealing to popular desires and prejudices' },
  { en: 'dictatorial', tr: 'diktatorluq', wrong: 'demokratik', wen: 'democratic', def: 'of or typical of a ruler with total power' },
  { en: 'entrenchment', tr: 'möhkəmlənmə', wrong: 'zəifləmə', wen: 'weakening', def: 'the process of establishing something very firmly and securely' },
  { en: 'figurehead', tr: 'nominal rəhbər', wrong: 'əsl rəhbər', wen: 'actual leader', def: 'a nominal leader or head without real power' },
  { en: 'jurisdiction', tr: 'səlahiyyət', wrong: 'məhdudiyyət', wen: 'limitation', def: 'the official power to make legal decisions and judgments' },
  { en: 'mandate', tr: 'səlahiyyət', wrong: 'qadağa', wen: 'prohibition', def: 'the authority to carry out a policy or course of action given by an electorate' },
  { en: 'matriarch', tr: 'anafigür', wrong: 'atafiqur', wen: 'patriarch', def: 'a woman who is the head of a family or tribe' },
  { en: 'mogul', tr: 'maqnat', wrong: 'adi adam', wen: 'commoner', def: 'a powerful and influential person, especially in business' },
  { en: 'monarch', tr: 'monarx', wrong: 'respublikaçı', wen: 'republican', def: 'a sovereign head of state, especially a king, queen or emperor' },
  { en: 'potentate', tr: 'hakim', wrong: 'tabe', wen: 'subordinate', def: 'a ruler or monarch with great power' },
  { en: 'regent', tr: 'regent', wrong: 'adi vətəndaş', wen: 'common citizen', def: 'a person appointed to administer a country because the monarch is absent or incapacitated' },
  { en: 'to subdue', tr: 'ram etmək', wrong: 'azad etmək', wen: 'liberate', def: 'to bring under control by force' },
  { en: 'to suppress', tr: 'boğmaq', wrong: 'dəstəkləmək', wen: 'foster', def: 'to forcibly put an end to something, especially by using authority or force' },
  { en: 'tutelage', tr: 'himayə', wrong: 'azadlıq', wen: 'independence', def: 'protection or guardianship exercised by a person or institution' },
  { en: 'tyrant', tr: 'tiran', wrong: 'ədalətli hökmdar', wen: 'benevolent ruler', def: 'a cruel and oppressive ruler' },
  { en: 'tyranny', tr: 'tiranlıq', wrong: 'demokratiya', wen: 'democracy', def: 'cruel and oppressive government or rule' },
  { en: 'veto', tr: 'veto', wrong: 'təsdiq', wen: 'ratification', def: 'a constitutional right to reject a decision or proposal made by a law-making body' }
],

// ─────────────────────── QUIZ 9 — Conflict & Hostility (1) ───────────────────────
[
  { en: 'adversary', tr: 'düşmən', wrong: 'dost', wen: 'ally', def: 'one’s opponent in a contest, conflict or dispute' },
  { en: 'altercation', tr: 'mübahisə', wrong: 'razılıq', wen: 'agreement', def: 'a noisy argument or disagreement, especially in public' },
  { en: 'animosity', tr: 'kin', wrong: 'sevgi', wen: 'affection', def: 'strong hostility or enmity' },
  { en: 'antagonise', tr: 'düşmən etmək', wrong: 'dost etmək', wen: 'befriend', def: 'to cause someone to become hostile or unfriendly' },
  { en: 'antipathy', tr: 'antipatiya', wrong: 'simpatiya', wen: 'sympathy', def: 'a strong feeling of dislike or aversion' },
  { en: 'bellicose', tr: 'döyüşkən', wrong: 'sülhsevər', wen: 'peace-loving', def: 'demonstrating aggression and willingness to fight' },
  { en: 'belligerent', tr: 'müharibə aparan', wrong: 'sülhsevər', wen: 'peaceful', def: 'hostile and aggressive' },
  { en: 'combat', tr: 'döyüş', wrong: 'sülh', wen: 'peace', def: 'fighting between armed forces' },
  { en: 'conflagration', tr: 'böyük münaqişə', wrong: 'sülh', wen: 'peace', def: 'a large and destructive fire or conflict' },
  { en: 'discord', tr: 'nifaq', wrong: 'harmoniya', wen: 'harmony', def: 'disagreement between people' },
  { en: 'enmity', tr: 'düşmənçilik', wrong: 'dostluq', wen: 'friendship', def: 'a state or feeling of active opposition or hostility' },
  { en: 'feud', tr: 'qarşıdurma', wrong: 'barış', wen: 'reconciliation', def: 'a prolonged and bitter quarrel or dispute' },
  { en: 'fray', tr: 'dava', wrong: 'sülh', wen: 'peace', def: 'a fight or skirmish' },
  { en: 'to foment', tr: 'qızışdırmaq', wrong: 'sakitləşdirmək', wen: 'pacify', def: 'to instigate or stir up trouble or rebellion' },
  { en: 'incendiary', tr: 'qızışdırıcı', wrong: 'sakitləşdirici', wen: 'calming', def: 'tending to stir up conflict or violence' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh', wen: 'peace', def: 'an organized rebellion against a government or authority' },
  { en: 'internecine', tr: 'daxili müharibə', wrong: 'xarici müharibə', wen: 'external war', def: 'destructive to both sides in a conflict' },
  { en: 'melee', tr: 'qarışıq dava', wrong: 'sülh', wen: 'peace', def: 'a confused fight or scuffle involving many people' },
  { en: 'onslaught', tr: 'güclü hücum', wrong: 'müdafiə', wen: 'defense', def: 'a fierce or destructive attack' },
  { en: 'skirmish', tr: 'kiçik toqquşma', wrong: 'sülh', wen: 'peace', def: 'a minor fight or battle between small groups' }
],

// ─────────────────────── QUIZ 10 — Conflict & Hostility (2) ───────────────────────
[
  { en: 'strife', tr: 'mübarizə', wrong: 'sülh', wen: 'peace', def: 'angry or bitter disagreement over fundamental issues' },
  { en: 'tumult', tr: 'qarışıqlıq', wrong: 'sakitlik', wen: 'serenity', def: 'a loud, confused noise, especially caused by a large mass of people' },
  { en: 'tumultuous', tr: 'qarışıq', wrong: 'sakit', wen: 'calm', def: 'making an uproar or loud, confused noise' },
  { en: 'upheaval', tr: 'çevriliş', wrong: 'sabitlik', wen: 'stability', def: 'a violent or sudden change or disruption to something' },
  { en: 'uprising', tr: 'üsyan', wrong: 'sülh', wen: 'peace', def: 'an act of resistance or rebellion against authority' },
  { en: 'turmoil', tr: 'qarışıqlıq', wrong: 'sakitlik', wen: 'tranquility', def: 'a state of great disturbance, confusion or uncertainty' },
  { en: 'vendetta', tr: 'qan davası', wrong: 'barış', wen: 'reconciliation', def: 'a prolonged bitter quarrel with or between people' },
  { en: 'warfare', tr: 'müharibə', wrong: 'sülh', wen: 'peace', def: 'the activity of fighting a war' },
  { en: 'to beleaguer', tr: 'mühazirə etmək', wrong: 'azad etmək', wen: 'liberate', def: 'to besiege or harass persistently' },
  { en: 'dissension', tr: 'ixtilaf', wrong: 'razılıq', wen: 'consensus', def: 'disagreement that leads to discord' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət', wen: 'obedience', def: 'a violent uprising against an authority or government' },
  { en: 'marauder', tr: 'talançı', wrong: 'qoruyucu', wen: 'protector', def: 'a person who raids and plunders' },
  { en: 'rancour', tr: 'kin', wrong: 'sevgi', wen: 'love', def: 'bitterness or resentfulness, especially when long-standing' },
  { en: 'ravage', tr: 'dağıntı', wrong: 'qurma', wen: 'construction', def: 'severe and destructive action or damage' },
  { en: 'to retaliate', tr: 'qisas almaq', wrong: 'bağışlamaq', wen: 'forgive', def: 'to make an attack or assault in return for a similar attack' },
  { en: 'retribution', tr: 'cəza', wrong: 'mükafat', wen: 'reward', def: 'punishment inflicted on someone as vengeance for a wrong or criminal act' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik', wen: 'unity', def: 'a split or division between strongly opposed parties' },
  { en: 'siege', tr: 'mühazirə', wrong: 'azadlıq', wen: 'liberation', def: 'a military operation in which enemy forces surround a town or building' },
  { en: 'warlord', tr: 'müharibə başçısı', wrong: 'sülh elçisi', wen: 'peacemaker', def: 'a military commander with autonomous power in a region' },
  { en: 'to vanquish', tr: 'məğlub etmək', wrong: 'məğlub olmaq', wen: 'be defeated', def: 'to defeat thoroughly in a conflict' }
],

      // ─────────────────────── QUIZ 11 — Law & Governance (1) ───────────────────────
[
  { en: 'to abrogate', tr: 'ləğv etmək', wrong: 'təsdiqləmək', wen: 'ratify', def: 'to repeal or cancel a law, treaty or agreement formally and officially' },
  { en: 'abrogation', tr: 'ləğv', wrong: 'təsdiq', wen: 'ratification', def: 'the formal cancellation or repeal of a law, treaty or agreement' },
  { en: 'to accede', tr: 'razılaşmaq', wrong: 'imtina etmək', wen: 'refuse', def: 'to agree to a demand, proposal or treaty, especially in a formal context' },
  { en: 'affidavit', tr: 'andlı ifadə', wrong: 'şifahi ifadə', wen: 'oral statement', def: 'a written statement confirmed by oath to be used as evidence in court' },
  { en: 'allegation', tr: 'iddiaya', wrong: 'sübut', wen: 'proof', def: 'a claim or assertion that someone has done something illegal or wrong, typically without proof' },
  { en: 'to allege', tr: 'iddiaya etmək', wrong: 'sübut etmək', wen: 'prove', def: 'to claim or assert that someone has done something illegal or wrong, usually without proof' },
  { en: 'amendment', tr: 'dəyişiklik', wrong: 'sabitlik', wen: 'stability', def: 'a minor change or addition designed to improve or correct a law, document or constitution' },
  { en: 'breach', tr: 'pozuntu', wrong: 'əməl', wen: 'compliance', def: 'an act of breaking or failing to observe a law, agreement or code of conduct' },
  { en: 'to contravene', tr: 'pozmaq', wrong: 'əməl etmək', wen: 'comply', def: 'to act in a way that conflicts with a law, treaty or principle' },
  { en: 'decree', tr: 'fərman', wrong: 'təklif', wen: 'proposal', def: 'an official order issued by a ruler, government or court having the force of law' },
  { en: 'edict', tr: 'əmr', wrong: 'məsləhət', wen: 'advice', def: 'an official order or proclamation issued by a person in authority' },
  { en: 'enforcement', tr: 'icra', wrong: 'ləğv', wen: 'repeal', def: 'the act of compelling observance of or obedience to a law, rule or obligation' },
  { en: 'to indict', tr: 'ittiham etmək', wrong: 'azad etmək', wen: 'acquit', def: 'to formally accuse or charge someone with a serious crime' },
  { en: 'indictment', tr: 'ittihamnamə', wrong: 'bəraət', wen: 'acquittal', def: 'a formal charge or accusation of a serious crime' },
  { en: 'infraction', tr: 'qayda pozuntusu', wrong: 'qaydaya riayət', wen: 'compliance', def: 'a violation or infringement of a law, agreement or code of conduct' },
  { en: 'injunction', tr: 'məhkəmə qadağası', wrong: 'icazə', wen: 'permission', def: 'an authoritative warning or order from a court prohibiting or requiring a specific action' },
  { en: 'jurisdiction', tr: 'səlahiyyət dairəsi', wrong: 'səlahiyyətsizlik', wen: 'lack of authority', def: 'the official power to make legal decisions and judgments over a particular area or matter' },
  { en: 'jurisprudence', tr: 'hüquqşünaslıq', wrong: 'qeyri-hüquqi', wen: 'non-legal', def: 'the theory or philosophy of law and the study of legal systems' },
  { en: 'legislation', tr: 'qanunvericilik', wrong: 'qanunsuzluq', wen: 'lawlessness', def: 'laws collectively or the process of making or enacting laws' },
  { en: 'ordinance', tr: 'yerli qayda', wrong: 'qadağa', wen: 'prohibition', def: 'an authoritative order or regulation issued by a local government or authority' }
],

// ─────────────────────── QUIZ 12 — Law & Governance (2) ───────────────────────
[
  { en: 'perjury', tr: 'yalan ifadə', wrong: 'düzgün ifadə', wen: 'truthful testimony', def: 'the offence of willfully telling an untruth in court after having taken an oath' },
  { en: 'plaintiff', tr: 'iddiaçı', wrong: 'cavabdeh', wen: 'defendant', def: 'a person who brings a case against another in a court of law' },
  { en: 'to ratify', tr: 'təsdiqləmək', wrong: 'ləğv etmək', wen: 'abrogate', def: 'to sign or give formal consent to a treaty or agreement making it officially valid' },
  { en: 'ratification', tr: 'təsdiq', wrong: 'imtina', wen: 'rejection', def: 'the action of signing or giving formal consent to a treaty or agreement' },
  { en: 'to rescind', tr: 'ləğv etmək', wrong: 'qüvvədə saxlamaq', wen: 'uphold', def: 'to revoke, cancel or repeal a law, order or agreement' },
  { en: 'to revoke', tr: 'ləğv etmək', wrong: 'uzatmaq', wen: 'extend', def: 'to officially cancel or withdraw a licence, agreement or right' },
  { en: 'revocation', tr: 'ləğv', wrong: 'təsdiq', wen: 'ratification', def: 'the official cancellation of a law, agreement or right' },
  { en: 'statute', tr: 'qanun', wrong: 'ənənə', wen: 'custom', def: 'a written law passed by a legislative body' },
  { en: 'subpoena', tr: 'məhkəmə çağırışı', wrong: 'dəvət', wen: 'invitation', def: 'a writ ordering a person to attend a court or produce documents' },
  { en: 'to adjudicate', tr: 'məhkəmə yolu ilə həll etmək', wrong: 'görüşmədə həll etmək', wen: 'negotiate', def: 'to make a formal judgment or decision about a disputed matter' },
  { en: 'tribunal', tr: 'məhkəmə', wrong: 'parlament', wen: 'parliament', def: 'a court or other body with authority to judge and decide on particular issues' },
  { en: 'verdict', tr: 'hökm', wrong: 'təklif', wen: 'proposal', def: 'a decision on a disputed issue in a civil or criminal case' },
  { en: 'to acquit', tr: 'bəraət qazanmaq', wrong: 'günahlandırmaq', wen: 'convict', def: 'to free someone from a criminal charge by a verdict of not guilty' },
  { en: 'culprit', tr: 'təqsirkar', wrong: 'qurban', wen: 'victim', def: 'a person who is responsible for a crime or offence' },
  { en: 'custody', tr: 'həbs', wrong: 'azadlıq', wen: 'liberty', def: 'the state of being imprisoned or detained by the authorities' },
  { en: 'defendant', tr: 'cavabdeh', wrong: 'iddiaçı', wen: 'plaintiff', def: 'an individual, company or institution sued or accused in a court of law' },
  { en: 'to exonerate', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq', wen: 'incriminate', def: 'to absolve someone from blame or responsibility for a fault or wrongdoing' },
  { en: 'to indemnify', tr: 'təzminat ödəmək', wrong: 'cərimə etmək', wen: 'fine', def: 'to compensate someone for harm, loss or damage suffered' },
  { en: 'to prosecute', tr: 'cinayət işi açmaq', wrong: 'müdafiə etmək', wen: 'defend', def: 'to institute legal proceedings against someone in respect of a crime' },
  { en: 'restitution', tr: 'əvəz ödənişi', wrong: 'cəza', wen: 'punishment', def: 'the restoration of something lost or stolen to its rightful owner' }
],

// ─────────────────────── QUIZ 13 — Praise & Admiration ───────────────────────
[
  { en: 'acclaim', tr: 'böyük tərif', wrong: 'tənqid', wen: 'criticism', def: 'enthusiastic and public praise or approval' },
  { en: 'acclamation', tr: 'alkış', wrong: 'pisləmə', wen: 'denunciation', def: 'loud and enthusiastic approval or praise' },
  { en: 'accolade', tr: 'fəxri ad', wrong: 'tənqid', wen: 'criticism', def: 'an award or privilege granted as a special honour' },
  { en: 'adulation', tr: 'həddindən artıq tərif', wrong: 'nifrət', wen: 'contempt', def: 'excessive admiration or praise, especially when insincere' },
  { en: 'to commend', tr: 'tərifləmək', wrong: 'qınamaq', wen: 'censure', def: 'to praise someone or something formally or publicly' },
  { en: 'to extol', tr: 'ucaltmaq', wrong: 'aşağılamaq', wen: 'denigrate', def: 'to praise someone or something enthusiastically and at length' },
  { en: 'eulogy', tr: 'tərif nitqi', wrong: 'tənqid nitqi', wen: 'diatribe', def: 'a speech or piece of writing that praises someone or something highly' },
  { en: 'to exalt', tr: 'ucaltmaq', wrong: 'alçaltmaq', wen: 'belittle', def: 'to praise someone or something highly' },
  { en: 'exaltation', tr: 'ucaldılma', wrong: 'alçaldılma', wen: 'denigration', def: 'the action of praising someone or something highly' },
  { en: 'homage', tr: 'hörmət', wrong: 'hörmətsizlik', wen: 'disrespect', def: 'special honour or respect shown publicly' },
  { en: 'kudos', tr: 'tərif', wrong: 'tənqid', wen: 'criticism', def: 'praise and honour received for an achievement' },
  { en: 'to laud', tr: 'tərifləmək', wrong: 'pisləmək', wen: 'denounce', def: 'to praise someone or something highly and enthusiastically' },
  { en: 'laudable', tr: 'tərifəlayiq', wrong: 'qınanacaq', wen: 'reprehensible', def: 'deserving praise and commendation' },
  { en: 'laureate', tr: 'mükafatçı', wrong: 'məğlub', wen: 'loser', def: 'a person who is honoured with an award for outstanding achievement' },
  { en: 'ovation', tr: 'ayaq üstə alqış', wrong: 'fit', wen: 'booing', def: 'a sustained and enthusiastic show of appreciation from an audience' },
  { en: 'to revere', tr: 'hörmət etmək', wrong: 'nifrət etmək', wen: 'despise', def: 'to feel deep respect or admiration for someone or something' },
  { en: 'reverent', tr: 'hörmətli', wrong: 'hörmətsiz', wen: 'disrespectful', def: 'feeling or showing deep respect and admiration' },
  { en: 'venerable', tr: 'hörmətəlayiq', wrong: 'adi', wen: 'ordinary', def: 'accorded a great deal of respect, especially because of age, wisdom or character' },
  { en: 'veneration', tr: 'hörmət', wrong: 'nifrət', wen: 'contempt', def: 'great respect or reverence' },
  { en: 'to vindicate', tr: 'haqlı çıxarmaq', wrong: 'günahlandırmaq', wen: 'incriminate', def: 'to clear someone of blame or suspicion' }
],

// ─────────────────────── QUIZ 14 — Negative Character Traits (1) ───────────────────────
[
  { en: 'arrogance', tr: 'təkəbbür', wrong: 'təvazökarlıq', wen: 'humility', def: 'an inflated sense of one’s own importance or abilities' },
  { en: 'avarice', tr: 'tamahkarlıq', wrong: 'səxavət', wen: 'generosity', def: 'extreme greed for wealth or material gain' },
  { en: 'bigotry', tr: 'fanatizm', wrong: 'tolerantlıq', wen: 'tolerance', def: 'intolerance towards those who hold different opinions or beliefs' },
  { en: 'bombastic', tr: 'təntənəli', wrong: 'sadə', wen: 'plain', def: 'high-sounding but with little meaning; inflated' },
  { en: 'boorish', tr: 'kobud', wrong: 'nəzakətli', wen: 'courteous', def: 'rough and bad-mannered; coarse' },
  { en: 'callous', tr: 'duyğusuz', wrong: 'hissli', wen: 'sensitive', def: 'showing or having an insensitive and cruel disregard for others' },
  { en: 'capricious', tr: 'qərarsız', wrong: 'qətiyyətli', wen: 'resolute', def: 'given to sudden and unaccountable changes of mood or behaviour' },
  { en: 'churlish', tr: 'qaba', wrong: 'mehriban', wen: 'amiable', def: 'rude, blunt or surly in manner or behaviour' },
  { en: 'complacent', tr: 'özündən razı', wrong: 'təvazökar', wen: 'humble', def: 'showing smug or uncritical satisfaction with oneself' },
  { en: 'condescension', tr: 'yuxarıdan baxma', wrong: 'bərabər münasibət', wen: 'equality', def: 'an attitude of patronising superiority' },
  { en: 'craven', tr: 'qorxaq', wrong: 'cəsur', wen: 'courageous', def: 'contemptibly lacking in courage; cowardly' },
  { en: 'credulous', tr: 'asanlıqla inanan', wrong: 'skeptik', wen: 'sceptical', def: 'having too great a readiness to believe things' },
  { en: 'cupidity', tr: 'tamah', wrong: 'qənaət', wen: 'frugality', def: 'greed for money or possessions' },
  { en: 'feckless', tr: 'məsuliyyətsiz', wrong: 'məsuliyyətli', wen: 'responsible', def: 'lacking in efficiency or vitality; irresponsible' },
  { en: 'frivolous', tr: 'ciddi olmayan', wrong: 'ciddi', wen: 'serious', def: 'not having any serious purpose or value' },
  { en: 'gluttony', tr: 'oburluq', wrong: 'təmkin', wen: 'temperance', def: 'habitual greed or excess in eating or drinking' },
  { en: 'hubris', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq', wen: 'humility', def: 'excessive pride or self-confidence leading to downfall' },
  { en: 'hypocrisy', tr: 'iküzlülük', wrong: 'səmimiyyət', wen: 'sincerity', def: 'the practice of claiming to have moral standards or beliefs that one’s own behaviour does not conform to' },
  { en: 'impudence', tr: 'utanmazlıq', wrong: 'utanma', wen: 'modesty', def: 'the quality of being cheeky or rudely bold' },
  { en: 'insolent', tr: 'ədəbsiz', wrong: 'nəzakətli', wen: 'courteous', def: 'showing a rude and arrogant lack of respect' }
],

// ─────────────────────── QUIZ 15 — Negative Character Traits (2) ───────────────────────
[
  { en: 'irascible', tr: 'tez əsəbiləşən', wrong: 'sakit', wen: 'calm', def: 'having or showing a tendency to be easily angered' },
  { en: 'jaded', tr: 'yorğun və biganə', wrong: 'həvəsli', wen: 'enthusiastic', def: 'tired, bored or lacking enthusiasm, typically after having had too much of something' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı', wen: 'virtuous', def: 'promiscuous and unprincipled in sexual matters' },
  { en: 'mendacious', tr: 'yalançı', wrong: 'dürüst', wen: 'truthful', def: 'not telling the truth; lying' },
  { en: 'misanthrope', tr: 'insan nifrətçisi', wrong: 'insansevər', wen: 'philanthropist', def: 'a person who dislikes humankind and avoids human society' },
  { en: 'narcissism', tr: 'özünə vurulma', wrong: 'özünütənqid', wen: 'self-criticism', def: 'excessive interest in or admiration of oneself and one’s physical appearance' },
  { en: 'nepotism', tr: 'qohumbazlıq', wrong: 'ədalət', wen: 'fairness', def: 'the practice among those with power or influence of favouring relatives or friends' },
  { en: 'obsequious', tr: 'yaltaq', wrong: 'ləyaqətli', wen: 'dignified', def: 'excessively eager to please or obey' },
  { en: 'obstinate', tr: 'tərs', wrong: 'güzəştə getməyə hazır', wen: 'accommodating', def: 'stubbornly refusing to change one’s opinion or chosen course of action' },
  { en: 'petulant', tr: 'əsəbi və tələbkar', wrong: 'sakit', wen: 'placid', def: 'childishly sulky or bad-tempered' },
  { en: 'pompous', tr: 'təntənəli', wrong: 'sadə', wen: 'unpretentious', def: 'affectedly grand, solemn or self-important' },
  { en: 'presumptuous', tr: 'həddini aşan', wrong: 'təvazökar', wen: 'humble', def: 'failing to observe the limits of what is permitted or appropriate' },
  { en: 'pusillanimous', tr: 'qorxaq', wrong: 'cəsur', wen: 'courageous', def: 'showing a lack of courage or determination; timid' },
  { en: 'rapacious', tr: 'tamahkar', wrong: 'səxavətli', wen: 'generous', def: 'aggressively greedy or grasping' },
  { en: 'recalcitrant', tr: 'itaətsiz', wrong: 'itaətkar', wen: 'obedient', def: 'having an obstinately uncooperative attitude towards authority' },
  { en: 'recklessness', tr: 'ehtiyatsızlıq', wrong: 'ehtiyatlılıq', wen: 'caution', def: 'lack of care or caution in doing something' },
  { en: 'servile', tr: 'qul kimi', wrong: 'ləyaqətli', wen: 'dignified', def: 'having or showing an excessive willingness to serve or please others' },
  { en: 'sycophantic', tr: 'yaltaq', wrong: 'dürüst', wen: 'candid', def: 'behaving or done in an obsequious way to gain advantage' },
  { en: 'unctuous', tr: 'yaltaq', wrong: 'səmimi', wen: 'genuine', def: 'excessively flattering or ingratiating' },
  { en: 'vindictive', tr: 'qisasçı', wrong: 'bağışlayan', wen: 'forgiving', def: 'having or showing a strong or unreasoning desire for revenge' }
],

// ─────────────────────── QUIZ 16 — Positive Character Traits (1) ───────────────────────
[
  { en: 'adroit', tr: 'bacarıqlı', wrong: 'bacarıqsız', wen: 'clumsy', def: 'clever or skilful in using the hands or mind; dexterous' },
  { en: 'affable', tr: 'səmimi və mehriban', wrong: 'kobud', wen: 'gruff', def: 'friendly, good-natured, and easy to talk to' },
  { en: 'astute', tr: 'zirək', wrong: 'sadəlövh', wen: 'naive', def: 'having or showing an ability to accurately assess a situation and turn it to one’s advantage' },
  { en: 'candour', tr: 'açıqlıq', wrong: 'gizlətmə', wen: 'deception', def: 'the quality of being open and honest in expression; frankness' },
  { en: 'circumspect', tr: 'ehtiyatlı', wrong: 'ehtiyatsız', wen: 'reckless', def: 'wary and unwilling to take risks; prudent' },
  { en: 'clemency', tr: 'mərhəmət', wrong: 'sərtlik', wen: 'severity', def: 'mercy or leniency shown towards an offender or enemy' },
  { en: 'convivial', tr: 'şən və əyləncəli', wrong: 'kədərli', wen: 'melancholy', def: 'friendly, lively, and enjoyable, especially in a social context' },
  { en: 'dexterous', tr: 'mahır', wrong: 'bacarıqsız', wen: 'inept', def: 'showing or having skill, especially with the hands' },
  { en: 'diligent', tr: 'çalışqan', wrong: 'tənbəl', wen: 'lazy', def: 'having or showing care and conscientiousness in one’s work or duties' },
  { en: 'equanimity', tr: 'sakitlik', wrong: 'həyəcan', wen: 'agitation', def: 'mental calmness, composure, and evenness of temper, especially in a difficult situation' },
  { en: 'fastidious', tr: 'tələbkar', wrong: 'biganə', wen: 'indifferent', def: 'very attentive to and concerned about accuracy and detail' },
  { en: 'forbearance', tr: 'dözümlülük', wrong: 'səbirsizlik', wen: 'impatience', def: 'patient self-control; restraint and tolerance' },
  { en: 'fortitude', tr: 'dözüm', wrong: 'zəiflik', wen: 'frailty', def: 'courage in pain or adversity; mental and emotional strength' },
  { en: 'frugal', tr: 'qənaətcil', wrong: 'israfçı', wen: 'extravagant', def: 'sparing or economical as regards money or food' },
  { en: 'genial', tr: 'mehriban', wrong: 'soyuq', wen: 'aloof', def: 'friendly and cheerful; kindly' },
  { en: 'gregarious', tr: 'ünsiyyətcil', wrong: 'tənha', wen: 'solitary', def: 'fond of the company of others; sociable' },
  { en: 'impartial', tr: 'ədalətli', wrong: 'tərəfkeş', wen: 'biased', def: 'treating all rivals or disputants equally; fair and just' },
  { en: 'indefatigable', tr: 'yorulmaz', wrong: 'yorğun', wen: 'weary', def: 'persisting tirelessly; untiring' },
  { en: 'industrious', tr: 'çalışqan', wrong: 'tənbəl', wen: 'idle', def: 'diligent and hard-working' },
  { en: 'intrepid', tr: 'qorxmaz', wrong: 'qorxaq', wen: 'timid', def: 'fearless; adventurous' }
],

// ─────────────────────── QUIZ 17 — Positive Character Traits (2) ───────────────────────
[
  { en: 'judicious', tr: 'ağıllı', wrong: 'axmaq', wen: 'foolish', def: 'having, showing, or done with good judgement or sense' },
  { en: 'level-headed', tr: 'ağıl başında', wrong: 'həyəcanlı', wen: 'impulsive', def: 'calm and sensible; able to think clearly' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli', wen: 'petty', def: 'generous or forgiving, especially towards a rival or less powerful person' },
  { en: 'meticulous', tr: 'dəqiq', wrong: 'səhlənkar', wen: 'careless', def: 'showing great attention to detail; very careful and precise' },
  { en: 'painstaking', tr: 'zəhmətkeş', wrong: 'tənbəl', wen: 'lazy', def: 'done with or employing great care and thoroughness' },
  { en: 'perseverance', tr: 'davamlılıq', wrong: 'təslimçilik', wen: 'surrender', def: 'persistence in doing something despite difficulty or delay in achieving success' },
  { en: 'perspicacious', tr: 'iti ağıllı', wrong: 'küt', wen: 'obtuse', def: 'having a ready insight into and understanding of things' },
  { en: 'pragmatic', tr: 'realist', wrong: 'xəyalpərəst', wen: 'idealistic', def: 'dealing with things sensibly and realistically in a way that is based on practical considerations' },
  { en: 'prudent', tr: 'ehtiyatlı', wrong: 'ehtiyatsız', wen: 'reckless', def: 'acting with or showing care and thought for the future' },
  { en: 'resolute', tr: 'qətiyyətli', wrong: 'qərarsız', wen: 'indecisive', def: 'admirably purposeful, determined, and unwavering' },
  { en: 'sagacious', tr: 'dərin ağıllı', wrong: 'sadə', wen: 'simple-minded', def: 'having or showing keen mental discernment and good judgement' },
  { en: 'scrupulous', tr: 'vicdanlı', wrong: 'vicdansız', wen: 'unscrupulous', def: 'careful, thorough, and extremely attentive to details of morality' },
  { en: 'steadfastness', tr: 'sadiqlik', wrong: 'xəyanət', wen: 'betrayal', def: 'loyalty and firmness in purpose or belief' },
  { en: 'stoic', tr: 'dözümlü', wrong: 'həssas', wen: 'emotional', def: 'enduring pain or hardship without showing feelings or complaining' },
  { en: 'tenacious', tr: 'davamlı', wrong: 'zəif', wen: 'feeble', def: 'tending to keep a firm hold of something; persistent' },
  { en: 'undaunted', tr: 'qorxmaz', wrong: 'qorxaq', wen: 'cowardly', def: 'not intimidated or discouraged, even in the face of difficulty' },
  { en: 'valour', tr: 'cəsarət', wrong: 'qorxaqlıq', wen: 'cowardice', def: 'great courage in the face of danger, especially in battle' },
  { en: 'versatility', tr: 'çoxqabiliyyətlilik', wrong: 'məhdudluq', wen: 'limitation', def: 'ability to adapt or be adapted to many different functions or activities' },
  { en: 'vigilant', tr: 'diqqətli', wrong: 'biganə', wen: 'indifferent', def: 'keeping careful watch for possible danger or difficulties' },
  { en: 'forthright', tr: 'açıq danışan', wrong: 'iküzlü', wen: 'duplicitous', def: 'direct and outspoken; straightforward and honest' }
],

// ─────────────────────── QUIZ 18 — Emotion & Psychological States (1) ───────────────────────
[
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc', wen: 'elation', def: 'severe mental or physical pain or suffering' },
  { en: 'apprehension', tr: 'narahatlıq', wrong: 'sakitlik', wen: 'composure', def: 'anxiety or fear that something bad or unpleasant will happen' },
  { en: 'bereavement', tr: 'itki', wrong: 'qazanc', wen: 'gain', def: 'the experience of losing a close relative or friend through death' },
  { en: 'chagrin', tr: 'məyusluq', wrong: 'sevinc', wen: 'delight', def: 'distress or embarrassment at having failed or been humiliated' },
  { en: 'consternation', tr: 'dəhşət', wrong: 'sevinc', wen: 'jubilation', def: 'a feeling of anxiety or dismay, typically at something unexpected' },
  { en: 'despondency', tr: 'ümidsizlik', wrong: 'ümid', wen: 'optimism', def: 'a state of low spirits caused by loss of hope or courage' },
  { en: 'disillusionment', tr: 'məyusluq', wrong: 'ilham', wen: 'inspiration', def: 'disappointment resulting from the discovery that something is not as good as one believed it to be' },
  { en: 'dismay', tr: 'narahatlıq', wrong: 'sevinc', wen: 'euphoria', def: 'a feeling of shock and disappointment' },
  { en: 'doldrums', tr: 'ruhi depressiya', wrong: 'xoşbəxtlik', wen: 'bliss', def: 'a state of stagnation, listlessness or low spirits' },
  { en: 'elation', tr: 'yüksək əhval', wrong: 'kədər', wen: 'gloom', def: 'great happiness and exhilaration' },
  { en: 'euphoria', tr: 'hədsiz sevinc', wrong: 'kədər', wen: 'despair', def: 'a feeling or state of intense excitement and happiness' },
  { en: 'exultation', tr: 'qələbə sevinci', wrong: 'məğlubiyyət', wen: 'defeat', def: 'a feeling of great elation or jubilation' },
  { en: 'forlorn', tr: 'tərk edilmiş', wrong: 'xoşbəxt', wen: 'joyful', def: 'pitifully sad and abandoned or lonely' },
  { en: 'frenzy', tr: 'dəli kimi həyəcan', wrong: 'sakitlik', wen: 'serenity', def: 'a state or period of uncontrolled excitement or wild behaviour' },
  { en: 'grief', tr: 'kədər', wrong: 'sevinc', wen: 'joy', def: 'intense sorrow, especially caused by someone’s death' },
  { en: 'hysteria', tr: 'histeriya', wrong: 'sakitlik', wen: 'calmness', def: 'exaggerated or uncontrollable emotion or excitement' },
  { en: 'indignation', tr: 'qəzəb', wrong: 'sakitlik', wen: 'equanimity', def: 'anger or annoyance provoked by what is perceived as unfair treatment' },
  { en: 'infatuation', tr: 'ehtiras', wrong: 'nifrət', wen: 'aversion', def: 'an intense but usually short-lived passion or admiration for someone or something' },
  { en: 'jubilation', tr: 'şadlıq', wrong: 'kədər', wen: 'sorrow', def: 'a feeling of great happiness and triumph' },
  { en: 'melancholy', tr: 'qəmginlik', wrong: 'sevinc', wen: 'elation', def: 'a feeling of pensive sadness, typically with no obvious cause' }
],

// ─────────────────────── QUIZ 19 — Emotion & Psychological States (2) ───────────────────────
[
  { en: 'misgiving', tr: 'şübhə', wrong: 'inam', wen: 'conviction', def: 'a feeling of doubt, apprehension or suspicion about the outcome of something' },
  { en: 'pang', tr: 'kəskin ağrı', wrong: 'rahatlıq', wen: 'ease', def: 'a sudden sharp feeling of physical or emotional pain' },
  { en: 'pique', tr: 'inciklik', wrong: 'sevinc', wen: 'delight', def: 'a feeling of irritation or resentment resulting from a slight or injury' },
  { en: 'rapture', tr: 'dərin zövq', wrong: 'kədər', wen: 'misery', def: 'a feeling of intense pleasure or joy' },
  { en: 'remorse', tr: 'vicdan əzabı', wrong: 'qürur', wen: 'pride', def: 'a gnawing distress arising from a sense of guilt for past wrongs' },
  { en: 'repugnance', tr: 'iyrənc', wrong: 'xoş', wen: 'delight', def: 'a strong feeling of distaste or aversion' },
  { en: 'reverie', tr: 'xəyal', wrong: 'reallıq', wen: 'reality', def: 'a state of being pleasantly lost in one’s thoughts; a daydream' },
  { en: 'trepidation', tr: 'qorxu', wrong: 'cəsarət', wen: 'boldness', def: 'a feeling of fear or anxiety about something that may happen' },
  { en: 'umbrage', tr: 'inciklik', wrong: 'razılıq', wen: 'satisfaction', def: 'a feeling of offence or annoyance' },
  { en: 'unease', tr: 'narahatlıq', wrong: 'rahatlıq', wen: 'ease', def: 'a feeling of anxiety or discomfort' },
  { en: 'vexation', tr: 'qıcıqlanma', wrong: 'sakitlik', wen: 'tranquility', def: 'the state of being annoyed, frustrated or worried' },
  { en: 'wistful', tr: 'həsrətli', wrong: 'məmnun', wen: 'contented', def: 'having or showing a feeling of vague or regretful longing' },
  { en: 'woe', tr: 'bədbəxtlik', wrong: 'xoşbəxtlik', wen: 'bliss', def: 'great sorrow or distress' },
  { en: 'yearning', tr: 'həsrət', wrong: 'biganəlik', wen: 'indifference', def: 'a feeling of intense longing for something' },
  { en: 'ennui', tr: 'darıxma', wrong: 'həyəcan', wen: 'excitement', def: 'a feeling of listless dissatisfaction arising from a lack of occupation or excitement' },
  { en: 'catharsis', tr: 'ruhi təmizlənmə', wrong: 'stress', wen: 'tension', def: 'the process of releasing, and thereby providing relief from, strong or repressed emotions' },
  { en: 'palpitation', tr: 'ürək döyüntüsü', wrong: 'sakitlik', wen: 'calmness', def: 'a noticeably rapid, strong or irregular heartbeat' },
  { en: 'delirium', tr: 'sayrışma', wrong: 'ağıl', wen: 'lucidity', def: 'a disturbed state of mind characterised by restlessness, illusions and incoherence' },
  { en: 'stupor', tr: 'keylik', wrong: 'canlılıq', wen: 'alertness', def: 'a state of near-unconsciousness or insensibility' },
  { en: 'mortifying', tr: 'utandırıcı', wrong: 'qürurverici', wen: 'gratifying', def: 'causing great embarrassment or humiliation' }
],

// ─────────────────────── QUIZ 20 — Weakness & Decline ───────────────────────
[
  { en: 'to abate', tr: 'zəifləmək', wrong: 'güclənmək', wen: 'intensify', def: 'to become less intense or severe; to subside' },
  { en: 'attrition', tr: 'zəifləmə', wrong: 'güclənmə', wen: 'strengthening', def: 'the process of reducing something’s strength or effectiveness through sustained attack or pressure' },
  { en: 'to debilitate', tr: 'zəiflətmək', wrong: 'gücləndirmək', wen: 'invigorate', def: 'to make someone or something weak and infirm' },
  { en: 'decrepit', tr: 'köhnəlmiş', wrong: 'yeni', wen: 'pristine', def: 'worn out or ruined because of age or neglect' },
  { en: 'defunct', tr: 'fəaliyyətsiz', wrong: 'aktiv', wen: 'operational', def: 'no longer existing or functioning' },
  { en: 'to deplete', tr: 'tükətmək', wrong: 'artırmaq', wen: 'replenish', def: 'to use up the supply or resources of something' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq', wen: 'increase', def: 'to diminish gradually in size, amount or strength' },
  { en: 'enervate', tr: 'zəiflətmək', wrong: 'gücləndirmək', wen: 'energise', def: 'to cause someone to feel drained of energy or vitality' },
  { en: 'entropy', tr: 'dağılma', wrong: 'qayda', wen: 'order', def: 'lack of order or predictability; gradual decline into disorder' },
  { en: 'to erode', tr: 'eroziyaya uğratmaq', wrong: 'möhkəmlətmək', wen: 'fortify', def: 'to gradually wear away or destroy something' },
  { en: 'feeble', tr: 'zəif', wrong: 'güclü', wen: 'robust', def: 'lacking physical strength, especially as a result of age or illness' },
  { en: 'to founder', tr: 'iflas etmək', wrong: 'uğur qazanmaq', wen: 'succeed', def: 'to fail or break down, as a plan or undertaking' },
  { en: 'impair', tr: 'zədələmək', wrong: 'yaxşılaşdırmaq', wen: 'enhance', def: 'to weaken or damage something, especially a faculty or function' },
  { en: 'inertia', tr: 'hərəkətsizlik', wrong: 'hərəkət', wen: 'momentum', def: 'a tendency to do nothing or to remain unchanged' },
  { en: 'lethargic', tr: 'tənbəl', wrong: 'enerjili', wen: 'vigorous', def: 'affected by lethargy; sluggish and apathetic' },
  { en: 'lethargy', tr: 'tənbəllik', wrong: 'enerji', wen: 'vigour', def: 'a lack of energy and enthusiasm' },
  { en: 'moribund', tr: 'ölüm ayağında', wrong: 'canlı', wen: 'flourishing', def: 'at the point of death; declining or coming to an end' },
  { en: 'to stagnate', tr: 'durğunlaşmaq', wrong: 'inkişaf etmək', wen: 'flourish', def: 'to cease developing; become inactive or dull' },
  { en: 'stagnant', tr: 'durğun', wrong: 'inkişaf edən', wen: 'dynamic', def: 'showing no activity; dull and sluggish' },
  { en: 'to wane', tr: 'zəifləmək', wrong: 'güclənmək', wen: 'wax', def: 'to decrease in size, strength or intensity' }
],
      // ─────────────────────── QUIZ 21 — Resistance & Stubbornness ───────────────────────
[
  { en: 'adamant', tr: 'sarsılmaz', wrong: 'qərarsız', wen: 'hesitant', def: 'refusing to be persuaded; obstinate and unyielding' },
  { en: 'to balk', tr: 'imtina etmək', wrong: 'razılaşmaq', wen: 'agree', def: 'to hesitate or refuse to accept something' },
  { en: 'contumacious', tr: 'itaətsiz', wrong: 'itaətkar', wen: 'obedient', def: 'stubbornly or wilfully disobedient to authority' },
  { en: 'dogged', tr: 'davamlı', wrong: 'təslimçi', wen: 'yielding', def: 'showing tenacity and grim persistence' },
  { en: 'implacable', tr: 'barışmaz', wrong: 'barışaq', wen: 'conciliatory', def: 'unable to be appeased or placated' },
  { en: 'indomitable', tr: 'məğlubedilməz', wrong: 'zəif', wen: 'feeble', def: 'impossible to subdue or defeat' },
  { en: 'intransigent', tr: 'güzəştə getməyən', wrong: 'güzəştə gedən', wen: 'flexible', def: 'unwilling or refusing to change one’s views or to agree about something' },
  { en: 'intransigence', tr: 'güzəştsizlik', wrong: 'güzəşt', wen: 'compromise', def: 'refusal to compromise or change one’s views' },
  { en: 'obdurate', tr: 'tərs', wrong: 'yumşaq', wen: 'malleable', def: 'stubbornly refusing to change one’s opinion or course of action' },
  { en: 'obstinate', tr: 'tərs', wrong: 'güzəştə getməyə hazır', wen: 'amenable', def: 'stubbornly refusing to change one’s opinion or chosen course of action' },
  { en: 'refractory', tr: 'itaətsiz', wrong: 'itaətkar', wen: 'compliant', def: 'stubborn or unmanageable' },
  { en: 'recalcitrant', tr: 'itaətsiz', wrong: 'itaətkar', wen: 'obedient', def: 'having an obstinately uncooperative attitude towards authority or discipline' },
  { en: 'recalcitrance', tr: 'itaətsizlik', wrong: 'itaət', wen: 'compliance', def: 'stubborn resistance to authority or control' },
  { en: 'relentless', tr: 'amansız', wrong: 'yumşaq', wen: 'lenient', def: 'unyielding in severity or strictness' },
  { en: 'reticent', tr: 'danıqmaz', wrong: 'açıq danışan', wen: 'forthright', def: 'not revealing one’s thoughts or feelings readily' },
  { en: 'restive', tr: 'narazı', wrong: 'razı', wen: 'content', def: 'unable to keep still or silent; fidgety' },
  { en: 'stalwart', tr: 'sadiq və möhkəm', wrong: 'zəif', wen: 'fickle', def: 'loyal, reliable and hardworking' },
  { en: 'steadfast', tr: 'sarsılmaz', wrong: 'dəyişkən', wen: 'fickle', def: 'loyal and unchanging in one’s opinions or affections' },
  { en: 'to withstand', tr: 'dözmək', wrong: 'təslim olmaq', wen: 'yield', def: 'to remain undamaged or unaffected by something' },
  { en: 'unyielding', tr: 'güzəştsiz', wrong: 'güzəştə gedən', wen: 'accommodating', def: 'not giving way to pressure; stubborn or inflexible' }
],

// ─────────────────────── QUIZ 22 — Disorder & Chaos ───────────────────────
[
  { en: 'anarchy', tr: 'anarxiya', wrong: 'nizam', wen: 'order', def: 'a state of disorder due to absence or non-recognition of authority' },
  { en: 'bedlam', tr: 'dəlilik', wrong: 'sakitlik', wen: 'tranquility', def: 'a scene of uproar and confusion' },
  { en: 'cacophony', tr: 'qulaqbatırıcı səs', wrong: 'harmoniya', wen: 'harmony', def: 'a harsh, discordant mixture of sounds' },
  { en: 'cataclysm', tr: 'böyük fəlakət', wrong: 'sakitlik', wen: 'serenity', def: 'a sudden violent upheaval or disaster' },
  { en: 'débâcle', tr: 'tam iflas', wrong: 'uğur', wen: 'triumph', def: 'a sudden and ignominious failure; a fiasco' },
  { en: 'havoc', tr: 'dağıntı', wrong: 'qayda', wen: 'order', def: 'widespread destruction or chaos' },
  { en: 'maelstrom', tr: 'qasırğa', wrong: 'sakit dəniz', wen: 'calm sea', def: 'a powerful whirlpool or violent upheaval' },
  { en: 'mayhem', tr: 'xaos', wrong: 'nizam', wen: 'order', def: 'violent or extreme disorder; chaos' },
  { en: 'pandemonium', tr: 'dəhşətli xaos', wrong: 'sakitlik', wen: 'serenity', def: 'wild and noisy disorder or confusion' },
  { en: 'ruckus', tr: 'səs-küy', wrong: 'sakitlik', wen: 'peace', def: 'a disturbance or commotion' },
  { en: 'shambles', tr: 'dağınıqlıq', wrong: 'qayda', wen: 'order', def: 'a state of total disorder or confusion' },
  { en: 'stampede', tr: 'panik qaçış', wrong: 'sakit hərəkət', wen: 'orderly movement', def: 'a sudden panicked rush of a large group of people or animals' },
  { en: 'tumult', tr: 'qarışıqlıq', wrong: 'sakitlik', wen: 'serenity', def: 'a loud, confused noise caused by a large group of people' },
  { en: 'turbulence', tr: 'turbulentlik', wrong: 'sakitlik', wen: 'calmness', def: 'a state of violent disturbance or agitation' },
  { en: 'uproar', tr: 'səs-küy', wrong: 'sakitlik', wen: 'quiet', def: 'a loud and impassioned noise or disturbance' },
  { en: 'upheaval', tr: 'çevriliş', wrong: 'sabitlik', wen: 'stability', def: 'a violent or sudden change or disruption' },
  { en: 'commotion', tr: 'həyəcan', wrong: 'sakitlik', wen: 'calm', def: 'a state of confused and noisy disturbance' },
  { en: 'disarray', tr: 'dağınıqlıq', wrong: 'qayda', wen: 'order', def: 'a state of disorganization or untidiness' },
  { en: 'melee', tr: 'qarışıq dava', wrong: 'sülh', wen: 'peace', def: 'a confused fight or scuffle involving many people' },
  { en: 'frenzy', tr: 'dəli həyəcan', wrong: 'sakitlik', wen: 'serenity', def: 'a state or period of uncontrolled excitement or wild behaviour' }
],

// ─────────────────────── QUIZ 23 — Language, Rhetoric & Literature (1) ───────────────────────
[
  { en: 'allegory', tr: 'alleqoriya', wrong: 'birbaşa məna', wen: 'literal meaning', def: 'a story, poem or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one' },
  { en: 'allusion', tr: 'işarə', wrong: 'birbaşa demə', wen: 'direct statement', def: 'an expression designed to call something to mind without mentioning it explicitly' },
  { en: 'anecdote', tr: 'qısa hekayə', wrong: 'roman', wen: 'novel', def: 'a short and amusing or interesting story about a real incident or person' },
  { en: 'aphorism', tr: 'aforizm', wrong: 'uzun mətn', wen: 'treatise', def: 'a concise statement of a general truth or principle' },
  { en: 'axiom', tr: 'aksiyom', wrong: 'fərziyyə', wen: 'hypothesis', def: 'a statement or proposition regarded as being self-evidently true' },
  { en: 'byword', tr: 'atasözü', wrong: 'qeyri-rəsmi', wen: 'slang', def: 'a person or thing cited as a notable or typical example of a quality' },
  { en: 'cadence', tr: 'ritm', wrong: 'qeyri-ritmik', wen: 'discord', def: 'a modulation or inflection of the voice' },
  { en: 'connotation', tr: 'əlavə məna', wrong: 'əsas məna', wen: 'denotation', def: 'an idea or feeling which a word invokes in addition to its literal meaning' },
  { en: 'epigram', tr: 'epigram', wrong: 'uzun şeir', wen: 'epic', def: 'a short and witty poem or saying' },
  { en: 'euphemism', tr: 'yumşaq ifadə', wrong: 'kobud ifadə', wen: 'blunt expression', def: 'a mild or indirect word or expression substituted for one considered too harsh or blunt' },
  { en: 'hyperbole', tr: 'həddindən artıq şişirtmə', wrong: 'həqiqət', wen: 'literal truth', def: 'exaggerated statements or claims not meant to be taken literally' },
  { en: 'innuendo', tr: 'gizli işarə', wrong: 'birbaşa demə', wen: 'explicit statement', def: 'an allusive or oblique remark or hint, typically a suggestive or disparaging one' },
  { en: 'jargon', tr: 'peşə termini', wrong: 'adi dil', wen: 'plain language', def: 'special words or expressions used by a particular profession or group' },
  { en: 'lexicon', tr: 'sözlük', wrong: 'cümlə', wen: 'sentence', def: 'the vocabulary of a language or branch of knowledge' },
  { en: 'maxim', tr: 'müdrik kəlam', wrong: 'axmaq söz', wen: 'nonsense', def: 'a short, pithy statement expressing a general truth or rule of conduct' },
  { en: 'metaphor', tr: 'metafora', wrong: 'birbaşa müqayisə', wen: 'simile', def: 'a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable' },
  { en: 'nomenclature', tr: 'terminologiya', wrong: 'adi ad', wen: 'common name', def: 'the devising or choosing of names for things, especially in a science or other discipline' },
  { en: 'oxymoron', tr: 'oksümoron', wrong: 'uyğun ifadə', wen: 'consistent expression', def: 'a figure of speech in which apparently contradictory terms appear in conjunction' },
  { en: 'parable', tr: 'məsəl', wrong: 'roman', wen: 'novel', def: 'a simple story used to illustrate a moral or spiritual lesson' },
  { en: 'parlance', tr: 'danışıq tərzi', wrong: 'rəsmi dil', wen: 'formal language', def: 'a particular way of speaking or using words, especially a way common to those with a particular job or interest' }
],
      
// ─────────────────────── QUIZ 24 — Language, Rhetoric & Literature (2) ───────────────────────
[
  { en: 'platitude', tr: 'banal ifadə', wrong: 'orijinal fikir', wen: 'original thought', def: 'a remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful' },
  { en: 'polemic', tr: 'kəskin mübahisə', wrong: 'razılıq', wen: 'concord', def: 'a strong verbal or written attack on someone or something' },
  { en: 'proverb', tr: 'atasözü', wrong: 'şeir', wen: 'poem', def: 'a short, well-known saying stating a general truth or piece of advice' },
  { en: 'rhetoric', tr: 'retorika', wrong: 'adi danışıq', wen: 'plain speech', def: 'the art of effective or persuasive speaking or writing' },
  { en: 'semantics', tr: 'semantika', wrong: 'qrammatika', wen: 'grammar', def: 'the branch of linguistics and logic concerned with meaning' },
  { en: 'simile', tr: 'oxşatma', wrong: 'metafora', wen: 'metaphor', def: 'a figure of speech involving the comparison of one thing with another thing of a different kind' },
  { en: 'soliloquy', tr: 'tək danışış', wrong: 'dialoq', wen: 'dialogue', def: 'an act of speaking one’s thoughts aloud when by oneself or regardless of any hearers' },
  { en: 'stanza', tr: 'bənd', wrong: 'bütün şeir', wen: 'entire poem', def: 'a group of lines forming the basic recurring metrical unit in a poem' },
  { en: 'synopsis', tr: 'qısa məzmun', wrong: 'tam mətn', wen: 'full text', def: 'a brief summary or general survey of something' },
  { en: 'tenet', tr: 'əsas prinsip', wrong: 'ikinci dərəcəli', wen: 'secondary principle', def: 'a principle or belief, especially one of the main principles of a religion or philosophy' },
  { en: 'terminology', tr: 'terminologiya', wrong: 'adi söz', wen: 'everyday word', def: 'the body of terms used with a particular technical application in a subject of study' },
  { en: 'tome', tr: 'qalın kitab', wrong: 'incə kitab', wen: 'slim volume', def: 'a large, heavy book' },
  { en: 'treatise', tr: 'elmi əsər', wrong: 'hekayə', wen: 'story', def: 'a written work dealing formally and systematically with a subject' },
  { en: 'truism', tr: 'aşkar həqiqət', wrong: 'şübhəli fikir', wen: 'dubious idea', def: 'a statement that is obviously true and says nothing new or interesting' },
  { en: 'verbatim', tr: 'hərfiyyən', wrong: 'tərcümə', wen: 'paraphrase', def: 'in exactly the same words as were used originally' },
  { en: 'vernacular', tr: 'xalq dili', wrong: 'rəsmi dil', wen: 'formal language', def: 'the language or dialect spoken by the ordinary people in a particular country or region' },
  { en: 'glossary', tr: 'sözlük', wrong: 'mətn', wen: 'text', def: 'an alphabetical list of terms or words found in or relating to a specific subject' },
  { en: 'adage', tr: 'müdrik kəlam', wrong: 'axmaq söz', wen: 'nonsensical saying', def: 'a proverb or short statement expressing a general truth' },
  { en: 'diatribe', tr: 'sərt hücum', wrong: 'tərif', wen: 'eulogy', def: 'a forceful and bitter verbal attack against someone or something' },
  { en: 'dissertation', tr: 'dissertasiya', wrong: 'qısa məqalə', wen: 'short article', def: 'a long essay on a particular subject, especially one written as a requirement for a university degree' }
],

// ─────────────────────── QUIZ 25 — Thought, Reasoning & Philosophy (1) ───────────────────────
[
  { en: 'abstraction', tr: 'abstraksiya', wrong: 'konkretlik', wen: 'concreteness', def: 'the quality of dealing with ideas rather than events or objects' },
  { en: 'ambiguity', tr: 'ikmənalılıq', wrong: 'aydınlıq', wen: 'clarity', def: 'the quality of being open to more than one interpretation' },
  { en: 'anachronism', tr: 'anaxronizm', wrong: 'zaman uyğunluğu', wen: 'chronological accuracy', def: 'a thing belonging or appropriate to a period other than that in which it exists' },
  { en: 'antithesis', tr: 'əkslik', wrong: 'oxşarlıq', wen: 'similarity', def: 'a person or thing that is the direct opposite of someone or something else' },
  { en: 'axiom', tr: 'aksiyom', wrong: 'fərziyyə', wen: 'hypothesis', def: 'a statement or proposition that is regarded as being established, accepted or self-evidently true' },
  { en: 'axiomatic', tr: 'öz-özünə aydın', wrong: 'şübhəli', wen: 'questionable', def: 'self-evident or unquestionable' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif', wen: 'weak', def: 'clear, logical and convincing' },
  { en: 'conjecture', tr: 'fərziyyə', wrong: 'sübut', wen: 'proof', def: 'an opinion or conclusion formed on the basis of incomplete information' },
  { en: 'dialectic', tr: 'dialektika', wrong: 'monoloq', wen: 'monologue', def: 'the art of arriving at the truth by the exchange of logical arguments' },
  { en: 'dichotomy', tr: 'ikili bölgü', wrong: 'vahidlik', wen: 'unity', def: 'a division or contrast between two things that are or are represented as being opposed or entirely different' },
  { en: 'dogma', tr: 'doqma', wrong: 'şübhə', wen: 'doubt', def: 'a principle or set of principles laid down by an authority as incontrovertibly true' },
  { en: 'enigma', tr: 'tapmaca', wrong: 'aydınlıq', wen: 'clarity', def: 'a person or thing that is mysterious or difficult to understand' },
  { en: 'epistemology', tr: 'epistemologiya', wrong: 'praktika', wen: 'praxis', def: 'the theory of knowledge, especially with regard to its methods, validity and scope' },
  { en: 'equivocal', tr: 'ikmənalı', wrong: 'aydın', wen: 'unambiguous', def: 'open to more than one interpretation; ambiguous' },
  { en: 'fallacy', tr: 'yanlış təsəvvür', wrong: 'həqiqət', wen: 'truth', def: 'a mistaken belief, especially one based on unsound argument' },
  { en: 'hypothesis', tr: 'hipotez', wrong: 'sübut', wen: 'proof', def: 'a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation' },
  { en: 'ideology', tr: 'ideologiya', wrong: 'praktika', wen: 'pragmatism', def: 'a system of ideas and ideals, especially one which forms the basis of economic or political theory and policy' },
  { en: 'inference', tr: 'nəticə çıxarma', wrong: 'fakt', wen: 'fact', def: 'a conclusion reached on the basis of evidence and reasoning' },
  { en: 'introspection', tr: 'özünüdərketmə', wrong: 'xarici müşahidə', wen: 'external observation', def: 'the examination or observation of one’s own mental and emotional processes' },
  { en: 'nihilism', tr: 'nihilizm', wrong: 'idealizm', wen: 'idealism', def: 'the rejection of all religious and moral principles, often in the belief that life is meaningless' }
],

// ─────────────────────── QUIZ 26 — Thought, Reasoning & Philosophy (2) ───────────────────────
[
  { en: 'paradigm', tr: 'paradigma', wrong: 'köhnə model', wen: 'outdated model', def: 'a typical example or pattern of something; a model' },
  { en: 'paradox', tr: 'paradoks', wrong: 'məntiqi nəticə', wen: 'logical conclusion', def: 'a statement or proposition that, despite sound reasoning from acceptable premises, leads to a conclusion that seems senseless, logically unacceptable or self-contradictory' },
  { en: 'pragmatism', tr: 'pragmatizm', wrong: 'idealizm', wen: 'idealism', def: 'a practical approach to problems and affairs' },
  { en: 'postulate', tr: 'postulat', wrong: 'şübhə', wen: 'doubt', def: 'a thing suggested or assumed as true as the basis for reasoning, discussion or belief' },
  { en: 'rationalism', tr: 'rasionalizm', wrong: 'emosionalizm', wen: 'emotionalism', def: 'the practice or principle of basing opinions and actions on reason and knowledge rather than on religious belief or emotional response' },
  { en: 'sophistry', tr: 'yalançı mühakimə', wrong: 'düzgün mühakimə', wen: 'sound reasoning', def: 'the use of clever but false arguments, especially with the intention of deceiving' },
  { en: 'syllogism', tr: 'sillogizm', wrong: 'qeyri-məntiqi', wen: 'fallacy', def: 'a form of deductive reasoning in which a conclusion is drawn from two premises' },
  { en: 'synthesis', tr: 'sintez', wrong: 'ayrılma', wen: 'analysis', def: 'the combination of ideas to form a theory or system' },
  { en: 'tenet', tr: 'əsas prinsip', wrong: 'ikinci dərəcəli', wen: 'secondary principle', def: 'a principle or belief, especially one of the main principles of a religion or philosophy' },
  { en: 'theorem', tr: 'teorem', wrong: 'fərziyyə', wen: 'conjecture', def: 'a general proposition not self-evident but proved by a chain of reasoning' },
  { en: 'utilitarianism', tr: 'utilitarizm', wrong: 'idealizm', wen: 'idealism', def: 'the doctrine that actions are right if they are useful or for the benefit of a majority' },
  { en: 'utopianism', tr: 'utopiya', wrong: 'realizm', wen: 'realism', def: 'the belief in or pursuit of a perfect or ideal society' },
  { en: 'empiricism', tr: 'empirizm', wrong: 'spekulyasiya', wen: 'speculation', def: 'the theory that all knowledge is derived from sense-experience' },
  { en: 'ontology', tr: 'ontologiya', wrong: 'praktika', wen: 'praxis', def: 'the branch of metaphysics dealing with the nature of being' },
  { en: 'relativism', tr: 'relativizm', wrong: 'absolyutizm', wen: 'absolutism', def: 'the doctrine that knowledge, truth and morality exist in relation to culture, society or historical context' },
  { en: 'scepticism', tr: 'skeptisizm', wrong: 'inam', wen: 'faith', def: 'a sceptical attitude; doubt as to the truth of something' },
  { en: 'stoicism', tr: 'stoitsizm', wrong: 'emosionalizm', wen: 'emotionalism', def: 'the endurance of pain or hardship without the display of feelings and without complaint' },
  { en: 'subjectivism', tr: 'subyektivizm', wrong: 'obyektivizm', wen: 'objectivism', def: 'the doctrine that knowledge is merely subjective and that there is no external or objective truth' },
  { en: 'fatalism', tr: 'fatalizm', wrong: 'azad iradə', wen: 'free will', def: 'the belief that all events are predetermined and therefore inevitable' },
  { en: 'materialism', tr: 'materializm', wrong: 'idealizm', wen: 'idealism', def: 'the doctrine that nothing exists except matter and its movements and modifications' }
],

// ─────────────────────── QUIZ 27 — Social Status & Class ───────────────────────
[
  { en: 'bourgeoisie', tr: 'burjuaziya', wrong: 'proletariat', wen: 'proletariat', def: 'the middle class, typically with reference to its perceived materialistic values or conventional attitudes' },
  { en: 'caste', tr: 'kasta', wrong: 'bərabərlik', wen: 'equality', def: 'a hereditary class of people in a society, distinguished by relative degrees of ritual purity or pollution' },
  { en: 'chattel', tr: 'əmlak kimi qul', wrong: 'azad insan', wen: 'freeman', def: 'a person who is treated as property and can be bought and sold' },
  { en: 'clique', tr: 'qrup', wrong: 'açıq cəmiyyət', wen: 'open society', def: 'a small group of people who spend time together and do not readily allow others to join them' },
  { en: 'compatriot', tr: 'vətəndaş yoldaşı', wrong: 'əcnəbi', wen: 'foreigner', def: 'a person from the same country as someone else' },
  { en: 'cosmopolitan', tr: 'kosmopolit', wrong: 'millətçi', wen: 'nationalist', def: 'familiar with and at ease in many different countries and cultures' },
  { en: 'diaspora', tr: 'diaspora', wrong: 'vətəndə yaşayanlar', wen: 'indigenous population', def: 'the dispersion of a people from their original homeland' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'demokratiya', wen: 'republic', def: 'a line of hereditary rulers of a country' },
  { en: 'enclave', tr: 'ərazi qrupu', wrong: 'açıq ərazi', wen: 'open territory', def: 'a portion of territory within or surrounded by a larger territory whose inhabitants are culturally or ethnically distinct' },
  { en: 'entourage', tr: 'ətraf', wrong: 'tək', wen: 'solitary', def: 'a group of people attending or surrounding an important person' },
  { en: 'gentry', tr: 'zadəganlar', wrong: 'kasıblar', wen: 'the poor', def: 'people of good social position, specifically the class just below the nobility' },
  { en: 'intelligentsia', tr: 'intelligensiya', wrong: 'sadə xalq', wen: 'the masses', def: 'intellectuals or highly educated people as a group, especially when regarded as possessing culture and political influence' },
  { en: 'lineage', tr: 'nəsil', wrong: 'qohumsuzluq', wen: 'rootlessness', def: 'direct descent from an ancestor; ancestry or pedigree' },
  { en: 'meritocracy', tr: 'ləyaqət sistemi', wrong: 'qohumbazlıq', wen: 'nepotism', def: 'a society or system in which people are advanced according to their abilities and achievements' },
  { en: 'pariah', tr: 'kənarlaşdırılmış', wrong: 'mərkəzdə olan', wen: 'insider', def: 'a person who is rejected or despised by others' },
  { en: 'patrician', tr: 'zadəgan', wrong: 'sadə vətəndaş', wen: 'commoner', def: 'a person of noble or high rank; an aristocrat' },
  { en: 'pedigree', tr: 'nəcabət', wrong: 'adi mənşə', wen: 'humble origin', def: 'the record of descent or ancestry of a person, family or group' },
  { en: 'populace', tr: 'xalq kütləsi', wrong: 'elit', wen: 'elite', def: 'the people living in a particular country or area' },
  { en: 'proletariat', tr: 'proletariat', wrong: 'burjuaziya', wen: 'bourgeoisie', def: 'the lowest class of citizens in ancient Rome or the working class in modern society' },
  { en: 'serfdom', tr: 'təhkimçilik', wrong: 'azadlıq', wen: 'freedom', def: 'the state of being a serf or the condition of serfdom' }
],

// ─────────────────────── QUIZ 28 — Wealth, Greed & Poverty ───────────────────────
[
  { en: 'avarice', tr: 'tamahkarlıq', wrong: 'səxavət', wen: 'generosity', def: 'extreme greed for wealth or material gain' },
  { en: 'bounty', tr: 'bolluq', wrong: 'yoxsulluq', wen: 'penury', def: 'generosity in giving; a generous gift' },
  { en: 'cupidity', tr: 'tamah', wrong: 'qənaət', wen: 'frugality', def: 'greed for money or possessions' },
  { en: 'destitute', tr: 'kasıb', wrong: 'varlı', wen: 'affluent', def: 'extremely poor and without the basic necessities of life' },
  { en: 'frugal', tr: 'qənaətcil', wrong: 'israfçı', wen: 'prodigal', def: 'sparing or economical with regard to money or food' },
  { en: 'indigent', tr: 'yoxsul', wrong: 'varlı', wen: 'wealthy', def: 'poor; needy' },
  { en: 'largesse', tr: 'səxavət', wrong: 'cimrilik', wen: 'miserliness', def: 'generosity in bestowing gifts or money' },
  { en: 'meagre', tr: 'az', wrong: 'bol', wen: 'abundant', def: 'lacking in quantity or quality; deficient' },
  { en: 'miserly', tr: 'cimri', wrong: 'səxavətli', wen: 'generous', def: 'of or characteristic of a miser; mean and ungenerous' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri', wen: 'stingy', def: 'larger or more generous than is usual or necessary' },
  { en: 'opulence', tr: 'zənginlik', wrong: 'yoxsulluq', wen: 'poverty', def: 'great wealth or luxuriousness' },
  { en: 'opulent', tr: 'zəngin', wrong: 'kasıb', wen: 'impoverished', def: 'ostentatiously costly and luxurious' },
  { en: 'parsimonious', tr: 'qənaətcil', wrong: 'israfçı', wen: 'extravagant', def: 'very unwilling to spend money or use resources; stingy' },
  { en: 'parsimony', tr: 'cimrilik', wrong: 'səxavət', wen: 'generosity', def: 'extreme unwillingness to spend money or use resources' },
  { en: 'paucity', tr: 'çatışmazlıq', wrong: 'bolluq', wen: 'abundance', def: 'the presence of something only in small or insufficient quantities or amounts' },
  { en: 'penury', tr: 'yoxsulluq', wrong: 'var-dövlət', wen: 'opulence', def: 'extreme poverty or destitution' },
  { en: 'pittance', tr: 'cüzi məbləğ', wrong: 'böyük məbləğ', wen: 'fortune', def: 'a very small or inadequate amount of money' },
  { en: 'plunder', tr: 'talamaq', wrong: 'vermək', wen: 'bestow', def: 'to steal goods from a place, especially during a time of war or civil disorder' },
  { en: 'rapacious', tr: 'tamahkar', wrong: 'səxavətli', wen: 'generous', def: 'aggressively greedy or grasping' },
  { en: 'squander', tr: 'israf etmək', wrong: 'qənaət etmək', wen: 'economise', def: 'to waste something, especially money or time, in a reckless and foolish manner' }
],

// ─────────────────────── QUIZ 29 — Religion, Belief & Ritual (1) ───────────────────────
[
  { en: 'apostle', tr: 'həvari', wrong: 'düşmən', wen: 'adversary', def: 'a fervent and influential supporter or proponent of a cause or idea' },
  { en: 'blasphemy', tr: 'küfr', wrong: 'ibadət', wen: 'worship', def: 'the action or offence of speaking sacrilegiously about God or sacred things' },
  { en: 'consecration', tr: 'müqəddəsləşdirmə', wrong: 'müqəddəsliyi pozma', wen: 'desecration', def: 'the action of declaring something holy and setting it apart for sacred use' },
  { en: 'creed', tr: 'etikad', wrong: 'şübhə', wen: 'doubt', def: 'a system of religious belief; a faith' },
  { en: 'deity', tr: 'ilahə', wrong: 'adi insan', wen: 'mortal', def: 'a god or goddess' },
  { en: 'disciple', tr: 'şagird', wrong: 'rəhbər', wen: 'mentor', def: 'a follower or pupil of a teacher, leader or philosopher' },
  { en: 'divination', tr: 'falçılıq', wrong: 'elmi proqnoz', wen: 'scientific prediction', def: 'the practice of seeking knowledge of the future or the unknown by supernatural means' },
  { en: 'dogma', tr: 'doqma', wrong: 'şübhə', wen: 'doubt', def: 'a principle or set of principles laid down by an authority as incontrovertibly true' },
  { en: 'heresy', tr: 'bidət', wrong: 'əsas inanc', wen: 'orthodoxy', def: 'belief or opinion contrary to orthodox religious doctrine' },
  { en: 'heretical', tr: 'bidətçi', wrong: 'dindar', wen: 'pious', def: 'believing in or practising religious heresy' },
  { en: 'iconoclasm', tr: 'ikon qırıcı', wrong: 'hörmət', wen: 'veneration', def: 'the action of attacking or rejecting cherished beliefs and institutions' },
  { en: 'invocation', tr: 'çağırış', wrong: 'sükut', wen: 'silence', def: 'the action of invoking something or someone for assistance or as an authority' },
  { en: 'liturgy', tr: 'ibadət ayini', wrong: 'adi mərasim', wen: 'secular ceremony', def: 'a form or formulary for public worship in a church or other religious group' },
  { en: 'martyrdom', tr: 'şəhidlik', wrong: 'qorxaqlıq', wen: 'cowardice', def: 'the death or suffering of a martyr' },
  { en: 'messiah', tr: 'məsih', wrong: 'adi insan', wen: 'ordinary person', def: 'a saviour or liberator of a people' },
  { en: 'oracle', tr: 'kahin', wrong: 'adi danışan', wen: 'ordinary speaker', def: 'a person or thing regarded as an infallible authority or guide' },
  { en: 'piety', tr: 'dindarlıq', wrong: 'dinsizlik', wen: 'impiety', def: 'the quality of being religious or reverent' },
  { en: 'pious', tr: 'dindar', wrong: 'dinsiz', wen: 'irreligious', def: 'devoutly religious' },
  { en: 'prophecy', tr: 'peyğəmbərlik', wrong: 'yalan', wen: 'falsehood', def: 'a prediction of what will happen in the future' },
  { en: 'sacrilege', tr: 'müqəddəsliyə hörmətsizlik', wrong: 'hörmət', wen: 'reverence', def: 'the violation or profanation of something regarded as sacred' }
],

// ─────────────────────── QUIZ 30 — Religion, Belief & Ritual (2) ───────────────────────
[
  { en: 'sacrosanct', tr: 'müqəddəs', wrong: 'adi', wen: 'profane', def: 'regarded as too important or valuable to be interfered with' },
  { en: 'sainthood', tr: 'müqəddəslik', wrong: 'günahkarlıq', wen: 'sinfulness', def: 'the status or condition of being a saint' },
  { en: 'salvation', tr: 'xilas', wrong: 'cəhənnəm', wen: 'damnation', def: 'deliverance from sin and its consequences, believed by Christians to be brought about by faith in Christ' },
  { en: 'sanctity', tr: 'müqəddəslik', wrong: 'adi', wen: 'mundanity', def: 'the state or quality of being holy, sacred or saintly' },
  { en: 'sanctuary', tr: 'sığınacaq', wrong: 'təhlükə', wen: 'peril', def: 'a place of refuge or safety' },
  { en: 'shrine', tr: 'ziyarətgah', wrong: 'adi yer', wen: 'ordinary place', def: 'a place regarded as holy because of its associations with a divinity or a sacred person or object' },
  { en: 'to abjure', tr: 'imtina etmək', wrong: 'qəbul etmək', wen: 'embrace', def: 'to solemnly renounce a belief, claim or allegiance' },
  { en: 'to genuflect', tr: 'dizi üstə çökmək', wrong: 'dik durmaq', wen: 'stand erect', def: 'to lower one’s body briefly by bending one knee to the ground, typically in worship or as a sign of respect' },
  { en: 'to consecrate', tr: 'müqəddəsləşdirmək', wrong: 'müqəddəsliyi pozmaq', wen: 'desecrate', def: 'to make or declare something holy; to dedicate formally to a religious purpose' },
  { en: 'tithe', tr: 'on faiz', wrong: 'bütün var-dövlət', wen: 'entire fortune', def: 'a tenth of annual produce or earnings, formerly taken as a tax for the support of the Church and clergy' },
  { en: 'talisman', tr: 'talisman', wrong: 'adi əşya', wen: 'mundane object', def: 'an object, typically an inscribed ring or stone, that is thought to have magic powers and to bring good luck' },
  { en: 'totem', tr: 'totem', wrong: 'adi simvol', wen: 'ordinary symbol', def: 'a natural object or animal that is believed by a particular society to have spiritual significance' },
  { en: 'veneration', tr: 'hörmət', wrong: 'nifrət', wen: 'contempt', def: 'great respect; reverence' },
  { en: 'to revere', tr: 'hörmət etmək', wrong: 'nifrət etmək', wen: 'despise', def: 'to feel deep respect or admiration for someone or something' },
  { en: 'resurrection', tr: 'dirilmə', wrong: 'ölüm', wen: 'demise', def: 'the action or fact of resurrecting or being resurrected' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik', wen: 'unity', def: 'a split or division between strongly opposed parties caused by differences in opinion or belief' },
  { en: 'theology', tr: 'ilahiyyat', wrong: 'elmi', wen: 'science', def: 'the study of the nature of God and religious belief' },
  { en: 'rite', tr: 'ayin', wrong: 'adi hərəkət', wen: 'mundane action', def: 'a religious or other solemn ceremony or act' },
  { en: 'creed', tr: 'etikad', wrong: 'şübhə', wen: 'scepticism', def: 'a system of religious belief; a faith' },
  { en: 'zealotry', tr: 'fanatizm', wrong: 'laqeydlik', wen: 'indifference', def: 'fanatical and uncompromising pursuit of religious, political or other ideals' }
],
      // ─────────────────────── QUIZ 31 — Ambition, Success & Failure (1) ───────────────────────
[
  { en: 'acumen', tr: 'iti ağıl', wrong: 'küt ağıl', wen: 'obtuseness', def: 'the ability to make good judgements and quick decisions, typically in a particular domain' },
  { en: 'aplomb', tr: 'özünə inam', wrong: 'qorxu', wen: 'apprehension', def: 'self-confidence or assurance, especially when in a demanding situation' },
  { en: 'aptitude', tr: 'qabiliyyət', wrong: 'bacarıqsızlıq', wen: 'inaptitude', def: 'a natural ability to do something' },
  { en: 'audacity', tr: 'cəsarət', wrong: 'qorxaqlıq', wen: 'timidity', def: 'the quality of being daring or fearless; boldness' },
  { en: 'to burgeon', tr: 'çiçəklənmək', wrong: 'solmaq', wen: 'wither', def: 'to begin to grow or develop rapidly; flourish' },
  { en: 'to culminate', tr: 'zirvəyə çatmaq', wrong: 'uğursuzluqla bitmək', wen: 'end in failure', def: 'to reach a climax or point of highest development' },
  { en: 'daunting', tr: 'qorxuducu', wrong: 'asan', wen: 'straightforward', def: 'seeming difficult or frightening; discouraging' },
  { en: 'to excel', tr: 'üstün olmaq', wrong: 'geridə qalmaq', wen: 'lag behind', def: 'to be exceptionally good at or proficient in an activity or subject' },
  { en: 'expedition', tr: 'sürətli irəliləyiş', wrong: 'ləngimə', wen: 'delay', def: 'a journey or voyage undertaken for a particular purpose' },
  { en: 'to flourish', tr: 'inkişaf etmək', wrong: 'tənəzzül etmək', wen: 'decline', def: 'to grow or develop in a healthy or vigorous way' },
  { en: 'formidable', tr: 'təsirli', wrong: 'zəif', wen: 'feeble', def: 'inspiring fear or respect through being impressively large, powerful, intense or capable' },
  { en: 'fruition', tr: 'nəticə', wrong: 'uğursuzluq', wen: 'failure', def: 'the realization or fulfilment of a plan or project' },
  { en: 'to galvanise', tr: 'hərəkətə keçirmək', wrong: 'saxlamaq', wen: 'inhibit', def: 'to shock or excite someone into taking action' },
  { en: 'ingenuity', tr: 'zirəklik', wrong: 'sadəlik', wen: 'simplicity', def: 'the quality of being clever, original and inventive' },
  { en: 'to persevere', tr: 'davam etmək', wrong: 'təslim olmaq', wen: 'capitulate', def: 'to continue in a course of action even in the face of difficulty or with little or no prospect of success' },
  { en: 'pinnacle', tr: 'zirvə', wrong: 'dib', wen: 'nadir', def: 'the most successful point; the culmination' },
  { en: 'pioneering', tr: 'öncüllük', wrong: 'gerilik', wen: 'backwardness', def: 'involving new ideas or methods; innovative' },
  { en: 'prodigious', tr: 'heyrətamiz', wrong: 'adi', wen: 'ordinary', def: 'remarkably or impressively great in extent, size or degree' },
  { en: 'to surmount', tr: 'qalib gəlmək', wrong: 'məğlub olmaq', wen: 'succumb', def: 'to overcome a difficulty or obstacle' },
  { en: 'zenith', tr: 'zirvə', wrong: 'dib', wen: 'nadir', def: 'the time at which something is most powerful or successful' }
],

// ─────────────────────── QUIZ 32 — Ambition, Success & Failure (2) ───────────────────────
[
  { en: 'debacle', tr: 'tam iflas', wrong: 'uğur', wen: 'triumph', def: 'a sudden and ignominious failure; a fiasco' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq', wen: 'increase', def: 'to diminish gradually in size, amount or strength' },
  { en: 'to falter', tr: 'səndələmək', wrong: 'qətiyyətli olmaq', wen: 'be resolute', def: 'to lose strength or momentum; to hesitate or waver' },
  { en: 'fiasco', tr: 'böyük uğursuzluq', wrong: 'uğur', wen: 'success', def: 'a complete and ignominious failure' },
  { en: 'folly', tr: 'axmaqlıq', wrong: 'ağıllılıq', wen: 'wisdom', def: 'lack of good sense; foolishness' },
  { en: 'to founder', tr: 'iflas etmək', wrong: 'uğur qazanmaq', wen: 'succeed', def: 'to fail or break down, as a plan or undertaking' },
  { en: 'futile', tr: 'boş', wrong: 'faydalı', wen: 'beneficial', def: 'incapable of producing any useful result; pointless' },
  { en: 'futility', tr: 'boşluq', wrong: 'fayda', wen: 'usefulness', def: 'pointlessness or uselessness' },
  { en: 'hapless', tr: 'bədbəxt', wrong: 'xoşbəxt', wen: 'fortunate', def: 'unfortunate; unlucky' },
  { en: 'impediment', tr: 'maneə', wrong: 'kömək', wen: 'aid', def: 'a hindrance or obstruction in doing something' },
  { en: 'inadequacy', tr: 'çatışmazlıq', wrong: 'kifayətlik', wen: 'sufficiency', def: 'the state or quality of being inadequate; insufficiency' },
  { en: 'ineptitude', tr: 'bacarıqsızlıq', wrong: 'bacarıq', wen: 'proficiency', def: 'lack of skill or ability' },
  { en: 'nadir', tr: 'ən aşağı nöqtə', wrong: 'zirvə', wen: 'zenith', def: 'the lowest or most unsuccessful point in a situation' },
  { en: 'pitfall', tr: 'tələ', wrong: 'uğur yolu', wen: 'path to success', def: 'a hidden or unsuspected danger or difficulty' },
  { en: 'quagmire', tr: 'çətin vəziyyət', wrong: 'asan yol', wen: 'easy path', def: 'a difficult, precarious or entrapping situation' },
  { en: 'recklessness', tr: 'ehtiyatsızlıq', wrong: 'ehtiyatlılıq', wen: 'caution', def: 'lack of care or caution in doing something' },
  { en: 'to squander', tr: 'israf etmək', wrong: 'qənaət etmək', wen: 'economise', def: 'to waste something, especially money or time, in a reckless and foolish manner' },
  { en: 'to succumb', tr: 'məğlub olmaq', wrong: 'qalib gəlmək', wen: 'prevail', def: 'to fail to resist pressure, temptation or some other negative force' },
  { en: 'undoing', tr: 'məhv', wrong: 'qurtuluş', wen: 'salvation', def: 'a person’s ruin or downfall' },
  { en: 'ruination', tr: 'dağıntı', wrong: 'qurma', wen: 'construction', def: 'the action or fact of ruining someone or something' }
],

// ─────────────────────── QUIZ 33 — Deference, Submission & Servility ───────────────────────
[
  { en: 'acquiescence', tr: 'razılaşma', wrong: 'etiraz', wen: 'objection', def: 'the reluctant acceptance of something without protest' },
  { en: 'to acquiesce', tr: 'razılaşmaq', wrong: 'etiraz etmək', wen: 'protest', def: 'to accept something reluctantly but without protest' },
  { en: 'to appease', tr: 'sakitləşdirmək', wrong: 'qızışdırmaq', wen: 'provoke', def: 'to make someone less angry or hostile by agreeing to their demands' },
  { en: 'to capitulate', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək', wen: 'resist', def: 'to cease to resist an opponent or an unwelcome demand; surrender' },
  { en: 'complicity', tr: 'gizli iştirak', wrong: 'müqavimət', wen: 'resistance', def: 'involvement with others in an illegal activity or plan' },
  { en: 'to condescend', tr: 'yuxarıdan baxmaq', wrong: 'bərabər davranmaq', wen: 'treat as equal', def: 'to show feelings of superiority; to patronise' },
  { en: 'deference', tr: 'hörmət', wrong: 'hörmətsizlik', wen: 'disrespect', def: 'polite submission and respect' },
  { en: 'to defer', tr: 'hörmət etmək', wrong: 'etiraz etmək', wen: 'challenge', def: 'to submit to the opinion or wishes of another' },
  { en: 'to grovel', tr: 'yaltaqlanmaq', wrong: 'ləyaqətli olmaq', wen: 'be dignified', def: 'to act in an obsequious manner in order to obtain forgiveness or favour' },
  { en: 'obsequious', tr: 'yaltaq', wrong: 'ləyaqətli', wen: 'dignified', def: 'excessively eager to please or obey' },
  { en: 'servile', tr: 'qul kimi', wrong: 'ləyaqətli', wen: 'dignified', def: 'having or showing an excessive willingness to serve or please others' },
  { en: 'servility', tr: 'qulluq', wrong: 'ləyaqət', wen: 'dignity', def: 'excessive willingness to serve or please others' },
  { en: 'servitude', tr: 'qulluq', wrong: 'azadlıq', wen: 'liberty', def: 'the state of being a slave or completely subject to someone more powerful' },
  { en: 'subservience', tr: 'tabesizlik', wrong: 'müstəqillik', wen: 'independence', def: 'willingness to do what other people want or to behave in a way that pleases them' },
  { en: 'subordinate', tr: 'tabe', wrong: 'rəhbər', wen: 'superior', def: 'a person under the authority or control of another within an organization' },
  { en: 'subordination', tr: 'tabesizlik', wrong: 'bərabərlik', wen: 'equality', def: 'the act or state of being placed in a lower rank or position' },
  { en: 'to succumb', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək', wen: 'resist', def: 'to fail to resist an attack, pressure or temptation' },
  { en: 'sycophancy', tr: 'yaltaqlıq', wrong: 'dürüstlük', wen: 'candour', def: 'the action of flattering people in power in order to gain advantage' },
  { en: 'sycophant', tr: 'yaltaq', wrong: 'dürüst adam', wen: 'candid person', def: 'a person who acts obsequiously towards someone important in order to gain advantage' },
  { en: 'to yield', tr: 'güzəştə getmək', wrong: 'müqavimət göstərmək', wen: 'resist', def: 'to give way to arguments, demands or pressure' }
],

// ─────────────────────── QUIZ 34 — Time, Change & Impermanence ───────────────────────
[
  { en: 'anachronism', tr: 'zaman uyğunsuzluğu', wrong: 'zaman uyğunluğu', wen: 'chronological accuracy', def: 'a thing belonging or appropriate to a period other than that in which it exists' },
  { en: 'antiquated', tr: 'köhnəlmiş', wrong: 'müasir', wen: 'modern', def: 'old-fashioned or outdated' },
  { en: 'antiquity', tr: 'qədimlik', wrong: 'müasirlik', wen: 'modernity', def: 'the ancient past, especially the period before the Middle Ages' },
  { en: 'archaic', tr: 'qədim', wrong: 'müasir', wen: 'contemporary', def: 'belonging to an earlier period; very old-fashioned' },
  { en: 'to burgeon', tr: 'inkişaf etmək', wrong: 'tənəzzül etmək', wen: 'decline', def: 'to begin to grow or develop rapidly; flourish' },
  { en: 'cessation', tr: 'dayanma', wrong: 'davam', wen: 'continuation', def: 'the fact or process of ending or being brought to an end' },
  { en: 'to dwindle', tr: 'azalmaq', wrong: 'artmaq', wen: 'increase', def: 'to diminish gradually in size, amount or strength' },
  { en: 'ephemeral', tr: 'qısaömürlü', wrong: 'davamlı', wen: 'enduring', def: 'lasting for a very short time' },
  { en: 'evanescent', tr: 'tez keçən', wrong: 'davamlı', wen: 'lasting', def: 'soon passing out of sight, memory or existence; quickly fading' },
  { en: 'fleeting', tr: 'keçici', wrong: 'davamlı', wen: 'permanent', def: 'lasting for a very short time' },
  { en: 'flux', tr: 'dəyişiklik', wrong: 'sabitlik', wen: 'stability', def: 'continuous change or movement' },
  { en: 'hiatus', tr: 'fasilə', wrong: 'davamlılıq', wen: 'continuity', def: 'a pause or gap in a sequence, series or process' },
  { en: 'inception', tr: 'başlanğıc', wrong: 'son', wen: 'conclusion', def: 'the establishment or starting point of an institution or activity' },
  { en: 'moratorium', tr: 'müvəqqəti dayandırma', wrong: 'davam', wen: 'continuation', def: 'a temporary prohibition of an activity' },
  { en: 'nascent', tr: 'yeni yaranan', wrong: 'köhnə', wen: 'established', def: 'just coming into existence and beginning to display signs of future potential' },
  { en: 'obsolescence', tr: 'köhnəlmə', wrong: 'yenilik', wen: 'innovation', def: 'the process of becoming obsolete or outdated' },
  { en: 'obsolete', tr: 'köhnəlmiş', wrong: 'müasir', wen: 'current', def: 'no longer produced or used; out of date' },
  { en: 'perennial', tr: 'davamlı', wrong: 'qısaömürlü', wen: 'transient', def: 'lasting or existing for a long or apparently infinite time' },
  { en: 'renaissance', tr: 'dirçəliş', wrong: 'tənəzzül', wen: 'decline', def: 'a revival of or renewed interest in something' },
  { en: 'transient', tr: 'keçici', wrong: 'davamlı', wen: 'enduring', def: 'lasting only for a short time; impermanent' }
],

// ─────────────────────── QUIZ 35 — Nature & Geography ───────────────────────
[
  { en: 'archipelago', tr: 'ada qrupu', wrong: 'qitə', wen: 'continent', def: 'a group of islands' },
  { en: 'abyss', tr: 'uçurum', wrong: 'təpə', wen: 'hill', def: 'a deep or seemingly bottomless chasm' },
  { en: 'chasm', tr: 'yarğan', wrong: 'təpə', wen: 'knoll', def: 'a deep fissure in the earth, rock or another surface' },
  { en: 'crevasse', tr: 'buz çatlağı', wrong: 'düzənlik', wen: 'plain', def: 'a deep open crack, especially one in a glacier' },
  { en: 'delta', tr: 'çay mənsəbi', wrong: 'mənbə', wen: 'source', def: 'a triangular tract of sediment deposited at the mouth of a river' },
  { en: 'escarpment', tr: 'dik qaya', wrong: 'düzənlik', wen: 'plain', def: 'a long, steep slope, especially one at the edge of a plateau or separating areas of land' },
  { en: 'fauna', tr: 'heyvanlar aləmi', wrong: 'bitkilər aləmi', wen: 'flora', def: 'the animals of a particular region, habitat or geological period' },
  { en: 'flora', tr: 'bitkilər aləmi', wrong: 'heyvanlar aləmi', wen: 'fauna', def: 'the plants of a particular region, habitat or geological period' },
  { en: 'hinterland', tr: 'daxili ərazi', wrong: 'sahil', wen: 'coast', def: 'the remote areas of a country away from the coast or the banks of major rivers' },
  { en: 'knoll', tr: 'təpəcik', wrong: 'uçurum', wen: 'precipice', def: 'a small hill or mound' },
  { en: 'ravine', tr: 'dərə', wrong: 'dağ', wen: 'mountain', def: 'a deep, narrow gorge with steep sides' },
  { en: 'tundra', tr: 'tundra', wrong: 'səhra', wen: 'desert', def: 'a vast, flat, treeless Arctic region where the subsoil is permanently frozen' },
  { en: 'wasteland', tr: 'səhra', wrong: 'məhsuldar torpaq', wen: 'fertile land', def: 'an unused area of land that has become barren or overgrown' },
  { en: 'wilderness', tr: 'vəhşi təbiət', wrong: 'şəhər', wen: 'metropolis', def: 'an uncultivated, uninhabited and inhospitable region' },
  { en: 'typhoon', tr: 'tayfun', wrong: 'sakit hava', wen: 'calm weather', def: 'a tropical storm in the region of the Indian or western Pacific oceans' },
  { en: 'tornado', tr: 'tornado', wrong: 'sakit hava', wen: 'calm weather', def: 'a violently rotating column of air extending from a thunderstorm to the ground' },
  { en: 'tributary', tr: 'çay qolu', wrong: 'əsas çay', wen: 'main river', def: 'a river or stream flowing into a larger river or lake' },
  { en: 'sediment', tr: 'çökmə', wrong: 'təmiz su', wen: 'clear water', def: 'matter that settles to the bottom of a liquid' },
  { en: 'topography', tr: 'topoqrafiya', wrong: 'düzənlik', wen: 'flat terrain', def: 'the arrangement of the natural and artificial physical features of an area' }
],

// ─────────────────────── QUIZ 36 — War, Military & Strategy (1) ───────────────────────
[
  { en: 'armistice', tr: 'atəşkəs', wrong: 'müharibə', wen: 'war', def: 'an agreement made by opposing sides in a war to stop fighting for a certain time' },
  { en: 'attrition', tr: 'zəiflətmə müharibəsi', wrong: 'sürətli qələbə', wen: 'swift victory', def: 'the action or process of gradually reducing the strength or effectiveness of someone or something through sustained attack or pressure' },
  { en: 'bastion', tr: 'qala', wrong: 'açıq ərazi', wen: 'open territory', def: 'a projecting part of a fortification built at an angle to the line of a wall, so as to allow defensive fire in all directions' },
  { en: 'brinkmanship', tr: 'riskli siyasət', wrong: 'ehtiyatlı siyasət', wen: 'prudent policy', def: 'the activity of trying to get what you want by threatening to do something dangerous' },
  { en: 'bulwark', tr: 'müdafiə', wrong: 'zəiflik', wen: 'vulnerability', def: 'a solid wall-like structure raised for defence' },
  { en: 'citadel', tr: 'qala', wrong: 'açıq şəhər', wen: 'open city', def: 'a fortress, typically on high ground, protecting or dominating a city' },
  { en: 'to decimate', tr: 'böyük itki vermək', wrong: 'qorumaq', wen: 'safeguard', def: 'to kill, destroy or remove a large percentage or part of' },
  { en: 'garrison', tr: 'qarnizon', wrong: 'mülki əhali', wen: 'civilian population', def: 'a body of troops stationed in a fortified place to protect it' },
  { en: 'guerrilla', tr: 'partizan', wrong: 'nizami ordu', wen: 'regular army', def: 'a member of an irregular armed force that fights a stronger force by sabotage and harassment' },
  { en: 'incursion', tr: 'basqın', wrong: 'müdafiə', wen: 'defence', def: 'an invasion or attack, especially a sudden or brief one' },
  { en: 'munition', tr: 'sursat', wrong: 'silahsız', wen: 'unarmed', def: 'a supply or quantity of bullets and shells' },
  { en: 'reconnaissance', tr: 'kəşfiyyat', wrong: 'mübarizə', wen: 'combat', def: 'military observation of a region to locate an enemy or ascertain strategic features' },
  { en: 'sabotage', tr: 'diversiya', wrong: 'qurma', wen: 'construction', def: 'the deliberate destruction of property or obstruction of normal operations' },
  { en: 'saboteur', tr: 'diversant', wrong: 'qurucu', wen: 'builder', def: 'a person who engages in sabotage' },
  { en: 'squadron', tr: 'eskadrilya', wrong: 'tək əsgər', wen: 'lone soldier', def: 'a tactical unit of cavalry, aircraft or naval vessels' },
  { en: 'stratagem', tr: 'hərbi hiylə', wrong: 'açıq döyüş', wen: 'open battle', def: 'a plan or scheme for achieving a purpose, especially a sly or ingenious one' },
  { en: 'stronghold', tr: 'möhkəm mövqe', wrong: 'zəif mövqe', wen: 'weak position', def: 'a place that has been fortified so as to protect it against attack' },
  { en: 'to subjugate', tr: 'boyunduruq altına almaq', wrong: 'azad etmək', wen: 'liberate', def: 'to bring under domination or control, especially by conquest' },
  { en: 'to vanquish', tr: 'məğlub etmək', wrong: 'məğlub olmaq', wen: 'be defeated', def: 'to defeat thoroughly' },
  { en: 'weaponry', tr: 'silahlar', wrong: 'silahsız', wen: 'unarmed', def: 'weapons regarded collectively' }
],

// ─────────────────────── QUIZ 37 — War, Military & Strategy (2) ───────────────────────
[
  { en: 'ambush', tr: 'pusqu', wrong: 'açıq döyüş', wen: 'open battle', def: 'a surprise attack by people lying in wait in a concealed position' },
  { en: 'cavalry', tr: 'atlı qoşun', wrong: 'piyada', wen: 'infantry', def: 'soldiers who fight on horseback' },
  { en: 'combat', tr: 'döyüş', wrong: 'sülh', wen: 'peace', def: 'fighting between armed forces' },
  { en: 'conscription', tr: 'məcburi hərbi xidmət', wrong: 'könüllü', wen: 'voluntary service', def: 'compulsory enlistment for state service, typically into the armed forces' },
  { en: 'coup', tr: 'dövlət çevrilişi', wrong: 'qanuni hakimiyyət', wen: 'legitimate government', def: 'a sudden, violent and illegal seizure of power from a government' },
  { en: 'entrenchment', tr: 'istehkam', wrong: 'açıq mövqe', wen: 'open position', def: 'a defensive position consisting of a trench or trenches' },
  { en: 'foray', tr: 'basqın', wrong: 'müdafiə', wen: 'defence', def: 'a sudden attack or incursion into enemy territory' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh', wen: 'peace', def: 'an active revolt or uprising' },
  { en: 'marauder', tr: 'talançı', wrong: 'qoruyucu', wen: 'protector', def: 'a person who raids and plunders' },
  { en: 'mercenary', tr: 'muzdlu əsgər', wrong: 'vətənpərvər', wen: 'patriot', def: 'a professional soldier hired to serve in a foreign army' },
  { en: 'militia', tr: 'xalq milisi', wrong: 'nizami ordu', wen: 'regular army', def: 'a military force that is raised from the civil population to supplement a regular army in an emergency' },
  { en: 'raid', tr: 'basqın', wrong: 'müdafiə', wen: 'defence', def: 'a sudden attack on an enemy by troops, aircraft or other armed forces' },
  { en: 'rout', tr: 'tam məğlubiyyət', wrong: 'qələbə', wen: 'victory', def: 'a disorderly retreat of defeated troops' },
  { en: 'siege', tr: 'mühazirə', wrong: 'azadlıq', wen: 'liberation', def: 'a military operation in which enemy forces surround a town or building' },
  { en: 'skirmish', tr: 'kiçik toqquşma', wrong: 'böyük döyüş', wen: 'major battle', def: 'an episode of irregular or unpremeditated fighting' },
  { en: 'sortie', tr: 'çıxış əməliyyatı', wrong: 'müdafiə', wen: 'defence', def: 'an attack made by troops coming out from a position besieged by the enemy' },
  { en: 'standoff', tr: 'qarşıdurma', wrong: 'razılıq', wen: 'agreement', def: 'a deadlock between two equally matched opponents in a dispute or contest' },
  { en: 'to besiege', tr: 'mühazirə etmək', wrong: 'azad etmək', wen: 'liberate', def: 'to surround a place with armed forces in order to capture it or force its surrender' },
  { en: 'to repel', tr: 'dəf etmək', wrong: 'qəbul etmək', wen: 'accept', def: 'to drive or force back or away' },
  { en: 'to retaliate', tr: 'qisas almaq', wrong: 'bağışlamaq', wen: 'forgive', def: 'to make an attack or assault in return for a similar attack' }
],

// ─────────────────────── QUIZ 38 — Crime, Corruption & Wrongdoing (1) ───────────────────────
[
  { en: 'accomplice', tr: 'cinayət ortaqı', wrong: 'şahid', wen: 'witness', def: 'a person who helps another commit a crime' },
  { en: 'to abscond', tr: 'qaçmaq', wrong: 'qalmaq', wen: 'remain', def: 'to leave hurriedly and secretly, typically to avoid detection or arrest' },
  { en: 'to abet', tr: 'cinayətə kömək etmək', wrong: 'mane olmaq', wen: 'hinder', def: 'to encourage or assist someone to commit a crime' },
  { en: 'cabal', tr: 'gizli qrup', wrong: 'açıq qrup', wen: 'open group', def: 'a secret political clique or faction' },
  { en: 'clandestine', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'done secretly or kept secret' },
  { en: 'collusion', tr: 'gizli razılaşma', wrong: 'qanuni müqavilə', wen: 'legal contract', def: 'secret or illegal cooperation or conspiracy, especially in order to deceive or cheat others' },
  { en: 'complicity', tr: 'iştirak', wrong: 'günahsızlıq', wen: 'innocence', def: 'involvement with others in an illegal activity or plan' },
  { en: 'conspiracy', tr: 'sui-qəsd', wrong: 'açıq plan', wen: 'overt plan', def: 'a secret plan by a group to do something unlawful or harmful' },
  { en: 'to embezzle', tr: 'mənimsəmək', wrong: 'qaytarmaq', wen: 'return', def: 'to steal money that one has been entrusted with, typically by one’s employer' },
  { en: 'felony', tr: 'ağır cinayət', wrong: 'kiçik pozuntu', wen: 'misdemeanour', def: 'a crime, typically one involving violence, regarded as more serious than a misdemeanour' },
  { en: 'illicit', tr: 'qanunsuz', wrong: 'qanuni', wen: 'lawful', def: 'forbidden by law, rules or custom' },
  { en: 'impunity', tr: 'cəzasızlıq', wrong: 'cəza', wen: 'punishment', def: 'exemption from punishment or freedom from the injurious consequences of an action' },
  { en: 'indictment', tr: 'ittiham', wrong: 'bəraət', wen: 'acquittal', def: 'a formal charge or accusation of a serious crime' },
  { en: 'infraction', tr: 'pozuntu', wrong: 'qaydaya riayət', wen: 'compliance', def: 'a violation or infringement of a law, agreement or code of conduct' },
  { en: 'larceny', tr: 'oğurluq', wrong: 'qanuni əldə etmə', wen: 'lawful acquisition', def: 'theft of personal property' },
  { en: 'malfeasance', tr: 'qanunsuz hərəkət', wrong: 'qanuni hərəkət', wen: 'lawful conduct', def: 'wrongdoing, especially by a public official' },
  { en: 'nefarious', tr: 'alçaq', wrong: 'nəcib', wen: 'noble', def: 'wicked or criminal' },
  { en: 'perpetrator', tr: 'cinayətkar', wrong: 'qurban', wen: 'victim', def: 'a person who carries out a harmful, illegal or immoral act' },
  { en: 'piracy', tr: 'dəniz quldurluğu', wrong: 'qanuni ticarət', wen: 'legitimate trade', def: 'the practice of attacking and robbing ships at sea' },
  { en: 'recidivism', tr: 'təkrar cinayət', wrong: 'islah', wen: 'rehabilitation', def: 'the tendency of a convicted criminal to reoffend' }
],

// ─────────────────────── QUIZ 39 — Crime, Corruption & Wrongdoing (2) ───────────────────────
[
  { en: 'ringleader', tr: 'başçı', wrong: 'adi iştirakçı', wen: 'ordinary participant', def: 'a person who leads a conspiracy or mutiny' },
  { en: 'rogue', tr: 'fırıldaqçı', wrong: 'dürüst', wen: 'honest', def: 'a dishonest or unprincipled man' },
  { en: 'scoundrel', tr: 'alçaq', wrong: 'nəcib', wen: 'noble', def: 'a dishonest or unscrupulous person' },
  { en: 'skullduggery', tr: 'hiyləgərlik', wrong: 'dürüstlük', wen: 'integrity', def: 'underhand or unscrupulous behaviour' },
  { en: 'subterfuge', tr: 'aldatma', wrong: 'açıqlıq', wen: 'candour', def: 'deceit used in order to achieve one’s goal' },
  { en: 'to swindle', tr: 'fırıldaq etmək', wrong: 'qanuni iş', wen: 'legitimate deal', def: 'to use deception to deprive someone of money or possessions' },
  { en: 'trafficker', tr: 'qaçaqmalçı', wrong: 'qanuni tacir', wen: 'legitimate trader', def: 'a person who deals or trades in something illegal' },
  { en: 'treason', tr: 'vətənə xəyanət', wrong: 'vətənpərvərlik', wen: 'patriotism', def: 'the crime of betraying one’s country, especially by attempting to kill the sovereign or overthrow the government' },
  { en: 'turpitude', tr: 'alçaqlıq', wrong: 'nəciblik', wen: 'nobility', def: 'depravity; wickedness' },
  { en: 'vandalism', tr: 'vandalizm', wrong: 'qoruma', wen: 'preservation', def: 'action involving deliberate destruction of or damage to public or private property' },
  { en: 'villainy', tr: 'alçaqlıq', wrong: 'qəhrəmanlıq', wen: 'heroism', def: 'wicked or criminal behaviour' },
  { en: 'to connive', tr: 'göz yummaq', wrong: 'mane olmaq', wen: 'hinder', def: 'to secretly allow something wrong or illegal to happen' },
  { en: 'to contravene', tr: 'pozmaq', wrong: 'əməl etmək', wen: 'comply', def: 'to act in a way that conflicts with a law, treaty or principle' },
  { en: 'contraband', tr: 'qaçaqmal', wrong: 'qanuni mal', wen: 'lawful goods', def: 'goods that have been imported or exported illegally' },
  { en: 'corruption', tr: 'korrupsiya', wrong: 'dürüstlük', wen: 'integrity', def: 'dishonest or fraudulent conduct by those in power, typically involving bribery' },
  { en: 'extortion', tr: 'ələ keçirmə', wrong: 'qanuni ödəniş', wen: 'lawful payment', def: 'the practice of obtaining something, especially money, through force or threats' },
  { en: 'forgery', tr: 'saxtakarlıq', wrong: 'orijinal', wen: 'authentic', def: 'the action of forging a copy or imitation of a document, signature or banknote' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət', wen: 'obedience', def: 'a violent uprising against an authority or government' },
  { en: 'subversion', tr: 'dağıdıcı fəaliyyət', wrong: 'qurma', wen: 'construction', def: 'the undermining of the power and authority of an established system or institution' },
  { en: 'wrongdoer', tr: 'günahkar', wrong: 'günahsız', wen: 'innocent', def: 'a person who commits an immoral or illegal act' }
],

// ─────────────────────── QUIZ 40 — Suffering & Hardship (1) ───────────────────────
[
  { en: 'adversity', tr: 'çətinlik', wrong: 'asanlıq', wen: 'ease', def: 'difficulties or misfortune' },
  { en: 'affliction', tr: 'əzab', wrong: 'xoşbəxtlik', wen: 'bliss', def: 'something that causes pain or suffering' },
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc', wen: 'elation', def: 'severe mental or physical pain or suffering' },
  { en: 'atrocity', tr: 'vəhşilik', wrong: 'yaxşılıq', wen: 'benevolence', def: 'an extremely wicked or cruel act, typically one involving physical violence or injury' },
  { en: 'bereavement', tr: 'itki', wrong: 'qazanc', wen: 'gain', def: 'the experience of losing a close relative or friend through death' },
  { en: 'desolation', tr: 'tənhalıq', wrong: 'sevinc', wen: 'joy', def: 'a state of complete emptiness or destruction' },
  { en: 'destitute', tr: 'kasıb', wrong: 'varlı', wen: 'affluent', def: 'extremely poor and without the basic necessities of life' },
  { en: 'duress', tr: 'məcburiyyət', wrong: 'azadlıq', wen: 'liberty', def: 'threats, violence, constraints or other action brought to bear on someone to do something against their will or better judgement' },
  { en: 'emaciated', tr: 'arıqlamış', wrong: 'sağlam', wen: 'robust', def: 'abnormally thin and weak' },
  { en: 'forlorn', tr: 'ümidsiz', wrong: 'xoşbəxt', wen: 'joyful', def: 'pitifully sad and abandoned or lonely' },
  { en: 'grievance', tr: 'şikayət', wrong: 'razılıq', wen: 'satisfaction', def: 'a real or imagined wrong or other cause for complaint or protest, especially one that has given rise to a dispute' },
  { en: 'gruelling', tr: 'çox ağır', wrong: 'asan', wen: 'easy', def: 'extremely tiring and demanding' },
  { en: 'hardship', tr: 'çətinlik', wrong: 'asanlıq', wen: 'ease', def: 'severe suffering or deprivation' },
  { en: 'holocaust', tr: 'böyük qırğın', wrong: 'sülh', wen: 'peace', def: 'destruction or slaughter on a mass scale, especially caused by fire or nuclear war' },
  { en: 'inhumanity', tr: 'insanlıqsızlıq', wrong: 'insanlıq', wen: 'humanity', def: 'cruel and brutal behaviour' },
  { en: 'misery', tr: 'əzab', wrong: 'xoşbəxtlik', wen: 'bliss', def: 'a state or feeling of great distress or discomfort' },
  { en: 'oppression', tr: 'əsarət', wrong: 'azadlıq', wen: 'liberty', def: 'prolonged cruel or unjust treatment or control' },
  { en: 'ordeal', tr: 'ağır sınaq', wrong: 'asanlıq', wen: 'ease', def: 'a prolonged painful or uncomfortable experience' },
  { en: 'persecution', tr: 'təqib', wrong: 'dəstək', wen: 'support', def: 'hostility and ill-treatment, especially because of race or political or religious beliefs' },
  { en: 'privation', tr: 'yoxsulluq', wrong: 'bolluq', wen: 'abundance', def: 'a state in which food and other essentials for well-being are lacking' }
],

      // ─────────────────────── QUIZ 41 — Suffering & Hardship (2) ───────────────────────
[
  { en: 'plight', tr: 'ağır vəziyyət', wrong: 'asan vəziyyət', wen: 'easy situation', def: 'a dangerous, difficult or otherwise unfortunate situation' },
  { en: 'remorse', tr: 'vicdan əzabı', wrong: 'qürur', wen: 'pride', def: 'a gnawing distress arising from a sense of guilt for past wrongs' },
  { en: 'repression', tr: 'siyasi təzyiq', wrong: 'azadlıq', wen: 'liberty', def: 'the action of subduing someone or something by force' },
  { en: 'scourge', tr: 'bəla', wrong: 'xeyir', wen: 'blessing', def: 'a person or thing causing great trouble or suffering' },
  { en: 'servitude', tr: 'qulluq', wrong: 'azadlıq', wen: 'liberty', def: 'the state of being a slave or completely subject to someone more powerful' },
  { en: 'shackle', tr: 'zəncir', wrong: 'azadlıq', wen: 'freedom', def: 'a pair of fetters connected together by a chain, used to fasten a prisoner’s ankles together' },
  { en: 'squalid', tr: 'çirkli və yoxsul', wrong: 'təmiz və varlı', wen: 'clean and wealthy', def: 'extremely dirty and unpleasant, especially as a result of poverty or neglect' },
  { en: 'squalor', tr: 'yoxsulluq', wrong: 'zənginlik', wen: 'opulence', def: 'the state of being extremely dirty and unpleasant, especially as a result of poverty or neglect' },
  { en: 'torment', tr: 'işgəncə', wrong: 'rahatlıq', wen: 'ease', def: 'severe physical or mental suffering' },
  { en: 'tribulation', tr: 'çətin sınaq', wrong: 'asanlıq', wen: 'ease', def: 'a cause of great trouble or suffering' },
  { en: 'woe', tr: 'bədbəxtlik', wrong: 'xoşbəxtlik', wen: 'bliss', def: 'great sorrow or distress' },
  { en: 'wretched', tr: 'bədbəxt', wrong: 'xoşbəxt', wen: 'joyful', def: 'in a very unhappy or unfortunate state' },
  { en: 'yoke', tr: 'boyunduruq', wrong: 'azadlıq', wen: 'liberty', def: 'a wooden crosspiece that is fastened over the necks of two animals and attached to the plough or cart that they are pulling' },
  { en: 'serfdom', tr: 'təhkimçilik', wrong: 'azadlıq', wen: 'liberty', def: 'the state of being a serf or the condition of serfdom' },
  { en: 'depravity', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq', wen: 'virtue', def: 'moral corruption or wickedness' },
  { en: 'subjugation', tr: 'əsarət', wrong: 'azadlıq', wen: 'liberty', def: 'the action of bringing someone or something under domination or control' },
  { en: 'drudgery', tr: 'ağır zəhmət', wrong: 'asan iş', wen: 'easy work', def: 'hard, menial and tedious work' },
  { en: 'ignominy', tr: 'rüsvayçılıq', wrong: 'şöhrət', wen: 'renown', def: 'public shame or disgrace' },
  { en: 'destitution', tr: 'kasıblıq', wrong: 'var-dövlət', wen: 'wealth', def: 'extreme poverty' },
  { en: 'anguish', tr: 'dərin kədər', wrong: 'sevinc', wen: 'elation', def: 'severe mental or physical pain or suffering' }
],

// ─────────────────────── QUIZ 42 — Generosity, Charity & Compassion ───────────────────────
[
  { en: 'benefactor', tr: 'xeyriyyəçi', wrong: 'eqoist', wen: 'selfish', def: 'a person who gives money or other help to a person or cause' },
  { en: 'benevolence', tr: 'xeyirxahlıq', wrong: 'pis niyyət', wen: 'malevolence', def: 'the quality of being well meaning; kindness' },
  { en: 'benevolent', tr: 'xeyirxah', wrong: 'zalım', wen: 'malevolent', def: 'well meaning and kind' },
  { en: 'to bequeath', tr: 'vəsiyyət etmək', wrong: 'almaq', wen: 'inherit', def: 'to leave a personal estate or money to someone by will' },
  { en: 'bequest', tr: 'vəsiyyət', wrong: 'borc', wen: 'debt', def: 'a legacy' },
  { en: 'bounty', tr: 'səxavət', wrong: 'cimrilik', wen: 'miserliness', def: 'generosity in giving; a generous gift' },
  { en: 'to commiserate', tr: 'həmdərd olmaq', wrong: 'lağa qoymaq', wen: 'mock', def: 'to express or feel sympathy or pity; commiserate' },
  { en: 'to endow', tr: 'ianə vermək', wrong: 'almaq', wen: 'take', def: 'to give or bequeath an income or property to a person or institution' },
  { en: 'to exonerate', tr: 'günahdan təmizləmək', wrong: 'günahlandırmaq', wen: 'incriminate', def: 'to absolve someone from blame' },
  { en: 'forbearance', tr: 'dözümlülük', wrong: 'səbirsizlik', wen: 'impatience', def: 'patient self-control; restraint and tolerance' },
  { en: 'to forgive', tr: 'bağışlamaq', wrong: 'cəzalandırmaq', wen: 'punish', def: 'to stop feeling angry or resentful towards someone for an offence, flaw or mistake' },
  { en: 'largesse', tr: 'səxavət', wrong: 'cimrilik', wen: 'miserliness', def: 'generosity in bestowing gifts or money' },
  { en: 'magnanimous', tr: 'böyük ürəkli', wrong: 'xırda ürəkli', wen: 'petty', def: 'generous or forgiving, especially towards a rival or less powerful person' },
  { en: 'munificent', tr: 'səxavətli', wrong: 'cimri', wen: 'stingy', def: 'larger or more generous than is usual or necessary' },
  { en: 'to palliate', tr: 'yumşaltmaq', wrong: 'pisləşdirmək', wen: 'aggravate', def: 'to make a disease or its symptoms less severe or unpleasant without removing the cause' },
  { en: 'philanthropic', tr: 'xeyriyyəçi', wrong: 'eqoist', wen: 'selfish', def: 'seeking to promote the welfare of others' },
  { en: 'philanthropist', tr: 'xeyriyyəçi', wrong: 'eqoist', wen: 'selfish', def: 'a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes' },
  { en: 'reparation', tr: 'təzminat', wrong: 'cəza', wen: 'punishment', def: 'the making of amends for a wrong one has done, by paying money to or otherwise helping those who have been wronged' },
  { en: 'to solace', tr: 'təsəlli vermək', wrong: 'əzab vermək', wen: 'torment', def: 'to give comfort to someone in distress or grief' },
  { en: 'to succour', tr: 'kömək etmək', wrong: 'zərər vermək', wen: 'harm', def: 'to give assistance or help, especially in a time of need' }
],

// ─────────────────────── QUIZ 43 — Pride, Vanity & Arrogance ───────────────────────
[
  { en: 'affectation', tr: 'sunilik', wrong: 'təbiiilik', wen: 'naturalness', def: 'behaviour, speech or writing that is artificial and designed to impress' },
  { en: 'arrogance', tr: 'təkəbbür', wrong: 'təvazökarlıq', wen: 'humility', def: 'an inflated sense of one’s own importance or abilities' },
  { en: 'audacity', tr: 'həyasızlıq', wrong: 'utanma', wen: 'modesty', def: 'the quality of being daring or fearless; boldness' },
  { en: 'bombastic', tr: 'təntənəli', wrong: 'sadə', wen: 'unpretentious', def: 'high-sounding but with little meaning; inflated' },
  { en: 'bravado', tr: 'yalançı igidlik', wrong: 'təvazökarlıq', wen: 'humility', def: 'a bold or daring action intended to impress or intimidate' },
  { en: 'condescension', tr: 'yuxarıdan baxma', wrong: 'bərabərlik', wen: 'equality', def: 'an attitude of patronising superiority' },
  { en: 'effrontery', tr: 'utanmazlıq', wrong: 'utanma', wen: 'modesty', def: 'insolent or impertinent behaviour' },
  { en: 'egregious', tr: 'çox pis', wrong: 'mükəmməl', wen: 'excellent', def: 'outstandingly bad; shocking' },
  { en: 'grandiosity', tr: 'böyüklük iddiası', wrong: 'təvazökarlıq', wen: 'humility', def: 'the quality of being magnificent, splendid or grand' },
  { en: 'haughtiness', tr: 'təkəbbür', wrong: 'təvazökarlıq', wen: 'humility', def: 'the quality of being arrogantly superior and disdainful' },
  { en: 'hubris', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq', wen: 'humility', def: 'excessive pride or self-confidence' },
  { en: 'imperious', tr: 'əmr verən', wrong: 'təvazökar', wen: 'humble', def: 'assuming power or authority without justification; arrogant and domineering' },
  { en: 'insolence', tr: 'ədəbsizlik', wrong: 'nəzakət', wen: 'courtesy', def: 'rude and disrespectful behaviour' },
  { en: 'ostentation', tr: 'nümayişkarlıq', wrong: 'sadəlik', wen: 'simplicity', def: 'the pretentious and showy display of wealth, knowledge or skill' },
  { en: 'ostentatious', tr: 'nümayişkar', wrong: 'sadə', wen: 'unpretentious', def: 'characterised by vulgar or pretentious display; designed to impress or attract notice' },
  { en: 'pompous', tr: 'təntənəli', wrong: 'sadə', wen: 'unpretentious', def: 'affectedly grand, solemn or self-important' },
  { en: 'presumptuous', tr: 'həddini aşan', wrong: 'təvazökar', wen: 'humble', def: 'failing to observe the limits of what is permitted or appropriate' },
  { en: 'pretentious', tr: 'id dialı', wrong: 'sadə', wen: 'unpretentious', def: 'attempting to impress by affecting greater importance, talent, culture or style than is actually possessed' },
  { en: 'vanity', tr: 'özünə vurulma', wrong: 'təvazökarlıq', wen: 'humility', def: 'excessive pride in or admiration of one’s own appearance or achievements' },
  { en: 'overweening', tr: 'həddindən artıq özünə inam', wrong: 'təvazökarlıq', wen: 'humility', def: 'showing excessive confidence; arrogant' }
],

// ─────────────────────── QUIZ 44 — Secrecy & Concealment ───────────────────────
[
  { en: 'arcane', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'understood by few; mysterious or secret' },
  { en: 'clandestine', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'done secretly or kept secret' },
  { en: 'covert', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'not openly acknowledged or displayed' },
  { en: 'cryptic', tr: 'sirli', wrong: 'aydın', wen: 'clear', def: 'having a meaning that is mysterious or obscure' },
  { en: 'esoteric', tr: 'daxili', wrong: 'xarici', wen: 'exoteric', def: 'intended for or likely to be understood by only a small number of people with a specialised knowledge or interest' },
  { en: 'furtive', tr: 'gizli', wrong: 'açıq', wen: 'open', def: 'attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble' },
  { en: 'to harbour', tr: 'gizlətmək', wrong: 'açıqlamaq', wen: 'reveal', def: 'to keep a thought or feeling in one’s mind, especially secretly' },
  { en: 'to hoard', tr: 'yığmaq', wrong: 'paylaşmaq', wen: 'share', def: 'to accumulate and store away money, possessions or resources in a carefully guarded way' },
  { en: 'inscrutable', tr: 'anlaşılmaz', wrong: 'aydın', wen: 'transparent', def: 'impossible to understand or interpret' },
  { en: 'latent', tr: 'gizli', wrong: 'aşkar', wen: 'manifest', def: 'existing but not yet developed or manifest; hidden or concealed' },
  { en: 'obscure', tr: 'qaranlıq', wrong: 'aydın', wen: 'lucid', def: 'not discovered or known about; uncertain' },
  { en: 'opacity', tr: 'bulanıqlıq', wrong: 'şəffaflıq', wen: 'transparency', def: 'the condition of lacking transparency or translucence' },
  { en: 'recondite', tr: 'dərin və gizli', wrong: 'sadə', wen: 'simple', def: 'little known; abstruse' },
  { en: 'to shroud', tr: 'örtmək', wrong: 'açmaq', wen: 'uncover', def: 'to cover or envelop so as to conceal from view' },
  { en: 'shrouded', tr: 'örtülü', wrong: 'açıq', wen: 'exposed', def: 'covered or enveloped so as to conceal from view' },
  { en: 'sly', tr: 'hiyləgər', wrong: 'səmimi', wen: 'candid', def: 'having or showing a cunning and deceitful nature' },
  { en: 'stealth', tr: 'gizlilik', wrong: 'açıqlıq', wen: 'openness', def: 'cautious and surreptitious action or movement' },
  { en: 'surreptitious', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'kept secret, especially because it would not be approved of' },
  { en: 'to suppress', tr: 'boğmaq', wrong: 'açıqlamaq', wen: 'disclose', def: 'to forcibly put an end to something' },
  { en: 'to withhold', tr: 'gizlətmək', wrong: 'vermək', wen: 'disclose', def: 'to refuse to give something that is due to or is desired by another' }
],
// ─────────────────────── QUIZ 45 — Rebellion & Dissent ───────────────────────
[
  { en: 'anarchy', tr: 'anarxiya', wrong: 'nizam', wen: 'order', def: 'a state of disorder due to absence or non-recognition of authority' },
  { en: 'apostasy', tr: 'dindən dönmə', wrong: 'sadiqlik', wen: 'loyalty', def: 'the abandonment or renunciation of a religious or political belief' },
  { en: 'defection', tr: 'tərəf dəyişmə', wrong: 'sadiqlik', wen: 'loyalty', def: 'the desertion of one’s country or cause in favour of an opposing one' },
  { en: 'disaffection', tr: 'narazılıq', wrong: 'razılıq', wen: 'satisfaction', def: 'a feeling of being disappointed with or not satisfied with someone or something' },
  { en: 'dissident', tr: 'dissident', wrong: 'tərəfdar', wen: 'supporter', def: 'a person who opposes official policy, especially in a totalitarian state' },
  { en: 'heresy', tr: 'bidət', wrong: 'əsas inanc', wen: 'orthodoxy', def: 'belief or opinion contrary to orthodox religious doctrine' },
  { en: 'iconoclasm', tr: 'köhnəyə qarşı çıxma', wrong: 'hörmət', wen: 'veneration', def: 'the rejection of or attack on cherished beliefs and institutions' },
  { en: 'insurrection', tr: 'üsyan', wrong: 'itaət', wen: 'obedience', def: 'a violent uprising against an authority or government' },
  { en: 'insurgency', tr: 'üsyan', wrong: 'sülh', wen: 'peace', def: 'an active revolt or uprising' },
  { en: 'mutiny', tr: 'qiyam', wrong: 'itaət', wen: 'obedience', def: 'an open rebellion against the proper authorities, especially by soldiers or sailors' },
  { en: 'radicalism', tr: 'radikalizm', wrong: 'mühafizəkarlıq', wen: 'conservatism', def: 'the beliefs or actions of people who advocate thorough or complete political or social reform' },
  { en: 'renegade', tr: 'xain', wrong: 'sadiq', wen: 'loyal', def: 'a person who deserts and betrays an organization, country or set of principles' },
  { en: 'to renounce', tr: 'imtina etmək', wrong: 'qəbul etmək', wen: 'embrace', def: 'to formally declare one’s abandonment of a claim, right or possession' },
  { en: 'to revolt', tr: 'üsyan etmək', wrong: 'itaət etmək', wen: 'obey', def: 'to take part in an uprising against an authority or government' },
  { en: 'schism', tr: 'bölünmə', wrong: 'birlik', wen: 'unity', def: 'a split or division between strongly opposed parties caused by differences in opinion or belief' },
  { en: 'secession', tr: 'ayrılma', wrong: 'birlik', wen: 'unity', def: 'the action of withdrawing formally from membership of a federation or body, especially a political state' },
  { en: 'seditious', tr: 'üsyançı', wrong: 'sadiq', wen: 'loyal', def: 'inciting or causing people to rebel against the authority of a state or monarch' },
  { en: 'subversive', tr: 'dağıdıcı', wrong: 'qurucu', wen: 'constructive', def: 'seeking to undermine the power and authority of an established system or institution' },
  { en: 'to subvert', tr: 'dağıtmaq', wrong: 'qurmaq', wen: 'construct', def: 'to undermine the power and authority of an established system or institution' },
  { en: 'uprising', tr: 'üsyan', wrong: 'sülh', wen: 'peace', def: 'an act of resistance or rebellion; a revolt' }
],

// ─────────────────────── QUIZ 46 — Diplomacy & Negotiation ───────────────────────
[
  { en: 'to accede', tr: 'razılaşmaq', wrong: 'imtina etmək', wen: 'refuse', def: 'to agree to a demand, proposal or treaty' },
  { en: 'accession', tr: 'qəbul', wrong: 'rədd', wen: 'rejection', def: 'the action or process of acceding to a position of power or authority' },
  { en: 'bilateral', tr: 'ikitarafli', wrong: 'tək tərəfli', wen: 'unilateral', def: 'involving two parties, usually countries' },
  { en: 'brinkmanship', tr: 'riskli danışıq', wrong: 'ehtiyatlı danışıq', wen: 'prudent negotiation', def: 'the pursuit of a dangerous policy to the limits of safety in order to force an opponent to make concessions' },
  { en: 'to capitulate', tr: 'təslim olmaq', wrong: 'müqavimət göstərmək', wen: 'resist', def: 'to cease to resist an opponent or an unwelcome demand; surrender' },
  { en: 'cessation', tr: 'dayanma', wrong: 'davam', wen: 'continuation', def: 'the fact or process of ending or being brought to an end' },
  { en: 'conciliatory', tr: 'barışdırıcı', wrong: 'münaqişəli', wen: 'confrontational', def: 'intended or likely to placate or pacify' },
  { en: 'concordance', tr: 'razılıq', wrong: 'ixtilaf', wen: 'discord', def: 'agreement; harmony' },
  { en: 'to convene', tr: 'toplaşdırmaq', wrong: 'dağıtmaq', wen: 'disperse', def: 'to come or bring together for a meeting or activity' },
  { en: 'to deliberate', tr: 'müzakirə etmək', wrong: 'tələsmək', wen: 'hasten', def: 'to engage in long and careful consideration' },
  { en: 'envoy', tr: 'elçi', wrong: 'düşmən', wen: 'adversary', def: 'a messenger or representative, especially one on a diplomatic mission' },
  { en: 'emissary', tr: 'elçi', wrong: 'düşmən', wen: 'adversary', def: 'a person sent on a special mission, usually as a diplomatic representative' },
  { en: 'to mediate', tr: 'vasitəçilik etmək', wrong: 'müdaxilə etmək', wen: 'interfere', def: 'to intervene between people in a dispute in order to bring about an agreement or reconciliation' },
  { en: 'moratorium', tr: 'müvəqqəti dayandırma', wrong: 'davam', wen: 'continuation', def: 'a temporary prohibition of an activity' },
  { en: 'parity', tr: 'bərabərlik', wrong: 'üstünlük', wen: 'superiority', def: 'the state or condition of being equal, especially as regards status or pay' },
  { en: 'ratification', tr: 'təsdiq', wrong: 'ləğv', wen: 'abrogation', def: 'the action of signing or giving formal consent to a treaty, contract or agreement, making it officially valid' },
  { en: 'to ratify', tr: 'təsdiqləmək', wrong: 'ləğv etmək', wen: 'abrogate', def: 'to sign or give formal consent to a treaty, contract or agreement, making it officially valid' },
  { en: 'reciprocity', tr: 'qarşılıqlılıq', wrong: 'bir tərəfli', wen: 'unilateralism', def: 'the practice of exchanging things with others for mutual benefit, especially privileges granted by one country or organization to another' },
  { en: 'reprieve', tr: 'müvəqqəti azadlıq', wrong: 'cəza', wen: 'punishment', def: 'a temporary cancellation or postponement of a punishment' },
  { en: 'treaty', tr: 'müqavilə', wrong: 'müharibə', wen: 'war', def: 'a formally concluded and ratified agreement between states' }
],

// ─────────────────────── QUIZ 47 — Excess & Indulgence ───────────────────────
[
  { en: 'decadence', tr: 'tənəzzül', wrong: 'inkişaf', wen: 'flourishing', def: 'moral or cultural decline as evidenced by excessive indulgence in pleasure or luxury' },
  { en: 'debauchery', tr: 'əxlaqsızlıq', wrong: 'əxlaqlılıq', wen: 'virtue', def: 'excessive indulgence in sensual pleasures' },
  { en: 'excess', tr: 'həddindən artıq', wrong: 'ölçü', wen: 'moderation', def: 'lack of moderation; intemperance' },
  { en: 'extravagance', tr: 'israf', wrong: 'qənaət', wen: 'frugality', def: 'lack of restraint in spending money or using resources' },
  { en: 'gluttony', tr: 'oburluq', wrong: 'təmkin', wen: 'temperance', def: 'habitual greed or excess in eating' },
  { en: 'hedonistic', tr: 'zövq axtaran', wrong: 'təmkinli', wen: 'temperate', def: 'engaged in the pursuit of pleasure; sensually self-indulgent' },
  { en: 'indulgent', tr: 'həddindən artıq əzizləyən', wrong: 'sərt', wen: 'strict', def: 'having or showing a tendency to be overly generous to or lenient with someone' },
  { en: 'intemperance', tr: 'hədsizlik', wrong: 'təmkin', wen: 'temperance', def: 'lack of moderation or self-control, especially in the consumption of alcohol' },
  { en: 'licentious', tr: 'əxlaqsız', wrong: 'əxlaqlı', wen: 'virtuous', def: 'promiscuous and unprincipled in sexual matters' },
  { en: 'masochism', tr: 'özünə işgəncə', wrong: 'özünə qayğı', wen: 'self-care', def: 'the tendency to derive pleasure, especially sexual gratification, from one’s own pain or humiliation' },
  { en: 'opulence', tr: 'zənginlik', wrong: 'yoxsulluq', wen: 'penury', def: 'great wealth or luxuriousness' },
  { en: 'overindulgence', tr: 'həddindən artıq zövq', wrong: 'təmkin', wen: 'restraint', def: 'excessive indulgence in something, especially in food or drink' },
  { en: 'prodigal', tr: 'israfçı', wrong: 'qənaətcil', wen: 'frugal', def: 'spending money or using resources freely and recklessly; wastefully extravagant' },
  { en: 'profligate', tr: 'israfçı', wrong: 'qənaətcil', wen: 'frugal', def: 'recklessly extravagant or wasteful in the use of resources' },
  { en: 'promiscuity', tr: 'əxlaqsızlıq', wrong: 'sadiqlik', wen: 'fidelity', def: 'the fact or character of being promiscuous; sexual indiscretion' },
  { en: 'salacious', tr: 'şəhvani', wrong: 'təmiz', wen: 'chaste', def: 'having or conveying undue or inappropriate interest in sexual matters' },
  { en: 'satiate', tr: 'doymaq', wrong: 'ac qalmaq', wen: 'starve', def: 'to satisfy fully a desire or appetite' },
  { en: 'surfeit', tr: 'həddindən artıq', wrong: 'çatışmazlıq', wen: 'scarcity', def: 'an excessive amount of something' },
  { en: 'wantonness', tr: 'hədsizlik', wrong: 'təmkin', wen: 'restraint', def: 'the quality of being deliberately cruel or violent' },
  { en: 'dissipation', tr: 'israf', wrong: 'qənaət', wen: 'economy', def: 'the squandering of money, energy or resources' }
],

// ─────────────────────── QUIZ 48 — Intellect & Knowledge (1) ───────────────────────
[
  { en: 'acuity', tr: 'iti ağıl', wrong: 'küt ağıl', wen: 'obtuseness', def: 'sharpness or keenness of thought, vision or hearing' },
  { en: 'acumen', tr: 'iti ağıl', wrong: 'küt ağıl', wen: 'obtuseness', def: 'the ability to make good judgements and quick decisions' },
  { en: 'astute', tr: 'zirək', wrong: 'sadəlövh', wen: 'naive', def: 'having or showing an ability to accurately assess a situation and turn it to one’s advantage' },
  { en: 'cerebral', tr: 'ağıl ağırlıqlı', wrong: 'emosional', wen: 'emotional', def: 'intellectual rather than emotional or physical' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif', wen: 'weak', def: 'clear, logical and convincing' },
  { en: 'discernment', tr: 'fərq etmə qabiliyyəti', wrong: 'korluq', wen: 'blindness', def: 'the ability to judge well' },
  { en: 'erudite', tr: 'oxumuş', wrong: 'cahil', wen: 'ignorant', def: 'having or showing great knowledge or learning' },
  { en: 'erudition', tr: 'dərin bilik', wrong: 'cahillik', wen: 'ignorance', def: 'the quality of having or showing great knowledge or learning' },
  { en: 'incisive', tr: 'iti', wrong: 'küt', wen: 'blunt', def: 'showing or suggesting an ability to think clearly, deeply and with insight' },
  { en: 'ingenious', tr: 'zirək', wrong: 'sadə', wen: 'simple', def: 'clever, original and inventive' },
  { en: 'ingenuity', tr: 'zirəklik', wrong: 'sadəlik', wen: 'simplicity', def: 'the quality of being clever, original and inventive' },
  { en: 'insightful', tr: 'dərin anlayışlı', wrong: 'səthi', wen: 'superficial', def: 'having or showing an accurate and deep understanding; perceptive' },
  { en: 'intuition', tr: 'intuisiya', wrong: 'məntiq', wen: 'logic', def: 'the ability to understand something immediately, without the need for conscious reasoning' },
  { en: 'judicious', tr: 'ağıllı', wrong: 'axmaq', wen: 'foolish', def: 'having, showing or done with good judgement or sense' },
  { en: 'luminous', tr: 'aydın', wrong: 'qaranlıq', wen: 'obscure', def: 'full of or shedding light; bright or shining' },
  { en: 'perspicacious', tr: 'iti ağıllı', wrong: 'küt', wen: 'obtuse', def: 'having a ready insight into and understanding of things' },
  { en: 'sagacious', tr: 'dərin ağıllı', wrong: 'sadə', wen: 'simple', def: 'having or showing keen mental discernment and good judgement' },
  { en: 'savant', tr: 'alim', wrong: 'cahil', wen: 'ignoramus', def: 'a person of profound or extensive learning; an erudite scholar' },
  { en: 'shrewd', tr: 'zirək', wrong: 'sadəlövh', wen: 'naive', def: 'having or showing sharp powers of judgement; astute' },
  { en: 'shrewdness', tr: 'zirəklik', wrong: 'sadəlik', wen: 'naivety', def: 'the quality of having or showing sharp powers of judgement' }
],

// ─────────────────────── QUIZ 49 — Intellect & Knowledge (2) ───────────────────────
[
  { en: 'to ascertain', tr: 'əmin olmaq', wrong: 'şübhə etmək', wen: 'doubt', def: 'to find something out for certain; make sure of' },
  { en: 'to debunk', tr: 'yalanını ifşa etmək', wrong: 'qəbul etmək', wen: 'accept', def: 'to expose the falseness or hollowness of a myth, idea or belief' },
  { en: 'to discern', tr: 'fərq etmək', wrong: 'qarışdırmaq', wen: 'confuse', def: 'to perceive or recognise something' },
  { en: 'to elucidate', tr: 'aydınlaşdırmaq', wrong: 'bulandırmaq', wen: 'obscure', def: 'to make something clear; to explain' },
  { en: 'to enumerate', tr: 'sadələmək', wrong: 'qarışdırmaq', wen: 'jumble', def: 'to mention a number of things one by one' },
  { en: 'to expound', tr: 'ətraflı izah etmək', wrong: 'qısaltmaq', wen: 'summarise', def: 'to present and explain a theory or idea systematically and in detail' },
  { en: 'to fathom', tr: 'anlamaq', wrong: 'anlamamaq', wen: 'misunderstand', def: 'to understand something difficult after much thought' },
  { en: 'to glean', tr: 'toplamaq', wrong: 'itirmək', wen: 'lose', def: 'to obtain information or extract something gradually and with difficulty' },
  { en: 'to postulate', tr: 'fərz etmək', wrong: 'sübut etmək', wen: 'prove', def: 'to suggest or assume the existence, fact or truth of something as a basis for reasoning, discussion or belief' },
  { en: 'to substantiate', tr: 'sübut etmək', wrong: 'yalanlamaq', wen: 'refute', def: 'to provide evidence to support or prove the truth of something' },
  { en: 'abstruse', tr: 'çətin anlaşılır', wrong: 'sadə', wen: 'simple', def: 'not easily understood; obscure' },
  { en: 'arcane', tr: 'gizli', wrong: 'açıq', wen: 'overt', def: 'understood by few; mysterious or secret' },
  { en: 'convoluted', tr: 'mürəkkəb', wrong: 'sadə', wen: 'straightforward', def: 'extremely complex and difficult to follow' },
  { en: 'didactic', tr: 'öyrədici', wrong: 'əyləncəli', wen: 'entertaining', def: 'intended to teach, particularly in having moral instruction as an ulterior motive' },
  { en: 'esoteric', tr: 'daxili', wrong: 'xarici', wen: 'exoteric', def: 'intended for or likely to be understood by only a small number of people with a specialised knowledge or interest' },
  { en: 'hypothetical', tr: 'fərzi', wrong: 'real', wen: 'actual', def: 'based on or serving as a hypothesis' },
  { en: 'recondite', tr: 'dərin', wrong: 'sadə', wen: 'simple', def: 'little known; abstruse' },
  { en: 'theoretical', tr: 'nəzəri', wrong: 'praktiki', wen: 'practical', def: 'concerned with or involving the theory of a subject or area of study rather than its practical application' },
  { en: 'to construe', tr: 'anlamaq', wrong: 'yanlış başa düşmək', wen: 'misinterpret', def: 'to interpret something in a particular way' },
  { en: 'to infer', tr: 'nəticə çıxarmaq', wrong: 'fakt', wen: 'fact', def: 'to deduce or conclude something from evidence and reasoning rather than from explicit statements' }
],

// ─────────────────────── QUIZ 50 — Appearance & Perception ───────────────────────
[
  { en: 'diaphanous', tr: 'şəffaf', wrong: 'qalın', wen: 'opaque', def: 'light, delicate and translucent' },
  { en: 'dishevelled', tr: 'dağınıq', wrong: 'səliqəli', wen: 'neat', def: 'untidy; disordered' },
  { en: 'emaciated', tr: 'arıqlamış', wrong: 'dolğun', wen: 'plump', def: 'abnormally thin and weak' },
  { en: 'ethereal', tr: 'havayi', wrong: 'kütləvi', wen: 'substantial', def: 'extremely delicate and light in a way that seems too perfect for this world' },
  { en: 'garish', tr: 'çox rəngli', wrong: 'sadə', wen: 'subdued', def: 'obtrusively bright and showy; lurid' },
  { en: 'grandiose', tr: 'təntənəli', wrong: 'sadə', wen: 'unpretentious', def: 'impressive or magnificent in appearance or style, especially pretentiously so' },
  { en: 'immaculate', tr: 'ləkəsiz', wrong: 'ləkəli', wen: 'stained', def: 'perfectly clean, neat or tidy' },
  { en: 'luminous', tr: 'işıqlı', wrong: 'qaranlıq', wen: 'dark', def: 'full of or shedding light; bright or shining' },
  { en: 'ornate', tr: 'bəzəkli', wrong: 'sadə', wen: 'plain', def: 'made in an intricate shape or decorated with complex patterns' },
  { en: 'ostentatious', tr: 'nümayişkar', wrong: 'sadə', wen: 'unpretentious', def: 'characterised by vulgar or pretentious display; designed to impress or attract notice' },
  { en: 'palatial', tr: 'saray kimi', wrong: 'adi', wen: 'humble', def: 'resembling a palace in being spacious and splendid' },
  { en: 'pallid', tr: 'solğun', wrong: 'rəngli', wen: 'vivid', def: 'pale, typically because of poor health' },
  { en: 'resplendent', tr: 'parlaq', wrong: 'solğun', wen: 'dull', def: 'attractive and impressive through being richly colourful or sumptuous' },
  { en: 'shoddy', tr: 'keyfiyyətsiz', wrong: 'keyfiyyətli', wen: 'superior', def: 'of poor quality' },
  { en: 'silhouette', tr: 'siluet', wrong: 'tam görünüş', wen: 'full view', def: 'the dark shape and outline of someone or something visible against a lighter background' },
  { en: 'sombre', tr: 'qaranlıq', wrong: 'parlaq', wen: 'bright', def: 'dark or dull in colour or tone' },
  { en: 'splendour', tr: 'təntənə', wrong: 'sadəlik', wen: 'simplicity', def: 'magnificent and splendid appearance; grandeur' },
  { en: 'stately', tr: 'təntənəli', wrong: 'adi', wen: 'humble', def: 'having a grand and dignified or imposing appearance or manner' },
  { en: 'tawdry', tr: 'ucuz və bəzəkli', wrong: 'zərif', wen: 'elegant', def: 'showy but cheap and of poor quality' },
  { en: 'visage', tr: 'üz ifadəsi', wrong: 'arxa', wen: 'rear', def: 'a person’s face, with reference to the form or features of the face' }
],
      
      // ─────────────────────── QUIZ 51 — Indifference & Detachment ───────────────────────
[
  { en: 'aloof', tr: 'kənarda duran', wrong: 'ünsiyyətcil', wen: 'sociable', def: 'not friendly or forthcoming; cool and distant' },
  { en: 'apathetic', tr: 'laqeyd', wrong: 'həvəsli', wen: 'enthusiastic', def: 'showing or feeling no interest, enthusiasm or concern' },
  { en: 'detachment', tr: 'emosional uzaqlıq', wrong: 'emosional yaxınlıq', wen: 'emotional involvement', def: 'a state of being objective or aloof' },
  { en: 'diffident', tr: 'özünə inamsız', wrong: 'özünə inamlı', wen: 'self-confident', def: 'modest or shy because of a lack of self-confidence' },
  { en: 'disinterested', tr: 'laqeyd', wrong: 'maraqlı', wen: 'interested', def: 'not influenced by considerations of personal advantage' },
  { en: 'dispassionate', tr: 'emosiyasız', wrong: 'emosional', wen: 'emotional', def: 'not influenced by strong emotion, and therefore able to be rational and impartial' },
  { en: 'impassive', tr: 'hisssiz', wrong: 'hissli', wen: 'expressive', def: 'not feeling or showing emotion' },
  { en: 'indifference', tr: 'laqeydlik', wrong: 'maraq', wen: 'interest', def: 'lack of interest, concern or sympathy' },
  { en: 'indifferent', tr: 'laqeyd', wrong: 'maraqlı', wen: 'interested', def: 'having no particular interest or sympathy; unconcerned' },
  { en: 'insouciant', tr: 'qayğısız', wrong: 'qayğıkeş', wen: 'concerned', def: 'casually unconcerned' },
  { en: 'lackadaisical', tr: 'tənbəl və laqeyd', wrong: 'çalışqan', wen: 'diligent', def: 'lacking enthusiasm and determination; carelessly lazy' },
  { en: 'languid', tr: 'sölgün', wrong: 'enerjili', wen: 'vigorous', def: 'lacking energy or vitality; weak' },
  { en: 'nonchalance', tr: 'qayğısızlıq', wrong: 'narahatlıq', wen: 'anxiety', def: 'the state of being casually calm and relaxed' },
  { en: 'nonchalant', tr: 'qayğısız', wrong: 'narahat', wen: 'anxious', def: 'feeling or appearing casually calm and relaxed; not displaying anxiety, interest or enthusiasm' },
  { en: 'phlegmatic', tr: 'sakit və laqeyd', wrong: 'həyəcanlı', wen: 'excitable', def: 'having an unemotional and stolidly calm disposition' },
  { en: 'placid', tr: 'sakit', wrong: 'həyəcanlı', wen: 'agitated', def: 'not easily upset or excited; calm' },
  { en: 'reticent', tr: 'danıqmaz', wrong: 'danışqan', wen: 'talkative', def: 'not revealing one’s thoughts or feelings readily' },
  { en: 'stoic', tr: 'dözümlü', wrong: 'həssas', wen: 'emotional', def: 'enduring pain or hardship without showing one’s feelings or complaining' },
  { en: 'taciturn', tr: 'az danışan', wrong: 'çox danışan', wen: 'loquacious', def: 'reserved or uncommunicative in speech; saying little' },
  { en: 'disaffection', tr: 'narazılıq', wrong: 'razılıq', wen: 'satisfaction', def: 'a feeling of being disappointed with or not satisfied with someone or something' }
],

// ─────────────────────── QUIZ 52 — Brevity, Precision & Style ───────────────────────
[
  { en: 'brevity', tr: 'qısalıq', wrong: 'uzunluq', wen: 'prolixity', def: 'concise and exact use of words in writing or speech' },
  { en: 'candour', tr: 'açıqlıq', wrong: 'gizlətmə', wen: 'deception', def: 'the quality of being open and honest in expression; frankness' },
  { en: 'cogent', tr: 'inandırıcı', wrong: 'zəif', wen: 'weak', def: 'clear, logical and convincing' },
  { en: 'concise', tr: 'qısa və dəqiq', wrong: 'uzun və dolaşıq', wen: 'verbose', def: 'giving a lot of information clearly and in few words; brief but comprehensive' },
  { en: 'eloquent', tr: 'diləbər', wrong: 'diləbərsiz', wen: 'inarticulate', def: 'fluent or persuasive in speaking or writing' },
  { en: 'finesse', tr: 'incəlik', wrong: 'kobudluq', wen: 'coarseness', def: 'refinement or delicacy of workmanship, structure or texture' },
  { en: 'laconic', tr: 'az sözlü', wrong: 'çox sözlü', wen: 'verbose', def: 'using very few words' },
  { en: 'lucid', tr: 'aydın', wrong: 'bulanıq', wen: 'obscure', def: 'expressed clearly; easy to understand' },
  { en: 'pithy', tr: 'dərin mənalı qısa', wrong: 'səthi', wen: 'superficial', def: 'concisely and forcefully expressive' },
  { en: 'poise', tr: 'sakitlik və incəlik', wrong: 'həyəcan', wen: 'agitation', def: 'graceful and elegant bearing in a person' },
  { en: 'succinct', tr: 'qısa və dəqiq', wrong: 'uzun', wen: 'verbose', def: 'briefly and clearly expressed' },
  { en: 'terse', tr: 'qısa və kəskin', wrong: 'uzun', wen: 'verbose', def: 'sparing in the use of words; abrupt' },
  { en: 'trenchant', tr: 'iti və dəqiq', wrong: 'zəif', wen: 'weak', def: 'vigorous or incisive in expression or style' },
  { en: 'adroit', tr: 'bacarıqlı', wrong: 'bacarıqsız', wen: 'clumsy', def: 'clever or skilful in using the hands or mind' },
  { en: 'dexterous', tr: 'mahır', wrong: 'bacarıqsız', wen: 'inept', def: 'showing or having skill, especially with the hands' },
  { en: 'fastidious', tr: 'tələbkar', wrong: 'biganə', wen: 'indifferent', def: 'very attentive to and concerned about accuracy and detail' },
  { en: 'meticulous', tr: 'dəqiq', wrong: 'səhlənkar', wen: 'careless', def: 'showing great attention to detail; very careful and precise' },
  { en: 'painstaking', tr: 'zəhmətkeş', wrong: 'tənbəl', wen: 'lazy', def: 'done with or employing great care and thoroughness' },
  { en: 'punctilious', tr: 'çox dəqiq', wrong: 'səhlənkar', wen: 'careless', def: 'showing great attention to detail or correct behaviour' },
  { en: 'rigorous', tr: 'sərt və dəqiq', wrong: 'yumşaq', wen: 'lenient', def: 'extremely thorough, exhaustive or accurate' }
],

// ─────────────────────── QUIZ 53 — Fate, Prophecy & the Supernatural ───────────────────────
[
  { en: 'apparition', tr: 'xəyalət', wrong: 'real insan', wen: 'corporeal being', def: 'a ghost or ghostlike image of a person' },
  { en: 'augury', tr: 'fal', wrong: 'elmi proqnoz', wen: 'scientific prediction', def: 'a sign or omen' },
  { en: 'divination', tr: 'falçılıq', wrong: 'elmi proqnoz', wen: 'scientific prediction', def: 'the practice of seeking knowledge of the future or the unknown by supernatural means' },
  { en: 'harbinger', tr: 'xəbərçi', wrong: 'son', wen: 'conclusion', def: 'a person or thing that announces or signals the approach of another' },
  { en: 'horoscope', tr: 'horoskop', wrong: 'elmi proqnoz', wen: 'scientific forecast', def: 'a forecast of a person’s future based on the relative positions of the planets and stars at the time of their birth' },
  { en: 'incarnation', tr: 'təcəssüm', wrong: 'adi insan', wen: 'ordinary person', def: 'a person who embodies in the flesh a deity, spirit or abstract quality' },
  { en: 'omen', tr: 'əlamət', wrong: 'adi hadisə', wen: 'ordinary occurrence', def: 'an event regarded as a portent of good or evil' },
  { en: 'oracle', tr: 'kahin', wrong: 'adi danışan', wen: 'ordinary speaker', def: 'a person or thing regarded as an infallible authority or guide' },
  { en: 'portent', tr: 'xəbərdarlıq əlaməti', wrong: 'adi hadisə', wen: 'ordinary event', def: 'a sign or warning that something, especially something momentous or calamitous, is likely to happen' },
  { en: 'portentous', tr: 'əhəmiyyətli', wrong: 'adi', wen: 'ordinary', def: 'of or like a portent; ominous' },
  { en: 'premonition', tr: 'ön hiss', wrong: 'xatirə', wen: 'recollection', def: 'a strong feeling that something is about to happen, especially something unpleasant' },
  { en: 'prophecy', tr: 'peyğəmbərlik', wrong: 'yalan', wen: 'falsehood', def: 'a prediction of what will happen in the future' },
  { en: 'reincarnation', tr: 'yenidən doğuş', wrong: 'ölüm', wen: 'death', def: 'the rebirth of a soul in a new body' },
  { en: 'resurrection', tr: 'dirilmə', wrong: 'ölüm', wen: 'demise', def: 'the action or fact of resurrecting or being resurrected' },
  { en: 'seer', tr: 'gələcəyi görən', wrong: 'kor', wen: 'blind', def: 'a person who is supposed to be able, through supernatural insight, to see what the future holds' },
  { en: 'specter', tr: 'xəyalət', wrong: 'real insan', wen: 'corporeal being', def: 'a ghost or phantom' },
  { en: 'talisman', tr: 'talisman', wrong: 'adi əşya', wen: 'mundane object', def: 'an object, typically an inscribed ring or stone, that is thought to have magic powers and to bring good luck' },
  { en: 'witchcraft', tr: 'cadugərlik', wrong: 'elmi', wen: 'science', def: 'the practice of magic, especially black magic; the use of spells and the invocation of spirits' },
  { en: 'zodiac', tr: 'bürc', wrong: 'adi təqvim', wen: 'ordinary calendar', def: 'a belt of the heavens within about 8° either side of the ecliptic, including all apparent positions of the sun, moon and most of the planets' },
  { en: 'alchemy', tr: 'əlkimya', wrong: 'kimya', wen: 'chemistry', def: 'the medieval forerunner of chemistry, concerned with the transmutation of matter, especially into gold' }
],

// ─────────────────────── QUIZ 54 — Memory, Legacy & History ───────────────────────
[
  { en: 'antecedent', tr: 'əvvəlki', wrong: 'sonrakı', wen: 'subsequent', def: 'a thing or event that existed before or logically precedes another' },
  { en: 'antiquity', tr: 'qədimlik', wrong: 'müasirlik', wen: 'modernity', def: 'the ancient past, especially the period before the Middle Ages' },
  { en: 'chronicle', tr: 'salnamə', wrong: 'hekayə', wen: 'fiction', def: 'a factual written account of important or noteworthy events in the order of their occurrence' },
  { en: 'commemoration', tr: 'anım', wrong: 'unutma', wen: 'forgetting', def: 'the action or fact of remembering and showing respect for someone or something' },
  { en: 'dynasty', tr: 'sülalə', wrong: 'tək nəsil', wen: 'single generation', def: 'a line of hereditary rulers of a country' },
  { en: 'epoch', tr: 'dövr', wrong: 'an', wen: 'moment', def: 'a period of time in history or a person’s life, typically one marked by notable events or particular characteristics' },
  { en: 'epitaph', tr: 'qəbir daşı yazısı', wrong: 'adi yazı', wen: 'ordinary inscription', def: 'a phrase or form of words written in memory of a person who has died, especially as an inscription on a tombstone' },
  { en: 'heirloom', tr: 'ailə yadigarı', wrong: 'yeni əşya', wen: 'new item', def: 'a valuable object that has belonged to a family for several generations' },
  { en: 'legacy', tr: 'miras', wrong: 'yeni şey', wen: 'innovation', def: 'an amount of money or property left to someone in a will' },
  { en: 'lineage', tr: 'nəsil', wrong: 'qohumsuzluq', wen: 'rootlessness', def: 'direct descent from an ancestor; ancestry or pedigree' },
  { en: 'memento', tr: 'yadigar', wrong: 'adi əşya', wen: 'ordinary object', def: 'an object kept as a reminder of a person or event' },
  { en: 'memorabilia', tr: 'yadigarlar', wrong: 'adi şeylər', wen: 'ordinary items', def: 'objects that are collected because they are connected with a person or event of particular interest' },
  { en: 'posterity', tr: 'gələcək nəsillər', wrong: 'keçmiş', wen: 'the past', def: 'all future generations of people' },
  { en: 'provenance', tr: 'mənşə', wrong: 'naməlum mənşə', wen: 'unknown origin', def: 'the origin or earliest form of something' },
  { en: 'relic', tr: 'qalıq', wrong: 'yeni şey', wen: 'innovation', def: 'an object surviving from an earlier time, especially one of historical or sentimental interest' },
  { en: 'remembrance', tr: 'xatirə', wrong: 'unutma', wen: 'forgetting', def: 'the action of remembering something' },
  { en: 'renaissance', tr: 'dirçəliş', wrong: 'tənəzzül', wen: 'decline', def: 'a revival of or renewed interest in something' },
  { en: 'remnant', tr: 'qalıq', wrong: 'tamam', wen: 'whole', def: 'a small remaining quantity of something' },
  { en: 'vestige', tr: 'iz', wrong: 'tam itki', wen: 'complete loss', def: 'a trace of something that is disappearing or no longer exists' },
  { en: 'retrospection', tr: 'keçmişə baxış', wrong: 'gələcəyə baxış', wen: 'prospection', def: 'the action of looking back on or reviewing past events or situations' }
],

// ─────────────────────── QUIZ 55 — Abundance & Scarcity ───────────────────────
[
  { en: 'bounty', tr: 'bolluq', wrong: 'yoxsulluq', wen: 'penury', def: 'a generous amount of something' },
  { en: 'copious', tr: 'bol', wrong: 'az', wen: 'meagre', def: 'abundant in supply or quantity' },
  { en: 'cornucopia', tr: 'bolluq rəmzi', wrong: 'çatışmazlıq', wen: 'scarcity', def: 'an abundant supply of good things' },
  { en: 'dearth', tr: 'çatışmazlıq', wrong: 'bolluq', wen: 'abundance', def: 'a scarcity or lack of something' },
  { en: 'depleted', tr: 'tükənmiş', wrong: 'dolu', wen: 'replenished', def: 'having used up or reduced the supply of something' },
  { en: 'exuberant', tr: 'bol və canlı', wrong: 'az', wen: 'meagre', def: 'lively and cheerful; full of energy and excitement' },
  { en: 'famine', tr: 'aclıq', wrong: 'bolluq', wen: 'abundance', def: 'extreme scarcity of food' },
  { en: 'meagre', tr: 'az', wrong: 'bol', wen: 'copious', def: 'lacking in quantity or quality; deficient' },
  { en: 'myriad', tr: 'çoxlu', wrong: 'az', wen: 'few', def: 'a countless or extremely large number of people or things' },
  { en: 'paucity', tr: 'çatışmazlıq', wrong: 'bolluq', wen: 'abundance', def: 'the presence of something only in small or insufficient quantities or amounts' },
  { en: 'pittance', tr: 'cüzi miqdar', wrong: 'bol miqdar', wen: 'fortune', def: 'a very small or inadequate amount of money' },
  { en: 'plethora', tr: 'həddindən artıq', wrong: 'çatışmazlıq', wen: 'scarcity', def: 'a large or excessive amount of something' },
  { en: 'profusion', tr: 'bolluq', wrong: 'azlıq', wen: 'scarcity', def: 'an abundance or large quantity of something' },
  { en: 'scarcity', tr: 'çatışmazlıq', wrong: 'bolluq', wen: 'abundance', def: 'the state of being scarce or in short supply; shortage' },
  { en: 'smattering', tr: 'az miqdar', wrong: 'bol miqdar', wen: 'plethora', def: 'a small amount of something' },
  { en: 'sparse', tr: 'seyrək', wrong: 'sıx', wen: 'dense', def: 'thinly dispersed or scattered' },
  { en: 'surfeit', tr: 'həddindən artıq', wrong: 'çatışmazlıq', wen: 'paucity', def: 'an excessive amount of something' },
  { en: 'teeming', tr: 'dolu', wrong: 'boş', wen: 'barren', def: 'full of or swarming with' },
  { en: 'want', tr: 'yoxsulluq', wrong: 'bolluq', wen: 'plenty', def: 'a lack or deficiency of something' },
  { en: 'penury', tr: 'yoxsulluq', wrong: 'var-dövlət', wen: 'opulence', def: 'extreme poverty or destitution' }
],
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
