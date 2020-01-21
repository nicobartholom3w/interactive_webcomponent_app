import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isOverlayActive: boolean = false;
  search: string = "Search";
  run: string = "Run";
  sideMenu: object[] = [
    {text: "Whoah! You found me!", button: "Hide back"},
    {text: "Pleast don't run!", button: "Close" }
  ]
  constructor() { }

  ngOnInit() {
  }

  onClickButton(type: string) {
    if(!this.isOverlayActive) {
      this.isOverlayActive = true;
      if(type === "Search") {
        // define sidemenu text/button
      }
      else {
        // sidemenu text/button is this
      }
    }
    else {
      this.isOverlayActive = false;
    }
  }
}
