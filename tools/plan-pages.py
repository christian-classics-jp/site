import re
import sys

USAGE = """Group a labeled base text into pages of about TARGET words.

usage: python3 -I tools/plan-pages.py <base.txt> <chapter-depth> [target] [filter-prefix]

chapter-depth: how many label parts make a chapter (2 for 1.1.1 = book.chapter.unit).
A chapter longer than 1.5 x target is split at unit boundaries, and each piece is a page of its own. Pages never cross a book
(the label parts before the chapter number). Prints `<spec> <words>` per page.
"""

if len(sys.argv) < 3:
    sys.exit(USAGE)
path, depth = sys.argv[1], int(sys.argv[2])
target = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
prefix = sys.argv[4] if len(sys.argv) > 4 else None
LABEL = re.compile(r'^([0-9A-Z]+(?:\.[0-9]+)+) (.*)')

chapters = []
for line in open(path, encoding='utf-8'):
    m = LABEL.match(line)
    if not m or (prefix and not (m.group(1) + '.').startswith(prefix + '.')):
        continue
    parts = m.group(1).split('.')
    key = '.'.join(parts[:depth])
    if not chapters or chapters[-1][0] != key:
        chapters.append((key, []))
    chapters[-1][1].append((m.group(1), len(m.group(2).split())))

pieces = []
for key, units in chapters:
    total = sum(w for _, w in units)
    if total <= target * 1.5:
        pieces.append((key, key, total, False))
        continue
    n = round(total / target)
    size = total / n
    cur, acc = [], 0
    for label, w in units:
        cur.append(label)
        acc += w
        if acc >= size and label != units[-1][0]:
            pieces.append((cur[0], cur[-1], acc, True))
            cur, acc = [], 0
    if cur:
        pieces.append((cur[0], cur[-1], acc, True))


def book(label):
    return label.split('.')[:depth - 1]


pages, cur = [], []
for p in pieces:
    words = sum(x[2] for x in cur)
    if cur and (p[3] or cur[-1][3] or words + p[2] > target * 1.3
                or book(cur[0][0]) != book(p[0]) or words >= target * 0.85):
        pages.append(cur)
        cur = []
    cur.append(p)
if cur:
    pages.append(cur)

for page in pages:
    a, b = page[0][0], page[-1][1]
    spec = a if a == b else f'{a}-{b}'
    print(spec, sum(x[2] for x in page))
print(len(pages), 'pages', file=sys.stderr)
