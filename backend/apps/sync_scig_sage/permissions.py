from rest_framework.permissions import BasePermission
from apps.system_config.models import FeatureFlag

FEATURE_KEY = "sync_scig_sage.enabled"


class IsScigSageEnabled(BasePermission):
    """
    Grants access only when:
      1. The user is authenticated.
      2. The user's company has FeatureFlag 'sync_scig_sage.enabled' = True.

    If the flag doesn't exist for the company, access is denied.
    To activate the module for a client, create/set:
        FeatureFlag(company=<company>, key="sync_scig_sage.enabled", is_enabled=True)
    """

    message = (
        "Le module Sync SCIG — Sage 100 n'est pas activé pour votre organisation. "
        "Contactez votre administrateur."
    )

    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        company = getattr(request.user, "company", None)
        if not company:
            return False
        flag = FeatureFlag.objects.filter(
            company=company, key=FEATURE_KEY
        ).first()
        return bool(flag and flag.is_enabled)
