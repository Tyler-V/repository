import { Component } from '@angular/core';
import { SharedComponent } from '../shared.component';

@Component({
  selector: 'tb-content',
  template: require('./content.component.html!text'),
  styles: [require('./content.component.css!text')]
})

export class ContentComponent {

  width: number = this.shared.windowWidth - this.shared.navigationWidth - 40;

  constructor(private shared: SharedComponent) { }

}