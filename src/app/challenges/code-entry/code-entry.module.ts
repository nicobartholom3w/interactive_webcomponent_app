import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEntryComponent } from './code-entry.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CodeEntryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CodeEntryComponent]
})
export class CodeEntryModule { }
