import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightHashtagsComponent } from './highlight-hashtags.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HighlightHashtagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [HighlightHashtagsComponent]
})
export class HighlightHashtagsModule { }
