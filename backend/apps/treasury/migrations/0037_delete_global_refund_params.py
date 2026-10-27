"""Nettoyage : supprime tout paramètre de remboursement GLOBAL (company IS NULL).

Bug corrigé : un utilisateur sans institution (super-admin plateforme) qui
enregistrait la config de remboursement écrivait des paramètres GLOBAUX
(`treasury.refund_method_*`, `treasury.refund_rate*`, `treasury.refund_amount_*`)
qui fuitaient ensuite vers TOUTES les sociétés via le repli global de get_param
(ex. méthode « fixed » imposée → remboursements silencieusement à 0). La config de
remboursement est toujours par société : aucun paramètre global n'est légitime.
"""
from django.db import migrations


def delete_global_refund_params(apps, schema_editor):
    Parameter = apps.get_model("system_config", "Parameter")
    Parameter.objects.filter(key__startswith="treasury.refund_", company__isnull=True).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("treasury", "0036_backfill_paymentmethod_fr"),
        ("system_config", "0001_initial"),
    ]
    operations = [migrations.RunPython(delete_global_refund_params, migrations.RunPython.noop)]
