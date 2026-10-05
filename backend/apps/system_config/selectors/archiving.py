from datetime import timedelta
from django.utils import timezone
from apps.system_config.selectors.parameter_selectors import get_param

ARCHIVE_WINDOW_KEY = "data.archive_window_days"


def archive_window_days(company_id) -> int:
    """Configured visibility window in days for a company; 0 = disabled/unset/invalid."""
    val = get_param(ARCHIVE_WINDOW_KEY, company_id=company_id, default=0)
    try:
        return max(0, int(val or 0))
    except (TypeError, ValueError):
        return 0


def apply_archive_window(qs, *, date_field, company_id, include_archived):
    """Restrict qs to rows whose `date_field` is within the company's window.
    No-op when the window is disabled (0) or include_archived is truthy (I1, I2)."""
    n = archive_window_days(company_id)
    if include_archived or not n:
        return qs
    cutoff = timezone.now() - timedelta(days=n)
    return qs.filter(**{f"{date_field}__gte": cutoff})


def wants_archived(request) -> bool:
    """Parse the per-request opt-out flag from the query string (I6)."""
    return str(request.query_params.get("include_archived", "")).lower() in ("1", "true", "yes")
