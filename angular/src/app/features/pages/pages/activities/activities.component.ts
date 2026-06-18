
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../core/helpers/routes';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss'],
    imports: [RouterLink]
})
export class ActivitiesComponent {
  public routes = routes;

}
