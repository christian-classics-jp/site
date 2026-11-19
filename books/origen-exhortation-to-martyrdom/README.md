# オリゲネス『殉教の勧め』

オリゲネスの『殉教の勧め』（Εἰς μαρτύριον προτρεπτικός）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は P. Koetschau 編、*Origenes Werke* I（Die griechischen christlichen Schriftsteller 2、Leipzig, 1899）の pp. 3〜47。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg2042/tlg007/tlg2042.tlg007.perseus-grc1.xml`）を、次のコマンドで [research/koetschau-1899.txt](research/koetschau-1899.txt) にした。

```sh
node tools/tei2labeled.js cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2042/tlg007/tlg2042.tlg007.perseus-grc1.xml books/origen-exhortation-to-martyrdom/research/koetschau-1899.txt --split --add-angle
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/koetschau-1899.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。

章（1〜51 章）の番号は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた（上のコマンドの `--split`）。電子化が `<add>` で入れた編者の補いは、印刷版と同じ ⟨ ⟩ にした（`--add-angle`）。それ以外は本文の文字を変えていない。電子化の入力の誤りは底本の行では直さず、意図された形で訳した。

聖書の引用は口語訳聖書を参考にした。口語訳にない書（第二マカバイ記など）は七十人訳から訳した。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-chapter-01-05 | 1〜5 章 | [x] |
| 02-chapter-06-10 | 6〜10 章 | [x] |
| 03-chapter-11-13 | 11〜13 章 | [x] |
| 04-chapter-14-17 | 14〜17 章 | [x] |
| 05-chapter-18-21 | 18〜21 章 | [x] |
| 06-chapter-22-27 | 22〜27 章 | [x] |
| 07-chapter-28-29 | 28〜29 章 | [x] |
| 08-chapter-30-33 | 30〜33 章 | [x] |
| 09-chapter-34 | 34 章 | [x] |
| 10-chapter-35-37 | 35〜37 章 | [ ] |
| 11-chapter-38-40 | 38〜40 章 | [ ] |
| 12-chapter-41-46 | 41〜46 章 | [ ] |
| 13-chapter-47-51 | 47〜51 章 | [ ] |
