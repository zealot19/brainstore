import pytest
from apps.authentication.serializers import UserProfileSerializer
from apps.authentication.models import User


@pytest.mark.django_db
def test_me_returns_company_as_object():
    """me/ doit renvoyer `company` comme objet (CompanyRef) et non un simple UUID,
    sinon `currentUser.company.id` est undefined côté front (companyId = null →
    l'assignation de rôle/profil est ignorée silencieusement)."""
    from apps.system_config.services import create_company
    company, _ = create_company(
        name="Me Co", admin_email="me.admin@x.com",
        admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="me.admin@x.com")
    data = UserProfileSerializer(admin).data
    assert isinstance(data["company"], dict), type(data["company"])
    assert data["company"]["id"] == str(company.id)
    assert data["company"]["name"] == "Me Co"

    # Le login (UserCompactSerializer) doit aussi renvoyer un objet company.
    from apps.authentication.serializers import UserCompactSerializer
    cdata = UserCompactSerializer(admin).data
    assert isinstance(cdata["company"], dict) and cdata["company"]["id"] == str(company.id)


@pytest.mark.django_db
def test_user_payload_exposes_is_superuser():
    """Le front gate les menus super-admin sur `is_superuser` → il doit être présent
    dans me/ ET dans la réponse de login."""
    from apps.authentication.serializers import UserProfileSerializer, UserCompactSerializer
    from apps.system_config.services import create_company
    create_company(name="Su Co", admin_email="su.admin@x.com",
                   admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="su.admin@x.com")
    assert "is_superuser" in UserProfileSerializer(admin).data
    assert "is_superuser" in UserCompactSerializer(admin).data
