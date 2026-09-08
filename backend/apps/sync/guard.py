"""Read-only guard: on an agency node, master-owned (DOWN) config is read-only.

Blocks local writes to DOWN-registered config on agency instances, so config only
changes at the master and flows down. Exceptions:
- sync-apply writes (run under `suspend_capture()`) are allowed,
- `authentication.user` is allowed (login tracking / password changes are
  legitimately written locally even though the user record is master-owned).
"""
from django.conf import settings
from django.core.exceptions import PermissionDenied
from django.db.models.signals import pre_save, pre_delete

from apps.sync import registry
from apps.sync.capture import _suspended

_ALLOW_LOCAL = {"authentication.user"}


def _readonly_here(label: str) -> bool:
    if not getattr(settings, "SYNC_ENABLED", False):
        return False
    if getattr(settings, "NODE_ROLE", "master") != "agency":
        return False
    if _suspended():
        return False  # applying an incoming change
    if label in _ALLOW_LOCAL:
        return False
    spec = registry.spec_for(label)
    return bool(spec and spec.direction == registry.DOWN)


def _block(sender, instance, **kwargs):
    label = sender._meta.label_lower
    if _readonly_here(label):
        raise PermissionDenied(
            f"Configuration en lecture seule sur une instance agence : {label} "
            f"(à modifier sur le master)."
        )


def connect():
    pre_save.connect(_block, dispatch_uid="sync_readonly_save")
    pre_delete.connect(_block, dispatch_uid="sync_readonly_delete")
