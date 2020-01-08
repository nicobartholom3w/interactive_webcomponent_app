import { Component, OnInit, Input } from '@angular/core';
import { TabIndexNavigationService } from '../tab-index-navigation.service';
import { Tab } from '../tab';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss']
})
export class NavigationTabsComponent implements OnInit {
  @Input() tabName: string;
  @Input() index: number;
  tabsArr: string[];
  currentTab: Tab;
  isSelectedArr: Boolean[];

  constructor(private tabIndexService: TabIndexNavigationService) { }

  ngOnInit() {
    this.tabsArr = this.tabIndexService.getTabNames();
    this.isSelectedArr = this.tabIndexService.getIsSelectedArr(this.tabsArr);
    this.tabIndexService.tabSelected
      .subscribe((selectedTab: Tab) => {
        this.currentTab = selectedTab;
        this.changeTab(this.currentTab);
      });
  }

  changeTab(tab: Tab) {
    
  }

}
