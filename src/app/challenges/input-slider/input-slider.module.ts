import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSliderComponent } from './input-slider.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InputSliderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [InputSliderComponent]
})
export class InputSliderModule { }
