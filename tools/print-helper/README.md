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

## Impression PAR POSTE (recommandé)
Chaque **poste guichet** fait tourner cet agent ; son **navigateur** parle à son agent local
(`http://127.0.0.1:9113`). Ainsi chaque poste imprime sur SES imprimantes.

Sur chaque poste :
1. Installer **Python 3** (cocher « Add to PATH »), déposer **`SumatraPDF.exe`** dans ce dossier.
2. Double-cliquer **`start-print-agent.bat`** (laisse une fenêtre ouverte, port 9113).
3. Dans l'ERP, sur ce poste : **Configuration → Imprimantes (ce poste)** — choisir une
   imprimante pour **Reçu de colis** et une pour **Étiquette de colis** (enregistré dans ce
   navigateur uniquement). Imprimer un colis → chacun part sur son imprimante.

> Le poste serveur fait aussi tourner l'agent via `start-erp.bat` (fenêtre « ERP - Impression ») ;
> les autres postes utilisent `start-print-agent.bat`.

Sans imprimante choisie (ou agent injoignable) → repli sur la boîte d'impression du navigateur.

## Variante : agent central côté serveur (facultatif)
Un seul agent sur le serveur, imprimantes rattachées au serveur, mappage central dans
**Configuration → Modèles de documents → Mappage des imprimantes**. Nécessite
`PRINT_HELPER_URL` côté serveur (`http://127.0.0.1:9113` en dev, `http://host.docker.internal:9113`
sous Docker).

## Vérification
```
curl http://localhost:9113/printers      # liste des imprimantes de CE poste
```

## Endpoints (serveur → agent)
- `GET  /printers` → `{"printers": [...]}`
- `POST /print` → `{"printer": "<nom>", "html": "<...>"}` → rendu + impression silencieuse.
  (Rétro-compat : `{"printer", "pdf_base64"}` est aussi accepté.)
