import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryTopComponent } from './directory-top/directory-top.component';
import { DirectoryItemComponent } from './directory-item/directory-item.component';



@NgModule({
  declarations: [DirectoryComponent, DirectoryTopComponent, DirectoryItemComponent],
  imports: [
    CommonModule
  ],
  exports: [DirectoryComponent]
})
export class DirectoryModule { }
