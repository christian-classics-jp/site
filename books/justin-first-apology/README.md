# ユスティノス『第一弁明』

殉教者ユスティノスの『第一弁明』（Ἀπολογία πρώτη）のギリシア語原文からの翻訳。

底本は G. Rauschen 編、*S. Iustini apologiae duae*（Florilegium patristicum II、第 2 版、Bonn: P. Hanstein, 1911）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg0645/tlg001/tlg0645.tlg001.1st1K-grc1.xml`）を、次のコマンドで [research/rauschen-1911.txt](research/rauschen-1911.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0645/tlg001/tlg0645.tlg001.1st1K-grc1.xml books/justin-first-apology/research/rauschen-1911.txt --split
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/rauschen-1911.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りと印刷版（[archive.org のスキャン](https://archive.org/details/siustiniapologia00just)）の誤植は底本の行では直さず、意図された形で訳した。

章の番号は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-01-05 | 1〜5 章 | [x] |
| chapter-06-12 | 6〜12 章 | [x] |
| chapter-13-15 | 13〜15 章 | [x] |
| chapter-16-19 | 16〜19 章 | [x] |
| chapter-20-25 | 20〜25 章 | [x] |
| chapter-26-31 | 26〜31 章 | [x] |
| chapter-32-35 | 32〜35 章 | [x] |
| chapter-36-40 | 36〜40 章 | [x] |
| chapter-41-44 | 41〜44 章 | [x] |
| chapter-45-50 | 45〜50 章 | [ ] |
| chapter-51-53 | 51〜53 章 | [ ] |
| chapter-54-57 | 54〜57 章 | [ ] |
| chapter-58-61 | 58〜61 章 | [ ] |
| chapter-62-65 | 62〜65 章 | [ ] |
| chapter-66-68 | 66〜68 章 | [ ] |
