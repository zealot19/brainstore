import pytest


@pytest.mark.django_db
def test_parcel_stats_endpoint():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.authentication.models import User
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, ConsignmentType, ConsignmentNature
    from apps.voyages_consignment.models import Parcel
    company, _ = create_company(name="PkStats", admin_email="pk@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="pk@x.com")
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O", is_station=True)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2", is_station=True)
    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ct = ConsignmentType.objects.create(company=company, code="STD", label="Standard", nature=nature)

    def _parcel(status):
        return Parcel.objects.create(company=company, origin_point=o, destination_point=d,
                                     consignment_type=ct, sender_name="S", sender_phone="1",
                                     recipient_name="R", recipient_phone="2", status=status,
                                     created_by=admin)
    _parcel("registered"); _parcel("registered"); _parcel("loaded"); _parcel("arrived")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get("/api/v1/voyages/consignment/stats/")
    assert r.status_code == 200
    data = r.json()["data"]
    assert data["registered"] == 2 and data["in_transit"] == 1 and data["to_collect"] == 1
