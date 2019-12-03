import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRadioButtonsComponent } from './static-radio-buttons.component';

describe('StaticRadioButtonsComponent', () => {
  let component: StaticRadioButtonsComponent;
  let fixture: ComponentFixture<StaticRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
