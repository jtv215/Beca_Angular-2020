import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1Component } from './c1.component';

describe('C1Component', () => {
  let component: C1Component;
  let fixture: ComponentFixture<C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test variable curso1', () => {
    var curso1 = component.curso1.nombre;
    console.log(curso1);
    expect(curso1).toEqual("Beca Angular");
  });

  it('Test btnIntercambiar curso1 vale curso2', () => {
    component.btnIntercambiar();

    var curso2 = component.curso2.nombre;
    expect(curso2).toEqual("Beca Angular");
  });

  it('Test btnIntercambiar curso2 vale curso2', () => {
    component.btnIntercambiar();

    var curso1 = component.curso1.nombre;
    expect(curso1).toEqual("Beca Java");
  });

  it('Test contador es igual 0', () => {
    component.functionBuilding();
    var contador = component.contador;  
    expect(contador).toEqual(0);
  });
 
});
