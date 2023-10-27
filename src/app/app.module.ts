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
import { FormsModule } from '@angular/forms';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
