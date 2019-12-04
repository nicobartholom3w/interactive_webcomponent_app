import { NgModule } from '@angular/core';
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



  buttonSelect() {
    
  }

}
