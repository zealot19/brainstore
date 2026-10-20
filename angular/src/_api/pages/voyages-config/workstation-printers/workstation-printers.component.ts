import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkstationPrintService, WS_PRINT_DOCS } from '../../../../app/shared/print/workstation-print.service';
import { ToastService } from '../../../../app/shared/toast/toast.service';

/** Mappage document → imprimante POUR CE POSTE (localStorage), via l'agent local. */
@Component({
  selector: 'app-workstation-printers',
  templateUrl: './workstation-printers.component.html',
  imports: [CommonModule, FormsModule],
})
export class WorkstationPrintersComponent implements OnInit {
  private ws = inject(WorkstationPrintService);
  private toast = inject(ToastService);
  docs = WS_PRINT_DOCS;
  printers: string[] = [];
  loading = true;
  agentUrl = this.ws.agentUrl;

  ngOnInit(): void { this.refresh(); }

  async refresh(): Promise<void> {
    this.loading = true;
    this.printers = await this.ws.printers();
    this.loading = false;
  }
  get agentOk(): boolean { return this.printers.length > 0; }

  printerFor(code: string): string { return this.ws.getPrinter(code); }
  onPick(code: string, name: string): void {
    this.ws.setPrinter(code, name);
    this.toast.success('Imprimante enregistrée pour ce poste.');
  }
  saveAgentUrl(): void { this.ws.setAgentUrl(this.agentUrl); this.agentUrl = this.ws.agentUrl; this.refresh(); }
}
