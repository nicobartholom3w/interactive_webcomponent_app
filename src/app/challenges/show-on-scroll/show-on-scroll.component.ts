import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-show-on-scroll',
  templateUrl: './show-on-scroll.component.html',
  styleUrls: ['./show-on-scroll.component.scss']
})
export class ShowOnScrollComponent implements OnInit, AfterViewInit {
  isHiddenArr: string[] = ['', '', '', '', '', '', ''];
  elementPosition: any;
  @ViewChildren ('element') elements: QueryList<ElementRef>;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.elements.forEach((e) => this.isHidden(e));
  }

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.elements.forEach((e) => this.isHidden(e));
  }

  isHidden(el: ElementRef) {
    if(el){
      this.elementPosition = el.nativeElement.getBoundingClientRect();
      if((window.innerHeight - this.elementPosition.top) > 0) {
        el.nativeElement.classList.remove('hidden');
      }
    }
  }
}
