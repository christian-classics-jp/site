# chapter-32-35 の論点（32-35）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0266_page.jpg`（p. 236）〜`0278_page.jpg`（p. 248）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,40`）・中（`pct:0,30,100,35`）・下（`pct:0,60,100,40`）に切り出して本文・校注・注解を読んだ（切り出しは `/tmp` に置き、保存していない）。SHA-256 の先頭 16 桁は 0266 が 4811565c8ef6d6b8、0267 が 27bb9c224781eb5e、0268 が 0ed168cf6425dac4、0269 が 6f868c8ecb36482c、0270 が 9f4008af2110f2d1、0271 が d2f99358fb3a4f32、0272 が 9012ff140ef2ffe0、0273 が 825ad823e61eaa3d、0274 が 20b5f8478d9b3295、0275 が 1401f11069baaac5、0276 が ad18ef70a84c9329、0277 が 70834ea9d80d3050、0278 が c9f838317fed0e76。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 30268–31836（ページの境は p. 236 が l. 30271、p. 237 が l. 30402、p. 238 が l. 30542、p. 239 が l. 30631、p. 240 が l. 30767、p. 241 が l. 30855、p. 242 が l. 31006、p. 243 が l. 31130、p. 244 が l. 31263、p. 245 が l. 31412、p. 246 が l. 31553、p. 247 が l. 31695、p. 248 が l. 31816）。OCR は校注を細切れにして並べ、λ を 4、A、2 などに崩すので、校注の略号はすべて画像で読んだ。注解は、p. 242 の下（注 l〜o）、p. 246 の中ほど（注 w の続き〜y）、p. 247 の下（注 b〜f の続き）、p. 248 の下（注 g〜i）の切り出しを開いておらず、OCR で読んだ（ラテン語の部分は崩れが少ない）。

校注の番号は、32 章が p. 236 の「Cap. XXXII.」から 1〜13（p. 236 に 1〜7、p. 237 には番号がなく、p. 238 に 8〜13）、33 章が p. 238 の「Cap. XXXIII.」から 1〜18（p. 239 まで）、34 章が p. 239 の「Cap. XXXIV.」から 1〜19（校注は p. 240）、35 章が p. 240 の「Cap. XXXV.」から 1〜60（p. 248 まで）。注解の記号は、32 章が a〜i（p. 236〜238）、33 章が a〜c（p. 238〜239）、34 章が a〜g（p. 239〜240）、35 章が a〜z（p. 241〜246）に続けて、p. 247 から記号が a に戻り a〜i（p. 247〜248）。各項では校注と注解にページを添える（「校注 p. 236 の 1」「注 p. 247 の a」）。p. 236 の上の校注 10・11 は 31 章、p. 248 の Cap. XXXVI. 以下は 36 章のもので、ここでは扱わない。各章の初めの校注に写本の章題が載る（32 章 ITEM PRO IMPERIO ET POTESTATE IMPERATORIS など、33 章 PRO IMPERATORE など、34 章 DE AVGVSTO IMPERATORE など、35 章 DE SOLEMNIBVS CAESARVM など）。訳には響かないので、論点にはしない。

Bindley は OCR l. 6975–7362 で読み（32 章 l. 6975、33 章 l. 7031、34 章 l. 7074、35 章 l. 7127、36 章 l. 7363）、Oehler の校注に出ない読み（34.2 の Sed est gratius、35.4 の sobrii probi）は、`https://archive.org/download/apologeticusadve00tertuoft/page/n<IIIF の番号−1>_w1600.jpg` から `node tools/fetch.js` で取った `cache/archive.org/apologeticusadve00tertuoft/pages/0146_page.jpg`（p. 108。1d192329e8127982）、`0148_page.jpg`（p. 110。434cae4a64255ae1）で確かめた。Mayor の注は OCR l. 21028–21849（32 章 l. 21028、33 章 l. 21199 ごろ、34 章 l. 21252、35 章 l. 21317。Mayor の本文のページでは p. 98 l. 23〜p. 106 l. 5）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:0,0,100,50` と `pct:0,45,100,55` で切り出して読んだ）には、この範囲（p. 98 l. 23〜p. 106 l. 5）の項目はない（次は p. 106 l. 7 で 36 章）。

Oehler が注で指す自分の他の注は、同じ OCR で読んだ：『偶像崇拝について』9 章の注 h（clausula。l. 10270–10276）、『魂の証言について』の注 m（Tanto abest の magis の省略。p. 401、l. 49665–49685）、『迫害における逃亡について』9 章の注 g（commeatus。p. 477 ごろ、l. 58498–58545）、同 11 章の注 d（sustinere。p. 480 ごろ、l. 58885–58891）。

---

### 32.1 qui vim maximam … scimus retardari（qui の先行詞と小さな異読）
- 底本（Oehler）：Est et alia maior necessitas nobis orandi pro imperatoribus, etiam pro omni statu imperii rebusque Romanis, qui vim maximam universo orbi imminentem ipsamque clausulam saeculi acerbitates horrendas comminantem Romani imperii commeatu scimus retardari.
- ほかの読み：F は et pro omni statu、λ は et ita universo orbe et statu（校注 p. 236 の 1）。qui vim は A・B・D・E・F・G・λ・f、Bongars の写本、ウィーン写本、エアフルト写本。a〜e は quod vim（校注 2）。clausulam は A・B・D・E・λ・a・b・d・e・f、オクスフォード、エアフルト写本、（ウィーン写本）、Pamelius の写本。c は clausuram、F・G は cladem（「破滅」。校注 3）。
- 採る校訂者：Bindley の本文も qui vim … ipsamque clausulam（OCR l. 6977–6981）。注 p. 236 の a に引く Rigaltius は、vim maximam universo orbi imminentem を、世界の焼き尽くされること（conflagratio）をぼかして言うと取る。
- 読者への影響：小 — qui は文法上 nobis（わたしたち）を受け、「…を知っているわたしたち」の意味になる（この点はこの一覧の観察で、注にはない）。刊本の quod なら「…を知っているので」。どちらでも、祈る理由が「ローマの支配の猶予が世の終わりを遅らせると知っていること」である点は同じ。
- 訳での扱い：訳注は付けない。qui の節は「わたしたちは知っているからです」の形で、祈る理由として訳せる。clausulam saeculi は「世の終わり」（『偶像崇拝について』9 章の注 h に引く Rigaltius が clausula を finem et terminum「終わり、限り」と言い換え、この箇所を挙げる。OCR l. 10270–10276）。
- 確かめた資料：Oehler 画像 0266（本文、校注 1〜3、注 a・b）。OCR l. 30279–30283、30346–30358、30310–30315。Bindley OCR l. 6977–6981。

### 32.1 Romani imperii commeatu … retardari（commeatus と、第二テサロニケ二章の「阻止しているもの」）
- 底本（Oehler）：Romani imperii commeatu scimus retardari.
- ほかの読み：本文の異読はない。
- 採る校訂者：Oehler は commeatu を『迫害における逃亡について』9 章の注に指す（注 p. 236 の c）。その注で Oehler は、commeatus を「世にとどまる時の延長、猶予」の意味とし、Festus の「行って戻ってくるために与えられる時」を引いて、この箇所と 46 章の commeatus deliberandi などを挙げる（OCR l. 58498–58545）。Bindley も commeatus を「延期の間、猶予」とし、46 章の commeatus deliberandi、『悔い改めについて』6 章を挙げる（OCR l. 6995–7001）。Mayor も「猶予」として 46 章を指す（l. 21077–21078）。注 d に引く Rigaltius は、パウロがテサロニケの教会に、ローマの支配が絶えるまでは主の日は来ないと、その時代に忌まわしいことを、ことさらぼかした言葉で書き、テルトゥリアヌスも同じ考えで、この弁明で同じことを巧みにおおって言ったとし、『スカプラへ』2 章（キリスト者は皇帝が神によって立てられたと知るので、世が続くかぎり、ローマの支配とともに皇帝の無事を願う。世はそのあいだ続くから）を引く（注 d）。Bindley は、第二テサロニケ二・六の「阻止しているもの」をローマの国家と支配と解するのが古い教会の通説だったとし、エルサレムのキュリロス、ヒエロニムス、アウグスティヌス『神の国』20 巻 19 章などを挙げ、clausulam saeculi に第二テサロニケ二・二〜一一、39 章の pro mora finis、『スカプラへ』2 章を挙げる（OCR l. 6985–7007）。Mayor も第二テサロニケ二・六、『肉の復活について』24 章（阻止しているのはローマの国家にほかならない）、39 章、ラクタンティウス 7 巻 25 章（ローマが無事なうちは終わりは恐れるに及ばない）、ユスティノス『第二弁明』7 章（キリスト者のために神は世の滅びを延ばしている）を挙げる（l. 21031–21089）。
- 読者への影響：中 — 世の終わりがローマの支配によって引き延ばされる、という考えの背景（第二テサロニケ二・六〜七）を知らないと分かりにくい。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない（訳注は別の読みや後代の挿入に限る）。commeatu は「（ローマの支配に与えられた）猶予によって」の意味で訳し、「通行」「補給」にしない。原文は第二テサロニケ二・六〜七（口語訳「いま彼を阻止しているものがある」「いま阻止している者が取り除かれる時まで」）の引用ではないので、『』と出典は付けない。
- 確かめた資料：Oehler 画像 0266（注 c・d）。OCR l. 30317–30396、58498–58545。Bindley OCR l. 6985–7007。Mayor OCR l. 21031–21089。`node tools/bible.js 2Thess.2.6-7`。

### 32.2 Itaque nolumus experiri, et dum precamur differri（Latinius の推定 Ita quae … ea dum）
- 底本（Oehler）：Itaque nolumus experiri, et dum precamur differri, Romanae diuturnitati favemus.
- ほかの読み：B は Itaque nolimus、F は Itaque volumus、Latinius は Ita quae nolumus（校注 p. 236 の 4）。et dum を Latinius は ea dum と推定し、Fr. Junius と Havercamp がよしとした（校注 5）。differri を F とウィーン写本は differre（校注 6）。
- 採る校訂者：Bindley の本文は Latinius の推定どおり Ita quae nolumus experiri, ea dum precamur differri, Romanae diuturnitati favemus（「経験したくないことを、延ばしてほしいと祈ることで、ローマの長い存続に味方する」。OCR l. 6981–6982）。注 p. 236 の e は見出しを「et tum precamur differri, Romanae diuturnitati favemus.」と刷り（本文の et dum と食い違う）、終わりの遅れのためのキリスト者の祈りについて Semler、Hoeckel、Muenter を指し、39 章と『スカプラへ』2 章を挙げる（注 e、p. 237 の上に続く）。
- 読者への影響：小 — 底本の読みでは「それゆえ（それを）経験したくない。延ばされるよう祈ることで、ローマの長い存続に味方する」の旨。推定の読みでも、経験したくないものが 32.1 の世の終わりの苦難で、祈りがローマの存続の味方になる、という意味は同じ。
- 訳での扱い：訳注は付けない。experiri と differri の目的・主語は書かれていないので、32.1 の「恐ろしい苦難」「世の終わり」を補って受ける。dum precamur は「祈るあいだ、祈ることで」。
- 確かめた資料：Oehler 画像 0266（本文、校注 4〜6、注 e の見出し）、0267（注 e の続き）。OCR l. 30283–30284、30301–30304、30350–30362、30398–30421。Bindley OCR l. 6981–6982。

### 32.2 Sed et iuramus, sicut non per genios Caesarum, ita per salutem eorum（ゲニウスと安寧にかけた誓い）
- 底本（Oehler）：Sed et iuramus, sicut non per genios Caesarum, ita per salutem eorum, quae est augustior omnibus geniis.
- ほかの読み：λ は Sed et sic iuramus non、F は Sed et iuramus sicut tum（校注 p. 236 の 7）。
- 採る校訂者：注 p. 237 の f に引く Heraldus は、皇帝のゲニウスにかけて誓うのを拒むことも離反のしるしと見られ、キリスト者は神々に供え物をささげるのと同じく、カイザルのゲニウスにかけて誓うよう命じられたとし、エウセビオス 4 巻 15 章のポリュカルポス（「カイザルのテュケーにかけて誓え」）と、『スキリウムの殉教者行伝』（サトゥルニヌス「われらの王のゲニウスにかけて誓え」、スペラトゥス「わたしはこの世の皇帝のゲニウスを知らない」）を引く。ギリシア人は「カイザルのゲニウスにかけて誓う」をほとんどいつも「カイザルのテュケーにかけて誓う」と訳し、オリゲネス『ケルソス駁論』の最後の巻はテュケーともダイモンとも言う、とする。注 g は、キリスト者がカイザルの安寧にかけて誓うのはためらわなかったとし、法文や、ヨセフがファラオの健やかさにかけて誓ったこと（バシレイオスの詩編注解に引くもの）などを挙げる。Bindley は 9 章・28 章の注を指し、ポリュカルポスとエウセビオス、オリゲネス『ケルソス駁論』8 巻 65 章を挙げ、per salutem には創世記四二・一五（ヨセフ）と『スカプラへ』2 章を並べる（OCR l. 7009–7017、7051–7053）。Mayor も皇帝のゲニウスにかけた誓いについて 28 章、オリゲネス、スキリウムの殉教者を挙げ、per salutem に創世記四二・一五と『諸国民へ』1 巻 17 章（「われわれは皇帝のゲニウスにかけて誓わないので、国家の敵と呼ばれる」の旨）を挙げ、兵士の誓いでテュケーが genius、ソーテーリアーが salus に当たるとする（l. 21111–21144）。
- 読者への影響：中 — genius をどう訳すかで、32.3〜32.4 の「ゲニウスはダイモンと呼ばれる」という論の通り方が変わる（「メインで決めること」に挙げる）。
- 訳での扱い：訳注は付けない。salus は 28〜31 章と同じく「安寧」で揃える（30:1「皇帝たちの安寧のために」）。genius の訳は本の AGENTS.md の訳語表で「32 章のページで決める」とされている。決める材料：(1) 32.3 と 32.4 で本文自身が genios を daemonas と言い換え、32.4 では daemonas, id est genios と言う。(2) 『オクタウィウス』29:5 は genium, id est daemonem を「ゲニウス、つまり…ダイモン」とする。(3) 『スキリウムの殉教者行伝』3:1、5:1 は per genium domni nostri imperatoris を「皇帝の守護霊にかけて」とする（注 f が引くのもこの行伝）。(4) この本の 28:5 は仮に「ゲニウス」。35.10 の genium eius deierabant も同じ語で揃える。創世記四二・一五は口語訳で「パロのいのちにかけて誓います」だが、本文は聖書を引いていない。
- 確かめた資料：Oehler 画像 0266（校注 7）、0267（本文、注 f・g）。OCR l. 30284、30365、30408–30411、30422–30541、30590–30602。Bindley OCR l. 6982–6983、7009–7017、7051–7053。Mayor OCR l. 21111–21144。`node tools/bible.js Gen.42.15`。`books/scillitan-martyrs/src/01-acts/both.md`（3:1、5:1）。`books/octavius/src/chapter-29-32/both.md`（29:5）。

### 32.3 Nescitis genios daemonas dici et inde diminutiva voce daemonia?（縮小辞の daemonia）
- 底本（Oehler）：Nescitis genios daemonas dici et inde diminutiva voce daemonia?
- ほかの読み：本文の異読はない。
- 採る校訂者：注 p. 237 の f の終わりに引く Heraldus は、テュケーとダイモンが同じものを指すことを、εὐτυχεῖς と εὐδαίμονες、δυστυχεῖς と δυσδαίμονες が同じ意味になることで示し、アプレイウス『変身物語』8 巻 20 章（「あなたがたの運とゲニウスにかけて」）を引き、28 章を指す。
- 読者への影響：中 — 原文は daemones（ダイモン）と、そこから縮小の形で作った daemonia を言い分けている。この本の訳語表は daemonium を daemon と訳し分けない（22.1、23.8、23.11）ので、そのままでは「ダイモンと呼ばれ、縮めた形でダイモンと呼ばれる」になってしまう（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。縮小辞の言い分けをどう示すかはメインが決める（「メインで決めること」）。
- 確かめた資料：Oehler 画像 0267（本文、注 f の終わり）、0268（本文の初め）。OCR l. 30478–30489、30548。

### 32.3 Nos iudicium dei suspicimus in imperatoribus … et pro magno id iuramento habemus（大きな省略と小さな異読）
- 底本（Oehler）：Nos iudicium dei suspicimus in imperatoribus, qui gentibus illos praefecit. Id in eis scimus esse quod deus voluit, ideoque et salvum volumus esse quod deus voluit et pro magno id iuramento habemus.
- ほかの読み：suspicimus を A・G は suscipimus（受け入れる。校注 p. 238 の 8）。ideoque et salvum volumus esse quod deus voluit の 8 語を D・E・F・G・a・b・c・e、オクスフォード、エアフルト写本、ウィーン写本は欠き、A・B・λ・d・f、エルノンとガンの写本は保つ（校注 9）。esse を λ と Havercamp は欠く（校注 10）。id iuramento は A・B・E・F・G・c・d・f、エアフルト写本、オクスフォード、ウィーン写本、ゴルツェ写本。λ・b は adiuramento、D・a・e は adiumento（助け）（校注 11）。
- 採る校訂者：Oehler は suspicimus を 18 章の注に指す（注 p. 238 の h）。Bindley の本文は Oehler と同じで、iudicium Dei suspicimus にローマ一三・一〜二を挙げる（OCR l. 7023–7027、7055）。
- 読者への影響：小 — 省いた写本でも「神の望まれたものが皇帝のうちにあると知り、それを大きな誓いとする」の筋は通る。
- 訳での扱い：訳注は付けない。suspicere は 24:5、30:4 と同じく「仰ぐ」。qui gentibus illos praefecit の qui は dei を受け、神の動作なので尊敬語（「諸民族の上にお立てになった」）。pro magno id iuramento habemus は「それを大きな誓いとしている」の意味で、32.2 の per salutem eorum を受ける。ローマ一三・一（口語訳「権威は、すべて神によって立てられたもの」）は引用ではないので『』を付けない。
- 確かめた資料：Oehler 画像 0268（本文、校注 8〜11、注 h）。OCR l. 30548–30551、30566–30569、30605。Bindley OCR l. 7023–7027、7055。`node tools/bible.js Rom.13.1-2`。

### 32.4 daemonas, id est genios, adiurare … non deierare（adiurare と deierare の言葉遊び）
- 底本（Oehler）：Ceterum daemonas, id est genios, adiurare consuevimus, ut illos de hominibus exigamus, non deierare, ut eis honorem divinitatis conferamus.
- ほかの読み：G は ut ex hominibus illos exigamus、F とウィーン写本は ut illos ex hominibus exigamus、λ は ut illos de hominibus expellamus（校注 p. 238 の 12）。ut eis は A・B・E（後の手）・F・G、ウィーン写本、エアフルト写本。D・E・a〜f と Havercamp は ut illis（校注 13）。
- 採る校訂者：注 p. 238 の i は adiurare を ἐξορκίζειν（悪霊を追い出すために呼びかけて命じる）とし、キプリアヌス『デメトリアヌスへ』15 章（ダイモンは、わたしたちに命じられると霊の鞭で苦しめられる）、『ヨハネ行伝』（プロコロス）などを挙げる。Mayor も adiurare を exorcise とし、37 章の終わり、キプリアヌス、ラクタンティウスなどを挙げる。deierare には『偶像崇拝について』20 章（誓って捨てた神々にかけて誓うのは、信仰を偽ることだ。誓いに使う相手を、だれが敬わないことがあろうか）を挙げる（l. 21161–21193）。Bindley の本文は ut illis（OCR l. 7029）。
- 読者への影響：小 — 写本の読みの違いは意味を変えない。ただし、adiurare（命じて追い出す）と deierare（かけて誓う）の対比が訳で分かるかどうかで、論の切れ味が変わる。
- 訳での扱い：訳注は付けない。adiurare は 23 章の悪霊払い、『オクタウィウス』27:7 の adiurati（「まことの唯一の神にかけて命じられると」）に揃えて「（神の名で）命じる」の意味で訳し、deierare は 28.5 の peierare（「偽りの誓いをする」）や 14:5 の deierabat（「かけて誓う」）と揃えて「かけて誓う」とできる。両者の対を残す言い方はメインが決める。
- 確かめた資料：Oehler 画像 0268（本文、校注 12・13、注 i）。OCR l. 30551–30553、30569–30571、30608–30623。Mayor OCR l. 21161–21193。Bindley OCR l. 7027–7029。`books/octavius/src/chapter-26-28/both.md`（27:7）。

### 33.1 in imperatore … quem dominus noster elegit, ut merito dixerim: Noster est magis Caesar（語形と、コロンの後の言葉）
- 底本（Oehler）：Sed quid ego amplius de religione atque pietate Christiana in imperatore? quem necesse est suspiciamus ut eum quem dominus noster elegit, ut merito dixerim: Noster est magis Caesar, a nostro deo constitutus.（コロンの後を大文字で刷る）
- ほかの読み：in imperatore は A・B・D・E・G、ほかは in imperatorem（校注 p. 238 の 1）。a・b は quam（校注 2）。elegit, ut merito は A・B・E・F・G・d・e、（ウィーン写本）、オクスフォード、エアフルト写本、Pamelius の写本。D・a・b・c は elegerit. ut merito、f と Havercamp は elegit? et merito（校注 3）。D・a・b・c・d は ut a nostro（「わたしたちの神によって立てられた者として」。校注 4）。
- 採る校訂者：Bindley の本文は in imperatorem … ut eum, quem dominus noster elegerit. Et merito dixerim, noster est magis Caesar, ut a nostro Deo constitutus（OCR l. 7033–7036）。Mayor は necesse を 45 章の初めに、全体を『スカプラへ』2 章（皇帝は神によって立てられたと知っている）に指す（l. 21202–21204）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。dominus noster（わたしたちの主）は神を指し、尊敬語（「お選びになった」）。Noster est magis Caesar は、底本がコロンと大文字で刷る著者自身の言い切りで、「」に入れるか地の文に溶かすかはメインが決める（23.14 の扱いは問いの文だけに「」を付けるもの）。a nostro deo constitutus は 32.3 と同じく、ローマ一三・一の「神によって立てられた」に近いが引用ではない。
- 確かめた資料：Oehler 画像 0268（本文、校注 1〜4）。OCR l. 30555–30558、30575–30578。Bindley OCR l. 7033–7036。Mayor OCR l. 21202–21204。

### 33.2 Itaque ut meo plus ego illi operor in salutem, siquidem non solum … aut quod … sed etiam quod（ut meo と in eo、構文）
- 底本（Oehler）：Itaque ut meo plus ego illi operor in salutem, siquidem non solum ab eo postulo eam qui potest praestare, aut quod talis postulo qui merear impetrare, sed etiam quod temperans maiestatem Caesaris infra deum magis illum commendo deo, cui soli subicio.
- ほかの読み：ut meo は A・B・E・F・G・(λ)・b〜e、ウィーン写本、オクスフォード。D・a は ut in eo、エアフルト写本は in eo、f・Fulvius Ursinus・Havercamp は et in eo（「その点でも」。校注 p. 238 の 5）。si quidem non solum ab eo postulo eam qui は A・B・D・E・F・G・a〜e など（オクスフォードとウィーン写本は si quid）。f と Fulvius Ursinus は quod non solum ab eo postulo eam qui、λ と Havercamp は non solum quod eam ab eo postulo qui（校注 6）。c は potest praestare, aut quod talis postulo qui を欠く（校注 7）。F は quod の代わりに qui（校注 8）。λ は cui soli eum subiicio（校注 9）。
- 採る校訂者：Bindley の本文は Itaque et in eo plus ego illi operor in salutem, non solum quod eam ab eo postulo, qui potest praestare, aut quod talis postulo, qui merear impetrare（OCR l. 7036–7039）。merear impetrare について、Bindley は相対的な言い方で、まことの神を拝む者として異教徒よりもふさわしく近づけるという意味だとする（l. 7057–7061）。Mayor は merear に 30 章の「その方だけが与えることができ、わたしは得るにふさわしい者だ」を挙げ、operor in salutem にキプリアヌスとラクタンティウスの用例を挙げる（l. 21206–21216）。
- 読者への影響：小 — ut meo は「（カイザルを）わたしのものとして」の意味に取れ、33.1 の Noster est magis Caesar を受ける（この取り方はこの一覧の観察で、注はない）。et in eo なら「その点でも」。どちらでも、キリスト者がだれよりも皇帝の安寧のために働く、という理由の列挙（与えることのできる方に願う、聞かれるにふさわしい者として願う、皇帝を神の下に置いて神にゆだねる）は変わらない。
- 訳での扱い：訳注は付けない。siquidem 以下の三つの理由（non solum … aut quod … sed etiam quod）は、本の AGENTS.md の「文型の訳し方」に従い、理由の小辞を落とさずに分けて訳す。eam は salutem、qui potest praestare は神を指すので尊敬語。cui soli subicio は 30 章の「その方に次ぐ第二の者」を受ける。
- 確かめた資料：Oehler 画像 0268（本文、校注 5〜9）。OCR l. 30558–30562、30578–30586。Bindley OCR l. 7036–7041、7057–7061。Mayor OCR l. 21206–21216。

### 33.3–33.4 Non enim deum imperatorem dicam … interest homini deo cedere. Satis habeat appellari imperator（interest の構文と並行箇所）
- 底本（Oehler）：Non enim deum imperatorem dicam, vel quia mentiri nescio, vel quia illum deridere non audeo, vel quia nec ipse se deum volet dici. Si homo sit, interest homini deo cedere. Satis habeat appellari imperator. Grande et hoc nomen est, quod a deo traditur. Negat illum imperatorem qui deum dicit; nisi homo sit non est imperator.
- ほかの読み：F は quia vel。G は ipse se deum を ipse deum、B は sit を scit（校注 p. 238 の 10）。c は hominis（校注 11）。F・λ・f とウィーン写本は habet（校注 12）。オクスフォードは ille（校注 p. 239 の 13）。
- 採る校訂者：Oehler は interest homini の与格を珍しい構文とし、ほかの例を挙げられないと言う（注 p. 238 の a）。Bindley の本文は interest hominis Deo cedere（OCR l. 7044）。Satis habeat appellari imperator に、Oehler はホラティウス『歌章』3 巻 6 歌 5 行（神々より小さい者としてふるまうから、おまえは支配する）を並べる（注 p. 239 の b）。Mayor は Non enim deum imperatorem dicam 以下に『諸国民へ』1 巻 17 章の終わり（「われわれは皇帝を神と呼ばない。皇帝を神と呼ぶ者は、そうでないものを言うことで皇帝をあざけり、皇帝が望まないことを言うことで悪く言う。皇帝は神になるより生きることを望むから」の旨）と『さそりの毒への解毒剤』14 章を挙げる（l. 21240–21248）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。interest homini deo cedere は「神に譲ることは、人間にとってためになる（人間のつとめだ）」の意味で、hominis でも意味は同じ。volet は未来形で「（神と呼ばれることを）望まないでしょう」。quod a deo traditur の神の動作は尊敬語。
- 確かめた資料：Oehler 画像 0268（本文、校注 10〜12、注 a）、0269（本文、校注 13、注 b）。OCR l. 30563–30565、30586–30587、30625–30628、30634–30636、30650、30683–30686。Bindley OCR l. 7041–7047。Mayor OCR l. 21240–21248。

### 33.5 Respice post te! Hominem te memento!（凱旋の行列の言葉）
- 底本（Oehler）：Hominem se esse etiam triumphans in illo sublimissimo curru admonetur. Suggeritur enim ei a tergo: Respice post te! Hominem te memento! Et utique hoc magis gaudet tanta se gloria coruscare, ut illi admonitio condicionis suae sit necessaria.（コロンの後を大文字で刷り、二つの感嘆符で区切る）
- ほかの読み：Aφ は ei を欠く（校注 p. 239 の 14）。Hominem te memento は A・B・E・F・G・f・ウィーン写本・エアフルト写本（B は mento）。D・a〜e は hominem memento te、λ は hominem te, hominem memento（校注 15）。Et utique は A・B・F・G・λ・d・e・f、ウィーン写本、Pamelius の写本。D・E・a・b・エアフルト写本は Etiam utique、c は Etiam（校注 16）。λ は monitio（校注 17）。
- 採る校訂者：Oehler は凱旋の風習について、スエトニウス『アウグストゥス伝』91 章の注釈者、セビリャのイシドルス 18 巻 2 章 6 節（凱旋する者は人間の分を思い出させるために刑吏に触れられた）、大プリニウス 28 巻 4 章、ヒエロニムスのパウラへの書簡（凱旋する者の車の後ろに付き添う者が「人間であることを忘れるな」と言い続けた）を挙げる（注 p. 239 の c）。Bindley の本文は Respice post te, hominem memento te で、ユウェナリス 10 歌 42 行、大プリニウス 33 巻 1 章、ヒエロニムスを挙げる（OCR l. 7068、7094–7095）。suggeritur に Bindley と Mayor は 18 章の注を指す（Bindley l. 7063、Mayor l. 21249）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。行列で耳打ちされる言葉なので、本の AGENTS.md の「文体」に従い「」に入れて常体にする。語順の異読は意味を変えない。admonitio condicionis suae は「自分の身分（人間であること）を思い出させる言葉」。
- 確かめた資料：Oehler 画像 0269（本文、校注 14〜17、注 c）。OCR l. 30636–30640、30654–30677、30688–30704。Bindley 画像 `0146_page.jpg`（p. 108）、OCR l. 7047–7069、7094–7095。Mayor OCR l. 21249。

### 33.6 Minor erat, si tunc deus diceretur, quia non vere diceretur（後から入ったとする説）
- 底本（Oehler）：Minor erat, si tunc deus diceretur, quia non vere diceretur. Maior est qui revocatur, ne se deum existimet.
- ほかの読み：quia non vere diceretur を D・E・a は欠き、A・B・F・G・λ・b・c・d・e・f、ゴルツェ写本、ウィーン写本は保つ（校注 p. 239 の 18）。
- 採る校訂者：Bindley は Minor erat … diceretur の一文全体を角括弧に入れ、Havercamp がこれを写字生の書き込みとみたと注する（画像 `0146_page.jpg`、OCR l. 7070–7071、7097–7098）。Oehler は一文を本文に刷り、角括弧に入れない。
- 読者への影響：小 — 欠く写本は quia 以下の 3 語だけで、一文全体を欠く写本は Oehler の校注にない。この一文がなくても、次の「神と思わないよう引き戻される者のほうが大きい」で論は通る。
- 訳での扱い：訳注は付けない。Minor erat は事実に反する仮定（si … diceretur）の帰結に直説法の未完了過去を置いた形で、本の AGENTS.md の「事実に反する仮定は現在の推量で訳す」に従い、「（そのとき神と呼ばれたら）かえって小さくなるでしょう」の形にできる。
- 確かめた資料：Oehler 画像 0269（本文、校注 18）。OCR l. 30640–30643、30669。Bindley 画像 `0146_page.jpg`（p. 108）、OCR l. 7070–7072、7097–7098。

### 34.1 Augustus, imperii formator, ne dominum quidem dici se volebat（アウグストゥスと「主」の呼び名）
- 底本（Oehler）：Augustus, imperii formator, ne dominum quidem dici se volebat; et hoc enim dei est cognomen. Dicam plane imperatorem dominum, sed more communi, sed quando non cogor, ut dominum dei vice dicam.
- ほかの読み：λ と f は sed more communi を欠く（校注 p. 240 の 1）。
- 採る校訂者：注 p. 239 の a に引く Heraldus は、imperii formator を、ユリウスが支配を始めて杭を打っただけだったのに対し、アウグストゥスが形を与えて定めた、という適切な呼び名とし、『魂について』46 章の reformator、アンミアヌスの imperii formator（支配を担うにふさわしい君主の意味）と比べる。注 b は、キリスト者が皇帝に通例の誉れを減らし、あざけるようにさえ見えたので大逆の罪人と見なされたとし、キリスト者は通例の意味でなら皇帝を主と呼ぶのを拒まないが、神の代わりに立てる意味では拒んだ、と説き、ポリュカルポス（「『主なるカイザル』と言って、供え物をささげ、助かることの何が悪いのか」）を引く。アウグストゥスが主の呼び名を拒んだ証拠にスエトニウス『アウグストゥス伝』53 章とオロシウス 6 巻 21 章を挙げる（注 b、p. 240 の上に続く）。Bindley は同じ逸話をスエトニウス Oct. 43 として引き、ティベリウスも拒み、ドミティアヌスは「われらの主にして神」を名のったとし、dei vice を「神の意味で、神として」と more communi に対する言い方とする（OCR l. 7100–7107）。Mayor はスエトニウス『アウグストゥス伝』53 章と『ティベリウス伝』27 章を引く（l. 21255–21281）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。dominus は 34.1〜34.3 で、神（hoc enim dei est cognomen、Dominus enim meus unus est）、皇帝、家の主人（familiae … domini）の三つに使われ、論はこの語の重なりに乗っている。訳語表に dominus の項がないので、三つを同じ「主」で通すか、家の主人を「主人」とするかはメインが決める（「メインで決めること」）。スエトニウスの章番号は Oehler・Mayor が 53 章、Bindley の OCR が 43 と刷るが、ここでは判断しない。
- 確かめた資料：Oehler 画像 0269（本文、注 a・b）、0270（本文、校注 1、注 b の終わり）。OCR l. 30646–30662、30706–30760、30770–30771、30789、30814–30817。Bindley 画像 `0146_page.jpg`（p. 108）、OCR l. 7076–7080、7100–7107。Mayor OCR l. 21255–21281。

### 34.2 Dominus enim meus unus est, deus omnipotens aeternus … Sed et gratius est nomen pietatis quam potestatis（小さな異読と pietas）
- 底本（Oehler）：Ceterum liber sum illi. Dominus enim meus unus est, deus omnipotens aeternus, idem qui et ipsius. Qui pater patriae est, quomodo dominus est? Sed et gratius est nomen pietatis quam potestatis.
- ほかの読み：deus omnipotens aeternus は Aβ・D・E・λ・a・b、エアフルト写本。(AφBφ)・e・f と Havercamp は deus omnipotens et aeternus、F は deus omnipotens aeternus deus、G・c・d とウィーン写本は omnipotens deus aeternus（校注 p. 240 の 2）。F とウィーン写本は patriae pater、λ は Quomodo qui pater patriae est, dominus est?（校注 3）。est nomen は A・B・E・F・G、ウィーン写本、エアフルト写本。D・a・b・e・f と Havercamp は nomen est、c は nomen（校注 4）。
- 採る校訂者：Bindley の本文は Deus omnipotens et aeternus … Sed est gratius nomen pietatis, quam potestatis（Sed est。画像 `0146_page.jpg` で確かめた。Oehler の校注に出ない）。liber sum illi の illi を強調とし、「その人に対しては、わたしは自由人だ」の意味に取る（OCR l. 7080–7083、7109–7113）。Oehler は pietatis quam potestatis に『祈りについて』2 章（神を父と呼ぶ呼び名は、慈しみと力の両方の呼び名だ）を並べる（注 p. 240 の c）。Mayor は unus にユスティノス『第一弁明』17 章、pater patriae にユウェナリス 8 歌 244 行を挙げ、liber sum illi に 13 章の初め（nobis dei sunt）を並べる（l. 21283–21292）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。deus omnipotens aeternus は神の呼び名で、et の有無は訳に響かない。idem qui et ipsius（皇帝自身の主でもある方）。pietas はここでは「父」の呼び名が示す情愛・慈しみ（注 c の『祈りについて』2 章）で、33.1 の pietate Christiana（皇帝への忠誠・敬い）、35.3 の pietas erit（皇帝への忠誠と称されるもの）と意味がずれる。訳語表に pietas の項がないので、訳し分けはメインが決める。
- 確かめた資料：Oehler 画像 0270（本文、校注 2〜4、注 c）。OCR l. 30771–30774、30789–30793、30819–30822。Bindley 画像 `0146_page.jpg`（p. 108）、OCR l. 7080–7083、7109–7113。Mayor OCR l. 21283–21292。

### 34.3 Etiam familiae magis patres quam domini vocantur（並行箇所と小さな異読）
- 底本（Oehler）：Etiam familiae magis patres quam domini vocantur.
- ほかの読み：F とウィーン写本は familiae を欠く。G は etiam の代わりに et ideo（校注 p. 240 の 5）。
- 採る校訂者：Oehler と Mayor は、セネカ『書簡』47 の 14 節（先祖は家の主人を「家の父」と呼び、奴隷を「家の者」と呼んだ）を引く（注 p. 240 の d、Mayor l. 21294–21297）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。familiae は「家の者たちの（家の）」で、「家長は、主人よりも父と呼ばれる」の意味。
- 確かめた資料：Oehler 画像 0270（本文、校注 5、注 d）。OCR l. 30774–30775、30793–30794、30824–30832。Mayor OCR l. 21294–21297。

### 34.3 Tanto abest ut imperator deus debeat dici, quod non potest credi non modo turpissima sed et perniciosa adolatione（構文）
- 底本（Oehler）：Tanto abest ut imperator deus debeat dici, quod non potest credi non modo turpissima sed et perniciosa adolatione.
- ほかの読み：d は、どの写本からか分からないが Tanto autem abest（校注 p. 240 の 6）。quod non potest credi を λ は adolatione の後に置き、f は欠く（校注 7）。c・d は nisi turpissima et perniciosa（「最も恥ずべき、身を滅ぼすへつらいによるのでなければ、信じられない」。d はヴァティカンの写本の一つから perniciosissima。校注 8）。adolatione は A・B、エルノンとガンの写本（ほかは adulatione。校注 9）。
- 採る校訂者：Oehler は Tanto abest に比較級 magis の省略を見て、『魂の証言について』の注を指す（注 p. 240 の e）。その注で Oehler は、テルトゥリアヌスに magis の省略が数えきれないほどあるとし、『迫害における逃亡について』2 章の tanto abest などを挙げる（OCR l. 49665–49685）。Mayor は逆に、ここは magis の省略ではなく差を表す奪格だとする（l. 21299–21301）。注 f に引く Heraldus は non modo を「…だけでなく」（ギリシア語の οὐχ ὅπως の言い方）とし、Oehler は perniciosa を、神の怒りを招き、確かな破滅を恐れさせるからだと説く（注 f）。Bindley は、皇帝が神と呼ばれるべきであるどころではない（それは信じられないこと）と、quod non potest credi を挟み込みのように取り、Tanto は前の文からの推論をまとめるとする（OCR l. 7115–7117）。Bindley の本文は adulatione（l. 7087）。
- 読者への影響：中 — quod non potest credi の掛かり方と、奪格の adolatione が何に掛かるかで、文の形が変わる。底本の読みでは「皇帝が神と呼ばれるべきだというのは、それほどかけ離れたことで、信じられない。（そう呼ぶのは）最も恥ずべきだけでなく、身を滅ぼすへつらいだ」という筋に取れる。刊本の nisi なら「へつらいによらなければ信じられない」。
- 訳での扱い：訳注は付けない。構文の取り方はメインが決める。どちらでも、奪格の句を一つの文に分けて「へつらい」と明示すれば意味は通る。adolatio は訳語表の adolatio（25.17）「へつらい」で、34.5 の adulatio（底本の綴り）も同じ訳にする。
- 確かめた資料：Oehler 画像 0270（本文、校注 6〜9、注 e・f）。OCR l. 30775–30777、30794–30797、30834–30843、49665–49685。Bindley 画像 `0146_page.jpg`（p. 108）、OCR l. 7084–7087、7115–7117。Mayor OCR l. 21299–21301。

### 34.4–34.5 Tamquam si habens imperatorem alterum appelles … Desine alium deum credere（二人称単数と小さな異読）
- 底本（Oehler）：Tamquam si habens imperatorem alterum appelles, nonne maximam et inexorabilem offensam contrahes eius quem habuisti, etiam ipsi timendam quem appellasti? Esto religiosus in deum, qui vis illum propitium imperatori. Desine alium deum credere atque ita et hunc deum dicere cui deo opus est.
- ほかの読み：λ は tamquam を欠く（校注 p. 240 の 10）。E とエアフルト写本は habes（校注 11）。F は alium（校注 12）。G は inexplicabilem（校注 13）。d は、どの写本からか分からないが deum colere vel credere（校注 14）。λ は deo の代わりに deis（校注 15）。
- 採る校訂者：Bindley は Tamquam si を前の文に続け（セミコロン）、本文は alium Deum colere vel credere（d と同じ。OCR l. 7087–7092、7122）。Mayor は offensam にスエトニウスを挙げるだけ（l. 21303）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。appelles、contrahes、habuisti、appellasti、Esto、vis、Desine は二人称単数で、本の AGENTS.md の「二人称単数は『あなた』」に従う。たとえ（皇帝がいるのに別の者を皇帝と呼べば、もとの皇帝の怒りを招き、呼ばれた者にも恐ろしいことになる）は、34.3 の「皇帝を神と呼ぶ」ことに重ねる。illum は deum、hunc は imperatorem を指す。religiosus は訳語表の religiositas「信心深さ」に揃えて「信心深くあれ」。
- 確かめた資料：Oehler 画像 0270（本文、校注 10〜15）。OCR l. 30777–30781、30797–30799。Bindley OCR l. 7087–7092、7122。Mayor OCR l. 21303。

### 34.5 timeat saltim de infausto. Maledictum est ante apotheosin deum Caesarem nuncupari（不吉と、フルダ写本だけの一文）
- 底本（Oehler）：Si non de mendacio erubescit adulatio eiusmodi hominem deum appellans, timeat saltim de infausto. Maledictum est ante apotheosin deum Caesarem nuncupari.
- ほかの読み：F は adulator（校注 p. 240 の 16）。saltim は A・B・E・G、エアフルト写本（校注 17）。λ は Male traditum est（「…と呼ぶのは悪い言い伝えだ」。校注 18）。nuncupari は A・B・F・G、ウィーン写本、Pamelius の写本。D・E・λ・a〜f、エアフルト写本、オクスフォードは nuncupare（校注 19）。λ は nuncupare の後に、Scio te isto nomine male velle et male abominari, ut vivente adhuc imperatore deum appelles, quod nomen illi mortuo accidit（「その名で、まだ生きている皇帝を神と呼んで、悪く願い、悪い前兆を口にしていることを、わたしは知っている。その名は死んだ者に付くものだから」の旨。abominari を Havercamp は adominari、accidit を Scioppius と Havercamp は accedit と推定）を加える（校注 19）。
- 採る校訂者：Oehler は de infausto に、アルテミドロス『夢判断』3 巻 13 章（病人が自分が神になった夢を見れば死ぬ。神々も死者も、もう死なないから）と、タキトゥス『年代記』15 巻 74 章（君主が神の誉れを受けるのは、人のあいだで生きるのをやめてからだ）を挙げる（注 p. 240 の g、p. 241 の上に続く）。Bindley の本文は nuncupare で、タキトゥス『年代記』15 巻 74 章（ネロの生前の神の誉れが死の前兆とされた）、スエトニウスなどを挙げる（OCR l. 7124–7125、7142–7147）。Mayor は『諸国民へ』1 巻 17 章の終わり、『オクタウィウス』の一節（この名は本人の望まないのに書き加えられる。人間のままでいたいと願い、神にされることを恐れる。Mayor は 23 章 3 節と挙げるが、このリポジトリの『オクタウィウス』では 21.10）、タキトゥス、カラカラがゲタについて言った「生きていないなら、神になればよい」を挙げる（l. 21305–21314）。
- 読者への影響：小 — λ の加える一文は、底本の Maledictum est … nuncupari の言い換えで、論を変えない。
- 訳での扱い：訳注は付けない。infaustum は「不吉なこと」、Maledictum est は「（生前に神と呼ぶのは）悪い言葉、呪いになる」の意味で、apotheosis（死後に神として祀ること）は訳語表の consecrare「神として祀る」と揃えて言い換えられる。『オクタウィウス』21:10 の既訳（「この名は、本人が望まないのに書き加えられるのです」）を参考にできる。
- 確かめた資料：Oehler 画像 0270（本文、校注 16〜19、注 g の初め）、0271（注 g の続き）。OCR l. 30782–30784、30799–30804、30845–30889。Bindley OCR l. 7122–7125、7142–7147。Mayor OCR l. 21305–21314。`books/octavius/src/chapter-20-22/both.md`（21.10）。

### 35.1 publici hostes … neque temerarios honores … conscientia potius quam lascivia（小さな異読と語義）
- 底本（Oehler）：Propterea igitur publici hostes Christiani, quia imperatoribus neque vanos neque mentientes neque temerarios honores dicant, quia verae religionis homines etiam sollemnia eorum conscientia potius quam lascivia celebrant.
- ほかの読み：G とウィーン写本は publice（校注 p. 240 の 1）。G は quia の代わりに qui（校注 2）。
- 採る校訂者：Oehler は temerarios を、浮かれ騒ぎで神々を拝むのは無謀で、拝むのではなく挑み、怒らせることだ、と説く（注 p. 241 の a）。sollemnia Caesarum は誕生日、凱旋、公の誓願、即位十年・二十年・三十年の祭りなど、と注する（注 b）。Bindley は publici hostes を、皇帝への不忠が国家への罪だったからとし、28 章を指す（OCR l. 7149–7150）。Mayor は publici hostes に 2 章、37 章、『スカプラへ』2 章を、sollemnia に『見世物について』6 章、プリニウスのトラヤヌス宛ての書簡などを挙げる（l. 21320–21360）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。publici hostes は訳語表の publicus hostis「国家の敵」。dicant は接続法で、敵とされる理由（相手の言い分）を示す。lascivia はここでは非難の語（浮かれ騒ぎ）で、訳語表の lascivus（3.4〜3.5 のほめ言葉「陽気な」）は当てない（15.1 の lasciviae ingenia「浮かれた才知」に近い）。verae religionis homines の religio は、ほかの章の「宗教」で通すか、皇帝への敬いの意味を出すかをメインが決める（「メインで決めること」）。
- 確かめた資料：Oehler 画像 0270（本文、校注 1・2）、0271（本文、注 a・b）。OCR l. 30786、30810–30811、30861–30865、30891–30900。Bindley OCR l. 7129–7132、7149–7150。Mayor OCR l. 21320–21360。

### 35.2 focos et toros in publicum educere … civitatem tabernae habitu abolefacere, vino lutum cogere（toros と choros、abolefacere）
- 底本（Oehler）：Grande videlicet officium focos et toros in publicum educere, vicatim epulari, civitatem tabernae habitu abolefacere, vino lutum cogere, catervatim cursitare ad iniurias, ad inpudentias, ad libidinis inlecebras.
- ほかの読み：toros を D・E・F・a・b とヴァティカンの写本の一つは choros（「踊りの輪」。校注 p. 241 の 3）。λ は deducere（校注 4）。c と Joseph Scaliger は obolefacere。λ は civitatem in tabernae habitum demutare（「町を居酒屋の姿に変える」。校注 5）。λ は vinulentiam facere、G は vinolentum cogere（校注 6）。λ は ad inpudicitias, ad libidinum ludibria（校注 p. 242 の 7）。
- 採る校訂者：注 p. 241 の c に引く Heraldus は、盛大な祭りでは食卓を公の場に出す習わしがあったとし、42 章（リベラリアの祭りに公の場で食卓につかない）とタキトゥス『年代記』15 巻（ネロが町全体を家のように使った。章は Bindley と Mayor が 37 章とする）を引く。注 c の終わりで Oehler は「focos は香箱（acerras）と解し、toros は神々の饗宴の寝椅子（lectisternia）のこと」とする。注 d は vicatim epulari を、部族・家族・近所ごとに公に宴を開いたことと説く。注 e に引く Fr. Junius は、町を不潔な安食堂にすることと取り、Scaliger と Gelenius の obolefacere（悪臭を放たせる）を紹介する。Oehler は abolefacere を保ち、町全体に居酒屋の顔をかぶせ、もとの姿が消えたように見えるほど変える、の意味とし、『女性の装いについて』1 巻 3 章の abolefactam を挙げる（注 e）。注 f に引く La Cerda は、祭りで泉に酒が注がれ、酒の泥ができる習わしを言うとし、Oehler は単に「酒をこぼして地面をぬらし、泥にする」と解する（注 f）。注 g は catervatim を 39 章の non in catervas caesionum と並べる。Bindley の本文は Oehler と同じ（toros、abolefacere）で、abolefacere を abolere と同じ「居酒屋の装いのもとに町を消す」とし、マルティアリス 7 巻 61 歌（ローマは大きな居酒屋だった）を挙げ、obolefacere を不要な推定、habitum demutare をフルダ写本の読みとする。vino lutum cogere を「酒で泥を作る」とし、cogere を「固める」の意味とする（OCR l. 7132–7135、7152–7167）。Mayor も 42 章、タキトゥス、マルティアリスを挙げる（l. 21361–21412）。
- 読者への影響：小 — choros（踊りの輪を出す）でも、祭りの騒ぎの描写であることは同じ。
- 訳での扱い：訳注は付けない。Grande videlicet officium は皮肉（「さぞ立派な務めでしょう」）。focos を、注 c の Oehler に従って香箱（訳語表の acerra）とするか、炉・火鉢とするかはメインが決める。訳語表の foculus「小さな火鉢」は 9:16 のキリスト者を試す道具で、文脈が違う。toros は食卓の寝椅子。abolefacere は「町を居酒屋の姿にして、もとの姿を消す」の意味で、λ の demutare（変える）を足さない。
- 確かめた資料：Oehler 画像 0271（本文、校注 3〜6、注 c〜g）、0272（本文、校注 7）。OCR l. 30868–30878、30902–31000、31012、31026。Bindley OCR l. 7132–7136、7152–7167。Mayor OCR l. 21361–21412。

### 35.3 Sicine … Haecine … Qui observant disciplinam de Caesaris respectu, hi eam propter Caesarem deserunt（綴りと時制）
- 底本（Oehler）：Sicine exprimitur publicum gaudium per dedecus publicum? Haecine solemnes dies principum decent, quae alios dies non decent? Qui observant disciplinam de Caesaris respectu, hi eam propter Caesarem deserunt, et malorum morum licentia pietas erit, occasio luxuriae religio deputabitur?
- ほかの読み：Sicine は A・B・ウィーン写本、G は Sic ne、λ は Sic enim、ほかは Siccine（校注 p. 242 の 8）。dedecus publicum は A・B・E・G・λ・エアフルト写本・（ウィーン写本）、D・F・a〜f は publicum dedecus（校注 9）。Haecine は A、ほかは Haeccine。λ は Haec in solemnes dixi principum decernuntque alios dies non decet. Quae observant と大きく違う（校注 10）。F・G は dies を欠く（校注 11）。a〜e は ii、E とエアフルト写本は hii（校注 12）。f・Fulvius Ursinus・Havercamp は deserent（未来。校注 13）。A は luxorie（校注 14）。
- 採る校訂者：Oehler は Sicine・Haecine を最良の写本の綴りとする（注 p. 242 の h）。de Caesaris respectu の de は原因・手段を表す（注 i）。occasio luxuriae religio deputabitur に『偶像崇拝について』1 章（偶像の祭りに、浮かれ騒ぎと酔いのない祭りがあるか）を並べる（注 k）。Bindley の本文は Siccine … Haeccine … hi eam propter Caesarem deserent（OCR l. 7136–7140）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。de Caesaris respectu は「カイザルを顧みて（ふだんは規律を守る者が）」、propter Caesarem は「カイザルのためと称して（その日には捨てる）」の意味で、二つの句の対を残す。pietas、religio は皇帝への敬い・忠誠の意味（Bindley は 35 章以下の religio を皇帝への忠誠の意味とする。l. 7199–7201）。訳し方は「メインで決めること」。
- 確かめた資料：Oehler 画像 0272（本文、校注 8〜14、注 h〜k）。OCR l. 31012–31017、31026–31038、31042–31058、31081–31088。Bindley OCR l. 7136–7141、7199–7201。

### 35.4 vota et gaudia Caesarum … expungimus … laureis postes obumbramus nec lucernis diem infringimus（語義と小さな異読）
- 底本（Oehler）：O nos merito damnandos! Cur enim vota et gaudia Caesarum casti et sobrii et probi expungimus? cur die laeto non laureis postes obumbramus nec lucernis diem infringimus?
- ほかの読み：c は adumbramus（校注 p. 242 の 15）。λ は effringimus（校注 16）。
- 採る校訂者：Oehler は expungimus を「果たす」（perficimus）とし、テルトゥリアヌスの好む用法として 2・15・20・21 章などを挙げる（注 p. 242 の l）。laureis postes … lucernis の習わしに大プリニウス、タキトゥス、ユウェナリス、『偶像崇拝について』15 章、『兵士の冠について』13 章などを挙げる（注 m）。Bindley の本文は casti et sobrii probi（二つ目の et がない。画像 `0148_page.jpg` で確かめた。Oehler の校注に出ない）で、expungimus を「果たす」とし 2 章の注を指す（OCR l. 7174–7177、7194–7197）。Mayor も 2 章の注と『偶像崇拝について』15 章（戸口に月桂樹を飾り、灯をともすのはダイモンの敬いだ。家の者が戸口を飾ったために幻で叱られた兄弟の話）などを挙げる（l. 21423–21507）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。O nos merito damnandos! は皮肉の叫び。expungimus は「果たす」。lucernis diem infringimus は「昼間に灯をともして日の光を破る」の意味で、昼の灯は祝いの飾り。
- 確かめた資料：Oehler 画像 0272（本文、校注 15・16、注 l・m の見出し）。注 l・m の本文は OCR l. 31060–31115。Bindley 画像 `0148_page.jpg`（p. 110）、OCR l. 7174–7177、7194–7197。Mayor OCR l. 21423–21507。

### 35.5 Honesta res est … induere domui tuae habitum alicuius novi lupanaris（皮肉と二人称単数）
- 底本（Oehler）：Honesta res est solemnitate publica exigente induere domui tuae habitum alicuius novi lupanaris.
- ほかの読み：a・c は inducere（校注 p. 242 の 17）。
- 採る校訂者：Oehler は『偶像崇拝について』15 章の終わりの注を指す（注 p. 242 の n）。Mayor はその文（娼家を捨てたのなら、自分の家に新しい娼家の顔をかぶせるな）と『妻へ』2 巻 6 章などを引く（l. 21508–21515）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Honesta res est は皮肉（「さぞ立派なことでしょう」）。domui tuae は二人称単数で、本の AGENTS.md に従い「あなたの家」。
- 確かめた資料：Oehler 画像 0272（本文、校注 17、注 n の見出し）。OCR l. 31020–31021、31039、31117–31119。Mayor OCR l. 21508–21515。

### 35.5 in hac quoque religione secundae maiestatis, de qua in secundum sacrilegium convenimur … fidem et veritatem vestram demonstrare（第二の罪名と大きな異読）
- 底本（Oehler）：Velim tamen in hac quoque religione secundae maiestatis, de qua in secundum sacrilegium convenimur Christiani non celebrando vobiscum solemnia Caesarum quo more celebrari nec modestia nec verecundia nec pudicitia permittunt, sed occasio voluptatis magis quam digna ratio persuasit, fidem et veritatem vestram demonstrare, ne forte et isthic deteriores Christianis deprehendantur qui nos nolunt Romanos haberi, sed ut hostes principum Romanorum.
- ほかの読み：λ は solemnia Caesarum から demonstrare までを sollemnia Caesarum quomodo celebranda occasio voluntatis magis quam digna ratio persuasit si nec modestia nec verecundia permittunt fidem et veritatem nostram demonstrare と大きく違えて読む（校注 p. 243 の 18）。Aβ は dignatio persuasit。f は sed occasio voluptatis magis quam digna ratio persuasit を欠く（校注 19）。a は nostram（校注 20）。f は isti、オクスフォードは istis（校注 21）。F とウィーン写本は deprendantur（校注 22）。sed ut は A・B・D・E・F・G・λ、オクスフォード、ウィーン写本、エアフルト写本。a〜f と Havercamp は sed（校注 23）。
- 採る校訂者：注 p. 242 の o で Oehler は、31 章と 10 章の注を指し、テルトゥリアヌスは「宗教を害した罪」を退けてから「もっと尊い威光を害した罪」に移った、と説く。皇帝の威光は不死の神々の次の第二の位にあるので、皇帝には第二の敬い（secunda religio）がささげられるべきで、それを控える者は第二の神聖を汚す罪の罪人とされた、とする（注 o、p. 243 の下に続く）。Bindley の本文は sed hostes（ut がない）。religione secundae majestatis に 28 章と『諸国民へ』1 巻 17 章を挙げ、以下の章で religio は皇帝への忠誠の意味でよく使われるとする。fidem et veritatem vestram demonstrare は皮肉で、その皮肉は 35.8 の Plane ceteri ordines … に続く、とする（OCR l. 7180–7189、7199–7204）。Mayor は 28 章の「第二の罪名、もっと尊い威光を害した罪」と、convenimur に 31 章を指す（l. 21517–21534）。
- 読者への影響：小 — λ の読みは文の組み立てが違うが、皇帝の祭りを一緒に祝わないことで第二の罪に問われる、という筋は同じ。vestram（あなたがたの忠誠と真実）か nostram（わたしたちの）かでは、皮肉の向きが変わるが、写本の大勢は vestram。
- 訳での扱い：訳注は付けない。secundae maiestatis、secundum sacrilegium は、28:3 の「第二の罪名」「もっと尊い威光を害したという罪」と、訳語表の maiestas「威光」、sacrilegium「神聖を汚す行い」に揃える。convenimur は 31:2 の「罪に訴えられる」（訳語表の crimen laesae religionis／maiestas の項）。fidem et veritatem vestram は皮肉。ne forte … deprehendantur が本の AGENTS.md の「recogitare・retractare などに続く ne」の見込みの形に当たるかは、資料に注がなく、この一覧の観察として挙げるだけにする（Velim … demonstrare の目的に続く ne で、「…と見破られることがないように」とも「…と見破られるのではないか」とも取れる）。長い一文なので、本の AGENTS.md の「文体」に従って、主文（Velim … demonstrare）を先に見つけて分ける。
- 確かめた資料：Oehler 画像 0272（本文、注 o の見出し）、0273（本文、校注 18〜23、注 o の続き）。OCR l. 31021–31023、31121–31127、31136–31140、31146–31161、31178–31184。Bindley OCR l. 7180–7189、7199–7204。Mayor OCR l. 21517–21538。

### 35.6 Ipsos Quirites, ipsam vernaculam septem collium plebem convenio（convenire と vernacula）
- 底本（Oehler）：Ipsos Quirites, ipsam vernaculam septem collium plebem convenio, an alicui Caesari suo parcat illa lingua Romana?
- ほかの読み：λ と Havercamp は ipsamque（校注 p. 243 の 24）。
- 採る校訂者：注 p. 243 の p に引く Heraldus は、町の下層民の気質は口の悪さに傾きやすいとし、タキトゥス『同時代史』3 巻 32 章（町の民のからかい好きな気質）と 2 巻 88 章（町生まれの口の達者さ）を引く。Oehler は vernaculam を dicacem（口の悪い）と説く Pignorius を挙げる（注 p）。Bindley は vernaculam plebem にタキトゥス『年代記』1 巻 31 章を挙げ、convenio を 9 章・28 章と同じ法廷の語（「…かどうか、法廷で問いただす」）と取る。alicui Caesari suo parcat に『見世物について』16 章（競技場では君主にも市民にも容赦しない）を挙げる（OCR l. 7206–7215）。Mayor も 19 章、38 章、『見世物について』16 章、『諸国民へ』1 巻 17 章（あなたがたの町生まれの民の不敬、像が知っている落首、競技場に響く当てこすりと悪口。武器でなくとも、舌でいつも反逆している）を挙げ、convenio に 28 章を指す（l. 21540–21559）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。convenio は 35.5 の convenimur（罪に訴えられる）と同じ語の法廷の意味で、ここでは著者が民衆を「呼び出して問いただす」。vernaculam は「生え抜きの」と「口の悪い」のどちらの含みで訳すかをメインが決める。Quirites は「クイリテス（ローマ市民）」のように補える（名前の表にない）。
- 確かめた資料：Oehler 画像 0273（本文、校注 24、注 p）。OCR l. 31140–31142、31162、31186–31200。Bindley OCR l. 7189–7192、7206–7215。Mayor OCR l. 21540–21559。

### 35.6 Testis est Tiberis, et scholae bestiarum（何を指すか）
- 底本（Oehler）：Testis est Tiberis, et scholae bestiarum.
- ほかの読み：a〜d は et Tiberis（校注 p. 243 の 25）。f は schola bestiarum、Latinius は scholae bestiariûm（「野獣と闘う者たちの養成所」。校注 26）。
- 採る校訂者：注 p. 243 の q に引く Heraldus は、この箇所について確かなことは何も言えないとし、ローマの民衆が新しい君主に取り入るため、死んだ君主の遺体をティベリス川に投げ込むか獣に引き裂かせるよう求めた習わし（コンモドゥスの例）を挙げつつ、それにも満足せず、circus（競技場）と書いたのではないかとまで推し、結論は出さない。Iac. Gothofredus はティベリウスの館（宮殿）と取った。Havercamp は、昔は川岸に民衆が住み、有力者は丘に住んだので、民衆の住む所を指すとした。Oehler は、ティベリス川の近くの競技場（大競技場、フラミニウス競技場）とマルスの野の見世物を指すのは疑いないとし、scholae bestiarum は獣が人を引き裂くよう仕込まれた野獣狩りの見世物だとして、Rigaltius（見世物と競技場では、ときに民衆の声が自分の皇帝への当てこすりにもなった）を引き、『諸国民へ』1 巻 17 章を並べる（注 q、p. 244 の上に続く）。Bindley は、川の近くの低い地区に住む最下層の民衆と、皇帝についてのその下品な当てこすりを言うとし、scholae bestiarum は円形闘技場や競技場を皮肉に呼んだもので、ローマの民衆が「教え」を受けに通う場所だから、とする（42 章の注を指す。OCR l. 7217–7264）。
- 読者への影響：中 — 何を指すかが分からないと、なぜ証人なのかが読み取りにくい。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない（訳注は別の読みや後代の挿入に限る）。Oehler の解釈（川の近くの競技場と見世物）を採るか、Bindley の解釈（川辺の民衆）を採るかで補い方が変わるので、文字どおり「ティベリス川が証人であり、獣の学校も証人だ」の意味にとどめ、補うならメインが決める。
- 確かめた資料：Oehler 画像 0273（本文、校注 25・26、注 q）、0274（注 q の続き）。OCR l. 31142–31143、31163、31170、31202–31258、31301–31325。Bindley OCR l. 7192、7217–7264。

### 35.6 Iam si pectoribus … natura obduxisset, cuius non praecordia insculpta apparent novi ac novi Caesaris scenam congiario dividundo praesidentis?（法の食い違いと scena）
- 底本（Oehler）：Iam si pectoribus ad translucendum quandam specularem materiam natura obduxisset, cuius non praecordia insculpta apparent novi ac novi Caesaris scenam congiario dividundo praesidentis?
- ほかの読み：λ は humanis ad transducendum quoddam（Havercamp は translucendum quondam と直す）specularem materiam natura、Meursius は ad translucendum quoddam speculare natura と推定（校注 p. 243 の 27）。insculpta は (AφBφDφ)・F・G・λ・c〜f、Pamelius の写本のいくつか、ウィーン写本。Aβ は insculta（s の下に古い手の点）、a・b は inscalpta、E・エアフルト写本・オクスフォード・アンブロジアーナ写本は inculta（校注 p. 244 の 28）。apparent は A・B・D・E・G、アンブロジアーナ写本、エアフルト写本、オクスフォード、ウィーン写本。F・a・b・c・f と Havercamp は apparerent（接続法）、d・e はどの写本からか分からないが appararent、λ は pareret。Fulvius Ursinus は apparerent hac novi Caesaris scena と直す（校注 29）。D・F は novi Caesaris、λ は novum ac novum Caesarem（校注 30）。λ は scenam conceario、G は scenam cogiario、d は scenam in congiario、b・c は scena in congiario（校注 31）。dividundo praesidentis は A・B・F・G・c・d・f、ウィーン写本（G・c は praesentis）。D・E・a・b・e は dividendo、λ は dividundo praesidentem（校注 32）。
- 採る校訂者：注 p. 244 の r に引く Rigaltius は scenam にウェルギリウス『牧歌』3 歌 106 行（王の名が書かれた花）を並べ、「自然が人の胸に、透けて見える鏡のような材を張っていたら、あなたがたのうち、カイザルの死を邪な欲で願い、次々と新しいカイザルのたびに施しを得ようとする願いを、胸の内が漏らさない者が何人いるか」と言い換える。Oehler は obduxisset と apparent の時制の食い違いを、23 章の Nollent … fugentur … liceret と同じものとして挙げる（注 r）。Bindley の本文は apparerent … scaenam で、congiario dividundo に 30 章の注、スエトニウス『カリグラ伝』17 章を挙げる（OCR l. 7232–7238、7266–7267）。Mayor は translucendum にテミスティオス、novi ac novi に『マルキオン駁論』1 巻 8 章（いつも新しい神格化の名目で）を挙げる（l. 21561–21569）。
- 読者への影響：小 — 法の食い違いは訳では消える。
- 訳での扱い：訳注は付けない。事実に反する仮定（si … obduxisset）なので、本の AGENTS.md に従って現在の推量で訳す（「張っていたら、…見えるでしょう」）。scenam は「場面、情景」で、胸の内に彫り込まれた、次々と替わる新しいカイザルが施しの分配を司る場面、の意味（注 r）。congiarium は皇帝が民衆に配る施し。
- 確かめた資料：Oehler 画像 0273（本文、校注 27）、0274（本文、校注 28〜32、注 r）。OCR l. 31143、31171–31175、31269–31271、31276–31293、31327–31341、31347–31361。Bindley OCR l. 7232–7238、7266–7267。Mayor OCR l. 21561–21569。

### 35.7 De nostris annis augeat tibi Iupiter annos!（歓呼の詩行）
- 底本（Oehler）：Etiam illa hora qua adclamant: De nostris annis augeat tibi Iupiter annos! Haec Christianus tam enuntiare non novit quam de novo Caesare optare.（歓呼の言葉は、ヘクサメトロスの一行として行を改め、字下げして刷る）
- ほかの読み：De nostris annis augeat tibi Iupiter annos は A・B・D・F・G・λ・a・b・c、ウィーン写本。E・エアフルト写本・オクスフォードは De nostris augeat tibi Iuppiter annos、d・e・f と Havercamp は De nostris annis tibi Iupiter augeat annos（校注 p. 244 の 33）。λ は sed Christianus tam pronuntiare。G は enuntiare の所が空白（校注 p. 245 の 34）。λ は quam novum Caesarem optare、D・a は quam diu de novo Caesare optare（校注 35）。
- 採る校訂者：注 p. 244 の s に引く Heraldus は、競技場や劇場で君主がさまざまな歓呼で迎えられたことは周知とし、『見世物について』25 章の εἰς αἰῶνας（とこしえに）、ディオ・カッシオスの伝えるコンモドゥスへの歓呼を挙げたうえで、ここは詩の形に組まれた特別な歓呼なので、ある特定の機会のものとみて、セウェルスが治世十年目に、治めた年数と同じ枚数の金貨を民衆と近衛兵に配った施し（ディオ）に向けられた歓呼だろうとする。オウィディウス『祭暦』1 巻（「われらの将の支配を増し、年を増したまえ」）、アンブロシウス『ウァレンティニアヌス追悼』43 章（わたしたちの年から生きてほしかった）も並べる（注 s、p. 245 の上に続く）。Bindley の本文は De nostris annis tibi Jupiter augeat annos で、カリグラへの韻律のある歓呼、オウィディウス『祭暦』1 巻 613 行などを挙げる（OCR l. 7240、7269–7272）。Mayor は、213 年のアルウァレス祭司団の記録にこの歓呼があり、おそらくオウィディウス『祭暦』1 巻 613 行から来たもので、218 年にも繰り返された、とする（l. 21571–21591）。オウィディウスの行の番号は Oehler が 611、Bindley と Mayor が 613 と刷る。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。歓呼の言葉は、民衆が叫ぶ言葉なので本の AGENTS.md の「文体」の「」（常体）に入れるか、底本が詩の行に組むので 25.8 の詩句と同じく『』に入れるかを、メインが決める（「メインで決めること」）。どちらでも、行に分けず地の文の中に置く。出典は `// ` メモに書ける（オウィディウス『祭暦』1 巻の行に近い）。Iupiter は「ユピテル」。「われわれの年から、ユピテルがあなたに年を増し加えるように」の意味。
- 確かめた資料：Oehler 画像 0274（本文、校注 33、注 s）、0275（本文、校注 34・35、注 s の続き）。OCR l. 31271–31273、31297、31358–31365、31343–31411、31418–31419、31427–31431、31440–31463。Bindley OCR l. 7238–7244、7269–7272。Mayor OCR l. 21571–21591。

### 35.7–35.8 Sed vulgus, inquis. Ut vulgus, tamen Romani（Scriverius の区切り）
- 底本（Oehler）：Sed vulgus, inquis.（35.7 の終わり）／Ut vulgus, tamen Romani, nec ulli magis depostulatores Christianorum quam vulgus.（35.8 の初め）
- ほかの読み：E は ne ulli、a は nec illi（校注 p. 245 の 36）。λ は depopulatores（略奪者）、E とエアフルト写本は depostulares（校注 37）。注 p. 245 の t に引く Havercamp によると、以前の刊本は Sed vulgus, inquis, ut vulgus. Tamen … と区切っていた。
- 採る校訂者：Havercamp は Scriverius が自分の写本の余白に書いた推定の区切り（Ut vulgus, tamen Romani）を採り、以前の区切りはまったくつまらず、著者の切り詰めた文体にも合わないとする（「民衆がそう考えるのだとしても、それでも民衆こそローマ国民の最大の群れをなす」の旨。注 t）。Oehler はこの区切りで刷る。Bindley も同じ区切り（OCR l. 7246）。Mayor は ut を「…だとしても」とし、24 章の初めの ut を並べる（l. 21592–21593）。depostulatores に、Oehler は『さそりの毒への解毒剤』8 章（カルデヤ人に訴えられ、引き渡しを求められたダニエル）と『ペルペトゥアとフェリキタスの殉教録』21 章（民衆が彼らを真ん中に出すよう求めた）を挙げる（注 u）。Mayor は、この語がここだけのものだとし、群衆の荒々しさに 50 章、37 章、49 章、『見世物について』27 章（日ごとに獅子の餌食としてわたしたちが求められる）、ポリュカルポスなどを挙げる（l. 21594–21612）。
- 読者への影響：小 — ただし区切りの境が、この訳の節の境（35.7 と 35.8）にちょうど当たる。
- 訳での扱い：訳注は付けない。inquis は単数で、本の AGENTS.md の「言い分を持ち出す相手が単数の inquis（13.1）は『と、あなたは言います』」に従い、「」は 35.7 の Sed vulgus だけを囲んで 35.7 の中で閉じる（1 節 1 行なので）。Ut vulgus は 35.8 の地の文で「民衆だとしても」。depostulatores は「（処刑のために）引き渡しを求める者たち」。
- 確かめた資料：Oehler 画像 0275（本文、校注 36・37、注 t・u）。OCR l. 31419–31420、31431、31466–31508。Bindley OCR l. 7246–7248。Mayor OCR l. 21592–21612。

### 35.8 Plane ceteri ordines pro auctoritate religiosi ex fide. Nihil hosticum … spirat（spirat と spirant）
- 底本（Oehler）：Plane ceteri ordines pro auctoritate religiosi ex fide. Nihil hosticum de ipso senatu, de equite, de castris, de palatiis ipsis spirat.
- ほかの読み：λ は de aequitate（校注 p. 245 の 38）。spirat は f と Havercamp。A・B・D・E・F・G・λ・a〜f（刷られたとおり。f が両側に出る）、ウィーン写本、オクスフォード、エアフルト写本、アンブロジアーナ写本ほかは spirant。c は ipsis の代わりに istis（校注 39）。
- 採る校訂者：Oehler は写本のすべてに反して刊本 f の spirat を刷る（校注 39。理由の注はない）。Bindley の本文も spirat（OCR l. 7252）。Bindley は Plane ceteri ordines … を 35.5 の fidem et veritatem vestram と同じ皮肉の続きとする（l. 7203–7204）。Mayor は Plane 以下に Kaye を指し、『スカプラへ』2 章（キリスト者はアルビヌス派にもニゲル派にもカッシウス派にもいなかった。皇帝のゲニウスにかけて誓い、皇帝の安寧のために犠牲をささげ、キリスト者を罪に定めていた者たちこそ、皇帝の敵と分かった）を挙げる（l. 21613–21619）。
- 読者への影響：小 — spirant なら主語は前の ceteri ordines（ほかの身分の者たちは、元老院からも…も、敵意を少しも吐かない）、spirat なら nihil hosticum が主語（元老院からも…からも、敵意は少しも吹いてこない）。意味は同じ。
- 訳での扱い：訳注は付けない。Plane ceteri ordines … ex fide は皮肉（「もちろん、ほかの身分の者たちは、その権威にふさわしく、誠実に信心深い」の旨）。religiosi は訳語表の religiosus「信心深い」に揃えるが、ここは皇帝への忠誠の意味（35.1 の religio と合わせてメインが決める）。de palatiis は「宮殿から」。
- 確かめた資料：Oehler 画像 0275（本文、校注 38・39）。OCR l. 31420–31422、31432、31490–31501。Bindley OCR l. 7248–7252、7203–7204。Mayor OCR l. 21613–21619。

### 35.9 Unde Cassii et Nigri et Albini?（帝位を僭称した者たち）
- 底本（Oehler）：Unde Cassii et Nigri et Albini?
- ほかの読み：本文の異読はない。
- 採る校訂者：Oehler は『スカプラへ』2 章と『諸国民へ』1 巻 17 章を並べ、帝位を僭称したアウィディウス・カッシウス、ペスケンニウス・ニゲル、クロディウス・アルビヌスの伝の資料を挙げる（注 p. 245 の v）。Bindley も、アウィディウス・カッシウス（175 年にマルクス・アウレリウスに背いた）、ニゲルとアルビヌスとする（OCR l. 7274–7282）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。複数形の Cassii、Nigri、Albini は、名前の表の Proculi「プロクルスのような人々」、Croesi「クロイソスのような人々」と同じ扱いにするかをメインが決める。人物の名を補う（アウィディウス・カッシウスなど）かも同じ。名前の表には、10.8 の Cassius Severus を「どのカッシウスかは補わない」とする先例がある。
- 確かめた資料：Oehler 画像 0275（本文、注 v）。OCR l. 31422–31423、31510–31522。Bindley OCR l. 7254、7274–7282。

### 35.9 unde qui inter duas laurus obsident Caesarem?（「二本の月桂樹のあいだ」）
- 底本（Oehler）：unde qui inter duas laurus obsident Caesarem?
- ほかの読み：duas laurus は A・B・λ・f、（ウィーン写本）、Havercamp。D・E・F・a〜e、エアフルト写本、オクスフォードは duas lauros、G は duas laureos、La Cerda は divas lauros（校注 p. 245 の 40）。
- 採る校訂者：注 p. 245 の w に引く Heraldus は、難しい箇所で多くの奇妙な解釈を生んだとし、ドミティアヌスの二度の凱旋と取る説を笑い、コンモドゥスが健康のため月桂樹の林のある郊外にいたとき、クレアンデルのもとで民衆と近衛兵のあいだに起きた騒ぎ（ヘロディアノス 1 巻 12 章）を指すとする。Rigaltius は、疫病を避けてコンモドゥスが退いた月桂樹の林とし、ローマに大小二つの月桂樹の林があり、殉教者暦に「ローマ、二本の月桂樹のあいだで、聖ティブルティウス」とあることを挙げる。Oehler は、Heraldus と Rigaltius はコンモドゥスがラウレントゥムにいたときの騒ぎと取って誤ったとし、ラウレントゥムとローマの二つの月桂樹の林を混同してはならず、その林のあいだの地区が inter duas lauros と呼ばれたことは Rigaltius の挙げた証言で十分示されるとしたうえで、ここでテルトゥリアヌスがコンモドゥスに対するどの企てを言うのかは明らかでない、とする（注 w、p. 246 の中ほどに続く）。Bindley は、宮殿の戸口の両脇に守りと安全のしるしの二本の月桂樹があったので「宮殿で」と同じ意味とし、クレアンデルの騒ぎのときの郊外の宮殿のコンモドゥスへの襲撃と取る（OCR l. 7284–7289）。Mayor はヘロディアノスとランプリディウス『コンモドゥス伝』17 章を挙げる（l. 21635–21640）。
- 読者への影響：中 — 何を指すかが分からないと読みにくい。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない。地名とも宮殿の戸口とも取れるので、文字どおり「二本の月桂樹のあいだで」とし、補わない。obsident は現在形で、「カイザルを包囲する者たち」。
- 確かめた資料：Oehler 画像 0275（本文、校注 40、注 w の初め）、0276（注 w の続き。中ほどは OCR で読んだ）。OCR l. 31423–31424、31435–31437、31492–31508、31524–31625。Bindley OCR l. 7254–7256、7284–7289。Mayor OCR l. 21635–21640。

### 35.9 unde qui faucibus eius exprimendis palaestricam exercent? unde qui armati palatium inrumpunt（コンモドゥスとペルティナクス）
- 底本（Oehler）：unde qui faucibus eius exprimendis palaestricam exercent? unde qui armati palatium inrumpunt, omnibus tot Sigeriis atque Partheniis audaciores?
- ほかの読み：E（最初の手）・a・エアフルト写本は fascibus（校注 p. 245 の 41）。
- 採る校訂者：Oehler は faucibus … exercent に、アウレリウス・ウィクトル『要約』のコンモドゥスの死（送り込まれた屈強なレスラーに首を絞められて息絶えた）とヘロディアノス 1 巻 17 章を挙げ（注 p. 246 の x）、armati palatium inrumpunt はペルティナクスを殺した者たちを指すとする（注 y）。注 z に引く Heraldus は、armati palatium inrumpunt を、夜中に武装して宮殿に押し入ったとして罪を問われたプラウティアヌスの陰謀と取る説に従う。Bindley は、192 年 12 月 31 日のレスラーのナルキッソスによるコンモドゥスの絞殺と、3 月 28 日（OCR で年が崩れて読めない）の近衛兵によるペルティナクスの暗殺とする（OCR l. 7291–7294、7319–7321）。Mayor もランプリディウス『コンモドゥス伝』17 章（アスリートに絞め殺させた）と、カピトリヌス『ペルティナクス伝』11 章（三百人の兵士が武装して宮殿に押し入った）を引く（l. 21635–21658）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。faucibus eius exprimendis palaestricam exercent は「その喉を絞めるのにレスリングの技を使う者たち」。eius は 35.9 の Caesarem を受ける。人物の名（コンモドゥス、ペルティナクス）は本文にないので、補うかどうかはメインが決める（名前の表の「名を補わない」先例が多い）。
- 確かめた資料：Oehler 画像 0275（本文、校注 41）、0276（本文、注 x・y・z。注 x〜z の後半は OCR で読んだ）。OCR l. 31424、31493、31559、31627–31677。Bindley OCR l. 7256、7291–7294、7299、7319–7321。Mayor OCR l. 21635–21658。

### 35.9 omnibus tot Sigeriis atque Partheniis audaciores（Sigerius と Stephanus）
- 底本（Oehler）：omnibus tot Sigeriis atque Partheniis audaciores?
- ほかの読み：tot Sigeriis は A・B・D・E・F・λ・a、Bongars の写本、エアフルト写本、ウィーン写本、オクスフォード（F は sygeriis、B は Sigeris）。G は tot signis、f と Havercamp は Sigeriis（tot がない）、b〜e は Stephanis（ドミティアヌスを刺したステファヌス）（校注 p. 246 の 42）。
- 採る校訂者：注 p. 246 の z に引く Heraldus は、omnibus Chaereis et Partheniis、または omnibus Corneliis, Chaereis et Partheniis と書かれていたと推し（Cor. の略記が tot に化けた）、カリグラを殺した近衛の隊長コルネリウス・サビヌスとカッシウス・カエレアを指すとする。Oehler は、スエトニウスなどがドミティアヌスを殺した者としてステファヌスとパルテニウスを挙げるが、ディオもシゲリウスをドミティアヌスを殺した者に数え、マルティアリス 4 巻 78 歌もシゲリウスとパルテニウスを並べる、とする。omnibus tot Sigeriis atque Partheniis は「それほど多くのシゲリウスやパルテニウスのような者たち（の数の多さ）のすべてより」という切り詰めた言い方で、『オクタウィウス』6 章の de qua tot omnibus saeculis を並べる（注 z）。Bindley の本文は omnibus Sigeriis atque Partheniis（tot がない）で、96 年 9 月 18 日のドミティアヌス殺害をそそのかした者たちとする（OCR l. 7300、7323–7325）。Mayor はスエトニウス『ドミティアヌス伝』17 章とマルティアリス 4 巻 78 歌を引く（l. 21660–21669）。
- 読者への影響：小 — 刊本の Stephanis でも、ドミティアヌスを殺した者たちを例に出すことは同じ。
- 訳での扱い：訳注は付けない。Sigerius は「シゲリウス」、Parthenius は「パルテニウス」で、名前の表に足す。複数形なので、35.9 の Cassii などと同じく「〜のような者たち」の形にするかをメインが決める。omnibus tot は注 z に従い、数の多さを言う言い方で訳す。
- 確かめた資料：Oehler 画像 0276（本文、校注 42、注 z の初め。注 z の続きは OCR で読んだ）。OCR l. 31559–31560、31572–31579、31653–31692。Bindley OCR l. 7300、7323–7325。Mayor OCR l. 21660–21669。

### 35.10 De Romanis, nisi fallor … alii foris alii intus（「外では、内では」）
- 底本（Oehler）：De Romanis, nisi fallor, id est de non Christianis. Atque adeo omnes illi sub ipsa usque impietatis eruptione et sacra faciebant pro salute imperatoris et genium eius deierabant, alii foris alii intus, et utique publicorum hostium nomen Christianis dabant.
- ほかの読み：b・c・d は ni fallor（校注 p. 246 の 43）。λ は usque を欠く（校注 44）。A の最初の手は degerabant（いつもの綴り）、G は degerebant（校注 p. 247 の 45）。
- 採る校訂者：注 p. 247 の a に引く Rigaltius は、alii foris alii intus を「口で言うことと胸の内が違う者たち」と取る。Bindley は注しない（OCR l. 7301–7304）。Mayor は non Christianis に 2 章の Oehler の注を、genium に『スカプラへ』2 章を指す（l. 21690–21698）。
- 読者への影響：中 — Rigaltius の取り方（外では誓い、内では反逆をたくらむ）か、「ある者は外で、ある者は内で（宮殿の外と内、ローマの外と内）」と人を分ける取り方かで、訳が変わる。
- 訳での扱い：訳注は付けない。alii … alii は文法上は「ある者は…、ある者は…」で、注 a の取り方は偽りの忠誠を言う解釈。どちらを採るかはメインが決める（本の AGENTS.md は Oehler の注を判断の拠り所にするが、注 a は Rigaltius の言葉を引いたもの）。genium eius deierabant は 32.2〜32.4 の genius と deierare の訳に揃える。publicorum hostium nomen は 35.1 の publici hostes と同じく「国家の敵」。
- 確かめた資料：Oehler 画像 0276（本文、校注 43・44）、0277（本文、校注 45、注 a）。OCR l. 31560–31570、31638–31639、31698–31699、31709、31730–31731。Bindley OCR l. 7300–7304。Mayor OCR l. 21690–21698。

### 35.11 Sed et qui nunc scelestarum partium socii aut plausores cotidie revelantur, post vindemiam parricidarum racematio superstes（どの党派か、parricidae）
- 底本（Oehler）：Sed et qui nunc scelestarum partium socii aut plausores cotidie revelantur, post vindemiam parricidarum racematio superstes, …
- ほかの読み：D・a は Sed qui（校注 p. 247 の 46）。λ は superest（校注 47）。
- 採る校訂者：注 p. 247 の b に引く Heraldus は、Baronius がこの箇所から、セウェルスがシリアに出かけ、プラウティアヌスがローマで実権を握っていたときに書かれたと推したのを退け、プラウティアヌスの死後に捜し出され、日ごとに暴かれた共謀者たち（ディオ）と取る。ほかに Nourry らはアルビヌス派の仲間と取った（注 b）。Oehler は plausores を「味方、加勢する者」とし、『悔い改めについて』10 章を挙げる（注 b）。Bindley は、アルビヌスの支持者（197 年のリヨンの戦いの後の処罰）か、書かれたのが三年後なら 200 年のニゲル派の残党の取り調べを指すとし、parricidae を「反逆者」の意味とし（サッルスティウス、タキトゥス）、racematio を「落ち穂拾い（ぶどうの摘み残し拾い）」とし、この箇所にしかない語とする（OCR l. 7327–7342）。Mayor も racematio をここだけの語とし、スパルティアヌス『セウェルス伝』15 章（プラウティアヌスの勧めでペスケンニウス派の残党を追及した）を引き、parricidarum にタキトゥスを挙げる（l. 21700–21712）。
- 読者への影響：小 — どの党派かは成立年の議論にかかわるが、訳には響かない。
- 訳での扱い：訳注は付けない。post vindemiam parricidarum racematio superstes は「反逆者たちのぶどうの取り入れの後に残った摘み残し」の比喩。parricidae は、訳語表の parricidium「身内殺し」（9 章）ではなく、国家の父である皇帝への反逆者の意味（Bindley）なので、訳語はメインが決める（「メインで決めること」）。
- 確かめた資料：Oehler 画像 0277（本文、校注 46・47、注 b の初め。注 b の続きは OCR で読んだ）。OCR l. 31699–31701、31709–31710、31733–31752。Bindley OCR l. 7305–7308、7327–7342。Mayor OCR l. 21700–21712。

### 35.11 quam recentissimis … praestruebant, quam elatissimis … vestibula nebulabant, quam cultissimis … dividebant（疑問符と nebulabant）
- 底本（Oehler）：quam recentissimis et ramosissimis laureis postes praestruebant, quam elatissimis et clarissimis lucernis vestibula nebulabant, quam cultissimis et superbissimis toris forum sibi dividebant, non ut gaudia publica celebrarent, sed ut vota propria iam ediscerent in aliena sollemnitate et exemplum atque imaginem spei suae inaugurarent, nomen principis in corde mutantes.
- ほかの読み：E は perstruebant（校注 p. 247 の 48）。vestibula nebulabant は A・B・E・G・f、Bongars の写本、エアフルト写本、アンブロジアーナ写本。λ・オクスフォードは vestibula nubilabant、F・ウィーン写本は vestibulabant、D・a〜e と Havercamp は vestibula enubilabant（「明るく照らす」）。オクスフォードは clarissimis の代わりに lucentissimis（校注 49）。λ は sed ut vota publica propria iam。F は quam superbissimis, cultissimis et choris forum sibi dividebant, non ut gaudia publica celebrarent と読む。Fulvius Ursinus は toris の代わりに tauris を望んだ（校注 50）。ediscerent in aliena は F・λ・ウィーン写本。a〜e は ediscerent et in aliena、A・B は ediserent in aliena、D・E・f・エアフルト写本は edicerent in aliena（「布告する」）、G は edisserent ne in aliena（校注 51）。et exemplum は A・B・F・G・f・ウィーン写本、D・E・a〜e・エアフルト写本・オクスフォードは exemplum（校注 52）。G は speciei（校注 53）。a は imitantes、G は invitantes（校注 54）。
- 採る校訂者：Oehler は、刊本が quam recentissimis … praestruebant、quam elatissimis … nebulabant、quam cultissimis … dividebant の各句を疑問符で閉じていたのを取り除いた、と注する（注 p. 247 の c）。注 d に引く Rigaltius は、nebulabant を、いちばん明るい灯からも煤が出るからとし、ペルシウス 5 歌 180〜181 行（並べた灯が濃い煙を吐いた）を Oehler が並べる（注 d）。注 e は ediscerent を「自分の願いがかなう喜びを前もって味わう。自分たちもすでにカイザルになったと見ていたので」と言い換える。Bindley の本文は各句を疑問符で閉じ、enubilabant（「明るく照らす」の意味の教父の語で、別の読みの nubilabant は灯が多すぎて覆い隠す意味）、edicerent et in aliena sollemnitate exemplum と刷る。in corde mutantes を、皇帝の名を口にしながら心の中で別の人の名に置き換えた、と注する（OCR l. 7307–7315、7344–7349）。Mayor は nebulabant をほかに見えない語とし、編者 A. S. が誤りとしてアウグスティヌス『説教』164 などの用例を補う（l. 21721–21723）。praestruebant に『マルキオン駁論』5 巻 16 章とユウェナリス 10 歌 65 行を挙げる（l. 21716–21719）。
- 読者への影響：中 — nebulabant（灯の煤で戸口を曇らせた）と enubilabant（戸口を明るく照らした）は、言葉の上では逆の意味になる。どちらも灯を並べた飾り立てを言う描写で、論の筋は変わらない。
- 訳での扱い：訳注は付けない。quam … の三つの句は、注 c に従い問いにせず、「どれほど新しく枝の多い月桂樹で戸口を飾ったことか」の形の感嘆か程度の言い方で訳す（「？」は使わない規則にも合う）。nebulabant は Oehler の本文と注 d に従い「（灯の煙で）曇らせた」の意味で、enubilabant の「照らした」にしない（本の AGENTS.md「底本の語を、異読と紛れる訳にしない」）。ediscerent は注 e の「前もって味わう、稽古する」の意味で、edicerent の「布告する」にしない。nomen principis in corde mutantes は「心の中で皇帝の名を取り替えて」。
- 確かめた資料：Oehler 画像 0277（本文、校注 48〜54、注 a〜f。注 c〜f の続きは OCR で読んだ）。OCR l. 31701–31707、31710–31727、31755–31778。Bindley OCR l. 7305–7315、7344–7349。Mayor OCR l. 21714–21723。

### 35.12 de Caesarum capite consultant, quas artes ut ab angelis desertoribus proditas（占いと堕ちた天使）
- 底本（Oehler）：Eadem officia dependunt et qui astrologos et aruspices et augures et magos de Caesarum capite consultant, quas artes ut ab angelis desertoribus proditas et a deo interdictas ne suis quidem causis adhibent Christiani.
- ほかの読み：オクスフォードは dependent（校注 p. 247 の 55）。a は consulant（校注 56）。Havercamp は ut を欠く（校注 p. 248 の 57）。
- 採る校訂者：Oehler は de Caesarum capite consultant を、いつも死罪になることとし、パウルス『断案録』5 巻 21 章 3 節（君主の安否や国家の大事について占星術師や占い師に尋ねた者は、答えた者とともに死罪）を引く。テルトゥリアヌスがこの罪にふれるのは、セウェルスのもとで多くの者がこの罪で滅ぼされ（スパルティアヌス『セウェルス伝』15 章）、セウェルス自身も私人のときシチリアでこの罪に問われたからだ、とし、フィルミクス・マテルヌスも挙げる（注 p. 247 の f、p. 248 の下に続く）。ab angelis desertoribus proditas に、Oehler は『偶像崇拝について』9 章（あの天使たちは、神から離れ、女たちを愛し、この好奇の術を漏らした者たちだ）を引く（注 p. 248 の g）。Mayor も 21・22 章、『偶像崇拝について』9 章、『女性の装いについて』1 巻 2〜3 章（天使たちが星の解き明かしまでの好奇の術を漏らした。エノクを典拠とする）、タティアノス、エノク書などを挙げる（l. 21734–21807）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Eadem officia dependunt は「同じ務めを果たしている」の皮肉で、35.2 の Grande videlicet officium を受ける。de Caesarum capite は「カイザルたちの命について」。angeli desertores は 22 章のダイモンになった天使（訳語表の angelus「天使」）で、「（神から）離れた天使たち」。suis causis は「自分自身のことのためにも」。
- 確かめた資料：Oehler 画像 0277（本文、校注 55・56、注 f の初め）、0278（本文、校注 57。注 f の続きと g は OCR で読んだ）。OCR l. 31707–31708、31724–31728、31780–31815、31822–31823、31848、31866–31892。Bindley OCR l. 7317、7354–7356。Mayor OCR l. 21734–21807。

### 35.13 Cui autem opus est perscrutari … aut post illam speratur et sustinetur? … de caris … Aliter curiosa est sollicitudo sanguinis（sustinere と de caris）
- 底本（Oehler）：Cui autem opus est perscrutari super Caesaris salute, nisi a quo aliquid adversus illam cogitatur vel optatur, aut post illam speratur et sustinetur? Non enim ea mente de caris consulitur qua de dominis. Aliter curiosa est sollicitudo sanguinis, aliter servitutis.
- ほかの読み：F・G・ウィーン写本は salutem（校注 p. 248 の 58）。G は adversum illam、F・ウィーン写本は ad verillam（校注 59）。de caris は A・B・D・E・a〜f、オクスフォード、エアフルト写本、アンブロジアーナ写本（E は karis）。G は de Caesare、λ は de Caesaris、F・ウィーン写本は de Caesaribus（校注 60）。
- 採る校訂者：Oehler は sustinetur を『迫害における逃亡について』11 章の注に指す（注 p. 248 の h）。その注で Oehler は sustinere を「待つ、望む」（expectabit, sperabit）とし、この箇所を挙げる（OCR l. 58885–58891）。Mayor も sustinere を「待つ」として、ミヌキウス・フェリクス、ウルガタのトビト記、使徒行伝二〇・五を挙げる（l. 21824–21831）。注 i は sollicitudo sanguinis に、父の身を案じて占いに尋ねたセルウィリアが、君主ではなく血のつながりの情を申し立てた話（タキトゥス『年代記』16 巻 30 章）を引く。Bindley の本文は Oehler と同じ（de caris。OCR l. 7356–7361）。Mayor は de caris にアプレイウス『変身物語』9 巻（自分と親しい者たちの安寧）を挙げる（l. 21833–21834）。
- 読者への影響：小 — de Caesare などの読みでも、身内の安否を尋ねるのと主人の安否を尋ねるのとは心が違う、という対比の筋は同じだが、de caris（親しい者たちについて）でなければ次の sanguinis（血のつながり）との対が崩れる。
- 訳での扱い：訳注は付けない。post illam speratur et sustinetur は「その（安寧の）後のことが望まれ、待たれる」。de caris … de dominis は「親しい者たちについて…主人たちについて」、sollicitudo sanguinis … servitutis は「血のつながりの気づかい…隷属の気づかい」で、二つの対を残す。
- 確かめた資料：Oehler 画像 0278（本文、校注 58〜60。注 h・i は OCR で読んだ）。OCR l. 31823–31827、31839–31841、31894–31927、58885–58891。Bindley OCR l. 7356–7361。Mayor OCR l. 21824–21849。

---

## 未確認

- 34.2 Dominus enim meus unus est が、申命記六・四などの聖句を思わせるか。Oehler・Bindley・Mayor は聖句を挙げず（Mayor はユスティノス『第一弁明』17 章だけ）、口語訳も引いていない。
- 32.3 qui gentibus illos praefecit に、ローマ一三・一のほかに、ダニエル書二・二一や知恵の書六章などを挙げる資料は見ていない。
- 34.1 のアウグストゥスの逸話のスエトニウスの章番号（Oehler・Mayor は 53 章、Bindley の OCR は 43）。スエトニウスの本文は見ていない。Bindley の数字は画像で確かめていない。
- 35.7 の歓呼とオウィディウス『祭暦』1 巻の行番号（Oehler 611、Bindley・Mayor 613）。オウィディウスの本文は見ていない。
- 35.9 の inter duas laurus について、Oehler が挙げる碑文（Gruter、Muratori、Orelli）と古い暦は見ていない。
- 注解のうち、p. 242 の注 l〜o、p. 246 の中ほど（注 w の後半〜y）、p. 247 の注 b の後半〜f、p. 248 の注 f の後半〜i は、画像の切り出しを開かず OCR で読んだ。ギリシア語の引用（注 f・g・s・w・x の一部）は OCR が崩れるので、内容は注のラテン語の部分から取った。
