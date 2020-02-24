import { Component, OnInit, HostListener } from '@angular/core';
import { ColorPicker } from '../color-picker.interface';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @HostListener('document:keydown', ['$event'])
  
  colorsArr: ColorPicker[] = [
    { index: 0, backgroundColor: 'rgb(54, 152, 220)', isCurrentBackground: false, isCurrentlyHighlighted: true },
    { index: 1, backgroundColor: 'rgb(46, 204, 113)', isCurrentBackground: false, isCurrentlyHighlighted: false },
    { index: 2, backgroundColor: 'rgb(243, 156, 18)', isCurrentBackground: false, isCurrentlyHighlighted: false },
    { index: 3, backgroundColor: 'rgb(231, 76, 60)', isCurrentBackground: false, isCurrentlyHighlighted: false },
    { index: 4, backgroundColor: 'rgb(155, 90, 183)', isCurrentBackground: false, isCurrentlyHighlighted: false }
  ]

  
  constructor() { }

  ngOnInit() {
  }

}
