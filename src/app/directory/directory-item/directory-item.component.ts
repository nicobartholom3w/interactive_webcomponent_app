import { Component, OnInit, Input } from '@angular/core';
import { ChallengesService } from 'src/app/challenges/challenges.service';
import { Challenge } from 'src/app/challenges/challenge/challenge.interface';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {
  @Input() challengeItem: Challenge;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
  }

}
