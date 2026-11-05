@echo off
REM Arrete l'ERP agence lance en arriere-plan (API, synchro, impression, interface).
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-erp-background.ps1" -Stop
echo.
echo [ok] ERP arrete.
echo.
pause
