import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordService } from '../../../services/auth/password.service';
import { routes } from '../../../../app/core/core.index';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class ForgotPasswordComponent implements OnInit {
  readonly routes = routes;

  form!:    FormGroup;
  loading   = false;
  sent      = false;
  errorMsg  = '';

  constructor(
    private fb:              FormBuilder,
    private passwordService: PasswordService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading  = true;
    this.errorMsg = '';

    this.passwordService.requestReset(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.sent    = true;
      },
      error: err => {
        this.loading  = false;
        this.errorMsg = err?.error?.detail ?? 'Une erreur est survenue. Veuillez réessayer.';
      },
    });
  }
}
