"""Correspondance préfixe d'URL API -> code de module (pour l'entitlement).

Un chemin non listé renvoie None = non verrouillé (core : auth, system, users,
rbac, audit, etc.). L'ordre compte : les préfixes les plus spécifiques d'abord.
"""

_PREFIX_MODULE = [
    ("voyages/consignment/parcels", "colis"),
    ("voyages/consignment/baggage", "bagages"),
    ("voyages/consignment", "colis"),
    ("voyages/config", "voyage"),
    ("voyages/trips", "voyage"),
    ("voyages/pricing", "voyage"),
    ("voyages/booking", "voyage"),
    ("voyage/", "voyage"),
    ("transport/", "voyage"),
    ("fleet/", "fleet"),
    ("treasury/", "treasury"),
    ("accounting/", "accounting"),
    ("reporting/", "reporting"),
]
_MARK = "/api/v1/"


def module_for_path(path: str):
    i = path.find(_MARK)
    if i == -1:
        return None
    rest = path[i + len(_MARK):]
    for prefix, mod in _PREFIX_MODULE:
        if rest.startswith(prefix):
            return mod
    return None
