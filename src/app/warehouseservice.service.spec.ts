import { TestBed } from '@angular/core/testing';

import { WarehouseserviceService } from './warehouseservice.service';

describe('WarehouseserviceService', () => {
  let service: WarehouseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
