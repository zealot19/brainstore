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
        status=Transaction.Status.PENDING,  # M26 : recette manuelle en attente
        created_by=user,
    )


def record_voyage_income(company, *, amount, payment_mode, description, vehicle=None,
                         transaction_date=None, user, cash_session=None):
    """Recette voyage manuelle (catégorie TICKET_SALES) encaissée dans une caisse.

    Comme « autre recette » mais catégorisée voyage, avec un véhicule optionnel et une date
    d'encaissement (l'argent peut entrer dans n'importe quelle caisse ouverte : guichet inclus).
    """
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    session = resolve_disbursement_session(company.id, user, cash_session)
    txn = create_transaction(
        company=company,
        transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.TICKET_SALES,
        account_type=Transaction.AccountType.CASH,
        amount=amount, payment_mode=payment_mode,
        description=description, cash_session=session,
        status=Transaction.Status.PENDING,  # M26 : recette voyage manuelle en attente
        created_by=user,
    )
    updates = []
    if vehicle is not None:
        txn.vehicle = vehicle
        updates.append("vehicle")
    if transaction_date is not None:
        txn.transaction_date = transaction_date
        updates.append("transaction_date")
    if updates:
        txn.save(update_fields=updates)
    return txn
