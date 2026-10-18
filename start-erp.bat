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

REM ---- fenetre de synchro: ce meme fichier relance avec --syncloop ----
if /i "%~1"=="--syncloop" goto :syncloop

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
  echo [install] Environnement Python + dependances ^(peut prendre quelques minutes^) ...
  python -m venv "%VENV%"
  "%PY%" -m pip install --upgrade pip
  "%PY%" -m pip install -r "%BACKEND%\requirements\local.txt"
)

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

REM ---- 5) base locale + synchro initiale depuis le master ----
if not exist "%BACKEND%\db.sqlite3" (
  echo [install] Initialisation de la base ...
  pushd "%BACKEND%"
  "%PY%" manage.py migrate --noinput
  echo [sync] Recuperation initiale depuis le master ...
  "%PY%" manage.py bootstrap_from_master
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
echo [demarrage] API  -^> http://localhost:%API_PORT%
start "ERP - API" cmd /k ""%PY%" "%BACKEND%\manage.py" runserver 127.0.0.1:%API_PORT%"

echo [demarrage] Synchronisation en arriere-plan ^(toutes les 90s^)
start "ERP - Sync" "%~f0" --syncloop

echo [demarrage] Interface ^(compilation ~30s, le navigateur s'ouvre seul^)
pushd "%ANGULAR%"
start "ERP - Interface" cmd /k "npm start -- --port %UI_PORT% --open"
popd

echo.
echo ================================================
echo.
echo    ERP OUVERT :   http://localhost:%UI_PORT%
echo    API        :   http://localhost:%API_PORT%
echo    Synchro    :   active
echo.
echo    Laissez les 3 fenetres "ERP - ..." ouvertes.
echo    Fermez-les pour arreter l'application.
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
