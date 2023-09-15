import { Opciones } from "./opciones.model";
export class DoubleRange {
    constructor(public min: number, public max: number) {}
}
export class Time {
    constructor(public horas: number, public minutos: number) {}
}

export class Actividad extends Opciones{
    private _patrocinador:String;

    constructor(id:number, nombre: string, descripcion: string, imagen:String, puntaje:DoubleRange, telefono:String, indicaciones:String,sitioweb:String, horaaper:Time, horacie:Time, patrocinador:String) {
    super(id, nombre, imagen, puntaje,telefono, indicaciones,sitioweb, horaaper, horacie, descripcion);
    this._patrocinador=patrocinador;
    
  }
    get patrocinador(): String {
        return this._patrocinador;
    }
    set patrocinador(value: string) {
        if (value.length > 50) {
            throw new Error('El nombre del patrocinador supera el numero de caracteres.');
        }
        this._patrocinador = value;
    }

}
