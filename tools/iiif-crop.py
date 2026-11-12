import hashlib
import pathlib
import sys
import time
import urllib.request

if len(sys.argv) != 5:
    sys.exit("usage: python3 -I iiif-crop.py IDENTIFIER PAGE REGION OUTDIR  (REGION = x,y,w,h | full)")

ident, page, region, outdir = sys.argv[1:]
out = pathlib.Path(outdir) / f"{page}_{region}.jpg"
if not out.exists():
    url = f"https://iiif.archive.org/iiif/{ident}${page}/{region}/full/0/default.jpg"
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "christian-classics-jp-research"})
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read()
            break
        except Exception as e:
            if attempt == 5:
                sys.exit(f"failed: {url}: {e}")
            time.sleep(15 * (attempt + 1))
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(data)
print(out, hashlib.sha256(out.read_bytes()).hexdigest()[:16])
