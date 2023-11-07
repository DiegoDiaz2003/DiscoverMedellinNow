import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
    formData: FormData = new FormData();

    name: string = '';
    email: string = '';
    phone: string = '';
    contrasenia: string = '';
    account_type: string = '';
    

    constructor(private http: HttpClient) { }

    submitForm() {
    console.log("Datos del formulario:", "Nombre:", this.name, "Email:", this.email, "Teléfono:", this.phone, "Contraseña:", this.contrasenia, "Tipo de cuenta:", this.account_type);
    this.formData.append('name', this.name); 
    this.formData.append('email', this.email); 
    this.formData.append('phone', this.phone); 
    this.formData.append('contrasenia', this.contrasenia); 
    this.formData.append('account_type', this.account_type);
    

    this.http.post('http://127.0.0.1:8000/users/', this.formData)
      .subscribe((response) => {
        
      });
    }
} 
