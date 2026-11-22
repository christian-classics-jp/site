# chapter-04-05 の論点（4-5）

略号と資料の所在は [README.md](README.md)。底本の画像は `cache/archive.org/itinerahierosoly00geye/page/`：`n96_w1600.jpg`（p. 41。4.1〜4.4 の途中）、`n97_w1600.jpg`（p. 42。4.8 の途中まで）、`n98_w1600.jpg`（p. 43。5.5 の途中まで）、`n99_w1600.jpg`（p. 44。5.10 の途中まで）、`n100_w1600.jpg`（p. 45。5.12 の終わりまで）。聖書の欄と校注は各ページの下部（`node tools/image.js crop <画像> pct:0,66,100,30 <出力先> --scale 1.3`、p. 45 は `pct:0,55,100,42`）で読んだ。OCR は `cache/archive.org/itinerahierosoly00geye/itinerahierosoly00geye_djvu.txt` の l. 4981–5190。聖書の欄と校注は、p. 41 が l. 5005–5013、p. 42 が l. 5053–5060、p. 43 が l. 5102–5107、p. 44 が l. 5147–5159、p. 45 が l. 5204–5206（4〜5 章にかかるのは校注 5 と 15 だけ）。P.D. の並行箇所は p. 120, 28–33 と p. 121, 1–9（OCR l. 8571–8593、画像 `n175_w1600.jpg`・`n176_w1600.jpg`）。Bernard のラテン語本文は l. 11370–11590、英訳の脚注は l. 8283–8370。

---

### 4.1 in alio monte … qui locus appellatur in Choreb（ホレブを神の山の隣の山とする）
- 底本（Geyer）：coepimus iam et descendere ab ipsa summitate montis Dei … in alio monte, qui ei periunctus est, qui locus appellatur in Choreb（神の山の頂から、それに続く別の山、ホレブと呼ばれる所へ下り始めた）。校注はない。
- ほかの読み：なし。P.D. も In monte uero Choreb, qui eidem monti coniunctus est と、ホレブを神の山（シナイ）に続く別の山とする（P.D. p. 120, 28。画像で確かめた）。
- 聖書：口語訳出エジプト三・一 は「神の山ホレブ」で、聖書ではホレブが神の山そのものの名。エゲリアの案内人たちは、シナイの頂の隣の峰をホレブとし、そこでエリヤの話（列王紀上一九章）を示す。
- 読者への影響：小 — 本文の読みは分かれない。聖書を知る読者は「ホレブ＝神の山」と思うので、別の山とされていることに戸惑うかもしれないが、原文がそう書いている。
- 訳での扱い：訳注は付けない。ホレブの表記は名前の表どおり。`// ` メモは任意（聖書ではホレブが神の山の名であること）。
- 確かめた資料：`n96_w1600.jpg`（本文）、`n175_w1600.jpg`（p. 120, 28）。OCR l. 4981–4984、8571。`node tools/bible.js Exod.3.1`（名前の表で確かめ済み）。

### 4.2 quid tu hic Helias?（列王紀上一九・九。七十人訳と同じ形）
- 底本（Geyer）：ubi ei locutus est Deus dicens: quid tu hic Helias? sicut scriptum est in libris regnorum。聖書の欄は p. 41 の「16 III Reg. 19, 9」（cf. なし。そのままの引用とみている）。
- 聖書：七十人訳（第三列王記一九・九）は Τί σὺ ἐνταῦθα, Ἠλειού;（「エリヤよ、あなたはここで何を」。Swete l. 69050）で、原文の quid tu hic Helias は語順まで一致する。口語訳は「エリヤよ、あなたはここで何をしているのか」。libri regnorum は七十人訳の書名（列王記を「王国の書」の第一〜第四とする）で、III Reg. は口語訳の列王紀上。
- ほかの点：同じ節の qua fugit a facie Achab regis（アハブ王の前から逃げた所）について、口語訳列王紀上一九・二〜三 では、エリヤが逃げたのはイゼベルの使いの脅しによる。P.D. は spelunca, in qua latuit sanctus Helias sub Achab（「アハブの時代に」隠れたほら穴）と書く（p. 120, 29–30）。Geyer の欄も校注もこの点に何も言わない。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。聖句は『』に入れて口語訳の文言に揃える（『エリヤよ、あなたはここで何をしているのか』）。出典は（列王紀上一九・九）。in libris regnorum は「列王紀に書いてあるとおり」でよい。a facie Achab regis は原文どおり「アハブ王を逃れて」と訳し、`// ` メモは任意。
- 確かめた資料：`n96_w1600.jpg`（本文、聖書の欄）、`n175_w1600.jpg`（p. 120, 29–30）。OCR l. 4984–4988、5005、8572–8573。Swete I l. 69044–69050。`node tools/bible.js 1Kgs.19.9 1Kgs.19.2-3`。

### 4.3 id enim nobis uel maxime † ea desideraueram semper（底本が崩れを示す箇所）
- 底本（Geyer）：Fecimus ergo et ibi oblationem … et lectus est ipse locus de libro regnorum: id enim nobis uel maxime † ea desideraueram semper, ut ubicumque uenissemus, semper ipse locus de libro legeretur。† は Geyer が本文に刷る記号で、校注は「明らかに崩れている箇所」と言う（p. 41 校注 23：locum aperte corruptum）。校注に A の別の読みはないので、本文の語の並びは A のまま。
- ほかの読み（どれも推定）：
  - Gamurrini は uel maxime desiderii fuerat と改める（「とりわけ願いであった」。p. 41 校注 23）。同じ言い方は 7.1 の desiderii ergo fuit, ut にある（Geyer の索引 desiderii fuit, ut 46, 26。l. 27008）。
  - Geyer は uel maxime consuetudinis erat semper, ut ubicumque ad ea loca, quae desideraueram, uenissemus, semper … を試みる（「いつもとりわけ習わしであった、わたしが願っていた場所に来たときはどこでも、いつも…」。同じ校注。本文には入れない）。10.7 に Id enim nobis semper consuetudinis erat, ut ubicumque ad loca desiderata accedere ualebamus, primum ibi fieret oratio, deinde legeretur lectio ipsa de codice …（p. 52, 3–5）という、ほぼ同じ形の文がある（Geyer の校注はこの箇所を挙げていない）。
  - Bernard は A のまま刷る（l. 11395–11397。語に注の記号が付くが OCR が崩れて読めない）。
- 読者への影響：中 — 崩れているのは「願いだった」か「習わしだった」かの部分で、どの読みでも「行く先々で、その場所にかかわる箇所を聖書から読んでもらうのが（わたしたちの）いつもの願い／習わしだった」という大意は同じ。10.7 で同じことが「習わし」として説明される。
- 訳での扱い：本の AGENTS.md に † の決まりがまだない（メインで決める）。訳は大意で訳し（A に残る desideraueram を生かして「わたしがいつも願っていたのは、どこへ行っても…読んでもらうことでした」の方向）、`// ` メモに底本が崩れを示していることと二つの推定を書く。訳注は、大意が変わらないので付けないのを勧める。付けるなら注の案：「原文が崩れているので、大意を訳した。」（17 字）
- 確かめた資料：`n96_w1600.jpg`（本文 23 行の †、校注 23）。OCR l. 4994–4997、5009–5013、5499–5502、27008。Bernard l. 11395–11397。

### 4.4 アロンと七十人の長老が立った所（出エジプト二四・九〜一四）／ac sic（A は hac）
- 底本（Geyer）：ad eum locum, ubi steterat sanctus Aaron cum septuaginta senioribus, cum sanctus Moyses acciperet a Domino legem ad filios Israhel。聖書の欄は p. 41 の「27 cf. Exod. 24, 9—14」。節の終わりの ac sic facta oratione の ac は、A が hac と書いて h に線を引いて消したもの（p. 42 校注 4：hac sed h lineola perducta deleto A）。
- 聖書：口語訳出エジプト二四・一四 で、モーセは長老たちに「ここで待っていなさい。見よ、アロンとホルとが、あなたがたと共にいる」と言って山に登る。原文はこの場面の要約。
- ほかの読み：P.D. は locus, ubi stetit sanctus Aaron cum septuaginta senioribus. In eo loco tectum non est, petra tamen ingens per girum habens planitiem supra se, ubi illi steterunt; in medio autem lapideum altarium est と、底本と同じ内容を縮めて書く（p. 120, 31–33、p. 121, 1–2。画像で確かめた）。Bernard は hac sic（l. 11418）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。出典は欄に従い（出エジプト二四・九〜一四）。de libro Moysi の locus は「（書物の）箇所」（3.6 と同じ）。
- 確かめた資料：`n96_w1600.jpg`（聖書の欄）、`n97_w1600.jpg`（校注 4）、`n175_w1600.jpg`・`n176_w1600.jpg`。OCR l. 4999–5005、5018–5022、5055、8575–8585。`node tools/bible.js Exod.24.14`。

### 4.5 qua intraueramus（A は quia）／ad uallis … caput（A は aut）／monti Dei（A は montis）
- 底本（Geyer）：sed non ipsa parte exire habebamus, qua intraueramus … et sic ad uallis illius, quam superius dixi, caput exire, id est huius uallis, quae subiacet monti Dei。
- ほかの読み：
  - qua は Gamurrini の改めで、A は quia（p. 42 校注 9）。A のままでは「入って来たので」となって文がつながらない。
  - ad は Gamurrini の第二版に従う Geyer の改めで、A は aut（校注 11）。Bernard のラテン語本文も ad、脚注に A の ant（aut の OCR 崩れ）を記す（l. 11435、11475）。
  - monti は Gamurrini の改めで、A は montis（校注 12）。Bernard は A のまま montis（l. 11439）。P.D. は uallis, quae monti subiacet（p. 121, 2–3。画像で確かめた）。5.8 にも quam dixi subiacere monti Dei とある。
- 読者への影響：小 — どれも語尾や一字の違いで、「入って来た側からは出ず、神の山のふもとの谷の奥へ出る」という意味は変わらない。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n97_w1600.jpg`（校注 9・11・12）、`n176_w1600.jpg`（p. 121, 2–3）。OCR l. 5026–5030、5055–5058、8585–8586。Bernard l. 11434–11439、11475。

### 4.6 qui rubus usque in hodie uiuet et mittet uirgultas（-et の形は現在）
- 底本（Geyer）：ecclesia in eo loco, ubi est rubus; qui rubus usque in hodie uiuet et mittet uirgultas。校注はない。
- ほかの読み：P.D. は qui rubus usque hodie uiuit et mittit uirgulta と、古典の現在形に直して書く（p. 121, 4–5。画像で確かめた）。Bernard は vivet, mittet（l. 11446–11447）。
- 語法：Geyer の索引は、第三活用の三人称単数現在が -et で終わる例（accedet、benedicet、mittet 72, 22 など）を「珍しい活用形」として挙げる（l. 26771–26790）。この箇所は、mittere の項（arbor mittet uirgultas 42, 16 = P.D. 121, 4。l. 28132–28133）、uiuere の項（rubus usque in hodie uiuet 42, 16。l. 29715–29716）、uirgultum の項（l. 29708–29709）に挙げる。どれも未来の意味とはしていない。qui rubus と名詞を関係詞の後で繰り返す形も、索引が qui の項で挙げる（l. 28844–28846）。
- 読者への影響：小 — 未来形と取ると「生き続け、若枝を出すだろう」になるが、ここは「今も生きていて、若枝を出している」。
- 訳での扱い：訳注・メモとも付けない。現在で訳す。
- 確かめた資料：`n97_w1600.jpg`（本文 15〜16 行）、`n176_w1600.jpg`（p. 121, 4–5）。OCR l. 5034–5036、8587–8589、26771–26790、28132–28133、28844–28846、29708–29716。Bernard l. 11446–11447。

### 4.7 Hic est autem rubus（est は Geyer の補い）
- 底本（Geyer）：Hic est autem rubus, quem superius dixi, de quo locutus est Dominus Moysi in igne。est は Geyer の補い（p. 42 校注 17：est ipse addidi probante Bernardo）。本文に山括弧はない。
- ほかの読み：A は est を欠き、Hic autem rubus … となる（「さて、このしばは、…」と文の主語だけが立ち、述語がない）。Bernard のラテン語本文は est を刷る（l. 11449）。
- 読者への影響：小 — 補いがなくても「これが先に述べたしばで…」という意味に読める。
- 訳での扱い：訳注は付けない。本の AGENTS.md は山括弧の補いだけを決めているので、括弧なしの補いをどう扱うかはメインで決める（意味は補いに頼らないので、`// ` メモも任意）。
- 確かめた資料：`n97_w1600.jpg`（本文 17 行、校注 17）。OCR l. 5037、5058–5059。Bernard l. 11449。

### 4.8・5.2 solue corrigiam calciamenti tui（出エジプト三・五）
- 底本（Geyer）：4.8 quando ei dixit Deus: solue corrigiam calciamenti tui et cetera。5.2 quando ei dixit Deus: solue corrigiam calciamenti tui, locus enim, in quo stas, terra sancta est。聖書の欄は p. 42 の「23 Exod. 3, 5」、p. 43 の「13 Exod. 3, 5」（どちらも cf. なし）。Geyer の索引は corrigiam soluere 42, 23. 43, 13 に「cf. Exod. 3, 5」と添える（l. 26852–26853）。
- 聖書：七十人訳は λῦσαι τὸ ὑπόδημα ἐκ τῶν ποδῶν σου, ὁ γὰρ τόπος ἐν ᾧ σὺ ἕστηκας γῆ ἁγία ἐστίν（「足からはきものを解け。あなたが立っている場所は聖なる地だから」。Swete l. 11327–11328）。原文の corrigiam calciamenti（はきもののひも）は、七十人訳の「足からはきものを」と形が違う。後半の locus enim, in quo stas, terra sancta est は七十人訳の出エジプト三・五 と合い、ヨシュア記五・一五（ὁ γὰρ τόπος ἐφ᾽ ᾧ νῦν ἕστηκας ἅγιός ἐστιν。Swete l. 41505）の「聖なる」とは違う。口語訳出エジプト三・五 は「足からくつを脱ぎなさい。あなたが立っているその場所は聖なる地だからである」。
- 読者への影響：小 — どちらでも「くつを脱げ」という命令。
- 訳での扱い：訳注は付けない。出典は（出エジプト三・五）。直接の引用なので『』に入れる。口語訳の「足からくつを脱ぎなさい」に揃えるか、原文の「くつのひもを解きなさい」を残すかはメインで決める（ルートの AGENTS.md の「原文が聖句をそのまま引いているところは、その訳の文言に揃える」と、原文が別の形で引いていることの兼ね合い）。後半の文言は口語訳の「あなたが立っているその場所は聖なる地だからである」に揃えられる。4.8 の et cetera は原文が引用を略したもので、「云々」などで残す。
- 確かめた資料：`n97_w1600.jpg`（聖書の欄）、`n98_w1600.jpg`（聖書の欄）。OCR l. 5045–5046、5053、5079–5082、5102、26852–26853。Swete I l. 11327–11328、41505。`node tools/bible.js Exod.3.5`。

### 4.8 gustauimus nobis loco（A は locum）
- 底本（Geyer）：et sic, quia sera erat, gustauimus nobis loco in horto ante rubum cum sanctis ipsis。loco は Geyer の改めで、A は locum（p. 42 校注 29：locum A loco ipse scripsi, cf. Krit. Beitr. p. 12, probante Bernardo）。
- ほかの読み：
  - Gamurrini は gustauimus aliquantulum（「少し食べた」）と推定した（同じ校注）。
  - Bernard は A のまま locum と刷り、脚注で、Gamurrini は本文の崩れを疑うが、Geyer に従って locum を副詞として読むのがよいと言う（l. 11464、11477–11480）。
- 語法：Geyer の索引は loco = ibi（「そこで」）としてこの箇所を挙げ（l. 27990）、gustare = prandere（食事をする）とする（l. 27509–27510）。nobis は、索引の「再帰代名詞を伴う動詞」の項に gustauimus nobis in horto 42, 29 とある（l. 29664–29665）。
- 読者への影響：小 — どの読みでも「（日が暮れたので）庭のしばの前で、聖なる人たちと食事をした」。
- 訳での扱い：訳注・メモとも付けない。gustare は「味わう」でなく「食事をとる」。loco は「その場で」程度で、訳さなくてもよい。
- 確かめた資料：`n97_w1600.jpg`（本文 29 行、校注 29）。OCR l. 5051、5059–5060、27509–27510、27990、29664–29665。Bernard l. 11464、11477–11480。Geyer の Kritische Beiträge p. 12 は cache にない。

### 5.4 ad quam petram（A は quem）／habentes choros と板を砕いた岩（出エジプト三二・一七〜一九）
- 底本（Geyer）：de quo loco sanctus Moyses uidit filios Israhel habentes choros his diebus, qua fecerant uitulum. Ostenderunt etiam petram ingentem in ipso loco, ubi descendebat sanctus Moyses cum Iesu filio Naue, ad quam petram iratus fregit tabulas, quas afferebat。聖書の欄は p. 43 の「25 cf. Exod. 32, 19」。quam は A の quem を Geyer が直したもの（p. 43 校注 25：quem A）。同じ節の summitatem montis, quae の quae も A は que（校注 21）。
- 聖書：七十人訳出エジプト三二・一九 は ὁρᾷ τὸν μόσχον καὶ τοὺς χορούς（「子牛と踊りの輪を見て」）、ὀργισθεὶς θυμῷ Μωυσῆς ἔρριψεν … τὰς δύο πλάκας（Swete l. 17178–17180）。原文の habentes choros は七十人訳の τοὺς χορούς に当たる。口語訳は「子牛と踊りとを見たので、彼は怒りに燃え、手からかの板を投げうち、これを山のふもとで砕いた」。ヨシュアがモーセと共に下ったことは口語訳出エジプト三二・一七。
- ほかの読み：Bernard は A のまま ad quem petram（l. 11503）。
- 読者への影響：小。
- 訳での扱い：訳注・メモとも付けない。habentes choros は口語訳に寄せて「踊っている」。出典は欄に従い（出エジプト三二・一九）。Iesus filius Naue は名前の表の「ヌンの子ヨシュア」。
- 確かめた資料：`n98_w1600.jpg`（聖書の欄、校注 21・25）。OCR l. 5088–5096、5102、5104。Swete I l. 17178–17180。`node tools/bible.js Exod.32.19 Exod.32.17`。Bernard l. 11498–11503。

### 5.5 de porta in porta, regressus a monte（A は ad montem。出エジプト三二・二七）
- 底本（Geyer）：ostenderunt etiam locum, ubi filios Israhel iussit currere sanctus Moysos de porta in porta, regressus a monte。a monte は Geyer の改めで、A は ad montem（p. 44 校注 1：ad montem A a monte ipse scripsi）。filios は A で filiis から直されている（p. 43 校注 30：filios corr. ex filiis A）。聖書の欄は p. 43 の「30 cf. Exod. 32, 27」。
- ほかの読み：A のままだと「山へ戻って」となり、モーセが山から下りて宿営で命じた聖書の話と合わない。Bernard も a monte と刷り、脚注に A の ad montem を記す（l. 11509、11523）。
- 聖書：七十人訳出エジプト三二・二七 は διέλθατε καὶ ἀνακάμψατε ἀπὸ πύλης ἐπὶ πύλην διὰ τῆς παρεμβολῆς（Swete l. 17194–17196）、口語訳は「宿営の中を門から門へ行き巡って」。原文の de porta in porta は「門から門へ」に当たる。
- 同じ節の abitationes：A は初め habitationes と書き、h を削っている（p. 43 校注 27：ante abitationes littera h erasa est）。P.D. は habitationes … quemadmodum fuerunt lapidibus circumdata（p. 121, 5–8。画像で確かめた）と、底本の lapide girata を言い換える。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。a monte で「山から戻ったモーセが」と訳す。de porta in porta は口語訳の「門から門へ」。出典は欄に従い（出エジプト三二・二七）。
- 確かめた資料：`n98_w1600.jpg`（本文 27〜30 行、聖書の欄、校注 27・30）、`n99_w1600.jpg`（校注 1）、`n176_w1600.jpg`（p. 121, 5–8）。OCR l. 5095–5100、5102、5104–5107、5112、5151、8589–8592。Swete I l. 17194–17196。`node tools/bible.js Exod.32.27`。Bernard l. 11507–11509、11523。

### 5.6 torrentem illum, de quo potauit sanctus Moyses filios Israhel（A は portauit。暗示の箇所は出エジプト一七・五 か三二・二〇 か）
- 底本（Geyer）：Item ostenderunt nobis locum, ubi incensus est uitulus ipse iubente sancto Moyse, quem fecerat eis Aaron. Item ostenderunt torrentem illum, de quo potauit sanctus Moyses filios Israhel, sicut scriptum est in Exodo。聖書の欄は p. 44 の「2 cf. Exod. 32, 20」（子牛を焼いた所）と「3 cf. Exod. 17, 5」（流れ）。
- ほかの読み：
  - potauit は Gamurrini の改めで、A は portauit（「運んだ」。p. 44 校注 4）。filios は A で filos（i を行の上に書き足す。同じ校注）。
  - A では torrentem の語に線が引かれている（校注：ostenderunt torrentem, sed per uocabulum torrentem lineola ducta est A。この注は行番号なしで校注 1 の後に続き、本文では 3 行目の語）。Geyer は torrentem を本文に残す。
  - Bernard も potavit（l. 11512）。
- 語法：Geyer の索引は potare を「（人に）飲ませる」（tränken）とし、filios Israhel 44, 4 を挙げる（l. 28641）。de の項にも torrentem, de quo potauit Moyses filios Israhel 44, 4 を挙げる（l. 26914–26916）。
- 聖書：Geyer の欄は出エジプト一七・五（ホレブの岩から水が出る話。七十人訳一七・六 は πατάξεις τὴν πέτραν, καὶ ἐξελεύσεται ἐξ αὐτῆς ὕδωρ, καὶ πίεται ὁ λαός、Swete l. 14263–14266。飲むのは民で、モーセが飲ませるのではない）。一方、七十人訳出エジプト三二・二〇 は、子牛を焼いて砕き水にまいて ἐπότισεν αὐτὸ τοὺς υἱοὺς Ἰσραήλ（「それをイスラエルの人々に飲ませた」。Swete l. 17182–17183）で、原文の potauit … filios Israhel と語の形が合い、直前の文（子牛を焼いた所）とも続く。申命記九・二一 は、そのちりを「山から流れ下る谷川」（τὸν χειμάρρουν τὸν καταβαίνοντα ἐκ τοῦ ὄρους。Swete l. 35482）に投げたと言い、原文の torrens（流れ）に当たる。Bernard の英訳の脚注は、この文の sicut scriptum est in Exodo に出エジプト三二・二〇 を挙げる（l. 8323、8326）。
- 読者への影響：中 — 欄のとおり一七章なら「岩から出た水を飲ませた流れ」、三二・二〇 なら「子牛を砕いた粉をまいて民に飲ませた流れ」で、場所の意味が変わる。ただ本文はどちらにも読め、訳文は「モーセがイスラエルの人々に飲ませた流れ」で同じになる。
- 訳での扱い：訳注は付けない。訳文はどちらの話にも決めずに「モーセがイスラエルの人々に（水を）飲ませたあの流れ」とする。出典は本の AGENTS.md の決まりどおり底本の欄に従うと（出エジプト一七・五）になるが、文の形と前後のつながりは三二・二〇 に合う。どちらを出すか（あるいは出典を付けないか）はメインで決め、`// ` メモに欄と Bernard の脚注が分かれることを書く。
- 確かめた資料：`n99_w1600.jpg`（本文 1〜5 行、聖書の欄、校注 1・4）。OCR l. 5112–5120、5147、5151–5155、26914–26916、28641。Swete I l. 14263–14266、17182–17183、35480–35482。`node tools/bible.js Exod.17.5-6 Exod.32.20 Deut.9.21`。Bernard l. 8323、8326、11510–11513。

### 5.7 locum, qui appellatus est incendium（民数記一一・三。七十人訳の地名）
- 底本（Geyer）：Nam ostenderunt nobis etiam et illum locum, qui appellatus est incendium, quia incensa est quaedam pars castrorum, tunc qua orante sancto Moyse cessauit ignis。聖書の欄は p. 44 の「9 cf. Num. 11, 3」。quaedam は A では quedam（校注 9）。
- 聖書：七十人訳民数記一一・一〜三 は κατέφαγεν μέρος τι τῆς παρεμβολῆς … ηὔξατο Μωυσῆς πρὸς Κύριον, καὶ ἐκόπασεν τὸ πῦρ. καὶ ἐκλήθη τὸ ὄνομα τοῦ τόπου ἐκείνου Ἐνπυρισμός（「宿営の一部を焼き尽くした…モーセが主に祈ると、火はやんだ。その所の名は『炎上』と呼ばれた」。Swete l. 27234–27243）。原文の incendium は七十人訳が意味で訳した地名 Ἐνπυρισμός に当たり、quaedam pars castrorum も μέρος τι τῆς παρεμβολῆς と合う。口語訳一一・三 は「タベラ」と音で写し、「主の火が彼らのうちに燃えあがった」と説明する。Bernard の英訳の脚注は民数記一一・三 を挙げる（l. 8370）。
- 読者への影響：小（本文の読み）。地名の訳し方は、1.1・5.10 の memoriae concupiscentiae（「欲心の墓」）と同じ問題。
- 訳での扱い：訳注は付けない。本の AGENTS.md の memoria の決まり（七十人訳が意味で訳した地名は、口語訳の音にせず、口語訳の説明の語で訳して出典を付ける）に合わせるなら、「『炎』と呼ばれた所」「燃えた所」の方向で（民数記一一・三）を付ける。どの語にするかはメインで決める。
- 確かめた資料：`n99_w1600.jpg`（本文 8〜10 行、聖書の欄、校注 9）。OCR l. 5122–5126、5149、5155。Swete I l. 27234–27243。`node tools/bible.js Num.11.3`。Bernard l. 8370。

### 5.8 scribere satis fuit（Cholodniak は satis longum）／retineri（A は retinere）／libros sanctos（Cholodniak は sancti）
- 底本（Geyer）：quae quidem omnia singulatim scribere satis fuit, quia nec retineri poterant tanta, sed cum leget affectio uestra libros sanctos Moysi, omnia diligentius peruidet, quae ibi facta sunt。
- ほかの読み：
  - Cholodniak は satis longum（「書けば長すぎた」）と改める（p. 44 校注 15）。Geyer は satis fuit を残し、索引で satis = ualde の項に omnia singulatim scribere satis fuit (= longum fuit) 44, 15 と挙げる（l. 29077–29083）。つまり Geyer も「長すぎた、手に余った」の意味に取る。
  - retineri は Sittl と Cholodniak に従う Geyer の改めで、A は retinere（同じ校注 15）。索引は retinere = memoria tenere（覚えておく）44, 15（l. 29018）。Bernard も retineri、脚注に A の retinere を記す（l. 11531、11567）。
  - Cholodniak は libros sanctos を libros sancti（Moysi）、「聖なるモーセの書」と改める案を出す（校注 16。Geyer は 44, 12 と 46, 17 を参照させる。46, 17 は in libris sancti Moysi、OCR l. 5230）。Geyer は本文に sanctos を残す。
- 読者への影響：中（satis fuit） — 「書けば十分だった」と字面で取ると意味が逆になる。正しくは「一つ一つ書くのは手に余りました。それほど多くのことは覚えきれなかったからです」。retineri、sanctos は小。
- 訳での扱い：訳注は付けない。satis fuit は索引のとおり「長すぎる、手に余る」の意味で訳す。affectio uestra は本の AGENTS.md の「皆さま」。leget、peruidet は未来の意味（「お読みになれば…おわかりになるでしょう」）。
- 確かめた資料：`n99_w1600.jpg`（本文 15〜17 行、校注 15・16）。OCR l. 5131–5134、5155–5157、5230、29018、29077–29083。Bernard l. 11531、11567。

### 5.9 confixum a Moyse est primitus tabernaculum（A は confix; mos esset）
- 底本（Geyer）：Nam ostensus est nobis et ille locus, in quo confixum a Moyse est primitus tabernaculum, et perfecta sunt singula, quae iusserat Deus in montem Moysi, ut fierent。confixum a Moyse est は Geyer の改め（p. 44 校注 24）。
- ほかの読み（同じ校注 24）：
  - A は confix; mos esset（略記を含み、そのままでは読めない）。
  - Woelfflin は confixum Mosis esset、Pomialowsky は confixum Moysi est、Cholodniak は confixit Moyses set（set は sed の綴り）。
  - Bernard は confixit Moyses と刷り、脚注でこれを Gamurrini の改めとし、A を mos esset とする（l. 11542、11567）。
  - P.D. は locus, ubi tabernaculum foederis primitus fixum est（「契約の幕屋が初めて張られた所」。p. 121, 8–9。画像で確かめた）。
- 読者への影響：小 — どの改めでも「モーセが初めて幕屋を張った所」で、意味は変わらない。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n99_w1600.jpg`（本文 24〜25 行、校注 24）、`n176_w1600.jpg`（p. 121, 8–9）。OCR l. 5141–5144、5157–5159、8592–8593。Bernard l. 11542、11567。

### 5.9 ubi celebrata est pascha completo anno profectionis（過越の祭。底本の欄に箇所なし）
- 底本（Geyer）：Haec est ergo uallis, ubi celebrata est pascha completo anno profectionis filiorum Israhel de terra Egypti。p. 44 の聖書の欄にはこの文の箇所がない（欄は 2・3・5・7・9・11 行だけ。この文は 17〜19 行）。
- 聖書：口語訳民数記九・一〜五 に「エジプトの国を出た次の年の正月」「シナイの荒野で過越の祭を行った」とあり、原文はこれを指すとみられる。幕屋が建ったのも「第二年の正月」（口語訳出エジプト四〇・一七）。どちらも Geyer の欄は挙げない。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。本の AGENTS.md の決まり（底本の欄に箇所のないものは出典を付けない）どおり出典は付けない。pascha は口語訳の「過越の祭」に寄せる。
- 確かめた資料：`n99_w1600.jpg`（聖書の欄）。OCR l. 5134–5137、5147–5149。`node tools/bible.js Num.9.1-5 Exod.40.17`。

### 5.10 memorias concupiscentiae（底本の欄に箇所なし）／pro aetate（A の略記）
- 底本（Geyer）：Vidimus etiam in extrema iam ualle ipsa memorias concupiscentiae。p. 44 の聖書の欄は、この行（27 行）に箇所を挙げない（同じ地名は 1.1 で「cf. Num. 11, 34」とされた）。同じ節の qui tamen pro aetate aut inbecillitate について、A は ꝑ etate と略記で書き（ꝑ は per の略号）、Pomialowsky は per etate と読む（p. 45 校注 5）。Geyer は pro aetate と刷る。Bernard は pro etate（l. 11549–11550）。
- 聖書：Bernard の英訳の脚注は、この箇所に民数記一一・三四 を挙げる（l. 8370）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。memorias concupiscentiae は本の AGENTS.md の訳語表どおり「欲心の墓」。訳語表は出典を付けるとし、聖書の決まりは欄に箇所のないものには出典を付けないとするので、ここで（民数記一一・三四）を付けるかはメインで決める。pro aetate は「年齢のため」で、per でも意味は同じ。
- 確かめた資料：`n99_w1600.jpg`（本文 26〜27 行、聖書の欄）、`n100_w1600.jpg`（校注 5）。OCR l. 5144–5145、5169、5204。Bernard l. 8370、11549–11550。

### 5.12 quae mei meriti non erant（Geyer：erat か）
- 底本（Geyer）：ut perambularem omnia loca, quae mei meriti non erant（「わたしの値打ちには過ぎた場所をすべて巡ることができるように」）。Geyer は校注で「erant は erat ではないか」と問う（p. 45 校注 15：erant] an erat?）。本文には入れない。
- ほかの読み：erat なら主語は ut perambularem（巡ること）で、「巡ることはわたしの値打ちに過ぎたことだった」。Bernard は erant（l. 11560）。
- 読者への影響：小 — どちらでも「わたしには過ぎた恵み」という謙遜。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n100_w1600.jpg`（本文 15 行、校注 15）。OCR l. 5181、5204。Bernard l. 11560。

### 4.1〜5.12 綴りだけの A の読み
- 底本（Geyer）：次の語を古典の綴りで刷り、A の綴りを校注に記す。4.2 quae（A que。p. 41 校注 18）、4.5 coepit（A cepit、よくこの綴り。p. 42 校注 6）、4.5 quaecumque（A quecumque。校注 10）、5.1 ergo（A は ego と書き、r を行の上に書き足す。p. 43 校注 7）、5.1 quemadmodum（A que ad modum。校注 8）、5.5 adhuc（A ad huc。校注 28）、5.8 quaecumque（A quecumque。p. 44 校注 12）。
- 読者への影響：なし。
- 訳での扱い：訳注・メモとも付けない。
- 確かめた資料：`n96_w1600.jpg`、`n97_w1600.jpg`、`n98_w1600.jpg`、`n99_w1600.jpg` の校注。OCR l. 5009、5055–5056、5104–5105、5155。

## 未確認

- 5.5 の sanctus Moysos：底本は Moysos と刷る（`n98_w1600.jpg` の本文 30 行で確かめた。OCR l. 5100 も Moysos）が、校注は何も言わない。A の綴りをそのまま刷ったのか、底本の誤植なのかは確かめられなかった（OCR の中で Moysos はこの 1 か所だけ。Bernard のラテン語本文は Moyses、l. 11508）。どちらでも訳は「モーセ」。印刷の誤りなら本の AGENTS.md の決まりどおり `// ` メモに書く。
- 4.8・5.2 の solue corrigiam calciamenti tui が、どの古ラテン語訳の文言に当たるかは、古ラテン語訳の本文を cache に持たないので確かめていない。七十人訳とは形が違うことだけを確かめた。
- 4.8 の loco について Geyer が論じた Kritische Beiträge p. 12（校注 29 が参照させる）は cache になく、議論の中身は読んでいない。
- 5.6 で A の torrentem に引かれた線（lineola）が、写字生か後の手が消すつもりで引いたものかどうかは、校注の言い方からは決められない（Geyer は語を残す）。
- 5.10 の in eo tamen loco を、Bernard のラテン語本文は in eo autem loco と刷る（l. 11545）。Geyer の校注は何も言わず、Bernard（Gamurrini の本文による）の誤りか OCR の崩れかは確かめていない。訳には響かない。
