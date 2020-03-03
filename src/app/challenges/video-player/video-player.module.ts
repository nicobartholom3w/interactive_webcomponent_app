import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
