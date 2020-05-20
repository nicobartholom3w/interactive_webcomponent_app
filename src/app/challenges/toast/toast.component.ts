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
  currentLabel: string;
  currentToastText: string = "";
  okayToToast: boolean = true;
  isActive: boolean = false;
  isRed: boolean = false;
  toastTimeout: any;
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastArr = this.toastService.getToastArr();
  }

  popToast(label: string) {
    if(this.okayToToast){
      this.currentLabel = label;
      this.okayToToast = false;
      for(let toast of this.toastArr) {
        if(toast.label === this.currentLabel) {
          this.currentToast = toast;
          this.currentToastText = this.currentToast.text;
          this.isActive = true;
          if(this.currentLabel === "Toast Alert") {
            this.isRed = true;
          }
          else {
            this.isRed = false;
          }
        }
      }
      this.toastTimeout = setTimeout(() => {this.isActive = false;}, 5000);
      let toastHiddenTimeout = setTimeout(() => {this.okayToToast = true}, 5300);
    }  
  }

}
