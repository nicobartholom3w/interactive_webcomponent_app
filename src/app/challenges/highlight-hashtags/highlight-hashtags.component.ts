import { Component, OnInit } from '@angular/core';
import { WordCheckHighlight } from './highlight-hashtags';

@Component({
  selector: 'app-highlight-hashtags',
  templateUrl: './highlight-hashtags.component.html',
  styleUrls: ['./highlight-hashtags.component.scss']
})
export class HighlightHashtagsComponent implements OnInit {
  // inputArr: WordCheckHighlight[] = [];
  // isHash: boolean = false;
  private highlightedText: string;
  userInput: string;

  constructor() { }

  ngOnInit() {
  }

  isHighlight(fullText: string) {
    // this.highlightText = '<div>fullText</div>';
  }

  highlightText() {
    if(!this.userInput) {
      return this.highlightedText;
    }
    return this.userInput.replace(new RegExp(/#[A-Za-z0-9]*/g), 
      (match) => {
        console.log(match);
        return '<span class="highlight">' + match + '</span>';
    });
    
  }
}

