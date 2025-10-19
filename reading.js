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
        {text: "ざんねん", explanation: "錯誤：與正確答案相同，但排版不同。\n中文翻譯：遺憾、可惜"}
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
        {text: "かね", explanation: "錯誤：かね（金）意思是錢，但通常用假名。\n中文翻譯：金錢、黃金"},
        {text: "ぎん", explanation: "錯誤：ぎん（銀）意思是銀。\n中文翻譯：金錢、黃金"},
        {text: "こがね", explanation: "錯誤：こがね（黄金）意思是黃金，但較少用。\n中文翻譯：金錢、黃金"}
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
    kanji: "川",
    options: [
        {text: "かわ", explanation: "正確答案：川（かわ）意思是河流。\n中文翻譯：河流"},
        {text: "がわ", explanation: "錯誤：濁音錯誤。\n中文翻譯：河流"},
        {text: "せん", explanation: "錯誤：這是音讀。\n中文翻譯：河流"},
        {text: "かん", explanation: "錯誤：讀音錯誤。\n中文翻譯：河流"}
    ],
    correctAnswer: 0
},
{
    id: 317,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "駐車場",
    options: [
        {text: "ちゅうしゃじょう", explanation: "正確答案：駐車場（ちゅうしゃじょう）意思是停車場。\n中文翻譯：停車場"},
        {text: "ちゅうしゃば", explanation: "錯誤：「場」的讀音錯誤。\n中文翻譯：停車場"},
        {text: "ちゅうくるまじょう", explanation: "錯誤：讀音不存在。\n中文翻譯：停車場"},
        {text: "とめしゃじょう", explanation: "錯誤：讀音不存在。\n中文翻譯：停車場"}
    ],
    correctAnswer: 0
},
{
    id: 318,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "準備",
    options: [
        {text: "じゅんび", explanation: "正確答案：準備（じゅんび）意思是準備。\n中文翻譯：準備"},
        {text: "じゅび", explanation: "錯誤：缺少撥音。\n中文翻譯：準備"},
        {text: "じゅうび", explanation: "錯誤：讀音不存在。\n中文翻譯：準備"},
        {text: "じゅんぴ", explanation: "錯誤：「備」的讀音錯誤。\n中文翻譯：準備"}
    ],
    correctAnswer: 0
},
{
    id: 319,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "旅行",
    options: [
        {text: "りょこう", explanation: "正確答案：旅行（りょこう）意思是旅行。\n中文翻譯：旅行"},
        {text: "りょうこう", explanation: "錯誤：「旅」的讀音錯誤。\n中文翻譯：旅行"},
        {text: "りょこ", explanation: "錯誤：缺少長音。\n中文翻譯：旅行"},
        {text: "りこう", explanation: "錯誤：「旅」的讀音錯誤。\n中文翻譯：旅行"}
    ],
    correctAnswer: 0
},
{
    id: 320,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "質問",
    options: [
        {text: "しつもん", explanation: "正確答案：質問（しつもん）意思是問題。\n中文翻譯：問題"},
        {text: "しちもん", explanation: "錯誤：「質」的讀音錯誤。\n中文翻譯：問題"},
        {text: "しつも", explanation: "錯誤：缺少撥音。\n中文翻譯：問題"},
        {text: "しつもう", explanation: "錯誤：「問」的讀音錯誤。\n中文翻譯：問題"}
    ],
    correctAnswer: 0
},
{
    id: 321,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "掃除",
    options: [
        {text: "そうじ", explanation: "正確答案：掃除（そうじ）意思是打掃。\n中文翻譯：打掃"},
        {text: "そうじい", explanation: "錯誤：多餘長音。\n中文翻譯：打掃"},
        {text: "そじ", explanation: "錯誤：缺少長音。\n中文翻譯：打掃"},
        {text: "そうち", explanation: "錯誤：「除」的讀音錯誤。\n中文翻譯：打掃"}
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
            {text: "しゅうこう", explanation: "錯誤：「合」的讀音是「ごう」，不是「こう」。\n中文翻譯：集合、聚集"},
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
    }
];  // ← 這是 readingQuestions 陣列的結束