import json
import sys

USAGE = """Move words between labeled lines of a base text, as listed in a JSON file.

usage: python3 -I tools/relabel.py <base.txt> <moves.json>

moves.json: [{"from": label, "to": label, "words": n, "pos": "head"|"tail", "expect": "…"?}]
"""

if len(sys.argv) != 3:
    sys.exit(USAGE)
path, spec = sys.argv[1], sys.argv[2]
moves = json.load(open(spec, encoding="utf-8"))
lines = [l for l in open(path, encoding="utf-8").read().split("\n") if l]
order = [l.split(" ", 1)[0] for l in lines]
text = {l.split(" ", 1)[0]: l.split(" ", 1)[1] for l in lines}
for m in moves:
    src, dst, n, pos = m["from"], m["to"], m["words"], m["pos"]
    w = text[src].split(" ")
    if pos == "head":
        frag, text[src] = " ".join(w[:n]), " ".join(w[n:])
    else:
        frag, text[src] = " ".join(w[-n:]), " ".join(w[:-n])
    if m.get("expect") and m["expect"] != frag:
        sys.exit(f"mismatch {src}->{dst}: {frag!r}")
    if dst not in text:
        text[dst] = frag
        order.insert(order.index(src) + (1 if pos == "tail" else 0), dst)
    elif pos == "head":
        text[dst] = text[dst] + " " + frag
    else:
        text[dst] = frag + " " + text[dst]
    print(src, "->", dst, frag)
open(path, "w", encoding="utf-8").write("\n".join(f"{k} {text[k]}" for k in order) + "\n")
