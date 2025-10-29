// 日文單字題庫
window.vocabBank = [
{
    id: "V0001",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "自分",
    options: [
        {text: "じぶん", explanation: "正確答案：「自」音讀為「じ」，「分」音讀為「ぶん」，合起來是「じぶん」。\n中文翻譯：自己"},
        {text: "じぷん", explanation: "錯誤：「分」的讀音是「ぶん」，不是「ぷん」。"},
        {text: "じいぶん", explanation: "錯誤：「自」的讀音是「じ」，沒有長音。"},
        {text: "しぶん", explanation: "錯誤：「自」在此不讀「し」。"}
    ],
    correctAnswer: 0
},
{
        "id": "V0002",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N5) (意味：起床)",
        "kana": "おきます",
        "options": [
            {"text": "起きます", "explanation": "正確答案：「おきます」在此語境下對應的漢字是「起きます」，意思是起床。"},
            {"text": "置きます", "explanation": "錯誤：「置きます」讀音也是「おきます」，但意思是放置，語意不符。"},
            {"text": "描きます", "explanation": "錯誤：「描きます」讀音是「えがきます」或「かきます」，意思是描繪。"},
            {"text": "おきまず", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0003",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "学生",
    options: [
        {text: "がくせい", explanation: "正確答案：「学」音讀為「がく」，「生」音讀為「せい」。\n中文翻譯：學生"},
        {text: "がっせい", explanation: "錯誤：「学」的讀音是「がく」，不應促音化。"},
        {text: "がくしょう", explanation: "錯誤：「生」的讀音是「せい」，不是「しょう」。"},
        {text: "かくせい", explanation: "錯誤：「学」的讀音是「がく」，不是「かく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0004",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "にほん",
    options: [
        {text: "日本", explanation: "正確答案：「にほん」是「日本」的標準讀音。"},
        {text: "二本", explanation: "錯誤：「二本」讀作「にほん」，意思是兩支，但語意不符。"},
        {text: "仁本", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "爾本", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0005",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "先生",
    options: [
        {text: "せんせい", explanation: "正確答案：「先」音讀為「せん」，「生」音讀為「せい」。\n中文翻譯：老師"},
        {text: "せんせ", explanation: "錯誤：漏掉了「い」的長音。"},
        {text: "せいせん", explanation: "錯誤：順序完全顛倒。"},
        {text: "せんせん", explanation: "錯誤：「生」的讀音是「せい」，不是「せん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0006",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "しごと",
    options: [
        {text: "仕事", explanation: "正確答案：「しごと」對應的漢字是「仕事」，意思是工作。"},
        {text: "私事", explanation: "錯誤：「私事」讀作「しじ」，意思是私事。"},
        {text: "指示", explanation: "錯誤：「指示」讀作「しじ」，意思是指示。"},
        {text: "死後", explanation: "錯誤：「死後」讀作「しご」，意思是死後。"}
    ],
    correctAnswer: 0
},
{
    id: "V0007",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "映画",
    options: [
        {text: "えいが", explanation: "正確答案：「映」音讀為「えい」，「画」音讀為「が」。\n中文翻譯：電影"},
        {text: "えが", explanation: "錯誤：「映」的讀音是「えい」，不應省略長音。"},
        {text: "ようが", explanation: "錯誤：「映」的讀音是「えい」，不是「よう」。"},
        {text: "えいがく", explanation: "錯誤：「画」的讀音是「が」，不是「がく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0008",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "でんわ",
    options: [
        {text: "電話", explanation: "正確答案：「でんわ」對應的漢字是「電話」。"},
        {text: "伝話", explanation: "錯誤：「伝話」不是標準詞彙。"},
        {text: "電和", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "殿話", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
        "id": "V0009",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N5) (意味：回家)",
        "kana": "かえります",
        "options": [
            {"text": "帰ります", "explanation": "正確答案：「かえります」在此語境下對應的漢字是「帰ります」，意思是回家。"},
            {"text": "返ります", "explanation": "錯誤：「返ります」讀音也是「かえります」，但意思是歸還、退回，語意不符。"},
            {"text": "変ります", "explanation": "錯誤：「変ります」讀音是「かわります」，意思是改變。"},
            {"text": "解ります", "explanation": "錯誤：「解ります」讀音是「わかります」，意思是了解。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0010",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "ともだち",
    options: [
        {text: "友達", explanation: "正確答案：「ともだち」最常見的漢字表記是「友達」。"},
        {text: "友だち", explanation: "錯誤：這是混合表記，非純漢字。"},
        {text: "供達", explanation: "錯誤：「供」讀作「とも」但意思不同，多指隨從。"},
        {text: "共達", explanation: "錯誤：此漢字組合不正確。"}
    ],
    correctAnswer: 0
},
{
    id: "V0011",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "勉強",
    options: [
        {text: "べんきょう", explanation: "正確答案：「勉」音讀為「べん」，「強」音讀為「きょう」。\n中文翻譯：學習；用功"},
        {text: "べんきょ", explanation: "錯誤：「強」的讀音是「きょう」，不應省略長音。"},
        {text: "べんこう", explanation: "錯誤：「強」的讀音是「きょう」，不是「こう」。"},
        {text: "めんきょう", explanation: "錯誤：「勉」的讀音是「べん」，不是「めん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0012",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "りょこう",
    options: [
        {text: "旅行", explanation: "正確答案：「りょこう」對應的漢字是「旅行」。"},
        {text: "旅交", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "慮行", explanation: "錯誤：「慮」的意思為顧慮，不適用。"},
        {text: "呂行", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
        "id": "V0013",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N5) (意味：會議)",
        "kana": "かいぎ",
        "options": [
            {"text": "会議", "explanation": "正確答案：「かいぎ」對應的漢字是「会議」，意思是會議。"},
            {"text": "回議", "explanation": "錯誤：「回議」讀音也是「かいぎ」，但在本題語境中通常使用「会議」。"},
            {"text": "開技", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "皆議", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0014",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "しゅくだい",
    options: [
        {text: "宿題", explanation: "正確答案：「しゅくだい」對應的漢字是「宿題」，意思是作業；功課。"},
        {text: "縮題", explanation: "錯誤：「縮」的意思為縮小，不適用。"},
        {text: "淑題", explanation: "錯誤：「淑」的意思為賢淑，不適用。"},
        {text: "祝題", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0015",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "質問",
    options: [
        {text: "しつもん", explanation: "正確答案：「質」音讀為「しつ」，「問」音讀為「もん」。\n中文翻譯：問題；疑問"},
        {text: "しちもん", explanation: "錯誤：「質」在此讀音是「しつ」，不是「しち」。"},
        {text: "しつも", explanation: "錯誤：「問」的讀音是「もん」，不應省略「ん」。"},
        {text: "しつもう", explanation: "錯誤：「問」的讀音是「もん」，不是「もう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0016",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "きもち",
    options: [
        {text: "気持ち", explanation: "正確答案：「きもち」對應的漢字是「気持ち」，意思是心情；感覺。"},
        {text: "着持ち", explanation: "錯誤：「着持ち」意思為穿著打扮，語意不符。"},
        {text: "木持", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "機持ち", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0017",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "元気",
    options: [
        {text: "げんき", explanation: "正確答案：「元」音讀為「げん」，「気」音讀為「き」。\n中文翻譯：有精神；健康"},
        {text: "げんけ", explanation: "錯誤：「気」的讀音是「き」，不是「け」。"},
        {text: "がんき", explanation: "錯誤：「元」的讀音是「げん」，不是「がん」。"},
        {text: "げいき", explanation: "錯誤：「元」的讀音是「げん」，不是「げい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0018",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "けんこう",
    options: [
        {text: "健康", explanation: "正確答案：「けんこう」對應的漢字是「健康」。"},
        {text: "原稿", explanation: "錯誤：「原稿」讀作「げんこう」，意思是原稿。"},
        {text: "研究", explanation: "錯誤：「研究」讀作「けんきゅう」，意思是研究。"},
        {text: "現行", explanation: "錯誤：「現行」讀作「げんこう」，意思是現行。"}
    ],
    correctAnswer: 0
},
{
    id: "V0019",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "家族",
    options: [
        {text: "かぞく", explanation: "正確答案：「家」音讀為「か」，「族」音讀為「ぞく」。\n中文翻譯：家人"},
        {text: "かぞうく", explanation: "錯誤：多了一個「う」的長音。"},
        {text: "けぞく", explanation: "錯誤：「家」的讀音是「か」，不是「け」。"},
        {text: "かさく", explanation: "錯誤：「族」的讀音是「ぞく」，不是「さく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0020",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ゆめ",
    options: [
        {text: "夢", explanation: "正確答案：「ゆめ」對應的漢字是「夢」。"},
        {text: "弓", explanation: "錯誤：「弓」讀作「ゆみ」，意思是弓。"},
        {text: "湯目", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "癒目", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0021",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "週末",
    options: [
        {text: "しゅうまつ", explanation: "正確答案：「週」音讀為「しゅう」，「末」音讀為「まつ」。\n中文翻譯：週末"},
        {text: "しゅまつ", explanation: "錯誤：「週」的讀音是「しゅう」，不應省略長音。"},
        {text: "しゅうすえ", explanation: "錯誤：「末」在此不讀訓讀「すえ」。"},
        {text: "しゅうまい", explanation: "錯誤：「末」的讀音是「まつ」，不是「まい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0022",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "しんぱい",
    options: [
        {text: "心配", explanation: "正確答案：「しんぱい」對應的漢字是「心配」，意思是擔心。"},
        {text: "新配", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "親配", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "信配", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0023",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "準備",
    options: [
        {text: "じゅんび", explanation: "正確答案：「準」音讀為「じゅん」，「備」音讀為「び」。\n中文翻譯：準備"},
        {text: "じゅび", explanation: "錯誤：「準」的讀音是「じゅん」，不應省略「ん」。"},
        {text: "じょうび", explanation: "錯誤：「準」的讀音是「じゅん」，不是「じょう」。"},
        {text: "しゅんび", explanation: "錯誤：「準」的讀音是「じゅん」，不是「しゅん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0024",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "うんてん",
    options: [
        {text: "運転", explanation: "正確答案：「うんてん」對應的漢字是「運転」，意思是駕駛。"},
        {text: "運天", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "雲転", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "恩典", explanation: "錯誤：「恩典」讀作「おんてん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0025",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "約束",
    options: [
        {text: "やくそく", explanation: "正確答案：「約」音讀為「やく」，「束」音讀為「そく」。\n中文翻譯：約定"},
        {text: "やくそ", explanation: "錯誤：「束」的讀音是「そく」，不應省略「く」。"},
        {text: "やっそく", explanation: "錯誤：「約」的讀音是「やく」，不應促音化。"},
        {text: "ようそく", explanation: "錯誤：「約」的讀音是「やく」，不是「よう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0026",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ふべん",
    options: [
        {text: "不便", explanation: "正確答案：「ふべん」對應的漢字是「不便」，意思是不方便。"},
        {text: "不弁", explanation: "錯誤：「弁」的意思為辯解、閥門，不適用。"},
        {text: "夫便", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "負便", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0027",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "掃除",
    options: [
        {text: "そうじ", explanation: "正確答案：「掃」音讀為「そう」，「除」音讀為「じ」。\n中文翻譯：打掃"},
        {text: "そじ", explanation: "錯誤：「掃」的讀音是「そう」，不應省略長音。"},
        {text: "しょうじ", explanation: "錯誤：「掃」的讀音是「そう」，不是「しょう」。"},
        {text: "そうじょ", explanation: "錯誤：「除」的讀音是「じ」，不是「じょ」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0028",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "びょういん",
    options: [
        {text: "病院", explanation: "正確答案：「びょういん」對應的漢字是「病院」，意思是醫院。"},
        {text: "病員", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "秒院", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "備院", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0029",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "親切",
    options: [
        {text: "しんせつ", explanation: "正確答案：「親」音讀為「しん」，「切」音讀為「せつ」。\n中文翻譯：親切"},
        {text: "しんさい", explanation: "錯誤：「切」的讀音是「せつ」，不是「さい」。"},
        {text: "おやせつ", explanation: "錯誤：「親」在此應讀音讀「しん」，不讀訓讀「おや」。"},
        {text: "しんせい", explanation: "錯誤：「切」的讀音是「せつ」，不是「せい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0030",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "ゆうめい",
    options: [
        {text: "有名", explanation: "正確答案：「ゆうめい」對應的漢字是「有名」，意思是有名。"},
        {text: "勇名", explanation: "錯誤：「勇名」意思是英勇的名聲，語意不符。"},
        {text: "夕名", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "友名", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0031",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "大切",
    options: [
        {text: "たいせつ", explanation: "正確答案：「大」音讀為「たい」，「切」音讀為「せつ」。\n中文翻譯：重要；珍惜"},
        {text: "たいせ", explanation: "錯誤：「切」的讀音是「せつ」，不應省略「つ」。"},
        {text: "たいさい", explanation: "錯誤：「切」的讀音是「せつ」，不是「さい」。"},
        {text: "だいせつ", explanation: "錯誤：「大」在此讀音是「たい」，不是「だい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0032",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "きょうしつ",
    options: [
        {text: "教室", explanation: "正確答案：「きょうしつ」對應的漢字是「教室」。"},
        {text: "教習", explanation: "錯誤：「教習」讀作「きょうしゅう」。"},
        {text: "教失", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "競室", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0033",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "練習",
    options: [
        {text: "れんしゅう", explanation: "正確答案：「練」音讀為「れん」，「習」音讀為「しゅう」。\n中文翻譯：練習"},
        {text: "れんしゅ", explanation: "錯誤：「習」的讀音是「しゅう」，不應省略長音。"},
        {text: "れんじゅう", explanation: "錯誤：「習」的讀音是「しゅう」，不是「じゅう」。"},
        {text: "れいしゅう", explanation: "錯誤：「練」的讀音是「れん」，不是「れい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0034",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "にもつ",
    options: [
        {text: "荷物", explanation: "正確答案：「にもつ」對應的漢字是「荷物」，意思是行李、物品。"},
        {text: "二物", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "荷元", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "仁物", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0035",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "経験",
    options: [
        {text: "けいけん", explanation: "正確答案：「経」音讀為「けい」，「験」音讀為「けん」。\n中文翻譯：經驗"},
        {text: "けいげん", explanation: "錯誤：「験」的讀音是「けん」，不是「げん」。"},
        {text: "けけん", explanation: "錯誤：「経」的讀音是「けい」，不應省略長音。"},
        {text: "きょうけん", explanation: "錯誤：「経」的讀音是「けい」，不是「きょう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0036",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ひこうき",
    options: [
        {text: "飛行機", explanation: "正確答案：「ひこうき」對應的漢字是「飛行機」，意思是飛機。"},
        {text: "飛幸機", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "飛考機", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "否行機", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0037",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "紹介",
    options: [
        {text: "しょうかい", explanation: "正確答案：「紹」音讀為「しょう」，「介」音讀為「かい」。\n中文翻譯：介紹"},
        {text: "しょかい", explanation: "錯誤：「紹」的讀音是「しょう」，不應省略長音。"},
        {text: "しょうがい", explanation: "錯誤：「介」的讀音是「かい」，不是「がい」。"},
        {text: "しゅうかい", explanation: "錯誤：「紹」的讀音是「しょう」，不是「しゅう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0038",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "しょくじ",
    options: [
        {text: "食事", explanation: "正確答案：「しょくじ」對應的漢字是「食事」，意思是吃飯。"},
        {text: "飾事", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "職事", explanation: "錯誤：「職事」讀作「しょくじ」，但意思為職務上的事。"},
        {text: "食字", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0039",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "一生懸命",
    options: [
        {text: "いっしょうけんめい", explanation: "正確答案：「一」音讀為「いっ」，「生」音讀為「しょう」，「懸」音讀為「けん」，「命」音讀為「めい」。\n中文翻譯：拼命；努力"},
        {text: "いっせいけんめい", explanation: "錯誤：「生」在此讀音是「しょう」，不是「せい」。"},
        {text: "いっしょうけめい", explanation: "錯誤：「懸」的讀音是「けん」，不是「け」。"},
        {text: "いちしょうけんめい", explanation: "錯誤：「一」在此讀音是「いっ」，不應為「いち」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0040",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "じゅぎょう",
    options: [
        {text: "授業", explanation: "正確答案：「じゅぎょう」對應的漢字是「授業」，意思是課程、上課。"},
        {text: "受業", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "授行", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "受行", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0041",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "無理",
    options: [
        {text: "むり", explanation: "正確答案：「無」音讀為「む」，「理」音讀為「り」。\n中文翻譯：勉強；不可能；無理"},
        {text: "ぶり", explanation: "錯誤：「無」的讀音是「む」，不是「ぶ」。"},
        {text: "むりい", explanation: "錯誤：多了一個「い」的音。"},
        {text: "むりょう", explanation: "錯誤：「理」的讀音是「り」，不是「りょう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0042",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "かんたん",
    options: [
        {text: "簡単", explanation: "正確答案：「かんたん」對應的漢字是「簡単」，意思是簡單。"},
        {text: "感嘆", explanation: "錯誤：「感嘆」讀作「かんたん」，意思是感嘆。"},
        {text: "官単", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "簡丹", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0043",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "運転",
    options: [
        {text: "うんてん", explanation: "正確答案：「運」音讀為「うん」，「転」音讀為「てん」。\n中文翻譯：駕駛；開車"},
        {text: "うんでん", explanation: "錯誤：「転」的讀音是「てん」，不是「でん」。"},
        {text: "うんてい", explanation: "錯誤：「転」的讀音是「てん」，不是「てい」。"},
        {text: "うてん", explanation: "錯誤：「運」的讀音是「うん」，不應省略「ん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0044",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ぜひ",
    options: [
        {text: "是非", explanation: "正確答案：「ぜひ」對應的漢字是「是非」，意思是一定；務必。"},
        {text: "是飛", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "税非", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "勢否", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0045",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "毎日",
    options: [
        {text: "まいにち", explanation: "正確答案：「毎」音讀為「まい」，「日」音讀為「にち」。\n中文翻譯：每天"},
        {text: "まいひ", explanation: "錯誤：「日」在此應讀音讀「にち」，不讀「ひ」。"},
        {text: "まいつ", explanation: "錯誤：讀音錯誤。"},
        {text: "まいに", explanation: "錯誤：「日」的讀音是「にち」，不應省略「ち」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0046",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "うわぎ",
    options: [
        {text: "上着", explanation: "正確答案：「うわぎ」對應的漢字是「上着」，意思是外套。"},
        {text: "上衣", explanation: "錯誤：「上衣」讀作「じょうい」。"},
        {text: "上木", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "浮気", explanation: "錯誤：「浮気」讀作「うわき」，意思是外遇。"}
    ],
    correctAnswer: 0
},
{
    id: "V0047",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "連絡",
    options: [
        {text: "れんらく", explanation: "正確答案：「連」音讀為「れん」，「絡」音讀為「らく」。\n中文翻譯：聯絡"},
        {text: "れんがく", explanation: "錯誤：「絡」的讀音是「らく」，不是「がく」。"},
        {text: "れいらく", explanation: "錯誤：「連」的讀音是「れん」，不是「れい」。"},
        {text: "れんら", explanation: "錯誤：「絡」的讀音是「らく」，不應省略「く」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0048",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "じかん",
    options: [
        {text: "時間", explanation: "正確答案：「じかん」對應的漢字是「時間」，意思是時間。"},
        {text: "時感", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "地間", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "示間", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0049",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "申請",
    options: [
        {text: "しんせい", explanation: "正確答案：「申」音讀為「しん」，「請」音讀為「せい」。\n中文翻譯：申請"},
        {text: "しんせ", explanation: "錯誤：「請」的讀音是「せい」，不應省略「い」。"},
        {text: "しんしょう", explanation: "錯誤：「請」的讀音是「せい」，不是「しょう」。"},
        {text: "もうせい", explanation: "錯誤：「申」在此應讀音讀「しん」，不讀訓讀「もう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0050",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "てつだう",
    options: [
        {text: "手伝う", explanation: "正確答案：「てつだう」對應的漢字是「手伝う」，意思是幫忙。"},
        {text: "手達う", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "哲陀う", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "鉄だう", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0051",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "景色",
    options: [
        {text: "けしき", explanation: "正確答案：「景」音讀為「けい」，但此處特讀為「け」；「色」音讀為「しき」。\n中文翻譯：景色；風景"},
        {text: "けいしき", explanation: "錯誤：通常不讀作長音。"},
        {text: "かげいろ", explanation: "錯誤：這是訓讀，不是標準讀音。"},
        {text: "けしょく", explanation: "錯誤：「色」的讀音是「しき」，不是「しょく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0052",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "がわ",
    options: [
        {text: "側", explanation: "正確答案：「がわ」對應的漢字是「側」，意思是邊、旁邊。"},
        {text: "顔", explanation: "錯誤：「顔」讀作「かお」，意思是臉。"},
        {text: "河", explanation: "錯誤：「河」讀作「かわ」，意思是河。"},
        {text: "皮", explanation: "錯誤：「皮」讀作「かわ」，意思是皮。"}
    ],
    correctAnswer: 0
},
{
    id: "V0053",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "海外",
    options: [
        {text: "かいがい", explanation: "正確答案：「海」音讀為「かい」，「外」音讀為「がい」。\n中文翻譯：海外；國外"},
        {text: "かいげ", explanation: "錯誤：「外」的讀音是「がい」，不是「げ」。"},
        {text: "かいご", explanation: "錯誤：「外」的讀音是「がい」，不是「ご」。"},
        {text: "うみそと", explanation: "錯誤：不應使用訓讀「うみ」和「そと」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0054",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "てんき",
    options: [
        {text: "天気", explanation: "正確答案：「てんき」對應的漢字是「天気」，意思是天氣。"},
        {text: "天機", explanation: "錯誤：「天機」讀作「てんき」，但意思是天機，不適用。"},
        {text: "展期", explanation: "錯誤：「展期」讀作「てんき」。"},
        {text: "点記", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0055",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "面接",
    options: [
        {text: "めんせつ", explanation: "正確答案：「面」音讀為「めん」，「接」音讀為「せつ」。\n中文翻譯：面試"},
        {text: "めんせ", explanation: "錯誤：「接」的讀音是「せつ」，不應省略「つ」。"},
        {text: "めせつ", explanation: "錯誤：「面」的讀音是「めん」，不應省略「ん」。"},
        {text: "めんしょう", explanation: "錯誤：「接」的讀音是「せつ」，不是「しょう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0056",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "しゅみ",
    options: [
        {text: "趣味", explanation: "正確答案：「しゅみ」對應的漢字是「趣味」，意思是興趣。"},
        {text: "首味", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "集味", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "朱味", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0057",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "理由",
    options: [
        {text: "りゆう", explanation: "正確答案：「理」音讀為「り」，「由」音讀為「ゆう」。\n中文翻譯：理由"},
        {text: "りゆ", explanation: "錯誤：「由」的讀音是「ゆう」，不應省略長音。"},
        {text: "りりゅう", explanation: "錯誤：讀音錯誤。"},
        {text: "りょゆう", explanation: "錯誤：「理」的讀音是「り」，不是「りょ」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0058",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ようす",
    options: [
        {text: "様子", explanation: "正確答案：「ようす」對應的漢字是「様子」，意思是樣子、情況。"},
        {text: "容子", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "洋子", explanation: "錯誤：「洋子」讀作「ようこ」，是人名。"},
        {text: "要す", explanation: "錯誤：「要す」是動詞，意思為需要。"}
    ],
    correctAnswer: 0
},
{
    id: "V0059",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "係員",
    options: [
        {text: "かかりいん", explanation: "正確答案：訓讀「係（かかり）」接音讀「員（いん）」。\n中文翻譯：工作人員、負責人"},
        {text: "けいいん", explanation: "錯誤：讀音錯誤。"},
        {text: "かかりん", explanation: "錯誤：「員」的讀音是「いん」，不應省略「い」。"},
        {text: "かんいん", explanation: "錯誤：「係」在此不讀「かん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0060",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "うけつけ",
    options: [
        {text: "受付", explanation: "正確答案：「うけつけ」對應的漢字是「受付」，意思是櫃檯、接待處。"},
        {text: "受け付け", explanation: "錯誤：這是混合表記。"},
        {text: "收付", explanation: "錯誤：日文中通常寫作「受付」。"},
        {text: "受け漬け", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0061",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "故障",
    options: [
        {text: "こしょう", explanation: "正確答案：「故」音讀為「こ」，「障」音讀為「しょう」。\n中文翻譯：故障"},
        {text: "こしょ", explanation: "錯誤：「障」的讀音是「しょう」，不應省略長音。"},
        {text: "ごしょう", explanation: "錯誤：「故」的讀音是「こ」，不是「ご」。"},
        {text: "こぼう", explanation: "錯誤：「障」的讀音是「しょう」，不是「ぼう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0062",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "けんこう",
    options: [
        {text: "健康", explanation: "正確答案：「けんこう」對應的漢字是「健康」，意思為健康。"},
        {text: "現行", explanation: "錯誤：「現行」讀作「げんこう」。"},
        {text: "原稿", explanation: "錯誤：「原稿」讀作「げんこう」。"},
        {text: "憲行", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0063",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "銀行",
    options: [
        {text: "ぎんこう", explanation: "正確答案：「銀」音讀為「ぎん」，「行」音讀為「こう」。\n中文翻譯：銀行"},
        {text: "ぎんこ", explanation: "錯誤：「行」的讀音是「こう」，不應省略長音。"},
        {text: "きんこう", explanation: "錯誤：「銀」的讀音是「ぎん」，不是「きん」。"},
        {text: "ぎんぎょう", explanation: "錯誤：「行」的讀音是「こう」，不是「ぎょう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0064",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N5)",
    kana: "やさい",
    options: [
        {text: "野菜", explanation: "正確答案：「やさい」對應的漢字是「野菜」，意思是蔬菜。"},
        {text: "野才", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "矢菜", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "谷菜", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0065",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "相談",
    options: [
        {text: "そうだん", explanation: "正確答案：「相」音讀為「そう」，「談」音讀為「だん」。\n中文翻譯：商量、討論"},
        {text: "そだん", explanation: "錯誤：「相」的讀音是「そう」，不應省略長音。"},
        {text: "しょうだん", explanation: "錯誤：「相」的讀音是「そう」，不是「しょう」。"},
        {text: "そうたん", explanation: "錯誤：「談」的讀音是「だん」，不是「たん」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0066",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "けしき",
    options: [
        {text: "景色", explanation: "正確答案：「けしき」對應的漢字是「景色」，意思是景色、風景。"},
        {text: "景気", explanation: "錯誤：「景気」讀作「けいき」，意思是景氣。"},
        {text: "家色", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "気色", explanation: "錯誤：「気色」讀作「きしょく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0067",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "辞書",
    options: [
        {text: "じしょ", explanation: "正確答案：「辞」音讀為「じ」，「書」音讀為「しょ」。\n中文翻譯：字典"},
        {text: "じっしょ", explanation: "錯誤：「辞」的讀音是「じ」，不應促音化。"},
        {text: "じしょお", explanation: "錯誤：多了一個「お」的音。"},
        {text: "ししょ", explanation: "錯誤：「辞」的讀音是「じ」，不是「し」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0068",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "やさしい",
    options: [
        {text: "優しい", explanation: "正確答案：「やさしい」對應的漢字是「優しい」，意思是溫柔的、和藹的。"},
        {text: "易しい", explanation: "錯誤：「易しい」讀作「やさしい」，意思是簡單的，但與「溫柔」語意不符。"},
        {text: "矢さしい", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "優し", explanation: "錯誤：不完整動詞變化。"}
    ],
    correctAnswer: 0
},
{
    id: "V0069",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "受付",
    options: [
        {text: "うけつけ", explanation: "正確答案：訓讀動詞「受ける（うけ）」的連用形接「付く（つく）」的連用形。\n中文翻譯：櫃檯；接待處"},
        {text: "じゅふ", explanation: "錯誤：音讀錯誤。"},
        {text: "うけつ", explanation: "錯誤：讀音不完整。"},
        {text: "じゅけつ", explanation: "錯誤：讀音錯誤。"}
    ],
    correctAnswer: 0
},
{
    id: "V0070",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "よごれる",
    options: [
        {text: "汚れる", explanation: "正確答案：「よごれる」對應的漢字是「汚れる」，意思是弄髒（自）。"},
        {text: "除れる", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "依れる", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "善れる", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0071",
    type: "reading",
    question: "「賑やか（にぎやか）」的中文意思是什麼？ (N4)",
    kanji: "賑やか",
    options: [
        {text: "熱鬧的", explanation: "正確答案：「賑やか」是 $\text{Na}$ 形容詞，意思是熱鬧的。"},
        {text: "安靜的", explanation: "錯誤：「安靜的」是「静か（しずか）」。"},
        {text: "重要的", explanation: "錯誤：「重要的」是「大切（たいせつ）」。"},
        {text: "方便的", explanation: "錯誤：「方便的」是「便利（べんり）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0072",
    type: "reading",
    question: "「美味しい（おいしい）」的相反詞，對應的中文意思是什麼？ (N5)",
    kanji: "不味い",
    options: [
        {text: "難吃的", explanation: "正確答案：「不味い（まずい）」是 $\text{I}$ 形容詞，意思是難吃的、難受的。"},
        {text: "很鹹的", explanation: "錯誤：「很鹹的」是「塩辛い（しおからい）」。"},
        {text: "很苦的", explanation: "錯誤：「很苦的」是「苦い（にがい）」。"},
        {text: "很辣的", explanation: "錯誤：「很辣的」是「辛い（からい）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0073",
    type: "reading",
    question: "「優しい（やさしい）」在形容一個人時，中文意思是什麼？ (N4)",
    kanji: "優しい",
    options: [
        {text: "溫柔的、和藹的", explanation: "正確答案：「優しい」意思是溫柔的、和藹的。"},
        {text: "簡單的、容易的", explanation: "錯誤：「簡單的」是「易しい（やさしい）」(同音異義，但漢字不同)。"},
        {text: "嚴厲的、嚴格的", explanation: "錯誤：「嚴厲的」是「厳しい（きびしい）」。"},
        {text: "健談的、多話的", explanation: "錯誤：「健談的」是「話好き（はなしずき）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0074",
    type: "reading",
    question: "「荷物（にもつ）」的中文意思是什麼？ (N5)",
    kanji: "荷物",
    options: [
        {text: "行李、物品", explanation: "正確答案：「荷物」是名詞，意思是行李、物品。"},
        {text: "錢包", explanation: "錯誤：「錢包」是「財布（さいふ）」。"},
        {text: "地址", explanation: "錯誤：「地址」是「住所（じゅうしょ）」。"},
        {text: "字典", explanation: "錯誤：「字典」是「辞書（じしょ）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0075",
    type: "reading",
    question: "「慣れる（なれる）」的中文意思是什麼？ (N4)",
    kanji: "慣れる",
    options: [
        {text: "習慣、適應", explanation: "正確答案：「慣れる」是動詞，意思是習慣、適應。"},
        {text: "忘記", explanation: "錯誤：「忘記」是「忘れる（わすれる）」。"},
        {text: "記住", explanation: "錯誤：「記住」是「覚える（おぼえる）」。"},
        {text: "決定", explanation: "錯誤：「決定」是「決める（きめる）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0076",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "部長",
    options: [
        {text: "ぶちょう", explanation: "正確答案：「部」音讀為「ぶ」，「長」音讀為「ちょう」。\n中文翻譯：部長"},
        {text: "ぶじょう", explanation: "錯誤：「長」的讀音是「ちょう」，不是「じょう」。"},
        {text: "ぶっとう", explanation: "錯誤：讀音錯誤。"},
        {text: "ふちょう", explanation: "錯誤：「部」的讀音是「ぶ」，不是「ふ」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0077",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "しゅくだい",
    options: [
        {text: "宿題", explanation: "正確答案：「しゅくだい」對應的漢字是「宿題」，意思是作業。"},
        {text: "祝題", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "習題", explanation: "錯誤：「習題」讀作「しゅうだい」。"},
        {text: "塾題", explanation: "錯誤：「塾題」讀作「じゅくだい」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0078",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N5)",
    kanji: "卵",
    options: [
        {text: "たまご", explanation: "正確答案：「卵」訓讀為「たまご」。\n中文翻譯：蛋"},
        {text: "らん", explanation: "錯誤：「卵」的音讀是「らん」，但作為單詞通常讀訓讀。"},
        {text: "きょう", explanation: "錯誤：讀音錯誤。"},
        {text: "まる", explanation: "錯誤：讀音錯誤。"}
    ],
    correctAnswer: 0
},
{
    id: "V0079",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ざんねん",
    options: [
        {text: "残念", explanation: "正確答案：「ざんねん」對應的漢字是「残念」，意思是遺憾、可惜。"},
        {text: "蠶念", explanation: "錯誤"},
        {text: "産念", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "斬念", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0080",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "規則",
    options: [
        {text: "きそく", explanation: "正確答案：「規」音讀為「き」，「則」音讀為「そく」。\n中文翻譯：規則"},
        {text: "きぞく", explanation: "錯誤：「則」的讀音是「そく」，不是「ぞく」。"},
        {text: "きっそく", explanation: "錯誤：「規」的讀音是「き」，不應促音化。"},
        {text: "きしょく", explanation: "錯誤：「則」的讀音是「そく」，不是「しょく」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0081",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "まじめ",
    options: [
        {text: "真面目", explanation: "正確答案：「まじめ」對應的漢字是「真面目」，意思是認真的。"},
        {text: "真目", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "正面目", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "真実", explanation: "錯誤：「真実」讀作「しんじつ」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0082",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "夢中",
    options: [
        {text: "むちゅう", explanation: "正確答案：「夢」音讀為「む」，「中」音讀為「ちゅう」。\n中文翻譯：著迷、入迷"},
        {text: "ゆめちゅう", explanation: "錯誤：「夢」在此讀音讀「む」，不讀訓讀「ゆめ」。"},
        {text: "もちゅう", explanation: "錯誤：「夢」的讀音是「む」，不是「も」。"},
        {text: "むなか", explanation: "錯誤：「中」在此應讀音讀「ちゅう」，不讀「なか」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0083",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "わすれる",
    options: [
        {text: "忘れる", explanation: "正確答案：「わすれる」對應的漢字是「忘れる」，意思是忘記。"},
        {text: "忘れ", explanation: "錯誤：此為中文簡體字，日文正字為「忘れる」。"},
        {text: "和連れる", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "輪連れる", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0084",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "故障",
    options: [
        {text: "こしょう", explanation: "正確答案：「故」音讀為「こ」，「障」音讀為「しょう」。\n中文翻譯：故障"},
        {text: "こしょ", explanation: "錯誤：「障」的讀音是「しょう」，不應省略長音。"},
        {text: "ごしょう", explanation: "錯誤：「故」的讀音是「こ」，不是「ご」。"},
        {text: "こぼう", explanation: "錯誤：「障」的讀音是「しょう」，不是「ぼう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0085",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ふしぎ",
    options: [
        {text: "不思議", explanation: "正確答案：「ふしぎ」對應的漢字是「不思議」，意思是不可思議的。"},
        {text: "不思義", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "布敷義", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "不司議", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0086",
    type: "reading",
    question: "「一生懸命（いっしょうけんめい）」的中文意思是什麼？ (N4)",
    kanji: "一生懸命",
    options: [
        {text: "拼命地、努力地", explanation: "正確答案：「一生懸命」是 $\text{Na}$ 形容詞/副詞，意思是拼命地、努力地。"},
        {text: "永遠、一輩子", explanation: "錯誤：「永遠」是「永遠（えいえん）」。"},
        {text: "非常有趣", explanation: "錯誤：「非常有趣」是「とても面白い（おもしろい）」。"},
        {text: "非常簡單", explanation: "錯誤：「非常簡單」是「とても簡単（かんたん）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0087",
    type: "reading",
    question: "動詞「手伝う（てつだう）」的中文意思是什麼？ (N4)",
    kanji: "手伝う",
    options: [
        {text: "幫忙、協助", explanation: "正確答案：「手伝う」是動詞，意思是幫忙、協助。"},
        {text: "傳達、告知", explanation: "錯誤：「傳達」是「伝える（つたえる）」。"},
        {text: "約定、承諾", explanation: "錯誤：「約定」是「約束（やくそく）」。"},
        {text: "打掃", explanation: "錯誤：「打掃」是「掃除する（そうじする）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0088",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "意見",
    options: [
        {text: "いけん", explanation: "正確答案：「意」音讀為「い」，「見」音讀為「けん」。\n中文翻譯：意見"},
        {text: "いげん", explanation: "錯誤：「見」的讀音是「けん」，不是「げん」。"},
        {text: "いきん", explanation: "錯誤：「見」的讀音是「けん」，不是「きん」。"},
        {text: "おもいみ", explanation: "錯誤：不應使用訓讀。"}
    ],
    correctAnswer: 0
},
{
    id: "V0089",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "じしん",
    options: [
        {text: "地震", explanation: "正確答案：「じしん」對應的漢字是「地震」，意思是地震。"},
        {text: "時針", explanation: "錯誤：「時針」讀作「じしん」。"},
        {text: "自信", explanation: "錯誤：「自信」讀作「じしん」，意思是自信。"},
        {text: "持心", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0090",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "発表",
    options: [
        {text: "はっぴょう", explanation: "正確答案：「発」音讀為「はっ」，「表」音讀為「ぴょう」。\n中文翻譯：發表"},
        {text: "はっぴょ", explanation: "錯誤：「表」的讀音是「ぴょう」，不應省略長音。"},
        {text: "はつぴょう", explanation: "錯誤：「発」的讀音是「はっ」，應促音化。"},
        {text: "ひょうはつ", explanation: "錯誤：順序顛倒。"}
    ],
    correctAnswer: 0
},
{
    id: "V0091",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "ひつよう",
    options: [
        {text: "必要", explanation: "正確答案：「ひつよう」對應的漢字是「必要」，意思是必要的。"},
        {text: "畢要", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "必然", explanation: "錯誤：「必然」讀作「ひつぜん」。"},
        {text: "必用", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
        "id": "V0092",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4) (意味：應盡的責任)",
        "kanji": "義務",
        "options": [
            {"text": "ぎむ", "explanation": "正確答案：「義」音讀為「ぎ」，「務」音讀為「む」。\n中文翻譯：義務"},
            {"text": "ぎぶ", "explanation": "錯誤：「務」的讀音是「む」，不是「ぶ」。\n中文翻譯：義務"},
            {"text": "きむ", "explanation": "錯誤：「義」的讀音是「ぎ」，不是「き」。\n中文翻譯：義務"},
            {"text": "いむ", "explanation": "錯誤：「義」在此不讀「い」。\n中文翻譯：義務"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0093",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "へんこう",
    options: [
        {text: "変更", explanation: "正確答案：「へんこう」對應的漢字是「変更」，意思是變更、更改。"},
        {text: "変行", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "辺行", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "編號", explanation: "錯誤：「編號」讀作「へんごう」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0094",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "習慣",
    options: [
        {text: "しゅうかん", explanation: "正確答案：「習」音讀為「しゅう」，「慣」音讀為「かん」。\n中文翻譯：習慣"},
        {text: "しゅうがん", explanation: "錯誤：「慣」的讀音是「かん」，不是「がん」。"},
        {text: "しゅかん", explanation: "錯誤：「習」的讀音是「しゅう」，不應省略長音。"},
        {text: "しゅつかん", explanation: "錯誤：「習」的讀音是「しゅう」，不是「しゅつ」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0095",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "おなじ",
    options: [
        {text: "同じ", explanation: "正確答案：「おなじ」對應的漢字是「同じ」，意思是相同的。"},
        {text: "同じ", explanation: "錯誤：此為不規範的表記。"},
        {text: "小なじ", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "尾名寺", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0096",
    type: "reading",
    question: "副詞「なかなか」在接否定時，中文意思是什麼？ (N4)",
    kanji: "なかなか (〜ない)",
    options: [
        {text: "不容易、怎麼也（不）", explanation: "正確答案：「なかなか～ない」表示不容易、怎麼也（不）。"},
        {text: "非常地、很", explanation: "錯誤：「非常地」是「とても」或「非常に（ひじょうに）」。"},
        {text: "立刻、馬上", explanation: "錯誤：「立刻」是「すぐ」。"},
        {text: "時常地、總是", explanation: "錯誤：「時常地」是「いつも」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0097",
    type: "reading",
    question: "形容詞「詰まらない（つまらない）」的中文意思是什麼？ (N4)",
    kanji: "詰まらない",
    options: [
        {text: "無聊的、沒意思的", explanation: "正確答案：「詰まらない」是 $\text{I}$ 形容詞，意思是無聊的、沒意思的。"},
        {text: "令人困擾的", explanation: "錯誤：「困擾的」是「困る（こまる）」。"},
        {text: "令人害羞的", explanation: "錯誤：「害羞的」是「恥ずかしい（はずかしい）」。"},
        {text: "有趣的", explanation: "錯誤：「有趣的」是「面白い（おもしろい）」。"}
    ],
    correctAnswer: 0
},
{
    id: "V0098",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "泥棒",
    options: [
        {text: "どろぼう", explanation: "正確答案：「泥」訓讀為「どろ」，「棒」音讀為「ぼう」。\n中文翻譯：小偷"},
        {text: "でいぼう", explanation: "錯誤：「泥」在此不讀音讀「でい」。"},
        {text: "どろぼ", explanation: "錯誤：「棒」的讀音是「ぼう」，不應省略長音。"},
        {text: "でいほう", explanation: "錯誤：讀音錯誤。"}
    ],
    correctAnswer: 0
},
{
    id: "V0099",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい (N4)",
    kana: "くわしい",
    options: [
        {text: "詳しい", explanation: "正確答案：「くわしい」對應的漢字是「詳しい」，意思是詳細的。"},
        {text: "苦しい", explanation: "錯誤：「苦しい」讀作「くるしい」，意思是痛苦的。"},
        {text: "具しい", explanation: "錯誤：此為不存在的漢字組合。"},
        {text: "句話しい", explanation: "錯誤：此為不存在的漢字組合。"}
    ],
    correctAnswer: 0
},
{
    id: "V0100",
    type: "reading",
    question: "次の漢字の読み方を選びなさい (N4)",
    kanji: "匂い",
    options: [
        {text: "におい", explanation: "正確答案：「匂い」訓讀為「におい」。\n中文翻譯：氣味"},
        {text: "かおり", explanation: "錯誤：「香り」讀作「かおり」，意思為香味，語意上較為限定。"},
        {text: "におう", explanation: "錯誤：「におう」是動詞，意思為聞到。"},
        {text: "こうい", explanation: "錯誤：讀音錯誤。"}
    ],
    correctAnswer: 0
},
{
    id: "V0101",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "劇場",
    options: [
        {text: "げきじょう", explanation: "正確答案：「劇」音讀為「げき」，「場」音讀為「じょう」。\n中文翻譯：劇場"},
        {text: "げきじょ", explanation: "錯誤：「場」的讀音是「じょう」，不應省略長音。\n中文翻譯：劇場"},
        {text: "げきちょう", explanation: "錯誤：「場」的讀音是「じょう」，不是「ちょう」。\n中文翻譯：劇場"},
        {text: "げっきじょう", explanation: "錯誤：「劇」的讀音是「げき」，不應促音化。\n中文翻譯：劇場"}
    ],
    correctAnswer: 0
},
{
    id: "V0102",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "としょかん",
    options: [
        {text: "図書館", explanation: "正確答案：「としょかん」對應的漢字是「図書館」，意思是圖書館。\n中文翻譯：圖書館"},
        {text: "図書官", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "都所館", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "渡書館", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0103",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "博物館",
    options: [
        {text: "はくぶつかん", explanation: "正確答案：「博」音讀為「はく」，「物」音讀為「ぶつ」，「館」音讀為「かん」。\n中文翻譯：博物館"},
        {text: "はくぶつがん", explanation: "錯誤：「館」的讀音是「かん」，不是「がん」。\n中文翻譯：博物館"},
        {text: "はくものかん", explanation: "錯誤：「物」的讀音是「ぶつ」，不應使用訓讀「もの」。\n中文翻譯：博物館"},
        {text: "ばくぶつかん", explanation: "錯誤：「博」的讀音是「はく」，不是「ばく」。\n中文翻譯：博物館"}
    ],
    correctAnswer: 0
},
{
    id: "V0104",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "びじん",
    options: [
        {text: "美人", explanation: "正確答案：「びじん」對應的漢字是「美人」，意思是美女。\n中文翻譯：美女"},
        {text: "微人", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "尾人", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "眉人", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0105",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "俳優",
    options: [
        {text: "はいゆう", explanation: "正確答案：「俳」音讀為「はい」，「優」音讀為「ゆう」。\n中文翻譯：演員"},
        {text: "はいゆ", explanation: "錯誤：「優」的讀音是「ゆう」，不應省略長音。\n中文翻譯：演員"},
        {text: "ばいゆう", explanation: "錯誤：「俳」的讀音是「はい」，不是「ばい」。\n中文翻譯：演員"},
        {text: "はいよう", explanation: "錯誤：「優」的讀音是「ゆう」，不是「よう」。\n中文翻譯：演員"}
    ],
    correctAnswer: 0
},
{
    id: "V0106",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "さっか",
    options: [
        {text: "作家", explanation: "正確答案：「さっか」對應的漢字是「作家」，意思是作家。\n中文翻譯：作家"},
        {text: "作歌", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "昨夏", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "擦過", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0107",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "詩人",
    options: [
        {text: "しじん", explanation: "正確答案：「詩」音讀為「し」，「人」音讀為「じん」。\n中文翻譯：詩人"},
        {text: "しにん", explanation: "錯誤：「人」的讀音是「じん」，不是「にん」。\n中文翻譯：詩人"},
        {text: "しいじん", explanation: "錯誤：多了一個「い」的音。\n中文翻譯：詩人"},
        {text: "しひと", explanation: "錯誤：不應使用訓讀「ひと」。\n中文翻譯：詩人"}
    ],
    correctAnswer: 0
},
{
    id: "V0108",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "がか",
    options: [
        {text: "画家", explanation: "正確答案：「がか」對應的漢字是「画家」，意思是畫家。\n中文翻譯：畫家"},
        {text: "雅家", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "我価", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "賀歌", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0109",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "音楽家",
    options: [
        {text: "おんがくか", explanation: "正確答案：「音」音讀為「おん」，「楽」音讀為「がく」，「家」音讀為「か」。\n中文翻譯：音樂家"},
        {text: "おんがっか", explanation: "錯誤：「楽」的讀音是「がく」，不應促音化。\n中文翻譯：音樂家"},
        {text: "おんがくけ", explanation: "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：音樂家"},
        {text: "おんがか", explanation: "錯誤：「楽」的讀音是「がく」，不應省略「く」。\n中文翻譯：音樂家"}
    ],
    correctAnswer: 0
},
{
    id: "V0110",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "いしゃ",
    options: [
        {text: "医者", explanation: "正確答案：「いしゃ」對應的漢字是「医者」，意思是醫生。\n中文翻譯：醫生"},
        {text: "慰謝", explanation: "錯誤：「慰謝」讀作「いしゃ」，意思是慰謝。\n中文翻譯：慰謝"},
        {text: "位者", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "依写", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0111",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "看護師",
    options: [
        {text: "かんごし", explanation: "正確答案：「看」音讀為「かん」，「護」音讀為「ご」，「師」音讀為「し」。\n中文翻譯：護士"},
        {text: "かんごしゃ", explanation: "錯誤：「師」的讀音是「し」，不是「しゃ」。\n中文翻譯：護士"},
        {text: "がんごし", explanation: "錯誤：「看」的讀音是「かん」，不是「がん」。\n中文翻譯：護士"},
        {text: "かんごうし", explanation: "錯誤：「護」的讀音是「ご」，不是「ごう」。\n中文翻譯：護士"}
    ],
    correctAnswer: 0
},
{
        "id": "V0112",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：薪水)",
        "kana": "きゅうりょう",
        "options": [
            {"text": "給料", "explanation": "正確答案：「きゅうりょう」在此語境下對應的漢字是「給料」，意思是薪水。"},
            {"text": "休漁", "explanation": "錯誤：「休漁」讀音也是「きゅうりょう」，但意思是停止捕魚，語意不符。"},
            {"text": "急量", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "究量", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0113",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "建築家",
    options: [
        {text: "けんちくか", explanation: "正確答案：「建」音讀為「けん」，「築」音讀為「ちく」，「家」音讀為「か」。\n中文翻譯：建築師"},
        {text: "けんちっか", explanation: "錯誤：「築」的讀音是「ちく」，不應促音化。\n中文翻譯：建築師"},
        {text: "けんちくけ", explanation: "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：建築師"},
        {text: "げんちくか", explanation: "錯誤：「建」的讀音是「けん」，不是「げん」。\n中文翻譯：建築師"}
    ],
    correctAnswer: 0
},
{
    id: "V0114",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けんちく",
    options: [
        {text: "建築", explanation: "正確答案：「けんちく」對應的漢字是「建築」，意思是建築。\n中文翻譯：建築"},
        {text: "見築", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "賢築", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "県築", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0115",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "デザイナー",
    options: [
        {text: "でざいなー", explanation: "正確答案：外來語「designer」的日文讀音。\n中文翻譯：設計師"},
        {text: "でさいなー", explanation: "錯誤：濁音化錯誤，應為「ざ」不是「さ」。\n中文翻譯：設計師"},
        {text: "てざいなー", explanation: "錯誤：清音化錯誤，應為「で」不是「て」。\n中文翻譯：設計師"},
        {text: "でざいな", explanation: "錯誤：漏掉了長音「ー」。\n中文翻譯：設計師"}
    ],
    correctAnswer: 0
},
{
        "id": "V0116",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：出席)",
        "kana": "しゅっせき",
        "options": [
            {"text": "出席", "explanation": "正確答案：「しゅっせき」對應的漢字是「出席」，意思是出席。"},
            {"text": "出籍", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "手籍", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "出跡", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0117",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "研究者",
    options: [
        {text: "けんきゅうしゃ", explanation: "正確答案：「研」音讀為「けん」，「究」音讀為「きゅう」，「者」音讀為「しゃ」。\n中文翻譯：研究者"},
        {text: "けんきゅうじゃ", explanation: "錯誤：「者」的讀音是「しゃ」，不是「じゃ」。\n中文翻譯：研究者"},
        {text: "げんきゅうしゃ", explanation: "錯誤：「研」的讀音是「けん」，不是「げん」。\n中文翻譯：研究者"},
        {text: "けんきゅしゃ", explanation: "錯誤：「究」的讀音是「きゅう」，不應省略長音。\n中文翻譯：研究者"}
    ],
    correctAnswer: 0
},
{
    id: "V0118",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "がくしゃ",
    options: [
        {text: "学者", explanation: "正確答案：「がくしゃ」對應的漢字是「学者」，意思是學者。\n中文翻譯：學者"},
        {text: "楽者", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "額者", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "学舎", explanation: "錯誤：「学舎」讀作「がくしゃ」，意思是學校；學舍。\n中文翻譯：學校"}
    ],
    correctAnswer: 0
},
{
    id: "V0119",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "教授",
    options: [
        {text: "きょうじゅ", explanation: "正確答案：「教」音讀為「きょう」，「授」音讀為「じゅ」。\n中文翻譯：教授"},
        {text: "きょうじゅう", explanation: "錯誤：「授」的讀音是「じゅ」，不是「じゅう」。\n中文翻譯：教授"},
        {text: "きょじゅ", explanation: "錯誤：「教」的讀音是「きょう」，不應省略長音。\n中文翻譯：教授"},
        {text: "こうじゅ", explanation: "錯誤：「教」的讀音是「きょう」，不是「こう」。\n中文翻譯：教授"}
    ],
    correctAnswer: 0
},
{
    id: "V0120",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はくし",
    options: [
        {text: "博士", explanation: "正確答案：「はくし」對應的漢字是「博士」，意思是博士。\n中文翻譯：博士"},
        {text: "薄士", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "白士", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "博志", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0121",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "発明家",
    options: [
        {text: "はつめいか", explanation: "正確答案：「発」音讀為「はつ」，「明」音讀為「めい」，「家」音讀為「か」。\n中文翻譯：發明家"},
        {text: "はつめか", explanation: "錯誤：「明」的讀音是「めい」，不應省略「い」。\n中文翻譯：發明家"},
        {text: "はつめいけ", explanation: "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：發明家"},
        {text: "はつみょうか", explanation: "錯誤：「明」的讀音是「めい」，不是「みょう」。\n中文翻譯：發明家"}
    ],
    correctAnswer: 0
},
{
        "id": "V0122",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：交通)",
        "kana": "こうつう",
        "options": [
            {"text": "交通", "explanation": "正確答案：「こうつう」對應的漢字是「交通」，意思是交通。"},
            {"text": "公通", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "口通", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "交痛", "explanation": "錯誤：「痛」的讀音是「つう」或「いた」，但意思不符，通常用於『痛苦』。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0123",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "探検家",
    options: [
        {text: "たんけんか", explanation: "正確答案：「探」音讀為「たん」，「検」音讀為「けん」，「家」音讀為「か」。\n中文翻譯：探險家"},
        {text: "たんげんか", explanation: "錯誤：「検」的讀音是「けん」，不是「げん」。\n中文翻譯：探險家"},
        {text: "たんけんけ", explanation: "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：探險家"},
        {text: "だんけんか", explanation: "錯誤：「探」的讀音是「たん」，不是「だん」。\n中文翻譯：探險家"}
    ],
    correctAnswer: 0
},
{
    id: "V0124",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ぼうけん",
    options: [
        {text: "冒険", explanation: "正確答案：「ぼうけん」對應的漢字是「冒険」，意思是冒險。\n中文翻譯：冒險"},
        {text: "望険", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "忙険", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "暴険", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0125",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "旅行者",
    options: [
        {text: "りょこうしゃ", explanation: "正確答案：「旅」音讀為「りょ」，「行」音讀為「こう」，「者」音讀為「しゃ」。\n中文翻譯：旅行者"},
        {text: "りょこうじゃ", explanation: "錯誤：「者」的讀音是「しゃ」，不是「じゃ」。\n中文翻譯：旅行者"},
        {text: "りょこしゃ", explanation: "錯誤：「行」的讀音是「こう」，不應省略長音。\n中文翻譯：旅行者"},
        {text: "りょうこうしゃ", explanation: "錯誤：「旅」的讀音是「りょ」，不是「りょう」。\n中文翻譯：旅行者"}
    ],
    correctAnswer: 0
},
{
    id: "V0126",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きゃく",
    options: [
        {text: "客", explanation: "正確答案：「きゃく」對應的漢字是「客」，意思是客人；顧客。\n中文翻譯：客人"},
        {text: "却", explanation: "錯誤：「却」讀作「きゃく」，意思是卻；反而。\n中文翻譯：卻"},
        {text: "脚", explanation: "錯誤：「脚」讀作「きゃく」，意思是腳。\n中文翻譯：腳"},
        {text: "規約", explanation: "錯誤：「規約」讀作「きやく」，意思是規約。\n中文翻譯：規約"}
    ],
    correctAnswer: 0
},
{
    id: "V0127",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "観光客",
    options: [
        {text: "かんこうきゃく", explanation: "正確答案：「観」音讀為「かん」，「光」音讀為「こう」，「客」音讀為「きゃく」。\n中文翻譯：觀光客"},
        {text: "かんこうきゃっく", explanation: "錯誤：「客」的讀音是「きゃく」，不應促音化。\n中文翻譯：觀光客"},
        {text: "かんこきゃく", explanation: "錯誤：「光」的讀音是「こう」，不應省略長音。\n中文翻譯：觀光客"},
        {text: "がんこうきゃく", explanation: "錯誤：「観」的讀音是「かん」，不是「がん」。\n中文翻譯：觀光客"}
    ],
    correctAnswer: 0
},
{
    id: "V0128",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "りょかん",
    options: [
        {text: "旅館", explanation: "正確答案：「りょかん」對應的漢字是「旅館」，意思是旅館。\n中文翻譯：旅館"},
        {text: "旅官", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "慮館", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "呂館", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0129",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "温泉",
    options: [
        {text: "おんせん", explanation: "正確答案：「温」音讀為「おん」，「泉」音讀為「せん」。\n中文翻譯：溫泉"},
        {text: "おんせ", explanation: "錯誤：「泉」的讀音是「せん」，不應省略「ん」。\n中文翻譯：溫泉"},
        {text: "おうせん", explanation: "錯誤：「温」的讀音是「おん」，不是「おう」。\n中文翻譯：溫泉"},
        {text: "おんぜん", explanation: "錯誤：「泉」的讀音是「せん」，不是「ぜん」。\n中文翻譯：溫泉"}
    ],
    correctAnswer: 0
},
{
    id: "V0130",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しぜん",
    options: [
        {text: "自然", explanation: "正確答案：「しぜん」對應的漢字是「自然」，意思是自然。\n中文翻譯：自然"},
        {text: "至全", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "資然", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "詩善", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0131",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "環境問題",
    options: [
        {text: "かんきょうもんだい", explanation: "正確答案：「環」音讀為「かん」，「境」音讀為「きょう」，「問」音讀為「もん」，「題」音讀為「だい」。\n中文翻譯：環境問題"},
        {text: "かんきょうもんたい", explanation: "錯誤：「題」的讀音是「だい」，不是「たい」。\n中文翻譯：環境問題"},
        {text: "かんきょもんだい", explanation: "錯誤：「境」的讀音是「きょう」，不應省略長音。\n中文翻譯：環境問題"},
        {text: "がんきょうもんだい", explanation: "錯誤：「環」的讀音是「かん」，不是「がん」。\n中文翻譯：環境問題"}
    ],
    correctAnswer: 0
},
{
    id: "V0132",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "おせん",
    options: [
        {text: "汚染", explanation: "正確答案：「おせん」對應的漢字是「汚染」，意思是污染。\n中文翻譯：污染"},
        {text: "汙染", explanation: "錯誤：日文中「汚染」是正確表記，不使用「污」。\n中文翻譯：污染"},
        {text: "温染", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "押染", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0133",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "地球温暖化",
    options: [
        {text: "ちきゅうおんだんか", explanation: "正確答案：「地」音讀為「ち」，「球」音讀為「きゅう」，「温」音讀為「おん」，「暖」音讀為「だん」，「化」音讀為「か」。\n中文翻譯：全球暖化"},
        {text: "ちきゅうおんだんが", explanation: "錯誤：「化」的讀音是「か」，不是「が」。\n中文翻譯：全球暖化"},
        {text: "ちきゅうおんだか", explanation: "錯誤：「暖」的讀音是「だん」，不應省略「ん」。\n中文翻譯：全球暖化"},
        {text: "じきゅうおんだんか", explanation: "錯誤：「地」的讀音是「ち」，不是「じ」。\n中文翻譯：全球暖化"}
    ],
    correctAnswer: 0
},
{
        "id": "V0134",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "情報",
        "options": [
            {"text": "じょうほう", "explanation": "正確答案：「情」音讀為「じょう」，「報」音讀為「ほう」。\n中文翻譯：資訊、情報"},
            {"text": "じょうぼう", "explanation": "錯誤：「報」的讀音是「ほう」，不是「ぼう」。\n中文翻譯：資訊、情報"},
            {"text": "じょうほうう", "explanation": "錯誤：多餘的長音讀法。\n中文翻譯：資訊、情報"},
            {"text": "しょうほう", "explanation": "錯誤：「情」的讀音是「じょう」，不是「しょう」。\n中文翻譯：資訊、情報"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0135",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "地震",
    options: [
        {text: "じしん", explanation: "正確答案：「地」音讀為「じ」，「震」音讀為「しん」。\n中文翻譯：地震"},
        {text: "ちしん", explanation: "錯誤：「地」的讀音是「じ」，不是「ち」。\n中文翻譯：地震"},
        {text: "じじん", explanation: "錯誤：「震」的讀音是「しん」，不是「じん」。\n中文翻譯：地震"},
        {text: "じし", explanation: "錯誤：「震」的讀音是「しん」，不應省略「ん」。\n中文翻譯：地震"}
    ],
    correctAnswer: 0
},
{
    id: "V0136",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "たいふう",
    options: [
        {text: "台風", explanation: "正確答案：「たいふう」對應的漢字是「台風」，意思是颱風。\n中文翻譯：颱風"},
        {text: "大風", explanation: "錯誤：「大風」讀作「おおかぜ」，意思是大風。\n中文翻譯：大風"},
        {text: "対風", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "待風", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0137",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "洪水",
    options: [
        {text: "こうずい", explanation: "正確答案：「洪」音讀為「こう」，「水」音讀為「ずい」。\n中文翻譯：洪水"},
        {text: "こうすい", explanation: "錯誤：「水」在此讀音是「ずい」，不是「すい」。\n中文翻譯：洪水"},
        {text: "ごうずい", explanation: "錯誤：「洪」的讀音是「こう」，不是「ごう」。\n中文翻譯：洪水"},
        {text: "こうず", explanation: "錯誤：「水」的讀音是「ずい」，不應省略「い」。\n中文翻譯：洪水"}
    ],
    correctAnswer: 0
},
{
    id: "V0138",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ひがい",
    options: [
        {text: "被害", explanation: "正確答案：「ひがい」對應的漢字是「被害」，意思是受害；損害。\n中文翻譯：受害"},
        {text: "非害", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "被外", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "避害", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0139",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "救助",
    options: [
        {text: "きゅうじょ", explanation: "正確答案：「救」音讀為「きゅう」，「助」音讀為「じょ」。\n中文翻譯：救助"},
        {text: "きゅうじょう", explanation: "錯誤：「助」的讀音是「じょ」，不是「じょう」。\n中文翻譯：救助"},
        {text: "きゅじょ", explanation: "錯誤：「救」的讀音是「きゅう」，不應省略長音。\n中文翻譯：救助"},
        {text: "きょうじょ", explanation: "錯誤：「救」的讀音是「きゅう」，不是「きょう」。\n中文翻譯：救助"}
    ],
    correctAnswer: 0
},
{
    id: "V0140",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きゅうえん",
    options: [
        {text: "救援", explanation: "正確答案：「きゅうえん」對應的漢字是「救援」，意思是救援。\n中文翻譯：救援"},
        {text: "急援", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "休演", explanation: "錯誤：「休演」讀作「きゅうえん」，意思是停演。\n中文翻譯：停演"},
        {text: "求縁", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
        "id": "V0141",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：小心、留意)",
        "kana": "ちゅうい",
        "options": [
            {"text": "注意", "explanation": "正確答案：「ちゅうい」在此語境下對應的漢字是「注意」，意思是小心、留意。"},
            {"text": "中尉", "explanation": "錯誤：「中尉」讀音也是「ちゅうい」，但意思是軍銜『中尉』，語意不符。"},
            {"text": "仲意", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "中位", "explanation": "錯誤：「中位」讀音是「ちゅうい」，但意思是中間的位置，語意不符。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0142",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ひなんじょ",
    options: [
        {text: "避難所", explanation: "正確答案：「ひなんじょ」對應的漢字是「避難所」，意思是避難所。\n中文翻譯：避難所"},
        {text: "非難所", explanation: "錯誤：「非難」讀作「ひなん」，意思是責難。\n中文翻譯：責難場所"},
        {text: "被難所", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "秘難所", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0143",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "救急車",
    options: [
        {text: "きゅうきゅうしゃ", explanation: "正確答案：「救」音讀為「きゅう」，「急」音讀為「きゅう」，「車」音讀為「しゃ」。\n中文翻譯：救護車"},
        {text: "きゅうきゅうじゃ", explanation: "錯誤：「車」的讀音是「しゃ」，不是「じゃ」。\n中文翻譯：救護車"},
        {text: "きゅきゅうしゃ", explanation: "錯誤：「救」的讀音是「きゅう」，不應省略長音。\n中文翻譯：救護車"},
        {text: "きゅうきゅしゃ", explanation: "錯誤：「急」的讀音是「きゅう」，不應省略長音。\n中文翻譯：救護車"}
    ],
    correctAnswer: 0
},
{
    id: "V0144",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しょうぼうしゃ",
    options: [
        {text: "消防車", explanation: "正確答案：「しょうぼうしゃ」對應的漢字是「消防車」，意思是消防車。\n中文翻譯：消防車"},
        {text: "消防者", explanation: "錯誤：「者」的讀音是「しゃ」，但「消防者」不是正確的漢字組合。\n中文翻譯：消防員"},
        {text: "消房車", explanation: "錯誤：日文中「消防」是正確表記，不使用「消防」。\n中文翻譯：消防車"},
        {text: "小防車", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0145",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "警察官",
    options: [
        {text: "けいさつかん", explanation: "正確答案：「警」音讀為「けい」，「察」音讀為「さつ」，「官」音讀為「かん」。\n中文翻譯：警察"},
        {text: "けいさつがん", explanation: "錯誤：「官」的讀音是「かん」，不是「がん」。\n中文翻譯：警察"},
        {text: "けいさっかん", explanation: "錯誤：「察」的讀音是「さつ」，不應促音化。\n中文翻譯：警察"},
        {text: "げいさつかん", explanation: "錯誤：「警」的讀音是「けい」，不是「げい」。\n中文翻譯：警察"}
    ],
    correctAnswer: 0
},
{
    id: "V0146",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けいび",
    options: [
        {text: "警備", explanation: "正確答案：「けいび」對應的漢字是「警備」，意思是警備；警戒。\n中文翻譯：警備"},
        {text: "経費", explanation: "錯誤：「経費」讀作「けいひ」，意思是經費。\n中文翻譯：經費"},
        {text: "軽微", explanation: "錯誤：「軽微」讀作「けいび」，意思是輕微。\n中文翻譯：輕微"},
        {text: "刑美", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0147",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "法律家",
    options: [
        {text: "ほうりつか", explanation: "正確答案：「法」音讀為「ほう」，「律」音讀為「りつ」，「家」音讀為「か」。\n中文翻譯：法律專家"},
        {text: "ほうりつけ", explanation: "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：法律專家"},
        {text: "ほうりっか", explanation: "錯誤：「律」的讀音是「りつ」，不應促音化。\n中文翻譯：法律專家"},
        {text: "ほりつか", explanation: "錯誤：「法」的讀音是「ほう」，不應省略長音。\n中文翻譯：法律專家"}
    ],
    correctAnswer: 0
},
{
    id: "V0148",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "さいばん",
    options: [
        {text: "裁判", explanation: "正確答案：「さいばん」對應的漢字是「裁判」，意思是審判；裁判。\n中文翻譯：審判"},
        {text: "才番", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "済判", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "細番", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0149",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "裁判所",
    options: [
        {text: "さいばんしょ", explanation: "正確答案：「裁」音讀為「さい」，「判」音讀為「ばん」，「所」音讀為「しょ」。\n中文翻譯：法院"},
        {text: "さいばんじょ", explanation: "錯誤：「所」的讀音是「しょ」，不是「じょ」。\n中文翻譯：法院"},
        {text: "さいはんしょ", explanation: "錯誤：「判」的讀音是「ばん」，不是「はん」。\n中文翻譯：法院"},
        {text: "ざいばんしょ", explanation: "錯誤：「裁」的讀音是「さい」，不是「ざい」。\n中文翻譯：法院"}
    ],
    correctAnswer: 0
},
{
    id: "V0150",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "こうそ",
    options: [
        {text: "控訴", explanation: "正確答案：「こうそ」對應的漢字是「控訴」，意思是上訴。\n中文翻譯：上訴"},
        {text: "公訴", explanation: "錯誤：「公訴」讀作「こうそ」，意思是公訴。\n中文翻譯：公訴"},
        {text: "高訴", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "校訴", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0151",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "被告人",
    options: [
        {text: "ひこくにん", explanation: "正確答案：「被」音讀為「ひ」，「告」音讀為「こく」，「人」音讀為「にん」。\n中文翻譯：被告"},
        {text: "ひごくにん", explanation: "錯誤：「告」的讀音是「こく」，不是「ごく」。\n中文翻譯：被告"},
        {text: "びこくにん", explanation: "錯誤：「被」的讀音是「ひ」，不是「び」。\n中文翻譯：被告"},
        {text: "ひこくじん", explanation: "錯誤：「人」的讀音是「にん」，不是「じん」。\n中文翻譯：被告"}
    ],
    correctAnswer: 0
},
{
    id: "V0152",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "べんご",
    options: [
        {text: "弁護", explanation: "正確答案：「べんご」對應的漢字是「弁護」，意思是辯護。\n中文翻譯：辯護"},
        {text: "弁後", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "勉護", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "辺護", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0153",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "証拠",
    options: [
        {text: "しょうこ", explanation: "正確答案：「証」音讀為「しょう」，「拠」音讀為「こ」。\n中文翻譯：證據"},
        {text: "しょうご", explanation: "錯誤：「拠」的讀音是「こ」，不是「ご」。\n中文翻譯：證據"},
        {text: "しょこ", explanation: "錯誤：「証」的讀音是「しょう」，不應省略長音。\n中文翻譯：證據"},
        {text: "じょうこ", explanation: "錯誤：「証」的讀音是「しょう」，不是「じょう」。\n中文翻譯：證據"}
    ],
    correctAnswer: 0
},
{
    id: "V0154",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はんこ",
    options: [
        {text: "判子", explanation: "正確答案：「はんこ」對應的漢字是「判子」，意思是印章。\n中文翻譯：印章"},
        {text: "版子", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "半子", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "反故", explanation: "錯誤：「反故」讀作「ほご」，意思是廢紙；廢棄。\n中文翻譯：廢紙"}
    ],
    correctAnswer: 0
},
{
    id: "V0155",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "契約書",
    options: [
        {text: "けいやくしょ", explanation: "正確答案：「契」音讀為「けい」，「約」音讀為「やく」，「書」音讀為「しょ」。\n中文翻譯：契約書"},
        {text: "けいやくじょ", explanation: "錯誤：「書」的讀音是「しょ」，不是「じょ」。\n中文翻譯：契約書"},
        {text: "けやくしょ", explanation: "錯誤：「契」的讀音是「けい」，不應省略長音。\n中文翻譯：契約書"},
        {text: "けいやっくしょ", explanation: "錯誤：「約」的讀音是「やく」，不應促音化。\n中文翻譯：契約書"}
    ],
    correctAnswer: 0
},
{
    id: "V0156",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しょうにん",
    options: [
        {text: "承認", explanation: "正確答案：「しょうにん」對應的漢字是「承認」，意思是承認；批准。\n中文翻譯：承認"},
        {text: "証人", explanation: "錯誤：「証人」讀作「しょうにん」，意思是證人。\n中文翻譯：證人"},
        {text: "商人", explanation: "錯誤：「商人」讀作「しょうにん」，意思是商人。\n中文翻譯：商人"},
        {text: "小人", explanation: "錯誤：「小人」讀作「しょうにん」，意思是小人。\n中文翻譯：小人"}
    ],
    correctAnswer: 0
},
{
    id: "V0157",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "保証人",
    options: [
        {text: "ほしょうにん", explanation: "正確答案：「保」音讀為「ほ」，「証」音讀為「しょう」，「人」音讀為「にん」。\n中文翻譯：保證人"},
        {text: "ほしょうじん", explanation: "錯誤：「人」的讀音是「にん」，不是「じん」。\n中文翻譯：保證人"},
        {text: "ほしょにん", explanation: "錯誤：「証」的讀音是「しょう」，不應省略長音。\n中文翻譯：保證人"},
        {text: "ぼしょうにん", explanation: "錯誤：「保」的讀音是「ほ」，不是「ぼ」。\n中文翻譯：保證人"}
    ],
    correctAnswer: 0
},
{
    id: "V0158",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "りし",
    options: [
        {text: "利子", explanation: "正確答案：「りし」對應的漢字是「利子」，意思是利息。\n中文翻譯：利息"},
        {text: "利市", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "理子", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "里志", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0159",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "利息",
    options: [
        {text: "りそく", explanation: "正確答案：「利」音讀為「り」，「息」音讀為「そく」。\n中文翻譯：利息"},
        {text: "りそっく", explanation: "錯誤：「息」的讀音是「そく」，不應促音化。\n中文翻譯：利息"},
        {text: "りしょく", explanation: "錯誤：「息」的讀音是「そく」，不是「しょく」。\n中文翻譯：利息"},
        {text: "りそ", explanation: "錯誤：「息」的讀音是「そく」，不應省略「く」。\n中文翻譯：利息"}
    ],
    correctAnswer: 0
},
{
    id: "V0160",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しんよう",
    options: [
        {text: "信用", explanation: "正確答案：「しんよう」對應的漢字是「信用」，意思是信用。\n中文翻譯：信用"},
        {text: "信頼", explanation: "錯誤：「信頼」讀作「しんらい」，意思是信賴。\n中文翻譯：信賴"},
        {text: "真用", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "深用", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0161",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "投資",
    options: [
        {text: "とうし", explanation: "正確答案：「投」音讀為「とう」，「資」音讀為「し」。\n中文翻譯：投資"},
        {text: "とうじ", explanation: "錯誤：「資」的讀音是「し」，不是「じ」。\n中文翻譯：投資"},
        {text: "とし", explanation: "錯誤：「投」的讀音是「とう」，不應省略長音。\n中文翻譯：投資"},
        {text: "どうし", explanation: "錯誤：「投」的讀音是「とう」，不是「どう」。\n中文翻譯：投資"}
    ],
    correctAnswer: 0
},
{
    id: "V0162",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しさん",
    options: [
        {text: "資産", explanation: "正確答案：「しさん」對應的漢字是「資産」，意思是資產。\n中文翻譯：資產"},
        {text: "死産", explanation: "錯誤：「死産」讀作「しさん」，意思是死產。\n中文翻譯：死產"},
        {text: "四散", explanation: "錯誤：「四散」讀作「しさん」，意思是四散。\n中文翻譯：四散"},
        {text: "詩産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0163",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "財産",
    options: [
        {text: "ざいさん", explanation: "正確答案：「財」音讀為「ざい」，「産」音讀為「さん」。\n中文翻譯：財產"},
        {text: "ざいざん", explanation: "錯誤：「産」的讀音是「さん」，不是「ざん」。\n中文翻譯：財產"},
        {text: "さいさん", explanation: "錯誤：「財」的讀音是「ざい」，不是「さい」。\n中文翻譯：財產"},
        {text: "ざいしゃ", explanation: "錯誤：「産」的讀音是「さん」，不是「しゃ」。\n中文翻譯：財產"}
    ],
    correctAnswer: 0
},
{
    id: "V0164",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ぞくさん",
    options: [
        {text: "蓄財", explanation: "正確答案：「ぞくさん」對應的漢字是「蓄財」，意思是儲蓄財產。\n中文翻譯：儲蓄財產"},
        {text: "属産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "俗産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "続産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0165",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "相続",
    options: [
        {text: "そうぞく", explanation: "正確答案：「相」音讀為「そう」，「続」音讀為「ぞく」。\n中文翻譯：繼承"},
        {text: "そうぞ", explanation: "錯誤：「続」的讀音是「ぞく」，不應省略「く」。\n中文翻譯：繼承"},
        {text: "しょうぞく", explanation: "錯誤：「相」的讀音是「そう」，不是「しょう」。\n中文翻譯：繼承"},
        {text: "そうそく", explanation: "錯誤：「続」的讀音是「ぞく」，不是「そく」。\n中文翻譯：繼承"}
    ],
    correctAnswer: 0
},
{
    id: "V0166",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "いぞく",
    options: [
        {text: "遺族", explanation: "正確答案：「いぞく」對應的漢字是「遺族」，意思是遺族。\n中文翻譯：遺族"},
        {text: "異族", explanation: "錯誤：「異族」讀作「いぞく」，意思是異族。\n中文翻譯：異族"},
        {text: "委嘱", explanation: "錯誤：「委嘱」讀作「いしょく」，意思是委託。\n中文翻譯：委託"},
        {text: "遺属", explanation: "錯誤：日文中「遺族」是正確表記，不使用「遺属」。\n中文翻譯：遺族"}
    ],
    correctAnswer: 0
},
{
    id: "V0167",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "遺産",
    options: [
        {text: "いさん", explanation: "正確答案：「遺」音讀為「い」，「産」音讀為「さん」。\n中文翻譯：遺產"},
        {text: "いざん", explanation: "錯誤：「産」的讀音是「さん」，不是「ざん」。\n中文翻譯：遺產"},
        {text: "いせん", explanation: "錯誤：「産」的讀音是「さん」，不是「せん」。\n中文翻譯：遺產"},
        {text: "いっさん", explanation: "錯誤：「遺」的讀音是「い」，不應促音化。\n中文翻譯：遺產"}
    ],
    correctAnswer: 0
},
{
    id: "V0168",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ゆいごん",
    options: [
        {text: "遺言", explanation: "正確答案：「ゆいごん」對應的漢字是「遺言」，意思是遺言。\n中文翻譯：遺言"},
        {text: "唯今", explanation: "錯誤：「唯今」讀作「ただいま」，意思是現在；我回來了。\n中文翻譯：現在"},
        {text: "由緒", explanation: "錯誤：「由緒」讀作「ゆいしょ」，意思是來歷。\n中文翻譯：來歷"},
        {text: "結言", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
        "id": "V0169",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "責任",
        "options": [
            {"text": "せきにん", "explanation": "正確答案：「責」音讀為「せき」，「任」音讀為「にん」。\n中文翻譯：責任"},
            {"text": "せきいん", "explanation": "錯誤：「任」的讀音是「にん」，不是「いん」。\n中文翻譯：責任"},
            {"text": "さくにん", "explanation": "錯誤：「責」的讀音是「せき」，不是「さく」。\n中文翻譯：責任"},
            {"text": "せいにん", "explanation": "錯誤：「責」的讀音是「せき」，不是「せい」。\n中文翻譯：責任"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0170",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "じょうと",
    options: [
        {text: "譲渡", explanation: "正確答案：「じょうと」對應的漢字是「譲渡」，意思是轉讓。\n中文翻譯：轉讓"},
        {text: "上渡", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "情渡", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "常渡", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0171",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "破産",
    options: [
        {text: "はさん", explanation: "正確答案：「破」音讀為「は」，「産」音讀為「さん」。\n中文翻譯：破產"},
        {text: "はざん", explanation: "錯誤：「産」的讀音是「さん」，不是「ざん」。\n中文翻譯：破產"},
        {text: "ぱさん", explanation: "錯誤：「破」的讀音是「は」，不是「ぱ」。\n中文翻譯：破產"},
        {text: "はしゃ", explanation: "錯誤：「産」的讀音是「さん」，不是「しゃ」。\n中文翻譯：破產"}
    ],
    correctAnswer: 0
},
{
    id: "V0172",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "とうさん",
    options: [
        {text: "倒産", explanation: "正確答案：「とうさん」對應的漢字是「倒産」，意思是倒閉。\n中文翻譯：倒閉"},
        {text: "当産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "逃散", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "東産", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0173",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "競売",
    options: [
        {text: "きょうばい", explanation: "正確答案：「競」音讀為「きょう」，「売」音讀為「ばい」。\n中文翻譯：拍賣"},
        {text: "きょうはい", explanation: "錯誤：「売」的讀音是「ばい」，不是「はい」。\n中文翻譯：拍賣"},
        {text: "きょばい", explanation: "錯誤：「競」的讀音是「きょう」，不應省略長音。\n中文翻譯：拍賣"},
        {text: "けいばい", explanation: "錯誤：「競」的讀音是「きょう」，不是「けい」。\n中文翻譯：拍賣"}
    ],
    correctAnswer: 0
},
{
    id: "V0174",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゃっきん",
    options: [
        {text: "借金", explanation: "正確答案：「しゃっきん」對應的漢字是「借金」，意思是借錢；債務。\n中文翻譯：債務"},
        {text: "釈金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "謝金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "射金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0175",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "債務",
    options: [
        {text: "さいむ", explanation: "正確答案：「債」音讀為「さい」，「務」音讀為「む」。\n中文翻譯：債務"},
        {text: "さいぶ", explanation: "錯誤：「務」的讀音是「む」，不是「ぶ」。\n中文翻譯：債務"},
        {text: "ざいむ", explanation: "錯誤：「債」的讀音是「さい」，不是「ざい」。\n中文翻譯：債務"},
        {text: "さいむう", explanation: "錯誤：多了一個「う」的音。\n中文翻譯：債務"}
    ],
    correctAnswer: 0
},
{
    id: "V0176",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "さいけん",
    options: [
        {text: "債券", explanation: "正確答案：「さいけん」對應的漢字是「債券」，意思是債券。\n中文翻譯：債券"},
        {text: "再建", explanation: "錯誤：「再建」讀作「さいけん」，意思是重建。\n中文翻譯：重建"},
        {text: "際限", explanation: "錯誤：「際限」讀作「さいげん」，意思是界限。\n中文翻譯：界限"},
        {text: "採権", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
        "id": "V0177",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：檢查)",
        "kana": "けんさ",
        "options": [
            {"text": "検査", "explanation": "正確答案：「けんさ」對應的漢字是「検査」，意思是檢查。"},
            {"text": "研削", "explanation": "錯誤：「研削」讀音也是「けんさく」，雖然意思接近（研磨），但讀音不完全吻合。此處應為「検査」。"},
            {"text": "検差", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "見差", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0178",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "とうし",
    options: [
        {text: "投資", explanation: "正確答案：「とうし」對應的漢字是「投資」，意思是投資。\n中文翻譯：投資"},
        {text: "当時", explanation: "錯誤：「当時」讀作「とうじ」，意思是當時。\n中文翻譯：當時"},
        {text: "統治", explanation: "錯誤：「統治」讀作「とうち」，意思是統治。\n中文翻譯：統治"},
        {text: "闘志", explanation: "錯誤：「闘志」讀作「とうし」，意思是鬥志。\n中文翻譯：鬥志"}
    ],
    correctAnswer: 0
},
{
        "id": "V0179",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N5)",
        "kana": "かいだん",
        "options": [
            {"text": "階段", "explanation": "正確答案：「かいだん」對應的漢字是「階段」，意思是樓梯。"},
            {"text": "階談", "explanation": "錯誤：「談」的讀音是「だん」或「だんご」，但意思是談話，語意不符。"},
            {"text": "会談", "explanation": "錯誤：「会談」讀音是「かいだん」，但意思是會談，語意不符。"},
            {"text": "開壇", "explanation": "錯誤：此為不常用的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0180",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "かぶか",
    options: [
        {text: "株価", explanation: "正確答案：「かぶか」對應的漢字是「株価」，意思是股價。\n中文翻譯：股價"},
        {text: "株科", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "株過", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "書価", explanation: "錯誤：日文中「株価」是正確表記，不使用「価」。\n中文翻譯：股價"}
    ],
    correctAnswer: 0
},
{
    id: "V0181",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "為替",
    options: [
        {text: "かわせ", explanation: "正確答案：「為」訓讀為「か」，「替」訓讀為「わせ」。\n中文翻譯：匯兌"},
        {text: "いかん", explanation: "錯誤：不應使用音讀「い」和「かん」。\n中文翻譯：匯兌"},
        {text: "ためがえ", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：匯兌"},
        {text: "かえせ", explanation: "錯誤：「替」的讀音是「わせ」，不是「えせ」。\n中文翻譯：匯兌"}
    ],
    correctAnswer: 0
},
{
    id: "V0182",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "そうば",
    options: [
        {text: "相場", explanation: "正確答案：「そうば」對應的漢字是「相場」，意思是行情；市價。\n中文翻譯：行情"},
        {text: "双場", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "想場", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "僧場", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
        "id": "V0183",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：交通)",
        "kana": "こうつう",
        "options": [
            {"text": "交通", "explanation": "正確答案：「こうつう」對應的漢字是「交通」，意思是交通。"},
            {"text": "公通", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "口通", "explanation": "錯誤：此為不常用的漢字組合。"},
            {"text": "交痛", "explanation": "錯誤：「痛」的讀音是「つう」或「いた」，但意思不符，通常用於『痛苦』。"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0184",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ほけんりょう",
    options: [
        {text: "保険料", explanation: "正確答案：「ほけんりょう」對應的漢字是「保険料」，意思是保險費。\n中文翻譯：保險費"},
        {text: "保健料", explanation: "錯誤：「保健」讀作「ほけん」，意思是保健。\n中文翻譯：保健費"},
        {text: "寶険料", explanation: "錯誤：日文中「保険」是正確表記，不使用「険」。\n中文翻譯：保險費"},
        {text: "補健料", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0185",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "共済",
    options: [
        {text: "きょうさい", explanation: "正確答案：「共」音讀為「きょう」，「済」音讀為「さい」。\n中文翻譯：互助；共濟"},
        {text: "きょうざい", explanation: "錯誤：「済」的讀音是「さい」，不是「ざい」。\n中文翻譯：互助"},
        {text: "きょさい", explanation: "錯誤：「共」的讀音是「きょう」，不應省略長音。\n中文翻譯：互助"},
        {text: "こうさい", explanation: "錯誤：「共」的讀音是「きょう」，不是「こう」。\n中文翻譯：互助"}
    ],
    correctAnswer: 0
},
{
    id: "V0186",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きんゆう",
    options: [
        {text: "金融", explanation: "正確答案：「きんゆう」對應的漢字是「金融」，意思是金融。\n中文翻譯：金融"},
        {text: "禁輸", explanation: "錯誤：「禁輸」讀作「きんゆ」，意思是禁運。\n中文翻譯：禁運"},
        {text: "金友", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "緊友", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0187",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "融資",
    options: [
        {text: "ゆうし", explanation: "正確答案：「融」音讀為「ゆう」，「資」音讀為「し」。\n中文翻譯：融資"},
        {text: "ゆし", explanation: "錯誤：「融」的讀音是「ゆう」，不應省略長音。\n中文翻譯：融資"},
        {text: "ゆうじ", explanation: "錯誤：「資」的讀音是「し」，不是「じ」。\n中文翻譯：融資"},
        {text: "ようし", explanation: "錯誤：「融」的讀音是「ゆう」，不是「よう」。\n中文翻譯：融資"}
    ],
    correctAnswer: 0
},
{
    id: "V0188",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しんがく",
    options: [
        {text: "進学", explanation: "正確答案：「しんがく」對應的漢字是「進学」，意思是升學。\n中文翻譯：升學"},
        {text: "神学", explanation: "錯誤：「神学」讀作「しんがく」，意思是神學。\n中文翻譯：神學"},
        {text: "深学", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "新学", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0189",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "奨学金",
    options: [
        {text: "しょうがくきん", explanation: "正確答案：「奨」音讀為「しょう」，「学」音讀為「がく」，「金」音讀為「きん」。\n中文翻譯：獎學金"},
        {text: "しょうがっきん", explanation: "錯誤：「学」的讀音是「がく」，不應促音化。\n中文翻譯：獎學金"},
        {text: "しょがくきん", explanation: "錯誤：「奨」的讀音是「しょう」，不應省略長音。\n中文翻譯：獎學金"},
        {text: "じょうがくきん", explanation: "錯誤：「奨」的讀音是「しょう」，不是「じょう」。\n中文翻譯：獎學金"}
    ],
    correctAnswer: 0
},
{
    id: "V0190",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "がくひ",
    options: [
        {text: "学費", explanation: "正確答案：「がくひ」對應的漢字是「学費」，意思是學費。\n中文翻譯：學費"},
        {text: "楽費", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "額費", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "学非", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0191",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "授業料",
    options: [
        {text: "じゅぎょうりょう", explanation: "正確答案：「授」音讀為「じゅ」，「業」音讀為「ぎょう」，「料」音讀為「りょう」。\n中文翻譯：學費"},
        {text: "じゅぎょりょう", explanation: "錯誤：「業」的讀音是「ぎょう」，不應省略長音。\n中文翻譯：學費"},
        {text: "じゅうぎょうりょう", explanation: "錯誤：「授」的讀音是「じゅ」，不是「じゅう」。\n中文翻譯：學費"},
        {text: "じゅぎょうりょ", explanation: "錯誤：「料」的讀音是「りょう」，不應省略長音。\n中文翻譯：學費"}
    ],
    correctAnswer: 0
},
{
    id: "V0192",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しょくひん",
    options: [
        {text: "食品", explanation: "正確答案：「しょくひん」對應的漢字是「食品」，意思是食品。\n中文翻譯：食品"},
        {text: "織品", explanation: "錯誤：「織品」讀作「しょくひん」，意思是紡織品。\n中文翻譯：紡織品"},
        {text: "職品", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "飾品", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0193",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "添加物",
    options: [
        {text: "てんかぶつ", explanation: "正確答案：「添」音讀為「てん」，「加」音讀為「か」，「物」音讀為「ぶつ」。\n中文翻譯：添加物"},
        {text: "てんかもの", explanation: "錯誤：「物」的讀音是「ぶつ」，不應使用訓讀「もの」。\n中文翻譯：添加物"},
        {text: "てんがぶつ", explanation: "錯誤：「加」的讀音是「か」，不是「が」。\n中文翻譯：添加物"},
        {text: "てんかぶ", explanation: "錯誤：「物」的讀音是「ぶつ」，不應省略「つ」。\n中文翻譯：添加物"}
    ],
    correctAnswer: 0
},
{
    id: "V0194",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ほぞん",
    options: [
        {text: "保存", explanation: "正確答案：「ほぞん」對應的漢字是「保存」，意思是保存。\n中文翻譯：保存"},
        {text: "保温", explanation: "錯誤：「保温」讀作「ほおん」，意思是保溫。\n中文翻譯：保溫"},
        {text: "補存", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "保損", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
        "id": "V0195",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "情報",
        "options": [
            {"text": "じょうほう", "explanation": "正確答案：「情」音讀為「じょう」，「報」音讀為「ほう」。\n中文翻譯：資訊、情報"},
            {"text": "じょうぼう", "explanation": "錯誤：「報」的讀音是「ほう」，不是「ぼう」。\n中文翻譯：資訊、情報"},
            {"text": "じょうほうう", "explanation": "錯誤：多餘的長音讀法。\n中文翻譯：資訊、情報"},
            {"text": "しょうほう", "explanation": "錯誤：「情」的讀音是「じょう」，不是「しょう」。\n中文翻譯：資訊、情報"}
        ],
        "correctAnswer": 0
    },
{
    id: "V0196",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はっこう",
    options: [
        {text: "発行", explanation: "正確答案：「はっこう」對應的漢字是「発行」，意思是發行。\n中文翻譯：發行"},
        {text: "発効", explanation: "錯誤：「発効」讀作「はっこう」，意思是生效。\n中文翻譯：生效"},
        {text: "八光", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {text: "白光", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0197",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "製造元",
    options: [
        {text: "せいぞうもと", explanation: "正確答案：「製」音讀為「せい」，「造」音讀為「ぞう」，「元」訓讀為「もと」。\n中文翻譯：製造商"},
        {text: "せいぞうげん", explanation: "錯誤：不應使用音讀「げん」。\n中文翻譯：製造商"},
        {text: "せいぞうがん", explanation: "錯誤：「元」的讀音是「もと」，不是「がん」。\n中文翻譯：製造商"},
        {text: "せぞうもと", explanation: "錯誤：「製」的讀音是「せい」，不應省略「い」。\n中文翻譯：製造商"}
    ],
    correctAnswer: 0
},
{
    id: "V0198",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "せいさん",
    options: [
        {text: "生産", explanation: "正確答案：「せいさん」對應的漢字是「生産」，意思是生產。\n中文翻譯：生產"},
        {text: "清算", explanation: "錯誤：「清算」讀作「せいさん」，意思是清算。\n中文翻譯：清算"},
        {text: "精算", explanation: "錯誤：「精算」讀作「せいさん」，意思是精算。\n中文翻譯：精算"},
        {text: "成算", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
    id: "V0199",
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "消費税",
    options: [
        {text: "しょうひぜい", explanation: "正確答案：「消」音讀為「しょう」，「費」音讀為「ひ」，「税」音讀為「ぜい」。\n中文翻譯：消費稅"},
        {text: "しょうひせい", explanation: "錯誤：「税」的讀音是「ぜい」，不是「せい」。\n中文翻譯：消費稅"},
        {text: "しょひぜい", explanation: "錯誤：「消」的讀音是「しょう」，不應省略長音。\n中文翻譯：消費稅"},
        {text: "しょうびぜい", explanation: "錯誤：「費」的讀音是「ひ」，不是「び」。\n中文翻譯：消費稅"}
    ],
    correctAnswer: 0
},
{
    id: "V0200",
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "かかく",
    options: [
        {text: "価格", explanation: "正確答案：「かかく」對應的漢字是「価格」，意思是價格。\n中文翻譯：價格"},
        {text: "化学", explanation: "錯誤：「化学」讀作「かがく」，意思是化學。\n中文翻譯：化學"},
        {text: "過客", explanation: "錯誤：「過客」讀作「かきゃく」，意思是過客。\n中文翻譯：過客"},
        {text: "可楽", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    correctAnswer: 0
},
{
id: "V0201",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "需要",
options: [
{text: "じゅよう", explanation: "正確答案：「需」音讀為「じゅ」，「要」音讀為「よう」。\n中文翻譯：需求"},
{text: "じゅうよう", explanation: "錯誤：「需」的讀音是「じゅ」，不是「じゅう」。\n中文翻譯：需求"},
{text: "じゅよ", explanation: "錯誤：「要」的讀音是「よう」，不應省略長音。\n中文翻譯：需求"},
{text: "しゅよう", explanation: "錯誤：「需」的讀音是「じゅ」，不是「しゅ」。\n中文翻譯：需求"}
],
correctAnswer: 0
},
{
id: "V0202",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "きょうきゅう",
options: [
{text: "供給", explanation: "正確答案：「きょうきゅう」對應的漢字是「供給」，意思是供給。\n中文翻譯：供給"},
{text: "供級", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "強給", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "共給", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0203",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "市場",
options: [
{text: "しじょう", explanation: "正確答案：「市」音讀為「し」，「場」音讀為「じょう」。\n中文翻譯：市場"},
{text: "いちば", explanation: "錯誤：這是「市場」的訓讀，但在此應使用音讀。\n中文翻譯：市場"},
{text: "しちょう", explanation: "錯誤：「場」的讀音是「じょう」，不是「ちょう」。\n中文翻譯：市場"},
{text: "しじょ", explanation: "錯誤：「場」的讀音是「じょう」，不應省略長音。\n中文翻譯：市場"}
],
correctAnswer: 0
},
{
id: "V0204",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "かくとく",
options: [
{text: "獲得", explanation: "正確答案：「かくとく」對應的漢字是「獲得」，意思是獲得。\n中文翻譯：獲得"},
{text: "確得", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "格得", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "角得", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
        "id": "V0205",
        "type": "reading",
        "question": "副詞「かたづける」最恰當的中文意思是什麼？ (N4)",
        "kanji": "片付ける",
        "options": [
            {
                "text": "整理、收拾、處理完畢",
                "explanation": "正確答案：「片付ける」表示整理環境或處理事務，翻譯為『整理、收拾』。"
            },
            {
                "text": "開始、啟動",
                "explanation": "錯誤：「開始、啟動」是「始める（はじめる）」的意思。"
            },
            {
                "text": "放置、擺放",
                "explanation": "錯誤：「放置、擺放」是「置く（おく）」的意思。"
            },
            {
                "text": "破壞、弄亂",
                "explanation": "錯誤：「破壞、弄亂」是「壊す（こわす）」或「散らかす（ちらかす）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
id: "V0206",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "もうしこみ",
options: [
{text: "申し込み", explanation: "正確答案：「もうしこみ」對應的漢字是「申し込み」，意思是申請。\n中文翻譯：申請"},
{text: "申込", explanation: "錯誤：這是簡寫形式，但完整表記為「申し込み」。\n中文翻譯：申請"},
{text: "猛し込み", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "盲し込み", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0207",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "取消",
options: [
{text: "とりけし", explanation: "正確答案：「取」訓讀為「とり」，「消」訓讀為「けし」。\n中文翻譯：取消"},
{text: "とりしょう", explanation: "錯誤：不應使用音讀「しょう」。\n中文翻譯：取消"},
{text: "とけし", explanation: "錯誤：「取」的讀音是「とり」，不應省略「り」。\n中文翻譯：取消"},
{text: "とりき", explanation: "錯誤：「消」的讀音是「けし」，不是「き」。\n中文翻譯：取消"}
],
correctAnswer: 0
},
{
id: "V0208",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "へんこう",
options: [
{text: "変更", explanation: "正確答案：「へんこう」對應的漢字是「変更」，意思是變更。\n中文翻譯：變更"},
{text: "偏行", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "返交", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "辺光", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0209",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "有効期限",
options: [
{text: "ゆうこうきげん", explanation: "正確答案：「有」音讀為「ゆう」，「効」音讀為「こう」，「期」音讀為「き」，「限」音讀為「げん」。\n中文翻譯：有效期限"},
{text: "ゆうこうきけん", explanation: "錯誤：「限」的讀音是「げん」，不是「けん」。\n中文翻譯：有效期限"},
{text: "ゆこうきげん", explanation: "錯誤：「有」的讀音是「ゆう」，不應省略長音。\n中文翻譯：有效期限"},
{text: "ゆうこきげん", explanation: "錯誤：「効」的讀音是「こう」，不應省略長音。\n中文翻譯：有效期限"}
],
correctAnswer: 0
},
{
id: "V0210",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "かんり",
options: [
{text: "管理", explanation: "正確答案：「かんり」對應的漢字是「管理」，意思是管理。\n中文翻譯：管理"},
{text: "監理", explanation: "錯誤：「監理」讀作「かんり」，意思是監理。\n中文翻譯：監理"},
{text: "幹理", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "官理", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0211",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "運営",
options: [
{text: "うんえい", explanation: "正確答案：「運」音讀為「うん」，「営」音讀為「えい」。\n中文翻譯：營運"},
{text: "うんえ", explanation: "錯誤：「営」的讀音是「えい」，不應省略「い」。\n中文翻譯：營運"},
{text: "うんよう", explanation: "錯誤：「営」的讀音是「えい」，不是「よう」。\n中文翻譯：營運"},
{text: "うえい", explanation: "錯誤：「運」的讀音是「うん」，不應省略「ん」。\n中文翻譯：營運"}
],
correctAnswer: 0
},
{
id: "V0212",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "えいぎょう",
options: [
{text: "営業", explanation: "正確答案：「えいぎょう」對應的漢字是「営業」，意思是營業。\n中文翻譯：營業"},
{text: "永業", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "映業", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "英業", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
        "id": "V0213",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "製造",
        "options": [
            {"text": "せいぞう", "explanation": "正確答案：「製」音讀為「せい」，「造」音讀為「ぞう」。\n中文翻譯：製造"},
            {"text": "せいぞうう", "explanation": "錯誤：「造」的長音為「ぞう」，不須多加一個「う」。\n中文翻譯：製造"},
            {"text": "せいうぞう", "explanation": "錯誤：「製」的長音為「せい」，不是「せいう」。\n中文翻譯：製造"},
            {"text": "さくぞう", "explanation": "錯誤：「製」的讀音是「せい」，不是「さく」。\n中文翻譯：製造"}
        ],
        "correctAnswer": 0
    },
{
id: "V0214",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "がいしゃ",
options: [
{text: "会社", explanation: "正確答案：「がいしゃ」對應的漢字是「会社」，意思是公司。\n中文翻譯：公司"},
{text: "外車", explanation: "錯誤：「外車」讀作「がいしゃ」，意思是外國車。\n中文翻譯：外國車"},
{text: "害者", explanation: "錯誤：「害者」讀作「がいしゃ」，意思是受害者。\n中文翻譯：受害者"},
{text: "街車", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0215",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "従業員",
options: [
{text: "じゅうぎょういん", explanation: "正確答案：「従」音讀為「じゅう」，「業」音讀為「ぎょう」，「員」音讀為「いん」。\n中文翻譯：員工"},
{text: "じゅうぎょいん", explanation: "錯誤：「業」的讀音是「ぎょう」，不應省略長音。\n中文翻譯：員工"},
{text: "じゅぎょういん", explanation: "錯誤：「従」的讀音是「じゅう」，不應省略長音。\n中文翻譯：員工"},
{text: "じゅうぎょうにん", explanation: "錯誤：「員」的讀音是「いん」，不是「にん」。\n中文翻譯：員工"}
],
correctAnswer: 0
},
{
id: "V0216",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しゃいん",
options: [
{text: "社員", explanation: "正確答案：「しゃいん」對應的漢字是「社員」，意思是公司職員。\n中文翻譯：公司職員"},
{text: "社院", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "写員", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "射員", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0217",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "給料",
options: [
{text: "きゅうりょう", explanation: "正確答案：「給」音讀為「きゅう」，「料」音讀為「りょう」。\n中文翻譯：薪水"},
{text: "きゅうりょ", explanation: "錯誤：「料」的讀音是「りょう」，不應省略長音。\n中文翻譯：薪水"},
{text: "きゅりょう", explanation: "錯誤：「給」的讀音是「きゅう」，不應省略長音。\n中文翻譯：薪水"},
{text: "ぎゅうりょう", explanation: "錯誤：「給」的讀音是「きゅう」，不是「ぎゅう」。\n中文翻譯：薪水"}
],
correctAnswer: 0
},
{
id: "V0218",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "ぼうえき",
options: [
{text: "貿易", explanation: "正確答案：「ぼうえき」對應的漢字是「貿易」，意思是貿易。\n中文翻譯：貿易"},
{text: "防役", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "暴益", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "忙易", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0219",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "輸入",
options: [
{text: "ゆにゅう", explanation: "正確答案：「輸」音讀為「ゆ」，「入」音讀為「にゅう」。\n中文翻譯：進口"},
{text: "ゆにゅ", explanation: "錯誤：「入」的讀音是「にゅう」，不應省略長音。\n中文翻譯：進口"},
{text: "ゆうにゅう", explanation: "錯誤：「輸」的讀音是「ゆ」，不是「ゆう」。\n中文翻譯：進口"},
{text: "よにゅう", explanation: "錯誤：「輸」的讀音是「ゆ」，不是「よ」。\n中文翻譯：進口"}
],
correctAnswer: 0
},
{
id: "V0220",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "ゆしゅつ",
options: [
{text: "輸出", explanation: "正確答案：「ゆしゅつ」對應的漢字是「輸出」，意思是出口。\n中文翻譯：出口"},
{text: "蘇出", explanation: "錯誤：日文中「輸出」是正確表記，不使用「出」。\n中文翻譯：出口"},
{text: "由出", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "湯出", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0221",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "関税",
options: [
{text: "かんぜい", explanation: "正確答案：「関」音讀為「かん」，「税」音讀為「ぜい」。\n中文翻譯：關稅"},
{text: "かんせい", explanation: "錯誤：「税」的讀音是「ぜい」，不是「せい」。\n中文翻譯：關稅"},
{text: "がんぜい", explanation: "錯誤：「関」的讀音是「かん」，不是「がん」。\n中文翻譯：關稅"},
{text: "かんぜ", explanation: "錯誤：「税」的讀音是「ぜい」，不應省略「い」。\n中文翻譯：關稅"}
],
correctAnswer: 0
},
{
id: "V0222",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "ぜいきん",
options: [
{text: "税金", explanation: "正確答案：「ぜいきん」對應的漢字是「税金」，意思是稅金。\n中文翻譯：稅金"},
{text: "税均", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "税近", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "税禁", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0223",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "納税",
options: [
{text: "のうぜい", explanation: "正確答案：「納」音讀為「のう」，「税」音讀為「ぜい」。\n中文翻譯：納稅"},
{text: "のうせい", explanation: "錯誤：「税」的讀音是「ぜい」，不是「せい」。\n中文翻譯：納稅"},
{text: "のぜい", explanation: "錯誤：「納」的讀音是「のう」，不應省略長音。\n中文翻譯：納稅"},
{text: "なっぜい", explanation: "錯誤：「納」的讀音是「のう」，不應促音化。\n中文翻譯：納稅"}
],
correctAnswer: 0
},
{
id: "V0224",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "めんぜい",
options: [
{text: "免税", explanation: "正確答案：「めんぜい」對應的漢字是「免税」，意思是免稅。\n中文翻譯：免稅"},
{text: "面税", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "免誠", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "面誠", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0225",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "還付",
options: [
{text: "かんぷ", explanation: "正確答案：「還」音讀為「かん」，「付」音讀為「ぷ」。\n中文翻譯：退還"},
{text: "かんふ", explanation: "錯誤：「付」的讀音是「ぷ」，不是「ふ」。\n中文翻譯：退還"},
{text: "がんぷ", explanation: "錯誤：「還」的讀音是「かん」，不是「がん」。\n中文翻譯：退還"},
{text: "かんぷう", explanation: "錯誤：多了一個「う」的音。\n中文翻譯：退還"}
],
correctAnswer: 0
},
{
id: "V0226",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しんよう",
options: [
{text: "信用", explanation: "正確答案：「しんよう」對應的漢字是「信用」，意思是信用。\n中文翻譯：信用"},
{text: "信頼", explanation: "錯誤：「信頼」讀作「しんらい」，意思是信賴。\n中文翻譯：信賴"},
{text: "真用", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "深用", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0227",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "与信",
options: [
{text: "よしん", explanation: "正確答案：「与」音讀為「よ」，「信」音讀為「しん」。\n中文翻譯：授信"},
{text: "よし", explanation: "錯誤：「信」的讀音是「しん」，不應省略「ん」。\n中文翻譯：授信"},
{text: "ようしん", explanation: "錯誤：「与」的讀音是「よ」，不是「よう」。\n中文翻譯：授信"},
{text: "よじん", explanation: "錯誤：「信」的讀音是「しん」，不是「じん」。\n中文翻譯：授信"}
],
correctAnswer: 0
},
{
id: "V0228",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しんようじょう",
options: [
{text: "信用状", explanation: "正確答案：「しんようじょう」對應的漢字是「信用状」，意思是信用狀。\n中文翻譯：信用狀"},
{text: "信用場", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "信用情", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "信用常", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0229",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "融通",
options: [
{text: "ゆうずう", explanation: "正確答案：「融」音讀為「ゆう」，「通」音讀為「ずう」。\n中文翻譯：融通"},
{text: "ゆうづう", explanation: "錯誤：「通」的讀音是「ずう」，不是「づう」。\n中文翻譯：融通"},
{text: "ゆずう", explanation: "錯誤：「融」的讀音是「ゆう」，不應省略長音。\n中文翻譯：融通"},
{text: "ゆうず", explanation: "錯誤：「通」的讀音是「ずう」，不應省略長音。\n中文翻譯：融通"}
],
correctAnswer: 0
},
{
id: "V0230",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "きんゆう",
options: [
{text: "金融", explanation: "正確答案：「きんゆう」對應的漢字是「金融」，意思是金融。\n中文翻譯：金融"},
{text: "禁輸", explanation: "錯誤：「禁輸」讀作「きんゆ」，意思是禁運。\n中文翻譯：禁運"},
{text: "金友", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "緊友", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0231",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "為替手形",
options: [
{text: "かわせてがた", explanation: "正確答案：「為」訓讀為「か」，「替」訓讀為「わせ」，「手」訓讀為「て」，「形」訓讀為「がた」。\n中文翻譯：匯票"},
{text: "いかんてがた", explanation: "錯誤：不應使用音讀「い」和「かん」。\n中文翻譯：匯票"},
{text: "かわせしゅけい", explanation: "錯誤：不應使用音讀「しゅ」和「けい」。\n中文翻譯：匯票"},
{text: "かわせてけい", explanation: "錯誤：「形」的讀音是「がた」，不是「けい」。\n中文翻譯：匯票"}
],
correctAnswer: 0
},
{
id: "V0232",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "てがた",
options: [
{text: "手形", explanation: "正確答案：「てがた」對應的漢字是「手形」，意思是票據。\n中文翻譯：票據"},
{text: "手型", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "手方", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "手行", explanation: "錯誤：日文中「手形」是正確表記，不使用「形」。\n中文翻譯：票據"}
],
correctAnswer: 0
},
{
id: "V0233",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "小切手",
options: [
{text: "こぎって", explanation: "正確答案：「小」音讀為「こ」，「切」音讀為「ぎっ」，「手」訓讀為「て」。\n中文翻譯：支票"},
{text: "しょうきって", explanation: "錯誤：「小」在此讀音是「こ」，不是「しょう」。\n中文翻譯：支票"},
{text: "こぎつて", explanation: "錯誤：「切」的讀音是「ぎっ」，不是「ぎつ」。\n中文翻譯：支票"},
{text: "こぎて", explanation: "錯誤：「切」的讀音是「ぎっ」，不應省略促音。\n中文翻譯：支票"}
],
correctAnswer: 0
},
{
id: "V0234",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "つうちょう",
options: [
{text: "通帳", explanation: "正確答案：「つうちょう」對應的漢字是「通帳」，意思是存摺。\n中文翻譯：存摺"},
{text: "通脹", explanation: "錯誤：日文中「通帳」是正確表記，不使用「帳」。\n中文翻譯：存摺"},
{text: "通長", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "通調", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0235",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "預金",
options: [
{text: "よきん", explanation: "正確答案：「預」音讀為「よ」，「金」音讀為「きん」。\n中文翻譯：存款"},
{text: "よき", explanation: "錯誤：「金」的讀音是「きん」，不應省略「ん」。\n中文翻譯：存款"},
{text: "ようきん", explanation: "錯誤：「預」的讀音是「よ」，不是「よう」。\n中文翻譯：存款"},
{text: "よぎん", explanation: "錯誤：「金」的讀音是「きん」，不是「ぎん」。\n中文翻譯：存款"}
],
correctAnswer: 0
},
{
id: "V0236",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "よきん",
options: [
{text: "預金", explanation: "正確答案：「よきん」對應的漢字是「預金」，意思是存款。\n中文翻譯：存款"},
{text: "与金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "余金", explanation: "錯誤：「余金」讀作「よきん」，意思是餘款。\n中文翻譯：餘款"},
{text: "預筋", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
        "id": "V0237",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：有效)",
        "kana": "ゆうこう",
        "options": [
            {"text": "有効", "explanation": "正確答案：「ゆうこう」在此語境下對應的漢字是「有効」，意思是有效。"},
            {"text": "友好", "explanation": "錯誤：「友好」讀音也是「ゆうこう」，但意思是友好，語意不符。"},
            {"text": "優光", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "有向", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
id: "V0238",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しゃっきん",
options: [
{text: "借金", explanation: "正確答案：「しゃっきん」對應的漢字是「借金」，意思是借錢；債務。\n中文翻譯：債務"},
{text: "釈金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "謝金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "射金", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0239",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "返済",
options: [
{text: "へんさい", explanation: "正確答案：「返」音讀為「へん」，「済」音讀為「さい」。\n中文翻譯：償還"},
{text: "へんざい", explanation: "錯誤：「済」的讀音是「さい」，不是「ざい」。\n中文翻譯：償還"},
{text: "べんさい", explanation: "錯誤：「返」的讀音是「へん」，不是「べん」。\n中文翻譯：償還"},
{text: "へんさ", explanation: "錯誤：「済」的讀音是「さい」，不應省略「い」。\n中文翻譯：償還"}
],
correctAnswer: 0
},
{
id: "V0240",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "りし",
options: [
{text: "利子", explanation: "正確答案：「りし」對應的漢字是「利子」，意思是利息。\n中文翻譯：利息"},
{text: "利市", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "理子", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "里志", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
        "id": "V0241",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "手続き",
        "options": [
            {"text": "てつづき", "explanation": "正確答案：「手」訓讀為「て」，「続」訓讀為「つづ」，「き」是送假名。\n中文翻譯：手續"},
            {"text": "てつつき", "explanation": "錯誤：「続」的讀音是「つづ」，不是「つつ」。\n中文翻譯：手續"},
            {"text": "てつき", "explanation": "錯誤：少了促音「つ」。\n中文翻譯：手續"},
            {"text": "てつづぎ", "explanation": "錯誤：「き」不應讀作「ぎ」。\n中文翻譯：手續"}
        ],
        "correctAnswer": 0
    },
{
id: "V0242",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "りそく",
options: [
{text: "利息", explanation: "正確答案：「りそく」對應的漢字是「利息」，意思是利息。\n中文翻譯：利息"},
{text: "利則", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "理則", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "里則", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
        "id": "V0243",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：重要)",
        "kana": "たいせつ",
        "options": [
            {"text": "大切", "explanation": "正確答案：「たいせつ」在此語境下對應的漢字是「大切」，意思是重要。"},
            {"text": "大雪", "explanation": "錯誤：「大雪」讀音也是「たいせつ」，但意思是下大雪，語意不符。"},
            {"text": "対設", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "耐切", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
id: "V0244",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "ていとう",
options: [
{text: "抵当", explanation: "正確答案：「ていとう」對應的漢字是「抵当」，意思是抵押。\n中文翻譯：抵押"},
{text: "抵當", explanation: "錯誤：日文中「抵当」是正確表記，不使用「当」。\n中文翻譯：抵押"},
{text: "低当", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "底当", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0245",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "質権",
options: [
{text: "しちけん", explanation: "正確答案：「質」音讀為「しち」，「権」音讀為「けん」。\n中文翻譯：質權"},
{text: "しっけん", explanation: "錯誤：「質」的讀音是「しち」，不應促音化。\n中文翻譯：質權"},
{text: "しちけ", explanation: "錯誤：「権」的讀音是「けん」，不應省略「ん」。\n中文翻譯：質權"},
{text: "じちけん", explanation: "錯誤：「質」的讀音是「しち」，不是「じち」。\n中文翻譯：質權"}
],
correctAnswer: 0
},
{
id: "V0246",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しち",
options: [
{text: "質", explanation: "正確答案：「しち」對應的漢字是「質」，意思是質押。\n中文翻譯：質押"},
{text: "七", explanation: "錯誤：「七」讀作「しち」，意思是七。\n中文翻譯：七"},
{text: "死地", explanation: "錯誤：「死地」讀作「しち」，意思是死地。\n中文翻譯：死地"},
{text: "市地", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0247",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "競売",
options: [
{text: "きょうばい", explanation: "正確答案：「競」音讀為「きょう」，「売」音讀為「ばい」。\n中文翻譯：拍賣"},
{text: "きょうはい", explanation: "錯誤：「売」的讀音是「ばい」，不是「はい」。\n中文翻譯：拍賣"},
{text: "きょばい", explanation: "錯誤：「競」的讀音是「きょう」，不應省略長音。\n中文翻譯：拍賣"},
{text: "けいばい", explanation: "錯誤：「競」的讀音是「きょう」，不是「けい」。\n中文翻譯：拍賣"}
],
correctAnswer: 0
},
{
id: "V0248",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "しはらい",
options: [
{text: "支払い", explanation: "正確答案：「しはらい」對應的漢字是「支払い」，意思是支付。\n中文翻譯：支付"},
{text: "支払", explanation: "錯誤：這是簡寫形式，但完整表記為「支払い」。\n中文翻譯：支付"},
{text: "四払い", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "志払い", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
],
correctAnswer: 0
},
{
id: "V0249",
type: "reading",
question: "次の漢字の読み方を選びなさい",
kanji: "決済",
options: [
{text: "けっさい", explanation: "正確答案：「決」音讀為「けっ」，「済」音讀為「さい」。\n中文翻譯：結算"},
{text: "けつさい", explanation: "錯誤：「決」的讀音是「けっ」，不應省略促音。\n中文翻譯：結算"},
{text: "けっさ", explanation: "錯誤：「済」的讀音是「さい」，不應省略「い」。\n中文翻譯：結算"},
{text: "げっさい", explanation: "錯誤：「決」的讀音是「けっ」，不是「げっ」。\n中文翻譯：結算"}
],
correctAnswer: 0
},
{
id: "V0250",
type: "writing",
question: "次の言葉の正しい漢字を選びなさい",
kana: "ふなづみ",
options: [
{text: "船積み", explanation: "正確答案：「ふなづみ」對應的漢字是「船積み」，意思是裝船。\n中文翻譯：裝船"},
{text: "船積", explanation: "錯誤：這是簡寫形式，但完整表記為「船積み」。\n中文翻譯：裝船"},
{text: "船詰み", explanation: "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
{text: "舟積み", explanation: "錯誤：「舟」讀作「ふね」，但「船積み」是固定用法。\n中文翻譯：裝船"}
],
correctAnswer: 0
},
{
        "id": "V0251",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：心理狀態)",
        "kana": "しんり",
        "options": [
            {"text": "心理", "explanation": "正確答案：「しんり」在此語境下對應的漢字是「心理」，意思是心理狀態。"},
            {"text": "真理", "explanation": "錯誤：「真理」讀音也是「しんり」，但意思是真理，語意不符。"},
            {"text": "心利", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "信理", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0252",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "にずみ",
    "options": [
        {"text": "荷積み", "explanation": "正確答案：「にずみ」對應的漢字是「荷積み」，意思是裝貨。\n中文翻譯：裝貨"},
        {"text": "荷積", "explanation": "錯誤：這是簡寫形式，但完整表記為「荷積み」。\n中文翻譯：裝貨"},
        {"text": "二積み", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "仁積み", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0253",
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい (N4)",
        "kanji": "手続",
        "options": [
            {"text": "てつづき", "explanation": "正確答案：「手」訓讀為「て」，「続」訓讀為「つづき」。\n中文翻譯：手續"},
            {"text": "てつずき", "explanation": "錯誤：「つづき」的濁音在第二個「つ」，不是「ず」。\n中文翻譯：手續"},
            {"text": "てつき", "explanation": "錯誤：少了促音「つ」。\n中文翻譯：手續"},
            {"text": "てつづぎ", "explanation": "錯誤：「き」不應讀作「ぎ」。\n中文翻譯：手續"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0254",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ちんたい",
    "options": [
        {"text": "賃貸", "explanation": "正確答案：「ちんたい」對應的漢字是「賃貸」，意思是租賃。\n中文翻譯：租賃"},
        {"text": "賃帶", "explanation": "錯誤：日文中「賃貸」是正確表記，不使用「貸」。\n中文翻譯：租賃"},
        {"text": "珍貸", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "陳貸", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0255",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：擔保、保證)",
        "kana": "ほしょう",
        "options": [
            {"text": "保証", "explanation": "正確答案：「ほしょう」在此語境下對應的漢字是「保証」，意思是擔保。"},
            {"text": "補償", "explanation": "錯誤：「補償」讀音也是「ほしょう」，但意思是補償、賠償，語意不符。"},
            {"text": "補章", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "保將", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0256",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "けいやく",
    "options": [
        {"text": "契約", "explanation": "正確答案：「けいやく」對應的漢字是「契約」，意思是契約。\n中文翻譯：契約"},
        {"text": "経約", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "敬約", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "系約", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0257",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4)",
        "kana": "たいりょく",
        "options": [
            {"text": "体力", "explanation": "正確答案：「たいりょく」對應的漢字是「体力」，意思是體力。"},
            {"text": "退力", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "大翼", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "耐力", "explanation": "錯誤：「耐力」讀音為「たいりょく」，但意思是耐力/忍耐力，語意作為干擾項。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0258",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "そんがい",
    "options": [
        {"text": "損害", "explanation": "正確答案：「そんがい」對應的漢字是「損害」，意思是損害。\n中文翻譯：損害"},
        {"text": "損駭", "explanation": "錯誤：日文中「損害」是正確表記，不使用「害」。\n中文翻譯：損害"},
        {"text": "村害", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "尊害", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0259",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：城市首長)",
        "kana": "しちょう",
        "options": [
            {"text": "市長", "explanation": "正確答案：「しちょう」在此語境下對應的漢字是「市長」，意思是城市首長。"},
            {"text": "視聴", "explanation": "錯誤：「視聴」讀音也是「しちょう」，但意思是視聽，語意不符。"},
            {"text": "始張", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "市調", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0260",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ほしょう",
    "options": [
        {"text": "保証", "explanation": "正確答案：「ほしょう」對應的漢字是「保証」，意思是保證。\n中文翻譯：保證"},
        {"text": "保障", "explanation": "錯誤：「保障」讀作「ほしょう」，意思是保障。\n中文翻譯：保障"},
        {"text": "補償", "explanation": "錯誤：「補償」讀作「ほしょう」，意思是補償。\n中文翻譯：補償"},
        {"text": "保證", "explanation": "錯誤：日文中「保証」是正確表記，不使用「証」。\n中文翻譯：保證"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0261",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：執行、實施)",
        "kana": "じっこう",
        "options": [
            {"text": "実行", "explanation": "正確答案：「じっこう」在此語境下對應的漢字是「実行」，意思是執行、實施。"},
            {"text": "実効", "explanation": "錯誤：「実効」讀音也是「じっこう」，但意思是實際功效，語意不符。"},
            {"text": "実考", "explanation": "錯誤：漢字組合錯誤，應為「実」和「行」。"},
            {"text": "日考", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0262",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "せきにん",
    "options": [
        {"text": "責任", "explanation": "正確答案：「せきにん」對應的漢字是「責任」，意思是責任。\n中文翻譯：責任"},
        {"text": "責認", "explanation": "錯誤：日文中「責任」是正確表記，不使用「責」。\n中文翻譯：責任"},
        {"text": "積任", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "績任", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0263",
        "type": "writing",
        "question": "次の言葉の正しい漢字を選びなさい (N4) (意味：停止、終止)",
        "kana": "ていし",
        "options": [
            {"text": "停止", "explanation": "正確答案：「ていし」在此語境下對應的漢字是「停止」，意思是停止。"},
            {"text": "艇首", "explanation": "錯誤：「艇首」讀音也是「ていし」，但意思是船頭，語意不符。"},
            {"text": "程示", "explanation": "錯誤：此為不存在的漢字組合。"},
            {"text": "訂紙", "explanation": "錯誤：此為不存在的漢字組合。"}
        ],
        "correctAnswer": 0
    },
{
    "id": "V0264",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "かこく",
    "options": [
        {"text": "過酷", "explanation": "正確答案：「かこく」對應的漢字是「過酷」，意思是過於嚴酷。\n中文翻譯：過於嚴酷"},
        {"text": "過去", "explanation": "錯誤：「過去」讀作「かこ」，意思是過去。\n中文翻譯：過去"},
        {"text": "家国", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "可酷", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0265",
        "type": "reading",
        "question": "副詞「むしろ」最恰當的中文意思是什麼？ (N4)",
        "kanji": "寧ろ",
        "options": [
            {
                "text": "寧可、倒不如",
                "explanation": "正確答案：「寧ろ」用於比較後，選擇/建議後者，翻譯為『寧可、倒不如』。"
            },
            {
                "text": "或許、說不定",
                "explanation": "錯誤：「或許、說不定」是「たぶん」或「もしかしたら」的意思。"
            },
            {
                "text": "因此、所以",
                "explanation": "錯誤：「因此、所以」是「だから」的意思。"
            },
            {
                "text": "偶爾、不時",
                "explanation": "錯誤：「偶爾、不時」是「たまに」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0266",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ちっそく",
    "options": [
        {"text": "窒息", "explanation": "正確答案：「ちっそく」對應的漢字是「窒息」，意思是窒息。\n中文翻譯：窒息"},
        {"text": "遅速", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "秩束", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "窒則", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0267",
        "type": "reading",
        "question": "副詞「とうてい」在接否定時，中文意思是什麼？ (N4)",
        "kanji": "到底 (〜ない)",
        "options": [
            {
                "text": "無論如何也（不）、絕不可能（不）",
                "explanation": "正確答案：「到底～ない」表示在程度上或能力上完全無法做到，翻譯為『絕不可能（不）』。"
            },
            {
                "text": "最終、終究",
                "explanation": "錯誤：「最終、終究」是「とうとう」的意思，但通常用於肯定結果。"
            },
            {
                "text": "或許、大概",
                "explanation": "錯誤：「或許、大概」是「たぶん」的意思。"
            },
            {
                "text": "總而言之",
                "explanation": "錯誤：「總而言之」是「とにかく」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0268",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ふかけつ",
    "options": [
        {"text": "不可欠", "explanation": "正確答案：「ふかけつ」對應的漢字是「不可欠」，意思是不可或缺。\n中文翻譯：不可或缺"},
        {"text": "不可決", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "不欠", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "付加欠", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0269",
        "type": "reading",
        "question": "接續詞「しかも」在句子中通常表達什麼功能？ (N4)",
        "kanji": "しかも",
        "options": [
            {
                "text": "而且、並且（加強語氣的補充）",
                "explanation": "正確答案：「しかも」用於在補充資訊時，表達更進一層的關係，有『更甚者』、『連…都』的意味。"
            },
            {
                "text": "雖然...但是",
                "explanation": "錯誤：「雖然...但是」是「けれども」的意思。"
            },
            {
                "text": "總而言之",
                "explanation": "錯誤：「總而言之」是「とにかく」的意思。"
            },
            {
                "text": "例如、比方說",
                "explanation": "錯誤：「例如、比方說」是「たとえば」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0270",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "かしつ",
    "options": [
        {"text": "過失", "explanation": "正確答案：「かしつ」對應的漢字是「過失」，意思是過失。\n中文翻譯：過失"},
        {"text": "家室", "explanation": "錯誤：「家室」讀作「かしつ」，意思是家室。\n中文翻譯：家室"},
        {"text": "可失", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "果実", "explanation": "錯誤：「果実」讀作「かじつ」，意思是果實。\n中文翻譯：果實"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0271",
        "type": "reading",
        "question": "副詞「かまわない」最恰當的中文意思是什麼？ (N4)",
        "kanji": "構わない",
        "options": [
            {
                "text": "沒關係、不要緊、無所謂",
                "explanation": "正確答案：「構わない」表示不在意、沒有問題，翻譯為『沒關係、無所謂』。"
            },
            {
                "text": "很擔心、很在乎",
                "explanation": "錯誤：「很擔心」是「心配だ（しんぱいだ）」的意思。"
            },
            {
                "text": "請讓步、請原諒",
                "explanation": "錯誤：「請讓步」是「譲って（ゆずって）」的意思。"
            },
            {
                "text": "不能原諒",
                "explanation": "錯誤：「不能原諒」是「許さない（ゆるさない）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0272",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ふたん",
    "options": [
        {"text": "負担", "explanation": "正確答案：「ふたん」對應的漢字是「負担」，意思是負擔。\n中文翻譯：負擔"},
        {"text": "負擔", "explanation": "錯誤：日文中「負担」是正確表記，不使用「担」。\n中文翻譯：負擔"},
        {"text": "不断", "explanation": "錯誤：「不断」讀作「ふだん」，意思是不斷。\n中文翻譯：不斷"},
        {"text": "布団", "explanation": "錯誤：「布団」讀作「ふとん」，意思是被褥。\n中文翻譯：被褥"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0273",
        "type": "reading",
        "question": "副詞「せいぜい」最恰當的中文意思是什麼？ (N4)",
        "kanji": "精々",
        "options": [
            {
                "text": "充其量、頂多、盡量",
                "explanation": "正確答案：「精々」表示最高限度，翻譯為『充其量、頂多』，也可翻譯為『盡量』。"
            },
            {
                "text": "完全、徹底",
                "explanation": "錯誤：「完全、徹底」是「すっかり」的意思。"
            },
            {
                "text": "馬上、立刻",
                "explanation": "錯誤：「馬上、立刻」是「すぐに」的意思。"
            },
            {
                "text": "隨意地、輕鬆地",
                "explanation": "錯誤：「隨意地、輕鬆地」是「気楽に（きらくに）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0274",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "きけん",
    "options": [
        {"text": "危険", "explanation": "正確答案：「きけん」對應的漢字是「危険」，意思是危險。\n中文翻譯：危險"},
        {"text": "機嫌", "explanation": "錯誤：「機嫌」讀作「きげん」，意思是心情。\n中文翻譯：心情"},
        {"text": "棄権", "explanation": "錯誤：「棄権」讀作「きけん」，意思是棄權。\n中文翻譯：棄權"},
        {"text": "紀元", "explanation": "錯誤：「紀元」讀作「きげん」，意思是紀元。\n中文翻譯：紀元"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0275",
        "type": "reading",
        "question": "接續詞「あるいは」在句子中通常表達什麼功能？ (N4)",
        "kanji": "或いは",
        "options": [
            {
                "text": "或者、也許、否則",
                "explanation": "正確答案：「或いは」表示選擇關係，翻譯為『或者』，或用於表示推測的可能性，翻譯為『也許』。"
            },
            {
                "text": "順便一提",
                "explanation": "錯誤：「順便一提」是「ところで」的意思。"
            },
            {
                "text": "總而言之",
                "explanation": "錯誤：「總而言之」是「要するに（ようするに）」的意思。"
            },
            {
                "text": "因此、所以",
                "explanation": "錯誤：「因此、所以」是「だから」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0276",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ひっし",
    "options": [
        {"text": "必死", "explanation": "正確答案：「ひっし」對應的漢字是「必死」，意思是拼命。\n中文翻譯：拼命"},
        {"text": "必至", "explanation": "錯誤：「必至」讀作「ひっし」，意思是必然到來。\n中文翻譯：必然到來"},
        {"text": "筆死", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "匹死", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0277",
        "type": "reading",
        "question": "副詞「しばらく」最恰當的中文意思是什麼？ (N4)",
        "kanji": "暫く",
        "options": [
            {
                "text": "暫時、一段時間",
                "explanation": "正確答案：「暫く」表示時間並不長，翻譯為『暫時、一段時間』，或久違地（好久不見）。"
            },
            {
                "text": "立刻、馬上",
                "explanation": "錯誤：「立刻、馬上」是「すぐに」的意思。"
            },
            {
                "text": "永遠地、永久地",
                "explanation": "錯誤：「永遠地、永久地」是「永久に（えいきゅうに）」的意思。"
            },
            {
                "text": "經常地、時常地",
                "explanation": "錯誤：「經常地、時常地」是「いつも」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0278",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "ふかのう",
    "options": [
        {"text": "不可能", "explanation": "正確答案：「ふかのう」對應的漢字是「不可能」，意思是不可能。\n中文翻譯：不可能"},
        {"text": "不可納", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "不加能", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "負可能", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0379",
        "type": "reading",
        "question": "副詞「まもなく」最恰當的中文意思是什麼？ (N4)",
        "kanji": "間もなく",
        "options": [
            {
                "text": "馬上、不久、不一會兒",
                "explanation": "正確答案：「間もなく」表示很快就會發生，翻譯為『馬上、不久』。"
            },
            {
                "text": "終於、總算",
                "explanation": "錯誤：「終於、總算」是「やっと」的意思。"
            },
            {
                "text": "長時間、很久",
                "explanation": "錯誤：「長時間、很久」是「長い間（ながいあいだ）」的意思。"
            },
            {
                "text": "從未、從來不",
                "explanation": "錯誤：「從未、從來不」是「一度も（いちども）～ない」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0280",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "じこう",
    "options": [
        {"text": "事項", "explanation": "正確答案：「じこう」對應的漢字是「事項」，意思是事項。\n中文翻譯：事項"},
        {"text": "時効", "explanation": "錯誤：「時効」讀作「じこう」，意思是時效。\n中文翻譯：時效"},
        {"text": "次項", "explanation": "錯誤：「次項」讀作「じこう」，意思是下項。\n中文翻譯：下項"},
        {"text": "自校", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0281",
        "type": "reading",
        "question": "副詞「じっと」最恰當的中文意思是什麼？ (N4)",
        "kanji": "じっと",
        "options": [
            {
                "text": "靜止不動地、聚精會神地",
                "explanation": "正確答案：「じっと」表示保持不動或集中注意力，翻譯為『靜止不動地、聚精會神地』。"
            },
            {
                "text": "輕輕地、悄悄地",
                "explanation": "錯誤：「輕輕地、悄悄地」是「そっと」的意思。"
            },
            {
                "text": "猛烈地、激烈地",
                "explanation": "錯誤：「猛烈地、激烈地」是「激しく（はげしく）」的意思。"
            },
            {
                "text": "一步一步地、慢慢地",
                "explanation": "錯誤：「一步一步地、慢慢地」是「だんだん」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0282",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "かいけつ",
    "options": [
        {"text": "解決", "explanation": "正確答案：「かいけつ」對應的漢字是「解決」，意思是解決。\n中文翻譯：解決"},
        {"text": "回決", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "会決", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "開決", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0283",
        "type": "reading",
        "question": "副詞「かえって」強調的是什麼樣的結果？ (N4)",
        "kanji": "却って",
        "options": [
            {
                "text": "結果與預期相反",
                "explanation": "正確答案：「却って」表示發生的結果與原本的預期、希望或目的相反，翻譯為『反而、反倒』。"
            },
            {
                "text": "結果符合預期",
                "explanation": "錯誤：「結果符合預期」是「やはり」或「案の定（あんのじょう）」的意思。"
            },
            {
                "text": "結果突然發生",
                "explanation": "錯誤：「結果突然發生」是「とつぜん」的意思。"
            },
            {
                "text": "結果緩慢地達成",
                "explanation": "錯誤：「結果緩慢地達成」是「徐々に（じょじょに）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0284",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "きてい",
    "options": [
        {"text": "規定", "explanation": "正確答案：「きてい」對應的漢字是「規定」，意思是規定。\n中文翻譯：規定"},
        {"text": "既定", "explanation": "錯誤：「既定」讀作「きてい」，意思是既定。\n中文翻譯：既定"},
        {"text": "起訂", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "紀定", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0285",
        "type": "reading",
        "question": "副詞「そっと」最恰當的中文意思是什麼？ (N4)",
        "kanji": "そっと",
        "options": [
            {
                "text": "輕輕地、悄悄地、靜靜地",
                "explanation": "正確答案：「そっと」表示動作輕柔、不發出聲音或不打擾別人，翻譯為『輕輕地、悄悄地』。"
            },
            {
                "text": "用力地、大聲地",
                "explanation": "錯誤：「用力地、大聲地」是「強く（つよく）」或「大声で（おおごえで）」的意思。"
            },
            {
                "text": "快速地、迅速地",
                "explanation": "錯誤：「快速地、迅速地」是「すぐに」或「速やかに（すみやかに）」的意思。"
            },
            {
                "text": "故意地、特地地",
                "explanation": "錯誤：「故意地、特地地」是「わざと」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0286",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "にんい",
    "options": [
        {"text": "任意", "explanation": "正確答案：「にんい」對應的漢字是「任意」，意思是任意。\n中文翻譯：任意"},
        {"text": "人意", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "仁意", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "認意", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0287",
        "type": "reading",
        "question": "副詞「わざと」最恰當的中文意思是什麼？ (N4)",
        "kanji": "態と",
        "options": [
            {
                "text": "故意地、特地地",
                "explanation": "正確答案：「態と」表示有意識、有目的地去做某事，翻譯為『故意地』。"
            },
            {
                "text": "不經意地、無意間",
                "explanation": "錯誤：「不經意地」是「うっかり」的意思。"
            },
            {
                "text": "隨意地、自由地",
                "explanation": "錯誤：「隨意地、自由地」是「自由に（じゆうに）」的意思。"
            },
            {
                "text": "很快地、一下子",
                "explanation": "錯誤：「很快地」是「あっという間に」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0288",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "きょうせい",
    "options": [
        {"text": "強制", "explanation": "正確答案：「きょうせい」對應的漢字是「強制」，意思是強制。\n中文翻譯：強制"},
        {"text": "矯正", "explanation": "錯誤：「矯正」讀作「きょうせい」，意思是矯正。\n中文翻譯：矯正"},
        {"text": "共生", "explanation": "錯誤：「共生」讀作「きょうせい」，意思是共生。\n中文翻譯：共生"},
        {"text": "強清", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
    "id": "V0289",
    "type": "reading",
    "question": "次の漢字の読み方を選びなさい",
    "kanji": "無効",
    "options": [
        {
            "text": "むこう",
            "explanation": "正確答案：「無」音讀為「む」，「効」音讀為「こう」。\n中文翻譯：無效"
        },
        {
            "text": "むこうう", // 替換為錯誤的長音寫法，或其他干擾項
            "explanation": "錯誤：日文中「効」的長音為「こう」不須多加一個「う」。\n中文翻譯：無效"
        },
        {
            "text": "むこ",
            "explanation": "錯誤：「効」的讀音是「こう」，不應省略長音。\n中文翻譯：無效"
        },
        {
            "text": "ぶこう",
            "explanation": "錯誤：「無」的讀音是「む」，不是「ぶ」。\n中文翻譯：無效"
        }
    ],
    "correctAnswer": 0
},
{
    "id": "V0290",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "むこう",
    "options": [
        {"text": "無効", "explanation": "正確答案：「むこう」對應的漢字是「無効」，意思是無效。\n中文翻譯：無效"},
        {"text": "吳効", "explanation": "錯誤：日文中「無効」是正確表記，不使用「効」。\n中文翻譯：無效"},
        {"text": "向う", "explanation": "錯誤：「向う」讀作「むこう」，意思是對面。\n中文翻譯：對面"},
        {"text": "無光", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0291",
        "type": "reading",
        "question": "副詞「やはり」和「やっぱり」的差異是什麼？ (N4)",
        "kanji": "やはり／やっぱり",
        "options": [
            {
                "text": "「やはり」較正式；「やっぱり」較口語",
                "explanation": "正確答案：兩者意思相同（果然、還是），但「やはり」更常用於書面或正式場合，「やっぱり」更常用於口語。"
            },
            {
                "text": "「やっぱり」用於肯定；「やはり」用於否定",
                "explanation": "錯誤：兩者皆可通用於肯定句，意思無差別。"
            },
            {
                "text": "「やはり」用於過去；「やっぱり」用於未來",
                "explanation": "錯誤：兩者皆不具備時間限制。"
            },
            {
                "text": "「やっぱり」強調意外；「やはり」強調推測",
                "explanation": "錯誤：兩者都強調結果符合預期。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0292",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "とりけし",
    "options": [
        {"text": "取消", "explanation": "正確答案：「とりけし」對應的漢字是「取消」，意思是取消。\n中文翻譯：取消"},
        {"text": "取蕭", "explanation": "錯誤：日文中「取消」是正確表記，不使用「消」。\n中文翻譯：取消"},
        {"text": "取り消し", "explanation": "錯誤：這是完整表記，但「取消」是正確的簡寫。\n中文翻譯：取消"},
        {"text": "取崩し", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0293",
        "type": "reading",
        "question": "表達『如果、萬一』的假設語氣時，最常使用哪個副詞？ (N4)",
        "kanji": "もし",
        "options": [
            {
                "text": "もし (もし)",
                "explanation": "正確答案：「もし」用於開啟假設句，常搭配「～たら」、「～なら」，翻譯為『如果、萬一』。"
            },
            {
                "text": "きっと (きっと)",
                "explanation": "錯誤：「きっと」表示『一定、必定』。"
            },
            {
                "text": "もちろん (もちろん)",
                "explanation": "錯誤：「もちろん」表示『當然』。"
            },
            {
                "text": "ずっと (ずっと)",
                "explanation": "錯誤：「ずっと」表示『一直、始終』。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0294",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "かいじょ",
    "options": [
        {"text": "解除", "explanation": "正確答案：「かいじょ」對應的漢字是「解除」，意思是解除。\n中文翻譯：解除"},
        {"text": "解廚", "explanation": "錯誤：日文中「解除」是正確表記，不使用「除」。\n中文翻譯：解除"},
        {"text": "開除", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "回除", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0295",
        "type": "reading",
        "question": "副詞「たぶん」通常搭配什麼樣的句型和意思？ (N4)",
        "kanji": "多分",
        "options": [
            {
                "text": "大概、或許（多搭配「でしょう」「と思います」）",
                "explanation": "正確答案：「多分」表示不確定性較高的推測，常與推量表達搭配，翻譯為『大概、或許』。"
            },
            {
                "text": "絕對、一定",
                "explanation": "錯誤：「絕對、一定」是「必ず（かならず）」的意思。"
            },
            {
                "text": "偶然、碰巧",
                "explanation": "錯誤：「偶然、碰巧」是「たまたま」的意思。"
            },
            {
                "text": "一點也不",
                "explanation": "錯誤：「一點也不」是「少しも～ない」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0296",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "じこう",
    "options": [
        {"text": "時効", "explanation": "正確答案：「じこう」對應的漢字是「時効」，意思是時效。\n中文翻譯：時效"},
        {"text": "蒔効", "explanation": "錯誤：日文中「時効」是正確表記，不使用「効」。\n中文翻譯：時效"},
        {"text": "事項", "explanation": "錯誤：「事項」讀作「じこう」，意思是事項。\n中文翻譯：事項"},
        {"text": "次項", "explanation": "錯誤：「次項」讀作「じこう」，意思是下項。\n中文翻譯：下項"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0297",
        "type": "reading",
        "question": "副詞「いよいよ」最恰當的中文意思是什麼？ (N4)",
        "kanji": "愈々",
        "options": [
            {
                "text": "終於、總算、越發",
                "explanation": "正確答案：「愈々」有兩種意思：一是表示最終結果，翻譯為『終於』；二是表示程度漸增，翻譯為『越發』。"
            },
            {
                "text": "一時地、暫時地",
                "explanation": "錯誤：「一時地、暫時地」是「一時的（いちじてき）」的意思。"
            },
            {
                "text": "偶爾、有時",
                "explanation": "錯誤：「偶爾、有時」是「たまに」的意思。"
            },
            {
                "text": "隨意地、輕鬆地",
                "explanation": "錯誤：「隨意地、輕鬆地」是「気楽に（きらくに）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
    "id": "V0298",
    "type": "writing",
    "question": "次の言葉の正しい漢字を選びなさい",
    "kana": "しゅとく",
    "options": [
        {"text": "取得", "explanation": "正確答案：「しゅとく」對應的漢字是「取得」，意思是取得。\n中文翻譯：取得"},
        {"text": "取德", "explanation": "錯誤：日文中「取得」是正確表記，不使用「得」。\n中文翻譯：取得"},
        {"text": "主得", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"},
        {"text": "種得", "explanation": "錯誤：此為不存在的漢字組合。\n中文翻譯：無"}
    ],
    "correctAnswer": 0
},
{
        "id": "V0299",
        "type": "reading",
        "question": "副詞「あまり」在接否定時，中文意思是什麼？ (N4)",
        "kanji": "余り (〜ない)",
        "options": [
            {
                "text": "不怎麼、不太（程度低）",
                "explanation": "正確答案：「余り～ない」表示程度不深，翻譯為『不怎麼、不太』。"
            },
            {
                "text": "絕對不、從來不",
                "explanation": "錯誤：「絕對不」是「決して～ない」的意思。"
            },
            {
                "text": "完全不、一點也不",
                "explanation": "錯誤：「完全不、一點也不」是「全然～ない」的意思。"
            },
            {
                "text": "難以置信地",
                "explanation": "錯誤：「難以置信地」是「まさか」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": "V0300",
        "type": "reading",
        "question": "以下の副詞「別に」在接否定句時，最恰當的中文意思是什麼？",
        "kanji": "別に (〜ない)",
        "options": [
            {
                "text": "並不是、沒有什麼特別的",
                "explanation": "正確答案：「別に～ない」常表示『並不是特別地…』、『沒什麼…』，用於否定語氣。"
            },
            {
                "text": "分開地、另外",
                "explanation": "錯誤：「分開地、另外」是「別に」的基本意思，但通常用於肯定句，如「別々に払う」（分開付錢）。"
            },
            {
                "text": "總是、經常",
                "explanation": "錯誤：「總是、經常」是「いつも」的意思。"
            },
            {
                "text": "一定會、必然",
                "explanation": "錯誤：「一定會、必然」是「必ず（かならず）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0301",
        "type": "reading",
        "question": "副詞「きっと」通常表達什麼樣的語氣和意思？",
        "kanji": "きっと",
        "options": [
            {
                "text": "一定、必定（確信度高）",
                "explanation": "正確答案：「きっと」表示對某事的發生有極高的確信，翻譯為『一定、必定』。"
            },
            {
                "text": "或許、說不定",
                "explanation": "錯誤：「或許、說不定」是「たぶん」或「もしかしたら」的意思。"
            },
            {
                "text": "突然、忽然",
                "explanation": "錯誤：「突然、忽然」是「急に（きゅうに）」的意思。"
            },
            {
                "text": "有點、稍微",
                "explanation": "錯誤：「有點、稍微」是「ちょっと」或「少し（すこし）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0302",
        "type": "reading",
        "question": "副詞「そろそろ」最恰當的中文意思是什麼？",
        "kanji": "そろそろ",
        "options": [
            {
                "text": "差不多該、漸漸地",
                "explanation": "正確答案：「そろそろ」表示時間或情況漸漸到了某個點，如「そろそろ帰る」（差不多該回去了）。"
            },
            {
                "text": "小心地、悄悄地",
                "explanation": "錯誤：『ゆっくり』或『そっと』表達『慢慢地、悄悄地』的意思。"
            },
            {
                "text": "每次、隨時",
                "explanation": "錯誤：『每次、隨時』是『いつでも』的意思。"
            },
            {
                "text": "一起、一同",
                "explanation": "錯誤：『一起、一同』是『一緒に（いっしょに）』的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0303",
        "type": "reading",
        "question": "以下哪個詞彙表示「總有一天、將來」的意思？",
        "kanji": "いつか",
        "options": [
            {
                "text": "總有一天、將來",
                "explanation": "正確答案：「いつか」表示不確定的未來時間點，翻譯為『總有一天、將來』。"
            },
            {
                "text": "一直、持續",
                "explanation": "錯誤：「一直、持續」是「ずっと」的意思。"
            },
            {
                "text": "總是、經常",
                "explanation": "錯誤：「總是、經常」是「いつも」的意思。"
            },
            {
                "text": "隨時都可以",
                "explanation": "錯誤：「隨時都可以」是「いつでも」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0304",
        "type": "reading",
        "question": "在表達「完全不...、一點也不...」的否定語氣時，最適合搭配哪個副詞？",
        "kanji": "全然 (〜ない)",
        "options": [
            {
                "text": "全然 (ぜんぜん)",
                "explanation": "正確答案：「全然～ない」表示完全否定，翻譯為『完全不…、一點也不…』。"
            },
            {
                "text": "たぶん",
                "explanation": "錯誤：「たぶん」表示『或許、大概』，用於推測，不搭配完全否定。"
            },
            {
                "text": "たまに",
                "explanation": "錯誤：「たまに」表示『偶爾』，與完全否定無關。"
            },
            {
                "text": "もしかしたら",
                "explanation": "錯誤：「もしかしたら」表示『搞不好、或許』，用於推測，不搭配完全否定。"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": "V0305",
        "type": "reading",
        "question": "副詞「めったに」在接否定時，中文意思是什麼？ (N4)",
        "kanji": "滅多に (〜ない)",
        "options": [
            {
                "text": "很少、難得（不）",
                "explanation": "正確答案：「滅多に～ない」表示頻率低，翻譯為『很少、難得（不）』。"
            },
            {
                "text": "經常、總是",
                "explanation": "錯誤：「經常、總是」是「いつも」或「よく」的意思。"
            },
            {
                "text": "無論如何、一定要",
                "explanation": "錯誤：「無論如何」是「どうしても」的意思。"
            },
            {
                "text": "立刻、馬上",
                "explanation": "錯誤：「立刻、馬上」是「すぐに」或「まもなく」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0306",
        "type": "reading",
        "question": "接續詞「それに」在句子中通常表達什麼功能？ (N4)",
        "kanji": "それに",
        "options": [
            {
                "text": "此外、而且（補充資訊）",
                "explanation": "正確答案：「それに」用於在已有的資訊上添加或補充新的資訊，翻譯為『此外、而且』。"
            },
            {
                "text": "雖然...但是",
                "explanation": "錯誤：「雖然...但是」是「けれども」或「しかし」的意思。"
            },
            {
                "text": "因此、所以",
                "explanation": "錯誤：「因此、所以」是「だから」或「ですから」的意思。"
            },
            {
                "text": "順便一提（轉換話題）",
                "explanation": "錯誤：「順便一提」是「ところで」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0307",
        "type": "reading",
        "question": "副詞「いっぺんに」最恰當的中文意思是什麼？ (N4)",
        "kanji": "一遍に",
        "options": [
            {
                "text": "一下子、一次性地",
                "explanation": "正確答案：「いっぺんに」表示在同一時間完成某事或發生某事，翻譯為『一下子、一次性地』。"
            },
            {
                "text": "一次又一次地",
                "explanation": "錯誤：「一次又一次地」是「何度も（なんども）」的意思。"
            },
            {
                "text": "一起、一同",
                "explanation": "錯誤：「一起、一同」是「一緒に（いっしょに）」的意思。"
            },
            {
                "text": "偶爾、不時",
                "explanation": "錯誤：「偶爾、不時」是「たまに」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0308",
        "type": "reading",
        "question": "副詞「たしかに」表達什麼樣的語氣和意思？ (N4)",
        "kanji": "確かに",
        "options": [
            {
                "text": "的確、確實（有確鑿證據或記憶）",
                "explanation": "正確答案：「たしかに」表示憑藉記憶或證據確認某事屬實，翻譯為『的確、確實』。"
            },
            {
                "text": "大概、也許",
                "explanation": "錯誤：「大概、也許」是「たぶん」或「もしかしたら」的意思。"
            },
            {
                "text": "驚訝地、意外地",
                "explanation": "錯誤：「驚訝地、意外地」是「びっくりして」的意思。"
            },
            {
                "text": "偶然、碰巧",
                "explanation": "錯誤：「偶然、碰巧」是「たまたま」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0309",
        "type": "reading",
        "question": "副詞「さっそく」最恰當的中文意思是什麼？ (N4)",
        "kanji": "早速",
        "options": [
            {
                "text": "馬上、立刻、趕快",
                "explanation": "正確答案：「早速」表示不等候、迅速地開始做某事，翻譯為『馬上、立刻』。"
            },
            {
                "text": "不小心地、無意間",
                "explanation": "錯誤：「不小心地」是「うっかり」的意思。"
            },
            {
                "text": "仔細地、詳細地",
                "explanation": "錯誤：「仔細地」是「詳しく（くわしく）」的意思。"
            },
            {
                "text": "一點一點地、慢慢地",
                "explanation": "錯誤：「一點一點地」是「だんだん」或「少しずつ」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0310",
        "type": "reading",
        "question": "副詞「ずいぶん」通常用來形容什麼樣的程度？ (N4)",
        "kanji": "随分",
        "options": [
            {
                "text": "相當、非常（比預想的程度高）",
                "explanation": "正確答案：「随分」表示程度超過預期，翻譯為『相當、非常』。"
            },
            {
                "text": "稍微、一點點",
                "explanation": "錯誤：「稍微、一點點」是「少し（すこし）」的意思。"
            },
            {
                "text": "也許、大概",
                "explanation": "錯誤：「也許、大概」是「たぶん」的意思。"
            },
            {
                "text": "從未、從來不",
                "explanation": "錯誤：「從未、從來不」是「いまだかつて（～ない）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0311",
        "type": "reading",
        "question": "表達『萬一、假使發生…』時，最常使用哪個副詞？ (N4)",
        "kanji": "万一 (まんいち)",
        "options": [
            {
                "text": "万一（まんいち）",
                "explanation": "正確答案：「万一」表示可能性很低的情況發生時，多用於假設句。"
            },
            {
                "text": "いつでも",
                "explanation": "錯誤：「いつでも」表示『隨時、無論何時』。"
            },
            {
                "text": "いつか",
                "explanation": "錯誤：「いつか」表示『總有一天、某個時候』。"
            },
            {
                "text": "たいてい",
                "explanation": "錯誤：「たいてい」表示『通常、多半』。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0312",
        "type": "reading",
        "question": "當想要表達『雖然...但是』的轉折語氣時，哪個接續詞最常用於書面或正式場合？ (N4)",
        "kanji": "しかし",
        "options": [
            {
                "text": "しかし",
                "explanation": "正確答案：「しかし」比「でも」更正式，多用於書面或正式談話中，表示轉折。"
            },
            {
                "text": "でも",
                "explanation": "錯誤：「でも」是口語中常用的轉折語，正式程度低於「しかし」。"
            },
            {
                "text": "そして",
                "explanation": "錯誤：「そして」表示『然後、接著』，用於順接。"
            },
            {
                "text": "それから",
                "explanation": "錯誤：「それから」表示『之後、然後』，用於時間順序的連接。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0313",
        "type": "reading",
        "question": "表達『完全不夠、根本不行』的強烈否定時，最適合搭配哪個副詞？ (N4)",
        "kanji": "とても (〜ない)",
        "options": [
            {
                "text": "とても (〜ない)",
                "explanation": "正確答案：「とても～ない」表示程度上的強烈否定，意為『完全不可能、根本辦不到』。"
            },
            {
                "text": "たぶん (〜ない)",
                "explanation": "錯誤：「たぶん」表示推測，不與強烈否定搭配。"
            },
            {
                "text": "まあ (〜ない)",
                "explanation": "錯誤：「まあ」表示『算了、還過得去』，與強烈否定語氣不符。"
            },
            {
                "text": "もし (〜ない)",
                "explanation": "錯誤：「もし」表示『如果、萬一』，用於假設。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0314",
        "type": "reading",
        "question": "副詞「ずうっと」最恰當的中文意思是什麼？ (N4)",
        "kanji": "ずうっと",
        "options": [
            {
                "text": "一直、始終、遠得多",
                "explanation": "正確答案：「ずうっと」強調時間的持續（一直）或程度/距離的巨大差異（遠得多）。"
            },
            {
                "text": "突然地、瞬間地",
                "explanation": "錯誤：「突然地」是「急に（きゅうに）」的意思。"
            },
            {
                "text": "慢慢地、緩緩地",
                "explanation": "錯誤：「慢慢地」是「ゆっくり」的意思。"
            },
            {
                "text": "大約、左右",
                "explanation": "錯誤：「大約、左右」是「ぐらい」或「約（やく）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": "V0315",
        "type": "reading",
        "question": "副詞「あいかわらず」最恰當的中文意思是什麼？ (N4)",
        "kanji": "相変わらず",
        "options": [
            {
                "text": "一如往常、仍然、依然",
                "explanation": "正確答案：「相変わらず」表示狀態沒有改變，翻譯為『一如往常、依然』。"
            },
            {
                "text": "難得地、很少",
                "explanation": "錯誤：「難得地、很少」是「めったに」的意思。"
            },
            {
                "text": "同時、一起",
                "explanation": "錯誤：「同時、一起」是「一緒に（いっしょに）」的意思。"
            },
            {
                "text": "恰好、剛好",
                "explanation": "錯誤：「恰好、剛好」是「ちょうど」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0316",
        "type": "reading",
        "question": "副詞「どうしても」在接否定時，中文意思是什麼？ (N4)",
        "kanji": "どうしても (〜ない)",
        "options": [
            {
                "text": "無論如何也（不）、怎麼也（不）",
                "explanation": "正確答案：「どうしても～ない」表示盡了全力仍無法達成，翻譯為『無論如何也（不）』。"
            },
            {
                "text": "一定、必定",
                "explanation": "錯誤：「一定、必定」是「きっと」或「必ず（かならず）」的意思。"
            },
            {
                "text": "隨意地、隨便",
                "explanation": "錯誤：「隨意地、隨便」是「勝手に（かってに）」的意思。"
            },
            {
                "text": "不知不覺地",
                "explanation": "錯誤：「不知不覺地」是「いつの間にか（いつのまにか）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0317",
        "type": "reading",
        "question": "副詞「たいてい」最恰當的中文意思是什麼？ (N4)",
        "kanji": "大抵",
        "options": [
            {
                "text": "通常、一般來說、多半",
                "explanation": "正確答案：「たいてい」表示在一般情況下的頻率或範圍，翻譯為『通常、多半』。"
            },
            {
                "text": "突然、出乎意料",
                "explanation": "錯誤：「突然、出乎意料」是「急に（きゅうに）」的意思。"
            },
            {
                "text": "偶爾、不時",
                "explanation": "錯誤：「偶爾、不時」是「たまに」的意思。"
            },
            {
                "text": "總是、一直",
                "explanation": "錯誤：「總是、一直」是「いつも」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0318",
        "type": "reading",
        "question": "接續詞「それにしても」通常用於什麼樣的語氣和情境？ (N4)",
        "kanji": "それにしても",
        "options": [
            {
                "text": "即便如此、話說回來（表示轉折或驚訝）",
                "explanation": "正確答案：「それにしても」用於對前述內容表示理解，但仍對其程度或事實感到驚訝或表示轉折。"
            },
            {
                "text": "順便一提（轉換話題）",
                "explanation": "錯誤：「順便一提」是「ところで」的意思。"
            },
            {
                "text": "也就是說（總結說明）",
                "explanation": "錯誤：「也就是說」是「つまり」的意思。"
            },
            {
                "text": "因為、由於",
                "explanation": "錯誤：「因為、由於」是「なぜなら」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0319",
        "type": "reading",
        "question": "副詞「いっそう」最恰當的中文意思是什麼？ (N4)",
        "kanji": "一層",
        "options": [
            {
                "text": "更加、越發",
                "explanation": "正確答案：「一層」表示程度的增加，翻譯為『更加、越發』。"
            },
            {
                "text": "一層樓（建築）",
                "explanation": "錯誤：「一層樓」是「一階（いっかい）」的意思。"
            },
            {
                "text": "一下子、一次性地",
                "explanation": "錯誤：「一下子」是「いっぺんに」的意思。"
            },
            {
                "text": "有點、稍微",
                "explanation": "錯誤：「有點、稍微」是「少し（すこし）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0320",
        "type": "reading",
        "question": "副詞「かえって」最恰當的中文意思是什麼？ (N4)",
        "kanji": "却って",
        "options": [
            {
                "text": "反而、反倒、倒是",
                "explanation": "正確答案：「却って」表示結果與預期相反，翻譯為『反而、反倒』。"
            },
            {
                "text": "當然、理所當然",
                "explanation": "錯誤：「當然、理所當然」是「もちろん」的意思。"
            },
            {
                "text": "再次、重新",
                "explanation": "錯誤：「再次、重新」是「再び（ふたたび）」的意思。"
            },
            {
                "text": "難以置信地",
                "explanation": "錯誤：「難以置信地」是「まさか」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0321",
        "type": "reading",
        "question": "副詞「なるべく」最恰當的中文意思是什麼？ (N4)",
        "kanji": "成る可く",
        "options": [
            {
                "text": "盡量、盡可能地",
                "explanation": "正確答案：「成る可く」表示在能力或條件允許範圍內最大程度地做某事，翻譯為『盡量』。"
            },
            {
                "text": "果然、不出所料",
                "explanation": "錯誤：「果然、不出所料」是「やはり」的意思。"
            },
            {
                "text": "不小心、無意間",
                "explanation": "錯誤：「不小心、無意間」是「うっかり」的意思。"
            },
            {
                "text": "慢慢地、悠閒地",
                "explanation": "錯誤：「慢慢地、悠閒地」是「ゆっくり」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0322",
        "type": "reading",
        "question": "副詞「たとえば」通常用於什麼樣的語氣和情境？ (N4)",
        "kanji": "例えば",
        "options": [
            {
                "text": "例如、舉個例子",
                "explanation": "正確答案：「例えば」用於引導例句或事例。"
            },
            {
                "text": "總而言之、簡而言之",
                "explanation": "錯誤：「總而言之」是「つまり」的意思。"
            },
            {
                "text": "無論如何、總是",
                "explanation": "錯誤：「無論如何」是「どうしても」的意思。"
            },
            {
                "text": "而且、此外",
                "explanation": "錯誤：「而且、此外」是「それに」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0323",
        "type": "reading",
        "question": "副詞「もしかしたら」通常搭配什麼樣的句型和意思？ (N4)",
        "kanji": "もしかしたら",
        "options": [
            {
                "text": "或許、說不定（多搭配「かもしれない」）",
                "explanation": "正確答案：「もしかしたら」表示可能性，常與推量助動詞「かもしれない」搭配，翻譯為『或許、說不定』。"
            },
            {
                "text": "一定、絕對",
                "explanation": "錯誤：「一定、絕對」是「必ず（かならず）」的意思。"
            },
            {
                "text": "難以置信地",
                "explanation": "錯誤：「難以置信地」是「まさか」的意思。"
            },
            {
                "text": "仔細地、詳細地",
                "explanation": "錯誤：「仔細地、詳細地」是「詳しく（くわしく）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0324",
        "type": "reading",
        "question": "副詞「やはり」最恰當的中文意思是什麼？ (N4)",
        "kanji": "やはり",
        "options": [
            {
                "text": "果然、還是（不出所料）",
                "explanation": "正確答案：「やはり」表示結果符合預期或回歸到原來的狀態，翻譯為『果然、還是』。"
            },
            {
                "text": "一下子、突然",
                "explanation": "錯誤：「一下子、突然」是「急に（きゅうに）」的意思。"
            },
            {
                "text": "或許、大概",
                "explanation": "錯誤：「或許、大概」是「たぶん」的意思。"
            },
            {
                "text": "雖然...但是",
                "explanation": "錯誤：「雖然...但是」是「けれども」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0325",
        "type": "reading",
        "question": "副詞「つい」最恰當的中文意思是什麼？ (N4)",
        "kanji": "つい",
        "options": [
            {
                "text": "不經意地、忍不住地",
                "explanation": "正確答案：「つい」表示在沒有意識到的情況下做了某事，翻譯為『不經意地、忍不住地』。"
            },
            {
                "text": "最終地、最後",
                "explanation": "錯誤：「最終地、最後」是「とうとう」的意思。"
            },
            {
                "text": "暫時地、一時",
                "explanation": "錯誤：「暫時地、一時」是「一時的（いちじてき）」的意思。"
            },
            {
                "text": "強烈地、猛烈地",
                "explanation": "錯誤：「強烈地、猛烈地」是「激しく（はげしく）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0326",
        "type": "reading",
        "question": "副詞「なかなか」接肯定句時，中文意思是什麼？ (N4)",
        "kanji": "なかなか",
        "options": [
            {
                "text": "相當地、非常地（稱讚）",
                "explanation": "正確答案：「なかなか」接肯定時表示程度高，用於稱讚，翻譯為『相當地、非常地』。"
            },
            {
                "text": "不容易、怎麼也（不）",
                "explanation": "錯誤：「不容易、怎麼也（不）」是「なかなか～ない」的意思。"
            },
            {
                "text": "有時、偶爾",
                "explanation": "錯誤：「有時、偶爾」是「時々（ときどき）」的意思。"
            },
            {
                "text": "從未、從來不",
                "explanation": "錯誤：「從未、從來不」是「一度も（いちども）～ない」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0327",
        "type": "reading",
        "question": "接續詞「だって」在句子開頭通常表達什麼功能？ (N4)",
        "kanji": "だって",
        "options": [
            {
                "text": "因為、還不是因為（提出理由、辯解）",
                "explanation": "正確答案：「だって」多用於口語，用來提出理由或進行辯解，翻譯為『因為、還不是因為』。"
            },
            {
                "text": "此外、而且",
                "explanation": "錯誤：「此外、而且」是「それに」的意思。"
            },
            {
                "text": "然而、但是",
                "explanation": "錯誤：「然而、但是」是「しかし」的意思。"
            },
            {
                "text": "總之、反正",
                "explanation": "錯誤：「總之、反正」是「とにかく」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0328",
        "type": "reading",
        "question": "副詞「やっと」最恰當的中文意思是什麼？ (N4)",
        "kanji": "漸と",
        "options": [
            {
                "text": "總算、終於（經過努力或漫長等待）",
                "explanation": "正確答案：「やっと」強調經過一番努力或長時間的等待，最終達成某事，翻譯為『總算、終於』。"
            },
            {
                "text": "立刻、馬上",
                "explanation": "錯誤：「立刻、馬上」是「すぐに」的意思。"
            },
            {
                "text": "馬上就要（時間短暫）",
                "explanation": "錯誤：「馬上就要」是「まもなく」的意思。"
            },
            {
                "text": "不知不覺地",
                "explanation": "錯誤：「不知不覺地」是「いつの間にか（いつのまにか）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0329",
        "type": "reading",
        "question": "副詞「きっと」和「必ず」的區別是什麼？ (N4)",
        "kanji": "きっと／必ず",
        "options": [
            {
                "text": "「必ず」是必然性；「きっと」是說話者的確信",
                "explanation": "正確答案：「必ず（かならず）」強調客觀必然性或義務；「きっと」強調說話者主觀上的強烈推測或確信。"
            },
            {
                "text": "「必ず」是推測；「きっと」是義務",
                "explanation": "錯誤：兩者的功能正好相反。「必ず」強調義務和客觀必然性。"
            },
            {
                "text": "兩者都可以用於否定句",
                "explanation": "錯誤：「きっと」一般不接否定；「必ずしも（〜ない）」才能接否定。"
            },
            {
                "text": "「きっと」比「必ず」更正式",
                "explanation": "錯誤：「必ず」在書面語或正式場合中更為常用，更正式。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0330",
        "type": "reading",
        "question": "副詞「うっかり」最恰當的中文意思是什麼？ (N4)",
        "kanji": "うっかり",
        "options": [
            {
                "text": "不小心、粗心、疏忽",
                "explanation": "正確答案：「うっかり」表示因疏忽或粗心而導致錯誤，翻譯為『不小心、粗心』。"
            },
            {
                "text": "生氣地、憤怒地",
                "explanation": "錯誤：「生氣地、憤怒地」是「怒って（おこって）」的意思。"
            },
            {
                "text": "失望地、沮喪地",
                "explanation": "錯誤：「失望地」是「がっかり」的意思。"
            },
            {
                "text": "突然、一下子",
                "explanation": "錯誤：「突然、一下子」是「急に（きゅうに）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0331",
        "type": "reading",
        "question": "接續詞「すると」在句子中通常表達什麼功能？ (N4)",
        "kanji": "すると",
        "options": [
            {
                "text": "於是、這麼一來（前因後果）",
                "explanation": "正確答案：「すると」表示前項行為發生後，接著出現後項結果或新情況，翻譯為『於是、這麼一來』。"
            },
            {
                "text": "但是、然而",
                "explanation": "錯誤：「但是、然而」是「しかし」的意思。"
            },
            {
                "text": "順便一提、換個話題",
                "explanation": "錯誤：「順便一提」是「ところで」的意思。"
            },
            {
                "text": "總而言之、總結來說",
                "explanation": "錯誤：「總而言之」是「要するに（ようするに）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0332",
        "type": "reading",
        "question": "副詞「たびたび」最恰當的中文意思是什麼？ (N4)",
        "kanji": "度々",
        "options": [
            {
                "text": "屢次、再三、常常",
                "explanation": "正確答案：「度々」表示次數多，頻繁地，翻譯為『屢次、常常』。"
            },
            {
                "text": "有時、偶爾",
                "explanation": "錯誤：「有時、偶爾」是「たまに」的意思。"
            },
            {
                "text": "每次、每當",
                "explanation": "錯誤：「每次、每當」是「ごとに」的意思。"
            },
            {
                "text": "一次性地、一下子",
                "explanation": "錯誤：「一次性地」是「いっぺんに」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0333",
        "type": "reading",
        "question": "副詞「だいたい」最恰當的中文意思是什麼？ (N4)",
        "kanji": "大体",
        "options": [
            {
                "text": "大致上、大體上、基本上",
                "explanation": "正確答案：「大体」表示主要部分或大致範圍，翻譯為『大致上、基本上』。"
            },
            {
                "text": "詳細地、仔細地",
                "explanation": "錯誤：「詳細地、仔細地」是「詳しく（くわしく）」的意思。"
            },
            {
                "text": "總而言之、總之",
                "explanation": "錯誤：「總而言之」是「とにかく」的意思。"
            },
            {
                "text": "總算、終於",
                "explanation": "錯誤：「總算、終於」是「やっと」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0334",
        "type": "reading",
        "question": "副詞「さっぱり」在接否定時，中文意思是什麼？ (N4)",
        "kanji": "さっぱり (〜ない)",
        "options": [
            {
                "text": "完全不、一點也不",
                "explanation": "正確答案：「さっぱり～ない」表示完全否定，翻譯為『完全不、一點也不』，比「全然～ない」口語化。"
            },
            {
                "text": "清爽地、乾脆地",
                "explanation": "錯誤：「清爽地、乾脆地」是「さっぱり」的基本意思，用於肯定句。"
            },
            {
                "text": "很快地、一下子",
                "explanation": "錯誤：「很快地」是「あっという間に」的意思。"
            },
            {
                "text": "大概、也許",
                "explanation": "錯誤：「大概、也許」是「たぶん」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0335",
        "type": "reading",
        "question": "副詞「とつぜん」最恰當的中文意思是什麼？ (N4)",
        "kanji": "突然",
        "options": [
            {
                "text": "突然、忽然、出乎意料",
                "explanation": "正確答案：「突然」表示事情發生得非常意外和迅速，翻譯為『突然、忽然』。"
            },
            {
                "text": "安靜地、悄悄地",
                "explanation": "錯誤：「安靜地、悄悄地」是「そっと」的意思。"
            },
            {
                "text": "總算、終於",
                "explanation": "錯誤：「總算、終於」是「やっと」的意思。"
            },
            {
                "text": "慢慢地、漸漸地",
                "explanation": "錯誤：「慢慢地、漸漸地」是「だんだん」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0336",
        "type": "reading",
        "question": "當想要表達『總而言之、總之』來總結話題時，哪個詞最常用？ (N4)",
        "kanji": "とにかく",
        "options": [
            {
                "text": "とにかく (とにかく)",
                "explanation": "正確答案：「とにかく」用於省略細節，直接切入重點或結論，翻譯為『總而言之、總之』。"
            },
            {
                "text": "たしかに (たしかに)",
                "explanation": "錯誤：「たしかに」表示『的確、確實』。"
            },
            {
                "text": "なるべく (なるべく)",
                "explanation": "錯誤：「なるべく」表示『盡量、盡可能』。"
            },
            {
                "text": "もしかしたら (もしかしたら)",
                "explanation": "錯誤：「もしかしたら」表示『或許、說不定』。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0337",
        "type": "reading",
        "question": "副詞「とうとう」最恰當的中文意思是什麼？ (N4)",
        "kanji": "到底",
        "options": [
            {
                "text": "最終、終究、終於（經歷曲折後）",
                "explanation": "正確答案：「とうとう」表示經過長時間或許多轉折後達成的最終結果，翻譯為『最終、終於』。"
            },
            {
                "text": "偶爾、不時",
                "explanation": "錯誤：「偶爾、不時」是「たまに」的意思。"
            },
            {
                "text": "不經意地、忍不住地",
                "explanation": "錯誤：「不經意地」是「つい」的意思。"
            },
            {
                "text": "最初、起初",
                "explanation": "錯誤：「最初、起初」是「初めは（はじめは）」的意思。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0338",
        "type": "reading",
        "question": "表達『偶然地、碰巧』的意思時，最適合用哪個詞？ (N4)",
        "kanji": "たまたま",
        "options": [
            {
                "text": "たまたま (たまたま)",
                "explanation": "正確答案：「たまたま」表示事情在沒有預期的情況下發生，翻譯為『偶然地、碰巧』。"
            },
            {
                "text": "どうしても (どうしても)",
                "explanation": "錯誤：「どうしても」表示『無論如何也』。"
            },
            {
                "text": "きっと (きっと)",
                "explanation": "錯誤：「きっと」表示『一定、必定』。"
            },
            {
                "text": "さっそく (さっそく)",
                "explanation": "錯誤：「さっそく」表示『馬上、立刻』。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0339",
        "type": "reading",
        "question": "當想要表達『當然、理所當然』時，最適合用哪個詞？ (N4)",
        "kanji": "もちろん",
        "options": [
            {
                "text": "もちろん (もちろん)",
                "explanation": "正確答案：「もちろん」表示無需懷疑或討論的事實，翻譯為『當然、理所當然』。"
            },
            {
                "text": "まるで (まるで)",
                "explanation": "錯誤：「まるで」表示『簡直、好像』，用於比喻。"
            },
            {
                "text": "なかなか (なかなか)",
                "explanation": "錯誤：「なかなか」表示『相當地』或『不容易』。"
            },
            {
                "text": "めったに (めったに)",
                "explanation": "錯誤：「めったに」表示『很少、難得』。"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": "V0340",
        "type": "reading",
        "question": "副詞「できるだけ」最恰當的中文意思是什麼？ (N4)",
        "kanji": "出来るだけ",
        "options": [
            {
                "text": "盡可能地、在可能範圍內",
                "explanation": "正確答案：「出来るだけ」表示在客觀條件允許的最大範圍內做某事，與「なるべく」意思相近。"
            },
            {
                "text": "總算、終於",
                "explanation": "錯誤：「總算、終於」是「やっと」的意思。"
            },
            {
                "text": "一定、絕對",
                "explanation": "錯誤：「一定、絕對」是「必ず（かならず）」的意思。"
            },
            {
                "text": "也許、說不定",
                "explanation": "錯誤：「也許、說不定」是「たぶん」的意思。"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": "V0341",
        "type": "reading",
        "question": "接續詞「そこで」在句子中通常表達什麼功能？ (N4)",
        "kanji": "そこで",
        "options": [
            {
                "text": "因此、於是（承接前文提出對策或新行動）",
                "explanation": "正確答案：「そこで」用於承接前文的狀況，並引出針對該狀況採取的行動或提出的對策，翻譯為『因此、於是』。"
            },
            {
                "text": "雖然...但是",
                "explanation": "錯誤：「雖然...但是」是「けれども」的意思。"
            },
            {
                "text": "順便一提",
                "explanation": "錯誤：「順便一提」是「ところで」的意思。"
            },
            {
                "text": "總而言之",
                "explanation": "錯誤：「總而言之」是「とにかく」的意思。"
            }
        ],
        "correctAnswer": 0
    }
];  // 確保這裡有正確的結束括號和分號
