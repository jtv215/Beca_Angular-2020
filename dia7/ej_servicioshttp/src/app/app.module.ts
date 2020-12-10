import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { UsuarioComponent } from './compoents/usuario/usuario.component';
import {HttpClientModule} from '@angular/common/http';
import { ListadoPhotoComponent } from './compoents/listado-photo/listado-photo.component';
import { PhotoComponent } from './compoents/photo/photo.component';
import { EditarPhotoComponent } from './compoents/editar-photo/editar-photo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListadoPhotoComponent,
    PhotoComponent,
    EditarPhotoComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
