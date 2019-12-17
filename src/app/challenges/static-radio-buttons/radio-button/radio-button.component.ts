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

  constructor(private buttonService: ButtonsService) { }

  ngOnInit() {
    this.buttonsText = this.buttonService.getButtons();
    this.length = this.buttonsText.length - 1;
  }

}
