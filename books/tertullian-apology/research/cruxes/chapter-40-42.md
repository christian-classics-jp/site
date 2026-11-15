# chapter-40-42 の論点（40-42）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0296_page.jpg`（p. 266）〜`0306_page.jpg`（p. 276）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,40`）・中（`pct:0,30,100,35`）・下（`pct:0,60,100,40`）に切り出し、0297 は `pct:0,38,100,30` でも切り出して、本文・校注・注解を読んだ（切り出しは `/tmp` に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 34269–35548（ページの境は p. 266 が l. 34277、p. 267 が l. 34360、p. 268 が l. 34527、p. 269 が l. 34646、p. 270 が l. 34756、p. 271 が l. 34875、p. 272 が l. 35005、p. 273 が l. 35074、p. 274 が l. 35221、p. 275 が l. 35348、p. 276 が l. 35417）。OCR は校注を細切れにし、λ を 4、A などに崩すので、校注の略号はすべて画像で読んだ。注解は画像で読み、OCR の行番号を添えた。

校注の番号は章ごとに振り直される。40 章は p. 266 の「Cap. XL.」から 1〜75（p. 271 まで）、41 章は p. 271 の「Cap. XLI.」から 1〜34（p. 272 まで）、42 章は p. 273 の「Cap. XLII.」から 1〜41（p. 276 まで）。注解の記号も章ごとで、40 章は a〜z と zz（p. 267〜271）、41 章は a〜d（p. 271〜272）、42 章は a〜o（p. 273〜276）。この一覧では「校注 40 章 7」「注 41 章 c」のように章を添えて書く。p. 266 の上の校注 71〜83 と注 t〜v は 39 章、p. 276 の Cap. XLIII. 以下は 43 章のもので、ここでは扱わない。

Bindley は OCR l. 7961–8310（40〜42 章の本文と注。43 章は l. 8314 から）で読んだ。Mayor の注は OCR l. 23618–24970 ごろ（40 章 l. 23618、41 章 l. 24330、42 章 l. 24471 から。Mayor の本文のページでは p. 116 l. 10〜p. 124 l. 3 ごろ）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148）は、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:0,45,100,55` と `pct:50,30,50,25` で切り出して読んだ。この範囲の項目は六つある（p. 116 l. 15、l. 23、l. 30、p. 118 l. 1、p. 120 l. 24、p. 122 l. 16。それぞれ 40.1、40.4、40.6、40.7、41.6、42.5 の項に書く）。

---

### 40.1・41.1・42.1 写本の章題と、章の区切り
- 底本（Oehler）：章題は刷らない。欄外の Cap. XL.、XLI.、XLII. で章を分ける。
- ほかの読み：40 章は、A・B が ET CONTRA ETHNICAM RATIONEM.（「そして異教の理屈に対して」）の題を付け、章題を持たない F とウィーン写本はこの語を 39 章の終わりに置く。E とエアフルト写本は CONTRA ETHNICAM RATIONEM.、ヴァティカンの写本の一つは「キリストの来臨の後、神が容赦されたので、災いは少なくなった」（QVOD POST CHRISTI ADVENTVM PAVCIORES CLADES DEO PARCENTE EVENERINT）。a・b は 40 章を 39 章とつなげて一つの章にし、題を付けない（校注 40 章 Cap. XL.）。40.9 の occupaverant の後で、古い写本と刊本は新しい章を始め、「町々の災いについて」（DE ADVERSIS VRBIVM。D・G は VRBIBVS）の題を付ける（校注 40 章 38）。41 章は A などでは 42 章の番号で、A・B・E・G・a・b、ウィーン写本、オクスフォード、エアフルト写本、アンブロジアーナ写本が「神は軽んじられ、像は拝まれる」（QVOD DEVS SPERNITVR ET STATVAE ADORANTVR）、ヴァティカンの写本の一つはさらに詳しく「神が軽んじられ、像が拝まれるので、神が人類に怒られるのは当然であった」の題を付ける（校注 41 章 Cap. XLI.）。42 章は A・B・E・G などが「わたしたちを役に立たないと言うこと」（QVOD INFRVCTVOSOS NOS DICVNT）、D・a・b が「キリスト者を役に立たないと言った者たちに対して」の題を付ける（校注 42 章 Cap. XLII.）。
- 採る校訂者：Bindley も 40〜42 章を Oehler と同じに分け、章題は付けない（OCR l. 7961、8112、8163）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。見出しは本の AGENTS.md の形（`# 40〜42 章　…`）でこの訳が付ける。写本の章題（災いの責め、神が軽んじられること、役に立たないという責め）は内容と合うので参考になる。
- 確かめた資料：Oehler 画像 0296（校注 40 章 Cap. XL.）、0299（校注 40 章 38）、0301（校注 41 章 Cap. XLI.）、0303（校注 42 章 Cap. XLII.）。OCR l. 34316–34324、34667–34672、34906–34912、35165–35168。Bindley OCR l. 7961、8112、8163。

### 40.1 nomen factionis … in odium bonorum et proborum conspirant … conclamant（小さな異読）
- 底本（Oehler）：At e contrario illis nomen factionis accommodandum est qui in odium bonorum et proborum conspirant, qui adversum sanguinem innocentium conclamant, praetexentes sane ad odii defensionem illam quoque vanitatem …
- ほかの読み：factionis を a・b・c は factionum（校注 40 章 1）。accommodandum をオクスフォードは accommodatum（2）。adversum をオクスフォードは adversus（3）。conclamant を c は clamant、G は concordant（4）。quoque を G は欠く（5）。Bindley の本文は in odium bonorum conspirant（et proborum がない。OCR l. 7964）。Oehler の校注にこの欠落は出ない。
- 採る校訂者：Mayor は odium に、タキトゥス『年代記』15 巻 44 章の「人類への憎しみ」を挙げ、conclamant に『偶像崇拝について』14 章と『見世物について』27 章（そこでは毎日わたしたちに向けて獅子が求められる）を挙げる（OCR l. 23671–23682）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。factio は訳語表どおり「結社」。39.22 の Cum probi, cum boni coeunt … non est factio dicenda, sed curia を受けて、結社の名をふさわしい相手に返す文なので、bonorum et proborum は 39:22 の probi、boni の訳と揃えられる。
- 確かめた資料：Oehler 画像 0296（本文、校注 40 章 1〜5）。OCR l. 34297–34300、34323–34324。Bindley OCR l. 7963–7966。Mayor OCR l. 23671–23682。

### 40.1 Christianos esse in causam（in causam と in causa）
- 底本（Oehler）：quod existiment omnis publicae cladis, omnis popularis incommodi Christianos esse in causam.
- ほかの読み：incommodi を λ は incommodi in primordio temporum（「時の初めから」を加える。校注 40 章 6）。in causam は A・B・D。F・G・λ・c、ウィーン写本は in causa、E・a・b・d・e・f、エアフルト写本、オクスフォード、Pamelius の写本のいくつかは causam（in がない。7）。Bindley の本文は in caussa（OCR l. 7967）。
- 採る校訂者：Oehler は「最良のパリ写本にこう書かれている」とし、『偶像崇拝について』15 章の in hominis causam esse を挙げる（注 40 章 a）。Mayor は p. 148 の一覧で「p. 116 l. 15 causa」とし、in causa を好む。Mayor の注は in causa の用例（2 章の終わり近く、『諸国民へ』1 巻 3 章、『スカプラへ』5 章、ユウェナリスなど）を挙げる（OCR l. 23723–23733）。
- 読者への影響：小 — どの形でも「キリスト者がその原因だ」の意味。
- 訳での扱い：訳注は付けない。omnis publicae cladis は 41.1 の rei publicorum incommodorum inlices（41.1 の項）で言い返される。
- 確かめた資料：Oehler 画像 0297（本文、校注 40 章 6・7、注 a）。OCR l. 34374、34385、34398–34403、34418–34425。Mayor 画像 0172（p. 148）。Mayor OCR l. 23723–23733。Bindley OCR l. 7967。

### 40.2–40.3 Si Tiberis ascendit … statim Christianos ad leonem! adclamatur. Tantos ad unum?（民衆の叫びと「一頭に」）
- 底本（Oehler）：Si Tiberis ascendit in moenia, si Nilus non ascendit in arva, si caelum stetit, si terra movit, si fames, si lues, statim Christianos ad leonem! adclamatur. Tantos ad unum?
- ほかの読み：in moenia を c・f は ad moenia（校注 40 章 8）。in arva を λ は in rura（9）。movit を D は vomit（10）。si lues の si を F とウィーン写本は欠く（11）。adclamatur は A・B・D・E・F・G・a・b、ウィーン写本、エアフルト写本、オクスフォード。λ は inclamant、c・d・e・f と Havercamp は欠く（12）。Bindley の本文は statim CHRISTIANOS AD LEONEM. Tantos ad unum?（adclamatur がなく、叫びを大文字で組む。OCR l. 8000–8001）。
- 採る校訂者：注 40 章 b は caelum stetit を『断食について』16 章の「天がこわばり、年が乾くと、はだしの行列が告げられる」、『諸国民へ』1 巻 9 章と並べ、Rigaltius の「天が、こわばったように固まって、溶けず、雨にほどけないとき、天が立つ・こわばると言う」を引き、アウグスティヌス『神の国』2 巻 3 章の俗な諺「雨が降らない。キリスト者のせいだ」を挙げる。注 c は terra movit（自動詞の movere）にリウィウス 35 巻 40 章などを挙げる。注 d は、民衆は Ad leones（獅子たちに）ではなく Ad leonem（獅子に）と求めたのであり、著者はこの言い方を笑う、どの獅子があれほど多くのキリスト者を片づけられようか、とする（Heraldus）。ランプリディウス『コンモドゥス伝』の「密告者を獅子に」、エウセビオスが引く『ポリュカルポスの殉教』（アジア総督フィリッポスに、ポリュカルポスに獅子を放てと求めた）、キプリアヌスの書簡を挙げる。Bindley は caelum stetit を「雨がないこと」で、movit のちょうど反対の語とする（OCR l. 8025–8027）。Mayor は『諸国民へ』1 巻 9 章の同じ列挙（si Tiberis redundaverit, si Nilus non redundavit, si caelum stetit, si terra movit …）と、『神の国』2 巻 3 章を挙げ、ad leonem に 50 章、『貞節の勧め』12 章（「キリスト者を獅子に」と叫ぶ者）、『ポリュカルポスの殉教』12 章などを挙げる（OCR l. 23735–23746、23765–23826）。
- 読者への影響：中 — Tantos ad unum?（あれほど多くを、一頭に）は、叫びが単数の「獅子に」であることが分からないと意味が通らない。
- 訳での扱い：訳注は付けない。叫びは本の AGENTS.md の「民衆が叫ぶ歓呼」と同じく「」に入れ、adclamatur で受ける（「と叫ばれます」など）。lion は「獅子」。単数であることを訳文でどう見せるか（「一頭の獅子に」とするか、Tantos ad unum? の側で「一頭に」と言うか）はメインが決める。caelum stetit は注 b のとおり「雨が降らない」の意味。
- 確かめた資料：Oehler 画像 0297（本文、校注 40 章 8〜12、注 b・c・d）。OCR l. 34375–34378、34385–34389、34398–34405、34427–34460、34488–34493。Bindley OCR l. 7968、8000–8001、8025–8030。Mayor OCR l. 23735–23746、23765–23826。

### 40.3 orbem et urbes ceciderunt（urbes と urbem）
- 底本（Oehler）：ante Tiberium, id est ante Christi adventum, quantae clades orbem et urbes ceciderunt?
- ほかの読み：urbes は A・E・F・f、ウィーン写本、エアフルト写本。B・D・G・a〜e と Havercamp は urbem（校注 40 章 13）。Bindley の本文は urbem で、「つまりローマ」と注する（OCR l. 8004、8032）。
- 採る校訂者：Mayor は orbem et urbes の見出しで、キケロ『カティリナ弾劾』1 巻 9 章の urbis atque adeo orbis（町と、いや世界の）を最も早い例に挙げる（OCR l. 23866–23867）。ante Tiberium に 5 章と 21 章の初めを挙げる（l. 23863–23864）。
- 読者への影響：小 — urbem なら「世界と（ローマの）都を」、urbes なら「世界と町々を」。
- 訳での扱い：訳注は付けない。底本の urbes（町々）で訳す。ante Tiberium は 5 章・21 章の既訳の「ティベリウス」の言い方に揃える。
- 確かめた資料：Oehler 画像 0297（本文、校注 40 章 13）。OCR l. 34371、34379、34406、34463。Bindley OCR l. 8004、8032。Mayor OCR l. 23863–23867。

### 40.3 Hieran, Anaphen et Delon et Rhodon et Co insulas … pessum abisse（島の名）
- 底本（Oehler）：Legimus Hieran, Anaphen et Delon et Rhodon et Co insulas multis cum milibus hominum pessum abisse.
- ほかの読み：Hieran, Anaphen et は Havercamp。写本の形は崩れていて、A・B は hieran（B は hierant）napean et、E・オクスフォード・エアフルト写本・Pamelius の写本の一部は hierannapean et、D とヴァティカンの写本の一つは hieramapeam et、G は hyeramcipeam et、ヴァティカンのもう一つは hieramiapaeam et、Bongars の写本は iherannapeam et、λ は hienarranda penes、アンブロジアーナ写本は geran napean et。a〜e は Hierapolim et、f は Hierannapen et。Jac. Gothofredus（『諸国民へ』1 巻 9 章の注）と Salmasius は Hieren, Nean, Anaphen et（校注 40 章 14）。Co は f・Havercamp・Salmasius。A・B・E・G、ウィーン写本、Pamelius の写本のいくつか、エアフルト写本は Cho、アンブロジアーナ写本と Bongars の写本は Choo、F は thou、D は Choon、a・b・c は Con、d・e とヴァティカンの写本の一つは Coon（15）。abisse は A・B・E・F・G、ウィーン写本、エアフルト写本（16。Oehler の校注は本文と違う形を挙げていない）。Bindley の本文は Hieran, Anaphen et Delon et Rhodon et Co insulas … pessum abiisse（OCR l. 8004–8006）。
- 採る校訂者：注 40 章 e は「正しい読みを掘り起こすのは難しい」とし、もとは Hieranaphen か Hieraphen と書かれていたかもしれない、後者はビザンティオンのステファノスの「ヒエラフェ、アナフェと同じ、リビアの島」に証言がある、と言う。そのうえで、さしあたり Hieran, Anaphen を保つ。ヒエラはアイオリスの島の一つ（いまの Volcano）、アナフェはスポラデス諸島の一つ（いまの Namfio、Anafi）で、プリニウス『博物誌』2 巻 87 章とアンミアヌス 17 巻 7 章は、ヒエラとアナフェ、デロスとロドスが海から現れたと伝える。Hierapolim と刷った刊本は、ネロの第三年にラオディキア、コロサイとともにヒエラポリスが地震で倒れたというエウセビオス『年代記』とオロシウスの記事に拠ったが、著者はティベリウスとキリストの来臨より前の災いだけを語っており、島々のあいだに町のヒエラポリスが入る余地もない、として退ける。デロスの災いは『外套について』2 章にもあり、プリニウス 2 巻 88〜89 章はデロスとロドスがかつて呑まれ、のちに現れたと言う。ロドスについてエウセビオス『年代記』とオロシウス 4 巻 13 章、コスの島でアウグストゥスの第 38 年に地震で多くのものが倒れたとエウセビオスが証言する、と続ける（注 e、p. 267〜268）。Mayor は『諸国民へ』1 巻 9 章の並行箇所（Hierennape〔Mayor は Hiera, Napea か Anaphe と直す〕et Delphos〔Delos と直す〕et Rhodos et Cea insulae multis cum milibus hominum pessum ierunt）と、アンミアヌス 17 巻 7 章 13 節（地震で、アジアではデロス、ヒエラ、アナフェ、ロドスが浮かび上がった）、エウセビオス『年代記』（コスの島で地震により多くのものが倒れた）を挙げる（OCR l. 23869–23909）。Bindley はプリニウス 2 巻 87 章とアンミアヌス 17 巻 7 章を挙げ、「クレタの海の火山の島々」とする（l. 8034–8037）。
- 読者への影響：中 — 名前の読み方が定まらない。『諸国民へ』の並行箇所は Co ではなく Cea（ケオス）。ただし、どの読みでも「多くの人とともに沈んだ島々」の列挙であることは変わらない。
- 訳での扱い：訳注は付けない。底本の Hieran, Anaphen … Co で訳す。名前の表に足す名（ヒエラ、アナフェ、デロス、ロドス、コス。デロスとロドスは『ギリシア人への勧告』の表記）はメインが決める。
- 確かめた資料：Oehler 画像 0297（本文、校注 40 章 14〜16、注 e）、0298（注 e の終わり）。OCR l. 34371、34392–34395、34407–34415、34464–34485、34495–34524、34562–34565。Bindley OCR l. 8004–8006、8034–8037。Mayor OCR l. 23869–23909。

### 40.4 Memorat et Plato maiorem Asiae vel Africae terram Atlantico mari ereptam（アジア「や」アフリカ／アジア「と」アフリカ）
- 底本（Oehler）：Memorat et Plato maiorem Asiae vel Africae terram Atlantico mari ereptam.
- ほかの読み：vel は A・B・D・F・G・f、ウィーン写本、アンブロジアーナ写本、オクスフォード、Pamelius の写本のすべて。E・a〜e、エアフルト写本は et（校注 40 章 17。校注は『外套について』2 章と『諸国民へ』1 巻 9 章を参照させる）。ereptam を λ は inereptam と読み、Oehler は interemptam と読め、とする（18）。Bindley の本文は majorem Asiae et Africae terram（OCR l. 8006–8007）。
- 採る校訂者：注 40 章 f は、『諸国民へ』1 巻 9 章の maiorem Asia aut Africa in Atlantico mari mersam、『外套について』2 章の「大西洋の中で、リビアかアジアに匹敵する島が、いまは探し求められている」を挙げ、プラトンの証言なら maiorem Asiae et Africae の読みが支えられるだろう、と言う。比較の属格をラテン語の奪格の代わりにギリシア語風に置いた形とし、プラトンのアトランティスの箇所を『ティマイオス』p. 24 以下、『クリティアス』p. 108 以下とする。Mayor は『諸国民へ』1 巻 9 章（uel quam Plato memorat maiorem Asia aut Africa in Atlantico mari mersam）、プリニウス 2 巻 90 章、アルノビウス 1 巻 5 章、『外套について』2 章を挙げ、maiorem Asiae の属格の用例を集める（OCR l. 23910–23937）。
- 読者への影響：小〜中 — vel なら「アジアやアフリカより大きな土地」、et なら「アジアとアフリカより大きな」。著者自身の並行箇所はどちらも aut（または）で、底本の vel と合う。
- 訳での扱い：訳注は付けない。底本の vel で訳す。Atlantico mari は「大西洋」。島の名（アトランティス）は本文にないので補わない。プラトンは名前の表（『オクタウィウス』）どおり「プラトン」。
- 確かめた資料：Oehler 画像 0298（本文、校注 40 章 17・18、注 f）。OCR l. 34529–34530、34545–34546、34567–34592。Bindley OCR l. 8006–8007。Mayor OCR l. 23910–23937。

### 40.4 mare Corinthium terrae motus ebibit … Lucaniam abscisam in Siciliae nomen relegavit（ルカニアとシキリア）
- 底本（Oehler）：Sed et mare Corinthium terrae motus ebibit, et vis undarum Lucaniam abscisam in Siciliae nomen relegavit.
- ほかの読み：abscisam は A・B・D・E・G・λ、ウィーン写本（abscissam）、B（abcisam）、Bongars の写本、エアフルト写本、アンブロジアーナ写本。F・a〜f と Havercamp は Italiae abscissam（F・d・Havercamp は abscisam）（校注 40 章 19）。relegavit を G は religavit（20）。Bindley の本文は Lucaniam Italiae abscissam（OCR l. 8008–8009）。
- 採る校訂者：注 40 章 g はプリニウス 2 巻 4 章と 92 章、注 h はサッルスティウスの断片 297、プリニウス 3 巻 8 章、ルクレティウス 1 巻 718 行以下を挙げる。Mayor は p. 148 の一覧で「p. 116 l. 23 abscissam」とする（綴りの違い）。Mayor の注は、コリントス湾がヘリケとブラを呑んだというプリニウス 2 巻 92 章 206 節、『外套について』2 章（かつてのイタリアの側面が、アドリア海とテュレニア海に打たれて半ばで断ち切られ、残りをシキリアにした）、ウェルギリウス『アエネイス』3 巻 414〜419 行（海が来て、ヘスペリアの側面をシキリアから切り離した）を挙げる（OCR l. 23939–23957）。
- 読者への影響：小〜中 — Italiae（イタリアから）があると、ルカニアがイタリアから切り離されたことがはっきりする。底本では、切り離されたルカニアの土地がシキリアの名に移された、という言い方。
- 訳での扱い：訳注は付けない。底本で訳し、Italiae は足さない（本の AGENTS.md の「異読にだけある語を足さない」）。in Siciliae nomen relegavit は、ルカニアだった土地がシキリアと呼ばれるようになった意味で訳せる。名前（コリントス、ルカニア、シキリア）はメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0298（本文、校注 40 章 19・20、注 g・h）。OCR l. 34530–34531、34546–34550、34594–34595、34613–34615。Bindley OCR l. 8007–8009。Mayor 画像 0172（p. 148）。Mayor OCR l. 23939–23957。

### 40.5 non sine iniuria incolentium（iniuria の語義）
- 底本（Oehler）：Haec utique non sine iniuria incolentium accidere potuerunt.
- ほかの読み：本文の異読はない。
- 採る校訂者：注 40 章 i は iniuria を damnum（損害）と注し、38 章の注を参照させる。Mayor は 38 章の終わりと 44 章の初め、『諸国民へ』1 巻 9 章を挙げる（OCR l. 23959–23964）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。訳語表の iniuria（3.5）「損」と、38:4 の「損」に揃えられる（「住む人々に損のないまま起こりえたはずはありません」など）。
- 確かめた資料：Oehler 画像 0298（本文、注 i）。OCR l. 34532、34617–34618。Mayor OCR l. 23959–23964。

### 40.5–40.6 cataclysmus … vel, ut Plato putavit, campestre solummodo … nati mortuique … alias hodiernum manerent（洪水と神々の生まれた町）
- 底本（Oehler）：cum totum orbem cataclysmus abolevit, vel, ut Plato putavit, campestre solummodo? Posteriores enim illos clade diluvii contestantur ipsae urbes in quibus nati mortuique sunt, etiam quas condiderunt; neque enim alias hodiernum manerent nisi et ipsae posthumae cladis illius.
- ほかの読み：vel を A・G は velud（校注 40 章 21）。mortuique を λ は moratique（「とどまり」。22）。alias hodiernum は A・B・E・G・f、ウィーン写本、エアフルト写本。D・F・a〜e は alias in hodiernum、λ は illae in hodiernum（23）。Bindley の本文は ipsi dii vestri … alias in hodiernum manerent, nisi et ipsae postumae cladis illius（OCR l. 8012–8017）。
- 採る校訂者：注 40 章 k は『外套について』2 章を挙げる。Mayor はプラトン『法律』p. 677（大洪水を生き延びたのは山の上の者だけだった、という箇所）と『外套について』2 章を挙げ、『諸国民へ』1 巻 9 章の並行箇所（ipsi dei vestri, quos clade illa posteriores loca, oppida, approbant, in quibus nati morati sepulti sunt, etiam quae condiderunt? non alias enim superfuissent ad hodiernum nisi postuma cladis illius）を引く。alias を aliter（ほかの仕方で）の意味とし、postumus に属格が付く形を並行箇所で示す。p. 148 の一覧で「p. 116 l. 30 hod.] in hod.」とし、in hodiernum を好む（OCR l. 23959–23964、23973–23982、24009–24024）。
- 読者への影響：小 — λ の moratique は『諸国民へ』の morati と合う。どの読みでも、神々が生まれ死んだ町々は洪水の後にできたので、神々も洪水より後の者だ、という論は同じ。
- 訳での扱い：訳注は付けない。illos は前の文の dei vestri（あなたがたの神々）を受ける。campestre solummodo は「平地だけ」。hodiernum は in がなくても「今日まで」の意味で訳せる。
- 確かめた資料：Oehler 画像 0298（本文、校注 40 章 21〜23、注 k）。OCR l. 34534–34538、34553–34554、34598–34599、34606、34620–34621。Bindley OCR l. 8011–8017。Mayor 画像 0172（p. 148）。Mayor OCR l. 23959–24024。

### 40.7 Nondum Iudaeum ab Aegypto examen … Sodoma et Gomorra igneus imber exussit（ソドムとゴモラ）
- 底本（Oehler）：Nondum Iudaeum ab Aegypto examen Palaestina susceperat nec iam illic Christianae sectae origo consederat, cum regiones adfines eius Sodoma et Gomorra igneus imber exussit.
- ほかの読み：adfines eius を D・E・a〜d は ac fines（校注 40 章 24）。Sodoma et Gomorra を F は sodomam et gomoram（25）。exussit を F・a、ウィーン写本は excussit（26）。
- 採る校訂者：Mayor は examen（群れ）がラクタンティウス 4 巻 10 章 14 節に引き継がれたこと、secta に 21 章の初めと『諸国民へ』1 巻 10 章を挙げ、igneus imber にノラのパウリヌスとルフィヌスを挙げる。『外套について』2 章の「パレスチナを見よ……不敬が火の雨を招いた。ここまでがソドムで、ゴモラはもうない」を引く（OCR l. 24026–24040、24068–24074）。創世記一九・二四は資料の注に挙がっていないが、出来事はこの箇所のもの（口語訳「主は硫黄と火とを主の所すなわち天からソドムとゴモラの上に降らせて」）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。ソドム、ゴモラは口語訳の表記。引用ではないので『』と出典は付けない。eius は Palaestina を受ける（「その隣の地方」）。Christianae sectae の secta は訳語表どおり「一派」。
- 確かめた資料：Oehler 画像 0298（本文、校注 40 章 24〜26）。OCR l. 34538–34541、34600、34607–34608。Mayor OCR l. 24026–24074。`node tools/bible.js Gen.19.24`。

### 40.7 et si qua illic arborum poma, conantur oculis tenus, ceterum contacta cinerescunt（ソドムの木の実）
- 底本（Oehler）：Olet adhuc incendio terra, et si qua illic arborum poma, conantur oculis tenus, ceterum contacta cinerescunt.
- ほかの読み：conantur は A・B・E・G・λ・d・e・f、ガンの写本、エルノンの写本、エアフルト写本、ヴァティカンの写本の一つ。F とウィーン写本は cernantur（「目にだけ見える」）、D・a・b・c、アンブロジアーナ写本、Latinius は oriantur（「生じる」）、Meursius は cooriantur（校注 40 章 27）。cinerescunt を λ は cineres sunt（28）。Bindley の本文は et si qua illic arborum poma conantur, oculis tenus, ceterum contacta cinerescunt と、conantur の後で区切り、「そこで木が実を結ぼうとしても、目に見えるだけで、触れると灰に崩れる。本文は不確かだ」と注する（OCR l. 8020–8021、8039–8042）。Mayor は p. 148 の一覧で「p. 118 l. 1 cenantur」と刷る（Mayor の注の見出しから、p. 118 l. 1 は oculis tenus の行。cenantur の語の意味は資料では確かめていない）。
- 採る校訂者：注 40 章 l は Rigaltius の解釈「そこに木が残っていれば、見る者の目には実を約束するが、摘む者の指が触れると、その実は灰にほどける」を引いて「この解釈をよしとする」と言い、47 章の Dum ad nostra conantur を同じ conari の用例に挙げる。conari はほとんど adfectare（そう見せようとする）の意味で、「そこに木の実ができても、その努めと見せかけによって、自分の見かけより先には進まない。触れるとすぐ灰にほどけるからだ」と言い換える。偽キプリアヌス『ソドム』133 行以下（実は目に梨や桃を約束するが、摘むと灰に崩れる）を挙げ、その詩人がテルトゥリアヌスにならったと見る。Mayor も同じ詩、タキトゥス『同時代史』5 巻 7 章、ヨセフス『ユダヤ戦記』4 巻 8 章 4 節（実は見た目には食べられそうだが、手でもぎ取ると煙と灰になる）、『外套について』2 章を挙げる（OCR l. 24042–24077）。
- 読者への影響：中 — 文の切れ目と conantur の意味が取りにくい。ただし、どの読みでも「見た目だけの実が、触れると灰になる」という中身は同じ。
- 訳での扱い：訳注は付けない。注 l のとおり「実は、目に見えるところまでは実であろうとするが、触れると灰になる」の形で訳す。底本の区切り（poma, conantur oculis tenus）に従い、poma を conantur の主語に取る。
- 確かめた資料：Oehler 画像 0298（本文、校注 40 章 27・28、注 l）、0299（注 l の終わり）。OCR l. 34541–34542、34601–34610、34623–34644、34697–34699。Bindley OCR l. 8020–8021、8039–8042。Mayor 画像 0172（p. 148）。Mayor OCR l. 24042–24077。

### 40.8 Sed nec Tuscia iam tunc atque Campania … Vulsinios de caelo, Pompeios de suo monte perfudit ignis（ポンペイと、キリストの来臨の後の災い）
- 底本（Oehler）：Sed nec Tuscia iam tunc atque Campania de Christianis querebantur, cum Vulsinios de caelo, Pompeios de suo monte perfudit ignis.
- ほかの読み：iam tunc を c・d は欠き、tunc を λ は欠く（校注 40 章 28 の後半）。querebantur を d・e・f と Havercamp は querebatur（29）。Vulsinios は写本で ulscinius（F）、vulscinios（D、ウィーン写本）、ulscinios（Aβ・E）、ulcinios（Aφ・B・G）、ulciscinios（エアフルト写本）と崩れ、c は Volsinios（30）。Pompeios を Havercamp は、『諸国民へ』1 巻 9 章についての Gothofredus に従って Tarpeios とする（31）。de suo monte を Meursius は Vesuvio monte と読む（32）。perfudit を a・b・c は profudit（33）。Bindley の本文は Volsinios de caelo, Tarpeios de suo monte perfudit ignis（OCR l. 8023、8052）。
- 採る校訂者：注 40 章 m はウォルシニイに、プリニウス 2 巻 52 章と『外套について』2 章を挙げる。Bindley は「Tarpeios は『諸国民へ』1 巻 9 章のとおり。写本の Pompeios は誤り。ポンペイが埋もれたのは紀元 79 年だから」と注する（OCR l. 8046–8047）。Mayor は『外套について』2 章（同じような雲から、エトルリアはウォルシニイを焼かれ、カンパニアは山のためにポンペイを奪われた、という文）を挙げ、ポンペイの名を保つ（OCR l. 24083–24087）。
- 読者への影響：中 — 著者はキリストの来臨より前の災いを挙げているが、ポンペイの滅び（紀元 79 年。Bindley の注）はキリストの後になる。ただし、写本はすべて Pompeios で、著者自身の『外套について』2 章もウォルシニイとポンペイを並べる。Tarpeios は『諸国民へ』の並行箇所からの刊本の読み。
- 訳での扱い：訳注は付けない。底本の Pompeios（ポンペイ）で訳し、de suo monte に山の名（ウェスウィウス）は補わない。iam tunc（そのころすでに）は底本にあるので訳す。名前は訳語表に揃えて、ウォルシニイ（24.9 の「ウォルシニイの人々」）、エトルリア（25.14 の Tusci「エトルリア人」）。カンパニアとポンペイはメインが名前の表に足す。年代の食い違いに訳注を付けるかは、訳注の決まり（別の読みや後代の挿入に限る）に照らしてメインが決める。この一覧としては付けないことを勧める。
- 確かめた資料：Oehler 画像 0298（校注 40 章 28 の後半）、0299（本文、校注 29〜33、注 m）。OCR l. 34542、34558–34559、34649–34650、34663–34666、34701–34702。Bindley OCR l. 8022–8023、8044–8047、8052。Mayor OCR l. 24083–24087。

### 40.8 Hannibal apud Cannas per Romanos anulos caedes suas modio metiebatur（指輪で量る）
- 底本（Oehler）：Nemo adhuc Romae deum verum adorabat cum Hannibal apud Cannas per Romanos anulos caedes suas modio metiebatur.
- ほかの読み：Hannibal を Aβ は Hannibal、E は Hanibal と綴る（校注 40 章 34）。per を G・λ・f と Havercamp は欠く（35）。caedes suas を λ・f は caede sua（36）。Bindley の本文は apud Cannas Romanos anulos, caedes suas, modio metiebatur（per がなく、caedes suas を同格に置く。OCR l. 8052–8054）。
- 採る校訂者：注 40 章 n はリウィウス 22 巻 46 章以下、アッピアノス、フロルス、ポリュビオス、キケロ、アウグスティヌス『神の国』3 巻 19 章、オロシウス 4 巻 16 章を挙げる。Mayor は modius（升）で量ることわざ（ユウェナリス 3 巻 220 行など）と、『神の国』3 巻 19 章、オロシウス 4 巻 16 章を挙げる（OCR l. 24092–24096）。
- 読者への影響：小 — per なら「ローマ人の指輪によって自分の殺戮を升で量った」、per がなければ「ローマ人の指輪、つまり自分の殺戮を升で量った」。
- 訳での扱い：訳注は付けない。底本の per で訳す。カンナエは『オクタウィウス』26:3 の表記。ハンニバルはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 34〜36、注 n）。OCR l. 34651–34652、34666–34667、34704–34708。Bindley OCR l. 8052–8054。Mayor OCR l. 24092–24096。

### 40.9 Omnes dei vestri ab omnibus colebantur, cum ipsum Capitolium Senones occupaverant（小さな異読）
- 底本（Oehler）：Omnes dei vestri ab omnibus colebantur, cum ipsum Capitolium Senones occupaverant.
- ほかの読み：ab omnibus を F・G は ab hominibus（校注 40 章 37）。occupaverant は A・B・D・E・F・G、ウィーン写本、エアフルト写本、オクスフォード、Bongars の写本。a〜f と Havercamp は occupaverunt（38）。Bindley の本文は occupaverunt（OCR l. 8055）。
- 採る校訂者：注 40 章 o はリウィウス 5 巻 37 章以下、『神の国』2 巻 22 章、オロシウス 2 巻 19 章を挙げる。Mayor は、アウグスティヌスが（ガリア人がカピトリウムを取ったとき）神々は眠っていたのかと問うことを挙げる（OCR l. 24098–24099）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。カピトリウムは名前の表どおり。セノネスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 37・38、注 o）。OCR l. 34653–34654、34667–34668、34710–34712。Bindley OCR l. 8054–8055。Mayor OCR l. 24098–24099。

### 40.9 Et bene quod … ut iam hoc revincam non ab eis evenire, quia et ipsis evenit（revincere の訳と ab eis）
- 底本（Oehler）：Et bene quod, si quid adversi urbibus accidit, eaedem clades templorum quae et moenium fuerunt, ut iam hoc revincam non ab eis evenire, quia et ipsis evenit.
- ほかの読み：Et bene を c は Est bene（校注 40 章 39）。si quid を F は si aliquid、G は si quidem（40）。urbibus accidit は A・B・E・F・G・f など、D・a〜e と Havercamp は accidit urbibus（41）。eaedem を λ は eadem、a・b は aedium（42）。templorum を a・b は templorumque et（43）。hoc revincam を λ は et hoc revincam、G は hoc revincat（44）。ab eis は A・D・E・F・G、Bongars の写本、エアフルト写本、オクスフォード、ウィーン写本。Aφ・Bφ・a〜f と Havercamp は a deis（「神々から」）、λ は ab his（45）。quia et ipsis evenit を λ は quae et ipsis similia evenerunt（46）。Bindley の本文は Et bene, quod si quid adversi accidit urbibus … non a deis evenire, quia et ipsis evenit で、「そして、これもわたしたちに有利な点だ。もし……」と注する（OCR l. 8055–8058、8085）。
- 採る校訂者：注 40 章 p は Et bene quod に『偶像崇拝について』5 章の注を参照させる。注 q は revincam を convincam, evincam, demonstrem（はっきり示す、証明する）と注し、『魂の証言について』1 章の注を参照させる。Mayor は Et bene quod に 7 章、24 章の用例を挙げ、25 章の終わり近くの「同じ破壊が城壁と神殿にあり、市民と祭司が同じく殺される」を並べる（OCR l. 24101–24111）。
- 読者への影響：小〜中 — revincam の取り方で、「神々から来るのではないことを証明する」か「暴く」かの言い方が変わる。ab eis は、底本でも前の deorum ではなく、文脈から神々（またはその神殿）を指す。
- 訳での扱い：訳注は付けない。revincere は訳語表で「暴く」（1:15、3:12）・「論駁する」（19:14、21:20）とあるが、ここは注 q が demonstrem（証明する）と言い換える。訳語表に足すかはメインが決める。ab eis は「神々から」と補える（a deis の読みを足すのではなく、指すものを補う）。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 39〜46、注 p・q）。OCR l. 34654–34656、34672–34680、34714–34715、34739–34741。Bindley OCR l. 8055–8058、8085–8087。Mayor OCR l. 24101–24111。

### 40.10 Semper humana gens male de deo meruit … inofficiosa eius … non requisivit, sed et alios insuper sibi commentata quos coleret（λ の長い異読とローマ一・二一）
- 底本（Oehler）：Semper humana gens male de deo meruit. Primo quidem ut inofficiosa eius, quem cum intellegeret ex parte, non requisivit, sed et alios insuper sibi commentata quos coleret …
- ほかの読み：Semper を D・a は semper. Et humana、b は Semper enim humana、c は Semper et humana（校注 40 章 47）。inofficiosa eius, quem を c は in officia eius quemcunque、G は in officiosa eius quaecunque（48）。non requisivit sed は A・B・D・E・F・G・a〜f など。λ と Havercamp は non solum non requisivit timendum sed（「恐れるべき方を求めなかったばかりでなく」。49）。alios insuper sibi は A・B・D・E・F・G・a〜f など、λ と Havercamp は alios sibi citius（「もっと早く」。50）。commentata quos coleret は A・B・D・E・F・G など、a は commentaret、b〜f とゴルツェ写本は commentata est quos coleret、λ・Bongars の写本・Havercamp は commenta（Havercamp は commenta est）quos coleret（51）。Bindley の本文は non solum non requisivit timendum, sed et alios sibi citius commenta est quos coleret（λ の読み。OCR l. 8060–8062）。
- 採る校訂者：注 40 章 r は commentari を comminisci（考え出す、こしらえる）の意味とし、プラウトゥス、『肉の復活について』33 章、『諸国民へ』1 巻 8 章を挙げる。Bindley は inofficiosa eius を「彼に対して務めを果たさない」の意味とし、『学説彙纂』の libertus inofficiosus patrono（保護者に務めを果たさない解放奴隷）を挙げ、ローマ一・二一と比べよ、と注する（OCR l. 8089–8090）。Mayor は inofficiosa に属格が付く形を、下の reus と ingratus（40.12）と同じとし、ex parte（部分的に）に『迫害における逃亡について』3 章などを挙げる（OCR l. 24117–24124）。
- 読者への影響：小〜中 — λ の読みでは「恐れるべき方を求めなかったばかりか、もっと早く、拝む別の者たちをこしらえた」になる。底本では「求めなかったうえに、拝む別の者たちまでこしらえた」。
- 訳での扱い：訳注は付けない。底本で訳し、λ の timendum、citius は足さない。commentata は注 r のとおり「こしらえた」。inofficiosa eius、40.12 の rea、ingrata は属格を取る同じ形（Mayor）なので、訳でも並びが見えるようにできる。ローマ一・二一（口語訳「彼らは神を知っていながら、神としてあがめず、感謝もせず」）を思わせるが、引用ではないので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 47〜51、注 r）。OCR l. 34657–34659、34681–34686、34718–34732、34743–34753。Bindley OCR l. 8058–8062、8089–8090。Mayor OCR l. 24117–24124。`node tools/bible.js Rom.1.21`。

### 40.10 innocentiae magistrum et nocentiae iudicem et exactorem（exactor の意味）
- 底本（Oehler）：dehinc quod non inquirendo innocentiae magistrum et nocentiae iudicem et exactorem omnibus vitiis et criminibus inolevit.
- ほかの読み：iudicem を Fulvius Ursinus は vindicem（罰する者）と読む（校注 40 章 52）。omnibus vitiis et criminibus inolevit を b・c は omnibus se vitiis et cerimoniis involvit（「あらゆる悪徳と儀式に身を包んだ」）、a は omnibus vitiis et criminibus incoluit（53）。
- 採る校訂者：Bindley は exactorem を「罰する方」（Avenger）とし、『見世物について』2 章の innocentiae exactor（潔白を求める方）の意味ではない、と注する（OCR l. 8063–8064、8092–8093）。Mayor は innocentiae magistrum に 45 章の初め（完全な師から潔白を教えられた）を、nocentiae に『マルキオン反駁』2 巻 13 章（ほかに例がない語）を、exactorem に『見世物について』2 章の deus exactor innocentiae と『マルキオン反駁』2 巻 13 章の「善の作り手で、しかもそれを求める方でなければ、だれが」を挙げる（OCR l. 24126–24140）。
- 読者への影響：小〜中 — exactor を「（罪を）罰する方」とするか「（潔白を）求める方」とするかで、神の描き方が少し変わる。
- 訳での扱い：訳注は付けない。exactor の訳（罰する方／求める方）はメインが決める。iudex は訳語表どおり「裁き手」、innocentia は「潔白」、crimen は「罪」、vitium は訳語表の「欠陥」（7:9）ではなく、ここは「悪徳」の意味。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 52・53）。OCR l. 34659–34661、34690–34691、34721。Bindley OCR l. 8063–8064、8092–8093。Mayor OCR l. 24126–24140。

### 40.11 Ceterum si requisisset, sequebatur, ut cognosceret requisitum et recognitum observaret（直説法の帰結と、語の連鎖）
- 底本（Oehler）：Ceterum si requisisset, sequebatur, ut cognosceret requisitum et recognitum observaret et observatum propitium magis experiretur quam iratum.
- ほかの読み：sequebatur, ut を d は sequeretur ut、G・c は sequebatur を欠いて et（G は ut）とする（校注 40 章 54）。cognosceret requisitum et recognitum は A・B・D・E・a・b・c、オクスフォード、エアフルト写本。f は recognosceret et recognitum、F・G・c、ウィーン写本、Fulvius Ursinus は recognosceret requisitum et recognitum、d は cognosceret et recognosceret requisitum et recognitum（55）。propitium magis を D・a〜d は magis propitium（56）。Bindley の本文は [sequeretur, ut] cognosceret et recognosceret requisitum, et recognitum observaret … magis propitium（OCR l. 8065–8068）。
- 採る校訂者：Mayor は sequebatur に 41 章の sequitur ut（41.4）と『諸国民へ』1 巻 1 章などを挙げる（OCR l. 24142–24143）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。si requisisset（過去完了の接続法）に直説法の未完了過去 sequebatur が続く、過去の事実に反する仮定の形。本の AGENTS.md の「過去完了の事実に反する仮定は過去の形で訳す」（8:11）に当てるか、「当然そうあるべきこと」の未完了過去（12:7、14:4）に当てるかはメインが決める。requisitum → recognitum → observatum と前の動詞を分詞で受け継ぐ連鎖なので、訳でも「求めた方を知り、知った方を守り、守った方を……」と連鎖が見えるようにできる。
- 確かめた資料：Oehler 画像 0299（本文、校注 40 章 54・55）、0300（本文、校注 56）。OCR l. 34661–34662、34692–34694、34722–34725、34759–34760、34775、34834。Bindley OCR l. 8065–8068。Mayor OCR l. 24142–24143。

### 40.11–40.12 Eundem igitur … Cuius bonis … Illius rea est cuius et ingrata（rea と ingrata）
- 底本（Oehler）：Eundem igitur nunc quoque scire debet iratum quem et retro semper, priusquam Christiani nominarentur. Cuius bonis utebatur ante editis quam sibi deos fingeret, cur non ab eo etiam mala intellegat evenire cuius bona esse non sensit? Illius rea est cuius et ingrata.
- ほかの読み：igitur は A・E・F・G・f、Bongars の写本、エアフルト写本、ウィーン写本。(Aφ Bφ Dφ)・a〜e と Havercamp は ergo（校注 40 章 57）。Cuius bonis を a は Quibus bonis、G は cuius boni（58）。sibi deos を D・E・a〜d、オクスフォード、エアフルト写本は deos sibi（59）。ab eo etiam mala intellegat を F は etiam ab eo mala intelligant（60）。rea est を F とウィーン写本は欠く（61）。cuius et ingrata を λ は cuius bonis ingrata est（「その方の恵みに恩知らずだ」。62）。Bindley の本文は Eundem ergo … deos sibi fingeret, cur non ab eo etiam mala intelligit evenire（intelligit は直説法。Oehler の校注に出ない）… Illius rea est, cujus et ingrata（OCR l. 8069–8074）。
- 採る校訂者：注 40 章 s は「（人類は）その方の前で罪ある者とされた。その方に対して恩知らずの態度を取ったのだから。罪を犯された方が懲らしめる」と言い換え、ingratus が属格を取る形にウェルギリウス『アエネイス』10 巻 666 行の ingratus salutis を挙げる。Mayor も ingrata に属格が付く例を『マルキオン反駁』から挙げる（OCR l. 24149–24151）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。主語は humana gens（女性名詞。rea、ingrata が女性形で受ける）。rea は訳語表の reus（「罪人」、訴えられた者は「訴えられる」と動詞で）に当たるが、ここは注 s のとおり「その方に対して罪ある者」の意味。41.1 の rei publicorum incommodorum（41.1 の項）と訳を揃えるかはメインが決める。retro は 1:7 の注 p のとおり「以前に」。
- 確かめた資料：Oehler 画像 0300（本文、校注 40 章 57〜62、注 s）。OCR l. 34760–34764、34776–34790、34800–34805、34834–34837。Bindley OCR l. 8069–8074。Mayor OCR l. 24149–24151。

### 40.13 ex quo Christianos a deo orbis accepit … deprecatores dei esse coeperunt（a deo と adeo、とりなす者）
- 底本（Oehler）：Et tamen si pristinas clades comparemus, leviora nunc accidunt, ex quo Christianos a deo orbis accepit. Ex eo enim et innocentia saeculi iniquitates temperavit et deprecatores dei esse coeperunt.
- ほかの読み：Et tamen は A・B・F・G・λ・c〜f、ウィーン写本。D・E・a・b、オクスフォード、エアフルト写本は Etiam tamen（校注 40 章 63）。λ は Christianos adeo orbis accepit. Exinde enim（a deo「神から」ではなく adeo「それほどに」。64）。iniquitates を F とウィーン写本は iniquitatem（65）。dei を F とウィーン写本は欠く（66）。Bindley の本文は底本と同じで、deprecatores を「とりなす者たち」とし、1 章の注を参照させる（OCR l. 8076–8079、8095）。
- 採る校訂者：Mayor は Et tamen 以下にアルノビウス 1 巻 5 章（キリストが世に聞かれてから、戦争は増えるどころか減った）を挙げ、deprecatores の用例をキケロ、リウィウス、タキトゥス、キプリアヌスから挙げる（OCR l. 24153–24163）。
- 読者への影響：小 — λ の adeo では「世界がそれほどにキリスト者を受け入れてから」になる。
- 訳での扱い：訳注は付けない。底本の a deo（神から）で訳す。deprecatores dei は「神にとりなす者たち」。主語はキリスト者で、文中に出ていないので補える。innocentia saeculi は「世の中の潔白」（キリスト者の潔白が世にあること）。
- 確かめた資料：Oehler 画像 0300（本文、校注 40 章 63〜66）。OCR l. 34764–34767、34779–34782、34791–34793、34838。Bindley OCR l. 8076–8079、8095。Mayor OCR l. 24153–24163。

### 40.14 Denique cum ab imbribus aestiva hiberna suspendunt（Denique と、夏の天気が冬の雨を止める）
- 底本（Oehler）：Denique cum ab imbribus aestiva hiberna suspendunt et annus in cura est …
- ほかの読み：本文の異読はない。
- 採る校訂者：注 40 章 t は Denique を ut unum afferam, ut uno exemplo fungar（一つ例を挙げれば）と注し、『冠について』3 章の注を参照させる。注 u は aestiva を「つまり夏の雲」と言い換え、キプリアヌス『デメトリアヌスへ』の imbres et pluvias serena longa suspendant と『死について』の imbres nubila serena longa suspendunt（Heraldus）を挙げ、40.2 の si caelum stetit を受けると言う。Oehler はこの節をドイツ語で「一つ挙げれば、夏の天気が冬をその雨から遠ざけ、年の実りが心配されるとき、あなたがたは……」と訳す（注 u と注 v の終わり）。つまり aestiva が主語、hiberna が目的語、ab imbribus が「雨から」。Mayor は Ashton の挙げるセネカ『自然研究』3 巻 27 章 1 節（夏に、しつこい冬が雲を破って大量の水を降らせる）を挙げる（OCR l. 24165–24168）。
- 読者への影響：中 — 主語と目的語の取り方で文の形が変わる。
- 訳での扱い：訳注は付けない。注 u のドイツ語訳どおり「夏の天気が、冬の季節を雨から遠ざけ」の構文で訳す。Denique は注 t のとおり「たとえば」で、1:12 の denique（注 v「一つ例を挙げれば」）と揃える。42.8 の Denique は Oehler が別の意味に取る（42.8 の項）。
- 確かめた資料：Oehler 画像 0300（本文、注 t・u、注 v の終わりのドイツ語訳）。OCR l. 34767–34768、34807–34819、34831、34845–34852。Mayor OCR l. 24165–24168。

### 40.14 vos quidem cotidie pasti … balneis et cauponiis et lupanaribus operantibus, aquilicia Iovi immolatis, nudipedalia populo denuntiatis …（奪格の独立句と、雨乞いの儀式）
- 底本（Oehler）：vos quidem cotidie pasti statimque pransuri, balneis et cauponiis et lupanaribus operantibus, aquilicia Iovi immolatis, nudipedalia populo denuntiatis, caelum apud Capitolium quaeritis, nubila de laquearibus exspectatis, aversi ab ipso et deo et caelo
- ほかの読み：f は cotidie pasti statimque pransuri を欠く（校注 40 章 67）。cauponiis は A・B・F、ウィーン写本。D・E・エアフルト写本は cauponeis、c は caponis、G・a・b・d・e・f は cauponis（68）。operantibus は A・B・D・E・F・G・λ・c・f、ウィーン写本、エアフルト写本、アンブロジアーナ写本、Bongars の写本、Ursinus の本。a・b・d・e は operati（69）。Bindley の本文は balneis et cauponis et lupanaribus operati（「浴場や居酒屋や娼家にいそしんで」。OCR l. 8082–8083）。
- 採る校訂者：注 40 章 v は cauponium の形が、ティロの速記記号、キュリロスの語彙集、Oehler 自身が出した古い語彙集、『学説彙纂』の in cauponio institores に支えられるとする。Oehler のドイツ語訳は「浴場や居酒屋や娼家が営まれているあいだに、ユピテルに雨乞いのいけにえをささげ」で、operantibus を奪格の独立句に取る（注 v の終わり）。同じ注で、aquilicia immolare を「ユピテルから雨を得て、天から引き出すためにいけにえをささげること」とし、フェストゥスの注釈者たちを参照させる。注 w は nudipedalia に、『断食について』16 章（天がこわばり年が乾くと、はだしの行列が告げられ、政務官は紫の衣を脱ぎ、束桿を逆さにする）とペトロニウス 44 章（かつては婦人たちがはだしで、髪をほどき、清い心で丘を登り、ユピテルに水を願った）を挙げる。Bindley は aquilicia を「雨のためのいけにえ」、nudipedalia を「日照りのときに雨を得るために行う、はだしの厳かな行列」とし、nubila de laquearibus exspectatis に 24 章の「祈りながら雲を数え」を挙げる（OCR l. 8097–8099、8133–8136）。Mayor は aquilicia がこことフェストゥスにしか出ないこと、カルタゴでは 23 章の「雨を約束するおとめカエレスティス」、nudipedalia に『断食について』16 章、ペトロニウス 44 章、スエトニウス、ユウェナリスを挙げ、40.14 の構文に 24 章の colat alius deum … nubes numeret orans, alius lacunaria を並べる（OCR l. 24170–24217）。
- 読者への影響：中 — operantibus（奪格の独立句）なら「浴場や娼家が営まれているあいだに」、operati なら「あなたがたが浴場や娼家にいそしみながら」。
- 訳での扱い：訳注は付けない。底本の operantibus を、Oehler のドイツ語訳どおり奪格の独立句として訳す。aquilicia は「雨乞いのいけにえ」、nudipedalia は「はだしの行列」の意味で訳せる（語を音で写すかはメインが決める）。immolare は訳語表の hostia（いけにえ）に合わせられる。laquearia は 24:6 の lacunaria の既訳「天井の格間」と揃えられる。
- 確かめた資料：Oehler 画像 0300（本文、校注 40 章 67〜69、注 v・w）。OCR l. 34768–34772、34783–34797、34821–34872。Bindley OCR l. 8081–8083、8097–8099、8104–8105、8133–8136。Mayor OCR l. 24170–24217。

### 40.14 nos vero ieiuniis aridi … in sacco et cinere volutantes invidia caelum tundimus, deum tangimus（断食と、天をたたく）
- 底本（Oehler）：nos vero ieiuniis aridi et omni continentia expressi, ab omni vitae fruge dilati, in sacco et cinere volutantes invidia caelum tundimus, deum tangimus …
- ほかの読み：expressi を a・b は aspersi（校注 40 章 70）。fruge を F とウィーン写本は frugi（71）。volutantes を B・G は voluntates、A は volvitantes（72）。invidia caelum を F は membra caelum、Rhenanus は inedia caelum（「飢えによって」。73）。f は deum tangimus を欠く（74）。
- 採る校訂者：注 40 章 x は、そうした困難のときに、神がイスラエル人に与えた形に従って民に断食が命じられたとし、『断食について』16 章（監督たちは全会衆に断食を命じるのが常だ）を引く。注 y は expressi を「搾り機にかけたように」とし、Fr. Junius のギリシア語訳 ἐκπεπιεσμένοι と、Rigaltius の「反対の情念、つまり情欲にほどけた者に対して、節制に搾られた者と言う」を挙げる。注 z は Rigaltius の「食べ物を夕方か翌日まで延ばして」を引く。注 zz は invidia caelum tundimus を、ヨセフス『ユダヤ古代誌』12 巻の δυσωπῆσαι θεόν（神を恥じ入らせる、しつこく願って動かす）や、バシレイオスの言葉と同じ言い方とし、invidia caelum tundere・pulsare は invidiam facere（相手に気まずさを負わせる）と同じ、と言う。『断食について』16 章の invidiam supplicem（嘆願による気まずさ。ある植民市では毎年、荒布をまとい灰をかぶって、偶像に嘆願の訴えを突きつける）、スタティウス『シルウァエ』5 巻 5 章（憎しみで神々をたたこうか）、偽キプリアヌス『ソドム』20 行などを挙げる（Heraldus と Oehler）。Mayor は ieiuniis aridi に『断食について』1 章・13 章、『スカプラへ』4 章（わたしたちのひざまずきと断食で日照りが退けられたことがないか）、キプリアヌスを挙げ、expressi を「縮んだ、しなびた、やつれた」とし、in sacco et cinere にテルトゥリアヌスの用例（『悔い改めについて』9・11 章など）を挙げる。Wissowa の版の『断食について』16 章は写本の invidiam を inediam と直している、と注する（OCR l. 24240–24325）。
- 読者への影響：小〜中 — invidia caelum tundimus は、注 zz のとおり「（わたしたちの苦しみで）天に気まずさを負わせ、しつこく願って動かす」の意味で、字義の「ねたみ」では通らない。
- 訳での扱い：訳注は付けない。invidia は注 zz の意味（嘆願で天を動かす）で訳し、「ねたみ」にしない。訳し方はメインが決める。expressi は注 y・Mayor の「やつれた」、dilati は注 z の「（食事を）延ばして」。in sacco et cinere volutantes とエレミヤ六・二六との近さは末尾の「未確認」に書いた。
- 確かめた資料：Oehler 画像 0300（本文の初め）、0301（本文、校注 40 章 70〜74、注 x・y・z・zz）。OCR l. 34772、34881–34883、34898–34903、34928–34995。Mayor OCR l. 24240–24325。

### 40.14 et cum misericordiam extorserimus, Iupiter honoratur（λ の「神は軽んじられる」）
- 底本（Oehler）：et cum misericordiam extorserimus, Iupiter honoratur.
- ほかの読み：λ と Havercamp は honoratur a vobis, deus negligitur（「あなたがたによってユピテルがあがめられ、神は軽んじられる」。校注 40 章 75）。Bindley の本文は λ の読み（Jupiter honoratur a vobis, Deus negligitur。OCR l. 8108–8109）。
- 採る校訂者：Mayor は extorserimus を「絞り取る」と注する（OCR l. 24327）。
- 読者への影響：小〜中 — λ では皮肉が言葉で示される。底本でも、わたしたちが神から絞り取ったあわれみの手柄がユピテルのものになる、という皮肉は同じ。41.1 の写本の章題「神は軽んじられ、像は拝まれる」は、λ のこの語と 41.1 の deus spernitur, statuae adorantur に近い。
- 訳での扱い：訳注は付けない。底本で訳し、λ の a vobis, deus negligitur は足さない。皮肉が読めるように、「（それなのに）あがめられるのはユピテルです」の形にできる。honorare の訳（あがめる、など）はメインが決める。
- 確かめた資料：Oehler 画像 0301（本文、校注 40 章 75）。OCR l. 34883、34904。Bindley OCR l. 8108–8109。Mayor OCR l. 24327。

### 41.1 Vos igitur inportuni rebus humanis, vos rei publicorum incommodorum inlices semper（rei と inlices）
- 底本（Oehler）：Vos igitur inportuni rebus humanis, vos rei publicorum incommodorum inlices semper, apud quos deus spernitur, statuae adorantur.
- ほかの読み：rei を λ は欠き、G は regi（校注 41 章 1）。inlices は A・B・E・F・G・λ・f、ウィーン写本、エアフルト写本、オクスフォード、アンブロジアーナ写本。D は illicet、a〜e と Havercamp は vos malorum illices（「あなたがたこそ、災いを招き寄せる者」。2）。quos を a は vos（3）。Bindley の本文は vos rei publicorum incommodorum, vos malorum illices semper（OCR l. 8114–8115）。
- 採る校訂者：注 41 章 a は、この句をドイツ語で「あなたがたこそ、公の災いをいつも招き寄せる者として訴えられている」と訳す。つまり rei を「訴えられた者、罪ある者」（reus）、inlices を「招き寄せる者」に取る。Mayor は inlices に『悔い改めについて』9 章の misericordiae inlicem などを挙げ、41.1 全体にキプリアヌス『デメトリアヌスへ』5 章（災いが起こるのは、あなたがたの神々が拝まれないからではなく、神が拝まれないからだ）、アルノビウス 1 巻 2 章、ラクタンティウス 5 巻 8 章を挙げる（OCR l. 24333–24382）。
- 読者への影響：小〜中 — 40.1 の「あらゆる公の災いはキリスト者のせいだ」を言い返す文。rei の取り方で、「災いの責めを負うべき者」か「訴えられている者」かの言い方が変わる。
- 訳での扱い：訳注は付けない。注 a に従い「公の災いをいつも招き寄せる者として、罪ある者はあなたがたです」の意味で訳す。reus の訳は訳語表（罪人、または「訴えられる」）と 40.12 の rea（前の項）に揃えるかをメインが決める。spernitur（軽んじられる）と adorantur（拝まれる。訳語表の adorare）。
- 確かめた資料：Oehler 画像 0301（本文、校注 41 章 1〜3、注 a）。OCR l. 34885–34887、34963–34964、34996–34999。Bindley OCR l. 8114–8115。Mayor OCR l. 24333–24382。

### 41.1・41.5・41.6 a meritis Christianorum／vestris meritis（meritum は「罪」）
- 底本（Oehler）：41.1 aut nae illi iniquissimi, si propter Christianos etiam cultores suos laedunt, quos separare deberent a meritis Christianorum. 41.5 quia si quid adversi infligitur, vestris meritis deputatur. 41.6 … quos separare deberent a meritis Christianorum?
- ほかの読み：41.1 の Etenim を λ と Havercamp は Utique enim（校注 41 章 4）。aut nae を λ は Sed ne、D・E・a・b、エアフルト写本、オクスフォードは an ne、Latinius は Annon（5）。si propter を λ は qui propter（6）。suos を F・G は欠く（7）。separare を D は superare（quo superare）、A は seperare と綴る（8）。41.5 の vestris meritis を λ と Havercamp は vestris id meritis、c は veris meritis（校注 23）。Bindley の本文は 41.1 が Utique enim … aut nae illi iniquissimi … quos separare deberent a meritis Christianorum、41.5 が vestris id meritis deputatur（OCR l. 8116–8119、8151–8152）。
- 採る校訂者：注 41 章 c は meritis を「教会の書き手の用法で、meritum は peccatum（罪）の意味」とし、アルノビウスについての Hildebrand の注を参照させる。Bindley は 41.5 を「災いが加えられても、それはあなたがたの悪行のせいにされる」と言い換える（OCR l. 8175–8178）。
- 読者への影響：中 — meritum を「功績」と取ると意味が逆になる。注 c のとおり「罪（とその報い）」の意味。
- 訳での扱い：訳注は付けない。meritis は注 c のとおり「罪」の意味で訳す。41.1 と 41.6 の a meritis Christianorum（キリスト者の罪の報いから引き離すべき）と、41.5 の vestris meritis（あなたがたの罪のせいにされる）の訳を揃えるかはメインが決める。nae は「まことに」。
- 確かめた資料：Oehler 画像 0301（本文、校注 41 章 4〜8）、0302（本文、校注 23、注 c）。OCR l. 34887–34890、34922–34924、34965–34966、35020、35039–35040、35059–35063。Bindley OCR l. 8116–8119、8151–8152、8175–8178。

### 41.2 Hoc, inquitis, et in deum vestrum repercutere est, si quod et ipse patiatur …（相手の言い分）
- 底本（Oehler）：Hoc, inquitis, et in deum vestrum repercutere est, si quod et ipse patiatur, propter profanos etiam suos cultores laedi. Admittite prius dispositiones eius, et non retorquebitis.
- ほかの読み：si quod は A・B・D・E・F（quid）・G、ウィーン写本、エアフルト写本。a〜e は si quidem、f は quod、λ と Havercamp は qui（校注 41 章 9）。patiatur を λ・a〜e は patitur（10）。etiam suos cultores は A・E、ウィーン写本、オクスフォード、エアフルト写本。G は etiam eius cultores、F は cultores suos etiam cultores、B は etiam cultores、D・a〜f と Havercamp は etiam cultores suos（11）。Bindley の本文は qui et ipse patiatur propter profanos etiam cultores suos laedi（OCR l. 8120–8121）。
- 採る校訂者：Mayor は repercutere（はね返す）と retorquere（投げ返す）の用例を挙げる（OCR l. 24389–24401）。Bindley は 41.6 の注で、キリスト者の苦しみが彼らに不利な論として使われたことを、この Hoc inquitis に結びつける（l. 8188–8189）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。本の AGENTS.md のとおり、言い分を「」に入れ、「と、あなたがたは言います」と受ける。「」の範囲は Hoc … laedi. まで。Admittite から著者の答え。
- 確かめた資料：Oehler 画像 0301（本文、校注 41 章 9・10）、0302（本文、校注 11）。OCR l. 34890–34891、34917–34918、35008–35009、35030–35031。Bindley OCR l. 8120–8122、8188–8189。Mayor OCR l. 24389–24401。

### 41.3 Qui enim semel aeternum iudicium destinavit … non praecipitat discretionem … Aequalis est interim（毒麦のたとえとマタイ五・四五）
- 底本（Oehler）：Qui enim semel aeternum iudicium destinavit post saeculi finem, non praecipitat discretionem, quae est condicio iudicii, ante saeculi finem. Aequalis est interim super omne hominum genus et indulgens et increpans.
- ほかの読み：increpans を c・d は increpitans、λ は incessens（校注 41 章 12）。
- 採る校訂者：Bindley は non praecipitat discretionem に、マタイ一三・二八〜三〇、四九（毒麦のたとえ）と二五・三二を、Aequalis est interim にマタイ五・四五を挙げる。praecipitare を「早すぎるのに急ぐ」とし、22 章の注を参照させる（OCR l. 8138–8142）。Mayor は non praecipitat に、神は永遠なので忍耐深いというラクタンティウス『神の怒りについて』20 章、アウグスティヌス『神の国』1 巻 8 章を、discretionem に『神の国』18 巻 54 章を挙げる（OCR l. 24403–24408）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。semel は訳語表どおり「きっぱりと、一度かぎりで」。マタイ一三・三〇（口語訳「収穫まで、両方とも育つままにしておけ」）とマタイ五・四五（口語訳「悪い者の上にも良い者の上にも、太陽をのぼらせ」）を思わせるが、引用ではないので『』と出典は付けない。discretio は「（善い者と悪い者を）分けること」。interim はここでは「それまでのあいだ」の意味。
- 確かめた資料：Oehler 画像 0302（本文、校注 41 章 12）。OCR l. 35009–35012、35032。Bindley OCR l. 8122–8126、8138–8142。Mayor OCR l. 24403–24408。`node tools/bible.js Matt.13.30 Matt.5.45`。

### 41.4 Quia haec ita didicimus apud ipsum … nobis, si forte, in admonitionem, vobis in castigationem（si forte と小さな異読）
- 底本（Oehler）：Communia voluit esse et commoda profanis et incommoda suis, ut pari consortio omnes et lenitatem eius et severitatem experiremur. Quia haec ita didicimus apud ipsum, diligimus lenitatem, metuimus severitatem, vos contra utramque despicitis: et sequitur ut omnes saeculi plagae nobis, si forte, in admonitionem, vobis in castigationem a deo obveniant.
- ほかの読み：et commoda の et を a・b・c・e は欠く（校注 41 章 13）。experiremur を G は experirer（14）。Quia haec ita didicimus を F は Quia hoc ita didicimus、G・b〜e、ゴルツェ写本、Pamelius の写本のいくつかは Quia（c は Qui）aequitatem didicimus、λ は Qui autem ita discimus（15）。utramque を G・c は utrumque、A は despicitis を dispicitis と綴る（16）。et sequitur を D・E・a・b・c、エアフルト写本は etiam sequitur（17）。nobis si forte は A・B・D（vobis）・E・F・G・λ・c・d・f など、a・b・e は nobis forte（18）。D は admonitionem nobis、λ は admonitionem a deo obveniunt, vobis（19）。obveniant をオクスフォードは eveniant（20）。
- 採る校訂者：注 41 章 b は si forte に『冠について』5 章の注を参照させる。Bindley は si forte を「もしわたしたちがそれを感じるとしても」と言い換え、16 章の注を参照させる（OCR l. 8144）。Mayor は si forte に 38 章の終わりと 43 章の初めを、sequitur ut に 40 章（40.11）を挙げる（OCR l. 24412–24414）。
- 読者への影響：小〜中 — si forte の取り方（「ひょっとすると」「もしそうだとしても」）で、キリスト者にも災いが及ぶことを認める度合いが変わる。
- 訳での扱い：訳注は付けない。si forte の既訳は、16:7「仮に十字架を拝むとしても」、16:9「仮にそうなら」、20:4・23:16「ひょっとすると」、38:4「もし損だとすればですが」と分かれている。ここは Bindley の言い換え（もし感じるとしても）が 38:4 の言い方に近い。どれに揃えるかはメインが決める。
- 確かめた資料：Oehler 画像 0302（本文、校注 41 章 13〜20、注 b）。OCR l. 35012–35018、35032–35038、35052–35053。Bindley OCR l. 8126–8131、8144。Mayor OCR l. 24412–24414。

### 41.5 Atquin nos nullo modo laedimur; inprimis quia nihil nostra refert in hoc aevo nisi de eo quam celeriter excedere（フィリピ一・二三）
- 底本（Oehler）：Atquin nos nullo modo laedimur; inprimis quia nihil nostra refert in hoc aevo nisi de eo quam celeriter excedere, dehinc, quia si quid adversi infligitur, vestris meritis deputatur.
- ほかの読み：Atquin を F・a・b・c は Atqui（校注 41 章 21）。F とウィーン写本は nihil nostra（F は nostra nil）refert in hoc aevo iussi de eo（22）。vestris meritis は 41.1 の項。
- 採る校訂者：Bindley は「第一に、わたしたちはこの世に、できるだけ早くそこを去ること以外の関心がないから」と言い換え、フィリピ一・二三、コロサイ三・二、『妻へ』1 巻 5 章、キプリアヌス『死について』を挙げる（OCR l. 8175–8184）。Mayor は excedere に『見世物について』28 章（世を出て主のもとに受け入れられることが、使徒と同じわたしたちの願い）、『祈りについて』5 章、『忍耐について』9 章（使徒の「去ってキリストと共にいたい」）を挙げ、primo … dehinc と inprimis … dehinc の並びを 40 章（40.10）と比べる（OCR l. 24418–24434）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Atquin は本の AGENTS.md の文型どおり「しかし」。フィリピ一・二三（口語訳「この世を去ってキリストと共にいること」）を思わせるが、引用ではないので『』と出典は付けない。inprimis … dehinc は「第一に……次に」で、40.10 の primo … dehinc と揃えられる。
- 確かめた資料：Oehler 画像 0302（本文、校注 41 章 21・22）。OCR l. 35018–35020、35038–35039。Bindley OCR l. 8149–8152、8175–8184。Mayor OCR l. 24418–24434。

### 41.6 Sed etsi aliqua nos quoque praestringunt … laetamur magis recognitione divinarum praedicationum（預言の成就と小さな異読）
- 底本（Oehler）：Sed etsi aliqua nos quoque praestringunt ut vobis cohaerentes, laetamur magis recognitione divinarum praedicationum, confirmantium scilicet fiduciam et fidem spei nostrae.
- ほかの読み：Sed etsi を F は Sed si（校注 41 章 24）。quoque を c は欠く（25）。praestringunt は Aβ・E・F、ウィーン写本、エアフルト写本。(Aφ B D)・G・a〜f は perstringunt（26）。praedicationum を c は praedictionum（27）。confirmantium scilicet fiduciam et fidem spei nostrae を λ は confirmamur: ut scilicet fiduciam et fidem spei nostrae agnoscentes. Iam vero si ab his molitis と読み、G は recognitiones …… confirmantes（28）。Bindley の本文は perstringunt（OCR l. 8152–8156）。
- 採る校訂者：注 41 章 d は、同じ反論にアレクサンドリアのクレメンス『ストロマテイス』4 巻がまったく同じ仕方で答える（神がわたしたちを顧みるなら、なぜ迫害され殺されるのか、と人は言うが、わたしたちは、主がわたしたちが苦難に陥ることを望んだのではなく、御名のために迫害されることを預言として前もって告げたのだと考える）とし、ラクタンティウスなども同じ、と言う（Heraldus）。Mayor は p. 148 の一覧で「p. 120 l. 24 perstringunt (?)」とし、疑問符つきで perstringunt を好む。Mayor の注は 31 章の終わり（帝国が揺さぶられると、わたしたちもどこかで災いに遭う）と 20 章、キプリアヌス『死について』2 章を挙げる（OCR l. 24436–24443）。Bindley も 31 章を挙げ、クレメンス『ストロマテイス』4 巻 11 章とセネカ『摂理について』を挙げる（l. 8186–8196）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。praedicationes は訳語表の praedicare（預言として）「告げ知らせる」に揃えられる。scilicet は訳語表どおり「つまり」。ut vobis cohaerentes は「あなたがたと（同じ世に）つながっている者として」。
- 確かめた資料：Oehler 画像 0302（本文、校注 41 章 24〜28、注 d）。OCR l. 35021–35023、35040–35043、35067–35071。Bindley OCR l. 8152–8156、8186–8196。Mayor 画像 0172（p. 148）。Mayor OCR l. 24436–24443。

### 41.6 Sin vero … in dolore Christianorum iuvare et adserere debuerant, quos separare deberent a meritis Christianorum?（終わりの繰り返し）
- 底本（Oehler）：Sin vero ab eis quos colitis omnia vobis mala eveniunt nostri causa, quid colere perseveratis tam ingratos, tam iniustos, qui magis vos in dolore Christianorum iuvare et adserere debuerant, quos separare deberent a meritis Christianorum?
- ほかの読み：Sin は A・B・F・G・d、ウィーン写本、Pamelius の写本のいくつか。D・E・a・b・c・e・f、オクスフォード、エアフルト写本は Si（校注 41 章 29）。F とウィーン写本は omnia mala vobis eveniunt、λ は omnia vobis male veniunt（30）。quid colere を λ は cur colere eos（31）。dolore は A・B・E・F・G・d、エアフルト写本、ウィーン写本、Pamelius の写本のいくつか。D・a・b・c・e・f と Havercamp は dolorem（32）。adserere を F は assistere（33）。quos separare deberent a meritis Christianorum は A・B・D・E・F・G・a〜e、ウィーン写本、アンブロジアーナ写本、オクスフォード、エアフルト写本にあり、λ・f と Havercamp は欠く（34）。Bindley の本文は Si vero … in dolorem Christianorum juvare et asserere debuerant?（最後の句がない。OCR l. 8156–8160）。
- 採る校訂者：Oehler は写本の大勢に従って最後の句を本文に置く（校注 34）。この句は 41.1 の終わりと同じ語の並び。
- 読者への影響：小〜中 — 41.1 と同じ句を繰り返す形。in dolore なら「キリスト者の苦しみのときに」、in dolorem なら「キリスト者の苦しみとなるように」。
- 訳での扱い：訳注は付けない。底本で訳し、41.1 と同じ句なので訳も揃える。debuerant（直説法の過去完了で、本来すべきだったこと）の訳し方は、本の AGENTS.md の「当然そうあるべきことを言う直説法の未完了過去」（12:7、14:4。現在の「〜はずです」）に当てるかをメインが決める。
- 確かめた資料：Oehler 画像 0302（本文、校注 41 章 29〜34）。OCR l. 35023–35027、35044–35049。Bindley OCR l. 8156–8160。

### 42.1 Sed alio quoque iniuriarum titulo postulamur, et infructuosi in negotiis dicimur（役に立たないという責め）
- 底本（Oehler）：Sed alio quoque iniuriarum titulo postulamur, et infructuosi in negotiis dicimur. Quo pacto homines vobiscum degentes, eiusdem victus, habitus, instructus, eiusdem ad vitam necessitatis?
- ほかの読み：quoque を λ は adhuc（校注 42 章 1）。in negotiis を λ は negotiis、G・c、オクスフォードは in negotio（2）。
- 採る校訂者：注 42 章 a は、これが最後の非難で、キリスト者は離れて別に暮らし、他の人と働きを分け合わないので、人類にとって役に立たないとされた、と言う。フィロストラトス『アポロニオス伝』で、エウフラテスが同じことをユダヤ人について言う箇所（ユダヤ人はローマ人だけでなく、すべての人から離れている。交わらない暮らしを見いだし、人と食卓も献酒も祈りも犠牲も共にしない）を挙げる（Heraldus）。Bindley はこれを三つ目の非難とし、2 章の注を参照させる。titulo に 44 章の注を参照させる（OCR l. 8198–8201）。Mayor は 37 章、『ディオグネートスへの手紙』5 章、ミヌキウス・フェリクス 8 章 4 節（隠れて光を避ける民で、公の場では黙り、隅でしゃべる）、タキトゥス『年代記』15 巻 44 章の「人類への憎しみ」を、世を避ける人嫌いの意味に解する Zeller の説、スエトニウス『ドミティアヌス伝』15 章（フラウィウス・クレメンスの「この上なく軽蔑すべき怠惰」）を挙げる（OCR l. 24474–24518）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。titulus は 1:5 と 39:21 の既訳「名目」に揃えられる。infructuosus は「役に立たない」「実りをもたらさない」。42.2 の fructus（実り）と、43 章の fructus との言葉遊びが見えるようにできる。
- 確かめた資料：Oehler 画像 0303（本文、校注 42 章 1・2、注 a）。OCR l. 35077–35079、35104、35113–35128、35169。Bindley OCR l. 8165–8170、8198–8201。Mayor OCR l. 24474–24518。

### 42.1 Neque enim Brachmanae aut Indorum gymnosophistae sumus, silvicolae et exules vitae（インドの賢者たち）
- 底本（Oehler）：Neque enim Brachmanae aut Indorum gymnosophistae sumus, silvicolae et exules vitae.
- ほかの読み：Brachmanae を Aβ は brahmanae、E とエアフルト写本は bracmane、F は bragmanni、G は brabiant と綴る（校注 42 章 3）。
- 採る校訂者：注 42 章 b は「すぐれた箇所」とし、わたしたちはバラモンや裸の賢者のように離れて森に住むのではなく、あなたがたと共に暮らし、同じ食べ物と同じ暮らし方を用いる、と言い換える。silvicolae とバラモンを呼ぶのは、ストラボン 15 巻のとおり、彼らが町の前の森に住んでいたからだが、むしろ、インドの哲学者のもう一つの一派で、ὑλόβιοι（森に住む者）と呼ばれたサルマネスを指すのかもしれない、と言う。アレクサンドリアのクレメンス『ストロマテイス』1 巻は、インドの哲学者をバラモンとサルマネスに分け、その一部を ἀλλόβιοι（町にも住まず、屋根も持たず、木の皮をまとう者）と呼ぶ、とし、「確かに ἀλλόβιοι は exules vitae（暮らしから追われた者）だ」と言う（Heraldus）。そのほかディオドロス 17 巻、アッリアノス、プリニウス 6 巻 21 章、アウグスティヌス『神の国』4 巻 16 章などを挙げる。Mayor はフィロストラトス、『マルキオン反駁』1 巻 18 章、『偶像崇拝について』14 章（使徒は世から出て行けとは言わない。共に生きるのは許されるが、共に罪を犯すのは許されない）、クレメンス『ストロマテイス』、『ディオグネートスへの手紙』5 章（キリスト者は土地でも言葉でも習慣でも他の人と分かれていない）、『諸国民へ』1 巻 8 章の exsules vocis humanae を挙げる（OCR l. 24530–24621）。
- 読者への影響：小〜中 — 名前の訳し方。
- 訳での扱い：訳注は付けない。Brachmanae（バラモン）、gymnosophistae（インドの裸の賢者たち）の表記はメインが名前の表に足す。silvicolae は「森に住む者」、exules vitae は注 b のとおり「（ふつうの）暮らしから追われた者」の意味。
- 確かめた資料：Oehler 画像 0303（本文、校注 42 章 3、注 b）。OCR l. 35080–35081、35099–35100、35130–35145、35183–35201。Mayor OCR l. 24530–24621。

### 42.2 Meminimus gratiam debere nos deo, domino, creatori … plane temperamus, ne ultra modum aut perperam utamur（三つの呼び名と ne／nec）
- 底本（Oehler）：Meminimus gratiam debere nos deo, domino, creatori: nullum fructum operum eius repudiamus: plane temperamus, ne ultra modum aut perperam utamur.
- ほかの読み：debere nos は A・B・F・G・f、ウィーン写本。D・E・a〜e、エアフルト写本、オクスフォードは nos debere（校注 42 章 4）。deo domino は A・B・D・E・F・G・f など、a〜e は domino deo（5）。ne は a〜f と Havercamp で、写本はすべて nec（6）。utamur を Aφ・B・D・E、エアフルト写本は mutamur（7）。Bindley の本文は Meminimus gratiam nos debere Deo Domino Creatori … ne ultra modum aut perperam utamur（OCR l. 8173–8174、8206–8208）。
- 採る校訂者：注 42 章 c は「こう言うのは、彼が挙げたあの賢者たちが、多くのもの、たとえばぶどう酒と、命あるものすべてを断っていたからだ」とし、クレメンス『ストロマテイス』3 巻（バラモンは命あるものを食べず、ぶどう酒も飲まない）を引く（Heraldus）。Bindley は nullum fructum … repudiamus を「神のわざのどれも、正しく楽しむことを拒まない」とし、マニ教に似た二元論を持つ異端の派があったことを、クレメンス『ストロマテイス』3 巻 6 章と『マルキオン反駁』1 巻 14 章で示す（OCR l. 8230–8233）。
- 読者への影響：小 — Oehler は写本のすべてが nec のところで、刊本の ne を本文に置く。意味は「行き過ぎたり、誤った使い方をしたりしないように」で変わらない。
- 訳での扱い：訳注は付けない。deo, domino, creatori は底本の区切りどおり三つの呼び名（神、主、創造者）として訳せる。dominus は訳語表どおり「主」。第一テモテ四・四との近さは末尾の「未確認」に書いた。
- 確かめた資料：Oehler 画像 0303（本文、校注 42 章 4〜7、注 c）。OCR l. 35081–35083、35101、35105、35150–35151、35173–35175、35203–35211。Bindley OCR l. 8173–8174、8206–8208、8230–8233。

### 42.2–42.3 cohabitamus in hoc saeculo. Navigamus … et mercatus proinde miscemus, artes, opera nostra publicamus usui vestro（何を miscemus するか）
- 底本（Oehler）：Itaque non sine foro, non sine macello, non sine balneis, tabernis, officinis, stabulis, nundinis vestris ceterisque commerciis cohabitamus in hoc saeculo. Navigamus et nos vobiscum et militamus et rusticamur et mercatus proinde miscemus, artes, opera nostra publicamus usui vestro.
- ほかの読み：Itaque を F とウィーン写本は Ita（校注 42 章 8）。in hoc saeculo は A・B・D・E・G・a〜e、オクスフォード、エアフルト写本、ウィーン写本。F は in hoc saeculum、λ・f と Havercamp は hoc saeculum（9）。vobiscum を λ・f は vobiscum, et vobiscum（10）。mercatus は A・B・F・E、エアフルト写本、ウィーン写本、オクスフォード、Bongars の写本で、Havercamp の版も mercatus とし、Salmasius『利息について』p. 660 がこれをよしとした。D・G・λ・a〜f は mercamur（11）。opera nostra を λ・f と Havercamp は operas nostras（12）。Bindley の本文は et rusticamur, et mercamur; proinde miscemus artes, operas nostras publicamus usui vestro（「商いをする。同じく技を交わし、わたしたちの働きを、あなたがたの用に公にする」。OCR l. 8211–8213）。
- 採る校訂者：注 42 章 d は「mercatus を交わす、あるいは artes をも交わす、はギリシア語の言い方」とし、トゥキュディデス 1 巻 2 章（商いがなく、陸でも海でも互いに恐れずに交わることがなかった）を引く。続けて、この事柄（商い）については昔のキリスト者のあいだで考えが分かれていた、と言い、Salmasius『利息について』p. 660 を参照させる（Heraldus。注 d は p. 273〜274）。Bindley は militamus に 38 章の注を参照させ、後の『外套について』5 章と『冠について』11 章では、洗礼の誓いと相いれない誓いを伴うとして兵役を退けている、と注する（OCR l. 8235–8237）。Mayor も militamus に長い注を付け、37 章、『偶像崇拝について』19 章（神の誓いと人の誓いは合わない）、『冠について』11 章などを挙げる（OCR l. 24634–24681）。
- 読者への影響：中 — 底本では mercatus … miscemus（商いを交わす）で一まとまりになり、artes, opera nostra が publicamus の目的語になる。mercamur の読みでは、miscemus の目的語が artes になる。注 d は artes も miscere の目的語になりうると言う。
- 訳での扱い：訳注は付けない。底本の区切り（mercatus proinde miscemus, artes, opera nostra publicamus）で、「同じく商いを交わし、技とわたしたちの働きを、あなたがたの用に差し出す」の形にできる。artes を miscemus と publicamus のどちらに掛けるかはメインが決める。militamus（兵役に就く）は、ほかの著作との違いに訳注は付けない。cohabitamus in hoc saeculo は「この世で共に暮らす」。
- 確かめた資料：Oehler 画像 0303（本文、校注 42 章 8〜12、注 d）、0304（注 d の続き）。OCR l. 35083–35091、35107–35110、35152–35162、35175–35180、35213–35215、35252–35257。Bindley OCR l. 8208–8213、8235–8237。Mayor OCR l. 24634–24681。

### 42.3–42.6 Quomodo infructuosi videmur … Sed si caerimonias tuas non frequento（二人称単数への切り替え）
- 底本（Oehler）：Quomodo infructuosi videmur negotiis vestris, cum quibus et de quibus vivimus, non scio. Sed si caerimonias tuas non frequento, attamen et illa die homo sum.（42.5 の de copiis tuis、Quid tua interest も単数。42.7 の inquitis で複数に戻る）
- ほかの読み：videmur は A・B・D・E・F・G、エアフルト写本。a〜f と Havercamp は videamur（校注 42 章 13）。non scio. Sed si は A・B・D・E・F・G・a・c〜f など、λ は nescio, et si、b は non scio. Sed（14）。et illa die の et を D・a・b・c・e は欠く（15）。Bindley の本文は videamur … Sed si caeremonias tuas non frequento（OCR l. 8213–8215）。
- 採る校訂者：Mayor は Quomodo … videmur, non scio の直説法を、21 章の用例と並べる（OCR l. 24685–24686）。caerimonias tuas に、Mayor は『女性の装いについて』2 巻 11 章（あなたがたは神殿も見世物も異教徒の祭りも巡らない）を挙げる（l. 24688–24689）。
- 読者への影響：小 — ここから 42.6 まで、著者は一人の異教徒に「あなた」と呼びかける形になり、42.7 の inquitis で「あなたがた」に戻る。
- 訳での扱い：訳注は付けない。本の AGENTS.md の「二人称単数は「あなた」とし、「あなたがた」と分ける」に従う。42.4〜42.6 の一人称単数（frequento、homo sum、lavor、discumbo、emo）と、42.6 の一人称複数（novimus、convenimus、emimus）の切り替えも、訳で「わたし」「わたしたち」と分けられる。caerimoniae は訳語表どおり「儀式」。
- 確かめた資料：Oehler 画像 0304（本文、校注 42 章 13〜15）。OCR l. 35224–35226、35240、35287–35288、35302–35303。Bindley OCR l. 8213–8216。Mayor OCR l. 24685–24689。

### 42.4 Non lavor diluculo Saturnalibus … quae mihi et calorem et sanguinem servet; rigere et pallere post lavacrum mortuus possum（夜明けの湯あみ／夜の湯あみ）
- 底本（Oehler）：Non lavor diluculo Saturnalibus, ne et noctem et diem perdam, attamen lavor honesta hora et salubri, quae mihi et calorem et sanguinem servet; rigere et pallere post lavacrum mortuus possum.
- ほかの読み：λ・f と Havercamp は Non lavo sub noctem Saturnalibus（「サトゥルナリア祭に、夜の近くに湯あみしない」。校注 42 章 16）。attamen lavor を f と Havercamp は attamen lavo et debita hora、λ は sed lavo et debita hora（「しかるべき時刻に」。17）。et（mihi et calorem）を F とウィーン写本は欠く（18）。calorem は A・B・D・E・F・a・d・e・f、ウィーン写本、オクスフォード、エアフルト写本、ガンの写本、エルノンの写本、ヴァティカンの写本の一つ。G・b・c は colorem（「顔色」。19）。rigere を λ は frigere（20）。Bindley の本文は Non lavo sub noctem Saturnalibus … attamen lavo et debita hora et salubri, quae mihi et calorem et sanguinem servet（OCR l. 8216–8219）。
- 採る校訂者：注 42 章 e は、祭りのときには早い時刻の宴に行ったので、それだけ早く湯あみしなければならなかった、浴場は宴の前に行くものだった、また死者も洗われた、だから著者は「湯あみの後にこわばり青ざめるのは、死んでからでよい」と言い足す、とする。「わたしたちは時ならぬ時刻に湯あみしてこわばりと青白さを招くことはしない。血と顔色（colorem）を保つ、まともで健やかな時刻に湯あみする」と言い換える（Heraldus）。Bindley は、サトゥルナリア祭は 12 月 17 日に始まり、salubri は寒い季節に冷えを招く危険を言う、と注する（OCR l. 8239–8241）。Mayor は rigere et pallere を「真冬の湯あみでこわばり青ざめる」とし、死者を洗う習いにエンニウスと使徒行伝九・三七（タビタ）などを挙げる（OCR l. 24691–24702）。
- 読者への影響：中 — diluculo（夜明けに）か sub noctem（夜の近くに）かで、避ける湯あみの時刻が逆になる。どの読みでも、祭りの習いに合わせた不健康な湯あみをしない、という論は同じ。
- 訳での扱い：訳注は付けない。底本の diluculo（夜明けに）と calorem（温かさ）で訳す。ne et noctem et diem perdam は「夜も昼も失わないように」。rigere … mortuus possum は注 e のとおり、死者を洗う習いにかけた冗談。サトゥルナリア祭はメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0304（本文、校注 42 章 16〜20、注 e）。OCR l. 35226–35229、35246、35259–35274、35289–35291、35304–35306。Bindley OCR l. 8216–8219、8239–8241。Mayor OCR l. 24691–24702。

### 42.5 Non in publico Liberalibus discumbo, quod bestiariis supremam coenantibus mos est, attamen ubi de copiis tuis coeno（獣と戦う者の最後の食事、ubi と ubiubi）
- 底本（Oehler）：Non in publico Liberalibus discumbo, quod bestiariis supremam coenantibus mos est, attamen ubi de copiis tuis coeno.
- ほかの読み：supremam は A・B・F・G・c・f、ウィーン写本。Bongars の写本は sub primam、D・E・a・b・d・e、エアフルト写本、オクスフォード、ヴァティカンの写本の一つは suprema（校注 42 章 21）。ubi は A・B・D・E・F・G・a〜d、ウィーン写本、オクスフォード、エアフルト写本。d・f と Havercamp は ubiubi（「どこであれ」）、λ は ubicunque（22）。Bindley の本文は supremam cenantibus … attamen ubi ubi de copiis tuis ceno（OCR l. 8219–8221）。Mayor は p. 148 の一覧で「p. 122 l. 16 ubiubi」とし、ubiubi を好む。
- 採る校訂者：注 42 章 f は、獣と戦う者が最後の食事をとることについて、プルタルコスで何か読んだ覚えがあるが手元にない、とし、アプレイウス『変身物語』4 巻 13 章（剣闘士、狩人、罪人が獣の餌を太らせる）、スーダの「中庭で三つのこと」（死に引かれていく者は、パンとぶどう酒で満たされてから、言いたいことを言う自由があった）、『ペルペトゥアとフェリキタスの殉教』17 章（前の日に「自由の食事」と呼ぶあの食事を、自由の食事ではなく愛餐としてとった）を挙げる（Heraldus）。Bindley は Liberalia を 3 月 17 日に始まるバックスの祭りとし、bestiarii に 9 章の注と『ペルペトゥアとフェリキタスの行伝』4 章を挙げる（OCR l. 8243–8246）。Mayor も Liberalia を 3 月 17 日とし、『見世物について』5 章（リベラリアの遊戯は父リベルの誉れを響かせる）を挙げ、supremam cenantibus にタキトゥス『年代記』2 巻 31 章（最後の楽しみとして用意した宴で苦しめられた）を挙げる。ubiubi にテレンティウスなどの用例を挙げる（OCR l. 24704–24768）。
- 読者への影響：小〜中 — supremam（coenam）coenantibus は、獣の刑・獣との戦いの前の晩の公の宴のこと。ubi か ubiubi かで「（あなたの食べ物で）食事をするところで」か「どこであれ」かが変わる。
- 訳での扱い：訳注は付けない。supremam coenantibus は「最後の食事をとる」で、『ペルペトゥアとフェリキタスの殉教録』17:1 の既訳（「自由の食事」と呼ぶあの最後の食事）と言い方を揃えられる。bestiarii は「獣と戦う者たち」。ubi の訳（底本の ubi のまま「どこであれ」の意味に取るか）はメインが決める。リベラリア祭はメインが名前の表に足す（名前の表の「リベル」）。
- 確かめた資料：Oehler 画像 0304（本文、校注 42 章 21・22、注 f）。OCR l. 35229–35231、35249、35276–35285、35292–35294、35307–35309、35314–35325。Bindley OCR l. 8219–8221、8243–8246。Mayor 画像 0172（p. 148）。Mayor OCR l. 24704–24768。

### 42.5–42.6 Non emo capiti coronam … nos coronam naribus novimus; viderint qui per capillum odorantur（花冠と、『オクタウィウス』38 章）
- 底本（Oehler）：Non emo capiti coronam. Quid tua interest, emptis nihilominus floribus quomodo utar? Puto gratius esse liberis et solutis et undique vagis. Sed etsi in coronam coactis, nos coronam naribus novimus; viderint qui per capillum odorantur.
- ほかの読み：esse は λ・f と Havercamp で、ほかの写本にはない。liberis を F は liberalibus、ウィーン写本は liberalis（校注 42 章 23）。nos を a・b は non（24）。novimus を a・b・c は admovimus。λ は coactis, vos enim non novimus（25）。Bindley の本文は puto gratius [esse] liberis et solutis et undique vagis（OCR l. 8223）。
- 採る校訂者：注 42 章 g はミヌキウス・フェリクス『オクタウィウス』38 章（わたしたちは花をまき散らし、柔らかくほどけたまま用い、首に掛ける。頭に冠をかぶせないことは許してほしい。花のよい香りを鼻で吸い、後頭部や髪で吸い込みはしない）を引き、昔のキリスト者が頭に冠をかぶせなかったことは知られているとして、キプリアヌス『背教者について』、クレメンス『教育者』2 巻 8 章、『冠について』を挙げる。viderint はテルトゥリアヌスがよく使う言い方で、『冠について』13 章の注を参照させる。Mayor は『冠について』5 章（自然は、冠が頭に合わないと定める）・2 章、『見世物について』18 章、『オクタウィウス』12 章 6 節・38 章 2 節・39 章などを挙げ、viderint に 25 章などを挙げる（OCR l. 24771–24810）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。corona と、liberis et solutis（ほどけたまま）は、『オクタウィウス』38:2 の既訳（「柔らかくほどけたまま」「頭に花冠をかぶせない」「鼻で吸う」「後頭部や髪で吸い込みはしない」）と言い方を揃えられる。viderint の訳は既訳の言い方に揃えるかをメインが決める。
- 確かめた資料：Oehler 画像 0304（本文、校注 42 章 23〜25、注 g）、0305（注 g の終わり）。OCR l. 35231–35237、35310–35311、35327–35346、35372–35375。Bindley OCR l. 8222–8225。Mayor OCR l. 24771–24810。`books/octavius/src/chapter-37-40/both.md`（38.2 と 38:2）。

### 42.6 quae tamen apud illos coetus venditantur si desideravero, liberius de propriis locis sumam. Thura plane non emimus（Thura は λ の語）
- 底本（Oehler）：Spectaculis non convenimus; quae tamen apud illos coetus venditantur si desideravero, liberius de propriis locis sumam. Thura plane non emimus.
- ほかの読み：venditantur を D・F・G は vendicantur（校注 42 章 26）。si desideravero を λ は quod ego si（27）。liberius を G・a・e・f と Havercamp は libentius（「喜んで」。28）。de propriis を λ は de suis de propriis（29）。sumam. Thura plane は λ・f。Havercamp は sumam. Thura、d・e は sumantur. Thura plane（e は plane を欠く）、A・B・D・E・F、エアフルト写本、ウィーン写本、Pamelius の写本のいくつかは sumantur plane（Thura がない）、b・c とゴルツェ写本は sumo. Thura plane、a は sumere plane、G は Plane（30）。Bindley の本文は libentius de suis locis sumam. Tura plane non emimus（OCR l. 8225–8228）。
- 採る校訂者：注 42 章 h は、劇場ではいろいろな食べ物が持ち回られて売られていた、と言う（Heraldus）。Mayor は Spectaculis に 38 章と『見世物について』24 章を、Tura に『偶像崇拝について』11 章（香を売るキリスト者が神殿を通るとき、どの口で煙る祭壇につばを吐くのか）と『冠について』10 章を挙げる（OCR l. 24812–24845）。Bindley は Tura plane non emimus に 30 章の注を参照させる（l. 8251）。
- 読者への影響：中 — 「香」（Thura）の語は λ と f の読みで、写本の大勢には sumantur plane とあって、香の語がない。ただし、続く 42.7 のアラビアとサバ人の嘆きから、買わないものが香であることは読み取れる。
- 訳での扱い：訳注は付けない。底本の sumam. Thura plane で訳す。coetus は訳語表で 38.2 が「徒党を組む」、39 章が「集い」と分かれているので、ここ（見世物の集まり）をどちらに揃えるかはメインが決める。convenire は訳語表の 39 章の「集まる」に揃えられる。de propriis locis は注 h のとおり、見世物の場で売られる食べ物を「それぞれの（売り）場所から」手に入れる意味。
- 確かめた資料：Oehler 画像 0304（本文の Spectaculis non convenimus; quae）、0305（本文、校注 42 章 26〜30、注 h）。OCR l. 35299、35351–35352、35363–35366、35376–35379。Bindley OCR l. 8225–8228、8251。Mayor OCR l. 24812–24845。

### 42.7 Si Arabiae queruntur, sciant Sabaei pluris et carioris suas merces Christianis sepeliendis profligari quam deis fumigandis（profligari の意味）
- 底本（Oehler）：Si Arabiae queruntur, sciant Sabaei pluris et carioris suas merces Christianis sepeliendis profligari quam deis fumigandis.
- ほかの読み：sciant は Aβ・E・F・G・λ・a〜e、エアフルト写本、オクスフォード。(Aφ B D)・f と Havercamp は scient（「知るだろう」。校注 42 章 31）。carioris を c は carius（32）。quam deis を B は quod eis（33）。Bindley の本文は scient Sabaei（OCR l. 8228）。
- 採る校訂者：注 42 章 i は「香はアラビアのもの、香油はサバ人のもの」とする。注 k は profligari を「多くの解釈者のとおり impendi, insumi（費やされる）」とし、フィロクセノスの語彙集やタキトゥス『年代記』16 巻 18 章などを挙げたうえで、「わたしは profligare を、法律家の用法で exigere, requirere（求める、取り立てる）の意味に取る」と言い、『テオドシウス法典』の用例を挙げる。事柄については『偶像崇拝について』11 章（香などの商品は、偶像のいけにえに、人々には薬に、わたしたちには葬りの慰めに使われる）、『肉の復活について』27 章、ラクタンティウス 2 巻 4 章、カッシアヌスを挙げる。Bindley は「キリスト者は死者に香油を塗った」とし、『偶像崇拝について』11 章などを挙げる（OCR l. 8272–8275）。Mayor は Christianis sepeliendis に同じ箇所とミヌキウス・フェリクス 12 章 6 節（香油は葬りのためにとっておく）、プリニウス 12 巻 41 章などを挙げる（OCR l. 24847–24915）。
- 読者への影響：中 — profligari を「費やされる」と取るか、Oehler の「求められる」と取るかで、文の言い方が変わる。どの取り方でも、キリスト者の葬りに使われる香料のほうが、神々に焚く香より多く高価だ、という論は同じ。
- 訳での扱い：訳注は付けない。本の AGENTS.md の文型（Oehler の注を判断の拠り所にする）に従えば、注 k の「求められる」で訳す。ほかの取り方（費やされる）は reviews に残す。Sabaei は口語訳の「シバびと」（ヨブ一・一五、ヨエル三・八）の表記に合わせられる。Arabiae（アラビアの国々）は 24 章の既訳の「アラビア」。名前の表への追加はメインが決める。
- 確かめた資料：Oehler 画像 0305（本文、校注 42 章 31〜33、注 i・k）。OCR l. 35352–35354、35367–35368、35380–35410。Bindley OCR l. 8228、8256–8257、8272–8275。Mayor OCR l. 24847–24915。`node tools/bible.js Job.1.15 Joel.3.8`。

### 42.7 Certe, inquitis, templorum vectigalia cotidie decoquunt: stipes quotusquisque iam iactat?（言い分の範囲）
- 底本（Oehler）：Certe, inquitis, templorum vectigalia cotidie decoquunt: stipes quotusquisque iam iactat?
- ほかの読み：quotusquisque を F とウィーン写本は cotusquisque と綴る（校注 42 章 34）。Bindley の本文は stipes quotusquisque jam jactat.（疑問符でなく句点。OCR l. 8257–8258）。
- 採る校訂者：注 42 章 l は「異教徒は、神々の神殿に納められる収入が日に日に少なく小さくなり、施しの銭を投げる者がもうほとんど見つからないと嘆く」と言い換え、プリニウスのトラヤヌス宛ての書簡（ほとんど見捨てられていた神殿がまた人で満ち始めた）、アルノビウス 1 巻 24 章（神々は顧みられず、神殿はもうひどく閑散としている、と彼らは叫ぶ）、『偶像崇拝について』17 章を挙げる。Bindley は decoquunt を「減っていく」とし、キケロが「破産する」の意味で絶対的に使う例を挙げる（OCR l. 8277–8279）。Mayor は templorum vectigalia に『偶像崇拝について』17 章とプリニウスの書簡を、stipes にウァッロなどを挙げる（OCR l. 24917–24934）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。本の AGENTS.md のとおり、言い分を「」に入れ、「と、あなたがたは言います」と受ける。注 l に従い、「」の範囲は Certe … iactat? まで（問いも異教徒の嘆き）。Non enim sufficimus から著者の答え。templorum vectigalia（神殿の収入）と 42.9 の cetera vectigalia（ほかの税）の訳し分けはメインが決める。
- 確かめた資料：Oehler 画像 0305（本文、校注 42 章 34、注 l）。OCR l. 35354–35356、35368、35379–35392。Bindley OCR l. 8257–8258、8277–8279。Mayor OCR l. 24917–24934。

### 42.8 Non enim sufficimus … Denique porrigat manum Iupiter et accipiat … vicatim quam vestra religio templatim（Denique の意味）
- 底本（Oehler）：Non enim sufficimus et hominibus et deis vestris mendicantibus opem ferre, nec putamus aliis quam petentibus inpertiendum. Denique porrigat manum Iupiter et accipiat, cum interim plus nostra misericordia insumit vicatim quam vestra religio templatim.
- ほかの読み：enim を a・b・c は欠く（校注 42 章 35）。inpertiendum を D・E・G、ウィーン写本は inpartiendum（36）。Bindley の本文は Non [enim] sufficimus（OCR l. 8258）。
- 採る校訂者：注 42 章 m は「テルトゥリアヌスは戯れて言う。ユピテルは、望むなら、またできるなら、手を差し出して、貧しい者として必要とする施しをわたしたちから受ければよい。わたしたちがあなたがたより多くの金を費やすことは否まない。わたしたちのあわれみは、町の通りごとに、あなたがたの贅沢が神殿ごとに費やすより多く働く」と言い換え、祭司の贅沢を 39 章が責めたことを挙げる。そのうえで、Denique を proinde（それなら、したがって）の意味で、法律家の用法とし、Dirksen を参照させる。vicatim と templatim は 35 章の注を参照させる。Mayor は mendicantibus に 13 章の「物乞いする宗教が居酒屋を巡る」とミヌキウス・フェリクス 24 章 4 節（物乞いする神々を通りごとに連れ歩く）を、Denique に『マルキオン反駁』1 巻 24 章を挙げる（OCR l. 24936–24962）。Bindley は、異教の貧しい者が同じ宗教の者から顧みられず、「ガリラヤ人」に養われているというユリアヌス帝の嘆きを挙げる（OCR l. 8284–8287）。
- 読者への影響：小〜中 — Denique を「それなら」と取るか、40.14 の注 t の「一つ例を挙げれば」と取るかで、文のつながりが変わる。
- 訳での扱い：訳注は付けない。注 m に従い、Denique は「それなら」で訳す。40.14 の Denique（注 t「たとえば」）と訳し分ける。vicatim、templatim は 35 章の既訳の言い方に揃えられる。misericordia は「あわれみ」（ルートの AGENTS.md の信仰の語彙）、religio は訳語表どおり「宗教」。
- 確かめた資料：Oehler 画像 0305（本文、校注 42 章 35・36、注 m）。OCR l. 35356–35360、35368–35369、35393–35410。Bindley OCR l. 8258–8264、8281–8287。Mayor OCR l. 24936–24962。

### 42.9 Sed cetera vectigalia gratias Christianis agent ex fide dependentibus debitum, qua alieno fraudando abstinemus …（λ の別の文と、税を納めること）
- 底本（Oehler）：Sed cetera vectigalia gratias Christianis agent ex fide dependentibus debitum, qua alieno fraudando abstinemus, ut, si ineatur quantum vectigalibus pereat fraude et mendacio vestrarum professionum, facile ratio haberi possit, unius speciei querela conpensata pro commodo ceterarum rationum.
- ほかの読み：Sed cetera を G・λ は Sed et cetera（校注 42 章 37）。dependentibus を G は debentibus。agent を λ・c・d は agunt（38）。qua を F は quo、G は quia、λ は cum（39）。ut, si ineatur を F は at si metiatur、G は ut si mereatur（40）。vectigalibus pereat を λ と Havercamp は publico pereat（41）。λ は全体を Sed et cetera vectigalia laeduntur. sufficit si cetera gratias Christianis agunt ex fide dependentibus debitum, cum alieno fraudando abstinemus, ut, si ineatur quantum publico pereat et fraude et mendacio vestrarum professionum, facile ratio haberi possit, unius speciei querela compensato pro ceterarum rationum securitate. と読む（「しかし、ほかの税も損なわれている、と。ほかの税がキリスト者に感謝すれば十分だ……」。校注 41 の後半）。Bindley の本文は quantum publico pereat で、ほかは底本と同じ（OCR l. 8264–8270）。
- 採る校訂者：注 42 章 n は、キリスト者のこの従順と誠実について、ユスティノス『弁明』の「わたしたちは、あなたがたが定めた租税と納め物を、彼（キリスト）から教えられたとおり、どこでも納めようと努める」を引く（Heraldus）。注 o は professiones を「財産の申告、登録の記載」とし、リウィウス 35 巻 7 章とキケロ『ウェッレス弾劾』の注釈者を参照させる。Bindley は qua alieno fraudando abstinemus を「他人のものをかすめ取らずにいるのと同じ誠実さで」とし、46 章を挙げる。ineatur を「見積もる」（rationem inire）、professio を財産の公の申告、unius speciei querela を「一つの項目（神殿の収入）についての嘆きが、ほかのすべての項目の得で埋め合わされる」と注し、フルダ写本の compensatio pro ceterarum rationum securitate を挙げる（OCR l. 8289–8308）。Mayor はユスティノス『第一弁明』17 章（ルカ二〇・二二、二五を引いて、税を納めると言う）と、『諸国民へ』1 巻 4 章の「他人のものから身を控える節度」を挙げる（OCR l. 24964–24969）。
- 読者への影響：小 — λ では文の形が違うが、キリスト者が誠実に税を納めるので、ほかの税収はかえって増える、という論は同じ。
- 訳での扱い：訳注は付けない。底本で訳す。ex fide の fides は、訳語表の「誠実」（皇帝に対する fides）に揃えられる。qua は Bindley のとおり「（その）誠実さによって」と、前の fide を受ける。species は 1:1 の注 d と同じく「項目」の意味。ルカ二〇・二五（口語訳「カイザルのものはカイザルに」）は、ユスティノスが引く箇所で、ここは引用ではない。ローマ一三・七との近さは末尾の「未確認」に書いた。
- 確かめた資料：Oehler 画像 0305（本文の Sed cetera … ex fide、校注 42 章 37）、0306（本文、校注 38〜41、注 n・o）。OCR l. 35360、35369、35423–35426、35434–35444、35463–35476。Bindley OCR l. 8264–8270、8289–8308。Mayor OCR l. 24964–24969。`node tools/bible.js Luke.20.25`。

---

## 未確認

- 40.7 の Mayor の p. 148 の一覧の「p. 118 l. 1 cenantur」が、Oehler の校注にある cernantur（F、ウィーン写本）の刷り違いなのか、Mayor 自身の推定なのか。Mayor の注（OCR l. 24076–24077）には説明がない。
- 40.14 の in sacco et cinere volutantes と、エレミヤ六・二六（口語訳「荒布を身にまとい、灰の中にまろび」）、マタイ一一・二一（口語訳「荒布をまとい灰をかぶって」）、ヨナ三・六の近さ。口語訳の本文は `node tools/bible.js Jer.6.26 Matt.11.21 Jonah.3.6` で確かめたが、この箇所に聖書の箇所を挙げる資料は見ていない（Oehler・Mayor はテルトゥリアヌスの用例だけを挙げる）。
- 42.2 の Meminimus gratiam debere nos deo … nullum fructum operum eius repudiamus と、第一テモテ四・四（口語訳「神の造られたものは、みな良いものであって、感謝して受けるなら、何ひとつ捨てるべきものはない」）の近さ。口語訳の本文は `node tools/bible.js 1Tim.4.4` で確かめたが、この箇所に第一テモテを挙げる資料は見ていない（Bindley は二元論の異端に触れるだけ）。
- 42.8 の nec putamus aliis quam petentibus inpertiendum と、マタイ五・四二（口語訳「求める者には与え」）の近さ。資料は挙げていない。
- 42.9 の ex fide dependentibus debitum と、ローマ一三・七（口語訳「貢を納むべき者には貢を納め、税を納むべき者には税を納め」）の近さ。資料が挙げるのはユスティノス『第一弁明』17 章とルカ二〇・二二、二五だけ（Mayor）。
- 40.3 の注 e が挙げるビザンティオンのステファノスの項（Ἱεράφη）と、40.8 の Bindley の言う『諸国民へ』1 巻 9 章の Tarpeios を、『諸国民へ』の本文（Oehler の同じ巻）では確かめていない。
- 40.4 の注 f が挙げるプラトン『ティマイオス』p. 24 以下の、アトランティスの大きさの言い方（「リビアとアジアを合わせたより大きい」かどうか）は、プラトンの本文で確かめていない。
