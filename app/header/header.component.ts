import { Component } from '@angular/core';
import { SharedComponent } from '../shared.component';

@Component({
  selector: 'tb-header',
  template: require('./header.component.html!text'),
  styles: [require('./header.component.css!text')]
})

export class HeaderComponent {

  constructor(private shared: SharedComponent) { }

}