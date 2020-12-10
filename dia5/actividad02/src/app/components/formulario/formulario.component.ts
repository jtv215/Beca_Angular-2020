import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: any;
  url:any;
  check=false;
  alert=false;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl('Jefferson', Validators.required),
      apellidos1: new FormControl('Tomala', Validators.required),
      apellidos2: new FormControl('Villarreal', Validators.required),
      telefono: new FormControl('632478404', [Validators.required, Validators.minLength(9)]),
      email: new FormControl('jeffersonmax90@gmail.com', [Validators.required,Validators.email]),
      detalle: new FormControl('Detalle', Validators.required),
      calle: new FormControl('calle jesus', Validators.required),
      numero: new FormControl('64', Validators.required),
      puerta: new FormControl('a', Validators.required),
      cp: new FormControl('08888', Validators.required),
      municipio: new FormControl('Almeria', Validators.required),
      provincia: new FormControl('Almeria', Validators.required),

    });    
    this.saveLocalStore();
    this.getLocalStore();  
  
  }

  get f () { return this.form.controls; }

  onSubmit() {
    this.alert=true;
    this.limpiar();
    window.scroll(0,0);
  }

  limpiar() {   
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos1: new FormControl('', Validators.required),
      apellidos2: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      detalle: new FormControl('', Validators.required),
      calle: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      puerta: new FormControl('', Validators.required),
      cp: new FormControl('', Validators.required),
      municipio: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),

    });

  } 

  //Guardo una foto url en el localstore
  saveLocalStore() {
    let url = "https://static3.elnortedecastilla.es/www/multimedia/201810/08/media/cortadas/cris-kirE-U601181378919SLG-624x385@El%20Norte.jpg";
    localStorage.setItem('ruta_dispositivo', JSON.stringify(url));
    this.url= url;
    this.check=true;
  }
  //conseguir una variable en el localstore 
  getLocalStore() {
    let aux = JSON.parse(localStorage.getItem('ruta_dispositivo'));   
    this.url= aux;   
  }

  //Borrar una variable en el localstore 
  borrarLocalstore(){
    let url = null;
    localStorage.setItem('ruta_dispositivo', JSON.stringify(url));
    this.getLocalStore();
    this.check=false;
  }

}
