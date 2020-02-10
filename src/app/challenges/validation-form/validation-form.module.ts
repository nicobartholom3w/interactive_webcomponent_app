import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormComponent } from './validation-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ValidationFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ValidationFormComponent]
})
export class ValidationFormModule { }
