import { Component, OnInit } from '@angular/core';
import { TabIndexNavigationService } from './tab-index-navigation.service';
import { Tab } from './tab';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab-index-navigation',
  templateUrl: './tab-index-navigation.component.html',
  styleUrls: ['./tab-index-navigation.component.scss']
})
export class TabIndexNavigationComponent implements OnInit {
  tabsArr: Tab[] = [
    {index: 1, name: "positive", text: "Positive content", active: false},
    {index: 2, name: "negative", text: "Negative content", active: false},
    {index: 3, name: "neutral", text: "Neutral content", active: false}
  ];

  constructor(private tabIndexService: TabIndexNavigationService) { }

  ngOnInit() {
   
  }

  onSubmit(f: NgForm) {
    if(f.status === "INVALID" || f.value.index <= 0) {
      alert('Index is invalid.');
    }
    this.changeTab(f.value.index);
    f.reset();
  }

  onTabSelect(i: number) {
    this.changeTab(i + 1);

  }

  changeTab(tabIndex: number) {
    for(let tab of this.tabsArr) {
      if(tab.index !== tabIndex) {
        tab.active = false;
      }
      else {
        tab.active = !tab.active;
      }
    }
  }

}
