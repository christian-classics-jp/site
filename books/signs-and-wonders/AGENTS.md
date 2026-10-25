# 『しるしと不思議』の決まり

共通の規則はリポジトリのルートの `AGENTS.md` にある。ここにはこの本だけの決まりを書く。

## 節

原本は、著者の六冊の本の序文と本書の序文（5〜6 ページ）、推薦文「An Appreciation」（7 ページ）、口絵の肖像（8 ページ）、目次（9〜18 ページ）、本文の第一章〜第七十一章（19〜584 ページ）からなる。章の長さは 600 語ほどから 13,000 語ほどまでばらつく。

- `src/chapter-00` は序文と推薦文。口絵、目次、19 ページの上にある書名と著者名は取っていない。
- `src/chapter-NN` は第 N 章。短い章は続く章とまとめてあり、`chapter-NN-MM` は第 NN 章から第 MM 章までを一つの節にしたもの。長い章は小見出しの切れ目で `chapter-NN-1`、`chapter-NN-2` … に分けてあり、README の進捗表の (1) (2) … に対応する。
- 各章の先頭には英文の `CHAPTER N` と章題の 2 行がある。分けた章では、二つ目以降の節にも同じ 2 行を置いてある。

## 見出し

- 章は、`CHAPTER N` と章題の 2 行の上に `# 第一章　訳題` の形で足す。分けた章は `# 第三十章　訳題（その一）` のように末尾に付ける。番号は漢数字、区切りは全角スペース。一つの節に二つ以上の章があるときは、二つ目以降の章にも `# 第N章　訳題` を足す（サイトの目次には最初の `#` が出る）。
- `chapter-00` は、先頭の `Preface to First Book` の上に `# 序文` を足す。各「Preface to … Book」と「An Appreciation」は `## 訳題` にする。
- 章題の後の副題（`SERMON BY MRS. M. B. WOODWORTH-ETTER` など）と、章の中の小見出し（大文字だけの短い行）は `## 訳題` にする。証しの題が書き手の名前だけのこともある（第四十二章の `ETHEL LEWIS` など）。

## 英文

- Internet Archive の 4 つのスキャン（README を参照）の OCR を語ごとに突き合わせて作った。原本 2 冊と Oak Tree Publications の影印本 2 冊は同じ版面である。英文が疑わしいときはページ画像で確かめる。`https://archive.org/details/signswondersgodw0000wood/page/n<番号>` で開け、番号は印刷ページに 5 を足したもの。
- OCR の読み誤りはまだ残っている。とくに引用符（`"` と `'` の取り違え、閉じ忘れ）と、正しい英単語に化けた誤りに気をつける。訳では正しく読み、`// ` メモに英文の表記を書く。
- 柱（ページ上の書名）、ページ番号、折丁の番号は取っていない。原本のイタリックは区別していない。見出しや署名の小型大文字は大文字にした。章の書き出しの語の小型大文字は普通の書き方にした（`AFTER many` → `After many`）。
- 引用符を ASCII にそろえた（`“ ”` → `"`、`‘ ’` → `'`）。行頭が `“` だと `ci/jp.js` が日本語の行とみなして英文が残るため。ダッシュは `--` にした。句読点の前の空白（`disappeared ;`、`saying :`）は詰めた。行末のハイフンで切れた語はつなぎ、`two-edged` のような複合語のハイフンは残した。分数の `½` は `100 1/2` のように書いた。
- 原本の区切りの `* * *` は、`ci/jp.js` が記号だけの行を日本語の行とみなすので英文に入れず、`// * * *` のメモにした。訳で区切りを入れるときは日本語の側に書く。
- `*` で始まる段落は、ページの下にあった注（多くは編者 A. E. Sidford のもので `A. E. S.` と署名がある）。段落の途中のページに入っていた 3 か所（第四十一章、第四十六章、第四十八章）は、その段落の後ろに移した。
- 署名、住所、日付の行は、一行ずつの段落にした。本文の最後の行の右に組まれていた署名も、別の段落にした。
- 第三十二章の問答と第四十二章の法廷での証言は、原本のとおり `Q.`、`A.` を行頭に置いた。第四十二章の証言では `Q.`、`A.` が本文の左の欄に組まれていて OCR で落ちていたので、ページ画像を見て補った。
- 詩と歌は 1 行ずつ、連は空行で区切った。`CHORUS`、`REFRAIN` の行は、その連の最初の行に置いた。連の切れ目はページ画像の行間から推定したもので、原本と違うところがある。歌の題は、その前の独立した段落にある。
- 原本の誤植・綴りの揺れは直していない（`redeeem`、`childrer`、`reqested`、`neded`、`cleasing`、`testmionies`、`tesifying`、`enitre`、`desciples`、`deliverence`、`martydom`、`relevations`、`carricature`、`homliest`、`noisely`、`arested`、`abstainence`、`tablernacle`、`woud`、`doen`、`agains`、`Gosped`、`Savious`、`hunudred`、`unuknown`、`priods`、`fomerly`、`Wnid`、第二十章の題の `ISIAH`、第三十四章の題の `WOMENS'`、第六十三章の題の `PRAV` など）。訳では正しく読み、`// ` メモに英文の表記を書く。
- 聖書の出典は `Zech. IV, 6.`、`(Acts 2.1.)`、`Mark 16:17, 18.`、`(Matt. 25:10)`、`Psalm lxvi. 16`、`Acts 5-11, 12:` のように揺れている。訳ではルートの `AGENTS.md` の書き方にそろえ、正しい箇所を示す。

## ほかの人の文章

- 本書には、著者の文のほかに、ほかの人の報告、手紙、証し、新聞・雑誌記事の転載が多く含まれる（第二十九章以降に多い）。1916 年の出版なので米国では著作権が切れている。日本では、書き手が 1957 年以前に没していれば保護期間（死後 50 年と戦時加算 3794 日）が切れているが、1958 年以後に没した書き手の文は 2018 年の改正で死後 70 年になり、保護が続いている。
- 保護が続いているとわかっている文には、その段落の前に `// ここから…訳さない。` のメモを置いた。訳さない。
  - F. F. Bosworth（1877-1958）：第二十九章の「Latter Rain Evangel」からの転載記事、第三十章の冒頭の報告（「THE ACTS OF THE HOLY GHOST IN DALLAS」の前まで）と「REPORT BY THE PASTOR, ELDER F. F. BOSWORTH」。
  - Stanley H. Frodsham（1882-1969）：第三十章の「LETTER FROM AN ENGLISH EDITOR」。
  - Howard A. Goss（1883-1964）：第四十三章の「JEHOVAH STILL WORKING AT HOT SPRINGS, ARK.」。
  - A. H. Argue（1868-1959）：第四十一章（その三）の「(A. H. Argue, in the Stone Church, July 24, 1913.)」の話。後の章でも、アーギューが書いた文や語った話は訳さない。
- 次の書き手は 1957 年以前に没している（没年は一般の伝記資料による）：Carrie Judd Montgomery（1946 年没）、Elizabeth Sisson（1934 年没）、A. A. Boddy（1930 年没）、Stanley P. Smith（1931 年没）、George B. Studd（1945 年没）、A. G. Garr（1944 年没）、D. C. O. Opperman（1926 年没）。
- 書き手の名のない新聞記事や記録は、公表から 50 年と戦時加算で保護期間が切れている。
- 第二十九章のサラ・ネルソン夫人の証し（「RAISED FROM THE DEAD」）と、アームストロング夫人が夫の証しを裏づけた一文は、没年が確かめられないので訳していない。同じ章のジョン・N・アームストロングの証しは、本人が 1912 年に 65 歳だったと書いており（1846 年ごろの生まれ）、1958 年以後の没なら 111 歳を超えるので、1957 年以前の没と判断して訳した。
- 第三十章（その一）の『デイリー・タイムズ・ヘラルド』紙、『ブライドグルームズ・メッセンジャー』誌の抜粋、『ラター・レイン・エバンジェル』誌の記事と目撃者の私信は、書き手の名がないので訳した。「INCREASING WONDERS OF GOD IN DALLAS, TEXAS」は一人称（I played on the organ for them）で、ボズワースの文の可能性もあるが、本では署名がないので既定どおり訳した。同じ節のクレイ・E・マーティン夫人の証しは、本人が 1912 年に 54 歳（1858 年ごろの生まれ）で、1958 年以後の没でも 100 歳ほどにしかならず、没年も確かめられないので訳していない。
- 第三十章（その二）のキャリー・ジャッド・モンゴメリーの記事（1946 年没）、「CLAIMING THE PROMISE」、名のない牧師の「AN APPRECIATION OF SISTER WOODWORTH-ETTER」は訳した。S. B. Finley の証しは、開きの引用符だけで閉じがないので、一人称の幻の記事と「The prophet Joel」の段落までを証しとみなし、没年が確かめられないので訳していない。その後の「A brother came to these meetings…」からの三段落は三人称の報告なので、編者の文として訳した。「REPORT OF EVANGELIST」（W. J. Mortlock）も没年が確かめられないので訳していない。
- 第三十一章の「VISIONS OF ELDER H. C. MEARS」（一人称の幻の記録、「Again, I saw my Saviour」の段落まで）は訳していない。第三十章（その二）に「四十年以上福音を説いてきた」とあるので一八五〇年代前半までの生まれと見られるが、本人の年齢ではなく伝道の年数からの推定で、一九五八年以後の没なら百三歳ほどにしかならず、没年も確かめられないため。同じ名の Henrietta C. Mears（一九六三年没）は別人。その後の「Many of the saints in the Dallas meeting…」からは三人称で、ミアーズの幻を著者が語る文なので訳した。同じ章の出所の書かれていない二つの引用（「God's children have Supernatural Revelations…」「We repeat that…」）も訳した。
- 第三十四章の編者 A. E. Sidford の注（パレスチナの礼拝で女性が質問するのをボディ牧師が聞いたという注）は訳していない。WebSearch（standard 2 回、extended 1 回）で没年が見つからなかった。後の章の Sidford の注も、再検索せず同じ扱いにする。
- 第三十八章の Fred Lohman（サンアントニオの牧師、『ワード・アンド・ウィットネス』誌の寄稿編集者）の二つの報告（「GOD VISITING SAN ANTONIO WITH MIGHTY POWER」「GOD WORKING IN SAN ANTONIO」）は訳していない。WebSearch（standard 2 回、extended 1 回）で没年が見つからなかった。同じ章のキャリー・ジャッド・モンゴメリーの記事（1946 年没）は訳した。
- 第三十九章の「ヘイウッド兄弟の新聞」の記事は G. T. Haywood（1880-1931）の新聞からの転載なので訳した。同じ章のエリザベス・D・ヴァン・ホーン夫人の証し（日付、二つの小見出し、署名、住所の行を含む）と、ヴィクトリア・フライマーク夫人の証し（署名と住所の行を含む）は、WebSearch（standard 2 回、extended 1 回）で没年が見つからなかったので訳していない。ガートルード・ベリー嬢の証しは著者が三人称で書いているので訳した。
- 第四十章の A. W. Otto（オタワの『ヘラルド・オブ・トゥルース』誌の編集者・発行者）の報告（その一の「(Taken from "The Herald of Truth.'')」から、その二の署名「A. W. OTTO, Editor and Publisher,」「Ottawa, Canada.」まで）は訳していない。WebSearch（standard 2 回、extended 1 回）で没年が見つからなかった。報告の前の二つの見出しは訳した。同じ章（その二）のエリザベス・シッソンの公開書簡（1934 年没）と、その後の歌（William T. Pettengill の「He Cometh」、1956 年没）は訳した。
- 第四十一章の Anna C. Reiff（『ラター・レイン・エバンジェル』誌の編集者）の報告（その一の「(Copied from "The Latter Rain Evangel.")」から、その二の署名「ANNA C. REIFF.」まで。報告に含まれる多くの人の証しも含む）は訳していない。WebSearch（standard 4 回、extended 1 回）と IFPHC の目録で没年を探したが、一八六九〜一九四五年とするのは復刻本の出版社の紹介文一件だけで、ほかの資料で確かめられなかった。ほかの資料で一九五七年以前の没と確かめられれば、訳してよい。報告の前の二つの見出しと、その前の著者の段落は訳した。その二の署名の後の編者 A. E. Sidford の一文の注（「Reports of this work were published in England.」）も訳していない。その後の「NEGLECT NOT THE GIFT THAT IS IN THEE」（同誌からの転載）は、署名のない編集部の前置きと著者の話なので訳した。
- 第四十一章（その三）の A. H. Argue（1868-1959）の話（「(A. H. Argue, in the Stone Church, July 24, 1913.)」から「S. D. KINNE WRITES:」の前まで）は、一九五八年以後の没なので訳していない。前の見出し「BE PATIENT: HIS COMING DRAWETH NIGH…」は訳した。同じ節の Seeley D. Kinne の報告（「S. D. KINNE WRITES:」から署名まで、「THE BLESSED CLOSE」を含む）は、Kinne が一九五〇年に没している（hymntime.com、Find a Grave）ので訳した。Lydia Piper の社説（「We are sending this August Evangel…」と署名）は、WebSearch（standard 3 回、extended 1 回）で没年が見つからなかったので訳していない。詩「BEAUTIFUL THREADS OF GOLD」は、本に作者の名がなく、WebSearch（standard 2 回、extended 1 回）でも作者が見つからなかったので、既定どおり訳した。著者の話の中の編者 A. E. Sidford の注（「*Note: This was shown before the great war broke out.」）は訳していない。
- 第四十二章（その一）の「"PERSECUTION"」の声明（「Apostolic faith, producing results…」から署名「CYRUS B. FOCKLER.」まで）は、著者、Earl W. Clark、Cyrus B. Fockler の連名なので訳していない。Fockler は一九三三年に没している（healingandrevival.com の伝記）が、Clark（著者の孫娘ビューラの夫）は WebSearch（standard 3 回、extended 1 回）で没年が見つからなかった。共同著作物の保護は最後に没した著者を基準にするため。後の章でも Clark の没年は再検索せず、Clark が書いた文は訳さない。Fockler だけが書いた文は訳す。見出しは訳した。声明の＊に付いた注（「*On Sept. 2d Judge dismissed the case.…」）は署名のない短い注なので訳した。同じ節の『クリスチャン・ワーカー』誌からの転載（「MONTWAIT MEETING」「MISCELLANEOUS」）は書き手の名がないので訳した。
- 第四十二章の法廷での証言（著者の「TESTIMONY OF MRS. M. B. WOODWORTH-ETTER, GIVEN ON WITNESS STAND」と、「TESTIMONIES UNDER OATH」に並ぶ証人たちの証言）は、証人の没年を調べずに訳した。根拠は二つある。一つは、著作権法第四十条第一項が「裁判手続…における公開の陳述は、同一の著作者のものを編集して利用する場合を除き、いずれの方法によるかを問わず、利用することができる」と定めていること。もう一つは、証言を伝える文が『ワード・アンド・ウィットネス』誌の署名のない社説と、記者の名のない新聞記事であること。ただし、法廷の外で語られたり書かれたりした名のある人の証し（第四十二章（その二）のジェシー・ヴァン・デューセン嬢の幕屋での証しや、署名のある証しなど）にはこの扱いを当てはめず、没年を確かめる。
- ほかの書き手（編者 A. E. Sidford、Robert J. Craig、August Feick、W. J. Mortlock など）と、証しを寄せた多くの人の没年は確かめていない。これらの文の扱いは決めていない。訳す前に確かめる。
- のちの版（1922 年の『 Marvels and Miracles 』、現代の復刻版や編集版）で加わった序文、注、本文の書き換えは著作権が残りうる。訳にはそれらを使わず、参照もしない。

## 文体

- 著者が一人称で語る伝道の記録と、会衆に語りかける説教からなり、ほかの人の報告や証しが挟まる。地の文の体、一人称、人物ごとの口調、説教の口調は最初に訳す節で決め、ここに書き足す。
- 序文と著者の地の文は常体（「〜た」「〜である」）。一人称は「私」、my husband＝夫（初出の Mr. Woodworth＝ウッドワース氏）。読者への呼びかけ dear readers＝愛する読者よ、誘いは「〜ないか」、願いは「〜ていただきたい」。説教の体は最初の説教の節で決めてここに書き足す。
- 神、キリスト、聖霊には敬語を使う（「〜される」「〜してくださる」）。神が主語の連用形・て形も敬語にする（お用いになり、召され、お現れになり）。人、御使、悪魔には使わない。主の命令は「〜なさい」（集めなさい、行きなさい）、禁止は「恐れるな」。
- イエス（主）が幻や心の中で著者に語る言葉は「わたし」、常体（「行きなさい。わたしがあなたと共にいる」「恐れるな」）。著者が神に語る言葉と祈りは敬体（「主よ、行きます」）。サタンは常体で、著者を「おまえ」と呼ぶ。
- 子供の台詞は親しい常体。mamma＝お母さん、娘の一人称は「わたし」、息子は「ぼく」。著者が子供に答える台詞も親しい常体（「〜わ」）。
- 年月日と数は漢数字（一八四四年七月二十二日、一万部、二十五年）。マイルはそのまま（何百マイル）。
- 語：the Holy Ghost／the Holy Spirit＝聖霊、the Spirit of God＝神の御霊、baptism of the Holy Ghost＝聖霊のバプテスマ、angel＝御使、Savior＝救い主、Redeemer＝あがない主、Heaven＝天国、the Beautiful City＝美しい都、the Golden City＝金の都、mansions＝すまい、the vineyard of Christ＝キリストのぶどう園、harvest field＝刈入れの畑、revival＝リバイバル、meeting＝集会、camp meeting＝野営集会、prayer-meeting＝祈祷会、converted／conversion＝回心する／回心、testify＝証しをする、the Master＝主、Praise the Lord＝主をほめたたえよ、Sabbath＝日曜日（Sabbath School＝日曜学校）、Disciple(s) Church＝ディサイプル派の教会、Friends＝フレンド派、Methodist＝メソジスト、strive（御霊が）＝争う、gazing-stock＝見せ物、worm＝虫けら。
- 聖句をそのまま引いているところは『』で囲み、出典を付ける。英文に引用符のない聖句の借用は、かっこを付けず口語訳の言い方に寄せる。
- 歌と詩は 1 行ずつ訳して `<br/>` を付ける。人が歌う声なので、イエス、神には敬語を使う。CHORUS＝`（おりかえし）<br/>`、歌の題は `##`。台詞として引く歌は、最初の行を「で開き、最後の行を」で閉じる。

## トップページ

- 訳しているあいだは、`static/index.html` の「更新中」に載せる。
