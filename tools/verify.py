import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import LABEL, source_lines, ja_label, ja_prefix

USAGE = """Check a both.md against the base text and the notation rules of the root AGENTS.md.

usage: python3 -I tools/verify.py <both.md> <source.txt> <spec>

ERROR (fix before review): base-text lines changed, missing or reordered; a base-text line not
followed by its translation; forbidden marks (？ ―― … and half-width ? !); no full-width space
after ！ when the sentence goes on; brackets unbalanced over the whole file.
WARN (fix unless the book's AGENTS.md says otherwise): sentences over 60 characters; footnotes
over 40 characters; a citation with Arabic numerals, 章・節, or a full book name; a citation
placed after 。; words the root AGENTS.md writes in kana (全て, 出来る, 下さい, 頂く …); 「 inside 「; brackets unbalanced in one line.
"""

if len(sys.argv) != 4:
    sys.exit(USAGE)
both, src, spec = sys.argv[1:4]
expected = source_lines(src, spec)
expected_lines = [l for _, l in expected]
lines = open(both, encoding='utf-8').read().split('\n')
errors, warnings = [], []

found = [(i, l) for i, l in enumerate(lines) if LABEL.match(l)]
if [l for _, l in found] != expected_lines:
    got = [l for _, l in found]
    for n, (a, b) in enumerate(zip(expected_lines, got + [''] * len(expected_lines))):
        if a != b:
            errors.append(f'base text differs at verse #{n + 1}:\n  expected: {a[:100]}\n  got:      {b[:100]}')
            break
    if len(got) != len(expected_lines):
        errors.append(f'base text has {len(expected_lines)} verses, both.md has {len(got)}')

for i, l in found:
    label = LABEL.match(l).group(1)
    nxt = lines[i + 1] if i + 1 < len(lines) else ''
    if not nxt.startswith(ja_prefix(label) + ja_label(label) + ' '):
        errors.append(f'line {i + 2}: translation for {label} missing (got {nxt[:40]!r})')

KANJI_NUM = '一二三四五六七八九十〇'
PAIRS = ['「」', '『』', '（）']
ARABIC_CITE = re.compile(r'（[^）]*[ぁ-んァ-ヶ一-龥][0-9０-９]+[:：・][0-9０-９]+[^）]*）')
CHAPTER_VERSE = re.compile(rf'[{KANJI_NUM}]+章[{KANJI_NUM}]+節')
FULL_NAME = re.compile(rf'（[^）]*(使徒行伝|[ァ-ヶ]{{2,6}}書|[ァ-ヶ]{{2,6}}による福音書)[{KANJI_NUM}]+[・章]')
CITE_AFTER_STOP = re.compile(rf'。（[^）]*[{KANJI_NUM}]+[・章]')
HIRAKU = re.compile(r'全て|出来(?:る|ない|ず|ま|た|て|れ)|下さ(?:い|る|っ|ら)|頂(?:く|き|い|け)|又(?:、|は|も)|為に|命を(?:得|与|持)')
BANG = re.compile(r'！(?=[^\s」』）！　])|！ ')
FOOTNOTE = re.compile(r'\^\[([^\]]*)\]')


def nested_kagi(text):
    stack = []
    for ch in text:
        if ch in '「『':
            if ch == '「' and stack and stack[-1] == '「':
                return True
            stack.append(ch)
        elif ch in '」』' and stack:
            stack.pop()
    return False


for i, l in enumerate(lines):
    if LABEL.match(l) or l.startswith('// ') or l.startswith('#') or not l.strip():
        continue
    n = i + 1
    for mark in ['？', '――', '…', '?', '!']:
        if mark in l:
            errors.append(f'line {n}: forbidden {mark}')
    if BANG.search(l.rstrip()):
        errors.append(f'line {n}: put a full-width space after ！ when the sentence goes on')
    for note in FOOTNOTE.findall(l):
        if len(note) > 40:
            warnings.append(f'line {n}: footnote {len(note)} chars (max 40): {note[:20]}…')
    plain = FOOTNOTE.sub('', l)
    if ARABIC_CITE.search(plain):
        warnings.append(f'line {n}: citation with Arabic numerals: {ARABIC_CITE.search(plain).group(0)}')
    if CHAPTER_VERSE.search(plain):
        warnings.append(f'line {n}: write 章・節 citations as 書名 + 漢数字・漢数字: {CHAPTER_VERSE.search(plain).group(0)}')
    if FULL_NAME.search(plain):
        warnings.append(f'line {n}: use the short book name in citations: {FULL_NAME.search(plain).group(1)}')
    m = HIRAKU.search(plain)
    if m:
        warnings.append(f'line {n}: write in kana (ひらく語): {m.group(0)}')
    if CITE_AFTER_STOP.search(plain):
        warnings.append(f'line {n}: citation after 。 (put it before 。)')
    if nested_kagi(plain):
        warnings.append(f'line {n}: 「 inside 「 (a quotation inside a quotation takes 『』)')
    for o, c in PAIRS:
        if plain.count(o) != plain.count(c):
            warnings.append(f'line {n}: unbalanced {o}{c} (fine only if a quotation spans verses)')
    body = re.sub(r'^\S+ ', '', plain)
    for s in re.split(r'(?<=[。！])', body):
        s = re.sub(r'（[^）]*）', '', s)
        if len(s) > 60:
            warnings.append(f'line {n}: {len(s)} chars: {s[:30]}…')

ja_text = '\n'.join(FOOTNOTE.sub('', l) for l in lines if not LABEL.match(l) and not l.startswith('// '))
for o, c in PAIRS:
    if ja_text.count(o) != ja_text.count(c):
        errors.append(f'whole file: unbalanced {o}{c}')

for w in warnings:
    print('WARN', w)
for e in errors:
    print('ERROR', e)
print('OK' if not errors else f'{len(errors)} errors')
sys.exit(1 if errors else 0)
