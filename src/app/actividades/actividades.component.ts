import { Component, OnInit } from '@angular/core';
import { ApiActivity } from '../services/actividades_s/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
    datos: any;

    constructor(private apiService: ApiActivity) {}

    ngOnInit() {
      this.apiService.getDatos().subscribe(data => {
        this.datos = data;
      });
  }

}
