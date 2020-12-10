import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClienteComponent } from './alta-cliente.component';
import { Cliente, Grupo } from '../../models/cliente.model';
import { ClientesModule } from '../clientes.module';
import { UsuariosService } from '../../../app/servicio/usuarios.service';
import { ClientesService } from '../clientes.service';
describe('AltaClienteComponent', () => {
  let clienteService: ClientesService;
  let component: AltaClienteComponent;
  let fixture: ComponentFixture<AltaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [      
        ClientesModule,   
       

      ],
      declarations: [ AltaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /*  it('Test funcion nuevoCliente', () => {
    let cliente:Cliente;
    cliente.nombre= 'Jefferson';
    cliente.cif = '123456';
    cliente.direccion = 'Plaza españa';
    cliente.grupo = 1;
    cliente.id = 1;

    component.nuevoCliente();


    expect(component).toBeTruthy();
  }); */

 /*  it('Test funcion agregar cliente', () => {

    var grupos:Grupo[];
    grupos= clienteService.getGrupos();
    for (const iterator of grupos) {
      console.log("nombre:" + iterator.nombre);
    }


    expect(component).toBeTruthy();
  });
 */

});
