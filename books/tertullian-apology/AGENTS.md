# テルトゥリアヌス『護教論』の決まり

カルタゴのテルトゥリアヌスが、ローマの属州を治める長官たちに宛てて書いたラテン語の弁明。表記と書き方の型（節の形、メモの書き方、引用の括弧、底本の記号の扱い）は `books/octavius/AGENTS.md`（ラテン語の本を画像から起こした本）にならう。訳語・名前は、論じ方の多くを共有する『オクタウィウス』と、同じカルタゴの『ペルペトゥアとフェリキタスの殉教録』『スキリウムの殉教者行伝』に揃える。皇帝や長官に宛てた弁明としての文体は『第一弁明』（justin-first-apology）と『キリスト者のための嘆願』（athenagoras-plea）にならう。後で訳す同じ著者の小品集（tertullian-treatises）は、この本の訳語を引き継ぐ。

## 節の形

- 章の番号（1〜50）は底本（Oehler 1853）の欄外の `Cap.` に従う。
- 底本にも、照らし合わせに使う Mayor 1917・Bindley 1889・ANF にも節の番号がないので、節の番号はこの訳で付けたもの。章の本文を文の切れ目（. ? ! の後）で、25 語以上のまとまりに切り、1 から番号を付けた。最後に 12 語に満たない切れ端が残るときは、前のまとまりにつなぐ。切るのは `node tools/split-units.js` で、手で切り直さない。レビューで英訳や他の版と照らすときは、章の中の位置で照らす。
- 底本の 1 節ごとに、ラテン語の行、続けて訳の行を置く。訳の行は `1:1 ` のように章と節の番号で始める。
- 章の中では空行を入れない。章と章のあいだに空行を一つ入れる。
- 見出しは `# 1 章　…`、`# 2〜3 章　…` の形（章の範囲、中身）。

## 底本の扱い

- 本文は、IIIF で切り出した画像（`research/sources.md`）から起こし、OCR と、Oehler の本文を組み直した Mayor 1917 と語ごとに突き合わせる。Mayor の OCR はラテン語の本文と Souter の英訳が交互に並ぶので、訳出の前に Read で読まず、語の突き合わせはスクリプトで行う（u と v、j と i をそろえ、語の列の差分を取る）。Mayor の本文を起こしの下書きにするときも、行範囲を Read で開かない（4〜6 章のときに開いてしまい、Souter の英訳が目に入った）。ページごとに、page-context を作る前に、そのページの章を起こして `research/oehler-1853.txt` に足す。起こした章は scratchpad に 1 章 1 行（`<章> <本文>`）で書き、`node tools/split-units.js <その file> books/tertullian-apology/research/oehler-1853.txt` で節に切って足す。どの画像をどの範囲で読んだか、OCR や Mayor と違ったところは `research/sources.md` の IIIF の行に書き足す。
- 章の始まりの画像の番号は `research/pages.json` の `images` にある（範囲の最後の画像は次の章の始まりのページ）。本文は各ページの上の数行だけで、下の校注（番号つき）と注解（二段組み）は起こさない。1 ページの本文が 2 行しかないページもあるので、ページの上から校注の始まりまでを切り出して読む。
- 起こすのは本文だけ。ページの柱、欄外の章番号、本文の語に付いた上付きの校注番号（¹ ² …）と注解の記号（ᵃ ᵇ …、＊）は起こさない。行末で分けられた語はつなぐ。句読点の前の空きは詰める。
- 綴り（底本は u と v を分け、vobis、civitatis と刷る。conperto、inprudentes、inmusicos などの綴りも）、大文字（底本は文の初めを大文字にする）、句読点は底本のとおり。引用符は刷られたとおりに起こす。
- 底本の明らかな刷りの誤り（p. 114 の cur nun liceat の nun など）は、正しい形で起こし、訳の `// ` メモに刷られた形を書く（1:6）。
- 底本の角括弧・イタリック・短剣符・脱落の印などが出てきたら、`books/octavius/AGENTS.md` の「底本の扱い」の扱い（角括弧は残して訳さない、補いは ⟨ ⟩、短剣符と脱落の印は残す）に従い、最初に出たページでここに書き足す。
- 底本の校注の略号は `research/sources.md` の底本の行にある。『護教論』には、失われたフルダ写本（λ）の異読が多く伝わり、ほかの写本と大きく違う本文を示す箇所がある。底本はおおむね写本の大勢の読みを本文に置くが、フルダ写本や少数の写本の読みを採る箇所もある（3.2 の Lucium Titium、3.5 の quam lascivus、3.6 の filium iam）。どちらの場合も訳は底本の読みで行い、ほかの読みは論点一覧に残す。読者の理解が変わる箇所にだけ訳注を付ける。
- 底本の丸括弧は、訳でも（）に入れてよいが、括弧ごとで一文が 60 字を超えるときは文を分けて括弧を外す。

## 文体

- 属州を治める長官たち（1.1 の Romani imperii antistites、praesides）に宛てた弁明なので、地の文は敬体（「〜です」「〜ます」）。書き手のテルトゥリアヌスは「わたし」、キリスト者全体は「わたしたち」。
- 読み手の長官たち（vos）は「あなたがた」。長官や皇帝の動作に尊敬語は使わない（『第一弁明』『キリスト者のための嘆願』と同じ。「ご覧ください」も使わず「見てください」。8:1）。二人称単数は「あなた」とし、「あなたがた」と分ける。言い分を持ち出した相手に言い返すところ（1.15 の potes、revinceris）、一人の裁き手に向けた tu、existimas、cogis（2.13、2.17〜2.18）がこれに当たる。擬人化した判決（2.7 の censura）への呼びかけは「判決よ、…あなたは」。噂を信じる一人に向けて、入信の手順を皮肉に命じるところ（8.2〜8.3 の Veni, demerge …）は「さあ、来なさい」「〜なさい」。
- キリスト者の神とキリストの動作は尊敬語にする。異教の神々、ダイモン、哲学者や詩人の説として述べる神には使わない（『オクタウィウス』と同じ）。異教の側の理屈を受けて仮に立てる、人間を神々にした「もっと高い神」（11.1 の sublimior deus、11.3 の ille magnus deus、11.10 の deus deificus、11.16〜11.17 の ille）にも使わず、「あの神」と呼ぶ。
- 相手の言い分を先に持ち出して反論するところ（inquit、inquitis、inquis、dicitis）は、その言い分を「」に入れ、「と、あなたがたは言います」「と、人は言います」と受ける（地の文なので結びは敬体。1:11、9:5）。「」の中は常体（『オクタウィウス』25:1 と同じ）。inquit のない at enim で反論を持ち出すところも同じにし、「と、人は言うでしょう」と受ける（3:9。『オクタウィウス』32:4 と同じ）。at enim もなく地の文の形で相手の反論を置くところ（8.6 の Sed ignorantibus subicitur et inponitur、14.5 の Sed propterea damnatus est Socrates）も、注釈者が反論と取るなら同じにする。相手の叫びを先取りするところ（12.6 の O impiae voces, o sacrilega convicia!）は「と、あなたがたは言うでしょう」。言い分の頭の Sed は「」の中で「しかし、」と残す（13:1、14:5）。言い分を持ち出す相手が単数の inquis（13.1）は「と、あなたは言います」とし、言い分の文言は複数の inquitis（10.4）と揃える。
- 訴えられたキリスト者や、名をそしる人々の言葉（2.13〜2.14、3.1〜3.5）も「」に入れ、常体にする。祭儀の父が入信を望む者に言う言葉（8.8）も「」に入れて常体にし、相手は「おまえ」。Christianus sum は「わたしはキリスト者だ」（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ）。1 節 1 行なので、言葉が節をまたぐときは節ごとに「」を閉じ、次の節で開き直す（2:13〜2:14、3:4〜3:5）。
- 一文を短く切る。ラテン語の長い文は、主文の動詞を先に見つけ、従属節を「〜ので」「〜とき」「〜ために」でつなぐ。切るときも主文とのつながりを残す。1.1 のように si … si … si … と条件を重ねて主文に至る文は、条件ごとに文を分けてよいが、最後の主文が条件を受けることが分かる形にする。
- enim は落とさない。前の文の理由を言うときは「〜からです」、話を進めるときは「実際、」。
- 修辞疑問は「〜でしょうか」「〜ではありませんか」で終え、「？」は使わない。
- 事実に反する仮定（接続法の未完了過去）は現在の推量で訳す（2:14「もし否んだら、どうするだろうか」、4:6「悪いことであれば、正当に禁じるはずのこと」）。「できたはず」のように過去や「できる」を足さない。過去完了の事実に反する仮定は過去の形で訳す（8:11 の si prius scisses, non fuisses「前もって知っていたら、なりはしなかった」）。譲歩・対立の cum は「〜のに」「〜なのにです」「しかも」で論理を残し、前の文と切り離さない（2:1、2:4、2:9）。
- quanto magis …（ましてや）は、逆接の「しかし」でつながず、「それなら、…なおさら」「まして」で受ける（1:9）。
- 底本の語を、異読と紛れる訳にしない。異読にだけある語を足さず（1:1 の obstruit defensioni に「道」を足さない。8:9 の si noluerint に、異読 si venire noluerint の「来る」を足さず「嫌がったら」）、語義も底本の語に寄せる（1:11 の performantur は「形づくられる」で、異読 reformantur の「作り変えられる」にしない）。底本が事柄の名詞なのに異読が人を表す語のときは「〜の者」と訳さない（4:12 の Infanticidia は「赤子殺しについては」で、異読 infanticida の「赤子殺しの者」にしない）。

## 訳語表

『オクタウィウス』の訳語表にある語は、同じ意味で使うときはその訳に揃える。この本で決めた訳は次のとおり。ページを訳しレビューを適用するたびに、ここに統合する。

| 原語 | 訳 |
|---|---|
| nomen（Christianum） | キリスト者という名、名（1.4 の odium erga nomen Christianorum など。罪を問われる「名」） |
| secta | 一派（『オクタウィウス』と同じ） |
| religio／superstitio | 宗教／迷信（『オクタウィウス』と同じ）。先祖や神々への敬いを言う religio（6.10 の Ubi religio, ubi veneratio）は「敬虔」（veneratio は「敬意」） |
| sacrilegium | 神聖を汚す行い（『オクタウィウス』と同じ） |
| daemon | ダイモン（『オクタウィウス』『キリスト者のための嘆願』と同じ） |
| angelus | 天使 |
| proconsul | 地方総督（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ） |
| imperator | 皇帝（5.1 の古い定めの ab imperatore も「皇帝」） |
| princeps／principalis | 皇帝（4.8 の constantissimus principum「皇帝たちのうちで最も揺るぎない」、5.6）／皇帝の（4.8 の principalium rescriptorum et edictorum「皇帝の勅答と布告」）。皇帝でないかしらを指すときは「頭」とし、だれかを括弧で補う（14.3 の principis sui は詩人たちの頭で「自分たちの頭（ホメロス）」） |
| senatus／consul | 元老院／執政官（5.1、5.4、6.8〜6.9） |
| maiores／patres、paterna／proavi | 先祖（6.1 の maiorum consulta「先祖の決めたこと」、6.5 の maiorum instituta「先祖の定め」）／父祖（6.1 の paternorum institutorum「父祖の定め」、6.8、6.11）／曾祖父たち（6.10） |
| tutor（legum）／protector／ultor | 守り手（4.3 の「法の守り手」、6.1 の protectores）／保護者（5.7 の皇帝を言う protector）／背く者を罰する人（6.1） |
| ulcisci／defendere（4.11） | 罰する（4.12。4.11 の defendunt も Oehler の注に従って「罰する」） |
| probari（4.13） | 吟味される（「吟味されることを望まない法」「吟味で認められないまま」。3.11 の probare「証明する」と分ける） |
| debellator | 討ち滅ぼそうとした者（5.6 のキリスト者に対して）／征服した人（5.9 の Iudaeorum debellator） |
| Caesar | カイザル（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ） |
| genius（imperatoris） | 未定。『スキリウムの殉教者行伝』は「皇帝の守護霊」、『オクタウィウス』は本文が「つまりダイモン」と言い換えるので「ゲニウス」（29:5）。この本も 32 章で genios daemonas と言い換えるので、32 章のページで決め、それまでに出たところも揃える |
| martyr／martyrium | 殉教者／殉教 |
| confiteri／negare | 告白する／否む（『オクタウィウス』と同じ） |
| damnare／damnatio | 罪に定める（『オクタウィウス』と同じ）。血や処刑の話の中の damnatio も「罪に定めること」で、「処刑」にしない（9:16） |
| stuprum／adulterium | 淫らな交わり（『オクタウィウス』と同じ。9:20）／姦淫（2:5） |
| iudex／iudicium | 裁き手／裁き |
| simulacrum | 像 |
| templum／delubrum／fanum | 神殿／聖所／社（『オクタウィウス』と同じ） |
| sacra／caerimoniae | 祭儀／儀式（『オクタウィウス』と同じ） |
| foculus／acerra | 小さな火鉢／香箱（9:16。キリスト者を試す道具。据え付けの「祭壇」「火壇」にしない） |
| colere／adorare／venerari | 拝む／（colere と並ぶとき）伏し拝む／あがめる（『オクタウィウス』と同じ）。adorare が単独で出るときは「拝む」（12.7、13.10） |
| hostia／victima／sacrificium | いけにえ／犠牲／供え物（『オクタウィウス』と同じ）。sacrificare は「供え物をささげる」（10:1、14:1） |
| consecrare／consecratio・dedicare・inaugurare | 神として祀る（10:12、12:5。人や像を神にするとき）／奉献（12:1 の consecratione「奉献によって」、12:2 の dedicatur「奉献される」、13:10 の inauguratis「神として奉献する」） |
| contumelia | 侮辱（12.1、12.6、13.2、13.10、14.5。iniuria と並ぶ 12.6 は「非道や侮辱」） |
| destruere | 打ち壊す（13.1 の神々の像、14.5 のソクラテスへの非難） |
| addicere | 引き渡す（13.5 の競売、13.9 の神性の誉れ、14.3 のアポロ） |
| hastarium／praeco／hasta／quaestor | 競売場（13.5。Oehler の注 e に従い「台帳」にしない）／触れ役／競売の槍／財務官 |
| tributum／stipendium | 地租／人頭税（13.6） |
| patibulum | 十字の横木（12.2。像の芯の骨組み。「さらし柱」にしない） |
| Lares | ラレス（13.4「家の神々を、あなたがたはラレスと呼びます」） |
| poena／supplicium | 刑罰／罰（『オクタウィウス』と同じ） |
| veritas | 真理（1.1 の擬人化された veritas も「真理」） |
| causa | 被告側の件・訴訟のときは「キリスト者をめぐる訴え」のように、キリスト者が訴え出たと読まれない形にする（1:1）。causam apud vos collocare の causa は「理由」（1:4） |
| manceps（divinitatis） | 持ち主（11.1「神性の持ち主とでもいうべき者」。11.2 の proprie possidebat とつなげる） |
| deus deificus | 神々を作るあの神（11.10） |
| deos facere／dei facti | 神々にする・神々を作る／神々にされた・作られた（作り手の有無が論点なので、作り手が見える形にし、「神々になった」としない。11.1・11.13 は「神々にされた」、11.1〜11.3 の deos facere・factor は「神々を作る」「作り手」） |
| semel（10.1、11.5、11.17） | きっぱりと、一度かぎりで（Oehler の注。「ひとたび〜すると」の条件にしない） |
| adseverare／adfirmare | 言い張る（11.1）／断言する（11.11） |
| notae（11.13、13.6） | 汚点（13.6 の notae captivitatis は「囚われの汚点」） |
| denotare | 文脈で訳し分ける。数や名を言い立てられるときは「非難される」（1:8）、人の過ちを指摘するときは「とがめる」（1:9、3:4）、名を挙げて責められるときは「名指しされる」（1:14）。「言いとがめる」は使わない |
| interdum | 「さしあたり」（テルトゥリアヌスの interim の意味。1:3） |
| crimen／scelus／noxa／nocens／reus | 罪／悪事（『オクタウィウス』と同じ）／罪／罪人／罪人（訴えられた者は「訴えられる」と動詞で） |
| facinus | 悪事（8:1、9:2。scelus と同じ訳。『オクタウィウス』の「罪」にしない。この本は crimen を「罪」とするため） |
| homicidium／parricidium／infanticidium | 人殺し／身内殺し（『オクタウィウス』30:2 と同じ）／赤子殺し（9:4〜9:6） |
| error（9.18〜9.21） | 取り違え（身内と知らずに交わること）。9.14 の error vester は「あなたがたの思い違い」 |
| homicida／sacrilegus／incestus／publicus hostis／reus maiestatis | 人殺し／神聖を汚す者／近親姦の者（『オクタウィウス』と同じ）／国家の敵／大逆の罪人（2:3、2:8） |
| elogium | 罪状（2:3） |
| tormenta／quaestio | 拷問／（拷問による）取り調べ（2:9〜2:16。『オクタウィウス』28:3 の法廷の場面と同じ。地獄の苦しみなど法廷の外の tormenta は『オクタウィウス』の「責め苦」） |
| inquirere／inquisitio／requirere | トラヤヌスの返書をめぐる 2.5〜2.9 では、どれも「捜し出す」「捜し出すこと」で通す。それ以外で事柄を調べる意味のときは「調べる」（2:20、3:12）。2.10 の requirenda quaestionibus は「拷問による取り調べで問いただす」 |
| offerre／oblatio | 訴え出る（offerri は「訴え出られる」）／訴え出させること（2:6〜2:9） |
| praeses | 長官（2:5。1.1 の antistites と同じ相手。2.13 の Veritatis extorquendae praesides のように属格の句で長官たち自身を言うときも「長官」） |
| forma（iudicandi など） | 決まり（2:9、2:14。「形」にしない） |
| civilis（dominatio） | 市民にふさわしい（2:15。tyrannica「僭主の」と対） |
| tabella | 判決の書き板（2:21。『スキリウムの殉教者行伝』14:1 の「書き板」と同じ） |
| sacramenta（Christianorum）／sacramentum（infanticidii）／mysteria | 秘儀（2:5、7:1、7:6。7.6 の Samothracia et Eleusinia は「サモトラケやエレウシスの秘儀」と補う） |
| initiari／initiatus／initiationes／consignatus | 手ほどきを受ける（『オクタウィウス』9:5、30:1 と同じ）／手ほどきを受けて（8:3）／手ほどきの儀式（7:7）／封印を受けて（8:3） |
| pater sacrorum | 祭儀の父（8:7） |
| fama／rumor／index（fama を言う） | 噂／風評（『オクタウィウス』と同じ。7:8〜7:14）／密告者（7:8、7:14） |
| eruere | 掘り起こす（7:1〜7:2 の 4 回。『オクタウィウス』28:3 の「真実を掘り起こす」と同じ） |
| carnifex | 刑吏（7:2） |
| vitium（mendacii、seminis） | 欠陥（7:9、7:12。7.8 の Fama malum の「悪」と分ける） |
| aemulatio／aemulus（operatio、ratio） | 敵意（2:19 の裁き手の vestra aemulatio）。悪評や敵対の動機として、張り合う相手へのねたみを挙げるところは「ねたみ」（7:3 の ex aemulatione Iudaei、7:12 の ingenio aemulationis「ねたむ心のたくらみ」）／敵対する（2:19〜2:20 の aemula operatio「敵対する働き」、aemula ratio「敵対する企み」。神に張り合うダイモンの働きを指す。27 章以下の aemulus もこれに揃える） |
| revincere | 暴く（1:15、3:12） |
| lascivus（3.4〜3.5） | 陽気な、浮かれた（ほめ言葉。「淫らな」にしない） |
| iniuria（3.5） | 損（「不正」にしない） |
| probare（3.11） | 証明する（「よしとする」にしない） |

## 文型の訳し方

ページを訳しレビューを適用するたびに、繰り返し出る構文の訳し方をここに書く。

- recogitare・retractare などに続く ne（「〜ではないか」。Oehler の注が言う直説法の μή の用法）は、ne の節の中の後半（et … も）まで「〜のではないでしょうか」の見込みの形で訳し、事実として言い切らない（2:19、3:2）。
- a＋奪格で行為者を言うところ（9.1 の a vobis fieri）は「あなたがた自身が〜している」とし、場所の「あなたがたのもとで」にしない。
- 奪格の独立句（2.20 の praesumptis, non probatis criminibus）は、理由の「〜のゆえに」にせず、状況を言う別の文に分ける（「悪事は、決めてかかられただけで、証明されてはいません」）。
- ut＋名詞（ut innocentes、ut nocentes）は「〜であるかのように」と、扱いの名目を言う形にする（2:6）。
- sequitur ne（8.11）は結果の否定（「〜とは思わないことになる」）で訳し、recogitare＋ne の見込みの形にしない。7.12 の recogitet, ne は見込みの形（「最初のあの口が嘘をまいたのではないか」）。
- 文と文をつなぐ小辞を、文を分けても落とさない。理由の quia（10.3 の quia tunc demum …「〜からです」）、前の文の中身を言う quod（11.8「〜からです」）、逆接の atquin（11.13「しかし」。「しかも」にしない）。
- 当然そうあるべきことを言う直説法の未完了過去（12.7 の merebatur、14.4 の oportebat）は、接続法の事実に反する仮定とは分けて、現在の「〜はずです」「〜はずではありませんか」で訳す。
- 14.4 の praefentur は、Oehler の注 m に従い「（神々が、ある家の災いや迷いの）元となる」と取り、dei を複数の主語とする（「前口上で語る」としない）。Oehler の注は、ほかの注釈者と語義が分かれるところでも、この本の判断の拠り所にする（4.11 の defendunt、10.1 などの semel、13.5 の hastarium と同じ）。
- 強めの ipse・ille が指す人が文中に名で出ていないときは、異読にない語を足さない範囲で、指す人を補う（5:3 の ipsius divinitatis は、前の nomen Christianum を受けて「キリストご自身の神性」）。

## 名前の表

『オクタウィウス』の名前の表にある神々と人物は、その表記に揃える（ユピテル、ユノ、サトゥルヌス、ウェヌス、セラピス、イシス、アエスクラピウスなど）。口語訳にある名前は口語訳の表記にする。

| 原語 | 訳 |
|---|---|
| Tertullianus | テルトゥリアヌス |
| Roma／Romani | ローマ／ローマ人 |
| Anacharsis | アナカルシス（1.9） |
| Plinius Secundus／Traianus | プリニウス・セクンドゥス／トラヤヌス（2.5。トラヤヌスは『異端反駁』と同じ） |
| Gaius Seius／Lucius Titius | ガイウス・セイウス／ルキウス・ティティウス（3.1〜3.2。法律家が例に使う架空の名なので、3:1 は「たとえば」で受ける） |
| Christianus／Chrestianus | キリスト者（クリスティアヌス）／クレスティアヌス（3.8。音の違いを示すところだけ音を写す） |
| Platonici／Epicurei／Pythagorici／Stoici／Academici | プラトン派／エピクロス派／ピュタゴラス派／ストア派／アカデメイア派（3.10。『トリュフォンとの対話』と同じ） |
| Erasistratus／Aristarchus／Apicius | エラシストラトス／アリスタルコス／アピキウス（3.10） |
| Lycurgus／Lacedaemonii | リュクルゴス／ラケダイモン人（4.7、6.4。ラケダイモン人は『キリスト者のための嘆願』と同じ） |
| leges Papiae／Iuliae | パピウス法／ユリウス法（4.8） |
| Severus | セウェルス（4.8。在位中の皇帝） |
| M. Aemilius／Alburnus | マルクス・アエミリウス／アルブルヌス（5.1） |
| Tiberius／Nero／Domitianus | ティベリウス／ネロ／ドミティアヌス（5.3〜5.5） |
| M. Aurelius／Hadrianus／Vespasianus／Pius／Verus | マルクス・アウレリウス／ハドリアヌス／ウェスパシアヌス／ピウス／ウェルス（5.7、5.9。ウェルスがどの皇帝かは補わない） |
| Syria Palaestina／Germanica（sitis） | シリア・パレスチナ／ゲルマニアでの（渇き）（5.3、5.7） |
| Metennius | メテンニウス（6.5） |
| Liber Pater／Bacchus | 父リベル／バックス（6.8、6.11。6.11 は「バックス（父リベル）」とつなぐ） |
| Serapis／Isis／Arpocrates／cynocephalus | セラピス／イシス／ハルポクラテス／犬の頭の神（6.9。『オクタウィウス』の表と同じで、アヌビスの名は補わない） |
| Piso／Gabinius／Capitolium | ピソ／ガビニウス／カピトリウム（6.9） |
| Cyclopes／Sirenes | キュクロプス／セイレン（7.4。キュクロプスは『オクタウィウス』と同じ） |
| Samothracia／Eleusinia | サモトラケ／エレウシス（7.6） |
| Saturnus／Mercurius／Bellona／Iupiter quidam | サトゥルヌス／メルクリウス／ベッロナ（『オクタウィウス』30:3〜30:5 と同じ）／あるユピテル（9.4。名を出さないので「ラティアリス」を補わない） |
| Tiberius（9.1） | ティベリウス（「ティベリウスが地方総督であったとき」。皇帝とは補わない） |
| Galli／Tauri（fabulae Tauricae）／Aeneadae | ガリア人／タウリ人の作り話／アエネアスの子孫たち（9.4。『オクタウィウス』30:4 と同じ） |
| Herodotus／Catilina／Scythae／Ctesias／Persae／Macedones／Oedipus | ヘロドトス／カティリナ／スキタイ人／クテシアス／ペルシャ人／マケドニア人／オイディプス（悲劇『オイディプス』）（9.9〜9.17） |
| Diodorus／Thallus／Cassius Severus／Cornelius Nepos | ディオドロス／タッロス（『オクタウィウス』21:4 と同じ）／カッシウス・セウェルス／コルネリウス・ネポス（10.8。どのカッシウスかは補わない） |
| Ianus／Ianis（Iane）／Salii | ヤヌス／ヤニス（10.8。Oehler の注が主格を Ianis とする）／サリイ（『オクタウィウス』と同じ） |
| Oenotria／Saturnia／mons Saturnius | オエノトリア／サトゥルニア／サトゥルヌスの丘（10.9） |
| Liber／Ceres／Minerva／Lucullus／Pontus | リベル／ケレス／ミネルウァ（『オクタウィウス』と同じ）／ルクルス／ポントス（11.6〜11.8） |
| tartarus／inferi | タルタロス／冥府（11.11、11.15。冥府は『オクタウィウス』11:8 と同じ） |
| Socrates／Aristides／Themistocles／Alexander／Polycrates／Croesus／Demosthenes | ソクラテス／アリステイデス／テミストクレス／アレクサンドロス／ポリュクラテス／クロイソス／デモステネス（11.15） |
| Cato／Scipio／Pompeius／Sylla／Crassus／Tullius | カトー／スキピオ／ポンペイウス／スッラ／クラッスス／トゥッリウス（キケロ）（11.16。「バックス（父リベル）」と同じく、なじみのある名を括弧で補う。どのカトー・スキピオかは補わない） |
| Liber／Cybele／Caelestis | リベル（12.4。単独で出るので「父リベル」にしない）／キュベレ（『オクタウィウス』と同じ）／カエレスティス（カルタゴの天の女神） |
| Seneca | セネカ（12.6。Senecam aliquem は 11.15 の aliquem … Socratem と同じく「セネカのような人」） |
| Capitolium／forum olitorium | カピトリウム／青物市場（13.5） |
| Larentina／Lais／Phryne／Simon Magus | ラレンティナ（13.10。底本の形。Larentiam は異読なので『オクタウィウス』25:8 の「アッカ・ラレンティア」に寄せない）／ライス／フリュネ／魔術師シモン（口語訳の使徒八章に合わせる。『第一弁明』の Σίμων Σαμαρεύς「サマリヤ人シモン」とは原語が違う） |
| Troiani／Achivi／Venus／Aeneas／Diomedes／Mars／Sarpedon | トロイア人／アカイア人／ウェヌス／アエネアス／ディオメデス／マルス／サルペドン（14.2。『オクタウィウス』23:3〜23:4 と同じ。14.2 の cuiusdam monstri は「ある怪物」で、ブリアレオスの名は補わない） |
| Apollo／Admetus／Neptunus／Laomedon／Pindarus／Aescolapius／Hercules | アポロ／アドメトス／ネプトゥヌス／ラオメドン（『オクタウィウス』23:5 と同じ）／ピンダロス／アエスクラピウス（底本の綴り Aescolapium でも同じ表記）／ヘルクレス（『オクタウィウス』と同じ。14.1、14.6） |
| Athenienses／Diogenes／Varro Cynicus | アテナイ人／ディオゲネス（どのディオゲネスかは補わない）／キュニコス派ウァロ（14.6） |
| Cynopaene／Sciapodes | 犬の頭の人々／足で日陰を作る人々（8.5。音を写さず意味で訳す。6.9 の cynocephalus「犬の頭の神」と分ける） |
