# 『御霊と花嫁』の決まり

共通の規則はリポジトリのルートの `AGENTS.md` にある。ここにはこの本だけの決まりを書く。

## 節

- `src/chapter-00` は著者の序文（Preface）と J・H・キングの序論（Introduction）。`src/chapter-NN` は第 N 章、`src/chapter-16-appendix` は付録（Appendix）。長い第四章・第五章・第八章は段落の切れ目で `chapter-04-1`、`chapter-04-2` … に分けてあり、README の進捗表の (1) (2) に対応する。
- 各章の節の先頭には `CHAPTER N.` と章の英題の 2 行がある。分けた章では、2 つ目の節にも同じ 2 行を置いてある。付録は `APPENDIX.` と英題の 2 行。
- 見出しは英文の見出しの上に `# 第一章　訳題` の形で足す。分けた章では `# 第四章　訳題（その一）` のように末尾に付ける。番号は漢数字、区切りは全角スペース。付録は `# 付録　訳題`。
- `chapter-00` は `PREFACE.` の上に `# 序文`、`INTRODUCTION.` の上に `## 序論` を足す（サイトの章題は最初の `# ` 見出しから取られる）。`BY REV. J. H. KING.` は見出しにせず、訳を普通の行で書く。序文の結び（`... I am,`、`Yours in Pentecostal glory,`、署名）は原書どおり行を分けてある。訳でも行を分けるときは、つながらないよう各行末に `<br/>` を付ける。

## 英文

- IPHC 資料館の書き起こし（Word で作った HTML）から抜き出し、同館の 1907 年版スキャンと全ページを照合した。書き起こしで落ちていた語・行・段落（第四章 30 ページの一段落、第五章 39 ページの二文など）を補い、誤読（`ma` → `man`、`bringeth forth` → `bringeth not forth` など）、神を指す代名詞の大文字、引用符、句読点、段落の切れ目を原書に合わせた。
- 書名のページ、扉裏のエピグラフ（ユダ 3 節）、目次は取っていない。ページ番号と柱は消し、行末とページ末でハイフンに分かれた語はつないだ。
- 引用符を ASCII にそろえた（`“ ”` → `"`、`‘ ’` → `'`）。ダッシュは `--`（前後に空白なし）、省略は原書どおり `. . .` と書く。行頭が `“` だと `ci/jp.js` が日本語の行とみなして英文が残るため。
- 原書のイタリック（強調、書名、引用元の人名）は取っていない。訳で強調が要るところはスキャンを見る。各章の最初の語は原書のスモールキャップスに合わせて大文字で書いてある（`THE subject`、`GOD fashioned`）。
- 原書の誤植や不揃いは直していない。訳では正しく読み、`// ` メモに英文の表記を書く。照合で見つかったもの：
  - 序論・第一〜三章：`it sinks the walls of limitation`（p. 8）、閉じ引用符の欠け `"And the Spirit of God moved upon the face of the waters (Gen. 1: 2).`（p. 14）、`so guided and lead`（led、p. 20）。
  - 第四章：`(John 15: 17)`（14:17 の意か、p. 27）、`John 15: 25-27`（26〜27 の意か、くり返し出る）、`saying. "Teach us to pray,"`（p. 29）、`proclaimng`（p. 37）、引用符の閉じ忘れ（pp. 32, 33, 38）。
  - 第五章：`Petecost`（p. 43）、`The tongue's movement`（p. 49）、`wth me`、`Then He adds:`（神ではなく筆者、p. 53）、`does not effect our position`（affect、p. 57）。
  - 第六・七章：`them..`（p. 60）、`Momentus`（p. 62）、`As I have ready said`（already、p. 68）、`Love never falleth`（faileth、p. 69）、`then ten thousand words`（than、p. 71）、`Neither one of them refer`（p. 73）。
  - 第八・九章：`he shall baptized you`（p. 83）、`of. Christ`（p. 85）、`Dixion`（p. 92）、`loosing their hold`（losing、p. 95）、`filled with Holy Spirit`（p. 96）、引用符の欠け（pp. 79, 89, 95）。
  - 第十〜十三章：`dead and no value`、`when the seed having died`（p. 100）、`wore out by study`、`farther sin`（p. 103）、`numerated`、`"How to reach the masses" They`（p. 104）、`the great inanity`（古い意味の「空所」か enmity か、p. 105）、`one jot or one title`（tittle、p. 107）、`the judgment ready past`（p. 108）、`temporarily`、`have even drank`（p. 109）、`"outer darkness'`（p. 114）、`(Rev. 19: 6)`（19:7 の意、p. 118）。
  - 第十四章・第十五章・付録：`for he has clothed me`（イザヤ 61:10、p. 122）、`will sing out of mind and memory`（sink、p. 124）、`the immortal king's of the ages`、`Revelation 21st. chapter`（p. 124）、`then comes those guests`（p. 126）、`Gormorrah`（p. 129）、`not so easy claimed`（p. 133）、`praises is the very last step`（p. 135）。
- 最後のページ（p. 138）はスキャンの右端が欠けていて、行末を照合できていない。
- 聖書の出典は `(John 15: 25-27)`、`(I Cor. 12: 3)`、`(ver. 15)` のように書かれている（書名の数字はローマ数字の `I`、`II`）。訳ではルートの `AGENTS.md` の出典の書き方にそろえる。引用はおもに欽定訳（KJV）により、`(R. V.)` と断って改訂訳を引くところもある。
- 1907 年版の本文は日米とも著作権が切れているが、1985 年の Garland 社の復刻（『 Three Early Pentecostal Tracts 』）で加わった序文などは著作権が残りうる。訳にはそれらを使わず、参照もしない。

## 文体

- 著者が読者に語りかける教理書で、反対者の文章の引用が多い。地の文は常体（「〜である」「〜だ」）。序文と J・H・キングの序論も常体。
- 一人称：`I` は「私」。著者が自分を指す `we` は「私たち」、`the writer` は「筆者」。
- 引用される人々の文章（反対者の記事や手紙）も常体。名のある書き手の呼び名は英文に合わせる（`Brother X`＝X兄弟）。
- 神、キリスト、聖霊には敬語を使う（「〜される」「〜してくださる」）。人や悪魔には使わない。
- 語：the Holy Ghost／the Holy Spirit＝聖霊、the Spirit＝御霊、the Baptism of the Holy Ghost＝聖霊のバプテスマ（the Baptism of the Spirit＝御霊のバプテスマ）、speak with other tongues＝異言を語る、Pentecost＝ペンテコステ、the present movement＝今の運動、the second blessing＝第二の祝福、justification＝義認、sanctification＝聖化、the bride／the bridehood＝花嫁（membership in the bridehood＝花嫁の一員となること）、"Latter Rain"＝「後の雨」。
- 日付と年は算用数字（「1907年9月」）。
- 本文の中で書名と章節を挙げるとき（`We read in Psalms 14: 1:`）は「詩篇一四篇一節には」のように書く。かっこの出典はルートの書き方（`（マルコ一二・三二）`）。

## ほかの人の文章

- 第二章の結びの引用（`--Dr. Watson.`）は、出典を検索で特定できなかった。1907 年に `Dr. Watson` として引かれうる書き手（G・D・ワトソン 1924 年没、ジョン・ワトソン 1907 年没、リチャード・ワトソン 1833 年没）はいずれも 1957 年以前に没しているので訳した。
- 第三章のサイス博士（Joseph A. Seiss、1823-1904）は訳す。
- 第五章（その一）の S・D・キニー（Seeley D. Kinne、1950 年没）の文章は、1957 年以前の没なので訳した。
- 第五章（その二）と第六章で引かれる人：W・C・ダンブル（1928 年没）、ヘンリー・アルフォード（Dean Alford、1871 年没）、W・B・ゴドビー（1920 年没）、J・H・キング（1946 年没）。どれも訳した。名のないオハイオの小冊子と記事も訳した。
- 第九章の A・H・ポスト（Ansel H. Post）の記事（『ウェイ・オブ・フェイス』1906 年 11 月 8 日号）は、没年が確かめられないので訳していない（how-pentecost-came-to-los-angeles でも同じ人の証しを保留にしている）。続く同誌 1906 年 10 月 11 日号の記事は書き手の名がないので訳した。
- 第十三章の M・B・チャップマン博士（M. B. Chapman, D.D.）の文章は、南メソジスト監督教会の『ナッシュビル・クリスチャン・アドボケート』の死亡記録（1910 年 7 月 1 日、ミズーリ州セントジョセフで没）から、1957 年以前の没と判断して訳した。
