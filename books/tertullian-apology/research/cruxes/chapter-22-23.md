# chapter-22-23 の論点（22-23）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0236_page.jpg`（p. 206）〜`0246_page.jpg`（p. 216）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,52`、本文と校注）と下（`pct:0,45,100,55`、校注の終わりと注解）に切り出して読んだ（切り出しは保存していない）。SHA-256 の先頭 16 桁は 0236 が 50e2265997a845e8（21 章のときのもの）、0237 が fc3d2758623aeba9、0238 が b0c320919cc6f857、0239 が 7420f976efa9a872、0240 が 3389a77905e295e6、0241 が 78f773489905e2b4、0242 が 2a4e091e26ad742d、0243 が 11d1dcff6f6cf322、0244 が 40b673dc2278c16d、0245 が 0937501a9b7619ef、0246 が 1e32e1617941a6db。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 26370–27764（ページの境は p. 206 が l. 26370、p. 207 が l. 26508、p. 208 が l. 26640、p. 209 が l. 26777、p. 210 が l. 26954、p. 211 が l. 27113、p. 212 が l. 27214、p. 213 が l. 27341、p. 214 が l. 27491、p. 215 が l. 27570、p. 216 が l. 27658）。OCR は略号の λ を A、4 などに崩すので、略号はすべて画像で読んだ。

校注の番号は、22 章が p. 206 の「Cap. XXII.」から 1〜60（p. 210 まで）、23 章が p. 210 の「Cap. XXIII.」から 1〜99（95 と 96 のあいだに 95b がある。98・99 は p. 216）で、p. 216 の途中で 1 から振り直して 13 まで。注解の記号は、22 章が a〜u（p. 206〜210）、23 章が a〜z と zz（p. 210〜216）。各項では校注と注解にページを添える（「校注 p. 213 の 35」「注 p. 213 の p」）。注解の中の丸括弧の人名（Herald.、Rigalt.、La Cerda.）は、その前の抜き書きの出どころ。

Bindley は OCR l. 5630–6052 で読んだ（本文と英語の注。22 章は p. 81、l. 5630。23 章は p. 85、l. 5832。24 章は p. 89、l. 6055。画像は見ていない）。Mayor の注は OCR l. 18171–19096（22 章の本文は Mayor の p. 74 l. 29〜p. 78 l. 12、23 章は p. 78 l. 13〜p. 82 l. 36）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。ただし、語句を探すために Mayor の OCR 全体に `rg` をかけたとき、Souter の英訳の 2 行（l. 5204、23.16 の Minos と Rhadamanthus の箇所、l. 5377、24 章の Caelestis の箇所）が出力に出た。この一覧には使っていない。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg`）には、この範囲で p. 76 l. 23 の「e] a (?) recogitatu」（22.7）だけがある。

---

### 章の題 DE FANTASMATIBVS MAGIAE ET DAEMONIIS（23 章の写本の章題）
- 底本（Oehler）：章の題は刷らない。欄外に Cap. XXII.（p. 206）、Cap. XXIII.（p. 210）とあるだけ。
- ほかの読み：22 章の始まりには、校注に章の題の異読がない（校注 p. 206 の Cap. XXII. は 1 の ideo から始まる）。23 章の始まりについて、校注 p. 210 の Cap. XXIII. は、A・B・E・G・a・b、ウィーン写本、エアフルト写本、オクスフォードほかで新しい章が始まり、DE FANTASMATIBVS（G は FANTASMATE）MAGIAE（E とエアフルト写本は MAGICIS、G・a・b は MAGICAE）ET DAEMONIIS（魔術の幻とダイモンについて）と題すると記す。
- 採る校訂者：Oehler・Bindley・Mayor とも 23 章を 22.13 の後から始める（Bindley OCR l. 5832、Mayor の注の柱 l. 18693）。
- 読者への影響：小 — 章の番号は本の AGENTS.md で Oehler に従う。
- 訳での扱い：訳注は付けない。見出し（`# 22〜23 章　…`）を付けるときに、写本の題「魔術の幻とダイモンについて」は 23 章の書き出しに合う。
- 確かめた資料：Oehler 画像 0236（校注 Cap. XXII.）、0240（校注 Cap. XXIII.）。OCR l. 26419、26978–27000。

### 22.1 Sciunt daemones philosophi … dehortatorium plane a bono. Omnes sciunt poëtae（小さな異読と区切り）
- 底本（Oehler）：Atque adeo dicimus esse substantias quasdam spiritales. Nec novum nomen est. Sciunt daemones philosophi, Socrate ipso ad daemonii arbitrium exspectante. Quidni? cum et ipsi daemonium a pueritia adhaesisse dicatur, dehortatorium plane a bono. Omnes sciunt poëtae; …
- ほかの読み：E の最初の手、エアフルト写本、オクスフォードは Atque ideo（校注 p. 206 の 1）。D・F、ウィーン写本、エアフルト写本は spirituales（校注 2）。Aφ・B・F・G、ウィーン写本は Nec novum nomen est、(Aβ、オクスフォード)・c〜f は Nec nomen novum est、D・E・a・b は Nec novum est nomen（校注 3）。λ・c〜f は daemonas（対格の形。校注 4）。λ は ad daemonis、b は a daemonio（校注 5）。λ は et を欠く（校注 6）。D・a〜f は adhaesisse a pueritia の語順（校注 7）。Fulvius Ursinus は dehortatorium plane a bono daemones. Sciunt …、f は … a bono. Daemonas sciunt（ダイモンを詩人たちは知る）、a・b は dehortando plane a bono. Omnes sciunt と区切る（校注 8）。
- 採る校訂者：Bindley の本文は Sciant daemonas philosophi … Daemonas sciunt poetae（f の区切り。OCR l. 5633–5636）。Oehler は scire を nosse（知っている）の意味で使う例として 5 章の注を指し、エウセビオス『福音の準備』5 巻 4 章、アウグスティヌス『神の国』18 巻 14 章、『オクタウィウス』26 章を挙げる（注 p. 206 の a）。dehortatorium plane a bono には、『魂について』1 章の「ソクラテスには幼いときからダイモンがついていたというが、まことに最悪の教師だ」を挙げる（注 b）。Mayor は dehortatorius を辞書にほとんど例のない語とし、ソクラテスのダイモンについてプラトン『ソクラテスの弁明』『パイドロス』、『オクタウィウス』26.9、ラクタンティウス 2 巻 14 章を挙げる（l. 18171–18229）。Bindley もプラトン『弁明』、クセノフォン『ソクラテスの思い出』1 巻 1 章などを挙げる（l. 5657–5658）。
- 読者への影響：小 — 「哲学者も詩人もダイモンを知っている」という意味は、区切りが違っても変わらない。
- 訳での扱い：訳注は付けない。底本では Omnes sciunt poëtae の目的語が書かれていないので、前の daemones を補って訳す。daemonium（ソクラテスの「ダイモニオン」）を、訳語表の daemon「ダイモン」と分けるかはメインが決める（23.8、23.11 の daemonia も同じ語）。dehortatorium plane a bono は「善いことから引き止めるもの」の皮肉として訳す（注 b）。
- 確かめた資料：Oehler 画像 0236（本文、校注 1〜8、注 a・b）。OCR l. 26382–26385、26419–26444、26489–26502。Bindley OCR l. 5632–5636、5657–5661。Mayor OCR l. 18171–18235。

### 22.2 Nam et Satanan … eadem execramenti voce pronuntiat（呪いの声と「サタン」）
- 底本（Oehler）：etiam vulgus indoctum in usum maledicti frequentat. Nam et Satanan, principem huius mali generis, proinde de propria conscientia animae eadem execramenti voce pronuntiat.
- ほかの読み：f と Havercamp は et iam、エアフルト写本は et（校注 p. 207 の 9）。in usum は D・E・G・λ・a〜f、ゴルツェ写本。A・B・F、エアフルト写本、ウィーン写本、オクスフォードは in usu（校注 10）。maledicti frequentat は Aφ・B・G・λ・d・e・f。D・E・F・b、ゴルツェ写本、エアフルト写本、オクスフォード、ウィーン写本は maledictis frequentat、a は maledictis frequentant、c は maledicti frequentant（校注 11）。Satanan は A・B。E・F、ウィーン写本、エアフルト写本は Sathanan、G は Sathanem（校注 12）。animae eadem execramenti は λ・f だけ。A・B・D・E・F・G・a・b、ウィーン写本、オクスフォード、エアフルト写本、Bongars の写本は animae eadem（G は eandem）ex sacramenti、c・d・e は anima eadem ex sacramenti、Fulvius Ursinus は animae eadem et sacramenti（校注 13）。
- 採る校訂者：Oehler は λ・f の execramenti（呪いの言葉）を採り、多くの写本の ex sacramenti を守って「洗礼の『サタンを捨てる』の決まり文句の声で」と解した Heraldus を「取るに足りない」と退ける（注 p. 207 の e）。注 d に引く Rigaltius は、ローマ人がサタンの語を呪いに使ったことはなく、「Malum!（災いあれ）」と言うことで、悪いダイモンのかしらを名指ししているのだとする。Bindley の本文は eadem exsecramenti voce で、Tertullian の意味は、俗人の呪いの叫び Malum! が抽象の「悪」を認め、それと知らずに悪しき者を名指していることだと注し、本文がきわめて不確かだと言う（OCR l. 5668–5670、5683–5689）。並行箇所として、Bindley と Mayor は『魂の証言について』3 章（「あなたは、嫌うときや退けるときにサタンを口にする。わたしたちが悪の天使と呼ぶ者を」）を挙げ、Mayor も Rigaltius の Malum 説を紹介する（Mayor l. 18237–18251）。Mayor は exsecramentum をウルガタと『ユダヤ人への反論』に例のある語とする（l. 18249）。
- 読者への影響：中 — 「民衆が呪いの言葉で『サタン』と言う」とそのまま訳すと、異教徒がサタンの名を口にしたように読める。注釈者は、「災いあれ（悪よ）」という呪いの叫びが、それと知らずにサタンを名指している、と取る。
- 訳での扱い：訳注は付けない（読みの違いではなく、文の意味の取り方の問題）。底本の execramenti で「同じ呪いの言葉で」と訳す。eadem … voce は前の in usum maledicti（呪いのときに口にする「ダイモン」の語）を受ける。民衆がサタンを「名指す」ことを、どの語を口にすることとして訳すか（Rigaltius・Bindley の Malum、または前の「ダイモン」の語）はメインが決める。de propria conscientia animae は『魂の証言について』の考え（魂が生まれつき知っていること）に通じるので、「魂が自分で知っていることから」と訳せる。名前は「サタン」（口語訳の第一歴代二一・一、第一コリント五・五などの表記）。
- 確かめた資料：Oehler 画像 0237（本文、校注 9〜13、注 d・e）。OCR l. 26511–26514、26528–26531、26557–26569、26580–26596、26609–26610。Bindley OCR l. 5668–5670、5683–5689。Mayor OCR l. 18237–18251。

### 22.3 Angelos quoque etiam Plato non negavit. Utriusque nominis testes esse vel magi adsunt（小さな異読）
- 底本（Oehler）：Angelos quoque etiam Plato non negavit. Utriusque nominis testes esse vel magi adsunt.
- ほかの読み：esse vel magi adsunt は A・B・E・F・f、ウィーン写本、エアフルト写本、Bongars の写本。Havercamp は vel magi adsunt（esse がない）、Heraldus は ecce vel magi adsunt、G は esse vel magi deus、λ とオクスフォードは esse vel magi adserunt、D・a〜e は esse vel magos asserunt（校注 p. 207 の 14）。
- 採る校訂者：Oehler は testes esse adsunt をギリシア語風の言い方とし、「証言するためにそこにいる」の意味と注する（注 g）。Plato non negavit には、「（プラトンは）天使をダイモンと言い換えている」と注し、プラトン『饗宴』などを挙げる（注 f）。Bindley の本文は testes vel magi adsunt（esse がない。OCR l. 5671–5672）。Bindley も『饗宴』とディオゲネス・ラエルティオス 3 巻 79 節を挙げ、adsunt の代わりに asserunt と読む本もあると注する（l. 5691–5692）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。プラトンが「天使」の語を使ったのではなく、天使に当たるものをダイモンとして語ったことは、訳文で「天使（にあたるもの）」と補うかどうかをメインが決める。「魔術師たちでさえ、どちらの名についても証人として立つ」と訳す。
- 確かめた資料：Oehler 画像 0237（本文、校注 14、注 f・g）。OCR l. 26514–26515、26535–26538、26572–26573、26597–26599、26612–26624。Bindley OCR l. 5671–5672、5691–5692。

### 22.3 de angelis quibusdam sua sponte corruptis … apud litteras sanctas ordo cognoscitur（堕ちた天使と「聖なる書」）
- 底本（Oehler）：Sed quomodo de angelis quibusdam sua sponte corruptis corruptior gens daemonum evaserit, damnata a deo cum generis auctoribus et cum eo quem diximus principe, apud litteras sanctas ordo cognoscitur.
- ほかの読み：λ は auctoribus et quem diximus principem aut litteras（校注 p. 207 の 15）。ordo は Aβ・E・F・G・λ、ウィーン写本、エアフルト写本。(Aφ・Bφ・Dφ) と a〜f は ordine（順を追って知られる）。D は cognoscitur の代わりに agnoscitur（校注 16）。
- 採る校訂者：Bindley の本文は ordine cognoscitur（OCR l. 5675）。Bindley は、Tertullian が創世記六・二をこの意味に取り（『偶像崇拝について』9 章、『おとめの覆いについて』7 章）、『女性の装いについて』1 巻 2〜3 章ではエノク書を引くとし、七十人訳のアレクサンドリア写本が「神の子たち」を「天使たち」と読むことがこの解釈の一因かもしれないと注する（l. 5694–5705）。Mayor は litteras sanctas を「おそらくエノク書」とし、創世記六・二とみる説も挙げる（l. 18258–18280）。Oehler は『偶像崇拝について』9 章の注を指し、ヨセフス『ユダヤ戦記』7 巻とユスティノス『第二弁明』の、ダイモンを死んだ悪人の霊とする箇所を挙げる（注 h）。
- 読者への影響：中 — 「聖なる書」がどの書を指すか（創世記六章か、エノク書か）で受け取り方が変わる。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない。litterae sanctae は「聖なる書」とし、書名は補わない。ordo は「その次第」。創世記六・二（口語訳「神の子たちは人の娘たちの美しいのを見て、自分の好む者を妻にめとった」）は暗示で、引用ではない。
- 確かめた資料：Oehler 画像 0237（本文、校注 15・16、注 h）。OCR l. 26515–26518、26539–26540、26574–26575、26626–26637。Bindley OCR l. 5672–5675、5694–5705。Mayor OCR l. 18258–18280。`node tools/bible.js Gen.6.2`。

### 22.4–22.5 excessus … ad utramque substantiam hominis adeundam … in effectu potius quam in actu（小さな異読）
- 底本（Oehler）：animae vero repentinos et extraordinarios per vim excessus. Suppetit illis ad utramque substantiam hominis adeundam subtilitas et tenuitas sua. Multum spiritalibus viribus licet, ut invisibiles et insensibiles in effectu potius quam in actu suo appareant, si poma, …
- ほかの読み：adeundam は A・E・F・c〜f、Bongars の写本、エアフルト写本、オクスフォード。B・G、ウィーン写本は ad eundem、λ と Havercamp は adeundam mira（驚くべき）、b は laedendam、D・a は alendam（校注 p. 207 の 17）。a・b は viribus licet et invisibiles（校注 18）。D・E・F・G・a、ウィーン写本は affectu、エアフルト写本は affectum（校注 19）。G は apparent si、Rhenanus は apparent. Ac si と区切る（校注 p. 208 の 20）。
- 採る校訂者：Bindley の本文は adeundam mira subtilitas（OCR l. 5681）。Bindley は excessus を「逸脱、行き過ぎ」とし（9 章に同じ用法）、utramque substantiam hominis を人の体と霊の部分と注する（l. 5707–5714）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。substantia は訳語表の「実体」だが、ここの utramque substantiam hominis は人の二つの成り立ち（体と魂）で、22.4 の corporibus … animae vero を受ける。「人の両方の実体」とするか「体と魂の両方」と補うかはメインが決める。excessus は Bindley に従い「錯乱、逸脱」の意味で取れる（死の意味の excessus と分ける）。
- 確かめた資料：Oehler 画像 0237（本文、校注 17〜19）、0238（校注 20）。OCR l. 26521–26525、26541–26542、26576–26578、26603–26606、26664。Bindley OCR l. 5678–5681、5707–5714。

### 22.5 si poma, si fruges … temptatus aër pestilentes haustus suos offundit（小さな異読）
- 底本（Oehler）：si poma, si fruges nescio quod aurae latens vitium in flore praecipitat, in germine exanimat, in pubertate convulnerat, ac si caeca ratione temptatus aër pestilentes haustus suos offundit.
- ほかの読み：F とエアフルト写本は quid（校注 p. 208 の 21）。λ は latentis（校注 22）。A・B・G・c は examinat（校注 23）。b は ac を欠く（校注 24）。F とウィーン写本は turbatus（校注 25）。offundit は A・B・E・F・d・e・f、ガンとエルノンの写本、エアフルト写本、ウィーン写本。D・G・a・b・c は effundit（校注 26）。
- 採る校訂者：Bindley は praecipitat を穀物や果実の時ならぬ早熟の語とし、temptatus を「冒された」（毒や伝染の医学の語）と注する（OCR l. 5740–5745）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。si … si … ac si は条件というより「〜するときのように」の比較で、見えない霊の力の働きを、実を落とす空気の害や疫病の空気にたとえる。この取り方はこの一覧の観察で、注釈者の注はない。
- 確かめた資料：Oehler 画像 0238（本文、校注 21〜26）。OCR l. 26646–26649、26664–26665、26709–26711、26734–26736。Bindley OCR l. 5719–5724、5740–5745。

### 22.6 quorum iste potissimus quo deos istos … commendat（構文と異読）
- 底本（Oehler）：Eadem igitur obscuritate contagionis adspiratio daemonum et angelorum mentis quoque corruptelas agit furoribus et amentiis foedis aut saevis libidinibus cum erroribus variis, quorum iste potissimus quo deos istos captis et circumscriptis hominum mentibus commendat, ut et sibi pabula propria nidoris et sanguinis procuret simulacris imaginibus oblata.
- ほかの読み：foedis aut saevis は A・B・E・F・G・λ・d、Pamelius の写本のすべて、オクスフォード、エアフルト写本、ウィーン写本。D・a・b・c・e・f は foedis ac saevis（校注 p. 208 の 27）。quo deos istos に対して、Aβ・D・E・G、エアフルト写本は quod eos istos、a〜e は quod eos ipsos（「それらを（人の心に）勧めること」。校注 28）。λ は hominum を欠く（校注 29）。commendat は B・F・G・λ・c・e・f、ウィーン写本。A・D は commedat、E・a・b・d、ガンとエルノンの写本、オクスフォード、エアフルト写本、Bongars の写本、ヴァティカンの写本の一つは comedat（食い尽くす）（校注 30）。procuret を λ は curet（校注 31）。λ と Havercamp は et imaginibus（校注 32）。λ は oblata を欠き、F は immolata（校注 33）。
- 採る校訂者：Oehler は、最良の写本に従って imaginibus の前の et を除いた、と注する（注 k）。注 i に引く Heraldus は、ダイモンが人の心を迷わせ、苦しめられた人々が供え物で神々をなだめようとするように仕向けることで、神々を人に「勧める」と解する。注 k に引く Heraldus は、ダイモンが供え物の脂の煙と血で養われるという古い考えを、ユスティノス、アテナゴラス、ミヌキウス、オリゲネス、ポルフュリオス『禁欲について』などで示し、これを死者の霊を呼ぶ魔術の供え物と解した Zephyrus と Pamelius を退ける。Bindley の本文は quo deos istos … commendat, ut et sibi pabula propria nidoris et sanguinis procuret simulacris et imaginibus oblata, et quae illis accuratior pascua est, hominem a cogitatu verae divinitatis avertant praestigiis falsae divinationis と、次の文まで一続きにする（OCR l. 5727–5733）。Bindley は circumscriptis を deceptis（欺かれた）の意味とする（l. 5747）。
- 読者への影響：小 — 底本の quo でも写本の多くの quod でも、「ダイモンが神々を人の心に勧め込む」という意味は変わらない。
- 訳での扱い：訳注は付けない。quorum iste potissimus quo … commendat は「その（迷いの）うちで最大のものは、それによって（ダイモンが）あの神々を…勧め込む迷いである」と、quo を迷いを受ける関係詞として訳す。主語の adspiratio（息吹き）が commendat、procuret の主語でもある。simulacris imaginibus は「像や似姿に」と並べて訳せる（et がない形）。pabula propria nidoris et sanguinis は「脂の煙と血という、自分たちに似合いの餌」。
- 確かめた資料：Oehler 画像 0238（本文、校注 27〜33、注 i・k）。OCR l. 26649–26654、26668–26671、26686–26717、26736–26742、26755–26771。Bindley OCR l. 5724–5733、5747–5753。

### 22.7 Et quae illi accuratior pascua est, quam ut hominem e cogitatu verae divinitatis avertat praestigiis falsis?（異読）
- 底本（Oehler）：Et quae illi accuratior pascua est, quam ut hominem e cogitatu verae divinitatis avertat praestigiis falsis? Quas et ipsas quomodo operetur expediam.
- ほかの読み：illi は A・B・D・E・F・G・a〜e、Pamelius の写本のすべて、ウィーン写本、オクスフォード、エアフルト写本。λ・f と Havercamp は illis（彼らにとって）（校注 p. 208 の 34）。c は accuratiora pascua sunt（校注 35）。quam ut hominem は (Aβ)・e・f。Aφ・B・D・E・G は quam hominem、F は quod hominem、a・b は qua hominem、c・d は hominem、λ は nisi ut hominem（校注 36）。e cogitatu は A・D・E・a〜e、ウィーン写本、エアフルト写本、オクスフォード、アンブロジアーナ写本。B は et cogitatu、G は ecogitatum、F は a cogitatu、λ・f と Havercamp は a recogitatu（思い返すことから）（校注 37）。avertat は A・B・D・E・F・G・a〜e、エアフルト写本、オクスフォード。λ・f と Havercamp、(ウィーン写本) は avertant（校注 38）。λ・f と Havercamp は praestigiis falsae divinationis? quas（偽りの占いのまやかしで）（校注 39）。quomodo operetur は F・b〜e。λ・a・f と Havercamp、(ウィーン写本) は quomodo operentur、Aβ・B・D、エアフルト写本は quomodo ut operetur、Aφ は quomodo ut operentur、G は quomodo oportet（校注 40）。
- 採る校訂者：Bindley の本文は et quae illis accuratior pascua est, hominem a cogitatu … avertant praestigiis falsae divinationis. Quas et ipsas quomodo operentur（λ・f の読み。OCR l. 5730–5733）。Bindley は accuratior を「はるかに口に合う」の意味に取り、無理な意味だが、プラウトゥスに accurare を客をもてなす意味で使う例があるとする。pascua を名詞とするのは後代のラテン語だとする（l. 5755–5759）。Mayor は accuratior を「より凝った、念入りな」（キケロ『ブルトゥス』）とし、pascua の例を挙げる（l. 18400–18406）。Mayor は Oehler と違う読みの一覧で p. 76 l. 23 に「e] a (?) recogitatu」と書き、λ・f の a recogitatu を好む（画像 0172）。Mayor の注にも RECOGITATV の見出しがあり、『マルキオン反駁』4 巻 43 章の例を挙げる（l. 18408）。
- 読者への影響：小 — 「人をまことの神性から背かせることこそ、ダイモンのいちばんのご馳走だ」という意味は変わらない。λ の falsae divinationis なら、次の quas（そのまやかし）が占いのまやかしであることがはっきりする。
- 訳での扱い：訳注は付けない。底本の e cogitatu（思いから）で訳し、praestigiis falsis は「偽りのまやかしで」とし、「占い」を足さない（本の AGENTS.md「底本の語を、異読と紛れる訳にしない」）。illi（単数）は前の adspiratio を受ける。Quas et ipsas は praestigiis を受けるので、「そのまやかしを、どのように働かせるのか」。accuratior pascua の訳（「念入りなご馳走」「いっそう好む餌」）はメインが決める。
- 確かめた資料：Oehler 画像 0238（本文、校注 34〜40）。OCR l. 26654–26657、26672–26680、26718–26724、26743–26749。Bindley OCR l. 5730–5733、5755–5759。Mayor OCR l. 18400–18408、画像 `0172_page.jpg`。

### 22.7–22.8 Omnis spiritus ales est. Hoc angeli et daemones … quid ubi geratur tam facile sciunt quam adnuntiant（小さな異読）
- 底本（Oehler）：Omnis spiritus ales est. Hoc angeli et daemones. Igitur momento ubique sunt; totus orbis illis locus unus est; quid ubi geratur tam facile sciunt quam adnuntiant. Velocitas divinitas creditur, quia substantia ignoratur.
- ほかの読み：λ・f は ales. hoc et angeli（校注 p. 208 の 41）。quid ubi geratur は A・B・D・E・G・λ・e・f、Bongars の写本、ウィーン写本、オクスフォード、エアフルト写本（G は quis）。F は quid igitur geratur、a〜d は quid（c は quod）ubique geratur（どこで起きていることも）（校注 42）。adnuntiant は A・B・E・F・G・λ、Bongars の写本、エアフルト写本、ウィーン写本。D・a〜f と Havercamp は enuntiant（校注 43）。
- 採る校訂者：Bindley の本文は quid ubique geratur … quam enuntiant（OCR l. 5735）。Bindley は Hoc を「翼がある」（前の ales）を受けるものとし、Velocitas divinitas creditur を「その速さが、正体を知られていないこともあって、神性のしるしとみなされる」と注する（l. 5761–5765）。Oehler は quid ubi geratur に『迫害のときの逃亡について』8 章の注を指す（注 l）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Hoc angeli et daemones は「天使もダイモンもそう（翼がある）だ」と、ales を補って訳す（Bindley）。substantia は訳語表の「実体」（正体）。
- 確かめた資料：Oehler 画像 0238（本文、校注 41〜43、注 l）、0239（本文の初め）。OCR l. 26657–26661、26683–26684、26726–26728、26750–26752、26773–26774、26783。Bindley OCR l. 5733–5736、5761–5765。

### 22.9–22.10 Dispositiones etiam dei et tunc prophetis contionantibus excerpunt et nunc lectionibus resonantibus carpunt（預言と朗読から盗む）
- 底本（Oehler）：Dispositiones etiam dei et tunc prophetis contionantibus excerpunt et nunc lectionibus resonantibus carpunt. Ita et hinc sumentes quasdam temporum sortes aemulantur divinitatem, dum furantur divinationem.
- ほかの読み：tunc は A・B・E・F・G・λ・e・f、ウィーン写本、エアフルト写本、オクスフォード、Bongars の写本。D・a〜d は nunc（校注 p. 209 の 44）。λ・f と Havercamp は exceperunt（聞き取った。完了形）（校注 45）。
- 採る校訂者：Bindley の本文は exceperunt（OCR l. 5772–5773）。Bindley は dispositiones を「神の計画」とし（41 章に同じ用法。ユスティノス『第一弁明』54 章を挙げる）、lectionibus resonantibus を奪格の独立句で「聖書の公の朗読が響いているあいだに」と注する。18 章の「ユダヤ人が公に朗読している」を参照させる。aemulantur divinitatem は、盗んだ予言に基づいて（神と）張り合って神性を名乗ること、と注する（l. 5791–5802）。Mayor は dispositiones にラクタンティウス 2 巻 16 章 14 節（ダイモンは神の計画を前もって察し、自分がそれを行うように見せかける）を挙げ、aemulantur に 2 章の aemulae rationis を、divinitatem … divinationem の語呂に 20 章を挙げる（l. 18419–18468）。furantur には、ユスティノス『第一弁明』54 章、アレクサンドリアのクレメンス『ストロマテイス』1 巻 17 章（ダイモンが真理を盗む）を挙げる（l. 18469–18479）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。aemulantur は、訳語表の aemulus（神に張り合うダイモンの働き。2:19〜2:20、27 章以下）に揃え、「神性と張り合う」とする。divinitas「神性」と divinatio「予言」は訳語表どおり（20.3〜20.5）で、語呂は訳では出しにくい。sortes は「（時の）くじ」「運命の定め」の意味に取れる（この語義はこの一覧の観察。Mayor はユウェナリス 1 巻 82 行の注を指すだけ）。
- 確かめた資料：Oehler 画像 0239（本文、校注 44・45）。OCR l. 26785–26788、26837、26899。Bindley OCR l. 5772–5775、5791–5802。Mayor OCR l. 18419–18479。

### 22.10–22.11 sciunt Croesi, sciunt Pyrrhi … testudinem decoqui … quo supra diximus（クロイソスとピュロスの託宣）
- 底本（Oehler）：In oraculis autem quo ingenio ambiguitates temperent in eventus sciunt Croesi, sciunt Pyrrhi. Ceterum testudinem decoqui cum carnibus pecudis Pythius eo modo renuntiavit quo supra diximus; momento apud Lydiam fuerat.
- ほかの読み：G・λ は eventum（校注 p. 209 の 46）。λ は pecoris、F は pecudum（校注 47）。F・G、ウィーン写本は denuntiavit（校注 48）。λ は fuerant（校注 49）。
- 採る校訂者：Oehler は、クロイソスにヘロドトス 1 巻 47 章を、ピュロスにキケロ『予言について』2 巻 56 章のエンニウスを挙げる（注 m）。Bindley は、クロイソスにヘロドトス 1 巻 53・55・91 章、亀の託宣にヘロドトス 1 巻 46〜48 章を挙げる（OCR l. 5804–5807）。Mayor は、両義の託宣の決まった例としてクロイソスを挙げ、ラクタンティウス 2 巻 14 章 6 節（ダイモンは未来をすべては知らないので、答えを両義に整える）を temperent に、『オクタウィウス』26.6 をピュロスに挙げる（l. 18495–18533）。
- 読者への影響：中 — 二人の王の故事（クロイソスは「大きな国を滅ぼす」との託宣で自分の国を失い、ピュロスはどちらにも取れる託宣を受けた）と、亀の託宣（クロイソスが託宣を試し、遠くで亀と羊を煮ているのを当てさせた話。ヘロドトス 1 巻 46〜48 章）を知らないと分かりにくい。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない（訳注は別の読みや後代の挿入に限る）。Croesi、Pyrrhi は複数形で「クロイソスたち、ピュロスたち」（「〜のような人々」）の言い方。名前の表の「プロクルスのような人々」（21.26）にならうかはメインが決める。Pythius は「ピュトの神（アポロ）」。quo supra diximus（上で述べたやり方で）は、『護教論』のこれまでの章に亀の話は出ないので（`research/oehler-1853.txt` を testudin で検索して 22.11 だけ）、22.8 の「一瞬でどこにでもいて、どこで何が起きているかを知る」を受けると読める。これはこの一覧の観察で、注釈者の注は見ていない。
- 確かめた資料：Oehler 画像 0239（本文、校注 46〜49、注 m）。OCR l. 26788–26802、26838–26843、26855–26860、26896–26900。Bindley OCR l. 5776–5779、5804–5807。Mayor OCR l. 18495–18555。

### 22.11 Habent de incolatu aëris … caelestes sapere paraturas（小さな異読）
- 底本（Oehler）：Habent de incolatu aëris et de vicinia siderum et de commercio nubium caelestes sapere paraturas, ut et pluvias, quas iam sentiunt, repromittant.
- ほかの読み：habent は F・a〜f。A・B・D・E・G、エアフルト写本、ウィーン写本、アンブロジアーナ写本は habens、λ は habentes（校注 p. 209 の 50）。
- 採る校訂者：Oehler は incolatus を「寄留、住まい」の意味とし、Heraldus の引くヒエロニムスとアンブロシウスの例に、『諸国民へ』2 巻 5 章、『冠について』13 章を加える（注 n）。paratura をテルトゥリアヌスの語とし、habere＋不定詞の形について『迫害のときの逃亡について』12 章の注を指す（注 o）。Mayor も habent sapere と incolatus の例を挙げる（l. 18557–18578）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。habent sapere は「知ることができる」、caelestes paraturae は「天の（雨の）支度」。
- 確かめた資料：Oehler 画像 0239（本文、校注 50、注 n・o）。OCR l. 26805–26811、26903、26863–26882。Mayor OCR l. 18557–18578。

### 22.12 Benefici plane et circa curas valitudinum（Benefici／Venefici）
- 底本（Oehler）：Benefici plane et circa curas valitudinum. Laedunt enim primo, dehinc remedia praecipiunt ad miraculum nova sive contraria, post quae desinunt laedere, et curasse creduntur.
- ほかの読み：λ と Havercamp は Venefici（毒を盛る者、呪術師）、D・F・a は beneficii（校注 p. 209 の 51）。λ は circa medicinas valitudinum（校注 52）。G は laedent enim primum dehinc remedia percipiunt（校注 53）。F とウィーン写本は miracula（校注 54）。D・F・a・b・c は postquam、G は desinunt を definiunt と読む（校注 55）。
- 採る校訂者：Bindley の本文は Venefici plane（OCR l. 5783）。Bindley は nova, sive contraria を「新しい治療法、またはふつうとは逆の療法」と注する（l. 5809–5810）。Mayor は plane を皮肉と注し（35 章を参照）、『オクタウィウス』27.3（ダイモンは体にひそかに入り込んで病を装い、供え物に満ちると縛っていたものを緩めて、治したように見せる）、ラクタンティウス 2 巻 14〜15 章を挙げる（l. 18583–18614）。Oehler は『オクタウィウス』26 章の終わり、タティアノス『ギリシア人への演説』31 章（Oehler の刷りの章番号）、アルノビウス 1 巻 48 章などを挙げる（注 p）。
- 読者への影響：中 — 底本の Benefici（「慈善家」）は皮肉で、λ の Venefici なら「毒を盛る者」と非難をそのまま言う。どちらでも、次の文（まず害して、それから治すふりをする）で意味は通る。
- 訳での扱い：訳注は付けない。底本の Benefici を、皮肉と分かる形で訳す（Mayor の注）。「毒」「呪い」の語は足さない（本の AGENTS.md「底本の語を、異読と紛れる訳にしない」）。
- 確かめた資料：Oehler 画像 0239（本文、校注 51〜55、注 p）。OCR l. 26812–26829、26845–26848、26888、26906–26912、26915–26921。Bindley OCR l. 5783–5786、5809–5810。Mayor OCR l. 18583–18614。

### 22.12–22.13 Quid ergo de ceteris ingeniis … edisseram? phantasmata Castorum …（区切りと λ の加筆、三つの故事）
- 底本（Oehler）：Quid ergo de ceteris ingeniis vel etiam viribus fallaciae spiritalis edisseram? phantasmata Castorum, et aquam cribro gestatam, et navem cingulo promotam, et barbam tactu inrufatam, ut numina lapides crederentur, ut deus verus non quaereretur?（疑問符の後の phantasmata を小文字で刷る）
- ほかの読み：b は ego（校注 p. 209 の 56）。λ は edisseram, dum oracula profitetur, dum miracula exercet. phantasmata（「託宣を名乗り、奇跡を行うあいだに」を加える。校注 57）。ut は A・B・D・E・F・G・λ・c〜f、エアフルト写本、ウィーン写本、オクスフォード。a は et ut、b と Havercamp は ut et（校注 p. 210 の 58）。ut deus は A・B・E・G、ウィーン写本、エアフルト写本。D・λ・a〜f と Havercamp は et deus、F は nec deus（校注 59）。D は non crederetur、F は quaereretur（non がない）、λ は non quae effecerint（校注 60）。
- 採る校訂者：Bindley の本文は edisseram, phantasmata Castorum … et Deus verus non quaereretur?（edisseram の後を区切らず、phantasmata 以下を edisseram の目的語の側に置く。OCR l. 5788–5790、5829–5830）。三つの故事について、Bindley は次のように注する（l. 5814–5856）。カストル兄弟の幻はレギッルス湖の戦いとペルシア戦争の勝利を告げた話（ウァレリウス・マクシムス 1 巻 8 章ほか）。篩で水を運んだのはウェスタの処女トゥッキアが潔白を証した話（同 8 巻 1 章）。帯で船を動かしたのは、貞潔を疑われたクラウディア・クインタがキュベレの像を運ぶ船を帯で引いた話（リウィウス 29 巻 14 章）。触れられて赤くなった髭は、ドミティウス・アヘノバルブスに双子の若者が勝利の知らせの証として与えたしるし（スエトニウス『ネロ伝』1 章）。Oehler も同じ典拠を挙げる（注 r〜u）。Mayor も同じ典拠を挙げ、『オクタウィウス』7.3、27.4 の並行箇所を引く（l. 18620–18687）。
- 読者への影響：中 — 四つの故事の中身（どの奇跡か）を知らないと分かりにくい。ただし読みの違いの問題ではない。
- 訳での扱い：訳注は付けない。人名（トゥッキア、クラウディア・クインタ、アヘノバルブス）は原文にないので補わない（名前の表の 14.2 のブリアレオス、15.2 と同じ扱い）。Castores は「カストル兄弟（カストルとポルックス）」とするか「カストルたち」とするかはメインが決める。底本の区切りでは、phantasmata 以下は edisseram? の後に置かれた、話題を挙げる続きの問い（「カストル兄弟の幻や…について語ろうか」）で、ut … ut … は「石が神と信じられ、まことの神が求められないようにするための」と目的で受ける。
- 確かめた資料：Oehler 画像 0239（本文、校注 56・57、注 q〜t）、0240（本文、校注 58〜60、注 u）。OCR l. 26830–26834、26850–26852、26889、26924–26945、26957–26958、26974–26991、27010–27011。Bindley OCR l. 5786–5790、5814–5830、5849–5856。Mayor OCR l. 18620–18687。

### 23.1 si et magi phantasmata edunt et iam defunctorum infamant animas（infamant／inclamant）
- 底本（Oehler）：Porro, si et magi phantasmata edunt et iam defunctorum infamant animas, …
- ほかの読み：F・G、ウィーン写本は et si（校注 p. 210 の 1）。infamant は A・B・D・E・F・G・λ・f、Bongars の写本、エアフルト写本、オクスフォード、ウィーン写本、Pamelius の写本五つ。a〜e は inclamant（呼び出す）（校注 2）。
- 採る校訂者：注 a に引く Heraldus は、写本の infamant を「おそらくよりよい」とし、呼び出された魂がさらし者にされることから、infamare を inclamare、evocare（呼び出す）の意味で、しかも呼び出しによって魂に恥を負わせる意味で使った、とする（『魂について』7 章の infamet の例を挙げる）。phantasmata は、魔術師が人の感覚を惑わし、ないものを見させることだとする。Bindley も infamant を本文に置き、inclamant と次の eliciunt を説明の書き込みとみる（OCR l. 5834–5835、5860–5861）。Bindley はユスティノス『第一弁明』24 章を挙げる（l. 5858）。Mayor は死者の魂を呼び出すことの例を多く挙げる（l. 18718–18730）。
- 読者への影響：小 — 「死者の魂を呼び出して辱める」という意味は、どちらの読みでもおおむね同じ。
- 訳での扱い：訳注は付けない。infamant は、「呼び出す」の意味と「辱める」の響きの両方が残るように訳すとよい。どちらを前に出すかはメインが決める。
- 確かめた資料：Oehler 画像 0240（本文、校注 1・2、注 a）。OCR l. 26968–26971、27057–27063、27013–27071。Bindley OCR l. 5834–5835、5858–5861。Mayor OCR l. 18696–18730。

### 23.1 si pueros in eloquium oraculi elidunt（子供を倒して託宣させる／子供を殺す）
- 底本（Oehler）：si pueros in eloquium oraculi elidunt, …
- ほかの読み：elidunt は A・B・D・E・F・G・f、ウィーン写本、エアフルト写本、Bongars の写本。λ は edunt、a〜e は eliciunt（引き出す）（校注 p. 210 の 3）。
- 採る校訂者：注 b に引く Rigaltius（Heraldus も先に同じ解釈）は、elidere を「打ち倒す」と取り、呪文をかけられた子供が癲癇のように倒れ、我を忘れて起き上がって託宣を語ったことだとして、アプレイウス『弁明』42 章以下を挙げる。Oehler はこれに対し、Fr. Junius が子供を血まみれのいけにえにする占いと解したほうが正しいとし、テルトゥリアヌスは elidere を necare（殺す）の意味でしか使わないとして、『見世物について』18 章、『サソリの毒への解毒剤』6 章、『オクタウィウス』30 章の例を挙げる（注 b）。Bindley は逆に、子供の内臓を見るためのいけにえではなく、催眠のような忘我の状態にすることを言う強い語だとする（OCR l. 5863–5867）。Mayor は pueros にユウェナリス 6 巻 552 行とホラティウス『エポーディ』5 歌を挙げる（l. 18769）。
- 読者への影響：大 — Oehler の解釈では「子供を殺して託宣を語らせる」、Rigaltius と Bindley の解釈では「子供を倒して（忘我にして）託宣を語らせる」で、訳文がまったく違う。
- 訳での扱い：訳注は付けない（読みの違いではなく、語の取り方の問題）。本の AGENTS.md の「文型の訳し方」は Oehler の注をこの本の判断の拠り所にするので、それに従えば「子供を殺して託宣を語らせる」となる。ただし in eloquium oraculi（託宣を語ることへと）は、殺された子供が語るのではなく、いけにえによって託宣を得ることを言うので、訳文で筋が通るようにする。どちらを採るかはメインが決める。
- 確かめた資料：Oehler 画像 0240（本文、校注 3、注 b）。OCR l. 26971、27061–27064、27073–27110。Bindley OCR l. 5835、5863–5867。Mayor OCR l. 18769–18770。

### 23.1 habentes semel invitatorum … adsistentem sibi potestatem … caprae et mensae divinare consuerunt（小さな異読）
- 底本（Oehler）：si multa miracula circulatoriis praestigiis ludunt, si et somnia immittunt habentes semel invitatorum angelorum et daemonum adsistentem sibi potestatem, per quos et caprae et mensae divinare consuerunt, quanto magis ea potestas de suo arbitrio et pro suo negotio studeat totis viribus operari quod alienae praestat negotiationi?
- ほかの読み：consuerunt は Aβ・E・G、エアフルト写本。刊本は consueverunt（校注 p. 211 の 4）。ea は A・B・D・E・F・a・b・e・f、オクスフォード、ウィーン写本、アンブロジアーナ写本、エアフルト写本。G・c・d は illa（校注 5）。F・a は praestant（校注 6）。
- 採る校訂者：Oehler は semel について『迫害のときの逃亡について』2 章の注を指す（注 e）。adsistentem に、注 f に引く Heraldus は、魔術師に付き従う霊を「パレドロイ」（傍らに座る者）と呼んだことを挙げ、『オクタウィウス』26 章のソクラテスの「傍らにいるダイモン」などを引く。caprae et mensae divinare には、山羊の占いと卓の占い（アンミアヌス 29 巻）を挙げる（注 g）。Bindley は mensae を託宣の三脚台とみる（OCR l. 5869–5872）。Mayor はソゾメノス 6 巻 35 章とアンミアヌス 29 巻 1 章の、文字を縁に並べた円卓の占いを挙げる（l. 18788–18804）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。semel は訳語表どおり「きっぱりと、一度かぎりで」の意味で、habentes に掛けて「（天使とダイモンを）いったん招いて、その力を傍らに持っている」と訳す。mensae は「卓」とし、三脚台とは補わない。quanto magis は本の AGENTS.md どおり「まして」で受ける。
- 確かめた資料：Oehler 画像 0241（本文、校注 4〜6、注 c〜g）。OCR l. 27116–27120、27133–27134、27152–27203。Bindley OCR l. 5836–5841、5869–5872。Mayor OCR l. 18772–18804。

### 23.2 quam utique superiorem omni potestate credendum est … quam pares angelis et daemonibus deos esse（小さな異読）
- 底本（Oehler）：ubi est ergo praecellentia divinitatis, quam utique superiorem omni potestate credendum est? Non ergo dignius praesumetur ipsos esse qui se deos faciant, cum eadem edant quae faciant deos credi, quam pares angelis et daemonibus deos esse?
- ほかの読み：λ は quae utique superior omni potestate credenda est（校注 p. 211 の 7）。F は faciunt（校注 8）。λ は quam pares angeli et daemones esse、E・オクスフォード・エアフルト写本は quam impares angelis et daemonibus deos esse（天使やダイモンと等しくない神々）（校注 9）。
- 採る校訂者：Bindley の本文は quae utique superior omni potestate credenda est と quam pares angelis et daemonibus deos esse（OCR l. 5843–5847）。
- 読者への影響：小 — impares は文の論理（ダイモンと同じことしかしないなら、神々はダイモンと等しい）に合わない。
- 訳での扱い：訳注は付けない。Non ergo dignius praesumetur … quam … は「〜と考えるより、〜と考えるほうがふさわしくないだろうか」の比較の修辞疑問。
- 確かめた資料：Oehler 画像 0241（本文、校注 7〜9）。OCR l. 27121–27125、27134–27136。Bindley OCR l. 5841–5847。

### 23.3 Locorum differentia distinguitur, opinor … qui sibi gulam prosecat（皮肉と、神殿の狂乱）
- 底本（Oehler）：Locorum differentia distinguitur, opinor, ut a templis deos existimetis quos alibi deos non dicitis; ut aliter dementire videatur qui sacras turres pervolat, aliter qui tecta viciniae transilit, et alia vis pronuntietur in eo qui genitalia vel lacertos, alia qui sibi gulam prosecat. Compar exitus furoris et una ratio est instigationis.
- ほかの読み：λ と Havercamp は distinguit。Fulvius Ursinus は distinguit, ut opinor, a templis と書き直すことを望む（校注 p. 211 の 10）。λ は ut in templis（校注 11）。F・λ・f は aestimetis（校注 12）。dementire は Aβ（最初の手）・B・D・F・G・λ・d・e・f、Pamelius の写本、ウィーン写本（demetire）、アンブロジアーナ写本。Aβ（後の手）・E・a・b・c、エアフルト写本は dementare、オクスフォードは dementitare（校注 13）。G は praevolat（校注 14）。F は in illo（校注 15）。λ と Havercamp は alia in eo qui（校注 16）。gulam prosecat. Compar は c〜f と Havercamp。ガンとエルノンの写本、ヴァティカンの写本の一つは gulam prosecat. compara、D・E・a・b、エアフルト写本、ヴァティカンの写本の一つは gulam prosecat cum par、G は gulam perfectam compera、F は gulam laceratam conparat.、A・B・λ、ウィーン写本は gulam prosectam compara（A・B の後の手は compar）（校注 17）。a・c は investigationis（校注 18）。
- 採る校訂者：Oehler は alia qui sibi gulam prosecat を、ベッロナの祭司とガッルス（キュベレの去勢した祭司）のこととし、『オクタウィウス』27 章が「（彼らは）神殿の外でも狂い、…ダイモンのそそのかしは同じで、狂乱の口実が違うだけだ」とこの箇所を写しているとする（注 h、注 p. 212 の続き）。Bindley の本文は aestimetis … alia in eo qui sibi gulam prosecat. Compar exitus（OCR l. 5882–5886）。Bindley は、異教徒の目では神々とダイモンの違いが住む場所だけによる、という皮肉だとし、sacras turres pervolat をレウカスの岬から罪人を投げ落とすアポロの贖いの儀式、genitalia vel lacertos をキュベレの祭司（コリュバンテス、ガッリ）とする（l. 5876–5907）。Mayor は turres pervolat にユウェナリス 3 巻 78 行（「天に昇れと命じれば昇るだろう」）と、魔術師シモンが空を飛んだという伝説の研究を挙げ、lacertos に 9 章とラクタンティウス 1 巻 21 章を挙げる（l. 18812–18833）。
- 読者への影響：小 — 読みの違いは文の区切りの乱れで、意味はほぼ同じ。
- 訳での扱い：訳注は付けない。opinor は皮肉（場所の違いで区別されるのだろう、と相手の理屈を仮に立てる）。prosecat は三つの目的語（genitalia、lacertos、gulam）に掛かる。「神殿の塔を飛び越える者」と「近所の屋根を飛び越える者」は、神殿で神がかりになって狂う者と、ただの狂人の対比として訳す。どの儀式かは補わない。
- 確かめた資料：Oehler 画像 0241（本文、校注 10〜18、注 h）、0242（注 h の続き）。OCR l. 27125–27132、27137–27149、27205–27209、27259–27262。Bindley OCR l. 5847–5848、5876–5907。Mayor OCR l. 18812–18833。

### 23.4–23.5 Edatur hic aliqui … tam se daemonem confitebitur de vero quam alibi dominum de falso（dominum／deum）
- 底本（Oehler）：Edatur hic aliqui ibidem sub tribunalibus vestris quem daemone agi constet. Iussus a quolibet Christiano loqui spiritus ille tam se daemonem confitebitur de vero quam alibi dominum de falso.
- ほかの読み：23.4 の qua ostendemus（それによって示す）の qua を、A・B・E・F・G、エアフルト写本は quam と読む（校注 p. 212 の 19）。aliqui ibidem sub は A・B・G、ウィーン写本、Bongars の写本、オクスフォード、Pithou の本。E・F、エアフルト写本は aliquis ibidem sub、λ は ibidem sub、D・a〜f と Havercamp は aliquis sub（校注 20）。λ は tribunali vestro（校注 21）。a・b は angi（校注 22）。G は loqui se spiritus（校注 23）。λ は in vero est quam alibi deum quod in falso est（校注 24）。dominum は A・B・G、Bongars の写本。D・E・F・a〜f、ウィーン写本、エアフルト写本、オクスフォードは deum（神と）（校注 25）。
- 採る校訂者：Oehler は aliqui を aliquis の代わりに使うのはテルトゥリアヌスの文体だとし、注 i に引く La Cerda は、この件をよく裁けるように法廷に持ち込むのだと注する（注 i）。Bindley の本文は Edatur hic aliquis sub tribunalibus vestris … quam alibi deum de falso（OCR l. 5889–5892）。Bindley は、テルトゥリアヌスが試しの実例を申し出ているとし、アタナシオス『受肉について』48 章、この書の 37・43 章、『魂の証言について』3 章、『スカプラへ』2 章、ラクタンティウス 5 巻 21 章、ユスティノス『第二弁明』6 章、オリゲネス『ケルソス駁論』1 巻 25 章などを挙げる（l. 5909–5919）。Mayor は悪霊を追い出す力について、マタイ七・二二、ルカ一〇・一七、使徒行伝三・六と、『オクタウィウス』27.6、キプリアヌス『デメトリアヌスへ』15 章などを挙げる（l. 18835–18900）。
- 読者への影響：小 — 「ほかの所では偽って神（主）と名乗る」という意味は同じ。
- 訳での扱い：訳注は付けない。底本の dominum（主）で訳す（本の AGENTS.md「底本の語を、異読と紛れる訳にしない」）。ただし、キリスト者の神を言う「主」と紛れないように、「よそでは偽って主人と名乗る」とするか「主と名乗る」とするかをメインが決める。de vero … de falso は「本当のこととして…偽って」。
- 確かめた資料：Oehler 画像 0242（本文、校注 19〜25、注 i）。OCR l. 27220–27224、27230–27234、27240–27241、27264–27274。Bindley OCR l. 5888–5892、5909–5919。Mayor OCR l. 18835–18900。

### 23.5 qui de deo pati existimantur … qui ructando curantur, qui anhelando praefantur（神がかりの予言者）
- 底本（Oehler）：Aeque producatur aliquis ex his qui de deo pati existimantur, qui aris inhalantes numen de nidore concipiunt, qui ructando curantur, qui anhelando praefantur.
- ほかの読み：ex his は A・B・F・G。D・E・a〜f は ex iis。G は Aeque を欠く（校注 p. 212 の 26）。D・E、エアフルト写本は existimatur（校注 27）。F は aris inhiantes、G は aris malentes、D は aeris malentes、a・b・c は aeris maleficum、λ は aris inhalantibus（校注 28）。D は de imbre（校注 29）。qui ructando curantur は A・B・D・E・F・G・λ・a〜e、アンブロジアーナ写本、ウィーン写本、エアフルト写本、オクスフォード（λ は ructuando、G は ruptando）。f は qui ructando conantur、Havercamp は qui ructando curvantur（校注 30）。praefantur は A・B・E・F・G・λ・d、エアフルト写本。D・a・b・c・e・f、アンブロジアーナ写本、(オクスフォード、ウィーン写本) は profantur（校注 31）。
- 採る校訂者：注 k に引く Heraldus は、神の力に内から動かされると装う予言者たちのことで、テルトゥリアヌスは、その動きが神ではなくダイモンから来ることを示しているとし、ウェルギリウス『アエネイス』のシビュラの箇所（Oehler は「Aen. VI, 97 sqq.」と刷る）を挙げる。Oehler は de の前置詞を、出どころと手段を言うものとする（注 k）。注 l に引く Heraldus は、祭壇のまわりで祈るところから arioli（占い師）の名があるとするイシドルスなどを挙げる。注 m に引く Heraldus は、げっぷをして癒されたようになり、喘いで神が吹き込むかのように語ると解し、アプレイウス『変身物語』8 巻 27 章の場面を引く。Oehler は、Rigaltius の conantur と Havercamp の curvantur をどちらも退け、Heraldus の解釈を正しいとする（神に満たされて苦しむ者が、げっぷで楽になり、喘ぎながら前口上を述べると、宿した神から解き放たれる。注 m）。Bindley の本文は qui ructando curantur, qui anhelando profantur（OCR l. 5894–5895）。Mayor は numen concipiunt に、ディドの concepit furias などの例を挙げる（l. 18902–18905）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。de deo pati は「神によって苦しむ（神がかりになる）と思われている者」で、existimantur（思われている）を落とさない。qui ructando curantur は Oehler の注 m に従い「げっぷをして楽になる者」、praefantur は「（喘ぎながら）予言を述べる」。aris inhalantes numen de nidore concipiunt は「祭壇に息を吸い込み、脂の煙から神を宿す」。
- 確かめた資料：Oehler 画像 0242（本文、校注 26〜31、注 k・l・m）。OCR l. 27224–27227、27234–27253、27276–27338。Bindley OCR l. 5893–5895。Mayor OCR l. 18902–18905。

### 23.6 Ista ipsa Virgo Caelestis … aliam diem morituris Socordio et Tenatio et Asclepiodoto sumministraturi … sanguinem fundite!（Oehler の推定と、命令の相手）
- 底本（Oehler）：Ista ipsa Virgo Caelestis pluviarum pollicitatrix, ipse iste Aesculapius medicinarum demonstrator, aliam diem morituris Socordio et Tenatio et Asclepiodoto sumministraturi, nisi se daemones confessi fuerint Christiano mentiri non audentes, ibidem illius Christiani procacissimi sanguinem fundite!
- ほかの読み：Virgo Caelestis を c は vis caelestis、D・a は vox caelestis、G は ut caelestium と読む（校注 p. 212 の 32）。F は sollicitatrix（校注 p. 213 の 33）。ipse iste は A・B・E、エアフルト写本。G は ipse ille、D・F・a〜f、ウィーン写本は iste ipse。λ は Aesculapius の代わりに Aescopius（＝Aescolapius）（校注 34）。aliam diem morituris は Oehler 自身の推定（ego）。写本と刊本は、alia die morituris が A・B・D・E・F・f、アンブロジアーナ写本、ウィーン写本、エアフルト写本、オクスフォード、エルノンとガンの写本、Bongars の写本、alia die moriturus が λ、alia demorituris が G・a、リエージュの写本、ヴァティカンの写本三つ、alias demorituris が b〜e（校注 35）。Socordio に対して、G は socrodio、エアフルト写本とアンブロジアーナ写本は secordio、b・c・d は scordii、e は socordi（校注 36）。Tenatio に対して、ウィーン写本は thenacio、f と Havercamp は Thanatio、λ は tanatio、A・B・D・G・a、エルノンとガンの写本、Bongars の写本、オクスフォードは denatio、F は denacio、アンブロジアーナ写本は denacō、e は denati、b・c・d は denatii（校注 37）。Bongars の写本、オクスフォード、アンブロジアーナ写本、ガンとエルノンの写本は asclepiadoto、G は asclepio docto、b〜e は Asclepiadoti（校注 38）。sumministraturi も Oehler 自身の推定（ego）。A・B・D・E・G・a、Bongars の写本、アンブロジアーナ写本は sumministratur、λ・b〜e、オクスフォード、エアフルト写本、ウィーン写本、ガンとエルノンの写本は subministrator（与える者）、f と Havercamp は vitae sumministrator（命を与える者）（校注 39）。G は ubi se（校注 40）。G は fundere（校注 41）。
- 採る校訂者：Oehler は、テルトゥリアヌスがどんな話を念頭に置いているかがまったく分からないので、ほとんど望みのない箇所を推定で直した、と注する。Oehler の読みでは、ソコルディウス、テナティウス、アスクレピオドトスという人々が、ダイモンであるカエレスティスとアエスクラピウスに死ぬほど苦しめられていたとき、悪霊を追い出すキリスト者が居合わせ、ダイモンたちは、自分がダイモンだと告白しなければ、この人々に死の日をもう一日延ばしてやると約束したが、キリスト者に偽ることはできなかった。そして著者はダイモンたちに向かって、「キリスト者を恐れるべきだと告白したダイモンたちよ、おまえたちの力が本当に神のものなら、祈りでおまえたちを追い払おうとしたこの厚かましいキリスト者の血を、すぐに流してみよ」と言う（注 p）。Bindley の本文は iste ipse Aesculapius medicinarum demonstrator alia die morituris Socordio et Thanatio et Asclepiodoto vitae sumministrator（f の読み）で、alia die morituris を「翌日にはまた死ぬだけの」と訳して注し（アントニヌス・ピウス伝などの alia die の例）、Ista ipsa … iste ipse … nisi には軽蔑が込められていると注する（OCR l. 5895–5939、5921–5926、5969–5972）。Bindley はカエレスティスとアエスクラピウスがカルタゴにとくにゆかりのある神だとし、アエスクラピウスの神殿がビュルサの丘にあったとする（l. 5921–5933、5964–5967）。Mayor の本文は Oehler の読み（aliam diem morituris … sumministraturi）で、aliam を alteram（もう一つの）の意味とし、Kellner（1870 年のドイツ語訳）が三つの名を薬草の名と指摘したこと（Scordium にあたる薬草 Teucrum Scordium を挙げる）、Asclepiodotus はアスクレピオスの贈り物、Thanatius はタナトス（死）からの名であることを紹介する（l. 18917–18927）。Oehler は Caelestis を、カルタゴのユノで、空気を表すとされたので雨を約束する神と呼ばれると注する（注 n）。
- 読者への影響：大 — 本文が Oehler の推定（aliam diem morituris、sumministraturi）に拠り、写本の読み（alia die morituris … subministrator／sumministratur）では「翌日には死ぬ者たちに薬を与える者アエスクラピウス」という皮肉になって、文の意味が変わる。また fundite（流せ）の相手を、Oehler はダイモンとし、Bindley の注の言い換えでは長官たちへの命令（「ダイモンだと告白しないなら、その厚かましいキリスト者の血を流せ」）と取れる。
- 訳での扱い：Oehler の推定は、本の AGENTS.md の 21.3 の Dudum と同じく、訳注は付けずに `// ` メモに書くのが既定の扱い。ただし、ここは推定が文全体の意味を決めるので、訳注を付けるかどうかをメインが決める。付けるなら注の案は「写本の読みが乱れた箇所で、編者の推定に従って訳した。」（26 字）。fundite の相手は、Oehler の注 p に従えば、著者がダイモンに呼びかける形になる。しかし文の前半（Edatur … producatur …）は長官たちへの申し出で、fundite も長官たちに向けた命令と読むのが自然でもある。本の AGENTS.md は Oehler の注をこの本の判断の拠り所にするが、どちらで訳すかはメインが決める。長官たちへの命令なら、本の AGENTS.md の「見てください」の形（尊敬語を使わない）にする。人名は名前の表に足す（「ソコルディウス」「テナティウス」「アスクレピオドトス」。底本の Tenatio のまま）。Virgo Caelestis は名前の表の「カエレスティス」に「処女神」「おとめ」を添えるかをメインが決める。Aesculapius は名前の表の「アエスクラピウス」。
- 確かめた資料：Oehler 画像 0242（本文の初め）、0243（本文、校注 32〜41、注 n・o・p）。OCR l. 27227、27256、27342–27346、27353–27369、27383–27482。Bindley OCR l. 5895–5939、5921–5933、5964–5972。Mayor OCR l. 18907–18927。

### 23.7 Magia aut aliqua eiusmodi fallacia fieri dicitis? Non dicetis, si …（Oehler の推定）
- 底本（Oehler）：Quid isto opere manifestius? Quid hac probatione fidelius? Simplicitas veritatis in medio est. Virtus illi sua adsistit; nihil suspicari licebit. Magia aut aliqua eiusmodi fallacia fieri dicitis? Non dicetis, si oculi vestri et aures permiserint vobis. Quid autem inici potest adversus id quod ostenditur nuda sinceritate?
- ほかの読み：G は illo（校注 p. 213 の 42）。G は nil（校注 43）。G・c は magica。F とウィーン写本は eiusmodi の代わりに huiusmodi（校注 44）。dicitis? Non dicetis si は Oehler 自身の読み（ego）。G は dicitis non dicetis. Sed、A・B・D・E・F、エアフルト写本、オクスフォード、Bongars の写本、ウィーン写本は dictis non dicetis si、λ・f と Havercamp は dicetis si（「…と言うでしょう、もし目と耳が許すなら」）、a〜e は Dictis non stetis si（校注 45）。G は praemiserunt（校注 46。a の読みは permiserint と刷られ、本文と同じ形に見える。末尾の「未確認」）。inici は A・F、(ウィーン写本)、Bongars の写本、エルノンとガンの写本。f は iniici、B・G、ヴァティカンの写本の一つは incipi、b は niti、D・E・a・c・d・e、オクスフォード、エアフルト写本は inniti（校注 47）。
- 採る校訂者：Oehler は aliqua を alia qualibet（ほかのどんな）の意味と注する（注 q）。Bindley の本文は Magia aut aliqua ejusmodi fallacia fieri dicetis, si oculi vestri et aures permiserint vobis. Quid autem inniti potest …（OCR l. 5942–5943）。
- 読者への影響：小 — 底本でも λ・f でも、「目と耳が許すなら、魔術だとは言えないはずだ」という意味は同じ（λ・f は反語）。
- 訳での扱い：訳注は付けない。底本は Oehler の推定なので、本の AGENTS.md の 21.3 と同じく `// ` メモに推定であることと写本の読み（dictis non dicetis si）を書く。Virtus illi sua adsistit の virtus は訳語表の「力」（真理に備わる力）。
- 確かめた資料：Oehler 画像 0243（本文、校注 42〜47、注 q）、0244（本文の初め）。OCR l. 27346–27352、27370–27381、27427–27454、27485–27488、27493。Bindley OCR l. 5939–5944。

### 23.8–23.9 Si altera parte vere dei sunt … nec divinitas deputanda est … aemulis suis（小さな異読）
- 底本（Oehler）：Si altera parte vere dei sunt, cur sese daemonia mentiuntur? An ut nobis obsequantur? Iam ergo subiecta est Christianis divinitas vestra, nec divinitas deputanda est quae subdita est homini et, si quid ad dedecus facit, aemulis suis.
- ほかの読み：F は veri dei、オクスフォードは vera dei、G は naturae dei（校注 p. 214 の 48）。F とウィーン写本は se daemonia、λ は sese daemonas（校注 49）。subiecta est Christianis は A・B・D・E・G・λ・d、Bongars の写本、エアフルト写本、オクスフォード、ウィーン写本。a・b・c・e・f は subiecta Christianis、F は suspecta est Christianis（校注 50）。λ と Havercamp は nec utique divinitas（校注 51）。F・a・b は ad decus（誉れのために）（校注 52）。λ は aemulo suo（単数）（校注 53）。
- 採る校訂者：Oehler は aemulis suis に『迫害のときの逃亡について』2 章の注を指す（注 r）。Bindley の本文は nec utique divinitas（OCR l. 5947）。Mayor は aemulis の例を挙げる（l. 18935–18937）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。altera parte … altera parte（23.8、23.10）は「一方で…他方で」の二つの場合分け（本当に神々なら／ダイモンなら）。aemulis suis は、ダイモンに敵対するキリスト者を指す。訳語表は aemulus を「敵対する」（神に張り合うダイモンの働き）とするが、ここは逆にダイモンから見た敵（キリスト者）なので、「自分の敵に」とするかをメインが決める。si quid ad dedecus facit は「しかも、恥になることをするなら、それも自分の敵に（従ってする）」の意味。
- 確かめた資料：Oehler 画像 0244（本文、校注 48〜53、注 r）。OCR l. 27493–27497、27514–27517、27543–27544。Bindley OCR l. 5944–5948。Mayor OCR l. 18935–18937。

### 23.10–23.11 ne se de maiestate deponerent … quos directo daemonas nostis … maiestate superiore sine dubio et timendorum（superiore／superiorum）
- 底本（Oehler）：Nam sicut illi qui dei habentur daemones se dicere noluissent, si vere dei essent, scilicet ne se de maiestate deponerent, ita et isti, quos directo daemonas nostis, non auderent alibi pro deis agere, si aliqui omnino dei essent, quorum nominibus utuntur. Vererentur enim abuti maiestate superiore sine dubio et timendorum.
- ほかの読み：ne se de maiestate deponerent は A・B・E・f、エアフルト写本、ウィーン写本。G は ne sedem maiestatis deponerent、D・a〜e と Havercamp は ne de maiestate se deponerent、F は ne de maiestate deponerentur。F とウィーン写本は vere の代わりに veri（校注 p. 214 の 54）。F・G、ウィーン写本は directe daemones nostis（G は noscis）（校注 55）。F とウィーン写本は verentur（校注 56）。A・B・d は maiestatem（校注 57）。superiore は A・B・D・E・F・a・b・c・e、エアフルト写本、オクスフォード、ウィーン写本。G・λ・f と Havercamp、Fr. Junius は superiorum（上にいる者たちの）、d は superiorem（校注 58）。
- 採る校訂者：注 s に引く Heraldus は、superiore は古い刊本と写本の読みだとしつつ、Junius の推定 maiestate superiorum sine dubio et timendorum（疑いなく上にいて、恐れられるべき者たちの威光）を退けないと言う。Bindley の本文は majestate superiorum sine dubio et timendorum（OCR l. 5954–5955）。Mayor は directo を「はっきりと、まっすぐに」の意味とし、『プラクセアス反論』27 章、『マルキオン反駁』の例を挙げる（l. 18939–18942）。
- 読者への影響：小 — 底本の superiore では、et timendorum（恐れられるべき者たちの）が何に掛かるかが見えにくいが、「本当の神々の、上にある威光を濫用するのを恐れるはず」という意味は同じ。
- 訳での扱い：訳注は付けない。底本の superiore で、「疑いなく上にあり、しかも恐れられるべき方々の威光」のように、timendorum を（本当にいるなら）神々を受ける属格として訳す。この取り方はこの一覧の観察。directo は Mayor に従い「はっきりと（ダイモンと知っている）」。non auderent … si … essent は事実に反する仮定なので、本の AGENTS.md どおり現在の推量で訳す。
- 確かめた資料：Oehler 画像 0244（本文、校注 54〜58、注 s）。OCR l. 27498–27503、27517–27522、27547–27554。Bindley OCR l. 5950–5955。Mayor OCR l. 18939–18942。

### 23.11 neque a daemoniis adfectaretur in confessione neque a deis negaretur（小さな異読）
- 底本（Oehler）：Adeo nulla est divinitas ista quam tenetis, quia, si esset, neque a daemoniis adfectaretur in confessione neque a deis negaretur.
- ほかの読み：D・a・e は Ideo（校注 p. 214 の 59）。F とウィーン写本は quam timetis（校注 60）。F とエアフルト写本は daemonibus（校注 61）。adfectaretur in confessione neque a deis は A・B・D・E・F・G・a・b・d・e、Bongars の写本、エアフルト写本、ウィーン写本、オクスフォード（B は effectaretur、F は nec、ウィーン写本は ne）。c は affectaretur, neque in confessione a diis、λ は adfectaretur neque in confessione neque a deis、f と Havercamp は adfectaretur neque a deis（校注 62）。
- 採る校訂者：Bindley の本文は neque a daemoniis affectaretur, neque a diis negaretur（in confessione がない。OCR l. 5956–5957）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。adfectaretur in confessione は「（ダイモンが神を名乗る）告白の中で、神性を求めて取ろうとする」。
- 確かめた資料：Oehler 画像 0244（本文、校注 59〜62）。OCR l. 27503–27505、27522–27526。Bindley OCR l. 5955–5957。

### 23.12 agnoscite unum genus esse, id est daemonas, verum utrobique. Iam deos quaerite（区切り）
- 底本（Oehler）：Cum ergo utraque pars concurrit in confessionem deos esse negans, agnoscite unum genus esse, id est daemonas, verum utrobique. Iam deos quaerite. Quos enim praesumpseratis, daemonas esse cognoscitis.
- ほかの読み：B とエアフルト写本は in confessione（校注 p. 214 の 63）。λ は esse se negans（校注 64）。G はいつものように daemones。λ は verum を欠く（校注 65）。F は deos iam（校注 66）。a は quos cum praesumpseratis daemonas、λ は quos enim praesumpseratis deos esse, iam daemonas（校注 67）。
- 採る校訂者：Oehler は verum を形容詞に取り、「二つを立てたうちで、本当の種類として残るのはダイモンだけだ。ダイモンを偽る神が神と考えられないのと同じく、神を偽るダイモンも神とは考えられない」と注する（注 t）。Bindley は daemonas. Verum utrobique jam deos quaerite と区切り、「どちらの仮定でも、新しい神々を探さなければならない」と注する（OCR l. 5959–5960、5974–5975）。Mayor の本文は Oehler と同じく utrobique. Iam deos quaerite と区切る（Mayor の本文の OCR l. 5064。語句の検索の出力で見た）。
- 読者への影響：中 — 底本の区切りでは「（両方とも）一つの種類、つまりダイモンであり、どちらの側でもそれが本当の姿だ。さあ、神々を探しなさい」、Bindley の区切りでは「ダイモンだ。しかし、どちらにせよ、今こそ神々を探しなさい」で、verum の働き（形容詞か接続詞か）が変わる。
- 訳での扱い：訳注は付けない（区切りの違いは読みの違いではない）。底本の区切りと Oehler の注 t に従い、verum utrobique を「どちらの側でも、それが本当の種類だ」と訳す。Iam deos quaerite は長官たちへの命令なので、本の AGENTS.md（8:1）に従い「〜してください」の形にし、尊敬語を使わない。
- 確かめた資料：Oehler 画像 0244（本文、校注 63〜67、注 t）。OCR l. 27505–27508、27527–27531、27537、27557–27560。Bindley OCR l. 5957–5961、5974–5975。

### 23.13 Eadem vero opera nostra … qui sit vere deus, et an ille et an unicus（小さな異読）
- 底本（Oehler）：Eadem vero opera nostra ab eisdem deis vestris non tantum hoc detegentibus quod neque ipsi dei sint neque ulli alii, etiam illud in continenti cognoscitis, qui sit vere deus, et an ille et an unicus quem Christiani profitemur, et an ita credendus colendusque, ut fides, ut disciplina disposita est Christianorum.
- ほかの読み：E とエアフルト写本は Et eadem（校注 p. 214 の 68）。c は sunt neque alii. Sed etiam（校注 69）。λ は cognoscetis、D・a・b は agnoscitis（校注 70）。A・B・D・G は quid sit vere deus、ウィーン写本は quod sit vere deus、F は qui sit verus deus（校注 71）。E とエアフルト写本は illic（校注 72）。F は profitentur（校注 p. 215 の 73）。λ は colendusque et fides、D は colendusque est ut fides（校注 74）。
- 採る校訂者：Oehler は in continenti を confestim（すぐに）の意味とし、『異端者への抗弁』5 章と法律家の用例を挙げる（注 u）。Mayor も同じ例を挙げる（l. 18949–18952）。Bindley の本文は底本と同じ（OCR l. 5961–5983）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。opera nostra は「わたしたちの働きによって」（奪格）で、ab eisdem deis vestris … detegentibus は「あなたがたの神々そのものが…暴くので」。in continenti は「すぐさま」。
- 確かめた資料：Oehler 画像 0244（本文、校注 68〜72、注 u）、0245（本文、校注 73・74）。OCR l. 27508–27511、27532–27534、27562–27567、27573–27574、27597。Bindley OCR l. 5961–5983。Mayor OCR l. 18949–18952。

### 23.14–23.15 Dicent ibidem: Et quis ille Christus cum sua fabula? si homo communis conditionis? …（だれの言葉か）
- 底本（Oehler）：Dicent ibidem: Et quis ille Christus cum sua fabula? si homo communis conditionis? si magus? si post mortem de sepulchro a discipulis subreptus? si nunc denique penes inferos? si non in caelis potius, et inde venturus cum totius mundi motu, cum orbis horrore, cum planctu omnium, sed non Christianorum, ut dei virtus et dei spiritus et sermo et sapientia et ratio et dei filius?
- ほかの読み：Dicent ibidem: et quis は Aβ・B・D・E・F・G、オクスフォード、ウィーン写本、エアフルト写本（Aφ は et quid）。a〜e は Dicent ibidem: ecquis、f は Dicant ibidem: ecquis、λ は dicentibus nobis idem et quis（わたしたちが同じことを言うときに）（校注 p. 215 の 75）。G は si magne、D・E、エアフルト写本は si magnus、オクスフォードは nec magus（校注 76）。λ と Havercamp は si post crucem（十字架の後に）（校注 77）。nunc を λ は hunc（校注 78）。λ と Havercamp は ocius（もっと速く）（校注 79）。cum orbis horrore は A・B・E・G・λ、ウィーン写本、エアフルト写本。F は cum horroris horrore、D・a〜f は cum horrore orbis（校注 80）。sed non を D・G・b・d、ゴルツェ写本は si non、a は non（校注 81）。λ は ut ratio, ut dei filius et dei omnia. Quodcunque（校注 82）。
- 採る校訂者：Oehler は ibidem に『迫害のときの逃亡について』1 章の注を指すだけ（注 v）。Bindley の本文は Dicent ibidem: Ecquis ille Christus cum sua fabula? si homo …, si magus, … et Dei Filius.（OCR l. 5985–5992）。Bindley は二つの取り方を示す。Ecquis なら「（ダイモンは）すぐにこう言うだろう、『そのキリストとは、話を抱えただれなのか』と。まるで普通の人であるかのように…」。et quis（写本の多く）なら、「ダイモンは同時に、キリストがだれであるかを告げるだろう。ただの人か否か…」（l. 6007–6012）。Mayor は magus に、キリストを魔術師とする非難の例（アルノビウス 1 巻 43 章、オリゲネス『ケルソス駁論』1 巻 6 章、ユスティノス『トリュフォンとの対話』69 章、ラクタンティウス 5 巻 3 章など）を挙げ、spiritus と ratio に 21 章を参照させる（l. 18954–19020）。
- 読者への影響：大 — 「」の中の問いがだれの言葉か（キリスト者を嘲る異教徒の言葉をダイモンが口にするのか、ダイモンがキリストの正体について問われて答えるのか）で、訳の形が変わる。底本の et quis … si … si … は、Bindley の二つ目の取り方（「キリストがだれか、ただの人か…、それとも天にいて来られる方か、をダイモンは告げるだろう」）に合う。
- 訳での扱い：訳注は付けない（読みの違いはあるが、底本の写本の大勢の読みで訳し、訳注が要るほど理解が変わらない）。底本の et quis と si … si … を、キリストの正体についての問い（ただの人か、魔術師か、…それとも天にいて来るはずの方か）にダイモンがその場で答える形で訳すか、嘲りの言葉として「」に入れるかはメインが決める。本の AGENTS.md は相手の言い分を「」に入れ常体にするが、ここは長官たちの言い分ではない。si non in caelis potius 以下は、キリスト者の信仰の内容なので、キリストの動作に尊敬語を使う（本の AGENTS.md）。fabula は訳語表の「作り話」だが、ここは「キリストの話（物語）」の意味の嘲りで、「作り話」とすると著者が認めたように読める。訳し分けるかはメインが決める。dei virtus et dei spiritus et sermo et sapientia et ratio は訳語表どおり（力・霊・言葉・知恵・理）。
- 確かめた資料：Oehler 画像 0245（本文、校注 75〜82、注 v）。OCR l. 27574–27581、27598–27613、27632–27633。Bindley OCR l. 5985–5992、6007–6012。Mayor OCR l. 18954–19020。

### 23.16 Quodcunque ridetis … ab aevo … Minoëm et Rhadamanthum … hoc esse sortitos（小さな異読）
- 底本（Oehler）：Quodcunque ridetis, rideant et illi vobiscum; negent Christum omnem ab aevo animam restituto corpore iudicaturum, dicant hoc pro tribunali, si forte, Minoëm et Rhadamanthum secundum consensum Platonis et poëtarum hoc esse sortitos; suae saltim ignominiae et damnationis notam refutent.
- ほかの読み：a・b は Quod cum、ウィーン写本は quotcunque。G は rideant の代わりに rident（校注 p. 215 の 83）。B は abebo、A・G は habebo、F は ab eo（校注 84）。λ は pro を欠く（校注 85）。λ・f と Havercamp は hoc を欠く（校注 86）。saltim は A・B・E、エアフルト写本（校注 87）。
- 採る校訂者：Bindley の本文は Quodcumque ridetis … Dicant hoc pro tribunali, si forte, Minoen et Rhadamanthum … esse sortitos（hoc がない。OCR l. 5992–5998）。Bindley は rideant et illi vobiscum を「（できるなら）あなたがたと一緒に笑ってみるがいい」、ab aevo を「世の初めから」（a primordio）、Dicant hoc pro tribunali を「ミノスとラダマンテュスが（そうであるなら）この裁きの役を割り当てられたと言い張るがいい」と注する（l. 6014–6022）。Oehler は si forte に『冠について』5 章の注を指す（注 w）。Mayor は pro tribunali を「法廷の座で」の決まった言い方とし、ミノスとラダマンテュスにラクタンティウス 3 巻 20 章、キケロ『トゥスクルム荘対談集』1 巻 41 章、ユスティノス『第一弁明』8 章を挙げる（l. 19022–19028）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。rideant、negent、dicant、refutent は、ダイモンへの挑む命令（「〜してみるがいい」）。ab aevo は「世の初めからの（すべての魂）」。pro tribunali は「（あなたがたの）法廷の場で」で、23.4 の sub tribunalibus vestris を受ける。si forte は「ことによると」。名前は名前の表に足す（「ミノス」「ラダマンテュス」はメインが決める。プラトンは『オクタウィウス』の表記に揃える）。
- 確かめた資料：Oehler 画像 0245（本文、校注 83〜87、注 w）。OCR l. 27581–27586、27614–27616、27636–27637。Bindley OCR l. 5992–5998、6014–6022。Mayor OCR l. 19022–19028。

### 23.17 Renuntiant se immundos spiritus esse … renuant ob malitiam praedamnatos se（Renuntiant／Renuntient／Renuant）
- 底本（Oehler）：Renuntiant se immundos spiritus esse, quod vel ex pabulis eorum, sanguine et fumo et putidis rogis pecorum, et impuratissimis linguis ipsorum vatum intellegi debuit: renuant ob malitiam praedamnatos se in eundem iudicii diem cum omnibus cultoribus et operationibus suis.
- ほかの読み：Renuntiant は A・B・D・E、ウィーン写本、オクスフォード、エアフルト写本。F・G・a〜e は Renuntient（接続法）、λ・f と Havercamp は Renuant（否んでみるがいい）（校注 p. 215 の 88）。A・B は putidis rogiis、ウィーン写本は putridis rogis（校注 89）。c は et impurissimis、Aβ は inpuratissimis（校注 90）。renuant に対して、Aβ とウィーン写本は rennuant、E の後の手は renudant、G は remittant。c・d は debuit の代わりに debuerit、F とウィーン写本は vatum の代わりに fatum（校注 91）。F は se eundem dicere、ウィーン写本は se eundem diem、G は se in eundem diem（校注 92）。et operationibus は A・B・D・E・G・a・c、ウィーン写本、エアフルト写本。F は欠く。b・d・e・f と Havercamp、Pamelius の写本のいくつか、ゴルツェ写本は et operatoribus（校注 93）。
- 採る校訂者：Bindley の本文は refutent: renuant se immundos spiritus esse … renuant ob malitiam praedamnatos se … cum omnibus cultoribus et operatoribus suis（OCR l. 5997–6004）。Bindley は operatoribus を宗教上の「信奉者」と注し、praedamnatos se in eundem iudicii diem にペテロの第二の手紙二・四とマタイ八・二九を挙げる（l. 6026–6029）。Oehler はこの箇所に注を付けない。Mayor は praedamnatos に 27 章の praedamnatione を参照させる（l. 19043）。
- 読者への影響：中 — 底本の直説法 Renuntiant なら、命令（rideant … refutent）の列から離れて、「彼らは（実際に）自分が汚れた霊であると明かします」という事実の言明になり、続く renuant（否んでみるがいい）が挑む命令になる。λ・f の Renuant なら「汚れた霊であることを否んでみるがいい」と命令が続く。
- 訳での扱い：訳注は付けない。底本の直説法で、Renuntiant を「明かします」「告げています」と事実として訳し、renuant 以下を命令（「…否んでみるがいい」）として訳す。この取り方はこの一覧の観察で、Oehler の注はない。renuntiare を「否認する」の意味に取ると、直説法と合わず、次の intellegi debuit（分かるはずだった）とも合わない。operationibus は「その働き（を行う者たち）とともに」とするか、「働き」の抽象のまま訳すかをメインが決める。ペテロの第二の手紙二・四（口語訳「さばきの時まで暗やみの穴に閉じ込めておかれた」）とマタイ八・二九（「まだその時ではないのに」）は暗示で、引用ではない。immundi spiritus は、口語訳ではルカ一一・二四、使徒行伝五・一六などが「汚れた霊」、マルコ一・二三などが「けがれた霊」と書く。どちらにするかはメインが決める。
- 確かめた資料：Oehler 画像 0245（本文、校注 88〜93）。OCR l. 27586–27590、27616–27622。Bindley OCR l. 5997–6004、6026–6029。Mayor OCR l. 19043。`node tools/bible.js 2Pet.2.4 Matt.8.29`、`--find 汚れた霊`、`--find けがれた霊`。

### 23.18–23.19 de nominatione Christi … Christum timentes in deo et deum in Christo … ignis illius correpti（キリストの名による悪霊払い）
- 底本（Oehler）：Atquin omnis haec nostra in illos dominatio et potestas de nominatione Christi valet et de commemoratione eorum quae sibi a deo per arbitrum Christum imminentia exspectant. Christum timentes in deo et deum in Christo subiciuntur servis dei et Christi. Ita de contactu deque afflatu nostro, contemplatione et repraesentatione ignis illius correpti etiam de corporibus nostro imperio excedunt inviti et dolentes et vobis praesentibus erubescentes.
- ほかの読み：Atquin は A・B・D・E・G・d、エアフルト写本、ウィーン写本。F・a・b・c・e・f と Havercamp は Atqui（校注 p. 215 の 94）。G・c・d は in illis（校注 95）。de nominatione は A・B・F・c〜f、ウィーン写本、オクスフォード。E とエアフルト写本は denominatione、λ は de dominatione、a は dominatione、b とゴルツェ写本は de nomine（校注 95b）。a は et de comminatione（脅しによって）、G は et commemoratione。F は eorum の代わりに ipsorum（校注 96）。F の最初の手は proiciuntur、後の手は proicientur（校注 97）。エアフルト写本は correpti etiam、G は correcti etiam（校注 p. 216 の 98）。
- 採る校訂者：注 x に引く Rigaltius は、エイレナイオス 2 巻（「主の名にすべてが服従する。ユダヤ人もこの呼び求めでダイモンを追い払う」）を挙げる。Oehler はアルノビウス 1 巻 46 章（キリストの名を聞くと悪い霊が逃げ、予言者が黙る）などを加える（注 x）。Bindley は de nominatione Christi にマタイ七・二二、ルカ九・四九、一〇・一七を挙げ、de contactu deque afflatu を悪霊払いの儀式の動作（手を置くこと、息を吹きかけること）、repraesentatione ignis illius を悪霊払いの言葉が霊たちの将来の罰に触れることとし、マタイ二五・四一（悪魔とその使いたちのために用意された永遠の火）を挙げる（OCR l. 6004–6006、6030、6060–6069）。Mayor は afflatu に息を吹きかける儀式の資料を挙げ、ラクタンティウス 2 巻 15 章 3 節（ダイモンはキリスト者の言葉に打たれて、自分がダイモンであることを告白し、神殿で拝まれている名を名乗る）を引く（l. 19045–19090）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。de nominatione Christi は「キリストの名を呼ぶことによって」。arbitrum Christum は「裁き手であるキリスト」（arbiter は訳語表の iudex「裁き手」と原語が違うので、「審判者」などと訳し分けるかはメインが決める）。Christum timentes in deo et deum in Christo は「神のうちにキリストを、キリストのうちに神を恐れて」。ignis illius は「あの火」で、マタイ二五・四一の「永遠の火」の暗示（口語訳「悪魔とその使たちとのために用意されている永遠の火」）。引用ではないので『』に入れない。
- 確かめた資料：Oehler 画像 0245（本文、校注 94〜97、注 x）、0246（本文、校注 98）。OCR l. 27590–27594、27622–27626、27638–27652、27661–27663、27682。Bindley OCR l. 6004–6006、6030、6035–6040、6060–6069。Mayor OCR l. 19045–19090。`node tools/bible.js Matt.7.22 Luke.10.17 Matt.25.41`。

### 23.20 Magis fides proxima est adversus semetipsos confitentes quam pro semetipsis negantes（proxima／prona）
- 底本（Oehler）：Credite illis, cum verum de se loquuntur, qui mentientibus creditis. Nemo ad suum dedecus mentitur, quin potius ad honorem. Magis fides proxima est adversus semetipsos confitentes quam pro semetipsis negantes.
- ほかの読み：D・a・c・e は verum を欠く（校注 p. 216 の 99）。λ は sed potius（校注 p. 216 の 1）。proxima は A・B・D・E・F・G・f、Bongars の写本、ウィーン写本、エアフルト写本、Pamelius の写本。a〜e は prona（向かいやすい）。c は adversus の代わりに in adversus（校注 2）。
- 採る校訂者：Oehler は magis proxima を manifestior, praesentior, promptior（いっそう明らかな、手近な）の意味とし、『偶像崇拝について』11 章の magis proximum praeiudicium、『諸国民へ』2 巻 12 章、『オクタウィウス』19 章の proximius などを挙げる（注 y）。Bindley の本文は Magis fides prona est adversus … negantes で、本文が正しければ構文はきわめて硬いとし、Woodham が adversus を erga（〜に対して）の意味に取り、「自分が悪いと告白する者のほうが、否む者より信じられやすい」と解したことを紹介する（OCR l. 6043–6044、6071–6076）。
- 読者への影響：小 — 「自分に不利なことを告白する者は、自分に有利に否む者より信じられる」という意味は変わらない。
- 訳での扱い：訳注は付けない。adversus semetipsos（自分に不利に）と pro semetipsis（自分のために）の対を残す。magis proxima は Oehler の注 y に従い「いっそう確かな」の意味で取る。
- 確かめた資料：Oehler 画像 0246（本文、校注 99・1・2、注 y）。OCR l. 27663–27666、27685–27687、27718–27733。Bindley OCR l. 6041–6044、6071–6076。

### 23.21 quam plurimum illis credendo in Christo domino credimus（quam／quia）
- 底本（Oehler）：Haec denique testimonia deorum vestrorum Christianos facere consuerunt; quam plurimum illis credendo in Christo domino credimus. Ipsi litterarum nostrarum fidem accendunt, ipsi spei nostrae fidentiam aedificant.
- ほかの読み：consuerunt は A・B・E・f、エアフルト写本。D・F・G・a〜e、ウィーン写本は consueverunt（校注 p. 216 の 3）。quam は A・B・D・E・F・G、エアフルト写本。a〜f と Havercamp、(ウィーン写本、オクスフォード) は quia（校注 4）。in Christo domino credimus は A・B・D・E・G・a・b・d・e・f、エアフルト写本、オクスフォード、ウィーン写本。F と Fulvius Ursinus は in Christum dominum credimus、c は Christo domino credimus、λ は per Christum et in deum credimus（キリストによって、また神を信じる）（校注 5）。fidentiam は A・B・D・F・G・d・e・f、ウィーン写本、Pamelius の写本四つ。E・a・b・c、エアフルト写本は fiduciam（校注 6）。
- 採る校訂者：Oehler は fidentiam aedificant に『殉教者たちへ』3 章の注を指す（注 z）。Bindley の本文は quia plurimum illis credendo Christo domino credimus（OCR l. 6046）。
- 読者への影響：小 — 「神々の証言が人をキリスト者にする」という論旨は変わらない。底本の quam plurimum なら「その証言をできるかぎり信じることで、主キリストを信じる」、quia なら「彼らを大いに信じることで主キリストを信じるのだから」と理由になる。
- 訳での扱い：訳注は付けない。底本の quam plurimum を「できるかぎり」「大いに」の強めとして訳し、理由の「から」にしない。in Christo domino credimus は「主キリストにあって信じる」とするか「主キリストを信じる」とするかをメインが決める（in＋奪格で、F の in Christum の対格と違う）。litterarum nostrarum は「わたしたちの書物」（訳語表の litterae）。
- 確かめた資料：Oehler 画像 0246（本文、校注 3〜6、注 z）。OCR l. 27667–27670、27687–27700、27736–27737。Bindley OCR l. 6044–6048。

### 23.22 Colitis illos … vel ne a vobis quandoque a Christianis fugentur（あなたがた自身がキリスト者になって）
- 底本（Oehler）：Colitis illos, quod sciam, etiam de sanguine Christianorum. Nollent itaque vos tam fructuosos, tam officiosos sibi amittere, vel ne a vobis quandoque a Christianis fugentur, si illis sub Christiano, volente vobis veritatem probare, mentiri liceret.
- ほかの読み：c・d は At colitis（校注 p. 216 の 7）。a は quod scitis esse de sanguine、G は quod scientia etiam de sanguine、F は qui sitiunt sanguinem（血に渇く者たち）（校注 8）。λ は ubique（校注 9）。D・a は admittere。F は tam officiosos の代わりに quam officiosos（校注 10）。quandoque a Christianis は A・B・F・G、ウィーン写本。E・f、エアフルト写本は quandoque an Christianis、D・a〜e は quandoque Christianis（校注 11）。Fulvius Ursinus は fugarentur（校注 12）。F は non liceret（校注 13）。
- 採る校訂者：Oehler は、文の意味を「もし、悪霊を追い出してあなたがたに真理を証明しようとするキリスト者の前で、ダイモンに偽ることが許されるなら、ダイモンはきっと、こんなに実入りのよい、こんなに尽くしてくれるあなたがたを失わないように、いやそれどころか、いつかキリスト者となったあなたがた自身によって追い払われないように振る舞うだろう」と言い換える（注 zz）。Bindley の本文は At colitis illos … vel ne a vobis quandoque Christianis fugentur（OCR l. 6048–6052）。Mayor は quod sciam を「わたしの知るかぎり」の言い方とし、25 章、『諸国民へ』1 巻 7 章などの例を挙げる（l. 19092–19095）。
- 読者への影響：中 — a vobis quandoque a Christianis を、Oehler のように「いつかキリスト者となったあなたがた自身によって」と取るか、「あなたがたのもとで、いつかキリスト者によって」と取るかで、訳文が変わる。
- 訳での扱い：訳注は付けない。Oehler の注 zz に従い、a vobis quandoque a Christianis を「いつかキリスト者となったあなたがた自身によって」の意味で取る（本の AGENTS.md は Oehler の注を判断の拠り所にする）。文の構造は、Nollent … amittere, vel ne … fugentur が帰結、si … liceret が条件の、事実に反する仮定なので、本の AGENTS.md どおり現在の推量で訳す。etiam de sanguine Christianorum は「キリスト者の血によってさえ（拝む）」で、キリスト者の処刑がダイモンへの供え物になることを言う。quod sciam は「わたしの知るかぎり」。
- 確かめた資料：Oehler 画像 0246（本文、校注 7〜13、注 zz）。OCR l. 27670–27674、27700–27707、27743–27749。Bindley OCR l. 6048–6052。Mayor OCR l. 19092–19095。

---

## 未確認

- 23.6 の Tenatio は、校注 37 に挙がる写本・刊本のどれもこの形ではない（ウィーン写本 thenacio、f Thanatio、λ tanatio、多くは denatio）。校注に挙がらない E とエアフルト写本の読みか、Oehler 自身の綴りかは、校注で確かめられなかった（ego の印はない）。Socordio も、校注 36 に挙がらない写本の読みとみられるが、どの写本かは記されていない。
- 23.14 の si post mortem de sepulchro a discipulis subreptus（死後に弟子たちに墓から盗み出された）は、マタイ二八・一三（口語訳「弟子たちが夜中にきて、われわれの寝ている間に彼を盗んだ」）の言い分に近い。これはこの一覧の観察で、この箇所にマタイ二八章を挙げる資料は見ていない。
- 23.15 の cum planctu omnium, sed non Christianorum（すべての者が嘆く。ただしキリスト者は嘆かない）は、マタイ二四・三〇（口語訳「地のすべての民族は嘆き」）、黙示録一・七（「地上の諸族はみな、彼のゆえに胸を打って嘆くであろう」）に近く、dei virtus … et sapientia は第一コリント一・二四（「神の力、神の知恵たるキリスト」）に近い。どれもこの一覧の観察で、Oehler・Bindley・Mayor の注にこれらの聖書の箇所を挙げるものは見ていない（Mayor は spiritus と ratio に 21 章を参照させるだけ）。七十人訳・新約のギリシア語本文とも照らしていない。
- 22.11 の quo supra diximus が 22.8 を受けるという取り方は、この一覧の観察。『諸国民へ』の並行箇所に亀の話があるかは調べていない。
- 23.3 の qui sacras turres pervolat を、Bindley はレウカスの岬の儀式とし、Mayor は魔術師シモンの飛行の伝説の研究を挙げる。どちらの説がこの箇所に合うかを判断する資料（原典）は見ていない。
- 22.12 の注 p が挙げるタティアノス『ギリシア人への演説』の章（Oehler は cap. 31 と刷る）が、ふつう知られる章分けのどこに当たるかは確かめていない。
- Bindley の本文（OCR）は画像で確かめていない。とくに 22.1 の「Sciant」（Oehler の校注には Sciunt の異読として出ない）は OCR の崩れかもしれない。
- 23.7 の校注 p. 213 の 46 は「permiserint a.」と刷られ（拡大して確かめた）、本文の permiserint と同じ形に見える。a の読みが何か（刷りの誤りか）は確かめられなかった。
- 23.5 の注 k が挙げる『アエネイス』の箇所（Oehler は「VI, 97 sqq.」と刷る）が、引かれた詩行（At Phoebi nondum patiens …）の行番号として正しいかは、原典で確かめていない。
- Mayor の本文で、23.12 の区切りが Oehler と同じであることは、語句の検索の出力（l. 5064）で見ただけで、Mayor のページ画像では確かめていない。
