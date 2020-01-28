import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-draggable-card',
  templateUrl: './draggable-card.component.html',
  styleUrls: ['./draggable-card.component.scss']
})
export class DraggableCardComponent implements OnInit {
  @ViewChild('card', {static: false}) card: ElementRef;
  @ViewChild('container', {static: false}) container: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:mouseup', ['$event'])
    onDomEvent(e: any) {
      e.stopPropagation();
      if(e.type === 'mouseup') {
        this.isCardSelected = false;
      }
      else if(e.type === 'mousemove') {
        this.onMoveCard(e);
      }
    }
  headerHeight: number = 96;
  isCardSelected: boolean = false;
  wait: number = 0;
  initX: number;
  initY: number;
  currentX: number;
  currentY: number;
  initTop: number;
  initLeft: number;
  constructor() { }

  ngOnInit() {}

  onMouseDown(e: any) {
    e.stopPropagation();
    console.log("click");
    this.isCardSelected = true;
    this.initX = e.clientX;
    this.initY = e.clientY;
    this.initTop = this.card.nativeElement.getBoundingClientRect().top; 
    this.initLeft = this.card.nativeElement.getBoundingClientRect().left;
    // console.log('initX', this.initX, 'initY', this.initY, 'initTop', this.initTop, 'initLeft', this.initLeft);
  }

  onMoveCard(e: any) {
    e.stopPropagation();
    if(this.isCardSelected === true && this.currentX !== e.clientX && this.currentY !== e.clientY) {
      this.currentX = e.clientX;
      this.currentY = e.clientY;
      let moveX = this.currentX - this.initX;
      let moveY =  this.currentY - this.initY;
      this.card.nativeElement.style.top =  (this.initTop + moveY - this.headerHeight) + 'px';
      this.card.nativeElement.style.left = (this.initLeft + moveX) + 'px';
      // console.log('curX', currentX, 'curY', currentY, 'distMovedX', moveX, 'distMovedY', moveY, 'newTop', (this.initTop - moveY) + 'px', 'newLeft', (this.initLeft + moveX) + 'px')
    }
  }
}