from decimal import Decimal
from django.db.models import Sum
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def principale_available_cash(session):
    """Trésorerie réelle « maintenant » d'une session de caisse.

    current_balance n'est pas mis à jour par les ventes/dépenses pendant une session
    ouverte : on recalcule à partir du fond + grand livre de la session + transferts
    de la caisse depuis l'ouverture.
    """
    from apps.treasury.models import Transaction, Transfer
    reg_id = session.cash_register_id
    income = (session.transactions
              .filter(transaction_type=Transaction.Type.INCOME,
                      status=Transaction.Status.VALIDATED, is_deleted=False)
              .aggregate(t=Sum("amount"))["t"] or Decimal(0))
    expense = (session.transactions
               .filter(transaction_type=Transaction.Type.EXPENSE,
                       status=Transaction.Status.VALIDATED, is_deleted=False)
               .aggregate(t=Sum("amount"))["t"] or Decimal(0))
    transfers_in = (Transfer.objects
                    .filter(to_cash_register_id=reg_id, is_deleted=False, created_at__gte=session.opened_at)
                    .aggregate(t=Sum("amount"))["t"] or Decimal(0))
    transfers_out = (Transfer.objects
                     .filter(from_cash_register_id=reg_id, is_deleted=False, created_at__gte=session.opened_at)
                     .aggregate(t=Sum("amount"))["t"] or Decimal(0))
    return (session.opening_balance or Decimal(0)) + income - expense + transfers_in - transfers_out


def resolve_disbursement_session(company_id, user, cash_session=None, *,
                                 require_principale=False, amount=None):
    """Caisse pour un décaissement : session fournie ou session ouverte de l'utilisateur ;
    garde d'agence (la caisse doit être de l'agence de l'utilisateur, sauf admins).

    Partagé par le décaissement des dépenses voyage ET générales (DRY).
    `require_principale` (dépenses uniquement) : la caisse doit être une caisse principale et
    disposer d'un solde suffisant, sinon on invite à transférer depuis un guichet.
    """
    from apps.treasury.selectors.selectors import get_open_session_for_user
    from apps.treasury.scoping import register_agency_scope
    from apps.treasury.models import CashRegister
    session = cash_session or get_open_session_for_user(company_id, user)
    if not session:
        raise ApplicationError(_("Choisissez une caisse (session ouverte) pour décaisser."))
    scoped, agency_id = register_agency_scope(user)
    if scoped and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez décaisser que depuis une caisse de votre agence."))
    if require_principale and session.cash_register.kind != CashRegister.Kind.PRINCIPALE:
        raise ApplicationError(_("Les dépenses se décaissent depuis une caisse principale. "
                                 "Ouvrez ou choisissez une caisse principale."))
    if require_principale and amount is not None and not session.cash_register.allow_negative_balance:
        avail = principale_available_cash(session)
        if Decimal(str(amount)) > avail:
            raise ApplicationError(_("Solde insuffisant dans la caisse principale (%(b)s). "
                                     "Transférez d'abord des espèces d'un guichet vers la caisse "
                                     "principale, puis validez la dépense.") % {"b": avail})
    return session
