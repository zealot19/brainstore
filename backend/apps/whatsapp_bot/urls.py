from django.urls import path
from apps.whatsapp_bot import views

urlpatterns = [
    path("webhook/", views.WhatsAppWebhookView.as_view(), name="whatsapp-webhook"),
]
