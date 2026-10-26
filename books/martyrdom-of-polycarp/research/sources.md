# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：Open Apostolic Fathers（Tauber & Macdonald 2019、Lake の本文を校正）のポリュカルポスの殉教 | CC BY-SA 4.0 | https://github.com/jtauber/apostolic-fathers （コミット a07f920） | `cache/open-apostolic-fathers/texts/014-martyrdom.txt` | 704d0e064a16896d | 2026-10-25 |
| Kirsopp Lake, The Apostolic Fathers II（Loeb、1913）。底本の印刷版。脚注に異読。殉教伝の序論は djvu l. 14555–14700 ごろ、本文と英訳は l. 14700–16333 | パブリックドメイン | https://archive.org/details/apostolicfathers02lakeuoft | `cache/archive.org/apostolicfathers02lakeuoft/apostolicfathers02lakeuoft_djvu.txt`（ギリシア語のページ画像は `cache/archive.org/apostolicfathers02lakeuoft/pages/n<印刷ページ＋9>.jpg`、p. 312〜344 の偶数ページ） | 1ea361f1fb6bc6a6 | 2026-10-26 |
| J. B. Lightfoot & J. R. Harmer, The Apostolic Fathers（1891）。殉教伝の序論（djvu l. 10526–10675）、本文（l. 10676–11410 ごろ）、英訳（l. 11411–11830） | パブリックドメイン | https://archive.org/details/a590752000clemuoft | `cache/archive.org/a590752000clemuoft/a590752000clemuoft_djvu.txt` | 20b617bbbad2fc61 | 2026-10-25 |
| J. B. Lightfoot, The Apostolic Fathers, Part II: S. Ignatius, S. Polycarp, vol. 3（第 2 版、1889）。スミルナ人の手紙の序論（p. 353–362、djvu l. 26446–26918 ごろ）、本文と校注・注解（p. 363–404、l. 26919–32228）、アジヤ祭司長職の付論（p. 404–415、l. 32229–32800 ごろ）、英訳（p. 477–487、l. 37484–37925） | パブリックドメイン | https://archive.org/details/apostolicfathers0203clem | `cache/archive.org/apostolicfathers0203clem/apostolicfathers0203clem_djvu.txt`（ページ画像は `cache/archive.org/apostolicfathers0203clem/pages/n<印刷ページ＋11>.jpg`、p. 353〜415） | 866fe2447d45f146 | 2026-10-26 |
| J. B. Lightfoot, The Apostolic Fathers, Part II: S. Ignatius, S. Polycarp, vol. 1（第 2 版、1889）。スミルナ人の手紙の真正性・付記・偽ピオニオス（p. 604–645、djvu l. 38094–40480）、殉教の年と日（p. 646–722、l. 40486 以下。2 月 23 日と Μαρτίων は l. 42300–42345、155 年は l. 41948–41980、「大いなる安息日」は l. 44355–44470） | パブリックドメイン | https://archive.org/details/apostolicfathers0201clem | `cache/archive.org/apostolicfathers0201clem/apostolicfathers0201clem_djvu.txt` | 789446edf726fd7a | 2026-10-26 |
| H. B. Swete, The Old Testament in Greek according to the Septuagint I（1896）。ヨシュア一・六（l. 40793） | パブリックドメイン | https://archive.org/details/oldtestamentingr01swetuoft | `cache/archive.org/oldtestamentingr01swetuoft/oldtestamentingr01swetuoft_djvu.txt` | ec01d2d2ff795aa3 | 2026-10-26 |
| H. B. Swete, The Old Testament in Greek according to the Septuagint III（1896）。イザヤ六四・三〜四（l. 21464–21466）、六五・一六（l. 21705–21706） | パブリックドメイン | https://archive.org/details/theoldtestamenti03swetuoft | `cache/archive.org/theoldtestamenti03swetuoft/theoldtestamenti03swetuoft_djvu.txt` | 4f7fa262c0637272 | 2026-10-26 |
| 口語訳聖書（1955 年版）の本文。FujiHaruka/bible-api の `mysql/sql/create-table.sql.tar.gz` | 1955 年版の本文のみ（日本聖書協会が後に訂正した語句は含まない） | https://github.com/FujiHaruka/bible-api | `../bible-api/mysql/sql/create-table.sql.tar.gz`（リポジトリの外） | 2961c5ac10691409 | 2026-10-26 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
