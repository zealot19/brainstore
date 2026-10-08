# M01 — Module Configuration centralisé — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Regrouper toute la configuration des modules (Flotte, Voyages, Colis, Trésorerie, Documents) dans un unique module « Configuration » placé sous le Tableau de bord, à plat dans l'ordre de l'Annexe A, sans changer les URLs.

**Architecture:** Réorganisation de l'arbre de menu dans `sidebar.service.ts` (`sidebarData1`) + deux correctifs d'entitlement pour que la section Configuration (sans `module`) survive au filtrage et que chacun de ses items soit masqué selon le module de la société. Les écrans de config à venir (M11/M26/M27/M28) sont des stubs « bientôt disponible ». Frontend seul, aucune URL ni backend modifié.

**Tech Stack:** Angular (standalone components, control-flow), Transloco i18n, karma/jasmine (headless Chrome). Build : `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-08-m01-configuration-module-design.md`

## Global Constraints

- **Aucun changement d'URL** : les routes/composants existants restent en place ; on ne modifie que le regroupement de menu. Seuls ajouts de routes : 4 stubs sous `/configuration/*`.
- **Périmètre fichiers** : `sidebar.service.ts`, `sidebar-one.component.ts`, `routes.ts`, `pages.routes.ts`, un nouveau composant stub, 4 fichiers i18n. **Ne pas** toucher `sidebar-two`/`sidebar-three` (données démo, hors périmètre).
- **Entitlement non contourné par l'admin d'institution** : `moduleAllowed` n'accorde que si pas de module, superuser, ou `hasModule(module)` — comme le filtre de section existant.
- **Hors périmètre** : M06 (Garage/Accidents), M07 (Documents), unification Lieux (M09), plans numériques (M05). On relocalise les écrans existants tels quels.
- **Ordre** : liste à plat conforme à l'Annexe A (voir Task 3) ; items existants non cités = slottés près de leur voisin logique.
- **Tests karma headless** : `export CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` puis `npx ng test --watch=false --browsers=ChromeHeadless --include='**/<spec>.spec.ts'`.
- Commits : auteur shimi, pas de co-author. Push (quand demandé) : **`git push deploy master`** uniquement.

## Review Focus

- **Section sans `module` supprimée par `filteredSidebar`** : une société avec un package (activeModules non-nul) doit quand même voir Configuration — testé en Task 1.
- **Fuite d'entitlement par item** : un item de config d'un module non souscrit (ex. `colis`) ne doit pas apparaître dans Configuration — testé en Task 1.
- **Admin d'institution** : voit les items selon l'entitlement module (ne contourne pas `hasModule`), mais contourne les permissions — couvert par `moduleAllowed` (Task 1).
- **Section Configuration vide** : si aucun item visible (petit package), la section disparaît entièrement — testé en Task 1 (filtre « sections vides » existant).
- **Stub sans titre** : une route stub sans `data.title` ne doit pas casser l'affichage — testé en Task 2 (fallback).

---

## Task 1 : Correctifs d'entitlement (section sans module + gating par item)

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (fonction `filteredSidebar`, ~ligne 441)
- Create: `angular/src/app/layouts/sidebar-one/module-visibility.ts` (helper pur `moduleAllowed`)
- Modify: `angular/src/app/layouts/sidebar-one/sidebar-one.component.ts` (import + filtre subMenus ~ligne 105)
- Test: `angular/src/app/core/service/sidebar/sidebar.service.spec.ts`
- Test: `angular/src/app/layouts/sidebar-one/module-visibility.spec.ts`

**Interfaces:**
- Produces: `filteredSidebar(activeModules: string[] | null)` — garde désormais les sections dont `module` est absent.
- Produces: `moduleAllowed(module: string | undefined, isSuperAdmin: boolean, hasModule: (m: string) => boolean): boolean` — prédicat pur d'entitlement par item.

- [ ] **Step 1 : Test RED — `filteredSidebar` garde les sections sans module**

Dans `sidebar.service.spec.ts`, ajouter :

```ts
it('filteredSidebar garde les sections sans module et celles du package', () => {
  service.sidebarData1 = [
    { tittle: 'NoModule', menu: [] },
    { tittle: 'Voyages', module: 'voyage', menu: [] },
    { tittle: 'Colis',   module: 'colis',  menu: [] },
  ] as any;
  const res = service.filteredSidebar(['voyage']);
  expect(res.map((s: any) => s.tittle)).toEqual(['NoModule', 'Voyages']);
});

it('filteredSidebar ne filtre rien si activeModules est null', () => {
  service.sidebarData1 = [{ tittle: 'A', module: 'voyage', menu: [] }] as any;
  expect(service.filteredSidebar(null).length).toBe(1);
});
```

- [ ] **Step 2 : Lancer le test, vérifier l'échec**

Run: `export CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; npx ng test --watch=false --browsers=ChromeHeadless --include='**/sidebar.service.spec.ts'`
Expected: FAIL — la section `NoModule` est absente du résultat (`['Voyages']` au lieu de `['NoModule','Voyages']`).

- [ ] **Step 3 : Corriger `filteredSidebar`**

Dans `sidebar.service.ts`, remplacer le corps :

```ts
filteredSidebar(activeModules: string[] | null) {
  if (!activeModules) return this.sidebarData1;
  const set = new Set(activeModules);
  // Garder les sections sans `module` (ex. Configuration) ; le gating par item
  // gère ensuite leurs enfants selon le module de chaque item.
  return this.sidebarData1.filter((g: any) => !g.module || set.has(g.module));
}
```

- [ ] **Step 4 : Lancer le test, vérifier le succès**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/sidebar.service.spec.ts'` (CHROME_BIN déjà exporté)
Expected: PASS.

- [ ] **Step 5 : Test RED — helper `moduleAllowed`**

Créer `angular/src/app/layouts/sidebar-one/module-visibility.spec.ts` :

```ts
import { moduleAllowed } from './module-visibility';

describe('moduleAllowed', () => {
  const has = (m: string) => m === 'voyage';            // seul 'voyage' souscrit
  it('autorise un item sans module', () => {
    expect(moduleAllowed(undefined, false, has)).toBe(true);
  });
  it('autorise un item dont le module est souscrit', () => {
    expect(moduleAllowed('voyage', false, has)).toBe(true);
  });
  it('masque un item dont le module n’est pas souscrit', () => {
    expect(moduleAllowed('colis', false, has)).toBe(false);
  });
  it('le superadmin voit tout', () => {
    expect(moduleAllowed('colis', true, has)).toBe(true);
  });
});
```

- [ ] **Step 6 : Lancer le test, vérifier l'échec**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/module-visibility.spec.ts'`
Expected: FAIL — `Cannot find module './module-visibility'`.

- [ ] **Step 7 : Créer le helper pur**

Créer `angular/src/app/layouts/sidebar-one/module-visibility.ts` :

```ts
/** Entitlement par item de menu : autorisé si aucun module requis, superadmin,
 *  ou module inclus dans l'offre. L'admin d'institution NE contourne PAS (hasModule le gère). */
export function moduleAllowed(
  module: string | undefined,
  isSuperAdmin: boolean,
  hasModule: (m: string) => boolean,
): boolean {
  return !module || isSuperAdmin || hasModule(module);
}
```

- [ ] **Step 8 : Lancer le test, vérifier le succès**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/module-visibility.spec.ts'`
Expected: PASS.

- [ ] **Step 9 : Câbler le helper dans `sidebar-one.component.ts`**

Ajouter l'import en tête de fichier :

```ts
import { moduleAllowed } from './module-visibility';
```

Dans `buildMenuForUser`, le filtre des `subMenus` (actuellement) :

```ts
return { ...item, subMenus: item.subMenus.filter((s: any) => allowed(s.permission)) };
```

devient :

```ts
return {
  ...item,
  subMenus: item.subMenus.filter((s: any) =>
    allowed(s.permission) &&
    moduleAllowed(s.module, isSuperAdmin, (m: string) => this.permissionService.hasModule(m))),
};
```

- [ ] **Step 10 : Build de vérification (câblage)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.` sans erreur.

- [ ] **Step 11 : Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/app/core/service/sidebar/sidebar.service.spec.ts angular/src/app/layouts/sidebar-one/module-visibility.ts angular/src/app/layouts/sidebar-one/module-visibility.spec.ts angular/src/app/layouts/sidebar-one/sidebar-one.component.ts
git commit -m "feat(nav): per-item module entitlement + keep module-less sidebar sections (M01)"
```

---

## Task 2 : Composant stub « bientôt disponible » + 4 routes

**Files:**
- Create: `angular/src/_api/pages/configuration/coming-soon/config-coming-soon.component.ts`
- Modify: `angular/src/app/core/helpers/routes.ts` (4 constantes)
- Modify: `angular/src/app/features/pages/pages.routes.ts` (groupe `configuration`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (clé `config.coming_soon`)
- Test: `angular/src/_api/pages/configuration/coming-soon/config-coming-soon.component.spec.ts`

**Interfaces:**
- Consumes: rien.
- Produces: `ConfigComingSoonComponent` (standalone) ; constantes `routes.cfgTypesVoyage`, `routes.cfgTypesCaisse`, `routes.cfgTypesOperation`, `routes.cfgTypesValeurs` = `/configuration/types-voyage|types-caisse|types-operation|types-valeurs`.

- [ ] **Step 1 : Test RED — le composant affiche le titre de la route**

Créer `config-coming-soon.component.spec.ts` :

```ts
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ConfigComingSoonComponent } from './config-coming-soon.component';

describe('ConfigComingSoonComponent', () => {
  function setup(title?: string) {
    TestBed.configureTestingModule({
      imports: [ConfigComingSoonComponent, TranslocoModule],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { data: title ? { title } : {} } } }],
    });
    const fixture = TestBed.createComponent(ConfigComingSoonComponent);
    fixture.detectChanges();
    return fixture;
  }
  it('affiche le titre passé en data', () => {
    const el: HTMLElement = setup('Types de voyage').nativeElement;
    expect(el.textContent).toContain('Types de voyage');
  });
  it('ne casse pas sans titre', () => {
    expect(() => setup().detectChanges()).not.toThrow();
  });
});
```

- [ ] **Step 2 : Lancer le test, vérifier l'échec**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/config-coming-soon.component.spec.ts'`
Expected: FAIL — module introuvable.

- [ ] **Step 3 : Créer le composant**

`config-coming-soon.component.ts` :

```ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-config-coming-soon',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <div class="page-header"><div class="add-item d-flex"><div class="page-title">
      <h4>{{ title }}</h4>
    </div></div></div>
    <div class="card"><div class="card-body text-center py-5">
      <i class="ti ti-tools fs-1 text-muted mb-2 d-block"></i>
      <p class="text-muted mb-0">{{ 'config.coming_soon' | transloco }}</p>
    </div></div>
  `,
})
export class ConfigComingSoonComponent {
  title = inject(ActivatedRoute).snapshot.data['title'] ?? '';
}
```

- [ ] **Step 4 : Ajouter la clé i18n `config.coming_soon`**

Dans chaque `angular/public/i18n/{fr,en,es,pt}.json`, sous l'objet racine `config` (le créer s'il n'existe pas), ajouter :
- fr : `"coming_soon": "Bientôt disponible"`
- en : `"coming_soon": "Coming soon"`
- es : `"coming_soon": "Próximamente"`
- pt : `"coming_soon": "Em breve"`

Éditer via python (`json.load`/`json.dump`, `ensure_ascii=False, indent=2`) puis revérifier que chaque fichier parse.

- [ ] **Step 5 : Lancer le test, vérifier le succès**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/config-coming-soon.component.spec.ts'`
Expected: PASS (les 2 specs).

- [ ] **Step 6 : Ajouter les constantes de route**

Dans `angular/src/app/core/helpers/routes.ts`, ajouter (près des autres config) :

```ts
  cfgTypesVoyage:    '/configuration/types-voyage',
  cfgTypesCaisse:    '/configuration/types-caisse',
  cfgTypesOperation: '/configuration/types-operation',
  cfgTypesValeurs:   '/configuration/types-valeurs',
```

- [ ] **Step 7 : Déclarer les 4 routes stub**

Dans `angular/src/app/features/pages/pages.routes.ts`, au même niveau que les autres groupes de config enfants, ajouter :

```ts
{
  path: 'configuration',
  children: [
    { path: 'types-voyage',    loadComponent: () => import('../../../_api/pages/configuration/coming-soon/config-coming-soon.component').then(m => m.ConfigComingSoonComponent), data: { title: 'Types de voyage' } },
    { path: 'types-caisse',    loadComponent: () => import('../../../_api/pages/configuration/coming-soon/config-coming-soon.component').then(m => m.ConfigComingSoonComponent), data: { title: 'Types de caisse' } },
    { path: 'types-operation', loadComponent: () => import('../../../_api/pages/configuration/coming-soon/config-coming-soon.component').then(m => m.ConfigComingSoonComponent), data: { title: "Types d'opération" } },
    { path: 'types-valeurs',   loadComponent: () => import('../../../_api/pages/configuration/coming-soon/config-coming-soon.component').then(m => m.ConfigComingSoonComponent), data: { title: 'Types de valeurs' } },
  ],
},
```

- [ ] **Step 8 : Build de vérification**

Run: `cd angular && npx ng build --configuration development`
Expected: build OK ; les 4 routes se compilent (lazy chunks du composant stub).

- [ ] **Step 9 : Commit**

```bash
git add angular/src/_api/pages/configuration/ angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(config): coming-soon stub component + 4 future config routes (M01)"
```

---

## Task 3 : Section « Configuration » dans sidebarData1 + retraits/déplacements

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (`sidebarData1` : nouvelle section + retraits)
- Test: `angular/src/app/core/service/sidebar/sidebar.service.spec.ts`

**Interfaces:**
- Consumes: `moduleAllowed` / `filteredSidebar` (Task 1) ; `routes.cfg*` (Task 2).
- Produces: une section `{ tittle: 'Configuration' }` (sans `module`) insérée juste après la section `Dashboard`, contenant un groupe `Configuration` dont les `subMenus` portent chacun `route`, `base`, `permission`, `module`.

- [ ] **Step 1 : Test RED — forme du menu après réorganisation**

Dans `sidebar.service.spec.ts`, ajouter :

```ts
function sectionByTitle(s: any[], t: string) { return s.find(x => x.tittle === t); }

it('expose une section Configuration sans module, juste après Dashboard', () => {
  const data = service.sidebarData1;
  const titles = data.map((s: any) => s.tittle);
  const iDash = titles.indexOf('Dashboard');
  const iCfg  = titles.indexOf('Configuration');
  expect(iCfg).toBe(iDash + 1);
  expect(sectionByTitle(data, 'Configuration').module).toBeUndefined();
});

it('Configuration contient les items config avec module + commence par les lieux', () => {
  const grp = sectionByTitle(service.sidebarData1, 'Configuration').menu[0];
  const vals = grp.subMenus.map((s: any) => s.menuValue);
  expect(vals.slice(0, 3)).toEqual(['Villes', 'Points de service', 'Trajets']);
  // entitlement par item présent
  const marques = grp.subMenus.find((s: any) => s.menuValue === 'Marques de véhicules');
  expect(marques.module).toBe('fleet');
  const stub = grp.subMenus.find((s: any) => s.menuValue === 'Types de voyage');
  expect(stub.module).toBe('voyage');
});

it('les modules opérationnels ne portent plus de groupe de configuration', () => {
  const flotte = sectionByTitle(service.sidebarData1, 'Flotte');
  expect(flotte.menu.find((m: any) => m.menuValue === 'Configuration')).toBeUndefined();
  // Marques/Modèles ont quitté le groupe Véhicules opérationnel
  const veh = flotte.menu.find((m: any) => m.menuValue === 'Véhicules');
  const vehVals = (veh?.subMenus ?? []).map((s: any) => s.menuValue);
  expect(vehVals).not.toContain('Marques');
  const voyages = sectionByTitle(service.sidebarData1, 'Voyages');
  expect(voyages.menu.find((m: any) => m.menuValue === 'Configurations')).toBeUndefined();
});
```

- [ ] **Step 2 : Lancer le test, vérifier l'échec**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/sidebar.service.spec.ts'`
Expected: FAIL — pas de section `Configuration` ; les groupes de config existent encore.

- [ ] **Step 3 : Insérer la section Configuration après Dashboard**

Dans `sidebarData1`, juste après l'objet `{ tittle: 'Dashboard', ... }`, insérer la section (sans `module`). Chaque subMenu reprend route/base/permission existants + un `module` d'entitlement. `import { routes }` est déjà présent dans le fichier.

```ts
{
  tittle: 'Configuration',
  // PAS de `module` : la section traverse filteredSidebar ; l'entitlement est par item.
  showAsTab: false,
  separateRoute: false,
  menu: [
    {
      menuValue: 'Configuration',
      hasSubRoute: true,
      showSubRoute: false,
      icon2: 'settings-cog',
      base: 'configuration',
      subMenus: [
        { menuValue: 'Villes',               route: routes.vcTowns,            base: 'towns',               permission: 'transport.city.view',        module: 'voyage' },
        { menuValue: 'Points de service',    route: routes.vcServicePoints,    base: 'service-points',      permission: 'transport.terminal.view',    module: 'voyage' },
        { menuValue: 'Trajets',              route: routes.vcRoutes,           base: 'routes',              permission: 'transport.route.view',       module: 'voyage' },
        { menuValue: 'Plages horaires',      route: routes.vcTimeSlots,        base: 'time-slots',          permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Planifications',       route: routes.vcServicePatterns,  base: 'service-patterns',    permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Marques de véhicules', route: routes.fleetBrands,        base: 'brands',              permission: 'fleet.brand.view',           module: 'fleet'  },
        { menuValue: 'Modèles de véhicules', route: routes.fleetModels,        base: 'models',              permission: 'fleet.model.view',           module: 'fleet'  },
        { menuValue: 'Catégories véhicule',  route: routes.fcVehicleCategories,base: 'vehicle-categories',  permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Carburants',           route: routes.fcFuelTypes,        base: 'fuel-types',          permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Transmissions',        route: routes.fcTransmissions,    base: 'transmissions',       permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Tractions',            route: routes.fcTractionTypes,    base: 'traction-types',      permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: "Catégories d'unité",   route: routes.fcUnitCategories,   base: 'unit-categories',     permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Unités',               route: routes.fcUnits,            base: 'units',               permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Périodes',             route: routes.fcPeriods,          base: 'periods',             permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Types de document',    route: routes.fcDocumentTypes,    base: 'document-types',      permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Étiquettes',           route: routes.fcTags,             base: 'tags',                permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: "Types d'intervention", route: routes.fcInterventionTypes,base: 'intervention-types',  permission: 'fleet.config.view',          module: 'fleet'  },
        { menuValue: 'Types de personnel',   route: routes.vcCrewMemberTypes,  base: 'crew-member-types',   permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Plans de bus',         route: routes.vcSeatingPlans,     base: 'seating-plans',       permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Affectations de plan', route: routes.vcVehicleAssignments,base: 'vehicle-assignments',permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Catégories tarifaires',route: routes.vcFareClasses,      base: 'fare-classes',        permission: 'transport.fareclass.view',   module: 'voyage' },
        { menuValue: 'Tarifs',               route: routes.vcFares,            base: 'fares',               permission: 'transport.fare.view',        module: 'voyage' },
        { menuValue: 'Types de voyage',      route: routes.cfgTypesVoyage,     base: 'configuration',       permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Barème dépenses',      route: routes.vcExpenseSchedules, base: 'expense-schedules',   permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Fidélité',             route: routes.vcLoyalty,          base: 'loyalty-rules',       permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Natures de colis',     route: routes.vcConsignmentNatures,base: 'consignment-natures',permission: 'transport.config.view',      module: 'colis'  },
        { menuValue: 'Types de colis',       route: routes.vcConsignmentTypes, base: 'consignment-types',   permission: 'transport.config.view',      module: 'colis'  },
        { menuValue: 'Types de caisse',      route: routes.cfgTypesCaisse,     base: 'configuration',       permission: 'treasury.config.view',       module: 'treasury' },
        { menuValue: 'Caisses',              route: routes.trzRegisters,       base: 'registers',           permission: 'treasury.register.view',     module: 'treasury' },
        { menuValue: "Types d'opération",    route: routes.cfgTypesOperation,  base: 'configuration',       permission: 'treasury.config.view',       module: 'treasury' },
        { menuValue: 'Types de dépense',     route: routes.vcExpenseTypes,     base: 'expense-types',       permission: 'transport.config.view',      module: 'treasury' },
        { menuValue: 'Remboursement',        route: routes.trzRefundRate,      base: 'refund-rate',         permission: 'treasury.config.view',       module: 'treasury' },
        { menuValue: 'Dénominations',        route: routes.trzDenominations,   base: 'denominations',       permission: 'treasury.config.view',       module: 'treasury' },
        { menuValue: 'Types de valeurs',     route: routes.cfgTypesValeurs,    base: 'configuration',       permission: 'treasury.config.view',       module: 'treasury' },
        { menuValue: 'Moyens de paiement',   route: routes.trzPaymentMethods,  base: 'payment-methods',     permission: 'treasury.paymentmethod.view', module: 'treasury' },
        { menuValue: 'Config billets',       route: routes.vcTicketTemplate,   base: 'ticket-template',     permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Modèles de documents', route: routes.admDocuments,       base: 'documents',           permission: 'transport.config.view'                         },
        { menuValue: 'Paramètres Voyages',   route: routes.vcSettings,         base: 'settings',            permission: 'transport.config.view',      module: 'voyage' },
        { menuValue: 'Partenaires',          route: routes.trzPartners,        base: 'partners',            permission: 'treasury.partner.view',      module: 'treasury' },
      ],
    },
  ],
},
```

- [ ] **Step 4 : Retirer les groupes de config des sections opérationnelles**

Dans `sidebarData1` :
- **Flotte** : supprimer le groupe `{ menuValue: 'Configuration', ... }` ; dans le groupe `Véhicules`, supprimer les subMenus `Marques` et `Modèles`.
- **Voyages** : supprimer le groupe `{ menuValue: 'Configurations', ... }`.
- **Colis** : supprimer le groupe `{ menuValue: 'Configurations', ... }`.
- **Trésorerie** : supprimer le groupe `{ menuValue: 'Configuration', ... }` ; dans le groupe `Caisse`, supprimer le subMenu `Caisses`.
- **Administration** : supprimer l'entrée `{ menuValue: 'Config documents', ... }`.

Ne rien supprimer d'autre (opérationnel conservé). Garage/Documents/Accidents de Flotte restent (M06/M07).

- [ ] **Step 5 : Lancer les tests, vérifier le succès**

Run: `npx ng test --watch=false --browsers=ChromeHeadless --include='**/sidebar.service.spec.ts'`
Expected: PASS (les 3 nouveaux tests + l'existant « should be created »).

- [ ] **Step 6 : Build de vérification**

Run: `cd angular && npx ng build --configuration development`
Expected: build OK.

- [ ] **Step 7 : Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/app/core/service/sidebar/sidebar.service.spec.ts
git commit -m "feat(nav): centralize all config into one Configuration module, flat Annexe A order (M01)"
```

---

## Notes d'implémentation

- **Diff volumineux (Task 3)** : l'édition de `sidebarData1` est importante ; procéder section par section et relire le diff. Les routes/permissions des items déplacés sont copiées à l'identique (seul `module` est ajouté) — aucune invention de nom.
- **« Caisses » en Configuration** et **« Planifications » = Chartes** : hypothèses actées dans le spec (Points à clarifier #1, #2). Si l'utilisateur tranche autrement, ajuster l'ordre/emplacement.
- **Pas de backend, pas de migration.** Vérifier qu'aucune URL n'a changé (les `route:` pointent vers les constantes existantes).
