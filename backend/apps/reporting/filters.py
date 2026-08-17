from django.utils.dateparse import parse_date


def parse_filters(request):
    q = getattr(request, "query_params", None) or request.GET
    def d(k):
        v = q.get(k)
        return parse_date(v) if v else None
    return {
        "date_from": d("date_from"), "date_to": d("date_to"),
        "agency": q.get("agency") or None, "register": q.get("register") or None,
        "agent": q.get("agent") or None, "vehicle": q.get("vehicle") or None,
        "year": int(q["year"]) if q.get("year") else None,
    }


def period_label(f):
    if f.get("date_from") or f.get("date_to"):
        a = f["date_from"].strftime("%d/%m/%Y") if f.get("date_from") else "…"
        b = f["date_to"].strftime("%d/%m/%Y") if f.get("date_to") else "…"
        return f"Période : {a} → {b}"
    if f.get("year"):
        return f"Année : {f['year']}"
    return ""
