import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./restaurante/restaurante.component";



const routes: Routes = [
  {path: 'restaurante', component: RestauranteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
