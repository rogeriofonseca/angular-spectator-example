import { Component, Input, OnInit } from '@angular/core';
import { Address } from './address.model';
import { ListCepService } from './list-cep.service';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@Component({
  selector: 'app-list-cep',
  templateUrl: './list-cep.component.html',
  styleUrls: ['./list-cep.component.css']
})
export class ListCepComponent implements OnInit {
  address: Address;
  cepNumber = '01001000';

  constructor(private service: ListCepService) { }

  ngOnInit():void {
    this.clickSearch();
  }
  
  
  async clickSearch(): Promise<void> {
    this.address = await this.service.getAddress(this.cepNumber);
    window.event.preventDefault();
  }

}
