import { TestBed } from '@angular/core/testing';

import { STaskService } from './s-task.service';

describe('STaskService', () => {
  let service: STaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
