#!/usr/bin/env python3
"""Set / change the password for casestudy.html (stored in casestudy-lock.js).
Usage:  python3 set-casestudy-password.py
Only a salted PBKDF2-SHA256 hash is written into casestudy-lock.js (never the password)."""
import getpass, hashlib, os, re, sys

PAGE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "casestudy-lock.js")
ITER = 150000

pw = getpass.getpass("New case study password: ")
if len(pw) < 6:
    sys.exit("Use at least 6 characters.")
if pw != getpass.getpass("Repeat password: "):
    sys.exit("Passwords do not match.")

salt = os.urandom(16).hex()
h = hashlib.pbkdf2_hmac("sha256", pw.encode(), salt.encode(), ITER).hex()

s = open(PAGE, encoding="utf-8").read()
s, n1 = re.subn(r"SALT='[0-9a-f]*'", f"SALT='{salt}'", s, count=1)
s, n2 = re.subn(r"HASH='[0-9a-f]*'", f"HASH='{h}'", s, count=1)
if not (n1 and n2):
    sys.exit("Could not find the SALT/HASH constants in casestudy-lock.js")
open(PAGE, "w", encoding="utf-8").write(s)
print("Done. Now run:  git add -A && git commit -m 'Update case study password' && git push")
