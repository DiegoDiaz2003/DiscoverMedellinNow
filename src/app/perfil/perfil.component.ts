import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  profileData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Agrega el token de autenticación
        })
      };

      this.http.get('http://127.0.0.1:8000/profile/', httpOptions).subscribe(
        data => {
          this.profileData = data;
        },
        error => {
          console.error('Error en la solicitud:', error);
        });
    }
  }
}
