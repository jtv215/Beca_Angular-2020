import { Component, OnInit } from '@angular/core';
import{ClientesService} from './../clientes.service';
import { Cliente, Grupo } from '../../models/cliente.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente:Cliente;
  grupos:Grupo[];

  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
  this.cliente = this.clienteService.nuevoCliente();
  this.grupos = this.clienteService.getGrupos();
  }

  nuevoCliente(){
    this.clienteService.agregarCliente(this.cliente);
    console.log(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }
}
