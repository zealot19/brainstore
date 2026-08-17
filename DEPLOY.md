# Déploiement — Backend (Railway) + Frontend (Vercel) via GitHub Actions

Monorepo : **Railway** déploie `backend/` (Django), **Vercel** déploie `angular/`.
Le pipeline CI/CD (`.github/workflows/deploy.yml`) vit dans le dépôt **brainstore**.

## Modèle de dépôts
- `origin` → `hervejiogue2/ERP` : mainline d'équipe. **Non déployé.**
- `deploy` → `zealot19/brainstore` : dépôt en ligne + GitHub Actions + secrets.

Pousser sur les deux :
```
git push origin master
git push deploy master
```
Le push sur **brainstore** déclenche le pipeline. Le même workflow existe aussi sur herve
mais ses jobs de déploiement sont ignorés (`if: github.repository == 'zealot19/brainstore'`) :
seuls les **tests** y tournent.

## Pipeline (à chaque push sur master de brainstore)
1. **test** — `pytest` sur Python 3.12. **Barrière** : s'il échoue, aucun déploiement.
2. **deploy-backend** — `railway up` vers le service Railway.
3. **deploy-frontend** — `vercel build` + `vercel deploy --prod`.

---

## 1. Backend — Railway (une seule fois)

1. Railway → **New Project → Deploy from GitHub repo** → `zealot19/brainstore`.
2. **Settings → Root Directory = `backend`** (le monorepo ; Railway lit `backend/railway.json`).
3. **Désactiver l'auto-deploy Git** de Railway (Settings → **Deploy triggers**) : c'est
   GitHub Actions qui déclenche les déploiements (évite les doubles déploiements).
4. **Add → Database → PostgreSQL** : Railway crée la base et fournit `DATABASE_URL`.
5. **Variables** du service :

| Variable | Valeur |
|---|---|
| `DJANGO_SETTINGS_MODULE` | `config.settings.production` |
| `SECRET_KEY` | une longue clé aléatoire |
| `DATABASE_URL` | référence la base Postgres (`${{ Postgres.DATABASE_URL }}`) |
| `CORS_ALLOWED_ORIGINS` | `https://<front>.vercel.app` *(après l'étape 3 Vercel)* |
| `CSRF_TRUSTED_ORIGINS` | `https://<front>.vercel.app` |
| `ALLOWED_HOSTS` | *(optionnel : le domaine Railway est ajouté auto)* |

> `railway.json` lance `migrate` + `collectstatic` en **pre-deploy**, puis
> `gunicorn config.wsgi:application`. Python est pinné à **3.12** (`backend/.python-version`).

6. **Générer un token** : Railway → Account/Project **Tokens** → créer un token → le mettre
   dans les secrets GitHub (voir §3).
7. Récupérer le domaine public du service, ex. `https://erp-backend-production.up.railway.app`.

### Créer le super-admin
Railway → service → **Shell** (ou `railway run`) :
```
python manage.py createsuperuser
```

---

## 2. Frontend — Vercel (une seule fois)

1. Vercel → **Add New → Project** → importer `zealot19/brainstore`.
2. **Root Directory = `angular`** (Vercel lit `angular/vercel.json`).
3. **Désactiver l'auto-deploy Git** (Settings → Git → *Ignored Build Step* / ou déconnecter
   la prod branch) : c'est Actions qui déploie.
4. Mettre `apiUrl` (dans `angular/src/environments/environment.prod.ts`) = URL Railway + `/api/v1`,
   puis committer/pousser. Le build prod substitue `environment.ts` → `environment.prod.ts`.
5. Récupérer les identifiants pour Actions : `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID`
   (Project Settings, ou `.vercel/project.json` après un `vercel link` local) et un
   **token** (Account Settings → Tokens).

---

## 3. Secrets GitHub (dépôt brainstore)

**Settings → Secrets and variables → Actions → New repository secret** :

| Secret | Source |
|---|---|
| `RAILWAY_TOKEN` | token Railway (§1.6) |
| `VERCEL_TOKEN` | token Vercel (§2.5) |
| `VERCEL_ORG_ID` | `.vercel/project.json` / settings |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` / settings |

*(Optionnel)* **Variable** `RAILWAY_SERVICE` si le service ne s'appelle pas `erp-backend`.

---

## 4. Ordre de mise en ligne (interdépendance des URLs)
1. Déployer le **backend** (Railway) → obtenir l'URL Railway.
2. Mettre cette URL dans `environment.prod.ts` (`apiUrl`) → push.
3. Le pipeline déploie le **frontend** (Vercel) → obtenir l'URL `*.vercel.app`.
4. Renseigner `CORS_ALLOWED_ORIGINS` + `CSRF_TRUSTED_ORIGINS` sur Railway → redéploiement.

---

## 5. Points d'attention
- **Python 3.14 en local** : Railway & la CI sont pinnés **3.12**. La CI valide donc la compat 3.12.
- **TLS derrière proxy** : `SECURE_PROXY_SSL_HEADER` réglé (évite la boucle de redirection HTTPS).
- **Statiques** : servis par **WhiteNoise** ; `collectstatic` tourne en pre-deploy.
- **`$PORT`** : Railway l'injecte ; `gunicorn --bind 0.0.0.0:$PORT` l'utilise.
- **Médias uploadés** (`MEDIA_ROOT`) : disque éphémère → stockage objet (S3/`django-storages`,
  déjà en deps) pour des fichiers persistants.
- **Double déploiement** : bien désactiver l'auto-deploy Git côté Railway ET Vercel, puisque
  c'est Actions qui pilote.
