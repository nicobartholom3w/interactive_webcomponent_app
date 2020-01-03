import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIndexNavigationComponent } from './tab-index-navigation.component';

describe('TabIndexNavigationComponent', () => {
  let component: TabIndexNavigationComponent;
  let fixture: ComponentFixture<TabIndexNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabIndexNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabIndexNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
