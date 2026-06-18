from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sync_scig_sage', '0002_sageconnection'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sageconnection',
            old_name='password_encrypted',
            new_name='_password_encrypted',
        ),
    ]
