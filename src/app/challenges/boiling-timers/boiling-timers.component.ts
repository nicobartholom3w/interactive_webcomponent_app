import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-boiling-timers',
  templateUrl: './boiling-timers.component.html',
  styleUrls: ['./boiling-timers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoilingTimersComponent implements OnInit {
  @ViewChild('timers', {static: false}) timers: ElementRef;
  @Input() timer: number;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.createTimer(form.value.timer);
    form.reset();
  }

  createTimer(time: number) {
    let newTimer = document.createElement("div");
    newTimer.classList.add("timers__boiler");
    newTimer.innerText = time.toString();
    this.timers.nativeElement.append(newTimer);
    
    for(let i = time; i >= 0; i--) {
      setTimeout(() => { newTimer.innerText = i.toString(); }, (time - i) * 1000);
    }
    setTimeout(() => { 
      newTimer.classList.add("popped");
      setTimeout(() => { newTimer.remove(); }, 500);
    }, (time + 1) * 1000);
  }

}
