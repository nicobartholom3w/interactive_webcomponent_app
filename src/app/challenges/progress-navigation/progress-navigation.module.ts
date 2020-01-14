import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressNavigationComponent } from './progress-navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProgressNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ProgressNavigationComponent]
})
export class ProgressNavigationModule { }
