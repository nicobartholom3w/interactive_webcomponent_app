import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../buttons.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  buttons: String[];

  constructor(private buttonService: ButtonsService) { }

  ngOnInit() {
    this.buttons = this.buttonService.getButtons();
  }

}
