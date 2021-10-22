import { TestBed } from '@angular/core/testing';

import { LogMessageTesterService } from './log-message-tester.service';

describe('LogMessageTesterService', () => {
  let service: LogMessageTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMessageTesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
