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

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(option: MultiSelect) {
    let optionsRefArr = this.optionsRef.toArray();
    
    if(option.index > 0){
      this.optionsArr[0].isSelected = false;
      for(let i = 0; i <= optionsRefArr.length; i++) {
        if(option.index === i) {
          optionsRefArr[i].nativeElement.checked = !optionsRefArr[i].nativeElement.checked;
        }
      }
      option.isSelected = !option.isSelected;
    }
    else {
      let newStatus: boolean;
      if(option.isSelected === false) {
        newStatus = true;
      }
      else {
        newStatus = false;
      }
      for(let k = 0; k <= this.optionsArr.length; k++) {
        this.optionsArr[k].isSelected = newStatus;
        optionsRefArr[k].nativeElement.checked = newStatus;
      }
    }
    
  }


  isFirst(i) {
    if(i === 0) {
      return true;
    }
  }
}
