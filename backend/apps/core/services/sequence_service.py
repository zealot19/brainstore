from django.db import transaction
from django.utils import timezone
from apps.core.models.sequence import Sequence


@transaction.atomic
def next_number(code: str, *, agency=None) -> str:
    """
    Retourne le prochain numéro de séquence formaté pour le code donné.
    Utilise SELECT FOR UPDATE pour éviter les doublons en concurrence.
    Exemple : next_number("HR_EMP") → "HR/2026/00001"

    `agency` (optionnel) : le code de l'agence est injecté dans le préfixe pour
    que les numéros de deux agences ne se chevauchent jamais lors de la
    synchronisation multi-instances (ex. next_number("BOOK", agency=<DLA>) →
    "DLA/BOOK/2026/00001"). Le compteur reste local à l'instance ; c'est le
    préfixe d'agence qui garantit l'unicité globale.
    """
    seq = Sequence.objects.select_for_update().get(code=code)

    current_year = timezone.now().year
    if seq.reset_yearly and seq.reset_year != current_year:
        seq.next_number = 1
        seq.reset_year  = current_year

    number_str = str(seq.next_number).zfill(seq.padding)
    seq.next_number += 1
    seq.save(update_fields=["next_number", "reset_year"])

    agency_code = getattr(agency, "code", "") if agency else ""
    parts = [p for p in [
        agency_code,
        seq.prefix,
        str(current_year) if seq.reset_yearly else "",
        number_str,
        seq.suffix,
    ] if p]
    return "/".join(parts)
