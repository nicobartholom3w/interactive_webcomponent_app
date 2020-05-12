import { Injectable } from '@angular/core';
import { Toast } from './toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastArr: Toast[] = [
    { label: "Toast Message", text: "Just a usual message", backgroundColor: "black", isHidden: true },
    { label: "Toast Alert", text: "Here is your error", backgroundColor: "red", isHidden: true }
  ]

  constructor() { }

  getToastArr() {
    return this.toastArr.slice();
  }

}
