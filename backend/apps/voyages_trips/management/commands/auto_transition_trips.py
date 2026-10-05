from django.core.management.base import BaseCommand
from apps.voyages_trips.services.auto_transition import run_auto_transitions


class Command(BaseCommand):
    help = "Démarre/arrête automatiquement les voyages des sociétés ayant activé l'option (idempotent)."

    def handle(self, *args, **opts):
        res = run_auto_transitions()
        self.stdout.write(f"auto-transitions: {res['departed']} démarré(s), "
                          f"{res['completed']} clôturé(s), {res['skipped']} ignoré(s).")
