# Backend Django — image de déploiement (Railway).
# Contexte de build = dossier backend/ (Root Directory Railway).
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    DJANGO_SETTINGS_MODULE=config.settings.production

WORKDIR /app

# Dépendances Python d'abord (cache de couche). On copie TOUT requirements/ pour
# que les références imbriquées (production.txt -> -r base.txt) se résolvent.
COPY requirements/ requirements/
RUN pip install --upgrade pip && pip install -r requirements/production.txt

# Code applicatif
COPY . .

# Statiques collectés au build (servis par WhiteNoise). SECRET_KEY factice suffit ;
# collectstatic n'accède pas à la base.
RUN SECRET_KEY=build-only python manage.py collectstatic --noinput

# Railway fournit $PORT. Les migrations tournent en pre-deploy (railway.json).
CMD ["sh", "-c", "gunicorn config.wsgi:application --bind 0.0.0.0:${PORT:-8000}"]
