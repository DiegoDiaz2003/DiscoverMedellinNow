import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAttraction {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(`${this.apiUrl}/attraction/`);
  }
  
 uploadImage(activityId: number, image: File) {
  const formData = new FormData();
  formData.append('image', image);

  return this.http.post(`${this.apiUrl}/api/activities/${activityId}/upload-image/`, formData);
  }
}

  

