/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeDataService } from './home-data.service';

describe('HomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeDataService]
    });
  });

  it('should ...', inject([HomeDataService], (service: HomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
