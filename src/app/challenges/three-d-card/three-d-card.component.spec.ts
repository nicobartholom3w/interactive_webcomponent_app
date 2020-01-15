import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCardComponent } from './three-d-card.component';

describe('ThreeDCardComponent', () => {
  let component: ThreeDCardComponent;
  let fixture: ComponentFixture<ThreeDCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
