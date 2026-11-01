# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。`F1K/` は `cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/` の略。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：First1KGreek の『ギリシヤ人への演説』。J. C. T. von Otto 編、Corpus apologetarum Christianorum saeculi secundi VI（Jena, 1851）の電子化。章だけで節の区分はない。これを `tei2labeled.py --split` で `research/otto-1851.txt` にした | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1766/tlg001/tlg1766.tlg001.perseus-grc1.xml | `F1K/tlg1766/tlg001/tlg1766.tlg001.perseus-grc1.xml` | bfe1671160c91555 | 2026-10-31 |
| E. Schwartz 編、Tatiani Oratio ad Graecos（Texte und Untersuchungen IV, 1、Leipzig, 1888）。TU 4〜5 の合本。写本の略号（M＝Mutinensis III D 7、P＝Parisinus 174、V＝Marcianus 343、Eusebius の写本）は djvu l. 420–455。本文は l. 459 から（ページの余白に Otto のページ）。1〜4 章は l. 461–673、5 章は l. 674 から。本文の下に聖書の参照と異読の注がある。印刷 p. 3 はスキャンの n20 | パブリックドメイン（1888 年刊） | https://archive.org/details/texteundunter04v5akad | `cache/archive.org/texteundunter04v5akad/texteundunter04v5akad_djvu.txt`（`_page_numbers.json` も同じ場所） | 2a4a1793d70f7c47 | 2026-10-31 |
| A. Roberts & J. Donaldson 編、Ante-Nicene Fathers 第 2 巻（CCEL の電子テキスト）。J. E. Ryland の英訳「Address of Tatian to the Greeks」は l. 5642–7400 ごろ（1〜4 章は l. 5646–5823、5 章は l. 5824 から、42 章は l. 7372 から）。レビューで読み比べに使う | パブリックドメイン | https://ccel.org/ccel/schaff/anf02.txt | `cache/ccel.org/anf02.txt` | ae8e15414a21fe8d | 2026-10-31 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
