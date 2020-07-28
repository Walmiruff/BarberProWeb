import { TestBed, inject } from '@angular/core/testing';

import { PrecosService } from './precos.service';

describe('PrecosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecosService]
    });
  });

  it('should be created', inject([PrecosService], (service: PrecosService) => {
    expect(service).toBeTruthy();
  }));
});
