import { TestBed } from '@angular/core/testing';

import { LogedinGuard } from './logedin.guard';

describe('LogedinGuard', () => {
  let guard: LogedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
