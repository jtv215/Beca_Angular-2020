import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './components/suma/suma.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
