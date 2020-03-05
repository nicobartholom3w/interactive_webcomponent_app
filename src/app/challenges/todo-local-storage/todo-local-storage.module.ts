import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoLocalStorageComponent } from './todo-local-storage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TodoLocalStorageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TodoLocalStorageComponent]
})
export class TodoLocalStorageModule { }
