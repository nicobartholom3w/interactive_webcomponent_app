import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ColorPickerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule { }
