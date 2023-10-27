import { Component, OnInit } from "@angular/core";
import * as L from 'leaflet';



@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit{
    map?: L.Map;

    constructor() {
    // Inicializa el mapa aquí
  }

  ngOnInit() {
    if (this.map) {
      this.map = L.map('map').setView([37.7749, -122.4194], 12);

      // Agrega la capa de MapQuest
      L.tileLayer('https://www.mapquestapi.com/staticmap/v5/map?key=5LcgzHtXYEXdjAvJZRNILqMz37ECpY4W&center={center}&zoom={zoom}', {
        maxZoom: 18,
        attribution: 'MapQuest'
      }).addTo(this.map);
    }
  }
}