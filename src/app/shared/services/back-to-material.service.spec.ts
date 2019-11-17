import {TestBed} from '@angular/core/testing';

import {BackToMaterialService} from './back-to-material.service';

describe('BackToMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackToMaterialService = TestBed.get(BackToMaterialService);
    expect(service).toBeTruthy();
  });
});
