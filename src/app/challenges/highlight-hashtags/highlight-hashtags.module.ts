import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightHashtagsComponent } from './highlight-hashtags.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HighlightHashtagsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HighlightHashtagsComponent]
})
export class HighlightHashtagsModule { }
