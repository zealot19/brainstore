# Revue de l'application — Cahier des modifications

**Revue par :** SHIMI · **Rédigé par :** Kevin ANOUMANG (AWD SARL) · **Date :** 8 octobre 2026 · **Version :** 1.0

Ce document regroupe les modifications dictées les 7 et 8 octobre 2026. Les demandes portant sur un même écran ou une même fonctionnalité ont été fusionnées en une seule modification (référence M01, M02…). Chaque modification indique les numéros des dictées d'origine (n° 1 à 42).

> **Suivi d'implémentation (Claude / shimi).** Statut au fil de l'eau.
> - ✅ Livré & mergé sur master→deploy : **M01** (module Configuration), **M03** (journal d'audit), **M04** (code véhicule), **M05** (plans de bus numériques), **M07** (menu Documents), **M08** (n° carte d'identité équipage), **M09** (lieux unifiés), **M10** (sélecteur d'arrêts), **M11** (types de voyage), **M12** (quota réservations + archivage), **M17** (formulaires compacts — paiement), **M18** (disponibilité formulaire de vente), **M23** (bagage lié au passager), **M24** (nature/contenu colis).
> - ⏳ Restant : M02, M06, M13, M14, M15, M16, M19, M20, M21, M22, M25, M26, M27, M28, M29, M30, M31.
> - ⚠️ Conflits à arbitrer avec l'existant : **M06** (suppression Garage/Accidents) défait le travail récent *accidents ↔ voyage* déjà mergé ; **M05** (plans de bus numériques, suppression de l'éditeur visuel) recoupe le travail existant *blockable-seats / seat-assignment / plan-drives-seats*.

---

## 1. Navigation et ergonomie générale

### M01. Module Configuration centralisé — *(dictées 3, 4, 41)* — ✅ livré
Toutes les configurations de tous les modules (Trésorerie, Flotte, etc.) regroupées dans un module unique **Configuration**, placé juste sous le Tableau de bord.
- Les autres modules ne contiennent plus que les fonctionnalités opérationnelles.
- Les marques et modèles de véhicules quittent le menu opérationnel Flotte pour la Configuration.
- Ajout du menu Types d'opération (voir M26).
- Configurations classées par ordre d'utilisation et de dépendance (ordre en annexe A).

### M02. Densité de l'interface et petits écrans — *(dictée 16)*
Réduction globale de la taille des textes et des composants de toute l'application.
- Correction des chevauchements sur petits écrans.
- Mise en page responsive des tableaux, formulaires, menus et cartes.

### M03. Journal d'audit global — *(dictées 31, 32)* — ✅ livré
Toute action qui valide, modifie ou annule un élément est tracée.
- Informations : auteur, action, date et heure, ancienne et nouvelle valeur.
- Journal consultable et filtrable (utilisateur, période, module, type d'action).
- Socle de la traçabilité exigée dans M16, M21, M22, M25, M26, M29, M30.

## 2. Flotte et véhicules

### M04. Formulaire de création de véhicule — *(dictées 1, 2)* — ✅ livré
Simplification du formulaire et nouvel identifiant.
- Suppression des champs : données de stationnement, coût d'acquisition, immatriculation, numéro VIN.
- Ajout d'un champ **Code véhicule**, identifiant du véhicule à la place de l'immatriculation et du VIN.

### M05. Plans de bus — *(dictées 14, 18)* — ✅ livré
Les plans de bus sont créés dans la Configuration puis choisis directement à la création du bus.
- Suppression de la fonctionnalité séparée d'affectation d'un plan à un bus.
- Suppression de l'éditeur visuel de plan : le plan est défini uniquement par des champs numériques (nombre total de places, places disponibles, places bloquées, places vendables, etc.).
- Contrôle de cohérence (ex. places vendables ≤ total − places bloquées).

### M06. Suppression de Garage et Accidents — *(dictée 5)*
Suppression de tout ce qui concerne le Garage et les Accidents (menus, écrans, données). Fonctionnalités reconstruites dans un module dédié ultérieurement.

### M07. Documents des véhicules — *(dictée 6)* — ✅ livré
Le menu Documents est déplacé dans les menus opérationnels des Véhicules.

### M08. Membres d'équipage — *(dictée 7)* — ✅ livré
Ajout d'un champ **Numéro de carte d'identité** sur le modèle et le formulaire des membres d'équipage.

## 3. Lieux, trajets et voyages

### M09. Lieux unifiés — *(dictée 8)* — ✅ livré
Suppression de la distinction entre point de service et point de dépôt. On définit des **Lieux**, dont n'importe lequel peut servir de départ ou de destination, sans préciser s'il s'agit d'un point de vente de tickets.

### M10. Sélecteur des arrêts intermédiaires — *(dictée 9)* — ✅ livré
Nouveau composant réutilisable pour choisir les points de dépôt entre le départ et la destination.
- Sélection multiple en une fois.
- Retrait d'un arrêt déjà sélectionné.
- Un même lieu peut être sélectionné plusieurs fois.
- Propositions pertinentes uniquement, une fois le départ et la destination choisis.

### M11. Types de voyage — *(dictée 25)* — ✅ livré
Configuration des types de voyage : **Départ, Complément, Additif**. Un voyage est de type Départ par défaut ; les autres types sont sélectionnables.

### M12. Création de voyage : quota de réservations et archivage — *(dictées 19, 22)* — ✅ livré
- Ajout du **nombre de places réservables** (réserver maintenant, payer plus tard). Les places vendables proviennent du plan de bus ; le quota de réservation ne peut pas les dépasser.
- Suppression du paramètre délai d'archivage de la configuration des voyages (déjà géré dans l'Administration).

### M13. Génération de voyages en lot — *(dictée 23)*
Écran de génération de plusieurs voyages en une opération.
- Paramètres : trajet, charte, catégorie tarifaire, date de début, date de fin.
- Création d'un voyage pour chaque date de la période.

### M14. Location de véhicules — *(dictée 26)*
Nouvelle catégorie tarifaire **Location**.
- Aucune vente de tickets possible sur un voyage de ce type (bus loué en entier).
- Les autres paramètres du voyage sont conservés.
- Enregistrement des dépenses et recettes propres à ce bus.

### M15. Démarrage et résultat d'un voyage — *(dictées 11, 27)*
- Un voyage ne peut pas démarrer tant que les dépenses définies pour ce voyage ne sont pas payées (bouton désactivé, contrôle côté serveur, affichage des dépenses en attente).
- Affichage des **recettes par voyage**, en plus des dépenses : vente de tickets, vente de colis, transit des colis, transit des bagages, avec total et résultat (recettes − dépenses).

### M16. Transbordement — *(dictée 24)*
Amélioration du système de transbordement existant.
- Trois modes : général, par véhicule, par voyage.
- Amélioration des performances.
- Traçabilité complète : origine, destination, passagers/colis concernés, auteur, date, motif.

## 4. Vente de tickets et réservations

### M17. Formulaires de vente compacts (Ticket, Bagage, Colis) — *(dictée 15)* — ✅ livré (paiement)
Les trois formulaires doivent tenir à l'écran sans défilement.
- Réduction de la taille du formulaire, des champs et du texte.
- Suppression du champ tarif de la section Voyage ; le tarif n'apparaît que dans la section Paiement.
- Section Paiement : suppression des champs montant reçu et monnaie rendue ; affichage du seul montant à payer, suivi du bouton Payer / Enregistrer.

### M18. Disponibilité et créneaux sur le formulaire de vente — *(dictées 21, 28)* — ✅ livré
- Dès la sélection du voyage, affichage avant toute saisie client : places vendables restantes, réservations encore possibles, places vendues, réservées, bloquées.
- Si le voyage est complet ou le quota atteint, l'action correspondante est désactivée.
- La liste des plages horaires ne propose que les voyages programmés à la date sélectionnée pour les critères choisis ; message si aucun voyage.

### M19. Réservations via le formulaire de vente — *(dictée 20)*
- Suppression de la section « Nouvelle réservation ».
- Nouveau moyen de paiement **Non payé** sur le formulaire de vente : un ticket « Non payé » est une réservation, pas une vente, et consomme le quota de réservations du voyage.
- Au paiement, la réservation est retrouvée dans l'onglet Réservations et convertie en vente.

### M20. Billet aller-retour : traitement du retour — *(dictée 29)*
Au retour, toutes les informations de l'aller sont récupérées automatiquement ; il suffit d'affecter le client à un voyage retour, sans ressaisie ni nouveau paiement.

### M21. Report et régularisation des tickets — *(dictée 30)*
- **Report** : change uniquement la date/le voyage, sans impact sur le prix.
- **Régularisation** : changement de catégorie tarifaire, de destination, etc.
- Déclassement interdit (ex. VIP vers Classique refusé avec message) ; seul le surclassement est permis.
- Calcul et encaissement de la différence lorsque le nouveau tarif est plus élevé.
- Historique de tous les reports et régularisations.

### M22. Annulation des tickets — *(dictées 31, 42)*
- Toute annulation génère un **bon d'annulation** imprimable (ticket, motif, montant remboursé, auteur, date).
- Vue dédiée listant tous les tickets annulés, filtrable (date, agence, voyage, caissier), avec lien vers le bon d'annulation.

## 5. Bagages et colis

### M23. Formulaire d'enregistrement des bagages — *(dictée 33)* — ✅ livré
Le passager est obligatoire. Les champs nom et informations du propriétaire ne sont plus saisissables : ils s'affichent en lecture seule (grisés) dès que le passager est choisi.

### M24. Formulaire d'enregistrement des colis et natures de colis — *(dictées 34, 35)* — ✅ livré
- Description et contenu du colis obligatoires.
- Sélection de la nature et du type de colis sur le formulaire.
- Suppression de tous les interrupteurs (toggles) du formulaire de création de nature de colis.

### M25. Expédition partielle des colis — *(dictée 36)*
Un colis peut être expédié en plusieurs fois, sur différents bus ou voyages.
- Pour chaque expédition : quantité, voyage/bus, validation (auteur, date).
- Suivi des quantités totale, expédiée et restante ; blocage au-delà du restant.
- Historique complet des validations.

## 6. Trésorerie et caisses

### M26. Types d'opération, dépenses et frais de route — *(dictées 10, 12, 41)*
- Configuration des **types d'opération** ; les opérations sont classées en dépenses et recettes.
- Toute dépense doit indiquer la **caisse** d'où elle est décaissée (champ obligatoire).
- Nouveau menu **Trésorerie > Frais de route** pour les dépenses liées à un voyage : choix de la caisse puis décaissement.
- Section de validation des opérations (dépenses et recettes) : valider, invalider ou modifier (ex. le montant). Pour les frais de route, la validation est réservée à l'administrateur.
- Statut par opération (en attente / validée / invalidée) et traçabilité complète.

### M27. Types de caisse — *(dictée 37)*
- Type de caisse configurable : **recette, dépense, agence**.
- Option précisant si la caisse peut avoir un solde négatif ou uniquement positif.

### M28. Billetage étendu — *(dictée 38)*
Le billetage enregistre, en plus des billets et pièces : **bons de caisse, monnaie électronique et autres types de valeurs** (configurables). Le total intègre toutes ces valeurs.

### M29. Cycle de session de caisse — *(dictée 39)*
- Création de la caisse par le chef d'agence.
- Ouverture par le chef d'agence ou le caissier titulaire, à l'heure de sa session ; affichage du solde exact à l'ouverture.
- Billetage par le caissier en fin de travail, puis arrêt de la session (plus aucune opération).
- Clôture par le chef d'agence uniquement : il voit le billetage détaillé (billets, pièces, bons, autres valeurs) et l'écart éventuel.
- Sans écart : clôture directe. Avec écart : justification obligatoire avant clôture.
- Chaque étape est tracée.

### M30. Demandes d'explication — *(dictée 40)*
En cas d'écart de session, le chef d'agence émet une demande d'explication au caissier, qui répond dans l'application. Demande, réponse et décision sont historisées et rattachées à la session.

## 7. Modèles de documents

### M31. Modèles de tickets et de documents — *(dictées 13, 17)*
Configuration fine de l'apparence de tous les documents produits (tickets, reçus, bons d'annulation, manifestes, demandes d'explication, rapports…).
- Dimensions configurables (largeur, hauteur), marges, format de page.
- Plusieurs modèles par type de document, dont un par défaut.
- Éditeur intégré permettant de créer ses propres modèles en HTML/CSS, avec variables dynamiques et aperçu en direct.

---

## Annexe A. Ordre proposé du module Configuration

| # | Configuration | Requise par |
|---|---------------|-------------|
| 1 | Lieux | Trajets |
| 2 | Trajets (départ, destination, arrêts) | Voyages, chartes |
| 3 | Marques de véhicules | Modèles |
| 4 | Modèles de véhicules | Véhicules |
| 5 | Plans de bus | Véhicules (bus) |
| 6 | Catégories tarifaires (dont Location) | Voyages, vente |
| 7 | Types de voyage | Voyages |
| 8 | Chartes | Génération de voyages |
| 9 | Natures et types de colis | Enregistrement des colis |
| 10 | Types de caisse | Caisses |
| 11 | Caisses | Sessions, dépenses |
| 12 | Types d'opération | Dépenses, recettes, frais de route |
| 13 | Types de valeurs (billetage) | Billetage |
| 14 | Moyens de paiement (dont Non payé) | Vente, réservations |
| 15 | Modèles de documents | Impression |

## Annexe B. Points à clarifier

- **M04** : le code véhicule est-il généré automatiquement (ex. VH-0001) ou saisi, et doit-il être unique ?
- **M08** : le numéro de carte d'identité de l'équipage doit-il être unique ?
- **M11** : un voyage Complément ou Additif doit-il être rattaché à un voyage de Départ existant ?
- **M13** : la génération en lot doit-elle permettre de choisir les jours de la semaine et l'heure de départ ?
- **M21** : un changement de destination vers un trajet moins cher est-il refusé ou accepté sans remboursement ?
- **Dictée n° 43 (interrompue)** : séparation de la configuration des dépenses de voyage et des dépenses générales ?
- Nom officiel de l'application à indiquer en page de garde.
