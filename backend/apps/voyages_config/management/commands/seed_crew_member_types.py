from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.voyages_config.services.crew_seed import seed_crew_member_types


class Command(BaseCommand):
    help = "Seed les types de membre d'équipage par société (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None)

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            n = seed_crew_member_types(company)
            self.stdout.write(f"{company.name}: {n} types créés")
        self.stdout.write(self.style.SUCCESS("Terminé."))
