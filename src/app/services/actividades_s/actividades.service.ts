import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';




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
}

