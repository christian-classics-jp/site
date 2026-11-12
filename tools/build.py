import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import source_lines, ja_label, ja_prefix, group

USAGE = """Build both.md from the base text and a translation file.

usage: python3 -I tools/build.py <source.txt> <spec> <ja.txt> <out both.md>

spec: comma-separated chapter keys or ranges of the base text labels, e.g. `11-15`, `3.1-3.3`, `20-22,EP`.
ja.txt: `# 見出し` lines first, then one line per base-text verse starting with the label in
`11:1` form. `// ` lines are kept right after the preceding translation line.
Labels that start with a letter get the `% ` prefix in both.md automatically.
"""

if len(sys.argv) != 5:
    sys.exit(USAGE)
src, spec, ja_path, out = sys.argv[1:5]
greek = source_lines(src, spec)
if not greek:
    sys.exit(f'no base-text lines match spec {spec!r} in {src}')
headings, ja, last = [], {}, None
for line in open(ja_path, encoding='utf-8').read().split('\n'):
    if not line.strip():
        continue
    if line.startswith('#'):
        headings.append(line)
    elif line.startswith('// '):
        if last is None:
            sys.exit('a // line comes before the first translation line')
        ja[last].append(line)
    else:
        label = line.split(' ', 1)[0]
        if label in ja:
            sys.exit(f'duplicate translation label {label}')
        ja[label] = [line]
        last = label

wanted = {ja_label(l) for l, _ in greek}
errors = [f'missing translation for {ja_label(l)}' for l, _ in greek if ja_label(l) not in ja]
errors += [f'translation label not in base text: {l}' for l in ja if l not in wanted]
if errors:
    sys.exit('\n'.join(errors))

body, prev = [], None
for label, line in greek:
    if prev is not None and group(label) != group(prev):
        body.append('')
    body.append(line)
    first, *rest = ja[ja_label(label)]
    body.append(ja_prefix(label) + first)
    body.extend(rest)
    prev = label
text = '\n'.join(headings) + ('\n\n' if headings else '') + '\n'.join(body) + '\n'
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
open(out, 'w', encoding='utf-8').write(text)
print(f'wrote {out}: {len(greek)} verses')
