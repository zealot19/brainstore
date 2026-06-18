from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.utils.translation import gettext_lazy as _
from .base import BaseModel


class Attachment(BaseModel):
    """Pièce jointe générique liée à n'importe quel modèle via GenericFK."""
    content_type   = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id      = models.UUIDField()
    content_object = GenericForeignKey("content_type", "object_id")

    name        = models.CharField(_("nom du fichier"), max_length=255)
    file        = models.FileField(_("fichier"), upload_to="attachments/%Y/%m/")
    mime_type   = models.CharField(_("type MIME"), max_length=100, blank=True)
    size        = models.PositiveIntegerField(_("taille (octets)"), default=0)
    description = models.TextField(_("description"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("pièce jointe")
        verbose_name_plural = _("pièces jointes")
        indexes = [
            models.Index(fields=["content_type", "object_id"]),
        ]

    def __str__(self):
        return self.name
