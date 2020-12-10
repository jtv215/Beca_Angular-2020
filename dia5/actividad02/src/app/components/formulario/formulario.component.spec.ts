import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test btnGuardar un formulario resultado vacio', () => {
    component.onSubmit();    
    var nombre = component.form.value.nombre; 
    expect(nombre).toEqual("");
  });

  it('Test borrar localstore sea null', () => {
    component.borrarLocalstore();  
    component.getLocalStore();
    var localstore = component.url;   
    expect(localstore).toEqual(null);
  });


});
