import { Component, OnInit, Input } from '@angular/core';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenge/challenge.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

challengeInfo: Challenge = { name: '', imagePath: '', link: '' };
challengeArr: Challenge[] = this.challengesService.getChallengesArr();

  constructor(private challengesService: ChallengesService,
              private activeRoute: ActivatedRoute) {
    // this.challengesService.selectedChallenge
    //   .subscribe(
    //     (currentChallenge: Challenge) => {
    //       this.challengeInfo = currentChallenge;
    //     }
    //   )
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.challengeInfo = this.challengeArr[Number(params.get('link'))];
    })
  }

}
