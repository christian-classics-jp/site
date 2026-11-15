# chapter-47-48 の論点（47-48）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0316_page.jpg`（p. 286）〜`0325_page.jpg`（p. 295）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,40`）・中（`pct:0,30,100,35`）・下（`pct:0,60,100,40`）に切り出して、本文・校注・注解を読んだ（0320 の注 u は `pct:55,84,45,4 --scale 2` で拡大した。切り出しは `/tmp` に置き、保存していない）。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 36583–38184（ページの境は p. 286 が l. 36757、p. 287 が l. 36956、p. 288 が l. 37097、p. 289 が l. 37223、p. 290 が l. 37356、p. 291 が l. 37555、p. 292 が l. 37670、p. 293 が l. 37803、p. 294 が l. 37893、p. 295 が l. 38028）。OCR は校注を細切れにし、λ を 4、A などに崩すので、校注の略号はすべて画像で読んだ。注解は画像で読み、OCR の行番号を添えた。

校注の番号は章ごとに振り直される。47 章は p. 286 の「Cap. XLVII.」から 1〜85（43b がある。26 はない。p. 290 まで）、48 章は p. 290 の「Cap. XLVIII.」から 1〜96（17b、25b、57b がある。p. 295 まで）。注解の記号も章ごとで、47 章は a〜v（j はない。p. 286〜290）、48 章も a〜v（p. 290〜295）。p. 286 の上の第二の注 o の続き（46 章）と、p. 295 の「Cap. XLIX.」以下（49 章の本文、校注 1、注 a）はここでは扱わない。47 章の校注 1 が伝える写本の区切り（46 章の終わりの custos に 47 章の初めをつなぐ）は、chapter-43-46.md の 46.19 の項にも書いてある。

Oehler が注で指す自分の他の注は、同じ OCR で読んだ：7 章の注 d（praescribere。l. 17219–17260）、9 章の注 f（rursus ac rursus。l. 19263–19279）、35 章の注 l（expungere。l. 31060–31100）、『見世物について』4 章の注 d（paratura。l. 3595–3605）、『偶像崇拝について』18 章の注 d（forma。l. 12835–12846）、『迫害における逃亡について』2 章の注 a（aemulus。l. 57036–57060）、『蠍の毒の解毒剤』3 章の注 b（sapiens ignis。l. 61439–61460）と 6 章の注 k（erogare。l. 62306–62325）。『スカプラへ』2 章の注（48 章の注 f が ex otio について指す）は見つからなかった（末尾の「未確認」）。47.4〜47.5 の並行箇所『諸国民へ』2 巻 2 章は、Oehler の p. 352 の本文と校注（OCR l. 44208–44253）で読んだ。

Bindley は OCR l. 8746–9177（47 章 l. 8746、48 章 l. 8968。49 章は l. 9216 から）で読んだ。Mayor の注は OCR l. 26379–26965（47 章）、26968–27580（48 章）のうち、l. 26379–26798、26798–27197、27270–27300、27373–27400、27425–27475、27490–27580 を読んだ（Mayor の本文のページでは p. 130 l. 33〜p. 140 l. 16）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。Mayor の p. 148 の一覧の項目の行を確かめるために、Mayor の本文を語で引いた（l. 7812、7926、8034、8123）。このとき Souter の英訳の 1 行（l. 7900）が出力に混じった。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148）は、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:0,40,100,60` で切り出して読んだ。この範囲の項目は四つある（p. 132 l. 11「om. scripturis」、p. 134 l. 18「ridemur] et ridemur」、p. 136 l. 16「condicionem (?)」、p. 138 l. 19「condicionis (?)」。それぞれ 47.3、47.10、48.4、48.12 に当たり、その項に書く）。

この範囲に、底本の角括弧・イタリック・短剣符はない。Oehler が乱れている（corrupta）と言う箇所もない。Oehler 自身の推定（校注で ego）は 47.3 の ex proprio instituto の一つで、立体で刷られている。

---

### 47.1 Antiquior omnibus veritas, nisi fallor, et hoc mihi proficit antiquitas praestructa divinae litteraturae（λ の Adhuc enim と、写本の区切り）
- 底本（Oehler）：Antiquior omnibus veritas, nisi fallor, et hoc mihi proficit antiquitas praestructa divinae litteraturae, quo facile credatur thesaurum eam fuisse posteriori cuique sapientiae. Et si non onus iam voluminis temperarem, excurrerem in hanc quoque probationem.
- ほかの読み：Antiquior omnibus veritas, nisi fallor, et hoc mihi proficit は A・B・D・E・F・G・a・b・e、アンブロジアーナ写本、オクスフォード、エアフルト写本、ウィーン写本（veritas を c・d は欠く。nisi を D・a〜e は ni。hoc を G は hic、F は hec）。写本ではふつう custos antiquior omnibus. nisi fallor … と区切り、c は custos antiquior omnibus ni fallor? とする（47 章の初めを 46 章の最後の custos につなぐ）。λ・f と Havercamp は、この句の代わりに Adhuc enim mihi proficit（「実際、さらに次のことがわたしの役に立つ」）と読む（校注 47 章 1）。praestructa を オクスフォードは structa（2）。quo facile credatur は A・B・E・F・G・λ・c・d・f、オクスフォード、ウィーン写本、エアフルト写本。D・a・b・e は quo facile credam（3）。posteriori を Havercamp は欠く（4）。si non onus iam voluminis を D・a は si non onus tamen voluminis、F は si onus iam voluminis（5）。excurrerem を λ は excucurrissem、D・a〜e と Havercamp は etiam excurrerem（6）。hanc を λ は hac（7）。Bindley の本文は CAPUT XLVII を Adhuc enim mihi proficit antiquitas praestructa … で始め、… etiam excurrerem in hanc quoque probationem. と読む（Antiquior omnibus veritas, nisi fallor, et hoc はない。OCR l. 8746–8751）。
- 採る校訂者：Bindley は Adhuc enim mihi proficit を「わたしの論のこの点を裏づける」とし、praestructa に 19 章を挙げる（l. 8761–8764）。Mayor は古さからの論証に 19 章のフルダ写本の断片、『異端者への抗弁』29〜32 章、フィロン、ヨセフス『アピオン反駁』、アレクサンドリアのクレメンス、ユスティノス『第一弁明』44 章などを、thesaurum に 19 章（Mayor の本文 p. 62 l. 29）を挙げる（l. 26379–26402）。
- 読者への影響：小 — 46 章の終わりとの区切りは chapter-43-46.md の 46.19 の項に書いた。λ の読みでは、「真理はすべてより古い」という言い切りがなく、古さの論が前の章の続きとして始まる。
- 訳での扱い：訳注は付けない。底本の区切りで、47 章を Antiquior omnibus veritas で始める。nisi fallor は 2:15 の既訳「わたしの思い違いでなければ」に揃えられる。praestructa は 19 章で先に組み立てた（モーセの古さの）論を受ける語。divina litteratura は神の書物（訳語表の instrumentum「書物」、18.1 の litteratura とつながる）。thesaurus は 47.10 の ignis arcani … thesaurus と同じ語。onus voluminis は「書物（巻物）の重さ」、temperare は「控える」。excurrerem は事実に反する仮定の帰結（本の AGENTS.md の「現在の推量」）。
- 確かめた資料：Oehler 画像 0316（本文、校注 47 章 1〜7）。OCR l. 36763–36778、36813–36830、36889–36911。Bindley OCR l. 8746–8751、8761–8764。Mayor OCR l. 26379–26402。

### 47.2 Quis poëtarum, quis sophistarum, qui non omnino de prophetarum fonte potaverit? … ut quae de nostris habent, ea nos conparent illis（注 c の言い換えと、λ の Nam quia … ea propter）
- 底本（Oehler）：Quis poëtarum, quis sophistarum, qui non omnino de prophetarum fonte potaverit? Inde igitur philosophi sitim ingenii sui rigaverunt, ut quae de nostris habent, ea nos conparent illis.
- ほかの読み：omnino を Fulvius Ursinus は omnium とし、λ・f と Havercamp は omnino を欠く（校注 47 章 8）。philosophi を λ・f と Havercamp は et philosophi（9）。ut quae de nostris habent, ea nos conparent illis を f は欠き、λ と Havercamp は Num（Havercamp は Nam）quia quaedam de nostris habent, ea propter nos comparent illis（「わたしたちのものをいくらか持っているので、そのためにわたしたちを彼らと比べる」。10）。Bindley の本文は … rigaverunt; nam quia quaedam de nostris habent, ea propter nos comparant illis.（comparant と直説法。OCR l. 8753–8755）。
- 採る校訂者：注 47 章 c（p. 287）で Oehler は 47.2〜47.3 をドイツ語に訳し、この句を「彼らが〔哲学者たちが〕わたしたちのものから持っているものが、わたしたちに彼らとの似かよいをもたらすように」と言い換える（ut は目的・結果の節で、主語は quae … ea、つまり借りたもの）。Bindley は（λ の本文で）nos comparant illis を「わたしたちは〔あなたがたによって〕彼らになぞらえられる」とし、哲学者が聖書に負うという考えにユスティノス『第一弁明』54 章、アレクサンドリアのクレメンス『ストロマテイス』1 巻 17 章（ヨハネ一〇・八）、『魂の証言について』5 章を挙げる（l. 8766–8776）。Mayor は poetarum に 19 章、アテナゴラス 24 章、タティアノス 40 章を、philosophi に『諸国民へ』2 巻 2 章、『魂について』1〜3 章、『異端者への抗弁』7 章などを挙げる（l. 26404–26523）。
- 読者への影響：小〜中 — 底本では、哲学者がわたしたちから借りたもののせいで、わたしたちが哲学者と似て見える（46 章の「哲学者と比べられる」に答える）。λ・Bindley の本文では、そのためにあなたがたがわたしたちを彼らと比べる、と比べる人が前に出る。
- 訳での扱い：訳注は付けない。注 c に従い、ut … conparent を「（借りたものが）わたしたちを彼らと似たものに見せる」の形で訳し、比べる人（あなたがた）を足さない。sophista は「ソフィスト」か「弁論家」か、メインが決める。sitim ingenii sui rigaverunt は「自分の才の渇きをうるおした」。
- 確かめた資料：Oehler 画像 0316（本文、校注 47 章 8〜10）、0317（注 c）。OCR l. 36778–36789、36831–36837、36893–36894、36912–36913、37004–37073。Bindley OCR l. 8752–8755、8766–8776。Mayor OCR l. 26404–26523。

### 47.3 Inde, opinor, et a quibusdam philosophia quoque eiecta est, a Thebaeis dico, et a Spartiatis et Argivis, dum ad nostra conantur（注 a・b・c と、λ の legibus）
- 底本（Oehler）：Inde, opinor, et a quibusdam philosophia quoque eiecta est, a Thebaeis dico, et a Spartiatis et Argivis, dum ad nostra conantur, et homines gloriae, ut diximus, et eloquentiae solius libidinosi, si quid … verterunt, …
- ほかの読み：opinor を f は欠く（校注 47 章 11）。et を G・c は欠く（12）。a を F・ウィーン写本は欠く（13）。philosophia quoque eiecta est は A・B・E・F・G、オクスフォード、エアフルト写本、ウィーン写本。D・a・b・e・f は quoque eiecta philosophia、c は quoque philosophia eiecta est、λ と Havercamp は philosophia legibus quoque eiecta est（「法によっても」。14）。Thebaeis は A・B・E・F・G・λ・d・e、オクスフォード、エアフルト写本、ウィーン写本。a・b・c・f は Thebanis、D は Thebis（15）。et a は Aβ・E・F・G、ウィーン写本、エアフルト写本、アンブロジアーナ写本。λ は et ab、(Aφ B D)・a〜f と Havercamp は a（16）。Spartiatis を Aφ は spartiacis（17）。Argivis を λ と Havercamp は Argaeis（18。注 a によると λ の読み）。ad nostra を D・a は a vestra、c・d は nostra、E・エアフルト写本は auram（19）。conantur を c・f と Fulvius Ursinus は contaminantur（20）。et homines を λ・f は Sed homines、アンブロジアーナ写本は ut homines（21）。Bindley の本文は … philosophia legibus quoque ejecta est, a Thebanis dico, a Spartiatis et Argivis. Dum ad nostra conantur et homines gloriae, … と、Dum から新しい文を始める（OCR l. 8755–8759）。
- 採る校訂者：注 47 章 a（p. 286）は Thebaei の形に、スパルティアヌス『ニゲル伝』とクラウディアヌスの用例を挙げ、同じ形の例として Atheniensis の代わりの Athenaeus がルクレティウスとプリニウスにあるとし、Argaeis はフルダ写本の読みとする。続けて、アテナイではソフォクレス（アンフィクレイデスの子）の法で哲学者が追放されたこと（アテナイオス、ディオゲネス・ラエルティオス）、スパルタについての研究を挙げ、「テーバイ人とアルゴス人が哲学者に対して出した法については、まったく知らない」とする。注 b（Havercamp）は dum ad nostra conantur を「わたしたちのものから何かを知ろうとするあいだに」とし、Oehler は 40 章の conantur oculis tenus（40.7）を挙げて、conari は「まねる、追う、ねらう」の意味だとする。注 c で Oehler は 47.2〜47.3 をドイツ語に訳す。dum の節を追放の理由とし（「彼ら〔哲学者たち〕がわたしたちのものに手を出したので」）、続く et homines gloriae … も同じ文の中で哲学者たちを言う。さらに「テルトゥリアヌスは、哲学者たちが、いくらかキリスト者の教えに従ったために、キリスト者と同じ罰を受けたと推し量って、戯れているのだ（Ludit）」と言う。Bindley は Dum ad nostra conantur を「わたしたちの教えをまねようとするあいだに」とし、homines gloriae, ut diximus に 46 章と 19 章の断片（gloriae homines si quid invenerant, ut proprium facerent, adulteraverunt）を挙げる（l. 8778–8782）。Mayor も homines に 19 章の断片と 46.9 の gloriam captant、『魂について』1 章の gloriae animal、『諸国民へ』2 巻 2 章などを挙げる（l. 26525–26577）。
- 読者への影響：中 — 注 c では、追放は哲学者が「わたしたちのもの」に手を出したからで、opinor（思うに）を添えた冗談として読む。Bindley の区切りでは、追放の話はそこで終わり、Dum 以下は聖書をゆがめた次第の話になる。λ の legibus（法によって）は、注 a の言う追放の法と合う。
- 訳での扱い：訳注は付けない。注 c に従い、dum ad nostra conantur を追放の理由として前の文につなぎ、opinor の「思うに」で戯れの調子を残す。conantur は注 b の「まねる、手を出す」（40:7 の conantur の既訳「実であろうとします」とは文脈が違う）。homines gloriae, ut diximus は 46.9 の gloriam captant（既訳「名声を追う者」）と 19:7 の Gloriae homines（既訳「名誉を求める人々」）を受けるので、どちらに揃えるかはメインが決める。地名はテーバイ人（『オクタウィウス』18:6 のテーバイ）、スパルタ人、アルゴス人（名前の表のアルゴス）。
- 確かめた資料：Oehler 画像 0316（本文、校注 47 章 11〜21、注 a・b）、0317（注 c）。OCR l. 36792–36804、36838–36854、36882–36950、37004–37073。Bindley OCR l. 8755–8759、8778–8782。Mayor OCR l. 26525–26577。`books/tertullian-apology/src/chapter-40-42/both.md`（40.7）、`chapter-18-20/both.md`（19.7）、`chapter-43-46/both.md`（46.9）。

### 47.3 si quid in sanctis scripturis offenderunt digestis（digestis の掛かり、scripturis の有無）
- 底本（Oehler）：si quid in sanctis scripturis offenderunt digestis, ex proprio instituto curiositatis ad propria opera verterunt
- ほかの読み：sanctis scripturis を B・F・G、ウィーン写本は scripturis sanctis、λ・f と Havercamp は scripturis を欠く（in sanctis … digestis。校注 47 章 22）。digestis を F・ウィーン写本は de gestis（23）。Bindley の本文は si quid in sanctis offenderunt digestis（scripturis がない。OCR l. 8758–8759）。Mayor は p. 148 の一覧で「p. 132 l. 11 om. scripturis」とし、scripturis を欠く読みを好む（Mayor の本文 l. 7812 は scripturis を刷る）。
- 採る校訂者：注 47 章 c（p. 287）で Oehler は、digestis を Junius らのように後ろの語につなげてはいけないとし、「整えられた聖書と、抜き出された聖書の対比」と言う。「聖書の順序を取り去り、好奇心の気ままにあちこちから抜き出す者は、自分のものにしようと何かに行き当たる（offendit）と、もとの信頼まで取り去る。それで改竄者と呼ばれてよい」。ドイツ語訳では「聖書の整えられたつながりの中で何かに行き当たると」とする。Bindley は offenderunt を「（聖書の中の何かに）つまずくなら」とし、digestis は『マルキオン反駁』4 巻 3 章で聖書に使われ、単数では 4 巻 5 章に「ルカの digestum」とある、とする（l. 8784–8788）。Mayor も digestis に『マルキオン反駁』4 巻 3 章・5 章、『諸国民へ』2 巻 1 章、『洗礼について』1 章を挙げる（l. 26579–26590）。
- 読者への影響：小〜中 — offenderunt を「行き当たる、見つける」（Oehler）と取るか「つまずく」（Bindley）と取るかで、哲学者が聖書から拾ったのか、聖書に引っかかったのかが変わる。
- 訳での扱い：訳注は付けない。注 c に従い、digestis は sanctis scripturis にかかり（「順序立てて整えられた聖書」）、offenderunt は「行き当たる、見つける」。
- 確かめた資料：Oehler 画像 0316（本文、校注 47 章 22・23）、0317（注 c）。OCR l. 36810、36855、36901、36921、37065–37073。Bindley OCR l. 8758–8759、8784–8788。Mayor 画像 0172（p. 148）。Mayor OCR l. 7812、26579–26590。

### 47.3 ex proprio instituto curiositatis ad propria opera verterunt（Oehler の推定 ego と、写本の proinstituto）
- 底本（Oehler）：ex proprio instituto curiositatis ad propria opera verterunt（立体で刷られた Oehler 自身の推定）
- ほかの読み：ex proprio instituto は Oehler の推定（校注 47 章 24：ex proprio instituto ego.）。A・B・E、オクスフォード、エアフルト写本は ex proinstituto、D・G・a は ex inprostituto、F・ウィーン写本は et pro instituto、(λ?)・b・c・d・e は pro instituto、f と Havercamp は Fulvius Ursinus に従って exinde regestum pro instituto（24）。ad propria opera は Aφ・B・D・E・F・G・(λ)・b・d、オクスフォード、エアフルト写本、ウィーン写本、Pamelius の写本。(Aβ)・a・c・e・f と Havercamp は ad propria（25）。Bindley の本文は exinde regestum pro instituto curiositatis ad propria verterunt（OCR l. 8759、8796）。
- 採る校訂者：注 47 章 c（p. 287）で Oehler は「こう直した。最もよい写本は ex proinstituto と伝えるが、これは ex prio instituto と略して書いたものから生じた誤りだ。proinstitutum は何の意味もない語だ」と言う。Junius は proinstitutum を「好奇心の、前もって心に抱いた企て。それに従って彼らは聖書を整え直し、自分の作品へ向ける」と解したと紹介する。ドイツ語訳では「（抜き出して）好奇心に固有のやり方で、自分の作品へ向けた」とする。Bindley は regestum を「自分の空想の筋書きに合うように書き写して変えた」とし、curiositas に 25 章の注を参照させる（l. 8790–8791）。
- 読者への影響：小 — どの読みでも、哲学者が好奇心のままに聖書の言葉を自分の作品に使った、という意味は変わらない。
- 訳での扱い：訳注は付けない。立体で刷られた推定で文意を変えないので、本の AGENTS.md（36.2 の necesse habent、37.8 の civitatium）にならい、`// ` メモに推定であることと写本の読み（ex proinstituto など）を書く。curiositas は「好奇心」。
- 確かめた資料：Oehler 画像 0316（本文、校注 47 章 24）、0317（本文、校注 25、注 c）。OCR l. 36810、36857–36858、36902–36903、36922–36924、36962、36974、36979–36985、37004–37036。Bindley OCR l. 8759、8790–8791、8796。

### 47.3 neque satis credentes divina esse, quo minus interpolarent, neque satis intellegentes, ut adhuc tunc subnubila, etiam ipsis Iudaeis obumbrata, quorum propria videbantur（注 c の言い換え）
- 底本（Oehler）：neque satis credentes divina esse, quo minus interpolarent, neque satis intellegentes, ut adhuc tunc subnubila, etiam ipsis Iudaeis obumbrata, quorum propria videbantur.
- ほかの読み：credentes divina esse quo minus interpolarent を F は欠き、G は credentes を欠く（校注 47 章 27）。quo minus interpolarent, neque satis intellegentes … quorum propria を G は欠く（28）。subnubila を F・a・b は sub nubilo、c は sublimia（29）。Bindley は底本と同じ（OCR l. 8796–8799）。
- 採る校訂者：注 47 章 c（p. 287）の Oehler のドイツ語訳は、「改竄しないほどには、その神性を十分に信じず、また十分に理解もしなかった。それは、当時はまだ半ば曇っていて、それが自分たちのものと見えたユダヤ人にさえ覆い隠されていたからだ」とする（ut を「〜だったので、〜のように」と取る）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。注 c に従い、quo minus interpolarent は「改竄するのをためらうほどには（信じなかった）」、ut adhuc tunc subnubila … は「当時はまだ半ば曇っていて」の理由・状況。interpolare は 46.19 の interpolator（既訳「真理をゆがめる者」）と同じ語。quorum propria videbantur は「（聖書は）ユダヤ人のものと見えていた」。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 27〜29、注 c）。OCR l. 36962–36965、36975–36989、37033–37061。Bindley OCR l. 8796–8799。

### 47.4 Nam et si qua simplicitas erat veritatis, eo magis scrupulositas humana fidem aspernata mutabat（mutabat と nutabat、『諸国民へ』2 巻 2 章）
- 底本（Oehler）：Nam et si qua simplicitas erat veritatis, eo magis scrupulositas humana fidem aspernata mutabat, per quod in incertum miscuerunt etiam quod invenerant certum.
- ほかの読み：Nam et si qua を F・G、ウィーン写本は nam et qua（G は quae、F は quia。校注 47 章 30）。mutabat は A・B・D・E・G・a〜e、Bongars の写本、オクスフォード、エアフルト写本、ウィーン写本。F・λ・f と Havercamp は nutabat（「揺らいだ」。31）。Bindley の本文は … fidem aspernata nutabat（OCR l. 8801）。
- 採る校訂者：注 47 章 d（p. 287。Heraldus）は「mutabat が正しい読みだと思う。彼らは気に入らないことを変え、改竄したのだから」とする。Bindley は nutabat を「揺らいだ」とし、mutabat（変えた）を別の読みとして挙げ、並行箇所『諸国民へ』2 巻 2 章の読みが nutat だとする（l. 8811–8812）。その『諸国民へ』2 巻 2 章（Oehler p. 352）は、veritatis simplicitas per scrupulositatem passivae fidei nutat（「真理の単純さは、行き当たりばったりの信仰の細かさのせいで揺らぐ」）と読む。校注 14 では passivae fidei が Oehler 自身の補い（ego）で、nutat は伝わる読み（Aβ・a・b は fide nutat、Aφ は denutat）。同じ文の後に ad proprii ingenii opera mutasse（自分の才の作品へ変えた）とある（OCR l. 44213–44216、44243–44247）。Mayor も『諸国民へ』2 巻 2 章のこの文を挙げる（l. 26593–26603）。
- 読者への影響：小〜中 — mutabat では人間の細かさが（真理を）「変えた」、nutabat では信仰を軽んじた細かさが「揺らいだ」。
- 訳での扱い：訳注は付けない。底本と注 d に従い mutabat（変えた）で訳す。目的語は補わずに「変えていった」とするか、「（真理を）」と補うかはメインが決める。scrupulositas は「（人間の）こまごました詮索」、fidem aspernata は「信仰を軽んじて」。fides の訳し分けは末尾の「メインで決めること」。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 30・31、注 d）。OCR l. 36965–36967、37048–37052、37075–37078、44208–44247。Bindley OCR l. 8799–8802、8811–8812。Mayor OCR l. 26593–26603。

### 47.4 per quod in incertum miscuerunt etiam quod invenerant certum（in の有無と注 e）
- 底本（Oehler）：per quod in incertum miscuerunt etiam quod invenerant certum.
- ほかの読み：in incertum は λ・f と Havercamp。ほかの写本と刊本はすべて incertum（in がない。校注 47 章 32）。Bindley の本文は in incertum（OCR l. 8802）。
- 採る校訂者：注 47 章 e（p. 287）で Oehler は「in の前置詞を取り去る写本の権威も守れるだろう。混ぜることそのものによって、確かだったものがもう不確かになるからだ」と言う。並行箇所『諸国民へ』2 巻 2 章の per quod in incertum abiit etiam quod invenerant でも、in は Oehler の補い（校注 15：in incertum ego. incertum A a b。OCR l. 44216、44247）。
- 読者への影響：小 — 底本では「見つけていた確かなものまで、不確かなものの中へ混ぜ込んだ」、写本の大勢では「確かなものまで、不確かに混ぜた」。意味は同じ。
- 訳での扱い：訳注は付けない。底本の in incertum で訳す。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 32、注 e）。OCR l. 36967–36968、36992、36996、37080–37083、44216、44247。Bindley OCR l. 8802。

### 47.4 Inventum enim solummodo deum non ut invenerant disputaverunt, ut et de qualitate et de natura eius et de sede disceptent（注 f）
- 底本（Oehler）：Inventum enim solummodo deum non ut invenerant disputaverunt, ut et de qualitate et de natura eius et de sede disceptent.
- ほかの読み：deum を λ は deum nostrum（校注 47 章 33）。et de sede を c は欠き、F は et de se、ウィーン写本は et de（34）。disceptent を G は disputent（35）。Bindley の本文は ut de qualitate …（et がない。OCR l. 8803–8805）。
- 採る校訂者：注 47 章 f（p. 287）は「哲学者たちは、神を、単純で、人間の感覚より大きく、捉えきれない方として見つけたのに、見つけたとおりに論じなかった。見つけたものに満足せず、迷い出て、その性質、本性、座についてまで争うほどになった」と言い換える。Bindley は「（聖書の中に、存在することだけが単純に示されている）神を、示されたとおりに論じず、その性質、本性、住まいを論じ始めた」とし、de sede にキケロ『神々の本性について』1 巻などを挙げる（l. 8814–8825）。並行箇所『諸国民へ』2 巻 2 章は Invento enim solummodo deo non ut invenerunt exposuerunt, ut de qualitate eius et de natura, etiam de sede disceptent と読む（OCR l. 44217–44219）。Mayor は Ashton が『諸国民へ』から inuento … Deo adeo と読むと紹介する（l. 26605–26606）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。注 f に従い、solummodo は「ただ（神を）見つけただけで」の意味で、見つけたものに満足しなかった、と続く。ut … disceptent は結果の節（「〜についてまで争うほどに」）。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 33〜35、注 f）。OCR l. 36968–36970、36993、37053–37055、37085–37091、44217–44219。Bindley OCR l. 8803–8805、8814–8825。Mayor OCR l. 26605–26606。

### 47.5 Alii incorporalem adseverant, alii corporalem, ut tam Platonici quam Stoici（対応の順と、λ・Bindley の qua … qua）
- 底本（Oehler）：Alii incorporalem adseverant, alii corporalem, ut tam Platonici quam Stoici;
- ほかの読み：adseverant, alii corporalem ut tam Platonici quam Stoici は A・B・D・E・F・G・a〜e、エアフルト写本、オクスフォード、ウィーン写本。λ は asseverant qua Platonici et Stoici、f は asseverant, alii corporalem qua Platonici et Stoici、Havercamp は asseverant, alii corporalem, qua Platonici, qua et Stoici（校注 47 章 36）。Bindley の本文は Havercamp と同じ（OCR l. 8805–8807）。
- 採る校訂者：注 47 章 g（p. 287〜288）は、ストア派の物体の神についてリプシウス『ストア派の自然学』1 巻 8 章などを、プラトン派の非物体の神についてキケロ『神々の本性について』1 巻 12 章の注釈者、プラトン『ティマイオス』、ディオゲネス・ラエルティオス 3 巻 77 節、マクシモス、アルキノオス、アプレイウス、『オクタウィウス』19 章を挙げる。Bindley は qua Platonici, qua et Stoici を「プラトン派とストア派が、それぞれ」とし、プラトンの神が非物体であることにディオゲネス・ラエルティオス 3 巻 77 節を、ストア派の唯物論に 21 章などを挙げる（l. 8827–8837）。
- 読者への影響：小 — どの読みでも、非物体と言うのがプラトン派、物体と言うのがストア派という対応は同じ。
- 訳での扱い：訳注は付けない。ut tam Platonici quam Stoici は、前の alii … alii … と順に対応する（「プラトン派は非物体の、ストア派は物体の神だと言い張る」）。この順が分かるように訳す。adseverare は訳語表の「言い張る」。主語の「神」は前の文の deum を受けるので、補ってよい。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 36、注 g）、0318（注 g の続き）。OCR l. 36970–36971、36999–37000、37042–37044、37093–37094、37140–37148。Bindley OCR l. 8805–8807、8827–8837。

### 47.5 alii ex atomis, alii ex numeris, qua Epicurus et Pythagoras, alius ex igni, qua Heraclito visum est（alius と alii、qua と sicut）
- 底本（Oehler）：alii ex atomis, alii ex numeris, qua Epicurus et Pythagoras, alius ex igni, qua Heraclito visum est:
- ほかの読み：qua（Epicurus）は A・B・E・F・f、ウィーン写本、Havercamp。D・G・a〜e は sicut（校注 47 章 37）。alius は A・F・λ、ウィーン写本。B・D・E・G・a〜f、エアフルト写本、オクスフォードは alii（38）。ex igni は A・B・E、ウィーン写本、エアフルト写本。D・F・G・a〜f と Havercamp は ex igne、λ は igni（39）。qua（Heraclito）は A・B・E・F・λ・a・f、エアフルト写本、ウィーン写本。D・G・b〜e は qualiter（40）。Heraclito を λ・c・d は Heracleto（41）。Bindley の本文は alii ex igne, qua Heraclito visum est（OCR l. 8807–8809）。
- 採る校訂者：注 47 章 h（p. 288）は、エピクロスの神の考えにディオゲネス・ラエルティオス 10 巻 139 節、キケロ『神々の本性について』1 巻 10 章以下、ルクレティウス 5 巻を、ピュタゴラスにディオゲネス・ラエルティオス 8 巻 25 節以下、プルタルコス『哲学者の説』を挙げる。注 i は、ヘラクレイトスにディオゲネス・ラエルティオス 9 巻 7 節以下を挙げる。Bindley は、原子と数の説にディオゲネス・ラエルティオスを挙げ、「Pythagoras の前にもう一度 qua があるべきで、エピクロスとピュタゴラスがそれぞれ、の意味」とする。ヘラクレイトスの火にはディオゲネス・ラエルティオス 9 巻 7 節を挙げる（l. 8839–8846）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。ここも順に対応する（原子はエピクロス、数はピュタゴラス）。底本の alius は単数で、ヘラクレイトス一人を指す。主語は前と同じく神（神は原子から、数から、火から成る）。名前は名前の表のエピクロス、ピュタゴラスと、ヘラクレイトス（ほかの本の表と同じ）。
- 確かめた資料：Oehler 画像 0317（本文、校注 47 章 37）、0318（本文、校注 38〜41、注 h・i）。OCR l. 36971、37001、37045、37100、37115–37117、37150–37160。Bindley OCR l. 8807–8809、8839–8846。

### 47.5 et Platonici quidem curantem rerum, contra Epicurei otiosum et inexercitum, et ut ita dixerim, neminem humanis rebus（注 k・l、λ の別の並びと『諸国民へ』2 巻 2 章）
- 底本（Oehler）：et Platonici quidem curantem rerum, contra Epicurei otiosum et inexercitum, et ut ita dixerim, neminem humanis rebus;
- ほかの読み：λ は visum est: et Platonici quidem curantem rerum の代わりに visum et Platoni: et quidem curantem rerum factorem et actorem rerum contra Epicuri otiosum et inexercitatum et, ut ita dixerim, neminem in rebus humanis と読む（「プラトンには、物事を気づかい、物事を作り、動かす方と見え、それに対してエピクロスには、暇で働かず……」。校注 47 章 42）。inexercitum を G・λ は inexercitatum（43）。neminem humanis を Fulvius Ursinus は immunem ab humanis（43b）。Bindley は底本と同じ（OCR l. 8809–8852）。
- 採る校訂者：注 47 章 k（p. 288）は、プラトン派の物事を気づかう神に『ティマイオス』p. 28、アプレイウス、『オクタウィウス』19 章、ラクタンティウス 3 巻 17 章を挙げる。注 l は neminem humanis rebus を ἀλειτούργητον（務めを負わない）と言い換え、ディオゲネス・ラエルティオス 10 巻 77 節、ルクレティウス 1 巻・2 巻、キケロ『神々の本性について』1 巻 37 章以下、『オクタウィウス』を挙げる。並行箇所『諸国民へ』2 巻 2 章は Platonici quidem curantem rerum et arbitrum et iudicem, Epicurei otiosum et inexercitum et, ut ita dixerim, neminem と読む（OCR l. 44219–44221。λ の factorem et actorem rerum と似た補いがある）。Bindley は neminem humanis rebus を「人間の事柄にとっては、いないも同然の者」とする（l. 8870）。Mayor は『諸国民へ』2 巻 2 章、『見世物について』30 章、アルノビウス 2 巻 56 章、キケロ、エンニウス、ルクレティウスなどを挙げる（l. 26643–26698）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。neminem humanis rebus は注 l のとおり「人間の事柄にとっては、だれでもない者（何の務めも果たさない者）」。ut ita dixerim は「言ってみれば」。otiosum et inexercitum は「暇で、何もしない」。
- 確かめた資料：Oehler 画像 0318（本文、校注 47 章 42〜43b、注 k・l）。OCR l. 37101–37102、37117–37122、37162–37171、37190–37191、44219–44221。Bindley OCR l. 8809–8852、8870。Mayor OCR l. 26643–26698。

### 47.5 positum vero extra mundum Stoici, qui figuli modo extrinsecus torqueat molem hanc; intra mundum Platonici（Bindley の指摘：ストア派とエピクロス派）
- 底本（Oehler）：positum vero extra mundum Stoici, qui figuli modo extrinsecus torqueat molem hanc; intra mundum Platonici, qui gubernatoris exemplo intra id maneat quod regat.
- ほかの読み：D は Stoici から intra mundum までを欠く（校注 47 章 44）。intra id は A・B・E・F・G、エアフルト写本、ウィーン写本。D・a〜f と Havercamp は intra illud（45）。quod を A・B・E・G、エアフルト写本は quos（46）。Bindley の本文は intra illud（OCR l. 8852–8854）。
- 採る校訂者：Bindley は「これはストア派の教えを取り違えている。ストア派は支配する霊を世界の内に置き、全体と同じものとした（21 章、セネカ『自然研究』序）。世界の外に神を置いたのはエピクロス派だ（セネカ『恩恵について』4 巻 19 章）」と注する（l. 8872–8879）。Mayor も extra mundum に「エピクロスがそう言う」とセネカ『恩恵について』4 巻 19 章などを挙げる（l. 26699–26700）。並行箇所『諸国民へ』2 巻 2 章も positum vero extra mundum Stoici, intra mundum Platonici と読む（OCR l. 44221–44222）。Oehler の注はこの句にない。
- 読者への影響：小 — 写本に異読はなく、著者の書いたとおりの本文。
- 訳での扱い：訳注は付けない。底本のとおり、世界の外に置くのはストア派、内に置くのはプラトン派と訳す。figuli modo は「陶工のように」、torqueat molem hanc は「この塊（世界）を回す」、gubernatoris exemplo は「舵取りのように」。
- 確かめた資料：Oehler 画像 0318（本文、校注 47 章 44〜46）。OCR l. 37103–37105、37123、37178–37182、44221–44222。Bindley OCR l. 8852–8854、8872–8879。Mayor OCR l. 26699–26700。

### 47.6 Sic et de ipso mundo … Sic et de animae statu … ut quis sensit, ita et intulit aut reformavit（注 m）
- 底本（Oehler）：Sic et de ipso mundo natus innatusve sit, decessurus mansurusve sit, variant. Sic et de animae statu, quam alii divinam et aeternam, alii dissolubilem contendunt, ut quis sensit, ita et intulit aut reformavit.
- ほかの読み：de animae statu を E・エアフルト写本は deam maiestatem（校注 47 章 47）。et intulit aut reformavit を λ は aut intulit quid aut reformavit、D・a・b・c・d は intulit aut reformavit（et がない。48）。Bindley の本文は … contendunt: ut quis sensit, ita et intulit aut reformavit.（OCR l. 8855–8858）。
- 採る校訂者：注 47 章 m（p. 288）は、世界についての哲学者の説にプルタルコス『哲学者の説』2 巻 4 章、キケロ『トゥスクルム荘対談集』、プラトン『ティマイオス』、セネカ、タティアノス 41 章（Oehler は Orat. ad Graec. cap. 41 と記す）、アレクサンドリアのクレメンス、『オクタウィウス』34 章、アルノビウス 2 巻 56 章、ラクタンティウス 2 巻 10 章を挙げる。Bindley は ut quis sensit にアタナシオス『受肉について』2 章を挙げる（l. 8881）。Mayor は『魂の証言について』1 章、『魂について』3 章・5 章、innatus に『ヘルモゲネス反駁』などを、dissolubilem に『魂について』14 章などを挙げる（l. 26612–26735）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。natus innatusve は「生まれたものか、生まれないものか」、decessurus mansurusve は「過ぎ去るものか、とどまるものか」。ut quis sensit, ita et intulit aut reformavit は「それぞれ思ったとおりに、（説を）持ち込み、あるいは作り変えた」。reformare は 48.4 の reformari、48.10 の reformantur と同じ語。
- 確かめた資料：Oehler 画像 0318（本文、校注 47 章 47・48、注 m）。OCR l. 37105–37108、37174、37183–37184、37193–37205。Bindley OCR l. 8855–8858、8881。Mayor OCR l. 26612–26735。

### 47.7 Nec mirum, si vetus instrumentum ingenia philosophorum interverterunt（注 n、interverterunt の意味）
- 底本（Oehler）：Nec mirum, si vetus instrumentum ingenia philosophorum interverterunt.
- ほかの読み：instrumentum を F は testamentum（校注 47 章 49）。Bindley は底本と同じ（OCR l. 8860–8861）。
- 採る校訂者：注 47 章 n（p. 288）は「聖書をしばしば instrumentum と呼ぶ」とし、『プラクセアス反駁』20 章（両方の契約の書）、『マルキオン反駁』4 巻 1 章（「片方の書、あるいはもっと普通の言い方では、契約」）、18 章の注を挙げる。Bindley も 18 章の注を参照させる（l. 8883）。Mayor は instrumentum に 17 章・18 章などの用例を、interverterunt にセネカ、フロンティヌス、アプレイウス『弁明』83 章を挙げ、「（物を）横領する」の意味もあるとする（l. 26737–26754）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。instrumentum は訳語表の「書物」（19.1、21.1）。vetus は「古い（書物）」で、新約と対にした「旧約」とするかはメインが決める（注 n は両方の契約の書の例を挙げる）。interverterunt は「（書物を）ねじ曲げた、横取りした」。ingenia philosophorum が主語。
- 確かめた資料：Oehler 画像 0318（本文、校注 47 章 49、注 n）。OCR l. 37108–37109、37127、37207–37213。Bindley OCR l. 8860–8861、8883。Mayor OCR l. 26737–26754。

### 47.7 Ex horum semine etiam nostram hanc novitiolam paraturam viri quidam … adulteraverunt et de una via obliquos multos et inexplicabiles tramites sciderunt（注 o・p・q と異端）
- 底本（Oehler）：Ex horum semine etiam nostram hanc novitiolam paraturam viri quidam suis opinionibus ad philosophicas sententias adulteraverunt et de una via obliquos multos et inexplicabiles tramites sciderunt.
- ほかの読み：etiam は A・B・F・G・f。D・E・a〜e、エアフルト写本、オクスフォード、ウィーン写本は et。semine を B は femine、G は foeminae（校注 47 章 50）。obliquos を E、エアフルト写本、オクスフォードは aliquos（51）。et inexplicabiles tramites sciderunt は A・B・E・f・(ウィーン写本)・エアフルト写本。λ は tramites et inexplicabiles exciderunt、F は et inexplicabiles sciderunt、G は et inestimabiles tramites exciderunt、D・a〜e は tramites et inexplicabiles sciderunt（52）。Bindley の本文は Ex horum semine et nostram … obliquos multos tramites et inexplicabiles sciderunt（OCR l. 8860–8864）。
- 採る校訂者：注 47 章 o（p. 288）は novitiolam paraturam を『見世物について』4 章の注に送る。その注 d で Oehler は、paratura は「テルトゥリアヌスがきわめてよく使う語」とし、『蠍の毒の解毒剤』10 章、『パリウムについて』3 章、『ウァレンティノス派反駁』26 章（paratura mundi）、『護教論』22 章・27 章を挙げる（OCR l. 3595–3605）。注 p（p. 288〜289。Heraldus）は ad philosophicas sententias adulteraverunt を「異端者を指す。著者は別の所で哲学者を異端者の族長と呼ぶ」とし、adulterare の用例に『偶像崇拝について』1 章（偽りの神々に仕える者は真理の姦夫だ）、『異端者への抗弁』30 章（ウァレンティノス、マルキオンらを「真理の姦夫」と呼ぶ）を挙げ、suis opinionibus と言うのは異端の土台が意見と思い込みだけだからだ、とする。注 q（Heraldus）は、真理への道は一つで、そこから迷えば限りない小道をさまようことになる、だから公同の教会は一つ、信仰も信仰の規範も一つで、異端は限りなく、互いに争う、とし、エウセビオス『教会史』4 巻 7 章を引く。Bindley は viri を「マルキオンやウァレンティノスのように、新約を切り取り、書き加えて、自分の説に合わせた異端者」とし、『ヘルモゲネス反駁』8 章（異端者の族長は哲学者）、『異端者への抗弁』7 章・30 章などを挙げる（l. 8885–8889）。Mayor は novitiolam に「（-lus は）求道者、新しい者」、paraturam に『断食について』11 章（両方の契約の paratura）、『一夫婚について』7 章（わたしたちの paratura 全体）、22 章などを、adulteraverunt に 46 章を挙げる（l. 26756–26792）。
- 読者への影響：小〜中 — viri quidam は異端者を指す（注 p、Bindley）。nostram hanc novitiolam paraturam は、哲学に比べて新しい、わたしたちの教えの備え（Mayor の挙げる「両方の契約の paratura」の用法）。
- 訳での扱い：訳注は付けない。viri quidam は「ある者たち」のままにし、異端者と補うかはメインが決める。novitiola は縮小の形で「新参の、できて間もない」、paratura は 22:11 の caelestes paraturas の既訳「天の備え」、27:3 の paraturae の既訳「作り」がある。どれに揃えるかはメインが決める。adulterare は 19:7 の既訳「改ざんした」と揃えられる。注 q の「信仰の規範」は 47.8 の regula veritatis とつながる。
- 確かめた資料：Oehler 画像 0318（本文、校注 47 章 50〜52、注 n・o・p）、0319（本文、注 p の続き、注 q）。OCR l. 37110–37114、37130–37137、37175、37185–37187、37215–37298、3595–3605。Bindley OCR l. 8860–8864、8885–8889。Mayor OCR l. 26756–26792。

### 47.8 Quod ideo suggesserim, ne cui nota varietas sectae huius … et ex varietate defensionum iudicet veritatem（iudicet と vindicet、λ の defectionem … veritatis）
- 底本（Oehler）：Quod ideo suggesserim, ne cui nota varietas sectae huius in hoc quoque nos philosophis adaequare videatur et ex varietate defensionum iudicet veritatem.
- ほかの読み：suggesserim を λ は suggerimus（校注 47 章 53）。adaequare を λ は aequare（54）。et を c は ut。ex varietate を a は ex veritate（55）。defensionum を λ は defectionem（56）。iudicet は A・B・d・e・f、エルノンとガンの写本。D・F・G・λ・a・b・c、ゴルツェ写本、ウィーン写本は vindicet、E・エアフルト写本は videlicet（57）。veritatem を λ は veritatis とし、Scioppius がよしとする（58）。λ の全体は et ex varietate defectionem vindicet veritatis（「その多様さから、真理の衰えを言い立てる」）。Bindley は底本と同じ本文で、λ の defectionem vindicet veritatis を注に挙げる（OCR l. 8864–8867、8891–8892）。Mayor も「Fuld. Hav. et ex varietate defectionem vindicet veritatis」と挙げる（l. 26800–26802）。
- 採る校訂者：Mayor は Quod ideo suggesserim に、同じような予防の言葉として 46.18 の sed dicet aliquis, etiam de nostris excedere quosdam a regula disciplinae を、nota varietas sectae に Woodham の挙げるオリゲネス『ケルソス反駁』5 巻 64 章などを挙げる（l. 26793–26798）。
- 読者への影響：小〜中 — 底本では、一派の分かれを見て、弁明がまちまちだから真理を（低く）裁く、の意味。λ では、真理が欠けていると言い立てる。
- 訳での扱い：訳注は付けない。底本の iudicet veritatem で訳す。suggesserim は可能の接続法で「〜と言っておくのは」。nota varietas sectae huius は「この一派の、知られた分かれ（不一致）」。adaequare は 46.3 の adaequamur（既訳「等しくされない」）と同じ語。46.18 と響き合う。
- 確かめた資料：Oehler 画像 0319（本文、校注 47 章 53〜58）。OCR l. 37229–37231、37241–37245。Bindley OCR l. 8864–8867、8891–8892。Mayor OCR l. 26793–26802。

### 47.8 Expedite autem praescribimus adulteris nostris illam esse regulam veritatis quae veniat a Christo transmissa per comites ipsius … commentatores probabuntur（praescribere と注 r）
- 底本（Oehler）：Expedite autem praescribimus adulteris nostris illam esse regulam veritatis quae veniat a Christo transmissa per comites ipsius, quibus aliquanto posteriores diversi isti commentatores probabuntur.
- ほかの読み：adulteris を G と Havercamp は adulteriis（校注 47 章 59）。aliquanto を Aφ・G は aliquando（60）。probabuntur を λ は deprehenduntur（61）。Bindley は底本と同じ（OCR l. 8866–8868、8905–8906）。
- 採る校訂者：注 47 章 r（p. 289。Heraldus）は「praescribimus に注意せよ。テルトゥリアヌスの『抗弁について』という書の名はここから来る。公同の教会の人々は異端者に対して、信仰の規範は一つ、つまりキリストとその使徒たちが伝えたものであり、後に生じたものはすべて偽りで、改竄され、偽造されたものだ、と抗弁していた」とし、Oehler は 7 章の注を参照させる。その 7 章の注 d で Oehler は、praescribere は法律家の用語で「抗弁によって相手の訴えを退けること」（ドイツ語の einwenden）とし、この 47.8 を例に挙げる（OCR l. 17219–17260）。Bindley は praescribimus に 7 章の注を、regulam veritatis に『異端者への抗弁』14 章・37 章（教会が使徒から、使徒がキリストから、キリストが神から受けた規範）を、transmissa per comites ipsius に同 32 章（司教の継承）とエイレナイオスを、posteriores … commentatores に、異端の説の新しさに基づく論駁（『ヘルモゲネス反駁』1 章、『異端者への抗弁』29〜30 章）を挙げる（l. 8894–8937）。Mayor は expedite に用例を、adulteris を「つまり異端者」とし、regulam に Havercamp と Kaye を、commentatores に用例（10 章、『冠について』7 章など）を挙げる（l. 26804–26821）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。praescribimus は 7:2 の既訳「抗弁」と揃えられる（「〜と抗弁します」）。adulteris nostris は「わたしたちの（教えの）改竄者たち」で、47.7 の adulteraverunt を受ける。regula veritatis は「真理の規範」。comites ipsius は「その方の連れ（使徒たち）」で、使徒と補うかはメインが決める。キリストの動作（veniat a Christo transmissa）の敬語は本の AGENTS.md のとおり。diversi isti commentatores は「まちまちなこの注釈者たち（説を作る者たち）」。probabuntur は「〜と証明されるでしょう」。
- 確かめた資料：Oehler 画像 0319（本文、校注 47 章 59〜61、注 r）。OCR l. 37231–37234、37245–37246、37300–37318、17219–17260。Bindley OCR l. 8866–8868、8894–8937。Mayor OCR l. 26804–26821。`books/tertullian-apology/src/chapter-07-08/both.md`（7.2）。

### 47.9 Omnia adversus veritatem de ipsa veritate constructa sunt, operantibus aemulationem istam spiritibus erroris（注 s と aemulatio）
- 底本（Oehler）：Omnia adversus veritatem de ipsa veritate constructa sunt, operantibus aemulationem istam spiritibus erroris.
- ほかの読み：校注に異読はない。Bindley は底本と同じ（OCR l. 8906–8908）。
- 採る校訂者：注 47 章 s（p. 289。Heraldus）は「悪魔は、真理から信頼を奪うために、異端を起こしただけでなく、詩人や哲学者がキリスト教の敬虔の秘儀をいくらかまね、神の掟まで改竄した、あの作りごとを考え出し、わたしたちの秘儀にいくらか似たものを描く作り話を見つけ出した。それによって、キリスト教の教えが詩人や哲学者の説と何も違わないように見え、詩人の作り話に近いので、ときには作り話とさえ思われるようにした」と言い換える。Oehler は aemulus、aemulari、aemulatio の語とその用法を『迫害における逃亡について』2 章の注に送る。その注 a で Oehler は、aemulus はテルトゥリアヌスの数えきれない箇所で inimicus（敵）の意味で使われ、そこから派生した aemulatio、aemulator も同じだとし、2 章の aemulae operationis などを挙げる（OCR l. 57036–57060）。Bindley は 21 章の qui penes vos eiusmodi fabulas aemulas ad destructionem veritatis istiusmodi praeministraverunt（21.15）と 2 章の注を挙げる（l. 8939–8941）。Mayor は 2 章の終わりの aemulae operationis、『異端者への抗弁』40 章（真理をねじ曲げるのは悪魔の役目）、タティアノス 40 章、ユスティノス『第一弁明』54 章を挙げる（l. 26827–26838）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。aemulatio は訳語表の aemula（2:19〜2:20 の「敵対する」、27 章以下も揃える）に当たり、注 s の言う、真理をまねて張り合う敵対。aemulationem istam operari は「この敵対の働きをする」。21:15 の既訳「真理に敵対し、それを打ち壊すため」と響き合う。spiritus erroris は「迷いの霊（惑わす霊）」。第一テモテ四・一（口語訳「惑わす霊」）に近いが、どの資料もこの節に挙げていないので、『』と出典は付けない（末尾の「未確認」）。
- 確かめた資料：Oehler 画像 0319（本文、注 s）。OCR l. 37234–37236、37320–37337、57036–57060。Bindley OCR l. 8906–8908、8939–8941。Mayor OCR l. 26827–26838。`books/tertullian-apology/src/chapter-21/both.md`（21.15）。`node tools/bible.js 1Tim.4.1`。

### 47.9 Ab his adulteria … subornata, ab his quaedam etiam fabulae inmissae quae de similitudine fidem infirmarent veritatis vel eam sibi potius evincerent, ut quis ideo non putet … quia nec poëtis nec philosophis（de similitudine と dissimilitudine、注 t とユスティノス）
- 底本（Oehler）：Ab his adulteria huiusmodi salutaris disciplinae subornata, ab his quaedam etiam fabulae inmissae quae de similitudine fidem infirmarent veritatis vel eam sibi potius evincerent, ut quis ideo non putet Christianis credendum quia nec poëtis nec philosophis, vel ideo magis poëtis et philosophis existimet credendum quia non Christianis.
- ほかの読み：his は A・B・F・G、ウィーン写本。E・エアフルト写本は hiis、D・a〜f と Havercamp は iis（校注 47 章 62）。subornata は A・B・D・E・F・G・λ・f、ウィーン写本、エアフルト写本、オクスフォード。a〜e は suborta（63）。de similitudine は A・B・F・λ・e・f、ウィーン写本、Fulvius Ursinus の本。D・E・G・a〜d、オクスフォード、エアフルト写本は dissimilitudine（「似ていないことから」。64）。vel eam sibi potius evincerent は A・B・F・G（G は ut）・b・d・f、ゴルツェ写本、オクスフォード、ウィーン写本。D・E、エアフルト写本は vel etiam sibi（D は si）potius evincerent、a・c は vel etiam si possent evincerent、λ は vel eadem sibi potius fidem raperent（「その同じ信頼を自分のほうへ奪う」。65）。nec（philosophis）は A・B・F・G・λ・d・f、ウィーン写本。D・E・a・b・c・e、オクスフォード、エアフルト写本は et（66）。Bindley は底本と同じ（OCR l. 8908–8915）。
- 採る校訂者：注 47 章 t（p. 289〜290。Heraldus）は「悪魔のたくらみと巧みによって、ある者たちが述べたように真理を改竄し、作り話で損ない、それによって福音の真理が権威を失い、人々が、告げ知らされることはすべて作りごとの作り話だと思うようになった」とし、ユスティノス（Oehler は Apol. II と記す）が、悪霊の手下が昔作って広めた作り話（ユピテルの多くの息子たち）は、福音の話にいくらか近づけて信頼をなくさせるためのものだったと言う箇所をギリシア語で引き、「テルトゥリアヌスはこの箇所全体をまねた」とする。引かれたギリシア語は、この翻訳の『第一弁明』54.1〜54.2 の本文と同じ文である。Bindley は quae de similitudine を「真理に似ていることから、その信頼を損ない、むしろすっかりその座を奪う」とする（eam は fidem。l. 8943–8944）。Mayor は adulteria に『偶像崇拝について』1 章、『異端者への抗弁』17〜18 章・30〜31 章などを挙げる（l. 26840–26860）。
- 読者への影響：小 — dissimilitudine では意味が逆になるが、底本の similitudine と後ろの ut 以下（だから詩人や哲学者と同じく信じなくてよい）がつながる。
- 訳での扱い：訳注は付けない。de similitudine は「似ていることを使って」、eam は fidem を受け、「むしろその信頼を自分のほうへ勝ち取る」。subornata は「仕組まれた」、inmissae は「送り込まれた」。fabulae は訳語表の「作り話」。salutaris disciplina は「救いの教え」（訳語表の disciplina「教え」）。
- 確かめた資料：Oehler 画像 0319（本文、校注 47 章 62〜65、注 t）、0320（本文、校注 66、注 t の続き）。OCR l. 37236–37238、37246–37259、37307–37308、37339–37350、37365–37371、37438、37463–37544。Bindley OCR l. 8908–8915、8943–8944。Mayor OCR l. 26840–26860。`books/justin-first-apology/src/chapter-54-57/both.md`（54.1〜54.2）。

### 47.10 Itaque ridemur praedicantes deum iudicaturum. Sic enim et poëtae et philosophi tribunal apud inferos ponunt（et ridemur と、λ の praeiudicantes）
- 底本（Oehler）：Itaque ridemur praedicantes deum iudicaturum. Sic enim et poëtae et philosophi tribunal apud inferos ponunt.
- ほかの読み：ridemur を D・λ・a〜e と Havercamp は et ridemur（校注 47 章 67）。praedicantes deum は Aβ・E・G、ウィーン写本、オクスフォード、エアフルト写本。F は praedicantes（deum がない）、(Aφ B D)・a〜f と Havercamp は deum praedicantes、λ は deum praeiudicantes（Scioppius は praeindicantes を望む。68）。F は apud inferos ponunt tribunal（69）。Bindley の本文は Itaque et ridemur Deum praedicantes judicaturum（OCR l. 8915–8917）。Mayor は p. 148 の一覧で「p. 134 l. 18 ridemur] et ridemur」とし、et ridemur を好む（Mayor の本文 l. 7926 は ridemur）。
- 採る校訂者：Mayor は ridemur に 18 章の haec et nos risimus aliquando（わたしたちもかつてはこれを笑った）を、iudicaturum に Geffcken を挙げる（l. 26862–26869）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。底本の ridemur で訳し、et（「〜もまた」）は足さない。Sic enim は「というのも、同じように」で、詩人や哲学者も冥府に裁きの座を置くので、わたしたちの裁きの話も同じ作り話と見なされる、の意味。inferi は名前の表の「冥府」。神が裁かれることは尊敬語（本の AGENTS.md）。
- 確かめた資料：Oehler 画像 0320（本文、校注 47 章 67〜69）。OCR l. 37371–37380、37479–37506。Bindley OCR l. 8915–8917。Mayor 画像 0172（p. 148）。Mayor OCR l. 7926、26862–26869。

### 47.10 Et gehennam si comminemur, quae est ignis arcani subterraneam ad poenam thesaurus, proinde decachinnamur（subterraneam と subterraneus、gehenna の訳語）
- 底本（Oehler）：Et gehennam si comminemur, quae est ignis arcani subterraneam ad poenam thesaurus, proinde decachinnamur.
- ほかの読み：Et gehennam si は A・B・D・E・f、エアフルト写本、アンブロジアーナ写本。λ は Et gehennae si、F・G、ウィーン写本は Et gehennam（F は iehennam）sic、オクスフォードは et si gehennam、a〜e は Si gehennam（校注 47 章 70）。comminemur を G は comminentur、F・ウィーン写本は comminantur（71）。subterraneam は D・E、アンブロジアーナ写本、エアフルト写本で、Heraldus もそう書き直そうとしていた。A・B・F・G・f、ウィーン写本は subterranea、Bongars の写本は subterraneum、a〜e は subterraneus（72）。decachinnamur を G は decachinnantur（73）。Bindley の本文は Si gehennam comminemur, quae est ignis arcani subterraneus ad poenam thesaurus（OCR l. 8917–8918）。
- 採る校訂者：Oehler の注はこの句にない。Mayor は gehennam に Kaye と『肉の復活について』34 章（魂は滅びではなく罰へ、つまりゲヘナへ）、decachinnamur に『諸国民へ』1 巻 19 章（いっそう気楽に大笑いするように）を挙げる（l. 26871–26878）。Mayor が別の箇所で引く『悔い改めについて』12 章にも illum thesaurum ignis aeterni（あの永遠の火の宝庫）とある（l. 27550–27558）。
- 読者への影響：小 — 底本では「地下の罰のための、ひそかな火の宝庫」、写本の大勢（subterranea）や刊本（subterraneus）では「罰のための、地下にある、ひそかな火の宝庫」。
- 訳での扱い：訳注は付けない。底本の subterraneam ad poenam（地下での罰のために）で訳す。gehenna を口語訳の「地獄」（マタイ五・二二「地獄の火」）とするか、「ゲヘナ」と音を写すかはメインが決める（この本ではここが初出）。proinde は「同じように」（詩人の冥府と同じに扱われて）。decachinnari は「大笑いされる」。
- 確かめた資料：Oehler 画像 0320（本文、校注 47 章 70〜73）。OCR l. 37383–37389、37443–37447、37507–37517。Bindley OCR l. 8917–8918。Mayor OCR l. 26871–26878、27550–27558。`node tools/bible.js Matt.5.22`。

### 47.11 Sic enim et Pyriphlegethon apud mortuos amnis est. Et si paradisum nominemus … maceria quadam igneae illius zonae … Elysii campi fidem occupaverunt（注 u：火の帯はピュリプレゲトン）
- 底本（Oehler）：Sic enim et Pyriphlegethon apud mortuos amnis est. Et si paradisum nominemus, locum divinae amoenitatis recipiendis sanctorum spiritibus destinatum, maceria quadam igneae illius zonae a notitia orbis communis segregatum, Elysii campi fidem occupaverunt.
- ほかの読み：apud mortuos を λ と Havercamp は ad mortuos（校注 47 章 74）。maceria を D・F・a・c、ウィーン写本は materia（75）。Elysii を A は helysii、B・E・F は helisii、D は helisei、G は helisi（76）。occupaverunt を b・c・e と Havercamp は occuparunt（77）。Bindley は底本と同じ（OCR l. 8919–8958）。
- 採る校訂者：注 47 章 u（p. 290）は igneae illius zonae に「Pyriphlegetonthis」（ピュリプレゲトンの〔帯〕。刷られたとおりの綴り）とだけ注する。つまり、楽園を隔てる火の帯は、前の文の冥府の火の川ピュリプレゲトンだとする。Mayor は zonae に、ウェルギリウス、オウィディウス、プリニウスなどの（地球の）帯の用例、ルカヌスの「焼けつく帯」、アルノビウス 1 巻 52 章の per igneam zonam、『蠍の毒の解毒剤』10 章を挙げ、Pyriphlegethon に『諸国民へ』1 巻 19 章（あなたがたのもとでもピュリプレゲトンとエリュシオンの定めは同じように置かれる）とアルノビウス 2 巻 14 章（プラトン『パイドン』の川）を、paradisum に Kaye、『肉の復活について』20 章、『見世物について』30 章、『マルキオン反駁』3 巻 24 章・4 巻 34 章、『魂について』55〜58 章などを、Elysii に『マルキオン反駁』4 巻 34 章などを挙げる（l. 26902–26938）。Bindley は occupaverunt を「先取りした」とし、楽園について、テルトゥリアヌスは殉教者と族長だけが楽園に入り、ほかの魂は裁きの日まで待つと考えた、と注する（l. 8946–8952、8981）。
- 読者への影響：小〜中 — 注 u に従えば「あの火の帯」は冥府の火の川の帯で、Mayor の用例のように地球を巡る（熱い）帯とは取らない。
- 訳での扱い：訳注は付けない。注 u に従い、igneae illius zonae は前の文のピュリプレゲトンを指す「あの火の帯」。（ピュリプレゲトンの）と補うかはメインが決める。paradisus を口語訳のルカ二三・四三などの「パラダイス」とするか、「楽園」とするかもメインが決める（この本ではここが初出）。fidem occupaverunt は「（エリュシオンの野が）信じられる場所を先取りした」。maceria は「囲いの壁」。名前はピュリプレゲトン（冥府の火の川）、エリュシオンの野。
- 確かめた資料：Oehler 画像 0320（本文、校注 47 章 74〜77、注 u。注 u は拡大して確かめた）。OCR l. 37391、37403–37411、37448、37486–37487、37518–37527、37546。Bindley OCR l. 8919–8958、8946–8952、8981。Mayor OCR l. 26902–26938。`node tools/bible.js Luke.23.43`。

### 47.12 Unde haec … Nonnisi de nostris sacramentis. Si de nostris sacramentis, ut de prioribus … quorum imagines quoque fidem inveniunt（si de nostris sacramentis の有無、λ の proprioribus）
- 底本（Oehler）：Unde haec, oro vos, philosophis aut poëtis tam consimilia? Nonnisi de nostris sacramentis. Si de nostris sacramentis, ut de prioribus, ergo fideliora sunt nostra magisque credenda, quorum imagines quoque fidem inveniunt.
- ほかの読み：（二度目の）si de nostris sacramentis を D・E・F・G・a・b・c、ウィーン写本、エアフルト写本は欠く。A・B・λ、ガンとエルノンの写本がこの語を支え、d・e・f と Havercamp にもある（校注 47 章 78）。de を F・ウィーン写本は欠く（79）。prioribus を λ は proprioribus（80）。magisque credenda を F・G、ウィーン写本は magis credenda（81）。inveniunt を λ は invenerunt（82）。Bindley は底本と同じ（OCR l. 8959–8962）。
- 採る校訂者：Bindley は de nostris sacramentis を「わたしたちの秘儀、あるいは教えから」とし、7 章の注を参照させる（l. 8983–8984）。Mayor は『オクタウィウス』34 章（哲学者がわたしたちと同じことを論じるのは、わたしたちが彼らに従ったのではなく、彼らが預言者たちの神の告知から、改竄された真理の影をまねたからだ）、『魂の証言について』5 章、『マルキオン反駁』2 巻 17 章、oro vos の用例を挙げる（l. 26940–26960）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。sacramenta は訳語表の「秘儀」（2:5、7:1、15.9）だが、ここは Bindley の言うように教えの中身（裁き、地獄、楽園）を指す。「秘儀」で通すかはメインが決める。ut de prioribus は「（わたしたちのものが）先にあったものなので」。imagines は「写し」、fidem inveniunt は「信じられている」。fides の訳し分けは末尾の「メインで決めること」。
- 確かめた資料：Oehler 画像 0320（本文、校注 47 章 78〜82）。OCR l. 37392–37422、37449、37488–37491、37521–37524。Bindley OCR l. 8959–8962、8983–8984。Mayor OCR l. 26940–26960。

### 47.13 Si de suis sensibus … quod rerum forma non sustinet. Nunquam enim corpus umbra aut veritatem imago praecedit（注 v と forma）
- 底本（Oehler）：Si de suis sensibus, iam ergo sacramenta nostra imagines posteriorum habebuntur, quod rerum forma non sustinet. Nunquam enim corpus umbra aut veritatem imago praecedit.
- ほかの読み：Si を a・b は欠く（校注 47 章 83）。iam ergo を e は ergo iam（84）。rerum を D・a は verum（85）。Bindley は底本と同じ（OCR l. 8962–8965）。
- 採る校訂者：注 47 章 v（p. 290）は rerum forma を『偶像崇拝について』18 章の注に送る。その注 d で Oehler は「forma はテルトゥリアヌスではきわめてしばしば modus, lex, ratio（やり方、法、理）の意味」とし、2 章の adversus formam、7 章などとともにこの 47.13 の quod rerum forma non sustinet を挙げる（OCR l. 12835–12846）。Bindley は、同じく公同の真理と異端について『異端者への抗弁』29 章（すべてにおいて真理が写しに先立ち、似せたものは事柄の後に来る）、『キリストの肉について』2 章などを挙げる（l. 8986–8989）。Mayor は veritatem )( imago にアンブロシウスなどを挙げる（l. 26962–26965）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。rerum forma は注 v（『偶像崇拝について』18 章の注 d）の lex の意味で、訳語表の forma「決まり」（2:9、2:14 の「裁きの決まり」）と揃えて「物事の決まり」とできる。de suis sensibus は「自分たちの考えから」。
- 確かめた資料：Oehler 画像 0320（本文、校注 47 章 83〜85、注 v）。OCR l. 37422–37432、37450–37457、37524、37548–37549、12835–12846。Bindley OCR l. 8962–8965、8986–8989。Mayor OCR l. 26962–26965。

### 48.1 Age iam, si qui philosophus adfirmet, ut ait Laberius de sententia Pythagorae, hominem fieri ex mulo, colubram ex muliere（注 a：ラベリウスの詩句）
- 底本（Oehler）：Age iam, si qui philosophus adfirmet, ut ait Laberius de sententia Pythagorae, hominem fieri ex mulo, colubram ex muliere, et in eam opinionem omnia argumenta eloquii virtute distorserit, …
- ほかの読み：si qui は A・E・d・f、エアフルト写本、アンブロジアーナ写本。D・F・a・b・c・e、ウィーン写本は si quis、B・G は si quid（校注 48 章 1）。Laberius を F・エアフルト写本は liberius（2）。colubram は A・B・F・λ・f。D・E・G・a〜e、エアフルト写本、ウィーン写本は colubrum（3）。eloquii を λ は eloquii sui（4）。distorserit は A・D・E・λ・d・f、ウィーン写本、エアフルト写本、Pamelius の写本。B・F は distorserint、G は distorxerint、a・b・c・e は detorserit（5）。Bindley の本文は si quis philosophus affirmet … eloquii virtute detorserit（OCR l. 8970–8973）。
- 採る校訂者：注 48 章 a（p. 290〜291）は、ラベリウスの知られた詩句として「わたしは聞く、多くの悪が善からも生まれると。それと同じことだ、哲学者たちが昔わたしたちを変えるように。今も彼らはラバから人を、女から蛇を作る。異なるものから異なるほかのものも」を引き、Bothe『ラテン喜劇断片集』p. 205 以下と Becher を挙げる（詩句の初めの語 geni は刷られたとおり）。Bindley はラベリウスを「前 43 年に死んだ有名な笑劇作者」とし、ホラティウス、マクロビウス、スエトニウスを挙げる（l. 8991–8993）。Mayor はラベリウスを Ribbeck の「出典不明 21」とし、Pythagorae に輪廻について『魂について』28〜35 章、『肉の復活について』1 章、『魂の証言について』4 章、『諸国民へ』1 巻 19 章（人の霊が犬やラバや孔雀に戻るという、あなたがたの言い伝えはなんとむなしいか）などを挙げる（l. 26971–27054）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。hominem fieri ex mulo, colubram ex muliere は、注 a の詩句（de mulo hominem, colubram de muliere）のとおり「ラバから人が、女から蛇ができる」。詩句をそのまま引いてはいないので『』は付けない。Age iam は 25:12 の既訳「さあ、それでは、」に揃えられる。adfirmare は訳語表の「断言する」。distorserit は「（すべての論拠を）ねじ曲げて向ける」。名前はラベリウス、ピュタゴラス（名前の表）。
- 確かめた資料：Oehler 画像 0320（本文、校注 48 章 1〜3、注 a）、0321（本文、校注 4・5、注 a の続き）。OCR l. 37435、37494–37533、37551–37552、37558、37570–37573、37601–37607。Bindley OCR l. 8970–8973、8991–8993。Mayor OCR l. 26971–27054。

### 48.1–48.2 nonne consensum movebit et fidem infiget etiam ab animalibus abstinendi propterea? Persuasum quis habeat, ne forte bubulam de aliquo proavo suo obsonet?（注 b の区切り）
- 底本（Oehler）：nonne consensum movebit et fidem infiget etiam ab animalibus abstinendi propterea? Persuasum quis habeat, ne forte bubulam de aliquo proavo suo obsonet?
- ほかの読み：consensum を ウィーン写本は consensu、c は consessum、D・a・b・e は et sensum（校注 48 章 6）。etiam ab animalibus abstinendi を λ は ut etiam ab animalibus sit abstinendum（7）。propterea を f と Havercamp は proptereaque（8）。habeat を c・d は hoc habeat（9）。obsonet を c は obsonet et prandeat（10）。Bindley の本文は … etiam ab animalibus abstinendi? proptereaque persuasum quis hoc habeat, ne forte bubulam de aliquo proavo suo obsonet.（問いを abstinendi で切り、後ろを平叙文にする。OCR l. 8973–8976）。
- 採る校訂者：注 48 章 b（p. 291）は「普通の区切りは abstinendi? Propterea persuasum … だ」とだけ言い、Oehler は propterea を前の問いの終わりに置き、Persuasum quis habeat … を別の問いにする。Mayor は『魂について』31 章（ピュタゴラスは生き物だからと食べずに断った）、『諸国民へ』1 巻 19 章を挙げる（l. 27063–27067）。
- 読者への影響：小〜中 — 底本では「そのために、生き物を断つことまで信じ込ませるのではないか」「だれかが、ひょっとして先祖の牛肉を買ってしまわないようにと、思い込まないだろうか」の二つの問い。Bindley などの区切りでは、二つ目は「だから人は、先祖の牛肉を買わないようにと思い込む」の言い切り。
- 訳での扱い：訳注は付けない。底本と注 b の区切りで、propterea は前の問いに入れ、Persuasum quis habeat … ? を二つ目の修辞疑問にする。fidem infiget は「信念を打ち込む」。bubula は「牛肉」、obsonet は「（食べ物として）買う」。proavus は訳語表の「曾祖父」（6.10）で、ここは遠い先祖を言う。
- 確かめた資料：Oehler 画像 0321（本文、校注 48 章 6〜10、注 b）。OCR l. 37559–37561、37573–37575、37609–37611。Bindley OCR l. 8973–8976。Mayor OCR l. 27063–27067。

### 48.2 At enim Christianus si de homine hominem ipsumque de Gaio Gaium reducem repromittat（λ の vesica の書き込みと注 c）
- 底本（Oehler）：At enim Christianus si de homine hominem ipsumque de Gaio Gaium reducem repromittat, lapidibus magis, nec saltim coetibus a populo exigetur.
- ほかの読み：reducem を E・G・a・b・d は reducere（校注 48 章 11）。λ と Havercamp は repromittat の後に statim illic vesica quaeritur et（Havercamp は et を欠いて queritur）を入れ、lapidibus と続ける（12）。Bindley の本文は … de Caio Caium reducem repromittat, lapidibus magis, …（λ の書き込みはない。OCR l. 8976–8978）。
- 採る校訂者：注 48 章 c（p. 291）は「フルダ写本と、そこから Havercamp の刊本は、ここに statim illic vesica quaeritur et の語を入れる。Havercamp は et を消して queritur とし、その下に諺があるとみて、こらえきれない子供が膀胱をいっぱいにして叫ぶことだと説く。人のよい Havercamp には勝手にさせておこう」と言う。続けて Oehler は、vesica を saevitia（むごさ）か saevitiae causa と直すのでなければ、vesica をマルティアリス 4 巻 49 の用例のように「大言、思い上がり」と取り、「わたしたちのだれかが、キリスト教の信仰から死者の復活を語ると、その来世の約束の中に、すぐ思い上がりと一派のむなしい大言が、あなたがたによって探され、見咎められる」の意味だとする。Bindley は Caio Caium に 3 章の注を参照させる（l. 8995）。
- 読者への影響：小 — λ の書き込みは底本にない。
- 訳での扱い：訳注は付けない。λ の語は訳さない。At enim は、相手の言い分ではなく著者がキリスト者の扱いとの違いを示す文なので、本の AGENTS.md の 16.2・38.2 の例（「しかし実際、」）に当たるかどうかをメインが決める。de Gaio Gaium は 3.1 のガイウス・セイウスと同じく法律家の例の名（名前の表の「ガイウス」）で、「ガイウスからガイウスその人を」。reducem repromittat は「（死から）戻ってくると約束する」。
- 確かめた資料：Oehler 画像 0321（本文、校注 48 章 11・12、注 c）。OCR l. 37561–37562、37575–37579、37613–37637。Bindley OCR l. 8976–8978、8995。

### 48.2 lapidibus magis, nec saltim coetibus a populo exigetur（coetibus・caedibus・caestibus と、注 d の取り方）
- 底本（Oehler）：lapidibus magis, nec saltim coetibus a populo exigetur.
- ほかの読み：saltim は写本、saltem は刊本（いつもどおり。校注 48 章 13）。coetibus は A・B・G、Bongars の写本。F、アンブロジアーナ写本、ウィーン写本は cetibus、D・E・a〜e、エアフルト写本は caedibus（「殺戮によって」）、f と Havercamp は caestibus（「拳闘の籠手で」）、λ は copiis、Fulvius Ursinus は calcibus（「蹴って」）（14）。Bindley の本文は lapidibus magis, nec saltem caestibus a populo exigetur?（OCR l. 8977–8978）。
- 採る校訂者：注 48 章 d（p. 291）で Oehler は「キリスト者が、キリストの約束した死者の復活と永遠のいのちを論じると、民衆は彼を聞くためよりむしろ石打ちのために求め、聴衆の集まりでさえ誉れを与えない。まして像や給金ではない。それは哲学者によく起こることなのに（46 章参照）」と言い換える。nec saltim は ne … quidem（〜さえない）で、『忍耐について』3 章、Spalding、Hildebrand を挙げる。続けて「普通の説明は、Le Nourry も従ったもので、人の来世への帰還の教えを唱えるキリスト者は、異教徒の集まりから追い出されるだけでなく、もっと悪いことに石で打たれる、というものだ」と、別の取り方を紹介する。Mayor は lapidibus に 37 章の初め、テオフィロス、パウロ（第二コリント一一・二五、使徒一四・五）を、nec saltem に Rönsch、タキトゥス、ユウェナリス、ミヌキウスを、populo に 49 章を挙げる（l. 27069–27077）。
- 読者への影響：中 — 注 d では、exigetur は「（民衆に）求められる」で、哲学者が像や給金で報われる（46.5）のと比べて、キリスト者は聴衆の集まりにさえ求められず、石打ちに求められる。普通の説明では、exigetur は「追い出される」で、集まりから追い出されるどころか石で打たれる。
- 訳での扱い：訳注は付けない。注 d に従い、「民衆は、話を聞く集まりのためにさえ彼を求めず、むしろ石打ちのために求めるでしょう」の形で訳す。coetus は訳語表で 39 章の「集い」、38.2 の「徒党を組む」、42.6 の見世物の「集い」に分けてあり、ここは注 d の auditio（聞くこと）に当たる聴衆の集まり。46:5 の既訳「像や給金で報われやすい」と響き合わせられる。
- 確かめた資料：Oehler 画像 0321（本文、校注 48 章 13・14、注 d）。OCR l. 37562–37563、37579–37581、37639–37658。Bindley OCR l. 8977–8978。Mayor OCR l. 27069–27077。`books/tertullian-apology/src/chapter-43-46/both.md`（46.5）。

### 48.3 Si quaecunque ratio praeest animarum humanarum reciprocandarum in corpora … nisi desinant esse quod fuerant（λ の長い別の文、注 e）
- 底本（Oehler）：Si quaecunque ratio praeest animarum humanarum reciprocandarum in corpora, cur non in eandem substantiam redeant, cum hoc sit restitui, id esse quod fuerat? Iam non ipsae sunt quae fuerant, quia non potuerunt esse quod non erant, nisi desinant esse quod fuerant.
- ほかの読み：Si quaecunque を λ と Havercamp は Quasi non quaecunque（校注 48 章 15）。praeest を F は subest（16）。λ と Havercamp は reciprocandarum 以下を次のように読み、底本の 48.3 の全体に代える：in corpora reciprocandarum, ipsa exigat illas in eadem corpora revocari: quia hoc sit revocari id est（id est を Havercamp は欠く）esse quod fuerant. Nam si non id sunt quod fuerant, id est humanum et id ipsum corpus indutae, iam non ipsae erunt quae fuerant. Porro quae iam non erunt ipsae, quomodo redisse dicentur? Aut aliud factae non erunt ipsae, aut manentes ipsae non erunt aliunde.（「人の魂が体へ行き来する理屈がどんなものであれ、その理屈そのものが、魂は同じ体へ呼び戻されることを求めるかのように。呼び戻されるとは、元のものであることだから。元のもの、つまり人間であり、まさにその体をまとったものでないなら、もう元の魂そのものではない。もう魂そのものでないものが、どうして戻ったと言われようか。別のものになれば魂そのものではなく、魂そのものにとどまれば、ほかから来ることはない」）。その後に Multis と続ける（17）。eandem を F は eadem? とし、substantiam から quod fuerat? までを欠く（17b）。Bindley の本文は λ と同じ（Quasi non, quaecumque ratio … aut manentes ipsae non erunt aliunde. OCR l. 8978–9013）。
- 採る校訂者：Bindley は「Quasi non … erunt aliunde はフルダ写本の読み。この箇所の異読は、『護教論』に第二版があったと考えなければ説明しにくい」とし、19 章の断片の注を参照させる。底本の読み（Si quaecunque … nisi desinent esse quod fuerant）を注に挙げて英訳し、「魂の生がとぎれずに続くには、最後には別の体ではなく自分の体と一つになることが要る」の意味だとする（l. 8997–9003、9031–9038）。注 48 章 e（p. 291。La Cerda）は nisi desinant esse quod fuerant を「ガイウスがラバに変えられたとしよう。ラバは、ガイウスが元のものであることをやめなければ、元のものでなかったものにはなれなかった」と言い換える。Mayor はアンブロシウス『復活の信仰について』65 節（魂は体へ移り住むと言うが、移るのと戻るのとどちらが難しいか）、『見世物について』30 章、『諸国民へ』1 巻 19 章、『魂について』28 章（魂の行き来の古い説）を挙げる（l. 27079–27093）。
- 読者への影響：中 — λ の文は、底本と同じく「魂が戻るなら、同じ体に戻るはずだ」という論を、もっと詳しく述べる。論の向きは変わらない。
- 訳での扱い：訳注は勧めない（λ の文を知らなくても、論の向きは同じで、読者の理解は変わらないため）。メインが付けると決めるなら、案は「古い一つの写本では、この節がもっと長い別の文で伝わる。」（27 字）。底本の Si quaecunque … ? で訳す。ratio は「理屈、筋道」で、訳語表の「理」（17.1、21 章のロゴス）とは別の、ふつうの語として訳す。reciprocandarum は「（体へ）行き来する」。eandem substantiam は「同じ実体（体）」。Iam non ipsae sunt … は、注 e の言い換えのとおり、別の体に入ればもう元の魂そのものではない、の意味。
- 確かめた資料：Oehler 画像 0321（本文、校注 48 章 15〜17b、注 e）。OCR l. 37563–37567、37581–37598、37660–37664。Bindley OCR l. 8978–9013、8997–9003、9031–9038。Mayor OCR l. 27079–27093。

### 48.4 Multis etiam locis ex otio opus erit, si velimus ad hanc partem lascivire, quis in quam bestiam reformari videretur（locis と iocis、注 f）
- 底本（Oehler）：Multis etiam locis ex otio opus erit, si velimus ad hanc partem lascivire, quis in quam bestiam reformari videretur. Sed de nostra magis defensione, qui proponimus …
- ほかの読み：locis ex otio は A・B・E・G・λ・d・e、ウィーン写本、エアフルト写本、Pamelius の写本。F は locis exitio、D・a・b は locis ex optio、c は locis et ocio、f と Havercamp、Fulvius Ursinus は iocis et ocio（「冗談と暇」。校注 48 章 18）。quis in quam は A・B・D・E・F・G・λ・f、Bongars の写本、エアフルト写本、ウィーン写本、（Latinius によると）Ursinus の本。a・b・d・e と Fulvius Ursinus は Quis inquam、c は Quis unquam（19）。videretur を D・a〜e は vidit、Ursinus の本は videatur、Fulvius Ursinus は velit（20）。Bindley の本文は Multis etiam jocis et otio opus erit（OCR l. 9013–9015）。
- 採る校訂者：注 48 章 f（p. 292）で Oehler は「テルトゥリアヌスはこう言う。ピュタゴラスのこの説を戯れの言葉で追っていこうとすれば、だれがどの獣に作り変えられると見えるかを示すために、多くの論点と論拠が要るだろう。それでも、その論点と論拠は、いくつあっても、ピュタゴラスの説を守るより、わたしたちの説を守るのに使うだろう。わたしたちは、人間が人間から戻るとはるかにふさわしく信じられると説くのだから」と言い換える。ex otio は『スカプラへ』2 章の注に送る（未確認）。「locis の代わりに iocis を望む人々は、opus erit をよく量っていないようだ」と言う。lascivire にアルノビウス 4 巻 3 章・33 章（気ままな作り話でふざける）を挙げる。Mayor は quis in quam bestiam にアモルゴスのセモニデスと『魂について』33 章（人殺しの魂はどの獣になるか）を挙げる（l. 27095–27130）。
- 読者への影響：小〜中 — 注 f では、Sed de nostra magis defensione は「（その論点は）むしろわたしたちの弁明のために（使う）」と、動詞を補って読む。
- 訳での扱い：訳注は付けない。注 f に従い、loci は「論点」、ex otio は「暇にまかせて」、lascivire は「戯れる」（訳語表の lascivus は 3.4〜3.5 の「陽気な」、39.20 の「放埒」）。Sed de nostra magis defensione は、注 f の補い（使うだろう）を（）に入れるかどうかをメインが決める。reformari は 47.6 の reformavit、48.10 の reformantur と同じ語。
- 確かめた資料：Oehler 画像 0322（本文、校注 48 章 18〜20、注 f）。OCR l. 37676–37678、37694–37729、37746–37781。Bindley OCR l. 9013–9015。Mayor OCR l. 27095–27130。

### 48.4 qui proponimus multo utique dignius credi hominem ex homine rediturum, quemlibet pro quolibet, dum hominem, ut eadem qualitas animae in eandem restauraretur conditionem, etsi non effigiem（注 g、λ の certe conditionem、conditio と condicio）
- 底本（Oehler）：qui proponimus multo utique dignius credi hominem ex homine rediturum, quemlibet pro quolibet, dum hominem, ut eadem qualitas animae in eandem restauraretur conditionem, etsi non effigiem.
- ほかの読み：quemlibet pro quolibet を λ は Qui et pro quolibet（校注 48 章 21）。hominem ut を D・a・e は欠く（22）。eandem を λ は eadem（23）。restauraretur は Aφ・E・F、ウィーン写本、エアフルト写本。(Aβ)・B・D・G・λ・a〜f と Havercamp は restauretur（24）。etsi non effigiem を λ は etsi non effigiem, certe conditionem. Sed quia（「姿ではないにしても、確かに同じありさまに。しかし、……ので」。25）。Bindley の本文は … in eandem restauretur condicionem, etsi non effigiem, certe quia ratio restitutionis …（Certe を小文字で前に続けて読む。OCR l. 9017–9020。Bindley の画像 `n181_w1600.jpg`（p. 144）で確かめた）。Mayor は p. 148 の一覧で「p. 136 l. 16 condicionem (?)」とし、conditionem を condicionem と綴るのを好む（Mayor の本文 l. 8034 は conditionem）。
- 採る校訂者：注 48 章 g（p. 292）は conditionem, etsi non effigiem を「魂の性質が、少なくとも人間の肉へ戻されて保たれるように。たとえ死ぬ前に持っていた同じ人間には戻らなくても」と言い換え、さらに「しかし、同じ魂が同じ肉へ戻されることは、それ自体で必要と分かる、と著者は続ける。神の裁きに、ほかのどんな道があろうか」とし、『魂の証言について』4 章（罰か慰めを受けるために、元の実体と同じ人の素材と記憶が戻る。肉の感じる力なしに善も悪も感じられず、裁きを受けるべき者が出て来なければ裁きの筋道がない）、『魂について』58 章、『肉の復活について』17 章を挙げる。Mayor は ratio に同じ『魂の証言について』4 章、タティアノス 6 章、アンブロシウスを挙げる（l. 27132–27147）。
- 読者への影響：小 — 注 g では、ここは仮の段階の論（人間に戻るなら、少なくとも人間のありさまに）で、同じ肉への復活は次の 48.5 で言う。
- 訳での扱い：訳注は付けない。quemlibet pro quolibet, dum hominem は「だれがだれの代わりでも、人間でさえあれば」。conditio は注 g のとおり「（人間の）ありさま」で、effigies「姿、顔かたち」と対。48.12 の conditionis、48.13 の condicione との訳し分けは末尾の「メインで決めること」。restauraretur は底本の未完了過去の接続法のまま。
- 確かめた資料：Oehler 画像 0322（本文、校注 48 章 21〜25、注 g）。OCR l. 37678–37681、37700–37731、37783–37800。Bindley OCR l. 9017–9020。Bindley 画像 `cache/archive.org/apologeticusadve00tertuoft/page/n181_w1600.jpg`（p. 144）。Mayor 画像 0172（p. 148）。Mayor OCR l. 8034、27132–27147。

### 48.5 Certe quia ratio restitutionis destinatio iudicii est … et quod omnino de iudicio dei pati debent animae, non sine carne meruerunt（et quod と eo quod、meritum）
- 底本（Oehler）：Certe quia ratio restitutionis destinatio iudicii est, necessario idem ipse qui fuerat exhibebitur, ut boni seu contrarii meriti iudicium a deo referat. Ideoque repraesentabuntur et corpora, quia neque pati quicquam potest anima sola sine materia stabili, id est carne, et quod omnino de iudicio dei pati debent animae, non sine carne meruerunt intra quam omnia egerunt.
- ほかの読み：c・d は est の後に eo quod omnino de iudicio dei pati debent, を入れて necessario と続ける（校注 48 章 25b）。exhibebitur を F は exhibetur（26）。potest を F は possit（27）。materia stabili を c・d は stabili materia（28）。et quod omnino は A・B・F・G・e・f、ウィーン写本、Pamelius の写本。D は eoque omnino、E・a・b・d、オクスフォード、エアフルト写本は eo quod omnino（「（魂が受けるべきものを）……したので」）、λ は et omnino。c ではこの quod omnino de iudicio dei pati debent の語がここになく、少し前（25b）に出ている（29）。Bindley の本文は … sine stabili materia, id est carne; et quod omnino de judicio Dei pati debent animae, non sine carne meruerunt, intra quam omnia egerunt.（OCR l. 9020–9027）。
- 採る校訂者：Bindley は sine stabili materia, id est carne に『魂の証言について』4 章を挙げ、『肉の復活について』17 章では魂を物体と言って別の論じ方をする、と注する（l. 9047–9052）。Mayor は meruerunt にアンブロシウス『復活の信仰について』88 節（体と魂の行いは共通だから、両方が裁きに来る）、偽ユスティノスを挙げる（l. 27186–27193）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。Certe は前の仮の論から本論へ移る「確かに、」。ratio restitutionis destinatio iudicii est は「元に戻されることの理由は、裁きが定められていることにある」。meritum（boni seu contrarii meriti）は「善い、あるいは反対の（悪い）報い・値打ち」で、訳語表の meritum「罪」（41 章）は当てられない（末尾の「メインで決めること」）。exhibebitur、repraesentabuntur は「（裁きの場に）出される」。
- 確かめた資料：Oehler 画像 0322（本文、校注 48 章 25b〜29）。OCR l. 37681–37687、37713–37742。Bindley OCR l. 9020–9027、9047–9052。Mayor OCR l. 27186–27193。

### 48.6 Sed quomodo, inquis, dissoluta materia exhiberi potest? Considera temetipsum, o homo, et fidem rei invenies（inquis と、λ の homo es）
- 底本（Oehler）：Sed quomodo, inquis, dissoluta materia exhiberi potest? Considera temetipsum, o homo, et fidem rei invenies. Recogita quid fueris antequam esses. Utique nihil. Meminisses enim, si quid fuisses.
- ほかの読み：temetipsum, o homo を F は teipsum o homo、c は temetipsum homo、λ は temetipsum, homo es（「おまえ自身を考えよ。おまえは人間だ」。校注 48 章 30）。Bindley は底本と同じ（OCR l. 9029–9059）。
- 採る校訂者：Oehler の注はこの節にない。Mayor は sed quomodo にタティアノス 6 章（生まれる前のわたしは自分がだれか知らず、肉の素材の中にだけあった）を挙げる（l. 27195–27197）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。単数の inquis は本の AGENTS.md の 13.1 の例のとおり、言い分を「」に入れて「と、あなたは言います」。o homo は呼格なので「人よ」の呼びかけにでき、48.6〜48.12 の二人称単数は「あなた」（「あなたがた」と分ける）。fidem rei invenies は「このことが信じられることを見いだす」。Meminisses enim, si quid fuisses は過去完了の事実に反する仮定で、本の AGENTS.md（8:11）のとおり過去の形で訳す。
- 確かめた資料：Oehler 画像 0322（本文、校注 48 章 30）。OCR l. 37687–37690、37743、37770–37773。Bindley OCR l. 9029、9057–9059。Mayor OCR l. 27195–27197。

### 48.7–48.8 cur non possis rursus esse de nihilo …? Quid novi tibi eveniet? … Redde si potes rationem qua factus es, et tunc require qua fies（小さな異読）
- 底本（Oehler）：Qui ergo nihil fueras priusquam esses, idem nihil factus cum esse desieris, cur non possis rursus esse de nihilo eiusdem ipsius auctoris voluntate qui te voluit esse de nihilo? Quid novi tibi eveniet? Qui non eras, factus es; cum iterum non eris, fies. Redde si potes rationem qua factus es, et tunc require qua fies.
- ほかの読み：factus を D・a は fueris（校注 48 章 31）。possis を D・a・e は posses（32）。rursus esse は A・B・G・f。D・E・λ・a〜e、ゴルツェ写本、エアフルト写本、オクスフォードは esse rursus、F・ウィーン写本は esse（33）。eiusdem から de nihilo までを D は欠く（34）。ipsius auctoris を E・エアフルト写本は auctoris ipsius、a〜d は ipsius を欠く（35）。de nihilo は A・B・E・F・d・f、エアフルト写本。G・a・b・e、ウィーン写本は ex nihilo（36）。Quid novi を λ は Nihil ergo novi（37）。cum iterum non eris, fies を λ は et iterum cum non eris fies（38）。si potes rationem を D・a・b は rationem si potes とし、c とオクスフォードには Redde から qua fies までがまったくない（39）。require を D・G・a・b は requires（40）。Bindley の本文は … cur non possis esse rursus de nihilo, …（OCR l. 9059–9064）。
- 採る校訂者：資料に構文の注はない。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。auctor は「造り主」か「作り手」か（訳語表の factitator「作り手」は哲学者の説の神。ここはキリスト者の神で尊敬語）をメインが決める。ratio は「仕方、筋道」（qua factus es「どのようにして造られたか」）。
- 確かめた資料：Oehler 画像 0322（本文、校注 48 章 31・32）、0323（本文、校注 33〜40）。OCR l. 37690–37691、37743、37776、37807–37810、37825–37830。Bindley OCR l. 9059–9064。

### 48.9 Et tamen facilius utique fies quod fuisti aliquando, quia aeque non difficile factus es quod nunquam fuisti aliquando（Ashton の quod difficilius）
- 底本（Oehler）：Et tamen facilius utique fies quod fuisti aliquando, quia aeque non difficile factus es quod nunquam fuisti aliquando.
- ほかの読み：校注に異読はない。Bindley は底本と同じで、注に「Ashton は non difficile の代わりに quod difficilius と読むことを提案した」と挙げる（OCR l. 9064–9066、9083）。Mayor も「NON DIFFICILE Ashton（Woodham による）quod difficilius」と挙げる（l. 27276–27277）。
- 採る校訂者：Bindley は『肉の復活について』11 章と、『オクタウィウス』34 章の「ないものを始めるほうが、あったものをくり返すより難しい」、ラクタンティウス 7 巻 23 章を挙げ、「教父たちによくある論だ」とする（l. 9080–9083）。
- 読者への影響：小 — 底本では「（かつてなかったものに）造られたのも、同じく難しくはなかったのだから」。Ashton の推定では「（もっと難しいことに）造られたのだから」と論がはっきりするが、底本の読みでも、前にあったものに戻るほうがやさしい、という結論は同じ。
- 訳での扱い：訳注は付けない。底本の aeque non difficile で訳す。『オクタウィウス』34:9 の既訳「しかも、ないものを始めるほうが、あったものをくり返すより難しいのです」と論が重なる。
- 確かめた資料：Oehler 画像 0323（本文）。OCR l. 37810–37812。Bindley OCR l. 9064–9066、9080–9083。Mayor OCR l. 27276–27277。`books/octavius/src/chapter-33-36/both.md`（34.9）。

### 48.9 Dubitabitur, credo, de dei viribus, qui tantum corpus hoc mundi … inposuit, animatum spiritu omnium animarum animatore, signatum et ipsum humanae resurrectionis exemplum in testimonium vobis（inposuit と composuit、注 h・i、et ipsum と et per ipsum）
- 底本（Oehler）：Dubitabitur, credo, de dei viribus, qui tantum corpus hoc mundi de eo quod non fuerat non minus quam de morte vacationis et inanitatis inposuit, animatum spiritu omnium animarum animatore, signatum et ipsum humanae resurrectionis exemplum in testimonium vobis.
- ほかの読み：Dubitabitur を F・c・d、ウィーン写本は Dubitatur（校注 48 章 41）。corpus hoc を F は hoc corpus（42）。inposuit は A・B・D・E・F・G・(λ)・a〜e、アンブロジアーナ写本、ウィーン写本、エアフルト写本、オクスフォード。f と Havercamp は Fulvius Ursinus に従って composuit（「組み立てた」。43）。animatum をアンブロジアーナ写本の最初の手は anima とし、G は欠く（44）。spiritu を Aφ・D（後の手）・E・a、アンブロジアーナ写本、エアフルト写本は spiritum（45）。animarum を G は animatum、c は animantum とし、λ・f は欠く（46）。animatore を (Aβ?) は animator、a は animatione（47）。et ipsum を λ・f と Havercamp は et per ipsum（「それによって」。48）。vobis は A・B・E・F・G・d・f、ウィーン写本、エアフルト写本、Pamelius の写本。D・a・b・c・e は nobis（49）。Bindley の本文は … inanitatis composuit animatum spiritu omnium animarum animatore, signatum et per ipsum humanae resurrectionis exemplum in testimonium vobis.（OCR l. 9066–9071）。
- 採る校訂者：注 48 章 h（p. 293）は inposuit に「空虚の中に」とだけ注する（無の中に据えた、の意味）。注 i は signatum を「つまり、明らかな、はっきりした、示す」とし、『肉の復活について』13 章（「この件について、これほどはっきりし、しるしの明らかなものがあろうか」）を挙げる。Bindley は vacationis et inanitatis に創世記一・二（ウルガタ「地はむなしく、空であった」）を挙げる（l. 9085–9086）。
- 読者への影響：小 — composuit なら「組み立てた」、inposuit（注 h）なら「（空虚の中に）据えた」。
- 訳での扱い：訳注は付けない。Dubitabitur, credo は皮肉（「なるほど、……が疑われるのでしょう」）。de morte vacationis et inanitatis は「空虚とむなしさという死から」で、創世記一・二（口語訳「地は形なく、むなしく」）を思わせるが、引用ではないので『』と出典は付けない。spiritus は訳語表の「霊」で、聖霊と補わない（21 章の扱い）。神の動作は尊敬語。signatum は注 i の「はっきり示された」。in testimonium vobis は底本の vobis（あなたがたへの証しとして）。
- 確かめた資料：Oehler 画像 0323（本文、校注 48 章 41〜49、注 h・i）。OCR l. 37812–37816、37830–37835、37846–37856。Bindley OCR l. 9066–9071、9085–9086。`node tools/bible.js Gen.1.2`。

### 48.10 Lux cotidie interfecta resplendet … certe semina non nisi corrupta et dissoluta fecundius surgunt, omnia pereundo servantur, omnia de interitu reformantur（注 k・l、vivescunt と reviviscunt、consummantur と consumuntur）
- 底本（Oehler）：Lux cotidie interfecta resplendet et tenebrae pari vice decedendo succedunt, sidera defuncta vivescunt, tempora ubi finiuntur incipiunt, fructus consummantur et redeunt, certe semina non nisi corrupta et dissoluta fecundius surgunt, omnia pereundo servantur, omnia de interitu reformantur.
- ほかの読み：vivescunt は A・B・D・E・λ・a〜e、ウィーン写本、アンブロジアーナ写本、エアフルト写本、オクスフォード。G は viviscunt、f と Havercamp は Fulvius Ursinus に従って reviviscunt、F は iuvenescunt（校注 48 章 50）。consummantur は A・B・D・E・λ・c・d・e、ウィーン写本、エアフルト写本、オクスフォード。G・a・b は consumantur、F・f と Havercamp は consumuntur（「食べ尽くされる」。51）。Bindley の本文は … sidera defuncta reviviscunt, … fructus consumuntur et redeunt; …（OCR l. 9071–9076）。
- 採る校訂者：注 48 章 k（p. 293）は「interficere（殺す）を命のないものに使うのは、とくにアフリカの書き手だ」とし、『肉の復活について』3 章・5 章、『見世物について』17 章、アルノビウス 3 巻 23 章、アプレイウス『変身物語』5 巻 4 章、ノニウスを挙げる。注 l は omnia de interitu reformantur に『肉の復活について』12 章と、『オクタウィウス』34 章（自然全体がよみがえりの下稽古をする。太陽は沈んで生まれ、星は傾いて戻り、花は散って生き返る……体の春も待たなければならない）を引く。Bindley は、自然の巡りを体の復活の予表とする例に『肉の復活について』12〜13 章、ローマのクレメンス『コリントの信徒への手紙一』25 章を、semina non nisi corrupta にヨハネ一二・二四と第一コリント一五・三六を挙げ、「この類比は厳密には成り立たない（下の Ergo, inquitis を見よ）」とする（l. 9088–9095）。Mayor は interfecta にフィルミクス・マテルヌス、『肉の復活について』12 章（日は夜へ死に、闇に葬られ、また生き返る）、『オクタウィウス』34 章 12 節を、omnia pereundo servantur に『肉の復活について』12 章（すべては戻る。ゆえに終わるのは、成るため）を挙げる（l. 27279–27300、27373–27382）。
- 読者への影響：小 — consumuntur（食べ尽くされる）でも、実りが尽きてまた戻る、の意味は同じ。
- 訳での扱い：訳注は付けない。底本の vivescunt（生き返る）、consummantur（実りきる、終わる）で訳す。interfecta は注 k のとおり、光が「殺される」と擬人の言い方を残せる。semina … surgunt は、ヨハネ一二・二四、第一コリント一五・三六に近いが、引用ではないので『』と出典は付けない。『オクタウィウス』34:11 の既訳「種は、朽ちてこそ、また芽吹きます」と響き合う。
- 確かめた資料：Oehler 画像 0323（本文、校注 48 章 50・51、注 k・l）。OCR l. 37816–37821、37835–37838、37843–37847、37858–37883。Bindley OCR l. 9071–9076、9088–9095。Mayor OCR l. 27279–27300、27373–27382。`books/octavius/src/chapter-33-36/both.md`（34.11）。`node tools/bible.js John.12.24 1Cor.15.36`。

### 48.11 Tu homo, tantum nomen, si intellegas te vel de titulo Pythiae discens, dominus omnium morientium et resurgentium, ad hoc morieris, ut pereas?（注 m：デルポイの銘、discens と dicens）
- 底本（Oehler）：Tu homo, tantum nomen, si intellegas te vel de titulo Pythiae discens, dominus omnium morientium et resurgentium, ad hoc morieris, ut pereas?
- ほかの読み：intellegas を G・c は intelligis（校注 48 章 52）。discens は A・B・D・b・d・e・f、Pamelius の写本。E・F・G・a、エアフルト写本、ウィーン写本は dicens、c は diceris、λ は disces deum（53）。dominus を D・a は dominum、F は domus（54）。et resurgentium を D・a・b は resurgentiumve（55）。Bindley は底本と同じ（OCR l. 9076–9078）。
- 採る校訂者：注 48 章 m（p. 293）は de titulo Pythiae を「つまり、デルポイの銘から」とし、デルポイの「ΓΝΩΘΙ ΣΑΥΤΟΝ」（汝自身を知れ）についてプルタルコス『デルポイの E について』2 章、プリニウス 7 巻 32 章を挙げる。Bindley も γνῶθι σεαυτόν とし、この格言はタレスのもの（ディオゲネス・ラエルティオス 1 巻 40 節）とする。ad hoc morieris を「本当に、すっかり滅びるために死ぬのか」とし、ad hoc の副詞の用法は後期の散文に多い、とする（l. 9097–9101）。Mayor は titulo Pythiae にアレクサンドリアのクレメンス『教育者』3 巻 1 章、『オクタウィウス』17 章、ラクタンティウスを、ad hoc に『殉教者たちへ』6 章などを挙げる（l. 27384–27400）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。de titulo Pythiae は注 m の「デルポイの銘」で、銘の文言（汝自身を知れ）を補うか、Pythia を名前の表の 22.11 Pythius「ピュトの神（アポロ）」に寄せるかはメインが決める。tantum nomen は「これほど大きな名」。dominus omnium morientium et resurgentium は「死んではよみがえるすべてのものの主人」で、訳語表の dominus（神と皇帝は「主」、人の主人は「主人」）では「主人」に当たる。ad hoc … ut pereas は「滅びるために」。
- 確かめた資料：Oehler 画像 0323（本文、校注 48 章 52〜55、注 m）。OCR l. 37821–37822、37838–37840、37885–37890、37899。Bindley OCR l. 9076–9078、9097–9101。Mayor OCR l. 27384–27400。

### 48.11 Ubicumque resolutus fueris, quaecunque te materia destruxerit, hauserit, aboleverit, in nihilum prodegerit, reddet te（λ の Resurgas、小さな異読）
- 底本（Oehler）：ad hoc morieris, ut pereas? Ubicumque resolutus fueris, quaecunque te materia destruxerit, hauserit, aboleverit, in nihilum prodegerit, reddet te. Eius est nihilum ipsum cuius et totum.
- ほかの読み：λ は ut pereas? Resurgas. ubicunque と読み（「よみがえるがよい」）、Scioppius はこれを ut pereas? Resurges ubicunque（「あなたはよみがえる」）と直した（校注 48 章 56）。aboleverit を A は adoleverit、F は et aboleverit、λ は absorpserit、G は aut aboleverit et とし hauserit を欠く。prodegerit を G は redigerit、λ は redegerit（57）。te（reddet te）を λ は欠く（57b）。ipsum を D は欠く（58）。et totum を F・ウィーン写本は est totum（59）。Bindley は底本と同じ（OCR l. 9108–9110）。
- 採る校訂者：Mayor は prodegerit に Heraldus の 18 章の注と『マルキオン反駁』5 巻 6 章を挙げる（l. 27430–27431）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。reddet te の主語は quaecunque … materia（「どんな素材があなたを壊し、のみ込み、消し去り、無へ使い果たしても、その素材があなたを返す」）。Eius est nihilum ipsum cuius et totum は「全体の持ち主である方が、無そのものの持ち主でもある」。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 56〜59）。OCR l. 37899–37902、37922–37927、37961–37964、37968、37986–37989。Bindley OCR l. 9108–9110。Mayor OCR l. 27430–27431。

### 48.12 Ergo, inquitis, semper moriendum erit et semper resurgendum? Si ita rerum dominus destinasset, ingratis experireris conditionis tuae legem（inquitis、ingratis、conditionis の意味）
- 底本（Oehler）：Ergo, inquitis, semper moriendum erit et semper resurgendum? Si ita rerum dominus destinasset, ingratis experireris conditionis tuae legem.
- ほかの読み：ingratis を F・G は ingratus（つまり ingratiis。校注 48 章 60）。experireris を a は experieris（61）。Bindley の本文は Ergo, inquitis, semper moriendum erit, et semper resurgendum.（疑問符でなく句点。OCR l. 9112–9114）。Mayor は p. 148 の一覧で「p. 138 l. 19 condicionis (?)」とし、conditionis を condicionis と綴るのを好む（Mayor の本文 l. 8123 は conditionis）。
- 採る校訂者：注 48 章 n（p. 294）は ingratis を 4 章の注に送る（訳語表の「心ならずも」）。Bindley は Ergo を前の自然の類比（48.10）を受ける語とし、「類比は死とよみがえりのくり返しを含意する、と言われる。テルトゥリアヌスはその反論を黙って認めつつ、やり過ごす」と注し、conditionis を「創造」（condo から。19 章の断片の mundi conditionis と同じ）とし、condico から来る condicio と区別すべきだ、とする（l. 9131–9142）。Mayor は semper にタティアノス 6 章（ストア派の言う、周期ごとに同じものが生じては滅びる説ではない）を、ingratis に 4 章・27 章などを挙げる（l. 27433–27442）。
- 読者への影響：小〜中 — conditionis tuae legem を「あなたのありさまの定め」と取るか、Bindley のように「あなたが造られたことの定め」と取るかで言い方が変わる。Oehler の注はない。
- 訳での扱い：訳注は付けない。inquitis は本の AGENTS.md のとおり、言い分を「」に入れて「と、あなたがたは言います」。ingratis は訳語表の「心ならずも」。destinasset … experireris は事実に反する仮定（過去完了と未完了過去の接続法）で、本の AGENTS.md の形のどちらで訳すかをメインが決める。rerum dominus は神なので訳語表の「主」と尊敬語。conditio の訳は 48.4 の項と末尾の「メインで決めること」。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 60・61、注 n）。OCR l. 37902–37904、37928、37950–37951、37965。Bindley OCR l. 9112–9114、9131–9142。Mayor 画像 0172（p. 148）。Mayor OCR l. 8123、27433–27442。

### 48.13 Quae ratio universitatem ex diversitate conposuit, ut omnia aemulis substantiis sub unitate constarent … eadem aevum quoque ita destinata et distincta condicione conseruit（注 o、et distincta の出どころ、λ の別の文）
- 底本（Oehler）：At nunc non aliter destinavit quam praedicavit. Quae ratio universitatem ex diversitate conposuit, ut omnia aemulis substantiis sub unitate constarent ex vacuo et solido, ex animali et inanimali, ex conprehensibili et inconprehensibili, ex luce et tenebris, ex ipsa vita et morte: eadem aevum quoque ita destinata et distincta condicione conseruit, ut prima haec pars, ab exordio rerum quam incolimus, temporali aetate ad finem defluat, sequens vero, quam expectamus, in infinitam aeternitatem propagetur.
- ほかの読み：aemulis を λ・f と Havercamp は ex aemulis（校注 48 章 62）。constarent を A・E、エアフルト写本、オクスフォードは cum constarent（63）。morte: eadem aevum quoque を A・λ は morte eadem. Aevum quoque、G は morte eadem. Tunc quoque（64）。ita を D・E、エアフルト写本は ista（65）。et distincta は Aβ だけ。c・d・e・f と Havercamp は ac distincta、Aφ・B・D・E・F・G・a・b、エアフルト写本、ウィーン写本は distincta（et がない）。λ は ita distincta conditione conservatur ut と読む（66）。haec pars を λ は autem pars（67）。Bindley の本文は … ut omnia ex aemulis substantiis … ita destinata ac distincta condicione conseruit …（OCR l. 9115–9125）。
- 採る校訂者：注 48 章 o（p. 294）は aemulis を『迫害における逃亡について』2 章の注に送る（注 a で aemulus は inimicus の意味。47.9 の項）。Mayor は praedicavit に 21 章、『蠍の毒の解毒剤』11 章などを、ex diversitate に『パリウムについて』2 章（異なるものが一つに……不和を互いの巡りが結ぶ）を、inanimali に用例を挙げる（l. 27443–27462）。Bindley は ex comprehensibili を「知的な把握ではなく、文字どおり（手で）捉えられるもの」とし、17 章の注を、aevum を「時、むしろ存在の全行程。この世と次の世を含む」とし、18 章の注を参照させる（l. 9144–9148）。
- 読者への影響：小 — 底本の et distincta は Aβ だけの読みだが、ac distincta、distincta と意味は変わらない。
- 訳での扱い：訳注は付けない。aemulis substantiis は注 o のとおり「互いに敵対する（相反する）実体」で、ここは悪霊の働きではなく、自然の対立物（空と固体、生き物と命のないもの、光と闇、いのちと死）。訳語表の aemulus「敵対する」（神に張り合うダイモンの働き）との揃え方はメインが決める。ratio（Quae ratio … eadem …）は「宇宙を組み立てた理」で、訳語表の「理」（17.1、21 章）に当たるか、ふつうの「筋道」かをメインが決める。praedicavit は訳語表の「告げ知らせる」。condicio は「条件、定め」。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 62〜67、注 o）。OCR l. 37904–37912、37929–37933、37953–37954、37971–37973、37990–37993。Bindley OCR l. 9115–9125、9144–9148。Mayor OCR l. 27443–27462。

### 48.14 Cum ergo finis et limes, medius qui interhiat, adfuerit, ut etiam ipsius mundi species transferatur aeque temporalis, quae illi dispositioni aeternitatis aulaei vice oppansa est（注 p：千年の期間、Bindley の否定、注 q）
- 底本（Oehler）：Cum ergo finis et limes, medius qui interhiat, adfuerit, ut etiam ipsius mundi species transferatur aeque temporalis, quae illi dispositioni aeternitatis aulaei vice oppansa est, tunc restituetur omne humanum genus …
- ほかの読み：medius を F は欠く（校注 48 章 68）。ipsius mundi は A・B・F・G、ウィーン写本、エアフルト写本。D・E・a〜f と Havercamp は mundi ipsius（69）。aulaei vice は B・D・a〜f と Havercamp。ウィーン写本は aula ei vice、A・E・F、エアフルト写本は aulae vice、G は aula（70）。Bindley の本文は Cum ergo finis et limes medius, qui interhiat, adfuerit, ut etiam mundi ipsius species …（medius を limes につなげて区切る。OCR l. 9125–9128）。
- 採る校訂者：注 48 章 p（p. 294。Rigaltius）は finis et limes, medius qui interhiat を「千年の期間をこう呼ぶ。このことは『マルキオン反駁』3 巻 14 章に」とする（刷られたとおりの章。末尾の「未確認」）。注 q は transferatur aeque temporalis を「つまり、事柄そのものと同じく一時のものなので、別の姿へ移る」とする。Bindley は「終わりと、その間に口を開ける中ほどの境（世の初めの部分と続く部分のあいだ）」とし、「limes medius にテルトゥリアヌスの千年王国説への言及を読み取らない」と言う。ルカヌス 1 巻 457 行（長い命の、死は中ほどにある）を挙げ、mundi ipsius species transferatur に第一コリント七・三一、第一ヨハネ二・一七、マタイ二四・三五を挙げる（l. 9150–9157）。Mayor は limes にセネカ書簡 36 の「死は命を中断するが、奪わない」を、oppansa に 16 章を挙げる（l. 27464–27469）。
- 読者への影響：中 — 注 p（Rigaltius）に従えば、この世と永遠のあいだに口を開ける「中ほどの境」は千年の期間で、終末の順序の描き方が変わる。Bindley はその読みを否む。本文の読みの違いではなく、取り方の違い。
- 訳での扱い：訳注は勧めない（写本の読みの違いではなく、ルートの AGENTS.md の訳注の決まりに当たらないため）。注 p は異論なく Rigaltius を引くので、本の AGENTS.md（25.17 の注 v）にならえば Oehler の取り方として扱う。ただ、本文の語は「中ほどで口を開ける境」とだけ言うので、訳に「千年」を補うかはメインが決める（この一覧としては補わず、`// ` メモに注 p を書くことを勧める）。species mundi transferatur は第一コリント七・三一（口語訳「この世の有様は過ぎ去る」）に近いが、引用ではないので『』と出典は付けない。aulaei vice oppansa est は「幕のように張り渡されている」。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 68〜70、注 p・q）。OCR l. 37912–37915、37934–37935、37956–37959、37974–37975、37994–37997、38003、38017–38019。Bindley OCR l. 9125–9128、9150–9157。Mayor OCR l. 27464–27469。`node tools/bible.js 1Cor.7.31`。

### 48.14 tunc restituetur omne humanum genus ad expungendum quod in isto aevo boni seu mali meruit, et exinde pendendum in immensam aeternitatis perpetuitatem（注 r と expungere、pendendum の異読）
- 底本（Oehler）：tunc restituetur omne humanum genus ad expungendum quod in isto aevo boni seu mali meruit, et exinde pendendum in immensam aeternitatis perpetuitatem.
- ほかの読み：omne humanum genus を λ は omnium hominum genus（校注 48 章 71）。expungendum は A・B・D・E・F・λ・a・b・d・e・f、ウィーン写本、エアフルト写本など。G・c、ゴルツェ写本は persolvendum（72）。exinde pendendum（オクスフォードは pendendam）は Aβ・F・G・b・d、ウィーン写本、オクスフォード、ゴルツェ写本、Pamelius の写本。c は exinde prehendendum、(Aφ B)・f と Havercamp は exin dependendum、D・E と Fulvius Ursinus は exinde dependendum、a は exinde deprehendendum、e は exinde（73）。in を D・F・G・a〜d は欠く（G では in immensam の代わりに in mensam）。F は後ろで perpetuitatis aeternitatem（74）。Bindley の本文は … ad expungendum quod in isto aevo boni seu mali meruit, et exin dependendum in immensam aeternitatis perpetuitatem.（OCR l. 9128–9162）。
- 採る校訂者：注 48 章 r（p. 294）は expungendum を 35 章の注に送る。その注 l で Oehler は、expungere を「perficere（果たす、仕上げる）」とし、テルトゥリアヌスが好む語として 15 章、20 章、21 章、『諸国民へ』1 巻 7 章、2 章の debito poenae nocens expungendus est などを挙げる（OCR l. 31060–31100）。Mayor は expungendum に 21 章と Kaye を挙げる（l. 27493）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。expungere は注 r（35 章の注 l）の「果たす、決着をつける」で、35:4 の既訳「（誓願を）果たす」と同じ語。ここは「この世で値した善か悪かの決着をつけ」。pendendum は「（その報いを）支払う」で、底本の pendendum で訳す。meruit は 48.5 の meritum と同じく「値した」（訳語表の meritum「罪」は当てない）。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 71〜74、注 r）。OCR l. 37915–37917、37936–37942、37976–37982、38006–38010、38021–38022、31060–31100。Bindley OCR l. 9128–9162。Mayor OCR l. 27493。`books/tertullian-apology/src/chapter-32-35/both.md`（35.4）。

### 48.15 Ideoque nec mors iam, nec rursus ac rursus resurrectio, sed erimus idem qui nunc, nec alii post, dei quidem cultores apud deum semper, superinduti substantia propria aeternitatis（注 s、idem と iidem、第二コリント五・四）
- 底本（Oehler）：Ideoque nec mors iam, nec rursus ac rursus resurrectio, sed erimus idem qui nunc, nec alii post, dei quidem cultores apud deum semper, superinduti substantia propria aeternitatis:
- ほかの読み：（二つ目の）nec を λ は欠く（校注 48 章 75）。idem は Aβ・E・F・G。a〜f は iidem（76）。qui nunc を c は qui et nunc（77）。semper を λ は欠き、Scioppius がよしとする（78）。Bindley の本文は … sed erimus iidem qui nunc, nec alii post: Dei quidem cultores apud Deum semper, …（OCR l. 9163–9166）。
- 採る校訂者：注 48 章 s（p. 294）は nec rursus ac rursus resurrectio を 9 章の注に送る。その注 f で Oehler は、テルトゥリアヌスはしばしば副詞を形容詞の代わりに名詞と組み合わせるとし、17 章の iterum Christianus、5 章の tot exinde principes などとともにこの rursus ac rursus resurrectio を挙げる（OCR l. 19263–19279）。Bindley は nec mors iam, nec rursus を「絶対の死もなく、くり返すよみがえりもない」とし、superinduti substantia propria aeternitatis に第二コリント五・四を挙げ、永遠に固有の実体はテルトゥリアヌスによれば天使のそれだとして、『女性の装いについて』1 巻 2 章、『妻へ』1 巻 1 章、『肉の復活について』36 章、ルカ二〇・三六を挙げる（l. 9179–9188）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。rursus ac rursus resurrectio は注 s（9 章の注 f）のとおり副詞が名詞を修飾する形で「くり返されるよみがえり」。erimus idem qui nunc は「今と同じ者でありつづける」。dei cultores は「神を拝む者たち」（訳語表の colere「拝む」）。superinduti は第二コリント五・四（口語訳「その上に着ようと願う」）に近いが、引用ではないので『』と出典は付けない。
- 確かめた資料：Oehler 画像 0324（本文、校注 48 章 75〜78、注 s）、0325（本文）。OCR l. 37917–37919、38013–38014、38024–38025、38031、19263–19279。Bindley OCR l. 9163–9166、9179–9188。`node tools/bible.js 2Cor.5.4`。

### 48.15 profani vero, et qui non integre ad deum, in poena aeque iugis ignis, habentes ex ipsa natura eius divinam scilicet subministrationem incorruptibilitatis（integre と integri、注 t、habentes と habentis）
- 底本（Oehler）：profani vero, et qui non integre ad deum, in poena aeque iugis ignis, habentes ex ipsa natura eius divinam scilicet subministrationem incorruptibilitatis.
- ほかの読み：qui を a・b・c は欠く（校注 48 章 79）。integre は A・B・D・E・F・G・a・f、ウィーン写本、エアフルト写本、オクスフォード。b・c・d・e と Pamelius のいくつかの写本は integri（80）。ad deum を e は apud deum（81）。poena を λ は poenam（82）。habentes を c・d と Havercamp は habentis（83）。divinam を λ・f と Havercamp は divina（84）。subministrationem を λ は subministratione（85）。Bindley の本文は profani vero et qui non integri ad Deum, in poena aeque jugis ignis, habentis ex ipsa natura ejus, divinam scilicet subministrationem incorruptibilitatis.（OCR l. 9166–9168。OCR の poenas は行番号 5 の混入で、Bindley の画像 `n184_w1600.jpg`（p. 147）で poena と確かめた）。
- 採る校訂者：注 48 章 t（p. 295）は et qui non integre ad deum に『魂の証言について』4 章（キリストを知るのは彼らと、神に向かうどんな一派でもよいが、あなたも憎むことで彼を知っている）を挙げる。Bindley は「habentis は写本の読み。Rigaltius は profani に合わせて habentes を、また divinam の代わりに divina を好んだ」と注する（l. 9190–9191）。これは Oehler の校注 83（habentis は c・d と Havercamp だけで、写本はすべて habentes）と食い違う。Mayor は subministrationem に『マルキオン反駁』4 巻 39 章などの用例を、incorruptibilitatis に用例を挙げる（l. 27497–27514）。
- 読者への影響：小〜中 — 底本の habentes では、不信の者たちが「（火の）本性そのものから、朽ちないための神の供給を受けている」。habentis では、火が「自分の本性から」それを持つ。どちらも、罰を受ける者が焼き尽くされない、という意味は同じ。
- 訳での扱い：訳注は付けない。底本の habentes で訳す（主語は profani）。eius は ignis を受ける。qui non integre ad deum は「神に向かって全き者でない者たち」で、注 t の引用からは、キリストを憎みつつ知る者、半端な信仰の者を含む。profani は「不敬な者たち」。iugis は「絶えることのない」。
- 確かめた資料：Oehler 画像 0325（本文、校注 48 章 79〜85、注 t）。OCR l. 38031–38035、38062–38065、38078–38084、38095–38099。Bindley OCR l. 9166–9168、9190–9191。Bindley 画像 `cache/archive.org/apologeticusadve00tertuoft/page/n184_w1600.jpg`（p. 147）。Mayor OCR l. 27497–27514。

### 48.16 Noverunt et philosophi diversitatem arcani et publici ignis … non enim absumit quod exurit, sed dum erogat, reparat（注 u と erogare）
- 底本（Oehler）：Noverunt et philosophi diversitatem arcani et publici ignis. Ita longe alius est qui usui humano, alius qui iudicio dei apparet, sive de caelo fulmina stringens, sive de terra per vertices montium eructans; non enim absumit quod exurit, sed dum erogat, reparat.
- ほかの読み：est qui を λ は est ignis qui（校注 48 章 86）。apparet を F は paret（87）。fulmina を E・エアフルト写本は flumina（88）。vertices を F・ウィーン写本は verticem（89）。eructans を λ は eructuans（90）。absumit を a・b・e は assumit（91）。exurit を F・ウィーン写本は esurit、G は exuritur（92）。Bindley は底本と同じ（OCR l. 9168–9173）。
- 採る校訂者：注 48 章 u（p. 295）は sed dum erogat, reparat を『蠍の毒の解毒剤』3 章の注に、erogare の用法を同 6 章の注に送る。3 章の注 b で Oehler は、「知恵ある火」について『オクタウィウス』35 章（そこでは知恵ある火が手足を焼いては新たにし、食いちぎっては養う）、ヒエロニムスのダニエル書三章の注（体は焼けず、縄だけが焼ける）などとともに『護教論』48 章を挙げる（OCR l. 61439–61460）。6 章の注 k で Oehler は erogari を「impendi, consumi（費やされる、使い尽くされる）」とし、この 48.16 の dum erogat, reparat と 44.1 の erogamur などを挙げる（OCR l. 62306–62325）。Bindley は apparet に 13 章の注を、dum erogat を「焼き尽くしつつも」とし、44 章の注を参照させる（l. 9193–9195）。Mayor は humano に 31 章を、eructans にアウグスティヌス『神の国』21 巻 11 章を、non absumit にプルデンティウス、カッシオドルスを、erogat に「費やす」、44.1、『オクタウィウス』35 章 3 節、ラクタンティウス 7 巻 21 章（同じ火が不敬な者を焼き、また作り直す）を挙げる（l. 27516–27545）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。erogat は注 u の送る 6 章の注 k の「使い尽くす」で、44:1 の既訳「使い果たされている」と揃えられる（「使い尽くしながら、作り直す」）。『オクタウィウス』35:3 の既訳「手足を焼いては新たにし」と響き合う。arcani et publici ignis は「ひそかな火と、ふつうの（人目にふれる）火」。apparet は、Bindley の 13 章の注（l. 3889–3890）が「仕える、奉仕する」とし、この 48.16 を例に挙げる。13:9 の haruspex mortuis apparet の既訳も「死んだものに仕える」。「（神の裁きに）仕える」で訳すか、「現れる」とするかはメインが決める。
- 確かめた資料：Oehler 画像 0325（本文、校注 48 章 86〜92、注 u）。OCR l. 38035–38045、38081–38089、38101–38104、61439–61460、62306–62325。Bindley OCR l. 3889–3890、9168–9173、9193–9195。Mayor OCR l. 27516–27545。`books/octavius/src/chapter-33-36/both.md`（35.3）、`books/tertullian-apology/src/chapter-12-14/both.md`（13.9）。

### 48.17 Adeo manent montes semper ardentes, et qui de caelo tangitur, salvus est, ut nullo iam igni decinerescat … poenam nutrientis（注 v、Bindley の三つの取り方、nutrientis と nutrientes）
- 底本（Oehler）：Adeo manent montes semper ardentes, et qui de caelo tangitur, salvus est, ut nullo iam igni decinerescat. Et hoc erit testimonium ignis aeterni, hoc exemplum iugis iudicii poenam nutrientis. Montes uruntur et durant. Quid nocentes et dei hostes?
- ほかの読み：Adeo を F は Ideo（校注 48 章 93）。igni を F・ウィーン写本は igne（94）。Et を λ は欠く（95）。nutrientis は (Aφ B)・F・b・c・d・e・f、ウィーン写本。Aβ・D・E・G・a、エアフルト写本は nutrientes（96）。Bindley は底本と同じ（OCR l. 9173–9177）。
- 採る校訂者：注 48 章 v（p. 295）で Oehler は「この語は学者たちの才をひどく悩ませた。しかしテルトゥリアヌスは、天の火は触れるだけで、焼き尽くさないと言っているのだ。この解釈の証人にミヌキウス・フェリクスの言葉がある。彼はここでも、ほかの多くの箇所と同じく、テルトゥリアヌスをまね、ぴったり従っている」とし、『オクタウィウス』（Oehler は cap. 34 と記す。この翻訳の底本では 35.3）の「雷の火は体に触れても焼き尽くさない。エトナ山やウェスウィウス山の火……は燃えさかっても尽きない」を引く。Bindley は qui de caelo tangitur に三つの解釈を挙げる。（1）雷に打たれた体は火に焼けない（プリニウス 11 巻 37 章の、毒で死んだ者の心臓は焼けないという言い伝え）、（2）雷に打たれた者は火葬を許されず、その場に葬られるというヌマの定めを指す、（3）雷で死ぬと体は傷つかず、まるごと残る（ミヌキウス 35 章）（l. 9197–9207）。Mayor は、雷に打たれた者はその場に葬るというクインティリアヌス『小弁論集』264、フェストゥス、プリニウス 2 巻 54 章 145 節（そのように死んだ者を火葬することは許されず、土に葬るのが宗教の定め）、アルテミドロスを挙げ、montes に『悔い改めについて』12 章（山は火で裂けても尽きない。裁きの永遠を示す）、アウグスティヌスを挙げる（l. 27547–27580）。
- 読者への影響：中 — 注 v では、雷に打たれた者は「無事で、もはやどんな火にも灰にならない」と、天の火が触れても焼き尽くさない例になる。Mayor の挙げる習いでは、雷に打たれた者は火葬されない、という意味になる。
- 訳での扱い：訳注は付けない。注 v に従い、天の火に触れられた者が焼き尽くされない例として訳す。『オクタウィウス』35:3 の既訳「雷の火は、体に触れても焼き尽くしません」と響き合わせられる。nutrientis は iudicii にかかり、「罰を養う、絶えることのない裁き」。Quid nocentes et dei hostes? は「まして罪人と神の敵はどうでしょうか」（uruntur et durant を受ける）。decinerescat は「灰になる」。
- 確かめた資料：Oehler 画像 0325（本文、校注 48 章 93〜96、注 v）。OCR l. 38045–38056、38071–38075、38089、38106–38125。Bindley OCR l. 9173–9177、9197–9207。Mayor OCR l. 27547–27580。`books/octavius/src/chapter-33-36/both.md`（35.3）。

---

## メインで決めること

- 47.3 の ex proprio instituto：立体で刷られた Oehler 自身の推定（校注 24 に ego。写本は ex proinstituto など）。本の AGENTS.md の 36.2・37.8 の先例どおり、訳注は付けずに `// ` メモに書くことを勧める。
- 訳語の初出：gehenna（47.10。口語訳はマタイ五・二二などで「地獄」、音を写せば「ゲヘナ」）と paradisus（47.11。口語訳はルカ二三・四三などで「パラダイス」。「楽園」とする手もある）。同じ著者の小品集がこの訳語を引き継ぐ。
- 47.11 の igneae illius zonae：注 u に従い、前の文のピュリプレゲトンを指すと取る。（ピュリプレゲトンの）と補うか。
- 48.14 の finis et limes, medius qui interhiat：注 p（Rigaltius。千年の期間）を、本の AGENTS.md の決まり（注が異論なく他の注釈者を引くところも Oehler の取り方）で訳に入れるか、`// ` メモだけにするか。Bindley は千年の読みを否む。訳注は勧めない（読みの違いではないため）。
- 48.3 の λ の長い別の文：訳注は勧めない（論の向きが同じため）。付けるなら案は「古い一つの写本では、この節がもっと長い別の文で伝わる。」。
- 48.2 の At enim Christianus si … exigetur：相手の言い分ではなく、著者がキリスト者の扱いとの違いを示す文。本の AGENTS.md の 16.2・38.2 の例（「しかし実際、」）に当てるか。
- 48.2 の coetibus：注 d の取り方（話を聞く集まり。46.5 の像や給金との対比）で訳す。訳語表の coetus（39 章の「集い」、38.2 の「徒党を組む」）とは別の訳になる。
- 訳語表とぶつかる語：
  - meritum・merere（48.5 の boni seu contrarii meriti、48.14 の boni seu mali meruit）：訳語表は 41 章で「罪」とするが、ここは善悪の報い・値打ちで、「罪」は当てられない。
  - aemulus（48.13 の aemulis substantiis）：訳語表は「敵対する」（神に張り合うダイモンの働き）。ここは自然の相反する実体（注 o は「敵」の意味の注に送る）。47.9 の aemulationem istam は訳語表どおり「敵対」でよい。
  - fides：47.4 の fidem aspernata（信仰）、47.9 の fidem infirmarent veritatis（真理の信頼）、47.11 の Elysii campi fidem occupaverunt（信じられる場所）、47.12 の fideliora・fidem inveniunt（信じるに足る、信じられる）、48.1 の fidem infiget（信念）、48.6 の fidem rei invenies（このことが信じられること）。
  - ratio：48.3（理屈）、48.5（理由）、48.8（仕方）、48.13 の Quae ratio universitatem … conposuit（宇宙を組み立てた「理」。訳語表の 17.1・21 章の「理」に当たるか）。
  - conditio・condicio：48.4 の conditionem（注 g の「人間のありさま」）、48.12 の conditionis tuae legem（Bindley は「創造」）、48.13 の condicione（定め）。底本は 48.4・48.12 を conditio、48.13 を condicio と刷り分ける。
  - sacramenta（47.12）：訳語表は「秘儀」。ここは教えの中身（裁き、地獄、楽園）を言う（Bindley の「秘儀、あるいは教え」）。
  - instrumentum（47.7 の vetus instrumentum）：訳語表の「書物」。「古い書物」か「旧約の書」か。
  - praescribere（47.8）：7:2 の既訳「抗弁」に揃えるか。
  - expungere（48.14）：注 r（35 章の注 l の「果たす」）と 35:4 の既訳。erogare（48.16）：注 u（『蠍の毒の解毒剤』6 章の注 k の「使い尽くす」）と 44:1 の既訳「使い果たされる」。
  - lascivire（48.4）：訳語表の lascivus（3.4 の「陽気な」、39.20 の「放埒」）とは別に「戯れる」。
  - dominus（48.11 の dominus omnium morientium et resurgentium は人間を言うので「主人」、48.12 の rerum dominus は神で「主」）。
  - homines gloriae（47.3）：19:7 の既訳「名誉を求める人々」と 46:9 の既訳「名声を追う者」のどちらに揃えるか。
  - viri quidam（47.7。異端者）と comites ipsius（47.8。使徒たち）を補うか。
  - 48.16 の apparet：Bindley の 13 章の注の「仕える」（13:9 の既訳と同じ）か、「現れる」か。
- 48.12 の Si ita rerum dominus destinasset, ingratis experireris：過去完了と未完了過去の接続法が混じる事実に反する仮定を、本の AGENTS.md のどちらの形（現在の推量か、過去の形か）で訳すか。
- 名前の表に足す名：テーバイ人（Thebaei。『オクタウィウス』の表の「テーバイ」）、スパルタ人（Spartiatae）、アルゴス人（Argivi。表のアルゴス）、ヘラクレイトス（ほかの本の表と同じ）、ストア派・プラトン派・エピクロス派（3.10 の表にある）、エピクロス、ピュタゴラス（表にある）、ピュリプレゲトン（Pyriphlegethon）、エリュシオンの野（Elysii campi）、ラベリウス（Laberius）、ガイウス（48.2。3.1 の表にある）、ピュティア（48.11 の Pythia。22.11 の Pythius「ピュトの神（アポロ）」とつなぐか、注 m の「デルポイの銘」と補うか）。

---

## 未確認

- 48.4 の注 f が ex otio について送る『スカプラへ』2 章の Oehler の注。同じ OCR で `ex otio`・`Scapul` を引いたが見つからなかった（この巻に『スカプラへ』の本文と注があるかも確かめていない）。
- 48.14 の注 p（Rigaltius）が挙げる『マルキオン反駁』3 巻 14 章に、千年の期間の記述があるかどうか（Bindley と Mayor は 47.11 の paradisum に同 3 巻 24 章を挙げる。注 p の章の数が刷りの誤りかどうかを、本文で確かめていない）。
- 47.9 の spiritibus erroris と第一テモテ四・一（ウルガタの spiritibus erroris、口語訳「惑わす霊」）の関係。口語訳の本文は `node tools/bible.js` で確かめたが、この節に第一テモテを挙げる資料は見ていない。
- 48.15 の habentes と habentis：Bindley の「habentis は写本の読み」と Oehler の校注 83（habentis は c・d と Havercamp だけ）の食い違いを、ほかの資料で確かめていない。
- 48.1 の注 a が引くラベリウスの詩句の初めの語（刷られたとおり geni）と、Bothe・Ribbeck の本文。
- 47.11 の注 u の「Pyriphlegetonthis」は、拡大した画像でもこのとおり刷られている。属格 Pyriphlegethontis の刷りの誤りとみられるが、確かめる資料はない。
- 47.5 で、ストア派が神を世界の外に置くと言うのは取り違えだという Bindley の指摘を、セネカなどの本文で確かめていない。
- Mayor の 48 章の注のうち、l. 27198–27269（48.6〜48.8）、27301–27372（48.10 の一部）、27401–27424（48.11 の一部）、27476–27489（48.14 の一部）は読んでいない。
- 48.4 の注 g、48.15 の注 t、48.12 の注 n が引く『魂の証言について』4 章などの文を、その本文で確かめていない。
