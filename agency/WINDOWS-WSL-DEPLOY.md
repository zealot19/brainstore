# Déploiement Windows Server (WSL2 + Ubuntu) — PowerShell, « out of the box »

Objectif : déployer le **master on-premise** + une **agence** sur un **Windows Server**,
avec Docker dans **WSL2/Ubuntu**, un minimum de manuel. Tout se fait dans une
**PowerShell en Administrateur** (sauf l'édition des `.env`, seule étape manuelle).

> Remplacez les `<...>`. Testez bloc par bloc. Versions Windows récentes recommandées
> (Server 2022 / Win11) pour le mode réseau *mirrored* ; pour Server 2019, voir §7 (portproxy).

---

## 1. WSL2 + Ubuntu
```powershell
wsl --install -d Ubuntu          # installe WSL2 + Ubuntu (redémarrage possible)
wsl --set-default-version 2
wsl -l -v                        # vérifier qu'Ubuntu est en VERSION 2
```
On opère **en root** (`-u root`) → aucun utilisateur Linux interactif à créer.

## 2. Réseau *mirrored* + systemd (un seul bloc), puis redémarrage WSL
```powershell
# Réseau mirrored : les postes du LAN joignent l'appli sur l'IP Windows ; localhost partagé.
@"
[wsl2]
networkingMode=mirrored
"@ | Set-Content -Encoding ascii "$env:USERPROFILE\.wslconfig"

# systemd dans Ubuntu (pour que Docker démarre avec WSL)
wsl -d Ubuntu -u root -- bash -c "printf '[boot]\nsystemd=true\n' > /etc/wsl.conf"

wsl --shutdown                   # applique les deux
```

## 3. Docker Engine dans Ubuntu
```powershell
wsl -d Ubuntu -u root -- bash -c "curl -fsSL https://get.docker.com | sh && systemctl enable --now docker && docker --version"
```

## 4. Récupérer le code dans WSL (système de fichiers Linux = rapide)
```powershell
# Dépôt privé : mettez un token dans l'URL. Re-run = git pull.
wsl -d Ubuntu -u root -- bash -c "cd /root && (git clone https://<TOKEN>@github.com/zealot19/brainstore.git brainstore || (cd brainstore && git pull))"
```

## 5. MASTER on-premise (si hébergé sur ce serveur)
```powershell
# a) .env (SEULE étape manuelle) : SECRET_KEY, POSTGRES_PASSWORD(+DATABASE_URL), SYNC_TOKEN, WEB_PORT=8081, ALLOWED_HOSTS=*
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/online-master && cp -n .env.example .env && nano .env"
# b) build + run
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/online-master && docker compose -f docker-compose.local.yml up -d --build"
# c) admin (mot de passe via variable, non interactif)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/online-master && docker compose -f docker-compose.local.yml exec -T -e DJANGO_SUPERUSER_PASSWORD='<MDP>' backend python manage.py createsuperuser --noinput --username admin --email admin@local || true"
```
Ouvrez `http://localhost:8081` → créez **l'institution** + **l'agence** (avec un code) → notez l'**UUID de l'agence**.

## 6. AGENCE
```powershell
# a) .env : secrets, NODE_ID (uuid), NODE_AGENCY_ID (=UUID agence du master),
#    SYNC_MASTER_URL=http://localhost:8081/api/v1 (mirrored) ou http://<IP-LAN>:8081/api/v1,
#    SYNC_TOKEN (= master), WEB_PORT=8080.  PRINT_HELPER_URL est déjà pré-rempli.
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && cp -n .env.example .env && nano .env"
# b) build + run
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml up -d --build"
# c) amorcer depuis le master (config qui descend)
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T backend python manage.py bootstrap_from_master"
# d) état
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml ps"
```

## 7. Pare-feu Windows (PowerShell natif)
```powershell
New-NetFirewallRule -DisplayName "BrainStore ERP 8080"  -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow
New-NetFirewallRule -DisplayName "BrainStore master 8081" -Direction Inbound -Protocol TCP -LocalPort 8081 -Action Allow
New-NetFirewallRule -DisplayName "BrainStore print 9113" -Direction Inbound -Protocol TCP -LocalPort 9113 -Action Allow
```
**Fallback si PAS de mode mirrored (Server 2019)** — rediriger l'hôte → WSL :
```powershell
$wsl = (wsl -d Ubuntu -u root -- bash -c "hostname -I").Trim().Split(' ')[0]
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=$wsl
netsh interface portproxy add v4tov4 listenport=8081 listenaddress=0.0.0.0 connectport=8081 connectaddress=$wsl
# NB : l'IP WSL change au reboot → relancer ces 3 lignes au démarrage (ou utiliser mirrored).
```

## 8. Agent d'impression (côté **Windows**, pas WSL)
```powershell
winget install -e --id Python.Python.3.12
winget install -e --id SumatraPDF.SumatraPDF
python -m pip install pywin32

# Copier l'agent (fichier unique) depuis WSL vers Windows + y déposer SumatraPDF.exe
New-Item -ItemType Directory -Force C:\brainstore-print | Out-Null
wsl -d Ubuntu -u root -- bash -c "cp /root/brainstore/tools/print-helper/print_helper.py /mnt/c/brainstore-print/"
Copy-Item (Get-Command SumatraPDF.exe).Source C:\brainstore-print\SumatraPDF.exe -ErrorAction SilentlyContinue
[Environment]::SetEnvironmentVariable("SUMATRA_PATH","C:\brainstore-print\SumatraPDF.exe","Machine")

# Test rapide
python C:\brainstore-print\print_helper.py   # Ctrl+C après le test
```

## 9. Démarrage automatique au boot (tâches planifiées)
```powershell
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
$settings  = New-ScheduledTaskSettingsSet -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) -AllowStartIfOnBatteries

# (a) Démarre WSL + Docker ; 'tail -f /dev/null' garde la distro vivante.
#     Les conteneurs (restart: unless-stopped) remontent seuls une fois Docker lancé.
$wslAction = New-ScheduledTaskAction -Execute "C:\Windows\System32\wsl.exe" `
  -Argument '-d Ubuntu -u root -e sh -c "systemctl start docker || service docker start; tail -f /dev/null"'
Register-ScheduledTask -TaskName "BrainStore-WSL" -Action $wslAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -Principal $principal -Settings $settings -Force

# (b) Agent d'impression
$py = (Get-Command python.exe).Source
$printAction = New-ScheduledTaskAction -Execute $py -Argument "C:\brainstore-print\print_helper.py" -WorkingDirectory "C:\brainstore-print"
Register-ScheduledTask -TaskName "BrainStore-PrintHelper" -Action $printAction `
  -Trigger (New-ScheduledTaskTrigger -AtStartup) -Principal $principal -Settings $settings -Force
```

## 10. Vérification
```powershell
Start-Process "http://localhost:8080"          # l'appli (agence)
Invoke-RestMethod "http://localhost:9113/printers"   # imprimantes vues par l'agent
```
- Depuis un **autre poste** : `http://<IP-LAN-du-serveur>:8080`.
- Dans l'appli : **Configuration → Modèles de documents → Mappage des imprimantes** → choisir une
  imprimante par document, puis enregistrer un colis/bagage → impression auto.

## Entretien
```powershell
# Logs / état
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml logs -f --tail=100"
# Sauvegarde base agence
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && docker compose -f docker-compose.local.yml exec -T db pg_dump -U erp_agency erp_agency | gzip > /root/erp_agency_\$(date +%F).sql.gz"
# Mise à jour (master d'abord, puis agence) : re-build no-cache
wsl -d Ubuntu -u root -- bash -c "cd /root/brainstore/agency && git pull && docker compose -f docker-compose.local.yml up -d --build"
```

> **Note** : ce guide n'a pas pu être testé sur Windows ici — vérifiez les versions
> (winget, Python 3.x) et les chemins. Le mode *mirrored* (§2) est l'option la plus simple ;
> à défaut, le portproxy (§7) fait le lien hôte→WSL.
