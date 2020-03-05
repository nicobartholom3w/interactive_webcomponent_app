import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoLocalStorageComponent } from './todo-local-storage.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoLocalStorageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TodoLocalStorageComponent]
})
export class TodoLocalStorageModule { }
