import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, load_pages, page_done

USAGE = """Check that a book is ready to publish as finished.

usage: python3 -I tools/check-book.py <book>

Rebuilds every jp.md with ci/jp.js and reports any that changed, then checks the README progress,
book.json, intro.md, the work list in static/index.html, CANDIDATES.md, and leftover paths
outside the repository. Exit 1 when any check fails.
"""

if len(sys.argv) != 2:
    sys.exit(USAGE)
book = sys.argv[1]
bdir = os.path.join(ROOT, 'books', book)
if not os.path.isdir(bdir):
    sys.exit(f'no such book: {book}')
fails, oks = [], []


def check(ok, msg):
    (oks if ok else fails).append(msg)


readme = open(os.path.join(bdir, 'README.md'), encoding='utf-8').read()
pages = load_pages(book)
if pages:
    left = [p['id'] for p in pages['pages'] if not page_done(book, p['id'])]
    check(not left, 'all pages marked [x] in README' + (f' (not yet: {" ".join(left)})' if left else ''))
check('[ ]' not in readme, 'no [ ] left in README')

srcdir = os.path.join(bdir, 'src')
for d in sorted(os.listdir(srcdir)):
    full = os.path.join(srcdir, d)
    if os.path.exists(os.path.join(full, 'both.md')):
        subprocess.run(['node', os.path.join(ROOT, 'ci', 'jp.js'), full], cwd=ROOT, capture_output=True)
changed = subprocess.run(['git', 'status', '--porcelain', '--', f'books/{book}/src'], cwd=ROOT, capture_output=True, text=True).stdout
stale = [l[3:] for l in changed.splitlines() if l.endswith('jp.md')]
check(not stale, 'every jp.md matches its both.md' + (f' (rebuilt now, commit them: {" ".join(stale)})' if stale else ''))

bj_path = os.path.join(bdir, 'book.json')
if os.path.exists(bj_path):
    bj = json.load(open(bj_path, encoding='utf-8'))
    check(bool(bj.get('author')) and bool(bj.get('title')), 'book.json has author and title')
    check(bj.get('license') in ('CC0', 'CC BY-SA'), f'book.json license is CC0 or CC BY-SA (got {bj.get("license")!r})')
    check(not bj.get('preview'), 'book.json has no "preview"')
    ai = '全文を Claude Code' in readme
    check(not ai or bool(bj.get('aiTranslation')), 'book.json has aiTranslation (README says the book was translated with Claude Code)')
    inherits = bool(re.search(r'First1KGreek|Open Apostolic Fathers', readme))
    if ai:
        want = 'CC BY-SA' if inherits else 'CC0'
        check(bj.get('license') == want, f'license is {want} ({"the base text is CC BY-SA" if inherits else "AI translation"})')
    title = bj.get('title', '')
else:
    check(False, 'book.json exists')
    title = readme.split('\n', 1)[0].lstrip('# ').strip()

intro = os.path.join(bdir, 'intro.md')
if os.path.exists(intro):
    text = open(intro, encoding='utf-8').read()
    check('翻訳中' not in text, 'intro.md does not say the book is in progress')
    n = len(re.findall(r'[。！]', text))
    check(2 <= n <= 4, f'intro.md has 2–4 sentences (has {n})')
else:
    check(False, 'intro.md exists')

index = open(os.path.join(ROOT, 'static', 'index.html'), encoding='utf-8').read()
check(f'./{book}/' in index, 'static/index.html links to the book')
cand = open(os.path.join(ROOT, 'CANDIDATES.md'), encoding='utf-8').read()
short = re.sub(r'^.*『|』.*$', '', title) if '『' in title else title
check(not (short and short in cand), f'CANDIDATES.md no longer lists 「{short}」')
check('.claude/handoffs' not in readme, 'README has no path outside the repository')

for m in oks:
    print('OK  ', m)
for m in fails:
    print('FAIL', m)
sys.exit(1 if fails else 0)
