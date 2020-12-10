import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  constructor() {
    console.log('Creación del componente 4');
   }

  ngOnInit(): void {
    console.log('Inicializando componente 4');
  }

}
