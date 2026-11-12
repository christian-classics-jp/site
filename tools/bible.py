import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT

USAGE = """Look up the Japanese Colloquial Bible (口語訳, 1955) in ../bible-api.

usage:
  python3 -I tools/bible.py <ref> [<ref> ...]     e.g. Gen.18.1-3 Rom.8.18 Ps.90.4
  python3 -I tools/bible.py --find <語句>          print the verses that contain the phrase

A ref is <Book>.<chapter>.<verse>[-<last verse>] with the English abbreviations of bible-api
(Gen, Exod, Lev, Num, Deut, Josh, Judg, Ruth, 1Sam, 2Sam, 1Kgs, 2Kgs, 1Chr, 2Chr, Ezra, Neh,
Esth, Job, Ps, Prov, Eccl, Song, Isa, Jer, Lam, Ezek, Dan, Hos, Joel, Amos, Obad, Jonah, Mic,
Nah, Hab, Zeph, Hag, Zech, Mal, Matt, Mark, Luke, John, Acts, Rom, 1Cor, 2Cor, Gal, Eph, Phil,
Col, 1Thess, 2Thess, 1Tim, 2Tim, Titus, Phlm, Heb, Jas, 1Pet, 2Pet, 1John, 2John, 3John, Jude, Rev).
The apocrypha are not in 口語訳; quote them from the Septuagint.
"""

DATA = os.path.join(os.path.dirname(ROOT), 'bible-api', 'mysql', 'sql', 'create-table.sql.tar.gz')


def search(pattern):
    r = subprocess.run(['rg', '-z', '-a', '-o', pattern, DATA], capture_output=True, text=True)
    return r.stdout.splitlines()


def main(args):
    if not args:
        sys.exit(USAGE)
    if not os.path.exists(DATA):
        sys.exit(f'{DATA} not found. Clone it first: git clone https://github.com/FujiHaruka/bible-api.git ../bible-api')
    if args[0] == '--find':
        if len(args) < 2:
            sys.exit(USAGE)
        phrase = re.escape(' '.join(args[1:]))
        for line in search(r"\('[^']+', '[^']*" + phrase + r"[^']*'"):
            print(line[2:-1].replace("', '", '\t', 1))
        return
    keys = []
    for ref in args:
        m = re.fullmatch(r'([1-3]?[A-Za-z]+)\.(\d+)\.(\d+)(?:-(\d+))?', ref)
        if not m:
            sys.exit(f'bad ref {ref!r}\n\n{USAGE}')
        book, ch, a, b = m.group(1), m.group(2), int(m.group(3)), int(m.group(4) or m.group(3))
        keys += [f'{book}.{ch}.{v}' for v in range(a, b + 1)]
    found = {}
    alternation = '|'.join(re.escape(k) for k in keys)
    for line in search(r"\('(?:" + alternation + r")', '[^']*'"):
        k, _, text = line[2:-1].partition("', '")
        found.setdefault(k, text)
    for k in keys:
        print(f'{k}\t{found.get(k, "(not found)")}')


main(sys.argv[1:])
