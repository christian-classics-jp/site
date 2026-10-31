# 翻訳候補

ギリシア語・ラテン語の原文から訳す初期キリスト教文献の候補。2026-10-25 に検討した。訳し始めたら `books/` に本を作り、ここの状態を「翻訳中」にする。

## 2 世紀の弁証文学・説教・殉教文学

| 作品 | 原語 | 備考 |
|---|---|---|
| ユスティノス『第一弁明』『第二弁明』 | ギリシア語 | |
| ユスティノス『トリュフォンとの対話』 | ギリシア語 | 長編 |
| タティアノス『ギリシア人への演説』 | ギリシア語 | |
| アテナゴラス『キリスト者のための弁明』 | ギリシア語 | |
| アンティオキアのテオフィロス『アウトリュコスへ』 | ギリシア語 | 3 巻 |
| アレクサンドリアのクレメンス『救われる富者とは誰か』 | ギリシア語 | |
| サルディスのメリトン『過越について』 | ギリシア語 | 保留。1940 年に見つかった作品で、権利の切れた校訂本も英訳もない |
| 『リヨンとヴィエンヌの教会の手紙』 | ギリシア語 | 177 年。エウセビオス『教会史』5 巻に残る |
| 『ユスティノス殉教録』 | ギリシア語 | 短い |
| 『スキリウムの殉教者行伝』 | ラテン語 | 180 年。キリスト教のラテン語文書で最古、数段落 |
| ミヌキウス・フェリクス『オクタウィウス』 | ラテン語 | 対話形式の弁証書 |
| エイレナイオス『異端反駁』 | ラテン語（ギリシア語はほぼ失われた） | 長大なので抜粋で |
| 『ヤコブ原福音書』 | ギリシア語 | 新約外典。教父文書とは別の扱い |

## 3 世紀

| 作品 | 原語 | 備考 |
|---|---|---|
| オリゲネス『グレゴリオスへの手紙』 | ギリシア語 | 『フィロカリア』13 章に残る |
| オリゲネス『祈りについて』 | ギリシア語 | |
| テルトゥリアヌス『護教論』 | ラテン語 | 代表作 |
| テルトゥリアヌス『殉教者たちへ』『洗礼について』『祈りについて』『見世物について』 | ラテン語 | |
| 『ペルペトゥアとフェリキタスの殉教録』 | ラテン語 | 203 年 |
| キプリアヌス『ドナトゥスへ』『教会の一致について』『主の祈りについて』 | ラテン語 | |

## 4 世紀以降

| 作品 | 原語 | 備考 |
|---|---|---|
| アタナシオス『アントニオス伝』 | ギリシア語 | 既訳の『神のことばの受肉』と同じ著者 |
| エルサレムのキュリロス『秘義教話』 | ギリシア語 | 5 講と短い |

## 取得済みの原文（2 世紀）

2 世紀の候補のうち、著作権の切れた原文を `cache/` に集めたもの。訳し始めるときに、使うものをその本の `research/sources.md` に移す。First1KGreek はコミット `ed91552c52530c8f5a3ddf2dd767e899372a804c` から取り、`cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c…/data/` に置いた（下の表では `F1K/` と略す）。archive.org の資料は `cache/archive.org/<識別子>/` に PDF と OCR テキスト（`_djvu.txt`）を置いた。

| 作品 | 資料 | 権利 | URL | `cache/` のパス | SHA-256 先頭 16 桁 | 取得日 |
|---|---|---|---|---|---|---|
| ユスティノス『第一弁明』 | First1KGreek。G. Rauschen 編（Bonn, 1911）の電子化 | CC BY-SA 4.0 | https://github.com/OpenGreekAndLatin/First1KGreek/blob/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0645/tlg001/tlg0645.tlg001.1st1K-grc1.xml | `F1K/tlg0645/tlg001/tlg0645.tlg001.1st1K-grc1.xml` | d89772ab0d12a0a2 | 2026-10-31 |
| ユスティノス『第二弁明』 | First1KGreek。Rauschen 編（1911）の電子化 | CC BY-SA 4.0 | 同上の `data/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml` | `F1K/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml` | ac7938667236b747 | 2026-10-31 |
| ユスティノス『第一弁明』『第二弁明』 | G. Rauschen 編、S. Iustini apologiae duae（Bonn, 1911）のスキャン | パブリックドメイン（米国、1911 年刊） | https://archive.org/details/siustiniapologia00just | `cache/archive.org/siustiniapologia00just/siustiniapologia00just.pdf`、`…_djvu.txt` | PDF abaaaf0d80e57f5a、txt ac521ee8561f8f9c | 2026-10-31 |
| ユスティノス『トリュフォンとの対話』 | First1KGreek。G. Archambault 編（Paris, 1909）の電子化 | CC BY-SA 4.0 | 同上の `data/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml` | `F1K/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml` | d5e87fafb4ee51cd | 2026-10-31 |
| ユスティノス『トリュフォンとの対話』 | G. Archambault 編、Dialogue avec Tryphon I・II（Paris, 1909）のスキャン。仏訳が対訳で付く | パブリックドメイン（米国、1909 年刊） | https://archive.org/details/dialogueavectryp01just 、https://archive.org/details/dialogueavectryp02just | `cache/archive.org/dialogueavectryp01just/`、`dialogueavectryp02just/` の PDF と `_djvu.txt` | I：PDF 3225dbf3e881a2dd、txt 731671248eb71665。II：PDF a6dba9cdfdb13804、txt f9155affb7e27e5f | 2026-10-31 |
| テオフィロス『アウトリュコスへ』 | First1KGreek。grc1 は W. G. Humphry 編（Cambridge, 1852）、grc2 は J. C. T. von Otto 編（Corpus apologetarum VIII）の電子化 | CC BY-SA 4.0 | 同上の `data/tlg1725/tlg001/` | `F1K/tlg1725/tlg001/tlg1725.tlg001.perseus-grc1.xml`、`…perseus-grc2.xml` | grc1 0b4a6d70231ac71a、grc2 b190660e17566298 | 2026-10-31 |
| アレクサンドリアのクレメンス『救われる富者とは誰か』 | First1KGreek。O. Stählin 編、Clemens Alexandrinus III（GCS, 1909）の電子化 | CC BY-SA 4.0 | 同上の `data/tlg0555/tlg006/tlg0555.tlg006.1st1K-grc1.xml` | `F1K/tlg0555/tlg006/tlg0555.tlg006.1st1K-grc1.xml` | f300ef6a2ccfa819 | 2026-10-31 |
| アレクサンドリアのクレメンス『救われる富者とは誰か』 | Stählin 編、Clemens Alexandrinus III（GCS, 1909）のスキャン。archive.org のメタデータの年（1905）はシリーズの第 1 巻の年 | パブリックドメイン（米国、1909 年刊） | https://archive.org/details/clemensalexandri0003clem | `cache/archive.org/clemensalexandri0003clem/` の PDF と `_djvu.txt` | PDF 2dd5321c205cd425、txt cd8920903785afde | 2026-10-31 |
| 『ヤコブ原福音書』 | C. Tischendorf 編、Evangelia apocrypha（第 2 版、Leipzig, 1876）のスキャン。原福音書は巻頭 | パブリックドメイン | https://archive.org/details/evangeliaapocry00tiscgoog | `cache/archive.org/evangeliaapocry00tiscgoog/` の PDF と `_djvu.txt` | PDF 6f415ca7b8ea360c、txt 93053efe737dc0e8 | 2026-10-31 |
| 『ユスティノス殉教録』、『スキリウムの殉教者行伝』 | R. Knopf 編、Ausgewählte Märtyrerakten（第 2 版、Tübingen, 1913）のスキャン。序文の日付が 1913 年 6 月 24 日であることは画像で確かめた。OCR はギリシア文字として読まれて使えないので、PDF の画像を読む。PDF のページは順序が入れ替わっている箇所がある。両作品の位置は未確認 | パブリックドメイン（米国、1913 年刊。Knopf は 1914 年没） | https://archive.org/details/MN41421ucmf_7 | `cache/archive.org/MN41421ucmf_7/` の PDF と `_djvu.txt` | PDF f8f4ee1b2b4978c2、txt 87d1338b8824c71d | 2026-10-31 |
| 『スキリウムの殉教者行伝』 | J. A. Robinson, The Passion of S. Perpetua（Texts and Studies I, 2、Cambridge, 1891）のスキャン。付録にスキリウムの殉教録のラテン語本文がある | パブリックドメイン | https://archive.org/details/MN5140ucmf_2 | `cache/archive.org/MN5140ucmf_2/` の PDF と `_djvu.txt` | PDF 14ef344019c43401、txt e41edd91c9611438 | 2026-10-31 |
| ミヌキウス・フェリクス『オクタウィウス』 | C. Halm 編、M. Minucii Felicis Octavius. Iulii Firmici Materni Liber de errore profanarum religionum（CSEL 2、Wien, 1867）のスキャン | パブリックドメイン | https://archive.org/details/mminuciifelicis00halmgoog | `cache/archive.org/mminuciifelicis00halmgoog/` の PDF と `_djvu.txt` | PDF dd858274ac1d0ffd、txt c99508c28b7754de | 2026-10-31 |

ほかの 2 世紀の候補は、使徒教父文書を訳すときに集めた資料に原文がある。記録はそれぞれの本の `research/sources.md` にある。

| 作品 | 資料 | `cache/` のパス | SHA-256 先頭 16 桁 | 記録 |
|---|---|---|---|---|
| タティアノス『ギリシア人への演説』、アテナゴラス『キリスト者のための弁明』 | E. Schwartz 編（Texte und Untersuchungen IV, 1〜2、1888、1891）。TU 4〜5 の合本 | `cache/archive.org/texteundunter04v5akad/texteundunter04v5akad_djvu.txt` | 2a4a1793d70f7c47 | `books/papias-quadratus/research/sources.md` |
| 『リヨンとヴィエンヌの教会の手紙』 | E. Schwartz 編、エウセビオス『教会史』一〜五巻（GCS, 1903）。五・一〜四 | `cache/archive.org/p1eusebiuswerke02euse/p1eusebiuswerke02euse_djvu.txt` | f47c0f5d02110f4f | 同上 |
| エイレナイオス『異端反駁』 | A. Stieren 編、エイレナイオス著作集 I（1853）、W. W. Harvey 編、『異端反駁』II（1857） | `cache/archive.org/sanctiirenaeiepi0001adol/…_djvu.txt`、`cache/archive.org/sanctiirenaeiep00harvgoog/…_djvu.txt` | Stieren d0da8989e131b1cf、Harvey e979a60b1084394a | 同上 |

## 資料

- ギリシア語：[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（CC BY-SA 4.0。収録作品は個別に確かめる）、archive.org にある 19 世紀〜20 世紀初めの校訂本のスキャン。
- ラテン語：Tertullian.org のラテン語本文集、archive.org の校訂本のスキャン。
- Bibliothek der Kirchenväter はドイツ語訳の集成で、原文の入手先には使えない。
