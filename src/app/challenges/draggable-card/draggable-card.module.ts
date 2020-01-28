import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableCardComponent } from './draggable-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DraggableCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DraggableCardComponent]
})
export class DraggableCardModule { }
