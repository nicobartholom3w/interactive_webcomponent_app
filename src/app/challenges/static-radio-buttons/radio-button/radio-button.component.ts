import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../buttons.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  buttonsText: String[];
  length: number;
  isSelected: boolean = false;
  selectStatus: Boolean[];

  constructor(private buttonService: ButtonsService) { }

  ngOnInit() {
    this.buttonsText = this.buttonService.getButtons();
    this.length = this.buttonsText.length - 1;
    this.selectStatus = this.buttonService.getSelectedArray(this.length);
  }

  buttonSelect(index: number) {
    for(let i = 0; i <= this.length; i++) {
      if(i != index) {
        this.selectStatus[i] = false;
      }
    }
    this.selectStatus[index] = !this.selectStatus[index];

  }
}
