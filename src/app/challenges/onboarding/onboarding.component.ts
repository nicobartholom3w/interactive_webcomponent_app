import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  onboardingActiveArr: boolean[] = [true, false, false, false];
  overlayActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onboarding(num: number) {
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
