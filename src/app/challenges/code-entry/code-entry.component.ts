import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-code-entry',
  templateUrl: './code-entry.component.html',
  styleUrls: ['./code-entry.component.scss']
})
export class CodeEntryComponent implements OnInit {
  isActive: boolean[] = [true, false, false, false, false, false];
  @ViewChildren ('input') inputs: QueryList<ElementRef>;

  constructor() { }
  // constructor(public el: ElementRef) { }
  ngOnInit() {
  }
  
  onKey(event: any, i: number) {
    if(event.target.value) {
      this.isActive[i + 1] = true;
      let inputsArr = this.inputs.toArray();
      let inputsArrFocus = inputsArr[i + 1];
      setTimeout(()=> inputsArrFocus.nativeElement.focus(), 0);
    }
    // if delete move back to prev input
  }

  onSubmit() {

  }
}
