from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Employee(BaseModel):
    """Employé d'une institution. Peut être lié à un compte utilisateur système."""

    class Gender(models.TextChoices):
        MALE   = "M", _("Masculin")
        FEMALE = "F", _("Féminin")
        OTHER  = "O", _("Autre")

    class MaritalStatus(models.TextChoices):
        SINGLE   = "single",   _("Célibataire")
        MARRIED  = "married",  _("Marié(e)")
        DIVORCED = "divorced", _("Divorcé(e)")
        WIDOWED  = "widowed",  _("Veuf / Veuve")

    class Status(models.TextChoices):
        ACTIVE     = "active",     _("Actif")
        ON_LEAVE   = "on_leave",   _("En congé")
        SUSPENDED  = "suspended",  _("Suspendu")
        TERMINATED = "terminated", _("Résilié")

    # ── Appartenance ───────────────────────────────────────────────────────
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, related_name="employees")
    agency  = models.ForeignKey("system_config.Agency", verbose_name=_("agence"),
                                on_delete=models.SET_NULL, null=True, blank=True,
                                related_name="employees")
    user    = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("compte utilisateur"),
                                on_delete=models.SET_NULL, null=True, blank=True,
                                related_name="employee_profiles")

    # ── Identifiant RH ─────────────────────────────────────────────────────
    employee_number = models.CharField(_("matricule"), max_length=50)

    # ── Identité ───────────────────────────────────────────────────────────
    first_name      = models.CharField(_("prénom"), max_length=150)
    last_name       = models.CharField(_("nom"), max_length=150)
    gender          = models.CharField(_("genre"), max_length=1, choices=Gender.choices, blank=True)
    birth_date      = models.DateField(_("date de naissance"), null=True, blank=True)
    birth_place     = models.CharField(_("lieu de naissance"), max_length=200, blank=True)
    nationality     = models.CharField(_("nationalité"), max_length=100, blank=True)
    marital_status  = models.CharField(_("situation familiale"), max_length=20,
                                       choices=MaritalStatus.choices, blank=True)
    dependents_count = models.PositiveSmallIntegerField(_("nombre d'ayants droit"), default=0)

    # ── Contact ────────────────────────────────────────────────────────────
    phone           = models.CharField(_("téléphone"), max_length=30, blank=True)
    personal_email  = models.EmailField(_("email personnel"), blank=True)
    emergency_contact_name  = models.CharField(_("contact d'urgence"), max_length=200, blank=True)
    emergency_contact_phone = models.CharField(_("tél. contact d'urgence"), max_length=30, blank=True)

    # ── Documents ──────────────────────────────────────────────────────────
    id_card_number     = models.CharField(_("numéro CNI/passeport"), max_length=100, blank=True)
    id_card_expiry     = models.DateField(_("expiration CNI"), null=True, blank=True)
    social_security_no = models.CharField(_("numéro SS / CNPS"), max_length=100, blank=True)

    # ── Position professionnelle ───────────────────────────────────────────
    department   = models.ForeignKey("hr.Department",   verbose_name=_("département"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="employees")
    job_position = models.ForeignKey("hr.JobPosition",  verbose_name=_("poste"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="employees")
    grade        = models.ForeignKey("hr.Grade",        verbose_name=_("grade"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="employees")
    manager      = models.ForeignKey("self", verbose_name=_("responsable hiérarchique"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="subordinates")

    # ── Dates RH ───────────────────────────────────────────────────────────
    hire_date         = models.DateField(_("date d'embauche"))
    confirmation_date = models.DateField(_("date de confirmation"), null=True, blank=True)
    termination_date  = models.DateField(_("date de départ"), null=True, blank=True)

    # ── Statut ─────────────────────────────────────────────────────────────
    status = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                              default=Status.ACTIVE)

    # ── Banque ─────────────────────────────────────────────────────────────
    bank_name          = models.CharField(_("banque"), max_length=200, blank=True)
    bank_account_number = models.CharField(_("numéro de compte"), max_length=100, blank=True)
    bank_rib           = models.CharField(_("RIB / IBAN"), max_length=100, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("employé")
        verbose_name_plural = _("employés")
        ordering            = ["last_name", "first_name"]
        unique_together     = [("company", "employee_number")]

    def __str__(self):
        return f"{self.employee_number} — {self.full_name}"

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()
