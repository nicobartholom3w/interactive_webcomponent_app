import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyCalendarComponent } from './weekly-calendar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WeeklyCalendarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WeeklyCalendarComponent]
})
export class WeeklyCalendarModule { }
