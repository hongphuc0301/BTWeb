import { TestBed } from '@angular/core/testing';

import { HiService } from './hi.service';

describe('HiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HiService = TestBed.get(HiService);
    expect(service).toBeTruthy();
  });
});
