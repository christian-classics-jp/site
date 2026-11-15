# 校訂上の論点

『テルトゥリアヌス小品集』（『殉教者たちへ』『見世物について』『祈りについて』『洗礼について』）の本文で、写本・刊本の読みが分かれる箇所、編者や注釈者のあいだで構文や意味の取り方が分かれて訳に響く箇所、聖書や古典の引用・暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Oehler 1853 の本文、`../oehler-1853-<作品>.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。節の番号はこの訳で付けたもの（本の `AGENTS.md`）で、各項の見出しのラベルは底本テキストの行頭のラベル（章.節）。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は各資料の OCR テキスト（`_djvu.txt`）の行番号。Oehler の校注と注解は OCR が崩れ、本文・校注・注解を混ぜて並べるので、ページ画像で読み、OCR の行番号はおよその位置として添える。

- 底本（Oehler）：F. Oehler 編、Tertulliani quae supersunt omnia I（1853）。『護教論』と同じ巻。各ページの上の数行が本文、その下に番号つきの校注（異読）、さらにその下に二段組みで文字記号（a、b、c …）つきの注解（Rhenanus、Junius、Rigaltius、La Cerda など先行の刊本の注の抜き書きと Oehler 自身の注）を置く。画像の番号は印刷ページ＋30（p. 3＝0033）。校注の番号と注解の記号は章ごとに 1・a に戻るので、各論点では「1 章の校注 14（p. 4）」「2 章の注 e（p. 7）」のように、章とページを添えて挙げる。画像は IIIF で切り出したもの（`cache/archive.org/quintiseptimiifl0001fanc/pages/`）と、archive.org の幅 1600 のページ画像（`cache/archive.org/quintiseptimiifl0001fanc/page/nN_w1600.jpg`。N＝IIIF の番号−1、n34＝p. 5）。ページ画像は `node tools/image.js crop` で上半分（本文と校注、`pct:0,0,100,50`）と下半分（注解、`pct:0,48,100,52`）に切って読んだ。
- 校注の「ego」は Oehler 自身の推定、「m. pr.」は写本の最初の手、「m. sec.」は後の手、「om.」は欠くこと、「reliqui」はそこに挙げていない残りの写本・刊本。「inducit」はその語を削ること（4 章の校注 30 の Vocem serpentes inducit Fr. Iunius）。「libri omnes」は文字どおり「すべての本」（4 章の校注 13）。序文 p. XXIII（OCR l. 1039–1041）によると、読みの出どころが確かでないときは略号を丸括弧に入れる。

## 『殉教者たちへ』の略号

『殉教者たちへ』の校注の略号は、作品の前のページ（p. 2、画像 `pages/0032_full.jpg`、OCR l. 1128–1142 は崩れている）の表で確かめた。『護教論』の略号（`books/tertullian-apology/research/cruxes/README.md`）とは文字の意味が違う。D は写本ではなく刊本なので、「ABCD」は「すべての写本」ではない。残りの 3 作の略号は、それぞれの作品の最初のページで確かめて、ここに節を足す。

- A：ウィーン写本（Vindobonensis）。Aφ は Hildebrand の照合による読み。
- B：ライデン写本（Leidensis）。
- C：フィレンツェのマリアベキアーナ図書館の写本 DXXIX 番。
- D：Beatus Rhenanus の初版（1521 年）。
- a：Joh. Gangneius 1545。b：Sigism. Gelenius（表には MDLXII と刷られている）。c：Jacobus Pamelius 1579。d：Nicolaus Rigaltius 1634。
- そのほか校注に名で出る写本：
  - Laurentianus：フィレンツェのラウレンツィアーナ図書館の写本 plut. 26 cod. 12（羊皮紙、15 世紀。『殉教者たちへ』を含む。序文 OCR l. 241–250）。
  - Vaticani tres：Pamelius が挙げるヴァティカンの写本三つ（Oehler は Pamelius の報告として引く）。
  - Divionensis：Rigaltius が使ったディジョンの写本。序文によると、Rigaltius 自身が「古さはほめるほどではない」と言い、『殉教者たちへ』を含む（OCR l. 863–866）。
  - Gorziensis：ゴルツェの写本。Rhenanus がのちにその照合を手に入れ、1539 年の第 3 版に使った（OCR l. 590–597）。
  - Magliabechiani DXXVII・DXXVIII：題の注（p. 3 の *）に名が出るだけ。
- 校注に名で出る推定・注釈者：Franc. Junius、Fulv. Ursinus、Aug. Neander、Hildebrand、Latinius、Just. Lipsius、La Cerda、Jos. Scaliger、Josias Mercerus、Petr. Ciacconius、Harris など。校注で名だけ出る Rhenanus は、D（1521 年の初版）とは別に、のちの版や注での読みを指す（1 章の校注 3 は「1528 年の版への注」と明記する）。

## 『見世物について』の略号

『見世物について』の校注の略号は、作品の前のページ（p. 16、画像 0046＝`page/n45_w1600.jpg`）の表で確かめた。『殉教者たちへ』とも『護教論』とも文字の意味が違う。写本は A だけで、B〜E はみな刊本。したがって「BCD」や「reliqui」（A のほかの残り）は写本の読みではなく、刊本の読み。

- A：Agobardinus（アゴバルドゥスの写本。CSEL の表では Parisinus 1622、9 世紀）。Aβ は Steph. Baluzius の照合による読み、Aφ は Hildebrand の照合による読み。二つの照合が食い違う例は、2 章の校注 42（et iniquitatium Aφ、ut iniquitatium AβC）と 3 章の校注 22（contrario (Aβ)、e contrario (Aφ)）。
- B：Io. Gangneius の初版（editio princeps、1545 年）。Bmg はその版の余白の読み。
- C：Sigism. Gelenius の版（表には MDLXII と刷られている）。Gelenius はイングランドの写本（codex Anglicus, Masburensis）を使った、と表は言う。
- D：Iac. Pamelius の版（1579 年）。Pamelius はイングランドの Jo. Clemens の写本を使った、と表は言う。校注の「liber (Io.) Clementis」「ex codice Clementis」は、Pamelius が報告するその写本の読みで、D の本文とは別に挙げることがある。
- E：Nicol. Rigaltius の版（1634 年）。
- 校注に名で出る推定・注釈者：Fulv. Ursinus、Franc. Junius、Hildebrand、Leopoldus、Jos. Scaliger、Colvius、Meursius、Salmasius、Latinius など。

CSEL 20 の略号（OCR l. 477–500 の INDEX SIGLORUM）は Oehler と文字の割り当てが違う。CSEL の A は同じ Agobardinus（Bal＊、Hild＊ は Baluzius と Hildebrand の照合）、B は Gangneius の版（1545 年）、C は Pamelius が使った Jo. Clemens の写本の読み。Gelenius の版は Gel（表では 1550 年と刷られ、Oehler の表の MDLXII と違う。OCR は「Gei」と読む）、Pamelius の版は Pam、Rigaltius の版は Rig。論点一覧では、CSEL の読みを挙げるときは略号ではなく名前で書く（CSEL の C＝Clemens の写本で、Oehler の C＝Gelenius ではない）。CSEL の序（OCR l. 283–383）によると、Gangneius が使ったと言う古い写本は Agobardinus そのもので、Gangneius はほかにもう一つの写本を使った。Gelenius の Masburensis の写本はその写本と同じか近い親戚、Clemens の写本の読みは伝わるものが少なく、主な拠りどころにはしない、と言う。

## そのほかの資料

- CSEL 20（Reifferscheid & Wissowa 1890）：『見世物について』『祈りについて』『洗礼について』を収め、『殉教者たちへ』は収めない（本の `AGENTS.md`）。略号は上の『見世物について』の節。OCR は本文に印や崩れが多いので、CSEL の読みは校注で裏づけられるものだけを確かなものとして挙げる。
- Migne『ラテン教父全集』1 巻（1844）：テルトゥリアヌスの著作の巻。『見世物について』の本文の下に、異読の一覧（LECTIONES VARIANTES。略号は Rig、Jun、Seml、Fran、Paris、Oberth などで、表の説明は読んでいない）と、Rigaltius・La Cerda・Pamelius などの注（COMMENTARIUS）を置く。『見世物について』14〜19 章（l. 59049–59480、col. 647–652）では、本文は多くのところで Rigaltius の読み（contra Dei、gula）と同じだが、17.1 は amoliri と読み、異読の一覧に Rigaltius の nec … amare を挙げる。OCR（`cache/archive.org/bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1844_1/…_djvu.txt`）は崩れが多いので、Oehler・CSEL と読みを比べるのに使うだけにする。
- 七十人訳：H. B. Swete, The Old Testament in Greek II（`cache/archive.org/oldtestamentingr02swetuoft/oldtestamentingr02swetuoft_djvu.txt`）。
- 新約のギリシア語：Robinson & Pierpont の Byzantine Textform（`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`。行は「章,節,本文」で、`{NA … > … }` は NA との違い）。
- ウェルギリウス：Greenough 版（1881）の Perseus の TEI XML（`cache/raw.githubusercontent.com/PerseusDL/canonical-latinLit/master/data/phi0690/…`）。『農耕詩』は phi002。
- 口語訳：`node tools/bible.js` で引いた 1955 年版の本文。
- ANF：Ante-Nicene Fathers 第 3 巻の Thelwall の英訳（`cache/ccel.org/anf03.txt`）。レビューの読み比べに使う。英訳の文言はこの一覧に使わない。
