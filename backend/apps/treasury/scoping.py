"""Restriction des caisses à l'agence de l'utilisateur.

Règle métier : un guichetier ne voit et n'ouvre de session que sur les caisses
de son agence par défaut. Les super admins et les admins d'institution ne sont
pas restreints (ils gèrent toutes les agences).
"""


def register_agency_scope(user):
    """Retourne (scoped, agency_id) pour l'utilisateur.

    - (False, None) : aucune restriction (super admin / admin d'institution).
    - (True, <uuid|None>) : restreindre à l'agence par défaut ; None = l'utilisateur
      n'a aucune agence attribuée (il ne doit alors voir aucune caisse).
    """
    if getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False):
        return (False, None)
    return (True, getattr(user, "default_agency_id", None))
