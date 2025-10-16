// 日文N4測驗題庫
window.questionBank = [
    // 第1-10題
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
    id: 3,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "でんわ",
    options: [
        {text: "電話", explanation: "正確答案：でんわ的漢字是「電話」，意思是電話。\n中文翻譯：電話"},
        {text: "電和", explanation: "錯誤：「和」讀音是「わ」但意思不對，正確漢字是「話」。\n中文翻譯：電話"},
        {text: "伝話", explanation: "錯誤：「伝」讀音是「でん」但意思不對，正確漢字是「電」。\n中文翻譯：電話"},
        {text: "電化", explanation: "錯誤：「電化」讀音是「でんか」，意思也不對。\n中文翻譯：電話"}
    ],
    correctAnswer: 0
},
{
    id: 4,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "としょかん",
    options: [
        {text: "図書館", explanation: "正確答案：としょかん的漢字是「図書館」，意思是圖書館。\n中文翻譯：圖書館"},
        {text: "図書舘", explanation: "錯誤：「舘」是舊字體，現代日文使用「館」。\n中文翻譯：圖書館"},
        {text: "図書官", explanation: "錯誤：「官」讀音是「かん」但意思不對，正確漢字是「館」。\n中文翻譯：圖書館"},
        {text: "図書管", explanation: "錯誤：「管」讀音是「かん」但意思不對，正確漢字是「館」。\n中文翻譯：圖書館"}
    ],
    correctAnswer: 0
},
{
    id: 5,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは （ ） ので、よく つかっています。",
    options: [
        {text: "べんりな", explanation: "正確答案：句意：這個包包很方便，所以經常使用。\n中文翻譯：這個包包因為很方便，所以經常使用。"},
        {text: "ふべんな", explanation: "錯誤：ふべん（不便）意思是不方便，與句意相反。\n中文翻譯：這個包包因為不方便，所以經常使用（語意矛盾）"},
        {text: "げんきな", explanation: "錯誤：げんき（元気）意思是健康、有精神，不適用於描述包包。\n中文翻譯：這個包包因為很有精神，所以經常使用（語意不當）"},
        {text: "しずかな", explanation: "錯誤：しずか（静か）意思是安靜的，不適用於描述包包的便利性。\n中文翻譯：這個包包因為很安靜，所以經常使用（語意不當）"}
    ],
    correctAnswer: 0
},
{
    id: 6,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "きょうは とても （ ）から、コートを きています。",
    options: [
        {text: "さむい", explanation: "正確答案：句意：今天很冷，所以穿著外套。\n中文翻譯：因為今天很冷，所以穿著外套。"},
        {text: "あつい", explanation: "錯誤：あつい（暑い）意思是熱的，與句意相反。\n中文翻譯：因為今天很熱，所以穿著外套（語意矛盾）。"},
        {text: "あたたかい", explanation: "錯誤：あたたかい（暖かい）意思是溫暖的，與句意不符。\n中文翻譯：因為今天很溫暖，所以穿著外套（語意矛盾）。"},
        {text: "すずしい", explanation: "錯誤：すずしい（涼しい）意思是涼爽的，與句意不符。\n中文翻譯：因為今天很涼爽，所以穿著外套（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 7,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この ほんは おもしろいです。",
    options: [
        {text: "この ほんは たのしいです。", explanation: "正確答案：「おもしろい」和「たのしい」在表示有趣時意思相近。\n中文翻譯：這本書很有趣。"},
        {text: "この ほんは むずかしいです。", explanation: "錯誤：むずかしい（難しい）意思是困難的，與原句意思不同。\n中文翻譯：這本書很難。"},
        {text: "この ほんは やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與原句意思不同。\n中文翻譯：這本書很便宜。"},
        {text: "この ほんは ふるいです。", explanation: "錯誤：ふるい（古い）意思是舊的，與原句意思不同。\n中文翻譯：這本書很舊。"}
    ],
    correctAnswer: 0
},
{
    id: 8,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは まいあさ ７じ（ ） おきます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我每天早上7點起床（「に」表示具體時間點）。\n中文翻譯：我每天早上7點起床。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於時間。\n中文翻譯：我每天早上7點起床（助詞使用錯誤）。"},
        {text: "へ", explanation: "錯誤：「へ」表示方向，不用於時間。\n中文翻譯：我每天早上7點起床（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，不用於時間。\n中文翻譯：我每天早上7點起床（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 9,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは （ ） おいしいです。",
    options: [
        {text: "あかい", explanation: "正確答案：句意：這個蘋果紅又好吃（形容詞直接修飾名詞）。\n中文翻譯：這個紅蘋果很好吃。"},
        {text: "あかくて", explanation: "錯誤：這裡不需要て形連接，直接使用形容詞修飾名詞即可。\n中文翻譯：這個蘋果紅又好吃（文法錯誤）。"},
        {text: "あかく", explanation: "錯誤：形容詞的く形不能用於修飾名詞。\n中文翻譯：這個蘋果紅又好吃（文法錯誤）。"},
        {text: "あかいに", explanation: "錯誤：這個形式不存在。\n中文翻譯：這個蘋果紅又好吃（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 10,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "きのう ★  えいがを みました。",
    options: [
        {text: "ともだちと", explanation: "正確答案：正確句子：きのうともだちとえいがをみました。\n中文翻譯：昨天和朋友看了電影。"},
        {text: "えいがを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "みました", explanation: "錯誤：缺少與「きのう」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "きのうは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 21,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しんぶん",
    options: [
        {text: "新聞", explanation: "正確答案：しんぶん的漢字是「新聞」，意思是報紙。\n中文翻譯：報紙"},
        {text: "新文", explanation: "錯誤：「文」讀音是「ぶん」但意思不對，正確漢字是「聞」。\n中文翻譯：報紙"},
        {text: "親聞", explanation: "錯誤：「親」讀音是「しん」但意思不對，正確漢字是「新」。\n中文翻譯：報紙"},
        {text: "神文", explanation: "錯誤：「神」讀音是「しん」但意思不對，正確漢字是「新」。\n中文翻譯：報紙"}
    ],
    correctAnswer: 0
},
{
    id: 22,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ゆうびんきょく",
    options: [
        {text: "郵便局", explanation: "正確答案：ゆうびんきょく的漢字是「郵便局」，意思是郵局。\n中文翻譯：郵局"},
        {text: "優便局", explanation: "錯誤：「優」讀音是「ゆう」但意思不對，正確漢字是「郵」。\n中文翻譯：郵局"},
        {text: "友便局", explanation: "錯誤：「友」讀音是「ゆう」但意思不對，正確漢字是「郵」。\n中文翻譯：郵局"},
        {text: "郵弁局", explanation: "錯誤：「弁」讀音是「べん」但意思不對，正確漢字是「便」。\n中文翻譯：郵局"}
    ],
    correctAnswer: 0
},
{
    id: 23,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きょうしつ",
    options: [
        {text: "教室", explanation: "正確答案：きょうしつの漢字是「教室」，意思是教室。\n中文翻譯：教室"},
        {text: "教空", explanation: "錯誤：「空」讀音是「くう」但意思不對，正確漢字是「室」。\n中文翻譯：教室"},
        {text: "強室", explanation: "錯誤：「強」讀音是「きょう」但意思不對，正確漢字是「教」。\n中文翻譯：教室"},
        {text: "京室", explanation: "錯誤：「京」讀音是「きょう」但意思不對，正確漢字是「教」。\n中文翻譯：教室"}
    ],
    correctAnswer: 0
},
{
    id: 24,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けんきゅう",
    options: [
        {text: "研究", explanation: "正確答案：けんきゅうの漢字是「研究」，意思是研究。\n中文翻譯：研究"},
        {text: "研求", explanation: "錯誤：「求」讀音是「きゅう」但意思不對，正確漢字是「究」。\n中文翻譯：研究"},
        {text: "検究", explanation: "錯誤：「検」讀音是「けん」但意思不對，正確漢字是「研」。\n中文翻譯：研究"},
        {text: "研急", explanation: "錯誤：「急」讀音是「きゅう」但意思不對，正確漢字是「究」。\n中文翻譯：研究"}
    ],
    correctAnswer: 0
},
{
    id: 25,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅうり",
    options: [
        {text: "修理", explanation: "正確答案：しゅうりの漢字是「修理」，意思是修理。\n中文翻譯：修理"},
        {text: "修利", explanation: "錯誤：「利」讀音是「り」但意思不對，正確漢字是「理」。\n中文翻譯：修理"},
        {text: "周理", explanation: "錯誤：「周」讀音是「しゅう」但意思不對，正確漢字是「修」。\n中文翻譯：修理"},
        {text: "収理", explanation: "錯誤：「収」讀音是「しゅう」但意思不對，正確漢字是「修」。\n中文翻譯：修理"}
    ],
    correctAnswer: 0
},
{
    id: 26,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "せんたく",
    options: [
        {text: "洗濯", explanation: "正確答案：せんたくの漢字是「洗濯」，意思是洗衣服。\n中文翻譯：洗衣服"},
        {text: "選択", explanation: "錯誤：「選択」讀音是「せんたく」但意思是選擇，不是洗衣服。\n中文翻譯：選擇"},
        {text: "洗宅", explanation: "錯誤：「宅」讀音是「たく」但意思不對，正確漢字是「濯」。\n中文翻譯：洗衣服"},
        {text: "泉濯", explanation: "錯誤：「泉」讀音是「せん」但意思不對，正確漢字是「洗」。\n中文翻譯：洗衣服"}
    ],
    correctAnswer: 0
},
{
    id: 27,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "やちん",
    options: [
        {text: "家賃", explanation: "正確答案：やちんの漢字是「家賃」，意思是房租。\n中文翻譯：房租"},
        {text: "家貸", explanation: "錯誤：「貸」讀音是「たい」但意思不對，正確漢字是「賃」。\n中文翻譯：房租"},
        {text: "屋賃", explanation: "錯誤：「屋」讀音是「や」但意思不對，正確漢字是「家」。\n中文翻譯：房租"},
        {text: "家朕", explanation: "錯誤：「朕」讀音是「ちん」但意思不對，正確漢字是「賃」。\n中文翻譯：房租"}
    ],
    correctAnswer: 0
},
{
    id: 28,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きねん",
    options: [
        {text: "記念", explanation: "正確答案：きねんの漢字是「記念」，意思是紀念。\n中文翻譯：紀念"},
        {text: "祈念", explanation: "錯誤：「祈念」讀音是「きねん」但意思是祈禱，與紀念不同。\n中文翻譯：祈禱"},
        {text: "既念", explanation: "錯誤：這個詞不存在。\n中文翻譯：紀念"},
        {text: "貴念", explanation: "錯誤：這個詞不存在。\n中文翻譯：紀念"}
    ],
    correctAnswer: 0
},
{
    id: 29,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きもの",
    options: [
        {text: "着物", explanation: "正確答案：きものの漢字是「着物」，意思是和服。\n中文翻譯：和服"},
        {text: "着者", explanation: "錯誤：「者」讀音是「もの」但意思不對，正確漢字是「物」。\n中文翻譯：和服"},
        {text: "來物", explanation: "錯誤：「來」是舊字體，正確漢字是「着」。\n中文翻譯：和服"},
        {text: "着品", explanation: "錯誤：「品」讀音是「ひん」但意思不對，正確漢字是「物」。\n中文翻譯：和服"}
    ],
    correctAnswer: 0
},
{
    id: 30,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "かいしゃ",
    options: [
        {text: "会社", explanation: "正確答案：かいしゃの漢字是「会社」，意思是公司。\n中文翻譯：公司"},
        {text: "會社", explanation: "錯誤：「會」是舊字體，現代日文使用「会」。\n中文翻譯：公司"},
        {text: "回社", explanation: "錯誤：「回」讀音是「かい」但意思不對，正確漢字是「会」。\n中文翻譯：公司"},
        {text: "開社", explanation: "錯誤：「開」讀音是「かい」但意思不對，正確漢字是「会」。\n中文翻譯：公司"}
    ],
    correctAnswer: 0
},
{
    id: 31,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは （ ） あまいです。",
    options: [
        {text: "あかくて", explanation: "正確答案：句意：這個蘋果紅又甜（形容詞て形表示並列）。\n中文翻譯：這個蘋果紅又甜。"},
        {text: "あかいに", explanation: "錯誤：形容詞不能直接接「に」表示並列。\n中文翻譯：這個蘋果紅又甜（文法錯誤）。"},
        {text: "あかかった", explanation: "錯誤：這是過去形，與現在時態不符。\n中文翻譯：這個蘋果紅又甜（文法錯誤）。"},
        {text: "あかいく", explanation: "錯誤：這個形式不存在。\n中文翻譯：這個蘋果紅又甜（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 32,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "きょうしつは （ ） から、まどを あけて ください。",
    options: [
        {text: "あつい", explanation: "正確答案：句意：教室很熱，請打開窗戶。\n中文翻譯：因為教室很熱，請打開窗戶。"},
        {text: "さむい", explanation: "錯誤：さむい（寒い）意思是冷的，與開窗的邏輯不符。\n中文翻譯：因為教室很冷，請打開窗戶（語意矛盾）。"},
        {text: "くらい", explanation: "錯誤：くらい（暗い）意思是暗的，與開窗的邏輯不符。\n中文翻譯：因為教室很暗，請打開窗戶（語意矛盾）。"},
        {text: "せまい", explanation: "錯誤：せまい（狭い）意思是狹窄的，與開窗的邏輯不符。\n中文翻譯：因為教室很窄，請打開窗戶（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 33,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この にもつは （ ） から、ひとりで もてません。",
    options: [
        {text: "おもい", explanation: "正確答案：句意：這個行李很重，一個人拿不動。\n中文翻譯：因為這個行李很重，一個人拿不動。"},
        {text: "かるい", explanation: "錯誤：かるい（軽い）意思是輕的，與句意相反。\n中文翻譯：因為這個行李很輕，一個人拿不動（語意矛盾）。"},
        {text: "ちいさい", explanation: "錯誤：ちいさい（小さい）意思是小的，與重量無關。\n中文翻譯：因為這個行李很小，一個人拿不動（語意矛盾）。"},
        {text: "やすい", explanation: "錯誤：やすい（安い）意思是便宜的，與重量無關。\n中文翻譯：因為這個行李很便宜，一個人拿不動（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 34,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "あの レストランは （ ） から、いつも こんでいます。",
    options: [
        {text: "おいしい", explanation: "正確答案：句意：那家餐廳很好吃，所以總是很擁擠。\n中文翻譯：因為那家餐廳很好吃，所以總是很擁擠。"},
        {text: "まずい", explanation: "錯誤：まずい（不味い）意思是難吃的，與擁擠的邏輯不符。\n中文翻譯：因為那家餐廳很難吃，所以總是很擁擠（語意矛盾）。"},
        {text: "たかい", explanation: "錯誤：たかい（高い）意思是貴的，不一定導致擁擠。\n中文翻譯：因為那家餐廳很貴，所以總是很擁擠（語意矛盾）。"},
        {text: "やすい", explanation: "錯誤：やすい（安い）意思是便宜的，不一定導致擁擠。\n中文翻譯：因為那家餐廳很便宜，所以總是很擁擠（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 35,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この くすりは （ ） から、のむのが たいへんです。",
    options: [
        {text: "にがい", explanation: "正確答案：句意：這個藥很苦，所以很難喝。\n中文翻譯：因為這個藥很苦，所以很難喝。"},
        {text: "あまい", explanation: "錯誤：あまい（甘い）意思是甜的，與難喝不符。\n中文翻譯：因為這個藥很甜，所以很難喝（語意矛盾）。"},
        {text: "からい", explanation: "錯誤：からい（辛い）意思是辣的，通常不用來形容藥。\n中文翻譯：因為這個藥很辣，所以很難喝（語意矛盾）。"},
        {text: "しょっぱい", explanation: "錯誤：しょっぱい（鹹い）意思是鹹的，通常不用來形容藥。\n中文翻譯：因為這個藥很鹹，所以很難喝（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 36,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは （ ） ので、よく つかっています。",
    options: [
        {text: "べんりな", explanation: "正確答案：句意：這個包包很方便，所以經常使用。\n中文翻譯：這個包包因為很方便，所以經常使用。"},
        {text: "ふべんな", explanation: "錯誤：ふべん（不便）意思是不方便，與句意相反。\n中文翻譯：這個包包因為不方便，所以經常使用（語意矛盾）。"},
        {text: "たかい", explanation: "錯誤：たかい（高い）意思是貴的，不一定會經常使用。\n中文翻譯：這個包包因為很貴，所以經常使用（語意矛盾）。"},
        {text: "おもい", explanation: "錯誤：おもい（重い）意思是重的，不一定會經常使用。\n中文翻譯：這個包包因為很重，所以經常使用（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 37,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "あの たてものは （ ） ので、みえやすいです。",
    options: [
        {text: "たかい", explanation: "正確答案：句意：那棟建築物很高，所以很容易看到。\n中文翻譯：那棟建築物因為很高，所以很容易看到。"},
        {text: "ひくい", explanation: "錯誤：ひくい（低い）意思是低的，與容易看到不符。\n中文翻譯：那棟建築物因為很低，所以很容易看到（語意矛盾）。"},
        {text: "ふるい", explanation: "錯誤：ふるい（古い）意思是舊的，與容易看到無關。\n中文翻譯：那棟建築物因為很舊，所以很容易看到（語意矛盾）。"},
        {text: "あたらしい", explanation: "錯誤：あたらしい（新しい）意思是新的，與容易看到無關。\n中文翻譯：那棟建築物因為很新，所以很容易看到（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 38,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ほんは （ ） ので、よみやすいです。",
    options: [
        {text: "かんたんな", explanation: "正確答案：句意：這本書很簡單，所以很容易讀。\n中文翻譯：這本書因為很簡單，所以很容易讀。"},
        {text: "ふくざつな", explanation: "錯誤：ふくざつ（複雑）意思是複雜的，與容易讀不符。\n中文翻譯：這本書因為很複雜，所以很容易讀（語意矛盾）。"},
        {text: "むずかしい", explanation: "錯誤：むずかしい（難しい）意思是困難的，與容易讀不符。\n中文翻譯：這本書因為很難，所以很容易讀（語意矛盾）。"},
        {text: "おもしろい", explanation: "錯誤：おもしろい（面白い）意思是有趣的，不一定容易讀。\n中文翻譯：這本書因為很有趣，所以很容易讀（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 39,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この みちは （ ） ので、あるきにくいです。",
    options: [
        {text: "せまい", explanation: "正確答案：句意：這條路很窄，所以很難走。\n中文翻譯：這條路因為很窄，所以很難走。"},
        {text: "ひろい", explanation: "錯誤：ひろい（広い）意思是寬的，與難走不符。\n中文翻譯：這條路因為很寬，所以很難走（語意矛盾）。"},
        {text: "みじかい", explanation: "錯誤：みじかい（短い）意思是短的，不一定難走。\n中文翻譯：這條路因為很短，所以很難走（語意矛盾）。"},
        {text: "ながい", explanation: "錯誤：ながい（長い）意思是長的，不一定難走。\n中文翻譯：這條路因為很長，所以很難走（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 40,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この いすは （ ） ので、すわりやすいです。",
    options: [
        {text: "やわらかい", explanation: "正確答案：句意：這張椅子很柔軟，所以很容易坐。\n中文翻譯：這張椅子因為很柔軟，所以很容易坐。"},
        {text: "かたい", explanation: "錯誤：かたい（硬い）意思是硬的，與容易坐不符。\n中文翻譯：這張椅子因為很硬，所以很容易坐（語意矛盾）。"},
        {text: "かるい", explanation: "錯誤：かるい（軽い）意思是輕的，與容易坐無關。\n中文翻譯：這張椅子因為很輕，所以很容易坐（語意矛盾）。"},
        {text: "おもい", explanation: "錯誤：おもい（重い）意思是重的，與容易坐無關。\n中文翻譯：這張椅子因為很重，所以很容易坐（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 41,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この ケーキは とても おいしいです。",
    options: [
        {text: "この ケーキは とても うまいです。", explanation: "正確答案：「おいしい」和「うまい」在表示好吃時意思相近。\n中文翻譯：這個蛋糕很好吃。"},
        {text: "この ケーキは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與原句意思不同。\n中文翻譯：這個蛋糕很便宜。"},
        {text: "この ケーキは とても からいです。", explanation: "錯誤：からい（辛い）意思是辣的，與原句意思不同。\n中文翻譯：這個蛋糕很辣。"},
        {text: "この ケーキは とても かるいです。", explanation: "錯誤：かるい（軽い）意思是輕的，與原句意思不同。\n中文翻譯：這個蛋糕很輕。"}
    ],
    correctAnswer: 0
},
{
    id: 42,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの ひとは とても しんせつです。",
    options: [
        {text: "あの ひとは とても やさしいです。", explanation: "正確答案：「親切」和「優しい」在表示親切時意思相近。\n中文翻譯：那個人很親切。"},
        {text: "あの ひとは とても きれいです。", explanation: "錯誤：きれい（綺麗）意思是漂亮的，與親切無關。\n中文翻譯：那個人很漂亮。"},
        {text: "あの ひとは とても げんきです。", explanation: "錯誤：げんき（元気）意思是有精神的，與親切無關。\n中文翻譯：那個人很有精神。"},
        {text: "あの ひとは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與親切無關。\n中文翻譯：那個人很有趣。"}
    ],
    correctAnswer: 0
},
{
    id: 43,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "きょうは とても いそがしいです。",
    options: [
        {text: "きょうは とても たくさん することが あります。", explanation: "正確答案：「忙しい」和「たくさんすることがある」意思相近。\n中文翻譯：今天很忙。"},
        {text: "きょうは とても ひまです。", explanation: "錯誤：ひま（暇）意思是空閒的，與忙相反。\n中文翻譯：今天很閒。"},
        {text: "きょうは とても たのしいです。", explanation: "錯誤：たのしい（楽しい）意思是快樂的，與忙無關。\n中文翻譯：今天很快樂。"},
        {text: "きょうは とても つかれました。", explanation: "錯誤：つかれた（疲れた）意思是累了，與忙無直接關係。\n中文翻譯：今天很累。"}
    ],
    correctAnswer: 0
},
{
    id: 44,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この しごとは かんたんです。",
    options: [
        {text: "この しごとは むずかしく ありません。", explanation: "正確答案：「簡単」和「難しくない」意思相近。\n中文翻譯：這個工作很簡單。"},
        {text: "この しごとは おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與簡單無關。\n中文翻譯：這個工作很有趣。"},
        {text: "この しごとは たいせつです。", explanation: "錯誤：たいせつ（大切）意思是重要的，與簡單無關。\n中文翻譯：這個工作很重要。"},
        {text: "この しごとは おそいです。", explanation: "錯誤：おそい（遅い）意思是慢的，與簡單無關。\n中文翻譯：這個工作很慢。"}
    ],
    correctAnswer: 0
},
{
    id: 45,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの みせは やすいです。",
    options: [
        {text: "あの みせは ねだんが ひくいです。", explanation: "正確答案：「安い」和「値段が低い」意思相近。\n中文翻譯：那家店很便宜。"},
        {text: "あの みせは おおきいです。", explanation: "錯誤：おおきい（大きい）意思是大的，與便宜無關。\n中文翻譯：那家店很大。"},
        {text: "あの みせは ちいさいです。", explanation: "錯誤：ちいさい（小さい）意思是小的，與便宜無關。\n中文翻譯：那家店很小。"},
        {text: "あの みせは あたらしいです。", explanation: "錯誤：あたらしい（新しい）意思是新的，與便宜無關。\n中文翻譯：那家店很新。"}
    ],
    correctAnswer: 0
},
{
    id: 46,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは がっこう（ ） あるいて いきます。",
    options: [
        {text: "まで", explanation: "正確答案：句意：我走路到學校（「まで」表示動作的終點）。\n中文翻譯：我走路到學校。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：我從學校走路去（語意矛盾）。"},
        {text: "しか", explanation: "錯誤：「しか」表示限定，與句意不符。\n中文翻譯：我只走路去學校（語意不完整）。"},
        {text: "ごろ", explanation: "錯誤：「ごろ」表示大約時間，與句意不符。\n中文翻譯：我大約走路去學校（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 47,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "あした ともだち（ ） あいます。",
    options: [
        {text: "に", explanation: "正確答案：句意：明天要見朋友（「に」表示動作的對象）。\n中文翻譯：明天要見朋友。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示對象。\n中文翻譯：明天見朋友（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，但「会う」的對象用「に」。\n中文翻譯：明天見朋友（助詞使用錯誤）。"},
        {text: "と", explanation: "錯誤：「と」表示共同行動的對象，但「会う」通常用「に」。\n中文翻譯：明天見朋友（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 48,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "きのう えいが（ ） みました。",
    options: [
        {text: "を", explanation: "正確答案：句意：昨天看了電影（「を」表示賓語）。\n中文翻譯：昨天看了電影。"},
        {text: "に", explanation: "錯誤：「に」表示對象或時間，不用於表示賓語。\n中文翻譯：昨天看了電影（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示賓語。\n中文翻譯：昨天看了電影（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語，不用於表示賓語。\n中文翻譯：昨天看了電影（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 49,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは まいあさ コーヒー（ ） のみます。",
    options: [
        {text: "を", explanation: "正確答案：句意：我每天早上喝咖啡（「を」表示賓語）。\n中文翻譯：我每天早上喝咖啡。"},
        {text: "に", explanation: "錯誤：「に」表示對象或時間，不用於表示賓語。\n中文翻譯：我每天早上喝咖啡（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示賓語。\n中文翻譯：我每天早上喝咖啡（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語，不用於表示賓語。\n中文翻譯：我每天早上喝咖啡（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 50,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ともだち（ ） でんわを かけました。",
    options: [
        {text: "に", explanation: "正確答案：句意：給朋友打了電話（「に」表示動作的對象）。\n中文翻譯：給朋友打了電話。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，但「電話をかける」的對象用「に」。\n中文翻譯：給朋友打了電話（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示對象。\n中文翻譯：給朋友打了電話（助詞使用錯誤）。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：從朋友打了電話（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 51,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは バス（ ） がっこうへ いきます。",
    options: [
        {text: "で", explanation: "正確答案：句意：我坐公車去學校（「で」表示手段）。\n中文翻譯：我坐公車去學校。"},
        {text: "に", explanation: "錯誤：「に」表示目的地，但手段要用「で」。\n中文翻譯：我坐公車去學校（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，不用於表示手段。\n中文翻譯：我坐公車去學校（助詞使用錯誤）。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：我從公車去學校（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 52,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "あした ９じ（ ） 来て ください。",
    options: [
        {text: "に", explanation: "正確答案：句意：請明天9點來（「に」表示具體時間點）。\n中文翻譯：請明天9點來。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限，不用於具體時間點。\n中文翻譯：請明天9點來（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，不用於表示時間。\n中文翻譯：請明天9點來（助詞使用錯誤）。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：請從明天9點來（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 53,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この しごとは ５じ（ ） おわります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這個工作5點結束（「に」表示具體時間點）。\n中文翻譯：這個工作5點結束。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限，不用於具體時間點。\n中文翻譯：這個工作5點結束（助詞使用錯誤）。"},
        {text: "まで", explanation: "錯誤：「まで」表示時間的終點，但「終わる」要用「に」。\n中文翻譯：這個工作到5點結束（語意矛盾）。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：這個工作從5點結束（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 54,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "きょうは しごと（ ） やすみます。",
    options: [
        {text: "を", explanation: "正確答案：句意：今天休息不工作（「を」表示賓語，休む的固定用法）。\n中文翻譯：今天休息不工作。"},
        {text: "に", explanation: "錯誤：「に」不用於「休む」的對象。\n中文翻譯：今天休息不工作（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」不用於「休む」的對象。\n中文翻譯：今天休息不工作（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語，不用於表示賓語。\n中文翻譯：今天休息不工作（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 55,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ともだち（ ） プレゼントを もらいました。",
    options: [
        {text: "から", explanation: "正確答案：句意：從朋友那裡收到了禮物（「から」表示來源）。\n中文翻譯：從朋友那裡收到了禮物。"},
        {text: "に", explanation: "錯誤：「に」表示給予的對象，但「もらう」用「から」。\n中文翻譯：從朋友那裡收到了禮物（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，不用於表示來源。\n中文翻譯：從朋友那裡收到了禮物（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示來源。\n中文翻譯：從朋友那裡收到了禮物（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 56,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "にちようび ★  かいものを します。",
    options: [
        {text: "デパートで", explanation: "正確答案：正確句子：にちようびデパートでかいものをします。\n中文翻譯：星期天在百貨公司購物。"},
        {text: "かいものを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "します", explanation: "錯誤：缺少與「にちようび」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "にちようびは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 57,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしは ★  ほんを よみます。",
    options: [
        {text: "としょかんで", explanation: "正確答案：正確句子：わたしはとしょかんでほんをよみます。\n中文翻譯：我在圖書館讀書。"},
        {text: "ほんを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "よみます", explanation: "錯誤：缺少與「わたしは」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしはが", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 58,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あした ★  えいがを みに いきます。",
    options: [
        {text: "ともだちと", explanation: "正確答案：正確句子：あしたともだちとえいがをみにいきます。\n中文翻譯：明天和朋友去看電影。"},
        {text: "えいがを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "みに", explanation: "錯誤：缺少與「あした」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あしたは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 59,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしの ★  にほんごを べんきょうしています。",
    options: [
        {text: "せんせいに", explanation: "正確答案：正確句子：わたしのせんせいににほんごをべんきょうしています。\n中文翻譯：我跟我的老師學日文。"},
        {text: "にほんごを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "べんきょうしています", explanation: "錯誤：缺少與「わたしの」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしのが", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 60,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "きょう ★  レポートを かかなければ なりません。",
    options: [
        {text: "しゅくだいの", explanation: "正確答案：正確句子：きょうしゅくだいのレポートをかかなければなりません。\n中文翻譯：今天必須寫作業的報告。"},
        {text: "レポートを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "かかなければ", explanation: "錯誤：缺少與「きょう」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "きょうは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 71,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "あんない",
    options: [
        {text: "案内", explanation: "正確答案：あんないの漢字是「案内」，意思是引導、介紹。\n中文翻譯：引導、介紹"},
        {text: "安内", explanation: "錯誤：「安」讀音是「あん」但意思不對，正確漢字是「案」。\n中文翻譯：引導、介紹"},
        {text: "暗内", explanation: "錯誤：「暗」讀音是「あん」但意思不對，正確漢字是「案」。\n中文翻譯：引導、介紹"},
        {text: "案內", explanation: "錯誤：「內」是舊字體，現代日文使用「内」。\n中文翻譯：引導、介紹"}
    ],
    correctAnswer: 0
},
{
    id: 72,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けんぶつ",
    options: [
        {text: "見物", explanation: "正確答案：けんぶつの漢字是「見物」，意思是觀光、參觀。\n中文翻譯：觀光、參觀"},
        {text: "県物", explanation: "錯誤：「県」讀音是「けん」但意思不對，正確漢字是「見」。\n中文翻譯：觀光、參觀"},
        {text: "検物", explanation: "錯誤：「検」讀音是「けん」但意思不對，正確漢字是「見」。\n中文翻譯：觀光、參觀"},
        {text: "見ぶつ", explanation: "錯誤：「ぶつ」讀音不正確，正確漢字是「物」。\n中文翻譯：觀光、參觀"}
    ],
    correctAnswer: 0
},
{
    id: 73,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅうりょう",
    options: [
        {text: "終了", explanation: "正確答案：しゅうりょうの漢字是「終了」，意思是結束。\n中文翻譯：結束"},
        {text: "修了", explanation: "錯誤：「修了」讀音是「しゅうりょう」但意思是課程修完，與結束不同。\n中文翻譯：課程修完"},
        {text: "周了", explanation: "錯誤：「周」讀音是「しゅう」但意思不對，正確漢字是「終」。\n中文翻譯：結束"},
        {text: "集了", explanation: "錯誤：「集」讀音是「しゅう」但意思不對，正確漢字是「終」。\n中文翻譯：結束"}
    ],
    correctAnswer: 0
},
{
    id: 74,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "たいいく",
    options: [
        {text: "体育", explanation: "正確答案：たいいくの漢字是「体育」，意思是體育。\n中文翻譯：體育"},
        {text: "対育", explanation: "錯誤：「対」讀音是「たい」但意思不對，正確漢字是「体」。\n中文翻譯：體育"},
        {text: "体育", explanation: "錯誤：「体」的寫法不正確，正確是「体」。\n中文翻譯：體育"},
        {text: "態育", explanation: "錯誤：「態」讀音是「たい」但意思不對，正確漢字是「体」。\n中文翻譯：體育"}
    ],
    correctAnswer: 0
},
{
    id: 75,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はつおん",
    options: [
        {text: "発音", explanation: "正確答案：はつおんの漢字是「発音」，意思是發音。\n中文翻譯：發音"},
        {text: "初音", explanation: "錯誤：「初音」讀音是「はつね」但意思不同。\n中文翻譯：初音"},
        {text: "発恩", explanation: "錯誤：「恩」讀音是「おん」但意思不對，正確漢字是「音」。\n中文翻譯：發音"},
        {text: "波音", explanation: "錯誤：「波音」讀音是「はおん」但意思不同。\n中文翻譯：波音"}
    ],
    correctAnswer: 0
},
{
    id: 76,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "りょうり",
    options: [
        {text: "料理", explanation: "正確答案：りょうりの漢字是「料理」，意思是料理。\n中文翻譯：料理"},
        {text: "量理", explanation: "錯誤：「量」讀音是「りょう」但意思不對，正確漢字是「料」。\n中文翻譯：料理"},
        {text: "料利", explanation: "錯誤：「利」讀音是「り」但意思不對，正確漢字是「理」。\n中文翻譯：料理"},
        {text: "良理", explanation: "錯誤：「良」讀音是「りょう」但意思不對，正確漢字是「料」。\n中文翻譯：料理"}
    ],
    correctAnswer: 0
},
{
    id: 77,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅうかん",
    options: [
        {text: "習慣", explanation: "正確答案：しゅうかんの漢字是「習慣」，意思是習慣。\n中文翻譯：習慣"},
        {text: "週間", explanation: "錯誤：「週間」讀音是「しゅうかん」但意思是一週，不是習慣。\n中文翻譯：一週"},
        {text: "収慣", explanation: "錯誤：「収」讀音是「しゅう」但意思不對，正確漢字是「習」。\n中文翻譯：習慣"},
        {text: "修慣", explanation: "錯誤：「修」讀音是「しゅう」但意思不對，正確漢字是「習」。\n中文翻譯：習慣"}
    ],
    correctAnswer: 0
},
{
    id: 78,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅくだい",
    options: [
        {text: "宿題", explanation: "正確答案：しゅくだいの漢字是「宿題」，意思是作業。\n中文翻譯：作業"},
        {text: "縮題", explanation: "錯誤：「縮」讀音是「しゅく」但意思不對，正確漢字是「宿」。\n中文翻譯：作業"},
        {text: "宿提", explanation: "錯誤：「題」的寫法不正確，正確是「題」。\n中文翻譯：作業"},
        {text: "熟題", explanation: "錯誤：「熟」讀音是「じゅく」但意思不對，正確漢字是「宿」。\n中文翻譯：作業"}
    ],
    correctAnswer: 0
},
{
    id: 79,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きんえん",
    options: [
        {text: "禁煙", explanation: "正確答案：きんえんの漢字是「禁煙」，意思是禁煙。\n中文翻譯：禁煙"},
        {text: "近煙", explanation: "錯誤：「近」讀音是「きん」但意思不對，正確漢字是「禁」。\n中文翻譯：禁煙"},
        {text: "禁園", explanation: "錯誤：「園」讀音是「えん」但意思不對，正確漢字是「煙」。\n中文翻譯：禁煙"},
        {text: "金煙", explanation: "錯誤：「金」讀音是「きん」但意思不對，正確漢字是「禁」。\n中文翻譯：禁煙"}
    ],
    correctAnswer: 0
},
{
    id: 80,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けいけん",
    options: [
        {text: "経験", explanation: "正確答案：けいけんの漢字是「経験」，意思是經驗。\n中文翻譯：經驗"},
        {text: "形験", explanation: "錯誤：「形」讀音是「けい」但意思不對，正確漢字是「経」。\n中文翻譯：經驗"},
        {text: "経見", explanation: "錯誤：「見」讀音是「けん」但意思不對，正確漢字是「験」。\n中文翻譯：經驗"},
        {text: "景験", explanation: "錯誤：「景」讀音是「けい」但意思不對，正確漢字是「経」。\n中文翻譯：經驗"}
    ],
    correctAnswer: 0
},
{
    id: 81,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この くつは （ ） ので、はきやすいです。",
    options: [
        {text: "かるくて", explanation: "正確答案：句意：這雙鞋很輕，所以很好穿。\n中文翻譯：這雙鞋因為很輕，所以很好穿。"},
        {text: "おもくて", explanation: "錯誤：おもい（重い）意思是重的，與好穿不符。\n中文翻譯：這雙鞋因為很重，所以很好穿（語意矛盾）。"},
        {text: "大きくて", explanation: "錯誤：おおきい（大きい）意思是大的，不一定好穿。\n中文翻譯：這雙鞋因為很大，所以很好穿（語意矛盾）。"},
        {text: "小さくて", explanation: "錯誤：ちいさい（小さい）意思是小的，不一定好穿。\n中文翻譯：這雙鞋因為很小，所以很好穿（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 82,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この しごとは （ ） ので、おわりません。",
    options: [
        {text: "たくさん", explanation: "正確答案：句意：這個工作很多，所以做不完。\n中文翻譯：這個工作因為很多，所以做不完。"},
        {text: "すくない", explanation: "錯誤：すくない（少ない）意思是少的，與做不完不符。\n中文翻譯：這個工作因為很少，所以做不完（語意矛盾）。"},
        {text: "かんたんな", explanation: "錯誤：かんたん（簡単）意思是簡單的，與做不完不符。\n中文翻譯：這個工作因為很簡單，所以做不完（語意矛盾）。"},
        {text: "むずかしい", explanation: "錯誤：むずかしい（難しい）意思是困難的，但不一定做不完。\n中文翻譯：這個工作因為很難，所以做不完（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 83,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この へやは （ ） ので、すみやすいです。",
    options: [
        {text: "ひろくて", explanation: "正確答案：句意：這個房間很寬敞，所以很好住。\n中文翻譯：這個房間因為很寬敞，所以很好住。"},
        {text: "せまくて", explanation: "錯誤：せまい（狭い）意思是狹窄的，與好住不符。\n中文翻譯：這個房間因為很狹窄，所以很好住（語意矛盾）。"},
        {text: "くらい", explanation: "錯誤：くらい（暗い）意思是暗的，與好住無關。\n中文翻譯：這個房間因為很暗，所以很好住（語意矛盾）。"},
        {text: "うるさい", explanation: "錯誤：うるさい意思是吵鬧的，與好住不符。\n中文翻譯：這個房間因為很吵鬧，所以很好住（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 84,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この みずは （ ） ので、のめません。",
    options: [
        {text: "きたない", explanation: "正確答案：句意：這個水很髒，所以不能喝。\n中文翻譯：這個水因為很髒，所以不能喝。"},
        {text: "きれいな", explanation: "錯誤：きれい（綺麗）意思是乾淨的，與不能喝不符。\n中文翻譯：這個水因為很乾淨，所以不能喝（語意矛盾）。"},
        {text: "つめたい", explanation: "錯誤：つめたい（冷たい）意思是冷的，但可以喝。\n中文翻譯：這個水因為很冷，所以不能喝（語意矛盾）。"},
        {text: "あたたかい", explanation: "錯誤：あたたかい（暖かい）意思是溫暖的，但可以喝。\n中文翻譯：這個水因為很溫暖，所以不能喝（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 85,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かみは （ ） ので、かきやすいです。",
    options: [
        {text: "うすくて", explanation: "正確答案：句意：這個紙很薄，所以很好寫。\n中文翻譯：這個紙因為很薄，所以很好寫。"},
        {text: "あつくて", explanation: "錯誤：あつい（厚い）意思是厚的，不一定好寫。\n中文翻譯：這個紙因為很厚，所以很好寫（語意矛盾）。"},
        {text: "かたくて", explanation: "錯誤：かたい（硬い）意思是硬的，不一定好寫。\n中文翻譯：這個紙因為很硬，所以很好寫（語意矛盾）。"},
        {text: "やわらかくて", explanation: "錯誤：やわらかい（柔らかい）意思是柔軟的，不一定好寫。\n中文翻譯：這個紙因為很柔軟，所以很好寫（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 86,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この おかしは （ ） ので、こどもが すきです。",
    options: [
        {text: "あまくて", explanation: "正確答案：句意：這個點心很甜，所以小孩喜歡。\n中文翻譯：這個點心因為很甜，所以小孩喜歡。"},
        {text: "からくて", explanation: "錯誤：からい（辛い）意思是辣的，小孩通常不喜歡。\n中文翻譯：這個點心因為很辣，所以小孩喜歡（語意矛盾）。"},
        {text: "にがくて", explanation: "錯誤：にがい（苦い）意思是苦的，小孩通常不喜歡。\n中文翻譯：這個點心因為很苦，所以小孩喜歡（語意矛盾）。"},
        {text: "しょっぱくて", explanation: "錯誤：しょっぱい（鹹い）意思是鹹的，小孩不一定喜歡。\n中文翻譯：這個點心因為很鹹，所以小孩喜歡（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 87,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ほんは （ ） ので、もっていきません。",
    options: [
        {text: "おもい", explanation: "正確答案：句意：這本書很重，所以不帶去。\n中文翻譯：這本書因為很重，所以不帶去。"},
        {text: "かるい", explanation: "錯誤：かるい（軽い）意思是輕的，與不帶去不符。\n中文翻譯：這本書因為很輕，所以不帶去（語意矛盾）。"},
        {text: "やすい", explanation: "錯誤：やすい（安い）意思是便宜的，與不帶去無關。\n中文翻譯：這本書因為很便宜，所以不帶去（語意矛盾）。"},
        {text: "たかい", explanation: "錯誤：たかい（高い）意思是貴的，與不帶去無關。\n中文翻譯：這本書因為很貴，所以不帶去（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 88,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ふくは （ ） ので、きません。",
    options: [
        {text: "ふるい", explanation: "正確答案：句意：這件衣服很舊，所以不穿。\n中文翻譯：這件衣服因為很舊，所以不穿。"},
        {text: "あたらしい", explanation: "錯誤：あたらしい（新しい）意思是新的，與不穿不符。\n中文翻譯：這件衣服因為很新，所以不穿（語意矛盾）。"},
        {text: "きれいな", explanation: "錯誤：きれい（綺麗）意思是漂亮的，與不穿不符。\n中文翻譯：這件衣服因為很漂亮，所以不穿（語意矛盾）。"},
        {text: "きたない", explanation: "錯誤：きたない（汚い）意思是髒的，但可以洗。\n中文翻譯：這件衣服因為很髒，所以不穿（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 89,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この みせは （ ） ので、よく いきます。",
    options: [
        {text: "やすい", explanation: "正確答案：句意：這家店很便宜，所以經常去。\n中文翻譯：這家店因為很便宜，所以經常去。"},
        {text: "たかい", explanation: "錯誤：たかい（高い）意思是貴的，與經常去不符。\n中文翻譯：這家店因為很貴，所以經常去（語意矛盾）。"},
        {text: "とおい", explanation: "錯誤：とおい（遠い）意思是遠的，與經常去不符。\n中文翻譯：這家店因為很遠，所以經常去（語意矛盾）。"},
        {text: "ちかい", explanation: "錯誤：ちかい（近い）意思是近的，但不一定便宜。\n中文翻譯：這家店因為很近，所以經常去（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 90,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かさは （ ） ので、つかいません。",
    options: [
        {text: "こわれている", explanation: "正確答案：句意：這把傘壞了，所以不使用。\n中文翻譯：這把傘因為壞了，所以不使用。"},
        {text: "あたらしい", explanation: "錯誤：あたらしい（新しい）意思是新的，與不使用不符。\n中文翻譯：這把傘因為很新，所以不使用（語意矛盾）。"},
        {text: "きれいな", explanation: "錯誤：きれい（綺麗）意思是漂亮的，與不使用不符。\n中文翻譯：這把傘因為很漂亮，所以不使用（語意矛盾）。"},
        {text: "やすい", explanation: "錯誤：やすい（安い）意思是便宜的，與不使用無關。\n中文翻譯：這把傘因為很便宜，所以不使用（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 91,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの ひとは とても ゆうめいです。",
    options: [
        {text: "あの ひとは とても しられています。", explanation: "正確答案：「有名」和「知られている」意思相近。\n中文翻譯：那個人很有名。"},
        {text: "あの ひとは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與有名無關。\n中文翻譯：那個人很有趣。"},
        {text: "あの ひとは とても かっこいいです。", explanation: "錯誤：かっこいい意思是帥氣的，與有名無關。\n中文翻譯：那個人很帥氣。"},
        {text: "あの ひとは とても げんきです。", explanation: "錯誤：げんき（元気）意思是有精神的，與有名無關。\n中文翻譯：那個人很有精神。"}
    ],
    correctAnswer: 0
},
{
    id: 92,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この ほんは とても むずかしいです。",
    options: [
        {text: "この ほんは とても わかりにくいです。", explanation: "正確答案：「難しい」和「分かりにくい」意思相近。\n中文翻譯：這本書很難。"},
        {text: "この ほんは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與困難無關。\n中文翻譯：這本書很有趣。"},
        {text: "この ほんは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與困難無關。\n中文翻譯：這本書很便宜。"},
        {text: "この ほんは とても かるいです。", explanation: "錯誤：かるい（軽い）意思是輕的，與困難無關。\n中文翻譯：這本書很輕。"}
    ],
    correctAnswer: 0
},
{
    id: 93,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "きょうは とても さむいです。",
    options: [
        {text: "きょうは とても つめたいです。", explanation: "錯誤：「寒い」是氣溫低，「冷たい」是觸感冰冷。\n中文翻譯：今天很冷。"},
        {text: "きょうは とても すずしいです。", explanation: "錯誤：「涼しい」是涼爽舒適的感覺。\n中文翻譯：今天很涼爽。"},
        {text: "きょうは とても こごえるようです。", explanation: "正確答案：「寒い」和「凍えるよう」都表示非常寒冷。\n中文翻譯：今天冷得像要結冰一樣。"},
        {text: "きょうは とても あたたかいです。", explanation: "錯誤：「暖かい」意思是溫暖的，與寒冷相反。\n中文翻譯：今天很溫暖。"}
    ],
    correctAnswer: 2
},
{
    id: 94,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この しごとは すぐ おわります。",
    options: [
        {text: "この しごとは もうすぐ おわります。", explanation: "正確答案：「すぐ」和「もうすぐ」意思相近。\n中文翻譯：這個工作馬上就結束。"},
        {text: "この しごとは まだ おわりません。", explanation: "錯誤：まだ意思是還沒，與すぐ相反。\n中文翻譯：這個工作還沒結束。"},
        {text: "この しごとは ちょうど おわりました。", explanation: "錯誤：ちょうど意思是正好，與すぐ不同。\n中文翻譯：這個工作正好結束了。"},
        {text: "この しごとは もう おわりました。", explanation: "錯誤：もう意思是已經，與すぐ不同。\n中文翻譯：這個工作已經結束了。"}
    ],
    correctAnswer: 0
},
{
    id: 95,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの レストランは とても きれいです。",
    options: [
        {text: "あの レストランは とても せいけつです。", explanation: "正確答案：「きれい」和「清潔」在表示乾淨時意思相近。\n中文翻譯：那家餐廳很乾淨。"},
        {text: "あの レストランは とても おいしいです。", explanation: "錯誤：おいしい意思是好吃的，與乾淨無關。\n中文翻譯：那家餐廳很好吃。"},
        {text: "あの レストランは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與乾淨無關。\n中文翻譯：那家餐廳很便宜。"},
        {text: "あの レストランは とても おおきいです。", explanation: "錯誤：おおきい（大きい）意思是大的，與乾淨無關。\n中文翻譯：那家餐廳很大。"}
    ],
    correctAnswer: 0
},
{
    id: 96,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは まいばん ねる（ ） まえに、はを みがきます。",
    options: [
        {text: "まえ", explanation: "正確答案：句意：我每天晚上睡覺前刷牙（「まえに」表示在...之前）。\n中文翻譯：我每天晚上睡覺前刷牙。"},
        {text: "あと", explanation: "錯誤：「あと」表示在...之後，與句意不符。\n中文翻譯：我每天晚上睡覺後刷牙（語意矛盾）。"},
        {text: "とき", explanation: "錯誤：「とき」表示在...時候，與句意不符。\n中文翻譯：我每天晚上睡覺時刷牙（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示到...為止，與句意不符。\n中文翻譯：我每天晚上睡覺前刷牙（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 97,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ほんは ともだち（ ） かりました。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書是向朋友借的（「に」表示動作的對象）。\n中文翻譯：這本書是向朋友借的。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，但「借りる」的對象用「に」。\n中文翻譯：這本書是向朋友借的（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示對象。\n中文翻譯：這本書是向朋友借的（助詞使用錯誤）。"},
        {text: "から", explanation: "錯誤：「から」表示來源，但「借りる」用「に」。\n中文翻譯：這本書是向朋友借的（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 98,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "きのう ともだち（ ） でんわが ありました。",
    options: [
        {text: "から", explanation: "正確答案：句意：昨天有朋友打來的電話（「から」表示來源）。\n中文翻譯：昨天有朋友打來的電話。"},
        {text: "に", explanation: "錯誤：「に」表示存在的場所，與句意不符。\n中文翻譯：昨天有朋友打來的電話（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：昨天有朋友打來的電話（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，與句意不符。\n中文翻譯：昨天有朋友打來的電話（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 99,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この しごとは １じかん（ ） できます。",
    options: [
        {text: "で", explanation: "正確答案：句意：這個工作1小時就能完成（「で」表示時間期限）。\n中文翻譯：這個工作1小時就能完成。"},
        {text: "に", explanation: "錯誤：「に」表示具體時間點，與句意不符。\n中文翻譯：這個工作1小時就能完成（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：這個工作1小時就能完成（助詞使用錯誤）。"},
        {text: "まで", explanation: "錯誤：「まで」表示時間的終點，與句意不符。\n中文翻譯：這個工作1小時就能完成（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 100,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは まいあさ しんぶん（ ） よみます。",
    options: [
        {text: "を", explanation: "正確答案：句意：我每天早上看報紙（「を」表示賓語）。\n中文翻譯：我每天早上看報紙。"},
        {text: "に", explanation: "錯誤：「に」表示對象或時間，不用於表示賓語。\n中文翻譯：我每天早上看報紙（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示賓語。\n中文翻譯：我每天早上看報紙（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語，不用於表示賓語。\n中文翻譯：我每天早上看報紙（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 101,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "あした ともだち（ ） あそびに いきます。",
    options: [
        {text: "と", explanation: "正確答案：句意：明天和朋友去玩（「と」表示共同行動的對象）。\n中文翻譯：明天和朋友去玩。"},
        {text: "に", explanation: "錯誤：「に」表示目的地，與共同行動不符。\n中文翻譯：明天和朋友去玩（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與共同行動不符。\n中文翻譯：明天和朋友去玩（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，與共同行動不符。\n中文翻譯：明天和朋友去玩（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 102,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この えは わたし（ ） かきました。",
    options: [
        {text: "が", explanation: "正確答案：句意：這幅畫是我畫的（「が」表示主語）。\n中文翻譯：這幅畫是我畫的。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：這幅畫是我畫的（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤：「に」表示對象或時間，與句意不符。\n中文翻譯：這幅畫是我畫的（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，與句意不符。\n中文翻譯：這幅畫是我畫的（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 103,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは えいが（ ） みるのが すきです。",
    options: [
        {text: "を", explanation: "正確答案：句意：我喜歡看電影（「を」表示賓語）。\n中文翻譯：我喜歡看電影。"},
        {text: "に", explanation: "錯誤：「に」表示對象或時間，不用於表示賓語。\n中文翻譯：我喜歡看電影（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，不用於表示賓語。\n中文翻譯：我喜歡看電影（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語，不用於表示賓語。\n中文翻譯：我喜歡看電影（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 104,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは かぞく（ ） もらいました。",
    options: [
        {text: "から", explanation: "正確答案：句意：這個包包是從家人那裡得到的（「から」表示來源）。\n中文翻譯：這個包包是從家人那裡得到的。"},
        {text: "に", explanation: "錯誤：「に」表示給予的對象，但「もらう」用「から」。\n中文翻譯：這個包包是從家人那裡得到的（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：這個包包是從家人那裡得到的（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，與句意不符。\n中文翻譯：這個包包是從家人那裡得到的（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 105,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは バス（ ） のって がっこうへ いきます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我坐公車去學校（「に」表示搭乘的交通工具）。\n中文翻譯：我坐公車去學校。"},
        {text: "で", explanation: "錯誤：「で」表示手段，但「乗る」用「に」。\n中文翻譯：我坐公車去學校（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：我坐公車去學校（助詞使用錯誤）。"},
        {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：我從公車去學校（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 106,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしは ★  テレビを みます。",
    options: [
        {text: "いえで", explanation: "正確答案：正確句子：わたしはいえでテレビをみます。\n中文翻譯：我在家看電視。"},
        {text: "テレビを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "みます", explanation: "錯誤：缺少與「わたしは」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしはが", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 107,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あさ ★  パンを たべます。",
    options: [
        {text: "いつも", explanation: "正確答案：正確句子：あさいつもパンをたべます。\n中文翻譯：早上總是吃麵包。"},
        {text: "パンを", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "たべます", explanation: "錯誤：缺少與「あさ」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あさは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 108,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "にほんご ★  べんきょうしています。",
    options: [
        {text: "まい日", explanation: "正確答案：正確句子：にほんごまい日べんきょうしています。\n中文翻譯：每天學習日文。"},
        {text: "べんきょうしています", explanation: "錯誤：缺少與「にほんご」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "にほんごが", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "まいにち", explanation: "錯誤：與正確答案相同，但用字不同。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 109,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "きょう ★  しごとが あります。",
    options: [
        {text: "たくさん", explanation: "正確答案：正確句子：きょうたくさんしごとがあります。\n中文翻譯：今天有很多工作。"},
        {text: "しごとが", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あります", explanation: "錯誤：缺少與「きょう」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "きょうは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 110,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしの ★  にほんに すんでいます。",
    options: [
        {text: "いもうとは", explanation: "正確答案：正確句子：わたしのいもうとはにほんにすんでいます。\n中文翻譯：我的妹妹住在日本。"},
        {text: "にほんに", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "すんでいます", explanation: "錯誤：缺少與「わたしの」連接的適當詞語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしのが", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 111,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ） 読みやすいです。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書對孩子來說容易讀（「に」表示對象）。\n中文翻譯：這本書對孩子來說容易讀。"},
        {text: "が", explanation: "錯誤：「が」表示主語，與句意不符。\n中文翻譯：這本書對孩子來說容易讀（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：這本書對孩子來說容易讀（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段，與句意不符。\n中文翻譯：這本書對孩子來說容易讀（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 112,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きょうだい",
    options: [
        {text: "兄弟", explanation: "正解。「きょうだい」的漢字是「兄弟」，意思是兄弟姐妹。\n中文翻譯：兄弟姐妹"},
        {text: "兄妹", explanation: "錯誤。讀作「きょうまい」，專指兄妹。\n中文翻譯：兄妹"},
        {text: "姉弟", explanation: "錯誤。讀作「してい」，專指姐弟。\n中文翻譯：姐弟"},
        {text: "兄弟", explanation: "錯誤。這是異體字，不常用。\n中文翻譯：兄弟姐妹"}
    ],
    correctAnswer: 0
},
{
    id: 113,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "毎朝 コーヒーを（ ）飲みます。",
    options: [
        {text: "一杯", explanation: "正解。表示數量的用法。\n中文翻譯：每天早上喝一杯咖啡。"},
        {text: "一個", explanation: "錯誤。用於固體物品。\n中文翻譯：每天早上喝一個咖啡（量詞使用錯誤）。"},
        {text: "一本", explanation: "錯誤。用於細長物品。\n中文翻譯：每天早上喝一瓶咖啡（量詞使用錯誤）。"},
        {text: "一冊", explanation: "錯誤。用於書籍。\n中文翻譯：每天早上喝一冊咖啡（量詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 114,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この レストランは おいしいです。",
    options: [
        {text: "ここは 料理が とても いいです。", explanation: "正解。表達相同意思。\n中文翻譯：這家餐廳很好吃。"},
        {text: "ここは 高いです。", explanation: "錯誤。意思不同。\n中文翻譯：這家餐廳很貴。"},
        {text: "ここは きれいです。", explanation: "錯誤。形容環境。\n中文翻譯：這家餐廳很乾淨。"},
        {text: "ここは 近いです。", explanation: "錯誤。形容距離。\n中文翻譯：這家餐廳很近。"}
    ],
    correctAnswer: 0
},
{
    id: 115,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "昨日は たくさん（ ）から、今日は 元気です。",
    options: [
        {text: "寝た", explanation: "正解。表示原因的「から」用法。\n中文翻譯：因為昨天睡了很多，所以今天有精神。"},
        {text: "寝る", explanation: "錯誤。時態不一致。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"},
        {text: "寝て", explanation: "錯誤。需要過去形。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"},
        {text: "寝ます", explanation: "錯誤。禮貌形不適合。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 116,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "図書館で ★ 勉強します。",
    options: [
        {text: "静かに", explanation: "正解。副詞修飾動詞的正確位置。\n中文翻譯：在圖書館安靜地學習。"},
        {text: "本を", explanation: "錯誤。語序不自然。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達と", explanation: "錯誤。意思通但不合上下文。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "時々", explanation: "錯誤。位置不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 117,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は 複雑（ ）から、時間が かかります。",
    options: [
        {text: "なので", explanation: "正確答案：句意：這個問題很複雜，所以需要時間（「なので」表示原因）。\n中文翻譯：因為這個問題很複雜，所以需要時間。"},
        {text: "なのに", explanation: "錯誤：「なのに」表示轉折，與句意不符。\n中文翻譯：雖然這個問題很複雜，所以需要時間（語意矛盾）。"},
        {text: "だから", explanation: "錯誤：「だから」要用於形容詞或動詞後。\n中文翻譯：因為這個問題很複雜，所以需要時間（文法錯誤）。"},
        {text: "ので", explanation: "錯誤：「ので」要用於動詞或形容詞後。\n中文翻譯：因為這個問題很複雜，所以需要時間（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 118,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは（ ）やすいです。",
    options: [
        {text: "持ち", explanation: "正解。動詞ます形＋やすい的用法。\n中文翻譯：這個包包很容易拿。"},
        {text: "持つ", explanation: "錯誤。要用ます形。\n中文翻譯：這個包包很容易拿（文法錯誤）。"},
        {text: "持って", explanation: "錯誤。て形不適用。\n中文翻譯：這個包包很容易拿（文法錯誤）。"},
        {text: "持った", explanation: "錯誤。過去形不適用。\n中文翻譯：這個包包很容易拿（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 119,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "もし 時間が（ ）、映画を 見に 行きませんか。",
    options: [
        {text: "あったら", explanation: "正解。條件句的正確用法。\n中文翻譯：如果有時間的話，要不要去看電影？"},
        {text: "あると", explanation: "錯誤。表示必然結果。\n中文翻譯：如果有時間的話，要不要去看電影？（文法錯誤）"},
        {text: "あれば", explanation: "錯誤。文法正確但較不自然。\n中文翻譯：如果有時間的話，要不要去看電影？（較不自然）"},
        {text: "あるなら", explanation: "錯誤。用法不恰當。\n中文翻譯：如果有時間的話，要不要去看電影？（文法錯誤）"}
    ],
    correctAnswer: 0
},
{
    id: 120,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "彼は 優しい 人です。",
    options: [
        {text: "彼は 親切です。", explanation: "正解。表達相同特質。\n中文翻譯：他是個溫柔的人。"},
        {text: "彼は 強いです。", explanation: "錯誤。意思不同。\n中文翻譯：他是個強壯的人。"},
        {text: "彼は 忙しいです。", explanation: "錯誤。形容狀態。\n中文翻譯：他是個忙碌的人。"},
        {text: "彼は 若いです。", explanation: "錯誤。形容年齡。\n中文翻譯：他是個年輕的人。"}
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
    id: 122,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きょうみ",
    options: [
        {text: "興味", explanation: "正解。「きょうみ」的漢字是「興味」，意思是興趣。\n中文翻譯：興趣"},
        {text: "京味", explanation: "錯誤。這個詞不存在。\n中文翻譯：興趣"},
        {text: "強味", explanation: "錯誤。讀作「つよみ」，意思是優點、長處。\n中文翻譯：優點、長處"},
        {text: "教味", explanation: "錯誤。這個詞不存在。\n中文翻譯：興趣"}
    ],
    correctAnswer: 0
},
{
    id: 123,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を（ ）ください。",
    options: [
        {text: "飲んで", explanation: "正解。表示請求對方做某事的用法。\n中文翻譯：請喝這個藥。"},
        {text: "飲む", explanation: "錯誤。動詞原形不適用。\n中文翻譯：請喝這個藥（文法錯誤）。"},
        {text: "飲み", explanation: "錯誤。ます形不完整。\n中文翻譯：請喝這個藥（文法錯誤）。"},
        {text: "飲んだ", explanation: "錯誤。過去形不適用。\n中文翻譯：請喝這個藥（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 124,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは 母（ ）作りました。",
    options: [
        {text: "が", explanation: "正解。表示動作主體。\n中文翻譯：這個蛋糕是媽媽做的。"},
        {text: "を", explanation: "錯誤。用於受詞。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤。用於時間、地點等。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤。用於場所、手段。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 125,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 問題は 難しいです。",
    options: [
        {text: "簡単では ありません。", explanation: "正解。表達相同意思。\n中文翻譯：這個問題很難。"},
        {text: "易しいです。", explanation: "錯誤。意思相反。\n中文翻譯：這個問題很簡單。"},
        {text: "面白いです。", explanation: "錯誤。形容有趣。\n中文翻譯：這個問題很有趣。"},
        {text: "大切です。", explanation: "錯誤。形容重要。\n中文翻譯：這個問題很重要。"}
    ],
    correctAnswer: 0
},
{
    id: 126,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "駅の 前で ★ 待って ください。",
    options: [
        {text: "わたしを", explanation: "正解。正確的語序。\n中文翻譯：請在車站前面等我。"},
        {text: "わたしが", explanation: "錯誤。助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしに", explanation: "錯誤。助詞不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしの", explanation: "錯誤。所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 128,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅくだい",
    options: [
        {text: "宿題", explanation: "正解。「しゅくだい」的漢字是「宿題」。\n中文翻譯：作業"},
        {text: "宿題", explanation: "錯誤。異體字不常用。\n中文翻譯：作業"},
        {text: "習題", explanation: "錯誤。讀音和意思都不同。\n中文翻譯：習題"},
        {text: "宿題", explanation: "錯誤。簡體字，日文不適用。\n中文翻譯：作業"}
    ],
    correctAnswer: 0
},
{
    id: 129,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "図書館では（ ）話しては いけません。",
    options: [
        {text: "大きな 声で", explanation: "正解。符合圖書館禮儀。\n中文翻譯：在圖書館不可以大聲說話。"},
        {text: "静かに", explanation: "錯誤。意思矛盾。\n中文翻譯：在圖書館不可以安靜地說話（語意矛盾）。"},
        {text: "小さな 声で", explanation: "錯誤。雖然合理但不如選項1自然。\n中文翻譯：在圖書館不可以小聲說話（語意矛盾）。"},
        {text: "速く", explanation: "錯誤。意思不通。\n中文翻譯：在圖書館不可以快速地說話（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 130,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 昨日（ ）ばかりです。",
    options: [
        {text: "買った", explanation: "正解。表示剛完成動作。\n中文翻譯：這本書是昨天剛買的。"},
        {text: "買う", explanation: "錯誤。時態不一致。\n中文翻譯：這本書是昨天剛買的（時態錯誤）。"},
        {text: "買って", explanation: "錯誤。て形不適用。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"},
        {text: "買い", explanation: "錯誤。ます形不完整。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 131,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "彼女は 元気が ないです。",
    options: [
        {text: "彼女は 疲れて います。", explanation: "正解。表達相同狀態。\n中文翻譯：她沒有精神。"},
        {text: "彼女は 嬉しいです。", explanation: "錯誤。意思相反。\n中文翻譯：她很開心。"},
        {text: "彼女は 忙しいです。", explanation: "錯誤。形容忙碌。\n中文翻譯：她很忙碌。"},
        {text: "彼女は 若いです。", explanation: "錯誤。形容年齡。\n中文翻譯：她很年輕。"}
    ],
    correctAnswer: 0
},
{
    id: 132,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "綺麗",
    options: [
        {text: "きれい", explanation: "正解。「綺麗」讀作「きれい」。\n中文翻譯：漂亮、乾淨"},
        {text: "きりょう", explanation: "錯誤。這是其他詞的讀音。\n中文翻譯：漂亮、乾淨"},
        {text: "ぎれい", explanation: "錯誤。濁音錯誤。\n中文翻譯：漂亮、乾淨"},
        {text: "きれ", explanation: "錯誤。讀音不完整。\n中文翻譯：漂亮、乾淨"}
    ],
    correctAnswer: 0
},
{
    id: 133,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この スープは 少し（ ）です。",
    options: [
        {text: "熱くて", explanation: "正解。形容溫度的用法。\n中文翻譯：這個湯有點燙。"},
        {text: "熱い", explanation: "錯誤。需要て形連接。\n中文翻譯：這個湯有點燙（文法錯誤）。"},
        {text: "熱かった", explanation: "錯誤。過去形不適用。\n中文翻譯：這個湯有點燙（時態錯誤）。"},
        {text: "熱く", explanation: "錯誤。連用形不完整。\n中文翻譯：這個湯有點燙（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 134,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一時間（ ）終わりました。",
    options: [
        {text: "で", explanation: "正解。表示時間範圍。\n中文翻譯：這個工作一小時就結束了。"},
        {text: "に", explanation: "錯誤。用於具體時間點。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤。用於受詞。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤。用於主詞。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 135,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "明日は ★ 行きます。",
    options: [
        {text: "友達と", explanation: "正解。正確的伴隨表現。\n中文翻譯：明天和朋友去。"},
        {text: "友達に", explanation: "錯誤。助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達の", explanation: "錯誤。所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達を", explanation: "錯誤。受格不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 136,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けっこん",
    options: [
        {text: "結婚", explanation: "正解。「けっこん」的漢字是「結婚」。\n中文翻譯：結婚"},
        {text: "結果", explanation: "錯誤。讀作「けっか」，意思不同。\n中文翻譯：結果"},
        {text: "決心", explanation: "錯誤。讀作「けっしん」，意思不同。\n中文翻譯：決心"},
        {text: "血痕", explanation: "錯誤。讀音相近但意思完全不同。\n中文翻譯：血跡"}
    ],
    correctAnswer: 0
},
{
    id: 137,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 店は 安いです。",
    options: [
        {text: "値段が 低いです。", explanation: "正解。表達相同意思。\n中文翻譯：這家店很便宜。"},
        {text: "値段が 高いです。", explanation: "錯誤。意思相反。\n中文翻譯：這家店很貴。"},
        {text: "品物が 少ないです。", explanation: "錯誤。形容數量。\n中文翻譯：這家店的商品很少。"},
        {text: "店員が 親切です。", explanation: "錯誤。形容服務。\n中文翻譯：這家店的店員很親切。"}
    ],
    correctAnswer: 0
},
{
    id: 138,
    type: "reading",
    question: "次の漢字の読み方を選びなさい",
    kanji: "注意",
    options: [
        {text: "ちゅうい", explanation: "正解。「注意」讀作「ちゅうい」，意思是注意、小心。\n中文翻譯：注意、小心"},
        {text: "ちゅい", explanation: "錯誤。缺少長音，正確讀音是「ちゅうい」。\n中文翻譯：注意、小心"},
        {text: "じゅうい", explanation: "錯誤。「注」的讀音是「ちゅう」，不是「じゅう」。\n中文翻譯：注意、小心"},
        {text: "ちゅうき", explanation: "錯誤。「意」的讀音是「い」，不是「き」。\n中文翻譯：注意、小心"}
    ],
    correctAnswer: 0
},
{
    id: 139,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道を（ ）に 行って ください。",
    options: [
        {text: "まっすぐ", explanation: "正解。表示方向的用法。\n中文翻譯：請沿著這條路直走。"},
        {text: "すぐ", explanation: "錯誤。表示時間上的立即。\n中文翻譯：請沿著這條路立即走（語意矛盾）。"},
        {text: "真直", explanation: "錯誤。漢字寫法錯誤。\n中文翻譯：請沿著這條路直走（漢字錯誤）。"},
        {text: "直ぐ", explanation: "錯誤。這是「すぐ」的漢字。\n中文翻譯：請沿著這條路立即走（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 140,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここに 名前を（ ）ください。",
    options: [
        {text: "書いて", explanation: "正解。表示請求的て形用法。\n中文翻譯：請在這裡寫名字。"},
        {text: "書く", explanation: "錯誤。動詞原形不適用。\n中文翻譯：請在這裡寫名字（文法錯誤）。"},
        {text: "書いた", explanation: "錯誤。過去形不適用。\n中文翻譯：請在這裡寫名字（時態錯誤）。"},
        {text: "書きます", explanation: "錯誤。禮貌形不適合。\n中文翻譯：請在這裡寫名字（文法錯誤）。"}
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
    id: 142,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しっぱい",
    options: [
        {text: "失敗", explanation: "正確答案：しっぱい的漢字是「失敗」，意思是失敗。\n中文翻譯：失敗"},
        {text: "失配", explanation: "錯誤：「配」讀音是「はい」但意思不對，正確漢字是「敗」。\n中文翻譯：失敗"},
        {text: "湿敗", explanation: "錯誤：「湿」讀音是「しつ」但意思不對，正確漢字是「失」。\n中文翻譯：失敗"},
        {text: "失拝", explanation: "錯誤：「拝」讀音是「はい」但意思不對，正確漢字是「敗」。\n中文翻譯：失敗"}
    ],
    correctAnswer: 0
},
{
    id: 143,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この コップは （ ） ので、きをつけて ください。",
    options: [
        {text: "われやすい", explanation: "正確答案：句意：這個杯子容易破，請小心。\n中文翻譯：這個杯子因為容易破，請小心。"},
        {text: "われにくい", explanation: "錯誤：われにくい意思是不易破，與句意相反。\n中文翻譯：這個杯子因為不易破，請小心（語意矛盾）。"},
        {text: "おれやすい", explanation: "錯誤：おれやすい意思是易折斷，通常用於細長物品。\n中文翻譯：這個杯子因為易折斷，請小心（語意矛盾）。"},
        {text: "やぶれやすい", explanation: "錯誤：やぶれやすい意思是易撕裂，用於紙或布。\n中文翻譯：這個杯子因為易撕裂，請小心（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 144,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この テストは かんたんです。",
    options: [
        {text: "この テストは やさしいです。", explanation: "正確答案：「簡単」和「易しい」在表示容易時意思相近。\n中文翻譯：這個測驗很簡單。"},
        {text: "この テストは みじかいです。", explanation: "錯誤：みじかい（短い）意思是短的，與簡單無關。\n中文翻譯：這個測驗很短。"},
        {text: "この テストは おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與簡單無關。\n中文翻譯：這個測驗很有趣。"},
        {text: "この テストは たいせつです。", explanation: "錯誤：たいせつ（大切）意思是重要的，與簡單無關。\n中文翻譯：這個測驗很重要。"}
    ],
    correctAnswer: 0
},
{
    id: 145,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここで しゃしんを （ ） も いいです。",
    options: [
        {text: "とって", explanation: "正確答案：句意：在這裡拍照也可以（「～てもいい」表示許可）。\n中文翻譯：在這裡拍照也可以。"},
        {text: "とる", explanation: "錯誤：動詞原形不能直接接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "とった", explanation: "錯誤：過去形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "とります", explanation: "錯誤：ます形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 146,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あの ★  せんせいです。",
    options: [
        {text: "めがねを かけて いる", explanation: "正確答案：正確句子：あのめがねをかけているせんせいです。\n中文翻譯：那位戴眼鏡的老師。"},
        {text: "せんせいです", explanation: "錯誤：語序不正確，無法與前後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あのは", explanation: "錯誤：語序不正確，無法與後文自然連接。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "めがねが", explanation: "錯誤：助詞使用錯誤，應該用「を」。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 148,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この くすりは ごはんを （ ） あとで 飲んで ください。",
    options: [
        {text: "食べた", explanation: "正確答案：句意：這個藥請在吃飯後服用（「たあとで」表示在...之後）。\n中文翻譯：這個藥請在吃飯後服用。"},
        {text: "食べる", explanation: "錯誤：動詞原形不能接「あとで」。\n中文翻譯：這個藥請在吃飯後服用（文法錯誤）。"},
        {text: "食べて", explanation: "錯誤：て形不能接「あとで」。\n中文翻譯：這個藥請在吃飯後服用（文法錯誤）。"},
        {text: "食べます", explanation: "錯誤：ます形不能接「あとで」。\n中文翻譯：這個藥請在吃飯後服用（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 149,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは コーヒーに さとうを （ ） 飲みます。",
    options: [
        {text: "入れて", explanation: "正確答案：句意：我在咖啡裡加糖喝（「て形」表示方式）。\n中文翻譯：我在咖啡裡加糖喝。"},
        {text: "入れる", explanation: "錯誤：動詞原形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（文法錯誤）。"},
        {text: "入れた", explanation: "錯誤：過去形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（時態錯誤）。"},
        {text: "入れます", explanation: "錯誤：ます形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 150,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの 人は とても 有名です。",
    options: [
        {text: "あの 人は よく 知られています。", explanation: "正確答案：「有名」和「知られている」意思相近。\n中文翻譯：那個人很有名。"},
        {text: "あの 人は とても 親切です。", explanation: "錯誤：親切（しんせつ）意思是親切，與有名無關。\n中文翻譯：那個人很親切。"},
        {text: "あの 人は とても 元気です。", explanation: "錯誤：元気（げんき）意思是有精神，與有名無關。\n中文翻譯：那個人很有精神。"},
        {text: "あの 人は とても 若いです。", explanation: "錯誤：若い（わかい）意思是年輕的，與有名無關。\n中文翻譯：那個人很年輕。"}
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
    id: 152,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きょうと",
    options: [
        {text: "京都", explanation: "正確答案：きょうとの漢字是「京都」，意思是京都。\n中文翻譯：京都"},
        {text: "教都", explanation: "錯誤：「教」讀音是「きょう」但意思不對，正確漢字是「京」。\n中文翻譯：京都"},
        {text: "京渡", explanation: "錯誤：「渡」讀音是「と」但意思不對，正確漢字是「都」。\n中文翻譯：京都"},
        {text: "強都", explanation: "錯誤：「強」讀音是「きょう」但意思不對，正確漢字是「京」。\n中文翻譯：京都"}
    ],
    correctAnswer: 0
},
{
    id: 153,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "あの 白い（ ）は わたしの うちです。",
    options: [
        {text: "たてもの", explanation: "正確答案：句意：那棟白色建築物是我家。\n中文翻譯：那棟白色建築物是我家。"},
        {text: "くるま", explanation: "錯誤：くるま（車）意思是車子，與建築物不符。\n中文翻譯：那輛白色車子是我家（語意矛盾）。"},
        {text: "いえ", explanation: "錯誤：いえ（家）意思是房子，但通常不用「白い家」。\n中文翻譯：那個白色房子是我家（較不自然）。"},
        {text: "まど", explanation: "錯誤：まど（窓）意思是窗戶，與建築物不符。\n中文翻譯：那個白色窗戶是我家（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 154,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "きのうは 天気が（ ）です。",
    options: [
        {text: "よかった", explanation: "正確答案：句意：昨天天氣很好（過去形）。\n中文翻譯：昨天天氣很好。"},
        {text: "いい", explanation: "錯誤：現在形，與「きのう」時間不符。\n中文翻譯：昨天天氣很好（時態錯誤）。"},
        {text: "よい", explanation: "錯誤：現在形，與「きのう」時間不符。\n中文翻譯：昨天天氣很好（時態錯誤）。"},
        {text: "よくなかった", explanation: "錯誤：否定形，與句意不符。\n中文翻譯：昨天天氣不好（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 155,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "毎日 ★  日本語を 勉強します。",
    options: [
        {text: "一時間", explanation: "正確答案：正確句子：毎日一時間日本語を勉強します。\n中文翻譯：每天學習日文一小時。"},
        {text: "日本語を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "勉強します", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "毎日は", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 157,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はな",
    options: [
        {text: "花", explanation: "正確答案：はな的漢字是「花」，意思是花。\n中文翻譯：花"},
        {text: "鼻", explanation: "錯誤：「鼻」讀音也是「はな」但意思是鼻子。\n中文翻譯：鼻子"},
        {text: "華", explanation: "錯誤：「華」讀音是「はな」但較少單獨使用。\n中文翻譯：華麗"},
        {text: "端", explanation: "錯誤：「端」讀音是「はし」，意思也不同。\n中文翻譯：邊緣"}
    ],
    correctAnswer: 0
},
{
    id: 158,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは 大きくて（ ）です。",
    options: [
        {text: "あかい", explanation: "正確答案：句意：這個蘋果又大又紅。\n中文翻譯：這個蘋果又大又紅。"},
        {text: "あかくて", explanation: "錯誤：て形不能直接結尾。\n中文翻譯：這個蘋果又大又紅（文法錯誤）。"},
        {text: "あかかった", explanation: "錯誤：過去形與現在描述不符。\n中文翻譯：這個蘋果又大又紅（時態錯誤）。"},
        {text: "あかく", explanation: "錯誤：く形不能直接結尾。\n中文翻譯：這個蘋果又大又紅（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 159,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは 魚（ ）すきです。",
    options: [
        {text: "が", explanation: "正確答案：句意：我喜歡魚（「が」表示喜歡的對象）。\n中文翻譯：我喜歡魚。"},
        {text: "を", explanation: "錯誤：「を」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤：「に」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 160,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 部屋は 広いです。",
    options: [
        {text: "この 部屋は 大きいです。", explanation: "正確答案：「広い」和「大きい」在表示空間大時意思相近。\n中文翻譯：這個房間很寬敞。"},
        {text: "この 部屋は 明るいです。", explanation: "錯誤：明るい（明亮的）與寬敞意思不同。\n中文翻譯：這個房間很明亮。"},
        {text: "この 部屋は 新しいです。", explanation: "錯誤：新しい（新的）與寬敞意思不同。\n中文翻譯：這個房間很新。"},
        {text: "この 部屋は きれいです。", explanation: "錯誤：きれい（乾淨的）與寬敞意思不同。\n中文翻譯：這個房間很乾淨。"}
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
    id: 162,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "かぞく",
    options: [
        {text: "家族", explanation: "正確答案：かぞく的漢字是「家族」，意思是家人。\n中文翻譯：家人"},
        {text: "家数", explanation: "錯誤：「数」讀音是「すう」但意思不對。\n中文翻譯：家人"},
        {text: "課族", explanation: "錯誤：「課」讀音是「か」但意思不對。\n中文翻譯：家人"},
        {text: "加属", explanation: "錯誤：這個詞不存在。\n中文翻譯：家人"}
    ],
    correctAnswer: 0
},
{
    id: 163,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "あの 人は 目が（ ）です。",
    options: [
        {text: "大きい", explanation: "正確答案：句意：那個人的眼睛很大。\n中文翻譯：那個人的眼睛很大。"},
        {text: "高い", explanation: "錯誤：高い（高的）不用於形容眼睛。\n中文翻譯：那個人的眼睛很高（語意不當）。"},
        {text: "長い", explanation: "錯誤：長い（長的）通常不用於形容眼睛。\n中文翻譯：那個人的眼睛很長（語意不當）。"},
        {text: "多い", explanation: "錯誤：多い（多的）不用於形容眼睛。\n中文翻譯：那個人的眼睛很多（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 164,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここ（ ）車を 止めては いけません。",
    options: [
        {text: "に", explanation: "正確答案：句意：這裡不能停車（「に」表示存在的地點）。\n中文翻譯：這裡不能停車。"},
        {text: "で", explanation: "錯誤：「で」表示動作發生的場所。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 165,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  本を 読みます。",
    options: [
        {text: "寝る前に", explanation: "正確答案：正確句子：私は寝る前に本を読みます。\n中文翻譯：我睡覺前看書。"},
        {text: "本を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "読みます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 167,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ともだち",
    options: [
        {text: "友達", explanation: "正確答案：ともだち的漢字是「友達」，意思是朋友。\n中文翻譯：朋友"},
        {text: "友だち", explanation: "錯誤：這是混合寫法，但通常用「友達」。\n中文翻譯：朋友"},
        {text: "共達", explanation: "錯誤：「共」讀音是「とも」但意思不對。\n中文翻譯：朋友"},
        {text: "知達", explanation: "錯誤：這個詞不存在。\n中文翻譯：朋友"}
    ],
    correctAnswer: 0
},
{
    id: 168,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは とても（ ）です。",
    options: [
        {text: "あまい", explanation: "正確答案：句意：這個蛋糕很甜。\n中文翻譯：這個蛋糕很甜。"},
        {text: "からい", explanation: "錯誤：からい（辣的）不用於形容蛋糕。\n中文翻譯：這個蛋糕很辣（語意不當）。"},
        {text: "しおからい", explanation: "錯誤：しおからい（鹹的）不用於形容蛋糕。\n中文翻譯：這個蛋糕很鹹（語意不當）。"},
        {text: "にがい", explanation: "錯誤：にがい（苦的）不用於形容蛋糕。\n中文翻譯：這個蛋糕很苦（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 169,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎日 7時間（ ）寝ます。",
    options: [
        {text: "ぐらい", explanation: "正確答案：句意：我每天大概睡7小時（「ぐらい」表示大約）。\n中文翻譯：我每天大概睡7小時。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定，與句意不符。\n中文翻譯：我每天只睡7小時（語意不同）。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我每天從7小時睡（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我每天睡到7小時（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 170,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "彼は 頭が いいです。",
    options: [
        {text: "彼は 勉強が よく できます。", explanation: "正確答案：「頭がいい」和「勉強がよくできる」意思相近。\n中文翻譯：他很聰明。"},
        {text: "彼は 背が 高いです。", explanation: "錯誤：背が高い（個子高）與聰明無關。\n中文翻譯：他個子很高。"},
        {text: "彼は 力が 強いです。", explanation: "錯誤：力が強い（力氣大）與聰明無關。\n中文翻譯：他力氣很大。"},
        {text: "彼は 足が 速いです。", explanation: "錯誤：足が速い（跑得快）與聰明無關。\n中文翻譯：他跑得很快。"}
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
    id: 172,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "がっこう",
    options: [
        {text: "学校", explanation: "正確答案：がっこう的漢字是「学校」，意思是學校。\n中文翻譯：學校"},
        {text: "学行", explanation: "錯誤：「行」讀音是「こう」但意思不對。\n中文翻譯：學校"},
        {text: "楽校", explanation: "錯誤：「楽」讀音是「がく」但意思不對。\n中文翻譯：學校"},
        {text: "学校", explanation: "錯誤：簡體字，日文不適用。\n中文翻譯：學校"}
    ],
    correctAnswer: 0
},
{
    id: 173,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は（ ）から、すぐに できます。",
    options: [
        {text: "かんたん", explanation: "正確答案：句意：這個問題很簡單，所以馬上就能做。\n中文翻譯：因為這個問題很簡單，所以馬上就能做。"},
        {text: "ふくざつ", explanation: "錯誤：ふくざつ（複雜的）與「すぐにできる」矛盾。\n中文翻譯：因為這個問題很複雜，所以馬上就能做（語意矛盾）。"},
        {text: "むずかしい", explanation: "錯誤：むずかしい（困難的）與「すぐにできる」矛盾。\n中文翻譯：因為這個問題很難，所以馬上就能做（語意矛盾）。"},
        {text: "たいへん", explanation: "錯誤：たいへん（辛苦的）與「すぐにできる」矛盾。\n中文翻譯：因為這個問題很辛苦，所以馬上就能做（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 174,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂（「に」表示對象）。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 175,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  音楽を 聞きます。",
    options: [
        {text: "歩くとき", explanation: "正確答案：正確句子：私は歩くとき音楽を聞きます。\n中文翻譯：我走路時聽音樂。"},
        {text: "音楽を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "聞きます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 177,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "せんせい",
    options: [
        {text: "先生", explanation: "正確答案：せんせい的漢字是「先生」，意思是老師。\n中文翻譯：老師"},
        {text: "先制", explanation: "錯誤：「制」讀音是「せい」但意思不對。\n中文翻譯：老師"},
        {text: "千生", explanation: "錯誤：「千」讀音是「せん」但意思不對。\n中文翻譯：老師"},
        {text: "専生", explanation: "錯誤：這個詞不存在。\n中文翻譯：老師"}
    ],
    correctAnswer: 0
},
{
    id: 178,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道は（ ）から、気を つけて ください。",
    options: [
        {text: "あぶない", explanation: "正確答案：句意：這條路很危險，請小心。\n中文翻譯：因為這條路很危險，請小心。"},
        {text: "あんぜん", explanation: "錯誤：あんぜん（安全的）與「気をつけて」矛盾。\n中文翻譯：因為這條路很安全，請小心（語意矛盾）。"},
        {text: "べんり", explanation: "錯誤：べんり（方便的）與「気をつけて」矛盾。\n中文翻譯：因為這條路很方便，請小心（語意矛盾）。"},
        {text: "きれい", explanation: "錯誤：きれい（乾淨的）與「気をつけて」矛盾。\n中文翻譯：因為這條路很乾淨，請小心（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 179,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語が 少し（ ）話せます。",
    options: [
        {text: "だけ", explanation: "正確答案：句意：我只會說一點日語（「だけ」表示限定）。\n中文翻譯：我只會說一點日語。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從一點日語會說（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到一點日語會說（語意矛盾）。"},
        {text: "より", explanation: "錯誤：「より」表示比較。\n中文翻譯：我比一點日語會說（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 180,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 町は にぎやかです。",
    options: [
        {text: "この 町は 人が たくさん います。", explanation: "正確答案：「にぎやか」和「人がたくさんいる」意思相近。\n中文翻譯：這個城鎮很熱鬧。"},
        {text: "この 町は 静かです。", explanation: "錯誤：静か（安靜的）與熱鬧相反。\n中文翻譯：這個城鎮很安靜。"},
        {text: "この 町は きれいです。", explanation: "錯誤：きれい（乾淨的）與熱鬧無關。\n中文翻譯：這個城鎮很乾淨。"},
        {text: "この 町は 大きいです。", explanation: "錯誤：大きい（大的）與熱鬧無直接關係。\n中文翻譯：這個城鎮很大。"}
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
    id: 182,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "びょうき",
    options: [
        {text: "病気", explanation: "正確答案：びょうき的漢字是「病気」，意思是生病。\n中文翻譯：生病"},
        {text: "病気", explanation: "錯誤：「気」的寫法不正確。\n中文翻譯：生病"},
        {text: "病機", explanation: "錯誤：「機」讀音是「き」但意思不對。\n中文翻譯：生病"},
        {text: "美容機", explanation: "錯誤：這個詞不存在。\n中文翻譯：生病"}
    ],
    correctAnswer: 0
},
{
    id: 183,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは 軽くて（ ）です。",
    options: [
        {text: "べんり", explanation: "正確答案：句意：這個包包又輕又方便。\n中文翻譯：這個包包又輕又方便。"},
        {text: "ふべん", explanation: "錯誤：ふべん（不方便）與「軽くて」矛盾。\n中文翻譯：這個包包又輕又不方便（語意矛盾）。"},
        {text: "おもい", explanation: "錯誤：おもい（重的）與「軽くて」矛盾。\n中文翻譯：這個包包又輕又重（語意矛盾）。"},
        {text: "たかい", explanation: "錯誤：たかい（貴的）與重量無直接關係。\n中文翻譯：這個包包又輕又貴（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 184,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは あの りんご（ ）おいしいです。",
    options: [
        {text: "より", explanation: "正確答案：句意：這個蘋果比那個蘋果好吃（「より」表示比較）。\n中文翻譯：這個蘋果比那個蘋果好吃。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：這個蘋果從那個蘋果好吃（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：這個蘋果到那個蘋果好吃（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：這個蘋果只那個蘋果好吃（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 185,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  テニスを します。",
    options: [
        {text: "友達と", explanation: "正確答案：正確句子：私は友達とテニスをします。\n中文翻譯：我和朋友打網球。"},
        {text: "テニスを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "します", explanation: "錯誤：缺少對象表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 187,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "でんしゃ",
    options: [
        {text: "電車", explanation: "正確答案：でんしゃ的漢字是「電車」，意思是電車。\n中文翻譯：電車"},
        {text: "伝車", explanation: "錯誤：「伝」讀音是「でん」但意思不對。\n中文翻譯：電車"},
        {text: "電社", explanation: "錯誤：「社」讀音是「しゃ」但意思不對。\n中文翻譯：電車"},
        {text: "点車", explanation: "錯誤：這個詞不存在。\n中文翻譯：電車"}
    ],
    correctAnswer: 0
},
{
    id: 188,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この スープは（ ）から、冷まして 飲んで ください。",
    options: [
        {text: "あつい", explanation: "正確答案：句意：這個湯很燙，請涼了再喝。\n中文翻譯：因為這個湯很燙，請涼了再喝。"},
        {text: "つめたい", explanation: "錯誤：つめたい（冷的）與「冷まして」矛盾。\n中文翻譯：因為這個湯很冷，請涼了再喝（語意矛盾）。"},
        {text: "あたたかい", explanation: "錯誤：あたたかい（溫暖的）與「冷まして」矛盾。\n中文翻譯：因為這個湯很溫暖，請涼了再喝（語意矛盾）。"},
        {text: "すずしい", explanation: "錯誤：すずしい（涼爽的）與「冷まして」矛盾。\n中文翻譯：因為這個湯很涼爽，請涼了再喝（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 189,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は コーヒー（ ）紅茶の ほうが 好きです。",
    options: [
        {text: "より", explanation: "正確答案：句意：我比起咖啡更喜歡紅茶（「より」表示比較）。\n中文翻譯：我比起咖啡更喜歡紅茶。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：我只咖啡更喜歡紅茶（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 190,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 本は つまらないです。",
    options: [
        {text: "この 本は おもしろく ありません。", explanation: "正確答案：「つまらない」和「おもしろくない」意思相近。\n中文翻譯：這本書很無聊。"},
        {text: "この 本は 高いです。", explanation: "錯誤：高い（貴的）與無聊無關。\n中文翻譯：這本書很貴。"},
        {text: "この 本は 古いです。", explanation: "錯誤：古い（舊的）與無聊無關。\n中文翻譯：這本書很舊。"},
        {text: "この 本は 重いです。", explanation: "錯誤：重い（重的）與無聊無關。\n中文翻譯：這本書很重。"}
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
    id: 192,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "やすみ",
    options: [
        {text: "休み", explanation: "正確答案：やすみ的漢字是「休み」，意思是休息。\n中文翻譯：休息"},
        {text: "安み", explanation: "錯誤：「安」讀音是「やす」但意思不對。\n中文翻譯：休息"},
        {text: "靖み", explanation: "錯誤：這個詞不存在。\n中文翻譯：休息"},
        {text: "休み", explanation: "錯誤：簡體字，日文不適用。\n中文翻譯：休息"}
    ],
    correctAnswer: 0
},
{
    id: 193,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 部屋は（ ）から、エアコンを つけて ください。",
    options: [
        {text: "あつい", explanation: "正確答案：句意：這個房間很熱，請開冷氣。\n中文翻譯：因為這個房間很熱，請開冷氣。"},
        {text: "さむい", explanation: "錯誤：さむい（冷的）與開冷氣矛盾。\n中文翻譯：因為這個房間很冷，請開冷氣（語意矛盾）。"},
        {text: "すずしい", explanation: "錯誤：すずしい（涼爽的）與開冷氣矛盾。\n中文翻譯：因為這個房間很涼爽，請開冷氣（語意矛盾）。"},
        {text: "あたたかい", explanation: "錯誤：あたたかい（溫暖的）與開冷氣矛盾。\n中文翻譯：因為這個房間很溫暖，請開冷氣（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 194,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語（ ）英語が 話せます。",
    options: [
        {text: "と", explanation: "正確答案：句意：我會說日語和英語（「と」表示並列）。\n中文翻譯：我會說日語和英語。"},
        {text: "や", explanation: "錯誤：「や」表示列舉，通常用於三個以上。\n中文翻譯：我會說日語和英語（較不自然）。"},
        {text: "か", explanation: "錯誤：「か」表示選擇。\n中文翻譯：我會說日語或英語（語意不同）。"},
        {text: "の", explanation: "錯誤：「の」表示所有格。\n中文翻譯：我會說日語的英語（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 195,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  映画を 見ます。",
    options: [
        {text: "時々", explanation: "正確答案：正確句子：私は時々映画を見ます。\n中文翻譯：我有時看電影。"},
        {text: "映画を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "見ます", explanation: "錯誤：缺少頻率表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 197,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "びじゅつかん",
    options: [
        {text: "美術館", explanation: "正確答案：びじゅつかん的漢字是「美術館」，意思是美術館。\n中文翻譯：美術館"},
        {text: "美塾館", explanation: "錯誤：「塾」讀音是「じゅく」但意思不對。\n中文翻譯：美術館"},
        {text: "微術館", explanation: "錯誤：「微」讀音是「び」但意思不對。\n中文翻譯：美術館"},
        {text: "美述館", explanation: "錯誤：這個詞不存在。\n中文翻譯：美術館"}
    ],
    correctAnswer: 0
},
{
    id: 198,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道は 夜（ ）あぶないです。",
    options: [
        {text: "は", explanation: "正確答案：句意：這條路晚上很危險（「は」表示主題）。\n中文翻譯：這條路晚上很危險。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這條路晚上很危險（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這條路晚上很危險（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤：「に」表示時間點。\n中文翻譯：這條路在晚上很危險（較不自然）。"}
    ],
    correctAnswer: 0
},
{
    id: 199,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは あまくて（ ）です。",
    options: [
        {text: "おいしい", explanation: "正確答案：句意：這個蛋糕又甜又好吃。\n中文翻譯：這個蛋糕又甜又好吃。"},
        {text: "おいしくて", explanation: "錯誤：て形不能直接結尾。\n中文翻譯：這個蛋糕又甜又好吃（文法錯誤）。"},
        {text: "おいしかった", explanation: "錯誤：過去形與現在描述不符。\n中文翻譯：這個蛋糕又甜又好吃（時態錯誤）。"},
        {text: "おいしく", explanation: "錯誤：く形不能直接結尾。\n中文翻譯：這個蛋糕又甜又好吃（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 200,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "彼女は 美人です。",
    options: [
        {text: "彼女は きれいです。", explanation: "正確答案：「美人」和「きれい」在表示漂亮時意思相近。\n中文翻譯：她是個美人。"},
        {text: "彼女は 元気です。", explanation: "錯誤：元気（有精神的）與漂亮無關。\n中文翻譯：她很有精神。"},
        {text: "彼女は 親切です。", explanation: "錯誤：親切（親切的）與漂亮無關。\n中文翻譯：她很親切。"},
        {text: "彼女は 若いです。", explanation: "錯誤：若い（年輕的）與漂亮無直接關係。\n中文翻譯：她很年輕。"}
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
    id: 202,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ともだち",
    options: [
        {text: "友達", explanation: "正確答案：ともだち的漢字是「友達」，意思是朋友。\n中文翻譯：朋友"},
        {text: "友だち", explanation: "錯誤：這是混合寫法，但通常用「友達」。\n中文翻譯：朋友"},
        {text: "共達", explanation: "錯誤：「共」讀音是「とも」但意思不對。\n中文翻譯：朋友"},
        {text: "知達", explanation: "錯誤：這個詞不存在。\n中文翻譯：朋友"}
    ],
    correctAnswer: 0
},
{
    id: 203,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この カメラは 高くて（ ）です。",
    options: [
        {text: "いい", explanation: "正確答案：句意：這個相機又貴又好。\n中文翻譯：這個相機又貴又好。"},
        {text: "よくて", explanation: "錯誤：て形不能直接結尾。\n中文翻譯：這個相機又貴又好（文法錯誤）。"},
        {text: "よかった", explanation: "錯誤：過去形與現在描述不符。\n中文翻譯：這個相機又貴又好（時態錯誤）。"},
        {text: "よく", explanation: "錯誤：く形不能直接結尾。\n中文翻譯：這個相機又貴又好（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 204,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎朝 6時（ ）起きます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我每天早上6點起床（「に」表示具體時間點）。\n中文翻譯：我每天早上6點起床。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 205,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  新聞を 読みます。",
    options: [
        {text: "朝ごはんの 後で", explanation: "正確答案：正確句子：私は朝ごはんの後で新聞を読みます。\n中文翻譯：我早餐後看報紙。"},
        {text: "新聞を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "読みます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 207,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はたらく",
    options: [
        {text: "働く", explanation: "正確答案：はたらく的漢字是「働く」，意思是工作。\n中文翻譯：工作"},
        {text: "労く", explanation: "錯誤：缺少「働」的左半部。\n中文翻譯：工作"},
        {text: "動く", explanation: "錯誤：「動く」讀音是「うごく」，意思也不同。\n中文翻譯：移動"},
        {text: "勤く", explanation: "錯誤：這個詞不存在。\n中文翻譯：工作"}
    ],
    correctAnswer: 0
},
{
    id: 208,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは（ ）から、どこにでも 持って 行けます。",
    options: [
        {text: "かるい", explanation: "正確答案：句意：這個包包很輕，所以哪裡都能帶去。\n中文翻譯：因為這個包包很輕，所以哪裡都能帶去。"},
        {text: "おもい", explanation: "錯誤：おもい（重的）與「どこにでも持って行ける」矛盾。\n中文翻譯：因為這個包包很重，所以哪裡都能帶去（語意矛盾）。"},
        {text: "大きい", explanation: "錯誤：大きい（大的）與輕重無直接關係。\n中文翻譯：因為這個包包很大，所以哪裡都能帶去（語意矛盾）。"},
        {text: "小さい", explanation: "錯誤：小さい（小的）與輕重無直接關係。\n中文翻譯：因為這個包包很小，所以哪裡都能帶去（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 209,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂（「に」表示對象）。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 210,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 町は 静かです。",
    options: [
        {text: "この 町は しずかです。", explanation: "正確答案：這是同一句話的假名寫法。\n中文翻譯：這個城鎮很安靜。"},
        {text: "この 町は にぎやかです。", explanation: "錯誤：にぎやか（熱鬧的）與安靜相反。\n中文翻譯：這個城鎮很熱鬧。"},
        {text: "この 町は 大きいです。", explanation: "錯誤：大きい（大的）與安靜無關。\n中文翻譯：這個城鎮很大。"},
        {text: "この 町は きれいです。", explanation: "錯誤：きれい（乾淨的）與安靜無關。\n中文翻譯：這個城鎮很乾淨。"}
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
    id: 212,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "かぐ",
    options: [
        {text: "家具", explanation: "正確答案：かぐ的漢字是「家具」，意思是家具。\n中文翻譯：家具"},
        {text: "家俱", explanation: "錯誤：「俱」是異體字，不常用。\n中文翻譯：家具"},
        {text: "可具", explanation: "錯誤：這個詞不存在。\n中文翻譯：家具"},
        {text: "家具", explanation: "錯誤：簡體字，日文不適用。\n中文翻譯：家具"}
    ],
    correctAnswer: 0
},
{
    id: 213,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは（ ）から、買いません。",
    options: [
        {text: "高い", explanation: "正確答案：句意：這個蘋果很貴，所以不買。\n中文翻譯：因為這個蘋果很貴，所以不買。"},
        {text: "安い", explanation: "錯誤：安い（便宜的）與「買いません」矛盾。\n中文翻譯：因為這個蘋果很便宜，所以不買（語意矛盾）。"},
        {text: "おいしい", explanation: "錯誤：おいしい（好吃的）與「買いません」矛盾。\n中文翻譯：因為這個蘋果很好吃，所以不買（語意矛盾）。"},
        {text: "大きい", explanation: "錯誤：大きい（大的）與價格無直接關係。\n中文翻譯：因為這個蘋果很大，所以不買（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 214,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語（ ）英語が 話せます。",
    options: [
        {text: "と", explanation: "正確答案：句意：我會說日語和英語（「と」表示並列）。\n中文翻譯：我會說日語和英語。"},
        {text: "や", explanation: "錯誤：「や」表示列舉，通常用於三個以上。\n中文翻譯：我會說日語和英語（較不自然）。"},
        {text: "か", explanation: "錯誤：「か」表示選擇。\n中文翻譯：我會說日語或英語（語意不同）。"},
        {text: "の", explanation: "錯誤：「の」表示所有格。\n中文翻譯：我會說日語的英語（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 215,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  音楽を 聞きます。",
    options: [
        {text: "歩くとき", explanation: "正確答案：正確句子：私は歩くとき音楽を聞きます。\n中文翻譯：我走路時聽音樂。"},
        {text: "音楽を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "聞きます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 217,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "とけい",
    options: [
        {text: "時計", explanation: "正確答案：とけい的漢字是「時計」，意思是時鐘。\n中文翻譯：時鐘"},
        {text: "時計", explanation: "錯誤：「計」的寫法不正確。\n中文翻譯：時鐘"},
        {text: "土計", explanation: "錯誤：「土」讀音是「と」但意思不對。\n中文翻譯：時鐘"},
        {text: "都計", explanation: "錯誤：這個詞不存在。\n中文翻譯：時鐘"}
    ],
    correctAnswer: 0
},
{
    id: 218,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは（ ）から、たくさん 食べられません。",
    options: [
        {text: "あまい", explanation: "正確答案：句意：這個蛋糕很甜，所以不能吃太多。\n中文翻譯：因為這個蛋糕很甜，所以不能吃太多。"},
        {text: "からい", explanation: "錯誤：からい（辣的）通常不用於蛋糕。\n中文翻譯：因為這個蛋糕很辣，所以不能吃太多（語意矛盾）。"},
        {text: "しおからい", explanation: "錯誤：しおからい（鹹的）通常不用於蛋糕。\n中文翻譯：因為這個蛋糕很鹹，所以不能吃太多（語意矛盾）。"},
        {text: "にがい", explanation: "錯誤：にがい（苦的）通常不用於蛋糕。\n中文翻譯：因為這個蛋糕很苦，所以不能吃太多（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 219,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂（「に」表示對象）。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 220,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 店は 安いです。",
    options: [
        {text: "この 店は 値段が 低いです。", explanation: "正確答案：「安い」和「値段が低い」意思相近。\n中文翻譯：這家店很便宜。"},
        {text: "この 店は 値段が 高いです。", explanation: "錯誤：値段が高い（價格高）與便宜相反。\n中文翻譯：這家店很貴。"},
        {text: "この 店は 品物が 少ないです。", explanation: "錯誤：品物が少ない（商品少）與便宜無關。\n中文翻譯：這家店的商品很少。"},
        {text: "この 店は 店員が 親切です。", explanation: "錯誤：店員が親切（店員親切）與便宜無關。\n中文翻譯：這家店的店員很親切。"}
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
    id: 222,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "でんわ",
    options: [
        {text: "電話", explanation: "正確答案：でんわ的漢字是「電話」，意思是電話。\n中文翻譯：電話"},
        {text: "電話", explanation: "錯誤：「話」的寫法不正確。\n中文翻譯：電話"},
        {text: "伝話", explanation: "錯誤：「伝」讀音是「でん」但意思不對。\n中文翻譯：電話"},
        {text: "電和", explanation: "錯誤：這個詞不存在。\n中文翻譯：電話"}
    ],
    correctAnswer: 0
},
{
    id: 223,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは（ ）から、どこにでも 持って 行けます。",
    options: [
        {text: "かるい", explanation: "正確答案：句意：這個包包很輕，所以哪裡都能帶去。\n中文翻譯：因為這個包包很輕，所以哪裡都能帶去。"},
        {text: "おもい", explanation: "錯誤：おもい（重的）與「どこにでも持って行ける」矛盾。\n中文翻譯：因為這個包包很重，所以哪裡都能帶去（語意矛盾）。"},
        {text: "大きい", explanation: "錯誤：大きい（大的）與輕重無直接關係。\n中文翻譯：因為這個包包很大，所以哪裡都能帶去（語意矛盾）。"},
        {text: "小さい", explanation: "錯誤：小さい（小的）與輕重無直接關係。\n中文翻譯：因為這個包包很小，所以哪裡都能帶去（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 224,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎朝 6時（ ）起きます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我每天早上6點起床（「に」表示具體時間點）。\n中文翻譯：我每天早上6點起床。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 225,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  新聞を 読みます。",
    options: [
        {text: "朝ごはんの 後で", explanation: "正確答案：正確句子：私は朝ごはんの後で新聞を読みます。\n中文翻譯：我早餐後看報紙。"},
        {text: "新聞を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "読みます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
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
    id: 227,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "はな",
    options: [
        {text: "花", explanation: "正確答案：はな的漢字是「花」，意思是花。\n中文翻譯：花"},
        {text: "鼻", explanation: "錯誤：「鼻」讀音也是「はな」但意思是鼻子。\n中文翻譯：鼻子"},
        {text: "華", explanation: "錯誤：「華」讀音是「はな」但較少單獨使用。\n中文翻譯：華麗"},
        {text: "端", explanation: "錯誤：「端」讀音是「はし」，意思也不同。\n中文翻譯：邊緣"}
    ],
    correctAnswer: 0
},
{
    id: 228,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは（ ）から、どこにでも 持って 行けます。",
    options: [
        {text: "かるい", explanation: "正確答案：句意：這個包包很輕，所以哪裡都能帶去。\n中文翻譯：因為這個包包很輕，所以哪裡都能帶去。"},
        {text: "おもい", explanation: "錯誤：おもい（重的）與「どこにでも持って行ける」矛盾。\n中文翻譯：因為這個包包很重，所以哪裡都能帶去（語意矛盾）。"},
        {text: "大きい", explanation: "錯誤：大きい（大的）與輕重無直接關係。\n中文翻譯：因為這個包包很大，所以哪裡都能帶去（語意矛盾）。"},
        {text: "小さい", explanation: "錯誤：小さい（小的）與輕重無直接關係。\n中文翻譯：因為這個包包很小，所以哪裡都能帶去（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 229,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂（「に」表示對象）。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 230,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 町は 静かです。",
    options: [
        {text: "この 町は しずかです。", explanation: "正確答案：這是同一句話的假名寫法。\n中文翻譯：這個城鎮很安靜。"},
        {text: "この 町は にぎやかです。", explanation: "錯誤：にぎやか（熱鬧的）與安靜相反。\n中文翻譯：這個城鎮很熱鬧。"},
        {text: "この 町は 大きいです。", explanation: "錯誤：大きい（大的）與安靜無關。\n中文翻譯：這個城鎮很大。"},
        {text: "この 町は きれいです。", explanation: "錯誤：きれい（乾淨的）與安靜無關。\n中文翻譯：這個城鎮很乾淨。"}
    ],
    correctAnswer: 0
},
// 文法題 (231-240)
{
    id: 231,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 昨日（ ）ばかりです。",
    options: [
        {text: "買った", explanation: "正確答案：句意：這本書是昨天剛買的（「たばかり」表示剛完成）。\n中文翻譯：這本書是昨天剛買的。"},
        {text: "買う", explanation: "錯誤：動詞原形不能接「ばかり」。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"},
        {text: "買って", explanation: "錯誤：て形不能接「ばかり」。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"},
        {text: "買い", explanation: "錯誤：ます形不能接「ばかり」。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 232,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここに 名前を（ ）ください。",
    options: [
        {text: "書いて", explanation: "正確答案：句意：請在這裡寫名字（「てください」表示請求）。\n中文翻譯：請在這裡寫名字。"},
        {text: "書く", explanation: "錯誤：動詞原形不能接「ください」。\n中文翻譯：請在這裡寫名字（文法錯誤）。"},
        {text: "書いた", explanation: "錯誤：過去形不能接「ください」。\n中文翻譯：請在這裡寫名字（文法錯誤）。"},
        {text: "書きます", explanation: "錯誤：ます形不能接「ください」。\n中文翻譯：請在這裡寫名字（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 233,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を（ ）あとで、寝て ください。",
    options: [
        {text: "飲んだ", explanation: "正確答案：句意：吃了這個藥之後請睡覺（「たあとで」表示之後）。\n中文翻譯：吃了這個藥之後請睡覺。"},
        {text: "飲む", explanation: "錯誤：動詞原形不能接「あとで」。\n中文翻譯：吃了這個藥之後請睡覺（文法錯誤）。"},
        {text: "飲んで", explanation: "錯誤：て形不能接「あとで」。\n中文翻譯：吃了這個藥之後請睡覺（文法錯誤）。"},
        {text: "飲み", explanation: "錯誤：ます形不能接「あとで」。\n中文翻譯：吃了這個藥之後請睡覺（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 234,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "もし 時間が（ ）、遊びに 来て ください。",
    options: [
        {text: "あったら", explanation: "正確答案：句意：如果有時間的話，請來玩（「たら」表示條件）。\n中文翻譯：如果有時間的話，請來玩。"},
        {text: "あると", explanation: "錯誤：「と」表示必然結果。\n中文翻譯：如果有時間的話，請來玩（文法錯誤）。"},
        {text: "あれば", explanation: "錯誤：「ば」文法正確但較不自然。\n中文翻譯：如果有時間的話，請來玩（較不自然）。"},
        {text: "あるなら", explanation: "錯誤：「なら」用法不恰當。\n中文翻譯：如果有時間的話，請來玩（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 235,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一時間（ ）終わりました。",
    options: [
        {text: "で", explanation: "正確答案：句意：這個工作一小時就結束了（「で」表示時間範圍）。\n中文翻譯：這個工作一小時就結束了。"},
        {text: "に", explanation: "錯誤：「に」表示具體時間點。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 236,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は コーヒー（ ）紅茶の ほうが 好きです。",
    options: [
        {text: "より", explanation: "正確答案：句意：我比起咖啡更喜歡紅茶（「より」表示比較）。\n中文翻譯：我比起咖啡更喜歡紅茶。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：我只咖啡更喜歡紅茶（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 237,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは 子ども（ ）持ちやすいです。",
    options: [
        {text: "に", explanation: "正確答案：句意：這個包包對孩子來說容易拿（「に」表示對象）。\n中文翻譯：這個包包對孩子來說容易拿。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這個包包對孩子來說容易拿（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這個包包對孩子來說容易拿（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這個包包對孩子來說容易拿（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 238,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここ（ ）車を 止めては いけません。",
    options: [
        {text: "に", explanation: "正確答案：句意：這裡不能停車（「に」表示存在的地點）。\n中文翻譯：這裡不能停車。"},
        {text: "で", explanation: "錯誤：「で」表示動作發生的場所。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 239,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語が 少し（ ）話せます。",
    options: [
        {text: "だけ", explanation: "正確答案：句意：我只會說一點日語（「だけ」表示限定）。\n中文翻譯：我只會說一點日語。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從一點日語會說（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到一點日語會說（語意矛盾）。"},
        {text: "より", explanation: "錯誤：「より」表示比較。\n中文翻譯：我比一點日語會說（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 240,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは あの りんご（ ）おいしいです。",
    options: [
        {text: "より", explanation: "正確答案：句意：這個蘋果比那個蘋果好吃（「より」表示比較）。\n中文翻譯：這個蘋果比那個蘋果好吃。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：這個蘋果從那個蘋果好吃（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：這個蘋果到那個蘋果好吃（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：這個蘋果只那個蘋果好吃（語意矛盾）。"}
    ],
    correctAnswer: 0
},

// 重組題 (241-250)
{
    id: 241,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  テレビを 見ます。",
    options: [
        {text: "いえで", explanation: "正確答案：正確句子：私はいえでテレビを見ます。\n中文翻譯：我在家看電視。"},
        {text: "テレビを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "見ます", explanation: "錯誤：缺少場所表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 242,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あさ ★  パンを たべます。",
    options: [
        {text: "いつも", explanation: "正確答案：正確句子：あさいつもパンをたべます。\n中文翻譯：早上總是吃麵包。"},
        {text: "パンを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "たべます", explanation: "錯誤：缺少頻率表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あさは", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 243,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "にほんご ★  べんきょうしています。",
    options: [
        {text: "まい日", explanation: "正確答案：正確句子：にほんごまい日べんきょうしています。\n中文翻譯：每天學習日文。"},
        {text: "べんきょうしています", explanation: "錯誤：缺少頻率表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "にほんごが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "まいにち", explanation: "錯誤：與正確答案相同，但用字不同。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 244,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "きょう ★  しごとが あります。",
    options: [
        {text: "たくさん", explanation: "正確答案：正確句子：きょうたくさんしごとがあります。\n中文翻譯：今天有很多工作。"},
        {text: "しごとが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あります", explanation: "錯誤：缺少數量表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "きょうは", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 245,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしの ★  にほんに すんでいます。",
    options: [
        {text: "いもうとは", explanation: "正確答案：正確句子：わたしのいもうとはにほんにすんでいます。\n中文翻譯：我的妹妹住在日本。"},
        {text: "にほんに", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "すんでいます", explanation: "錯誤：缺少主語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしのが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 246,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "駅の 前で ★ 待って ください。",
    options: [
        {text: "わたしを", explanation: "正確答案：正確句子：駅の前でわたしを待ってください。\n中文翻譯：請在車站前面等我。"},
        {text: "わたしが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしに", explanation: "錯誤：助詞不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしの", explanation: "錯誤：所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 247,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "明日は ★ 行きます。",
    options: [
        {text: "友達と", explanation: "正確答案：正確句子：明日は友達と行きます。\n中文翻譯：明天和朋友去。"},
        {text: "友達に", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達の", explanation: "錯誤：所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達を", explanation: "錯誤：受格不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 248,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  音楽を 聞きます。",
    options: [
        {text: "歩くとき", explanation: "正確答案：正確句子：私は歩くとき音楽を聞きます。\n中文翻譯：我走路時聽音樂。"},
        {text: "音楽を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "聞きます", explanation: "錯誤：缺少時間表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 249,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  映画を 見ます。",
    options: [
        {text: "時々", explanation: "正確答案：正確句子：私は時々映画を見ます。\n中文翻譯：我有時看電影。"},
        {text: "映画を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "見ます", explanation: "錯誤：缺少頻率表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 250,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  テニスを します。",
    options: [
        {text: "友達と", explanation: "正確答案：正確句子：私は友達とテニスをします。\n中文翻譯：我和朋友打網球。"},
        {text: "テニスを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "します", explanation: "錯誤：缺少對象表達。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},

// 近義詞題 (251-260)
{
    id: 251,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 本は おもしろいです。",
    options: [
        {text: "この 本は たのしいです。", explanation: "正確答案：「おもしろい」和「たのしい」在表示有趣時意思相近。\n中文翻譯：這本書很有趣。"},
        {text: "この 本は むずかしいです。", explanation: "錯誤：むずかしい（難しい）意思是困難的，與原句意思不同。\n中文翻譯：這本書很難。"},
        {text: "この 本は やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與原句意思不同。\n中文翻譯：這本書很便宜。"},
        {text: "この 本は ふるいです。", explanation: "錯誤：ふるい（古い）意思是舊的，與原句意思不同。\n中文翻譯：這本書很舊。"}
    ],
    correctAnswer: 0
},
{
    id: 252,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの ひとは とても しんせつです。",
    options: [
        {text: "あの ひとは とても やさしいです。", explanation: "正確答案：「親切」和「優しい」在表示親切時意思相近。\n中文翻譯：那個人很親切。"},
        {text: "あの ひとは とても きれいです。", explanation: "錯誤：きれい（綺麗）意思是漂亮的，與親切無關。\n中文翻譯：那個人很漂亮。"},
        {text: "あの ひとは とても げんきです。", explanation: "錯誤：げんき（元気）意思是有精神的，與親切無關。\n中文翻譯：那個人很有精神。"},
        {text: "あの ひとは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與親切無關。\n中文翻譯：那個人很有趣。"}
    ],
    correctAnswer: 0
},
{
    id: 253,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "きょうは とても いそがしいです。",
    options: [
        {text: "きょうは とても たくさん することが あります。", explanation: "正確答案：「忙しい」和「たくさんすることがある」意思相近。\n中文翻譯：今天很忙。"},
        {text: "きょうは とても ひまです。", explanation: "錯誤：ひま（暇）意思是空閒的，與忙相反。\n中文翻譯：今天很閒。"},
        {text: "きょうは とても たのしいです。", explanation: "錯誤：たのしい（楽しい）意思是快樂的，與忙無關。\n中文翻譯：今天很快樂。"},
        {text: "きょうは とても つかれました。", explanation: "錯誤：つかれた（疲れた）意思是累了，與忙無直接關係。\n中文翻譯：今天很累。"}
    ],
    correctAnswer: 0
},
{
    id: 254,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この しごとは かんたんです。",
    options: [
        {text: "この しごとは むずかしく ありません。", explanation: "正確答案：「簡単」和「難しくない」意思相近。\n中文翻譯：這個工作很簡單。"},
        {text: "この しごとは おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與簡單無關。\n中文翻譯：這個工作很有趣。"},
        {text: "この しごとは たいせつです。", explanation: "錯誤：たいせつ（大切）意思是重要的，與簡單無關。\n中文翻譯：這個工作很重要。"},
        {text: "この しごとは おそいです。", explanation: "錯誤：おそい（遅い）意思是慢的，與簡單無關。\n中文翻譯：這個工作很慢。"}
    ],
    correctAnswer: 0
},
{
    id: 255,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの みせは やすいです。",
    options: [
        {text: "あの みせは ねだんが ひくいです。", explanation: "正確答案：「安い」和「値段が低い」意思相近。\n中文翻譯：那家店很便宜。"},
        {text: "あの みせは おおきいです。", explanation: "錯誤：おおきい（大きい）意思是大的，與便宜無關。\n中文翻譯：那家店很大。"},
        {text: "あの みせは ちいさいです。", explanation: "錯誤：ちいさい（小さい）意思是小的，與便宜無關。\n中文翻譯：那家店很小。"},
        {text: "あの みせは あたらしいです。", explanation: "錯誤：あたらしい（新しい）意思是新的，與便宜無關。\n中文翻譯：那家店很新。"}
    ],
    correctAnswer: 0
},
{
    id: 256,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この ケーキは とても おいしいです。",
    options: [
        {text: "この ケーキは とても うまいです。", explanation: "正確答案：「おいしい」和「うまい」在表示好吃時意思相近。\n中文翻譯：這個蛋糕很好吃。"},
        {text: "この ケーキは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與原句意思不同。\n中文翻譯：這個蛋糕很便宜。"},
        {text: "この ケーキは とても からいです。", explanation: "錯誤：からい（辛い）意思是辣的，與原句意思不同。\n中文翻譯：這個蛋糕很辣。"},
        {text: "この ケーキは とても かるいです。", explanation: "錯誤：かるい（軽い）意思是輕的，與原句意思不同。\n中文翻譯：這個蛋糕很輕。"}
    ],
    correctAnswer: 0
},
{
    id: 257,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの ひとは とても ゆうめいです。",
    options: [
        {text: "あの ひとは とても しられています。", explanation: "正確答案：「有名」和「知られている」意思相近。\n中文翻譯：那個人很有名。"},
        {text: "あの ひとは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與有名無關。\n中文翻譯：那個人很有趣。"},
        {text: "あの ひとは とても かっこいいです。", explanation: "錯誤：かっこいい意思是帥氣的，與有名無關。\n中文翻譯：那個人很帥氣。"},
        {text: "あの ひとは とても げんきです。", explanation: "錯誤：げんき（元気）意思是有精神的，與有名無關。\n中文翻譯：那個人很有精神。"}
    ],
    correctAnswer: 0
},
{
    id: 258,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この ほんは とても むずかしいです。",
    options: [
        {text: "この ほんは とても わかりにくいです。", explanation: "正確答案：「難しい」和「分かりにくい」意思相近。\n中文翻譯：這本書很難。"},
        {text: "この ほんは とても おもしろいです。", explanation: "錯誤：おもしろい（面白い）意思是有趣的，與困難無關。\n中文翻譯：這本書很有趣。"},
        {text: "この ほんは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與困難無關。\n中文翻譯：這本書很便宜。"},
        {text: "この ほんは とても かるいです。", explanation: "錯誤：かるい（軽い）意思是輕的，與困難無關。\n中文翻譯：這本書很輕。"}
    ],
    correctAnswer: 0
},
{
    id: 259,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この しごとは すぐ おわります。",
    options: [
        {text: "この しごとは もうすぐ おわります。", explanation: "正確答案：「すぐ」和「もうすぐ」意思相近。\n中文翻譯：這個工作馬上就結束。"},
        {text: "この しごとは まだ おわりません。", explanation: "錯誤：まだ意思是還沒，與すぐ相反。\n中文翻譯：這個工作還沒結束。"},
        {text: "この しごとは ちょうど おわりました。", explanation: "錯誤：ちょうど意思是正好，與すぐ不同。\n中文翻譯：這個工作正好結束了。"},
        {text: "この しごとは もう おわりました。", explanation: "錯誤：もう意思是已經，與すぐ不同。\n中文翻譯：這個工作已經結束了。"}
    ],
    correctAnswer: 0
},
{
    id: 260,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの レストランは とても きれいです。",
    options: [
        {text: "あの レストランは とても せいけつです。", explanation: "正確答案：「きれい」和「清潔」在表示乾淨時意思相近。\n中文翻譯：那家餐廳很乾淨。"},
        {text: "あの レストランは とても おいしいです。", explanation: "錯誤：おいしい意思是好吃的，與乾淨無關。\n中文翻譯：那家餐廳很好吃。"},
        {text: "あの レストランは とても やすいです。", explanation: "錯誤：やすい（安い）意思是便宜的，與乾淨無關。\n中文翻譯：那家餐廳很便宜。"},
        {text: "あの レストランは とても おおきいです。", explanation: "錯誤：おおきい（大きい）意思是大的，與乾淨無關。\n中文翻譯：那家餐廳很大。"}
    ],
    correctAnswer: 0
},
{
    id: 261,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "彼は いつも （ ）を 守る。",
    options: [
        {text: "約束", explanation: "正確答案：「約束を守る」是常用搭配，意思是遵守承諾。\n中文翻譯：他總是遵守承諾。"},
        {text: "時間", explanation: "錯誤：「時間を守る」雖然文法正確，但語意不如「約束を守る」自然。\n中文翻譯：他總是遵守時間（較不自然）。"},
        {text: "規則", explanation: "錯誤：「規則を守る」意思是遵守規則，但與上下文不如「約束」貼切。\n中文翻譯：他總是遵守規則。"},
        {text: "秘密", explanation: "錯誤：「秘密を守る」意思是保守秘密，與句意不符。\n中文翻譯：他總是保守秘密。"}
    ],
    correctAnswer: 0
},
{
    id: 262,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を 飲んだら、（ ）が よく なった。",
    options: [
        {text: "気分", explanation: "正確答案：「気分が良くなる」是自然表達，意思是心情/身體狀況變好。\n中文翻譯：吃了這個藥後，身體狀況變好了。"},
        {text: "天気", explanation: "錯誤：「天気が良くなる」意思是天氣變好，與吃藥無關。\n中文翻譯：吃了這個藥後，天氣變好了（語意矛盾）。"},
        {text: "成績", explanation: "錯誤：「成績が良くなる」意思是成績變好，與吃藥無直接關係。\n中文翻譯：吃了這個藥後，成績變好了（語意矛盾）。"},
        {text: "色", explanation: "錯誤：「色が良くなる」意思不明確，不是自然表達。\n中文翻譯：吃了這個藥後，顏色變好了（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 263,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "彼女は ピアノが （ ）です。",
    options: [
        {text: "上手", explanation: "正確答案：「～が上手です」表示擅長某項技能。\n中文翻譯：她鋼琴彈得很好。"},
        {text: "大好き", explanation: "錯誤：「～が大好きです」表示很喜歡，但與技能無關。\n中文翻譯：她很喜歡鋼琴（意思不同）。"},
        {text: "高い", explanation: "錯誤：「～が高い」表示價格高或位置高，不適用於技能。\n中文翻譯：她的鋼琴很高（語意不當）。"},
        {text: "多い", explanation: "錯誤：「～が多い」表示數量多，不適用於技能。\n中文翻譯：她的鋼琴很多（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 264,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "図書館では （ ） 話しては いけません。",
    options: [
        {text: "大きな声で", explanation: "正確答案：圖書館禁止大聲說話是常識。\n中文翻譯：在圖書館不可以大聲說話。"},
        {text: "静かに", explanation: "錯誤：語意矛盾，靜靜地說話是被允許的。\n中文翻譯：在圖書館不可以安靜地說話（語意矛盾）。"},
        {text: "ゆっくり", explanation: "錯誤：慢慢說話在圖書館是被允許的。\n中文翻譯：在圖書館不可以慢慢地說話（語意矛盾）。"},
        {text: "英語で", explanation: "錯誤：說英語在圖書館通常不被禁止。\n中文翻譯：在圖書館不可以用英語說話（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 265,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は （ ） から、先生に 聞きましょう。",
    options: [
        {text: "難しい", explanation: "正確答案：因為問題難所以問老師是合理邏輯。\n中文翻譯：這個問題很難，所以問老師吧。"},
        {text: "易しい", explanation: "錯誤：如果問題簡單就不需要問老師。\n中文翻譯：這個問題很簡單，所以問老師吧（語意矛盾）。"},
        {text: "面白い", explanation: "錯誤：問題有趣與問老師無直接關係。\n中文翻譯：這個問題很有趣，所以問老師吧（語意矛盾）。"},
        {text: "短い", explanation: "錯誤：問題長短與問老師無直接關係。\n中文翻譯：這個問題很短，所以問老師吧（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 266,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は 昨日 ★ を 買いました。",
    options: [
        {text: "新しい かばん", explanation: "正確答案：正確句子：私は昨日新しいかばんを買いました。\n中文翻譯：我昨天買了新包包。"},
        {text: "かばんを", explanation: "錯誤：語序不正確，缺少形容詞修飾。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "買いました", explanation: "錯誤：缺少受詞。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：語序和助詞都錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 267,
    type: "reorder", 
    question: "★ に入る ものは どれですか。",
    sentence: "あの ★ 人は だれですか。",
    options: [
        {text: "赤い 服を 着ている", explanation: "正確答案：正確句子：あの赤い服を着ている人はだれですか。\n中文翻譯：那個穿紅衣服的人是誰？"},
        {text: "人は", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "だれです", explanation: "錯誤：缺少主語修飾。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あのが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 268,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "これは ★ 本です。",
    options: [
        {text: "友達に 借りた", explanation: "正確答案：正確句子：これは友達に借りた本です。\n中文翻譯：這是向朋友借的書。"},
        {text: "本です", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "これはが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "借りた", explanation: "錯誤：缺少借的對象。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 269,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "台風で ★ しまいました。",
    options: [
        {text: "電車が 止まって", explanation: "正確答案：正確句子：台風で電車が止まってしまいました。\n中文翻譯：因為颱風，電車停駛了。"},
        {text: "しまいました", explanation: "錯誤：缺少主語和動詞。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "台風が", explanation: "錯誤：助詞和語序錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "止まって", explanation: "錯誤：缺少主語。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 270,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★ ことが あります。",
    options: [
        {text: "日本へ 行った", explanation: "正確答案：正確句子：私は日本へ行ったことがあります。\n中文翻譯：我去過日本。"},
        {text: "ことが", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あります", explanation: "錯誤：缺少經驗內容。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 271,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "田中さんへ\nお元気ですか。私は 先週 京都へ 旅行に 行きました。京都は とても（ ）町です。たくさん お寺や 神社が あります。",
    options: [
        {text: "きれいな", explanation: "正確答案：形容京都的美麗很恰當。\n中文翻譯：京都是個很漂亮的城市。"},
        {text: "大きい", explanation: "錯誤：京都雖然不小，但重點不在大小。\n中文翻譯：京都是個很大的城市（較不貼切）。"},
        {text: "にぎやかな", explanation: "錯誤：京都以安靜古都聞名。\n中文翻譯：京都是個很熱鬧的城市（不符合事實）。"},
        {text: "あたらしい", explanation: "錯誤：京都是古都，不適合用「新」。\n中文翻譯：京都是個很新的城市（不符合事實）。"}
    ],
    correctAnswer: 0
},
{
    id: 272,
    type: "grammar", 
    question: "（ ）に なにを いれますか。",
    sentence: "特に 金閣寺が（ ）です。また、京都の 食べ物も おいしかったです。",
    options: [
        {text: "すばらしい", explanation: "正確答案：形容金閣寺的壯麗很恰當。\n中文翻譯：特別是金閣寺很壯麗。"},
        {text: "高い", explanation: "錯誤：金閣寺不以高度聞名。\n中文翻譯：特別是金閣寺很高（不貼切）。"},
        {text: "古い", explanation: "錯誤：雖然是古蹟，但重點在美麗。\n中文翻譯：特別是金閣寺很古老（較不貼切）。"},
        {text: "小さい", explanation: "錯誤：金閣寺不算小。\n中文翻譯：特別是金閣寺很小（不符合事實）。"}
    ],
    correctAnswer: 0
},
{
    id: 273,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "今度 一緒に（ ）ませんか。\nでは、また。",
    options: [
        {text: "行き", explanation: "正確答案：「行きませんか」是邀請的委婉說法。\n中文翻譯：下次要不要一起去？"},
        {text: "来", explanation: "錯誤：對收信人用「来」不禮貌。\n中文翻譯：下次要不要一起來（不恰當）。"},
        {text: "食べ", explanation: "錯誤：上下文是旅行邀請，不是吃飯。\n中文翻譯：下次要不要一起吃（語意不符）。"},
        {text: "見", explanation: "錯誤：單獨「見」意思不明確。\n中文翻譯：下次要不要一起看（語意不明）。"}
    ],
    correctAnswer: 0
},
{
    id: 274,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎日 日本語を 勉強しています。でも、なかなか（ ）なりません。",
    options: [
        {text: "上手に", explanation: "正確答案：表示進步的困難。\n中文翻譯：但是很難變好。"},
        {text: "大きく", explanation: "錯誤：不用於形容技能進步。\n中文翻譯：但是很難變大（語意不當）。"},
        {text: "早く", explanation: "錯誤：雖然可說進步快慢，但不如「上手」自然。\n中文翻譯：但是很難變快（較不自然）。"},
        {text: "多く", explanation: "錯誤：不用於形容技能。\n中文翻譯：但是很難變多（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 275,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "特に 聞く ことと 話す ことが（ ）です。\nでも、あきらめずに 勉強しています。",
    options: [
        {text: "難しい", explanation: "正確答案：聽和說確實是日語學習的難點。\n中文翻譯：特別是聽和說很難。"},
        {text: "易しい", explanation: "錯誤：與前文矛盾。\n中文翻譯：特別是聽和說很簡單（語意矛盾）。"},
        {text: "楽しい", explanation: "錯誤：雖然可能有趣，但與困難的上下文不符。\n中文翻譯：特別是聽和說很有趣（語意矛盾）。"},
        {text: "短い", explanation: "錯誤：不適用於技能難易。\n中文翻譯：特別是聽和說很短（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 276,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この レストランは サービスが （ ）です。",
    options: [
        {text: "親切", explanation: "正確答案：「サービスが親切」表示服務態度親切。\n中文翻譯：這家餐廳的服務很親切。"},
        {text: "元気", explanation: "錯誤：「サービスが元気」意思不通。\n中文翻譯：這家餐廳的服務很有精神（語意不當）。"},
        {text: "便利", explanation: "錯誤：「サービスが便利」意思不通。\n中文翻譯：這家餐廳的服務很方便（語意不當）。"},
        {text: "安全", explanation: "錯誤：「サービスが安全」意思不通。\n中文翻譯：這家餐廳的服務很安全（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 277,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "試験の 前は よく （ ）を します。",
    options: [
        {text: "復習", explanation: "正確答案：「復習をする」是考前常見的學習活動。\n中文翻譯：考試前經常複習。"},
        {text: "掃除", explanation: "錯誤：掃除與考試無直接關係。\n中文翻譯：考試前經常打掃（語意不當）。"},
        {text: "料理", explanation: "錯誤：料理與考試無直接關係。\n中文翻譯：考試前經常做菜（語意不當）。"},
        {text: "旅行", explanation: "錯誤：旅行與考試準備矛盾。\n中文翻譯：考試前經常旅行（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 278,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道は 夜 （ ） あぶないです。",
    options: [
        {text: "は", explanation: "正確答案：「夜は」表示晚上的主題。\n中文翻譯：這條路晚上很危險。"},
        {text: "に", explanation: "錯誤：雖然文法可通，但不如「は」自然。\n中文翻譯：這條路在晚上很危險（較不自然）。"},
        {text: "で", explanation: "錯誤：「夜で」用法不正確。\n中文翻譯：這條路用晚上很危險（文法錯誤）。"},
        {text: "を", explanation: "錯誤：「夜を」用法不正確。\n中文翻譯：這條路把晚上很危險（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 279,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "彼は スポーツが （ ）て、毎日 練習しています。",
    options: [
        {text: "好きだ", explanation: "正確答案：因為喜歡所以每天練習是合理邏輯。\n中文翻譯：他喜歡運動，所以每天練習。"},
        {text: "嫌いだ", explanation: "錯誤：討厭運動就不會每天練習。\n中文翻譯：他討厭運動，所以每天練習（語意矛盾）。"},
        {text: "難しい", explanation: "錯誤：困難與每天練習無直接關係。\n中文翻譯：他運動很難，所以每天練習（語意矛盾）。"},
        {text: "簡単だ", explanation: "錯誤：簡單就不需要每天練習。\n中文翻譯：他運動很簡單，所以每天練習（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 280,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは 軽くて （ ）です。",
    options: [
        {text: "便利", explanation: "正確答案：輕便的包包通常很方便。\n中文翻譯：這個包包很輕很方便。"},
        {text: "不便", explanation: "錯誤：輕便的包包不會不方便。\n中文翻譯：這個包包很輕很不方便（語意矛盾）。"},
        {text: "重い", explanation: "錯誤：與「軽くて」矛盾。\n中文翻譯：這個包包很輕很重（語意矛盾）。"},
        {text: "高い", explanation: "錯誤：輕重與價格無直接關係。\n中文翻譯：這個包包很輕很貴（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 281,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "雨が ふって いるから、（ ）を さして ください。",
    options: [
        {text: "傘", explanation: "正確答案：下雨要撐傘是常識。\n中文翻譯：因為在下雨，請撐傘。"},
        {text: "帽子", explanation: "錯誤：帽子不能擋雨。\n中文翻譯：因為在下雨，請戴帽子（不合理）。"},
        {text: "眼鏡", explanation: "錯誤：眼鏡與下雨無關。\n中文翻譯：因為在下雨，請戴眼鏡（不合理）。"},
        {text: "手袋", explanation: "錯誤：手套與下雨無關。\n中文翻譯：因為在下雨，請戴手套（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 282,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この レポートは 明日 （ ） なければ なりません。",
    options: [
        {text: "出さ", explanation: "正確答案：「出さなければなりません」表示必須提交。\n中文翻譯：這份報告明天必須提交。"},
        {text: "出し", explanation: "錯誤：文法不正確。\n中文翻譯：這份報告明天必須提交（文法錯誤）。"},
        {text: "出す", explanation: "錯誤：文法不正確。\n中文翻譯：這份報告明天必須提交（文法錯誤）。"},
        {text: "出せ", explanation: "錯誤：文法不正確。\n中文翻譯：這份報告明天必須提交（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 283,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この スープは 少し （ ） から、気を つけて 飲んで ください。",
    options: [
        {text: "熱い", explanation: "正確答案：熱湯需要小心喝。\n中文翻譯：這個湯有點燙，請小心喝。"},
        {text: "冷たい", explanation: "錯誤：冷湯不需要特別小心。\n中文翻譯：這個湯有點冷，請小心喝（不合理）。"},
        {text: "甘い", explanation: "錯誤：甜湯不需要特別小心。\n中文翻譯：這個湯有點甜，請小心喝（不合理）。"},
        {text: "辛い", explanation: "錯誤：辣湯不需要特別小心溫度。\n中文翻譯：這個湯有點辣，請小心喝（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 284,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★ を 見ました。",
    options: [
        {text: "きのう 映画", explanation: "正確答案：正確句子：私はきのう映画を見ました。\n中文翻譯：我昨天看了電影。"},
        {text: "映画を", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "見ました", explanation: "錯誤：缺少時間和受詞。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 285,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あの ★ 店で 買いました。",
    options: [
        {text: "大きい スーパー", explanation: "正確答案：正確句子：あの大きいスーパー店で買いました。\n中文翻譯：我在那家大超市買的。"},
        {text: "店で", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "買いました", explanation: "錯誤：缺少地點描述。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あのが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 286,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "これは ★ ケーキです。",
    options: [
        {text: "母が 作った", explanation: "正確答案：正確句子：これは母が作ったケーキです。\n中文翻譯：這是媽媽做的蛋糕。"},
        {text: "ケーキです", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "これはが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "作った", explanation: "錯誤：缺少動作主體。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 287,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "駅まで ★ 行きます。",
    options: [
        {text: "歩いて", explanation: "正確答案：正確句子：駅まで歩いて行きます。\n中文翻譯：走路到車站。"},
        {text: "行きます", explanation: "錯誤：缺少移動方式。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "駅が", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "までを", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 288,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★ います。",
    options: [
        {text: "日本語を 勉強して", explanation: "正確答案：正確句子：私は日本語を勉強しています。\n中文翻譯：我正在學習日語。"},
        {text: "います", explanation: "錯誤：缺少學習內容。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "勉強して", explanation: "錯誤：缺少學習對象。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 289,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "この ★ ください。",
    options: [
        {text: "手紙を 読んで", explanation: "正確答案：正確句子：この手紙を読んでください。\n中文翻譯：請讀這封信。"},
        {text: "ください", explanation: "錯誤：缺少請求內容。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "このが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "読んで", explanation: "錯誤：缺少受詞。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 290,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "彼は ★ 人です。",
    options: [
        {text: "とても 親切な", explanation: "正確答案：正確句子：彼はとても親切な人です。\n中文翻譯：他是個很親切的人。"},
        {text: "人です", explanation: "錯誤：語序不完整。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "彼が", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "親切な", explanation: "錯誤：缺少程度副詞。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 291,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★ たいです。",
    options: [
        {text: "日本へ 行き", explanation: "正確答案：正確句子：私は日本へ行きたいです。\n中文翻譯：我想去日本。"},
        {text: "たいです", explanation: "錯誤：缺少願望內容。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞使用錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "行き", explanation: "錯誤：缺少目的地。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 292,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ） 読めます。",
    options: [
        {text: "でも", explanation: "正確答案：「子どもでも読めます」表示連孩子都能讀。\n中文翻譯：這本書連孩子都能讀。"},
        {text: "しか", explanation: "錯誤：「子どもしか読めません」意思相反。\n中文翻譯：這本書只有孩子能讀（意思相反）。"},
        {text: "から", explanation: "錯誤：「子どもから読めます」意思不通。\n中文翻譯：這本書從孩子能讀（語意不當）。"},
        {text: "まで", explanation: "錯誤：「子どもまで読めます」用法不自然。\n中文翻譯：這本書到孩子能讀（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 293,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一時間（ ） 終わる でしょう。",
    options: [
        {text: "で", explanation: "正確答案：「一時間で」表示在時間內完成。\n中文翻譯：這個工作一小時內應該能完成。"},
        {text: "に", explanation: "錯誤：「一時間に」表示具體時間點。\n中文翻譯：這個工作在一小時應該能完成（較不自然）。"},
        {text: "を", explanation: "錯誤：「一時間を」用法不正確。\n中文翻譯：這個工作把一小時應該能完成（文法錯誤）。"},
        {text: "が", explanation: "錯誤：「一時間が」用法不正確。\n中文翻譯：這個工作一小時應該能完成（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 294,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "もし お金が（ ）、新しい パソコンを 買いたいです。",
    options: [
        {text: "あったら", explanation: "正確答案：「あったら」表示條件。\n中文翻譯：如果有錢的話，我想買新電腦。"},
        {text: "あると", explanation: "錯誤：「あると」表示必然結果。\n中文翻譯：如果有錢的話，我想買新電腦（文法錯誤）。"},
        {text: "あれば", explanation: "錯誤：文法正確但較不自然。\n中文翻譯：如果有錢的話，我想買新電腦（較不自然）。"},
        {text: "あるなら", explanation: "錯誤：用法不恰當。\n中文翻譯：如果有錢的話，我想買新電腦（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 295,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を 飲む（ ）、水を たくさん 飲んで ください。",
    options: [
        {text: "とき", explanation: "正確答案：「飲むとき」表示吃藥的時候。\n中文翻譯：吃這個藥的時候，請多喝水。"},
        {text: "あと", explanation: "錯誤：「飲んだあと」表示吃完藥後。\n中文翻譯：吃完這個藥後，請多喝水（意思不同）。"},
        {text: "まえ", explanation: "錯誤：「飲むまえ」表示吃藥前。\n中文翻譯：吃這個藥前，請多喝水（意思不同）。"},
        {text: "まで", explanation: "錯誤：「飲むまで」表示到吃藥為止。\n中文翻譯：到吃這個藥為止，請多喝水（意思不同）。"}
    ],
    correctAnswer: 0
},
{
    id: 296,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は コーヒー（ ） ミルクを 入れません。",
    options: [
        {text: "に", explanation: "正確答案：「コーヒーにミルクを入れる」是正確用法。\n中文翻譯：我在咖啡裡不加牛奶。"},
        {text: "で", explanation: "錯誤：「コーヒーで」表示手段或場所。\n中文翻譯：我用咖啡不加牛奶（語意不當）。"},
        {text: "を", explanation: "錯誤：「コーヒーを」表示受詞。\n中文翻譯：我把咖啡不加牛奶（語意不當）。"},
        {text: "が", explanation: "錯誤：「コーヒーが」表示主語。\n中文翻譯：我咖啡不加牛奶（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 297,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 映画は 一度（ ） 見た ことが あります。",
    options: [
        {text: "だけ", explanation: "正確答案：「一度だけ」表示只看過一次。\n中文翻譯：這部電影只看過一次。"},
        {text: "から", explanation: "錯誤：「一度から」意思不通。\n中文翻譯：這部電影從一次看過（語意不當）。"},
        {text: "まで", explanation: "錯誤：「一度まで」意思不通。\n中文翻譯：這部電影到一次看過（語意不當）。"},
        {text: "でも", explanation: "錯誤：「一度でも」表示即使一次，語氣不同。\n中文翻譯：這部電影即使一次看過（語氣不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 298,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は 子ども（ ） わかる はずです。",
    options: [
        {text: "でも", explanation: "正確答案：「子どもでも」表示連孩子都。\n中文翻譯：這個問題連孩子都應該懂。"},
        {text: "しか", explanation: "錯誤：「子どもしか」意思相反。\n中文翻譯：這個問題只有孩子應該懂（意思相反）。"},
        {text: "から", explanation: "錯誤：「子どもから」意思不通。\n中文翻譯：這個問題從孩子應該懂（語意不當）。"},
        {text: "まで", explanation: "錯誤：「子どもまで」用法不自然。\n中文翻譯：這個問題到孩子應該懂（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 299,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは 昨日（ ） ばかりです。",
    options: [
        {text: "作った", explanation: "正確答案：「作ったばかり」表示剛做好。\n中文翻譯：這個蛋糕是昨天剛做的。"},
        {text: "作る", explanation: "錯誤：動詞原形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作って", explanation: "錯誤：て形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作り", explanation: "錯誤：ます形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 300,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬は 食後に（ ）ください。",
    options: [
        {text: "飲んで", explanation: "正確答案：食後服藥是正確用法。\n中文翻譯：這個藥請在飯後服用。"},
        {text: "食べて", explanation: "錯誤：藥用「飲む」而不是「食べる」。\n中文翻譯：這個藥請在飯後吃（用詞不當）。"},
        {text: "見て", explanation: "錯誤：語意不合理。\n中文翻譯：這個藥請在飯後看（語意不當）。"},
        {text: "聞いて", explanation: "錯誤：語意不合理。\n中文翻譯：這個藥請在飯後聽（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 301,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "図書館では（ ）して 本を 読みます。",
    options: [
        {text: "静かに", explanation: "正確答案：圖書館需要保持安靜。\n中文翻譯：在圖書館安靜地讀書。"},
        {text: "賑やかに", explanation: "錯誤：圖書館不應該吵鬧。\n中文翻譯：在圖書館熱鬧地讀書（不合理）。"},
        {text: "早く", explanation: "錯誤：與讀書方式無直接關係。\n中文翻譯：在圖書館快速地讀書（較不自然）。"},
        {text: "遅く", explanation: "錯誤：與讀書方式無直接關係。\n中文翻譯：在圖書館慢慢地讀書（較不自然）。"}
    ],
    correctAnswer: 0
},
{
    id: 302,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は（ ）から、よく 考えて ください。",
    options: [
        {text: "難しい", explanation: "正確答案：困難的問題需要仔細思考。\n中文翻譯：這個問題很難，請仔細思考。"},
        {text: "易しい", explanation: "錯誤：簡單的問題不需要特別思考。\n中文翻譯：這個問題很簡單，請仔細思考（矛盾）。"},
        {text: "短い", explanation: "錯誤：長短與思考無直接關係。\n中文翻譯：這個問題很短，請仔細思考（不合理）。"},
        {text: "長い", explanation: "錯誤：長短與思考無直接關係。\n中文翻譯：這個問題很長，請仔細思考（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 303,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "電車の 中では 携帯電話を（ ）ください。",
    options: [
        {text: "使わないで", explanation: "正確答案：電車內通常要求不使用手機。\n中文翻譯：在電車內請不要使用手機。"},
        {text: "使って", explanation: "錯誤：與電車禮儀相反。\n中文翻譯：在電車內請使用手機（不合理）。"},
        {text: "買わないで", explanation: "錯誤：語意不合理。\n中文翻譯：在電車內請不要買手機（語意不當）。"},
        {text: "売らないで", explanation: "錯誤：語意不合理。\n中文翻譯：在電車內請不要賣手機（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 304,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道を（ ）に 行くと、駅が あります。",
    options: [
        {text: "まっすぐ", explanation: "正確答案：指示方向的常用表達。\n中文翻譯：沿著這條路直走就有車站。"},
        {text: "すぐ", explanation: "錯誤：「すぐ」表示時間上的立即。\n中文翻譯：沿著這條路立即走就有車站（語意不當）。"},
        {text: "ゆっくり", explanation: "錯誤：速度與方向無關。\n中文翻譯：沿著這條路慢慢地走就有車站（較不自然）。"},
        {text: "急に", explanation: "錯誤：表示突然，與方向無關。\n中文翻譯：沿著這條路突然走就有車站（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 305,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "試験の 前は 十分に（ ）を とって ください。",
    options: [
        {text: "睡眠", explanation: "正確答案：考試前需要充足睡眠。\n中文翻譯：考試前請充分睡眠。"},
        {text: "食事", explanation: "錯誤：雖然重要，但不如睡眠貼切。\n中文翻譯：考試前請充分吃飯（較不貼切）。"},
        {text: "運動", explanation: "錯誤：考試前運動不是主要建議。\n中文翻譯：考試前請充分運動（較不貼切）。"},
        {text: "勉強", explanation: "錯誤：與「休息」的概念相反。\n中文翻譯：考試前請充分學習（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 306,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この ボタンを（ ）と、ドアが 開きます。",
    options: [
        {text: "押す", explanation: "正確答案：按鈕用「押す」。\n中文翻譯：按這個按鈕，門就會開。"},
        {text: "引く", explanation: "錯誤：按鈕通常不用「引く」。\n中文翻譯：拉這個按鈕，門就會開（用詞不當）。"},
        {text: "触る", explanation: "錯誤：觸摸按鈕不一定會開門。\n中文翻譯：摸這個按鈕，門就會開（較不精確）。"},
        {text: "見る", explanation: "錯誤：看按鈕不會開門。\n中文翻譯：看這個按鈕，門就會開（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 307,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "熱が あるときは、お風呂に（ ）ほうが いいです。",
    options: [
        {text: "入らない", explanation: "正確答案：發燒時不宜泡澡。\n中文翻譯：發燒時最好不要泡澡。"},
        {text: "入る", explanation: "錯誤：與常識相反。\n中文翻譯：發燒時最好泡澡（不合理）。"},
        {text: "出ない", explanation: "錯誤：語意不合理。\n中文翻譯：發燒時最好不要出去（語意不當）。"},
        {text: "出る", explanation: "錯誤：語意不合理。\n中文翻譯：發燒時最好出去（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 308,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 今日中に（ ）なければ なりません。",
    options: [
        {text: "終わら", explanation: "正確答案：「終わらなければなりません」表示必須完成。\n中文翻譯：這個工作今天必須完成。"},
        {text: "終わり", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作今天必須完成（文法錯誤）。"},
        {text: "終わっ", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作今天必須完成（文法錯誤）。"},
        {text: "終わる", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作今天必須完成（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 309,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここで 写真を（ ）も いいですよ。",
    options: [
        {text: "撮って", explanation: "正確答案：「～てもいい」表示許可。\n中文翻譯：在這裡拍照也可以。"},
        {text: "撮る", explanation: "錯誤：動詞原形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "撮った", explanation: "錯誤：過去形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "撮り", explanation: "錯誤：ます形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 310,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "日本に（ ）前から、日本語を 勉強して いました。",
    options: [
        {text: "来る", explanation: "正確答案：「来る前」表示來之前。\n中文翻譯：來日本之前就在學日語了。"},
        {text: "来た", explanation: "錯誤：過去形不能接「前」。\n中文翻譯：來日本之前就在學日語了（文法錯誤）。"},
        {text: "来て", explanation: "錯誤：て形不能接「前」。\n中文翻譯：來日本之前就在學日語了（文法錯誤）。"},
        {text: "来", explanation: "錯誤：動詞原形不完整。\n中文翻譯：來日本之前就在學日語了（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 311,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ） わかる ように 書いて あります。",
    options: [
        {text: "でも", explanation: "正確答案：「子どもでも」表示連孩子都。\n中文翻譯：這本書寫得連孩子都能懂。"},
        {text: "しか", explanation: "錯誤：「子どもしか」意思相反。\n中文翻譯：這本書寫得只有孩子能懂（意思相反）。"},
        {text: "から", explanation: "錯誤：用法不當。\n中文翻譯：這本書從孩子能懂（語意不當）。"},
        {text: "まで", explanation: "錯誤：用法不當。\n中文翻譯：這本書到孩子能懂（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 312,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を 飲む（ ）、お酒を 飲まないで ください。",
    options: [
        {text: "あいだ", explanation: "正確答案：「飲むあいだ」表示服藥期間。\n中文翻譯：吃這個藥期間請不要喝酒。"},
        {text: "あと", explanation: "錯誤：「飲んだあと」表示服藥後。\n中文翻譯：吃完這個藥後請不要喝酒（意思不同）。"},
        {text: "まえ", explanation: "錯誤：「飲むまえ」表示服藥前。\n中文翻譯：吃這個藥前請不要喝酒（意思不同）。"},
        {text: "とき", explanation: "錯誤：「飲むとき」表示服藥時。\n中文翻譯：吃這個藥時請不要喝酒（意思較窄）。"}
    ],
    correctAnswer: 0
},
{
    id: 313,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一人で（ ）そうです。",
    options: [
        {text: "でき", explanation: "正確答案：「できそう」表示可能性能做到。\n中文翻譯：這個工作一個人好像能做到。"},
        {text: "する", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做（文法錯誤）。"},
        {text: "して", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做（文法錯誤）。"},
        {text: "した", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做了（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 314,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは 昨日（ ）ばかりです。",
    options: [
        {text: "作った", explanation: "正確答案：「作ったばかり」表示剛做好。\n中文翻譯：這個蛋糕是昨天剛做的。"},
        {text: "作る", explanation: "錯誤：動詞原形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作って", explanation: "錯誤：て形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作り", explanation: "錯誤：ます形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 315,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 問題は 子ども（ ） わかります。",
    options: [
        {text: "に", explanation: "正確答案：「子どもにわかる」表示對孩子來說能懂。\n中文翻譯：這個問題連孩子都懂。"},
        {text: "が", explanation: "錯誤：主語用法不當。\n中文翻譯：這個問題孩子懂（語意不當）。"},
        {text: "を", explanation: "錯誤：受詞用法不當。\n中文翻譯：這個問題把孩子懂（語意不當）。"},
        {text: "で", explanation: "錯誤：手段用法不當。\n中文翻譯：這個問題用孩子懂（語意不當）。"}
    ],
    correctAnswer: 0
},
{
    id: 316,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は あの 本（ ） おもしろいです。",
    options: [
        {text: "より", explanation: "正確答案：「より」表示比較。\n中文翻譯：這本書比那本書有趣。"},
        {text: "から", explanation: "錯誤：表示起點。\n中文翻譯：這本書從那本書有趣（語意不當）。"},
        {text: "まで", explanation: "錯誤：表示終點。\n中文翻譯：這本書到那本書有趣（語意不當）。"},
        {text: "だけ", explanation: "錯誤：表示限定。\n中文翻譯：這本書只那本書有趣（語意不當）。"}
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
    id: 322,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しんぶん",
    options: [
        {text: "新聞", explanation: "正確答案：しんぶん的漢字是「新聞」。\n中文翻譯：報紙"},
        {text: "新文", explanation: "錯誤：漢字組合錯誤。\n中文翻譯：報紙"},
        {text: "親聞", explanation: "錯誤：「親」字錯誤。\n中文翻譯：報紙"},
        {text: "神文", explanation: "錯誤：「神」字錯誤。\n中文翻譯：報紙"}
    ],
    correctAnswer: 0
},
{
    id: 323,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "ゆうびんきょく",
    options: [
        {text: "郵便局", explanation: "正確答案：ゆうびんきょく的漢字是「郵便局」。\n中文翻譯：郵局"},
        {text: "優便局", explanation: "錯誤：「優」字錯誤。\n中文翻譯：郵局"},
        {text: "友便局", explanation: "錯誤：「友」字錯誤。\n中文翻譯：郵局"},
        {text: "郵弁局", explanation: "錯誤：「弁」字錯誤。\n中文翻譯：郵局"}
    ],
    correctAnswer: 0
},
{
    id: 324,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "きょうしつ",
    options: [
        {text: "教室", explanation: "正確答案：きょうしつの漢字是「教室」。\n中文翻譯：教室"},
        {text: "教空", explanation: "錯誤：「空」字錯誤。\n中文翻譯：教室"},
        {text: "強室", explanation: "錯誤：「強」字錯誤。\n中文翻譯：教室"},
        {text: "京室", explanation: "錯誤：「京」字錯誤。\n中文翻譯：教室"}
    ],
    correctAnswer: 0
},
{
    id: 325,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "けんきゅう",
    options: [
        {text: "研究", explanation: "正確答案：けんきゅう的漢字是「研究」。\n中文翻譯：研究"},
        {text: "研求", explanation: "錯誤：「求」字錯誤。\n中文翻譯：研究"},
        {text: "検究", explanation: "錯誤：「検」字錯誤。\n中文翻譯：研究"},
        {text: "研急", explanation: "錯誤：「急」字錯誤。\n中文翻譯：研究"}
    ],
    correctAnswer: 0
},
{
    id: 326,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "しゅうり",
    options: [
        {text: "修理", explanation: "正確答案：しゅうりの漢字是「修理」。\n中文翻譯：修理"},
        {text: "修利", explanation: "錯誤：「利」字錯誤。\n中文翻譯：修理"},
        {text: "周理", explanation: "錯誤：「周」字錯誤。\n中文翻譯：修理"},
        {text: "収理", explanation: "錯誤：「収」字錯誤。\n中文翻譯：修理"}
    ],
    correctAnswer: 0
},
{
    id: 327,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この 本は おもしろいです。",
    options: [
        {text: "この 本は たのしいです。", explanation: "正確答案：「おもしろい」和「たのしい」在表示有趣時意思相近。\n中文翻譯：這本書很有趣。"},
        {text: "この 本は むずかしいです。", explanation: "錯誤：意思相反。\n中文翻譯：這本書很難。"},
        {text: "この 本は やすいです。", explanation: "錯誤：意思無關。\n中文翻譯：這本書很便宜。"},
        {text: "この 本は ふるいです。", explanation: "錯誤：意思無關。\n中文翻譯：這本書很舊。"}
    ],
    correctAnswer: 0
},
{
    id: 328,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの ひとは とても しんせつです。",
    options: [
        {text: "あの ひとは とても やさしいです。", explanation: "正確答案：「親切」和「優しい」意思相近。\n中文翻譯：那個人很親切。"},
        {text: "あの ひとは とても きれいです。", explanation: "錯誤：意思無關。\n中文翻譯：那個人很漂亮。"},
        {text: "あの ひとは とても げんきです。", explanation: "錯誤：意思無關。\n中文翻譯：那個人很有精神。"},
        {text: "あの ひとは とても おもしろいです。", explanation: "錯誤：意思無關。\n中文翻譯：那個人很有趣。"}
    ],
    correctAnswer: 0
},
{
    id: 329,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "きょうは とても いそがしいです。",
    options: [
        {text: "きょうは とても たくさん することが あります。", explanation: "正確答案：「忙しい」和「たくさんすることがある」意思相近。\n中文翻譯：今天很忙。"},
        {text: "きょうは とても ひまです。", explanation: "錯誤：意思相反。\n中文翻譯：今天很閒。"},
        {text: "きょうは とても たのしいです。", explanation: "錯誤：意思無關。\n中文翻譯：今天很快樂。"},
        {text: "きょうは とても つかれました。", explanation: "錯誤：結果可能相同但意思不同。\n中文翻譯：今天很累。"}
    ],
    correctAnswer: 0
},
{
    id: 330,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "この しごとは かんたんです。",
    options: [
        {text: "この しごとは むずかしく ありません。", explanation: "正確答案：「簡単」和「難しくない」意思相近。\n中文翻譯：這個工作很簡單。"},
        {text: "この しごとは おもしろいです。", explanation: "錯誤：意思無關。\n中文翻譯：這個工作很有趣。"},
        {text: "この しごとは たいせつです。", explanation: "錯誤：意思無關。\n中文翻譯：這個工作很重要。"},
        {text: "この しごとは おそいです。", explanation: "錯誤：意思無關。\n中文翻譯：這個工作很慢。"}
    ],
    correctAnswer: 0
},
{
    id: 331,
    type: "synonym",
    question: "______の ぶんと だいたい おなじ いみの ぶんが あります。",
    sentence: "あの みせは やすいです。",
    options: [
        {text: "あの みせは ねだんが ひくいです。", explanation: "正確答案：「安い」和「値段が低い」意思相近。\n中文翻譯：那家店很便宜。"},
        {text: "あの みせは おおきいです。", explanation: "錯誤：意思無關。\n中文翻譯：那家店很大。"},
        {text: "あの みせは ちいさいです。", explanation: "錯誤：意思無關。\n中文翻譯：那家店很小。"},
        {text: "あの みせは あたらしいです。", explanation: "錯誤：意思無關。\n中文翻譯：那家店很新。"}
    ],
    correctAnswer: 0
},
{
    id: 332,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  テレビを みます。",
    options: [
        {text: "いえで", explanation: "正確答案：正確句子：私はいえでテレビをみます。\n中文翻譯：我在家看電視。"},
        {text: "テレビを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "みます", explanation: "錯誤：缺少場所。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 333,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "あさ ★  パンを たべます。",
    options: [
        {text: "いつも", explanation: "正確答案：正確句子：あさいつもパンをたべます。\n中文翻譯：早上總是吃麵包。"},
        {text: "パンを", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "たべます", explanation: "錯誤：缺少頻率。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あさは", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 334,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "にほんご ★  べんきょうしています。",
    options: [
        {text: "まいにち", explanation: "正確答案：正確句子：にほんごまいにもべんきょうしています。\n中文翻譯：每天學習日文。"},
        {text: "べんきょうしています", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "にほんごが", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "まい日", explanation: "錯誤：表記不統一。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 335,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "きょう ★  しごとが あります。",
    options: [
        {text: "たくさん", explanation: "正確答案：正確句子：きょうたくさんしごとがあります。\n中文翻譯：今天有很多工作。"},
        {text: "しごとが", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "あります", explanation: "錯誤：缺少數量。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "きょうは", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 336,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "わたしの ★  にほんに すんでいます。",
    options: [
        {text: "いもうとは", explanation: "正確答案：正確句子：わたしのいもうとはにほんにすんでいます。\n中文翻譯：我的妹妹住在日本。"},
        {text: "にほんに", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "すんでいます", explanation: "錯誤：缺少主語。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしのが", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 337,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "駅の 前で ★ 待って ください。",
    options: [
        {text: "わたしを", explanation: "正確答案：正確句子：駅の前でわたしを待ってください。\n中文翻譯：請在車站前面等我。"},
        {text: "わたしが", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしに", explanation: "錯誤：助詞不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "わたしの", explanation: "錯誤：所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 338,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "明日は ★ 行きます。",
    options: [
        {text: "友達と", explanation: "正確答案：正確句子：明日は友達と行きます。\n中文翻譯：明天和朋友去。"},
        {text: "友達に", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達の", explanation: "錯誤：所有格不適用。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "友達を", explanation: "錯誤：受格不適合。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 339,
    type: "reorder",
    question: "★ に入る ものは どれですか。",
    sentence: "私は ★  音楽を 聞きます。",
    options: [
        {text: "歩くとき", explanation: "正確答案：正確句子：私は歩くとき音楽を聞きます。\n中文翻譯：我走路時聽音樂。"},
        {text: "音楽を", explanation: "錯誤：語序不正確。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "聞きます", explanation: "錯誤：缺少時間。\n中文翻譯：語序錯誤，無法形成正確句子。"},
        {text: "私はが", explanation: "錯誤：助詞錯誤。\n中文翻譯：語序錯誤，無法形成正確句子。"}
    ],
    correctAnswer: 0
},
{
    id: 340,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この 道は 夜（ ） あぶないです。",
    options: [
        {text: "は", explanation: "正確答案：「夜は」表示晚上的主題。\n中文翻譯：這條路晚上很危險。"},
        {text: "に", explanation: "錯誤：雖然文法可通，但不如「は」自然。\n中文翻譯：這條路在晚上很危險（較不自然）。"},
        {text: "で", explanation: "錯誤：「夜で」用法不正確。\n中文翻譯：這條路用晚上很危險（文法錯誤）。"},
        {text: "を", explanation: "錯誤：「夜を」用法不正確。\n中文翻譯：這條路把晚上很危險（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 341,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この スープは 少し（ ） から、気を つけて 飲んで ください。",
    options: [
        {text: "熱い", explanation: "正確答案：熱湯需要小心喝。\n中文翻譯：這個湯有點燙，請小心喝。"},
        {text: "冷たい", explanation: "錯誤：冷湯不需要特別小心。\n中文翻譯：這個湯有點冷，請小心喝（不合理）。"},
        {text: "甘い", explanation: "錯誤：甜湯不需要特別小心。\n中文翻譯：這個湯有點甜，請小心喝（不合理）。"},
        {text: "辛い", explanation: "錯誤：辣湯不需要特別小心溫度。\n中文翻譯：這個湯有點辣，請小心喝（不合理）。"}
    ],
    correctAnswer: 0
},
{
    id: 342,
    type: "vocabulary",
    question: "（ ）に なにを いれますか。",
    sentence: "この かばんは 軽くて （ ）です。",
    options: [
        {text: "便利", explanation: "正確答案：輕便的包包通常很方便。\n中文翻譯：這個包包很輕很方便。"},
        {text: "不便", explanation: "錯誤：輕便的包包不會不方便。\n中文翻譯：這個包包很輕很不方便（語意矛盾）。"},
        {text: "重い", explanation: "錯誤：與「軽くて」矛盾。\n中文翻譯：這個包包很輕很重（語意矛盾）。"},
        {text: "高い", explanation: "錯誤：輕重與價格無直接關係。\n中文翻譯：這個包包很輕很貴（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 343,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 薬を 飲む（ ）、お酒を 飲まないで ください。",
    options: [
        {text: "あいだ", explanation: "正確答案：「飲むあいだ」表示服藥期間。\n中文翻譯：吃這個藥期間請不要喝酒。"},
        {text: "あと", explanation: "錯誤：「飲んだあと」表示服藥後。\n中文翻譯：吃完這個藥後請不要喝酒（意思不同）。"},
        {text: "まえ", explanation: "錯誤：「飲むまえ」表示服藥前。\n中文翻譯：吃這個藥前請不要喝酒（意思不同）。"},
        {text: "とき", explanation: "錯誤：「飲むとき」表示服藥時。\n中文翻譯：吃這個藥時請不要喝酒（意思較窄）。"}
    ],
    correctAnswer: 0
},
{
    id: 344,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一人で（ ）そうです。",
    options: [
        {text: "でき", explanation: "正確答案：「できそう」表示可能性能做到。\n中文翻譯：這個工作一個人好像能做到。"},
        {text: "する", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做（文法錯誤）。"},
        {text: "して", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做（文法錯誤）。"},
        {text: "した", explanation: "錯誤：文法不正確。\n中文翻譯：這個工作一個人好像做了（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 345,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは 昨日（ ）ばかりです。",
    options: [
        {text: "作った", explanation: "正確答案：「作ったばかり」表示剛做好。\n中文翻譯：這個蛋糕是昨天剛做的。"},
        {text: "作る", explanation: "錯誤：動詞原形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作って", explanation: "錯誤：て形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"},
        {text: "作り", explanation: "錯誤：ます形不能接「ばかり」。\n中文翻譯：這個蛋糕是昨天剛做（文法錯誤）。"}
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
    id: 348,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "でんしゃ",
    options: [
        {text: "電車", explanation: "正確答案：でんしゃ的漢字是「電車」。\n中文翻譯：電車"},
        {text: "伝車", explanation: "錯誤：「伝」字錯誤。\n中文翻譯：電車"},
        {text: "電社", explanation: "錯誤：「社」字錯誤。\n中文翻譯：電車"},
        {text: "点車", explanation: "錯誤：「点」字錯誤。\n中文翻譯：電車"}
    ],
    correctAnswer: 0
},
{
    id: 349,
    type: "writing",
    question: "次の言葉の正しい漢字を選びなさい",
    kana: "としょかん",
    options: [
        {text: "図書館", explanation: "正確答案：としょかん的漢字是「図書館」。\n中文翻譯：圖書館"},
        {text: "図書舘", explanation: "錯誤：「舘」是舊字體。\n中文翻譯：圖書館"},
        {text: "図書官", explanation: "錯誤：「官」字錯誤。\n中文翻譯：圖書館"},
        {text: "図書管", explanation: "錯誤：「管」字錯誤。\n中文翻譯：圖書館"}
    ],
    correctAnswer: 0
},
{
    id: 350,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この レポートは あさって（ ） 出さなければ なりません。",
    options: [
        {text: "までに", explanation: "正確答案：「あさってまでに」表示後天為止的期限。\n中文翻譯：這份報告必須在後天之前提交。"},
        {text: "まで", explanation: "錯誤：「あさってまで」表示持續到後天。\n中文翻譯：這份報告必須持續提交到後天（語意不當）。"},
        {text: "から", explanation: "錯誤：「あさってから」表示從後天開始。\n中文翻譯：這份報告必須從後天開始提交（語意不當）。"},
        {text: "より", explanation: "錯誤：「あさってより」表示比後天，用於比較。\n中文翻譯：這份報告必須比後天提交（語意不當）。"}
    ],
    correctAnswer: 0
}
];

// 檔案結束