from apps.voyages_config.models import CrewMemberType

_DEFAULTS = [
    ("DRIVER", "Chauffeur", True),
    ("CONVOYEUR", "Convoyeur", False),
    ("CONTROLEUR", "Contrôleur", False),
]


def seed_crew_member_types(company, created_by=None) -> int:
    created = 0
    for code, name, is_driver in _DEFAULTS:
        if CrewMemberType.objects.filter(company=company, code=code).exists():
            continue
        CrewMemberType.objects.create(company=company, code=code, name=name, is_driver=is_driver, created_by=created_by)
        created += 1
    return created
