import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent implements OnInit {
  @ViewChild('image', {static: false}) image: ElementRef;
  @ViewChild('zoomView', {static: false}) zoomView: ElementRef;
  @ViewChild('zoomLens', {static: false}) zoomLens: ElementRef;
  @ViewChild('container', {static: false}) container: ElementRef;
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      event.stopPropagation();
      this.imageRect = this.image.nativeElement.getBoundingClientRect();
      this.imageRectTop = this.imageRect.top;
      this.imageRectBottom = this.imageRect.bottom;
      
      this.cursorLeftDistance = event.clientX - this.imageRect.left - this.lensRadiusPx;
      this.cursorTopDistance = event.clientY - this.imageRect.top - this.lensRadiusPx;
      // if(this.cursorTopDistance - this.lensRadiusPx < this.imageRect.top - this.imageMarginTopPx ||
      //   this.cursorTopDistance - this.lensRadiusPx > this.imageRect.top - this.imageMarginTopPx + this.image.nativeElement.height ||
      //   this.cursorLeftDistance + this.lensRadiusPx < this.imageRect.left ||
      //   this.cursorLeftDistance + this.lensRadiusPx > this.imageRect.left + this.image.nativeElement.width
      //   ) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      if((event.clientX > this.imageRect.left && event.clientX < this.imageRect.right) &&
         (event.clientY > this.imageRect.top && event.clientY < this.imageRect.bottom)) {
        this.isZoom = true;
        this.displayZoom(event);
      }
      else {
        this.isZoom = false;
      }
    }
  isZoom: boolean = false;
  imgSrc: string = "assets/images/image-zoom-use/image-zoom.jpg";
  cursorLeftDistance: number;
  cursorTopDistance: number;
  lensDiameterPx: number = 32;
  lensRadiusPx: number = this.lensDiameterPx/2;
  imageWidthRatioSize: string;
  imageMarginTopPx: number = 128;
  zoomViewInfo: string;
  ratioX: number;
  ratioY: number;
  zoomTop: number;
  zoomLeft: number;
  imageRect: ClientRect;
  imageRectTop: number;
  imageRectBottom: number;
  mouseY: number;
  mouseX: number;
  constructor() { }

  ngOnInit() {
  }

  displayZoom(event: MouseEvent) {
    // console.log(this.zoomLens.nativeElement.offsetTop);
    this.ratioX = this.zoomView.nativeElement.offsetWidth / (this.zoomLens.nativeElement.offsetWidth);
    this.ratioY = (this.zoomView.nativeElement.offsetHeight) / (this.zoomLens.nativeElement.offsetHeight);
    this.imageWidthRatioSize = (this.image.nativeElement.width * this.ratioX) + "px " + (this.image.nativeElement.height * this.ratioY) + "px";
    // let zoomTop: number = -(this.zoomLens.nativeElement.offsetTop - this.imageMarginTopPx - this.lensRadiusPx);
    // let zoomLeft: number = -(this.zoomLens.nativeElement.offsetLeft - this.image.nativeElement.width);
    // ratioY = 3.5;
    this.zoomTop = -((this.cursorTopDistance) * this.ratioY);
    this.zoomLeft = -((this.cursorLeftDistance) * this.ratioX);
    
    this.zoomViewInfo = "left " + this.zoomLeft + "px " + "top " + this.zoomTop + "px";
    // this.zoomViewInfo = "top 100px left 100px";
    console.log(this.zoomViewInfo);
    console.log(this.zoomLens.nativeElement.getBoundingClientRect().top - this.imageMarginTopPx);
  }
}
