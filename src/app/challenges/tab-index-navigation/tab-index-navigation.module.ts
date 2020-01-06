import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabIndexNavigationComponent } from './tab-index-navigation.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';



@NgModule({
  declarations: [TabIndexNavigationComponent, InputComponent, NavigationTabsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TabIndexNavigationComponent]
})
export class TabIndexNavigationModule { }
