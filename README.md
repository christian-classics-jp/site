# site

christian-classics-jp の翻訳書と、その公開サイトのリポジトリ。

サイト: [christian-classics-jp](https://christian-classics-jp.github.io/site/)

- `books/<本>/`：1 冊ずつの訳文（英日対訳の `both.md` と、そこから作る `jp.md`）
- `static/`：トップページ、ロゴ、PDF、EPUB
- `ci/`・`assets/`：サイトのビルド

`yarn install --ignore-scripts && yarn build` で `dist/` にサイトができる。master に push すると GitHub Actions が同じビルドをして GitHub Pages に公開する。翻訳作業の決まりは [AGENTS.md](AGENTS.md) にある。
