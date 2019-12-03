import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryTopComponent } from './directory-top/directory-top.component';
import { DirectoryItemComponent } from './directory-item/directory-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DirectoryComponent, DirectoryTopComponent, DirectoryItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DirectoryComponent]
})
export class DirectoryModule { }
