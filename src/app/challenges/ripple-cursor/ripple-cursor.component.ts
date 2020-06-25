import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ripple-cursor',
  templateUrl: './ripple-cursor.component.html',
  styleUrls: ['./ripple-cursor.component.scss']
})
export class RippleCursorComponent implements OnInit {
  @ViewChild('container', {static: false}) container: ElementRef;
  @ViewChild('cursor', {static: false}) cursor: ElementRef;
  @ViewChild('ripple', {static: false}) ripple: ElementRef;
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: any) {
      e.stopPropagation();
      this.cursorLeftDistance = e.clientX - this.cursorCenter;
      this.cursorTopDistance = e.clientY - this.cursorCenter - this.container.nativeElement.offsetTop;
      if(this.clickedArr.length > 0) {
        this.setRippleLocation(e);
      }
    }
  cursorLeftDistance: number;
  cursorTopDistance: number;
  animationLeftDistance: number;
  animationTopDistance: number;
  rippleCenter: number = 16;
  cursorCenter: number = 4;
  clickedArr: number[] = [];
  numberOfRipples: number = 0;
  constructor(elementRef: ElementRef) { }

  ngOnInit() {
  }

  onMouseClick(e: any) {
    this.numberOfRipples++;
    this.clickedArr.push(this.numberOfRipples);
    this.setRippleLocation(e);
    setTimeout(() => { this.clickedArr.shift(); }, 1000);
  }

  setRippleLocation(e: any) {
    this.animationLeftDistance = e.clientX - this.rippleCenter;
    this.animationTopDistance = e.clientY - this.rippleCenter - this.container.nativeElement.offsetTop;
  }
}
