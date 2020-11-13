import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('input', {static: false}) input: ElementRef;
  searchText: string;
  searchResults: Challenge[] = [];
  searchTextUpdate = new Subject <string> (); 
  isMatches: boolean = false;
  isChallengeSelected: boolean = false;
  isFocus: boolean = false;
  allResults: Challenge[] = [];

  constructor(private headerService: HeaderService) {
    this.searchTextUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
        .subscribe(value => {
          
          const searchText = this.searchText.toLowerCase();
          this.getSearchResults(searchText);
          
          if(searchText.length === 0) {
            this.isMatches = false;
          }
        })
   }

  ngOnInit() {
    
  }

  handleOnFocus(event) {
    this.isFocus = true;
    this.allResults = this.headerService.getChallengeArr();
    this.allResults.forEach((challenge) => { this.searchResults.push(Object.assign({}, challenge))}); 
    this.sortChallengesAlpha(this.searchResults);
  }

  handleOnKeyup(event) {
    console.log(event);
    this.searchTextUpdate.next(event);
  }

  handleOnBlur(event) {
    setTimeout(() => { this.isFocus = false; }, 300);
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
    // if(this.isMatches === true) {
    //   // console.log(this.searchResults);
    // }
    // else {
    //   console.log("no more isMatches");
    // }
    return this.searchResults;
  }

  onSearchSelect(result: Challenge) {
    this.searchText = null;
    this.searchText = "";
    this.searchResults = [];
    this.challengeItem = result;
  }

  focusInput() {
    this.input.nativeElement.focus();
    this.isFocus = true;
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
  // onFocus() {
  //   if(this.searchText.length > 0 && this.searchResults.length > 0) {
  //     this.isMatches = true;
  //   }
  // }
}
