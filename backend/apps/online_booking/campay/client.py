"""
Campay payment gateway client.
Campay aggregates MTN Mobile Money and Orange Money in Cameroon.
Docs: https://docs.campay.net
"""
import json
import logging
from urllib import request as urllib_request, error as urllib_error
from urllib.parse import urljoin

from django.conf import settings
from django.core.cache import cache

logger = logging.getLogger(__name__)

_TOKEN_CACHE_KEY = "campay_access_token"
_TOKEN_TTL       = 82800  # 23 h — Campay tokens last 24 h


class CampayError(Exception):
    pass


class CampayClient:
    def __init__(self):
        self.base_url = getattr(settings, "CAMPAY_BASE_URL",
                                "https://demo.campay.net/api/")
        self.username = getattr(settings, "CAMPAY_APP_USERNAME", "")
        self.password = getattr(settings, "CAMPAY_APP_PASSWORD", "")

    # ── Internal helpers ───────────────────────────────────────────────────────

    def _url(self, path: str) -> str:
        return urljoin(self.base_url, path)

    def _request(self, method: str, path: str, *, data=None, token=None) -> dict:
        url     = self._url(path)
        headers = {"Content-Type": "application/json"}
        if token:
            headers["Authorization"] = f"Token {token}"

        body = json.dumps(data).encode() if data else None
        req  = urllib_request.Request(url, data=body, headers=headers, method=method)
        try:
            with urllib_request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode())
        except urllib_error.HTTPError as exc:
            body_text = exc.read().decode()
            logger.error("Campay %s %s → %s: %s", method, path, exc.code, body_text)
            raise CampayError(f"Campay HTTP {exc.code}: {body_text}") from exc
        except Exception as exc:
            logger.error("Campay request failed: %s", exc)
            raise CampayError(str(exc)) from exc

    # ── Token management ───────────────────────────────────────────────────────

    def get_token(self) -> str:
        cached = cache.get(_TOKEN_CACHE_KEY)
        if cached:
            return cached
        resp = self._request("POST", "token/", data={
            "username": self.username,
            "password": self.password,
        })
        token = resp.get("token", "")
        if not token:
            raise CampayError("No token returned from Campay.")
        cache.set(_TOKEN_CACHE_KEY, token, _TOKEN_TTL)
        return token

    # ── Payment initiation ─────────────────────────────────────────────────────

    def collect(
        self, *,
        amount: str,
        from_phone: str,
        description: str,
        external_reference: str,
        redirect_url: str = "",
        webhook_url: str = "",
    ) -> dict:
        """
        Initiate a Mobile Money payment.
        Returns Campay's response which includes `reference` (their transaction ID).
        """
        token = self.get_token()
        return self._request("POST", "collect/", token=token, data={
            "amount":             amount,
            "currency":           "XAF",
            "from":               from_phone,
            "description":        description,
            "external_reference": external_reference,
            "redirect_url":       redirect_url,
            "webhook_url":        webhook_url,
        })

    # ── Status check ───────────────────────────────────────────────────────────

    def check_transaction(self, reference: str) -> dict:
        """
        Fetch the status of a Campay transaction by reference.
        Possible `status` values: SUCCESSFUL, FAILED, PENDING.
        """
        token = self.get_token()
        return self._request("GET", f"transaction/{reference}/", token=token)
