import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { routes } from '../../../../app/core/core.index';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslocoModule],
})
export class SigninComponent implements OnInit {
  readonly routes = routes;

  form!: FormGroup;
  showPassword = false;
  loading      = false;
  errorMsg     = '';

  private returnUrl = '/apps';

  constructor(
    private fb:          FormBuilder,
    private authService: AuthService,
    private router:      Router,
    private route:       ActivatedRoute,
    private toast:       ToastService,
    private t:           TranslocoService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      identifier: ['', Validators.required],
      password:   ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/apps';
  }

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading  = true;
    this.errorMsg = '';

    this.authService.login(this.form.value).subscribe({
      next: res => {
        this.loading = false;
        if (res.requires_2fa) {
          this.router.navigate([routes.twoStepVerification]);
        } else {
          this.toast.success(this.t.translate('auth.login_success'));
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      error: err => {
        this.loading  = false;
        this.errorMsg = err?.error?.detail ?? 'Identifiant ou mot de passe incorrect.';
      },
    });
  }
}
