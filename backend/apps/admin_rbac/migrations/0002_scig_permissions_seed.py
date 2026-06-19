"""
Data migration — seed AppModule SCIG + all Permission codes.
These permissions are 'system' entries (no company) available to all institutions.
"""
from django.db import migrations
import uuid


SCIG_MODULE_CODE = "scig"

# (code, name, category)
SCIG_PERMISSIONS = [
    # ── Stock / Articles ──────────────────────────────────────────────────────
    ("scig.stock.view",         "Consulter les stocks et articles",           "view"),
    # ── Inventaire — Vendeur ──────────────────────────────────────────────────
    ("scig.session.view",       "Voir les sessions d'inventaire",             "view"),
    ("scig.zone.view",          "Voir les zones et lignes d'inventaire",      "view"),
    ("scig.zone.open",          "Ouvrir une zone d'inventaire",               "update"),
    ("scig.zone.scan",          "Scanner un article en zone",                 "create"),
    ("scig.zone.manual",        "Saisie manuelle en zone",                    "create"),
    ("scig.zone.submit",        "Soumettre une zone pour validation",         "update"),
    # ── Inventaire — Manager ──────────────────────────────────────────────────
    ("scig.session.create",     "Créer une session d'inventaire",             "create"),
    ("scig.zone.create",        "Créer une zone d'inventaire",                "create"),
    ("scig.zone.validate",      "Valider une zone (→ VERT)",                  "update"),
    ("scig.zone.recheck",       "Renvoyer une zone en re-vérification",       "update"),
    ("scig.zone.unlock",        "Déverrouiller une zone bloquée",             "admin"),
    ("scig.sage.submit",        "Soumettre l'inventaire vers Sage + clôture", "admin"),
    ("scig.report.view",        "Voir le rapport d'inventaire",               "view"),
    ("scig.report.export",      "Exporter le rapport (Excel / PDF)",          "export"),
    ("scig.dashboard.view",     "Accéder au dashboard KPI SCIG",              "view"),
    # ── Transferts ────────────────────────────────────────────────────────────
    ("scig.transfer.view",      "Voir les transferts inter-dépôts",           "view"),
    ("scig.transfer.create",    "Créer un transfert inter-dépôts",            "create"),
    ("scig.transfer.scan",      "Scanner articles dans un transfert",         "create"),
    ("scig.transfer.validate",  "Valider un transfert (→ VALIDATED)",         "update"),
    ("scig.transfer.ship",      "Expédier un transfert (→ SHIPPED)",          "update"),
    ("scig.transfer.receive",   "Réceptionner un transfert",                  "update"),
    # ── Étiquettes ────────────────────────────────────────────────────────────
    ("scig.labels.view",        "Voir les campagnes d'étiquetage",            "view"),
    ("scig.labels.print",       "Imprimer des étiquettes",                    "create"),
    # ── Administration (Admin uniquement) ─────────────────────────────────────
    ("scig.connection.manage",  "Configurer la connexion Sage 100",           "admin"),
    ("scig.sync.trigger",       "Déclencher une synchronisation Sage",        "admin"),
    ("scig.sync.view",          "Voir l'historique des synchronisations",     "view"),
]


def seed_scig_permissions(apps, schema_editor):
    AppModule   = apps.get_model("admin_rbac", "AppModule")
    Permission  = apps.get_model("admin_rbac", "Permission")

    module, _ = AppModule.objects.get_or_create(
        code=SCIG_MODULE_CODE,
        defaults={
            "id":          uuid.uuid4(),
            "name":        "Sync SCIG — Sage 100",
            "description": "Inventaires, transferts, stocks, étiquettes, synchronisation Sage 100.",
            "icon":        "ti ti-brand-snowflake",
            "order":       50,
            "is_core":     False,
        },
    )

    for code, name, category in SCIG_PERMISSIONS:
        Permission.objects.get_or_create(
            code=code,
            defaults={
                "id":       uuid.uuid4(),
                "module":   module,
                "name":     name,
                "category": category,
            },
        )


def unseed_scig_permissions(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    AppModule  = apps.get_model("admin_rbac", "AppModule")
    Permission.objects.filter(code__startswith="scig.").delete()
    AppModule.objects.filter(code=SCIG_MODULE_CODE).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("admin_rbac", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_scig_permissions, reverse_code=unseed_scig_permissions),
    ]
