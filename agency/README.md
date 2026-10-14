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

## Accès depuis les autres postes (réseau de l'agence)
Tout passe par **un seul conteneur nginx** sur `WEB_PORT` (défaut **8080**) : il sert
Angular et relaie `/api` vers le backend. **Même origine → aucun CORS, aucune config par
poste.** Les guichets ouvrent simplement l'adresse du serveur.

**1. Adresse du serveur.** Récupérer son IP locale :
- Windows : `ipconfig` → l'IPv4 de la carte réseau (ex. `192.168.1.50`).
- Linux : `ip a`.

Les autres postes ouvrent alors : **`http://<IP-du-serveur>:8080`**.

**2. Ouvrir le pare-feu** (cause n°1 du « marche sur le serveur, pas ailleurs »). Sur le
serveur **Windows**, en administrateur :
```
netsh advfirewall firewall add rule name="BrainStore ERP 8080" dir=in action=allow protocol=TCP localport=8080
```
(Linux/UFW : `sudo ufw allow 8080/tcp`.)

**3. `.env`** — `ALLOWED_HOSTS=*` est déjà prévu (toute IP acceptée). Ajoutez l'adresse
réellement utilisée aux origines CSRF (admin Django + formulaires) :
```
WEB_PORT=8080
ALLOWED_HOSTS=*
CSRF_TRUSTED_ORIGINS=http://192.168.1.50:8080,http://localhost:8080
```
Puis redémarrer : `docker compose -f docker-compose.local.yml up -d` (ou `docker compose up -d`).

**4. IP stable.** Donnez au serveur une **IP fixe** (ou une réservation DHCP), afin que
l'adresse ne change pas — sinon les postes devront être reconfigurés.

> **HTTP et cookies.** L'application fonctionne en HTTP sur le LAN (auth par **JWT**).
> En revanche l'**admin Django** et les flux par cookie peuvent échouer en HTTP si les
> cookies sont « Secure » → utilisez **HTTPS** pour ces cas. Pour le HTTPS en local :
> `mkcert` (certif. de confiance locale, gratuit) ou un certificat auto-signé importé sur
> les postes ; terminez le TLS au niveau de nginx.

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
