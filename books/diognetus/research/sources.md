# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：Open Apostolic Fathers（Tauber & Macdonald 2019、Lake の本文を校正）のディオグネトスへの手紙 | CC BY-SA 4.0 | https://github.com/jtauber/apostolic-fathers （コミット a07f920） | `cache/open-apostolic-fathers/texts/015-diognetus.txt` | 553124dac888a6aa | 2026-10-25 |
| Kirsopp Lake, The Apostolic Fathers II（Loeb、1913）。底本の印刷版。脚注に異読。ディオグネトスの序論は djvu l. 16335 から、本文と英訳は l. 17900 ごろまで（左にギリシア語、右に英訳のページが交互に並ぶ）。ディオグネトスのページ画像は `cache/archive.org/apostolicfathers02lakeuoft/pages/n359.jpg`〜`n387.jpg`（印刷ページ＋9、URL は https://archive.org/download/apostolicfathers02lakeuoft/page/n<番号>.jpg） | パブリックドメイン | https://archive.org/details/apostolicfathers02lakeuoft | `cache/archive.org/apostolicfathers02lakeuoft/apostolicfathers02lakeuoft_djvu.txt` | 1ea361f1fb6bc6a6 | 2026-10-26 |
| J. B. Lightfoot & J. R. Harmer, The Apostolic Fathers（1891）。ディオグネトスの序論（djvu l. 27185–27268 ごろ）、本文（l. 27269–27972）、英訳（l. 27973–28380 ごろ） | パブリックドメイン | https://archive.org/details/a590752000clemuoft | `cache/archive.org/a590752000clemuoft/a590752000clemuoft_djvu.txt` | 20b617bbbad2fc61 | 2026-10-25 |
| O. von Gebhardt & A. Harnack, Barnabae epistula graece et latine（Patrum apostolicorum opera I.2、第 2 版、1878）。ディオグネトスの序論（ラテン語、djvu l. 17208–18153）、本文と校注（l. 18154–18770） | パブリックドメイン | https://archive.org/details/barnabaeepistul00gebhgoog | `cache/archive.org/barnabaeepistul00gebhgoog/barnabaeepistul00gebhgoog_djvu.txt` | dcd370d6707994c8 | 2026-10-26 |
| J. C. Th. von Otto, Corpus apologetarum christianorum saeculi secundi III（Iustini opera addubitata、第 3 版、1879）。Reuss が 1861 年に写本を照合し直した結果（注で R）を載せる。ディオグネトスの序論（djvu l. 1550–1610、写しと照合について l. 483–1000）、本文・ラテン語訳・注（l. 15500–20420）。archive.org のメタデータの年（1969）は複製の年で、本は 1879 年版 | パブリックドメイン | https://archive.org/details/corpusapologeta00moragoog | `cache/archive.org/corpusapologeta00moragoog/corpusapologeta00moragoog_djvu.txt` | 8909f1bbaf76c2e6 | 2026-10-26 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
