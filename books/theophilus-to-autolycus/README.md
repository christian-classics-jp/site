# テオフィロス『アウトリュコスへ』

アンティオキアのテオフィロスの『アウトリュコスへ』（Πρὸς Αὐτόλυκον）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は J. C. T. von Otto 編、*Corpus apologetarum Christianorum saeculi secundi* VIII：*Theophili episcopi Antiocheni ad Autolycum libri tres*（Jena, 1861）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg1725/tlg001/tlg1725.tlg001.perseus-grc2.xml`）を、次のコマンドで [research/otto-1861.txt](research/otto-1861.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1725/tlg001/tlg1725.tlg001.perseus-grc2.xml books/theophilus-to-autolycus/research/otto-1861.txt --split
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/otto-1861.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

巻と章の番号（第一巻 1〜14 章、第二巻 1〜38 章、第三巻 1〜30 章）は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| 01-book-1-1 | 第一巻 1〜5 章 | [x] |
| 02-book-1-2 | 第一巻 6〜9 章 | [x] |
| 03-book-1-3 | 第一巻 10〜14 章 | [x] |
| 04-book-2-1 | 第二巻 1〜4 章 | [x] |
| 05-book-2-2 | 第二巻 5〜7 章 | [x] |
| 06-book-2-3 | 第二巻 8〜10 章 | [x] |
| 07-book-2-4 | 第二巻 11〜12 章 | [x] |
| 08-book-2-5 | 第二巻 13〜15 章 | [x] |
| 09-book-2-6 | 第二巻 16〜20 章 | [x] |
| 10-book-2-7 | 第二巻 21〜24 章 | [x] |
| 11-book-2-8 | 第二巻 25〜28 章 | [ ] |
| 12-book-2-9 | 第二巻 29〜31 章 | [ ] |
| 13-book-2-10 | 第二巻 32〜35 章 | [ ] |
| 14-book-2-11 | 第二巻 36〜38 章 | [ ] |
| 15-book-3-1 | 第三巻 1〜6 章 | [ ] |
| 16-book-3-2 | 第三巻 7〜9 章 | [ ] |
| 17-book-3-3 | 第三巻 10〜14 章 | [ ] |
| 18-book-3-4 | 第三巻 15〜19 章 | [ ] |
| 19-book-3-5 | 第三巻 20〜23 章 | [ ] |
| 20-book-3-6 | 第三巻 24〜26 章 | [ ] |
| 21-book-3-7 | 第三巻 27〜30 章 | [ ] |
