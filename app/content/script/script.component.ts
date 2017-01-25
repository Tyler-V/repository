import { Component, OnDestroy } from '@angular/core';
import { SharedComponent } from '../../shared.component';

@Component({
  selector: 'tb-script',
  template: require('./script.component.html!text'),
  styles: [require('./script.component.css!text')]
})

export class ScriptComponent implements OnDestroy {

  repeat: number = 40;
  colors: any = [];

  maxWidth: number = this.shared.windowWidth - this.shared.navigationWidth - 40;
  windowResizeSubscription: any;

  constructor(private shared: SharedComponent) {
    this.windowResizeSubscription = this.shared.windowResizeEvent.subscribe(() => { });
    this.setColors();
  }

  ngOnDestroy() {
    this.windowResizeSubscription.unsubscribe();
  }

  setColors() {
    function random(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < this.repeat; i++) {
      this.colors.push("rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")");
    }
  }
}