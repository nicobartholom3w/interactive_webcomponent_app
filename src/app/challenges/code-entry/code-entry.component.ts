import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-code-entry',
  templateUrl: './code-entry.component.html',
  styleUrls: ['./code-entry.component.scss']
})
export class CodeEntryComponent implements OnInit {
  code: string[] = ['', '', '', '', '', ''];
  constructor() { }

  ngOnInit() {
  }
  
}
