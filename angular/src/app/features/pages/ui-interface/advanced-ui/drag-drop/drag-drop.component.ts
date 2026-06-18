import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-drop',
  imports: [CdkDrag,CommonModule,DragDropModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  isFullscreen = false;
  
  cards = [
  { bg: 'bg-primary', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' },
  { bg: 'bg-secondary', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' },
  { bg: 'bg-success', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' },
  { bg: 'bg-info', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' },
  { bg: 'bg-warning', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' },
  { bg: 'bg-danger', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in <cite title="Source Title">Source Title' }
];
leftItems = [
  {
    name: 'Louis K. Bond',
    role: 'Founder & CEO',
    img: 'assets/img/profiles/avatar-07.jpg'
  },
  {
    name: 'Dennis N. Cloutier',
    role: 'Software Engineer',
    img: 'assets/img/profiles/avatar-08.jpg'
  },
  {
    name: 'Susan J. Sander',
    role: 'Web Designer',
    img: 'assets/img/profiles/avatar-09.jpg'
  }
];

rightItems = [
  {
    name: 'James M. Short',
    role: 'Web Developer',
    img: 'assets/img/profiles/avatar-10.jpg'
  },
  {
    name: 'Gabriel J. Snyder',
    role: 'Business Analyst',
    img: 'assets/img/profiles/avatar-05.jpg'
  },
  {
    name: 'Louie C. Mason',
    role: 'Human Resources',
    img: 'assets/img/profiles/avatar-03.jpg'
  }
];
leftStuffItems = [
  {
    name: 'Louis K. Bond',
    role: 'Founder & CEO',
    img: 'assets/img/profiles/avatar-01.jpg',
    desc: 'Disrupt pork belly poutine...'
  },
  {
    name: 'Dennis N. Cloutier',
    role: 'Software Engineer',
    img: 'assets/img/profiles/avatar-02.jpg',
    desc: 'Disrupt pork belly poutine...'
  },
  {
    name: 'Susan J. Sander',
    role: 'Web Designer',
    img: 'assets/img/profiles/avatar-03.jpg',
    desc: 'Disrupt pork belly poutine...'
  }
];

rightStuffItems = [
  {
    name: 'James M. Short',
    role: 'Web Developer',
    img: 'assets/img/profiles/avatar-04.jpg',
    desc: 'Disrupt pork belly poutine...'
  },
  {
    name: 'Gabriel J. Snyder',
    role: 'Business Analyst',
    img: 'assets/img/profiles/avatar-05.jpg',
    desc: 'Disrupt pork belly poutine...'
  },
  {
    name: 'Louie C. Mason',
    role: 'Human Resources',
    img: 'assets/img/profiles/avatar-06.jpg',
    desc: 'Disrupt pork belly poutine...'
  }
];


drop(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    // same list reorder
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  } else {
    // move between lists
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
}
