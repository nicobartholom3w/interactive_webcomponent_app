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

  constructor() { }

  ngOnInit() {
  }

  onSelectOption(o: Option) {

  }
  
  onSubmit(f: NgForm) {

  }
}
