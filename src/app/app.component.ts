import { Component, Output } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-webcomponents-app';
  isAppOverlayActive: boolean = false;
  isSearchFocus: boolean = false;
  height: string = "";

  constructor(private router: Router) {
   
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
    this.height = window.innerHeight + "px";
  }
  onIsOverlayActive(event: boolean) {
    this.isAppOverlayActive = event;
    this.isSearchFocus = event;
  }

  dismissAppOverlay(event: MouseEvent) {
    this.isAppOverlayActive = false;
    this.isSearchFocus = false;
  }
}
