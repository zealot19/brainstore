"""WhatsApp Cloud API adapter — the only place that talks HTTP to Meta.

Uses stdlib urllib (like apps/online_booking/campay/client.py); `_post` is the
single mock point in tests.
"""
import json
import logging
import uuid
from urllib import request as urllib_request, error as urllib_error

from django.conf import settings

logger = logging.getLogger(__name__)


def _base_url():
    return (f"https://graph.facebook.com/{settings.WHATSAPP_API_VERSION}"
            f"/{settings.WHATSAPP_PHONE_NUMBER_ID}")


def _post(path, payload, *, is_json=True, data_bytes=None, headers=None):
    url = f"{_base_url()}/{path}"
    hdrs = {"Authorization": f"Bearer {settings.WHATSAPP_TOKEN}"}
    if headers:
        hdrs.update(headers)
    if is_json:
        body = json.dumps(payload).encode()
        hdrs["Content-Type"] = "application/json"
    else:
        body = data_bytes
    req = urllib_request.Request(url, data=body, headers=hdrs, method="POST")
    try:
        with urllib_request.urlopen(req, timeout=20) as resp:
            return json.loads(resp.read().decode() or "{}")
    except urllib_error.HTTPError as e:
        logger.error("WhatsApp API error %s: %s", e.code, e.read().decode(errors="ignore"))
        raise
    except urllib_error.URLError as e:
        logger.error("WhatsApp API unreachable: %s", e)
        raise


def _send(payload):
    return _post("messages", {"messaging_product": "whatsapp", **payload})


def send_text(to, body):
    return _send({"to": to, "type": "text", "text": {"body": body}})


def send_list(to, header, body, rows, button="Choisir"):
    return _send({
        "to": to, "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {"type": "text", "text": header[:60]},
            "body": {"text": body[:1024]},
            "action": {
                "button": button[:20],
                "sections": [{"rows": [
                    {"id": r["id"], "title": r["title"][:24]} for r in rows[:10]
                ]}],
            },
        },
    })


def send_buttons(to, body, buttons):
    return _send({
        "to": to, "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {"text": body[:1024]},
            "action": {"buttons": [
                {"type": "reply", "reply": {"id": b["id"], "title": b["title"][:20]}}
                for b in buttons[:3]
            ]},
        },
    })


def upload_media(png_bytes, mime="image/png"):
    """Upload media to /media (multipart) and return the media id."""
    boundary = uuid.uuid4().hex

    def field(name, value):
        return (f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"'
                f'\r\n\r\n{value}\r\n').encode()

    body = b"".join([
        field("messaging_product", "whatsapp"),
        (f'--{boundary}\r\nContent-Disposition: form-data; name="file"; '
         f'filename="ticket.png"\r\nContent-Type: {mime}\r\n\r\n').encode(),
        png_bytes, b"\r\n",
        f"--{boundary}--\r\n".encode(),
    ])
    resp = _post("media", None, is_json=False, data_bytes=body,
                 headers={"Content-Type": f"multipart/form-data; boundary={boundary}"})
    return resp.get("id", "")


def send_image(to, media_id, caption=""):
    return _send({"to": to, "type": "image",
                  "image": {"id": media_id, "caption": caption[:1024]}})
