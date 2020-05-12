import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Toast } from './toast.interface';
import { stringify } from 'querystring';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toastArr: Toast[];
  currentToast: Toast;
  currentToastText: string = "";
  isActive: boolean = false;
  isRed: boolean = false;
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastArr = this.toastService.getToastArr();
  }

  popToast(label: string) {
    // setTimeout for events
    for(let toast of this.toastArr) {
      if(toast.label === label) {
        this.currentToast = toast;
        this.currentToastText = this.currentToast.text;
        this.isActive = true;
        if(label == "Toast Alert") {
          this.isRed = true;
        }
        else {
          this.isRed = false;
        }
      }
    }

  }
}
