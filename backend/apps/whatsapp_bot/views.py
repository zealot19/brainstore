from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class WhatsAppWebhookView(APIView):
    """Webhook Cloud API — implémenté à la tâche 8."""
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(status=200)

    def post(self, request):
        return Response(status=200)
