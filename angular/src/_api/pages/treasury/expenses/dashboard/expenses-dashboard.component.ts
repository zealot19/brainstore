import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../../../services/treasury/expense.service';

@Component({
  selector: 'app-expenses-dashboard',
  standalone: true,
  templateUrl: './expenses-dashboard.component.html',
  imports: [CommonModule],
})
export class ExpensesDashboardComponent implements OnInit {
  private svc = inject(ExpenseService);
  data: any = null;

  ngOnInit(): void {
    this.svc.dashboard().subscribe({ next: d => this.data = d, error: () => {} });
  }
}
