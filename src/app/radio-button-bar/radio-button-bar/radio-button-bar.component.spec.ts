import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonBarComponent } from './radio-button-bar.component';

describe('RadioButtonBarComponent', () => {
  let component: RadioButtonBarComponent;
  let fixture: ComponentFixture<RadioButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
