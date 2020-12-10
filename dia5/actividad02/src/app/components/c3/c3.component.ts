import { TranslationWidth } from '@angular/common';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  @Input('dataCurso2') curso2:any;
  @Input('dataContador') contador:number;
  constructor() { 
    this.curso2={ 'nombre': '', 'total_dias': 0, 'descripcion': '' };
  }

  ngOnInit(): void {
  }

}
