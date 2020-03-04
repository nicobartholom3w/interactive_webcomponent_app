import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss']
})
export class InputSliderComponent implements OnInit, AfterViewInit {
  @ViewChild("sliderInput", {static: false}) sliderInput: ElementRef;
  @ViewChild("sliderProgress", {static: false}) sliderProgress: ElementRef;
  value: number = 30;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.sliderInput.nativeElement, 'input')
      .subscribe({
        next: (event: Event) => {
          this.value = this.sliderInput.nativeElement.value;
          this.sliderProgress.nativeElement.style.width = this.value + "%";
        }
      })
    
  }
  
}
