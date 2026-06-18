import { Component } from '@angular/core';


@Component({
    selector: 'app-ui-cards',
    templateUrl: './ui-cards.component.html',
    styleUrls: ['./ui-cards.component.scss'],
    imports: []
})
export class UiCardsComponent {
  isCardFullscreen = false;

  toggleFullscreen() {
    this.isCardFullscreen = !this.isCardFullscreen;
  }
  isCardVisible = true;

  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
}
