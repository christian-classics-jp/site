# オリゲネス『グレゴリオスへの手紙』

オリゲネスが弟子のグレゴリオスに宛てた手紙の、ギリシア語原文からの翻訳。手紙は、4 世紀にバシレイオスとナジアンゾスのグレゴリオスがオリゲネスの著作から編んだとされる抜粋集『フィロカリア』の 13 章として伝わる。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は J. A. Robinson 編、*The Philocalia of Origen*（Cambridge, 1893）の 13 章（pp. 64〜67）。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg2042/tlg019/tlg2042.tlg019.1st1K-grc1.xml`）から、13 章だけを次のコマンドで [research/robinson-1893.txt](research/robinson-1893.txt) にした。

```sh
node tools/tei2labeled.js cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg2042/tlg019/tlg2042.tlg019.1st1K-grc1.xml books/origen-letter-to-gregory/research/robinson-1893.txt --only 2.13
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/robinson-1893.txt` と `both.md` に置いたギリシア語本文もそれを引き継ぐ。

節（1〜4）は底本の 13 章の節番号に従う。底本テキストのラベルは `1.1`〜`4.1` の形で、小数点の後ろの `.1` は道具の都合で付けたもの。13 章の頭に『フィロカリア』の編者が付けた題（哲学から学ぶことが、いつ、だれにとって聖書の解き明かしに役立つか）は、オリゲネスの手紙の一部ではないので、底本テキストに入れず、訳さない。電子化の入力の誤りは底本の行では直さず、印刷版の読みで訳した。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-letter | 1〜4 節 | [ ] |
