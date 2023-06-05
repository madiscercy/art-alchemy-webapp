import { TestBed } from '@angular/core/testing';

import { DeviantArtService } from './deviant-art.service';

describe('DeviantArtService', () => {
  let service: DeviantArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviantArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
