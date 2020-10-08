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
      let imageRect = this.image.nativeElement.getBoundingClientRect();
      this.cursorLeftDistance = event.clientX - this.lensRadiusPx;
      this.cursorTopDistance = event.clientY - this.lensRadiusPx - this.container.nativeElement.offsetTop;
      if(this.cursorTopDistance - this.lensRadiusPx < imageRect.top - this.imageMarginTopPx ||
        this.cursorTopDistance - this.lensRadiusPx > imageRect.top - this.imageMarginTopPx + this.image.nativeElement.height ||
        this.cursorLeftDistance + this.lensRadiusPx < imageRect.left ||
        this.cursorLeftDistance + this.lensRadiusPx > imageRect.left + this.image.nativeElement.width
        ) {
        this.isZoom = false;
      }
      else {
        this.isZoom = true;
      }
    }
  isZoom: boolean = false;
  imgSrc: string = "assets/images/image-zoom-use/image-zoom.jpg";
  cursorLeftDistance: number;
  cursorTopDistance: number;
  lensDiameterPx: number = 32;
  lensRadiusPx: number = this.lensDiameterPx/2;
  imageMarginTopPx: number = 128;
  constructor() { }

  ngOnInit() {
  }

}
