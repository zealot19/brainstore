from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CashRegister(BaseModel):
    """Physical cash register, typically located at a terminal."""

    class Kind(models.TextChoices):
        PRINCIPALE = "principale", _("Caisse principale")
        GUICHET    = "guichet",    _("Guichet")

    class Category(models.TextChoices):
        RECETTE = "recette", _("Recette")
        DEPENSE = "depense", _("Dépense")
        AGENCE  = "agence",  _("Agence")

    company   = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                   on_delete=models.CASCADE, related_name="cash_registers")
    name      = models.CharField(_("name"), max_length=150)
    kind      = models.CharField(_("type de caisse"), max_length=12, choices=Kind.choices,
                                 null=True, blank=True)
    category  = models.CharField(_("catégorie"), max_length=10, choices=Category.choices, blank=True)
    allow_negative_balance = models.BooleanField(_("autoriser le solde négatif"), default=False)
    terminal  = models.ForeignKey("transport_config.Terminal", verbose_name=_("terminal"),
                                   on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name="cash_registers")
    responsible = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("responsible"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="managed_registers")
    # Gestionnaires autorisés (attribués par l'admin) : plusieurs par caisse.
    managers = models.ManyToManyField(settings.AUTH_USER_MODEL, verbose_name=_("gestionnaires"),
                                      related_name="managed_cash_registers", blank=True)
    current_balance = models.DecimalField(_("current balance"), max_digits=12, decimal_places=2,
                                           default=0)
    account = models.ForeignKey("accounting.Account", verbose_name=_("compte comptable"), null=True, blank=True,
                                on_delete=models.SET_NULL, related_name="+")
    journal = models.ForeignKey("accounting.Journal", verbose_name=_("journal"), null=True, blank=True,
                                on_delete=models.SET_NULL, related_name="+")
    agency = models.ForeignKey("system_config.Agency", verbose_name=_("agence"), null=True, blank=True,
                               on_delete=models.SET_NULL, related_name="cash_registers")
    is_active = models.BooleanField(_("active"), default=True)
    notes     = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("cash register")
        verbose_name_plural = _("cash registers")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.company})"
