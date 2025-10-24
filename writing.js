// 日文N4測驗題庫 - writing 題型 (優化後，共 44 題不重複)
const writingQuestions = [
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
            {text: "選択", explanation: "錯誤：「選択」讀音是「せんたく」但意思是選擇，不是洗衣服。（同音異義陷阱）\n中文翻譯：選擇"},
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
            {text: "記念", explanation: "正確答案：きねんの漢字は「記念」，意思是紀念。\n中文翻譯：紀念"},
            {text: "祈念", explanation: "錯誤：「祈念」讀音是「きねん」但意思是祈禱，與紀念不同。（同音異義陷阱）\n中文翻譯：祈禱"},
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
            {text: "着物", explanation: "正確答案：きものの漢字は「着物」，意思是和服。\n中文翻譯：和服"},
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
            {text: "会社", explanation: "正確答案：かいしゃの漢字は「会社」，意思是公司。\n中文翻譯：公司"},
            {text: "會社", explanation: "錯誤：「會」是舊字體，現代日文使用「会」。\n中文翻譯：公司"},
            {text: "回社", explanation: "錯誤：「回」讀音是「かい」但意思不對，正確漢字是「会」。\n中文翻譯：公司"},
            {text: "開社", explanation: "錯誤：「開」讀音是「かい」但意思不對，正確漢字是「会」。\n中文翻譯：公司"}
        ],
        correctAnswer: 0
    },
    {
        id: 71,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "あんない",
        options: [
            {text: "案内", explanation: "正確答案：あんないの漢字は「案内」，意思是引導、介紹。\n中文翻譯：引導、介紹"},
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
            {text: "見物", explanation: "正確答案：けんぶつの漢字は「見物」，意思是觀光、參觀。\n中文翻譯：觀光、參觀"},
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
            {text: "終了", explanation: "正確答案：しゅうりょうの漢字は「終了」，意思是結束。\n中文翻譯：結束"},
            {text: "修了", explanation: "錯誤：「修了」讀音是「しゅうりょう」但意思是課程修完，與結束不同。（同音異義陷阱）\n中文翻譯：課程修完"},
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
            {text: "体育", explanation: "正確答案：たいいくの漢字は「体育」，意思是體育。\n中文翻譯：體育"},
            {text: "対育", explanation: "錯誤：「対」讀音是「たい」但意思不對，正確漢字是「体」。\n中文翻譯：體育"},
            {text: "体いく", explanation: "錯誤：這是漢字與假名的混合寫法，通常寫為「体育」。\n中文翻譯：體育"},
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
            {text: "発音", explanation: "正確答案：はつおんの漢字は「発音」，意思是發音。\n中文翻譯：發音"},
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
            {text: "料理", explanation: "正確答案：りょうりの漢字は「料理」，意思是料理。\n中文翻譯：料理"},
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
            {text: "習慣", explanation: "正確答案：しゅうかんの漢字は「習慣」，意思是習慣。\n中文翻譯：習慣"},
            {text: "週間", explanation: "錯誤：「週間」讀音是「しゅうかん」但意思是一週，不是習慣。（同音異義陷阱）\n中文翻譯：一週"},
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
            {text: "宿題", explanation: "正確答案：しゅくだいの漢字は「宿題」，意思是作業。\n中文翻譯：作業"},
            {text: "祝題", explanation: "錯誤：「祝」讀音是「しゅく」但意思不對，正確漢字是「宿」。\n中文翻譯：作業"},
            {text: "習題", explanation: "錯誤：「習題」意思是習題，且讀音不同。\n中文翻譯：習題"},
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
            {text: "禁煙", explanation: "正確答案：きんえんの漢字は「禁煙」，意思是禁煙。\n中文翻譯：禁煙"},
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
            {text: "経験", explanation: "正確答案：けいけんの漢字は「経験」，意思是經驗。\n中文翻譯：經驗"},
            {text: "形験", explanation: "錯誤：「形」讀音是「けい」但意思不對，正確漢字是「経」。\n中文翻譯：經驗"},
            {text: "経見", explanation: "錯誤：「見」讀音是「けん」但意思不對，正確漢字是「験」。\n中文翻譯：經驗"},
            {text: "景験", explanation: "錯誤：「景」讀音是「けい」但意思不對，正確漢字是「経」。\n中文翻譯：經驗"}
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
        id: 157,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "はな",
        options: [
            {text: "花", explanation: "正確答案：はな的漢字是「花」，意思是花。\n中文翻譯：花"},
            {text: "鼻", explanation: "錯誤：「鼻」讀音也是「はな」但意思是鼻子。（同音異義陷阱）\n中文翻譯：鼻子"},
            {text: "華", explanation: "錯誤：「華」讀音是「はな」但較少單獨使用。\n中文翻譯：華麗"},
            {text: "端", explanation: "錯誤：「端」讀音是「はし」，意思也不同。\n中文翻譯：邊緣"}
        ],
        correctAnswer: 0
    },
    {
        id: 162,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "かぞく",
        options: [
            {text: "家族", explanation: "正確答案：かぞくの漢字は「家族」，意思是家人。\n中文翻譯：家人"},
            {text: "家数", explanation: "錯誤：「数」讀音是「すう」但意思不對。\n中文翻譯：家人"},
            {text: "課族", explanation: "錯誤：「課」讀音是「か」但意思不對。\n中文翻譯：家人"},
            {text: "加属", explanation: "錯誤：這個詞不存在。\n中文翻譯：家人"}
        ],
        correctAnswer: 0
    },
    {
        id: 167,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "ともだち",
        options: [
            {text: "友達", explanation: "正確答案：ともだち的漢字は「友達」，意思是朋友。\n中文翻譯：朋友"},
            {text: "友だち", explanation: "錯誤：這是混合寫法，但通常用「友達」。\n中文翻譯：朋友"},
            {text: "共達", explanation: "錯誤：「共」讀音是「とも」但意思不對。\n中文翻譯：朋友"},
            {text: "知達", explanation: "錯誤：這個詞不存在。\n中文翻譯：朋友"}
        ],
        correctAnswer: 0
    },
    {
        id: 172,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "がっこう",
        options: [
            {text: "学校", explanation: "正確答案：がっこう的漢字は「学校」，意思是學校。\n中文翻譯：學校"},
            {text: "学行", explanation: "錯誤：「行」讀音是「こう」但意思不對。\n中文翻譯：學校"},
            {text: "楽校", explanation: "錯誤：「楽」讀音是「がく」但意思不對。\n中文翻譯：學校"},
            {text: "学校", explanation: "錯誤：簡體字，日文不適用。\n中文翻譯：學校"}
        ],
        correctAnswer: 0
    },
    {
        id: 177,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "せんせい",
        options: [
            {text: "先生", explanation: "正確答案：せんせい的漢字は「先生」，意思是老師。\n中文翻譯：老師"},
            {text: "先制", explanation: "錯誤：「制」讀音是「せい」但意思不對。\n中文翻譯：老師"},
            {text: "千生", explanation: "錯誤：「千」讀音是「せん」但意思不對。\n中文翻譯：老師"},
            {text: "専生", explanation: "錯誤：這個詞不存在。\n中文翻譯：老師"}
        ],
        correctAnswer: 0
    },
    {
        id: 182,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "びょうき",
        options: [
            {text: "病気", explanation: "正確答案：びょうき的漢字は「病気」，意思是生病。\n中文翻譯：生病"},
            {text: "病氣", explanation: "錯誤：「氣」是舊字體，現代日文使用「気」。\n中文翻譯：生病"},
            {text: "病機", explanation: "錯誤：「機」讀音是「き」但意思不對。\n中文翻譯：生病"},
            {text: "美容機", explanation: "錯誤：這個詞不存在。\n中文翻譯：生病"}
        ],
        correctAnswer: 0
    },
    {
        id: 187,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "でんしゃ",
        options: [
            {text: "電車", explanation: "正確答案：でんしゃ的漢字は「電車」，意思是電車。\n中文翻譯：電車"},
            {text: "伝車", explanation: "錯誤：「伝」讀音是「でん」但意思不對。\n中文翻譯：電車"},
            {text: "電社", explanation: "錯誤：「社」讀音是「しゃ」但意思不對。\n中文翻譯：電車"},
            {text: "点車", explanation: "錯誤：這個詞不存在。\n中文翻譯：電車"}
        ],
        correctAnswer: 0
    },
    {
        id: 192,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "やすみ",
        options: [
            {text: "休み", explanation: "正確答案：やすみ的漢字は「休み」，意思是休息。\n中文翻譯：休息"},
            {text: "安み", explanation: "錯誤：「安」讀音是「やす」但意思不對。\n中文翻譯：休息"},
            {text: "靖み", explanation: "錯誤：這個詞不存在。\n中文翻譯：休息"},
            {text: "休み", explanation: "錯誤：簡體字，日文不適用。\n中文翻譯：休息"}
        ],
        correctAnswer: 0
    },
    {
        id: 197,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "びじゅつかん",
        options: [
            {text: "美術館", explanation: "正確答案：びじゅつかん的漢字は「美術館」，意思是美術館。\n中文翻譯：美術館"},
            {text: "美塾館", explanation: "錯誤：「塾」讀音是「じゅく」但意思不對。\n中文翻譯：美術館"},
            {text: "微術館", explanation: "錯誤：「微」讀音是「び」但意思不對。\n中文翻譯：美術館"},
            {text: "美述館", explanation: "錯誤：這個詞不存在。\n中文翻譯：美術館"}
        ],
        correctAnswer: 0
    },
    {
        id: 207,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "はたらく",
        options: [
            {text: "働く", explanation: "正確答案：はたらく的漢字は「働く」，意思是工作。\n中文翻譯：工作"},
            {text: "労く", explanation: "錯誤：缺少「働」的左半部。\n中文翻譯：工作"},
            {text: "動く", explanation: "錯誤：「動く」讀音是「うごく」，意思也不同。\n中文翻譯：移動"},
            {text: "勤く", explanation: "錯誤：這個詞不存在。\n中文翻譯：工作"}
        ],
        correctAnswer: 0
    },
    {
        id: 212,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "かぐ",
        options: [
            {text: "家具", explanation: "正確答案：かぐ的漢字は「家具」，意思是家具。\n中文翻譯：家具"},
            {text: "家俱", explanation: "錯誤：「俱」是異體字，不常用。\n中文翻譯：家具"},
            {text: "可具", explanation: "錯誤：這個詞不存在。\n中文翻譯：家具"},
            {text: "家区", explanation: "錯誤：「区」讀音是「く」但意思不對，正確漢字是「具」。\n中文翻譯：家具"}
        ],
        correctAnswer: 0
    },
    {
        id: 217,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "とけい",
        options: [
            {text: "時計", explanation: "正確答案：とけい的漢字は「時計」，意思是時鐘。\n中文翻譯：時鐘"},
            {text: "時けい", explanation: "錯誤：這是漢字與假名的混合寫法，通常寫為「時計」。\n中文翻譯：時鐘"},
            {text: "土計", explanation: "錯誤：「土」讀音是「と」但意思不對。\n中文翻譯：時鐘"},
            {text: "都計", explanation: "錯誤：這個詞不存在。\n中文翻譯：時鐘"}
        ],
        correctAnswer: 0
    },
    // ID 222 (でんわ) 重複，替換為新的詞彙 (かいもの)
    {
        id: 222,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "かいもの",
        options: [
            {text: "買い物", explanation: "正確答案：かいものの漢字は「買い物」，意思是購物。\n中文翻譯：購物"},
            {text: "買物", explanation: "錯誤：「買」是單獨漢字，與後面的「物」搭配，通常用送假名「い」。\n中文翻譯：購物"},
            {text: "開物", explanation: "錯誤：「開」讀音是「かい」但意思不對，正確漢字是「買」。\n中文翻譯：購物"},
            {text: "買者", explanation: "錯誤：「者」讀音是「もの」但意思不對，正確漢字是「物」。\n中文翻譯：購物"}
        ],
        correctAnswer: 0
    },
    // ID 227 (はな) 重複，替換為新的詞彙 (ちかてつ)
    {
        id: 227,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "ちかてつ",
        options: [
            {text: "地下鉄", explanation: "正確答案：ちかてつの漢字は「地下鉄」，意思是地鐵。\n中文翻譯：地鐵"},
            {text: "近鉄", explanation: "錯誤：「近鉄」是公司名，讀音是「きんてつ」。\n中文翻譯：近鐵（公司名）"},
            {text: "地下哲", explanation: "錯誤：「哲」讀音是「てつ」但意思不對，正確漢字是「鉄」。\n中文翻譯：地鐵"},
            {text: "知下鉄", explanation: "錯誤：「知」讀音是「ち」但意思不對，正確漢字是「地」。\n中文翻譯：地鐵"}
        ],
        correctAnswer: 0
    },
    // ID 322 (しんぶん) 重複，替換為新的詞彙 (くるま)
    {
        id: 322,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "くるま",
        options: [
            {text: "車", explanation: "正確答案：くるま的漢字は「車」，意思是汽車。\n中文翻譯：汽車"},
            {text: "来馬", explanation: "錯誤：「馬」讀音是「ま」但意思不對，正確漢字是「車」。\n中文翻譯：汽車"},
            {text: "来間", explanation: "錯誤：「間」讀音是「ま」但意思不對。\n中文翻譯：汽車"},
            {text: "車", explanation: "錯誤：這是簡體字，日文不適用。\n中文翻譯：汽車"}
        ],
        correctAnswer: 0
    },
    // ID 323 (ゆうびんきょく) 重複，替換為新的詞彙 (およぐ)
    {
        id: 323,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "およぐ",
        options: [
            {text: "泳ぐ", explanation: "正確答案：およぐ的漢字は「泳ぐ」，意思是游泳。\n中文翻譯：游泳"},
            {text: "永ぐ", explanation: "錯誤：「永」讀音是「えい」或「なが」但意思不對，正確漢字是「泳」。\n中文翻譯：游泳"},
            {text: "泳く", explanation: "錯誤：送假名錯誤，正確送假名是「ぐ」。\n中文翻譯：游泳"},
            {text: "沖ぐ", explanation: "錯誤：「沖」讀音是「おき」但意思不對，正確漢字是「泳」。\n中文翻譯：游泳"}
        ],
        correctAnswer: 0
    },
    // ID 324 (きょうしつ) 重複，替換為新的詞彙 (あらう)
    {
        id: 324,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "あらう",
        options: [
            {text: "洗う", explanation: "正確答案：あらう的漢字は「洗う」，意思是清洗。\n中文翻譯：清洗"},
            {text: "荒う", explanation: "錯誤：「荒う」讀音是「あらう」但意思是粗野、亂來。\n中文翻譯：粗野"},
            {text: "洗う", explanation: "錯誤：送假名錯誤，正確送假名是「う」。\n中文翻譯：清洗"},
            {text: "清う", explanation: "錯誤：「清」讀音是「きよ」或「せい」但意思不對，正確漢字是「洗」。\n中文翻譯：清洗"}
        ],
        correctAnswer: 0
    },
    // ID 325 (けんきゅう) 重複，替換為新的詞彙 (つくる)
    {
        id: 325,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "つくる",
        options: [
            {text: "作る", explanation: "正確答案：つくる的漢字は「作る」，意思是製作、創造。\n中文翻譯：製作"},
            {text: "造る", explanation: "錯誤：「造る」讀音也是「つくる」，但指建造、大規模製作。（同音異義陷阱）\n中文翻譯：建造"},
            {text: "創る", explanation: "錯誤：「創る」讀音也是「つくる」，但指創立、創始。\n中文翻譯：創立"},
            {text: "作く", explanation: "錯誤：送假名錯誤，正確送假名是「る」。\n中文翻譯：製作"}
        ],
        correctAnswer: 0
    },
    // ID 326 (しゅうり) 重複，替換為新的詞彙 (しる)
    {
        id: 326,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "しる",
        options: [
            {text: "知る", explanation: "正確答案：しる的漢字は「知る」，意思是知道。\n中文翻譯：知道"},
            {text: "識る", explanation: "錯誤：「識る」是古語或強調識別。\n中文翻譯：識別"},
            {text: "志る", explanation: "錯誤：「志」讀音是「し」但意思不對，正確漢字是「知」。\n中文翻譯：知道"},
            {text: "智る", explanation: "錯誤：「智」讀音是「ち」或「ちえ」但意思不對，正確漢字是「知」。\n中文翻譯：知道"}
        ],
        correctAnswer: 0
    },
    // ID 348 (でんしゃ) 重複，替換為新的詞彙 (せんえん)
    {
        id: 348,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "せんえん",
        options: [
            {text: "千円", explanation: "正確答案：せんえん的漢字は「千円」，意思是一千日圓。\n中文翻譯：一千日圓"},
            {text: "先円", explanation: "錯誤：「先」讀音是「せん」但意思不對，正確漢字是「千」。\n中文翻譯：一千日圓"},
            {text: "千園", explanation: "錯誤：「園」讀音是「えん」但意思不對，正確漢字是「円」。\n中文翻譯：一千日圓"},
            {text: "専円", explanation: "錯誤：「専」讀音是「せん」但意思不對，正確漢字是「千」。\n中文翻譯：一千日圓"}
        ],
        correctAnswer: 0
    },
    // ID 349 (としょかん) 重複，替換為新的詞彙 (ごぜん)
    {
        id: 349,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "ごぜん",
        options: [
            {text: "午前", explanation: "正確答案：ごぜん的漢字は「午前」，意思是上午。\n中文翻譯：上午"},
            {text: "後善", explanation: "錯誤：「善」讀音是「ぜん」但意思不對，正確漢字是「前」。\n中文翻譯：上午"},
            {text: "五前", explanation: "錯誤：「五」讀音是「ご」但意思不對，正確漢字是「午」。\n中文翻譯：上午"},
            {text: "互前", explanation: "錯誤：「互」讀音是「ご」但意思不對，正確漢字是「午」。\n中文翻譯：上午"}
        ],
        correctAnswer: 0
    },
    // ID 356 (しっぱい) 重複，替換為新的詞彙 (らいねん)
    {
        id: 356,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "らいねん",
        options: [
            {text: "来年", explanation: "正確答案：らいねん的漢字是「来年」，意思是明年。\n中文翻譯：明年"},
            {text: "来念", explanation: "錯誤：「念」讀音是「ねん」但意思不對，正確漢字是「年」。\n中文翻譯：明年"},
            {text: "来年", explanation: "錯誤：「来」是舊字體，現代日文使用「来」。\n中文翻譯：明年"},
            {text: "雷年", explanation: "錯誤：「雷」讀音是「らい」但意思不對，正確漢字是「来」。\n中文翻譯：明年"}
        ],
        correctAnswer: 0
    },
    {
        id: 357,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "きんちょう",
        options: [
            {text: "緊張", explanation: "正確答案：きんちょう的漢字是「緊張」，意思是緊張。\n中文翻譯：緊張"},
            {text: "近調", explanation: "錯誤：「近調」讀音是「きんちょう」但意思不同。\n中文翻譯：近調"},
            {text: "禁張", explanation: "錯誤：「張」讀音是「ちょう」但意思不對，正確漢字是「緊」。\n中文翻譯：緊張"},
            {text: "筋張", explanation: "錯誤：「筋」讀音是「きん」但意思不對，正確漢字是「緊」。\n中文翻譯：緊張"}
        ],
        correctAnswer: 0
    },
    {
        id: 358,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "かんどう",
        options: [
            {text: "感動", explanation: "正確答案：かんどう的漢字是「感動」，意思是感動。\n中文翻譯：感動"},
            {text: "感道", explanation: "錯誤：「道」讀音是「どう」但意思不對，正確漢字是「動」。\n中文翻譯：感動"},
            {text: "関動", explanation: "錯誤：「関」讀音是「かん」但意思不對，正確漢字是「感」。\n中文翻譯：感動"},
            {text: "勘動", explanation: "錯誤：「勘」讀音是「かん」但意思不對，正確漢字是「感」。\n中文翻譯：感動"}
        ],
        correctAnswer: 0
    },
    {
        id: 359,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "めいわく",
        options: [
            {text: "迷惑", explanation: "正確答案：めいわく的漢字是「迷惑」，意思是困擾、麻煩。\n中文翻譯：困擾、麻煩"},
            {text: "明惑", explanation: "錯誤：「明」讀音是「めい」但意思不對，正確漢字是「迷」。\n中文翻譯：困擾、麻煩"},
            {text: "迷枠", explanation: "錯誤：「枠」讀音是「わく」但意思不對，正確漢字是「惑」。\n中文翻譯：困擾、麻煩"},
            {text: "名惑", explanation: "錯誤：「名」讀音是「めい」但意思不對，正確漢字是「迷」。\n中文翻譯：困擾、麻煩"}
        ],
        correctAnswer: 0
    },
    {
        id: 360,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "ふくしゅう",
        options: [
            {text: "復習", explanation: "正確答案：ふくしゅう的漢字是「復習」，意思是複習。\n中文翻譯：複習"},
            {text: "復修", explanation: "錯誤：「修」讀音是「しゅう」但意思不對，正確漢字是「習」。\n中文翻譯：複習"},
            {text: "複習", explanation: "錯誤：「複」讀音是「ふく」但意思不對，正確漢字是「復」。\n中文翻譯：複習"},
            {text: "復集", explanation: "錯誤：「集」讀音是「しゅう」但意思不對，正確漢字是「習」。\n中文翻譯：複習"}
        ],
        correctAnswer: 0
    },
    {
        id: 383,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "かんそう",
        options: [
            {text: "感想", explanation: "正確答案：かんそう的漢字是「感想」，意思是感想。\n中文翻譯：感想"},
            {text: "乾燥", explanation: "錯誤：「乾燥」讀音是「かんそう」但意思是乾燥。（同音異義陷阱）\n中文翻譯：乾燥"},
            {text: "感早", explanation: "錯誤：「早」讀音是「そう」但意思不對，正確漢字是「想」。\n中文翻譯：感想"},
            {text: "関想", explanation: "錯誤：「関」讀音是「かん」但意思不對，正確漢字是「感」。\n中文翻譯：感想"}
        ],
        correctAnswer: 0
    },
    // ID 384 (しゅうり) 重複，替換為新的詞彙 (しゅうまつ)
    {
        id: 384,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "しゅうまつ",
        options: [
            {text: "週末", explanation: "正確答案：しゅうまつ的漢字是「週末」，意思是週末。\n中文翻譯：週末"},
            {text: "終末", explanation: "錯誤：「終末」讀音是「しゅうまつ」但意思是末日、終結。（同音異義陷阱）\n中文翻譯：末日"},
            {text: "週末", explanation: "錯誤：這個詞不存在。\n中文翻譯：週末"},
            {text: "主末", explanation: "錯誤：「主」讀音是「しゅう」但意思不對，正確漢字是「週」。\n中文翻譯：週末"}
        ],
        correctAnswer: 0
    },
    {
        id: 392,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "しんぱい",
        options: [
            {text: "心配", explanation: "正確答案：しんぱい的漢字是「心配」，意思是擔心。\n中文翻譯：擔心"},
            {text: "新配", explanation: "錯誤：「新」讀音是「しん」但意思不對。\n中文翻譯：擔心"},
            {text: "心敗", explanation: "錯誤：「敗」讀音是「はい」但意思不對。\n中文翻譯：擔心"},
            {text: "神配", explanation: "錯誤：「神」讀音是「しん」但意思不對。\n中文翻譯：擔心"}
        ],
        correctAnswer: 0
    },
    // ID 399 (きんちょう) 重複，替換為新的詞彙 (りょこう)
    {
        id: 399,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "りょこう",
        options: [
            {text: "旅行", explanation: "正確答案：りょこう的漢字是「旅行」，意思是旅行。\n中文翻譯：旅行"},
            {text: "旅光", explanation: "錯誤：「光」讀音是「こう」但意思不對，正確漢字是「行」。\n中文翻譯：旅行"},
            {text: "料行", explanation: "錯誤：「料」讀音是「りょう」但意思不對，正確漢字是「旅」。\n中文翻譯：旅行"},
            {text: "量行", explanation: "錯誤：「量」讀音是「りょう」但意思不對，正確漢字是「旅」。\n中文翻譯：旅行"}
        ],
        correctAnswer: 0
    },
    // ID 400 (しゅうりょう) 重複，替換為新的詞彙 (じしん)
    {
        id: 400,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "じしん",
        options: [
            {text: "自信", explanation: "正確答案：じしん的漢字是「自信」，意思是自信心。\n中文翻譯：自信心"},
            {text: "地震", explanation: "錯誤：「地震」讀音也是「じしん」，但意思是地震。（同音異義陷阱）\n中文翻譯：地震"},
            {text: "自伸", explanation: "錯誤：「伸」讀音是「しん」但意思不對，正確漢字是「信」。\n中文翻譯：自信心"},
            {text: "自深", explanation: "錯誤：「深」讀音是「しん」但意思不對，正確漢字是「信」。\n中文翻譯：自信心"}
        ],
        correctAnswer: 0
    },
    {
        id: 401,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "きぼう",
        options: [
            {text: "希望", explanation: "正確答案：きぼう的漢字是「希望」，意思是希望。\n中文翻譯：希望"},
            {text: "企望", explanation: "錯誤：「企」讀音是「き」但意思不對。\n中文翻譯：希望"},
            {text: "希方", explanation: "錯誤：「方」讀音是「ほう」但意思不對。\n中文翻譯：希望"},
            {text: "紀望", explanation: "錯誤：這個詞不存在。\n中文翻譯：希望"}
        ],
        correctAnswer: 0
    },
{
        id: 402,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "わすれる",
        options: [
            {text: "忘れる", explanation: "正確答案：わすれる的漢字是「忘れる」，意思是忘記。\n中文翻譯：忘記"},
            {text: "亡れる", explanation: "錯誤：「亡」讀音是「ぼう」或「な」但不對，正確漢字是「忘」。\n中文翻譯：忘記"},
            {text: "忘る", explanation: "錯誤：送假名錯誤，正確寫法是「忘れる」。\n中文翻譯：忘記"},
            {text: "忘れる", explanation: "錯誤：這個詞不存在。\n中文翻譯：忘記"}
        ],
        correctAnswer: 0
    },
    {
        id: 403,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "あける",
        options: [
            {text: "開ける", explanation: "正確答案：あける的漢字是「開ける」，意思是打開。\n中文翻譯：打開"},
            {text: "明ける", explanation: "錯誤：「明ける」讀音也是「あける」，但意思通常是天亮、結束假期。（同音異義陷阱）\n中文翻譯：天亮"},
            {text: "空ける", explanation: "錯誤：「空ける」讀音也是「あける」，但意思是空出、騰出。\n中文翻譯：空出"},
            {text: "始ける", explanation: "錯誤：「始」讀音是「はじ」或「し」但不對，正確漢字是「開」。\n中文翻譯：打開"}
        ],
        correctAnswer: 0
    },
    {
        id: 404,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "あつい",
        options: [
            {text: "暑い", explanation: "正確答案：あついの漢字是「暑い」，意思是天氣熱。\n中文翻譯：天氣熱"},
            {text: "熱い", explanation: "錯誤：「熱い」讀音也是「あつい」，但意思是物體熱、燙。（同音異義陷阱）\n中文翻譯：物體熱、燙"},
            {text: "厚い", explanation: "錯誤：「厚い」讀音也是「あつい」，但意思是厚的。（同音異義陷阱）\n中文翻譯：厚的"},
            {text: "暑い", explanation: "錯誤：送假名錯誤，正確寫法是「暑い」。\n中文翻譯：天氣熱"}
        ],
        correctAnswer: 0
    },
    {
        id: 405,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "つかれる",
        options: [
            {text: "疲れる", explanation: "正確答案：つかれる的漢字是「疲れる」，意思是疲倦。\n中文翻譯：疲倦"},
            {text: "疲れる", explanation: "錯誤：這是簡體字，日文不適用。\n中文翻譯：疲倦"},
            {text: "彼れる", explanation: "錯誤：「彼」讀音是「かれ」但不對，正確漢字是「疲」。\n中文翻譯：疲倦"},
            {text: "疲る", explanation: "錯誤：送假名錯誤，正確寫法是「疲れる」。\n中文翻譯：疲倦"}
        ],
        correctAnswer: 0
    },
    {
        id: 406,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "じかん",
        options: [
            {text: "時間", explanation: "正確答案：じかん的漢字是「時間」，意思是時間。\n中文翻譯：時間"},
            {text: "持間", explanation: "錯誤：「持」讀音是「じ」或「も」但不對，正確漢字是「時」。\n中文翻譯：時間"},
            {text: "時関", explanation: "錯誤：「関」讀音是「かん」但意思不對，正確漢字是「間」。\n中文翻譯：時間"},
            {text: "寺間", explanation: "錯誤：「寺」讀音是「じ」但不對，正確漢字是「時」。\n中文翻譯：時間"}
        ],
        correctAnswer: 0
    },
    {
        id: 407,
        type: "writing",
        question: "次の言葉の正しい漢字を選びなさい",
        kana: "しけん",
        options: [
            {text: "試験", explanation: "正確答案：しけん的漢字是「試験」，意思是考試。\n中文翻譯：考試"},
            {text: "試検", explanation: "錯誤：「検」讀音是「けん」但意思不對，正確漢字是「験」。\n中文翻譯：考試"},
            {text: "始験", explanation: "錯誤：「始」讀音是「し」但不對，正確漢字是「試」。\n中文翻譯：考試"},
            {text: "自験", explanation: "錯誤：「自」讀音是「じ」但不對，正確漢字是「試」。\n中文翻譯：考試"}
        ],
        correctAnswer: 0
    }
];