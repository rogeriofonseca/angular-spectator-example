import { HttpClient } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { ListCepService } from './list-cep.service';

describe('ListCepService', () => {
  let service: ListCepService;
  let spectator: SpectatorService<ListCepService>;

  const createComponent = createServiceFactory({
    service: ListCepService,
    mocks: [
      ListCepService,
      HttpClient,
    ],
    providers: [
      HttpClient,
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
