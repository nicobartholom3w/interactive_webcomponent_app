import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ripple-cursor',
  templateUrl: './ripple-cursor.component.html',
  styleUrls: ['./ripple-cursor.component.scss']
})
export class RippleCursorComponent implements OnInit {
  @ViewChild('container', {static: false}) container: ElementRef;
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      event.stopPropagation();
      this.cursorLeftDistance = event.clientX - this.cursorCenter;
      this.cursorTopDistance = event.clientY - this.cursorCenter - this.container.nativeElement.offsetTop;
    }
  cursorLeftDistance: number;
  cursorTopDistance: number;
  animationLeftDistance: number;
  animationTopDistance: number;
  rippleCenter: number = 16;
  cursorCenter: number = 4;
  clickedArr: number[] = [];
  numberOfRipples: number = 0;

  ngOnInit() {
  }

  onMouseClick(event: MouseEvent) {
    this.numberOfRipples++;
    this.clickedArr.push(this.numberOfRipples);
    this.setRippleLocation(event);
    setTimeout(() => { this.clickedArr.shift(); }, 1000);
  }

  setRippleLocation(event: MouseEvent) {
    this.animationLeftDistance = event.clientX - this.rippleCenter;
    this.animationTopDistance = event.clientY - this.rippleCenter - this.container.nativeElement.offsetTop;
  }
}
