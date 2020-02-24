import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ColorPicker } from '../color-picker.interface';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @ViewChild('container', {static: false}) container: ElementRef;
  @ViewChild('popup', {static: false}) popup: ElementRef;
  @HostListener('document:keydown', ['$event'])
  @HostListener('document:keyup', ['$event'])
    onDomEvent(e: any) {
      if(e.type === 'keydown') {
        this.onKeyDown(e);
      }
      if(e.type === 'keyup') {
        this.onKeyUp(e);
      }
    }
  isShiftDown: boolean = false;
  currentColorIndex: number = 0;
  numberOfColors: number = 5;
  isPopupVisible: boolean = false;
  currentlySelected: ColorPicker;
  colorsArr: ColorPicker[] = [
    { backgroundColor: 'rgb(54, 152, 220)', isCurrentlyHighlighted: true },
    { backgroundColor: 'rgb(46, 204, 113)', isCurrentlyHighlighted: false },
    { backgroundColor: 'rgb(243, 156, 18)', isCurrentlyHighlighted: false },
    { backgroundColor: 'rgb(231, 76, 60)', isCurrentlyHighlighted: false },
    { backgroundColor: 'rgb(155, 90, 183)', isCurrentlyHighlighted: false }
  ]

  
  constructor() { }

  ngOnInit() {
  }

  onKeyDown(e: any) {
    if(e.key === 'Shift') {
      this.isShiftDown = true;
    }
    if(e.key === 'Tab' && this.isShiftDown) {
      this.isPopupVisible = true;
      this.popup.nativeElement.focus()
      this.selectColor();
    }
  }

  onKeyUp(e: any) {
    if(e.key === 'Shift') {
      this.isShiftDown = false;
      this.isPopupVisible = false;
      this.changeColor();
    }
  }

  selectColor() {
    this.colorsArr[this.currentColorIndex].isCurrentlyHighlighted = false;
    this.currentColorIndex++;
    
    if(this.currentColorIndex < this.numberOfColors) {
      this.currentlySelected = this.colorsArr[this.currentColorIndex];
      this.currentlySelected.isCurrentlyHighlighted = true;
    }
    else {
      this.currentColorIndex = 0;
      this.currentlySelected = this.colorsArr[this.currentColorIndex];
      this.currentlySelected.isCurrentlyHighlighted = true;
      
    }
  }

  changeColor() {
    this.container.nativeElement.style.backgroundColor = this.currentlySelected.backgroundColor;
  }
}
