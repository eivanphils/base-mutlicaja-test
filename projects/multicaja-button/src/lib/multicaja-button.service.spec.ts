import { TestBed } from '@angular/core/testing';

import { MulticajaButtonService } from './multicaja-button.service';

describe('MulticajaButtonService', () => {
  let service: MulticajaButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulticajaButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
