from django.core.management.base import BaseCommand
from apps.voyages_booking.services import expire_holds


class Command(BaseCommand):
    help = "Libère les sièges des réservations en attente expirées."

    def handle(self, *args, **options):
        n = expire_holds()
        self.stdout.write(self.style.SUCCESS(f"{n} réservation(s) expirée(s)."))
