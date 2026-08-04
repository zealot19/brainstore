# Feuille de route / départ (Voyages Roadmap) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Une feuille de route par voyage qui agrège passagers, bagages, colis, équipage et véhicule, permet l'embarquement des passagers, et imprime deux bordereaux (Voyages + Colis) avec l'en-tête entreprise.

**Architecture:** Un endpoint d'agrégation `roadmap` + un embarquement groupé `board-all` dans `voyages_booking` (qui importe les sélecteurs `voyages_consignment`). Un écran Angular 21 standalone avec CSS `@media print` pour les deux bordereaux. Aucun nouveau modèle.

**Tech Stack:** Django + DRF, SQLite (dev), Angular 21 standalone, Bootstrap 5, icônes Tabler `ti`.

## Global Constraints

- Branche `feature/voyages-roadmap` depuis `origin/master`. Forward-only sur `master`.
- Commits **shimi** uniquement — PAS de trailer `Co-Authored-By: Claude`.
- AUCUN import `treasury`/`tiers`. Colis/bagages en **lecture seule** sur la roadmap.
- Aucune modification du cycle de vie du voyage ; l'embarquement est indépendant du départ.
- Français partout (UI + messages). Devise XAF.
- Pas de framework de test : `manage.py check`, `makemigrations --check`, smoke shell, smoke HTTP, `npx ng build`. Python : `../env/bin/python` depuis `backend/`.
- Env base neuve : `DATABASE_URL="sqlite:////private/tmp/claude-501/-Users-zealot-Desktop-brainstore-new-erp/328f24eb-fbb8-44b6-adf2-7750c9e95eda/scratchpad/roadmap_test.sqlite3"`
- AUCUN nouveau modèle → aucune migration attendue.
- Réutilise : `voyages_booking.services.board_ticket`, `voyages_consignment.selectors.trip_manifest`, `trip.company`, `voyages_config.selectors`.

---

### Task 1: Sélecteur passagers + service embarquement groupé + garde-fou

**Files:**
- Modify: `backend/apps/voyages_booking/selectors/__init__.py`
- Modify: `backend/apps/voyages_booking/services/booking_services.py`

**Interfaces:**
- Consumes: `Ticket`, `Booking`, `voyages_trips.Trip`.
- Produces:
  - `trip_passengers(trip)` → queryset de `Ticket` (statut `sold`/`boarded`) trié par siège.
  - `board_all_tickets(trip, *, user) -> int` (nombre de billets embarqués).
  - `board_ticket` gagne un garde-fou d'état de voyage.

- [ ] **Step 1: Ajouter `trip_passengers` dans `selectors/__init__.py`**
Ajouter la fonction (après `booking_detail`) :
```python
def trip_passengers(trip):
    """Billets vendus/embarqués d'un voyage, triés par siège (pour la feuille de route)."""
    from apps.voyages_booking.models import Ticket
    return (Ticket.objects.filter(is_deleted=False, trip=trip,
                                  status__in=[Ticket.Status.SOLD, Ticket.Status.BOARDED])
            .select_related("passenger", "trip_seat", "destination_point")
            .order_by("trip_seat__row", "trip_seat__column"))
```
Puis l'ajouter à `__all__` :
```python
__all__ = ["find_passengers", "bookable_trips", "seat_map", "trip_destinations",
           "list_bookings", "booking_detail", "loyalty_view", "trip_passengers"]
```

- [ ] **Step 2: Garde-fou d'état dans `board_ticket`**
Dans `backend/apps/voyages_booking/services/booking_services.py`, au début de `board_ticket`, après le `if ticket.status != Ticket.Status.SOLD:` bloc, insérer le contrôle d'état du voyage. Remplacer le début de la fonction :
```python
@transaction.atomic
def board_ticket(ticket, *, user):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être embarqué."))
    if ticket.trip.status not in ("pending", "departed"):
        raise ApplicationError(_("L'embarquement n'est possible qu'à l'approche du départ."))
    ticket.status = Ticket.Status.BOARDED
```
(garder la suite inchangée).

- [ ] **Step 3: Ajouter `board_all_tickets`**
Toujours dans `booking_services.py`, après `board_ticket`, ajouter :
```python
@transaction.atomic
def board_all_tickets(trip, *, user):
    """Embarque tous les billets vendus non encore embarqués d'un voyage. Idempotent."""
    if trip.status not in ("pending", "departed"):
        raise ApplicationError(_("L'embarquement n'est possible qu'à l'approche du départ."))
    done = 0
    for t in trip.tickets.filter(is_deleted=False, status=Ticket.Status.SOLD):
        board_ticket(t, user=user)
        done += 1
    return done
```
> Note : `Ticket` et `ApplicationError` sont déjà importés en tête de `booking_services.py`. `trip.tickets` est le related_name de `Ticket.trip`.

- [ ] **Step 4: Exporter `board_all_tickets` dans `services/__init__.py`**
Dans `backend/apps/voyages_booking/services/__init__.py`, ajouter `board_all_tickets` à l'import depuis `.booking_services` et à `__all__`.
```python
from .booking_services import (
    create_booking, cancel_booking, board_ticket, board_all_tickets, mark_no_show,
)

__all__ = ["get_or_create_passenger", "loyalty_services",
           "create_booking", "cancel_booking", "board_ticket", "board_all_tickets", "mark_no_show"]
```

- [ ] **Step 5: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 6: Commit**
```bash
git add backend/apps/voyages_booking/selectors backend/apps/voyages_booking/services
git commit -m "feat(voyages-roadmap): sélecteur passagers + embarquement groupé + garde-fou état voyage"
```

---

### Task 2: Endpoint roadmap + board-all (serializer, vue, urls)

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/views.py`
- Modify: `backend/apps/voyages_booking/urls.py`

**Interfaces:**
- Consumes: `trip_passengers`, `board_all_tickets`, `voyages_consignment.selectors.trip_manifest`, `voyages_trips.Trip`.
- Produces: `GET trips/<trip_id>/roadmap/` et `POST trips/<trip_id>/board-all/`.

- [ ] **Step 1: Ajouter les vues dans `config_api/views.py`**
À la fin de `backend/apps/voyages_booking/config_api/views.py`, ajouter :
```python
from apps.voyages_trips.models import Trip as VoyageTrip
from apps.voyages_consignment.selectors import trip_manifest


def _company_header(company, request):
    logo_url = None
    if getattr(company, "logo", None):
        try:
            logo_url = request.build_absolute_uri(company.logo.url)
        except Exception:
            logo_url = None
    address = str(company.address) if getattr(company, "address_id", None) else ""
    return {"name": company.name, "slogan": company.slogan or "", "logo_url": logo_url,
            "phone": company.phone or "", "email": company.email or "", "address": address}


class TripRoadmapView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, trip_id):
        trip = (VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id)
                .select_related("route", "origin", "destination", "vehicle").first())
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)

        seats = trip.seats.filter(is_deleted=False)
        seats_total = seats.count()
        seats_sold = seats.filter(status__in=["sold"]).count()

        passengers = []
        boarded_count = 0
        for t in selectors.trip_passengers(trip):
            is_boarded = t.status == "boarded"
            if is_boarded:
                boarded_count += 1
            passengers.append({
                "ticket_id": str(t.id), "number": t.number,
                "passenger_name": t.passenger.full_name if t.passenger_id else "",
                "seat_number": t.trip_seat.seat_number if t.trip_seat_id else "",
                "destination_point_name": t.destination_point.name if t.destination_point_id else "",
                "direction_display": t.get_direction_display(),
                "status": t.status, "boarded": is_boarded,
                "boarded_at": t.boarded_at,
            })

        manifest = trip_manifest(trip)
        baggage = [{
            "tag_number": b.tag_number, "owner_name": b.owner_name,
            "ticket_id": str(b.ticket_id) if b.ticket_id else None,
            "passenger_name": (b.ticket.passenger.full_name if b.ticket_id and b.ticket.passenger_id else ""),
            "description": b.description, "weight_kg": b.weight_kg, "quantity": b.quantity,
        } for b in manifest["baggage"]]
        parcels = [{
            "reference": p.reference, "sender_name": p.sender_name, "sender_phone": p.sender_phone,
            "recipient_name": p.recipient_name, "recipient_phone": p.recipient_phone,
            "description": p.description, "quantity": p.quantity,
        } for p in manifest["parcels"]]

        crew = [{"role_display": c.get_role_display(),
                 "driver_name": c.driver.full_name if c.driver_id else ""}
                for c in trip.crew.filter(is_deleted=False)]

        data = {
            "company": _company_header(trip.company, request),
            "trip": {
                "number": trip.number, "route_code": trip.route.code if trip.route_id else "",
                "origin_name": trip.origin.name if trip.origin_id else "",
                "destination_name": trip.destination.name if trip.destination_id else "",
                "scheduled_departure": trip.scheduled_departure,
                "status": trip.status, "status_display": trip.get_status_display(),
                "vehicle_plate": trip.vehicle.license_plate if trip.vehicle_id else "",
                "crew": crew, "seats_total": seats_total, "seats_sold": seats_sold,
                "boarded_count": boarded_count,
            },
            "passengers": passengers, "baggage": baggage, "parcels": parcels,
        }
        return success_response(data)


class TripBoardAllView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, trip_id):
        trip = VoyageTrip.objects.filter(is_deleted=False, company=request.user.company, id=trip_id).first()
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        try:
            done = services.board_all_tickets(trip, user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response({"done": done})
```
> Note : `selectors`, `services`, `success_response`, `error_response`, `ApplicationError`, `APIView`, `IsInstitutionAdmin` sont déjà importés en tête du fichier.

- [ ] **Step 2: Ajouter les routes dans `urls.py`**
Dans `backend/apps/voyages_booking/urls.py`, avant la ligne `path("tickets/<uuid:pk>/board/", ...)`, ajouter :
```python
    path("trips/<uuid:trip_id>/roadmap/", v.TripRoadmapView.as_view()),
    path("trips/<uuid:trip_id>/board-all/", v.TripBoardAllView.as_view()),
```

- [ ] **Step 3: Check**
Run: `../env/bin/python manage.py check`
Expected: uniquement l'avertissement staticfiles.

- [ ] **Step 4: Commit**
```bash
git add backend/apps/voyages_booking/config_api/views.py backend/apps/voyages_booking/urls.py
git commit -m "feat(voyages-roadmap): endpoint roadmap (agrégation) + board-all"
```

---

### Task 3: Smoke backend de bout en bout

**Files:**
- Create (scratchpad, non commité) : `smoke_roadmap.py`

- [ ] **Step 1: Écrire le smoke** dans le scratchpad. Il doit :
  1. Créer Company (avec `name`, `slug`, `slogan`, `phone`), Town, deux ServicePoints (gares), Route, FareClass, ConsignmentNature/Type, VoyagesSettings.
  2. Créer un Trip `pending` avec sièges matérialisés (insérer des `TripSeat`).
  3. Créer une réservation (via `voyages_booking.services.create_booking`) sur un siège → un Ticket.
  4. Charger un colis sur le voyage (`register_parcel` + `assign_to_trip`) et ajouter un bagage (`add_baggage(trip=..., ticket=...)`).
  5. Appeler la logique de `TripRoadmapView` en important le sélecteur `trip_passengers` + `trip_manifest` : vérifier 1 passager, 1 colis, 1 bagage, et l'en-tête entreprise (name/slogan/phone).
  6. `board_all_tickets(trip)` → assert renvoie 1 et le billet passe `boarded`.
  7. Créer un Trip `draft` + tenter `board_all_tickets` → `ApplicationError` (garde-fou).

- [ ] **Step 2: Exécuter le smoke sur base neuve**
Run: `DATABASE_URL="…roadmap_test.sqlite3" ../env/bin/python manage.py migrate` puis
`DATABASE_URL="…roadmap_test.sqlite3" ../env/bin/python manage.py shell < <scratchpad>/smoke_roadmap.py`
Expected: chaque scénario affiche « OK … » ; ligne finale « ALL SMOKE OK ». Corriger tout échec avant de commiter (recréer le sqlite entre essais).

- [ ] **Step 3: makemigrations --check**
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 4: Commit**
```bash
git commit --allow-empty -m "test(voyages-roadmap): smoke backend vérifié"
```

---

### Task 4: Plomberie frontend (modèle + service + api.config)

**Files:**
- Create: `angular/src/_api/models/voyages-roadmap.models.ts`
- Create: `angular/src/_api/services/voyages-booking/roadmap.service.ts`
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_BOOKING`)

**Interfaces:**
- Consumes: endpoints de la Task 2.
- Produces: interface `Roadmap` ; `RoadmapService.get(tripId)` + `boardAll(tripId)`.

- [ ] **Step 1: Ajouter les URLs dans `api.config.ts`**
Dans le bloc `VOYAGES_BOOKING` de `angular/src/_api/config/api.config.ts`, après `ticketBoard`, ajouter :
```typescript
  tripRoadmap: (tripId: string) => `${VB}/trips/${tripId}/roadmap/`,
  tripBoardAll: (tripId: string) => `${VB}/trips/${tripId}/board-all/`,
```

- [ ] **Step 2: `models/voyages-roadmap.models.ts`**
```typescript
export interface RoadmapCompany {
  name: string; slogan: string; logo_url: string | null; phone: string; email: string; address: string;
}
export interface RoadmapCrew { role_display: string; driver_name: string; }
export interface RoadmapTrip {
  number: string; route_code: string; origin_name: string; destination_name: string;
  scheduled_departure: string; status: string; status_display: string; vehicle_plate: string;
  crew: RoadmapCrew[]; seats_total: number; seats_sold: number; boarded_count: number;
}
export interface RoadmapPassenger {
  ticket_id: string; number: string; passenger_name: string; seat_number: string;
  destination_point_name: string; direction_display: string; status: string;
  boarded: boolean; boarded_at: string | null;
}
export interface RoadmapBaggage {
  tag_number: string; owner_name: string; ticket_id: string | null; passenger_name: string;
  description: string; weight_kg: string | null; quantity: number;
}
export interface RoadmapParcel {
  reference: string; sender_name: string; sender_phone: string;
  recipient_name: string; recipient_phone: string; description: string; quantity: number;
}
export interface Roadmap {
  company: RoadmapCompany; trip: RoadmapTrip;
  passengers: RoadmapPassenger[]; baggage: RoadmapBaggage[]; parcels: RoadmapParcel[];
}
```

- [ ] **Step 3: `services/voyages-booking/roadmap.service.ts`**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Roadmap } from '../../models/voyages-roadmap.models';

@Injectable({ providedIn: 'root' })
export class RoadmapService {
  constructor(private http: HttpClient) {}
  get(tripId: string): Observable<Roadmap> {
    return this.http.get<any>(VOYAGES_BOOKING.tripRoadmap(tripId)).pipe(map(r => r.data ?? r));
  }
  boardAll(tripId: string): Observable<{ done: number }> {
    return this.http.post<any>(VOYAGES_BOOKING.tripBoardAll(tripId), {}).pipe(map(r => r.data ?? r));
  }
}
```

- [ ] **Step 4: Commit**
```bash
git add angular/src/_api/models/voyages-roadmap.models.ts angular/src/_api/services/voyages-booking/roadmap.service.ts angular/src/_api/config/api.config.ts
git commit -m "feat(voyages-roadmap-fe): modèle + service + endpoints"
```

---

### Task 5: Écran Feuille de route + CSS impression

**Files:**
- Create: `angular/src/_api/pages/voyages/roadmap/roadmap.component.ts`
- Create: `angular/src/_api/pages/voyages/roadmap/roadmap.component.html`
- Create: `angular/src/_api/pages/voyages/roadmap/roadmap.component.scss`

**Interfaces:**
- Consumes: `RoadmapService`, `Roadmap`, `BookingService.board(ticketId)`.

- [ ] **Step 1: `roadmap.component.ts`**
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadmapService } from '../../../services/voyages-booking/roadmap.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Roadmap } from '../../../models/voyages-roadmap.models';

@Component({
  selector: 'app-vb-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  imports: [CommonModule],
})
export class VbRoadmapComponent implements OnInit {
  tripId = ''; data: Roadmap | null = null; loading = false;

  constructor(private svc: RoadmapService, private booking: BookingService,
              private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId')!;
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.get(this.tripId).subscribe({ next: d => { this.data = d; this.loading = false; }, error: () => this.loading = false });
  }
  get canBoard(): boolean { return this.data?.trip.status === 'pending' || this.data?.trip.status === 'departed'; }

  board(ticketId: string): void {
    this.booking.board(ticketId).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  boardAll(): void {
    this.svc.boardAll(this.tripId).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  printDoc(which: 'voyages' | 'colis'): void {
    document.body.classList.add('printing-' + which);
    const cleanup = () => { document.body.classList.remove('printing-voyages', 'printing-colis'); window.removeEventListener('afterprint', cleanup); };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 50);
  }
  back(): void { this.router.navigate(['/voyages/list']); }
}
```

- [ ] **Step 2: `roadmap.component.html`** — barre d'actions (non imprimée) + deux blocs bordereaux. Chaque bordereau porte un en-tête entreprise réutilisable.
```html
<div class="rm-actions no-print">
  <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
    <button class="btn btn-light" (click)="back()"><i class="ti ti-arrow-left me-1"></i>Retour</button>
    <div class="d-flex gap-2">
      @if (canBoard) { <button class="btn btn-outline-success" (click)="boardAll()"><i class="ti ti-users-check me-1"></i>Tout embarquer</button> }
      <button class="btn btn-outline-primary" (click)="printDoc('voyages')"><i class="ti ti-printer me-1"></i>Bordereau Voyages</button>
      <button class="btn btn-outline-primary" (click)="printDoc('colis')"><i class="ti ti-printer me-1"></i>Bordereau Colis</button>
    </div>
  </div>
</div>

@if (loading) { <div class="text-center py-5 no-print"><div class="spinner-border text-primary"></div></div> }
@else if (data) {
  <!-- En-tête voyage (écran) -->
  <div class="card mb-3 no-print"><div class="card-body">
    <h4>{{ data.trip.number }} <span class="badge bg-info ms-2">{{ data.trip.status_display }}</span></h4>
    <p class="mb-1">{{ data.trip.origin_name }} → {{ data.trip.destination_name }} · {{ data.trip.scheduled_departure | date:'dd/MM/yyyy HH:mm' }}</p>
    <p class="mb-1 text-muted">Véhicule : {{ data.trip.vehicle_plate || '—' }} · Équipage :
      @for (c of data.trip.crew; track $index) { {{ c.role_display }} {{ c.driver_name }}@if (!$last) { , } } @empty { — }</p>
    <p class="mb-0"><strong>Remplissage :</strong> {{ data.trip.seats_sold }}/{{ data.trip.seats_total }} · <strong>Embarqués :</strong> {{ data.trip.boarded_count }}</p>
  </div></div>

  <!-- ===================== Bordereau Voyages ===================== -->
  <div class="print-voyages">
    <div class="rm-doc-header">
      <div class="rm-company">
        @if (data.company.logo_url) { <img [src]="data.company.logo_url" class="rm-logo" alt="logo" /> }
        <div>
          <div class="rm-company-name">{{ data.company.name }}</div>
          @if (data.company.slogan) { <div class="rm-company-slogan">{{ data.company.slogan }}</div> }
          <div class="rm-company-contact">{{ data.company.phone }}@if (data.company.address) {  · {{ data.company.address }} }</div>
        </div>
      </div>
      <div class="rm-doc-title">Bordereau Voyages</div>
    </div>
    <div class="rm-trip-line">
      <strong>{{ data.trip.number }}</strong> — {{ data.trip.origin_name }} → {{ data.trip.destination_name }}
      · {{ data.trip.scheduled_departure | date:'dd/MM/yyyy HH:mm' }} · Véhicule {{ data.trip.vehicle_plate || '—' }}
    </div>

    <h6 class="rm-section">Passagers ({{ data.passengers.length }})</h6>
    <table class="table table-bordered rm-table">
      <thead><tr><th>#</th><th>Billet</th><th>Passager</th><th>Siège</th><th>Descente</th><th>Sens</th><th>Embarqué</th><th class="no-print rm-act">Action</th><th class="print-only">Émargement</th></tr></thead>
      <tbody>
        @for (p of data.passengers; track p.ticket_id; let i = $index) {
          <tr>
            <td>{{ i + 1 }}</td><td>{{ p.number }}</td><td>{{ p.passenger_name }}</td>
            <td>{{ p.seat_number }}</td><td>{{ p.destination_point_name }}</td><td>{{ p.direction_display }}</td>
            <td>@if (p.boarded) { <span class="badge bg-success">Oui</span> } @else { <span class="badge bg-secondary">Non</span> }</td>
            <td class="no-print rm-act">@if (!p.boarded && canBoard) { <button class="btn btn-sm btn-outline-success" (click)="board(p.ticket_id)"><i class="ti ti-user-check"></i></button> }</td>
            <td class="print-only"></td>
          </tr>
        } @empty { <tr><td colspan="9" class="text-center text-muted">Aucun passager.</td></tr> }
      </tbody>
    </table>

    <h6 class="rm-section">Bagages ({{ data.baggage.length }})</h6>
    <table class="table table-bordered rm-table">
      <thead><tr><th>Étiquette</th><th>Propriétaire</th><th>Description</th><th>Poids</th><th>Nb</th></tr></thead>
      <tbody>
        @for (b of data.baggage; track b.tag_number) {
          <tr><td>{{ b.tag_number }}</td><td>{{ b.owner_name }}</td><td>{{ b.description || '—' }}</td><td>{{ b.weight_kg || '—' }}</td><td>{{ b.quantity }}</td></tr>
        } @empty { <tr><td colspan="5" class="text-center text-muted">Aucun bagage.</td></tr> }
      </tbody>
    </table>
  </div>

  <!-- ===================== Bordereau Colis ===================== -->
  <div class="print-colis">
    <div class="rm-doc-header">
      <div class="rm-company">
        @if (data.company.logo_url) { <img [src]="data.company.logo_url" class="rm-logo" alt="logo" /> }
        <div>
          <div class="rm-company-name">{{ data.company.name }}</div>
          @if (data.company.slogan) { <div class="rm-company-slogan">{{ data.company.slogan }}</div> }
          <div class="rm-company-contact">{{ data.company.phone }}@if (data.company.address) {  · {{ data.company.address }} }</div>
        </div>
      </div>
      <div class="rm-doc-title">Bordereau Colis</div>
    </div>
    <div class="rm-trip-line">
      <strong>{{ data.trip.number }}</strong> — {{ data.trip.origin_name }} → {{ data.trip.destination_name }}
      · {{ data.trip.scheduled_departure | date:'dd/MM/yyyy HH:mm' }} · Véhicule {{ data.trip.vehicle_plate || '—' }}
    </div>
    <h6 class="rm-section">Colis ({{ data.parcels.length }})</h6>
    <table class="table table-bordered rm-table">
      <thead><tr><th>Référence</th><th>Expéditeur</th><th>Destinataire</th><th>Description</th><th>Pièces</th></tr></thead>
      <tbody>
        @for (c of data.parcels; track c.reference) {
          <tr><td>{{ c.reference }}</td><td>{{ c.sender_name }}<br><small>{{ c.sender_phone }}</small></td>
            <td>{{ c.recipient_name }}<br><small>{{ c.recipient_phone }}</small></td><td>{{ c.description || '—' }}</td><td>{{ c.quantity }}</td></tr>
        } @empty { <tr><td colspan="5" class="text-center text-muted">Aucun colis chargé.</td></tr> }
      </tbody>
    </table>
  </div>
}
```

- [ ] **Step 2b: `roadmap.component.scss`**
```scss
.rm-doc-header {
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 2px solid #222; padding-bottom: 8px; margin-bottom: 8px;
}
.rm-company { display: flex; align-items: center; gap: 12px; }
.rm-logo { height: 56px; width: auto; object-fit: contain; }
.rm-company-name { font-weight: 700; font-size: 1.1rem; }
.rm-company-slogan { font-style: italic; color: #555; font-size: .85rem; }
.rm-company-contact { font-size: .8rem; color: #555; }
.rm-doc-title { font-size: 1.15rem; font-weight: 700; text-transform: uppercase; }
.rm-trip-line { margin-bottom: 10px; }
.rm-section { margin-top: 14px; font-weight: 700; }
.rm-table { font-size: .85rem; }

/* La colonne "Émargement" ne sert qu'à l'impression */
.print-only { display: none; }

/* À l'écran, les deux bordereaux sont visibles l'un sous l'autre */
.print-colis { margin-top: 24px; }

@media print {
  /* Masque tout le chrome de l'application */
  app-sidebar, .sidebar, .header, app-header, .page-header, .no-print { display: none !important; }
  .print-only { display: table-cell; }
  .rm-act { display: none !important; }

  /* Par défaut à l'impression, on masque les deux ; le body active celui voulu */
  .print-voyages, .print-colis { display: none; }
  body.printing-voyages .print-voyages { display: block; }
  body.printing-colis .print-colis { display: block; }
}
```

- [ ] **Step 3: Commit**
```bash
git add angular/src/_api/pages/voyages/roadmap
git commit -m "feat(voyages-roadmap-fe): écran feuille de route + impression des deux bordereaux"
```

---

### Task 6: Route + boutons d'accès + build

**Files:**
- Modify: `angular/src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.html`
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.html`

**Interfaces:**
- Consumes: `VbRoadmapComponent`.

- [ ] **Step 1: Route** — dans `pages.routes.ts`, dans les `children` du groupe `voyages` (à côté de `trip/:id`), ajouter :
```typescript
                { path: 'roadmap/:tripId', loadComponent: () => import('../../../_api/pages/voyages/roadmap/roadmap.component').then(m => m.VbRoadmapComponent) },
```

- [ ] **Step 2: Bouton sur la liste des voyages** — dans `voyages-list.component.html`, dans la colonne Actions de chaque ligne (là où se trouve le lien vers le détail `[/voyages/trip/, row.id]`), ajouter un lien :
```html
<a [routerLink]="['/voyages/roadmap', row.id]" class="btn btn-sm btn-outline-secondary ms-1" title="Feuille de route"><i class="ti ti-clipboard-list"></i></a>
```
> Vérifier que `RouterLink` est importé dans `voyages-list.component.ts` (il l'est déjà si la liste route vers le détail). Sinon, ajouter `RouterLink` à `imports`.

- [ ] **Step 3: Bouton sur le détail voyage** — dans `trip-detail.component.html`, dans la barre d'actions du haut (près de « Soumettre »/« Départ »), ajouter :
```html
<a [routerLink]="['/voyages/roadmap', trip.id]" class="btn btn-sm btn-outline-secondary"><i class="ti ti-clipboard-list me-1"></i>Feuille de route</a>
```
> Vérifier que `RouterLink` / `RouterModule` est importé dans `trip-detail.component.ts` ; l'ajouter à `imports` si absent.

- [ ] **Step 4: Build**
Run: `cd angular && npx ng build`
Expected: `Application bundle generation complete.` sans erreur référençant roadmap (uniquement les avertissements préexistants file-saver / selector-errors).

- [ ] **Step 5: Commit**
```bash
git add angular/src/app/features/pages/pages.routes.ts angular/src/_api/pages/voyages/list/voyages-list.component.html angular/src/_api/pages/voyages/trip-detail/trip-detail.component.html angular/src/_api/pages/voyages/list/voyages-list.component.ts angular/src/_api/pages/voyages/trip-detail/trip-detail.component.ts
git commit -m "feat(voyages-roadmap-fe): route + boutons d'accès (liste & détail voyage)"
```

---

## Achèvement

Après la Task 6, lancer **superpowers:finishing-a-development-branch** : vérifier (`manage.py check`, `makemigrations --check`, smoke backend, `ng build`), puis présenter les 4 options pour `feature/voyages-roadmap`.
