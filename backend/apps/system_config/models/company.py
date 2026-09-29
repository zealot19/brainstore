from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Company(BaseModel):
    """
    Institution / Tenant principal.
    Toutes les données métier sont liées à une Company via company_id.
    """

    class Status(models.TextChoices):
        DRAFT     = "draft",     _("En création")
        TRIAL     = "trial",     _("Essai")
        ACTIVE    = "active",    _("Active")
        SUSPENDED = "suspended", _("Suspendue")
        CANCELLED = "cancelled", _("Résiliée")

    class LegalForm(models.TextChoices):
        SA    = "SA",   _("Société Anonyme")
        SARL  = "SARL", _("SARL")
        SAS   = "SAS",  _("SAS")
        SNC   = "SNC",  _("SNC")
        ASSOC = "ASSO", _("Association")
        ONG   = "ONG",  _("ONG")
        OTHER = "other",_("Autre")

    # ── Identification ────────────────────────────────────────────────────
    name       = models.CharField(_("raison sociale"), max_length=255)
    code       = models.CharField(_("code"), max_length=50, blank=True)
    slug       = models.SlugField(_("identifiant URL"), max_length=100, unique=True)
    logo       = models.FileField(_("logo"), upload_to="companies/logos/", null=True, blank=True)
    slogan     = models.CharField(_("slogan"), max_length=255, blank=True)
    legal_form = models.CharField(_("forme juridique"), max_length=10,
                                  choices=LegalForm.choices, blank=True)
    capital    = models.DecimalField(_("capital social"), max_digits=18, decimal_places=2,
                                     null=True, blank=True)

    # ── Numéros légaux ────────────────────────────────────────────────────
    rccm        = models.CharField(_("RCCM"), max_length=50, blank=True)
    tax_id      = models.CharField(_("IFU / NIF"), max_length=50, blank=True)
    cnps_number = models.CharField(_("CNPS"), max_length=50, blank=True)
    vat_number  = models.CharField(_("numéro TVA"), max_length=50, blank=True)

    # ── Coordonnées ───────────────────────────────────────────────────────
    postal_box = models.CharField(_("boîte postale"), max_length=50, blank=True)
    email      = models.EmailField(_("email"), blank=True)
    phone      = models.CharField(_("téléphone"), max_length=30, blank=True)
    website = models.URLField(_("site web"), blank=True)
    address = models.ForeignKey(
        "core.Address", verbose_name=_("adresse"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="+",
    )

    # ── Configuration régionale ───────────────────────────────────────────
    country       = models.CharField(_("pays"), max_length=3, default="CI")
    language_code = models.CharField(_("langue"), max_length=10, default="fr")
    timezone      = models.CharField(_("fuseau horaire"), max_length=50, default="Africa/Abidjan")
    currency      = models.ForeignKey(
        "core.Currency", verbose_name=_("devise principale"),
        on_delete=models.PROTECT, null=True, blank=True, related_name="+",
    )

    # ── Configuration comptable ───────────────────────────────────────────
    fiscal_year_start = models.DateField(_("début exercice fiscal"), null=True, blank=True)
    fiscal_year_end   = models.DateField(_("fin exercice fiscal"),   null=True, blank=True)
    accounting_plan   = models.CharField(_("plan comptable"), max_length=30,
                                         default="OHADA",
                                         help_text=_("OHADA, SYSCOHADA, PCG, IFRS…"))

    # ── Plan & statut ────────────────────────────────────────────────────
    plan = models.ForeignKey(
        "system_config.Plan", verbose_name=_("plan"),
        on_delete=models.PROTECT, null=True, blank=True, related_name="companies",
    )
    status         = models.CharField(_("statut"), max_length=20,
                                      choices=Status.choices, default=Status.DRAFT)
    suspension_reason = models.TextField(_("raison de suspension"), blank=True)
    suspended_at   = models.DateTimeField(_("suspendu le"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("institution")
        verbose_name_plural = _("institutions")

    def __str__(self):
        return self.name

    @property
    def is_operational(self):
        return self.status in (self.Status.TRIAL, self.Status.ACTIVE)


class Subscription(BaseModel):
    """Souscription active d'une institution à un plan."""

    class BillingCycle(models.TextChoices):
        MONTHLY   = "monthly",   _("Mensuel")
        YEARLY    = "yearly",    _("Annuel")
        PERPETUAL = "perpetual", _("Perpétuel")

    class Status(models.TextChoices):
        TRIAL     = "trial",     _("Essai")
        ACTIVE    = "active",    _("Actif")
        PAST_DUE  = "past_due",  _("En retard")
        SUSPENDED = "suspended", _("Suspendu")
        CANCELLED = "cancelled", _("Résilié")

    company       = models.ForeignKey(Company, verbose_name=_("institution"),
                                      on_delete=models.CASCADE, related_name="subscriptions")
    plan          = models.ForeignKey("system_config.Plan", verbose_name=_("plan"),
                                      on_delete=models.PROTECT)
    status        = models.CharField(_("statut"), max_length=20,
                                     choices=Status.choices, default=Status.TRIAL)
    billing_cycle = models.CharField(_("cycle"), max_length=20,
                                     choices=BillingCycle.choices, default=BillingCycle.MONTHLY)
    started_at    = models.DateField(_("début"))
    expires_at    = models.DateField(_("expiration"), null=True, blank=True)
    trial_ends_at = models.DateField(_("fin essai"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("souscription")
        verbose_name_plural = _("souscriptions")
        ordering            = ["-started_at"]

    def __str__(self):
        return f"{self.company} — {self.plan} ({self.status})"
