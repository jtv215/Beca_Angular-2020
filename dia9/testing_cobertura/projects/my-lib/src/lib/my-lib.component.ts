import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
      {{valor}}
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  @Input('valor') valor:any;
  constructor() {
    this.valor='probando por defecto';
   }

  ngOnInit(): void {
  }

}
