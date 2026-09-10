import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagService } from '../../../services/system/feature-flag.service';
import { FeatureFlag } from '../../../models/system.models';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-feature-flags',
  templateUrl: './feature-flags.component.html',
  imports: [CommonModule, TranslocoModule],
})
export class FeatureFlagsComponent implements OnInit {

  flags:   FeatureFlag[] = [];
  loading  = true;
  toggling: Record<string, boolean> = {};

  constructor(private flagService: FeatureFlagService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.flagService.list().subscribe({
      next: data => { this.flags = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  toggle(flag: FeatureFlag): void {
    if (this.toggling[flag.id]) return;
    this.toggling[flag.id] = true;
    this.flagService.toggle(flag.id).subscribe({
      next: updated => {
        flag.is_enabled = updated.is_enabled;
        this.toggling[flag.id] = false;
      },
      error: () => { this.toggling[flag.id] = false; },
    });
  }
}
