import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleCursorComponent } from './ripple-cursor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RippleCursorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RippleCursorComponent]
})
export class RippleCursorModule { }
