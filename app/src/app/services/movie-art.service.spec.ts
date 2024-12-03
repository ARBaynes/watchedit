import { TestBed } from '@angular/core/testing';

import {MovieArtService} from './movie-art.service';

describe('MovieArtService', () => {
  let service: MovieArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
