import { TestBed } from '@angular/core/testing';

import { DirectoryManagementService } from './directory-management.service';

describe('DirectoryManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectoryManagementService = TestBed.get(DirectoryManagementService);
    expect(service).toBeTruthy();
  });
});
