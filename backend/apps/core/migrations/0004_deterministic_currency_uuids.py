"""Re-clé core.Currency vers des UUID DÉTERMINISTES (uuid5 du code ISO 4217).

Même problème que le catalogue RBAC (cf. admin_rbac.0023) : les devises sont
semées indépendamment par migration sur chaque instance -> UUID aléatoires
divergents. La FK `Company.currency` (et Agency, Contract, denominations, taux de
change) du master ne résout alors pas côté agence au bootstrap :
« insert or update on system_config_company violates FK ... core_currency ».

En dérivant l'UUID du `code` (uuid5, stable), master et agences convergent vers
les MÊMES UUID -> les FK vers Currency résolvent partout, sans devoir synchroniser
la table Currency. Idempotent (ignore les lignes déjà déterministes).

Repointage des FK par INTROSPECTION : on met à jour toute FK ciblant core.Currency
dans l'état de migration (robuste, n'oublie aucune app). Les FK Django sont
DEFERRABLE INITIALLY DEFERRED -> la ré-affectation de PK est vérifiée au commit.
"""
import uuid
from django.db import migrations, models

# Namespace fixe et stable — NE JAMAIS CHANGER.
CURRENCY_NS = uuid.UUID("7c9a1f22-3b4d-5e6f-8a0b-1c2d3e4f5a6b")


def _rekey(apps, schema_editor):
    Currency = apps.get_model("core", "Currency")

    mapping = {}
    for c in Currency.objects.all():
        new = uuid.uuid5(CURRENCY_NS, c.code)
        if c.pk != new:
            mapping[c.pk] = new
    if not mapping:
        return

    # Repointer toutes les FK ciblant core.Currency, dans toutes les apps de l'état.
    for model in apps.get_models():
        for f in model._meta.concrete_fields:
            if isinstance(f, models.ForeignKey) and \
                    f.related_model._meta.label_lower == "core.currency":
                for old, new in mapping.items():
                    model._default_manager.filter(**{f.attname: old}).update(**{f.attname: new})

    # Re-clé des devises elles-mêmes.
    for old, new in mapping.items():
        Currency.objects.filter(pk=old).update(id=new)


class Migration(migrations.Migration):
    # Dépend des apps portant une FK vers Currency, pour que leurs lignes soient
    # repointées (sinon la ré-affectation de PK laisserait des FK orphelines).
    dependencies = [
        ("core", "0003_seed_currencies"),
        ("system_config", "0004_package_has_accounting_package_has_administration_and_more"),
        ("hr", "0002_leavebalance_created_at_leavebalance_created_by_and_more"),
        ("treasury", "0025_transaction_vehicle"),
    ]
    operations = [migrations.RunPython(_rekey, migrations.RunPython.noop)]
