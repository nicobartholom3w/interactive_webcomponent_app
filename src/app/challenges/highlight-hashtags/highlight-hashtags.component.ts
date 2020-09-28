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
    let textHighlights: string = this.userInput;
    textHighlights = textHighlights.replace(new RegExp(/\n$/g), 
      (isReturn) => {
      return '\n\n';
    });
    // this.userInput = this.userInput.replace(new RegExp(/[\r\n]$/), '<br>');
    textHighlights = textHighlights.replace(new RegExp(/#[A-Za-z0-9]*/g), 
      (match) => {
        return '<span class="highlight">' + match + '</span>';
    });
    return textHighlights;
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

  // isReturn(event: KeyboardEvent) {
  //   event.stopPropagation();
  //   if(event.key === "return") {
  //     this.scrollEvent(event);
  //   }
  // }
}

