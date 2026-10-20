"""Data migration — crée une Station (ServicePoint) pour chaque agence existante.

Désormais chaque agence EST une station (les Villes/Lieux ne sont plus configurés).
On rattrape l'existant : toute agence non supprimée sans ServicePoint rattaché
reçoit sa station (sans ville). Idempotent.
"""
from django.db import migrations


def seed(apps, schema_editor):
    Agency = apps.get_model("system_config", "Agency")
    ServicePoint = apps.get_model("voyages_config", "ServicePoint")
    for agency in Agency.objects.filter(is_deleted=False):
        exists = ServicePoint.objects.filter(
            company_id=agency.company_id, agency_id=agency.id, is_deleted=False).exists()
        if exists:
            continue
        ServicePoint.objects.create(
            company_id=agency.company_id,
            agency_id=agency.id,
            town=None,
            code=(agency.code or "")[:20],
            name=(agency.name or "")[:150],
        )


def unseed(apps, schema_editor):
    # Réversible : on ne supprime rien (les stations peuvent désormais porter des voyages).
    pass


class Migration(migrations.Migration):
    dependencies = [
        ("voyages_config", "0027_alter_servicepoint_options_alter_servicepoint_town"),
        ("system_config", "0008_remove_license_issued_at_remove_license_key_version_and_more"),
    ]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
