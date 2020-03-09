import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { RouterModule } from '@angular/router';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';



@NgModule({
  declarations: [ToastComponent, ToastNotificationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToastComponent]
})
export class ToastModule { }
