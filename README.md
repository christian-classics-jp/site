# site

christian-classics-jp の翻訳書と、その公開サイトのリポジトリ。

サイト: [christian-classics-jp](https://christian-classics-jp.github.io/site/)

- `books/<本>/`：1 冊ずつの訳文（原文と訳の対訳の `both.md` と、そこから作る `jp.md`）
- `static/`：トップページ、ロゴ、PDF、EPUB
- `ci/`・`assets/`：サイトのビルド

`npm install --ignore-scripts && npm run build` で `dist/` にサイトができる。master に push すると GitHub Actions が訳し終えた本をビルドして GitHub Pages に公開する。翻訳中の本は公開しない。翻訳作業の決まりは [AGENTS.md](AGENTS.md) にある。

## ライセンス

- 訳文（`books/`）のライセンスは本ごとに違い、CC0 1.0（[LICENSE-CC0](LICENSE-CC0)）か CC BY-SA 4.0（[LICENSE](LICENSE)）のどちらか。どちらの本かは、サイトの各本のページと `books/<本>/book.json` に示す。CC BY-SA 4.0 の本で表示する名前は「藤遥（christian-classics-jp）」とする。
- AI を使って訳した本は CC0 1.0 にする。原文のライセンスを引き継ぐ必要がある本だけは CC BY-SA 4.0 にする。
- トップページ（`static/index.html`）は CC BY-SA 4.0。
- サイトのビルドのプログラム（`ci/`・`assets/`）は MIT（[LICENSE-MIT](LICENSE-MIT)）。
- 訳文の中で引用した聖書の本文と、ロゴは、どのライセンスにも含まない。原文の扱いは各書の README に書いた出典に従う。
