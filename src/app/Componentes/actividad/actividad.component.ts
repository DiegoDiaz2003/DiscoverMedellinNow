export class Actividad {
  private _nombre: string;

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    if (value.length > 50) {
      throw new Error('El nombre de la actividad no puede ser tan largo.');
    }
    this._nombre = value;
  }

  constructor(nombre:string) {
    this._nombre=nombre; 
  }
}
  

