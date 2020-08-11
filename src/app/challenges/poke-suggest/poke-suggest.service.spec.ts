import { TestBed } from '@angular/core/testing';

import { PokeSuggestService } from './poke-suggest.service';

describe('PokeSuggestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeSuggestService = TestBed.get(PokeSuggestService);
    expect(service).toBeTruthy();
  });
});
