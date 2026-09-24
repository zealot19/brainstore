# ERP — Version LOCALE AGENCE

Pile Docker autonome : **base de données + backend + frontend** (+ 2 workers de
synchronisation), construits **depuis GitHub** (aucun code local requis). Vous
modifiez le fichier `.env` et vous lancez. **Une copie de ce dossier par agence.**

L'agence fonctionne même **hors-ligne** (ventes au guichet) et se **synchronise** au
master : la configuration descend, les ventes remontent.

## Avant de commencer (côté master, une fois)
Sur le **master** (dossier `online-master/`), l'agence doit **exister** :
**Administration → Agences → Nouvelle agence** (avec un **code**). Notez son **UUID**
(= `NODE_AGENCY_ID` ci-dessous) et utilisez le **même `SYNC_TOKEN`** que le master.

## Prérequis
- Un serveur/PC avec **Docker** + **Docker Compose** :
  ```bash
  curl -fsSL https://get.docker.com | sh
  sudo systemctl enable docker      # relance auto après coupure de courant
  ```

## Étapes (copier-coller)

**1. Copier ce dossier** sur la machine de l'agence, puis :
```bash
cp .env.example .env
```

**2. Éditer `.env`** — au minimum :
- `SECRET_KEY` (longue clé aléatoire — `python3 -c "import secrets;print(secrets.token_urlsafe(64))"`)
- `POSTGRES_PASSWORD` **et** le même mot de passe dans `DATABASE_URL`
- `NODE_ID` (UUID unique — `python3 -c "import uuid;print(uuid.uuid4())"`)
- `NODE_AGENCY_ID` (UUID de l'agence sur le master)
- `SYNC_MASTER_URL` (URL du master + `/api/v1`)
- `SYNC_TOKEN` (le **même** que le master)
- `WEB_PORT` si 8080 est déjà pris
- *(dépôt privé)* mettre un token GitHub dans `REPO_URL`

**3. Construire et démarrer** (le build clone le code depuis GitHub) :
```bash
docker compose up -d --build
```

**4. Vérifier** que tout tourne :
```bash
docker compose ps    # db, backend, frontend, sync_worker, reserve_worker
```

**5. Amorcer depuis le master** (une seule fois — tire la config : institutions,
agences, réseau, tarifs, RBAC, utilisateurs) :
```bash
docker compose exec backend python manage.py bootstrap_from_master
```
*(Besoin d'un admin local garanti :
`docker compose exec backend python manage.py createsuperuser`.)*

**6. Ouvrir l'application** : `http://<hôte>:8080`

**7. Vérifier la sync** : sur le master, `GET /api/v1/sync/status/` (en admin) doit
montrer l'agence **en ligne**. Une vente créée en agence remonte après `sync_once`.

## Mettre à jour (récupérer le dernier code)
> Gardez agence et master sur le **même code** ; mettez le master à jour d'abord.
```bash
docker compose build --no-cache        # re-clone le code depuis GitHub
docker compose up -d
```

## Sauvegarde de la base de l'agence
```bash
docker compose exec -T db pg_dump -U erp_agency erp_agency | gzip > erp_agency_$(date +%F).sql.gz
```

## Notes
- Servi en **HTTP** sur `WEB_PORT` (réseau local de l'agence). Pour une exposition
  Internet, placez un reverse proxy **HTTPS** devant — voir `../ONLINE-OFFLINE-DEPLOYMENT.md`.
- `restart: unless-stopped` + `systemctl enable docker` : la pile repart seule après
  une coupure de courant. Un onduleur (UPS) est recommandé.
