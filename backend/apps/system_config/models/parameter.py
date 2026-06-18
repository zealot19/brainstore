from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Parameter(BaseModel):
    """
    Paramètre système clé/valeur configurable à chaud.
    Exemple : get_param("hr.probation_months", default=3)
    Portée : global / par institution.
    """

    class DataType(models.TextChoices):
        STRING  = "string",  _("Texte")
        INTEGER = "integer", _("Entier")
        DECIMAL = "decimal", _("Décimal")
        BOOLEAN = "boolean", _("Booléen")
        JSON    = "json",    _("JSON")
        DATE    = "date",    _("Date")

    class Scope(models.TextChoices):
        GLOBAL  = "global",  _("Global")
        COMPANY = "company", _("Institution")
        MODULE  = "module",  _("Module")

    key         = models.CharField(_("clé"), max_length=150)
    value       = models.TextField(_("valeur"))
    data_type   = models.CharField(_("type"), max_length=20,
                                   choices=DataType.choices, default=DataType.STRING)
    scope       = models.CharField(_("portée"), max_length=20,
                                   choices=Scope.choices, default=Scope.GLOBAL)
    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, null=True, blank=True, related_name="parameters",
    )
    module      = models.CharField(_("module"), max_length=50, blank=True)
    description = models.TextField(_("description"), blank=True)
    is_readonly = models.BooleanField(_("lecture seule"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("paramètre")
        verbose_name_plural = _("paramètres")
        unique_together     = [("key", "company")]

    def __str__(self):
        return f"{self.key} = {self.value}"

    def get_typed_value(self):
        """Retourne la valeur dans son type Python natif."""
        import json
        if self.data_type == self.DataType.INTEGER:
            return int(self.value)
        if self.data_type == self.DataType.DECIMAL:
            from decimal import Decimal
            return Decimal(self.value)
        if self.data_type == self.DataType.BOOLEAN:
            return self.value.lower() in ("true", "1", "yes")
        if self.data_type == self.DataType.JSON:
            return json.loads(self.value)
        return self.value


class FeatureFlag(BaseModel):
    """Active/désactive un module ou une fonctionnalité par institution."""
    key         = models.CharField(_("clé"), max_length=100)
    company     = models.ForeignKey(
        "system_config.Company", verbose_name=_("institution"),
        on_delete=models.CASCADE, null=True, blank=True, related_name="feature_flags",
    )
    is_enabled  = models.BooleanField(_("activé"), default=False)
    description = models.TextField(_("description"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("feature flag")
        verbose_name_plural = _("feature flags")
        unique_together     = [("key", "company")]

    def __str__(self):
        status = "✓" if self.is_enabled else "✗"
        return f"[{status}] {self.key}"
