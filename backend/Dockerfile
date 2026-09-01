# Backend Django — image de déploiement (Railway).
# Contexte de build = dossier backend/ (Root Directory Railway).
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    DJANGO_SETTINGS_MODULE=config.settings.production

WORKDIR /app

# Dépendances système WeasyPrint 63 (rendu PDF des rapports ET des bons/reçus).
# libpangoft2 + libglib/libgobject + harfbuzz/fontconfig sont requis par WeasyPrint ;
# sans eux, `from weasyprint import HTML` lève OSError (libgobject/libpangoft2 introuvable).
RUN apt-get update && apt-get install -y --no-install-recommends \
    libglib2.0-0 libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 \
    libgdk-pixbuf-2.0-0 libcairo2 libffi8 libharfbuzz0b libfontconfig1 \
    shared-mime-info fonts-dejavu \
    && rm -rf /var/lib/apt/lists/*

# Dépendances Python d'abord (cache de couche). On copie TOUT requirements/ pour
# que les références imbriquées (production.txt -> -r base.txt) se résolvent.
COPY requirements/ requirements/
RUN pip install --upgrade pip && pip install -r requirements/production.txt

# Code applicatif
COPY . .

# Statiques collectés au build (servis par WhiteNoise). SECRET_KEY factice suffit ;
# collectstatic n'accède pas à la base.
RUN SECRET_KEY=build-only python manage.py collectstatic --noinput

# Railway fournit $PORT. On applique les migrations au démarrage (sinon un nouveau
# champ/table provoque des 500 « no such column ») puis on lance gunicorn.
CMD sh -c 'python manage.py migrate --noinput && gunicorn config.wsgi:application --bind 0.0.0.0:${PORT:-8000}'
