import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageZoomComponent } from './image-zoom.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ImageZoomComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ImageZoomComponent]
})
export class ImageZoomModule { }
