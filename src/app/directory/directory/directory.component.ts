import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/challenges/challenge/challenge.interface';
import { ChallengesService } from 'src/app/challenges/challenges.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {
  challengesArr: Challenge[];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.challengesArr = this.challengesService.getChallengesArr();
  }


}
