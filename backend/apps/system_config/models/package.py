from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Package(BaseModel):
    """Offre commerciale souscriptible par une institution."""

    class Tier(models.TextChoices):
        STARTER      = "starter",      _("Starter")
        PROFESSIONAL = "professional",  _("Professional")
        ENTERPRISE   = "enterprise",    _("Enterprise")
        CUSTOM       = "custom",        _("Sur mesure")

    name        = models.CharField(_("nom"), max_length=100, unique=True)
    tier        = models.CharField(_("niveau"), max_length=20, choices=Tier.choices)
    description = models.TextField(_("description"), blank=True)

    # ── Limites ───────────────────────────────────────────────────────────
    max_users    = models.PositiveIntegerField(_("max utilisateurs"), default=5)
    max_agencies = models.PositiveIntegerField(_("max agences"), default=1)
    max_storage_gb = models.PositiveIntegerField(_("stockage max (Go)"), default=5)

    # ── Tarification ──────────────────────────────────────────────────────
    price_monthly = models.DecimalField(_("prix mensuel"), max_digits=12, decimal_places=2, default=0)
    price_yearly  = models.DecimalField(_("prix annuel"),  max_digits=12, decimal_places=2, default=0)

    # ── Fonctionnalités ───────────────────────────────────────────────────
    has_api_access   = models.BooleanField(_("accès API"), default=False)
    has_multi_agency = models.BooleanField(_("multi-agences"), default=False)
    has_advanced_reports = models.BooleanField(_("rapports avancés"), default=False)
    has_sso          = models.BooleanField(_("SSO"), default=False)

    sort_order = models.PositiveSmallIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("package")
        verbose_name_plural = _("packages")
        ordering            = ["sort_order"]

    def __str__(self):
        return self.name
