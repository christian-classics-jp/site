# 翻訳候補

ギリシア語・ラテン語の原文から訳す初期キリスト教文献の候補。2026-10-25 に検討した。訳し始めたら `books/` に本を作り、ここの状態を「翻訳中」にする。

## 2 世紀の弁証文学・説教・殉教文学

| 作品 | 原語 | 備考 |
|---|---|---|
| ユスティノス『トリュフォンとの対話』 | ギリシア語 | 長編 |
| アレクサンドリアのクレメンス『救われる富者とは誰か』 | ギリシア語 | 翻訳中（`books/who-is-the-rich-man/`） |
| サルディスのメリトン『過越について』 | ギリシア語 | 保留。1940 年に見つかった作品で、権利の切れた校訂本も英訳もない |
| ミヌキウス・フェリクス『オクタウィウス』 | ラテン語 | 対話形式の弁証書 |

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
| ユスティノス『トリュフォンとの対話』 | First1KGreek。G. Archambault 編（Paris, 1909）の電子化 | CC BY-SA 4.0 | 同上の `data/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml` | `F1K/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml` | d5e87fafb4ee51cd | 2026-10-31 |
| ユスティノス『トリュフォンとの対話』 | G. Archambault 編、Dialogue avec Tryphon I・II（Paris, 1909）のスキャン。仏訳が対訳で付く | パブリックドメイン（米国、1909 年刊） | https://archive.org/details/dialogueavectryp01just 、https://archive.org/details/dialogueavectryp02just | `cache/archive.org/dialogueavectryp01just/`、`dialogueavectryp02just/` の PDF と `_djvu.txt` | I：PDF 3225dbf3e881a2dd、txt 731671248eb71665。II：PDF a6dba9cdfdb13804、txt f9155affb7e27e5f | 2026-10-31 |
| ミヌキウス・フェリクス『オクタウィウス』 | C. Halm 編、M. Minucii Felicis Octavius. Iulii Firmici Materni Liber de errore profanarum religionum（CSEL 2、Wien, 1867）のスキャン | パブリックドメイン | https://archive.org/details/mminuciifelicis00halmgoog | `cache/archive.org/mminuciifelicis00halmgoog/` の PDF と `_djvu.txt` | PDF dd858274ac1d0ffd、txt c99508c28b7754de | 2026-10-31 |
| エイレナイオス『異端反駁』第一巻のギリシア語の部分 | First1KGreek。Harvey 編（Cambridge, 1857）の電子化。OCR の崩れが残る | CC BY-SA 4.0 | 同上の `data/tlg1447/tlg001/tlg1447.tlg001.1st1K-grc1.xml` | `F1K/tlg1447/tlg001/tlg1447.tlg001.1st1K-grc1.xml` | bbbc779f0d9d2372 | 2026-10-31 |

ほかの 2 世紀の候補は、使徒教父文書を訳すときに集めた資料に原文がある。記録はそれぞれの本の `research/sources.md` にある。

| 作品 | 資料 | `cache/` のパス | SHA-256 先頭 16 桁 | 記録 |
|---|---|---|---|---|
| エイレナイオス『異端反駁』 | A. Stieren 編、エイレナイオス著作集 I（1853）、W. W. Harvey 編、『異端反駁』II（1857） | `cache/archive.org/sanctiirenaeiepi0001adol/…_djvu.txt`、`cache/archive.org/sanctiirenaeiep00harvgoog/…_djvu.txt` | Stieren d0da8989e131b1cf、Harvey e979a60b1084394a | 同上 |

## 資料

- ギリシア語：[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（CC BY-SA 4.0。収録作品は個別に確かめる）、archive.org にある 19 世紀〜20 世紀初めの校訂本のスキャン。
- ラテン語：Tertullian.org のラテン語本文集、archive.org の校訂本のスキャン。
- Bibliothek der Kirchenväter はドイツ語訳の集成で、原文の入手先には使えない。
