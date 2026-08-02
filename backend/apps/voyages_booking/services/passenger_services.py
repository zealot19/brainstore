from django.db import transaction
from apps.voyages_booking.models import Passenger


@transaction.atomic
def get_or_create_passenger(company, *, id_type, id_number, phone,
                            first_name, last_name, gender="", birth_date=None,
                            email="", notes="", user=None):
    match = None
    if id_number:
        match = Passenger.objects.filter(is_deleted=False, company=company,
                                         id_type=id_type, id_number=id_number).first()
    if not match and phone:
        match = Passenger.objects.filter(is_deleted=False, company=company, phone=phone).first()
    if match:
        return match
    return Passenger.objects.create(
        company=company, first_name=first_name, last_name=last_name, gender=gender,
        birth_date=birth_date, phone=phone, email=email, id_type=id_type,
        id_number=id_number, notes=notes, created_by=user)
