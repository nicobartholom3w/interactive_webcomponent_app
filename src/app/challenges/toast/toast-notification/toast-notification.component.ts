import { Component, OnInit, Input } from '@angular/core';
import { Toast } from '../toast.interface';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent implements OnInit {
  @Input() theToast: Toast;
  
  constructor() { }

  ngOnInit() {

  }

}
