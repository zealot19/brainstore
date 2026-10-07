from django.db import transaction
from apps.voyages_booking.models import Passenger


@transaction.atomic
def get_or_create_passenger(company, *, id_type, id_number, phone,
                            name, gender="", birth_date=None,
                            email="", notes="", civility="", user=None):
    # Identité d'un client = CNI si renseignée (autoritaire), sinon le NOM exact
    # (parmi les clients sans CNI). JAMAIS le téléphone : un nouveau client dont le
    # numéro existe déjà ne doit pas hériter de l'identité (nom/pièce) de l'ancien.
    match = None
    if id_number:
        match = Passenger.objects.filter(is_deleted=False, company=company,
                                         id_type=id_type, id_number=id_number).first()
    elif name:
        match = Passenger.objects.filter(is_deleted=False, company=company,
                                         id_number="", name=name).first()
    if match:
        return match
    return Passenger.objects.create(
        company=company, name=name, gender=gender, civility=civility,
        birth_date=birth_date, phone=phone, email=email, id_type=id_type,
        id_number=id_number, notes=notes, created_by=user)
