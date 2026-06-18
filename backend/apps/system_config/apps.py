from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SystemConfigConfig(AppConfig):
    name = "apps.system_config"
    verbose_name = _("Configuration système")
