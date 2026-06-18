import {
  TokenService
} from "./chunk-XNDMLLHT.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  inject
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/guards/guest.guard.ts
var guestGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (!tokenService.isAuthenticated())
    return true;
  return router.createUrlTree(["/dashboard/index"]);
};

// src/app/features/auth/auth.routes.ts
var Auth_routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BVF6OBFT.js").then((m) => m.AuthComponent),
    children: [
      { path: "email-verification", loadComponent: () => import("./chunk-FPUM7IDH.js").then((m) => m.EmailVerificationComponent) },
      { path: "email-verification-2", loadComponent: () => import("./chunk-STOR42YD.js").then((m) => m.EmailVerification2Component) },
      { path: "email-verification-3", loadComponent: () => import("./chunk-6YDIXZIZ.js").then((m) => m.EmailVerification3Component) },
      { path: "reset-password-2", loadComponent: () => import("./chunk-XVW6CRDY.js").then((m) => m.ResetPassword2Component) },
      { path: "reset-password-3", loadComponent: () => import("./chunk-4ZJK76LG.js").then((m) => m.ResetPassword3Component) },
      // ── Pages connectées au backend ──────────────────────────────────────────
      { path: "signin", canActivate: [guestGuard], loadComponent: () => import("./chunk-B2IKLLQI.js").then((m) => m.SigninComponent) },
      { path: "forgot-password", canActivate: [guestGuard], loadComponent: () => import("./chunk-RKB67O2A.js").then((m) => m.ForgotPasswordComponent) },
      { path: "reset-password", loadComponent: () => import("./chunk-56HJ2ROU.js").then((m) => m.ResetPasswordComponent) },
      { path: "two-step-verification", loadComponent: () => import("./chunk-STFI4LHC.js").then((m) => m.TwoStepComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-3YPZ43IX.js").then((m) => m.LockScreenComponent) },
      // ── Pages template conservées (non connectées) ───────────────────────────
      { path: "forgot-password-2", loadComponent: () => import("./chunk-7IKRSQYD.js").then((m) => m.ForgotPassword2Component) },
      { path: "forgot-password-3", loadComponent: () => import("./chunk-UNHIHGV3.js").then((m) => m.ForgotPassword3Component) },
      { path: "register", loadComponent: () => import("./chunk-OGW45Q2A.js").then((m) => m.RegisterComponent) },
      { path: "register-2", loadComponent: () => import("./chunk-MJ4FUBX3.js").then((m) => m.Register2Component) },
      { path: "register-3", loadComponent: () => import("./chunk-4FL2NYMZ.js").then((m) => m.Register3Component) },
      { path: "signin-2", loadComponent: () => import("./chunk-RWTO2VOU.js").then((m) => m.Signin2Component) },
      { path: "signin-3", loadComponent: () => import("./chunk-6IQAWTM7.js").then((m) => m.Signin3Component) },
      { path: "two-step-verification-2", loadComponent: () => import("./chunk-FIHXA4E2.js").then((m) => m.TwoStepVerification2Component) },
      { path: "two-step-verification-3", loadComponent: () => import("./chunk-6GFSKMXQ.js").then((m) => m.TwoStepVerification3Component) },
      { path: "success", loadComponent: () => import("./chunk-EAKSMJPH.js").then((m) => m.SuccessComponent) },
      { path: "success-2", loadComponent: () => import("./chunk-HRAWCISP.js").then((m) => m.Success2Component) },
      { path: "success-3", loadComponent: () => import("./chunk-EUPVY5RJ.js").then((m) => m.Success3Component) }
    ]
  }
];
export {
  Auth_routes
};
//# sourceMappingURL=chunk-6JPELYXV.js.map
