"""Billetage : comptage des espèces par coupure.

Le serveur calcule toujours les totaux (jamais le client) et fige la valeur
unitaire de chaque coupure dans le comptage, afin que l'historique reste
cohérent même si la configuration des coupures change plus tard.
"""
from decimal import Decimal

from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError


def compute_count_total(company, items):
    """Valide les lignes de billetage et renvoie (total, [(denomination, qty, unit_value, subtotal)]).

    items : [{"denomination_id": UUID, "quantity": int}]
    """
    from apps.treasury.models import CurrencyDenomination
    resolved = []
    total = Decimal("0")
    for row in items or []:
        qty = int(row.get("quantity") or 0)
        if qty < 0:
            raise ApplicationError(_("La quantité d'une coupure ne peut pas être négative."))
        if qty == 0:
            continue
        den = CurrencyDenomination.objects.filter(
            id=row.get("denomination_id"), company=company, is_deleted=False).first()
        if not den:
            raise ApplicationError(_("Coupure introuvable pour cette institution."))
        subtotal = (den.value * qty).quantize(Decimal("1."))
        total += subtotal
        resolved.append((den, qty, den.value, subtotal))
    return total, resolved


def record_count(session, *, kind, items, user):
    """Crée un CashCount + ses lignes pour une session. Renvoie (count, total)."""
    from apps.treasury.models import CashCount, CashCountItem
    total, resolved = compute_count_total(session.company, items)
    count = CashCount.objects.create(
        cash_session=session, kind=kind, total_amount=total,
        counted_by=user, created_by=user)
    CashCountItem.objects.bulk_create([
        CashCountItem(cash_count=count, denomination=den, quantity=qty,
                      unit_value=unit_value, subtotal=subtotal, created_by=user)
        for (den, qty, unit_value, subtotal) in resolved
    ])
    return count, total
