import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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

  describe('M01 — module Configuration', () => {
    const byTitle = (t: string) => service.sidebarData1.find((s: any) => s.tittle === t);

    it('expose une section Configuration sans module, juste après Dashboard', () => {
      const titles = service.sidebarData1.map((s: any) => s.tittle);
      expect(titles.indexOf('Configuration')).toBe(titles.indexOf('Dashboard') + 1);
      expect((byTitle('Configuration') as any).module).toBeUndefined();
    });

    it('Configuration contient les items config avec module + commence par les lieux', () => {
      const grp = (byTitle('Configuration') as any).menu[0];
      const vals = grp.subMenus.map((s: any) => s.menuValue);
      expect(vals.slice(0, 3)).toEqual(['Villes', 'Lieux', 'Trajets']);
      expect(grp.subMenus.find((s: any) => s.menuValue === 'Marques de véhicules').module).toBe('fleet');
      expect(grp.subMenus.find((s: any) => s.menuValue === 'Types de voyage').module).toBe('voyage');
    });

    it('les modules opérationnels ne portent plus de groupe de configuration', () => {
      const flotte = byTitle('Flotte') as any;
      expect(flotte.menu.find((m: any) => m.menuValue === 'Configuration')).toBeUndefined();
      const veh = flotte.menu.find((m: any) => m.menuValue === 'Véhicules');
      expect((veh?.subMenus ?? []).map((s: any) => s.menuValue)).not.toContain('Marques');
      expect((byTitle('Voyages') as any).menu.find((m: any) => m.menuValue === 'Configurations')).toBeUndefined();
    });
  });
});
