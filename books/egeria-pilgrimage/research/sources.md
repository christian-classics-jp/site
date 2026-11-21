# 資料

訳と調査に使った資料。ファイルはリポジトリの `cache/`（git 管理外）に置く。取得し直すときは URL から同じ場所に保存し、SHA-256 の先頭 16 桁で同じものか確かめる。

| 資料 | 権利 | URL | cache のパス | SHA-256（先頭 16 桁） | 取得日 |
|---|---|---|---|---|---|
| 底本：P. Geyer 編、Itinera Hierosolymitana saeculi IIII–VIII（Corpus Scriptorum Ecclesiasticorum Latinorum 39、Wien: F. Tempsky, 1898）の OCR テキスト。この作品の題は S. SILVIAE, QVAE FERTVR, PEREGRINATIO AD LOCA SANCTA（l. 4779〜4780）、写本の略号は A＝cod. Arretinus s. XI（l. 4783）。本文は冒頭が欠け、(MVLTA DESVNT) の後の l. 4790（1.1 ostendebantur iuxta scripturas）から、l. 7852（49.3 Quarta autem die で切れる）まで。印刷の pp. 37〜101。すぐ後（l. 7859〜）は Petrus Diaconus の Liber de locis sanctis で、訳さない。各ページの上が本文（奇数ページは右の欄外に章と節の番号、左の欄外に 5 行ごとの行番号。偶数ページは左右が逆）、その下に聖書の箇所、その下に校注。章の番号は太字の数字、節の番号は普通の数字で、OCR では区別がつかず、太字の数字はよく崩れる（3 章が H、6 章が (>、40 章が iO など）。各章の始まりの行は下の「章の始まり」の表 | パブリックドメイン（編者 Geyer は 1852 年生まれ。archive.org の別の資料 `kritischebemerku00geyeuoft` の書誌に Geyer, Paul, b. 1852。没年は見つからないが、生年から日本でも権利は切れている） | https://archive.org/download/itinerahierosoly00geye/itinerahierosoly00geye_djvu.txt | `cache/archive.org/itinerahierosoly00geye/itinerahierosoly00geye_djvu.txt` | 45d4f2dbf2e85dd7 | 2026-11-21 |
| 同上の印刷ページ番号の対応表。leafNum 93＝p. 37（ここから IIIF の番号＝印刷ページ＋56 と推定した。IIIF の画像では確かめていない）。archive.org のページ画像 `page/nN_w1600.jpg` の N は IIIF の番号より 1 小さい（n92＝p. 37、n93＝p. 38 を画像で確かめた） | パブリックドメイン | https://archive.org/download/itinerahierosoly00geye/itinerahierosoly00geye_page_numbers.json | `cache/archive.org/itinerahierosoly00geye/itinerahierosoly00geye_page_numbers.json` | cc3aa3262a1c027f | 2026-11-21 |
| 同上のページ画像。`node tools/fetch.js https://archive.org/download/itinerahierosoly00geye/page/nN_w1600.jpg cache/archive.org/itinerahierosoly00geye/page/nN_w1600.jpg` で取る。本を始めたときに、n92〜n96（pp. 37〜41。1〜3 章を起こした）、n100（p. 45。6 章の始まりの太字の 6 を確かめた）、n119（p. 64。19 章の 15〜19 節と、20 章の始まりの太字の 20 を確かめた）を読んだ。1〜3 章で OCR と違ったところは、写本のページの印（[31]、2]、[33]）と縦線、行番号の混入（io、ao）、語の読み誤り（infmitam→infinitam、Mc→hic、ioco→loco、iu→in、cle→de、Mnc→hinc、Syjia→Syna、m→in、exiremns→exiremus、Egyptom→Egyptum、Parthenieum→Parthenicum、Dobis→nobis、dernonstrabant→demonstrabant）、句読点（2.3 の sunt,、2.5 の sunt, と appellatur;、2.6 の sunt,、2.7 の Domini, と uides,、3.8 の montes, と stabamus, と colliculi, と Alexandriam, と possit;）。2.3 の quae（OCR も quae）は e の字がかすれて quac にも見えるが、quae と読んだ。2.6 の uidisse は i の上に点が二つ見える字の傷で、uidisse と読んだ | パブリックドメイン | https://archive.org/download/itinerahierosoly00geye/page/n92_w1600.jpg（ほかも同じ形） | `cache/archive.org/itinerahierosoly00geye/page/n92_w1600.jpg` ほか | n92 085847f61b3404ce、n93 eccc4c5ae4a46e25、n94 10b2f98f41925353、n95 4ce746f876282a1b、n96 e809b3545565815c、n100 228ede33be466e75、n119 57a090778ac2f4b6 | 2026-11-21 |
| 英訳：J. H. Bernard 訳、The Pilgrimage of S. Silvia of Aquitania to the Holy Places (circ. 385 A.D.)（The Library of the Palestine Pilgrims' Text Society 1、London, 1896 の刊。英訳の序の脚注は November, 1890 と記す）の OCR。英訳の扉 l. 7685、序 l. 7735〜、本文は l. 8034（....were shown according to the Scriptures）から l. 11166（And on the fourth day . . .）まで。続く l. 11170 からは英訳の底にしたラテン語本文（S. SILVIAE AQVITANAE PEREGRINATIO AD LOCA SANCTA）。英訳は Gamurrini の本文（1887、1888）から訳したもので、序は Geyer の Kritische Bemerkungen（1890）の推定にも触れる（l. 8024〜8028）。章と節の番号はなく、欄外に小見出しと写本のページ番号がある。底本の 16 章と 25 章の葉の欠けは、英訳では l. 9061 と l. 9806 の [A leaf wanting] | パブリックドメイン（訳者 John Henry Bernard は 1860〜1927 年。トリニティ・カレッジ・ダブリンの歴代学長のページ https://www.tcd.ie/provost/biography/former-provosts/john-henry-bernard-/ と、1927 年 9 月 3 日の The Spectator の訃報。archive.org の書誌も NOT_IN_COPYRIGHT） | https://archive.org/download/libraryofpalesti01paleuoft/libraryofpalesti01paleuoft_djvu.txt | `cache/archive.org/libraryofpalesti01paleuoft/libraryofpalesti01paleuoft_djvu.txt` | c94bfb01de6d880b | 2026-11-21 |
| 同上の印刷ページ番号の対応表 | パブリックドメイン | https://archive.org/download/libraryofpalesti01paleuoft/libraryofpalesti01paleuoft_page_numbers.json | `cache/archive.org/libraryofpalesti01paleuoft/libraryofpalesti01paleuoft_page_numbers.json` | 1920b5652ff3d464 | 2026-11-21 |
| M. L. McClure と C. L. Feltoe 編、The Pilgrimage of Etheria（London: SPCK, 1919）の OCR。序の 2 節（l. 424〜）によれば、訳文はエルサレムの部分を McClure が兄弟の George Herbert 牧師の助けを得て訳し（1904）、残りを Herbert が訳したもので、脚注の多くは McClure、一部は Feltoe が書いた。McClure は 1918 年没（序 l. 447〜451）、Feltoe は 1926 年没（CCEL の著者ページ）だが、Herbert の没年は見つからなかった。著作権が切れているとは確かめられないので、訳出でもレビューでも訳文を読まず、`cache/` に置くだけにする。序の事実（著者の名と出身についての諸説、l. 106〜200）は README と intro.md を書くときに参照した | 訳文の著作権は未確認（Herbert の没年が不明） | https://archive.org/download/pilgrimageofethe00mccliala/pilgrimageofethe00mccliala_djvu.txt | `cache/archive.org/pilgrimageofethe00mccliala/pilgrimageofethe00mccliala_djvu.txt` | 81386cbed0938819 | 2026-11-21 |

## 章の始まり

底本の OCR（`itinerahierosoly00geye_djvu.txt`）で各章が始まる行と印刷ページ。太字の章番号が OCR で崩れたものは、節の番号が 2 に戻る位置と本文から決めた。6 章と 20 章は画像で確かめた。ほかの章はページを起こすときに画像で確かめる。

| 章 | 行 | 頁 | 章 | 行 | 頁 | 章 | 行 | 頁 |
|---|---|---|---|---|---|---|---|---|
| 1 | 4790 | 37 | 18 | 5913 | 60 | 35 | 7101 | 85 |
| 2 | 4807 | 37 | 19 | 5953 | 61 | 36 | 7149 | 86 |
| 3 | 4879 | 39 | 20 | 6110 | 64 | 37 | 7222 | 88 |
| 4 | 4981 | 41 | 21 | 6272 | 68 | 38 | 7341 | 90 |
| 5 | 5068 | 43 | 22 | 6326 | 69 | 39 | 7379 | 91 |
| 6 | 5191 | 45 | 23 | 6337 | 69 | 40 | 7429 | 92 |
| 7 | 5237 | 46 | 24 | 6428 | 71 | 41 | 7452 | 92 |
| 8 | 5326 | 48 | 25 | 6578 | 74 | 42 | 7471 | 93 |
| 9 | 5374 | 49 | 26 | 6722 | 77 | 43 | 7482 | 93 |
| 10 | 5432 | 50 | 27 | 6749 | 78 | 44 | 7591 | 95 |
| 11 | 5521 | 52 | 28 | 6863 | 80 | 45 | 7631 | 96 |
| 12 | 5559 | 53 | 29 | 6902 | 81 | 46 | 7670 | 97 |
| 13 | 5663 | 55 | 30 | 6968 | 82 | 47 | 7753 | 99 |
| 14 | 5714 | 56 | 31 | 7004 | 83 | 48 | 7800 | 100 |
| 15 | 5752 | 57 | 32 | 7048 | 84 | 49 | 7816 | 100 |
| 16 | 5802 | 58 | 33 | 7061 | 84 | | | |
| 17 | 5889 | 60 | 34 | 7088 | 85 | | | |

本文の途中の欠け：16 章の l. 5847（Unum folium excisum est。写本の葉が一枚切り取られている）、25 章の l. 6639（Deest unum folium。葉が一枚ない）。ほかに、29.1 の septimanarum の後（l. 6902 の ....。校注 l. 6926 に post septimanarum lacunam indicaui）と、38.1 の Martyrium の後（校注 l. 7354）に、編者が脱落を示す。
