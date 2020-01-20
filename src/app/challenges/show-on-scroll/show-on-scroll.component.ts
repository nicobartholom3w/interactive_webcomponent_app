import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-on-scroll',
  templateUrl: './show-on-scroll.component.html',
  styleUrls: ['./show-on-scroll.component.scss']
})
export class ShowOnScrollComponent implements OnInit {
  isHiddenArr: boolean[] = [false, true, true, true, true];
  @ViewChild('element', {static: false}) element: ElementRef;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    // const componentPosition = this.el.nativeElement.offsetTop;
    // const scrollPosition = window.pageYOffset;

    for(let boolean of this.isHiddenArr) {
      
    }
  }

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

}
