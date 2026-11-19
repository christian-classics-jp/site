# 校訂上の論点

ラクタンティウス『迫害者たちの死について』の本文で、写本と刊本の読みが分かれる箇所、底本が写本の欠けを補った箇所、編者のあいだで構文や意味の取り方が分かれて訳に響く箇所、聖書や古典の引用・暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Brandt–Laubmann 1897 の本文、`../brandt-1897.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。各項の見出しのラベルは底本テキストの行頭のラベル（章.節）。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は各資料の OCR テキスト（`_djvu.txt`）の行番号。底本の校注は OCR が崩れる（とくに斜体）ので、ページ画像（`cache/archive.org/operaomniaacced01laubgoog/pages/`）で読み、OCR の行番号はおよその位置として添える。

- 底本（Brandt）：S. Brandt と G. Laubmann 編、CSEL 27.2（1897）。各ページの上が本文、その下に LOCI AVCTORVM EXPILATORVM SIMILES（並行の箇所）、その下に校注。校注の番号はページごとの行番号（本文の欄外の 5、10 … で数える）。画像の番号は印刷ページ−127（`0044_full.jpg`＝p. 171）。`nN_w1600.jpg` は archive.org のページ画像で、N＝IIIF の番号−1（n44＝p. 172）。各論点では「p. 172 校注 9」のように、印刷ページと校注の行番号で挙げる。
- 校注の略号（OCR l. 1590–1595）：
  - C：パリ国立図書館 2627 番（旧コルベール写本）、11 世紀。この書を伝える唯一の写本。傷み、虫食い（foramen）、余白の切り取りで欠けが多い。
  - Bal：Baluze の初版（Miscellanea II、Paris 1679）。
  - 校注の「spatia explenda」は、C にその数の字の欠けがあること（「8 f. spatia」は 8 字ほど）。底本の山括弧（底本テキストでは ⟨ ⟩）には二種類ある。C の欠けを埋めるもの（校注に spatia の数がある）と、欠けのないところに編者が語を足したもの（校注は「add.」だけ）。各論点でどちらかを書く。
  - 「s. l.」は行の上に書き足したもの、「er.」「ras.」は消したもの、「corr.」は直したもの、「om.」は欠くこと、「coni.」は推定、「del.」は取り除いたもの。
  - 校注の「⁊ に似た記号（distinctio）」は、C が語や句の切れ目に置く記号。Brandt はこれを語として読まない（1.2、1.3、2.6 では et と読んだ刊本や推定を退け、5.6 では Lenglet が est と読んだものを区切りとする）。
  - 本文の縦線 `|` と、欄外の「f. 1b」「f. 2a」「f. 2b」は C の葉の境（p. 174 の 2.4、p. 177 の 3.4、p. 179 の 5.6 で画像で確かめた）。
- 校注に出る人名（推定を出した刊本の編者や学者）は、Brandt の刷るとおりに挙げる（Heumann、Buenemann、Columbus、Bauldri、Tollius、Lenglet、Le Nourry、Allix、Cuperus、Colomesius、Graeuius、Vonck、Fritzsche、Duebner など）。「ed. Oxon. 1680」はオクスフォードの 1680 年の刊本。「anonymus」は、1734 年にアムステルダムの Miscellaneae obseruationes 4 巻 pp. 31–69 に C の照合を載せた無名の学者（序 p. XII、OCR l. 376–380）。Bentley の推定は、大英博物館にある Le Nourry の刊本の余白の書き込み（序 p. XXVII、l. 1061–1066）。Burnet は 1686 年の英訳（序 p. XXVI、l. 1034–1040。序は、初期の仏訳と英訳が C の傷んだ箇所を訳の中で補っているので、読みの出どころとして扱うと言う）。Omont は C を新しく照合した人で、1.1〜1.2 の C の最初の 6 行は Omont の読みで校注に写されている。
- 序（Prolegomena）p. XI–XII の脚注（OCR l. 340–398）：Brandt は、Baluze が C の傷んだ箇所で写本を見ずに自分の推定を刷ったところがあるとみる（1.3 transacti、1.4 tantae、1.6 mortem digna ultione superbis et impiis、1.7 auctores、1.1 tota die fundis）。
- 並行の箇所：ラクタンティウス自身の『神の教え』（Inst.）と『要約』（Epit.）、コンスタンティヌスの『聖徒の集いへの演説』（4〜6 章に並行。p. 178・179 の LOCI）。『神の教え』の本文は 1844 年の Lactantius 全集（`cache/archive.org/luciicciliifirm00miltgoog/`）で読んだ。この巻の OCR には『迫害者たちの死について』の題が見つからなかった。
- 『シビュラの託宣』：Geffcken 1902 の本文（`cache/archive.org/dieoraculasibyll00geffuoft/`）。
- 口語訳：`node tools/bible.js` で引いた 1955 年版の本文。
- ANF：Ante-Nicene Fathers 第 7 巻の英訳（`cache/ccel.org/anf07.txt`、1〜6 章は l. 29278–29488）。底本より古い刊本の本文から訳したもので、Baluze などの補いに従うところがある。レビューの読み比べに使う。英訳の文言はこの一覧に使わない。
