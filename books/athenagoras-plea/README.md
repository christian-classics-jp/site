# アテナゴラス『キリスト者のための弁明』

アテネのアテナゴラスの『キリスト者のための弁明』（Πρεσβεία περὶ Χριστιανῶν）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は F. A. March・W. B. Owen 編、*Athenagoras*（Douglass Series of Christian Greek and Latin Writers IV、New York, 1876）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg1205/tlg001/tlg1205.tlg001.perseus-grc2.xml`）を、次のコマンドで [research/march-owen-1876.txt](research/march-owen-1876.txt) にした。

```sh
node tools/tei2labeled.js cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1205/tlg001/tlg1205.tlg001.perseus-grc2.xml books/athenagoras-plea/research/march-owen-1876.txt
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/march-owen-1876.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

章（1〜37 章）と節の番号は底本に従う。節は本全体の通し番号。冒頭の皇帝たちへの宛名は 0 章とした。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-00-03 | 宛名、1〜3 章 | [x] |
| chapter-04-07 | 4〜7 章 | [x] |
| chapter-08-10 | 8〜10 章 | [x] |
| chapter-11-14 | 11〜14 章 | [x] |
| chapter-15-17 | 15〜17 章 | [x] |
| chapter-18-20 | 18〜20 章 | [x] |
| chapter-21-22 | 21〜22 章 | [x] |
| chapter-23-24 | 23〜24 章 | [x] |
| chapter-25-27 | 25〜27 章 | [x] |
| chapter-28-31 | 28〜31 章 | [x] |
| chapter-32-37 | 32〜37 章 | [x] |
