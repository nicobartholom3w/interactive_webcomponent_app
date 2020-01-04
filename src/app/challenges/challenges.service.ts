import { Injectable } from '@angular/core';
import { ChallengesModule } from './challenges.module';
import { Subject, BehaviorSubject } from 'rxjs';
import { Challenge } from './challenge/challenge.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  selectedChallenge = new BehaviorSubject<Challenge>({ name: '', imagePath: '', link: '' });


  challengesArr: Challenge[] = [
    { name: 'Static Radio Buttons', imagePath: 'assets/images/challenges_imgs/static_radio_buttons.png', link: 'static-radio-buttons' },
    { name: 'Tab Index Navigation', imagePath: 'assets/images/challenges_imgs/static_radio_buttons.png', link: 'tab-index-navigation' },
    
  ]

  constructor(private route: ActivatedRoute) { 

    this.route.queryParamMap.subscribe( (queryParams: ParamMap) => {
      let routeName = queryParams.get('challenge');
      let currentChallenge = this.challengesArr.find((challenge: Challenge) => {
        return challenge.link === routeName;
      });
      this.selectedChallenge.next(currentChallenge);
    });
    
  }

  getChallengesArr() {
    return this.challengesArr.slice();
  }

}
