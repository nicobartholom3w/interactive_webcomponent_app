import { Component, Input, OnInit } from '@angular/core';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-local-storage',
  templateUrl: './todo-local-storage.component.html',
  styleUrls: ['./todo-local-storage.component.scss']
})
export class TodoLocalStorageComponent implements OnInit {
  localStorage = window.localStorage;
  amtInStorage: number = 0;
  todoArr: string[] = [];
  @Input() todoInput: string;
  constructor() { }

  ngOnInit() {
    while(this.localStorage.getItem(this.amtInStorage.toString())) {
      this.todoArr.push(this.localStorage.getItem(this.amtInStorage.toString()));
      this.amtInStorage++;
    }

  }
  
  onSubmit(form: any) {
    if(form.value.todoInput !== null){
      this.localStorage.setItem(this.amtInStorage.toString(), form.value.todoInput);
      this.todoArr.push(form.value.todoInput);
      this.amtInStorage++;
      form.reset();
    }
  }

  clearStorage() {
    this.localStorage.clear();
    this.todoArr = [];
    this.amtInStorage = 0;
  }

}
