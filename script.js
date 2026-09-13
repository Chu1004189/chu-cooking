/* =================================
   OPENING CONTROL
================================= */

const opening = document.getElementById("opening");

if (sessionStorage.getItem("openingPlayed")) {
  opening.style.display = "none";
} else {
  sessionStorage.setItem("openingPlayed", "true");
}

/* =================================
   RECIPES DATA
================================= */

const recipes = [

  {
    name:"海老塩焼きそば",
    image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    tags:["麺類","海鮮","ガッツリ"],
    searchText:"海老 塩 焼きそば 麺 もやし キャベツ",
    gas:1,
    ingredients:[
      ["中華麺","2玉"],
      ["むき海老","120g"],
      ["キャベツ","120g"],
      ["もやし","100g"],
      ["ごま油","10g"],
      ["鶏ガラスープの素","5g"],
      ["塩","3g"],
      ["黒こしょう","少々"],
      ["にんにく","5g"]
    ],
    steps:[
      "フライパンにごま油とにんにくを入れて中火で熱する。",
      "海老を加えて炒め、色が変わったらキャベツともやしを加える。",
      "中華麺を加えてほぐしながら炒める。",
      "鶏ガラスープの素、塩、黒こしょうで味を整える。"
    ]
  },

  {
    name:"鶏むね肉のレモン醤油ソテー",
    image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    tags:["鶏肉","さっぱり","おかず"],
    searchText:"鶏むね肉 レモン 醤油 ソテー",
    gas:1,
    ingredients:[
      ["鶏むね肉","300g"],
      ["塩","2g"],
      ["黒こしょう","少々"],
      ["薄力粉","15g"],
      ["油","10g"],
      ["醤油","15g"],
      ["レモン汁","15g"],
      ["砂糖","5g"]
    ],
    steps:[
      "鶏むね肉をそぎ切りにして、塩、黒こしょうをまぶす。",
      "薄力粉を薄くまぶす。",
      "フライパンに油を熱し、鶏肉を両面焼く。",
      "醤油、レモン汁、砂糖を加えて全体に絡める。"
    ]
  },

  {
    name:"とろ旨麻婆なす",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags:["なす","中華","ご飯"],
    searchText:"麻婆なす なす 豚ひき肉 豆板醤 甜麺醤",
    gas:1,
    ingredients:[
      ["冷凍なす","300g"],
      ["豚ひき肉","120g"],
      ["長ねぎ","50g"],
      ["にんにく","5g"],
      ["しょうが","5g"],
      ["豆板醤","5g"],
      ["甜麺醤","15g"],
      ["醤油","10g"],
      ["鶏ガラスープの素","3g"],
      ["水","100g"],
      ["花椒","少々"],
      ["ごま油","5g"]
    ],
    steps:[
      "フライパンにごま油、にんにく、しょうが、豆板醤を入れて炒める。",
      "豚ひき肉を加えて炒める。",
      "甜麺醤と醤油を加える。",
      "なすと水、鶏ガラスープの素を加えて煮る。",
      "仕上げに長ねぎと花椒を加える。"
    ]
  },

  {
    name:"炊飯器スパイスチキンライス",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    tags:["ご飯","鶏肉","スパイス"],
    searchText:"炊飯器 チキンライス カレー粉 クミン ヨーグルト",
    appliance:"炊飯器",
    note:"通常炊飯でOK",
    ingredients:[
      ["米","2合"],
      ["鶏もも肉","250g"],
      ["玉ねぎ","100g"],
      ["トマト","100g"],
      ["ヨーグルト","50g"],
      ["カレー粉","8g"],
      ["クミン","2g"],
      ["黒こしょう","1g"],
      ["にんにく","5g"],
      ["しょうが","5g"],
      ["レモン汁","10g"],
      ["塩","5g"]
    ],
    steps:[
      "米を研いで炊飯器に入れる。",
      "鶏肉にヨーグルト、カレー粉、クミン、塩、にんにく、しょうがを絡める。",
      "米の上に玉ねぎ、トマト、鶏肉をのせる。",
      "通常通り炊飯する。",
      "炊き上がったら黒こしょうとレモン汁を加える。"
    ]
  },

  {
    name:"とろけるチーズの焼きナポリタン",
    image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    tags:["パスタ","チーズ","洋食"],
    searchText:"ナポリタン パスタ チーズ ケチャップ ウインナー",
    gas:1,
    appliance:"オーブン",
    note:"チーズに焼き色がつくまで焼く",
    ingredients:[
      ["スパゲッティ","200g"],
      ["玉ねぎ","100g"],
      ["ピーマン","50g"],
      ["ウインナー","80g"],
      ["ケチャップ","80g"],
      ["ウスターソース","10g"],
      ["バター","10g"],
      ["チーズ","70g"],
      ["塩","2g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "スパゲッティを表示時間通り茹でる。",
      "フライパンで玉ねぎ、ピーマン、ウインナーを炒める。",
      "ケチャップとウスターソースを加える。",
      "スパゲッティとバターを加えて炒め合わせる。",
      "耐熱皿に入れてチーズをのせ、焼き色がつくまで焼く。"
    ]
  },

  {
    name:"ごろごろ野菜サラダ",
    image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
    tags:["サラダ","野菜","さっぱり"],
    searchText:"サラダ 野菜 トマト きゅうり レタス",
    ingredients:[
      ["レタス","100g"],
      ["トマト","100g"],
      ["きゅうり","80g"],
      ["玉ねぎ","30g"],
      ["オリーブオイル","15g"],
      ["酢","15g"],
      ["砂糖","5g"],
      ["塩","2g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "野菜を食べやすい大きさに切る。",
      "オリーブオイル、酢、砂糖、塩、黒こしょうを混ぜる。",
      "野菜とドレッシングを和える。"
    ]
  },

  {
    name:"豚キムチ丼",
    image:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85",
    tags:["丼","豚肉","辛い"],
    searchText:"豚キムチ 豚肉 キムチ 丼 ご飯",
    gas:1,
    ingredients:[
      ["豚バラ肉","150g"],
      ["キムチ","120g"],
      ["玉ねぎ","80g"],
      ["ごま油","5g"],
      ["醤油","10g"],
      ["砂糖","5g"],
      ["ご飯","300g"],
      ["青ねぎ","適量"]
    ],
    steps:[
      "フライパンにごま油を熱し、豚肉を炒める。",
      "玉ねぎを加えて炒める。",
      "キムチを加える。",
      "醤油と砂糖を加えて炒め合わせる。",
      "ご飯に盛り、青ねぎをのせる。"
    ]
  },

  {
    name:"照り焼きチキン丼",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags:["丼","鶏肉","甘辛"],
    searchText:"照り焼き チキン 鶏肉 丼 醤油 みりん",
    gas:1,
    ingredients:[
      ["鶏もも肉","250g"],
      ["醤油","20g"],
      ["みりん","20g"],
      ["砂糖","10g"],
      ["酒","15g"],
      ["ご飯","300g"],
      ["青ねぎ","適量"]
    ],
    steps:[
      "鶏肉の余分な脂を取り、食べやすく切る。",
      "フライパンで鶏肉を皮目から焼く。",
      "裏返して火を通す。",
      "醤油、みりん、砂糖、酒を加えて煮絡める。",
      "ご飯に盛る。"
    ]
  },

  {
    name:"ねぎ塩豚カルビ丼",
    image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    tags:["丼","豚肉","ガッツリ"],
    searchText:"ねぎ塩 豚カルビ 豚肉 丼 レモン",
    gas:1,
    ingredients:[
      ["豚バラ肉","180g"],
      ["長ねぎ","80g"],
      ["ごま油","10g"],
      ["レモン汁","10g"],
      ["鶏ガラスープの素","3g"],
      ["塩","2g"],
      ["黒こしょう","少々"],
      ["ご飯","300g"]
    ],
    steps:[
      "長ねぎをみじん切りにする。",
      "ごま油、レモン汁、鶏ガラスープの素、塩、黒こしょうと混ぜる。",
      "豚肉をフライパンで焼く。",
      "ねぎ塩だれを加えて軽く炒める。",
      "ご飯に盛る。"
    ]
  },

  {
    name:"鮭のバター醤油焼き",
    image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
    tags:["魚","和食","バター"],
    searchText:"鮭 バター 醤油 焼き魚",
    gas:1,
    ingredients:[
      ["鮭","2切れ"],
      ["塩","2g"],
      ["薄力粉","10g"],
      ["バター","15g"],
      ["醤油","15g"],
      ["レモン汁","5g"]
    ],
    steps:[
      "鮭に塩を振り、薄力粉を薄くまぶす。",
      "フライパンにバターを熱する。",
      "鮭を両面焼く。",
      "醤油とレモン汁を加えて絡める。"
    ]
  },

  {
    name:"さば味噌煮",
    image:"https://images.unsplash.com/photo-1534256958597-7fe685cbd745?auto=format&fit=crop&w=900&q=85",
    tags:["魚","和食","煮物"],
    searchText:"さば 味噌煮 味噌 生姜",
    gas:1,
    ingredients:[
      ["さば","2切れ"],
      ["味噌","35g"],
      ["酒","30g"],
      ["みりん","20g"],
      ["砂糖","15g"],
      ["醤油","5g"],
      ["しょうが","10g"],
      ["水","150g"]
    ],
    steps:[
      "鍋に水、酒、みりん、砂糖、しょうがを入れて煮立てる。",
      "さばを加える。",
      "落とし蓋をして煮る。",
      "味噌と醤油を加える。",
      "煮汁をかけながら煮詰める。"
    ]
  },

  {
    name:"豚しゃぶ冷やしうどん",
    image:"https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",
    tags:["麺類","豚肉","さっぱり"],
    searchText:"豚しゃぶ うどん 冷やし めんつゆ",
    gas:1,
    ingredients:[
      ["冷凍うどん","2玉"],
      ["豚しゃぶ肉","150g"],
      ["きゅうり","80g"],
      ["めんつゆ","50g"],
      ["水","100g"],
      ["ごま油","5g"],
      ["白ごま","5g"],
      ["ねぎ","適量"]
    ],
    steps:[
      "うどんを茹でて冷水で締める。",
      "豚肉を茹でて冷ます。",
      "きゅうりを細切りにする。",
      "めんつゆ、水、ごま油を混ぜる。",
      "うどんに具材をのせてつゆをかける。"
    ]
  },

  {
    name:"明太クリームパスタ",
    image:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    tags:["パスタ","クリーム","明太子"],
    searchText:"明太子 クリーム パスタ 豆乳 牛乳",
    gas:1,
    ingredients:[
      ["スパゲッティ","200g"],
      ["明太子","80g"],
      ["牛乳","150g"],
      ["生クリーム","50g"],
      ["バター","10g"],
      ["醤油","5g"],
      ["黒こしょう","少々"],
      ["刻み海苔","適量"]
    ],
    steps:[
      "スパゲッティを茹でる。",
      "フライパンに牛乳、生クリーム、バターを入れる。",
      "明太子を加える。",
      "茹でたパスタを加える。",
      "醤油と黒こしょうで味を整え、海苔をのせる。"
    ]
  },

  {
    name:"焼肉チャーハン",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    tags:["ご飯","肉","ガッツリ"],
    searchText:"焼肉 チャーハン 牛肉 ご飯",
    gas:1,
    ingredients:[
      ["ご飯","300g"],
      ["牛こま肉","100g"],
      ["卵","2個"],
      ["長ねぎ","50g"],
      ["焼肉のたれ","30g"],
      ["醤油","5g"],
      ["ごま油","5g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "牛肉を小さく切る。",
      "フライパンにごま油を熱し、牛肉を炒める。",
      "卵とご飯を加えて炒める。",
      "長ねぎを加える。",
      "焼肉のたれと醤油で味付けする。"
    ]
  },

  {
    name:"にんにく醤油チャーハン",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    tags:["ご飯","にんにく","ガッツリ"],
    searchText:"にんにく 醤油 チャーハン 卵",
    gas:1,
    ingredients:[
      ["ご飯","300g"],
      ["卵","2個"],
      ["長ねぎ","50g"],
      ["にんにく","10g"],
      ["醤油","15g"],
      ["ごま油","10g"],
      ["塩","2g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "フライパンにごま油とにんにくを入れる。",
      "卵を加えてすぐにご飯を加える。",
      "長ねぎを加えて炒める。",
      "塩、黒こしょう、醤油で味付けする。"
    ]
  },

  {
    name:"チーズ麻婆豆腐",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags:["豆腐","中華","チーズ"],
    searchText:"麻婆豆腐 チーズ 豆腐 豚ひき肉",
    gas:1,
    ingredients:[
      ["豆腐","300g"],
      ["豚ひき肉","100g"],
      ["長ねぎ","50g"],
      ["豆板醤","5g"],
      ["甜麺醤","15g"],
      ["醤油","10g"],
      ["鶏ガラスープの素","3g"],
      ["水","100g"],
      ["チーズ","50g"],
      ["ごま油","5g"]
    ],
    steps:[
      "ごま油で長ねぎ、豆板醤を炒める。",
      "豚ひき肉を加えて炒める。",
      "甜麺醤と醤油を加える。",
      "水、鶏ガラスープの素、豆腐を加える。",
      "最後にチーズを加えて溶かす。"
    ]
  },

  {
    name:"旨辛よだれ鶏",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    tags:["鶏肉","辛い","中華"],
    searchText:"よだれ鶏 鶏むね肉 ラー油 ごま",
    gas:1,
    ingredients:[
      ["鶏むね肉","300g"],
      ["醤油","20g"],
      ["酢","15g"],
      ["砂糖","8g"],
      ["ごま油","8g"],
      ["食べるラー油","15g"],
      ["白ごま","8g"],
      ["にんにく","5g"],
      ["しょうが","5g"],
      ["ねぎ","50g"]
    ],
    steps:[
      "鶏むね肉を茹でて火を通し、冷ます。",
      "醤油、酢、砂糖、ごま油、ラー油、にんにく、しょうがを混ぜる。",
      "鶏肉を食べやすく切る。",
      "たれをかけ、ねぎと白ごまをのせる。"
    ]
  },

  {
    name:"なすの揚げ浸し",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    tags:["なす","和食","副菜"],
    searchText:"なす 揚げ浸し めんつゆ 生姜",
    gas:1,
    ingredients:[
      ["なす","300g"],
      ["めんつゆ","50g"],
      ["水","100g"],
      ["しょうが","8g"],
      ["ごま油","10g"],
      ["ねぎ","適量"]
    ],
    steps:[
      "なすを食べやすく切る。",
      "フライパンにごま油を熱し、なすを焼く。",
      "めんつゆと水を加える。",
      "しょうがを加えて煮る。",
      "ねぎをのせる。"
    ]
  },

  {
    name:"きゅうりの塩昆布和え",
    image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
    tags:["副菜","野菜","さっぱり"],
    searchText:"きゅうり 塩昆布 ごま油",
    ingredients:[
      ["きゅうり","2本"],
      ["塩昆布","10g"],
      ["ごま油","8g"],
      ["白ごま","5g"]
    ],
    steps:[
      "きゅうりを叩いて食べやすく切る。",
      "塩昆布、ごま油、白ごまと和える。",
      "少し置いて味をなじませる。"
    ]
  },

  {
    name:"ツナ卵サラダ",
    image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    tags:["サラダ","卵","簡単"],
    searchText:"ツナ 卵 サラダ マヨネーズ",
    ingredients:[
      ["卵","3個"],
      ["ツナ","70g"],
      ["マヨネーズ","30g"],
      ["醤油","5g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "卵を茹でる。",
      "卵を粗くつぶす。",
      "ツナ、マヨネーズ、醤油を加える。",
      "黒こしょうを振る。"
    ]
  },

  {
    name:"ベーコンとほうれん草のキッシュ",
    image:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=85",
    tags:["洋食","卵","チーズ"],
    searchText:"キッシュ ベーコン ほうれん草 卵 チーズ",
    appliance:"オーブン",
    note:"180℃に予熱してから焼く",
    ingredients:[
      ["卵","3個"],
      ["ベーコン","70g"],
      ["ほうれん草","100g"],
      ["牛乳","100g"],
      ["チーズ","60g"],
      ["塩","2g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "ベーコンとほうれん草を炒める。",
      "卵、牛乳、塩、黒こしょうを混ぜる。",
      "具材を耐熱皿に入れる。",
      "卵液を流し、チーズをのせる。",
      "180℃のオーブンで焼く。"
    ]
  },

  {
    name:"豚肉と玉ねぎの生姜焼き",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags:["豚肉","和食","ご飯"],
    searchText:"生姜焼き 豚肉 玉ねぎ 生姜 醤油",
    gas:1,
    ingredients:[
      ["豚ロース","200g"],
      ["玉ねぎ","100g"],
      ["醤油","20g"],
      ["みりん","15g"],
      ["酒","15g"],
      ["砂糖","5g"],
      ["しょうが","15g"],
      ["油","5g"]
    ],
    steps:[
      "醤油、みりん、酒、砂糖、しょうがを混ぜる。",
      "フライパンに油を熱し豚肉を焼く。",
      "玉ねぎを加える。",
      "合わせ調味料を加えて炒め絡める。"
    ]
  },

  {
    name:"濃厚カルボナーラ",
    image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    tags:["パスタ","チーズ","濃厚"],
    searchText:"カルボナーラ パスタ 卵 チーズ ベーコン",
    gas:1,
    ingredients:[
      ["スパゲッティ","200g"],
      ["ベーコン","80g"],
      ["卵","2個"],
      ["粉チーズ","40g"],
      ["牛乳","50g"],
      ["黒こしょう","2g"],
      ["塩","適量"]
    ],
    steps:[
      "スパゲッティを茹でる。",
      "ベーコンを炒める。",
      "卵、粉チーズ、牛乳を混ぜる。",
      "茹でたパスタをベーコンと合わせる。",
      "火を止めて卵液を加え、余熱で絡める。",
      "黒こしょうをたっぷり振る。"
    ]
  },

  {
    name:"豚肉とキャベツの塩炒め",
    image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    tags:["豚肉","野菜","簡単"],
    searchText:"豚肉 キャベツ 塩炒め にんにく",
    gas:1,
    ingredients:[
      ["豚こま肉","180g"],
      ["キャベツ","200g"],
      ["にんにく","5g"],
      ["鶏ガラスープの素","4g"],
      ["塩","2g"],
      ["ごま油","8g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "ごま油とにんにくを炒める。",
      "豚肉を加える。",
      "キャベツを加えて強火で炒める。",
      "鶏ガラスープの素と塩で味付けする。",
      "黒こしょうを振る。"
    ]
  },

  {
    name:"ツナマヨ醤油うどん",
    image:"https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",
    tags:["麺類","簡単","ツナ"],
    searchText:"ツナマヨ うどん 醤油 めんつゆ",
    gas:1,
    ingredients:[
      ["冷凍うどん","2玉"],
      ["ツナ","70g"],
      ["マヨネーズ","30g"],
      ["めんつゆ","20g"],
      ["醤油","5g"],
      ["ごま油","5g"],
      ["ねぎ","適量"]
    ],
    steps:[
      "うどんを温める。",
      "ツナ、マヨネーズ、めんつゆ、醤油、ごま油を混ぜる。",
      "うどんと和える。",
      "ねぎをのせる。"
    ]
  },

  {
    name:"にんにく味噌豚丼",
    image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    tags:["丼","豚肉","味噌"],
    searchText:"豚丼 にんにく 味噌 豚肉 ご飯",
    gas:1,
    ingredients:[
      ["豚バラ肉","180g"],
      ["味噌","20g"],
      ["醤油","10g"],
      ["みりん","15g"],
      ["砂糖","8g"],
      ["にんにく","8g"],
      ["ご飯","300g"],
      ["ねぎ","適量"]
    ],
    steps:[
      "味噌、醤油、みりん、砂糖、にんにくを混ぜる。",
      "豚肉を焼く。",
      "合わせ調味料を加える。",
      "照りが出るまで炒める。",
      "ご飯に盛る。"
    ]
  },

  {
    name:"トマトとモッツァレラのサラダ",
    image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
    tags:["サラダ","チーズ","さっぱり"],
    searchText:"トマト モッツァレラ サラダ オリーブオイル",
    ingredients:[
      ["トマト","200g"],
      ["モッツァレラチーズ","100g"],
      ["オリーブオイル","15g"],
      ["塩","2g"],
      ["黒こしょう","少々"],
      ["レモン汁","5g"]
    ],
    steps:[
      "トマトとモッツァレラを切る。",
      "皿に交互に並べる。",
      "オリーブオイルとレモン汁をかける。",
      "塩と黒こしょうを振る。"
    ]
  },

  {
    name:"カレー風味のポテト炒め",
    image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    tags:["じゃがいも","カレー","副菜"],
    searchText:"じゃがいも カレー粉 ポテト 炒め",
    gas:1,
    ingredients:[
      ["じゃがいも","300g"],
      ["玉ねぎ","80g"],
      ["ベーコン","60g"],
      ["カレー粉","6g"],
      ["塩","2g"],
      ["黒こしょう","少々"],
      ["油","10g"]
    ],
    steps:[
      "じゃがいもを細切りにする。",
      "フライパンに油を熱してじゃがいもを炒める。",
      "玉ねぎとベーコンを加える。",
      "カレー粉と塩を加える。",
      "黒こしょうで仕上げる。"
    ]
  },

  {
    name:"韓国風ピリ辛冷奴",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags:["豆腐","韓国","辛い"],
    searchText:"冷奴 豆腐 コチュジャン ごま油 韓国",
    ingredients:[
      ["豆腐","300g"],
      ["コチュジャン","8g"],
      ["味噌","5g"],
      ["すりごま","8g"],
      ["めんつゆ","10g"],
      ["豆乳","30g"],
      ["食べるラー油","5g"],
      ["にんにく","4g"],
      ["ねぎ","適量"]
    ],
    steps:[
      "コチュジャン、味噌、すりごま、めんつゆ、豆乳、食べるラー油、にんにくを混ぜる。",
      "豆腐を器に盛る。",
      "たれをかける。",
      "ねぎをのせる。"
    ]
  },

  {
    name:"焼きチーズカレー",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    tags:["ご飯","カレー","チーズ"],
    searchText:"チーズカレー 焼きカレー ご飯 チーズ",
    appliance:"トースター",
    note:"チーズに焼き色がつくまで焼く",
    ingredients:[
      ["ご飯","300g"],
      ["カレー","250g"],
      ["チーズ","80g"],
      ["卵","1個"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "耐熱皿にご飯を盛る。",
      "カレーをかける。",
      "中央に卵をのせる。",
      "チーズをたっぷりのせる。",
      "トースターで焼き色がつくまで焼く。",
      "黒こしょうを振る。"
    ]
  },

  {
    name:"塩だれ豚キャベツ丼",
    image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    tags:["丼","豚肉","塩だれ"],
    searchText:"豚キャベツ 丼 塩だれ ご飯 ごま油",
    gas:1,
    ingredients:[
      ["豚バラ肉","180g"],
      ["キャベツ","180g"],
      ["ごま油","10g"],
      ["鶏ガラスープの素","4g"],
      ["塩","2g"],
      ["レモン汁","8g"],
      ["にんにく","5g"],
      ["ご飯","300g"],
      ["黒こしょう","少々"]
    ],
    steps:[
      "ごま油、鶏ガラスープの素、塩、レモン汁、にんにくを混ぜる。",
      "豚肉を焼く。",
      "キャベツを加えて炒める。",
      "塩だれを加えて絡める。",
      "ご飯に盛り、黒こしょうを振る。"
    ]
  }

];


/* =================================
   STATE
================================= */

const perPage = 15;

let currentPage = 1;
let currentRecipe = null;
let tagPageCurrentPage = 1;


/* =================================
   ELEMENTS
================================= */

const recipeGrid = document.getElementById("recipeGrid");
const pagination = document.getElementById("pagination");
const tagList = document.getElementById("tagList");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("recipeModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const tagRecipeGrid = document.getElementById("tagRecipeGrid");
const tagPageTitle = document.getElementById("tagPageTitle");


/* =================================
   TAGS
================================= */

function getAllTags(){

  const tags = new Set();

  recipes.forEach(recipe=>{
    recipe.tags.forEach(tag=>tags.add(tag));
  });

  return ["すべて", ...Array.from(tags)];

}


function renderTags(){

  tagList.innerHTML = "";

  getAllTags().forEach(tag=>{

    const button = document.createElement("button");

    button.className = "tag-button";
    button.type = "button";
    button.textContent = "#" + tag;

    button.addEventListener("click",()=>{

      const url =
        "index.html?tag=" +
        encodeURIComponent(tag);

      window.location.href = url;

    });

    tagList.appendChild(button);

  });

}


/* =================================
   FILTER
================================= */

function getFilteredRecipes(){

  const keyword =
    searchInput.value.trim().toLowerCase();

  return recipes.filter(recipe=>{

    const ingredientText =
      recipe.ingredients
        .map(item=>item[0] + " " + item[1])
        .join(" ");

    const searchable = (
      recipe.name +
      " " +
      recipe.searchText +
      " " +
      recipe.tags.join(" ") +
      " " +
      ingredientText
    ).toLowerCase();

    return !keyword || searchable.includes(keyword);

  });

}


/* =================================
   CARD
================================= */

function createRecipeCard(recipe){

  const card =
    document.createElement("article");

  card.className = "recipe-card";

  card.innerHTML = `
    <div class="recipe-image">
      <img
        src="${recipe.image}"
        alt="${escapeHtml(recipe.name)}"
        loading="lazy"
      >
    </div>

    <div class="recipe-info">

      <h3 class="recipe-title">
        ${escapeHtml(recipe.name)}
      </h3>

      <div class="recipe-tags">
        ${recipe.tags.map(tag=>`
          <span class="recipe-tag">
            #${escapeHtml(tag)}
          </span>
        `).join("")}
      </div>

    </div>
  `;

  card.addEventListener("click",()=>{
    openRecipe(recipe);
  });

  return card;

}


/* =================================
   MAIN RECIPE LIST
================================= */

function renderRecipes(){

  const filtered =
    getFilteredRecipes();

  const totalPages =
    Math.max(
      1,
      Math.ceil(filtered.length / perPage)
    );

  if(currentPage > totalPages){
    currentPage = totalPages;
  }

  const start =
    (currentPage - 1) * perPage;

  const visible =
    filtered.slice(start,start + perPage);

  recipeGrid.innerHTML = "";

  if(!visible.length){

    recipeGrid.innerHTML = `
      <div class="empty">
        該当するレシピがありません。
      </div>
    `;

  }else{

    visible.forEach(recipe=>{
      recipeGrid.appendChild(
        createRecipeCard(recipe)
      );
    });

  }

  renderPagination(totalPages);

}


/* =================================
   PAGINATION
================================= */

function renderPagination(totalPages){

  pagination.innerHTML = "";

  if(totalPages <= 1){
    return;
  }

  for(let page=1; page<=totalPages; page++){

    const button =
      document.createElement("button");

    button.type = "button";
    button.textContent = page;

    if(page === currentPage){
      button.classList.add("active");
      button.setAttribute(
        "aria-current",
        "page"
      );
    }

    button.addEventListener("click",()=>{

      currentPage = page;

      renderRecipes();

      document.getElementById("recipes")
        .scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

    });

    pagination.appendChild(button);

  }

}


/* =================================
   TAG PAGE
================================= */

function getTagFromUrl(){

  const params =
    new URLSearchParams(
      window.location.search
    );

  return params.get("tag");

}


function getTagRecipes(tag){

  if(!tag || tag === "すべて"){
    return recipes;
  }

  return recipes.filter(recipe=>
    recipe.tags.includes(tag)
  );

}


function renderTagPage(){

  const tag =
    getTagFromUrl();

  if(!tag){
    return;
  }

  document.body.classList.add(
    "tag-page-mode"
  );

  document.title =
    "CHU dot COOKING | #" + tag;

  tagPageTitle.innerHTML =
    "#" + escapeHtml(tag);


  const matched =
    getTagRecipes(tag);

  tagRecipeGrid.innerHTML = "";

  if(!matched.length){

    tagRecipeGrid.innerHTML = `
      <div class="empty">
        このタグのレシピはありません。
      </div>
    `;

    return;
  }

  matched.forEach(recipe=>{
    tagRecipeGrid.appendChild(
      createRecipeCard(recipe)
    );
  });

}


/* =================================
   INGREDIENT MAP
================================= */

function makeIngredientMap(recipe){

  const map = new Map();

  recipe.ingredients.forEach(item=>{
    map.set(item[0],item[1]);
  });

  return map;

}


/* =================================
   CLICKABLE INGREDIENTS
   各材料につき最初の1回だけ
================================= */

function makeClickableIngredients(
  text,
  ingredientMap,
  usedIngredients
){

  let result = text;

  const names =
    Array.from(ingredientMap.keys())
      .sort((a,b)=>b.length-a.length);

  names.forEach(name=>{

    if(usedIngredients.has(name)){
      return;
    }

    const index =
      result.indexOf(
        escapeHtml(name)
      );

    if(index === -1){
      return;
    }

    const safeName =
      escapeHtml(name);

    const amount =
      ingredientMap.get(name);

    const before =
      result.slice(0,index);

    const after =
      result.slice(
        index + safeName.length
      );

    result =
      before +
      `
        <span
          class="cooking-ingredient"
          data-ingredient="${safeName}"
        >
          ${safeName}
          <span
            class="ingredient-bubble"
            style="display:none;"
          >
            ${escapeHtml(amount)}
          </span>
        </span>
      ` +
      after;

    usedIngredients.add(name);

  });

  return result;

}


/* =================================
   ESCAPE
================================= */

function escapeHtml(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* =================================
   RELATED RECIPES
   副菜系からランダム3品固定
================================= */

function getRelatedRecipes(current){

  const sideDishPool =
    recipes.filter(recipe=>{

      if(recipe === current){
        return false;
      }

      return recipe.tags.some(tag=>
        [
          "副菜",
          "サラダ",
          "野菜",
          "おかず"
        ].includes(tag)
      );

    });


  const shuffled =
    [...sideDishPool]
      .sort(()=>Math.random() - .5);

  return shuffled.slice(0,3);

}


/* =================================
   RECIPE META
================================= */

function renderRecipeMeta(recipe){

  const items = [];

  if(recipe.gas){
    items.push(`
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">
          ガスコンロ
        </span>
        <span class="recipe-meta-value">
          ${recipe.gas}口
        </span>
      </div>
    `);
  }

  if(recipe.appliance){
    items.push(`
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">
          調理家電
        </span>
        <span class="recipe-meta-value">
          ${escapeHtml(recipe.appliance)}
        </span>
      </div>
    `);
  }

  if(recipe.note){
    items.push(`
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">
          特記事項
        </span>
        <span class="recipe-meta-value">
          ${escapeHtml(recipe.note)}
        </span>
      </div>
    `);
  }

  if(!items.length){
    return "";
  }

  return `
    <div class="recipe-meta">
      ${items.join("")}
    </div>
  `;

}


/* =================================
   MODAL
================================= */

function openRecipe(recipe){

  currentRecipe = recipe;
   
  const ingredientMap =
    makeIngredientMap(recipe);

  const usedIngredients =
    new Set();


  const stepsHtml =
    recipe.steps.map((step,index)=>{

      const clickable =
        makeClickableIngredients(
          escapeHtml(step),
          ingredientMap,
          usedIngredients
        );

      return `
        <div class="step">

          <div class="step-number">
            ${String(index+1).padStart(2,"0")}
          </div>

          <div class="step-text">
            ${clickable}
          </div>

        </div>
      `;

    }).join("");


  const related =
    getRelatedRecipes(recipe);


  const relatedHtml =
    related.length
      ? `
        <section class="more-recipes">

          <div class="more-heading">

            <small>
              MORE RECIPES
            </small>

            <h3>
              こんなのもどう？
            </h3>

          </div>

          <div class="more-grid">

            ${related.map((item,index)=>`

              <article
                class="more-card"
                data-related-index="${index}"
              >

                <div class="more-card-image">
                  <img
                    src="${item.image}"
                    alt="${escapeHtml(item.name)}"
                    loading="lazy"
                  >
                </div>

                <div class="more-card-info">

                  <div class="more-card-title">
                    ${escapeHtml(item.name)}
                  </div>

                  <div class="more-card-tags">
                    ${item.tags
                      .map(tag=>"#"+escapeHtml(tag))
                      .join(" ")
                    }
                  </div>

                </div>

              </article>

            `).join("")}

          </div>

        </section>
      `
      : "";


  modalContent.innerHTML = `

    <div class="modal-top">

      <div class="modal-image">

        <img
          src="${recipe.image}"
          alt="${escapeHtml(recipe.name)}"
        >

      </div>

      <div class="modal-intro">

        <h2 class="modal-title">
          ${escapeHtml(recipe.name)}
        </h2>

        <div class="modal-tags">

          ${recipe.tags.map(tag=>`

            <button
              class="modal-tag"
              type="button"
              data-tag="${escapeHtml(tag)}"
            >
              #${escapeHtml(tag)}
            </button>

          `).join("")}

        </div>

        ${renderRecipeMeta(recipe)}

      </div>

    </div>


    <section class="modal-section">

      <h3 class="modal-section-title">
        材料 / INGREDIENTS
      </h3>

      <div class="ingredients-list">

        ${recipe.ingredients.map(item=>`

          <div class="ingredient-item">

            <span class="ingredient-name">
              ${escapeHtml(item[0])}
            </span>

            <span class="ingredient-amount">
              ${escapeHtml(item[1])}
            </span>

          </div>

        `).join("")}

      </div>

    </section>


    <section class="modal-section">

      <h3 class="modal-section-title">
        つくりかた / HOW TO COOK
      </h3>

      <div class="steps">
        ${stepsHtml}
      </div>

    </section>

    ${relatedHtml}

  `;


  modal.classList.remove("closing");
  modal.classList.add("show");

  document.body.style.overflow = "hidden";


  /* 材料タップ */

  modalContent
    .querySelectorAll(".cooking-ingredient")
    .forEach(element=>{

      element.addEventListener(
        "click",
        event=>{

          event.stopPropagation();

          const bubble =
            element.querySelector(
              ".ingredient-bubble"
            );

          modalContent
            .querySelectorAll(
              ".ingredient-bubble"
            )
            .forEach(item=>{

              if(item !== bubble){
                item.style.display = "none";
              }

            });


          bubble.style.display =
            bubble.style.display === "none"
              ? "block"
              : "none";

        }
      );

    });


  /* タグ */

  modalContent
    .querySelectorAll(".modal-tag")
    .forEach(button=>{

      button.addEventListener("click",()=>{

        const tag =
          button.dataset.tag;

        window.location.href =
          "index.html?tag=" +
          encodeURIComponent(tag);

      });

    });


  /* 関連レシピ */

  modalContent
    .querySelectorAll(".more-card")
    .forEach(card=>{

      card.addEventListener("click",()=>{

        const index =
          Number(
            card.dataset.relatedIndex
          );

        if(related[index]){
          openRecipe(
            related[index]
          );
        }

      });

    });

}


/* =================================
   CLOSE MODAL
================================= */

function closeModal(){

  if(!modal.classList.contains("show")){
    return;
  }

  modal.classList.add("closing");

  setTimeout(()=>{

    modal.classList.remove(
      "show",
      "closing"
    );

    document.body.style.overflow = "";

    currentRecipe = null;

  },250);

}


/* =================================
   HEADER NAV
   ページ遷移・履歴追加なし
================================= */

const navLinks =
  document.querySelectorAll(
    ".header-nav a"
  );

navLinks.forEach(link=>{

  link.addEventListener(
    "click",
    event=>{

      event.preventDefault();

      const targetId =
        link.getAttribute("href");

      const isTagPage =
        document.body.classList.contains(
          "tag-page-mode"
        );

      if(isTagPage){

        window.location.href =
          "index.html" + targetId;

        return;

      }

      const target =
        document.querySelector(
          targetId
        );

      if(target){

        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }

    }
  );

});

/* ロゴもトップへ */

document
  .querySelector(".header-logo")
  .addEventListener("click",event=>{

    event.preventDefault();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });


/* =================================
   MODAL EVENTS
================================= */

modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  event=>{

    if(event.target === modal){
      closeModal();
    }

  }
);


document.addEventListener(
  "keydown",
  event=>{

    if(event.key === "Escape"){
      closeModal();
    }

  }
);


/* =================================
   SEARCH
================================= */

searchInput.addEventListener(
  "input",
  ()=>{

    currentPage = 1;

    renderRecipes();

  }
);


/* =================================
   NAV ACTIVE
================================= */

const sections =
  document.querySelectorAll(
    "#home,#about,#recipes,#mood"
  );


function updateActiveNav(){

  const scrollPosition =
    window.scrollY + 180;

  let activeId = "home";

  sections.forEach(section=>{

    if(
      scrollPosition >=
      section.offsetTop
    ){
      activeId = section.id;
    }

  });

  navLinks.forEach(link=>{

    link.classList.toggle(
      "active",
      link.dataset.nav === activeId
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav,
  {passive:true}
);


/* =================================
   INIT
================================= */

renderTags();
renderRecipes();
renderTagPage();
updateActiveNav();
