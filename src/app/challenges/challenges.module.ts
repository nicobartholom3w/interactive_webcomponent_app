import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChallengesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChallengesComponent]
})
export class ChallengesModule { }
