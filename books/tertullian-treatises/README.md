# テルトゥリアヌス小品集

北アフリカのカルタゴのテルトゥリアヌスの短い著作四つ、『殉教者たちへ』（Ad martyras）、『見世物について』（De spectaculis）、『祈りについて』（De oratione）、『洗礼について』（De baptismo）のラテン語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は F. Oehler 編、*Q. Septimii Florentis Tertulliani quae supersunt omnia* I（Leipzig: T. O. Weigel, 1853）の本文（『殉教者たちへ』pp. 3〜14、『見世物について』pp. 17〜63、『祈りについて』pp. 553〜584、『洗礼について』pp. 619〜640）。パブリックドメイン。archive.org のスキャン（[quintiseptimiifl0001fanc](https://archive.org/details/quintiseptimiifl0001fanc)）の画像から本文を起こし、作品ごとに [research/oehler-1853-ad-martyras.txt](research/oehler-1853-ad-martyras.txt)、[research/oehler-1853-de-spectaculis.txt](research/oehler-1853-de-spectaculis.txt)、[research/oehler-1853-de-oratione.txt](research/oehler-1853-de-oratione.txt)、[research/oehler-1853-de-baptismo.txt](research/oehler-1853-de-baptismo.txt) に置いた。

章の番号は作品ごとに底本に従う。底本には節の番号がないので、節の番号はこの訳で付けたもの。章を文の切れ目で 25 語以上のまとまりに分け、`node tools/split-units.js` で番号を付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes/](research/cruxes/) にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-ad-martyras-01-03 | 殉教者たちへ 1〜3 章 | [x] |
| 02-ad-martyras-04-06 | 殉教者たちへ 4〜6 章 | [x] |
| 03-de-spectaculis-01-03 | 見世物について 1〜3 章 | [x] |
| 04-de-spectaculis-04-08 | 見世物について 4〜8 章 | [x] |
| 05-de-spectaculis-09-13 | 見世物について 9〜13 章 | [x] |
| 06-de-spectaculis-14-19 | 見世物について 14〜19 章 | [x] |
| 07-de-spectaculis-20-25 | 見世物について 20〜25 章 | [x] |
| 08-de-spectaculis-26-30 | 見世物について 26〜30 章 | [x] |
| 09-de-oratione-01-04 | 祈りについて 1〜4 章 | [x] |
| 10-de-oratione-05-10 | 祈りについて 5〜10 章 | [x] |
| 11-de-oratione-11-19 | 祈りについて 11〜19 章 | [x] |
| 12-de-oratione-20-22 | 祈りについて 20〜22 章 | [x] |
| 13-de-oratione-23-29 | 祈りについて 23〜29 章 | [x] |
| 14-de-baptismo-01-04 | 洗礼について 1〜4 章 | [x] |
| 15-de-baptismo-05-08 | 洗礼について 5〜8 章 | [ ] |
| 16-de-baptismo-09-12 | 洗礼について 9〜12 章 | [ ] |
| 17-de-baptismo-13-17 | 洗礼について 13〜17 章 | [ ] |
| 18-de-baptismo-18-20 | 洗礼について 18〜20 章 | [ ] |
