import { Component } from '@angular/core';
import { routes, SidebarService } from '../../../../../core/core.index';

import { CustomPaginationComponent } from '../../../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { DateRangePickerComponent } from '../../../../../shared/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-quantity-alert',
  templateUrl: './product-quantity-alert.component.html',
  styleUrls: ['./product-quantity-alert.component.scss'],
  imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, RouterLink]
})
export class ProductQuantityAlertComponent {
routes=routes
constructor(private sidebar:SidebarService){}
isCollapsed: boolean = false;
toggleCollapse() {
  this.sidebar.toggleCollapse();
  this.isCollapsed = !this.isCollapsed;
}
}
