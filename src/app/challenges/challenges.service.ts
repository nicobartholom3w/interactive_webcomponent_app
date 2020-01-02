import { Injectable } from '@angular/core';
import { ChallengeModule } from './challenge/challenge.module';

@Injectable({
  providedIn: 'root'
})

export class ChallengesService {
  challengesArr: ChallengeModule [] = [
    new ChallengeModule('Static Radio Buttons', 'assets/images/challenges_imgs/static_radio_buttons.png', 'challenges/static-radio-buttons'),
    new ChallengeModule('Number 2', 'assets/images/challenges_imgs/static_radio_buttons.png', 'challenges/static-radio-buttons'),
  ]
  constructor() { }

  getChallengesArr() {
    return this.challengesArr.slice();
  }
}
