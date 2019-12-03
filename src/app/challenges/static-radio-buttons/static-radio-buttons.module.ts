import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRadioButtonsComponent } from './static-radio-buttons/static-radio-buttons.component';
import { RouterModule } from '@angular/router';
import { RadioButtonComponent } from './radio-button/radio-button.component';



@NgModule({
  declarations: [StaticRadioButtonsComponent, RadioButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [StaticRadioButtonsComponent]
})
export class StaticRadioButtonsModule {

  // constructor(private renderer: Renderer2) {
  //   this.renderer.setStyle(document.body, 'background-color', 'rgb(116, 185, 255)');
  // }
//   constructor(private elementRef: ElementRef){}

//   ngAfterViewInit(){
//     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(116, 185, 255)';
//  }
 }
