"""Helpers de filtrage réutilisables pour les vues liste (plage de dates)."""
from datetime import datetime


def resolve_date_field(mapping, key, default):
    """Retourne le nom de champ correspondant à `key` (ou au défaut si inconnu)."""
    return mapping.get(key or default, mapping[default])


def _parse(value):
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except (TypeError, ValueError):
        return None


def date_range_kwargs(field, date_from, date_to):
    """Construit les kwargs de filtre inclusif sur la date (ignore les dates invalides)."""
    out = {}
    start, end = _parse(date_from), _parse(date_to)
    if start:
        out[f"{field}__date__gte"] = start
    if end:
        out[f"{field}__date__lte"] = end
    return out


def apply_date_range(qs, field, date_from, date_to):
    kwargs = date_range_kwargs(field, date_from, date_to)
    return qs.filter(**kwargs) if kwargs else qs
