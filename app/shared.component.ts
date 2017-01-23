import { Injectable } from '@angular/core';

@Injectable()
export class SharedComponent {

    navigationWidth: number;

    windowHeight: number;
    windowWidth: number;

    constructor() { }

    setWindowDimensions() {
        this.windowHeight = document.documentElement.clientHeight;
        this.windowWidth = document.documentElement.clientWidth;
        //console.log("Dimensions → (Height: " + this.windowHeight + " | Width: " + this.windowWidth + ")");
    }
}