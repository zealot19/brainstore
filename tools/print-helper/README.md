# Agent d'impression Windows — BrainStore ERP

Petit service à lancer sur **le PC serveur de l'agence** (celui qui héberge l'instance
Docker locale). Il reçoit les PDF de l'instance Django et les imprime **en silence** sur
l'imprimante Windows mappée à chaque document.

Un seul agent par serveur d'agence (pas par poste guichet). Les imprimantes réseau doivent
être installées **sur ce PC Windows** (avec leurs pilotes) pour apparaître dans la liste.

## Installation
1. Installer Python 3 et pywin32 :
   ```
   pip install pywin32
   ```
2. Télécharger **SumatraPDF** (version *portable*, gratuite) et placer `SumatraPDF.exe`
   dans ce dossier (ou définir la variable `SUMATRA_PATH`).
3. Lancer l'agent :
   ```
   python print_helper.py
   ```
   Port par défaut : **9113** (modifiable via `PRINT_HELPER_PORT`).

## Démarrage automatique (recommandé)
Installer en service Windows avec [NSSM](https://nssm.cc/) :
```
nssm install BrainStorePrintHelper "C:\Python3\python.exe" "C:\...\print_helper.py"
nssm start BrainStorePrintHelper
```
ou via le Planificateur de tâches (au démarrage / à l'ouverture de session).

## Connexion de l'instance Docker
Dans le `.env` (ou docker-compose) de l'instance locale :
```
PRINT_HELPER_URL=http://host.docker.internal:9113
```
`host.docker.internal` pointe vers l'hôte Windows depuis le conteneur (Docker Desktop).
Laisser vide sur le master en ligne → repli sur la boîte d'impression du navigateur.

## Vérification
```
curl http://localhost:9113/printers      # liste des imprimantes Windows
```
Dans l'ERP : **Configuration → Modèles de documents → Mappage des imprimantes**, choisir une
imprimante par document, puis enregistrer une réservation de colis/bagage pour tester.

## Endpoints
- `GET  /printers` → `{"printers": [...]}`
- `POST /print` → `{"printer": "<nom>", "pdf_base64": "<...>"}` → impression silencieuse.
