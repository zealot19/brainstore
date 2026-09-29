"""Cloisonnement par agence — un utilisateur ne voit que les données de son/ses agence(s).

Règle partagée (cf. voyages_booking._assert_agency) :
- un **admin institution** voit tout (aucun filtrage) → `user_agency_ids` renvoie None ;
- sinon, le périmètre = l'UNION des agences de l'utilisateur (M2M `agencies`) et de son
  `default_agency`. Un utilisateur sans agence (et non-admin) ne voit rien (défaut sûr).

Les vues passent `user_agency_ids(request.user)` aux sélecteurs, qui appliquent
`scope_by_agency(...)`. Les données de référence/config (routes, véhicules, tarifs,
utilisateurs, RBAC) restent au périmètre institution et ne sont pas filtrées ici.
"""
from django.db.models import Q


def user_agency_ids(user):
    """None = voir tout (admin institution) ; sinon set des UUID d'agences de l'utilisateur."""
    if user is None or getattr(user, "is_institution_admin", False):
        return None
    ids = set(user.agencies.values_list("id", flat=True))
    if getattr(user, "default_agency_id", None):
        ids.add(user.default_agency_id)
    return ids


def scope_by_agency(qs, ids, field="agency_id"):
    """Filtre un queryset sur un champ d'agence. `ids is None` → aucun filtrage (admin)."""
    if ids is None:
        return qs
    return qs.filter(**{f"{field}__in": ids})


def scope_by_agency_q(ids, *fields):
    """Q() « OR » sur plusieurs champs d'agence (ex. colis : origine OU destination).
    `ids is None` → Q() vide (admin, aucun filtrage)."""
    if ids is None:
        return Q()
    q = Q()
    for f in fields:
        q |= Q(**{f"{f}__in": ids})
    return q


def agency_allowed(user, agency_id) -> bool:
    """True si l'utilisateur peut agir pour cette agence (admin institution inclus)."""
    ids = user_agency_ids(user)
    if ids is None:
        return True
    return agency_id in ids
