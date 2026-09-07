from datetime import timedelta

from django.conf import settings
from django.db import models
from django.utils import timezone


class WhatsAppSession(models.Model):
    """Per-user conversation state for the WhatsApp booking bot."""

    class Step(models.TextChoices):
        START = "start"
        ASK_FROM = "ask_from"
        ASK_TO = "ask_to"
        ASK_DATE = "ask_date"
        SHOW_TRIPS = "show_trips"
        ASK_NAME = "ask_name"
        ASK_PAY_METHOD = "ask_pay_method"
        ASK_PAYMENT_PHONE = "ask_payment_phone"
        CONFIRM = "confirm"
        AWAIT_PAYMENT = "await_payment"
        DONE = "done"

    wa_id = models.CharField(max_length=32, unique=True, db_index=True)
    step = models.CharField(max_length=24, choices=Step.choices, default=Step.START)
    context = models.JSONField(default=dict, blank=True)
    last_message_id = models.CharField(max_length=128, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "session WhatsApp"
        verbose_name_plural = "sessions WhatsApp"

    def __str__(self):
        return f"{self.wa_id} [{self.step}]"

    @property
    def is_expired(self):
        ttl = getattr(settings, "WHATSAPP_SESSION_TTL_MIN", 30)
        return timezone.now() - self.updated_at > timedelta(minutes=ttl)

    def reset(self):
        self.step = self.Step.START
        self.context = {}

    @classmethod
    def get_or_start(cls, wa_id):
        obj, created = cls.objects.get_or_create(wa_id=wa_id)
        return obj, created
