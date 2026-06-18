import uuid
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class ParcelEvent(models.Model):
    """Immutable tracking log entry — one row per status change."""

    id         = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    parcel     = models.ForeignKey("parcel.Parcel", verbose_name=_("parcel"),
                                    on_delete=models.CASCADE, related_name="events")
    status     = models.CharField(_("status"), max_length=20)
    location   = models.CharField(_("location"), max_length=100, blank=True)
    note       = models.CharField(_("note"), max_length=255, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("recorded by"),
                                    on_delete=models.SET_NULL, null=True,
                                    related_name="parcel_events")
    created_at = models.DateTimeField(_("recorded at"), default=timezone.now)

    class Meta:
        verbose_name = _("parcel event")
        verbose_name_plural = _("parcel events")
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.parcel.reference} → {self.status} ({self.created_at:%Y-%m-%d %H:%M})"
