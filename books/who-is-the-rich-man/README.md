# 救われる富者とは誰か

アレクサンドリアのクレメンスの『救われる富者とは誰か』（Τίς ὁ σωζόμενος πλούσιος）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は O. Stählin 編、*Clemens Alexandrinus* III（Die griechischen christlichen Schriftsteller 17、Leipzig, 1909）の pp. 159〜191。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg0555/tlg006/tlg0555.tlg006.1st1K-grc1.xml`）を、次のコマンドで [research/staehlin-1909.txt](research/staehlin-1909.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0555/tlg006/tlg0555.tlg006.1st1K-grc1.xml books/who-is-the-rich-man/research/staehlin-1909.txt
python3 -I ~/.claude/handoffs/relabel.py books/who-is-the-rich-man/research/staehlin-1909.txt books/who-is-the-rich-man/research/relabel.json
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/staehlin-1909.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。

章（1〜42 章）と節の番号は底本に従う。底本は節の番号を欄外に、節が始まる行の横に付ける。電子化はその番号を行の頭に置いたため、節の切れ目が文の途中にずれているところや、番号が抜けているところ（4.4）がある。印刷版のページ画像で節の始まりを確かめ、ずれた語句を正しい節に移した（2 行目のコマンド。移した箇所は [research/relabel.json](research/relabel.json) にある）。本文の文字は変えていない。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-01-04 | 1〜4 章 | [x] |
| chapter-05-10 | 5〜10 章 | [x] |
| chapter-11-15 | 11〜15 章 | [x] |
| chapter-16-19 | 16〜19 章 | [x] |
| chapter-20-23 | 20〜23 章 | [x] |
| chapter-24-27 | 24〜27 章 | [x] |
| chapter-28-32 | 28〜32 章 | [x] |
| chapter-33-38 | 33〜38 章 | [x] |
| chapter-39-41 | 39〜41 章 | [x] |
| chapter-42 | 42 章 | [x] |
