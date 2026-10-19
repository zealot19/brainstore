@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM  ERP SCIG - lanceur agence (Windows, mode dev, 2 ports)
REM  Double-cliquez ce fichier. Au 1er lancement il installe
REM  tout, demande la config de synchro, puis demarre l'appli.
REM  Les lancements suivants demarrent directement.
REM ============================================================

REM ---- chemins (toujours relatifs a ce fichier) ----
set "ROOT=%~dp0"
set "BACKEND=%ROOT%backend"
set "ANGULAR=%ROOT%angular"
set "VENV=%BACKEND%\.venv"
set "PY=%VENV%\Scripts\python.exe"
set "ENVFILE=%BACKEND%\.env"
set "UI_PORT=4200"
set "API_PORT=8000"

REM ---- modes speciaux (ce meme fichier relance avec un argument) ----
if /i "%~1"=="--syncloop" goto :syncloop
if /i "%~1"=="--install-autostart" goto :install
if /i "%~1"=="--remove-autostart" goto :remove

title ERP SCIG
echo ================================================
echo    ERP SCIG - demarrage
echo ================================================
echo.

REM ---- 1) Python 3.12 ----
where python >nul 2>&1
if errorlevel 1 (
  echo [install] Python 3.12 ...
  where winget >nul 2>&1 || ( echo winget introuvable. Installez Python 3.12 et Node.js LTS manuellement puis relancez. & pause & exit /b 1 )
  winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements
  set "PATH=%LOCALAPPDATA%\Programs\Python\Python312;%LOCALAPPDATA%\Programs\Python\Python312\Scripts;%PATH%"
)

REM ---- 2) Node.js LTS ----
where npm >nul 2>&1
if errorlevel 1 (
  echo [install] Node.js LTS ...
  where winget >nul 2>&1 || ( echo winget introuvable. Installez Node.js LTS manuellement puis relancez. & pause & exit /b 1 )
  winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
  set "PATH=%ProgramFiles%\nodejs;%PATH%"
)

where python >nul 2>&1 || ( echo. & echo Python vient d'etre installe mais pas encore dans le PATH. & echo Fermez cette fenetre et relancez start-erp.bat. & pause & exit /b 1 )

REM ---- 3) venv + dependances backend ----
if not exist "%PY%" (
  echo [install] Creation de l'environnement Python ...
  python -m venv "%VENV%"
)
if not exist "%VENV%\.deps_ok" (
  echo [install] Dependances backend ^(peut prendre quelques minutes^) ...
  "%PY%" -m ensurepip --upgrade >nul 2>&1
  "%PY%" -m pip --version >nul 2>&1 || (
    echo [install] pip absent, recuperation de get-pip ...
    "%PY%" -c "import urllib.request;urllib.request.urlretrieve('https://bootstrap.pypa.io/get-pip.py', r'%TEMP%\get-pip.py')"
    "%PY%" "%TEMP%\get-pip.py"
    del "%TEMP%\get-pip.py" 2>nul
  )
  "%PY%" -m pip install --upgrade pip
  "%PY%" -m pip install -r "%BACKEND%\requirements\local.txt" && echo ok> "%VENV%\.deps_ok"
)
if not exist "%VENV%\.deps_ok" ( echo. & echo [ERREUR] Installation des dependances echouee. Voir les messages ci-dessus. & pause & exit /b 1 )

REM ---- 4) .env : configuration de synchro demandee une seule fois ----
if not exist "%ENVFILE%" (
  echo.
  echo --- Configuration de la synchronisation ^(une seule fois^) ---
  set /p "MASTER_URL=URL du serveur en ligne ^(ex: https://master.exemple.com/api/v1^): "
  set /p "TOKEN=Jeton de synchronisation ^(SYNC_TOKEN^): "
  set /p "AG_ID=ID de l'agence sur le master ^(NODE_AGENCY_ID^): "
  "%PY%" -c "import secrets;print(secrets.token_urlsafe(50))" > "%TEMP%\erp_s.txt"
  set /p "SECRET="<"%TEMP%\erp_s.txt"
  "%PY%" -c "import uuid;print(uuid.uuid4())" > "%TEMP%\erp_n.txt"
  set /p "NODEID="<"%TEMP%\erp_n.txt"
  del "%TEMP%\erp_s.txt" "%TEMP%\erp_n.txt" 2>nul
  (
    echo SECRET_KEY=!SECRET!
    echo SYNC_ENABLED=1
    echo NODE_ROLE=agency
    echo NODE_ID=!NODEID!
    echo NODE_AGENCY_ID=!AG_ID!
    echo SYNC_MASTER_URL=!MASTER_URL!
    echo SYNC_TOKEN=!TOKEN!
    echo SYNC_INTERVAL=90
  )> "%ENVFILE%"
  echo [ok] Configuration enregistree dans backend\.env
)

REM ---- 5) migrations : TOUJOURS (idempotent : ne fait rien si a jour).
REM     A executer a chaque demarrage, sinon les nouvelles migrations
REM     (apres un git pull) ne sont jamais appliquees -> erreurs "no such table".
echo [base] Application des migrations ...
pushd "%BACKEND%"
"%PY%" manage.py migrate --noinput
popd

REM ---- 5b) synchro initiale depuis le master : une seule fois ----
if not exist "%VENV%\.bootstrapped" (
  echo [sync] Recuperation initiale depuis le master ...
  pushd "%BACKEND%"
  "%PY%" manage.py bootstrap_from_master && echo ok> "%VENV%\.bootstrapped"
  popd
)

REM ---- 6) dependances interface ----
if not exist "%ANGULAR%\node_modules" (
  echo [install] Dependances de l'interface ^(peut prendre quelques minutes^) ...
  pushd "%ANGULAR%"
  call npm install
  popd
)

REM ============================================================
REM  Demarrage : 3 fenetres - API, Sync, Interface
REM ============================================================
echo.
echo [demarrage] API  -^> port %API_PORT% (toutes interfaces reseau)
REM IMPORTANT : se placer dans backend\ pour que runserver utilise le MEME
REM db.sqlite3 que migrate/sync (chemin SQLite relatif au repertoire courant).
start "ERP - API" cmd /k "cd /d "%BACKEND%" && "%PY%" manage.py runserver 0.0.0.0:%API_PORT%"

echo [demarrage] Synchronisation en arriere-plan ^(toutes les 90s^)
start "ERP - Sync" "%~f0" --syncloop

echo [demarrage] Interface ^(compilation ~30s, le navigateur s'ouvre seul^)
pushd "%ANGULAR%"
start "ERP - Interface" cmd /k "set NODE_OPTIONS=--max_old_space_size=4096 && npm start -- --host 0.0.0.0 --port %UI_PORT% --open"
popd

REM ---- adresse IP du serveur sur le reseau local (pour les autres PC) ----
set "LANIP="
for /f "delims=" %%i in ('powershell -NoProfile -Command "@(Get-NetIPAddress -AddressFamily IPv4 ^| Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } ^| Sort-Object InterfaceMetric)[0].IPAddress" 2^>nul') do set "LANIP=%%i"

echo.
echo ================================================
echo.
echo    SUR CE PC       :   http://localhost:%UI_PORT%
if defined LANIP echo    DEPUIS LE RESEAU:   http://%LANIP%:%UI_PORT%
echo    API             :   port %API_PORT%
echo    Synchro         :   active
echo.
echo    Laissez les 3 fenetres "ERP - ..." ouvertes.
echo    Fermez-les pour arreter l'application.
echo.
echo    Autres PC : ouvrez http://%LANIP%:%UI_PORT% dans le navigateur.
echo    (Si un autre PC ne charge pas : lancez une fois ce fichier par
echo     clic-droit ^> Executer en tant qu'administrateur, option pare-feu.)
echo.
echo ================================================
echo.
pause
exit /b 0

REM ============================================================
REM  Boucle de synchronisation (fenetre dediee)
REM ============================================================
:syncloop
title ERP - Sync
cd /d "%BACKEND%"
:__sl
"%PY%" manage.py sync_once
timeout /t 90 /nobreak >nul
goto :__sl

REM ============================================================
REM  --install-autostart : demarrage auto a l'ouverture de session
REM  + ouverture du pare-feu (lancer en tant qu'administrateur)
REM ============================================================
:install
echo [config] Demarrage automatique a l'ouverture de session ...
powershell -NoProfile -Command "$w=New-Object -ComObject WScript.Shell; $p=[Environment]::GetFolderPath('Startup')+'\ERP SCIG.lnk'; $s=$w.CreateShortcut($p); $s.TargetPath='%~f0'; $s.WorkingDirectory='%~dp0'; $s.Save()"
echo [config] Raccourci cree dans le dossier Demarrage.
echo [config] Ouverture du pare-feu (ports %UI_PORT% et %API_PORT%) ...
netsh advfirewall firewall delete rule name="ERP UI" >nul 2>&1
netsh advfirewall firewall delete rule name="ERP API" >nul 2>&1
netsh advfirewall firewall add rule name="ERP UI" dir=in action=allow protocol=TCP localport=%UI_PORT% >nul 2>&1 && echo   - port %UI_PORT% autorise || echo   - [!] port %UI_PORT% : relancez en tant qu'administrateur
netsh advfirewall firewall add rule name="ERP API" dir=in action=allow protocol=TCP localport=%API_PORT% >nul 2>&1 && echo   - port %API_PORT% autorise || echo   - [!] port %API_PORT% : relancez en tant qu'administrateur
echo.
echo [ok] L'ERP demarrera tout seul a la prochaine ouverture de session.
echo      Pour l'enlever : start-erp.bat --remove-autostart
echo.
pause
exit /b 0

REM ============================================================
REM  --remove-autostart : annule le demarrage auto + pare-feu
REM ============================================================
:remove
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\ERP SCIG.lnk" >nul 2>&1
netsh advfirewall firewall delete rule name="ERP UI" >nul 2>&1
netsh advfirewall firewall delete rule name="ERP API" >nul 2>&1
echo [ok] Demarrage automatique et regles pare-feu supprimes.
echo.
pause
exit /b 0
