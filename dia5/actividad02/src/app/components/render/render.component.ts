import { Component, ElementRef, OnInit, Renderer2, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {


  check = false;
  constructor(public renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

    //Añade titulo
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Titulo: Practicando Render con Angular');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);

    //Añade Input deshabilitado
    const input = this.renderer.createElement('input');    
    input.setAttribute("disabled", 'true');
    this.renderer.appendChild(this.el.nativeElement, input);

    //Añade boton
    const boton = this.renderer.createElement('button');
    const text2 = this.renderer.createText('Habilitar y deshabilitar');
    this.renderer.appendChild(boton, text2);
    this.renderer.appendChild(this.el.nativeElement, boton);

    //Función del botón
    this.renderer.listen(this.el.nativeElement, 'click', () => {

      if (this.check == false) {//habilito el input
        input.removeAttribute("disabled");
        this.check = true;
      } else {//deshabilito el input
        input.setAttribute("disabled", 'true');
        this.check = false;
      }
    });
  }

}




