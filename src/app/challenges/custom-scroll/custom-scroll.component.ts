import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-scroll',
  templateUrl: './custom-scroll.component.html',
  styleUrls: ['./custom-scroll.component.scss']
})
export class CustomScrollComponent implements OnInit {
  blocksArr: string[] = ['', '', '', '', '', ''];
  constructor() { }

  ngOnInit() {
  }

}
