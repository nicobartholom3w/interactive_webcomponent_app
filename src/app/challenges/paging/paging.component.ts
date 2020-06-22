import { Component, OnInit } from '@angular/core';
import { PagingService } from './paging.service';
import { Config } from 'protractor';
import { request } from 'http';

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
  isLoading: boolean = false;
  height: number = 0;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
  }

  showPagingInfo() {
    this.pagingService.getPagingInfo()
      .subscribe({
        next: (data: Config) => {
          this.isLoading = true;
          setTimeout(() => {
            for(let i = 0; i < this.numberOfItems; i++) {
              this.namesArr.push(data.results[this.currentCount].name);
              this.currentCount++;
            }
            this.height += 275;
            console.log(this.height);
            this.isLoading = false;
          }, 1500);
        },
        error: (error) => {
          alert("There was a problem with the request.");
        }
      });
  }

}
