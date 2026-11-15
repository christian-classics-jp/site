# chapter-39 の論点（39）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0284_page.jpg`（p. 254）〜`0296_page.jpg`（p. 266）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,52`）と下（`pct:0,45,100,55`）に切り出し、0295 は `pct:0,50,100,25`、0296 は `pct:0,50,100,50` でも切り出して本文・校注・注解を読んだ（切り出しは `/tmp` に置き、保存していない）。SHA-256 の先頭 16 桁は 0284 が d09ace944c7beab0、0285 が 0817dcb898d41ca9、0286 が 823ac87c29f83d76、0287 が 26c8e57250561c56、0288 が 22a2de064103ad7b、0289 が bc512da7f84332ad、0290 が 2de417d4428de87a、0291 が cb77e21ddf4a7af2、0292 が e2feff85cb8a74be、0293 が a5c92e0561ddbec9、0294 が 5b78584465682a32、0295 が 4adc4b2126358bac、0296 が 44d2c6eb49c317c7。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 32474–34360（ページの境は p. 254 が l. 32474、p. 255 が l. 32653、p. 256 が l. 32794、p. 257 が l. 32942、p. 258 が l. 33103、p. 259 が l. 33252、p. 260 が l. 33436、p. 261 が l. 33574、p. 262 が l. 33733、p. 263 が l. 33868、p. 264 が l. 34004、p. 265 が l. 34129、p. 266 が l. 34277）。OCR は校注を細切れにし、λ を 4、A などに崩すので、校注の略号はすべて画像で読んだ。注解は画像と OCR で読んだ。

校注の番号は、p. 254 の「Cap. XXXIX.」から 1〜83（p. 266 まで）。注解の記号は、p. 254 の「Cap. XXXIX. a」から a〜z（p. 262 まで）、続けて p. 262 から a〜v（p. 266 まで）と、記号が二巡する。この一覧では二巡目を「注 a（二巡目）」のように書く。p. 254 の上の校注 18〜25 と注 h〜k は 38 章、p. 266 の Cap. XL. 以下は 40 章のもので、ここでは扱わない。写本の章題（ABDEGab などの DE DISCIPLINA CHRISTIANORVM。校注 p. 254）は訳に響かないので、論点にはしない。p. 265 の Quantiscumqne（刷りの誤り）は照合の側で扱う。

Bindley は OCR l. 7632–7960（39 章の本文と注。40 章は l. 7961 から）で読み、39.1 の ipsa は、取ってあった `cache/archive.org/apologeticusadve00tertuoft/pages/0156_page.jpg`（p. 118。cf42a6720d4710de）を `pct:0,30,100,25` で切り出して確かめた。Mayor の注は OCR l. 22767–23620 ごろ（Mayor の本文のページでは p. 110 l. 26〜p. 116 l. 9）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:0,30,100,45` で切り出して読んだ）には、この範囲の項目が一つある（p. 114 l. 37。39.20 の項に書く）。

---

### 39.1 Edam iam nunc ego ipse negotia Christianae factionis（ipse と ipsa、38.5 の終わりとのつながり）
- 底本（Oehler）：Edam iam nunc ego ipse negotia Christianae factionis, ut qui mala refutaverim, bona ostendam.
- ほかの読み：Edam を F・G は Eadem（校注 p. 254 の 1）。ego を D・a・b・c は欠く（校注 2）。ut qui mala を λ は quo minus mala（校注 3）。ostendam の後に λ と Havercamp は Si etiam veritatem revelaverim.（「真理をも明らかにしたのなら」）を加える（校注 4）。Bindley の本文は ego ipsa negotia（「事柄そのもの」。画像 0156 で確かめた。Oehler の校注に ipse・ipsa の異読は出ない）。
- 採る校訂者：Bindley は ipsa negotia Christianae factionis を「キリスト者の団体についての本当の事実」と注し、36〜38 章の論の流れ（皇帝に忠実で、仕返しをせず、争いから身を引くので、許された一派として扱われるべきだ。それを示すために、わたしたちの目的と食事が善いことを示す）をまとめる（OCR l. 7660–7669、7690–7691）。注 p. 254 の a（39 章）に引く Heraldus は、著者がここから、人々が「キリスト者の結社」と呼ぶものが許されたものであり、許されない結社の中に数えられる理由はないことを示しにかかる、と言う。
- 読者への影響：小 — ipse なら「わたし自身が」、ipsa なら「事柄そのものを」。38.5 の底本の終わり et ampla negotia Christianae と、ここの negotia Christianae factionis は同じ語の並びで、38.5 の校注 25 で F とウィーン写本は 38.5 の終わりを et ampla negotia Christianae factionis とする（38 章の論点一覧の 38.5 の項）。38.5 の語が 39.1 に引かれた形かもしれないことは、38 章の論点一覧に書いた観察のとおり。
- 訳での扱い：訳注は付けない。底本の ego ipse で「わたし自身が」と訳す。factio は訳語表どおり「結社」。negotia は 38.5 の negotia（Oehler の注 k の「キリスト者の快楽は大きな務め」）と同じ語なので、38:5 の訳語と揃えるかはメインが決める。λ の一文は底本にないので訳さない。
- 確かめた資料：Oehler 画像 0284（本文、校注 1〜4、注 a〔39 章〕）。OCR l. 32500–32509、32600–32606、32633–32647。Bindley 画像 0156、OCR l. 7634–7635、7660–7669、7690–7691。

### 39.1 Corpus sumus de conscientia religionis et disciplinae unitate et spei foedere（unitate と divinitate、corpus の語）
- 底本（Oehler）：Corpus sumus de conscientia religionis et disciplinae unitate et spei foedere.
- ほかの読み：unitate は A・B・D・E・F・G・d・e・f、ウィーン写本、オクスフォード、エアフルト写本、Pamelius の写本。λ と Havercamp は divinitate（「教えの神性」）、a・b・c は veritate（「教えの真実」）（校注 p. 254 の 5）。
- 採る校訂者：Bindley の本文は disciplinae divinitate（λ の読み。OCR l. 7674）で、注はない。注 a（39 章、p. 254〜255）に引く Heraldus は、corpus は団体・組合・同好会をすべて含む一般の語で、著者が collegium や sodalitium と言えば、危うい言い方か、正しくない言い方になったから、一般の語を選んだ、とする。続けて、キリスト者の団体を作るのは「宗教の自覚、教えの一致、同じ望みの盟約」の三つだと言い換え、宗教のために集まることは禁じられていなかったが、それは公に受け入れられた宗教に限られ、宗教が口実にすぎないときは別だったこと、キリスト者が盟約と誓いで互いに結ばれていると聞いた人々は、国を害する企てを疑ったことを、法文と『迫害における逃亡について』3 章、オリゲネス『ケルソス駁論』1 巻 1 章（ケルソスはキリスト者が法に反して密かに盟約を結ぶと非難する）で示す。Mayor は corpus に、ラクタンティウス『迫害者の死』48 章（リキニウスの布告の「キリスト者の団体〔corpus〕」）、カッシアヌス、アルノビウス 1 巻 16 章を挙げる（OCR l. 22770–22789）。
- 読者への影響：小〜中 — 三つの対（宗教の自覚、教えの一致、望みの盟約）のうち、真ん中が「一致」か「神性」かが変わる。どの読みでも、キリスト者が一つの団体であることの根拠を述べる文であることは同じ。
- 訳での扱い：訳注は付けない。底本の unitate で訳す。disciplina は 39 章に何度も出る（39.3 の disciplinam praeceptorum、39.12 の maiorum … disciplina、39.17 の reliquum ordinem disciplinae、39.20 の disciplinam coenaverint）ので、訳語を揃えるかはメインが決める（訳語表にない）。foedus は注 a の言い換え（certo foedere ac sacramento adstringi）のとおり、盟約・誓約の意味。
- 確かめた資料：Oehler 画像 0284（本文、校注 5、注 a）、0285（注 a の続き）。OCR l. 32506–32509、32606–32610、32633–32750。Bindley OCR l. 7674。Mayor OCR l. 22770–22789。

### 39.2 Coimus in coetum et congregationem, ut ad deum quasi manu facta precationibus ambiamus orantes（集まりの語と、軍の比喩）
- 底本（Oehler）：Coimus in coetum et congregationem, ut ad deum quasi manu facta precationibus ambiamus orantes. Haec vis deo grata est.
- ほかの読み：C・a・b は aggregationem, ut、λ と Havercamp は congregationem facimus, ut。coetum を λ は caetu、F は celum（校注 p. 255 の 6）。orantes を λ・f と Havercamp は欠く（校注 7）。Bindley の本文も orantes がない（OCR l. 7675–7676）。
- 採る校訂者：注 p. 255 の b に引く Heraldus は「一つ一つの語に注意せよ」とし、coire はこの種の組合・同好会・結社について使う語で（『心魂的な者たちへ』14 章「元老院決議と、集まり〔coitiones〕に反対する皇帝の指令に背いているのでなければ」、Marcianus の法文「その口実で許されない組合が集まることのないように」）、coetus も本来は中立の語だが、議論によっては悪い意味に取られ（38 章の nulla est necessitas coetus）、許されない集まりを言うことが多い、と言う。注 c は manu facta を「手勢を一つに集めて」の意味の洒落た言い方とし、ポンティウス『キプリアヌス伝』、キケロ『カエキナ弁護』12 章、『スカプラへ』5 章（アジアのキリスト者が手勢を組んで総督の法廷に名乗り出た）を挙げる。Bindley も quasi manu facta を、ambiamus と Haec vis が受ける軍の言い方とし、マタイ一一・一二を挙げる（OCR l. 7693–7696）。Mayor は『スカプラへ』5 章、アルノビウス 1 巻 14 章、ポンティウスを挙げる（l. 22791–22797）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。quasi manu facta … ambiamus は、注 c のとおり「手勢を組んで（神を）取り囲む」の軍の比喩で、Haec vis（この力ずく）がそれを受ける。マタイ一一・一二（口語訳「天国は激しく襲われている」）を思わせるが、引用ではないので『』と出典は付けない。coire・coetus・congregatio は、注 b のとおり結社の語を意識して選ばれている。38.2 の coetus を訳語表で「徒党を組む」としたのは「39 章の集まりと紛れないように」なので、39 章の coetus、congregatio、coitio（39.21）、conventus（39.4）の訳し分けはメインが決める。orantes は底本にあるので訳す。
- 確かめた資料：Oehler 画像 0285（本文、校注 6・7、注 b・c）。OCR l. 32659–32662、32665–32726、32753–32791、32825–32826。Bindley OCR l. 7675–7676、7693–7696。Mayor OCR l. 22791–22797。`node tools/bible.js Matt.11.12`。

### 39.2 Oramus etiam pro imperatoribus, pro ministris eorum et potestatibus … pro mora finis（小さな異読と、終わりの遅れのための祈り）
- 底本（Oehler）：Oramus etiam pro imperatoribus, pro ministris eorum et potestatibus, pro statu saeculi, pro rerum quiete, pro mora finis.
- ほかの読み：ministris を λ と Havercamp は ministeriis（校注 p. 256 の 8）。et は A・B・E・F・G・c・d、ウィーン写本、オクスフォード、エアフルト写本。D・λ・a・b・e・f は ac（校注 9）。pro statu を G・c と Havercamp は欠く（校注 10）。Bindley の本文は pro ministeriis eorum ac potestatibus（OCR l. 7677–7678）。
- 採る校訂者：注 p. 256 の d に引く Rigaltius は、著者自身が『祈りについて』5 章で「ある人々は世に引き延ばしを願うが、御国の来ることを願う祈りは世の完成に向かう」と言っていることを挙げる。Oehler は 30 章を指し、終わりの遅れのための祈りについて Kluge の小論（1744）を挙げる（注 d）。Bindley は 32 章の注を指す（l. 7698）。Mayor は 30〜33 章と、初期の典礼の断片、アルノビウス 4 巻 36 章、ユスティノス『第一弁明』などを挙げ、pro mora finis に 32 章の初め（「わたしたちが味わいたくないことが延びるよう祈ることで、ローマが長く続くことを願う」）を挙げる（l. 22799–22875）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。pro mora finis は 32 章の既訳（終わりが延びるようにとの祈り）と言い方を揃える。potestates は 30 章以下の既訳の「権力・権威」の訳に揃えるかをメインが決める。
- 確かめた資料：Oehler 画像 0285（本文）、0286（本文、校注 8〜10、注 d）。OCR l. 32662、32797–32801、32819–32820、32828–32840、32874、32882。Bindley OCR l. 7677–7679、7698。Mayor OCR l. 22799–22875。

### 39.3 Coimus ad litterarum divinarum commemorationem（Coimus と Cogimur）
- 底本（Oehler）：Coimus ad litterarum divinarum commemorationem, si quid praesentium temporum qualitas aut praemonere cogit aut recognoscere.
- ほかの読み：Coimus は A・B・D・E・F・λ・a・e・f、オクスフォード、エアフルト写本、ウィーン写本、Pamelius の写本のいくつか。G は cogimus、b・c・d、ゴルツェ写本、ヴァティカンの写本の一つは Cogimur（「わたしたちは…へ駆り立てられる」）（校注 p. 256 の 11）。
- 採る校訂者：Bindley の本文は Cogimur（OCR l. 7679）。Bindley は続く Certe fidem を「いずれにせよ」、つまり今の時の様子が考えることを求めても求めなくても、の意味と注する（l. 7700–7701）。注 p. 256 の e に引く Heraldus は、ユスティノス『第一弁明』67 章（日曜日の集まりで使徒の回想録や預言者の書が読まれ、司会者が勧めを語り、皆で立って祈り、パンとぶどう酒と水が運ばれる）と並べ、朗読、解き明かし、勧め・戒め、祈り、パンとぶどう酒を分けることの順を述べる。Mayor もユスティノス『第一弁明』67 章、第一テモテ四・一三、『異端者への抗弁』36・41 章、『魂について』9 章（モンタノス派の集まりで聖書が読まれ、詩編が歌われる）、オリゲネス『ケルソス駁論』3 巻 50 章を挙げる（l. 22877–22895）。
- 読者への影響：小 — Coimus なら「集まる」が 39.2 の Coimus を繰り返し、Cogimur なら「（今の時の様子に）駆り立てられて」になる。
- 訳での扱い：訳注は付けない。底本の Coimus で、39.2 と同じ「集まる」で訳す。si quid … aut praemonere cogit aut recognoscere は「今の時の様子が、何かを前もって警告すること、あるいは思い起こすことを求めるなら」。
- 確かめた資料：Oehler 画像 0286（本文、校注 11、注 e）。OCR l. 32802–32803、32842–32893、32875–32876、32885。Bindley OCR l. 7679–7681、7700–7701。Mayor OCR l. 22877–22895。

### 39.3 Certe fidem sanctis vocibus pascimus … disciplinam praeceptorum nihilominus inculcationibus densamus（inculcationibus と in compulsationibus）
- 底本（Oehler）：Certe fidem sanctis vocibus pascimus, spem erigimus, fiduciam figimus, disciplinam praeceptorum nihilominus inculcationibus densamus; ibidem etiam exhortationes, castigationes et censura divina.
- ほかの読み：λ と Havercamp は in compulsationibus densamus（校注 p. 256 の 12）。Bindley の本文も in compulsationibus（OCR l. 7683）で、注は「フルダ写本。ほかは inculcationibus」とだけ言う（l. 7703）。
- 採る校訂者：注 p. 256 の f は pascimus に『さそり』12 章（「殉教者の魂は…復讐の望みで忍耐を養う」）を挙げ、sanctis vocibus を Rigaltius とともに「聖なる書の朗読」とする。注 g に引く Rigaltius は densamus に、セビリャのグレゴリウス（Gregorius Baeticus）が第一ヨハネ五章について言う densat piam fidem を挙げる。Heraldus はオリゲネス『ケルソス駁論』3 巻（朗読と解き明かしで神への敬虔に向かわせる）を引く。Oehler は文意を「聖なる言葉を聞いて信仰を養い、望みを起こし、確信を据えるだけでなく、さらに教えと神の掟を繰り返し叩き込むことで、規律を固める」と言い換え、Havercamp がフルダ写本から採った in compulsationibus は誤りとみる。キリスト者の集まりを描くここは、オランダの訳者が言う「迫害と悪い者たちの襲撃」の話をする場所ではないから、と言う（注 g）。
- 読者への影響：小 — in compulsationibus なら「（迫害の）押し迫りのなかで、規律を固める」となり、迫害を背景にした言い方になる。
- 訳での扱い：訳注は付けない。底本の inculcationibus で、注 g の言い換え（掟を繰り返し教え込むことで）に従う。sanctis vocibus は注 f のとおり「聖なる言葉」（聖書の朗読）。voces は訳語表で預言者の「声」とする語なので、ここで「声」とするか「言葉」とするかはメインが決める。censura divina は「神の（名による）譴責」。
- 確かめた資料：Oehler 画像 0286（本文、校注 12、注 f・g）。OCR l. 32812–32816、32822、32895–32933、32945–32948。Bindley OCR l. 7681–7684、7703。

### 39.4 ut apud certos de dei conspectu … ut a communicatione … relegetur（交わりから退けることと、小さな異読）
- 底本（Oehler）：Nam et iudicatur magno cum pondere, ut apud certos de dei conspectu, summumque futuri iudicii praeiudicium est, si quis ita deliquerit, ut a communicatione orationis et conventus et omnis sancti commercii relegetur.
- ほかの読み：certos を D・a は ceteros（校注 p. 257 の 13）。relegetur を A・B・D・E・F・G、ウィーン写本、オクスフォード、エアフルト写本は religetur（校注 14）。
- 採る校訂者：注 p. 257 の h に引く Heraldus は、オリゲネス『ケルソス駁論』3 巻（入ってくる人々の生活を調べ、恥ずべきことをする者を共同の集まりから締め出す）を挙げ、まず念入りな調べがあり、罪に応じた懲らしめがあり、最も重いのが祈りと集まりとすべての聖なる交わりから退けることだった、と言う。注 i は relegetur にキプリアヌスの書簡（霊の剣で、高ぶる者は教会から追い出されて殺される）を挙げ、Baronius によると、著者は教会の譴責を relegatio、anathema、交わりから退けるなどとさまざまに呼ぶ、と言う（La Cerda）。Bindley は futuri iudicii praeiudicium にマタイ一八・一八、第一コリント五・三〜五、第一テモテ一・二〇を挙げ、すべてのキリスト者の交わりから退けることが著者の挙げる唯一の悔い改めの形で、『悔い改めについて』9 章に詳しい、と注する（OCR l. 7705–7716）。Mayor は censura divina に第一コリント六・九以下、relegetur にオリゲネス『ケルソス駁論』3 巻 51 章を挙げる（l. 22897–22903）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。apud certos de dei conspectu は「神が見ておられることを確信している者たちのもとでのことなので」。praeiudicium は「（来るべき裁きの）前もっての判決」。relegetur は写本の多くが religetur と綴るが、底本の relegetur（「退けられる」）で訳す。
- 確かめた資料：Oehler 画像 0287（本文、校注 13・14、注 h・i）。OCR l. 32954–32969、32972、32975–33024、33033。Bindley OCR l. 7684–7688、7705–7716。Mayor OCR l. 22897–22903。

### 39.5 Praesident probati quique seniores（長老の呼び名）
- 底本（Oehler）：Praesident probati quique seniores, honorem istum non pretio, sed testimonio adepti. Neque enim pretio ulla res dei constat.
- ほかの読み：quique を D は quinque（校注 p. 257 の 15）。
- 採る校訂者：注 p. 257 の k に引く Heraldus は、praesidere から praesidentes、praesides、praepositi（ギリシア語の προεστῶτες）の呼び名が出て、本来は監督（司教）を言うとし、seniores はギリシア語の πρεσβύτεροι で、教会で上に立つ者がいつも年老いていたわけではなく、敬虔と分別で老人のようにすぐれているべきだった、と言う（イグナティオス『マグネシア人へ』）。この呼び名は、はじめは監督とほかの祭司（長老）を含む一般の呼び名で、ヒエロニムスなどは監督と長老がもとは同じだったと言う、と続ける。probati は、叙任の前に兄弟全体の吟味を受けた者のこととし、キプリアヌスの書簡（祭司は民の前で選ばれ、皆の判断と証言で認められる）を引く（注 k、p. 258〜259 に続く）。Bindley は、監督と長老の両方を含む、術語でない、まとめた言い方とし、『冠について』3 章、『妻へ』1 巻 7 章、第一テモテ三・二、テトス一・六を挙げる（OCR l. 7718–7723、7756–7758）。Mayor は『冠について』3 章などの praesidere の用例、キプリアヌス書簡 75 の Firmilianus（「年長者が上に立つ」）、seniores に presbyteri の用例を挙げ、non pretio に聖職売買を禁じる使徒教憲 29 を挙げる（l. 22905–22939）。
- 読者への影響：小 — ただし訳語の選び方で、教会の職名に読めるかどうかが変わる。
- 訳での扱い：訳注は付けない。seniores を「長老たち」とするか「年長者たち」とするかはメインが決める（口語訳は πρεσβύτεροι を「長老」と訳す。注 k と Bindley は監督と長老の両方を含む呼び名とする）。praesidere は、長官を言う praeses（訳語表「長官」）と同じ語根なので、訳で「長官」と紛れない語にする。testimonio は注 k のとおり、兄弟たちの証言による吟味。
- 確かめた資料：Oehler 画像 0287（本文、校注 15、注 k）、0288（本文、注 k の続き）、0289（注 k の終わり）。OCR l. 33026–33100、33106–33112、33119–33286。Bindley OCR l. 7688、7718–7723、7728–7729、7756–7758。Mayor OCR l. 22905–22939。

### 39.5 Etiam si quod arcae genus est, non de honoraria summa quasi redemptae religionis congregatur（honoraria と dehonoraria・oneraria）
- 底本（Oehler）：Etiam si quod arcae genus est, non de honoraria summa quasi redemptae religionis congregatur.
- ほかの読み：arcae を G は arte、a は artis（校注 p. 258 の 16）。de honoraria は A・B・G、Joseph Scaliger と Franciscus Iunius。D・E・(λ)・a・b・c・e、オクスフォード、(ウィーン写本)、エアフルト写本は de oneraria（「負担の」）。F と Bongars の写本は de honeraria。f と Havercamp は dehonoraria（一語）。d とヴァティカンの写本の一つは de ordinaria（校注 17）。congregatur を G・c は congregat（校注 p. 259 の 18）。
- 採る校訂者：注 p. 259 の l に引く Heraldus は、軍や学校や組合に入る者は入るときに何かを払うのが習いで、トラヤヌスはそれを honorarium と呼ぶ（小プリニウス書簡 10 巻 114）、と言う。Oehler は、スエトニウス『クラウディウス伝』9 章の honoraria summa（よい写本から戻した読み）と法文の用例を加え、onerarius は形容詞としてここで求められる意味では使われていなかったとし、Rigaltius が刷り Havercamp が従った dehonoraria（「宗教の不名誉となる」）は成り立たない、とする。arca については、許された組合は共同の金庫を持つことができ、許されない組合も同じく金庫を持った、と法文とアプレイウスで示す（注 l）。Bindley の本文は de honoraria summa で、「義務の気持ちから集められる額」、慣習で求められるもの、と注し、別の読み dehonoraria（宗教の「不名誉な」）に触れる（OCR l. 7730、7760–7763）。Mayor は arcae にユリアヌスの書簡（異邦人への親切、死者の葬り）などを、honoraria に「納める金、謝礼」を挙げる（l. 22941–22954）。
- 読者への影響：小 — 底本の読みでは「宗教を買い取るかのような、入るときの納金から集められるのではない」。
- 訳での扱い：訳注は付けない。honoraria summa は注 l のとおり、組合に入るときなどに納める決まった額（入会金）の意味。quasi redemptae religionis は「宗教が金で買われたかのように」。arca は「金庫」。
- 確かめた資料：Oehler 画像 0288（本文、校注 16・17）、0289（本文、校注 18、注 l）。OCR l. 33112–33116、33186–33191、33256、33272、33288–33361。Bindley OCR l. 7729–7732、7760–7763。Mayor OCR l. 22941–22954。

### 39.6 Modicam unusquisque stipem menstrua die … Haec quasi deposita pietatis sunt（小さな異読と、月ごとの醵金）
- 底本（Oehler）：Modicam unusquisque stipem menstrua die, vel cum velit, et si modo velit, et si modo possit, apponit; nam nemo compellitur, sed sponte confert. Haec quasi deposita pietatis sunt.
- ほかの読み：velit, et si modo velit, et si modo possit は A・B・E・d・e・f、ウィーン写本、オクスフォード、エアフルト写本。D・a・b・c は velit et si modo possit、F は velit et si modo velit vel possit、G は velit et si … vel possit（校注 p. 259 の 19）。sunt. Nam inde non epulis nec potaculis を λ と Havercamp は sunt. Quippe non epulis inde (Havercamp は inde nec) potaculis（校注 20）。
- 採る校訂者：注 p. 259 の m は apponit にユスティノス『第一弁明』67 章（余裕があって望む者が、それぞれ思うところに従って望むだけ与える）を挙げ、ユスティノスの言い方では集まりのたびに納めたように見えるが、月ごとに納めた人々もいたかもしれない、と言う。さらに menstrua die と言うのは、ほかの同好会でも同じ納め方だったからか、と問い、Marcianus の法文（貧しい者には月ごとの醵金を納めることが許される。ただし月に一度だけ集まること）を挙げる（注 m、p. 259）。Mayor は stipem に『断食について』13 章、ユスティノス『第一弁明』67 章を挙げる（l. 22956–22989）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。stips は「醵金、施しの小銭」。deposita pietatis は「敬虔の預け物」。pietas は訳語表で皇帝に対しては「忠誠」、父の情愛は「慈しみ」とする語で、ここ（と 39.16 の pietatis nomine）は神と兄弟に対する敬虔・慈しみなので、訳語はメインが決める。
- 確かめた資料：Oehler 画像 0289（本文、校注 19・20、注 m）。OCR l. 33262–33269、33272–33275、33331–33332、33336–33337、33353–33419。Bindley OCR l. 7732–7735。Mayor OCR l. 22956–22989。

### 39.7 nec ingratiis voratrinis dispensatur（ingratiis と ingratis）
- 底本（Oehler）：Nam inde non epulis nec potaculis nec ingratiis voratrinis dispensatur, sed egenis alendis humandisque …
- ほかの読み：ingratiis（または in gratiis）は A・E・a・e、ウィーン写本、Bongars の写本、エアフルト写本。F は in garciis、B は ingratus、G・λ・b・c・d・f は ingratis（校注 p. 259 の 21）。Bindley の本文は ingratis voratrinis（OCR l. 7736）で、注はない。
- 採る校訂者：Oehler は potaculis に『肉の復活について』4 章（pabula atque potacula）を、ingratiis には「4 章の注を見よ」とだけ書く（注 p. 259 の n・o）。4 章の注（p. 127 の d）で Oehler は ingratis を「望もうと望むまいと」（ἀκουσίως）とする（4〜6 章、27〜31 章の論点一覧）。Mayor は potaculis を『肉の復活について』4 章にだけある語とし、voratrinis をアンミアヌスの語とするが、ingratiis には注がない（l. 23004–23007）。
- 読者への影響：中 — ingratiis を 4 章の注のとおり副詞「心ならずも」に取るか、voratrinis に掛かる形容詞「ありがたくない、不快な」に取るかで、文が変わる。Oehler の注 o は 4 章を指すだけで、ここでどちらに取るかを言わない。
- 訳での扱い：訳注は付けない。epulis、potaculis、voratrinis（「むさぼり食う場所」）の並びの中で、ingratiis をどう訳すかはメインが決める。4 章の注に従うなら「（金が）心ならずも、むさぼりの店に使われることもない」に近い形、形容詞に取るなら「いとわしい、むさぼりの店」。訳語表の ingratis（4.3、27.6）は「心ならずも」。
- 確かめた資料：Oehler 画像 0289（本文、校注 21、注 n・o）。OCR l. 33333、33338–33339、33276、33421–33426。Bindley OCR l. 7735–7736。Mayor OCR l. 23004–23007。

### 39.7 iamque domesticis senibus … dumtaxat ex causa dei sectae, alumni confessionis suae fiunt（小さな異読と語の意味）
- 底本（Oehler）：sed egenis alendis humandisque et pueris ac puellis re ac parentibus destitutis, iamque domesticis senibus, item naufragis, et si qui in metallis, et si qui in insulis vel in custodiis, dumtaxat ex causa dei sectae, alumni confessionis suae fiunt.
- ほかの読み：λ は ac puellis re を欠く（校注 p. 260 の 22）。iamque domesticis は A・B・D・E・F・G・d・e・f、オクスフォード、エアフルト写本、ウィーン写本、Pamelius の写本五つ。a・b・c は aetateque domitis（「年齢に打ちのめされた」）（校注 23）。λ と Havercamp は senibus iam otiosis item（校注 24）。A・λ と Havercamp は naufragiis（校注 25）。λ は sectae conflictatur, alumni（「一派のために苦しめられる」の動詞を加える）（校注 26）。fiunt を a・b は sunt（校注 27）。
- 採る校訂者：注 p. 260 の p・q は egenis alendis、humandisque にキプリアヌスの書簡を、r は domesticis senibus を「病と力の衰えのために、もう家にとどまらざるをえない者たち」とする。注 s は alumni confessionis suae fiunt に『殉教者たちへ』1 章（母なる教会と兄弟たちが牢に届ける食べ物）、エウセビオス『教会史』4 巻 23 章（コリントのディオニュシオスがローマの教会の施しをほめる）、『断食について』12 章を挙げる。Bindley は domesticis senibus を「年齢と病で家にとどまる者」、alumni confessionis suae を「自分の告白によって養われる者」とし、勇敢な証しのゆえに仲間の信者に養われる資格を得る者、と注する（OCR l. 7765–7772）。Bindley の本文は caussa Dei sectae alumni（sectae の後に区切りがない。l. 7741）。Mayor は pueris ac puellis（孤児に職を教える）、metallis（12 章、鉱山の刑）、insulis（12 章、島流し）、custodiis（『妻へ』2 巻 4 章）に用例を挙げる（l. 23042、23111–23146）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。insulis は訳語表どおり「島」（12 章の島流しを受ける）、metallis は「鉱山」。domesticis senibus は注 r のとおり「家から出られなくなった老人たち」。alumni confessionis suae fiunt は「自分の告白のおかげで（教会に）養われる者となる」。confiteri は訳語表で「告白する」なので、confessio もそれに揃える。dei sectae は「神の一派」。
- 確かめた資料：Oehler 画像 0290（本文、校注 22〜27、注 p〜s）。OCR l. 33440–33443、33450–33468、33477–33543。Bindley OCR l. 7736–7741、7765–7772。Mayor OCR l. 23023–23146。

### 39.8 Vide, inquiunt, ut invicem se diligant … ut pro alterutro mori sint parati（異教徒の言葉と小さな異読）
- 底本（Oehler）：Sed eiusmodi vel maxime dilectionis operatio notam nobis inurit penes quosdam. Vide, inquiunt, ut invicem se diligant; ipsi enim invicem oderunt: et ut pro alterutro mori sint parati; ipsi enim ad occidendum alterutrum paratiores erunt.
- ほかの読み：maxime を Aβ は maxime と校合（校注 p. 260 の 28。本文と同じ形が刷られている）。inurit を D・a は meruit、F とウィーン写本は irruit。F・G とウィーン写本は notam を誤って non tam と書く（校注 29）。et ut pro は A・B・G・λ・b・d・e・f、ウィーン写本、エアフルト写本、オクスフォード。F は etiam ut pro、D・E・a・c は et pro（校注 30）。sint を D・a・b は sunt（校注 31）。erunt を λ・f と Havercamp は欠く（校注 32）。
- 採る校訂者：Oehler は dilectionis operatio を『偶像崇拝について』23 章の注に指す（注 p. 260 の t）。Mayor は ut invicem se diligant に Friedländer とミヌキウス 9 章 2 節を挙げる（l. 23163–23166）。Bindley の本文は Oehler と同じ（OCR l. 7743–7748）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Vide, inquiunt, … は、本の AGENTS.md の「相手の言い分」の型（「」に入れ、常体）に当たる。ipsi enim … は話し手の異教徒が自分たちのことを言う部分で、ipsi enim invicem oderunt、ipsi enim … paratiores erunt を「」の中に入れるか、著者の地の文の皮肉とするかはメインが決める（底本は引用符を刷らない）。dilectio は訳語表にない。39.16 の Id vocatur quod dilectio penes Graecos（アガペー）と同じ語なので、二つを同じ訳語で揃えるとよい。ヨハネ一三・三四〜三五（口語訳「互に愛し合いなさい」）、ヨハネ一五・一三、第一ヨハネ三・一六を思わせるが（この点はこの一覧の観察で、資料の注は聖書を挙げない）、異教徒の言葉なので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0290（本文、校注 28〜32、注 t）。OCR l. 33443–33447、33457–33471、33545–33546。Bindley OCR l. 7743–7748。Mayor OCR l. 23158–23166。`node tools/bible.js John.13.34-35 John.15.13 1John.3.16`。

### 39.9 Sed et quod fratres nos vocamus, non alias, opinor, insaniunt … de affectione simulatum est（fratres nos vocamus と fratrum appellatione censemur、affectione と affectatione）
- 底本（Oehler）：Sed et quod fratres nos vocamus, non alias, opinor, insaniunt quam quod apud ipsos omne sanguinis nomen de affectione simulatum est.
- ほかの読み：fratres nos vocamus non alias を λ・f と Havercamp は fratrum appellatione censemur (λ は censemus) non alias（「兄弟という呼び名で数えられる」）（校注 p. 260 の 33）。insaniunt は A・B・D・E・F・G・λ・a・b・c、Bongars の写本、エアフルト写本、ウィーン写本、オクスフォード。d・e・f と Havercamp は infamant（「（そのことで）悪く言う」）（校注 p. 261 の 34）。affectione は A・B・D・F・G・λ・f、Bongars の写本、ウィーン写本。E・a・b・c・d・e、エアフルト写本、オクスフォードは affectatione（「見せかけ」）（校注 35）。
- 採る校訂者：注 p. 261 の v に引く Heraldus は、通行の affectatione のほうが正しく適切だとし、異邦人が使う血縁の呼び名は、呼び名の本当の理由からでなく見せかけから出ている、と取る。そのうえで、異邦人も好意を示すために兄弟と呼び合ったこと（クインティリアヌス、アプレイウス、ユウェナリス、皇帝を兄弟・父・子と呼んだ例）を挙げる。Oehler は「よりよい写本から戻すべきだった」として affectione を採り、「血縁の呼び名がみな、情愛と親しみの呼び名に移されている」の意味とする（注 v）。Bindley の本文は Sed et quod fratrum appellatione censemur, non alias, opinor, infamant, quam quod apud ipsos omne sanguinis nomen de affectatione simulatum est（OCR l. 7748–7750）。注 u（p. 260〜261）に引く Heraldus は、異邦人がこの呼び名をそしり、あざけったとし、ルキアノス『ペレグリノスの死』（立法者が、皆が互いに兄弟だと信じ込ませた）を、Oehler はミヌキウス 9 章（兄弟姉妹と呼び合うので、淫らな交わりが近親姦になる）とアテナゴラス 28 章を加え、frater は古くは悪い意味の語でもあった、と言う。Mayor は fratres に『スカプラへ』1 章、ミヌキウス 9 章、アレクサンドリアのクレメンス『ストロマテイス』2 巻 9 章、ラクタンティウス 5 巻 15 章（自分たちを等しいと信じるので互いに兄弟と呼ぶ）などを挙げる（l. 23168–23230）。
- 読者への影響：中 — Oehler の読みでは「異邦人のもとでは、血縁の呼び名がみな情愛（の呼び名）として装われている（だから本当の兄弟の呼び名をいぶかる）」。affectatione なら「血縁の呼び名が見せかけで装われている」になり、異邦人の呼び名を偽りと言う意味が強まる。insaniunt と infamant でも、「（わたしたちが兄弟と呼び合うことに）怒り狂う」か「（それで）悪く言う」かが変わる。
- 訳での扱い：訳注は付けない。底本の fratres nos vocamus、insaniunt、affectione で、注 v の Oehler の取り方（血縁の名が情愛の名として装われている）に従う。fratres は口語訳どおり「兄弟」。
- 確かめた資料：Oehler 画像 0290（本文、校注 33、注 u の初め）、0291（本文、校注 34・35、注 u の続き、注 v）。OCR l. 33447、33474、33548–33571、33577–33580、33595–33596、33605–33705、33656、33666–33667。Bindley OCR l. 7748–7750、7774–7776。Mayor OCR l. 23168–23230。

### 39.9 Fratres autem etiam vestri sumus … etsi vos parum homines, quia mali fratres（Oehler の区切りの提案）
- 底本（Oehler）：Fratres autem etiam vestri sumus, iure naturae matris unius, etsi vos parum homines, quia mali fratres.
- ほかの読み：autem etiam vestri は A・B・E・F・G・d・f、エアフルト写本、オクスフォード、ウィーン写本。c は autem vestri、D・a・b・c は etiam vestri（校注 p. 261 の 36。c が二度刷られている）。a・e は etsi parum homines vos, quia（校注 37）。
- 採る校訂者：Oehler は注 p. 261 の w で「こう書いたらどうか」として、Fratres autem etiam vestri sumus, iure naturae matris unius, etsi vos parum. Homines quia mali, mali fratres.（「あなたがたはあまり（兄弟で）ないにしても。人間としては悪いので、悪い兄弟だ」）と区切ることを提案するが、本文は改めない。Bindley の本文は Oehler の本文と同じ区切り（OCR l. 7750–7753）。
- 読者への影響：小 — 底本の区切りでは「あなたがたは悪い兄弟なので、人間としても足りない」。注 w の区切りでも、異邦人も同じ母（自然）から生まれた兄弟だが悪い兄弟だ、という意味は変わらない。
- 訳での扱い：訳注は付けない。底本の区切りで訳す。iure naturae matris unius は「ただ一人の母である自然の権利によって」。
- 確かめた資料：Oehler 画像 0291（本文、校注 36・37、注 w）。OCR l. 33659–33660、33597–33598、33669、33707–33718。Bindley OCR l. 7750–7753。

### 39.10 qui unum spiritum biberint sanctitatis, qui de uno utero ignorantiae eiusdem ad unam lucem expaverint veritatis（第一コリント一二・一三と、expavescere ad）
- 底本（Oehler）：At quanto dignius fratres et dicuntur et habentur qui unum patrem deum agnoverunt, qui unum spiritum biberint sanctitatis, qui de uno utero ignorantiae eiusdem ad unam lucem expaverint veritatis.
- ほかの読み：At quanto を λ は At quando nunc（校注 p. 261 の 38）。biberint は A・B とウィーン写本、G は biberent、ほかは biberunt（校注 39）。expaverint は A・B・D・E・F・G・d・e、ウィーン写本、オクスフォード、エアフルト写本、Pamelius の写本。λ・f と Havercamp は expaverunt、a・b・c は expiraverunt（校注 p. 262 の 40）。Bindley の本文は biberunt、expaverunt（OCR l. 7781–7782）。
- 採る校訂者：注 p. 261 の x は、biberint sanctitatis を 39.3 の fidem sanctis vocibus pascimus と並べ、agnoverunt（直説法）と biberint・expaverint（接続法）の法の揺れについて『さそり』10 章を挙げる。注 p. 262 の y は『殉教者たちへ』3 章とその注を指し、Heraldus を引いて、キリスト者は同じく生まれ直し、無知の胎から同じ真理の光へ出てきたので兄弟と呼ばれるのがふさわしい、とし、オプタトゥス 1 巻（霊の誕生は一つ）を挙げる。続けて、この言葉が洗礼を指すことに疑いはなく、洗礼はその新しい光のために「照らし」（φωτισμός）と呼ばれたとし、ユスティノス『第一弁明』61 章、キプリアヌス『ドナトゥスへ』、『魂について』41 章を挙げる。Bindley は unum Spiritum biberunt に第一コリント一二・一三を挙げ、洗礼によって一つの体に加えられて生じる一致を言う箇所で、ad unam lucem もそれを指すとみる。照らしは洗礼のよく使われる比喩、と注する（OCR l. 7801–7805）。Mayor は unum patrem deum にエペソ四・三以下を、ad unam lucem に 37 章（expavescere ad）、『殉教者たちへ』3 章（「体も魂も、陰から日の光へとおびえることのないように」）、『見世物について』17 章（「光と人々の前へとおびえる」）、オプタトゥス 1 巻 3 章を挙げ、expavescere が ad や super と組む用例を Archiv f. lat. Lexik. 1 巻 507 に指す（l. 23231–23244）。
- 読者への影響：中 — 「一つの霊を飲んだ」は第一コリント一二・一三の言葉に近い。expaverint ad unam lucem は、37.8 の expavissetis ad solitudinem と同じ組み方で、Mayor は「〜におびえる」の用例を挙げ、注 y の Heraldus は「（光へ）出てきた」と言い換える。
- 訳での扱い：訳注は付けない。unum spiritum biberint sanctitatis は第一コリント一二・一三（口語訳「皆一つの御霊を飲んだ」）に近いが、原文は sanctitatis（聖さの）を加えた言い換えなので、『』と出典は付けない。spiritus は訳語表で「霊」とし、聖霊と補わない語（21 章）なので、「一つの、聖さの霊」の形がよい（「御霊」とするかはメインが決める）。unum patrem deum は神を指すので尊敬語の対象（agnoverunt は人が主語）。ad unam lucem expaverint veritatis は 37:8 の expavissetis ad の訳と揃えるかをメインが決める（生まれる子が光におびえて出てくる像）。法の揺れ（agnoverunt と biberint・expaverint）は訳に響かない。
- 確かめた資料：Oehler 画像 0291（本文、校注 38・39、注 x）、0292（本文、校注 40、注 y）。OCR l. 33582–33592、33600、33603–33604、33670、33719–33728、33736、33749、33758、33783–33832。Bindley OCR l. 7781–7782、7801–7805。Mayor OCR l. 23231–23244。`node tools/bible.js 1Cor.12.13 Eph.4.4-6`。

### 39.11 nulla de nostra fraternitate tragoedia exclamat … quae penes vos fere dirimit fraternitatem（小さな異読と語の意味）
- 底本（Oehler）：Sed eo fortasse minus legitimi existimamur, quia nulla de nostra fraternitate tragoedia exclamat, vel quia ex substantia familiari fratres sumus, quae penes vos fere dirimit fraternitatem.
- ほかの読み：existimamur を F とウィーン写本は existimantur（校注 p. 262 の 41）。fraternitate を E、エアフルト写本、オクスフォードは欠く（校注 42）。fere dirimit を F は facile dirimit、ウィーン写本は facere derimit、G は facile dirimitur（校注 43）。
- 採る校訂者：注 p. 262 の z は ex substantia familiari fratres sumus を、初期のキリスト者には財産が、持ち物としてでなく使い方の上で分け隔てがなかった、と注する。注 a（二巡目）に引く Rigaltius は dirimit fraternitatem を、遺産を分ける訴えはたいてい共同の相続人、つまり多くは兄弟のあいだで起こされる、と説明する。Bindley は nulla … tragoedia exclamat に、オイディプスとイオカステの二人の息子、アトレウスとテュエステスの兄弟を挙げ、ここからは激しい皮肉で、真剣な論は Quid ergo mirum で戻る、と注する（OCR l. 7807–7812）。Mayor は dirimit にカッシアヌス、ペトルス・クリュソログス（財産が一致を裂き、兄弟を分ける）、セネカ書簡 88 などを挙げる（l. 23246–23252）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。minus legitimi は「正当な（兄弟）でない」。tragoedia の悲劇の兄弟の名は、本文にないので補わない（名前の表の扱い）。substantia familiaris は「家の財産」で、訳語表の substantia（神や人間の「実体」）とは別の意味なので、「財産」と訳す。
- 確かめた資料：Oehler 画像 0292（本文、校注 41〜43、注 z・a）。OCR l. 33736–33739、33750–33751、33813–33814、33834–33846。Bindley OCR l. 7783–7786、7807–7812。Mayor OCR l. 23246–23252。

### 39.12 Omnia indiscreta sunt apud nos praeter uxores … ex illa, credo, maiorum et sapientissimorum disciplina, Graeci Socratis et Romani Catonis（小さな異読と、ソクラテスとカトーの故事）
- 底本（Oehler）：Itaque qui animo animaque miscemur, nihil de rei communicatione dubitamus. Omnia indiscreta sunt apud nos praeter uxores. In isto loco consortium solvimus in quo solo ceteri homines consortium exercent, … ex illa, credo, maiorum et sapientissimorum disciplina, Graeci Socratis et Romani Catonis, qui uxores suas amicis communicaverunt, quas in matrimonium duxerant liberorum causa et alibi creandorum, nescio quidem an invitas.
- ほかの読み：qui を G・d と Pamelius の写本のいくつかは quia（校注 p. 262 の 44）。Omnia を F は欠く（校注 45）。In isto loco は A・B・D・E・F・d・e、ウィーン写本、エアフルト写本、オクスフォード、Pamelius の写本。a・b・c は in illo loco、λ・f は in isto solo、G は iusto loco（校注 46）。solo を F は solum（校注 47）。sapientissimorum を λ は sapientiorum suorum（校注 48）。
- 採る校訂者：Bindley は miscemur を「結ばれる」とし、Omnia indiscreta は初期のキリスト者の惜しみない愛を言う修辞で、共産制があった証拠はない、と注する（OCR l. 7814–7822）。注 p. 262 の b は patientissime を、妻の不貞を黙って許すこと（『忍耐について』16 章、小プリニウス、タキトゥス、マルクス帝の妻の話）とし、ローマ法では妻の姦淫で利を得た夫などは罰せられたが、ただ黙って許す夫には罰がなかった、と言う。注 p. 263 の c は、ソクラテスが二人の妻を持ったという話と、妻を友と分かち合ったかどうかは確かでなく、作り話がプラトン『国家』5 巻の妻の共有の言葉から強まったとみる（Nic. le Nourry と Oehler）。サルウィアヌスの文（ソクラテスもローマのカトーも、妻を他の男に与えた）を引く。注 d はプルタルコス『小カトー伝』（カトーが妻マルキアを友ホルテンシウスに与え、その死後に取り戻した）などを挙げる。注 p. 264 の e は liberorum causa et alibi creandorum を、「自分のもとでだけでなく、ほかの家で、ほかの人によっても子をもうけるために」とし、ローマの結婚の決まり文句「子をもうけるために妻をめとる」を受けたもので、語を改める必要はない、と言う。Mayor は indiscreta に 9 章とディオグネトスへの手紙 5 章 7 節（食卓は共にするが、寝床は共にしない）を、Socratis・Catonis・creandorum に用例を挙げる（l. 23254–23303）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。名前の表にソクラテス、カトーがある（11.15〜11.16。どのカトーかは補わない）。Omnia indiscreta は使徒四・三二（口語訳「いっさいの物を共有にしていた」）を思わせるが（この点はこの一覧の観察で、資料は聖書を挙げない）、引用ではない。animo animaque は「心も魂も」。
- 確かめた資料：Oehler 画像 0292（本文、校注 44〜48、注 b）、0293（本文、注 b の続き、注 c・d）、0294（本文、注 d の続き、注 e）。OCR l. 33739–33746、33752–33762、33809、33816–33817、33848–33906、33871–33872、33908–34084、34010。Bindley OCR l. 7786–7797、7814–7827。Mayor OCR l. 23254–23303。`node tools/bible.js Acts.4.32`。

### 39.13 lenones philosophus et censor!（lenones と Leno est、カトーは監察官ではない）
- 底本（Oehler）：O sapientiae Atticae, o Romanae gravitatis exemplum: lenones philosophus et censor!
- ほかの読み：lenones は f と Havercamp。Aφ・B・D・F・G・λ・a〜e、ウィーン写本は Leno est、Aβ・E、エアフルト写本は lenon est（校注 p. 264 の 49）。Bindley の本文は Leno est philosophus et censor.（OCR l. 7797–7798）。
- 採る校訂者：Oehler は et censor に「このカトーは監察官ではなかった。著者は 11 章でも同じ誤りでスキピオたちを取り違えた」と注する（注 p. 264 の f）。Bindley も、ローマのカトーは監察官カトーではなく、その曾孫の小カトー（ストア派）で、ホルテンシウスの求めの話はプルタルコス『小カトー伝』にある、と注する（OCR l. 7824–7827）。Mayor は lenones にミヌキウス 38 章 7 節（哲学者たちを堕落させる者、姦淫する者と知っている）を挙げる（l. 23321–23325）。
- 読者への影響：小 — lenones（複数）でも Leno est（単数）でも、哲学者（ソクラテス）と監察官（カトー）を「女衒」と呼ぶ意味は同じ。底本の lenones は写本でなく f の読み。
- 訳での扱い：訳注は付けない。底本の lenones で「女衒たちだ、哲学者と監察官は」の形。censor は著者の取り違え（小カトーは監察官ではない）だが、底本の語のまま「監察官」と訳し、取り違えは `// ` メモに書くとよい。lenones が写本になく f の読みであることも、`// ` メモに書くかはメインが決める（37.3 の repensatum は写本 F の支えがあるのでメモ不要とした）。
- 確かめた資料：Oehler 画像 0294（本文、校注 49、注 f）。OCR l. 34012–34013、34020、34086–34088。Bindley OCR l. 7796–7798、7824–7827。Mayor OCR l. 23321–23325。

### 39.13 Quid ergo mirum, si tanta caritas conviolatur?（conviolatur と convivatur）
- 底本（Oehler）：Quid ergo mirum, si tanta caritas conviolatur? Nam et coenulas nostras praeterquam sceleris infames ut prodigas quoque suggillatis.
- ほかの読み：conviolatur は A・B・D・E・a〜e、ウィーン写本、エアフルト写本、オクスフォード。G は convolatur、F は violatur、λ・f と Havercamp は convivatur（「共に食事をする」）（校注 p. 264 の 50）。
- 採る校訂者：Oehler は「キリスト者の（愛）」と注し（注 p. 264 の g）、conviolatur を「（キリスト者の）これほどの愛が汚される（そしられる）」と取る。Bindley の本文は convivatur で、「わたしたちの愛がこれほど大きいので、共に食事をするとしても、何の不思議があろうか」と注し、ここから著者はキリスト者への四つの小さな非難を取り上げ、第一が互いの愛とそのしるしの愛餐（アガペー）で、前者は不純、後者は贅沢で汚らわしいとそしられた、と言う（OCR l. 7832、7851–7856）。Mayor は conviolatur の見出しで、ヘルマス『牧者』幻 1 巻 3 節、プルデンティウス『魂の戦い』398 などを挙げる（l. 23327–23328）。
- 読者への影響：中 — 底本では「これほどの愛（39.8 以下の愛）がそしられても、不思議はない」で、次の文の「あなたがたは、わたしたちのささやかな食事もそしる」へ続く。convivatur なら「これほどの愛が食事を共にしても、不思議はない」で、次の文の食事の話を先取りする。どちらでも文脈は通る。
- 訳での扱い：訳注は付けない。底本の conviolatur で、注 g に従い「（わたしたちキリスト者の）これほどの愛が汚されても」と訳す。訳注を付けるなら案は「写本には『食事を共にしても』と読むものもある。」（23 字）。読みが分かれ、Bindley は別の読みを採るが、写本の大勢と Oehler・Mayor は conviolatur なので、要否はメインが決める。caritas と dilectio（39.8、39.16）の訳し分けもメインが決める。
- 確かめた資料：Oehler 画像 0294（本文、校注 50、注 g）。OCR l. 34013、34021–34022、34091–34092。Bindley OCR l. 7832、7851–7856。Mayor OCR l. 23327–23328。

### 39.14 coenulas nostras … ut prodigas quoque suggillatis. De nobis scilicet Diogenis dictum est（小さな異読と、言葉の出どころ）
- 底本（Oehler）：Nam et coenulas nostras praeterquam sceleris infames ut prodigas quoque suggillatis. De nobis scilicet Diogenis dictum est: Megarenses obsonant quasi crastina die morituri, aedificant vero quasi numquam morituri.
- ほかの読み：ut (G は et) prodigas quoque suggillatis は A・B・D・E・F・G・λ・d、ウィーン写本、エアフルト写本。a・b・c・e・f と Havercamp は ut prodigas suggillatis（quoque がない）（校注 p. 264 の 51）。Megarenses を Aβ・E・G は megrenses、F とウィーン写本は in egrenses（校注 52）。morituri を G は moriturus est（校注 53）。aedificant vero quasi numquam morituri (λ は moriantur) は A・B・E・F・λ・d・e・f、エアフルト写本、オクスフォード、Pamelius の写本四つ。D・F・a・b・c とウィーン写本はこの語を欠く（校注 54。F が両方に刷られている）。
- 採る校訂者：注 p. 264 の h に引く Heraldus は、著者自身が異端に落ちてから『断食について』の終わりの章でこの食事をそしった、と言う。注 i に引く Heraldus は、プルタルコス『富への愛について』がこの言葉をストラトニコスのものとし、メガラ人でなくロドス人をからかったものと書くこと、ヒエロニムスはメガラ人とすることを挙げ、Oehler は、アイリアノス『ギリシア奇談集』12 巻 29 章とディオゲネス・ラエルティオス 8 巻 63 章はアクラガス人について言われたとし、一方はプラトン、一方はエンペドクレスの言葉とする、と加える。Bindley も、エンペドクレス（アクラガス人について）とストラトニコス（ロドス人について）の言葉ともされる、と注する（OCR l. 7858–7860）。Mayor はヒエロニムス書簡 123 などを挙げる（l. 23330–23332）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。名前の表どおり「ディオゲネス」（どのディオゲネスかは補わない）。Megarenses は「メガラ人」。言葉の出どころの違いは本文にないので訳では扱わない。dictum est: のあとの言葉を「」に入れるか『』に入れるかはメインが決める（底本は引用符を刷らない）。coenulas は縮小形で「ささやかな食事」。scilicet は訳語表どおり、皮肉の「なるほど」。
- 確かめた資料：Oehler 画像 0294（本文、校注 51〜54、注 h・i）。OCR l. 34013–34017、34022–34027、34095–34115。Bindley OCR l. 7832–7837、7858–7860。Mayor OCR l. 23330–23332。

### 39.15 Sed stipulam quis in alieno oculo facilius perspicit quam in suo trabem（マタイ七・三）
- 底本（Oehler）：Sed stipulam quis in alieno oculo facilius perspicit quam in suo trabem.
- ほかの読み：本文の異読はない。
- 採る校訂者：Bindley はマタイ七・三、ルカ六・四一を挙げる（OCR l. 7862）。Mayor は、著者が『諸国民へ』1 巻 20 章で「あなたがたの目からわらを取り除け。むしろ、あなたがたの目から梁を取り除け。そうすれば他人の目からわらを取り出せる」と言うことと、マタイ七・三〜四についての Wettstein を挙げる（l. 23334–23336）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。マタイ七・三（口語訳「なぜ、兄弟の目にあるちりを見ながら、自分の目にある梁を認めないのか」）の言い換えで、主語を quis（人）にし、問いの形も違うので、『』と出典は付けず、stipula と trabs の訳語を口語訳の「ちり」「梁」に寄せるかはメインが決める。
- 確かめた資料：Oehler 画像 0294（本文）。OCR l. 34017–34018。Bindley OCR l. 7837–7838、7862。Mayor OCR l. 23334–23336。`node tools/bible.js Matt.7.3 Luke.6.41`。

### 39.15 Saliis coenaturis creditor erit necessarius（Saliis と Si aliis）
- 底本（Oehler）：Tot tribubus et curiis et decuriis ructantibus acescit aër: Saliis coenaturis creditor erit necessarius: …
- ほかの読み：ructantibus を G は ruptantibus、D は欠く。acescit を F・G とウィーン写本は誤って accessit（校注 p. 264 の 55）。Saliis は c・d・e・f と Havercamp。a・b は Aliis、A・B・D・E・F・G・λ、ウィーン写本、オクスフォード、エアフルト写本は Si aliis（「ほかの人々が食事をするなら」）（校注 56）。
- 採る校訂者：Oehler は Saliis を刊本から採る。注 p. 264 の k に引く Heraldus は、区・クリア・組合がそろって公に宴を開いたことを 35 章の注で見たとし、注 l に引く Heraldus は、サリイの宴は費用がかかり、借金をしなければならないほどだった、と言う。Bindley の本文も Saliis cenaturis で、26 章の注を指し、「サリイの料理」が豪華な宴のことわざだったこと（ホラティウス『歌章』1 巻 37 歌 2 行）を挙げる（OCR l. 7839、7864–7865）。Mayor は Saliis に Marquardt を挙げる（l. 23346）。
- 読者への影響：小〜中 — 写本の大勢の Si aliis なら「ほかの者たちが食事をするなら、貸し手が要る」と、特定の祭司団の名が消える。刊本の Saliis で、Oehler・Bindley・Mayor はこれによる。
- 訳での扱い：訳注は付けない。底本の Saliis で、名前の表どおり「サリイ」。写本の多くが Si aliis と読むことを `// ` メモに書くかはメインが決める。tribus・curiae・decuriae は 37.5（tribus「区」、decuriae「組合」）と、38.1（curiae「議会」）の訳語表にある。ここの curiae は区と組合のあいだに並ぶ、市民の区分としてのクリア（共に宴を開く単位）で、38.1 の議会とは意味が違うので、訳語はメインが決める。ructantibus は「げっぷをする」。
- 確かめた資料：Oehler 画像 0294（本文、校注 55・56、注 k・l）。OCR l. 34018–34019、34030–34034、34077、34117–34125。Bindley OCR l. 7838–7840、7864–7865。Mayor OCR l. 23341–23346。

### 39.15 Herculanarum decimarum et polluctorum sumptus tabularii supputabunt … sparteoli excitabuntur（小さな異読と語の意味）
- 底本（Oehler）：Herculanarum decimarum et polluctorum sumptus tabularii supputabunt: Apaturiis, Dionysiis, mysteriis Atticis cocorum dilectus indicitur: ad fumum coenae Sarapiacae sparteoli excitabuntur.
- ほかの読み：decimarum を A・B・D・E、オクスフォード、エアフルト写本は decimanarum、G は demanarum（校注 p. 265 の 57）。et polluctorum は d・e・f と Havercamp。a・b・c は pollinctorum、オクスフォードとウィーン写本は et pollinctorum、A・B・D・E とエアフルト写本は et polinctorum、F は et polliticorum、G は et polintorum、λ は et polincto lucitorum（校注 58）。sumptus tabularii は F・λ・b・d・e・f と Havercamp。A・B・D・E・G とオクスフォードは sumptu stabularii（「宿屋の主人が」）、a・c は sumptus stabularii（校注 59）。Apaturiis を A は Appaturiis、F は aptaturiis（校注 60）。Dionysiis を a・b は Dionysii（校注 61）。dilectus indicitur を b は delectus inducitur、c・d・e は delectus indicentur（校注 62）。Sarapiacae は A・E、Bongars の写本、エアフルト写本、Pamelius の写本。(Aφ Bφ)・G・f と Havercamp は Serapiacae、D・F・a〜e は Serapicae、λ は Serapiae（校注 63）。Bindley の本文は coquorum dilectus indicentur、cenae Serapiacae（OCR l. 7843–7844）。
- 採る校訂者：Oehler は Herculanarum decimarum に 14 章（ヘルクレスへの十分の一）を、polluctum に Festus、ウァロ、カトーを挙げる（注 p. 265 の m）。注 n は sparteoli excitabuntur を、セラピスの宴の支度が大がかりで、その煙に火消しや夜警が呼び起こされ、火事にならないよう見張る、と取り、Casaubon のスエトニウス『アウグストゥス伝』30 章の注を挙げる。Bindley は tabularii を公の会計係、Apaturia をアテナの祭り（ローマではミネルウァに移された）、Dionysia と mysteria Attica をバックスとエレウシスの祭儀、dilectus indicentur を「料理人の徴募が触れ出される」、sparteoli を「火消し」（エニシダの縄を使うので）と注する（OCR l. 7867–7881）。Mayor も sparteoli を火消しとし、セネカ書簡 64 を挙げる（l. 23358–23359）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。名前の表にヘルクレス（14 章）、セラピス、エレウシスがある。decima Herculis は 14 章の既訳（ヘルクレスへの十分の一）と揃える。Apaturia、Dionysia は名前の表にないので、表記はメインが決める（「アパトゥリア祭」「ディオニュシア祭」など）。mysteria Attica は「アッティカの秘儀」（訳語表の mysteria「秘儀」）。sparteoli は「火消し」。
- 確かめた資料：Oehler 画像 0295（本文、校注 57〜63、注 m・n）。OCR l. 34132–34135、34146–34156、34200–34205、34220–34231、34171–34185。Bindley OCR l. 7840–7844、7867–7881。Mayor OCR l. 23348–23359。

### 39.16 De solo triclinio Christianorum retractatur. Coena nostra de nomine rationem sui ostendit. Id vocatur quod dilectio penes Graecos.（アガペーの名を補うか）
- 底本（Oehler）：De solo triclinio Christianorum retractatur. Coena nostra de nomine rationem sui ostendit. Id vocatur quod dilectio penes Graecos.
- ほかの読み：De solo を λ は de loco（校注 p. 265 の 64）。sui を D・a・b・c は suam（校注 65）。Id (D は Id quod) vocatur quod dilectio penes Graecos. は A・B・D・E・F・G・f、ウィーン写本、エアフルト写本、オクスフォード。λ と Havercamp は id vocatur quod (λ は vocatum quo) dilectio penes Graecos est.。a〜e は vocatur (c・d は vocatur enim) ἀγάπη id quod dilectio penes Graecos est（ギリシア語の ἀγάπη を本文に入れる）（校注 66）。Bindley の本文は id vocatur, quod dilectio penes Graecos est（OCR l. 7846–7847）。
- 採る校訂者：注 p. 265 の o に引く La Cerda は、「キリスト者のつましい、ごく小さな食卓について、大げさで憎しみに満ちた話が起こされる」と言い換え、Oehler は retractare を「非難をこめて吟味する、とがめる」とし、ゲッリウス 14 巻 3 章、『断食について』15 章を挙げる。注 p に引く Rigaltius は、名は「つまりアガペー」で、キリスト者のあいだでアガペーが広く行われていたことを、ユリアヌス帝がアガペーともてなしと食卓の奉仕を並べてそしることで示す、と言う。Bindley は retractatur を「話の種にされる」とし、ここはほとんど detractare（けなす）の意味、Cena nostra はこの後に述べる愛餐（dilectio）だ、と注する（OCR l. 7883–7887）。Mayor は coena nostra に、アウグスティヌス『ファウストゥス駁論』20 巻 20 章（わたしたちのアガペーは貧しい者を養う）、ヒエロニムス書簡 22、『祈りについて』28 章、『洗礼について』9 章などを挙げる（l. 23361–23379）。
- 読者への影響：中 — 底本は食事の名を書かず、「ギリシア人のもとで dilectio（愛）であるもの、その名で呼ばれる」とだけ言う。名（アガペー）を知らないと、de nomine rationem sui ostendit（名がそのわけを示す）が通じない。a〜e は ἀγάπη を本文に入れる。
- 訳での扱い：訳注は付けない。底本に ἀγάπη の語はなく、本の AGENTS.md は「異読にだけある語を足さない」とするので、訳で「アガペー」と書くか、（）で補うか、`// ` メモにとどめるかはメインが決める。dilectio は 39.8 の dilectionis operatio と同じ訳語にすると、「愛」の名の食事であることが伝わる。retractatur は注 o のとおり「とがめられる」。
- 確かめた資料：Oehler 画像 0295（本文、校注 64〜66、注 o・p）。OCR l. 34135–34137、34158–34161、34206–34208、34231、34187–34248。Bindley OCR l. 7844–7847、7883–7887。Mayor OCR l. 23361–23379。

### 39.16 non qua penes vos parasiti adfectant ad gloriam famulandae libertatis … sed qua penes deum maior est contemplatio mediocrium（語の意味）
- 底本（Oehler）：siquidem inopes quosque refrigerio isto iuvamus, non qua penes vos parasiti adfectant ad gloriam famulandae libertatis sub auctoramento ventris inter contumelias saginandi, sed qua penes deum maior est contemplatio mediocrium.
- ほかの読み：quosque を F・c・d は quoque（校注 p. 265 の 67）。
- 採る校訂者：注 p. 265 の q は famulandae を、能動の意味の famulare（＝δουλοῦν、奴隷にする）とし、21 章に同じ用法があると言い、iuvamus（わたしたち）と adfectant（彼ら）で人称が移ることに注意を促す。注 r は contemplatio を「顧み、考慮」の意味の法律家の語とする。Bindley は refrigerio を「慰め、元気づけ」、sub auctoramento ventris を「腹のための給金で」、contemplatio を法律ラテン語に多い「考慮」の意味と注する（OCR l. 7910–7916）。Mayor は refrigerio に 49 章、famulandae に 21 章を挙げる（l. 23393–23411）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。famulandae libertatis は注 q のとおり「自由を奴隷にする（売り渡す）ことの誉れ」。qua penes deum maior est contemplatio mediocrium は「神のもとでは、小さな者たちへの顧みのほうが大きいから」で、神が主語の動作ではないが、神の顧みとして尊敬語にするかはメインが決める。refrigerium は「慰め、元気づけ」。
- 確かめた資料：Oehler 画像 0295（本文、校注 67、注 q・r）。OCR l. 34137–34141、34214、34250–34258。Bindley OCR l. 7849–7850、7892–7895、7910–7916。Mayor OCR l. 23393–23411。

### 39.17 reliquum ordinem disciplinae de causa aestimate. Quod sit de religionis officio, nihil vilitatis … admittit（de causa の有無と、Quod sit と qui sit）
- 底本（Oehler）：Si honesta causa est convivii, reliquum ordinem disciplinae de causa aestimate. Quod sit de religionis officio, nihil vilitatis, nihil inmodestiae admittit.
- ほかの読み：de causa を a・c・e・f と Havercamp は欠き、ほかの写本と刊本はすべて持つ（校注 p. 265 の 68）。quod sit de は A・B・D・E・G、Bongars の写本、ウィーン写本、エアフルト写本。F は quod si de、オクスフォードは quid sit、a〜e は quid sit de、f と Havercamp は Fulvius Ursinus とともに qui sit（校注 69）。vilitatis, nihil inmodestiae を a は utilitatis nihil modestiae（校注 p. 265〜266 の 70）。admittit を c は admittitur（校注 p. 266 の 71）。
- 採る校訂者：Oehler は注 p. 265 の s でドイツ語に訳してみせ、「食事のきっかけが立派なものなら、そのきっかけに照らして、決まりの残りのありさまを量りなさい。宗教の務めから出るべきものは、卑しさも節度のなさも許さない」とする（Quod sit de religionis officio を主語の節に取る）。Bindley の本文は reliquum ordinem disciplinae aestimate, qui sit, de religionis officio: nihil vilitatis …（de causa がなく、qui sit で「その決まりがどんなものか」を問う。OCR l. 7897–7899）。Bindley は vilitas を「恥ずべきこと」とし、後代の著者にだけある意味とする（l. 7918–7920）。Mayor は ordinem に『貞潔の勧め』7 章などを、vilitatis にアプレイウス『フロリダ』7 などを挙げる（l. 23413–23417）。
- 読者への影響：小〜中 — 底本では「宗教の務めから出るものなので、卑しさを許さない」と、食事の性格を言い切る。Bindley の読みでは「その決まりがどんなものかを、宗教の務めから量りなさい」と区切りが変わる。
- 訳での扱い：訳注は付けない。底本の区切りで、注 s の Oehler の訳に従い、Quod sit de religionis officio を「宗教の務めから出るものであるから（ものは）」と主語に取る。aestimate は長官たちへの命令で、本の AGENTS.md のとおり「量ってください」（尊敬語にしない）。
- 確かめた資料：Oehler 画像 0295（本文、校注 68〜70、注 s）、0296（本文、校注 71）。OCR l. 34142–34144、34209–34217、34234、34260–34266、34303、34306。Bindley OCR l. 7897–7899、7918–7920。Mayor OCR l. 23413–23417。

### 39.17–39.18 Non prius discumbitur quam oratio ad deum praegustetur … ita fabulantur, ut qui sciant dominum audire（小さな異読）
- 底本（Oehler）：Non prius discumbitur quam oratio ad deum praegustetur. Editur quantum esurientes capiunt, bibitur quantum pudicis utile est. Ita saturantur, ut qui meminerint etiam per noctem adorandum deum sibi esse; ita fabulantur, ut qui sciant dominum audire.
- ほかの読み：capiunt を f と Havercamp は Fulvius Ursinus とともに cupiunt（「望む」）（校注 p. 266 の 72）。utile est は A・B・E・F・G、ウィーン写本、エアフルト写本。D・a〜f と Havercamp は est utile（校注 73）。meminerint を λ は meminerunt。E、エアフルト写本、オクスフォードは meminerint から fabulantur, ut qui までを欠く（校注 74）。sciant dominum は A・B・D・E・G・a・c・d・e・f、ウィーン写本、エアフルト写本。b は sciunt dominum、F・λ とオクスフォードは sciant deum（校注 75）。
- 採る校訂者：Bindley の本文は Oehler と同じ（capiunt、est utile。OCR l. 7899–7903）。Bindley は oratio … praegustetur に食前の祈り（マタイ一四・一九、第一テモテ四・五、アレクサンドリアのクレメンス『パイダゴーゴス』2 巻 4 章）、per noctem adorandum Deum に『妻へ』2 巻 4 章の夜の集まり、ita fabulantur にエペソ四・二九〜三〇、コロサイ四・六を挙げる（l. 7922–7937）。Mayor も食前食後の祈り、『妻へ』2 巻 4 章などを挙げる（l. 23418–23455）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。dominum は「主」（訳語表の dominus）で、神の動作なので audire は尊敬語にする。praegustetur は「（祈りが）先に味わわれる」の比喩。adorare は訳語表で単独のときは「拝む」。
- 確かめた資料：Oehler 画像 0296（本文、校注 72〜75）。OCR l. 34279–34283、34306–34309。Bindley OCR l. 7899–7903、7922–7937。Mayor OCR l. 23418–23455。

### 39.19 Post aquam manualem et lumina … provocatur in medium deo canere; hinc probatur quomodo biberit（ad lumina と、目的の不定詞）
- 底本（Oehler）：Post aquam manualem et lumina, ut quisque de scripturis sanctis vel de proprio ingenio potest, provocatur in medium deo canere; hinc probatur quomodo biberit. Aeque oratio convivium dirimit.
- ほかの読み：et lumina を Fulvius Ursinus は ad lumina としたかった（校注 p. 266 の 75 の後）。deo を λ は de deo（「神について」）（校注 76）。Aeque oratio を F とウィーン写本は Et quae oratio（校注 77）。
- 採る校訂者：注 p. 266 の t に引く Heraldus は、食事の後にもう一度手を洗い、それから灯りが運び込まれた、とし、ある本には post aquam manualem ad lumina とあると言う。Oehler は、post aquam manualem et lumina は「手洗いの水と灯りが運ばれた後」の切り詰めた言い方で、『さそり』11 章の注に例を挙げたと言う（注 t）。注 u は provocatur … deo canere の不定詞を「目的の不定詞」と呼ばれるものとし、22 章、『さそり』1 章、『スカプラへ』5 章の例を挙げる。Bindley の本文は Oehler と同じ（OCR l. 7903–7907）。Mayor は post に『さそり』11 章、aquam に『祈りについて』13 章、canere にキプリアヌス『ドナトゥスへ』16 章（節度ある食事に詩編を響かせよ）、dirimit にヒエロニムス書簡 22 などを挙げる（l. 23455–23512）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。post aquam manualem et lumina は注 t のとおり「手洗いの水と灯りが運ばれた後」。provocatur in medium deo canere は注 u のとおり「神に向かって歌うように、皆の真ん中に呼び出される」。de scripturis sanctis vel de proprio ingenio は「聖書から、あるいは自分の才から」。hinc probatur quomodo biberit は「これで、どれほど飲んだかが試される」。
- 確かめた資料：Oehler 画像 0296（本文、校注 75〜77、注 t・u）。OCR l. 34283–34286、34310–34311、34325–34346、34348。Bindley OCR l. 7903–7907。Mayor OCR l. 23455–23512。

### 39.20 Inde disceditur non in catervas caesionum nec in classes discursationum nec in eruptiones lasciviarum（nec と neque、語の意味）
- 底本（Oehler）：Inde disceditur non in catervas caesionum nec in classes discursationum nec in eruptiones lasciviarum, sed ad eandem curam modestiae et pudicitiae, ut qui non tam coenam coenaverint quam disciplinam.
- ほかの読み：caesionum を a は censionum（校注 p. 266 の 78）。一つ目の nec は A・B・E・F、エアフルト写本、ウィーン写本。D・a〜f と Havercamp は neque、G は欠く（校注 79）。λ は nec in inceptiones lasciviarum（校注 80）。coenaverint を G は coenaverunt、F は cenarint（校注 81）。Mayor は p. 148 の一覧で「p. 114 l. 37 nec bis] neque bis」とし、二つの nec を neque とする読みを好む。Bindley の本文は neque in classes discursationum, nec in eruptiones（OCR l. 7907–7908）。
- 採る校訂者：注 p. 266 の v は eruptiones lasciviarum に 35 章の catervatim cursitare ad iniurias, ad inpudentias, ad libidinis inlecebras を並べる。Bindley は caesionum を「乱暴の行い」とし、この意味ではごくまれな、あるいは唯一の例で、コルメラは木の剪定に使う、と注する（OCR l. 7939–7942）。Mayor は caesionum にユウェナリス 3 歌（箇所に疑問符を付ける）とスエトニウス『アウグストゥス伝』45 章（路地で群れて殴り合う拳闘士）などを、discursationum にテオドレトスを、eruptiones に 35 章と『諸国民へ』1 巻 17 章を挙げる（l. 23564–23580）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。catervas caesionum は「殴り合いの群れ」、classes discursationum は「走り回る組」、eruptiones lasciviarum は「放埒に繰り出すこと」。35 章の catervatim cursitare … の既訳と言葉を合わせるとよい。ut qui non tam coenam coenaverint quam disciplinam は「夕食よりも、むしろ規律を食べた者として」。
- 確かめた資料：Oehler 画像 0296（本文、校注 78〜81、注 v）。OCR l. 34286–34289、34311–34313、34352–34357。Bindley OCR l. 7907–7908、7939–7942、7947–7948。Mayor OCR l. 23564–23580。Mayor p. 148（0172）。

### 39.21 merito damnanda, si quis de ea queritur eo titulo quo de factionibus querela est（λ の補い si non dissimilis damnandis）
- 底本（Oehler）：Haec coitio Christianorum merito sane inlicita, si inlicitis par, merito damnanda, si quis de ea queritur eo titulo quo de factionibus querela est. In cuius perniciem aliquando convenimus?
- ほかの読み：λ・f と Havercamp は merito damnanda, si non dissimilis damnandis, si quis（「罪に定められるべきものと違わないなら、罪に定められて当然」）（校注 p. 266 の 82）。
- 採る校訂者：Bindley は [si non dissimilis damnandis] を角括弧に入れて本文に刷り、ある編者たちがフルダ写本から入れたもので、damnandis の後に factio を補う案もある、と注する。si quis de ea queritur を「だれかが、結社に対して訴えが起こされるのと同じ名目で、これを訴えるなら」とし、titulo を 44 章の注に指す（OCR l. 7949–7950、7970–7977）。Mayor は coitio にウルピアヌスの法文、titulo に 42 章の初めを挙げる（l. 23591–23597）。
- 読者への影響：小 — λ の句は、前の si inlicitis par と対になる。底本では、二つ目の merito は si quis … の条件だけを受ける。
- 訳での扱い：訳注は付けない。λ の句は底本にないので訳さない。coitio は 39.2 の coire と同じ語根で、注 b（39.2 の項）のとおり結社の語なので、訳語をメインが決める。titulus は「名目」。In cuius perniciem aliquando convenimus? は「わたしたちが集まって、いつ、だれを滅ぼしたでしょうか」の修辞疑問。
- 確かめた資料：Oehler 画像 0296（本文、校注 82）。OCR l. 34289–34292、34313。Bindley OCR l. 7948–7953、7970–7977。Mayor OCR l. 23591–23597。

### 39.22 non est factio dicenda, sed curia（curia の意味）
- 底本（Oehler）：Hoc sumus congregati quod et dispersi, hoc universi quod et singuli, neminem laedentes, neminem contristantes. Cum probi, cum boni coeunt, cum pii, cum casti congregantur, non est factio dicenda, sed curia.
- ほかの読み：Cum probi, cum boni を F は Cum boni, cum probi（校注 p. 266 の 83）。
- 採る校訂者：Bindley は curia を「法廷、あるいは厳かな宗教の集まり」とし、サルスティウス『ユグルタ戦争』31 章（「これは善い人々のあいだでは友情、悪い人々のあいだでは党派だ」）を挙げる（OCR l. 7979–7980）。Mayor も factio にサルスティウス『ユグルタ戦争』31 章 15 節を挙げる（l. 23614–23615）。Hoc sumus congregati quod et dispersi には、ミヌキウス 31 章 7 節（「集まっていても、一人ずつのときと同じく静かに」）、8 章 4 節（夜の集まりで盟約を結ぶという非難）、小プリニウス書簡 10 巻 96（97）7 節（決まった日の夜明け前に集まり、キリストに神としての歌を歌う）を挙げる（l. 23599–23612）。Oehler の注はこの文にない。
- 読者への影響：中 — curia は、38.1 で議会（curiae）、39.15 で市民の区分（curiis）として出た語で、ここでは factio（結社）と対にして、正しい、立派な集まりを言う。訳語によって、元老院の議場のような公の会議に読めるか、宗教の集まりに読めるかが変わる。
- 訳での扱い：訳注は付けない。curia の訳はメインが決める（38.1 の訳語表「議会」と揃えるなら「議会と呼ぶべきもの」。factio との対が分かる形にする）。factio は訳語表どおり「結社」。Hoc sumus congregati quod et dispersi は「集まっていても、散らばっているときと同じ者」。
- 確かめた資料：Oehler 画像 0296（本文、校注 83）。OCR l. 34292–34295、34313–34314。Bindley OCR l. 7953–7958、7979–7980。Mayor OCR l. 23599–23615。

---

## 未確認

- 39.7 の ingratiis について、Oehler の注 o は「4 章の注を見よ」とだけ書く。ここで副詞「心ならずも」に取るのか、voratrinis に掛かる形容詞に取るのかを、Oehler 自身が書いた箇所は見つけていない。Mayor と Bindley も ingratiis（ingratis）に注を付けない。
- 39.8 の Vide … ut invicem se diligant、ut pro alterutro mori sint parati と、ヨハネ一三・三四〜三五、一五・一三、第一ヨハネ三・一六との近さ、39.12 の Omnia indiscreta と使徒四・三二との近さは、この一覧の観察で、それを挙げる資料は見ていない。
- 39.9 の注 u の終わりで Oehler が言う「frater は古くは悪い意味の語でもあった」の典拠（Lipsius など）は開いていない。
- 39.14 の注 i が挙げる、言葉の出どころ（プルタルコス、アイリアノス、ディオゲネス・ラエルティオス）は、注と Bindley の要約で読んだだけで、原典は開いていない。
- 39.15 の Bindley の本文の supputabant（Oehler は supputabunt）は OCR で読んだだけで、画像では確かめていない。
- 39.1 の Bindley の ipsa が、どの写本や刊本の読みかは、Oehler の校注に出ないので確かめていない。
