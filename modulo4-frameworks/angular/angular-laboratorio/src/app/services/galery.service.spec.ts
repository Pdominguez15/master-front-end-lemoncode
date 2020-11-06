import { TestBed } from '@angular/core/testing';

import { GaleryService } from './galery.service';

describe('GaleryService', () => {
  let service: GaleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
