from django.core.management.base import BaseCommand
from apps.system_config.services.licensing import reissue_all


class Command(BaseCommand):
    help = "Backfill + re-sign license tokens for all companies (idempotent). Run after installing the signing key."

    def handle(self, *args, **opts):
        n = reissue_all()
        self.stdout.write(self.style.SUCCESS(f"Reissued licenses for {n} companies."))
