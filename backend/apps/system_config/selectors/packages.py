"""Packages accessibles à l'utilisateur = accordés à la société ∩ où il a ≥1 permission."""
from apps.core.packages import PACKAGES
from apps.system_config.selectors.entitlements import granted_packages

# Préfixes de permissions RBAC par code de package.
# Utilisé uniquement comme filtre UX — ne remplace pas EntitlementMiddleware.
_PKG_PERM_PREFIXES = {
    "transport": ("fleet.", "treasury.", "voyage.", "ticketing.", "transport.", "reporting."),
    "accounting": ("accounting.",),
}


def _user_can_enter(pkg, *, is_admin: bool, codes: set) -> bool:
    """Détermine si l'utilisateur peut accéder à un package (filtre UX uniquement).

    `is_admin` et `codes` sont calculés UNE seule fois par requête dans
    `accessible_packages` — aucun appel DB ici.
    """
    # Superuser ou admin institution : accès complet à tous les packages accordés.
    if is_admin:
        return True
    # Package administration : toujours accessible à tout utilisateur authentifié.
    if pkg["code"] == "administration":
        return True
    # Wildcard (superuser via get_user_permissions) : accès complet.
    if "*" in codes:
        return True
    # Sinon : au moins une permission RBAC dont le code commence par un préfixe du package.
    prefixes = _PKG_PERM_PREFIXES.get(pkg["code"], ())
    if not prefixes:
        return False
    return any(code.startswith(p) for code in codes for p in prefixes)


def accessible_packages(user) -> list:
    """Retourne les packages accordés à la société de l'utilisateur ET accessibles par lui."""
    company = getattr(user, "company", None)
    granted = granted_packages(company)

    # Admin (superuser/institution) bypass : aucun appel RBAC nécessaire.
    is_admin = bool(getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False))
    # Permissions récupérées AU PLUS UNE FOIS par requête (jamais dans la boucle).
    codes = set()
    if not is_admin:
        from apps.admin_rbac.selectors.user_role_selectors import get_user_permissions
        # company_id résolu depuis la société de l'utilisateur : les UserRole/UserProfile
        # sont scopés par société (cf. HasModulePermission dans apps.core.permissions).
        company_id = getattr(company, "id", None)
        codes = get_user_permissions(user, company_id)

    out = []
    for pkg in PACKAGES:
        if pkg["code"] in granted and _user_can_enter(pkg, is_admin=is_admin, codes=codes):
            out.append({
                "code": pkg["code"],
                "label": pkg["label"],
                "icon": pkg["icon"],
                "modules": pkg["modules"],
            })
    return out
