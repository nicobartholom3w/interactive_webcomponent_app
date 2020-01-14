import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressNavigationComponent } from './progress-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProgressNavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProgressNavigationComponent]
})
export class ProgressNavigationModule { }
