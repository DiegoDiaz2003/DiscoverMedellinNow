import { Component,OnInit } from "@angular/core";
import { ApiActivity } from '../services/actividades_s/actividades.service';


@Component({
    selector: 'app-dashboard ',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    datos: any;
    eliminarConfirmado: boolean = false; 


    constructor(private apiService: ApiActivity) {}

    ngOnInit() {
      this.apiService.getDatos().subscribe(data => {
        this.datos = data;
      });
  }
  confirmarEliminar() {
    console.log('Elemento eliminado');
  }

}