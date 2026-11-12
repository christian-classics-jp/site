---
name: translate-page
description: ギリシア語・ラテン語の原文から訳す本の 1 ページ（books/<本>/src/<節>/ 一つ）を、論点一覧・照合・訳出・聖書の照合・レビュー・適用まで通して仕上げる。「<本> の次のページを訳して」「<節> を訳して」、リレーから起動されたとき、既存のページをレビューし直すときに使う。英訳から訳す本には使わない。
---

# 原文から 1 ページ訳す

1 ページ＝ `books/<本>/research/pages.json` の 1 項目＝ `src/<節>/` 一つ。決まりの本体はルートの `AGENTS.md`（とくに「原文（ギリシア語・ラテン語）から訳す本」）と本の `AGENTS.md`。ここにあるのは手順と道具だけ。

道具はすべて `tools/` にあり、`python3 -I tools/<名前>.py` を引数なしで実行すると使い方が出る。シェルには固定の文字列だけを書く（ループ、変数で組み立てる URL やパス、`rm` は承認の確認で止まる）。繰り返しが要るときは scratchpad に Python を書いて引数で渡す。

## 0. ページの文脈を集める

```sh
python3 -I tools/pages.py next <本>                               # 次のページ（指定がないとき）
python3 -I tools/page-context.py <本> <節> <scratchpad>/<節>      # 抜粋と依頼文を作る
```

`page-context` は、底本の範囲、前のページ、論点一覧と照合の有無、英訳と印刷版 OCR の行範囲を表示し、抜粋と三つの依頼文（`crux-prompt.md`・`collate-prompt.md`・`review-prompt.md`）を書き出す。`unset` と出た行範囲は、見つけしだい `pages.json` に書き足す（英訳の章見出しから一括で埋めるなら `tools/pages.py locate`）。次のページからは探さずに済む。

途中で止まったページの続きから始めるとき（リレーの再試行など）：
- `src/<節>/both.md` があり、`research/reviews/<節>.md` がない → 訳はできている。`verify` を通してから 3 のレビューへ。
- `research/reviews/<節>.md` もある → 適用まで済んでいる。4 の最後（`verify`、jp.md、`[x]`、コミット）だけを行う。
- 論点一覧・照合のファイルがあるページは、1 を飛ばす。

読むもの：本の `AGENTS.md`、前のページの `jp.md`（文体・訳語・口調を引き継ぐ）。大きなファイル（論点一覧、底本全体、OCR 全体）は丸ごと読まず、抜粋を読む。

## 1. 論点一覧と照合（サブエージェント）

page-context で `cruxes MISSING` のページがあれば、新しい general-purpose エージェント（fork ではない）に `crux-prompt.md` をそのまま渡す。数ページ分をまとめるときは `--through <最後の節>` を付けて page-context を作り直す（目安：合わせて 3,000 語まで。それより多いと 1 体が 150 回を超えて道具を呼び、自分で仕事を割り始める）。

`collation MISSING` のページ（底本が印刷版の電子化の本だけ）は、別の新しいエージェントに `collate-prompt.md` を渡す。論点一覧のエージェントと並べて同時に走らせてよい（書き込み先が違う）。

戻ってきたら：
- 「メインで決めること」を決め、本の `AGENTS.md` に書く。
- 訳注の案がある論点だけ、`cache/` の資料（OCR の行、画像）を自分で開いて確かめ直す。
- 新しい行範囲や資料が返ってきたら `pages.json` と `research/sources.md` に入っているか見る。

## 2. 訳す（メインが自分で）

底本の抜粋（`base.txt`）だけを見て訳す。英訳・論点一覧の訳語の案に寄りかからない。照合で入力の誤りとされた箇所は、印刷版の読み（意図された形）で訳し、`// ` メモにその旨を書く。

訳は scratchpad の `ja.txt` に書く：先頭に `# 見出し` の行、続けて 1 節 1 行で `11:1 訳…`、メモは直後の行に `// …`。

```sh
python3 -I tools/build.py <底本> <範囲> <scratchpad>/ja.txt books/<本>/src/<節>/both.md
python3 -I tools/verify.py books/<本>/src/<節>/both.md <底本> <範囲>
```

`verify` は `OK` が出るまで直す。WARN も本の AGENTS.md が認めていないものは直す（60 字超の文、出典の書式と位置、40 字超の訳注、「 の入れ子）。both.md を直すときは ja.txt を直して build し直すか、`tools/replace.py` に [旧, 新] の組を渡す。

聖書：引用はすべて口語訳と照らす。

```sh
python3 -I tools/bible.py Gen.18.1-3 Rom.8.18 Ps.90.4      # 節を引く（何節でも一度に）
python3 -I tools/bible.py --find みじめな人間               # 語句から探す
```

できたら `node ci/jp.js books/<本>/src/<節>` で jp.md を作り、`<本> <節>` でコミットして push する。README の進捗表の `[x]` はまだ付けない（レビューの適用までがこのページの仕事で、リレーは `[x]` で完了を判断する）。

## 3. レビュー（サブエージェント）

新しい general-purpose エージェント（fork ではない）に `review-prompt.md` をそのまま渡す。訳者がなぜそう訳したかは書き足さない（本の AGENTS.md にある決まりは渡してよい）。

## 4. 採否と適用（メイン）

- 指摘を原文と照らして一つずつ採否を決める。適用は `python3 -I tools/replace.py <both.md> <pairs.json>`（採らない組は JSON から外し、変えて採る組は書き換えてから当てる）。
- `research/reviews/<節>.md` に、渡したもの（抜粋の元の行範囲を含む）、指摘の数、採否と理由の表を書く。形は同じ本の既存のファイルに揃える。
- レビューで決まった訳し方は、本の `AGENTS.md` の該当する節（訳語表、文型の訳し方、名前の表など）に統合して書く。ページごとの追記を末尾に積まない。同じ趣旨の決まりがあれば一つにまとめる。
- `verify` → `node ci/jp.js` → README の進捗表に `[x]` → `Improve <本> <節>` でコミットして push。

最後のページを終えたら、続けて `finish-book` スキルで本の完了処理をする（リレーでは別のセッションが行う）。

## まとめて覚えておくこと

- 論点一覧はページごとのファイル（`research/cruxes/<節>.md`、略号は `research/cruxes/README.md`）。照合は `research/collation/<節>.md`。1 冊で一つの `research/cruxes.md` を持つ古い本は、page-context が該当部分を切り出す。
- 資料のダウンロードは `python3 -I tools/fetch.py <URL>`、画像は `python3 -I tools/iiif-crop.py <identifier> <IIIF番号> <full|x,y,w,h|pct:x,y,w,h> <出力先>`。手元の画像の加工は Pillow、PDF のページの書き出しは PyMuPDF（`import pymupdf`）。
- 著作権の残る訳文は、訳出でもレビューでも読まない。
