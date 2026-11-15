# chapter-43-46 の論点（43-46）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0306_page.jpg`（p. 276）〜`0316_page.jpg`（p. 286）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,40`）・中（`pct:0,30,100,35`）・下（`pct:0,60,100,40`）に切り出し、0316 は `pct:0,58,100,30` でも切り出して、本文・校注・注解を読んだ（切り出しは `/tmp` に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 35348–36959（ページの境は p. 276 が l. 35417、p. 277 が l. 35548、p. 278 が l. 35678、p. 279 が l. 35808、p. 280 が l. 35951、p. 281 が l. 36085、p. 282 が l. 36215、p. 283 が l. 36304、p. 284 が l. 36443、p. 285 が l. 36592、p. 286 が l. 36757）。OCR は校注を細切れにし、λ を 4、A などに崩すので、校注の略号はすべて画像で読んだ。注解は画像で読み、OCR の行番号を添えた。Oehler が注で指す自分の他の注は、同じ OCR で読んだ：『偶像崇拝について』13 章の注 b（consistere。l. 11537、11578–11606）、同 18 章の注 d（forma。l. 12837–12850）、『護教論』37 章の注 c（dispungere。l. 32069–32105）、『迫害における逃亡について』13 章の注 n（fures balnearum。l. 60157–60165）。

校注の番号は章ごとに振り直される。43 章は p. 276 の「Cap. XLIII.」から 1〜15（p. 277 まで）、44 章は p. 277 の「Cap. XLIV.」から 1〜13（p. 278 まで）、45 章は p. 278 の「Cap. XLV.」から 1〜30（p. 280 まで）、46 章は p. 280 の「Cap. XLVI.」から 1〜99（p. 285 まで）で、p. 285 で 1 に戻って 1〜10 と続く（この一覧では後者を「校注 46 章 第二の 1」のように書く）。注解の記号も章ごとで、43 章は a・b（p. 276〜277）、44 章は a〜f（p. 277〜278）、45 章は a〜h（p. 278〜279）、46 章は a〜z（p. 280〜283）のあと、p. 283 で a に戻って a〜o（p. 283〜285）と続く（後者を「第二の注 a」のように書き、どの注もページを添える）。p. 276 の上の校注 38〜41 と注 n・o は 42 章、p. 286 の Cap. XLVII. 以下は 47 章のもので、ここでは扱わない（46.19 の終わりに関わる 47 章の校注 1 だけを 46.19 の項に書く）。

Bindley は OCR l. 8314–8743（43 章 l. 8314、44 章 l. 8327、45 章 l. 8374、46 章 l. 8475。47 章は l. 8746 から）で読んだ。Mayor の注は OCR l. 24990–26370（43 章 l. 24990、44 章 l. 25060、45 章 l. 25231、46 章 l. 25460 から。Mayor の本文のページでは p. 124 l. 3〜p. 130 l. 32）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。読みと区切りを確かめるために、Mayor の本文のラテン語の行だけを `rg` で引いた（l. 7374、7391、7487、7494、7501、7600、7611、7613–7614）。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148）は、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:0,45,100,55` で切り出して読んだ。この範囲の項目は七つある（p. 124 l. 14、l. 27、p. 126 l. 14、l. 26、p. 128 l. 9、l. 20、l. 23。Mayor の注の見出しの行番号で照らすと、それぞれ 44.1、45.1、45.5、46.1、46.5、46.8、46.9 に当たり、その項に書く）。

この範囲に、底本の角括弧・イタリック・ego の推定・短剣符はない。Oehler が乱れている（corrupta）と言う箇所もない。

---

### 43.1・44.1・45.1・46.1 写本の章題と、写本の章の区切り
- 底本（Oehler）：章題は刷らない。欄外の Cap. XLIII.〜XLVI. で章を分ける。
- ほかの読み：43 章は A・B・D・E・G、エアフルト写本、オクスフォード、ウィーン写本で「売春の取り持ちについて」（DE LENOCINIO）の題を持ち、A ではこれが 44 章にあたる。a・b は「キリスト者について不平を言う者たち」（QVI DE CHRISTIANIS CONQVERANTVR）の題を付ける（校注 43 章 Cap. XLIII.）。43.2 の potest の後で、A・B・D・E・F・G、オクスフォード、エアフルト写本、ウィーン写本などは新しい章を始め、「悪霊払いについて」（DE EXORCISMATE）の題を付ける（校注 43 章 10 の後）。44 章は「写本ではふつう 46 章」で、A・B・D・E・G、ウィーン写本、エアフルト写本、オクスフォードは「異教徒の囚人について」（DE CVSTODIIS ETHNICORVM）、a・b は「無実のキリスト者の死から、国がどれほどの損をこうむるか」の題を付ける（校注 44 章 Cap. XLIV.）。45 章は A・B・D・E・G・a・b、ウィーン写本、オクスフォード、エアフルト写本などで「キリスト者の潔白について」（DE INNOCENTIA CHRISTIANORVM）の題（校注 45 章 Cap. XLV.）。46 章の校注には章題の記載がない。
- 採る校訂者：Bindley も Oehler と同じ所で章を分け、章題は付けない（OCR l. 8314、8327、8374、8475）。Mayor も注を同じ区切りで立てる（l. 24990、25060、25231、25460）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。章の番号は本の AGENTS.md のとおり底本の欄外に従う。写本の章番号のずれ（43.2 の途中で章を分けるので、44 章が写本では 46 章になる）は訳に響かない。見出しはこの訳が付ける。写本の章題（取り持ち、悪霊払い、異教徒の囚人、キリスト者の潔白）は内容の目安になる。
- 確かめた資料：Oehler 画像 0306（校注 43 章 Cap. XLIII.、10 の後）、0307（校注 44 章 Cap. XLIV.）、0308（校注 45 章 Cap. XLV.）、0310（校注 46 章）。OCR l. 35447–35451、35507–35508、35569–35577、35713–35714、35767、35973。Bindley OCR l. 8314、8327、8374、8475。Mayor OCR l. 24990、25060、25231、25460。

### 43.1 Plane confitebor, quinam, si forte, vere de sterilitate Christianorum conqueri possint（小さな異読と si forte）
- 底本（Oehler）：Plane confitebor, quinam, si forte, vere de sterilitate Christianorum conqueri possint.
- ほかの読み：confitebor を G は confitebar、オクスフォードは confiteor（校注 43 章 1）。quinam を λ は quoniam、G は quidnam、a〜d は qui conqueruntur. Nam（2）。si forte を a〜d は si qui（3）。possint は A・B・D・F・d、ウィーン写本、Pamelius の写本。E（最初の手）・G・λ・a・b・c・e・f、エアフルト写本は possunt（4）。Bindley は底本と同じ（OCR l. 8316–8317）。
- 採る校訂者：Bindley は de sterilitate を、前の章の infructuosi in negotiis（42.1）を受ける語とする（l. 8339）。Mayor は si forte に 16 章、38 章、41 章などの用例を挙げ、Plane confitebor 以下にアルノビウス 1 巻 24 章（腸卜師や占い師が、自分の術が廃れ、相談者からの施しが減ることを恐れて「神々がないがしろにされている」と叫ぶ）を並べる（l. 24993–25006）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。sterilitas は 42.1・42.3 の infructuosi（既訳「役に立たない」）を受けるので、訳でもそれとつながる言い方にできる。si forte は、本の AGENTS.md で 41.4 が 38:4 と同じ「もしそうなるとすればですが」。ここは「（不平を言える者が）もしいるとすれば」の挿入で、言い回しを揃えるかはメインが決める。
- 確かめた資料：Oehler 画像 0306（本文、校注 43 章 1〜4）。OCR l. 35428–35429、35452–35453、35499–35501。Bindley OCR l. 8316–8317、8339。Mayor OCR l. 24993–25006。

### 43.1 lenones, perductores, aquarioli（語の意味と、λ の harioli）
- 底本（Oehler）：Primi erunt lenones, perductores, aquarioli, tum sicarii …
- ほかの読み：erunt を F・c は sunt（校注 43 章 5）。aquarioli を F は aquariolorum、G は equarii olitu、λ は harioli tum（「占い師、それから」）、Fulvius Ursinus は moecharioli tum（6）。Bindley は底本と同じ（OCR l. 8317–8318）。
- 採る校訂者：注 43 章 a（p. 276。Heraldus と Oehler）は、perductores を、甘言と説得で女や男を連れて行き、他人の情欲に取り持つ者とし、ホラティウス、ギリシア語の προαγωγεύειν、ヘリオドロス、ナジアンゾスのグレゴリオスを挙げる。あるいは道を先に立って連れて行く者の意味かもしれず、両方を兼ねるのかもしれない、とも言う。アスコニウスの「lenones は娼婦の、perductores は望まない者をも取り持つ者で、その淫らな交わりは法で罰せられる」を引く。aquarioli は取り持ち屋の召使いで、浴場に要る水を汲みに行くことから名を得た、とする（Festus など）。Mayor も perductores にキケロ『ウェッレス弾劾』とアスコニウスを、aquarioli に「取り持ち屋の少年」の語釈とアプレイウス『弁明』78 章を挙げる（l. 25008–25018）。
- 読者への影響：小。λ の harioli は、同じ節の後の arioli と重なる。
- 訳での扱い：訳注は付けない。lenones は「取り持ち屋」、perductores は注 a の「（人を）連れ込む者」、aquarioli は注 a の「取り持ち屋の下働き（水汲み）」の意味。語の選び方はメインが決める。
- 確かめた資料：Oehler 画像 0306（本文、校注 43 章 5・6、注 a）。OCR l. 35429–35430、35454、35479–35545。Bindley OCR l. 8317–8318。Mayor OCR l. 25008–25018。

### 43.1 tum sicarii, venenarii, magi, item aruspices, arioli, mathematici. His infructuosos esse magnus est fructus（語順と訳語）
- 底本（Oehler）：tum sicarii, venenarii, magi, item aruspices, arioli, mathematici. His infructuosos esse magnus est fructus.
- ほかの読み：sicarii を A・F、ウィーン写本は secarii、B は sequarii、G は securii（校注 43 章 7）。aruspices, arioli を c・d と Havercamp は arioli aruspices（8）。est fructus は A・B・E・F・G、ウィーン写本、オクスフォード、エアフルト写本。D・a〜f と Havercamp は fructus est（9）。Bindley の本文は item harioli, haruspices, mathematici. His infructuosos esse magnus fructus est（OCR l. 8318–8320）。
- 採る校訂者：Bindley は mathematici を「占星術師」とし、1 章と 35 章の注を参照させる（l. 8343–8344）。Mayor は sicarii に 37 章（この教えのもとでは、殺すより殺されるほうが許されている）、haruspices に 35 章の終わりとアルノビウス 1 巻 46 章、mathematici に 35 章（離反した天使たちが明かし、神が禁じた術）と『偶像崇拝について』9 章（占星術師は、その天使たちが天から追われたように、ローマとイタリアから追われる）を挙げる（l. 25020–25050）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。aruspices は 35:12 の既訳「腸卜師」、magi は訳語表の「魔術師」。mathematici は 35.12 の astrologos（既訳「占星術師」）とは別の語だが、同じ人々を言う（Bindley）。訳し分けるかはメインが決める。sicarius は 44.2 の sicarius と揃える。His infructuosos esse magnus est fructus は infructuosus（役に立たない）と fructus（益、実り）の言葉遊びで、42.1・42.3 の「役に立たない」を受ける。
- 確かめた資料：Oehler 画像 0306（本文、校注 43 章 7〜9）。OCR l. 35430–35431、35455、35505–35506、35512–35513。Bindley OCR l. 8318–8320、8343–8344。Mayor OCR l. 25020–25050。

### 43.2 cum aliquo praesidio conpensari potest. Quanti habetis … daemonia excutiant … preces sternant（preces sternant の意味）
- 底本（Oehler）：Et tamen quodcunque dispendium est rei vestrae per hanc sectam, cum aliquo praesidio conpensari potest. Quanti habetis, non dico qui iam de vobis daemonia excutiant, non dico iam qui pro vobis quoque vero deo preces sternant, quia forte non creditis, sed a quibus nihil timere possitis?
- ほかの読み：cum aliquo を λ・f と Havercamp は cum aliquo utique（校注 43 章 10）。potest の後で写本が新しい章を始めることは上の項。Quanti は A・B・D・E・F・G・λ・f、Bongars の写本、エアフルト写本、ウィーン写本。a〜e とヴァティカンの写本の一つは Quantos（11）。dico qui を λ・f と Havercamp は dico iam qui（12）。excutiant を λ は discutiant（13）。quoque vero deo preces sternant を F は deo quoque vero preces sternant、λ は quoque deo vero preces fundant（「祈りを注ぐ」。14）。quia forte non creditis を λ・f は欠く（15）。Bindley の本文は cum aliquo utique praesidio … Quanti habetis, non dico qui jam … timere possitis.（OCR l. 8320–8325）。
- 採る校訂者：注 43 章 b（p. 277）は preces sternant を「珍しい言い方」とし、地にひれ伏す（sterni）のは嘆願する者のすることなので、テルトゥリアヌスは嘆願する者の祈りそのものを sterni と言う、とする。アルノビウス 1 巻 27 章（わたしたちは皆ならわしどおりこの方の前にひれ伏し、祈りを合わせて拝む）を挙げる。Mayor は sternant を「（祈りを）その方の足もとに置く」とし、daemonia に 32 章・37 章の終わり、vero deo に 29 章・30 章・33 章、preces に 31・32 章を挙げる（l. 25051–25057）。Bindley は de vobis daemonia excutiant に 23・32・37 章、a quibus nihil timere possitis に 37 章を挙げる（l. 8346–8347）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Quanti habetis は価値の属格で「どれほど重んじるか」。daemonia は訳語表どおり「ダイモン」、de vobis … excutiant は「あなたがたから追い出す」。preces sternant は注 b のとおり、ひれ伏して祈りをささげる言い方。dispendium は「損失」で、44.1 の detrimentum、iniuria とは別の語。quia forte non creditis の forte は「おそらく」。
- 確かめた資料：Oehler 画像 0306（本文、校注 43 章 10〜12）、0307（本文、校注 43 章 13〜15、注 b）。OCR l. 35431–35433、35507–35517、35551–35553、35566–35567、35584–35596。Bindley OCR l. 8320–8325、8346–8347。Mayor OCR l. 25051–25057。

### 44.1 At enim illud detrimentum … nemo circumspicit, illam iniuriam civitatis nullus expendit, cum tot iusti impendimur, cum tot innocentes erogamur（impendimur・erogamur の意味）
- 底本（Oehler）：At enim illud detrimentum reipublicae tam grande quam verum nemo circumspicit, illam iniuriam civitatis nullus expendit, cum tot iusti impendimur, cum tot innocentes erogamur.
- ほかの読み：At enim を D・G は Etenim（校注 44 章 1）。reipublicae を F は rei（2）。tam grande quam verum を λ は tam verum tam grande（3）。iniuriam を F とウィーン写本は incuriam、expendit を F は expedit（4）。cum を D は欠く（5）。erogamur を E とエアフルト写本は erogamus（6）。Bindley は底本と同じ（OCR l. 8329–8332）。Mayor は p. 148 の一覧で「p. 124 l. 14 expendimur (??)」とし、疑いの印を二つ付けて、impendimur の代わりに expendimur（前の expendit と同じ語）を考える（Mayor の本文は impendimur。OCR l. 7374）。
- 採る校訂者：注 44 章 a（p. 277）は、impendere と erogare はテルトゥリアヌスでは同じ意味の語で、erogare は impendere, consumere, perdere（費やす、使い尽くす、滅ぼす）の意味だとする。『蠍の毒の解毒剤』6 章、『偶像崇拝について』5 章、『見世物について』12 章（剣闘を覚えさせた者たちを、墓のそばで erogabant＝殺した）、『マルキオン反駁』2 巻 14 章・26 章、『見世物について』19 章（罪人が「これほどむごく impendatur」）、『諸国民へ』1 巻 10 章を挙げる。Bindley も erogare を、本来の「費やす」から、命を費やす「滅ぼす」の意味とし、48 章、『見世物について』12 章などを挙げる（l. 8349–8350）。Mayor は impendimur と erogamur に同じ箇所と『スカプラへ』4 章（これほどの潔白、正しさ、貞潔のために、わたしたちは焼かれる）を挙げる（l. 25063–25093）。
- 読者への影響：小〜中 — impendimur、erogamur は「費やされる」の形で、処刑されることを言う。前の nullus expendit（だれも量らない）と impendimur は語呂合わせになっている。
- 訳での扱い：訳注は付けない。At enim は、相手の言い分ではなく著者の側の主張なので、本の AGENTS.md（16.2、38.2）のとおり「しかし実際、」。iniuria は訳語表の「損」（3.5、40.5、42.1）に揃えられる（Mayor も 40.5 の注でこの箇所を並べる。chapter-40-42.md の 40.5 の項）。impendimur、erogamur は注 a のとおり、命を「費やされる」＝殺される意味。expendit との響き合いを訳でどう残すかはメインが決める。
- 確かめた資料：Oehler 画像 0307（本文、校注 44 章 1〜6、注 a）。OCR l. 35555–35557、35577–35578、35598–35646。Bindley OCR l. 8329–8332、8349–8350。Mayor 画像 0172（p. 148）。Mayor OCR l. 7374、25063–25093。

### 44.1 Vestros enim iam contestamur actus, qui cotidie iudicandis custodiis praesidetis, qui sententiis elogia dispungitis（dispungitis の意味）
- 底本（Oehler）：Vestros enim iam contestamur actus, qui cotidie iudicandis custodiis praesidetis, qui sententiis elogia dispungitis.
- ほかの読み：elogia を A・B は eologia、F・G、ウィーン写本は（いつもどおり）eulogia と書き、この後も同じ（校注 44 章 7）。Bindley は底本と同じ（OCR l. 8332–8334）。
- 採る校訂者：注 44 章 b（p. 277）は dispungitis を 37 章の注に送る。37 章の注 c（p. 250）で Oehler は、dispungi を repensari（報いとして清算される）とし、その例の最初にこの qui sententiis elogia dispungitis を挙げる。続けて、dispungere はもともと受け取ったものと与えたものを突き合わせることなので、しばしば examinare（吟味する）の意味にもなる、とし、その例に 45.7 の dispungimur を挙げる（OCR l. 32069–32089）。Bindley は dispunctio について 18 章の注、elogium について 2 章の注、custodiis について 9 章の注を参照させる（l. 8352–8355）。Mayor は custodiis を「囚人」の意味とし、9 章の in auditione custodiarum、セネカ、使徒行伝二七・一（ウルガタ）を挙げる。sententiis elogia dispungitis について、Woodham の英訳（判決を下して、罪人の名と罪状を記録から消す）を引き、dispungere の用例（18 章、37 章、45 章、『学説彙纂』の「dispungere とは受け取ったものと与えたものを照らし合わせること」）を挙げる。actus に 5 章の「あなたがたの記録を調べよ」を挙げる（l. 25095–25153）。
- 読者への影響：小〜中 — dispungitis の取り方で、「判決によって罪状に決着をつける」「罪状を一つずつ片づける」と言い方が変わる。
- 訳での扱い：訳注は付けない。注 b が送る 37 章の注 c に従い、dispungitis は「判決によって罪状を清算する（決着をつける）」の意味で訳す。37:3 の dispungi の既訳と揃えるかはメインが決める。45.7 の dispungimur は同じ注で「吟味する」の例とされるので、訳し分けることになる。elogium は訳語表どおり「罪状」。custodiis は 9:16 の既訳「牢につながれた者たち」に揃えられる。contestamur actus は「あなたがたの（審理の）記録を証人に呼ぶ」。
- 確かめた資料：Oehler 画像 0307（本文、校注 44 章 7、注 b）。OCR l. 35557–35559、35579、35621、35649–35650、32069–32089。Bindley OCR l. 8332–8334、8352–8355。Mayor OCR l. 25095–25153。

### 44.2 Tot a vobis nocentes … quis manticularius, quis sacrilegus aut corruptor aut lavantium praedo, quis ex illis etiam Christianus adscribitur?（語の意味と、λ の idem）
- 底本（Oehler）：Tot a vobis nocentes variis criminum elogiis recensentur: quis illic sicarius, quis manticularius, quis sacrilegus aut corruptor aut lavantium praedo, quis ex illis etiam Christianus adscribitur?
- ほかの読み：Tot を λ は Quot（校注 44 章 8）。quis ex illis etiam Christianus を λ・f と Havercamp は idem etiam Christianus（「その同じ者が、キリスト者としても書き加えられるか」。9）。Bindley の本文は idem etiam Christianus adscribitur（OCR l. 8334–8337）。
- 採る校訂者：注 44 章 c（p. 277）は manticularius について Festus を引く。「小さな袋（manticula）は、貧しい者が銭をしまうのに今も使う。そこで、盗むために小袋に手を出す者が manticularii と呼ばれた」。古い語彙集の「manticulare＝だます、欺く」「manticulatio＝ごまかし、または取り持ち」も挙げる。注 d は lavantium praedo を『迫害における逃亡について』13 章の注に送る。その注 n で Oehler は、そこに挙がる fures balnearum（浴場の泥棒）を「『護教論』44 章で lavantium praedones と言われる者」とし、『学説彙纂』47 巻 17 章「浴場の泥棒について」などを挙げる（OCR l. 60157–60165）。Bindley も lavantium praedo を「ごくありふれた泥棒」とし、同じ『学説彙纂』の節を挙げる（l. 8357–8358）。Mayor は manticularius に碑文の例を、lavantium praedo に『迫害における逃亡について』13 章とディオゲネス・ラエルティオス 6 巻 52 節（浴場で外套を盗んだ若者）を挙げる（l. 25157–25167）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。manticularius は注 c のとおり「財布を狙う盗人、すり」、lavantium praedo は「湯あみする人のものを奪う者」（浴場の泥棒）。sacrilegus は訳語表の「神聖を汚す者」。corruptor は 46.12 の Socratem corruptorem adolescentium と同じ語（そこでは「若者を堕落させる者」）で、ここは「誘惑する者、堕落させる者」。訳語を揃えるかはメインが決める。adscribitur は罪状の帳簿に「書き加えられる」。
- 確かめた資料：Oehler 画像 0307（本文、校注 44 章 8・9、注 c・d）。OCR l. 35559–35562、35622、35626、35653–35672、60157–60165。Bindley OCR l. 8334–8337、8357–8358。Mayor OCR l. 25157–25167。

### 44.3 aut cum Christiani suo titulo offeruntur, quis ex illis etiam talis quales tot nocentes?（titulus と、λ の別の読み）
- 底本（Oehler）：aut cum Christiani suo titulo offeruntur, quis ex illis etiam talis quales tot nocentes?
- ほかの読み：aut cum を λ は proinde cum（校注 44 章 10）。quales tot nocentes? を λ は qualis etiam notatur nomine?（「その名で記される者が、どんな者か」。11）。Bindley は底本と同じ（OCR l. 8337、8367）。
- 採る校訂者：Bindley は suo titulo offeruntur を「彼らに固有の罪名、つまりキリスト者であることで訴え出られる」とし、titulus を罪状（elogium）を短く記したものとして、スエトニウス『カリグラ伝』32 章（罰の理由を示す札が先に立つ）、マルコ一五・二六（ウルガタの「罪状書き」）を挙げる。訴えられたキリスト者の罪名は「キリスト者」だけのことも、「国家の敵」（35 章）、「無神論者」のこともあった、と注する（l. 8360–8394）。Mayor はエウセビオス『教会史』5 巻 1 章 44 節（「これはキリスト者アッタロスである」と書いた札を前に持たせて円形闘技場を引き回された）を、offeruntur に 2 章のトラヤヌスの返書（訴え出られた者は罰せよ）と 21 章の oblatum Pontio Pilato を挙げる（l. 25169–25182）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。offeruntur は訳語表の offerri「訴え出られる」。suo titulo は「自分たちの罪名で」（キリスト者という名で）。
- 確かめた資料：Oehler 画像 0307（本文、校注 44 章 10・11）、0308（本文）。OCR l. 35562–35565、35623、35635。Bindley OCR l. 8337、8360–8394、8367。Mayor OCR l. 25169–25182。

### 44.3 De vestris semper aestuat carcer … munerarii noxiorum greges pascunt（注 e・f と『オクタウィウス』35 章）
- 底本（Oehler）：De vestris semper aestuat carcer, de vestris semper metalla suspirant, de vestris semper bestiae saginantur, de vestris semper munerarii noxiorum greges pascunt.
- ほかの読み：semper bestiae を λ は etiam bestiae（校注 44 章 12）。Bindley は底本と同じ（OCR l. 8367–8370）。
- 採る校訂者：注 44 章 e（p. 278）は、ミヌキウス『オクタウィウス』35 章の終わり（要するに、牢獄はあなたがたの仲間であふれかえっている。そこにキリスト者は、自分の宗教のゆえに訴えられた者か逃げた者のほかにいない）と、ラクタンティウス 5 巻 9 章を挙げる。注 f は、見世物を催す者（munerarii）は罪人を剣闘のために買い取り、より頑丈になるように太らせた、とし、タキトゥス『同時代史』2 巻 88 章（剣闘士の肥育食のように兵に食べ物を配った）と、キプリアヌスの「剣闘の見世物が用意される。……体は、太らされて罰の中でいっそう高くついて滅びるように、強い食べ物で満たされる」を挙げる（Heraldus）。Bindley は munerarii を「剣闘の見世物を催す者」とする（l. 8396）。Mayor は『スカプラへ』2 章、ラクタンティウス 5 巻 9 章、『オクタウィウス』35 章 5〜6 節を、metalla に 27 章の注を、aestuat にルフィヌスを挙げる（l. 25184–25223）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。aestuat carcer は『オクタウィウス』35:6 の既訳「牢獄はあなたがたの仲間であふれかえっています」と言い回しを揃えられる。metalla は 12:4 の既訳「鉱山」。noxii は訳語表の「罪人」（15.4）。saginantur、pascunt は注 f のとおり、見世物で死なせるために「太らせる」「養う」。
- 確かめた資料：Oehler 画像 0308（本文、校注 44 章 12、注 e・f）。OCR l. 35684–35686、35711、35728–35745、35786–35787。Bindley OCR l. 8367–8370、8396。Mayor OCR l. 25184–25223。`books/octavius/src/chapter-33-36/both.md`（35.6 と 35:6）。

### 44.4 Nemo illic Christianus, nisi plane tantum Christianus, aut si et aliud, iam non Christianus（λ の hoc と、第一ペテロ四章）
- 底本（Oehler）：Nemo illic Christianus, nisi plane tantum Christianus, aut si et aliud, iam non Christianus.
- ほかの読み：nisi plane tantum Christianus, aut を λ・f と Havercamp は nisi hoc tantum, aut（校注 44 章 13）。Bindley の本文は nisi hoc tantum（OCR l. 8370–8371）。
- 採る校訂者：Bindley は Nemo illic Christianus に第一ペテロ四・一五〜一六、39 章の注、46.18 の desinunt tum Christiani haberi penes nos、『オクタウィウス』35 章を挙げる（l. 8397–8400）。Mayor は non Christianus に Oehler の 2 章の注（p. 117 の g）を、事柄に 46.18 の Sed dicet aliquis … desinunt tum Christiani haberi penes nos を挙げる（l. 25225–25228）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。46.18 の Desinunt tamen Christiani haberi penes nos と同じ考え（教えから外れた者は、もうキリスト者とみなされない）なので、二つの訳を響き合わせられる。第一ペテロ四・一五〜一六（口語訳「あなたがたのうち、だれも、人殺し、盗人、悪を行う者、あるいは、他人に干渉する者として苦しみに会うことのないようにしなさい。しかし、クリスチャンとして苦しみを受けるのであれば、恥じることはない」）は Bindley が挙げる近い箇所で、引用ではないので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0308（本文、校注 44 章 13）。OCR l. 35686–35687、35766。Bindley OCR l. 8370–8371、8397–8400。Mayor OCR l. 25225–25228。`node tools/bible.js 1Pet.4.15-16`。

### 45.1 Innocentiam a deo edocti et perfecte eam novimus … ab incontemptibili dispectore mandatam（dispector の意味）
- 底本（Oehler）：Nos ergo soli innocentes. Quid mirum, si necesse est? Enimvero necesse est. Innocentiam a deo edocti et perfecte eam novimus, ut a perfecto magistro revelatam, et fideliter custodimus, ut ab incontemptibili dispectore mandatam.
- ほかの読み：Innocentiam を F とウィーン写本は Innocentia（校注 45 章 1）。a deo を λ は a deo doctore et（「教師である神から」。2）。incontemptibili を λ は intemptibili、D・a は inconceptibili（3）。dispectore は A・B・D・E・F・G・b・d・f、ゴルツェ写本、エルノンとガンの写本、エアフルト写本、ウィーン写本、ヴァティカンの写本の一つ。a・c・d は dispensatore（「分け与える方」）、λ は deo doctore（4。d は両方の側に刷られている。画像 0308 を拡大して確かめた）。mandatam を λ は praeceptam（5）。Bindley は底本と同じ（OCR l. 8376–8379）。Mayor は p. 148 の一覧で「p. 124 l. 27 perfecto (?)」とする（Mayor の本文の p. 124 l. 27 は Innocentiam a deo edocti et perfecte の行。OCR l. 7391。何を perfecto に替えるのかは一覧に書かれていない。末尾の「未確認」）。
- 採る校訂者：注 45 章 a（p. 278）は dispectore を「すなわち裁き手（iudex）」とし、『魂について』15 章「心を見極める方、神」、『妻へ』2 巻 8 章、『魂の証言について』2 章「神を否みはしないが、見極める方、審判者、裁き手とは思わない人々がいる」を挙げ、dispicere は裁き手のすることで、しばしば examinare, iudicare（吟味する、裁く）の意味に使われる、とする。Bindley は dispectore を、教父のラテン語にだけある語で「見る方」、下の（45.7 の）omnium speculator と同じ、とする（l. 8402–8403）。Mayor は incontemptibili を一度だけの語とし、dispectore に 49 章の初め（永遠の罰への恐れと永遠の慰めへの望みで、信じる者はよくなる）、『魂の証言について』2 章などを挙げる。necesse に 33 章を挙げ、innocentiam に 40 章の innocentiae magistrum（40.10）を並べる（l. 25236–25294）。
- 読者への影響：小〜中 — dispector を「裁き手」と取るか（Oehler）、「見る方」と取るか（Bindley）で、神の描き方が少し変わる。
- 訳での扱い：訳注は付けない。dispector は注 a に従い、裁き手として見極める神を言う語で訳す。ただし訳語表の iudex「裁き手」、arbiter「審判者」（23.18）、45.7 の speculator（『オクタウィウス』32:9 の既訳「すべてを見張る方」）とは別の語なので、訳し分け方はメインが決める。perfecto magistro は 40.10 の innocentiae magistrum（既訳を参照）と同じ考えの「師」。Enimvero は 45.7 の Enimvero と同じ語。
- 確かめた資料：Oehler 画像 0308（本文、校注 45 章 1〜5、注 a）。OCR l. 35689–35694、35715、35718、35749–35750、35768–35773、35789–35798。Bindley OCR l. 8376–8379、8402–8403。Mayor 画像 0172（p. 148）。Mayor OCR l. 7391、25236–25294。

### 45.2 humana aestimatio … nec plenae nec adeo timendae estis disciplinae … Tanta est prudentia hominis … quanta auctoritas（λ・f の問いの形）
- 底本（Oehler）：Vobis autem humana aestimatio innocentiam tradidit, humana item dominatio imperavit; inde nec plenae nec adeo timendae estis disciplinae ad innocentiae veritatem. Tanta est prudentia hominis ad demonstrandum bonum quanta auctoritas ad exigendum; tam illa falli facilis quam ista contemni.
- ほかの読み：aestimatio を c は existimatio、λ は doctrina（校注 45 章 6）。dominatio を a は damnatio（7）。nec plenae nec adeo を a は nec plene adeo、F・G、ウィーン写本は plane nec adeo（8）。disciplinae を D・E、エアフルト写本、オクスフォードは o disciplinae（9）。Tanta est を Havercamp は Quanta est、λ は Quanta（10）。demonstrandum bonum quanta を λ・f と Havercamp は demonstrandum quid vere bonum? quanta（λ は tanta）、オクスフォードは demonstrandum veritatem quanta（11）。illa を F とウィーン写本は ita（12）。falli を D・a は欠く（13）。Bindley の本文は Quanta est prudentia hominis ad demonstrandum quid vere bonum? quanta auctoritas ad exigendum? tam illa falli facilis, quam ista contemni.（OCR l. 8419–8422）。
- 採る校訂者：Bindley は nec plenae nec adeo timendae を、異教の倫理は良心と魂に届かず、軽んじる者に恐れも起こさず、完全でも罰に裏打ちされてもいなかった、と注する（l. 8405–8414）。
- 読者への影響：小 — 底本では「善を示す人の分別は、それを求める権威と同じほど（どちらも小さい）」という比べ方で、Bindley などの本文では二つの問い（「人の分別に、何が本当に善いかを示すどれほどの力があるか。求めるどれほどの権威があるか」）になる。どちらも人の法の弱さを言う。
- 訳での扱い：訳注は付けない。底本の Tanta … quanta … で訳す。estis disciplinae は性質の属格で、「あなたがたの持つ教えは、潔白の真実に至るには、満ち足りたものでも、それほど恐れられるものでもない」の意味。disciplina は訳語表どおり「教え」。illa は prudentia、ista は auctoritas を受ける。
- 確かめた資料：Oehler 画像 0308（本文、校注 45 章 6〜13）。OCR l. 35694–35701、35718–35723、35751–35755、35774–35778。Bindley OCR l. 8380–8381、8405–8414、8419–8422。

### 45.3–45.4 dicere: Non occides, an docere: Ne irascaris quidem? … an nec vicem iniuriae sinere?（マタイ五章との近さと、注 b）
- 底本（Oehler）：Atque adeo quid plenius, dicere: Non occides, an docere: Ne irascaris quidem? Quid perfectius, prohibere adulterium, an etiam ab oculorum solitaria concupiscentia arcere? Quid eruditius, de maleficio, an et de maliloquio interdicere? Quid instructius, iniuriam non permittere, an nec vicem iniuriae sinere?
- ほかの読み：dicere を λ・f と Havercamp は dictum est、G は plenius の代わりに peius（校注 45 章 14）。an docere を λ・f と Havercamp は an vero（15）。irascaris を a は irasceris（16）。ab oculorum solitaria concupiscentia は A・B・D・E・F・λ・a・d・e・f、エアフルト写本、ウィーン写本、オクスフォード、Pamelius の写本。G・b・c、ゴルツェ写本は ab oculis solitariam concupiscentiam（17）。et de maliloquio の et を D・a・b と Havercamp は欠く（18）。Bindley の本文は quid plenius dictum est: non occides, an vero: ne irascaris quidem? … de maleloquio …（OCR l. 8422–8427）。
- 採る校訂者：注 45 章 b（p. 278〜279）は an nec vicem iniuriae sinere? を「害を加えないだけでなく、仕返しもしない」とし、『マルキオン反駁』2 巻 28 章（われらの神は目には目をと求める。あなたがたの神も、仕返しを禁じることで、かえって害を重ねさせる）、同 2 巻 18 章、4 巻 31 章、4 巻 16 章（キリストは仕返しさえ抑えて、新しい忍耐を教える）、『肉の復活について』8 章、『洗礼について』12 章、37 章（害を受けても仕返しを禁じられている。37.1）を挙げる。Mayor は oculorum に『諸国民へ』1 巻 4 章（目でも汚さない貞潔）、ユウェナリス 13 巻、偽プロスペル、サルウィアヌスを、solitaria の用例をラクタンティウス、ミヌキウスなどから、maliloquio に『見世物について』2 章などを、vicem iniuriae に『マルキオン反駁』4 巻 16 章、2 巻 28 章、ラクタンティウス 6 巻 18 章（害を加えないだけでなく、加えられた害に報復しない）を挙げる（l. 25305–25346）。Oehler・Bindley・Mayor の注は、この節にマタイ五章を挙げていない。
- 読者への影響：小〜中 — 文の組み立ては、マタイ五・二一〜二二、二七〜二八、三八〜三九の、律法とキリストの教えの対比に当たる（資料の注にはない）。口語訳は「『殺すな。殺す者は裁判を受けねばならない』と言われていたことは、あなたがたの聞いているところである。しかし、わたしはあなたがたに言う。兄弟に対して怒る者は、だれでも裁判を受けねばならない」（五・二一〜二二）、「『姦淫するな』と言われていたことは……だれでも、情欲をいだいて女を見る者は、心の中ですでに姦淫をしたのである」（五・二七〜二八）、「『目には目を、歯には歯を』と言われていたことは……悪人に手向かうな」（五・三八〜三九）。Non occides は十戒の文言でもある（出エジプト二〇・一三、口語訳「あなたは殺してはならない」）。
- 訳での扱い：訳注は付けない。dicere: Non occides、docere: Ne irascaris quidem は、底本がコロンと大文字で刷る。Non occides は聖書の文言そのものなので、口語訳のマタイ五・二一に揃えて『殺すな』とできる。Ne irascaris quidem は聖書の言い換えで、『』と出典をどう付けるかはメインが決める（下の「メインで決めること」）。iniuria は、ここでは人に加える害（37:1 の既訳「害を受けても仕返しを禁じられています」）で、44.1 の iniuria（訳語表の「損」）とは意味が違う。solitaria concupiscentia は「目だけの情欲」（行いを伴わず、見るだけの欲）。maleficium と maliloquium は「悪い行い」と「悪い言葉」の対。
- 確かめた資料：Oehler 画像 0308（本文、校注 45 章 14〜18、注 b）、0309（注 b の続き）。OCR l. 35701–35708、35724–35725、35756–35759、35779–35782、35800–35805、35852–35863。Bindley OCR l. 8422–8427。Mayor OCR l. 25305–25346。`node tools/bible.js Exod.20.13 Matt.5.21-22 Matt.5.27-28 Matt.5.38-39`。

### 45.4 Dum tamen sciatis ipsas leges quoque vestras … de divina lege, ut antiquiore forma, mutuatas（forma の意味）
- 底本（Oehler）：Dum tamen sciatis ipsas leges quoque vestras quae videntur ad innocentiam pergere de divina lege, ut antiquiore forma, mutuatas.
- ほかの読み：leges quoque は A・B・D・E・F・f、エアフルト写本、オクスフォード、ウィーン写本。a〜e は quoque leges、G は leges（校注 45 章 19）。ut を F とウィーン写本は et、D は aut（20）。antiquiore forma mutuatas は Aβ・E・F・e、ウィーン写本（antiquiori）、エアフルト写本。b・d、ゴルツェ写本、ヴァティカンの写本の一つは antiquioris formae mutuatas、(Aφ B D)・c・f、Havercamp、Latinius は antiquiore formam mutuatas、λ は antiquiorem formam mutuatas、G は antiquioris formas mutuatas、a と Fulvius Ursinus は antiquiore ferme mutuatas（21）。Bindley の本文は ut antiquiore formam mutuatas（OCR l. 8427–8429）。
- 採る校訂者：注 45 章 c（p. 279。Heraldus）は「より古い形とテルトゥリアヌスが呼ぶのは、いわば ἀρχέτυπον（原型）のことだ」とする。
- 読者への影響：小 — 底本では「より古い原型である神の法から借りた」、formam の読みでは「より古い神の法から、その形を借りた」。
- 訳での扱い：訳注は付けない。forma は注 c のとおり「原型、ひな型」の意味で、訳語表の forma「決まり」（2:9、2:14）や 46.2 の forma（仕方）とは意味が違う。Dum tamen sciatis は「ただし、知っておいてください」の但し書き。
- 確かめた資料：Oehler 画像 0308（本文、校注 45 章 19）、0309（本文、校注 20・21、注 c）。OCR l. 35763、35783、35809–35810、35823–35827、35865–35867、35880–35883、35898–35899。Bindley OCR l. 8427–8429。

### 45.5 Diximus iam de Moysi aetate. Sed quanta auctoritas … delitiscenti … ex voluntate vel necessitate delinquenti?（与格の分詞と、ex involuntate）
- 底本（Oehler）：Diximus iam de Moysi aetate. Sed quanta auctoritas legum humanarum, cum illas et evadere homini contingat et plerumque in admissis delitiscenti, et aliquando contemnere ex voluntate vel necessitate delinquenti?
- ほかの読み：Moysi は D・E・F・G・λ・d、ウィーン写本、エアフルト写本、Pamelius の写本。A・B は Moysei、a・b・c・e・f と Havercamp は Moysis か Mosis（校注 45 章 22）。cum illas et は F・λ・f、ウィーン写本。A・B・G、アンブロジアーナ写本、Bongars の写本は cum illa sed、E、エアフルト写本は cum illa sed si、d は cum illas etsi、e は quam illas etsi、D は cum ista sed si、a・b・c は cum istas（c は ista。23）。et（plerumque）を (λ)・f と Havercamp は欠く（24）。delitiscenti について、F・λ・f と Havercamp は delitescenti、A・B・G、ウィーン写本、オクスフォードは delitiscendi、D・E、エアフルト写本は delitescendi、a〜e は delitescere（25）。ex voluntate は A・B・D・E・F・G・λ・c・d・e、Bongars の写本、エアフルト写本、オクスフォード、ウィーン写本。a・b は in voluntate、f と Havercamp、Latinius は ex involuntate（26）。delinquenti は f と Havercamp。A は deliquendi、ほかはすべて delinquendi（27）。Bindley の本文は Diximus jam de Mosis aetate. Sed quanta auctoritas … quum illas et evadere homini contingat, et plerumque in admissis delitescere, et aliquando contemnere ex voluntate vel necessitate delinquendi, recogitata etiam brevitate supplicii …（45.6 までを一つの問いにする。OCR l. 8430–8435）。Mayor は p. 148 の一覧で「p. 126 l. 14 inuoluntate」とし、ex involuntate を好む。
- 採る校訂者：注 45 章 d（p. 279）は Diximus iam de Moysi aetate を 19 章に送り、属格の Moysi について Eckstein を挙げる。Bindley も 19 章を挙げ、contingat に 19 章の断片の注を参照させる（l. 8442–8444）。Mayor は Diximus に 19 章と偽ユスティノス『ギリシア人への勧告』などを、quanta をファエドルスの quantum est laboris!（なんと大きな……）と同じ用法とし、involuntate を Latinius の推定で、辞書に載っている語と紹介する（l. 25348–25358）。
- 読者への影響：小 — 底本では、delitiscenti と delinquenti は homini にかかる与格の分詞で、「罪の中に隠れる人には法を逃れることが、自分の意志から、または必要に迫られて罪を犯す人には法を軽んじることが、起こる」の形になる。写本の大勢の delinquendi（動名詞の属格）や Bindley の delitescere（不定詞）でも、意味はほとんど変わらない。ex involuntate なら「心ならずも、または必要に迫られて」。
- 訳での扱い：訳注は付けない。底本の与格の分詞と ex voluntate で訳す。Moysi は名前の表どおり「モーセ」で、19 章の論に送る文（「モーセの時代については、もう述べました」など）。quanta auctoritas … ? は修辞疑問で、人の法の権威の小ささを言う（Mayor のいう「なんと大きな」の皮肉）。
- 確かめた資料：Oehler 画像 0309（本文、校注 45 章 22〜27、注 d）。OCR l. 35810–35813、35830–35837、35869–35871、35884–35890、35900–35908。Bindley OCR l. 8430–8435、8442–8444。Mayor 画像 0172（p. 148）。Mayor OCR l. 25348–25358。

### 45.6 Recogitate ea etiam pro brevitate supplicii cuiuslibet, non tamen ultra mortem remansuri（命令の文か、前の問いの中の奪格か）
- 底本（Oehler）：Recogitate ea etiam pro brevitate supplicii cuiuslibet, non tamen ultra mortem remansuri.
- ほかの読み：Recogitate ea etiam pro brevitate は A・D・E、アンブロジアーナ写本、エアフルト写本、オクスフォード、Bongars の写本。B・G は recogitata ea etiam pro brevitate、F、ウィーン写本、Havercamp は recogitata etiam pro brevitate、c・d・e は Recogitata etiam brevitate、a・b は recogitat etiam pro brevitate、f は Recogitate etiam pro brevitate、λ は Recogitate etiam pro veritate、Fulvius Ursinus は Recogitata enim brevitate（校注 45 章 28）。Bindley の本文は（前の文に続けて）… delinquendi, recogitata etiam brevitate supplicii cujuslibet, non tamen ultra mortem remansuri?（奪格の独立句にして、45.5 の問いに入れる。OCR l. 8433–8435）。
- 採る校訂者：注 45 章 e（p. 279）は「わたしが言ったことを吟味し、どんな刑罰も短いことに照らして量ってみよ、と著者は言う。そうすれば、そこから人の法の権威がさらに減ることが分かるだろう」と言い換える。Mayor は recogitare をまれな語とし、『殉教者たちへ』2 章、プラウトゥス、キケロなどを挙げる（l. 25359–25360）。
- 読者への影響：小〜中 — 底本では、あなたがたへの命令の文として独立し、Bindley などの本文では、前の問いの中の「刑罰の短さも考え合わせると」になる。どちらも、死の後まで続かない人の刑罰は恐ろしくない、という論は同じ。
- 訳での扱い：訳注は付けない。注 e に従い、二人称複数の命令として、ea（これまで述べたこと）を「どんな刑罰も、死を越えては続かない短いものであることに照らして、思い直してください」の形で訳す。remansuri は supplicii にかかる未来分詞。本の AGENTS.md の文型（recogitare に続く ne の見込みの形）には当たらない（ここに ne はない）。
- 確かめた資料：Oehler 画像 0309（本文、校注 45 章 28、注 e）。OCR l. 35813–35815、35891–35894、35911–35913、35873–35877。Bindley OCR l. 8433–8435。Mayor OCR l. 25359–25360。

### 45.6 Sic et Epicurus omnem cruciatum doloremque depretiat（depretiat の意味）
- 底本（Oehler）：Sic et Epicurus omnem cruciatum doloremque depretiat, modicum quidem contemptibilem pronuntiando, magnum vero non diuturnum.
- ほかの読み：校注に異読はない。Bindley は底本と同じ（OCR l. 8435–8437）。
- 採る校訂者：注 45 章 f（p. 279）はディオゲネス・ラエルティオス 10 巻、プルタルコス『若者はどのように詩を学ぶべきか』p. 36 B、マルクス・アウレリウス『自省録』7 巻（Oehler は 5 と 38 と記す）、キケロ『善と悪の究極について』2 巻 7 章を挙げる。注 g は depretiat を「削って小さくする、値打ちや重みを下げる」とし、『諸国民へ』1 巻 10 章、『見世物について』22 章、『妻へ』1 巻 3 章、『マルキオン反駁』1 巻 6 章、シドニウスを挙げる。Bindley は depretiat を「軽んじる」とし、セネカの書簡とルクレティウス 3 巻を挙げる（l. 8446–8456）。Mayor は modicum 以下に、セネカ書簡 94（苦痛の本性の最もよいところは、長引くものは大きくなりえず、大きいものは長引きえないこと）と、キケロ『善と悪の究極について』2 巻 22 節の「重ければ短く、長ければ軽い」というエピクロス派の薬を挙げる（l. 25362–25392）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。depretiat は注 g のとおり「値打ちを下げる、軽んじる」。modicum … magnum … は「小さい苦しみは軽んじてよいと言い、大きい苦しみは長く続かないと言って」。エピクロスは『オクタウィウス』の名前の表に揃える（メインが確かめる）。cruciatus は 45.7 の cruciatus と同じ語。
- 確かめた資料：Oehler 画像 0309（本文、注 f・g）。OCR l. 35815–35817、35920–35941。Bindley OCR l. 8435–8437、8446–8456。Mayor OCR l. 25362–25392。

### 45.7 Enimvero nos qui sub deo omnium speculatore dispungimur（dispungimur の意味）
- 底本（Oehler）：Enimvero nos qui sub deo omnium speculatore dispungimur, quique aeternam ab eo poenam providemus merito, soli innocentiae occurrimus …
- ほかの読み：この句に校注の異読はない。Bindley は底本と同じ語（OCR l. 8437–8438）。
- 採る校訂者：注 45 章 h（p. 279）は dispungimur を 37 章の注に送る。その注 c（p. 250）で Oehler は、dispungere は本来受け取ったものと与えたものを突き合わせることなので、しばしば examinare（吟味する）の意味にもなる、とし、その例にこの Enimvero nos qui sub deo omnium speculatore dispungimur … を挙げる（OCR l. 32082–32088）。Bindley は omnium speculatore を「すべてを詳しく調べる方」、dispungimur を「量られ、見積もられ、勘定に入れられる」とし、18 章の dispunctio、『マルキオン反駁』4 巻 17 章の「功罪の裁き手、また dispunctor として」を挙げる（l. 8458–8462）。Mayor は speculatore に『オクタウィウス』32 章 9 節（神はすべてのものの造り主で、すべてを見張る方）、ラクタンティウス 6 巻 18 章（最も大きく最も公正な裁き手で、すべてを見張り証しする方）、プルデンティウスなどを、dispungimur に 18 章、37 章、44 章を挙げる（l. 25394–25413）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。dispungimur は注 h が送る 37 章の注 c に従い「吟味される」。44.1 の dispungitis（同じ注で「清算する」の例）とは訳し分けることになる。omnium speculator は『オクタウィウス』32:9 の既訳「すべてを見張る方」に揃えられる。
- 確かめた資料：Oehler 画像 0309（本文、注 h）。OCR l. 35817–35818、35944–35945、32082–32088。Bindley OCR l. 8437–8438、8458–8462。Mayor OCR l. 25394–25413。`books/octavius/src/chapter-29-32/both.md`（32.9 と 32:9）。

### 45.7 quique aeternam ab eo poenam providemus merito, soli innocentiae occurrimus（merito の区切り）
- 底本（Oehler）：quique aeternam ab eo poenam providemus merito, soli innocentiae occurrimus, et pro scientiae plenitudine …（merito の後にコンマ）
- ほかの読み：Bindley の本文は quique aeternam ab eo poenam providemus, merito soli innocentiae occurrimus（merito を後ろの文にかける。OCR l. 8438–8439）。Mayor の本文は Oehler と同じ区切り（OCR l. 7494）。
- 採る校訂者：Bindley は occurrimus に、ウルガタのエペソ四・一三、ピリピ三・一一の occurrere（到達する）を比べよ、とする（l. 8464–8465）。Mayor は soli に 30 章の qui eum solus observo を挙げる（l. 25415–25416）。
- 読者への影響：小 — 底本では「その方からの永遠の罰を当然のこととして前もって見ている」、Bindley では「当然、わたしたちだけが潔白に至る」。
- 訳での扱い：訳注は付けない。底本の区切りで、merito を providemus にかける。occurrimus は Bindley のとおり「（潔白に）至る」の意味。soli は「わたしたちだけが」で、45.1 の Nos ergo soli innocentes を受ける。
- 確かめた資料：Oehler 画像 0309（本文）。OCR l. 35818–35819。Bindley OCR l. 8438–8439、8464–8465。Mayor OCR l. 7494、25415–25416。

### 45.7 pro scientiae plenitudine（scientiae と prospicientiae）
- 底本（Oehler）：et pro scientiae plenitudine et pro latebrarum difficultate et pro magnitudine cruciatus non diuturni, verum sempiterni
- ほかの読み：pro scientiae は (λ)・a〜f と Havercamp。A の最初の手は pro spientie、A・B・D・E・G、Bongars の写本、オクスフォード、エアフルト写本、エルノンとガンの写本、ヴァティカンの写本の一つは prospicientiae（D は prospicienti a。「予見の満ちていること」）、F とウィーン写本は pro patientiae（校注 45 章 29）。Bindley は底本と同じ（OCR l. 8440）。
- 採る校訂者：Mayor は plenitudine に『見世物について』20 章の終わり（これが真理の完全さと、それに伴う教えの満ちていることだ）と 21 章の初め（異教徒のもとには真理の満ちていることがない）を挙げる（l. 25451–25453）。
- 読者への影響：小 — 写本の大勢の prospicientiae では「予見が満ちていることのゆえに」で、前の providemus と響き合う。底本の scientiae では「知識が満ちていること」。
- 訳での扱い：訳注は付けない。底本の scientiae で訳す。三つの pro は「〜に応じて、〜のゆえに」で、知識の満ちていること、隠れることの難しさ、責め苦の大きさを並べる。
- 確かめた資料：Oehler 画像 0309（本文、校注 45 章 29）。OCR l. 35819–35820、35845–35846、35895、35914。Bindley OCR l. 8440。Mayor OCR l. 25451–25453。

### 45.7 eum timentes quem timere debebit et ipse qui timentes iudicat, deum, non proconsulem timentes（λ の読みと、マタイ一〇・二八）
- 底本（Oehler）：eum timentes quem timere debebit et ipse qui timentes iudicat, deum, non proconsulem timentes.
- ほかの読み：debebit を F は debebat。λ はこの句を verumtamen semper ternum deum timentes, quem timere debebit ipse qui iudicat deum non proconsulem timentes と読む（校注 45 章 30）。Bindley は底本と同じ（OCR l. 8470–8472）。
- 採る校訂者：Bindley は non proconsulem を、地方総督の治める属州に住んで書く人には自然な、長官への何気ない言及とする（l. 8487–8489）。Mayor はタティアノス 4 章（人は人として敬うべきだが、恐れるべきは神だけ）とマタイ一〇・二八を挙げる（l. 25455–25457）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。proconsul は訳語表の「地方総督」。qui timentes iudicat は「（神を）恐れる者たちを裁く者」、つまり地方総督自身。debebit は未来（「恐れねばならなくなる」）。timentes の繰り返しは訳でも残せる。マタイ一〇・二八（口語訳「また、からだを殺しても、魂を殺すことのできない者どもを恐れるな。むしろ、からだも魂も地獄で滅ぼす力のあるかたを恐れなさい」）は Mayor が挙げる近い箇所で、引用ではないので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0310（本文、校注 45 章 30）。OCR l. 35952–35953、35967–35970。Bindley OCR l. 8470–8472、8487–8489。Mayor OCR l. 25455–25457。`node tools/bible.js Matt.10.28`。

### 46.1 Constitimus, ut opinor, adversus omnium criminum intentationem（consistere と intentatio）
- 底本（Oehler）：Constitimus, ut opinor, adversus omnium criminum intentationem, quae Christianorum sanguinem flagitat.
- ほかの読み：Constitimus を D・F・G・a・b、ウィーン写本は Constituimus、アンブロジアーナ写本は Constitutum（後の手は Constitui。校注 46 章 1）。intentationem は A・D・E・f、エアフルト写本、オクスフォード、Pamelius の写本。アンブロジアーナ写本は intemptationum、(B)・F・G・λ・a〜e、ウィーン写本は intentionem（2）。Bindley の本文は intentionem（OCR l. 8477–8478）。Mayor は p. 148 の一覧で「p. 126 l. 26 intentionem」とし、intentionem を好む。
- 採る校訂者：注 46 章 a（p. 280）は Constitimus を『偶像崇拝について』13 章の注に送る。その注 b で Oehler は、consistere は法廷の用法で、本来は iudicio congredi, actione experiri（法廷で渡り合う、訴えで争う）の意味だとし、『テオドシウス法典』、パピニアヌス、マルキアヌスを引いて、4 章の iam de causa innocentiae consistam、19 章の断片の consisterem、この Constitimus と 46.16 の si de simplicitate consistam を例に挙げる（OCR l. 11537、11578–11606）。Bindley は Constitimus を「わたしたちは自分の立場を守り通した」とし、4 章の consistam を振り返る語、とする（l. 8491–8499）。Mayor も 4 章の初め、19 章の断片、46.16 を並べ、『学説彙纂』の用例と「法廷で渡り合う」の語釈を挙げる。intentio を「張りつめ、圧力」とし、27 章の初め（satis haec adversus intentionem laesae divinitatis）を挙げ、flagitat にキプリアヌスを挙げる（l. 25463–25479）。Bindley は flagitat を、本来は法廷に呼び出す語だが、ここは「声高に求める」の意味とする（l. 8503–8505）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Constitimus は 4.1 の consistam（既訳を参照）と同じ法廷の語で、「（訴えに）立ち向かってきた」の意味。intentatio は訳語表で 27.1 の intentatio が「訴え」（既訳「神性を害したという訴え」）なので揃えられる。46.16 の consistam と訳を揃えるかはメインが決める。
- 確かめた資料：Oehler 画像 0310（本文、校注 46 章 1・2、注 a）。OCR l. 35955–35956、35973–35975、35982、35989–35991、36007–36008、11537、11578–11606。Bindley OCR l. 8477–8478、8491–8505。Mayor 画像 0172（p. 148）。Mayor OCR l. 25463–25479。

### 46.1 ex fide scilicet et antiquitate divinarum litterarum, item ex confessione spiritualium potestatum（注 b）
- 底本（Oehler）：Ostendimus totum statum nostrum, et quibus modis probare possimus ita esse sicut ostendimus, ex fide scilicet et antiquitate divinarum litterarum, item ex confessione spiritualium potestatum.
- ほかの読み：possimus を G・c は possumus。λ は modis を欠く（校注 46 章 3）。spiritualium を D・F・G は spiritalium（4）。Bindley は底本と同じ（OCR l. 8478–8482）。
- 採る校訂者：注 46 章 b（p. 280）は spiritualium potestatum を「ダイモンたちの」とし、23 章で論じた、とする。Bindley は ex fide scilicet et antiquitate に 19・20 章、ex confessione に 23 章を挙げる（l. 8507–8509）。Mayor は antiquitate に 19 章の初めと 47 章の初め、confessione に 19〜23 章と 25 章の初めを挙げる（l. 25481–25484）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。spiritualium potestatum は注 b のとおりダイモンを指す（23 章で、ダイモンが自分の正体を告白したこと）。「霊の力」と訳して、ダイモンと補うかはメインが決める。ex fide … divinarum litterarum の fides は、聖書が信頼に足ること（19〜20 章の論）で、訳語表の fides「誠実」（皇帝に対する）や 46.8 の ex fide（本心から）とは意味が違う。
- 確かめた資料：Oehler 画像 0310（本文、校注 46 章 3・4、注 b）。OCR l. 35956–35959、35978、35992、35997、36010–36011。Bindley OCR l. 8478–8482、8507–8509。Mayor OCR l. 25481–25484。

### 46.2 Qui nos revincere audebit, non arte verborum, sed eadem forma qua probationem constituimus, de veritate?（Qui と Quis、forma の意味）
- 底本（Oehler）：Qui nos revincere audebit, non arte verborum, sed eadem forma qua probationem constituimus, de veritate?
- ほかの読み：Qui nos は Aβ・E・F（F は vos）・G・f、ウィーン写本、エアフルト写本。オクスフォードは nos、(Aφ B D)・a〜e は Quis nos、λ と Havercamp は Existat qui nos（「……する者が現れよ」。校注 46 章 5）。de veritate を λ と Havercamp は de veritate debebit reniti（λ は renidi）とし、続けて λ は Sed dum tamen unicuique …、λ と Havercamp は … veritas nostra, interim、f は Sed interim（6）。Bindley の本文は Quis nos revincere audebit, … de veritate?（OCR l. 8482–8483）。
- 採る校訂者：注 46 章 c（p. 280）は forma を『偶像崇拝について』18 章の注に送る。その注 d で Oehler は、forma はテルトゥリアヌスではしばしば modus, lex, ratio（仕方、決まり、筋道）だとし、2 章の adversus formam, adversus naturam iudicandi、7 章、47 章、『諸国民へ』を例に挙げる（OCR l. 12837–12850）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Qui は疑問の quis と同じに取り、「だれが……論駁しようとするでしょうか」。revincere は訳語表で 19.14、21.20 が「論駁する」なので揃えられる。forma は注 c が送る注 d のとおり「仕方、筋道」で、「わたしたちが証明を立てたのと同じ仕方で」。訳語表の forma「決まり」（2:9、2:14。注 d が挙げる 2 章の例）と合わせるかはメインが決める。
- 確かめた資料：Oehler 画像 0310（本文、校注 46 章 5・6、注 c）。OCR l. 35959–35961、35985–35986、35993–36003、36013–36014、12837–12850。Bindley OCR l. 8482–8483。

### 46.2 dum de bono sectae huius obducitur, quod usui iam et de commercio innotuit … sed magis philosophiae genus（obducitur の意味）
- 底本（Oehler）：Sed dum unicuique manifestatur veritas nostra, interim incredulitas, dum de bono sectae huius obducitur, quod usui iam et de commercio innotuit, non utique divinum negotium existimat, sed magis philosophiae genus.
- ほかの読み：manifestatur を F・G、ウィーン写本は manifestetur（校注 46 章 7）。usui は A・B・D・E・G・λ・d、ウィーン写本、エアフルト写本、ゴルツェ写本、ガンとエルノンの写本ほか。F・a・b・c・e・f は usu（8）。existimat を λ は existimatis（9）。Bindley は底本と同じ（OCR l. 8484–8485、8523–8524）。
- 採る校訂者：注 46 章 d（p. 280）は「obducere は本来、反対の側へ導くことで、そこからテルトゥリアヌスではほぼ convincere, evincere（言い負かす、論破する）の意味」とし、50 章の Denique evadimus, cum obducimur（逃れることと obduci が対になる、とする）、『マルキオン反駁』1 巻 21 章、5 巻 10 章、『貞節について』7 章、『断食について』11 章、『肉の復活について』2 章、『キリストの肉について』19 章、『ヘルモゲネス反駁』38 章を挙げる。注 e（p. 280〜281。Heraldus）は、ここが最後の部分で、キリスト者の一派は神のものと見なすべきではなく、哲学者もほとんど同じことを教えるのだから哲学の一派に数えるべきだ、と考える者たちの意見を責める、とする。それはケルソスの非難でもあった（オリゲネス『ケルソス駁論』1 巻）、キリスト者自身が自分たちの生き方を secta と呼んだことがこの考えを招いたのだろう、と言う。Bindley も obducitur を「この一派の善さについて言い負かされる」とし、テルトゥリアヌスではほぼ一様に refellere, evincere, revincere の意味と注する（l. 8511–8518）。Mayor は obducitur に 39 章、50 章、『貞節について』7 章などを、secta に 43 章の終わりを挙げる（l. 25486–25494）。
- 読者への影響：小〜中 — obducitur を「覆われる」と取ると文意を取り違える。注 d のとおり「（不信仰が）言い負かされる」。
- 訳での扱い：訳注は付けない。obducitur は注 d のとおり「言い負かされる」（認めざるをえなくなる）。dum … dum … の二つの節を、主文の existimat（不信仰は……と考える）につなぐ。usui … et de commercio innotuit は「経験によって、また付き合いを通して知られるようになった」。secta は訳語表どおり「一派」。
- 確かめた資料：Oehler 画像 0310（本文、校注 46 章 7〜9、注 d・e）。OCR l. 35961–35964、36004–36005、36016–36069、36071–36080、36132–36140。Bindley OCR l. 8484–8485、8511–8518、8523–8524。Mayor OCR l. 25486–25494。

### 46.3 Eadem, inquit, et philosophi monent atque profitentur … Cur ergo quibus comparamur de disciplina, non proinde illis adaequamur（言い分の範囲と語順の異読）
- 底本（Oehler）：Eadem, inquit, et philosophi monent atque profitentur, innocentiam, iustitiam, patientiam, sobrietatem, pudicitiam. Cur ergo quibus comparamur de disciplina, non proinde illis adaequamur ad licentiam impunitatemque disciplinae?
- ほかの読み：monent を E、エアフルト写本は manent（校注 46 章 10）。atque は A・B・E・G・f、オクスフォード、エアフルト写本、アンブロジアーナ写本。D・F・a〜e、ウィーン写本は et（11）。non proinde illis は A・B・E・F・G、ウィーン写本、アンブロジアーナ写本、オクスフォード、エアフルト写本（E、エアフルト写本、オクスフォードは num proinde）。D・a〜e と Havercamp は proinde（c は perinde）illis non、λ・f は non proinde（12）。λ は ad licentiam impunitatemque disciplinae の代わりに diligentia（Scioppius は de licentia と直す）et immunitate disciplinae（13）。Bindley の本文は monent et profitentur … proinde illis non adaequamur（OCR l. 8524–8528）。
- 採る校訂者：Bindley は、これが四つめで最後の非難（「つまるところ、キリスト教は哲学の一派にすぎないのではないか」）で、著者は「わたしたちは哲学者と共通のものを何も持たない。だが持つと思うなら、哲学者が受けている放任をわたしたちにも及ぼすべきだ」と答える、とする（l. 8544–8548）。Mayor は Cur ergo 以下にアテナゴラス 2 章（哲学者は教えのゆえには罰せられない）、ユスティノス『第一弁明』4 章などを挙げ、2 章の初め（わたしたちが罪人なら、なぜほかの罪人と同じに扱われないのか）と同じ論じ方とする（l. 25535–25569）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。inquit で相手の言い分を持ち出すので、本の AGENTS.md のとおり「」に入れて「と、人は言います」と受ける。「」の範囲は底本の句点までの Eadem … pudicitiam で、Cur ergo から著者の答え。innocentia は訳語表の「潔白」、iustitia は人の徳として並ぶので「正義」、pudicitia は「貞潔」。disciplina は訳語表どおり「教え」。
- 確かめた資料：Oehler 画像 0310（本文の Eadem, in-）、0311（本文、校注 46 章 10〜13）。OCR l. 35964、36088–36091、36104–36111。Bindley OCR l. 8524–8528、8544–8548。Mayor OCR l. 25535–25569。

### 46.4 Quis enim philosophum sacrificare aut deierare aut lucernas meridie vanas proferre conpellit?（注 f）
- 底本（Oehler）：vel cur et illi, ut pares nostri, non urgentur ad officia quae nos non obeuntes periclitamur? Quis enim philosophum sacrificare aut deierare aut lucernas meridie vanas proferre conpellit?
- ほかの読み：illi, ut pares を λ は illud pares（校注 46 章 14）。quae nos non obeuntes を D・a は quae nos obeuntes、c は quae non obeuntes（15）。vanas proferre conpellit を λ・f と Havercamp は vanas prostituere conpellit（「さらす、出す」）、G は vanas ferre conpellitur（16）。Bindley の本文は lucernas meridie vanas prostituere compellit（OCR l. 8528–8531）。
- 採る校訂者：注 46 章 f（p. 281）は La Cerda の「枝の多い、ごく明るい灯を置いて、昼の光をくじき、その明るさで日の輝きが見えないほどにする」をよしとし、35 章を参照させる。Mayor は lucernas に 35 章の nec lucernis diem infringimus（35.4）とユウェナリス 12 巻を、deierare に 32 章（キリスト者はカイザルの安寧にかけて誓うが、ゲニウスにかけては誓わない）を挙げる（l. 25581–25588）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。lucernas meridie vanas proferre は、皇帝の祝いの日に昼間から灯をともす習いで、35:4 の既訳「灯で昼の光を破らない」、35:11 の「高く明るい灯」と言い回しを揃えられる。deierare は訳語表の「かけて誓う」。
- 確かめた資料：Oehler 画像 0311（本文、校注 46 章 14〜16、注 f）。OCR l. 36091–36094、36112–36116、36143–36147、36159。Bindley OCR l. 8528–8531。Mayor OCR l. 25581–25588。

### 46.5 deos vestros palam destruunt … in principes latrant … statuis et salariis remunerantur quam ad bestias pronuntiantur（注 g・h）
- 底本（Oehler）：Quinimmo et deos vestros palam destruunt et superstitiones vestras commentariis quoque accusant laudantibus vobis. Plerique etiam in principes latrant sustinentibus vobis, et facilius statuis et salariis remunerantur quam ad bestias pronuntiantur.
- ほかの読み：superstitiones vestras commentariis を λ は superstitiones publicas commentariis（校注 46 章 17）。etiam in principes latrant を Barthius は etiam principes latrant（18）。salariis を G と Lipsius は solariis、c は salutariis、F・ウィーン写本は salaribus（19）。remunerantur を F の最初の手は honorantur（20）。ad bestias pronuntiantur. Sed を F は ad bestias proiciantur. Sed、オクスフォードは ad bestias renuntiantur. Sed、Barthius は ad bestias pronuntiantur. Et、G は bestiis pronuntiantur. Sed（21）。Bindley は底本と同じ（OCR l. 8532–8536）。Mayor は p. 148 の一覧で「p. 128 l. 9 oblatrant (?)」とし、latrant の代わりに oblatrant を考える。
- 採る校訂者：注 46 章 g（p. 281。Heraldus）は、哲学者の不遜は多くの人に記されているとし、スエトニウス『ウェスパシアヌス伝』13 章（キュニコス派のデメトリオスが、断罪の後、旅先で皇帝に出会っても、立ちもせず挨拶もせず、何やら吠えかかったので、皇帝は彼を「犬」と呼ぶだけで済ませた）を「まさにここに当たる」と引く。注 h は salariis remunerantur にディオゲネス・ラエルティオス、ルキアノス、フィロストラトス、タティアノス 32 章、カピトリヌス『アントニヌス伝』を挙げ、ソクラテスが像で誉れを受けたことは 14 章で読んだ、とする。Bindley は salariis を後の意味の「俸給」、pronuntiantur を「（刑を）言い渡される」とし、2 章を挙げ、哲学者が神々をあざけて民衆に喜ばれたことに 12 章、14 章などを挙げる（l. 8550–8559）。Mayor はアルノビウス 3 巻 7 章（熱心な異教徒は、キケロの『神々の本性について』を焼けと言った）、destruunt に 14 章、『諸国民へ』1 巻 4 章、latrant にスエトニウスの同じ箇所、salariis にカピトリヌス『アントニヌス・ピウス伝』11 章（すべての属州で弁論家と哲学者に誉れと俸給を与えた）、ad bestias に『スカプラへ』3 章などを挙げ、セプティミウス・セウェルスとその妃ユリア・ドムナが哲学を重んじたことに触れる（l. 25571–25683）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。destruunt は訳語表の「打ち壊す」（13.1、14.5）。14:5 でもソクラテスが「神々を打ち壊していた」とされる。principes は訳語表の「皇帝」。latrant は注 g のとおり、犬のように「吠えかかる」。statuis et salariis remunerantur は「像と俸給で報いられる」。ad bestias pronuntiantur は「獣に（投げ与えよ）と言い渡される」。
- 確かめた資料：Oehler 画像 0311（本文、校注 46 章 17〜21、注 g・h）。OCR l. 36094–36098、36117–36118、36124、36150–36195。Bindley OCR l. 8532–8536、8550–8559。Mayor 画像 0172（p. 148）。Mayor OCR l. 25571–25683。

### 46.6 Nomen hoc philosophorum daemonia non fugat. Quidni? cum secundum deos philosophi daemonas deputent（Quidni? の取り方）
- 底本（Oehler）：Sed merito. Philosophi enim non Christiani cognominantur. Nomen hoc philosophorum daemonia non fugat. Quidni? cum secundum deos philosophi daemonas deputent.
- ほかの読み：Philosophi enim non を D・a・b・c は philosophi: non enim（校注 46 章 22）。Nomen hoc を E、エアフルト写本は Nomen enim（23）。fugat を λ は fugiunt（24）。Quidni? cum を G は Quidni non、F は Quidni cum etiam（25）。deputent を c・d は deputant（26）。Bindley の本文は Quidni, quum secundum deos philosophi daemonas deputent?（一つの問いにする。OCR l. 8537–8539）。
- 採る校訂者：注 46 章 i（p. 281）は「神々そのものを、打ち壊すことで天から追い出しているのだから、同じ人々が、神々の次の位に数えているダイモンを、なぜ体から追い出せないのか、と著者は言う」と言い換え（原文は Cum deos ipsos, inquit, coelo pellant, dum destruunt, quid iidem ni possunt corporibus pellere daemonas, quos proximo loco post deos recensent?）、Quidni? と cum の節を一つの問いとして読む。注は、これが前の non fugat とどうつながるかは説明しない。Mayor は Quidni? を「quidni non fugat? つまり、なぜ追い出せずにいないことがあろうか（追い出せないのは当然だ）」とし、Heraldus と 22 章の初め（22.1 の Quidni? cum …）などを挙げ、quidni non を重複とする辞書の見方を退ける。secundum deos に 24 章（最高の支配は一者に、務めは多くの者にあるとする人々。プラトンは神々とダイモンを率いるユピテルを描く）と『魂について』1 章を挙げる（l. 25685–25699）。
- 読者への影響：中 — Mayor の取り方では「哲学者の名がダイモンを追い出さないのは当然だ。哲学者はダイモンを神々の次に数えるのだから」、注 i の取り方では「神々を打ち壊す哲学者が、神々より下のダイモンを追い出せないのはなぜか」という問いになる。
- 訳での扱い：訳注は付けない。この本は 22.1（Quidni? cum et ipsi daemonium … dicatur）を「当然でしょう。……のですから」、30.2（Quidni? cum super omnes homines）を「当然ではありませんか」と訳していて、Mayor の取り方と合う。本の AGENTS.md は Oehler の注を拠り所にするので、注 i に従うか、22:1・30:2 と揃えるかはメインが決める（下の「メインで決めること」）。Philosophi enim non Christiani cognominantur は「哲学者は、哲学者と呼ばれるのであって、キリスト者とは呼ばれないからです」。daemonia、daemonas は訳語表どおりどちらも「ダイモン」。nomen は「名」（1.4 などのキリスト者という名と同じ語）。
- 確かめた資料：Oehler 画像 0311（本文、校注 46 章 22〜26、注 i）。OCR l. 36098–36101、36121、36165–36166、36179、36197–36202。Bindley OCR l. 8536–8539。Mayor OCR l. 25685–25699。`src/chapter-22-23/both.md`（22:1）、`src/chapter-27-31/both.md`（30:2）。

### 46.6 Socratis vox est: Si daemonium permittat（注 k）
- 底本（Oehler）：Socratis vox est: Si daemonium permittat.
- ほかの読み：校注に異読はない。Bindley は底本と同じ（OCR l. 8539）。
- 採る校訂者：注 46 章 k（p. 281）は 22 章、『魂について』1 章、プラトン『ソクラテスの弁明』31 D、『パイドロス』242、キケロ『予言について』1 巻 54 章を挙げる。Mayor は Heraldus を引いて、θεοῦ θέλοντος（神が望むなら）、si dis placet と同じ言い方とし、『魂について』1 章（ソクラテスには子供のころからダイモンが付き添っていたと言われる。ダイモンは詩人や哲学者のもとで神々の次に、神々とともに数えられる）を引く（l. 25701–25723）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。人の言葉として引くので、本の AGENTS.md のとおり「」に入れる（「ダイモンが許すなら」）。daemonium は訳語表の「ダイモン」（22.1 と同じ）。
- 確かめた資料：Oehler 画像 0311（本文、注 k）。OCR l. 36101、36204–36207。Bindley OCR l. 8539。Mayor OCR l. 25701–25723。

### 46.7 Idem et cum aliquid de veritate sapiebat … Aesculapio tamen gallinaceum prosecari … credo ob honorem patris eius（注 l・m）
- 底本（Oehler）：Idem et cum aliquid de veritate sapiebat deos negans, Aesculapio tamen gallinaceum prosecari iam in fine iubebat, credo ob honorem patris eius, quia Socratem Apollo sapientissimum omnium cecinit.
- ほかの読み：et cum を λ は et qui（校注 46 章 27）。sapiebat を a・c は sapiat（28）。gallinaceum を F とウィーン写本は欠き、A・G は gallinatium（29）。prosecari を F とウィーン写本は prosecrari（30）。iubebat を λ は mandabat（31）。Bindley は底本と同じ（OCR l. 8539–8542、8574）。
- 採る校訂者：注 46 章 l（p. 281〜282）は prosecari を祭儀の語とし、Brisson、Drakenborch のリウィウス注、Bünemann のラクタンティウス注を参照させ、事柄はプラトン『パイドン』118 A（と Wyttenbach の注）とする。注 m は Apollo の託宣に、プラトン『ソクラテスの弁明』21 A、ディオゲネス・ラエルティオス 2 巻 5 章 18 節、『オクタウィウス』13 章を挙げる。Bindley は『パイドン』、『冠について』10 章、『魂について』1 章を、prosecari に 9 章の注を、アポロの託宣にディオゲネス・ラエルティオス 2 巻 37 節を挙げる（l. 8561–8569）。Mayor は deos negans に 14 章の終わり（ソクラテスは神々を打ち壊したので罪に定められた）、gallinaceum に『パイドン』118 A と『諸国民へ』2 巻 2 章（ソクラテスは神々を確かなことのように否みながら、アエスクラピウスに雄鶏を切りささげよと確かなことのように命じた）、ラクタンティウス 3 巻 20 章などを、sapientissimum に『諸国民へ』1 巻 4 章、『オクタウィウス』13 章 1〜2 節などを挙げる（l. 25725–25852）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。prosecari は注 l のとおり、いけにえを切り分けてささげる祭儀の語（「雄鶏を切りささげる」）。Aesculapius、Apollo は名前の表どおり（アエスクラピウス、アポロ）。patris eius はアエスクラピウスの父で、直後の Apollo がそれ。cecinit は託宣で「歌った、告げた」。cum aliquid de veritate sapiebat は「真理について何かを悟っていたとき」。
- 確かめた資料：Oehler 画像 0311（本文、校注 46 章 27〜31、注 l）、0312（本文、注 l の続き、注 m）。OCR l. 36101–36103、36128–36129、36180–36181、36209–36210、36221、36259–36269。Bindley OCR l. 8539–8542、8561–8569、8574。Mayor OCR l. 25725–25852。

### 46.8 In quantum odium flagrat veritas, in tantum qui eam ex fide praestat offendit（注 n・o）
- 底本（Oehler）：O Apollinem inconsideratum! Sapientiae testimonium reddidit ei viro qui negabat deos esse. In quantum odium flagrat veritas, in tantum qui eam ex fide praestat offendit; qui autem adulterat et adfectat, hoc maxime nomine gratiam pangit apud insectatores veritatis.
- ほかの読み：In quantum odium flagrat は A・B・D・E・F（F は fraglat、ウィーン写本は fragrat）・G・λ・a・f、エアフルト写本、オクスフォード、ウィーン写本、ガンとエルノンの写本、Bongars の写本。b・c・d・e は In quantum odio flagrat（校注 46 章 32）。D は in tantum veritas qui（33）。et adfectat を f は欠く（34）。apud を E、エアフルト写本は欠く（35）。Bindley は底本と同じ（OCR l. 8574–8579）。Mayor は p. 148 の一覧で「p. 128 l. 20 odio」とし、odio を好む。
- 採る校訂者：注 46 章 n（p. 282）は flagrat を「すなわち、火を付けられる、苦しむ」とし、テレンティウスの「真理は憎しみを生む」を挙げる。注 o は ex fide を 2 章の注に送る（2.18 の non ex fide negarit。そこでの論点一覧の扱いは「本心から」。chapter-02-03.md の 2.18–2.19 の項）。Bindley は「真理が憎しみをかき立てるのと同じ度合いで、真理をまことに示す者は人の気を害する」とし、7 章を挙げる（l. 8590–8594）。Mayor は odio の読みに Ashton を挙げ、7 章（真理は現れるとすぐ、憎しみとともに敵とされ始めた）、14 章、ヒエロニムス、ラクタンティウス 5 巻 9 章・21 章（真理は憎しみを生む）などを、adulterat、insectatores の用例を挙げる（l. 25854–25890）。
- 読者への影響：小〜中 — flagrat を取り違えると「真理が憎しみに燃える」（真理が憎む）と読める。注 n のとおり、真理が憎しみに「さらされ、苦しむ」意味。
- 訳での扱い：訳注は付けない。In quantum … in tantum は「真理が憎しみにさらされればされるほど、真理を本心から示す者は人の気を害する」の比例の形。14:5 の既訳「真理は憎まれています」と響き合う。ex fide は注 o のとおり「本心から」。adfectat は 46.9 の adfectant と同じ語（46.9 の項。持っていないのに真似て装う）。adulterat は「混ぜ物をする、偽る」。
- 確かめた資料：Oehler 画像 0312（本文、校注 46 章 32〜35、注 n・o）。OCR l. 36222–36226、36239–36241、36271–36275。Bindley OCR l. 8574–8579、8590–8594。Mayor 画像 0172（p. 148）。Mayor OCR l. 25854–25890。

### 46.9 Quam inlusores et corruptores inimice philosophi adfectant veritatem … Christiani et necessario appetunt（inimice と mimice、Quam の取り方）
- 底本（Oehler）：Quam inlusores et corruptores inimice philosophi adfectant veritatem et adfectando corrumpunt, ut qui gloriam captant, Christiani et necessario appetunt et integre praestant, ut qui saluti suae curant.
- ほかの読み：Quam は A・B・D・E・G、ウィーン写本、エアフルト写本、オクスフォード。a〜e と Havercamp は qua。f は Quam inlusores et corruptores inimice の語を欠き、F は Quam inlusores et corruptores の代わりに et corruptores（校注 46 章 36）。inlusores を λ と Havercamp は et illusores（37）、corruptores を λ と Havercamp は contemptores（38）。inimice は A・B・D・E、ウィーン写本、エアフルト写本。λ は inimici、F は Imminute、G は in……（読めない）、E の余白と a〜e、Havercamp は mimice（「役者のように」。39）。et（necessario）は A・B・D・E・F・f、エアフルト写本、オクスフォード、ウィーン写本、Bongars の写本で、G は欠き、a〜e は eam（40）。saluti を F・G、ウィーン写本は salutis（41）。Bindley の本文は … apud insectatores veritatis, [qua et illusores et contemptores]. Mimice philosophi affectant veritatem et affectando corrumpunt, ut qui gloriam captant: Christiani eam necessario appetunt et integre praestant, ut qui saluti suae curant.（OCR l. 8579–8583）で、角括弧の句を「刊本のいくつかが加える。真理をあざける者、軽んじる者として、の意味」と注する（l. 8596–8597）。Mayor は p. 148 の一覧で「p. 128 l. 23 mimice」とし、mimice を好む（Mayor の本文は Oehler と同じ inimice。OCR l. 7613–7614）。
- 採る校訂者：注 46 章 p（p. 282）は saluti suae curant の curare＋与格の形に、ゲッリウスとアプレイウス『ソクラテスの神について』2 章を挙げるだけで、Quam と inimice の構文には注がない。Bindley は Mimice philosophi 以下について、テルトゥリアヌスはギリシアの名高い哲学者に不公平で、その哲学の値打ちを認めず、哲学者の人柄の欠点を指さす、と注する（l. 8599–8605）。Mayor は inlusores をまれな語とし、mimice にセネカ書簡 26（見せかけ、役者芝居）などを、adfectant に 19 章の断片と『諸国民へ』1 巻 4 章（哲学者は真理を装う［adfectant］が、キリスト者は持っている。装う者は戯れ、持つ者は守る）を、gloriam に 47 章とキプリアヌス『忍耐の益について』2 章（哲学者は謙遜でも柔和でもなく、自分に満足している）を、integre と saluti suae curant の用例を挙げる（l. 25883–25925）。
- 読者への影響：中 — 底本の inimice では「哲学者は、あざける者、損なう者として、敵意をもって真理を装う」、mimice では「役者のように真理を装う」。Bindley では文の切れ目も違い、qua … contemptores を前の文に付ける。底本の Quam は、文の中に veritatem があるので関係代名詞としては取りにくく、inimice にかかる「どれほど」とも、Christiani 以下と比べる形とも読めるが、資料に説明はない。
- 訳での扱い：訳注は付けない。底本の Quam … inimice で訳す。Quam の取り方はメインが決める（下の「メインで決めること」）。Christiani et necessario appetunt の目的語は前の veritatem で、底本に eam はない。adfectant は Mayor が並べる『諸国民へ』1 巻 4 章のとおり、持っていないのに「装う、得ようとする」の意味で、46.8 の adfectat と同じ語。salus は、ここでは「救い」で、訳語表の salus imperatoris「安寧」とは別。ut qui … は「〜する者として」で、gloriam captant（名声を追う）と saluti suae curant（自分の救いを気づかう）が対になる。
- 確かめた資料：Oehler 画像 0312（本文、校注 46 章 36〜41、注 p）。OCR l. 36226–36229、36241–36247、36277–36284。Bindley OCR l. 8579–8583、8596–8605。Mayor 画像 0172（p. 148）。Mayor OCR l. 7613–7614、25883–25925。

### 46.10 Adeo neque de scientia neque de disciplina … aequamur. Quid enim Thales … commeatus deliberandi saepe frustratus?（注 q）
- 底本（Oehler）：Adeo neque de scientia neque de disciplina, ut putatis, aequamur. Quid enim Thales ille princeps physicorum sciscitanti Croeso de divinitate certum renuntiavit, commeatus deliberandi saepe frustratus?
- ほかの読み：scientia を F・G・b・c、ゴルツェ写本、ウィーン写本、Pamelius の写本のいくつかは conscientia（校注 46 章 42）。de disciplina は (Aβ)・F・G・λ・d・e・f、ウィーン写本、Pamelius の写本のいくつか。(Aφ B D)・E・a・b・c、オクスフォード、エアフルト写本、ゴルツェ写本は disciplina（43）。aequamur を Havercamp は aequamus（44）。physicorum を F は philosophorum（45）。G は Croeso de を欠き、オクスフォードは Croeso と、続く certum を欠く（46）。frustratus を F は frustatus、ガンの写本は frustratur（47）。Bindley は底本と同じ（OCR l. 8585–8588）。
- 採る校訂者：注 46 章 q（p. 282）は、『諸国民へ』2 巻 2 章もタレスとクロイソスについて同じ話をするが、キケロ『神々の本性について』1 巻 21 章と、それに倣ったミヌキウス『オクタウィウス』13 章は、シモニデスがヒエロンに答えた話として伝える、とし、commeatu の語は『迫害における逃亡について』9 章の注に送る（その注で commeatus は「猶予」。chapter-32-35.md の 32.1 の項）。Bindley も同じ食い違いを挙げ、ディオゲネス・ラエルティオス 1 巻 36 節に残るタレスの神についての唯一の答え（神とは何か。始めも終わりもないもの）を引き、ille princeps physicorum にキケロとラクタンティウスを挙げる（l. 8609–8625）。Mayor は commeatus を「猶予」とし、『諸国民へ』2 巻 2 章（ミレトスのタレスは、神々を何と思うかと尋ねるクロイソスに、何度か考える猶予を取った後、「何もない」と答えた）を引く（l. 25935–25956）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Adeo は本の AGENTS.md の文型（36.2）のとおり、前の論の結論を引く「このように」。commeatus は 32:1 の既訳「猶予」に揃えられ、『オクタウィウス』13:4 の既訳（シモニデスが一日、二日と延ばした話）と事柄が重なる。princeps physicorum は皇帝ではない「頭」（訳語表の princeps）で、「自然学者たちの頭」。名は文中にあるので括弧の補いは要らない。名前の表のタレス、クロイソスに揃える。certum renuntiavit? は「何か確かな答えを返したでしょうか」の修辞疑問で、frustratus は「（考える猶予を）何度も無駄にして」。
- 確かめた資料：Oehler 画像 0312（本文、校注 46 章 42〜47、注 q）。OCR l. 36229–36232、36247–36251、36286–36293。Bindley OCR l. 8585–8588、8609–8625。Mayor OCR l. 25935–25956。`books/octavius/src/chapter-09-13/both.md`（13:4）。

### 46.11 Deum quilibet opifex Christianus … re quoque adsignat; licet Plato adfirmet factitatorem universitatis … difficilem（注 r・s）
- 底本（Oehler）：Deum quilibet opifex Christianus et invenit et ostendit et exinde totum quod in deum quaeritur re quoque adsignat; licet Plato adfirmet factitatorem universitatis neque inveniri facilem et inventum enarrari in omnes difficilem.
- ほかの読み：in deum は A・B・F・G、オクスフォード、エアフルト写本、Bongars の写本。D・E・a・b・f と Havercamp は in deo、c・d・e は a deo（校注 46 章 48）。adfirmet を G は affirmat（49）。factitatorem を F・ウィーン写本は factorem、G は factitorem（50）。inveniri facilem を F・ウィーン写本は invenire facile、G は invenire facilem、λ は inveniri facile（51）。in omnes をオクスフォードは欠く（52）。difficilem を F・ウィーン写本は difficilem esse、λ は difficile、G は欠く（53）。Bindley の本文は quod in Deo quaeritur（OCR l. 8588–8633）。
- 採る校訂者：注 46 章 r（p. 282）は re quoque adsignat を「神を示すだけでなく、明らかな事実によっても、神が神であるためにはどのようなものでなければならないかを証明し示す」と言い換える。注 s（p. 282〜283）はプラトン『ティマイオス』28 C の「この万有の作り手であり父である方を見いだすのは骨が折れ、見いだしても多くの人に語り出すことはできない（ἀδύνατον）」を引き、キケロ『神々の本性について』1 巻 12 章、アプレイウス『プラトンの教説について』1 巻 5 章、『オクタウィウス』19 章を挙げる。Bindley は in omnes を「（哲学の奥義を明かされない）大衆に」とする（l. 8649–8651）。Mayor は opifex に、職人や老女のようなキリスト者が言葉でなく行いで善を示すというアテナゴラス 11 章などを、re にキプリアヌス『忍耐の益について』3 章と『オクタウィウス』38 章（わたしたちは大きなことを語らず、生きる）を挙げる。Plato に『オクタウィウス』19 章 14 節などを挙げ、「テルトゥリアヌスとミヌキウスは difficile（難しい）とし、ほかの引用は ἀδύνατον（できない）とする」と言う。factitatorem に 21 章を挙げる（l. 25958–26045）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。opifex は「職人」。re quoque adsignat は注 r のとおり「事実によっても示す（行いで裏づける）」。プラトンの言葉は『オクタウィウス』19:14 の既訳（「見いだすことが難しく、見いだしても、公に語ることはできない」）と近いが、ここは後半も difficilem（難しい）なので「できない」にしない。factitator は 21:10 の既訳（ゼノンの「作り手」）に揃えられ、universitas は 21.10 の permeatorem universitatis（既訳「万物」）と同じ語。in omnes は「すべての人に向けて」。
- 確かめた資料：Oehler 画像 0312（本文、校注 46 章 48〜53、注 r・s）、0313（注 s の続き）。OCR l. 36232–36236、36251–36255、36295–36301、36333–36338。Bindley OCR l. 8588–8633、8649–8651。Mayor OCR l. 25958–26045。`books/octavius/src/chapter-18-19/both.md`（19:14）。

### 46.12 Ceterum si de pudicitia provocemus, lego partem sententiae Atticae, in Socratem corruptorem adolescentium pronuntiatum（注 t と、競う言い回しの列）
- 底本（Oehler）：Ceterum si de pudicitia provocemus, lego partem sententiae Atticae, in Socratem corruptorem adolescentium pronuntiatum.
- ほかの読み：provocemus は A・B・D・E・G・d・e、オクスフォード、Bongars の写本、Pamelius の写本。F・a・b・c・f は provocemur（校注 46 章 54）。corruptorem を λ・f と Havercamp は corruptor（55）。pronuntiatum は A・B・E・F・G、エアフルト写本、ウィーン写本。λ・f と Havercamp は pronunciatur、D・a〜e は pronunciatam（56）。Bindley の本文は pronuntiatam（OCR l. 8633–8635）。
- 採る校訂者：注 46 章 t（p. 283）は「若者を堕落させる者と宣告されたソクラテスに対して、の意味。pronuntiatam と直すべきだと考えた人々は、構文をつかんでいない」とする。Bindley は provocemus を法廷の語「（貞潔の点で）訴え出るなら」とし、続く defendam、certem、congrediar も法廷の語、comparem、consistam は軍事の語と注する（l. 8653–8670）。Mayor は corruptorem に『魂について』1 章、カッシアヌス、『オクタウィウス』38 章、セネカ書簡 104、クセノポン『ソクラテスの思い出』1 巻 1 章（若者を堕落させるという訴状）などを挙げる（l. 26047–26108）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。注 t に従い、pronuntiatum は Socratem にかけ、「若者を堕落させる者と宣告されたソクラテスに対する、アテナイの判決の一部を、わたしは読む」の形にする。46.12〜46.16 の Si de … provocemus、defendam、certem、congrediar、conparem、consistam は、徳目ごとに哲学者と競う言い回しの列で、訳でも言い方を変えて並べられる。consistam は 46.1 の Constitimus と同じ語（46.1 と 46.16 の項）。corruptor は 44.2 の corruptor と同じ語（44.2 の項）。
- 確かめた資料：Oehler 画像 0312（本文、校注 46 章 54）、0313（本文、校注 55・56、注 t）。OCR l. 36236、36255–36256、36307–36308、36320–36321、36340–36343、36371。Bindley OCR l. 8633–8635、8653–8670。Mayor OCR l. 26047–26108。

### 46.12 Sexum nec femineum mutat Christianus（注 u と、Bindley のローマ一・二六）
- 底本（Oehler）：Sexum nec femineum mutat Christianus.
- ほかの読み：λ・f と Havercamp は Christianus adsexum（λ と Havercamp は ad sexum）nec feminae mutat（校注 46 章 57）。Bindley は底本と同じ（OCR l. 8635–8636）。
- 採る校訂者：注 46 章 u（p. 283）は「キリスト者は一人の女、それも自分の妻で満足している。sexus femineus は、ここでは女そのものの意味」とする。Bindley はローマ一・二六を挙げる（l. 8659）。
- 読者への影響：中 — 注 u では「キリスト者は女さえ取り替えない」（一人の妻で足りる）。Bindley の挙げるローマ一・二六（口語訳「それゆえ、神は彼らを恥ずべき情欲に任せられた。すなわち、彼らの中の女は、その自然の関係を不自然なものに代え」）は、性の自然な関係を取り替えることを思わせる。
- 訳での扱い：訳注は付けない。注 u に従い、「キリスト者は、女さえ取り替えません」の形で、一人の妻で足りることを言う文として訳す。nec は「〜さえ……ない」。ローマ一・二六は Bindley が挙げる箇所で、引用ではないので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0313（本文、校注 46 章 57、注 u）。OCR l. 36308、36322、36345–36348、36373。Bindley OCR l. 8635–8636、8659。`node tools/bible.js Rom.1.26`。

### 46.12 Novi et Phrynen … ardori subantem, audio et quendam Speusippum … in adulterio perisse（注 v・w）
- 底本（Oehler）：Novi et Phrynen meretricem Diogenis supra recumbentis ardori subantem, audio et quendam Speusippum de Platonis schola in adulterio perisse.
- ほかの読み：recumbentis は Aβ・E・F・G・f、オクスフォード、エアフルト写本。ウィーン写本は reconbentis、(Aφ B D)・a〜e は recubantis（校注 46 章 58）。ardori は λ・f と Havercamp。A・B・D・E・G・a〜e、ウィーン写本、オクスフォード、エアフルト写本は ardorem（59）。Speusippum を A・B・E・G は Spesippum、λ は Speudipsum（60）。perisse は A・B・E・F・G、ウィーン写本、エアフルト写本（61）。Bindley の本文は Diogenis supra recubantis ardori subantem. Audio et quemdam Speusippum … in adulterio periisse（OCR l. 8636–8638）。
- 採る校訂者：注 46 章 v（p. 283）は subare の語に注釈者を挙げ、ディオゲネスがライスと関係を持ったことはルキアノス、アテナイオス、アリストファネスの古注が証言するが、フリュネとのことは、知るかぎりテルトゥリアヌスのほかにだれも言わない、とする。注 w（p. 283）は、Joseph Scaliger がテルトゥリアヌスの誤りをとがめたこと、ディオゲネス・ラエルティオス 4 巻 3 節は、スペウシッポスが悲しみと老いに疲れて自ら死を選んだとも、しらみがわいて命を奪われたとも伝えることを挙げる。Le Nourry は、テルトゥリアヌスは姦淫の現場を押さえられて息絶えたと言うのではなく、死ぬまで姦淫にふけっていたと言うのだと見る、とする。スペウシッポスの情欲にアテナイオス 12 巻を挙げる。Bindley はスペウシッポスをプラトンの甥で後継者とし、「快楽の奴隷」と呼ばれたが自ら命を絶った、とする（l. 8661–8663）。Mayor は Phrynen にディオゲネス・ラエルティオス 6 巻 60 節（デルフォイに献じられたフリュネの黄金のアフロディテ像にディオゲネスが書いた言葉）、subantem に 14 章、Speusippum に「快楽に負ける者」（ディオゲネス・ラエルティオス 4 巻）、adulterio にセネカ書簡 29 などを挙げる（l. 26110–26125）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。subantem は注 v のとおり「（情欲に）さかりがつく」で、ardori は与格（底本。写本の大勢は ardorem）。フリュネ、ディオゲネスは名前の表どおり（どのディオゲネスかは補わない）。スペウシッポスはメインが名前の表に足す。in adulterio perisse は底本どおり「姦淫の中で死んだ」で、注 w の Le Nourry の取り方（死ぬまで姦淫にふけった）にも読める言い方にできる。史実との食い違いに訳注は付けない（訳注は別の読みや後代の挿入に限る）。
- 確かめた資料：Oehler 画像 0313（本文、校注 46 章 58〜61、注 v・w）。OCR l. 36308–36311、36323–36324、36350–36369、36374–36375、36390–36391、36401–36403。Bindley OCR l. 8636–8638、8661–8663。Mayor OCR l. 26110–26125。

### 46.13 Christianus uxori suae soli masculus nascitur. Democritus … incontinentiam emendatione profitetur（注 x・y）
- 底本（Oehler）：Christianus uxori suae soli masculus nascitur. Democritus excaecando semetipsum, quod mulieres sine concupiscentia aspicere non posset et doleret si non esset potitus, incontinentiam emendatione profitetur.
- ほかの読み：soli をオクスフォードは solius（校注 46 章 62）。excaecando をエアフルト写本は exsecando。A・B は Democritus を Democretus と綴る（63）。et doleret を F は sed doleret、ウィーン写本は sed et doleret。λ には et doleret si non esset potitus の語がない（64）。potitus を F・G、ウィーン写本は potius（65）。incontinentiam を G は in nocentia（66）。Bindley は底本と同じ（OCR l. 8638–8642）。
- 採る校訂者：注 46 章 x（p. 283）は、ミヌキウス『オクタウィウス』35 章の「あなたがたは姦淫を禁じながら行う。わたしたちは自分の妻に対してだけ男として生まれる」に、テルトゥリアヌス（の言葉）が認められる、とする。注 y（p. 283）は、自分を盲にした理由についてテルトゥリアヌスと一致するのはボーヴェのヴァンサンだけで、ゲッリウス 10 巻 17 章、ディオゲネス・ラエルティオス 9 巻、キケロ『善と悪の究極について』5 巻、プルタルコスなどは別の理由を挙げる、とする。そのうえで emendatio を poena（罰）の意味とし、『見世物について』19 章（軽い罪から人殺しへと、罰によって［emendatione］進む）を例に挙げる。Mayor は uxori に『オクタウィウス』35 章 6 節、サルウィアヌス、クレメンス『教育者』を、Democritus にゲッリウス 10 巻 17 章（気を散らされないため）、キケロ、プルタルコス（この話を退ける）を挙げる（l. 26127–26145）。
- 読者への影響：小〜中 — emendatio を「矯正」と取ると文意がずれる。注 y のとおり、自分を盲にしたという「罰」によって、自分の抑えのなさを告白した、の意味。
- 訳での扱い：訳注は付けない。uxori suae soli masculus nascitur は『オクタウィウス』35:6 の既訳「自分の妻に対してだけ、男として生まれています」に揃えられる。emendatione は注 y のとおり「（自分に科した）罰によって」。デモクリトスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0313（本文、校注 46 章 62〜66、注 x・y）。OCR l. 36311–36314、36326–36327、36378–36396、36406–36427。Bindley OCR l. 8638–8642。Mayor OCR l. 26127–26145。`books/octavius/src/chapter-33-36/both.md`（35:6）。

### 46.14 At Christianus salvis oculis feminas non videt（non の有無）
- 底本（Oehler）：At Christianus salvis oculis feminas non videt; animo adversus libidinem caecus est.
- ほかの読み：feminas を D・G・b・c・d・e は feminam（校注 46 章 67）。non を D・G・a〜e は欠く。G は animo を欠く（68）。Bindley の本文は At Christianus salvis oculis feminam videt, animo adversus libidinem caecus est（non がない。OCR l. 8642–8643）。
- 採る校訂者：注 46 章 z（p. 283）は Rigaltius の「つまり、情欲を抱くために（見ない）、律法が見ることを禁じる意味で」を引き、ドイツ語で「それに対してキリスト者は女を（女たちの中に女を）見ず、目を損なわずに保つ」と訳を添える。Mayor はアテナゴラス 32 章（情欲をもって見ることさえ許されない）、オリゲネス、テオフィロス 3 巻 13 章、ユスティノス『第一弁明』、『オクタウィウス』31 章などを挙げる（l. 26147–26158）。
- 読者への影響：中 — 底本では「目は損なわずに、女を（情欲の目では）見ない」、non のない読みでは「目を損なわずに女を見るが、心は情欲に対して盲である」。どちらも、自分を盲にしたデモクリトスと比べて、キリスト者は目ではなく心で情欲を退ける、という論は同じ。
- 訳での扱い：訳注は付けない。底本の non で訳し、注 z のとおり、情欲をもって見ない意味が分かる言い方にする。non のない読みは、知っても論が変わらないので、記録にとどめる。
- 確かめた資料：Oehler 画像 0313（本文、校注 46 章 67・68、注 z）。OCR l. 36314–36315、36328、36382、36397、36429–36434。Bindley OCR l. 8642–8643。Mayor OCR l. 26147–26158。

### 46.14 ecce lutulentis pedibus Diogenes superbos Platonis toros alia superbia deculcat（第二の注 a）
- 底本（Oehler）：Si de probitate defendam, ecce lutulentis pedibus Diogenes superbos Platonis toros alia superbia deculcat: Christianus nec in pauperem superbit.
- ほかの読み：Diogenes を A・B・G は Diogenis（校注 46 章 69）。deculcat を λ は decalcat、F・ウィーン写本は conculcat。E の後の手は alia の代わりに alta（70）。nec in pauperem を λ は nec contumeliosus in pauperem（71）。Bindley は底本と同じ（OCR l. 8643–8646）。
- 採る校訂者：第二の注 a（p. 283〜284）は deculcat にディオゲネス・ラエルティオス 6 巻（Oehler は VI, 4, 25 と記す）、『外套について』4 章、ヒエロニムス『ヨウィニアヌス反駁』1 巻を挙げる。Bindley はディオゲネス・ラエルティオス 6 巻 26 節（ディオゲネスがプラトンの敷物を踏んで「プラトンの虚栄を踏む」と言い、プラトンが「別の虚栄でね、ディオゲネス」と答えた）を引く（l. 8672–8675）。Mayor は『外套について』4 章（ディオゲネスは、プラトンの寝椅子が知るように、泥だらけの足で踏みつけた）と同じ逸話を挙げ、deculcat の用例を挙げる（l. 26164–26178）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。alia superbia は、逸話のプラトンの返答のとおり「別の高慢で」。tori は訳語表で 35.2・35.11 の toros・toris が「寝椅子」。ここはプラトンの家の豪華な寝椅子（Bindley の引く逸話では敷物）で、訳語表と揃えるかはメインが決める。probitas は「正しさ」、superbit は「おごる」。
- 確かめた資料：Oehler 画像 0313（本文、校注 46 章 69〜71、第二の注 a）、0314（第二の注 a の続き）。OCR l. 36315–36317、36329–36330、36383、36397–36398、36437、36477–36478。Bindley OCR l. 8643–8646、8672–8675。Mayor OCR l. 26164–26178。

### 46.15 Pythagoras apud Thurios, Zenon apud Prienenses tyrannidem adfectant: Christianus vero nec aedilitatem（第二の注 b）
- 底本（Oehler）：Si de modestia certem, ecce Pythagoras apud Thurios, Zenon apud Prienenses tyrannidem adfectant: Christianus vero nec aedilitatem.
- ほかの読み：de modestia を G は de mestitia、F・ウィーン写本は domesticam（校注 46 章 72）。Thurios について、d は Thyrios、A・B・D・E・F・G、ウィーン写本、エアフルト写本は tyrios（「ツロの人々」。73）。Zenon を c・d は Zeno（74）。Prienenses を Aβ・E・F・G、ウィーン写本、エアフルト写本は priennenses（75）。adfectant を G は affectat（76）。aedilitatem を E、エアフルト写本は civilitatem、D・a、ヴァティカンの写本の一つは civitatem（77）。Bindley の本文は Thurios, Zeno apud Prienenses tyrannidem affectant（OCR l. 8646–8648）。
- 採る校訂者：第二の注 b（p. 284）は、ピュタゴラスについてディオゲネス・ラエルティオス 8 巻、プルタルコス『ソクラテスのダイモンについて』、アルノビウス 1 巻 40 章の注釈者を挙げ、プリエネの人々のもとで僭主の位を狙った哲学者ゼノンのことは、テルトゥリアヌスのほかにだれも記していない、とする。Bindley は tyrannidem と aedilitatem を、公の権威の最も高い段と最も低い段の対比とし、キリスト者が公職を避けることを 38 章の注に送る（l. 8677–8707）。Mayor はアルノビウス 1 巻 40 章（サモスのピュタゴラスは、不当な断罪の疑いをかけられ、神殿で生きたまま焼かれた）、アテナゴラス 31 章などを挙げ、38 章を参照させる（l. 26180–26188）。
- 読者への影響：小。底本の Thurios（トゥリオイの人々）は、校注では d の Thyrios に近く、写本の大勢は tyrios。
- 訳での扱い：訳注は付けない。modestia は訳語表の「慎み」。Zenon apud Prienenses は、第二の注 b のとおりほかに知られない「プリエネのゼノン」で、21.10 のストア派のゼノン（名前の表）とは別人。同じ「ゼノン」と書くか、出身地を添えて分けるかはメインが決める。aedilitas は最も低い公職（Bindley）で、「按察官の職」など。adfectant は、ここは「狙う」で、46.8〜46.9 の adfectare（真理を装う）とは意味が違う。ピュタゴラスは名前の表（3.10 のピュタゴラス派）に揃える。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 72〜77、第二の注 b）。OCR l. 36446–36448、36461–36463、36480–36486、36512–36513、36531–36532。Bindley OCR l. 8646–8648、8677–8707。Mayor OCR l. 26180–26188。

### 46.15 Si de aequanimitate congrediar, Lycurgus apocarteresin optavit, quod leges eius Lacones emendassent（第二の注 c と 4.7）
- 底本（Oehler）：Si de aequanimitate congrediar, Lycurgus apocarteresin optavit, quod leges eius Lacones emendassent: Christianus etiam damnatus gratias agit.
- ほかの読み：aequanimitate を λ・f と Havercamp は animi aequitate（校注 46 章 78）。apocarteresin optavit について、A・B・E は apocarteres（エアフルト写本は apocartores）inoptavit、D は aporcatesin optavit、G は apocharceres inoptavit、F・ウィーン写本は apo carceres inoptavit、Rigaltius によると Conti の本は ἀποκαρτερεῖν optavit（79）。emendassent を λ は emendaverint（80）。damnatus をオクスフォードは emendatus、F は etiam の代わりに vero（81）。Bindley の本文は Si de animi aequitate congrediar, Lycurgus ἀποκαρτέρησιν optavit（ギリシア文字で刷る。OCR l. 8683–8685）。
- 採る校訂者：第二の注 c（p. 284）は、『マルキオン反駁』1 巻 14 章の「偽善者よ、apocarteresis によってマルキオン派であることを証明するがよい」と、キケロ『トゥスクルム荘対談集』1 巻 34 章の注釈者（Davis）を挙げ、リュクルゴスの死については 4 章を見よ、とする。Bindley は ἀποκαρτέρησις を「餓死」とし、4 章とクインティリアヌス 8 巻 5 章を挙げる（l. 8709–8710）。Mayor もクインティリアヌス、『マルキオン反駁』1 巻 14 章、キケロ『トゥスクルム荘対談集』1 巻 34 章 84 節（ἀποκαρτερῶν＝食を断って世を去る者）を挙げ、4 章の「リュクルゴスの法がラケダイモン人に改められると、作った本人にひどい苦しみを与え、彼は引きこもって食を断ち、自分で自分を裁いた」を引く。aequanimitate、congrediar の用例を挙げる（l. 26190–26203）。etiam damnatus gratias agit に、Mayor は 1 章の終わりと 50 章の終わりを挙げ、Bindley も 1 章の注を参照させる（l. 26205–26206、8712）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。apocarteresis は 4:7 の既訳（「引きこもって食を断ち、自分で自分を裁いた」）と同じ出来事なので、「食を断って死ぬこと」の意味で訳せる。ギリシア語の音を写すかはメインが決める。Lacones は 4.7 の Lacedaemonii（名前の表「ラケダイモン人」）とは別の語だが、同じ人々。揃えるかはメインが決める。etiam damnatus gratias agit は 1:14 の既訳「罪に定められれば、感謝します」に揃えられる。aequanimitas は「平静さ」。リュクルゴスは名前の表どおり。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 78〜81、第二の注 c）。OCR l. 36448–36450、36464–36468、36488–36492、36514–36517、36538–36539。Bindley OCR l. 8683–8685、8709–8712。Mayor OCR l. 26190–26206。`src/chapter-04-06/both.md`（4:7）、`src/chapter-01/both.md`（1:14）。

### 46.16 Anaxagoras depositum hostibus denegavit: Christianus et extra fidelis vocatur（第二の注 d・e、fidelis の掛け言葉）
- 底本（Oehler）：Si de fide conparem, Anaxagoras depositum hostibus denegavit: Christianus et extra fidelis vocatur.
- ほかの読み：hostibus denegavit は A・B・D・E・F・G・a〜e、オクスフォード、エアフルト写本。λ・（ウィーン写本）・Havercamp は hospitibus denegavit（「客人に」）、f は denegavit hospitibus（校注 46 章 82）。et extra は A・B・E・F・G・f、ウィーン写本、エアフルト写本。D・a〜e と Havercamp は etiam extra（83）。Bindley の本文は Anaxagoras depositum hospitibus denegavit: Christianus etiam extra fidelis vocatur（OCR l. 8685–8688）。
- 採る校訂者：第二の注 d（p. 284）は、この話もテルトゥリアヌスのほかにだれも語らない、とする。第二の注 e は Rigaltius を引く。「キリスト者は、まことの信仰の規範によって、仲間うちで fideles（信者）と呼ばれる。しかし、外の人々、つまりキリスト者でない人々からも、fideles（誠実な者）と言われる。だれの信用も裏切らず、預かり物を求められて拒まなかったからだ。プリニウスも、キリストを否んだ者たちから確かめたこととして、これをトラヤヌスに書いた」。そのうえで Oehler は extra を「外の人々のあいだで」の意味とし、テルトゥリアヌスの言い方として 9 章の注（extraneus の注）に送る。Bindley は etiam extra を「外の人々に対してさえ」とし、異教徒が extranei と呼ばれる 7 章・31 章、キリスト者の誠実を言う 42 章、哲学者の金銭欲を責めるタティアノス 25 章を挙げる（l. 8714–8717）。Mayor は depositum に Seeberg とユウェナリス 13 巻を、extra に 7 章・31 章の extranei を挙げる（l. 26208–26211）。
- 読者への影響：中 — fidelis には「信者」と「誠実な者」の二つの意味があり、第二の注 e はこの掛け言葉を説明する。訳でどちらかに決めると、片方が落ちる。hostibus（敵に）か hospitibus（客人に）かで、アナクサゴラスの裏切りの相手が変わる。
- 訳での扱い：訳注は付けない。底本の hostibus で訳す。fides は、ここは預かり物を返す誠実（訳語表の fides「誠実」と同じ意味）。fidelis の掛け言葉をどう訳すか（「信者は、外の人々からも誠実な者と呼ばれる」のように二つを出すか）はメインが決める。extra は第二の注 e のとおり「外の人々のあいだでも」。アナクサゴラスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 82・83、第二の注 d・e）。OCR l. 36450–36452、36469–36470、36494–36508、36518–36519、36540–36541。Bindley OCR l. 8685–8688、8714–8717。Mayor OCR l. 26208–26211。

### 46.16 Si de simplicitate consistam, Aristoteles familiarem suum Hermian turpiter loco excedere fecit（第二の注 f・g）
- 底本（Oehler）：Si de simplicitate consistam, Aristoteles familiarem suum Hermian turpiter loco excedere fecit: Christianus nec inimicum suum laedit.
- ほかの読み：Hermian は A・B・E・G、エアフルト写本。F・ウィーン写本は heriman、D・a〜f と Havercamp は Hermiam（校注 46 章 84）。loco を Havercamp は toro と書こうとした。G は誤って hermiantra pitriculo と書く（85）。Bindley の本文は Hermiam（OCR l. 8688–8691）。
- 採る校訂者：第二の注 f（p. 284）は consistam を『偶像崇拝について』13 章の注に送る（法廷で争う語。46.1 の項）。第二の注 g は「この言葉でテルトゥリアヌスが何を言うのか、わたしたちには分からない。ほかの書き手は黙っているからだ」とし、アリストテレスとヘルメイアスの親しさについて Apellicon が本を書いたこと（エウセビオス『福音の準備』15 巻 2 章のアリストクレス）を挙げる。Havercamp の toro（loco の代わりに「寝床」）は、アリストテレスがアタルネウスの僭主ヘルメイアスの側女を愛し、彼の許しを得て妻にしたというディオゲネス・ラエルティオス 5 巻の話に寄りかかったもので、取るに足りない、と退ける。Bindley はディオゲネス・ラエルティオス 5 巻 3〜4 節を挙げる（l. 8719）。Mayor は simplicitate を「まっすぐな付き合い」とし、アリストテレスの話はタティアノス 2 章（Oehler が下のアリスティッポスのところで引く）から来たとして、ディオゲネス・ラエルティオス 5 巻 4 節のアリスティッポス（の著作）が伝える側女の話を引く（l. 26232–26250）。
- 読者への影響：小〜中 — loco excedere fecit（その場所、地位から去らせた）が何を指すかは、第二の注 g のとおり分からない。
- 訳での扱い：訳注は付けない。底本の loco excedere fecit を、出来事を補わずに「恥ずべき仕方でその地位（場所）から去らせた」の形で訳す（toro の話を足さない）。simplicitas は「まっすぐさ、裏表のなさ」。アリストテレス、ヘルメイアスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 84・85、第二の注 f・g）。OCR l. 36452–36454、36471、36520–36521、36542–36543、36550–36566。Bindley OCR l. 8688–8691、8719。Mayor OCR l. 26232–26250。

### 46.17 Idem Aristoteles tam turpiter Alexandro regendo potius adolatur, quam Plato a Dionysio ventris gratia venditatur（第二の注 h・i）
- 底本（Oehler）：Idem Aristoteles tam turpiter Alexandro regendo potius adolatur, quam Plato a Dionysio ventris gratia venditatur.
- ほかの読み：tam turpiter を λ と Havercamp は tam indecore（校注 46 章 86）。adolatur は A がいつもどおり書く形で、E、エアフルト写本は adulatus。regendo を λ は regi（87）。quam Plato a Dionysio は A・B・D・E・F・G・a〜e、オクスフォード、エアフルト写本、ウィーン写本。λ は quam Dionysio、f と Havercamp は quam Plato Dionysio（88）。venditatur を F・G は vendicatur（89）。Bindley の本文は tam turpiter Alexandro regendo potius adulatur, quam Plato Dionysio ventris gratia venditatur（OCR l. 8691–8694）。
- 採る校訂者：第二の注 h（p. 284）は、アリストテレスがアレクサンドロスにへつらったことは、テルトゥリアヌスのほかにタティアノス『ギリシア人への演説』3 章も証言する、とする。第二の注 i は venditatur にディオゲネス・ラエルティオス 3 巻、プルタルコス『ディオン伝』5 章、ディオドロス 15 巻 7 章、ネポス『ディオニュシオス伝』2 章、セネカ書簡 47、ラクタンティウス、タティアノス 3 章などを挙げる。第二の注 k（p. 285。46.17 の次の項）が引くタティアノスのギリシア語には「哲学者プラトンは、大食のためにディオニュシオスに売られた」「アリストテレスは……少年アレクサンドロスにひどく無教養にへつらった」とあり、Oehler はこれを「テルトゥリアヌスの出どころ」とする。Mayor もプラトンの話をタティアノスからとし、セネカ書簡 47（プラトンが何歳で奴隷になり始めたか）、ラクタンティウスなどを挙げる（l. 26252–26258）。
- 読者への影響：小〜中 — tam … quam は「〜と同じほど」で、「アリストテレスは、アレクサンドロスに、プラトンが腹のためにディオニュシオスに売られたのと同じほど恥ずべき仕方でへつらう」の比べ方になる。Alexandro regendo potius の potius の掛かり方には資料の注がない（末尾の「未確認」）。
- 訳での扱い：訳注は付けない。adolatur は訳語表の adolatio（25.17）「へつらい」の動詞で、「へつらう」。venditatur は第二の注 i・k のとおり「（奴隷として）売られる」で、ventris gratia はタティアノスの「大食のために」。Alexandro regendo は「（本来は）導くべきアレクサンドロス」の意味に読める（potius の取り方はメインが確かめる）。アレクサンドロスは名前の表（11.15）どおり。ディオニュシオスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 86〜89、第二の注 h・i）、0315（第二の注 k）。OCR l. 36454–36458、36472–36474、36522–36524、36544–36546、36568–36580、36668–36679。Bindley OCR l. 8691–8694。Mayor OCR l. 26252–26258。

### 46.17 Aristippus in purpura … nepotatur, et Hippias dum civitati insidias disponit, occiditur（第二の注 k・l と、写本の名）
- 底本（Oehler）：Aristippus in purpura sub magna gravitatis superficie nepotatur, et Hippias dum civitati insidias disponit, occiditur.
- ほかの読み：purpura を Aβ は purpora（校注 46 章 90）。superficie nepotatur を F は superstitione potatur、ウィーン写本は superstitie ne potatur（91）。Hippias の名は写本で、A・B が icthydias、D とヴァティカンの写本の一つが et hidias、E、オクスフォード、エアフルト写本が et hydias、F が icthidias、ウィーン写本が icthyclias、ヴァティカンのもう一つが ichtidias、ガンとエルノンの写本が iethydias、G が iethidias、λ が ycthyas（92）。Hippias と刷る出どころは校注に書かれていない。Bindley は底本と同じ Hippias（OCR l. 8694–8696）。
- 採る校訂者：第二の注 k（p. 285）は nepotatur にディオゲネス・ラエルティオス 2 巻 66 節以下（アリスティッポスの柔弱と贅沢）を挙げ、タティアノス『ギリシア人への演説』2 章の「アリスティッポスは紫の衣を着て歩き回り、もっともらしく放蕩に暮らした」以下を引いて「見よ、テルトゥリアヌスの出どころを」と言う。第二の注 l は「テルトゥリアヌスは、エリスのソフィストのヒッピアスと、ペイシストラトスの子ヒッピアスとを取り違えている」とする。Bindley は nepotatur を「放蕩に暮らす」とし、ヒッピアスについては、ソフィストのヒッピアスの死は何も伝わらないので、テルトゥリアヌスがマラトンで倒れた同名の僭主と取り違えたと考えられてきた、あるいは写本に揺れがあるので別の名を読むべきかもしれない、と注する（l. 8721–8729）。Mayor は in purpura に『外套について』4 章とルキアノスを、superficie に『女性の装いについて』などを、nepotatur にセネカに一度だけある語、ラクタンティウス 3 巻 14 章のアリスティッポスの言葉を挙げる（l. 26260–26279）。
- 読者への影響：小〜中 — ヒッピアスの名は写本で崩れていて（icthydias など）、だれを指すかも注釈者のあいだで定まらない。
- 訳での扱い：訳注は付けない。底本の Hippias で訳し、どのヒッピアスかは補わない（名前の表で、どのディオゲネスかを補わないのと同じ扱い）。nepotatur は「放蕩に暮らす」。sub magna gravitatis superficie は「大きな威厳のうわべの下で」。アリスティッポス、ヒッピアスはメインが名前の表に足す。
- 確かめた資料：Oehler 画像 0314（本文、校注 46 章 90・91）、0315（本文、校注 92、第二の注 k・l）。OCR l. 36528、36547、36586–36595、36635–36645、36668–36686。Bindley OCR l. 8694–8696、8721–8729。Mayor OCR l. 26260–26279。

### 46.18 Hoc pro suis … Sed dicet aliquis … Desinunt tamen Christiani haberi penes nos（tamen と tum、apud vos）
- 底本（Oehler）：Hoc pro suis omni atrocitate dissipatis nemo unquam temptavit Christianus. Sed dicet aliquis etiam de nostris excedere quosdam a regula disciplinae. Desinunt tamen Christiani haberi penes nos, philosophi vero illi cum talibus factis in nomine et honore sapientiae perseverant.
- ほかの読み：temptavit Christianus を c・d は Christianus tentavit（校注 46 章 93）。dicet を F は diceret（94）。excedere を λ は excidere、D は etiam excedere。G は a regula の代わりに regulam（95）。tamen は A・B・D・F・G・f。E・a〜e、（ウィーン写本・オクスフォード）、エアフルト写本は tum（96）。F・ウィーン写本は haberi Christiani、G は hebrei Christiani、a・c は haberi を欠く（97）。nos を c は vos（98）。honore は Aβ・E・F・G、エアフルト写本、ウィーン写本。(Aφ B D)・a〜f と Havercamp は in honore（99）。perseverant を F・λ・f は perseverant apud vos（「あなたがたのもとで」。校注 46 章 第二の 1）。Bindley の本文は … desinunt tum Christiani haberi penes nos, philosophi vero … in nomine et in honore sapientiae perseverant apud vos.（OCR l. 8696–8703）。
- 採る校訂者：Bindley は desinunt tum Christiani を、44 章の終わりの言い方と同じく 39 章の破門（集まりから遠ざけること）を指すとする（l. 8731–8732）。Mayor は 44 章の終わり（44.4）とブラントを挙げる（l. 26281–26283）。Hoc pro suis omni atrocitate dissipatis の構文には、どの資料にも注がない。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Hoc は前のヒッピアスのたくらみを受け、pro suis … dissipatis は「自分の仲間があらゆるむごさで散らされても、そのために」の意味に読める。Sed dicet aliquis … は相手の言い分を持ち出す形（不定法の間接話法）で、本の AGENTS.md の inquit などの扱い（「」に入れて「と、人は言うでしょう」など）に当てるかはメインが決める。regula disciplinae の disciplina は訳語表の「教え」。44.4 と響き合う（44.4 の項）。
- 確かめた資料：Oehler 画像 0315（本文、校注 46 章 93〜99、第二の 1）。OCR l. 36598–36615、36645–36649。Bindley OCR l. 8696–8703、8731–8732。Mayor OCR l. 26281–26283。

### 46.19 Adeo quid simile philosophus et Christianus? … veritatis interpolator et integrator et expressor, et furator eius et custos?（第二の注 m・n・o、λ・f の別の並びと、47 章の初めの区切り）
- 底本（Oehler）：Adeo quid simile philosophus et Christianus? Graeciae discipulus et caeli? famae negotiator et vitae? verborum et factorum operator, et rerum aedificator et destructor? amicus et inimicus erroris? veritatis interpolator et integrator et expressor, et furator eius et custos?
- ほかの読み：Adeo quid は A・B・D・E・G・λ・a・b・f、ゴルツェ写本、エアフルト写本、ウィーン写本。F は Ideo quid、c・d・e は Quid adeo（校注 46 章 第二の 2）。D・a は philosophis et Christianis（第二の 3）。Graeciae を A は gretie、G・a は gratiae、F は gracie、ウィーン写本は gre（第二の 4）。discipulus を a は discipulis（第二の 5）。et vitae を λ は et salutis vitae、f と Havercamp は et salutis（第二の 6）。et（rerum）を b・c・d・f は欠く（第二の 7）。destructor を A・G は distructor、B は districtor。λ・f と Havercamp は destructor, et（f と Havercamp は et を欠く）interpolator erroris, et integrator veritatis, furator eius et custos? と読み、amicus et inimicus erroris がなく、interpolator を erroris に、integrator を veritatis にかける。G は destructor, amicus の代わりに amicus distructor（第二の 8）。interpolator を F・G、ウィーン写本は interpellator（第二の 9）。et expressor を d は欠く（第二の 10）。Bindley の本文は Quid adeo simile philosophus et Christianus, Graeciae discipulus et Caeli, famae negotiator et salutis, verborum et factorum operator, rerum aedificator et destructor, interpolator erroris et integrator veritatis, furator ejus et custos.（OCR l. 8703–8743）。47 章の校注 1（p. 286）によると、写本ではふつう custos antiquior omnibus. nisi fallor … と区切られ（c は custos antiquior omnibus ni fallor?）、47 章の初めの Antiquior omnibus を 46 章の最後の custos につなげる。
- 採る校訂者：第二の注 m（p. 285。Heraldus）は famae negotiator et vitae? について、著者は前に哲学者は名声だけを追うと言った（46.9 の gloriam captant）、そこから『魂について』1 章では彼らを「名声の動物」と呼ぶ、とし、ヒエロニムスの「名声の動物、民衆の風評の売り物の奴隷」を引く。第二の注 n（Heraldus）は verborum et factorum operator に、哲学者は言葉ではすぐれるが行いは何もない、と言うフィロンを引く。第二の注 o（p. 285〜286）は interpolator に、ルキフェルがコンスタンティウス帝を「真理の改竄者」と呼んだ例、『異端者への抗弁』7 章（真理を装い、改竄する人間の知恵）、『見世物について』2 章（制定する者と改竄する者は大いに違う）、『魂の証言について』3 章、『女性の装いについて』2 巻、『魂について』16 章を挙げ、veritatis expressor は「真理の解き明かし手（interpres veritatis）」とする。Bindley は Quid adeo simile に『異端者への抗弁』7 章（教会とアカデメイアに何の共通点があるか）を挙げる（l. 8734–8736）。Mayor は famae negotiator にヒエロニムスの書簡を、operator の用例を、aedificator に「荒らす者」と対にするアウグスティヌスを挙げ、interpolator を「改竄者」とし、expressor をここだけの語、furator を一度だけの語とする（l. 26289–26369）。
- 読者への影響：小〜中 — 対になる語の前が哲学者、後がキリスト者で、底本では最後の対が「真理の改竄者と、完全に保つ者・解き明かす者」「真理の盗人と番人」になる。写本の区切り（custos antiquior omnibus）では、47 章の初めの語が 46 章の最後の custos にかかる。
- 訳での扱い：訳注は付けない。底本の区切りで訳し、custos で 46 章を終える。Adeo は 46.10 と同じく「このように」。対の並びをどう見せるか（「哲学者は……、キリスト者は……」と分けるか、原文どおり語を並べるか）はメインが決める。interpolator は第二の注 o のとおり「改竄する者」、integrator は「完全なまま保つ者」、expressor は「解き明かす者」、furator は「盗む者」。vita は「いのち」（ルートの AGENTS.md の表記）。
- 確かめた資料：Oehler 画像 0315（本文、校注 46 章 第二の 2〜10、第二の注 m・n）、0316（第二の注 o の続き、47 章の校注 1）。OCR l. 36618–36632、36649–36665、36688–36752、36813–36822、36864–36880。Bindley OCR l. 8703–8743。Mayor OCR l. 26289–26369。

---

## メインで決めること

- 46.6 の Quidni? cum … deputent：注 i（「神々を打ち壊す哲学者が、なぜダイモンを追い出せないのか」の問い）に従うか、22:1・30:2 の既訳「当然でしょう」「当然ではありませんか」（Mayor の取り方と合う）に揃えるか。本の AGENTS.md の「Oehler の注を拠り所にする」と、この本の既訳の言い回しがぶつかる。
- 46.9 の Quam inlusores et corruptores inimice … の Quam の取り方（「どれほど敵意をもって……装うことか」の感嘆か、Christiani 以下との比べか）。どの資料も説明しない。底本の inimice は保ち、mimice（Bindley、Mayor の好む読み）は足さない。
- 45.3 の dicere: Non occides, an docere: Ne irascaris quidem?：Non occides を『殺すな』（マタイ五・二一の口語訳。出エジプト二〇・一三なら「あなたは殺してはならない」）として『』と出典を付けるか。Ne irascaris quidem は言い換えなので、『』に入れるか。資料はマタイ五章を挙げていない。
- 訳語表とぶつかる語：
  - iniuria：44.1 は訳語表の「損」でよいが、45.4 の iniuriam non permittere … vicem iniuriae は人に加える「害」（37:1 の既訳）。訳語表に分けて書くか。
  - forma：46.2 は注 c の「仕方、筋道」、45.4 は注 c（45 章）の「原型」で、訳語表の「決まり」（2:9、2:14）とは意味が違う。
  - fides・fidelis：46.1 の ex fide divinarum litterarum（聖書の信頼に足ること）、46.8 の ex fide（本心から。注 o）、46.16 の de fide と fidelis（預かり物を返す誠実と、「信者」との掛け言葉。第二の注 e）。
  - dispungere：44.1 の dispungitis（37 章の注 c の「清算する」）と 45.7 の dispungimur（同じ注の「吟味される」）。37:3 の既訳との揃え方。
  - dispector（45.1。注 a の「裁き手」）と speculator（45.7。『オクタウィウス』32:9 の「すべてを見張る方」）を、訳語表の iudex「裁き手」、arbiter「審判者」とどう分けるか。
  - tori（46.14 のプラトンの寝椅子）と、訳語表の toros「寝椅子」（35.2）。
  - Zenon apud Prienenses（46.15）は 21.10 のストア派のゼノンとは別人。Lacones（46.15）は 4.7 の Lacedaemonii（ラケダイモン人）と同じ人々だが別の語。
  - mathematici（43.1）と 35.12 の astrologos（既訳「占星術師」）。
- 46.15 の Thurios と 46.17 の Hippias は、校注に挙がる写本のどれにもない形（写本は tyrios、icthydias・et hidias など）で、出どころも校注に書かれていない。36.2・37.8 の先例のように `// ` メモに写本の形を書くかを決める。この一覧としては訳注は勧めない（どちらも読者の理解を変えないため）。
- 46.3 の inquit の言い分（Eadem … pudicitiam）は本の AGENTS.md どおり「」と「と、人は言います」。46.18 の Sed dicet aliquis（不定法の間接話法）を同じ扱いにするか。
- 名前の表に足す名：エピクロス（『オクタウィウス』の表を確かめる）、スペウシッポス、デモクリトス、フリュネ（表にある）、ピュタゴラス、プリエネのゼノン、トゥリオイ、アナクサゴラス、アリストテレス、ヘルメイアス、ディオニュシオス、アリスティッポス、ヒッピアス、ラコニア人（Lacones）。

---

## 未確認

- 45.1 の Mayor の p. 148 の一覧の「p. 124 l. 27 perfecto (?)」が、その行（Innocentiam a deo edocti et perfecte）の perfecte を perfecto に替える意味なのかどうか。一覧にも Mayor の注（OCR l. 25240–25294）にも説明がない。
- 45.3 の構文とマタイ五・二一〜二二、二七〜二八、三八〜三九の近さ。口語訳の本文は `node tools/bible.js` で確かめたが、この節にマタイ五章を挙げる資料は見ていない（Oehler の注 b は『マルキオン反駁』の「目には目を」の箇所を挙げるだけ）。
- 46.6 の注 i の言い換え（ダイモンを「なぜ体から追い出せないのか」）が、前の Nomen hoc philosophorum daemonia non fugat とどうつながると Oehler が考えたのか。注には説明がない。
- 46.9 の Quam の構文（inimice にかかる感嘆の「どれほど」か、Christiani 以下と比べる形か）。Oehler・Bindley・Mayor のどれにも説明がない。
- 46.15 の Thurios を Oehler がどこから取ったのか。校注には d の Thyrios と写本の tyrios しか挙がっていない。
- 46.17 の Alexandro regendo potius の potius の掛かり方（regendo と組むのか、quam と組むのか）。資料に注がない。
- 46.17 の Hippias を最初に刷ったのがだれか、写本の icthydias などの形が別の名（Bindley の言う「別の名」）を伝えるのかどうか。校注にも Bindley にも説明がない。
- 46.16 の第二の注 e が引く Rigaltius の、プリニウスがトラヤヌスにキリスト者の誠実を書いたという記述を、プリニウスの書簡（Bindley の付録 II）で確かめていない。
- 46.11 の注 s が引く『ティマイオス』28 C の文言（Oehler の引用は εἰς πολλοὺς ἐκφέρειν ἀδύνατον）を、プラトンの本文で確かめていない。
- 45.6 の注 f が挙げるマルクス・アウレリウス（Oehler は 7 巻 5 と 38 と記す）とディオゲネス・ラエルティオスの箇所を、本文で確かめていない。
