import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpyObject } from '@ngneat/spectator';
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
    imports: [FormsModule],
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

  let service: SpyObject<ListCepService>;
  let apiMocked: SpyObject<ListCepAPI>;
  
  beforeEach(() => {
    spectatorComponent = createComponent();
    spectatorService = createService();
    component = spectatorComponent.component;
    service = spectatorComponent.inject<ListCepService>(ListCepService);
    apiMocked = spectatorService.inject<ListCepAPI>(ListCepAPI);
    apiMocked.findAddress.andReturn(Promise.resolve(fakeResponse));
  });
  
  it('should exist component', () => {
    expect(component).toBeTruthy();
  });

  it('should exist service', () => {
    expect(service).toBeTruthy();
  });

  it('should exist apiMocked', () => {
    expect(apiMocked).toBeTruthy();
  });
  
  it('should check service result', async () => {
    const result = await service.getAddress();
    console.log(result);
    
    expect(dataExpect).toEqual(result);
  });
  
  it('should click button', async () => {
    spectatorComponent.click('#searchAddress');
    spectatorComponent.detectChanges();
    const enderecoCompleto = spectatorComponent.query('#enderecoCompleto').textContent;

    const enderecoCompletoExpected = 'Endere??o completo: Pra??a da S??, S??, S??o Paulo'
    expect(enderecoCompletoExpected).toEqual(enderecoCompleto);
  });

  const fakeResponse: Address = {
    cep: '01001-000',
    logradouro: 'Pra??a da S??',
    complemento: 'lado ??mpar',
    bairro: 'S??',
    localidade: 'S??o Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    ddd: '11',
    siafi: '7107'
  };

  const dataExpect: Address = {
    cep: '01001-000',
    logradouro: 'Pra??a da S??',
    complemento: 'lado ??mpar',
    bairro: 'S??',
    localidade: 'S??o Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    ddd: '11',
    siafi: '7107',
    enderecoCompleto: 'Pra??a da S??, S??, S??o Paulo'
  };
});