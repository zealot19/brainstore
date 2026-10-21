"""Champs traduisibles (modeltranslation) pour la trésorerie.

Les modes de paiement intégrés sont saisis en français ; cette déclaration ajoute
une colonne par langue (name_fr / name_en) pour pouvoir les traduire."""
from modeltranslation.translator import register, TranslationOptions
from apps.treasury.models import PaymentMethod


@register(PaymentMethod)
class PaymentMethodTR(TranslationOptions):
    fields = ("name",)
