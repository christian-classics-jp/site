# キプリアヌス小品集

北アフリカのカルタゴの監督キプリアヌスの著作四つ、『ドナトゥスへ』（Ad Donatum）、『カトリック教会の一致について』（De catholicae ecclesiae unitate）、『背教者について』（De lapsis）、『主の祈りについて』（De dominica oratione）のラテン語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は W. Hartel 編、*S. Thasci Caecili Cypriani opera omnia* I（Corpus Scriptorum Ecclesiasticorum Latinorum 3.1、Wien: C. Gerold, 1868）の本文（『ドナトゥスへ』pp. 3〜16、『カトリック教会の一致について』pp. 209〜233、『背教者について』pp. 237〜264、『主の祈りについて』pp. 267〜294）。パブリックドメイン。archive.org のスキャン（[sthascicaecilic00hartgoog](https://archive.org/details/sthascicaecilic00hartgoog)）の画像から本文を起こし、作品ごとに [research/hartel-1868-ad-donatum.txt](research/hartel-1868-ad-donatum.txt)、`research/hartel-1868-de-unitate.txt`、`research/hartel-1868-de-lapsis.txt`、`research/hartel-1868-de-dominica-oratione.txt` に置く。

章の番号は作品ごとに底本に従う。底本には節の番号がないので、節の番号はこの訳で付けたもの。章を文の切れ目で 25 語以上のまとまりに分け、`node tools/split-units.js` で番号を付けた。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは `research/cruxes/` にある。

| 節 | 範囲 | 訳 |
|---|---|---|
| 01-ad-donatum-01-05 | ドナトゥスへ 1〜5 章 | [x] |
| 02-ad-donatum-06-10 | ドナトゥスへ 6〜10 章 | [x] |
| 03-ad-donatum-11-16 | ドナトゥスへ 11〜16 章 | [x] |
| 04-de-unitate-01-06 | カトリック教会の一致について 1〜6 章 | [x] |
| 05-de-unitate-07-11 | カトリック教会の一致について 7〜11 章 | [ ] |
| 06-de-unitate-12-16 | カトリック教会の一致について 12〜16 章 | [ ] |
| 07-de-unitate-17-21 | カトリック教会の一致について 17〜21 章 | [ ] |
| 08-de-unitate-22-27 | カトリック教会の一致について 22〜27 章 | [ ] |
| 09-de-lapsis-01-06 | 背教者について 1〜6 章 | [ ] |
| 10-de-lapsis-07-12 | 背教者について 7〜12 章 | [ ] |
| 11-de-lapsis-13-18 | 背教者について 13〜18 章 | [ ] |
| 12-de-lapsis-19-24 | 背教者について 19〜24 章 | [ ] |
| 13-de-lapsis-25-30 | 背教者について 25〜30 章 | [ ] |
| 14-de-lapsis-31-36 | 背教者について 31〜36 章 | [ ] |
| 15-de-dominica-oratione-01-07 | 主の祈りについて 1〜7 章 | [ ] |
| 16-de-dominica-oratione-08-12 | 主の祈りについて 8〜12 章 | [ ] |
| 17-de-dominica-oratione-13-17 | 主の祈りについて 13〜17 章 | [ ] |
| 18-de-dominica-oratione-18-21 | 主の祈りについて 18〜21 章 | [ ] |
| 19-de-dominica-oratione-22-27 | 主の祈りについて 22〜27 章 | [ ] |
| 20-de-dominica-oratione-28-31 | 主の祈りについて 28〜31 章 | [ ] |
| 21-de-dominica-oratione-32-36 | 主の祈りについて 32〜36 章 | [ ] |
