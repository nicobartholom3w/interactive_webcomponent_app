import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardSliderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardSliderComponent]
})
export class CardSliderModule { }
