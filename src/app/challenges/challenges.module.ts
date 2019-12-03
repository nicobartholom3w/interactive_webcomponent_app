import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { StaticRadioButtonsComponent } from './static-radio-buttons/static-radio-buttons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChallengesComponent, StaticRadioButtonsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChallengesComponent]
})
export class ChallengesModule { }
