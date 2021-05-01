import { HttpClient } from '@angular/common/http';
import {
  Spectator,
  createComponentFactory,
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { Address } from './address.model';
import { ListCepAPI } from './list-cep.api';
import { ListCepComponent } from './list-cep.component';

import { ListCepService } from './list-cep.service';

describe('ListCepComponent', () => {
  const createComponent = createComponentFactory({
    component: ListCepComponent,
    mocks: [
      ListCepAPI,
    ],
    detectChanges: false
  });

  const createService = createServiceFactory({
    service: ListCepService,
  });

  let spectatorComponent: Spectator<ListCepComponent>;
  let spectatorService: SpectatorService<ListCepService>;
  let component: ListCepComponent;

  beforeEach(() => {
    spectatorComponent = createComponent();
    spectatorService = createService();
    component = spectatorComponent.component;
  });

  it('should exist component', () => {
    expect(spectatorComponent).toBeTruthy();
  });

  it('should return result mocked', async () => {
    const service = spectatorComponent.inject<ListCepService>(ListCepService);
    const apiMocked = spectatorService.inject<ListCepAPI>(ListCepAPI);
    apiMocked.findAddress.andReturn(fakeResponse);
    spectatorComponent.detectChanges();
    
    const result = await service.getAddress();
    console.log(result);

    expect(dataExpect).toEqual(result);
  });

  const fakeResponse: Address = {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    complemento: 'lado ímpar',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    ddd: '11',
    siafi: '7107'
  };

  const dataExpect: Address = {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    complemento: 'lado ímpar',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    ddd: '11',
    siafi: '7107',
    enderecoCompleto: 'Praça da Sé, Sé, São Paulo'
  };
});