from django.db import models
from apps.core.models import BaseModel


class Article(BaseModel):
    """
    Article cached from Sage 100 (F_ARTICLE).
    Read-only — never created or modified directly in this system.
    """
    company = models.ForeignKey(
        "system_config.Company",
        on_delete=models.CASCADE,
        related_name="scig_articles",
    )
    sage_reference = models.CharField(max_length=30, db_index=True)
    designation = models.CharField(max_length=200)
    barcode = models.CharField(max_length=50, blank=True, default="", db_index=True)
    family = models.CharField(max_length=100, blank=True, default="")
    sub_family = models.CharField(max_length=100, blank=True, default="")
    has_size_variant = models.BooleanField(default=False)
    has_color_variant = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_synced_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ("company", "sage_reference")
        ordering = ["designation"]

    def __str__(self):
        return f"{self.sage_reference} — {self.designation}"


class ArticleVariant(BaseModel):
    """
    Variant (size × color combination) cached from Sage 100 (F_ARTGAMME).
    AG_Gamme1 = Taille, AG_Gamme2 = Couleur (Sage 100 convention).
    """
    article = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        related_name="variants",
    )
    # AG_Ref in Sage — unique reference for this variant combination
    sage_ref_variant = models.CharField(max_length=50, db_index=True)
    size = models.CharField(max_length=30, blank=True, default="")
    color = models.CharField(max_length=50, blank=True, default="")
    color_code = models.CharField(max_length=20, blank=True, default="")
    barcode = models.CharField(max_length=50, blank=True, default="", db_index=True)
    price_normal = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price_sale = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = ("article", "size", "color")
        ordering = ["size", "color"]

    def __str__(self):
        parts = [self.article.sage_reference]
        if self.size:
            parts.append(self.size)
        if self.color:
            parts.append(self.color)
        return " | ".join(parts)

    @property
    def display_label(self):
        return f"{self.article.designation} — {self.size} / {self.color}".strip(" /")
