# ============================================================
#  ERP SCIG - demarrage/arret en ARRIERE-PLAN (aucune fenetre).
#  Prerequis : avoir lance start-erp.bat UNE fois (fenetre visible) pour
#  l'installation + la configuration de synchro. Ensuite ce script demarre
#  les memes services (API, synchro, agent d'impression, interface) sans fenetre.
#
#    Demarrer :  start-erp-background.vbs   (ou : powershell -File start-erp-background.ps1)
#    Arreter  :  stop-erp.bat               (ou : powershell -File start-erp-background.ps1 -Stop)
# ============================================================
param([switch]$Stop)

$ErrorActionPreference = 'SilentlyContinue'

$root     = $PSScriptRoot
$backend  = Join-Path $root 'backend'
$angular  = Join-Path $root 'angular'
$py       = Join-Path $backend '.venv\Scripts\python.exe'
$bat      = Join-Path $root 'start-erp.bat'
$printdir = Join-Path $root 'tools\print-helper'

$ApiPort = 8000; $UiPort = 4200; $PrintPort = 9113

if ($Stop) {
    # Couper les process qui ecoutent nos ports (API, interface, impression)...
    foreach ($port in $ApiPort, $UiPort, $PrintPort) {
        Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue |
            Select-Object -ExpandProperty OwningProcess -Unique |
            ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    }
    # ...et la boucle de synchronisation (cmd lancant start-erp.bat --syncloop).
    Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -match '--syncloop' } |
        ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
    return
}

# Pas encore installe/configure : ne rien faire (lancer start-erp.bat une fois d'abord).
if (-not (Test-Path $py)) { return }

# Migrations idempotentes (indispensable apres un git pull), en silence.
Start-Process -FilePath $py -ArgumentList 'manage.py','migrate','--noinput' `
    -WorkingDirectory $backend -WindowStyle Hidden -Wait

# API Django (toutes interfaces reseau)
Start-Process -FilePath $py -ArgumentList 'manage.py','runserver',"0.0.0.0:$ApiPort" `
    -WorkingDirectory $backend -WindowStyle Hidden

# Boucle de synchronisation (toutes les 90 s)
Start-Process -FilePath 'cmd.exe' -ArgumentList '/c', "`"$bat`"", '--syncloop' `
    -WindowStyle Hidden

# Agent d'impression local (port 9113)
Start-Process -FilePath $py -ArgumentList 'print_helper.py' `
    -WorkingDirectory $printdir -WindowStyle Hidden

# Interface Angular (toutes interfaces reseau)
Start-Process -FilePath 'cmd.exe' `
    -ArgumentList '/c', "set NODE_OPTIONS=--max_old_space_size=4096 && npm start -- --host 0.0.0.0 --port $UiPort" `
    -WorkingDirectory $angular -WindowStyle Hidden
