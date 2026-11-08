# トリュフォンとの対話

殉教者ユスティノスの『トリュフォンとの対話』（Πρὸς Τρύφωνα Ἰουδαῖον διάλογος）のギリシア語原文からの翻訳。

制作：藤遥。全文を Claude Code（Anthropic の Claude）を使って訳した。

底本は G. Archambault 編、*Justin, Dialogue avec Tryphon*（全 2 巻、Textes et documents pour l'étude historique du christianisme、Paris: A. Picard, 1909）のギリシア語本文。[First1KGreek](https://github.com/OpenGreekAndLatin/First1KGreek)（コミット ed91552）の電子化（`data/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml`）を、次のコマンドで [research/archambault-1909.txt](research/archambault-1909.txt) にした。

```sh
python3 -I ~/.claude/handoffs/tei2labeled.py cache/raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/ed91552c52530c8f5a3ddf2dd767e899372a804c/data/tlg0645/tlg003/tlg0645.tlg003.perseus-grc2.xml books/dialogue-with-trypho/research/archambault-1909.txt
```

First1KGreek の本文は CC BY-SA 4.0 で、`research/archambault-1909.txt` と各節の `both.md` に置いたギリシア語本文もそれを引き継ぐ。電子化の入力の誤りは底本の行では直さず、印刷版（archive.org のスキャン [第 1 巻](https://archive.org/details/dialogueavectryp01just)・[第 2 巻](https://archive.org/details/dialogueavectryp02just)）と照らして、意図された形で訳した。

章（1〜142 章）と、章の中の節の番号は底本に従う。

聖書の引用は口語訳聖書を参考にした。

調査に使った資料は [research/sources.md](research/sources.md)、校訂上の論点と訳での扱いは [research/cruxes.md](research/cruxes.md) にある。

| 節 | 章 | 訳 |
|---|---|---|
| chapter-001-002 | 1〜2 章 | [x] |
| chapter-003-004 | 3〜4 章 | [x] |
| chapter-005-008 | 5〜8 章 | [x] |
| chapter-009-011 | 9〜11 章 | [x] |
| chapter-012-014 | 12〜14 章 | [x] |
| chapter-015-017 | 15〜17 章 | [x] |
| chapter-018-021 | 18〜21 章 | [x] |
| chapter-022-023 | 22〜23 章 | [x] |
| chapter-024-027 | 24〜27 章 | [ ] |
| chapter-028-030 | 28〜30 章 | [ ] |
| chapter-031-032 | 31〜32 章 | [ ] |
| chapter-033-035 | 33〜35 章 | [ ] |
| chapter-036-038 | 36〜38 章 | [ ] |
| chapter-039-041 | 39〜41 章 | [ ] |
| chapter-042-044 | 42〜44 章 | [ ] |
| chapter-045-047 | 45〜47 章 | [ ] |
| chapter-048-050 | 48〜50 章 | [ ] |
| chapter-051-055 | 51〜55 章 | [ ] |
| chapter-056-1 | 56 章 1〜13 節 | [ ] |
| chapter-056-2 | 56 章 14〜23 節 | [ ] |
| chapter-057-058 | 57〜58 章 | [ ] |
| chapter-059-061 | 59〜61 章 | [ ] |
| chapter-062-063 | 62〜63 章 | [ ] |
| chapter-064-065 | 64〜65 章 | [ ] |
| chapter-066-067 | 66〜67 章 | [ ] |
| chapter-068-069 | 68〜69 章 | [ ] |
| chapter-070-073 | 70〜73 章 | [ ] |
| chapter-074-076 | 74〜76 章 | [ ] |
| chapter-077-078 | 77〜78 章 | [ ] |
| chapter-079-081 | 79〜81 章 | [ ] |
| chapter-082-084 | 82〜84 章 | [ ] |
| chapter-085-086 | 85〜86 章 | [ ] |
| chapter-087-088 | 87〜88 章 | [ ] |
| chapter-089-092 | 89〜92 章 | [ ] |
| chapter-093-095 | 93〜95 章 | [ ] |
| chapter-096-099 | 96〜99 章 | [ ] |
| chapter-100-102 | 100〜102 章 | [ ] |
| chapter-103-105 | 103〜105 章 | [ ] |
| chapter-106-109 | 106〜109 章 | [ ] |
| chapter-110-112 | 110〜112 章 | [ ] |
| chapter-113-115 | 113〜115 章 | [ ] |
| chapter-116-118 | 116〜118 章 | [ ] |
| chapter-119-120 | 119〜120 章 | [ ] |
| chapter-121-123 | 121〜123 章 | [ ] |
| chapter-124-126 | 124〜126 章 | [ ] |
| chapter-127-129 | 127〜129 章 | [ ] |
| chapter-130-132 | 130〜132 章 | [ ] |
| chapter-133-135 | 133〜135 章 | [ ] |
| chapter-136-139 | 136〜139 章 | [ ] |
| chapter-140-142 | 140〜142 章 | [ ] |
