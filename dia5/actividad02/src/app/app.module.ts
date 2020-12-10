import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { C4Component } from './components/c4/c4.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RenderComponent } from './components/render/render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    FooterComponent,
    HeaderComponent,
    RenderComponent,
    PipesComponent,
    FormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
