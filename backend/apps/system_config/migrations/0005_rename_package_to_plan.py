# Hand-written migration: rename Package model to Plan,
# rename Company.package FK to plan,
# rename Subscription.package FK to plan,
# update verbose_names to match the new model name.

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("system_config", "0004_package_has_accounting_package_has_administration_and_more"),
    ]

    operations = [
        # 1. Rename the model (renames the DB table system_config_package -> system_config_plan)
        migrations.RenameModel(
            old_name="Package",
            new_name="Plan",
        ),
        # 2. Update Plan Meta verbose_name (was 'package', now 'plan')
        migrations.AlterModelOptions(
            name="plan",
            options={
                "ordering": ["sort_order"],
                "verbose_name": "plan",
                "verbose_name_plural": "plans",
            },
        ),
        # 3. Rename Company.package FK column -> plan
        migrations.RenameField(
            model_name="company",
            old_name="package",
            new_name="plan",
        ),
        # 4. Update Company.plan verbose_name (was 'package', now 'plan')
        migrations.AlterField(
            model_name="company",
            name="plan",
            field=models.ForeignKey(
                "system_config.Plan",
                verbose_name="plan",
                on_delete=django.db.models.deletion.PROTECT,
                null=True,
                blank=True,
                related_name="companies",
            ),
        ),
        # 5. Rename Subscription.package FK column -> plan
        migrations.RenameField(
            model_name="subscription",
            old_name="package",
            new_name="plan",
        ),
        # 6. Update Subscription.plan verbose_name (was 'package', now 'plan')
        migrations.AlterField(
            model_name="subscription",
            name="plan",
            field=models.ForeignKey(
                "system_config.Plan",
                verbose_name="plan",
                on_delete=django.db.models.deletion.PROTECT,
            ),
        ),
    ]
