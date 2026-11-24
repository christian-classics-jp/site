# 校訂上の論点

ヨアンネス・クリュソストモス『祭司職について』の本文で、写本・刊本の読みが分かれる箇所と、聖書の言葉の引用と暗示の形が訳に影響する箇所の一覧。ページ（`src/<節>/`）ごとに `<節>.md` を置く。訳は底本（PG 48、`../pg48.txt`）の読みのとおりに行い、ほかの読みは記録にとどめる。訳注は、ほかの読みを知ると一般の読者の理解が変わる箇所にだけ付ける。底本テキストと印刷版の食い違い（電子化の誤り）は照合で扱い、ここには書かない。

略号と資料の所在は次のとおり。資料の URL と取得情報は [../sources.md](../sources.md) にある。「l.」は、ことわりがなければ底本の印刷版の OCR（`cache/archive.org/patrologiae_cursus_completus_gr_vol_048/patrologiae_cursus_completus_gr_vol_048_djvu.txt`）の行番号。OCR は校注のラテン語をギリシア文字に化けさせ、写本の番号も崩す（n103 の校注 a の `Sic in tribus mss.` を `8 δὶς ἴῃ ἰγίδυϑ π|85.` と読む）。校注は、ページ画像（`cache/archive.org/patrologiae_cursus_completus_gr_vol_048/page/nN_w1600.jpg`）で読む。画像の切り出しは `node tools/image.js crop <画像> pct:x,y,w,h <出力先> [--scale 2]` で行い、`/tmp` に置いただけ。各項には、元の画像と切り出した領域を書く。

## 底本の校注（PG 48 = Montfaucon 1718 の再録）

- 校注はギリシア語のページの下に 2 段で刷られ、本文の上付きの a、b、c… がそれを指す。記号はページごとに a から振り直す（n103 は a〜i、n104 は a〜k）。一つの記号の注が、その少し後の箇所の異読も「Ibid.（同じところで）」「Paulo post（少し後で）」「Infra（下で）」「Mox（すぐ後で）」として続けて挙げることがある。
- 表題の注（n103 の `*`）が、照らした資料を挙げる：Regii（王立図書館）の写本 4 本（1819、1960、1973、2491）、Colbertini の写本 5 本（247、248、974、3055、3061。本の AGENTS.md の「3035」は、画像を拡大すると 3055 と読める。Nairn も Colbert 3055 を挙げる）、Coislin. 262、Savile（Savil.、Sav.）と Morel（Morel.）の刊本。校注は写本の名を挙げず、「三つの写本」「大部分の写本」「ある写本」と数で言うことが多い。
- Savile の版は、本文（in textu）と欄外（in marg.）の読みを分けて挙げることがある。
- 「Edit.」の署名のある注は、編者の判断を添えたもの（n103 の d）。

## Nairn 1906 の校注の略号

J. A. Nairn 編（Cambridge, 1906。`cache/archive.org/desacerdotioofst00john/`）の序論 pp. xlix〜liv（画像 `page/n54_w1600.jpg`〜`n59_w1600.jpg`）による。Nairn の本文と注の文章は写さず、どの読みを採ったか、どの写本がどう読むかという事実だけを使う。Nairn の画像は、BookReader 版（`page/nN_w1600.jpg`）では N＝印刷ページ＋63（p. 1 が n64、p. 4 が n67）。IIIF で取った `pages/0066_full.jpg`、`0067_full.jpg` は pp. 2、3。Nairn の第 1〜3 巻の章の分け方は Bengel と Seltmann のもので、底本の章と合わない（第 1 巻で、底本の 5 章 ε΄ は Nairn の II 章。Nairn p. 1 の章の分け方の注、画像 n64。II 章の頭は p. 5、画像 n68）。照らすときはページと行で照らす。

- 写本（序論 pp. xlix〜lii）：a＝ミュンヘン gr. 354（11 世紀）、b＝パラティヌス写本（所在不明。Hoeschel の報告だけ）、c＝パリ Reg. 492（10 世紀）、e＝Reg. 765 A（11 世紀。6 巻 12 章の途中で切れる）、f＝Reg. 799（12 世紀）、g＝Reg. 800（11 世紀）、h＝Reg. 801（11 世紀。Colbert 974）、i＝Reg. 802（11 世紀。Colbert 247）、k＝Reg. 803（11 世紀。Colbert 248）、m＝Reg. 805（1064 年）、n＝Reg. 806（12 世紀。Hurault-Reg. 1819）、p＝Reg. 812（11 世紀。Colbert 3055）、q＝Reg. 813（11 世紀。Mazarin-Reg. 1973。第 1〜3 巻）、r＝Reg. 1024（12 世紀。Colbert 3061）、s＝Reg. 1181（12〜13 世紀）、t＝Coislin 61（11 世紀）、u＝Coislin 245（11 世紀。各巻の頭が欠けている）、w＝Coislin 246（10 世紀）、x＝パッシオネイ写本（第 2 巻 7 章で切れる）、y＝オックスフォード CCC 写本（13 世紀。Savile が使った。y′ はその欄外の読み）、z＝オックスフォード New College 写本（12 世紀。Savile が使った）、berl＝ベルリン写本（12 世紀）、franc・henr・oliv＝Fronto Ducaeus が使った写本（所在不明）、marg＝Margunios の写本、sin＝シナイ写本（893 年）。d（第 5 巻の一部と第 6 巻）、l（第 3〜6 巻）、o（第 6 巻の終わりの断片）はこの範囲を含まない。
- 群：1 群 a、f、p。2 群 b、d、e、h、k、l、o、q、s、t、z、henr。3 群 g、i、r、w、y。4 群 c、m、n、u、x、berl、franc、marg、oliv、sin（序論 p. lii、画像 n57）。G は 3 群の一致、C は c、m、n、u、x の一致（p. liii、画像 n58）。序論は、群の並びを良い順とし、1〜3 群がそろって 4 群に対するときは、その三つの群の読みがたいてい良いと言う。3 群は写本どうしの一致が強いが、読みは劣り、手直しの跡が多いという。y の欄外の読み（y′）は 4 群に入れ、vulg は y′ とよく一致するという。
- vulg＝Montfaucon 1718 の版の読み（p. liii）。底本の PG はこの版の再録だが、Nairn が vulg として挙げる読みが PG の刷りと合わないところがある（01-book-1-1-5 の 1.4.3、1.4.4）。底本の読みは PG の画像で確かめ、Nairn の vulg は Nairn の報告として書く。
- 後代の引用（p. liii〜liv、画像 n58、n59）：anon＝クリュソストモス伝の無名の著者（950 年より後）。1.5 の母の言葉（καθίσασα πλησίον から 1.5.12 の εὐδοκιμήσεως ἐξ ἴσης ἐμοί まで）を引く。georg＝アレクサンドリアのゲオルギオス（7 世紀）。同じ箇所から 1.5.11 の οὗτος ὁ δεσμὸς κατεχέτω σε まで。言い換えが多く、校訂の役には立たないと序論は言う。sym＝シメオン・メタフラステス（10 世紀）。1.5.1 の ἐπειδὴ γὰρ ᾔσθετο から 1.5.12 の終わりまで。
- vet. int.：校注に出る古いラテン語訳（1.5.11 の praeesse）。序論でどの訳を指すかは確かめていない。

## 底本の校注の写本と Nairn の略号の対応

PG の校注が挙げる写本のうち、Nairn の序論の写本の記述（別名）から対応の分かるもの：Reg. 1819＝n、Reg. 1973＝q、Colbert 974＝h、Colbert 247＝i、Colbert 248＝k、Colbert 3055＝p、Colbert 3061＝r。Reg. 1960、Reg. 2491、Coislin 262 は、Nairn の写本の記述に同じ番号が見えず、対応が分からない。

## 読み比べに使う資料

- 英訳（NPNF 第 1 集第 9 巻、`cache/ccel.org/npnf109.txt`）：論点には、英訳がどの読みに立っているかという事実だけを書く。英訳の文は写さない。
- 七十人訳：Swete I〜III の OCR（`cache/archive.org/oldtestamentingr01swetuoft/`、`oldtestamentingr02swetuoft/`、`theoldtestamenti03swetuoft/`）。
- 口語訳：`node tools/bible.js`。
