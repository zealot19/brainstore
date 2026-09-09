import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { VoyagesSettingsService } from '../../../services/voyages-config/voyages-settings.service';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vc-settings',
  templateUrl: './settings.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcSettingsComponent implements OnInit {
  form!: FormGroup; loading = true; saving = false; errorMsg = ''; okMsg = '';
  constructor(private svc: VoyagesSettingsService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      departure_lead_hours: [24], arrival_grace_hours: [48], ticket_expiry_days: [7],
      shift_duration_hours: [8], document_alert_days: [30], archive_delay_days: [365],
      auto_print_default: [false], sms_notification_default: [false],
    });
    this.svc.get().subscribe({ next: s => { this.form.patchValue(s); this.loading = false; }, error: () => this.loading = false });
  }
  save(): void {
    if (this.saving) return; this.saving = true; this.errorMsg = ''; this.okMsg = '';
    this.svc.update(this.form.value).subscribe({
      next: () => { this.saving = false; this.okMsg = 'Paramètres enregistrés.'; },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
}
