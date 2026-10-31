# ユスティノス『第二弁明』

殉教者ユスティノスの『第二弁明』（Ἀπολογία δευτέρα）のギリシア語原文からの翻訳。

底本は G. Rauschen 編、*S. Iustini apologiae duae*（Florilegium patristicum II、第 2 版、Bonn: P. Hanstein, 1911）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml`）を、次のコマンドで [research/rauschen-1911.txt](research/rauschen-1911.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0645/tlg002/tlg0645.tlg002.perseus-grc2.xml books/justin-second-apology/research/rauschen-1911.txt --split
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/rauschen-1911.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りと印刷版（[archive.org のスキャン](https://archive.org/details/siustiniapologia00just)）の誤植は底本の行では直さず、意図された形で訳した。

章の番号と順序は底本に従う。底本はパリ写本の章の順序を保つ。古い刊本と英訳の多くは 8 章を 3 章の位置に移しているので、3〜8 章の番号がそれらとずれる。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-01-05 | 1〜5 章 | [x] |
| chapter-06-10 | 6〜10 章 | [ ] |
| chapter-11-15 | 11〜15 章 | [ ] |
