# 4 世紀の文書リレー

4 世紀から 5 世紀初めの 8 作品を原文から訳す。修道の始まり（アントニオス）、エルサレムの典礼（キュリロス、エゲリア）、三位一体と受肉の神学（二人のグレゴリオス）、司牧（クリュソストモス）、西方の聖人伝（マルティヌス）、正統の基準（ウィンケンティウス）。底本と英訳の所在は `CANDIDATES.md` の「2〜5 世紀（2026-11-21 の調査）」にもある。

PG（Migne のギリシア教父全集）を底本にする本の共通の注意：ページは 2 段組で、ギリシア語とラテン語訳が並ぶ巻と、ギリシア語だけのページが続く巻がある。起こすのはギリシア語だけで、ラテン語訳は使わない。OCR は κ を χ、β を δ、θ を ϑ と読む崩れがあるので、本文は画像から起こして OCR と突き合わせる（hippolytus-on-antichrist と同じ）。画像は IIIF か、archive.org の `https://archive.org/download/<識別子>/page/nN_w1600.jpg` で取れる。底本テキストは、本を始めたときに最初のページの分だけ起こし、各ページのセッションが page-context を作る前に、そのページの章を画像から起こして足す（本の AGENTS.md の「底本の扱い」に書く）。起こさないと page-context は空の抜粋を書き出す。

## athanasius-life-of-antony　アタナシオス『アントニオス伝』（ギリシア語）

- 底本：PG 26。archive.org `patrologiae_cursus_completus_gr_vol_026`。OCR は `cache/archive.org/patrologiae_cursus_completus_gr_vol_026/patrologiae_cursus_completus_gr_vol_026_djvu.txt`（SHA-256 先頭 5da25f456453efe8）。本文は l. 68406（序 Ἀγαθὴν ἅμιλλαν）から l. 78435 ごろ（94 章の結び）まで。約 20,000 語、94 章。IIIF の画像は leaf 0430 で確かめた。
- 英訳：NPNF 2-4「Life of Antony」（`cache/ccel.org/npnf204.txt` の l. 26842 から）。章の番号は PG と同じ。
- 揃える本：incarnation（同じ著者。英訳からの重訳なので文体は引き継がず、人名と神学用語の表記だけ合わせる）。悪霊・誘惑・修道の語彙はこの本で決め、後の sulpicius-life-of-martin に引き継ぐ。

## cyril-mystagogical-catecheses　エルサレムのキュリロス『秘義教話』（ギリシア語）

- 底本：PG 33。archive.org `patrologiae_cursus_completus_gr_vol_033`。OCR は `cache/archive.org/patrologiae_cursus_completus_gr_vol_033/patrologiae_cursus_completus_gr_vol_033_djvu.txt`（b6112b39d1bb8870）。第 1 講は l. 82263 ごろ、第 2〜5 講の題は l. 83136、83816、84534、85398。各講の頭にある聖書の朗読箇所の指示も訳す。IIIF の画像は leaf 0550 で確かめた。
- 英訳：NPNF 2-7「First Lecture on the Mysteries」（`cache/ccel.org/npnf207.txt` の l. 20557 から）。
- 揃える本：洗礼・塗油・聖餐の語彙は didache と justin-first-apology に合わせる。典礼の場所や所作の語は、次の egeria-pilgrimage と同じ訳語にする（この本の AGENTS.md に訳語表を作る）。

## egeria-pilgrimage　エゲリア『巡礼記』（ラテン語）

- 底本：P. Geyer 編、Itinera Hierosolymitana saeculi IIII–VIII（CSEL 39、Wien, 1898）。archive.org `itinerahierosoly00geye`。OCR は `cache/archive.org/itinerahierosoly00geye/itinerahierosoly00geye_djvu.txt`（45d4f2dbf2e85dd7）。本文は冒頭が欠けていて、l. 4790（ostendebantur iuxta scripturas）から。編者 Geyer は図書館の書誌で 1852 年生まれ（没年は見つからないが、生年から日本でも権利は切れている）。
- 英訳：J. H. Bernard の訳（Palestine Pilgrims' Text Society、1891。叢書第 1 巻、1896）。archive.org `libraryofpalesti01paleuoft`、OCR は `cache/archive.org/libraryofpalesti01paleuoft/libraryofpalesti01paleuoft_djvu.txt`（c94bfb01de6d880b）の l. 8034〜11166。Bernard は 1927 年没。M. L. McClure と C. L. Feltoe の訳（1919）は、序によれば訳文の大半が George Herbert の訳で、Herbert の没年が確かめられないので使わない（本の `research/sources.md`）。
- 揃える本：cyril-mystagogical-catecheses（典礼の語彙）。後期ラテン語の口語的な文で、文体は手紙の語りかけ（dominae sorores への呼びかけ）を保つ。地名はシナイ、エジプト、エデッサなど多いので、表記を本の AGENTS.md に表で決める。
- 底本には欄外に章（太字）と節の番号があるので、節は底本の番号どおりに切る（split-units は使わない）。17 ページ。各章の始まりの OCR の行は本の `research/sources.md` の表にある。画像の番号：IIIF＝印刷ページ＋56（推定。IIIF は応答せず未確認）、archive.org の `page/nN_w1600.jpg` は N＝印刷ページ＋55。
- 底本テキスト（`research/geyer-1898.txt`）は、本を始めたときに最初のページの 1〜3 章を起こした。次のページからは、各ページのセッションが page-context を作る前に、そのページの章を画像から起こして足す（本の AGENTS.md の「底本の扱い」）。

## gregory-nazianzen-theological-orations　ナジアンゾスのグレゴリオス『神学講話』（第 27〜31 講話、ギリシア語）

- 底本：A. J. Mason 編、The Five Theological Orations of Gregory of Nazianzus（Cambridge, 1899）。First1KGreek のコミット ed91552c52530c8f5a3ddf2dd767e899372a804c の `data/tlg2022/tlg007`〜`tlg011`（CC BY-SA 4.0、計約 25,300 語）。cache に取得済み（`cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2022/`）。訳のライセンスは `CC BY-SA`。印刷版のスキャンは start-book で archive.org から探し、電子化との照合に使う。
- 英訳：NPNF 2-7「Oration XXVII. The First Theological Oration」（`cache/ccel.org/npnf207.txt` の l. 31377 から）。
- 揃える本：三位一体の用語（ウーシア、ヒュポスタシス、本質、位格など）はこの本の AGENTS.md に訳語表を作って決め、次の gregory-of-nyssa-catechetical-oration に引き継ぐ。5 講は講ごとに節を分ける。
- 27 ページ（講をまたがない）。印刷版は archive.org `thefivetheologic00greguoft`（cache に PDF・OCR・page_numbers）。画像の番号：IIIF＝印刷ページ＋28、`page/nN_w1600.jpg` の N＝印刷ページ＋27（IIIF は応答が遅いので `page/` の画像を使う）。底本テキストは全文を変換済み。電子化に紛れ込んだ注解の断片と行番号を除いたことは本の AGENTS.md の「底本の扱い」にある。

## gregory-of-nyssa-catechetical-oration　ニュッサのグレゴリオス『教理大講話』（ギリシア語）

- 底本：J. H. Srawley 編、The Catechetical Oration of Gregory of Nyssa（Cambridge, 1903。編者は 1954 年没）。archive.org `TheCatecheticalOrationOf`。OCR は `cache/archive.org/TheCatecheticalOrationOf/TheCatecheticalOrationOf_djvu.txt`（9d8f5af77425624f）。同じ版の `thecatecheticalo00greguoft` はギリシア語がラテン文字に化けていて使えない。序と 40 章。
- 英訳：NPNF 2-5「The Great Catechism」（`cache/ccel.org/npnf205.txt` の l. 42016 から）。
- 揃える本：gregory-nazianzen-theological-orations の訳語表。受肉と贖いの論じ方はアタナシオスに拠るので、人名と用語は athanasius-life-of-antony と incarnation に合わせる。
- 20 ページ（章の途中では切らない。序だけで 1 ページ）。画像は archive.org の `page/nN_w1600.jpg` で N＝印刷ページ＋56（p. 1 と p. 150 で確かめた。IIIF は応答しなかった）。pages.json の `images` はこの N。底本テキスト（`research/srawley-1903.txt`）は、本を始めたときに序（0 章）だけ起こした。次のページからは、各ページのセッションが page-context を作る前に、そのページの章を画像から起こして足す（本の AGENTS.md の「底本の扱い」）。OCR の章の書き出しの行は本の `research/sources.md` にある。

## chrysostom-on-the-priesthood　ヨアンネス・クリュソストモス『司祭職について』（ギリシア語）

- 底本：PG 48。archive.org `patrologiae_cursus_completus_gr_vol_048`（Google のスキャン）。OCR は `cache/archive.org/patrologiae_cursus_completus_gr_vol_048/patrologiae_cursus_completus_gr_vol_048_djvu.txt`（a8f68c950d55b132、2026-11-21 取得）。この巻のスキャンはギリシア語だけのページが先に続き、ラテン語訳のページが後にまとまる。題（ΠΕΡΙ ΙΕΡΩΣΥΝΗΣ ΛΟΓΟΣ ΠΡΩΤΟΣ）は l. 13294、第 5・6 巻の題は l. 20486、21215。印刷の欄は 623〜692 で、画像は n96 が欄 617〜618（N ≒ 欄の番号 ÷ 2 − 213）。6 巻。長さは start-book で見積もる（8 冊でいちばん長い）。
- J. A. Nairn 編（Cambridge, 1906。archive.org `desacerdotioofst00john`、cache に OCR あり）はよりよい校訂本だが、編者の没年を確かめられないので底本にしない。読みの違いという事実を論点一覧に使うのはよい。
- 英訳：NPNF 1-9「Book I」（`cache/ccel.org/npnf109.txt` の l. 1866 から）。
- 揃える本：バシレイオスとの対話の形をとる。二人の口調は本の AGENTS.md で決める。聖職の語彙（司祭、司教、主教、監督など）は ignatius と first-clement の訳語を確かめて決める。

## sulpicius-life-of-martin　スルピキウス・セウェルス『マルティヌス伝』（ラテン語）

- 底本：C. Halm 編、Sulpicii Severi libri qui supersunt（CSEL 1、Wien, 1866）。archive.org `sulpiciiseveril00halmgoog`。OCR は `cache/archive.org/sulpiciiseveril00halmgoog/sulpiciiseveril00halmgoog_djvu.txt`（c7acde4662f601c8）。題は l. 6037（VITA SANCTI MARTINI）。献呈の手紙と 27 章。訳すのは『マルティヌス伝』だけで、手紙と『対話』は含めない。
- 英訳：NPNF 2-11「On the Life of St. Martin」（`cache/ccel.org/npnf211.txt` の l. 212 から）。
- 揃える本：athanasius-life-of-antony（スルピキウスはアントニオス伝を手本にした。悪霊・奇跡・修道の訳語を引き継ぐ）。

## vincent-commonitorium　レランスのウィンケンティウス『備忘録』（ラテン語）

- 底本：A. Jülicher 編、Vincenz von Lerinum, Commonitorium（Freiburg, 1895。編者は 1938 年没、archive.org の書誌）。archive.org `vincenzvonlerin00jlgoog`（Google のスキャン）。OCR は `cache/archive.org/vincenzvonlerin00jlgoog/vincenzvonlerin00jlgoog_djvu.txt`（65af01b501db6ca7、2026-11-21 取得）。本文は l. 794（I. Dicente scriptura et monente）から l. 3200 ごろ（XXXIII）まで。OCR はきれいで、ページに行番号と章番号がある。画像の番号＝印刷ページ＋19（n30 が p. 11）。33 章。OCR の語数は脚注込みで約 14,000 語。
- R. S. Moxon 編（Cambridge, 1915。cache に OCR あり）は編者の没年を確かめられないので使わない。
- 英訳：NPNF 2-11「The Commonitory」（`cache/ccel.org/npnf211.txt` の l. 11036 から）。
- 揃える本：異端・伝統・公同の語彙は irenaeus-against-heresies と tertullian-treatises に合わせる。「どこでも、いつも、すべての人によって信じられてきたこと」（2 章）の訳は本の AGENTS.md に固定する。
