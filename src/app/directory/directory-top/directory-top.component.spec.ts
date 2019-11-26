import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryTopComponent } from './directory-top.component';

describe('DirectoryTopComponent', () => {
  let component: DirectoryTopComponent;
  let fixture: ComponentFixture<DirectoryTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
