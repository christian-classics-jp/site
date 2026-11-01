# リヨンとヴィエンヌの教会の手紙

177 年ごろ、ガリアのリヨンとヴィエンヌの教会が、アジヤとフルギヤの教会に書き送った迫害と殉教の記録。エウセビオスが『教会史』第五巻の序と一〜四章に引いて残したものを、その地の文とともにギリシア語原文から訳した。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は W. Dindorf 編、*Eusebii Caesariensis opera* IV（Teubner、Leipzig, 1871）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc2.xml`）を、次のコマンドでラベル付きの行にし、第五巻だけを [research/dindorf-1871.txt](research/dindorf-1871.txt) に残した。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2018/tlg002/tlg2018.tlg002.1st1K-grc2.xml all-books.txt
rg '^5\.' all-books.txt > books/martyrs-of-lyons/research/dindorf-1871.txt
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/dindorf-1871.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りは底本の行では直さず、印刷版のスキャンで確かめて、意図された形で訳した。

巻・章・節の番号は底本に従う。訳の行の `5:1:3` は『教会史』五巻一章三節を示す。第五巻の序は 0 章とした。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-letter-1 | 五巻序、一章 1〜17 節 | [x] |
| 02-letter-2 | 一章 18〜32 節 | [x] |
| 03-letter-3 | 一章 33〜48 節 | [x] |
| 04-letter-4 | 一章 49〜63 節 | [ ] |
| 05-letter-5 | 二〜四章 | [ ] |
