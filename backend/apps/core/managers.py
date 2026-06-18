from django.db import models


class SoftDeleteQuerySet(models.QuerySet):
    def alive(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)


class SoftDeleteManager(models.Manager):
    """Manager par défaut : exclut les enregistrements soft-deletés."""
    def get_queryset(self):
        return SoftDeleteQuerySet(self.model, using=self._db).alive()


class ActiveManager(models.Manager):
    """Retourne uniquement les enregistrements actifs et non supprimés."""
    def get_queryset(self):
        return SoftDeleteQuerySet(self.model, using=self._db).alive().filter(is_active=True)
