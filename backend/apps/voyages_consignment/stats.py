from django.utils import timezone
from apps.voyages_consignment.models import Parcel


def get_parcel_stats(company_id):
    today = timezone.localdate()
    base = Parcel.objects.filter(company_id=company_id, is_deleted=False)
    return {
        "registered": base.filter(status="registered").count(),
        "in_transit": base.filter(status="loaded").count(),
        "to_collect": base.filter(status="arrived").count(),
        "registered_today": base.filter(status="registered", created_at__date=today).count(),
    }
