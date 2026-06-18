import { Routes } from '@angular/router';
import { guestGuard } from '../../../_api/guards/guest.guard';


export const Auth_routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./auth.component').then(m => m.AuthComponent),
    children: [
      { path: 'email-verification', loadComponent: () => import('./email-verification/email-verification/email-verification.component').then(m => m.EmailVerificationComponent) },
      { path: 'email-verification-2', loadComponent: () => import('./email-verification/email-verification-2/email-verification-2.component').then(m => m.EmailVerification2Component) },
      { path: 'email-verification-3', loadComponent: () => import('./email-verification/email-verification-3/email-verification-3.component').then(m => m.EmailVerification3Component) },
      { path: 'reset-password-2', loadComponent: () => import('./reset-password/reset-password-2/reset-password-2.component').then(m => m.ResetPassword2Component) },
      { path: 'reset-password-3', loadComponent: () => import('./reset-password/reset-password-3/reset-password-3.component').then(m => m.ResetPassword3Component) },
      // ── Pages connectées au backend ──────────────────────────────────────────
      { path: 'signin',              canActivate: [guestGuard], loadComponent: () => import('../../../_api/pages/auth/signin/signin.component').then(m => m.SigninComponent) },
      { path: 'forgot-password',     canActivate: [guestGuard], loadComponent: () => import('../../../_api/pages/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
      { path: 'reset-password',      loadComponent: () => import('../../../_api/pages/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
      { path: 'two-step-verification', loadComponent: () => import('../../../_api/pages/auth/two-step/two-step.component').then(m => m.TwoStepComponent) },
      { path: 'lock-screen',         loadComponent: () => import('../../../_api/pages/auth/lock-screen/lock-screen.component').then(m => m.LockScreenComponent) },
      // ── Pages template conservées (non connectées) ───────────────────────────
      { path: 'forgot-password-2', loadComponent: () => import('./forgot-password/forgot-password-2/forgot-password-2.component').then(m => m.ForgotPassword2Component) },
      { path: 'forgot-password-3', loadComponent: () => import('./forgot-password/forgot-password-3/forgot-password-3.component').then(m => m.ForgotPassword3Component) },
      { path: 'register', loadComponent: () => import('./register/register/register.component').then(m => m.RegisterComponent) },
      { path: 'register-2', loadComponent: () => import('./register/register-2/register-2.component').then(m => m.Register2Component) },
      { path: 'register-3', loadComponent: () => import('./register/register-3/register-3.component').then(m => m.Register3Component) },
      { path: 'signin-2', loadComponent: () => import('./signin/signin-2/signin-2.component').then(m => m.Signin2Component) },
      { path: 'signin-3', loadComponent: () => import('./signin/signin-3/signin-3.component').then(m => m.Signin3Component) },
      { path: 'two-step-verification-2', loadComponent: () => import('./two-step-verification/two-step-verification-2/two-step-verification-2.component').then(m => m.TwoStepVerification2Component) },
      { path: 'two-step-verification-3', loadComponent: () => import('./two-step-verification/two-step-verification-3/two-step-verification-3.component').then(m => m.TwoStepVerification3Component) },
      { path: 'success', loadComponent: () => import('./successs/success/success.component').then(m => m.SuccessComponent) },
      { path: 'success-2', loadComponent: () => import('./successs/success-2/success-2.component').then(m => m.Success2Component) },
      { path: 'success-3', loadComponent: () => import('./successs/success-3/success-3.component').then(m => m.Success3Component) }
    ]
  },
]