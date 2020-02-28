import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilingTimersComponent } from './boiling-timers.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BoilingTimersComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [BoilingTimersComponent]
})
export class BoilingTimersModule { }
