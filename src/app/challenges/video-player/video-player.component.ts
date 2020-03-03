import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer', {static: false}) videoPlayer: ElementRef;
  isPlaying: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  videoToggle(event: any) {
    event.stopPropagation();
    if(this.isPlaying){
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
    else {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    }
    // event.stopPropagation();
  }
}
