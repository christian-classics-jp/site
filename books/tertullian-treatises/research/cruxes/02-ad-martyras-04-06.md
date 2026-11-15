# 02-ad-martyras-04-06 の論点（4〜6）

略号と資料の所在は [README.md](README.md)。Oehler の画像は p. 11〜14（`cache/archive.org/quintiseptimiifl0001fanc/page/n40_w1600.jpg`〜`n43_w1600.jpg`。n40＝IIIF 0041＝p. 11）。それぞれを `node tools/image.js crop` で上半分（`pct:0,0,100,50`、本文と校注）と下半分（`pct:0,48,100,52`、校注の続きと注解）に切って読んだ。4 章の校注 1〜12（p. 11）は `n40_w1600.jpg` の `pct:0,60,100,12` を `--scale 2` で拡大して確かめた。切り出しは `/tmp/tt2/crux/` に置き、保存していない。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 2274–2640（ページの境は p. 12 が l. 2334、p. 13 が l. 2463、p. 14 が l. 2564。l. 2643 から『見世物について』）。OCR は校注と二段組みの注解を細切れに混ぜるので、異読と注はすべて画像で読み、OCR の行番号はおよその位置として添える。

校注の番号と注解の記号は章ごとに振り直される。4 章は校注 1（p. 11）〜41（p. 13）、注 a（p. 11）〜q（p. 13）。5 章は校注 1（p. 13）〜9（p. 14）、注 a（p. 13）〜d（p. 13〜14）。6 章は校注 1〜7、注 a・b（p. 14）。p. 11 の上の 3 章の校注 20・21 と注 m・n は前のページの論点（01-ad-martyras-01-03.md の 3.5–3.6）で扱った。p. 11 の欄外の「1. Cor. IX, 25.」（OCR l. 2277–2278）は 3.5 の Et illi, inquit apostolus に付くもので、この範囲のものではない。

Oehler の注が送る並行箇所のうち、『護教論』50 章（50.6〜50.9。注 g〜p は『護教論』の論点一覧 `books/tertullian-apology/research/cruxes/chapter-49-50.md` に記録がある）、『諸国民へ』1 巻 18 章（本文 OCR l. 43177–43186、43284–43286、43298–43302、43382、43391–43395、注 d〜g l. 43225–43270、注 n〜p l. 43476–43506）、『蠍の毒への解毒剤』6 章の inculcare の注（OCR l. 62105–62138。二段組みが混ざった OCR だけで読み、画像では確かめていない）を読んだ。『諸国民へ』1 巻 18 章の本文と注も OCR だけで読み、画像では確かめていない（注が挙げる箇所の数字は OCR の崩れを含みうる）。

この範囲に、底本の角括弧・イタリック・短剣符はない。校注に「ego」（Oehler 自身の推定）もない。ただし、写本の読みでなく推定や刊本の読みを本文に採ったところがある（4.4 の ne maritum、4.7 の in se sciret tormenta など）。4.2 の benedictae と 5.3 の benedicti には、語そのものの異読はない。

---

### 4.1 Scimus ex dominico praecepto, quod caro infirma sit, spiritus promptus（マタイ二六・四一、praedixit の「先に」）
- 底本（Oehler）：Scimus ex dominico praecepto, quod caro infirma sit, spiritus promptus. Non ergo nobis blandiamur, quia dominus consensit carnem infirmam esse. Propterea enim praedixit spiritum promptum, ut ostenderet, quid cui debeat esse subiectum, scilicet ut caro serviat spiritui, infirmior fortiori, ut ab eo etiam ipsa fortitudinem assumat. 欄外に Matth. XXVI, 41.
- ほかの読み（4 章の校注 1〜4、p. 11）：A の最初の手と B は vobis（nobis の代わり）。promptum, ut は ABCDab、promptum esse, ut は cd と、Pamelius の報告によればヴァティカンの写本三つ。校注 3 は「spiritui A. (m. pr.) B.」とだけ書く（底本と同じ形を挙げる。前のページ 3.5 の「iocundiore B.」と同じ書き方で、ほかの写本の形は示されない）。ipsa は abcd とゴルツェの写本、ipsam は ABCD。
- 採る校訂者：Oehler は刊本の ipsa を採る。注 a（p. 11）は、quod を不定詞つき対格の代わりに使うのは後代の書き手にごく普通の形だとする。注 b（p. 11〜12）は quid cui debeat を、一つの文の部分に二つの疑問詞をまとめる形とし、『迫害のときの逃亡について』8 章への注を見よとする。
- 聖書の形：マタイ二六・四一 のギリシア語は Τὸ μὲν πνεῦμα πρόθυμον, ἡ δὲ σὰρξ ἀσθενής で、霊が先、肉が後（マルコ一四・三八 も同じ）。口語訳は『心は熱しているが、肉体が弱いのである』。テルトゥリアヌスは間接話法（quod … sit）で、肉を先、霊を後に言い換える。そのうえで praedixit spiritum promptum（主は霊が燃えていると「先に」言われた）と言い、福音書の句で霊が先に来ることを論の根拠にする（praedixit を「先に言った」と取るのはこの一覧の観察で、Oehler の注にはない）。前のページ 1.2 で霊を「もっと弱いもの」（infirmius）と呼んだのと、ここで霊を「より強いもの」（fortiori）と呼ぶことの向きの違いは、01-ad-martyras-01-03.md の 1.2 の項に書いた。
- 読者への影響：中 — 口語訳の「心」「肉体」をそのまま使うと、本の訳語表の spiritus＝霊（cor＝心）と食い違い、続く「肉は霊に仕える」の論とつながらない。praedixit の「先に」を落とすと、なぜ霊が上に立つのかの論拠が消える。
- 訳での扱い：訳注は付けない。間接話法の言い換えなので『』に入れず、地の文に溶かして出典（マタイ二六・四一）を付けるか、口語訳の語順と語（「心」「肉体」）を霊・肉に替えて引くかは「メインで決めること」。dominus consensit は「主が（肉が弱いことを）認められた」。
- 確かめた資料：`page/n40_w1600.jpg` の上半分（本文、欄外）、下半分と拡大（校注 1〜4、注 a・b）、`page/n41_w1600.jpg` の下半分（注 b の続き）。OCR l. 2274–2290、2305–2307、2315–2328、2387–2388。`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/MAT.csv` l. 952、`MAR.csv` l. 578。`node tools/bible.js Matt.26.41 Mark.14.38`。

### 4.2 nec iam de incommodis carceris, sed ipso agone et proelio cogitans … acerba licet ista（小さな異読）
- 底本（Oehler）：Colloquatur spiritus cum carne de communi salute, nec iam de incommodis carceris, sed ipso agone et proelio cogitans. Timebit forsitan caro gladium gravem … sed spiritus contraponat sibi et carni acerba licet ista, a multis tamen aequo animo excepta, immo et ultro appetita, famae et gloriae causa …
- ほかの読み（4 章の校注 5〜8、p. 11）：de incommodis は A の後の手・cd・Harris、ほかはみな incommodis（de がない）。Rhenanus は carceris, de ipso（agone の前に de）。A の最初の手と B は Tibebit（誤記）。AB は et licet、A の後の手は sint licet。
- 採る校訂者：Oehler は de incommodis を採る（写本の多くにない de を、A の後の手と刊本から）。注はない。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。agon は本の訳語表どおり「競技」、proelium は「戦い」。acerba licet ista は「つらいことではあっても」。
- 確かめた資料：`page/n40_w1600.jpg` の上半分（本文）、拡大（校注 5〜8）。OCR l. 2290–2297、2307–2309。

### 4.2 ut vos quoque, benedictae, sexui vestro respondeatis（女たちへの呼びかけ。3.3 との関係）
- 底本（Oehler）：… nec a viris tantum, sed etiam a feminis, ut vos quoque, benedictae, sexui vestro respondeatis.
- ほかの読み（4 章の校注 9、p. 11）：ABC は ut nos（vos の代わり）。benedictae（女性複数の呼びかけ）と respondeatis には異読がない。
- 採る校訂者：Oehler は vos を採る。前のページ 3.3 の注 g（p. 10）によると、Rigaltius は 3.3 の写本の benedictae・subiturae を benedicti・subituri に直し、その理由を「4 章で女たちが benedictae と呼ばれるのとは別に、3.3 は男女どちらの殉教者にも向けて語る」とした。つまり、この 4.2 の女性形は写本も刊本もみな一致し、3.3 の直しの根拠に使われている。
- 読者への影響：中 — 女たちへの呼びかけは、牢に女の殉教者もいたことを示す。ABC の nos では、女性形の呼びかけと「わたしたち」が合わず、意味が通らない。sexui vestro respondeatis は「（勇気を示した女たちに）あなたがたの性がふさわしいものとなるように」の意味で、前の「男だけでなく女も」を受ける。
- 訳での扱い：訳注は付けない。benedictae は、1.1・1.4・2.4・3.3 の「祝福された人々よ」と区別して、女たちへの呼びかけとわかる形（「祝福された女たちよ」など）にする。3.3 に訳注を付ける場合（前のページの論点一覧の案）、ここと呼びかけの形がつながるようにする（「メインで決めること」）。
- 確かめた資料：`page/n40_w1600.jpg` の下半分（本文、校注 9）、`page/n39_w1600.jpg`（3.3 の注 g。前のページの論点一覧の 3.3 の項）。OCR l. 2296–2298、2309、2149–2154。

### 4.3 De feminis ad manum est. Lucretia, quae vim stupri passa est, cultrum sibi adegit（ルクレティア）
- 底本（Oehler）：Longum est, si enumerem singulos, qui se gladio confecerint animo suo ducti. De feminis ad manum est. Lucretia, quae vim stupri passa est, cultrum sibi adegit in conspectu propinquorum, ut gloriam castitati suae pareret.
- ほかの読み（4 章の校注 10〜12、p. 11）：ABC は est et（et Lucretia）。passa est cultrum は ABCDa、ほか（bcd）は passa（est がない）。A の後の手と B は sibi agebit。
- 採る校訂者：Oehler は写本の passa est を採る。ルクレティアに Oehler の注はない。
- 読者への影響：小。人物は本文の書き方（辱めを受け、身内の前で自分に刃を突き立てた）でわかる。
- 訳での扱い：訳注は付けない。De feminis ad manum est は「女たちのことなら、手近に（例が）ある」。名前の表に Lucretia はない（ルクレティアの表記は「メインで決めること」）。
- 確かめた資料：`page/n40_w1600.jpg` の下半分（本文、校注 10〜12）、`page/n41_w1600.jpg` の上半分（本文の続き）。OCR l. 2298–2300、2309–2310、2337。

### 4.4 Mucius manum suam dexteram in ara cremavit（ムキウス、写本の綴り）
- 底本（Oehler）：Mucius manum suam dexteram in ara cremavit, ut hoc factum eius fama haberet.
- ほかの読み（4 章の校注 13・14、p. 12）：Mutius は「すべての本」（libri omnes）。dexteram は CD、dextram は AB。
- 採る校訂者：Oehler は、すべての本の Mutius を Mucius と綴り直して刷る。この章に注はない。『護教論』50.6 の注 g は、リウィウス 2 巻 12 章などを挙げる（『護教論』の論点一覧 50.6 の項）。
- 読者への影響：小 — 綴りだけの違い。
- 訳での扱い：訳注は付けない。名前は『護教論』50:6 と同じ「ムキウス」（名前の表。「スカエウォラ」は補わない）。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 13・14）。OCR l. 2337–2338、2358–2361。

### 4.4 Minus fecerunt philosophi Heraclitus … Empedocles … Peregrinus（写本の崩れ、ヘラクレイトス・エンペドクレス・ペレグリヌス）
- 底本（Oehler）：Minus fecerunt philosophi Heraclitus, qui se bubulo stercore oblitum exussit, item Empedocles, qui in ignes Aetnaei montis desilivit, et Peregrinus, qui non olim se rogo immisit, cum feminae quoque contempserint ignes …
- ほかの読み（4 章の校注 15〜21、p. 12）：
  - philosophi Heraclitus の箇所は、AφB が filii sophi heraclitis、A が filius sophii heraclitis。A の後の手は余白に filius Iovius Heracles vel Hercules（「ユピテルの子ヘラクレス、またはヘルクレス」）と書く。底本の philosophi Heraclitus がどの本の読みかは、校注に書かれていない。
  - A の最初の手・BCD は bubalo（bubulo の代わり）。
  - A の最初の手と B は pedocles。C は qui ignes（in がない）。AB は ethnei。
  - dissilivit は ABDa、dissiluit は（C?）bcd。底本の desilivit は、校注に挙がるどの本の読みでもない。
  - ABCD は emisit（immisit の代わり）。
- 採る校訂者：注 c（p. 12）は、ヘラクレイトスが牛の糞を塗って自分を焼いた話を、ディオゲネス・ラエルティオス 9 巻 1 章 3 節が語るとする（その箇所は読んでいない）。注 d は、エンペドクレスについて『護教論』50 章への注を見よとする（『護教論』50.6 の注 h はディオゲネス・ラエルティオス 8 巻 67 節以下を挙げる。『護教論』の論点一覧 50.6 の項）。注 e は、ペレグリヌスについてルキアノス『ペレグリノスの最期について』（Περὶ τῆς Περεγρίνου τελευτῆς）とその注釈者、フィロストラトス『ソフィスト列伝』2 巻 10 章、アテナゴラス『キリスト者のための嘆願』20 章を挙げる。
- 構文：Minus fecerunt（「〔それより〕少ないことをした」）の比べる相手は書かれていない。続く cum feminae quoque contempserint ignes（女たちさえ火を軽んじたのだから）が理由を言い、「女でさえしたことなのだから、哲学者たちのしたことは、それほどのことではない」と読める（この読み方はこの一覧の観察で、Oehler の注にはない）。
- 読者への影響：中 — Minus fecerunt を「（ムキウスより）劣ることをした」と取るか、「女たちもしたので、大したことではない」と取るかで、文のつながりが変わる。写本の崩れ（filii sophi heraclitis）や余白のヘラクレスの書き込み、dissilivit（「はじけ散った」とも読める形）は、底本の形（philosophi Heraclitus、desilivit）がどの本によるかは校注に書かれていないが（「未確認」）、底本どおり訳せば訳に響かない。
- 訳での扱い：訳注は付けない。desilivit で「アエトナ山の火の中へ飛び込んだ」。dissilivit が写本の形であることは `// ` メモに書ける。non olim は「つい先ごろ」（ペレグリヌスはテルトゥリアヌスと近い時代の人）。ANF の編者の注（角括弧）は、ペレグリヌスの死を 170 年ごろとする（anf03.txt l. 69069）。名前は「ヘラクレイトス」「エンペドクレス」「アエトナ山」（『護教論』の名前の表）。Peregrinus は名前の表にない（「メインで決めること」）。注 e が挙げるアテナゴラスの箇所に当たるとみられる既訳の『キリスト者のための嘆願』26:131 は、オリンピアの近くで火に身を投じた人を「プロテウス」と呼ぶ（books/athenagoras-plea/AGENTS.md の名前の表。Oehler の「20 章」と章の番号が違うのは、版の章立ての違いとみられるが、確かめていない）。ここは原文が Peregrinus なので、その名で訳すとみられる。Minus fecerunt の取り方も「メインで決めること」。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 15〜21、注 c〜e）。OCR l. 2339–2342、2361–2369、2390–2400。

### 4.4 Dido, cum post virum dilectissimum nubere cogeretur（ディド。d の ne）
- 底本（Oehler）：cum feminae quoque contempserint ignes Dido, cum post virum dilectissimum nubere cogeretur, item Asdrubalis uxor …
- ほかの読み（4 章の校注 22、p. 12）：Dido（ABC は didon）cum は ABCDabc、Dido ne は d（「結婚させられないように」）。
- 採る校訂者：Oehler は写本の cum を採る。注 f は『護教論』50 章と『諸国民へ』1 巻 18 章を見よとする。『護教論』50.6 の注 i によれば、ディドは夫シュカイオスの死の後、マウリ人の王ヒアルバスと結婚させられないように、火葬の薪に身を与えた（『護教論』の論点一覧 50.6 の項）。『諸国民へ』1 巻 18 章も、ハスドルバルを夫とするカルタゴの女と並べてディドが火に飛び込んだことを言う（OCR l. 43184–43186、43284。文の取り方はこの一覧の観察）。
- 読者への影響：小 — cum（「結婚を強いられたとき」）でも ne（「強いられないように」）でも、二度目の結婚を拒んで火に身を投げた、という話は同じ。
- 訳での扱い：訳注は付けない。『護教論』50:6 では名を出さず「カルタゴを建てた、ある女」と訳したが、ここは原文に Dido の名がある。表記（「ディド」）は「メインで決めること」。virum dilectissimum は「最愛の夫」。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 22、注 f）。OCR l. 2342–2343、2370、2402–2403、2409。

### 4.4 item Asdrubalis uxor, quae iam ardente Carthagine, ne maritum suum supplicem Scipionis videret（ハスドルバルの妻。ne は Scaliger の推定）
- 底本（Oehler）：item Asdrubalis uxor, quae iam ardente Carthagine, ne maritum suum supplicem Scipionis videret, cum filiis suis in incendium patriae devolavit.
- ほかの読み（4 章の校注 23〜25、p. 12）：A は cartagine、C は carhagine。ne maritum は Jos. Scaliger の推定、cum maritum は d、maritum（接続詞がない）は残りのすべて（写本と、d より前の刊本）。d は Scipioni。
- 採る校訂者：Oehler は Scaliger の推定 ne を本文に採る（立体で刷り、校注に ego はない）。注 g は『諸国民へ』1 巻 18 章と 2 巻 9 章を見よとする。『諸国民へ』1 巻 18 章の注 g は、アッピアノス、ウァレリウス・マクシムス、フロルス、オロシウスを挙げる（OCR l. 43266–43270。巻と章の数字は OCR が崩れているので写さない）。
- 読者への影響：中 — 底本（Scaliger）では「夫がスキピオに命乞いするのを見ないように」火に飛び込んだ。写本（接続詞がなく、関係節の接続法で maritum … videret）は「夫がスキピオに命乞いする者となったのを見たので」と読める（この読み方はこの一覧の観察）。d では「見たとき」となる。どれでも、夫の屈服を恥じて子と共に火に身を投げた、という要点は同じだが、動機の言い方が変わる。
- 訳での扱い：訳注は勧めない（要点は変わらない）。底本どおり「見ないように」と訳し、ne が Scaliger の推定で、写本には接続詞がないことを `// ` メモに書く（『護教論』の AGENTS.md の、文意を変えない推定の扱い）。付けるなら次の案。
  - 「写本では『夫が命乞いするのを見て』と読める。」（22 字）

  名前は「ハスドルバル」「スキピオ」（『護教論』11.16 のスキピオと同じ表記。どのスキピオかは補わない）。Asdrubal の表記は「メインで決めること」。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 23〜25、注 g）。OCR l. 2343–2345、2370–2374、2378、2405。

### 4.5 Regulus … in arcae genus stipatus undique extrinsecus clavis transfixus tot cruces sensit（レグルス。注 i）
- 底本（Oehler）：Regulus, dux Romanorum, captus a Carthaginiensibus, cum se unum pro multis captivis Carthaginiensibus compensari noluisset, maluit hostibus reddi et in arcae genus stipatus undique extrinsecus clavis transfixus tot cruces sensit.
- ほかの読み（4 章の校注 26〜28、p. 12）：Carthaginensibus は BDabc（一つ目）、Babc（二つ目）。A の最初の手と B は voluisset（noluisset の代わり。「引き換えにされることを望んだ」となり、文意が逆になる誤記）。
- 採る校訂者：注 h は『護教論』50 章と『諸国民へ』1 巻 18 章を挙げる。注 i は、transfixus を transfixis や transfixae に直す必要はないとし、extrinsecus は「外から」（von aussen her）だとする。つまり transfixus はレグルスに掛かり、箱の外から打ち込まれた釘に、四方から刺し貫かれた、という意味。『諸国民へ』1 巻 18 章の注 d（Gothofredus）は、レグルスが閉じ込められたのは、ごく鋭い釘や突起が四方に突き出た機械か箱で、釘の数だけ十字架がある（crucis novitatem numerosae）と言い、この 4 章を引く（OCR l. 43230–43256）。
- 読者への影響：中 — tot cruces sensit を「十字架に付けられた」と取ると誤る。釘の一本一本を十字架にたとえて「それほど多くの十字架を感じた」と言う。
- 訳での扱い：訳注は付けない。『護教論』50:7 は「全身にいくつもの十字架の責め苦を受けました」と訳したので、それと揃えるかは「メインで決めること」。名前は「レグルス」（『護教論』の名前の表）。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 26〜28、注 h・i）。OCR l. 2345–2349、2374–2379、2413–2421、43230–43256。

### 4.6 Bestias femina libens appetiit, et utique horridiores aspides serpentes tauro vel urso, quas Cleopatra immisit sibi（クレオパトラ。Faber の削除説）
- 底本（Oehler）：Bestias femina libens appetiit, et utique horridiores aspides serpentes tauro vel urso, quas Cleopatra immisit sibi, ne in manus inimici perveniret.
- ほかの読み（4 章の校注 29・30、p. 12）：AB は et bestias。d は et utique aspides serpentes tauro vel urso horridiores（語順）。Fr. Junius は serpentes の語を削り（inducit）、La Cerda も従う。
- 採る校訂者：注 k（p. 12）によると、Petr. Faber は aspides serpentes と quas Cleopatra immisit sibi を後の書き込み（spuria）と判断する。Oehler はこれを採らず、本文をドイツ語で「一人の女は進んで猛獣に手を伸ばした。実際、牛や熊より恐ろしいのは、クレオパトラが敵の手に落ちないよう自分に当てた毒蛇（アスプ）である」の意味に訳す（horridiores を述語に取り、et utique 以下を「そして実に、毒蛇は牛や熊より恐ろしい」と読む）。注 l は『諸国民へ』1 巻 18 章を見よとする。そこでは「エジプトの女王は自分の獣を使った」（regina Aegypti bestiis suis usa est）と言い、その注 f はプルタルコス『アントニウス伝』78 章以下、ディオン・カッシオス 51 巻 11 章以下などを挙げる（OCR l. 43184、43257–43265）。
- 読者への影響：中 — Bestias … femina は、クレオパトラが毒蛇を「獣」として自分に当てたことを言う。「一人の女が猛獣の前に進み出た」と別の話に読むと、続く「毒蛇は牛や熊より恐ろしい」とのつながりが切れる。Faber の削除説に従うと、女の名も毒蛇も消えるが、写本の裏づけのない推定。
- 訳での扱い：訳注は付けない。注 k の Oehler の訳のとおり、「獣」と「毒蛇」が同じものを指すように訳す。inimici（単数）の名は補わない。名前は Cleopatra（名前の表にない。「メインで決めること」）。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 29・30、注 k・l）。OCR l. 2349–2351、2375、2382、2424、2429–2430、2434–2444、43184、43257–43265。

### 4.6 Sed mortis metus non tantus est, quantus tormentorum（小さな異読）
- 底本（Oehler）：Sed mortis metus non tantus est, quantus tormentorum.
- ほかの読み（4 章の校注 31、p. 12）：C は tanti est quanti、AB は tantis est quantis。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。次の 4.7 の Itaque がこの文を受ける。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 31）。OCR l. 2351–2352、2383、2425。

### 4.7 Itaque cessit carnifici meretrix Atheniensis（「屈した」か「屈しなかった」か。注 m）
- 底本（Oehler）：Itaque cessit carnifici meretrix Atheniensis, quae conscia coniurationis cum propterea torqueretur a tyranno, et non prodidit coniuratos et novissime linguam suam commestam in faciem tyranni expuit …
- ほかの読み（4 章の校注 32、p. 12）：Itaque non cessit は Jos. Scaliger、Non itaque cessit は Fr. Junius、Itaque nec cessit は Latinius の推定。写本の異読は挙がらない。
- 採る校訂者：Oehler は写本の Itaque cessit を採る。注 m（p. 12）は、この女は遊女レアイナだとし、『護教論』50 章への注と『諸国民へ』1 巻 18 章を見よとする。続けて、彼女は舌を歯でかみ切ったとき、ある意味で（quodammodo）刑吏に屈したのだ、自分がこれ以上は責め苦に耐えられないと感じていたからだ、と言う（non ultro scilicet sese tormentis restituram sentiens。画像で restituram と刷られていることを確かめた。restituram を resistere「耐える、逆らう」の未来分詞 restiturus と取る読み方で、この一覧の観察。restituere「戻す」の未来分詞なら restituturam となるはず）。注 n は novissime を「ついに、最後に」（denique, postremo）とする。『護教論』50.8 の同じ話は、「責めに負けて言いたくなったとしても、共謀者を明かせないように」と、舌をかみ切った理由を書く（『護教論』の論点一覧 50.8 の項）。
- 読者への影響：中 — 「刑吏に屈した」と読むと、仲間を明かさなかった勇気と矛盾するように見え、三人の学者は否定の語を足した。Oehler の解では、前の文（死の恐れより責め苦の恐れが大きい）を受けて、「だから彼女も責め苦には屈した。しかし、仲間は明かさず、舌をかみ切って吐きかけた」となる。否定を足す推定では「だから、刑吏に屈しなかった」となり、前の文との「だから」のつながりも変わる。
- 訳での扱い：底本の cessit で、注 m の「ある意味で屈した」が伝わるように訳す（「メインで決めること」）。訳注は勧めない（推定は写本の裏づけがなく、Oehler は退けている）。訳が矛盾に見えるときに付けるなら次の案。
  - 「『屈しなかった』と直して読む学者もいる。」（20 字）

  meretrix Atheniensis は『護教論』50:8 の Attica meretrix「アッティカの遊女」とは原文の語が違うので「アテナイの遊女」とし、レアイナの名は補わない（『護教論』の名前の表と同じ扱い）。commestam は「かみ切った」。tyrannus は「僭主」（『護教論』50:8）。
- 確かめた資料：`page/n41_w1600.jpg` の上半分（本文）、下半分（校注 32、注 m・n）。OCR l. 2352–2355、2384、2426、2431、2446–2457。

### 4.7 ut nihil agere in se sciret tormenta, etsi ultra perseverarent（Junius の推定と写本の読み）
- 底本（Oehler）：… linguam suam commestam in faciem tyranni expuit, ut nihil agere in se sciret tormenta, etsi ultra perseverarent.
- ほかの読み（4 章の校注 33・34、p. 13）：in se sciret tormenta は Franc. Junius の推定。abcd は se scirent tormenta、ABCD は se sciret in tormenta、Rhenanus は se sciret vi tormentorum。ABCD は perseveraret（単数）、底本の perseverarent（複数）は残り（刊本）。
- 採る校訂者：Oehler は Junius の推定と、刊本の perseverarent を組み合わせて刷る。注はない。
- 読者への影響：小 — 底本では「（僭主が）責め苦は彼女に何もできないと知るように、たとえ責め苦がさらに続いても」。写本（se sciret in tormenta, etsi ultra perseveraret）では「（僭主が）責め苦にかけても自分は何もできないと知るように、たとえさらに続けても」と読める。どちらでも、責め苦を続けても無駄だと思い知らせた、という意味は同じ。sciret の主語は、底本でも写本でも僭主と取るのが自然（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。底本どおり訳し、in se … tormenta が Junius の推定であることを `// ` メモに書ける。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 33・34）。OCR l. 2355、2466、2490–2491。

### 4.8 apud Lacedaemonas sollemnitas maxima est διαμαστίγωσις, id est flagellatio（ラケダイモンの鞭打ち。ギリシア語の語）
- 底本（Oehler）：Nam quod hodie apud Lacedaemonas sollemnitas maxima est διαμαστίγωσις, id est flagellatio, non latet. In quo sacro ante aram nobiles quique adulescentes flagellis affliguntur, astantibus parentibus et propinquis et, uti perseverent, adhortantibus.
- ほかの読み（4 章の校注 35〜37、p. 13）：Nam quae は cd（ヴァティカンの写本から）、Namque は C、Nam quod は残り。B は dyamasticosis idem、A は diamastigosis id est（写本はギリシア語の語をラテン文字で書く）。校注 37 は「adulescentes C.」と、底本と同じ形を挙げる（底本の綴りが C に従ったことを示すとみられる）。
- 採る校訂者：Oehler はギリシア文字で刷る。注 o（p. 13）は『護教論』50 章と『諸国民へ』1 巻 18 章を見よとし、リュクルゴスの定めがキリスト後 5 世紀まで続いたことはディオン・クリュソストモス第 25 弁論から確かだと言い、Meursius『ラコニカ雑纂』、テオドレトスを挙げる。『護教論』50.9 にも、身内の励ます前でのラケダイモン人の鞭打ちが出る（『護教論』の論点一覧 50.9 の項）。『諸国民へ』1 巻 18 章の注 p は、そこの「ラコニアの誉れ」が何かは『護教論』50 章でわかるとする（OCR l. 43504–43505）。
- 読者への影響：小 — hodie（今日も）は、テルトゥリアヌスの時代にも続いていた祭りだということ。
- 訳での扱い：訳注は付けない。διαμαστίγωσις, id est flagellatio（ギリシア語の名と、そのラテン語の言い換え）をどう訳すか（音写して「すなわち鞭打ち」と続けるか、一語にまとめるか）は「メインで決めること」。名前は「ラケダイモン人」（『護教論』の名前の表）。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 35〜37、注 o）。OCR l. 2466–2470、2492–2493、2507–2513、43504–43505。

### 4.9 Ornamentum enim et gloria deputabitur maiore quidem titulo, si anima potius cesserit plagis, quam corpus … contemnat（anima の意味と小さな異読）
- 底本（Oehler）：Ornamentum enim et gloria deputabitur maiore quidem titulo, si anima potius cesserit plagis, quam corpus. Igitur si tantum terrenae gloriae licet de corporis et animi vigore, ut gladium, ignem, crucem, bestias, tormenta contemnat sub praemio laudis humanae, possum dicere, modicae sunt istae passiones ad consecutionem gloriae caelestis et divinae mercedis.
- ほかの読み（4 章の校注 38、p. 13）：ABC は contempnat（綴り）、残り（刊本）は contemnant（複数）。
- 採る校訂者：Oehler は写本の単数 contemnat を採る（綴りは直す）。注はない。
- 読者への影響：中 — si anima potius cesserit plagis, quam corpus は、体が鞭に屈する（ひるむ）より先に、anima（命）が鞭の下で去る（死ぬ）ほうが、いっそうの誉れになる、の意味と読める（Oehler の注はなく、この読み方はこの一覧の観察）。本の訳語表の anima＝「魂」をそのまま当てると、「魂が鞭に屈した」と、逆の意味に読まれるおそれがある。contemnat（単数）の主語は、与格の terrenae gloriae（地上の栄光に、それほどのことが許されるなら）とも、書かれていない一般の人（「人が」）とも取れる（どちらもこの一覧の観察）。
- 聖書の形：possum dicere, modicae sunt istae passiones ad consecutionem gloriae caelestis は、ローマ八・一八（口語訳『今のこの時の苦しみは、やがてわたしたちに現されようとする栄光に比べると、言うに足りない』）を思わせるが、Oehler は聖書の箇所を挙げず、句も同じではない（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。anima の訳（「命」とするか）と cesserit plagis の取り方は「メインで決めること」。ローマ八・一八 は引用ではないので『』も出典も付けない。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 38）。OCR l. 2470–2476、2493–2494。`node tools/bible.js Rom.8.18`。

### 4.10 Tanti vitreum, quanti verum margaritum?（ことわざの問い。注 p・q）
- 底本（Oehler）：Tanti vitreum, quanti verum margaritum? Quis ergo non libentissime tantum pro vero habeat erogare, quantum alii pro falso?
- ほかの読み（4 章の校注 39〜41、p. 13）：Tanti は ABCDabc、Si tanti は d と Jos. Scaliger、An tanti は A の後の手。vitrum は A・d・Latinius・Scaliger（vitreum の代わり）。quanti verum は ABCDabc、quanti（verum がない）は d・Fr. Junius・Scaliger。
- 採る校訂者：Oehler は写本の Tanti … quanti verum を採る。注 p（p. 13）は、ヒエロニムスの書簡に同じ言い回しがあるとして、ラエタ宛て（「ガラスがそれほどの値なら、真珠はなぜもっと高くないのか」）、サルウィナ宛て、デメトリアス宛て（「言われるとおり、ガラスは真珠と同じ値」）を引き、ニュッサのグレゴリオスも宝石と小石を対にすると言う。注 q は、habeat erogare（habere ＋不定詞）について『迫害のときの逃亡について』12 章への注を見よとし、erogare は「費やす」（impendere）の意味で、テルトゥリアヌスにごく多いとする。
- 読者への影響：中 — 写本の形は「ガラスに、本物の真珠と同じだけの値を（払うのか）」という、ことわざを使った問い。続く「だから、ほかの人々が偽物に払うのと同じだけを、本物のために喜んで費やさない者がいるだろうか」が受ける（偽物＝地上の栄光、本物＝天の栄光）。d と Scaliger の Si tanti では「ガラスがそれほどの値なら、本物の真珠は」と、条件の形になる。
- 訳での扱い：訳注は付けない。問いの形（「か」で終える）を残し、次の文の pro vero・pro falso と「本物」「偽物」がつながるように訳す。margaritum に聖書の箇所（マタイ一三・四五〜四六 の真珠）は Oehler の注になく、ことわざとして訳す。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 39〜41、注 p・q）。OCR l. 2476–2478、2494–2496、2516–2535。

### 5.1 Eadem omnia saevitiae et cruciatus certamina iam apud homines affectatio quoque et morbus quidam animi conculcavit（conculcavit の意味。注 a）
- 底本（Oehler）：Omitto nunc gloriae causam. Eadem omnia saevitiae et cruciatus certamina iam apud homines affectatio quoque et morbus quidam animi conculcavit.（OCR は homines の後に句点を読むが、画像では句点がない）
- ほかの読み（5 章の校注 1、p. 13）：AB は quidem（quidam の代わり）。
- 採る校訂者：注 a（p. 13）は、テルトゥリアヌスは同じ意味でふつう inculcare を使うとし、『蠍の毒への解毒剤』6 章への注を見よとする。その注は、inculcare はテルトゥリアヌスに多く、ものを不当に、あるいは軽蔑と憤りをもって扱うことを言うとし、『諸国民へ』1 巻 10 章、『悔い改めについて』7 章、『忍耐について』15 章、『異端者への抗弁』8 章、ミヌキウス・フェリクス『オクタウィウス』37 章（「刑吏の恐ろしさをあざ笑って踏みつける」）などを挙げる（OCR l. 62105–62138。画像では確かめていない）。
- 読者への影響：中 — conculcavit は「（残酷さや責め苦の戦いを）踏みつけにした、ものともしなかった」の意味。主語は affectatio と morbus quidam animi（見せびらかしの好み、心のある病）で、栄光のためでなくても、そうした思いが人に責め苦を軽んじさせた、という論。
- 訳での扱い：訳注は付けない。affectatio は 5.1（2 回）・5.2・6.1 に出て、5.3 の affectaverunt（pro vanitate「むなしさのために」）と受け合う。その訳（「見栄」「物好き」など）は「メインで決めること」。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 1、注 a）。OCR l. 2481–2483、2498、2537–2540、62105–62138。

### 5.1–5.2 Quot otiosos affectatio armorum ad gladium locat? … se auctoraverunt, ut certum spatium in tunica ardente conficerent（剣闘士の雇い入れと燃える衣）
- 底本（Oehler）：Quot otiosos affectatio armorum ad gladium locat? Certe ad feras ipsas affectatione descendunt, et de morsibus et de cicatricibus formosiores sibi videntur. Iam et ad ignes quidam se auctoraverunt, ut certum spatium in tunica ardente conficerent.
- ほかの読み（5 章の校注 2〜4、p. 13）：AB は quod otiosos、C は quod otiosa。A の最初の手・BCD は affectione（affectatione の代わり）。AB は in trunca ardente。
- 採る校訂者：注 b（p. 13）は ad gladium locat について Desid. Heraldus『余論』24 と Lipsius『サトゥルナリア』2 巻 3 章を挙げる（中身は書かない）。注 c は in tunica ardente に『諸国民へ』1 巻 18 章を挙げる。そこでは「最近、ある者が燃える衣を着て、決まった所まで行くと身を売った（auctoravit）」と言い、その注 n は 5 章のこの文を引いて、燃える衣（tunica incendialis）にセネカ書簡 14、ユウェナリス 8 歌 235 行、マルティアリス 10 巻 15 篇を挙げる（OCR l. 43302、43382、43476–43483）。
- 読者への影響：中 — locat（雇いに出す）と se auctoraverunt（契約して身を売った）は、自由人が契約して剣闘士や見世物の出演者になることを言う。ad feras … descendunt は、闘技場で獣と戦うために下りていくこと。言葉どおり「場所に置く」「自分を権威づけた」と取ると意味が通らない。『諸国民へ』1 巻 18 章も、同じ論で「あなたがたは剣闘士の親方（lanistae）に、剣のために身を売る（auctoratis）」「平和のさなかに、毎日、自分から進んで獣のもとへ行く」と言う（OCR l. 43297–43300。その注 l の Oehler のドイツ語訳は auctoratis を「身を売る」〔verkauft ihr euch〕と訳す。l. 43363–43369）。
- 訳での扱い：訳注は付けない。locat、se auctoraverunt、descendunt の訳は「メインで決めること」（AGENTS.md の訳語表の gladiatores「剣闘士」とつなげる）。certum spatium … conficerent は「決まった距離を走り（歩き）通す」。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 2〜4、注 b・c）。OCR l. 2483–2489、2498–2499、2503、2541–2548、43302、43382、43476–43483。

### 5.3 Alii inter venatorum taureas scapulis patientissimis inambulaverunt（獣闘士の鞭。注 d）
- 底本（Oehler）：Alii inter venatorum taureas scapulis patientissimis inambulaverunt.
- ほかの読み（5 章の校注 5、p. 13）：C は venatorum caveas（「獣闘士たちの檻」）。
- 採る校訂者：注 d（p. 13〜14）は『諸国民へ』1 巻 18 章を見よとし、taureae は牛の皮で作った鞭だと言う。用例に、サルウィアヌス『神の統治について』8 巻、殉教者ポンティウスの伝（「二人の獣闘士が、習わしどおり鞭（tauriis）と革紐を持って出てきた」）、ユウェナリス 6 歌 491 行、アルテミドロス『夢判断』1 巻 72 章、アタナシオス、ソゾメノス、語彙集を挙げる。『諸国民へ』1 巻 18 章は「最近、ある者が獣闘士たちの列のあいだを走り抜けて、女が鞭を嘲ったこと（を）またやってのけた」と言い、その注 o は venatorii を闘技場の獣闘士（venatores circi）とし、『ペルペトゥアとフェリキタスの殉教録』18 章（群衆が、獣闘士たちの列の前で鞭打つよう求めた）を挙げる（OCR l. 43391–43395、43486–43503）。
- 読者への影響：中 — venatores は狩人ではなく、闘技場で獣と戦う獣闘士。並んだ獣闘士の鞭のあいだを、背を打たれながら歩き通すこと。C の caveas では鞭の話にならない。
- 訳での扱い：訳注は付けない。venatores は『ペルペトゥアとフェリキタスの殉教録』18:9 の訳（「獣闘士たち」）に揃えるかを「メインで決めること」。taureae は「（牛の皮の）鞭」。
- 確かめた資料：`page/n42_w1600.jpg` の上半分（本文）、下半分（校注 5、注 d の初め）、`page/n43_w1600.jpg` の上半分（本文の続き）、下半分（注 d の続き）。OCR l. 2489、2504、2550–2553、2567、2598–2628、43391–43395、43486–43503。`books/perpetua-and-felicitas/src/chapter-18-21/both.md` l. 26。

### 5.3 Haec, benedicti, non sine causa dominus in saeculum admisit … pro veritate in salutem quae alii affectaverunt pro vanitate in perditionem（小さな異読と対句）
- 底本（Oehler）：Haec, benedicti, non sine causa dominus in saeculum admisit, sed ad nos et nunc exhortandos et in illo die confundendos, si reformidaverimus pati pro veritate in salutem quae alii affectaverunt pro vanitate in perditionem.
- ほかの読み（5 章の校注 6〜9、p. 14）：AB は et haec。ABC は ad vos（ad nos の代わり）。ABC は ad confundendos（ad の繰り返し）。AB は reformaveribus、A の後の手（Aφ による）は reformidaveritis、C は reformaverimus。benedicti（男性複数）には異読がない。
- 採る校訂者：Oehler は刊本の ad nos と reformidaverimus（一人称複数）を採る。写本 ABC の ad vos（あなたがたを）は、後の reformidaverimus と人称が合わない。注はない。
- 読者への影響：小 — pro veritate in salutem（真理のために、救いへ）と pro vanitate in perditionem（むなしさのために、滅びへ）が対になる。in illo die は、裁きの日を指す言い方（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。veritas と vanitas、salus と perditio の対を残す。confundendos は「恥を見させる」。benedicti は 1.1 などと同じ「祝福された人々よ」。
- 確かめた資料：`page/n43_w1600.jpg` の上半分（本文、校注 6〜9）。OCR l. 2567–2570、2587–2590。

### 6.1 Sed haec exempla constantiae omittamus de affectatione venientis … si qua constanter adeunda sint（venientis の係り、si は「〜かどうか」）
- 底本（Oehler）：Sed haec exempla constantiae omittamus de affectatione venientis. Convertamur ad ipsam condicionis humanae contemplationem, ut et illa nos instruant, si qua constanter adeunda sint quae et invitis evenire consueverunt.
- ほかの読み（6 章の校注 1、p. 14）：ABC は Si haec（Sed haec の代わり）。
- 採る校訂者：Oehler は刊本の Sed を採る。注はない。
- 読者への影響：小 — venientis は単数属格で、exempla（複数）でなく constantiae に掛かる（「見栄から来る堅忍の例」）。si qua … adeunda sint は、前のページ 2.7 の注 g が言う、si を「〜かどうか」（an）の意味で使う形（「望まない人にも起こるのが常のことを、堅く耐えて迎えるべきかどうか、それらが教えてくれるように」）とも、ふつうの条件（「堅く耐えて迎えるべきことがあるなら、望まない人にも起こるのが常のことが、それを教えてくれるように」）とも取れる。2.7 の comparemus と違い、instruant は問いを導く動詞ではない。これらはこの一覧の観察で、Oehler の注にはない。
- 訳での扱い：訳注は付けない。constantia の訳（「堅忍」「不動」など）は、5.3 までの例と 6.1〜6.3 の論をつなぐ語なので、「メインで決めること」。
- 確かめた資料：`page/n43_w1600.jpg` の上半分（本文、校注 1）。OCR l. 2572–2575、2591。

### 6.2 quotiens ferae … elapsae caveis … omni contumelia expuncti（小さな異読と expuncti。注 a）
- 底本（Oehler）：Quotiens enim incendia vivos cremarunt? quotiens ferae et in silvis suis et in mediis civitatibus elapsae caveis homines devoraverunt? quot a latronibus ferro, ab hostibus etiam cruce extincti sunt, torti prius, immo et omni contumelia expuncti?
- ほかの読み（6 章の校注 2〜5、p. 14）：C は quoties。B は et in silvis suis を二度書く。B の最初の手は elepse。A の最初の手と B は caneis。
- 採る校訂者：注 a（p. 14、Franc. Junius）は、expuncti はテルトゥリアヌスの語で、侮辱のどんな種類も残らないほど、あらゆる侮辱をこうむり尽くした、の意味だとし、『蠍の毒への解毒剤』10 章への注を見よとする。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。omni contumelia expuncti は「あらゆる辱めを受け尽くした」。疑問文は「か」で終える。
- 確かめた資料：`page/n43_w1600.jpg` の上半分（本文、校注 2〜5）、下半分（注 a）。OCR l. 2575–2579、2591–2592、2631–2636。

### 6.3 Nemo non etiam hominis causa pati potest … exitus referunt hominis causa（hominis は皇帝。注 b）
- 底本（Oehler）：Nemo non etiam hominis causa pati potest quod in causa dei pati dubitat. Ad hoc quidem vel praesentia nobis tempora documenta sint, quantae qualesque personae inopinatos natalibus et dignitatibus et corporibus et aetatibus suis exitus referunt hominis causa, aut ab ipso, si contra eum fecerint, aut ab adversariis eius, si pro eo steterint.
- ほかの読み（6 章の校注 6・7、p. 14）：BC は cum fecerint（eum の代わり）。校注 7 は B の末尾の題（Quinti septimi florentis Tertulliani ad martirias liber finit）。
- 採る校訂者：注 b（p. 14）は、二つ目の hominis causa を「すなわち皇帝の（ため）」とする。ANF の編者の注（角括弧）は、この「今の時代」に、アルビヌスがルグドゥヌム（リヨン）で敗れて自害した後、元老院の身分の者を含む多くの人が殺されたことを当てる（anf03.txt l. 69110–69111）。Oehler はどの出来事かを書かない。
- 読者への影響：中 — hominis causa を「人のために」とだけ訳すと、神のため（in causa dei）との対比は残るが、高い身分の人々が皇帝の側についたか敵についたかで殺された、という話が見えにくい。「皇帝のために」と訳すと、hominis と dei の対比（人のためでさえ耐えるのに、神のためにはためらう）が弱まる。読みの違いではなく、解釈の違い。
- 訳での扱い：訳注は付けない（訳注は別の読みに限る）。hominis causa を「ある人間（皇帝）のため」のように補うか、「人のため」として `// ` メモに注 b を書くかは「メインで決めること」。Nemo non … potest quod … dubitat は二重否定（「神のためにためらうことでも、人のためなら耐えられない者はいない」）。inopinatos natalibus et dignitatibus et corporibus et aetatibus suis exitus は「生まれや地位や体や年齢からは思いもよらない最期」。
- 確かめた資料：`page/n43_w1600.jpg` の上半分（本文、校注 6・7）、下半分（注 b）。OCR l. 2579–2584、2592–2595、2639–2640。ANF `cache/ccel.org/anf03.txt` l. 69101–69111。

---

## 未確認

- 4.4 のヘラクレイトスの話：注 c が送るディオゲネス・ラエルティオス 9 巻 1 章 3 節は読んでいない。テルトゥリアヌスの「自分を焼いた」（exussit）がその伝えと合うかは確かめていない。
- 4.4 の philosophi Heraclitus と desilivit：どの本の読みを底本が採ったのかは校注に書かれておらず、確かめていない（Oehler の序文や、校注に挙がらない刊本は見ていない）。
- 4.1 の校注 3（spiritui A. (m. pr.) B.）と 4.8 の校注 37（adulescentes C.）：底本と同じ形を挙げる校注で、ほかの写本の形は示されない。前のページ 3.5 の校注 20（iocundiore B.）と同じ書き方。
- 5.1 の注 b（ad gladium locat）が挙げる Heraldus と Lipsius の箇所は読んでいない。
- 6.3 の「今の時代」の出来事：ANF の編者の注のほかに、Oehler の注や序文、ほかの資料では確かめていない。この書の書かれた年代についても、この一覧の資料では確かめていない。
- 4.1 の注 b と 4.10 の注 q が送る『迫害のときの逃亡について』8 章・12 章への注、6.2 の注 a が送る『蠍の毒への解毒剤』10 章への注は読んでいない。
