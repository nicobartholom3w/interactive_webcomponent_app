import { Component, OnInit } from '@angular/core';
import { ChallengesService } from 'src/app/challenges/challenges.service';
import { ChallengeModule } from 'src/app/challenges/challenge/challenge.module';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  challengesArr: ChallengeModule [];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.challengesArr = this.challengesService.getChallengesArr();
  }

}
