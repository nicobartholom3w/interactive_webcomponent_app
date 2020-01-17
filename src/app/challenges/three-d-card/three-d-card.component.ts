import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-three-d-card',
  templateUrl: './three-d-card.component.html',
  styleUrls: ['./three-d-card.component.scss']
})
export class ThreeDCardComponent implements OnInit {
  @ViewChild('card', {static: false}) card: ElementRef;
  @ViewChild('container', {static: false}) container: ElementRef;
  
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(e) {
      if(this.card !== undefined) {
        if(e.target === this.container.nativeElement || e.target === this.card.nativeElement) {
          let xHalf = this.container.nativeElement.clientWidth / 2;
          let yHalf = this.container.nativeElement.clientHeight / 2;
          let x = e.clientX - xHalf;
          let y = e.clientY - yHalf;
          this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(${x / 30}deg) rotateX(${-y / 30}deg)`);
        }
      }
    }


  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngOnDestroy() {}
}
