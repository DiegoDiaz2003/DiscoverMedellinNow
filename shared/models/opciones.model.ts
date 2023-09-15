export class DoubleRange {
    constructor(public min: number, public max: number) {}
}
export class Time {
    constructor(public horas: number, public minutos: number) {}
}

export class Opciones{
    id:number;
    _nombre:String;
    _imagen:String;
    _puntaje:DoubleRange;
    _telefono:String;
    _indicaciones:String;
    _sitioweb:String;
    _horaaper:Time;
    _horacie:Time;
    _descripcion:String;

    constructor(id:number, nombre:String, imagen:String,puntaje:DoubleRange,telefono:String,indicaciones:String,sitioweb:String,horaaper:Time,horacie:Time,descripcion:String){
        this.id=id;
        this._nombre=nombre;
        this._imagen=imagen;
        this._puntaje=puntaje;
        this._telefono=telefono;
        this._indicaciones=indicaciones;
        this._sitioweb=sitioweb;
        this._horaaper=horaaper;
        this._horacie=horacie;
        this._descripcion=descripcion;

    }
    get nombre(): String {
        return this._nombre;
    }
    set nombre(value: string) {
        if (value.length > 50) {
            throw new Error('El nombre supera el numero de caracteres permitido.');
        }
        this._nombre = value;
    }

    get imagen(): String {
        return this._imagen;
    }
    set imagen(value: string) {
        if (value.length > 50) {
            throw new Error('La imagen supera el tamaño de peso permitido.');
        }
        this._imagen = value;
    }
    get puntaje(): DoubleRange {
        return this._puntaje;
    }
    set puntaje(value: string) {
        if (value.length > 5) {
            throw new Error('El puntaje debe estar en el rango de 1 y 5.');
        }
        
        this._puntaje = new DoubleRange(1.0, 5.0);

    }
    get telefono(): String {
        return this._telefono;
    }
    set telefono(value: string) {
        if (value.length > 10) {
            throw new Error('El telefono no puede superar los 10 caracteres.');
        }
        this._telefono = value;
    }
    get indicaciones(): String {
        return this._indicaciones;
    }
    set indicaciones(value: string) {
        if (value.length > 50) {
            throw new Error('Las indicaciones no han sido encontrada.');
        }
        this._indicaciones = value;
    }
    get sitioweb(): String {
        return this._sitioweb;
    }
    set sitioweb(value: string) {
        if (value.length > 50) {
            throw new Error('El enlace del sitio web no parece ser correcto.');
        }
        this._sitioweb = value;
    }
    get horaaper(): Time {
        return this._horaaper;
    }
    set horaaper(value: string) {
        const partes = value.split(':');
        if (partes.length !== 2) {
            throw new Error('El formato de hora debe ser HH:MM.');
        }
        this._horaaper = new Time(parseInt(partes[0], 10), parseInt(partes[1], 10));
    }
    get horacie(): Time {
        return this._horacie;
    }
    set horacie(value: string) {
        const partes = value.split(':');
        if (partes.length !== 2) {
            throw new Error('El formato de hora debe ser HH:MM.');
        }
        this._horacie = new Time(parseInt(partes[0], 10), parseInt(partes[1], 10));
    }
    get descripcion(): String {
        return this._descripcion;
    }
    set descripcion(value: string) {
        if (value.length > 100) {
            throw new Error('La descripcion supera el numero de caracteres permitidos.');
        }
        this._descripcion = value;
    }
}
