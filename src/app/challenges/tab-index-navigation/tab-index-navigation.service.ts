import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tab } from './tab';

@Injectable({
  providedIn: 'root'
})
export class TabIndexNavigationService {
  activeTab = new Subject<Tab>();
  currentTab: Tab;
  tabNames: string[] = ["positive", "negative", "neutral"];
  tabContent: string[] = ["Positive content", "Negative content", "Neutral content"];

  constructor() { }

  getTabNames() {
    return this.tabNames.slice();
  }

  getTabContent() {
    return this.tabContent.slice();
  }

  getIsSelectedArr(arr: string[]) {
    let length = arr.length - 1;
    let newArr = [];
    for(let i = 0; i <= length; i++){
      newArr.push(false);
    }
    return newArr;
  }

  onTabSelected(tab: Tab) {
    this.currentTab = tab;
    this.activeTab.next(tab);
  }

}
