import { Component, OnInit, Input } from '@angular/core';
import { ChallengeModule } from 'src/app/challenges/challenge/challenge.module';
import { ChallengesService } from 'src/app/challenges/challenges.service';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {
  @Input() challengeItem: ChallengeModule;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
  }

}
