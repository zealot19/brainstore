import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PermissionService } from '../../../_api/services/auth/permission.service';

/**
 * Affiche l'élément uniquement si le module est inclus dans l'offre de la société :
 *   <a *hasModule="'voyage'">Voyages</a>
 *   <button *hasModule="'colis'">Nouveau colis</button>
 * Miroir de *hasPermission, mais pour les entitlements de module (package).
 */
@Directive({ selector: '[hasModule]', standalone: true })
export class HasModuleDirective implements OnDestroy {
  private readonly tpl  = inject(TemplateRef<unknown>);
  private readonly vcr  = inject(ViewContainerRef);
  private readonly perm = inject(PermissionService);

  private code = '';
  private rendered = false;
  private sub?: Subscription;

  @Input() set hasModule(value: string) {
    this.code = value ?? '';
    if (!this.sub) this.sub = this.perm.modules$.subscribe(() => this.update());
    this.update();
  }

  private update(): void {
    const allow = this.perm.hasModule(this.code);
    if (allow && !this.rendered) { this.vcr.createEmbeddedView(this.tpl); this.rendered = true; }
    else if (!allow && this.rendered) { this.vcr.clear(); this.rendered = false; }
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
