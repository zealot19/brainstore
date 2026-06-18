import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { AuthService } from '../../../services/auth/auth.service';
import { routes } from '../../../../app/core/core.index';

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  imports: [CommonModule, FormsModule, RouterLink, InputOtpModule],
})
export class TwoStepComponent implements OnInit {
  readonly routes = routes;

  otpValue = '';
  loading  = false;
  errorMsg = '';

  private returnUrl = '/dashboard/index';

  constructor(
    private authService: AuthService,
    private router:      Router,
  ) {}

  ngOnInit(): void {
    // Si on arrive ici sans temp_token (navigation directe), on renvoie au login
    // Le temp_token est stocké en mémoire dans AuthService — pas besoin de vérifier ici
    // car loginWith2FA lèvera une erreur si absent
  }

  submit(): void {
    if (!this.otpValue || this.otpValue.length < 6 || this.loading) return;
    this.loading  = true;
    this.errorMsg = '';

    this.authService.loginWith2FA(this.otpValue).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl(this.returnUrl);
      },
      error: err => {
        this.loading  = false;
        this.otpValue = '';
        this.errorMsg = err?.error?.detail ?? 'Code invalide ou expiré.';
      },
    });
  }
}
