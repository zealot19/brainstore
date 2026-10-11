"""M06 — Garage (services/interventions) et Accidents retirés de l'UI/API.

Les modèles et les tables sont conservés ; seuls les endpoints sont retirés.
Ces tests verrouillent l'absence des routes (toute réintroduction accidentelle
les fera échouer)."""
import pytest
from django.urls import resolve, Resolver404


REMOVED_PATHS = [
    "/api/v1/fleet/services/",
    "/api/v1/fleet/services/00000000-0000-0000-0000-000000000000/",
    "/api/v1/fleet/services/00000000-0000-0000-0000-000000000000/start/",
    "/api/v1/fleet/accidents/",
    "/api/v1/fleet/accidents/00000000-0000-0000-0000-000000000000/",
    "/api/v1/fleet/vehicles/00000000-0000-0000-0000-000000000000/services/",
    "/api/v1/fleet/vehicles/00000000-0000-0000-0000-000000000000/accidents/",
]

KEPT_PATHS = [
    "/api/v1/fleet/vehicles/",
    "/api/v1/fleet/contracts/",
    "/api/v1/fleet/assignments/",
]


@pytest.mark.parametrize("path", REMOVED_PATHS)
def test_removed_endpoints_do_not_resolve(path):
    with pytest.raises(Resolver404):
        resolve(path)


@pytest.mark.parametrize("path", KEPT_PATHS)
def test_kept_endpoints_still_resolve(path):
    # Ne doit pas lever : la flotte reste par ailleurs intacte.
    assert resolve(path) is not None


def test_models_still_importable():
    # Les tables/modèles sont conservés (suppression réversible).
    from apps.fleet.models import Service, Accident
    assert Service is not None and Accident is not None
