import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenService } from '../../../services/auth/token.service';
import { UserProfile } from '../../../models/auth.models';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
})
export class LockScreenComponent implements OnInit {

  form!:        FormGroup;
  user:         UserProfile | null = null;
  showPassword  = false;
  loading       = false;
  errorMsg      = '';

  constructor(
    private fb:           FormBuilder,
    private authService:  AuthService,
    private tokenService: TokenService,
    private router:       Router,
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();

    // Si aucun profil en cache, retour au login complet
    if (!this.user) {
      this.router.navigate(['/signin']);
      return;
    }

    this.form = this.fb.group({
      password: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading  = true;
    this.errorMsg = '';

    this.authService.unlockSession(this.form.value.password).subscribe({
      next: () => {
        this.loading = false;
        const returnUrl = this.tokenService.getLockReturnUrl();
        this.router.navigateByUrl(returnUrl);
      },
      error: err => {
        this.loading  = false;
        this.form.get('password')?.reset();
        this.errorMsg = err?.error?.detail ?? 'Mot de passe incorrect.';
      },
    });
  }

  /** Quitte le verrouillage et retourne à la page de connexion (session effacée). */
  backToLogin(): void {
    this.tokenService.clearTokens();   // efface tokens + profil en cache
    this.router.navigate(['/signin']);
  }

  get userInitials(): string {
    if (!this.user) return '?';
    return `${this.user.first_name?.[0] ?? ''}${this.user.last_name?.[0] ?? ''}`.toUpperCase();
  }
}
