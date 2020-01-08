import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTabComponent } from './selected-tab.component';

describe('SelectedTabComponent', () => {
  let component: SelectedTabComponent;
  let fixture: ComponentFixture<SelectedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
