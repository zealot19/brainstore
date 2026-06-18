from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class AdminRbacConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name  = "apps.admin_rbac"
    label = "admin_rbac"
    verbose_name = _("Administration & RBAC")
