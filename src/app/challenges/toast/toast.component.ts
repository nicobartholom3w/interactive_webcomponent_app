import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Toast } from './toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toastArr: Toast[];
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastArr = this.toastService.getToast();
  }

}
