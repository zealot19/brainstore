from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.treasury.services.seed import seed_treasury_mapping


class Command(BaseCommand):
    help = "Seed le mapping catégorie→compte de la Trésorerie (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None)

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            n = seed_treasury_mapping(company)
            self.stdout.write(f"{company.name}: {n} correspondances créées")
        self.stdout.write(self.style.SUCCESS("Terminé."))
