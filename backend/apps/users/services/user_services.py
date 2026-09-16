import secrets
from django.contrib.auth import get_user_model
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.authentication.models import UserAgency
from apps.authentication.services import logout_all_sessions

User = get_user_model()


def _generate_username(email: str) -> str:
    """Génère un username unique dérivé de l'adresse email."""
    base = email.split("@")[0].lower()
    base = "".join(c for c in base if c.isalnum() or c in (".", "_", "-"))
    username = base
    counter = 1
    while User.objects.filter(username=username).exists():
        username = f"{base}{counter}"
        counter += 1
    return username


def _check_user_limit(company):
    """Lève ApplicationError si la limite d'utilisateurs du package est atteinte."""
    if company.package and company.package.max_users:
        current = User.objects.filter(company=company, is_active=True).count()
        if current >= company.package.max_users:
            raise ApplicationError(
                _("Limite d'utilisateurs atteinte (%(max)s/%(max)s). Passez à un package supérieur.")
                % {"max": company.package.max_users}
            )


@transaction.atomic
def create_user(
    *,
    created_by,
    company,
    email: str,
    first_name: str,
    last_name: str,
    phone: str = "",
    job_title: str = "",
    is_institution_admin: bool = False,
    is_agency_admin: bool = False,
    default_agency_id=None,
    agency_ids=None,
    language_code: str = "fr",
    user_timezone: str = "Africa/Abidjan",
    temp_password: str = None,
    username: str = None,
):
    """
    Crée un utilisateur dans une institution.
    Retourne (user, temp_password) — le mot de passe temporaire doit être transmis à l'utilisateur.
    L'utilisateur devra le changer à sa première connexion (must_change_password=True).
    """
    if User.objects.filter(email__iexact=email).exists():
        raise ApplicationError(_("Un utilisateur avec cet email existe déjà."))

    _check_user_limit(company)

    # Username choisi par l'admin (formulaire) ; sinon dérivé de l'email
    # (utilisé au démarrage d'institution où aucun username n'est saisi).
    if username:
        username = username.strip()
        if User.objects.filter(username__iexact=username).exists():
            raise ApplicationError(_("Ce nom d'utilisateur est déjà pris."))
    else:
        username = _generate_username(email)

    if not temp_password:
        temp_password = secrets.token_urlsafe(12)

    user = User(
        email=email,
        username=username,
        first_name=first_name,
        last_name=last_name,
        phone=phone,
        job_title=job_title,
        company=company,
        is_institution_admin=is_institution_admin,
        is_agency_admin=is_agency_admin,
        language_code=language_code,
        timezone=user_timezone,
        must_change_password=True,
        is_active=True,
    )
    user.set_password(temp_password)
    user.save()

    # Agence par défaut
    if default_agency_id:
        user.default_agency_id = default_agency_id
        user.save(update_fields=["default_agency"])

    # Attribution des agences
    if agency_ids:
        for aid in agency_ids:
            UserAgency.objects.get_or_create(
                user=user,
                agency_id=aid,
                defaults={"is_default": str(aid) == str(default_agency_id)},
            )

    return user, temp_password


@transaction.atomic
def update_user(
    user,
    *,
    updated_by,
    first_name=None,
    last_name=None,
    phone=None,
    job_title=None,
    is_institution_admin=None,
    is_agency_admin=None,
    language_code=None,
    user_timezone=None,
    default_agency_id=None,
    username=None,
):
    """Met à jour le profil d'un utilisateur (seuls les champs fournis sont modifiés)."""
    if username is not None:
        username = username.strip()
        if not username:
            raise ApplicationError(_("Le nom d'utilisateur est requis."))
        if User.objects.filter(username__iexact=username).exclude(id=user.id).exists():
            raise ApplicationError(_("Ce nom d'utilisateur est déjà pris."))
        user.username = username
    if first_name is not None:
        user.first_name = first_name
    if last_name is not None:
        user.last_name = last_name
    if phone is not None:
        user.phone = phone
    if job_title is not None:
        user.job_title = job_title
    if is_institution_admin is not None:
        user.is_institution_admin = is_institution_admin
    if is_agency_admin is not None:
        user.is_agency_admin = is_agency_admin
    if language_code is not None:
        user.language_code = language_code
    if user_timezone is not None:
        user.timezone = user_timezone
    if default_agency_id is not None:
        user.default_agency_id = default_agency_id

    user.save()
    return user


def activate_user(user, updated_by):
    """Active un utilisateur désactivé."""
    if user.is_active:
        raise ApplicationError(_("Cet utilisateur est déjà actif."))
    user.is_active = True
    user.save(update_fields=["is_active"])
    return user


@transaction.atomic
def deactivate_user(user, updated_by):
    """Désactive un utilisateur et révoque toutes ses sessions JWT actives."""
    if not user.is_active:
        raise ApplicationError(_("Cet utilisateur est déjà inactif."))
    user.is_active = False
    user.save(update_fields=["is_active"])
    logout_all_sessions(user)
    return user


def unlock_user(user, updated_by):
    """Déverrouille manuellement un compte bloqué suite à des tentatives échouées."""
    user.failed_login_attempts = 0
    user.locked_until = None
    user.save(update_fields=["failed_login_attempts", "locked_until"])
    return user


@transaction.atomic
def admin_reset_password(user, *, new_password: str, must_change: bool = True, updated_by):
    """
    Réinitialise le mot de passe par un administrateur.
    Par défaut, l'utilisateur sera forcé de changer le mot de passe à la prochaine connexion.
    Toutes les sessions actives sont révoquées.
    """
    user.set_password(new_password)
    user.must_change_password = must_change
    user.password_changed_at = timezone.now()
    user.save(update_fields=["password", "must_change_password", "password_changed_at"])
    logout_all_sessions(user)
    return user


@transaction.atomic
def assign_user_agencies(user, *, agency_ids, default_agency_id=None, updated_by):
    """
    Remplace l'intégralité des agences de l'utilisateur.
    Si default_agency_id est fourni et présent dans agency_ids, il devient l'agence par défaut.
    """
    UserAgency.objects.filter(user=user).delete()

    for aid in agency_ids:
        UserAgency.objects.create(
            user=user,
            agency_id=aid,
            is_default=(str(aid) == str(default_agency_id)),
        )

    # Mise à jour du champ FK default_agency sur l'utilisateur
    agency_id_strs = [str(a) for a in agency_ids]
    if default_agency_id and str(default_agency_id) in agency_id_strs:
        user.default_agency_id = default_agency_id
    elif not agency_ids:
        user.default_agency = None

    user.save(update_fields=["default_agency"])
    return user
