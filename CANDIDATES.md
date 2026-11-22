# 翻訳候補

ギリシア語・ラテン語の原文から訳す初期キリスト教文献の候補。2026-10-25 に検討した。訳し始めたら `books/` に本を作り、ここの状態を「翻訳中」にする。

## 2 世紀の弁証文学・説教・殉教文学

| 作品 | 原語 | 備考 |
|---|---|---|
| サルディスのメリトン『過越について』 | ギリシア語 | 保留。1940 年に見つかった作品で、権利の切れた校訂本も英訳もない |

## 2〜5 世紀（2026-11-21 の調査）

2026-11-21 に、First1KGreek の全目録（コミット `ed91552c52530c8f5a3ddf2dd767e899372a804c`。調べた日の master と同じ）と archive.org を探し、原文と読み比べる英訳の所在を確かめた。下の「取得済みの資料（2026-11-21）」の表にあるものは `cache/` に置いた。

- 「電子テキスト」：First1KGreek の TEI（CC BY-SA 4.0）から底本テキストを作れる本。語数は TEI の本文のギリシア語の語を数えたもの（注を除く）。訳のライセンスは `CC BY-SA` になる。
- 「スキャン」：印刷版の画像から起こす本。行番号は archive.org の OCR（`_djvu.txt`）のもの。
- ANF・NPNF の巻はすべて `cache/ccel.org/` にある。表の行番号は、その巻で作品の見出しが出る行。
- 権利は、この本の決まりどおり訳者・編者の没年で判断する。没年は archive.org の書誌（creator の欄）で確かめたものだけを書き、書誌にないものは「没年未確認」とした。

### 電子テキストのある本（ギリシア語）

| 作品 | 底本 | 語数 | 英訳 | 備考 |
|---|---|---|---|---|
| アテナゴラス『死者の復活について』 | Otto 編（Jena, 1857）。`tlg1205.tlg002.perseus-grc1` | 約 8,800 | ANF 2（l. 13607） | 既訳の『キリスト者のための弁明』と同じ著者。Otto 1857 は、その本で読み比べに使った版（弁明の底本は March & Owen 1876）。TEI の本文はきれいで、最も手間が少ない |
| エウセビオス『パレスティナの殉教者』（短い形） | Dindorf 編（Teubner, 1871）。`tlg2018.tlg003.1st1K-grc1` | 約 7,900 | NPNF 2-1（l. 43605） | ディオクレティアヌスの迫害の目撃記。『迫害者たちの死について』と同じ時代 |
| オリュンポスのメトディオス『饗宴（十人の乙女）』 | Bonwetsch 編（GCS 27、1917）。`tlg2959.tlg001.opp-grc1` | 約 28,400 | ANF 6（l. 28899） | 対話篇。TEI にはアクセントや文字の読み誤りが残る（印刷版との照合で直す）。同じ版の『自由意志について』（`tlg2959.tlg002`、約 7,300 語、ANF 6 l. 33809）もある |
| ナジアンゾスのグレゴリオス『神学講話』（第 27〜31 講話） | Mason 編（Cambridge, 1899）。`tlg2022.tlg007`〜`tlg011` | 計約 25,300 | NPNF 2-7（l. 31377 から） | 4 世紀の三位一体論の古典。5 講で区切りやすい |
| 助祭マルコス『ガザのポルフュリオス伝』 | ボン大学の文献学会編（Teubner, 1895）。`tlg2806.tlg001.1st1K-grc1` | 約 22,200 | G. F. Hill の英訳（Oxford, 1913、訳者は 1948 年没。archive.org `lifeofporphyrybi00marcuoft`） | 5 世紀初めの聖人伝。TEI は月形のシグマ（ϲ）で書かれ、行末の分綴が残る |
| 『トマス行伝』 | Bonnet 編（1903）。`tlg2038.tlg001.1st1K-grc1` | 約 28,900 | ANF 8（l. 48911、一部の訳） | 外典の使徒行伝。ANF の訳が全体を覆うかは確かめていない。同じ版の『ピリポ行伝』（約 16,200 語）もある |
| アレクサンドリアのクレメンス『教育者』 | Stählin 編（GCS 12、1905）。`tlg0555.tlg002.1st1K-grc1` | 約 57,300 | ANF 2（第 1 巻の見出し l. 7639） | 既訳の『ギリシア人への勧め』と同じ巻。長い |

『ヨハネ行伝』（`tlg0317.tlg001`、Bonnet 1898、約 12,400 語）は、本文がドミティアヌス帝の話から始まる後代の形で、ANF 8 の「Acts of the Holy Apostle and Evangelist John the Theologian」（l. 51095）が同じ部分かは確かめていない。古い行伝の部分をどこまで含むかは確かめていないので、候補には入れていない。First1KGreek の『ニカイア公会議の決定について』（`tlg2035.tlg003`）は、ゲラシオスの教会史に引かれた抜粋だけ（約 1,200 語）で、全文ではない。

目録にはあるが、長いので今回は開いていないもの：エウセビオス『教会史』『コンスタンティヌスの生涯』（英訳は NPNF 2-1）、アタナシオス『アレイオス派駁論』I〜III、偽クレメンス『講話集』、ヒッポリュトス『全異端反駁』。

### スキャンから起こす本

| 作品 | 原語 | 底本 | 英訳 | 備考 |
|---|---|---|---|---|
| キプリアヌス小品集 II（『死を免れぬことについて』『デメトリアヌスへ』『善行と施しについて』『忍耐の益について』『ねたみと嫉妬について』『処女の身なりについて』） | ラテン語 | Hartel 編（CSEL 3.1、1868。`sthascicaecilic00hartgoog`、cache にある）。題は OCR の l. 13794、16171、17164、18257、19177、8998 | ANF 5（l. 46680、45596、47359、48156、48876、42841） | 既訳の小品集の続き。『忍耐の益について』はテルトゥリアヌス『忍耐について』を下敷きにする |
| テルトゥリアヌス小品集 II（『魂の証言について』『スカプラへ』『忍耐について』『悔い改めについて』） | ラテン語 | Oehler 編 I（1853。`quintiseptimiifl0001fanc`、cache にある）。柱の見出しは OCR の l. 49619、65357、71590、78381 ごろから | ANF 3（l. 15845、8665、69862、65143） | 既訳の小品集と同じ底本の巻。キプリアヌス小品集 II の前に訳すと訳語を引き継げる |
| ノウァティアヌス『三位一体について』 | ラテン語 | Fausset 編（Cambridge, 1909。archive.org `novatianiromanae00novauoft`）。本文は OCR の l. 2541 から | ANF 5（l. 61065） | 編者の没年未確認 |
| スルピキウス・セウェルス『マルティヌス伝』 | ラテン語 | Halm 編（CSEL 1、1866。archive.org `sulpiciiseveril00halmgoog`）。OCR の l. 6037 から | NPNF 2-11（l. 212） | 編者 Halm の没年は書誌になく未確認。西方の最初の聖人伝の一つ |
| レランスのウィンケンティウス『備忘録』 | ラテン語 | Jülicher 編（Freiburg, 1895。archive.org `vincenzvonlerin00jlgoog`。編者は 1938 年没）。本文は OCR の l. 794 から | NPNF 2-11（l. 11036） | Moxon 編（Cambridge, 1915。`commonitoriumofv00vinc`）は編者の没年未確認なので使わない。「どこでも、いつも、すべての人に信じられてきたこと」の出典 |
| ニュッサのグレゴリオス『教理大講話』 | ギリシア語 | Srawley 編（Cambridge, 1903。archive.org `TheCatecheticalOrationOf`） | NPNF 2-5（l. 42016） | 編者 Srawley は 1954 年没。同じ版の別のスキャン `thecatecheticalo00greguoft` は、ギリシア語がラテン文字に化けていて使えない |
| ヨアンネス・クリュソストモス『司祭職について』 | ギリシア語 | PG 48（archive.org `patrologiae_cursus_completus_gr_vol_048`）。題は OCR の l. 13294 | NPNF 1-9（第 1 巻の見出し l. 1866） | Nairn 編（Cambridge, 1906。`desacerdotioofst00john`）は編者の没年未確認（書誌は 1874 年生まれとだけ）なので底本にしない。PG 48 のスキャンはギリシア語だけのページが続き、画像は読める |
| アレクサンドリアのディオニュシオスの手紙 | ギリシア語 | Feltoe 編（Cambridge, 1904。archive.org `lettersandother00diongoog`） | ANF 6（l. 7067） | 編者 Feltoe の没年未確認。エウセビオスに引かれた手紙が中心で、断片が多い |
| パトリキウス『告白』 | ラテン語 | White 編（1918。archive.org `librisanctipatr00patr`）。本文は OCR の l. 178 から。編者 White は 1936 年没 | 確かめていない | 保留。権利の切れた英訳を確かめるまで |

PG の 2 冊は、前は「OCR が崩れていて別の底本が要る」としていた。確かめ直したところ、ギリシア語の欄の OCR は、訳し終えたヒッポリュトスの本の底本と同じくらい読める。κ を χ、β を δ と読む崩れはあるが、章や節の番号も拾える。ラテン語訳の欄は崩れているが、使わない。PG 26 と PG 33 のページ画像は IIIF で取れた（leaf 0430、0550）。底本の文は、ヒッポリュトスと同じく画像から起こせばよい。エルサレムのキュリロスの Reischl と Rupp の版（1848〜1860）は、archive.org では見つからなかった。

## 取得済みの資料（2026-11-21）

上の表のために取得したもの。訳し始めるときに、使うものをその本の `research/sources.md` に移す。First1KGreek は `https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/<パス>` から取った（権利は CC BY-SA 4.0、パスは下の表で `F1K/` と略す）。archive.org の OCR は `https://archive.org/download/<識別子>/<識別子>_djvu.txt` から、CCEL は `https://ccel.org/ccel/schaff/<巻>/cache/<巻>.txt` から取った。archive.org と CCEL のものは、どれも 1930 年より前の刊行で、米国ではパブリックドメインである。日本での権利は、上の表の没年で判断する。取得日はすべて 2026-11-21。

| 資料 | `cache/` のパス | SHA-256 先頭 16 桁 |
|---|---|---|
| アテナゴラス『死者の復活について』 | `F1K/tlg1205/tlg002/tlg1205.tlg002.perseus-grc1.xml` | 7cb6b86a31d53cba |
| メトディオス『饗宴』 | `F1K/tlg2959/tlg001/tlg2959.tlg001.opp-grc1.xml` | f578699c791b33d1 |
| メトディオス『自由意志について』 | `F1K/tlg2959/tlg002/tlg2959.tlg002.opp-grc1.xml` | 60a27e8167ca29eb |
| グレゴリオス第 27 講話 | `F1K/tlg2022/tlg007/tlg2022.tlg007.1st1K-grc1.xml` | 79402f377facd3c3 |
| グレゴリオス第 28 講話 | `F1K/tlg2022/tlg008/tlg2022.tlg008.1st1K-grc1.xml` | 79b956726dc1aab5 |
| グレゴリオス第 29 講話 | `F1K/tlg2022/tlg009/tlg2022.tlg009.1st1K-grc1.xml` | 67003661788c7231 |
| グレゴリオス第 30 講話 | `F1K/tlg2022/tlg010/tlg2022.tlg010.1st1K-grc1.xml` | 5231a422100008fc |
| グレゴリオス第 31 講話 | `F1K/tlg2022/tlg011/tlg2022.tlg011.1st1K-grc1.xml` | aa5a3d1ea337680e |
| エウセビオス『パレスティナの殉教者』 | `F1K/tlg2018/tlg003/tlg2018.tlg003.1st1K-grc1.xml` | 45b9f9365f15cc38 |
| 『ヨハネ行伝』 | `F1K/tlg0317/tlg001/tlg0317.tlg001.1st1K-grc1.xml` | 850ce8d4cd88b43d |
| 『トマス行伝』 | `F1K/tlg2038/tlg001/tlg2038.tlg001.1st1K-grc1.xml` | a438ef18808cd8d1 |
| 『ピリポ行伝』 | `F1K/tlg2948/tlg001/tlg2948.tlg001.1st1K-grc1.xml` | d386b19036c97926 |
| アタナシオス『ニカイア公会議の決定について』（抜粋） | `F1K/tlg2035/tlg003/tlg2035.tlg003.1st1K-grc1.xml` | 6ea30be3f2cd5391 |
| クレメンス『教育者』 | `F1K/tlg0555/tlg002/tlg0555.tlg002.1st1K-grc1.xml` | 03e6a03655189105 |
| マルコス『ポルフュリオス伝』 | `F1K/tlg2806/tlg001/tlg2806.tlg001.1st1K-grc1.xml` | 5473f5da33469a59 |
| ANF 6 | `cache/ccel.org/anf06.txt` | cd73917109089536 |
| NPNF 2-5 | `cache/ccel.org/npnf205.txt` | cef974043e48a52d |
| NPNF 2-6 | `cache/ccel.org/npnf206.txt` | 53fb977f33ea3d92 |
| NPNF 2-7 | `cache/ccel.org/npnf207.txt` | 56d84cfa94dee313 |
| NPNF 2-11 | `cache/ccel.org/npnf211.txt` | 8b1206d4e7488c65 |
| NPNF 1-9 | `cache/ccel.org/npnf109.txt` | d6a51d22d996e02c |
| Srawley『教理大講話』の OCR | `cache/archive.org/TheCatecheticalOrationOf/…_djvu.txt` | 9d8f5af77425624f |
| Nairn『司祭職について』の OCR | `cache/archive.org/desacerdotioofst00john/…_djvu.txt` | fa324c04c2be8d5b |
| Feltoe『ディオニュシオスの手紙』の OCR | `cache/archive.org/lettersandother00diongoog/…_djvu.txt` | f9d11760f02965cd |
| Halm、CSEL 1 の OCR | `cache/archive.org/sulpiciiseveril00halmgoog/…_djvu.txt` | c7acde4662f601c8 |
| Moxon『備忘録』の OCR | `cache/archive.org/commonitoriumofv00vinc/…_djvu.txt` | 92278c11b0281ad9 |
| White『パトリキウスの書』の OCR | `cache/archive.org/librisanctipatr00patr/…_djvu.txt` | 146273e01b7b7fd6 |
| Fausset『三位一体について』の OCR | `cache/archive.org/novatianiromanae00novauoft/…_djvu.txt` | 1755326f9199f246 |
| Hill『ポルフュリオス伝』英訳の OCR | `cache/archive.org/lifeofporphyrybi00marcuoft/…_djvu.txt` | e8bbdf93efedc2de |
| PG 48 の OCR | `cache/archive.org/patrologiae_cursus_completus_gr_vol_048/…_djvu.txt` | a8f68c950d55b132 |
| Jülicher『備忘録』の OCR | `cache/archive.org/vincenzvonlerin00jlgoog/…_djvu.txt` | 65af01b501db6ca7 |

## 取得済みの原文（2 世紀）

2 世紀の候補のうち、著作権の切れた原文を `cache/` に集めたもの。訳し始めるときに、使うものをその本の `research/sources.md` に移す。First1KGreek はコミット `ed91552c52530c8f5a3ddf2dd767e899372a804c` から取り、`cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c…/data/` に置いた（下の表では `F1K/` と略す）。archive.org の資料は `cache/archive.org/<識別子>/` に PDF と OCR テキスト（`_djvu.txt`）を置いた。

| 作品 | 資料 | 権利 | URL | `cache/` のパス | SHA-256 先頭 16 桁 | 取得日 |
|---|---|---|---|---|---|---|
| エイレナイオス『異端反駁』第一巻のギリシア語の部分 | First1KGreek。Harvey 編（Cambridge, 1857）の電子化。OCR の崩れが残る | CC BY-SA 4.0 | 同上の `data/tlg1447/tlg001/tlg1447.tlg001.1st1K-grc1.xml` | `F1K/tlg1447/tlg001/tlg1447.tlg001.1st1K-grc1.xml` | bbbc779f0d9d2372 | 2026-10-31 |

ほかの 2 世紀の候補は、使徒教父文書を訳すときに集めた資料に原文がある。記録はそれぞれの本の `research/sources.md` にある。

| 作品 | 資料 | `cache/` のパス | SHA-256 先頭 16 桁 | 記録 |
|---|---|---|---|---|
| エイレナイオス『異端反駁』 | A. Stieren 編、エイレナイオス著作集 I（1853）、W. W. Harvey 編、『異端反駁』II（1857） | `cache/archive.org/sanctiirenaeiepi0001adol/…_djvu.txt`、`cache/archive.org/sanctiirenaeiep00harvgoog/…_djvu.txt` | Stieren d0da8989e131b1cf、Harvey e979a60b1084394a | 同上 |

## 資料

- ギリシア語：[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（CC BY-SA 4.0。収録作品は個別に確かめる）、archive.org にある 19 世紀〜20 世紀初めの校訂本のスキャン。
- ラテン語：archive.org の校訂本のスキャン。The Latin Library や Tertullian.org の本文は依拠した版を示さないので、底本にはせず、語数の見積もりや読み比べにだけ使う。
- Bibliothek der Kirchenväter はドイツ語訳の集成で、原文の入手先には使えない。英訳のない作品の読み比べには使える（『祈りについて』『殉教の勧め』）。
