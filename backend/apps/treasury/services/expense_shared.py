from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def resolve_disbursement_session(company_id, user, cash_session=None):
    """Caisse pour un décaissement : session fournie ou session ouverte de l'utilisateur ;
    garde d'agence (la caisse doit être de l'agence de l'utilisateur, sauf admins).

    Partagé par le décaissement des dépenses voyage ET générales (DRY).
    """
    from apps.treasury.selectors.selectors import get_open_session_for_user
    from apps.treasury.scoping import register_agency_scope
    session = cash_session or get_open_session_for_user(company_id, user)
    if not session:
        raise ApplicationError(_("Choisissez une caisse (session ouverte) pour décaisser."))
    scoped, agency_id = register_agency_scope(user)
    if scoped and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez décaisser que depuis une caisse de votre agence."))
    return session
