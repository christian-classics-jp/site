import datetime
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, load_pages, page_done, parse_loc, parse_spec, in_spec, key_tuple, source_lines

USAGE = """Gather what one page of a book needs, and fill the subagent prompts for it.

usage: python3 -I tools/page-context.py <book> <page id> <outdir> [--through <page id>]

Writes into <outdir>:
  base.txt                   the base-text lines of the page(s)
  print-<id>.txt             the printed edition's OCR lines (from pages.json `print`), numbered
  english-<id>.txt           the public-domain English translation lines (pages.json `english`), numbered
  cruxes-<id>.md             for books with one research/cruxes.md: the entries of this page
  crux-prompt.md             filled prompt for the crux-list subagent (pages <id>..<through>)
  collate-prompt.md          filled prompt for the collation subagent (pages <id>..<through>)
  review-prompt.md           filled prompt for the review subagent (page <id> only)
and prints a summary: what exists, what is missing, what to run next.
"""

PROMPTS = os.path.join(ROOT, '.claude', 'skills', 'translate-page', 'prompts')
HEAD_LABEL = re.compile(r'^([0-9A-Z]+(?:[.:][0-9]+)*)')


def rel(p):
    return os.path.relpath(p, ROOT)


def excerpt(locs, out):
    parts = []
    for path, a, b in locs:
        full = os.path.join(ROOT, path)
        if not os.path.exists(full):
            parts.append(f'# {path}: not found\n')
            continue
        lines = open(full, encoding='utf-8', errors='replace').read().split('\n')
        parts.append(f'# {path} l. {a}-{b}\n' + '\n'.join(f'{n}\t{lines[n - 1]}' for n in range(a, min(b, len(lines)) + 1)))
    open(out, 'w', encoding='utf-8').write('\n\n'.join(parts) + '\n')


def label_hits(token, items, first):
    token = token.replace(':', '.')
    ends = token.split('〜')
    if any(in_spec(e, items) for e in ends if e):
        return True
    if len(ends) == 2 and ends[0] and ends[1] and first:
        a, b, f = key_tuple(ends[0].split('.')), key_tuple(ends[1].split('.')), key_tuple(first.split('.'))
        return a <= f[:len(a)] and f[:len(b)] <= b
    return False


def legacy_cruxes(path, spec, first_label):
    items = parse_spec(spec)
    out, section, table_head, keep, shown_heads = [], '', [], False, set()
    lines = open(path, encoding='utf-8').read().split('\n')
    heading = ''
    for i, line in enumerate(lines):
        if line.startswith('#'):
            heading = line
        if line.startswith('## '):
            section, keep = line, False
            continue
        if line.startswith('### '):
            tok = line[4:].split(' ', 1)[0]
            tokens = [t for t in re.split(r'[、,]', tok) if t]
            keep = any(HEAD_LABEL.match(t) and label_hits(t, items, first_label) for t in tokens)
            if keep:
                if section and section not in shown_heads:
                    out.append(section)
                    shown_heads.add(section)
                out.append(line)
            continue
        if line.startswith('|'):
            if i > 0 and not lines[i - 1].startswith('|'):
                table_head = [line]
                continue
            if line.startswith('|---') or line.startswith('| ---'):
                table_head.append(line)
                continue
            m = HEAD_LABEL.match(line.strip('| ').split('|')[0].strip())
            if m and label_hits(m.group(1), items, first_label):
                key = heading + '\n'.join(table_head)
                if key not in shown_heads:
                    out += ['', heading] + table_head if heading not in shown_heads else [''] + table_head
                    shown_heads.add(key)
                    shown_heads.add(heading)
                out.append(line)
            continue
        if keep:
            out.append(line)
    return '\n'.join(out).strip()


def fill(template, values):
    text = open(os.path.join(PROMPTS, template), encoding='utf-8').read()
    for k, v in values.items():
        text = text.replace('{{' + k + '}}', v)
    left = re.findall(r'\{\{[^}]+\}\}', text)
    if left:
        sys.exit(f'{template}: unfilled {left}')
    return text


def main(argv):
    args = list(argv)
    through = None
    if '--through' in args:
        i = args.index('--through')
        through = args[i + 1]
        del args[i:i + 2]
    if len(args) != 3:
        sys.exit(USAGE)
    book, page_id, outdir = args
    data = load_pages(book)
    if data is None:
        sys.exit(f'books/{book}/research/pages.json not found (create it with tools/pages.py new)')
    ids = [p['id'] for p in data['pages']]
    if page_id not in ids or (through and through not in ids):
        sys.exit(f'unknown page; pages: {" ".join(ids)}')
    i0 = ids.index(page_id)
    i1 = ids.index(through) if through else i0
    group = data['pages'][i0:i1 + 1]
    page = data['pages'][i0]
    os.makedirs(outdir, exist_ok=True)
    bdir = os.path.join(ROOT, 'books', book)
    research = os.path.join(bdir, 'research')
    base = page.get('base') or data['base']

    base_lines = []
    for p in group:
        base_lines += [l for _, l in source_lines(os.path.join(ROOT, p.get('base') or data['base']), p['spec'])]
    open(os.path.join(outdir, 'base.txt'), 'w', encoding='utf-8').write('\n'.join(base_lines) + '\n')

    status = []
    page_lines = []
    for p in group:
        bits = [f'範囲 `{p["spec"]}`']
        if p.get('base') and p['base'] != data['base']:
            bits.append(f'底本 `{p["base"]}`')
        if p.get('print'):
            excerpt(parse_loc(p['print']), os.path.join(outdir, f'print-{p["id"]}.txt'))
            bits.append(f'印刷版 OCR `{p["print"]}`（抜粋 `{outdir}/print-{p["id"]}.txt`）')
        else:
            bits.append('印刷版 OCR の行範囲は未記入（自分で探す）')
        if p.get('images'):
            bits.append(f'画像 `{p["images"]}`')
        page_lines.append(f'- `{p["id"]}`：' + '、'.join(bits))
        if p.get('english'):
            excerpt(parse_loc(p['english']), os.path.join(outdir, f'english-{p["id"]}.txt'))

    cruxdir = os.path.join(research, 'cruxes')
    legacy = os.path.join(research, 'cruxes.md')
    collation_dir = os.path.join(research, 'collation')

    def crux_ref(p):
        f = os.path.join(cruxdir, f'{p["id"]}.md')
        if os.path.exists(f):
            return f'`{rel(f)}`（略号は `{rel(os.path.join(cruxdir, "README.md"))}`）', True
        if os.path.exists(legacy):
            first = source_lines(os.path.join(ROOT, p.get('base') or data['base']), p['spec'])
            text = legacy_cruxes(legacy, p['spec'], first[0][0] if first else '')
            if text:
                out = os.path.join(outdir, f'cruxes-{p["id"]}.md')
                open(out, 'w', encoding='utf-8').write(f'# {rel(legacy)} から {p["spec"]} の項目を切り出したもの\n\n' + text + '\n')
                return f'`{out}`（`{rel(legacy)}` から、この範囲の項目と表の行を切り出したもの。冒頭の略号の説明が要るときだけ元のファイルの先頭 40 行を読む）', True
        return 'まだない', False

    def collation_ref(p):
        if not data.get('digitized'):
            return '不要（底本は電子化ではない）', None
        f = os.path.join(collation_dir, f'{p["id"]}.md')
        if os.path.exists(f):
            return f'`{rel(f)}`', True
        if os.path.exists(legacy) and crux_ref(p)[1]:
            return '論点一覧の抜粋の中の「電子化の入力の誤り」の表', True
        return 'まだない', False

    first_with_dir = sorted(f for f in os.listdir(cruxdir) if f != 'README.md') if os.path.isdir(cruxdir) else []
    model = (f'`{rel(os.path.join(cruxdir, first_with_dir[0]))}` と `{rel(os.path.join(cruxdir, "README.md"))}`'
             if first_with_dir else '`books/didache/research/cruxes.md` の冒頭（略号の説明）と 2〜3 項目。見出しと各欄の形をこれに揃える')

    prev = data['pages'][i0 - 1]['id'] if i0 > 0 else None
    prev_ref = f'`books/{book}/src/{prev}/jp.md`' if prev else 'なし（本の最初のページ。本の AGENTS.md が引き継ぎを指定していればその本の訳）'
    eng = (f'{data.get("english_name") or "英訳"}：`{outdir}/english-{page["id"]}.txt`（`{page["english"]}` の切り出し）'
           if page.get('english') else '未記入。`research/sources.md` にある著作権の切れた英訳から該当箇所を探して読み、行範囲を報告する')
    prt = (f'`{outdir}/print-{page["id"]}.txt`（`{page["print"]}` の切り出し）' if page.get('print') else '行範囲は未記入。`research/sources.md` の印刷版の OCR から探す')
    imgs = f'`{page["images"]}`（archive.org の識別子と IIIF のページ番号）' if page.get('images') else '番号は未記入。`research/sources.md` の archive.org の識別子から探す'
    if len(group) > 1:
        prt = '各ページの行範囲と抜粋は上の一覧のとおり'
        imgs = '各ページの番号は上の一覧のとおり（未記入なら `research/sources.md` から探す）'

    values = {
        '書名': data.get('title') or book, '原語': data.get('language') or '原', '本': book,
        '節': page_id if len(group) == 1 else f'{page_id}〜{group[-1]["id"]}',
        '範囲': page['spec'] if len(group) == 1 else '、'.join(p['spec'] for p in group),
        '底本': base, '抜粋': outdir, '今日': datetime.date.today().isoformat(),
        'ページの一覧': '\n'.join(page_lines), '印刷版': prt, '画像': imgs, '手本': model,
        '書き込み先': '、'.join(f'`books/{book}/research/cruxes/{p["id"]}.md`' for p in group),
        '照合の書き込み先': '、'.join(f'`books/{book}/research/collation/{p["id"]}.md`' for p in group),
    }
    open(os.path.join(outdir, 'crux-prompt.md'), 'w', encoding='utf-8').write(fill('crux.md', values))
    if data.get('digitized'):
        open(os.path.join(outdir, 'collate-prompt.md'), 'w', encoding='utf-8').write(fill('collate.md', values))

    cref, chave = crux_ref(page)
    lref, lhave = collation_ref(page)
    pairs = os.path.join(outdir, f'{book}-{page_id}-pairs.json')
    rvalues = dict(values, 節=page_id, 範囲=page['spec'], 前のページ=prev_ref, 論点一覧=cref, 照合=lref, 英訳=eng, pairs=pairs)
    open(os.path.join(outdir, 'review-prompt.md'), 'w', encoding='utf-8').write(fill('review.md', rvalues))

    print(f'book: {book}  page: {page_id}  spec: {page["spec"]}  base: {base}')
    print(f'done in README: {"yes" if page_done(book, page_id) else "no"}')
    print(f'previous page: {prev_ref}')
    for p in group:
        c = crux_ref(p)[1]
        l = collation_ref(p)[1]
        status.append(f'  {p["id"]}: cruxes {"yes" if c else "MISSING"}, collation {"n/a" if l is None else ("yes" if l else "MISSING")}, '
                      f'print {"yes" if p.get("print") else "unset"}, english {"yes" if p.get("english") else "unset"}, images {"yes" if p.get("images") else "unset"}')
    print('\n'.join(status))
    print(f'wrote: {outdir}/base.txt, crux-prompt.md' + (', collate-prompt.md' if data.get('digitized') else '') + ', review-prompt.md and excerpts')
    print(f'pairs file for the reviewer: {pairs}')


main(sys.argv[1:])
