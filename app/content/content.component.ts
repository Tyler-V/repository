import { Component } from '@angular/core';
import { SharedComponent } from '../shared.component';

@Component({
  selector: 'tb-content',
  template: require('./content.component.html!text'),
  styles: [require('./content.component.css!text')]
})

export class ContentComponent {

  constructor(private shared: SharedComponent) { }
}