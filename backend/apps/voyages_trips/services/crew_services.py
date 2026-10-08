from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_trips.models import CrewMember


def assert_crew_id_card_unique(company_id, id_card_number, exclude_id=None):
    """Numéro de carte d'identité unique par société *lorsqu'il est renseigné*.
    Vide autorisé pour plusieurs membres. Lève ApplicationError si doublon."""
    value = (id_card_number or "").strip()
    if not value:
        return None
    qs = CrewMember.objects.filter(company_id=company_id, id_card_number=value, is_deleted=False)
    if exclude_id:
        qs = qs.exclude(id=exclude_id)
    if qs.exists():
        raise ApplicationError(_("Un membre d'équipage avec ce numéro de carte d'identité existe déjà."))
    return None
