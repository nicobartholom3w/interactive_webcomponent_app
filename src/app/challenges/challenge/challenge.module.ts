import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChallengesComponent } from '../challenges/challenges.component';



@NgModule({
  declarations: [ChallengesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChallengeModule]
})
export class ChallengeModule { 
  public name: string;
  public imagePath: string;
  public link: string;

  constructor(name: string, imagePath: string, link: string) {
    this.name = name;
    this.imagePath = imagePath;
    this.link = link;
  }
}
