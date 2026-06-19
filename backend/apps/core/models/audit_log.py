import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _


class AuditLog(models.Model):
    """
    Journal immuable de toutes les actions significatives de l'application.
    Hérite de models.Model (pas BaseModel) — les logs ne sont jamais modifiés ni supprimés.
    """

    class Module(models.TextChoices):
        SCIG      = "SCIG",      "Sync SCIG / Sage 100"
        FLEET     = "FLEET",     "Flotte"
        VOYAGE    = "VOYAGE",    "Voyages"
        TICKETING = "TICKETING", "Billetterie"
        PARCELS   = "PARCELS",  "Colis"
        TREASURY  = "TREASURY",  "Trésorerie"
        RBAC      = "RBAC",      "RBAC / Permissions"
        SYSTEM    = "SYSTEM",    "Configuration système"
        AUTH      = "AUTH",      "Authentification"
        USERS     = "USERS",     "Utilisateurs"

    class Action(models.TextChoices):
        CREATE   = "CREATE",   "Création"
        UPDATE   = "UPDATE",   "Modification"
        DELETE   = "DELETE",   "Suppression"
        VALIDATE = "VALIDATE", "Validation"
        RECHECK  = "RECHECK",  "Re-vérification"
        SCAN     = "SCAN",     "Scan"
        SUBMIT   = "SUBMIT",   "Soumission"
        SHIP     = "SHIP",     "Expédition"
        RECEIVE  = "RECEIVE",  "Réception"
        LOGIN    = "LOGIN",    "Connexion"
        LOGOUT   = "LOGOUT",   "Déconnexion"
        EXPORT   = "EXPORT",   "Export"
        SYNC     = "SYNC",     "Synchronisation"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    timestamp = models.DateTimeField(_("horodatage"), auto_now_add=True, db_index=True)

    user = models.ForeignKey(
        "authentication.User",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="audit_logs",
        verbose_name=_("utilisateur"),
    )
    company = models.ForeignKey(
        "system_config.Company",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="audit_logs",
        verbose_name=_("société"),
    )

    module = models.CharField(_("module"), max_length=20, choices=Module.choices, db_index=True)
    action = models.CharField(_("action"), max_length=20, choices=Action.choices, db_index=True)

    target_type = models.CharField(_("type cible"), max_length=100, blank=True, default="")
    target_id   = models.CharField(_("id cible"),   max_length=36,  blank=True, default="")

    description = models.TextField(_("description"), blank=True, default="")

    device_id  = models.CharField(_("device"), max_length=150, blank=True, default="")
    ip_address = models.GenericIPAddressField(_("adresse IP"), null=True, blank=True)

    class Meta:
        ordering = ["-timestamp"]
        indexes = [
            models.Index(fields=["company", "module", "timestamp"]),
            models.Index(fields=["user", "timestamp"]),
        ]

    def __str__(self):
        user_str = str(self.user) if self.user else "système"
        return f"[{self.module}] {self.action} par {user_str} — {self.timestamp:%Y-%m-%d %H:%M}"
