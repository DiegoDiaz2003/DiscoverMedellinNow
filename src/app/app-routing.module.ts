import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./restaurante/restaurante.component";
import { InicioComponent } from "./Inicio/inicio.component";
import { atraccionesComponent } from './atracciones/atracciones.component';
import { MapaComponent } from './mapa/mapa.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './Login/Login.component';



const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {path: 'inicio', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'atracciones', component: atraccionesComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
