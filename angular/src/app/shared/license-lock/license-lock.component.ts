import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { LicenseService } from '../../../_api/services/system/license.service';

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
}
