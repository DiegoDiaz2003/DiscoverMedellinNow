import { Time } from "@angular/common";
import { Opciones } from "./opciones.model";

export class Actividad extends Opciones{
    patrocinador:String;

    constructor(id:number, nombre: string, descripcion: string, imagen:String, puntaje:DoubleRange, telefono:String, indicaciones:String,sitioweb:String, horaaper:Time, horacie:Time, patrocinador:String) {
    super(id, nombre, imagen, puntaje,telefono, indicaciones,sitioweb, horaaper, horacie, descripcion);
    this.patrocinador=patrocinador;
    
  }
}