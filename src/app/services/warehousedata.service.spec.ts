import { TestBed } from '@angular/core/testing';

import { WarehousedataService } from './warehousedata.service';

describe('WarehousedataService', () => {
  let service: WarehousedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
