# ナジアンゾスのグレゴリオス『神学講話』

ナジアンゾスのグレゴリオスの『神学講話』（Λόγοι θεολογικοί。第 27〜31 講話）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は A. J. Mason 編、*The Five Theological Orations of Gregory of Nazianzus*（Cambridge Patristic Texts、Cambridge: Cambridge University Press, 1899）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg2022/tlg007`〜`tlg011`。1 講話 1 ファイル）を、講話ごとに次のコマンドで変換し、第 27〜31 講話の順につないで [research/mason-1899.txt](research/mason-1899.txt) にした。

```sh
node tools/tei2labeled.js <第 27 講話の TEI の写し> 27.txt --split --prefix 27
node tools/tei2labeled.js <第 28 講話の TEI の写し> 28.txt --split --prefix 28
node tools/tei2labeled.js <第 29 講話の TEI の写し> 29.txt --split --prefix 29
node tools/tei2labeled.js <第 30 講話の TEI の写し> 30.txt --split --prefix 30
node tools/tei2labeled.js <第 31 講話の TEI の写し> 31.txt --split --prefix 31
```

変換の前に、TEI の写しで次のところだけを直した（第 31 講話は直していない）。電子化が本文に入れてしまった Mason の英語の注解の断片 3 か所（27.9、28.25、30.9）と印刷版の行番号 2 か所（29.9、29.10）を除き、電子化が 9 章に続けていた第 27 講話の 10 章を、印刷版（p. 17）どおり別の章にした。本文の語は変えていない。直した箇所と、底本の行では直さない入力の誤りの扱いは [AGENTS.md](AGENTS.md) の「底本の扱い」にある。

First1KGreek の本文は CC BY-SA 4.0 で、`research/mason-1899.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。訳文のライセンスも CC BY-SA 4.0。電子化の入力の誤りと印刷版（[archive.org のスキャン](https://archive.org/details/thefivetheologic00greguoft)）の誤植は底本の行では直さず、意図された形で訳した。

講と章の番号は底本に従う。章の中の節の番号は底本にはなく、この訳が文の切れ目で付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes/](research/cruxes/) にある。

| 節 | 章 | 訳 |
|---|---|---|
| 01-oration-27-1-5 | 第 27 講話 1〜5 章 | [x] |
| 02-oration-27-6-10 | 第 27 講話 6〜10 章 | [x] |
| 03-oration-28-1-4 | 第 28 講話 1〜4 章 | [x] |
| 04-oration-28-5-9 | 第 28 講話 5〜9 章 | [x] |
| 05-oration-28-10-13 | 第 28 講話 10〜13 章 | [x] |
| 06-oration-28-14-18 | 第 28 講話 14〜18 章 | [x] |
| 07-oration-28-19-21 | 第 28 講話 19〜21 章 | [x] |
| 08-oration-28-22-25 | 第 28 講話 22〜25 章 | [x] |
| 09-oration-28-26-28 | 第 28 講話 26〜28 章 | [x] |
| 10-oration-28-29-31 | 第 28 講話 29〜31 章 | [ ] |
| 11-oration-29-1-5 | 第 29 講話 1〜5 章 | [ ] |
| 12-oration-29-6-9 | 第 29 講話 6〜9 章 | [ ] |
| 13-oration-29-10-13 | 第 29 講話 10〜13 章 | [ ] |
| 14-oration-29-14-17 | 第 29 講話 14〜17 章 | [ ] |
| 15-oration-29-18-21 | 第 29 講話 18〜21 章 | [ ] |
| 16-oration-30-1-5 | 第 30 講話 1〜5 章 | [ ] |
| 17-oration-30-6-10 | 第 30 講話 6〜10 章 | [ ] |
| 18-oration-30-11-13 | 第 30 講話 11〜13 章 | [ ] |
| 19-oration-30-14-18 | 第 30 講話 14〜18 章 | [ ] |
| 20-oration-30-19-21 | 第 30 講話 19〜21 章 | [ ] |
| 21-oration-31-1-6 | 第 31 講話 1〜6 章 | [ ] |
| 22-oration-31-7-10 | 第 31 講話 7〜10 章 | [ ] |
| 23-oration-31-11-15 | 第 31 講話 11〜15 章 | [ ] |
| 24-oration-31-16-20 | 第 31 講話 16〜20 章 | [ ] |
| 25-oration-31-21-24 | 第 31 講話 21〜24 章 | [ ] |
| 26-oration-31-25-28 | 第 31 講話 25〜28 章 | [ ] |
| 27-oration-31-29-33 | 第 31 講話 29〜33 章 | [ ] |
