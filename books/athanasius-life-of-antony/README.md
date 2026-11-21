# アタナシオス『アントニオス伝』

アレクサンドリアのアタナシオスの『アントニオス伝』（Βίος καὶ πολιτεία τοῦ ὁσίου πατρὸς ἡμῶν Ἀντωνίου）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は J.-P. Migne 編、*Patrologiae cursus completus, series Graeca* 26（Paris: J.-P. Migne）の欄 837〜976。Benedictine 版（B. de Montfaucon 編、1698）の本文を再録したもの。パブリックドメイン。archive.org のスキャン（[patrologiae_cursus_completus_gr_vol_026](https://archive.org/details/patrologiae_cursus_completus_gr_vol_026)）の画像からギリシア語の本文を起こし、[research/pg26.txt](research/pg26.txt) に置いた。底本のラテン語訳とエウァグリオスの古ラテン語訳は使っていない。起こした章は、1 章 1 行のファイルにして、次のコマンドで節に分けた。

```sh
node tools/split-units.js <起こした章のファイル> books/athanasius-life-of-antony/research/pg26.txt
```

章（1〜94 章）の番号は底本に従う。底本の序には番号がなく、この訳で 0 章とした。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| chapter-00-04 | 序、1〜4 章 | [ ] |
| chapter-05-07 | 5〜7 章 | [ ] |
| chapter-08-11 | 8〜11 章 | [ ] |
| chapter-12-15 | 12〜15 章 | [ ] |
| chapter-16-20 | 16〜20 章 | [ ] |
| chapter-21-24 | 21〜24 章 | [ ] |
| chapter-25-28 | 25〜28 章 | [ ] |
| chapter-29-34 | 29〜34 章 | [ ] |
| chapter-35-38 | 35〜38 章 | [ ] |
| chapter-39-43 | 39〜43 章 | [ ] |
| chapter-44-48 | 44〜48 章 | [ ] |
| chapter-49-53 | 49〜53 章 | [ ] |
| chapter-54-57 | 54〜57 章 | [ ] |
| chapter-58-62 | 58〜62 章 | [ ] |
| chapter-63-66 | 63〜66 章 | [ ] |
| chapter-67-71 | 67〜71 章 | [ ] |
| chapter-72-75 | 72〜75 章 | [ ] |
| chapter-76-80 | 76〜80 章 | [ ] |
| chapter-81-84 | 81〜84 章 | [ ] |
| chapter-85-88 | 85〜88 章 | [ ] |
| chapter-89-94 | 89〜94 章 | [ ] |
