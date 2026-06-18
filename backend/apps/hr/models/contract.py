from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Contract(BaseModel):
    """Contrat de travail d'un employé."""

    class PaymentFrequency(models.TextChoices):
        MONTHLY   = "monthly",   _("Mensuel")
        BIWEEKLY  = "biweekly",  _("Bimensuel")
        WEEKLY    = "weekly",    _("Hebdomadaire")

    employee      = models.ForeignKey("hr.Employee",     verbose_name=_("employé"),
                                      on_delete=models.CASCADE, related_name="contracts")
    contract_type = models.ForeignKey("hr.ContractType", verbose_name=_("type de contrat"),
                                      on_delete=models.PROTECT, related_name="contracts")
    reference     = models.CharField(_("référence"), max_length=100, blank=True)

    start_date = models.DateField(_("date de début"))
    end_date   = models.DateField(_("date de fin"), null=True, blank=True)  # null = CDI

    # ── Rémunération ───────────────────────────────────────────────────────
    base_salary        = models.DecimalField(_("salaire de base"), max_digits=14, decimal_places=2)
    currency           = models.ForeignKey("core.Currency", verbose_name=_("devise"),
                                           on_delete=models.SET_NULL, null=True, blank=True)
    payment_frequency  = models.CharField(_("fréquence de paiement"), max_length=20,
                                          choices=PaymentFrequency.choices,
                                          default=PaymentFrequency.MONTHLY)

    # ── Avantages en nature ────────────────────────────────────────────────
    transport_allowance = models.DecimalField(_("prime transport"), max_digits=12, decimal_places=2, default=0)
    housing_allowance   = models.DecimalField(_("prime logement"),  max_digits=12, decimal_places=2, default=0)
    meal_allowance      = models.DecimalField(_("prime repas"),     max_digits=12, decimal_places=2, default=0)
    other_allowances    = models.DecimalField(_("autres primes"),   max_digits=12, decimal_places=2, default=0)

    is_current = models.BooleanField(_("contrat en cours"), default=True)
    notes      = models.TextField(_("observations"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("contrat")
        verbose_name_plural = _("contrats")
        ordering            = ["-start_date"]

    def __str__(self):
        return f"{self.employee} — {self.contract_type} ({self.start_date})"

    @property
    def gross_salary(self) -> float:
        return float(
            self.base_salary
            + self.transport_allowance
            + self.housing_allowance
            + self.meal_allowance
            + self.other_allowances
        )
