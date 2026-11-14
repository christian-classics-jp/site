# 校訂上の論点

オリゲネス『祈りについて』の本文で、写本・刊本・学者の読みが分かれる箇所と、聖書の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Koetschau 1899、`../koetschau-1899.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は、ことわりがなければ印刷版の OCR（`cache/archive.org/origeneswerke02orig/origeneswerke02orig_djvu.txt`）の行番号。ギリシア語の OCR は崩れるので、読みは IIIF のページ画像（`cache/archive.org/origeneswerke02orig/pages/`。画像の番号は印刷ページ＋12）で確かめる。「第 1 巻 l.」は `cache/archive.org/origeneswerke01orig/origeneswerke01orig_djvu.txt` の行番号で、その画像は `cache/archive.org/origeneswerke01orig/pages/`（画像の番号は archive.org の leaf。p. XC＝0094、p. XCI＝0095、p. XCII＝0096）。

## 底本の印刷版の形

- 底本（Koetschau）：P. Koetschau 編、Origenes Werke II（GCS 3、1899）pp. 297〜403。ページの下に、聖書の箇所の欄（「Vgl.」は参照、無印は引用）と異読の欄（行番号つき）を置く。余白の行番号はページごとに 1 から数える。右の欄外の数字は Delarue 版第 1 巻のページ、左の欄外は写本 T の紙葉（第 1 巻 p. XCII、l. 5325〜5330。画像 0096_pct:0,45,100,55.jpg）。
- 正誤表：第 2 巻の巻末の「Nachträge und Berichtigungen zu Band II」に、『祈りについて』の本文と欄の直しがある（この作品の分は l. 57731〜。pp. 297〜304 の分は l. 57734〜57750）。pages.json の印刷版の行範囲には入っていないので、ページごとにここも確かめる。

## 印刷版の記号

第 1 巻の略号表（pp. XCI〜XCII、l. 5223〜5334。画像 0095_pct:0,50,100,50.jpg、0096_pct:0,0,100,50.jpg、0096_pct:0,45,100,55.jpg）は、記号として `<`（欠く、省く）と `+`（足す）だけを説明する。[ ] と † の説明は、略号表にも第 1 巻の序の『祈りについて』の部（l. 4265〜5222）にもなく、第 2 巻の巻頭にも見当たらない。次は、序の記述と、異読の欄での使われ方から確かめたもの。

- 点の列 `. . . .`：写本 T の写字生が空けたままにした空白。編者は、T の照合者 Gaskoin の報告に基づいて、空白に入るはずの字数をできるだけ正確に点の数で示したと述べる（第 1 巻 p. XC、l. 5184〜5192。画像 0094_pct:0,0,100,50.jpg）。異読の欄は、空白の大きさを「3¹/₃ 行＝およそ 225 字」のように記す（p. 298 の欄 2）。編者の言い方では、T の写字生が空けておこうとした字数で、紙葉の破損ではない。写字生がなぜ空けたか（写したもとの本の欠けなど）は、序のこの箇所では述べていない。
- ⟨ ⟩：編者が補った語（2.4 の ⟨δὲ⟩。p. 301 の欄 28「füge ich … ein」、画像 0313_full.jpg）。異読の欄の中では、学者が欠けを補う案の文言を ⟨ ⟩ で囲む（p. 298 の欄 2、p. 299 の欄 3）。
- 本文の中の [ ]：編者が、写本にあるが取り除くべきとみた語。4.1 の [τῆς]（l. 21753〜21758「das von mir eingeklammerte τῆς」）、29.3 の [εἰ]（l. 26936〜26937。上に書かれた異読から入ったとみる）、29.7 の [τίς]（l. 27087「von mir eingeklammert」）の欄で確かめた。31.3 の [καὶ] の欄は見つけていない。
- 聖書の箇所の欄と異読の欄の中の [ ]：E. Klostermann が寄せた補い（第 1 巻 p. XC、l. 5205〜5207「wertvolle Beiträge, die durch eckige Klammern bezeichnet sind」。画像 0094_pct:0,50,100,30.jpg）。p. 303 の「[1 Vgl. Matth. 28, 19. —]」などがこれ。ほかに、異読の欄の [so]（原文のまま）、[?]（読みが不確か）、[= …]（説明）は編者の注記。
- †：この作品で 1 か所だけ（2.5 の οὐκ † ἐχάρη γραφῇ）。異読の欄（p. 303 の欄 7、画像 0315_full.jpg）は、ἐχάρη を誤りとし、元の写本で γραφή が直しとして上に書かれていたとみて、οὐκ ἐγράφη を推定する。崩れているとみる本文を、直さずに残した印。

## 写本・刊本・学者の略号

第 1 巻の略号表（pp. XCI〜XCII）で、画像で左の略号まで確かめた（画像 0095_pct:0,50,100,50.jpg、0096_pct:0,0,100,50.jpg）。OCR は Ausgg.・Bent.・Bo.・Del.・Hö. の行の左の略号を落としている（l. 5267〜5283）。

- T：Cod. Cantabrig. Coll. S. Trinitatis B. 8. 10（もと Holm.）、14〜15 世紀（l. 5243）。この作品のほぼ唯一の写本。
- Col：Cod. Regius Parisinus Gr. 1788（もと Colbertinus 3607）、15 世紀（l. 5234）。断片。
- Angl.：無名の英国の学者。この作品への校訂と解釈の注が Reading の版と Delarue 版第 1 巻の巻末に載る（l. 5263〜5265）。欄では「bei Del. I 911a」のように Delarue 版の巻末のページで挙げる。
- Ausgg.：この作品では Oxford（初版）、London（Reading）、Paris（Delarue）の三つの刊本（l. 5269〜5270）。『ケルソス駁論』では Hoeschel、Spencer、Delarue の刊本を指す（l. 5267）。「T Ausgg.」は写本とこの三つの刊本が一致する読み。
- Bent.：Richard Bentley。この作品への校訂の注を Delarue が本文の下に載せた（l. 5272〜5273）。欄では「bei Del. I 197 Anm. b」のように Delarue 版の注で挙げる。
- Bo.：Elie Bouhéreau（『ケルソス駁論』の注。l. 5275〜5278）。
- Del.：Delarue 版、Origenis opera omnia 第 1 巻、Paris 1733（l. 5280）。
- Hö.：Hoeschel の『ケルソス駁論』初版、1605（l. 5282〜5283）。
- Lomm.：Lommatzsch 版。『祈りについて』は第 17 巻（l. 5289〜5290）。
- Lond.：W. Reading 版、London 1728（l. 5293〜5294）。
- Ox.：Oxford の初版、1686（l. 5296〜5297。OCR は年を「1080」と誤る。画像 0096_pct:0,0,100,50.jpg で 1686）。
- Wet.：Wetstein 版、Basel 1694（l. 5305〜5307）。
- LXX：Tischendorf-Nestle の七十人訳、第 7 版 1887（l. 5308〜5309）。
- 略号表にないが欄に出るもの：Huet（P. D. Huet。1652 年にストックホルムで T の写しを作った。第 1 巻 l. 4843〜4846）、Claudius Fleury（Huet のためにラテン語訳を作り、Delarue がそれを載せた。第 1 巻 l. 5083〜5085）、N. T.（新約聖書の本文）。「I. H.」「II. H.」は第 1 の手・第 2 の手（略号表 l. 5229 の A¹ ＝ erste Hand から推す。略号の形そのものの説明はない）。
- そのほかの記号：`<` は欠く・省く、`+` は足す（l. 5332〜5334、画像 0096_pct:0,45,100,55.jpg）。「a. a. O.」は前に挙げた箇所と同じ。

## 読み比べに使う資料

- 1926：Koetschau のドイツ語訳（BKV 48。`cache/bkv.unifr.ch/files/vom-gebet-bkv/vom-gebet-bkv_deutsch_145.txt`）。訳者が 1899 年の後に採った改めに従うところがあり、注でそれを述べる。注は「注 7」のように番号で挙げる。各ページの論点に、1926 が底本と違う読みに従うところを書く。
- 新約の本文：Robinson & Pierpont のビザンティン本文の電子テキスト（Nestle-Aland との違いを `{NA … > …}` で添える。`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`。行番号で挙げる）。
- 七十人訳：Swete, The Old Testament in Greek I〜III の OCR（`cache/archive.org/oldtestamentingr01swetuoft/`、`oldtestamentingr02swetuoft/`、`theoldtestamenti03swetuoft/`）。Swete I・II・III と呼ぶ。
- 口語訳：`node tools/bible.js`（bible-api）。詩篇の表題はこの本文に入っていない。
