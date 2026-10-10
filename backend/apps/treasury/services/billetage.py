"""Billetage : comptage des espèces par coupure.

Le serveur calcule toujours les totaux (jamais le client) et fige la valeur
unitaire de chaque coupure dans le comptage, afin que l'historique reste
cohérent même si la configuration des coupures change plus tard.
"""
from decimal import Decimal

from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError


def compute_count_total(company, items):
    """Valide les lignes de billetage et sépare espèces / autres valeurs (M28).

    items : [
        {"denomination_id": UUID, "quantity": int}   # coupure (espèces)
      | {"value_type_id": UUID, "amount": Decimal}    # valeur (bon, monnaie électronique…)
    ]
    retour : {"cash_total", "other_total", "grand_total", "resolved"} où resolved =
      [{"kind": "cash"|"value", "denomination", "value_type", "quantity", "unit_value", "subtotal"}]
    """
    from apps.treasury.models import CurrencyDenomination, CashValueType
    resolved = []
    cash_total = Decimal("0")
    other_total = Decimal("0")
    for row in items or []:
        if row.get("denomination_id") and row.get("value_type_id"):
            raise ApplicationError(_("Une ligne ne peut pas être à la fois une coupure et une valeur."))
        if row.get("denomination_id"):
            qty = int(row.get("quantity") or 0)
            if qty < 0:
                raise ApplicationError(_("La quantité d'une coupure ne peut pas être négative."))
            if qty == 0:
                continue
            den = CurrencyDenomination.objects.filter(
                id=row["denomination_id"], company=company, is_deleted=False).first()
            if not den:
                raise ApplicationError(_("Coupure introuvable pour cette institution."))
            subtotal = (den.value * qty).quantize(Decimal("1."))
            cash_total += subtotal
            resolved.append({"kind": "cash", "denomination": den, "value_type": None,
                             "quantity": qty, "unit_value": den.value, "subtotal": subtotal})
        elif row.get("value_type_id"):
            amount = Decimal(str(row.get("amount") or "0"))
            if amount <= 0:
                raise ApplicationError(_("Le montant d'une valeur doit être supérieur à zéro."))
            vt = CashValueType.objects.filter(
                id=row["value_type_id"], company=company, is_active=True, is_deleted=False).first()
            if not vt:
                raise ApplicationError(_("Type de valeur introuvable ou inactif."))
            other_total += amount
            resolved.append({"kind": "value", "denomination": None, "value_type": vt,
                             "quantity": 1, "unit_value": amount, "subtotal": amount})
        else:
            raise ApplicationError(_("Ligne de comptage invalide (ni coupure ni valeur)."))
    return {"cash_total": cash_total, "other_total": other_total,
            "grand_total": cash_total + other_total, "resolved": resolved}


def record_count(session, *, kind, items, user):
    """Crée un CashCount + ses lignes pour une session. Renvoie (count, grand_total)."""
    from apps.treasury.models import CashCount, CashCountItem
    r = compute_count_total(session.company, items)
    count = CashCount.objects.create(
        cash_session=session, kind=kind,
        total_amount=r["grand_total"], cash_total=r["cash_total"], other_total=r["other_total"],
        counted_by=user, created_by=user)
    CashCountItem.objects.bulk_create([
        CashCountItem(cash_count=count, denomination=x["denomination"], value_type=x["value_type"],
                      quantity=x["quantity"], unit_value=x["unit_value"], subtotal=x["subtotal"],
                      created_by=user)
        for x in r["resolved"]
    ])
    return count, r["grand_total"]


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
