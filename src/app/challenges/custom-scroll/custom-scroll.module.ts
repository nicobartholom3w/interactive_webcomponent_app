import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomScrollComponent } from './custom-scroll.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomScrollComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CustomScrollComponent]
})
export class CustomScrollModule { }
