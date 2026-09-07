import json
import logging

from django.conf import settings
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.whatsapp_bot.models import WhatsAppSession
from apps.whatsapp_bot.services import engine, wa_client
from apps.whatsapp_bot.services.inbound import parse_messages, verify_signature

logger = logging.getLogger(__name__)


class WhatsAppWebhookView(APIView):
    """WhatsApp Cloud API webhook: GET verification + signed POST for messages."""
    permission_classes = [AllowAny]

    def get(self, request):
        if (request.query_params.get("hub.mode") == "subscribe"
                and request.query_params.get("hub.verify_token")
                == getattr(settings, "WHATSAPP_VERIFY_TOKEN", "")):
            return HttpResponse(request.query_params.get("hub.challenge", ""),
                                content_type="text/plain")
        return Response(status=403)

    def post(self, request):
        if not verify_signature(request.body, request.headers.get("X-Hub-Signature-256", "")):
            return Response(status=403)
        try:
            payload = json.loads(request.body or b"{}")
        except ValueError:
            return Response(status=200)

        for mid, wa_id, value in parse_messages(payload):
            if not wa_id:
                continue
            session, _ = WhatsAppSession.get_or_start(wa_id)
            if mid and session.last_message_id == mid:
                continue  # dedupe Meta retries
            try:
                for m in engine.handle_message(wa_id, value):
                    _deliver(m)
            except Exception:
                logger.exception("WhatsApp handling failed for %s", wa_id)
            if mid:
                WhatsAppSession.objects.filter(wa_id=wa_id).update(last_message_id=mid)
        return Response(status=200)


def _deliver(m):
    if m.kind == "text":
        wa_client.send_text(m.to, m.body)
    elif m.kind == "list":
        wa_client.send_list(m.to, m.header, m.body, m.rows)
    elif m.kind == "buttons":
        wa_client.send_buttons(m.to, m.body, m.buttons)
