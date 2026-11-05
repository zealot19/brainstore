' Lance l'ERP agence en ARRIERE-PLAN, sans aucune fenetre (meme pas un flash).
' Double-cliquez ce fichier pour demarrer ; utilisez stop-erp.bat pour arreter.
Set sh = CreateObject("WScript.Shell")
ps1 = Replace(WScript.ScriptFullName, "start-erp-background.vbs", "start-erp-background.ps1")
sh.Run "powershell -NoProfile -ExecutionPolicy Bypass -File """ & ps1 & """", 0, False
