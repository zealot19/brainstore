from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CoreConfig(AppConfig):
    name = "apps.core"
    verbose_name = _("Fondation")
    default_auto_field = "django.db.models.UUIDField"

    def ready(self):
        import apps.core.signals  # noqa: F401
