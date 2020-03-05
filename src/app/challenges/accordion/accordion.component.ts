import { Component, OnInit } from '@angular/core';
import { Accordion } from './accordion.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  accordionArr: Accordion[] = [
    {header: "1. Hotel facilities", description: "We've got everything you need covered, from hairdryer to ski storage at the lobby. Don't worry about that!", active: false},
    {header: "2. Closest Beach", description: "We've got no real beach anywhere closely to ou hotel. There are mountains though!", active: false},
    {header: "3. How to get here", description: "By plane, you silly.", active: false}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  openSection(section: Accordion, index: number) {
    section.active = !section.active;
    for(let i = 0; i < this.accordionArr.length; i++) {
      if(i !== index && this.accordionArr[i].active) {
        this.accordionArr[i].active = false;
      }
    }
  }
}
