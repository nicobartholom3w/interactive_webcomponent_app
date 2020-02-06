import { Component, OnInit, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @ViewChildren('block') blockRefs: QueryList <ElementRef>;
  @ViewChild('blockContainer', {static: false}) blockContainer: ElementRef;
  @ViewChild('container', {static: false}) container: ElementRef;
  isFarLeftBlock: boolean[] = [true, false, false, false, false, false, false];
  hideLeftButton: boolean = true;
  hideRightButton: boolean = false;
  moveNum: number = 0;
  marginPx: number = 8;
  

  constructor() { }

  ngOnInit() {
  }

  scroll(direction: string) {
    let blockRefsArr = this.blockRefs.toArray();
    let currentBlockRef: ElementRef;
    let previousBlockRef: ElementRef;
    
    for(let i = 0; i < this.isFarLeftBlock.length; i++) {
      if(this.isFarLeftBlock[i]) { 
        currentBlockRef = blockRefsArr[i];
        previousBlockRef = blockRefsArr[i - 1]
        if(direction === 'right') {
          if(i < 3) {
            this.isFarLeftBlock[i] = false;
            this.isFarLeftBlock[i + 1] = true;
            this.moveNum -= currentBlockRef.nativeElement.clientWidth + this.marginPx;
            this.hideLeftButton = false;
          }
          else {
            this.hideRightButton = true;
            let containerSizeDiff: number = this.blockContainer.nativeElement.clientWidth - this.container.nativeElement.clientWidth;
            containerSizeDiff += this.moveNum;
            this.moveNum -= containerSizeDiff;
          }
        }
        else if(direction === 'left') {
          if(i !== 0) {
            this.isFarLeftBlock[i] = false;
            this.isFarLeftBlock[i - 1] = true;
            this.moveNum += previousBlockRef.nativeElement.clientWidth + this.marginPx;
            this.hideRightButton = false;
          }
          if(this.isFarLeftBlock[0]) {
            this.hideLeftButton = true;
          }
        }
        break;
      } 
    }
    this.blockContainer.nativeElement.style.transform = `translateX(${this.moveNum}px)`;
  }



}
