# 校訂上の論点

クレメンス『ギリシア人への勧め』の本文で、写本・刊本・学者の読みが分かれる箇所と、聖書・古典の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Stählin 1905、`../staehlin-1905.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は印刷版の OCR（`cache/archive.org/clemensalexandri01clemuoft/clemensalexandri01clemuoft_djvu.txt`）の行番号。ギリシア語の OCR は崩れるので、読みは IIIF のページ画像（`cache/archive.org/clemensalexandri01clemuoft/pages/`。画像の番号は印刷ページ＋90）で確かめる。

- 底本（St）：O. Stählin, Clemens Alexandrinus I（GCS 12、1905）。ページの下に、聖書・古典の箇所の欄（「vgl.」は参照、無印は引用）と、異読の欄（行番号つき）を置く。余白の行番号はページごとに 1 から数える。記号と略号の表は写本表の後（画像 0092）にあり、本の `AGENTS.md` の「底本の扱い」に写した。
- 写本：P（Paris. graec. 451。P¹ は写字生バアネス、P² はアレタスの手、P* は直す前の読み、Pcorr は直した読み）、M（Mut. III. D. 7）。M² は M の後の手。
- 刊本と学者：Di（Dindorf）、He（Heinsius）、Kl（Klotz）、Ma（Mayor）、Po（Potter）、Schw（Schwartz）、St（Stählin）、Sy（Sylburg）、Vi（Victorius）、Wi（Wilamowitz）。そのほか異読の欄に名の出る学者（Bernays、Reinkens、Reitzenstein、Alberti、Heyse、Markland）はそのまま挙げる。
- 七十人訳と新約の本文は、`node tools/bible.js` の口語訳と、底本の聖書の欄の章節で確かめる。詩篇の章節は底本では七十人訳の数え方（口語訳より一つ少ないことが多い）。
- ANF：Ante-Nicene Fathers 第 2 巻の Wilson の英訳（`cache/ccel.org/anf02.txt`）。レビューの読み比べに使う。英訳の文言はこの一覧に使わない。
- 01-chapter-01-1 の論点一覧は、サブエージェントを起動できなかった（API の認証エラー）ため、メインが底本の異読の欄と聖書・古典の欄だけから作った。ほかの校訂本や注解は見ていない。
