import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-webcomponents-app';
  isAppOverlayActive: boolean = false;
  isSearchFocus: boolean = false;

  onIsOverlayActive(event: boolean) {
    this.isAppOverlayActive = event;
    this.isSearchFocus = event;
  }

  dismissAppOverlay(event: MouseEvent) {
    this.isAppOverlayActive = false;
    this.isSearchFocus = false;
  }
}
