# ERP — Version EN LIGNE (master)

Pile Docker autonome : **base de données + backend + frontend**, construits **depuis
GitHub** (aucun code local requis). Vous modifiez le fichier `.env` et vous lancez.

Ce dossier héberge le **master** : la source de vérité à laquelle les agences se
synchronisent (voir le dossier `agency/`).

## Prérequis
- Un serveur/PC avec **Docker** + **Docker Compose** :
  ```bash
  curl -fsSL https://get.docker.com | sh
  ```

## Étapes (copier-coller)

**1. Copier ce dossier** sur la machine, puis créer le fichier de config :
```bash
cp .env.example .env
```

**2. Éditer `.env`** — au minimum :
- `SECRET_KEY` (longue clé aléatoire — `python3 -c "import secrets;print(secrets.token_urlsafe(64))"`)
- `POSTGRES_PASSWORD` **et** le même mot de passe dans `DATABASE_URL`
- `SYNC_TOKEN` (jeton partagé fort — à réutiliser sur chaque agence)
- `WEB_PORT` si 8080 est déjà pris
- *(dépôt privé)* mettre un token GitHub dans `REPO_URL`
- *(optionnel)* `ONLINE_COMPANY_ID` (UUID de l'institution pour la réservation en ligne)

**3. Construire et démarrer** (le build clone le code depuis GitHub) :
```bash
docker compose up -d --build
```

**4. Vérifier** que les 3 services tournent :
```bash
docker compose ps        # db, backend, frontend
```

**5. Créer le super-administrateur** (une fois) :
```bash
docker compose exec backend python manage.py createsuperuser
```

**6. Ouvrir l'application** : `http://<hôte>:8080`
Connectez-vous, puis créez la première institution
(**Super Admin → Institutions → Nouvelle institution**).

## Mettre à jour (récupérer le dernier code)
```bash
docker compose build --no-cache        # re-clone le code depuis GitHub
docker compose up -d
```
Le backend applique les migrations automatiquement au démarrage.

## Sauvegarde de la base
```bash
docker compose exec -T db pg_dump -U erp erp | gzip > erp_$(date +%F).sql.gz
```

## Notes
- L'appli est servie en **HTTP** sur `WEB_PORT`. Pour une exposition Internet,
  placez un reverse proxy **HTTPS** devant (Caddy/Nginx + certificat) — voir
  `../ONLINE-OFFLINE-DEPLOYMENT.md`.
- `ALLOWED_HOSTS=*` par défaut pour démarrer vite : **restreignez-le** à votre
  domaine en production, et ajoutez ce domaine à `CSRF_TRUSTED_ORIGINS`.
