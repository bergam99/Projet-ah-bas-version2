import { TestBed } from '@angular/core/testing';

import { DropDownColorService } from './drop-down-color.service';

describe('DropDownColorService', () => {
  let service: DropDownColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDownColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
