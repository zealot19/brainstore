"""Recopie le libellé existant (FR) dans la colonne name_fr (modeltranslation).

Sans ça, après l'ajout des colonnes traduites, name_fr serait vide et l'affichage
FR tomberait à blanc. La colonne d'origine `name` garde la valeur ; on la duplique."""
from django.db import migrations
from django.db.models import F


def backfill(apps, schema_editor):
    PaymentMethod = apps.get_model("treasury", "PaymentMethod")
    PaymentMethod.objects.update(name_fr=F("name"))


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("treasury", "0035_paymentmethod_name_en_paymentmethod_name_fr")]
    operations = [migrations.RunPython(backfill, reverse_code=noop)]
