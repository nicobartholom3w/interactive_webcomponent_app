import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabIndexNavigationComponent } from './tab-index-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TabIndexNavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TabIndexNavigationComponent]
})
export class TabIndexNavigationModule { }
