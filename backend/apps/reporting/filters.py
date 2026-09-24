import datetime
from decimal import Decimal, InvalidOperation
from django.utils import timezone
from django.utils.dateparse import parse_date


def parse_filters(request):
    """Analyse générique de tous les filtres connus (FILTER_DEFS), typés.

    Renvoie un dict avec TOUTES les clés connues (None si absente), de sorte que
    les rapports puissent lire `f["clé"]` ou `f.get("clé")` sans risque de KeyError.
    """
    from apps.reporting.filter_defs import FILTER_DEFS
    q = getattr(request, "query_params", None) or request.GET
    out = {}
    for key, spec in FILTER_DEFS.items():
        raw = q.get(key)
        if raw is None or raw == "":
            out[key] = None
        elif spec["type"] in ("date", "datetime"):
            out[key] = parse_date(raw)
        elif spec["type"] == "number":
            out[key] = _to_number(key, raw)
        else:
            out[key] = raw
    _apply_periode(out)
    return out


def _to_number(key, raw):
    try:
        return int(raw) if key == "year" else Decimal(str(raw))
    except (InvalidOperation, ValueError, TypeError):
        return None


def _apply_periode(out):
    """Un preset `periode` (sans dates explicites) fixe date_from/date_to."""
    p = out.get("periode")
    if not p or out.get("date_from") or out.get("date_to"):
        return
    today = timezone.localdate()
    if p == "today":
        out["date_from"] = out["date_to"] = today
    elif p == "week":
        out["date_from"] = today - datetime.timedelta(days=today.weekday())
        out["date_to"] = today
    elif p == "month":
        out["date_from"] = today.replace(day=1)
        out["date_to"] = today
    elif p == "year":
        out["date_from"] = today.replace(month=1, day=1)
        out["date_to"] = today


def period_label(f):
    if f.get("date_from") or f.get("date_to"):
        a = f["date_from"].strftime("%d/%m/%Y") if f.get("date_from") else "…"
        b = f["date_to"].strftime("%d/%m/%Y") if f.get("date_to") else "…"
        return f"Période : {a} → {b}"
    if f.get("year"):
        return f"Année : {f['year']}"
    return ""
