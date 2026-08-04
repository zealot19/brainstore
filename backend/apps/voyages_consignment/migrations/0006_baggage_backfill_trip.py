from django.db import migrations


def backfill_trip(apps, schema_editor):
    """Renseigne le voyage du bagage depuis le billet (les bagages existants
    étaient tous rattachés à un billet, qui portait déjà le voyage)."""
    Baggage = apps.get_model("voyages_consignment", "Baggage")
    for bag in Baggage.objects.filter(trip__isnull=True, ticket__isnull=False):
        bag.trip_id = bag.ticket.trip_id
        bag.save(update_fields=["trip"])


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("voyages_consignment", "0005_baggage_birth_date_baggage_civility_and_more"),
    ]

    operations = [
        migrations.RunPython(backfill_trip, noop),
    ]
