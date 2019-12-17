import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  buttons: String[] = ["sort by price", "sort by name", "sort by relevance"];
  buttonStatusArr: Boolean[] = [];

  constructor() { }

  getButtons() {
    return this.buttons.slice();
  }

  getSelectedArray(length: number) {
    for(let i = 0; i <= length; i++){
      this.buttonStatusArr.push(false);
    }
    return this.buttonStatusArr;
  }

}
