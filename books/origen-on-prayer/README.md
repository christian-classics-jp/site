# オリゲネス『祈りについて』

オリゲネスの『祈りについて』（Περὶ εὐχῆς）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は P. Koetschau 編、*Origenes Werke* II（Die griechischen christlichen Schriftsteller 3、Leipzig, 1899）の pp. 297〜403。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg2042/tlg008/tlg2042.tlg008.perseus-grc1.xml`）を、次のコマンドで [research/koetschau-1899.txt](research/koetschau-1899.txt) にした。

```sh
node tools/tei2labeled.js cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2042/tlg008/tlg2042.tlg008.perseus-grc1.xml books/origen-on-prayer/research/koetschau-1899.txt --add-angle
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/koetschau-1899.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。

章（1〜34 章）と節（章ごとの番号）は底本に従う。電子化が丸括弧で入れた編者の補いは、印刷版と同じ ⟨ ⟩ にした（上のコマンドの `--add-angle`）。それ以外は本文の文字を変えていない。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

聖書の引用は口語訳聖書を参考にした。口語訳にない書（知恵の書、トビト記など）は七十人訳から訳した。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-chapter-01-02 | 1〜2 章 | [x] |
| 02-chapter-03-04 | 3〜4 章 | [x] |
| 03-chapter-05 | 5 章 | [x] |
| 04-chapter-06-07 | 6〜7 章 | [x] |
| 05-chapter-08-10 | 8〜10 章 | [x] |
| 06-chapter-11-12 | 11〜12 章 | [x] |
| 07-chapter-13 | 13 章 | [x] |
| 08-chapter-14 | 14 章 | [x] |
| 09-chapter-15 | 15 章 | [x] |
| 10-chapter-16-17 | 16〜17 章 | [x] |
| 11-chapter-18-19 | 18〜19 章 | [x] |
| 12-chapter-20-21 | 20〜21 章 | [x] |
| 13-chapter-22 | 22 章 | [x] |
| 14-chapter-23 | 23 章 | [x] |
| 15-chapter-24 | 24 章 | [x] |
| 16-chapter-25 | 25 章 | [x] |
| 17-chapter-26 | 26 章 | [x] |
| 18-chapter-27-1 | 27 章 1〜7 節 | [x] |
| 19-chapter-27-2 | 27 章 8〜12 節 | [x] |
| 20-chapter-27-3 | 27 章 13〜17 節 | [ ] |
| 21-chapter-28-1 | 28 章 1〜6 節 | [ ] |
| 22-chapter-28-2 | 28 章 7〜10 節 | [ ] |
| 23-chapter-29-1 | 29 章 1〜9 節 | [ ] |
| 24-chapter-29-2 | 29 章 10〜14 節 | [ ] |
| 25-chapter-29-3 | 29 章 15〜19 節 | [ ] |
| 26-chapter-30 | 30 章 | [ ] |
| 27-chapter-31 | 31 章 | [ ] |
| 28-chapter-32-34 | 32〜34 章 | [ ] |
