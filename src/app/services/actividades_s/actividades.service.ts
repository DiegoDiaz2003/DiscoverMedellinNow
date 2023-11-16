import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ApiActivity {
  private apiUrl = 'https://api-activity-dmn.onrender.com';

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(`${this.apiUrl}/activities/`);
  }

   createActivity(formData: any) {
    // Realiza una solicitud POST para crear una nueva actividad en la base de datos
    return this.http.post(`${this.apiUrl}/activities/`, formData);
  }
eliminarDato(id: number): Observable<any> {
  const url = `${this.apiUrl}/actividades/${id}`;
  return this.http.delete(url).pipe(
    catchError((error: any) => {
      console.error('Error al eliminar elemento', error);
      return throwError(error); // Puedes decidir si quieres relanzar el error o manejarlo de otra manera
    })
  );
}


}

