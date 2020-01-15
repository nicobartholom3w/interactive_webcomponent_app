import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTypeComponent } from './auto-type.component';

describe('AutoTypeComponent', () => {
  let component: AutoTypeComponent;
  let fixture: ComponentFixture<AutoTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
