import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomSwitchesComponent } from './random-switches.component';



@NgModule({
  declarations: [RandomSwitchesComponent],
  imports: [
    CommonModule
  ],
  exports: [RandomSwitchesComponent]
})
export class RandomSwitchesModule { }
