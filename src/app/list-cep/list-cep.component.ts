import { Component, OnInit } from '@angular/core';
import { Address } from './address.model';
import { ListCepService } from './list-cep.service';

@Component({
  selector: 'app-list-cep',
  templateUrl: './list-cep.component.html',
  styleUrls: ['./list-cep.component.css']
})
export class ListCepComponent implements OnInit {

  constructor(private service: ListCepService) { }
  address: Address;

  async ngOnInit(): Promise<void> {
    const teste = this.service.getAddress('38660');
    console.log(teste);
  }
}
