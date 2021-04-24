import { TestBed } from '@angular/core/testing';

import { ListCepService } from './list-cep.service';

describe('ListCepService', () => {
  let service: ListCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
