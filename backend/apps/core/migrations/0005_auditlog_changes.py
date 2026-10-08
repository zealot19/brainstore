from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0004_deterministic_currency_uuids"),
    ]

    operations = [
        migrations.AddField(
            model_name="auditlog",
            name="changes",
            field=models.JSONField(blank=True, default=dict, verbose_name="modifications"),
        ),
    ]
