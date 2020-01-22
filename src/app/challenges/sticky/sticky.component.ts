import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {
  isSticky: boolean = false;
  @ViewChild('small', {static: false}) small: ElementRef;
  @HostListener('document:scroll', ['$event'])
  onScroll(){
    let smallTop = this.small.nativeElement.getBoundingClientRect().top;
    if((smallTop - window.pageYOffset) <= window.pageYOffset){
      this.isSticky = true;
    }
    else {
      this.isSticky = false;
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
