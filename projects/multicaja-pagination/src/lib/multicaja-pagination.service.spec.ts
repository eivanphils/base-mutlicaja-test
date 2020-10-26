import { TestBed } from '@angular/core/testing';

import { MulticajaPaginationService } from './multicaja-pagination.service';

describe('MulticajaPaginationService', () => {
  let service: MulticajaPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulticajaPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
