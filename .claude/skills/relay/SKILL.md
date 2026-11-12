---
name: relay
description: 複数の本・ページを、1 タスク 1 セッションで自動に訳し続けるリレーを用意して走らせる。進捗表（relays/<名前>.md）を書き、tools/relay.py を tmux で起動する。「リレーで訳して」「完遂まで自律的に」「次の本をまとめて訳して」と言われたときに使う。handoff スキルでセッションを渡していく方式の代わり。
---

# リレー

`tools/relay.py` が外側のループになり、1 タスクごとに新しい `claude -p` を起動する。タスクは本の準備（start-book）、1 ページ（translate-page）、本の完了処理（finish-book）の三種類。状態はリポジトリにだけ置く（`pages.json` と README の進捗表の `[x]`、`book.json`）ので、引き継ぎファイルは要らない。

## 進捗表を書く

`relays/<名前>.md`。本を訳す順に `## <本のディレクトリ名>` の見出しを並べ、見出しの下にその本の注意を書く（セッションにそのまま渡される）。

```markdown
# 3 世紀の文書リレー

## tertullian-apology　テルトゥリアヌス『護教論』（ラテン語）

- 底本：Oehler 1853（archive.org の識別子 …）。英訳は ANF 第 3 巻。
- 『殉教者たちへ』と訳語を揃える。

## origen-on-prayer　オリゲネス『祈りについて』
```

注意に書くのは、セッションが自分で調べると時間のかかること（底本の候補、資料の所在、同じ著者の本との揃え方）だけ。手順は書かない（スキルにある）。

## 走らせる

```sh
python3 -I tools/relay.py relays/<名前>.md --dry-run     # 次のタスクと渡すプロンプトを見る
tmux new-session -d -s relay-<名前> -c /home/ubuntu/dev/site 'python3 -I tools/relay.py relays/<名前>.md'
```

- 進み具合は `tmux attach -t relay-<名前>` で見る（各セッションの発言と道具の呼び出しが 1 行ずつ流れる）。全文のログは `cache/relay-logs/`。各セッションは `/resume` の一覧にも `relay <本> <節>` の名前で残る。
- セッションは `--permission-prompts none` で動くので、承認の確認では止まらない（確認が要る操作は断られ、エージェントは別のやり方を探す）。
- 1 タスクが終わっても状態が進んでいなければ、5 分おいて 3 回まで繰り返し、だめなら止まる。利用上限に当たったときは、上限が戻る時刻まで待って続ける。
- 止めるときは tmux のセッションを閉じる。途中で止めても、次に起動すれば進捗表の続きから始まる。
- `--once` で 1 タスクだけ、`--max N` で N タスクまで。

## 終わったら

`relay finished` と出たら、`git log` で各本の `Finish <本>` のコミットを確かめ、ユーザーに報告する。
