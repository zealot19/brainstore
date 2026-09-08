import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';
import { getTranslocoModule } from '../../core/i18n/testing/transloco-testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../../_api/services/auth/auth.service';
import { PermissionService } from '../../../_api/services/auth/permission.service';

const permStub = {
  permissions$: of([]),
  modules$: of([]),
  has: () => false,
  hasAny: () => false,
  hasAll: () => false,
  hasModule: () => false,
};
const authStub = { currentUser: null, currentUser$: of(null), logout: () => {} };

describe('Header i18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, getTranslocoModule()],
      providers: [
        provideRouter([]),
        { provide: PermissionService, useValue: permStub },
        { provide: AuthService, useValue: authStub },
      ],
    });
  });

  it('renders a translated label and re-renders on lang change', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const transloco = TestBed.inject(TranslocoService);
    transloco.setActiveLang('fr');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Déconnexion');
    transloco.setActiveLang('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Log out');
  });
});
