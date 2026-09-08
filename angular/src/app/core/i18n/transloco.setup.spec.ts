import { TestBed } from '@angular/core/testing';
import { TranslocoService, provideTransloco, Translation } from '@jsverse/transloco';
import { TranslocoConfig } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { TRANSLOCO_APP_CONFIG } from './transloco.config';

const FR: Translation = { shared: { actions: { save: 'Enregistrer' } } };
const EN: Translation = { shared: { actions: { save: 'Save' } } };

class FakeLoader {
  getTranslation(lang: string) {
    return Promise.resolve(lang === 'en' ? EN : FR);
  }
}

describe('Transloco setup', () => {
  let service: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTransloco({ config: TRANSLOCO_APP_CONFIG, loader: FakeLoader }),
      ],
    });
    service = TestBed.inject(TranslocoService);
  });

  it('defaults to French and translates a shared key', async () => {
    await firstValueFrom(service.load('fr'));
    service.setActiveLang('fr');
    expect(service.translate('shared.actions.save')).toBe('Enregistrer');
  });

  it('switches to English at runtime', async () => {
    await firstValueFrom(service.load('en'));
    service.setActiveLang('en');
    expect(service.translate('shared.actions.save')).toBe('Save');
  });

  it('exposes the four CEMAC LTR languages', () => {
    const cfg = TRANSLOCO_APP_CONFIG as TranslocoConfig;
    expect(cfg.availableLangs).toEqual(['fr', 'en', 'es', 'pt']);
    expect(cfg.defaultLang).toBe('fr');
    expect(cfg.fallbackLang).toBe('fr');
  });
});
