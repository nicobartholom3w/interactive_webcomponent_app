import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-type',
  templateUrl: './auto-type.component.html',
  styleUrls: ['./auto-type.component.scss']
})
export class AutoTypeComponent implements OnInit {
  changingTextArr: string[] = ["design", "frontend", "backend", "testing"];
  changingTextDisplay: string = "";
  wordCount: number = 0;
  letterCount: number = 0;
  currentWord: string;

  constructor() { }

  ngOnInit() {
    this.typingDisplay();
  }

  typingDisplay() {
    if(this.wordCount >= this.changingTextArr.length) {
      setTimeout(() => { return this.wordCount = 0;}, 1000);
    }
    this.currentWord = this.changingTextArr[this.wordCount];
    this.changingTextDisplay += this.currentWord[this.letterCount];
    this.letterCount++;
    if(this.letterCount > this.currentWord.length){
      this.wordCount++;
      this.letterCount = 0;
      this.changingTextDisplay = "";
    }
    
    // setTimeout(this.typingDisplay.bind(this), 1000);
    setTimeout(() => { return this.typingDisplay()}, 500);
  }
  
}
