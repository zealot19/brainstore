from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.accounting.services.seed import seed_accounting


class Command(BaseCommand):
    help = "Seed le référentiel comptable OHADA pour les sociétés (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None, help="UUID d'une société précise.")

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            res = seed_accounting(company)
            self.stdout.write(f"{company.name}: {res['accounts']} comptes, {res['journals']} journaux, "
                              f"{res['periods']} périodes")
        self.stdout.write(self.style.SUCCESS("Terminé."))
