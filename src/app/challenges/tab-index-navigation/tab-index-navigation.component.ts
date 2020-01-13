import { Component, OnInit } from '@angular/core';
import { TabIndexNavigationService } from './tab-index-navigation.service';
import { Tab } from './tab';

@Component({
  selector: 'app-tab-index-navigation',
  templateUrl: './tab-index-navigation.component.html',
  styleUrls: ['./tab-index-navigation.component.scss']
})
export class TabIndexNavigationComponent implements OnInit {
  index: number;
  tabsArr: Tab[] = [

  ];
  constructor(private tabIndexService: TabIndexNavigationService) { }

  ngOnInit() {
   
  }

  tabClicked(tab: Tab) {
    
  }
}
