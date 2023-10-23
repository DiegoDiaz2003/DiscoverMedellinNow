import { Component, OnInit } from "@angular/core";
import { ApiAttraction } from '../services/atraccion_s/atraccion.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-atracciones',
    templateUrl: './atracciones.component.html',
    styleUrls: ['./atracciones.component.css']
    })

export class atraccionesComponent implements OnInit {
  datos: any;

  constructor(private apiService: ApiAttraction) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
    });
  }
}