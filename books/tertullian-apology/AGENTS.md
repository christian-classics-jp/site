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
- 底本の角括弧は、意味を校注で確かめてから扱う。後代の書き込みとして削る語句の印なら、『オクタウィウス』と同じく底本テキストに残して訳さない。フルダ写本だけが伝える一節の印（19.1〜19.11 の [Auctoritatem litteris … dei vestri.]。校注 p. 188 の Cap. XIX. 2）は、Oehler が本文として刷るので訳し、訳でも全角の［］で囲む。括弧の始まりの文の句点の前に、訳注「括弧の中は、失われた一つの写本にだけ伝わる文。」を付け、括弧の範囲と、ほかの写本がどこからどこへ続くかを `// ` メモに書く（19:1）。
- 底本のイタリック（編者が補った語。16.1 の dei は Oehler 自身の補いで、校注に ego とある。19.10 の probata は先行の刊本の補い）は、底本テキストで ⟨ ⟩ に入れて起こす。訳では補いに従い、`// ` メモに補いであることと写本の読みを書く（16:1、19:10）。立体で刷られ、校注に ego とある Oehler 自身の推定（21.3 の Dudum。写本の多くは totum）も同じく、訳注は付けずに `// ` メモに書く（21:3）。ただし、推定が節全体の意味を決め、写本の読みでは文意が変わるところ（23.6 の aliam diem morituris … sumministraturi。写本は alia die morituris … sumministratur・subministrator）は、訳注「この節は写本の読みが乱れていて、読み方が定まらない。」を付ける（『オクタウィウス』26:12 と同じ形。23:6）。小型の大文字（16.11 の DEUS CHRISTIANORUM）は大文字で、ギリシア文字の語（16.11 の ΟΝΟΚΟΙΗΤΗΣ、17.1 の κόσμον）はギリシア文字で起こす。
- 底本の校注の略号は `research/sources.md` の底本の行にある。『護教論』には、失われたフルダ写本（λ）の異読が多く伝わり、ほかの写本と大きく違う本文を示す箇所がある。底本はおおむね写本の大勢の読みを本文に置くが、フルダ写本や少数の写本の読みを採る箇所もある（3.2 の Lucium Titium、3.5 の quam lascivus、3.6 の filium iam）。どちらの場合も訳は底本の読みで行い、ほかの読みは論点一覧に残す。読者の理解が変わる箇所にだけ訳注を付ける。
- 詩句の引用（25.8 のウェルギリウス。底本は詩の行に組む）は、7:8 と同じく行に分けず、地の文の中に『』で入れる。底本テキストも行に分けずに散文に続けて起こし、行頭の大文字は刷られたとおりにする。出典は `// ` メモに書く。
- ローマ暦の日付（25.5 の die sexto decimo Kalendarum Aprilium）は、『スキリウムの殉教者行伝』1:1 にならって今の暦に直し（「三月十七日」）、ローマ暦の形を `// ` メモに書く。
- 底本の丸括弧は、訳でも（）に入れてよいが、括弧ごとで一文が 60 字を超えるときは文を分けて括弧を外す。

## 文体

- 属州を治める長官たち（1.1 の Romani imperii antistites、praesides）に宛てた弁明なので、地の文は敬体（「〜です」「〜ます」）。書き手のテルトゥリアヌスは「わたし」、キリスト者全体は「わたしたち」。
- 読み手の長官たち（vos）は「あなたがた」。長官や皇帝の動作に尊敬語は使わない（『第一弁明』『キリスト者のための嘆願』と同じ。「ご覧ください」も使わず「見てください」。8:1）。二人称単数は「あなた」とし、「あなたがた」と分ける。言い分を持ち出した相手に言い返すところ（1.15 の potes、revinceris）、一人の裁き手に向けた tu、existimas、cogis（2.13、2.17〜2.18）がこれに当たる。擬人化した判決（2.7 の censura）への呼びかけは「判決よ、…あなたは」。噂を信じる一人に向けて、入信の手順を皮肉に命じるところ（8.2〜8.3 の Veni, demerge …）は「さあ、来なさい」「〜なさい」。
- キリスト者の神とキリストの動作は尊敬語にする。受肉を語る文では、「生まれる」も「お生まれになる」とし、同じ文の「降られる」などと敬語を揃える（21:7、21:14）。quis（だれが）などの疑問詞が神を指すときも尊敬語にする（30:1「だれが支配をお与えになったか」）。異教の神々、ダイモン、哲学者や詩人の説として述べる神には使わない（『オクタウィウス』と同じ）。異教の側の理屈を受けて仮に立てる、人間を神々にした「もっと高い神」（11.1 の sublimior deus、11.3 の ille magnus deus、11.10 の deus deificus、11.16〜11.17 の ille）にも使わず、「あの神」と呼ぶ。
- 相手の言い分を先に持ち出して反論するところ（inquit、inquitis、inquis、dicitis）は、その言い分を「」に入れ、「と、あなたがたは言います」「と、人は言います」と受ける（地の文なので結びは敬体。1:11、9:5）。「」の中は常体（『オクタウィウス』25:1 と同じ）。inquit のない at enim で反論を持ち出すところも同じにし、「と、人は言うでしょう」と受ける（3:9。『オクタウィウス』32:4 と同じ）。at enim もなく地の文の形で相手の反論を置くところ（8.6 の Sed ignorantibus subicitur et inponitur、14.5 の Sed propterea damnatus est Socrates、25.10 の Sed postea Romani … regnaverunt?。25.10 は Oehler の注 m に従う）も、注釈者が反論と取るなら同じにする。相手の叫びを先取りするところ（12.6 の O impiae voces, o sacrilega convicia!）は「と、あなたがたは言うでしょう」。言い分の頭の Sed は「」の中で「しかし、」と残す（13:1、14:5）。言い分を持ち出す相手が単数の inquis（13.1）は「と、あなたは言います」とし、言い分の文言は複数の inquitis（10.4）と揃える。 ただし、相手の言い分ではなく、相手の典拠で言い返すところの At enim（16.2 の At enim idem Cornelius Tacitus）は、「」に入れず「しかし実際、」とする。
- 著者が異教の神々にじかに呼びかけるところ（23.6 の Ista ipsa Virgo Caelestis …, ipse iste Aesculapius … fundite!。Oehler の注 p に従い、カエレスティスとアエスクラピウスへの呼びかけと取る。nisi se daemones confessi fuerint は sumministraturi の条件で、fundite は条件のない挑発）は、「カエレスティスよ」「〜はずだった者たちよ」と呼びかけ、命令は「〜してみなさい」とする。長官たちへの「あなたがた」と紛れないように、代名詞は使わない。ダイモンに挑む三人称の命令（23.16〜23.17 の rideant、negent、dicant、refutent、renuant）は「〜してみればよいのです」。
- 問いを持ち出す言葉の後に、底本がコロンと大文字で問いを刷るところ（23.14 の Dicent ibidem: Et quis ille Christus cum sua fabula?）は、その問いだけを「」に入れ、続く si … si …（ダイモンが答える中身）は地の文で訳す。キリスト者の信仰の中身なので、キリストの動作は尊敬語にする（23:14〜23:15）。
- 訴えられたキリスト者や、名をそしる人々の言葉（2.13〜2.14、3.1〜3.5）も「」に入れ、常体にする。祭儀の父が入信を望む者に言う言葉（8.8）も「」に入れて常体にし、相手は「おまえ」。Christianus sum は「わたしはキリスト者だ」（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ）。1 節 1 行なので、言葉が節をまたぐときは節ごとに「」を閉じ、次の節で開き直す（2:13〜2:14、3:4〜3:5）。 民衆の口癖（17.5 の Deus bonus et magnus、Deus videt など）も「」に入れて言い切りの常体にし、原文が呼格でなければ呼びかけにしない（「神は善く、偉大だ」。『オクタウィウス』18:11 と同じ）。
- 一文を短く切る。ラテン語の長い文は、主文の動詞を先に見つけ、従属節を「〜ので」「〜とき」「〜ために」でつなぐ。切るときも主文とのつながりを残す。1.1 のように si … si … si … と条件を重ねて主文に至る文は、条件ごとに文を分けてよいが、最後の主文が条件を受けることが分かる形にする。 譲歩の licet を重ねて cum の節と主文に至る形（17.4）は、前の譲歩を文に分けてよいが、cum の節（「〜とき」）と主文は一文にまとめる。
- enim は落とさない。前の文の理由を言うときは「〜からです」、話を進めるときは「実際、」。Sed enim は「しかし実際、」（13:6）。修辞疑問の Quis enim … ? も、文頭に「実際、」を置いて残す（28:4）。
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
| religiositas／inreligiositas | 信心深さ／不信心（24.3、24.7、25.2、25.12、25.15。『オクタウィウス』の religiosus「信心深い」、inreligiosus「不信心な」に揃える） |
| crimen laesae religionis／maiestas | 宗教を害したという罪（24.1〜24.2）。27.1 の intentatio laesae divinitatis は「神性を害したという訴え」、28.3 の laesae augustioris maiestatis は「もっと尊い威光を害したという罪」／威光（29.4 の committere in maiestatem「威光に対して罪を犯す」、31.2 の de quorum maiestate convenimur「その威光のことで罪に訴えられる」）。crimen maiestatis は reus maiestatis と揃えて「大逆の罪」（29.1） |
| respondere（24.1） | 言い切る（Oehler の注 a の spondent、adfirmant。adfirmare の「断言する」と分ける） |
| regnum／imperium／regnare／regnari | 王国・国／支配（25.10〜25.15、26.1）／王国を持つ（国や民族、町が主語のとき。26.2 の Roma、Babylonii）・王である（神々や人が主語のとき。25.9〜25.10）／治められる（25.11。主語をほかの人に移さない） |
| adolatio（25.17） | へつらい（Oehler の注 v。adulatio の綴り。「礼拝」にしない） |
| sacrilegium | 神聖を汚す行い（『オクタウィウス』と同じ） |
| daemon | ダイモン（『オクタウィウス』『キリスト者のための嘆願』と同じ） |
| angelus | 天使 |
| proconsul | 地方総督（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ） |
| imperator | 皇帝（5.1 の古い定めの ab imperatore も「皇帝」） |
| princeps／principalis | 皇帝（4.8 の constantissimus principum「皇帝たちのうちで最も揺るぎない」、5.6）／皇帝の（4.8 の principalium rescriptorum et edictorum「皇帝の勅答と布告」）。皇帝でないかしらを指すときは「頭」とし、だれかを括弧で補う（14.3 の principis sui は詩人たちの頭で「自分たちの頭（ホメロス）」）。サタンを言うときは「かしら」（22.2 の principem huius mali generis「この悪い種族のかしら」。口語訳の「悪霊のかしら」に合わせる） |
| senatus／consul | 元老院／執政官（5.1、5.4、6.8〜6.9） |
| maiores／patres、paterna／proavi | 先祖（6.1 の maiorum consulta「先祖の決めたこと」、6.5 の maiorum instituta「先祖の定め」）／父祖（6.1 の paternorum institutorum「父祖の定め」、6.8、6.11）／曾祖父たち（6.10） |
| tutor（legum）／protector／ultor | 守り手（4.3 の「法の守り手」、6.1 の protectores）／保護者（5.7 の皇帝を言う protector）／背く者を罰する人（6.1） |
| ulcisci／defendere（4.11） | 罰する（4.12。4.11 の defendunt も Oehler の注に従って「罰する」） |
| probari（4.13） | 吟味される（「吟味されることを望まない法」「吟味で認められないまま」。3.11 の probare「証明する」と分ける） |
| debellator／debellare | 討ち滅ぼそうとした者（5.6 のキリスト者に対して）／征服した人（5.9 の Iudaeorum debellator）。動詞も同じく、キリスト者に向かうときは「討ち滅ぼそうとする」（29.5）、天や国に挑むときは「征服する」（30.3） |
| Caesar | カイザル（『スキリウムの殉教者行伝』『ペルペトゥアとフェリキタスの殉教録』と同じ） |
| genius（imperatoris） | 未定。『スキリウムの殉教者行伝』は「皇帝の守護霊」、『オクタウィウス』は本文が「つまりダイモン」と言い換えるので「ゲニウス」（29:5）。この本も 32 章で genios daemonas と言い換えるので、32 章のページで決め、それまでに出たところも揃える（28:5 は仮に「ゲニウス」） |
| martyr／martyrium | 殉教者／殉教 |
| confiteri／negare | 告白する／否む（『オクタウィウス』と同じ。事実を否定する意味でも「否む」で通し、「否定する」にしない。11:12、16:4） |
| damnare／damnatio | 罪に定める（『オクタウィウス』と同じ）。血や処刑の話の中の damnatio も「罪に定めること」で、「処刑」にしない（9:16）。判決の sententia と並ぶところも「判決」にしない（14:6 の rescissa damnatio「罪に定めたことが取り消されて」） |
| pueri（domi） | 奴隷（14.1。家の召使いの意味で、「子供」にしない） |
| stuprum／adulterium・moechus | 淫らな交わり（『オクタウィウス』と同じ。9:20）／姦淫（2:5、15:7）・姦淫する（者）（11:12、15:1） |
| iudex／iudicium | 裁き手／裁き |
| simulacrum | 像 |
| templum／delubrum／fanum | 神殿／聖所／社（『オクタウィウス』と同じ） |
| sacra／caerimoniae | 祭儀／儀式（『オクタウィウス』と同じ） |
| foculus／acerra | 小さな火鉢／香箱（9:16。キリスト者を試す道具。据え付けの「祭壇」「火壇」にしない） |
| colere／adorare／venerari | 拝む／（colere と並ぶとき）伏し拝む／あがめる（『オクタウィウス』と同じ）。adorare が単独で出るときは「拝む」（12.7、13.10） |
| hostia／victima／sacrificium | いけにえ／犠牲／供え物（『オクタウィウス』と同じ）。sacrificare は「供え物をささげる」（10:1、14:1） |
| consecrare／consecratio・dedicare・inaugurare | 神として祀る（10:12、12:5、16:1、16:9、24:8。人や像、獣の姿や十字架を神にするとき。動詞の consecrare には「奉献」「聖なるものとして祀る」を当てない）／奉献（12:1 の consecratione「奉献によって」、24.9 の municipali consecratione「町ごとの奉献によって」、12:2 の dedicatur「奉献される」、13:10 の inauguratis「神として奉献する」） |
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
| interdum | 「さしあたり」（テルトゥリアヌスの interim の意味。1:3）。nonnunquam と並ぶなど「ときには」の意味のとき（22.9）は「ときには」 |
| crimen／scelus／noxa／nocens／reus | 罪／悪事（『オクタウィウス』と同じ）／罪／罪人／罪人（訴えられた者は「訴えられる」と動詞で） |
| facinus | 悪事（8:1、9:2。scelus と同じ訳。『オクタウィウス』の「罪」にしない。この本は crimen を「罪」とするため） |
| homicidium／parricidium／infanticidium | 人殺し／身内殺し（『オクタウィウス』30:2 と同じ）／赤子殺し（9:4〜9:6） |
| error（9.18〜9.21） | 取り違え（身内と知らずに交わること）。9.14 の error vester は「あなたがたの思い違い」 |
| homicida／sacrilegus／incestus／publicus hostis／reus maiestatis | 人殺し／神聖を汚す者／近親姦の者（『オクタウィウス』と同じ）／国家の敵／大逆の罪人（2:3、2:8） |
| elogium | 罪状（2:3） |
| tormenta／quaestio | 拷問／（拷問による）取り調べ（2:9〜2:16。『オクタウィウス』28:3 の法廷の場面と同じ。地獄の苦しみなど法廷の外の tormenta は『オクタウィウス』の「責め苦」） |
| inquirere／inquisitio／requirere | トラヤヌスの返書をめぐる 2.5〜2.9 では、どれも「捜し出す」「捜し出すこと」で通す。それ以外で事柄を調べる意味のときは「調べる」（2:20、3:12）。2.10 の requirenda quaestionibus は「拷問による取り調べで問いただす」 |
| offerre／oblatio | 訴え出る（offerri は「訴え出られる」。21.20 の oblatum Pontio Pilato も「ピラトに訴え出られました」）／訴え出させること（2:6〜2:9） |
| praeses | 長官（2:5。1.1 の antistites と同じ相手。2.13 の Veritatis extorquendae praesides のように属格の句で長官たち自身を言うときも「長官」）。皮肉の呼びかけ Hoc agite, boni praesides（30.7、50 章）は「善良な長官たちよ、さあ、それをしてください」 |
| forma（iudicandi など） | 決まり（2:9、2:14。「形」にしない） |
| civilis（dominatio） | 市民にふさわしい（2:15。tyrannica「僭主の」と対） |
| tabella | 判決の書き板（2:21。『スキリウムの殉教者行伝』14:1 の「書き板」と同じ） |
| sacramenta（Christianorum）／sacramentum（infanticidii）／mysteria | 秘儀（2:5、7:1、7:6。7.6 の Samothracia et Eleusinia は「サモトラケやエレウシスの秘儀」と補う）。15.9 の sacramenti nostri ordinem も「わたしたちの秘儀の筋道」 |
| mimi／histriones／cavea／noxii／meridiani | 役者（笑劇の）／役者（15.2。histrionum litterae は「役者たちの台本」）／闘技場の観客席／罪人（15.4。処刑の見世物で神々を演じる死刑囚。16.11 の mercenarius noxius は「雇われた、罪人同然の男」）／昼の見世物（15.5） |
| signa／vexilla／cantabra／tropaea | 軍旗（16.8）／旗／カンタブラ（旗の一種）／戦勝記念碑（16.7。『オクタウィウス』29:7 と同じ） |
| initiari／initiatus／initiationes／consignatus | 手ほどきを受ける（『オクタウィウス』9:5、30:1 と同じ）／手ほどきを受けて（8:3）／手ほどきの儀式（7:7）／封印を受けて（8:3） |
| pater sacrorum | 祭儀の父（8:7） |
| fama／rumor／index（fama を言う） | 噂／風評（『オクタウィウス』と同じ。7:8〜7:14）／密告者（7:8、7:14） |
| eruere | 掘り起こす（7:1〜7:2 の 4 回。『オクタウィウス』28:3 の「真実を掘り起こす」と同じ） |
| carnifex | 刑吏（7:2） |
| vitium（mendacii、seminis） | 欠陥（7:9、7:12。7.8 の Fama malum の「悪」と分ける） |
| aemulatio／aemulus（operatio、ratio） | 敵意（2:19 の裁き手の vestra aemulatio）。悪評や敵対の動機として、張り合う相手へのねたみを挙げるところは「ねたみ」（7:3 の ex aemulatione Iudaei、7:12 の ingenio aemulationis「ねたむ心のたくらみ」）／敵対する（2:19〜2:20 の aemula operatio「敵対する働き」、aemula ratio「敵対する企み」。神に張り合うダイモンの働きを指す。27 章以下の aemulus もこれに揃える） |
| revincere | 暴く（1:15、3:12）。probare（裏づける）と対になって、書き手の記述を退けるところと、人が教えによって言い負かされるところは「論駁する」（19.14 の aut probat aut revincit、21.20 の revincebantur magistri） |
| instrumentum | 書物（聖書や、ユダヤ人の書を言うとき。19.1 の instrumentis istis「これらの書物」、21.1 の Iudaeorum instrumentis も揃える）。18.1 の instrumentum litteraturae は「書き記されたものという備え」（17.1 の instrumentum elementorum「元素の備え」と同じ語）。年代を調べる 19.14 の multis instrumentis は「多くの資料」 |
| propheta・prophetia／vaticinatio・vaticinari／divinatio | 預言者・預言（18.3、19.1）／預言（19.1 のモーセ、19.11 のシビュラの呼び名）。異教の詩人の vaticinatio は「予言」（19.7 の poeticam vaticinationem「詩の予言」）／予言（20.3〜20.5。divinitas「神性」と並ぶ語で、聖書の予告を言うときも「予言」） |
| voces／litterae（預言者の） | 声／文字・書物（18.3、19.9、20.4。voces は「言葉」にしない） |
| iustitia／innocentia | 義（神の前の義と、預言された世の義の衰えを言う 18.2、20.2）。人の徳や功績として並べる iustitia は「正義」（11.10、11.14、11.15）／潔白（18.2 の iustitiae innocentia「義の潔白」） |
| scilicet | つまり（18.5、19.5、20.3、21.16）。皮肉に言うところは「なるほど」（25.3） |
| verbum／sermo／ratio／virtus／ΛΟΓΟΝ | 言葉／言葉／理／力（17.1 の verbo、ratione、virtute「言葉・理・力」を 21.9 の Iam ediximus が受けるので、21.9〜21.19 もこれで通す。哲学の議論で単独に出る ratio は『オクタウィウス』の「理性」）／ロゴス（21.9 の ΛΟΓΟΝ, id est sermonem atque rationem は「ロゴス、つまり言葉と理」、21.19 の verbum dei, id est ΛΟΓΟΝ は「神の言葉、つまり、あのロゴス」） |
| spiritus／substantia | 霊（21.10〜21.13。神の本性を言う語で、聖霊と補わない。人間の側の spiritus も「霊」で、30.5 の de carne pudica, de anima innocenti, de spiritu sancto は「清い肉体から、潔白な魂から、聖い霊から」とし、「聖霊」にせず尊敬語も使わない（30.4〜30.5）。21.12 の Nam et deus spiritus は「神も霊だからです」と地の文に溶かし、『』と出典を付けない）／実体（21.8、21.11〜21.12 の unitas substantiae「実体が一つであること」。『オクタウィウス』26:8 のダイモンの substantia「本質」とは文脈が違う） |
| praedicare（預言として） | 告げ知らせる（18.3 の praedicatores「告げ知らせる者たち」と揃える。21.14、21.17、21.22）。praenuntiare は「予告する」、adnuntiare は「告げる」（21.6） |
| census（sectae et nominis） | 出どころ（21.29） |
| fabula | 作り話（21.15。23.14 の cum sua fabula も「その作り話ともども」。『オクタウィウス』と同じ） |
| daemonium | ダイモン（22.1 のソクラテスの daemonium、23.8、23.11。daemon と訳し分けない。『オクタウィウス』26:9 と同じ） |
| immundi spiritus | 汚れた霊（23.17。『オクタウィウス』27:1 と同じ） |
| arbiter（Christus） | 審判者（23.18。iudex「裁き手」と分ける） |
| praestigiae／vates | 目くらまし（22.7、23.1。『オクタウィウス』26:10 と同じ）／予言者（23.17。『オクタウィウス』27:3 と同じ） |
| substantia（hominis） | 実体（22.5 の utramque substantiam hominis は「人間の二つの実体」。体と魂を言うが、補わない） |
| benefici（22.12） | 親切なもの（皮肉。λ の Venefici の「毒を盛る」を足さない） |
| magus | 魔術師（21.19。『オクタウィウス』と同じ） |
| censuales（19.14） | 諸民族の起源を伝える書き手たち（Oehler の注 y） |
| ingratis（4.3、27.6） | 心ならずも（Oehler の注。27.6 は注 l） |
| lascivus（3.4〜3.5） | 陽気な、浮かれた（ほめ言葉。「淫らな」にしない） |
| iniuria（3.5） | 損（「不正」にしない） |
| probare（3.11） | 証明する（「よしとする」にしない） |

## 文型の訳し方

ページを訳しレビューを適用するたびに、繰り返し出る構文の訳し方をここに書く。

- recogitare・retractare などに続く ne（「〜ではないか」。Oehler の注が言う直説法の μή の用法）は、ne の節の中の後半（et … も）まで「〜のではないでしょうか」の見込みの形で訳し、事実として言い切らない（2:19、3:2）。Videte ne … も「見てください。…のではないでしょうか」とし、ne が重なるところ（26.1）は、ne ごとに文を分けて同じ形で受ける（24:7、26:1）。
- a＋奪格で行為者を言うところ（9.1 の a vobis fieri）は「あなたがた自身が〜している」とし、場所の「あなたがたのもとで」にしない。受け身の動詞と並ぶ a deo（21.6 の venturus a deo praenuntiabatur）も「神によって、来ると予告されていた」と行為者にし、「神から来る」と出どころに読める形にしない。
- 分詞句のあとに置かれた副詞や理由の句（21.28 の utique pro fiducia veritatis libenter）は、主動詞に掛かるかを確かめ、文を分けるときは主動詞の文の側に置く。
- 奪格の独立句（2.20 の praesumptis, non probatis criminibus）は、理由の「〜のゆえに」にせず、状況を言う別の文に分ける（「悪事は、決めてかかられただけで、証明されてはいません」）。
- ut＋名詞（ut innocentes、ut nocentes）は「〜であるかのように」と、扱いの名目を言う形にする（2:6）。
- sequitur ne（8.11）は結果の否定（「〜とは思わないことになる」）で訳し、recogitare＋ne の見込みの形にしない。7.12 の recogitet, ne は見込みの形（「最初のあの口が嘘をまいたのではないか」）。
- 文と文をつなぐ小辞を、文を分けても落とさない。理由の quia（10.3 の quia tunc demum …「〜からです」）、前の文の中身を言う quod（11.8「〜からです」）、逆接の atquin（11.13、23.18「しかし」。「しかも」にしない）、Nam（23.10「実際、」）、autem（22.10「一方、」）、itaque（23.22「ですから、」）、強める vel（23.22「それどころか」。Oehler の注 zz）。前の文の理由を言う enim は文末を「〜からです」で結ぶ（23:11）。
- 状態を言う分詞句（23.6 の Christiano mentiri non audentes。Oehler の注 p では、偽る勇気がなく告白したという事実）は、条件（「〜なければ」）にせず、事実や状況として訳す（「ところが、キリスト者に偽る勇気はありませんでした」）。si quid ad dedecus facit（23.9）は「さらに恥になることには」の挿入句で、主語の行為の条件にしない。
- 列挙の中で、同格の列（23.17 の餌の中身 sanguine et fumo et putidis rogis）と、et で並ぶ別の拠り所（et … linguis vatum）を一つの列に混ぜない。
- 当然そうあるべきことを言う直説法の未完了過去（12.7 の merebatur、14.4 の oportebat）は、接続法の事実に反する仮定とは分けて、現在の「〜はずです」「〜はずではありませんか」で訳す。
- 14.4 の praefentur は、Oehler の注 m に従い「（神々が、ある家の災いや迷いの）元となる」と取り、dei を複数の主語とする（「前口上で語る」としない）。Oehler の注は、ほかの注釈者と語義が分かれるところでも、この本の判断の拠り所にする（4.11 の defendunt、10.1 などの semel、13.5 の hastarium と同じ。21.8 の Iovis ista sunt numina vestra も、注 r に従い前の passus est を補って「そうしたユピテルを父としたのは、あなたがたの神々です」。23.1 の elidunt は注 b に従い「（子供たちを）殺す」で、「倒す」にしない。23.12 の verum utrobique は注 t に従い verum を形容詞と取り「どちらの側でも、それが本当の種族」。23.22 の a vobis quandoque a Christianis は注 zz に従い「いつかキリスト者となったあなたがた自身によって」。24.5 の in aliquo principe confitetur は注 e に従い、下の者たちに仕えて最高の者をないがしろにする者の罪として訳し、注 e の補い「その下の者たちに」を（）に入れる。25.12 の rebus religio profecerit? は注 p に従い「宗教が国の役に立ったとでもいうのでしょうか」）。ほかの注釈者の取り方は reviews に残し、訳は変えない。
- 疑問符で終わる non＋比較級（19.13 の non retrosiores reprehenduntur … ?）は、肯定を述べる「〜ではないでしょうか」にし、否定をもう一つ足さない。retrosior は Oehler の注 p に従い retro（＝以前に）からの語で「より前の」、reprehenduntur は retrahuntur で「さかのぼる」（「最後の人でさえ、…より前にさかのぼるのではないでしょうか」）。
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
| Lentuli／Hostilii | レントゥルスやホスティリウスのような作者たち（15.1。笑劇の作者） |
| Anubis／Luna／Diana／Sol／Attis／Pessinus | アヌビス／ルナ（月の女神）（15.1。masculum Lunam は「男にされたルナ」）／ディアナ／太陽神ソル（15.2）／アッティス／ペッシヌス（15.5）。15.2 の Sol の息子、恋い慕われる羊飼い、女神たちを裁く羊飼い、15.5 のユピテルの兄弟は、名を補わない（14.2 のブリアレオスと同じ） |
| Cornelius Tacitus／Gneus Pompeius／Hierusalem | コルネリウス・タキトゥス（16.1。in quinta historiarum suarum は「その歴史書の第五巻」で、書名を補わない）／グナエウス・ポンペイウス／エルサレム（16.2） |
| Epona／Pallas Attica／Ceres Pharia／Victoriae | エポナ（『オクタウィウス』28:7 と同じ）／アッティカのパラス／ファロスのケレス（16.6。『オクタウィウス』21:1 のファロスのイシスに揃え、イシスとは補わない）／ウィクトリア（勝利の女神）たち（16.7） |
| dies solis／dies Saturni | 太陽の日（日曜日）／サトゥルヌスの日（土曜日）（16.10） |
| Ptolemaeus Philadelphus／Pisistratus／Demetrius Phalereus／Menedemus／Aristaeus／Serapeum | プトレマイオス家の、フィラデルフォスとあだ名される王／ペイシストラトス／ファレロンのデメトリオス／メネデモス／アリステアス／セラピスの神殿（18.4〜18.7） |
| Hebraei／Iudaei | ヘブル人（口語訳。Hebraeae litterae は「ヘブルの文字」、Hebraicae litterae は「ヘブル語の書」）／ユダヤ人（18.5、18.7） |
| Prometheus | プロメテウス（18.2。『ギリシア人への演説』と同じ） |
| Moyses／Danaus／Argos／Inachus Argivus／Priamus／Homerus／Titani／Assyrii | モーセ／ダナオス／アルゴス／アルゴスのイナコス（『ギリシア人への演説』と同じ）／プリアモス／ホメロス／ティタンたち／アッスリヤ人（口語訳）（19.1〜19.3、19.12）。Troianum proelium は「トロイア戦争」、Iliacus exitus は「トロイアの滅び」 |
| Danae（Danais）／Zeno／Cleanthes | ダナエ（21.7。『第一弁明』と同じ。底本の属格 Danaidis）／ゼノン／クレアンテス（21.10。『オクタウィウス』と同じ） |
| Satanas | サタン（22.2。口語訳） |
| Croesi／Pyrrhi／Pythius／Lydia／Castores | クロイソスのような人々／ピュロスのような人々（22.10。複数形なので 21.26 の「プロクルスのような人々」にならう。ピュロスは『オクタウィウス』26:6 と同じ）／ピュトの神（アポロ）（22.11）／リュディア／カストルの兄弟（22.13。『オクタウィウス』の表と同じ。22.13 の水と船とひげの故事の人名は補わない） |
| Virgo Caelestis／Aesculapius／Socordius／Tenatius／Asclepiodotus | おとめカエレスティス／アエスクラピウス／ソコルディウス／テナティウス（底本の Tenatio）／アスクレピオドトス（23.6） |
| Minos／Rhadamanthus | ミノス／ラダマンテュス（23.16。『第一弁明』と同じ） |
| Pontius Pilatus／Romulus／Proculi | ポンテオ・ピラト（口語訳。21.20）／ロムルス／プロクルスのような人々（21.26。複数の Proculi。『オクタウィウス』21:9 の表記） |
| Orpheus／Musaeus／Melampus／Trophonius／Pieria／Boeotia／Pompilius Numa | オルフェウス／ムサイオス／メランプス／トロフォニオス／ピエリア／ボイオティア（『ギリシア人への演説』と同じ）／ヌマ・ポンピリウス（21.32。底本の語順は Pompilius Numa だが、なじみのある順で書く。21.33 の Numa は「ヌマ」） |
| Zacharias／Cyrus／Darius／Thales／Solon／Sibylla | ゼカリヤ／クロス／ダリヨス（口語訳）／タレス／ソロン／シビュラ（19.5、19.11。シビュラは『第一弁明』と同じ） |
| Aegyptii／Chaldaei／Phoenices／Tyrus | エジプト人／カルデヤ人／ピニケ人／ツロ（口語訳。ピニケは『ギリシア人への演説』と同じ）（19.14） |
| Manethon／Berosus／Hieromus／Mendesius Ptolemaeus／Menander Ephesius／Iuba／Apion／Iosephus | マネト／ベロッソス／ヒラム（Oehler の推定 Hieromus。口語訳の名）／メンデスのプトレマイオス／エペソのメナンドロス／ユバ王／アピオン（『ギリシア人への演説』と同じ）／ヨセフス（19.14） |
| Astartes／Dusares／Norici・Belenus／Mauritania／Fides | アスタルテ（『オクタウィウス』6:1）／ドゥサレス／ノリクム人・ベレヌス／マウレタニア／フィデス（信義の女神）（24.6、24.9） |
| Casinienses／Narnienses／Asculani／Volsinienses／Ocriculani／Sutrini／Falisci | カシヌムの人々／ナルニアの人々／アスクルムの人々／ウォルシニイの人々／オクリクルムの人々／ストリウムの人々／ファリスキ人（24.9。神々は底本の名で、デルウェンティヌス、ウィシディアヌス、アンカリア、ノルティア、ウァレンティア、ホスティア、父クリス） |
| Sterculus／Mutunus | ステルクルス／ムトゥヌス（25.3、25.10。Sterculius、Mutinus の形に寄せない） |
| Sirmium／archigallus／Ida（antrum Idaeum）／Corybantes／Creta | シルミウム／ガッリの長（25.5。『オクタウィウス』22:4 のガッリ）／イダの洞穴／コリュバンテス（『オクタウィウス』と同じ）／クレタ（25.6） |
| Tusci | エトルリア人（25.14） |
| Babylonii／Medi／Pontifices／Quindecimviri／Salii／Luperci／Virgines Vestales／Amazones | バビロン人／メデア人（口語訳）／神祇官／十五人神官団／サリイ／ルペルキ／ウェスタの乙女たち（『オクタウィウス』25:12）／アマゾンたち（26.2） |
| Cynopaene／Sciapodes | 犬の頭の人々／足で日陰を作る人々（8.5。音を写さず意味で訳す。6.9 の cynocephalus「犬の頭の神」と分ける） |
