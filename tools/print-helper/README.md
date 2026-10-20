# Agent d'impression — BrainStore ERP

Petit service lancé sur **le PC de l'agence**. Il reçoit le **HTML** des documents
(reçu colis, étiquette colis, bordereau…) depuis l'ERP, le **rend en PDF** avec Edge/Chrome
sans tête, puis l'**imprime en silence** sur l'imprimante **mappée à chaque document**.
Ainsi le reçu part sur son imprimante et l'étiquette sur la sienne, sans boîte de dialogue.

> Aucune dépendance WeasyPrint côté serveur : c'est l'agent qui fabrique le PDF.

## Pré-requis
1. **Python 3** (rien d'autre à installer : la liste des imprimantes passe par PowerShell).
2. **Microsoft Edge** (présent par défaut sur Windows) ou **Google Chrome** — pour le rendu
   HTML → PDF. Détecté automatiquement, ou via `EDGE_PATH` / `CHROME_PATH`.
3. **SumatraPDF** (version *portable*, gratuite) : placer `SumatraPDF.exe` dans ce dossier
   (ou définir `SUMATRA_PATH`) — pour l'impression silencieuse sur une imprimante nommée.

Les imprimantes doivent être installées **sur ce PC** (avec leurs pilotes) pour apparaître
dans la liste. Un seul agent par PC.

## Démarrage
- **Mode dev (recommandé)** : `start-erp.bat` lance l'agent automatiquement (fenêtre
  « ERP - Impression », port 9113) et écrit `PRINT_HELPER_URL=http://127.0.0.1:9113`
  dans `backend/.env`. Rien à faire de plus — il suffit d'ajouter `SumatraPDF.exe` ici.
- **Manuel** : `python print_helper.py` (port **9113**, modifiable via `PRINT_HELPER_PORT`).
- **Sous Docker** : mettre `PRINT_HELPER_URL=http://host.docker.internal:9113` dans le `.env`
  de l'instance locale (laisser vide sur le master en ligne → repli navigateur).

## Vérification
```
curl http://localhost:9113/printers      # liste des imprimantes du PC
```
Dans l'ERP : **Configuration → Modèles de documents → Mappage des imprimantes**, choisir
une imprimante pour **Reçu de colis** et une autre pour **Étiquette de colis**, enregistrer,
puis créer un colis : le reçu et l'étiquette s'impriment chacun sur son imprimante.
Sans mappage (ou agent indisponible) → repli sur la boîte d'impression du navigateur.

## Endpoints (serveur → agent)
- `GET  /printers` → `{"printers": [...]}`
- `POST /print` → `{"printer": "<nom>", "html": "<...>"}` → rendu + impression silencieuse.
  (Rétro-compat : `{"printer", "pdf_base64"}` est aussi accepté.)
