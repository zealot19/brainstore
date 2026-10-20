"""Data migration — éclatement des permissions « Gérer » (.manage) en actions fines.

Pour chaque ressource CRUD listée ci-dessous, on crée les permissions
`<base>.create` / `<base>.update` / `<base>.delete` (la lecture reste `<base>.view`).
Le module et le libellé sont dérivés de la permission `<base>.manage` existante.

Rétro-compatibilité : `<base>.manage` est conservé et agit en « umbrella »
(cf. get_user_permissions) — détenir `.manage` accorde implicitement les 3 actions
fines. Aucun rôle existant n'est modifié ici ; cette migration ne fait qu'enrichir
le catalogue pour que l'UI des rôles propose les cases Create/Update/Delete.

Exclus volontairement (capacités uniques, non-CRUD) : *.config.manage,
treasury.session.manage, scig.connection.manage, *.core.manage, transport.city.*.
"""
from django.db import migrations

# Ressources réellement CRUD (une ligne = un couple module.ressource).
CRUD_BASES = [
    "accounting.account", "accounting.fiscalyear", "accounting.journal",
    "accounting.partner", "accounting.period",
    "fleet.accident", "fleet.assignment", "fleet.brand", "fleet.contract",
    "fleet.document", "fleet.driver", "fleet.fuel", "fleet.maintenance",
    "fleet.model", "fleet.parking", "fleet.recurring_cost", "fleet.supplier",
    "system.agency",
    "ticketing.customer", "ticketing.luggage", "ticketing.parcel",
    "transport.category", "transport.fare", "transport.fareclass",
    "transport.route", "transport.terminal",
    "treasury.bank", "treasury.expense", "treasury.income", "treasury.partner",
    "treasury.paymentmethod", "treasury.register", "treasury.transaction",
    "treasury.transfer",
    "voyage.crew", "voyage.expense",
]

ACTIONS = [("create", "Créer"), ("update", "Modifier"), ("delete", "Supprimer")]


def _label(manage_name, verb):
    # "Gérer les chauffeurs" -> "Créer les chauffeurs" ; sinon préfixe simple.
    if manage_name and manage_name.startswith("Gérer"):
        return verb + manage_name[len("Gérer"):]
    return f"{verb} : {manage_name or ''}".strip()


def seed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    for base in CRUD_BASES:
        mng = Permission.objects.filter(code=f"{base}.manage").first()
        if not mng:
            # Pas de .manage en base (module désactivé/non seedé) : on ignore.
            continue
        for cat, verb in ACTIONS:
            Permission.objects.update_or_create(
                code=f"{base}.{cat}",
                defaults={
                    "name": _label(mng.name, verb),
                    "module_id": mng.module_id,
                    "category": cat,
                },
            )


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    codes = [f"{b}.{cat}" for b in CRUD_BASES for cat, _ in ACTIONS]
    Permission.objects.filter(code__in=codes).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0024_operation_validate_permission_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
