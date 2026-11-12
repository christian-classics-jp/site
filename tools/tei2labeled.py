import re
import sys
import xml.etree.ElementTree as ET
from collections import Counter

USAGE = """Convert a First1KGreek TEI edition into a labeled base text for tools/build.py and tools/verify.py.

usage: python3 -I tools/tei2labeled.py <edition.xml> <out.txt> [--split] [--prefix N]

Each output line is `<label> <text>`. Labels come from the nested textpart divs
(book, chapter, section) and from <milestone unit="section|subsection">.
--split: a textpart with no smaller division is cut at sentence ends (. ;) into
         units of at least 25 words, numbered 1, 2, ... (this translation's own numbering).
         Without it, every textpart is one line. Use it only for editions without sections.
Non-numeric labels (prooemium, opener) become 0; a one-level label gets .1.
Square brackets holding any Latin letter (editors' references, folio numbers) are removed.
--prefix N: prepend N to every label (e.g. a book number when the file holds one book).
Prints the word count per top-level division to stderr, for planning pages.
"""

TEI = '{http://www.tei-c.org/ns/1.0}'
args = sys.argv[1:]
if len([a for a in args if not a.startswith('--')]) < 2:
    sys.exit(USAGE)
split = '--split' in args
prefix = None
if '--prefix' in args:
    prefix = args[args.index('--prefix') + 1]
src, out = [a for a in args if not a.startswith('--') and a != prefix][:2]

root = ET.parse(src).getroot()
body = root.find(f'.//{TEI}body')
units = []


def clean(text):
    return re.sub(r'\s+', ' ', text).strip()


def walk(el, labels, buf):
    for child in el:
        tag = child.tag.replace(TEI, '')
        if tag == 'div' and child.get('type') == 'textpart':
            flush(labels, buf)
            walk(child, labels + [child.get('n')], buf)
            has_sub = any(c.tag == f'{TEI}div' or (c.tag == f'{TEI}milestone' and c.get('unit') in ('section', 'subsection')) for c in child.iter() if c is not child)
            flush(labels + [child.get('n')], buf, leaf=not has_sub)
        elif tag == 'milestone' and child.get('unit') in ('section', 'subsection'):
            flush(labels, buf)
            buf['sub'] = '1' if child.get('unit') == 'section' and labels and child.get('n') == labels[-1] else child.get('n')
        elif tag in ('pb', 'lb', 'head', 'note', 'bibl') or (tag == 'milestone'):
            pass
        else:
            buf['text'].append(child.text or '')
            walk(child, labels, buf)
            buf['text'].append('')
        if tag != 'div':
            buf['text'].append(child.tail or '')


EDITORIAL = re.compile(r'\s*\[[^\]]*[A-Za-z][^\]]*\]')
stripped = []


def flush(labels, buf, leaf=False):
    text = clean(' '.join(buf['text']))
    stripped.extend(EDITORIAL.findall(text))
    text = clean(EDITORIAL.sub('', text))
    if text:
        lab = labels + ([buf['sub']] if buf.get('sub') else [])
        units.append((lab, text, leaf and not buf.get('sub')))
    buf['text'] = []
    if buf.get('sub') and not text:
        return
    buf['sub'] = None


edition = body.find(f'{TEI}div')
buf = {'text': [], 'sub': None}
walk(edition, [], buf)
flush([], buf)


def sentences(text):
    parts = re.split(r'(?<=[.;])\s+', text)
    out, cur = [], []
    for p in parts:
        cur.append(p)
        if len(' '.join(cur).split()) >= 25:
            out.append(' '.join(cur))
            cur = []
    if cur:
        if out and len(' '.join(cur).split()) < 12:
            out[-1] += ' ' + ' '.join(cur)
        else:
            out.append(' '.join(cur))
    return out


lines, words = [], Counter()
for lab, text, leaf in units:
    if prefix:
        lab = [prefix] + lab
    lab = [x if x.isdigit() else '0' for x in lab]
    if leaf and split:
        for i, chunk in enumerate(sentences(text), 1):
            lines.append(f"{'.'.join(lab + [str(i)])} {chunk}")
    else:
        if len(lab) < 2:
            lab = lab + ['1']
        lines.append(f"{'.'.join(lab)} {text}")
    words['.'.join(lab if leaf and split else lab[:-1])] += len(text.split())

open(out, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
for k, v in words.items():
    print(k, v, file=sys.stderr)
if stripped:
    print(f'stripped {len(stripped)} editorial brackets, e.g. {stripped[:3]}', file=sys.stderr)
print(f'wrote {out}: {len(lines)} lines, {sum(words.values())} words', file=sys.stderr)
