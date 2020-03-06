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
    { name: 'Side Menu', imagePath: 'assets/images/challenges_imgs/side-menu.png', link: 'side-menu' },
    { name: 'Sticky', imagePath: 'assets/images/challenges_imgs/sticky.png', link: 'sticky' },
    { name: 'Draggable Card', imagePath: 'assets/images/challenges_imgs/draggable-card.png', link: 'draggable-card' },
    { name: 'Code Entry', imagePath: 'assets/images/challenges_imgs/code-entry.png', link: 'code-entry' },
    { name: 'Multi-Select', imagePath: 'assets/images/challenges_imgs/multi-select.png', link: 'multi-select' },
    { name: 'Card Slider', imagePath: 'assets/images/challenges_imgs/card-slider.png', link: 'card-slider' },
    { name: 'Validation Form', imagePath: 'assets/images/challenges_imgs/validation-form.png', link: 'validation-form' },
    { name: 'Color Picker', imagePath: 'assets/images/challenges_imgs/color-picker.png', link: 'color-picker' },
    { name: 'Boiling Timers', imagePath: 'assets/images/challenges_imgs/boiling-timers.png', link: 'boiling-timers' },
    { name: 'Custom Scroll', imagePath: 'assets/images/challenges_imgs/custom-scroll.png', link: 'custom-scroll' },
    { name: 'Video Player', imagePath: 'assets/images/challenges_imgs/video-player.png', link: 'video-player' },
    { name: 'Input Slider', imagePath: 'assets/images/challenges_imgs/input-slider.png', link: 'input-slider' },
    { name: 'Accordion', imagePath: 'assets/images/challenges_imgs/accordion.png', link: 'accordion' },
    { name: 'To-do Local Storage', imagePath: 'assets/images/challenges_imgs/todo-local-storage.png', link: 'todo-local-storage' },
    { name: 'Dot Container', imagePath: 'assets/images/challenges_imgs/dot-container.png', link: 'dot-container' }
    
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
