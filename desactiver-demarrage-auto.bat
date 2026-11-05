@echo off
REM ============================================================
REM  Desactive le demarrage automatique de l'ERP + regles pare-feu.
REM  -> clic droit > "Executer en tant qu'administrateur"
REM     (ce fichier demande l'elevation tout seul au besoin).
REM ============================================================
net session >nul 2>&1
if errorlevel 1 (
  echo [info] Elevation en administrateur...
  powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
  exit /b
)
cd /d "%~dp0"
call "%~dp0start-erp.bat" --remove-autostart
