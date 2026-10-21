"""Champs traduisibles (modeltranslation) pour la configuration voyages.

Données de référence intégrées (types de dépense, types & natures de colis, types
de membre d'équipage) : une colonne par langue (…_fr / …_en) pour les traduire."""
from modeltranslation.translator import register, TranslationOptions
from apps.voyages_config.models import (
    ExpenseType, ConsignmentType, ConsignmentNature, CrewMemberType,
)


@register(ExpenseType)
class ExpenseTypeTR(TranslationOptions):
    fields = ("name",)


@register(ConsignmentType)
class ConsignmentTypeTR(TranslationOptions):
    fields = ("label",)


@register(ConsignmentNature)
class ConsignmentNatureTR(TranslationOptions):
    fields = ("name",)


@register(CrewMemberType)
class CrewMemberTypeTR(TranslationOptions):
    fields = ("name",)
