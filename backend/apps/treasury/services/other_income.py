from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_other_income(company, *, amount, payment_mode, description, user,
                        cash_session=None):
    """Encaissement manuel « autre recette » (OTHER_INCOME) dans une caisse.

    Résout la session via resolve_disbursement_session (session ouverte de
    l'utilisateur + garde d'agence), puis crée un mouvement d'entrée espèces.
    """
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    session = resolve_disbursement_session(company.id, user, cash_session)
    return create_transaction(
        company=company,
        transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME,
        account_type=Transaction.AccountType.CASH,
        amount=amount, payment_mode=payment_mode,
        description=description, cash_session=session,
        created_by=user,
    )
