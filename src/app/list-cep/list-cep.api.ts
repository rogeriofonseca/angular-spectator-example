import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class ListCepAPI {
    constructor(private http: HttpClient) { }

    findAddress(cep: string): Promise<Address> {
      const url = `http://viacep.com.br/ws/${cep}/json/`;
      return this.http.get<Address>(url).toPromise();
    }
}