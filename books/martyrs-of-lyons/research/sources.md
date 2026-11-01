# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。`F1K/` は `cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/` の略。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：First1KGreek のエウセビオス『教会史』（grc2）。W. Dindorf 編、Eusebii Caesariensis opera IV（Teubner、Leipzig, 1871）の電子化。巻・章・節がある。これを `tei2labeled.py`（`--split` なし）でラベル付きの行にし、第五巻の行だけを `research/dindorf-1871.txt` に残した。第五巻の序は `5.0.1`〜`5.0.4` | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc2.xml | `F1K/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc2.xml` | 3f7f534493037f79 | 2026-10-31 |
| 読み比べ：First1KGreek のエウセビオス『教会史』（grc1）。K. Lake 編（Loeb、1926）の電子化。本文は Schwartz の校訂に拠る。第五巻の章の中に節の区切りがなく（節の番号が行番号のタグに入っている）、OCR の誤り（σ を α と読むなど）も多いので、底本にしなかった。第五巻の章の一覧（κεφάλαια）は、この版では `5.0` に入っている。余白に聖書の引用・暗示の箇所が注記されている（`<note type="marginal">`） | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc1.xml | `F1K/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc1.xml` | 604f7f4866815cf2 | 2026-10-31 |
| 底本の印刷版：Dindorf 1871 のスキャン（Google がミシガン大学の蔵書をデジタル化したもの）。扉に VOL. IV、HISTORIAE ECCLESIASTICAE、MDCCCLXXI。第五巻の序は p. 182（djvu l. 10111）、五・一・一は p. 183（l. 10152）から。ページ画像は `https://archive.org/download/eusebiicaesarie00dindgoog/page/n{番号}.jpg`（番号＝印刷ページ＋60。p. 182 が n242）。底本には異読の注がなく、ページの下に聖書の箇所だけを載せる | パブリックドメイン（1871 年刊） | https://archive.org/details/eusebiicaesarie00dindgoog | `cache/archive.org/eusebiicaesarie00dindgoog/eusebiicaesarie00dindgoog.pdf`、同 `_djvu.txt`、同 `_page_numbers.json` | PDF 7d088a175dc1c72a、djvu 2b2fcc92d12803d6、page_numbers 16951711e0988124 | 2026-11-01 |
| E. Schwartz 編、エウセビオス『教会史』一〜五巻（Eusebius Werke II/1、GCS、1903）。本文の下に異読の注、向かいのページにルフィヌスのラテン語訳がある。五・一・一〜六は p. 402（djvu l. 23479 から） | パブリックドメイン（米国、1903 年刊） | https://archive.org/details/p1eusebiuswerke02euse | `cache/archive.org/p1eusebiuswerke02euse/p1eusebiuswerke02euse_djvu.txt` | f47c0f5d02110f4f | 2026-10-31 |
| A. C. McGiffert 訳、Eusebius: Church History（Nicene and Post-Nicene Fathers, Second Series I、1890）の CCEL の電子テキスト。第五巻の序は l. 24585、一章は l. 24694 から。レビューで読み比べに使う | パブリックドメイン | https://ccel.org/ccel/s/schaff/npnf201/cache/npnf201.txt | `cache/ccel.org/npnf201.txt` | b9104097771d6f5c | 2026-11-01 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
