import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParameterService } from '../../../services/system/parameter.service';
import { Parameter } from '../../../models/system.models';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class ParametersComponent implements OnInit {

  parameters: Parameter[] = [];
  loading   = true;
  saving    = false;
  saved     = false;
  errorMsg  = '';

  // Copie éditable des valeurs
  values: Record<string, string> = {};

  constructor(private parameterService: ParameterService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.parameterService.list().subscribe({
      next: data => {
        this.parameters = data;
        this.values = {};
        data.forEach(p => this.values[p.key] = p.value);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  save(): void {
    if (this.saving) return;
    this.saving   = true;
    this.saved    = false;
    this.errorMsg = '';

    const items = this.parameters.map(p => ({ key: p.key, value: this.values[p.key] ?? '' }));

    this.parameterService.bulkUpdate(items).subscribe({
      next: () => { this.saving = false; this.saved = true; setTimeout(() => this.saved = false, 3000); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur lors de la sauvegarde.'; },
    });
  }
}
