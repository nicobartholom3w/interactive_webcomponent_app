import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tab } from './tab';

@Injectable({
  providedIn: 'root'
})
export class TabIndexNavigationService {
  // activeTab = new Subject<Tab>();
  // currentTab: Tab;
  // selectedArr = new Subject<Boolean[]>();
  // isSelectedArr: Boolean[];
  // tabNames: string[] = ["positive", "negative", "neutral"];
  // tabContent: string[] = ["Positive content", "Negative content", "Neutral content"];

  // constructor() { }

  // getTabNames() {
  //   return this.tabNames.slice();
  // }

  // getTabContent() {
  //   return this.tabContent.slice();
  // }

  // getIsSelectedArr(arr: string[]) {
  //   let length = arr.length - 1;
  //   let newArr = [];
  //   for(let i = 0; i <= length; i++){
  //     newArr.push(false);
  //   }
  //   return this.isSelectedArr = newArr;
  // }

  // onTabSelected(tab: Tab) {
  //   this.currentTab = tab;
  //   this.changeTab(tab);
  //   this.activeTab.next(tab);
  // }

  // changeTab(tab: Tab) {
  //   for(let i = 0; i < this.tabNames.length; i++) {
  //     if(i != tab.id) {
  //       this.isSelectedArr[i] = false;
  //     }
  //     else {
  //       this.isSelectedArr[tab.id] = !this.isSelectedArr[tab.id];
  //     }
  //   }
  //   this.selectedArr.next(this.isSelectedArr);
  // }
}
