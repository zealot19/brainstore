"""Registre (défini en code) des Packages = groupes d'applications au-dessus des modules.
Un package regroupe des modules (cf. module_map / entitlements). L'accès effectif
reste géré au niveau module par EntitlementMiddleware ; le package pilote l'octroi
par société (grant) et la navigation (launcher + filtrage du menu)."""

PACKAGES = [
    {"code": "administration", "label": "Administration", "icon": "settings",
     "modules": ["administration"], "always_on": True,  "grant_field": None},
    {"code": "transport", "label": "Transport", "icon": "bus",
     "modules": ["fleet", "treasury", "voyage", "colis", "bagages", "reporting"],
     "always_on": False, "grant_field": "pkg_transport"},
    {"code": "accounting", "label": "Comptabilité", "icon": "calculator",
     "modules": ["accounting"], "always_on": False, "grant_field": "pkg_accounting"},
]

_BY_CODE = {p["code"]: p for p in PACKAGES}


def all_package_codes():
    return [p["code"] for p in PACKAGES]


def modules_for_packages(codes):
    out = set()
    for code in codes:
        p = _BY_CODE.get(code)
        if p:
            out.update(p["modules"])
    return out


def package_for_module(module_code):
    for p in PACKAGES:
        if module_code in p["modules"]:
            return p["code"]
    return None


def grant_field_for(code):
    p = _BY_CODE.get(code)
    return p["grant_field"] if p else None
