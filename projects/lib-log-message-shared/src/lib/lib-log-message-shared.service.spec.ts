import { TestBed } from '@angular/core/testing';

import { LibLogMessageSharedService } from './lib-log-message-shared.service';

describe('LibLogMessageSharedService', () => {
  let service: LibLogMessageSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibLogMessageSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
