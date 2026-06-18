import uuid
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sync_scig_sage', '0001_initial'),
        ('system_config', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SageConnection',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='créé le')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='modifié le')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='supprimé')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='supprimé le')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='identifiant')),
                ('is_active', models.BooleanField(default=True, verbose_name='actif')),
                ('server', models.CharField(help_text='Adresse IP ou hostname du serveur SQL Server (ex: 192.168.1.10)', max_length=255)),
                ('port', models.PositiveIntegerField(default=1433, help_text='Port SQL Server (défaut: 1433)')),
                ('database', models.CharField(help_text='Nom de la base de données Sage 100 (ex: GESCOM)', max_length=100)),
                ('username', models.CharField(help_text='Utilisateur SQL Server (ex: sa)', max_length=100)),
                ('password_encrypted', models.TextField(blank=True, db_column='password_encrypted', default='')),
                ('last_tested_at', models.DateTimeField(blank=True, null=True)),
                ('last_test_success', models.BooleanField(blank=True, null=True)),
                ('last_test_error', models.TextField(blank=True, default='')),
                ('company', models.OneToOneField(
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='sage_connection',
                    to='system_config.company',
                )),
                ('created_by', models.ForeignKey(
                    blank=True, null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+', to=settings.AUTH_USER_MODEL,
                    verbose_name='créé par',
                )),
                ('updated_by', models.ForeignKey(
                    blank=True, null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+', to=settings.AUTH_USER_MODEL,
                    verbose_name='modifié par',
                )),
                ('deleted_by', models.ForeignKey(
                    blank=True, null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+', to=settings.AUTH_USER_MODEL,
                    verbose_name='supprimé par',
                )),
            ],
            options={
                'verbose_name': 'Connexion Sage 100',
                'verbose_name_plural': 'Connexions Sage 100',
            },
        ),
    ]
