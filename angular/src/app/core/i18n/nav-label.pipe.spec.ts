import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';
import { getTranslocoModule } from './testing/transloco-testing';
import { NavLabelPipe, navSlug } from './nav-label.pipe';

describe('NavLabelPipe', () => {
  let pipe: NavLabelPipe;
  let transloco: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [getTranslocoModule()], providers: [NavLabelPipe] });
    transloco = TestBed.inject(TranslocoService);
    pipe = TestBed.inject(NavLabelPipe);
  });

  it('navSlug strips accents and non-alphanumerics', () => {
    expect(navSlug('Config · Réseau')).toBe('config_reseau');
    expect(navSlug("Types d'équipage")).toBe('types_d_equipage');
    expect(navSlug('Tableau de bord')).toBe('tableau_de_bord');
  });

  it('translates a known French label to the active language', () => {
    transloco.setActiveLang('en');
    expect(pipe.transform('Trésorerie')).toBe('Treasury');
    transloco.setActiveLang('es');
    expect(pipe.transform('Trésorerie')).toBe('Tesorería');
  });

  it('falls back to the original label when no key exists', () => {
    transloco.setActiveLang('en');
    expect(pipe.transform('Some Untranslated Label')).toBe('Some Untranslated Label');
  });
});
