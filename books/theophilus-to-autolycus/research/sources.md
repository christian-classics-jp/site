# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。`F1K/` は `cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/` の略。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：First1KGreek の『アウトリュコスへ』（grc2）。J. C. T. von Otto 編、Corpus apologetarum Christianorum saeculi secundi VIII（Jena, 1861）の電子化。巻と章だけで節の区分はない。これを `tei2labeled.py --split` で `research/otto-1861.txt` にした | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1725/tlg001/tlg1725.tlg001.perseus-grc2.xml | `F1K/tlg1725/tlg001/tlg1725.tlg001.perseus-grc2.xml` | b190660e17566298 | 2026-10-31 |
| 読み比べ：First1KGreek の『アウトリュコスへ』（grc1）。W. G. Humphry 編（Cambridge, 1852）の電子化。章の番号は底本と同じ | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1725/tlg001/tlg1725.tlg001.perseus-grc1.xml | `F1K/tlg1725/tlg001/tlg1725.tlg001.perseus-grc1.xml` | 0b4a6d70231ac71a | 2026-10-31 |
| 底本の印刷版：Otto 編、Corpus apologetarum VIII（Jena, 1861）のスキャン（archive.org のメタデータの年 1851 は誤りで、扉は MDCCCLXI）。ギリシア語本文とラテン語訳が上下に並び、下に異読と注がある。第一巻の本文は djvu l. 3770 から、第二巻は l. 7276、第三巻は l. 20340。ギリシア語の OCR は崩れている。`_page_numbers.json` のページ付けは乱れているので引かない | パブリックドメイン（1861 年刊） | https://archive.org/details/corpusapologeta00unkngoog | `cache/archive.org/corpusapologeta00unkngoog/corpusapologeta00unkngoog.pdf`、同 `_djvu.txt`、同 `_page_numbers.json` | PDF ed81ef00972814eb、djvu 0918dc67386091c5、page_numbers c79e932dde6ee49b | 2026-11-01 |
| A. Roberts & J. Donaldson 編、Ante-Nicene Fathers 第 2 巻（CCEL の電子テキスト）。M. Dods の英訳「Theophilus to Autolycus」は l. 7635–10600 ごろ（第一巻は l. 7639、第二巻は l. 8115、第三巻は l. 10176 から）。レビューで読み比べに使う | パブリックドメイン | https://ccel.org/ccel/schaff/anf02.txt | `cache/ccel.org/anf02.txt` | ae8e15414a21fe8d | 2026-10-31 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
