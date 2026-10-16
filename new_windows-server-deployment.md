# Déploiement on-premise — Windows Server (architecture online-offline)

Ce serveur est un **nœud AGENCE**. La **configuration se fait sur le master EN LIGNE**
(institutions, agences, trajets, tarifs, RBAC, utilisateurs). Ce nœud **synchronise** :
la config **descend**, les ventes **remontent**. Il **fonctionne hors-ligne** (ventes au
guichet) et rattrape la synchro dès que la connexion revient.

Pile : **WSL2 + Ubuntu → Docker** (agence : db + backend + frontend + 2 workers de sync).
Tout tourne dans **PowerShell (Administrateur)** ; seule l'édition de `.env` est manuelle.

---

## Étape 0 — Récupérer les informations nécessaires

### a) Depuis le **master en ligne** (console Admin → Agences)
| Valeur | Où |
|---|---|
| `SYNC_MASTER_URL` | URL du master **+ `/api/v1`** (ex. `https://master.exemple.com/api/v1`) |
| `SYNC_TOKEN` | le **même** jeton que le master |
| `NODE_AGENCY_ID` | **UUID** de l'agence (créée sur le master, avec un code) |

### b) Depuis **ce serveur** (PowerShell — à noter avant de commencer)
```powershell
# IP LAN du serveur (les postes guichet l'utiliseront : http://<IP>:8080)
Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.*' } |
  Select-Object IPAddress, InterfaceAlias

# Version de Windows (détermine le mode réseau WSL — voir Étape 2)
Get-ComputerInfo -Property WindowsProductName, OsBuildNumber

# Accès Internet jusqu'au master en ligne (doit répondre)
Test-NetConnection master.exemple.com -Port 443

# Imprimantes installées sur Windows (à mapper ensuite aux documents)
Get-Printer | Select-Object Name, DriverName, PortName
```

---

## Étape 1 — WSL2 + Ubuntu
```powershell
wsl --install -d Ubuntu          # installe WSL2 + Ubuntu (redémarrage possible)
wsl --set-default-version 2
wsl -l -v                        # Ubuntu doit être en VERSION 2
```
On opère **en root** (`-u root`) → aucun utilisateur Linux à créer.

## Étape 2 — Réseau + systemd, puis redémarrage WSL
```powershell
# Mode "mirrored" (Windows Server 2022 / Win11 récents) : les postes LAN joignent
# l'appli sur l'IP Windows, et localhost est partagé. (Server 2019 : sauter ce bloc,
# utiliser le portproxy de l'Étape 6.)
@"
[wsl2]
networkingMode=mirrored
"@ | Set-Content -Encoding ascii "$env:USERPROFILE\.wslconfig"

# systemd dans Ubuntu (pour que Docker démarre avec WSL)
wsl -d Ubuntu -u root -- bash -c "printf '[boot]\nsystemd=true\n' > /etc/wsl.conf"

wsl --shutdown                   # applique les deux
```

## Étape 3 — Docker Engine dans Ubuntu
```powershell
wsl -d Ubuntu -u root -- bash -c "curl -fsSL https://get.docker.com | sh && systemctl enable --now docker && docker --version"
```

## Étape 4 — Récupérer le code dans WSL (rapide : système Linux)
```powershell
# Dépôt privé : mettez un token dans l'URL. Re-run = git pull. (git n'est pas dans l'image Ubuntu → on l'installe.)
wsl -d Ubuntu -u root -- bash -c "apt-get update && apt-get install -y git && cd /root && (git clone https://<TOKEN>@github.com/zealot19/brainstore.git brainstore || (cd brainstore && git pull))"
```

## Étape 5 — Configurer et lancer l'AGENCE
```powershell
# a) .env (SEULE étape manuelle). Renseigner :
#    SECRET_KEY, POSTGRES_PASSWORD (+ dans DATABASE_URL), WEB_PORT=8080, ALLOWED_HOSTS=*,
#    NODE_ID=<uuid aléatoire>, NODE_AGENCY_ID=<UUID agence du master>,
#    SYNC_MASTER_URL=https://master.exemple.com/api/v1, SYNC_TOKEN=<jeton du master>.
#    PRINT_HELPER_URL est déjà pré-rempli (http://host.docker.internal:9113).
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && cp -n .env.example .env && nano .env"

# b) build + démarrage
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml up -d --build"

# Laisser le backend appliquer les migrations au démarrage avant d'enchaîner
Start-Sleep -Seconds 25

# c) amorcer depuis le master en ligne (tire la config)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T backend python manage.py bootstrap_from_master"

# d) admin local garanti (mot de passe via variable)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T -e DJANGO_SUPERUSER_PASSWORD='<MDP>' backend python manage.py createsuperuser --noinput --username admin --email admin@local || true"

# e) état des services
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml ps"
```

## Étape 6 — Accès réseau (postes guichet)
```powershell
# Pare-feu entrant
New-NetFirewallRule -DisplayName "BrainStore ERP 8080"  -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow
New-NetFirewallRule -DisplayName "BrainStore print 9113" -Direction Inbound -Protocol TCP -LocalPort 9113 -Action Allow
```
**Sans mode mirrored (Server 2019)** — rediriger l'hôte → WSL :
```powershell
$wsl = (wsl -d Ubuntu -u root -- bash -c "hostname -I").Trim().Split(' ')[0]
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=$wsl
# L'IP WSL change au reboot → relancer cette ligne au démarrage (ou préférer mirrored).
```

## Étape 7 — Agent d'impression (côté **Windows**, pas WSL)
```powershell
winget install -e --id Python.Python.3.12
winget install -e --id SumatraPDF.SumatraPDF
```
> **Rouvrez une NOUVELLE PowerShell (Admin)** après ces installs : sinon `python` n'est pas encore dans le PATH.
```powershell
python -m pip install pywin32

# Dossier de l'agent + copie du fichier unique depuis WSL
New-Item -ItemType Directory -Force C:\brainstore-print | Out-Null
wsl -d Ubuntu -u root -- bash -c "cp /root/brainstore/tools/print-helper/print_helper.py /mnt/c/brainstore-print/"

# Localiser SumatraPDF.exe (winget ne l'ajoute pas au PATH) et le copier à côté de l'agent
$sumatra = Get-ChildItem "$env:LOCALAPPDATA\SumatraPDF","$env:ProgramFiles\SumatraPDF","${env:ProgramFiles(x86)}\SumatraPDF" `
  -Filter SumatraPDF.exe -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
if ($sumatra) { Copy-Item $sumatra.FullName C:\brainstore-print\SumatraPDF.exe -Force }
else { Write-Warning "SumatraPDF.exe introuvable — déposez la version PORTABLE dans C:\brainstore-print\SumatraPDF.exe" }
[Environment]::SetEnvironmentVariable("SUMATRA_PATH","C:\brainstore-print\SumatraPDF.exe","Machine")

# Test (la variable Machine n'est pas encore active dans cette session → on la passe à la volée)
$env:SUMATRA_PATH = "C:\brainstore-print\SumatraPDF.exe"
python C:\brainstore-print\print_helper.py          # Ctrl+C après le test
Invoke-RestMethod "http://localhost:9113/printers"   # doit lister les imprimantes Windows
```

## Étape 8 — Démarrage automatique au boot
> **Important** : les tâches doivent s'exécuter sous **le compte qui a installé WSL** (la
> distro Ubuntu et les imprimantes réseau sont **par utilisateur** — un compte SYSTEM ne les
> « voit » pas). On utilise donc ce compte, « exécuter même si l'utilisateur n'est pas connecté »
> (le mot de passe est demandé).
```powershell
$cred = Get-Credential   # saisir le compte administrateur qui a installé WSL (DOMAINE\user ou .\user)
$settings = New-ScheduledTaskSettingsSet -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) -AllowStartIfOnBatteries

# (a) WSL + Docker (les conteneurs restart:unless-stopped remontent seuls). 'tail -f /dev/null' garde la distro vivante.
$wslAction = New-ScheduledTaskAction -Execute "C:\Windows\System32\wsl.exe" `
  -Argument '-d Ubuntu -u root -e sh -c "systemctl start docker || service docker start; tail -f /dev/null"'
Register-ScheduledTask -TaskName "BrainStore-WSL" -Action $wslAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -RunLevel Highest `
  -User $cred.UserName -Password $cred.GetNetworkCredential().Password -Settings $settings -Force

# (b) Agent d'impression (même compte → il voit les imprimantes réseau de l'utilisateur)
$printAction = New-ScheduledTaskAction -Execute (Get-Command python.exe).Source `
  -Argument "C:\brainstore-print\print_helper.py" -WorkingDirectory "C:\brainstore-print"
Register-ScheduledTask -TaskName "BrainStore-PrintHelper" -Action $printAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -RunLevel Highest `
  -User $cred.UserName -Password $cred.GetNetworkCredential().Password -Settings $settings -Force
```

## Étape 9 — Vérification
```powershell
Start-Process "http://localhost:8080"                 # l'appli
Invoke-RestMethod "http://localhost:9113/printers"    # imprimantes de l'agent
```
- **Autre poste** : `http://<IP-LAN-du-serveur>:8080`.
- **Mappage imprimantes** : Configuration → Modèles de documents → *Mappage des imprimantes*
  → une imprimante par document → enregistrer un colis/bagage → impression auto.
- **Sync** : faites une vente ; après un cycle (`SYNC_INTERVAL`) elle apparaît sur le
  **master en ligne**. Débranchez Internet → les ventes continuent ; rebranchez → elles remontent.

---

## Commandes utiles (exploitation)
```powershell
# Logs backend/sync en direct
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml logs -f --tail=100 backend sync_worker"

# Forcer une synchro immédiate
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T backend python manage.py sync_once"

# Sauvegarde de la base (le backtick ` protège le $ pour qu'il soit évalué par bash, pas PowerShell)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T db pg_dump -U erp_agency erp_agency | gzip > /root/erp_agency_`$(date +%F).sql.gz"

# Mise à jour (mettre le master à jour d'abord)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && git pull && docker compose -f docker-compose.local.yml up -d --build"
```

> Non testé sur Windows depuis l'environnement de dev : vérifiez les versions (winget,
> Python 3.x) et les chemins. Le mode *mirrored* (Étape 2) est l'option la plus simple ;
> à défaut, le portproxy (Étape 6) fait le lien hôte→WSL. L'agent d'impression tourne sur
> Windows (pilotes d'imprimante Windows) ; le reste tourne dans WSL.
