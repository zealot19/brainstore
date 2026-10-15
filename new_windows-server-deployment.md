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
# Dépôt privé : mettez un token dans l'URL. Re-run = git pull.
wsl -d Ubuntu -u root -- bash -c "cd /root && (git clone https://<TOKEN>@github.com/zealot19/brainstore.git brainstore || (cd brainstore && git pull))"
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
python -m pip install pywin32

# Copier l'agent (fichier unique) depuis WSL + y déposer SumatraPDF.exe
New-Item -ItemType Directory -Force C:\brainstore-print | Out-Null
wsl -d Ubuntu -u root -- bash -c "cp /root/brainstore/tools/print-helper/print_helper.py /mnt/c/brainstore-print/"
Copy-Item (Get-Command SumatraPDF.exe).Source C:\brainstore-print\SumatraPDF.exe -ErrorAction SilentlyContinue
[Environment]::SetEnvironmentVariable("SUMATRA_PATH","C:\brainstore-print\SumatraPDF.exe","Machine")

# Test
python C:\brainstore-print\print_helper.py          # Ctrl+C après
Invoke-RestMethod "http://localhost:9113/printers"   # doit lister les imprimantes Windows
```

## Étape 8 — Démarrage automatique au boot
```powershell
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
$settings  = New-ScheduledTaskSettingsSet -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) -AllowStartIfOnBatteries

# (a) WSL + Docker (les conteneurs restart:unless-stopped remontent seuls)
$wslAction = New-ScheduledTaskAction -Execute "C:\Windows\System32\wsl.exe" `
  -Argument '-d Ubuntu -u root -e sh -c "systemctl start docker || service docker start; tail -f /dev/null"'
Register-ScheduledTask -TaskName "BrainStore-WSL" -Action $wslAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -Principal $principal -Settings $settings -Force

# (b) Agent d'impression
$printAction = New-ScheduledTaskAction -Execute (Get-Command python.exe).Source `
  -Argument "C:\brainstore-print\print_helper.py" -WorkingDirectory "C:\brainstore-print"
Register-ScheduledTask -TaskName "BrainStore-PrintHelper" -Action $printAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -Principal $principal -Settings $settings -Force
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

# Sauvegarde de la base
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T db pg_dump -U erp_agency erp_agency | gzip > /root/erp_agency_\$(date +%F).sql.gz"

# Mise à jour (mettre le master à jour d'abord)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && git pull && docker compose -f docker-compose.local.yml up -d --build"
```

> Non testé sur Windows depuis l'environnement de dev : vérifiez les versions (winget,
> Python 3.x) et les chemins. Le mode *mirrored* (Étape 2) est l'option la plus simple ;
> à défaut, le portproxy (Étape 6) fait le lien hôte→WSL. L'agent d'impression tourne sur
> Windows (pilotes d'imprimante Windows) ; le reste tourne dans WSL.
