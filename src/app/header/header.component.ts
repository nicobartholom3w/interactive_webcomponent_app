import { Component, Input, OnInit } from '@angular/core';
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
  searchText: string;
  searchResults: Challenge[] = [];
  searchTextUpdate = new Subject <string> (); 
  isMatches: boolean = false;
  isChallengeSelected: boolean = false;

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

  handleSearchInput(event: KeyboardEvent) {
    // change event 
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
    return this.searchResults;
  }

  onSearchSelect(result: Challenge) {
    this.searchText = null;
    this.searchText = "";
    this.searchResults = [];
    this.challengeItem = result;
  }

  // onFocus() {
  //   if(this.searchText.length > 0 && this.searchResults.length > 0) {
  //     this.isMatches = true;
  //   }
  // }
}
