import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  public listado:any[];
  constructor() { 
    this.listado = [
      { "Tipo": "fijo", "MSISDN": "908345111", "Saldo": null },
      { "Tipo": "móvil", "MSISDN": "600123111", "Saldo": null },
      { "Tipo": "móvil", "MSISDN": "600123112", "Saldo": 21 },
      { "Tipo": "fijo", "MSISDN": "908345112", "Saldo": null },
      { "Tipo": "fijo", "MSISDN": "908345113", "Saldo": null },
      { "Tipo": "móvil", "MSISDN": "600123113", "Saldo": 3 },
      { "Tipo": "fijo", "MSISDN": "908345116", "Saldo": null },
      { "Tipo": "móvil", "MSISDN": "600123114", "Saldo": null },
      { "Tipo": "fijo", "MSISDN": "908345113", "Saldo": null },
      { "Tipo": "fijo", "MSISDN": "908345113", "Saldo": null }]
  }

  ngOnInit(): void { 
    for (let item of this.listado) {
      console.log(item);
    }
  }

}
