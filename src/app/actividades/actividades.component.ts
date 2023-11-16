import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PresentacionComponent } from "../presentacion/presentacion.component";
import { ApiActivity } from '../services/actividades_s/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})

export class ActividadesComponent implements OnInit {
    datos: any;

    //modalService: BsModalService = {} as BsModalService;

    constructor(private apiService: ApiActivity, private modalService: BsModalService) {}

    ngOnInit() {
      this.apiService.getDatos().subscribe(data => {
        this.datos = data;
      });
  }
    openService(product: any) {
    const initialState = {
      product
    };

    const modalConfig = {
      class: 'mi-modal-personalizado', 
      initialState
    };

    this.modalService.show(PresentacionComponent, { initialState });
  }
}
