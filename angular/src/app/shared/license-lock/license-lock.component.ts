import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LicenseService } from '../../../_api/services/system/license.service';
import { TokenService } from '../../../_api/services/auth/token.service';

@Component({
  selector: 'app-license-lock',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  template: `
    @if (lic.locked()) {
      <div class="license-lock-overlay">
        <div class="text-center p-4">
          <i class="ti ti-lock" style="font-size:3rem"></i>
          <h3 class="mt-3">{{ 'license.expired_title' | transloco }}</h3>
          <p class="text-muted">{{ lic.message() }}</p>
          <button type="button" class="btn btn-primary mt-2" (click)="backToLogin()">
            <i class="ti ti-login me-1"></i>{{ 'license.back_to_login' | transloco }}
          </button>
        </div>
      </div>
    }
  `,
  styles: [`
    .license-lock-overlay {
      position: fixed; inset: 0; z-index: 20000;
      background: #fff; display: flex; align-items: center; justify-content: center;
    }
  `],
})
export class LicenseLockComponent {
  lic = inject(LicenseService);
  private router = inject(Router);
  private token = inject(TokenService);

  backToLogin(): void {
    this.token.clearTokens();
    localStorage.removeItem('authorized');
    this.lic.reset();               // drop the overlay so the login page is usable
    this.router.navigate(['/auth/signin']);
  }
}
