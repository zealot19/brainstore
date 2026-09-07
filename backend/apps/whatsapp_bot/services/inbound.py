"""Inbound webhook helpers: signature verification + message parsing."""
import hashlib
import hmac

from django.conf import settings


def verify_signature(raw_body: bytes, header: str) -> bool:
    secret = getattr(settings, "WHATSAPP_APP_SECRET", "")
    if not secret:
        return True  # not configured (dev)
    if not header or not header.startswith("sha256="):
        return False
    expected = hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(header.split("=", 1)[1], expected)


def parse_messages(payload: dict):
    """Yield (message_id, wa_id, value) for each inbound user message.

    `value` is the text body, or the id of an interactive list/button reply.
    """
    out = []
    for entry in payload.get("entry", []):
        for change in entry.get("changes", []):
            for msg in change.get("value", {}).get("messages", []):
                mid = msg.get("id", "")
                wa_id = msg.get("from", "")
                mtype = msg.get("type")
                if mtype == "text":
                    value = msg.get("text", {}).get("body", "")
                elif mtype == "interactive":
                    inter = msg.get("interactive", {})
                    if inter.get("type") == "list_reply":
                        value = inter.get("list_reply", {}).get("id", "")
                    elif inter.get("type") == "button_reply":
                        value = inter.get("button_reply", {}).get("id", "")
                    else:
                        value = ""
                elif mtype == "button":
                    value = msg.get("button", {}).get("payload", "")
                else:
                    value = ""
                out.append((mid, wa_id, value))
    return out
