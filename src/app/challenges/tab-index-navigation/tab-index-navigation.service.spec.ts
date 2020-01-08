import { TestBed } from '@angular/core/testing';

import { TabIndexNavigationService } from './tab-index-navigation.service';

describe('TabIndexNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabIndexNavigationService = TestBed.get(TabIndexNavigationService);
    expect(service).toBeTruthy();
  });
});
