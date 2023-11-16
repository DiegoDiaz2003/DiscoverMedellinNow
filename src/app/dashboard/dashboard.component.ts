// dashboard.component.ts

import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ApiActivity } from '../services/actividades_s/actividades.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datos: any;
//  eliminarConfirmado: boolean = false;
//  elementoAEliminarId: number | null = null;

  constructor(private apiService: ApiActivity) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
    });
  }

//  eliminarActividad(id: number): Observable<any> {
//    return this.apiService.eliminarActividad(id);
//  }
//
//  confirmarEliminar(id: number) {
//    this.eliminarConfirmado = true;
//    this.elementoAEliminarId = id;
//  }
//
//  realizarEliminacion() {
//    if (this.elementoAEliminarId !== null) {
//      this.eliminarActividad(this.elementoAEliminarId).subscribe(
//        () => {
//          console.log('Elemento eliminado');
//          this.actualizarListaDespuesDeEliminacion();
//        },
//        (error: any) => console.error('Error al eliminar elemento', error)
//      );
//    }
//
//    this.eliminarConfirmado = false;
//    this.elementoAEliminarId = null;
//  }
//
//  cancelarEliminar() {
//    this.eliminarConfirmado = false;
//    this.elementoAEliminarId = null;
//  }
//
//  private actualizarListaDespuesDeEliminacion() {
//    this.apiService.getDatos().subscribe(data => {
//      this.datos = data;
//    });
//  }
}
