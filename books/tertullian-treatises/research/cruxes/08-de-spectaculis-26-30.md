# 08-de-spectaculis-26-30 の論点（26〜30）

略号と資料の所在は [README.md](README.md)。『見世物について』の写本は A（Agobardinus）だけで、B〜E は刊本（B＝Gangneius 1545、C＝Gelenius、D＝Pamelius 1579、E＝Rigaltius 1634）。「reliqui」「BCD」は写本の読みではない。CSEL の略号は Oehler と文字の割り当てが違う（CSEL の C は Clemens の写本）ので、CSEL の読みは名前で書く。CSEL の OCR は略号を崩して読む（Big＝Rig、Gei＝Gel、Iun・lun＝Junius）ので、名前に直して挙げる。CSEL の OCR の `L…j` や `^` は紙面の傷や読み取りの崩れの印で、読みではない。

**写本 A の大きな欠落**：27.4 の vocibus から 28.2 の ut cum lugere coeperint までを、写本 A はまるごと欠く（27 章の校注 10、p. 59：Omnia igitur inde a vocabulo vocibus usque ad verba ut cum lugere coeperint, quae leguntur in medio capite XXVIII. in Agobardino libro omissa sunt。CSEL の校注 l. 1982 も「uocibus … coeperint om. A」）。この範囲（27.4 の後半〜28.2 の前半）の本文は、刊本（B〜E）だけが伝える。以下の論点で、この範囲の読みに A を挙げないのはそのため。

Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/page/n87_w1600.jpg`（p. 58）〜`n92_w1600.jpg`（p. 63）。N＝印刷ページ＋29。各ページを `node tools/image.js crop` で上（`pct:0,0,100,34`、本文）、中（`pct:0,30,100,30`、本文の終わりと校注）、下（`pct:0,58,100,42`、注解）に切って読み（n92 は `pct:0,0,100,50` と `pct:0,45,100,55`。p. 63 は本文と注で終わり、下半分は白紙）、p. 59 の欄外の聖書の箇所は n88 の `pct:85,10,15,5` を 3 倍に拡大して確かめた（切り出しは `/tmp/claude/tt08/crux/` に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 8271–8859（抜粋 `/tmp/claude/tt08/ctx/print-08-de-spectaculis-26-30.txt`。本文・校注・注解が混ざり、行の順も乱れるので、行番号はおよその位置）。l. 8827 に EXPLICIT。CSEL 20 は `cache/archive.org/quintiseptimiflo20tert/quintiseptimiflo20tert_djvu.txt` の l. 1900–2137（26 章 本文 l. 1900–1907、1944–1949・校注 l. 1921–1925、1974–1976、27 章 本文 l. 1951–1970・校注 l. 1976–1986、28 章 本文 l. 1995–2010・校注 l. 2027–2033、29 章 本文 l. 2012–2023、2052–2063・校注 l. 2033–2036、2078–2084、30 章 本文 l. 2065–2076、2101–2125・校注 l. 2085–2092、2129–2137。l. 2136–2137 に EXPLICIT）。CSEL の欄外は、26.3 に「Matth. 6, 24.」「2 Cor. 6, 14.」（l. 1972）、28.2 に「Ioann. 16, 20.」、28.4 に「cf. Philipp. 1, 23; cf. Luc. 12, 34.」（l. 2025）、30.8 に「1 Cor. 2, 9.」（l. 2127）。Migne『ラテン教父全集』1 巻の本文と注は `cache/archive.org/bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1844_1/…_djvu.txt` の l. 60014–60488（26 章 l. 60014、27 章 l. 60037、28 章 l. 60177、29 章 l. 60200、30 章 l. 60236。異読の一覧は l. 60068–60075、60251–60263、60388–60397、注は l. 60078–60163、60264–60335、60400–60488）。ANF の英訳は `cache/ccel.org/anf03.txt` の l. 7440–7609（26 章 l. 7440、27 章 l. 7470、28 章 l. 7502、29 章 l. 7530、30 章 l. 7564）。英訳は章の切れ目を確かめただけで、文言は読んでいない。

校注の番号と注解の記号は章ごとに振り直される。26 章は校注 1〜9（p. 58）・10〜11（p. 59）、注 a〜d（p. 58。d は p. 59 に続く）・e〜g（p. 59）。27 章は校注 1〜15（p. 59）、注 a〜c（p. 59。c は p. 60 に続く）。28 章は校注 1〜12（p. 60）、注 a（p. 60）。29 章は校注 1〜7（p. 60）・8〜21（p. 61）、注 a・b（p. 60）・c（p. 61）。30 章は校注 1〜5（p. 61）・6〜24（p. 62）・25〜27（p. 63）、注 a〜d（p. 61。d は p. 62 に続く）・e〜k（p. 62。k は p. 63 に続く）・l〜o（p. 63）。Oehler の欄外の聖書の箇所は、p. 59 の「Matth. VI, 24.」と「II. Cor. VI, 24.」、p. 60 の「Ioan. XVI, 20.」と「Philipp. I, 23.」。30.8 の第一コリント二・九 には欄外の箇所がない。

章の切れ目は、Oehler、CSEL、Migne、ANF で同じ。

---

### 26.1 Cur ergo non eiusmodi etiam daemoniis penetrabiles fiant? Nam et exemplum accidit domino teste eius mulieris …（eiusmodi と、domino teste）
- 底本（Oehler）：Cur ergo non eiusmodi etiam daemoniis penetrabiles fiant? Nam et exemplum accidit domino teste eius mulieris, quae theatrum adiit et inde cum daemonio rediit.
- ほかの読み（26 章の校注 1〜3、p. 58）：E は huiusmodi。A は theatrum agat et（adiit et の代わり）。A は redit。CSEL は eiusmodi、adiit（B。A は agat）、rediit を採る（l. 1900–1903、1922）。Migne も ejusmodi … adiit（l. 60017–60024）。
- 採る校訂者：注 a（p. 58）は、テルトゥリアヌスは eiusmodi をしばしば名詞のように使い、前置詞と組むことさえある、と言い、例は『洗礼について』12 章への注で挙げる、と言う。Oehler は domino teste に注を付けない。Migne の注 (1)（Le Prieur）は、この例はよく知られ、皆の口にのぼっていたと言い、その女は夫に相談せずに、あるいは夫に逆らって見世物に行ったので悪霊に取りつかれたのではないか、と推し量る（l. 60158–60163）。
- 読者への影響：小 — 「では、そういう人々が、ダイモンにも入り込まれるようになって、なぜいけないだろう。実際、主が証人であるが、劇場に行き、そこからダイモンを連れて帰ってきたあの女の例が起こった」。eiusmodi は注 a のとおり「そういう人々」（25 章の見世物に通う者）を言う名詞の働き。domino teste は「主が証人として（見ておられる）」で、本当に起きたことだと請け合う言い方（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。eiusmodi は「そういう人々」の類いで、主語として補う。domino teste は「主が証人です」「主がご存じのとおり」の類い（神の動作なので尊敬語）。daemonia、daemonium は訳語表どおり「ダイモン」にするか、福音書の場面に寄せて「悪霊」にするかは「メインで決めること」（30.6 の daemonium habens、29.3 の daemonia expellis と揃える）。
- 確かめた資料：`page/n87_w1600.jpg` の上（本文、校注 1〜3）、中（校注）、下（注 a）。OCR l. 8271–8275、8302–8304、8392、8412–8416。CSEL l. 1900–1903、1921–1922。Migne l. 60017–60024、60158–60163。

### 26.1 Itaque in exorcismo cum oneraretur immundus spiritus … constanter, Et iustissime quidem, inquit, feci: in meo eam inveni.（oneraretur と、constanter の掛かり方）
- 底本（Oehler）：Itaque in exorcismo cum oneraretur immundus spiritus, quod ausus esset fidelem aggredi, constanter, Et iustissime quidem, inquit, feci: in meo eam inveni.
- ほかの読み（26 章の校注 4〜6、p. 58）：A は exorchismo。Aβ は aggredi の綴り（画像では aggredi Aβ と刷られ、違いが読めない）。Aβ は inquid。CSEL は constanter: et iustissime quidem, inquit, feci と読む（l. 1904–1906、1922–1924）。Migne は constanter et justissime quidem (inquit) feci と、constanter を引用の中に入れる（l. 60025–60027）。
- 採る校訂者：注 b（p. 58）は oneraretur を「責めを負わされる、訴えられる」（obligaretur, accusaretur）の意味の法廷の言葉とし、『護教論』1 章、『諸国民へ』1 巻 2 章と 10 章の例を引く。注 c（p. 58）は、Fr. Junius と Rigaltius とともに constanter を inquit に掛ける、と言う。
- 読者への影響：中 — 「悪魔払いのとき、汚れた霊が、信者を襲ったことを責め立てられると、臆せずに言った。『まったく正しいことをしたのだ。あの女は、おれの持ち場で見つけたのだから』」。注 c のとおり constanter は「臆せずに言った」で、霊の言葉の中の「堂々と（正しいことをした）」ではない。Migne の区切りでは「堂々と、まったく正しく、おれはやった」となる。in meo は「わたしの（領分の）中で」で、劇場が悪霊の持ち場だという論の要。
- 訳での扱い：訳注は付けない。constanter は注 c のとおり言った様子に掛ける。oneraretur は注 b のとおり「責め立てられる、とがめられる」の類い。immundus spiritus は口語訳の「汚れた霊」（4 章の論点一覧の扱い）。exorcismus は「悪魔払い」の類い。霊の言葉を「」に入れるか、一人称を『殉教者たちへ』1:6 の悪魔の言葉（「おれ」）に揃えるかは「メインで決めること」（本の `AGENTS.md` のその決まりは『殉教者たちへ』の節にある）。in meo は「おれの持ち場で」「おれの領分で」の類いで、何の中かを補う。
- 確かめた資料：`page/n87_w1600.jpg` の上（本文、校注 4〜6）、中（校注）、下（注 b・c）。OCR l. 8275–8290、8303、8370、8392–8393、8418–8431。CSEL l. 1903–1906、1922–1924。Migne l. 60024–60027。

### 26.2 Constat et alii linteum in somnis ostensum … cum exprobratione nominato tragoedo（linteum は経帷子、nominato）
- 底本（Oehler）：Constat et alii linteum in somnis ostensum eius diei nocte, qua tragoedum audierat, cum exprobratione nominato tragoedo, nec ultra quintum diem eam mulierem in saeculo fuisse.
- ほかの読み（26 章の校注 7・8、p. 58）：A は Constat et を欠く。nominatim tragoedo は A、nominatim tragoedi は E。Oehler の nominato tragoedo は、校注に出どころを挙げない（A と E のほかの刊本の読みとみられるが、確かめていない）。CSEL は nominato tragoedo（B。A は nominatim）と読み、Rigaltius の tragoedi と、Klussmann の推定 nuncupato nominatim tragoedo を挙げる（l. 1906–1907、1944、1924、1974–1975）。Migne も nominato tragoedo（l. 60027–60030）。
- 採る校訂者：注 d（p. 58〜59）は、linteum を「前兆として」（ominis causa）とし、Oehler は linteum を sindon（亡きがらを包む亜麻布）と解く、と言う。キリストの亡きがらを包んだ布を、ヒエロニュムスの訳はマタイ二七・五九、マルコ一五・四六、ルカ二三・五三 で sindo と呼び、ヨハネ一九・四〇 では lintea と呼ぶ、と言い、ノラのパウリヌス『聖マルティヌス伝』1 巻 314 行の、死者について言う motantur lintea membris を引く。
- 読者への影響：中 — 「また、ある別の女には、悲劇役者の歌を聞いたその日の夜、夢の中で亜麻布（経帷子）が示され、その悲劇役者の名を挙げてとがめられ、その女は五日とたたずに世を去ったことが知られている」。注 d を知らないと、夢に布が見えたことが死の前兆だと分からない。cum exprobratione nominato tragoedo は「その悲劇役者の名を挙げてとがめられて」。in saeculo fuisse は「この世にいた」で、世を去ったこと。
- 訳での扱い：訳注は付けない。linteum は注 d のとおり、死者を包む布と分かる語（「経帷子」「亡きがらを包む亜麻布」の類い）にする。alii は「別の女に」で、前の例とは別人。saeculum は訳語表の「世」（in saeculo fuisse は「世にいた」の類い）。tragoedus は 25.3 の「悲劇役者」。
- 確かめた資料：`page/n87_w1600.jpg` の上（本文、校注 7・8）、中（校注）、下（注 d）、`page/n88_w1600.jpg` の下（注 d の続き）。OCR l. 8290–8296、8363、8371、8383、8386、8393、8433–8439、8490、8500。CSEL l. 1906–1907、1944–1945、1924、1974–1975。Migne l. 60027–60031。

### 26.3 Quot utique et alia documenta cesserunt … a domino exciderunt!（Ursinus の Quot、cesserunt と communicando）
- 底本（Oehler）：Quot utique et alia documenta cesserunt de his, qui cum diabolo apud spectacula communicando a domino exciderunt!
- ほかの読み（26 章の校注 9〜11、p. 58〜59）：Quot は E と Fulv. Ursinus、Quod は Aφ、Quo はほかの本。Fr. Junius は accesserunt。A は communicanda exciderunt。CSEL は saeculo fuisse, quo utique et alia documenta cesserunt … exciderunt. と、前の文に続く関係文として読み、校注で A は quod（d が消されている）、Ursinus は quot と挙げる（l. 1945–1947、1975–1976。quo をどの本の読みとするかは CSEL の校注に書かれていない。Oehler の校注 9 では「Quo reliqui」）。Migne は Quot（l. 60031–60033）。
- 採る校訂者：注 e（p. 59）は cesserunt を「（伝わって）出てくる」（derivantur）の意味とし、だから Ursinus と Junius の推定は要らない、と言う。注 f（p. 59）は communicando を「交わること」（conversando）とし、3 章の quod in concilio et in consessu Iudaeorum … non communicavit と、12 章への注を見よとする。
- 読者への影響：小 — 底本では「見世物で悪魔と交わって主から離れ落ちた人々については、きっとほかにも、どれほど多くの証拠が出てきたことか」という感嘆。CSEL の quo では「…世を去った。この例によって、ほかの証拠も出てきた」の類いで、感嘆にならない。要点は同じ。
- 訳での扱い：訳注は付けない。communicare は注 f のとおり、3.4 の communicavit（「加わる、交わる」）と語をつなげる。excidere a deo は訳語表の「神から離れ落ちる」（8.10）で、ここは a domino なので「主から離れ落ちる」。注 e は「Ursinus と Junius の推定」と言うが、Ursinus の推定（Quot は Oehler が採っている）がどれを指すかは確かめていない（「未確認」）。
- 確かめた資料：`page/n87_w1600.jpg` の上（本文の Quot）、中（校注 9）、`page/n88_w1600.jpg` の上（本文）、中（校注 10・11）、下（注 e・f）。OCR l. 8386、8394、8444–8446、8473、8502–8509。CSEL l. 1945–1947、1975–1976。Migne l. 60031–60033。

### 26.3 Nemo enim potest duobus dominis servire. Quid luci cum tenebris? quid vitae et morti?（マタイ六・二四、第二コリント六・一四 と、欄外の誤植）
- 底本（Oehler）：Nemo enim potest duobus dominis servire. Quid luci cum tenebris? quid vitae et morti? 欄外に「Matth. VI, 24.」「II. Cor. VI, 24.」
- ほかの読み：Oehler の校注に、この 2 文の異読はない。CSEL も同じ本文で、欄外に「Matth. 6, 24.」「2 Cor. 6, 14.」（l. 1947–1949、1972）。Migne も同じ（l. 60033–60036。OCR は duobus の後を落とす）。
- 欄外の箇所：Oehler の欄外は「II. Cor. VI, 24.」と刷られている（n88 の `pct:85,10,15,5` を 3 倍に拡大して確かめた）が、第二コリント 6 章は 18 節までで、句は 6 章 14 節（Byz の Τίς δὲ κοινωνία φωτὶ πρὸς σκότος;、口語訳『光とやみとなんの交わりがあるか』）。CSEL の欄外も 6, 14。Oehler の欄外の刷りの誤りとみられる。
- 採る校訂者：注 g（p. 59、Fr. Junius）は Quid luci cum tenebris を「ギリシア語風の言い方」とし、ヨハネ二・四 の Τί ἐμοὶ καὶ σοί, γύναι を引く（「〜と〜に何の関わりがあるか」の形）。
- 聖書の形：Nemo … potest duobus dominis servire は、マタイ六・二四 の初めの句（Byz の Οὐδεὶς δύναται δυσὶν κυρίοις δουλεύειν、口語訳『だれも、ふたりの主人に兼ね仕えることはできない』）をそのまま引く。直前の a domino exciderunt（主から離れ落ちた）の dominus と、引用の dominis（主人たち）が同じ語で、主と悪魔の「ふたりの主人」に掛かっている（この点はこの一覧の観察）。quid vitae et morti? は第二コリントにない、書き手が足した対（この点はこの一覧の観察）。
- 読者への影響：小 — 「だれも、ふたりの主人に兼ね仕えることはできないのだから。光とやみとに何の関わりがあるか。いのちと死とに何の関わりがあるか」。
- 訳での扱い：訳注は付けない。マタイ六・二四 は口語訳の文言のまま『』に入れ、出典（マタイ六・二四）を付ける。第二コリントは口語訳の『光とやみとなんの交わりがあるか』に揃えるか、原文に交わり（κοινωνία）の語がないので言い換えるかは訳者が決める。出典は、Oehler の欄外の刷りどおりの「六・二四」ではなく、正しい箇所の（第二コリント六・一四）を付け、`// ` メモに欄外の刷りの誤りを書く（ルートの `AGENTS.md` の「聖書」の決まり）。quid vitae et morti? は聖句ではないので、『』の外に置く。dominus と domini の掛け合い（主と主人）を残せるかは訳者が決める。
- 確かめた資料：`page/n88_w1600.jpg` の上（本文、欄外）、下（注 g）。n88 の `pct:85,10,15,5`（3 倍）。OCR l. 8446–8447、8493–8494、8511–8513。CSEL l. 1947–1949、1972。Migne l. 60033–60036。Byz MAT.csv l. 163、2CO.csv l. 113。`node tools/bible.js Matt.6.24 2Cor.6.14`。

### 27.1 Odisse debemus istos conventus et coetus ethnicorum, vel quod illic nomen dei blasphematur … quotidiani in nos leones expostulantur（小さな異読）
- 底本（Oehler）：Odisse debemus istos conventus et coetus ethnicorum, vel quod illic nomen dei blasphematur, illic quotidiani in nos leones expostulantur, inde persecutiones decernuntur, inde temptationes emittuntur.
- ほかの読み（27 章の校注 1〜4、p. 59）：vel quod は BCDE、quoniam は A。A は dei を欠く。cotidiani in nos は BCD、in nos quotidiani は AE。A は decernuntur, inde temptationes を欠く（校注 4 の刷りは decernuntur in nos temptationes om. A。CSEL の校注 l. 1977 は decernuntur inde temptationes om. A。A の形は inde persecutiones emittuntur になる）。CSEL は uel quod（B）、in nos quotidiani（A と同じ語順）を採り、A が coitus（coetus の代わり）と書くことも挙げる（l. 1951–1954、1976–1977）。Migne は quotidiani in nos（l. 60040–60044）。
- 読者への影響：小 — 「異教徒のああした集まりや会合を、わたしたちは憎まなければならない。そこでは神の名が冒涜され、そこでは毎日わたしたちに向けて獅子が求められ、そこから迫害が決められ、そこから試みが送り出されるのだから」。in nos leones expostulantur は、観客が「キリスト者を獅子に」と叫ぶこと（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。conventus は訳語表の「集まり」（7.3、8.5）。coetus は「会合」の類いで、3.4 の consessus「会合」と語が重なるかは訳者が決める。leo は表記の決まりどおり「獅子」。temptationes は口語訳の「試み」。vel quod は「〜からでもある」の類い。
- 確かめた資料：`page/n88_w1600.jpg` の上（本文）、中（校注 1〜4）、下（校注 3・4）。OCR l. 8449–8452、8470、8475–8476。CSEL l. 1951–1954、1976–1977。Migne l. 60040–60044。

### 27.2 Quid facies in illo suffragiorum impiorum aestuario deprehensus?（aestuarium と deprehensus）
- 底本（Oehler）：Quid facies in illo suffragiorum impiorum aestuario deprehensus? Non quasi aliquid illic pati possis ab hominibus (nemo te cognoscit Christianum), sed recogita, quid de te fiat in caelo.
- ほかの読み（27 章の校注 5、p. 59）：A は impiorum aestu. Carior reprehensus（Aβ は deprehensus）。CSEL は suffragiorum impiorum aestuario reprehensus と読み、A の aestu, carior と、deprehensus を B の読みとして挙げる（l. 1954–1955、1978）。Migne は deprehensus（l. 60044–60045）。
- 採る校訂者：注 a（p. 59）は aestuario に I. Fr. Gronovius『教会著作家の考察』18 章 p. 650 を見よとするだけで、意味を説かない。
- 読者への影響：中 — 「不敬虔な声援が渦巻くあの場に、取り押さえられたら、あなたはどうするのか。人々から何かをこうむるかもしれない、というのではない（だれもあなたがキリスト者だとは知らない）。そうではなく、天であなたについて何が起こるかを考え直しなさい」。aestuarium は本来、潮の満ち引きする水路や沼のことで、ここは声援が潮のように沸き返る場のたとえとみられる（語の意味はこの一覧の観察で、注 a は説かない。「未確認」）。deprehensus は「（現場を）押さえられて」で、見つかるのは人にではなく天に、という次の文につながる。CSEL の reprehensus（とがめられて）でも要点は同じ。
- 訳での扱い：訳注は付けない。aestuarium は「渦」「沸き返る場」の類いで、たとえと分かる訳にする（訳者が決める）。suffragia は 16.4 の「声援」（25.2 の favores とも近い）。impiorum は、3 章の詩篇一・一 の concilium impiorum『悪しき者の集まり』と同じ語なので、「悪しき者たちの声援」と語をつなげるかは訳者が決める（この点はこの一覧の観察）。単数の二人称（facies、possis、recogita）は、本の `AGENTS.md` の 8.6〜8.7・18 章の決まりどおり「あなた」。
- 確かめた資料：`page/n88_w1600.jpg` の上（本文）、下（校注 5、注 a）。OCR l. 8452–8455、8477、8490、8516–8517。CSEL l. 1954–1957、1978。Migne l. 60044–60047。

### 27.3 Dubitas illo enim momento, quo diabolus in ecclesia furit, omnes angelos prospicere de caelo …（in ecclesia と、in ecclesiam、in diaboli ecclesia fueris）
- 底本（Oehler）：Dubitas illo enim momento, quo diabolus in ecclesia furit, omnes angelos prospicere de caelo et singulos denotare, quis blasphemiam dixerit, quis audierit, quis linguam, quis aures diabolo adversus deum ministraverit?
- ほかの読み（27 章の校注 6〜8、p. 59）：Dubitas illo enim は AB、Dubitas illo eum は B の余白、Dubitas enim illo はほかの本。quo diabolus in ecclesia furit は A と B の余白、quo diabolus in ecclesiam furit は E と Fulv. Ursinus、quod in diaboli ecclesiam fueris は B、quo in diaboli ecclesia fueris は CD。ministraverit は AE、administraverit はほかの本。CSEL は quo diabolus in ecclesiam furit と Ursinus の形を本文に採り、校注で in ecclesia（A と B の余白）、B と Gelenius の fueris の形を挙げる（l. 1957–1958、1979–1981）。Migne は quo in diaboli Ecclesia fueris を本文にし、異読に「Quo diabolus in Ecclesiam furit Cod. Wouw. Rig.」と挙げる（l. 60047–60048、60072）。in ecclesiam は、Oehler も CSEL も Ursinus の推定（Oehler は E も）として挙げる。
- 採る校訂者：Oehler はこの句に注を付けない。本文は A の読み。
- 読者への影響：大 — 三つの形で場面が変わる。底本の in ecclesia では「悪魔が教会（集会）の中で荒れ狂うその時」で、文脈からは、25.5 の diaboli ecclesia（悪魔の教会）、つまり見世物の場を指すとみられる（この点はこの一覧の観察で、Oehler は注で説かない）。CSEL・Ursinus の in ecclesiam では「悪魔が教会に向かって荒れ狂うその時」で、悪魔がキリストの教会を攻める意味になる。B・CD・Migne の形では「あなたが悪魔の教会にいるその時」で、見世物の場であることがはっきりする。底本の形を「教会」とだけ訳すと、読者はキリスト者の教会の中で悪魔が荒れ狂うと読みかねない。
- 訳での扱い：ecclesia の訳し方は「メインで決めること」。底本の in ecclesia を、25.5 の「悪魔の教会」と語をつなげて訳す（「悪魔が自分の教会で荒れ狂う」のように「自分の」を補う、あるいは「集会」とする）なら、訳注は要らない。補わずに「教会」とだけ訳すなら、訳注を付けることを勧める。ただし CSEL の in ecclesiam は推定（Ursinus）で、07 の論点一覧では推定どうしの違いに訳注を付けていないので、注には刊本の伝える形（B、CD の「あなたが悪魔の教会にいるその時」）を挙げるほうが、その決まりに合う。どちらを挙げるかは「メインで決めること」。案は二つ：
  - 「古い刊本は『あなたが悪魔の教会にいるとき』と読む。」（25 字）
  - 「別の読みでは『悪魔が教会に向かって荒れ狂う』。」（23 字）
  angeli は訳語表の「天使」。denotare は「書き留める、名指す」の類い。diabolo … ministraverit は「悪魔に舌や耳を貸した（仕えさせた）」。Dubitas は反語の「疑うのか」。
- 確かめた資料：`page/n88_w1600.jpg` の上（本文）、中（本文）、下（校注 6〜8）。OCR l. 8455–8458、8477–8481。CSEL l. 1957–1960、1979–1982。Migne l. 60047–60051、60072。

### 27.4 Non ergo fugies sedilia hostium Christi, illam cathedram pestilentiarum …（詩篇一・一 の「疫病のような者の座」）
- 底本（Oehler）：Non ergo fugies sedilia hostium Christi, illam cathedram pestilentiarum, ipsumque aërem, qui desuper incubat, scelestis vocibus constupratum?
- ほかの読み（27 章の校注 9・10、p. 59）：Non は ACDE、Num は B。A は scelestibus gaudeamus と書き、vocibus から 28.2 の ut cum lugere coeperint までを欠く（冒頭の「写本 A の大きな欠落」）。CSEL は scelestis uocibus conspurcatum（「scripsi」。constupratum は B）と読む（l. 1960–1963、1982–1983）。Migne は pestilentiarum（Fran の異読は pestilentiariam）と constupratum、欄外に「Ps. I」（l. 60051–60056、60075）。
- 聖書の形：Oehler も CSEL も欄外に箇所を挙げない。illam cathedram pestilentiarum は、3 章で引いた詩篇一・一 の七十人訳 καθέδραν λοιμῶν（「疫病のような者たちの座」）を受ける（illam「あの」で、前に挙げたものを指す）。3.3 の本文は cathedra pestium で、ここは pestilentiarum と語が違うが、同じ句を指すとみられる（この点はこの一覧の観察。七十人訳の句は 03-de-spectaculis-01-03 の論点一覧、Swete II l. 19147–19152）。
- 読者への影響：中 — 「では、キリストの敵たちの座席、あの疫病のような者の座を、そしてその上に覆いかぶさり、邪悪な声で汚された空気そのものを、あなたは避けないのか」。3 章の詩篇の句とつながっていることが分からないと、illam（あの）が何を指すか取れない。
- 訳での扱い：訳注は付けない。cathedra pestilentiarum は、本の `AGENTS.md` の 3 章の決まりの句『疫病のような者の座』に揃え、3.9 の concilium impiorum と同じく『』に入れるかは訳者が決める（出典を付けるなら（詩篇一・一））。sedilia は 3.7 の「座」と語を分けて「座席」の類い。constupratum は「辱められた、汚された」の類い。
- 確かめた資料：`page/n88_w1600.jpg` の中（本文、校注 9・10）、下（校注 10 の続き）。OCR l. 8458–8460、8481–8483。CSEL l. 1960–1963、1982–1983。Migne l. 60051–60056、60075。

### 27.6 proinde habe ac si stillicidia mellis de lucunculo venenato; nec tanti gulam facias voluptatis, quanti periculum per suavitatem.（lucunculus と ranunculus）
- 底本（Oehler）：Omnia illic seu fortia, seu honesta, seu sonora, seu canora, seu subtilia, proinde habe ac si stillicidia mellis de lucunculo venenato; nec tanti gulam facias voluptatis, quanti periculum per suavitatem.（A の欠落の範囲の中）
- ほかの読み（27 章の校注 11〜15、p. 59）：licebit は BC、licet は DE と Clemens の写本。D は quo conficit。ac si は BCDE、ac は Fr. Junius。de lucunculo venenato は Fr. Junius と Jos. Scaliger、delivacunculo venenatu は B、de libacunculo venenato は CD、de ranunculo venenato は E と Fulv. Ursinus。nec tangi は B、ne tanti は Fr. Junius。CSEL は perinde（「scripsi」。proinde は B）habe ac stillicidia mellis de lucunculo uenenato（ac は Junius、lucunculo は Junius）nec tanti … と読む（l. 1967–1970、1983–1986）。Migne は de ranunculo venenato（l. 60172）、異読に libacunculo（Fran）と lucunculo（Jun）（l. 60254）。
- 採る校訂者：注 c（p. 59〜60）は de lucunculo に、Hildebrand のアプレイウス『変身物語』10 巻 13 への注を見よとし、Rigaltius は自分の作った ranunculus（小さな蛙）を、蜂の巣の蜜をヒキガエルの肺と一緒にしぼるようなもので、毒と混ざった蜜がしたたる、と説いた、と言い、ユウェナリス 1 歌 70 行、6 歌 659 行、3 歌 44 行、プリニウス『博物誌』のヒキガエルの毒を引く。注 b（p. 59）は saporatis に Turnebus『雑録』28 巻 45 を見よとするだけ。Migne の注 (a) の続き（Le Prieur）は、Junius が lucunculum と読むのは lucuns から出た語で、甘い菓子の一種だからで、アフラニウスの「兄弟の子に lucunculi を送る」を引く（l. 60280–60289）。
- 読者への影響：中 — 「そこにあるものは、勇ましいものも、立派なものも、よく響くものも、歌のうまいものも、手の込んだものも、すべて、毒を入れた菓子からしたたる蜜のしずくと思いなさい」。lucunculus（甘い菓子）なら毒入りの菓子、ranunculus（蛙）なら毒蛙からしぼった蜜で、たとえの絵が変わるが、甘さの中の毒という要点は同じ。nec tanti … quanti … は「快楽への食い気を、甘さを通しての危険ほどに重く見るな」の類いで、構文が詰まっている。
- 訳での扱い：訳注は付けない（校訂者の推定どうしの違い）。底本の lucunculo で、Migne の注に従い「菓子」の類いにする。nec tanti gulam facias voluptatis, quanti periculum per suavitatem は、gula（喉、食い気）と per suavitatem（甘さによって）をたとえのつながり（毒入りの甘い食べ物）として残し、「快楽を味わいたい気持ちより、甘さに潜む危険を重く見なさい」の向きで訳す（訳者が決める）。venenum temperat felle et elleboro は「胆汁やヘレボルスで毒を調合する」の類いで、elleborus（毒草）は植物の名で訳すか「苦い毒草」とするかは訳者が決める。
- 確かめた資料：`page/n88_w1600.jpg` の中（本文、校注 11〜15）、下（校注 11〜15、注 b・c）、`page/n89_w1600.jpg` の下（注 c の続き）。OCR l. 8460–8467、8484–8487、8519–8528、8598–8605。CSEL l. 1963–1970、1983–1986。Migne l. 60064–60066、60172–60176、60254、60265–60289。

### 28.1 Saginentur eiusmodi dulcibus convivae sui. Et loca et tempora et invitator ipsorum est.（sui＝悪魔の、invitator）
- 底本（Oehler）：Saginentur eiusmodi dulcibus convivae sui. Et loca et tempora et invitator ipsorum est. Nostrae coenae, nostrae nuptiae nondum sunt. Non possumus cum illis discumbere, quia nec illi nobiscum.（A の欠落の範囲の中）
- ほかの読み（28 章の校注 1〜3、p. 60）：B は imitator（invitator の代わり）。B は nondum sum。possumus は E と Fulv. Ursinus、possum は BCD。CSEL は inuitator（Gelenius。imitator は B）、sunt（Gelenius）、possumus（Ursinus）を採る（l. 1995–1998、2027–2028）。
- 採る校訂者：注 a（p. 60）は convivae sui の sui を eius の代わりに使った、と言い、Ruddiman『文法教程』、Hildebrand のアプレイウス注、ウェルギリウスやシリウスの注解者、Dirksen の法律家のラテン語の手引きを挙げる。
- 聖書の形：Oehler も CSEL も箇所を挙げない。Nostrae coenae, nostrae nuptiae nondum sunt は、終わりの日の婚宴（黙示録一九・九 の「小羊の婚宴」など）を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 「そういう甘いもので、彼（悪魔）の客たちは太らされるがよい。場所も時も、招く者も彼らのものだ。わたしたちの宴、わたしたちの婚宴は、まだ来ていない。わたしたちは彼らと一緒に席に着けない。彼らもわたしたちとは着かないのだから」。注 a のとおり sui は前の 27.5 の diabolus を受けるので、「自分の客」と訳すと主語の客たち自身の意味に読まれる。
- 訳での扱い：訳注は付けない。convivae sui は注 a のとおり「悪魔の客たち」の類いで、だれの客かを補う。Saginentur は三人称の接続法の命令で、本の `AGENTS.md` の 17.4 の型（「〜がよい」）。invitator は「招く者、宴の主」の類い。discumbere は「（宴の）席に着く」。
- 確かめた資料：`page/n89_w1600.jpg` の上（本文、校注 1〜3）、下（校注、注 a）。OCR l. 8549–8552、8578–8581、8607–8616。CSEL l. 1995–1998、2027–2028。Migne l. 60179–60182。

### 28.2 Saeculum, inquit, gaudebit, vos tristes eritis.（ヨハネ一六・二〇 と口語訳の語順）
- 底本（Oehler）：Vicibus disposita res est. Nunc illi laetantur, nos conflictamur. Saeculum, inquit, gaudebit, vos tristes eritis. Lugeamus ergo dum ethnici gaudent, ut cum lugere coeperint, gaudeamus, ne pariter nunc gaudentes, tunc quoque pariter lugeamus. 欄外に「Ioan. XVI, 20.」
- ほかの読み：Oehler の校注に、この部分の異読はない（ut cum lugere coeperint までは A の欠落の範囲）。CSEL は tunc quoque pariter lugeamus と同じに読み、欄外に「Ioann. 16, 20.」（l. 1998–2002、2025）。Migne も同じ（l. 60183–60187）。
- 聖書の形：ヨハネ一六・二〇 のギリシア語（Byz）は「あなたがたは泣き、嘆くが、世（ὁ κόσμος）は喜ぶ。あなたがたは悲しむが、その悲しみは喜びに変わる」。テルトゥリアヌスはその中から「世は喜ぶ」「あなたがたは悲しむ」の二句だけを、この順で引く。口語訳は『あなたがたは泣き悲しむが、この世は喜ぶであろう。あなたがたは憂えているが、その憂いは喜びに変るであろう』で、句の順と語（「この世」「憂える」）が原文と違う。
- 読者への影響：小 — 「事は順番に定められている。いま彼らは喜び、わたしたちは苦しむ。『世は喜ぶが、あなたがたは悲しむ』と、主は言われる。だから、異教徒が喜んでいるあいだ、わたしたちは嘆こう。彼らが嘆き始めるとき、わたしたちが喜ぶために」。
- 訳での扱い：訳注は付けない。原文が二句だけを、口語訳と違う順で引くので、口語訳の文言（「この世は喜ぶであろう」「憂えている」）を下敷きにしてこの順に並べ直し、『』に入れるか、地の文で言い換えるかは「メインで決めること」。saeculum は訳語表で「世」（15.7 の決まりで「この世」にしない）だが、口語訳はここを「この世」と訳すので、どちらに寄せるかも決める。inquit の主語（主）は書かれていないので補うかを決める（尊敬語）。Lugeamus … gaudeamus は、本の `AGENTS.md` の一人称複数の勧め（「〜しましょう」）。
- 確かめた資料：`page/n89_w1600.jpg` の上（本文、欄外）。OCR l. 8552–8555、8537–8538。CSEL l. 1998–2002、2025。Migne l. 60183–60187。Byz JOH.csv l. 703。`node tools/bible.js John.16.20`。

### 28.3 Philosophi quidem hoc nomen quieti et tranquillitati dederunt（quidem と quidam、エピクロス派）
- 底本（Oehler）：Delicatus es Christiane, si et in saeculo voluptatem concupiscis, immo nimium stultus, si hoc existimas voluptatem. Philosophi quidem hoc nomen quieti et tranquillitati dederunt, in ea gaudent, in ea avocantur, in ea etiam gloriantur.
- ほかの読み（28 章の校注 4〜6、p. 60）：A は Dilicatus。quidem は AβBCD、quidam は (Aφ)E と Fr. Junius。A は et tranquillitati dederunt を欠く。CSEL は philosophi quidam（Junius。quidem は AB）と読み、Usener（OCR は「Epie. p. 284, 16」。Usener のエピクロスの資料集と読むのはこの一覧の観察）の uocantur（auocantur の代わり）を挙げる（l. 2002–2006、2028–2030）。A の読みを、Oehler は Aβ と Aφ で quidem と quidam に分かれると言い、CSEL は quidem とだけ言う。Migne は Philosophi quidam（l. 60190）。
- 採る校訂者：Oehler はこの文に注を付けない。Migne の注 (c)（Le Prieur）は、快楽に最高善を置いたエピクロス派を指す、と言う（l. 60290–60292）。CSEL が Usener の書の頁を挙げるので、この箇所はエピクロス派の資料として集められているとみられる（この点はこの一覧の観察）。
- 読者への影響：中 — 底本では「キリスト者よ、世の中でも快楽を求めるなら、あなたは贅沢だ。いや、それを快楽と思うなら、ひどく愚かだ。哲学者たちは、たしかに、この名（快楽）を、静けさと平穏に与えた。それを喜び、それで気晴らしをし、それを誇りさえする」。quidem では哲学者一般のこととして語り、quidam では「ある哲学者たちは」とエピクロス派に限る。どちらでも、真の快楽は見世物の騒ぎではなく静けさだ、という要点は同じ。
- 訳での扱い：訳注は付けない。底本の quidem で「哲学者たちは、たしかに」の類いにし、エピクロス派の名は補わない。hoc nomen は「快楽という名」と、何の名かを補う。Christiane は本の `AGENTS.md` のとおり「キリスト者よ」、二人称は「あなた」。avocantur は「気を紛らす、くつろぐ」の類い。
- 確かめた資料：`page/n89_w1600.jpg` の上（本文）、下（校注 4〜6）。OCR l. 8555–8559、8581–8582。CSEL l. 2002–2006、2028–2030。Migne l. 60188–60192、60290–60292。

### 28.4 Dicas velim: Non possumus vivere sine voluptate qui mori cum voluptate debebimus? … Hic voluptas, ubi et votum.（問いの区切り、Ursinus の Hic、フィリピ一・二三）
- 底本（Oehler）：Tu mihi metas et scenas et pulverem et arenam suspiras. Dicas velim: Non possumus vivere sine voluptate qui mori cum voluptate debebimus? Nam quod est aliud votum nostrum, quam quod et apostoli, exire de saeculo et recipi apud dominum? Hic voluptas, ubi et votum. 欄外に「Philipp. I, 23.」
- ほかの読み（28 章の校注 7〜12、p. 60）：A は moetas et scaenam。arenam は AE、harenas は BCD。Aβ は quod et aliud。A は exire de saeculo et を欠く。Hic は E で、Fulv. Ursinus の直し。Haec はすべての本。votum は A・B の余白・CDE、vitium は B、votum iam は Fr. Junius。CSEL は et scaenam … et harenam、non possumus uiuere sine uoluptate, qui mori cum uoluptate debemus.（debebimus は B）と問いにせずに区切り、nam について「num か」と推し量り、hic（Ursinus）を採る。欄外は「cf. Philipp. 1, 23; cf. Luc. 12, 34.」（l. 2006–2010、2025、2030–2033）。Migne は debebimus と問いにし、Hic voluptas（l. 60193–60198）。
- 採る校訂者：Oehler はこの部分に注を付けない。Migne の注 (d) は metas に、カッシオドルス『雑録』3 巻 51 の競走場の折り返しの柱の説明を引く（l. 60293–60298）。
- 聖書の形：exire de saeculo et recipi apud dominum は、フィリピ一・二三 の言い換え（Byz は「去って（ἀναλῦσαι）キリストと共にいること」、口語訳『この世を去ってキリストと共にいること』）。apud dominum（主のもとに）は、第二コリント五・八 の「主のもとに住む」（ἐνδημῆσαι πρὸς τὸν κύριον、口語訳『主と共に住む』）にも近い（この点はこの一覧の観察）。Hic voluptas, ubi et votum は、CSEL の欄外が挙げるルカ一二・三四（『あなたがたの宝のある所には、心もある』）の形をなぞる。
- 読者への影響：中 — 「あなたは、わたしに向かって、折り返しの柱や、舞台や、砂ぼこりや、闘技場の砂を恋しがる。言ってほしいものだ。快楽を楽しんで死ぬはずのわたしたちが、快楽なしには生きられないというのか。わたしたちの願いは、使徒の願いと同じく、世を去って主のもとに迎えられることのほかに何があろう。願いのあるところに、快楽もある」。底本の区切りでは、相手が言いそうな「快楽なしには生きられない」を、書き手が「死ぬときに快楽を得るわたしたちが」と問い返す形。CSEL の区切りでは、相手に言わせる言葉そのものになる。Haec（すべての本）なら「これが快楽だ、願いのあるところの」となる。
- 訳での扱い：訳注は付けない。Dicas velim から debebimus? までのどこを「」に入れ、誰の言葉として訳すか（相手の言い分か、書き手の問い返しか）は「メインで決めること」（本の `AGENTS.md` の 8.6〜8.7・18 章の「キリスト者よ」の問いの型との関係）。フィリピ一・二三 は言い換えなので『』に入れず地の文で言い、出典（フィリピ一・二三）を付ける（本の `AGENTS.md` の 13.1〜13.2 の扱い）。apostoli は単数の属格「使徒の」（パウロ）。metae は訳語表の「折り返しの柱」、scenae は「舞台」、pulvis と arena は競走場と闘技場の「砂ぼこり」「砂」。Hic voluptas, ubi et votum は底本の Hic で「願いのあるところに、快楽がある」の類い。
- 確かめた資料：`page/n89_w1600.jpg` の上（本文）、中（本文、欄外）、下（校注 7〜12）。OCR l. 8559–8563、8541–8542、8582–8587、8595。CSEL l. 2006–2010、2025、2030–2033。Migne l. 60192–60198、60293–60298。Byz PHP.csv l. 24、2CO.csv l. 86。`node tools/bible.js Phil.1.23 2Cor.5.8 Luke.12.34`。

### 29.1 Iam nunc si putas delectamentis exigere spatium hoc（si putas と putas、puta）
- 底本（Oehler）：Iam nunc si putas delectamentis exigere spatium hoc, cur tam ingratus es, ut tot et tales voluptates a deo contributas tibi satis non habeas neque recognoscas?
- ほかの読み（29 章の校注 1〜3、p. 60）：si putas は BCD、putas は (Aφ)、puta は (Aβ)E。B は erigere。A は ut putes tales a deo。CSEL は Iam nunc putas delectamentis exigere spatium hoc? と、A の putas で問いにし、si putas を B、puta を Rigaltius の読みとして挙げる。A が uoluptates を欠くことも挙げる（l. 2012–2014、2034–2035）。Migne は si putas（l. 60202）。
- 読者への影響：小 — 底本では「もし今、この（命の）期間を楽しみで過ごさねばならないと思うのなら、なぜそれほど恩知らずなのか。神が分け与えてくださった、これほど多くの、これほどの快楽を、十分と思わず、それと認めもしないとは」。putas? では「楽しみで過ごさねばならないと思うのか。なぜ…」、puta では「思うがよい。だが、なぜ…」となる。要点は同じ。
- 訳での扱い：訳注は付けない。spatium hoc は「この（命の）期間」で、競走場の spatia（29.3）と語がつながる（この点はこの一覧の観察）ので、29.3 の訳と揃えられるかは訳者が決める。exigere は「（時を）過ごす」。delectamenta は「楽しみ」の類いで、訳語表の voluptas「快楽」、fructus「楽しみ」と重ならないように選ぶ。contributas は神の動作なので尊敬語。
- 確かめた資料：`page/n89_w1600.jpg` の中（本文）、下（校注 1〜3）。OCR l. 8565–8567、8589–8590。CSEL l. 2012–2014、2034–2035。Migne l. 60202–60205。

### 29.2–29.3 tantorum retro criminum venia … quod calcas deos nationum?（retro と calcas）
- 底本（Oehler）：quam tantorum retro criminum venia? … quod calcas deos nationum? quod daemonia expellis? quod medicinas facis? quod revelationes petis? quod deo vivis?
- ほかの読み（29 章の校注 4・5、p. 60）：Aβ は reconciliatio quam quam errorum、Aφ は reconciliatio quam errorum（どちらも veritatis revelatio quam を欠く）。A は quot calcas。CSEL も同じ本文で、A が ueritatis reuelatio quam を欠くこと、quot calcas を挙げる（l. 2015–2022、2035–2036）。Migne も同じ（l. 60208–60219）。
- 採る校訂者：注 a（p. 60）は retro を「以前に犯した（罪）」とし、retro を antea の意味で使う例はテルトゥリアヌスに数えきれない、9 章への注に少し挙げた、と言う。注 b（p. 60）は calcas を「踏みつける」（inculcas）の意味とし、『サソリの解毒剤』6 章への注で扱う、と言う。
- 読者への影響：小 — 「これまでの、これほど多くの罪のゆるしより、何が楽しいだろう。…あなたが諸国民の神々を踏みつけること、ダイモンを追い出すこと、病をいやすこと、啓示を求めること、神のために生きることより」。29.3 の quod … は 29.2 の quam … の続きで、「〜ということ」を並べる。
- 訳での扱い：訳注は付けない。retro は注 a のとおり「これまでの、以前の」。calcas は注 b のとおり「踏みつける」。daemonia expellis は、福音書の「悪霊を追い出す」（マルコ一六・一七）の言い方に寄せるか、訳語表の「ダイモン」にするかは「メインで決めること」（26.1 の論点）。deos nationum は「諸国民の神々」。dei patris et domini reconciliatio は「父なる神、主との和解」で、dominus を父と同じ方と取るか、キリストと取るかは訳者が決める。
- 確かめた資料：`page/n89_w1600.jpg` の中（本文）、下（校注 4・5、注 a・b）。OCR l. 8567–8574、8590–8591、8618–8625。CSEL l. 2014–2022、2035–2036。Migne l. 60205–60219。

### 29.3 In his tibi circenses ludos interpretare, cursus saeculi intuere, tempora labentia, spatia dinumera, metas consummationis expecta …（競走場のたとえと、CSEL の peracta）
- 底本（Oehler）：Hae voluptates, haec spectacula Christianorum sancta, perpetua, gratuita. In his tibi circenses ludos interpretare, cursus saeculi intuere, tempora labentia, spatia dinumera, metas consummationis expecta, societates ecclesiarum defende, ad signum dei suscitare, ad tubam angeli erigere, ad martyrii palmas gloriare.
- ほかの読み（29 章の校注 6・7、p. 60。8〜11、p. 61）：A は Haec voluptates。circenses ludos は AE、ludos circenses はほかの本。C は spatia を欠く（Oehler は「刷りの誤りだろう」と言う）。A は dinumera et has consumationes specta。A は defend。martyrum は AE。CSEL は haec uoluptates（A。hae は B）と読み、spatia peracta dinumera と peracta を足し（「addidi」）、labentia の後に Klussmann が欠落の印を付けたこと、A の et has consumationes specta を挙げ、ad martyrum palmas（A。martyrii は B）と読む（l. 2022–2023、2052–2055、2036、2078–2080）。Migne は ad martyrii palmas、異読に Martyrum（Rig）（l. 60219–60225、60263）。
- 採る校訂者：Oehler はこの文に注を付けない。Migne の注 (e)（Le Prieur）は、競走場に関わるものを、ここでキリスト者の生き方にみごとに当てはめている、と言う（l. 60300–60302）。
- 聖書の形：Oehler も CSEL も箇所を挙げない。ad signum dei suscitare, ad tubam angeli erigere は、終わりの日のよみがえり（第一テサロニケ四・一六 の「合図の声」「神のラッパ」、マタイ二四・三一 など）を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 「これらがキリスト者の快楽、キリスト者の見世物で、聖く、尽きることがなく、ただで見られる。これらの中に、戦車競走を読み取りなさい。世の走りを見つめ、過ぎゆく時を、周回を数え、終わりの折り返しの柱を待ち、教会の組を守り、神の合図で立ち上がり、天使のラッパで身を起こし、殉教のしゅろの枝を誇りとしなさい」。cursus（走り）、spatia（周回）、metae（折り返しの柱）、societates（組。競走場の色の組 factiones を思わせる）、signum（出走の合図）、palma（勝者のしゅろ）が、みな競走場の言葉で、終わりの日の言葉に重ねてある（どの語が競走場の言葉に当たるかは、Migne の注 (e) の一般の指摘のほかは、この一覧の観察）。suscitare、erigere、gloriare は受け身（形式受動）の命令形で「立ち上がれ」「身を起こせ」「誇れ」。
- 訳での扱い：訳注は付けない。競走場の言葉が終わりの日の言葉に重なるように訳す。metae は訳語表の「折り返しの柱」（8 章）、spatia は「周回」の類い、circenses ludi は訳語表の「戦車競走（の遊戯）」、palmae は「しゅろの枝」の類い。societates ecclesiarum は「諸教会の交わり（組）」の類いで、競走場の組の響きを出すかは訳者が決める。CSEL の peracta（「走り終えた周回」）は底本にないので足さない。
- 確かめた資料：`page/n89_w1600.jpg` の中（本文）、下（校注 6・7）、`page/n90_w1600.jpg` の上（本文）、中（校注 8〜11）。OCR l. 8574–8575、8591–8592、8631–8634、8658–8659。CSEL l. 2022–2023、2052–2055、2036、2078–2080。Migne l. 60219–60225、60263、60300–60302。`node tools/bible.js 1Thess.4.16`。Byz 1TH.csv l. 60。

### 29.4 nec fabulae, sed veritates, nec strophae, sed simplicitates（strophae）
- 底本（Oehler）：Si scenicae doctrinae delectant, satis nobis litterarum est, satis versuum est, satis sententiarum, satis etiam canticorum, satis vocum, nec fabulae, sed veritates, nec strophae, sed simplicitates.
- ほかの読み（29 章の校注 12〜14、p. 61）：Aβ は Si scae do..... ae delectant、Aφ は si scenicae delectant。Aβ は litterarum et satis、Aφ は litterarum satis。Aβ は versuum est satis を欠く。CSEL は si scaenicae doctrinae delectant と読み、A の est の代わりの et、uersuum est satis を欠くことを挙げる（l. 2055–2058、2080）。Migne の本文は Si scenicae doctrinae（l. 60225–60229。異読の一覧 (5)、l. 60258 は OCR が「Sciemiz Rig.」と崩れていて読めない。「未確認」）。
- 採る校訂者：注 c（p. 61）は strophae を「笑劇の話にあるような、たくらみやごまかし」とし、『諸国民へ』1 巻 10 章、『護教論』15 章（utrum mimos an deos vestros in strophis et iocis derideatis）、『魂について』28 章、『マルキオン反駁』3 巻 10 章、プリニウス『書簡』、アルドヘルム、自分の編んだ語彙集、デュ・カンジュを引く。Migne の注 (f)（La Cerda）は、たくらみと取ったうえで、役者の歌の strophae（歌の節）と antistrophae も響かせている、と言う（l. 60305–60311）。
- 読者への影響：小 — 「舞台の学びが楽しいのなら、わたしたちには文学も、詩句も、格言も、歌も、声も十分にある。作り話ではなく真理が、たくらみではなく素朴さが」。strophae は注 c のとおり「たくらみ」で、歌の「節」とも響く。
- 訳での扱い：訳注は付けない。strophae は注 c のとおり「たくらみ、ごまかし」の類い（『護教論』15 章の訳語があれば揃える）。fabulae は「作り話」、simplicitates は「素朴さ、まっすぐさ」。
- 確かめた資料：`page/n90_w1600.jpg` の上（本文）、中（校注 12〜14）、下（注 c）。OCR l. 8634–8637、8659–8661、8673–8674、8678–8695。CSEL l. 2055–2058、2080。Migne l. 60225–60229、60258、60305–60311。

### 29.5 Vis et pugillatus et luctatus? Praesto sunt non parva et multa.（Oehler の推定 parva et multa）
- 底本（Oehler）：Vis et pugillatus et luctatus? Praesto sunt non parva et multa. Aspice impudicitiam deiectam a castitate, perfidiam caesam a fide, saevitiam a misericordia contusam, petulantiam a modestia obumbratam, et tales sunt apud nos agones, in quibus ipsi coronamur. Vis autem et sanguinis aliquid? habes Christi.
- ほかの読み（29 章の校注 15〜21、p. 61）：Aβ は pugillatusque praesto、Aφ は pugillatus praesto（どちらも et luctatus を欠く）。parva et multa は ego（Oehler 自身の推定）。Aβ は par....sint multa、(Aφ)BCD は parva sed multa、E は parva simul、Fulv. Ursinus と Latinius は pauca, sed multa。A は impudiciciam（Aβ）・impudiciam（Aφ）、caesas、saevitiam misericordia（a を欠く）。BC は adumbratam。Aφ は sunt を欠く。CSEL は parua et multa（Oehler）を採り、A の par . . sunt multa、Klussmann の parum sunt multa を挙げる。adumbratam（obumbratam は Pamelius）と読む（l. 2058–2063、2080–2085）。Migne は non parva, sed multa、obumbratam（l. 60229–60235）。
- 採る校訂者：Migne の注 (g)（La Cerda）は ipsi coronamur に、競技場の運動の冠を知らない者はいないと言う（l. 60313–60321）。注 (h)（Le Prieur）は Vis autem et sanguinis aliquid? habes Christi を、血なまぐさい見世物に、皆の救いのために流されたキリストの血を対置した、と言う（l. 60324–60327）。
- 読者への影響：小 — 「拳闘や格闘が見たいのか。小さくないものが、たくさん用意されている。見なさい。不貞が貞潔に投げ倒され、不信が信仰に斬り倒され、残酷があわれみに打ちのめされ、横柄が慎みに影を落とされるのを。わたしたちのもとの競技はこういうもので、そこで冠を受けるのはわたしたち自身だ。血も少し見たいのか。キリストの血がある」。parva et multa と parva sed multa の違いは、意味をほとんど変えない。
- 訳での扱い：訳注は付けない（底本の推定。`// ` メモに推定であることを書ける）。agon は訳語表の「競技」、impudicitia は「恥知らずなこと」、modestia は「慎み」。pugillatus と luctatus は「拳闘」「格闘（レスリング）」の類い。habes Christi は「キリストの（血）がある」で、sanguinis を補う。obumbratam は「影に覆われた、かすまされた」の類い。
- 確かめた資料：`page/n90_w1600.jpg` の上（本文）、中（校注 15・16）、下（校注 16〜21）。OCR l. 8637–8642、8661–8665。CSEL l. 2058–2063、2080–2085。Migne l. 60229–60235、60313–60327。

### 30.1–30.2 adventus domini iam indubitati, iam superbi … quale regnum exinde iustorum! qualis civitas nova Hierusalem!（indubitati と、千年王国の解釈）
- 底本（Oehler）：Quale autem spectaculum in proximo est adventus domini iam indubitati, iam superbi, iam triumphantis! quae illa exultatio angelorum, quae gloria resurgentium sanctorum! quale regnum exinde iustorum! qualis civitas nova Hierusalem!
- ほかの読み（30 章の校注 1、p. 61）：A は angelorum gloria（quae を欠く）。CSEL も同じ本文で、quae（二つ目）を A が欠くと言う（l. 2065–2068、2085）。Migne も同じ（l. 60238–60242）。
- 採る校訂者：注 a（p. 61）は indubitati を「地のすべての国民が、もはや自分たちの主と認める（主）」とする。Migne の注 (i)（Pamelius）は、qualis civitas nova Hierusalem と、続く tot saeculi nativitates は、千年王国論の誤りに関わるかもしれない、と言う（l. 60329–60332）。
- 読者への影響：中 — 「間近に迫った主の来臨は、なんという見世物だろう。もはや疑われることなく、もはや誇り高く、もはや凱旋する主の来臨は。天使たちのあの歓喜、よみがえる聖徒たちの栄光、それに続く義人たちの王国、新しいエルサレムの都は、なんというものだろう」。indubitati は注 a のとおり、皆が主と認めるので疑われなくなった、の意味。regnum exinde iustorum（それに続く義人の王国）は、Pamelius が千年王国の考えと結びつける。superbus は「誇り高い、威光に満ちた」の意味で、悪い意味の「高慢」ではない（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。indubitati は注 a のとおり「もはや疑われない」。superbi は「威光に満ちた」の類いで、「高慢な」にしない。sancti は訳語表の「聖徒」（16.8）。Hierusalem は口語訳の「エルサレム」、civitas nova Hierusalem は黙示録二一・二 の口語訳「新しいエルサレム」に寄せられる（出典を付けるかは訳者が決める）。regnum exinde iustorum の千年王国の含みは補わない。
- 確かめた資料：`page/n90_w1600.jpg` の中（本文、校注 1 の番号）、下（校注 1、注 a）。OCR l. 8645–8650、8667、8675–8699。CSEL l. 2065–2068、2085。Migne l. 60238–60242、60329–60332。

### 30.2 ille nationibus insperatus, ille derisus, cum tanta saeculi vetustas et tot eius nativitates uno igni haurientur（derisus と nativitates、第二ペテロ三・一〇）
- 底本（Oehler）：At enim supersunt alia spectacula, ille ultimus et perpetuus iudicii dies, ille nationibus insperatus, ille derisus, cum tanta saeculi vetustas et tot eius nativitates uno igni haurientur.
- ほかの読み（30 章の校注 2、p. 61）：igni は AβBC、igne は (Aφ)DE。CSEL は igni（l. 2069–2071）。Migne も同じ（l. 60243–60246）。
- 採る校訂者：注 b（p. 61）は ille derisus に、ミヌキウス・フェリクス『オクタウィウス』11 章（異教徒が、キリスト者は死後に灰からよみがえると言いふらすと嘲る箇所）を引く。注 c（p. 61）は nativitates を γενέσεις（生まれ出たもの）とし、この箇所に第二ペテロ三・一〇 を見よとする。
- 聖書の形：uno igni haurientur は、注 c のとおり第二ペテロ三・一〇 の、天地とその上のものが焼け尽きる日を思わせる（口語訳『地とその上に造り出されたものも、みな焼きつくされるであろう』）。
- 読者への影響：中 — 「だが、まだほかの見世物が残っている。あの最後の、永遠の裁きの日、諸国民が思いもしなかった日、嘲られた日だ。そのとき、世のあれほど長い年月と、そこに生まれ出たあれほど多くのものが、一つの火に呑み込まれる」。derisus は注 b のとおり、異教徒が裁きとよみがえりを嘲ったこと。nativitates は注 c のとおり「生まれ出たもの、世代」で、「誕生日」ではない。
- 訳での扱い：訳注は付けない。nativitates は「生まれ出たもの」「代々に生じたもの」の類い。出典（第二ペテロ三・一〇）を付けるかは訳者が決める（引用ではなく暗示）。nationes は 29.3 の deos nationum と揃えて「諸国民」の類い。
- 確かめた資料：`page/n90_w1600.jpg` の中（本文、校注 2 の番号）、下（校注 2、注 b・c）。OCR l. 8650–8653、8667、8701–8710。CSEL l. 2068–2071。Migne l. 60242–60246。Byz 2PE.csv l. 54。`node tools/bible.js 2Pet.3.10`。

### 30.3 spectans tot ac tantos reges, qui in caelum recepti nuntiabantur, cum ipso Iove et ipsis suis testibus（神格化された皇帝と、その証人たち）
- 底本（Oehler）：Quae tunc spectaculi latitudo! quid admirer? quid rideam? ubi gaudeam? ubi exultem, spectans tot ac tantos reges, qui in caelum recepti nuntiabantur, cum ipso Iove et ipsis suis testibus in imis tenebris congemescentes!
- ほかの読み（30 章の校注 3〜6、p. 61〜62）：spectans tot ac tantos reges は BCD、tot spectans reges は AE。Aβ は nunciabantur。cum ipso Iove et ipsis suis testibus は BCDE、cum ipso Iove et sis testibus は Aβ、cum Iove ipso et sistestibus は Aφ。congemescentes は A、congemiscentes はほかの本。CSEL は ubi gaudeam, ubi exultem, tot spectans reges（A）、cum Ioue ipso（A。ipso Ioue は B）et ipsis suis testibus（B）、congemescentes（A。congemiscentes は B）と読む（l. 2072–2075、2085–2087）。Migne は spectans tot ac tantos reges、congemiscentes（l. 60246–60248、60338–60341）。
- 採る校訂者：注 d（p. 61〜62、Rigaltius）は latitudo を「その見世物で、どれほど多くの大きなものを見ることになるか」とし、Oehler は latitudo を amplitudo（広がり、大きさ）の意味とし、『偶像礼拝について』2 章を引く。注 e（p. 62）は、congemescentes は Agobardus の写本から採った、congemesco と congemisco はどちらも言う（tremesco と tremisco などと同じ）、と言う。Oehler は reges と testibus に注を付けない。Migne の注 (a)（La Cerda）は in caelum recepti を異教の神格化（apotheosis）を指すとし、テルトゥリアヌスと同じ時代のセウェルスについてのヘロディアノスの記述、ユスティノス『弁明』を挙げ、アウグストゥスの葬儀と、のちのドルシッラについて、元老院の身分の人が（天にのぼるのを見たと）言い張ったことはスエトニウスとディオから知られる、と言う（l. 60405–60410）。
- 読者への影響：中 — 「そのとき、見世物はなんと広大だろう。何に驚き、何を笑い、どこで喜び、どこで躍り上がろうか。天に迎えられたと告げられていた、あれほど多くの、あれほど偉大な王たちが、ユピテルその人と、自分たちの証人たちと一緒に、深い闇の底でうめいているのを見て」。Migne の注 (a) は in caelum recepti を神格化と説くだけで、testes には触れないが、注 (a) が挙げる「天にのぼったと言い張った元老院の身分の人」が、ここの testes（昇天の証人たち）に当たるとみられる（この結びつけはこの一覧の観察）。それを知らないと、何の証人かが分からない。
- 訳での扱い：訳注は付けない。reges は、本の訳語表で 6.2 の solemnibus regum を「皇帝たち」としているが、ここは天に迎えられたと告げられた者（神格化された皇帝たち）を言うので、「皇帝たち」にするか「王たち」にするかは「メインで決めること」。testes は「（昇天を見たと言った）証人たち」の類いで、何の証人かを補うか、`// ` メモに Migne の注を書くかは訳者が決める。Iuppiter は名前の表の「ユピテル」。latitudo は注 d のとおり「広さ、大きさ」。congemescentes は「うめく」。
- 確かめた資料：`page/n90_w1600.jpg` の中（本文、校注 3〜5）、下（校注 3〜5、注 d）、`page/n91_w1600.jpg` の上（本文）、中（校注 6）、下（注 d の続き、注 e）。OCR l. 8653–8655、8719、8667–8670、8712–8713、8742、8755–8764。CSEL l. 2072–2075、2085–2087。Migne l. 60246–60248、60338–60341、60405–60410。

### 30.4 item praesides persecutores dominici nominis saevioribus quam ipsi flammis saevierunt insultantibus contra Christianos liquescentes!（語順の異読と、praesides）
- 底本（Oehler）：item praesides persecutores dominici nominis saevioribus quam ipsi flammis saevierunt insultantibus contra Christianos liquescentes!
- ほかの読み（30 章の校注 7、p. 62）：saevioribus quam ipsi flammis saevierunt insultantibus contra Christianos（D は Christianis で、Clemens の写本から）は BCD、saevioribus quam ipsi contra Christianos saevierunt flammis insultantibus は E と Fulv. Ursinus、scli（Aφ は scu）flammis saeuferunt insultantibus contra Christianos は A。CSEL は saeuioribus quam ipsi flammis saeuierunt insultantes contra Christianos と、insultantes に直し（「scripsi」）、B を flammas saeuierunt insultantibus と報告する（Oehler は BCD を flammis と報告し、食い違う）。Klussmann は Oehler と同じ形を採ったと挙げる（l. 2075–2076、2101、2087–2092）。Migne は saevioribus, quam ipsi contra christianos saevierunt, flammis insultantibus（Rigaltius の語順。l. 60342–60344）。
- 読者への影響：中 — 底本では「また、主の御名を迫害した長官たちが、自分たちがキリスト者に向かって荒れ狂ったときの炎より、もっと激しく荒れ狂う炎に、あざけられながら溶けていくのを」。flammis … insultantibus（あざける炎）は、炎が擬人化されて長官たちをあざける。CSEL の insultantes では、長官たちのほうが「キリスト者をあざけった者たち」になる。Rigaltius の語順では「自分たちがキリスト者に荒れ狂ったより激しい、あざける炎の中で」と、比べるものがはっきりする。
- 訳での扱い：訳注は付けない。底本の語順で、quam ipsi flammis saevierunt を「彼ら自身が（キリスト者を焼く）炎で荒れ狂ったより」、insultantibus contra Christianos を炎ではなく長官たちのあざけりに取るか、炎のあざけりに取るかは訳者が決める（底本の語順では contra Christianos が insultantibus の直後にあり、「キリスト者に対してあざけった炎（より）」とも読める。構文の取り方はこの一覧の観察）。praesides は、本の訳語表で 11.2 の「主宰者」としているが、ここは迫害した属州の長官なので、『護教論』の訳語表の praeses「長官」に揃えるかは「メインで決めること」。dominicum nomen は「主の御名」。liquescentes は「溶けていく」。
- 確かめた資料：`page/n91_w1600.jpg` の上（本文）、中（校注 7）。OCR l. 8719–8721、8742–8745。CSEL l. 2075–2076、2101、2087–2092。Migne l. 60342–60344。

### 30.4 quos praeterea sapientes illos philosophos … quibus animas aut nullas aut non in pristina corpora redituras affirmabant!（quos の働き）
- 底本（Oehler）：quos praeterea sapientes illos philosophos coram discipulis suis una conflagrantibus erubescentes, quibus nihil ad deum pertinere suadebant, quibus animas aut nullas aut non in pristina corpora redituras affirmabant!
- ほかの読み（30 章の校注 8・9、p. 62）：quos praeterea は ABCD、praeterea は E と Fulv. Ursinus。A は rediturus。CSEL は quos praeterea? sapientes … と読み、quos を Ursinus が削ったこと、praeterea の後に Klussmann が問いの印を置いたことを挙げる（l. 2101–2105、2129–2130）。Migne は quos を欠く（praeterea sapientes。l. 60344）。
- 採る校訂者：Oehler は quos に注を付けない。Migne の注 (b)（La Cerda）は una conflagrantibus に、よみがえりはないと思っていた異教徒に、この災いを告げている、よみがえるが罰のためだ、と言う（l. 60412–60414）。
- 読者への影響：小 — 底本では「また、どんな人々を（見るだろう）。あの賢い哲学者たちが、弟子たちの前で、その弟子たちと一緒に焼かれて顔を赤らめているのを。彼らは、何ひとつ神には関わらないと弟子たちに説き、魂はないか、あっても元の体には戻らないと言い張っていた」。quos は 30.3 の spectans（見て）を受けて「どんな人々を」と感嘆する形とみられる（この点はこの一覧の観察）。quos のない形では、この働きが消えるだけで、意味は同じ。nihil ad deum pertinere は「神は何も気にかけない」の類い、animas aut nullas aut non in pristina corpora redituras は「魂はない、あるいは元の体には戻らない」で、哲学者の説（どの学派かは本文に名がない）。
- 訳での扱い：訳注は付けない。quos praeterea は「さらに、どんな人々を」の類いで、感嘆の流れを保つ。erubescere は訳語表の「顔を赤らめる」。哲学者の学派の名は補わない。una conflagrantibus は「（弟子たちが）一緒に焼かれる」で、discipulis に掛かる。
- 確かめた資料：`page/n91_w1600.jpg` の上（本文）、中（校注 8・9）。OCR l. 8721–8725、8746。CSEL l. 2101–2105、2129–2130。Migne l. 60344–60348、60412–60414。

### 30.5 etiam poëtas non ad Rhadamanti, nec ad Minois, sed ad inopinati Christi tribunal palpitantes!（名前の綴り）
- 底本（Oehler）：etiam poëtas non ad Rhadamanti, nec ad Minois, sed ad inopinati Christi tribunal palpitantes!
- ほかの読み（30 章の校注 10、p. 62）：A は Rhadamanthy nec ad minonis。CSEL は Rhadamanthi nec ad Minonis（A。Minois は B）と読む（l. 2105–2106、2130）。Migne は Rhadamanti, nec ad Minois（l. 60349）。
- 読者への影響：小 — 「詩人たちも、ラダマンテュスやミノスの裁きの座ではなく、思いもしなかったキリストの裁きの座の前で震えているのを」。ラダマンテュスとミノスは、詩人たちの歌う冥府の裁き手。
- 訳での扱い：訳注は付けない。名前は『護教論』の名前の表の「ラダマンテュス」「ミノス」（23.16）。tribunal は「裁きの座」（訳語表の stadium tribunalis「裁きの座という競技場」と揃える）。inopinatus は「思いもしなかった」。
- 確かめた資料：`page/n91_w1600.jpg` の上（本文）、中（校注 10）、下（校注 10 の続き）。OCR l. 8725–8726、8746–8747。CSEL l. 2105–2106、2130。Migne l. 60349–60350。

### 30.5 tunc histriones cognoscendi, solutiores multo per ignem; tunc spectandus auriga, in flammea rota totus rubens（solutiores の言葉遊びと、赤の組）
- 底本（Oehler）：Tunc magis tragoedi audiendi, magis scilicet vocales in sua propria calamitate; tunc histriones cognoscendi, solutiores multo per ignem; tunc spectandus auriga, in flammea rota totus rubens;
- ほかの読み（30 章の校注 11〜14、p. 62）：A は Tum。A は tragoedi audiendi magis を欠く。Aφ は exspectandus。totus ruber は AE（Oehler の rubens は、残りの本の読みとみられるが、校注は挙げない）。CSEL は tunc（tu は A）、totus ruber（A。rubens は B）と読む（l. 2106–2109、2130–2131）。Migne の本文は totus rubens、注 (d) の見出しは totus ruber（l. 60354、60421–60422）。
- 採る校訂者：注 f（p. 62）は magis scilicet vocales に 25 章（tragoedo vociferante）を見よとする。注 g（p. 62、Rigaltius）は、役者は女々しくみだらで、女以上になよなよと流れるので「ゆるんだ（soluti）」者だが、火によって手足が焼けて溶け、「もっとゆるむ（solutiores）」と言う。注 h（p. 62）は、rota を提喩で車そのものと取り、rubens は赤の組（factio russata）を思って置いた、9 章を見よ、と言う。Migne の注 (d)（Rigaltius）も、御者の赤の組をほのめかす、と言う（l. 60421–60422）。
- 読者への影響：中 — 「そのときこそ、悲劇役者たちを聞くべきだ。自分自身の災いの中で、なおさら声を張り上げるのだから。そのとき、役者たちを見分けるべきだ。火によって、ずっとなよなよと溶けているのだから。そのとき、御者を見るべきだ。燃える車の上で全身まっ赤になって」。注 g・注 h を知らないと、solutiores（なよなよした／溶けた）と rubens（赤の組／火で赤い）の言葉遊びが取れない。
- 訳での扱い：訳注は付けない。solutiores は、訳語表の 10.8 の fluxus「なよなよした」と語をつなげ、火で溶ける意味と両方が出るように訳す（訳者が決める）。rubens は、9 章の色の組の「赤」と同じ語で訳すと、組の響きが残る（9 章の訳と揃える）。rota は注 h のとおり「車」。histriones は『護教論』の「役者」、tragoedi は 25.3 の「悲劇役者」、auriga は 23.2 の「御者」。
- 確かめた資料：`page/n91_w1600.jpg` の上（本文）、中（校注 11・12）、下（校注 13・14、注 f〜h）。OCR l. 8726–8729、8747–8748、8766–8780。CSEL l. 2106–2109、2130–2131。Migne l. 60350–60354、60416–60422。

### 30.5 tunc xystici contemplandi non in gymnasiis, sed in igne iaculati（in igne＝in ignem と、CSEL の欠落の印）
- 底本（Oehler）：tunc xystici contemplandi non in gymnasiis, sed in igne iaculati, nisi quod ne tunc quidem illos velim visos, ut qui malim ad eos potius conspectum insatiabilem conferre, qui in dominum desaevierunt.
- ほかの読み（30 章の校注 15〜18、p. 62）：A は tunc exy.....contemplandi。Aφ は sed igne。ne tunc quidem は A、nec tunc quidem はほかの本。Aβ は in dno desaevierunt。CSEL は sed in igne *** iaculati と、igne の後に欠落の印を置き（「闘技場への言及が欠けている」）、iaculati について mulcati か luctati かと推し量る。nec（B）、uelim uisos（A）も挙げる（l. 2109–2113、2131–2134）。Migne は nec tunc quidem（l. 60354–60356）。
- 採る校訂者：注 i（p. 62）は、La Cerda が iactati mari ignifluo（火の流れる海に投げ込まれた）と解いたと言い、Oehler は in igne iaculatos を in ignem iaculatis（火の中へ投げ込まれた）の意味に取る、と言う。前の in gymnasiis に合わせて、前置詞 in を奪格で組んだのだ、と言い、『サソリの解毒剤』3 章への注を見よとする。
- 読者への影響：中 — 「そのとき、運動選手たちを、練習場ではなく、火の中へ投げ込まれた姿で眺めるべきだ。ただ、そのときでさえ、わたしは彼らを見たいとは思わない。それより、主に荒れ狂った者たちに、飽くことのない目を向けたいのだから」。iaculati は、運動選手が投げる者（槍投げ）であることと、今度は自分が火に投げ込まれることの掛け合いとみられる（この点はこの一覧の観察）。CSEL は闘技場の者についての句が欠けていると考える。
- 訳での扱い：訳注は付けない。in igne iaculati は注 i のとおり「火の中へ投げ込まれた」。xystici は 22.1 の「運動選手」と揃えるか（訳語表の athletae「運動選手」と原語が違う）は訳者が決める。gymnasia は「練習場」の類い（訳語表の palaestra「練習場」と原語が違うので、別の語にするかを決める）。nisi quod … velim は「ただし…とは思わない」。in dominum desaevierunt は「主に向かって荒れ狂った」で、次の 30.6 のユダヤ人たちへの呼びかけにつながる。
- 確かめた資料：`page/n91_w1600.jpg` の上（本文）、中（本文、校注 15〜17）、下（校注 15〜18、注 i）。OCR l. 8729–8732、8748–8750、8782–8790。CSEL l. 2109–2113、2131–2134。Migne l. 60354–60356、60338、60365。

### 30.6 Hic est ille, dicam, fabri aut quaestuariae filius, sabbati destructor, Samarites, et daemonium habens.（quaestuaria と、福音書の言葉）
- 底本（Oehler）：Hic est ille, dicam, fabri aut quaestuariae filius, sabbati destructor, Samarites, et daemonium habens.
- ほかの読み（30 章の校注 19、p. 62）：D は quaestuarii。CSEL も quaestuariae filius（l. 2113–2114）。Migne も quaestuariae（l. 60366）。
- 採る校訂者：注 k（p. 62〜63）は、ヒエロニュムスがヘリオドロスへの手紙で、この箇所を目の前にしていたようだ、と言い、「この者こそ、職人と quaestuaria の子、母のふところに抱かれてエジプトに逃げた者、緋の衣を着せられた者、いばらの冠をかぶせられた者、ダイモンを持つ魔術師でサマリヤ人」を引き、テオドレトス『教会史』3 巻 11 を見よとする。Migne の注 (f)（Rigaltius）はヒエロニュムスの同じ箇所を引き、これはユダヤ人が処女マリヤに浴びせた罵りだと言い、テオドレトスの「マリヤの子」「大工の子」の例を挙げる。続く Le Prieur の注は、Rigaltius の読みにも、La Cerda がヒエロニュムスから二か所で引く quaestuarii にも、すすんで賛成はできない、と言い、法律家が quaestuaria を「体で稼ぎや利得を得る女」と注していることは、学者が昔から指摘している、と言う（l. 60431–60465。OCR が崩れていて、Le Prieur がどの読みを採るか、Rigaltius の読みが何かは読み取れない。「未確認」）。
- 聖書の形：Oehler も CSEL も箇所を挙げない。fabri filius はマタイ一三・五五（口語訳『この人は大工の子ではないか』）、sabbati destructor はヨハネ五・一八 の「安息日を破られた」、Samarites, et daemonium habens はヨハネ八・四八（Byz の Σαμαρείτης εἶ σύ, καὶ δαιμόνιον ἔχεις、口語訳『あなたはサマリヤ人で、悪霊に取りつかれている』）を思わせる（この点はこの一覧の観察）。
- 読者への影響：大 — 「わたしは言ってやろう。『これが、あの大工の、あるいは稼ぎ女の息子、安息日を破る者、サマリヤ人、悪霊に取りつかれた者だ』」。quaestuaria は Migne の注のとおり体で稼ぐ女（遊女）の意味で、イエスの母をおとしめたユダヤ人の罵りを、書き手が裁きの日に投げ返す場面。D の quaestuarii（稼ぎ人の子）なら遊女の意味は消える。dicam（わたしは言ってやろう）以下は、書き手が、主に荒れ狂った者たちに向かって、彼らのかつての罵りをそのまま言い返す言葉。
- 訳での扱い：訳注は付けない。dicam 以下を「」に入れて書き手の言い返しとし、hic est は「これが…だ」の類い。quaestuaria の訳（「稼ぎ女」「遊女」の類い）、罵りの言葉の中でキリストを尊敬語にするかどうかは「メインで決めること」（本の `AGENTS.md` は、相手の口から神を言うところは尊敬語にしない、と 2.2 で決めている）。faber は口語訳の「大工」、Samarites は口語訳の「サマリヤ人」。daemonium habens は、ヨハネ八・四八 の口語訳「悪霊に取りつかれている」に寄せるか、訳語表の「ダイモン」にするかは「メインで決めること」（26.1 の論点）。出典（マタイ一三・五五、ヨハネ八・四八 など）を付けるかは訳者が決める（引用ではなく暗示）。
- 確かめた資料：`page/n91_w1600.jpg` の中（本文、校注 19）、下（注 k）、`page/n92_w1600.jpg` の上（注 k の続き）。OCR l. 8732–8734、8750、8792–8797、8830–8833。CSEL l. 2113–2114。Migne l. 60365–60367、60431–60465。Byz MAT.csv l. 451、JOH.csv l. 386。`node tools/bible.js Matt.13.55 John.5.18 John.8.48`。

### 30.6 Hic est, quem a Iuda redemistis, hic est ille arundine et colaphis diverberatus, sputamentis dedecoratus, felle et aceto potatus.（A の欠落と、「酢」）
- 底本（Oehler）：Hic est, quem a Iuda redemistis, hic est ille arundine et colaphis diverberatus, sputamentis dedecoratus, felle et aceto potatus.
- ほかの読み（30 章の校注 20・21、p. 62）：A は Hic est quem a Iuda redemistis を欠く。Aβ は harundine。CSEL は harundine（A）と読み、hic … redemistis を A が欠くと言う（l. 2114–2116、2134）。Migne も同じ本文（l. 60367–60374）。
- 採る校訂者：注 l（p. 63）は potatus を、他動詞の potare（飲ませる）の受け身とし、後代の書き手は potare を「飲み物を与える」の意味で使った、とデュ・カンジュを引く。
- 聖書の形：Oehler も CSEL も箇所を挙げない。a Iuda redemistis はユダの裏切り（マタイ二六・一五）、arundine はマタイ二七・三〇（口語訳「葦の棒」）、colaphis はマタイ二六・六七（「こぶしで打ち」）、sputamentis はマタイ二六・六七、二七・三〇（「つばきをかけ」）、felle et aceto はマタイ二七・三四 を思わせる（この点はこの一覧の観察）。マタイ二七・三四 の Byz は ὄξος μετὰ χολῆς（酢に胆汁をまぜたもの）で、NA は οἶνον（ぶどう酒）。テルトゥリアヌスの acetum（酢）は Byz の形に合い、口語訳『にがみをまぜたぶどう酒』は NA の形に従う。
- 読者への影響：小 — 「これが、あなたがたがユダから買い取った者だ。これが、葦の棒とこぶしで打たれ、つばきで辱められ、胆汁と酢を飲まされた者だ」。redemistis は「（ユダから）買い取った」で、ユダに銀貨を払って引き渡させたこと。
- 訳での扱い：訳注は付けない。felle et aceto は原文どおり「胆汁（にがみ）と酢」とし、口語訳マタイ二七・三四 の「ぶどう酒」に揃えない（`// ` メモに口語訳との違いを書ける。本の `AGENTS.md` の 23.4・23.6 の扱い）。Iudas は口語訳の「ユダ」。redemistis は二人称複数で、ユダヤ人たちへの呼びかけ。
- 確かめた資料：`page/n91_w1600.jpg` の中（本文、校注 20・21）、`page/n92_w1600.jpg` の上（注 l）。OCR l. 8734–8736、8750–8751、8835–8839。CSEL l. 2114–2116、2134。Migne l. 60367–60374。Byz MAT.csv l. 1020。`node tools/bible.js Matt.27.34 Matt.27.30 Matt.26.67`。

### 30.7 Hic est, quem clam discentes subripuerunt, ut resurrexisse dicatur, vel hortulanus detraxit, ne lactucae suae frequentia commeantium laederentur.（園の番人と、adlaederentur）
- 底本（Oehler）：Hic est, quem clam discentes subripuerunt, ut resurrexisse dicatur, vel hortulanus detraxit, ne lactucae suae frequentia commeantium laederentur.
- ほかの読み（30 章の校注 22〜24、p. 62）：A は surrexisse。A は ortolanus。adlaederentur は AE（A は adlederentur）。CSEL は surrexisse（A。resurrexisse は B）、adlaederentur（A は adlederentur、laederentur は B）と読む（l. 2117–2119、2135）。CSEL の OCR の本文には hortulanus の前の vel がないが、校注に記載がないので、読みとしては挙げない（「未確認」）。Migne は vel hortulanus detraxit、異読に Rigaltius の Adlaederentur（l. 60374–60376、60397）。
- 採る校訂者：注 m（p. 63）は discentes を「弟子たち」とし、『忍耐について』3 章への注を見よとする。注 n（p. 63）は、Rigaltius は Agobardus の写本に従って adlaederentur と刷り、この複合語に似たものはテルトゥリアヌスにたしかにあるが、ここでは、A を書いた人は adlaederentur ではなく adliderentur（打ちつけられる、踏みつけられる）と書こうとしたのではないか、と Oehler は恐れる、と言う。Migne の注 (g)（署名は OCR で「FA.」と崩れていて、だれの注か読めない）は、vel hortulanus detraxit を、キリストが本当に苦しんだことを否む異端（マルキオン、ケルドン、さらに前のバシレイデスと魔術師シモン）をあざける皮肉と見る（l. 60469–60476）。注 (h)（Rigaltius）は、祭りの日に通る人々が畑を荒らさないように地主が土地を分けた例を、アゲヌスのフロンティヌス注から引く（l. 60478–60488）。
- 聖書の形：Oehler も CSEL も箇所を挙げない。discentes subripuerunt はマタイ二八・一三（口語訳『弟子たちが夜中にきて、われわれの寝ている間に彼を盗んだ』。祭司長たちが番兵に言わせた言葉）を、hortulanus はヨハネ二〇・一五 でマリヤがイエスを「園の番人」と思った場面を思わせる（この点はこの一覧の観察）。
- 読者への影響：中 — 「これが、よみがえったと言われるように、弟子たちがこっそり盗み出した者だ。あるいは、園の番人が、見物に行き来する人の群れに自分のレタスを荒らされないように、運び去った者だ」。hortulanus がヨハネ二〇・一五 の「園の番人」を思わせることが分からないと、レタスの話が唐突に見える（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。hortulanus は口語訳ヨハネ二〇・一五 の「園の番人」に揃える。discentes は注 m のとおり「弟子たち」。laederentur は「荒らされる、傷められる」の類い。出典（マタイ二八・一三、ヨハネ二〇・一五）を付けるかは訳者が決める（引用ではなく暗示）。
- 確かめた資料：`page/n91_w1600.jpg` の中（本文、校注 22〜24）、下（校注 24）、`page/n92_w1600.jpg` の上（注 m・n）。OCR l. 8736–8738、8751–8752、8841–8854。CSEL l. 2117–2119、2135。Migne l. 60374–60376、60397、60469–60488。Byz MAT.csv l. 1065、JOH.csv l. 839。`node tools/bible.js Matt.28.13 John.20.15`。

### 30.7 quis tibi praetor aut consul aut quaestor aut sacerdos de sua liberalitate praestabit?（見世物を催す役人）
- 底本（Oehler）：Ut talia spectes, ut talibus exultes, quis tibi praetor aut consul aut quaestor aut sacerdos de sua liberalitate praestabit?
- ほかの読み：Oehler の校注にこの文の異読はない。CSEL、Migne も同じ（l. 2119–2121、60377–60379）。
- 読者への影響：小 — 「こういうものを見、こういうものに躍り上がるのを、どの法務官が、執政官が、財務官が、祭司が、自分の気前のよさで、あなたに与えてくれるだろうか」。ローマでは見世物を政務官や祭司が自分の費用で催したことを踏まえる（この点はこの一覧の観察）。
- 訳での扱い：訳注は付けない。quaestor は訳語表の quaestura「財務官の職」に揃えて「財務官」。sacerdos は 12.5 の「祭司」。consul は『護教論』の訳語表の「執政官」（5.1）。praetor は『護教論』の訳語表にないので「法務官」の類い。de sua liberalitate は「自分の気前のよさから（自腹で）」。
- 確かめた資料：`page/n91_w1600.jpg` の中（本文）、`page/n92_w1600.jpg` の上（本文）。OCR l. 8738–8739、8806。CSEL l. 2119–2121。Migne l. 60377–60379。

### 30.8 Ceterum qualia illa sunt, quae nec oculus vidit nec auris audivit nec in cor hominis ascenderunt?（第一コリント二・九）
- 底本（Oehler）：Et tamen haec iam quodammodo habemus per fidem spiritu imaginante repraesentata. Ceterum qualia illa sunt, quae nec oculus vidit nec auris audivit nec in cor hominis ascenderunt?
- ほかの読み（30 章の校注 25・26、p. 63）：Aβ は Caeterum。A は ascendit。CSEL は ascenderunt と読み、A の ascendit を挙げ、欄外に「1 Cor. 2, 9.」（l. 2121–2124、2136、2127）。Migne も ascenderunt（l. 60379–60384）。
- 聖書の形：第一コリント二・九 のギリシア語（Byz）は「目が見ず、耳が聞かず、人の心にのぼらなかった（ἀνέβη、単数）ものを、神は…備えた」。テルトゥリアヌスは「神は備えた」の部分を引かず、関係文の三句だけを、自分の問いの中に組み込む。A の ascendit（単数）はギリシア語の単数に合い、底本の ascenderunt（複数）は quae（複数）に合わせた形（この点はこの一覧の観察）。口語訳は『目がまだ見ず、耳がまだ聞かず、人の心に思い浮びもしなかったこと』。Oehler は欄外に箇所を挙げない。
- 読者への影響：小 — 「それでも、これらのことを、わたしたちは信仰によって、霊が思い描くのを通して、すでにある仕方で目の前に見ている。だが、目がまだ見ず、耳がまだ聞かず、人の心に思い浮かびもしなかったものは、どれほどのものだろう」。
- 訳での扱い：訳注は付けない。三句は口語訳の文言に揃えて『』に入れ、出典（第一コリント二・九）を付ける（原文がほぼそのまま引くので、ルートの `AGENTS.md` の「そのまま引いているところは、その訳の文言に揃える」）。spiritu imaginante repraesentata は「霊が思い描いて、目の前に示された」の類い。
- 確かめた資料：`page/n92_w1600.jpg` の上（本文、校注 25・26）。OCR l. 8806–8820、8826。CSEL l. 2121–2124、2127、2136。Migne l. 60379–60384。Byz 1CO.csv l. 41。`node tools/bible.js 1Cor.2.9`。

### 30.8 Credo, circo et utraque cavea et omni stadio gratiora.（utraque cavea＝闘技場と劇場）
- 底本（Oehler）：Credo, circo et utraque cavea et omni stadio gratiora.
- ほかの読み（30 章の校注 27、p. 63）：B は caula。A（Aβ）の末尾に EXPLICIT DE SPECTACVLIS とある。CSEL も cauea（caula は B）と読み、A の EXPLICIT を挙げる（l. 2124–2125、2136–2137）。Migne も utraque cavea（l. 60384）。
- 採る校訂者：注 o（p. 63）は utraque cavea を「闘技場と劇場」とし、Lipsius『闘技場について』2 章を見よとする。
- 読者への影響：中 — 「きっと、戦車競走場よりも、二つの観客席（闘技場と劇場）よりも、どの競技場よりも、喜ばしいものだ」。注 o を知らないと、「二つの観客席」が何を指すか分からない。最後の文で、この論で扱った見世物の場（戦車競走場、闘技場、劇場、競技場）を並べ直している。
- 訳での扱い：訳注は付けない。utraque cavea を、本の `AGENTS.md` の 12.8 の utriusque ludi の扱い（「両方の遊戯（剣闘と獣狩り）」と補う）にならって「二つの観客席（闘技場と劇場）」のように補うかは「メインで決めること」（『護教論』の訳語表は cavea を「闘技場の観客席」とする）。circus、stadium は訳語表の「戦車競走場」「競技場」。gratiora は「喜ばしい」の類いで、訳語表の gratia「気に入られること」と分けるかは訳者が決める。
- 確かめた資料：`page/n92_w1600.jpg` の上（本文、校注 27、注 o）。OCR l. 8823、8845–8846、8857–8859。CSEL l. 2124–2125、2136–2137。Migne l. 60384–60385。

---

## 未確認

- 26.2 の nominato tragoedo：Oehler の校注は A（nominatim tragoedo）と E（nominatim tragoedi）だけを挙げ、本文の nominato の出どころを書かない。CSEL は B の読みとする。
- 26.3 の注 e が言う「Ursinus と Junius の推定」：Junius のものは校注 10 の accesserunt だが、Ursinus のどの推定を指すかは確かめていない（校注 9 の Quot は Ursinus の推定で、Oehler はそれを採っている）。
- 27.2 の aestuarium：Oehler の注 a は Gronovius を見よとするだけで、語の意味（声援が沸き返る場のたとえ）はこの一覧の観察。Gronovius は読んでいない。
- 28.3 の quidem・quidam：A の読みを、Oehler は Aβ が quidem、Aφ が quidam と報告し、CSEL は A を quidem とだけ報告する。
- 30.4 の flammis・flammas：B の読みを、Oehler は flammis（BCD）、CSEL は flammas と報告し、食い違う。
- 30.5 の totus rubens：Oehler の校注は totus ruber を AE とするだけで、本文の rubens の出どころを書かない。CSEL は B の読みとする。
- 30.7 の vel hortulanus：CSEL の OCR の本文には vel がないが、校注に記載がなく、OCR の落としか CSEL の読みかは確かめていない。
- 26.3 の Quo：Oehler は「Quo reliqui」とするが、CSEL の校注は quo の出どころを書かない。
- 29.3 の Hae・Haec：Oehler の校注 6 は Haec を A とし、CSEL は本文に haec（A）を採り、hae を B とする。
- 29.4 の Migne の異読の一覧 (5)：OCR が「Sciemiz Rig.」と崩れていて、Rigaltius の読みが読めない。
- 29.5 の Rigaltius の読み：Oehler は parva simul（E）、CSEL（l. 2083）は pauca simul（Rig）と報告し、Migne の異読の一覧（l. 60259）も pauca と読める（OCR が崩れている）。A の読みも、Oehler は par....sint multa（Aβ）、CSEL は par . . sunt multa と報告し、食い違う。
- 29.5 の obumbratam・adumbratam：Oehler は adumbratam を BC とだけ挙げ、CSEL（l. 2084）は adumbratam を本文にして obumbratam を Pamelius の読みとし、Migne の異読の一覧（l. 60262）は Adumbratam を Par.（Pamelius か）と Rig. の読みとする。どれが正しいかは確かめていない。
- 30.6 の quaestuaria：Migne の Le Prieur の注が、どの読みを採るのか、Rigaltius の読みが何かは、OCR が崩れていて読み取れない。
- Oehler の注が送る先（26 章の注 a の『洗礼について』12 章、注 f の 12 章への注、29 章の注 a の 9 章への注、注 b の『サソリの解毒剤』6 章、30 章の注 i の『サソリの解毒剤』3 章、注 m の『忍耐について』3 章など）と、Migne の注が挙げる古代の資料（ヘロディアノス、スエトニウス、ディオ、テオドレトス、アゲヌスなど）は読んでいない。
