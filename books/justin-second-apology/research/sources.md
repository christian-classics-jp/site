# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。`F1K/` は `cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/` の略。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：First1KGreek の『第二弁明』。G. Rauschen 編、S. Iustini apologiae duae（Florilegium patristicum II、第 2 版、Bonn, 1911）の電子化。これを `tei2labeled.py --split` で `research/rauschen-1911.txt` にした | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml | `F1K/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml` | ac7938667236b747 | 2026-10-31 |
| Rauschen 1911 のスキャン（底本の印刷版）。左のページにギリシア語、右のページにラテン語訳、下にラテン語の注（異読と解説）。序論（Prolegomena）の第二弁明の章の順序の説明は djvu l. 568–620。第二弁明の本文は印刷 pp. 115–135（djvu l. 5839–6890 ごろ）。序文（l. 403–405）によれば、第 2 版は章の順序をパリ写本（Paris. gr. 450）の順に保つ。序論や注の「al.」は、ほかの刊本の章番号。本文の校訂では主に Otto と Krüger に従う（l. 412–413）。略号は l. 682–686（E＝エウセビオス、Kr＝Krüger 第 3 版、O＝Otto 第 3 版、P＝パリ写本） | パブリックドメイン（米国、1911 年刊） | https://archive.org/details/siustiniapologia00just | `cache/archive.org/siustiniapologia00just/siustiniapologia00just.pdf`、`…_djvu.txt` | PDF abaaaf0d80e57f5a、txt ac521ee8561f8f9c | 2026-10-31 |
| A. Roberts & J. Donaldson 編、Ante-Nicene Fathers 第 1 巻（CCEL の電子テキスト）。『第二弁明』の英訳は l. 16613–17140 ごろ。章の順序は Rauschen 以前の刊本の順で、Rauschen の 3〜7 章が ANF の IV〜VIII 章、Rauschen の 8 章が ANF の III 章にあたる | パブリックドメイン | https://ccel.org/ccel/schaff/anf01.txt | `cache/ccel.org/anf01.txt` | ee9c7f0ac3f4df08 | 2026-10-31 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
