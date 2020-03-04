import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', {static: false}) videoPlayer: ElementRef;
  isPlaying: boolean = false;
  progressValue: number = 0;
  skipTimeSec: number = 10;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.videoPlayer.nativeElement, 'timeupdate')
      .subscribe({
        next: (stuff: Event) => {
          this.updateProgressBar();
        }
      })
    
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
  }

  updateProgressBar() {
    this.progressValue = Number(((100 / this.videoPlayer.nativeElement.duration) * this.videoPlayer.nativeElement.currentTime).toFixed(2));
  }

  skip(direction: string) {
    if(direction === 'forward') {
      this.videoPlayer.nativeElement.currentTime += this.skipTimeSec;
    }
    else {
      this.videoPlayer.nativeElement.currentTime -= this.skipTimeSec;
    }
  }

  reset() {
    this.videoPlayer.nativeElement.currentTime = 0;
  }
}
