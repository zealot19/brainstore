#!/usr/bin/env python
"""Agent d'impression Windows — BrainStore ERP.

À lancer sur le PC de l'agence. L'instance Django l'appelle en HTTP :
  GET  /printers -> {"printers": ["HP LaserJet", "XP-80", ...]}   (imprimantes Windows)
  POST /print    -> {"printer": "<nom>", "html": "<...>"}          imprime en SILENCE

Chaîne d'impression (aucune dépendance WeasyPrint côté serveur) :
  1. le serveur envoie le HTML du document (reçu / étiquette / bordereau) ;
  2. l'agent rend le HTML en PDF avec Edge/Chrome sans tête (intégré à Windows) ;
  3. l'agent imprime le PDF en silence sur l'imprimante demandée via SumatraPDF :
         SumatraPDF.exe -print-to "<imprimante>" -silent <fichier.pdf>

Ainsi reçu et étiquette partent chacun sur SON imprimante (mappage central dans l'ERP :
Configuration -> Modèles de documents -> Mappage des imprimantes).

Pré-requis sur le PC :
  - Python 3 (aucune autre dépendance : liste des imprimantes via PowerShell).
  - Microsoft Edge (présent par défaut) OU Google Chrome — pour le rendu HTML -> PDF.
  - SumatraPDF (portable, gratuit) : placer SumatraPDF.exe à côté de ce script
    (ou définir SUMATRA_PATH) — pour l'impression silencieuse sur une imprimante nommée.

Port : 9113 (ou PRINT_HELPER_PORT). PRINT_HELPER_URL côté ERP = http://127.0.0.1:9113
(ou http://host.docker.internal:9113 si l'instance tourne sous Docker).
"""
import base64
import json
import os
import pathlib
import subprocess
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

PORT = int(os.environ.get("PRINT_HELPER_PORT", "9113"))
_HERE = os.path.dirname(os.path.abspath(__file__))
SUMATRA = os.environ.get("SUMATRA_PATH") or os.path.join(_HERE, "SumatraPDF.exe")

# Navigateurs sans tête possibles pour le rendu HTML -> PDF (Edge est intégré à Windows).
_BROWSER_CANDIDATES = [
    os.environ.get("EDGE_PATH"), os.environ.get("CHROME_PATH"),
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]


def _find_browser():
    for p in _BROWSER_CANDIDATES:
        if p and os.path.exists(p):
            return p
    return None


def list_printers():
    """Nom des imprimantes Windows. Via PowerShell (aucune dépendance), repli pywin32."""
    try:
        out = subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             "Get-Printer | Select-Object -ExpandProperty Name"],
            capture_output=True, text=True, timeout=15)
        names = [ln.strip() for ln in out.stdout.splitlines() if ln.strip()]
        if names:
            return names
    except Exception as e:
        print("Get-Printer a échoué:", e)
    try:
        import win32print
        flags = win32print.PRINTER_ENUM_LOCAL | win32print.PRINTER_ENUM_CONNECTIONS
        return [p[2] for p in win32print.EnumPrinters(flags)]
    except Exception as e:
        print("EnumPrinters a échoué:", e)
        return []


def _html_to_pdf(html):
    """Rend le HTML en PDF via Edge/Chrome sans tête. Retourne le chemin du PDF."""
    browser = _find_browser()
    if not browser:
        raise RuntimeError("Edge/Chrome introuvable (définir EDGE_PATH ou CHROME_PATH).")
    tmp = tempfile.mkdtemp(prefix="bsprint_")
    in_html = os.path.join(tmp, "doc.html")
    out_pdf = os.path.join(tmp, "doc.pdf")
    with open(in_html, "w", encoding="utf-8") as f:
        f.write(html)
    url = pathlib.Path(in_html).as_uri()
    subprocess.run([
        browser, "--headless", "--disable-gpu", "--no-pdf-header-footer",
        f"--user-data-dir={os.path.join(tmp, 'profile')}",
        f"--print-to-pdf={out_pdf}", url,
    ], check=True, timeout=90)
    if not os.path.exists(out_pdf):
        raise RuntimeError("Le rendu PDF a échoué (aucun fichier produit).")
    return out_pdf


def _print_pdf(printer, pdf_path):
    if not os.path.exists(SUMATRA):
        raise RuntimeError(f"SumatraPDF introuvable ({SUMATRA}).")
    subprocess.run([SUMATRA, "-print-to", printer, "-silent", pdf_path],
                   check=True, timeout=120)


def print_document(printer, *, html=None, pdf_bytes=None):
    """Imprime un document (HTML rendu localement, ou PDF déjà fourni) sur `printer`."""
    cleanup_dir = None
    if html is not None:
        pdf_path = _html_to_pdf(html)
        cleanup_dir = os.path.dirname(pdf_path)
    else:
        fd, pdf_path = tempfile.mkstemp(suffix=".pdf")
        os.close(fd)
        with open(pdf_path, "wb") as f:
            f.write(pdf_bytes or b"")
    try:
        _print_pdf(printer, pdf_path)
    finally:
        try:
            if cleanup_dir:
                import shutil
                shutil.rmtree(cleanup_dir, ignore_errors=True)
            else:
                os.remove(pdf_path)
        except OSError:
            pass


class Handler(BaseHTTPRequestHandler):
    def _send(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
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
            html = data.get("html")
            b64 = data.get("pdf_base64")
            if not printer or (html is None and not b64):
                return self._send(400, {"error": "printer & (html|pdf_base64) requis"})
            print_document(printer, html=html,
                           pdf_bytes=base64.b64decode(b64) if (b64 and html is None) else None)
            self._send(200, {"printed": True})
        except Exception as e:                   # pragma: no cover
            print("Impression échouée:", e)
            self._send(500, {"error": str(e)})

    def log_message(self, *args):
        pass


if __name__ == "__main__":                       # pragma: no cover
    print(f"BrainStore print helper → http://0.0.0.0:{PORT}")
    print(f"  Navigateur (rendu): {_find_browser() or 'INTROUVABLE'}")
    print(f"  SumatraPDF        : {SUMATRA} {'(OK)' if os.path.exists(SUMATRA) else '(MANQUANT)'}")
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
