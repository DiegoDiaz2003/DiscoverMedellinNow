import { Injectable } from '@angular/core';
import { Opciones } from '../models/opciones.model';
import { Actividad } from '../models/actividades.model';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {
  private actividades: Opciones[] = [];

   getProducts(): Opciones[] {
    return this.actividades;
  }

  getProductById(id: number): Actividad | undefined {
    return this.actividades.find(Actividad => Actividad.id === id);
  }

  // Método para agregar una nueva actividad
  addProduct(actividad: Actividad): void {
    this.actividades.push(actividad);
  }

  // Método para actualizar una actividad existente
  updateProduct(actividad: Actividad): void {
    const index = this.actividades.findIndex(p => p.id === actividad.id);
    if (index !== -1) {
      this.actividades[index] = actividad;
    }
  }

  // Método para eliminar una actividad por ID
  deleteProduct(id: number): void {
    const index = this.actividades.findIndex(Actividad => Actividad.id === id);
    if (index !== -1) {
      this.actividades.splice(index, 1);
    }
  }
}
