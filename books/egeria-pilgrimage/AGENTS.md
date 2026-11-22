# エゲリア『巡礼記』の決まり

4 世紀の終わりに聖地を巡った女性が、故郷の「姉妹たち」に宛てて書いた旅の記録。ラテン語。写本は一つだけ（アレッツォの写本、11 世紀）で、冒頭と結びが失われている。底本の題は「S. Silviae, quae fertur, peregrinatio」（シルウィアの作と伝えられる巡礼記）だが、いまは著者をエゲリアとみるのが一般的で、この訳もエゲリアと呼ぶ。前半（1〜23 章）は旅の記録で、シナイ山とホレブ（1〜5 章）、エジプトのゴセンを通ってエルサレムへ戻る道（6〜9 章）、ネボ山（10〜12 章）、ヨブの墓のあるカルネアス（13〜16 章）、メソポタミヤのエデッサとハラン（17〜21 章）、帰路とコンスタンティノポリス（22〜23 章）。後半（24〜49 章）はエルサレムの典礼の記録で、日ごとの祈り（24 章）、主の日（25 章）、公現祭と四十日目の祭り（25〜26 章）、四旬節（27〜28 章）、聖週間と復活祭（29〜38 章）、復活祭から五旬節まで（39〜44 章）、洗礼志願者の教え（45〜47 章）、献堂の祭り（48〜49 章）。

次の本の決まりを、同じ語を同じ意味で使うかぎり引き継ぐ。ここには、この本で違うところと、この本に固有の決まりだけを書く。食い違うときはこのファイルを優先する。

- 典礼の場所・所作・職名の語彙：『秘義教話』（`books/cyril-mystagogical-catecheses/AGENTS.md`）。同じころのエルサレムの典礼を、キュリロスは講話として、エゲリアは見聞として伝える。
- 修道の語彙（修道士、修道の住まい）と、手紙の地の文の敬体：『アントニオス伝』（`books/athanasius-life-of-antony/AGENTS.md`）。
- ラテン語の底本の扱いと書き方の型（補いの括弧、メモの書き方）：『迫害者たちの死について』（`books/lactantius-deaths-of-persecutors/AGENTS.md`）。底本が同じ叢書（CSEL）で、ページの組みも同じ。
- 洗礼志願者（catechumenus）、尊い姉妹（domina soror）：『ペルペトゥアとフェリキタスの殉教』（`books/perpetua-and-felicitas/AGENTS.md`）。

## 節の形

- 章（1〜49）と節の番号は底本（Geyer 1898）に従う。章の番号は欄外の太字の数字、節の番号は普通の数字（奇数ページは右の欄外、偶数ページは左の欄外。反対側の欄外の 5、10、15 … は行番号）。章の 1 節には番号がない。英訳（Bernard）には章も節も番号がないので、レビューで英訳と照らすときは文の内容で照らす。
- 節は底本の番号どおりに切る。`tools/split-units.js` は使わない。欄外の節の番号は、その節が始まる行に付いている。行の中のどこから節が始まるかは、文の切れ目から決める（3.4 は p. 39 の 26 行目の grandem. の後の Cum ergo から）。
- 底本テキストは `research/geyer-1898.txt`。1 行 1 節で `<章>.<節> <本文>`（`1.2`）。
- 底本の 1 節ごとに、ラテン語の行、続けて訳の行を置く。訳の行は `1:2 ` のように章と節の番号で始める。
- 章の中では空行を入れない。章と章のあいだに空行を一つ入れる。
- 見出しは `# 1〜3 章　…` の形（章の範囲、中身）。1 章だけのページは `# 20 章　…`。
- 底本の題（S. SILVIAE, QVAE FERTVR, PEREGRINATIO AD LOCA SANCTA）と、冒頭の欠けを示す (MVLTA DESVNT) と点線は、底本テキストに入れない。書名は README から出る。冒頭が欠けていることは、最初のページの 1.1 の訳の前に訳注を付けて示す（1.1 の訳は文の途中から始まる）。
- ページの割り（`research/pages.json`）は、全文を起こす前に、OCR の章ごとの語数（ラテン語で計 17,000 語ほど。行番号などの混入を含む）を目安に、旅の行程と典礼の季節の切れ目で 17 ページに分けた。シナイ山（1〜3 章）、ホレブと谷の聖所（4〜5 章）、エジプトを通ってエルサレムへ（6〜9 章）、ネボ山（10〜12 章）、ヨブの地（13〜16 章）、エデッサ（17〜19 章）、ハラン（20 章）、帰路（21〜23 章）、日ごとの祈り（24 章）、主の日と公現祭（25〜26 章）、四旬節（27〜28 章）、ラザロの土曜日から聖週間の月曜日まで（29〜32 章）、火曜日から木曜日の夜まで（33〜36 章）、受難の金曜日（37 章）、復活祭の徹夜から五旬節の前まで（38〜41 章）、四十日目と五旬節（42〜44 章）、洗礼志願者の教えと献堂の祭り（45〜49 章）。各章の始まりの OCR の行は `research/sources.md` の「章の始まり」の表にある。

## 底本の扱い

- 本を始めたときに起こしたのは、最初のページの 1〜3 章（1.1〜3.8）。各ページのセッションは、page-context を作る前に、そのページの章を画像（`pages.json` の `images`）から起こし、`<章>.<節> <本文>` の行にして `research/geyer-1898.txt` の末尾に足す。起こさないと page-context は空の抜粋を書き出す。
- 手順：`node tools/ocr-lines.js` で pages.json の `print` の行から本文の行（柱、聖書の箇所、校注を除いた範囲）を拾って下書きにし、節の始まりで行に分け、画像を見ながら `node tools/replace.js` の短い組で直す（本文を一度に書き出さない）。直し終えたら、語の列を OCR と比べ、違いがみな OCR の読み誤りか行番号・写本のページの印の混入であることを確かめる。どの画像をどの範囲で読んだか、OCR と違ったところは `research/sources.md` の画像の行に書き足す。
- 画像の番号：IIIF の番号＝印刷ページ＋56（0093＝p. 37）は、ページ番号の対応表の leafNum と lactantius の例からの推定で、IIIF の画像では確かめていない（本を始めた日、IIIF は 3 分たっても応答しなかった）。確かめたのは次のページ画像の式。archive.org のページ画像 `https://archive.org/download/itinerahierosoly00geye/page/nN_w1600.jpg` は N＝印刷ページ＋55（n92＝p. 37）で、`node tools/fetch.js` で `cache/archive.org/itinerahierosoly00geye/page/` に取る。1 ページの本文は 30 行ほどで、`node tools/image.js crop <画像> pct:0,y,100,h <出力先>` で縦に 3 回ほどに分けて切ると読める。小さい句読点は `--scale 1.3` ほどで拡大して確かめる（コンマとピリオドを OCR はよく取り違える）。
- ページの組み：上が本文、その下に聖書の箇所（8 cf. Num. 11, 34 のように、行番号と箇所）、その下に校注。OCR は本文の行に行番号（5、10 … を io、lo、ao、i5 などと読む）、節の番号、写本のページの印を混ぜる。
- 起こすのは本文だけ。章と節の番号、行番号、柱、聖書の箇所、校注は起こさない。本文の中の縦線 `|`（2.5 の illorum | omnium、3.4 の ueniens | de）と、欄外の角括弧の数字（[31]、[33] など。行の途中の縦線に対応する）も起こさない。写本のページの境の印で、底本の校注 l. 4823 が、欄外の角括弧の数字は写本のページを示すと言う。行末で分けられた語はつなぐ。
- 綴り、大文字・小文字、句読点は刷られたとおり。底本は写本の後期ラテン語の綴りと語形をそのまま刷る（1.1 の uallem infinitam ingens、1.2 の per ualle illa、2.5 の per giro、2.4 の plecaremus、3.4 の ascitis）。古典ラテン語の形に直さない。底本は u と v を分けずに u と刷り（uallem、uidetur）、大文字は文の初めと固有名と Deus、Dominus などに使う。OCR がピリオドと読んで小文字が続くところ（2.5 の sunt. sed、2.7 の Domini. tamen）は、ほぼコンマの読み誤りなので、画像で確かめる。
- 底本の山括弧（2.3 の ⟨quia⟩。校注 l. 4869 に quia ipse addidi）は、編者が写本にない語を補ったもの。底本テキストでは `⟨ ⟩`（U+27E8、U+27E9）にして起こし（『迫害者たちの死について』と同じ）、訳は補いに従う。補いが訳の意味を決めるところは `// ` メモに補いであることを書く。山括弧は、写本にある語を編者が別の位置へ移した印にも使われる（6.4 の cum uenissemus ⟨denuo,⟩。p. 46 校注 20 に transposui）。そのときも同じく `⟨ ⟩` で起こし、移した位置で訳し、`// ` メモに移動の印であることを書く。ほかの学者の補いを Geyer が採ったもの（24.3 の de ⟨intro⟩ cancellos。p. 72 校注 3 に intro addidit Cholodniak）も、同じく `⟨ ⟩` で起こし、メモに補いの主を書く。
- 底本の角括弧（20 章の終わり、p. 68 の 2 行目の monachorum aliquando [aliquando]。校注 l. 6315 に aliquando aliquando dittographia A）は、編者が取り除くべきとみた語なので、底本テキストに残して訳さず、`// ` メモに書く。
- 底本の点線（29.1 の septimanarum .... uigiliae）は、編者が示した脱落の印。底本テキストには刷られた数のまま残す。訳は欠けた語を補わず、読者の理解が変わるところは訳注で語が欠けていることを示す。
- 印刷版が本文を空けたまま残した欠け（37.3 の attendunt et anulum の後と minus secunda の後。p. 88 校注 25 に Lacunam）は、刷られた字がないので、底本テキストでは欠け一つごとに `…`（U+2026）を一つ置き、点線の `....` と分ける。訳は点線と同じく補わず、残った切れ端（minus secunda）は訳注で示す（「ここで写本の語がいくつか欠けている。第二時ごろから、の意とみられる。」）。点線の欠けで文の動詞が失われたところ（37.8 の ad Martyrium ...）も、31.2 のように動詞を補わず、「マルテュリウムへ」で文を切って訳注を置く（31.2 は欠けの印のない文なので補う）。
- 写本の葉の欠け（16 章の Unum folium excisum est、25 章の Deest unum folium）は、底本では本文の中に一行で刷られている。底本テキストでは欠けの前後で節を分けたまま、欠けの印は起こさない。訳では、欠けの位置に訳注を置いて、写本の一葉が失われていることを示す（英訳も [A leaf wanting] と示す）。16 章では、欠けの前の 16.4 の訳は文の途中（「山は長く延びていて」）で切り、16.5 の訳の頭に訳注「ここで写本の一葉が失われている。」を置いた。欠けの後が人の言葉の続き（16.5〜16.6 の uidetis）なら、残る部分の初めから「」に入れる。25 章の欠けは 25.6 の途中（p. 75 の 25 行目の maiorem の後）にあり、底本は欠けの後の Benedictus … lux fiat. も 25.6 に数える（25.7 は p. 76 の 1 行目の Ubi cum から）。このように欠けが節の中にあるときは、底本テキストは一行のままにし、訳の行の中で欠けの前の文を途中（「まず大きな教会で散会となり」）で切って、その直後に訳注「ここで写本の一葉が失われている。続きは公現祭の祝いの記録。」を置き、欠けの後の途中の句（「『主の御名によってきたる者に、祝福あれ』云々と、その後に続くことば」）を続ける。前後の切れ端が一文として数えられ、verify の 60 字の WARN が出るが、そのままにする。
- 底本の短剣符 `†`（4.3 の uel maxime † ea desideraueram。p. 41 校注 23 に locum aperte corruptum）は、編者が本文の崩れを示した印。底本テキストに刷られた位置のまま残す。訳は写本に残る語を生かして大意で訳し、`// ` メモに崩れであることと推定（校注の Gamurrini や Geyer の案）を書く。大意が推定によって変わるときだけ訳注を付ける。
- 編者が山括弧なしで補った語・改めた語（4.7 の Hic est autem rubus の est。p. 42 校注 17 に est ipse addidi）は、刷られたとおりに起こし、訳は底本に従う。意味が補いに頼るときだけ `// ` メモに書く。
- 上付きの字で刷られた序数（29.1 の iiiiᵃ。quarta の略）は、底本テキストに上付きの字（ᵃ、U+1D43）で起こし、訳は数で訳す（「第四週」）。
- ほかの記号は、初めて出てくるページで校注の意味を確かめてからここに書く。
- 校注の略号：A は写本（アレッツォの写本、11 世紀）。Gamurrini（初版 1887、1888）、Bernard（英訳とラテン語本文、1891）、Cholodniak、Pomialowsky、Sittl、Woelfflin などは、推定を出した刊本の編者や学者。ipse scripsi、ipse addidi は Geyer 自身の改め。訳は底本の読みに従い、写本の読みが訳に関わるときだけ `// ` メモに書く。読者の理解が変わる箇所にだけ訳注を付ける。
- 底本の印刷の誤りは、底本テキストには刷られたとおり起こし、訳は意図された形で訳して `// ` メモに書く。字の傷でかすれた字（2.3 の quae が quac に見える、2.6 の uidisse の i の上の点）は、意図された字で起こし、`research/sources.md` の画像の行に書く。
- 英訳（Bernard）は底本より古い Gamurrini の本文から訳したもので、底本と読みが違うところがある。英訳と底本の違いは訳の誤りとは限らないので、レビューでは底本の校注と照らしてから指摘させる。
- McClure と Feltoe の英訳（1919）は、訳文の大半を訳した George Herbert の没年が確かめられないので、訳出でもレビューでも訳文を読まない（`research/sources.md`）。

## 文体

- 地の文は敬体（「〜です」「〜ました」）。エゲリアが故郷の姉妹たちに宛てた手紙で、ところどころで読み手に語りかける（3.8 の Illud autem uos uolo scire, dominae uenerabiles sorores）。旅の記録も典礼の記録も敬体で通す（『アントニオス伝』と同じ）。過去のことは「〜ました」で語る。典礼の記録（24 章以降）の現在形は、いつも行われていることとして「〜します」「〜されます」で訳す。
- 書き手のエゲリアは「わたし」。書き手と旅の仲間は「わたしたち」（原文の nos）。原文が一人称単数と複数を行き来するところは、原文の数のとおりに訳し分ける。
- 読み手への呼びかけ：dominae uenerabiles sorores は「尊い姉妹の皆さま」、dominae sorores は「姉妹の皆さま」（『ペルペトゥアとフェリキタスの殉教』の Domina soror「尊い姉妹よ」に合わせ、複数の手紙の呼びかけとして「皆さま」にする）。読み手を指す uos は「皆さま」。affectio uestra（皆さまの愛情、の意で読み手を指す丁寧な言い方）は「皆さま」と訳し、必要なら「愛する皆さま」とする。sorores のない dominae uenerabiles（12.7）は「尊い皆さま」とし、ない語を足さない。19.19 の dominae animae meae は「わたしの魂である皆さま」とし、同じく sorores を足さない（後の章にもう一度出る）。23.10 の domnae, lumen meum と dominae, lumen meum は綴りが違っても同じ呼びかけとして、どちらも「わたしの光である皆さま」とする（19.19 と同じ形）。
- 神とキリストの動作は尊敬語にする。受け身や可能と紛れる「〜られる」は避け、「お〜になる」にする（『秘義教話』と同じ。17.1 の misit「お送りになった」、19.8 の rescripserat「お書きになった」）。監督、長老、修道士の動作に尊敬語は使わない。ただし、エゲリアが人々の好意を言う dignor（3.7 の dignati sunt singula ostendere、20.2 の ostendere dignatus est、20.13 の referre dignatus est）は、どの dignor も「〜してくださる」と、受ける側の言い方で訳す。dignor のない動詞（20.3、21.1 の duxit nos）は「〜してくれる」。神が主語の dignor（23.5、23.8〜23.10 の dignatus est）も「〜してくださる」とし、尊敬語を重ねない。
- 道案内の人々や監督の台詞は「」。監督や長老がエゲリアに語る言葉は、年長の聖職者がていねいに語る敬体にする（19 章の filia「娘よ」と呼ぶ監督の言葉など。人物ごとの口調は初めて出るページで決めてここに書く）。土地の長老や修道士たちが巡礼の一行に語る言葉も敬体で、一行を uos「あなたがた」と呼ぶ（12.2、12.3）。
- 一人の話が節をまたいで続くとき（14.2〜14.3 の長老の言葉、16.5〜16.6 の欠けの後の言葉）は、「」を開いたまま次の節で閉じ、節ごとに閉じて開き直さない。
- 修辞疑問は「〜でしょうか」「〜ではありませんか」で終え、「？」は使わない（3.4 の et quid plura? は「ほかに何を言いましょうか」、23.3 の nunquid uel scribere possum? は「書き表すことなどできるでしょうか」）。

## 訳語表

| 原語 | 訳 |
|---|---|
| episcopus / presbyter / diaconus | 監督／長老／執事（『秘義教話』と同じ。「司教」「司祭」「助祭」としない。Bernard の英訳の priest は presbyter の訳） |
| clerici | 聖職者たち |
| monachus / monasterium | 修道士／修道の住まい（『アントニオス伝』と同じ。この時代のものは独りか少人数で住む庵で、後の大きな修道院と分ける）。例外は 7.2 の cata mansiones monasteria … cum militibus et praepositis で、「詰め所」と訳す（底本の索引がこの箇所だけを statio militum とする） |
| castrum / praepositus / miles | 砦／隊長／兵（7.2、7.4。pro disciplina romana は「ローマの秩序のために」） |
| martyrium（普通名詞） | 殉教者の記念堂（7.7 の ecclesiam habet et martyria。エルサレムの大きな教会の名の Martyrium は名前の表の「マルテュリウム」） |
| epiphania / uigiliae | 公現祭／徹夜の祈り（9.1 の pridie a beatissimo die epiphania「幸いな公現祭の前日」、uigiliae agendae erant「徹夜の祈りが行われることになっていました」） |
| ager publicus | 公道（9.3。底本の索引の agger publicus。「公有地」と取らない） |
| ascitis（ἀσκητής） | 修行者（3.4 の ut hic dicunt ascitis は「ここで言う修行者」） |
| sanctus（人の） | 聖なる（1.2 の deductores sancti illi「あの聖なる案内人たち」）。人名に付くとき（2.2 の sanctus Moyses）は「聖なるモーセ」。「聖〜」と称号にしない |
| ecclesia | 教会（建物も） |
| oblatio / oblationem facere / offero | ささげ物／ささげ物をささげる／ささげる（『秘義教話』の θυσία「ささげ物」、προσφέρω「ささげる」に合わせる）。修道士たちが典礼に来ることを言う ad oblationem faciendam（5.10）も「ささげ物をささげる」で受け、communico の「あずかる」と混ぜない |
| communico | 聖餐にあずかる（3.6 の communicantibus nobis、3.7 の communicaueramus。『秘義教話』の κοινωνέω「あずかる」） |
| eulogiae | 祝福の品（3.6 の dederunt nobis … eulogias, id est de pomis「祝福の品、つまり果物をくれました」。原文が id est で説明を添えるので、外来語のままにしない） |
| catechumenus（底本の綴りは cathecuminus） | 洗礼志願者（『ペルペトゥアとフェリキタスの殉教』と同じ） |
| baptismus / baptizo | 洗礼／洗礼を授ける・洗礼を受ける（『秘義教話』と同じ。聖句の中は口語訳の「バプテスマ」） |
| deductores | 案内人たち（1.2。2.1 の ipsi dicebant など、同じ人々を受けるところも「案内人たち」） |
| summitas（montis） | 頂（3.2 など。「頂上」と揺らさない） |
| mansio / facere mansionem | 宿駅（ローマの街道の泊まり場。旅の一日の行程の単位にも使う）／泊まる（4.8 の fecimus ibi mansionem「その夜はそこに泊まりました」） |
| memoria（場所の） | 記念の場所、墓（1.1 の memoriae concupiscentiae は「欲心の墓」。七十人訳が民数記一一・三四 の地名を訳した形と同じなので、口語訳の音の「キブロテ・ハッタワ」にせず、口語訳の説明の「欲心」で訳し、出典を付ける。出典は底本の聖書の欄が箇所を挙げるところだけ。欄に箇所のない 5.10 の memorias concupiscentiae には付けない） |
| incendium（5.7。民数記一一・三 の地名） | 「焼けた所」（memoria と同じく、七十人訳が意味で訳した地名 Ἐνπυρισμός に当たるので、口語訳の音の「タベラ」にせず、メモに書く） |
| satis（5.8 の scribere satis fuit） | 「手に余る」（底本の索引の satis = ualde、satis fuit = longum fuit。「十分だった」と取らない） |
| rubus | しば（口語訳出エジプト三・二。2.2 の de rubo in igne は「燃えるしばの中から」） |
| orationes（3.6 の pomariola instituunt uel orationes） | 祈りの場所（底本と索引に従う。uel はここでは「と」） |
| mons Dei / mons sanctus Dei | 神の山／神の聖なる山（口語訳出エジプト三・一「神の山ホレブ」） |
| maiestas Dei（Domini） | 神の（主の）栄光（2.5 の ubi descendit maiestas Dei。出エジプト一九・一八、二〇 の主が山に下られたことを指す）。栄光が主語の動詞は尊敬語にしない（「神の栄光が下った場所」。口語訳出エジプト二四・一六 の「主の栄光がシナイ山の上にとどまり」と同じ） |
| milia（passuum） | マイル（ローマ・マイル。メートルに直さない。ルートの AGENTS.md の「マイルはそのまま使う」） |
| hora prima … hora decima | 第一時……第十時（日の出から数える時刻。訳注は付けない）。夜の時刻の hora prima noctis、hora noctis quinta は「夜の第一時」「夜の第五時ごろ」（32.1、35.1、35.3） |
| iubente Deo / iubente Christo Deo nostro | 神のお導きで／わたしたちの神キリストのお導きで（神が命じる、の意だが、旅の行程を神が備えたことを言う決まった言い方なので） |
| castra（イスラエルの人々の） | 宿営（口語訳。10.4、12.9。castra fixerant は「宿営を張った」） |
| terra repromissionis | 約束の地（12.5。出典は付けない） |
| pulpitus（12.1） | 壇（教会の中の、少し高い所。「説教壇」としない） |
| memoriale（12.6） | 記念の場所（底本の索引の memoriale = memoria） |
| titulus uxoris Loth（12.6） | ロトの妻の碑（12.7 の columna「柱」と訳し分ける。Geyer の Kritische Bemerkungen は「墓碑銘、墓」の意とする） |
| titulus（37.1、37.3。十字架の） | 罪状書き（口語訳ヨハネ一九・一九。ピラトが十字架の上にかけさせた札。12.6 の「碑」と別の語義） |
| lignum sanctum crucis / crux（小文字。37 章の聖遺物） | 十字架の聖なる木／十字架の木（36.5 と同じ。場所の名の Crux「十字架の所」「十字架の前」と混ぜない） |
| cathedra / mensa（37.1） | 監督の座／卓（mensa sublinteata は「亜麻布をかけた卓」） |
| notores loci（12.3、16.3） | この土地をよく知る人たち |
| facta est oratio / fieret oratio | 祈りをする（4.8、10.7 など。受け身と能動の線引きは「文型の訳し方」の聖書の箇所を読むことの項） |
| dies dominica / sabbatum | 主の日／土曜日（3.1 の sabbato sera「土曜日の夕方」。安息日の意味で論じるところだけ「安息日」） |
| hostiae Deo purae（13.4、14.2） | 神への清いささげ物（oblatio と同じく「ささげ物」で受け、「いけにえ」としない） |
| cata pascha（15.5） | 毎年の復活祭に（cata はギリシア語の κατά。7.2 の cata mansiones と同じ語） |
| psalmi uel antiphonae（15.5） | 詩篇と交唱（uel は「と」。antiphonae はここで初めて出る典礼の語で、24 章以降も「交唱」） |
| mature（15.5） | 朝早く（底本の索引の mature = mane） |
| tribunus（16.6） | 将校（この時代の軍の指揮官。「護民官」としない。19.1 の miles … cum tribuno suo は「兵がその将校と一緒に」） |
| in nomine Dei / in nomine Christi Dei nostri | 神の名によって／わたしたちの神キリストの名によって（5.11、9.7、17.1、18.1 など。旅の区切りに添える決まった言い方） |
| martyrium（人名が付くとき） | 〜の記念堂（17.1 の martyrium sancti Thomae apostoli「聖なる使徒トマスの記念堂」。名のない martyria は「殉教者の記念堂」） |
| confessor | 告白者（19.1、19.5、20 章。『キプリアヌス小品集』『リヨンの殉教者たち』と同じ。迫害で信仰を言い表し、生きている人。uir … monachus et confessor は「修道士で告白者でもある」） |
| statiua / statiuam facere | とどまる（18.1。19.3 の statiua triduana facere は「三日間とどまる」） |
| archiotipa（archiotepa） | 像（19.6、19.15。底本の索引の imago。大理石なので「大理石の像」） |
| cursor（Ananias cursor） | 急使（エウセビオスの ταχυδρόμος に当たる。「急使アナニヤ」） |
| nutus Dei / iussum Dei | 神のみこころ／神のご命令（19.13、19.12） |
| gentes（20.8） | 異教徒（町の人々。底本の索引の Heiden。「異邦人」としない） |
| scriptura canonis（20.10） | 正典の聖書 |
| fabulae（20.13） | 話（底本の索引の fabula ＝会話。「作り話」「物語」としない） |
| passus（mille passus） | 歩（20.8 の forte ad mille passus「千歩ほど」。6.1 の「百歩、二百歩」と同じ。マイルに直さない） |
| 暦の日付（20.5 の nono k. maias） | 今の日付に直す（「四月二十三日」）。原文の言い方と換算はメモに書く |
| orientalis（20.12 の Haec … specialiter orientalis appellatur） | 『東方』（地方の呼び名として『』に入れる）。23.3 の in oriente は呼び名ではないので『』に入れず「東方では」 |
| aputactitae（底本の綴りは aputactitum、aputactitis） | 世を捨てた人たち（23.3、23.6。ギリシア語の ἀποτακτῖται。修行の暮らしをする人々の呼び名で、24 章以降も同じ。23.3 の aputactitum seu uirginum は seu を「と」に取り「世を捨てた人たちやおとめたち」。23.6 では男も女も含む） |
| diaconissa | 女性の執事（23.3。diaconus「執事」に揃え、口語訳ローマ一六・一 のフィベの「教会の執事」とも合う） |
| metropolis | 州都（22.1 の ciuitatem metropolim Tharso） |
| actus sanctae Teclae | 聖なるテクラの行伝（23.5。書の名） |
| apostolos（23.9 の per singulas ecclesias uel apostolos） | 使徒たちの教会（底本の索引の取り方。メモに原文が一語であることを書く） |
| in corpore / extra corpus（23.10。欄は cf. II Cor. 12, 3） | からだのうちにあって／からだのままで、からだを離れて（口語訳第二コリント一二・三 の言い方に寄せる。20.13 の in corpore「この世に生きて」は欄に箇所がないので別） |
| idola（21.4。創世記三一・一九） | テラピム（聖書の話に出る語として口語訳に寄せ、メモに原文と七十人訳の「偶像」を書く） |

典礼の語（24 章で決めた。『秘義教話』の訳語表にはこれらの語がないので、底本の索引と後の章の用例を見て決めた。cathecisis など、まだない語は初めて出るページで決めて足す）：

| 原語 | 訳 |
|---|---|
| Anastasis | アナスタシス（主の墓の上の円い聖堂。音で写し、初出の 24.1 に訳注「『復活』の意。主の墓の上に建つ円い聖堂。」。底本の索引の illa rotunda ecclesia, quae Anastasis, hoc est resurrectio uocitatur と、エウケリウスの Anastasis in loco est resurrectionis による） |
| spelunca（Anastasis の） / cancelli（cancellus） | ほら穴（主の墓。3.5 と同じ語）／仕切り（ほら穴の前の仕切り。intro cancellos は「仕切りの内」） |
| basilica / ecclesia | 聖堂／教会（底本の索引が、エゲリアは二つを区別すると言う。24.10 の tota basilica Anastasis は「アナスタシスの聖堂全体」） |
| Crux / ad Crucem / ante Crucem / post Crucem | 十字架／十字架の所（ゴルゴタ。初出の 24.7 に訳注「主が十字架にかけられたゴルゴタの場所。」。エウケリウスの Golgotha … locus est dominicae passionis による）／十字架の前（十字架とアナスタシスのあいだの中庭。索引の 89, 3）／十字架の後ろ（コンスタンティヌスの大きな教会。25.1 で原文が説明する。35.2 でマルテュリウムの散会の後に行き、一年でこの日だけささげ物がささげられると言う post Crucem も、字どおり「十字架の後ろ」とし、訳注は付けない。どこを指すかは原文から決まらず、メモに書く）。場所の名として字どおり訳し、『』に入れない |
| missa / fit missa | 散会／散会となる（底本の索引の missa＝dimissio。祝福の後に人々を帰すこと。「ミサ」としない。24.6 の missa Anastasi は「アナスタシスでの散会」、後の missa ecclesiae は「教会の散会」の形。底本の索引が oblatio の意味に分ける 80, 5〔27.8〕の Missa autem, quae fit sabbato …, hoc est oblatio だけは「務め」と訳し、「土曜日にアナスタシスで行われる務め、つまりささげ物」とする。27.7、27.9 の土曜日の朝の missa は「散会」） |
| operatio | 務め（24.1、24.7。索引の Gottesdienst） |
| ymni / matutini ymni / antiphonae | 賛歌／朝の賛歌／交唱（15.5 と同じ）。psalmi responduntur（24.1）は「詩篇が応唱される」。cata singulos ymnos uel antiphonas は「賛歌と交唱のたびに」 |
| hora decima, quod appellant hic licinicon, nam nos dicimus lucernare | 第十時の務めは、ここでは「リュクニコン」と呼ばれます。わたしたちの言う「ともしびの祈り」です（中性の quod は時刻ではなく、その時の務めを受けるので「第十時の務め」とする。時刻そのものを務めの名で呼ばない。licinicon は索引の見出しの lychnicon〔λυχνικόν〕の音で写す。lucernare、lucernarium は「ともしびの祈り」、psalmi lucernares は「ともしびの祈りの詩篇」で受ける） |
| candelae / cerei / lucerna / lumen / luminaria / cereofala | ともしび（15.5 と同じ。24.7 の candelae uitreae は吊るすガラスの器で「ガラスのともしび」）／ろうそく／灯火（とうか。ほら穴の中で夜も昼もともる火。candelae の「ともしび」と字で見分けられるようにする）／光、火（24.4 の lumen de foris は「その火」）／明かり／燭台（語義は未確認。校注はデュ・カンジュの辞書を指すだけ） |
| monazontes / parthenae | 修道士たち／おとめたち（24.1 の ut hic dicunt は「ここで言う」。3.4 の ascitis と同じく意味で訳す。索引は monazontes＝monachi, monachae とし、後の章で monachi と同じ人々を指すので、monachus の「修道士」と訳し分けない） |
| fideles / laici | 信徒たち（洗礼を受けた人。cathecumini「洗礼志願者」と対になる）／一般の人たち（聖職者や修道士でない人。24.1 の laici … uiri aut mulieres は「一般の人たちも、男も女も」。fideles とぶつかる「信徒」にしない） |
| ad manum accedere（episcopo） | 監督の手のもとに進み出る（24.2 など。手に何をするかは原文も索引も言わないので、Bernard の「接吻するために」を足さない） |
| commemorare nomina / commemoratio | 名を挙げて思い起こす／祈りの中で思い起こすこと（『秘義教話』の μνημονεύω「思い起こす」。24.5 の facit commemorationem singulorum は「一人一人を祈りの中で思い起こす」。名簿のことは足さない） |
| kyrie eleyson, quod dicimus nos: miserere Domine | 「キュリエ・エレエーソン」と応えます。わたしたちの言う「主よ、あわれんでください」です（24.5。ギリシア語の正しい形 κύριε ἐλέησον の音で写す。聖書の欄に箇所がないので出典は付けない） |
| pisinni | 子供たち（24.5。底本の索引の pisinnus「小さい」。「聖歌隊の少年」と足さない） |
| thymiataria | 香炉（24.10） |
| commonetur episcopus / sedet susum | 監督が呼ばれる／上の席に座る（24.3、24.4） |
| descendere（監督や人々がアナスタシスなどへ） / exiens, exeunte episcopo | 下りて来る（24.1、24.3、24.4、24.9）／（仕切りの内から）出て来ると、出て行きながら（24.2、24.3、24.12） |
| ingredi（intra cancellos、in Anastase） | 入る（24.3、25.3、25.7。「進む」と揺らさない） |
| uigilare（uicibus …） / ad uigilias | 夜を明かす／徹夜の祈りに（24.8、24.12） |
| consuetudo / iuxta consuetudinem | ならわし／ならわしどおり（1〜23 章の訳と同じくひらく。「慣わし」としない） |
| rugitus et mugitus | うめき声とうなり声（24.10。後の章の同じ組も同じ訳で受ける） |
| ecclesia maior（quam fecit Constantinus … post Crucem） | 大きな教会（25.1 など。名は名前の表の Martyrium） |
| procedere in … / proceditur in … / processio | …へ行列して行く（その日の典礼の場所へみなで行くこと。底本の索引の Prozession halten）／行列（26.1 の processio est in Anastase は「アナスタシスへの行列があり」） |
| laetitia（celebratur） | 喜びの祝い（25.11、25.12。haec omnis laetitia は「この喜びの祝いはみな」） |
| ornatus（hornatus） | 飾り（25.8〜25.12） |
| uela / cortinae / auroclauus / holosericus（oloserica） / sericum（sirico） | 幕／垂れ幕／金の縞の入った／総絹の／絹（25.8） |
| ministerium | 器具（25.8。底本の索引の Kirchengeräte） |
| cicindela | 灯明（25.8。lucerna「灯火」、cereofala「燭台」と訳し分ける） |
| superfluum fuit scribi | 書くまでもありません（25.8。続けて飾りを述べるので、言い尽くせないという含みで読む） |
| quinquagesimae per pentecosten（25.6 の quinquagesimarum） | 五旬節の五十日目（の主の日） |
| quadragesimae de epiphania | 公現祭から四十日目の祭り（26.1。複数でも一つの祭り。初出に訳注「当時のエルサレムでは公現祭に主の降誕を祝った。」） |
| dies paschales / quadragesimae（複数） / eortae | 復活祭の時期（27.1。前の八週を含む季節）／四旬節（27.1 の sicut apud nos quadragesimae も「四旬節」）／「ヘオルタイ」（27.1 の quod hic appellant eortae, id est quadragesimas は、licinicon と同じ型で「ここでは「ヘオルタイ」と呼びます。つまり「四旬節」です」。ἑορταί の音。訳注は付けない） |
| secunda feria … sexta feria | 月曜日……金曜日（土曜日の「土曜日」に合わせ、今の曜日で訳す。in medio quinta feria は「週の中ほどの木曜日」） |
| martyrorum dies | 殉教者の記念の日（27.5） |
| ebdomadarii / qui faciunt septimanas (ebdomadas) / facere integras septimanas ieiuniorum | 「週の人たち」（27.9。ここでの呼び名として「」に入れる）／週を通して断食する人たち（27.9、28.1。呼び名の説明の id est で受ける）／断食の週をまるごと通す（28.3） |
| absoluere（目的語なし） | 断食を終える（27.9。底本の索引の finire ieiunium） |
| biduanas facere / de sera ad seram manducare | 二日ずつの断食をする／晩から晩へと、晩に一度だけ食べる（28.3） |
| psalmi responsorii | 応唱の詩篇（27.8） |
| de pullo primo | 最初の鶏が鳴くと（27.2、27.4。「すぐに」を足すのは 24.9 の mox … statim のように原文に語があるときだけ） |
| assidue（praedicant） | 欠かさず（27.6。「熱心に」としない） |
| archidiaconus / mittit uocem et dicit | 執事長／声を上げて、「…」と告げる（29.3、30.2。diaconus「執事」に揃える。告げる言葉の一人称複数の勧めは、parati simus「集まっていましょう」、conueniamus「集まりましょう」） |
| septimana paschalis / septimana maior | 復活祭前の週／「大いなる週」（30.1。復活祭の前の第八週。「復活祭の週」だと復活祭の後の週と紛れるので「前の」を補う。septimana maior は quam hic appellant の呼び名として「」に入れ、47 章も同じ訳で受ける） |
| pascha（復活祭の意） | 復活祭（29.5 の denuntiatur pascha「復活祭が告げられます」）。福音書の引用の中と、それを受ける地の文の ante sex dies paschae（29.6）は口語訳の「過越の祭」。二つが同じ語であることは、初めてぶつかる 29.5 に訳注「原文では『過越の祭』と『復活祭』は同じ語。」で示した |
| populus | 民（27.6、29.4 以降。omnis populus は「民はみな」。「人々」としない。人々を広く言う omnes は「みな」） |
| matronae / domini（31.4） | 身分の高い女の人／身分の高い男の人（domini を「主」「主人」としない） |
| cum ymnis | 監督が導かれる文（ducitur、deducitur）は「賛歌とともに」、みなが自分で進む文（itur、subitur）は「賛歌を唱えながら」 |
| sacramenta（aguntur sacramenta） | 秘義（26.1。『秘義教話』の μυστήριον と同じ。説教の後の聖餐の儀式を指すとみられる） |

## 聖書

- 底本は聖書の箇所を、本文の下の欄に `8 cf. Num. 11, 34` の形で挙げる（行番号と箇所）。エゲリアは聖書の話を要約して場所を示すので、ほとんどが暗示。底本の欄が箇所を挙げる暗示や要約は、『』に入れずに出典だけを付ける（『アントニオス伝』と同じ）。出典は底本の欄の箇所に従い、欄が章だけを挙げるときは `（出エジプト三二章）`。直接の引用が欄の節を越えて次の節まで続くときは、出典の範囲を広げてメモに欄の表記を書く（10.1 の欄は Deut. 32, 49、出典は（申命記三二・四九〜五〇））。底本の欄に箇所のないもの（2.5 の sicut scriptum est）は出典を付けない。
- 聖句をそのまま引くところ（底本は字間をあけて刷る。4.2 の quid tu hic Helias?、4.8・5.2 の solue corrigiam calciamenti tui）は『』に入れ、口語訳の文言に揃える。原文の形が口語訳と違っても（solue corrigiam は「くつのひもを解け」）、聖句の引用である以上は口語訳の「足からくつを脱ぎなさい」にし、`// ` メモに原文の形を書く。引用を略す et cetera は「云々」。字間をあけた語句が短い句だけのとき（5.5 の de porta in porta）も、底本の欄が cf. を付けていても『』に入れる（『門から門へ』）。
- 底本の欄の節の数え方が口語訳と違うとき（9.5 の cf. Num. 13, 23 は口語訳の一三・二二）は、口語訳の番号で出典を書き、`// ` メモに欄の表記を書く。
- エゲリアは七十人訳で聖書を読んでいて、口語訳にない地名や句をそのまま書くことがある（7.1・7.9 のアラビヤの地、7.7 のヘロオンの町、7.4 の Epauleum、7.5 の Oton と iuxta deserta loca）。口語訳に同じ地名があるもの（Epauleum＝ピハヒロテ、Oton＝エタム、Tathnis＝ゾアン）は口語訳の名にし、`// ` メモに七十人訳の形を書く。口語訳に当たる語がなく、読者が日本語の聖書を開いても見つからない句には、ほかの本の例（『秘義教話』の「旧約のギリシア語訳による。」）にならって訳注を付ける（7.1 の「ゴセンをアラビヤの地と呼ぶのは、旧約のギリシア語訳による。」）。直接の引用の中の句（7.9 の in terra Arabiae）は、口語訳の文言に揃えたうえで原文から足し、メモに書く。
- 直接の引用では、地名や言い回しは口語訳に揃え、原文の形をメモに書く（10.1 の Arabot は「アバリム山」）。数や出来事の中身は原文のまま残し、出典を開いた読者が違うものを見つけるときだけ、7.7 の言い方で訳注を付ける（10.4 の四十日に「日本語の聖書では三十日。」）。口語訳をそのまま引く文は、60 字を超えても分けない。著者の地の文が聖書と食い違うところ（12.8 の「エドムの国の町」、12.10 の「ベオルの子バラク」）は、原文どおり訳してメモに書き、訳注は付けない。
- 原文の引用が口語訳の句を欠くとき（36.1 のルカ二二・四一 に「ひざまずいて」がない、マルコ一四・三八 に「祈って」がない）は、口語訳の文言からその句を除いて引き、`// ` メモに原文の形を書く。
- 口語訳の文言のままでは前後と食い違う聖句は、口語訳を元に言い換える。12.2 の sepulturam illius nullus hominum scit（申命記三四・六、口語訳「その墓を知る人はない」）は、続けて墓が示されていると言うので、修道士たちの理屈に合わせて『その葬りを知る人はない』とした。
- 聖書の話に出る語は口語訳に寄せる（2.2 の「四十日四十夜」「妻の父の羊の群れ」、3.2 の「山が煙った」）。その土地で示された場所の言い方は、口語訳に合わせて言い換えない（3.5 の spelunca は「ほら穴」とし、出エジプト三三・二二 の「岩の裂け目」にしない）。モーセが砕いた板は口語訳出エジプト三四・一 の「初めの板」。

## 文型の訳し方

- 1.2 の ut tamen commonuerunt … dicentes のような、本筋の途中に挟む説明の文は、文を分けて地の文で訳してよい。
- id est で言い換えるところは「つまり」「すなわち」で受け、言い換えの語を落とさない（3.3 の id est summitas montis、3.6 の id est seu circa …）。来た人の範囲を言い直す id est qui …（3.4）も「つまり」で受け、除外の「ただし」にしない。言い換えを述語にして受けられるとき（3.8 の「立っていた場所は、教会の壁のまわり、つまり…頂でした」）は、二つ続く id est の両方に接続の語を置かなくてよい。
- 一文の中で nos と ego が切り替わるところ（2.7 の perueniremus … cognoueram）は、主語を補って「わたしたちが着く前から、わたしは知っていました」と訳し分ける。分詞の複数から動詞の単数へ移るところ（9.6 の proficiscentes ergo de Tathnis, ambulans … perueni）も、「わたしたちは…出発しました。わたしは…着きました」と文を分けて訳し分ける。複数の文から単数の文へ移るところ（12.1 の peruenimus … uidi）も、「わたしは」を補って数を示す。
- 聖書の箇所を読むこと（lectus est ipse locus de libro …、legeretur）は受け身で「読まれました」「読んでもらう」と訳す。原文が一人称複数の能動で言うところ（19.2 の aliquanta ipsius sancti Thomae ibi legimus）は「わたしたちは…読みました」と原文どおりにする。読むのは聖職者たちで、エゲリアが自分で読むようにしない。詩篇を唱えること（dictus est psalmus、diceretur psalmus）も同じく受け身で「唱えられました」「唱えられます」と訳す（4.4、10.7、11.3）。原文が唱える人や読む人を主語にして能動で言うところ（24.9 の dicet psalmum quicumque de presbyteris、24.10 の leget … episcopus ipse）は、19.2 と同じく能動で「長老のだれか一人が詩篇を唱え」「監督自身が…読みます」と訳す。祈り（facta est oratio）だけは一行がするものとして「祈りをする」と能動で訳す。主語を言わない能動の legent singulas lectiones（25.10）も、聖書の箇所を読むこととして受け身で「聖書の箇所が一つずつ読まれ」とし、「朗読が読まれ」と重ねない。説教・朗読・賛歌を並べる dum … uel … uel …（25.10）は、時を厳密に重ねずに並べて訳す。
- 前に済んだことを振り返る過去完了（5.2 の ubi manseramus et uideramus）は、「泊まった所です」「すでに見ていました」のように、新しい出来事と見分けられる形にする。人の動作も同じ（19.19 の quas nobis ibi legerat「先にそこでわたしたちに読んでくれていました」）。
- 場所や範囲を絞る tamen（19.9 の foras ciuitatem tamen、19.10 の in miliario tamen tertio）は「ただ〜だけ」と限定に訳し、前を受けて逆らう tamen（19.10 の quam tamen custodierunt）の「それでも」と訳し分ける。
- 町や建物の様子を述べる現在形（18.1 の abundans omnibus est、19.3 の ecclesia … ingens）は、旅の過去の語りの中でも今のこととして「〜です」「〜あります」で訳す。
- 一行が受け手になる nobis、nos（19.16〜19.19）は、エゲリア一人の me、michi から移るところで落とさず「わたしたちに」と訳す。
- de quo locutus est Dominus (Deus) Moysi in igne（4.7、5.2）は「そのしばから、主は火の中でモーセにお語りになりました」のように「火の中で」と訳す。2.2 の de rubo in igne「燃えるしばの中から」は別の形。
- エゲリアがギリシア語の語を出して quod nos dicimus … と説明するところ（7.7 の come … quod nos dicimus uicus、8.4 の dendros alethiae, quod nos dicimus arbor ueritatis）は、ギリシア語を音で写して「」に入れ、説明の語も「」に入れる（「コーメー」、つまりわたしたちの言う「村」）。3.1 の「巻き貝のように」と同じ形。音はギリシア語の正しい形から写し、ラテン語の字の崩れに従わない（15.3 の cepos tu agiu iohanni は κῆπος τοῦ ἁγίου Ἰωάννου から「ケーポス・トゥー・ハギウー・ヨーアンヌー」）。台詞の中では『』に入れる（13.4、15.3）。
- 地の人々や監督が語った言い伝えを eo quod … の間接話法で伝えるところ（8.5 の Farao … isset … et incendisset、19.17）は、「」に入れず、「〜そうです」「〜というのです」で受ける。その中の理由の quia、nam も「〜からです」で残す（8.5 の quia infinita erat ualde「町がとても大きかったからです」）。ただし、eo quod で始まっても、同じ話の中で語り手がエゲリアに二人称で語りかける（19.14〜19.15 の ut uides、uides）ときは、直接話法として「」に入れる。
- 6.2、8.3 の ponent、tendent、uadent、tollent、8.2 の dicent は、底本の索引が言う -ent の現在形（未来ではない）。いつものならわしとして「〜します」で訳す。単数の -et（24 章の benedicet、dicet、colliget、descendet、mittet、prendet、uadet など。索引の Coniugationis formae insolentiores に挙がる）も同じく現在形で、同じ文の intrat、facit などと並べて「〜します」で訳す。
- quemadmodum ＋未来完了（底本の索引の wenn, während）は「〜したら」「〜に入るまで」と、係る語の側で訳す（27.7 の usque in mane, … quemadmodum intratum fuerit in alia die mane は「次の日、すなわち土曜日の朝に入るまで」。28.1 の quemadmodum manducauerint は「食事をしたら」）。
- sicut superius dixi（diximus）が名詞句や動作を受けるときは、受ける動作の直前に置き、人を修飾する「〜ような、〜人たち」の形にしない（28.3 の「断食の週を、先にわたしたちが述べたようにまるごと通すことのできない人たち」）。dixi は「先に言った」、diximus は「先にわたしたちが述べた」と数のとおりに訳し分ける。
- uicibus … uicibus … の列挙（27.8）は、「代わる代わる」を列挙の頭に一度だけ置き、動詞を重ねない。
- forsitan と数（10.8、12.7 の forsitan miliario sexto）は「六マイルほど」とし、「おそらく」と重ねない。
- laborem (sibi) imponere は、意志の形（10.8 の si uolueritis）なら「労をいとわない」、能力の形（11.3 の qui potuerunt）なら「労に耐えられる」と訳し分ける。
- 土地の修道士たちが言う maiores（12.2。前にその土地に住んだ人々）は「先人たち」とし、血筋の「先祖」としない。いま生きている修道士を言う maiores（20.5 の illos maiores, qui in solitudine sedebant）と、話に出る修道士を言う monachi maiores（20.13）は「すぐれた」（「すぐれた人たち」「すぐれた修道士たち」）と訳し分ける。
- in hoc loco, ubi …（14.2）のように場所を受ける ubi の節は、場所の説明として訳し、「〜だからです」と理由にしない。
- ad salutandum me suscipere（20.7）、ad salutationem（11.1）は、エゲリアのあいさつを相手が受け入れる意味で訳し（「迎え入れてあいさつを受け」）、相手があいさつをするようにしない。
- reuelo と ostendo は「啓示する」「示す」と訳し分ける（16.5 の iuxta quod ei fuerat reuelatum は「啓示を受けたとおりに」）。
- 16.7 の per quas ieramus tres annos は、底本の校注で Geyer が言う ante tres annos の意で「三年前に通った宿駅」と訳し、メモに書く。
- 長老や土地の人がエゲリア一人に語る二人称単数（13.4 の quam uides、16.3 の quem uides）は「あなた」、一行に語る複数（14.2 の quae uidetis、15.3 の uos dicitis）は「あなたがた」と訳し分ける。
- 並んだ二つの名詞の後の関係詞 qui（複数）は、両方を受けて「この人たちは」と訳し、片方に絞らない（21.5 の sancto episcopo et sanctis monachis, qui …）。
- 程度の satis（21.4 の ingens satis、23.4 の satis pulchrum、satis mali）は「たいへん」と訳して落とさない。5.8 の satis fuit（訳語表）は別。qui minus と対になる 28.4 の qui satis fecerit は「多くした人」（底本の索引も程度の列から分ける）。
- ne ＋接続法の目的の節（23.4 の ne forte conentur）は「〜させないため」「〜しないように」と訳し、「〜するかもしれない」という心配の文にしない。
- deputo（23.4 の monasterium, quod ibi est deputatum）は「（そこに）属する、あてがわれた」と訳し、「建てられた」としない（底本の索引の deputare）。
- 人の範囲を言う quicumque sunt（25.12 の loci ipsius monachi, quicumque sunt）は「〜はみな」と訳し、「何人いても」と人数の話にしない。
- 章や段落の頭の Sane（26.1）は軽く訳すか訳さずにおき、「〜も」と前と並べる語を足さない。
- 主が受け手になる受け身のうち、「導かれる」のように尊敬語と読み紛れる動詞（31.3 の quo tunc Dominus deductus est）だけは、「かつて人々が主をお連れしたのと同じ形で」と能動に直す。「捕らえられる」「十字架にかけられる」のように受け身としか読めない動詞は、受け身のまま訳す（29.6 の comprehenditur Dominus「主が捕らえられた」、24.7 の訳注の「主が十字架にかけられた」）。
- 文の頭の porro（31.2、31.4）は軽いつなぎの語として「そうして」「そこから」程度に訳し、「そのため」と因果を足さない。文の頭でなく場所の句に付く porro（36.3 の forsitan porro ad ciuitatem）は、距離を言う「遠く」と訳す（「遠く町まで聞こえるかと思うほど」）。
- 職名に付く ipse（33.2 の stans ipse episcopus leget、24.10 の leget … episcopus ipse）は、読む・唱える動詞と結んで「監督自身が」と訳し、「自分で立って」のように別の動詞に係らせない。
- 並ぶ複数の語に係る aptae diei (et loco)（35.4 の lectiones et ymni et antiphonae aptae diei）は、全部に係るように訳す（「どれもその日にふさわしいものです」）。語順で一つにだけ付けない。
- 理由を言う enim（36.5 の de hora enim sexta）は落とさず、「〜からです」で受ける。
- quasi homo hominem cognoscere（36.3）は「人がどうにか人の顔を見分けられるようになる時刻」と、決まった言い方として揃える。
- 監督が民に語る言葉（36.5）は、年長の聖職者の敬体で「〜してください」とし、民を uos で呼ぶところも「皆さん」などと言い足さない（sedete uobis の再帰の与格は訳さない）。
- 定動詞のない文（31.2 の Nam totus populus ante ipsum cum ymnis … respondentes。Geyer は校注で uadit を案として示す）は、動詞を補って訳し（「監督の前を進み」）、`// ` メモに原文に動詞がないことを書く。
- 体の部分を言う手段の de（37.2 の de manibus suis、37.3 の primum de fronte, sic de oculis）は「両手で」「まず額で、次に目で」と訳し、起点の「〜から」にしない。
- affectus（37.7）は「心を動かされる」で受け（34.1 と同じ）、「心の高ぶり」としない。
- in ecclesia maiore ad Martyrium（37.8）のように id est のない並びは「大きな教会のマルテュリウム」とし、「つまり」は id est があるとき（30.3、32.1）だけにする。
- 時を言う Post hoc（36.5、37.1、37.7）は「その後」。sedere modice（36.5、37.1）は「少し座って休む」。
- hac sic ergo、ac sic ergo、itaque ergo のような話をつなぐ決まった言い方は、「こうして」「そこで」程度に軽く訳し、一つずつ訳し分けない。

## 名前の表

口語訳にある名前は口語訳の表記にする（`node tools/bible.js` で確かめた）。原語の欄の綴りは底本の OCR（l. 4790〜7852）で見つかったもの。OCR で見つからなかった地名（アイノンなど）と、ほかの名前は、初めて出るページで画像から綴りを確かめて足す。

| 原語 | 訳 |
|---|---|
| Egeria（著者。底本の題では Siluia） | エゲリア |
| Syna / mons Dei | シナイ／神の山 |
| Choreb | ホレブ（口語訳出エジプト三・一） |
| Faran | パラン（口語訳民数記一〇・一二） |
| Moyses | モーセ |
| Aaron | アロン |
| Iesus Naue | ヌンの子ヨシュア（口語訳。ラテン語の形は七十人訳の Ἰησοῦς Ναυή による） |
| Pharao | パロ（口語訳） |
| Israhel / filii Israhel | イスラエル／イスラエルの人々 |
| Egyptus / Palestina | エジプト／パレスチナ |
| mare rubrum | 紅海 |
| Saraceni | サラセン人 |
| Alexandria | アレキサンドリヤ（口語訳） |
| mare Parthenicum | パルテニクムの海（3.8。地中海の東の部分。訳注は付けず `// ` メモに書く） |
| terra Gesse（Iesse、Gessen、Iessen とも書く） | ゴセンの地（口語訳創世記四五・一〇。底本の索引も一つの項にまとめる。Iesse はエッサイと同じ綴りだが、ここではゴセン） |
| Arabia（ゴセンの地の町） / terra Arabiae | アラビヤの町（7.1 の ciuitatem, quae appellatur Arabia は「アラビヤという町」。10 章の地方の Arabia と分けるため、町には「町」を付ける）／アラビヤの地（口語訳の表記「アラビヤ」） |
| Clesma | クレスマ（紅海のほとりの砦と町） |
| Faranitae | パランの人々 |
| Heroum ciuitas / Hero | ヘロオンの町（七十人訳創世記四六・二九 の Ἡρώων πόλις）／ヘロ（今の村の名） |
| Nilus | ナイル川 |
| Thebais / thebeus（lapis） | テーバイス（上エジプトの地方。口語訳の町の「テーベ」と分ける）／テーバイスの（石） |
| Pelusium | ペルシゥム（口語訳エゼキエル三〇・一五） |
| Tatnis / Tathnis | ゾアン（口語訳民数記一三・二二。底本の欄が民数記一三章を挙げてタニス〔七十人訳の Τάνις〕とみるので、口語訳の名にする。Bernard はタパネスとみて Taphnis と推定する） |
| Helia | アエリア（ハドリアヌス帝がエルサレムに付けた名。9.7 の in Helia, id est in Ierusolimam は「アエリア、つまりエルサレム」。エリヤと紛れる「ヘリア」としない） |
| Ramesse / Ramessen（OCR では Kamesse、Kamessen と崩れる） | ラメセス（口語訳民数記三三・五） |
| Pithona（Phitona） / Socchoth / Oton | ピトム（口語訳出エジプト一・一一）／スコテ／エタム（口語訳民数記三三・五〜六。Oton は七十人訳出エジプト一三・二〇 の Ὀθόμ） |
| Magdalum / Epauleum / Belsefon | ミグドル／ピハヒロテ（Epauleum は七十人訳出エジプト一四・二 がピハヒロテを ἔπαυλις と訳した形）／バアル・ゼポン（口語訳民数記三三・七。底本の綴りは Belsefon。p. 47 校注 19 によれば、写本は belsepon から belsefon に直されている。Belsephon は Mommsen と Purser の推定の綴りで、OCR の Belsepbon はその読み誤り） |
| Nabau / Arabot | ネボ山（口語訳申命記三四・一）／アバリム山（10.1 の montem Arabot。口語訳申命記三二・四九 の名にし、メモに原文の形を書く）。10.4 の in Arabot Moab は口語訳三四・八 の「モアブの平野」 |
| Libiada（Libiadam、Libiade） | リビアダ（ヨルダンの東の町。底本の綴りの音で写す。口語訳にない） |
| Ruben / Gad / dimidia tribus Manasse | ルベンの子孫／ガドの子孫／マナセの部族の半ば（口語訳ヨシュア記二二・一〇） |
| mare mortuum / Sodomitae | 死海／ソドムの人々 |
| Loth | ロト |
| Esebon / Exebon | ヘシボン（口語訳民数記二一・二六）／エクセボン（今の名。音で写す） |
| Seon rex Amorreorum / Og rex Basan / Sasdra | アモリびとの王シホン／バシャンの王オグ（口語訳）／サスドラ（オグの町の今の名。音で写す） |
| Edom | エドム（12.8 の ciuitas regni Edom「エドムの国の町」は、聖書の地理と合わないが原文どおり訳し、メモに書く） |
| Balac / Balaam / Beor | バラク／バラム／ベオル（12.10 の Balac filius Beor は原文どおり「ベオルの子バラク」とし、聖書との違いはメモに書く） |
| Agrispecula | 「野の見張り場」（12.10。七十人訳民数記二三・一四 の ἀγροῦ σκοπιά を訳した形で、口語訳はゾピムの野。山の名なので 1.1、5.7 と同じく意味で訳す） |
| Iericho / Iordanis | エリコ／ヨルダン |
| Fogor | ペオル（口語訳民数記二三・二八） |
| Segor | ゾアル（口語訳創世記一九・二二） |
| Ausitis（底本は Ausitidem、Ausitidi） / Iob | ウヅの地（口語訳ヨブ記一・一）／ヨブ |
| Melchisedech / Salem / Abraam | メルキゼデク／サレム（口語訳創世記一四・一八）／アブラハム |
| Helias Thesbites / Thesbe / Corra | テシベびとエリヤ（口語訳列王紀上一七・一）／テシベ／ケリテ（口語訳列王紀上一七・三。底本の綴りは Corra。七十人訳の Χορράθ） |
| Achab | アハブ |
| Carneas / Dennaba / Idumea | カルネアス（ヨブの町。口語訳にないので音で写す）／デナバ（口語訳創世記三六・三二）／エドム（13.2 の in finibus Idumeae et Arabiae「エドムとアラビヤの境」。旧約の地名として口語訳の「エドム」にし、新約の「イドマヤ」にしない） |
| Sedima | セディマ（13.3。サレムがなまった名と原文が言う） |
| opu Melchisedech（13.4）/ opus Melchisedech（15.5） | 「オプ・メルキゼデク」／「オプス・メルキゼデク」（同じ教会のギリシア語の名。13.4 は崩れていて短剣符があるので、刷られた字を音で写し、訳注で崩れを示す。15.5 も「わざ」と訳さず音で写す） |
| Codollagomor rex gentium | 諸国の王ケダラオメル（14.3。口語訳の名に揃え、称号は原文どおり。聖書との違いはメモに書く） |
| Enon / Salim | アイノン／サリム（口語訳ヨハネ三・二三。13.4 のサレムと書き分ける） |
| Iohannes baptista | バプテスマのヨハネ（口語訳。15.2 の sanctum Iohannem baptistam は「聖なるバプテスマのヨハネ」） |
| Getha | ゲタ（16.1。底本の音で写し、欄の士師記一二・七 から「士師記のエフタを指すとみられる。」と訳注を付ける） |
| Fenice | ピニケ（口語訳使徒一一・一九） |
| Edessa / Aggarus / Magnus | エデッサ／アブガル（エデッサの王。底本の綴りは Aggarus）／マグヌス（アブガルの子。底本の綴りの音で写す） |
| Thomas apostolus | 使徒トマス |
| Ananias（cursor） | アナニヤ（口語訳使徒九・一〇 の表記） |
| Persae / Persida | ペルシャ人／ペルシャ（口語訳エズラ記一・一 の「ペルシャ」） |
| Constantinopolis | コンスタンティノポリス |
| Siria Celen（prouincia） | コイレ・スリヤ州（18.1。Syria Coele。名前の表のスリヤに合わせる） |
| Augustofratensis（prouincia） | アウグストフラテンシス州（18.1。底本の綴りの音で写す） |
| Gerapolis / Ierapolis | ヒエラポリス（18.1、18.2。同じ町 Hierapolis で、底本の索引も一つの項にまとめる） |
| Rodanus | ローヌ川（18.2） |
| Batanis | バタニス（19.1。底本の綴りの音で写す。原文は聖書に名が出ると言うが、箇所は分からない） |
| Mesopotamia / Syria | メソポタミヤ／スリヤ（口語訳。17.1、18.3 の Mesopotamia Syriae は七十人訳創世記二八・二 の形で「スリヤのメソポタミヤ」） |
| Eufrates | ユフラテ（口語訳創世記一五・一八） |
| Charra（Charram） / Charris | ハラン（口語訳創世記一一・三一。20.1 で原文が聖書の名と言う Charra と、その後の Charra はみな「ハラン」）／カルラエ（20.1 の ad Charris, quia modo sic dicitur。今の名の Charrae〔Carrhae〕の形。底本の索引の Charra, modo Charrae dicitur。21.1 の a Charris も「カルラエ」） |
| Abraham / Naor（Nahor、Nachor） / Bathuhel（Bathuhelem、Bathuhelis） / Laban / Iacob / Rachel / Rebecca / Ysaac | アブラハム／ナホル／ベトエル／ラバン／ヤコブ／ラケル／リベカ／イサク（口語訳） |
| Thara / Sarra | テラ／サラ（20.9。アブラハムを「アブラハム」とするのに合わせ、創世記一一・三一 の口語訳の「サライ」にしない） |
| Laban Syrus（Laban Syri） | アラムびとラバン（口語訳創世記二五・二〇、三一・二〇。二八・五 では「アラムびと」はベトエルに付く。七十人訳の「スリヤ人」の形だが、人の呼び名は口語訳に揃える） |
| Eleazar（puer Abrahae。20.4 の Eleazari） | エリエゼル（口語訳創世記一五・二。創世記二四章はしもべの名を言わない。綴りどおりの「エレアザル」は口語訳ではアロンの子なので使わず、メモに書く） |
| Helpidius | ヘルピディウス（20.5。ハランの殉教者の記念堂の修道士） |
| Chaldaei / Hur / Nisibis | カルデヤ人／ウル（口語訳創世記一一・二八 の「カルデヤのウル」）／ニシビス（20.12） |
| Romani | ローマ人 |
| Antiochia / Tharsus（Tharso） / Cilicia | アンテオケ／タルソ／キリキヤ（口語訳） |
| Efesus | エペソ（口語訳） |
| Ierusolima | エルサレム |
| Syon | シオン |
| mons Oliueti | オリブ山（口語訳使徒一・一二） |
| Bethleem / Bethania | ベツレヘム／ベタニヤ |
| Golgotha | ゴルゴタ |
| Iudas Scariothes / Iudaei | イスカリオテのユダ（口語訳マタイ二六・一四）／ユダヤ人（34.1 の ad Iudeos は、マタイの「祭司長たち」と違っても原文どおり「ユダヤ人たちのところへ」） |
| Gessamani（36.3 は Gessemani とも書く） | ゲツセマネ（口語訳マタイ二六・三六。綴りが違っても同じ場所） |
| Pilatus | ピラト |
| mons Eleona（33.1） | エレオナの山（この書でここだけエレオナを山の名として使う。オリブ山のこと。字どおり訳し、メモに書く） |
| Fadana | ファダナ（21.4。ラバンの屋敷だった村。底本の綴りの音で写し、「創世記のパダンアラムに当たる名とみられる。」と訳注を付ける） |
| Hisauria / Hisauri | イサウリア／イサウリア人（『タティアノス』の「イサウリア人」と同じ） |
| Thecla（底本は Tecla） | テクラ（『テルトゥリアヌス小品集』と同じ。口語訳にない） |
| Ponpeiopolis / Corycus（Corico） / Seleucia Hisauriae | ポンペイオポリス／コリュコス／イサウリアのセレウキア（使徒一三・四 の「セルキヤ」〔スリヤのセレウキア〕とは別の町なので、音で写してメモに書く） |
| Marthana | マルタナ（23.3。女性の執事） |
| Mansocrenas / mons Taurus | マンソクレナス（底本の綴りの音で写す）／タウロス山 |
| Cappadocia / Galatia / Bithinia | カパドキヤ／ガラテヤ／ビテニヤ（口語訳） |
| Calcedon（Calcedona） / Eufimia | カルケドン／エウフェミア（『迫害者たちの死について』の「カルケドン」と同じ） |
| Asia / Iohannes apostolus | アジヤ（口語訳使徒一九・一〇）／使徒ヨハネ |
| Martyrium（Martyrio） | マルテュリウム（ゴルゴタの十字架の後ろの大きな教会の名。初出 27.3。音で写す。名の由来を原文が述べる 30.1 の最後の「マルテュリウム」に訳注「殉教者の記念堂を言う語と同じ。」を付けた。原文は「主が苦しみをお受けになった所にあるから」と言うだけで、語の意味を知らないと理屈が通らないため。27.3 には付けない） |
| Inbomon | インボモン（31.1。主が天に昇られた場所。原文が id est in eo loco, de quo ascendit Dominus in caelis と説明するので音で写し、訳注は付けない。後の章にも何度も出る） |
| Constantinus | コンスタンティヌス（25.9 の matris suae は「母」とし、原文にないヘレナの名を足さない） |
| Eleona | エレオナ（オリブ山の教会。25.11 で原文が id est in ecclesia, quae est in monte Oliueti と説明するので音で写す） |
| Lazarium（in Lazariu） | ラザリウム（ラザロの墓の教会。25.11。82, 3 で原文がベタニヤと言い換える） |
| Ioseph（37.8。アリマタヤの） | ヨセフ（原文に地名がないので「アリマタヤの」を足さない。26.1 のヨセフとは別人） |
| Ioseph / Maria / Symeon / Anna prophetissa filia Fanuhel | ヨセフ／マリヤ／シメオン／パヌエルの娘で女預言者のアンナ（口語訳ルカ二・二五、三六。26.1 の Symeon uel Anna の uel は「と」） |
