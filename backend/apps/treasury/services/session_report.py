"""Rapport de session de caisse : résumé financier, ventilation des paiements
et billetage de fermeture. Renvoie un dict prêt à sérialiser (rendu imprimable
côté frontend, sans dépendance PDF serveur)."""
from django.db.models import Sum, Count

from apps.treasury.models import Transaction, CashCount


def _uname(u):
    return (u.get_full_name() or u.username) if u else None


def build_session_report(session):
    txns = session.transactions.filter(is_deleted=False)
    income = txns.filter(transaction_type=Transaction.Type.INCOME)
    expense = txns.filter(transaction_type=Transaction.Type.EXPENSE)
    income_total = income.aggregate(t=Sum("amount"))["t"] or 0
    expense_total = expense.aggregate(t=Sum("amount"))["t"] or 0

    # Ventilation des encaissements par mode de paiement.
    payments = []
    for row in (income.values("payment_mode")
                .annotate(total=Sum("amount"), count=Count("id")).order_by("-total")):
        label = dict(Transaction.PaymentMode.choices).get(row["payment_mode"], row["payment_mode"])
        payments.append({"mode": row["payment_mode"], "mode_label": str(label),
                         "count": row["count"], "total": row["total"]})

    # Billetage de fermeture (dernier comptage CLOSING).
    closing = (session.counts.filter(kind=CashCount.Kind.CLOSING, is_deleted=False)
               .prefetch_related("items__denomination").order_by("-created_at").first())
    billetage = []
    if closing:
        for it in closing.items.all():
            billetage.append({"value": it.unit_value, "quantity": it.quantity, "subtotal": it.subtotal,
                              "kind": it.denomination.kind if it.denomination_id else ""})

    reg = session.cash_register
    return {
        "general": {
            "register_name": reg.name,
            "agency_name": reg.agency.name if reg.agency_id else None,
            "session_name": session.name,
            "guichetier": _uname(session.opened_by) or _uname(session.assigned_to),
            "scheduled_start": session.scheduled_start,
            "scheduled_end": session.scheduled_end,
            "opened_at": session.opened_at,
            "closed_at": session.closed_at,
            "status": session.status,
            "status_display": session.get_status_display(),
        },
        "summary": {
            "opening_balance": session.opening_balance or 0,
            "income_total": income_total,
            "expense_total": expense_total,
            "expected_closing": session.expected_closing,
            "closing_balance": session.closing_balance,
            "difference": session.difference,
            "ecart_status": session.ecart_status,
        },
        "justification": {
            "reason": session.justification_reason,
            "reason_label": session.get_justification_reason_display() if session.justification_reason else None,
            "note": session.justification_note,
        },
        "payments": payments,
        "billetage": billetage,
    }
