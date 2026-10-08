from apps.core.models import AuditLog


def log_action(
    *,
    user,
    action: str,
    module: str,
    target_type: str = "",
    target_id=None,
    description: str = "",
    device_id: str = "",
    ip_address=None,
    company=None,
    changes: dict | None = None,
) -> None:
    """
    Enregistre une action dans le journal d'audit global.
    Silencieux en cas d'erreur pour ne jamais bloquer le flux métier.
    """
    try:
        AuditLog.objects.create(
            user=user,
            company=company,
            module=module,
            action=action,
            target_type=target_type,
            target_id=str(target_id) if target_id else "",
            description=description,
            changes=changes or {},
            device_id=device_id or "",
            ip_address=ip_address,
        )
    except Exception:
        pass


def audit_changes(before: dict, after: dict, fields: list[str] | None = None) -> dict:
    """Diff {champ: {"old": str, "new": str}} des champs modifiés (valeurs stringifiées
    pour la sérialisation JSON). `{}` si aucun changement. `fields` restreint le périmètre ;
    sinon on prend l'union des clés de before et after."""
    keys = fields if fields is not None else list({**before, **after}.keys())
    out: dict = {}
    for f in keys:
        old = before.get(f)
        new = after.get(f)
        if old != new:
            out[f] = {"old": "" if old is None else str(old),
                      "new": "" if new is None else str(new)}
    return out
