import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSwitchesComponent } from './random-switches.component';

describe('RandomSwitchesComponent', () => {
  let component: RandomSwitchesComponent;
  let fixture: ComponentFixture<RandomSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
