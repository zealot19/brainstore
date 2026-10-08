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
