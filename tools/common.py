import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LABEL = re.compile(r'^([0-9A-Z]+(?:\.[0-9]+)+) ')


def parse_spec(spec):
    items = []
    for item in spec.split(','):
        if '-' in item:
            a, b = item.split('-')
            items.append(('range', a.split('.'), b.split('.')))
        else:
            items.append(('key', item.split('.'), None))
    return items


def key_tuple(parts):
    return tuple(int(p) if p.isdigit() else -1 for p in parts)


def in_spec(label, items):
    parts = label.split('.')
    for kind, a, b in items:
        head = parts[:len(a)]
        if kind == 'key' and head == a:
            return True
        if kind == 'range' and all(p.isdigit() for p in head) and key_tuple(a) <= key_tuple(head) <= key_tuple(b):
            return True
    return False


def source_lines(path, spec):
    items = parse_spec(spec)
    out = []
    for line in open(path, encoding='utf-8').read().split('\n'):
        m = LABEL.match(line)
        if m and in_spec(m.group(1), items):
            out.append((m.group(1), line))
    return out


def ja_label(label):
    return label.replace('.', ':')


def ja_prefix(label):
    return '% ' if label[0].isalpha() else ''


def group(label):
    return label.rsplit('.', 1)[0]


def book_dir(book):
    return os.path.join(ROOT, 'books', book)


def load_pages(book):
    path = os.path.join(book_dir(book), 'research', 'pages.json')
    if not os.path.exists(path):
        return None
    return json.load(open(path, encoding='utf-8'))


def save_pages(book, data):
    path = os.path.join(book_dir(book), 'research', 'pages.json')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')


def page_done(book, page_id):
    readme = os.path.join(book_dir(book), 'README.md')
    if not os.path.exists(readme):
        return False
    pat = re.compile(r'(^|[\s|`\[])' + re.escape(page_id) + r'([\s|`\]]|$)')
    for line in open(readme, encoding='utf-8'):
        if pat.search(line) and '[x]' in line:
            return True
    return False


def parse_loc(loc):
    out = []
    for part in (loc or '').split(';'):
        part = part.strip()
        if not part:
            continue
        path, _, rng = part.rpartition(':')
        a, _, b = rng.partition('-')
        out.append((path, int(a), int(b or a)))
    return out
