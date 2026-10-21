"""Recopie les libellés existants (FR) dans les colonnes …_fr (modeltranslation)
pour types de dépense, types & natures de colis, types de membre d'équipage."""
from django.db import migrations
from django.db.models import F


def backfill(apps, schema_editor):
    ExpenseType = apps.get_model("voyages_config", "ExpenseType")
    ExpenseType.objects.update(name_fr=F("name"))
    ConsignmentType = apps.get_model("voyages_config", "ConsignmentType")
    ConsignmentType.objects.update(label_fr=F("label"))
    ConsignmentNature = apps.get_model("voyages_config", "ConsignmentNature")
    ConsignmentNature.objects.update(name_fr=F("name"))
    CrewMemberType = apps.get_model("voyages_config", "CrewMemberType")
    CrewMemberType.objects.update(name_fr=F("name"))


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("voyages_config", "0030_consignmentnature_name_en_consignmentnature_name_fr_and_more")]
    operations = [migrations.RunPython(backfill, reverse_code=noop)]
