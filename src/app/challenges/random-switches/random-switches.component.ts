import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-switches',
  templateUrl: './random-switches.component.html',
  styleUrls: ['./random-switches.component.scss']
})
export class RandomSwitchesComponent implements OnInit {
  switchStatusArr: boolean[] = [false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  onSwitch() {
    let randomNum: number;
    for(let i = 0; i < this.switchStatusArr.length; i++){
      randomNum = Math.random();
      if(randomNum >= 0.6) {
        this.switchStatusArr[i] = !this.switchStatusArr[i];
      }
    }
  }
}
