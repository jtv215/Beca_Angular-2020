import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  @Input('dataCurso1') curso1:any;
  @Input('dataContador') contador:number;

  constructor() { 
    this.curso1={ 'nombre': '', 'total_dias': 0, 'descripcion': '' };

  }

  ngOnInit(): void {

  }

}
