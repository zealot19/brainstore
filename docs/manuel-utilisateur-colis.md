# Manuel Utilisateur — Module Colis

**Pour qui ?** Les guichetiers et agents qui enregistrent, expédient, réceptionnent et
remettent les colis au quotidien.
**Ce que couvre ce manuel :** le parcours complet d'un colis, du dépôt à la remise, écran
par écran, avec les boutons exactement comme ils apparaissent à l'écran.

> Repère rapide : tout se trouve dans le menu **Colis** (barre de gauche).

---

## 1. À quoi sert le module Colis

Le module permet de gérer un colis de bout en bout :

1. **Enregistrer** le colis au départ et **encaisser** le montant.
2. **Expédier** le colis en l'affectant à un voyage.
3. **Réceptionner** le colis à son arrivée (vérifier les pièces reçues).
4. **Remettre** le colis au destinataire (retrait au guichet) **ou le livrer à domicile**.

Chaque étape fait avancer le **statut** du colis (voir §3).

---

## 2. Où le trouver — le menu « Colis »

Dans la barre de gauche, section **Colis** :

| Entrée du menu       | Sert à…                                                        |
|----------------------|----------------------------------------------------------------|
| **Nouveau colis**    | Enregistrer un colis et encaisser (étape 1)                    |
| **Expédition**       | Affecter les colis à un voyage et les expédier (étape 2)       |
| **Réception colis**  | Réceptionner les colis à l'arrivée (étape 3)                   |
| **Retrait colis**    | Remettre le colis au destinataire au guichet (étape 4)        |
| **Livraison colis**  | Livrer le colis au domicile du client (service payant)        |
| **Tout Afficher**    | Liste de tous les colis : rechercher, imprimer, voir le détail |

> **Droits d'accès.** Enregistrer, expédier, retirer, livrer et **annuler** demandent le
> droit *gestion des colis*. Un guichetier peut consulter et travailler ; seules certaines
> actions sensibles (par ex. **retirer un colis déjà validé d'un voyage**) sont réservées à
> l'**administrateur**.

---

## 3. Le cycle de vie d'un colis

Un colis passe par ces statuts, dans l'ordre :

```
Enregistré → Prêt à expédier → Chargé / En transit → Arrivé
          → Disponible pour retrait → Retiré
```

| Statut                     | Signification                                                 |
|----------------------------|--------------------------------------------------------------|
| **Enregistré**             | Déposé et payé au départ. Pas encore affecté à un voyage.    |
| **Prêt à expédier**        | Prêt à être chargé sur un voyage.                            |
| **Partiellement expédié**  | Une partie des pièces est partie, le reste attend.          |
| **Chargé / En transit**    | Affecté à un voyage et en route.                             |
| **Arrivé**                 | Le voyage est arrivé ; à réceptionner.                       |
| **Disponible pour retrait**| Réceptionné ; le destinataire peut venir le chercher.       |
| **Retiré**                 | Remis au destinataire (ou livré). Dossier clos.             |
| **Annulé**                 | Annulé avant expédition (remboursement éventuel).           |

---

## 4. Étape 1 — Enregistrer un colis

**Menu : Colis → Nouveau colis** (ou, dans **Tout Afficher**, le bouton
**« Enregistrer un colis »**).

Remplissez le formulaire, section par section :

**Trajet**
- **Point de départ** — l'agence/point d'où part le colis.
- **Point d'arrivée** — la destination.

**Expéditeur / Destinataire**
- **Nom de l'expéditeur**, **Tél. expéditeur** *(obligatoires)*.
- **Nom du destinataire**, **Tél. destinataire**, **Adresse destinataire**.
- **Pièce du destinataire** — *facultatif au dépôt*. Elle sera **vérifiée au retrait** ;
  si elle est inconnue, laissez vide et saisissez-la au moment de la remise.

**Contenu**
- **Type de colis** — choisit le tarif. Selon le type, le prix est soit **fixe** (imposé,
  non modifiable), soit dans une **fourchette autorisée**.
- **Quantité** — nombre de pièces.
- **Valeur déclarée**, **Description / Nature**, **Poids (kg)**.

**Encaissement**
- **Mode de paiement**, **Encaissé** (montant reçu), **Monnaie rendue** (calculée).

Cliquez **« Enregistrer & encaisser »**.

➡️ Le colis est créé au statut **Enregistré** avec une **référence** du type
`DLA/0001/10/2026` (préfixe agence / numéro / mois / année). Le reçu et l'étiquette peuvent
être imprimés aussitôt (§5).

---

## 5. Imprimer le reçu et l'étiquette

Dans **Tout Afficher**, sur la ligne du colis, deux icônes :

- **Reçu** — *Imprimer le reçu* (pour le client).
- **Étiquette** — *Imprimer l'étiquette du colis* (à coller sur le colis, avec code-barres).

L'impression part sur l'imprimante **de ce poste** (chaque guichet imprime sur la sienne).
Pour que cela marche, l'agent d'impression doit tourner sur le poste et l'imprimante doit
être choisie dans **Configuration → Imprimantes (ce poste)** (voir le guide
`README-POSTE-CLIENT.txt`). Sans imprimante choisie, l'application propose la fenêtre
d'impression du navigateur.

---

## 6. Étape 2 — Expédier (affecter à un voyage)

**Menu : Colis → Expédition.**

**1. Choisir le voyage.** En haut, filtrez pour trouver le bon voyage :
- **Trajet**, **Destination**, **Jour du voyage** (par défaut : **aujourd'hui**),
  **Véhicule / Code**.

**2. Charger les colis.**
- À gauche, **Colis prêts** : les colis compatibles avec ce voyage.
- Cliquez **Affecter** pour les faire passer à droite, dans **Colis du voyage**. Vous
  pouvez n'affecter qu'une partie des pièces (colonne **Qté**, **Restant**).
- Puis **Expédier** (ou **Tout expédier**) pour valider le départ.

**Imprimer le manifeste.** Le bouton/icône **Manifeste** imprime la liste des colis du
voyage (à remettre au chauffeur / au point d'arrivée).

> ⚠️ **Après validation, un guichetier ne peut plus retirer un colis du voyage.** Si une
> erreur a été faite, seul un **administrateur** peut le retirer (bouton **Retirer**). C'est
> une sécurité pour éviter qu'un colis déjà annoncé au départ disparaisse de la liste.

---

## 7. Étape 3 — Réceptionner à l'arrivée

**Menu : Colis → Réception colis.** (À faire au point d'arrivée.)

Les colis **En transit** (chargés) de ce point apparaissent dans la liste.

Pour chaque colis, vérifiez le contenu et saisissez :
- **Reçues** — nombre de pièces effectivement reçues,
- **Manquant** et **Avarié** si besoin.

Puis cliquez **Réceptionner**. Le bouton **« Réceptionner Tout »** réceptionne
intégralement toute la sélection d'un coup.

➡️ **Seuls les colis réceptionnés peuvent ensuite être retirés ou livrés.** Après
réception, le colis passe **Disponible pour retrait**.

---

## 8. Étape 4 — Remettre au destinataire (Retrait)

**Menu : Colis → Retrait colis.** Deux onglets : **À retirer** / **Retirés**.

Sur la ligne du colis, cliquez **Retrait** :

- **Retrait par le destinataire** : vérifiez la **Pièce (CNI)** du destinataire —
  **obligatoire**. Si elle était déjà au dossier, elle s'affiche : vérifiez et validez.
- **Retrait par un mandataire** (si ce n'est pas le destinataire) : saisissez le
  **Nom du mandataire** et sa **Pièce (CNI)** — tous deux obligatoires.
- **Pièces à retirer** : si le retrait partiel est autorisé, indiquez le **nombre de pièces**
  à remettre (le reste reste disponible). L'écran indique combien de pièces sont disponibles.

Cliquez **« Valider le retrait »**. Le colis passe **Retiré**.

> ℹ️ **Retrait partiel / complet.** Un paramètre de configuration décide si un colis peut
> être retiré dès qu'il est **partiellement arrivé** ou seulement quand il est **entièrement
> arrivé**. Si le retrait est bloqué, c'est que toutes les pièces ne sont pas encore
> réceptionnées (ou que la configuration exige l'arrivée complète).

---

## 9. Livraison à domicile (service payant, facultatif)

**Menu : Colis → Livraison colis.** Onglets **À livrer** / **Livrées**.

Pour un colis **arrivé**, cliquez **Livrer**, puis saisissez :
- **Adresse de livraison** (quartier, ville…),
- **Montant de la livraison** (encaissé en plus),
- **Reçu par (nom)** et **Pièce présentée (n°)**.

La recette de livraison est enregistrée automatiquement.

---

## 10. Annuler un colis (et remboursement)

Depuis **Tout Afficher** : sélectionnez le(s) colis puis **« Annuler la sélection »**
(ou l'action d'annulation sur la ligne). Confirmez *« Annuler ce colis ? »*.

- On ne peut annuler qu'un colis **Enregistré** ou **Prêt à expédier**
  (*« Un colis déjà expédié ne peut pas être annulé. »*). Pour un colis déjà validé sur un
  voyage, demandez d'abord à un **administrateur** de le retirer du voyage.
- **Remboursement** : selon la configuration **Trésorerie → Remboursement** pour le type
  « colis » (pourcentage du montant payé **ou** montant fixe). **Par défaut, le taux est 0 %**
  (aucun remboursement) tant qu'il n'a pas été configuré. S'il y a un remboursement, il est
  décaissé depuis la **caisse ouverte** de l'agent.

---

## 11. Reprendre la numérotation (après une coupure)

Après une coupure de courant ou d'application, les colis sont parfois notés **sur papier**.
Pour réaligner les références et éviter les doublons :

**Colis → Tout Afficher → bouton « Numérotation ».**
Saisissez le **Prochain numéro système** pour qu'il reprenne à la suite des reçus papier.

> **Saut en avant uniquement** — on ne peut pas réutiliser un numéro déjà émis.

---

## 12. Où voir l'argent encaissé

Les encaissements colis apparaissent dans la **Trésorerie** :
- **Trésorerie → Recette colis** (dépôts),
- **Trésorerie → Recette livraison** (livraisons à domicile).

---

## 13. Problèmes courants

| Problème                                             | Que faire                                                  |
|------------------------------------------------------|------------------------------------------------------------|
| L'impression ouvre une fenêtre au lieu d'imprimer    | Agent d'impression non lancé, ou aucune imprimante choisie dans **Imprimantes (ce poste)**. |
| Rien ne s'imprime                                    | Lancez `start-print-agent.bat` sur ce poste ; vérifiez `http://localhost:9113/printers`. |
| Impossible de retirer un colis d'un voyage           | Normal pour un guichetier après validation — un **administrateur** doit le faire. |
| Le retrait par le destinataire est bloqué            | Le colis n'est pas encore **réceptionné**, ou la config exige l'arrivée **complète**. |
| « Un colis déjà expédié ne peut pas être annulé »    | On n'annule qu'avant expédition ; faites retirer le colis du voyage par un admin. |
| Référence qui saute / doublon après une coupure      | Utilisez **Numérotation** pour fixer le prochain numéro (§11).            |
| Le colis n'apparaît pas dans **Expédition**          | Il n'est pas **Prêt à expédier**, ou le filtre **Destination/Jour** ne correspond pas. |

---

## 14. Aide-mémoire (le geste de tous les jours)

1. **Dépôt** → *Nouveau colis* → remplir → **Enregistrer & encaisser** → imprimer **Reçu** + **Étiquette**.
2. **Au départ** → *Expédition* → choisir le voyage (Destination + Jour) → **Affecter** → **Expédier** → imprimer **Manifeste**.
3. **À l'arrivée** → *Réception colis* → saisir **Reçues / Manquant / Avarié** → **Réceptionner**.
4. **Remise** → *Retrait colis* → vérifier la **CNI** (ou mandataire) → **Valider le retrait**.
5. *(option)* **Livraison** → *Livraison colis* → adresse + montant → **Livrer**.

---

*Les libellés de ce manuel reprennent ceux affichés à l'écran (version française). En cas
de doute sur un droit d'accès ou un paramètre (tarifs, remboursement, retrait partiel),
rapprochez-vous de votre administrateur.*
