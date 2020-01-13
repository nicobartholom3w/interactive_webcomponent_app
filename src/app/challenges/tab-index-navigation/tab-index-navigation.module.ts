import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabIndexNavigationComponent } from './tab-index-navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [TabIndexNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [TabIndexNavigationComponent]
})
export class TabIndexNavigationModule { }
