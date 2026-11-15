# テルトゥリアヌス小品集の決まり

カルタゴのテルトゥリアヌスの短い著作四つ（『殉教者たちへ』『見世物について』『祈りについて』『洗礼について』）を、この順に一冊にする。同じ著者・同じ底本の『護教論』（`books/tertullian-apology/AGENTS.md`）の決まりを引き継ぐ。底本の扱い、訳語表、文型の訳し方、名前の表は、同じ語を同じ意味で使うかぎり『護教論』に従い、ここには写さない。ここには、この本で違うところと、この本に固有の決まりだけを書く。食い違うときはこのファイルを優先する。『祈りについて』の主の祈りの句は、オリゲネス『祈りについて』（`books/origen-on-prayer/AGENTS.md` の「主の祈り」）の訳に揃える。あとで訳すキプリアヌスの小品集（cyprian-treatises）は、この本の訳語を引き継ぐ。

## 節の形

- 作品ごとに底本ファイルを分ける。`research/oehler-1853-ad-martyras.txt`、`…-de-spectaculis.txt`、`…-de-oratione.txt`、`…-de-baptismo.txt`。`research/pages.json` では、2 作目以降のページに `base` を付けてある。
- 節のディレクトリ名は `03-de-spectaculis-01-03` のように、通しの番号、作品、章の範囲。
- 章の番号は作品ごとに底本（Oehler 1853）の欄外の `Cap.` に従う。ANF の英訳と CSEL 20 も同じ章の番号。
- 底本にも英訳にも節の番号がないので、節の番号はこの訳で付けたもの。『護教論』と同じく、章の本文を文の切れ目で 25 語以上のまとまりに切って番号を付ける。切るのは `node tools/split-units.js` で、手で切り直さない。レビューで英訳や他の版と照らすときは、章の中の位置で照らす。
- 底本の 1 節ごとに、ラテン語の行、続けて訳の行を置く。訳の行は `1:1 ` のように章と節の番号で始める（作品の名は付けない）。
- 章の中では空行を入れない。章と章のあいだに空行を一つ入れる。
- 見出しは `# 殉教者たちへ　1〜3 章　…` の形（作品の名、章の範囲、中身）。作品の名は『』を付けずに書く。

## 底本の起こし方

- 本を始めたときに起こしたのは『殉教者たちへ』1 章（1.1〜1.8）だけ。各ページのセッションは、page-context を作る前に、そのページの章を Oehler の画像（`pages.json` の `images`）から起こし、scratchpad に 1 章 1 行（`<章> <本文>`）で書いて、`node tools/split-units.js <その file> books/tertullian-treatises/research/oehler-1853-<作品>.txt` で節に切って足す。最初のページ（01-ad-martyras-01-03）では 2〜3 章だけを足す（1 章を二重に足さない）。2 作目以降の作品のファイルは、その作品の最初のページで split-units が作る。ファイルがないうちは page-context が止まる。
- 起こし方は『護教論』の「底本の扱い」に従う（本文だけを起こし、校注番号・注解の記号・柱・欄外の章番号や聖書の箇所は起こさない。行末で分けられた語はつなぐ。綴り、大文字、句読点、引用符は刷られたとおり）。底本の明らかな刷りの誤りは、『護教論』と同じく正しい形で起こし、訳の `// ` メモに刷られた形を書く（1.7 の committat は刷りでは commitat。注解 k の見出しは committat）。OCR との突き合わせはスクリプトで行う（u と v、j と i をそろえ、語の列を比べる）。どの画像をどの範囲で読んだか、OCR と違ったところは `research/sources.md` の IIIF の行に書き足す。
- `images` の範囲は、各章の校注の見出し（`Cap. N.`）が初めて出る画像から割り出した。章の本文がページの最後の行から始まると、見出しは次のページに出るので、章の書き出しが範囲の最初の画像になければ 1 つ前の画像を見る。
- IIIF（`tools/iiif-crop.js`）が応答しないときは、archive.org のページ画像 `https://archive.org/download/quintiseptimiifl0001fanc/page/nN_w1600.jpg` を `tools/fetch.js` で取る。N は IIIF の番号より 1 小さい。
- 『祈りについて』は、19 章の終わり（disciplinam の後）から先、つまり 20 章以降を一部の写本（C、D と刊本 a）が欠く（底本の 19 章の校注 10、djvu l. 69690〜69700）。底本は 20〜29 章を続けて刷る。訳は底本どおりにし、読者に知らせるかどうかは、その章のページで論点一覧を見て決める。

## 照らし合わせる版

- CSEL 20（Reifferscheid & Wissowa 1890）は『見世物について』『祈りについて』『洗礼について』を収める（『殉教者たちへ』は収めない）。論点一覧で、Oehler と読みが違う箇所を拾うのに使う。訳は Oehler の読みで行う。
- 英訳は ANF 第 3 巻（S. Thelwall 訳）。レビューで読み比べる。

## 文体

- 4 作とも地の文は敬体（「〜です」「〜ます」）。書き手のテルトゥリアヌスは「わたし」、キリスト者全体は「わたしたち」。キリスト者の神とキリストの動作は尊敬語にする（『護教論』と同じ）。
- 『殉教者たちへ』：牢にいる、殉教者となるべき人々（1.1 の benedicti martyres designati）に宛てた励まし。読み手は「あなたがた」。呼びかけの benedicti は「祝福された人々よ」。書き手は、自分は語りかけるほどの者ではないと言う（1.2 の Nec tantus ego sum）ので、へりくだった調子を保つ。命令（nolite contristare など）は「〜してはなりません」「〜しなさい」（口語訳の書簡の勧めの言い方）。1.4 だけはエペソ四・三〇 の口語訳に揃えて「聖霊を、悲しませてはいけません」とし、原文にない「神の」は足さない。読み手に向けた三人称の接続法の勧め（2.2 の Nec hoc vos consternet）も「〜してはなりません」とし、推量の「〜でしょう」にしない。悪魔に向けた接続法（1.6〜1.7 の Non dicat、Fugiat、Nec illi … sit、inveniat）は「言わせてはなりません」「〜すればよいのです」「〜ありませんように」。悪魔の言葉は「」に入れ、一人称は「おれ」、キリスト者を「やつら」と呼ぶ（1:6）。2 章と 3 章の一般の二人称単数（deambulaveris、vides、lucreris）は「あなた」。
- 『見世物について』：「神のしもべたち」（dei servi）、すなわち信仰に近づいている人々と、すでに信仰を告白した人々に向けた論。読み手は「あなたがた」。異教徒や、見世物を擁護する人の言い分は、『護教論』の型（言い分を「」に入れて常体にし、「と、人は言います」と受ける）に従う。
  - 言い分の「」の中で、相手がキリスト者一人に語りかける二人称単数（1.2 の tua）は「あなた」。相手の口から神を言うところは尊敬語にしない（2.2 の「神自身が造ったもの」）。言い分の中に書き手が挟む一人称の言葉（2.1 の sicut praedicamus）は、「」を閉じて地の文で「これは、わたしたちも説くとおりです」と受け、次の句で「」を開き直す。
  - 間接話法で紹介するだけの考え（1.3 の Sunt qui existiment …）は「」に入れず、「〜と考える人々もいます」「〜というのです」と地の文で受ける。
  - 3 章の詩篇一・一 は、口語訳を下敷きにし、原文が七十人訳の形で、続く論が concilium を人の集まりとして扱うので、次の句にする：『悪しき者の集まりに行かず、罪びとの道に立たず、疫病のような者の座にすわらなかった人は、さいわいである』。論の中で詩篇の語を引くところ（3.5、3.9 の concilium impiorum）は『悪しき者の集まり』と『』に入れる。見世物の場の名として言う「道」「座」（3.6〜3.7）は「」。詩篇を裏返した書き手の言い方（3.7 の contrario infelix …）は聖句でないので『』に入れない。十戒の言い換え（3.2）は、口語訳の「〜してはならない」の形で、原文の語のまま『』に入れ、書き手が仮に作った禁令（Non ibis in circum …）も『』に入れる（書かれた文字の扱い）。
  - 書き手がキリスト者一人に呼びかけるところ（8.6〜8.7 の Christiane、tibi、inquis）は「キリスト者よ」「あなた」。そのキリスト者の問いは「」に入れて常体にし、「と、あなたは尋ねます」と受ける（言い分の型の「人は」を「あなたは」にする）。
  - 6.1 と 7.1 の utriusque generis ludi は「両方の種類の遊戯」とし、中身を補わない（Oehler の注 b は戦車競走と劇場とするが、6.3 は聖なる遊戯と葬いの遊戯に分ける）。12.8 の utriusque ludi は闘技場の剣闘と獣狩り（注 p）で、6.1 と別のものなので「両方の遊戯（剣闘と獣狩り）」と補う。
  - 第一コリントの言い換え（13.1〜13.2）のように、原文が聖句を言い換えて引くところは『』に入れず、口語訳を参考にして地の文で言い換える。口語訳の「悪霊」に当たる daemonia も、訳語表の「ダイモン」で訳す。
  - 名を出さない詩人の引用（9.3 のウェルギリウス）は、名を補わず「こうも歌われています」と受け、出典は `// ` メモに書く。
  - 本文が名を出さずに ille で指す人は、『護教論』の「強めの ipse・ille」の決まりに従い、本文だけでは読者がだれか分からないときに限って、Oehler の注に従って名を補う（3.4 の iustum illum は、詩篇をだれに当てはめたかが本文から分からないので「あの正しい人、アリマタヤのヨセフ」）。名を出さない町（7.3 の illius urbis, in qua daemoniorum conventus consedit。注 f のとおりローマ）も同じ扱いで、属州と対比していて分かるので補わない。本文がその人の行いを物語っていて、名がなくても話が通るところ（『殉教者たちへ』4.7 のアテナイの遊女、『護教論』50.6）は補わない。
- 『祈りについて』『洗礼について』：教会の中の読み手に向けた教え。主語が書き手と読み手を含むときは「わたしたち」。『洗礼について』の論敵（1 章で言うカイン派の異端の者）とその仲間への言い返しも、『護教論』の言い分の型に従う。
- 人の語りかけの調子は、最初に出たページで決めてここに書く。
- 『殉教者たちへ』4.2 の女たちへの呼びかけ benedictae は「祝福された女たちよ」（1.1 などの benedicti「祝福された人々よ」と分ける）。霊に向けた三人称の接続法の勧め（4.2 の Colloquatur spiritus、contraponat）は「霊に…させなさい」。

## 主の祈り

『祈りについて』2〜8 章は、句ごとに 1 章を立てて説き明かす。句の順は英訳の章の題によれば、父（2 章）、御名（3 章）、みこころ（4 章）、御国（5 章）、パン（6 章）、ゆるし（7 章）、試み（8 章）で、みこころが御国より先に来る（底本の本文で確かめ、違っていたら直す）。訳はオリゲネス『祈りについて』の表を下敷きにするが、そこで口語訳から変えた句は、オリゲネスのギリシア語の論に合わせて変えたものなので、テルトゥリアヌスのラテン語と説き明かしに合うかを、その章を訳すときに確かめて確定する。変えるときは理由を書く。ラテン語の句は、底本を起こしたページでこの表に書き足す。

| 章 | 句（オリゲネスの本の訳） | 扱い |
|---|---|---|
| 2 | 天にいますわれらの父よ | 仮（口語訳のまま） |
| 3 | 御名が聖とされますように | 仮。オリゲネスの論に合わせて口語訳の「あがめられますように」から変えた句。テルトゥリアヌスの説き明かし（3 章）が「聖とする」で通るかを確かめる |
| 4 | みこころが天に行われるとおり、地にも行われますように | 仮（口語訳のまま） |
| 5 | 御国がきますように | 仮（口語訳のまま） |
| 6 | わたしたちの、存在を支えるパンを、きょうお与えください | 仮。「存在を支える」はオリゲネスが ἐπιούσιος を οὐσία から説くための訳。テルトゥリアヌスの説き明かし（6 章）とラテン語の語に合わなければ、理由を書いて変える |
| 7 | わたしたちに負債のある者をゆるしましたように、わたしたちの負債をもおゆるしください | 仮（口語訳のまま） |
| 8 | わたしたちを試みに引き入れないで、悪しき者からお救いください | 仮。「試みに引き入れないで」はオリゲネスの論に合わせて口語訳から変えた句。テルトゥリアヌスの説き明かし（8 章）に合うかを確かめる。「悪しき者」を人格の悪魔と取るか、「悪」と取るかも 8 章で決める |

## 訳語表

『護教論』の訳語表にある語は、同じ意味で使うときはその訳に揃える。この本で決めた訳は次のとおり。ページを訳しレビューを適用するたびに、ここに統合する。

| 原語 | 訳 |
|---|---|
| spectaculum | 見世物（作品の題も『見世物について』） |
| oratio | 祈り |
| baptismus／baptisma | 洗礼（作品の題も『洗礼について』。『ペルペトゥアとフェリキタスの殉教録』と同じ）。口語訳の聖句を引くところの「バプテスマ」は口語訳のまま |
| martyr／martyrium | 殉教者／殉教（『護教論』と同じ）。martyres designati は「殉教者となるべき人々」 |
| carcer／custodiarium | 牢／守りの場所（2.4。注 e のとおり命を守るために預かられている場所） |
| mundus／saeculum | 世界／世（2.1 の segregati estis ab ipso mundo, quanto magis a saeculo「世界そのものから切り離された。まして世からは」。saeculo renuntiare は「世を捨てる」） |
| animus／spiritus／cor | 精神／霊／心（2.11〜2.12、3.2〜3.3。aequo animo は成句で「平然と」（4.2）） |
| anima | 魂。体と並べて死を言うところは「命」（4.9 の si anima potius cesserit plagis, quam corpus「体が屈するより、むしろ命が鞭に負けて尽きるなら」） |
| caro／spiritus（4.1） | 肉／霊。マタイ二六・四一 の言い換え（caro infirma, spiritus promptus）は、口語訳の「心」「肉体」を「霊」「肉」に替えて地の文に溶かし、promptus は口語訳の「熱している」 |
| secessus | 隠れ場（2.9〜2.10） |
| pax（1.7〜1.8） | 平和（教会の中の和解とも、殉教者に請う教会への受け入れとも取れるので、どちらにも寄せない） |
| sacramentum（3.1） | 誓い（兵士の入隊の誓い。『護教論』の「秘儀」にしない） |
| militia／miles | 兵役／兵士 |
| incommoda／durus・acerbus | 不便（3.2、3.6、4.2）／つらい |
| tormenta／cruciatus・torqueri | 拷問（刑吏や僭主による拷問と刑罰。4.2、4.6、4.7、4.9。『護教論』と同じ）／責め苦・責めさいなむ（5.1、4.7、6.2） |
| affectatio／affectare | 熱中／熱中して求める（5.1〜6.1。5.3 の quae alii affectaverunt pro vanitate とつなげる） |
| constantia／constanter | 不屈／不屈の心で（6.1） |
| venatores／taureae | 獣闘士（『ペルペトゥアとフェリキタスの殉教録』と同じ）／鞭（5.3） |
| locare ad gladium／se auctorare | 剣の勝負に身売りさせる／身を売る（5.1〜5.2。剣闘士として雇われること） |
| agonothetes／xystarches／epistates | 競技の主催者／練習場の長／監督（3.3〜3.4。注 i）。剣闘士の magistri et praepositi（1.3）は「師範や親方」で、「監督」と重ねない |
| agon／brabium／scamma／palaestra／stadium | 競技／賞／競技の場／練習場／競技場（3.3〜3.6。stadium tribunalis は「裁きの座という競技場」） |
| athletae／gladiatores | 運動選手／剣闘士 |
| disciplina（運動選手の） | 規律（『殉教者たちへ』3.5。『護教論』の教えの意味の「教え」と分ける）。キリスト者の disciplina は『護教論』どおり「教え」（『見世物について』1.1 の praescriptum disciplinae「教えの定め」、1.4、3.4、3.8 の admonet disciplinae「教えを守るよう勧める」、10.4 の in exaggerationem disciplinae「教えを強める」）。異教の側の世の規律（10.6 の監察官の disciplina）は「規律」、異教の神々が伝えた流儀（11.3 の Castorum … disciplinae）は「教え」 |
| conditio・condere／conditi（『見世物について』） | 造られたもの・造る／造られた者（2.2、2.6、2.13 の perversa administratio conditionis a conditis「造られた者が、造られたものをゆがめて扱うこと」。『護教論』の「ありさま」「定め」「条件」とは意味が違う） |
| instituere・institutor／convertere・interpolator・aemulus（『見世物について』2 章） | 造る・造り主／ねじ曲げる・ゆがめる者・敵対する者（2.7〜2.8、2.14。aemula vis は「敵対する力」で『護教論』の aemulus に揃える。一人の悪魔を指す同格の並び interpolatoris et aemulatoris angeli は「ゆがめる者、敵対する者である天使」とし、二人に読めないようにする）。corruptela／integritas は「損なわれたもの／損なわれていないもの」、de integritate は「損なわれていない状態から」 |
| abdicatio（voluptatium、spectaculorum）／abstinentia | 断つこと／控えること（『見世物について』1.3、3.1） |
| circus／theatrum／agon／munus（『見世物について』3.2） | 戦車競走場／劇場（『護教論』と同じ）／競技／剣闘士の試合（spectaculum の「見世物」と分ける）。amphitheatrum は「闘技場」 |
| munus／officium（9.1、12.1） | 賜物（9.1 の dei munere）・剣闘士の試合／務め（9.1 の daemoniorum officia「ダイモンへの務め」）。12.1 の名の由来は、文型の訳し方の型で「剣闘士の試合（ムヌス）」「務め（オフィキウム）」 |
| parentatio・parentare／litare | 死者を祭ること・死者を祭る（6.3、12.4、13.2。13.2 の parentatum は「死者を祭るのに使われたもの」）／なだめの供え物とする（12.4） |
| idolothyta／necrothyta（13.3） | 偶像への供え物（第一コリント八・四 の口語訳の語）／死者への供え物 |
| auctor／institutor（技と見世物の） | 創始者（4.4、9.5、10.9〜10.10）／設けた者（10.10）。物を作った人（9.4 の auctor currus primi）は「作り手」 |
| fluxus（10.8 の corporis fluxu、per fluxum） | なよなよした動き・なよなよしたさま（異読の flexus「くねり」に寄せない） |
| quaestura／magistratus／flaminium／sacerdotium（12.5） | 財務官の職／政務官の職／フラメンの職／祭司職（7.3 と同じ。5.7 の flamen Quirinalis は神の名を添えて「クィリヌスの祭司」） |
| purpura／fasces／vittae（12.6） | 紫の衣／権標（『オクタウィウス』37:10 と同じ）／髪帯。pultes pridianae は注 l のとおり「前日の祭りの粥」 |
| praesides（人を言うとき） | 主宰者（11.2 の sacerdotales praesides「祭司である主宰者たち」）。神々を言うときは 4.4・12.8 の「守り神」 |
| ferae（12.3 の ferarum voluptati） | 獣のような見物人（注 d の Rigaltius の解。直後の feris は本物の「獣」） |
| concilium／consessus（『見世物について』3 章） | 集まり（詩篇一・一 の句と揃える。3.4、3.5、7.3 の conventus、8.5 の daemonum concilium も「集まり」）／会合（3.4）。3.7 の ad consessum は「座るために」。8.8 の conciliabula spectaculorum は「見世物の集会所」 |
| angelus（『見世物について』2.9、2.14） | 天使（『護教論』どおり）。2.9 の angeli は Oehler の注 h のとおりダイモンを指すが、語を足さず `// ` メモに書く |
| voluptas／gaudium／fructus（saeculi）／vitae gratia | 快楽／喜び／楽しみ（注 b のとおり享受の意味）／生きる甲斐（『見世物について』2.4〜2.5）。periculum voluptatis, quam vitae（2.4）は「命を失う危険より、快楽を失う危険」と、何が危うくなるかを言う |
| ferrum／herbae（『見世物について』2.9） | 鉄（材料として言うところ。手段を言う ferro は「鉄の刃」）／草（毒の材料） |
| virtus／vires | 力（3.3 の virtutum animi et corporis「精神と体の力」、3.4、3.6） |
| idololatria | 偶像礼拝 |
| pompa | 行列（『オクタウィウス』と同じ）。洗礼で捨てる「悪魔と、その行列と、その天使たち」（4.1〜4.3）と、戦車競走の行列（7.2〜7.4）を同じ語にして、論のつながりを残す。7.2 の pompatior は「行列らしく華やか」 |
| renuntiare・renuntiatio／eieratio／lavacrum／signaculum | 捨てる・放棄／捨てる誓い（4.5）／洗い（4.3。テトス三・五 の口語訳「再生の洗い」の語）／印（4.1）。洗い・印が洗礼を指すことは補わない |
| ludi／ludus・lusus／ludii／circenses | 遊戯（agon の「競技」と分ける。5.3 の語源の言葉遊びを残すため）／遊び・戯れ／遊ぶ者たち（5.3。Oehler の推定）／戦車競走（の遊戯） |
| origo／titulus・nomen／apparatus・paratura／locus／ars（『見世物について』4.4 で挙げ、5〜9 章で論じる項目） | 起源／名（6.4 の sub quo nomine et titulo は「どんな名で、どんな呼び名のもとに」）／装い・しつらえ（4.3）／場所／技。4.4 と 8.11 の dicentur・dicantur は dicare の形と取り「ささげられている」。quibus praesidibus は「どんな守り神に」 |
| census（『見世物について』7.5、8.5） | 出どころ（『護教論』21.29 と同じ。注 h）。7.5 では locuples、splendida との掛け合いを「その罪の出どころによって、豊かで、きらびやか」で残す |
| currus／tensa／armamaxa／sedes／exuviae／simulacra／imagines（7.2、7.5） | 車／神々の持ち物を運ぶ車／覆いのある車／玉座／神々の装身具／像／肖像。plaustrum は「荷車」 |
| metae（primae、Murciae）／euripus／ova／delphines／columnae（8 章） | 折り返しの柱（第一の、ムルキアの）／水路／卵の飾り／イルカの像／柱 |
| reges（6.2 の solemnibus regum） | 皇帝たち（Oehler の注 c のとおり皇帝の祝い。`// ` メモに原文の語を書く） |
| argumentari | 理屈をこねる（4.1）。8.2 の circi appellationem argumentantur は「呼び名も…から出たと理屈をつける」 |
| praescriptio（8.8）／causa simplex（8.8）／excidere a deo（8.10） | 定め（1.1 の praescriptum disciplinae「教えの定め」とつなげる）／ほかに意図のない用件／神から離れ落ちる |
| sacrificium・sacrificare・sacrificator | 供え物・供え物をささげる・供え物をささげる者（『護教論』と同じ。hostia の「いけにえ」と分ける） |
| religio | 宗教（『護教論』と同じ）。崇拝の場を指すところ（8.7 の Aliena est tibi religio, quam tot diaboli spiritus occupaverunt。注 r のイシドルスは locus と写す）は「崇拝の場」 |
| lex（4.1 の in legis suae verba） | 掟（信仰の定まった文句。モーセの律法と紛れる「律法」にしない） |
| ut volunt（5.5、8.2） | 「〜とされる」と残し、落とさない。原文にない伝聞（「というのですから」）は足さない |
| si forte | 先のことの仮定は「もしそういうことがあれば」（1.8）。呼び方をやわらげるところ（2.4 の in custodiarium, si forte）は「いわば」 |

## 文型の訳し方

『護教論』の「文型の訳し方」に従う。この本で新たに決めた形は、ページを訳しレビューを適用するたびにここに書く。

- 名の由来を語の音で説くところ（『見世物について』5.3 の ludi と Lydi・ludus・lusus、5.5 の Consus と consilium、8.2 の circus と Circe、8.4 の Sessia と sementatio など）は、『護教論』3.8 の「キリスト者（クリスティアヌス）」の型で、日本語の語のあとに（）で原語の音を片仮名で添える。音が名そのものに出ているところ（キルケ、セッシア）は、名のほうには添えない。
- ローマ暦の日付は『護教論』の決まりどおり今の暦に直す（5.7 の nonis Iuliis「七月七日」、XII. Kalend. Septembres「八月二十一日」）。
- 祭りの遊戯の名が神の名から作った形容詞のところ（6.2 の Apollinares、Cereales、Neptunales、Latiares、Florales）は、どの神にささげたかが論の要なので「アポロの遊戯」のように神の名で訳す。神と分かる形にする（Latiares は『オクタウィウス』30:4 の「ラティアリスのユピテル」）。神の名がすぐに分からない Megalenses は「メガレンセスの遊戯」。技の組合の名（11.3 の artium Musicarum et Minervalium et Apollinarium, etiam Martialium）も同じく「ムーサたちの技、ミネルウァの技、アポロの技…マルスの技」。
- 同じ名の神々をまとめてあざける複数形（10.8 の Apollines、Minervas、Mercurios、11.3 の Herculum、Mercuriorum）は「アポロたち」のように「たち」で残す。もとから二人の Castores は名前の表どおり「カストルの兄弟」。
- 散文の節の中で詩を引くところ（9.3 のウェルギリウス 2 行）は、行を分けず『』に入れて文に続ける（節の行が切れるので `<br/>` を使わない）。
- praescribere などの後に、言う中身が対格と不定法で続くところ（10.10 の altius praescripsisse debemus daemonas … inspirasse）は「前もって、次のことを言っておく」と受け、中身を次の文に出す。

## 名前の表

『護教論』と『オクタウィウス』の名前の表にある神々と人物は、その表記に揃える。口語訳にある名前は口語訳の表記にする。

| 原語 | 訳 |
|---|---|
| Tertullianus | テルトゥリアヌス |
| Lucretia／Mucius／Heraclitus／Empedocles／Aetnaeus mons／Peregrinus | ルクレティア／ムキウス／ヘラクレイトス／エンペドクレス／アエトナ山／ペレグリヌス（4.3〜4.4。ムキウスからアエトナ山までは『護教論』の表のとおり。ペレグリヌスは『キリスト者のための嘆願』の「プロテウス」と同じ人とみられるが、原文の名で訳す） |
| Dido／Asdrubalis uxor／Carthago・Carthaginienses／Scipio／Regulus | ディド／ハスドルバルの妻／カルタゴ・カルタゴ人／スキピオ／レグルス（4.4〜4.5。『護教論』50.6 は名を出さないが、ここは原文に Dido の名がある） |
| Cleopatra／meretrix Atheniensis／tyrannus／Lacedaemonii・διαμαστίγωσις | クレオパトラ／アテナイの遊女（『護教論』50.8 の Attica meretrix「アッティカの遊女」とは原文の語が違う。名は補わない）／僭主／ラケダイモン人・ディアマスティゴーシス、すなわち鞭打ち（4.6〜4.8） |
| Timaeus／Tyrrhenus／Lydi／Asia／Etruria／Varro／Luperci | ティマイオス／テュレノス／リュディア人／アジア／エトルリア／ウァロ（『護教論』の「キュニコス派ウァロ」とは別人だが、補わない）／ルペルキ（『護教論』の表）（『見世物について』5.2〜5.3） |
| Liber pater・Liberalia／Consus・Consualia／Neptunus／Equiria／Mars／Romulus／Sabinae virgines | 父リベル・リベラリア祭／コンスス・コンスアリア祭／ネプトゥヌス／エクイリア祭／マルス／ロムルス／サビニの乙女たち（5.4〜5.6。リベル、コンスス、ロムルスは『護教論』『オクタウィウス』の表） |
| Lares／flamen Quirinalis／Virgines | ラレス／クィリヌスの祭司／ウェスタの乙女たち（5.7。本文は Virgines だけだが、大文字でウェスタの乙女たちを指すので補い、`// ` メモに書く） |
| Iuppiter Feretrius／Tarpeium／ludi Tarpeii・Capitolini／Piso／Numa Pompilius／Robigo／Tullus Hostilius／Ancus Martius／Suetonius Tranquillus | ユピテル・フェレトリウス／タルペイウスの丘／タルペイウスの遊戯・カピトリウムの遊戯／ピソ／ヌマ・ポンピリウス／ロビゴ（「穀物のさび病」の女神）／トゥッルス・ホスティリウス／アンクス・マルキウス／スエトニウス・トランクィッルス（5.8〜5.9） |
| Sol／Circe（Circa）／Castores／Iuppiter | 太陽神ソル（8.1。2 度目からは「ソル」）／キルケ／カストルの兄弟／ユピテル（8.1〜8.3） |
| Sessia／Messia／Tutulina／Magni, Potentes, Valentes／Samothraces | セッシア／メッシア／トゥトゥリナ／大いなる神々、力ある神々、強き神々／サモトラケの神々（8.4〜8.5） |
| Hermateles／Mater Magna／Murcia／Capitolium／Serapeum／satanas | ヘルマテレス（底本の名。8.5）／大いなる母（キュベレの名は補わない）／ムルキア／カピトリウム／セラピスの神殿（『護教論』の表）／サタン（口語訳）（8.5〜8.10） |
| Castor・Pollux／Stesichorus／Ἵππιος／Erichthonius／Vulcanus／Minerva／Trochilus Argivus／Iuno／Quirinus | カストル・ポルクス（9.2。名が別々に出るところ）／ステシコロス／ヒッピオス（馬の神）／エリクトニオス／ウルカヌス／ミネルウァ／アルゴスのトロキロス（底本の名）／ユノ／クィリヌス（9.2〜9.4。ウルカヌス、ミネルウァ、ユノは『オクタウィウス』の表） |
| Zephyri／Terra Mater／Caelum／Mare | ゼピュロスたち（西風）／母なる大地／天／海（9.6） |
| Pompeius Magnus／Venus／Dionysia／Apollo／Musae／Mercurius／Diana | 大ポンペイウス／ウェヌス／ディオニュシア祭（『護教論』39.15）／アポロ／ムーサ／メルクリウス／ディアナ（10.5〜10.8、12.8。『護教論』の表） |
| Olympia／Capitolina／Nemea／Isthmia／Hercules | オリュンピアの競技／カピトリウムの競技／ネメアの競技／イストミアの競技／ヘルクレス（11.2） |
| David／Israëlitae／Aegyptus／Aethiopia | ダビデ／イスラエルの人々／エジプト／エチオピヤ（『見世物について』3.3、3.8〜3.9。口語訳の表記） |
