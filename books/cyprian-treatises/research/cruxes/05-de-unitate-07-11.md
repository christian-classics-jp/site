# 05-de-unitate-07-11 の論点（7〜11）

略号と資料の所在は [README.md](README.md)。『一致について』の略号の表は p. 208（`page/n218_w1600.jpg`）。読んだ画像は p. 215〜220 の archive.org のページ画像 `page/n225_w1600.jpg`〜`page/n230_w1600.jpg`（`cache/archive.org/sthascicaecilic00hartgoog/`）。本文の隔字体と、聖書の箇所の行と校注は、これを `node tools/image.js crop` で切り出して読んだ（切り出しは cache に残していない）。OCR の行：p. 215 は本文 l. 10212–10227・箇所 l. 10229・校注 l. 10234–10242（校注 1〜10 は 6 章で、04-de-unitate-01-06 で扱った）、p. 216 は本文 l. 10248–10272・箇所 l. 10274–10275・校注 l. 10277–10287、p. 217 は本文 l. 10293–10325・箇所 l. 10327・校注 l. 10329–10338、p. 218 は本文 l. 10344–10370・箇所 l. 10372・校注 l. 10374–10382、p. 219 は本文 l. 10388–10415・箇所 l. 10417・校注 l. 10419–10430、p. 220 は本文 l. 10436–10437・校注 l. 10465（このページの範囲は校注 1 だけ）。OCR は略号の R を B、G を O・0 と読むことが多い。略号はすべて画像で読んだ。

聖書の箇所の行（Hartel）：p. 215 の 16 Io. 19, 23 sq.／p. 216 の 3 I Reg. 11, 31, 32, 36.、18 Io. 10, 16.、21 I Cor. 1, 10.、25 Eph. 4, 2 sq.／p. 217 の 5 Ios. 2, 18 sq.、11 Ex. 12, 46.、15 Ps. 67, 7.／p. 218 の 11 I Io. 2, 19.、20 I Cor. 11, 19.／p. 219 の 6 Hier. 23, 16—17, 21—22.、16 Hier. 2, 13.／p. 220 の範囲（1〜2 行）にはなし。隔字体で刷られているのは、この箇所の行が指す聖句の部分だけ。10.3 の sedentes in pestilentiae cathedra と quorum sermo ut cancer serpit は普通の文字で刷られ、箇所の行もない。

この範囲では S はもうない（5.3 で終わる。README）。V は刊本の編者の報告によるもので、校注に名がないことは V が底本と一致することを意味しない。

---

### 7.1 tunica Domini … quis Christum potius indueret（「キリストを着る」の句と小さな異読）
- 底本（Hartel）：Hoc unitatis sacramentum, hoc uinculum concordiae inseparabiliter cohaerentis ostenditur, quando in euangelio tunica Domini Iesu Christi non diuiditur omnino nec scinditur, sed sortientibus de ueste Christi, quis Christum potius indueret, integra uestis accipitur et incorrupta adque indiuidua tunica possidetur.
- ほかの読み（p. 215 の校注 11〜15）：unitatis は G が unitas。sacramentum を G¹ が欠く。cohaerentis は R が cohaerens、M が coherentes。ostenditur は M が ostendit。Domini Iesu Christi は GM が dni nri（Domini nostri Iesu Christi）。quis は M¹ が qui。Christum potius は G が potius christum、Baluzius が christum（potius がない）、v が ipsam potius（「だれがむしろそれを着るか」）。indueret は R が induceret。14 行目の integra uestis の uestis は、M では後の手が ueste から直した uestes。adque は R が et。indiuidua は W だけ、indiuisa は GMVRv。
- 構文と語：quis Christum potius indueret は、兵士たちが「だれがキリストを着るか」をくじで決めた、という言い方で、7.5 の qui Christum induimus（キリストを着たわたしたち）とガラテヤ三・二七 の「キリストを着た」（口語訳）に掛けている（この一覧の観察）。v の ipsam（衣そのもの）や Baluzius の potius を除いた形は、この掛け言葉を平らにして「だれが衣を着るか」にする読み。ANF の脚注 [3119]（anf05.txt l. 42729–42733）は、この句の読みが分かりにくいと言い、ipsam と potius を除いた刊本の形を挙げる。
- 訳語：tunica（7.1、7.2、7.5）は、口語訳ヨハネ一九・二三 では「下着」、uestis は「衣」、7.4 の indumentum も衣、7.4〜7.5 のアヒヤの uestimentum は口語訳列王紀上一一・三〇 の「着物」。7.1 の sacramentum は本の訳語表の「秘儀」（4.6 の「一致の秘儀」）。7.5 の sacramento uestis と 8.5 の sacramentum Paschae も同じ語。
- 採る校訂者：Hartel は写本の Christum potius を採り、indiuidua は W だけに従う。
- 読者への影響：中 — 底本の形では、くじが「だれがキリストを着るか」を決めるという比喩になり、7.5 の「キリストを着たわたしたち」とつながる。刊本の形ではこのつながりが消える。
- 訳での扱い：訳注は付けない。底本どおり「キリストを着る」を残し、7.5 の Christum induimus と同じ動詞で訳す。tunica を口語訳の「下着」にするかは「メインで決めること」。レビュアーには、英訳がこの句で迷っていること（脚注 [3119]）を伝える。
- 確かめた資料：p. 215（`page/n225_w1600.jpg`）の本文 11〜15 行と校注 11〜15。OCR l. 10212–10217、10234–10238。ANF l. 42136–42141、42729–42733。`node tools/bible.js Gal.3.27 John.19.23-24 1Kgs.11.29-30`。

### 7.2 ヨハネ一九・二三〜二四 の引用（「上の方から」の語）
- 底本（Hartel）：loquitur ac dicit scriptura diuina: de tunica autem, quia de superiore parte non consutilis sed per totum textilis fuerat, dixerunt ad inuicem: non scindamus illam sed sortiamur de ea, cuius sit.
- ほかの読み（p. 215 の校注 16〜17）：ac dicit は R が et dicit、G¹ が adicit。de（de tunica）を R が欠く。superiore は G が superiora。consutilis は R が cossutilis、M が consutilis erat。
- 引用：箇所の行は Io. 19, 23 sq.、隔字体は de tunica autem … cuius sit。口語訳ヨハネ一九・二三〜二四 の「縫い目がなく、上の方から全部一つに織ったもの」「それを裂かないで、だれのものになるか、くじを引こう」と要素は同じで、兵士が上着を四つに分けた話と、詩篇の成就の句を除く。
- 論とのつながり：7.3 は de superiore parte（上の方から）を de caelo（天から）、a patre（父から）と読み替える。訳では、引用の「上の方から」と 7.3 の「上の方から来る」が同じ語に見える必要がある。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言（「上の方から」「裂かないで」「だれのものになるか、くじを引こう」）を下敷きにして『』に入れ、出典は（ヨハネ一九・二三〜二四）。7.3 の de superiore parte も「上の方から」で受ける。
- 確かめた資料：p. 215（`page/n225_w1600.jpg`）の本文 15〜19 行（隔字体の範囲）・箇所の行・校注 16〜17。OCR l. 10217–10221、10229、10238–10239。`node tools/bible.js John.19.23-24`。

### 7.3 unitatem ille portabat（ille か illa か、主語の取り方）
- 底本（Hartel）：unitatem ille portabat de superiore parte uenientem id est de caelo et a patre uenientem quae ab accipiente ac possidente scindi omnino non poterat, sed totam semel et solidam firmitatem inseparabiliter obtinebat.
- ほかの読み（p. 215 の校注 19〜23）：ille は W² と v が illa（女性形で tunica を受ける「その下着は」）。superiore は M が superiori。uenientem（20 行目）は R が ueniente。ac は W が et。sed totam を G が二度書く。semel は v が simul。et（et solidam）を R が欠く。solidam firmitatem は G が solida firmitate。poterat は R が poterit。
- 構文：底本の ille は男性形で、女性名詞の tunica とは性が合わない。前後で男性の名詞はキリストだけなので、ille は「あの方（キリスト）は、上から、すなわち天と父から来る一致を身に帯びておられた」と読める。illa なら「その下着は一致を帯びていた」。後半の quae … obtinebat の主語は quae（unitatem を受ける）で、「その一致は、受け取り持つ者によって裂かれえず、全体として一度に、堅く、分かたれずに保たれていた」。ANF の英訳は、主語を衣とし（illa の読みの向き）、obtinebat を一人称複数の動詞のように訳している（anf05.txt l. 42144–42147）。
- 採る校訂者：Hartel は W の最初の手と GMR の ille を採る（校注は W²v の illa だけを挙げる）。a patre を小文字で刷るのは刷りの事情（`research/sources.md`）。
- 読者への影響：中 — 「キリストが一致を帯びておられた」か「下着が一致を帯びていた」かで、文の主語が変わる。どちらでも、下着が天から来る一致のしるしだという筋は同じ。
- 訳での扱い：訳注は付けない。底本の ille で訳すなら、主語をキリストとし、尊敬語にする（「帯びておられた」）。ille を下着と取る（男性形を性の不一致とみる）かは訳者が決める。a patre は「父から」で、底本の小文字にかかわらず父なる神。レビュアーには、英訳が illa の向きで、obtinebat を「わたしたち」の動詞にしていることを伝える。
- 確かめた資料：p. 215（`page/n225_w1600.jpg`）の本文 19〜23 行と校注 19〜23。OCR l. 10221–10226、10239–10241。ANF l. 42144–42147。

### 7.4 列王紀上一一・三一〜三二、三六 の引用（「二つの杖」と七十人訳）
- 底本（Hartel）：contra denique cum Salomone moriente regnum eius et populus scinderetur, Achias propheta Hieroboam regi obuius factus in campo in duodecim scissuras uestimentum suum discidit dicens: sume tibi decem scissuras, quia haec dicit Dominus: ecce scindo regnum de manu Salomonis et dabo tibi decem sceptra, et duo sceptra erunt ei propter seruum meum Dauid et propter Hierusalem ciuitatem quam elegi, ut ponam nomen meum illic.
- ほかの読み（p. 215 の校注 24、p. 216 の校注 1〜7）：Salomone moriente は G¹ が solomone morientem。populus は R が populum。Achias は M が a·hia（一字を削った跡）、R が aczas（acazias から直したもの）。Hieroboam は G が iheroboam。obuius は GM が obuiam。discidit は R が discindit、M が scindit。tibi の後に W は 5 字ほどを削った跡がある（校注は点を並べて示す）。decem sceptra は R が sceptra decem、M が x tribus（「十の部族」）。et duo sceptra erunt は M が Porro una tribus remanebit（「しかし一つの部族が残る」。後の手が削った跡の上に書いたもの）。ei は W にあり、M では後の手が行の上に書く。propter seruum meum Dauid は G が propter propter dauid seruum meum。Hierusalem は G が iherusalem。ponam は R が ponat。
- 引用：箇所の行は I Reg. 11, 31, 32, 36、隔字体は sume tibi … illic。三つの節を一つにした引用で、ut ponam nomen meum illic は三六節の句。キプリアヌスの文言は七十人訳（Swete の三列王記一一・三一〜三二：Λάβε σεαυτῷ δέκα ῥήγματα … δώσω σοι δέκα σκῆπτρα, καὶ δύο σκῆπτρα ἔσονται αὐτῷ διὰ Δαυεὶδ τὸν δοῦλόν μου καὶ διὰ Ἰερουσαλὴμ τὴν πόλιν ἣν ἐξελεξάμην、三六節 τοῦ θέσθαι ὄνομά μου ἐκεῖ）に近く、七十人訳も「十の杖」「二つの杖」と言う。ただしキプリアヌスの句には、七十人訳にも口語訳にもある「イスラエルの神」（haec dicit Dominus の後）と、エルサレムを選んだのが「イスラエルのすべての部族のうちから」であることがない。口語訳は「十部族」「一つの部族」（一一・三一〜三二）で、残る数が違う。M の後の手の una tribus（一つの部族）は、口語訳の数え方と同じ向きに直したもの。
- 名前：口語訳の表記はアヒヤ、ヤラベアム、ソロモン、ダビデ、エルサレム（列王紀上一一・二九〜三二）。このリポジトリの『オリゲネス「祈りについて」』の名前の表も Ἱεροβοάμ を「ヤラベアム」とする。
- 採る校訂者：Hartel は写本の大多数の duo sceptra（七十人訳の形）。
- 読者への影響：中 — 口語訳を引いた読者は「一つの部族」を見るので、「二つ」と食い違う。キプリアヌスの論（十二に裂かれた衣と、裂かれない主の下着の対比）には響かない。
- 訳での扱い：原文の数（十と二）のまま訳し、口語訳の「一つ」に揃えない（`// ` メモに口語訳との違いを書く）。sceptra を口語訳の「部族」とするか、原文の語の「杖」とするかは「メインで決めること」（7.5 の duodecim tribus「十二の部族」とのつながりを見る）。訳注は付けないことを勧める（論が数に立たない。付けるなら案：「今の聖書では、残るのは一つの部族とされる。」20 字）。出典は（列王紀上一一・三一〜三二、三六）。
- 確かめた資料：p. 215（`page/n225_w1600.jpg`）の本文 24 行と校注 24。p. 216（`page/n226_w1600.jpg`）の本文 1〜8 行（隔字体の範囲）・箇所の行・校注 1〜7。OCR l. 10227、10242、10248–10255、10274、10277–10281。Swete I の三列王記一一・三〇〜三二（l. 66787–66791、66805、66835）、三六（l. 66850–66854）。`node tools/bible.js 1Kgs.11.29-32 1Kgs.11.36`。

### 7.5 indiuidua, copulata, conexa ostendit … declarauit（形容詞のかかり先）
- 底本（Hartel）：cum duodecim tribus Israel scinderentur, uestimentum suum propheta Achias discidit. at uero quia Christi populus non potest scindi, tunica eius per totum textilis et cohaerens diuisa a possidentibus non est: indiuidua, copulata, conexa ostendit populi nostri qui Christum induimus concordiam cohaerentem. sacramento uestis et signo declarauit ecclesiae unitatem.
- ほかの読み（p. 216 の校注 8〜13）：cum … Israel を R が欠く。tribus を W が欠く。scinderentur は R が scinderetur。Achias は R¹ が achaias、M が ahia。discidit は M が scindit。cohaerens（11 行目）は G¹ が coherentes。indiuidua, copulata, conexa は V が indiuiduam copulatam connexam（対格で concordiam にかかる）。cohaerentem は R が coherentes。declarauit は W¹ が declaruit。
- 構文：底本の主格の三つの形容詞は tunica を受け、「その下着は、分かたれず、結び合わされ、つながったまま、わたしたちの民の結びついた和合を示した」。V の対格なら「分かたれず、結び合わされ、つながった和合を示した」。最後の declarauit の主語は書かれておらず、文脈ではキリスト（あるいは神）。
- 採る校訂者：Hartel は写本の大多数の主格。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。三つの形容詞は下着にかけて訳す。declarauit は主語をキリストとして補い、尊敬語にする（本の「文型の訳し方」の「お〜になる」）。qui Christum induimus は 7.1 の「キリストを着る」と同じ動詞（ガラテヤ三・二七 の暗示。出典は付けない）。
- 確かめた資料：p. 216（`page/n226_w1600.jpg`）の本文 8〜14 行と校注 8〜13。OCR l. 10255–10261、10281–10283。

### 8.1〜8.2 et erunt unus grex et unus pastor（ヨハネ一〇・一六）
- 底本（Hartel）：8.1 Quis ergo sic sceleratus et perfidus, … ut aut credat scindi posse aut audeat scindere unitatem Dei, uestem Domini, ecclesiam Christi? 8.2 monet ipse in euangelio suo et docet dicens: et erunt unus grex et unus pastor. et esse posse uno in loco aliquis existimat aut multos pastores aut greges plures?
- ほかの読み（p. 216 の校注 15〜20）：sic（15 行目の Quis ergo sic）は v が sic est。uestem Domini（17 行目）は G が uestem dominicam。et（docet の前）を R が欠く。erunt は W（V は記されていない）、erit は GMRv。posse は R が se。uno in loco は M が in uno。existimat は G が exestimet。greges plures は v が plures greges。
- 引用：箇所の行は Io. 10, 16、隔字体は et erunt … pastor。口語訳ヨハネ一〇・一六 の終わりの「ついに一つの群れ、ひとりの羊飼となるであろう」。
- 採る校訂者：Hartel は W の erunt。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言で『』に入れ、続く問いの pastores・greges も「羊飼」「群れ」で受ける。
- 確かめた資料：p. 216（`page/n226_w1600.jpg`）の本文 15〜20 行・箇所の行・校注 15〜20。OCR l. 10262–10267、10274、10284–10286。`node tools/bible.js John.10.16`。

### 8.3 obsecro … non sint in uobis schismata（第一コリント一・一〇 と schismata の訳語）
- 底本（Hartel）：apostolus item Paulus hanc eandem nobis insinuans unitatem obsecrat et hortatur et dicit: obsecro, inquit, uos, fratres, per nomen Domini nostri Iesu Christi, ut id ipsum dicatis omnes et non sint in uobis schismata: sitis autem compositi in eodem sensu et in eadem sententia.
- ほかの読み（p. 216 の校注 20〜23）：item は M が idem。et（21 行目の et hortatur）を M が欠く。et dicit は v が dicens。per は W が propter。id は M で後の手が行の上に書く。ipsum は R が ipsut。
- 引用：箇所の行は I Cor. 1, 10、隔字体は obsecro … sententia（inquit を除く）。口語訳第一コリント一・一〇 と要素は同じ。口語訳は schismata にあたる語を「分争」と訳す。本の訳語表は schismata を「分裂」とし（3.2 の haereses et schismata）、12 章でも haereses et schismata が並ぶ（p. 220 の 23 行目）。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言を下敷きにして『』に入れ、出典は（第一コリント一・一〇）。schismata を口語訳の「分争」にするか、訳語表の「分裂」にするかは「メインで決めること」。
- 確かめた資料：p. 216（`page/n226_w1600.jpg`）の本文 20〜25 行・箇所の行・校注 20〜23。OCR l. 10267–10272、10274、10286–10287。`node tools/bible.js 1Cor.1.10`。

### 8.4 sustinentes … unitatem spiritus（エペソ四・二〜三 と spiritus の訳）
- 底本（Hartel）：et iterum dicit: sustinentes inuicem in dilectione, satis agentes seruare unitatem spiritus in coniunctione pacis. stare tu et uiuere putas posse de ecclesia recedentem, sedes sibi alias et diuersa domicilia condentem?
- ほかの読み（p. 216 の校注 25、p. 217 の校注 2〜4）：sustinentes は W¹ が sustinetis。tu は R が te、G が欠く。sedes は R が sedet。condentem は R が condentes。
- 引用：箇所の行は Eph. 4, 2 sq.、隔字体は sustinentes … pacis。口語訳エペソ四・二〜三 の「愛をもって互に忍びあい、平和のきずなで結ばれて、聖霊による一致を守り続けるように努めなさい」と要素は同じ。底本は spiritus を小文字で刷る。口語訳は「聖霊による一致」。本の決まりでは、小文字の spiritus（洗礼で受ける霊）は「霊」で尊敬語を付けない。4.6 のエペソ四・四 の unus spiritus は口語訳の「御霊も一つ」を借りた（04-de-unitate-01-06 の 4.6 の項）。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言を下敷きにして『』に入れ、出典は（エペソ四・二〜三）。unitatem spiritus を口語訳の「聖霊による一致」にするか、「御霊の一致」「霊の一致」にするかは「メインで決めること」。unitas は訳語表の「一致」。
- 確かめた資料：p. 216（`page/n226_w1600.jpg`）の本文 25 行と校注 25。p. 217（`page/n227_w1600.jpg`）の本文 1〜4 行（隔字体の範囲）と校注 2〜4。OCR l. 10272、10287、10293–10296、10329。`node tools/bible.js Eph.4.2-3`。

### 8.5 cum dictum sit ad Rhaab … reus sibi erit（ヨシュア二・一八〜一九、主文のない文）
- 底本（Hartel）：cum dictum sit ad Rhaab, in qua praeformabatur ecclesia: patrem tuum et matrem tuam et fratres tuos et totam domum patris tui colliges ad te ipsam in domum tuam, et erit omnis qui exierit ostium domus tuae foras, reus sibi erit, item sacramentum Paschae nihil aliud in Exodi lege contineat quam ut agnus qui in figura Christi occiditur in domo una edatur.
- ほかの読み（p. 217 の校注 4〜10）：Rhaab は WGM が raab（R は記されていない。底本の綴りは刷られたとおり。`research/sources.md`）。et（fratres の前）を R が欠く。ad は M が et。ipsam は G¹ が ipsum。in（in domum tuam）は W で後の手が行の上に書く。erit（7 行目、et erit omnis の erit）を Baluzius が除いた。contineat は M が contineatur。Deus（10 行目の loquitur Deus）は M が dns（Dominus）。
- 引用：箇所の行は Ios. 2, 18 sq.、隔字体は patrem tuum … reus sibi erit。文言は七十人訳（Swete のヨシュア二・一八〜一九：τὸν δὲ πατέρα σου … συνάξεις πρὸς σεαυτὴν εἰς τὴν οἰκίαν σου. καὶ ἔσται πᾶς ὃς ἂν ἐξέλθῃ τὴν θύραν τῆς οἰκίας σου ἔξω, ἔνοχος ἑαυτῷ ἔσται）に、初めの δέ を除いてほぼ一語ずつ重なり、erit が二度出るのも七十人訳の ἔσται … ἔσται と同じ。口語訳は「あなたの父母、兄弟、およびあなたの父の家族をみなあなたの家に集めなさい」「ひとりでも家の戸口から外へ出て、血を流されることがあれば、その責めはその人自身のこうべに帰す」で、「血を流される」の条件がある。reus sibi erit（自分で責めを負う）は口語訳の「その責めはその人自身のこうべに帰す」と同じ向き。
- 構文：cum dictum sit …, item … contineat は、cum に導かれる二つの節（「ラハブにこう言われ、また出エジプト記の律法も…を含んでいるのだから」）だけで、主文がない。8.4 の問い（stare tu et uiuere putas posse …?「教会を離れて立ち、生きられると思うのか」）の理由を後から添える形。節の番号はこの訳で付けたもので（本の `AGENTS.md`）、8.4 と 8.5 は一続きに読む必要がある。
- 名前：口語訳の表記はラハブ（ヨシュア二・一）。
- 採る校訂者：Hartel は写本の erit を二度とも残す。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。引用は口語訳を下敷きにして原文の長さに合わせ、二つの erit は一つにまとめてよい（『』に入れ、出典は（ヨシュア二・一八〜一九）。口語訳の「血を流されることがあれば」がないことは `// ` メモに書ける）。8.5 は主文がないので、「〜と言われ、また〜のですから」で 8.4 の問いを受ける形にするか、文を立て直すかは訳者が決める。in qua praeformabatur ecclesia は、ラハブが教会の前ぶれ（予型）であったという意味。
- 確かめた資料：p. 217（`page/n227_w1600.jpg`）の本文 4〜10 行（隔字体の範囲）・箇所の行・校注 4〜10。OCR l. 10296–10304、10327、10329–10331。Swete I のヨシュア二・一八〜一九（l. 41029–41033）。`node tools/bible.js Josh.2.1 Josh.2.18-19`。

### 8.6 in domo una comedetur（出エジプト一二・四六）
- 底本（Hartel）：loquitur Deus dicens: in domo una comedetur, non eicietis de domo carnem foras. caro Christi et sanctum Domini eici foras non potest nec alia ulla credentibus praeter unam ecclesiam domus est.
- ほかの読み（p. 217 の校注 10〜11）：Deus は M が dns（Dominus）。non は M が et non。eicietis は G が eicitis、M が eicietur。de domo carnem は R が carnem de domo、M が caro… de domo（語尾に削った跡）。
- 引用：箇所の行は Ex. 12, 46、隔字体は in domo una … foras。七十人訳（Swete：ἐν οἰκίᾳ μιᾷ βρωθήσεται, καὶ οὐκ ἐξοίσετε ἐκ τῆς οἰκίας τῶν κρεῶν ἔξω）と同じ形で、口語訳出エジプト一二・四六 の前半（「ひとつの家でこれを食べなければならない。その肉を少しも家の外に持ち出してはならない」）と要素は同じ。骨を折らない後半は引かない。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言を下敷きにして『』に入れ、出典は（出エジプト一二・四六）。sanctum Domini（主の聖なるもの）は過越の小羊の肉を言い、続く caro Christi と並ぶ。
- 確かめた資料：p. 217（`page/n227_w1600.jpg`）の本文 10〜13 行（隔字体の範囲）・箇所の行・校注 10〜11。OCR l. 10304–10307、10327、10331–10332。Swete I の出エジプト一二・四六（l. 13386–13387）。`node tools/bible.js Exod.12.46`。

### 8.7 Deus qui inhabitare facit unanimes in domo（詩篇六七・七 の七十人訳の形）
- 底本（Hartel）：hanc domum, hoc unanimitatis hospitium designat et denuntiat Spiritus sanctus in psalmis dicens: Deus qui inhabitare facit unanimes in domo. in domo Dei, in ecclesia Christi unanimes habitant, concordes et simplices perseuerant.
- ほかの読み（p. 217 の校注 14〜17）：hanc domum は W が domum hanc。denuntiat は M が nuntiat。spiritus … psalmis を R が欠く。in domo（16 行目）を R が欠く。unanimes（17 行目）は R と G¹ が unianimes。habitant は M が inhabitant、G が habitent。
- 引用：箇所の行は Ps. 67, 7、隔字体は Deus qui … in domo。七十人訳の数え方で、口語訳では詩篇六八・六。Swete の七十人訳は ὁ θεὸς κατοικίζει μονοτρόπους ἐν οἴκῳ で、キプリアヌスの unanimes は μονοτρόπους の位置に立つ（μονότροπος の語義は辞書で確かめていない。末尾の「未確認」）。口語訳は「神は寄るべなき者に住むべき家を与え」で、unanimes（心を一つにする者）の意味の語がない。直後の論（unanimes habitant、unanimitatis hospitium）は unanimes の語に立つ。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：中 — 口語訳を引いた読者は、六八・六 に「心を一つにする者」を見つけられず、「寄るべなき者」を見る。04 の 6.5（第一ヨハネ五・七）と同じく、出典を引いても句が見つからない。
- 訳での扱い：論が unanimes に立つので、口語訳を下敷きにしつつ原文の語に替える（「心を一つにする者たちを家に住まわせる神」の向き。『テルトゥリアヌス小品集』の『見世物について』3 章の詩篇一・一 の型）。出典は（詩篇六八・六）とし、`// ` メモに箇所の行の Ps. 67, 7 は七十人訳の数え方であることと、口語訳の文言を書く。訳注を付けることを勧める。注の案：「今の聖書では、寄るべなき者に家を与えると読む。」（22 字）。付けない場合も、メモには必ず口語訳との違いを書く。
- 確かめた資料：p. 217（`page/n227_w1600.jpg`）の本文 14〜17 行（隔字体の範囲）・箇所の行・校注 14〜17。OCR l. 10308–10312、10327、10332–10335。Swete II の詩篇六七・七（l. 26140）。`node tools/bible.js Ps.68.6`。

### 9.1 in columba uenit Spiritus sanctus … diligere, nosse, edere（はとのたとえ、支配する動詞のない不定詞）
- 底本（Hartel）：Idcirco et in columba uenit Spiritus sanctus: simplex animal et laetum est, non felle amarum, non morsibus saeuum, non unguium laceratione uiolentum, hospitia humana diligere, unius domus consortium nosse, cum generant simul filios edere, cum commeant uolatibus inuicem cohaerere, communi conuersatione uitam suam degere, oris osculo concordiam pacis agnoscere, legem circa omnia unanimitatis inplere.
- ほかの読み（p. 217 の校注 18〜23）：columba は V が columbam。est を v が欠く。edere（21 行目）の上に、M の後の手が alere（養う）と書く。cum（commeant の前）は W で後の手が行の上に書き、G は欠く。commeant は W が comm··eunt（削った跡）。uolatibus は M と W¹ が uolatilibus。agnoscere は M が agnuscere。
- 構文：diligere 以下の七つの不定詞は、支配する動詞を持たず、はとの習いを並べる形（「人の住まいを好み、一つの家の交わりを知り、…」）。v が est を欠くと、simplex animal et laetum が後の不定詞と一続きの説明になる。
- 暗示（この一覧の観察）：聖霊がはとのように下ったことはマタイ三・一六、ヨハネ一・三二（口語訳「御霊がはとのように」）に重なる。Hartel は箇所を挙げず、隔字体でもない。non felle amarum（胆汁で苦くない）は、テルトゥリアヌス『洗礼について』8.3 の、はとには体のつくりでも胆汁がないという言い方に通じる（`books/tertullian-treatises/research/oehler-1853-de-baptismo.txt` の 8.3。このリポジトリの訳は `src/15-de-baptismo-05-08/both.md` の 8:3 で「鳩」「胆汁そのものを持たない」）。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。不定詞は、はとの習いを言う現在の文として並べる。マタイ三・一六 の暗示には、『』も出典も付けない（本の決まりの名指しのない暗示）。columba と felle は、『テルトゥリアヌス小品集』の『洗礼について』8:3 の訳（「鳩」「胆汁」）と言い方を揃えられる。
- 確かめた資料：p. 217（`page/n227_w1600.jpg`）の本文 18〜24 行と校注 18〜23。OCR l. 10314–10321、10335–10337。`node tools/bible.js Matt.3.16 John.1.32`。

### 9.2〜9.3 columbas … agnis et ouibus … luporum feritas（暗示と小さな異読）
- 底本（Hartel）：haec est in ecclesia noscenda simplicitas, haec caritas obtinenda, ut columbas dilectio fraternitatis imitetur, ut mansuetudo et lenitas agnis et ouibus aequetur. quid facit in pectore christiano luporum feritas et canum rabies et uenenum letale serpentum et cruenta saeuitia bestiarum? 9.3 gratulandum est, cum tales de ecclesia separantur, ne columbas, ne oues Christi saeua sua et uenenata contagione praedentur.
- ほかの読み（p. 217 の校注 25〜27、p. 218 の校注 1〜3）：dilectio は G¹ が dilectione。aequetur は G が adequetur。canum rabies は G が rabies canum。rabies et uenenum を R が欠く。sua を M が欠く。
- 暗示（この一覧の観察）：はと・羊・おおかみ・へびの組は、マタイ一〇・一六（「羊をおおかみの中に送るようなもの」「へびのように賢く、はとのように素直であれ」）とマタイ七・一五（「強欲なおおかみ」）を思わせる。Hartel は箇所を挙げない。
- 採る校訂者：Hartel は写本の大多数。
- 読者への影響：小。
- 訳での扱い：訳注は付けず、『』も出典も付けない。simplicitas は 1.1 の simplices（素直）と同じ語族なので、04 で決めた訳語に揃える。
- 確かめた資料：p. 217（`page/n227_w1600.jpg`）の本文 24〜27 行と校注 25〜27。p. 218（`page/n228_w1600.jpg`）の本文 1〜4 行と校注 1〜3。OCR l. 10321–10325、10337–10338、10344–10347、10374。`node tools/bible.js Matt.10.16 Matt.7.15`。

### 9.4 triticum non rapit uentus … turbinis incursione（「打撃」の読みと、もみがらの暗示）
- 底本（Hartel）：nemo existimet bonos de ecclesia posse discedere: triticum non rapit uentus nec arborem solida radice fundatam procella subuertit: inanes paleae tempestate iactantur, inualidae arbores turbinis incursione uertuntur.
- ほかの読み（p. 218 の校注 7〜10）：existimet は R が extimet。non rapit は W と G が cum rapit で、後の手が non を行の上に書く。subuertit は R が subuerti。tempestate は R が tempestates。inualidae は V が et inualidae。turbinis は R が turbines。incursione（襲いかかること）は G が incussione（打ちつけること）で、Hartel は「おそらく正しい」（fort. recte）と添える。uertuntur は v が euertuntur。
- 暗示（この一覧の観察）：もみがらが風に吹き散らされ、麦と分けられることは、マタイ三・一二（「麦は倉に納め、からは…焼き捨てる」）や、2.6 で見た詩篇一・四 を思わせる。10.2 の a frumento paleae separantur も同じ。Hartel は箇所を挙げない。
- 採る校訂者：Hartel は incursione を本文に残しつつ、校注で G の incussione を良い読みかもしれないとする。W・G の cum rapit は意味が通らず採らない。
- 読者への影響：小 — 「つむじ風が襲いかかって」でも「つむじ風に打たれて」でも同じ。
- 訳での扱い：訳注は付けない。底本の incursione で訳す。『』も出典も付けない。
- 確かめた資料：p. 218（`page/n228_w1600.jpg`）の本文 7〜10 行と校注 7〜10。OCR l. 10350–10353、10374–10376。`node tools/bible.js Matt.3.12`。

### 9.5 ex nobis exierunt（第一ヨハネ二・一九）
- 底本（Hartel）：hos execratur et percutit Iohannes apostolus dicens: ex nobis exierunt, sed non fuerunt ex nobis. si enim fuissent ex nobis, mansissent nobiscum.
- ほかの読み（p. 218 の校注 10〜13）：et percutit を M が欠く。Iohannes apostolus は M が apostolus iohannes。fuerunt は G が ·ierunt（e を削った跡）。mansissent nobiscum は M が nobiscum utique mansissent、v が mansissent utique nobiscum（「きっととどまっていたはずだ」）。
- 引用：箇所の行は I Io. 2, 19、隔字体は ex nobis … nobiscum。口語訳第一ヨハネ二・一九 の前半（「彼らはわたしたちから出て行った。しかし、彼らはわたしたちに属する者ではなかったのである。もし属する者であったなら、わたしたちと一緒にとどまっていたであろう」）。
- 採る校訂者：Hartel は utique のない形。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。口語訳の文言で『』に入れ、出典は（第一ヨハネ二・一九）。
- 確かめた資料：p. 218（`page/n228_w1600.jpg`）の本文 10〜13 行（隔字体の範囲）・箇所の行・校注 10〜13。OCR l. 10353–10356、10372、10376–10378。`node tools/bible.js 1John.2.19`。

### 10.1〜10.2 oportet et haereses esse（第一コリント一一・一九 と haereses の訳語）
- 底本（Hartel）：10.1 Hinc haereses et factae sunt frequenter et fiunt, dum peruersa mens non habet pacem, dum perfidia discordans non tenet unitatem. fieri uero haec Dominus permittit et patitur manente propriae libertatis arbitrio, ut dum corda et mentes nostras ueritatis discrimen examinat, probatorum fides integra manifesta luce clarescat. 10.2 per apostolum praemonet Spiritus sanctus et dicit: oportet et haereses esse, ut probati manifesti sint in uobis. sic probantur fideles, sic perfidi deteguntur, sic et ante iudicii diem hic quoque iam iustorum adque iniustorum animae diuiduntur et a frumento paleae separantur.
- ほかの読み（p. 218 の校注 14〜20）：haereses（14 行目）は WGMR が heresis（綴りの違い）。Hinc は R が hoc。ut dum corda を G が欠く。corda は v が corda nostra。haereses esse は V が esse et schismata（「異端と分裂があるべきだ」）。
- 引用：箇所の行は I Cor. 11, 19、隔字体は oportet … in uobis。口語訳第一コリント一一・一九 は「たしかに、あなたがたの中でほんとうの者が明らかにされるためには、分派もなければなるまい」で、haereses にあたる語を「分派」と訳す。本の訳語表は haereses を「異端」とし、10.1 の Hinc haereses … fiunt はこの聖句を先取りしている。10.1 の probatorum … manifesta も、聖句の probati manifesti を先に言い換えたもの。
- 構文：10.1 の ueritatis discrimen examinat の主語は discrimen（真理による試し）で、「真理の試しがわたしたちの心と思いを調べるあいだに」。
- 採る校訂者：Hartel は写本の大多数（V の et schismata を採らない）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。聖句は口語訳を下敷きにして『』に入れ、出典は（第一コリント一一・一九）。haereses を口語訳の「分派」にするか、訳語表の「異端」にして 10.1 とつなぐかは「メインで決めること」。probati・probatorum・probantur は「試された（ほんとうの）者」の同じ語で受けると、聖句と前後の論のつながりが残る。
- 確かめた資料：p. 218（`page/n228_w1600.jpg`）の本文 14〜23 行（隔字体の範囲）・箇所の行・校注 14〜20。OCR l. 10357–10366、10372、10379–10380。`node tools/bible.js 1Cor.11.19`。

### 10.3 sedentes in pestilentiae cathedra … ut cancer serpit（詩篇一・一 の七十人訳の形と、第二テモテ二・一七 の暗示）
- 底本（Hartel）：hinc sunt qui se ultro aput temerarios conuenas sine diuina dispositione praeficiunt, qui se praepositos sine ulla ordinationis lege constituunt, qui nemine episcopatum dante episcopi sibi nomen adsumunt: quos designat in psalmis Spiritus sanctus sedentes in pestilentiae cathedra, pestes et lues fidei, serpentis ore fallentes et corrumpendae ueritatis artifices, uenena letalia linguis pestiferis euomentes: quorum sermo ut cancer serpit, quorum tractatus pectoribus et cordibus singulorum mortale uirus infundit.
- ほかの読み（p. 218 の校注 23〜27、p. 219 の校注 1〜4）：hinc は WG、hic は M¹、hi（「この者たちは」）は RM²v。se（24 行目）を G が欠く。conuenas は R が conuenias、M が conuentus（削った跡の上）。dispositione は R が disputatione。praeficiunt は G が se praeficiunt。in pestilentiae は M が pestilentiae in。cathedra は W¹ が cathedram。serpentis は G¹ が serpentes。fallentes の上に M の後の手が patrantes と書く。tractatus は WGMRV、v は tractus あるいは tactus。infundit は R が infundit contra uirus infundit。
- 引用と暗示：in psalmis Spiritus sanctus と名指すが、箇所の行はなく、隔字体でもない。sedentes in pestilentiae cathedra は詩篇一・一 の七十人訳（Swete：ἐπὶ καθέδραν λοιμῶν οὐκ ἐκάθισεν「疫病の者たちの座にすわらなかった」）の形で、口語訳は「あざける者の座にすわらぬ」。続く pestes et lues fidei（信仰の疫病、伝染病）は pestilentia の語を受ける。『テルトゥリアヌス小品集』の『見世物について』3 章と 27.4 は、同じ詩篇一・一 の七十人訳の形を「疫病のような者の座」と訳している（`books/tertullian-treatises/AGENTS.md`、`src/08-de-spectaculis-26-30/both.md` の 27:4）。quorum sermo ut cancer serpit は第二テモテ二・一七（口語訳「彼らの言葉は、がんのように腐れひろがるであろう」）と同じ言い方だが、名指しも箇所の行も隔字体もない（この一覧の観察）。
- 背景：ANF の英訳者の「Argument」は、この書がノウァティアヌスの分裂を機に書かれたと言う（anf05.txt l. 41971–41980、脚注 [3098] l. 42659–42660）。qui nemine episcopatum dante episcopi sibi nomen adsumunt をその人々と結びつけるのは英訳者の見方で、Hartel の本文と校注は名を挙げない。
- 採る校訂者：Hartel は WG の hinc。
- 読者への影響：中（詩篇一・一）— 口語訳を引いた読者は「あざける者の座」を見る。ただし箇所を名指すのは「詩篇の中で」だけで、04 の 6.5 や上の 8.7 ほど食い違いは目立たない。第二テモテの暗示は小。
- 訳での扱い：訳注は付けない（付けるなら案：「今の聖書では、あざける者の座と読む。」17 字）。in psalmis Spiritus sanctus の名指しがあるので、本の決まりの 3.3 の型（名指しで言い換えるところは地の文で言い換えて出典を付け、メモに書く）で、「疫病の座にすわる者」と原文の語のまま地の文に置き、（詩篇一・一）を付け、`// ` メモに口語訳の「あざける者の座」を書く。言い方は『テルトゥリアヌス小品集』の「疫病のような者の座」に揃えられる。ut cancer serpit は名指しのない暗示なので、『』も出典も付けない。
- 確かめた資料：p. 218（`page/n228_w1600.jpg`）の本文 23〜27 行（普通の文字の組み）と校注 23〜27。p. 219（`page/n229_w1600.jpg`）の本文 1〜4 行と校注 1〜4（箇所の行がこの句を挙げないこと）。OCR l. 10366–10370、10388–10391、10380–10382、10419–10421。Swete II の詩篇一・一（l. 19156）。ANF l. 41971–41980、42659–42660。`node tools/bible.js Ps.1.1 2Tim.2.17`。

### 11.1〜11.3 エレミヤ二三・一六〜一七、二一〜二二 の引用（七十人訳の形と、conuertissem）
- 底本（Hartel）：11.1 Contra eiusmodi clamat Dominus, ab his refrenat et reuocat errantem plebem suam dicens: nolite audire sermones pseudoprophetarum, quoniam uisiones cordis eorum frustrantur eos. locuntur sed non ab ore Domini. 11.2 dicunt eis qui abiciunt uerbum Dei: pax erit uobis et omnibus ambulantibus in uoluntatibus suis, omnis qui ambulat errore cordis sui non uenient super te mala. 11.3 non locutus sum ad eos, et ipsi prophetauerunt. si stetissent in substantia mea et audissent uerba mea et si docuissent populum meum, conuertissem eos a malis cogitationibus eorum.
- ほかの読み（p. 219 の校注 5〜15）：eiusmodi は R が ·iusmodi。et（et reuocat）は R が ei。errantem plebem suam は M が plebem suam errantem。locuntur は M が loquuntur enim。eis は W で後の手が eius から直す。abiciunt は W¹ が adiciunt。Dei（uerbum Dei）は GR が dni（Domini）。uobis は G が uobis uobis。omnis（11 行目）は WG、omni（与格「…するすべての者に」）は VRM¹、omnibus は M²。errore は GRv が in errore。te は WGRV、M は eos（削った跡の上）、v は eum（「その人に」）。locutus sum は G が sum locutus。et（et ipsi）は R が sed。substantia mea et は R が substantiam exeant。conuertissem（わたしが立ち返らせた）は M¹ で（後の手が con を a に直して auertissem とする）、conuertissent（彼らが立ち返らせた）は WR。eorum（15 行目）は G² が削った跡の上に書く。
- 引用：箇所の行は Hier. 23, 16—17, 21—22、隔字体は nolite audire … eorum の全体（11.1〜11.3 の Dominus の言葉）。文言は七十人訳（Swete のエレミヤ二三・一六〜一七：Μὴ ἀκούετε τοὺς λόγους τῶν προφητῶν, ὅτι ματαιοῦσιν ἑαυτοῖς ὅρασιν … καὶ οὐκ ἀπὸ στόματος Κυρίου. λέγουσιν τοῖς ἀπωθουμένοις τὸν λόγον Κυρίου Εἰρήνη ἔσται ὑμῖν, καὶ πᾶσιν τοῖς πορευομένοις τοῖς θελήμασιν αὐτῶν、二一〜二二：οὐδὲ ἐλάλησα πρὸς αὐτούς, καὶ αὐτοὶ ἐπροφήτευον. καὶ εἰ ἔστησαν ἐν τῇ ὑποστάσει μου καὶ εἰ ἤκουσαν τῶν λόγων μου, καὶ τὸν λαόν μου ἂν ἀπέστρεφον αὐτοὺς ἀπὸ τῶν πονηρῶν ἐπιτηδευμάτων αὐτῶν）に近いが、一語ずつは重ならない。七十人訳・口語訳との違い：
  - 11.1 の pseudoprophetarum（偽預言者たちの）は、七十人訳では τῶν προφητῶν（預言者たちの）、口語訳も「預言者」。
  - 11.1 の uisiones cordis eorum frustrantur eos. locuntur sed non ab ore Domini は、七十人訳の「自分たちのために幻をむなしくし、自分の心から語って、主の口からではない」と語の配りが違う。
  - in substantia mea は七十人訳の ἐν τῇ ὑποστάσει μου で、口語訳は「わたしの議会に立った」。
  - 11.2 の底本の uerbum Dei は WM（V は記されていない）の読みで、七十人訳は τὸν λόγον Κυρίου、口語訳は「主の言葉」。GR の uerbum Domini はこちらに合う。
  - 11.3 の et si docuissent populum meum（そしてわたしの民を教えていたなら）は、七十人訳の καὶ τὸν λαόν μου（そしてわたしの民を）に対応する動詞がなく、口語訳は「わたしの民にわが言葉を告げ示して」。
  - Swete のギリシア語は OCR の崩れ（Kat、pov など）をならして写した。
  - 11.2 の omnis qui ambulat … non uenient super te mala は、主格の omnis と二人称の te が合わない形。七十人訳は「さまよう心で歩むすべての者に（παντὶ …、与格）、『災いはあなたに来ない』と言った」で、底本はその「言った」を欠く（Swete の OCR は l. 26801–26802 で一行が二重に読まれているが、παντὶ … τῷ πορευομένῳ πλάνῃ καρδίας と εἶπαν Οὐχ ἥξει ἐπὶ σὲ κακά は読める）。VRM¹ の omni は七十人訳の与格に合う。ANF の英訳は v の eum の向き（anf05.txt l. 42248–42250）。
  - 11.3 の conuertissem（一人称単数）と WR の conuertissent（三人称複数）：七十人訳の ἀπέστρεφον は、形の上で一人称単数とも三人称複数とも読める（この一覧の観察）。口語訳は預言者を主語にして「離れさせたであろうに」。ANF の英訳は一人称の読み（l. 42252–42253）。底本の conuertissem の eos は、直前の populum meum（民）を受けるとも、主語の偽預言者たちを受けるとも読め、決めきれない（eorum も同じ）。WR の conuertissent なら eos は民。a malis cogitationibus eorum は七十人訳の「悪いわざ」（ἐπιτηδευμάτων）と語が違い、口語訳は「悪い道と悪い行い」。
- 採る校訂者：Hartel は WG の omnis と te（構文の崩れた形）、WM の Dei、GVM¹ の conuertissem（W・R に反する。G と V は校注に名がないので、底本と同じとみられる）。
- 読者への影響：中 — 11.3 で底本は「（もし彼らが…なら）わたしが彼らを悪い思いから立ち返らせたであろう」と神を主語にし、口語訳と WR は預言者を主語にする。だれが立ち返らせるかが変わり、底本では立ち返らされるのが民か預言者自身かも開いたままになる。11.2 の形の崩れは訳では目立たない。
- 訳での扱い：口語訳を下敷きにして、原文の語（「偽預言者」、11.2 の「神の言葉」、substantia、「民を教える」、主語の「わたし」、「悪い思い」の cogitationes）に替え、一続きの主の言葉として『』に入れる。出典は（エレミヤ二三・一六〜一七、二一〜二二）。substantia の訳（「わたしの本質」「わたしの土台」「わたしのもと」など）は訳者が決め、`// ` メモに口語訳の「議会」を書く。11.2 は「〜するすべての者に、『あなたには災いが来ない』と言う」の向きで整えてよい。11.3 は底本の conuertissem で神を主語にして訳し、eos は「彼ら」のままにして民か預言者かを決めない（訳者が決めてもよい）。訳注は付けない（付けるなら案：「彼らが民を立ち返らせたと読む写本もある。」19 字。読者は口語訳と食い違って見るが、どちらでも偽預言者を責める筋は同じ）。レビュアーには、英訳の 11.2 の「him」は v の eum の読みであることを伝える。
- 確かめた資料：p. 219（`page/n229_w1600.jpg`）の本文 5〜15 行（隔字体の範囲）・箇所の行・校注 5〜15。OCR l. 10393–10405、10417、10421–10426。Swete III のエレミヤ二三・一六〜一七（l. 26787–26802）、二一〜二二（l. 26857–26863）。ANF l. 42244–42253、42756–42757（英訳の脚注 [3131] は Jer. xxiii. 16-21 と挙げる）。`node tools/bible.js Jer.23.16-17 Jer.23.21-22`。

### 11.4 me dereliquerunt fontem aquae uitae（エレミヤ二・一三 と「いのちの水」）
- 底本（Hartel）：hos eosdem denuo Dominus designat et denotat dicens: me dereliquerunt fontem aquae uitae et effoderunt sibi lacus detritos qui non possunt aquam portare. quando aliud baptisma praeter unum esse non possit, baptizare se opinantur: uitae fonte deserto uitalis et salutaris aquae gratiam pollicentur.
- ほかの読み（p. 219 の校注 16〜19）：denuo Dominus は M が dominus denuo の順。dereliquerunt は WG が derelinquerunt。uitae は MGV、uiuae（生ける）は RM（校注の刷りのとおり。M が両方に出る。末尾の「未確認」）。effoderunt は G¹ が offoderunt。baptizare se opinantur の se は W（V は記されていない）で、G と v は posse se、R は posse、M と v は se posse（「洗礼を授けることができると思う」）。Hartel は「p. 222 の 3 行目を見よ」と添える。
- 引用：箇所の行は Hier. 2, 13、隔字体は me dereliquerunt … portare。七十人訳（Swete：ἐμὲ ἐνκατέλιπον, πηγὴν ὕδατος ζωῆς, καὶ ὥρυξαν ἑαυτοῖς λάκκους συντετριμμένους οἳ οὐ δυνήσονται ὕδωρ συνέχειν）は「いのちの水の源」で、底本の uitae に合う。口語訳は「生ける水の源であるわたしを捨てて、自分で水ためを掘った。それは、こわれた水ためで、水を入れておくことのできないもの」で、R などの uiuae に合う。続く uitae fonte deserto uitalis et salutaris aquae（いのちの源を捨てて、いのちを与え救う水の恵みを約束する）は uitae の語を受ける。
- 暗示（この一覧の観察）：aliud baptisma praeter unum は、4.6 で引いたエペソ四・五 の「バプテスマは一つ」を受ける。
- 採る校訂者：Hartel は MGV の uitae と W の se。
- 読者への影響：小 — 「いのちの水」でも「生ける水」でも意味はほぼ同じ。
- 訳での扱い：訳注は付けない。口語訳を下敷きにし、論が uitae・uitalis に立つので「いのちの水の源」に替えて『』に入れる（`// ` メモに口語訳の「生ける水」を書く）。出典は（エレミヤ二・一三）。uitae fonte deserto は「いのちの源を捨てて」と同じ語で受ける。aliud baptisma praeter unum には出典を付けない。baptisma は口語訳の「バプテスマ」か「洗礼」か、本の既存の訳に揃える。
- 確かめた資料：p. 219（`page/n229_w1600.jpg`）の本文 15〜21 行（隔字体の範囲）・箇所の行・校注 16〜19（17 の略号は拡大して読んだ）。OCR l. 10405–10412、10417、10426–10428。Swete III のエレミヤ二・一三（l. 22308–22310）。`node tools/bible.js Jer.2.13 Eph.4.5`。

### 11.5〜11.6 non abluuntur … sed immo cumulantur（小さな異読）
- 底本（Hartel）：non abluuntur illic homines sed potius sordidantur, nec purgantur delicta sed immo cumulantur. non Deo natiuitas illa sed diabolo filios generat. per mendacium nati ueritatis promissa non capiunt: de perfidia procreati fidei gratiam perdunt. 11.6 ad pacis praemium uenire non possunt qui pacem Domini discordiae furore ruperunt.
- ほかの読み（p. 219 の校注 21〜24、p. 220 の校注 1）：non … sordidantur を G が欠く。abluuntur は R が lauuntur。illic は v が illis。immo を M が欠く。cumulantur（積み重なる）は WM が maculantur（汚される）。Deo は R が dni。diabolo は R が diaboli。perdunt は M が perdiderunt。qui（11.6）は M が quia。
- 採る校訂者：Hartel は G・R（V は記されていない）の cumulantur。WM の maculantur では、直前の sordidantur（汚される）と同じことを繰り返すことになり、purgantur（清められる）との対は cumulantur のほうがはっきりする。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。底本どおり「罪は清められず、かえって積み重なる」の向き。
- 確かめた資料：p. 219（`page/n229_w1600.jpg`）の本文 21〜25 行と校注 21〜24。p. 220（`page/n230_w1600.jpg`）の本文 1〜2 行と校注 1。OCR l. 10412–10415、10436–10437、10429–10430、10465。

## 未確認

- p. 219 の校注 17 の uitae MGV, uiuae RM は、M が両方に出る刷りで、拡大しても同じに見える。どちらかが W の誤植か、M の最初の手と後の手を分ける肩の数字が落ちたのかは、Hartel の正誤表や M そのもので確かめていない。
- 7.4 の M の後の手の Porro una tribus remanebit が、どのラテン語訳聖書の文言から取られたかは、ラテン語訳の本文を見ていないので確かめていない（口語訳の数え方と同じ向きであることだけを記した）。キプリアヌスの引用がほかのラテン語訳聖書（古ラテン語訳）の文言とどう重なるかも、この範囲ではすべて未確認。
- 8.7 の七十人訳の μονοτρόπους の語義と、それが口語訳の「寄るべなき者」のもとの語とどう対応するかは、辞書でも原語の本文でも確かめていない。キプリアヌスの unanimes がその語の訳として立つことだけを記した。
- 11.4 の校注の「cf. p. 222, 3」（Hartel が比べる箇所。12〜13 章のどこか）は読んでいない。
- 10.3 で退けられている人々が、ローマのノウァティアヌスか、カルタゴのフェリキッシムスたちかは、ANF の英訳者の「Argument」がノウァティアヌスの分裂を挙げるほかは確かめていない。
- 9.4 の incussione を Hartel が「おそらく正しい」とする理由は、校注に書かれておらず確かめていない。
