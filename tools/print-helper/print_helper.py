#!/usr/bin/env python
"""Agent d'impression Windows — BrainStore ERP.

À lancer sur le PC serveur de l'agence (co-localisé avec l'instance Docker locale).
L'instance Django (conteneur Linux) l'appelle via http://host.docker.internal:9113.

Endpoints (server-to-server ; aucun navigateur n'appelle cet agent) :
  GET  /printers -> {"printers": ["HP LaserJet", "XP-80", ...]}   (imprimantes Windows)
  POST /print    -> {"printer": "<nom>", "pdf_base64": "<...>"}    imprime en SILENCE

Impression silencieuse via SumatraPDF (gratuit, portable) :
  SumatraPDF.exe -print-to "<imprimante>" -silent <fichier.pdf>
Placez SumatraPDF.exe à côté de ce script, ou définissez SUMATRA_PATH.

Dépendances : Python 3 + pywin32  (pip install pywin32)
Port : 9113 (ou PRINT_HELPER_PORT).
"""
import base64
import json
import os
import subprocess
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

PORT = int(os.environ.get("PRINT_HELPER_PORT", "9113"))
_HERE = os.path.dirname(os.path.abspath(__file__))
SUMATRA = os.environ.get("SUMATRA_PATH") or os.path.join(_HERE, "SumatraPDF.exe")


def list_printers():
    try:
        import win32print
        flags = win32print.PRINTER_ENUM_LOCAL | win32print.PRINTER_ENUM_CONNECTIONS
        return [p[2] for p in win32print.EnumPrinters(flags)]
    except Exception as e:                       # pragma: no cover - dépend de Windows
        print("EnumPrinters a échoué:", e)
        return []


def print_pdf(printer, pdf_bytes):
    fd, path = tempfile.mkstemp(suffix=".pdf")
    os.close(fd)
    with open(path, "wb") as f:
        f.write(pdf_bytes)
    try:
        subprocess.run([SUMATRA, "-print-to", printer, "-silent", path],
                       check=True, timeout=120)
    finally:
        try:
            os.remove(path)
        except OSError:
            pass


class Handler(BaseHTTPRequestHandler):
    def _send(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        # server-to-server, mais on reste permissif au cas où un navigateur de la même
        # machine serait utilisé pour tester le mappage.
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send(204, {})

    def do_GET(self):
        if self.path.rstrip("/") == "/printers":
            self._send(200, {"printers": list_printers()})
        else:
            self._send(404, {"error": "not found"})

    def do_POST(self):
        if self.path.rstrip("/") != "/print":
            return self._send(404, {"error": "not found"})
        n = int(self.headers.get("Content-Length", 0) or 0)
        try:
            data = json.loads(self.rfile.read(n) or b"{}")
            printer = data.get("printer")
            b64 = data.get("pdf_base64")
            if not printer or not b64:
                return self._send(400, {"error": "printer & pdf_base64 requis"})
            print_pdf(printer, base64.b64decode(b64))
            self._send(200, {"printed": True})
        except Exception as e:                   # pragma: no cover
            self._send(500, {"error": str(e)})

    def log_message(self, *args):
        pass


if __name__ == "__main__":                       # pragma: no cover
    print(f"BrainStore print helper → http://0.0.0.0:{PORT}  (SumatraPDF: {SUMATRA})")
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
