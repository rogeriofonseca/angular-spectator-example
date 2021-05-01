import { Injectable } from '@angular/core';
import { Address } from './address.model';
import { ListCepAPI } from './list-cep.api';
@Injectable({
  providedIn: 'root'
})
export class ListCepService {

  constructor(private api: ListCepAPI){}

  async getAddress(cep: string): Promise<Address> {
    const result = await this.api.findAddress(cep);
    result.enderecoCompleto = `${result.logradouro}, ${result.bairro}, ${result.localidade}`;
    console.log(result);
    
    return result;
  }

  getTest(): string {
    return 'Hello: fixed text;';
  }
}
