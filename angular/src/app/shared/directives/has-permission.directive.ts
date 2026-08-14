import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PermissionService } from '../../../_api/services/auth/permission.service';

/**
 * Affiche l'élément uniquement si l'utilisateur possède la/les permission(s).
 * Réutilisable par tous les modules :
 *   <button *hasPermission="'fleet.vehicle.create'">Nouveau</button>
 *   <a *hasPermission="['x.update','x.delete']">…</a>   (au moins un)
 */
@Directive({ selector: '[hasPermission]', standalone: true })
export class HasPermissionDirective implements OnDestroy {
  private readonly tpl  = inject(TemplateRef<unknown>);
  private readonly vcr  = inject(ViewContainerRef);
  private readonly perm = inject(PermissionService);

  private codes: string | string[] = [];
  private rendered = false;
  private sub?: Subscription;

  @Input() set hasPermission(value: string | string[]) {
    this.codes = value ?? [];
    if (!this.sub) this.sub = this.perm.permissions$.subscribe(() => this.update());
    this.update();
  }

  private allowed(): boolean {
    return Array.isArray(this.codes) ? this.perm.hasAny(...this.codes) : this.perm.has(this.codes);
  }

  private update(): void {
    const allow = this.allowed();
    if (allow && !this.rendered) { this.vcr.createEmbeddedView(this.tpl); this.rendered = true; }
    else if (!allow && this.rendered) { this.vcr.clear(); this.rendered = false; }
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
