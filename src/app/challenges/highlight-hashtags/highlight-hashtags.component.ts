import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { WordCheckHighlight } from './highlight-hashtags';

@Component({
  selector: 'app-highlight-hashtags',
  templateUrl: './highlight-hashtags.component.html',
  styleUrls: ['./highlight-hashtags.component.scss']
})
export class HighlightHashtagsComponent implements OnInit {
  @ViewChild('input', {static: false}) inputScroll: ElementRef;
  @ViewChild('backgroundScroll', {static: false}) highlightScroll: ElementRef;
  private highlightedText: string;
  userInput: string;

  // @HostListener ('window:scroll', ['$event']) 
  //   onScrollEvent(event: Event) {
      // if(!this.inputScroll || !this.highlightScroll) {
      //   return;
      // }
      // if(event === "") {
      //   let scroll = this.inputScroll.nativeElement.scrollTop;
      //   console.log(scroll + "textarea scroll   " + this.highlightScroll.nativeElement.scrollTop + " background scroll");
      //   this.highlightScroll.nativeElement.scrollTop = scroll;
      // }
  //     console.log(event);
  //  }
  constructor() { }

  ngOnInit() {
  }

  highlightText() {
    if(!this.userInput) {
      return this.highlightedText;
    }
    return this.userInput.replace(new RegExp(/#[A-Za-z0-9]*/g), 
      (match) => {
        return '<span class="highlight">' + match + '</span>';
    });
  }

  scrollEvent(event: Event) {
    // if(!this.inputScroll || !this.highlightScroll) {
    //   return;
    // }
    event.stopPropagation();
    let scroll = this.inputScroll.nativeElement.scrollTop;
    console.log(scroll + "start scroll   " + this.highlightScroll.nativeElement.scrollTop + " background scroll");
    this.highlightScroll.nativeElement.scrollTop = scroll;
    console.log(scroll + "end scroll   " + this.highlightScroll.nativeElement.scrollTop + " background scroll");
  }
}

