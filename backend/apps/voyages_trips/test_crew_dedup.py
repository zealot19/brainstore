import pytest
from rest_framework.test import APIClient
from apps.voyages_booking.tests_integration_treasury import _setup


def _crew_member(company):
    from apps.voyages_config.models import CrewMemberType
    from apps.voyages_trips.models import CrewMember
    mt = CrewMemberType.objects.create(company=company, code="DRV", name="Chauffeur", is_driver=True)
    return CrewMember.objects.create(company=company, first_name="Jean", last_name="Bus",
                                     member_type=mt, is_active=True)


@pytest.mark.django_db
def test_same_crew_member_cannot_be_added_twice():
    company, admin, trip = _setup()
    member = _crew_member(company)
    c = APIClient(); c.force_authenticate(user=admin)
    url = f"/api/v1/voyages/trips/{trip.id}/crew/"
    r1 = c.post(url, {"member_id": str(member.id)}, format="json")
    assert r1.status_code in (200, 201), r1.content
    r2 = c.post(url, {"member_id": str(member.id)}, format="json")
    assert r2.status_code == 400, r2.content
    assert trip.crew.filter(is_deleted=False, member=member).count() == 1
