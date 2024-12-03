import { TestBed } from '@angular/core/testing';

import { ProgrammeService } from './programme.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProgrammeService', () => {
  let service: ProgrammeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProgrammeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
