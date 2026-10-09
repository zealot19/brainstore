# M05 plans de bus — partie 2/2 : suppressions destructives.
#
# Séparé de 0020 (qui fait le backfill DML) pour éviter l'erreur PostgreSQL
# « cannot ALTER TABLE fleet_vehicle because it has pending trigger events » :
# un ALTER/DROP ne peut pas suivre un UPDATE dans la même transaction. Ici,
# transaction neuve, aucun DML → le DDL s'exécute proprement.

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('voyages_config', '0022_remove_voyagessettings_archive_delay_days'),
    ]

    operations = [
        migrations.RemoveField(model_name='vehicleseatingassignment', name='company'),
        migrations.RemoveField(model_name='vehicleseatingassignment', name='created_by'),
        migrations.RemoveField(model_name='vehicleseatingassignment', name='deleted_by'),
        migrations.RemoveField(model_name='vehicleseatingassignment', name='seating_plan'),
        migrations.RemoveField(model_name='vehicleseatingassignment', name='updated_by'),
        migrations.RemoveField(model_name='vehicleseatingassignment', name='vehicle'),
        migrations.RemoveField(model_name='seatingplan', name='columns'),
        migrations.RemoveField(model_name='seatingplan', name='rows'),
        migrations.DeleteModel(name='PlanSeat'),
        migrations.DeleteModel(name='VehicleSeatingAssignment'),
    ]
