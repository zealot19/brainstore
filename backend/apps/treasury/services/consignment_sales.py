from decimal import Decimal
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction, BankAccount
from apps.treasury.selectors.selectors import get_open_session_for_user
from apps.treasury.services.services import create_transaction
from apps.treasury.services.booking_sales import _normalize_payment


def _record_consignment_payment(company, *, amount, payment_method, user,
                                category, description, link_field, link_obj):
    """Crée le mouvement de trésorerie d'un encaissement colis/bagage.

    Même logique que record_booking_payment : idempotent, espèces = session de caisse
    ouverte obligatoire, non-espèces = compte bancaire unique (sinon on ignore).
    """
    amount = Decimal(str(amount or 0))
    if amount <= 0:
        return None
    if link_obj is not None and Transaction.objects.filter(
            **{link_field: link_obj}, is_deleted=False).exists():
        return None  # idempotent

    from apps.treasury.services.payment_resolution import resolve_payment, resolve_mode
    pm = resolve_payment(company, payment_method)
    if pm is not None and not pm.requires_payment:
        return None
    mode, is_cash = resolve_mode(pm, payment_method, _normalize_payment)
    common = dict(company=company, transaction_type=Transaction.Type.INCOME,
                  category=category, amount=amount, payment_mode=mode,
                  description=description, created_by=user)

    if is_cash:
        session = get_open_session_for_user(company.id, user)
        if not session:
            raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour encaisser au comptant."))
        txn = create_transaction(account_type=Transaction.AccountType.CASH, cash_session=session, **common)
    else:
        banks = list(BankAccount.objects.filter(company=company, is_deleted=False, is_active=True))
        if len(banks) != 1:
            return None
        txn = create_transaction(account_type=Transaction.AccountType.BANK, bank_account=banks[0], **common)

    if link_obj is not None:
        setattr(txn, link_field, link_obj)
        txn.save(update_fields=[link_field])
    return txn


def record_parcel_payment(company, *, parcel, amount, payment_method, user):
    """Mouvement de trésorerie pour l'enregistrement d'un colis (catégorie parcel_shipping)."""
    ref = getattr(parcel, "reference", "") or ""
    return _record_consignment_payment(
        company, amount=amount, payment_method=payment_method, user=user,
        category=Transaction.Category.PARCEL_SHIPPING,
        description=f"Colis {ref}".strip(),
        link_field="voyages_parcel", link_obj=parcel,
    )


def record_baggage_payment(company, *, baggage, amount, payment_method, user):
    """Mouvement de trésorerie pour l'enregistrement d'un bagage (catégorie baggage)."""
    ref = getattr(baggage, "tag_number", "") or ""
    return _record_consignment_payment(
        company, amount=amount, payment_method=payment_method, user=user,
        category=Transaction.Category.BAGGAGE,
        description=f"Bagage {ref}".strip(),
        link_field="voyages_baggage", link_obj=baggage,
    )
