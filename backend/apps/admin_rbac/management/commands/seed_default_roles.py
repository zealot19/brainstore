from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.admin_rbac.services.defaults import seed_default_roles


class Command(BaseCommand):
    help = "Crée les rôles/profils par défaut pour les sociétés existantes (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None, help="UUID d'une société précise (sinon toutes).")

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        total = 0
        for company in qs:
            created = seed_default_roles(company)
            total += len(created)
            self.stdout.write(f"{company.name}: {len(created)} rôle(s) créé(s)")
        self.stdout.write(self.style.SUCCESS(f"Terminé — {total} rôle(s) créés au total."))
