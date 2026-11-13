---
name: finish-book
description: 全ページを訳し終えた本の完了処理をする。book.json を置き、トップページの作品一覧に加え、CANDIDATES.md と intro.md を直し、検査スクリプトで漏れを確かめる。「<本> を完成にして」「本の完了処理」、translate-page で最後のページを終えたとき、リレーから頼まれたときに使う。
---

# 本の完了処理

ルートの `AGENTS.md` の「節の訳が終わったら」と「ディレクトリ」の book.json の決まりに従う。

1. `books/<本>/book.json` を置く。
   - `author`、`title`（README の 1 行目）。
   - `license`：AI で訳した本は `"CC0"`。底本が First1KGreek か Open Apostolic Fathers の本文なら `"CC BY-SA"`。
   - `aiTranslation`：README に「全文を Claude Code（Anthropic の Claude）を使って訳した」とある本だけ。例：`全文を、ギリシア語原文（Ἀπολογία δευτέρα）から AI を使って翻訳しました。`
   - レビューのために一時公開していた本は `"preview": true` を外す。
2. `static/index.html` の作品一覧で、時代と流れの合うカテゴリーにその本を加える（カテゴリーの中は古い順）。
3. `CANDIDATES.md` からその作品を消す。
4. `intro.md` から翻訳中である旨の文を消す（2〜4 文に収める）。
5. 検査する。

   ```sh
   node tools/check-book.js <本>
   ```

   `FAIL` がなくなるまで直す。jp.md が作り直されたと出たら、それもコミットに含める。
6. 手元で確かめるなら `npm run build <本>`。
7. `Finish <本>` でコミットして push する。
