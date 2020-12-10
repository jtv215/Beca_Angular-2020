import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hijopr',
  templateUrl: './hijopr.component.html',
  styleUrls: ['./hijopr.component.css']
})
export class HijoprComponent implements OnInit {

  @Input('propiedadHijo') datos:any
  constructor() { }

  ngOnInit(): void {

  }

}
