# クレメンス『ギリシア人への勧め』

アレクサンドリアのクレメンスの『ギリシア人への勧め』（Προτρεπτικὸς πρὸς Ἕλληνας）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は O. Stählin 編、*Clemens Alexandrinus* I（Die griechischen christlichen Schriftsteller 12、Leipzig, 1905）の pp. 3〜86。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg0555/tlg001/tlg0555.tlg001.1st1K-grc1.xml`）を、次のコマンドで [research/staehlin-1905.txt](research/staehlin-1905.txt) にした。

```sh
node tools/tei2labeled.js cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0555/tlg001/tlg0555.tlg001.1st1K-grc1.xml books/clement-protrepticus/research/staehlin-1905.txt --running-sections
node tools/relabel.js books/clement-protrepticus/research/staehlin-1905.txt books/clement-protrepticus/research/relabel.json
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/staehlin-1905.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。

章（1〜12 章）、節（1〜123 節。本全体の通し番号）、節の中の小節の番号は底本に従う。電子化は欄外の番号を行の頭に置いたため、節の切れ目が文の途中にずれているところがある。印刷版で節の始まりを確かめ、ずれた語句を正しい節に移した（2 行目のコマンド。移した箇所は [research/relabel.json](research/relabel.json) にある）。本文の文字は変えていない。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-chapter-01-1 | 1 章 1〜5 節 | [x] |
| 02-chapter-01-2 | 1 章 6〜10 節 | [x] |
| 03-chapter-02-1 | 2 章 11〜18 節 | [x] |
| 04-chapter-02-2 | 2 章 19〜24 節 | [x] |
| 05-chapter-02-3 | 2 章 25〜30 節 | [x] |
| 06-chapter-02-4 | 2 章 31〜35 節 | [x] |
| 07-chapter-02-5 | 2 章 36〜41 節 | [x] |
| 08-chapter-03 | 3 章 | [x] |
| 09-chapter-04-1 | 4 章 46〜49 節 | [x] |
| 10-chapter-04-2 | 4 章 50〜53 節 | [x] |
| 11-chapter-04-3 | 4 章 54〜57 節 | [x] |
| 12-chapter-04-4 | 4 章 58〜63 節 | [x] |
| 13-chapter-05 | 5 章 | [x] |
| 14-chapter-06 | 6 章 | [x] |
| 15-chapter-07 | 7 章 | [ ] |
| 16-chapter-08 | 8 章 | [ ] |
| 17-chapter-09 | 9 章 | [ ] |
| 18-chapter-10-1 | 10 章 89〜94 節 | [ ] |
| 19-chapter-10-2 | 10 章 95〜99 節 | [ ] |
| 20-chapter-10-3 | 10 章 100〜104 節 | [ ] |
| 21-chapter-10-4 | 10 章 105〜110 節 | [ ] |
| 22-chapter-11 | 11 章 | [ ] |
| 23-chapter-12 | 12 章 | [ ] |
