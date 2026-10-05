import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ArchivingService } from '../../../services/system/archiving.service';

@Component({
  selector: 'app-admin-archiving',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './archiving.component.html',
})
export class ArchivingComponent implements OnInit {
  private fb = inject(FormBuilder);
  private svc = inject(ArchivingService);
  loading = true; saving = false; okMsg = ''; errorMsg = '';
  form = this.fb.group({ archive_window_days: [0] });

  ngOnInit() {
    this.svc.get().subscribe({
      next: (r) => { this.form.patchValue({ archive_window_days: r.archive_window_days }); this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  save() {
    this.okMsg = ''; this.errorMsg = '';
    const n = Number(this.form.value.archive_window_days);
    if (!Number.isInteger(n) || n < 0) { this.errorMsg = 'Valeur invalide'; return; }
    this.saving = true;
    this.svc.set(n).subscribe({
      next: () => { this.saving = false; this.okMsg = 'OK'; },
      error: (e) => { this.saving = false; this.errorMsg = e?.error?.detail || 'Erreur'; },
    });
  }
}
