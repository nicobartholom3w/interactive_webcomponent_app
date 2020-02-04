import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { MultiSelect } from '../multi-select.interface';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @ViewChildren('choice') optionsRef: QueryList<ElementRef>;
  optionsArr: MultiSelect[] = [
    {index: 0, name: 'Check all', id: 'check-all', isSelected: false}, 
    {index: 1, name: 'Ice-cream', id: 'ice-cream', isSelected: false},
    {index: 2, name: 'Hot-dog', id: 'hot-dog', isSelected: false},
    {index: 3, name: 'Popcorn', id: 'popcorn', isSelected: false},
    {index: 4, name: 'Cookie', id: 'cookie', isSelected: false}
  ];
  
  orderText: string = "Please, select your food";
  numberChecked: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(option: MultiSelect) {
    let optionsRefArr = this.optionsRef.toArray();
    
    if(option.index > 0){
      option.isSelected = !option.isSelected;
      for(let i = 0; i < optionsRefArr.length; i++) {
        if(this.optionsArr[i].isSelected === true) {
          this.numberChecked++;
        }
      }
      if(this.numberChecked === 4) {
        this.optionsArr[0].isSelected = true;
      }
      else {
        this.optionsArr[0].isSelected = false;
        this.numberChecked = 0;
      }
    }
    else {
      let newStatus: boolean;
      if(option.isSelected === false) {
        newStatus = true;
      }
      else {
        newStatus = false;
      }
      for(let k = 0; k < this.optionsArr.length; k++) {
        this.optionsArr[k].isSelected = newStatus;
        optionsRefArr[k].nativeElement.checked = newStatus;
      }
    } 
    this.changeOrderText();
  }

  changeOrderText() {
    let currentOrderTextArr: string[] = [];
    for(let i = 0; i < this.optionsArr.length; i++) {
      if(this.optionsArr[i].isSelected && this.optionsArr[i].name !== 'Check all') {
        currentOrderTextArr.push(this.optionsArr[i].name);
      }
    }
    let orderLength = currentOrderTextArr.length;
    if(orderLength > 0) {
      this.orderText = currentOrderTextArr[0];
      if(orderLength > 1) {
        this.orderText += ', ' + currentOrderTextArr[1];
      }
      if(orderLength > 2) {
        let extra: number = orderLength - 2;
        this.orderText += ` and ${extra} more`;
      }
    }
    else {
      this.orderText = 'Please, select your food';
    }
    
  }

  isFirst(i: number) {
    if(i === 0) {
      return true;
    }
  }
}
