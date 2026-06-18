from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    # ── Administration Django ──────────────────────────────────────────────
    path("admin/", admin.site.urls),

    # ── Traduction (Rosetta) ───────────────────────────────────────────────
    path("rosetta/", include("rosetta.urls")),

    # ── i18n switcher ─────────────────────────────────────────────────────
    path("i18n/", include("django.conf.urls.i18n")),

    # ── API v1 ────────────────────────────────────────────────────────────
    path("api/v1/", include("api.v1.router")),

    # ── OpenAPI / Swagger ─────────────────────────────────────────────────
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/",   SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]

# ── Fichiers media en développement ───────────────────────────────────────────
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
