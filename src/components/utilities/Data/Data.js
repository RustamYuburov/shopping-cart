const booksData = [
  {
    ISBN: 9780552159722,
    title: 'Deception point',
    author: 'Dan Brown',
    summary:
      'When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg',
    price: {
      currency: 'EUR',
      value: 9.99,
      displayValue: '9.99',
    },
  },

  {
    ISBN: 9781841499789,
    title: 'Bloodfire Quest',
    author: 'Terry Brooks',
    summary:
      'The adventure that started in Wards of Faerie takes a thrilling new turn, in the second novel of New York Times bestselling author Terry Brooks’s brand-new trilogy—The Dark Legacy of Shannara! The quest for the long-lost Elfstones has drawn the leader of the Druid order and her followers into the hellish dimension known as the Forbidding, where the most dangerous creatures banished from the Four Lands are imprisoned. Now the hunt for the powerful talismans that can save their world has become a series of great challenges: a desperate search for kidnapped comrades, a relentless battle against unspeakable predators, and a grim race to escape the Forbidding alive. But though freedom is closer than they know, it may come at a terrifying price. Back in the village of Arborlon, the mystical, sentient tree that maintains the barrier between the Four Lands and the Forbidding is dying. And with each passing day, as the breach between the two worlds grows larger, the threat of the evil eager to spill forth and wreak havoc grows more dire. The only hope lies with a young Druid, faced with a staggering choice: cling to the life she cherishes or combat an army of darkness by making the ultimate sacrifice.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/0/7/9200000009027007.jpg',
    price: {
      currency: 'EUR',
      value: 24.5,
      displayValue: '24.50',
    },
  },
  {
    ISBN: 9781409117933,
    title: 'A Week in Winter',
    author: 'Maeve Binchy',
    summary:
      "Stoneybridge is full of holiday-makers in summer, its beaches are full of buckets and spades and sandcastles; but in winter it's cold and wild. Few choose to walk along the fine sands, the big round pebbles and the exposed rocky promontories that make up the wind-swept Atlantic coastline. Those who do can't help but see Stone House, the big house on the cliff; once falling into disrepair it is now a beautiful hotel specialising in winter holidays. Its big, warm kitchen, its open log-fires and its elegant bedrooms provide a welcome few can resist, whatever their reasons for coming. Henry and Nicola are burdened with a terrible secret, while cheerful nurse Winnie finds herself on the holiday from hell. John has arrived on an impulse after he missed a flight at Shannon; eccentric Freda claims to be a psychic - and a part-time hairdresser. Then there's Nora, a silent watchful older woman who seems ready to disapprove at any moment.. A Week in Winter is full of Maeve's trademark warmth, humour and characters you want to spend time with.",
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg',
    price: {
      currency: 'EUR',
      value: 11.99,
      displayValue: '11.99',
    },
  },
  {
    ISBN: 9780751548525,
    title: 'Safe Haven',
    author: 'Nicholas Sparks',
    summary:
      'Love hurts. There is nothing as painful as heartbreak. But in order to learn to love again you must learn to trust again. When a mysterious young woman named Katie appears in the small town of Southport, her sudden arrival raises questions about her past. Beautiful yet unassuming, Katie is determined to avoid forming personal ties until a series of events draws her into two reluctant relationships. Despite her reservations, Katie slowly begins to let down her guard, putting down roots in the close-knit community. But even as Katie starts to fall in love, she struggles with the dark secret that still haunts her ...',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/0/5/2/3/9200000010683250.jpg',
    price: {
      currency: 'EUR',
      value: 33.8,
      displayValue: '33.80',
    },
  },
  {
    ISBN: 9780751548556,
    title: 'The lucky one',
    author: 'Nicholas Sparks',
    summary:
      'Do you believe in lucky charms? While in Iraq, U.S. Marine Logan Thibault finds a photo, half-buried in the dirt, of a woman. He carries it in his pocket, and from then on his luck begins to change. Back home, Logan is haunted by thoughts of war. Over time, he becomes convinced that the woman in the photo holds the key to his destiny. So he finds the vulnerable and loving Beth and a passionate romance begins. But Logan battles with the one secret he has kept from Beth: how he found her in the first place. And it is a secret that could utterly destroy everything they love ...',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/3/7/1001004011797307.jpg',
    price: {
      currency: 'EUR',
      value: 9.8,
      displayValue: '9.80',
    },
  },
  {
    ISBN: 9780751542974,
    title: 'Best of me',
    author: 'Nicholas Sparks',
    summary:
      'The new epic love story by the bestselling author of The Last Song and The Notebook. They were teenage sweethearts from opposite sides of the tracks - with a passion that would change their lives for ever. But life would force them apart. Years later, the lines they had drawn between past and present are about to slip.. Called back to their hometown for the funeral of the mentor who once gave them shelter when they needed it most, they are faced with each other once again and forced to confront the paths they chose. Can true love ever rewrite the past?',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/4/6/2/8/9200000001208264.jpg',
    price: {
      currency: 'EUR',
      value: 13.8,
      displayValue: '13.80',
    },
  },
  {
    ISBN: 9789024561858,
    title: 'Inferno',
    author: 'Dan Brown',
    summary:
      "Harvard professor of symbology Robert Langdon awakens in an Italian hospital, disoriented and with no recollection of the past thirty-six hours, including the origin of the macabre object hidden in his belongings. With a relentless female assassin trailing them through Florence, he and his resourceful doctor, Sienna Brooks, are forced to flee. Embarking on a harrowing journey, they must unravel a series of codes, which are the work of a brilliant scientist whose obsession with the end of the world is matched only by his passion for one of the most influential masterpieces ever written, Dante Alighieri's The Inferno.",
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/8/9/9/9/9200000010839998.jpg',
    price: {
      currency: 'EUR',
      value: 17.49,
      displayValue: '17.49',
    },
  },
  {
    ISBN: 9789022558027,
    title: 'The Measure of the Magic: Legends of Shannara',
    author: 'Terry Brooks',
    summary:
      'For five hundred years, the survivors of the Great Wars lived peacefully in a valley sanctuary shielded by powerful magic from the dangerous outside world. But the enchanted barriers have crumbled, and the threat of annihilation looms large once more. As he lay dying, Sider Ament, bearer of the last black staff and protector of the valley, gave stewardship of the powerful talisman to the young Tracker Panterra Qu. Now the newly anointed Knight of the Word must take up the battle against evil wherever it threatens: from without, where an army of bloodthirsty Trolls is massing for invasion; and from within, where the Elf king of Arborlon has been murdered, his daughter stands accused, and a heinous conspiracy is poised to subjugate the kingdom. But even these affairs will pale beside the most harrowing menace Panterra is destined to confront—a nameless, merciless agent of darkness on a relentless mission: to claim the last black staff . . . and the life of whoever wields it.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg',
    price: {
      currency: 'EUR',
      value: 17.5,
      displayValue: '17.50',
    },
  },
  {
    ISBN: 9781447229902,
    title: 'The Hit',
    author: 'David Baldacci',
    summary:
      'The trap is set. Failure is not an option. When government hit man Will Robie is given his next target he knows he’s about to embark on his toughest mission yet. He is tasked with killing one of their own, following evidence to suggest that fellow assassin Jessica Reel has been turned. She’s leaving a trail of death in her wake including her handler. The trap is set. To send a killer to catch a killer. But what happens when you can’t trust those who have access to the nation’s most secret intelligence?',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/6/5/2/3/9200000009123256.jpg',
    price: {
      currency: 'EUR',
      value: 21.99,
      displayValue: '21.99',
    },
  },
  {
    ISBN: 9780552778459,
    title: 'In One Person',
    author: 'John Irving',
    summary:
      "A compelling novel of desire, secrecy, and sexual identity, In One Person is a story of unfulfilled love—tormented, funny, and affecting—and an impassioned embrace of our sexual differences. Billy, the bisexual narrator and main character of In One Person, tells the tragicomic story (lasting more than half a century) of his life as a “sexual suspect,” a phrase first used by John Irving in 1978 in his landmark novel of “terminal cases,” The World According to Garp. His most political novel since The Cider House Rules and A Prayer for Owen Meany, John Irving’s In One Person is a poignant tribute to Billy’s friends and lovers—a theatrical cast of characters who defy category and convention. Not least, In One Person is an intimate and unforgettable portrait of the solitariness of a bisexual man who is dedicated to making himself 'worthwhile.'",
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/3/4/5/9/9200000009409543.jpg',
    price: {
      currency: 'EUR',
      value: 25,
      displayValue: '25.00',
    },
  },
  {
    ISBN: 9789022556627,
    title: 'Jarka Ruus',
    author: 'Terry Brooks',
    summary:
      'Twenty years have passed since Grianne Ohmsford denounced her former life as the dreaded Ilse Witch. Fulfilling the destiny predicted for her, she has established the Third Druid Council and dedicated herself to its goals of peace, harmony among the races, and defense of the Four Lands. But despite her devotion to the greater good as Ard Rhys, the High Druid of Paranor, Grianne still has bitter enemies. Even her few allies—chief among them her trusted servant Tagwen—know of the plots against her. But they could never anticipate the sudden, ominous disappearance of the Ard Rhys, in the dead of night and without a trace. Now Tagwen joins Grianne’s brave young nephew, Pen Ohmsford, and the wise, powerful elf Ahren Elessedil on a desperate and dangerous mission of search and rescue—to deliver the High Druid of Shannara from an unspeakable fate.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/7/8/9/9/1001004011269987.jpg',
    price: {
      currency: 'EUR',
      value: 18.95,
      displayValue: '18.95',
    },
  },
  {
    ISBN: 9781408842423,
    title: 'And the Mountains Echoed',
    author: 'Khaled Hosseini',
    summary:
      "And the Mountains Echoed is a deeply moving story about how we love, how we take care of one another and how the choices we make resonate through generations. With profound wisdom, depth, insight and compassion 'and moving from Kabul, to Paris, to San Francisco, to the Greek island of Tinos' Hosseini writes about the bonds that define us and shape our lives, the ways that we help our loved ones in need and how we are often surprised by the people closest to us. Six years in the writing, Khaled Hosseini says of his new book: 'My earlier novels were, at heart, tales of fatherhood and motherhood. My new novel is a multi-generational family story as well, this time revolving around brothers and sisters, and the ways in which they love, wound, betray, honour and sacrifice for each other.'",
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/0/6/0/3/9200000010223060.jpg',
    price: {
      currency: 'EUR',
      value: 8.99,
      displayValue: '8.99',
    },
  },
];
export default booksData;
