import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_config.models import CrewMemberType
from apps.voyages_trips.views import CrewMemberListView


def _ctx():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Crew2 Co", admin_email="cw@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cw@x.com")
    return company, admin


@pytest.mark.django_db
def test_create_crew_member():
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    req = APIRequestFactory().post("/x", {"name": "Jean Kamga",
                                          "member_type_id": str(mt.id), "phone": "690"}, format="json")
    force_authenticate(req, user=admin)
    r = CrewMemberListView.as_view()(req); r.render()
    assert r.status_code in (200, 201)
    data = json.loads(r.content)["data"]
    assert data["full_name"] == "Jean Kamga"
    assert data["is_driver"] is True


@pytest.mark.django_db
def test_assign_crew_member_to_trip_via_serializer():
    from apps.voyages_trips.models import CrewMember, TripCrew
    from apps.voyages_trips.serializers import TripCrewSerializer
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    m = CrewMember.objects.create(company=company, first_name="Paul", last_name="N", member_type=mt, created_by=admin)
    crew = TripCrew(member=m)
    data = TripCrewSerializer(crew).data
    assert data["member_name"] == "Paul N"
    assert data["is_driver"] is True
