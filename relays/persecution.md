# 迫害と終末のリレー

3 世紀前半から 4 世紀初めの、迫害と終末を扱う 3 作品を原文から訳す。オリゲネスの殉教の勧め（235 年ごろ）、ヒッポリュトスの反キリスト論（200 年ごろ）、ラクタンティウスの迫害者の最期（315 年ごろ）。

## origen-exhortation-to-martyrdom　オリゲネス『殉教の勧め』（ギリシア語）

- 底本：P. Koetschau 編、Origenes Werke I（GCS 2、Leipzig, 1899）。First1KGreek のコミット ed91552c52530c8f5a3ddf2dd767e899372a804c の `data/tlg2042/tlg007/tlg2042.tlg007.perseus-grc1.xml`（CC BY-SA 4.0、約 12,000 語）。cache に取得済み。節の区分がないので、底本テキストは `--split` でこの訳が節を付けた。
- 印刷版（照合用）：archive.org `origeneswerke01orig`（GCS 2、1899）。OCR とページ番号の対応表は cache にある（`cache/archive.org/origeneswerke01orig/`）。本文は OCR の l. 5370 ごろから。
- 読み比べる訳：権利の切れた英訳はない。origen-on-prayer と同じく、P. Koetschau のドイツ語訳（BKV 1. Reihe 48、München, 1926。訳者は 1939 年没）を使う。BKV の EPUB は https://bkv.unifr.ch/files/ermahnung-zum-martyrium-bkv/related_files/Ermahnung%20zum%20Martyrium%20(BKV)_deutsch_146.epub 。cache に取得済みで、`tools/epub2txt.js` でテキストにした（節の番号はなく、章の見出しと段落の行。pages.json の `english`）。
- 揃える本：origen-on-prayer（同じ著者・校訂者・ドイツ語訳者。訳語、底本テキストと pages.json の作り方をそこから引き継ぐ）。殉教の語彙は martyrdom-of-polycarp、martyrs-of-lyons、tertullian-treatises の『殉教者たちへ』、cyprian-treatises の『背教者について』に合わせる。

## hippolytus-on-antichrist　ヒッポリュトス『キリストと反キリストについて』（ギリシア語）

- 底本：H. Achelis 編、Hippolytus Werke I, 2: Kleinere exegetische und homiletische Schriften（GCS 1、Leipzig, 1897）。archive.org `hippolytuswerke01hipp`（第 1 分冊の Bonwetsch『ダニエル書注解』と合本）。OCR は cache にある（`cache/archive.org/hippolytuswerke01hipp/hippolytuswerke01hipp_djvu.txt`、papias-quadratus の `research/sources.md` に記録済み）。本文は l. 25416（1 章 Βουληθέντι σοι κατ᾽ ἀκρίβειαν）から、結びの章（l. 28381 の LXVI. Ταῦτά σοι）の終わりまで。各ページの下に校注と聖書の出典がある。ギリシア語の OCR は読めるが κ を χ、θ を ϑ と読むので、本文は画像から起こして OCR と突き合わせる。
- 英訳：ANF 第 5 巻「Treatise on Christ and Antichrist」（`cache/ccel.org/anf05.txt`）。
- 揃える本：ダニエル書と黙示録の長い引用が多い。反キリストと 666 の論じ方はエイレナイオスに拠るので、irenaeus-against-heresies に該当箇所があれば訳語を揃える。献呈先テオフィロスへの呼びかけの口調は本の AGENTS.md で決める。
- 章は 67 章（l. 28382 の「LXVI」は LXVII の OCR の崩れ）。章の番号は ANF と同じ。
- 底本テキスト（`research/achelis-1897.txt`）は、本を始めたときに 1〜5 章だけ起こした。各ページのセッションは、page-context を作る前に、そのページの章を画像から起こして足す（本の AGENTS.md の「底本の扱い」）。起こさないと page-context は空の抜粋を書き出す。

## lactantius-deaths-of-persecutors　ラクタンティウス『迫害者たちの死について』（ラテン語）

- 底本：S. Brandt と G. Laubmann 編、L. Caeli Firmiani Lactanti opera omnia II, 2（CSEL 27、Wien, 1897）。archive.org `operaomniaacced01laubgoog`（Google のスキャン）。OCR は `cache/archive.org/operaomniaacced01laubgoog/operaomniaacced01laubgoog_djvu.txt` に取得済み（2026-11-19、sources.md への記録はまだ）。本文は l. 1608（1 章 Audiuit dominus orationes tuas, Donate carissime）から。写本は一つだけで、校注に推測による改めが多い。OCR は読めるが、本文は画像から起こす。約 11,000 語、52 章。
- 英訳：ANF 第 7 巻「Of the Manner in Which the Persecutors Died」（`cache/ccel.org/anf07.txt` の l. 29273 ごろから）。
- 揃える本：ローマの皇帝・官職・制度の語彙は tertullian-apology と octavius、迫害と信仰告白者の語彙は cyprian-treatises に合わせる。皇帝名（ディオクレティアヌス、ガレリウス、マクシミアヌス、コンスタンティヌス、リキニウス、マクシミヌス・ダイア、マクセンティウスなど）の表記は本の AGENTS.md で決める。
