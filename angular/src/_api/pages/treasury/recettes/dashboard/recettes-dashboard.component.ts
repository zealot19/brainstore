import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeService } from '../../../../services/treasury/income.service';

@Component({
  selector: 'app-recettes-dashboard',
  standalone: true,
  templateUrl: './recettes-dashboard.component.html',
  imports: [CommonModule],
})
export class RecettesDashboardComponent implements OnInit {
  private income = inject(IncomeService);
  d: any = null; loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.income.dashboard().subscribe({
      next: r => { this.d = r; this.loading = false; },
      error: () => this.loading = false,
    });
  }
}
