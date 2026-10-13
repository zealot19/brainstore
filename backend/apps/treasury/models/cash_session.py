from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CashSession(BaseModel):
    """Daily opening/closing of a cash register."""

    class Status(models.TextChoices):
        DRAFT     = "draft",     _("Planifiée")
        OPEN      = "open",      _("Open")
        SUSPENDED = "suspended", _("Suspendue")
        STOPPED   = "stopped",   _("Arrêtée")
        CLOSED    = "closed",    _("Closed")

    class EcartReason(models.TextChoices):
        RENDU        = "rendu",        _("Erreur de rendu de monnaie")
        ENCAISSEMENT = "encaissement", _("Erreur d'encaissement")
        DEPENSE      = "depense",      _("Dépense oubliée")
        COMPTAGE     = "comptage",     _("Erreur de comptage")
        PERTE        = "perte",        _("Perte / vol")
        AUTRE        = "autre",        _("Autre")

    company        = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                        on_delete=models.CASCADE, related_name="cash_sessions")
    cash_register  = models.ForeignKey("treasury.CashRegister", verbose_name=_("cash register"),
                                        on_delete=models.PROTECT, related_name="sessions")
    name           = models.CharField(_("intitulé de la session"), max_length=150, blank=True)
    assigned_to    = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("guichetier assigné"),
                                        on_delete=models.PROTECT, null=True, blank=True,
                                        related_name="assigned_sessions")
    scheduled_start = models.DateTimeField(_("début prévu"), null=True, blank=True)
    scheduled_end   = models.DateTimeField(_("fin prévue"), null=True, blank=True)
    opened_by      = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("opened by"),
                                        on_delete=models.PROTECT, null=True, blank=True,
                                        related_name="opened_sessions")
    closed_by      = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("closed by"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="closed_sessions")
    stopped_at     = models.DateTimeField(_("arrêtée le"), null=True, blank=True)
    stopped_by     = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("arrêtée par"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")

    opening_balance  = models.DecimalField(_("opening balance"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)
    closing_balance  = models.DecimalField(_("closing balance"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)
    expected_closing = models.DecimalField(_("expected closing"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)
    difference       = models.DecimalField(_("difference"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)

    opened_at = models.DateTimeField(_("opened at"), default=timezone.now)
    closed_at = models.DateTimeField(_("closed at"), null=True, blank=True)
    status    = models.CharField(_("status"), max_length=10, choices=Status.choices,
                                  default=Status.OPEN)
    justification_reason = models.CharField(_("motif d'écart"), max_length=20,
                                            choices=EcartReason.choices, blank=True)
    justification_note   = models.CharField(_("précision sur l'écart"), max_length=255, blank=True)
    notes     = models.TextField(_("notes"), blank=True)

    # Validation de la clôture : la clôture engage l'écriture (transfert + comptabilité).
    # Un admin peut la DÉVALIDER (extourne/annulation) puis la REVALIDER, ou rouvrir la
    # session pour tout réajuster. closing_destination mémorise la caisse de balayage d'un
    # guichet pour pouvoir ré-appliquer le transfert à la revalidation.
    closure_validated  = models.BooleanField(_("clôture validée"), default=False)
    closing_destination = models.ForeignKey("treasury.CashRegister", verbose_name=_("caisse de balayage"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    validated_at = models.DateTimeField(_("validée le"), null=True, blank=True)
    validated_by = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("validée par"),
                                      on_delete=models.SET_NULL, null=True, blank=True, related_name="+")

    @property
    def ecart_status(self):
        if self.difference is None:
            return None
        if self.difference > 0:
            return "surplus"
        if self.difference < 0:
            return "shortage"
        return "balanced"

    class Meta(BaseModel.Meta):
        verbose_name = _("cash session")
        verbose_name_plural = _("cash sessions")
        ordering = ["-opened_at"]

    def __str__(self):
        return (f"{self.cash_register.name} — "
                f"{self.opened_at:%Y-%m-%d} [{self.get_status_display()}]")
