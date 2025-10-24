// 日文N4測驗題庫 - Reading 題型
const readingQuestions = [
{
    id: 1,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "切手",
    options: [
        {text: "きって", explanation: "正確答案：切手（きって）意思是郵票。\n中文翻譯：郵票"},
        {text: "きて", explanation: "錯誤：缺少了促音，正確讀音是「きって」。\n中文翻譯：郵票"},
        {text: "せって", explanation: "錯誤：「切」的讀音不是「せつ」，正確讀音是「きって」。\n中文翻譯：郵票"},
        {text: "しって", explanation: "錯誤：這個讀音不存在。\n中文翻譯：郵票"}
    ],
    correctAnswer: 0
},
{
    id: 2,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "駐車場",
    options: [
        {text: "ちゅうしゃじょう", explanation: "正確答案：駐車場（ちゅうしゃじょう）意思是停車場。\n中文翻譯：停車場"},
        {text: "ちゅうしゃば", explanation: "錯誤：「場」的讀音不是「ば」，正確讀音是「じょう」。\n中文翻譯：停車場"},
        {text: "ちゅうくるまじょう", explanation: "錯誤：這個讀音不存在。\n中文翻譯：停車場"},
        {text: "とめしゃじょう", explanation: "錯誤：這個讀音不存在。\n中文翻譯：停車場"}
    ],
    correctAnswer: 0
},
{
    id: 11,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "薬局",
    options: [
        {text: "やっきょく", explanation: "正確答案：薬局（やっきょく）意思是藥局。\n中文翻譯：藥局"},
        {text: "くすりきょく", explanation: "錯誤：這個讀音不存在，正確讀音是「やっきょく」。\n中文翻譯：藥局"},
        {text: "やくきょく", explanation: "錯誤：缺少了促音，正確讀音是「やっきょく」。\n中文翻譯：藥局"},
        {text: "くすりや", explanation: "錯誤：這是「薬屋」的讀音，不是「薬局」。\n中文翻譯：藥局"}
    ],
    correctAnswer: 0
},
{
    id: 12,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "準備",
    options: [
        {text: "じゅんび", explanation: "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"},
        {text: "じゅび", explanation: "錯誤：缺少了撥音，正確讀音是「じゅんび」。\n中文翻譯：準備"},
        {text: "じゅうび", explanation: "錯誤：這個讀音不存在。\n中文翻譯：準備"},
        {text: "じゅんぴ", explanation: "錯誤：「備」的讀音是「び」，不是「ぴ」。\n中文翻譯：準備"}
    ],
    correctAnswer: 0
},
{
    id: 13,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "銀行",
    options: [
        {text: "ぎんこう", explanation: "正確答案：銀行（ぎんこう）意思是銀行。\n中文翻譯：銀行"},
        {text: "ぎんこ", explanation: "錯誤：缺少了長音，正確讀音是「ぎんこう」。\n中文翻譯：銀行"},
        {text: "きんこう", explanation: "錯誤：「銀」的讀音是「ぎん」，不是「きん」。\n中文翻譯：銀行"},
        {text: "ぎんごう", explanation: "錯誤：「行」的讀音是「こう」，不是「ごう」。\n中文翻譯：銀行"}
    ],
    correctAnswer: 0
},
{
    id: 14,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "病気",
    options: [
        {text: "びょうき", explanation: "正確答案：病気（びょうき）意思是生病。\n中文翻譯：生病"},
        {text: "びょうけ", explanation: "錯誤：「気」的讀音是「き」，不是「け」。\n中文翻譯：生病"},
        {text: "びょき", explanation: "錯誤：缺少了長音，正確讀音是「びょうき」。\n中文翻譯：生病"},
        {text: "びょうぎ", explanation: "錯誤：「気」的讀音是「き」，不是「ぎ」。\n中文翻譯：生病"}
    ],
    correctAnswer: 0
},
{
    id: 15,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "結婚",
    options: [
        {text: "けっこん", explanation: "正確答案：結婚（けっこん）意思是結婚。\n中文翻譯：結婚"},
        {text: "けつこん", explanation: "錯誤：促音化不正確，正確讀音是「けっこん」。\n中文翻譯：結婚"},
        {text: "けこん", explanation: "錯誤：缺少了促音，正確讀音是「けっこん」。\n中文翻譯：結婚"},
        {text: "けっこ", explanation: "錯誤：缺少了撥音，正確讀音是「けっこん」。\n中文翻譯：結婚"}
    ],
    correctAnswer: 0
},
{
    id: 16,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "掃除",
    options: [
        {text: "そうじ", explanation: "正確答案：掃除（そうじ）意思是打掃。\n中文翻譯：打掃"},
        {text: "そうじい", explanation: "錯誤：多餘的長音，正確讀音是「そうじ」。\n中文翻譯：打掃"},
        {text: "そじ", explanation: "錯誤：缺少了長音，正確讀音是「そうじ」。\n中文翻譯：打掃"},
        {text: "そうち", explanation: "錯誤：「除」的讀音是「じ」，不是「ち」。\n中文翻譯：打掃"}
    ],
    correctAnswer: 0
},
{
    id: 17,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "旅行",
    options: [
        {text: "りょこう", explanation: "正確答案：旅行（りょこう）意思是旅行。\n中文翻譯：旅行"},
        {text: "りょうこう", explanation: "錯誤：「旅」的讀音是「りょ」，不是「りょう」。\n中文翻譯：旅行"},
        {text: "りょこ", explanation: "錯誤：缺少了長音，正確讀音是「りょこう」。\n中文翻譯：旅行"},
        {text: "りこう", explanation: "錯誤：「旅」的讀音是「りょ」，不是「り」。\n中文翻譯：旅行"}
    ],
    correctAnswer: 0
},
{
    id: 18,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "家族",
    options: [
        {text: "かぞく", explanation: "正確答案：家族（かぞく）意思是家人。\n中文翻譯：家人"},
        {text: "かぞくう", explanation: "錯誤：多餘的長音，正確讀音是「かぞく」。\n中文翻譯：家人"},
        {text: "かぞ", explanation: "錯誤：缺少了「く」，正確讀音是「かぞく」。\n中文翻譯：家人"},
        {text: "かぞっく", explanation: "錯誤：多餘的促音，正確讀音是「かぞく」。\n中文翻譯：家人"}
    ],
    correctAnswer: 0
},
{
    id: 19,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "質問",
    options: [
        {text: "しつもん", explanation: "正確答案：質問（しつもん）意思是問題。\n中文翻譯：問題"},
        {text: "しちもん", explanation: "錯誤：「質」的讀音是「しつ」，不是「しち」。\n中文翻譯：問題"},
        {text: "しつも", explanation: "錯誤：缺少了撥音，正確讀音是「しつもん」。\n中文翻譯：問題"},
        {text: "しつもう", explanation: "錯誤：「問」的讀音是「もん」，不是「もう」。\n中文翻譯：問題"}
    ],
    correctAnswer: 0
},
{
    id: 20,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "電気",
    options: [
        {text: "でんき", explanation: "正確答案：電気（でんき）意思是電。\n中文翻譯：電"},
        {text: "てんき", explanation: "錯誤：「電」的讀音是「でん」，不是「てん」。\n中文翻譯：電"},
        {text: "でんけ", explanation: "錯誤：「気」的讀音是「き」，不是「け」。\n中文翻譯：電"},
        {text: "でんぎ", explanation: "錯誤：「気」的讀音是「き」，不是「ぎ」。\n中文翻譯：電"}
    ],
    correctAnswer: 0
},
{
    id: 61,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "住所",
    options: [
        {text: "じゅうしょ", explanation: "正確答案：住所（じゅうしょ）意思是地址。\n中文翻譯：地址"},
        {text: "じゅしょ", explanation: "錯誤：缺少了長音，正確讀音是「じゅうしょ」。\n中文翻譯：地址"},
        {text: "じゅうしょう", explanation: "錯誤：多餘的撥音，正確讀音是「じゅうしょ」。\n中文翻譯：地址"},
        {text: "じゅしょう", explanation: "錯誤：讀音不正確，正確讀音是「じゅうしょ」。\n中文翻譯：地址"}
    ],
    correctAnswer: 0
},
{
    id: 62,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "建物",
    options: [
        {text: "たてもの", explanation: "正確答案：建物（たてもの）意思是建築物。\n中文翻譯：建築物"},
        {text: "けんもの", explanation: "錯誤：「建」的讀音是「たて」，不是「けん」。\n中文翻譯：建築物"},
        {text: "たてぶつ", explanation: "錯誤：「物」的讀音是「もの」，不是「ぶつ」。\n中文翻譯：建築物"},
        {text: "けんぶつ", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：建築物"}
    ],
    correctAnswer: 0
},
{
    id: 63,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "地下鉄",
    options: [
        {text: "ちかてつ", explanation: "正確答案：地下鉄（ちかてつ）意思是地下鐵。\n中文翻譯：地下鐵"},
        {text: "じかてつ", explanation: "錯誤：「地」的讀音是「ち」，不是「じ」。\n中文翻譯：地下鐵"},
        {text: "ちかでつ", explanation: "錯誤：「鉄」的讀音是「てつ」，不是「でつ」。\n中文翻譯：地下鐵"},
        {text: "じがてつ", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：地下鐵"}
    ],
    correctAnswer: 0
},
{
    id: 64,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "公園",
    options: [
        {text: "こうえん", explanation: "正確答案：公園（こうえん）意思是公園。\n中文翻譯：公園"},
        {text: "こえん", explanation: "錯誤：缺少了長音，正確讀音是「こうえん」。\n中文翻譯：公園"},
        {text: "こうえい", explanation: "錯誤：「園」的讀音是「えん」，不是「えい」。\n中文翻譯：公園"},
        {text: "こえい", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：公園"}
    ],
    correctAnswer: 0
},
{
    id: 65,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "食事",
    options: [
        {text: "しょくじ", explanation: "正確答案：食事（しょくじ）意思是吃飯。\n中文翻譯：吃飯"},
        {text: "しょくし", explanation: "錯誤：「事」的讀音是「じ」，不是「し」。\n中文翻譯：吃飯"},
        {text: "しょじ", explanation: "錯誤：缺少了促音，正確讀音是「しょくじ」。\n中文翻譯：吃飯"},
        {text: "しょくち", explanation: "錯誤：「事」的讀音是「じ」，不是「ち」。\n中文翻譯：吃飯"}
    ],
    correctAnswer: 0
},
{
    id: 66,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "約束",
    options: [
        {text: "やくそく", explanation: "正確答案：約束（やくそく）意思是約定。\n中文翻譯：約定"},
        {text: "やくそ", explanation: "錯誤：缺少了「く」，正確讀音是「やくそく」。\n中文翻譯：約定"},
        {text: "やっそく", explanation: "錯誤：促音位置錯誤，正確讀音是「やくそく」。\n中文翻譯：約定"},
        {text: "やそく", explanation: "錯誤：缺少了「く」，正確讀音是「やくそく」。\n中文翻譯：約定"}
    ],
    correctAnswer: 0
},
{
    id: 67,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "運転",
    options: [
        {text: "うんてん", explanation: "正確答案：運転（うんてん）意思是駕駛。\n中文翻譯：駕駛"},
        {text: "うんでん", explanation: "錯誤：「転」的讀音是「てん」，不是「でん」。\n中文翻譯：駕駛"},
        {text: "うんて", explanation: "錯誤：缺少了撥音，正確讀音是「うんてん」。\n中文翻譯：駕駛"},
        {text: "うんで", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：駕駛"}
    ],
    correctAnswer: 0
},
{
    id: 68,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "卒業",
    options: [
        {text: "そつぎょう", explanation: "正確答案：卒業（そつぎょう）意思是畢業。\n中文翻譯：畢業"},
        {text: "そつぎょ", explanation: "錯誤：缺少了長音，正確讀音是「そつぎょう」。\n中文翻譯：畢業"},
        {text: "そつぎよう", explanation: "錯誤：長音表示錯誤，正確讀音是「そつぎょう」。\n中文翻譯：畢業"},
        {text: "そちぎょう", explanation: "錯誤：「卒」的讀音是「そつ」，不是「そち」。\n中文翻譯：畢業"}
    ],
    correctAnswer: 0
},
{
    id: 69,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "練習",
    options: [
        {text: "れんしゅう", explanation: "正確答案：練習（れんしゅう）意思是練習。\n中文翻譯：練習"},
        {text: "れんしゅ", explanation: "錯誤：缺少了長音，正確讀音是「れんしゅう」。\n中文翻譯：練習"},
        {text: "れんじゅう", explanation: "錯誤：「習」的讀音是「しゅう」，不是「じゅう」。\n中文翻譯：練習"},
        {text: "れんしゅうう", explanation: "錯誤：多餘的長音，正確讀音是「れんしゅう」。\n中文翻譯：練習"}
    ],
    correctAnswer: 0
},
{
    id: 70,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "紹介",
    options: [
        {text: "しょうかい", explanation: "正確答案：紹介（しょうかい）意思是介紹。\n中文翻譯：介紹"},
        {text: "しょうがい", explanation: "錯誤：「介」的讀音是「かい」，不是「がい」。\n中文翻譯：介紹"},
        {text: "しょかい", explanation: "錯誤：缺少了長音，正確讀音是「しょうかい」。\n中文翻譯：介紹"},
        {text: "しょがい", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：介紹"}
    ],
    correctAnswer: 0
},
{
    id: 121,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "切符",
    options: [
        {text: "きっぷ", explanation: "正確答案：切符（きっぷ）意思是車票。\n中文翻譯：車票"},
        {text: "きふ", explanation: "錯誤：缺少促音，正確讀音是「きっぷ」。\n中文翻譯：車票"},
        {text: "せっぷ", explanation: "錯誤：「切」在這裡不讀「せつ」。\n中文翻譯：車票"},
        {text: "きっぷう", explanation: "錯誤：多餘的長音，正確讀音是「きっぷ」。\n中文翻譯：車票"}
    ],
    correctAnswer: 0
},
{
    id: 127,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "食堂",
    options: [
        {text: "しょくどう", explanation: "正確答案：食堂（しょくどう）意思是餐廳。\n中文翻譯：餐廳"},
        {text: "しょくど", explanation: "錯誤：缺少長音，正確讀音是「しょくどう」。\n中文翻譯：餐廳"},
        {text: "しょっどう", explanation: "錯誤：促音位置錯誤。\n中文翻譯：餐廳"},
        {text: "しょくとう", explanation: "錯誤：「堂」的讀音是「どう」，不是「とう」。\n中文翻譯：餐廳"}
    ],
    correctAnswer: 0
},
{
    id: 132,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "綺麗",
    options: [
        {text: "きれい", explanation: "正確答案：「綺麗」讀作「きれい」。\n中文翻譯：漂亮、乾淨"},
        {text: "きりょう", explanation: "錯誤：這是其他詞的讀音。\n中文翻譯：漂亮、乾淨"},
        {text: "ぎれい", explanation: "錯誤：濁音錯誤。\n中文翻譯：漂亮、乾淨"},
        {text: "きれ", explanation: "錯誤：讀音不完整。\n中文翻譯：漂亮、乾淨"}
    ],
    correctAnswer: 0
},
{
    id: 138,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "注意",
    options: [
        {text: "ちゅうい", explanation: "正確答案：「注意」讀作「ちゅうい」，意思是注意、小心。\n中文翻譯：注意、小心"},
        {text: "ちゅい", explanation: "錯誤：缺少長音，正確讀音是「ちゅうい」。\n中文翻譯：注意、小心"},
        {text: "じゅうい", explanation: "錯誤：「注」的讀音是「ちゅう」，不是「じゅう」。\n中文翻譯：注意、小心"},
        {text: "ちゅうき", explanation: "錯誤：「意」的讀音是「い」，不是「き」。\n中文翻譯：注意、小心"}
    ],
    correctAnswer: 0
},
{
    id: 141,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "返事",
    options: [
        {text: "へんじ", explanation: "正確答案：返事（へんじ）意思是回覆、回答。\n中文翻譯：回覆、回答"},
        {text: "へんごと", explanation: "錯誤：這個讀音不存在，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"},
        {text: "かえりごと", explanation: "錯誤：這是逐字讀法，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"},
        {text: "へんこと", explanation: "錯誤：讀音不正確，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"}
    ],
    correctAnswer: 0
},
{
    id: 147,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "残念",
    options: [
        {text: "ざんねん", explanation: "正確答案：残念（ざんねん）意思是遺憾、可惜。\n中文翻譯：遺憾、可惜"},
        {text: "ざんね", explanation: "錯誤：缺少了撥音，正確讀音是「ざんねん」。\n中文翻譯：遺憾、可惜"},
        {text: "さんねん", explanation: "錯誤：「残」的讀音是「ざん」，不是「さん」。\n中文翻譯：遺憾、可惜"},
        {text: "ざんねんん", explanation: "錯誤：多餘的撥音，正確讀音是「ざんねん」。\n中文翻譯：遺憾、可惜"}
    ],
    correctAnswer: 0
},
{
    id: 151,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "動物",
    options: [
        {text: "どうぶつ", explanation: "正確答案：動物（どうぶつ）意思是動物。\n中文翻譯：動物"},
        {text: "とうぶつ", explanation: "錯誤：缺少了長音，正確讀音是「どうぶつ」。\n中文翻譯：動物"},
        {text: "どうもの", explanation: "錯誤：「物」的讀音是「ぶつ」，不是「もの」。\n中文翻譯：動物"},
        {text: "とうもの", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：動物"}
    ],
    correctAnswer: 0
},
{
    id: 156,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "海",
    options: [
        {text: "うみ", explanation: "正確答案：海（うみ）意思是海。\n中文翻譯：海"},
        {text: "かい", explanation: "錯誤：這是音讀，但「海」單獨時通常用訓讀。\n中文翻譯：海"},
        {text: "うめ", explanation: "錯誤：「海」的讀音不是「うめ」。\n中文翻譯：海"},
        {text: "みず", explanation: "錯誤：みず（水）意思是水，不是海。\n中文翻譯：海"}
    ],
    correctAnswer: 0
},
{
    id: 161,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "山",
    options: [
        {text: "やま", explanation: "正確答案：山（やま）意思是山。\n中文翻譯：山"},
        {text: "さん", explanation: "錯誤：這是音讀，但「山」單獨時通常用訓讀。\n中文翻譯：山"},
        {text: "やめ", explanation: "錯誤：「山」的讀音不是「やめ」。\n中文翻譯：山"},
        {text: "ざん", explanation: "錯誤：讀音錯誤。\n中文翻譯：山"}
    ],
    correctAnswer: 0
},
{
    id: 166,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "川",
    options: [
        {text: "かわ", explanation: "正確答案：川（かわ）意思是河流。\n中文翻譯：河流"},
        {text: "がわ", explanation: "錯誤：濁音錯誤，正確讀音是「かわ」。\n中文翻譯：河流"},
        {text: "せん", explanation: "錯誤：這是音讀，但「川」單獨時通常用訓讀。\n中文翻譯：河流"},
        {text: "かん", explanation: "錯誤：讀音錯誤。\n中文翻譯：河流"}
    ],
    correctAnswer: 0
},
{
    id: 171,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "雨",
    options: [
        {text: "あめ", explanation: "正確答案：雨（あめ）意思是雨。\n中文翻譯：雨"},
        {text: "あま", explanation: "錯誤：「雨」的讀音不是「あま」。\n中文翻譯：雨"},
        {text: "う", explanation: "錯誤：讀音不完整。\n中文翻譯：雨"},
        {text: "あめい", explanation: "錯誤：多餘的長音。\n中文翻譯：雨"}
    ],
    correctAnswer: 0
},
{
    id: 176,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "木",
    options: [
        {text: "き", explanation: "正確答案：木（き）意思是樹木。\n中文翻譯：樹木"},
        {text: "もく", explanation: "錯誤：這是音讀，但「木」單獨時通常用訓讀。\n中文翻譯：樹木"},
        {text: "ぎ", explanation: "錯誤：濁音錯誤。\n中文翻譯：樹木"},
        {text: "こ", explanation: "錯誤：讀音錯誤。\n中文翻譯：樹木"}
    ],
    correctAnswer: 0
},
{
    id: 181,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "月",
    options: [
        {text: "つき", explanation: "正確答案：月（つき）意思是月亮。\n中文翻譯：月亮"},
        {text: "がつ", explanation: "錯誤：這是用於月份的音讀。\n中文翻譯：月亮"},
        {text: "げつ", explanation: "錯誤：這是音讀，但「月」單獨時通常用訓讀。\n中文翻譯：月亮"},
        {text: "つきい", explanation: "錯誤：多餘的長音。\n中文翻譯：月亮"}
    ],
    correctAnswer: 0
},
{
    id: 186,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "火",
    options: [
        {text: "ひ", explanation: "正確答案：火（ひ）意思是火。\n中文翻譯：火"},
        {text: "か", explanation: "錯誤：這是音讀，但「火」單獨時通常用訓讀。\n中文翻譯：火"},
        {text: "ほ", explanation: "錯誤：讀音錯誤。\n中文翻譯：火"},
        {text: "ひい", explanation: "錯誤：多餘的長音。\n中文翻譯：火"}
    ],
    correctAnswer: 0
},
{
    id: 191,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "水",
    options: [
        {text: "みず", explanation: "正確答案：水（みず）意思是水。\n中文翻譯：水"},
        {text: "すい", explanation: "錯誤：這是音讀，但「水」單獨時通常用訓讀。\n中文翻譯：水"},
        {text: "みづ", explanation: "錯誤：濁音錯誤。\n中文翻譯：水"},
        {text: "みずう", explanation: "錯誤：多餘的長音。\n中文翻譯：水"}
    ],
    correctAnswer: 0
},
{
    id: 196,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "金",
    options: [
        {text: "きん", explanation: "正確答案：金（きん）意思是金錢、黃金。\n中文翻譯：金錢、黃金"},
        {text: "きんい", explanation: "錯誤：多餘的「い」，正確讀音是「きん」。\n中文翻譯：金錢、黃金"},
        {text: "ぎん", explanation: "錯誤：ぎん（銀）意思是銀。\n中文翻譯：金錢、黃金"},
        {text: "こん", explanation: "錯誤：讀音錯誤。\n中文翻譯：金錢、黃金"}
    ],
    correctAnswer: 0
},
{
    id: 201,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "土",
    options: [
        {text: "つち", explanation: "正確答案：土（つち）意思是土壤。\n中文翻譯：土壤"},
        {text: "ど", explanation: "錯誤：這是音讀，但「土」單獨時通常用訓讀。\n中文翻譯：土壤"},
        {text: "と", explanation: "錯誤：讀音錯誤。\n中文翻譯：土壤"},
        {text: "つちい", explanation: "錯誤：多餘的長音。\n中文翻譯：土壤"}
    ],
    correctAnswer: 0
},
{
    id: 206,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "日",
    options: [
        {text: "ひ", explanation: "正確答案：日（ひ）意思是太陽、日子。\n中文翻譯：太陽、日子"},
        {text: "にち", explanation: "錯誤：這是音讀，但「日」單獨時通常用訓讀。\n中文翻譯：太陽、日子"},
        {text: "じつ", explanation: "錯誤：這是其他讀音。\n中文翻譯：太陽、日子"},
        {text: "ひい", explanation: "錯誤：多餘的長音。\n中文翻譯：太陽、日子"}
    ],
    correctAnswer: 0
},
{
    id: 211,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "田",
    options: [
        {text: "た", explanation: "正確答案：田（た）意思是稻田。\n中文翻譯：稻田"},
        {text: "だ", explanation: "錯誤：濁音錯誤。\n中文翻譯：稻田"},
        {text: "でん", explanation: "錯誤：這是音讀。\n中文翻譯：稻田"},
        {text: "たん", explanation: "錯誤：讀音錯誤。\n中文翻譯：稻田"}
    ],
    correctAnswer: 0
},
{
    id: 216,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "林",
    options: [
        {text: "はやし", explanation: "正確答案：林（はやし）意思是樹林。\n中文翻譯：樹林"},
        {text: "りん", explanation: "錯誤：這是音讀。\n中文翻譯：樹林"},
        {text: "はやしい", explanation: "錯誤：多餘的長音。\n中文翻譯：樹林"},
        {text: "ばやし", explanation: "錯誤：濁音錯誤。\n中文翻譯：樹林"}
    ],
    correctAnswer: 0
},
{
    id: 221,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "森",
    options: [
        {text: "もり", explanation: "正確答案：森（もり）意思是森林。\n中文翻譯：森林"},
        {text: "しん", explanation: "錯誤：這是音讀。\n中文翻譯：森林"},
        {text: "もりい", explanation: "錯誤：多餘的長音。\n中文翻譯：森林"},
        {text: "もうり", explanation: "錯誤：讀音錯誤。\n中文翻譯：森林"}
    ],
    correctAnswer: 0
},
{
    id: 226,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "湖",
    options: [
        {text: "みずうみ", explanation: "正確答案：湖（みずうみ）意思是湖泊。\n中文翻譯：湖泊"},
        {text: "こ", explanation: "錯誤：這是音讀，但「湖」單獨時通常用訓讀。\n中文翻譯：湖泊"},
        {text: "みずみ", explanation: "錯誤：缺少長音，正確讀音是「みずうみ」。\n中文翻譯：湖泊"},
        {text: "みづうみ", explanation: "錯誤：「水」的讀音是「みず」，不是「みづ」。\n中文翻譯：湖泊"}
    ],
    correctAnswer: 0
},
{
    id: 317,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "喫茶店",
    options: [
        {text: "きっさてん", explanation: "正確答案：喫茶店（きっさてん）意思是咖啡廳。\n中文翻譯：咖啡廳"},
        {text: "きさてん", explanation: "錯誤：缺少促音，正確讀音是「きっさてん」。\n中文翻譯：咖啡廳"},
        {text: "きっさでん", explanation: "錯誤：「店」的讀音是「てん」，不是「でん」。\n中文翻譯：咖啡廳"},
        {text: "きつさてん", explanation: "錯誤：促音位置錯誤，正確讀音是「きっさてん」。\n中文翻譯：咖啡廳"}
    ],
    correctAnswer: 0
},
{
    id: 318,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "復習",
    options: [
        {text: "ふくしゅう", explanation: "正確答案：復習（ふくしゅう）意思是複習。\n中文翻譯：複習"},
        {text: "ふくしゅ", explanation: "錯誤：缺少長音，正確讀音是「ふくしゅう」。\n中文翻譯：複習"},
        {text: "ふうくしゅう", explanation: "錯誤：多餘的長音，正確讀音是「ふくしゅう」。\n中文翻譯：複習"},
        {text: "ふくじゅう", explanation: "錯誤：「習」的讀音是「しゅう」，不是「じゅう」。\n中文翻譯：複習"}
    ],
    correctAnswer: 0
},
{
    id: 319,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "観光",
    options: [
        {text: "かんこう", explanation: "正確答案：観光（かんこう）意思是觀光。\n中文翻譯：觀光"},
        {text: "かんこ", explanation: "錯誤：缺少長音，正確讀音是「かんこう」。\n中文翻譯：觀光"},
        {text: "がんこう", explanation: "錯誤：「観」的讀音是「かん」，不是「がん」。\n中文翻譯：觀光"},
        {text: "かんごう", explanation: "錯誤：「光」的讀音是「こう」，不是「ごう」。\n中文翻譯：觀光"}
    ],
    correctAnswer: 0
},
{
    id: 320,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "回答",
    options: [
        {text: "かいとう", explanation: "正確答案：回答（かいとう）意思是回答。\n中文翻譯：回答"},
        {text: "かいと", explanation: "錯誤：缺少長音，正確讀音是「かいとう」。\n中文翻譯：回答"},
        {text: "かえとう", explanation: "錯誤：「回」的讀音是「かい」，不是「かえ」。\n中文翻譯：回答"},
        {text: "かいどう", explanation: "錯誤：「答」的讀音是「とう」，不是「どう」。\n中文翻譯：回答"}
    ],
    correctAnswer: 0
},
{
    id: 321,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "洗濯",
    options: [
        {text: "せんたく", explanation: "正確答案：洗濯（せんたく）意思是洗衣服。\n中文翻譯：洗衣服"},
        {text: "せんた", explanation: "錯誤：缺少「く」，正確讀音是「せんたく」。\n中文翻譯：洗衣服"},
        {text: "せんだく", explanation: "錯誤：「濯」的讀音是「たく」，不是「だく」。\n中文翻譯：洗衣服"},
        {text: "せんたっく", explanation: "錯誤：多餘的促音，正確讀音是「せんたく」。\n中文翻譯：洗衣服"}
    ],
    correctAnswer: 0
},
{
    id: 346,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "動物",
    options: [
        {text: "どうぶつ", explanation: "正確答案：動物（どうぶつ）意思是動物。\n中文翻譯：動物"},
        {text: "とうぶつ", explanation: "錯誤：缺少長音。\n中文翻譯：動物"},
        {text: "どうもの", explanation: "錯誤：「物」的讀音錯誤。\n中文翻譯：動物"},
        {text: "とうもの", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：動物"}
    ],
    correctAnswer: 0
},
{
    id: 347,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "食事",
    options: [
        {text: "しょくじ", explanation: "正確答案：食事（しょくじ）意思是吃飯。\n中文翻譯：吃飯"},
        {text: "しょくし", explanation: "錯誤：「事」的讀音錯誤。\n中文翻譯：吃飯"},
        {text: "しょじ", explanation: "錯誤：缺少促音。\n中文翻譯：吃飯"},
        {text: "しょくち", explanation: "錯誤：「事」的讀音錯誤。\n中文翻譯：吃飯"}
    ],
    correctAnswer: 0
},
    {
        id: 351,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "返事",
        options: [
            {text: "へんじ", explanation: "正確答案：返事（へんじ）意思是回覆、回答。\n中文翻譯：回覆、回答"},
            {text: "へんごと", explanation: "錯誤：這個讀音不存在，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"},
            {text: "かえりごと", explanation: "錯誤：這是逐字讀法，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"},
            {text: "へんこと", explanation: "錯誤：讀音不正確，正確讀音是「へんじ」。\n中文翻譯：回覆、回答"}
        ],
        correctAnswer: 0
    },
    {
        id: 352,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "失敗",
        options: [
            {text: "しっぱい", explanation: "正確答案：失敗（しっぱい）意思是失敗。\n中文翻譯：失敗"},
            {text: "しつぱい", explanation: "錯誤：促音位置錯誤，正確讀音是「しっぱい」。\n中文翻譯：失敗"},
            {text: "しっぱ", explanation: "錯誤：缺少長音，正確讀音是「しっぱい」。\n中文翻譯：失敗"},
            {text: "しつばい", explanation: "錯誤：促音和長音都錯誤。\n中文翻譯：失敗"}
        ],
        correctAnswer: 0
    },
    {
        id: 353,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "残業",
        options: [
            {text: "ざんぎょう", explanation: "正確答案：残業（ざんぎょう）意思是加班。\n中文翻譯：加班"},
            {text: "ざんぎょ", explanation: "錯誤：缺少長音，正確讀音是「ざんぎょう」。\n中文翻譯：加班"},
            {text: "さんぎょう", explanation: "錯誤：「残」的讀音是「ざん」，不是「さん」。\n中文翻譯：加班"},
            {text: "ざんぎょうう", explanation: "錯誤：多餘的長音，正確讀音是「ざんぎょう」。\n中文翻譯：加班"}
        ],
        correctAnswer: 0
    },
    {
        id: 354,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "発表",
        options: [
            {text: "はっぴょう", explanation: "正確答案：発表（はっぴょう）意思是發表。\n中文翻譯：發表"},
            {text: "はつぴょう", explanation: "錯誤：促音位置錯誤，正確讀音是「はっぴょう」。\n中文翻譯：發表"},
            {text: "はっぴょ", explanation: "錯誤：缺少長音，正確讀音是「はっぴょう」。\n中文翻譯：發表"},
            {text: "はつひょう", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：發表"}
        ],
        correctAnswer: 0
    },
    {
        id: 355,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "予定",
        options: [
            {text: "よてい", explanation: "正確答案：予定（よてい）意思是預定、計劃。\n中文翻譯：預定、計劃"},
            {text: "よて", explanation: "錯誤：缺少長音，正確讀音是「よてい」。\n中文翻譯：預定、計劃"},
            {text: "ようてい", explanation: "錯誤：多餘的長音，正確讀音是「よてい」。\n中文翻譯：預定、計劃"},
            {text: "よでい", explanation: "錯誤：「定」的讀音是「てい」，不是「でい」。\n中文翻譯：預定、計劃"}
        ],
        correctAnswer: 0
    },
    {
        id: 381,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "配達",
        options: [
            {text: "はいたつ", explanation: "正確答案：配達（はいたつ）意思是配送、送貨。\n中文翻譯：配送、送貨"},
            {text: "はいだつ", explanation: "錯誤：「達」的讀音是「たつ」，不是「だつ」。\n中文翻譯：配送、送貨"},
            {text: "はいたち", explanation: "錯誤：「達」的讀音是「たつ」，不是「たち」。\n中文翻譯：配送、送貨"},
            {text: "はいた", explanation: "錯誤：缺少「つ」，正確讀音是「はいたつ」。\n中文翻譯：配送、送貨"}
        ],
        correctAnswer: 0
    },
    {
        id: 382,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "取消",
        options: [
            {text: "とりけし", explanation: "正確答案：取消（とりけし）意思是取消。\n中文翻譯：取消"},
            {text: "とりきし", explanation: "錯誤：「消」的讀音是「けし」，不是「きし」。\n中文翻譯：取消"},
            {text: "とりけ", explanation: "錯誤：缺少「し」，正確讀音是「とりけし」。\n中文翻譯：取消"},
            {text: "とりしょう", explanation: "錯誤：讀音完全錯誤。\n中文翻譯：取消"}
        ],
        correctAnswer: 0
    },
    {
        id: 391,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "到着",
        options: [
            {text: "とうちゃく", explanation: "正確答案：到着（とうちゃく）意思是到達。\n中文翻譯：到達"},
            {text: "とうちゃ", explanation: "錯誤：缺少「く」，正確讀音是「とうちゃく」。\n中文翻譯：到達"},
            {text: "どうちゃく", explanation: "錯誤：「到」的讀音是「とう」，不是「どう」。\n中文翻譯：到達"},
            {text: "とうちゃくう", explanation: "錯誤：多餘的長音，正確讀音是「とうちゃく」。\n中文翻譯：到達"}
        ],
        correctAnswer: 0
    },
    {
        id: 396,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "集合",
        options: [
            {text: "しゅうごう", explanation: "正確答案：集合（しゅうごう）意思是集合、聚集。\n中文翻譯：集合、聚集"},
            {text: "しゅうこ", explanation: "錯誤：「合」的讀音是「ごう」，不是「こう」。\n中文翻譯：集合、聚集"},
            {text: "しゅごう", explanation: "錯誤：缺少長音，正確讀音是「しゅうごう」。\n中文翻譯：集合、聚集"},
            {text: "しゅうご", explanation: "錯誤：缺少長音，正確讀音是「しゅうごう」。\n中文翻譯：集合、聚集"}
        ],
        correctAnswer: 0
    },
    {
        id: 397,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "遅刻",
        options: [
            {text: "ちこく", explanation: "正確答案：遅刻（ちこく）意思是遲到。\n中文翻譯：遲到"},
            {text: "ちこ", explanation: "錯誤：缺少「く」，正確讀音是「ちこく」。\n中文翻譯：遲到"},
            {text: "じこく", explanation: "錯誤：「遅」的讀音是「ち」，不是「じ」。\n中文翻譯：遲到"},
            {text: "ちごく", explanation: "錯誤：「刻」的讀音是「こく」，不是「ごく」。\n中文翻譯：遲到"}
        ],
        correctAnswer: 0
    },
    {
        id: 398,
        type: "reading",
        question: "次の漢字の読み方を選びなさい",
        kanji: "無料",
        options: [
            {text: "むりょう", explanation: "正確答案：無料（むりょう）意思是免費。\n中文翻譯：免費"},
            {text: "むりょ", explanation: "錯誤：缺少長音，正確讀音是「むりょう」。\n中文翻譯：免費"},
            {text: "ぶりょう", explanation: "錯誤：「無」的讀音是「む」，不是「ぶ」。\n中文翻譯：免費"},
            {text: "むりょうう", explanation: "錯誤：多餘的長音，正確讀音是「むりょう」。\n中文翻譯：免費"}
        ],
        correctAnswer: 0
    },
{
    id: 501,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "募集",
    options: [
        {text: "ぼしゅう", explanation: "正確答案：募集（ぼしゅう）意思是招募、徵求。\n中文翻譯：招募"},
        {text: "ぼしゅ", explanation: "錯誤：缺少長音，正確讀音是「ぼしゅう」。\n中文翻譯：招募"},
        {text: "ぼうしゅう", explanation: "錯誤：多餘的長音，正確讀音是「ぼしゅう」。\n中文翻譯：招募"},
        {text: "ぼじゅう", explanation: "錯誤：「集」的讀音是「しゅう」，不是「じゅう」。\n中文翻譯：招募"}
    ],
    correctAnswer: 0
},
{
    id: 502,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "確認",
    options: [
        {text: "かくにん", explanation: "正確答案：確認（かくにん）意思是確認。\n中文翻譯：確認"},
        {text: "かくに", explanation: "錯誤：缺少撥音，正確讀音是「かくにん」。\n中文翻譯：確認"},
        {text: "がくにん", explanation: "錯誤：「確」的讀音是「かく」，不是「がく」。\n中文翻譯：確認"},
        {text: "かくにんん", explanation: "錯誤：多餘的撥音，正確讀音是「かくにん」。\n中文翻譯：確認"}
    ],
    correctAnswer: 0
},
{
    id: 503,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "規則",
    options: [
        {text: "きそく", explanation: "正確答案：規則（きそく）意思是規則。\n中文翻譯：規則"},
        {text: "きそ", explanation: "錯誤：缺少「く」，正確讀音是「きそく」。\n中文翻譯：規則"},
        {text: "ぎそく", explanation: "錯誤：「規」的讀音是「き」，不是「ぎ」。\n中文翻譯：規則"},
        {text: "きぞく", explanation: "錯誤：「則」的讀音是「そく」，不是「ぞく」。\n中文翻譯：規則"}
    ],
    correctAnswer: 0
},
{
    id: 504,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "弁当",
    options: [
        {text: "べんとう", explanation: "正確答案：弁当（べんとう）意思是便當。\n中文翻譯：便當"},
        {text: "べんと", explanation: "錯誤：缺少長音，正確讀音是「べんとう」。\n中文翻譯：便當"},
        {text: "べんどう", explanation: "錯誤：「当」的讀音是「とう」，不是「どう」。\n中文翻譯：便當"},
        {text: "ぺんとう", explanation: "錯誤：「弁」的讀音是「べん」，不是「ぺん」。\n中文翻譯：便當"}
    ],
    correctAnswer: 0
},
{
    id: 505,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "参考",
    options: [
        {text: "さんこう", explanation: "正確答案：参考（さんこう）意思是參考。\n中文翻譯：參考"},
        {text: "さんこ", explanation: "錯誤：缺少長音，正確讀音是「さんこう」。\n中文翻譯：參考"},
        {text: "ざんこう", explanation: "錯誤：「参」的讀音是「さん」，不是「ざん」。\n中文翻譯：參考"},
        {text: "さんごう", explanation: "錯誤：「考」的讀音是「こう」，不是「ごう」。\n中文翻譯：參考"}
    ],
    correctAnswer: 0
},
{
    id: 506,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "都合",
    options: [
        {text: "つごう", explanation: "正確答案：都合（つごう）意思是方便、情況。\n中文翻譯：方便、情況"},
        {text: "つご", explanation: "錯誤：缺少長音，正確讀音是「つごう」。\n中文翻譯：方便、情況"},
        {text: "つこう", explanation: "錯誤：「合」的讀音是「ごう」，不是「こう」。\n中文翻譯：方便、情況"},
        {text: "づごう", explanation: "錯誤：「都」的讀音是「つ」，不是「づ」。\n中文翻譯：方便、情況"}
    ],
    correctAnswer: 0
},
{
    id: 507,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "連絡",
    options: [
        {text: "れんらく", explanation: "正確答案：連絡（れんらく）意思是聯絡。\n中文翻譯：聯絡"},
        {text: "れんら", explanation: "錯誤：缺少「く」，正確讀音是「れんらく」。\n中文翻譯：聯絡"},
        {text: "れんらっく", explanation: "錯誤：多餘的促音，正確讀音是「れんらく」。\n中文翻譯：聯絡"},
        {text: "れんろく", explanation: "錯誤：「絡」的讀音是「らく」，不是「ろく」。\n中文翻譯：聯絡"}
    ],
    correctAnswer: 0
},
{
    id: 508,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "案内",
    options: [
        {text: "あんない", explanation: "正確答案：案内（あんない）意思是引導、介紹。\n中文翻譯：引導、介紹"},
        {text: "あない", explanation: "錯誤：缺少撥音，正確讀音是「あんない」。\n中文翻譯：引導、介紹"},
        {text: "あんないい", explanation: "錯誤：多餘的長音，正確讀音是「あんない」。\n中文翻譯：引導、介紹"},
        {text: "あんねい", explanation: "錯誤：「内」的讀音是「ない」，不是「ねい」。\n中文翻譯：引導、介紹"}
    ],
    correctAnswer: 0
},
{
    id: 509,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "利用",
    options: [
        {text: "りよう", explanation: "正確答案：利用（りよう）意思是利用。\n中文翻譯：利用"},
        {text: "りよ", explanation: "錯誤：缺少長音，正確讀音是「りよう」。\n中文翻譯：利用"},
        {text: "りゆう", explanation: "錯誤：「用」的讀音是「よう」，不是「ゆう」。\n中文翻譯：利用"},
        {text: "りょう", explanation: "錯誤：「利」的讀音是「り」，不是「りょう」。\n中文翻譯：利用"}
    ],
    correctAnswer: 0
},
{
    id: 510,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "変更",
    options: [
        {text: "へんこう", explanation: "正確答案：変更（へんこう）意思是變更。\n中文翻譯：變更"},
        {text: "へんこ", explanation: "錯誤：缺少長音，正確讀音是「へんこう」。\n中文翻譯：變更"},
        {text: "ぺんこう", explanation: "錯誤：「変」的讀音是「へん」，不是「ぺん」。\n中文翻譯：變更"},
        {text: "へんごう", explanation: "錯誤：「更」的讀音是「こう」，不是「ごう」。\n中文翻譯：變更"}
    ],
    correctAnswer: 0
},
{
        "id": 511,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "経験",
        "options": [
            {
                "text": "けいけん",
                "explanation": "正確答案：経験（けいけん）意思是經驗。\n中文翻譯：經驗"
            },
            {
                "text": "けいげん",
                "explanation": "錯誤：「験」的讀音是「けん」，不是「げん」。\n中文翻譯：經驗"
            },
            {
                "text": "けけん",
                "explanation": "錯誤：缺少長音，正確讀音是「けいけん」。\n中文翻譯：經驗"
            },
            {
                "text": "きょうけん",
                "explanation": "錯誤：「経」的讀音是「けい」，不是「きょう」。\n中文翻譯：經驗"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 512,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "会議",
        "options": [
            {
                "text": "かいぎ",
                "explanation": "正確答案：会議（かいぎ）意思是會議。\n中文翻譯：會議"
            },
            {
                "text": "かいき",
                "explanation": "錯誤：「議」的讀音是「ぎ」，不是「き」。\n中文翻譯：會議"
            },
            {
                "text": "かぎ",
                "explanation": "錯誤：缺少長音，正確讀音是「かいぎ」。\n中文翻譯：會議"
            },
            {
                "text": "かいい",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：會議"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 513,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "急行",
        "options": [
            {
                "text": "きゅうこう",
                "explanation": "正確答案：急行（きゅうこう）意思是快車。\n中文翻譯：快車"
            },
            {
                "text": "きゅこう",
                "explanation": "錯誤：缺少長音，正確讀音是「きゅうこう」。\n中文翻譯：快車"
            },
            {
                "text": "きゅうごう",
                "explanation": "錯誤：「行」的讀音是「こう」，不是「ごう」。\n中文翻譯：快車"
            },
            {
                "text": "きっこう",
                "explanation": "錯誤：發音錯誤。\n中文翻譯：快車"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 514,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "都合",
        "options": [
            {
                "text": "つごう",
                "explanation": "正確答案：都合（つごう）意思是方便、情況。\n中文翻譯：方便、情況"
            },
            {
                "text": "つこう",
                "explanation": "錯誤：「合」的讀音是「ごう」，不是「こう」。\n中文翻譯：方便、情況"
            },
            {
                "text": "つご",
                "explanation": "錯誤：缺少長音，正確讀音是「つごう」。\n中文翻譯：方便、情況"
            },
            {
                "text": "づごう",
                "explanation": "錯誤：「都」的讀音是「つ」，不是「づ」。\n中文翻譯：方便、情況"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 515,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "新聞",
        "options": [
            {
                "text": "しんぶん",
                "explanation": "正確答案：新聞（しんぶん）意思是報紙。\n中文翻譯：報紙"
            },
            {
                "text": "しんぶ",
                "explanation": "錯誤：缺少撥音，正確讀音是「しんぶん」。\n中文翻譯：報紙"
            },
            {
                "text": "しんもん",
                "explanation": "錯誤：「聞」的讀音是「ぶん」，不是「もん」。\n中文翻譯：報紙"
            },
            {
                "text": "しんぷん",
                "explanation": "錯誤：「聞」的讀音是「ぶん」，不是「ぷん」。\n中文翻譯：報紙"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 516,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "電話",
        "options": [
            {
                "text": "でんわ",
                "explanation": "正確答案：電話（でんわ）意思是電話。\n中文翻譯：電話"
            },
            {
                "text": "てんわ",
                "explanation": "錯誤：「電」的讀音是「でん」，不是「てん」。\n中文翻譯：電話"
            },
            {
                "text": "でんが",
                "explanation": "錯誤：「話」的讀音是「わ」，不是「が」。\n中文翻譯：電話"
            },
            {
                "text": "でんうあ",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：電話"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 517,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "教室",
        "options": [
            {
                "text": "きょうしつ",
                "explanation": "正確答案：教室（きょうしつ）意思是教室。\n中文翻譯：教室"
            },
            {
                "text": "きょしつ",
                "explanation": "錯誤：缺少長音，正確讀音是「きょうしつ」。\n中文翻譯：教室"
            },
            {
                "text": "きょうし",
                "explanation": "錯誤：缺少「つ」，正確讀音是「きょうしつ」。\n中文翻譯：教室"
            },
            {
                "text": "きょし",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：教室"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 518,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "薬",
        "options": [
            {
                "text": "くすり",
                "explanation": "正確答案：薬（くすり）意思是藥品。\n中文翻譯：藥品"
            },
            {
                "text": "やく",
                "explanation": "錯誤：這是音讀，單獨使用多為「くすり」。\n中文翻譯：藥品"
            },
            {
                "text": "くさり",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：藥品"
            },
            {
                "text": "くすい",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：藥品"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 519,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "家族",
        "options": [
            {
                "text": "かぞく",
                "explanation": "正確答案：家族（かぞく）意思是家人。\n中文翻譯：家人"
            },
            {
                "text": "かぞくう",
                "explanation": "錯誤：多餘的長音，正確讀音是「かぞく」。\n中文翻譯：家人"
            },
            {
                "text": "かぞ",
                "explanation": "錯誤：缺少了「く」，正確讀音是「かぞく」。\n中文翻譯：家人"
            },
            {
                "text": "かぞっく",
                "explanation": "錯誤：多餘的促音，正確讀音是「かぞく」。\n中文翻譯：家人"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 520,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "場所",
        "options": [
            {
                "text": "ばしょ",
                "explanation": "正確答案：場所（ばしょ）意思是地方、場所。\n中文翻譯：地方、場所"
            },
            {
                "text": "ばしょう",
                "explanation": "錯誤：多餘的長音，正確讀音是「ばしょ」。\n中文翻譯：地方、場所"
            },
            {
                "text": "ばじょ",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：地方、場所"
            },
            {
                "text": "ところ",
                "explanation": "錯誤：這是「所」的單獨讀音，但「場所」讀「ばしょ」。\n中文翻譯：地方、場所"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 521,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "問題",
        "options": [
            {
                "text": "もんだい",
                "explanation": "正確答案：問題（もんだい）意思是問題。\n中文翻譯：問題"
            },
            {
                "text": "もんだいん",
                "explanation": "錯誤：多餘的撥音，正確讀音是「もんだい」。\n中文翻譯：問題"
            },
            {
                "text": "もんだ",
                "explanation": "錯誤：缺少「い」，正確讀音是「もんだい」。\n中文翻譯：問題"
            },
            {
                "text": "もんたい",
                "explanation": "錯誤：「題」的讀音是「だい」，不是「たい」。\n中文翻譯：問題"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 522,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "試験",
        "options": [
            {
                "text": "しけん",
                "explanation": "正確答案：試験（しけん）意思是考試。\n中文翻譯：考試"
            },
            {
                "text": "しけんい",
                "explanation": "錯誤：多餘的長音，正確讀音是「しけん」。\n中文翻譯：考試"
            },
            {
                "text": "しっけん",
                "explanation": "錯誤：多餘的促音，正確讀音是「しけん」。\n中文翻譯：考試"
            },
            {
                "text": "じけん",
                "explanation": "錯誤：「試」的讀音是「し」，不是「じ」。\n中文翻譯：考試"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 523,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "大切",
        "options": [
            {
                "text": "たいせつ",
                "explanation": "正確答案：大切（たいせつ）意思是重要。\n中文翻譯：重要"
            },
            {
                "text": "だいせつ",
                "explanation": "錯誤：「大」的讀音是「たい」，不是「だい」。\n中文翻譯：重要"
            },
            {
                "text": "たいせ",
                "explanation": "錯誤：缺少「つ」，正確讀音是「たいせつ」。\n中文翻譯：重要"
            },
            {
                "text": "おおせつ",
                "explanation": "錯誤：「大」的訓讀是「おお」，但組詞時讀「たい」。\n中文翻譯：重要"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": 524,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "図書館",
        "options": [
            {
                "text": "としょかん",
                "explanation": "正確答案：図書館（としょかん）意思是圖書館。\n中文翻譯：圖書館"
            },
            {
                "text": "としょうかん",
                "explanation": "錯誤：多餘長音，正確讀音是「としょかん」。\n中文翻譯：圖書館"
            },
            {
                "text": "どしょかん",
                "explanation": "錯誤：「図」的讀音是「と」，不是「ど」。\n中文翻譯：圖書館"
            },
            {
                "text": "としょけん",
                "explanation": "錯誤：「館」的讀音是「かん」，不是「けん」。\n中文翻譯：圖書館"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 525,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "理由",
        "options": [
            {
                "text": "りゆう",
                "explanation": "正確答案：理由（りゆう）意思是理由、原因。\n中文翻譯：理由"
            },
            {
                "text": "りよう",
                "explanation": "錯誤：これは「利用（りよう）」の読み方です。理由の「由」は「ゆう」と読みます。\n中文翻譯：理由"
            },
            {
                "text": "りゆ",
                "explanation": "錯誤：缺少長音，正確讀音是「りゆう」。\n中文翻譯：理由"
            },
            {
                "text": "りゅう",
                "explanation": "錯誤：拗音錯誤，正確讀音是「りゆう」。\n中文翻譯：理由"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 526,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "高",
        "options": [
            {
                "text": "たか",
                "explanation": "正確答案：高（たか）是訓讀，意為高度、高處。\n中文翻譯：高（度）、高（處）"
            },
            {
                "text": "こう",
                "explanation": "錯誤：這是音讀，單獨使用多用「たか」或「たかい」。\n中文翻譯：高（度）、高（處）"
            },
            {
                "text": "たかい",
                "explanation": "錯誤：這是形容詞「高い」的讀法，單字「高」作為名詞讀作「たか」。\n中文翻譯：高（度）、高（處）"
            },
            {
                "text": "たかさ",
                "explanation": "錯誤：これは「高さ」の読み方です。\n中文翻譯：高（度）、高（處）"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 527,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "準備",
        "options": [
            {
                "text": "じゅんび",
                "explanation": "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"
            },
            {
                "text": "じゅび",
                "explanation": "錯誤：缺少撥音，正確讀音是「じゅんび」。\n中文翻譯：準備"
            },
            {
                "text": "じゅうび",
                "explanation": "錯誤：多餘的長音，正確讀音是「じゅんび」。\n中文翻譯：準備"
            },
            {
                "text": "しゅんび",
                "explanation": "錯誤：濁音錯誤，正確讀音是「じゅんび」。\n中文翻譯：準備"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 528,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "簡単",
        "options": [
            {
                "text": "かんたん",
                "explanation": "正確答案：簡単（かんたん）意思是簡單。\n中文翻譯：簡單"
            },
            {
                "text": "かんた",
                "explanation": "錯誤：缺少撥音，正確讀音是「かんたん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんだん",
                "explanation": "錯誤：「単」的讀音是「たん」，不是「だん」。\n中文翻譯：簡單"
            },
            {
                "text": "かたみ",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：簡單"
            }
        ],
        "correctAnswer": 0
    },
{
        "id": 529,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "趣味",
        "options": [
            {
                "text": "しゅみ",
                "explanation": "正確答案：趣味（しゅみ）意思是興趣。\n中文翻譯：興趣"
            },
            {
                "text": "しゅんみ",
                "explanation": "錯誤：缺少撥音，正確讀音是「しゅみ」。\n中文翻譯：興趣"
            },
            {
                "text": "しゅうみ",
                "explanation": "錯誤：多餘長音，正確讀音是「しゅみ」。\n中文翻譯：興趣"
            },
            {
                "text": "しゅび",
                "explanation": "錯誤：「味」的讀音是「み」，不是「び」。\n中文翻譯：興趣"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 530,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "意味",
        "options": [
            {
                "text": "いみ",
                "explanation": "正確答案：意味（いみ）意思是意思、含義。\n中文翻譯：意思、含義"
            },
            {
                "text": "いいみ",
                "explanation": "錯誤：多餘長音，正確讀音是「いみ」。\n中文翻譯：意思、含義"
            },
            {
                "text": "いみい",
                "explanation": "錯誤：多餘長音，正確讀音是「いみ」。\n中文翻譯：意思、含義"
            },
            {
                "text": "ゆみ",
                "explanation": "錯誤：「意」的讀音是「い」，不是「ゆ」。\n中文翻譯：意思、含義"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 531,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "簡単",
        "options": [
            {
                "text": "かんたん",
                "explanation": "正確答案：簡単（かんたん）意思是簡單。\n中文翻譯：簡單"
            },
            {
                "text": "かんだん",
                "explanation": "錯誤：「単」的讀音是「たん」，不是「だん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんた",
                "explanation": "錯誤：缺少撥音，正確讀音是「かんたん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんたんん",
                "explanation": "錯誤：多餘的撥音，正確讀音是「かんたん」。\n中文翻譯：簡單"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 532,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "健康",
        "options": [
            {
                "text": "けんこう",
                "explanation": "正確答案：健康（けんこう）意思是健康。\n中文翻譯：健康"
            },
            {
                "text": "けんこ",
                "explanation": "錯誤：缺少長音，正確讀音是「けんこう」。\n中文翻譯：健康"
            },
            {
                "text": "けんごう",
                "explanation": "錯誤：「康」的讀音是「こう」，不是「ごう」。\n中文翻譯：健康"
            },
            {
                "text": "げんこう",
                "explanation": "錯誤：「健」的讀音是「けん」，不是「げん」。\n中文翻譯：健康"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 533,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "準備",
        "options": [
            {
                "text": "じゅんび",
                "explanation": "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"
            },
            {
                "text": "じゅび",
                "explanation": "錯誤：缺少撥音，正確讀音是「じゅんび」。\n中文翻譯：準備"
            },
            {
                "text": "しゅんび",
                "explanation": "錯誤：濁音錯誤，正確讀音是「じゅんび」。\n中文翻譯：準備"
            },
            {
                "text": "じゅんぴ",
                "explanation": "錯誤：半濁音錯誤，正確讀音是「じゅんび」。\n中文翻譯：準備"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 534,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "会議",
        "options": [
            {
                "text": "かいぎ",
                "explanation": "正確答案：会議（かいぎ）意思是會議。\n中文翻譯：會議"
            },
            {
                "text": "かぎ",
                "explanation": "錯誤：缺少長音，正確讀音是「かいぎ」。\n中文翻譯：會議"
            },
            {
                "text": "かいき",
                "explanation": "錯誤：「議」的讀音是「ぎ」，不是「き」。\n中文翻譯：會議"
            },
            {
                "text": "かいぎい",
                "explanation": "錯誤：多餘的長音，正確讀音是「かいぎ」。\n中文翻譯：會議"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 535,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "写真",
        "options": [
            {
                "text": "しゃしん",
                "explanation": "正確答案：写真（しゃしん）意思是照片。\n中文翻譯：照片"
            },
            {
                "text": "さしん",
                "explanation": "錯誤：缺少拗音，正確讀音是「しゃしん」。\n中文翻譯：照片"
            },
            {
                "text": "しゃし",
                "explanation": "錯誤：缺少撥音，正確讀音是「しゃしん」。\n中文翻譯：照片"
            },
            {
                "text": "ざしん",
                "explanation": "錯誤：濁音錯誤，正確讀音是「しゃしん」。\n中文翻譯：照片"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 536,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "場所",
        "options": [
            {
                "text": "ばしょ",
                "explanation": "正確答案：場所（ばしょ）意思是地方、場所。\n中文翻譯：地方、場所"
            },
            {
                "text": "ばしょう",
                "explanation": "錯誤：多餘長音，正確讀音是「ばしょ」。\n中文翻譯：地方、場所"
            },
            {
                "text": "ばじょ",
                "explanation": "錯誤：讀音錯誤，正確讀音是「ばしょ」。\n中文翻譯：地方、場所"
            },
            {
                "text": "ばそ",
                "explanation": "錯誤：讀音錯誤，正確讀音是「ばしょ」。\n中文翻譯：地方、場所"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 537,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "値段",
        "options": [
            {
                "text": "ねだん",
                "explanation": "正確答案：値段（ねだん）意思是價格。\n中文翻譯：價格"
            },
            {
                "text": "ねたん",
                "explanation": "錯誤：「段」的讀音是「だん」，不是「たん」。\n中文翻譯：價格"
            },
            {
                "text": "ねだ",
                "explanation": "錯誤：缺少撥音，正確讀音是「ねだん」。\n中文翻譯：價格"
            },
            {
                "text": "ねだんん",
                "explanation": "錯誤：多餘的撥音，正確讀音是「ねだん」。\n中文翻譯：價格"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 538,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "急行",
        "options": [
            {
                "text": "きゅうこう",
                "explanation": "正確答案：急行（きゅうこう）意思是快車。\n中文翻譯：快車"
            },
            {
                "text": "きゅこう",
                "explanation": "錯誤：缺少長音，正確讀音是「きゅうこう」。\n中文翻譯：快車"
            },
            {
                "text": "きゅうごう",
                "explanation": "錯誤：「行」的讀音是「こう」，不是「ごう」。\n中文翻譯：快車"
            },
            {
                "text": "きっこう",
                "explanation": "錯誤：發音錯誤。\n中文翻譯：快車"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 539,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "家族",
        "options": [
            {
                "text": "かぞく",
                "explanation": "正確答案：家族（かぞく）意思是家人。\n中文翻譯：家人"
            },
            {
                "text": "かぞ",
                "explanation": "錯誤：缺少「く」，正確讀音是「かぞく」。\n中文翻譯：家人"
            },
            {
                "text": "かぞっく",
                "explanation": "錯誤：多餘的促音，正確讀音是「かぞく」。\n中文翻譯：家人"
            },
            {
                "text": "けぞく",
                "explanation": "錯誤：「家」的讀音是「か」，不是「け」。\n中文翻譯：家人"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 540,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "空港",
        "options": [
            {
                "text": "くうこう",
                "explanation": "正確答案：空港（くうこう）意思是機場。\n中文翻譯：機場"
            },
            {
                "text": "くこう",
                "explanation": "錯誤：缺少長音，正確讀音是「くうこう」。\n中文翻譯：機場"
            },
            {
                "text": "くうごう",
                "explanation": "錯誤：「港」的讀音是「こう」，不是「ごう」。\n中文翻譯：機場"
            },
            {
                "text": "ぐうこう",
                "explanation": "錯誤：「空」的讀音是「くう」，不是「ぐう」。\n中文翻譯：機場"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 541,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "季節",
        "options": [
            {
                "text": "きせつ",
                "explanation": "正確答案：季節（きせつ）意思是季節。\n中文翻譯：季節"
            },
            {
                "text": "きせ",
                "explanation": "錯誤：缺少「つ」，正確讀音是「きせつ」。\n中文翻譯：季節"
            },
            {
                "text": "きぜつ",
                "explanation": "錯誤：「節」的讀音是「せつ」，不是「ぜつ」。\n中文翻譯：季節"
            },
            {
                "text": "きせっ",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：季節"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 542,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "荷物",
        "options": [
            {
                "text": "にもつ",
                "explanation": "正確答案：荷物（にもつ）意思是行李、貨物。\n中文翻譯：行李、貨物"
            },
            {
                "text": "にも",
                "explanation": "錯誤：缺少「つ」，正確讀音是「にもつ」。\n中文翻譯：行李、貨物"
            },
            {
                "text": "にもっ",
                "explanation": "錯誤：多餘的促音，正確讀音是「にもつ」。\n中文翻譯：行李、貨物"
            },
            {
                "text": "かぶつ",
                "explanation": "錯誤：「荷」在這裡不讀「か」。\n中文翻譯：行李、貨物"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 543,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "準備",
        "options": [
            {
                "text": "じゅんび",
                "explanation": "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"
            },
            {
                "text": "しゅんび",
                "explanation": "錯誤：「準」的讀音是「じゅん」，不是「しゅん」。\n中文翻譯：準備"
            },
            {
                "text": "じゅび",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：準備"
            },
            {
                "text": "じゅんぴ",
                "explanation": "錯誤：「備」的讀音是「び」，不是「ぴ」。\n中文翻譯：準備"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 544,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "料理",
        "options": [
            {
                "text": "りょうり",
                "explanation": "正確答案：料理（りょうり）意思是料理、烹飪。\n中文翻譯：料理、烹飪"
            },
            {
                "text": "りょり",
                "explanation": "錯誤：缺少長音，正確讀音是「りょうり」。\n中文翻譯：料理、烹飪"
            },
            {
                "text": "りょるい",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：料理、烹飪"
            },
            {
                "text": "りょおうり",
                "explanation": "錯誤：長音位置錯誤。\n中文翻譯：料理、烹飪"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 545,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "試験",
        "options": [
            {
                "text": "しけん",
                "explanation": "正確答案：試験（しけん）意思是考試。\n中文翻譯：考試"
            },
            {
                "text": "しけんん",
                "explanation": "錯誤：多餘的撥音。\n中文翻譯：考試"
            },
            {
                "text": "しっけん",
                "explanation": "錯誤：多餘的促音。\n中文翻譯：考試"
            },
            {
                "text": "じけん",
                "explanation": "錯誤：濁音錯誤，正確讀音是「しけん」。\n中文翻譯：考試"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 546,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "便利",
        "options": [
            {
                "text": "べんり",
                "explanation": "正確答案：便利（べんり）意思是方便。\n中文翻譯：方便"
            },
            {
                "text": "べに",
                "explanation": "錯誤：缺少撥音，正確讀音是「べんり」。\n中文翻譯：方便"
            },
            {
                "text": "ぺんり",
                "explanation": "錯誤：「便」的讀音是「べん」，不是「ぺん」。\n中文翻譯：方便"
            },
            {
                "text": "べんりい",
                "explanation": "錯誤：多餘長音，正確讀音是「べんり」。\n中文翻譯：方便"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 547,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "説明",
        "options": [
            {
                "text": "せつめい",
                "explanation": "正確答案：説明（せつめい）意思是說明、解釋。\n中文翻譯：說明、解釋"
            },
            {
                "text": "せつめ",
                "explanation": "錯誤：缺少長音，正確讀音是「せつめい」。\n中文翻譯：說明、解釋"
            },
            {
                "text": "せつみょう",
                "explanation": "錯誤：「明」的讀音是「めい」，不是「みょう」。\n中文翻譯：說明、解釋"
            },
            {
                "text": "せっめい",
                "explanation": "錯誤：促音位置錯誤，正確讀音是「せつめい」。\n中文翻譯：說明、解釋"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 548,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "趣味",
        "options": [
            {
                "text": "しゅみ",
                "explanation": "正確答案：趣味（しゅみ）意思是興趣。\n中文翻譯：興趣"
            },
            {
                "text": "しゅんみ",
                "explanation": "錯誤：多餘撥音，正確讀音是「しゅみ」。\n中文翻譯：興趣"
            },
            {
                "text": "しゅうみ",
                "explanation": "錯誤：多餘長音，正確讀音是「しゅみ」。\n中文翻譯：興趣"
            },
            {
                "text": "しゅび",
                "explanation": "錯誤：「味」的讀音是「み」，不是「び」。\n中文翻譯：興趣"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 549,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "経験",
        "options": [
            {
                "text": "けいけん",
                "explanation": "正確答案：経験（けいけん）意思是經驗。\n中文翻譯：經驗"
            },
            {
                "text": "けけん",
                "explanation": "錯誤：缺少長音，正確讀音是「けいけん」。\n中文翻譯：經驗"
            },
            {
                "text": "けいげん",
                "explanation": "錯誤：「験」的讀音是「けん」，不是「げん」。\n中文翻譯：經驗"
            },
            {
                "text": "きょうけん",
                "explanation": "錯誤：「経」的讀音是「けい」，不是「きょう」。\n中文翻譯：經驗"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 550,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "簡単",
        "options": [
            {
                "text": "かんたん",
                "explanation": "正確答案：簡単（かんたん）意思是簡單。\n中文翻譯：簡單"
            },
            {
                "text": "かんだん",
                "explanation": "錯誤：「単」的讀音是「たん」，不是「だん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんた",
                "explanation": "錯誤：缺少撥音，正確讀音是「かんたん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんたあん",
                "explanation": "錯誤：多餘長音，正確讀音是「かんたん」。\n中文翻譯：簡單"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 551,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "受付",
        "options": [
            {
                "text": "うけつけ",
                "explanation": "正確答案：受付（うけつけ）意思是接待處、櫃台。\n中文翻譯：接待處、櫃台"
            },
            {
                "text": "うけつ",
                "explanation": "錯誤：缺少「け」，正確讀音是「うけつけ」。\n中文翻譯：接待處、櫃台"
            },
            {
                "text": "うけっぷ",
                "explanation": "錯誤：促音位置錯誤，正確讀音是「うけつけ」。\n中文翻譯：接待處、櫃台"
            },
            {
                "text": "じゅふ",
                "explanation": "錯誤：這是音讀，但此處為訓讀。\n中文翻譯：接待處、櫃台"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 552,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "留学",
        "options": [
            {
                "text": "りゅうがく",
                "explanation": "正確答案：留学（りゅうがく）意思是留學。\n中文翻譯：留學"
            },
            {
                "text": "りゅうが",
                "explanation": "錯誤：缺少「く」，正確讀音是「りゅうがく」。\n中文翻譯：留學"
            },
            {
                "text": "りゅうかく",
                "explanation": "錯誤：「学」的讀音是「がく」，不是「かく」。\n中文翻譯：留學"
            },
            {
                "text": "りゅがく",
                "explanation": "錯誤：缺少長音，正確讀音是「りゅうがく」。\n中文翻譯：留學"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 553,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "大変",
        "options": [
            {
                "text": "たいへん",
                "explanation": "正確答案：大変（たいへん）意思是糟糕、非常。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "たいへ",
                "explanation": "錯誤：缺少撥音，正確讀音是「たいへん」。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "だいへん",
                "explanation": "錯誤：「大」的讀音是「たい」，不是「だい」。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "たいべん",
                "explanation": "錯誤：「変」的讀音是「へん」，不是「べん」。\n中文翻譯：糟糕、非常"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 554,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "心配",
        "options": [
            {
                "text": "しんぱい",
                "explanation": "正確答案：心配（しんぱい）意思是擔心。\n中文翻譯：擔心"
            },
            {
                "text": "しんぴ",
                "explanation": "錯誤：缺少長音，正確讀音是「しんぱい」。\n中文翻譯：擔心"
            },
            {
                "text": "しんはい",
                "explanation": "錯誤：「配」的讀音是「ぱい」（半濁音化），不是「はい」。\n中文翻譯：擔心"
            },
            {
                "text": "しんぱん",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：擔心"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 555,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "約束",
        "options": [
            {
                "text": "やくそく",
                "explanation": "正確答案：約束（やくそく）意思是約定。\n中文翻譯：約定"
            },
            {
                "text": "やっそく",
                "explanation": "錯誤：多餘的促音，正確讀音是「やくそく」。\n中文翻譯：約定"
            },
            {
                "text": "やくそ",
                "explanation": "錯誤：缺少「く」，正確讀音是「やくそく」。\n中文翻譯：約定"
            },
            {
                "text": "やぐそく",
                "explanation": "錯誤：「約」的讀音是「やく」，不是「やぐ」。\n中文翻譯：約定"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 556,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "走る",
        "options": [
            {
                "text": "はしる",
                "explanation": "正確答案：走る（はしる）意思是跑、奔跑。\n中文翻譯：跑、奔跑"
            },
            {
                "text": "そうる",
                "explanation": "錯誤：這是音讀（「走」的音讀是「そう」或「しゅ」）。\n中文翻譯：跑、奔跑"
            },
            {
                "text": "はる",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：跑、奔跑"
            },
            {
                "text": "はしいる",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：跑、奔跑"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 557,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "話す",
        "options": [
            {
                "text": "はなす",
                "explanation": "正確答案：話す（はなす）意思是說話。\n中文翻譯：說話"
            },
            {
                "text": "わす",
                "explanation": "錯誤：「話」的讀音是「はな」，不是「わ」。\n中文翻譯：說話"
            },
            {
                "text": "はなっす",
                "explanation": "錯誤：多餘的促音。\n中文翻譯：說話"
            },
            {
                "text": "はなしる",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：說話"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 558,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "持っている",
        "options": [
            {
                "text": "もっている",
                "explanation": "正確答案：持っている（もっている）意思是持有、擁有。\n中文翻譯：持有、擁有"
            },
            {
                "text": "じっている",
                "explanation": "錯誤：「持」的讀音是「も」，不是「じ」。\n中文翻譯：持有、擁有"
            },
            {
                "text": "もてっている",
                "explanation": "錯誤：促音位置錯誤。\n中文翻譯：持有、擁有"
            },
            {
                "text": "もっているう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：持有、擁有"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 559,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "高い",
        "options": [
            {
                "text": "たかい",
                "explanation": "正確答案：高い（たかい）意思是高的、貴的。\n中文翻譯：高的、貴的"
            },
            {
                "text": "こうい",
                "explanation": "錯誤：這是音讀，訓讀形容詞讀「たかい」。\n中文翻譯：高的、貴的"
            },
            {
                "text": "たか",
                "explanation": "錯誤：讀音不完整。\n中文翻譯：高的、貴的"
            },
            {
                "text": "だいかい",
                "explanation": "錯誤：濁音錯誤，正確讀音是「たかい」。\n中文翻譯：高的、貴的"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 560,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "新しい",
        "options": [
            {
                "text": "あたらしい",
                "explanation": "正確答案：新しい（あたらしい）意思是新的。\n中文翻譯：新的"
            },
            {
                "text": "しんしい",
                "explanation": "錯誤：這是音讀。\n中文翻譯：新的"
            },
            {
                "text": "あたらし",
                "explanation": "錯誤：缺少長音，正確讀音是「あたらしい」。\n中文翻譯：新的"
            },
            {
                "text": "あらたしい",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：新的"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 561,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "代わり",
        "options": [
            {
                "text": "かわり",
                "explanation": "正確答案：代わり（かわり）意思是代替、交換。\n中文翻譯：代替、交換"
            },
            {
                "text": "だいわ",
                "explanation": "錯誤：這是音讀，且讀音錯誤。\n中文翻譯：代替、交換"
            },
            {
                "text": "かわりい",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：代替、交換"
            },
            {
                "text": "がわり",
                "explanation": "錯誤：濁音錯誤。\n中文翻譯：代替、交換"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 562,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "何時",
        "options": [
            {
                "text": "なんじ",
                "explanation": "正確答案：何時（なんじ）意思是幾點。\n中文翻譯：幾點"
            },
            {
                "text": "なにじ",
                "explanation": "錯誤：不是「なに」，正確讀音是「なんじ」。\n中文翻譯：幾點"
            },
            {
                "text": "なじ",
                "explanation": "錯誤：缺少撥音，正確讀音是「なんじ」。\n中文翻譯：幾點"
            },
            {
                "text": "なんどき",
                "explanation": "錯誤：這是古語的說法。\n中文翻譯：幾點"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 563,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "全部",
        "options": [
            {
                "text": "ぜんぶ",
                "explanation": "正確答案：全部（ぜんぶ）意思是全部。\n中文翻譯：全部"
            },
            {
                "text": "ぜんぷ",
                "explanation": "錯誤：「部」的讀音是「ぶ」，不是「ぷ」。\n中文翻譯：全部"
            },
            {
                "text": "せんぶ",
                "explanation": "錯誤：「全」的讀音是「ぜん」，不是「せん」。\n中文翻譯：全部"
            },
            {
                "text": "ぜんぶう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：全部"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 564,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "普通",
        "options": [
            {
                "text": "ふつう",
                "explanation": "正確答案：普通（ふつう）意思是普通、一般、平時。\n中文翻譯：普通、一般、平時"
            },
            {
                "text": "ふつ",
                "explanation": "錯誤：缺少長音，正確讀音是「ふつう」。\n中文翻譯：普通、一般、平時"
            },
            {
                "text": "ふつうう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：普通、一般、平時"
            },
            {
                "text": "ぷつう",
                "explanation": "錯誤：半濁音錯誤。\n中文翻譯：普通、一般、平時"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 565,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "安全",
        "options": [
            {
                "text": "あんぜん",
                "explanation": "正確答案：安全（あんぜん）意思是安全。\n中文翻譯：安全"
            },
            {
                "text": "あんせん",
                "explanation": "錯誤：「全」的讀音是「ぜん」，不是「せん」。\n中文翻譯：安全"
            },
            {
                "text": "あんぜ",
                "explanation": "錯誤：缺少撥音，正確讀音是「あんぜん」。\n中文翻譯：安全"
            },
            {
                "text": "あんでん",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：安全"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 566,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "便利",
        "options": [
            {
                "text": "べんり",
                "explanation": "正確答案：便利（べんり）意思是方便。\n中文翻譯：方便"
            },
            {
                "text": "へんり",
                "explanation": "錯誤：濁音錯誤。\n中文翻譯：方便"
            },
            {
                "text": "べに",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：方便"
            },
            {
                "text": "べんりい",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：方便"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 567,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "簡単",
        "options": [
            {
                "text": "かんたん",
                "explanation": "正確答案：簡単（かんたん）意思是簡單。\n中文翻譯：簡單"
            },
            {
                "text": "かんだん",
                "explanation": "錯誤：「単」的讀音是「たん」，不是「だん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんた",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：簡單"
            },
            {
                "text": "かんたんん",
                "explanation": "錯誤：多餘的撥音。\n中文翻譯：簡單"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 568,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "大変",
        "options": [
            {
                "text": "たいへん",
                "explanation": "正確答案：大変（たいへん）意思是糟糕、非常。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "たいへ",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "だいへん",
                "explanation": "錯誤：「大」的讀音是「たい」，不是「だい」。\n中文翻譯：糟糕、非常"
            },
            {
                "text": "たいべん",
                "explanation": "錯誤：「変」的讀音是「へん」，不是「べん」。\n中文翻譯：糟糕、非常"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 569,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "理由",
        "options": [
            {
                "text": "りゆう",
                "explanation": "正確答案：理由（りゆう）意思是理由、原因。\n中文翻譯：理由"
            },
            {
                "text": "りよう",
                "explanation": "錯誤：これは「利用（りよう）」の読み方です。\n中文翻譯：理由"
            },
            {
                "text": "りゅ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：理由"
            },
            {
                "text": "りゅう",
                "explanation": "錯誤：拗音錯誤。\n中文翻譯：理由"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 570,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "意味",
        "options": [
            {
                "text": "いみ",
                "explanation": "正確答案：意味（いみ）意思是意思、含義。\n中文翻譯：意思、含義"
            },
            {
                "text": "いいみ",
                "explanation": "錯誤：多餘長音。\n中文翻譯：意思、含義"
            },
            {
                "text": "いみい",
                "explanation": "錯誤：多餘長音。\n中文翻譯：意思、含義"
            },
            {
                "text": "ゆみ",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：意思、含義"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 571,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "必要",
        "options": [
            {
                "text": "ひつよう",
                "explanation": "正確答案：必要（ひつよう）意思是必要。\n中文翻譯：必要"
            },
            {
                "text": "ひつよ",
                "explanation": "錯誤：缺少長音，正確讀音是「ひつよう」。\n中文翻譯：必要"
            },
            {
                "text": "ひっよう",
                "explanation": "錯誤：促音位置錯誤，正確讀音是「ひつよう」。\n中文翻譯：必要"
            },
            {
                "text": "ひつゆ",
                "explanation": "錯誤：長音和拗音錯誤。\n中文翻譯：必要"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 572,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "将来",
        "options": [
            {
                "text": "しょうらい",
                "explanation": "正確答案：将来（しょうらい）意思是將來、未來。\n中文翻譯：將來、未來"
            },
            {
                "text": "しょらい",
                "explanation": "錯誤：缺少長音，正確讀音是「しょうらい」。\n中文翻譯：將來、未來"
            },
            {
                "text": "しょうだい",
                "explanation": "錯誤：「来」的讀音是「らい」，不是「だい」。\n中文翻譯：將來、未來"
            },
            {
                "text": "しょうらいり",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：將來、未來"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 573,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "都合",
        "options": [
            {
                "text": "つごう",
                "explanation": "正確答案：都合（つごう）意思是方便、情況。\n中文翻譯：方便、情況"
            },
            {
                "text": "つこう",
                "explanation": "錯誤：「合」的讀音是「ごう」，不是「こう」。\n中文翻譯：方便、情況"
            },
            {
                "text": "つご",
                "explanation": "錯誤：缺少長音，正確讀音是「つごう」。\n中文翻譯：方便、情況"
            },
            {
                "text": "づごう",
                "explanation": "錯誤：「都」的讀音是「つ」，不是「づ」。\n中文翻譯：方便、情況"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 574,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "意見",
        "options": [
            {
                "text": "いけん",
                "explanation": "正確答案：意見（いけん）意思是意見。\n中文翻譯：意見"
            },
            {
                "text": "いげん",
                "explanation": "錯誤：「見」的讀音是「けん」，不是「げん」。\n中文翻譯：意見"
            },
            {
                "text": "いきん",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：意見"
            },
            {
                "text": "いけんん",
                "explanation": "錯誤：多餘的撥音。\n中文翻譯：意見"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 575,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "準備",
        "options": [
            {
                "text": "じゅんび",
                "explanation": "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"
            },
            {
                "text": "しゅんび",
                "explanation": "錯誤：濁音錯誤。\n中文翻譯：準備"
            },
            {
                "text": "じゅび",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：準備"
            },
            {
                "text": "じゅんぴ",
                "explanation": "錯誤：半濁音錯誤。\n中文翻譯：準備"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 576,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "簡単",
        "options": [
            {
                "text": "かんたん",
                "explanation": "正確答案：簡単（かんたん）意思是簡單。\n中文翻譯：簡單"
            },
            {
                "text": "かんだん",
                "explanation": "錯誤：「単」的讀音是「たん」，不是「だん」。\n中文翻譯：簡單"
            },
            {
                "text": "かんた",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：簡單"
            },
            {
                "text": "かんたんん",
                "explanation": "錯誤：多餘的撥音。\n中文翻譯：簡單"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 577,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "経験",
        "options": [
            {
                "text": "けいけん",
                "explanation": "正確答案：経験（けいけん）意思是經驗。\n中文翻譯：經驗"
            },
            {
                "text": "けけん",
                "explanation": "錯誤：缺少長音。\n中文翻譯：經驗"
            },
            {
                "text": "けいげん",
                "explanation": "錯誤：「験」的讀音是「けん」，不是「げん」。\n中文翻譯：經驗"
            },
            {
                "text": "きょうけん",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：經驗"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 578,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "大切",
        "options": [
            {
                "text": "たいせつ",
                "explanation": "正確答案：大切（たいせつ）意思是重要。\n中文翻譯：重要"
            },
            {
                "text": "だいせつ",
                "explanation": "錯誤：「大」的讀音是「たい」，不是「だい」。\n中文翻譯：重要"
            },
            {
                "text": "たいせ",
                "explanation": "錯誤：缺少「つ」。\n中文翻譯：重要"
            },
            {
                "text": "おおせつ",
                "explanation": "錯誤：訓讀錯誤。\n中文翻譯：重要"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 579,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "写真",
        "options": [
            {
                "text": "しゃしん",
                "explanation": "正確答案：写真（しゃしん）意思是照片。\n中文翻譯：照片"
            },
            {
                "text": "さしん",
                "explanation": "錯誤：缺少拗音。\n中文翻譯：照片"
            },
            {
                "text": "しゃし",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：照片"
            },
            {
                "text": "ざしん",
                "explanation": "錯誤：濁音錯誤。\n中文翻譯：照片"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 580,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "旅行",
        "options": [
            {
                "text": "りょこう",
                "explanation": "正確答案：旅行（りょこう）意思是旅行。\n中文翻譯：旅行"
            },
            {
                "text": "りょうこう",
                "explanation": "錯誤：「旅」的讀音是「りょ」，不是「りょう」。\n中文翻譯：旅行"
            },
            {
                "text": "りょこ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：旅行"
            },
            {
                "text": "りこう",
                "explanation": "錯誤：缺少拗音。\n中文翻譯：旅行"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 581,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "掃除",
        "options": [
            {
                "text": "そうじ",
                "explanation": "正確答案：掃除（そうじ）意思是打掃。\n中文翻譯：打掃"
            },
            {
                "text": "そうち",
                "explanation": "錯誤：「除」的讀音是「じ」，不是「ち」。\n中文翻譯：打掃"
            },
            {
                "text": "そじ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：打掃"
            },
            {
                "text": "そうじい",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：打掃"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 582,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "家族",
        "options": [
            {
                "text": "かぞく",
                "explanation": "正確答案：家族（かぞく）意思是家人。\n中文翻譯：家人"
            },
            {
                "text": "かぞくう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：家人"
            },
            {
                "text": "かぞ",
                "explanation": "錯誤：缺少「く」。\n中文翻譯：家人"
            },
            {
                "text": "けぞく",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：家人"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 583,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "質問",
        "options": [
            {
                "text": "しつもん",
                "explanation": "正確答案：質問（しつもん）意思是問題。\n中文翻譯：問題"
            },
            {
                "text": "しちもん",
                "explanation": "錯誤：「質」的讀音是「しつ」，不是「しち」。\n中文翻譯：問題"
            },
            {
                "text": "しつも",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：問題"
            },
            {
                "text": "しつもう",
                "explanation": "錯誤：「問」的讀音是「もん」，不是「もう」。\n中文翻譯：問題"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 584,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "電気",
        "options": [
            {
                "text": "でんき",
                "explanation": "正確答案：電気（でんき）意思是電。\n中文翻譯：電"
            },
            {
                "text": "てんき",
                "explanation": "錯誤：「電」的讀音是「でん」，不是「てん」。\n中文翻譯：電"
            },
            {
                "text": "でんけ",
                "explanation": "錯誤：「気」的讀音是「き」，不是「け」。\n中文翻譯：電"
            },
            {
                "text": "でんぎ",
                "explanation": "錯誤：「気」的讀音是「き」，不是「ぎ」。\n中文翻譯：電"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 585,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "住所",
        "options": [
            {
                "text": "じゅうしょ",
                "explanation": "正確答案：住所（じゅうしょ）意思是地址。\n中文翻譯：地址"
            },
            {
                "text": "じゅしょ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：地址"
            },
            {
                "text": "じゅうしょう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：地址"
            },
            {
                "text": "じゅしょう",
                "explanation": "錯誤：讀音錯誤。\n中文翻譯：地址"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 586,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "建物",
        "options": [
            {
                "text": "たてもの",
                "explanation": "正確答案：建物（たてもの）意思是建築物。\n中文翻譯：建築物"
            },
            {
                "text": "けんもの",
                "explanation": "錯誤：「建」的讀音是「たて」，不是「けん」。\n中文翻譯：建築物"
            },
            {
                "text": "たてぶつ",
                "explanation": "錯誤：「物」的讀音是「もの」，不是「ぶつ」。\n中文翻譯：建築物"
            },
            {
                "text": "けんぶつ",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：建築物"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 587,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "地下鉄",
        "options": [
            {
                "text": "ちかてつ",
                "explanation": "正確答案：地下鉄（ちかてつ）意思是地下鐵。\n中文翻譯：地下鐵"
            },
            {
                "text": "じかてつ",
                "explanation": "錯誤：「地」的讀音是「ち」，不是「じ」。\n中文翻譯：地下鐵"
            },
            {
                "text": "ちかでつ",
                "explanation": "錯誤：「鉄」的讀音是「てつ」，不是「でつ」。\n中文翻譯：地下鐵"
            },
            {
                "text": "じがてつ",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：地下鐵"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 588,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "公園",
        "options": [
            {
                "text": "こうえん",
                "explanation": "正確答案：公園（こうえん）意思是公園。\n中文翻譯：公園"
            },
            {
                "text": "こえん",
                "explanation": "錯誤：缺少長音。\n中文翻譯：公園"
            },
            {
                "text": "こうえい",
                "explanation": "錯誤：「園」的讀音是「えん」，不是「えい」。\n中文翻譯：公園"
            },
            {
                "text": "こえい",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：公園"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 589,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "運転",
        "options": [
            {
                "text": "うんてん",
                "explanation": "正確答案：運転（うんてん）意思是駕駛。\n中文翻譯：駕駛"
            },
            {
                "text": "うんでん",
                "explanation": "錯誤：「転」的讀音是「てん」，不是「でん」。\n中文翻譯：駕駛"
            },
            {
                "text": "うんて",
                "explanation": "錯誤：缺少撥音。\n中文翻譯：駕駛"
            },
            {
                "text": "うんで",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：駕駛"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 590,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "卒業",
        "options": [
            {
                "text": "そつぎょう",
                "explanation": "正確答案：卒業（そつぎょう）意思是畢業。\n中文翻譯：畢業"
            },
            {
                "text": "そつぎょ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：畢業"
            },
            {
                "text": "そつぎよう",
                "explanation": "錯誤：長音表示錯誤。\n中文翻譯：畢業"
            },
            {
                "text": "そちぎょう",
                "explanation": "錯誤：「卒」的讀音是「そつ」，不是「そち」。\n中文翻譯：畢業"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 591,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "練習",
        "options": [
            {
                "text": "れんしゅう",
                "explanation": "正確答案：練習（れんしゅう）意思是練習。\n中文翻譯：練習"
            },
            {
                "text": "れんしゅ",
                "explanation": "錯誤：缺少長音。\n中文翻譯：練習"
            },
            {
                "text": "れんじゅう",
                "explanation": "錯誤：「習」的讀音是「しゅう」，不是「じゅう」。\n中文翻譯：練習"
            },
            {
                "text": "れんしゅうう",
                "explanation": "錯誤：多餘的長音。\n中文翻譯：練習"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 592,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "紹介",
        "options": [
            {
                "text": "しょうかい",
                "explanation": "正確答案：紹介（しょうかい）意思是介紹。\n中文翻譯：介紹"
            },
            {
                "text": "しょうがい",
                "explanation": "錯誤：「介」的讀音是「かい」，不是「がい」。\n中文翻譯：介紹"
            },
            {
                "text": "しょかい",
                "explanation": "錯誤：缺少長音。\n中文翻譯：介紹"
            },
            {
                "text": "しょがい",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：介紹"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 593,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "配達",
        "options": [
            {
                "text": "はいたつ",
                "explanation": "正確答案：配達（はいたつ）意思是配送、送貨。\n中文翻譯：配送、送貨"
            },
            {
                "text": "はいだつ",
                "explanation": "錯誤：「達」的讀音是「たつ」，不是「だつ」。\n中文翻譯：配送、送貨"
            },
            {
                "text": "はいたち",
                "explanation": "錯誤：「達」的讀音是「たつ」，不是「たち」。\n中文翻譯：配送、送貨"
            },
            {
                "text": "はいた",
                "explanation": "錯誤：缺少「つ」。\n中文翻譯：配送、送貨"
            }
        ],
        "correctAnswer": 0
    },
    {
        "id": 594,
        "type": "reading",
        "question": "次の漢字の読み方を選びなさい",
        "kanji": "取消",
        "options": [
            {
                "text": "とりけし",
                "explanation": "正確答案：取消（とりけし）意思是取消。\n中文翻譯：取消"
            },
            {
                "text": "とりきし",
                "explanation": "錯誤：「消」的讀音是「けし」，不是「きし」。\n中文翻譯：取消"
            },
            {
                "text": "とりけ",
                "explanation": "錯誤：缺少「し」。\n中文翻譯：取消"
            },
            {
                "text": "とりしょう",
                "explanation": "錯誤：讀音完全錯誤。\n中文翻譯：取消"
            }
        ],
        "correctAnswer": 0
    }
];  // ← 這是 readingQuestions 陣列的結束