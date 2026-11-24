# ニュッサのグレゴリオス『教理大講話』

ニュッサのグレゴリオスの『教理大講話』（Λόγος κατηχητικός）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は J. H. Srawley 編、*The Catechetical Oration of Gregory of Nyssa*（Cambridge Patristic Texts、Cambridge: Cambridge University Press, 1903）の pp. 1〜164。パブリックドメイン。archive.org のスキャン（[TheCatecheticalOrationOf](https://archive.org/details/TheCatecheticalOrationOf)）の画像からギリシア語の本文を起こし、[research/srawley-1903.txt](research/srawley-1903.txt) に置いた。底本の異読の欄と注解は本文に入れていない。起こした章は、1 章 1 行のファイルにして、次のコマンドで節に分けた。

```sh
node tools/split-units.js <起こした章のファイル> books/gregory-of-nyssa-catechetical-oration/research/srawley-1903.txt
```

章（1〜40 章）の番号は底本に従う。底本の序には番号がなく、この訳で 0 章とした。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| chapter-00 | 序 | [x] |
| chapter-01 | 1 章 | [x] |
| chapter-02-04 | 2〜4 章 | [x] |
| chapter-05 | 5 章 | [x] |
| chapter-06-07 | 6〜7 章 | [x] |
| chapter-08 | 8 章 | [x] |
| chapter-09-12 | 9〜12 章 | [x] |
| chapter-13-15 | 13〜15 章 | [x] |
| chapter-16-17 | 16〜17 章 | [x] |
| chapter-18-20 | 18〜20 章 | [x] |
| chapter-21-23 | 21〜23 章 | [x] |
| chapter-24-25 | 24〜25 章 | [x] |
| chapter-26-27 | 26〜27 章 | [x] |
| chapter-28-30 | 28〜30 章 | [x] |
| chapter-31-32 | 31〜32 章 | [x] |
| chapter-33-34 | 33〜34 章 | [x] |
| chapter-35 | 35 章 | [x] |
| chapter-36-37 | 36〜37 章 | [ ] |
| chapter-38-39 | 38〜39 章 | [ ] |
| chapter-40 | 40 章 | [ ] |
