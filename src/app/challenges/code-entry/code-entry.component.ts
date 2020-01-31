import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-code-entry',
  templateUrl: './code-entry.component.html',
  styleUrls: ['./code-entry.component.scss']
})
export class CodeEntryComponent implements OnInit {
  isActive: boolean[] = [true, false, false, false, false, false];
  result: string[] = [];
  @ViewChildren ('input') inputs: QueryList<ElementRef>;

  constructor() { }
  ngOnInit() {}
  
  onKey(event: any, i: number) {
    let inputsArr = this.inputs.toArray();
    let inputsArrFocus: ElementRef;
    if(event.target.value && i !== inputsArr.length - 1) {
      this.isActive[i] = false;
      this.isActive[i + 1] = true;
      
      inputsArrFocus = inputsArr[i + 1];
    }
    // if delete move back to prev input
    if(event.key === 'Backspace' && i !== 0) {
      this.isActive[i - 1] = true;
      this.isActive[i] = false;
      inputsArrFocus = inputsArr[i - 1];
      let inputsDeleted = inputsArr[i];
      inputsDeleted.nativeElement.value = "";
      setTimeout(()=> inputsArrFocus.nativeElement.value = "", 0);  
    }
    setTimeout(()=> inputsArrFocus.nativeElement.focus(), 0);
  }

  selectActiveInput() {
    let inputsArr = this.inputs.toArray();
    for(let i = 0; i < this.isActive.length; i++) {
      if(this.isActive[i]) {
        inputsArr[i].nativeElement.focus();
      }
    }
  }

  
  onSubmit(form) {
  let inputsArr = this.inputs.toArray();
  let current;
  for(let i = 0; i < this.isActive.length; i++) {
    current = inputsArr[i];
    if(current.nativeElement.value !== '') {
      this.result.push(current.nativeElement.value);
    }
  }
  alert(`Value is ${this.result.join('')}`);
  this.result = [];
  }
}
