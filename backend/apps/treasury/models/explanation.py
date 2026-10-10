from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class SessionExplanationRequest(BaseModel):
    """M30 — demande d'explication sur l'écart d'une session de caisse.

    Chef d'agence émet → caissier assigné répond → chef décide (justifié / non justifié).
    Couche workflow : n'affecte ni le solde ni l'écart (constat historisé)."""

    class Status(models.TextChoices):
        PENDING_RESPONSE = "pending_response", _("En attente de réponse")
        RESPONDED        = "responded",        _("Répondu")
        DECIDED          = "decided",          _("Décidé")

    class Decision(models.TextChoices):
        JUSTIFIED     = "justified",     _("Justifié")
        NOT_JUSTIFIED = "not_justified", _("Non justifié")

    company      = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                     on_delete=models.CASCADE, related_name="explanation_requests")
    cash_session = models.ForeignKey("treasury.CashSession", verbose_name=_("session"),
                                     on_delete=models.CASCADE, related_name="explanation_requests")
    status       = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                    default=Status.PENDING_RESPONSE)
    # Demande
    request_note = models.CharField(_("demande"), max_length=500)
    requested_by = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("demandé par"),
                                     on_delete=models.SET_NULL, null=True, related_name="+")
    requested_at = models.DateTimeField(_("demandé le"), default=timezone.now)
    # Réponse
    response_note = models.CharField(_("réponse"), max_length=500, blank=True)
    responded_by  = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("répondu par"),
                                      on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    responded_at  = models.DateTimeField(_("répondu le"), null=True, blank=True)
    # Décision
    decision      = models.CharField(_("décision"), max_length=15, choices=Decision.choices, blank=True)
    decision_note = models.CharField(_("note de décision"), max_length=500, blank=True)
    decided_by    = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("décidé par"),
                                      on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    decided_at    = models.DateTimeField(_("décidé le"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("demande d'explication")
        verbose_name_plural = _("demandes d'explication")
        ordering = ["-created_at"]

    def __str__(self):
        return f"Explication {self.cash_session_id} · {self.get_status_display()}"
