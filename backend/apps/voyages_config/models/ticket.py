from decimal import Decimal
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped

# Textes par defaut (formulaire)
DEFAULT_RECTO_NOTICE = ("L'embarquement commence a l'heure. Presentez-vous a temps, "
                        "sinon votre place peut etre reattribuee.")
DEFAULT_VERSO_CONDITIONS = (
    "Soyez a l'agence au plus tard 45 min avant le depart. L'embarquement se clot 10 min avant.\n"
    "Les billets sont valables jusqu'a la date souhaitee ; ni remboursables, ni echangeables, ni cedes.\n"
    "Les bagages sont soumis a la franchise autorisee ; les excedents sont payants.\n"
    "Conservez ce billet et presentez-le a l'embarquement."
)

DEFAULT_PARCEL_RECEIPT_TERMS = (
    "Par sa signature, le client declare avoir lu et accepte "
    "les conditions definies par l'agence."
)
DEFAULT_BAGGAGE_TICKET_NOTE = "Merci de votre confiance. Bon voyage !"

# HTML par defaut (mode avance uniquement)
DEFAULT_TICKET_RECTO = "<div class=\"tk\">{{ passenger_name }} — {{ ticket_number }}</div>"
DEFAULT_TICKET_VERSO = ""


class TicketTemplate(_CompanyScoped):
    """Configuration du billet voyageur (Config billets), un par institution.
    Par defaut : formulaire (gabarit genere). Mode avance : HTML brut."""

    # ── Entreprise (specifique billet) ───────────────────────────────────────
    brand_name = models.CharField(_("nom affiche"), max_length=255, blank=True)
    slogan     = models.CharField(_("slogan"), max_length=255, blank=True)
    niu        = models.CharField(_("NIU"), max_length=100, blank=True)
    rccm       = models.CharField(_("RCCM"), max_length=100, blank=True)
    phone      = models.CharField(_("telephone"), max_length=60, blank=True)
    email      = models.CharField(_("email"), max_length=150, blank=True)
    address    = models.CharField(_("adresse"), max_length=255, blank=True)

    # ── Images ───────────────────────────────────────────────────────────────
    logo            = models.FileField(_("logo"), upload_to="tickets/logos/", null=True, blank=True)
    background_logo = models.FileField(_("logo d'arriere-plan"), upload_to="tickets/bg/", null=True, blank=True)

    # ── Couleurs ──────────────────────────────────────────────────────────────
    color_ink    = models.CharField(_("couleur encre"), max_length=9, default="#1a1a1a")
    color_accent = models.CharField(_("couleur accent"), max_length=9, default="#e6a817")
    color_band   = models.CharField(_("couleur bande"), max_length=9, default="#111111")

    # ── Format billet (mm) ────────────────────────────────────────────────────
    ticket_width_mm  = models.DecimalField(_("largeur billet (mm)"), max_digits=6, decimal_places=2, default=Decimal("203"))
    ticket_height_mm = models.DecimalField(_("hauteur billet (mm)"), max_digits=6, decimal_places=2, default=Decimal("82.55"))

    # ── Textes ────────────────────────────────────────────────────────────────
    recto_notice     = models.CharField(_("note (bas du recto)"), max_length=255, blank=True, default=DEFAULT_RECTO_NOTICE)
    verso_conditions = models.TextField(_("conditions (verso)"), blank=True, default=DEFAULT_VERSO_CONDITIONS)
    # Liste d'agences : [{"name": ..., "location": ..., "phone": ...}, ...]
    agencies_list    = models.JSONField(_("agences (verso)"), default=list, blank=True)

    # ── Documents colis & bagages ─────────────────────────────────────────────
    parcel_receipt_terms = models.TextField(_("mention conditions (recu colis)"),
                                             blank=True, default=DEFAULT_PARCEL_RECEIPT_TERMS)
    baggage_ticket_note  = models.CharField(_("note (ticket bagage)"), max_length=255,
                                            blank=True, default=DEFAULT_BAGGAGE_TICKET_NOTE)

    # ── Options ───────────────────────────────────────────────────────────────
    show_verso     = models.BooleanField(_("afficher le verso"), default=True)
    show_stub      = models.BooleanField(_("afficher le talon"), default=True)
    show_watermark = models.BooleanField(_("afficher le filigrane"), default=True)
    show_qr        = models.BooleanField(_("afficher le QR code"), default=True)

    # ── Mode avance (HTML brut) ────────────────────────────────────────────────
    custom_html = models.BooleanField(_("HTML avance"), default=False)
    html_recto  = models.TextField(_("HTML du billet (recto)"), blank=True, default=DEFAULT_TICKET_RECTO)
    html_verso  = models.TextField(_("HTML du verso"), blank=True, default=DEFAULT_TICKET_VERSO)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("modele de billet")

    def __str__(self):
        return f"Modele de billet ({self.company_id or 'global'})"
