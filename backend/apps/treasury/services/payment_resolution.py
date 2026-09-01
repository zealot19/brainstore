def resolve_payment(company, code):
    """Le PaymentMethod (company, code) ou None si introuvable/vide."""
    if not code:
        return None
    from apps.treasury.models import PaymentMethod
    return PaymentMethod.objects.filter(company=company, code=code, is_deleted=False).first()


def resolve_mode(pm, raw, normalize):
    """(mode trésorerie, is_cash) depuis le PaymentMethod, sinon fallback normalize(raw)."""
    if pm is not None:
        return pm.mode, pm.mode == "cash"
    return normalize(raw)
