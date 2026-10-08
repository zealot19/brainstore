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
});
