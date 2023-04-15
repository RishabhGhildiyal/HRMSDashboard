import { TestBed } from '@angular/core/testing';

import { FoodCalenderDataService } from './food-calender-data.service';

describe('FoodCalenderDataService', () => {
  let service: FoodCalenderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCalenderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
