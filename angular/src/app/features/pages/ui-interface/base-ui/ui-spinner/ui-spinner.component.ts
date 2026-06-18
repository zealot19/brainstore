import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-ui-spinner',
    templateUrl: './ui-spinner.component.html',
    styleUrls: ['./ui-spinner.component.scss'],
    imports: [DragDropModule]
})
export class UiSpinnerComponent {
}
