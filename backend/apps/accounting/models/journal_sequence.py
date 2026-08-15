from django.db import models
from apps.core.models import BaseModel


class JournalSequence(BaseModel):
    company     = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="journal_sequences")
    journal     = models.ForeignKey("accounting.Journal", on_delete=models.CASCADE, related_name="sequences")
    year        = models.IntegerField()
    last_number = models.IntegerField(default=0)

    class Meta(BaseModel.Meta):
        unique_together = [("company", "journal", "year")]
