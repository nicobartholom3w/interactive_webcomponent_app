import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-type',
  templateUrl: './auto-type.component.html',
  styleUrls: ['./auto-type.component.scss']
})
export class AutoTypeComponent implements OnInit {
  changingText: string[] = ["design", "frontend", "backend", "testing"];

  constructor() { }

  ngOnInit() {
  }

}
