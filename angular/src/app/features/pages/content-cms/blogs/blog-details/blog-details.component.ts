import { Component } from '@angular/core';
import { SidebarService } from '../../../../../core/core.index';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  imports: []
})
export class BlogDetailsComponent {
  constructor(
    private sidebar: SidebarService
  ){}
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
}
