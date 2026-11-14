# 校訂上の論点

オリゲネス『グレゴリオスへの手紙』の本文で、写本・刊本の読みが分かれる箇所と、聖書の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Robinson 1893、`../robinson-1893.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。電子化と印刷版の食い違い（入力の誤り）は照合（`../collation/`）で扱い、ここには書かない。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は、ことわりがなければ底本の印刷版の OCR（`cache/archive.org/philocalia00origuoft/philocalia00origuoft_djvu.txt`）の行番号。ギリシア語の OCR は崩れるので、読みは IIIF のページ画像（`cache/archive.org/philocalia00origuoft/pages/`。画像の番号は leaf ＝ 印刷ページ＋58。pp. 64〜67 ＝ 0122〜0125）で確かめる。

## 底本の印刷版の形

- 底本（Robinson）：J. A. Robinson 編、The Philocalia of Origen（Cambridge, 1893）の 13 章、pp. 64〜67。ページの下に異読の欄（余白の行番号つき）、欄外に写本の略号（ABC）、聖書の箇所（「Ex. xi 2」など）、Delarue 版のページ（31、32）がある。異読の欄の「Ru. I. 30」は Delarue（Ruaeus）版第 1 巻 p. 30 から始まることを示す（画像 0122_full.jpg、l. 5371）。
- 本文の扱い（同じ版の 2024 年のスキャンの OCR、`cache/archive.org/philocaliaoforig0000orig/philocaliaoforig0000orig_djvu.txt` l. 2266〜2285）：編者は A・B・C を全体にわたって照合し、ときにほかの写本の読みを挙げる。綴りの違いや写字生の明らかな誤りは、原則として欄に載せない。ただし聖書の引用の異読は詳しく載せる。
- 正誤表に pp. 64〜67 の項はない（本の AGENTS.md、sources.md）。

## 写本・刊本の略号（Robinson）

2024 年のスキャンの OCR の略号表（l. 2287〜2300）による。

- A：Patm. 270（パトモス写本）。
- B：Ven. 47（ヴェネツィア、マルチアナ図書館 gr. 47）。
- C：Paris. Suppl. 615（パリ）。
- E：Ven. 48。この手紙では 1.1 の Ῥωμαῖον の項にだけ出る。
- 「B*」「B^corr. pri. man.」（p. 64 の欄 17、画像 0122_full.jpg）は略号表に説明がない。使い方と表記（corr. pri. man. ＝ correctio primae manus）から、B の元の読みと、B の第一の手（写字生自身）による直しと読む。
- Tarinus：J. Tarin の『フィロカリア』の刊本（Paris, 1618）。それまで唯一の全文の刊本で、後代の信頼できない写本（Par. 458）から刷った（同 OCR l. 146〜166、793〜799）。異読の欄では「conjecit Tarinus」（Tarin の推定）の形で出る。

## 読み比べる校訂本（Koetschau 1894）

- K：P. Koetschau 編、Des Gregorios Thaumaturgos Dankrede an Origenes, als Anhang der Brief des Origenes an Gregorios Thaumaturgos（Freiburg i. B. und Leipzig, 1894。題扉 l. 170〜196）。手紙は付録の pp. 40〜44（OCR `cache/archive.org/desgregoriosthau00greg/desgregoriosthau00greg_djvu.txt` l. 4126〜4361。画像 `cache/archive.org/desgregoriosthau00greg/pages/`、leaf 0082〜0085 ＝ pp. 40〜43。p. 44 は画像を取れず OCR だけ）。
- 本文の拠り所：Robinson の版を底にし、H. Achelis が新たに照合した B の読みを加えたもの（l. 1535〜1540）。そのため K の欄が挙げる写本の読みは B だけで、A・C・E の読みは Robinson の欄だけに拠る。
- K の略号（l. 1567〜1590）：Rob ＝ Robinson の版、JpTh ＝ Jahrbücher für protestantische Theologie。B¹・B²・B³（直しの手）は略号表に説明がない。欄の使い方（「corr aus … B²」）から、B の中の直しの段階を示すと読める。欄外の「39v」「40r」などは B の紙葉。
- K の「Anmerkungen zum Text」（l. 4378〜4808）はグレゴリオスの『感謝の演説』（Dankrede）だけを扱い、手紙への注はない。聖書の箇所の索引（l. 4810〜。手紙の分は l. 4841〜4850）は手紙の分も挙げる。
- K では、聖書の文言どおりとみた語を字間を空けた活字（隔字体）で刷る（2.1 の σκεύη ἀργυρᾶ καὶ χρυσᾶ καὶ ἱματισμόν、ῥαφιδευτῶν など。画像 0083_full.jpg）。

## 聖書の本文

- 七十人訳：Swete, The Old Testament in Greek I・II の OCR（`cache/archive.org/oldtestamentingr01swetuoft/oldtestamentingr01swetuoft_djvu.txt`、`cache/archive.org/oldtestamentingr02swetuoft/oldtestamentingr02swetuoft_djvu.txt`）。Swete I・II と呼ぶ。列王紀上は七十人訳では「王国の書 三」（3 Reg）。節の番号は OCR で崩れるところがあるので、ページの柱（「BASIAEION Γ XI 20」など）と合わせて挙げる。
- 新約：Robinson & Pierpont のビザンティン本文の電子テキスト（Nestle-Aland との違いを `{NA … > …}` で添える。`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`）。
- 口語訳：`node tools/bible.js`。

## 読み比べる英訳

- ANF：Ante-Nicene Fathers 第 4 巻の F. Crombie の英訳（`cache/ccel.org/anf04.txt` l. 39435〜39543）。論点一覧には訳文を写さない。注の事実だけを使う。
