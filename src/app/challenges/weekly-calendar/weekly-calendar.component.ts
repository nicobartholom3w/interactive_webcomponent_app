import { Component, OnInit } from '@angular/core';
import { WeeklyCalendar } from './weekly-calendar.interface';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.scss']
})
export class WeeklyCalendarComponent implements OnInit {
  monthsArr: string[] = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
  today: Date = new Date();
  initWeekStartDate: Date = new Date(this.today);
  initWeekStartDay: number = this.initWeekStartDate.setDate(this.today.getDate() - this.today.getDay());
  currWeekStartDate: Date = new Date(this.initWeekStartDate);
  currWeekStartDay: number = this.initWeekStartDate.setDate(this.currWeekStartDate.getDate() - this.currWeekStartDate.getDay());

  currentWeekArr: WeeklyCalendar[] = [
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
    {month: '', date: '', isToday: false},
  ];
  constructor() { }

  ngOnInit() {
    this.generateWeek();
  }

  generateWeek() {
    let tempDate: Date = new Date(this.currWeekStartDate);
    for(let i = 0; i < 7; i++) {
      this.currentWeekArr[i].month = this.monthsArr[tempDate.getMonth()];
      this.currentWeekArr[i].date = tempDate.getDate().toString();
      
      if(tempDate.getTime() === this.today.getTime()) {
        this.currentWeekArr[i].isToday = true;
      }
      else {
        this.currentWeekArr[i].isToday = false;
      }
      tempDate.setDate(tempDate.getDate() + 1);
    }
  }

  changeWeek(direction: string) {
    let change: number = 7;
    if(direction === 'back') {
      change = -7;
    }
    this.currWeekStartDate.setDate(this.currWeekStartDate.getDate() + change);
    this.generateWeek();
  }

}
