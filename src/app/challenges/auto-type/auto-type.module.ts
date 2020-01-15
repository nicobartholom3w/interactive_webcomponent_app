import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoTypeComponent } from './auto-type.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AutoTypeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AutoTypeComponent]
})
export class AutoTypeModule { }
