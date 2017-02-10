/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BananaDataService } from './banana-data.service';

describe('BananaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BananaDataService]
    });
  });

  it('should ...', inject([BananaDataService], (service: BananaDataService) => {
    expect(service).toBeTruthy();
  }));
});
