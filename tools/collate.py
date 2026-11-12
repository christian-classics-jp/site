import difflib
import os
import re
import sys
import unicodedata

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, source_lines

USAGE = """List where a digitized base text differs from the OCR of its printed edition.

usage: python3 -I tools/collate.py <base.txt> <spec> <ocr.txt> <first>-<last> [options]

<first>-<last>: the OCR lines that hold the printed text of <spec> (from pages.json `print`).
Prints one candidate per line: base label, kind, base words, OCR words, OCR line. Each candidate
is only a lead: OCR errs more often than the digitization, so check every one on the page image
before recording it.

options:
  --skip REGEX       drop OCR lines matching REGEX (running heads, apparatus); repeatable
  --keep-latin       keep OCR lines with more Latin than Greek letters (dropped by default
                     when the base text is Greek, since they are notes and apparatus)
  --ignore-accents   compare without accents and breathings (first pass on a poor OCR)
  --ignore-punct     compare without punctuation
  --max-gap N        report OCR-only or base-only runs longer than N words as one line (default 6)
"""

GREEK = re.compile(r'[Ͱ-Ͽἀ-῿]')
LATIN = re.compile(r'[A-Za-z]')
PUNCT = '.,·;:·;'
NOISE = re.compile(r'[\dΙΧVXLC.,·;:\s\u0342]*')
APOS = {'᾽': '᾿', '’': '᾿', "'": '᾿', 'ʼ': '᾿', '‘': '᾿', '̓': '᾿'}


def norm(s, accents):
    s = unicodedata.normalize('NFC', s)
    s = s.replace('ϑ', 'θ').replace('ϕ', 'φ').replace('ϰ', 'κ').replace('ϱ', 'ρ').replace('·', '·').replace(';', ';')
    for a, b in APOS.items():
        s = s.replace(a, b)
    m = re.match(r'^[᾿῾](\w)', s)
    if m:
        s = s[1:]
    if s[:1].isupper():
        head = ''.join(c for c in unicodedata.normalize('NFD', s[0]) if c not in '\u0313\u0314')
        s = unicodedata.normalize('NFC', head) + s[1:]
    if not accents:
        s = ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c))
        s = unicodedata.normalize('NFC', s).lower()
    return s


def tokens(text, accents, punct):
    out = []
    for raw in text.replace('"', '·').split():
        parts = re.findall(r'[^' + re.escape(PUNCT) + r']+|[' + re.escape(PUNCT) + r']', raw)
        for p in parts:
            if p in PUNCT and not punct:
                continue
            p = norm(p, accents)
            if p.strip():
                out.append(p)
    return out


def main(argv):
    args = list(argv)
    skips, accents, punct, keep_latin, max_gap = [], True, True, False, 6
    while '--skip' in args:
        i = args.index('--skip')
        skips.append(re.compile(args[i + 1]))
        del args[i:i + 2]
    if '--max-gap' in args:
        i = args.index('--max-gap')
        max_gap = int(args[i + 1])
        del args[i:i + 2]
    for flag in ('--ignore-accents', '--ignore-punct', '--keep-latin'):
        if flag in args:
            args.remove(flag)
            accents = accents and flag != '--ignore-accents'
            punct = punct and flag != '--ignore-punct'
            keep_latin = keep_latin or flag == '--keep-latin'
    if len(args) != 4 or '-' not in args[3]:
        sys.exit(USAGE)
    base, spec, ocr, rng = args
    first, last = (int(x) for x in rng.split('-'))

    b_tok, b_lab = [], []
    greek_base = 0
    for label, line in source_lines(os.path.join(ROOT, base), spec):
        text = line.split(' ', 1)[1] if ' ' in line else ''
        greek_base += len(GREEK.findall(text)) > len(LATIN.findall(text))
        for t in tokens(text, accents, punct):
            b_tok.append(t)
            b_lab.append(label)
    if not b_tok:
        sys.exit(f'no base text for {spec}')
    greek_mode = greek_base > 0 and not keep_latin

    o_tok, o_line = [], []
    lines = open(os.path.join(ROOT, ocr), encoding='utf-8', errors='replace').read().split('\n')
    carry, carry_line = '', 0
    dropped = 0
    for n in range(first, min(last, len(lines)) + 1):
        line = lines[n - 1].strip()
        if not line or re.fullmatch(r'[\dIVXLCivxlc\s.\-—*]+', line) or any(s.search(line) for s in skips):
            dropped += bool(line)
            continue
        if greek_mode and len(LATIN.findall(line)) > len(GREEK.findall(line)):
            dropped += 1
            continue
        if carry:
            line = carry + line
            carry = ''
        if line.endswith('-') and not line.endswith(' -'):
            words = line[:-1].rsplit(' ', 1)
            carry = words[-1]
            carry_line = n
            line = words[0] if len(words) > 1 else ''
        for t in tokens(line, accents, punct):
            o_tok.append(t)
            o_line.append(carry_line if carry_line and not o_line else n)
    if carry:
        for t in tokens(carry, accents, punct):
            o_tok.append(t)
            o_line.append(carry_line)

    sm = difflib.SequenceMatcher(None, b_tok, o_tok, autojunk=False)
    count = 0
    for op, a1, a2, c1, c2 in sm.get_opcodes():
        if op == 'equal':
            continue
        label = b_lab[a1] if a1 < len(b_lab) else b_lab[-1]
        where = f'l. {o_line[c1]}' if c1 < len(o_line) else (f'l. {o_line[-1]}' if o_line else '')
        bw, ow = ' '.join(b_tok[a1:a2]), ' '.join(o_tok[c1:c2])
        if op in ('insert', 'delete') and NOISE.fullmatch(bw + ow):
            continue
        if op == 'insert' and c2 - c1 > max_gap:
            print(f'{label}\tOCR only\t{c2 - c1} words\t{where}–{o_line[c2 - 1]}')
        elif op == 'delete' and a2 - a1 > max_gap:
            print(f'{label}\tbase only\t{a2 - a1} words: {" ".join(b_tok[a1:a1 + 4])} …\t{where}')
        else:
            print(f'{label}\t{op}\t{bw or "—"}\t{ow or "—"}\t{where}')
        count += 1
    print(f'{count} candidates; base {len(b_tok)} tokens, OCR {len(o_tok)} tokens, {dropped} OCR lines dropped; '
          f'similarity {sm.ratio():.2f}', file=sys.stderr)


main(sys.argv[1:])
