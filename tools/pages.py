import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, load_pages, save_pages, page_done, book_dir

USAGE = """Manage books/<book>/research/pages.json, the page list of a book translated from the original.

usage:
  python3 -I tools/pages.py new <book> <plan.txt> --base <path> --language <ギリシア語|ラテン語> [--digitized]
      plan.txt: one page per line, `<spec> [words]` (the output of tools/plan-pages.py, edited as needed).
      Page ids are generated (chapter-01-05, or NN-<spec>); rename them in pages.json before translating.
  python3 -I tools/pages.py locate <book> <english|print> <text file> <regex> [--from N] [--to N] [--prefix P]
      Fill each page's english or print location (`path:first-last`) from the lines where <regex> matches.
      Group 1 of <regex> is the chapter number (Arabic or Roman). --from/--to limit the lines searched.
      --prefix P: only pages whose spec starts with `P.`; the chapter is then the label part after P.
  python3 -I tools/pages.py next <book>
      Print the first page not marked [x] in the README progress table (`<id> <spec>`); exit 1 if none.
  python3 -I tools/pages.py readme <book>
      Print the README progress table for all pages.

pages.json fields: title, language, base (repo-relative), digitized (true when the base text is a
digitization of a printed edition, so each page gets a collation), english_name, print_name, and
pages: [{id, spec, base?, english?, print?, images?}]. english/print are `path:first-last`
(several joined with `; `); images is `<archive.org identifier>:<first>-<last>` IIIF page numbers.
"""

ROMAN = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}


def to_int(s):
    s = s.strip().rstrip('.')
    if s.isdigit():
        return int(s)
    s = s.upper()
    if not s or any(c not in ROMAN for c in s):
        return None
    total = 0
    for i, c in enumerate(s):
        v = ROMAN[c]
        total += -v if i + 1 < len(s) and ROMAN[s[i + 1]] > v else v
    return total


def opt(args, name, default=None):
    if name in args:
        i = args.index(name)
        val = args[i + 1]
        del args[i:i + 2]
        return val
    return default


def gen_id(spec, n, width):
    m = re.fullmatch(r'(\d+)(?:-(\d+))?', spec)
    if m:
        a, b = m.group(1), m.group(2)
        a = a.zfill(width)
        return f'chapter-{a}' if not b or b == m.group(1) else f'chapter-{a}-{b.zfill(width)}'
    return f'{n:02d}-' + re.sub(r'[^0-9A-Za-z]+', '-', spec).strip('-')


def describe(spec):
    out = []
    for item in spec.split(','):
        a, _, b = item.partition('-')
        pa, pb = a.split('.'), (b.split('.') if b else None)
        if pb is None:
            out.append(f'{pa[0]} 章' if len(pa) == 1 else f'{".".join(pa)}')
        elif len(pa) == 1 and len(pb) == 1:
            out.append(f'{pa[0]}〜{pb[0]} 章')
        elif len(pa) == 2 and len(pb) == 2 and pa[0] == pb[0]:
            out.append(f'{pa[0]} 章 {pa[1]}〜{pb[1]} 節')
        else:
            out.append(f'{a}〜{b}')
    return '、'.join(out)


def cmd_new(args):
    base = opt(args, '--base')
    language = opt(args, '--language')
    digitized = '--digitized' in args
    args = [a for a in args if a != '--digitized']
    if len(args) != 2 or not base or not language:
        sys.exit(USAGE)
    book, plan = args
    if load_pages(book) is not None:
        sys.exit(f'books/{book}/research/pages.json exists; edit it instead')
    specs = [l.split()[0] for l in open(plan, encoding='utf-8') if l.strip() and not l.startswith('#')]
    nums = [int(x) for s in specs for x in re.findall(r'\d+', s)]
    width = max(2, len(str(max(nums)))) if nums else 2
    readme = os.path.join(book_dir(book), 'README.md')
    title = open(readme, encoding='utf-8').readline().lstrip('# ').strip() if os.path.exists(readme) else ''
    data = {'title': title, 'language': language, 'base': base, 'digitized': digitized,
            'english_name': '', 'print_name': '',
            'pages': [{'id': gen_id(s, i, width), 'spec': s} for i, s in enumerate(specs, 1)]}
    os.makedirs(os.path.join(book_dir(book), 'research'), exist_ok=True)
    save_pages(book, data)
    for p in data['pages']:
        print(p['id'], p['spec'])


def cmd_locate(args):
    lo = int(opt(args, '--from', '1'))
    hi = opt(args, '--to')
    prefix = opt(args, '--prefix')
    if len(args) != 4 or args[1] not in ('english', 'print'):
        sys.exit(USAGE)
    book, field, text, regex = args
    data = load_pages(book)
    if data is None:
        sys.exit(f'no pages.json for {book}')
    lines = open(os.path.join(ROOT, text), encoding='utf-8', errors='replace').read().split('\n')
    hi = int(hi) if hi else len(lines)
    pat = re.compile(regex)
    starts = {}
    for n in range(lo, hi + 1):
        m = pat.search(lines[n - 1]) if n - 1 < len(lines) else None
        if m:
            ch = to_int(m.group(1))
            if ch is not None and ch not in starts:
                starts[ch] = n
    if not starts:
        sys.exit('no match')
    print('found chapters:', ' '.join(f'{k}@{v}' for k, v in sorted(starts.items())))
    rel = os.path.relpath(os.path.join(ROOT, text), ROOT)
    for p in data['pages']:
        spec = p['spec']
        if prefix and not spec.startswith(prefix + '.'):
            continue
        chapters = []
        for item in spec.split(','):
            for end in item.split('-'):
                parts = end.split('.')
                if prefix:
                    parts = parts[len(prefix.split('.')):]
                if parts and parts[0].isdigit():
                    chapters.append(int(parts[0]))
        if not chapters:
            continue
        a, b = min(chapters), max(chapters)
        if a not in starts:
            print(f'{p["id"]}: chapter {a} not found, left as is')
            continue
        later = [v for k, v in starts.items() if k > b]
        end = min(later) - 1 if later else hi
        p[field] = f'{rel}:{starts[a]}-{end}'
        print(f'{p["id"]}: {p[field]}')
    save_pages(book, data)


def cmd_next(args):
    if len(args) != 1:
        sys.exit(USAGE)
    data = load_pages(args[0])
    if data is None:
        sys.exit(f'no pages.json for {args[0]}')
    for p in data['pages']:
        if not page_done(args[0], p['id']):
            print(p['id'], p['spec'])
            return
    sys.exit(1)


def cmd_readme(args):
    if len(args) != 1:
        sys.exit(USAGE)
    data = load_pages(args[0])
    print('| 節 | 範囲 | 訳 |')
    print('|---|---|---|')
    for p in data['pages']:
        mark = '[x]' if page_done(args[0], p['id']) else '[ ]'
        print(f'| {p["id"]} | {describe(p["spec"])} | {mark} |')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(USAGE)
    cmd = {'new': cmd_new, 'locate': cmd_locate, 'next': cmd_next, 'readme': cmd_readme}.get(sys.argv[1])
    if not cmd:
        sys.exit(USAGE)
    cmd(sys.argv[2:])
