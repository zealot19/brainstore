import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from apps.sync.schema import schema_fingerprint

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def _cfg(settings):
    settings.SYNC_ENABLED = True
    settings.SYNC_TOKEN = "secret"


def test_fingerprint_is_stable_and_nonempty():
    assert schema_fingerprint() and schema_fingerprint() == schema_fingerprint()


def test_pull_rejects_schema_mismatch():
    r = APIClient().get(reverse("sync-pull") + "?since=0",
                        HTTP_AUTHORIZATION="Bearer secret",
                        HTTP_X_SCHEMA_VERSION="deadbeef")
    assert r.status_code == 409


def test_pull_accepts_matching_schema():
    r = APIClient().get(reverse("sync-pull") + "?since=0",
                        HTTP_AUTHORIZATION="Bearer secret",
                        HTTP_X_SCHEMA_VERSION=schema_fingerprint())
    assert r.status_code == 200


def test_push_rejects_schema_mismatch():
    r = APIClient().post(reverse("sync-push"), {"changes": []}, format="json",
                         HTTP_AUTHORIZATION="Bearer secret",
                         HTTP_X_SCHEMA_VERSION="deadbeef")
    assert r.status_code == 409
