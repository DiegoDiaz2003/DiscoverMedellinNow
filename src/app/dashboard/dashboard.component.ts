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


  constructor(private apiService: ApiActivity) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
    });
  }
  eliminarDato(id: number) {
    console.log('ID a eliminar:', id);
    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
      this.apiService.eliminarDato(id).subscribe(
        () => {
          console.log('Elemento eliminado');
          // Puedes actualizar la lista después de la eliminación si es necesario
          this.actualizarListaDespuesDeEliminacion();
        },
        (error: any) => console.error('Error al eliminar elemento', error)
      );
    }
  }
  private actualizarListaDespuesDeEliminacion() {
    this.apiService.getDatos().subscribe((data) => {
      this.datos = data;
    });
  }
}
