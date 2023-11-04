import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./restaurante/restaurante.component";
import { InicioComponent } from "./Inicio/inicio.component";
import { atraccionesComponent } from './atracciones/atracciones.component';
import { MapaComponent } from './mapa/mapa.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './Login/Login.component';
import { BandejaPaisaComponent } from './bandeja-paisa/bandeja-paisa.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { DashboardComponent } from "./dashboard/dashboard.component";



const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {path: 'inicio', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'atracciones', component: atraccionesComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bandeja-paisa', component: BandejaPaisaComponent},
  {path: 'formulario-registro', component: FormularioRegistroComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
