# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：F. X. Funk, Patres apostolici I（第 2 版、1901）。パピアスの序論は djvu l. 5484〜5620、断片の本文と校注・注は l. 29272〜31686（pp. 346〜375）、クアドラトゥスの断片は l. 31687〜31767（pp. 376〜377）。本文は 2 段組の注の上にあり、OCR は注と混じるので、本文はスキャン画像から起こす | パブリックドメイン | https://archive.org/details/patresapostolic00piongoog | `cache/archive.org/patresapostolic00piongoog/patresapostolic00piongoog_djvu.txt` | 1e293829537e1509 | 2026-10-31 |
| 同上のスキャン画像（印刷ページ＋162 が画像番号。p. 343 は n505、断片 I は p. 346〜348 で n508〜n510、断片 II の始まりは p. 349 で n511） | パブリックドメイン | https://archive.org/download/patresapostolic00piongoog/page/n508.jpg?scale=6 （同じく n505、n509〜n511） | `cache/archive.org/patresapostolic00piongoog/pages/n508.jpg` ほか | n505 37ededc2aa0358ae、n508 a1e43c47ec44fb8d、n509 0a4664ae5e103b6b、n510 8583255d88942019、n511 1879d01f9a041f20 | 2026-10-31 |
| 同上の別のスキャン（OCR の読み比べ用） | パブリックドメイン | https://archive.org/details/patresapostolic00papigoog | `cache/archive.org/patresapostolic00papigoog/patresapostolic00papigoog_djvu.txt` | 82a9d1b394565201 | 2026-10-31 |
| 底本のテキスト：上のスキャン画像から起こしたもの。ラベルは 断片.節（クアドラトゥスは Q.節） | パブリックドメイン | — | `books/papias-quadratus/research/funk-1901.txt`（リポジトリ内） | — | 2026-10-31 |
| J. B. Lightfoot & J. R. Harmer, The Apostolic Fathers（1891）。パピアスの断片 I〜XX の本文（djvu l. 28423〜29078、pp. 515〜524。番号は底本と違う）と英訳（l. 29079 から、pp. 527〜535） | パブリックドメイン | https://archive.org/details/a590752000clemuoft | `cache/archive.org/a590752000clemuoft/a590752000clemuoft_djvu.txt` | 20b617bbbad2fc61 | 2026-10-25 |
| Kirsopp Lake, Eusebius: The Ecclesiastical History I（Loeb、1926）。『教会史』一〜五巻の本文と英訳。クアドラトゥスの断片（四・三）は djvu l. 16868〜16950（pp. 306〜309）。ギリシア語の OCR はラテン文字に化けていて読めないので、本文はスキャン画像で見る | パブリックドメイン（米国、1926 年刊。Lake は 1946 年没） | https://archive.org/details/eusebiusecclesia0000euse_y3f7 | `cache/archive.org/eusebiusecclesia0000euse_y3f7/eusebiusecclesia0000euse_y3f7_djvu.txt` | 36ec3b9bffb228a7 | 2026-10-31 |

archive.org の資料は OCR テキスト（`_djvu.txt`）。ギリシア語の OCR は崩れていることが多いので、読みを確かめるときはスキャン画像も見る。
