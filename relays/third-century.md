# 3 世紀の文書リレー

アレクサンドリア（クレメンス、オリゲネス）とカルタゴ（テルトゥリアヌス、キプリアヌス）の作品を原文から訳す。テルトゥリアヌスの『祈りについて』をキプリアヌスの『主の祈りについて』が下敷きにしているので、テルトゥリアヌスを先に訳し、訳語を引き継ぐ。

## clement-protrepticus　アレクサンドリアのクレメンス『ギリシア人への勧め』（ギリシア語）

- 底本：O. Stählin 編、Clemens Alexandrinus I（GCS 12、Leipzig, 1905）。First1KGreek のコミット ed91552c52530c8f5a3ddf2dd767e899372a804c の `data/tlg0555/tlg001/tlg0555.tlg001.1st1K-grc1.xml`（CC BY-SA 4.0、約 23,000 語）。`cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c…/data/tlg0555/tlg001/` に取得済み。底本テキストは `research/staehlin-1905.txt`（章.節.小節。`tei2labeled.js --running-sections` と `relabel.js`）。
- 印刷版（照合用）：archive.org `clemensalexandri01clemuoft`（GCS 12、1905）。OCR は cache にあり、画像は IIIF で leaf ＝ ページ＋90。
- 英訳：ANF 第 2 巻「Exhortation to the Heathen」（`cache/ccel.org/anf02.txt`）。
- 揃える本：同じ著者の『救われる富者とは誰か』（who-is-the-rich-man）。訳語、文体、底本テキストの作り方（tei2labeled と relabel）をそこから引き継ぐ。
- ギリシアの神話と秘儀、詩人の引用が多い。神々の名はユスティノス、タティアノス、アテナゴラスの本の表記に合わせる。

## origen-on-prayer　オリゲネス『祈りについて』（ギリシア語）

- 底本：P. Koetschau 編、Origenes Werke II（GCS 3、Leipzig, 1899）。First1KGreek のコミット ed91552c… の `data/tlg2042/tlg008/tlg2042.tlg008.perseus-grc1.xml`（CC BY-SA 4.0、約 28,000 語）。
- 印刷版（照合用）：archive.org `origeneswerke02orig`（GCS 3、1899）。OCR は cache にあり、画像は IIIF で leaf ＝ ページ＋12。略号表と成立の記述は第 1 巻 `origeneswerke01orig` の序（cache にある）。
- 読み比べる訳：英語の定評ある権利の切れた訳はない。P. Koetschau のドイツ語訳（Bibliothek der Kirchenväter 1. Reihe 48、München, 1926。訳者は 1939 年没）を使う。BKV の EPUB を `tools/epub2txt.js` で 1 行 1 節にしたものが cache にある（pages.json の `english`）。CCEL などにある W. A. Curtis の英訳は、出所と権利がはっきりしないので使わない。
- 揃える本：アレクサンドリアの神学の語彙は clement-protrepticus と『救われる富者とは誰か』。主の祈りの句は、後で訳すテルトゥリアヌスとキプリアヌスの祈りの論考と揃うよう、本の AGENTS.md に訳を決めて書く。

## origen-letter-to-gregory　オリゲネス『グレゴリオスへの手紙』（ギリシア語）

- 底本：J. A. Robinson 編、The Philocalia of Origen（Cambridge, 1893）の 13 章。First1KGreek のコミット ed91552c… の `data/tlg2042/tlg019/tlg2042.tlg019.1st1K-grc1.xml`（CC BY-SA 4.0）。手紙は「Χαῖρε ἐν θεῷ, κύριέ μου σπουδαιότατε」から。フィロカリアの編者による 13 章の題も訳すかは、本の AGENTS.md で決める。
- 印刷版の画像（照合用）：archive.org `philocaliaoforig0000orig`（1893、OCR あり）。
- 英訳：ANF 第 4 巻「A Letter from Origen to Gregory」（`cache/ccel.org/anf04.txt`）。
- 1 ページで終わる短さ。訳語は origen-on-prayer に揃える。

## tertullian-apology　テルトゥリアヌス『護教論』（ラテン語）

- 底本：F. Oehler 編、Q. Septimii Florentis Tertulliani quae supersunt omnia I（Leipzig, 1853）。archive.org `quintiseptimiifl0001fanc`。本文は djvu の l. 13906 ごろ（Si non licet vobis, Romani imperii antistites）から。ラテン語の OCR は読めるが、本文は画像から起こして OCR と突き合わせる（オクタウィウスと同じ）。約 20,000 語、50 章。
- 英訳：ANF 第 3 巻「Apology」（`cache/ccel.org/anf03.txt`）。ほかに T. R. Glover の英訳（Loeb、1931）があるが、訳者の没年を確かめるまで使わない。
- 揃える本：オクタウィウス（『護教論』と多くの論じ方を共有する）、ペルペトゥアとフェリキタスの殉教録、スキリウムの殉教者行伝（同じカルタゴ）。ローマの官職名、神々の名、法廷の語彙はこれらに合わせる。

## tertullian-treatises　テルトゥリアヌス小品集（ラテン語）

- 収める作品：『殉教者たちへ』（Ad martyras）、『見世物について』（De spectaculis）、『祈りについて』（De oratione）、『洗礼について』（De baptismo）。約 1,500・6,500・4,700・4,500 語。この順に、作品ごとに節を立てる。
- 底本：Oehler 1853 の第 1 巻（archive.org `quintiseptimiifl0001fanc`）に 4 作とも載る。Ad martyras は djvu の l. 1151 ごろ（Inter carnis alimenta）、De spectaculis は l. 2875 ごろの題から、De oratione は l. 67039 の前後、De baptismo は l. 75093 ごろ（Felix sacramentum aquae nostrae）。本文は画像から起こす。
- 英訳：ANF 第 3 巻（「Ad Martyras」「The Shows」「On Prayer」「On Baptism」）。
- 揃える本：tertullian-apology。『祈りについて』の主の祈りの訳は origen-on-prayer の AGENTS.md の訳と揃える。

## cyprian-treatises　キプリアヌス小品集（ラテン語）

- 収める作品：『ドナトゥスへ』（Ad Donatum）、『カトリック教会の一致について』（De catholicae ecclesiae unitate）、『背教者について』（De lapsis）、『主の祈りについて』（De dominica oratione）。作品ごとに節を立てる。
- 底本：W. Hartel 編、S. Thasci Caecili Cypriani opera omnia I（CSEL 3.1、Wien, 1868）。archive.org `sthascicaecilic00hartgoog`。Ad Donatum は djvu の l. 116（Bene admones, Donate carissime）から、De lapsis は l. 11119 ごろ、De unitate は l. 9896 ごろ、De dominica oratione は l. 12446 ごろの題から。OCR は読めるが、本文は画像から起こす。『一致について』4 章には二つの版（いわゆる首位権の本文と公認の本文）の問題がある。底本の扱いに従い、論点一覧に記録する。
- 英訳：ANF 第 5 巻（`https://ccel.org/ccel/schaff/anf05/cache/anf05.txt`。まだ `cache/` にない）。
- 揃える本：tertullian-treatises（とくに『祈りについて』。キプリアヌスはテルトゥリアヌスを下敷きにしている）、tertullian-apology。
