"""
Management command: seed des rôles et profils système SCIG.

Usage:
    python manage.py seed_scig_roles
    python manage.py seed_scig_roles --company <company_id>  # pour une institution spécifique

Crée 3 rôles système (company=None → disponibles partout) :
  • Vendeur SCIG  — scan, saisie, ouverture zone
  • Manager SCIG  — validation, recheck, unlock, rapport, soumettre Sage
  • Admin SCIG    — connexion Sage, synchronisation

Et 3 profils (stacked) :
  • Profil Vendeur SCIG  = [Vendeur SCIG]
  • Profil Manager SCIG  = [Vendeur SCIG + Manager SCIG]
  • Profil Admin SCIG    = [Vendeur SCIG + Manager SCIG + Admin SCIG]
"""
import uuid
from django.core.management.base import BaseCommand, CommandError
from apps.admin_rbac.models import Permission, Role, RolePermission, Profile, ProfileRole


VENDEUR_CODES = [
    "scig.stock.view",
    "scig.session.view",
    "scig.zone.view",
    "scig.zone.open",
    "scig.zone.scan",
    "scig.zone.manual",
    "scig.zone.submit",
    "scig.labels.view",
    "scig.labels.print",
    "scig.transfer.view",
    "scig.transfer.scan",
    "scig.transfer.receive",
]

MANAGER_CODES = [
    "scig.session.create",
    "scig.zone.create",
    "scig.zone.validate",
    "scig.zone.recheck",
    "scig.zone.unlock",
    "scig.sage.submit",
    "scig.report.view",
    "scig.report.export",
    "scig.dashboard.view",
    "scig.transfer.create",
    "scig.transfer.validate",
    "scig.transfer.ship",
]

ADMIN_CODES = [
    "scig.connection.manage",
    "scig.sync.trigger",
    "scig.sync.view",
]

ROLES = [
    {
        "name":        "Vendeur SCIG",
        "description": "Opérateur d'inventaire : ouverture de zone, scan, saisie manuelle, soumission.",
        "codes":       VENDEUR_CODES,
    },
    {
        "name":        "Manager SCIG",
        "description": "Gestionnaire : validation zones, recheck, unlock, rapport, soumission Sage.",
        "codes":       MANAGER_CODES,
    },
    {
        "name":        "Admin SCIG",
        "description": "Administrateur SCIG : configuration connexion Sage 100, déclenchement sync.",
        "codes":       ADMIN_CODES,
    },
]

# Chaque profil empile les rôles du niveau courant + niveaux inférieurs
PROFILES = [
    {
        "name":        "Profil Vendeur SCIG",
        "description": "Profil opérateur d'inventaire SCIG.",
        "role_names":  ["Vendeur SCIG"],
    },
    {
        "name":        "Profil Manager SCIG",
        "description": "Profil gestionnaire SCIG (vendeur + validation).",
        "role_names":  ["Vendeur SCIG", "Manager SCIG"],
    },
    {
        "name":        "Profil Admin SCIG",
        "description": "Profil administrateur SCIG (toutes permissions).",
        "role_names":  ["Vendeur SCIG", "Manager SCIG", "Admin SCIG"],
    },
]


class Command(BaseCommand):
    help = "Crée les rôles et profils système SCIG (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--company",
            dest="company_id",
            default=None,
            help="UUID d'une institution spécifique (défaut : système = toutes institutions).",
        )

    def handle(self, *args, **options):
        company = None
        company_id = options.get("company_id")

        if company_id:
            from apps.system_config.models import Company
            try:
                company = Company.objects.get(id=company_id)
                self.stdout.write(f"Scope : {company.name}")
            except Company.DoesNotExist:
                raise CommandError(f"Aucune institution avec l'id {company_id}")
        else:
            self.stdout.write("Scope : système (disponible pour toutes les institutions)")

        # ── 1. Résoudre les permissions ──────────────────────────────────────────
        all_codes = set(VENDEUR_CODES + MANAGER_CODES + ADMIN_CODES)
        perms_by_code = {
            p.code: p
            for p in Permission.objects.filter(code__in=all_codes)
        }

        missing = all_codes - set(perms_by_code.keys())
        if missing:
            self.stderr.write(
                f"ERREUR: {len(missing)} permission(s) introuvable(s) en DB.\n"
                f"Lancer d'abord: python manage.py migrate admin_rbac\n"
                + "\n".join(f"  - {c}" for c in sorted(missing))
            )
            raise CommandError("Permissions manquantes. Annulation.")

        # ── 2. Créer / mettre à jour les rôles ───────────────────────────────────
        created_roles: dict[str, Role] = {}

        for spec in ROLES:
            role, created = Role.objects.get_or_create(
                company=company,
                name=spec["name"],
                defaults={
                    "id":          uuid.uuid4(),
                    "description": spec["description"],
                    "is_system":   True,
                },
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"  [OK] Role cree : {role.name}"))
            else:
                self.stdout.write(f"  [--] Role existant : {role.name}")

            # Assigner les permissions (idempotent)
            for code in spec["codes"]:
                RolePermission.objects.get_or_create(
                    role=role,
                    permission=perms_by_code[code],
                )

            created_roles[spec["name"]] = role

        # ── 3. Créer / mettre à jour les profils ─────────────────────────────────
        for spec in PROFILES:
            profile, created = Profile.objects.get_or_create(
                company=company,
                name=spec["name"],
                defaults={
                    "id":          uuid.uuid4(),
                    "description": spec["description"],
                    "is_system":   True,
                },
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"  [OK] Profil cree : {profile.name}"))
            else:
                self.stdout.write(f"  [--] Profil existant : {profile.name}")

            # Assigner les rôles du profil (idempotent)
            for role_name in spec["role_names"]:
                role = created_roles[role_name]
                ProfileRole.objects.get_or_create(profile=profile, role=role)

        self.stdout.write(self.style.SUCCESS(
            "\nSeed termine -- 3 roles, 3 profils SCIG prets a etre assignes aux utilisateurs."
        ))
        self.stdout.write(
            "Assignez un profil via l'API : POST /api/v1/rbac/users/<uid>/profile/assign/"
        )
