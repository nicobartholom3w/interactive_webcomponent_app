import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleCursorComponent } from './ripple-cursor.component';

describe('RippleCursorComponent', () => {
  let component: RippleCursorComponent;
  let fixture: ComponentFixture<RippleCursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleCursorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
