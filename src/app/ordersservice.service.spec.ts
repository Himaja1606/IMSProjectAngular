import { TestBed } from '@angular/core/testing';

import { OrdersserviceService } from './ordersservice.service';

describe('OrdersserviceService', () => {
  let service: OrdersserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
