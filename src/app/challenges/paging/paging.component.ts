import { Component, OnInit } from '@angular/core';
import { PagingService } from './paging.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  pagingInfo: Config;
  numberOfItems: number = 10;
  namesArr: string[] = [];
  currentCount: number = 0;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
  }

  showPagingInfo() {
    this.pagingService.getPagingInfo()
      .subscribe((data: Config) => {
        for(let i = 0; i < this.numberOfItems; i++) {
          this.namesArr.push(data.results[this.currentCount].name);
          this.currentCount++;
        }
      });
  }

}
