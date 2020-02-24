import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilingTimersComponent } from './boiling-timers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BoilingTimersComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BoilingTimersComponent]
})
export class BoilingTimersModule { }
