import json
import sys

USAGE = """Apply [old, new] pairs to a file, in order. Each old must match exactly once at its turn.

usage: python3 -I tools/replace.py [--dry-run] <file> <pairs.json>

--dry-run: check every pair against a copy in memory and report, without writing.
"""

args = sys.argv[1:]
dry = '--dry-run' in args
args = [a for a in args if a != '--dry-run']
if len(args) != 2:
    sys.exit(USAGE)
path, pairs_path = args
text = open(path, encoding='utf-8').read()
pairs = json.load(open(pairs_path, encoding='utf-8'))
bad = []
for i, pair in enumerate(pairs, 1):
    if not (isinstance(pair, list) and len(pair) == 2 and all(isinstance(x, str) for x in pair)):
        bad.append(f'pair {i}: not an [old, new] pair of strings')
        continue
    old, new = pair
    n = text.count(old)
    if n != 1:
        bad.append(f'pair {i}: {n} matches: {old}')
        continue
    text = text.replace(old, new)
if bad:
    sys.exit('\n'.join(bad))
if dry:
    print(f'OK: {len(pairs)} pairs apply cleanly')
else:
    open(path, 'w', encoding='utf-8').write(text)
    print(f'{len(pairs)} replacements')
