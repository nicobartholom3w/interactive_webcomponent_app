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
    {index: 1, name: "Choose title", active: true, current: true},
    {index: 2, name: "Choose description", active: false, current: false},
    {index: 3, name: "Confirm data", active: false, current: false}
  ]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

  }
}
