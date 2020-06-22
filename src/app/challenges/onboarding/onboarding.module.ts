import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [OnboardingComponent]
})
export class OnboardingModule { }
