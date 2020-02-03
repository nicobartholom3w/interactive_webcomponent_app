import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MultiSelectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MultiSelectComponent]
})
export class MultiSelectModule { }
