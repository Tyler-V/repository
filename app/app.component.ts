import { Component, HostListener, OnInit } from '@angular/core';
import { SharedComponent } from './shared.component';

@Component({
  selector: 'app',
  template: require('./app.component.html!text'),
  styles: [require('./app.component.css!text')]
})

export class AppComponent implements OnInit {

  constructor(private shared: SharedComponent) { }

  ngOnInit() {
    this.shared.setWindowDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.shared.setWindowDimensions();
  }
}