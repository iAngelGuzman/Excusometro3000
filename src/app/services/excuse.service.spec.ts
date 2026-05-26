import { TestBed } from '@angular/core/testing';

import { Excuses } from './excuses';

describe('Excuses', () => {
  let service: Excuses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Excuses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
