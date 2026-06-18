import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../core/core.index';
import { InputOtp} from 'primeng/inputotp'

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two-step-verification',
    templateUrl: './two-step-verification.component.html',
    styleUrl: './two-step-verification.component.scss',
    imports: [InputOtp, FormsModule, RouterLink]
})
export class TwoStepVerificationComponent {
  public routes = routes;
  value:any;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.resetPassword])
  }
}
