import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilingTimersComponent } from './boiling-timers.component';

describe('BoilingTimersComponent', () => {
  let component: BoilingTimersComponent;
  let fixture: ComponentFixture<BoilingTimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilingTimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilingTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
