// client-fields.component.ts
import { Component, Input, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TranslocoModule } from '@jsverse/transloco';
import { PassengerService } from '../../../../services/voyages-booking/passenger.service';
import { Passenger, PassengerSpec } from '../../../../models/voyages-booking.models';

@Component({
  selector: 'app-client-fields',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './client-fields.component.html',
})
export class ClientFieldsComponent {
  @Input({ required: true }) row!: PassengerSpec;
  /** Clé i18n du libellé du champ « Nom » (surchargée p.ex. en « Nom de l'expéditeur »). */
  @Input() nameLabelKey = 'shared.client.name';
  /** Affiche un astérisque « requis » sur le libellé du champ « Nom ». */
  @Input() nameRequired = false;
  private svc = inject(PassengerService);
  private host = inject(ElementRef<HTMLElement>);
  results: Passenger[] = [];
  open = false;
  private q$ = new Subject<string>();
  constructor() {
    this.q$.pipe(debounceTime(250), distinctUntilChanged(), switchMap(q => this.svc.list(q)))
      .subscribe(r => { this.results = (r ?? []).slice(0, 8); this.open = this.results.length > 0; });
  }
  onInput(v: string) {
    this.row.name = v; this.row.id = undefined;
    if (v && v.trim().length >= 2) this.q$.next(v.trim()); else { this.results = []; this.open = false; }
  }
  pick(p: Passenger) {
    this.row.id = p.id; this.row.name = p.name; this.row.phone = p.phone;
    this.row.id_type = p.id_type; this.row.id_number = p.id_number;
    this.open = false;
  }
  hide() { setTimeout(() => (this.open = false), 150); }
}
