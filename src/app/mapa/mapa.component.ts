import { Component, OnInit, AfterViewInit } from "@angular/core";

declare var google: any;


@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})

export class MapaComponent {
  position={
    lat:6.2443382,
    lng:-75.573553,
  }

  

}