import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotContainerComponent } from './dot-container.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DotContainerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DotContainerComponent]
})
export class DotContainerModule { }
