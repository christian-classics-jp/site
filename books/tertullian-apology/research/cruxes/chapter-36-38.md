# chapter-36-38 の論点（36-38）

略号と資料の所在は [README.md](README.md)。Oehler の画像は `cache/archive.org/quintiseptimiifl0001fanc/pages/` の `0278_page.jpg`（p. 248）〜`0284_page.jpg`（p. 254）。ページ全体の画像を `node tools/image.js crop` で上（`pct:0,0,100,42`〜`45`）と下（`pct:0,38,100,62` など）に切り出して本文・校注・注解を読んだ（切り出しは `/tmp` に置き、保存していない）。SHA-256 の先頭 16 桁は 0278 が c9f838317fed0e76、0279 が 5bc1d74be637f2ec、0280 が 6ca0f8d9c967e455、0281 が 5d7fd805e7107c37、0282 が 0f92170a283c3771、0283 が ae17d256b99196c2、0284 が d09ace944c7beab0。OCR は `cache/archive.org/quintiseptimiifl0001fanc/quintiseptimiifl0001fanc_djvu.txt` の l. 31816–32653（ページの境は p. 248 が l. 31816、p. 249 が l. 31950、p. 250 が l. 32021、p. 251 が l. 32148、p. 252 が l. 32228、p. 253 が l. 32359、p. 254 が l. 32474）。OCR は λ を 4、A などに崩し、校注を細切れにするので、校注の略号はすべて画像で読んだ。注解もすべて画像で読んだ。

校注の番号は、36 章が p. 248 の「Cap. XXXVI.」から 1〜18（p. 249 まで）、37 章が p. 249 の「Cap. XXXVII.」から 1〜45（p. 252 まで）、38 章が p. 252 の「Cap. XXXVIII.」から 1〜25（p. 254 まで）。注解の記号は、36 章が a〜c（p. 248〜249）、37 章が a〜n（p. 250〜252）、38 章が a〜k（p. 252〜254）。p. 248 の上の校注 57〜60 と注 g〜i は 35 章、p. 254 の Cap. XXXIX. 以下は 39 章のもので、ここでは扱わない。各章の初めの校注に写本の章題が載る（36 章 DE AEQVALITATE OMNIVM PERSONARVM など、37 章 NE MALVM CONTRA MALVM など、38 章 DE COETV など）。訳には響かないので、論点にはしない。

Bindley は OCR l. 7363–7631 で読み（36 章 l. 7363、37 章 l. 7420、38 章 l. 7546、39 章 l. 7632）、Oehler の校注に出ない読み（37.1 の nec de facto）と、38.3〜38.5 の組み方は、`https://archive.org/download/apologeticusadve00tertuoft/page/n<IIIF の番号−1>_w1600.jpg` から `node tools/fetch.js` で取った `cache/archive.org/apologeticusadve00tertuoft/pages/0152_page.jpg`（p. 114。d9ff8510304dd6de）、`0156_page.jpg`（p. 118。cf42a6720d4710de）で確かめた。Mayor の注は OCR l. 21855–22766（36 章 l. 21855、37 章 l. 21952、38 章 l. 22443。Mayor の本文のページでは p. 106 l. 5〜p. 110 l. 24）。Mayor の本文は Souter の英訳と交互に並ぶので開いていない。Mayor が Oehler と違う読みを好んだとみられる箇所の一覧（p. 148、`cache/archive.org/apologeticustext00tertuoft/pages/0172_page.jpg` を `pct:50,15,50,30` と `pct:0,40,100,60` で切り出して読んだ）には、この範囲の項目が三つある（p. 106 l. 7、l. 31、p. 108 l. 3。各項に書く）。

---

### 36.1 Non possumus et Romani non esse et hostes esse（論の向きと、刊本の入れ替え）
- 底本（Oehler）：Si haec ita sunt, ut hostes deprehendantur qui Romani vocabantur, cur nos, qui hostes existimamur, Romani negamur? Non possumus et Romani non esse et hostes esse, cum hostes reperiantur qui Romani habebantur.
- ほかの読み：deprehendantur を F とウィーン写本は deprendantur（校注 p. 248 の 1）。vocabantur を G・λ は vocantur、D は欠く（校注 2）。F とウィーン写本は existimantur Romani negantur?、b・c は existimamur Romani negemur?（校注 3）。Romani non esse は A・B・D・E・F・G・λ・a・c・d・e、エアフルト写本、ウィーン写本、オクスフォード、Pamelius の写本。b・f と Havercamp は Romani esse、Desiderius Heraldus は Romani nos esse と推定する（校注 4）。二つ目の esse を c は欠き、b・f と Havercamp は non esse（校注 5）。habebantur を a・b・c は habeantur（校注 6）。
- 採る校訂者：注 p. 248 の a に引く Heraldus は、文意は「わたしたちがローマ人であり、かつ敵であることはできないのか」を求めるとし、国の敵と見破られた者がそれでもローマ人であり、そう見なされたのだから、わたしたちも敵と思われながらローマ人であってよいはずだ、と解する。Oehler は写本の本文に欠けはないとし、著者はすでに国と皇帝の敵がいつもローマ人の中から見つかると示したので、「わたしたちがローマ人と見なされず、それでいて敵と見なされることが、どうしてありうるのか。国の敵はみな非キリスト者、ローマ人から出るのであって、キリスト者から出るのではない」の意味だとする（注 a）。Bindley の本文は b・f の non possumus et Romani esse, et hostes non esse（「ローマ人であって、しかも敵でないことはできないのか」。OCR l. 7367）で、注はない。Mayor も p. 148 の一覧で「p. 106 l. 7 non esse et hostes esse] esse et hostes non esse」とし、b・f の読みを好む。Mayor の注は 24 章と 1 章の論じ方（「ローマ人の神を拝まないので、ローマ人と見なされない」）を挙げる（l. 21855–21860）。
- 読者への影響：中 — 底本の読みでは「ローマ人でない者が敵である、ということはありえない（敵はローマ人の中から出るのだから）」、b・f の読みでは「ローマ人であって敵でない者がいてよいはずだ」。結論は同じだが、文の形が変わる。
- 訳での扱い：訳注は付けない。底本の読みを、Oehler の注 a（「ローマ人でないとされ、しかも敵とされることはできない」）に従って訳す。Romani negamur の negare は訳語表の「否む」で受けられる（「ローマ人であることを否まれる」）。
- 確かめた資料：Oehler 画像 0278（本文、校注 1〜6、注 a）。OCR l. 31829–31832、31855–31863、31901–31912、31929–31947。Bindley OCR l. 7365–7368。Mayor OCR l. 21855–21860。Mayor p. 148（0172）。

### 36.2 pietas et religio et fides imperatoribus debita … quibus et hostilitas magis ad velamentum sui potest fungi（小さな異読）
- 底本（Oehler）：Adeo pietas et religio et fides imperatoribus debita non in huiusmodi officiis consistit quibus et hostilitas magis ad velamentum sui potest fungi, sed in his moribus …
- ほかの読み：debita は (Aβ)・F・G・λ・c・f と Havercamp。(Aφ Bφ Dφ)・E・a・b・d・e、ウィーン写本、オクスフォード、エアフルト写本、Pamelius の写本の一部は dedita（「ささげられた」。校注 p. 248 の 7）。fungi を a・e とウィーン写本は fingi（校注 p. 249 の 8）。his は A・B・D・F・G とウィーン写本、E とエアフルト写本は hiis、a〜f と Havercamp は iis（校注 9）。
- 採る校訂者：Bindley の本文は dedita … in iis moribus（OCR l. 7369、7407）。Bindley は hostilitas magis ad velamentum を、敵意が自分を覆う隠れみのとして、かえってもっと熱心に果たしうる務め、の意味で注する（l. 7402、7430–7431）。Mayor は hostilitas を珍しい語として用例を挙げる（l. 21862–21875）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。pietas et religio et fides は訳語表どおり「忠誠と敬虔と誠実」。huiusmodi officiis は 35 章で述べた祝いの日の務め（月桂樹、灯火など）を受ける。
- 確かめた資料：Oehler 画像 0278（本文、校注 7）、0279（本文、校注 8・9）。OCR l. 31832–31833、31907–31914、31953、31987。Bindley 画像 0152（p. 114 の上）、OCR l. 7368–7370、7402、7407、7430–7431。Mayor OCR l. 21862–21875。

### 36.2 quibus divinitas imperat tam vere quam circa omnes necesse habent exhiberi（Oehler の推定 habent と、刊本の civilitas）
- 底本（Oehler）：sed in his moribus quibus divinitas imperat tam vere quam circa omnes necesse habent exhiberi.
- ほかの読み：quibus divinitas imperat tam vere quam は A・B・D・E・G・λ・a〜e、ウィーン写本、エアフルト写本、オクスフォード。F は quos divinitas imperat tam vere quam、f と Fulvius Ursinus は quibus civilitas tam vere in imperatorem quam（「皇帝に対して…と同じく、まことに市民らしい心が…示されるべき」）（校注 p. 249 の 10）。necesse habent は Oehler 自身の推定（ego）。Oehler の知る写本・刊本はすべて necesse habet で、c はこの語を欠く（校注 11）。
- 採る校訂者：Oehler は注 p. 249 の b で「神性が、ちょうどそれ自体がすべての人に対して示されねばならないのと同じだけ、まことに果たすよう命じる、そのふるまいのうちに。皇帝や君主に対してだけではない。続く文が文意を明らかにする」と言い換える（imperat の後に fungi を補い、habent の主語を mores〔ふるまい〕とする）。Bindley の本文は f の in iis moribus, quibus civilitas in imperatorem tam vere quam circa omnes necesse habet exhiberi で、civilitas を後代の意味の「親切な心、善い心から出る思いやり」とし、hostilitas への対句と注する。habet exhiberi の habere は後代の debere（〜ねばならない）の意味とする（OCR l. 7407–7408、7433–7444）。Mayor は necesse habent exhiberi を見出しに、33 章の初め（necesse est suspiciamus）と、habere＋不定詞の用例を挙げる（l. 21877–21890）。
- 読者への影響：小 — どの読みでも、皇帝への忠誠は、神が命じる、すべての人に向けるべきふるまいの中にある、という意味は変わらない。habet（神性が主語、または非人称）でも、habent（ふるまいが主語）でも、訳の筋は同じ。
- 訳での扱い：訳注は付けない。底本の habent で、注 b の言い換え（神が命じるふるまいは、皇帝にだけでなく、すべての人に向けて示されねばならない）に従って訳す。立体で刷られた Oehler 自身の推定なので、本の AGENTS.md の 21.3 の Dudum と同じく、`// ` メモに推定であることと写本の habet を書く。
- 確かめた資料：Oehler 画像 0279（本文、校注 10・11、注 b）。OCR l. 31953–31955、31988–31991、32011–32014。Bindley 画像 0152、OCR l. 7407–7408、7433–7444。Mayor OCR l. 21877–21890。

### 36.3 Nullum bonum sub exceptione personarum administramus … indifferentis benignitatis（小さな異読）
- 底本（Oehler）：Neque enim haec opera bonae mentis solis imperatoribus debentur a nobis. Nullum bonum sub exceptione personarum administramus, quia nobis praestamus, qui non ab homine aut laudis aut praemii expensum captamus, sed a deo exactore et remuneratore indifferentis benignitatis.
- ほかの読み：sub を Aφ・E、エアフルト写本、オクスフォードは sed（校注 p. 249 の 12）。indifferentis を λ は indifferentia、c は in differentiis（校注 13）。
- 採る校訂者：Bindley の本文は Oehler と同じ（OCR l. 7409–7413）。Bindley は sub exceptione personarum を「人を分け隔てする条件のもとで」とし、どの身分の人もキリスト者の善意の対象だと注する（l. 7446–7448）。Mayor は sub exceptione に小プリニウス書簡 1 巻 12 章 5 節、スエトニウス『カエサル伝』78 を、exactore に 40 章の nocentiae iudicem et exactorem を、remuneratore に『悔い改めについて』2 章などを挙げる（l. 21892–21900）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。quia nobis praestamus は「わたしたちは自分自身のために（善を）行うから」。exactor は、40 章の用例のとおり、取り立てる・償わせる方の意味。神の動作なので、remunerator に当たる訳も尊敬語にする。
- 確かめた資料：Oehler 画像 0279（本文、校注 12・13）。OCR l. 31955–31963、31991–31992。Bindley OCR l. 7408–7413、7446–7448。Mayor OCR l. 21892–21900。

### 36.4 Idem sumus imperatoribus qui et vicinis nostris … ex aequo … per deum tantus（小さな異読）
- 底本（Oehler）：Idem sumus imperatoribus qui et vicinis nostris. Male enim velle, male facere, male dicere, male cogitare de quoquam ex aequo vetamur. Quodcunque non licet in imperatorem, id nec in quemquam: quod in neminem, eo forsitan magis nec in ipsum qui per deum tantus est.
- ほかの読み：Idem は Aβ・E・F・G、エアフルト写本、Pamelius の写本。ほかは Iidem（校注 p. 249 の 14）。qui et を λ は ex ipso qui と読み、Havercamp は ex ipso quia に改めたいとする（校注 15）。imperatorem を G は principem（校注 16）。λ は in ipsum imperatorem qui（校注 17）。per deum を F とウィーン写本は praeter deum（「神に次いで」。校注 18）。
- 採る校訂者：Oehler は ex aequo を『スカプラへ』2 章の注に指す（注 p. 249 の c）。Mayor によると、その注で Oehler は ex pari、ex diverso、ex abundanti などの同じ形を挙げる（l. 21942–21946）。Bindley の本文は Iidem sumus（画像 0152）。Bindley は quod in neminem, eo forsitan を、だれにもしてはならないことなら、神の意志によってこれほど大きな人にはなおさらしてはならない、の意味で注する（l. 7450–7452）。Mayor は male cogitare などに、思い・言葉・行いの三つを並べる伝統（アテナゴラス 32 章、ミヌキウス 31 章、テオフィロスなど）を挙げる（l. 21908–21941）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。ex aequo は「同じように、分け隔てなく」。per deum tantus は「神によって、これほど大きな者」で、30 章以下の、皇帝は神によって立てられるという論を受ける。
- 確かめた資料：Oehler 画像 0279（本文、校注 14〜18、注 c）。OCR l. 31963–31968、31992–31994、32013–32014。Bindley 画像 0152、OCR l. 7413–7418、7450–7452。Mayor OCR l. 21902–21946。

### 37.1 Si inimicos, ut supra diximus, iubemur diligere … si laesi vicem referre prohibemur（聖書の言葉に近い言い方と、小さな異読）
- 底本（Oehler）：Si inimicos, ut supra diximus, iubemur diligere, quem habemus odisse? Item si laesi vicem referre prohibemur, ne de facto pares simus, quem possumus laedere? Nam de isto ipsi recognoscite.
- ほかの読み：habemus は A・B・D・F・G・λ・d・f、Pamelius の写本の四つ、ウィーン写本。E・a・b・c・e、オクスフォード、エアフルト写本は habebimus（校注 p. 249 の 1）。λ と Havercamp は Item si iidem laesi、G は Si item laesi（校注 2）。a・b・e は possimus（校注 3）。Bindley の本文は nec de facto pares simus（ne ではなく nec。画像 0152 で確かめた。Oehler の校注に出ない）。
- 採る校訂者：Mayor は ut supra diximus を 31 章（Mayor の本文 p. 98 ll. 15–16）に指し、敵を愛せよという教えについて『祈りについて』29 章、『スカプラへ』1 章（「わたしたちは敵をも愛し、迫害する者のために祈るよう命じられている」）、エウセビオス、アテナゴラス 11〜12 章などを挙げる（l. 21952–21966）。habemus odisse の habere を Mayor は 22 章の habent … sapere、36 章の初めと並べ、habere＋不定詞の用例を挙げる（l. 21968–21982）。Bindley は 36 章の habet exhiberi の注で、ここの habemus odisse の habere を posse（できる）の意味とする（l. 7439–7444）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。inimicos … diligere はマタイ五・四四（口語訳「敵を愛し」）、laesi vicem referre と 37.3 の malum malo はローマ一二・一七、第一テサロニケ五・一五、第一ペテロ三・九（口語訳「悪をもって悪に報いず」）に近いが、原文は直接の引用ではないので『』と出典は付けない。31 章の既訳で同じ教えをどう訳したかに揃える。quem habemus odisse は「だれを憎むことができるでしょうか」。ne de facto pares simus は「（仕返しの）行いによって、（害した者と）同じにならないように」。
- 確かめた資料：Oehler 画像 0279（本文、校注 1〜3）。OCR l. 31970–31973、31999–32000。Bindley 画像 0152（`pct:0,40,100,15`）、OCR l. 7422–7428、7439–7444。Mayor OCR l. 21952–21982。`node tools/bible.js Matt.5.44 Rom.12.17 1Thess.5.15 1Pet.3.9`。

### 37.2 praeteritis vobis suo iure … Ipsis Bacchanalium furiis nec mortuis parcunt（小さな異読と λ の別の本文）
- 底本（Oehler）：Quotiens enim in Christianos desaevitis, partim animis propriis, partim legibus obsequentes? Quotiens etiam praeteritis vobis suo iure nos inimicum vulgus invadit lapidibus et incendiis? Ipsis Bacchanalium furiis nec mortuis parcunt Christianis, quin illos de requie sepulturae, de asylo quodam mortis, iam alios, iam nec totos avellant, dissecent, distrahant.
- ほかの読み：Quotiens は D・E・F・G・d、ウィーン写本、エアフルト写本。(A B)・a・b・c・e・f は Quoties（校注 p. 249 の 4）。F とウィーン写本は praeteritis vobis sui iure、G は praeteritis vobis sui vice、c は praeteritos a vobis suo iure（校注 5）。λ は lapidibus et incendiis を欠く（校注 6）。a は Ipsi（校注 7）。λ は ne mortuis quidem parcunt Christianis, quin illos de reliquiis sepulturae iam alios, iam nec totos avellant, dissipent, distrahant（「葬りの残りから」。de asylo quodam mortis を欠き、dissecent を dissipent〔まき散らす〕とする。校注 8）。
- 採る校訂者：Bindley の本文は Oehler と同じ（OCR l. 7461–7466）。Bindley は praeteritis vobis を「あなたがたの許しや指図なしに」と注し、de requie sepulturae … distrahant にエウセビオス『教会史』5 巻 1 章の終わり（リヨンの殉教者の遺体）を挙げる（l. 7481–7484）。Mayor は vulgus に『スカプラへ』3 章（「墓地はあってはならない」と叫んだ民衆）、lapidibus et incendiis に 48 章などを、requie sepulturae に死体を掘り出す例を挙げる（l. 21998–22024）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。praeteritis vobis は「あなたがたを差し置いて」で、suo iure は「自分の権利であるかのように、勝手に」。Bacchanalium furiis は「バックス祭の狂乱で」の意味で、本の名前の表の「バックス」に揃えられる（呼び名はメインが決める）。
- 確かめた資料：Oehler 画像 0279（本文、校注 4〜8）。OCR l. 31973–31983、32001–32004。Bindley OCR l. 7461–7466、7481–7484。Mayor OCR l. 21998–22024。

### 37.3 Quid tamen de tam conspiratis umquam denotatis … pro iniuria repensatum（denotatis は動詞か分詞か、Oehler の訂正 repensatum）
- 底本（Oehler）：Quid tamen de tam conspiratis umquam denotatis, de tam animatis ad mortem usque pro iniuria repensatum, quando vel una nox pauculis faculis largiter ultionis posset operari, si malum malo dispungi penes nos liceret?
- ほかの読み：de tam conspiratis umquam denotatis は Aφ・B・D・E・b・c・d・e、エアフルト写本、オクスフォード、ゴルツェ写本。(Aβ)・F とウィーン写本は de tam conspiratis umquam denotastis（完了の二人称複数「あなたがたは指摘したか」）。f は unquam denotastis. de tam conspiratis、a は de tam conspiratis tamque denotatis（校注 p. 249 の 9）。repensatum は F・f と Fulvius Ursinus。ほかの写本は repensatis（校注 p. 250 の 10）。
- 採る校訂者：Oehler は注 p. 250 の a で、repensatum は Fulvius Ursinus と Rigaltius とともにエアランゲン写本（F）に拠って改めたもので、よい写本の repensatis は repensati から生じたとみる。続けて文意を言い換え、「わたしたちの教えの絆でこれほど固く結ばれ、あなたがたが『共謀者』と呼ぶほどの者たち、キリストのために死ぬことも拒まないほど奮い立った者たちについて、加えられた不正の仕返しとして報いられたことを、あなたがたはいつ指摘したか」とする。つまり denotatis を「指摘する」の二人称複数の動詞に取る（de tam conspiratis と de tam animatis が同格に並ぶ）。Bindley の本文は f に近い Quid tamen unquam denotastis de tam conspiratis, de tam animatis ad mortem usque pro injuria repensatum（OCR l. 7466–7468）。Mayor も p. 148 の一覧で「p. 106 l. 31 denotastis (?)」とする。Mayor は repensatum に『偶像崇拝について』8 章などの用例を挙げる（l. 22026–22030）。
- 読者への影響：中 — denotatis を「名指しされた（者たち）」の分詞に取ると、de tam conspiratis … denotatis が一続きの名詞句になり、問いの動詞がなくなる。Oehler の取り方では、問いは「あなたがたは、いつ…を指摘したか」になる。どちらでも「キリスト者が仕返しをしたことはない」という意味は変わらない。
- 訳での扱い：訳注は付けない。Oehler の注 a に従い、denotatis を二人称複数の動詞として訳す（現在の形だが、umquam とともに「いつ…を指摘できたか」の意味）。denotare の訳は訳語表で文脈ごとに分ける語なので、メインが決める（「指摘する」「名指す」など。「言いとがめる」は使わない）。conspiratis は注 a の言い換えの「共謀者と呼ばれるほど結ばれた」の皮肉を残す。repensatum は F の読みでもあるので、`// ` メモは不要とみる（写本の多くは repensatis）。
- 確かめた資料：Oehler 画像 0279（本文、校注 9）、0280（本文、校注 10、注 a）。OCR l. 31983–31984、32005–32008、32027、32037、32048–32062。Bindley OCR l. 7466–7468。Mayor OCR l. 22026–22030。Mayor p. 148（0172）。

### 37.3 largiter ultionis … si malum malo dispungi penes nos liceret（語の意味と小さな異読）
- 底本（Oehler）：quando vel una nox pauculis faculis largiter ultionis posset operari, si malum malo dispungi penes nos liceret?
- ほかの読み：largiter を G は largitur、a〜d は largitatem（校注 p. 250 の 11）。Mayor は p. 148 の一覧で「p. 108 l. 3 penes nos dispungi (?)」とし、語順の違う読みを好む。
- 採る校訂者：Oehler は largiter＋属格を「たっぷりの」の意味とし、プラウトゥス『綱曳き』の largiter auri et argenti、largiter mercedis、アプレイウス『弁明』28 章の largiter aquae を挙げる（注 p. 250 の b）。dispungi は「報い合わされる、清算される」（repensari）の意味とし、本来は受け取ったものと与えたものを突き合わせる語で、そこから「吟味する」「決着をつける」の意味にもなる、と 44 章、45 章、18 章、『忍耐について』8 章などの用例で示す（注 c）。Bindley は malum malo dispungi を 18 章の注に指す（l. 7486）。Mayor は facula に、ネロの火事と、ラクタンティウス『迫害者の死』14 章（宮殿に火を放ってキリスト者に罪を着せた）を挙げる（l. 22032–22054）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。vel una nox pauculis faculis largiter ultionis posset operari は「ひと晩と、わずかな松明があれば、たっぷり復讐できる」の意味。事実に反する仮定（posset、liceret）は本の AGENTS.md のとおり現在の推量で訳す。malum malo dispungi は注 c に従い「悪を悪で清算する、悪に悪で報いる」。
- 確かめた資料：Oehler 画像 0280（本文、校注 11、注 b・c）。OCR l. 32027–32029、32037–32038、32063–32115。Bindley OCR l. 7486。Mayor OCR l. 22032–22061。Mayor p. 148（0172）。

### 37.4 divina secta … Si enim et hostes exertos, non tantum vindices occultos agere vellemus（小さな異読）
- 底本（Oehler）：Sed absit ut aut igni humano vindicetur divina secta aut doleat pati in quo probatur. Si enim et hostes exertos, non tantum vindices occultos agere vellemus, deesset nobis vis numerorum et copiarum?
- ほかの読み：divina secta を λ と Havercamp は divinitas sectae（「一派の神性」。校注 p. 250 の 12）。et を e と Havercamp は欠く（校注 13）。exertos を G・c は exortes、D は extractos、a・b は extraneos（校注 14）。vindices は B・F・G・a〜f、ウィーン写本。A・E とエアフルト写本は iudices（校注 15）。
- 採る校訂者：Oehler は vis numerorum の numeri を兵の部隊の意味とし、Heraldus の注（この時代の用法として当たり前で、ギリシア人の ἀριθμοί も同じ）を引く（注 p. 250 の d）。Bindley の本文は Si enim hostes exsertos（et がない。OCR l. 7471–7472）。Bindley は hostes exsertos … agere を 10 章の注（agere＝役を演じる）に指す（l. 7488）。Mayor は exsertos を「公然の、あからさまな」とし、『洗礼について』12 章などの用例を挙げ、Si enim 以下にキプリアヌス『デメトリアヌスへ』17 章（わたしたちの民は多いのに、だれも捕らえられても手向かわず、復讐もしない）を並べる（l. 22063–22122）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。hostes exertos … agere は「公然の敵として振る舞う」、vindices occultos は「ひそかに復讐する者」。numeri は注 d に従い「部隊」の意味で、vis numerorum et copiarum は「兵の数と軍勢の力」。in quo probatur は「それによって（この一派が）試され、認められるもの」。
- 確かめた資料：Oehler 画像 0280（本文、校注 12〜15、注 d）。OCR l. 32029–32032、32038–32044、32117–32125。Bindley OCR l. 7470–7473、7488。Mayor OCR l. 22063–22122。

### 37.5 Plures nimirum Mauri et Marcomanni ipsique Parthi（民族の名）
- 底本（Oehler）：Plures nimirum Mauri et Marcomanni ipsique Parthi, vel quantaecunque unius tamen loci et suorum finium gentes quam totius orbis.
- ほかの読み：本文の異読はない。
- 採る校訂者：注 p. 250 の e に引く Heraldus は、これらの民族の名を挙げたのは、最近ローマの支配を脅かしたからだとし、マウリ人がマルクス帝の治世にヒスパニアを荒らしたこと、マルコマンニ戦争がマルクス帝によって大きな苦労と危険のうちに終えられたこと、マルクス帝の兄弟ウェルスがパルティアに向かい、将軍たちに戦わせて皇帝の称号を得たこと、セウェルスのパルティア遠征が最近だったことを挙げる。Bindley はマウレタニアが紀元 42 年にクラウディウスによって属州とされたこと、パルティアがローマの競争相手だったことを注する（OCR l. 7490–7494）。Mayor も、パルティアをローマの競争相手としてタキトゥスなどを挙げ、Geffcken の「最近の東方遠征、おそらくセウェルスのパルティア遠征」を引く（l. 22123–22133）。
- 読者への影響：小 — 名前の表記の問題。
- 訳での扱い：訳注は付けない。名前の表に Mauri、Marcomanni、Parthi がない。『オクタウィウス』（AGENTS.md の名前の表と本文）は「マウリ人」「パルティア人」と書く。Marcomanni は「マルコマンニ人」とできる（表記はメインが決める）。totius orbis の後に gentes を補い、「一つの土地と自分たちの国境の中の民族のほうが、全世界に広がる民よりも多いとでもいうのか」の皮肉で訳す。
- 確かめた資料：Oehler 画像 0280（本文、注 e）。OCR l. 32032–32034、32127–32138。Bindley OCR l. 7473–7475、7490–7494。Mayor OCR l. 22123–22133。`books/octavius/AGENTS.md`。

### 37.5 Hesterni sumus（「わたしたちは昨日の者」と「わたしたちはよそ者」）
- 底本（Oehler）：Hesterni sumus, et vestra omnia implevimus, urbes, insulas, castella, municipia, conciliabula, castra ipsa, tribus, decurias, palatium, senatum, forum; sola vobis reliquimus templa.
- ほかの読み：Hesterni は A・B・e・f、Bongars の写本。D・E・F・G・λ・a・b・c・d、エアフルト写本、オクスフォードは Externi（「よそ者、外から来た者」。校注 p. 250 の 16）。et vestra omnia を λ は et orbem iam et vestra omnia（「すでに世界も、あなたがたのものもすべて」。校注 17）。reliquimus は A・B・D・λ と Havercamp、E・F・G・a〜f、エアフルト写本、ウィーン写本は relinquimus（校注 p. 251 の 18）。
- 採る校訂者：Oehler は Hesterni を採る。注 p. 250 の f によると、Pamelius は Externi と読み、Baronius も、キリスト者はユダヤという一つの地から出たからとして、これに従った（La Cerda の注）。Heraldus は、Hesterni がわれわれの写本の最も正しい読みで、Pamelius が通行の読みを説明しようとしたのはまったくおかしいとし、Hesterni は「昨日生まれた者」の意味で、ギリシア語の「昨日、一昨日」（χθὲς καὶ πρῴην）に当たると、マルティアリス 2 巻 29 番の hesterna を引く（注 f、p. 251 の上に続く）。Oehler は、写字生が externus と hesternus を取り違えることについて Drakenborch などを指す（注 f）。Bindley の本文も Hesterni sumus et（OCR l. 7476）で、1 章の注と、et の強い意味（「それなのに」）について 2 章の注を指す（l. 7496–7497）。Mayor も Hesterni として、21 章の初め、『諸国民へ』1 巻 8 章（キリスト者でない民族はない）、『ユダヤ人反駁』7 章の終わり、新しさについてオリゲネス『ケルソス駁論』などを挙げ、et を「それなのに」（and yet）とし 2 章の用例を挙げる（l. 22135–22180）。
- 読者への影響：中 — Hesterni なら「わたしたちは昨日現れたばかりなのに、すべてを満たした」と、短い間の広がりを言う。Externi なら「わたしたちはよそ者なのに、あなたがたのところをすべて満たした」となり、言うことが変わる。写本では Externi のほうが数が多い。
- 訳での扱い：底本の Hesterni で、et を「それなのに」と受けて訳す。訳注を付けるなら案は「写本には『わたしたちはよそ者だ』と読むものもある。」（25 字）。読みが変わると文意が変わるので付ける候補になるが、Oehler・Bindley・Mayor はいずれも Hesterni を採り、注の要否はメインが決める。
- 確かめた資料：Oehler 画像 0280（本文、校注 16・17、注 f の初め）、0281（本文、校注 18、注 f の続き）。OCR l. 32034、32095–32098、32140–32146、32151–32153、32171、32194–32202。Bindley OCR l. 7476–7478、7496–7497。Mayor OCR l. 22135–22180。

### 37.5 urbes, insulas, castella, municipia, conciliabula, castra ipsa, tribus, decurias, palatium, senatum, forum（並べられた場所と集団）
- 底本（Oehler）：上の項と同じ。
- ほかの読み：本文の異読はない。λ と Havercamp は templa の後に Possumus dinumerare exercitus vestros: unius provinciae plures erunt.（「あなたがたの軍勢を数えることもできる。一つの属州のほうが多いだろう」）を加える（校注 p. 251 の 19）。
- 採る校訂者：Oehler は λ の一文を本文に入れない。Bindley はこの文を本文に刷り、フルダ写本だけにある文で、erunt には Christiani を補う、と注する（OCR l. 7479–7480、7510–7511）。Bindley は castella を 1 章の注と同じく「村」とし、この列挙には誇張があり、キリスト者が陣営や宮殿や元老院を「満たした」とは言えない、と注する（l. 7499–7506）。Mayor は castella、municipia、conciliabula の並びにルブリウス法などの法文（oppidum、municipium、colonia、praefectura、vicus、conciliabulum、castellum）を、castra にキリスト者の兵士の例を、palatium にエイレナイオスを、senatum に元老院のキリスト者の例が 4 世紀半ばまで見えないことを挙げる（l. 22182–22279）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。λ の一文は底本にないので訳さない。insulas は 1:8 の既訳（「島」）に揃えられる。castella は 1:8 の既訳と同じく「村」。tribus（区）、decurias（十人組、組合）、conciliabula（集会所、市場町）は、なじみのない語なので訳し方をメインが決める。sola vobis reliquimus templa は「神殿だけを、あなたがたに残した」。
- 確かめた資料：Oehler 画像 0281（本文、校注 19）。OCR l. 32151–32153、32171–32173。Bindley OCR l. 7476–7480、7499–7511。Mayor OCR l. 22182–22279。`books/tertullian-apology/src/chapter-01/both.md`（1:8）。

### 37.6 Cui bello non idonei, non prompti fuissemus … si non apud istam disciplinam magis occidi liceret quam occidere?（小さな異読）
- 底本（Oehler）：Cui bello non idonei, non prompti fuissemus, etiam inpares copiis, qui tam libenter trucidamur, si non apud istam disciplinam magis occidi liceret quam occidere? Potuimus et inermes nec rebelles, sed tantummodo discordes solius divortii invidia adversus vos dimicasse.
- ほかの読み：apud istam を D は ad istam（校注 p. 251 の 20）。
- 採る校訂者：Bindley の本文は Oehler と同じ（OCR l. 7518–7522）。Mayor は occidi … quam occidere に、アウグスティヌス書簡 100 番（彼らを殺させるより殺されるほうを選ぶ）、ラクタンティウス 5 巻 20 章（宗教は殺すことによってでなく死ぬことによって守られる）、プラトン『ゴルギアス』（不正を行うより受けるほうを選ぶ）などを挙げる（l. 22291–22326）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。fuissemus は過去完了の事実に反する仮定なので、本の AGENTS.md のとおり過去の形で訳す（「どんな戦にも…向かなかったでしょうか」）。liceret は現在の推量。Potuimus … dimicasse は「戦うこともできた」で、solius divortii invidia は「別れていくことだけで生じる憎しみによって」。
- 確かめた資料：Oehler 画像 0281（本文、校注 20）。OCR l. 32153–32157、32173。Bindley OCR l. 7518–7522。Mayor OCR l. 22291–22326。

### 37.7 abrupissemus … suffudisset utique dominationem vestram … destitutione punisset（語の意味と λ の補い pudor）
- 底本（Oehler）：Si enim tanta vis hominum in aliquem orbis remoti sinum abrupissemus a vobis, suffudisset utique dominationem vestram tot qualiumcumque civium amissio, immo etiam et ipsa destitutione punisset.
- ほかの読み：λ は in aliquem angulum orbis remotissimum（「世界の最も遠い片隅へ」。校注 p. 251 の 21）。D は suffudisset itaque、λ は suffudisset pudor utique、Havercamp は suffudisset pudore utique（校注 22）。dominationem を D・G・a・b・c は damnationem（校注 23）。qualiumcumque を A・B は qualicumque（校注 24）。civium amissio は A・B・F・G、ウィーン写本（Aβ は amisso）。D・E・a〜f、エアフルト写本は amissio civium（校注 25）。destitutione を c は institutione、F とウィーン写本は discutione（校注 26）。
- 採る校訂者：Oehler は abrupissemus を、abrumpere を再帰の意味（自分を引き離す）で使う例とし、『ウァレンティノス派駁論』4 章の de ecclesia … abrupit を挙げる（注 p. 251 の g）。suffudisset は「（顔を）赤らめさせた」（rubore suffudisset）とし、『さそり』10 章の注に例を挙げると言う（注 h）。Bindley の本文は suffudisset [pudore] utique dominationem vestram tot qualiumcunque amissio civium（OCR l. 7524–7525）。Mayor は abrupissemus に『貞潔について』7 章などを挙げ、ケルソスもキリスト者が身を引くことを想定したとし、suffudisset を「恥じ入らせる」として 4 章の suffundere の用例を挙げる（l. 22328–22342）。
- 読者への影響：小 — λ の pudor は、底本で省かれた「恥」を言葉にしたもので、意味は同じ。
- 訳での扱い：訳注は付けない。abrupissemus は注 g に従い「（わたしたちが）離れ去っていたら」。suffudisset は注 h に従い「（あなたがたの支配を）恥じ入らせた」。異読にだけある「恥（pudor）」の語を足さず、動詞の意味で恥じ入らせる形にする（本の AGENTS.md の「異読にだけある語を足さない」）。destitutione punisset は「見捨てられたことそのもので罰した」。
- 確かめた資料：Oehler 画像 0281（本文、校注 21〜26、注 g・h）。OCR l. 32157–32160、32173–32177、32204–32212。Bindley OCR l. 7522–7526。Mayor OCR l. 22328–22342。

### 37.8 quasi mortui orbis. Quaesissetis quibus imperaretis（区切りと、urbes の読み）
- 底本（Oehler）：Procul dubio expavissetis ad solitudinem vestram, ad silentium rerum et stuporem quendam quasi mortui orbis. Quaesissetis quibus imperaretis.
- ほかの読み：expavissetis を G は exprobavissetis（校注 p. 251 の 27）。vestram を a・b は nostram。λ は tot qualiumcumque から ad solitudinem vestram までを欠く（校注 28）。rerum を D・a・b は reorum（校注 29）。mortui orbis. Quaesissetis は λ・f と Havercamp。A・B・F・G とウィーン写本は mortui urbis. quaesissetis。A と Bongars の写本は（Heraldus によると）mortui. urbes quaesissetis で、c もそう読む。D・E・a・b・d・e、エアフルト写本、オクスフォード、ヴァティカンの写本の一つは mortuae urbis. quaesissetis（校注 30）。imperaretis は A・B・E・F・G・λ・c・f、ウィーン写本、エアフルト写本。オクスフォードは impetraretis、D・a・b・e は in ea imperaretis、d はヴァティカンの写本の一つから in ea imperassetis（校注 31）。
- 採る校訂者：Oehler は λ・f の読みを採る。注 p. 251 の k に引く Heraldus は、自分の写本の quasi mortui, urbes quaesissetis（「死んだも同然の（世界）で、あなたがたは町々を探し求めたでしょう」）のほうを好む。Oehler は expavissetis ad solitudinem vestram を『殉教者たちへ』3 章の注と『祈りについて』22 章に指す（注 i）。Bindley の本文は quasi mortui orbis; quaesissetis quibus imperaretis（OCR l. 7528–7529）。Mayor は expavissetis ad に 39 章、1 章の初め、『殉教者たちへ』3 章など（expavescere ad「〜におびえる」）を、stuporem を「麻痺」とし、quaesissetis に Havercamp が引くフロルスの「支配する相手がいるように、だれかが生き残らねばならない」を挙げる（l. 22344–22374）。
- 読者への影響：小 — どの読みでも、キリスト者が去ればローマは人のいない死んだ世界のようになる、という意味は同じ。
- 訳での扱い：訳注は付けない。expavissetis、quaesissetis は過去完了の事実に反する仮定なので過去の形で訳す（「おびえたでしょう」「探し求めたでしょう」）。expavescere ad は Mayor の用例のとおり「〜におびえる」。Quaesissetis quibus imperaretis は「だれを支配すればよいのかと、探し回ったでしょう」。
- 確かめた資料：Oehler 画像 0281（本文、校注 27〜31、注 i・k）。OCR l. 32160–32163、32177–32183、32214–32221。Bindley OCR l. 7526–7530。Mayor OCR l. 22344–22374。

### 37.8 paene omnium civitatium paene omnes cives Christianos habendo（Oehler の推定 civitatium）
- 底本（Oehler）：Plures hostes quam cives vobis remansissent. Nunc enim pauciores hostes habetis prae multitudine Christianorum, paene omnium civitatium paene omnes cives Christianos habendo.
- ほかの読み：civitatium は Oehler 自身の推定（ego）。Havercamp は civitatum。Oehler の知る写本・刊本はすべて civium で、f にはこの paene omnium から 37.9 の erroris humani までの語がない（校注 p. 251 の 32）。omnes cives を Aβ は omnis civis（校注 33）。habendo は D・E・a・b・d・e、エアフルト写本、オクスフォード、Pamelius の写本。λ は hostes habendo、A・B・G とウィーン写本は habendos、F は habentes。c は paene omnes cives Christianos habendo を欠く（校注 34）。
- 採る校訂者：Bindley の本文は Havercamp と同じ paene omnium civitatum paene omnes cives Christianos habendo（OCR l. 7531–7532）。
- 読者への影響：小 — 写本の civium では「ほとんどすべての市民の、ほとんどすべての市民」となって意味が通らない（この点はこの一覧の観察）。推定の civitatium（civitatum の古い形）でも Havercamp の civitatum でも、「ほとんどすべての町の、ほとんどすべての市民がキリスト者であることで」の意味になる。
- 訳での扱い：訳注は付けない。底本の civitatium で訳す。立体で刷られた Oehler 自身の推定なので、本の AGENTS.md の 21.3 の Dudum と同じく、`// ` メモに推定であることと写本の civium を書く。Nunc enim は前の文の理由（「いまでさえ…からです」）として enim を残す。
- 確かめた資料：Oehler 画像 0281（本文、校注 32〜34）。OCR l. 32163–32165、32183–32187。Bindley OCR l. 7530–7532。

### 37.9–37.10 hostes generis humani potius quam erroris humani（人類の敵と、人間の迷いの敵）
- 底本（Oehler）：37.9 Sed hostes maluistis vocare generis humani potius quam erroris humani. 37.10 … quia sumus plane, non generis humani tamen, sed potius erroris.
- ほかの読み：Sed hostes は D・E・a〜e、Havercamp、エアフルト写本、Pamelius の写本。A・B・F・G とウィーン写本は et hostes、λ は Hostes（校注 p. 251 の 35）。maluistis を λ は maluissetis（校注 36）。generis humani を F は humani generis、B とウィーン写本は generis humani generis（校注 37）。potius quam erroris humani は A・B・F・G・λ・d・e、ウィーン写本。D・E・a・b・c・f と Havercamp はこの語を欠く（校注 38）。37.10 の quia は A・B・D・E・F・G・a・b・e、エアフルト写本、オクスフォード、ウィーン写本。λ・c・d・f と Havercamp は qui（校注 p. 252 の 44）。humani tamen, sed potius erroris は A・B・F・G・c〜f、ウィーン写本。Bongars の写本は humani sed potius tamen erroris、D・E は humani tamen sed potius tamen erroris、λ は humani hostes, sed potius erroris、エアフルト写本は humani tamen sed potius tamen hostes erroris（校注 45）。
- 採る校訂者：Bindley の本文は Sed hostes maluistis vocare generis humani.（potius quam erroris humani がない）と、37.10 の qui sumus plane, non generis humani tamen, sed potius erroris（OCR l. 7532–7534、7542–7543）。Mayor は hostes に 2 章、32 章、35 章、アルノビウス 1 巻 1 章、タキトゥス『年代記』15 巻 44 章（キリスト者は放火の罪よりも人類への憎しみ〔odium humani generis〕で罪に定められた）を挙げる（l. 22375–22383）。Mayor は plane … tamen に 22 章の et sunt plane malorum nonnumquam, bonorum tamen numquam を並べる（l. 22435–22437）。
- 読者への影響：中 — 「人類の敵」は、タキトゥスが伝えるキリスト者への非難（人類への憎しみ）を受けた言い方で、著者は「人類の敵ではなく、人間の迷いの敵だ」と言い返している。37.9 の potius quam erroris humani を欠く写本では、この言葉遊びが 37.10 にだけ出る。
- 訳での扱い：訳注は付けない。generis humani と erroris humani の対（「人類の敵」と「人間の迷いの敵」）が、37.9 と 37.10 の両方で分かるように、同じ語で揃えて訳す。37.10 の quia sumus plane, … tamen … は、22 章の plane … tamen と同じく「確かに敵ではある。ただし人類のではなく、むしろ迷いの」の形。
- 確かめた資料：Oehler 画像 0281（本文、校注 35〜38）、0282（本文、校注 44・45）。OCR l. 32166–32167、32187–32190、32236、32243–32248。Bindley OCR l. 7532–7534、7542–7543。Mayor OCR l. 22375–22383、22435–22437。

### 37.9 Quis autem vos ab illis occultis … hostibus raperet, a daemoniorum incursibus dico … sine praemio, sine mercede depellimus?（悪霊払いと、マタイ一〇・八）
- 底本（Oehler）：Quis autem vos ab illis occultis et usquequaque vastantibus mentes et valitudines vestras hostibus raperet, a daemoniorum incursibus dico, quae de vobis sine praemio, sine mercede depellimus?
- ほかの読み：F とウィーン写本は occultis illis（校注 p. 251 の 39）。raperet を c は eripiet（校注 40）。F とウィーン写本は sine praemio を欠く（校注 p. 252 の 41）。
- 採る校訂者：Oehler は incursibus を『魂について』58 章（ダイモンの働きで早すぎる、むごい死が起こり、人々はそれを「襲い」〔incursus〕のせいにする）に指す（注 p. 252 の l）。注 m に引く Heraldus は、悪霊払いのことは教会の書き手に多く見え、ここでは「代価なしに」に注意せよとし、エウセビオス『教会史』5 巻 7 章に引くエイレナイオスのギリシア語（教会が神から受けた賜物は数えきれず、イエス・キリストの名によって毎日異邦人のために行い、だれも欺かず、金も取らない。「ただで神から受けたのだから、ただで仕える」）を引く。Bindley は daemoniorum incursibus に 23・32・43 章を挙げる（OCR l. 7551）。Mayor も 23・27・32・43 章、ユスティノス『第二弁明』6 章、ラクタンティウス、『魂について』57 章などを挙げ、sine mercede にエイレナイオスを指す（l. 22389–22425）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。daemonia は訳語表どおり「ダイモン」。sine praemio, sine mercede はマタイ一〇・八（口語訳「ただで受けたのだから、ただで与えるがよい」）を思わせるが、引用ではないので『』と出典は付けない。hostibus は ab illis occultis … hostibus の一続きで、「あの隠れた、いたるところで心と体を荒らす敵ども」。
- 確かめた資料：Oehler 画像 0281（本文、校注 39・40）、0282（本文、校注 41、注 l・m）。OCR l. 32167–32168、32190–32191、32231–32232、32242、32262–32286。Bindley OCR l. 7534–7537、7551。Mayor OCR l. 22389–22425。`node tools/bible.js Matt.10.8`。

### 37.10 vacua exinde possessio inmundis spiritibus pateret … Porro（空いた住まいと、マタイ一二・四四）
- 底本（Oehler）：Suffecisset hoc solum nostrae ultioni, quod vacua exinde possessio inmundis spiritibus pateret. Porro nec tanti praesidii conpensationem cogitantes non modo non molestum vobis genus, verum etiam necessarium hostes iudicare maluistis, …
- ほかの読み：pateret を λ と Havercamp は pateretis（「あなたがたが、空いた持ち物として汚れた霊にさらされる」。校注 p. 252 の 42）。cogitantes を λ と Havercamp は recogitantes（校注 43）。
- 採る校訂者：Bindley の本文は Havercamp の pateretis（OCR l. 7540）。Mayor は vacua possessio を、争いのない、空いた持ち物とし、英訳聖書のマタイ一二・四四の言い回し（「あいていて、そうじがしてあり、飾りつけがしてある」）とミルトンを並べる（l. 22427–22429）。Oehler は Porro をテルトゥリアヌスに多い用法の箇所に指す（注 p. 252 の n）。Oehler は別の書の注で、テルトゥリアヌスの porro は数えきれない箇所で atquin、atenim（しかし）の代わりに使われるとし、例の一つにこの 37 章の Porro nec tanti を挙げる（OCR l. 53649–53661）。Mayor は compensationem に『諸国民へ』1 巻 7 章などを挙げる（l. 22431–22433）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。vacua possessio … pateret は「（キリスト者が去って）空いた持ち物が、汚れた霊に明け渡される」の意味で、事実に反する仮定（suffecisset、pateret）として訳す。マタイ一二・四三〜四五（口語訳「その家はあいていて」）の汚れた霊の話を思わせるが、引用ではないので『』と出典は付けない。inmundis spiritibus は訳語表どおり「汚れた霊」。Porro は Oehler の注に従い逆接（「しかし」）で受け、「さらに」にしない。
- 確かめた資料：Oehler 画像 0282（本文、校注 42・43、注 n）。OCR l. 32232–32235、32242–32243、32289–32291、53649–53661。Bindley OCR l. 7537–7543。Mayor OCR l. 22427–22433。`node tools/bible.js Matt.12.43-45 Luke.11.24-26`。

### 38.1 Proinde nec paulo lenius inter licitas factiones sectam istam deputari oportebat … ?（問いか否か、licitas と illicitas）
- 底本（Oehler）：Proinde nec paulo lenius inter licitas factiones sectam istam deputari oportebat, a qua nihil tale committitur quale de inlicitis factionibus timeri solet?（問いで終える）
- ほかの読み：nec paulo lenius を a・b とヴァティカンの写本の一つは nec paulo levius、F・λ とウィーン写本は ne paulo lenius（校注 p. 252 の 1）。licitas を λ は illicitas とし、Desiderius Heraldus がよしとした（校注 2）。λ は factionibus praecavetur. Nisi（「…が警戒される」。校注 3）。
- 採る校訂者：注 p. 252 の a に引く Heraldus は、ここで著者が別の非難の項目に移るとし、キリスト者に少し公平で、数々の罪の言い立てを偽りと認める人々も、党派・同好会・許されない結社を禁じる法と皇帝の布告にキリスト者が背いていると考えていた、と説明する。そのうえで文意は inter illicitas factiones を求めるとし、「この一派を党派禁止の布告で禁じ、取り締まるべきだと考える人々の考えは穏やかに見えるが、それを許されない党派の中に数えている点で誤っている」と言い換える。Oehler は inter licitas factiones の語を改めず、文を疑問符で閉じるべきだとし、ドイツ語で「それなら、もう少し穏やかに、この一派を許された結社の中に数えるべきではなかったか」と訳してみせる（注 a）。Bindley の本文は Proinde, nec paulo lenius, inter licitas factiones … timeri solet.（句点で終える。OCR l. 7548–7549、7565）。Bindley は、キリスト教は許されない宗教であるうえに、トラヤヌスの布告のもとで結社（factio）として罪に定められていたとし、小プリニウス書簡 10 巻 34、93、96 番などを挙げ、著者はキリスト者の団体を、法で認められた組合（collegia legitima）の中に加えるよう求めている、と注する。factio の語は異教の反対者の言い方を受けたもので、ミヌキウス 8 章の「許されない、望みのない党派の者たち」などを挙げる（l. 7553–7583）。Mayor も inlicitis factionibus に 21 章の初め、ミヌキウス 8 章 3 節、オリゲネス『ケルソス駁論』1 巻 1 章を挙げる（l. 22443–22447）。
- 読者への影響：中 — Oehler の取り方では「許された結社の中に数えるべきではなかったか」という問いになる。λ の illicitas なら「許されない結社の中に数えるべきではなかった」となるが、言いたいこと（キリスト者を許されない結社と扱うのは不当だ）は同じ。
- 訳での扱い：訳注は付けない。底本の問いの形で、注 a のドイツ語訳のとおり「それなら、この一派は、少しは穏やかに、許された結社の中に数えられるべきではなかったでしょうか」の旨で訳す。oportebat は本の AGENTS.md の「当然そうあるべきことを言う直説法の未完了過去」に当たり、「〜はずではありませんか」で訳せる。factio の訳（「結社」「党派」）は、39.1 の Christianae factionis と揃えるので、メインが決める（「メインで決めること」）。
- 確かめた資料：Oehler 画像 0282（本文、校注 1〜3、注 a）。OCR l. 32238–32240、32258、32294–32351。Bindley OCR l. 7548–7583。Mayor OCR l. 22443–22447。

### 38.1 prohibendarum factionum causa de providentia constat modestiae publicae … in quaestu habere coepissent（小さな異読）
- 底本（Oehler）：Nisi fallor enim, prohibendarum factionum causa de providentia constat modestiae publicae, ne civitas in partes scinderetur, quae res facile comitia, concilia, curias, contiones, spectacula etiam aemulis studiorum conpulsationibus inquietaret, cum iam et in quaestu habere coepissent venalem et mercenariam homines violentiae suae operam.
- ほかの読み：modestiae publicae を F・G とウィーン写本は modestia publice、D・a・b・c・d は ac modestia publica（D は ac を欠く。校注 p. 252 の 4）。quae res を λ は qua facile（校注 p. 253 の 5）。inquietaret を λ は inquietarent（校注 6）。λ は homines を欠く（校注 7）。
- 採る校訂者：Oehler は「公の秩序への配慮が、党派を禁じる理由であり、町が党派に割れないよう用心するものだった」と言い換える（注 p. 252 の b）。spectacula etiam aemulis studiorum conpulsationibus inquietaret には、リプシウス『サトゥルナリア』2 巻 24 章を挙げ、aemulus と aemulatio の語は『迫害における逃亡について』2 章の注、conpulsatio は 21 章の注に指す（注 p. 253 の c）。Bindley の本文は Oehler と同じ（OCR l. 7565–7571）。Bindley は、競技場の党派がローマでしばしば危険な騒ぎを起こし、532 年のコンスタンティノポリスの青組と緑組のような流血に至ったと注する（l. 7585–7589）。Mayor は conpulsationibus を 21 章にも出る珍しい語とし、in quaestu esse をクインティリアヌスに見る（l. 22449–22452）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。aemulis studiorum conpulsationibus は「張り合う贔屓どうしのぶつかり合い」の意味。aemulus は訳語表で神に張り合うダイモンの働きに「敵対する」を当てるが、ここは観客の党派の張り合いなので、文脈で訳す（訳語表の aemulatio の「ねたみ」「敵意」とも違う）。comitia、concilia、curias、contiones の訳（民会、集会、議会、演説の集まり）はメインが決める。
- 確かめた資料：Oehler 画像 0282（本文、校注 4、注 b）、0283（本文、校注 5〜7、注 c）。OCR l. 32240–32241、32258–32259、32320、32353–32365、32376、32387、32395–32400。Bindley OCR l. 7565–7571、7585–7589。Mayor OCR l. 22449–22452。

### 38.2 At enim nobis ab omni gloriae et dignitatis ardore frigentibus nulla est necessitas coetus（At enim は相手の言い分か）
- 底本（Oehler）：At enim nobis ab omni gloriae et dignitatis ardore frigentibus nulla est necessitas coetus, nec ulla magis res aliena quam publica. Unam omnium rempublicam agnoscimus, mundum.
- ほかの読み：λ は ab omni gloria、a・b・c は omni gloriae（ab がない。校注 p. 253 の 8）。D・a・c・e は omnes rempublicam cognoscimus、b は omnium rempublicam cognoscimus（校注 9）。
- 採る校訂者：Oehler は ab omni … ardore frigentibus の組み立てを『偶像崇拝について』18 章の derigendo omni fastigio et suggestu tam dignitatis quam potestatis と比べる（注 p. 253 の d）。Bindley は At enim nobis ab omni gloriae を、キリスト者が公職に就いてよいかという問題（『偶像崇拝について』17 章、『見世物について』12 章、46 章の「キリスト者は造営官の職さえ望まない」）と結びつけ、nulla est necessitas coetus を「栄光や偉さへの望みに死んだわたしたちには、徒党を組む必要はなく、公の生活ほど縁遠いものはない」の意味で注する（OCR l. 7591–7609）。Unam omnium … mundum に、Bindley はキリスト教が普遍を主張し、キリスト者は世界の市民だが本当の祖国は天にあると注し、41 章の注に指す（l. 7611–7613、7637–7638）。Mayor はミヌキウス 17 章 2 節（「すべての者に共通の、この世界という国」）、ディオゲネスの「世界市民」、『ディオグネートスへの手紙』5 章、エピクテトス、セネカなどを挙げる（l. 22456–22488）。
- 読者への影響：中 — 本の AGENTS.md は inquit のない At enim を相手の反論の印とし「」に入れて「と、人は言うでしょう」と受ける（3:9）。しかしここは、キリスト者には徒党を組む必要がないという、著者自身の主張で（Bindley の注もキリスト者の側の考えとして説明する）、16.2 の At enim（相手の典拠で言い返す）と同じく「」に入れない形が合う（この点はこの一覧の観察。「メインで決めること」に挙げる）。
- 訳での扱い：訳注は付けない。At enim を「」に入れず、「しかし実際、」と地の文で受けるかどうかはメインが決める。Unam omnium rempublicam agnoscimus, mundum は、『オクタウィウス』17:2 の既訳（「すべての者に共通の、この世界という国」）を参考に、「わたしたちが認める国は、ただ一つ、すべての者の国、つまり世界です」の旨で訳せる。
- 確かめた資料：Oehler 画像 0283（本文、校注 8・9、注 d）。OCR l. 32365–32368、32376–32377、32388–32389、32402–32405。Bindley OCR l. 7571–7573、7591–7613、7637–7638。Mayor OCR l. 22456–22488。`books/octavius/src/chapter-14-17/both.md`（17:2）。

### 38.3 Aeque spectaculis vestris … cum et ipsis rebus, de quibus transiguntur, praetersumus（praetersumus の意味と小さな異読）
- 底本（Oehler）：Aeque spectaculis vestris in tantum renuntiamus in quantum originibus eorum, quas scimus de superstitione conceptas, cum et ipsis rebus, de quibus transiguntur, praetersumus.
- ほかの読み：λ は atque adeo spectaculis（校注 p. 253 の 10）。conceptas を G は exceptas（校注 11）。a・b・c は cum ipsis（et がない）、f は quin et ipsis（校注 12）。D・a・b・c は de quibus exiguntur praeterimus（校注 13）。
- 採る校訂者：注 p. 253 の e に引く Rigaltius は、praeteresse を superesse にならった語とし、「わたしたちが通り過ぎ、捨て置き、まったく無縁であるもの、つまり競技場の狂乱など」と言い換える。Oehler は、res de quibus transiguntur（見世物がそれを題材として演じられる事柄、作り話の題材）は神々の事柄、盗みや忌まわしい悪事だとする（注 e）。Bindley は praetersumus を教会のラテン語にだけある語とし「〜とは関わりがない」の意味で注し、この論は『見世物について』（とくに 5 章）で広げられるとする（OCR l. 7640–7645）。Mayor は renuntiamus に、洗礼のときに悪魔とその華美と天使たちを捨てると誓う言葉（『見世物について』4 章、『兵士の冠について』3 章など）を、superstitione に『見世物について』5〜11 章とラクタンティウス 6 巻 20 章（見世物は神々の祭りとして始まった）を、praetersumus を一度しか出ない語（ἅπαξ εἰρημένον）とする（l. 22490–22639）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。renuntiamus は、洗礼の誓いで悪魔とその華美を「捨てる」と言う語で、見世物を「捨てる、縁を切る」と訳せる。in tantum … in quantum は「…と同じだけ」。de quibus transiguntur は注 e に従い「（見世物で）演じられる題材」、praetersumus は「無縁である、関わらない」。
- 確かめた資料：Oehler 画像 0283（本文、校注 10〜13、注 e）。OCR l. 32368–32371、32379–32380、32407–32414。Bindley 画像 0156（p. 118 の上）、OCR l. 7618–7621、7640–7645。Mayor OCR l. 22490–22639。

### 38.3 Nihil est nobis dictu, visu, auditu cum insania circi … cum xysti vanitate（四つの見世物）
- 底本（Oehler）：Nihil est nobis dictu, visu, auditu cum insania circi, cum inpudicitia theatri, cum atrocitate arenae, cum xysti vanitate.
- ほかの読み：λ は Nihil enim nobis（校注 p. 253 の 14）。c・f は dictu, visu, auditu を欠く（校注 15）。xysti を B・F とウィーン写本は xisti、A・D・E とエアフルト写本は systi（校注 16）。
- 採る校訂者：注 p. 253 の f に引く Heraldus は、競技場（circus）に狂乱が本来つきものだとして、ヒエロニムスの「闘技場は荒れ狂い、競技場は狂い、劇場は放縦にふける」、『見世物について』16 章（狂乱は禁じられているので、わたしたちはすべての見世物から、とりわけ狂乱が支配する競技場から離される）などを挙げる。注 g は『貞潔について』7 章の「四頭立て戦車の狂乱、剣闘士の流血、舞台の汚らわしさ、競技場（xystus）のむなしさ」を挙げ、競技場はその狂乱と争いのため、劇場は汚れと恥知らずのため、円形闘技場はむごさのために退けられたが、xystus と競技全般には同じ悪はなくても、むなしく役に立たない鍛錬として退けられたと説明し、『見世物について』18 章を引く。Bindley の本文は cum vanitate xysti の語順（画像 0156。Oehler の校注に出ない語順）。Bindley は xystus を運動選手の鍛錬場、屋根のある柱廊とし、哲学者もそこで知恵を誇ったと注する（OCR l. 7653–7656）。Mayor も『見世物について』14・16・18・30 章などを挙げる（l. 22641–22737）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。circus は戦車競走の競技場、theatrum は劇場、arena は剣闘士と獣の闘技場、xystus は運動選手の屋根のある鍛錬場（競技）。訳し方（「戦車競走場」「劇場」「闘技場」「競技場」など）はメインが決める。dictu, visu, auditu は「語ることでも、見ることでも、聞くことでも」。
- 確かめた資料：Oehler 画像 0283（本文、校注 14〜16、注 f・g）、0284（注 g の続き）。OCR l. 32371–32373、32380–32382、32416–32474、32560–32567。Bindley 画像 0156、OCR l. 7621–7624、7647–7656。Mayor OCR l. 22641–22737。

### 38.4 Si oblectari novisse nolumus, nostra iniuria est, si forte, non vestra（iniuria は損、si forte）
- 底本（Oehler）：Quo vos offendimus, si alias praesumimus voluptates? Si oblectari novisse nolumus, nostra iniuria est, si forte, non vestra.
- ほかの読み：novisse nolumus を c は nos nolumus、λ は novissime nolumus、F は voluisse nolumus。F と λ は oblectari を oblectare（校注 p. 254 の 18）。F は si を欠く（校注 19）。ヴァティカンの写本の一つは nostra non vestra を加える（校注 20）。
- 採る校訂者：注 p. 254 の h に引く Heraldus は、「この件に何か損があるなら、それはあなたがたでなく、わたしたちにかかわる。損をするのはあなたがたでなく、わたしたちだ。もっとも、損をするとしての話だが」と言い換える。si forte はこの意味でテルトゥリアヌスに多いとし、iniuria はここでは、法律家の書物によくあるとおり「損害」（damnum）の意味で、40 章（「住む者たちの損なしには起こりえなかった」）と 44 章（「町の損を、だれも勘定に入れない」）を挙げる。Oehler は si forte を『兵士の冠について』5 章の注に指す（注 h）。Mayor も iniuria に 40 章と 44 章、si forte に 16 章などの用例を挙げる（l. 22739–22750）。
- 読者への影響：小。
- 訳での扱い：訳注は付けない。iniuria は訳語表の 3.5 と同じく「損」とし、「不正」にしない。si forte は注 h に従い「もし（損だと）すればの話ですが」の挿入。alias praesumimus voluptates は「ほかの楽しみを先に選び取る」。
- 確かめた資料：Oehler 画像 0283（本文の終わり）、0284（本文、校注 18〜20、注 h）。OCR l. 32373、32480–32484、32512–32528、32569–32585。Mayor OCR l. 22739–22750。

### 38.4 Sed reprobamus quae placent vobis. Nec vos nostra delectant.（譲歩と答え）
- 底本（Oehler）：Sed reprobamus quae placent vobis. Nec vos nostra delectant.
- ほかの読み：本文の異読はない。
- 採る校訂者：Oehler は注 p. 254 の k で「『しかし、わたしたちはあなたがたの好むものを退けている』と（著者は）言う。それでも、と答える。あなたがたも、わたしたちのものを楽しまない」と言い換え、二つの文を、相手の不満を認める譲歩と、それへの答えに取る。Bindley は Sed reprobamus quae placent vobis, nec vos nostra delectant と一文にし、『見世物について』28 章に指す（OCR l. 7627–7629、7658）。Mayor も『見世物について』28 章の初め（「わたしたちの宴、わたしたちの婚礼はまだない。わたしたちは彼らと共に食卓に着けない。彼らもわたしたちと共に着かないのだから」）を挙げる（l. 22752–22755）。
- 読者への影響：小 — Sed reprobamus を、相手の不満を著者が先に認める文として訳すと、Nec vos nostra delectant の「あなたがたも同じではないか」という答えの筋が通る。
- 訳での扱い：訳注は付けない。Sed reprobamus は相手の言い分の形（「」）ではなく、主語は「わたしたち」のまま、「確かに、わたしたちはあなたがたの好むものを退けます」の譲歩とし、Nec は「しかし、あなたがたも…楽しまないのです」と答えで受けられる。形はメインが決める。
- 確かめた資料：Oehler 画像 0284（本文、注 k）。OCR l. 32487–32491、32621–32631。Bindley 画像 0156、OCR l. 7627–7629、7658。Mayor OCR l. 22752–22755。

### 38.5 Sed licuit Epicureis aliquam decernere voluptatis veritatem, id est animi aequitatem, et ampla negotia Christianae.（本文の乱れ）
- 底本（Oehler）：Sed licuit Epicureis aliquam decernere voluptatis veritatem, id est animi aequitatem, et ampla negotia Christianae.（章の最後の文。Christianae の後に名詞がない）
- ほかの読み：38.3 の vanitate. Quo vos は A・B・D・E・F・G・a〜e、ウィーン写本、オクスフォード、エアフルト写本、アンブロジアーナ写本。λ は vanitate. licuit Epicureis aliam decernere voluptatis veritatem id est animae aequitatem. In quo vos（この文を 38.4 の前に置き、et ampla negotia Christianae がない）。f と Havercamp は vanitate. Licuit Epicureis aliquam decernere voluptatis veritatem. Quo vos（同じく 38.4 の前に置き、id est 以下がない）（校注 p. 253 の 17）。38.5 の位置では、オクスフォードは Si licuit（校注 p. 254 の 21）、G は de Epicureis（校注 22）。voluptatis を F は voluntatis（ウィーン写本は voluptatis）、続けて voluptatem id est（校注 23）。aequitatem を F は quietem（校注 24）。Fulvius Ursinus は voluptatis veritatem, ἀταραξίαν καὶ ἀπραξίαν, id est animi aequitatem et a publicis negotiis requiem（「心の乱れなさと何もしないこと、つまり心の平静と、公の務めからの休み」）と書き直すべきだと考えた（校注 24）。et ampla negotia Christianae は A・B・G。F とウィーン写本は et ampla negotia Christianae factionis、アンブロジアーナ写本は et ampla negotia Christianae fidei、Vossius の本は et ampla negotia Christiano、D・E・a〜e、エアフルト写本、オクスフォードは et ampla negotia（Christianae がない）。λ・f と Havercamp では、Sed Epicureis から Christianae までの語がこの位置にない（校注 25）。
- 採る校訂者：Oehler は注 p. 254 の i で、Sed licuit を scilicet licuit（「なるほど…が許された」）と読みたいとし、テルトゥリアヌスはこの小辞をよくそう使うと言う。続く語は乱れている（corrupta）とし、Wowerius が自分の本から voluptatis veritatem, ἀταραξίαν καὶ ἀπραξίαν, id est animi aequitatem et a publicis negotiis requiem を挙げることを伝え、『見世物について』28 章（「哲学者のある者たちは、この〔快楽という〕名を安らぎと静けさに与え、それを楽しみ、それを誇る」）を引く。注 k では、底本の語のまま文意を「わたしたちはあなたがたの楽しみを退けるが、エピクロス派には、あなたがたのおかげで、快楽の何らかの真実を自分で定めることが許されたではないか。それなら、なぜわたしたちには許されないのか。彼らは快楽の真実を心の平静と定め、キリスト者の快楽は大きな務めである。それで、あなたがたが何を失うのか」と言い換える（et ampla negotia Christianae に voluptatis を補う）。Bindley の本文は f と同じく、cum vanitate xysti. Licuit Epicureis aliquam decernere voluptatis veritatem. Quo vos offendimus … と 38.4 の前に置き、id est 以下を刷らず、章を nec vos nostra delectant. で終える（画像 0156、OCR l. 7624–7629）。Mayor は Epicureis に『見世物について』28 章と Usener『エピクロス集』を挙げる（l. 22757–22764）。
- 読者への影響：大 — 文の位置、範囲、終わりの語がどれも写本で分かれ、Oehler 自身が「乱れている」と言う。底本の終わりの et ampla negotia Christianae は名詞が欠けた形で、Oehler の注 k の補いがなければ意味が取れない。次の 39.1 が Edam iam nunc ego ipse negotia Christianae factionis で始まることから、終わりの語は次の章の書き出しに引かれた形かもしれない（この点はこの一覧の観察で、資料の注にはない）。
- 訳での扱い：訳注を付ける。案は「この文は写本の読みが乱れ、欠く写本もあって、読み方が定まらない。」（32 字）。本の AGENTS.md の 23.6 の扱い（「この節は写本の読みが乱れていて、読み方が定まらない。」）に合わせて「この文は写本の読みが乱れていて、読み方が定まらない。」（26 字）としてもよい。訳は底本の語で、Oehler の注 k の言い換え（エピクロス派には快楽の真実を心の平静と定めることが許された。キリスト者の快楽は大きな務めである）に従い、補った語を `// ` メモに書く。Sed licuit は注 i の scilicet licuit（「なるほど」）の取り方もあるが、底本の Sed で訳す。Epicurei は名前の表どおり「エピクロス派」。
- 確かめた資料：Oehler 画像 0283（校注 17）、0284（本文、校注 21〜25、注 i・k）。OCR l. 32382–32392、32488–32497、32514–32553、32587–32631。Bindley 画像 0156、OCR l. 7624–7629。Mayor OCR l. 22757–22764。

---

## 未確認

- 36.3 の sub exceptione personarum と、聖書の「神は人をかたよって見ない」（使徒一〇・三四、ローマ二・一一など）との近さ。この箇所に聖書を挙げる資料は見ていない（Bindley と Mayor は法律の言い方や小プリニウスを挙げる）。
- 36.4 の ex aequo について Oehler が指す『スカプラへ』2 章の注は、Mayor の要約（l. 21942–21946）で読んだだけで、Oehler の注そのものは開いていない。37.7 の suffudisset の注 h が指す『さそり』10 章の注、37.8 の注 i が指す『殉教者たちへ』3 章の注も開いていない。
- 37.10 の注 n は Porro を「『さそり』9 章の注」に指すが、この一覧で読んだ Porro の注（OCR l. 53649–53661。37 章の Porro nec tanti を例に挙げるもの）が、その注そのものか、Oehler の別の書の注かは確かめていない。どちらでも、37 章の Porro を atquin、atenim の意味に取ることは同じ。
- 37.5 の et orbem iam（λ）と、λ の一文 Possumus dinumerare … erunt の扱いについて、Oehler の序文や他の箇所に説明があるかは見ていない。
- 38.5 の Wowerius の本の読みと Fulvius Ursinus の書き直しが、写本の読みか推定かは、校注と注 i の言い方（「自分の本から挙げる」「書き直すべきだと考えた」）からしか分からない。
