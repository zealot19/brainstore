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


def record_shift_billetage(session, *, items, user):
    """Billetage de fin de poste par le guichetier ASSIGNÉ à la session.

    État requis : session **ouverte** (pas encore clôturée) dont l'**heure de fin
    prévue est dépassée**. Le gestionnaire valide/clôture ensuite (il peut reprendre
    ce comptage). Enregistre un comptage CLOSING (compté par le guichetier).
    Les administrateurs ne sont pas soumis aux contrôles d'agent/horaire.
    """
    from django.utils import timezone
    from apps.treasury.models import CashSession, CashCount
    is_admin = getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False)
    if session.status != CashSession.Status.OPEN:
        raise ApplicationError(_("Le billetage se fait sur une session ouverte non encore clôturée."))
    if not is_admin:
        if session.assigned_to_id != getattr(user, "id", None):
            raise ApplicationError(_("Seul le guichetier assigné à cette session peut en faire le billetage."))
        if not session.scheduled_end or session.scheduled_end > timezone.now():
            raise ApplicationError(_("Le billetage n'est possible qu'une fois l'heure de fin prévue dépassée."))
    return record_count(session, kind=CashCount.Kind.CLOSING, items=items, user=user)
