import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { PasswordService } from '../../../services/auth/password.service';
import { routes } from '../../../../app/core/core.index';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslocoModule],
})
export class ResetPasswordComponent implements OnInit {
  readonly routes = routes;

  form!:    FormGroup;
  loading   = false;
  done      = false;
  errorMsg  = '';
  show      = [false, false];

  protected token = '';

  constructor(
    private fb:              FormBuilder,
    private passwordService: PasswordService,
    private router:          Router,
    private route:           ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Le token arrive dans l'URL : /reset-password?token=xxxx
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (!this.token) {
      this.errorMsg = 'Lien invalide ou expiré.';
    }

    this.form = this.fb.group(
      {
        new_password:     ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', Validators.required],
      },
      { validators: this.passwordsMatch },
    );
  }

  submit(): void {
    if (this.form.invalid || this.loading || !this.token) return;
    this.loading  = true;
    this.errorMsg = '';

    this.passwordService.confirmReset({
      token:            this.token,
      new_password:     this.form.value.new_password,
      confirm_password: this.form.value.confirm_password,
    }).subscribe({
      next: () => {
        this.loading = false;
        this.done    = true;
        setTimeout(() => this.router.navigate([routes.signIn]), 3000);
      },
      error: err => {
        this.loading  = false;
        this.errorMsg = err?.error?.detail ?? 'Lien invalide ou expiré.';
      },
    });
  }

  private passwordsMatch(group: AbstractControl) {
    const pwd  = group.get('new_password')?.value;
    const conf = group.get('confirm_password')?.value;
    return pwd === conf ? null : { mismatch: true };
  }
}
