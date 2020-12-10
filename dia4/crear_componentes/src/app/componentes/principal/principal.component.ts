import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personaData:any = {nombre: 'maria', apellidos:' de la 0', edad:27};
  constructor() { }

  ngOnInit(): void {
  }

}
