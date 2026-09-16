"""Encode un fichier média (logo, image) en data URI base64.

Utilisé par les rendus de documents côté serveur (billets, reçus, bordereaux).
WeasyPrint/rendu ne peut pas toujours récupérer une URL absolue (média protégé
ou hôte injoignable depuis le serveur) : embarquer l'image en `data:` évite
tout téléchargement et fonctionne aussi bien en local qu'en production.
"""
import base64
import mimetypes


def file_to_data_uri(filefield) -> str:
    """Retourne `data:<mime>;base64,<...>` pour un FieldFile, ou "" si absent/illisible."""
    if not filefield:
        return ""
    try:
        name = getattr(filefield, "name", "") or ""
        mime = mimetypes.guess_type(name)[0] or "image/png"
        filefield.open("rb")
        try:
            raw = filefield.read()
        finally:
            filefield.close()
        return f"data:{mime};base64," + base64.b64encode(raw).decode("ascii")
    except Exception:
        return ""
