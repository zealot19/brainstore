import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  Event as RouterEvent,
  RouterModule,
} from '@angular/router';
import { SpinnerService } from './core/core.index';
import { LoaderComponent } from './layouts/loader/loader.component';
import { ToastContainerComponent } from './shared/toast/toast-container.component';
import { LicenseLockComponent } from './shared/license-lock/license-lock.component';
import { LicenseService } from '../_api/services/system/license.service';
import { TokenService } from '../_api/services/auth/token.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, LoaderComponent, ToastContainerComponent, LicenseLockComponent]
})
export class AppComponent implements OnInit {
  title = 'template';
  public page = '';

  private licenseService = inject(LicenseService);
  private tokenService = inject(TokenService);

  constructor(private router: Router, private spinner: SpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.page = URL[1];
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
  }

  ngOnInit(): void {
    if (this.tokenService.getAccessToken()) {
      this.licenseService.check();
    }
  }
}
