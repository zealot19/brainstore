===============================================================================
  INSTALLATION D'UN POSTE CLIENT (GUICHET) — BrainStore ERP
===============================================================================

Ce PC est un POSTE CLIENT : il utilise l'application servie par le PC SERVEUR
(le PC ou tourne start-erp.bat). Un poste client n'installe PAS l'ERP ; il lui
faut seulement :
  - un navigateur (Edge ou Chrome) pour ouvrir l'application ;
  - l'agent d'impression (ce dossier) SI ce poste a une imprimante.

Suivez la PARTIE A pour tous les postes. Faites la PARTIE B uniquement si ce
poste doit imprimer. La PARTIE C rend l'agent automatique.

-------------------------------------------------------------------------------
  PARTIE A — OUVRIR L'APPLICATION (tous les postes)
-------------------------------------------------------------------------------

1. Branchez ce PC sur le MEME reseau (meme box / meme switch) que le serveur.

2. Verifiez que le SERVEUR est allume et que l'ERP y tourne.

3. Trouvez l'ADRESSE IP du serveur sur le reseau :
     - elle s'affiche sur le serveur au demarrage :
         "DEPUIS LE RESEAU : http://192.168.x.x:4200"
     - ou, sur le serveur, ouvrez une invite de commandes et tapez :  ipconfig
       (notez "Adresse IPv4", ex. 192.168.1.50)

4. Sur ce poste, ouvrez Edge ou Chrome et allez a :
         http://ADRESSE-DU-SERVEUR:4200
     exemple :  http://192.168.1.50:4200

5. Connectez-vous. L'application fonctionne : elle parle automatiquement au
   serveur. Vous pouvez mettre la page en favori.

   >> Si la page ne s'ouvre pas : sur le SERVEUR, lancez une fois
      "start-erp.bat --install-autostart" en tant qu'administrateur
      (cela ouvre le pare-feu des ports 4200 et 8000), et verifiez que les
      deux PC sont bien sur le meme reseau.

-------------------------------------------------------------------------------
  PARTIE B — ACTIVER L'IMPRESSION SUR CE POSTE (si imprimante)
-------------------------------------------------------------------------------

L'imprimante branchee sur CE poste imprime les recus / etiquettes de CE poste.
Le serveur n'a PAS besoin de connaitre cette imprimante.

1. Installez l'imprimante sur ce PC (son pilote) et imprimez une PAGE DE TEST
   Windows. Elle doit deja fonctionner sous Windows avant de continuer.

2. Installez PYTHON 3 (https://www.python.org) :
     -> pendant l'installation, COCHEZ "Add Python to PATH".

3. Copiez CE dossier "print-helper" sur ce PC (cle USB ou partage reseau).
   (Vous n'avez PAS besoin de tout le projet, seulement ce dossier.)

4. Telechargez SumatraPDF, version "PORTABLE" (gratuit), et placez le fichier
   "SumatraPDF.exe" DANS ce dossier (a cote de print_helper.py).
   Sans lui, l'impression silencieuse ne marche pas.

5. Double-cliquez "start-print-agent.bat".
   -> une petite fenetre "ERP - Agent d'impression" s'ouvre (port 9113).
   Laissez-la ouverte.

6. VERIFICATION : dans le navigateur de ce poste, ouvrez :
         http://localhost:9113/printers
   -> vous devez voir la liste des imprimantes de ce PC (format JSON).

7. Dans l'application, sur CE poste :
     Configuration -> Imprimantes (ce poste)
   Choisissez une imprimante pour "Recu de colis" et une pour
   "Etiquette de colis". (Ce choix est enregistre SUR CE POSTE uniquement.)

8. Imprimez un colis de test : le recu et l'etiquette sortent tout seuls sur
   l'imprimante de ce poste, sans boite de dialogue.

   >> Edge ou Chrome doit etre present (il sert a fabriquer le PDF).
      Edge est deja installe sur Windows.

-------------------------------------------------------------------------------
  PARTIE C — DEMARRAGE AUTOMATIQUE DE L'AGENT (recommande)
-------------------------------------------------------------------------------

Pour que l'agent demarre tout seul, sans que le caissier le lance :

1. Touche Windows + R  ->  tapez :  shell:startup   ->  Entree
   (ouvre le dossier "Demarrage" de Windows).

2. Clic droit sur "start-print-agent.bat"  ->  "Creer un raccourci".

3. Deplacez ce raccourci DANS le dossier "Demarrage" ouvert a l'etape 1.

L'agent se lancera a chaque ouverture de session.
(Option : activez la connexion automatique Windows via "netplwiz" pour qu'il
demarre meme sans saisir de mot de passe.)

-------------------------------------------------------------------------------
  EN CAS DE PROBLEME
-------------------------------------------------------------------------------

La page http://IP-SERVEUR:4200 ne s'ouvre pas
   -> serveur eteint / ERP arrete ; pare-feu non ouvert cote serveur
      (start-erp.bat --install-autostart en admin) ; PC pas sur le meme reseau.

http://localhost:9113/printers ne repond pas
   -> l'agent n'est pas lance : double-cliquez start-print-agent.bat sur CE PC.

L'imprimante n'apparait pas dans la liste
   -> elle n'est pas installee sur CE PC ; installez son pilote et imprimez une
      page de test Windows, puis relancez l'agent.

L'impression ouvre une boite de dialogue au lieu d'imprimer toute seule
   -> SumatraPDF.exe manque dans ce dossier, ou aucune imprimante choisie dans
      Configuration -> Imprimantes (ce poste).

Rien ne sort alors que tout semble OK
   -> verifiez que vous avez bien choisi l'imprimante de CE poste (et pas une
      imprimante d'un autre PC) dans "Imprimantes (ce poste)".

-------------------------------------------------------------------------------
  RESUME
-------------------------------------------------------------------------------
  - Tous les postes :  navigateur -> http://IP-DU-SERVEUR:4200
  - Postes avec imprimante :  Python 3 + ce dossier + SumatraPDF.exe
       -> start-print-agent.bat  ->  choisir l'imprimante dans l'ERP
       -> mettre l'agent en demarrage automatique
  - Poste sans imprimante :  sautez la PARTIE B (l'appli marche quand meme ;
       l'impression passera par la fenetre d'impression du navigateur).
===============================================================================
