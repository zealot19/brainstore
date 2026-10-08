import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getTranslocoModule } from '../../../../app/core/i18n/testing/transloco-testing';
import { AuditLogComponent } from './audit.component';
import { AuditService } from '../../../services/audit/audit.service';

const LOGS = [
  { id: '1', timestamp: '', user: 'u1', user_display: 'Alice', company: null, company_name: null,
    module: 'TREASURY', module_label: 'Trésorerie', action: 'CANCEL', action_label: 'Annulation',
    target_type: 'Ticket', target_id: 't1', description: '', device_id: '', ip_address: null,
    changes: { status: { old: 'sold', new: 'cancelled' } } },
  { id: '2', timestamp: '', user: 'u2', user_display: 'Bob', company: null, company_name: null,
    module: 'VOYAGE', module_label: 'Voyages', action: 'UPDATE', action_label: 'Modification',
    target_type: 'Trip', target_id: 't2', description: '', device_id: '', ip_address: null,
    changes: {} },
];

describe('AuditLogComponent', () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [AuditLogComponent, getTranslocoModule()],
      providers: [{ provide: AuditService, useValue: { getLogs: () => of(LOGS) } }],
    });
    const fixture = TestBed.createComponent(AuditLogComponent);
    fixture.detectChanges();
    return fixture.componentInstance;
  }

  it('inclut l’action Annulation (CANCEL)', () => {
    const c = setup();
    expect(c.actions.some(a => a.value === 'CANCEL')).toBe(true);
  });

  it('construit la liste des utilisateurs distincts', () => {
    const c = setup();
    expect(c.users.map(u => u.label).sort()).toEqual(['Alice', 'Bob']);
  });

  it('filtre par utilisateur', () => {
    const c = setup();
    c.filterUser = 'u1';
    c.onSearch();
    expect(c.filtered.length).toBe(1);
    expect(c.filtered[0].user_display).toBe('Alice');
  });
});
