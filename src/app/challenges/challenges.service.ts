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
    { name: 'Tab Index Navigation', imagePath: 'assets/images/challenges_imgs/tab_index_navigation.png', link: 'tab-index-navigation' },
    { name: 'Random Switches', imagePath: 'assets/images/challenges_imgs/random-switches.png', link: 'random-switches' },
    { name: 'Progress Navigation', imagePath: 'assets/images/challenges_imgs/progress-navigation.png', link: 'progress-navigation' },
    { name: 'Auto Type', imagePath: 'assets/images/challenges_imgs/auto-type.png', link: 'auto-type' },
    { name: '3D Card', imagePath: 'assets/images/challenges_imgs/3d-card.png', link: '3d-card' },
    { name: 'Show On Scroll', imagePath: 'assets/images/challenges_imgs/show-on-scroll.png', link: 'show-on-scroll' },
    { name: 'Side Menu', imagePath: 'assets/images/challenges_imgs/side-menu.png', link: 'side-menu' }
    
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
