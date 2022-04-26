import { TestBed } from '@angular/core/testing';

import { HoleritesService } from './holerites.service';

describe('HoleritesService', () => {
  let service: HoleritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoleritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
