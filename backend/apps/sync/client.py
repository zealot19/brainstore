"""Tiny HTTP client for inter-instance sync calls (stdlib urllib)."""
import json
import urllib.request


def request_json(url, token, method="GET", body=None, timeout=30):
    from apps.sync.schema import schema_fingerprint
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(
        url, data=data, method=method,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "X-Schema-Version": schema_fingerprint(),
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode() or "{}")
