# 06-de-spectaculis-14-19 の論点（14〜19）

略号と資料の所在は [README.md](README.md)。『見世物について』の写本は A（Agobardinus）だけで、B〜E は刊本（B＝Gangneius 1545、C＝Gelenius、D＝Pamelius 1579、E＝Rigaltius 1634）。「reliqui」「BCD」は写本の読みではない。CSEL の略号は Oehler と文字の割り当てが違う（CSEL の C は Clemens の写本）ので、CSEL の読みは名前で書く。

Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/page/n72_w1600.jpg`（p. 43）〜`n80_w1600.jpg`（p. 51）。N＝印刷ページ＋29。各ページを `node tools/image.js crop` で上半分（`pct:0,0,100,50`、本文と校注）と下半分（`pct:0,48,100,52`、注解）に切って読み、17.2 の二つの語は n76 の `pct:0,42,100,5` と n77 の `pct:10,6,90,4` を 2 倍に拡大して確かめた（切り出しは scratchpad に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 6270–7407（本文・校注・注解が混ざり、行の順も乱れるので、行番号はおよその位置）。CSEL 20 は `cache/archive.org/quintiseptimiflo20tert/quintiseptimiflo20tert_djvu.txt` の l. 1380–1652（14 章 本文 l. 1380–1391・校注 l. 1405–1411、15 章 本文 l. 1393–1449・校注 l. 1413–1421、1460–1468、16 章 本文 l. 1451–1511・校注 l. 1468–1469、1523–1527、17 章 本文 l. 1513–1568・校注 l. 1527–1535、1575–1584、18 章 本文 l. 1570–1611・校注 l. 1584、1632–1635、19 章 本文 l. 1613–1652・校注 l. 1635–1641、1682）。Migne『ラテン教父全集』1 巻（1844）の本文と校注・注解は `cache/archive.org/bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1844_1/…_djvu.txt` の l. 59049–59480（col. 647–652）。ANF の英訳は `cache/ccel.org/anf03.txt` の l. 7076–7265（14 章 l. 7076、15 章 l. 7095、16 章 l. 7133、17 章 l. 7168、18 章 l. 7213、19 章 l. 7233、20 章 l. 7266）。英訳は 17.2 と 19.4 がどの読みで訳されているかだけを確かめ、文言は使っていない。

校注の番号と注解の記号は章ごとに振り直される。14 章は校注 1〜3（p. 43）・4〜8（p. 44）、注 a（p. 43）・b（p. 44）。15 章は校注 1〜6（p. 44）・7〜27（p. 45）・28〜29（p. 46）、注 a・b（p. 44）・c〜e（p. 45）・f（p. 46）。16 章は校注 1〜8（p. 46）・9〜16（p. 47）、注 a〜d（p. 46）・e〜h（p. 47）。17 章は校注 1〜6（p. 47）・7〜23（p. 48）・24〜33（p. 49）、注 a（p. 47）・b〜i（p. 48）・k〜m（p. 49）。18 章は校注 1（p. 49）・2〜11（p. 50）、注 a〜e（p. 50）。19 章は校注 1〜13（p. 50）・14〜18（p. 51）、注 a（p. 50〜51）・b〜d（p. 51）。Oehler の欄外の聖書の箇所は、15.2 の「Eph. IV, 30.」（p. 45）と 15.7 の「Ps. XLIX, 18.」（p. 46）の二つ。CSEL の欄外は、エペソ四・三〇（l. 1403）、詩篇四九・一八（l. 1458）、16.5 に「cf. Matth. 20, 14.」（l. 1521）、18.1 に「1 Cor. 9, 24.」（l. 1573）。

章の切れ目は版で違う。15 章の始まりを、Oehler は La Cerda に従って Ceterum retulimus（15.1）に置き、ほかの刊本は Viderit ergo（15.2）に置く（15 章の注 b の終わり、p. 44）。17.6 の Si et doctrinam から、La Cerda のほかのすべての刊本は新しい章（18 章）を始めるが、Oehler は 17 章に残す（17 章の注 k、p. 49）。Migne は 15 章を Viderit から、18 章を Sin et doctrinam から始める（l. 59072、59097、59284–59286）。CSEL は Oehler と同じ切れ目（l. 1393、1570）。章の番号は本の `AGENTS.md` のとおり Oehler に従う。

---

### 14.1 Nunc interposito nomine idololatriae, quod solum subiectum sufficere deberet（interposito の意味と、写本の nosse ne）
- 底本（Oehler）：Nunc interposito nomine idololatriae, quod solum subiectum sufficere deberet ad abdicationem spectaculorum, alia iam ratione tractemus ex abundanti, …
- ほかの読み（14 章の校注 1〜3、p. 43）：nomine idololatriae は E と Fulv. Ursinus。AB は nosse ne idololatriae、C は nosse ne idololatria、D は nosse de idololatria。B は subiici cum sufficere。debet は AE（deberet は BCD）。CSEL は nomine（Ursinus）を採り、debet（A）と読む。
- 採る校訂者：注 a（p. 43）は、Rigaltius が interposito を「偶像礼拝の名をしばらくわきに置いて」と解いたのを、「interponere の解釈で大きく誤った」と退け、意味は「偶像礼拝の名については、ひとまず十分に確かになったので」だと言い、La Cerda も先にそう解いていた、と言う。注 b（p. 44）は ex abundanti を ἐκ περισσοῦ（余分に）とし、『スカプラへ』2 章への注を見よとする。15 章の注 b（p. 44）も、14 章は偶像礼拝という主な論に「余分に」新しい論（見世物は欲として禁じられている）を足したものだ、と言う。
- 読者への影響：中 — 写本の nosse ne は意味をなさず、nomine は Ursinus の直し。interposito を「わきに置いて」と取るか、注 a の「（論じ）終えて」と取るかで、13 章とのつながりが変わる。注 a の取り方なら「偶像礼拝の名だけで、見世物を断つ理由として十分なはずだが、それを論じ終えたので、余分に別の理由から論じよう」。deberet（接続法）と debet（直説法）は「十分なはず」と「十分だ」の違い。
- 訳での扱い：訳注は付けない。注 a の取り方で訳す。abdicatio は訳語表の「断つこと」、abstinentia（14.1 の abstinentia ista）は「控えること」。
- 確かめた資料：`page/n72_w1600.jpg` の上半分（本文、校注 1〜3）、下半分（注 a）、`page/n73_w1600.jpg` の上半分（本文、注 b）、下半分（15 章の注 b）。OCR l. 6270–6272、6287–6291、6335–6343、6359、6385–6386、6410–6419。CSEL l. 1380–1384、1408–1409。

### 14.1 cum concupiscentiae saeculi damnantur（第一ヨハネ二・一六〜一七 の暗示）
- 底本（Oehler）：quasi parum etiam de spectaculis pronuntietur, cum concupiscentiae saeculi damnantur.
- ほかの読み（14 章の校注 4、p. 44）：de spectaculis は ABDE と Clemens の写本、de litteris は B の余白と C。CSEL も spectaculis（ABC）。
- 聖書の形：Oehler は箇所を挙げない。concupiscentiae saeculi（世の欲）は、第一ヨハネ二・一六〜一七（口語訳「肉の欲、目の欲、持ち物の誇」「世と世の欲とは過ぎ去る」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：小 — 「世の欲が断罪されているのに、それで見世物についての宣告が足りないかのように」。
- 訳での扱い：訳注は付けない。引用ではないので『』も出典も付けない。concupiscentia は「欲」の類いで 14.1〜14.2 を揃える。
- 確かめた資料：`page/n73_w1600.jpg` の上半分（本文、校注 4）。OCR l. 6363–6366、6377、6432。CSEL l. 1385–1386、1410。`node tools/bible.js 1John.2.16-17`。

### 14.2 aeque generaliter intellectae voluptates specialiter et in spectacula disseruntur（disseruntur の意味）
- 底本（Oehler）：Opinor generaliter nominatae concupiscentiae continent in se et voluptates; aeque generaliter intellectae voluptates specialiter et in spectacula disseruntur.
- ほかの読み（14 章の校注 5〜8、p. 44）：Clemens の写本は nomina concupiscentiae。A は in se ut voluptates。A は aeque generaliter intellectae voluptates を欠く。La Cerda は differuntur。CSEL は disseruntur を残し、differuntur（La Cerda）と discernuntur（校訂者の推定）を挙げる。
- 採る校訂者：Oehler はこの語に注を付けない。
- 読者への影響：小 — 「一般に名指された欲は、快楽をも含む。同じく一般に理解された快楽は、種として、見世物にも分けて当てはめられる」。disseruntur を「分けられる、振り分けられる」と取るのが文脈に合うが、Oehler の注がないので確かめられない（「未確認」）。要点（類としての欲 → 快楽 → その種としての見世物）は、どの読みでも同じ。
- 訳での扱い：訳注は付けない。generaliter／specialiter（類として／種として）の対比が見えるように訳す。
- 確かめた資料：`page/n73_w1600.jpg` の上半分（本文、校注 5〜8）。OCR l. 6368–6370、6378–6379、6425–6433。CSEL l. 1389–1391、1410–1411。

### 15.1 per quae simul inquinamentum combiberunt, tunc et in alteros respuunt（写本の tum altero と、8.11 への送り）
- 底本（Oehler）：Ceterum retulimus supra de locorum condicione, quod non per semetipsa nos inquinent, sed per ea quae illic geruntur, per quae simul inquinamentum combiberunt, tunc et in alteros respuunt.
- ほかの読み（15 章の校注 1〜3、p. 44）：A は per semet sanos inquinent。combiberunt は A、combiberint は残り。A は tunc et tum altero respuunt。CSEL は combiberunt を採り、tunc etiam in alteros respuunt と直す（etiam は校訂者の推定。A は & tantum、B は et。A は alter ore spuunt と読む）。
- 採る校訂者：注 a（p. 44）は、Rigaltius が A の altero を「別の所へ」の副詞と取ったのを挙げ、Oehler は A の形は明らかに崩れていて、tum の中に前置詞 in が隠れていると言い、alteri（ほかの者たち）は見物人だとする。respuere の用例に『マルキオン反駁』2 巻 9 章とセネカ『書簡』54 を挙げる。15 章の注 b に引かれた La Cerda は、retulimus supra は 8 章の「場所はそれ自体では汚さない。そこで行われることが汚す」を指すと言い、simul は simulac（〜するやいなや）、tunc et は「そのときには、さらに」で、場所が偶像礼拝の汚れを吸い込むと、それを見物人に吐きかける、と言い換える。
- 読者への影響：小 — 「場所は、それ自体でわたしたちを汚すのではない。そこで行われることによって汚す。そうしたことによって汚れを吸い込むやいなや、場所はそれをほかの者たちにも吐きかける」。8.11 の Loca nos non contaminant per se, sed quae in locis fiunt … De contaminatis contaminamur を受ける。
- 訳での扱い：訳注は付けない。simul は La Cerda の取り方（〜するやいなや）、alteros は見物人。combibere（吸い込む）と respuere（吐き出す）の対の比喩を残す。retulimus supra は 8.11 の訳の言い方に寄せられる。
- 確かめた資料：`page/n73_w1600.jpg` の上半分（本文、校注 1〜3、注 a の初め）、下半分（注 a・注 b の La Cerda の引用）、`page/n74_w1600.jpg` の下半分（La Cerda の引用の続き）。OCR l. 6371–6374、6388–6408、6427–6440、6474–6479、6528–6533。CSEL l. 1393–1396、1413–1416。底本テキスト 8.11。

### 15.2 Viderit ergo, ut diximus, principalis titulus idololatriae; reliquas ipsarum rerum qualitates contrarias omnes feramus dei（Oehler の推定）
- 底本（Oehler）：Viderit ergo, ut diximus, principalis titulus idololatriae; reliquas ipsarum rerum qualitates contrarias omnes feramus dei.
- ほかの読み（15 章の校注 4〜8、p. 44〜45）：Fr. Junius は Hic erit（Viderit の代わり）。A は ergo を欠く。Aφ は idolatria。BCD は rerum ipsarum。contrarias omnes feramus dei は ego（Oehler 自身の推定）。AE は contra dei omnes feramus、B は contrarios omnes, feramus dei、CD は contrariis omnes feramus、Latinius は contrariis conferamus（Junius が支持）。CSEL は contra ut dei omnes feramus（Klussmann の推定）と読み、Oehler の形も挙げる。Migne は contra Dei omnes feramus（Rigaltius、l. 59101）。
- 採る校訂者：注 b（p. 44）は、Viderit を「あの主な名目である偶像礼拝のことは、それでよい（それがどう主であるかは、それに任せる）。わたしはほかの論に進む」と言い換え、「残りの、見世物そのものの性質を持ち出し、それがみな神の性質に反することを示し、偶像礼拝の名目から禁じられていると認めない人々に、ほかの名目から同じことを教えよう」と言う。ut diximus は 14 章の初め（quod solum subiectum sufficere deberet）を指す、と言う。注 b は La Cerda の言い換え（「欲が禁じられているので見世物も禁じられる、という論を終え、この章では、見物人の心に生む悪い情動のために見世物が断罪されることを示す」）も引く。注 c（p. 45）は Rigaltius の注を引く。A の contra dei omnes feramus を、「見世物の事柄を、神の事柄に対して置こう」と解き、res dei は神の、すなわちキリスト者の教えのこと、contra ferre は「対置する、比べる」の意味だ、と言う。Viderit の言い方について、注 b は『兵士の冠について』13 章への注を見よとする。
- 読者への影響：中 — 底本は推定で、「残りの、事柄そのものの性質を、みな神に反するものとして持ち出そう」。A の形では「（見世物の事柄を）神の事柄に、みな対置しよう」。どちらでも、見世物の性質を神の性質と突き合わせる、という要点は同じ。
- 訳での扱い：訳注は付けない。底本の推定で訳し、推定であることと A の形を `// ` メモに書ける。Viderit は注 b のとおり「それはそれでよい」「それはそのままにしておこう」の類いで、主な論から離れる言い方として訳す。principalis titulus idololatriae の titulus は、6.4 の訳語表の「呼び名」「名」とは働きが違い（論の項目、罪状）、ここでは「主な名目」の類いになる（「メインで決めること」）。
- 確かめた資料：`page/n73_w1600.jpg` の上半分（本文、校注 4〜6）、下半分（注 b）、`page/n74_w1600.jpg` の上半分（本文、校注 7・8 の番号）、下半分（校注 7・8、注 b の続き、注 c）。OCR l. 6374、6410–6422、6437–6479、6489–6492、6515–6517、6536–6549。CSEL l. 1396–1399、1416–1420。Migne l. 59097–59101、59163。

### 15.2 Deus praecepit spiritum sanctum … non furore, non bile, non ira, non dolore inquietare（エペソ四・三〇〜三一 の言い換え）
- 底本（Oehler）：Deus praecepit spiritum sanctum, utpote pro naturae suae bono tenerum et delicatum, tranquillitate et lenitate et quiete et pace tractare, non furore, non bile, non ira, non dolore inquietare. 欄外に Eph. IV, 30.
- ほかの読み（15 章の校注 9、p. 45）：Aφ は natare suae。CSEL も欄外にエペソ四・三〇。Migne は et lenitate を欠く形で刷り、注 d（l. 59169）は、エペソ四章の「神の聖霊を悲しませてはならない」と、続く「すべての苦さ、怒り、憤り、わめき、そしり」を除けという句を引いて、後の句が前の句を説明しているとみる。
- 聖書の形：口語訳エペソ四・三〇 は『神の聖霊を悲しませてはいけない』、四・三一 は『すべての無慈悲、憤り、怒り、騒ぎ、そしり、また、いっさいの悪意を捨て去りなさい』。テルトゥリアヌスの文は引用ではなく、「聖霊を、穏やかさ、柔和、静けさ、平和をもって扱い、狂乱、胆汁（苦々しさ）、怒り、苦痛で騒がせてはならないと、神は命じた」という言い換え。furor、bilis、ira、dolor の四つは 15.4 で繰り返される。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。言い換えなので『』に入れず、出典（エペソ四・三〇）を付けるかは訳者が決める。『殉教者たちへ』1.4 は同じ句を口語訳に揃えたが、ここは原文が「神は命じた」と間接に言うので、地の文で訳す（本の `AGENTS.md` の 13.1〜13.2 の決まりと同じ扱い）。bilis は「苦々しさ」「いら立ち」の類いで、15.2 と 15.4 で揃える。
- 確かめた資料：`page/n74_w1600.jpg` の上半分（本文、欄外、校注 9）。OCR l. 6492–6497、6517。CSEL l. 1399–1403、1420。Migne l. 59101、59169。`node tools/bible.js Eph.4.30-31`。

### 15.3–15.4 Ubi enim voluptas, ibi et studium … ibi et aemulatio … quae cum his non competunt disciplinae（小さな異読と、studium・aemulatio の語）
- 底本（Oehler）：Huic quomodo cum spectaculis poterit convenire? Omne enim spectaculum sine concussione spiritus non est. Ubi enim voluptas, ibi et studium, per quod scilicet voluptas sapit; ubi studium, ibi et aemulatio, per quam studium sapit. Porro et ubi aemulatio, ibi et furor et bilis et ira et dolor et cetera ex his, quae cum his non competunt disciplinae.
- ほかの読み（15 章の校注 10〜15、p. 45）：quomodo cum は BCDE、A と B の余白は modicum。Aφ は enim を欠く。A は ibi studium、ibi aemulatio（et がない）。Aβ は per quam studium sapit. Porro et ubi aemulatio を欠く。A は quae cum his を欠く。CSEL は huic quomodo cum（B）を採り、Klussmann の huiusmodi cum を挙げる。
- 採る校訂者：この文に注はない。
- 読者への影響：小 — 「快楽のあるところには熱中がある。快楽は熱中によって味が出るからだ。熱中のあるところには張り合いがある。熱中は張り合いによって味が出る」。studium は戦車競走の組への肩入れ、aemulatio は相手の組への張り合いで、16 章の円形競走場の場面とつながる（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。訳語表は affectatio を「熱中」としているので、studium の訳と重ならないようにする（「メインで決めること」）。aemulatio は『護教論』の訳語表では「敵意」「ねたみ」だが、ここは観客どうしの「張り合い」「対抗心」の類い。cum his non competunt disciplinae の disciplina は訳語表どおり「教え」。
- 確かめた資料：`page/n74_w1600.jpg` の上半分（本文、校注 10〜15）、下半分（校注）。OCR l. 6497–6502、6517–6520。CSEL l. 1402、1420–1421、1430–1435、1460–1461。

### 15.4–15.5 Nam etsi qui modeste et probe spectaculis fruitur … non tamen immobilis animi est sine tacita spiritus passione（写本 A の違う文）
- 底本（Oehler）：Nam etsi qui modeste et probe spectaculis fruitur pro dignitatis vel aetatis vel etiam naturae suae condicione, non tamen immobilis animi est sine tacita spiritus passione. Nemo ad voluptatem venit sine affectu, nemo affectum sine casibus suis patitur. Ipsi casus incitamenta sunt affectus. Ceterum si cessat affectus, nulla est voluptas, …
- ほかの読み（15 章の校注 16〜23、p. 45）：et si qui modeste et probe は BCDE。Aβ は et si quo modo …te probes、Aφ は et si quo modo honeste probes。A は frui pro。A は vel aetatis を欠く。immobilis animi est sine は BCDE、A は immobili animi et sine、Clemens の写本は immobili animo est sine。Aβ は affectu（以下も同じ綴り）。A は affectus（affectum の代わり）。Aβ は Ipse。Aφ は Ceterum si cessat affectus を欠く。CSEL は qui modeste et probe（B）、fruitur（B）を採り、immobilis animi est et sine と、Klussmann の推定で et を足す。
- 採る校訂者：注 d（p. 45）は sine casibus suis に、La Cerda が引くアウグスティヌス『告白』6 巻 8 章を挙げる。剣闘士の見世物に無理に連れて行かれたアリピウスが、しばらく目を閉じていたが、戦いの何かの出来事（casus）で群衆の大きな叫びに打たれ、好奇心に負けて目を開き、見たいと思ったその剣闘士が体に受けたよりも重い傷を魂に受け、叫びを起こしたその剣闘士の倒れたのよりもみじめに倒れた、という話。
- 読者への影響：小 — 「身分や年齢や生まれつきにふさわしく、慎み深く、まともに見世物を楽しむ人でも、心が動かず、霊の声なき揺らぎがないということはない」。casus は試合の中の「出来事」「起こること」で、注 d の例では倒れることにも掛かる。
- 訳での扱い：訳注は付けない。affectus は「情動」「心の動き」の類いで、15.5 の四回を同じ語にする。casus は「出来事」の類い。passio は「揺らぎ」「動き」の類い。
- 確かめた資料：`page/n74_w1600.jpg` の上半分（本文、校注 16〜23）、下半分（校注、注 d）。OCR l. 6502–6508、6520–6524、6532–6563。CSEL l. 1435–1441、1461–1465。

### 15.5–15.6 et est reus iam ille vanitatis … Puto autem, etiam vanitas extranea est nobis. Quid, quod et ipse se iudicat inter eos positus, quorum se similem nolens utique detestatorem confitetur?（iudicat は「断罪する」、se similem と se simul）
- 底本（Oehler）：Ceterum si cessat affectus, nulla est voluptas, et est reus iam ille vanitatis eo conveniens, ubi nihil consequitur. Puto autem, etiam vanitas extranea est nobis. Quid, quod et ipse se iudicat inter eos positus, quorum se similem nolens utique detestatorem confitetur?
- ほかの読み（15 章の校注 24〜26、p. 45）：A は Sed puto autem、Hildebrand は Sed puto item。A は quod ipse（et がない）。A と B の余白は se simul nolens。CSEL は sed puto [autem] と autem を角括弧に入れ（B は sed を欠く）、se simul nolens（A と B の余白。similem は B）を採る。
- 採る校訂者：注 e（p. 45）は iudicat を「断罪する」（condemnat）とし、『兵士の冠について』15 章への注を見よとする。
- 読者への影響：中 — 「情動がやめば快楽もなく、何も得られない所に集まる人は、もうむなしさの罪を負う。わたしの思うに、むなしさもまた、わたしたちには無縁のものだ」。続く文は、底本では「自分は彼らに似たくないと言って、彼らを嫌う者だと告白しているのに、その彼らの中に身を置く人は、自分で自分を断罪している」。CSEL の simul では「彼らの中に身を置きながら、同時に、望まずとも彼らを嫌う者だと告白している」。iudicat を「判断する」と取ると意味が通らない。
- 訳での扱い：訳注は付けない。底本の similem で訳す。iudicat は注 e のとおり「断罪する」。vanitas は「むなしさ」の類いで、16.2 の de vanitate と揃える。
- 確かめた資料：`page/n74_w1600.jpg` の上半分（本文、校注 24〜26）、下半分（校注、注 e）。OCR l. 6507–6511、6525–6526、6566–6567。CSEL l. 1440–1444、1465–1466。

### 15.6 nisi et talia factitantibus non conferamur（写本 A は non を欠く）
- 底本（Oehler）：Nobis satis non est, si ipsi nihil tale facimus, nisi et talia factitantibus non conferamur.
- ほかの読み（15 章の校注 27、p. 45）：factitantibus non conferamur は Clemens の写本、A は facitantibus conferamur（non がない）、残りは facientibus non conferamur。CSEL は factitantibus（Clemens の写本）と non（A は欠く）を採り、B の faciamus を挙げる。
- 読者への影響：小 — 「自分でそのようなことをしないだけでは足りない。そのようなことを繰り返し行う人々と並べられないのでなければ」。conferre は「並べる、一緒にされる」で、次の詩篇の「盗人と一緒に走った」につながる。
- 訳での扱い：訳注は付けない。
- 確かめた資料：`page/n74_w1600.jpg` の上半分（本文、校注 27）、下半分（校注）。OCR l. 6511–6512、6526–6527。CSEL l. 1444–1445、1467–1468。

### 15.7 Si furem, inquit, videbas, concurrebas cum eo（詩篇五〇・一八 は七十人訳の形）
- 底本（Oehler）：Si furem, inquit, videbas, concurrebas cum eo. 欄外に Ps. XLIX, 18.
- ほかの読み：Oehler の校注にはこの句の異読がない。CSEL も同じ句（l. 1445–1446）で、欄外は詩篇四九・一八。
- 聖書の形：七十人訳詩篇四九・一八（Swete）は εἰ ἐθεώρεις κλέπτην, συνέτρεχες αὐτῷ（盗人を見ると、あなたはこれと一緒に走った）で、テルトゥリアヌスの句はこの形のとおり。口語訳詩篇五〇・一八 は『あなたは盗びとを見ればこれとむつみ、姦淫を行う者と交わる』で、ヘブライ語本文の「むつみ（喜んで共にする）」は、ここで言う「一緒に走る（concurrere）」と違う。論は「見世物を行う者と一緒にされる（conferamur）」ことを言い、走る（concurrere）は観客が見世物へ駆けつけることにも重なる。
- 読者への影響：中 — 口語訳の『これとむつみ』をそのまま引くと、原文の「一緒に走った」の語が消え、論の「一緒にされる」とのつながりが弱まる。
- 訳での扱い：訳注は付けない（3.3 の詩篇一・一 の七十人訳の形も、注を付けずに句を作った）。本の `AGENTS.md` の 3 章の詩篇一・一 の決まりと同じく、口語訳を下敷きにして七十人訳の形に寄せた句（たとえば『あなたは盗びとを見れば、これと一緒に走った』）を『』に入れ、出典は「（詩篇五〇・一八）」とするかを決める（「メインで決めること」）。inquit の主語は書かれていないので、「と書かれています」「と言われています」の類いで受ける。章の番号は口語訳の五〇篇。
- 確かめた資料：`page/n75_w1600.jpg` の上半分（本文、欄外）。OCR l. 6573。CSEL l. 1445–1446、1458。Swete `cache/archive.org/oldtestamentingr02swetuoft/oldtestamentingr02swetuoft_djvu.txt` l. 24534。`node tools/bible.js Ps.50.18`。

### 15.7 sed tamen in saecularibus separamur, quia saeculum dei est, saecularia autem diaboli（saeculum と saecularia）
- 底本（Oehler）：Utinam ne in saeculo quidem simul cum illis moraremur: sed tamen in saecularibus separamur, quia saeculum dei est, saecularia autem diaboli.
- ほかの読み（15 章の校注 28・29、p. 46）：Aβ は saeparamur、secularia。CSEL も同じ本文。
- 採る校訂者：注 f（p. 46）は sed tamen を「しかし、それ（世に共にいないこと）はできないので、世の事柄においては、わたしたちは彼らから離れなければならない」と言い換える。
- 読者への影響：中 — 「世にさえ彼らと一緒にいなければよいのだが。それでも、世の事柄においては、わたしたちは離れている。世は神のものだが、世の事柄は悪魔のものだからだ」。saeculum（世）は神の造った世界そのもの、saecularia（世の事柄）はその中の異教の営み。訳語表の mundus／saeculum（世界／世）の区別と、ここの saeculum／saecularia の区別が重なる。separamur は直説法だが、注 f は「離れなければならない」と義務に取る。
- 訳での扱い：訳注は付けない。saeculum と saecularia の対を、日本語でも語の形がつながるように訳す（「世」と「世の事柄」の類い）。separamur は 17.1 の a theatro separamur と同じ語で揃える。
- 確かめた資料：`page/n75_w1600.jpg` の上半分（本文、校注 28・29、注 f）。OCR l. 6573–6577、6602、6652、6658–6661。CSEL l. 1446–1449、1468。

### 16.1–16.2 Aspice populum ad spectaculum … de sponsionibus concitatum. Tardus est illi praetor（円形競走場の場面と小さな異読）
- 底本（Oehler）：Cum ergo furor interdicitur nobis, ab omni spectaculo auferimur, etiam a circo, ubi proprie furor praesidet. Aspice populum ad spectaculum iam cum furore venientem, iam tumultuosum, iam caecum, iam de sponsionibus concitatum. Tardus est illi praetor: semper oculi in urna eius cum sortibus volutantur: dehinc ad signum anxii pendent: unius dementiae una vox est. Cognosce dementiam de vanitate.
- ほかの読み（16 章の校注 1〜7、p. 46）：A は omnis。BCD は ad id spectaculum。A は iam を欠く。A は iam tunc tumultuosum。A は desponsionibus。A は ad を欠く。Cognosce は (Aφ)BCD、Cognosco は (Aβ)E。CSEL は ad id spectaculum（B。A は id を欠く）、cognosce を採る（cognosco は A）。
- 採る校訂者：注 a（p. 46）は、観客が賭けをしたこと（一人がこの御者が勝つと言って質を置き、ほかの者がその相手が勝つと言い張った）を、Turnebus、Salmasius、オウィディウス『恋の技法』1 巻 168 行、ユウェナリス 11 歌 201 行、マルティアリス、ペトロニウス 70 章で示す。注 b（p. 46）は、競走場での法務官の役目は二つで、くじを振ることと白布（mappa）を投げることだと言う。くじで、だれが走るかが決まり、壺から御者の名が引き出され、くじに当たった者が出発の門に入り、法務官が白布で与える合図を待って走り出した、と言う。注 c（p. 46）は白布の合図にマルティアリス 12 巻 29 などを挙げる。
- 読者への影響：中 — 注 b を知らないと、「法務官がのろい」「目が壺の中でくじと一緒に転がる」「合図にかじりつく」の意味が取れない。Cognosce dementiam de vanitate は「その狂気を、むなしい言葉から知りなさい」の類いで、次の Misit, dicunt に掛かる。
- 訳での扱い：訳注は付けない（訳注は別の読みと後代の挿入に限る）。praetor は「法務官」の類い、urna は「壺」、sortes は「くじ」、signum は「合図」。furor は 15 章と揃え、『護教論』38.3 の insania circi の訳（「戦車競走場の狂乱」）との関係は「メインで決めること」。de sponsionibus は「賭けで」。
- 確かめた資料：`page/n75_w1600.jpg` の上半分（本文、校注 1〜7、注 a・b の初め）、下半分（注 a〜c）。OCR l. 6578–6598、6603–6607、6614–6690。CSEL l. 1451–1456、1468–1469、1494、1523。

### 16.3 Misit, dicunt … Mappam putant, sed est diaboli ab alto praecipitati figura（写本 A は gula）
- 底本（Oehler）：Misit, dicunt, et nuntiant invicem quod simul ab omnibus visum est. Teneo testimonium caecitatis: non vident missum quid sit. Mappam putant, sed est diaboli ab alto praecipitati figura.
- ほかの読み（16 章の校注 8、p. 46）：figura は BCD、gula（のど、大食らいの口）は AE。CSEL は figura（B）を採り、gula を A と挙げる。Migne は gula（Rigaltius）を本文に採り、figura を異読の一覧に挙げる（l. 59124、59147。略号は OCR で「Semi.」と崩れている）。
- 採る校訂者：注 d（p. 46〜47）は、Rigaltius が最古の写本の gula を刷り、それまでの figura を「切れ味が鈍い」と言ったことを引く。Rigaltius は、テルトゥリアヌスが聖書の伝えるサタンの墜落（神が天から奈落へ真っ逆さまに追い落とした）をほのめかし、法務官が合図に投げる白布を、白布ではなく、すべてがのど、すべてが渦、すべてが深淵となって広がり、競走場いっぱいに荒れ狂う悪魔そのものだと言うのだ、と解く。Oehler は「はるかに適した通行の読みを戻した」と言い、A の読みは、写字生の目が前の語 praecipitati の終わりの音節に迷い、figura の fi を落としたためで、そこから gulam と直すべきだと思い込んだ、と言う。「悪魔ののど」という言い方は『蠍の毒への解毒剤』6 章、『貞潔について』8 章にあると言い、高い所から投げ落とされた悪魔について『魂について』17 章を見よとする。
- 聖書の形：Oehler は箇所を挙げない。天から落ちたサタンは、ルカ一〇・一八（口語訳「わたしはサタンが電光のように天から落ちるのを見た」）、黙示録一二・九（「地に投げ落され」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 底本では「人々はそれを白布だと思っているが、それは高みから投げ落とされた悪魔の姿（象徴）だ」。高い所から落とされる白布が、天から落とされた悪魔をかたどる、という意味。A の gula では「悪魔ののど」となり、見物人をのみ込む口の像になる。Misit は「（法務官が白布を）投げた」で、目的語は書かれていない。
- 訳での扱い：底本の figura で訳す。訳注は勧めない（どちらでも、白布は実は悪魔だという要点は同じで、Oehler は写本の読みを写し誤りと説明している）。付けるなら次の案：
  - 「最古の写本は『姿』でなく『のど』と読む。」（20 字）
  Misit は「投げた」と目的語を補わずに訳し、次の Mappam putant で白布だと分かるようにする。聖句の引用ではないので『』も出典も付けない。
- 確かめた資料：`page/n75_w1600.jpg` の上半分（本文、校注 8）、下半分（注 d）、`page/n76_w1600.jpg` の下半分（注 d の終わり）。OCR l. 6595–6599、6655、6669、6693–6717、6793–6795。CSEL l. 1494–1497、1523。Migne l. 59124、59147。`node tools/bible.js Luke.10.18 Rev.12.9`。

### 16.4 et quicquid non licet sacerdotibus pacis. Inde maledicta, convicia sine iustitia odii, etiam suffragia sine merito amoris（「平和の祭司」と区切り）
- 底本（Oehler）：Ex eo itaque itur in furias et animos et discordias, et quicquid non licet sacerdotibus pacis. Inde maledicta, convicia sine iustitia odii, etiam suffragia sine merito amoris.
- ほかの読み（16 章の校注 9・10、p. 47）：Aβ は quicquid の綴り。Aβ は Iude maledicta。CSEL は同じ区切り（A は animo sed、maledicti）。Migne の本文は convicia sine justitia, odii etiam suffragia と区切り、Rigaltius の区切りとして底本と同じ形を挙げる（l. 59231、59306）。
- 採る校訂者：注 e（p. 47）は sacerdotibus pacis を「キリスト者」とし、プリニウス『博物誌』7 巻 30 章がプラトンを「知恵の祭司」と呼ぶ例を挙げ、テルトゥリアヌスに似た言い方が多いと言う。
- 読者への影響：中 — 「平和の祭司たち」がキリスト者を指すと分からないと、本当の祭司の話と読まれる。区切りは、底本では「憎むだけの正当な理由のないののしり、愛するだけの値打ちのない声援」と対になる。
- 訳での扱い：訳注は付けない。sacerdotes pacis は「平和の祭司たち」と訳し、キリスト者を指すことが文脈で分かるようにする（補うかは訳者が決める）。suffragia は観客の声援、拍手。animi は「激情」の類い。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文、校注 9・10）、下半分（注 e）。OCR l. 6723–6725、6774、6797–6800、6821。CSEL l. 1497–1500、1523–1524。Migne l. 59231、59306。

### 16.5–16.6 Quid enim suum consecuturi sunt qui illic agunt, qui sui non sunt? … An forsitan sine causa amare liceat, quam sine causa odisse?（「自分のものではない者」と、比較の magis の省略）
- 底本（Oehler）：Quid enim suum consecuturi sunt qui illic agunt, qui sui non sunt? nisi forte hoc solum, per quod sui non sunt: de aliena infelicitate contristantur, de aliena felicitate laetantur. Quicquid optant, quicquid abominantur, extraneum ab illis est: ita et amor apud illos otiosus et odium iniustum. An forsitan sine causa amare liceat, quam sine causa odisse?
- ほかの読み（16 章の校注 11〜14、p. 47）：suum consecuturi sunt qui illic agunt は (Aβ)E、Aφ は suum consecuturi sunt illic agunt、B は consecuturi sint suum qui illic agunt、CD は consecuturi suum illic agunt、Fulv. Ursinus は consecuturi suum qui illic agunt。A は quicquod（Aφ は quidquod）abominantur で、optant quicquid を欠く。A は ab iis。An forsitan は AB、Et forsitan は CD、An fors sit, tam は E、At forsitan は別の本。CSEL は suum consecuturi sunt, qui illic agunt（A）、ab iis（A）、an forsitan を採り、欄外に「cf. Matth. 20, 14.」（自分のものを取って行け、の句）を置く。
- 採る校訂者：注 f（p. 47）は、彼らは自分のものではない、ほかの者の情動に属しているからだ、と言い、いわば奴隷のように、自分のものでないので、自分のものとして持てるものを何も得られない、と言う。
- 読者への影響：中 — 「自分のものではない者たちが、そこで何を自分のものとして得るのか。あるいは、自分のものでなくなる、まさにそのことだけを得るのだろうか。彼らは他人の不幸に悲しみ、他人の幸せに喜ぶ」。注 f を知らないと sui non sunt（自分のものではない、自分の主人ではない）の意味が取れない。An forsitan … quam は magis が省かれた比較（『殉教者たちへ』2.2 の exisse … quam と同じ形）で、「それとも、理由なく愛するほうが、理由なく憎むより許されるのだろうか」。
- 訳での扱い：訳注は付けない。sui non sunt は注 f のとおり「自分の主人ではない」の類いで、suum（自分のもの）との言葉遊びが残るように訳す。otiosus は「理由のない、いたずらな」愛。CSEL の欄外のマタイ二〇・一四 は、この文と句の上でつながらず、どう関わるかは確かめていない（「未確認」）。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文、校注 11〜14）、下半分（校注、注 f）。OCR l. 6725–6738、6775–6781、6802–6806、6822–6846。CSEL l. 1500–1506、1521、1524–1526。

### 16.7 Deus certe etiam cum causa prohibet odisse, qui inimicos diligi iubet … qui maledicentes benedici praecipit. Sed circo quid amarius, ubi ne principibus quidem aut civibus suis parcunt?（主の言葉の言い換えと principes）
- 底本（Oehler）：Deus certe etiam cum causa prohibet odisse, qui inimicos diligi iubet. Deus etiam cum causa maledicere non sinit, qui maledicentes benedici praecipit. Sed circo quid amarius, ubi ne principibus quidem aut civibus suis parcunt?
- ほかの読み（16 章の校注 15、p. 47）：A は quid を欠く。CSEL は同じ本文で、A は sint（訂正）と言う。Migne の欄外はマタイ五章、マルコ七章、ローマ一三章を挙げる（l. 59242）。
- 採る校訂者：注 g（p. 47）は ubi ne principibus quidem … parcunt に『護教論』38 章を見よとする。『護教論』38.3 は、キリスト者は「戦車競走場の狂乱」などと関わりを持たないと言うが、principes の語はない（`books/tertullian-apology/research/oehler-1853.txt` の 38.1〜38.4）。
- 聖書の形：Oehler は箇所を挙げない。inimicos diligi はマタイ五・四四（口語訳「敵を愛し」）、maledicentes benedici はルカ六・二八（口語訳「のろう者を祝福し」）に当たる。どちらも「神は命じる」という間接の言い換えで、引用ではない（この点はこの一覧の観察）。
- 読者への影響：中 — principes は、『護教論』の訳語表では「皇帝」。観客が皇帝や同じ町の市民さえ容赦しない（ののしる）ことを言うとみられるが、注 g の送り先はそれを確かめさせない（「未確認」）。
- 訳での扱い：訳注は付けない。主の言葉は『』に入れず地の文で言い換える（本の `AGENTS.md` の 13.1〜13.2 と同じ扱い）。出典（マタイ五・四四、ルカ六・二八）を付けるかは訳者が決める。principes を「皇帝たち」とするか「支配者たち」とするかは「メインで決めること」（訳語表 6.2 の reges は「皇帝たち」）。amarius は「ひどい、とげとげしい」で、amare（愛する）との音の掛け合いがあるかは確かめていない。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文、校注 15）、下半分（注 g）。OCR l. 6738–6754、6827、6808–6809。CSEL l. 1505–1511、1526。Migne l. 59242。`node tools/bible.js Matt.5.44 Luke.6.27-28 Rom.12.14`。

### 16.8 Si quid horum, quibus circus furit, alicubi competit sanctis（sancti はキリスト者）
- 底本（Oehler）：Si quid horum, quibus circus furit, alicubi competit sanctis, etiam in circo licebit, si vero nusquam, ideo nec in circo.
- ほかの読み（16 章の校注 16、p. 47）：alicubi は ABC と Clemens の写本、aliubi は CD。CSEL も alicubi。
- 採る校訂者：注 h（p. 47）は sanctis を「キリスト者」とする。
- 読者への影響：小 — 「競走場が狂い立つこれらのことのどれかが、どこかで聖徒にふさわしいなら、競走場でも許されよう。どこでもふさわしくないなら、だから競走場でも許されない」。
- 訳での扱い：訳注は付けない。sancti は口語訳の「聖徒」の類い。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文、校注 16）、下半分（注 h）。OCR l. 6754–6758、6782、6811、6847。CSEL l. 1510–1511、1527。

### 17.1 Similiter nec impudicitiam omnem amandare iubemur?（Oehler の推定と、問いの形）
- 底本（Oehler）：Similiter nec impudicitiam omnem amandare iubemur? Hoc igitur modo etiam a theatro separamur, quod est privatum consistorium impudicitiae, ubi nihil probatur, quam quod alibi non probatur.
- ほかの読み（17 章の校注 1〜6、p. 47）：nec impudicitiam は A・B の余白・E、BCD は impudicitam（nec がない）。amandare は ego（Oehler 自身の推定）、amare は A・B の余白・E、amoliri は BCD。A は etiam li heatro。Jos. Scaliger は privum。B の余白は impudentiae。A は quam を欠く。CSEL は Similiter inpudicitiam omnem amoliri iubemur.（B。平叙文）と読み、nec … amare を A と B の余白、Oehler の形、Klussmann の pudicitiam omnem amare を挙げる。Migne も amoliri（l. 59249）。
- 採る校訂者：注 a（p. 47）で Oehler は、古い本の nec を戻し、文を問いの符号で閉じたと言う。A と初版の余白の amare の代わりに amandare（遠ざける）と直したのは、amandare が amare にたやすく崩れうるからだと言う。この直しが気に入らなければ通行の amoliri を戻せばよく、A の次の行の etiam li heatro の li は、amare の上に amoliri を示すために書き加えられた字が迷い込んだものかもしれない、と言う。A に従った Rigaltius は nec omnem を「どれも〜ない」、iubemur nec amare を「愛さないよう命じられている」と解き、マルティアリスとユウェナリスの例を挙げた、と言う。
- 読者への影響：小 — 底本では「同じように、わたしたちは、あらゆる淫らさを遠ざけるよう命じられていないだろうか」と問い、通行の形では「同じように、わたしたちは、あらゆる淫らさを退けるよう命じられている」と言い切る。どちらでも要点は同じ。「劇場は淫らさの私的な会議所」は 10.5 の注 k の言う箇所。
- 訳での扱い：訳注は付けない。底本の問いの形で訳し、amandare が Oehler の推定であることを `// ` メモに書ける。impudicitia の訳は、『護教論』38.3 の「劇場の恥知らず」と揃えるか、「淫らさ」の類いにするかを決める（「メインで決めること」）。privatum consistorium は「私的な会議所」の類いで、10.5 の arx omnium turpitudinum（あらゆる恥ずべきことの砦）とつながる。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文、校注 1〜6）、下半分（注 a）。OCR l. 6761–6771、6785–6787、6814–6878、6830–6851。CSEL l. 1513–1516、1527–1530。Migne l. 59249、59314。

### 17.2 Ita summa gratia eius dei spurcitia plurimum concinnata est, quam Atellanus gesticulatur, quam minus etiam per muliebres repraesentat（刷りの dei と minus）
- 底本（Oehler）：Ita summa gratia eius dei spurcitia plurimum concinnata est, quam Atellanus gesticulatur, quam minus etiam per muliebres repraesentat, sexum pudoris exterminans, ut facilius domi quam scenae erubescant, quam denique pantomimus a pueritia patitur in corpore, ut artifex esse possit.（dei と minus は画像で確かめた。OCR も dei）
- ほかの読み：
  - dei：Oehler の校注には、この語の異読がない。CSEL は summa gratia eius de spurcitia plurimum concinnata est と読み、校注にこの語の記載がない（A と B が de と読むことになる）。Migne も ejus de spurcitia（l. 59253）。
  - minus：Oehler の校注には、この語の異読がない（校注 8 は per muliebres について）。CSEL は quam mimus etiam per muliebres res repraesentat と読み、mimus に校注の記載がない（A と B が mimus と読むことになる。res は Klussmann が足した語）。Migne も mimus etiam per mulieres（l. 59255）。
  - 17 章の校注 7〜11（p. 48）：gesticulatur は ABC、gesticulator は DE と Latinius。per muliebres は AB、per mulieres は残り。A は sexus et pudoris。quam scaenae erubescant は B、quam in scena erubescant は CDE、A はこの語を欠く。A は ex corpore。CSEL は sensum sexus et pudoris exterminans（sensum は Klussmann が足した語。A は sexus et pudoris、B は sexum pudoris）、quam in scaena erubescant、ex corpore（A）を採る。
- 採る校訂者：注 b（p. 48）は per muliebres を「女の（衣で）」と補い、23 章の「律法が女の衣を着る者はのろわれると定めるのに、女の衣で装われるパントマイム役者を（神は）どう裁くだろうか」を引く。Migne の注 c（Rigaltius）は sexum pudoris exterminans をギリシア語風の言い方とし、「性を恥じらいの境の外へ追いやる」と言い換える（l. 59351 から）。
- 読者への影響：大 — dei なら「こうして、その神の最高の恵みは、汚らわしさで、このうえなく組み立てられている」。de なら「こうして、劇場の最高の楽しみは、汚らわしさから、このうえなく組み立てられている」で、神は出てこない。dei の「その神」は、10.7〜10.8 で劇場の守り手とされたウェヌスとリベルを指すとも考えられる（この点はこの一覧の観察で、Oehler の注にはない）。minus では文の主語が立たず、意味が通りにくい。mimus なら「アテッラ劇の役者が身ぶりで演じ、ミーモス劇の役者も女の衣で演じ、そしてパントマイム役者が子供のころから体で受ける汚らわしさ」と、劇の三つの種類が並ぶ。ANF の英訳は「その神の」と「女の衣を着た道化」で訳していて、dei の刷りと、mimus に当たる語の両方を前提にしているように見える（構文の確かめだけ）。
- 訳での扱い：本の `AGENTS.md` の「底本の明らかな刷りの誤りは正しい形で起こし、訳の `// ` メモに刷られた形を書く」に当たるかどうかは「メインで決めること」。この一覧の判断は、minus は mimus の刷りの誤りとみるのが自然（Oehler の校注に記載がなく、CSEL も Migne も mimus、英訳も役者の名で訳す）。dei は、校注に記載がないので Oehler の直しとは言えないが、eius dei も文法上は通るので、刷りの誤りと言い切れない（「未確認」）。dei を採るなら、eius が受ける神は前の文から補えないので、`// ` メモに de の読みを書く。訳注は勧めない（どちらの形でも、劇場の楽しみが汚らわしさでできている、という要点は残る）。dei を採ったうえで付けるなら次の案：
  - 「ほかの版には『その神の』がなく、劇場の楽しみの話になる。」（28 字）
  Atellanus は「アテッラ劇の役者」、mimus は「ミーモス役者」、pantomimus は「パントマイム役者」の類いで、名前の表に足す（「メインで決めること」）。per muliebres は注 b のとおり「女の衣で」。a pueritia patitur in corpore は、子供のころから体に受ける辱め（性的な虐待）を遠回しに言う。原文の遠回しの言い方をそのまま残すか、意味が分かるようにするかは訳者が決める。
- 確かめた資料：`page/n76_w1600.jpg` の上半分（本文の初め）、`page/n77_w1600.jpg` の上半分（本文、校注 7〜11）、下半分（注 b）。17.2 の dei は n76 の `pct:0,42,100,5`、minus は n77 の `pct:10,6,90,4` を 2 倍に拡大して確かめた。OCR l. 6771、6890–6893、6906–6908、6930–6934。CSEL l. 1516–1519、1530–1535、1544–1545、1575。Migne l. 59253–59255、59351。ANF l. 7173–7178（どの読みで訳したかだけ）。

### 17.3 prostibula publicae libidinis hostiae … locus, stipes, elogium, etiam quibus opus non est, praedicatur（遊女の告げ知らせ）
- 底本（Oehler）：Ipsa etiam prostibula publicae libidinis hostiae in scena proferuntur, plus miserae in praesentia feminarum, quibus solis latebant, perque omnis aetatis, omnis dignitatis ora transducuntur, locus, stipes, elogium, etiam quibus opus non est, praedicatur, etiam, taceo de reliquis, etiam quae in tenebris et in speluncis suis delitescere decebat, ne diem contaminarent.
- ほかの読み（17 章の校注 12〜16、p. 48）：Aφ は prostribula。A は quibus so solis。B は per quae。Etiam taceo は AB、Taceo は残り。etiam quae は ABE、ea quae は CD、eaque は Fr. Junius。CSEL は perque（Gelenius）を採り、二つ目の etiam を角括弧に入れて削る（ea は Gelenius）。
- 採る校訂者：注 c（p. 48）は prostibula に Lipsius とイシドルス 18 巻 42 章を挙げる。注 d（p. 48、La Cerda）は、遊女たちが一種の公の引き回しで皆の目にさらされ、触れ役が、それぞれの部屋（locus）、稼ぎ（stipes）、どんな有力な男たちの貞潔を攻め落としたか（elogium）を、勝利の棕櫚のように告げたと言い、elogium は触れ役が美しさをほめて見物人を誘ったことかもしれない、と言う。注 e（p. 48）は etiam quibus opus non est を「年齢や性や身分のために、聞く必要のない人々にまで告げられる」とする。
- 読者への影響：中 — 注 d を知らないと locus, stipes, elogium（場所、値段、ふれこみ）が何を言うのか取れない。transducuntur は「引き回される、さらしものにされる」。
- 訳での扱い：訳注は付けない。hostiae は 19.4 の publicae voluptatis hostiae と同じ語なので、「いけにえ」（訳語表の hostia）で揃える。locus, stipes, elogium は注 d のとおり、遊女の「居場所、値段、評判」の類い。
- 確かめた資料：`page/n77_w1600.jpg` の上半分（本文、校注 12〜16）、下半分（注 c〜e）。OCR l. 6893–6899、6908–6910、6936–6957。CSEL l. 1545–1551、1575–1577。

### 17.4 Ipsae illae pudoris sui interemtrices … semel anno erubescunt（写本 A と Rigaltius は erubescant）
- 底本（Oehler）：Erubescat senatus, erubescant ordines omnes. Ipsae illae pudoris sui interemtrices de gestibus suis ad lucem et populum expavescentes semel anno erubescunt.
- ほかの読み（17 章の校注 17〜19、p. 48）：A は Erubescat senatus を欠く。anno は ACDE、annon は B（Sam. Petitus が支持）。erubescant は AE と Meursius。CSEL は erubescant（A。erubescunt は B）を採る。Migne も erubescant（l. 59269）。
- 採る校訂者：注 f（p. 48）は ad lucem et populum expavescentes に『殉教者たちへ』3 章への注を見よとする（3.2 の de umbra ad solem … expavescant の言い方）。注 g（p. 48）は、「年に一度は顔を赤らめると言うのは、思うにフローラ祭の遊戯のことで、そこでは女役者が民衆の前で裸にされる習わしだった」と言い、ウァレリウス・マクシムス 2 巻 10 章 8 節（カトーが見物していると、民衆は女役者を裸にせよと求めるのを恥じた。カトーはそれを友から聞いて、自分がいて見世物の習わしを妨げないよう劇場を出て行き、民衆は大喝采で送って古い習わしを舞台に戻した）を引く。Rigaltius は A に従って erubescant と刷り、「光と民衆の前で怖じ気づき、せめて年に一度は顔を赤らめるがよい」と解いた、と言う。
- 読者への影響：中 — 底本の直説法では「自分の恥じらいを殺した女たちでさえ、光と民衆の前での自分の身ぶりに怖じ気づき、年に一度は顔を赤らめる」。A の接続法では「年に一度は顔を赤らめるがよい」と、前の Erubescat senatus, erubescant ordines omnes（元老院よ、顔を赤らめよ）の勧めに並ぶ。注 g の言う年に一度の場が何かは、本文に書かれていない。
- 訳での扱い：訳注は付けない。底本の直説法で訳す。年に一度がフローラ祭を指すことは補わず、`// ` メモに注 g を書ける（「未確認」も見よ）。interemtrices は「殺した女たち」の類い。
- 確かめた資料：`page/n77_w1600.jpg` の上半分（本文、校注 17〜19）、下半分（校注、注 f・g）。OCR l. 6899–6901、6910–6914、6918–6927、6960–6971。CSEL l. 1551–1553、1577–1578。Migne l. 59269、59368。

### 17.4 cum etiam scurrilitatem et omne vanum verbum iudicatum a deo sciamus（エペソ五・四 とマタイ一二・三六 の暗示、小さな異読）
- 底本（Oehler）：Quodsi nobis omnis impudicitia exsecranda est, cur liceat audire quae loqui non licet, cum etiam scurrilitatem et omne vanum verbum iudicatum a deo sciamus?
- ほかの読み（17 章の校注 20〜22、p. 48）：Aβ は exsecranda の綴り。A は quod loqui。Fulv. Ursinus は iudicatum iri a deo（神に裁かれるであろう）。CSEL は quod（A）を採る。
- 採る校訂者：注 h（p. 48）は iudicatum を「断罪された」（damnatum）とし、『兵士の冠について』15 章への注を見よとする。
- 聖書の形：Oehler は箇所を挙げない。scurrilitas はエペソ五・四（口語訳「みだらな冗談」）、omne vanum verbum はマタイ一二・三六（口語訳「人はその語る無益な言葉に対して、言い開きをしなければならない」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：小 — 「みだらな冗談も、むなしい言葉もみな、神に断罪されているとわたしたちは知っているのに」。
- 訳での扱い：訳注は付けない。引用ではないので『』に入れない。口語訳の語（「みだらな冗談」「無益な言葉」）を借りるか、出典を付けるかは訳者が決める。iudicatum は注 h のとおり「断罪された」。
- 確かめた資料：`page/n77_w1600.jpg` の上半分（本文、校注 20〜22）、下半分（校注、注 h）。OCR l. 6901–6904、6914–6915、6973–6974。CSEL l. 1553–1556、1578。`node tools/bible.js Eph.5.4 Matt.12.36`。

### 17.5 Cur quae ore prolata communicant hominem, ea per oculos et aures admissa non videantur hominem communicare?（マタイ一五・一一、一八 と communicare）
- 底本（Oehler）：Cur aeque liceat videre quae facere flagitium est? Cur quae ore prolata communicant hominem, ea per oculos et aures admissa non videantur hominem communicare? cum spiritui appareant aures et oculi, nec possit mundus praestari, cuius apparitores inquinantur.
- ほかの読み（17 章の校注 23、p. 48）：A は per aures et oculos。CSEL は per aures et oculos（A）を採り、問いの符号を inquinantur の後に置く。
- 採る校訂者：注 i（p. 48〜49）は、coinquinant（汚す）と直すのはたやすいが、テルトゥリアヌスは聖書の著者たちが κοινοῦν（汚す）を使うように communicare を使っているのだと言う。マタイ一五・一八（ヒエロニュムスは coinquinant と訳す）、『忍耐について』8 章（器の汚れではなく、口から出るものが人を汚す）、『断食について』2 章、ヒエロニュムス訳マルコ七・二、五 の communes manus（汚れた手）、七・一五、使徒行伝一〇・一四〜一五、エルサレムのキュリロスを挙げる。
- 聖書の形：口語訳マタイ一五・一一 は『口にはいるものは人を汚すことはない。かえって、口から出るものが人を汚すのである』、一五・一八、マルコ七・一五、二〇 も同じ趣旨。テルトゥリアヌスは「口から出るものが人を汚すなら、目と耳から入るものも人を汚すはずだ」と、主の言葉を前提に論を立てる。引用ではない。
- 読者への影響：中 — communicare を「分かち合う、交わらせる」と取ると意味が通らない。注 i のとおり「汚す」。apparitores は「従者、下役」で、耳と目を霊の従者にたとえる。
- 訳での扱い：訳注は付けない。communicare は口語訳の「汚す」で訳し、主の言葉を思い出させる言い方にする（『』には入れない）。出典（マタイ一五・一一、一八）を付けるかは訳者が決める。mundus は形容詞「清い」で、訳語表の mundus（世界）とは別の語。
- 確かめた資料：`page/n77_w1600.jpg` の上半分（本文、校注 23）、下半分（注 i）、`page/n78_w1600.jpg` の上半分（本文）、下半分（注 i の続き）。OCR l. 6904–6905、6915、6976–6988、6994–6996、7021–7033。CSEL l. 1556–1560、1579。`node tools/bible.js Matt.15.11 Matt.15.18 Mark.7.15 Mark.7.20`。

### 17.6 Si et doctrinam saecularis litteraturae, ut stultitiae apud deum deputatam, aspernamur … lusoriam vel agonisticam scenam dispungunt（章の切れ目、第一コリント三・一九、dispungere）
- 底本（Oehler）：Habes igitur et theatri interdictionem de interdictione impudicitiae. Si et doctrinam saecularis litteraturae, ut stultitiae apud deum deputatam, aspernamur, satis praescribitur nobis et de illis speciebus spectaculorum, quae saeculari litteratura lusoriam vel agonisticam scenam dispungunt.
- ほかの読み（17 章の校注 24〜29、p. 49）：Si は AB、Sin は残り。A は Litteraturae と綴る（ほかの箇所でも、とことわる）。A は nobis を欠く。A は speciebus et de spectaculorum。Jos. Scaliger は lusorium vel agonisticum schema。Fr. Junius は scena。CSEL は si（AB）を採る（sin は Gelenius）。Migne は Sin と読み、ここから 18 章を始める（l. 59284–59286）。
- 採る校訂者：注 k（p. 49）は、La Cerda のほかのすべての刊本がここから新しい章を始めるが、Desid. Heraldus（アルノビウスへの注）と Fr. Junius が見たとおり、前の文と固く結びついている、と言う。章の結びではなく、淫らさに関わることの結びで、劇場をキリスト者が避けるべき最後の理由を足すのだ、と言う。注 l（p. 49）は、Heraldus が lusoriam vel agonisticam scenam を喜劇と悲劇の舞台とし（役者は ἀγωνισταί と呼ばれた。ヘシュキオス、アリストテレス『弁論術』3 巻 12 章）、dispungunt を「世の文学で筋をつなぎ、形づくる」と解いたのを引き、Oehler は dispungere の解釈で Heraldus は誤ったと言う。テルトゥリアヌスでは dispungere はいつも「差し引きする、見積もる、区別する、分ける」で（『魂について』57 章への注）、ここで言う見世物の種類は劇場の遊戯で、ほかの遊戯と違って文学を持つことで区別され、さらに喜劇と悲劇の二つに分けられる、と言う。
- 聖書の形：Oehler は箇所を挙げない。「神のもとでは愚かさとみなされる」は、第一コリント三・一九（口語訳「この世の知恵は、神の前では愚かなものだからである」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 「世の文学の学びも、神のもとでは愚かさとみなされるものとして退けるなら、世の文学によって、遊びの舞台か競いの舞台かに分かれる種類の見世物（喜劇と悲劇）についても、わたしたちには十分に定めが与えられている」。dispungunt を注 l のとおり「分ける」と取らないと、lusoria（喜劇）と agonistica（悲劇）の区別が見えない。
- 訳での扱い：訳注は付けない。章の切れ目は底本どおり 17 章に残す。lusoria vel agonistica scena は注 l と 17.7 のとおり喜劇と悲劇を指すので、「遊びの舞台、競いの舞台」と訳して 17.7 で喜劇と悲劇と分かるようにするか、補うかを訳者が決める。praescribitur は訳語表の praescriptio（定め）に揃える。引用ではないので『』に入れない。
- 確かめた資料：`page/n78_w1600.jpg` の上半分（本文、校注 24〜29）、下半分（注 k・l）。OCR l. 6996–7003、7010–7012、7064–7065、7094–7098、7036–7122。CSEL l. 1560–1565、1579–1581。Migne l. 59286–59290。`node tools/bible.js 1Cor.3.19`。

### 17.7 Quodsi tragoediae et comoediae scelerum et libidinum auctrices … nullius rei aut atrocis aut vilis commemoratio melior est（auctrices と actrices）
- 底本（Oehler）：Quodsi tragoediae et comoediae scelerum et libidinum auctrices cruentae et lascivae, impiae et prodigae, nullius rei aut atrocis aut vilis commemoratio melior est. Quod in facto reicitur, etiam in dicto non est recipiendum.
- ほかの読み（17 章の校注 30〜33、p. 49）：Quodsi は E と Fulv. Ursinus、Quod sint は残り。A は aut libidinum。auctrices は ABCD（Aβ は autrices）、actrices は E と Fulv. Ursinus。A は aut atrocis aut vilis を欠く。CSEL は quodsi sunt … actrices と、quodsi（Ursinus）に sunt を足し（Klussmann）、actrices（Ursinus）を採る。Migne も actrices（l. 59290–59291）。
- 採る校訂者：注 m（p. 49）は、すぐ後の atrox が悲劇に、vilis が喜劇に当たるように、lasciva と prodiga は喜劇を、cruenta と impia は悲劇を言う、と言う。「悲劇には血なまぐさい、不敬な、むごい罪の追憶、喜劇には淫らで、放埒で、卑しい情欲の追憶がある」。
- 読者への影響：中 — 底本の auctrices では「悲劇と喜劇が、罪と情欲を生み出すもの（張本人）で、血なまぐさく淫らで、不敬で放埒なら」。actrices では「罪と情欲を演じるもの」。注 m のとおり、形容詞の二つずつが悲劇と喜劇に分かれて掛かる（交差配列）。
- 訳での扱い：訳注は付けない。底本の auctrices で訳す。形容詞は注 m のとおり、悲劇（血なまぐさい、不敬な、むごい）と喜劇（淫らな、放埒な、卑しい）に振り分けて分かるように訳す。commemoratio は「語り出すこと、思い起こさせること」の類い。
- 確かめた資料：`page/n78_w1600.jpg` の上半分（本文、校注 30〜33）、下半分（注 m）。OCR l. 7074–7077、7013–7014、7061–7068、7094–7099、7124–7134。CSEL l. 1565–1568、1581–1584。Migne l. 59290–59291。

### 18.1 Quodsi et stadium contendas in scripturis nominari … humani oris, id est divinae imaginis depugnationem（第一コリント九・二四 と創世記一・二七）
- 底本（Oehler）：Quodsi et stadium contendas in scripturis nominari, sane obtinebis. Sed quae in stadio geruntur, indigna conspectu tuo non negabis, pugnos et calces et colaphos et omnem petulantiam manus, et quamcunque humani oris, id est divinae imaginis depugnationem.
- ほかの読み（18 章の校注 1〜3、p. 49〜50）：conspectu は A、conspectui は残り。A は quaecunque。CD は humanioris。CSEL は conspectu、quamcumque を採り、A が non nominari（non は消されている）と書くと言う。CSEL の欄外は第一コリント九・二四。
- 採る校訂者：注 a（p. 50）は depugnatio を「拳か格闘による（顔の）損ない」とする。
- 聖書の形：「競技場（stadium）が聖書に出る」は、第一コリント九・二四（口語訳「競技場で走る者は、みな走りはするが、賞を得る者はひとりだけである」）を指すとみられる（CSEL の欄外。Oehler は挙げない）。「人の顔、すなわち神のかたち」は創世記一・二七（口語訳「神は自分のかたちに人を創造された」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 「競技場が聖書に名指されていると言い張るなら、それは認めよう」は、パウロが競技場を比喩に使うことを見世物の擁護に使う相手への答え。それを知らないと、何の話か取れない。『殉教者たちへ』3.6 の stadium tribunalis（裁きの座という競技場）とも同じ語。
- 訳での扱い：訳注は付けない。stadium は訳語表と口語訳の「競技場」で、パウロの句を思わせることが伝わる。出典（第一コリント九・二四）を付けるかは訳者が決める。二人称単数（contendas、obtinebis、tuo）は、本の `AGENTS.md` の 8.6〜8.7 のキリスト者一人への語りかけの型（「あなた」）に当たるかを決める（「メインで決めること」）。imago dei は口語訳の「神のかたち」。
- 確かめた資料：`page/n78_w1600.jpg` の上半分（本文、欄外の Cap. XVIII、校注 1）、`page/n79_w1600.jpg` の上半分（本文、校注 2・3）、下半分（注 a）。OCR l. 7079–7081、7015、7071、7143–7144、7180、7204–7205。CSEL l. 1570–1573、1584、1602–1604、1632。`node tools/bible.js 1Cor.9.24 Gen.1.27`。

### 18.2 sed nec cura facticii corporis, ut plasticam dei supergressa, et propter Graeciae otium altiles homines oderis（supergressa と altiles）
- 底本（Oehler）：Non probabis usquam vanos cursus et iaculatus et saltus vaniores, nusquam tibi vires aut iniuriosae aut vanae placebunt, sed nec cura facticii corporis, ut plasticam dei supergressa, et propter Graeciae otium altiles homines oderis.
- ほかの読み（18 章の校注 4〜8、p. 50）：A は et saltus を欠く。A は nusquam tibi res（vires の代わり）。Aβ は facticii の綴り。supergressa et は AE、supergressae は残り、Latinius は supergressa sed、Fulv. Ursinus は supergressa（et がない）。Graeciae otium は ABCE、otium Graeciae は D。CSEL は supergressa et（A）、uires（B）を採る。
- 採る校訂者：注 b（p. 50）は plasticam dei に『女性の装いについて』2 巻 5 章を見よとする。注 c（p. 50、Rigaltius）は altiles を、体育場の長たちが、競技に最も強い力を持つよう、念入りに肥え太らせて養った運動選手や格闘家のことと言う。そうした競技をいちばん好んだのはギリシア人で、公の平和の暇を楽しんでいた、長い平和の害を受けていたのだ、と言う。ウァロやマルティアリスが肥えさせた牛や鶏を altiles と呼んだように、テルトゥリアヌスは「肥えさせた人間」と言った、と言い、『悔い改めについて』11 章の用例を挙げる。運動選手の食事について Krause を挙げる。
- 読者への影響：中 — 「神の造形を越えようとして体を作り上げる手入れも、あなたの気に入らない。ギリシアの暇のために肥え太らされた人間たちを、あなたは嫌うだろう」。altiles は家畜を太らせる語で、運動選手をあざける言い方。plastica dei は、神が人を土から形づくったこと（創世記二・七）を思わせる（この点はこの一覧の観察。Oehler の注は別の書を送るだけ）。
- 訳での扱い：訳注は付けない。altiles は家畜を肥やす語のあざけりが残るように訳す（「肥え太らせた」の類い）。plastica dei は「神の造形」の類い。訳語表の athletae（運動選手）、vires（力）に揃える。
- 確かめた資料：`page/n79_w1600.jpg` の上半分（本文、校注 4〜8）、下半分（校注、注 b・c）。OCR l. 7144–7147、7181–7184、7193–7195、7207–7229。CSEL l. 1604–1607、1632–1633。`node tools/bible.js Gen.2.7`。

### 18.3 Et palaestrica diaboli negotium est. Primos homines diabolus elisit. Ipse gestus colubrina vis est（創世記三章の暗示と、gestus／caestus）
- 底本（Oehler）：Et palaestrica diaboli negotium est. Primos homines diabolus elisit. Ipse gestus colubrina vis est, tenax ad occupandum, tortuosa ad obligandum, liquida ad elabendum. Nullus tibi coronarum usus est, quid de coronis voluptates aucuparis?
- ほかの読み（18 章の校注 9〜11、p. 50）：Aβ は Ipsi。Aβ は ocupandum。B は delabendum。CSEL は ipse caestus colubrina uis est と、caestus（拳闘の革ひも）を Klussmann の推定として採り、gestus を AB と挙げる。
- 採る校訂者：注 d（p. 50）は、A の Ipsi も弁護できるとし、Fr. Junius は diabolus ipse. Gestus と区切る、と言う。注 e（p. 50）は、Hildebrand が liquida を lubrica（滑りやすい）と直したがるのに「それはそれでよい（Viderit）」と言い、アルドヘルム、シドニウス・アポッリナリスの用例を挙げ、格闘場で油を使ったことはよく知られている、と言う。
- 聖書の形：Oehler は箇所を挙げない。Migne の欄外は創世記三章（l. 59426）。elidere は格闘で相手を投げ倒す語で、悪魔が最初の人間を（蛇として）倒した堕落の話と、格闘技を重ねる。colubrina（蛇の）も創世記三章の蛇とつながる（この点はこの一覧の観察）。
- 読者への影響：中 — 「格闘術も悪魔の仕事だ。悪魔は最初の人間たちを投げ倒した。その身ぶりそのものが蛇の力で、つかむにはしつこく、縛るにはくねり、すり抜けるにはぬるりとしている」。CSEL の caestus では「拳闘の革ひもそのものが蛇の力」になり、格闘術（palaestrica）から拳闘に話が移る。A の Ipsi、Junius の区切りでは「悪魔自身が最初の人間たちを倒した」。
- 訳での扱い：訳注は付けない。底本の gestus で訳す。elisit は「投げ倒した」の類いで、格闘の語と堕落の話の両方が伝わるようにする。出典は付けない（言い換えでもない暗示）。訳語表の palaestra（練習場）とは別に、palaestrica は「格闘術」の類い。coronae は競技の冠。
- 確かめた資料：`page/n79_w1600.jpg` の上半分（本文、校注 9〜11）、下半分（校注、注 d・e）。OCR l. 7147–7155、7184、7198、7231–7250。CSEL l. 1607–1611、1633–1635。Migne l. 59426。

### 19.1 Expectabimus nunc et amphitheatri repudium de scripturis（平叙文か、問いか）
- 底本（Oehler）：Expectabimus nunc et amphitheatri repudium de scripturis. Si saevitiam, si impietatem, si feritatem permissam nobis contendere possumus, eamus in amphitheatrum. Si tales sumus, quales dicimur, delectemur sanguine humano.
- ほかの読み（19 章の校注 1〜5、p. 50）：BCD は nunc ut et。BCD は scripturis petamus.、Fr. Junius と Hildebrand は scripturis petamus?。Aβ は saevitiam、ampitheatrum の綴り。A は Si tales sumus quales sumus quales dicimur sanguinis humani。CSEL は Exspectabimus nunc ut et amphitheatri repudium de scripturis petamus?（B）と問いにし、petamus は A が欠くと言う。Migne は Oehler と同じ平叙文（l. 59433）。
- 採る校訂者：この文に注はない。
- 読者への影響：中 — 底本では「では次に、闘技場を退けることも、聖書から待つことにしよう」と、皮肉をこめて言う（聖書が闘技場を名指して禁じるのを待つ、の意味。20 章の、聖書に名指しの禁止がないという言い分につながる）。CSEL の形では「闘技場を退ける言葉まで、聖書に求めるのを待つというのか」と問う。どちらでも、名指しの禁止を聖書に求める相手への皮肉。Si tales sumus, quales dicimur（わたしたちが言われているとおりの者なら、人の血を喜ぼう）は、キリスト者が人の血を飲むと言われていたことへのあてこすりとみられるが、Oehler の注はない（「未確認」）。
- 訳での扱い：訳注は付けない。底本の平叙文で、皮肉が伝わるように訳す。saevitia、impietas、feritas は「残酷さ、不敬、獣のような荒々しさ」の類いで、『護教論』38.3 の atrocitas arenae（「闘技場のむごさ」）との関係を訳者が決める。amphitheatrum は訳語表の「闘技場」。
- 確かめた資料：`page/n79_w1600.jpg` の上半分（本文、校注 1〜5）、下半分（校注）。OCR l. 7157–7160、7185–7187。CSEL l. 1613–1617、1635–1637。Migne l. 59433。

### 19.2–19.3 Et tamen innocens de supplicio alterius laetari non potest … aut infirmitate defensionis aut instantia quaestionis（小さな異読）
- 底本（Oehler）：Bonum est, cum puniuntur nocentes. Quis hoc nisi tamen nocens negabit? Et tamen innocens de supplicio alterius laetari non potest, cum magis competat innocenti dolere, quod homo par eius tam nocens factus est, ut tam crudeliter impendatur. Quis autem mihi sponsor est, nocentes semper vel ad bestias vel ad quodcumque supplicium decerni, ut non innocentiae quoque inferatur aut ultione iudicantis aut infirmitate defensionis aut instantia quaestionis?
- ほかの読み（19 章の校注 6〜11、p. 50）：nisi tamen は A、nisi tantum は B、nisi は残り。innocens は A・B の余白・DE、innocentes は B、nocentes は C。potest は A・B の余白・DE、oportet は BC。Aβ は quodcumque の綴り。Fr. Junius は innocentia。defensionis は A と B の余白、defendentis は BCDE。CSEL は nisi tamen（A）、innocentes … non oportet（B）、defensionis（A と B の余白）を採る。
- 採る校訂者：これらの文に注はない（19 章の注 a で、Rigaltius の言い換えが 19.3〜19.4 を受ける）。
- 読者への影響：小 — 「それでも、罪のない人は、他人の刑罰を喜ぶことができない。むしろ、自分と同じ人間が、あれほどむごく罰せられるほどの罪人になったことを悲しむのが、罪のない人にふさわしい」。CSEL の形では「罪のない人々は…喜ぶべきではない」。19.3 は「罪人がいつも獣や刑罰に定められ、裁く者の復讐や、弁護の弱さや、拷問の厳しさによって、罪のない人にも刑が加えられることがないと、だれが保証するのか」。impendatur は「（刑に）費やされる、処される」。
- 訳での扱い：訳注は付けない。quaestio は「拷問による取り調べ」の類いで、訳語表の tormenta（拷問）と揃えるかを訳者が決める。
- 確かめた資料：`page/n79_w1600.jpg` の上半分（本文、校注 6〜11）、下半分（校注）。OCR l. 7160–7167、7187–7190。CSEL l. 1617–1624、1637–1639。

### 19.4 Quam melius ergo est nescire cum mali puniuntur … si tamen bonum sapiunt. Certe quidem gladiatores innocentes in ludum veneunt（「善を味わうなら」と、写本の veneunt）
- 底本（Oehler）：Quam melius ergo est nescire cum mali puniuntur, ne sciam et cum boni pereunt, si tamen bonum sapiunt. Certe quidem gladiatores innocentes in ludum veneunt, ut publicae voluptatis hostiae fiant.
- ほかの読み（19 章の校注 12〜14、p. 50〜51）：nescire cum は AE、B は nesciam et cum、CD は ne sciam cum。A は alii（mali の代わり）。veneunt は A、veniunt は残り。CSEL も ueneunt（A。ueniunt は B）を採る。Migne は veniunt（l. 59476）。ANF の英訳は「売りに出される」の意味で訳している（veneunt を前提とする。構文の確かめだけ）。
- 採る校訂者：19 章の注 a（p. 50〜51）は Rigaltius の注を引く。異教徒の役人の判決で獣に定められる異教徒のことを言っているのだとし、「悪人が罰せられるときに知らないでいるほうが、どれだけよいか。善人が滅びるときにも知ることにならないように」と言ったあと、「では異教徒の中にも善人がいるのか」とキリスト者が口をはさまないよう、「彼らが善を味わうとすれば、だが」と自分で言い直した、すなわちキリストに属さない人々に少しでも善の味があるとすれば、の意味だ、と言う。続く文では、もはや「善人」と言わず「罪のない者」と言い、断罪されたのではなく自分から剣闘士の養成所（ludus）に来る者を指す、と言う。Oehler は、A の veneunt（すなわち「身を売る」auctorantur）がすぐれた読みで、通行の veniunt に代えてためらわず戻した、と言う。
- 読者への影響：中 — si tamen bonum sapiunt は、注 a のとおり、異教徒を「善人」と呼んだことへの留保で、「善を味わうなら（善がわかるなら）、だが」。これを取り違えると意味が通らない。veneunt は「売られる、身を売る」で、訳語表の locare ad gladium／se auctorare（「身売りさせる」「身を売る」、『殉教者たちへ』5.1〜5.2）と同じ事柄。veniunt なら「やって来る」。
- 訳での扱い：訳注は付けない。veneunt は「身を売る」の類いで、『殉教者たちへ』の訳語と揃える。ludus は剣闘士の「養成所」で、訳語表の ludi（遊戯）、ludus（遊び）と別の意味なので、訳し分ける（「メインで決めること」）。hostiae は 17.3 と同じ「いけにえ」。
- 確かめた資料：`page/n79_w1600.jpg` の上半分（本文、校注 12・13）、下半分（校注、注 a の初め）、`page/n80_w1600.jpg` の上半分（本文、校注 14）、下半分（注 a の続き）。OCR l. 7168–7177、7201、7224–7225、7252–7253、7265、7314、7324–7343。CSEL l. 1624–1627、1639–1640。Migne l. 59474–59476。ANF l. 7246–7250（どの読みで訳したかだけ）。

### 19.5 Etiam qui damnantur in ludum, quale est, ut de leviore delicto in homicidas emendatione proficiant?（emendatio は「刑罰」）
- 底本（Oehler）：Etiam qui damnantur in ludum, quale est, ut de leviore delicto in homicidas emendatione proficiant? Sed haec ethnicis respondi. Ceterum absit, ut de istius spectaculi aversione diutius discat Christianus.
- ほかの読み（19 章の校注 15・16、p. 51）：A は de を欠く。A は haec を欠く。CSEL も同じ本文で、homicidiis を推定として挙げる。
- 採る校訂者：注 b（p. 51）は quale est に『迫害のときの逃亡について』5 章への注を見よとする。注 c（p. 51、La Cerda）は、罰せられた軽い罪から、人殺しになることを学ぶ場所へ連れて行かれ、それはもっと重い罪なのだから、「あなたがたは悪い風俗を正しているのではなく、悪い風俗を進ませている」と言う。Oehler は、emendatio はここでは「刑罰」の意味で、『護教論』46 章（デモクリトスが女を欲なしに見られないので自分の目をつぶし、その不節制を罰した、の emendatione）と同じだと言う。
- 読者への影響：中 — 「養成所送りに定められる者たちについても、なんということか、軽い罪から、刑罰によって人殺しへと進むとは」。emendatio を「矯正、改善」と取ると、皮肉の向きが逆に読める。注 c のとおり、刑罰が罪を重くする皮肉。
- 訳での扱い：訳注は付けない。emendatio は注 c の Oehler のとおり「刑罰」の類いで、「改める」の皮肉が残るなら残す。quale est は「なんということか」の類い。
- 確かめた資料：`page/n80_w1600.jpg` の上半分（本文、校注 15・16）、下半分（注 b・c）。OCR l. 7268–7280、7356、7381、7345–7354、7393–7399。CSEL l. 1626–1629、1640–1641。

### 19.6 Quamquam nemo haec omnia plenius exprimere potest, nisi qui adhuc spectat. Malo non implere, quam meminisse.（implere と meminisse）
- 底本（Oehler）：Quamquam nemo haec omnia plenius exprimere potest, nisi qui adhuc spectat. Malo non implere, quam meminisse.
- ほかの読み（19 章の校注 17・18、p. 51）：Aβ は quanquam。B は malum。CSEL も同じ本文。
- 採る校訂者：注 d（p. 51）は、implere は直前の plenius exprimere を受けると言い、キプリアヌスの著作に入っている作者不明の書簡『見世物について』の「掟の中には、黙っておくほうがよいものがある。禁じられることで、かえって思い出させるからだ」を参考に挙げる。
- 読者への影響：中 — 「もっとも、これらすべてをもっと十分に言い表せるのは、今も見物している人だけだ。わたしは、思い出すより、言い尽くさないほうを選ぶ」。implere（言い尽くす、書き満たす）が plenius exprimere を受けることが分からないと、「満たさない」の意味が取れない。書き手自身が以前は見物していた、と読める言い方で、ANF の英訳者の注も、書き手が異教徒だったことを示す句と見る（ANF l. 7262–7263。事実の確認だけ）。
- 訳での扱い：訳注は付けない。implere は「言い尽くす」の類いで、plenius exprimere と語の形がつながるように訳す。
- 確かめた資料：`page/n80_w1600.jpg` の上半分（本文、校注 17・18）、下半分（注 d）。OCR l. 7283–7294、7314–7315、7401–7407。CSEL l. 1650–1652、1682。ANF l. 7256–7263。

---

## 未確認

- 17.2 の eius dei：Oehler が de を dei と意図して直したのか、刷りの誤りかは確かめられない。Oehler の校注にも注にも記載がなく、CSEL と Migne は de、ANF の英訳は「その神の」と訳す。Oehler のほかの版（1854 年の小型版など）は見ていない。同じ巻の別の注（djvu l. 9600–9606）で Oehler はこの文を引くが、quam (sc. spurcitiam) denique pantomimus … の後半だけで、dei と minus のところは引かない。minus のほうは、CSEL・Migne が mimus と読み、Oehler に記載がないので、刷りの誤りの見込みが高いが、Oehler の別の版では確かめていない。
- 14.2 の disseruntur：Oehler は注を付けず、どの意味（振り分けられる、論じられる）で採ったかは確かめていない。
- 16.5：CSEL の欄外の「cf. Matth. 20, 14.」が、この文のどの語とどう関わるかは確かめていない（Oehler は挙げない）。
- 16.7 の principibus：Oehler の注 g が送る『護教論』38 章には principes の語がなく、観客がだれを容赦しないのか（皇帝か、町の有力者か）は確かめていない。
- 17.4 の semel anno：年に一度をフローラ祭とするのは、注 g の Oehler の推測（puto）。
- 19.1 の Si tales sumus, quales dicimur：キリスト者が人の血を好むという噂を指すとみられるが、Oehler にも CSEL にも注はなく、確かめていない。
- Oehler の注が送る先の注（15 章の注 b の『兵士の冠について』13 章、注 e と 17 章の注 h の『兵士の冠について』15 章、17 章の注 l の『魂について』57 章、19 章の注 b の『迫害のときの逃亡について』5 章など）は読んでいない。
