import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSuggestComponent } from './poke-suggest.component';

describe('PokeSuggestComponent', () => {
  let component: PokeSuggestComponent;
  let fixture: ComponentFixture<PokeSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
