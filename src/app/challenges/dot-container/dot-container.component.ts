import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
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
  @HostListener('document:keyup', ['$event'])
    onDomEvent(event: any) {
      if(event.type === 'keydown') {
        this.keyDown = true;
        this.moveDot(event);
      }
      else {
        this.keyDown = false;
      }
      
    }
  move: number = 1;
  dotOffsetTop: number;
  dotOffsetLeft: number;
  width: number;
  keyDown: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  moveDot(event: any) {
    if(this.dot) {
      this.dotOffsetTop = this.dot.nativeElement.offsetTop;
      this.dotOffsetLeft = this.dot.nativeElement.offsetLeft;
      this.width = this.card.nativeElement.clientWidth - this.dot.nativeElement.clientWidth;
    }
    switch(event.key) {
      case 'ArrowUp': 
        this.moveUp();
        break;
      case 'ArrowDown':
        this.moveDown();
        break;
      case 'ArrowLeft':
        this.moveLeft();
        break;
      case 'ArrowRight':
        this.moveRight();
        break;
      }
  }

  moveLeft() {
    if(this.dotOffsetLeft > 0 && this.keyDown) {
      this.dotOffsetLeft -= this.move;
      this.dot.nativeElement.style.left = `${this.dotOffsetLeft}px`;
      requestAnimationFrame(() => this.moveLeft());
    }
  }
  moveRight() {
    if(this.dotOffsetLeft < this.width && this.keyDown) {
      this.dotOffsetLeft += this.move;
      this.dot.nativeElement.style.left = `${this.dotOffsetLeft}px`;
      requestAnimationFrame(() => this.moveRight());
    }
  }
  moveUp() {
    if(this.dotOffsetTop > 0 && this.keyDown) {
      this.dotOffsetTop -= this.move;
      this.dot.nativeElement.style.top = `${this.dotOffsetTop}px`;
      requestAnimationFrame(() => this.moveUp());
    }
  }
  moveDown() {
    if(this.dotOffsetTop < this.width && this.keyDown) {
      this.dotOffsetTop += this.move;
      this.dot.nativeElement.style.top = `${this.dotOffsetTop}px`;
      requestAnimationFrame(() => this.moveDown());
    }
  }
} 
