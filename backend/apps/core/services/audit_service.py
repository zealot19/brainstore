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
            device_id=device_id or "",
            ip_address=ip_address,
        )
    except Exception:
        pass
