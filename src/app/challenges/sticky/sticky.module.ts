import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyComponent } from './sticky.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StickyComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [StickyComponent]
})
export class StickyModule { }
