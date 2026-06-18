from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomRefreshToken(RefreshToken):
    """
    JWT avec claims additionnels : company_id, agency_id, rôles admin.
    Angular lit ces claims pour afficher/masquer les sections sans appel API.
    """

    @classmethod
    def for_user(cls, user):
        token = super().for_user(user)

        # Identité
        token["email"]      = user.email
        token["full_name"]  = user.get_full_name()

        # Tenant / agence
        token["company_id"] = str(user.company_id) if user.company_id else None
        token["agency_id"]  = str(user.default_agency_id) if user.default_agency_id else None

        # Rôles
        token["is_superuser"]          = user.is_superuser
        token["is_institution_admin"]  = user.is_institution_admin
        token["is_agency_admin"]       = user.is_agency_admin

        # Sécurité
        token["must_change_password"]  = user.must_change_password
        token["is_2fa_enabled"]        = user.is_2fa_enabled

        return token
