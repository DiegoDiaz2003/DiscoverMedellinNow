import {  Opciones } from "./opciones.model";

export class DoubleRange {
    constructor(public min: number, public max: number) {}
}
export class Time {
    constructor(public horas: number, public minutos: number) {}
}


export class Atraccion extends Opciones{

    constructor(id:number, nombre: string, descripcion: string, imagen:String, puntaje:DoubleRange, telefono:String, indicaciones:String,sitioweb:String, horaaper:Time, horacie:Time) {
    super(id, nombre, imagen, puntaje,telefono, indicaciones,sitioweb, horaaper, horacie, descripcion);
    
  }
}