import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./restaurante/restaurante.component";
import { InicioComponent } from "./Inicio/inicio.component";
import { atraccionesComponent } from './atracciones/atracciones.component';
import { MapaComponent } from './mapa/mapa.component';
import { ActividadesComponent } from './actividades/actividades.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {path: 'inicio', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'atracciones', component: atraccionesComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'mapa', component: MapaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
