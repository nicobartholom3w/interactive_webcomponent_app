import { Component, OnInit, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @ViewChildren('block') blockRefs: QueryList <ElementRef>;
  @ViewChild('blockContainer', {static: false}) blockContainer: ElementRef;
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
          if(i !== 4) {
            this.isFarLeftBlock[i] = false;
            this.isFarLeftBlock[i + 1] = true;
            this.moveNum -= currentBlockRef.nativeElement.clientWidth + this.marginPx;
            this.hideLeftButton = false;
          }
          if(this.isFarLeftBlock[4]) {
            this.hideRightButton = true;
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
    // this.blockContainer.nativeElement.style.transform = "translate(-64)";

    // move blockContainer based off of block width & margin
    // update current visible left block
    // if isFarLeftBlock[0] === true leftbutton is hidden if isFarLeftBlock[6] === true rightbutton is hidden
  }



}
