import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Challenge } from '../challenges/challenge/challenge.interface';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() challengeItem: Challenge;
  @Input() isHeaderOverlayActive: boolean;
  @Input() isFocus: boolean;
  @Output() isOverlayActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('input', {static: false}) input: ElementRef;
  
  searchText: string;
  searchResults: Challenge[] = [];
  searchTextUpdate = new Subject <string> (); 
  isMatches: boolean = false;
  isChallengeSelected: boolean = false;
  allResults: Challenge[] = [];

  constructor(private headerService: HeaderService) {
    this.searchTextUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
        .subscribe(value => {
          const searchText = this.searchText.toLowerCase();
          this.getSearchResults(searchText);
          
          if(searchText.length === 0) {
            this.searchResults = this.allResults;
          }
        })
   }

  ngOnInit() {
    this.allResults = this.headerService.getChallengeArr();
    this.allResults.forEach((challenge) => { this.searchResults.push(Object.assign({}, challenge))}); 
    this.allResults = this.sortChallengesAlpha(this.searchResults);
  }

  handleOnFocus(event) {
    this.isFocus = true;
    this.isHeaderOverlayActive = true;
    this.isOverlayActive.emit(this.isHeaderOverlayActive);
  }

  handleOnKeyup(event: KeyboardEvent) {
    console.log(event);
    this.searchTextUpdate.next(event.key);
  }

  dismissHeaderOverlay(event: any) {
    this.isHeaderOverlayActive = false;
    this.isFocus = false;
    this.isOverlayActive.emit(this.isHeaderOverlayActive);
  }


  getSearchResults(input: string) {
    let challengeArr = this.headerService.getChallengeArr();
    
    this.searchResults = [];
    for(let i = 0; i < challengeArr.length; i++) {
      let currChallenge: Challenge = challengeArr[i];
      let currChallengeName: string = currChallenge.name.toLowerCase();
      for(let k = 0; k < challengeArr.length; k++) {
        if(input[k] === currChallengeName[k]) {
          if(k === input.length - 1){
            this.searchResults.push(currChallenge);
            if(this.searchResults.length > 0) {
              this.isMatches = true;
            }
            break;
          } 
        }
        else {
          break;
        }
      }
    }
    if(this.searchResults.length === 0) {
      this.isMatches = false;
    }
    this.sortChallengesAlpha(this.searchResults);
    return this.searchResults;
  }

  onSearchSelect(result: Challenge) {
    this.searchText = null;
    this.searchText = "";
    this.searchResults = this.allResults;
    this.challengeItem = result;
    this.dismissHeaderOverlay(result);
  }

  focusInput(event: FocusEvent) {
    this.handleOnFocus(event);
  }

  sortChallengesAlpha(searchDropdownDisplay: Challenge[]) {
    return searchDropdownDisplay = searchDropdownDisplay.sort((a: Challenge, b: Challenge) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });

  }
  
  scrollToTop() {
    (function smoothScroll() {
      let currScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if(currScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currScroll - (currScroll / 8));
      }
    })();
  }
}
