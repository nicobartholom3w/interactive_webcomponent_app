import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PagingComponent]
})
export class PagingModule { }
