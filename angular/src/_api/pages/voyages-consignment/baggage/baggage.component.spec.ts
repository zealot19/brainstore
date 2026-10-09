import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { VcgBaggageComponent } from './baggage.component';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { TripService } from '../../../services/voyages/trip.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { ToastService } from '../../../../app/shared/toast/toast.service';

describe('VcgBaggageComponent.selectedOwner', () => {
  let c: VcgBaggageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VcgBaggageComponent, ReactiveFormsModule],
      providers: [
        { provide: BaggageService, useValue: { list: () => of([]) } },
        { provide: BookingService, useValue: { bookableTrips: () => of([]), list: () => of([]) } },
        { provide: ConsignmentTypeService, useValue: { list: () => of([]) } },
        { provide: TripService, useValue: { list: () => of([]) } },
        { provide: PaymentMethodService, useValue: { list: () => of([]) } },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
        { provide: ToastService, useValue: {} },
      ],
    }).overrideComponent(VcgBaggageComponent, { set: { template: '' } });
    const fixture = TestBed.createComponent(VcgBaggageComponent);
    c = fixture.componentInstance;
    fixture.detectChanges(); // ngOnInit builds the form
  });

  // M23 Critical #1/#2 : en édition, ticket_id est désactivé (form.value l'omet) et
  // les ticketOptions ne sont pas rechargées ; le propriétaire doit venir de editOwner.
  it('renders the owner in edit mode even though ticket_id is disabled', () => {
    c.editId = 'b1';
    c.editOwner = { name: 'Jean Dupont', phone: '699000000', id_number: 'CNI123' };
    c.ticketOptions = [];
    c.form.get('ticket_id')!.setValue('T1');
    c.form.get('ticket_id')!.disable();
    expect(c.selectedOwner).toEqual({ name: 'Jean Dupont', phone: '699000000', id_number: 'CNI123' });
  });

  // Légacy : bagage sans billet (ticket_id null) — le propriétaire stocké reste affiché.
  it('falls back to editOwner for a legacy ticketless baggage', () => {
    c.editId = 'b2';
    c.editOwner = { name: 'Ondoa Firmin', phone: '', id_number: 'CNI778899' };
    c.ticketOptions = [];
    c.form.get('ticket_id')!.setValue(null);
    c.form.get('ticket_id')!.disable();
    expect(c.selectedOwner).toEqual({ name: 'Ondoa Firmin', phone: '', id_number: 'CNI778899' });
  });

  // Non-régression : en création, le propriétaire vient du billet choisi (contrôle actif).
  it('renders owner from the selected ticket option in create mode', () => {
    c.editOwner = null;
    c.ticketOptions = [{ id: 'T1', label: 'x', name: 'Awa', phone: '651', id_number: 'P9' }];
    c.form.get('ticket_id')!.setValue('T1');
    expect(c.selectedOwner).toEqual({ name: 'Awa', phone: '651', id_number: 'P9' });
  });
});
