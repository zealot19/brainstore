from django.utils.translation import gettext_lazy as _
from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status


class ApplicationError(Exception):
    """Erreur métier générique levée depuis les services."""
    def __init__(self, message, extra=None):
        self.message = message
        self.extra = extra or {}
        super().__init__(message)


class PermissionDeniedError(ApplicationError):
    """Accès refusé à une ressource ou action."""


class TenantError(ApplicationError):
    """Erreur liée à la résolution ou l'isolation du tenant."""


def custom_exception_handler(exc, context):
    """
    Handler DRF uniforme : toutes les erreurs retournent la même enveloppe JSON.
    {
        "success": false,
        "error": {
            "code": "...",
            "message": "...",
            "details": {}
        }
    }
    """
    response = exception_handler(exc, context)

    if isinstance(exc, ApplicationError):
        return Response(
            {
                "success": False,
                "error": {
                    "code": exc.__class__.__name__,
                    "message": str(exc.message),
                    "details": exc.extra,
                },
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    if response is not None:
        response.data = {
            "success": False,
            "error": {
                "code": response.status_code,
                "message": _("Une erreur s'est produite."),
                "details": response.data,
            },
        }

    return response
