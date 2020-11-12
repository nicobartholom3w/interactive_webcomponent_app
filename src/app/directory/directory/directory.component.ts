import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Challenge } from 'src/app/challenges/challenge/challenge.interface';
import { ChallengesService } from 'src/app/challenges/challenges.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit, AfterViewInit {
  @ViewChildren('challengeItem', { read: ElementRef }) challenges: QueryList<ElementRef>;
  @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
      // this.challenges.forEach((challengeItem) => this.isHidden(challengeItem));
      this.isHidden();
    }
  challengesArr: Challenge[];
  isChallengeHidden: boolean = false;
  isChallengeHiddenArr: boolean[] = [];
  isChallengeHiddenArrLength: number;
  challengesRefArr: ElementRef[];
  numDisplayed: number = 0;
  constructor(private challengesService: ChallengesService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.challengesArr = this.challengesService.getChallengesArr();
  }

  ngAfterViewInit() {
    this.isChallengeHiddenArrLength = this.challenges.length;
    // this.challenges.forEach((challengeItem) => this.isHidden(challengeItem));
    this.challengesRefArr = this.challenges.toArray();
    for(let k = 0; k < this.challengesRefArr.length; k++) {
      this.isChallengeHiddenArr[k] = true;
    }
    this.isHidden();
    this.changeRef.detectChanges();
  }

  isHidden() {
    
    for(let i = 0; i < this.challengesRefArr.length; i++) {
      if(this.challengesRefArr[i]) {
        let currentChallenge = this.challengesRefArr[i];  
        let challengePosition: ClientRect = currentChallenge.nativeElement.getBoundingClientRect();  
      
        if((window.innerHeight - challengePosition.top) > 150) {
          // this.isChallengeHidden = true;
          this.isChallengeHidden = false;
          this.isChallengeHiddenArr[i] = this.isChallengeHidden;
        }
      }
    }
    this.numDisplayed = 0;
    for(let boolean of this.isChallengeHiddenArr) {
      if(boolean === false) {
        this.numDisplayed++;
      }
    }
  }

}
