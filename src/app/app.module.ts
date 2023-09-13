import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './Componentes/restaurante/restaurante.component';
import { NavbarComponent } from './Componentes/navbar/nabvar.component';
import { InicioComponent } from './Componentes/Inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    NavbarComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
