import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { C1Component } from './compomentes/c1/c1.component';
import { C2Component } from './compomentes/c2/c2.component'; */
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HijoprComponent } from './componentes/hijopr/hijopr.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
/*     C1Component,
    C2Component, */
    PrincipalComponent,
HeaderComponent,
FooterComponent,
HijoprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
