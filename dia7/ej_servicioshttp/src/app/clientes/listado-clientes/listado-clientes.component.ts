import { Component, OnInit } from '@angular/core';
import{ClientesService} from './../clientes.service';
import { Cliente, Grupo } from '../../models/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes:Cliente[];
  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();

  }

}
