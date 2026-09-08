import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-treasury',
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule, TranslocoModule],
})
export class TreasuryComponent {}
