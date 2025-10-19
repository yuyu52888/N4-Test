// 日文N4測驗題庫 - grammar類型
const grammarQuestions = [
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
    id: 115,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "昨日は たくさん（ ）から、今日は 元気です。",
    options: [
        {text: "寝た", explanation: "正確答案：句意：因為昨天睡了很多，所以今天有精神。\n中文翻譯：因為昨天睡了很多，所以今天有精神。"},
        {text: "寝る", explanation: "錯誤：時態不一致。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"},
        {text: "寝て", explanation: "錯誤：需要過去形。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"},
        {text: "寝ます", explanation: "錯誤：禮貌形不適合。\n中文翻譯：因為昨天睡很多，所以今天有精神（時態錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 119,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "もし 時間が（ ）、映画を 見に 行きませんか。",
    options: [
        {text: "あったら", explanation: "正確答案：句意：如果有時間的話，要不要去看電影？\n中文翻譯：如果有時間的話，要不要去看電影？"},
        {text: "あると", explanation: "錯誤：表示必然結果。\n中文翻譯：如果有時間的話，要不要去看電影？（文法錯誤）"},
        {text: "あれば", explanation: "錯誤：文法正確但較不自然。\n中文翻譯：如果有時間的話，要不要去看電影？（較不自然）"},
        {text: "あるなら", explanation: "錯誤：用法不恰當。\n中文翻譯：如果有時間的話，要不要去看電影？（文法錯誤）"}
    ],
    correctAnswer: 0
},
{
    id: 124,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この ケーキは 母（ ）作りました。",
    options: [
        {text: "が", explanation: "正確答案：句意：這個蛋糕是媽媽做的。\n中文翻譯：這個蛋糕是媽媽做的。"},
        {text: "を", explanation: "錯誤：用於受詞。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤：用於時間、地點等。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：用於場所、手段。\n中文翻譯：這個蛋糕是媽媽做的（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 130,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 昨日（ ）ばかりです。",
    options: [
        {text: "買った", explanation: "正確答案：句意：這本書是昨天剛買的。\n中文翻譯：這本書是昨天剛買的。"},
        {text: "買う", explanation: "錯誤：時態不一致。\n中文翻譯：這本書是昨天剛買的（時態錯誤）。"},
        {text: "買って", explanation: "錯誤：て形不適用。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"},
        {text: "買い", explanation: "錯誤：ます形不完整。\n中文翻譯：這本書是昨天剛買的（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 134,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 仕事は 一時間（ ）終わりました。",
    options: [
        {text: "で", explanation: "正確答案：句意：這個工作一小時就結束了。\n中文翻譯：這個工作一小時就結束了。"},
        {text: "に", explanation: "錯誤：用於具體時間點。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：用於受詞。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：用於主詞。\n中文翻譯：這個工作一小時就結束了（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 140,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここに 名前を（ ）ください。",
    options: [
        {text: "書いて", explanation: "正確答案：句意：請在這裡寫名字。\n中文翻譯：請在這裡寫名字。"},
        {text: "書く", explanation: "錯誤：動詞原形不適用。\n中文翻譯：請在這裡寫名字（文法錯誤）。"},
        {text: "書いた", explanation: "錯誤：過去形不適用。\n中文翻譯：請在這裡寫名字（時態錯誤）。"},
        {text: "書きます", explanation: "錯誤：禮貌形不適合。\n中文翻譯：請在這裡寫名字（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 145,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここで しゃしんを （ ） も いいです。",
    options: [
        {text: "とって", explanation: "正確答案：句意：在這裡拍照也可以。\n中文翻譯：在這裡拍照也可以。"},
        {text: "とる", explanation: "錯誤：動詞原形不能直接接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "とった", explanation: "錯誤：過去形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"},
        {text: "とります", explanation: "錯誤：ます形不能接「もいい」。\n中文翻譯：在這裡拍照也可以（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 149,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは コーヒーに さとうを （ ） 飲みます。",
    options: [
        {text: "入れて", explanation: "正確答案：句意：我在咖啡裡加糖喝。\n中文翻譯：我在咖啡裡加糖喝。"},
        {text: "入れる", explanation: "錯誤：動詞原形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（文法錯誤）。"},
        {text: "入れた", explanation: "錯誤：過去形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（時態錯誤）。"},
        {text: "入れます", explanation: "錯誤：ます形不能表示方式。\n中文翻譯：我在咖啡裡加糖喝（文法錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 154,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "きのうは 天気が（ ）です。",
    options: [
        {text: "よかった", explanation: "正確答案：句意：昨天天氣很好。\n中文翻譯：昨天天氣很好。"},
        {text: "いい", explanation: "錯誤：現在形，與「きのう」時間不符。\n中文翻譯：昨天天氣很好（時態錯誤）。"},
        {text: "よい", explanation: "錯誤：現在形，與「きのう」時間不符。\n中文翻譯：昨天天氣很好（時態錯誤）。"},
        {text: "よくなかった", explanation: "錯誤：否定形，與句意不符。\n中文翻譯：昨天天氣不好（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 159,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "わたしは 魚（ ）すきです。",
    options: [
        {text: "が", explanation: "正確答案：句意：我喜歡魚。\n中文翻譯：我喜歡魚。"},
        {text: "を", explanation: "錯誤：「を」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"},
        {text: "に", explanation: "錯誤：「に」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」不用於表示喜歡的對象。\n中文翻譯：我喜歡魚（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 164,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "ここ（ ）車を 止めては いけません。",
    options: [
        {text: "に", explanation: "正確答案：句意：這裡不能停車。\n中文翻譯：這裡不能停車。"},
        {text: "で", explanation: "錯誤：「で」表示動作發生的場所。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這裡不能停車（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 169,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎日 7時間（ ）寝ます。",
    options: [
        {text: "ぐらい", explanation: "正確答案：句意：我每天大概睡7小時。\n中文翻譯：我每天大概睡7小時。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定，與句意不符。\n中文翻譯：我每天只睡7小時（語意不同）。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我每天從7小時睡（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我每天睡到7小時（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 174,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 179,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語が 少し（ ）話せます。",
    options: [
        {text: "だけ", explanation: "正確答案：句意：我只會說一點日語。\n中文翻譯：我只會說一點日語。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從一點日語會說（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到一點日語會說（語意矛盾）。"},
        {text: "より", explanation: "錯誤：「より」表示比較。\n中文翻譯：我比一點日語會說（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 184,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この りんごは あの りんご（ ）おいしいです。",
    options: [
        {text: "より", explanation: "正確答案：句意：這個蘋果比那個蘋果好吃。\n中文翻譯：這個蘋果比那個蘋果好吃。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：這個蘋果從那個蘋果好吃（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：這個蘋果到那個蘋果好吃（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：這個蘋果只那個蘋果好吃（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 189,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は コーヒー（ ）紅茶の ほうが 好きです。",
    options: [
        {text: "より", explanation: "正確答案：句意：我比起咖啡更喜歡紅茶。\n中文翻譯：我比起咖啡更喜歡紅茶。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：我從咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：我到咖啡更喜歡紅茶（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：我只咖啡更喜歡紅茶（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 194,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語（ ）英語が 話せます。",
    options: [
        {text: "と", explanation: "正確答案：句意：我會說日語和英語。\n中文翻譯：我會說日語和英語。"},
        {text: "や", explanation: "錯誤：「や」表示列舉，通常用於三個以上。\n中文翻譯：我會說日語和英語（較不自然）。"},
        {text: "か", explanation: "錯誤：「か」表示選擇。\n中文翻譯：我會說日語或英語（語意不同）。"},
        {text: "の", explanation: "錯誤：「の」表示所有格。\n中文翻譯：我會說日語的英語（語意矛盾）。"}
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
    id: 204,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎朝 6時（ ）起きます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我每天早上6點起床。\n中文翻譯：我每天早上6點起床。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 209,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 214,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 日本語（ ）英語が 話せます。",
    options: [
        {text: "と", explanation: "正確答案：句意：我會說日語和英語。\n中文翻譯：我會說日語和英語。"},
        {text: "や", explanation: "錯誤：「や」表示列舉，通常用於三個以上。\n中文翻譯：我會說日語和英語（較不自然）。"},
        {text: "か", explanation: "錯誤：「か」表示選擇。\n中文翻譯：我會說日語或英語（語意不同）。"},
        {text: "の", explanation: "錯誤：「の」表示所有格。\n中文翻譯：我會說日語的英語（語意矛盾）。"}
    ],
    correctAnswer: 0
},
{
    id: 219,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 224,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "私は 毎朝 6時（ ）起きます。",
    options: [
        {text: "に", explanation: "正確答案：句意：我每天早上6點起床。\n中文翻譯：我每天早上6點起床。"},
        {text: "で", explanation: "錯誤：「で」表示時間期限。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：我每天早上6點起床（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 229,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 子ども（ ）わかります。",
    options: [
        {text: "に", explanation: "正確答案：句意：這本書連孩子都懂。\n中文翻譯：這本書連孩子都懂。"},
        {text: "が", explanation: "錯誤：「が」表示主語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "を", explanation: "錯誤：「を」表示賓語。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"},
        {text: "で", explanation: "錯誤：「で」表示場所或手段。\n中文翻譯：這本書連孩子都懂（助詞使用錯誤）。"}
    ],
    correctAnswer: 0
},
{
    id: 231,
    type: "grammar",
    question: "（ ）に なにを いれますか。",
    sentence: "この 本は 昨日（ ）ばかりです。",
    options: [
        {text: "買った", explanation: "正確答案：句意：這本書是昨天剛買的。\n中文翻譯：這本書是昨天剛買的。"},
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
        {text: "書いて", explanation: "正確答案：句意：請在這裡寫名字。\n中文翻譯：請在這裡寫名字。"},
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
        {text: "飲んだ", explanation: "正確答案：句意：吃了這個藥之後請睡覺。\n中文翻譯：吃了這個藥之後請睡覺。"},
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
        {text: "あったら", explanation: "正確答案：句意：如果有時間的話，請來玩。\n中文翻譯：如果有時間的話，請來玩。"},
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
        {text: "で", explanation: "正確答案：句意：這個工作一小時就結束了。\n中文翻譯：這個工作一小時就結束了。"},
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
        {text: "より", explanation: "正確答案：句意：我比起咖啡更喜歡紅茶。\n中文翻譯：我比起咖啡更喜歡紅茶。"},
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
        {text: "に", explanation: "正確答案：句意：這個包包對孩子來說容易拿。\n中文翻譯：這個包包對孩子來說容易拿。"},
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
        {text: "に", explanation: "正確答案：句意：這裡不能停車。\n中文翻譯：這裡不能停車。"},
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
        {text: "だけ", explanation: "正確答案：句意：我只會說一點日語。\n中文翻譯：我只會說一點日語。"},
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
        {text: "より", explanation: "正確答案：句意：這個蘋果比那個蘋果好吃。\n中文翻譯：這個蘋果比那個蘋果好吃。"},
        {text: "から", explanation: "錯誤：「から」表示起點。\n中文翻譯：這個蘋果從那個蘋果好吃（語意矛盾）。"},
        {text: "まで", explanation: "錯誤：「まで」表示終點。\n中文翻譯：這個蘋果到那個蘋果好吃（語意矛盾）。"},
        {text: "だけ", explanation: "錯誤：「だけ」表示限定。\n中文翻譯：這個蘋果只那個蘋果好吃（語意矛盾）。"}
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
},
    {
        id: 371,
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
        id: 372,
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
        id: 373,
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
        id: 374,
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
        id: 375,
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
        id: 376,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "私は 毎日 バス（ ） 学校へ 行きます。",
        options: [
            {text: "で", explanation: "正確答案：句意：我每天坐公車去學校（「で」表示交通工具）。\n中文翻譯：我每天坐公車去學校。"},
            {text: "に", explanation: "錯誤：「に」表示目的地，交通工具要用「で」。\n中文翻譯：我每天坐公車去學校（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：「を」表示賓語，不用於交通工具。\n中文翻譯：我每天坐公車去學校（助詞使用錯誤）。"},
            {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：我每天從公車去學校（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 377,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "これは 友達（ ） もらった プレゼントです。",
        options: [
            {text: "から", explanation: "正確答案：句意：這是從朋友那裡收到的禮物（「から」表示來源）。\n中文翻譯：這是從朋友那裡收到的禮物。"},
            {text: "に", explanation: "錯誤：「に」表示給予的對象，但「もらう」用「から」。\n中文翻譯：這是從朋友那裡收到的禮物（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：「で」表示場所或手段，與句意不符。\n中文翻譯：這是從朋友那裡收到的禮物（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：「を」表示賓語，與句意不符。\n中文翻譯：這是從朋友那裡收到的禮物（助詞使用錯誤）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 378,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "図書館（ ） 本を 借りました。",
        options: [
            {text: "で", explanation: "正確答案：句意：在圖書館借了書（「で」表示動作發生的場所）。\n中文翻譯：在圖書館借了書。"},
            {text: "に", explanation: "錯誤：「に」表示存在的場所，動作場所要用「で」。\n中文翻譯：在圖書館借了書（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：「を」表示賓語，與場所無關。\n中文翻譯：在圖書館借了書（助詞使用錯誤）。"},
            {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：從圖書館借了書（語意不完整）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 379,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "私は コーヒー（ ） ミルクの ほうが 好きです。",
        options: [
            {text: "より", explanation: "正確答案：句意：我比起咖啡更喜歡牛奶（「より」表示比較的基準）。\n中文翻譯：我比起咖啡更喜歡牛奶。"},
            {text: "から", explanation: "錯誤：「から」表示起點，與比較無關。\n中文翻譯：我從咖啡更喜歡牛奶（語意矛盾）。"},
            {text: "まで", explanation: "錯誤：「まで」表示終點，與比較無關。\n中文翻譯：我到咖啡更喜歡牛奶（語意矛盾）。"},
            {text: "だけ", explanation: "錯誤：「だけ」表示限定，與比較無關。\n中文翻譯：我只咖啡更喜歡牛奶（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 380,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 手紙を ポスト（ ） 入れて ください。",
        options: [
            {text: "に", explanation: "正確答案：句意：請把這封信投入郵筒（「に」表示動作的著落點）。\n中文翻譯：請把這封信投入郵筒。"},
            {text: "で", explanation: "錯誤：「で」表示動作場所，但這裡是投入的目標。\n中文翻譯：請把這封信投入郵筒（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：「を」表示賓語，但這裡需要表示目標的助詞。\n中文翻譯：請把這封信投入郵筒（助詞使用錯誤）。"},
            {text: "から", explanation: "錯誤：「から」表示起點，與句意不符。\n中文翻譯：請從郵筒投入這封信（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 389,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 仕事は 私（ ） 任せて ください。",
        options: [
            {text: "に", explanation: "正確答案：『～に任せる』表示把某事委託給某人。\n文法考點：表示動作對象的助詞『に』，用於委託、交給等動詞的對象標記。\n中文翻譯：這個工作請交給我。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，但『任せる』的對象用『に』。\n中文翻譯：這個工作請交給我（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示場所或手段，與委託對象不符。\n中文翻譯：這個工作請用我交（語意不當）。"},
            {text: "から", explanation: "錯誤：『から』表示起點，與句意不符。\n中文翻譯：這個工作請從我交（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 390,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "駅（ ） 友達と 待ち合わせました。",
        options: [
            {text: "で", explanation: "正確答案：場所＋で，表示動作發生的地點。\n文法考點：表示動作場所的助詞『で』，用於標明動作進行的具體地點。\n中文翻譯：在車站和朋友會合了。"},
            {text: "に", explanation: "錯誤：『に』表示存在的場所，動作場所要用『で』。\n中文翻譯：在車站和朋友會合了（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與場所無關。\n中文翻譯：把車站和朋友會合了（助詞使用錯誤）。"},
            {text: "から", explanation: "錯誤：『から』表示起點，與句意不符。\n中文翻譯：從車站和朋友會合了（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 395,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 本は 子ども（ ） わかりやすいです。",
        options: [
            {text: "に", explanation: "正確答案：『～にわかりやすい』表示「對～來說容易理解」。\n文法考點：表示評價對象的助詞『に』，用於說明對誰而言具有某種特性。\n中文翻譯：這本書對孩子來說容易理解。"},
            {text: "が", explanation: "錯誤：『が』表示主語，但這裡需要表示對象的助詞。\n中文翻譯：這本書孩子容易理解（語意不當）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與句意不符。\n中文翻譯：這本書把孩子容易理解（語意不當）。"},
            {text: "で", explanation: "錯誤：『で』表示場所或手段。\n中文翻譯：這本書用孩子容易理解（語意不當）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 402,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 問題は 子ども（ ） でも わかります。",
        options: [
            {text: "に", explanation: "正確答案：『～にでも』表示「即使是對～來說也」\n文法考點：助詞重疊用法『にでも』，結合對象助詞『に』和讓步助詞『でも』，強調極端情況\n中文翻譯：這個問題即使是對孩子來說也能懂。"},
            {text: "が", explanation: "錯誤：『が』與『でも』搭配不自然，語意不當\n中文翻譯：這個問題即使是孩子也能懂（語意不當）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與句意不符\n中文翻譯：這個問題即使是把孩子也能懂（語意不當）。"},
            {text: "で", explanation: "錯誤：『で』表示場所或手段，與對象表達不符\n中文翻譯：這個問題即使用孩子也能懂（語意不當）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 403,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "電車（ ） 遅れて、約束に 間に合いませんでした。",
        options: [
            {text: "が", explanation: "正確答案：『電車が遅れる』表示電車晚點的主語\n文法考點：自然現象或客觀事實的主語標記，使用『が』表示現象的發生主體\n中文翻譯：電車晚點，沒趕上約定。"},
            {text: "に", explanation: "錯誤：『に』不用於表示現象發生的主語\n中文翻譯：電車晚點，沒趕上約定（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與自動詞『遅れる』不符\n中文翻譯：把電車晚點，沒趕上約定（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示原因時用法不正確\n中文翻譯：用電車晚點，沒趕上約定（助詞使用錯誤）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 404,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 仕事は 経験（ ） 必要です。",
        options: [
            {text: "が", explanation: "正確答案：『～が必要』表示「需要～」\n文法考點：表示必要性的形容動詞『必要』與主語助詞『が』的固定搭配\n中文翻譯：這個工作需要經驗。"},
            {text: "に", explanation: "錯誤：『に』不用於『必要』的主語標記\n中文翻譯：這個工作需要經驗（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與形容動詞『必要』不符\n中文翻譯：這個工作把經驗需要（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示手段，與必要性表達不符\n中文翻譯：這個工作用經驗需要（助詞使用錯誤）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 408,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この ケーキは 妹（ ） 作りました。",
        options: [
            {text: "が", explanation: "正確答案：『～が作る』表示動作的主體\n文法考點：動作主語的標記，使用『が』明確指出動作的執行者\n中文翻譯：這個蛋糕是妹妹做的。"},
            {text: "に", explanation: "錯誤：『に』表示對象，但這裡需要主語\n中文翻譯：這個蛋糕是妹妹做的（助詞使用錯誤）。"},
            {text: "を", explanation: "錯誤：『を』表示賓語，與句意不符\n中文翻譯：這個蛋糕把妹妹做了（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示場所或手段，與動作主體不符\n中文翻譯：這個蛋糕用妹妹做了（助詞使用錯誤）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 409,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "私は 音楽（ ） 聞きながら 勉強します。",
        options: [
            {text: "を", explanation: "正確答案：『～を聞く』表示聽音樂的賓語\n文法考點：他動詞『聞く』與賓語助詞『を』的固定搭配，同時使用『ながら』表示同時進行\n中文翻譯：我邊聽音樂邊學習。"},
            {text: "に", explanation: "錯誤：『に』不用於『聞く』的賓語標記\n中文翻譯：我邊聽音樂邊學習（助詞使用錯誤）。"},
            {text: "が", explanation: "錯誤：『が』表示主語，與句意不符\n中文翻譯：我音樂邊聽邊學習（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示手段，與賓語表達不符\n中文翻譯：我用音樂邊聽邊學習（助詞使用錯誤）。"}
        ],
        correctAnswer: 0
    },
    {
        id: 410,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この バスは 駅前（ ） 通ります。",
        options: [
            {text: "を", explanation: "正確答案：『～を通る』表示經過某地點\n文法考點：移動動詞『通る』與經過點助詞『を』的固定搭配，表示移動路徑\n中文翻譯：這班公車經過站前。"},
            {text: "に", explanation: "錯誤：『に』表示目的地，但這裡是經過點\n中文翻譯：這班公車經過站前（助詞使用錯誤）。"},
            {text: "で", explanation: "錯誤：『で』表示動作場所，不用於移動路徑\n中文翻譯：這班公車經過站前（助詞使用錯誤）。"},
            {text: "から", explanation: "錯誤：『から』表示起點，與經過概念不符\n中文翻譯：這班公車從站前經過（語意矛盾）。"}
        ],
        correctAnswer: 0
    },
        {
        id: 441,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 仕事は 5時（ ） 終わる 予定です。",
        options: [
            {
                text: "までに",
                explanation: "正確答案：『時間＋までに』表示期限的最後時間點\n文法考點：時間期限表達，強調在某時間點之前完成動作\n中文翻譯：這個工作預定在5點前結束。"
            },
            {
                text: "まで",
                explanation: "錯誤：『まで』表示持續到某時間點，與『終わる』矛盾\n中文翻譯：這個工作預定持續到5點（意思不同）。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示時間起點，與結束概念矛盾\n中文翻譯：這個工作預定從5點結束（語意矛盾）。"
            },
            {
                text: "より",
                explanation: "錯誤：『より』表示比較基準，與時間無關\n中文翻譯：這個工作預定比5點結束（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 442,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "彼女は ピアノが 上手（ ）、歌も 上手です。",
        options: [
            {
                text: "だし",
                explanation: "正確答案：名詞/な形容詞＋だし，表示列舉事實\n文法考點：接續助詞『し』的用法，用於列舉兩個以上事實\n中文翻譯：她不僅鋼琴彈得好，唱歌也很好。"
            },
            {
                text: "だから",
                explanation: "錯誤：『だから』表示原因，與並列關係不符\n中文翻譯：她因為鋼琴彈得好，唱歌也很好（語意矛盾）。"
            },
            {
                text: "なので",
                explanation: "錯誤：『なので』表示原因，與並列關係不符\n中文翻譯：她因為鋼琴彈得好，唱歌也很好（語意矛盾）。"
            },
            {
                text: "だと",
                explanation: "錯誤：『だと』表示條件或假定\n中文翻譯：她如果鋼琴彈得好，唱歌也很好（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 443,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 薬を 飲んだ（ ）、よく 眠く なりました。",
        options: [
            {
                text: "ら",
                explanation: "正確答案：動詞た形＋ら，表示條件，後項多為偶然發現\n文法考點：條件形『～たら』的發現用法，強調前項完成後的意外結果\n中文翻譯：吃了這個藥後，就變得很想睡覺。"
            },
            {
                text: "と",
                explanation: "錯誤：『と』表示必然結果，不適合用於偶然發現\n中文翻譯：一吃這個藥，就變得很想睡覺（語氣過於必然）。"
            },
            {
                text: "ば",
                explanation: "錯誤：『ば』表示假定條件，與過去事實不符\n中文翻譯：如果吃這個藥，就變得很想睡覺（與事實矛盾）。"
            },
            {
                text: "なら",
                explanation: "錯誤：『なら』表示話題提示，與發現事實不符\n中文翻譯：要是吃這個藥的話，就變得很想睡覺（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 444,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "熱が ある（ ）、学校を 休みました。",
        options: [
            {
                text: "ので",
                explanation: "正確答案：動詞/形容詞＋ので，表示客觀原因\n文法考點：原因表達『～ので』，語氣較『から』客觀柔和\n中文翻譯：因為發燒，所以請假沒去學校。"
            },
            {
                text: "のに",
                explanation: "錯誤：『のに』表示逆接，與因果關係矛盾\n中文翻譯：雖然發燒，所以請假沒去學校（語意矛盾）。"
            },
            {
                text: "ため",
                explanation: "錯誤：『ため』文法正確但較書面化，不如『ので』自然\n中文翻譯：因為發燒，所以請假沒去學校（較不自然）。"
            },
            {
                text: "ながら",
                explanation: "錯誤：『ながら』表示同時進行\n中文翻譯：一邊發燒，所以請假沒去學校（語意矛盾）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 445,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 本は 子ども（ ） 読める ように 書いて あります。",
        options: [
            {
                text: "でも",
                explanation: "正確答案：名詞＋でも，表示「即使是～也」\n文法考點：提示助詞『でも』的讓步用法，舉出極端例子\n中文翻譯：這本書寫得連孩子都能讀。"
            },
            {
                text: "しか",
                explanation: "錯誤：『しか』與否定呼應，表示限定\n中文翻譯：這本書寫得只有孩子能讀（意思相反）。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示起點或原因\n中文翻譯：這本書從孩子能讀（語意不當）。"
            },
            {
                text: "まで",
                explanation: "錯誤：『まで』表示終點或範圍\n中文翻譯：這本書到孩子能讀（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 446,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "明日は テストが ある（ ）、今日は 早く 寝ます。",
        options: [
            {
                text: "から",
                explanation: "正確答案：動詞/形容詞＋から，表示主觀原因\n文法考點：原因表達『～から』，強調說話者的主觀理由\n中文翻譯：因為明天有考試，所以今天要早睡。"
            },
            {
                text: "ので",
                explanation: "錯誤：『ので』表示客觀原因，但這裡是個人決定\n中文翻譯：因為明天有考試，所以今天要早睡（較不自然）。"
            },
            {
                text: "のに",
                explanation: "錯誤：『のに』表示逆接\n中文翻譯：雖然明天有考試，所以今天要早睡（語意矛盾）。"
            },
            {
                text: "ため",
                explanation: "錯誤：『ため』較書面化，不適合日常對話\n中文翻譯：因為明天有考試，所以今天要早睡（較不自然）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 447,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この ケーキは 母（ ） 作って くれました。",
        options: [
            {
                text: "が",
                explanation: "正確答案：『～が～てくれる』表示他人為說話者做某事\n文法考點：授受動詞『～てくれる』的主語標記\n中文翻譯：這個蛋糕是媽媽為我做的。"
            },
            {
                text: "に",
                explanation: "錯誤：『に』不用於『てくれる』的主語\n中文翻譯：這個蛋糕是媽媽為我做的（助詞使用錯誤）。"
            },
            {
                text: "を",
                explanation: "錯誤：『を』表示賓語，與主語不符\n中文翻譯：這個蛋糕把媽媽為我做了（助詞使用錯誤）。"
            },
            {
                text: "で",
                explanation: "錯誤：『で』表示手段，與動作主體不符\n中文翻譯：這個蛋糕用媽媽為我做了（助詞使用錯誤）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 448,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "私は 友達（ ） 本を 貸して あげました。",
        options: [
            {
                text: "に",
                explanation: "正確答案：『～に～てあげる』表示說話者為他人做某事\n文法考點：授受動詞『～てあげる』的對象標記\n中文翻譯：我把書借給了朋友。"
            },
            {
                text: "が",
                explanation: "錯誤：『が』表示主語，但這裡需要對象\n中文翻譯：我朋友把書借給了（助詞使用錯誤）。"
            },
            {
                text: "を",
                explanation: "錯誤：『を』表示賓語，與對象不符\n中文翻譯：我把朋友借給了書（助詞使用錯誤）。"
            },
            {
                text: "で",
                explanation: "錯誤：『で』表示手段，與對象不符\n中文翻譯：我用朋友借給了書（助詞使用錯誤）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 449,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "先生（ ） 日本語を 教えて いただきました。",
        options: [
            {
                text: "に",
                explanation: "正確答案：『～に～ていただく』表示謙讓語的接受恩惠\n文法考點：謙讓語授受動詞『～ていただく』的對象標記\n中文翻譯：請老師教我日語。"
            },
            {
                text: "が",
                explanation: "錯誤：『が』不用於謙讓語的對象標記\n中文翻譯：老師教我日語了（敬語使用錯誤）。"
            },
            {
                text: "を",
                explanation: "錯誤：『を』表示賓語，與對象不符\n中文翻譯：把老師教我日語了（助詞使用錯誤）。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示起點，與恩惠接受不符\n中文翻譯：從老師教我日語了（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 450,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 問題は 思った（ ） 難しく ありませんでした。",
        options: [
            {
                text: "ほど",
                explanation: "正確答案：動詞た形＋ほど，表示程度\n文法考點：程度表達『～ほど～ない』，表示沒達到預期程度\n中文翻譯：這個問題沒有想像中那麼難。"
            },
            {
                text: "より",
                explanation: "錯誤：『より』表示比較基準，與否定表達不符\n中文翻譯：這個問題比想像中不難（語意不當）。"
            },
            {
                text: "くらい",
                explanation: "錯誤：『くらい』表示大致程度，不適合否定比較\n中文翻譯：這個問題大概想像中不難（語意不當）。"
            },
            {
                text: "だけ",
                explanation: "錯誤：『だけ』表示限定，與程度表達不符\n中文翻譯：這個問題只想像中不難（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 451,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 店の 料理は 安い（ ）、おいしいです。",
        options: [
            {
                text: "し",
                explanation: "正確答案：形容詞＋し，表示列舉理由\n文法考點：接續助詞『し』的用法，用於列舉兩個以上特點\n中文翻譯：這家店的料理又便宜又好吃。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示原因，與並列關係不符\n中文翻譯：這家店的料理因為便宜，好吃（語意矛盾）。"
            },
            {
                text: "ので",
                explanation: "錯誤：『ので』表示原因，與並列關係不符\n中文翻譯：這家店的料理因為便宜，好吃（語意矛盾）。"
            },
            {
                text: "のに",
                explanation: "錯誤：『のに』表示逆接\n中文翻譯：這家店的料理雖然便宜，好吃（語意矛盾）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 452,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 仕事は 私（ ） やらせて ください。",
        options: [
            {
                text: "に",
                explanation: "正確答案：『～に～させる』表示使役對象\n文法考點：使役表現的對象標記，使用『に』表示被使役者\n中文翻譯：請讓我做這個工作。"
            },
            {
                text: "を",
                explanation: "錯誤：『を』用於無意志動詞的使役對象\n中文翻譯：請把我做這個工作（助詞使用錯誤）。"
            },
            {
                text: "が",
                explanation: "錯誤：『が』表示主語，與使役對象不符\n中文翻譯：請我讓做這個工作（助詞使用錯誤）。"
            },
            {
                text: "で",
                explanation: "錯誤：『で』表示手段，與使役對象不符\n中文翻譯：請用我做這個工作（助詞使用錯誤）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 453,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 本は 読め（ ） 読む（ ） おもしろいです。",
        options: [
            {
                text: "ば",
                explanation: "正確答案：『～ば～ほど』表示「越～越～」\n文法考點：比例表達『～ば～ほど』的固定句型\n中文翻譯：這本書越讀越有趣。"
            },
            {
                text: "と",
                explanation: "錯誤：『と』不能構成比例表達句型\n中文翻譯：這本書一讀越有趣（文法錯誤）。"
            },
            {
                text: "たら",
                explanation: "錯誤：『たら』表示條件，不能構成比例表達\n中文翻譯：這本書如果讀越有趣（文法錯誤）。"
            },
            {
                text: "なら",
                explanation: "錯誤：『なら』表示話題提示，不能構成比例表達\n中文翻譯：這本書要是讀越有趣（文法錯誤）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 454,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 映画は 一度（ ） 見た ことが あります。",
        options: [
            {
                text: "だけ",
                explanation: "正確答案：數量詞＋だけ，表示限定的數量\n文法考點：限定助詞『だけ』的用法，強調數量的限制性\n中文翻譯：這部電影只看過一次。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示起點，與數量無關\n中文翻譯：這部電影從一次看過（語意不當）。"
            },
            {
                text: "まで",
                explanation: "錯誤：『まで』表示終點，與數量無關\n中文翻譯：這部電影到一次看過（語意不當）。"
            },
            {
                text: "でも",
                explanation: "錯誤：『でも』表示舉例或讓步，語氣不同\n中文翻譯：這部電影即使一次看過（語氣不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 455,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 道（ ） まっすぐ 行くと、駅が あります。",
        options: [
            {
                text: "を",
                explanation: "正確答案：『～を行く』表示移動的經過點\n文法考點：移動動詞與經過點助詞『を』的固定搭配\n中文翻譯：沿著這條路直走就有車站。"
            },
            {
                text: "に",
                explanation: "錯誤：『に』表示目的地，但這裡是經過點\n中文翻譯：沿著這條路直走就有車站（助詞使用錯誤）。"
            },
            {
                text: "で",
                explanation: "錯誤：『で』表示動作場所，不用於移動路徑\n中文翻譯：沿著這條路直走就有車站（助詞使用錯誤）。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示起點，與經過概念不符\n中文翻譯：從這條路直走就有車站（語意矛盾）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 456,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この レストランは サービスが いい（ ）、料理も おいしいです。",
        options: [
            {
                text: "し",
                explanation: "正確答案：形容詞＋し，表示列舉多個優點\n文法考點：接續助詞『し』的並列用法，暗示還有其他優點\n中文翻譯：這家餐廳服務又好，料理又好吃。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示原因，與並列關係不符\n中文翻譯：這家餐廳因為服務好，料理也好吃（語意矛盾）。"
            },
            {
                text: "ので",
                explanation: "錯誤：『ので』表示原因，與並列關係不符\n中文翻譯：這家餐廳因為服務好，料理也好吃（語意矛盾）。"
            },
            {
                text: "のに",
                explanation: "錯誤：『のに』表示逆接\n中文翻譯：這家餐廳雖然服務好，料理也好吃（語意矛盾）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 457,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "明日は 忙しい（ ）、あさってに して ください。",
        options: [
            {
                text: "ので",
                explanation: "正確答案：形容詞＋ので，表示客觀原因\n文法考點：原因表達『～ので』的委婉請求用法\n中文翻譯：因為明天很忙，請改到後天。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』語氣較直接，不適合委婉請求\n中文翻譯：因為明天很忙，請改到後天（語氣較直接）。"
            },
            {
                text: "のに",
                explanation: "錯誤：『のに』表示逆接\n中文翻譯：雖然明天很忙，請改到後天（語意矛盾）。"
            },
            {
                text: "ため",
                explanation: "錯誤：『ため』較書面化，不適合日常請求\n中文翻譯：因為明天很忙，請改到後天（較不自然）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 458,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この かばんは 軽くて（ ）やすいです。",
        options: [
            {
                text: "持ち",
                explanation: "正確答案：動詞ます形去ます＋やすい，表示容易做\n文法考點：複合形容詞『～やすい』的接續方式\n中文翻譯：這個包包很輕，容易拿。"
            },
            {
                text: "持つ",
                explanation: "錯誤：動詞原形不能接『やすい』\n中文翻譯：這個包包很輕，容易拿（文法錯誤）。"
            },
            {
                text: "持って",
                explanation: "錯誤：て形不能接『やすい』\n中文翻譯：這個包包很輕，容易拿（文法錯誤）。"
            },
            {
                text: "持った",
                explanation: "錯誤：過去形不能接『やすい』\n中文翻譯：這個包包很輕，容易拿了（文法錯誤）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 459,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 問題は 子ども（ ） わかる はずです。",
        options: [
            {
                text: "に",
                explanation: "正確答案：『～にわかる』表示「對～來說能懂」\n文法考點：表示能力對象的助詞『に』，說明對誰而言具有理解能力\n中文翻譯：這個問題對孩子來說應該能懂。"
            },
            {
                text: "が",
                explanation: "錯誤：『が』表示主語，但這裡需要表示對象的助詞\n中文翻譯：這個問題孩子應該能懂（語意不當）。"
            },
            {
                text: "を",
                explanation: "錯誤：『を』表示賓語，與句意不符\n中文翻譯：這個問題把孩子應該能懂（語意不當）。"
            },
            {
                text: "で",
                explanation: "錯誤：『で』表示場所或手段\n中文翻譯：這個問題用孩子應該能懂（語意不當）。"
            }
        ],
        correctAnswer: 0
    },
    {
        id: 460,
        type: "grammar",
        question: "（ ）に なにを いれますか。",
        sentence: "この 本は あの 本（ ） おもしろいです。",
        options: [
            {
                text: "より",
                explanation: "正確答案：名詞＋より，表示比較的基準\n文法考點：比較表現『～より』的用法，表示前項比後項更具某特質\n中文翻譯：這本書比那本書有趣。"
            },
            {
                text: "から",
                explanation: "錯誤：『から』表示起點，與比較無關\n中文翻譯：這本書從那本書有趣（語意不當）。"
            },
            {
                text: "まで",
                explanation: "錯誤：『まで』表示終點，與比較無關\n中文翻譯：這本書到那本書有趣（語意不當）。"
            },
            {
                text: "だけ",
                explanation: "錯誤：『だけ』表示限定，與比較無關\n中文翻譯：這本書只那本書有趣（語意不當）。"
            }
        ],
        correctAnswer: 0
    }
];