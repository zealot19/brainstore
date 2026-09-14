from django.core.management.base import BaseCommand

from apps.voyages_booking.services.reservation_services import release_expired_reservations


class Command(BaseCommand):
    help = "Libère les réservations (billets non payés) dont l'échéance est dépassée."

    def handle(self, *args, **options):
        count = release_expired_reservations()
        self.stdout.write(self.style.SUCCESS(f"{count} réservation(s) expirée(s) libérée(s)."))
