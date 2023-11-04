import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { NavbarComponent } from './Componentes/navbar/nabvar.component';
import { InicioComponent } from './Inicio/inicio.component';
import { MapaComponent } from './mapa/mapa.component';
import { atraccionesComponent } from "./atracciones/atracciones.component";
import { HttpClientModule } from '@angular/common/http';
import { ActividadesComponent } from './actividades/actividades.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './Login/Login.component';
import { FormsModule } from '@angular/forms';
import { BandejaPaisaComponent } from './bandeja-paisa/bandeja-paisa.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

import { ApiActivity } from "./services/actividades_s/actividades.service";



@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    NavbarComponent,
    InicioComponent,
    MapaComponent,
    atraccionesComponent,
    ActividadesComponent,
    RegistroComponent,
    LoginComponent,
    BandejaPaisaComponent,
    FormularioRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiActivity],
  bootstrap: [AppComponent]
})
export class AppModule { }
