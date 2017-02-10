/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MooDataService } from './moo-data.service';

describe('MooDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MooDataService]
    });
  });

  it('should ...', inject([MooDataService], (service: MooDataService) => {
    expect(service).toBeTruthy();
  }));
});
