import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-reserver-layout',
  standalone: true,
  imports: [RouterModule, TranslocoModule],
  templateUrl: './reserver-layout.component.html',
  styleUrls: ['./reserver-layout.component.scss'],
})
export class ReserverLayoutComponent {}
