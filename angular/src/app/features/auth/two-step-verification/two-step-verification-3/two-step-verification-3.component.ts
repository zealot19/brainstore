import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../core/core.index';
import { InputOtp } from 'primeng/inputotp';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two-step-verification-3',
    templateUrl: './two-step-verification-3.component.html',
    styleUrl: './two-step-verification-3.component.scss',
    imports: [InputOtp, FormsModule, RouterLink]
})
export class TwoStepVerification3Component {
  public routes = routes;
  value:any;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.resetPassword3])
  }
}
