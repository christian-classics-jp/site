# 校訂上の論点（略号と資料）

『神学講話』の本文で、写本・古い刊本・注解者の読みが分かれる箇所と、聖書や古典の引用・暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置き、節の順に並べる。訳は底本（Mason 1899 の本文）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。電子化の入力の誤り（電子化と印刷版の食い違い）は、ここではなく `research/collation/` で扱う。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「OCR l.」は Mason 1899 のスキャンの OCR テキスト（`cache/archive.org/thefivetheologic00greguoft/thefivetheologic00greguoft_djvu.txt`）の行番号。「TEI l.」は底本の電子化（`F1K/tlg2022/tlg007/…xml` など、講ごとのファイル）の行番号。画像は `cache/archive.org/thefivetheologic00greguoft/page/nN_w1600.jpg`（N＝印刷ページ＋27）。

## 印刷版の異読の欄

Mason は各ページの本文の下に異読の欄を置き、印刷ページの行番号と、写本の略号で読みを示す。ギリシア語はアクセントなしで印刷されている。章の番号を太字で挟む（`2. 10 δησωσιν η λυσωσι bd` は、2 章、そのページの 10 行目）。Mason は完全な校訂版ではないと断っている（OCR l. 815–820）。

- a：パリ国立図書館 Medicean 510。アンシャル体の羊皮紙写本で、バシレイオス 1 世（886 年没）を在位中の皇帝として描く絵があり、そのころの写本。Benedictine 版の略号は bm。5 編すべてを含むが、第 28 講話の終わりの数行と、第 31 講話の初めの 5 章半と終わりを欠く（OCR l. 863–881）。Mason がパリで照合した。照合は一部で完全でない（l. 837–846）。
- b：パリ国立図書館 Coislin 51。10 世紀。a とかなり違う本文を伝える。Benedictine 版の略号は Coisl. 1（OCR l. 883–888、PDF p. 25 の画像）。Mason がパリで照合した。
- c：ミュンヘン Cod. 448。10 世紀。5 編すべてを含む。Gleye による全文の照合を使う（OCR l. 847–851、889–895）。
- d：ボドリアン図書館の 2 写本を一つの略号で示す。Barocc. 218（11 世紀。5 編のうち第 28 講話だけ）と Barocc. 181（11 世紀か。後の 3 編＝第 29〜31 講話）（OCR l. 897–906。PDF p. 25＝序論 p. xxi の画像で確かめた）。
- e：オックスフォード、Magdalen College のギリシア語写本 V。11 世紀（OCR l. 907–910）。
- f：オックスフォード、Lincoln College のギリシア語写本 XX。11 世紀の終わりごろか（OCR l. 916–918）。
- g：ケンブリッジ、Trinity College B. 9. 13。11 世紀の初めごろ。第 29〜31 講話だけを含む（OCR l. 921–928）。
- El：クレタのエリアス（11 世紀半ば）の注解。当時の本文を示す証人として Mason が引く（OCR l. 961–970）。
- 引用符（‘…’）の中：Benedictine 版（1778〜1842）の校注の写し。たとえば p. 5 の `εξικνειται bd ‘Or. 1 etc.’` は、Mason の照合で b と d が ἐξικνεῖται と読み、Benedictine 版の編者が「Oratoire 1 ほか」も同じと言う、という意味（OCR l. 990–1001）。Colb. などの Benedictine 版の略号を、Mason は展開していない（Coisl. 1 が b であることだけを書く）。‘in nonnullis’ は「いくつか（の写本）では」というラテン語。
- Benedictine 版：Mason の本文の基になった刊本。Mason は、その読みと校注が満足できないとして、写本の照合で実質的に新しい本文を作った（OCR l. 831–836）。ほかの古い刊本は Hervagius（バーゼル 1550）、De Billy（Prunaeus。パリ 1569 以降、ラテン語訳つき）、Leuvenklaius（バーゼル 1571）、Morel（パリ 1630）（OCR l. 972–980）。

## 注解

- Mason の注解：異読の欄の下の英語の注。各章の要約（イタリック）と、語句の注。行番号は印刷ページの行。聖句の出典もここにある。
- 電子化（First1KGreek）は、異読の欄と注解を `<note type="footnote">` に入れている。OCR が崩れているときの読み合わせに使える（ギリシア語のアクセントは電子化の入力者が付けたもの）。

## 聖書と古典の本文

- 七十人訳：H. B. Swete, The Old Testament in Greek according to the Septuagint I〜III の OCR（`cache/archive.org/oldtestamentingr01swetuoft/…`、`oldtestamentingr02swetuoft/…`、`theoldtestamenti03swetuoft/…`）。章節は七十人訳の数え方で書き、口語訳の数え方を括弧で添える。
- 新約：Robinson & Pierpont のビザンティン本文の電子テキスト（`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`。第二テモテだけ `…/master/csv-unicode/ccat/with-variants/2TI.csv`）。Nestle-Aland との違いが `{NA … > …}` で添えてある。
- 口語訳：`node tools/bible.js`。
- プラトン：Perseus Digital Library の canonical-greekLit（Burnet 版）。

## 未確認の点（全体）

- 第 27 講話の異読の欄は d を引く（p. 1 の `om τοις ημ...χαιροντες acd`、p. 7 の `ευσεβες acd` など）。ところが序論の d の説明（OCR l. 897–906。PDF p. 25 の画像でも同じ）では、Barocc. 218 は 5 編のうち第 28 講話（Mason の ii）だけ、Barocc. 181 は後の 3 編だけを含むとあり、第 27 講話を含む写本がない。第 27 講話の d がどの写本を指すかは確かめていない。
