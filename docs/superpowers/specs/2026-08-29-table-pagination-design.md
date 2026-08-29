# Pagination des tableaux (« lignes par page ») — Design (spec)

**Date:** 2026-08-29
**Statut:** en attente de revue

## But
Ajouter à **tous les tableaux** de l'app un contrôle **« lignes par page »**
(10 / 25 / 50 / 100, défaut **25**) avec navigation de pages. Chaque page rend
aujourd'hui son propre `<table>` (≈ 83 pages, pas de composant tableau partagé) et
charge toutes les lignes (services en `page_size=500`). On veut une brique **réutilisable
et DRY** appliquée par tableau, en **pagination côté client** (les données sont déjà chargées).

## Décisions verrouillées
1. Brique réutilisable = **un pipe `paginate` + un composant `TablePaginatorComponent`**
   (pas de service singleton partagé — plusieurs tableaux par page possibles).
2. Tailles : `[10, 25, 50, 100]`, défaut **25**.
3. **Côté client** : on pagine les lignes déjà chargées (aucun changement backend).
4. Déploiement **par lots** : construire la brique + l'appliquer d'abord aux tableaux
   opérationnels clés (lot 1), puis balayer le reste.

## Rejeté
- `custom-pagination` existant (`app/shared/custom-pagination`) : couplé à un service
  singleton `PaginationService` (casse avec plusieurs tableaux par page), lourd à câbler.
- Composant tableau générique `<app-data-table [columns]>` : imposerait de réécrire les
  83 tableaux sur mesure (colonnes, badges, actions différents) — trop invasif.

---

## Composants

### 1. Pipe `paginate` (`src/app/shared/table-paginator/paginate.pipe.ts`)
Pipe **pur**, standalone. Découpe le tableau avec deux arguments primitifs (donc le pipe
se ré-exécute quand `page` ou `size` changent) :
```ts
@Pipe({ name: 'paginate', standalone: true })
export class PaginatePipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, page: number, size: number): T[] {
    const arr = items ?? [];
    if (!size || size <= 0) return arr;
    const start = (Math.max(1, page) - 1) * size;
    return arr.slice(start, start + size);
  }
}
```

### 2. `TablePaginatorComponent` (`src/app/shared/table-paginator/table-paginator.component.ts`)
Standalone (CommonModule + FormsModule). N'affiche rien si `total <= plus petite taille`
sauf le sélecteur. Reçoit et **mute en place** un objet d'état partagé.
```ts
export interface PageState { page: number; size: number; }

@Component({ selector: 'app-table-paginator', standalone: true, ... })
export class TablePaginatorComponent implements OnChanges {
  @Input() total = 0;
  @Input() state!: PageState;                 // partagé avec le pipe (par référence)
  @Input() sizes: number[] = [10, 25, 50, 100];

  ngOnChanges(): void { this.clamp(); }        // total a pu changer (filtre/reload)
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.state.size)); }
  get from(): number { return this.total === 0 ? 0 : (this.state.page - 1) * this.state.size + 1; }
  get to(): number { return Math.min(this.total, this.state.page * this.state.size); }
  get pages(): number[] { /* fenêtre de N° de page autour de la page courante */ }
  setSize(s: number): void { this.state.size = +s; this.state.page = 1; }
  go(p: number): void { this.state.page = Math.min(Math.max(1, p), this.totalPages); }
  private clamp(): void { if (this.state.page > this.totalPages) this.state.page = 1; }
}
```
Template : `Afficher [<select 10/25/50/100>] par page` · `{{from}}–{{to}} sur {{total}}` ·
boutons Précédent / N°s de page / Suivant (style `.pagination` Bootstrap existant, couleur
primaire bleue). Masqué si `total === 0`.

### Recette d'intégration (par tableau — ~4 éditions)
Dans le composant :
```ts
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
// imports: [..., PaginatePipe, TablePaginatorComponent]
pg: PageState = { page: 1, size: 25 };
```
Dans le HTML (sur le tableau de lignes `rows` — ou `filtered` si un filtre client existe) :
```html
@for (r of rows | paginate:pg.page:pg.size; track r.id) { … }
</table>
<app-table-paginator [total]="rows.length" [state]="pg"></app-table-paginator>
```
Le composant mute `pg` (par référence) → le pipe (args `pg.page`/`pg.size`) se ré-exécute.
Aucun `(output)` ni state service. Les chemins relatifs `../` dépendent de la profondeur de
la page (les pages `_api/pages/<mod>/<page>/` utilisent `../../../../app/shared/...`).

---

## Lot 1 — tableaux opérationnels clés
Appliquer la recette à (source de lignes entre parenthèses) :
- Colis (`rows`), Bagages (`rows`), Réception colis, Manifeste
- Réservations (`rows`/`filtered`), Passagers, Voyages (liste)
- Caisses/Registres, Sessions, Mouvements, Transferts, Comptes bancaires
- Dépense générale (`rows`), Dépense voyage (`filtered`)
- Véhicules
Chaque page : build `ng build` OK, tableau paginé, sélecteur fonctionnel.

## Lots suivants
- Config Voyages (villes, points de service, trajets, plans de bus, tarifs, types de
  dépense, barèmes, natures/types de colis, plages horaires, planifications, fidélité…).
- Config Flotte, Comptabilité (plan comptable, journaux, exercices), Administration
  (agences, utilisateurs, profils, rôles, audit), RBAC, Reporting, SCIG.
- Un lot = un commit + `ng build`. La liste exhaustive des `<table>` restants se dérive de
  `grep -rl "<table" src/_api/pages`.

## Hors périmètre
- Pagination **serveur** (les services gardent `page_size` élevé ; suffisant tant qu'un
  tableau ne dépasse pas quelques centaines de lignes — à réévaluer si besoin).
- Tri de colonnes, export, recherche globale (les filtres existants restent tels quels ;
  la pagination s'applique après filtrage).
- Les tableaux de démo DreamsPOS non utilisés par l'ERP (facultatif, plus tard).

## Tests / done
- Le pipe `paginate` : test unitaire Angular n'est pas en place dans le repo → validation par
  `ng build` + vérif manuelle (le pipe est trivial et pur). On ajoute une vérif logique dans
  la revue : slice correct (page 2, size 25 → éléments 26–50).
- Chaque lot : `ng build` OK ; sélecteur change le nombre de lignes ; navigation Préc/Suiv ;
  `from–to sur total` correct ; réinitialisation à la page 1 après changement de filtre
  (clamp) ; plusieurs tableaux sur une même page indépendants.
