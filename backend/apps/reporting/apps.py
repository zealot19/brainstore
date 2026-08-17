from django.apps import AppConfig


class ReportingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.reporting"

    def ready(self):
        from apps.reporting import reports  # noqa: F401  (registers report modules)
