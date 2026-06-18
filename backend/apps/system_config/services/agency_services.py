from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import Agency, Company


def _check_agency_limit(company):
    if not company.package:
        return
    current = Agency.objects.filter(company=company, is_deleted=False).count()
    if current >= company.package.max_agencies:
        raise ApplicationError(
            _("Limite d'agences atteinte (%(max)s). Passez à un package supérieur.")
            % {"max": company.package.max_agencies}
        )


def create_agency(*, company_id, name, code, agency_type=Agency.AgencyType.BRANCH,
                  parent_id=None, email="", phone="", manager_id=None,
                  currency_id=None, is_active=True, created_by=None):
    try:
        company = Company.objects.get(id=company_id, is_deleted=False)
    except Company.DoesNotExist:
        raise ApplicationError(_("Institution introuvable."))

    _check_agency_limit(company)

    if Agency.objects.filter(company=company, code=code).exists():
        raise ApplicationError(_("Ce code d'agence existe déjà pour cette institution."))

    parent = None
    if parent_id:
        try:
            parent = Agency.objects.get(id=parent_id, company=company, is_deleted=False)
        except Agency.DoesNotExist:
            raise ApplicationError(_("Agence parente introuvable."))

    return Agency.objects.create(
        company=company, name=name, code=code,
        agency_type=agency_type, parent=parent,
        email=email, phone=phone,
        manager_id=manager_id, currency_id=currency_id,
        is_active=is_active, created_by=created_by,
    )


def update_agency(agency, *, updated_by=None, **fields):
    protected = {"id", "created_at", "created_by"}

    if "code" in fields and fields["code"] != agency.code:
        if Agency.objects.filter(company=agency.company, code=fields["code"]).exists():
            raise ApplicationError(_("Ce code d'agence existe déjà."))

    if "parent_id" in fields and fields["parent_id"]:
        # Empêche la création de cycles dans la hiérarchie
        candidate = fields["parent_id"]
        if str(candidate) == str(agency.id):
            raise ApplicationError(_("Une agence ne peut pas être son propre parent."))

    for key, value in fields.items():
        if key not in protected:
            setattr(agency, key, value)
    agency.updated_by = updated_by
    agency.save()
    return agency


def delete_agency(agency, deleted_by=None):
    if Agency.objects.filter(parent=agency, is_deleted=False).exists():
        raise ApplicationError(_("Impossible de supprimer une agence qui a des enfants actifs."))
    agency.soft_delete(user=deleted_by)
