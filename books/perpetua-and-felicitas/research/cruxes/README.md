# 校訂上の論点

『ペルペトゥアとフェリキタスの殉教録』の本文で、写本・ギリシア語訳・校訂版の読みが分かれる箇所と、本文の成り立ちにかかわる箇所、聖書の引用・暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Robinson 1891 の本文、`../robinson-1891.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は各資料の OCR テキスト（`_djvu.txt` など）の行番号。Robinson の校注とギリシア語訳は OCR が崩れるので、IIIF のページ画像（`cache/archive.org/<identifier>/pages/` に保存したもの）で読み、行番号はおよその位置として添える。

- 底本（Robinson）：J. A. Robinson, The Passion of S. Perpetua（1891）のラテン語本文。偶数ページ（印刷 pp. 60〜94、画像の番号は印刷ページ＋24）の上に本文、その下に写本の異読の校注（行番号つき）と、英語の注を置く。対向の奇数ページにギリシア語訳とその校注を置く。余白の行番号はページごとに 1 から数える。聖句の引用はイタリック。
- 写本（Robinson の序論 pp. 10〜13、djvu l. 860–1020）：
  - A：モンテ・カッシーノの写本 204（11 世紀ごろ）。1 章の序を伝える唯一のラテン語写本。Robinson はほとんどいつも A の読みを採る（l. 1115–1121）。A は語末の m をよく落とす（p. 61 の注、l. 3728–3732）。
  - B：パリの写本 17626（コンピエーニュ旧蔵、Compendiensis。10 世紀）。表題のあと 2.1 の Reuocatus から始まり、1 章と 2.1 の初めの数語を欠く（l. 888–896）。
  - C：Ruinart の刊本と 1680 年のオクスフォードの刊本が読みを伝える写本（Salisburgensis）。1 章を欠く。
  - B・C は共通の祖先（Robinson は BCg と呼ぶ。g はギリシア語訳。l. 937）にさかのぼり、A とは別の系統（l. 1018–1030、1100–1112）。
- ギリシア語訳（Gr.）：底本の奇数ページに載る、唯一の写本（エルサレムの聖墳墓修道院の写本。2 月の聖人伝を集めたもの。Harris は書体を 10 世紀を下らないとする）によるギリシア語訳。Rendel Harris が 1889 年に見いだし、1890 年に Gifford と刊行した（l. 341–352、375–380）。Robinson はラテン語が原文で、ギリシア語はその訳だとみる（pp. 3〜9、l. 440–850）。訳さないが、ラテン語の読みを確かめる証拠として使う。Robinson は Gr. の本文をおおむね写本のまま刷り、推定は校注に回す（1.1 の δόγματα の校注に「forsan παραδείγματα」、1.3 の ἔχοντα の校注に Gebhardt の推定 ἔσχατα）。ただし名前などは直して刷り、写本の形を校注に記す（2.1 の Θουρβιτάνων と Οὐιβία。写本は θουκριτάνων、ἰουλία καὶ περπετούα。画像 0085・0087 の校注）。Gebhardt は推定を本文に入れて刷る。
- 短い形の行伝（Short Latin）：後に作られたラテン語の短い書き直し（Robinson pp. 15〜21、l. 1125–1680。本文は pp. 100 以下）。Robinson は BCg の系統に結びつける。
- Gebhardt 1902：Acta martyrum selecta の「VII. Passio SS. Perpetuae et Felicitatis」（印刷 pp. 61〜95、画像の番号は印刷ページ＋17）。節の番号はこれに従う。序文によれば、ラテン語本文は Franchi de' Cavalieri の版（1896）を参照し、まだ使われていない写本で Robinson の本文を直したもの（l. 246–257）。脚注の略号は Gebhardt 自身のもの（略号表 l. 505–527、画像 0017）：「cod.」は写本（1 章ではラテン語は A、ギリシア語は Gr. の写本）、「edd.」は従来の刊本、「F.」は Franchi de' Cavalieri、「R.」は Ruinart、「Hs.」は Harris、「Du.」は Duchesne、「Ro.」は略号表では「Robertson」と刷られているが、Gr. の δόγματα を παραδείγματα に直す推定を「Ro.」に帰していて、Robinson の校注の推定と一致する。Robinson の写本 A・B・C とは別の記号。
- Knopf 1913：Ausgewählte Märtyrerakten（第 2 版）の「8. Martyrium der Perpetua und Felicitas」（印刷 p. 42 から）。OCR は使えないので画像で読む。同じページが二度ずつ撮られていて、0136・0138＝p. 42、0137・0139＝p. 43、0140・0142＝p. 44、0143＝p. 45、0144＝p. 46。ページの下には主に聖書の箇所を記し、異読の注はまれ（6.5 の percussit に一つ。p. 46）。Robinson の本文に近いが、補いを `<…>` で示すことがある。
- 七十人訳：Swete 1896（The Old Testament in Greek III、`cache/archive.org/theoldtestamenti03swetuoft/`）。
- 新約のギリシア語本文：Robinson & Pierpont の Byzantine Textform（2018 年版）の電子テキスト（`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/`）。Nestle–Aland と違う箇所を `{NA … > …}` で添えている。
- 口語訳：`node tools/bible.js` で引いた 1955 年版の本文。
- ANF：Ante-Nicene Fathers 第 3 巻の Wallis の英訳（`cache/ccel.org/anf03.txt`）。レビューの読み比べに使う。英訳の文言はこの一覧に使わない。
