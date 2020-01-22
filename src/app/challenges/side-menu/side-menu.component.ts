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
  sideMenuText: string;
  sideMenuButton: string;
  constructor() { }

  ngOnInit() {
  }

  onActivateOverlay(type: string) {
    if(!this.isOverlayActive) {
      this.isOverlayActive = true;
      if(type === "Search") {
        this.sideMenuText = "Whoah! You found me!";
        this.sideMenuButton = "Hide back";
      }
      else {
        this.sideMenuText = "Please don't run!";
        this.sideMenuButton = "Close";
      }
    }
    else {
      this.isOverlayActive = false;
    }
  }

  onRemoveOverlay() {
    this.isOverlayActive = false;
  }
}
