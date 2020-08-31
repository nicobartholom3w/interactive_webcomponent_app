import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightHashtagsComponent } from './highlight-hashtags.component';

describe('HighlightHashtagsComponent', () => {
  let component: HighlightHashtagsComponent;
  let fixture: ComponentFixture<HighlightHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
