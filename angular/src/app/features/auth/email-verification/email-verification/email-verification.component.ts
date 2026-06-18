import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../core/core.index';
import { FormsModule } from '@angular/forms';

import { InputOtp } from 'primeng/inputotp';

@Component({
    selector: 'app-email-verification',
    templateUrl: './email-verification.component.html',
    styleUrl: './email-verification.component.scss',
    imports: [InputOtp, FormsModule, RouterLink]
})
export class EmailVerificationComponent {
  public routes = routes;
  value : any
    constructor(private router: Router) {}
  
    navigation() {
      this.router.navigate([routes.twoStepVerification])
    }
  
}
