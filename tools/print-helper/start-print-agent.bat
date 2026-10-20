@echo off
setlocal
REM ============================================================
REM  Agent d'impression BrainStore — a lancer sur CHAQUE poste guichet
REM  (pas seulement le serveur). Chaque poste imprime sur SES imprimantes.
REM
REM  Pre-requis sur ce poste :
REM   - Python 3 (https://www.python.org, cocher "Add to PATH")
REM   - SumatraPDF.exe (portable, gratuit) dans CE dossier
REM   - Microsoft Edge (deja present) ou Google Chrome
REM
REM  Dans l'ERP, sur ce poste : Configuration > Imprimantes (ce poste),
REM  choisir une imprimante pour le Recu et pour l'Etiquette.
REM ============================================================
cd /d "%~dp0"
title ERP - Agent d'impression
if not exist "SumatraPDF.exe" if "%SUMATRA_PATH%"=="" (
  echo [ATTENTION] SumatraPDF.exe est introuvable dans ce dossier.
  echo             L'impression silencieuse ne marchera pas sans lui.
  echo             Telechargez la version "portable" et placez SumatraPDF.exe ici.
  echo.
)
where py >nul 2>&1 && (py print_helper.py) || (python print_helper.py)
echo.
echo [agent arrete] Fermeture.
pause
