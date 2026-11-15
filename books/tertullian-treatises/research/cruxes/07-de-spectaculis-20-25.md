# 07-de-spectaculis-20-25 の論点（20〜25）

略号と資料の所在は [README.md](README.md)。『見世物について』の写本は A（Agobardinus）だけで、B〜E は刊本（B＝Gangneius 1545、C＝Gelenius、D＝Pamelius 1579、E＝Rigaltius 1634）。「reliqui」「BCD」は写本の読みではない。CSEL の略号は Oehler と文字の割り当てが違う（CSEL の C は Clemens の写本）ので、CSEL の読みは名前で書く。CSEL の OCR は略号を崩して読む（Big＝Rig、Gei＝Gel、Seal＝Scal、Eat＝Lat、l. 1690 の G＝Clemens の写本）ので、名前に直して挙げる。

Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/page/n80_w1600.jpg`（p. 51）〜`n87_w1600.jpg`（p. 58）。N＝印刷ページ＋29。各ページを `node tools/image.js crop` で上（`pct:0,0,100,34`、本文）、中（`pct:0,30,100,30`、本文の終わりと校注）、下（`pct:0,58,100,42`、注解）に切って読み、24 章の注 b の見出しは n85 の `pct:55,88,45,4` を 2 倍に拡大して確かめた（切り出しは scratchpad に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 7288–8410（本文・校注・注解が混ざり、行の順も乱れるので、行番号はおよその位置）。CSEL 20 は `cache/archive.org/quintiseptimiflo20tert/quintiseptimiflo20tert_djvu.txt` の l. 1654–1925（20 章 本文 l. 1654–1677・校注 l. 1682–1691、21 章 本文 l. 1679–1740・校注 l. 1691、1749–1758、22 章 本文 l. 1742–1780・校注 l. 1758–1763、1804–1808、23 章 本文 l. 1782–1839・校注 l. 1808–1812、1860–1865、24 章 本文 l. 1841–1856・校注 l. 1866–1872、25 章 本文 l. 1881–1899・校注 l. 1911–1921）。CSEL の欄外は、23.4 に「Matth. 6, 27. Luc. 12, 25.」（l. 1802）、23.6 に「Deuter. 22, 5.」（l. 1858）、25.4 に「cf. Luc. 6, 29.」（l. 1909）。Migne『ラテン教父全集』1 巻の本文と注は `cache/archive.org/bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1844_1/…_djvu.txt` の l. 59448–60013（注は l. 60156 まで）。ANF の英訳は `cache/ccel.org/anf03.txt` の l. 7266–7439（20 章 l. 7266、21 章 l. 7296、22 章 l. 7323、23 章 l. 7345、24 章 l. 7388、25 章 l. 7412、26 章 l. 7440）。英訳は章の切れ目を確かめただけで、文言は読んでいない。

校注の番号と注解の記号は章ごとに振り直される。20 章は校注 1〜12（p. 51）・13〜22（p. 52）、注 a〜c（p. 51）・d〜f（p. 52）。21 章は校注 1〜6（p. 52）・7〜21（p. 53）、注 a（p. 52）・b〜g（p. 53）。22 章は校注 1〜6（p. 53）・7〜21（p. 54）、注 a（p. 53）・b〜d（p. 54）。23 章は校注 1〜3（p. 54）・4〜18（p. 55）、注 a〜c（p. 54）・d〜g（p. 55）。24 章は校注 1〜15（p. 56）、注 a・b（p. 56〜57）。25 章は校注 1〜6（p. 56）・7〜12（p. 57）・13〜14（p. 58）、注 a〜d（p. 57）・e（p. 58）。Oehler の欄外の聖書の箇所は、23.6 の「Deut. XXII, 5.」（p. 55）だけ。

章の切れ目は、CSEL だけが違う。CSEL は 21 章を Omnia autem penes veritatem dei fixa sunt（底本の 20.6 の二つ目の文）から始める（l. 1679）。Oehler、Migne（l. 59621 の CAPUT XXI は Ethnici から）、ANF（l. 7296）は Ethnici から。章の番号は本の `AGENTS.md` のとおり Oehler に従う。

---

### 20.1 sine dubio tergiversatione amittendae voluptatis … qua directo prohibeant（Oehler の推定 qua と、CSEL の prohibeat）
- 底本（Oehler）：Quam vana igitur, immo desperata argumentatio eorum, qui, sine dubio tergiversatione amittendae voluptatis, obtendunt nullam eius abstinentiae mentionem specialiter vel localiter in scripturis determinari, qua directo prohibeant eiusmodi conventibus inseri servum dei.
- ほかの読み（20 章の校注 1〜7、p. 51）：tergiversatione は AE、tergiversationem は残り。amittendae は E、admittendae は残り。Fr. Junius は voluptati obtendunt? と推定し、すべての本は voluptatis obtendunt（Aβ は optendunt）。vel localiter は AE が欠く。qua は ego（Oehler 自身の推定）、quae は残り。prohibeant は AβBCD、prohibent は Aφ、prohibeat は E と Fulv. Ursinus。inseri は A・B の余白・E、interesse は BCD。CSEL は tergiversatione、amittendae（Rigaltius）、vel localiter（A は欠く）、quae directo prohibeat（Ursinus）、inseri を採り、Oehler の qua を挙げる（l. 1654–1659、1682–1685）。Migne は tergiversationem admittendae、specialiter だけ、quae directo prohibeat、interesse（l. 59450–59455）。
- 採る校訂者：注 a（p. 51）は、A がほかの多くの語と同じく欠く vel localiter を残すべきだと言い、La Cerda の説明どおり、彼らは「聖書のどこで、特に、どの箇所で、これらの見世物が禁じられているか」を知りたがっている、と言う。
- 読者への影響：小 — 「疑いなく、快楽を失うまいとする言い逃れから、聖書にはこの控えることについて、特に名指して、また箇所を挙げての言及がなく、そうした集まりに神のしもべが加わることをはっきり禁じてはいない、と言い張る人々の論」。qua（それによって＝その言及によって）と quae（言及が禁じる）、主語の複数（scripturae）と単数（mentio）で構文は変わるが、意味は同じ。
- 訳での扱い：訳注は付けない。abstinentia は訳語表の「控えること」。specialiter vel localiter は注 a のとおり「特に、また箇所を挙げて」の類い。servus dei は「神のしもべ」。
- 確かめた資料：`page/n80_w1600.jpg` の中（本文、校注 1〜7）、下（注 a）。OCR l. 7288–7308、7318–7322、7359–7362、7384–7388、7409–7414。CSEL l. 1654–1659、1682–1685。Migne l. 59450–59455。

### 20.2 Novam proxime defensionem suaviludii cuiusdam audivi. Sol, inquit, … Sane sol et in cloacam radios suos defert（suaviludius と、ディオゲネスの言葉）
- 底本（Oehler）：Novam proxime defensionem suaviludii cuiusdam audivi. Sol, inquit, immo etiam ipse deus de caelo spectat, nec contaminatur. Sane sol et in cloacam radios suos defert, nec inquinatur.
- ほかの読み（20 章の校注 8〜12、p. 51）：Latinius は suadiludii（Barth が『テーバイス』4 巻 454 行への注で支持。Oehler は「Barth はテルトゥリアヌスの言葉を分かっていない」と言う）。audivi は A が欠く。Aβ は inquid。A は ipse etiam。Sane は AE、Plane は残り。CSEL は suaviludii、immo ipse etiam deus、sane（A）を採る（l. 1659–1661、1685–1686）。Migne は Plane（l. 59584 の前後）。
- 採る校訂者：注 b（p. 51、Pamelius）は、テルトゥリアヌスが『兵士の冠について』6 章でも同じく suaviludios と言い、Rhenanus はそこで、キリスト者のうちで、まだ見世物の楽しみ、つまり遊戯の甘さ（suavitas ludorum）を喜んでいる者たちと解いた、と言う。注 c（p. 51〜52）は、sol et in cloacam はディオゲネスの言葉で、ディオゲネス・ラエルティオス 6 巻 63 に「汚れた所に入ると責めた人に、『太陽も便所に入るが、汚れはしない』と言った」とあると言い、オリゲネス『ケルソス反駁』6 巻、シュネシオス『書簡』57、プルデンティウス『シュンマクス反駁』2 巻 831 行の似た言い方を挙げる。
- 読者への影響：小 — suaviludius は「遊戯の甘さを好む者」の意味の造語で、注 b を知らないと何者か分からない。Sol, inquit … は見世物好きの言い分、Sane sol … は書き手が皮肉に受けて、相手の言い分を「太陽は下水にも光を注ぐが汚れない」と言い換えたもの。
- 訳での扱い：訳注は付けない。suaviludius の訳（「遊戯好きのある人」「見世物の楽しみが好きなある人」の類い）は訳者が決める。言い分は本の `AGENTS.md` の言い分の型（「」に入れて常体。inquit を受ける）。Sane は「なるほど」「たしかに」の類いの皮肉。ディオゲネスの名は補わない（本文に名がなく、読者は話が分かる）。
- 確かめた資料：`page/n80_w1600.jpg` の中（本文、校注 8〜12）、下（注 b、注 c の初め）、`page/n81_w1600.jpg` の下（注 c の続き）。OCR l. 7309–7311、7363–7365、7369–7378、7391–7392、7416–7423、7479–7497。CSEL l. 1659–1661、1685–1686。Migne l. 59456–59457、59584–59591。

### 20.3–20.4 Utinam autem deus nulla flagitia hominum spectaret … Comparas, homo, reum et iudicem（小さな異読）
- 底本（Oehler）：Utinam autem deus nulla flagitia hominum spectaret, ut omnes iudicium evaderemus. Sed spectat … et idcirco ergo nos non spectabimus, ne videamur ab illo qui omnia spectat. Comparas, homo, reum et iudicem: reum, qui, quia videtur, reus est: iudicem, qui, quia videt, iudex est.
- ほかの読み（20 章の校注 13〜16、p. 52）：iudicia は AE。et idcirco は AE、Idcirco は残り。A は spectat omnia。Comparas は (Aβ)BCE、Compares は (Aφ)D。CSEL は iudicium（B）、et idcirco、spectat omnia（A）、comparas を採る（l. 1663–1666、1686–1687）。Migne は Idcirco（l. 59704 の前後）。
- 読者への影響：小 — 「神が人の悪行を何も見なければよかったのに。そうすれば、わたしたちはみな裁きを逃れられたろう。だが神は盗みも…見世物そのものも見ておられる。だからこそ、わたしたちは見ないのだ。すべてを見ておられるかたに見られないように」。spectare（見物する）を神の「見る」に掛けた言葉遊び。Comparas … は、見られる被告と、見る裁き手を並べるな、という反論。
- 訳での扱い：訳注は付けない。spectare の言葉遊び（見世物を「見る」と神が「見る」）が残るように訳す。ne videamur は「見られないように」で、見物する者が神に見られて裁かれる、という向き。神の動作は尊敬語（本の `AGENTS.md`）。
- 確かめた資料：`page/n80_w1600.jpg` の中（本文の初め）、`page/n81_w1600.jpg` の上（本文）、中（校注 13〜16）。OCR l. 7372、7441–7446、7465–7466。CSEL l. 1662–1668、1686–1687。Migne l. 59700–59706。

### 20.4 quod deus etiam extra cameras et gradus et apulias oculos habet? Erramus.（apulias と、CSEL の quoniam）
- 底本（Oehler）：Numquid ergo et extra limites circi furori studemus, et extra cardines theatri impudicitiae intendimus, et insolentiae extra stadium, et immisericordiae extra amphitheatrum, quod deus etiam extra cameras et gradus et apulias oculos habet? Erramus.
- ほかの読み（20 章の校注 17〜21、p. 52）：A は impudicitiae intendimus … extra amphitheatrum を欠く。B は studium（stadium の代わり）。A は etiam を欠く。Scipio Maffei は Apulas、Fulv. Ursinus は ἐπαυλίας（Fr. Junius が支持）。CSEL は quoniam（A の略記 qm。quod は B）と読み、apulias に†を付けて崩れた語とし、Klussmann の aperturas と、校訂者の aulaea（推測）を挙げる（l. 1668–1672、1688–1690）。Migne も quod … apulias（l. 59706–59709）。
- 採る校訂者：注 d（p. 52）は extra cardines theatri に 3 章と Maffei を見よとする。注 e（p. 52）は、camerae は円天井の通路、柱廊（fornices, porticus）だと Lipsius と Maffei を挙げる。注 f（p. 52）は、apulias は A の読みで、Rigaltius によれば、劇場で飾りと日ざしよけに張る幕のことで、ときに紫で、最上の羊毛がアプリアの産だった（マルティアリス 14 巻 155）ので、幕がアプリアの名で呼ばれた、と言う。Maffei も日よけ幕と解くが Apulas と直したがる。Latinius はフェニキアの語で「雨よけの場所」、Ursinus は ἐπαυλίας、Bulengerius は apelias・aphelias とギリシア語から取る、と並べる。Oehler はどれを採るとも言わないが、本文は A の apulias を残す。
- 読者への影響：中 — 底本では「神は、円天井の通路や階段席や日よけ幕の外にも目を持っておられるのだから、わたしたちは競走場の外でも狂乱に熱中し、劇場の外でも恥知らずなことに心を向けるのか」と、見世物の場の外でも同じ罪は罪だと言う反語。apulias の意味は確かでない。quod（〜ということで）と quoniam（〜だから）は意味を変えない。Erramus は、相手の論に立ったときの「わたしたちは思い違いをしている（ことになる）」という短い言い返しで、次の Nusquam et nunquam … につながる。
- 訳での扱い：訳注は付けない。apulias は注 f の Rigaltius の解（日よけ幕）で訳すのが自然だが、語は確かでない（「未確認」）。cameras は注 e のとおり「円天井の通路」の類い、gradus は「階段席」。furor、impudicitia は訳語表の「熱狂」「恥知らずなこと」。stadium は訳語表の「競技場」。
- 確かめた資料：`page/n81_w1600.jpg` の上（本文）、中（校注 17〜21）、下（注 d〜f）。OCR l. 7446–7450、7466–7469、7499–7539。CSEL l. 1668–1672、1688–1690。Migne l. 59706–59709、59600。

### 20.6 Omnia autem penes veritatem dei fixa sunt.（章の切れ目と、Clemens の写本）
- 底本（Oehler）：Non potest aliud esse quod vere quidem est bonum seu malum. Omnia autem penes veritatem dei fixa sunt.（20 章の終わり）
- ほかの読み（20 章の校注 22、p. 52）：Clemens の写本は penes vos veritate defixa sunt。CSEL はこの文で 21 章を始め、Clemens の写本の形も挙げる（l. 1679、1690–1691）。21 章の校注 1〜6（p. 52）：Aβ は nulla sit veritas、Aφ は nulla est veritas（plenitudo の代わり）。A は plenitudo quia nec doctor veritatis deus を欠く。A は et bonum、et libidine。Aφ は interpretatur。A は et alibi malum quod alibi bonum を欠く。CSEL は malum et bonum … et libidine（A）を採る（l. 1722、1749）。
- 採る校訂者：21 章の注 a（p. 52）は alibi bonum quod alibi malum に Heraldus『余論』1 巻 2 章を見よとするだけ。
- 読者への影響：小 — 「本当に善であるもの、悪であるものが、別のものになることはありえない。すべては神の真理のもとに定められている」。この文は、20 章の締めとも、21 章の異教徒との対比（真理の満ちたものを持たない異教徒）の書き出しとも読める。どちらでも意味は同じ。
- 訳での扱い：訳注は付けない。Oehler どおり 20 章の終わりに置く。veritatis plenitudo（21.1）と 20.5 の disciplinae plenitudo、veritatis integritas は、語がつながるように訳す。
- 確かめた資料：`page/n81_w1600.jpg` の中（本文、20 章の校注 22、21 章の校注 1〜6）、下（21 章の注 a）。OCR l. 7454–7459、7469–7476、7507–7513、7542–7544。CSEL l. 1677–1680、1690–1691、1722–1723、1749。Migne l. 59618–59621。ANF l. 7290–7296（章の切れ目だけ）。

### 21.2 idem in circo aliter non exuat, nisi totum pudorem in faciem omnium intentet（Ursinus の推定 exuat）
- 底本（Oehler）：Sic ergo evenit, ut qui in publico vix necessitate vesicae tunicam levet, idem in circo aliter non exuat, nisi totum pudorem in faciem omnium intentet: ut et qui filiae virginis ab omni spurco verbo aures tuetur, ipse eam in theatrum ad illas voces gesticulationesque deducat
- ほかの読み（21 章の校注 7〜12、p. 53）：Sic は ACDE、Si は B。AB は ut quis。exuat は Fulv. Ursinus の推定、exuet は AB、exultet は残り。intentet は BCDE、intendit は A と B の余白。ut et は AB、et は残り。Aβ は ab omni scaenico（すなわち obsceno）verbo。CSEL は exuet に†を付けて崩れた語とし（Gelenius の exsultet を挙げる）、intendit（A と B の余白）を採る（l. 1724–1727、1750–1751）。
- 採る校訂者：注 b（p. 53）は、競走場の外では用を足すために人前で上着を上げることもためらう人が、競走場では恥を何も気にせず、皆の前で用を足し、恥ずかしいところをすっかり皆の顔に向ける、と言い換え、Miniana の論を挙げ、exuat は上着にではなく膀胱に掛かり（膀胱を空にする）、pudor は恥部（pudenda）の意味で、テルトゥリアヌスは『処女のヴェールについて』11 章でも pudor をその意味で使う、と言う。
- 読者への影響：中 — 底本（推定）では「人前では、膀胱の差し迫った必要があっても上着をほとんど上げない人が、競走場では、自分の恥をすっかり皆の顔に向けずには、用を足さない」。写本・刊本の形（exuet、exultet）では「恥をすっかりさらさずには、跳ね回らない」の類いになり、何をしているかが変わる。どちらでも、人前での慎みが競走場では消える、という要点は同じ。
- 訳での扱い：訳注は付けない。底本の推定 exuat で、注 b のとおり訳す。pudor は「恥ずかしいところ」の類いで、露骨にしすぎない言い方は訳者が決める。spurcum verbum は 17.2 の spurcitia（汚らわしさ）と語をつなげられる。
- 確かめた資料：`page/n82_w1600.jpg` の上（本文）、中（校注 7〜12）、下（注 b）。OCR l. 7553–7557、7605–7606、7621–7636、7646–7648、7661–7662、7671。CSEL l. 1724–1728、1750–1751。

### 21.2 idem gladiatori atroci petat rudem et pileum praemium conferat（木剣と帽子）
- 底本（Oehler）：et qui insigniori cuique homicidae leonem poscit, idem gladiatori atroci petat rudem et pileum praemium conferat
- ほかの読み（21 章の校注 15〜18、p. 53）：A は id est gladiatori。petat は BCDE、sperat は A と B の余白。AB は pilleum。E は praemium conferat を欠く。CSEL は petat、pilleum を採り、Klussmann の indigniori（insigniori の代わり）と expetat を挙げ、conferat の後に Klussmann が欠落の印を付けたことと、alium（推測）を挙げる（l. 1736–1737、1752–1754）。Migne は petat rudem, et pileum praemium conferat（l. 59642–59643）。
- 採る校訂者：注 e（p. 53）は、rudis（木剣）と pileus（帽子）は自由の印だと言い、Turnebus、Lipsius などを挙げる。Migne の注 (d)（Le Prieur）は、闘技場でよく戦った剣闘士が木剣を与えられ、rudiarii と呼ばれた、と言う（l. 59735–59738）。
- 読者への影響：中 — 「目立った人殺しにはだれにでも獅子を求める人が、残忍な剣闘士には木剣を求め、帽子を褒美として与える」。注 e を知らないと、木剣と帽子が剣闘からの解放（自由）の印であることが分からず、皮肉（人殺しを罰せよと叫ぶ人が、人殺しの剣闘士を自由にしてやる）が取れない。
- 訳での扱い：訳注は付けない。rudis と pileus を「木剣と帽子」とだけ訳すか、「解放の印の木剣と帽子」のように意味を補うかは訳者が決める。leo は表記の決まりどおり「獅子」。
- 確かめた資料：`page/n82_w1600.jpg` の上（本文）、中（本文、校注 15〜18）、下（注 e）。OCR l. 7581–7585、7609–7610、7649、7665、7688–7693。CSEL l. 1736–1737、1752–1754。Migne l. 59640–59643、59735–59738。

### 21.2 illum vero confectum etiam oris spectaculo repetat … tanto durior, si non voluit（Latinius の推定 oris と、si non voluit）
- 底本（Oehler）：illum vero confectum etiam oris spectaculo repetat, libentius recognoscens de proximo quem voluit occidere de longinquo, tanto durior, si non voluit.
- ほかの読み（21 章の校注 19〜21、p. 53）：etiam oris spectaculo は E と Latinius、etiam amore spectaculi は Jos. Scaliger、etiam amoris spectaculo は ABCD。Fulv. Ursinus は quem noluit。si non voluit は AE、si noluit は BCD、si voluit は Ursinus。CSEL は etiam oris（Latinius）を採り、si non valuit と直す（「scripsi」。A は non voluit、B は noluit、Ursinus は voluit。l. 1738–1740、1756–1758）。Migne は oris spectaculo、tanto durior si noluit（l. 59645–59647、59755–59756）。
- 採る校訂者：注 f（p. 53、Rigaltius）は、死にかけている者の口と顔まで見たがる、と言う。注 g（p. 53）は si non voluit を「獅子にその者を殺させようとは思わず、死に至るまで引き裂かせるだけにしようと思ったのなら」とし、そのほうがもっと残酷だからだ、と言う。
- 読者への影響：中 — 「獅子に引き裂かれたその人殺しを、顔まで見ようと呼び戻させ、遠くから殺させたいと思った者を、近くでいっそう喜んで見分ける。殺させたくはなかった（引き裂かせたかっただけ）なら、なおさら冷酷だ」。写本の amoris では「愛の見世物のために」となり意味が通りにくい。CSEL の non valuit では「（獅子が）殺しきれなかったのなら」の類いになり、最後の句の向きが変わる。
- 訳での扱い：訳注は付けない。底本の oris と si non voluit で、注 f・注 g のとおり訳す。最後の句は省略が多いので、注 g の補い（死ぬまで引き裂かせるだけにしたいと思ったのなら）を訳で少し補うかは訳者が決める。
- 確かめた資料：`page/n82_w1600.jpg` の中（本文、校注 19〜21）、下（注 f・g）。OCR l. 7585–7587、7611–7612、7650–7652、7666–7668、7695–7700。CSEL l. 1737–1740、1756–1758。Migne l. 59643–59647、59755–59756。

### 22.1 ipsi auctores et administratores spectaculorum … illos amantissimos（auctores と actores、amantissimos）
- 底本（Oehler）：Etenim ipsi auctores et administratores spectaculorum quadrigarios, scenicos, xysticos, arenarios illos amantissimos, …
- ほかの読み（22 章の校注 1〜6、p. 53）：D は de inaequata（Quid mirum? の次）。Aβ は mali per innotans sensus、Aφ は mali super innotans sensus。D は varietate。A は ipso。auctores は ADE、actores は BC。Fulv. Ursinus は amatissimos、Lipsius（タキトゥス『年代記』1 巻 77 への注）は amentissimos。CSEL は auctores を採り、校注で actores を A の読みとして挙げる（l. 1744、1760。Oehler の報告と食い違う）。Migne は actores、amentissimos（l. 59652–59655）。
- 採る校訂者：注 a（p. 53）は arenarios に Lipsius『闘技場について』3 章を見よとする。22 章の注 b（p. 54）で Oehler は、自分が初めに考えた直し（後の項）を説明する中で、「男でありながら女の魂を持つ者」は女々しい者で、その者たちは前の amantissimos の語ですでに示されている、と言う。
- 読者への影響：中 — 「見世物の主催者や管理者たちそのものが、戦車の御者、舞台の役者、運動選手、闘技場の者たちという、あの、ひどく愛されている者たちを」。auctores（主催者、元締め）なら見世物を催す側、actores なら演じる側が主語になる。amantissimos は能動の形（ひどく愛する者たち）だが、文脈は「ひどく愛されている」で、Ursinus はそれを amatissimos と直す。Lipsius の amentissimos では「ひどく狂った」になる。
- 訳での扱い：訳注は付けない。auctores は「主催者たち」の類い（訳語表の auctor「創始者」とは働きが違う。「メインで決めること」）。amantissimos は「ひどく愛されている」の類いで、22.2 の Amant quos multant（愛しているのに罰する）とつなげる。quadrigarii、scenici、xystici、arenarii は「四頭立ての戦車の御者、舞台の役者、運動選手、闘技場の者たち」の類い。
- 確かめた資料：`page/n82_w1600.jpg` の中（本文、校注 1〜6）、下（注 a）。`page/n83_w1600.jpg` の上（本文）、下（注 b）。OCR l. 7590–7602、7613–7615、7655、7674–7678、7703–7704。CSEL l. 1742–1746、1759–1760。Migne l. 59650–59655。

### 22.1 quibus viri animas, feminae autem illis etiam corpora sua substernunt（Lipsius の直しと、Oehler の解）
- 底本（Oehler）：quibus viri animas, feminae autem illis etiam corpora sua substernunt
- ほかの読み（22 章の校注 7・8、p. 54）：quibus viri animas, feminae は E、Fulv. Ursinus、Lipsius。Aβ は quibus viris …… feminis、Aφ と B は quibus viris animas feminis、B の余白・C・D は quibus viles animas foeminae（B の余白は foeminis）。autem illis は Lipsius の直し、aut illi はすべての本。CSEL も Ursinus と Lipsius の形を採る（l. 1746–1747、1760–1762）。Migne は quibus viri animas foeminae, aut illi etiam（l. 59655–59656）。
- 採る校訂者：注 b（p. 54）は、Lipsius がこの箇所を直したと言い、Oehler は Lipsius の直しを知る前に quibus viris animas feminis feminae aut illi etiam corpora sua substernunt と書き直そうと考えた、と言う。続けて、テルトゥリアヌスが「男たちが役者、御者、運動選手、闘技場の者たちに魂を差し出す」と言うのを、Oehler は Rigaltius らのように性のゆがんだ欲（男色）の意味には取らず、男たちがこうした見世物に、いわば自分の心を打ち負かされ、くじかれるままにしている、という意味に取る、と言う。闘技場の者への愛には、ユウェナリス 6 歌 110 行以下を見よとする。Migne の注 (g)（Rigaltius）は、剣闘士が男にも女にも狂うほど愛され、男は貴族の身分の者まで闘技場に降り、身分の高い女たちも卑しい剣闘士への愛に身をささげた、と言う（l. 59766–59775）。
- 読者への影響：大 — 「男たちは彼らに魂を、女たちは体までも差し出す」。Oehler の解では、男が魂を差し出すのは、見世物に心を奪われ、打ち負かされることで、性の意味はない。女が体を差し出すのは性の意味。写本の形は崩れていて、直した形の上での解の違い。
- 訳での扱い：訳注は付けない（写本の崩れを直した読みは訳注の対象にしない）。底本の形で、注 b の Oehler の解に従い、男の側は「心を奪われる、魂をささげる」の類いにして性の意味を足さない。女の側の corpora sua substernunt は、意味が分かる範囲で遠回しに訳す（「メインで決めること」）。
- 確かめた資料：`page/n83_w1600.jpg` の上（本文）、中（校注 7・8）、下（注 b）。OCR l. 7716、7737–7738、7752–7773、7793–7800。CSEL l. 1746–1747、1760–1762。Migne l. 59655–59656、59766–59775。

### 22.1 propter quos in ea committunt quae reprehendunt, ex eadem parte qua magnifaciunt, deponunt et deminuunt（parte と arte、CSEL の se）
- 底本（Oehler）：propter quos in ea committunt quae reprehendunt, ex eadem parte qua magnifaciunt, deponunt et deminuunt, immo manifeste damnant …
- ほかの読み（22 章の校注 9〜13、p. 54）：A は propter quos in ea committunt を欠く。quae は CDE、quia は AB。parte は ABCD、arte は E と Fulv. Ursinus。qua は AE、quam は残り。et deminuunt は AE が欠く。CSEL は propter quos se in ea committunt quae reprehendunt（se は校訂者が足した語）、ex eadem arte, qua magnifaciunt（Ursinus）と読む（l. 1747、1772–1773、1762–1763、1804）。Migne も arte, quam magnifaciunt（l. 59657–59658）。
- 採る校訂者：注 c（p. 54）は in ea committunt を「彼らが非難する、まさにその罪を犯す」（in ea offendunt crimina）とする。
- 読者への影響：中 — 「彼らのために、自分たちが非難していることを（観客は）犯し、（主催者たちは）彼らをほめあげるのと同じ点で、彼らをおとしめ、格を下げる」。parte（点、面）なら「同じ面で」、arte なら「ほめあげるその技のゆえに」。CSEL の se を足すと「自分を彼らに委ねる」の類いになるが、Oehler は注 c で犯罪を犯す意味に取る。
- 訳での扱い：訳注は付けない。注 c のとおり「自分たちが非難していることを犯す」。ex eadem parte qua magnifaciunt は「ほめあげるのと同じ点で」の類いで、22.2 の artem magnificant, artificem notant（技をほめあげ、技を行う者に汚名を着せる）につながるようにする。committunt の主語（観客か、主催者か）は書かれていないので、訳で主語を補うかは訳者が決める。
- 確かめた資料：`page/n83_w1600.jpg` の上（本文）、中（校注 9〜13）、下（注 c）。OCR l. 7717–7718、7739–7740、7776–7777、7801–7804。CSEL l. 1747、1762–1763、1772–1773、1804。Migne l. 59657–59658。

### 22.1 manifeste damnant ignominia et capitis minutione, arcentes curia, rostris, senatu, equite（法の言葉）
- 底本（Oehler）：immo manifeste damnant ignominia et capitis minutione, arcentes curia, rostris, senatu, equite, ceterisque honoribus omnibus simul et ornamentis quibusdam.
- ほかの読み（22 章の校注 14・15、p. 54）：et は AβBC、atque は (Aφ) とほかの本、ac は DE。D は ornamentis. Quibus quanta。CSEL も同じ本文（l. 1773–1776）。
- 採る校訂者：Oehler はこの句に注を付けない。Migne の注 (h) は capitis minutio を法学者の用語とし、『学説彙纂』4 巻 5 章（de capite minutis）を挙げる（l. 59776–59777。OCR が崩れている）。
- 読者への影響：中 — 「汚名と身分の格下げで、はっきり罰し、元老院の議場、演壇、元老院、騎士の身分、そのほかのあらゆる栄誉と、いくつかの飾りから締め出す」。ignominia（汚名、不名誉の処分）と capitis minutio（法の上の身分の喪失・格下げ）は法の言葉で、役者や剣闘士が法の上で不名誉な身分に置かれたことを言う。
- 訳での扱い：訳注は付けない。capitis minutio は「身分の格下げ」「市民の権利の削減」の類いで、法の言葉と分かる訳にする（どの程度の喪失かは確かめていない。「未確認」）。curia と senatus は「元老院の議場」と「元老院」、rostra は「演壇」、eques は「騎士の身分」の類い。22.2 の notant、sine nota（汚名、烙印）と揃える。
- 確かめた資料：`page/n83_w1600.jpg` の上（本文）、中（校注 14・15）。OCR l. 7719–7721、7741、7805。CSEL l. 1773–1776。Migne l. 59659–59662、59776–59777。

### 22.2 Immo quanta confessio est malarum rerum, quarum auctores, cum acceptissimi sint, sine nota non sunt!（Oehler の推定 malarum rerum）
- 底本（Oehler）：Quale iudicium est, ut ob ea quis offuscetur, per quae promeretur? Immo quanta confessio est malarum rerum, quarum auctores, cum acceptissimi sint, sine nota non sunt!
- ほかの読み（22 章の校注 16〜21、p. 54）：AB は multant。Aβ は depraetiant。A は artem magnificant を欠く。malarum rerum, quarum は ego（Oehler 自身の推定）。Aφ は mala rerum quarum、Aβ は mal …… quarum、BCD は malae rei, quarum、E と Fulv. Ursinus は malae rei, cuius、Jos. Scaliger は malae rei, qua tum、Fr. Junius は malae rei? quorum。actores は Ursinus と Junius の推定。B は acceptissimis。CSEL は malae rei! quarum actores（actores は Ursinus。auctores は AB）と読み、Oehler の malarum rerum、Klussmann の malarum artium を挙げる（l. 1778–1780、1805–1808）。Migne は malae rei, cujus auctores（l. 59667–59668）。
- 採る校訂者：注 d（p. 54、Fr. Junius）は offuscetur を「汚れを投げつけられて黒くされる」とする。
- 読者への影響：中 — 底本では「いや、それは悪い事柄だという、なんという告白だろう。その事柄を行う者たちは、ひどく気に入られているのに、汚名を免れないのだから」。auctores は 22.1 の「主催者」と同じ語だが、ここは注で触れられず、文脈では「その事柄（技）を担う者」で、役者・剣闘士を指すとみられる（この点はこの一覧の観察）。actores なら「演じる者たち」とはっきりする。malae rei（単数）か malarum rerum（複数）かは、意味を変えない。
- 訳での扱い：訳注は付けない。底本の推定で訳し、推定であることを `// ` メモに書ける。quarum auctores は「それを行う者たち」の類いで、22.1 の auctores（主催者）と訳し分ける（「メインで決めること」）。offuscetur は注 d のとおり「汚名を着せられる」の類い、promeretur は「名を上げる、気に入られる」。
- 確かめた資料：`page/n83_w1600.jpg` の上（本文）、中（校注 16〜21）、`page/n83_w1600.jpg` の下（注 d）。OCR l. 7721–7725、7742–7746、7780–7785、7805–7811、7818–7819。CSEL l. 1776–1780、1804–1808。Migne l. 59664–59668。

### 23.2 An deo placebit auriga ille tot animarum inquietator, tot furiarum minister, tot statuum（statuum と、CSEL の欠落の印）
- 底本（Oehler）：An deo placebit auriga ille tot animarum inquietator, tot furiarum minister, tot statuum, ut sacerdos coronatus vel coloratus ut leno, …
- ほかの読み（23 章の校注 1・2、p. 54）：A は status。E と Fulv. Ursinus は velut sacerdos。A は ut sacerdos coronatus vel coloratus を欠く。CSEL は tot *** status と、Klussmann に従って欠落の印を置き、statuum を B の読みとして挙げる（l. 1786、1808–1809）。Migne は tot statuum（注 (i)、l. 59784）。
- 採る校訂者：注 a（p. 54、Rigaltius）は tot furiarum minister を、昔の人が御者に向けた狂おしい肩入れを言うと解く。見物人の心は、ある者は緑の組、ある者は青の組を応援して、反対の願いに引き裂かれ、走りの具合に応じて、心のさまざまな動き、さまざまな状態（varii status）が「仕えられる（ministrati）」、と言い、カッシオドルス『雑録』3 巻 51 の「緑が抜けば民の一部が嘆き、青が先に出れば町の大勢が苦しむ…まるで危うい祖国の存亡がかかっているかのように」を引く。Migne の注 (i) も同じ注を引き、Rhenanus と Pamelius の通行の読みを残す、と言う（l. 59784–59792）。
- 読者への影響：中 — 「あれほど多くの魂を騒がせ、あれほど多くの狂乱に仕え、あれほど多くの（心の）状態に仕えるあの御者」。statuum は minister に掛かる三つ目の属格で、注 a の varii status（心の状態）のこと。注 a を知らないと「状態」が何か分からない。
- 訳での扱い：訳注は付けない。tot statuum は注 a のとおり、見物人の心の揺れ動く「状態」の類いで、minister に掛けて訳す。furiae は訳語表の「狂乱」。auriga は「御者」。
- 確かめた資料：`page/n83_w1600.jpg` の中（本文、校注 1・2）、下（注 a）。OCR l. 7730–7734、7748–7749、7788、7822–7837。CSEL l. 1785–1787、1808–1809。Migne l. 59784–59792。

### 23.2 ut sacerdos coronatus vel coloratus ut leno, quem curru rapiendum diabolus adversus Elian exornavit?（列王紀下二・一一 の暗示と、curru rapiendum）
- 底本（Oehler）：ut sacerdos coronatus vel coloratus ut leno, quem curru rapiendum diabolus adversus Elian exornavit?
- ほかの読み（23 章の校注 3・4、p. 54〜55）：curru rapiendum は CDE、corrumpendum は AB。Elian は A、Heliam は残り。CSEL も curru rapiendum（Gelenius）、Elian と読む（l. 1787–1788、1809–1810）。Migne は Heliam（l. 59805–59806）。
- 採る校訂者：注 b（p. 54）は ut sacerdos coronatus に『兵士の冠について』10 章を見よとする。注 c（p. 54〜55）は vel coloratus ut leno に、ドナトゥスの「女衒はさまざまな色の外套を着る」を引き、Taubmann と Salmasius を挙げる。
- 聖書の形：Oehler は箇所を挙げない。curru rapiendum … adversus Elian は、エリヤが火の車と火の馬のあとに、つむじ風に乗って天にのぼった話（列王紀下二・一一）を思わせる（この点はこの一覧の観察）。悪魔が、車でさらわれるエリヤに張り合って、御者を飾り立てた、という皮肉。
- 読者への影響：中 — 「冠をかぶって祭司のよう、色とりどりの衣で女衒のような御者。悪魔が、エリヤに張り合って、車でさらわれるように飾り立てた者」。エリヤの昇天を知らないと adversus Elian の皮肉が取れない。AB の corrumpendum では「エリヤに逆らって堕落させるために」となる。
- 訳での扱い：訳注は付けない。名前は口語訳の「エリヤ」（名前の表に足す）。curru rapiendum は「車に乗ってさらわれる者として」の類いで、エリヤの昇天とつながるように訳す。出典（列王紀下二・一一）を付けるかは訳者が決める（引用ではなく暗示）。leno は「女衒」の類い。
- 確かめた資料：`page/n83_w1600.jpg` の中（本文、校注 3）、下（注 b・c）、`page/n84_w1600.jpg` の上（本文）、中（校注 4）、下（注 c の続き）。OCR l. 7734、7789、7792、7815、7839–7844、7850、7895、7905–7906。CSEL l. 1787–1788、1809–1810。Migne l. 59805–59806。`node tools/bible.js 2Kgs.2.11`。

### 23.3–23.4 quasi de praecepto domini ludat? Docet scilicet et diabolus verberandam maxillam patienter offerre.（マタイ五・三九、ルカ六・二九 の暗示）
- 底本（Oehler）：Placebit et ille, qui vultus suos novacula mutat? infidelis erga faciem suam, quam non contentus Saturno et Isidi et Libero proximam facere, insuper contumeliis alaparum sic obicit, quasi de praecepto domini ludat? Docet scilicet et diabolus verberandam maxillam patienter offerre.
- ほかの読み（23 章の校注 5〜8、p. 55）：AE は et ille を欠く。A は voltus。A は obicit tamquam de。A は et を欠く（Docet scilicet diabolus）。CSEL は tamquam（A。quasi は B）を採る（l. 1788–1793、1810–1811）。
- 採る校訂者：注 d（p. 55）は、笑いを起こすために、笑劇の役者が自分の顔を平手で打たせたことはよく知られている、と言い、Bulengerius などを挙げる。
- 聖書の形：Oehler も CSEL も箇所を挙げない。quasi de praecepto domini と verberandam maxillam patienter offerre は、マタイ五・三九（口語訳「もし、だれかがあなたの右の頬を打つなら、ほかの頬をも向けてやりなさい」）とルカ六・二九 を思わせる（この点はこの一覧の観察）。主の教えを、悪魔が笑劇の役者に平手打ちの芸として「教える」という皮肉で、引用ではない。
- 読者への影響：中 — 「かみそりで顔つきを変える者も、神に喜ばれるだろうか。自分の顔に不実な者は、その顔をサトゥルヌスやイシスやリベルに似せるだけでは足りず、そのうえ平手打ちの辱めに差し出す。まるで主の掟を種に戯れるかのように。悪魔もまた、打たれる頬を忍耐して差し出せと教えるのだ」。注 d を知らないと平手打ちが笑劇の芸であることが分からない。
- 訳での扱い：訳注は付けない。主の掟の暗示は『』に入れず、地の文で言う（本の `AGENTS.md` の 13.1〜13.2 の扱い）。出典（マタイ五・三九）を付けるかは訳者が決める。scilicet は皮肉の「もちろん」「なるほど」の類い。神々の名は『護教論』の表どおり「サトゥルヌス」「イシス」「リベル」。かみそりで顔を変えることと三柱の神の関係は Oehler に注がない（「未確認」）。
- 確かめた資料：`page/n84_w1600.jpg` の上（本文）、中（校注 5〜8）、下（注 d）。OCR l. 7850–7854、7895–7896、7908–7916、7948、7954。CSEL l. 1788–1793、1810–1811。`node tools/bible.js Matt.5.39 Luke.6.29`。Byz MAT.csv l. 130（マタイ五・三九 の σιαγόνα）。

### 23.4 Sic et tragoedos cothurnis extulit, quia nemo potest adicere cubitum unum ad staturam suam.（マタイ六・二七 の「背丈」と口語訳の「寿命」）
- 底本（Oehler）：Sic et tragoedos cothurnis extulit, quia nemo potest adicere cubitum unum ad staturam suam. Mendacem facere vult Christum.
- ほかの読み（23 章の校注 9、p. 55）：Aφ は coturnis。CSEL も同じ本文で、欄外に「Matth. 6, 27. Luc. 12, 25.」を置く（l. 1793–1795、1802）。Oehler は欄外に箇所を挙げない。
- 聖書の形：マタイ六・二七 のギリシア語（Byz）は「あなたがたのだれが、思いわずらって、自分の ἡλικία に一ペーキュス（πῆχυς、腕の長さの単位）を加えることができるか」。ἡλικία は「年齢、寿命」とも「背丈」とも取れる語で、テルトゥリアヌスは ad staturam suam（自分の背丈に）と取っている。口語訳マタイ六・二七、ルカ一二・二五 は『自分の寿命をわずかでも延ばすことができようか』と「寿命」で訳し、単位の語も訳に出さない。
- 読者への影響：大 — 論の要は、悪魔が悲劇役者を厚底の靴（cothurni）で背を高くしたのは、「だれも自分の背丈を一キュビトも加えられない」というキリストの言葉をうそにするためだ、という皮肉。口語訳の『寿命』をそのまま引くと、厚底靴とのつながりが消え、Mendacem facere vult Christum（キリストをうそつきにしようとする）が通じない。
- 訳での扱い：訳注は付けない（本文の異読ではない）。口語訳を下敷きにしつつ、原文の「背丈」と「一キュビト（の長さ）」を残した句にし、『』に入れるか、地の文で言い換えるかを決める（「メインで決めること」）。単位を「一キュビト」とするか、表記の決まりどおりメートルに直す（約四十五センチ）かも決める（単位の長さは確かめていない。「未確認」）。`// ` メモに口語訳の「寿命」との違いを書く（15.7 の詩篇五〇・一八 の扱いと同じ）。cothurni は「厚底の靴」の類い。
- 確かめた資料：`page/n84_w1600.jpg` の上（本文）、中（校注 9）。OCR l. 7854–7856、7939。CSEL l. 1793–1795、1802、1811。Byz MAT.csv l. 166。`node tools/bible.js Matt.6.27 Luke.12.25`。

### 23.5 qui omnem similitudinem vetat fieri, quanto magis imaginis suae?（出エジプト二〇・四、創世記一・二六〜二七 の暗示）
- 底本（Oehler）：Iam vero ipsum opus personarum quaero an deo placeat, qui omnem similitudinem vetat fieri, quanto magis imaginis suae? Non amat falsum auctor veritatis; adulterium est apud illum omne quod fingitur.
- ほかの読み：Oehler の校注にこの文の異読はない。CSEL も同じ本文（l. 1795–1798）。
- 聖書の形：Oehler も CSEL も箇所を挙げない。omnem similitudinem vetat fieri は、口語訳出エジプト二〇・四 の『どんな形をも造ってはならない』（申命記五・八 も同じ）、imaginis suae は、人が神のかたちに造られたこと（創世記一・二六〜二七、口語訳「神のかたち」）を思わせる（この点はこの一覧の観察）。
- 読者への影響：小 — 「仮面（personae）を作るという仕事そのものが、神に喜ばれるかを問う。神は、どんな似姿も造ることを禁じておられる。まして、ご自分のかたち（である人の顔）の似姿はなおさらだ」。opus personarum は、悲劇・喜劇の仮面のこと。
- 訳での扱い：訳注は付けない。言い換えなので『』に入れず、地の文で言う。similitudo は口語訳の「形」、imago は「かたち」に寄せられる。adulterium は「偽造、まがいもの」の意味で、ここでは姦淫ではない（「真理の創始者は偽りを愛さない」とつながる）。auctor veritatis は訳語表の auctor（創始者）。
- 確かめた資料：`page/n84_w1600.jpg` の上（本文）。OCR l. 7857–7860。CSEL l. 1795–1798。`node tools/bible.js Exod.20.4 Deut.5.8 Gen.1.26-27`。

### 23.6 non probabit qui omnem hypocrisin damnat. Ceterum cum in lege praescribit maledictum esse qui muliebribus vestietur, quid de pantomimo iudicabit, qui etiam muliebribus curatur?（申命記二二・五 の言い換えと curatur）
- 底本（Oehler）：Proinde vocem, sexus, aetates mentientem, amores, iras, gemitus, lacrimas asseverantem non probabit qui omnem hypocrisin damnat. Ceterum cum in lege praescribit maledictum esse qui muliebribus vestietur, quid de pantomimo iudicabit, qui etiam muliebribus curatur? 欄外に Deut. XXII, 5.
- ほかの読み（23 章の校注 10〜13、p. 55）：Aβ は asseverantem の綴り。qui omnem hypocrisin は BCDE、A は omnem enim ypocrisin。A は iudicavit。curatur は (Aβ)BCDE、Aφ は cur …… tur、Fulv. Ursinus は utatur。CSEL は non probabit: omnem enim hypocrisin damnat（A）と読み、Leopoldus の vestiatur を挙げ、curuatur（「scripsi」。身をくねらせる）と直し、Klussmann の calceatur、de Lagarde の scurratur を挙げる（l. 1798–1800、1812、1832–1834、1860–1861）。
- 採る校訂者：注 e（p. 55）は muliebribus vestietur に 17 章を見よとする。注 f（p. 55、Rigaltius）は、パントマイム役者が声も身ぶりも歩き方もこのうえなく女らしくし、女の話を踊るときに女と見なされるほどになる、と言う。Oehler は 17.2 の quam pantomimus a pueritia patitur in corpore, ut artifex esse possit を引き、muliebribus はここでは道具の奪格よりも与格に取りたい、curatur muliebribus は「女を演じるために世話される（仕込まれる）」の意味だ、と言う。Migne の注 (a)（Le Prieur）は、トルロ教会会議の法規が、男が女の衣を、女が男の衣を着ることや、喜劇・悲劇の仮面をかぶることを禁じた、と言う（l. 59928–59933）。
- 聖書の形：申命記二二・五 は、七十人訳（Swete I）では「男の持ち物が女の上にあってはならず、男は女の衣を着てはならない。そうする者はみな、あなたの神、主に忌まわしい（βδέλυγμα）から」。口語訳は『女は男の着物を着てはならない。また男は女の着物を着てはならない。あなたの神、主はそのような事をする者を忌みきらわれるからである』。テルトゥリアヌスの「のろわれる（maledictum esse）」は、どちらの本文の語とも違う。
- 読者への影響：中 — 「声も性も年齢も偽り、愛も怒りも嘆きも涙も本物のように見せる者を、あらゆる偽り（hypocrisis）を断罪するかたは認めないだろう。律法で女の衣を着る者はのろわれると定めておられるのに、女を演じるために仕込まれるパントマイム役者を、どう裁かれるだろう」。hypocrisis はギリシア語で「役を演じること」の意味も持つ語で、役者への非難に掛かっている（この点はこの一覧の観察で、Oehler の注にはない）。curatur の意味（注 f の Oehler の解）が分からないと、文の終わりが取れない。
- 訳での扱い：訳注は付けない。申命記の句は、原文が「律法で定めている」と間接に言い、語も口語訳と違うので、『』に入れず地の文で言い換え、出典（申命記二二・五）を付ける（本の `AGENTS.md` の 13.1〜13.2 の扱い）。maledictum は「のろわれる」と原文どおりにするか、口語訳の「忌みきらわれる」に寄せるかは「メインで決めること」。muliebribus vestietur は 17.2 の per muliebres（女の衣で）と揃える。curatur は注 f の Oehler の解（女を演じるために仕込まれる）。hypocrisis は「偽り」「偽善」の類いで、演技の含みが出る語を選ぶかは訳者が決める。pantomimus は訳語表の「無言劇の役者」。
- 確かめた資料：`page/n84_w1600.jpg` の上（本文、欄外）、中（本文、欄外、校注 10〜13）、下（注 e・f）。OCR l. 7860–7866、7876–7877、7882、7897–7898、7918–7936、7941–7942、7949–7950、7962–7963、7989–7995。CSEL l. 1798–1800、1812、1832–1834、1858、1860–1861。Migne l. 59928–59933。Swete I `cache/archive.org/oldtestamentingr01swetuoft/oldtestamentingr01swetuoft_djvu.txt` l. 37870–37872。`node tools/bible.js Deut.22.5`。

### 23.7 Tales enim cicatrices caestuum … a deo, cum plasmaretur accepit. Ideo illi oculos deus commendavit, ut vapulando deficiant.（皮肉と、commendavit）
- 底本（Oehler）：Sane et ille artifex pugnorum impunitus ibit? Tales enim cicatrices caestuum et callos pugnorum et aurium fungos a deo, cum plasmaretur accepit. Ideo illi oculos deus commendavit, ut vapulando deficiant.（cum plasmaretur accepit の読点のない形は刷りのとおり。`research/sources.md` の n81〜n87 の行）
- ほかの読み（23 章の校注 14〜17、p. 55）：Aβ は cicastrices tuum。Latinius は et rudium fungos。cum plasmaretur は A・B の余白・E、cum suo plasmate は BCD。illi oculos deus commendavit は B の余白、A は illos oculos commendavit、E は illos oculos deus commendavit、BCD は illi oculos deus plasmavit。CSEL は a deo（B。A は ad ea）、cum plasmaretur、illi oculos deus commodavit（「scripsi」。貸し与えた）と読む（l. 1834–1837、1862–1865）。Migne は illi oculos Deus plasmavit（l. 59828）。
- 採る校訂者：Oehler はこの文に注を付けない。
- 読者への影響：中 — 「拳闘の名手も罰を受けずに済むのだろうか。そうした拳闘の革ひもの傷あと、拳のたこ、耳のこぶを、彼は造られたときに神から受けたのだ、というわけだ。だから神は、打たれてつぶれるようにと、彼に目を預けられたのだ」。どちらの文も、神がそう造ったはずがない、という皮肉で、文字どおりに訳すと書き手の主張と取り違えられる。
- 訳での扱い：訳注は付けない。皮肉が分かる言い方（「というのだろう」「とでもいうのか」の類い）で訳す（「メインで決めること」）。commendavit は「預けた、託した」の類い。caestus は「拳闘の革ひも（籠手）」、aurium fungi は「耳のこぶ（つぶれた耳）」の類い。
- 確かめた資料：`page/n84_w1600.jpg` の中（本文、校注 14〜17）。OCR l. 7867–7873、7878–7879、7885、7899–7901、7945、7951、7957–7959。CSEL l. 1834–1837、1862–1865。Migne l. 59826–59828。

### 23.8 Taceo de illo, qui hominem leoni prae se opponit, ne parum sit homicida qui eundem postmodum iugulat.（quam の削除と、注 g の Rigaltius の解）
- 底本（Oehler）：Taceo de illo, qui hominem leoni prae se opponit, ne parum sit homicida qui eundem postmodum iugulat.
- ほかの読み（23 章の校注 18、p. 55）：qui は (Aβ)E、quam qui は (Aφ)BCD。CSEL は ne parum sit homicida quam qui eundem postmodum iugulat と読み、quam を Rigaltius が削ったこと、Klussmann の perinde（parum の代わり）を挙げる（l. 1838–1839、1865）。Migne は qui（Rigaltius。l. 59830）。
- 採る校訂者：注 g（p. 55〜56）は、通行の本で qui の前に読まれる quam は文を妨げ、前の語 homicida の終わりの音節が崩れて生じたと Oehler は考え、Rigaltius が正しく削った、と言う。La Cerda は quam を残し、「人を獅子に、自分の前に、つまり自分よりも先に差し出す者について黙っておこう。何のためか。のちにその人を殺す獅子そのものより、人殺しとして劣らないために」と解いたが、Oehler はこれを「たわごと」と退け、Rigaltius の説明を引く。剣闘士の試合のさなかに観客がときに獅子を求め、獅子が放たれると、危うくなった剣闘士は、うまく退いたり身をかわしたりして、仲間の剣闘士を（獅子に）差し出した。たいてい、その二人目の剣闘士は獅子との戦いを無事に終えたあと、試合がやり直されて最初の剣闘士と組まされ、殺された。こうして最初の剣闘士は「少なからぬ人殺し」、つまり二度の人殺しになる。一度は人を自分の前に獅子に差し出したとき、二度目は、自分の体を守ってくれたその人を、のちに殺したとき。自分の救い手を殺す者は、少なからぬ人殺しだ、と言う。
- 読者への影響：大 — 底本では「人を自分の盾として獅子の前に差し出し、のちにその同じ人の喉を切る者について、わたしは黙っておこう。人殺しとして物足りなくならないように、というわけだ」。注 g の剣闘の様子を知らないと、だれがだれを殺すのか分からない。quam を残すと「のちにその人を殺す者（獅子）より、人殺しとして劣らないように」と、比べる相手が変わる。
- 訳での扱い：訳注は勧めない（読みの違いはあるが、注 g の場面を補えば訳だけで通じる）。底本の qui で、注 g の Rigaltius の解に従い、「自分の前に（盾として）」「のちに同じ相手の喉を切る」が分かるように訳す。ne parum sit homicida は皮肉の目的の句（「人殺しとして足りなくならないように」）。付けるなら次の案：
  - 「別の読みでは『のちに殺す者に劣らぬ人殺し』となる。」（25 字）
- 確かめた資料：`page/n84_w1600.jpg` の中（本文、校注 18）、下（注 g の初め）、`page/n85_w1600.jpg` の下（注 g の続き）。OCR l. 7886–7892、7902、7965–7984、8063–8082。CSEL l. 1837–1839、1865。Migne l. 59830。

### 24.1 Quot adhuc modis perorabimus … aut congruens dei servis, quod domino placitum non sit?（perorabimus と、CSEL の直し）
- 底本（Oehler）：Quot adhuc modis perorabimus nihil ex his, quae spectaculis deputantur, placitum deo esse, aut congruens dei servis, quod domino placitum non sit?
- ほかの読み（24 章の校注 1〜4、p. 56）：AB は quod adhuc。perorabimus は BCDE、sperabimus は A と B の余白。A は expectaculis。AE は servo dei。CSEL は Quot（Gelenius）adhuc modis probavimus（「scripsi」）… placitum deo esse! at（「scripsi」。aut は AB）congruens servo dei quod deo placitum non sit? と読み、domino を B の読みとして挙げる（l. 1841–1843、1866–1868）。
- 読者への影響：小 — 底本では「見世物に属するもののどれも神に喜ばれず、また、主に喜ばれないものは神のしもべにふさわしくない、と、わたしたちはあとどれだけの仕方で説き尽くせばよいのか」。CSEL の形では「…と、わたしたちはすでにどれだけの仕方で示してきたことか。主に喜ばれないものが神のしもべにふさわしいだろうか」と、二つの文になる。要点は同じ。
- 訳での扱い：訳注は付けない。perorare は「説き尽くす」の類い（19.6 の plenius exprimere、implere とは語が違う）。servi dei は「神のしもべたち」（本の `AGENTS.md`）。
- 確かめた資料：`page/n85_w1600.jpg` の上（本文）、中（校注 1〜4）。OCR l. 8001–8003、8027–8028、8044、8051。CSEL l. 1841–1843、1866–1868。

### 24.1 hoc erit pompa diaboli, adversus quam in signaculo fidei eieramus（洗礼の誓いと、4 章とのつながり）
- 底本（Oehler）：Si omnia propter diabolum instituta et ex diaboli rebus instructa monstravimus (nihil enim non diaboli est quicquid dei non est vel deo displicet), hoc erit pompa diaboli, adversus quam in signaculo fidei eieramus.
- ほかの読み（24 章の校注 5〜10、p. 56）：A は omnia praeter。A は diabolo est。E は vel quidquid。A は dei non est vel を欠く。A は adversus quem。A は fidei eramus neque facto（Quod autem eieramus を欠く形。CSEL の校注 15 も A は quod autem eieramus を欠くと言う）。CSEL は adversus quem（A。quam は B）と読む（l. 1843–1846、1868–1869）。
- 採る校訂者：注 a（p. 56、La Cerda）は signaculo fidei を洗礼とし、4 章と同じだと言い、『殉教者エピクテトゥス伝』、プロコロス『使徒ヨハネ伝』22 章、ノラのパウリヌス『書簡』1、アウグスティヌス『初心者の教えについて』26 章、ナジアンゾスのグレゴリオス『講話』40 で、洗礼や秘跡を signaculum と呼ぶ例を挙げる。
- 読者への影響：中 — 「すべてが悪魔のために設けられ、悪魔のものでしつらえられていることを示したのなら、これこそ悪魔の行列であり、わたしたちは信仰の印のときに、それを捨てると誓ったのだ」。4.1〜4.5 の洗礼で捨てる「悪魔と、その行列と、その天使たち」を受ける。
- 訳での扱い：訳注は付けない。訳語表どおり pompa は「行列」、signaculum は「印」、eierare は「捨てると誓う」（4.5 の eieratio「捨てる誓い」）。印が洗礼を指すことは補わない（訳語表の決まり）。instituere・instruere は訳語表の「設ける」「しつらえる」の類い。
- 確かめた資料：`page/n85_w1600.jpg` の上（本文）、中（校注 5〜10）、下（注 a）。OCR l. 8003–8006、8029–8030、8045–8046、8052–8053、8085–8102。CSEL l. 1843–1846、1868–1869。

### 24.2 Ceterum nonne eieramus et rescindimus signaculum rescindendo testationem eius?（nonne と、写本の si nos）
- 底本（Oehler）：Quod autem eieramus, neque facto neque dicto neque visu neque prospectu participare debemus. Ceterum nonne eieramus et rescindimus signaculum rescindendo testationem eius?
- ほかの読み（24 章の校注 11、p. 56）：Aβ は conspectu。Oehler の校注は nonne に異読を挙げない。CSEL は neque conspectu（A。prospectu は B）と読み、ceterum sic nos eieramus et rescindimus signaculum rescindendo testationem eius と直し（「scripsi」。A は si nos、B は nonne）、eius の後に Klussmann が欠落の印を付けたことを挙げる（l. 1847–1849、1870–1871）。Migne は Caeterum nonne ejeramus et rescindimus（l. 59843）。
- 読者への影響：中 — 「捨てると誓ったものには、行いでも、言葉でも、見ることでも、眺めることでも、関わってはならない。さもなければ、印の証しを破ることで、わたしたちは誓いを取り消し、印を破ることにならないだろうか」。eieramus は前の文では「捨てると誓う」だが、この文では、見世物に関わることで洗礼の誓いを「誓い破る」意味に裏返して使っている（この点はこの一覧の観察）。同じ語の二つの意味が分からないと、文が矛盾して見える。
- 訳での扱い：訳注は付けない。この文の eieramus は「誓いを取り消す」「誓いを捨てる」の類いにして、前の文の「捨てると誓う」と語がつながるように訳す（「メインで決めること」）。rescindere は「破る、無効にする」、testatio は「証し」の類い。visus と prospectus は「見ること」と「眺めること」の類い。
- 確かめた資料：`page/n85_w1600.jpg` の上（本文）、中（校注 11）。OCR l. 8007–8009、8047。CSEL l. 1847–1849、1870–1871。Migne l. 59840–59844。

### 24.3 Illi nobis iam renuntient, an liceat Christianis spectaculo uti.（renuntiare の二つの意味）
- 底本（Oehler）：Numquid ergo superest, ut ab ipsis ethnicis responsum flagitemus? Illi nobis iam renuntient, an liceat Christianis spectaculo uti. Atquin hinc vel maxime intellegunt factum Christianum de repudio spectaculorum. Itaque negat manifeste, qui, per quod agnoscitur, tollit.
- ほかの読み（24 章の校注 12・13、p. 56）：Aβ は Numquid の綴り。A は nobis iam、残りは iam nobis。CSEL は nobis iam（A）を採る（l. 1849–1854、1871）。
- 読者への影響：中 — 「では、異教徒たち自身に答えを求めるほかないのか。キリスト者が見世物を楽しんでよいかどうか、彼ら自身にわたしたちへ告げてもらおう。ところが、彼らは何よりも、見世物を退けることによって、人がキリスト者になったことを見分けるのだ。だから、自分がそれと分かる印を取り除く人は、はっきり（信仰を）否んでいる」。renuntiare は訳語表で「捨てる」（4 章の洗礼の誓い）だが、ここは「告げ知らせる、報告する」の意味。
- 訳での扱い：訳注は付けない。renuntient は「告げる」と訳し、訳語表の「捨てる」と分ける（「メインで決めること」。洗礼の誓いの語との言葉遊びかは確かめていない。「未確認」）。negat は目的語がなく、「（信仰を）否む」の類いで、補うかは訳者が決める。repudium は「退けること」の類い。
- 確かめた資料：`page/n85_w1600.jpg` の上（本文）、中（校注 12・13）、下（校注 13 の続き）。OCR l. 8009–8013、8031、8054。CSEL l. 1849–1854、1871。Migne l. 59844–59848。

### 24.4 Nemo in castra hostium transit, nisi proiectis armis suis, nisi destitutis signis et sacramentis principis sui, nisi pactus simul perire.（注 b の見出しの factus）
- 底本（Oehler）：Quid autem spei superest in huiusmodi homine? Nemo in castra hostium transit, nisi proiectis armis suis, nisi destitutis signis et sacramentis principis sui, nisi pactus simul perire.（huiusmodi は刷りの huismodi の誤りを直した形。`research/sources.md` の n81〜n87 の行）
- ほかの読み（24 章の校注 14・15、p. 56）：A は eiusmodi。A は nisi proiectis armis suis を欠く。CSEL も pactus と読む（l. 1854–1856、1871–1872）。Migne も pactus（l. 59851–59852）。注 b（p. 56〜57）の見出しは nisi factus simul perire と刷られている（n85 の `pct:55,88,45,4` を 2 倍に拡大して確かめた）が、本文の校注に factus の異読はなく、注の中身（下）は pactus の意味に合うので、見出しの刷りの誤りとみられる（25.4 の注 b の見出し moneri と同じ種類）。
- 採る校訂者：注 b は、脱走兵は、自分が見捨てた主君が戦に勝てば、移った先の敵とともに滅びなければならないことを知っている、と言う。Migne の注 (d)（La Cerda）は signis et sacramentis について、この論のほかの言い方と同じく、軍隊の言葉から取ったものだ、と言う（l. 59918–59919）。
- 読者への影響：小 — 「だれも、自分の武器を投げ捨て、自分の主君の軍旗と誓いを捨て、ともに滅びることを承知したうえででなければ、敵の陣営に移りはしない」。見世物に行くキリスト者を、敵陣に寝返る兵士にたとえる。
- 訳での扱い：訳注は付けない。pactus は「（ともに滅びることを）承知して、取り決めて」の類い。sacramentum は訳語表の「誓い」（兵士の入隊の誓い）、signa は「軍旗」、princeps は軍の「主君」で、訳語表の princeps「皇帝」とは文脈が違う（「メインで決めること」）。
- 確かめた資料：`page/n85_w1600.jpg` の中（本文、校注 14・15 の番号）、下（校注、注 b の見出し）、`page/n86_w1600.jpg` の中（注 b の続き）。n85 の `pct:55,88,45,4`（2 倍）。OCR l. 8014–8016、8048、8056、8104、8131–8133。CSEL l. 1854–1856、1871–1872。Migne l. 59851–59852、59918–59919。

### 25.1 pudicitiam ediscet attonitus in animos?（CSEL と Migne は in mimos）
- 底本（Oehler）：An ille recogitabit eo tempore de deo, positus illic ubi nihil est de deo? Pacem, opinor, habebit in animo contendens pro auriga? pudicitiam ediscet attonitus in animos?
- ほかの読み（25 章の校注 1〜3、p. 56）：A と B の余白は rogitabit。A は ubi を欠く。A は immimos。Oehler は in animos（B）を本文に採り、注を付けない。CSEL は attonitus in mimos と読み、immimos を A、in animos を B の読みとして挙げる（l. 1883、1911–1912）。Migne も attonitus in mimos（l. 59861）。
- 読者への影響：大 — 底本では「心が平和でいられるだろうか、御者に肩入れして争いながら。慎みを学ぶだろうか、激情に呆然となりながら」の類いで、in animos の意味がはっきりしない（animi は訳語表で 16.4 の「激情」）。in mimos なら「笑劇の役者たちに見とれながら、慎みを学ぶだろうか」となり、前の句の auriga（戦車競走）と並んで、劇場の笑劇（17.2 の mimus）を指す。写本 A の immimos は in mimos を支える。
- 訳での扱い：底本の in animos で訳すか、in mimos を採るかは「メインで決めること」（Oehler は A の読みを校注に挙げたうえで B を採っているので、刷りの誤りではない）。底本で訳すなら、in animos は「激情に（駆られて）呆然となって」の類いで、`// ` メモに in mimos の読みを書き、次の訳注を付けることを勧める（in mimos では句の指すもの自体が変わる）：
  - 「古い写本は『笑劇の役者たちに見とれて』と読める。」（24 字）
  pacem は 15.2 の pax（「平和」）、contendens pro auriga は「御者のために争って」、pudicitia は「慎み」の類い。
- 確かめた資料：`page/n85_w1600.jpg` の中（本文、校注 1〜3 の番号）、下（校注 1〜3）。OCR l. 8018–8020、8033、8059。CSEL l. 1881–1883、1911–1912。Migne l. 59858–59861。

### 25.2 nullum magis scandalum occurret, quam ipse ille mulierum et virorum accuratior cultus … de commercio scintillas libidinum conflabellant（小さな異読と、scandalum）
- 底本（Oehler）：Immo in omni spectaculo nullum magis scandalum occurret, quam ipse ille mulierum et virorum accuratior cultus. Ipsa consensio, ipsa in favoribus aut conspiratio aut dissensio inter se de commercio scintillas libidinum conflabellant.
- ほかの読み（25 章の校注 4〜6、p. 56）：A は quem et ille ipse。A は ipsa in favoribus aut conspiratio aut dissensio を欠く。Aβ は flagellant。CSEL は quam ille, ipse mulierum …（A の語順。quam は B）と読み、conflabellant（B。A は flagellant）、Klussmann の flabellant を挙げる（l. 1884–1887、1912–1916）。
- 読者への影響：小 — 「いや、どの見世物でも、女と男のことさら念入りな身なりほど、つまずきとなるものはない。気の合うことも、声援で一緒になることも、張り合うことも、ふれあいから、欲情の火花をあおり立てる」。scandalum は口語訳の「つまずき」の語。conflabellare は「（うちわで）あおり立てる」。
- 訳での扱い：訳注は付けない。scandalum は口語訳の「つまずき」に寄せられる。favores は 16.4 の suffragia（声援）と近い「声援、ひいき」。libido は「欲情」の類い。
- 確かめた資料：`page/n85_w1600.jpg` の中（本文、校注 4〜6 の番号）、下（校注 4〜6）。OCR l. 8020–8024、8034–8035、8059–8060。CSEL l. 1884–1887、1912–1916。

### 25.3 inter effeminati histrionis modos psalmum secum comminiscetur?（Rigaltius の histrionis）
- 底本（Oehler）：Nemo denique in spectaculo ineundo prius cogitat, nisi videri et videre. Sed tragoedo vociferante exclamationes ille alicuius prophetae retractabit? et inter effeminati histrionis modos psalmum secum comminiscetur?
- ほかの読み（25 章の校注 7・8、p. 57）：BC は illae（ille の代わり）。effeminati histrionis は E、A は effeminati lib ……、B の余白は effeminati liberi、BCD は effeminationis。CSEL は ille（Gelenius）を採り、effeminati tibicinis（Klussmann の推定）と読み、histrionis を Rigaltius、Hartel の ludii を挙げる（l. 1888–1891、1916–1919）。
- 採る校訂者：注 a（p. 57）は tragoedo vociferante に、Heraldus のアルノビウスへの注を見よとするだけ。
- 読者への影響：小 — 「見世物に入るとき、だれも、見られることと見ることのほかには何も考えない。だのに、悲劇役者がわめいているあいだに、その人はある預言者の叫びを思い返すだろうか。女々しい役者の節回しのあいだに、ひとりで詩篇を思い起こすだろうか」。histrionis（役者）か tibicinis（笛吹き）かで、節回しの主が変わるが、要点は同じ。A の lib…… は読めない。
- 訳での扱い：訳注は付けない。histrio は『護教論』の訳語表の「役者」。tragoedus は「悲劇役者」。modi は「節回し、調べ」。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文、校注 7・8）、中（注 a）。OCR l. 8024、8110–8112、8125–8126、8135–8137、8177、8193–8194。CSEL l. 1887–1891、1916–1919。

### 25.4 et cum athletae agent, ille dicturus est repercutiendum non esse?（マタイ五・三九、ルカ六・二九 の暗示）
- 底本（Oehler）：et cum athletae agent, ille dicturus est repercutiendum non esse?
- ほかの読み：Oehler の校注にこの句の異読はない。CSEL も同じ本文で、欄外に「cf. Luc. 6, 29.」（l. 1891–1892、1909）。Migne の欄外は「Math. V」（l. 60000 の前後）。
- 聖書の形：「打ち返してはならない」は、マタイ五・三九（口語訳「悪人に手向かうな。もし、だれかがあなたの右の頬を打つなら、ほかの頬をも向けてやりなさい」）とルカ六・二九 の教えの言い換えで、引用ではない（この点はこの一覧の観察）。23.3〜23.4 の平手打ちの皮肉と同じ箇所を思わせる。
- 読者への影響：小 — 「運動選手たちが戦っているあいだに、その人は、打ち返してはならない、と言うつもりだろうか」。
- 訳での扱い：訳注は付けない。言い換えなので『』に入れず地の文で言い、出典を付けるかは訳者が決める（本の `AGENTS.md` の 13.1〜13.2 の扱い）。athletae は訳語表の「運動選手」。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文）。OCR l. 8112–8113。CSEL l. 1891–1892、1909。Migne l. 60000–60001。`node tools/bible.js Matt.5.39 Luke.6.29`。

### 25.4 poterit et de misericordia moveri defixus in morsus ursorum et spongias retiariorum?（CSEL と Migne は moneri）
- 底本（Oehler）：poterit et de misericordia moveri defixus in morsus ursorum et spongias retiariorum? Avertat deus a suis tantam voluptatis exitiosae cupiditatem.（moveri は本文の刷りのとおり。注 b の見出しの moneri は見出しの誤り。`research/sources.md` の n81〜n87 の行）
- ほかの読み（25 章の校注 9・10、p. 57）：et de は (Aβ)BCDE、Aφ は autem。Scipio Maffei は moneri defixus in、A は moveri aut in。CSEL は poterit ergo et de misericordia moneri defixus と、Maffei の moneri を採り、moveri defixus を B、moveria（a は消されている）aut を A の読みとして挙げる（ergo は B が欠く。l. 1892–1893、1919–1920）。Migne も de misericordia moneri（l. 60002）。
- 採る校訂者：注 b（p. 57）は、前置詞 de は道具（手段）の意味で、Maffei らはそれを分からずに「de misericordia moneri」と書き、ほかの人々は前置詞を消して「misericordia moveri」と書こうとした、と言う。この de の使い方はアフリカの書き手、とくにテルトゥリアヌスに固有で、『護教論』1 章の de iustitiae diligentia、9 章の de crudelitate、23 章の de deo pati、同じ章の終わりの de sanguine Christianorum、50 章の de monumentis を例に挙げる。
- 読者への影響：中 — 底本では「熊の噛みつきや網闘士の spongiae に目を釘づけにしながら、あわれみによって心を動かされることができるだろうか」。CSEL・Migne の moneri では「あわれみについて、思い起こさせられる（諭される）ことができるだろうか」で、前の句の「預言者の叫びを思い返す」「詩篇を思い起こす」「打ち返すなと言う」と並ぶ。どちらでも、残酷な見世物に見入りながらあわれみを保てない、という要点は同じ。
- 訳での扱い：訳注は付けない。底本の moveri で、注 b のとおり de を手段に取り、「あわれみに心を動かされる」と訳す。`// ` メモに moneri の読みを書ける。defixus は「目を釘づけにして」の類い。spongiae は次の項。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文、校注 9・10）、中（注 b）、下（注 b の続き）。OCR l. 8113–8118、8127、8139–8163、8178–8179、8194。CSEL l. 1892–1894、1919–1920。Migne l. 60002–60004。

### 25.4 spongias retiariorum（網闘士の spongiae とは何か）
- 底本（Oehler）：defixus in morsus ursorum et spongias retiariorum?
- ほかの読み：Oehler の校注にこの語の異読はない。CSEL、Migne も同じ（l. 1893、60003）。
- 採る校訂者：注 c（p. 57）は解を並べる。Rigaltius は、spongiae は戦いに合わせた網で、相手に投げると広がり、すぐに縮んで捕らえた相手を引き寄せ、生け捕りではなく網闘士の三叉の槍で刺すためのものだと言い、σπόγγος（海綿）を σπᾶν（引く）から、σφόγγος を σφίγγειν（締めつける）から説く。Turnebus は、傷を乾かし血を止めるための海綿を網闘士に持たせる（Junius と La Cerda が従い、La Cerda は、アドニスの傷に海綿を当てる者を刻んだ古い石棺を挙げる）。Lipsius は、リウィウス 9 巻 40 章のサムニウム人の武装から、網闘士にも胸当ての代わりに spongia を持たせる。Scipio Maffei は、とがった武器（剣か三叉の槍）の類いだと言う。Oehler は「わたしは Lipsius に賛成する」と言う。
- 読者への影響：中 — 「熊の噛みつきと網闘士の胸当て（spongiae）」。語の意味が確かでなく、訳し方で場面が変わる（海綿、網、胸当て、武器）。Oehler の採る Lipsius の解では、網闘士の体を守る防具。
- 訳での扱い：訳注は付けない（本文の異読ではない）。Oehler の採る Lipsius の解で「胸当て」の類いにするか、語の形を残して「海綿」とするかは「メインで決めること」。retiarii は「網闘士」の類い。ursi は「熊」。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文）、中（注 c の初め、右段）、下（注 c）。OCR l. 8114–8115、8165–8174、8198–8230。CSEL l. 1893。Migne l. 60003。

### 25.5 Quale est enim de ecclesia dei in diaboli ecclesiam tendere? de caelo, quod aiunt, in caenum?（ことわざと、deum）
- 底本（Oehler）：Quale est enim de ecclesia dei in diaboli ecclesiam tendere? de caelo, quod aiunt, in caenum? illas manus, quas ad deum extuleris, postmodum laudando histrionem fatigare?
- ほかの読み（25 章の校注 11・12、p. 57）：Aβ は caenum の綴り。deum は AE、dominum は残り。CSEL も deum と読む（l. 1894–1897、1920）。Migne は Dominum（l. 60008）。
- 読者への影響：小 — 「神の教会から悪魔の教会へ向かうとは、なんということか。ことわざに言う、天から泥の中へ、だ。神に向かって差し上げた手を、そのあとで役者をほめて（拍手して）疲れさせるとは」。caelum（天）と caenum（泥）の音の掛け合いのことわざ。
- 訳での扱い：訳注は付けない。quod aiunt は「ことわざに言うとおり」の類い。caelum と caenum の音の対は、日本語で残せる範囲で残す（訳者が決める）。ecclesia は「教会」で、悪魔の「教会」と同じ語にする。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文、校注 11・12）、中（校注 12 の続き）。OCR l. 8182–8189、8195。CSEL l. 1894–1897、1920。Migne l. 60004–60009。

### 25.6 ex ore, quo Amen in Sanctum protuleris, gladiatori testimonium reddere, ἀπ᾽ αἰῶνος alii omnino dicere, nisi deo et Christo?（Sanctum は聖餐、ギリシア語の歓呼の形）
- 底本（Oehler）：ex ore, quo Amen in Sanctum protuleris, gladiatori testimonium reddere, ἀπ᾽ αἰῶνος alii omnino dicere, nisi deo et Christo?（ἀπ᾽ αἰῶνος は刷りのとおり。`research/sources.md` の n81〜n87 の行）
- ほかの読み（25 章の校注 13・14、p. 58）：A は reddere his apaeonos、E は reddere εἰς αἰῶνας ἀπ᾽ αἰῶνος、残りは reddere εἰς αἰῶνας。et Christo は AE、Christo は残り。CSEL は εἰς αἰῶνας ἀπ᾽ αἰῶνος（Rigaltius）を採り、A の his apaeonos と B の εἰς αἰῶνας を挙げ、et を B が欠くと言う（l. 1897–1899、1920–1921）。Migne も εἰς αἰῶνας ἀπ᾽ αἰῶνος と刷り、Rigaltius の注は、アゴバルドゥスの写本には ΕΙ ΑΠ' ΑΙΩΝΟΣ とだけある、と言う（l. 60010、60150–60152。OCR は崩れている）。
- 採る校訂者：注 d（p. 57〜58）は Sanctum を「秘跡、主の体」とする。信者は、主宰者から聖餐の一片を「キリストの体」という言葉とともに受けて「アーメン」（「そうなりますように」）と答えた、と言い、アウグスティヌスの幼子への説教、アンブロシウス『秘跡について』4 巻 5、エウセビオス『教会史』に引かれるコルネリウスの手紙（Novatus が仲間に、聖餐を受けるときアーメンの代わりに誓いを言わせた）を挙げる（Rigaltius）。注 e（p. 58）は alii omnino dicere に、勝者にこう歓呼した、と言い、ディオ・カッシオス 72 巻 20（コンモドゥスへの「あなたは勝つ、勝つだろう、永遠から（ἀπ᾽ αἰῶνος）」）と 63 巻 20（ネロへの歓呼の「ただ一人の周回の勝者、永遠からただ一人の（ἀπ᾽ αἰῶνος）」）を引き、皇帝にも長寿を願って歓呼した例（アイリアノス、カルケドン公会議、コリップス）を挙げ、それは『護教論』35 章に関わる、と言う。
- 読者への影響：中 — 「聖なるものに向かってアーメンと言った口で、剣闘士をほめたたえ、神とキリストのほかのだれかに『とこしえに』と言うとは」。注 d を知らないと、in Sanctum が聖餐を指すことが分からない。ἀπ᾽ αἰῶνος（永遠から、とこしえに）は、見世物の勝者への歓呼の言葉で、教会で神とキリストにだけささげる「とこしえに」と対になる。εἰς αἰῶνας（代々に）を足した形でも意味は同じ。
- 訳での扱い：訳注は付けない。Sanctum は「聖なるもの」と訳し、聖餐であることを補うかは「メインで決めること」（訳語表の、洗い・印が洗礼を指すことを補わない決まりとの釣り合い）。Amen は「アーメン」。ἀπ᾽ αἰῶνος は、ギリシア語の歓呼であることを残すか（音を片仮名で添えるなど。『殉教者たちへ』4.8 の διαμαστίγωσις の扱い）、意味だけを『とこしえに』の類いで訳すかを決める（「メインで決めること」）。gladiatori testimonium reddere は「剣闘士に（ほめる）証しを立てる」で、歓呼のこと。
- 確かめた資料：`page/n86_w1600.jpg` の上（本文、校注 12 まで）、下（注 d）、`page/n87_w1600.jpg` の上（本文、校注 13・14）、中（注 d の続き、注 e の終わり）、下（注 d の終わり、注 e）。ἀπ᾽ αἰῶνος は `research/sources.md` の n81〜n87 の行のとおり、n87 の `pct:15,6,60,4` の拡大で確かめてある。OCR l. 8189–8190、8232–8239、8246–8268、8299–8300、8311–8410。CSEL l. 1897–1899、1920–1921。Migne l. 60008–60011、60150–60156。

---

## 未確認

- 20.4 の apulias：Oehler の注 f が並べる解（日よけ幕、雨よけの場所など）のどれが正しいかは確かめていない。CSEL は崩れた語として†を付ける。
- 22.1 の capitis minutio：役者や剣闘士が法の上でどの程度の身分の喪失を受けたかは、Oehler に注がなく、Migne の注 (h) は OCR が崩れていて読み切れないので、確かめていない。
- 22.1 の auctores：A の読みを、Oehler は auctores（校注 5 の ADE）、CSEL は actores と報告していて、食い違う。どちらが正しいかは確かめていない。
- 23.3 の qui vultus suos novacula mutat と、Saturno et Isidi et Libero proximam facere：笑劇の役者がかみそりで顔（頭）を剃ることと、三柱の神に似せることの関係は、Oehler に注がなく、確かめていない。
- 23.4 の cubitus（キュビト）の長さと、メートルに直したときの値は確かめていない。
- 24.3 の renuntient：洗礼の誓いの renuntiare（捨てる）との言葉遊びかどうかは、Oehler に注がなく、確かめていない。
- Oehler の注が送る先（20 章の注 d の 3 章と Maffei、23 章の注 b の『兵士の冠について』10 章、20 章の注 b の『兵士の冠について』6 章、注 e の『護教論』35 章など）は読んでいない。
- CSEL の OCR の本文にある sputabimus（20.3、l. 1665）と gratioribus（21.2、l. 1730）は、校注に記載がないので OCR の崩れとみて、読みとして挙げていない。
