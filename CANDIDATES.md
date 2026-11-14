# 翻訳候補

ギリシア語・ラテン語の原文から訳す初期キリスト教文献の候補。2026-10-25 に検討した。訳し始めたら `books/` に本を作り、ここの状態を「翻訳中」にする。

## 2 世紀の弁証文学・説教・殉教文学

| 作品 | 原語 | 備考 |
|---|---|---|
| サルディスのメリトン『過越について』 | ギリシア語 | 保留。1940 年に見つかった作品で、権利の切れた校訂本も英訳もない |

## 3 世紀

2026-11-13 に原文と英訳の所在を確かめた（ダウンロードはしていない）。「電子テキスト」は First1KGreek の TEI（CC BY-SA 4.0）があり、底本テキストをそこから作れる本。「スキャン」は印刷版の画像から起こす本。語数は原文のおよその数。

| 作品 | 原語 | 備考 |
|---|---|---|
| オリゲネス『祈りについて』 | ギリシア語 | 電子テキスト：Koetschau 編 GCS『オリゲネス著作集』第 2 巻（1899）、`tlg2042.tlg008.perseus-grc1`。約 28,000 語。ANF にはない。CCEL に W. A. Curtis の英訳があり、CCEL は Public Domain と表示するが、刊行年と訳者の没年は未確認 |
| オリゲネス『殉教の勧め』 | ギリシア語 | 電子テキスト：Koetschau 編 GCS 第 1 巻（1899）、`tlg2042.tlg007.perseus-grc1`。約 12,000 語。権利の切れた英訳は見つからない |
| オリゲネス『グレゴリオスへの手紙』 | ギリシア語 | 電子テキスト：Robinson 編『フィロカリア』（1893）、`tlg2042.tlg019.1st1K-grc1` の 13 章。1 ページで終わる短さ。英訳は ANF 第 4 巻 |
| テルトゥリアヌス『護教論』 | ラテン語 | スキャン：Oehler 編、著作集第 1 巻（1853、archive.org `quintiseptimiifl0001fanc`）。OCR は読める。約 20,000 語。英訳は ANF 第 3 巻 |
| テルトゥリアヌス『殉教者たちへ』『見世物について』『祈りについて』『洗礼について』 | ラテン語 | スキャン：同じ Oehler 第 1 巻に 4 作とも載る。約 1,500・6,500・4,700・4,500 語。英訳は ANF 第 3 巻 |
| キプリアヌス『ドナトゥスへ』『教会の一致について』『主の祈りについて』『背教者について』 | ラテン語 | スキャン：Hartel 編 CSEL 3.1（1868、archive.org `sthascicaecilic00hartgoog`）。OCR は読める。英訳は ANF 第 5 巻 |
| ヒッポリュトス『キリストと反キリストについて』 | ギリシア語 | スキャン：Achelis 編 GCS『ヒッポリュトス著作集』第 1 巻第 2 分冊（1897）。`cache/archive.org/hippolytuswerke01hipp/` に OCR がある。英訳は ANF 第 5 巻 |

## 4 世紀以降

| 作品 | 原語 | 備考 |
|---|---|---|
| アタナシオス『アントニオス伝』 | ギリシア語 | スキャン：PG 26（archive.org `patrologiae_cursus_completus_gr_vol_026`）。ギリシア語の OCR は使えるが κ を χ と読む崩れが多い。約 20,000 語。英訳は NPNF 第 2 集第 4 巻。既訳の『神のことばの受肉』と同じ著者 |
| エルサレムのキュリロス『秘義教話』 | ギリシア語 | 5 講と短い。スキャン：PG 33（archive.org `patrologiae_cursus_completus_gr_vol_033`）。OCR の崩れは『アントニオス伝』と同じ。英訳は NPNF 第 2 集第 7 巻 |
| ラクタンティウス『迫害者たちの死について』 | ラテン語 | スキャン：Brandt & Laubmann 編 CSEL 27.2（1897、archive.org `operaomniaacced01laubgoog`）。約 11,000 語。英訳は ANF 第 7 巻 |

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
- Bibliothek der Kirchenväter はドイツ語訳の集成で、原文の入手先には使えない。
