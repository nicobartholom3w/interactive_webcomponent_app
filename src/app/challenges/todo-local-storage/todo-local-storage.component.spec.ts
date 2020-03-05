import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLocalStorageComponent } from './todo-local-storage.component';

describe('TodoLocalStorageComponent', () => {
  let component: TodoLocalStorageComponent;
  let fixture: ComponentFixture<TodoLocalStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLocalStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
