import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.component.html!text'),
  styles: ['./app.component.css!text']
})

export class AppComponent {
  name = 'TRiBot Repository';
}