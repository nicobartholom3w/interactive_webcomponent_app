import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-dot-container',
  templateUrl: './dot-container.component.html',
  styleUrls: ['./dot-container.component.scss']
})
export class DotContainerComponent implements OnInit {
  @ViewChild('card', {static: false}) card: ElementRef;
  @ViewChild('dot', {static: false}) dot: ElementRef;
  @HostListener('document:keydown', ['$event'])
    onDomEvent(event: any) {
      this.moveDot(event);
    }
  move: number = 3;
  dotOffsetTop: number;
  dotOffsetLeft: number;

  constructor() { }

  ngOnInit() {
  }

  moveDot(event: any) {
    if(this.dot) {
      this.dotOffsetTop = this.dot.nativeElement.offsetTop;
      this.dotOffsetLeft = this.dot.nativeElement.offsetLeft;
    }
    switch(event.key) {
      case 'ArrowUp': 
        this.dotOffsetTop -= this.move;
        this.dot.nativeElement.style.top = `${this.dotOffsetTop}px`;
        break;
      case 'ArrowDown':
        this.dotOffsetTop += this.move;
        this.dot.nativeElement.style.top = `${this.dotOffsetTop}px`;
        break;
      case 'ArrowLeft':
        this.dotOffsetLeft -= this.move;
        this.dot.nativeElement.style.left = `${this.dotOffsetLeft}px`;
        break;
        case 'ArrowRight':
          this.dotOffsetLeft += this.move;
          this.dot.nativeElement.style.left = `${this.dotOffsetLeft}px`;
          break;
      }
  }
} 
