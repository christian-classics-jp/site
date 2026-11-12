---
name: start-book
description: ギリシア語・ラテン語の原文から訳す新しい本を books/<本>/ に用意する。底本と資料を cache/ に集めて記録し、底本テキスト、ページの割り（research/pages.json）、本の AGENTS.md・README・intro.md を作り、CANDIDATES.md を「翻訳中」にする。「<作品> を訳し始めて」「次の本の準備をして」、リレーから本の準備を頼まれたときに使う。
---

# 原文から訳す本を始める

決まりの本体はルートの `AGENTS.md`（「原文（ギリシア語・ラテン語）から訳す本」の「底本と資料」「著作権の線引き」）。手本にする本：First1KGreek から作った本なら `books/justin-second-apology/`、画像から本文を起こした本なら `books/papias-quadratus/`。同じ著者の訳了済みの本があれば、その本の `AGENTS.md` の文体・名前・訳語を引き継ぐ。

道具は `tools/` にあり、引数なしで実行すると使い方が出る。シェルには固定の文字列だけを書く。

## 1. 資料を集めて記録する

`cache/<ホスト>/…` に置く。

- 底本の電子化：First1KGreek の TEI、Open Apostolic Fathers のテキストなど。電子化がなければ、印刷版の画像から本文を起こす（papias-quadratus のやり方）。
- 底本の印刷版のスキャン：archive.org の PDF と OCR（`_djvu.txt`）、`_page_numbers.json`。電子化との照合と校注の確認に使う。
- 著作権の切れた英訳：ANF・NPNF（ccel.org の `.txt` が行で扱いやすい）など。レビューで読み比べに使う。
- ほかのパブリックドメインの校訂本・注解：論点一覧に使う。

`research/sources.md` に、資料ごとに URL、権利、`cache/` のパス、SHA-256 の先頭 16 桁（`sha256sum <ファイル>` の先頭）、取得日を書く。`CANDIDATES.md` の「取得済みの原文」にある資料は、そこから移す。著作権の残る資料は `cache/` に置くだけにし、文章をリポジトリに写さない。

## 2. 底本テキスト

1 行 1 節で `<ラベル> <本文>` の形にし、`research/<編者>-<年>.txt` に置いてコミットする。

```sh
python3 -I tools/tei2labeled.py <TEI の xml> books/<本>/research/<編者>-<年>.txt [--split] [--prefix N]
```

`--split` は節のない版の章を文の切れ目で分け、この訳の番号を付ける。そのときは README と本の AGENTS.md に「節番号はこの訳で付けたもの」と書く（レビュアーが版の番号と照らさないように）。実行したコマンドは README に書く。First1KGreek・Open Apostolic Fathers の本文は CC BY-SA 4.0 なので、README に出典とライセンスを書く。

## 3. ページの割り（research/pages.json）

```sh
python3 -I tools/plan-pages.py <底本.txt> <章の深さ> 1000 > <scratchpad>/plan.txt   # 1 ページ約 1,000 語
python3 -I tools/pages.py new <本> <scratchpad>/plan.txt --base books/<本>/research/<底本>.txt --language ギリシア語 [--digitized]
```

- `--digitized`：底本が印刷版の電子化（First1KGreek など）なら付ける。各ページに電子化と印刷版の照合が付く。
- できた `pages.json` を開き、`id`（ディレクトリ名。章の範囲なら `chapter-01-05`、巻があれば `04-book-2-1` のように順番を前に付ける）、`english_name`（例：`ANF 第 1 巻の英訳（Roberts–Donaldson、1867）`）、`print_name`（例：`Rauschen 1911 の印刷版`）を整える。
- 各ページの英訳と印刷版 OCR の行範囲を、章見出しから一括で埋める。

```sh
python3 -I tools/pages.py locate <本> english cache/ccel.org/anf01.txt '^\s*Chapter ([CXLVI]+)\.' --from <作品の始まりの行> --to <終わりの行>
python3 -I tools/pages.py locate <本> print <印刷版の djvu.txt> '<その版の章見出しの正規表現>' --from … --to …
```

  正規表現のグループ 1 が章番号（算用数字かローマ数字）。印刷版の章見出しが OCR で崩れて拾えない章は、出力に `not found` と出るので、その行だけ手で書く。画像（`images`：`<identifier>:<最初>-<最後>` の IIIF 番号）は分かる範囲で書き、残りは論点一覧のエージェントに探させる。

## 4. 本の AGENTS.md

次の節を立てる。のちのレビューで決まる訳し方も、この節に統合して足していく。

- `# <書名>の決まり` と、引き継ぐ本（同じ著者・同じ時代の本）。
- `## 節の形`：節の番号の由来、ラベルの形、見出しの形（`# 1〜5 章　…`）。
- `## 底本の扱い`：電子化の入力の誤りや印刷版の誤植の扱い、角括弧・丸括弧・引用符など版の記号の扱い。
- `## 文体`：地の文の常体／敬体、一人称、読み手の呼び方、人物ごとの口調、神とキリストへの敬語。
- `## 訳語表`：語ごとの訳と訳し分け。
- `## 文型の訳し方`：繰り返し出る構文の訳し方。
- `## 名前の表`：人名・地名（口語訳にある名前は口語訳の表記）。

## 5. README・intro.md・CANDIDATES.md

- README：1 行目は書名。最初の段落（何の何語原文からの翻訳か）の次に `制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。`。続けて底本（版・取得元・ライセンス、変換コマンド）、節の番号、聖書の引用に使う訳、`research/sources.md` と `research/cruxes/` への案内、進捗表（`python3 -I tools/pages.py readme <本>` の出力）。読者向けの文には、訳し直しの経緯を書かない。
- intro.md：著者の生没年と、いつの作品かを含めて 2〜4 文。末尾に翻訳中である旨の一文を置き、完了時に消す。
- CANDIDATES.md：その作品の状態を「翻訳中」にする。

## 6. 仕上げ

`python3 -I tools/page-context.py <本> <最初の節> <scratchpad>/check` を実行し、範囲と行範囲が出ることを確かめる。`Start <本>` でコミットして push する。

リレーから頼まれたときはここで終える。そうでなければ `translate-page` スキルで最初のページに進む。
