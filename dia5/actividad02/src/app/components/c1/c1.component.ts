import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  curso1: any;
  curso2: any;
  aux: any;
  contador: number;
  constructor() { }

  ngOnInit(): void {
    this.curso1 = { 'nombre': 'Beca Angular', 'total_dias': 9, 'descripcion': 'Curso sobre Angular y TypeScript' };
    this.curso2 = { 'nombre': 'Beca Java', 'total_dias': 10, 'descripcion': 'Formación sobnre Java' };
    this.contador = 0;
  }

  btnIntercambiar() {   
    this.contador = (this.contador) + 1;  

    //Guardar en una variable auxiliar curso 2
    let nombreaux = this.curso2.nombre;
    let descripcionaux = this.curso2.descripcion;

    //cambia el curso 1 al curso 2
    this.curso2.nombre = this.curso1.nombre;
    this.curso2.descripcion = this.curso1.descripcion;

    //cambia el curso 2 a curso 1
    this.curso1.nombre = nombreaux;
    this.curso1.descripcion = descripcionaux;
  }

  functionBuilding() {  
    var value = (<HTMLInputElement>document.getElementById('input')).value;    
    this.contador = Number(value);
    console.log(this.contador);
    
  }
}
