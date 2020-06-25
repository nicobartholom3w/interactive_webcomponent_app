import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  onboardingActiveArr: boolean[] = [true, false, false, false];
  shapes: {}[] = [
    { class: 'rectangle rectangle__green', index: 1 },
    { class: 'rectangle rectangle__blue', index: 2 },
    { class: 'circle circle__red', index: 3 }
  ]
  overlayActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onboarding(num: number) {
    // changeActions[num]();
    switch(num) {
      case 0: 
        this.overlayActive = true;
      case 1:
      case 2:
        this.onboardingActiveArr[num] = false;
        this.onboardingActiveArr[num + 1] = true;
        break;
      case 3:
        this.onboardingActiveArr[num] = false;
        this.onboardingActiveArr[0] = true;
        this.overlayActive = false;
    }
  }
}

// const changeActions = Array.from([...1000]).reduce((actions, num) => {
//   actions[num] = () => makeChange(num);
//   return actions;
// },{});

// const changeActions = {
//   0: () => makeChange(0),
//   1: () => makeChange(1),
//   2: () => makeChange(2)
// }

// function makeChange(activeIndex) {
//   this.onboardingActiveArr[activeIndex-1] = false;
//   this.onboardingActiveArr[activeIndex] = true;
//   if (activeIndex === 0) {
//     this.overlayActive = true;
//   }
//   if (activeIndex === this.onboardingActiveArr.length - 1) {
//     this.overlayActive = false;
//   }
// }