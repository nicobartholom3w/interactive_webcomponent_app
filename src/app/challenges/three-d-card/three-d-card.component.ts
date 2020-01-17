import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-three-d-card',
  templateUrl: './three-d-card.component.html',
  styleUrls: ['./three-d-card.component.scss']
})
export class ThreeDCardComponent implements OnInit {
  @ViewChild('card', {static: false}) card: ElementRef;
  // @ViewChild('container', {static: false}) container: ElementRef;
  // @HostListener('window:resize', ['event'])
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(e) {
      if(this.card !== undefined) {
        let xHalf = window.innerWidth / 2;
        let yHalf = window.innerHeight / 2;
        let x = e.clientX - xHalf;
        let y = e.clientY - yHalf;
        this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(${x / 30}deg) rotateX(${-y / 30}deg)`);

      }
    }


  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngOnDestroy() {}
}
