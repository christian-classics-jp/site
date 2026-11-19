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

## 4 世紀以降

| 作品 | 原語 | 備考 |
|---|---|---|
| アタナシオス『アントニオス伝』 | ギリシア語 | スキャン：PG 26（archive.org `patrologiae_cursus_completus_gr_vol_026`）。ギリシア語の OCR は使えるが κ を χ と読む崩れが多い。約 20,000 語。英訳は NPNF 第 2 集第 4 巻。既訳の『神のことばの受肉』と同じ著者 |
| エルサレムのキュリロス『秘義教話』 | ギリシア語 | 5 講と短い。スキャン：PG 33（archive.org `patrologiae_cursus_completus_gr_vol_033`）。OCR の崩れは『アントニオス伝』と同じ。英訳は NPNF 第 2 集第 7 巻 |
| ラクタンティウス『迫害者たちの死について』 | ラテン語 | 翻訳中（`books/lactantius-deaths-of-persecutors/`）。スキャン：Brandt & Laubmann 編 CSEL 27.2（1897、archive.org `operaomniaacced01laubgoog`）。約 11,000 語。英訳は ANF 第 7 巻 |

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
