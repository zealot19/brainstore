import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScigService } from '../../../services/scig/scig.service';
import { Depot } from '../../../models/scig.models';

@Component({
  selector: 'app-scig-depots',
  templateUrl: './depots.component.html',
  imports: [CommonModule, FormsModule],
})
export class DepotsComponent implements OnInit {

  depots:   Depot[] = [];
  filtered: Depot[] = [];
  loading = true;
  search  = '';

  constructor(private scigService: ScigService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.scigService.listDepots().subscribe({
      next: data => { this.depots = data; this.applyFilter(); this.loading = false; },
      error: ()   => { this.depots = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.depots.filter(d =>
      !q || d.name.toLowerCase().includes(q) || d.sage_depot_no.toLowerCase().includes(q)
    );
  }

  get total():  number { return this.depots.length; }
  get actifs(): number { return this.depots.filter(d => d.is_active).length; }
}
