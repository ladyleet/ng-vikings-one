/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeowDataService } from './meow-data.service';

describe('MeowDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeowDataService]
    });
  });

  it('should ...', inject([MeowDataService], (service: MeowDataService) => {
    expect(service).toBeTruthy();
  }));
});
