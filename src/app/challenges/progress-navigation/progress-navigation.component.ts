import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Option } from './option';

@Component({
  selector: 'app-progress-navigation',
  templateUrl: './progress-navigation.component.html',
  styleUrls: ['./progress-navigation.component.scss']
})
export class ProgressNavigationComponent implements OnInit {
  optionsArr: Option[] = [
    {index: 1, name: "Choose title", title: "Choose title content", buttons: ["Submit title"], active: true, current: true},
    {index: 2, name: "Choose description", title: "Choose description content", buttons: ["Back", "Submit description"], active: false, current: false},
    {index: 3, name: "Confirm data", title: "Are you happy now?", buttons: ["No, go back", "Yes, go ahead"], active: false, current: false}
  ]
  currentOption: Option = this.optionsArr[0];
  theEnd: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSelectOption(clickedOpt: Option) {
    let previousOption = this.optionsArr[clickedOpt.index - 2];
    let nextOption: Option = this.optionsArr[clickedOpt.index];
    this.theEnd = false;
      if(clickedOpt.index === 1) {
        this.currentOption = clickedOpt;
        for(let i = 1; i <= this.optionsArr.length; i++) {
          let otherOption = this.optionsArr[i];
          otherOption.active = false;
          otherOption.current = false;
        }
        return;
      }
      else if(clickedOpt.index === this.optionsArr.length) {
        if(previousOption.active === true) {
          clickedOpt.active = true;
          clickedOpt.current = true;
          previousOption.current = false;
          this.currentOption = clickedOpt;
        }
      }
      else {
        if(nextOption.current === true) {
          nextOption.current = false;
          nextOption.active = false;
        }
        clickedOpt.active = true;
        clickedOpt.current = true;
        this.currentOption = clickedOpt;
      }
      
  }

  onButtonClick(btn: number){
    let previousOption = this.optionsArr[this.currentOption.index - 2];
    let nextOption: Option = this.optionsArr[this.currentOption.index];
    if(this.currentOption.buttons.length === 1) {
      nextOption.active = true;
      nextOption.current = true;
      this.currentOption = nextOption;
    }
    else {
      if(btn === 0) {
        previousOption.current = true;
        this.currentOption.active = false;
        this.currentOption.current = false;
        this.currentOption = previousOption;
      }
      else {
        if(this.currentOption.index === this.optionsArr.length){
          this.theEnd = true;
          return;
        }
        nextOption.current = true;
        nextOption.active = true;
        this.currentOption.current = false;
        this.currentOption = nextOption;
      }
    }   
  }

  onSubmit(f: NgForm) {

  }
}
