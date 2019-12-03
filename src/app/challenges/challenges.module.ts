import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { StaticRadioButtonsComponent } from './static-radio-buttons/static-radio-buttons.component';



@NgModule({
  declarations: [ChallengesComponent, StaticRadioButtonsComponent],
  imports: [
    CommonModule
  ]
})
export class ChallengesModule { }
