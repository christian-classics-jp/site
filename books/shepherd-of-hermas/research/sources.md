# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：Open Apostolic Fathers（Tauber & Macdonald 2019、Lake の本文を校正）のヘルマスの牧者。ラベルは 巻.章.節（1〜5＝幻 1〜5、6〜17＝戒め 1〜12、18〜27＝たとえ 1〜10）。26.30.3 から後はラテン語訳だけが残り、26.30.3〜26.30.5 は一つの節にギリシア語とラテン語が混じる。27（たとえ 10）はラテン語だけ | CC BY-SA 4.0 | https://github.com/jtauber/apostolic-fathers （コミット a07f920） | `cache/open-apostolic-fathers/texts/013-shepherd.txt` | d4db4e12c35aeb62 | 2026-10-25 |
| Kirsopp Lake, The Apostolic Fathers II（Loeb、1913）。底本の印刷版。脚注に異読。ヘルマスの序論は djvu l. 368〜580（本文の資料は l. 454〜540）、本文と英訳は l. 588 から（左にギリシア語、右に英訳のページが交互に並ぶ）。柱の `THE SHEPHERD, vis./mand./sim.` で箇所を探す（幻 1 は l. 588〜1200 ごろ、戒め 1 は l. 3817 から） | パブリックドメイン | https://archive.org/details/apostolicfathers02lakeuoft | `cache/archive.org/apostolicfathers02lakeuoft/apostolicfathers02lakeuoft_djvu.txt` | 1ea361f1fb6bc6a6 | 2026-10-26 |
| J. B. Lightfoot & J. R. Harmer, The Apostolic Fathers（1891）。ヘルマスの序論（djvu l. 15833 から）、本文（l. 16096 から。たとえは l. 19254 から）、英訳（幻 1 は l. 23434、戒めは l. 24214 から） | パブリックドメイン | https://archive.org/details/a590752000clemuoft | `cache/archive.org/a590752000clemuoft/a590752000clemuoft_djvu.txt` | 20b617bbbad2fc61 | 2026-10-25 |
| O. von Gebhardt & A. Harnack, Hermae Pastor graece（Patrum apostolicorum opera III、1877）。序論・本文・校注。OCR はラテン語までギリシア文字に化けていて、ほぼ読めない。使うときはスキャン画像を見る | パブリックドメイン | https://archive.org/details/patrumapostolic00zahngoog | `cache/archive.org/patrumapostolic00zahngoog/patrumapostolic00zahngoog_djvu.txt` | 80d2414fa3a71ff5 | 2026-10-26 |
| A. Hilgenfeld, Hermae Pastor graece（1881）。本文と校注。幻 1 の本文は djvu l. 5236、校注は l. 5258 から。ギリシア語の OCR は一部読める | パブリックドメイン | https://archive.org/details/hermaepastorgrc00lxgoog | `cache/archive.org/hermaepastorgrc00lxgoog/hermaepastorgrc00lxgoog_djvu.txt` | f4e369da7c3bfbd7 | 2026-10-26 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る（Lake のページ画像は https://archive.org/download/apostolicfathers02lakeuoft/page/n<番号>.jpg）。
