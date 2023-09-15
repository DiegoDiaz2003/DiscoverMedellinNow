import { Opciones } from "./opciones.model";

export class DoubleRange {
    constructor(public min: number, public max: number) {}
}
export class Time {
    constructor(public horas: number, public minutos: number) {}
}

export class Restaurante extends Opciones{
    public _menu:String;
    public _tipoComida:String;

    constructor(id:number, nombre: string, descripcion: string, imagen:String, puntaje:DoubleRange, telefono:String, indicaciones:String,sitioweb:String, horaaper:Time, horacie:Time, menu:String, tipoComida:String) {
    super(id, nombre, imagen, puntaje,telefono, indicaciones,sitioweb, horaaper, horacie, descripcion);
    this._menu=menu;
    this._tipoComida=tipoComida;
    
  }
    get menu(): String {
        return this._menu;
    }
    set patrocinador(value: string) {
        if (value.length > 50) {
            throw new Error('El menu supera el peso.');
        }
        this._menu = value;
    }
    get tipoComida(): String {
        return this._tipoComida;
    }
    set tipoComida(value: string) {
        if (value.length > 50) {
            throw new Error('El tipo de comida supera el numero de caracteres.');
        }
        this._tipoComida = value;
    }
}