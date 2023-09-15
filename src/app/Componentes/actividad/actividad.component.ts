export class Actividad {
  private _nombre: string;
  private _descripcion:string;

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    if (value.length > 50) {
      throw new Error('El nombre de la actividad no puede ser tan largo.');
    }
    this._nombre = value;
  }
  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    if (value.length > 100) {
      throw new Error('La descripcion ha superado el numero de caracteres.');
    }
    this._descripcion = value;
  }

  constructor(nombre:string, descripcion:string) {
    this._nombre=nombre; 
    this._descripcion=descripcion;
  }
}
  

