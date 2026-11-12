import datetime
import json
import os
import re
import subprocess
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, load_pages, page_done

USAGE = """Run a translation relay: one fresh Claude Code session per task, until the ledger is done.

usage: python3 -I tools/relay.py <relays/name.md> [--dry-run] [--once] [--max N] [--model M]

The ledger lists books as `## <book>` headings, in order; the text under a heading is passed to
the session as notes. For the first book that is not finished, the next task is:
  start-book    when research/pages.json is missing or its first page is not in the README yet
  translate     the first page of pages.json not marked [x] in the book's README
  finish-book   when every page is [x] but book.json is missing, has "preview", or the book is not
                in the work list of static/index.html
A task that is still pending after its session ends is retried (3 times; a usage limit waits until
the limit resets and does not count). Logs go to cache/relay-logs/.

--dry-run  print the next task and exit      --once  run one task and exit
--max N    stop after N tasks                --model M  pass --model to claude
"""


def parse_ledger(path):
    books, cur = [], None
    for line in open(path, encoding='utf-8'):
        m = re.match(r'^## (?:books/)?([a-z0-9-]+)\s*$', line.rstrip()) or re.match(r'^## (?:books/)?([a-z0-9-]+)[\s　（(—]', line)
        if m:
            cur = {'book': m.group(1), 'notes': []}
            books.append(cur)
        elif cur is not None:
            cur['notes'].append(line.rstrip('\n'))
    for b in books:
        b['notes'] = '\n'.join(b['notes']).strip()
    return books


def finished(book):
    path = os.path.join(ROOT, 'books', book, 'book.json')
    if not os.path.exists(path) or json.load(open(path, encoding='utf-8')).get('preview'):
        return False
    index = open(os.path.join(ROOT, 'static', 'index.html'), encoding='utf-8').read()
    return f'./{book}/' in index


def started(book, data):
    if data is None or not data.get('pages'):
        return False
    readme = os.path.join(ROOT, 'books', book, 'README.md')
    return os.path.exists(readme) and data['pages'][0]['id'] in open(readme, encoding='utf-8').read()


def next_task(books):
    for b in books:
        book = b['book']
        if finished(book):
            continue
        data = load_pages(book)
        if not started(book, data):
            return {'kind': 'start-book', 'book': book, 'notes': b['notes'], 'key': f'start {book}'}
        for p in data['pages']:
            if not page_done(book, p['id']):
                return {'kind': 'translate', 'book': book, 'page': p['id'], 'spec': p['spec'], 'notes': b['notes'],
                        'key': f'{book} {p["id"]}'}
        return {'kind': 'finish-book', 'book': book, 'notes': b['notes'], 'key': f'finish {book}'}
    return None


COMMON = ('このセッションはリレーの一部として自動で起動された。ユーザーには質問できず、承認が要る操作は自動で断られる。'
          '決めきれないことは、ルートと本の AGENTS.md、既存の訳と記録に照らして推奨の判断をとり、理由を記録に残す。'
          '終わったらコミットして push し、次の作業には進まずに終了する。')


def prompt_for(t):
    notes = f'\n\nリレーの進捗表にあるこの本の注意：\n{t["notes"]}' if t['notes'] else ''
    if t['kind'] == 'translate':
        body = f'translate-page スキルで、books/{t["book"]} のページ {t["page"]}（範囲 {t["spec"]}）を訳す。レビューの適用と README の進捗の [x] までがこのセッションの仕事。'
    elif t['kind'] == 'start-book':
        body = f'start-book スキルで、books/{t["book"]} の準備をする（research/pages.json を作るところまで）。ページの訳には進まない。'
    else:
        body = f'finish-book スキルで、books/{t["book"]} の完了処理をする。'
    return body + '\n\n' + COMMON + notes


def show(event):
    t = event.get('type')
    if t == 'assistant':
        for c in event.get('message', {}).get('content', []) or []:
            if c.get('type') == 'text' and c.get('text', '').strip():
                print('  ' + c['text'].strip().split('\n')[0][:160], flush=True)
            elif c.get('type') == 'tool_use':
                inp = c.get('input', {})
                what = inp.get('description') or inp.get('command') or inp.get('file_path') or inp.get('skill') or ''
                print(f'  → {c.get("name")}: {str(what).splitlines()[0][:140] if what else ""}', flush=True)
    elif t == 'result':
        print(f'  = {event.get("subtype")} turns={event.get("num_turns")} '
              f'min={round((event.get("duration_ms") or 0) / 60000, 1)}', flush=True)


def run(t, model):
    logdir = os.path.join(ROOT, 'cache', 'relay-logs')
    os.makedirs(logdir, exist_ok=True)
    stamp = datetime.datetime.now().strftime('%Y%m%d-%H%M%S')
    log = os.path.join(logdir, f'{stamp}-{re.sub(r"[^a-z0-9-]+", "-", t["key"])}.jsonl')
    cmd = ['claude', '-p', prompt_for(t), '--dangerously-skip-permissions', '--permission-prompts', 'none',
           '--output-format', 'stream-json', '--verbose', '--name', f'relay {t["key"]}']
    if model:
        cmd += ['--model', model]
    print(f'[{datetime.datetime.now():%H:%M}] {t["kind"]}: {t["key"]}  (log {os.path.relpath(log, ROOT)})', flush=True)
    result_text, limit = '', None
    with open(log, 'w', encoding='utf-8') as f, subprocess.Popen(cmd, cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True) as p:
        for line in p.stdout:
            f.write(line)
            try:
                ev = json.loads(line)
            except ValueError:
                print('  ' + line.rstrip()[:200], flush=True)
                result_text += line
                continue
            show(ev)
            if ev.get('type') == 'rate_limit_event':
                limit = ev.get('rate_limit_info') or {}
            if ev.get('type') == 'result':
                result_text += str(ev.get('result') or '') + str(ev.get('subtype') or '')
    return result_text, limit


def main(argv):
    args = list(argv)
    model = None
    limit = None
    if '--model' in args:
        i = args.index('--model')
        model = args[i + 1]
        del args[i:i + 2]
    if '--max' in args:
        i = args.index('--max')
        limit = int(args[i + 1])
        del args[i:i + 2]
    dry, once = '--dry-run' in args, '--once' in args
    args = [a for a in args if a not in ('--dry-run', '--once')]
    if len(args) != 1:
        sys.exit(USAGE)
    books = parse_ledger(os.path.join(ROOT, args[0]))
    if not books:
        sys.exit('no `## <book>` headings in the ledger')
    done, failures, waits, last_key = 0, 0, 0, None
    while True:
        t = next_task(books)
        if t is None:
            dirty = subprocess.run(['git', 'status', '--porcelain'], cwd=ROOT, capture_output=True, text=True).stdout.strip()
            ahead = subprocess.run(['git', 'rev-list', '--count', '@{u}..HEAD'], cwd=ROOT, capture_output=True, text=True).stdout.strip()
            if dirty or (ahead and ahead != '0'):
                print('every task is done, but the work tree has uncommitted or unpushed changes; commit and push them:')
                print(dirty or f'{ahead} commits not pushed')
                return 1
            print('relay finished: every book in the ledger is done')
            return 0
        if dry:
            print(t['kind'], t['key'])
            print('---')
            print(prompt_for(t))
            return 0
        if t['key'] == last_key:
            failures += 1
            if failures >= 3:
                print(f'stopped: {t["key"]} is still pending after 3 attempts; see cache/relay-logs/')
                return 1
            print(f'retrying {t["key"]} in 5 minutes (attempt {failures + 1})', flush=True)
            time.sleep(300)
        else:
            failures = 0
        if limit is not None and done >= limit:
            print(f'stopped after {done} tasks (--max)')
            return 0
        text, info = run(t, model)
        done += 1
        last_key = t['key']
        still = next_task(books)
        blocked = info and not str(info.get('status', 'allowed')).startswith('allowed')
        if still and still['key'] == t['key'] and (blocked or re.search(r'usage limit|rate limit|limit reached', text, re.I)):
            waits += 1
            if waits > 20:
                print('stopped: the usage limit did not clear')
                return 1
            until = (info or {}).get('resetsAt') or time.time() + 3600
            secs = max(300, int(until - time.time()) + 120)
            print(f'usage limit: waiting until {datetime.datetime.fromtimestamp(time.time() + secs):%m-%d %H:%M}', flush=True)
            time.sleep(secs)
            last_key = None
            continue
        if once:
            return 0


sys.exit(main(sys.argv[1:]))
