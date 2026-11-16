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
- 『祈りについて』は、19 章の終わり（disciplinam の後）から先、つまり 20 章以降を初期の刊本（C＝Gangneius、D＝Gelenius、a＝Pamelius。『祈りについて』の略号では C、D、a は刊本）が欠く（底本の 19 章の校注 10、djvu l. 69690〜69700）。CSEL の序によると、写本 A も 21 章の初めで切れ、終わりの部分は写本 B（9 章から）による（`research/cruxes/README.md` の『祈りについて』の略号）。底本は 20〜29 章を続けて刷る。訳は底本どおりにし、伝わり方の訳注は付けない（12-de-oratione-20-22 で決めた。別の読みでも後代の挿入でもなく、Oehler も CSEL も 20〜29 章を『祈りについて』の本文として刷るので、知っても読者の理解は変わらない）。23〜29 章も同じ扱い。

## 照らし合わせる版

- CSEL 20（Reifferscheid & Wissowa 1890）は『見世物について』『祈りについて』『洗礼について』を収める（『殉教者たちへ』は収めない）。論点一覧で、Oehler と読みが違う箇所を拾うのに使う。訳は Oehler の読みで行う。
- 英訳は ANF 第 3 巻（S. Thelwall 訳）。レビューで読み比べる。

## 文体

- 4 作とも地の文は敬体（「〜です」「〜ます」）。書き手のテルトゥリアヌスは「わたし」、キリスト者全体は「わたしたち」。キリスト者の神とキリストの動作は尊敬語にする（『護教論』と同じ）。
- 『殉教者たちへ』：牢にいる、殉教者となるべき人々（1.1 の benedicti martyres designati）に宛てた励まし。読み手は「あなたがた」。呼びかけの benedicti は「祝福された人々よ」。書き手は、自分は語りかけるほどの者ではないと言う（1.2 の Nec tantus ego sum）ので、へりくだった調子を保つ。命令（nolite contristare など）は「〜してはなりません」「〜しなさい」（口語訳の書簡の勧めの言い方）。1.4 だけはエペソ四・三〇 の口語訳に揃えて「聖霊を、悲しませてはいけません」とし、原文にない「神の」は足さない。読み手に向けた三人称の接続法の勧め（2.2 の Nec hoc vos consternet）も「〜してはなりません」とし、推量の「〜でしょう」にしない。悪魔に向けた接続法（1.6〜1.7 の Non dicat、Fugiat、Nec illi … sit、inveniat）は「言わせてはなりません」「〜すればよいのです」「〜ありませんように」。悪魔の言葉は「」に入れ、一人称は「おれ」、キリスト者を「やつら」と呼ぶ（1:6）。2 章と 3 章の一般の二人称単数（deambulaveris、vides、lucreris）は「あなた」。
- 『見世物について』：「神のしもべたち」（dei servi）、すなわち信仰に近づいている人々と、すでに信仰を告白した人々に向けた論。読み手は「あなたがた」。異教徒や、見世物を擁護する人の言い分は、『護教論』の型（言い分を「」に入れて常体にし、「と、人は言います」と受ける）に従う。
  - 言い分の「」の中で、相手がキリスト者一人に語りかける二人称単数（1.2 の tua）は「あなた」。相手の口から神を言うところは尊敬語にしない（2.2 の「神自身が造ったもの」）。言い分の中に書き手が挟む一人称の言葉（2.1 の sicut praedicamus）は、「」を閉じて地の文で「これは、わたしたちも説くとおりです」と受け、次の句で「」を開き直す。
  - 間接話法で紹介するだけの考え（1.3 の Sunt qui existiment …）は「」に入れず、「〜と考える人々もいます」「〜というのです」と地の文で受ける。
  - 3 章の詩篇一・一 は、口語訳を下敷きにし、原文が七十人訳の形で、続く論が concilium を人の集まりとして扱うので、次の句にする：『悪しき者の集まりに行かず、罪びとの道に立たず、疫病のような者の座にすわらなかった人は、さいわいである』。論の中で詩篇の語を引くところ（3.5、3.9 の concilium impiorum）は『悪しき者の集まり』と『』に入れる。見世物の場の名として言う「道」「座」（3.6〜3.7）は「」。詩篇を裏返した書き手の言い方（3.7 の contrario infelix …）は聖句でないので『』に入れない。十戒の言い換え（3.2）は、口語訳の「〜してはならない」の形で、原文の語のまま『』に入れ、書き手が仮に作った禁令（Non ibis in circum …）も『』に入れる（書かれた文字の扱い）。15.7 の詩篇五〇・一八 も原文が七十人訳の形（συνέτρεχες）なので、同じく口語訳を下敷きにして『あなたは盗びとを見れば、これと共に走った』とし、`// ` メモに口語訳との違いを書く。
  - 書き手がキリスト者一人に呼びかけるところ（8.6〜8.7 の Christiane、tibi、inquis、18 章の contendas、tuo、tibi、oderis）は「キリスト者よ」「あなた」。そのキリスト者の問いは「」に入れて常体にし、「と、あなたは尋ねます」と受ける（言い分の型の「人は」を「あなたは」にする）。
  - 6.1 と 7.1 の utriusque generis ludi は「両方の種類の遊戯」とし、中身を補わない（Oehler の注 b は戦車競走と劇場とするが、6.3 は聖なる遊戯と葬いの遊戯に分ける）。12.8 の utriusque ludi は闘技場の剣闘と獣狩り（注 p）で、6.1 と別のものなので「両方の遊戯（剣闘と獣狩り）」と補う。
  - 使徒の言葉として新約を言い換えて引き、文言が口語訳から離れるところ（13.1 の Non quod idolum sit aliquid, apostolus ait, sed quod quae faciunt daemoniis faciunt、13.2 の第一コリント一〇・二一。主の言葉や使徒の勧めを地の文に溶かしたところ、15.2 のエペソ四・三〇〜三一、16.7 のマタイ五・四四 とルカ六・二八、17.4〜17.6 のエペソ五・四、マタイ一二・三六、一五・一一、第一コリント三・一九 も同じ）は、底本がコロンと大文字で刷っていても『』に入れず、口語訳を参考にして地の文で言い換え、出典を付ける。口語訳の「悪霊」に当たる daemonia は、続く論（consistentibus … in consecrationibus）とつながるよう訳語表の「ダイモン」で訳す。これは『』に入れると口語訳の文言と読まれるためで、3.2 の十戒の言い換えのように、口語訳の「〜してはならない」の形をそのまま保てる短い句は、3.2 の決まりどおり『』に入れる。
  - 原文の語が口語訳と違う聖句の言い換え（23.4 のマタイ六・二七 を ad staturam suam「背丈」と取るところ、23.6 の申命記二二・五 の maledictum「のろわれる」）は、論が原文の語に立つので原文の語のまま地の文で言い換え、出典を付け、`// ` メモに口語訳の文言との違いを書く。主の教えをなぞる言い方（23.4 と 25.4 のマタイ五・三九）と、引用でない暗示（23.2 の列王紀下二・一一）にも出典を付ける。
  - 名を出さない詩人の引用（9.3 のウェルギリウス）は、名を補わず「こうも歌われています」と受け、出典は `// ` メモに書く。
  - 本文が名を出さずに ille で指す人は、『護教論』の「強めの ipse・ille」の決まりに従い、本文だけでは読者がだれか分からないときに限って、Oehler の注に従って名を補う（3.4 の iustum illum は、詩篇をだれに当てはめたかが本文から分からないので「あの正しい人、アリマタヤのヨセフ」）。名を出さない町（7.3 の illius urbis, in qua daemoniorum conventus consedit。注 f のとおりローマ）も同じ扱いで、属州と対比していて分かるので補わない。本文がその人の行いを物語っていて、名がなくても話が通るところ（『殉教者たちへ』4.7 のアテナイの遊女、『護教論』50.6）は補わない。
  - 異教の場に入り込んだ汚れた霊の言葉（26.1 の in meo eam inveni）は、『殉教者たちへ』1:6 の悪魔の言葉と同じく「」に入れ、一人称は「おれ」。
  - 書き手が終わりの日に迫害者たちへ言う言い返し（30.6〜30.7 の Hic est ille, dicam …）は「」に入れて常体にし、ユダヤ人の罵りの言葉の中のキリストは尊敬語にしない（2.2 の型）。二人称複数（redemistis）は「おまえたち」。罵りの句には出典を付け（マタイ一三・五五、ヨハネ八・四八 など）、原文の語が口語訳と違うところ（felle et aceto「胆汁と酢」）は 23.4 の型で `// ` メモに書く。28.2 のヨハネ一六・二〇 のように、聖句の句を口語訳と違う順で引くところも、13.1 の型で地の文に言い換え、saeculum は「世」のままにする。
- 『祈りについて』『洗礼について』：教会の中の読み手に向けた教え。主語が書き手と読み手を含むときは「わたしたち」。『祈りについて』1.6 の呼びかけ benedicti は『殉教者たちへ』と同じ「祝福された人々よ」。
  - 『祈りについて』の聖句の引き方は『見世物について』の決まり（13.1 と 23.4 の型）に従う。inquit などで直接引き、口語訳の語を使って原文の長さに縮めただけのところ（1.5 のヨハネ三・三一〜三二、3.2 のヨハネ一七・六、4.6 のルカ二二・四二、5.4 の黙示録六・九〜一〇、6.2 のマタイ六・三三、7.5 のマタイ一八・二二）は『』に入れ、除いた語を `// ` メモに書く。原文の語が口語訳と違い、論がその語に立つところ（2.2 のヨハネ一・一二 の「神の子と呼ばれる」、2.3 のイザヤ一・二〜三 の「子らを生んだ」「わたしを認めなかった」、6.3 のヨハネ六・三三 の「生ける神の言葉」、6.5 のマタイ一五・二六 の父を主語にした問い、8.3 のルカ二二・四六 の「試みられないように」）は、コロンや inquit で引いていても地の文で言い換えて出典を付け、メモに書く。cum dicit … Item のように一組で引くところ（6.5〜6.6 のマタイ一五・二六 と七・九）は、扱いを揃える。論が語にかからない小さな違い（10.1 の accipietis と口語訳の「与えられる」）は、口語訳の文言にしてメモに書く。11.3 の創世記四五・二四 も、論が「道」と「怒る」に立ち、口語訳の「途中で争ってはなりません」では両方が消えるので、地の文で「道で怒ってはならない」と言い換える。28.1〜28.2 のイザヤ一・一一〜一二 も、原文が七十人訳の形（「小羊の脂肪」「だれが、あなたがたの手から、これらを求めたのか」）で、論が「求める」の語を 28.2〜28.3 でつなぐので、「と言われます」で受けて地の文で言い換える。28.3 の Deus enim spiritus est … tales requirit（ヨハネ四・二四 の前半と四・二三 の後半をつなぐ）も地の文。28.2 の Veniet hora … in spiritu et veritate は口語訳の文言のまま『』に入れる。24.1 の Omni, inquit, loco, quem … は、使徒の語の『どんな場所でも』だけを『』に入れ、関係文は地の文にする。
  - 聖書でない書の直接の引用（16.2 の『ヘルマスの牧者』の Cum adorassem et assedissem super lectum）は、このリポジトリの訳（`books/shepherd-of-hermas`）の文言に揃えて『』に入れ、原文が引かない語（「家で」）は除き、出典は `// ` メモに書く（『見世物について』9.3 の型）。聖書にない言葉を inquit で引くところ（26.1 の Vidisti, inquit, fratrem, vidisti dominum tuum。アレクサンドリアのクレメンスも引く）は『』に入れ、出典は付けず、`// ` メモに書く。異教の神託の言葉（17.3 の Daemonium oraculi Pythii … inquit）は「」に入れ、一人称の語を出さずに訳し、出典（ヘロドトス）は `// ` メモに書く。
  - 注釈者が相手の反論と取る、inquit のない文（18.2 の Quaecumque oratio sit … celare。Oehler の注 b）は、『護教論』の言い分の型で「」に入れ、「と、人は言うでしょう」と受ける。続く書き手の言い返し（18.3 の Iam enim …）は「けれども、」で受ける。
  - 口語訳にない、ダニエル書のギリシア語訳にだけある部分の話（29.2 の roris angelum）は、口語訳の章節で出典を付けず、origen-on-prayer 13:2 と同じく訳注「ダニエル書のギリシア語訳にだけある部分の話。」を付け、`// ` メモに七十人訳・テオドティオン訳の箇所と底本の欄外の表記を書く。どの話を指すか決めきれないところ（29.2 の rusticorum prandium transfert。底本の欄外の列王紀下四章か、「ベルと竜」のハバククの話か）は、出典も訳注も付けず、候補をメモに書く。
  - 引用でない聖句の暗示にも出典を付ける『見世物について』23.2 の型は、『祈りについて』でも同じ（8.2 のマタイ一〇・三七、13.1 の purae alleventur の第一テモテ二・八、17.5 の in publico orent のマタイ六・五〜六）。
  - 書き手が皮肉で相手の理屈を突き詰めるところ（15.3 の Deus scilicet non audiat、16.3 の Immo contra scripturam fecerit、16.4 の Nisi exprobramus deo）は、文型の訳し方の 23.7 の型で「というのでしょう」「ことになるのでしょう」「なら、話は別ですが」と受ける。
  - 聖句の数を論の要にするところ（7.5 のマタイ一八・二一〜二二 と創世記四・一五、二四 の septies、septuagies septies）は、四か所とも口語訳マタイの「七たび」「七たびを七十倍」に揃え、創世記の口語訳（「七倍」「七十七倍」）との違いをメモに書く。
  - 21〜22 章（おとめのおおい）の相手の言い分は、間接の言い方（21.1 の hoc niti videntur, quod …、21.2 の Nam si … secernit）を地の文で「〜というのです」「そう考えるのです」と受け、inquiunt で直接の言葉になるところ（21.2 の Potuit enim …）から「」に入れて「と、彼らは言います」と受ける。22.21 の Sed non putet … commovendam は、Oehler の注 w の二つ目の解に従って相手の反論とし、18.2〜18.3 の型で「」に入れ「と、人は言うでしょう」と受け、22.22 の Multi … addicunt を「けれども、」で受ける書き手の答えにする。22.16 の Sed aliqua se deo vovit は地の文。22.17〜22.21 で書き手が神にささげたおとめに語りかける二人称単数は「あなた」、22.19 の呼びかけ virgo は「おとめよ」。
  - 聖句の一語に論が立つところ（22.6〜22.7 の第一コリント一一・四〜五 の Omnis mulier、Omnis vir。口語訳には「すべての」がなく、語も「女」）は、2.2 の型で地の文で言い換え、論が取り上げる語そのもの（22.7 の dicendo Omnis）だけを『すべての』と『』に入れる。22.18 の第一コリント四・七 は、使徒が前に置く Si dei gratia est, et accepisti を地の文にし、quid gloriaris … を口語訳の文言で『』に入れる。22.10 の創世記六・二 の Et acceperunt sibi in uxores は口語訳の『妻にめとった』。言い換えの暗示（20.2 の第一ペテロ三・三 と第一テモテ二・九、22.11 の第一コリント一一・一四〜一五、22.12 の一一・六、22.14 の創世記三・七）には 23.2 の型で出典を付ける。底本の欄外の章節の刷りの誤り（21.2・22.6 の 1 Cor. IX、22.25 の Gen. XXXIV, 65）は正しい箇所を示し、`// ` メモに書く。21.2 の欄外の 1 Cor. IX, 5. は、使徒の指示を言い換える 21.1 の終わりに（第一コリント一一・五）として付けた。
  - 1 章冒頭の Dei spiritus はキリストを指す（注 a）。「神の霊」と訳し、聖霊と補わない。sermo／ratio は『護教論』の「言葉」「理」。『洗礼について』の論敵（1.2 で言う「ガイアナ派の異端の毒蛇である、ある女」）とその仲間への言い返しも、『護教論』の言い分の型に従う。
- 『洗礼について』の聖句と語りかけ：
  - 書き手が擬人化した不信仰や、読み手の一人に語りかけるところ（2.2 の Pro misera incredulitas, quae denegas「ああ、みじめな不信仰よ。あなたは」、2.4 の ut putas、3.3 の Habes homo「人よ、…あなたは」）は「あなた」。
  - 相手の言い分を dicunt で直接言うところ（13.1 の Adeo dicunt）は、11.1 と同じく「」に入れて常体にし、「と、彼らはこうまで言うのです」と後で受ける。反論を Nemo dicat で退けるところ（4.3）は、反論を「」に入れて常体にし、「と、だれも言ってはなりません」と受ける（『殉教者たちへ』の三人称の接続法の型。推量にしない）。
  - 3.2〜3.3 の創世記一・一〜二 は inquit で引くので、一組で『』に入れる。一・一 は口語訳のまま、一・二 は原文が七十人訳の形（invisibilis et incomposita、ferebatur）で、3.4〜4.2 の論が「運ばれる」の語に立つので、『見世物について』3 章の詩篇一・一 の型で口語訳を下敷きにして原文の語に合わせる。spiritus domini は底本の読みで「主の霊」、4.1 の dei spiritum は「神の霊」。a primordio・In primordio・tunc in primordio は「はじめ」で揃える。
  - 2.5 の第一コリント一・二七 と、人と神のもとの難しさの句は、原文の語（sapientiam eius）に論が立つので、23.4 の型で一組として地の文で言い換える。二つ目の句の出典は底本の欄外のマタイ一九・二六（ルカ一八・二七 はメモ）。
  - 原文の語が口語訳と違い、論がその語に立つ聖句は、直接引く（sicut in Actis、inquit）なら『』に入れて口語訳を下敷きに原文の語に替え（7.1 の使徒四・二七 の filium「子」。続く論が「父なる神」が子に油を注いだことに立つ。除いた語と口語訳の「僕」をメモに書く）、引かずに論の中で言う（6.2 のマタイ一八・一六 の「三人の証人」）なら、23.4 の型で地の文で言い換える。口語訳の語のまま縮めただけの引用（8.4 のマタイ一〇・一六 の『はとのように素直であれ』）は『』に入れ、除いた前半をメモに書く。引用でない暗示（6.1 のルカ一・七六、6.2 のマタイ二八・一九、7.1 のレビ八・一二、8.3 のマタイ三・一六、8.4 の創世記八・八〜一一、8.5 の第二ペテロ三・七、5.11〜5.12 の創世記一・二六、二・七）には 23.2 の型で出典を付ける。
  - 聖句の中の tinguere（10.8 のマタイ三・一一 の言い換え、11.1 のヨハネ四・二、11.3 の Ipse vos tinguet）も、訳語表の「浸す」で通す。11 章の論は「主は浸さなかった」から「このかたが浸す」を「このかたによって浸される」と読み替えることに立つので、口語訳の「バプテスマを授ける」にすると筋が消える。直接引くところ（Legimus、11.3）は 7.1 の型で『』に入れて語を替え、間接の 10.8 は地の文にする。主語が主の「浸す」は、受け身と紛れないよう「お浸しになる」「浸すことはなさらなかった」とする。
  - 9〜12 章の直接の引用：論が原文の語に立つもの（12.1 のヨハネ三・五 の「水から生れなければ、いのちを持たない」、12.4 のヨハネ一三・一〇 の「一度洗った者は、もう一度洗う必要はない」）は 7.1 の型で『』に入れる。12.4 の出典は本文の言葉に当たる一三・一〇（欄外の XIII, 6 はメモ）。論が語にかからないもの（12.7 のマタイ一一・一一、12.11 のマルコ一〇・五二 とルカ七・四八）は口語訳の文言で『』に入れ、違いをメモに書く。12.11 のマタイ一〇・三七 は口語訳を下敷きに praetulerit に合わせて「重んじる」とする。10.8 のヨハネ三・三一 は『祈りについて』1.5 の型で縮める。間接に言う聖句（10.1 のマルコ一一・三〇 の「天のものか、それとも地のものか」、10.7 のマルコ一・四 の「罪のゆるしへと向かう悔い改めの洗礼」）は 23.4 の型で地の文にする。
  - 名を出さずに行いを並べるところ（12.11 の収税所を捨てた者、舟と父を捨てた者、父の葬りを顧みなかった者）は、名を補わず、「ある者は」で人を分けて出典を付ける（『殉教者たちへ』4.7 の型）。関係詞で主語が変わるところは底本の取り方に従う（12.11 は底本の qui patris … により、父の葬りを顧みなかった者が ante perfecit の主語。qui を削る Rigaltius・CSEL に寄せて「彼らは」としない）。
  - 相手の論を間接に言うところ（12.1〜12.2 の retractatus quorundam、12.8 の Alii … iniciunt）は、地の文で「〜というのです」「そう問うのです」と受ける。11.1 の inquiunt で始まる言い分は、続く Legimus enim とヨハネ四・二 の引用までを相手の言葉として「」に入れ、「と、彼らは言います」と受ける。
  - 5.8 のベトサイダの池（Bethsaida）は、ヨハネ五・二 の池なので口語訳の「ベテスダの池」とし、原文の名をメモに書く。天使の節（ヨハネ五・三 後半〜四）は口語訳が〔 〕で示すので訳注を付けない。5.10 の unum semel anno は原文どおり「一年に一度、一人を」とし、口語訳の「時々」をメモに書く。
  - 5.11 の imago／similitudo（創世記一・二六）は「かたち」「似る（似ること）」と訳し分ける。口語訳の「かたどって」では名詞の対が出ないため。adflatus（創世記二・七）は「息」。
  - 7.1 の unde Christus dicitur a chrismate の主語は直前のアロンで、七十人訳レビ四・五 の「油注がれた祭司」（ὁ χριστός）の呼び名。文型の訳し方の名の由来の型で「油注ぎ（クリスマ）にちなんで、油注がれた者（クリストゥス）と呼ばれます」とし、続く quae domino nomen accommodavit は「主にキリストという名を与えた」。
  - たとえと分からないと文が読めないところ（8.1 の水オルガン。Oehler の注 a）は、注に従って訳文で短く補う（「水オルガンでは」）。spiritus がオルガンの空気と霊に掛けられているので、空気は「息」、神の側は「霊」と訳し分ける。8.2 の Christum deformantes は「キリストをかたどって」とし、X の字か十字架か（注 d）は補わない。
  - 8.4 の ubi ecclesia est arca figurata は「このひな型では、教会が、前もって示された箱舟なのです」。8.5 の quo male comparetur baptismus diluvio は「この点では、洗礼を洪水にたとえるのはふさわしくない」と取る。
  - 5.7 の Nympholeptos（Oehler の推定）は訳注を付けず、刊本の読みと CSEL の十字をメモに書く（呼び名の並びの要点は変わらないため）。
  - 13〜17 章の聖句：直接引き、論が原文の語に立つもの（13.3 のマタイ二八・一九 の docete と tinguentes。14.3 と 17.7 が「宣べ伝える・教える」と「浸す」の組に立つ）は 7.1 の型で『行って、国民を教え、父と子と聖霊との名によって、彼らを浸しなさい』とし、論が語にかからない in nomen は口語訳の「名によって」。13.3 のヨハネ三・五 は、論が水による洗礼の必要に立つので口語訳の文言（『神の国』）にし、renatus・regnum caelorum をメモに書く（12.1 と扱いが違う）。13.4 の使徒九・六 は「町」を原文の「ダマスコ」に替え、その語を持つ二二・一〇 を並べて出典にする。14.1 の第一コリント一・一七 と 16.1 のルカ一二・五〇 は tinguere を「浸す」に替え、16.1 の baptismus は口語訳の「バプテスマ」のまま。17.7 の第一コリント一四・三四〜三五 は『祈りについて』1.5 の型で縮め、『黙っていなければならない』、また『家で自分の夫に尋ねるがよい』とする。間接に言うもの（14.3 の一・一七、16.1 の第一ヨハネ五・六、17.4 の第一コリント六・一二、一〇・二三）は地の文。暗示（13.4 の使徒九・一八、二二・八、14.1 の一・一四、一六、14.2 の一・一二、15.1 のエペソ四・四〜六 と、注 c による ex domini evangelio のヨハネ一三・一〇、16.2 のヨハネ一九・三四）には出典を付け、箇所が一つに決まらない暗示（13.1 のアブラハム、16.1 の vocatos・electos）には付けない。
  - 17.6 のパウロの名の偽りの書（『パウロ行伝』）とテクラは、本文が話を物語っているので『殉教者たちへ』4.7 の型で補わず、書の名は `// ` メモに書く。訳注も付けない（別の読みでも後代の挿入でもないため）。17.5 の nova bestia … similis pristinae、illa は 1.2〜1.3 の女を指すが、1.3 に訳注があるので補わない。
  - 18〜20 章の聖句：直接引き、論が原文の語に立つもの（19.3 のエレミヤ三一・八 の『祭りの日に』。七十人訳三八・八 にだけある句で、論が過越と五旬節をその句から説く。20.3 のマタイ二六・四一 の「試み」。20.1 のマタイ三・六 の「浸された」）は 7.1 の型で口語訳を下敷きに語を替え、19.3 には『祈りについて』29.2 の型で訳注「『祭りの日に』は、ギリシア語訳にだけある句。」を付ける。論が語にかからないもの（18.1 のルカ六・三〇、マタイ七・六、第一テモテ五・二二、18.5 のマタイ一九・一四、19.1 のマルコ一四・一三、20.8 のマタイ七・七 の Petite, et accipietis）は口語訳の文言で縮めて『』に入れ、違いをメモに書く（18.1 の二つの引用は 17.7 の「『…』、また『…』」の形）。20.8 の inquit は前半だけにかかり、完了形の Quaesistis … apertum est は書き手の言い換えなので地の文。間接に言うもの（19.2 の使徒一・一一、20.6 のマタイ四・四 の hominem dei「神の人」）は 23.4 の型で地の文にし、hominem dei は原文の語のままにしてメモに書く。20.3 の neminem intentatum … は、欄外のルカ二二・二八〜二九 と語が隔たるので出典を付けず、メモに書く（『祈りについて』29.2 の決めきれない暗示の型）。
  - 18.2 のピリポを原文が二度 apostolus と呼ぶところは、原文どおり「使徒」とし、使徒二一・八 の「伝道者ピリポ」と、口語訳八・二六 で道を命じるのが「主の使」であることをメモに書く。御霊の動作は尊敬語（「お命じになりました」）。impressus は Oehler の注 c の解（聖書がすっかり身に染みた）、exhortatus adsumitur は注 e のとおり受け身でピリポが主語。
  - 18.3 の Simon hospes は底本どおり「宿の主人シモン」とし、使徒行伝の話（宿はユダの家、告げられたのはアナニヤ）と合わず、刊本と推定に Iudas・Ananias があるので、訳注「『ユダ』と読む古い刊本や、『アナニヤ』と直す案もある。」を付ける。20.2 の si nunc publice は、底本と CSEL が採る推定で、刊本はみな si non publice と意味が逆なので、1.3 の Itaque illa と同じ扱いで訳注「古い刊本はみな『公に告白しないなら』と読む。」を付ける。
  - 18.6 の Cautius agetur … divina credatur は、底本が平叙文に刷るので、CSEL の疑問符に寄せず、文型の訳し方の 23.7 の型で「…というのでしょう」と皮肉に受ける。18.6 の一般の二人称単数（videaris）は「あなた」。20.4 の dicet aliquis の反論は『祈りについて』18.2〜18.3 の型で「」に入れ「と、人は言うでしょう」と受け、Et quis enim prohibet を「けれども、」で受ける。
  - 19.2 の utique in Pentecoste は、昇天と天使の言葉が五旬節の五十日のうちにあったことを言うと取り、「それは、まさに五旬節の五十日のうちのことでした」とする（sic venturum にかける解はメモ）。20.5 の in ipsum は「イスラエル自身に」。20.7 の primas manus … apud matrem は、注 f のとおり、たとえと分からないと読めないので 8.1 の型で「初めて、母である教会のもとで…祈りの手を広げます」と補う。呼びかけの benedicti は「祝福された人々よ」。
  - 1.3 の ΙΧΘΥΝ は、文型の訳し方の 22.5・25.6 の型で「イクテュス」、すなわち「魚」とし、頭字語の説明は補わない（読みの違いではないので訳注も付けない）。1.3 の Itaque illa には、底本より前の版の Ita Quintilla を知らせる訳注を付けた。
- 人の語りかけの調子は、最初に出たページで決めてここに書く。
- 『殉教者たちへ』4.2 の女たちへの呼びかけ benedictae は「祝福された女たちよ」（1.1 などの benedicti「祝福された人々よ」と分ける）。霊に向けた三人称の接続法の勧め（4.2 の Colloquatur spiritus、contraponat）は「霊に…させなさい」。

## 主の祈り

『祈りについて』2〜8 章は、句ごとに 1 章を立てて説き明かす。句の順は、父（2 章）、御名（3 章）、みこころ（4 章）、御国（5 章）、パン（6 章）、ゆるし（7 章）、試み（8 章）で、みこころが御国より先に来る（底本の 5.1、6.1、9.1 で確かめた）。9 章はこの七つを同じ順でまとめる（9.1 の「父という呼び名には、神への誉れがあります」など。各項の語は 2〜8 章の訳に揃える）。訳はオリゲネス『祈りについて』の表を下敷きにするが、そこで口語訳から変えた句は、オリゲネスのギリシア語の論に合わせて変えたものなので、テルトゥリアヌスのラテン語と説き明かしに合うかを、その章を訳すときに確かめて確定する。変えるときは理由を書く。ラテン語の句は、底本を起こしたページでこの表に書き足す。

| 章 | 句（オリゲネスの本の訳） | 扱い |
|---|---|---|
| 2 | 天にいます父よ（Pater qui in caelis es） | 確定。底本も写本も noster を持たないので、口語訳の「われらの」を除いた（2.1 のメモ）。2.5 の論も「父」の語に立つ |
| 3 | 御名が聖とされますように（Sanctificetur nomen tuum） | 確定。3.3〜3.5 の論が sanctus・sanctificatum・sanctificare（「聖なる」「聖とされた」「聖とする」）と Sanctus の三唱に立つので通る。3.2 のヨハネ一二・二八 の glorifica は口語訳の「み名があがめられますように」のままにする（句が「聖とされる」なので紛れない） |
| 4 | みこころが天にも地にも行われますように（Fiat voluntas tua in caelis et in terra） | 確定。底本の句は sicut を持たず、4.2 は天と地をわたしたちの霊と肉と取るので、口語訳の「天に行われるとおり、地にも」の比べる形にしない（4.1 のメモ）。句の前半だけ引くところ（4.5、5.1）は『みこころが行われますように』 |
| 5 | 御国がきますように（Veniat regnum tuum） | 確定。5.2〜5.5 の論は「国」「来る」の語に立ち、口語訳のままで通る。5.2 の regnum dei は「神の国」、5.5 の quam celeriter veniat, domine, regnum tuum は「主よ、あなたの御国が、一刻も早く来ますように」 |
| 6 | わたしたちの日ごとのパンを、きょうお与えください（Panem nostrum quotidianum da nobis hodie） | 確定。オリゲネスの本の「存在を支える」は ἐπιούσιος を οὐσία から説く論のための訳で、テルトゥリアヌスは quotidianum の語を説かないので、口語訳の「日ごとの」に戻した。論は「パン」（キリスト、命のパン、からだ）と「きょう」（6.6 のあすを思いわずらうな）に立つので、口語訳の「食物」を「パン」にし、原文にない「も」を除いた（6.2 のメモ）。6.6 の Da nobis hodie は『きょうお与えください』 |
| 7 | わたしたちに負債のある者をゆるしましたように、わたしたちの負債をもおゆるしください | 確定（口語訳のまま）。本文が句として引くのは前半だけで、Petamus に続く不定法の間接の形（7.2 の dimitti nobis debita nostra）。そこは句の後半を『わたしたちの負債をおゆるしください』と『』に入れ、前の句がないので「も」を除く（7.2 のメモ）。後半は 7.4 で現在形の profitemur を使って地の文で言う（「わたしたちも自分に負債のある者をゆるすと言い表している」）。debitum／debitor は「負債」「負債のある者」、remittere は「ゆるす」（たとえの中の主人の行いは口語訳マタイ一八・二七 の「免じる」） |
| 8 | わたしたちを試みに引き入れないで、悪しき者から引き離してください（Ne nos inducas in temptationem … Sed devehe nos a malo） | 確定。inducas は、8.1 がすぐ ne nos patiaris induci（引き入れられるのを許さないで）と同じ動詞の受け身で言い換えるので「引き入れる」。8.4 で前半を deducas と引くところは「導く」と訳し分ける。devehe は「運び去る」で口語訳の「お救いください」と語が違い、「試みに」と「悪しき者から」の向きの対を残すため「引き離してください」。a malo は「悪」とも取れる形だが、8 章は試みる者を悪魔とし、『迫害のときの逃亡について』2 章が同じ句を erue nos a maligno と引いて悪魔と取る（Oehler の djvu l. 57124）ので「悪しき者」（8.4 のメモ）。句の初めの Sed は「しかし」 |

## 訳語表

『護教論』の訳語表にある語は、同じ意味で使うときはその訳に揃える。この本で決めた訳は次のとおり。ページを訳しレビューを適用するたびに、ここに統合する。

| 原語 | 訳 |
|---|---|
| spectaculum | 見世物（作品の題も『見世物について』） |
| oratio | 祈り |
| adorare（『祈りについて』） | 祈る（1.4〜1.6、2.3、16.2、17.1、17.4。ルカ一一・一 やマタイ六・六 の「祈る」の意味で orare と同じに使う。『護教論』の「拝む」にしない）。28 章のヨハネ四・二三〜二四 を引くところとその受け（28.2〜28.3 の adoratores、adorabunt、veri adoratores）は、口語訳の「礼拝をする者」「礼拝する」。25.3 の ne minus ter die saltem adoremus は「祈る」。対象を目的語に取って崇めることを言うところ（13.3 の Nos dominum adoramus, non dedimus、16.3 の adoratis sigillaribus suis）は「拝む」 |
| sophia／disciplina orandi／breviarium（『祈りについて』1 章） | 知恵／祈りの教え／要約 |
| religio（『祈りについて』） | 礼拝（神にささげるもの。1.6 の religionem suam offerret、9.2 の religio orationis「祈りという礼拝」、18.4 の ieiunii religio「断食という礼拝」）。人の側の敬いの心を言う 6.4 の non sine religione は、『護教論』6.10 の「敬虔」の意味で「敬虔な思い」。superstitio（迷信）と対にする 15.2 の non religioni, sed superstitioni も「敬虔」 |
| substantia（『祈りについて』） | 文脈で訳す（1.8 の interpretationis substantia「解き明かしの中身」、4.3 の substantiam … voluntatis「みこころの実質」、4.6 の substantia passionis「受難の実際」）。『護教論』の「実体」にしない |
| agnoscere／recognoscere（『祈りについて』2 章） | 認める（2.3 の Felices, qui patrem agnoscunt と、イザヤの me non agnoverunt の掛け合いを残す）／見いだす（2.5） |
| pietas／potestas（『祈りについて』2.4） | 慈しみ／権力（『護教論』34.2 の nomen pietatis quam potestatis に揃える。Oehler の注 b）。4.7 の voluntas et potestas patris は「父のみこころであり、父の力」 |
| sufferentia／sustinere（『祈りについて』4 章） | 忍耐／耐え忍ぶ |
| temptatio・temptare／probare（『祈りについて』8 章） | 試み・試みる（『洗礼について』12.9、18.7、20.2〜20.6 の tentatio・tentare・intentatus も「試み」「試みられる」「試みを受けない」で揃え、20.3 のマタイ二六・四一 も「試みに陥らないように」とする。8 章を通して揃え、8.3 のルカ二二・四六 の ne temptemini も「試みられないように」と言い換える。口語訳の「誘惑」にしない）／明らかに示す（8.2 の non temptandae fidei gratia …, sed probandae。神について「試みる」を退ける論なので、「確かめる」「ためす」のような知るための語にしない） |
| exomologesis／confiteri（『祈りについて』） | 告白（7.2、9.1）／言い表す。7.2 の Exomologesis est petitio veniae は、続く理由から「ゆるしを願うことは、告白です」の向き。与格を取る 14.2 の orantes confitemur Christo は「ほめたたえる」（罪を言い表す意味と分ける） |
| delictum／peccator／paenitentia | 罪／罪びと／悔い改め（『祈りについて』7 章） |
| desiderium／petitio（『祈りについて』10.1） | 望み／願い（「あとから加わる望みには、外側に願いを積み上げる権利がある」） |
| invidia（『祈りについて』5.4 の殉教者の叫び） | 嘆き訴えて（『護教論』40:14 の invidia caelum tundimus と同じ。Oehler の注 c。「ねたみ」にしない） |
| expungere（『祈りについて』9.1 の expunguntur officia） | 果たす（『護教論』35.4 の vota … expungimus と同じ）。怒りについて言う 11.4 の Ne verbo quidem malo permittit expungi は「晴らす」 |
| sui（神・主の） | ご自分の者たち（『祈りについて』1.7、2.5。「ご自身の」と揺らさない） |
| bene optare（『祈りについて』3.2、4.5） | よいことを願う（3.2 の bene deo optare「神のためによいことを願う」、4.5 の nobis bene optamus「自分たちのためにもよいことを願う」。4.1 の ei successum … oremus も「神のために」を落とさない） |
| baptismus／baptisma | 洗礼（作品の題も『洗礼について』。『ペルペトゥアとフェリキタスの殉教録』と同じ）。口語訳の聖句を引くところの「バプテスマ」は口語訳のまま |
| tinguere・tinctus・intincti（『洗礼について』） | 浸す・浸された・浸される者たち（2.1 の inter pauca verba tinctus、4.1、4.3 の tinguimur、4.4〜4.5 のヨハネ、ペテロ、ピリポの tinxit。洗礼を授ける行いを言うテルトゥリアヌスの語で、baptismus の「洗礼」と分け、2.1 の demissus「沈められる」、resurgit「上がってくる」の所作とつなげる） |
| sacramentum（『洗礼について』） | 秘儀（1.1 の sacramentum aquae nostrae、3.8 の in sacramentis propriis、4.5 の sacramentum sanctificationis。『護教論』のキリスト者の sacramenta と同じ。『殉教者たちへ』3.1 の兵士の「誓い」とは意味が違う）。異教の arcana（2.2）は「秘密の儀式」と分ける |
| suggestus／apparatus／sumptus（『洗礼について』2.1〜3.2） | 飾り（Oehler の 3 章の注 b のとおり装い、飾りの意味。「演壇」にしない）／装い（訳語表の『見世物について』4.3）／費用 |
| materia／elementum／liquor（『洗礼について』） | 材料（2.5 の materias operationis suae「ご自分の働きの材料」、3.1、3.4、3.7、3.8、4.2）／元素（3.1 の liquidi elementi「流れる元素」、3.3、3.6、3.8）／水 |
| praescriptio（『洗礼について』3.1） | 定め（『見世物について』8.8 と同じ。tamquam praescriptionis「いわば定めとして」） |
| ferri・superferri・supervehi／vectaculum（『洗礼について』3〜4 章） | 運ばれる（創世記一・二 の ferebatur から 4.1〜4.2 まで揃え、運ばれる霊と運ぶ水の対を残す。神の霊について言うが、受け身と読めるよう尊敬語にしない）／乗り物 |
| genus／species（『洗礼について』4.3〜4.4） | 類／種 |
| vipera／aspis／regulus（『洗礼について』1.2〜1.3） | 毒蛇／まむし（口語訳ローマ三・一三）／バシリスク。5 章以降に蛇の比喩が戻っても揃える |
| caelestis／terrenus／humanus（『洗礼について』10 章） | 天のもの／地のもの／人間のもの（10.1 の問いから 10.6 まで揃える）。10.2 の mandatu, non et potestate は「神の命令によるのであって、神の力によるのではない」とし、10.3 の in hominis potestate「人の力のうちに」と potestas を「力」で揃える |
| praeministrare（『洗礼について』10.3、11.3） | 仕える（10.3 の caelestibus praeministrabat「天のもののために先立って仕えていた」、11.3 の cui praeministratur「人がその下で仕えている、その人」） |
| vita（『洗礼について』） | いのち（1.1 の「永遠のいのち」、11.5、12.1 のヨハネ三・五 の「いのちを持たない」。『護教論』の「永遠のいのち」と同じ。同じページの「命令」の「命」と紛れないよう、mandatum は「命令」） |
| sanctificatio（『洗礼について』） | 聖とする・聖とされること（4.5、10.7。「清め」と同じ音の「聖め」と書かない） |
| episcopus／presbyter／diaconus／summus sacerdos／laici・discentes（『洗礼について』17 章） | 監督／長老／執事（このリポジトリの『イグナティオスの手紙』『第一クレメンス』『ディダケー』と同じ）／最高の祭司（口語訳の「大祭司」はユダヤの大祭司やキリストの呼び名と重なるので使わない）／信徒・弟子である信徒たち（discentes は注 b のとおり直前の laici を言う）。episcopatus は「監督の職」、officium は「務め」、schismata は「分裂」（14.2 と 17.4） |
| fides（fidei proximum。『洗礼について』17.7） | 本当らしさ（「どうして本当らしく思われるでしょうか」。成句で「信仰」の意味でないところは「本当らしい」「信じられる」と訳す） |
| credere（『洗礼について』18.1、18.6） | 委ねる（Oehler の注 a のとおり「授け、委ねる」の意味。18.6 の cui substantia terrena non creditur, divina credatur と掛け合うので揃える）。substantia terrena は「地上の財産」 |
| cunctatio／dilatio／consecutio・procrastinare（『洗礼について』18 章） | ためらうこと／延ばすこと／受けること・先に延ばす（18.8 の magis timebunt consecutionem quam dilationem「受けることのほうを、延ばすことよりも恐れる」） |
| sponsores（『洗礼について』18.4） | 保証人（6.2〜6.3 の sponsores salutis と同じ語。幼い子供の洗礼で約束をする人々であることは文脈で分かるので補わない） |
| dignatio／praerogativae（『洗礼について』18.2〜18.3） | お計らい（18.2 の dignationem domini「主のお計らい」、18.3 の Dei dignatio「神がお計らいになるとき」）／前もって送られるしるし（4.5 の praerogativa「特権」とは意味が違う） |
| Pascha／Pentecoste（『洗礼について』19 章） | 過越（『祈りについて』18.4 の dies Paschae「過越の日」と同じ。19.1 の ultimum Pascha は「最後の過越」）／五旬節の五十日（期間を言う 19.2。『祈りについて』23.3 と同じ）。日を言う 19.3 の Pentecostes は「五旬節の日」 |
| peculia gratiae／distributiones charismatum（『洗礼について』20.7） | 恵みの財／賜物の分け与え |
| candidatus（『洗礼について』10.7） | 候補者（まだ得ていないものを待ち望む者。Oehler の注 e） |
| figura（『洗礼について』） | ひな型（4.1、5.9、6.1、8.4。「ひな形」と書かない）。姿を言うところ（8.3 の columbae figura）は「姿」 |
| adfectatio・adfectare（『洗礼について』5.5〜5.6） | まねごと・まねる（注 h のとおり神のわざをまねた偽りの似姿。『殉教者たちへ』の「熱中」と意味が違う）。aemulari（5.4 の res dei aemulantis）は「張り合う」、aemulus は「敵対する者」 |
| intervenire・interventus／arbiter／sponsor・sponsio／testatio（『洗礼について』4〜6 章） | 仲立ちする・仲立ち（4.8、5.8。9.5 の受難の場の aqua intervenit は「水が居合わせる」）／立会人（6.2。天使についても、三つの御名の arbitros fidei についても）／保証人・保証（6.2〜6.3 の sponsores salutis、sponsio salutis）／証言。angelus baptismi は『祈りについて』16.4 の「祈りの天使」に揃えて「洗礼の天使」 |
| unctio・ungere・perungi／chrisma（『洗礼について』7 章） | 油注ぎ・油を注ぐ・油を塗られる／クリスマ（名の由来の型で「油注ぎ（クリスマ）」） |
| carnalis・carnaliter／spiritalis・spiritaliter（『洗礼について』5.9、7.2） | 肉の・肉において／霊の・霊において（対で通す）。corporaliter は「体として」「体のつくりで」（4.8、8.3） |
| simplicitas／innocentia（『洗礼について』8.3） | 素直さ（マタイ一〇・一六 の口語訳「素直」とつなぐ。2.1〜2.4 の神のわざの simplicitas「単純さ」とは文脈で分ける）／潔白 |
| primordium・initium／pristinus（『洗礼について』） | はじめ（3.2、4.1、4.3）／かつての・古い（1.1 の pristinae caecitatis「かつての盲目」、4.5 の de pristina originis praerogativa「起源のときからの古い特権」。「はじめ」と重ねない） |
| martyr／martyrium | 殉教者／殉教（『護教論』と同じ）。martyres designati は「殉教者となるべき人々」 |
| carcer／custodiarium | 牢／守りの場所（2.4。注 e のとおり命を守るために預かられている場所） |
| mundus／saeculum | 世界／世（2.1 の segregati estis ab ipso mundo, quanto magis a saeculo「世界そのものから切り離された。まして世からは」。saeculo renuntiare は「世を捨てる」） |
| animus／spiritus／cor | 精神／霊／心（2.11〜2.12、3.2〜3.3。aequo animo は成句で「平然と」（4.2）） |
| anima | 魂。体と並べて死を言うところは「命」（4.9 の si anima potius cesserit plagis, quam corpus「体が屈するより、むしろ命が鞭に負けて尽きるなら」） |
| caro／spiritus（4.1） | 肉／霊。マタイ二六・四一 の言い換え（caro infirma, spiritus promptus）は、口語訳の「心」「肉体」を「霊」「肉」に替えて地の文に溶かし、promptus は口語訳の「熱している」 |
| secessus | 隠れ場（2.9〜2.10） |
| pax（1.7〜1.8） | 平和（教会の中の和解とも、殉教者に請う教会への受け入れとも取れるので、どちらにも寄せない）。『祈りについて』でも「平和」（11.2 の ad pacem dei … sine pace、18.1 の conferenda … pax、18.2 の impedit pax、sine pace）。osculum pacis・osculum sanctum は「平和の口づけ」「聖なる口づけ」、口づけを延ばすことを言う 18.3 の differre pacem は「平和の口づけを延ばす」。ルカ一〇・五 を引く 26.2 の pax huic domui は口語訳の『平安がこの家にあるように』で、掛け合いになる pacem mutuam reddere も「互いに平安を返し合う」 |
| sacramentum（3.1） | 誓い（兵士の入隊の誓い。『護教論』の「秘儀」にしない） |
| militia／miles | 兵役／兵士 |
| incommoda／durus・acerbus | 不便（3.2、3.6、4.2）／つらい |
| tormenta／cruciatus・torqueri | 拷問（刑吏や僭主による拷問と刑罰。4.2、4.6、4.7、4.9。『護教論』と同じ）／責め苦・責めさいなむ（5.1、4.7、6.2） |
| affectatio／affectare | 熱中／熱中して求める（5.1〜6.1。5.3 の quae alii affectaverunt pro vanitate とつなげる） |
| constantia／constanter | 不屈／不屈の心で（『殉教者たちへ』6.1）。『洗礼について』17.5 の constantia succurrentis と 17.7 の ne discere quidem constanter は、Oehler の注 f・注 m のとおり、ためらわない大胆さの意味なので「臆せず」で揃える（「助ける者が臆せず手を出すこと」「臆せずに学ぶこと」） |
| venatores／taureae | 獣闘士（『ペルペトゥアとフェリキタスの殉教録』と同じ）／鞭（5.3） |
| locare ad gladium／se auctorare | 剣の勝負に身売りさせる／身を売る（5.1〜5.2。剣闘士として雇われること） |
| agonothetes／xystarches／epistates | 競技の主催者／練習場の長／監督（3.3〜3.4。注 i）。剣闘士の magistri et praepositi（1.3）は「師範や親方」で、「監督」と重ねない |
| agon／brabium／scamma／palaestra／stadium | 競技／賞／競技の場／練習場／競技場（3.3〜3.6。stadium tribunalis は「裁きの座という競技場」） |
| athletae／gladiatores | 運動選手／剣闘士 |
| disciplina（運動選手の） | 規律（『殉教者たちへ』3.5。『護教論』の教えの意味の「教え」と分ける）。キリスト者の disciplina は『護教論』どおり「教え」（『見世物について』1.1 の praescriptum disciplinae「教えの定め」、1.4、3.4、3.8 の admonet disciplinae「教えを守るよう勧める」）。異教の側の世の規律（10.4 の disciplinae etiam humanae「人間の規律さえ」、10.6 の監察官の disciplina）は「規律」、異教の神々が伝えた流儀（11.3 の Castorum … disciplinae）は「教え」。『祈りについて』のキリスト者の disciplina も「教え」（11.3 の disciplina nostra、16.2 の ad instar disciplinae「教えの手本として」、18.4 の disciplinae foris「外では教えに」）。兵士の見張りのたとえの中の 19.3 の administrabit disciplinam は「規律を守る」。『洗礼について』7.1 の de pristina disciplina（注 b のとおりユダヤの教え）も「古い教え」で、3.1 の praescriptio「定め」と重ねない |
| conditio・condere／conditi（『見世物について』） | 造られたもの・造る／造られた者（2.2、2.6、2.13 の perversa administratio conditionis a conditis「造られた者が、造られたものをゆがめて扱うこと」。『護教論』の「ありさま」「定め」「条件」とは意味が違う） |
| instituere・institutor／convertere・interpolator・aemulus（『見世物について』2 章） | 造る・造り主／ねじ曲げる・ゆがめる者・敵対する者（2.7〜2.8、2.14。aemula vis は「敵対する力」で『護教論』の aemulus に揃える。一人の悪魔を指す同格の並び interpolatoris et aemulatoris angeli は「ゆがめる者、敵対する者である天使」とし、二人に読めないようにする）。corruptela／integritas は「損なわれたもの／損なわれていないもの」、de integritate は「損なわれていない状態から」 |
| abdicatio（voluptatium、spectaculorum）／abstinentia | 断つこと／控えること（『見世物について』1.3、3.1。断食を言う『洗礼について』20.6 は「食を控えること」とし、18.7 の continentia「節制」と分ける） |
| circus／theatrum／agon／munus（『見世物について』3.2） | 戦車競走場／劇場（『護教論』と同じ）／競技／剣闘士の試合（spectaculum の「見世物」と分ける）。amphitheatrum は「闘技場」 |
| munus／officium（9.1、12.1） | 賜物（9.1 の dei munere）・剣闘士の試合／務め（9.1 の daemoniorum officia「ダイモンへの務め」）。12.1 の名の由来は、文型の訳し方の型で「剣闘士の試合（ムヌス）」「務め（オフィキウム）」 |
| parentatio・parentare／litare | 死者を祭ること・死者を祭る（6.3、12.4、13.2。13.2 の parentatum は「死者を祭るのに使われたもの」）／なだめの供え物とする（12.4） |
| idolothyta／necrothyta（13.3） | 偶像への供え物（第一コリント八・四 の口語訳の語）／死者への供え物 |
| auctor／institutor（技と見世物の） | 創始者（4.4、9.5、10.9〜10.10）／設けた者（10.10）。物を作った人（9.4 の auctor currus primi）は「作り手」 |
| fluxus（10.8 の corporis fluxu、per fluxum） | なよなよした動き・なよなよしたさま（異読の flexus「くねり」に寄せない） |
| quaestura／magistratus／flaminium／sacerdotium（12.5） | 財務官の職／政務官の職／フラメンの職／祭司職（7.3 と同じ。5.7 の flamen Quirinalis は神の名を添えて「クィリヌスの祭司」） |
| purpura／fasces／vittae（12.6） | 紫の衣／権標（『オクタウィウス』37:10 と同じ）／髪帯。pultes pridianae は注 l のとおり「前日の祭りの粥」 |
| praesides（人を言うとき） | 主宰者（11.2 の sacerdotales praesides「祭司である主宰者たち」。『祈りについて』8.3 の悪魔を言う praesidem et artificem temptationis「試みの主宰者、試みを仕組む者」）。迫害した属州の長官（30.4 の praesides persecutores dominici nominis）は『護教論』の「長官」。神々を言うときは 4.4・12.8 の「守り神」 |
| ferae（12.3 の ferarum voluptati） | 獣のような見物人（注 d の Rigaltius の解。直後の feris は本物の「獣」） |
| concilium／consessus（『見世物について』3 章） | 集まり（詩篇一・一 の句と揃える。3.4、3.5、7.3 の conventus、8.5 の daemonum concilium も「集まり」）／会合（3.4）。3.7 の ad consessum は「座るために」。8.8 の conciliabula spectaculorum は「見世物の集会所」 |
| angelus（『見世物について』2.9、2.14） | 天使（『護教論』どおり）。2.9 の angeli は Oehler の注 h のとおりダイモンを指すが、語を足さず `// ` メモに書く |
| voluptas／gaudium／fructus（saeculi）／vitae gratia | 快楽（14.2 の voluptatis concupiscentia「快楽への欲」。concupiscentia は「欲」。性の欲の的になることを言う『祈りについて』22.9 の concupiscentiae は、注 h のとおり「情欲をかき立てる」）／喜び（gratia「気に入られること」と分ける。17.2 の summa gratia eius dei「劇場の神に最も気に入られるもの」。eius は 17.1 の theatro を受ける）／楽しみ（注 b のとおり享受の意味）／生きる甲斐（『見世物について』2.4〜2.5）。periculum voluptatis, quam vitae（2.4）は「命を失う危険より、快楽を失う危険」と、何が危うくなるかを言う |
| ferrum／herbae（『見世物について』2.9） | 鉄（材料として言うところ。手段を言う ferro は「鉄の刃」）／草（毒の材料） |
| virtus／vires | 力（3.3 の virtutum animi et corporis「精神と体の力」、3.4、3.6） |
| idololatria | 偶像礼拝 |
| impudicitia | 恥知らずなこと（『護教論』38.3 の「劇場の恥知らず」に揃える。17 章） |
| furor／furiae／animi／bilis／ira／dolor | 熱狂／狂乱／激情／いら立ち／怒り／悲しみ（15.2、15.4、16.1、16.4。『護教論』38.3 の insania circi「戦車競走場の狂乱」とは原語が違う） |
| studium／aemulatio（観客の） | 肩入れ／張り合い（15.3〜15.4。affectatio の「熱中」、『護教論』の aemulatio「敵意」「ねたみ」と分ける）。25.2 の dissensio は「対立」で、「張り合い」と重ねない |
| affectus／casus／passio（15.4〜15.5） | 心の動き／出来事／揺らぎ。vanitas は「むなしさ」（15.5〜15.6、16.2） |
| saeculum／saecularia（15.7） | 世／世の事柄（「この世」にせず、対を残す） |
| caecus／caecitas | 目が見えない・目が見えないこと（16.1 と 16.3 を揃える） |
| erubescere | 顔を赤らめる（17.2、17.4。「恥じる」と分けない。17.4 の Erubescat senatus と erubescunt の掛け合いを残す） |
| Atellanus／mimus／pantomimus | アテラナ劇の役者／笑劇の役者（『護教論』の mimi）／無言劇の役者（17.2） |
| sancti（16.8） | 聖徒（口語訳） |
| hostiae（17.3、19.4） | いけにえ（訳語表の hostia。publicae libidinis hostiae、publicae voluptatis hostiae） |
| reus／iudex（20.4） | 罪ある者／裁き手（2.14 と同じ。19 章の nocens「罪ある者」と揃える。「被告」にしない） |
| pudicitia／modestia／leno | 貞潔／慎み／取り持ち屋（『護教論』の訳語表どおり。25.1、23.2） |
| libido | 情欲（性の欲を言うところ。この本の 9.3、10.6、14.2、17.3、17.7、25.2）。気ままの意味（21.1 の pro arbitrio ac libidine「自分の気ままと欲にまかせて」）は「欲」 |
| quaestio（19.3） | 拷問による取り調べ（『護教論』と同じ） |
| pompa | 行列（『オクタウィウス』と同じ）。洗礼で捨てる「悪魔と、その行列と、その天使たち」（4.1〜4.3）と、戦車競走の行列（7.2〜7.4）を同じ語にして、論のつながりを残す。7.2 の pompatior は「行列らしく華やか」 |
| renuntiare・renuntiatio／eieratio／lavacrum／signaculum | 捨てる・放棄／捨てる誓い（4.5）／洗い（4.3。テトス三・五 の口語訳「再生の洗い」の語）／印（4.1）。洗い・印が洗礼を指すことは補わない。25.6 の in Sanctum（注 d のとおり聖餐）も「聖なるもの」とだけ訳して補わない。eierare は「捨てると誓う」（24.1〜24.2）。24.2 の nonne eieramus et rescindimus signaculum は誓いを裏返して言うので「印そのものを捨て去り、破る」。24.3 の renuntient は「告げる」の意味なので「捨てる」と訳し分ける。『祈りについて』13.2 の lavacrum totius corporis は体を洗うことなので「全身を洗う浴場」とし、洗礼の「洗い」と分ける（13.3 の quas cum toto corpore in Christo semel lavimus は洗礼を指すとみられるが、補わない）。18.1 の signaculum orationis は「祈りに押す印」 |
| ludi／ludus・lusus／ludii／circenses | 遊戯（agon の「競技」と分ける。5.3 の語源の言葉遊びを残すため）／遊び・戯れ／遊ぶ者たち（5.3。Oehler の推定）／戦車競走（の遊戯）。剣闘士の ludus（19.4〜19.5 の in ludum veneunt、damnantur in ludum）は「剣闘士の養成所」「養成所」 |
| origo／titulus・nomen／apparatus・paratura／locus／ars（『見世物について』4.4 で挙げ、5〜9 章で論じる項目） | 起源／名（6.4 の sub quo nomine et titulo は「どんな名で、どんな呼び名のもとに」）／装い・しつらえ（4.3）／場所／技。4.4 と 8.11 の dicentur・dicantur は dicare の形と取り「ささげられている」。quibus praesidibus は「どんな守り神に」。15.2 の principalis titulus idololatriae は論の項目を言うので「偶像礼拝という主な項目」 |
| census（『見世物について』7.5、8.5） | 出どころ（『護教論』21.29 と同じ。注 h）。7.5 では locuples、splendida との掛け合いを「その罪の出どころによって、豊かで、きらびやか」で残す。『洗礼について』17.3 の aeque dei census は注 c のとおり「神の財」 |
| currus／tensa／armamaxa／sedes／exuviae／simulacra／imagines（7.2、7.5） | 車／神々の持ち物を運ぶ車／覆いのある車／玉座／神々の装身具／像／肖像。plaustrum は「荷車」 |
| metae（primae、Murciae）／euripus／ova／delphines／columnae（8 章） | 折り返しの柱（第一の、ムルキアの）／水路／卵の飾り／イルカの像／柱 |
| reges（6.2 の solemnibus regum、30.3 の天に迎えられたと告げられた reges） | 皇帝たち（Oehler の注 c のとおり皇帝の祝い。30.3 は神格化された皇帝たち。`// ` メモに原文の語を書く）。16.7 の principes も『護教論』の princeps どおり「皇帝たち」。軍の文脈の princeps（24.4 の signis et sacramentis principis sui「自分の主君の軍旗と、主君への誓い」）は「主君」 |
| argumentari | 理屈をこねる（4.1）。8.2 の circi appellationem argumentantur は「呼び名も…から出たと理屈をつける」 |
| praescriptio（8.8）／causa simplex（8.8）／excidere a deo（8.10） | 定め（1.1 の praescriptum disciplinae「教えの定め」とつなげる）／ほかに意図のない用件／神から離れ落ちる |
| sacrificium・sacrificare・sacrificator | 供え物・供え物をささげる・供え物をささげる者（『護教論』と同じ。hostia の「いけにえ」と分ける） |
| religio | 宗教（『護教論』と同じ）。崇拝の場を指すところ（8.7 の Aliena est tibi religio, quam tot diaboli spiritus occupaverunt。注 r のイシドルスは locus と写す）は「崇拝の場」 |
| lex（4.1 の in legis suae verba） | 掟（信仰の定まった文句。モーセの律法と紛れる「律法」にしない） |
| ut volunt（5.5、8.2） | 「〜とされる」と残し、落とさない。原文にない伝聞（「というのですから」）は足さない |
| daemonium（『見世物について』26〜30 章）／exorcismus／immundus spiritus | ダイモン（26.1 の daemoniis、cum daemonio、29.3 の daemonia expellis「ダイモンを追い出す」、30.6 の daemonium habens「ダイモンに取りつかれた者」。福音書の言い方に寄せて「悪霊」にしない）／霊を追い出すとき（26.1 の in exorcismo）／汚れた霊（口語訳） |
| arena／pulvis／scenae（28.4） | 闘技場の砂／砂ぼこり／舞台 |
| strophae（29.4） | 仕掛け（『護教論』15 章の「からかいの仕掛け」。注 c）。fabulae は「作り話」、simplicitates は「素朴さ」 |
| cavea（30.8 の utraque cavea） | 両方の観客席（闘技場と劇場）（注 o。12.8 の型で補う。『護教論』の cavea「闘技場の観客席」） |
| societates ecclesiarum／spatia／palmae（29.3 の競走場のたとえ） | 諸教会の交わり／周回／しゅろの枝。spatium hoc（29.1）は「この一生」 |
| si forte | 先のことの仮定は「もしそういうことがあれば」（1.8）。呼び方をやわらげるところ（2.4 の in custodiarium, si forte）は「いわば」。そうした場に居合わせることを言うところ（『祈りについて』18.3 の potes domi, si forte, inter quos …）は「たまたま」 |
| paenula・paenulati／sarabara／tiara（『祈りについて』15 章） | 上着・上着を着た者（15.3 のパウロの上着と同じ語にして皮肉を残す。第二テモテ四・一三 の口語訳の語）／外套／帽子（ダニエル三・二一 の口語訳の語）。expositis paenulis は「上着を脱いで」（注 c のとおり exponere は「脱ぐ」） |
| gentiles／nationes（『祈りについて』） | 異教徒／異邦人（5.5、6.5、15.2、16.3〜16.4。15.2 の gentilibus adaequent と sic … adeunt ad idola nationes を訳し分ける） |
| operatio（『祈りについて』18 章） | わざ（注 a のとおり断食のわざ。初出の 18.1 は「断食のわざ」と補う。18.4 の operationem tuam は「自分のわざ」。『護教論』39.8 の「働き」とは意味が違う） |
| dies Paschae（『祈りについて』18.4） | 過越の日（このリポジトリの『トリュフォンとの対話』と同じ語。Oehler の注 d のとおり主の受難の日の断食を指すが、補わず `// ` メモに書く） |
| statio・stationes militum（『祈りについて』19 章） | 見張り（スタティオ）・兵士の見張り（19.3 で兵士の見張りから名を取ったと言うので、文型の訳し方の名の由来の型で、初出の 19.1 だけ音を添える。19.2 の steteris は「立つ」で掛け合いを残す）。solvere・resolvere は「解く」 |
| eucharistia／sacrificiorum orationes／ara dei（『祈りについて』19 章） | 聖餐（『ディダケー』『第一弁明』と同じ。使徒二七・三五 の εὐχαρίστησεν を移した 24.1 の eucharistiam fecit は、口語訳の「神に感謝した」）／供え物の祈り（注 b）／神の祭壇（11.1 の altare dei と同じ「祭壇」） |
| scriptura | 聖書（聖書を指すとき）。ほかの書き物を受けるところ（『祈りについて』16.1 の cuius scriptura … Pastor を受ける 16.3 の contra scripturam）は「あの書」 |
| audere（否定の nec … audent など） | あえて〜する・あえて〜しない（『祈りについて』14.1。「できない」にしない） |
| obsequium（『祈りについて』9.1、19.1） | 従順（9.1 の oblatio obsequii「従順のささげ物」、19.1 の devotum deo obsequium「神にささげた従順」） |
| mulier／femina／virgo（『祈りについて』20〜22 章） | 婦人／女性／おとめ。21〜22 章の論は、femina が性そのものの名、mulier が性の中の一つの段階（嫁いだ者）の名かどうかに立つので、口語訳の第一コリント一一章の「女」にせず訳し分ける（口語訳の第一コリント七・三四 も「婦人」「おとめ」）。二語を対にして論じ始める 21.1 でだけ、文型の訳し方の名の由来の型で「婦人（ムリエル）」「女性（フェミナ）」と音を添える。gradus sexus は「性の中の一つの段階」。性を言う形容の feminae・feminino（22.8 の virgines feminae、22.7 の in feminino sexu）は「女の」、男の側の virgines masculi・investis は「男のおとめたち」「まだ大人にならない少年」。『見世物について』『殉教者たちへ』の「女たち」はそのまま |
| velare・velamentum・velari（『祈りについて』21〜22 章） | おおいをかける・おおい（口語訳の第一コリント一一章の語）。capitis immunitas は「頭のおおいを免じる」。22.25 のリベカの velata est も「おおいをかけた」。tegere・obumbrare・tegumentum も「おおう」「おおい」とひらく（22.14 の texerunt「おおった」、22.16 の obumbret、22.17 の tegis）。abscondere は「隠す」（22.16）。22.10 の accipere in uxores は、引用の『妻にめとった』を受ける論でも「妻にめとる」 |
| habitus／cultus・ornatus／gloria・gloriari（『祈りについて』20〜22 章） | 身なり（15.3 と同じ。体の構えや所作を言う 23.2 の anxietatis habitus は「憂いを表す姿勢」）／装い・飾り／誇り・誇る（20.2 の vestium gloria「衣の誇り」、22.18 の gloria tua、22.19 の affectione gloriae「誇りたい思い」） |
| mens（『祈りについて』22.24） | 思い（cor の「心」と分ける） |
| nubere・nupta・innupta／vacare（『祈りについて』22 章） | 嫁ぐ・嫁いだ者・嫁いでいない（男も含む総称の男性形（『洗礼について』18.7 の innupti、nubant）は「結婚していない人々」「結婚する」。22.15 の年が「時という自分の夫に嫁いだ」、22.20 の nupsisti Christo、22.24 の praenupserunt「前もって嫁いでいる」をつなげる）／夫のない（22.10〜22.11） |
| institutio／consuetudo（『祈りについて』22.21〜22.22） | 定め／習わし（18 章の consuetudo と同じ）。antecessor は「先人」 |
| conscientia（『祈りについて』22 章） | 文脈で訳す（22.17 の solius dei conscientiae「神おひとりの知るところ」、22.22 の conscientiae apud deum securitate「神の前の良心の安らかさ」、22.24 の spiritus per conscientiam「霊は自覚によって」） |
| lex（『祈りについて』22.13 の nostra lex ampliata atque suppleta） | 掟（イスラエルの習わしと対にするキリスト者の掟。動詞は 11.4 の「律法を押し広げ」、1.2 の「補われた」と揃えて「押し広げられ、補われた」） |
| sabbatum（『祈りについて』23.1） | 安息日（『見世物について』30.6 と同じ。主の復活の日と対にする週の第七日） |
| spatium Pentecostes／dispungere（『祈りについて』23.3） | 五旬節の五十日のあいだ／ほかの日と分けて過ごす（『見世物について』17.6 の「分ける」） |
| tertia、sexta、nona（hora。『祈りについて』25 章） | 第三時、第六時、第九時。初出の 25.1 だけ「すなわち今の午前九時、正午、午後三時」と添える（使徒言行録の出典を付ける 25.2〜25.3 も「第三時」の形） |
| refrigeria（『祈りについて』25.4、26.1） | 憩い（霊の憩いと糧、地の憩いと天の憩い） |
| debitores trium（『祈りについて』25.3） | 三つの方に負債のある者（7 章の debitor と同じ） |
| agape（『祈りについて』28.4） | 愛（六つの徳の並びの一つ。愛餐と取らない） |
| castitas／innocentia（『祈りについて』28.4） | 純潔／潔白（pudicitia の「貞潔」と分ける） |
| efficacia／virtus（『祈りについて』29 章） | 効き目（29.1）／力（29.2、29.4） |
| daemoniaci（『祈りについて』29.5） | ダイモンに取りつかれた人々（『見世物について』30.6 と同じ） |
| cetus（『祈りについて』17.4） | 大魚（口語訳ヨナ一・一七 の「大いなる魚」に寄せる。続く tantae bestiae は「これほど大きな獣」） |

## 文型の訳し方

『護教論』の「文型の訳し方」に従う。この本で新たに決めた形は、ページを訳しレビューを適用するたびにここに書く。

- 名の由来を語の音で説くところ（『見世物について』5.3 の ludi と Lydi・ludus・lusus、5.5 の Consus と consilium、8.2 の circus と Circe、8.4 の Sessia と sementatio など）は、『護教論』3.8 の「キリスト者（クリスティアヌス）」の型で、日本語の語のあとに（）で原語の音を片仮名で添える。音が名そのものに出ているところ（キルケ、セッシア）は、名のほうには添えない。
- ローマ暦の日付は『護教論』の決まりどおり今の暦に直す（5.7 の nonis Iuliis「七月七日」、XII. Kalend. Septembres「八月二十一日」）。
- 祭りの遊戯の名が神の名から作った形容詞のところ（6.2 の Apollinares、Cereales、Neptunales、Latiares、Florales）は、どの神にささげたかが論の要なので「アポロの遊戯」のように神の名で訳す。神と分かる形にする（Latiares は『オクタウィウス』30:4 の「ラティアリスのユピテル」）。神の名がすぐに分からない Megalenses は「メガレンセスの遊戯」。技の組合の名（11.3 の artium Musicarum et Minervalium et Apollinarium, etiam Martialium）も同じく「ムーサたちの技、ミネルウァの技、アポロの技…マルスの技」。
- 同じ名の神々をまとめてあざける複数形（10.8 の Apollines、Minervas、Mercurios、11.3 の Herculum、Mercuriorum）は「アポロたち」のように「たち」で残す。もとから二人の Castores は名前の表どおり「カストルの兄弟」。
- 散文の節の中で詩を引くところ（9.3 のウェルギリウス 2 行）は、行を分けず『』に入れて文に続ける（節の行が切れるので `<br/>` を使わない。『オクタウィウス』19:2 のウェルギリウスの引用と同じ扱い。『護教論』と『オクタウィウス』の both.md には `<br/>` の先例がない）。
- 書き手が自分を含めて言う一人称複数の勧め（14.1 の tractemus、19.1 の eamus、delectemur）は「〜しましょう」。「〜するがよいでしょう」にしない。三人称の接続法の命令（17.4 の Erubescat senatus、『洗礼について』18.5 の Veniant、fiant Christiani、18.6 の Norint）は「〜がよい」。使役の命令（「来させなさい」）にしたり、原文にない「待ちなさい」を補ったりしない。
- 書き手が皮肉で、ありえないことを神の働きとして言うところ（23.7 の a deo, cum plasmaretur accepit、illi oculos deus commendavit）は「とでもいうのでしょう」「というのでしょう」と受け、書き手の主張と読まれないようにする。
- 語として取り上げるギリシア語（『祈りについて』22.5 の γυναῖκας、θηλείας、γυναῖκα）は、格の形にかかわらず辞書の形の音で「ギュネー」「テーレイア」と「」に入れ、どの訳語に当たるかを訳文で示す。
- ギリシア語の発話や歓呼（25.6 の ἀπ᾽ αἰῶνος）は、音を片仮名にして「」に入れ、「、すなわち「永遠の昔から」」と意味を添える（『殉教者たちへ』4.8 の διαμαστίγωσις と同じ形）。
- 主の祈りの句を説き明かして、句の語を何かのたとえと読むところ（『祈りについて』4.2 の天と地を霊と肉と読むところ）は、句の語の順（天、地）を保ち、何が何のたとえかを訳文の向きで示す。
- 神とキリストの動作の尊敬語「〜られる」が受け身と紛れるところは、「なさる」「お〜になる」にする（『祈りについて』4.3 の quos adoptavit「ご自分の子となさった者たち」、8.2 の iusserat「お命じになった」、9.2 の quae filius docuit「子がお教えになったこと」、10.1 の post traditam orandi disciplinam「祈りの教えをお伝えになった後に」、29.9 の Etiam ipse dominus oravit「主ご自身もお祈りになった」、『洗礼について』3.5 の expediit「お果たしになった」、3.8 の disposuit「配置なさった」）。同じ節に受け身の「〜られる」があるところ（3.5 の deo constitit「神によって成し遂げられました」）はとくに避ける。主語の人が書かれない「神が呼び求められると」（4.5 の invocato deo）も、「神を呼び求めると」にする。主語が書かれない受け身の形（「命じられた」）は、主語の「主が」を補う。
- 相手の主張の中で id est などで定義を言い添えるところ（『祈りについて』22.9 の solas mulieres, id est nuptas iam …）は、問いや言い分の中に残し、独立した平叙文に切り出さない。書き手自身の主張と読まれないようにするため。
- 前の文の理由を示す Nam・enim（『祈りについて』22.4 の Qui enim、22.14 の Nam et Eva）は、論のつながりが切れるところでは「というのも、」で受け、落とさない。
- 何が先かを言う述語の primus（『洗礼について』3.6 の primis aquis praeceptum est、Primus liquor quod viveret edidit）は、「最初の水」とせず、「まず水に」「最初に生み出したのは、水なのです」と訳す。「原初の水」の意味に読まれないようにするため。
- 理由の奪格（『洗礼について』10.8 の sola se paenitentia tinguere。Oehler の注 f）は「〜のために」と訳し、手段の「〜によって」にしない。
- 比べる形の plus … aut minus（『洗礼について』4.5）は、比べる相手を「ほかの人より」と補って比較を見せる。
- 受け身の動詞に付く ab ＋人の奪格（『洗礼について』17.2 の abscondi ab ullo）は、前後に並ぶ句（17.3 の ab omnibus exerceri potest）とつながるなら行為者で取り、「だれも隠してはならない」とする。「だれからも隠されてはならない」（だれに対しても）にしない。
- 予告の副詞と理由の組（『洗礼について』20.3 の Et ideo … tentati sunt, quoniam obdormierunt）は、「試みられたのは、眠り込んだからです」と一つの因果にまとめ、「ですから」と「ので」を重ねない。
- 神やキリストが主語の受け身（『洗礼について』18.2 の dominus ostenditur）は、尊敬語の「主が示され」と紛れないよう、「主のことが示され」とする。
- 制限の勧めの接続法 Sufficiat（『洗礼について』17.4）は「〜だけで、十分としなさい」とし、平叙の「十分なのです」にしない。
- 指示の代名詞の is・ille がすぐ前の文の主語と別の人を指すところ（『洗礼について』17.7 の is … qui はパウロで、直前の文の主語はアジアの長老）は、名を出す（「パウロは」）。
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
| Elias／Saturnus／Isis／Liber | エリヤ（口語訳。底本の綴りは Elian）／サトゥルヌス／イシス／リベル（23.2〜23.3。『護教論』の表） |
| David／Israëlitae／Aegyptus／Aethiopia | ダビデ／イスラエルの人々／エジプト／エチオピヤ（『見世物について』3.3、3.8〜3.9。口語訳の表記） |
| Ioseph／Israël／Esaias／Paulus／Carpus／Ionas／publicanus・pharisaeus | ヨセフ／イスラエル／イザヤ／パウロ／カルポ／ヨナ／取税人・パリサイ人（『祈りについて』11〜17 章。口語訳の表記）。14.1 の aliquis Esaias は注 a のとおり強めの言い方で「イザヤのような者」 |
| Gaiana haeresis／Quintilla（『洗礼について』1 章） | ガイアナ派の異端（底本の名。国の名と紛れないよう「派」を付ける。Pamelius・Rigaltius の Caiana に寄せて「カイン派」にしない）／クィンティラ（1.3 の訳注だけに出る、底本より前の版の読み） |
| Isis／Mithras（『洗礼について』5.1） | イシス／ミトラス（Isidis alicuius aut Mithrae はさげすみを込めて「イシスだの、ミトラスだのの」） |
| Bethsaida（piscina）／Aaron／Moyses／Ioseph／Ephrem・Manasses／Iacob（『洗礼について』5〜8 章） | ベテスダの池（口語訳ヨハネ五・二。原文の名はメモ）／アロン／モーセ／ヨセフ／エフライム・マナセ／ヤコブ（口語訳の表記） |
| Ioannes／Iordanes／Petrus／Tiberis／Philippus・spado | ヨハネ／ヨルダン川／ペテロ／ティベリス川（『護教論』の表）／ピリポ・宦官（口語訳の使徒八章）（『洗礼について』4.4〜4.5） |
| Abraham／Damascus／Nazarenus／Gaius／Crispus／Stephanas／Apollo（人）／Thecla（『洗礼について』13〜17 章） | アブラハム／ダマスコ／ナザレ人／ガイオ／クリスポ／ステパナ（「ステパナの家の者たち」）／アポロ（口語訳の表記。神のアポロと同じ表記だが文脈で紛れない）／テクラ（口語訳にない） |
| Petrus／Eva／Adam／Rebecca | ペテロ／エバ／アダム／リベカ（『祈りについて』20〜22 章。口語訳の表記） |
| Hermas・Pastor／Pythius（oraculum） | ヘルマス・『牧者』（『祈りについて』16.1。このリポジトリの『ヘルマスの牧者』の表記。Hermas ille は注 c のとおりさげすみを込めた言い方で「あのヘルマス」）／ピュトの神託（17.3。『護教論』22.11 の「ピュトの神」に揃える） |
