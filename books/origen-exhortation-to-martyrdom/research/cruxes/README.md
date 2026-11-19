# 校訂上の論点

オリゲネス『殉教の勧め』の本文で、写本・刊本・学者の読みが分かれる箇所と、聖書の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Koetschau 1899、`../koetschau-1899.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。電子化（First1KGreek）の入力の誤りは照合（`../collation/`）で扱い、ここには書かない。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は、ことわりがなければ印刷版の OCR（`cache/archive.org/origeneswerke01orig/origeneswerke01orig_djvu.txt`）の行番号。ギリシア語の OCR は崩れるので、読みは IIIF のページ画像（`cache/archive.org/origeneswerke01orig/pages/`）で確かめる。画像の番号は archive.org の leaf で、p. 3〜11 は leaf ＝ ページ＋96（p. 3 が 0099）、p. 12 から後は leaf ＝ ページ＋98（`../sources.md` の対応表の行）。「第 2 巻 l.」は `cache/archive.org/origeneswerke02orig/origeneswerke02orig_djvu.txt` の行番号。

## 底本の印刷版の形

- 底本（Koetschau）：P. Koetschau 編、Origenes Werke I（GCS 2、1899）pp. 3〜47。ページの下に、聖書の箇所の欄（「Vgl.」は参照、無印は引用）と異読の欄（行番号つき）を置く。余白の行番号はページごとに 1 から数える。右の欄外の数字は Delarue 版第 1 巻のページ（274〜310。l. 5325〜5326）。
- 表題 ΩΡΙΓΕΝΟΥΣ ΕΙΣ ΜΑΡΤΥΡΙΟΝ ΠΡΟΤΡΕΠΤΙΚΟΣ は p. 3 にある（画像 0099_full.jpg）。
- 正誤表：第 2 巻の巻末の「Nachträge und Berichtigungen」の初めの「Die Schrift vom Martyrium. Band 1.」（第 2 巻 l. 57454〜57496。画像は第 2 巻の leaf 0551）。pages.json の印刷版の行範囲に入っていないので、ページごとにここも確かめる。最初の項目は OCR で「15*29-」と崩れているが、画像（第 2 巻 `0551_pct:0,28,100,22.jpg`）では「7, 29」で、6 章の σημεῖα καὶ τέρατα（p. 7 の 29 行）の直し。

## 印刷版の記号

『祈りについて』と同じ（`books/origen-on-prayer/research/cruxes/README.md` の「印刷版の記号」）。この作品では、⟨ ⟩ は編者の補い（5.3 の ⟨ἢ⟩。p. 6 の欄 22「füge ich ein」）、„ “ は聖書などの文言どおりの引用、† は崩れた本文（18.1 の 1 か所）、( ) はオリゲネスの挿入。異読の欄の `<` は欠く・省く、`+` は足す（l. 5332〜5334）。

## 写本・刊本・学者の略号

第 1 巻の略号表（pp. XCI〜XCII、l. 5223〜5334）と、序の「A. Die Schrift vom Martyrium」の写本の記述（l. 798〜1092）による。

- M：Cod. Venetus Marcianus 45、14 世紀（l. 5238）。この作品は fol. 315r〜334r にあり、表題がない（l. 809〜813）。編者は、M の写字生は P よりずっと注意深く、もとの本をほぼそのまま写しているとし、M と P が違うところでは原則として M に従い、M に誤りや欠けがあるところだけ P で直し補ったと述べる（l. 1026〜1035）。
- P：Cod. Parisinus Suppl. Gr. 616、1339 年（l. 5239）。この作品は fol. 345r〜367v（l. 805〜807）。M と同じもとの本から出たが、不注意やわざとで欠けが多い。1〜10 行の大きな欠けの一つが p. 6 の 27 行から（5.4。l. 1013〜1016）。
- Bas：Cod. Basileensis 31、16 世紀（l. 5231）。P の写しで、それまでの刊本はこれだけに拠っていた（l. 883〜905）。
- Reg：Cod. Regius Parisinus Gr. 945、14 世紀（l. 5240）。この作品の断片二つを含むが、P の写しなので本文の校訂には使わない（l. 876〜881）。
- M¹、P¹：それぞれの写本の第一の手（l. 5229 の A¹ ＝ erste Hand による）。M* はもとの読み（l. 5228）。M²、P² は後の手と推す（略号表には A* と A¹ の説明しかない）。
- Del.：Delarue 版、Origenis opera omnia 第 1 巻、Paris 1733、pp. 274〜310（l. 5280、912〜913）。Bas の写しに拠り、Wettstein の版も使った（l. 913〜919）。欄では「Del. (I 275 Anm. a)」のように Delarue 版の注で挙げる。
- Wettstein：J. R. Wetstein 版（初版）、Basel 1674（l. 5305〜5306、909〜911）。欄では「Wettstein (p. 163 am Rand)」のように挙げる。
- Lomm.：Lommatzsch 版。この作品は第 20 巻（l. 5289〜5290、950〜953）。
- LXX：Tischendorf-Nestle の七十人訳、第 7 版 1887（l. 5308〜5309）。
- 「am Rand」は写本の欄外の書き込み、「auf Rasur」は削った跡の上に書いたもの、「übergeschrieben」は行の上に書き足したもの。

## 読み比べに使う資料

- 1926：Koetschau のドイツ語訳（BKV 48。`cache/bkv.unifr.ch/files/ermahnung-zum-martyrium-bkv/ermahnung-zum-martyrium-bkv_deutsch_146.txt`）。訳者が 1899 年の後に採った改めに従うところがあり、注でそれを述べる。注は「注 16」のように番号で挙げる（行番号も添える）。各ページの論点に、1926 が底本と違う読みに従うところを書く。
- 新約の本文：Robinson & Pierpont のビザンティン本文の電子テキスト（Nestle-Aland との違いを `{NA … > …}` で添える。`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`。行番号で挙げる）。
- 七十人訳：Swete, The Old Testament in Greek I〜III の OCR（`cache/archive.org/oldtestamentingr01swetuoft/`、`oldtestamentingr02swetuoft/`、`theoldtestamenti03swetuoft/`）。Swete I・II・III と呼ぶ。
- 口語訳：`node tools/bible.js`（bible-api）。
