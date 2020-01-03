import { Injectable } from '@angular/core';
import { ChallengeModule } from './challenge/challenge.module';
import { ChallengesModule } from './challenges.module';
import { Subject, BehaviorSubject } from 'rxjs';
import { Challenge } from './challenge/challenge.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  selectedChallenge = new BehaviorSubject<Challenge>({ name: '', imagePath: '', link: '' });

  challengesArr: Challenge[] = [
    { name: 'Static Radio Buttons', imagePath: 'assets/images/challenges_imgs/static_radio_buttons.png', link: 'challenges/static-radio-buttons' },
    { name: 'Tab Index Navigation', imagePath: 'assets/images/challenges_imgs/static_radio_buttons.png', link: 'challenges/tab-index-navigation' },
    
  ]

  constructor() { }

  getChallengesArr() {
    return this.challengesArr.slice();
  }

  onChallengeSelected(challenge: Challenge) {
    this.selectedChallenge.next(challenge);
  }

  getSelectedChallenge() {

  }

}
