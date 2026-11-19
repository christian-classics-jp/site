# ヒッポリュトス『キリストと反キリストについて』

ローマのヒッポリュトスの『キリストと反キリストについて』（Ἀπόδειξις ἐκ τῶν ἁγίων γραφῶν περὶ Χριστοῦ καὶ περὶ τοῦ ἀντιχρίστου）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は H. Achelis 編、*Hippolytus Werke* I, 2: Kleinere exegetische und homiletische Schriften（Die griechischen christlichen Schriftsteller 1、Leipzig: J. C. Hinrichs, 1897）の pp. 3〜47。パブリックドメイン。archive.org のスキャン（[hippolytuswerke01hipp](https://archive.org/details/hippolytuswerke01hipp)。G. N. Bonwetsch 編の第 1 分冊と合本）の画像から本文を起こし、[research/achelis-1897.txt](research/achelis-1897.txt) に置いた。起こした章は、1 章 1 行のファイルにして、次のコマンドで節に分けた。

```sh
node tools/split-units.js <起こした章のファイル> books/hippolytus-on-antichrist/research/achelis-1897.txt
```

章（1〜67 章）の番号は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。本文の中の写本の葉の境の印、余白の行番号、校注は起こしていない。

聖書の引用は口語訳聖書を参考にした。ヒッポリュトスは旧約聖書をギリシア語訳（七十人訳）で引くので、口語訳と意味の違うところは底本のギリシア語から訳した。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| chapter-01-05 | 1〜5 章 | [x] |
| chapter-06-14 | 6〜14 章 | [x] |
| chapter-15-18 | 15〜18 章 | [x] |
| chapter-19-25 | 19〜25 章 | [x] |
| chapter-26-33 | 26〜33 章 | [x] |
| chapter-34-40 | 34〜40 章 | [x] |
| chapter-41-46 | 41〜46 章 | [x] |
| chapter-47-50 | 47〜50 章 | [x] |
| chapter-51-57 | 51〜57 章 | [x] |
| chapter-58-62 | 58〜62 章 | [ ] |
| chapter-63-67 | 63〜67 章 | [ ] |
