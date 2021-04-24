import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCepService {

  constructor(private http: HttpClient) { }

  getAddress(): any {
    const url = 'viacep.com.br/ws/01001000/json/';
    return this.http.get<any>(url);
  }
}
