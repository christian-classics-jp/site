import datetime
import hashlib
import os
import sys
import time
import urllib.parse
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT

USAGE = """Download a public-domain source into cache/ once, and print the line for research/sources.md.

usage: python3 -I tools/fetch.py <url> [<path under cache/>]

Without a path, the file goes to cache/<host>/<path of the URL> (archive.org downloads go to
cache/archive.org/<identifier>/<file>). An existing file is not downloaded again.
Prints: the cache path, the first 16 hex digits of its SHA-256, and today's date.
"""

if len(sys.argv) not in (2, 3):
    sys.exit(USAGE)
url = sys.argv[1]
u = urllib.parse.urlparse(url)
if len(sys.argv) == 3:
    rel = sys.argv[2]
    if not rel.startswith('cache/'):
        rel = os.path.join('cache', rel)
else:
    parts = [p for p in urllib.parse.unquote(u.path).split('/') if p]
    if u.netloc.endswith('archive.org') and len(parts) >= 3 and parts[0] == 'download':
        rel = os.path.join('cache', 'archive.org', *parts[1:])
    else:
        rel = os.path.join('cache', u.netloc, *parts)
out = os.path.join(ROOT, rel)
if not os.path.exists(out):
    os.makedirs(os.path.dirname(out), exist_ok=True)
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'christian-classics-jp-research'})
            with urllib.request.urlopen(req, timeout=300) as r:
                data = r.read()
            break
        except Exception as e:
            if attempt == 4:
                sys.exit(f'failed: {url}: {e}')
            time.sleep(15 * (attempt + 1))
    with open(out + '.part', 'wb') as f:
        f.write(data)
    os.replace(out + '.part', out)
digest = hashlib.sha256(open(out, 'rb').read()).hexdigest()[:16]
print(f'{rel}\t{digest}\t{datetime.date.today().isoformat()}')
