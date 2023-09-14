import { Time } from "@angular/common";

export class Opciones{
    id:number;
    nombre:String;
    imagen:String;
    puntaje:DoubleRange;
    telefono:String;
    indicaciones:String;
    sitioweb:String;
    horaaper:Time;
    horacie:Time;
    descripcion:String;

    constructor(id:number, nombre:String, imagen:String,puntaje:DoubleRange,telefono:String,indicaciones:String,sitioweb:String,horaaper:Time,horacie:Time,descripcion:String){
        this.id=id;
        this.nombre=nombre;
        this.imagen=imagen;
        this.puntaje=puntaje;
        this.telefono=telefono;
        this.indicaciones=indicaciones;
        this.sitioweb=sitioweb;
        this.horaaper=horaaper;
        this.horacie=horacie;
        this.descripcion=descripcion;

    }

}