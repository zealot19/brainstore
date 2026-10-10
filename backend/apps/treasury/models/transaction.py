from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Transaction(BaseModel):
    """Any financial movement — income or expense."""

    class Type(models.TextChoices):
        INCOME  = "income",  _("Income")
        EXPENSE = "expense", _("Expense")

    class Category(models.TextChoices):
        # Income
        TICKET_SALES    = "ticket_sales",    _("Ticket Sales")
        PARCEL_SHIPPING = "parcel_shipping", _("Parcel Shipping")
        BAGGAGE         = "baggage",         _("Bagages")
        PARCEL_DELIVERY = "parcel_delivery", _("Livraison colis")
        CHARTER         = "charter",         _("Charter")
        OTHER_INCOME    = "other_income",    _("Other Income")
        # Expense
        FUEL            = "fuel",            _("Fuel")
        MAINTENANCE     = "maintenance",     _("Maintenance")
        SALARY_ADVANCE  = "salary_advance",  _("Salary Advance")
        SUPPLIES        = "supplies",        _("Supplies / Office")
        RENT            = "rent",            _("Rent")
        OTHER_EXPENSE   = "other_expense",   _("Other Expense")
        VOYAGE_EXPENSE  = "voyage_expense",  _("Dépense voyage")
        GENERAL_EXPENSE = "general_expense", _("Dépense générale")
        REFUND          = "refund",          _("Remboursement")

    class PaymentMode(models.TextChoices):
        CASH         = "cash",         _("Cash")
        MOBILE_MONEY = "mobile_money", _("Mobile Money")
        TRANSFER     = "transfer",     _("Bank Transfer")
        CHECK        = "check",        _("Check")

    class AccountType(models.TextChoices):
        CASH = "cash", _("Cash Register")
        BANK = "bank", _("Bank Account")

    class Status(models.TextChoices):
        VALIDATED   = "validated",   _("Validée")
        PENDING     = "pending",     _("En attente")
        INVALIDATED = "invalidated", _("Invalidée")

    company          = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                          on_delete=models.CASCADE, related_name="transactions")
    agency           = models.ForeignKey("system_config.Agency", verbose_name=_("agence"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="transactions")
    reference        = models.CharField(_("reference"), max_length=30, blank=True)
    transaction_type = models.CharField(_("type"), max_length=10, choices=Type.choices)
    category         = models.CharField(_("category"), max_length=30, choices=Category.choices)
    status           = models.CharField(_("statut"), max_length=12, choices=Status.choices,
                                        default=Status.VALIDATED)
    validated_by     = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("validée par"),
                                         null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    validated_at     = models.DateTimeField(_("validée le"), null=True, blank=True)
    account_type     = models.CharField(_("account type"), max_length=10,
                                         choices=AccountType.choices)

    # Account source — one of these is set
    cash_session  = models.ForeignKey("treasury.CashSession", verbose_name=_("cash session"),
                                       on_delete=models.PROTECT, null=True, blank=True,
                                       related_name="transactions")
    bank_account  = models.ForeignKey("treasury.BankAccount", verbose_name=_("bank account"),
                                       on_delete=models.PROTECT, null=True, blank=True,
                                       related_name="transactions")

    amount           = models.DecimalField(_("amount"), max_digits=12, decimal_places=2)
    payment_mode     = models.CharField(_("payment mode"), max_length=20,
                                         choices=PaymentMode.choices)
    description      = models.TextField(_("description"), blank=True)
    transaction_date = models.DateField(_("date"), default=timezone.now)

    # Optional cross-module references
    trip    = models.ForeignKey("voyage.Trip", verbose_name=_("trip"),
                                 on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name="transactions")
    booking = models.ForeignKey("ticketing.Booking", verbose_name=_("booking"),
                                 on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name="transactions")
    parcel  = models.ForeignKey("parcel.Parcel", verbose_name=_("parcel"),
                                 on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name="transactions")
    voyage_booking = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation voyage"),
                                       on_delete=models.SET_NULL, null=True, blank=True,
                                       related_name="treasury_transactions")
    voyages_parcel  = models.ForeignKey("voyages_consignment.Parcel", verbose_name=_("colis"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="treasury_transactions")
    voyages_baggage = models.ForeignKey("voyages_consignment.Baggage", verbose_name=_("bagage"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="treasury_transactions")
    voyage_expense  = models.ForeignKey("voyages_trips.TripExpense", verbose_name=_("dépense voyage"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="treasury_transactions")
    vehicle = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    general_expense = models.ForeignKey("treasury.GeneralExpense", verbose_name=_("dépense générale"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="transactions")
    counterpart_account = models.ForeignKey("accounting.Account", verbose_name=_("compte de contrepartie"),
                                            on_delete=models.SET_NULL, null=True, blank=True, related_name="+")

    journal_entry = models.ForeignKey("accounting.JournalEntry", verbose_name=_("pièce comptable"),
                                      null=True, blank=True, on_delete=models.SET_NULL, related_name="+")

    class Meta(BaseModel.Meta):
        verbose_name = _("transaction")
        verbose_name_plural = _("transactions")
        ordering = ["-transaction_date", "-created_at"]

    def __str__(self):
        return f"{self.reference} — {self.get_category_display()} {self.amount}"
