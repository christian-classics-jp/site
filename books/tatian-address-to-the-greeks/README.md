# タティアノス『ギリシア人への演説』

タティアノスの『ギリシア人への演説』（Λόγος πρὸς Ἕλληνας）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は J. C. T. von Otto 編、*Corpus apologetarum Christianorum saeculi secundi* VI：*Tatiani Oratio ad Graecos*（Jena, 1851）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg1766/tlg001/tlg1766.tlg001.perseus-grc1.xml`）を、次のコマンドで [research/otto-1851.txt](research/otto-1851.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg1766/tlg001/tlg1766.tlg001.perseus-grc1.xml books/tatian-address-to-the-greeks/research/otto-1851.txt --split
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/otto-1851.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

章の番号（1〜42 章）は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-01-04 | 1〜4 章 | [x] |
| chapter-05-08 | 5〜8 章 | [ ] |
| chapter-09-12 | 9〜12 章 | [ ] |
| chapter-13-16 | 13〜16 章 | [ ] |
| chapter-17-19 | 17〜19 章 | [ ] |
| chapter-20-23 | 20〜23 章 | [ ] |
| chapter-24-27 | 24〜27 章 | [ ] |
| chapter-28-32 | 28〜32 章 | [ ] |
| chapter-33-36 | 33〜36 章 | [ ] |
| chapter-37-42 | 37〜42 章 | [ ] |
