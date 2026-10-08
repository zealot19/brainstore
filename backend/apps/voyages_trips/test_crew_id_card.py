import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_trips.models import CrewMember
from apps.voyages_trips.services.crew_services import assert_crew_id_card_unique


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import CrewMemberType
    company, _ = create_company(name="CrewCo", admin_email="crew@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="crew@x.com")
    mt = CrewMemberType.objects.create(company=company, name="Chauffeur", created_by=user)
    return company, user, mt


def test_model_has_id_card_number():
    assert "id_card_number" in {f.name for f in CrewMember._meta.get_fields()}


def test_write_serializer_accepts_id_card_number():
    from apps.voyages_trips.serializers import CrewMemberWriteSerializer
    assert "id_card_number" in CrewMemberWriteSerializer().fields


@pytest.mark.django_db
def test_duplicate_non_empty_id_card_rejected(ctx):
    company, user, mt = ctx
    CrewMember.objects.create(company=company, name="Jean", member_type=mt,
                              id_card_number="CNI-1", created_by=user)
    with pytest.raises(ApplicationError):
        assert_crew_id_card_unique(company.id, "CNI-1")


@pytest.mark.django_db
def test_blank_id_card_allows_duplicates(ctx):
    company, user, mt = ctx
    CrewMember.objects.create(company=company, name="A", member_type=mt,
                              id_card_number="", created_by=user)
    # blank is allowed for many — must not raise
    assert_crew_id_card_unique(company.id, "") is None


@pytest.mark.django_db
def test_exclude_self_on_update(ctx):
    company, user, mt = ctx
    m = CrewMember.objects.create(company=company, name="Jean", member_type=mt,
                                  id_card_number="CNI-9", created_by=user)
    # same member keeping its own number must not raise
    assert_crew_id_card_unique(company.id, "CNI-9", exclude_id=m.id) is None
