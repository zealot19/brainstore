import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.managers import ActiveManager, SoftDeleteManager
from .mixins import TimeStampedMixin, SoftDeleteMixin, AuditMixin


class BaseModel(TimeStampedMixin, SoftDeleteMixin, AuditMixin):
    """
    Modèle de base pour toute l'application.
    Fournit : UUID pk, timestamps, soft-delete, audit (created_by / updated_by).
    Tous les modèles métier héritent de cette classe.
    """
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("identifiant"),
    )
    is_active = models.BooleanField(_("actif"), default=True)

    objects = SoftDeleteManager()
    active  = ActiveManager()
    all_objects = models.Manager()

    class Meta:
        abstract = True
        ordering = ("-created_at",)

    def __str__(self):
        return str(self.id)
