import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class ListCepAPI {
    constructor(private http: HttpClient) { }

    findAddress(cep: string): Promise<Address> {
      const url = `viacep.com.br/ws/$cep/jso/`;
      return this.http.get<Address>(url).toPromise();
    }
}