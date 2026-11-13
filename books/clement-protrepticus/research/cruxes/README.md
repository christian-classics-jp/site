# 校訂上の論点

クレメンス『ギリシア人への勧め』の本文で、写本・刊本・学者の読みが分かれる箇所と、聖書・古典の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（Stählin 1905、`../staehlin-1905.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は印刷版の OCR（`cache/archive.org/clemensalexandri01clemuoft/clemensalexandri01clemuoft_djvu.txt`）の行番号。ギリシア語の OCR は崩れるので、読みは IIIF のページ画像（`cache/archive.org/clemensalexandri01clemuoft/pages/`。画像の番号は印刷ページ＋90）で確かめる。

- 底本（St）：O. Stählin, Clemens Alexandrinus I（GCS 12、1905）。ページの下に、聖書・古典の箇所の欄（「vgl.」は参照、無印は引用）と、異読の欄（行番号つき）を置く。余白の行番号はページごとに 1 から数える。記号と略号の表は写本表の後（画像 0092）にあり、本の `AGENTS.md` の「底本の扱い」に写した。
- 写本：P（Paris. graec. 451。P¹ は写字生バアネス、P² はアレタスの手、P* は直す前の読み、Pcorr は直した読み）、M（Mut. III. D. 7）。M² は M の後の手。
- Eus.：エウセビオス『福音の準備』二・三・一〜四二が 2.11.1〜2.23.2 を引く。その写本は A・B・H・I・O（A¹・A² は A の最初の手と後の手）。A は 2.13.4 の τολμήσας から引用の終わりまでを一折失っている（03-chapter-02-1 の冒頭）。エウセビオスは同じ書の二・六・一〇で 2.34.1 の Ἴθι から Ζεύς までも引く（06-chapter-02-4。異読は底本の欄による）。3 章では、四・一六・一二〜一三が 3.42.1〜3.43.1 を、二・六・一〜七が 3.44.3 の εἰκότως〜3.45.5 を引く（08-chapter-03）。4 章では、二・六・八〜九が 4.49.1 の Καινὸν δέ〜ἐραστής と、4.49.2 の終わりの ἤδη δέ〜4.49.3 を引く（09-chapter-04-1）。
- Sacr. Par.：ダマスコのヨハネの『聖なる対照』（Sacra Parallela。Holl の番号で挙げる）。184 が 4.49.1 の οὐ κωλύεται … ἔχουσα を引く（09-chapter-04-1）。cache になく、読みは底本の欄による。
- Cyr.：アレクサンドリアのキュリロス『ユリアヌス駁論』（Aubert 版のページで挙げる）。四 p. 128 が 3.42.2〜3.42.7 を参照、一〇 p. 343 が 3.44.4〜3.45.4 を引く（08-chapter-03）。Arnob.：アルノビウス『異教徒駁論』（写本 H・S）。Theod.：テオドレトス『ギリシア人の病の治療』（エウセビオスから引く）。Stob.：ストバイオス『精華集』。どれも cache になく、読みは底本の異読の欄による。
- 刊本と学者：Di（Dindorf）、He（Heinsius）、Kl（Klotz）、Ma（Mayor）、Po（Potter）、Schw（Schwartz）、St（Stählin）、Sy（Sylburg）、Vi（Victorius）、Wi（Wilamowitz）。そのほか異読の欄に名の出る学者（Bernays、Reinkens、Reitzenstein、Alberti、Heyse、Markland、Viger、Cobet、L. Dindorf、Elmsley、G. Canter、Nauck、Pierson、Lobeck、Ed. Tournier、Rohde など）はそのまま挙げる。
- 七十人訳と新約の本文は、`node tools/bible.js` の口語訳と、底本の聖書の欄の章節で確かめる。詩篇の章節は底本では七十人訳の数え方（口語訳より一つ少ないことが多い）。
- ANF：Ante-Nicene Fathers 第 2 巻の Wilson の英訳（`cache/ccel.org/anf02.txt`）。レビューの読み比べに使う。英訳の文言はこの一覧に使わない。
- 七十人訳：H. B. Swete, The Old Testament in Greek I・II・III（`cache/archive.org/oldtestamentingr01swetuoft/`、`cache/archive.org/oldtestamentingr02swetuoft/`、`cache/archive.org/theoldtestamenti03swetuoft/` の djvu テキスト。行番号は「Swete II、l.」の形）。
- 底本の古典の欄は、ホメロスの巻をギリシア文字で刷る（大文字は『イリアス』、小文字は『オデュッセイア』。E 31 は『イリアス』五・三一、φ 26 は『オデュッセイア』二一・二六）。
- 底本の第二巻：O. Stählin, Clemens Alexandrinus II（1906）の OCR（`cache/archive.org/clemensalexandri02clem/clemensalexandri02clem_djvu.txt`）。クレメンスが『ストロマテイス』で同じ句を引くところの照合に使う。
- Diels：H. Diels, Die Fragmente der Vorsokratiker I（1906）のページ画像（`cache/archive.org/diefragmentederv01dieluoft/pages/`）。ヘラクレイトスの断片の本文の照合に使う。底本の欄のページは第 2 版と合わないことがある（4.55.1 のヒッポンは底本の欄で S. 235、第 2 版で p. 226。底本の刊行年から初版のページとみられるが、初版は見ていない）。
- Orig.：オリゲネス『ケルソス駁論』。4.50.4 のヘラクレイトスの句の ⟨τοῖς⟩ の出どころ（10-chapter-04-2）。cache になく、底本の欄による。
- シビュラの託宣：J. Geffcken, Die Oracula Sibyllina（GCS 8、1902）の OCR（`cache/archive.org/dieoraculasibyll00geffuoft/dieoraculasibyll00geffuoft_djvu.txt`）。
- キケロ『神々の本性について』三：The Latin Library の本文（`cache/thelatinlibrary.com/cicero/nd3.shtml`）。
- 新約のギリシア語本文：Robinson-Pierpont のビザンティン本文の電子化（`cache/raw.githubusercontent.com/byztxt/byzantine-majority-text/<書>.csv`。行番号は「TIT.csv l.」の形）。Nestle-Aland と違う箇所に `{NA … > …}` の印がある。
- 古典：Perseus の canonical-greekLit の電子化（`cache/raw.githubusercontent.com/PerseusDL/canonical-greekLit/`。『イリアス』は tlg0012.tlg001、『オデュッセイア』は tlg0012.tlg002、ヘロドトスは tlg0016.tlg001、ヘシオドス『神統記』は tlg0020.tlg001、プラトン『パイドン』は tlg0059.tlg004、エウリピデス『アルケスティス』は tlg0006.tlg002、ピンダロス『ピュティア祝勝歌』は tlg0033.tlg002、ヘシオドス『仕事と日』は tlg0020.tlg002、カリマコス『ゼウス讃歌』は tlg0533.tlg015。エウリピデス『トロイアの女たち』（tlg0006.tlg011）とプラトン『クラテュロス』（tlg0059.tlg005）、トゥキュディデス（tlg0003.tlg001）は、同じディレクトリの `a6eb0cc3e6f6e382934a2c8b33577d2fb4371e00/data/…` の下にある。11-chapter-04-3 で、デモステネス『冠について』（tlg0014.tlg018）、プルタルコス『デメトリオス伝』（tlg0007.tlg057）、アポロドロス『ビブリオテケ』（tlg0548.tlg001）、アテナイオス『食卓の賢人たち』（tlg0008.tlg001、Kaibel）を同じ下に足した。プラトン『パイドロス』（tlg0059.tlg012）は上の階層にある）。
- 01-chapter-01-1 の論点一覧は、サブエージェントを起動できなかった（API の認証エラー）ため、メインが底本の異読の欄と聖書・古典の欄だけから作った。ほかの校訂本や注解は見ていない。
