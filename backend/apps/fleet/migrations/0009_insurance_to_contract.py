import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


def map_contracts(apps, schema_editor):
    Contract = apps.get_model("fleet", "Contract")
    InterventionType = apps.get_model("fleet", "InterventionType")
    Period = apps.get_model("fleet", "Period")
    RecurringCost = apps.get_model("fleet", "RecurringCost")
    import datetime

    label = {"comprehensive": "Assurance tous risques",
             "third_party": "Responsabilité civile",
             "all_risks": "Assurance multi-risques",
             "other": "Autre contrat"}
    annual, _ = Period.objects.get_or_create(
        name="Annuel", company_id=None, defaults={"is_active": True})
    today = datetime.date.today()

    for c in Contract.objects.all():
        it, _ = InterventionType.objects.get_or_create(
            name=label.get(c.insurance_type, "Autre contrat"), company_id=None,
            defaults={"category": "CONTRACT", "is_active": True})
        c.intervention_type = it
        c.name = (f"{c.company_name} {c.policy_number}".strip()) or it.name
        extra = []
        if c.company_name:
            extra.append(f"Compagnie : {c.company_name}")
        if c.insurer_contact:
            extra.append(f"Contact : {c.insurer_contact}")
        if extra:
            c.terms = "\n".join(extra) + (("\n" + c.terms) if c.terms else "")
        c.status = "active" if c.end_date >= today else "expired"
        c.save(update_fields=["intervention_type", "name", "terms", "status"])
        if c.premium_amount:
            RecurringCost.objects.create(
                contract=c, description="Prime", amount=c.premium_amount,
                currency=c.currency or "XAF", period=annual)


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('fleet', '0008_alter_service_description'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel('Insurance', 'Contract'),
        migrations.AlterModelOptions(
            name='contract',
            options={'ordering': ['-start_date'], 'verbose_name': 'contrat',
                     'verbose_name_plural': 'contrats'},
        ),
        migrations.AlterField(
            model_name='contract', name='vehicle',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                    related_name='contracts', to='fleet.vehicle',
                                    verbose_name='véhicule'),
        ),
        migrations.AlterField(
            model_name='contract', name='policy_number',
            field=models.CharField(blank=True, max_length=100,
                                   verbose_name='numéro de police / référence'),
        ),
        migrations.AlterField(
            model_name='contract', name='deductible',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=18,
                                      null=True, verbose_name='franchise'),
        ),
        migrations.AddField(
            model_name='contract', name='name',
            field=models.CharField(default='', max_length=255, verbose_name='nom du contrat'),
        ),
        migrations.AddField(
            model_name='contract', name='reference',
            field=models.CharField(blank=True, default='', max_length=100,
                                   verbose_name='référence externe'),
        ),
        migrations.AddField(
            model_name='contract', name='creation_date',
            field=models.DateField(blank=True, null=True, verbose_name='date de signature'),
        ),
        migrations.AddField(
            model_name='contract', name='activation_cost',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=18,
                                      verbose_name="coût d'activation"),
        ),
        migrations.AddField(
            model_name='contract', name='currency',
            field=models.CharField(default='XAF', max_length=3, verbose_name='devise'),
        ),
        migrations.AddField(
            model_name='contract', name='status',
            field=models.CharField(
                choices=[('draft', 'Brouillon'), ('active', 'Actif'),
                         ('expired', 'Expiré'), ('cancelled', 'Annulé')],
                default='active', max_length=12, verbose_name='statut'),
        ),
        migrations.AddField(
            model_name='contract', name='terms',
            field=models.TextField(blank=True, default='', verbose_name='conditions générales'),
        ),
        migrations.AddField(
            model_name='contract', name='billing_period',
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='contracts', to='fleet.period',
                                    verbose_name='périodicité de facturation'),
        ),
        migrations.AddField(
            model_name='contract', name='driver',
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='contracts', to='fleet.externaldriver',
                                    verbose_name='conducteur'),
        ),
        migrations.AddField(
            model_name='contract', name='responsible',
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='managed_contracts',
                                    to=settings.AUTH_USER_MODEL, verbose_name='responsable'),
        ),
        migrations.AddField(
            model_name='contract', name='supplier',
            field=models.ForeignKey(blank=True, null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='contracts', to='fleet.supplier',
                                    verbose_name='fournisseur'),
        ),
        migrations.AddField(
            model_name='contract', name='included_services',
            field=models.ManyToManyField(blank=True, related_name='included_in_contracts',
                                         to='fleet.interventiontype', verbose_name='services inclus'),
        ),
        migrations.AddField(
            model_name='contract', name='intervention_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name='contracts', to='fleet.interventiontype',
                                    verbose_name='type'),
        ),
        migrations.CreateModel(
            name='RecurringCost',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='créé le')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='modifié le')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='supprimé')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='supprimé le')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='identifiant')),
                ('is_active', models.BooleanField(default=True, verbose_name='actif')),
                ('description', models.CharField(max_length=255, verbose_name='description')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=18, verbose_name='montant')),
                ('currency', models.CharField(default='XAF', max_length=3, verbose_name='devise')),
                ('contract', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recurring_costs', to='fleet.contract', verbose_name='contrat')),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='créé par')),
                ('deleted_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='supprimé par')),
                ('period', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='recurring_costs', to='fleet.period', verbose_name='périodicité')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='modifié par')),
            ],
            options={
                'verbose_name': 'coût récurrent',
                'verbose_name_plural': 'coûts récurrents',
                'ordering': ['contract', 'description'],
                'abstract': False,
            },
        ),
        migrations.RunPython(map_contracts, noop),
        migrations.AlterField(
            model_name='contract', name='intervention_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                                    related_name='contracts', to='fleet.interventiontype',
                                    verbose_name='type'),
        ),
        migrations.RemoveField(model_name='contract', name='company_name'),
        migrations.RemoveField(model_name='contract', name='insurance_type'),
        migrations.RemoveField(model_name='contract', name='premium_amount'),
        migrations.RemoveField(model_name='contract', name='insurer_contact'),
    ]
