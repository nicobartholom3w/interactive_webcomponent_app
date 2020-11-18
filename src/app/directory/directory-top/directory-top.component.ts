import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-directory-top',
  templateUrl: './directory-top.component.html',
  styleUrls: ['./directory-top.component.scss']
})
export class DirectoryTopComponent implements OnInit {
  @Input() challengesLoaded: number;
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
      if(window.pageYOffset > 50 || document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        this.windowScrolled = true;
      }
      else if(this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
  windowScrolled: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    (function smoothScroll() {
      let currScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if(currScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currScroll - (currScroll / 8));
      }
    })();
  }
}
