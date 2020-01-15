import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDCardComponent } from './three-d-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThreeDCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ThreeDCardComponent]
})
export class ThreeDCardModule { }
