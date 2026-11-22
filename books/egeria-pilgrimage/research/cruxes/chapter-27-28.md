# chapter-27-28 の論点（27-28）

略号と資料の所在は [README.md](README.md)。底本の画像は `cache/archive.org/itinerahierosoly00geye/page/`：`n133_w1600.jpg`（p. 78。27 章は 1 行目の Item dies から）、`n134_w1600.jpg`（p. 79）、`n135_w1600.jpg`（p. 80。28 章は 20 行目の Ieiuniorum から）、`n136_w1600.jpg`（p. 81。28 章は 12 行目の ut diximus. まで。13 行目から 29 章）。本文は pp. 78〜80 を `node tools/image.js crop <画像> pct:0,4,100,32` と `pct:0,34,100,32` で、校注は `pct:0,64,100,34 --scale 1.3` で切って読み（切り出しは `/tmp/claude/eg2728/img/`。各ページの 25〜30 行は校注の切り出しの上端で読んだ）、p. 81 は全体と、校注を `pct:0,73,100,20 --scale 1.5` で読んだ。OCR は `cache/archive.org/itinerahierosoly00geye/itinerahierosoly00geye_djvu.txt` の l. 6749–6901。校注は、p. 78 が l. 6784–6788、p. 79 が l. 6826–6837、p. 80 が l. 6877–6883。p. 81 の校注は OCR の抜粋の範囲外で、画像だけで読んだ。

聖書の欄：pp. 78〜81 のこの範囲には、聖書の欄がない（画像で確かめた）。

Geyer の Kritische Bemerkungen（KB）は、この範囲を Gamurrini の初版の頁（85, 7 が 27.2、87, 1 が 27.6、88, 18 が 28.4）で、l. 6219–6227（hoc idem と totidem）、l. 6232–6248（fiet）、l. 6250–6253（oblatio）、l. 6255–6256（hora lucernarii）、l. 6258–6274（27.7 の句読点）、l. 6292–6296（ebdomadarios）、l. 6298–6301 と l. 4533–4548（mox と quod、quemadmodum）、l. 6303–6334（librari と欠け）、補遺 l. 7213–7234（27.5 の ieiunatur、27.8 の ad missam、28.4 の欠けについての Cholodniak の案。崩れが多い）で論じる。

P.D.：この範囲の抜き書きは見つからなかった（底本 OCR の l. 7859–9200 を quadragesim、ieiun、septiman、aputact、ebdomad で探して当たりなし）。

Bernard のラテン語本文は l. 12950–13080（OCR で読んだ）。脚注は l. 12999（27.2 fit et、27.3 hocidem）、l. 13041（27.6 の lucernaris の A の形）、l. 13084（28.4 quid liberari）。英訳の本文は l. 9955–10165（27.1 は l. 9955 の When the days of Easter から）、脚注は l. 9978–9986（八週の断食と土曜日）、l. 10032（第三時の務め）、l. 10069–10081（27.5〜27.6。使徒教憲とラオディキア会議の規定）、l. 10112–10128（27.9 の missa と hebdomadarii）、l. 10180（28.4）。Bernard の本文は次の箇所で底本と違う：27.3 lucernare hic item（底本 hoc idem）、27.5 tertia feria [similiter]（二つ目の similiter を除く）と ieiunari（底本 ieiunatur）と、[Nam si fortuito … atque ad nona in Syon proceditur.] の文全体を角括弧に入れ atque と刷る（底本は角括弧なしで neque）、27.6 praeter oblationem（底本 oblatio）と iam et tota lucernaris sit（底本 iam et hora lucernari sit）、27.8 iam ad missa（底本 et missa）、27.9 domadarios（底本 ebdomadarios）、28.4 panem, qui deliquari non potest（底本 quod librari）と、farina の後を欠けとせず Ieiunium quadragesimarum sic fit と続ける（底本は点線）。英訳は 27.5 を atque の意味で、27.6 を tota lucernaris の意味で訳している。レビューで英訳と照らすときは、この違いを渡す。

---

### 27.1 dies paschales … quadragesimae ante pascha … octo septimanae（四旬節の数え方）
- 底本（Geyer）：Item dies paschales cum uenerint, celebrantur sic. Nam sicut apud nos quadragesimae ante pascha adtenduntur, ita hic octo septimanae attenduntur ante pascha. … Ac sic ergo de octo septimanis deductis octo diebus dominicis et septem sabbatis, quia necesse est una sabbati ieiunari, ut superius dixi, remanent dies quadraginta et unus, qui ieiunantur。校注は「3 septimanas A」「4 septimane A」「9 una die sabbati Cholodniak」「10 unum A」（p. 78 校注 3・4・9・10）。
- ほかの読み：9 行目の una sabbati を、Cholodniak は 5 行目の una die sabbati にならって una die sabbati とする。10 行目の unus は A では unum。3〜4 行目の septimanae は A では septimanas、septimane（綴りと格だけ）。
- 索引：「paschalis: dies 78, 1. 91, 9 …」（l. 23830）。事物の索引の Quadragesimae の項は「sicut apud nos quadragesimae ante pascha adtenduntur, ita hic octo septimanae attenduntur 78, 2」（l. 24388–24404）。ieiunare の項は「dominicis diebus et sabbato non ieiunatur 78, 5. 7. 9 … remanent dies quadraginta et unus, quibus ieiunatur 78, 10」（l. 22116–22122）。
- 事実：八週は五十六日で、八回の主の日と七回の土曜日を除くと四十一日になり、本文の数と合う。Bernard の英訳の脚注は、ソゾメノス『教会史』七・一九 がコンスタンティノポリスでは七週、パレスチナでは六週の断食を言い、八週はほかの史家に見えないと言う。また、東方の教会は土曜日を祝いの日として守ったと言う（l. 9978–9986）。
- 本の AGENTS.md との関係：dies dominica は「主の日」、sabbatum は「土曜日」。章の割りは 27〜28 章を「四旬節」と呼ぶ。quadragesimae（複数）の訳語はまだない（26.1 の quadragesimae de epiphania は「公現祭から四十日目の祭り」）。
- 読者への影響：中（訳語）— dies paschales は、ここでは復活祭そのものではなく、その前の八週を含む季節を指す。quadragesimae は「四十日」の数え方そのものが話題になる。
- 訳での扱い：訳注は付けない。dies paschales（「復活祭の季節」など）と quadragesimae（「四旬節」か「四十日」か）の訳語をメインで決める（次の eortae の項と合わせる）。una sabbati は「ただ一度の土曜日」、41 日は原文どおり。
- 確かめた資料：`n133_w1600.jpg`（本文 1〜11 行、校注 3・4・9・10）。OCR l. 6749–6760、6784–6785、22116–22122、23830、24388–24404。Bernard l. 9955–9986、12965–12970。

### 27.1 quod hic appellant eortae, id est quadragesimas（ギリシア語の呼び名）
- 底本（Geyer）：remanent dies quadraginta et unus, qui ieiunantur, quod hic appellant eortae, id est quadragesimas。校注に注記はない（画像で eortae と刷られていることを確かめた）。
- 索引：「eorte: quod hic appellant eortae, i. e. quadragesimas 78, 11」と「heortae: …」の二つの見出し（l. 21206–21207、21829–21830）。語の索引は「hebdomada, hebdomadarius, heorte, holosericus, hymnus semper scribitur: ebdomada, eorte, olosericus」（l. 27617–27619）と言い、Geyer はこの語を heorte（ギリシア語の ἑορτή）を h なしで書いたものと見る。また、主格の eortae が目的語の位置にある例として「Nominatiuus, ubi accusatiuum exspectes」に挙げる（l. 28255–28261）。Bernard は英訳でこの語をギリシア文字で刷る（OCR は崩れて「eopruL」、l. 9992）。
- 事実：ἑορτή は七十人訳と新約で「祭り」の語（七十人訳出エジプト一二・一四 の ἑορτὴν Κυρίῳ は口語訳「主の祭」、Swete I l. 13182。マルコ一四・二 の ἐν τῇ ἑορτῇ は口語訳「祭の間」）。エゲリアはこれを quadragesimae（四十日の断食の季節）の言い換えとして挙げる。
- 本の AGENTS.md との関係：エゲリアがギリシア語を出して説明するところは、ギリシア語の正しい形から音で写して「」に入れ、説明の語も「」に入れる（24.4 の licinicon「リュクニコン」）。ここは ut hic dicunt の型（monazontes、aputactitae は意味で訳す）ではなく、quod hic appellant … id est … の型で、licinicon と同じ。
- 読者への影響：中 — 音で写すと読者には意味が分からず、「祭り」の意を注で示すと、断食の季節を「祭り」と呼ぶ理由が分からないまま残る。
- 訳での扱い：音で写すなら ἑορταί から「ヘオルタイ」。訳注は付けない方向（意味を言うと断食の季節との食い違いを説明しなければならず、40 字に収まらない）。付けるなら注の案：「ギリシア語で『祭り』の意。」（13 字）。どちらにするかはメインで決める。`// ` メモに、底本の綴り eortae と、Geyer が heortae と見ることを書く。
- 確かめた資料：`n133_w1600.jpg`（本文 10〜11 行）。OCR l. 6758–6760、21206–21207、21829–21830、27617–27619、28255–28261。Bernard l. 9992、12969。Swete I l. 13182。SBLGNT マルコ（`62-Mk-morphgnt.txt` 行 9109）。`node tools/bible.js Exod.12.14 Mark.14.2`。

### 27.1・27.5 ieiunantur / ieiunatur（A の読みの報告の食い違い）
- 底本（Geyer）：27.1 dominicis diebus et sabbato non ieiunantur（p. 78 の 5 行目）、qui ieiunantur（10 行目）。27.5 semper quarta et sexta feria etiam et a cathecuminis ieiunatur（p. 79 の 9 行目）。校注は「5 ieiunantur A ieiunatur Gamurrini」（p. 78 校注 5）、「9 ieiunantur A ieiunatur Gamurrini et Du Chesne p. 479」（p. 79 校注 9）。
- ほかの読み：27.1 では Geyer は A の ieiunantur を残し、Gamurrini は非人称の ieiunatur。27.5 では Geyer は Gamurrini と Du Chesne の ieiunatur を採る。ところが KB の補遺は 27.5 の A を ieiunari と言い（l. 7216。崩れた OCR で、cod ieiunari と読める）、Bernard の本文も ieiunari と刷る（l. 13005）。底本の校注は A を ieiunantur とする。
- 索引：「ieiunor 78, 5. — ieiuno 78, 7. 9」（l. 27645–27648）。Geyer は 78, 5 の ieiunantur を、人を主語にした形（「人々は断食しない」）と見る。
- 読者への影響：小 — どの形でも「主の日と土曜日には断食しない」「水曜日と金曜日には洗礼志願者も断食する」。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n133_w1600.jpg`（本文 5、10 行、校注 5）、`n134_w1600.jpg`（本文 8〜9 行、校注 9）。OCR l. 6753、6758、6784、6800–6801、6829、27645–27648。KB l. 7213–7217。Bernard l. 12968、13005。

### 27.2 sicut et toto anno dominicis diebus fit, et similiter（A は fiet）
- 底本（Geyer）：ut die dominica de pullo primo legat episcopus intra Anastase locum resurrectionis Domini de euangelio, sicut et toto anno dominicis diebus fit, et similiter usque ad lucem aguntur ad Anastasem et ad Crucem。校注は「15 fiet A fit et scripsi probante Bernardo」（p. 78 校注 15）。
- ほかの読み：A は fiet（et がない）。KB は、未来形はこの文では意味をなさず、この書でほかに使われないこと、vadet、dicet にならった現在形とも見られないこと（fit がたびたび出る）から、fit; et similiter と推定した（l. 6232–6248）。Bernard も fit: et と刷り、脚注で Geyer の改めとする（l. 12974、12999）。
- 本の AGENTS.md との関係：de pullo primo は 24.9 の訳（「最初の鶏が鳴くとすぐに」）と揃える。locum … de euangelio は「福音書の…の箇所」（26.1 の de eo loco … euangelii と同じ言い方）。
- 読者への影響：小。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n133_w1600.jpg`（本文 12〜16 行、校注 15）。OCR l. 6760–6765、6785–6786。KB l. 6232–6248。Bernard l. 12972–12976、12999。

### 27.3 in ecclesia maiore, quae appellatur Martyrio（大聖堂の名の初出）
- 底本（Geyer）：Postmodum mane sicut et semper dominica die proceditur et aguntur, quae dominicis diebus consuetudo est agi, in ecclesia maiore, quae appellatur Martyrio, quae est in Golgotha post Crucem。校注は「17 postmodu A」だけ（p. 78 校注 17）。
- 事実：この名が本文に出るのはここが初め（画像で Martyrio と刷られていることを確かめた）。索引の Martyrium の項が最初に挙げる 75, 5 は、25.3 の角括弧に入れて除いた [martyrii] で、名として訳される箇所ではない。事物の索引の Constantinus の項は、この文の言い方で「basilicam uel ecclesiam maiorem, quae appellatur Martyrium, quae est in Golgotha post Crucem」と書く（l. 20415–20424）が、Martyrium の項の箇所の列は 75, 5 から始まり、78, 19 を挙げない（l. 23005–23011）。ecclesia の項も「appellatur Martyrium 83, 2」と言い、78, 19 を挙げない（l. 20896–20900）。底本は与格・奪格の形 Martyrio のまま刷り、校注は何も言わない。Bernard の英訳は Martyrium と名で書く（l. 10003）。
- 本の AGENTS.md との関係：訳語表の ecclesia maior は「大きな教会」で、「Martyrium の名は名が出るページで決める」とある。普通名詞の martyrium は「殉教者の記念堂」、人名の付く martyrium は「〜の記念堂」。post Crucem は「十字架の後ろ」。
- 読者への影響：中（名前）— 大聖堂の名はこの後の章で何度も出る（索引の Martyrium の項）。
- 訳での扱い：訳注は付けない。名の訳をメインで決め、名前の表に足す（音で写して「マルテュリウム」とするか、普通名詞の「殉教者の記念堂」と揃えずに名として扱うか）。底本の形 Martyrio は与格・奪格のまま名として受けてよい（Anastase と同じく、形は訳に響かない）。
- 確かめた資料：`n133_w1600.jpg`（本文 17〜20 行、校注 17）。OCR l. 6767–6770、6786、20415–20424、20896–20900、23005–23011。Bernard l. 10002–10003、12979–12981。

### 27.3 lucernare hoc idem hora sua fit（A は hocidem）
- 底本（Geyer）：Haec ergo dum aguntur, facit se hora quinta; lucernare hoc idem hora sua fit sicut semper ad Anastasem et ad Crucem, sicut et singulis locis sanctis fit。校注は「22 hic item Bernard totidem ipse conieci」（p. 78 校注 22）。
- ほかの読み：Bernard は hic item と刷り、脚注で A の hocidem を記す（l. 12982、12999）。KB は hoc idem を itidem（「同じく」）の意とし、25.11 の hoc idem と並べたうえで、Lucifer Calaritanus、Commodianus、Cassianus に totidem が itidem の意で出ることから、ここも totidem と書くべきではないかと問う（l. 6219–6227）。Geyer は本文に入れず、校注に totidem を自分の推定として挙げる。
- 索引：「lucernare hora sua fit 78, 22」（l. 28009–28014）。
- 本の AGENTS.md との関係：25.11 の hoc idem et tertia die は、chapter-25-26 の論点で KB の itidem の取り方を記録した。
- 読者への影響：小 — どの読みでも「ともしびの祈りも、いつものとおり、その時刻に行われる」。
- 訳での扱い：訳注・メモとも付けない。hoc idem は「同じように」と軽く訳す。
- 確かめた資料：`n133_w1600.jpg`（本文 21〜23 行、校注 22）。OCR l. 6771–6773、6787、28009–28014。KB l. 6219–6227。Bernard l. 12982、12999。

### 27.3 dominica enim die nona fit（Du Chesne は non）
- 底本（Geyer）：lucernare hoc idem hora sua fit sicut semper ad Anastasem et ad Crucem, sicut et singulis locis sanctis fit; dominica enim die nona fit。校注は「24 nona] non Du Chesne l. c. p. 479」（p. 78 校注 24。「nona の代わりに Du Chesne は non」。l. c. は前に引いた書、つまり Origines du culte chrétien）。
- ほかの読み：
  - Geyer は A の nona を残す。索引は 78, 24 を nona の項（「ad nonam quae consuetudo Hierosolymis fuerit agi」、第九時の務め）に挙げる（l. 23579–23584）。この取り方では「主の日には第九時の務めが行われるからだ」。
  - Du Chesne は non と読む（「主の日には（それが）行われないからだ」）。何が行われないのかは、校注からは分からない（Du Chesne の書は読んでいない。「未確認」）。
  - Bernard は nona と刷り、英訳は nona を、ともしびの祈りが主の日には第九時に行われる、という時刻の意に取る（l. 10008–10011）。
- 事実：24 章の毎日の務めには第九時の務めがあり（24.3 Ita ergo et hora nona fit sicuti et ad sexta）、25.4 は主の日の朝の務めが第五時か第六時近くまで延びると言う。この節では、主の日の朝の務めの後、第五時になり、ともしびの祈りはいつもの時刻に行われる、と言った直後にこの句がある。
- 読者への影響：中 — nona を第九時の務めと取るか、ともしびの祈りの時刻と取るか、non と読むかで、主の日の午後に何が行われるかが変わる。
- 訳での扱い：訳注は付けない。底本の nona で、索引の取り方（第九時の務め）に従うのが底本どおり。「主の日には第九時の務めが行われるからです」の方向で、enim のつながりをどこまで生かすかはメインで決める。`// ` メモに、Du Chesne の non と、英訳が時刻の意に取ることを書く。
- 確かめた資料：`n133_w1600.jpg`（本文 21〜24 行、校注 24）。OCR l. 6772–6774、6787–6788、23579–23584。Bernard l. 10008–10011、12982–12984。`research/geyer-1898.txt` の 24.3、25.4。

### 27.4 Denuo ad tertia itur … quoniam in diebus quadragesimarum et hoc additur, ut et ad tertiam eatur（第三時の務め）
- 底本（Geyer）：Denuo ad tertia itur ad Anastasim et aguntur, quae toto anno ad sextam solent agi, quoniam in diebus quadragesimarum et hoc additur, ut et ad tertiam eatur。校注は「27 que A」（p. 78 校注 27。直前の quae semper の quae）だけ。
- 事実：24 章の毎日の務めは、夜明け前、第六時、第九時、第十時（ともしびの祈り）で、第三時の務めはない。Bernard の英訳の脚注は、第三時の務めが四旬節にだけ行われる特別の務めだと言う（l. 10032）。
- 本の AGENTS.md との関係：hora prima … hora decima は「第一時……第十時」で、訳注は付けない。
- 読者への影響：小 — 原文が「四旬節にはこれが加わる」と自分で説明する。
- 訳での扱い：訳注・メモとも付けない。ad tertiam、ad sextam、ad nonam は「第三時に」「第六時に」「第九時に」（その時の務めに）で、24 章の訳と揃える。
- 確かめた資料：`n133_w1600.jpg`（本文 25〜30 行、校注 27）。OCR l. 6776–6781、6788。Bernard l. 10013–10019、10032。

### 27.5 ad nonam autem, quia consuetudo est semper … procedi（文の形の崩れ）
- 底本（Geyer）：Quarta feria autem similiter itur de noctu ad Anastase et aguntur ea, quae semper, usque ad mane, similiter et ad tertiam et ad sextam; ad nonam autem, quia consuetudo est semper, id est toto anno, quarta feria et sexta feria ad nonam in Syon procedi, quoniam in istis locis, … et ideo ad nonam in Syon proceditur。校注は「2 alterum similiter delet Bernard」「5 ad sexta A」「ad nonam autem in Sion proceditur Cholodniak」「6 ad nona A」（p. 79 校注 2・5・6）。
- ほかの読み：Cholodniak は ad nonam autem の後に in Sion proceditur を補い、文を閉じる。Geyer は補わず、quia の節の後に quoniam の節が続いて、最後の et ideo ad nonam in Syon proceditur で文が閉じる形のまま刷る。Bernard は 27.5 の初めの Similiter et tertia feria similiter の二つ目の similiter を除く（l. 12992）。
- 読者への影響：小 — 文の形は崩れているが、「水曜日の第九時には、一年中のならわしどおりシオンへ行列して行く。ここでは水曜日と金曜日には洗礼志願者も断食するからで、そのためにシオンへ行く」と読める。
- 訳での扱い：訳注・メモとも付けない。文を分けて「第九時には、…シオンへ行列して行きます。一年中、水曜日と金曜日の第九時にはシオンへ行くならわしだからです」のように組み直してよい（本の AGENTS.md の文型の訳し方の「本筋の途中に挟む説明の文は、文を分けて訳してよい」）。procedere は訳語表の「…へ行列して行く」。
- 確かめた資料：`n134_w1600.jpg`（本文 1〜9 行、校注 2・5・6）。OCR l. 6793–6801、6826–6827。Bernard l. 12992–13006。

### 27.5 excepto si martyrorum dies euenerit … neque ad nona in Syon proceditur（A は atque）
- 底本（Geyer）：quoniam in istis locis, excepto si martyrorum dies euenerit, semper quarta et sexta feria etiam et a cathecuminis ieiunatur, et ideo ad nonam in Syon proceditur. Nam si fortuito in quadragesimis martyrorum dies euenerit quarta feria aut sexta feria neque ad nona in Syon proceditur. Diebus uero quadragesimarum, ut superius dixi, quarta feria ad nona in Syon proceditur iuxta consuetudinem totius anni。校注は「7 martiriorum A」「11 atque A neque Gamurrini」（p. 79 校注 7・11）。
- ほかの読み：A は atque。Geyer は Gamurrini の neque を採る（画像で neque と刷られていることを確かめた）。A のままでは「四旬節に殉教者の日が水曜日か金曜日に当たっても、第九時にシオンへ行く」の向きに読める。Bernard は A の atque を刷り、Nam si … proceditur の文全体を角括弧に入れる（l. 13006–13008。Bernard の本文の角括弧は、27.5 の [similiter] と同じく除くべき語の印）。英訳は atque の向きで訳し、ラオディキア会議の第五一条（四旬節には土曜日と主の日のほか殉教者の祭りを行わない）を脚注に挙げる（l. 10040–10042、10074–10075）。
- 事実：前の文は、殉教者の日のほかは、水曜日と金曜日に洗礼志願者も断食するので、第九時にシオンへ行くと言う。neque なら、殉教者の日に当たれば断食しないので、第九時のシオンへの行列もしない、という前の文の例外の言い直しになる。続く Diebus uero quadragesimarum … quarta feria ad nona in Syon proceditur は「四旬節には水曜日に第九時にシオンへ行く」で、ここで話が四旬節の水曜日に戻る。
- 索引：「martyr, gen. plur. martyrorum 79, 7. 10」（l. 28064–28066）、「martyrorum dies 79, 7. 10」（l. 22987）。
- 読者への影響：中 — 底本は唯一の写本の読みを推定で改めていて、写本の字のままなら意味が逆になる。ただ、底本の読みで前後の筋は通る。
- 訳での扱い：訳注は付けない（25.1 の non fit と同じく、底本の読みで筋が通るところは注を付けない扱い。25.1 では Geyer が写本を残し、ここでは推定を採るという違いはある）。付けるなら注の案：「写本の字のままでは『それでもシオンへ行く』と読める。」（25 字）。どちらにするかはメインで決める。`// ` メモに、写本の atque と Gamurrini の neque、英訳が atque の向きで訳すことを書く。martyrorum dies は「殉教者の記念の日」の方向。
- 確かめた資料：`n134_w1600.jpg`（本文 7〜13 行、校注 7・11）。OCR l. 6799–6806、6827–6830、22987、28064–28066。Bernard l. 10036–10046、10074–10075、13005–13008。

### 27.6 omnia aguntur, quae consuetudo est ad nonam agi praeter oblatio（Geyer の推定は oblationem）
- 底本（Geyer）：omnia aguntur, quae consuetudo est ad nonam agi praeter oblatio; nam ut semper populus discat legem, et episcopus et presbyter praedicant assidue。校注は「14 oblatio A oblationem ipse conieci」（p. 79 校注 14）。
- ほかの読み：Geyer は A の oblatio を本文に残し、校注に oblationem を自分の推定として挙げる。KB は、後の nam に引かれて oblationem の nem が落ちたとして oblationem を立てた（l. 6250–6253）。索引も「omnia aguntur praeter oblatio (an oblationem?) 79, 14」と問いを残す（l. 28663–28665）。Bernard は oblationem と刷る（l. 13011）。
- 事実：Bernard の英訳の脚注は、水曜日と金曜日の第九時には聖餐が行われるならわしだったが、エルサレムでは四旬節にはそうでなかったと言い、四旬節には土曜日と主の日にだけ聖餐を行うとしたラオディキア会議の第四九条を挙げる（l. 10077–10081）。
- 本の AGENTS.md との関係：oblatio は「ささげ物」、oblationem facere は「ささげ物をささげる」。
- 読者への影響：小 — どちらの形でも「ささげ物のほかは」。
- 訳での扱い：訳注・メモとも付けない。ut semper populus discat legem の legem は「律法」か「教え」かをメインで決める（索引の lex の項は「ubi data est 39, 22. legem omnem scripturarum catechumini edocti sunt 98, 20. semper populus discit legem 79, 15」と並べ、98, 20 の「聖書の律法（教え）のすべて」と同じ項に入れる。l. 22663–22673）。
- 確かめた資料：`n134_w1600.jpg`（本文 11〜16 行、校注 14）。OCR l. 6805–6810、6832、22663、28663–28665。KB l. 6250–6253。Bernard l. 10046–10050、10077–10081、13011。

### 27.6 iam et hora lucernari sit（A は tota lucernari sic sic）
- 底本（Geyer）：Cum autem facta fuerit missa, inde cum ymnis populus deducet episcopum usque ad Anastasem; inde sic uenitur, ut cum intratur in Anastase, iam et hora lucernari sit; sic dicuntur ymni et antiphonae, fiunt orationes et fit missa lucernaris in Anastase et ad Crucem。校注は「18 astase A hora] tota A hora ipse emendaui lucernari sic sic, sed prius illud sic lineola per litteram s ducta deletum est lucernaris sit Gamurrini iam est hora lucernaris. Sic Cholodniak」（p. 79 校注 18）。
- ほかの読み：A は iam et tota lucernari sic sic で、一つ目の sic は s に線を引いて消してある。Geyer は tota を hora と改め、lucernari sit; sic と刷る。Gamurrini は lucernaris sit、Cholodniak は iam est hora lucernaris. Sic。KB は inde sic uenitur, ut cum intratur in Anastase, iam et hora lucernarii sit と読むよう提案していた（l. 6255–6256）。Bernard は iam et tota lucernaris sit と刷り（Gamurrini による。脚注で A の形を記す、l. 13015、13041）、英訳は tota を生かして「ともしびの祈りの全体が唱えられる」の意に訳す（l. 10051–10052）。
- 読者への影響：中 — 底本では「アナスタシスに入るころには、もうともしびの祈りの時刻になっている」。Bernard の本文と英訳では「ともしびの祈りがすべて行われる」で、時刻の話にならない。
- 訳での扱い：訳注は付けない。底本の読みで「入るときには、もうともしびの祈りの時刻になっているように来ます」。`// ` メモに、写本の tota と、Geyer の改め hora を書く。続く missa lucernaris は「ともしびの祈りの散会」、27.7 の Missa … lucernarii … serius fit も同じ。
- 確かめた資料：`n134_w1600.jpg`（本文 16〜21 行、校注 18）。OCR l. 6810–6817、6832–6837。KB l. 6255–6256。Bernard l. 10050–10054、13012–13016、13041。

### 27.7 Sed sexta feria uigiliae … usque in mane, id est de hora lucernarii, quemadmodum intratum fuerit in alia die mane, id est sabbato（句読点）
- 底本（Geyer）：Sed sexta feria uigiliae in Anastase celebrantur ab ea hora, qua de Sion uentum fuerit cum ymnis, usque in mane, id est de hora lucernarii, quemadmodum intratum fuerit in alia die mane, id est sabbato. Fit autem oblatio in Anastase maturius, ita ut fiat missa ante solem。校注は「27 et p. 80, 2 astase A」だけ（p. 79 校注 27）。
- ほかの読み：KB によれば、Gamurrini は quemadmodum intratum fuerit. In alia die mane, id est sabbato, fit autem oblatio と切った。KB は sabbato の後で文を切り、qua de Sion uentum fuerit cum ymnis を一つにまとめるよう直し、28.4 の後（29.1）の vigiliae … de hora lucernarii sexta feria, quando de Syon venitur cum psalmis, usque in mane sabbato を並べる。また、時を言う de と ab を同じ意味で使う例を集める（l. 6258–6290）。KB はこの箇所の A を lucernarii とする（l. 6260）。Geyer の底本は sabbato の後で文を切る点で KB と同じだが、KB と Bernard が quemadmodum intratum fuerit, in alia die と置くコンマを刷らない（画像で確かめた。底本は intratum fuerit in alia die mane）。Bernard も sabbato の後で切る（l. 13024–13027）。
- 索引：「quemadmodum = wenn, während … cum fut. exacto 79, 28. 80, 14. 21」（l. 28824–28830）。「adducere = ducere 79, 26」（l. 26329）。
- 読者への影響：小 — 「金曜日の徹夜の祈りは、シオンから賛歌を歌って戻った時、つまりともしびの祈りの時刻から、翌日、土曜日の朝になるまで行われる。ささげ物はアナスタシスで早めにささげられ、日の出前に散会となる」。
- 訳での扱い：訳注・メモとも付けない。quemadmodum ＋未来完了は、索引は「〜する時、〜するあいだ」（wenn, während）とだけ言う。usque in mane との組み合わせで「翌日の土曜日の朝になる時まで」と取るか、どう訳すかはメインで決める。adducetur（27.7）は -et の現在形の決まりで「連れて来られます」。
- 確かめた資料：`n134_w1600.jpg`（本文 25〜28 行、校注 27）、`n135_w1600.jpg`（本文 1〜3 行）。OCR l. 6821–6824、6837、6842–6845、26329、28824–28830。KB l. 6258–6290。Bernard l. 10060–10066、13023–13027。

### 27.8 ut ea hora, qua incipit sol procedere, et missa in Anastase facta sit（A は ad missam）
- 底本（Geyer）：Missa autem, quae fit sabbato ad Anastase, ante solem fit, hoc est oblatio, ut ea hora, qua incipit sol procedere, et missa in Anastase facta sit。校注は「7 et missa] ad missam A iam missa Gamurrini et missa scripsi astase A」（p. 80 校注 7）。
- ほかの読み：A は ad missam。Gamurrini は iam missa、Geyer は et missa と改める。Bernard は iam ad missa と刷る（l. 13033）。KB の補遺もこの箇所を論じるが、OCR が崩れて読めない（l. 7224–7226）。
- 読者への影響：小 — どの読みでも「日が昇り始める時刻には、アナスタシスでの散会がもう済んでいる」。
- 訳での扱い：訳注・メモとも付けない。missa をここで「散会」と訳すか「ささげ物（の務め）」と訳すかは、次の項でメインが決める。
- 確かめた資料：`n135_w1600.jpg`（本文 5〜7 行、校注 7）。OCR l. 6847–6849、6877–6878。KB l. 7224–7226。Bernard l. 13031–13033。

### 27.7〜27.9 Missa … hoc est oblatio と、土曜日の朝の missa（散会か、ささげ物の務めか）
- 底本（Geyer）：27.7 Fit autem oblatio in Anastase maturius, ita ut fiat missa ante solem。27.8 Missa autem, quae fit sabbato ad Anastase, ante solem fit, hoc est oblatio, ut ea hora, qua incipit sol procedere, et missa in Anastase facta sit。27.9 Quod autem dixi, maturius fit missa sabbato, id est ante solem … ante sole fit missa in Anastase sabbato. Quod autem dixi, propter illos fit missa mane, non quod illi soli communicent, sed omnes communicant。
- 索引：事物の索引の missa の項は、「missa (= dimissio) fit」の箇所の列に 80, 2. 5. 7. 13. 16. 17. 21. 26 を入れたうえで、別に「missa ante solem fit, hoc est oblatio 80, 5」と挙げる（l. 23184–23198）。oblatio の項も「missa ante solem fit, hoc est oblatio 80, 6」と挙げる（l. 28310–28316）。Geyer は 80, 5 の missa だけを、oblatio と言い換えられる用例として分けている。
- 事実：Bernard の英訳の脚注は、missa はたいてい散会の意だが、ときに聖餐の務めそのものにも使われ、そのために聖餐が週のどの日に行われたかを決めにくいと言う（l. 10115–10120）。英訳は 27.8 の Missa … hoc est oblatio を、聖餐の務めの意の語で訳している（l. 10089–10090）。
- 本の AGENTS.md との関係：訳語表の missa は「散会」で、「底本の索引が oblatio の意味に分ける 80, 5 の missa は、そのページで決める」とある。oblatio は「ささげ物」、communico は「聖餐にあずかる」。
- 読者への影響：中（訳語）— 80, 5 を「散会」と訳すと、hoc est oblatio（「つまり、ささげ物」）との言い換えが通らない。ほかの missa を「散会」のまま訳すと、27.9 の「散会が早いのは断食している人たちのため」「彼らだけが聖餐にあずかるのではない」のつながりが、やや分かりにくくなる。
- 訳での扱い：訳注は付けない。80, 5（27.8 の Missa autem, quae fit sabbato …, hoc est oblatio）の訳をメインで決める（索引に従って「土曜日にアナスタシスで行われる務め、つまりささげ物」のように、散会と訳し分けるか）。27.7・27.8 の後半・27.9 の missa は、索引が散会の列に入れるので「散会」のままでよい。決めたら訳語表の missa の行に書く。
- 確かめた資料：`n135_w1600.jpg`（本文 1〜9、16〜19 行）。OCR l. 6842–6862、23184–23198、28310–28316。Bernard l. 10088–10106、10115–10120。

### 27.9 ut citius absoluant hi, quos dicunt hic ebdomadarios（A は domadarios）と absoluere
- 底本（Geyer）：Quod autem dixi, maturius fit missa sabbato, id est ante solem, propterea fit, ut citius absoluant hi, quos dicunt hic ebdomadarios. Nam talis consuetudo est hic ieiuniorum in quadragesimis, ut hi, quos appellant ebdomadarios, id est qui faciunt septimanas, … Propter ipsos ergo, ut citius absoluant, ante sole fit missa in Anastase sabbato。校注は「9 dixi] dix̄ A」「10 domadarios A ebdomadarios scripsi」（p. 80 校注 9・10）。
- ほかの読み：A は 10 行目で domadarios。KB は、二行後に ebdomadarios, id est qui faciunt septimanas とあるので、ここも ebdomadarios と書くべきだと言う（l. 6292–6296）。Bernard は domadarios と刷る（l. 13036–13037）。
- 索引：「hebdomadarii (ebdomadarii cod.): quos dicunt hic ebdomadarios 80, 10. quos appellant ebdomadarios, i. e. qui faciunt septimanas 80, 12」（l. 21743–21746）。hebdomada の項は「qui faciunt (i. e. ieiunant) ebdomadas 80, 24」（l. 21735–21741）。facere の項は「facere integras septimanas ieiuniorum 81, 2. hi, qui faciunt ebdomadas 80, 24」（l. 27306–27312）。absoluere の項は「absolute = finire ieiunium 80, 10. 16」（l. 26197–26198。目的語なしで「断食を終える」）。
- 事実：Bernard の英訳の脚注は、修道院で hebdomadarius といえばふつう一週間交代で務める炊事係や倉庫係で、ときに一週間の礼拝を受け持つ聖職者を言うとし、アレキサンドリヤのディオニュシオスが六日間の断食をする人々に触れていることを挙げる（l. 10122–10127）。英訳は absoluant を、人々を（務めから）放つ意に訳す（l. 10096–10097）。
- 本の AGENTS.md との関係：エゲリアがその土地の呼び名を ut hic dicunt で出す monazontes、aputactitae は意味で訳す（「修道士たち」「世を捨てた人たち」）。ここは quos dicunt hic … id est qui faciunt septimanas と、呼び名とその説明を並べる。
- 読者への影響：中（訳語）— absoluant を索引の「断食を終える」と取らないと、なぜ散会を早めるのかが分からない。ebdomadarii は、音で写すと意味が分からない。
- 訳での扱い：訳注は付けない。absoluant は索引に従って「断食を早く終えられるように」。ebdomadarii の訳（意味で「一週の断食をする人たち」とするか、音で写して説明の id est … で意味を示すか）と、qui faciunt septimanas、qui faciunt ebdomadas（28.1）、facere integras septimanas ieiuniorum（28.3）の訳し方をメインで決め、訳語表に足す。
- 確かめた資料：`n135_w1600.jpg`（本文 9〜16 行、校注 9・10）。OCR l. 6851–6859、6878、21735–21746、26197–26198、27306–27312。KB l. 6292–6296。Bernard l. 10094–10100、10122–10127、13035–13038。

### 27.9 ut hi … dominica die, quia hora quinta fit missa, ut manducent と mox communicauerint
- 底本（Geyer）：Nam talis consuetudo est hic ieiuniorum in quadragesimis, ut hi, quos appellant ebdomadarios, id est qui faciunt septimanas, dominica die, quia hora quinta fit missa, ut manducent. Et quemadmodum prandiderint dominica die, iam non manducant nisi sabbato mane, mox communicauerint in Anastase。校注に注記はない（この部分）。
- 事実：初めの ut の後に挟みの句が続き、ut manducent で ut がもう一度置かれる（文の形の崩れ）。KB は、mox が simulatque（「〜するとすぐ」）の意なので、mox の前にコンマを置くべきだと言い、Gamurrini の第二版がそれを見落としたと言う（l. 4540–4548、6298–6301）。底本は mox の前にコンマを刷る（画像で確かめた）。索引も「mox … = simulatque cum fut. exact. 73, 20. 80, 15. 97, 13」（l. 28181–28187）。quemadmodum ＋未来完了は前の項と同じく「〜したら、〜した後は」（l. 28824–28830）。
- 読者への影響：小 — 「一週通しの断食をする人たちは、主の日には第五時に散会があるので、そこで食事をする。主の日に食事をしたら、もう土曜日の朝、アナスタシスで聖餐にあずかるとすぐ、まで食べない」。
- 訳での扱い：訳注・メモとも付けない。二つ目の ut は訳さずに文を整える。mox communicauerint は「聖餐にあずかるとすぐに」。
- 確かめた資料：`n135_w1600.jpg`（本文 11〜15 行）。OCR l. 6854–6858、28181–28187、28824–28830。KB l. 4540–4548、6298–6301。

### 28.1 ut alii quemadmodum manducauerint … hi qui faciunt ebdomadas（A は alj）
- 底本（Geyer）：Ieiuniorum enim consuetudo hic talis est in quadragesimis, ut alii quemadmodum manducauerint dominica die post missa, id est hora quinta aut sexta, iam non manducent per tota septimana nisi sabbato ueniente post missa Anastasis, hi qui faciunt ebdomadas。校注は「21 alj A」（p. 80 校注 21。alj の上に小さな印がある。「未確認」）。
- 事実：alii（「ある人たちは」）を、文の終わりの hi qui faciunt ebdomadas が言い直す。28.3 で、一週通しの断食ができない人たちのやり方が続く。KB は quemadmodum の時の用法の例にこの文を挙げる（l. 4537–4540）。Bernard の本文のこの語は OCR が崩れて読めない（l. 13054）。
- 読者への影響：小 — 「ある人たち、つまり一週通しの断食をする人たちは、主の日の散会の後、第五時か第六時に食事をしたら、次の土曜日のアナスタシスでの散会の後まで、一週間ずっと食べない」。
- 訳での扱い：訳注・メモとも付けない。alii と hi qui faciunt ebdomadas を一つの人々として訳し、27.9 の ebdomadarii と同じ人々であることが分かるようにする。
- 確かめた資料：`n135_w1600.jpg`（本文 20〜24 行、校注 21）。OCR l. 6863–6868、6880。KB l. 4537–4540。Bernard l. 13052–13057。

### 28.2 Sabbato autem quod manducauerint mane（Woelfflin は quando）
- 底本（Geyer）：Sabbato autem quod manducauerint mane, iam nec sera manducant, sed ad aliam diem, id est dominica, prandent post missa ecclesiae hora quinta uel plus et postea iam non manducant nisi sabbato ueniente, sicut superius dixi。校注は「24 quod] quando Woelfflin, Archiv f. lat. Lex. IV p. 274」「27 manducent A」（p. 80 校注 24・27）。
- ほかの読み：Woelfflin は quando と改める。Geyer は quod を残す。KB は quod を時の接続詞と取り（l. 4533–4535）、索引も「quod = quando (qua): … sabbato, quod manducauerint mane, iam nec sera manducant 80, 24」と挙げる（l. 28917–28922）。27 行目の manducant は A では manducent。
- 索引：「sera = Abend 80, 25. 81, 5」（l. 29149）。
- 読者への影響：小 — 「土曜日の朝に食事をしたら、その晩はもう食べず、翌日、主の日の教会の散会の後、第五時かそれより後に食事をする」。
- 訳での扱い：訳注・メモとも付けない。quod は「〜したら」の時の意で訳す。
- 確かめた資料：`n135_w1600.jpg`（本文 24〜27 行、校注 24・27）。OCR l. 6868–6871、6880–6882、28917–28922、29149。KB l. 4533–4535。

### 28.3 qua manducant, semel in die manducant（Gamurrini は quando）と、断食の段階（in medio quinta feria cenant、biduanas、de sera ad seram）
- 底本（Geyer）：Consuetudo enim hic talis est, ut omnes, qui sunt, ut hic dicunt, aputactitae, uiri uel feminae, non solum diebus quadragesimarum, sed et toto anno, qua manducant, semel in die manducant. Si qui autem sunt de ipsis aputactitis, qui non possunt facere integras septimanas ieiuniorum, sicut superius diximus, in totis quadragesimis in medio quinta feria cenant; qui autem nec hoc potest, biduanas facit per totas quadragesimas; qui autem nec ipsud, de sera ad seram manducant。校注は「29 aput actite A」「30 qua] quando Gamurrini」（p. 80 校注 29・30）、「1 aput actites A」（p. 81 校注 1）。
- ほかの読み：Gamurrini は qua を quando と改める。Geyer は qua を残す（索引の quod の項の見出しが「quod = quando (qua)」で、qua も時の意に取る、l. 28917）。28.3 の hoc は刷りが崩れて hcc に見えるが、hoc と読んだ（`research/sources.md` の画像の行）。
- 索引：aputactitae の項は「omnes qui sunt, ut hic dicunt aputactitae uiri uel feminae toto anno qua manducant semel in die manducant 80, 29. eorum ieiuniorum consuetudo diebus quadragesimarum 81, 1 ss.」（l. 19068–19074）。「biduanus 81, 4」と見出しを立てるだけで語義を言わない（l. 26545）。「integer: … facere integras septimanas ieiuniorum 81, 2」（l. 27800–27803）。「sera = Abend 80, 25. 81, 5」（l. 29149）。
- 事実：Bernard の英訳は、biduanas facit を二日ずつ断食する意に、de sera ad seram manducant を晩から晩まで断食する意に訳す（l. 10150–10153）。in medio quinta feria は、主の日から土曜日までの一週の「中ほどの木曜日」。
- 本の AGENTS.md との関係：aputactitae は「世を捨てた人たち」（23 章から。24 章以降も同じ）。uiri uel feminae は 24.1 の「男も女も」の形。sicut superius diximus は一人称複数（原文の数のとおり）。
- 読者への影響：中（訳語）— 断食の段階（一週通し、木曜日に一度食べる、二日ずつ、毎晩一度）が訳から分かるかどうか。biduanas の語義は索引が言わない。
- 訳での扱い：訳注は付けない。qua manducant は「食べるときは」。biduanas facit は「二日ずつの断食をする」、de sera ad seram manducant は「晩から晩まで（一日一度、晩に）食べる」の方向でメインが決める（語義は「未確認」）。qui … potest、facit の単数は、文の流れで複数と同じに訳してよい。
- 確かめた資料：`n135_w1600.jpg`（本文 28〜30 行、校注 29・30）、`n136_w1600.jpg`（本文 1〜5 行、校注 1）。OCR l. 6873–6875、6882–6892、19068–19074、26545、27800–27803、28917、29149。Bernard l. 10144–10153、13062–13070。

### 28.4 nec ille laudatur, qui satis fecerit, nec ille uituperatur, qui minus（satis）
- 底本（Geyer）：Nemo autem exigit, quantum debeat facere, sed unusquisque ut potest id facit, nec ille laudatur, qui satis fecerit, nec ille uituperatur, qui minus. Talis est enim hic consuetudo。校注に注記はない。
- 索引：satis の項は、初めに「satis = ualde」の用例（ingens satis 68, 26、s. pulchrum 70, 2 など）を並べ、その後に「scribere satis fuit (= longum fuit) 44, 15」「de porta quoniam satis est usque ad ecclesia 95, 7」と並べて「nec ille laudatur, qui satis fecerit, nec ille uituperatur, qui minus 81, 7」を挙げる（l. 29067–29086）。程度の副詞（ualde）の列ではなく、述語として「多く」「たくさん」の意で使う例の列に入れている。「exigere = fordern 81, 6」（l. 27278）。
- 事実：Bernard の英訳の脚注は、この文にエルサレムのキュリロス『教理講話』四・二七 とアウグスティヌス『カトリック教会の道徳』三三章 を並べる（l. 10180）。
- 本の AGENTS.md との関係：程度の satis（21.4、23.4）は「たいへん」、5.8 の satis fuit は「手に余る」。ここはどちらでもなく、qui minus（少なくしかしない人）と対になる。
- 読者への影響：小 — 「多くした人がほめられることも、少なくしかしなかった人がとがめられることもない」。
- 訳での扱い：訳注・メモとも付けない。satis fecerit は qui minus と対にして「多くした人」と訳す（「たいへん」「十分に」としない）。決めたら文型の訳し方の satis の項に足す。
- 確かめた資料：`n136_w1600.jpg`（本文 6〜8 行）。OCR l. 6893–6895、27278、29067–29086。Bernard l. 10154–10156、10180。

### 28.4 ut nec panem, quod librari non potest（A は quid liberari）
- 底本（Geyer）：Esca autem eorum quadragesimarum diebus haec est, ut nec panem, quod librari non potest, nec oleum gustent, nec aliquid, quod de arboribus est, sed tantum aqua et sorbitione modica de farina。校注は「10 quid liberari A quod librari Gamurrini qui deliquari Bernard」（p. 81 校注 10）。
- ほかの読み：
  - A は quid liberari。
  - Gamurrini は quod librari（底本はこれを刷る）。
  - Bernard は qui deliquari と改め（l. 13074。脚注で A の quid liberari を記す、l. 13084）、英訳もその意で訳す（l. 10159–10160）。
  - KB は、Gamurrini が librari で何を言いたいのか分からないと言い、quo liberari non potest（「それについては免除されることができない」）と推定した。断食の量（どれだけするか）は各人に任されるが、断食の中身（パン、油、木の実を口にしないこと）は免除がない、という筋に読む。ヨルダンの谷の修行者がパンを食べなかったというパラディオス『ラウソス修道者史』の記事も挙げる（l. 6303–6327）。底本はこの推定を校注にも挙げず、Gamurrini の quod librari を刷る。
- 索引：librare、liberare の見出しは見つからなかった（OCR で librar を探して、当たったのは librarius だけ。l. 27542）。「oleum: aputactitae quadragesimarum diebus nec panem nec oleum gustant 81, 10」（l. 23643–23645）、「esca = cibus … esca eorum」（l. 27215–27217）、「sorbitio de farina 81, 11」（l. 29230）、「farina 81, 12」（l. 27336）。KB は sorbitione を奪格が対格（gustent の目的語）の代わりに立ったものとする（l. 6306）。
- 読者への影響：大 — panem, quod librari non potest が何を言うのかが、底本の読みでははっきりしない。底本の校注も、KB も、意味を説明しない。読みによって「〔はかれない？〕パン」「溶かせないパン」「免除のないもの」と意味が変わる。
- 訳での扱い：訳の方向をメインで決める（「パンも…口にしない」と、関係節を軽く訳して大筋だけ残すか）。librari の語義が確かめられないので、関係節を訳すなら訳注を付ける。注の案：「この句は写本が崩れていて、意味がはっきりしない。」（23 字）。`// ` メモに、写本の quid liberari と、Gamurrini、Bernard、Geyer（KB）の案を書く。aqua et sorbitione modica de farina は「水と、小麦粉で作った少しの粥だけ」の方向。
- 確かめた資料：`n136_w1600.jpg`（本文 8〜12 行、校注 10）。OCR l. 6895–6900、23643–23645、27215–27217、27336、27542、29230。KB l. 6303–6327。Bernard l. 10158–10161、13073–13076、13084。

### 28.4 farina: ... quadragesimarum sic fit, ut diximus（編者が示す脱落）
- 底本（Geyer）：sed tantum aqua et sorbitione modica de farina: ... quadragesimarum sic fit, ut diximus。点線は三つの点（画像で確かめた）。校注は「12 lacunam quae est post uerbum farina alii aliter suppleuerunt: ieiunium Gamurrini ac prima quidem septimana Cholodniak ieiunium ergo ipse scripsi」（p. 81 校注 12。「farina の後の欠けを、人により違う語で補った」）。
- ほかの読み：Gamurrini は ieiunium（「四旬節の断食は、このように行われる」）。Cholodniak は ac prima quidem septimana。Geyer は ieiunium ergo を挙げ、「ipse scripsi」と書くが、本文には点線だけを刷り、補いを入れていない（KB では、Gamurrini の ieiunium は正しく、ergo も入れたいと言う。27.8 の Sic ergo singulae septimanae celebrantur quadragesimarum と並べる、l. 6329–6334）。Bernard は欠けを示さず、Ieiunium quadragesimarum sic fit と続ける（l. 13077）。KB は、続く 29.1 の Et completo earum septimanarum の後にも欠けを考え、その欠けには、四十日の断食のほかにいつ断食したか、あるいは四十日が終わった後の世を捨てた人たちの食べ物のことが書かれていたはずだと言う（l. 6336–6352。29.1 は次のページ）。
- 本の AGENTS.md との関係：底本の点線は刷られた数のまま底本テキストに残し、訳は欠けた語を補わず、読者の理解が変わるところは訳注で語が欠けていることを示す（29.1 の septimanarum .... uigiliae と同じ扱い）。
- 読者への影響：中 — 点線のまま訳すと、「四旬節の〔 〕は、わたしたちが言ったとおりに行われる」と主語が欠ける。欠けを示さないと、文が崩れて見える。
- 訳での扱い：訳注を付ける。注の案：「ここで写本の語がいくつか欠けている。」（18 字）。補いの ieiunium（断食）は訳に入れない。欠けの後の quadragesimarum sic fit, ut diximus を主語なしでどう訳すか（「四旬節の……は、言ったとおりに行われます」など）はメインで決める。29.1 の点線の訳注とそろえる。
- 確かめた資料：`n136_w1600.jpg`（本文 11〜13 行、校注 12）。OCR l. 6899–6900。KB l. 6329–6352。Bernard l. 13076–13077。

### 27.2〜28.4 曜日の言い方（secunda feria … sexta feria）と時刻
- 底本（Geyer）：27.4 secunda feria、27.5 tertia feria、quarta feria、sexta feria、27.7 quinta feria、sexta feria、28.3 in medio quinta feria。主の日は die dominica、土曜日は sabbatum。
- 索引：「feria = Wochentag 78, 25. 79, 2. 3. 6. 11. 12. 22. 23. 26. 81, 14 …」（l. 21371–21374）。
- 事実：secunda feria から sexta feria は、主の日を一日目として数えた二日目から六日目、つまり月曜日から金曜日に当たる。Bernard の英訳も、欄外の小見出しに Sunday、Monday、Tuesday、Wednesday、Thursday、Friday、Saturday と曜日の名を置く（l. 9996、10013、10022、10025、10058、10061、10089）。
- 本の AGENTS.md との関係：dies dominica は「主の日」、sabbatum は「土曜日」。feria の訳語はまだない。
- 読者への影響：小（訳語）。
- 訳での扱い：訳注は付けない。「月曜日」〜「金曜日」と今の曜日で訳すか、「第二日」〜「第六日」と字どおりに訳すかをメインで決め、訳語表に足す（土曜日を「土曜日」とする決まりに合わせるなら今の曜日）。de pullo primo は 24.9 の「最初の鶏が鳴く」、de noctu（27.5）は「夜のうちに」（索引の「de noctu 79, 3」、l. 28253）。
- 確かめた資料：`n133_w1600.jpg`、`n134_w1600.jpg`、`n136_w1600.jpg`（本文の曜日の行）。OCR l. 21371–21374、28253。Bernard l. 10069–10072。

### 27.1〜28.4 綴りや語形だけの A の読み
- 底本（Geyer）：次の語を直した形で刷り、A の形を校注に記す。27.1 septimanae（A septimanas、septimane。p. 78 校注 3・4）、unus（A unum。校注 10）、27.3 Postmodum（A postmodu。校注 17）、Anastase（A は行末に anastase。校注 20）、27.4 quae（A que。校注 27）、27.5 ad sextam、ad nonam（A ad sexta、ad nona。p. 79 校注 5・6）、martyrorum（A martiriorum。校注 7）、27.6 quadragesimarum（A で quadragesimerum から直されている。校注 12）、Syon（A sion。校注 13）、Anastase（A astase。校注 18・27、p. 80 校注 7・15・19）、27.9 dixi（A は dix̄ と略す。p. 80 校注 9）、28.3 aputactitae、aputactitis（A aput actite、aput actites。p. 80 校注 29、p. 81 校注 1）。28.2 の manducant（A manducent。p. 80 校注 27）は 28.2 の項。
- 読者への影響：なし。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n133_w1600.jpg`、`n134_w1600.jpg`、`n135_w1600.jpg`、`n136_w1600.jpg` の校注。OCR l. 6784–6788、6826–6837、6877–6883。

## 未確認

- 28.4 の librari の語義。底本の索引に見出しがなく（l. 27542 の librarius のほか当たりなし）、KB は Gamurrini の意図が分からないと言う（l. 6308–6309）。ラテン語の辞書（Lewis & Short）を Perseus から取ろうとしたが、HTTP 403 で取れなかった。Bernard の deliquari の意味も、英訳の訳し方（l. 10159–10160）のほかには確かめていない。
- 28.3 の biduanas facit と de sera ad seram manducant の語義。索引は biduanus の見出しを立てるだけで（l. 26545）、訳の案は Bernard の英訳の取り方（l. 10150–10153）と語の形による。
- 27.3 の Du Chesne の non（Origines du culte chrétien p. 479）が、何が主の日に行われないと読むのか。27.5 の ieiunatur の論拠（同じ p. 479）も。Du Chesne の書は cache になく、読んでいない。
- 27.5 の A の読み。底本の校注は ieiunantur A とするが、KB の補遺（l. 7216。OCR が崩れている）と Bernard の本文（l. 13005）は ieiunari とする。KB の補遺の画像は見ていない。
- 27.6 で Geyer が sit と刷る根拠。校注は、A が lucernari sic sic で、一つ目の sic が s に線を引いて消されていると言う。Geyer が消された一つ目の sic を sit の書き損じと見たのか、ほかの理由かは、校注も KB（l. 6255–6256）も言わない。
- 28.4 の点線について、校注が「ieiunium ergo ipse scripsi」と書きながら、本文に補いを刷らないこと。校注の言い方の意味（本文に入れたつもりで刷らなかったのか、案として記したのか）は確かめていない。
- KB の補遺 l. 7213–7234（27.5、27.8、28.4 の欠けについての Cholodniak の案と Geyer の答え）は、OCR が崩れて読めない。
- 27.1 の eortae を、ギリシア語の ἑορταί（祭り）の写しと見ることは、底本の索引（heorte、l. 27617–27619）と Bernard の英訳のギリシア文字（l. 9992）による。断食の季節をなぜ「祭り」と呼ぶのかは、資料で確かめていない。
- 27.3 の Martyrio を、事物の索引の Martyrium の項が箇所に挙げない理由（l. 23005–23011）。Constantinus の項はこの文の言い方を引く（l. 20415–20424）。
- p. 78 校注 17 の póstmodu と p. 80 校注 21 の alj で、A の語の上に小さく刷られた印の意味（略記の印か、行の上に書かれた字か）。画像では印があることだけを確かめた。
